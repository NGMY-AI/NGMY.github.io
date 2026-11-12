((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A8,Ak,Al,W,A9,Am,An,C={
uh(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
ha7(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KA(d){var w
if(d===0)return $.DI()
if(d===1)return $.a3R()
if(d===2)return $.hGP()
if(Math.abs(d)<4294967296)return C.bbV(A.o.M(d))
w=C.i16(d)
return w},
bbV(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.uh(4,w)
return new C.oi(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.uh(1,w)
return new C.oi(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.uh(2,w)
return new C.oi(v===0?!1:s,w,v)}v=A.o.aq(A.o.galu(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.uh(v,w)
return new C.oi(v===0?!1:s,w,v)},
i16(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DI()
w=$.hGO()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lp(A.aH.gaU(w))
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
ha8(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hsT(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hsO(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.F(f,16)===0)return C.ha8(d,e,s,g)
w=e+s+1
C.hsT(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i19(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cO8(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i17(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbW(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hsU(d,e,f,g,h,i){var w,v,u,t,s,r
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
i18(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oi:function oi(d,e,f){this.a=d
this.b=e
this.c=f},
cO9:function cO9(){},
cOa:function cOa(){},
cOb:function cOb(d,e){this.a=d
this.b=e},
cOc:function cOc(d){this.a=d},
aTf:function aTf(d,e){this.a=d
this.b=e},
hiz(d,e,f){var w=new C.SN(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SN:function SN(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4N:function a4N(d,e){this.a=d
this.b=e},
bKb:function bKb(d){this.a=d
this.c=this.b=0},
hK9(){return new C.bIt()},
bIt:function bIt(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cG8:function cG8(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i0N(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cb(d.gd2w(d)))
v=f*2+2
u=C.hqy(C.hqA(),64)
t=new C.coQ(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.coR(e,1000,v)
s=new Uint8Array(v)
return A.aH.dt(s,0,t.cQl(w,0,s,0))},
cG6:function cG6(d,e){this.c=d
this.d=e},
ayO:function ayO(d,e){this.a=d
this.b=e},
cG9:function cG9(d,e,f,g){var _=this
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
baB:function baB(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cG7:function cG7(){this.a=$},
hsn(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hJT(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bH2:function bH2(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hgb(d,e){e&=31
return(d&$.qu[e])<<e>>>0},
nN(d,e){e&=31
return(d>>>e|C.hgb(d,32-e))>>>0},
hqz(d){var w,v=new C.aum()
if(B.iU(d))v.aMA(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hqA(){var w=C.hqz(0),v=new Uint8Array(4),u=x.S
u=new C.coS(w,v,A.Fj,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.ir(0)
return u},
hqy(d,e){var w=new C.coO(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
coN:function coN(){},
coR:function coR(d,e,f){this.a=d
this.b=e
this.c=f},
coL:function coL(){},
aul:function aul(d){this.a=d},
coQ:function coQ(d){this.a=$
this.b=d
this.c=$},
coM:function coM(){},
coK:function coK(){},
aum:function aum(){this.b=this.a=$},
coP:function coP(){},
coS:function coS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
coO:function coO(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
coJ:function coJ(){},
coI:function coI(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSq:function bSq(){},
bSr:function bSr(d){this.a=d},
czf:function czf(){},
bTs:function bTs(d,e){this.a=d
this.b=!1
this.c=e},
bTt:function bTt(){},
idB(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axp(d){var w=0,v=B.j(x.H),u
var $async$axp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fky?2:4
break
case 2:w=5
return B.b(A.kA.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axp)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kA.h7("SystemChrome.setEnabledSystemUIOverlays",C.idB(null),u),$async$axp)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axp,v)},
axs:function axs(d,e){this.a=d
this.b=e},
a9r:function a9r(d){this.a=d},
igk(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fFE(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
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
fFE:function fFE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoR(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.ahZ("ngmy_menu_lib_v1_zzslides_index",A.bL),$async$aoR)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cE(t,new C.c3p(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3q())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoR,v)},
aoT(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoR(),$async$aoT)
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
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nM("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.aj(),"savedAt",l],t,q),null),$async$aoT)
case 7:if(!f){w=5
break}s.n(0,p,B.H(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.nM("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$aoT)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoT,v)},
c3r(d){return C.hPX(d)},
hPX(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3r=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.ahZ("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.ia),$async$c3r)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X3(B.a3(q,x.N,x.z))
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
return B.i($async$c3r,v)},
aoS(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoR(),$async$aoS)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nQ(r,new C.c3s(d))
w=4
return B.b(B.nM("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$aoS)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRe("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoS)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoS,v)},
c3p:function c3p(){},
c3q:function c3q(){},
c3s:function c3s(d){this.a=d},
ir3(d,e,f){return B.bT(A.L,null,new C.fWw(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fWw:function fWw(d,e,f){this.a=d
this.b=e
this.c=f},
a24:function a24(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKQ:function aKQ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fha:function fha(d,e){this.a=d
this.b=e},
fhe:function fhe(d){this.a=d},
fhf:function fhf(d){this.a=d},
fhg:function fhg(d,e,f){this.a=d
this.b=e
this.c=f},
fhb:function fhb(d){this.a=d},
fhc:function fhc(d){this.a=d},
fhd:function fhd(d,e){this.a=d
this.b=e},
fh5:function fh5(d){this.a=d},
fh3:function fh3(d){this.a=d},
fh4:function fh4(d){this.a=d},
fh6:function fh6(d){this.a=d},
fh7:function fh7(d){this.a=d},
fhk:function fhk(d,e){this.a=d
this.b=e},
fhj:function fhj(d,e){this.a=d
this.b=e},
fh9:function fh9(d,e,f){this.a=d
this.b=e
this.c=f},
fh8:function fh8(d,e,f){this.a=d
this.b=e
this.c=f},
fhh:function fhh(d,e){this.a=d
this.b=e},
fhi:function fhi(d,e){this.a=d
this.b=e},
fhn:function fhn(d){this.a=d},
fho:function fho(d,e){this.a=d
this.b=e},
fhm:function fhm(d,e){this.a=d
this.b=e},
fhl:function fhl(){},
hvn(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cE(v,new C.foO(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.foP(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a33(d){return C.ihG(d)},
ihG(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a33=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fIP(n)
t=4
j=m
i=C
w=7
return B.b(B.a3D("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a33)
case 7:j.$1(i.hvn(f))
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
return B.b(B.az(),$async$a33)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hvn(B.aT(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.foX(d),$async$a33)
case 13:p=j.C(new i.Y(h,new g.fIN(f),o),o.k("M.E"))
A.d.aZ(p,new C.fIO())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a33,v)},
aiz(d,e){return C.iqI(d,e)},
iqI(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiz=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fVZ(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.az(n,null)
q=!1
t=4
w=7
return B.b(B.air("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiz)
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
return B.b(B.az(),$async$aiz)
case 12:p=g
w=13
return B.b(p.aB("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiz)
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
return B.i($async$aiz,v)},
foX(d){return C.i5K(d)},
i5K(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$foX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$foX)
case 7:r=f
q=r.tQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$foX,v)},
ahr(d,e){return C.igc(d,e)},
igc(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahr=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ahr)
case 6:s=g
r=B.aR(x.N)
q=s.tQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c6(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("ch.E"))
w=7
return B.b(s.aB("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahr)
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
return B.b(C.a33(d),$async$ahr)
case 8:n=g
J.nQ(n,new C.fFi(e))
w=9
return B.b(C.aiz(d,n),$async$ahr)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahr,v)},
ir8(d,e){return B.a6(d,!1).cd(B.eb(new C.fWS(e),!0,null,x.H))},
i1b(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cPw())},
oJ:function oJ(d,e,f){this.a=d
this.b=e
this.c=f},
foO:function foO(){},
foP:function foP(){},
fIP:function fIP(d){this.a=d},
fIN:function fIN(d){this.a=d},
fIO:function fIO(){},
fVZ:function fVZ(){},
fFi:function fFi(d){this.a=d},
fWS:function fWS(d){this.a=d},
ZM:function ZM(d,e){this.c=d
this.a=e},
azm:function azm(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPw:function cPw(){},
cPy:function cPy(d,e){this.a=d
this.b=e},
cPB:function cPB(d){this.a=d},
cPC:function cPC(d){this.a=d},
cPA:function cPA(){},
cPD:function cPD(d,e){this.a=d
this.b=e},
cPz:function cPz(d){this.a=d},
cPE:function cPE(){},
cPx:function cPx(d,e){this.a=d
this.b=e},
cPF:function cPF(){},
cPs:function cPs(d){this.a=d},
cPq:function cPq(d){this.a=d},
cPr:function cPr(d){this.a=d},
cPt:function cPt(d,e){this.a=d
this.b=e},
cPp:function cPp(d){this.a=d},
cPo:function cPo(d){this.a=d},
cPm:function cPm(d,e){this.a=d
this.b=e},
cPn:function cPn(d){this.a=d},
cPv:function cPv(){},
cPu:function cPu(d){this.a=d},
cPl:function cPl(d,e){this.a=d
this.b=e},
cPk:function cPk(d,e){this.a=d
this.b=e},
cPj:function cPj(d,e){this.a=d
this.b=e},
cPG:function cPG(d){this.a=d},
ZK:function ZK(d,e,f){this.c=d
this.d=e
this.a=f},
aGF:function aGF(d,e,f){this.a=d
this.b=e
this.c=f},
azi:function azi(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cON:function cON(d){this.a=d},
cOM:function cOM(d){this.a=d},
cOP:function cOP(d,e,f){this.a=d
this.b=e
this.c=f},
cOX:function cOX(){},
cOY:function cOY(d){this.a=d},
cOQ:function cOQ(d,e,f){this.a=d
this.b=e
this.c=f},
cOO:function cOO(d,e){this.a=d
this.b=e},
cOS:function cOS(d,e){this.a=d
this.b=e},
cOT:function cOT(d,e){this.a=d
this.b=e},
cOU:function cOU(d,e){this.a=d
this.b=e},
cOR:function cOR(d){this.a=d},
cOW:function cOW(d){this.a=d},
cOV:function cOV(d,e){this.a=d
this.b=e},
cP2:function cP2(d){this.a=d},
cOZ:function cOZ(d,e){this.a=d
this.b=e},
cP_:function cP_(d,e){this.a=d
this.b=e},
cP0:function cP0(d,e){this.a=d
this.b=e},
cP1:function cP1(d,e){this.a=d
this.b=e},
azk:function azk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ik2(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fNm(),x.H).eM(new C.fNn())}}else if(s)C.hwX()}catch(t){}},
hwX(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.ft9())}catch(u){}},
ik5(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fNm:function fNm(){},
fNn:function fNn(){},
ft9:function ft9(){},
hBO(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
hBL(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lr)return null
return A.a.b2(w,14)},
heQ(d){var w
if(d.b!==D.lr)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ikv(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hBP(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ikq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fOl(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gm(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sv(A.a.aC(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sv(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
iko(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fOk())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aSg(w,u,s,0)}return w},
iks(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6I:$.hIY(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hBM(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fpT(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hBO(q)===e)return q}return null},
ikt(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I5).a},
iku(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afc(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afc(0,0,0)
v=C.fpT(b6,b0)
u=C.fpT(b5,b0)
t=0
if(v!=null&&u!=null){s=C.iks(b2,C.ikq(C.hBM(b2),v.r))
if(s.a!==0){u.r=C.iko(C.hBM(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hBO(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dY(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fpT(b6,n)
i=C.fpT(b5,n)
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
a0=C.heQ(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hBL(a8)===a0||C.heQ(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RO(a1,new C.fOr(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jc
$.jc=a9+1
A.d.J(a1,new C.eP(""+1000*a6+"_"+a9,D.lr,a2,a3,a4,a5,"",24,A.a8,A.bs,A.aG,4279310375,A.bn,d.at,D.bj,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cs,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afc(k,t,e)},
ikp(d){var w=C.ikt(d)
if(d.w==="hati_kuhowa")return C.hB8("",w)
return C.hB7("",w)},
fOl:function fOl(){},
fOk:function fOk(){},
fOr:function fOr(d){this.a=d},
hwE(){var w=new B.V(Date.now(),0,!1),v=new C.fsa()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
heZ(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fPj(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lr&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hC2(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fPj(d)
w=B.bj(u)
if(w==null)return!C.fPj(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bR(18e9))},
ila(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hU_(d){return A.a.i(d).toLowerCase()},
arf(d){return C.hU1(d)},
hU1(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$arf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$arf)
case 7:r=f
p=r.tQ("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.ipi(),B.U(o).k("N<1,n>")).bY(0,new C.cfb())
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
return B.i($async$arf,v)},
are(d,e){return C.hU0(d,e)},
hU0(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$are=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arf(d),$async$are)
case 3:r=g
if(!J.c6(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$are)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pX(r)),$async$are)
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
return B.i($async$are,v)},
arg(d,e){return C.hU2(d,e)},
hU2(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arf(d),$async$arg)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arg)
case 8:q=g
w=9
return B.b(q.aB("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pX(r)),$async$arg)
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
return B.i($async$arg,v)},
Wr(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wr=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h7v&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Wr)
case 7:r=a7
q=B.aT(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.i7(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.X3(B.a3(f.a(n.b),e,a0)))}$.a8f=o}}t=2
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
return B.b(B.c8(),$async$Wr)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uw("civic_hati_kiapo_uongozi",null,A.ei),$async$Wr)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.i7(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.X3(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8f.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcF()
else f=!0
f=!f}else f=!0
if(f)$.a8f.n(0,i.a,i.b)}w=20
return B.b(C.arh(),$async$Wr)
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
case 16:case 9:$.h7v=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wr,v)},
arh(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$arh=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$arh)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8f,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aB("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.az(r,null)),$async$arh)
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
return B.i($async$arh,v)},
b1j(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1j=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wr(!1),$async$b1j)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8f.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEC(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1j,v)},
a8g(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8g=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a8f.n(0,d,o)
$.h7v=!0
w=3
return B.b(C.arh(),$async$a8g)
case 3:w=4
return B.b(B.c8(),$async$a8g)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8f,n=new B.ck(n,B.a4(n).k("ck<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.aj())}w=9
return B.b(B.nM("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],e,x.z),null),$async$a8g)
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
return B.i($async$a8g,v)},
ari(d){var w=0,v=B.j(x.T),u,t,s
var $async$ari=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hU().a6G(A.eN),$async$ari)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$ari)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1i(t,d),$async$ari)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ari,v)},
b1i(d,e){return C.hU3(d,e)},
hU3(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1i=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1i)
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
p=n.iz("media")
w=8
return B.b(p.xG(q,new Uint8Array(B.cb(d)),D.bKr),$async$b1i)
case 8:n=p.Da(q)
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
return B.i($async$b1i,v)},
Ln(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cs,D.cW,l,m,n)},
frC(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cs,D.fh,j,k,l)},
hbM(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.j.E(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cs,D.cW,g,e,f)},
fra(d,e,f,g){return C.frC(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hbN(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r5,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bs,A.a8,"",h,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cs,D.cW,g,e,f)},
hwD(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
bEC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hwD(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lr&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.heu(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cm(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hwD(m)
if(l!=null&&r.al(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lr&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fNk(a2))}else A.d.bt(a1.z,new C.fNl())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fPj(a0))a0.ax=a6.f.aa().ag()
return a0},
heu(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fQ6(D.a7I),l=C.cD(),k=x.u,j=B.a([C.er(A.bn,!1,s,A.aG,"marriage_locked_bg",r,24,A.bs,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cs,D.lR,1,0,0)],k),i=B.a([],k)
i.push(C.Ln("NGMY",A.K,236069181,52,A.bs,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Ln("TAREHE:",A.bn,o,16,A.bs,A.H,A.j.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hbM("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hwE()))
i.push(C.fra(0.8099999999999999,0.026+A.j.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Ln("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bs,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Ln("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cH,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.frC(0,0.002,D.fH,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hbN("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hbN("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hbN("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.frC(268435456,0.175,D.bj,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Ln("VIDEO YA KIAPO",A.bn,o,10,A.bs,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bn,!1,s,A.aG,"__kiapo_video__",r,24,A.bs,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cs,D.lR,0.77,0.115,0.492))
i.push(C.Ln("Rais Anayeapa:",A.bn,p,15,A.bs,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Ln("Jina:",A.bn,p,13,A.bs,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hbM("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.fra(0.195,0.7130000000000001,0.62,n))
i.push(C.Ln("Sahihi:",A.bn,p,13,A.bs,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bn,!1,s,A.aG,"marriage_sign_rais",0,24,A.bs,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cs,D.fh,0.38,0.21500000000000002,0.73))
i.push(C.fra(0.21500000000000002,0.795,0.38,n))
i.push(C.Ln("Tarehe:",A.bn,p,13,A.bs,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hbM("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hwE()))
i.push(C.fra(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.frC(0,0.032,D.bj,o,1,"state_box",0.72,0.14,0.875),C.Ln("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bs,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rV(4294967035,t,0,0,j,l,D.qV,"","",u,D.dk)
return C.Cm(t,t,t,t,D.oM,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahz(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahz=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.ffi)
w=1
break}w=3
return B.b(C.Wr(!0),$async$ahz)
case 3:w=4
return B.b(C.b1j(p),$async$ahz)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hC2(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.blO,null,new C.fIb(p),f,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahz)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ce(null,null,!0,null,new C.fIc(),f,null,!0,!0,x.y),$async$ahz)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.heu(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.heu(p))
case 1:return B.h(u,v)}})
return B.i($async$ahz,v)},
fsa:function fsa(){},
cfb:function cfb(){},
fNk:function fNk(d){this.a=d},
fNl:function fNl(){},
fIb:function fIb(d){this.a=d},
fI9:function fI9(d){this.a=d},
fIa:function fIa(d){this.a=d},
fIc:function fIc(){},
fI7:function fI7(d){this.a=d},
fI8:function fI8(d){this.a=d},
arN:function arN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFt:function aFt(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ekY:function ekY(d){this.a=d},
ekW:function ekW(d){this.a=d},
ekX:function ekX(d){this.a=d},
ekZ:function ekZ(d){this.a=d},
el_:function el_(d){this.a=d},
x4(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",j,D.bj,4280172719,2,d,0,0,"",D.cs,D.cW,l,m,n)},
hwe(d,e,f){var w=4291404327
return B.a([C.qt(0,f,D.eY,w,2,"ring_l",f,d-f*0.42,e),C.qt(0,f,D.eY,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fqA(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qt(4294967288,f,D.eY,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qt(h,s,D.eY,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qt(h,f*0.46,D.eY,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qt(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cs,D.fh,j,k,l)},
fqz(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.j.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cH,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,l,0,0,"",D.cs,D.cW,g,e,f)},
bC_(d,e,f,g){return C.qt(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hwd(d,e,f,g,h){var w=A.j.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qt(0,0.036,D.bj,h,1.4,"banner_box_"+d,w,v,e),C.x4(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hBN(){var w=new B.V(Date.now(),0,!1),v=new C.fOq()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
hwf(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x4(r+".",A.bn,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fqz("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bC_(q,g+A.j.E(0.0272,0.02,0.06),p,w),C.x4("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bs,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cs,D.fh,s,t,g-0.004),C.bC_(t,g+0.044,s,w)],x.u)},
ai0(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.drR,D.ctZ,D.djH,D.dlK],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
haY(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fQ6(d.d),v=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lR,1,0,0)],x.u)
A.d.v(v,C.i8o(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i8o(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x4("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hwe(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hwe(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fqA(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fqA(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x4("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qt(0,0.062,D.eY,b1,1.6,"crest_o",0.11,0.445,0.012),C.qt(0,0.046,D.eY,b1,1,"crest_i",0.084,0.458,0.02),C.x4("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qt(0,0.002,D.fH,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qt(b9,0.016,D.ls,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qt(0,0.002,D.fH,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x4("TAREHE:",A.bn,c0,20,A.H,A.j.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fqz("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hBN()),C.bC_(0.814,0.026+A.j.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x4(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qt(c0,0.0026,D.bj,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qt(c3.e,0.138,D.bj,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bn,!1,b9,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bs,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bj,b3,2,c5,0,0,"",D.cs,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.j.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qt(0,0.036,D.bj,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bs,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bj,b3,2,c7,0,0,"",D.cs,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hwd(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x4(c9,A.bn,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.E(0.037399999999999996,0.02,0.06):A.j.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fqz("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
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
d=B.a([new C.eP(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bs,A.aG,c0,A.bn,a9,D.bj,b2,b3,2,0,!1,s,0,D.cs,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fh,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bs,A.aG,b6,A.bn,a9,D.fH,0,b5,0.8,0,!1,g,0,D.cs,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bs,A.aG,b7,A.dY,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cs,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fh,a1,a2,0.046,0.025875,"",24,A.a8,A.bs,A.aG,b6,A.bn,a9,D.bj,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cs,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bs,A.aG,b7,A.K,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cs,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fh,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bs,A.aG,b6,A.bn,a9,D.bj,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cs,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hwd("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7z||w===D.a7B||w===D.a7y||w===D.a7A){w=t-0.008
A.d.v(c2,C.fqA(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fqA(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qt(0,a4,D.bj,c0,1.3,"wit_table_border",0.82,0.09,t),C.qt(c0,a4,D.bj,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qt(0,0.0022,D.fH,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x4("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x4("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hwf("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hwf("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qt(0,0.11,D.bj,c0,1.2,"mw_box",0.82,0.09,t),C.x4("MWANDISHI",A.bn,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x4("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fqz("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bC_(0.215,p,0.3116,b5),C.x4("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bn,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bs,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cs,D.fh,0.3161999999999999,0.5738,s-0.044),C.bC_(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qt(0,0.032,D.bj,c0,1,"state_box",0.7,0.15,a8),C.x4("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ikr(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hf8(d.d),p=new C.fOm(s),o=new C.fOn(s),n=d.z,m=n===D.a7z||n===D.a7B||n===D.a7y||n===D.a7A,l=n===D.aJK||n===D.a7C||n===D.aJL,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.c_,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7C?26:16
i.push(new C.fOp().$1$size(w))}if(n===D.aJM)i.push(D.fXd)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iR,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.an)
n=B.L(r,A.r,1.1)
w=B.m(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTi,p.$1$w(0.9),D.aTi,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.p(D.bgj,t,n,w,t,t,A.n),t,t,t,t,A.amJ,t,t,t))
i.push(A.an)
i.push(new C.fOo(r).$1("NIMETOWE"))
i.push(A.fK)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NN,new B.c7(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.p(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.dd,new B.bz(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b4)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(A.alm,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hB7(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ai0(e,t)
if(r==null)r=A.d.gH(D.I5)
w=C.cD()
v=C.rV(r.e,t,0,0,C.haY(r,0.165,y.O,D.dmn,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qV,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cm(t,t,t,t,D.oM,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hB8(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ai0(e,t)
if(r==null)r=A.d.gH(D.I5)
w=C.cD()
v=C.rV(r.e,t,0,0,C.haY(r,0.165,y.f,D.dhF,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qV,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cm(t,t,t,t,D.oM,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFV(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFV=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h_k(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFV,v)},
ahA(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahA=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fIf(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MU,null,new C.fIg(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahA)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFV(d,"Hati ya Kuhowa",D.I5),$async$ahA)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M2(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahA)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hB7(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahA,v)},
ahB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fIj(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MU,null,new C.fIk(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahB)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFV(d,"Hati ya Kuhoweya",D.I5),$async$ahB)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M2(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahB)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hB8(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahB,v)},
ahC(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahC=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fIn(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MU,null,new C.fIo(m),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahC)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFV(d,"Malipo ya Awamu ya Mahari",D.Sl),$async$ahC)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.M2(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahC)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ai0(s,D.Sl)
if(q==null)q=A.d.gH(D.Sl)
n=C.cD()
p=C.rV(q.e,null,0,0,C.haY(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dc8,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qV,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dk)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cm(null,null,null,null,D.oM,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahC,v)},
y7:function y7(d,e){this.a=d
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
fOq:function fOq(){},
fOm:function fOm(d){this.a=d},
fOo:function fOo(d){this.a=d},
fOp:function fOp(){},
fOn:function fOn(d){this.a=d},
h_k:function h_k(d,e){this.a=d
this.b=e},
ael:function ael(d,e,f){this.c=d
this.d=e
this.a=f},
e7t:function e7t(d,e,f){this.a=d
this.b=e
this.c=f},
e7s:function e7s(d,e){this.a=d
this.b=e},
e7r:function e7r(d,e){this.a=d
this.b=e},
adK:function adK(d,e,f){this.c=d
this.d=e
this.a=f},
fIf:function fIf(){},
fIg:function fIg(d){this.a=d},
fId:function fId(d){this.a=d},
fIe:function fIe(d){this.a=d},
fIj:function fIj(){},
fIk:function fIk(d){this.a=d},
fIh:function fIh(d){this.a=d},
fIi:function fIi(d){this.a=d},
fIn:function fIn(){},
fIo:function fIo(d){this.a=d},
fIl:function fIl(d){this.a=d},
fIm:function fIm(d){this.a=d},
Lq(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cs,D.cW,k,l,m)},
Do(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bn,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cs,D.fh,j,k,l)},
hx_(d,e,f){return C.Do(0,0.002,D.fH,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCa(d,e,f,g,h){return B.a([C.Do(4294967288,0.032,D.bj,4291404327,1.15,"pill_"+d,g,f,e),C.Lq(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hbR(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Do(0,0.002,D.fH,g,1,"orn_l_"+t,u,d,v),C.Do(h,0.016,D.ls,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Do(0,0.002,D.fH,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2s(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lq(d,A.bn,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cH,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cs,D.cW,t,u,g-0.002),C.hx_(u,g+0.018,t)],x.u)},
hx0(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Do(h,0.028,D.bj,h,0,"chv_"+d,g,e,f),C.Do(w,0.024,D.ls,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Do(w,0.024,D.ls,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lq(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bC9(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lq("Sahihi:",A.bn,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bs,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cs,D.fh,v,w,f-0.006),C.hx_(w,f+0.016,v)],x.u)},
hf9(d){var w,v
for(w=0;w<19;++w){v=D.SB[w]
if(v.a===d)return v}return null},
imK(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ai0(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ai0(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ai0(u,D.Sl)
v=w==null?l:w.d
if(v==null){w=C.ai0(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hf9(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hxP.a8(0)
$.hy0.a8(0)
t=C.fQ6(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hgj(d){var w=0,v=B.j(x.T),u
var $async$hgj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0N(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hgj,v)},
ya:function ya(d,e){this.a=d
this.b=e},
o4:function o4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blp:function blp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h0N:function h0N(){},
aeo:function aeo(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
epJ:function epJ(d){this.a=d},
epI:function epI(d,e){this.a=d
this.b=e},
ag3:function ag3(d,e,f){this.c=d
this.d=e
this.a=f},
hf8(d){return $.hy0.c3(0,d,new C.fQ8(d))},
fQ6(d){return $.hxP.c3(0,d,new C.fQ7(d))},
fE(d){return B.h54(d>>>16&255,d>>>8&255,d&255,255)},
ibB(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hz6(4294570461,4293910718,4284234270,u)
case 1:return C.hz6(4294635750,4293975240,t,4292912216)
case 2:w=C.fp7(s,4294505966,r)
C.bBU(w,14,16,p)
C.kJ(w,8,9,464,836,u,1.2)
C.Dk(w,2,2,1,1,u,10)
C.Dk(w,478,2,-1,1,u,10)
C.Dk(w,2,852,1,-1,u,10)
C.Dk(w,478,852,-1,-1,u,10)
return w
case 3:return C.fp7(4294966515,4294373082,4289102906)
case 4:return C.i65(C.fp7(4294376440,4293653998,4290287194))
case 5:w=C.fp7(4294965238,4294437098,4288444980)
C.bBU(w,14,16,4283043359)
C.kJ(w,6,7,468,840,u,1)
C.kJ(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,n,4294175448)
C.tf(v,n)
C.kJ(v,24,24,432,806,4286209070,1)
C.a2f(v,12,12,468,12,o,3,20)
C.a2f(v,12,842,468,842,o,3,20)
C.a2f(v,12,12,12,842,o,3,20)
C.a2f(v,468,12,468,842,o,3,20)
return v
case 7:return C.i3R(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,m,4293911504)
C.tf(v,m)
C.kJ(v,28,28,424,798,l,1)
C.fyK(v,28,28,l,k)
C.fyK(v,452,28,l,k)
C.fyK(v,28,826,l,k)
C.fyK(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,j,4294111986)
C.tf(v,j)
C.kJ(v,18,18,444,818,4292401368,0.7)
B.iW(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i8a(i,4294173372)
case 11:return C.i9l(4294439140,4293449662)
case 12:return C.i3D(h,4294239432)
case 13:return C.i8L(4294244340,4293193448)
case 14:return C.id7(4294505710,4293780694)
case 15:return C.fnY(4294966259,4294439138,o,p,q)
case 16:return C.fnY(4294966776,4294178544,o,g,g)
case 17:return C.fnY(4294965493,4294504170,o,4286200650,q)
case 18:return C.fnY(4294966519,4294373862,o,p,p)
case 19:return C.i7g()
case 20:return C.i7h()
case 21:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,h,4293976768)
C.tf(v,h)
C.bBU(v,14,16,p)
B.iW(v,!0,C.fE(u),4,475,4,9)
B.iW(v,!0,C.fE(u),4,475,844,849)
B.iW(v,!0,C.fE(u),4,9,4,849)
B.iW(v,!0,C.fE(u),470,475,4,849)
C.a2f(v,10,12,470,12,u,2,16)
C.a2f(v,10,842,470,842,u,2,16)
C.a2f(v,10,12,10,842,u,2,18)
C.a2f(v,470,12,470,842,u,2,18)
C.Dk(v,2,2,1,1,t,10)
C.Dk(v,478,2,-1,1,t,10)
C.Dk(v,2,852,1,-1,t,10)
C.Dk(v,478,852,-1,-1,t,10)
C.kJ(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,s,4294438872)
C.tf(v,s)
C.kJ(v,14,16,452,822,o,2.2)
C.kJ(v,22,24,436,806,o,1)
C.hdg(v,!1,!1,o,p,p,36,14,16)
C.kY(v,240,20,7,o,!0)
C.kY(v,240,834,7,o,!0)
C.kY(v,18,427,7,o,!0)
C.kY(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,i,4293910712)
C.tf(v,i)
B.iW(v,!0,C.fE(u),0,479,0,20)
B.iW(v,!0,C.fE(u),0,479,834,853)
B.iW(v,!0,C.fE(u),0,20,0,853)
B.iW(v,!0,C.fE(u),460,479,0,853)
B.iW(v,!0,C.fE(f),5,474,5,9)
B.iW(v,!0,C.fE(f),5,474,844,848)
B.iW(v,!0,C.fE(f),5,9,5,848)
B.iW(v,!0,C.fE(f),470,474,5,848)
C.kJ(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cb,0,A.e5,854,q,0,3,q,A.cb,480,!1)
C.z3(v,e,4294174404)
C.tf(v,e)
C.bBU(v,14,16,p)
B.iW(v,!0,C.fE(u),3,476,3,8)
B.iW(v,!0,C.fE(u),3,476,845,850)
B.iW(v,!0,C.fE(u),3,8,3,850)
B.iW(v,!0,C.fE(u),471,476,3,850)
C.kJ(v,9,10,462,834,t,1)
C.kJ(v,14,16,452,822,u,1.8)
C.kY(v,240,8,4,u,!0)
C.kY(v,240,846,4,u,!0)
C.kY(v,8,427,4,u,!0)
C.kY(v,472,427,4,u,!0)
C.kY(v,8,8,3,t,!0)
C.kY(v,472,8,3,t,!0)
C.kY(v,8,846,3,t,!0)
C.kY(v,472,846,3,t,!0)
return v}},
z3(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.j.V(q*w+p*t),0,255)
u=A.o.E(A.j.V(o*w+n*t),0,255)
w=A.o.E(A.j.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l_(d,!1,A.dj,new B.MG(s),r,A.d2,1,0,w-1,k,k);++k}},
tf(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.is()
v=A.o.E(A.j.M(s.gb8(s))-3,0,255)
r=A.o.E(A.j.M(s.gbe())-3,0,255)
q=A.o.E(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kJ(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,f,f)
w=f+h
B.l_(d,!0,A.dj,u,v,A.d2,j,e,t,w,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,e,e,f,w)
B.l_(d,!0,A.dj,u,v,A.d2,j,t,t,f,w)},
Dk(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.j.V(j*0.72),8,j-2)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e+g*j,f,f)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,e+g*t,v,v)
B.l_(d,!0,A.dj,C.fE(i),u,A.d2,1,w,w,v,f+h*t)},
hz6(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e5,854,w,0,3,w,A.cb,480,!1)
C.z3(v,d,e)
C.tf(v,d)
B.iW(v,!0,C.fE(f),0,479,0,28)
B.iW(v,!0,C.fE(f),0,479,826,853)
B.iW(v,!0,C.fE(f),0,28,0,853)
B.iW(v,!0,C.fE(f),452,479,0,853)
C.kJ(v,5,5,470,844,g,1.1)
C.kJ(v,28,28,424,798,g,1.6)
C.Dk(v,2,2,1,1,g,11)
C.Dk(v,478,2,-1,1,g,11)
C.Dk(v,2,852,1,-1,g,11)
C.Dk(v,478,852,-1,-1,g,11)
return v},
fp7(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e5,854,w,0,3,w,A.cb,480,!1)
C.z3(v,d,e)
C.tf(v,d)
C.kJ(v,14,16,452,822,f,1.6)
C.kJ(v,20,22,440,810,f,0.8)
return v},
bBU(d,e,f,g){var w,v=C.fE(g)
B.iW(d,!0,v,0,479,0,f-1)
w=854-f
B.iW(d,!0,v,0,479,w,853);--w
B.iW(d,!0,v,0,e-1,f,w)
B.iW(d,!0,v,480-e,479,f,w)},
i65(d){var w,v,u=4291404327
C.bBU(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kY(d,w,8,3,u,!0)
C.kY(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kY(d,7,v,3,u,!0)
C.kY(d,473,v,3,u,!0)}return d},
fC1(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jr(e,f),new B.jr(e+g*n,f),new B.jr(e,f+h*n)],t)
B.a3_(d,C.fE(m),s)
w=A.o.E(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jr(s,u),new B.jr(e+g*v,u),new B.jr(s,f+h*v)],t)
B.a3_(d,C.fE(k),t)
t=A.j.V(n*0.39)
C.kY(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kY(d,e+g*t,f+h*3,4,k,!0)
C.kY(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kY(d,e+g*t,f,5,k,!0)
C.kY(d,e,f+h*t,5,k,!0)}},
hdg(d,e,f,g,h,i,j,k,l){var w,v
C.fC1(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fC1(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fC1(d,k,v,1,-1,e,f,g,h,i,j)
C.fC1(d,w,v,-1,-1,e,f,g,h,i,j)},
a2f(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ln(d,!0,A.dj,new B.rp(p),null,A.d2,j,r,q)}},
fAT(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
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
i3R(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e5,854,o,0,3,o,A.cb,480,!1)
C.z3(n,d,e)
C.tf(n,d)
C.kJ(n,20,20,440,814,f,1.2)
C.fAT(n,0,0,1,1,g)
C.fAT(n,480,0,-1,1,g)
C.fAT(n,0,854,1,-1,g)
C.fAT(n,480,854,-1,-1,g)
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
B.l_(n,!0,A.dj,new B.rp(p),o,A.d2,1.2,240,r,60,q)}return n},
fyK(d,e,f,g,h){var w
C.fFF(d,!0,C.fE(g),13,e,f)
C.fFF(d,!0,C.fE(g),9,e,f)
w=B.a([new B.jr(e,f-4),new B.jr(e+4,f),new B.jr(e,f+4),new B.jr(e-4,f)],x.J)
B.a3_(d,C.fE(h),w)},
kY(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jr(e,v),new B.jr(u,f),new B.jr(e,t),new B.jr(s,f)],x.J)
if(i){B.a3_(d,C.fE(h),r)
return}B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,u,v,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,u,e,f,t)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,e,s,t,f)
B.l_(d,!0,A.dj,C.fE(h),w,A.d2,1,s,e,f,v)},
fnX(d,e,f,g,h,i,j){var w,v=B.a([new B.jr(e,f),new B.jr(e+g*28,f),new B.jr(e,f+h*28)],x.J)
B.a3_(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kY(d,v,w,6,j,!0)
C.kY(d,v,w,3,i,!0)},
fnY(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e5,854,w,0,3,w,A.cb,480,!1)
C.z3(v,d,e)
C.tf(v,d)
C.kJ(v,18,18,444,818,f,2)
C.kJ(v,26,26,428,802,f,0.9)
if(h!=null)B.iW(v,!0,C.fE(h),28,451,28,34)
C.fnX(v,18,18,1,1,g,f)
C.fnX(v,462,18,-1,1,g,f)
C.fnX(v,18,836,1,-1,g,f)
C.fnX(v,462,836,-1,-1,g,f)
return v},
i7g(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e5,854,v,0,3,v,A.cb,480,!1)
C.z3(r,u,4294240980)
C.tf(r,u)
C.kJ(r,10,12,460,830,t,3.2)
C.kJ(r,18,20,444,814,s,1.2)
C.kJ(r,24,26,432,802,t,1.8)
C.hdg(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kY(r,w,16,3,t,!0)
C.kY(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kY(r,16,w,3,t,!0)
C.kY(r,464,w,3,t,!0)}return r},
i7h(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e5,854,t,0,3,t,A.cb,480,!1)
C.z3(p,s,4294373080)
C.tf(p,s)
C.kJ(p,16,18,448,818,r,2.4)
C.kJ(p,24,26,432,802,4286209044,1)
w=new C.fqr(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hdg(p,!1,!0,r,q,q,34,16,18)
return p},
bCB(d,e,f,g,h,i){B.iW(d,!0,C.fE(i),e,e+g,f,f+h)},
bDs(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.j.V(v*l+u*m),0,255)
j=A.o.E(A.j.V(t*l+s*m),0,255)
l=A.o.E(A.j.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l_(d,!1,A.dj,new B.MG(i),null,A.d2,1,e,w,l,l)}},
i89(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.l_(d,!1,A.dj,new B.rp(r),null,A.d2,1,e,s,t,t);++v}return}w=f+g-1
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
B.l_(d,!1,A.dj,new B.rp(r),null,A.d2,1,t,t,f,s);++q}},
i8a(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e5,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i89(t,v,w,30,D.d4k,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bCB(t,44,44,392,766,d)
C.bDs(t,44,44,392,766,d,e)
C.tf(t,d)
C.kJ(t,44,44,392,766,4292128567,2.2)
C.kJ(t,50,50,380,754,4279898632,0.8)
return t},
i9k(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
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
i9l(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e5,854,s,0,3,s,A.cb,480,!1)
B.iW(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i9k(r,u,v,w,4292391514)}C.bCB(r,46,46,388,762,d)
C.bDs(r,46,46,388,762,d,e)
C.tf(r,d)
C.kJ(r,46,46,388,762,4291404327,1.8)
return r},
hun(d,e,f,g){C.fFF(d,!0,C.fE(g),16,e,f)
C.fFF(d,!0,C.fE(g),11,e,f)
C.kY(d,e,f,6,g,!0)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e-14,e+14,f,f)
B.l_(d,!0,A.dj,C.fE(g),null,A.d2,1.3,e,e,f-14,f+14)},
i3D(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e5,854,v,0,3,v,A.cb,480,!1)
B.iW(s,!0,C.fE(4280948752),0,479,0,853)
B.iW(s,!0,C.fE(u),0,479,0,78)
B.iW(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hun(s,w,39,t)
C.hun(s,w,815,t)}C.bCB(s,38,92,404,670,d)
C.bDs(s,38,92,404,670,d,e)
C.tf(s,d)
C.kJ(s,38,92,404,670,t,1.8)
C.kJ(s,45,99,390,656,4287322667,0.8)
return s},
i8K(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jr(e,f),new B.jr(q-5,w),new B.jr(q,f-(18-Math.abs(r)*3)),new B.jr(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a3_(d,new B.rp(o),p)}B.ln(d,!0,A.dj,C.fE(4292128567),null,A.d2,3,e,f)},
i8L(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e5,854,s,0,3,s,A.cb,480,!1)
C.z3(q,4278931279,4292330394)
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
for(t=0;t<5;++t)C.i8K(q,70+t*85,48,4292128567)
C.bCB(q,48,78,384,712,d)
C.bDs(q,48,78,384,712,d,e)
C.tf(q,d)
C.kJ(q,48,78,384,712,4291404327,1.6)
return q},
id7(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e5,854,t,0,3,t,A.cb,480,!1)
B.iW(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kY(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ln(r,!0,A.dj,new B.rp(u),t,A.d2,1,v,w)}C.bCB(r,40,40,400,774,d)
C.bDs(r,40,40,400,774,d,e)
C.tf(r,d)
C.kJ(r,40,40,400,774,4291058750,2)
C.kJ(r,48,48,384,758,s,0.8)
return r},
la:function la(d,e){this.a=d
this.b=e},
fQ8:function fQ8(d){this.a=d},
fQ7:function fQ7(d){this.a=d},
fqr:function fqr(d){this.a=d},
fQM(d){var w
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
i9d(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hbK(d){var w,v,u,t=null,s=A.a.co(d,"{"),r=A.a.p0(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Ak.ahX(A.a.aC(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agq(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agq=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vO(null,""),$async$agq)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nk(n)
if(e==null)s=A.hX
else{r=C.i9d(e)
s=B.a([new B.a1c(A.cP.gcu().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.re(t,d,s,"news",E.Gz),$async$agq)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LR(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agq,v)},
bF5(d){return C.imq(d)},
imq(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bF5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.az(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agq(r,null),$async$bF5)
case 7:q=f
p=C.hbK(q)
if(p==null){u=d
w=1
break}o=d.aED(p)
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
return B.i($async$bF5,v)},
hyk(d){var w,v=F.heq(d)
v=B.aL(v,"book","newspaper")
if(F.a3j(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fUL(d,e,f,g){return C.ioj(d,e,f,g)},
ioj(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fUL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fQM(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hCb()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agq('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hyk(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fUL)
case 3:r=m.hbK(i)
if(r==null)throw B.W(y.S)
q=new C.Aa(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aED(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aN(t," ")
if(F.a3j(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3j(A.d.aN(t," "))==="sw"?C.bF5(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUL,v)},
bEA(d,e,f,g,h){return C.ik0(d,e,f,g,h)},
ik0(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEA=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aN(l,"\n")
l=C.hCb()
k=A.Y.az(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agq('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hyk(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEA)
case 3:p=j.hbK(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aED(B.a3(o,x.N,x.z))
m=A.Y.az(n.aj(),null)!==A.Y.az(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3j(A.d.aN(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bF5(n),$async$bEA)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8U(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEA,v)},
a8U:function a8U(d,e,f){this.a=d
this.b=e
this.c=f},
irH(d,e){return B.a6(d,!1).cd(B.eb(new C.h0Y(e),!0,null,x.H))},
h0Y:function h0Y(d){this.a=d},
WU:function WU(d,e){this.c=d
this.a=e},
aFK:function aFK(d,e,f,g,h,i,j,k){var _=this
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
esH:function esH(d){this.a=d},
esG:function esG(){},
esI:function esI(d){this.a=d},
esF:function esF(d,e){this.a=d
this.b=e},
esJ:function esJ(){},
esj:function esj(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
esq:function esq(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
ess:function ess(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
esp:function esp(d){this.a=d},
esk:function esk(d,e){this.a=d
this.b=e},
esh:function esh(d){this.a=d},
esi:function esi(d){this.a=d},
esy:function esy(d){this.a=d},
esz:function esz(d){this.a=d},
esx:function esx(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esB:function esB(d){this.a=d},
esv:function esv(d){this.a=d},
esC:function esC(d){this.a=d},
esu:function esu(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esE:function esE(d){this.a=d},
esg:function esg(d,e){this.a=d
this.b=e},
fPI(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fPI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvX){w=1
break}r=new C.fPJ()
t=4
q=x.s
w=7
return B.b(B.iB(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fPI)
case 7:$.hvX=!0
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
return B.i($async$fPI,v)},
bEX(d){return A.Dl[B.mr(d)-1]+", "+A.oH[B.bK(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
ice(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dwr[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
heP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fO0(),B.U(v).k("Y<1>")))
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
continue}o=new C.fO2(j,h)
n=new C.fO1(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
hbt(d,e){var w=new C.fq0()
return A.d.cJ(e,0,new C.fpZ(w))>=A.d.cJ(d,0,new C.fq_(w))},
ht2(d){var w,v,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
u.D(new B.aZ(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bu())
return u},
Aa:function Aa(d,e,f,g,h,i,j,k,l,m){var _=this
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
ciR:function ciR(d){this.a=d},
ciP:function ciP(){},
ciQ:function ciQ(){},
tM:function tM(d,e){this.a=d
this.b=e},
C8:function C8(d,e){this.a=d
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
fPJ:function fPJ(){},
fO0:function fO0(){},
fO2:function fO2(d,e){this.a=d
this.b=e},
fO1:function fO1(d,e,f){this.a=d
this.b=e
this.c=f},
fq0:function fq0(){},
fq1:function fq1(){},
fpZ:function fpZ(d){this.a=d},
fq_:function fq_(d){this.a=d},
b2O:function b2O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ciS:function ciS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciT:function ciT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciU:function ciU(d){this.a=d},
ber:function ber(d){this.a=d},
beq:function beq(d,e){this.b=d
this.a=e},
bwp:function bwp(d){this.a=d},
baU:function baU(d,e){this.b=d
this.a=e},
btT:function btT(d,e){this.b=d
this.a=e},
hEf(d,e){return B.a6(d,!1).cd(B.eb(new C.h10(e,null),!0,null,x.E))},
h10:function h10(d,e){this.a=d
this.b=e},
WV:function WV(d,e,f){this.c=d
this.d=e
this.a=f},
aFN:function aFN(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ett:function ett(){},
etu:function etu(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
eth:function eth(d){this.a=d},
etn:function etn(d){this.a=d},
eto:function eto(d,e){this.a=d
this.b=e},
etl:function etl(d){this.a=d},
etm:function etm(d,e,f){this.a=d
this.b=e
this.c=f},
eti:function eti(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etp:function etp(d,e){this.a=d
this.b=e},
etk:function etk(d,e){this.a=d
this.b=e},
etq:function etq(d){this.a=d},
etj:function etj(d,e){this.a=d
this.b=e},
etr:function etr(d,e){this.a=d
this.b=e},
bdZ:function bdZ(d,e,f){this.b=d
this.c=e
this.a=f},
irN(d){return B.a6(d,!1).cd(B.eb(new C.h1g(),!0,null,x.I))},
bCm(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hcW(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h1g:function h1g(){},
a13:function a13(d){this.a=d},
oT:function oT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHb:function aHb(d,e,f,g,h,i,j,k,l){var _=this
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
f2m:function f2m(d){this.a=d},
f1e:function f1e(d,e){this.a=d
this.b=e},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1M:function f1M(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0Z:function f0Z(d){this.a=d},
f0W:function f0W(d){this.a=d},
f0X:function f0X(d){this.a=d},
f1v:function f1v(d,e){this.a=d
this.b=e},
f1w:function f1w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1I:function f1I(d,e,f){this.a=d
this.b=e
this.c=f},
f1H:function f1H(d,e){this.a=d
this.b=e},
f1J:function f1J(d,e){this.a=d
this.b=e},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e,f){this.a=d
this.b=e
this.c=f},
f1K:function f1K(d,e){this.a=d
this.b=e},
f0O:function f0O(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0N:function f0N(){},
f0R:function f0R(d,e){this.a=d
this.b=e},
f0M:function f0M(d,e){this.a=d
this.b=e},
f0T:function f0T(){},
f0S:function f0S(d,e){this.a=d
this.b=e},
f0L:function f0L(d,e){this.a=d
this.b=e},
f0I:function f0I(d,e){this.a=d
this.b=e},
f0U:function f0U(d){this.a=d},
f0K:function f0K(d,e){this.a=d
this.b=e},
f0V:function f0V(d){this.a=d},
f0J:function f0J(d,e){this.a=d
this.b=e},
f2b:function f2b(d,e){this.a=d
this.b=e},
f2i:function f2i(d){this.a=d},
f2j:function f2j(d,e){this.a=d
this.b=e},
f2k:function f2k(){},
f2c:function f2c(d,e){this.a=d
this.b=e},
f2a:function f2a(d,e){this.a=d
this.b=e},
f2d:function f2d(d,e){this.a=d
this.b=e},
f29:function f29(d,e){this.a=d
this.b=e},
f2e:function f2e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f28:function f28(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2f:function f2f(d){this.a=d},
f2g:function f2g(d,e){this.a=d
this.b=e},
f2h:function f2h(d){this.a=d},
f27:function f27(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1W:function f1W(d){this.a=d},
f1U:function f1U(d,e){this.a=d
this.b=e},
f1P:function f1P(d,e){this.a=d
this.b=e},
f1X:function f1X(d){this.a=d},
f2_:function f2_(d){this.a=d},
f1T:function f1T(d){this.a=d},
f20:function f20(d){this.a=d},
f21:function f21(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d){this.a=d},
f1S:function f1S(d){this.a=d},
f24:function f24(d){this.a=d},
f1R:function f1R(d){this.a=d},
f25:function f25(d,e){this.a=d
this.b=e},
f1Q:function f1Q(d,e){this.a=d
this.b=e},
f26:function f26(d){this.a=d},
f1Y:function f1Y(d){this.a=d},
f1Z:function f1Z(d){this.a=d},
f1z:function f1z(d){this.a=d},
f1y:function f1y(d){this.a=d},
f1A:function f1A(d,e){this.a=d
this.b=e},
f1x:function f1x(d,e){this.a=d
this.b=e},
f1B:function f1B(d){this.a=d},
f1r:function f1r(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1s:function f1s(d){this.a=d},
f1p:function f1p(d){this.a=d},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1o:function f1o(d,e){this.a=d
this.b=e},
f1n:function f1n(d,e){this.a=d
this.b=e},
f15:function f15(d){this.a=d},
f16:function f16(d){this.a=d},
f17:function f17(d){this.a=d},
f18:function f18(d){this.a=d},
f19:function f19(d){this.a=d},
f1a:function f1a(d){this.a=d},
f1b:function f1b(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1d:function f1d(d){this.a=d},
f0r:function f0r(d){this.a=d},
f0s:function f0s(d){this.a=d},
f0t:function f0t(d){this.a=d},
f0u:function f0u(d){this.a=d},
f0v:function f0v(d){this.a=d},
f0q:function f0q(d){this.a=d},
f0w:function f0w(d){this.a=d},
f0x:function f0x(d){this.a=d},
f1_:function f1_(d){this.a=d},
f10:function f10(d){this.a=d},
f11:function f11(d){this.a=d},
f12:function f12(d){this.a=d},
f13:function f13(d){this.a=d},
f0B:function f0B(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0F:function f0F(d){this.a=d},
f0A:function f0A(d){this.a=d},
f0G:function f0G(d){this.a=d},
f0z:function f0z(d){this.a=d},
f0H:function f0H(d){this.a=d},
f0y:function f0y(d){this.a=d},
f1u:function f1u(d){this.a=d},
f1m:function f1m(d){this.a=d},
f1i:function f1i(d){this.a=d},
f1h:function f1h(d){this.a=d},
f1j:function f1j(d,e){this.a=d
this.b=e},
f1g:function f1g(d,e){this.a=d
this.b=e},
f1k:function f1k(d,e){this.a=d
this.b=e},
f1f:function f1f(d,e){this.a=d
this.b=e},
f1l:function f1l(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1E:function f1E(d,e,f){this.a=d
this.b=e
this.c=f},
f1D:function f1D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1O:function f1O(d,e){this.a=d
this.b=e},
f1N:function f1N(d,e){this.a=d
this.b=e},
f14:function f14(d){this.a=d},
f2l:function f2l(d){this.a=d},
bhA:function bhA(d,e){this.b=d
this.a=e},
imB(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
imC(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
bCX(){var w=$.bC3,v=$.Rp
$.Rp=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,C.bCX(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cs,D.fh,g,e,f)},
ol(d,e,f,g){var w=f*9
return C.ii(D.eY,d-f/2,e-w/32,f,w/16,g,0)},
i5z(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bC3
o=$.Rp
$.Rp=o+1
w.push(new C.eP(p+"_"+o,D.fh,0,q,1,0.0016,"",24,A.a8,A.bs,A.aG,k,A.bn,null,D.bj,s,s,0,0,!1,"",0,D.cs,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bC3
o=$.Rp
$.Rp=o+1
w.push(new C.eP(p+"_"+o,D.fh,n,0,0.004,1,"",24,A.a8,A.bs,A.aG,k,A.bn,null,D.bj,s,s,0,0,!1,"",0,D.cs,0,"","","","","",!1,0))}w.push(C.ol(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ol(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bj,0.08,0.08,0.5,0.003,v,0),C.ii(D.bj,0.58,0.08,0.004,0.06,v,0),C.ii(D.bj,0.58,0.14,0.34,0.003,v,0),C.ii(D.bj,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bj,0.08,0.8,0.004,0.14,t,0),C.ii(D.bj,0.08,0.94,0.6,0.003,t,0),C.ol(0.58,0.08,0.05,e),C.ol(0.92,0.22,0.05,e),C.ol(0.08,0.8,0.05,f),C.ol(0.68,0.94,0.05,f),C.ol(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.ls,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.ls,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.ls,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.ls,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.ol(0.5,0.5,1.5,w|335544320),C.ol(0.5,0.5,1.15,w|402653184),C.ol(0.5,0.5,0.8,v|436207616),C.ol(0.95,0.05,0.4,v|855638016),C.ol(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.ol(0.85,0.08,0.7,w|1140850688),C.ol(0.1,0.35,0.5,v|855638016),C.ol(0.9,0.62,0.55,v|771751936),C.ol(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bj,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bj,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bj,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bj,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.ol(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.ol(0.5,0.2,0.65,(w|3422552064)>>>0),C.ol(0.5,0.2,0.95,w|855638016),C.ii(D.bj,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bj,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.ka,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.ka,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.ka,0.15,0.86,0.6,0.14,1712265002,0),C.ol(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d5T[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bC3
l=$.Rp
$.Rp=l+1
w.push(new C.eP(o+"_"+l,D.fh,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bs,A.aG,k,A.bn,null,D.eY,s,s,0,0,!1,"",0,D.cs,0,"","","","","",!1,0))}w.push(C.ol(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.ka,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.ka,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.ka,0.65,-0.1,0.3,0.55,v,0.5),C.ol(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bj,0.06,0.04,0.88,0.002,e,0),C.ii(D.bj,0.06,0.96,0.88,0.002,e,0),C.ii(D.bj,0.06,0.04,0.004,0.92,e,0),C.ii(D.bj,0.936,0.04,0.004,0.92,e,0),C.ii(D.bj,0.09,0.07,0.82,0.001,w,0),C.ii(D.bj,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.kb,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.kb,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.kb,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bj,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bj,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bj,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bj,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eY,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eY,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eY,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eY,-0.05,0.9,0.4,0.12,v,-0.9),C.ol(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bj,0.09,0.12,0.16,0.006,e,0),C.ii(D.bj,0.05,0.03,0.9,0.001,w,0),C.ii(D.bj,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ij3(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bC3=j
$.Rp=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fLp()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_background",m,24,A.bs,A.a8,"",1,C.bCX(),g,"","",0,!1,"",0,D.bj,l,2,"",0,0,"",D.cs,D.lR,1,0,0))
if(a9)A.d.v(q,C.i5z(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.imB(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fLo(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cH,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bn,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bs,A.a8,a1,a3*9/16,C.bCX(),a0,"","",0,!1,a2,0,D.bj,l,2,"",0,0,"",D.cs,D.lR,a3,a4,a5))
return C.rV(s,r,0,0,q,j+"_slide",D.qV,"","","",D.dk)},
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
fLp:function fLp(){},
fLo:function fLo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hWc(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ckm(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ab(u,t,s,B.w(w==null?"":w))},
fT7(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fT7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hwj){w=1
break}$.hwj=!0
t=4
w=7
return B.b(B.az(),$async$fT7)
case 7:r=e
q=B.aT(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i7(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hWc(m)
if(l!=null)J.c6(n,l)}$.Dl.c3(0,B.w(o.a),new C.fT8(n))}C.hcA()
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
return B.i($async$fT7,v)},
hcA(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dl,$.Dl.r,$.Dl.e);w.C();)J.nQ(w.d,new C.fy0(v))
$.Dl.bt($.Dl,new C.fy1())},
aPS(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPS=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPS)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ck($.Dl,B.a4($.Dl).k("ck<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gR(h)
g=o
J.c6(p,B.H(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aB("String","ngmy_slides_ai_history_v1",A.Y.az(n,null)),$async$aPS)
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
return B.i($async$aPS,v)},
ine(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hcA()
w=$.Dl.c3(0,d,new C.fTa())
v=Date.now()
u=B.C(e,B.a4(e).k("ch.E"))
J.pW(w,0,new C.Ab(new B.V(v,0,!1),f,u,g))
C.aPS()},
inb(d){var w,v=$.Dl.h(0,d)
if(v==null||J.cr(v))return
w=J.cC(v)
w.cA(v,0)
if(w.gau(v))$.Dl.W(0,d)
C.aPS()},
Ab:function Ab(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckm:function ckm(){},
fT8:function fT8(d){this.a=d},
fy0:function fy0(d){this.a=d},
fy1:function fy1(){},
fTa:function fTa(){},
ing(d){return A.d.dP(D.wU,new C.fTd(d),new C.fTe())},
hWa(d){var w
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
hW9(d){var w
switch(d.a){case 0:w=D.apj
break
case 1:w=A.zf
break
case 2:w=A.PG
break
case 3:w=I.aoZ
break
case 4:w=A.apP
break
case 5:w=A.mi
break
default:w=null}return w},
i8Q(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RL[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RL[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hWb(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Y.az(B.H(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
inc(d,e,f,g,h){var w=new B.N(D.wU,new C.fT6(),x.eC).aN(0,", "),v=""+d,u=C.hC3(h),t=F.fMO(h),s=C.hxZ(g),r=e.q(0,D.Jg)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jh)?'- New slides get an "icon3d" from: '+A.d.aN(D.RL,", ")+".\n":"",p=e.q(0,D.DW)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ind(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wU,new C.fT9(),x.eC).aN(0,", "),p=new B.fd("")
if(e.q(0,D.Jg)){p.a=s
w=s}else w=""
if(e.q(0,D.Jh))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aN(D.RL,", ")+".\n")
if(e.q(0,D.DW))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hC3(d)
v=F.fMO(d)
u=C.hxZ(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aic(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DK(a3,"{"),a5=J.h4C(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mb(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cr(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fR4(),m).bY(0,new C.fR5())
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
f=C.i8Q(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c6(u,new C.a91(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fr(u).b:q))
p=A.d.aV(D.wU,new C.fR6(r))?r:a7
o=C.fxg(J.t(w,"logo_frame"),D.Dh)
n=C.fxg(J.t(w,"logo_ring"),D.Da)
m=C.fxg(J.t(w,"photo_frame"),D.Dh)
l=C.fxg(J.t(w,"photo_ring"),D.Da)
return new C.asH(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2Q(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hBa(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DX),f7=f6?C.i1Y():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.d_(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o8("luxe",u.a,A.mi,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dk)
w=s}if(w==null)w=C.ing(f9.b)
r=g2.q(0,D.a7U)||f6
q=g2.q(0,D.Jg)
p=g2.q(0,D.TK)
o=new C.fLt()
n=B.a([],x.g)
m=new C.fLw(o,w,r)
l=new C.fLv(o,r)
k=new C.fLu(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fLs(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d7y[b8]
c0=D.d6p[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f9F.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eY,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eY,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eY,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n7,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qW,500,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TH
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eY,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.ls,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bj,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DU
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eY,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eY,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n7,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cH,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qW,500,f2,f0))
d3=D.n6
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eY,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bj,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vd:D.cs
c1.push(new C.eP(b4,D.a7S,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bs,A.aG,4279310375,A.bn,e4,D.bj,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n6
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eY,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eY,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n7,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qW,450,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TH
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eY,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eY,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bj,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bj,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aN(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Je,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n6}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dk,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i3C(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dyT[A.o.F(b1,6)]:s
n.push(new C.m0(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cm(e4,e4,e4,e4,D.DT,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aC(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fNR(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fNR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DW)
n=e.q(0,D.Jh)
if(!o&&!n){u=D.a6P
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fNU(o,s[r],n,$.i7x,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iB(t,x.e),$async$fNR)
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
return B.i($async$fNR,v)},
fMR(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fMR=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ind(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aP9(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fMR)
case 3:u=s.aPw(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMR,v)},
bEB(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEB=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dY(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.ine(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aic(i,"colorful")
t=C.inc(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aP9(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hX),$async$bEB)
case 3:u=o.aPw(m,f,h,g,D.ecr,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEB,v)},
aP9(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aP9=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vO(null,""),$async$aP9)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nk(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.re(t,d,g,"slides",null),$async$aP9)
case 7:q=i
p=q.b
if(p!=null){o=C.aic(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LR(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aP9,v)},
aPw(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPw=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DW)||e.q(0,D.Jh)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DW)}w=6
return B.b(C.fNR(d,t),$async$aPw)
case 6:s=k
w=4
break
case 5:s=D.a6P
case 4:t=d.c
w=A.d.aV(t,new C.fpV())?7:9
break
case 7:r=$.hCW
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPw)
case 10:q=k
p=q!=null?A.Y.az(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hBa(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hWb(new C.asH(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fpW(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k7<ch.E,n>")
t=B.C(new B.k7(e,new C.fpX(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TK)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPw,v)},
hfy(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5z[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
irS(d){return B.bT(A.L,null,new C.h1s(),d,!0,!0,!0,null,!1,!1,x.I)},
i2B(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aM(d)},
irR(d,e,f){return B.bT(A.L,null,new C.h1r(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hfz(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hfA(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fxg(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fxh(w))?w:""},
hxZ(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hCU(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aic(a1==null?"":a1,a0),a3=C.aic(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nz(new B.Y(r,new C.fTf(t[p]),q))
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
g=B.C(new B.Y(k,new C.fTg(),v),r)
A.d.aZ(g,new C.fTh())
if(g.length===0)continue
f=new C.fTi(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
inx(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKM
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eek
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.eel
return null},
hxB(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cL(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
inh(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oM
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cW)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.E(m*0.85,10,120)
break
case 1:j=A.j.E(m*1.15,10,120)
if(C.hxB(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hxB(n,i,v,u))if(n.w>10){f=h+1
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
inf(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aic(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5z[r]
if(q.b===s)w.J(0,q)}}v=C.hfz(e)
u=C.hfA(e)
p=C.hBa(n,D.a6P,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fTb(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k7<ch.E,n>")
o=B.C(new B.k7(w,new C.fTc(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TK)
return p},
irE(d,e,f){return B.bT(A.L,null,new C.h0F(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i1Y(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.d_(t)
w=D.cLz[s.aw(10)]
v=new C.ep7(s)
u=x.N
return new C.ep6(w,s.aw(4),J.fr(v.$1$2(D.dco,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.du5,2+s.aw(2),u),v.$1$2(D.dmy,2,u),v.$1$2(D.dxj,4,x.fP),t)},
i3C(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.d_(a5.w+a3*13)
w=new C.fm2(a4)
v=new C.fm4(a4,d)
u=new C.fm3(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c4(a2,0,w.$8(D.eY,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2Q(a0,52),"lux_spot",a5.xb(0,"spotlight")))
else A.d.c4(a2,0,w.$8(D.bj,0,0,1,1,0,"lux_back",a5.xb(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c4(a2,1,w.$8(D.bj,0,0,1,1,0,"lux_back2",a5.aHc(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.022,0.038,0.956,0.924,0,g,a5.xb(0,f),D.dk,150,C.a2Q(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.018,0.032,0.964,0.936,0,g,a5.xb(0,f),D.dk,120,C.a2Q(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dk,260,C.a2Q(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bj,0,0,1,1,0,"lux_filigree",a5.xb(0,"filigree"),D.dk,200))
break
default:a2.push(w.$10$anim$delay(D.bj,0.08,0.06,0.84,0.004,C.a2Q(a0,208),"lux_rule",a5.aHc(0,"shimmer",r),D.vc,150))
a2.push(w.$10$anim$delay(D.bj,0.08,0.936,0.84,0.004,C.a2Q(a0,144),"lux_rule2","",D.Je,220))}l=!A.d.aV(a2,new C.fm1())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xb(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xb(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2Q(r,242)
j=a5.xb(0,"orbit")
i=s===D.bj?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qW,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eY,t-0.007,0.9495,0.014,0.025,C.a2Q(r,242),"lux_g2",a5.xb(0,"orbit"),D.qW,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bj,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bj,0,0,1,1,0,"lux_velvet",a5.xb(0,"velvet")))},
o8:function o8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fTd:function fTd(d){this.a=d},
fTe:function fTe(){},
wu:function wu(d,e){this.a=d
this.b=e},
a91:function a91(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asH:function asH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fT6:function fT6(){},
fT9:function fT9(){},
fR4:function fR4(){},
fR5:function fR5(){},
fR6:function fR6(d){this.a=d},
fLt:function fLt(){},
fLw:function fLw(d,e,f){this.a=d
this.b=e
this.c=f},
fLv:function fLv(d,e){this.a=d
this.b=e},
fLu:function fLu(d,e){this.a=d
this.b=e},
fLs:function fLs(d){this.a=d},
fNU:function fNU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fNS:function fNS(d){this.a=d},
fNT:function fNT(d){this.a=d},
fpV:function fpV(){},
fpW:function fpW(){},
fpX:function fpX(){},
h1s:function h1s(){},
a1A:function a1A(d){this.a=d},
aJ6:function aJ6(d,e,f,g,h){var _=this
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
f8J:function f8J(d,e,f){this.a=d
this.b=e
this.c=f},
f8K:function f8K(d,e){this.a=d
this.b=e},
f8H:function f8H(d,e){this.a=d
this.b=e},
f8I:function f8I(d,e){this.a=d
this.b=e},
f8G:function f8G(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f8B:function f8B(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8F:function f8F(d,e){this.a=d
this.b=e},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8E:function f8E(d,e){this.a=d
this.b=e},
f8z:function f8z(d,e){this.a=d
this.b=e},
f8C:function f8C(d){this.a=d},
f8D:function f8D(d,e){this.a=d
this.b=e},
f8p:function f8p(d,e){this.a=d
this.b=e},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8s:function f8s(d){this.a=d},
f8t:function f8t(d){this.a=d},
f8u:function f8u(d){this.a=d},
f8v:function f8v(d){this.a=d},
f8r:function f8r(d,e){this.a=d
this.b=e},
f8w:function f8w(d,e){this.a=d
this.b=e},
f8X:function f8X(d){this.a=d},
f8Y:function f8Y(d){this.a=d},
f8W:function f8W(d){this.a=d},
f8Z:function f8Z(d){this.a=d},
f8V:function f8V(d){this.a=d},
f90:function f90(d){this.a=d},
f8U:function f8U(d,e){this.a=d
this.b=e},
f91:function f91(d){this.a=d},
f8T:function f8T(d,e){this.a=d
this.b=e},
f92:function f92(d){this.a=d},
f8S:function f8S(d){this.a=d},
f93:function f93(d){this.a=d},
f8R:function f8R(d,e){this.a=d
this.b=e},
f94:function f94(d){this.a=d},
f8Q:function f8Q(d,e){this.a=d
this.b=e},
f95:function f95(d){this.a=d},
f8P:function f8P(d){this.a=d},
f96:function f96(d,e){this.a=d
this.b=e},
f8O:function f8O(d,e){this.a=d
this.b=e},
f97:function f97(d){this.a=d},
f9_:function f9_(d){this.a=d},
f8N:function f8N(d,e){this.a=d
this.b=e},
f8x:function f8x(d,e,f){this.a=d
this.b=e
this.c=f},
f8y:function f8y(d,e,f){this.a=d
this.b=e
this.c=f},
f8M:function f8M(d,e){this.a=d
this.b=e},
f8L:function f8L(d,e){this.a=d
this.b=e},
h1r:function h1r(d,e){this.a=d
this.b=e},
a1z:function a1z(d,e,f){this.c=d
this.d=e
this.a=f},
aJ5:function aJ5(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f8i:function f8i(d){this.a=d},
f8j:function f8j(d){this.a=d},
f8k:function f8k(d,e){this.a=d
this.b=e},
f8l:function f8l(d){this.a=d},
f8m:function f8m(d){this.a=d},
f8h:function f8h(d,e){this.a=d
this.b=e},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8o:function f8o(d,e){this.a=d
this.b=e},
fxh:function fxh(d){this.a=d},
b3c:function b3c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFE:function aFE(d,e,f){this.c=d
this.d=e
this.a=f},
bml:function bml(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
ep9:function ep9(d){this.a=d},
ep8:function ep8(){},
bjS:function bjS(d,e){this.b=d
this.a=e},
fTf:function fTf(d){this.a=d},
fTg:function fTg(){},
fTh:function fTh(){},
fTi:function fTi(d){this.a=d},
ate:function ate(d,e){this.a=d
this.b=e},
fTb:function fTb(){},
fTc:function fTc(){},
h0F:function h0F(d,e){this.a=d
this.b=e},
a_X:function a_X(d,e,f){this.c=d
this.d=e
this.a=f},
aD9:function aD9(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dsl:function dsl(d){this.a=d},
dsm:function dsm(d){this.a=d},
dsn:function dsn(d,e){this.a=d
this.b=e},
dsq:function dsq(d){this.a=d},
dsr:function dsr(d,e){this.a=d
this.b=e},
dsp:function dsp(d,e){this.a=d
this.b=e},
dss:function dss(d){this.a=d},
dso:function dso(d,e){this.a=d
this.b=e},
bv0:function bv0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ep6:function ep6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ep7:function ep7(d){this.a=d},
fm2:function fm2(d){this.a=d},
fm4:function fm4(d,e){this.a=d
this.b=e},
fm3:function fm3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm1:function fm1(){},
aNJ:function aNJ(){},
hen(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wn(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b38:function b38(d,e,f){this.c=d
this.d=e
this.a=f},
bnW:function bnW(d,e){this.c=d
this.a=e},
ijx(d){return A.d.dP(D.In,new C.fMA(d),new C.fMB())},
ijy(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.In,new C.fMC(w),x.b4)
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
fMA:function fMA(d){this.a=d},
fMB:function fMB(){},
fMC:function fMC(d){this.a=d},
na(d,e,f,g,h){return new C.Fr(f,g,d)},
i50(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fog(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Lf
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c4(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bs,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cs,D.fh,j,k,l)},
hAY(d,e){var w
C.i50(d)
w=A.d.dP($.bGz(),new C.fKq(e),new C.fKr())
$.Lf=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lf=""}d.z=B.bq(d.z,!0,x.F)},
Fr:function Fr(d,e,f){this.a=d
this.b=e
this.e=f},
fog:function fog(){},
fSI:function fSI(){},
fSJ:function fSJ(){},
fSK:function fSK(){},
fSV:function fSV(){},
fT_:function fT_(){},
fT0:function fT0(){},
fT1:function fT1(){},
fT2:function fT2(){},
fT3:function fT3(){},
fT4:function fT4(){},
fT5:function fT5(){},
fSL:function fSL(){},
fSM:function fSM(){},
fSN:function fSN(){},
fSO:function fSO(){},
fSP:function fSP(){},
fSQ:function fSQ(){},
fSR:function fSR(){},
fSS:function fSS(){},
fST:function fST(){},
fSU:function fSU(){},
fSW:function fSW(){},
fSX:function fSX(){},
fSY:function fSY(){},
fSZ:function fSZ(){},
fKq:function fKq(d){this.a=d},
fKr:function fKr(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bj,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
DC(d,e,f,g,h,i,j,k,l){return C.er(A.bn,!1,4279310375,A.aG,"",d,24,A.bs,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cs,D.fh,j,k,l)},
bFk(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bK(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCH(d){return new B.j0((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
iay(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.aoa(A.cI.aM(A.d.gan(d.split(","))))
return w}catch(v){return null}},
iaC(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fwA(),x.dv).aN(0,"\n")},
iaB(d){switch(d.a){case 2:return A.nS
case 1:case 5:return A.fl2
default:return A.V7}},
iav(d){switch(d.a){case 2:return A.vM
case 1:case 5:return A.X7
default:return A.ada}},
iaz(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCH(u),q=(s&255)===0?v:C.bCH(d.ch),p=A.j.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nS(q,p,A.l7)
w=new B.pY(t,t,t,t)}switch(d.ax.a){case 1:return B.lQ(v,v,v,new B.kQ(r,w,v,A.aet,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xz(B.lQ(v,v,q,v,p+0.4,v,v,v))
default:return B.lQ(v,v,v,new B.kQ(r,w,B.vX(4),A.i0,v),v,v,v,v)}},
iax(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fh?0.4:12,g=A.j.E(d.e*e,h,e),f=A.j.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.iav(d.as)
v=A.j.E(d.w*(e/960),3,96)
u=C.iaC(d)
t=C.bCH(d.Q)
s=d.x.a>=700?A.ez:A.wp
r=d.y===A.cH?A.yW:A.anJ
q=d.z
p=new B.DO(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUf:A.aUe,l,l,l,l,l,l,A.dD,l,l,v,r,s,l,!0,l,l,l,l),C.iaB(d.as)))
break
case 1:case 4:o=C.iay(d.at)
n=i===D.lR&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xz(B.fc(w,l,l,l,B.ha(l,A.tk,l,l,l,l,l,l,l,A.dD,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IJ(o,n?A.aep:A.Xw,l,l)
break
case 3:w=new B.nS(A.JB,1,A.l7)
u=B.vX(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lQ(A.vM,B.fc(t,l,l,l,B.ha(l,D.esJ,l,l,l,l,l,l,l,A.dD,l,l,11,l,A.ez,l,!0,l,l,l,l),A.nS),l,new B.kQ(E.aMd,new B.pY(w,w,w,w),u,A.i0,l),l,l,l,l)
break
case 2:p=C.iaz(d,e)
break
case 5:p=C.iaw(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hsh(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.au3(m/255,p)}if(w)return new F.wz(k,l,j,l,new B.Tr(new B.kP(g,g,f,1/0),p))
if(i===D.lr){i=new B.nS(A.JB,1,A.l7)
i=B.lQ(A.vM,p,l,new B.kQ(A.pG,new B.pY(i,i,i,i),B.vX(4),A.i0,l),l,l,D.bG2,l)}else i=p
return new F.wz(k,l,j,l,new B.fV(g,f,i))},
iaA(d,e,f,g){var w,v=null,u=C.bCH(d.e),t=d.f
t=B.a([F.hqS(t!=null?B.lQ(v,v,v,new B.kQ(v,v,v,A.i0,new B.aYF(E.X9,A.ad5,B.a([u,C.bCH(t)],x.cR),v)),v,v,v,v):B.lQ(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fwz(f,g),B.U(w).k("N<1,fi>")))
return F.czH(t)},
hfC(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hfC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5g(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XG(A.x2,A.Jy,D.bHg,null,null,null,!1,null)
o=new B.Cr(o,new C.fTo(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfC,v)},
iaw(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hen(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal2()
if(h==null)h=A.aBv
j=B.tZ(4279308564)
w=B.vX(18)
v=new B.nS(B.tZ(4287531653),3,A.l7)
u=i.length===0?"My links":i
u=B.a([B.xz(B.fc(u,m,m,m,B.ha(m,A.pG,m,m,m,m,m,m,m,A.dD,m,m,12,m,A.ez,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xz(B.fc(A.a.i(l.c),m,m,m,D.fsK,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bP(t,t.gI(0),s.k("bP<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tZ(4280690220)
o=new B.aam(8,8)
n=A.a.i(r.b)
u.push(new B.o9(D.bA5,new C.ayo(new C.ajl(q),B.lQ(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fv8,A.nS),m,new B.kQ(p,m,new B.ajO(o,o,o,o),A.i0,m),m,m,D.bGv,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xz(B.fc(k,m,m,m,D.fum,m))
u.push(new C.ayo(C.hJZ(k),t))}return B.lQ(m,B.zt(u,A.Nu,A.lQ),m,new B.kQ(j,new B.pY(v,v,v,v),w,A.i0,m),m,m,D.bAX,m)},
fwA:function fwA(){},
fwz:function fwz(d,e){this.a=d
this.b=e},
fTo:function fTo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ai_(d){var w,v
for(w=0;w<32;++w){v=D.Ie[w]
if(v.a===d)return v}return null},
huV(d){var w,v,u=A.a.co(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aM(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hEb(d,e){return B.a6(d,!1).cd(B.eb(new C.h_4(e),!0,null,x.fB))},
hEa(d,e){return B.bT(A.L,null,new C.h_3(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jb:function jb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fi:function Fi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Oj:function Oj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blH:function blH(d,e,f){var _=this
_.d=d
_.e=$
_.by$=e
_.a9$=f
_.c=_.a=null},
e2I:function e2I(d){this.a=d},
e2H:function e2H(d,e,f){this.a=d
this.b=e
this.c=f},
e2G:function e2G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btx:function btx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7v:function f7v(d,e){this.a=d
this.b=e},
bgF:function bgF(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b12:function b12(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceN:function ceN(){},
ceO:function ceO(d){this.a=d},
ceP:function ceP(d,e,f){this.a=d
this.b=e
this.c=f},
ceQ:function ceQ(d,e,f){this.a=d
this.b=e
this.c=f},
h_4:function h_4(d){this.a=d},
a_u:function a_u(d,e){this.c=d
this.a=e},
aBw:function aBw(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dhz:function dhz(d,e,f){this.a=d
this.b=e
this.c=f},
dhE:function dhE(d){this.a=d},
dhF:function dhF(d){this.a=d},
dhD:function dhD(d){this.a=d},
dhG:function dhG(d){this.a=d},
dhC:function dhC(d,e){this.a=d
this.b=e},
dhH:function dhH(d){this.a=d},
dhB:function dhB(d){this.a=d},
dhI:function dhI(d){this.a=d},
dhA:function dhA(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d,e){this.a=d
this.b=e},
h_3:function h_3(d){this.a=d},
h_2:function h_2(d){this.a=d},
h_1:function h_1(d,e,f){this.a=d
this.b=e
this.c=f},
h_0:function h_0(d,e){this.a=d
this.b=e},
aNd:function aNd(){},
irQ(d){return B.bT(A.L,null,new C.h1q(),d,!0,!0,!0,null,!1,!1,x.N)},
h1q:function h1q(){},
a_P:function a_P(d){this.a=d},
bib:function bib(d){this.d=d
this.c=this.a=null},
don:function don(d){this.a=d},
doo:function doo(d,e){this.a=d
this.b=e},
dop:function dop(d){this.a=d},
i6J(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yk},
ils(d){var w=7000
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
ilr(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i6J(d)
switch(q){case"shimmer":return B.od(A.LH,g,new C.fQ1(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhw(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bWU(g,new B.Ep(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.o(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhd(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.E(0.55+s*0.45,0,1)
return B.da(B.eL(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fw(A.A,g,r,u,!0),new B.o(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bqh(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bc2(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbG(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bxn(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bul(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.btt(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bgy(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bR(0,new B.dx(!0,B.ed(A.A,B.c3(r,new B.p(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bi),1.6+s*0.15,r,r),r),0,0,0),B.eL(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fQ1:function fQ1(d,e){this.a=d
this.b=e},
bhw:function bhw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhd:function bhd(d,e,f){this.b=d
this.c=e
this.a=f},
bqh:function bqh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bc2:function bc2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbG:function bbG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxn:function bxn(d,e,f){this.b=d
this.c=e
this.a=f},
bul:function bul(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btt:function btt(d,e,f){this.b=d
this.c=e
this.a=f},
bgy:function bgy(d,e,f){this.b=d
this.d=e
this.a=f},
dhg:function dhg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
y9:function y9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fQ4(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lr},
ilx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fQ5())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aSg(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ilw(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.j.E(s,0.06,u)}else{d.w=A.j.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.j.E(r*(d.w*0.001)+0.028,0.06,u)},
ahD(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahD=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fIr(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dT,null,new C.fIs(e),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahD)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hgj(d),$async$ahD)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.M2(d,"Search states\u2026","",A.ku,"Choose state"),$async$ahD)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hf9(s)
if(p==null)p=A.d.gH(D.SB)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fQ6(p.d)
k=x.u
j=B.a([C.er(A.bn,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lR,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Do(i,0.016,D.ls,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Do(0,0.058,D.eY,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Do(0,0.058,D.eY,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lq("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lq("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hbR(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bCa("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2s("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2s("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2s("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2s("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bCa("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Do(m,0.082,D.bj,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bn,!1,i,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bs,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bj,4280172719,2,y.O,0,0,"",D.cs,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hbR(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bCa("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hx0("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hx0("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2s("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2s("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bC9("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bC9("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bCa("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lq("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lq("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bC9("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bC9("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bCa("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2s("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bC9("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2s("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hbR(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lq("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lq("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Cm(null,null,null,null,D.oM,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rV(m,null,0,0,j,n,D.qV,"","","Hati ya Ndoa",D.dk)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahD,v)},
fQ5:function fQ5(){},
fIr:function fIr(){},
fIs:function fIs(d){this.a=d},
fIp:function fIp(d){this.a=d},
fIq:function fIq(d){this.a=d},
i9Y(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i9X(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nb
case"lineThrough":return A.xc
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hz4(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Sk[w]
if(v.b===u)return v}return D.dk},
i66(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d2X[w]
if(v.b===u)return v}return D.cW},
icL(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.duR[w]
if(v.b===u)return v}return D.bj},
rV(d,e,f,g,h,i,j,k,l,m,n){return new C.m0(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hpD(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i8e(d.h(0,"layout"))
t=B.aI(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aI(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hz4(d.h(0,"transition"))
q=B.aI(d.h(0,"durationSeconds"))
q=q==null?m:A.j.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aI(d.h(0,"designRevision"))
o=o==null?m:A.j.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.dd(n,x.f)
n=B.cE(n,new C.ckj(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rV(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i8e(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.at5[w]
if(v.b===u)return v}return D.n6},
Cm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rV(4294967295,null,0,0,null,C.cD(),D.qV,"","","",D.dk)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X3(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i3Y(a6.h(0,"aspectRatio"))
t=B.aI(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.j.M(t),1,120)
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
o=C.kL(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kL(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aI(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aI(a6.h(0,"signatureInkColor"))
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
else{f=J.b7(f,new C.ck6(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.ck7(),x.N)
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
g=B.cE(g,new C.ck8(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Cm(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rV(4294967295,a3,0,0,a3,C.cD(),D.qV,"","","",D.dk)],x.g):g,v,p,o,s)},
kL(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i3Y(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dvI[w]
if(v.b===u)return v}return D.DT},
cD(){var w=Date.now(),v=$.jc
$.jc=v+1
return""+1000*w+"_"+v},
ckA(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DU){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bs,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cs,D.cW,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bs,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bj,m,2,"Click to add subtitle",0,0,"",D.cs,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,32,A.bs,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cs,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!0,f.e.l(),A.aG,"",n,20,A.bs,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bj,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cs,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Two Column Slide",0,0,"",D.cs,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bs,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bj,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cs,D.cW,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bn,!0,t.l(),A.aG,"",n,18,A.bs,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bj,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cs,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bs,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bj,m,2,"Section Header",0,0,"",D.cs,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Compare",0,0,"",D.cs,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bn,!1,l,A.aG,"",t.j(0.12).l(),24,A.bs,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bj,t.l(),2,"",0,0,"",D.cs,D.fh,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bs,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bj,m,2,"Option A",0,0,"",D.cs,D.cW,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bn,!1,l,A.aG,"",t.j(0.06).l(),24,A.bs,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bj,t.j(0.5).l(),2,"",0,0,"",D.cs,D.fh,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bn,!1,r.l(),A.aG,"",n,20,A.bs,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bj,m,2,"Option B",0,0,"",D.cs,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bs,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bj,m,2,"TERM / QUESTION",0,0,"",D.cs,D.cW,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bs,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bj,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cs,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,28,A.bs,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bj,m,2,"Quiz Question",0,0,"",D.cs,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,20,A.bs,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bj,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cs,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bn,!1,f.d.l(),A.aG,"",n,26,A.bs,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bj,m,2,"Worksheet / Assignment",0,0,"",D.cs,D.cW,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bn,!1,f.e.l(),A.aG,"",n,18,A.bs,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bj,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cs,D.cW,0.88,0.06,0.16)],x.u))
break}},
hWl(d){return A.d.dP(D.a5b,new C.ckB(d),new C.ckC())},
hWi(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c6(v,C.X3(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h86(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ckw(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.ckv())
return u},
hpG(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ckr()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asI(d){return C.hWg(d)},
hWg(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cku()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3D(m),$async$asI)
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
return B.b(B.az(),$async$asI)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aT(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hpF.h(0,m))
n=C.h86(C.h86(j,r),o)
if(n.length===0){u=C.hpG(C.hpG(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asI,v)},
ckq(d){return C.hWf(d)},
hWf(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ckq)
case 7:r=f
q=r.tQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
return B.i($async$ckq,v)},
b3e(d,e){return C.hWh(d,e)},
hWh(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3e=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b3e)
case 6:s=g
q=s.tQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Ma(r,J.ad(r)-500):r
w=7
return B.b(s.aB("StringList","ngmy_slides_deleted_"+p,o),$async$b3e)
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
return B.i($async$b3e,v)},
X4(d,e){return C.hWj(d,e)},
hWj(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X4=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hpE.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asI(a3),$async$X4)
case 5:p=a6
case 4:w=6
return B.b(C.ckq(a3),$async$X4)
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
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcF()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.ckx(o),l),l.k("M.E"))
A.d.aZ(e,new C.cky())
$.hpE.n(0,a0,e)
n=B.U(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.ckz(),n),n.k("ak.E"))
r=A.Y.az(n,null)
$.hpF.n(0,a0,r)
t=8
w=11
return B.b(B.air(a0,r),$async$X4)
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
return B.b(B.az(),$async$X4)
case 16:q=a6
w=17
return B.b(q.aB("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$X4)
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
return B.i($async$X4,v)},
JD:function JD(d,e){this.a=d
this.b=e},
asG:function asG(d,e){this.a=d
this.b=e},
vb:function vb(d,e){this.a=d
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
ckk:function ckk(){},
ckl:function ckl(){},
ckj:function ckj(){},
i3:function i3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ck9:function ck9(){},
cka:function cka(){},
ck6:function ck6(){},
ck7:function ck7(){},
ck8:function ck8(){},
jY:function jY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckB:function ckB(d){this.a=d},
ckC:function ckC(){},
ckw:function ckw(d){this.a=d},
ckv:function ckv(){},
ckr:function ckr(){},
cks:function cks(){},
ckt:function ckt(){},
cku:function cku(){},
ckx:function ckx(d){this.a=d},
cky:function cky(){},
ckz:function ckz(){},
ilI(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fQE(e,v,d,B.aR(w))
w.$1(new C.fQA())
w.$1(new C.fQB())
w.$1(new C.fQC())
w.$1(new C.fQD())
return v},
fQE:function fQE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQA:function fQA(){},
fQB:function fQB(){},
fQC:function fQC(){},
fQD:function fQD(){},
b3b:function b3b(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ckf:function ckf(d){this.a=d},
cke:function cke(){},
ckg:function ckg(){},
ckh:function ckh(d,e){this.a=d
this.b=e},
cki:function cki(d){this.a=d},
apI:function apI(d,e){this.c=d
this.a=e},
blr:function blr(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
dPR:function dPR(){},
aMZ:function aMZ(){},
ckn(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckn=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fie)
u=!1
w=1
break}u=B.lc(!1,d,t,!1,null,A.a7W,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckn,v)},
hWd(d){var w=A.d.bj(D.In,new C.cko(d))
if(w<0)return!0
return w>=4},
hWe(d){var w=A.d.bj($.bGz(),new C.ckp(d))
if(w<0)return!0
return w>=5},
cko:function cko(d){this.a=d},
ckp:function ckp(d){this.a=d},
inr(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xo()
$.pT().pb(t,new C.fTv(s),!0)
u=B.a([B.BW(v,A.pH,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.q(v,B.d(e,v,v,v,v,v,v,D.ftc,v,v,v),A.f,v,v,new B.p(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.mY,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fTv:function fTv(d){this.a=d},
in2(){return C.hfv()},
ijW(){return C.bEy()},
im0(){return C.hfm()},
aRh(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fSB(d,f),$async$aRh)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRh,v)},
fSB(d,e){var w=0,v=B.j(x.H),u
var $async$fSB=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCI
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fSC(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fSB)
case 2:return B.h(null,v)}})
return B.i($async$fSB,v)},
fSC:function fSC(d,e){this.a=d
this.b=e},
aer:function aer(d,e,f){this.c=d
this.d=e
this.a=f},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBw:function eBw(d){this.a=d},
aeI:function aeI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3a(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b39(g,m,f,d,e,h,l,k,j,o,i,null)},
hCi(d){return B.cs(new C.fQz(d))},
hfx(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ina(d){if(d===D.cs)return"None"
return C.hfx(d)},
bDd(d,e,f,g){return C.icS(d,e,f,g)},
icS(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDd=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hc9&&t.pW())t.eO()
$.hc9=!0
s.a=null
w=3
return B.b(B.i_(A.bo,!0,"Animation preview",d,new C.fzj(s,e,g,f),null,A.eG,!0,x.H),$async$bDd)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hc9=!1
case 1:return B.h(u,v)}})
return B.i($async$bDd,v)},
h2e(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h2e=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c1,x.w).w.a.a*0.88,280,440)
s=f===D.cs
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hfx(f)+" Slide transition preview"
s=s?Ah.GD:A.rJ
w=3
return B.b(C.bDd(d,s,new B.a5(t,t*0.56,B.by(B.m(14),new C.aKv(f,null),A.aq),null),r),$async$h2e)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h2e,v)},
hBA(d,e,f){var w,v,u=null,t=A.cw.aA(0,A.j.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.o((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.o(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.o(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.o(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.da(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.da(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fL((1-t)*1.2)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n_((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.o((1-t)*24,0))}},
bG3(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bG3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c1,x.w).w.a.a*0.88,300,440)
s=f===D.cs
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hfx(f)+" Element animation preview"
s=s?Ah.GD:A.rJ
w=3
return B.b(C.bDd(d,s,new B.a5(t,t*0.62,B.by(B.m(14),new C.aBb(f,null),A.aq),null),r),$async$bG3)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bG3,v)},
in9(d){var w,v,u,t,s=$.ah4.W(0,d)
if(s!=null){$.ah4.n(0,d,s)
return s}w=A.cI.aM(A.a.b2(d,A.a.co(d,",")+1))
$.ah4.n(0,d,w)
v=$.hd0=$.hd0+w.length
u=B.a4($.ah4).k("cx<1>")
for(;;){if(!(v>41943040&&$.ah4.a>1))break
t=new B.cx($.ah4,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ah4.W(0,t.gR(0)).length
$.hd0=v}return w},
imP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aC(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Ty(s,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Ty(t,A.u))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Ty(u,A.cC))
v.push(new B.en(n,l,l,A.cJ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cP(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3C(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.jP(e))
return m
case"rounded":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.D(new B.j8(B.bl(e,new B.aO(w,w))))
return m
case"triangle":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbw().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bu())
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
v.ab()}}v.D(new B.bu())
return v
case"diamond":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbw().a,e.b))
m.D(new B.aq(e.c,e.gbw().b))
m.D(new B.aq(e.gbw().a,e.d))
m.D(new B.aq(e.a,e.gbw().b))
m.D(new B.bu())
return m
case"arch":m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bdk(new B.o(t,p),new B.aO(s,s))
m.D(new B.aq(t,u))
m.D(new B.bu())
return m
default:m=new B.aF($.Q().r,A.ai,n,n,B.a([],m))
m.D(new B.ou(e))
return m}},
fO8(d,e,f){return B.cs(new C.fO9(D.fan.q(0,d),d,f,e))},
b39:function b39(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ckd:function ckd(d){this.a=d},
ckc:function ckc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckb:function ckb(){},
b36:function b36(d,e){this.b=d
this.a=e},
fQz:function fQz(d){this.a=d},
fQy:function fQy(d,e){this.a=d
this.b=e},
fzj:function fzj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzh:function fzh(d){this.a=d},
fzi:function fzi(d,e){this.a=d
this.b=e},
aKv:function aKv(d,e){this.c=d
this.a=e},
bwS:function bwS(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
fg4:function fg4(d,e,f){this.a=d
this.b=e
this.c=f},
aLc:function aLc(d,e){this.b=d
this.a=e},
Wb:function Wb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blD:function blD(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
e0r:function e0r(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0p:function e0p(d){this.a=d},
JC:function JC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck5:function ck5(d){this.a=d},
ck4:function ck4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBb:function aBb(d,e){this.c=d
this.a=e},
bfZ:function bfZ(){this.d=0
this.c=this.a=null},
det:function det(d){this.a=d},
des:function des(d){this.a=d},
a8K:function a8K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmj:function bmj(d,e){var _=this
_.d=null
_.by$=d
_.a9$=e
_.c=_.a=null},
eoQ:function eoQ(d,e,f){this.a=d
this.b=e
this.c=f},
b15:function b15(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhb:function bhb(d,e,f){this.b=d
this.c=e
this.a=f},
bsn:function bsn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f5_:function f5_(){},
fO9:function fO9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btq:function btq(d,e,f){this.b=d
this.c=e
this.a=f},
aNc:function aNc(){},
aNH:function aNH(){},
aP0:function aP0(){},
fRA(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fRA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xK.cq().MD(D.dsG,A.uz,!0),$async$fRA)
case 3:r=e
if(r==null||J.cr(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.imJ(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRA,v)},
imJ(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a92(d,new B.a1c(A.cP.gcu().aM(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.ieJ(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a92(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)}w=A.c9.Lo(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a92(d,null,w.length>6e4?A.a.aC(w,0,6e4):w)},
ieJ(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cG7().cQ6(B.rF(d,A.ip,o,o),o,o,!1).cS1(0,"word/document.xml")
if(n==null)return""
w=n.d_a()
v=A.c9.Lo(0,w==null?$.hEI():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fCq(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a92:function a92(d,e,f){this.a=d
this.b=e
this.c=f},
fCq:function fCq(){},
hWk(d,e,f,g,h,i,j,k,l){return new C.ON(l,e,d,g,f,i,h,j,k,null)},
ON:function ON(d,e,f,g,h,i,j,k,l,m){var _=this
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
aG3:function aG3(d,e,f,g,h,i,j,k,l){var _=this
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
_.by$=k
_.a9$=l
_.c=_.a=null},
eHH:function eHH(d){this.a=d},
eHF:function eHF(){},
eHG:function eHG(d){this.a=d},
eE4:function eE4(){},
eE5:function eE5(){},
eE6:function eE6(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eFt:function eFt(){},
eFu:function eFu(){},
eDs:function eDs(){},
eGN:function eGN(d){this.a=d},
eHD:function eHD(d,e){this.a=d
this.b=e},
eFD:function eFD(d,e){this.a=d
this.b=e},
eHq:function eHq(d){this.a=d},
eHr:function eHr(){},
eHs:function eHs(){},
eHt:function eHt(d){this.a=d},
eHu:function eHu(){},
eCR:function eCR(d){this.a=d},
eHE:function eHE(){},
eEM:function eEM(d,e){this.a=d
this.b=e},
eCP:function eCP(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF9:function eF9(d,e,f){this.a=d
this.b=e
this.c=f},
eFa:function eFa(d){this.a=d},
eEL:function eEL(){},
eEK:function eEK(d){this.a=d},
eEI:function eEI(){},
eEH:function eEH(d){this.a=d},
eEJ:function eEJ(){},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
eES:function eES(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
eET:function eET(d,e){this.a=d
this.b=e},
eCT:function eCT(){},
eCU:function eCU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF3:function eF3(){},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e,f){this.a=d
this.b=e
this.c=f},
eF2:function eF2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEW:function eEW(d,e,f){this.a=d
this.b=e
this.c=f},
eEX:function eEX(d,e,f){this.a=d
this.b=e
this.c=f},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d,e){this.a=d
this.b=e},
eF_:function eF_(d,e){this.a=d
this.b=e},
eF0:function eF0(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e){this.a=d
this.b=e},
eF6:function eF6(d){this.a=d},
eF7:function eF7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eF5:function eF5(d){this.a=d},
eFo:function eFo(){},
eFp:function eFp(){},
eFq:function eFq(){},
eFr:function eFr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFl:function eFl(d){this.a=d},
eFn:function eFn(){},
eFm:function eFm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eFj:function eFj(d,e,f){this.a=d
this.b=e
this.c=f},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFs:function eFs(){},
eEU:function eEU(d,e){this.a=d
this.b=e},
eD9:function eD9(){},
eDa:function eDa(d,e,f){this.a=d
this.b=e
this.c=f},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eD8:function eD8(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFx:function eFx(d,e){this.a=d
this.b=e},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFz:function eFz(d,e){this.a=d
this.b=e},
eBO:function eBO(d,e){this.a=d
this.b=e},
eD7:function eD7(d,e){this.a=d
this.b=e},
eD5:function eD5(d){this.a=d},
eFH:function eFH(d,e,f){this.a=d
this.b=e
this.c=f},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD0:function eD0(d){this.a=d},
eFG:function eFG(d,e,f){this.a=d
this.b=e
this.c=f},
eCS:function eCS(d){this.a=d},
eDt:function eDt(){},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHp:function eHp(d,e,f){this.a=d
this.b=e
this.c=f},
eGO:function eGO(d,e,f){this.a=d
this.b=e
this.c=f},
eBP:function eBP(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBz:function eBz(d){this.a=d},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBA:function eBA(d,e){this.a=d
this.b=e},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eCg:function eCg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCh:function eCh(d,e){this.a=d
this.b=e},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCm:function eCm(d){this.a=d},
eCj:function eCj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCk:function eCk(d){this.a=d},
eCi:function eCi(){},
eCf:function eCf(d,e,f){this.a=d
this.b=e
this.c=f},
eFi:function eFi(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d,e,f){this.a=d
this.b=e
this.c=f},
eHw:function eHw(d){this.a=d},
eH3:function eH3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH2:function eH2(d,e,f){this.a=d
this.b=e
this.c=f},
eH1:function eH1(){},
eH0:function eH0(d,e,f){this.a=d
this.b=e
this.c=f},
eH_:function eH_(d,e){this.a=d
this.b=e},
eGX:function eGX(d,e,f){this.a=d
this.b=e
this.c=f},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGZ:function eGZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGY:function eGY(d){this.a=d},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDW:function eDW(d,e){this.a=d
this.b=e},
eGP:function eGP(){},
eHn:function eHn(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eHm:function eHm(d){this.a=d},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBF:function eBF(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d,e,f){this.a=d
this.b=e
this.c=f},
eBN:function eBN(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e,f){this.a=d
this.b=e
this.c=f},
eBD:function eBD(d){this.a=d},
eFE:function eFE(d,e,f){this.a=d
this.b=e
this.c=f},
eHv:function eHv(d,e,f){this.a=d
this.b=e
this.c=f},
eE_:function eE_(d,e,f){this.a=d
this.b=e
this.c=f},
eDZ:function eDZ(){},
eCp:function eCp(d,e,f){this.a=d
this.b=e
this.c=f},
eCq:function eCq(d){this.a=d},
eBB:function eBB(d,e){this.a=d
this.b=e},
eDr:function eDr(d,e){this.a=d
this.b=e},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBT:function eBT(d){this.a=d},
eBU:function eBU(d,e){this.a=d
this.b=e},
eBV:function eBV(d,e){this.a=d
this.b=e},
eBS:function eBS(d){this.a=d},
eC5:function eC5(d,e){this.a=d
this.b=e},
eBR:function eBR(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eCa:function eCa(d){this.a=d},
eCb:function eCb(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCd:function eCd(){},
eCe:function eCe(){},
eBW:function eBW(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d){this.a=d},
eC2:function eC2(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eDq:function eDq(d,e,f){this.a=d
this.b=e
this.c=f},
eDp:function eDp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDo:function eDo(d,e,f){this.a=d
this.b=e
this.c=f},
eDn:function eDn(d,e){this.a=d
this.b=e},
eBL:function eBL(d,e){this.a=d
this.b=e},
eCt:function eCt(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eD6:function eD6(d){this.a=d},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFd:function eFd(d){this.a=d},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFb:function eFb(){},
eFc:function eFc(){},
eGQ:function eGQ(){},
eGR:function eGR(d,e){this.a=d
this.b=e},
eGS:function eGS(){},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eCV:function eCV(){},
eCW:function eCW(){},
eCX:function eCX(){},
eD_:function eD_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e,f){this.a=d
this.b=e
this.c=f},
eEq:function eEq(d){this.a=d},
eEp:function eEp(){},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEo:function eEo(d){this.a=d},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEn:function eEn(d){this.a=d},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEm:function eEm(d){this.a=d},
eEv:function eEv(d,e){this.a=d
this.b=e},
eEl:function eEl(d){this.a=d},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEj:function eEj(d){this.a=d},
eEy:function eEy(d,e){this.a=d
this.b=e},
eEi:function eEi(d){this.a=d},
eEb:function eEb(d,e){this.a=d
this.b=e},
eEc:function eEc(d){this.a=d},
eEd:function eEd(d){this.a=d},
eEa:function eEa(d){this.a=d},
eEe:function eEe(d,e){this.a=d
this.b=e},
eE9:function eE9(d){this.a=d},
eEf:function eEf(d,e){this.a=d
this.b=e},
eE8:function eE8(d){this.a=d},
eEg:function eEg(d,e){this.a=d
this.b=e},
eE7:function eE7(d){this.a=d},
eEh:function eEh(d){this.a=d},
eDj:function eDj(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDi:function eDi(d,e){this.a=d
this.b=e},
eDl:function eDl(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEA:function eEA(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEC:function eEC(d){this.a=d},
eED:function eED(d){this.a=d},
eG_:function eG_(d,e){this.a=d
this.b=e},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
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
eGb:function eGb(d){this.a=d},
eGd:function eGd(d){this.a=d},
eGe:function eGe(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eGm:function eGm(d){this.a=d},
eFY:function eFY(d){this.a=d},
eGo:function eGo(d){this.a=d},
eFX:function eFX(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGq:function eGq(d,e){this.a=d
this.b=e},
eFW:function eFW(d,e,f){this.a=d
this.b=e
this.c=f},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFZ:function eFZ(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGr:function eGr(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d,e,f){this.a=d
this.b=e
this.c=f},
eFL:function eFL(d,e,f){this.a=d
this.b=e
this.c=f},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eGs:function eGs(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eGt:function eGt(d){this.a=d},
eFT:function eFT(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGx:function eGx(d){this.a=d},
eFS:function eFS(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eGC:function eGC(d,e){this.a=d
this.b=e},
eFP:function eFP(d){this.a=d},
eGD:function eGD(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
eGE:function eGE(d,e){this.a=d
this.b=e},
eFN:function eFN(d){this.a=d},
eCo:function eCo(d,e,f){this.a=d
this.b=e
this.c=f},
eCn:function eCn(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH5:function eH5(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDv:function eDv(d){this.a=d},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eE3:function eE3(){},
eE2:function eE2(){},
eHj:function eHj(d){this.a=d},
eHi:function eHi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHg:function eHg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHd:function eHd(d,e){this.a=d
this.b=e},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCN:function eCN(d,e,f){this.a=d
this.b=e
this.c=f},
eCM:function eCM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCB:function eCB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCC:function eCC(d,e){this.a=d
this.b=e},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCA:function eCA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCz:function eCz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
eCL:function eCL(d,e){this.a=d
this.b=e},
eEF:function eEF(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEG:function eEG(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d,e,f){this.a=d
this.b=e
this.c=f},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e,f){this.a=d
this.b=e
this.c=f},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e,f){this.a=d
this.b=e
this.c=f},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e,f){this.a=d
this.b=e
this.c=f},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBx:function eBx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFA:function eFA(d){this.a=d},
eFB:function eFB(d,e){this.a=d
this.b=e},
agd:function agd(d,e,f){this.a=d
this.b=e
this.c=f},
aAy:function aAy(d,e){this.c=d
this.a=e},
beL:function beL(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
d9V:function d9V(d){this.a=d},
d9U:function d9U(d){this.a=d},
bf_:function bf_(d,e){this.c=d
this.a=e},
dai:function dai(d){this.a=d},
daj:function daj(d){this.a=d},
KE:function KE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beK:function beK(){this.d=!1
this.c=this.a=null},
d9S:function d9S(d){this.a=d},
d9O:function d9O(d){this.a=d},
d9T:function d9T(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9R:function d9R(d){this.a=d},
d9P:function d9P(d){this.a=d},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
Qw:function Qw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0G:function a0G(d,e,f){this.c=d
this.d=e
this.a=f},
aG6:function aG6(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.by$=e
_.a9$=f
_.c=_.a=null},
eIh:function eIh(){},
eI7:function eI7(d){this.a=d},
eIg:function eIg(d){this.a=d},
eI8:function eI8(d){this.a=d},
eI9:function eI9(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d,e,f){this.a=d
this.b=e
this.c=f},
eIe:function eIe(){},
eIf:function eIf(d){this.a=d},
eIa:function eIa(d){this.a=d},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d){this.a=d},
eIi:function eIi(d,e,f){this.a=d
this.b=e
this.c=f},
eIk:function eIk(d,e){this.a=d
this.b=e},
eIj:function eIj(d){this.a=d},
KK:function KK(d,e){this.c=d
this.a=e},
btW:function btW(d,e){this.b=d
this.a=e},
bjL:function bjL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjK:function bjK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLU:function aLU(){},
aNU:function aNU(){},
bzK:function bzK(){},
aNV:function aNV(){},
fTw(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fTw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xK.cq().MD(B.a(["pdf"],x.s),A.uz,!0),$async$fTw)
case 3:q=e
if(q==null||J.cr(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.br3(s,"data:application/pdf;base64,"+A.cP.gcu().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTw,v)},
inl(d){var w,v,u,t,s,r
try{w=B.jI(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aiZ(t,1,200)
return s}}catch(r){}return 1},
fTn(d){return C.ink(d)},
ink(d){var w=0,v=B.j(x.T),u
var $async$fTn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTn,v)},
bFj(d,e,f,g){return C.inu(d,e,f,g)},
inu(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFj=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.E(b5.a,80,2400)
q=A.j.E(b5.b,80,2400)
p=B.hCT(b7,new B.av(r,q))
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
l=Math.max(B.jh(b0),a9)}o=A.j.E(o-0.04,0,1)
n=A.j.E(n-0.04,0,1)
m=A.j.E(m+0.04,0,1)
l=A.j.E(l+0.04,0,1)
j=A.j.E(m-o,0.12,1)
i=A.j.E(l-n,0.12,1)
h=A.o.E(A.j.V(800*(i/j)),180,420)
$.Q()
g=new B.pZ(new B.py())
f=B.zs(g,null)
a7=B.K()
a7.r=A.rs.gp(0)
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
return B.b(a3.xC(800,h),$async$bFj)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.he),$async$bFj)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eS(A.dN.gaU(a5))
a7=A.cP.gcu().aM(a7)
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
return B.i($async$bFj,v)},
aRQ(d,e,f){return C.ini(d,e,f)},
ini(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.as:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiF(d,e,f,new C.fTl(r,q),q,"Sign document"),$async$aRQ)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFj(q,t,r.b,r.c),$async$aRQ)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3d(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRQ,v)},
ins(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hvI(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hvI(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
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
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lR&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hvj(q.ay)+";border:2px solid "+C.hvj(q.ch)+'"></div>'
break
case 5:l=C.hen(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal2()
if(p==null)p=A.aBv
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
hvj(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hvI(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFh(d,e){var w=0,v=B.j(x.H)
var $async$bFh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ce(null,null,!0,null,new C.fTu(e,C.ins(e),d),d,null,!0,!0,x.H),$async$bFh)
case 2:return B.h(null,v)}})
return B.i($async$bFh,v)},
bFi(){var w=0,v=B.j(x.T),u,t,s
var $async$bFi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hs(92,2400),$async$bFi)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fTn(s),$async$bFi)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFi,v)},
aRR(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hfC(d),$async$aRR)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A1.fW6(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRR,v)},
hpC(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b3d:function b3d(d,e,f){this.a=d
this.b=e
this.c=f},
fTl:function fTl(d,e){this.a=d
this.b=e},
fTu:function fTu(d,e,f){this.a=d
this.b=e
this.c=f},
fTr:function fTr(d){this.a=d},
fTs:function fTs(d,e,f){this.a=d
this.b=e
this.c=f},
fTt:function fTt(d,e,f){this.a=d
this.b=e
this.c=f},
inj(d){return C.kL(d.w)},
inq(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.ipH()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zc(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hJ_()
if(w.b.test(u))return u
return null},
hCV(d,e,f){var w,v,u=C.hRY(d),t=$.or()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
inw(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eB(w,d.b);v.C();){u=w.gR(w).y
t=C.zc(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fTj(d,e){var w,v=d.y,u=C.zc(v==null?"":v)
if(u!=null)return d.y=u
w=C.inw(new B.Y(e,new C.fTk(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hCV(v==null?"":v,null,w)},
inv(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kL(w.w))return null
v=w.y
return C.zc(v==null?"":v)},
hWm(){var w,v=$.or(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.he(u)},
X7(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X7)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bL),$async$X7)
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
return B.i($async$X7,v)},
X8(d){return C.hWn(d)},
hWn(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$X8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X8)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cL,null),$async$X8)
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
return B.i($async$X8,v)},
a94(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a94=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a94)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X7(),$async$a94)
case 4:s=a6
r=C.zc(a2==null?"":a2)
if(r==null)r=a3!=null?C.hCV(a3,null,A.N):null
q=x.N
p=B.aR(q)
for(o=J.dm(s),n=J.aU(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zc(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dS.aM(t)
g.n(0,"payload",A.cP.gcu().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UJ.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zc(J.k(q==null?"":q))
if(f==null)f=C.hpH(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.X8(s),$async$a94)
case 7:u=new B.aHy(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hWm()
n=r==null
d=n?C.hpH(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dS.aM(t)
q.n(0,"payload",A.cP.gcu().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.UJ.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.X8(s),$async$a94)
case 8:u=new B.aHy(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a94,v)},
hpH(d){var w,v,u=$.or()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.aw(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asK(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asK)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X7(),$async$asK)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.bt(t,new C.ckD(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.X8(t),$async$asK)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asK,v)},
asJ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zc(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asJ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X7(),$async$asJ)
case 6:t=o.i7(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zc(J.k(q==null?"":q))===p){u=C.a93(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asJ,v)},
a93(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a93=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a93)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X7(),$async$a93)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aI(l.h(n,"usesRemaining"))
j=k==null?null:A.j.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.c9.cH(0,A.cI.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UJ.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a3(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.az(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dM(B.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.X8(p),$async$a93)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a93,v)},
inp(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fTq(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fTy(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.Y.az(w,null)}return A.Y.az(C.inp(d==null?B.a([],x.D):d,f,g),null)},
fTx(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fTx=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a94(h,d,e,f,g),$async$fTx)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zc(e==null?"":e)
u=new B.aHk(s,t)
w=1
break}t=A.dS.aM(h)
t=A.kH.gcu().aM(t)
u=new B.aHk(C.zc(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTx,v)},
hfE(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.eG(q,s)||J.eG(q,r))return!0
if(J.d3(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
int(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hfE(u))return u
t=A.a.co(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hfE(s))return s}r=A.a.co(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hfE(s))return s}}return null},
fTm(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cH(0,A.cI.aM(J.np(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i5v(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiq(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asJ(t[1]),$async$aiq)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTm(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zc(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asJ(r),$async$aiq)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTm(s)
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
return B.b(C.a93(t[1]),$async$aiq)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fTm(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fTm(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiq,v)},
i5v(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UJ.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hfB(C.X3(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cE(t,new C.foN(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hfB(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
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
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X3(B.a3(o,x.N,x.z))
if(e&&C.kL(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bR(144e8).ag()
return p},
bF2(){var w=0,v=B.j(x.aT),u,t,s
var $async$bF2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hr(),$async$bF2)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiq(s),$async$bF2)
case 4:t=e
u=J.cr(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF2,v)},
h1t(d){var w=0,v=B.j(x.T),u,t
var $async$h1t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i_(D.YN,!0,"Dismiss",d,new C.h1u(),new C.h1v(),A.GB,!0,x.N),$async$h1t)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fgn)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1t,v)},
irT(d,e,f,g,h){return B.a6(d,!1).cd(B.eb(new C.h1w(h,e,g,f),!0,null,x.H))},
fTk:function fTk(d){this.a=d},
ckD:function ckD(d){this.a=d},
fTq:function fTq(){},
foN:function foN(d){this.a=d},
h1u:function h1u(){},
h1v:function h1v(){},
h1w:function h1w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X5:function X5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aG4:function aG4(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eHO:function eHO(){},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHN:function eHN(d,e){this.a=d
this.b=e},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHV:function eHV(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
X6:function X6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmF:function bmF(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(){},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d,e){this.a=d
this.b=e},
aG1:function aG1(d){this.a=d},
aG2:function aG2(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eBr:function eBr(d){this.a=d},
eBq:function eBq(){},
eBs:function eBs(d){this.a=d},
eBn:function eBn(d){this.a=d},
eBm:function eBm(){},
eBo:function eBo(d){this.a=d},
eBp:function eBp(d){this.a=d},
bxd:function bxd(){},
asL:function asL(d){this.a=d},
aG5:function aG5(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eI2:function eI2(d){this.a=d},
eI1:function eI1(d){this.a=d},
ib4(){var w,v,u,t
for(v=0;v<4;++v){w=D.dgr[v]
try{if(Ae.c0T(w)){u=w
return u}}catch(t){}}return null},
Sa(d,e){return C.ik6(d,e)},
ik6(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sa=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ib4()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oM?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qR(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.pv(new C.fNC(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.ce(null,A.dg,!1,null,new C.fND(n,m),c6,null,!0,!0,b9)
k=new C.fNH(b7)
j=new C.fNI()
i=null
t=4
b3=c2.a
h=Al.aUa(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h4u(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZc(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IX.z4(i,"dataavailable",new C.fNE(e))
d=new B.c2(new B.bk($.bE,x.dT),x.b2)
A.IX.z4(i,"stop",new C.fNF(d))
J.aj3(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sa)
case 8:w=7
return B.b(c5.$1(d0),$async$Sa)
case 7:a0=d0
J.h4v(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aj3(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aj3(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sa)
case 15:w=14
return B.b(c5.$1(d0),$async$Sa)
case 14:a0=d0
case 13:J.h4v(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aj3(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcF()
else b3=!0
if(!b3){w=17
break}J.h4v(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fe,null,b9),$async$Sa)
case 18:w=16
break
case 17:J.aj3(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aj3(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.ok),$async$Sa)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n2(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HF(b0)
J.lK(b0)
B.bQ(A.qo,new C.fNG(a7),b9)
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
if(p.pW())p.eO()
c3=o
b3=$.aw()
c3.sic(b3)
J.aSM(c3,0)
c3=n
c3.sic(b3)
J.aSM(c3,0)
c3=m
c3.sic(b3)
J.aSM(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sa,v)},
fNC:function fNC(d,e,f){this.a=d
this.b=e
this.c=f},
fNB:function fNB(){},
fND:function fND(d,e){this.a=d
this.b=e},
fNH:function fNH(d){this.a=d},
fNI:function fNI(){},
fNE:function fNE(d){this.a=d},
fNF:function fNF(d){this.a=d},
fNG:function fNG(d){this.a=d},
bxr:function bxr(d,e,f){this.c=d
this.d=e
this.a=f},
fiI:function fiI(){},
fiJ:function fiJ(){},
ckZ(d){var w=0,v=B.j(x.at),u,t,s
var $async$ckZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asT(d,A.Ah),$async$ckZ)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bE(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bD
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckZ,v)},
ckY(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8L:function a8L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmo:function bmo(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
epH:function epH(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d,e){this.a=d
this.b=e},
a9E:function a9E(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oS$=k
_.oT$=l
_.oU$=m
_.o3$=n},
a9F:function a9F(d,e){this.a=d
this.b=e},
b4T:function b4T(){},
coT:function coT(){},
coU:function coU(){},
coV:function coV(d,e,f,g,h,i,j,k,l){var _=this
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
hJZ(d){return new C.ajl(d)},
a44:function a44(){},
ajl:function ajl(d){this.a=d},
aT5:function aT5(){},
ayo:function ayo(d,e){this.d=d
this.b=e
this.a=null},
aUz:function aUz(d){this.b=d
this.a=null},
bDX(d,e){var w=0,v=B.j(x.H),u
var $async$bDX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.Q().gua().Ml(d,e),$async$bDX)
case 2:u=B.fWf()
w=3
return B.b(u,$async$bDX)
case 3:return B.h(null,v)}})
return B.i($async$bDX,v)},
hA6(d,e){return(A.t6[(d^e)&255]^A.o.aI(d,8))>>>0},
fFF(d,e,f,g,h,i){var w=C.igk(d,A.dj,f,null,A.d2,g,h,i)
return w},
hC3(d){var w=F.hCM(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hRY(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pC.h(0,w)
if(v!=null)return v
for(u=A.pC.gdO(A.pC),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aC(s,0,2)
return A.a.aC(s+"XX",0,2)},
hCb(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<59;++w)v+="- "+D.dmg[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDa(d,e){return C.icN(d,e)},
icN(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWk(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cv(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jN(o,"share",[p]),x.H),$async$bDa)
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
return B.i($async$bDa,v)},
hfv(){var w=0,v=B.j(x.y),u,t,s
var $async$hfv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fwB
s=$.bCI
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDa(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfv,v)},
bEy(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fwB
l=$.bCI
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A1.hwr()?3:4
break
case 3:w=5
return B.b(C.bDa(m,k),$async$bEy)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCJ
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
J.HF(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEy)
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
return B.i($async$bEy,v)},
hfm(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hfm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCJ
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lW.rj(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hfm,v)},
hfD(d,e){var w=0,v=B.j(x.H),u,t
var $async$hfD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lW.rj(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hfD,v)},
b3P(d,e){var w=0,v=B.j(x.y),u
var $async$b3P=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3R(d,e),$async$b3P)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3Q(d),$async$b3P)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3P,v)}},D,O,Ao,Aa,A_,A0,X,Ap,G,F,E,H,R,S,A1,A2,Aq,M,Ar,A3,As,At,Ab,K,Au,Av,A4,N,Y,P,Z,Aw,Ac,Ax,Q,Ad,Ay,Ae,Af,Az,Ag,AA,Ah,Ai,AB,AC,T,AD,I,AE,U,V,L,A5,A6,A7
J=c[1]
B=c[0]
A=c[2]
Aj=c[207]
A8=c[74]
Ak=c[54]
Al=c[65]
W=c[224]
A9=c[58]
Am=c[150]
An=c[235]
C=a.updateHolder(c[5],C)
D=c[222]
O=c[142]
Ao=c[42]
Aa=c[226]
A_=c[223]
A0=c[236]
X=c[212]
Ap=c[135]
G=c[193]
F=c[35]
E=c[225]
H=c[96]
R=c[122]
S=c[152]
A1=c[32]
A2=c[181]
Aq=c[238]
M=c[161]
Ar=c[188]
A3=c[106]
As=c[137]
At=c[231]
Ab=c[117]
K=c[227]
Au=c[239]
Av=c[134]
A4=c[68]
N=c[201]
Y=c[83]
P=c[163]
Z=c[115]
Aw=c[124]
Ac=c[119]
Ax=c[229]
Q=c[126]
Ad=c[144]
Ay=c[94]
Ae=c[59]
Af=c[197]
Az=c[40]
Ag=c[81]
AA=c[160]
Ah=c[151]
Ai=c[234]
AB=c[237]
AC=c[233]
T=c[75]
AD=c[230]
I=c[178]
AE=c[240]
U=c[52]
V=c[228]
L=c[209]
A5=c[232]
A6=c[112]
A7=c[64]
C.oi.prototype={
vE(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.uh(t,v)
return new C.oi(t===0?!1:w,v,t)},
bPG(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DI()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.uh(w,u)
return new C.oi(r===0?!1:s,u,r)},
bQc(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DI()
w=o-d
if(w<=0)return p.a?$.hh8():$.DI()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.uh(w,u)
q=new C.oi(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a3R())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.F(e,16)===0)return r.bPG(v)
u=w+v+1
t=new Uint16Array(u)
C.hsT(r.b,w,e,t)
w=r.a
s=C.uh(u,t)
return new C.oi(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQc(v)
t=w-v
if(t<=0)return n.a?$.hh8():$.DI()
s=n.b
r=new Uint16Array(t)
C.i19(s,w,e,r)
w=n.a
q=C.uh(t,r)
p=new C.oi(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a3R())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a3R())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cO8(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9c(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9c(t,e)
if(s===0)return $.DI()
if(r===0)return t.a===e?t:t.vE(0)
w=s+1
v=new Uint16Array(w)
C.i17(t.b,s,d.b,r,v)
u=C.uh(w,v)
return new C.oi(u===0?!1:e,v,u)},
HN(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DI()
w=d.c
if(w===0)return t.a===e?t:t.vE(0)
v=new Uint16Array(s)
C.bbW(t.b,s,d.b,w,v)
u=C.uh(s,v)
return new C.oi(u===0?!1:e,v,u)},
bCB(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.uh(r,u)
return new C.oi(!1,u,s)},
bCA(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.uh(u,r)
return new C.oi(!1,r,v)},
bCC(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.uh(p,m)
return new C.oi(s!==0,m,s)},
VA(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DI()
w=t.a
if(w===e.a){if(w){w=$.a3R()
return t.HN(w,!0).bCC(e.HN(w,!0),!0).a9c(w,!0)}return t.bCB(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCA(v.HN($.a3R(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9c(e,v)
if(C.cO8(u.b,t,e.b,w)>=0)return u.HN(e,v)
return e.HN(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vE(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9c(e,v)
if(C.cO8(u.b,t,e.b,w)>=0)return u.HN(e,v)
return e.HN(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DI()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hsU(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.uh(w,t)
return new C.oi(q===0?!1:r,t,q)},
bPF(d){var w,v,u,t
if(this.c<d.c)return $.DI()
this.aTQ(d)
w=$.ha5.cq()-$.aza.cq()
v=C.ha7($.ha4.cq(),$.aza.cq(),$.ha5.cq(),w)
u=C.uh(w,v)
t=new C.oi(!1,v,u)
return this.a!==d.a&&u>0?t.vE(0):t},
ct2(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aTQ(d)
w=C.ha7($.ha4.cq(),0,$.aza.cq(),$.aza.cq())
v=C.uh($.aza.cq(),w)
u=new C.oi(!1,w,v)
if($.ha6.cq()>0)u=u.mD(0,$.ha6.cq())
return t.a&&u.c>0?u.vE(0):u},
aTQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hsQ&&d.c===$.hsS&&g.b===$.hsP&&d.b===$.hsR)return
w=d.b
v=d.c
u=16-A.o.galu(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hsO(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hsO(g.b,f,u,r)}else{r=C.ha7(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.ha8(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cO8(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbW(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbW(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i18(p,r,i);--o
C.hsU(h,j,0,r,o,s)
if(r[i]<h){m=C.ha8(j,s,o,n)
C.bbW(r,l,n,m,r)
while(--h,r[i]<h)C.bbW(r,l,n,m,r)}--i}$.hsP=g.b
$.hsQ=f
$.hsR=w
$.hsS=v
$.ha4.b=r
$.ha5.b=l
$.aza.b=s
$.ha6.b=u},
gX(d){var w,v,u,t=new C.cO9(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cOa().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oi&&this.aS(0,e)===0},
tR(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vx(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galu(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cOb(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cOc(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lp(A.aH.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vE(0):r
while(v.c>1){u=$.hGN()
if(u.c===0)B.bi(D.bad)
t=v.ct2(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPF(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaTR:1,
$ihM:1}
C.aTf.prototype={
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
cS1(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gan(d){return A.d.gan(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.ki(w,w.length,B.U(w).k("ki<1>"))}}
C.SN.prototype={
d_a(){var w,v
if(this.as==null)this.bfM()
w=this.as
v=w==null?null:w.aqE()
return v==null?null:v.eV()},
bfM(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqE().eV()
this.as=new C.bSr(v)}},
gZ(d){return this.at}}
C.a4N.prototype={
a7(){return"CompressionType."+this.b}}
C.bKb.prototype={
eG(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zR[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zR[d])
s.c=t}return v}}
C.bIt.prototype={
cQ5(d,e){var w,v,u,t,s,r=this,q=new C.bKb(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eG(8)!==66||q.eG(8)!==90||q.eG(8)!==104)return!1
w=r.a=q.eG(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.crk(q)
if(t<0)return!1
if(t===0){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
s=r.crn(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
return!0}}return!0},
crk(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eG(8)
if(t!==D.dyj[u])v=!1
if(t!==D.d9q[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crn(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eG(1),d2=((d3.eG(8)<<8|d3.eG(8))<<8|d3.eG(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c5O()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eG(3)
if(q<2||q>6)return-1
v=d3.eG(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eG(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.bZ(6,$.hEM(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eG(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eG(1)===0)break
i=d3.eG(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hEL()
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
if(f<h)h=f}c9.c13(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avJ(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avJ(d3)}while(a3===0||a3===1);++a5
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
a3=c9.avJ(d3)
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
c1=(c1<<8^D.It[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Ix[b9];++b9
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
if(b8===0){b8=D.Ix[b9];++b9
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
if(b8===0){b8=D.Ix[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Ix[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Ix[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.It[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.It[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.It[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.It[c1>>>24&255^c7&255])>>>0
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
avJ(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eG(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eG(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c13(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c5O(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cG8.prototype={
aK1(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTg(e)
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
if(w>0)e.aK4(w,!1)
r.crI(e)
q=r.r
v=r.f
u=e.aNa(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baB()
s.d_9(0,u,e,f)
q.push(s)}},
crI(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8T(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tC()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tC()
d.b3()
d.b3()
d.aT()
d.aT()
d.tC()
d.tC()
u=d.tC()
t=d.tC()
this.f=u
this.r=t
d.c=s},
bTg(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8T(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.an8(A.ip)
o.aOp(r.eV(),A.ip,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cG6.prototype={}
C.ayO.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cG9.prototype={
aK1(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIe.h(0,e.b3())
o.c=w==null?D.No:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.aph(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b_5:D.ES
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.ES&&u>2){w=o.y
w.toString
s=B.rF(w,A.ip,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.aph(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b_6
o.ax=new C.cG6(r,q)
w=D.aIe.h(0,q)
o.c=w==null?D.No:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpw().length},
aqE(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rF(new Uint8Array(0),A.ip,q,q)
w=r.at
if(w!==D.ES)if(p.gI(0)<=0)r.at=D.ES
else{if(w===D.b_5){p=r.bNY(p)
r.Q=p}else if(w===D.b_6){p=r.bNB(p)
r.Q=p}r.at=D.ES}w=r.c
if(w===D.ake){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q0.C5(p.eV(),!0,!1)
else{t=B.a9t(A.ip,r.w)
p=r.Q
p.toString
A.q0.a4Z(p,t,!0,!1)
u.b=t.Hm()}r.Q.c=v
return B.rF(u.bl(),A.ip,q,q)}else if(w===D.akf){s=B.a9t(A.ip,32768)
p=r.Q
v=p.c
C.hK9().cQ5(p,s)
u=s.Hm()
r.Q.c=v
return B.rF(u,A.ip,q,q)}else return B.rF(p.eV(),A.ip,q,q)},
bpw(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbA(d){var w=this.ch,v=C.KA(C.hA6(w[0].M(0),d))
w[0]=v
v=w[1].a5(0,v.VA(0,C.KA(255)))
w[1]=v
w[1]=v.aO(0,C.KA(134775813)).a5(0,C.KA(1)).VA(0,C.KA(4294967295))
w[2]=C.KA(C.hA6(w[2].M(0),w[1].mD(0,24).M(0)))},
aTe(){var w=(this.ch[2].VA(0,C.KA(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bNY(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rF(new Uint8Array(0),A.ip,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbA(u[v.c++]^r.aTe())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTe()
r.bbA(s)
u&2&&B.aj(t)
t[w]=s}return B.rF(t,A.ip,q,q)},
bNB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i0N(k,w,v)
p=new Uint8Array(B.cb(A.aH.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cb(A.aH.dt(q,v,k)))
if(!C.hsn(A.aH.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bH2(k,new Uint8Array(16),p)
k=x.S
m=J.a6i(0,k)
m=n.r=new C.coI(m)
m.c=!0
m.b=m.boN(!0,new C.aul(p))
if(m.c)m.d=B.bq(D.oK,!0,k)
else m.d=B.bq(D.zE,!0,k)
l=C.hqy(C.hqA(),64)
l.bib(new C.aul(o))
n.w=l
n.cZH(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hsn(k,m))throw B.W(B.fl("macs don't match"))
return B.rF(r,A.ip,null,null)}}
C.baB.prototype={
d_9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.aph(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rF(t,A.ip,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a8T(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tC()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tC()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tC()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.aph(u)
f.c=n.as
t=new C.cG9(D.No,n,D.ES,B.a([C.KA(0),C.KA(0),C.KA(0)],x.f3))
n.ch=t
t.aK1(0,f,g)},
u(d){return this.at}}
C.cG7.prototype={
cQ6(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cG8(B.a([],x.fT))
this.a=g
g.aK1(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTf(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SN(o,A.o.aq(Date.now(),1000),0):C.hiz(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hiz(o,q.w,q)
if(k.as==null)k.bfM()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.an8(A.ip)
j.aOp(o,A.ip,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GQ(!1).E0(i,0,h,!0)}}return v}}
C.bH2.prototype={
cZH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CY(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hJT(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRv(u,0,w,0,o)}else{o===$&&B.c()
q.bO1(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LG(w,0)
m.x=A.aH.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.CY(0,w,0,w.length)
return f}}
C.coN.prototype={}
C.coR.prototype={}
C.coL.prototype={}
C.aul.prototype={}
C.coQ.prototype={
cQl(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bib(new C.aul(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSC(n.a,n.b,t,s,r)
r+=v}A.aH.h9(f,g,g+w,s)
return o.a.c},
bSC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CY(0,d,0,d.length)
v.CY(0,f,0,4)
u=m.c
u===$&&B.c()
w.LG(u,0)
u=m.c
A.aH.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CY(0,s,0,s.length)
w.LG(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.coM.prototype={}
C.coK.prototype={}
C.aum.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aum){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tR(d,e){var w=this.a
w===$&&B.c()
w=A.o.tR(w,e.gc1k())
if(!w)e.gc1k()
return w},
aMA(d,e){this.a=0
this.b=d},
tU(d){return this.aMA(d,null)},
aNd(d){var w,v=this,u=v.b
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
w.b3e(v,u)
u=w.b
u===$&&B.c()
w.b3e(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3e(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bx(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.coP.prototype={
ir(d){var w,v=this
v.a.tU(0)
v.c=0
A.aH.hy(v.b,0,4,0)
v.w=0
w=v.r
A.d.hy(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aq7(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4G(u,0)
v.c=0}v.a.aNd(1)},
CY(d,e,f,g){var w=this.cq3(e,f,g)
f+=w
g-=w
w=this.cq4(e,f,g)
this.cpV(e,f+w,g-w)},
LG(d,e){var w,v=this,u=C.hqz(v.a),t=u.a
t===$&&B.c()
t=C.hgb(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hgb(w,3)
v.cpZ()
v.cpW(u)
v.aux()
v.ck4(d,e)
v.ir(0)
return 20},
b4G(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ot(A.aH.gaU(d),d.byteOffset,d.length).getUint32(e,A.iy===w.d)
if(w.w===16)w.aux()},
aux(){this.cZG()
this.w=0
A.d.hy(this.r,0,16,0)},
cpV(d,e,f){while(f>0){this.aq7(d[e]);++e;--f}},
cq4(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4G(d,e)
e+=4
f-=4
w.aNd(4)
v+=4}return v},
cq3(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aq7(d[e]);++e;--f;++v}return v},
cpZ(){this.aq7(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aq7(0)}},
cpW(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aux()
u=v.d
switch(u){case A.iy:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fj:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
ck4(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iy===this.d,s=0;s<w;++s){r=v[s]
q=J.ot(A.aH.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gde(d){return this.f}}
C.coS.prototype={
cZG(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.coO.prototype={
bib(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CY(0,w,0,v)
w=s.d
w===$&&B.c()
r.LG(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hy(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.h9(w,0,u,s.d)
s.bcO(s.d,u,54)
s.bcO(s.e,u,92)
u=s.d
r.CY(0,u,0,u.length)},
LG(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LG(s,w)
s=u.e
t.CY(0,s,0,s.length)
v=t.LG(d,e)
s=u.e
A.aH.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CY(0,s,0,s.length)
return v},
bcO(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.coJ.prototype={}
C.coI.prototype={
a3d(d){return(D.oK[d&255]&255|(D.oK[d>>>8&255]&255)<<8|(D.oK[d>>>16&255]&255)<<16|D.oK[d>>>24&255]<<24)>>>0},
boN(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.ot(A.aH.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3d((m>>>8|(m&$.qu[24])<<24)>>>0)^D.cLr[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ot(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3d((k>>>8|(k&$.qu[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3d((k>>>8|(k&$.qu[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ot(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3d((g>>>8|(g&$.qu[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3d(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRv(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ot(A.aH.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.el[a8&255]
u=D.el[a9>>>8&255]
t=$.qu[8]
s=D.el[b0>>>16&255]
r=$.qu[16]
q=D.el[b1>>>24&255]
p=$.qu[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.el[a9&255]
s=D.el[b0>>>8&255]
u=D.el[b1>>>16&255]
v=D.el[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.el[b0&255]
u=D.el[b1>>>8&255]
s=D.el[a8>>>16&255]
q=D.el[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.el[b1&255]
a8=D.el[a8>>>8&255]
a9=D.el[a9>>>16&255]
b0=D.el[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.el[n&255]
b0=D.el[m>>>8&255]
a9=D.el[l>>>16&255]
a8=D.el[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.el[m&255]
b0=D.el[l>>>8&255]
o=D.el[b1>>>16&255]
s=D.el[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.el[l&255]
o=D.el[b1>>>8&255]
b0=D.el[n>>>16&255]
u=D.el[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.el[b1&255]
o=D.el[n>>>8&255]
s=D.el[m>>>16&255]
v=D.el[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.el[a8&255]^C.nN(D.el[a9>>>8&255],24)^C.nN(D.el[b0>>>16&255],16)^C.nN(D.el[b1>>>24&255],8)^b6[w][0]
m=D.el[a9&255]^C.nN(D.el[b0>>>8&255],24)^C.nN(D.el[b1>>>16&255],16)^C.nN(D.el[a8>>>24&255],8)^b6[w][1]
l=D.el[b0&255]^C.nN(D.el[b1>>>8&255],24)^C.nN(D.el[a8>>>16&255],16)^C.nN(D.el[a9>>>24&255],8)^b6[w][2]
b1=D.el[b1&255]^C.nN(D.el[a8>>>8&255],24)^C.nN(D.el[a9>>>16&255],16)^C.nN(D.el[b0>>>24&255],8)^b6[w][3]
a7=D.oK[n&255]
b0=D.oK[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oK[l>>>8&255]
a9=D.oK[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oK[b1>>>8&255]
h=D.oK[n>>>16&255]
g=D.oK[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oK[l>>>24&255]
s=s[3]
a1=J.ot(A.aH.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ot(A.aH.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ot(A.aH.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ot(A.aH.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bO1(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ot(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ot(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ot(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ot(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ek[a6&255]
v=D.ek[b0>>>8&255]
u=$.qu[8]
t=D.ek[a5>>>16&255]
s=$.qu[16]
r=D.ek[a4>>>24&255]
q=$.qu[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ek[a4&255]
t=D.ek[a6>>>8&255]
v=D.ek[b0>>>16&255]
w=D.ek[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ek[a5&255]
v=D.ek[a4>>>8&255]
t=D.ek[a6>>>16&255]
r=D.ek[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ek[b0&255]
a5=D.ek[a5>>>8&255]
a4=D.ek[a4>>>16&255]
a6=D.ek[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ek[p&255]
a6=D.ek[b0>>>8&255]
a4=D.ek[n>>>16&255]
a5=D.ek[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ek[o&255]
a4=D.ek[p>>>8&255]
a7=D.ek[b0>>>16&255]
t=D.ek[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ek[n&255]
a7=D.ek[o>>>8&255]
a5=D.ek[p>>>16&255]
v=D.ek[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ek[b0&255]
a7=D.ek[n>>>8&255]
t=D.ek[o>>>16&255]
w=D.ek[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ek[a6&255]^C.nN(D.ek[b0>>>8&255],24)^C.nN(D.ek[a5>>>16&255],16)^C.nN(D.ek[a4>>>24&255],8)^b5[a9][0]
o=D.ek[a4&255]^C.nN(D.ek[a6>>>8&255],24)^C.nN(D.ek[b0>>>16&255],16)^C.nN(D.ek[a5>>>24&255],8)^b5[a9][1]
n=D.ek[a5&255]^C.nN(D.ek[a4>>>8&255],24)^C.nN(D.ek[a6>>>16&255],16)^C.nN(D.ek[b0>>>24&255],8)^b5[a9][2]
b0=D.ek[b0&255]^C.nN(D.ek[a5>>>8&255],24)^C.nN(D.ek[a4>>>16&255],16)^C.nN(D.ek[a6>>>24&255],8)^b5[a9][3]
a4=D.zE[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zE[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zE[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zE[o>>>8&255]
i=D.zE[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zE[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ot(A.aH.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSq.prototype={}
C.bSr.prototype={
gI(d){var w=this.a.length
return w},
aqE(){return B.rF(this.a,A.ip,null,null)}}
C.czf.prototype={
Nj(d){var w=d.w,v=Math.max(1,A.j.cL(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.ab7(v,t+20,u+16,t,u,B.ur(d.x))},
nD(d){return!1}}
C.bTs.prototype={
cK8(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTt(),x.E))},
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
return B.b(p.bDX(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axs.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9r.prototype={
A(d,e){if(e==null)return!1
if(J.bU(e)!==B.b2(this))return!1
return e instanceof C.a9r&&e.a===this.a},
gX(d){return B.bx(B.b2(this),B.xl(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h26)return"["+(w+B.ea(this.a))+"]"
return"[ObjectKey "+(w+B.ea(this.a))+"]"}}
C.a24.prototype={
S(){return new C.aKQ(B.aR(x.N))},
cXO(d){return this.d.$1(d)},
cVu(){return this.e.$0()}}
C.aKQ.prototype={
Y(){this.a2()
this.PJ()},
PJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVu(),$async$PJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fha(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
ZT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fhe(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fhf(t))
w=3
return B.b(C.aoT(p),$async$ZT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fhg(t,s,p))
w=4
return B.b(t.PJ(),$async$ZT)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZT,v)},
a28(d){return this.cuf(d)},
cuf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a28=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fhb(t))
s=J.t(d,"id")
w=3
return B.b(C.c3r(J.k(s==null?"":s)),$async$a28)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fhc(t))
w=1
break}q=C.hfB(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cXO(B.a([q],x.D)),$async$a28)
case 4:if(t.c==null){w=1
break}t.m(new C.fhd(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a28,v)},
PI(d,e){return this.bOt(0,e)},
bOt(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.fh5(q),r,null,!0,!0,x.y),$async$PI)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fh6(t))
s=s.h(e,"id")
w=4
return B.b(C.aoS(J.k(s==null?"":s)),$async$PI)
case 4:if(t.c==null){w=1
break}t.m(new C.fh7(t))
w=5
return B.b(t.PJ(),$async$PI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
cJ7(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bK(v)-1]+" "+B.bV(v)},
aT5(d,e){var w=null,v=B.m(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.p(w,w,w,v,w,D.Q1,A.n),w,e,w,w,w,w,w,e)},
aT4(d){return this.aT5(d,44)},
b9T(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q1:u,r=B.m(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.AB,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([Z.AB,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,D.bHi,u,u,u)],p))}return B.E(B.aA(A.c5,B.cT(u,B.A(q,A.m,u,A.ba,A.i,0,u,u),u,u,A.b3,new B.p(u,u,u,r,u,s,A.n),A.h_,u,u,u,u,A.qv,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fhk(this,d),u,u,u,u,u,u,!1,A.a4),1)},
co1(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.ZR,n=B.m(18),m=p?A.d5:A.dr
m=B.L(m,A.r,p?1.8:1)
w=this.aT4(A.qJ)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aW_,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aW1,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Q1:q
u=p?q:B.L(A.aV,A.r,1.6)
r=p?D.bYH:q
return B.aA(q,B.cT(q,B.A(B.a([w,A.bd,t,B.cT(q,r,q,q,A.b3,new B.p(q,q,u,q,q,v,A.a7),A.fS,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b3,new B.p(o,q,m,n,q,q,A.n),A.fS,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fh9(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cvS(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJ7(J.k(o==null?"":o))
o=B.m(18)
w=B.L(A.dr,A.r,1)
v=r.aT4(A.P9)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aW_,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aW1,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6m(A.hW,A.bx,"Bring it back",r.r?q:new C.fhh(r,d))
return B.q(q,B.A(B.a([v,A.bd,t,p,A.bm,r.b6m(A.eg,A.c0,"Delete",r.r?q:new C.fhi(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(D.ZR,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBw,q,q,q)},
b6m(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.q(w,B.X(d,v?A.aV:e,w,w,w,19),A.f,w,w,new B.p(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auN(d,e,f){var w=null
return new B.D(D.bAw,B.x(B.a([B.X(d,A.aV,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fyw,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.fqx,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cc
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.c1,x.w).w
u=B.q(i,i,A.f,i,i,new B.p(A.aV,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aT5(A.zq,46),A.bd,D.bIh],t)
if(j.r)s.push(D.erb)
s.push(B.aG(i,i,i,i,A.t2,i,i,i,new C.fhn(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.L(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bEf,s,i),B.q(i,B.A(B.a([j.b9T(0,A.z7,"Save",j.a.c.length),j.b9T(1,A.Pr,"Saved",o.gI(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.p(r,i,p,q,i,i,A.n),i,i,i,D.bDf,A.ey,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bx).j(0.12)
s=B.m(14)
r=B.L((j.y?A.c0:A.bx).j(0.4),A.r,1)
p=j.y
n=p?A.Pd:A.eb
n=B.X(n,p?A.c0:A.bx,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vn,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.p(u,i,r,s,i,i,A.n),i,i,i,D.bDb,A.it,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fui,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fxv,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fho(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.m,i,A.e,A.i,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auN(A.qJ,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.co1(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eqI)
else if(j.e==null)s.push(j.auN(A.a2m,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auN(A.pn,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cvS(r.gR(r)))
A.d.v(u,s)}q.push(new B.dn(1,A.cp,B.cl(u,i,i,A_.am1,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8q()
p=s?i:D.Q1
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b8.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z7,m?A.jV:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bDS,B.aA(i,B.cT(i,B.A(B.a([k,A.aac,new B.dn(1,A.cp,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jV:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e0),i)],t),A.m,i,A.ba,A.i,0,i,i),i,i,A.b3,new B.p(s,i,i,o,n,p,A.n),A.h_,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bn(!0,B.x(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b77,i,i,i,i,i,i,i,i)}}
C.oJ.prototype={
aj(){return B.H(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.ZM.prototype={
S(){return new C.azm(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azm.prototype={
Y(){this.a2()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a33(t.a.c),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
cCa(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qC(t.d,new C.cPB(d))
v=w<0
if(v&&C.i1b(d))return t.f
u=t.d
if(v)J.pW(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h5P(new C.cPC(t),v)
return t.f=t.f.bG(new C.cPD(t,d),v).eM(new C.cPE())},
Jb(d,e,f){return this.chz(0,e,f)},
b06(d,e){return this.Jb(0,e,!1)},
chz(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.eb(new C.cPx(t,e),!1,null,x.H)),$async$Jb)
case 3:w=4
return B.b(t.f,$async$Jb)
case 4:w=5
return B.b(t.PT(),$async$Jb)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jb,v)},
b_l(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dL5:d
this.Jb(0,new C.oJ(w,v,new B.V(Date.now(),0,!1)),!0)},
c7R(){return this.b_l(null)},
aey(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aey=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPF(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aey)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_l(s)
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
Ja(d,e){return this.bOk(0,e)},
bOk(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ja=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.cPs(e),s,null,!0,!0,x.y),$async$Ja)
case 3:if(g!==!0){w=1
break}t.m(new C.cPt(t,e))
w=4
return B.b(t.f,$async$Ja)
case 4:w=5
return B.b(C.ahr(t.a.c,e.a),$async$Ja)
case 5:w=6
return B.b(t.PT(),$async$Ja)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ja,v)},
DM(d){return this.bGs(d)},
bGs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPo(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DM)
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
return B.b(t.b06(0,d),$async$DM)
case 9:w=5
break
case 7:w=10
return B.b(F.hgd(r,d.b,null),$async$DM)
case 10:w=5
break
case 8:w=11
return B.b(t.Ja(0,d),$async$DM)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DM,v)},
c1g(){var w,v,u,t,s=null,r=[D.dL8,D.dL6,D.dL7],q=new C.cPv(),p=B.m(26),o=x.V,n=B.a([new B.ac(0,A.G,A.cZ.j(0.4),A.eZ,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.duO[w]
u=A.c.j(0.18)
t=new B.aO(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.oY,s,s,s),A.f,s,s,new B.p(u,s,s,new B.bf(t,t,t,t),s,s,A.n),s,s,s,s,A.oo,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fYo,A.U,B.bW(A.bH,l,A.bt,s,6,6),A.aR,B.aA(s,B.q(s,D.f7O,A.f,s,s,new B.p(A.c,s,s,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cM,10)],o),s,A.n),s,s,s,s,W.amp,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPu(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.m,s,A.e,A.i,0,s,s),A.f,s,s,new B.p(s,s,s,p,n,D.c67,A.n),s,s,s,s,D.bEp,s,s,s)},
bGq(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.by(B.m(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ev(A.A,F.apu(d.b),A.f,A.c_),D.exc,B.ap(v,B.aA(v,B.q(v,D.bZx,A.f,v,v,D.b84,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPj(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.p(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fnD,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.U,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fuu,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPk(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPl(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eH(B.a([new B.D(O.akY,B.hb(B.aA(s,B.q(s,A.arP,A.f,s,s,new B.p(s,s,s,s,B.a([new B.ac(0,A.G,A.b8.j(0.5),A.I,12)],x.V),E.wQ,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9f(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nx,s,s,s,!0,s,s,s,s,s,D.fYs,s,s,s,1,s,!0)
if(t.e)r=D.bbx
else{w=t.c1g()
v=B.a([D.fJx,A.ae],r)
if(J.cI(t.d)){u=B.m(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fn3,s,s,s),A.f,s,s,new B.p(D.bgM,s,s,u,s,s,A.n),s,s,s,s,A.yO,s,s,s))}r=B.a([new B.oe(A8.a0d,new B.mu(w,s),s),new B.oe(D.bDM,new B.mu(B.A(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cr(t.d))r.push(D.ff0)
else r.push(new B.oe(D.bDd,B.PM(new B.oN(new C.cPG(t),J.ad(t.d),!0,!0,!0,0,B.to(),s),D.baM),s))
r=B.w0(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfn,r,s,!1,!1,s,s)}}
C.ZK.prototype={
S(){return new C.azi(B.a([],x.bx))},
UQ(d){return this.d.$1(d)}}
C.aGF.prototype={}
C.azi.prototype={
b3g(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b6,A.aP),w),u=this.gb05()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aP),w)
w.aW(0,u)
return new C.aGF(v,w,f)},
EA(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qt,new C.cON(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b6,A.aP),v)
t=m.gb05()
u.aW(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aP),v)
u.aW(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aP),v)
u.aW(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aP),v)
n.aW(0,t)
r.push(new C.aGF(o,n,p.c))}if(r.length===0)r.push(m.b3g("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpw()
q=r.a
q.UQ(q.c)}q=r.d
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
gpw(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
Bl(){var w=0,v=B.j(x.H),u=this,t
var $async$Bl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpw()
t=u.a
w=2
return B.b(t.UQ(t.c),$async$Bl)
case 2:return B.h(null,v)}})
return B.i($async$Bl,v)},
c9d(){this.m(new C.cOM(this))
this.EA()},
b_0(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cOP(w,d,v))
w.EA()},
c9e(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cOX())
this.EA()
$.aW.x1$.push(new C.cOY(w))},
Rd(d){return this.cnS(d)},
cnS(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(80,1400,A.eN),$async$Rd)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rd)
case 8:p=f
o=q.b.toLowerCase()
n=J.aj_(o,".png")?"image/png":"image/jpeg"
r.m(new C.cOQ(d,n,p))
r.EA()
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
return B.i($async$Rd,v)},
yo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hDZ(r,t.gpw()),$async$yo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cOO(t,s))
t.EA()
case 1:return B.h(u,v)}})
return B.i($async$yo,v)},
co9(d){var w,v=this,u=null,t=F.fMT(d.c)
if(t==null)return new B.bL(A.a6,u,u,B.ho(D.bSG,D.fM5,new C.cOS(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ad,A.t,B.a([B.by(B.m(12),B.fR(t,A.A,u,u,A.cj,A.c_,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6n(A.jI,new C.cOT(v,d)),A.bm,v.b6n(A.cz,new C.cOU(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6n(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aP(!1,w,!0,new B.D(A.hF,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aT,0,w,w,A.cR,w,w,A.aj)},
JO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bl(),$async$JO)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hgd(s,t.gpw(),new C.cOW(t)),$async$JO)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eH(B.a([new B.D(A.qu,B.ho(D.bXq,D.fSj,m.gaAz(),B.ft(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.arO,l,l,l,new C.cOZ(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.YU,l,1,l,l,l,!1,l,!1,E.nx,l,l,l,!0,l,l,l,l,l,D.fMY,l,l,l,1,l,!0),i=Az.aWw(N.lF,A.c,Ag.XE,A.oD,D.fNI,m.gc9c()),h=B.m(18),g=m.gayw(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.aA(l,B.q(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apu(m.gpw()),A.f,A.dB),l),A.f,l,l,new B.p(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ew,B.E(B.x(B.a([D.h_2,A.ax,B.d(F.heE(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fAk,l,l,l),A.X,B.dh(E.ar6,E.aWP,g,B.bp(A.cZ,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.p(E.YU,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),g,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.oW,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),w,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.U,w,A.U,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aO(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fAS,l,l,l)
r=B.aG(l,l,l,l,D.bW3,l,l,l,v===0?l:new C.cP_(m,v),l,l,l,l,"Move up",A.ce)
q=h.length
p=B.aG(l,l,l,l,D.c1x,l,l,l,v===q-1?l:new C.cP0(m,v),l,l,l,l,"Move down",A.ce)
q=q===1?l:new C.cP1(m,v)
o=new B.aO(12,12)
n=new B.aO(12,12)
f.push(B.q(l,B.x(B.a([new B.c7(A.aL,A.e,A.i,A.m,l,A.p,l,0,B.a([s,A.b4,r,p,B.aG(l,l,l,l,B.X(A.eg,A.pd,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ce)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bf(o,o,o,o),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cf,!0,A.a5,l,A.ao,l,l,l,l),A.an,m.co9(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bf(n,n,n,n),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.m,l,A.e,A.i,0,A.p),A.f,l,l,new B.p(E.nx,l,new B.bH(u,u,u,u),new B.bf(w,w,w,w),l,l,A.n),l,l,new C.a9r(g),A.ej,D.bBM,l,l,l))}return B.oK(!0,B.c4(j,E.aiV,B.cl(f,l,l,D.bCf,l,l,A.ah,!1),l,!1,!1,i,l),new C.cP2(m),x.C)}}
C.azk.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nx,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.cZ.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eL,B.aJ(!1,A.a3,!0,t,B.aP(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.p(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVl,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.p(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arN.prototype={
S(){return new C.aFt()}}
C.aFt.prototype={
Y(){this.a2()
this.a_z()},
bz(d){this.bJ(d)
if(d.c!=this.a.c)this.a1Y()},
a1Y(){var w=0,v=B.j(x.H),u=this,t
var $async$a1Y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a1Y)
case 2:u.d=null
if(u.c!=null)u.m(new C.ekY(u))
w=3
return B.b(u.a_z(),$async$a1Y)
case 3:return B.h(null,v)}})
return B.i($async$a1Y,v)},
a_z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.Zp(B.cF(n,0,null),new B.Q8(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iV(0).dg(0,A.qq),$async$a_z)
case 7:if(r.c==null){w=1
break}r.d.tW(!1)
r.m(new C.ekW(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ekX(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_z,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a3()},
cch(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.ekZ(w))}else{v.qo(0)
w.m(new C.el_(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.m(8*n.d)
m=B.a([D.jy.j(0.92),D.Mf.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qM,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.p(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bi)}if(p.f)return B.at(B.X(A.aql,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcp
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AK(s,o),o),A.t,A.c_)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.q(o,B.X(A.hu,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.p(v,o,o,o,o,o,A.a7),o,o,o,o,new B.R(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.by(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccg(),o,o,o,o,o,o,!1,A.a4)}}
C.y7.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jC.prototype={}
C.ael.prototype={
B(d){return B.pd(new C.e7t(this,B.S(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adK.prototype={
B(d){var w,v,u=null,t=B.S(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.L(D.jy.j(t?0.35:0.4),A.r,1),p=t?D.MU:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.m(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fF(0.5625,C.ikr(w),u),A.aq,u,u,new B.p(u,u,l,m,o,u,A.n),u,u,u,D.amU,u,u,u,u),1)
m=D.jy.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jy,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aP(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.bo6,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.p(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.ale,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.p(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.ya.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o4.prototype={}
C.blp.prototype={
a_I(d){var w=null
return new B.bL(A.a6,w,w,B.BU(A.A,B.q(w,w,A.f,w,w,new B.p(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ccL(){return this.a_I(1)},
azc(d){var w=null,v=B.m(8),u=B.L(A.ir,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(D.agv,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.ir,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.q(v,v,A.f,v,v,new B.p(v,v,B.L(A.ir,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.o(-8.36,0))],u),A.m,v,A.ba,A.i,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.an,w.azc("TAARIFA ZA WANANDOA"),A.an,w.ccL(),A.cU,w.a_I(0.9),A.cU,w.a_I(0.7),A.U,w.azc("TAMKO LA MAKUBALIANO"),A.fK,w.a_I(1),A.cU,w.a_I(0.95),A.U,w.azc("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.aeo.prototype={
B(d){return B.pd(new C.epK(B.S(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.ag3.prototype={
B(d){var w,v,u,t,s,r=null,q=B.S(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.L(A.aC.j(q?0.35:0.4),A.r,1),m=q?D.bnD:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.m(10),i=B.L(A.aC.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.hf9(w.a)
if(v==null)v=A.d.gH(D.SB)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fF(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fR(C.hf8(v.d),A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.alS,new C.blp(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.p(r,r,i,j,l,r,A.n),r,r,r,D.amU,r,r,r,r),1)
j=A.aC.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A2.MV,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bg0,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.p(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.ale,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.p(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.la.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8U.prototype={}
C.WU.prototype={
S(){var w=$.aw()
return new C.aFK(new B.cw(null,x.A),new B.au(A.av,w),new B.au(A.av,w),B.mW(0,null,null),A.d.gH(D.a5s),D.dVv,B.a([],x.L),B.a([],x.gE))}}
C.aFK.prototype={
Y(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.Aa(C.fQM(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fPI().bG(new C.esH(v),w)
$.rg().jo(0,"assets/images/ngmy_logo.png").bG(new C.esI(v),w).eM(new C.esJ())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a3()},
afp(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Jt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(88,1600,A.eN),$async$Jt)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Jt)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hEf(m,p),$async$Jt)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFH(new B.q8(o,1),m),$async$Jt)
case 10:if(r.c!=null)r.m(new C.esj(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afp("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jt,v)},
XG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hEf(s,q),$async$XG)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFH(new B.q8(r,1),s),$async$XG)
case 4:if(t.c!=null)t.m(new C.esf(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XG,v)},
afq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.esq(q))
t=4
q.a.toString
p=C.ipt()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afq)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esr(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afp(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ess(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afq,v)},
a_N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.esl(q,i))
t=4
q.a.toString
p=C.ips()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_N)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esm(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.esn(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eso(q))
$.aW.x1$.push(new C.esp(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_N,v)},
cd0(d){this.m(new C.esk(this,d))},
ER(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ER=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.esh(q))
t=4
w=7
return B.b($.aW.gmS(),$async$ER)
case 7:w=8
return B.b(B.bQ(A.mS,null,x.H),$async$ER)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qi))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$ER)
case 9:o=e
w=10
return B.b(o.hs(A.he),$async$ER)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.aht(J.eS(A.dN.gaU(n)),"ngmy_news.png","image/png"),$async$ER)
case 11:m=e
q.afp(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afp(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esi(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ER,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.ln,a2,a2,a2,new C.esy(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bXW,a2,a2,a2,new C.esz(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oC,a2,a2,a2,a4?a1.gb1o():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eH(v,a2,a2,!0,!0,A.BX,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f7Z,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eZ,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fF(0.7142857142857143,B.ev(A.A,new B.em(new C.b2O(t,s,r,a1.x,a2),a1.d),A.f,A.dB),a2),A.f,a2,a2,new B.p(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,R.tA,a2,a2,a2)
t=a1.as?a2:a1.gcd_()
t=B.a([B.E(B.dh(D.bYI,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cf,a2,a2,a2),t,B.bp(D.u7,a2,a2,a2,A.c,A.h3,a2,a2,new B.b9(B.m(14),Q.vO),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.by(B.m(10),B.fR(r,A.A,a2,a2,A.cj,A.c_,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aG(a2,a2,a2,a2,D.bVl,a2,a2,a2,a1.as?a2:a1.gbMW(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,R.tA,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aUW("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.doH[o]
p.push(B.n1(a2,D.u7,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pN,a2,a2,a2),A.hg,new C.esA(a1,n),a2,a2,Q.vO,a2))}p=B.bW(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.fYB,A.bd,B.jv(a2,a2,a2,D.fId,a2,new C.esB(a1),m==="en",a2,a2,a2,a2),A.ae,B.jv(a2,a2,a2,D.fI8,a2,new C.esC(a1),m==="sw",a2,a2,a2,a2)],w),A.vI,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,R.tA,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5s,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bP(i,i.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTo(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5s,10,a2,j),h=j.$ti,j=new B.bP(j,j.gI(0),h.k("bP<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTo(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcd2()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bF.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.U,p,A.X,m,A.aB,new B.D(A.cx,l,a2),new B.a5(a2,78,k,a2),A.U,new B.a5(a2,78,j,a2),A.aR,B.aA(a2,B.q(A.A,B.A(B.a([D.bYC,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fB,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(a2,a2,a2,h,v,G.uX,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dX,B.A(B.a([D.dFN,A.au,D.bID],w),A.m,a2,A.e,A.i,0,a2,a2),A.U],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.aa:A.a6
q=e?A.b8.j(0.35):D.u7
p=new B.aO(16,16)
d=new B.ay(A.bA,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fyg,a2,a2,a2),A.f,a2,Aa.Xs,new B.p(q,a2,new B.bH(d,d,d,d),new B.bf(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.it,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d9U[o]
t.push(B.n1(a2,D.u7,B.d(a0,a2,a2,a2,a2,a2,a2,A.Kx,a2,a2,a2),A.hg,new C.esD(a1,a0),a2,a2,Q.vO,a2))}u.push(B.bW(A.bH,t,A.bt,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aUW("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.esE(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcd1()
u.push(B.A(B.a([t,A.ae,B.IC(A.zu,s,B.nZ(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1o()
u.push(B.dh(A.oC,D.fU0,t,B.bp(A.cX,a2,a2,a2,a2,A.Kg,a2,a2,new B.b9(B.m(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.alD,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.L(E.km.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.q(a2,B.A(B.a([E.aad,A.ew,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.ju,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.p(E.BO,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bEH,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.BX,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aUW(d){var w=null
return B.bt(w,new B.b6(4,B.m(14),A.a1),w,A.eW,w,w,w,w,!0,w,w,w,w,w,w,D.u7,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Ez,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTo(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bF:A.bA
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kr,t,t,t,t),A.fK],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bAL,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jn,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.q(t,B.x(w,A.m,t,A.ba,A.i,0,A.p),A.f,t,t,new B.p(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.esg(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Aa.prototype={
beY(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Aa(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cNS(d){var w=null
return this.beY(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aED(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciR(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciP(),B.U(w).k("N<1,n>")).bY(0,new C.ciQ())
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
return this.beY(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG3(d){return this.f}}
C.tM.prototype={
a7(){return"NewsLayout."+this.b}}
C.C8.prototype={
a7(){return"NewsFrame."+this.b}}
C.lx.prototype={}
C.b2O.prototype={
rU(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1q(d,e,f,g){return this.rU(d,e,null,1.25,f,A.bs,g)},
Qw(d,e,f,g,h){return this.rU(d,e,f,1.25,g,A.bs,h)},
azi(d,e,f,g,h){return this.rU(d,e,null,f,g,A.bs,h)},
azh(d,e,f,g,h){return this.rU(d,e,f,g,0,A.bs,h)},
b1s(d,e,f,g,h){return this.rU(d,e,null,f,0,g,h)},
cd6(d,e,f,g,h,i){return this.rU(d,e,f,g,0,h,i)},
azg(d,e,f,g){return this.rU(d,e,null,f,0,A.bs,g)},
aft(d,e,f){return this.rU(d,e,null,f,0,A.bs,A.cT)},
b1r(d,e,f,g,h){return this.rU(d,e,f,g,0,h,A.cT)},
cd5(d,e,f,g){return this.rU(d,e,null,f,0,g,A.cT)},
cd4(d,e,f,g){return this.rU(d,e,f,g,0,A.bs,A.cT)},
afu(d,e,f,g,h,i){return this.rU(d,e,f,g,h,A.bs,i)},
b1p(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.en(d,u,u,A.cJ,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bX,new B.jg(1),u,u,h,u,A.bY,u,A.cr)
v.o5(g)
if(!v.b.a.c.gaGp())return w
w-=2}return j},
afr(d,e,f,g,h,i,j,k){return this.b1p(d,e,f,g,h,i,j,k,A.bs)},
aBu(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aBt(d){return this.aBu(null,!1,d)},
air(d,e){return this.aBu(null,d,e)},
cuZ(d,e){return this.aBu(d,!1,e)},
gb3D(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXD(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pe(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afr(w.gaXD(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXD(),v,g,A.a2,v,v,v,w.azh(u,t,f,1.02,A.V),e,v,v)},
aXI(d){return this.Pe(d,A.K,null,2,78,30)},
acH(d,e,f,g,h){return this.Pe(d,e,null,f,g,h)},
c19(d,e,f,g,h){return this.Pe(d,A.K,e,f,g,h)},
c18(d,e,f){return this.Pe(d,A.K,null,e,f,30)},
Sw(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jD,B.d(s,u,g,A.a2,u,u,u,v.b1r(w,v.b1p(t,w,A.cT,d,g,h,15,1.2,A.cH),f,1.2,A.cH),e,u,u),u)},
b9x(d){return this.Sw(d,A.K,null,3,24)},
aCY(d,e,f,g){return this.Sw(d,e,null,f,g)},
cCE(d,e,f){return this.Sw(d,A.K,e,3,f)},
b9y(d,e){return this.Sw(d,e,null,3,24)},
cCC(d,e){return this.Sw(d,A.K,null,3,e)},
cCD(d,e,f){return this.Sw(d,e,null,3,f)},
asP(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f2,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qw("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O9(){return this.asP(null,!0)},
asO(d){return this.asP(null,d)},
bIT(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.ib,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cd5(this.d.as,13.5,1.2,A.cH),e,w,w),w),w)},
w5(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3D(),h=A.o.aq(j.bE(B.c1(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ice(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1q(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afr(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afr(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eO,l,l,l,m.afu(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.R(18,w,18,w),l,l,l),A.U,B.A(B.a([B.d(C.bEX(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iR,A.i,0,l,l),A.an,m.air(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ew,B.E(B.d(i,l,1,A.eO,l,l,l,m.azg(v,u*0.9,1,A.V),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.X,B.A(B.a([B.d(C.bEX(j),l,l,l,l,l,l,m.Qw(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iR,A.i,0,l,l),A.U,m.cuZ(B.b0(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3D()
v=B.d("NGMY",l,l,l,l,l,l,m.azi(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eL(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rU(k,r*0.72,o,1.05,-0.5,A.cH,A.u),l,l,l),A.f,l,l,new B.p(q,l,l,p,l,l,A.n),l,l,l,l,new B.R(t,s,t,s),l,l,l),l),A.b4,new B.dn(1,A.cp,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afu(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.dY,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.U,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l)
t=m.air(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azg(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.air(!0,1.4),A.ax,B.d(C.bEX(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aBt(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azi(v,u,1,3,A.V),A.K,l,l),A.U,m.air(!0,1.2),A.ax,B.A(B.a([B.d(C.bEX(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l),A.ax,m.aBt(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adT(d){return this.w5(d,!1)},
afs(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afu("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.p(t,w,w,s,w,w,A.n),w,w,w,w,new B.R(v,u,v,u),w,w,w)},
cd3(d,e){return this.afs(d,null,e,null)},
aZT(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azh("Roboto",15,t,1,A.cC),r=B.X(E.aow,t,w,w,w,18),q=A.a.aC(A.oH[B.bK(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h1,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axZ(){return this.aZT(A.n1)},
b6A(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afu("Roboto",this.afr(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBx(d,e,f){return this.b6A(d,e,f,30)},
aD0(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.uo,B.d(v,w,e,A.a2,w,w,w,this.cd4("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9C(d){return this.aD0(d,3,22)},
cCP(d,e){return this.aD0(d,e,22)},
ue(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BG(D.bHz,w,s)
if(v==="sepia")w=new B.BG(D.bHy,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.at(B.X(A.z2,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.p(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.YP.j(0.38)],x.O),s,s),A.n),A.bi))
return new B.a5(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ue(d-24,e-24),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,j,j,j,A.ey,j,j,j),A.f,j,j,new B.p(j,j,w,j,j,j,A.n),j,e,j,j,A.md,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ems,14)],x.V)
v=k.ue(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eL(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1r(i.as,13.5,D.bhL,1.1,A.cH),A.K,j,j),j,j,j),1)],x.p),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(D.blD,j,j,j,w,j,A.n),j,e,j,j,D.bCa,j,j,d),j)
case 3:w=B.m(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.by(B.m(25),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.at(B.q(j,B.hS(k.ue(v,v),A.aq),A.f,j,j,new B.p(i,j,w,j,j,j,A.a7),j,t,j,j,A.md,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.em8,10)],x.V)
return B.eL(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.q(j,k.ue(d-18,e-18),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rS,j,j,j),0,0,0),B.ap(j,B.eL(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eL(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b4(B.nT(k.ue(d,e),A.aq,D.hrS),new C.beq(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ue(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aO(2,2)
n.push(B.q(j,j,A.f,j,j,new B.p(A.bP,j,j,new B.bf(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c7(A.aL,A.qQ,A.i,A.m,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.en,j,j,j,e,j,j,D.bGN,j,j,d)
case 8:w=d/2
v=B.xw(A.fI,new B.aO(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.by(B.xw(A.hO,new B.aO(w,w)),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.p(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h2,22)],x.V)
return B.q(j,k.ue(d-20,e-20),A.f,j,j,new B.p(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bV,j,j,d)
case 10:return new B.a5(d,e,B.nT(k.ue(d,e),A.aq,D.hA7),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ue(d-14,e-14),A.f,j,j,new B.p(j,j,i,j,j,j,A.n),j,e,j,j,A.ey,j,j,d)}},
aQV(d,e){return this.d.e===D.Td?A.bM:this.bIT(d,e)},
Xc(d){return this.aQV(d,A.K)},
gaCh(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCg(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1s(v.Q,19,1.15,A.cH,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qw("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aft(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jl(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.p(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclm(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aam(d,e,f,g){return B.cs(new C.ciS(this,e,d,f,g))},
aal(d){return this.aam(d,22,!0,18)},
Xp(d,e){return this.aam(d,22,!0,e)},
aRZ(d,e,f){return this.aam(d,22,e,f)},
bKS(d,e,f){return this.aam(d,e,!0,f)},
bcB(d,e,f,g){return B.cs(new C.ciT(this,e,d,g,!0,f))},
ck9(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adT(824),A.aB,k.aXI(824),k.b9x(824),A.U,k.O9(),A.af,B.at(k.qV(824,360),j,j,j),k.Xc(824),A.af,B.E(k.aal(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adT(824),A.aR,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acH(440,A.bn,3,62,26),k.aCY(440,A.bn,2,20),A.b4,k.asP(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kh,B.x(B.a([k.qV(362,310),k.Xc(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.X,k.aBt(2),A.af,B.E(k.aal(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.w5(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c19(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCE(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Cg,j,j,j)
u=B.a([B.at(k.qV(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Td){h=A.w.j(0.65)
u.push(B.ap(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azh(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.U,k.O9(),A.X,B.E(k.Xp(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.w5(824,!0)
w=k.qV(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b9,j,A.ad,A.t,B.a([w,B.ap(0,B.q(j,k.Pe(780,A.bn,A.c,3,74,30),A.f,j,j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.b9,A.x,v,j,j),A.n),j,j,j,j,D.bF_,j,j,j),j,j,0,0,j,j)],u),j),k.b9y(824,A.bn),A.U,k.O9(),A.X,B.E(k.aal(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adT(824),A.aB,k.aXI(824),k.b9x(824),A.U,k.O9(),A.af,B.E(k.bcB(3,300,B.x(B.a([k.qV(300,300),k.Xc(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.w5(824,!0)
v=x.p
u=B.x(B.a([k.acH(440,A.bn,3,62,26),k.aCY(440,A.bn,2,20),A.b4,k.asO(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bz,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTf,new B.D(A.ib,k.qV(364,h.e===D.Td?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.Xp(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adT(824),A.af,k.c18(824,2,70),k.cCC(824,21),A.U,k.O9(),A.af,B.E(k.bcB(3,340,B.at(k.qV(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.w5(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bEX(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qw(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1s(h.Q,24,1.15,A.cH,A.V),j,j,j))
v.push(A.b4)
if(k.gaCh())v.push(k.aCg(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.alc,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acH(570,A.bn,3,62,28),k.cCD(570,A.bn,20),A.U,k.asO(!1),A.U,B.at(k.qV(570,330),j,j,j),k.Xc(570),A.X,B.E(k.aRZ(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.w5(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qw(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.an,k.Pe(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bDg,j,j,j),k.b9y(824,A.bn),A.X,B.at(k.qV(824,310),j,j,j),k.Xc(824),A.U,k.O9(),A.X,B.E(k.aal(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w5(824,!0),A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([k.qV(824,430),B.ap(18,k.cd3(k.c.b,17),j,j,18,j,j,j)],w),j),A.bz,k.aBx(824,3,66),k.b9C(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.axZ(),A.aB,B.E(k.Xp(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w5(824,!0),A.bz,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afs(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6A(410,4,58,28),k.aD0(410,6,20),A.b4],w),A.E,j,A.e,A.i,0,A.p),j),W.aTg,k.qV(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.axZ(),A.aR,B.E(k.Xp(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.w5(824,!0)
v=k.qV(824,420)
u=B.hP7(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ap(22,B.fw(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cd6(i,30,A.c,1,A.cH,A.u),j,j,j),A.f,j,j,new B.p(t,j,j,j,s,j,A.n),j,j,j,j,D.bFf,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bz,k.aBx(824,3,62),k.b9C(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.aZT(A.lO),A.aB,B.E(k.Xp(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w5(824,!0)
u=h.w
t=x.p
w=B.a([k.qV(824,380),B.ap(j,k.afs(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBx(824,2,60)
r=k.cCP(824,2)
p=k.axZ()
o=B.E(k.aRZ(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ad,A.t,w,j),A.aR,s,r,A.X,p,A.aB,o,A.af,B.q(j,B.A(B.a([B.by(B.m(14),k.ue(150,104),A.aq),A.oT,B.E(B.x(B.a([k.afs("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.U,B.d(q,j,2,A.a2,j,j,j,k.azg(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.Q,0,A.p),1),B.X(A.eI,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.p(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.w5(824,!0),A.bz,k.acH(824,A.bn,3,62,30),k.aCY(824,A.bn,2,22),A.X,k.asO(!1),A.X,B.at(k.qV(824,330),j,j,j),k.aQV(824,A.bn),A.aR,B.E(k.bKS(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.p(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.baU(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bFM,B.x(B.a([B.E(t.ck9(),1),A.U,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fK,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1q(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qw(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iR,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dx(!0,B.b4(s,s,s,new C.btT(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fR(q,A.A,s,s,A.cj,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n1,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azi(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dx(!0,B.da(B.q(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.p(p,s,v,u,s,s,A.n),s,s,s,s,D.bGW,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jl(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.ber.prototype={
jt(d){return C.ht2(d)},
k9(d){return!1}}
C.beq.prototype={
a4(d,e){var w,v=C.ht2(e)
$.Q()
w=B.K()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bwp.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.d_(3)
w=$.Q()
v=B.a([],x.v)
u=new B.aF(w.r,A.ai,null,null,v)
u.D(new B.aZ(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ai()*14)
v.push(w)
r=u.f
if(r!=null)w.ak(r)
u.ab()}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ai()*14)
v.push(q)
p=u.f
if(p!=null)q.ak(p)
u.ab()}u.D(new B.aq(0,r))
u.D(new B.bu())
return u},
k9(d){return!1}}
C.baU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e4()
o.d_(7)
$.Q()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.o(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.o(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.c_(A.A,0.5,A.x,p,0,B.a([A.Yh.j(0.13),A.L],v),p,p).aK(0,B.bX(r,q)))
d.N(r,q,w)}w.sav(p)},
aE(d){return!1}}
C.btT.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fq(u,A.cr,u,u,u,B.cP(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bX,u,A.dz,A.bY)
s.e5()
w=d.c
J.bo(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.o(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.WV.prototype={
S(){return new C.aFN()}}
C.aFN.prototype={
Y(){var w=this
w.a2()
B.fH7(w.a.c,null).bG(new C.ett(),x.g7).bG(new C.etu(w),x.a)
w.a.toString},
gaPH(){var w=D.aza[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazj(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPH()
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
q=A.j.E(v*p,q,p-q)-q
w=A.j.E(u*o,w,o-w)-w
return new B.a1(q,w,q+s,w+t)},
a_P(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_P=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.etg(r))
t=4
q=r.gazj()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.Q()
n=new B.pZ(new B.py())
m=B.zs(n,null)
i=B.K()
i.z=A.hc
m.q1(g,q,new B.a1(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xC(J.hih(p),J.hih(o)),$async$a_P)
case 7:l=e
w=8
return B.b(l.hs(A.he),$async$a_P)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eS(J.vU(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eth(r))
r.c.L(x.q).f.U(D.fhF)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_P,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.ln,s,s,s,new C.etn(d),s,s,s,s,s,s),p=x.p
q=B.eH(B.a([B.bM(!1,D.fWE,s,s,!0,s,s,s,t.y||r==null?s:t.gcd7(),s,s)],p),s,s,!0,!0,A.BX,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h_G,s,s,s,1,s,!0)
if(r==null)p=A.m0
else{w=B.E(new B.D(A.bR,B.at(new B.fF(t.gaPH(),B.cs(new C.eto(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.jv(s,s,s,B.d(D.aza[u].a,s,s,s,s,s,s,A.aaQ,s,s,s),s,new C.etp(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bn(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZo,B.E(B.kV(s,s,s,6,1,new C.etq(t),t.f),1),D.bYZ],p),A.m,s,A.e,A.i,0,s,s),D.fTU,A.an,B.bM(!1,D.fTC,s,s,!0,s,s,s,new C.etr(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.Z5,s,s,s,s,s,s,D.bCC,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c4(q,A.BX,p,s,!1,!1,s,s)}}
C.bdZ.prototype={
a4(d,e){var w
$.Q()
w=B.K()
w.z=A.cj
return d.q1(this.b,this.c,new B.a1(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a13.prototype={
S(){var w=$.aw(),v=x.A
return new C.aHb(new B.au(A.av,w),new B.au(new B.ba("NGMY",A.b6,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a63),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oT.prototype={}
C.aHb.prototype={
gaXR(){var w,v,u=this
if(u.p1)w=new B.wa(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f2m(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a3()},
Zp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rg().jo(0,"assets/images/ngmy_logo.png"),$async$Zp)
case 7:q=e
p=J.eS(J.vU(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFH(new B.q8(p,1),o),$async$Zp)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f1e(r,p))
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
return B.i($async$Zp,v)},
Qz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().l8(92,1800,A.eN),$async$Qz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Qz)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFH(new B.q8(p,1),n),$async$Qz)
case 9:if(r.c==null){w=1
break}r.m(new C.f1C(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qz,v)},
b5X(){var w=this
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
aZD(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCm(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.drM)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCm(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCm(C.hcW(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCm(C.hcW(1-a0*0.5,n,n,n),w)}return a1?C.bCm(C.hcW(-1,255,255,255),w):w},
aD6(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xA(u,v,w)
this.dx.px(new C.f1M(t),!0)
return t},
b8w(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aD6()
w=C.imC(e.d.a.a,e.db)
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
return C.ij3(d,k,v,a0,j,e.gaXR(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAs(){return this.b8w(null)},
DL(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DL)
case 3:w=4
return B.b(B.bQ(A.eQ,null,x.H),$async$DL)
case 4:w=5
return B.b($.aW.gmS(),$async$DL)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qi)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DL)
case 7:w=6
return B.b(e.hs(A.he),$async$DL)
case 6:q=e
u=q==null?null:J.eS(A.dN.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DL,v)},
abg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0Y(q))
t=4
w=7
return B.b(q.DL(),$async$abg)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aM(p)
n=C.Cm(null,null,null,null,D.oM,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8w(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f0Z(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abg,v)},
B3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0W(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B3)
case 7:w=8
return B.b(B.bQ(A.mT,null,x.H),$async$B3)
case 8:w=9
return B.b($.aW.gmS(),$async$B3)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qi))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B3)
case 10:o=e
w=11
return B.b(o.hs(A.he),$async$B3)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.aht(J.eS(A.dN.gaU(n)),"ngmy_quote.png","image/png"),$async$B3)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f0X(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B3,v)},
cni(){var w=this.p4
w.toString
return B.cs(new C.f1v(this,w))},
b1z(d,e){var w=null
return B.bt(w,w,w,w,w,D.fsw,w,w,!0,new B.b6(4,B.m(16),Q.vO),w,w,w,w,w,D.u7,!0,w,w,w,w,new B.b6(4,B.m(16),D.b4M),w,w,w,w,w,w,w,w,Ad.EH,e,w,w,w,w,w,w,w,D.fy6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yx(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aVX,w,w,w))
return new B.D(H.al2,B.A(u,A.m,w,A.e,A.i,0,w,w),w)},
b1y(d,e){var w=null,v=B.m(18),u=B.L(A.bA,A.r,1)
return B.q(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k7),A.f,w,w,new B.p(D.u7,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wd(d){return this.b1y(d,A.bE)},
ow(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uX:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.L(f?A.L:A.bA,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jV,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jV,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cT(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.b3,new B.p(w,r,u,v,r,p,A.n),A.h_,r,r,r,r,A.GJ,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahn(d,e,f){return this.ow(d,null,e,f)},
azn(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eK:A.bA,s=x.p
v=B.a([B.cT(w,d,w,w,A.b3,new B.p(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h_,w,e,w,w,new B.R(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1C(d,e,f,g,h,i){return this.azn(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUK,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.eqM,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1I(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.aUZ,u,u,u),A.f,u,u,new B.p(w,u,u,v,u,u,A.n),u,u,u,u,A.a0G,u,u,u))
s=B.A(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.ab4(w).cPd(A.b8,A.bA,A.b8.j(0.2),A.c,D.f7e,4)
return new B.D(A.yw,B.x(B.a([s,B.YN(B.kV(u,u,u,g,f,new C.f1J(this,h),A.j.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajq(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
ajP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aV
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSh:o
n.push(B.aA(o,B.q(o,t,A.f,o,o,new B.p(s,o,new B.bH(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f1L(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bt,o,10,10)},
bP_(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a63
else{v=x.a8
w=B.C(new B.Y(D.a63,new C.f0O(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b1z("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f0P(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.ab8,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b1z("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f0Q(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yx("DESIGNS",A.uH)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d0I[q]
r.push(new B.D(A.iK,o.ahn(p,o.x===p,new C.f0R(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.cg(B.A(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hN(n,new C.f0S(o,w),w.length,n,n,A.aL,new C.f0T(),!1),n),A.U,o.b1y(B.x(B.a([B.iQ(A.b8,n,n,A.ag,!0,new C.f0U(o),n,D.fKE,n,D.fGQ,o.k3),B.iQ(A.b8,n,n,A.ag,!0,new C.f0V(o),n,n,n,D.fE1,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alC)],s),A.E,n,A.e,A.i,0,A.p)},
cJp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aD6()
if(a7.length===0)return a5.wd(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KG,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aC(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gan(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("ch.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cD(m,new C.f2b(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f2i(a5)
j=new C.f2k()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KG,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aO(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eK:A.bA
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aC(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.p(f,a6,new B.bH(d,d,d,d),new B.bf(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Oj,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f2c(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wd(B.bW(A.bH,o,A.vI,a6,6,6))
i=B.a([a5.ow("All words",K.aq4,!1,new C.f2d(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahn("Sentence "+a3,!1,new C.f2e(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahn("Clear picks",!1,new C.f2f(a5)))
i=B.bW(A.bH,i,A.bt,a6,8,8)
g=a5.yx("SIZE OF THE PICKED WORDS",D.apv)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dxT[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f2g(e,k)
f.push(a5.ahn(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bW(A.bH,f,A.bt,a6,8,8),A.X,a5.ow("Make every word normal",A.k4,!1,new C.f2h(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEl(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bIe,B.d(A.d.fe(D.aAX,new C.f1V(q)).b,p,p,p,p,p,p,D.fqT,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cs(new C.f1W(q)),l=q.yx("HIGHLIGHT BEHIND THE WORDS",A.a2B),k=q.p1?-1:q.k4
k=q.ajP(k,new C.f1X(q),D.dc3)
w=q.p1
v=w?A.c:A.aV
n=B.a([n,A.X,m,l,B.bW(A.bH,B.a([k,B.aA(p,B.q(p,D.bVf,A.f,p,p,new B.p(p,p,B.L(v,A.r,w?3:1),p,p,D.fkh,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f2_(q),p,p,p,p,p,p,!1,A.a4)],o),A.vI,p,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KG,p,p,p)],o)
if(q.gaXR()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajq("Colour",l,0,360,new C.f20(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajq("Shade",k,0.15,0.9,new C.f21(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f22(q),1,""+A.j.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.wd(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yx("LOOK",A.wK))
m=B.a([q.ow("Bold",I.apt,q.fy,new C.f23(q)),q.ow("Italic",I.apu,q.go,new C.f24(q))],o)
for(u=0;u<3;++u){l={}
k=D.d1Y[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uX:p
w=w?p:A.c.j(0.07)
s=new B.aO(14,14)
r=new B.ay(q.id===l.a?A.L:A.bA,1,A.r,-1)
m.push(B.aA(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.p(w,p,new B.bH(r,r,r,r),new B.bf(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f25(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vI,p,8,8))
n.push(q.yx("COLOUR",A.mh))
n.push(q.ajP(q.fx,new C.f26(q),D.do7))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KG,p,p,p))
n.push(q.yx("SIZE AND PLACE",A.HI))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f1Y(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wd(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f1Z(q),0.3,""+A.j.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cnj(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.m(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bF.j(0.12)],x.O)
return B.aA(q,B.q(q,B.x(B.a([B.q(q,D.c_R,A.f,q,q,D.b7K,q,62,q,q,q,q,q,62),A.aB,D.fI6,A.an,D.fMW],x.p),A.m,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(D.u7,q,v,w,q,new B.a9(A.a6,A.aa,A.x,u,q,q),A.n),q,q,q,q,D.bDR,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1B(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.by(B.m(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.c_,!1,q,!1,q,q),q),A.aq),A.bd,B.E(B.x(B.a([D.fHD,A.U,B.bW(A.bH,B.a([r.ow("Change",A.jI,!1,r.gb1B()),r.ow("Remove",A.eg,!1,new C.f1z(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.m,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dkf[t]
u.push(r.ow(s.b,s.a,r.at===t,new C.f1A(r,t)))}u=B.bW(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c5h(p)
break
case 1:s=r.c4c()
break
case 2:s=r.bKR()
break
case 3:s=r.bRi()
break
default:s=r.bMX()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.X,new B.bL(A.a6,q,q,r.ow("Reset the whole picture",A.k4,!1,new C.f1B(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c5h(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.ow("Auto enhance",E.a2f,!1,new C.f1r(w)),w.ow("Make words easy to read",A.pt,!1,new C.f1s(w))],v),A.bt,null,8,8),A.aB,B.cs(new C.f1t(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c4c(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f15(o),0,A.j.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f16(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f17(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f18(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f19(o),0,""+A.j.V(t*100))
s=o.a_
s=o.kB("Darken",s,0,0.85,new C.f1a(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f1b(o),0,""+A.j.V(r*100))
q=o.aH
q=o.kB("Shade behind words",q,0,0.85,new C.f1c(o),0,""+A.j.V(q*100))
p=o.aR
return o.wd(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f1d(o),0,""+A.j.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bKR(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f0r(s),1,""+A.j.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f0s(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f0t(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wd(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f0u(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a6,r,r,s.ow("Negative",D.bQg,s.y1,new C.f0v(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yx("COLOUR WASH",A.Pk)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azz)
t=B.a([u,v,s.ajP(w,new C.f0w(s),q),A.U],t)
if(s.b7!=null){q=s.b6
t.push(s.wd(s.ajq("Wash strength",q,0,0.9,new C.f0x(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRi(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f1_(r),0,A.o.u(A.j.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f10(r),0,""+A.j.V(w*100))
v=r.aG
u=x.p
v=r.wd(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f11(r),0,""+A.j.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yx("LIGHT LEAK",D.bPZ)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azz,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajP(q,new C.f12(r),t),A.U],u)
if(r.bf!=null){q=r.bK
u.push(r.wd(r.ajq("Leak strength",q,0,1,new C.f13(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bMX(){var w,v,u,t,s=this,r=s.aP
r=s.kB("Zoom",r,1,3,new C.f0B(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f0C(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f0D(s),0,""+A.j.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.wd(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f0E(s),0,""+A.j.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.X,B.bW(A.bH,B.a([s.ow("Turn 90\xb0",H.aqx,!1,new C.f0F(s)),s.ow("Flip sideways",A.CL,s.c6,new C.f0G(s)),s.ow("Flip upside down",A.CL,s.cO,new C.f0H(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c8_(){var w=null,v=B.m(22),u=B.L(A.bA,A.r,1)
return B.q(w,B.x(B.a([D.f7q,A.X,D.fJG,A.aB,B.aA(w,B.q(A.A,D.f7E,A.f,w,w,new B.p(w,w,w,B.m(16),w,G.uX,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1u(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(D.u7,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c54(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f1m(p),m=x.p,l=B.A(B.a([D.bIk,p.ow("Reset",A.k4,!1,new C.f1i(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KG,o,o,o),j=p.yx("SHAPE",A.aqu),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Dh[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1C(n.$2(t,p.cy),62,u.b,s===t,new C.f1j(v,p),62))}}i=B.bW(A.bH,i,A.bt,o,8,8)
v=p.yx("RING",A.pl)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Da[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1C(n.$2(p.cx,t),62,r.b,q===t,new C.f1k(s,p),62))}u=B.bW(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.wd(p.kB("Size",s,0.12,0.4,new C.f1l(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4A(d){return new B.a5(null,d,new B.fF(0.5625,B.cs(new C.f1F(this)),null),null)},
cDz(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.L(A.bA,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uX:q
t=new B.aO(14,14)
s=D.dmx[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.bz(1,A.bc,B.aA(A.c5,B.cT(q,B.x(B.a([r,A.cU,new B.qH(A.e0,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.b3,new B.p(q,q,q,new B.bf(t,t,t,t),q,u,A.n),D.bzk,q,q,q,q,A.hE,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1O(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(p,q,n,o,q,q,A.n),q,q,q,D.bBt,A.md,q,q,q)},
aSx(){var w,v,u=this,t=null,s=u.cDz()
switch(u.as){case 0:w=u.bP_()
break
case 1:w=u.cJp()
break
case 2:w=u.cEl()
break
case 3:w=u.cnj()
break
case 4:w=u.c54()
break
default:w=u.c8_()
break}v=x.p
return B.by(A.tM,B.e8(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bCD,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Z5,!0),A.aq)},
aOB(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdy(),p=B.m(16)
q=B.E(B.aA(r,B.q(r,D.f7P,A.f,r,r,new B.p(A.c.j(0.08),r,B.L(A.aV,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbQR()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bF.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fdR)
else t.push(D.bUl)
t.push(A.ae)
t.push(D.bKL)
return B.q(r,B.A(B.a([q,A.au,B.E(B.aA(r,B.q(r,B.A(t,A.m,r,A.ba,A.i,0,r,r),A.f,r,r,new B.p(r,r,r,w,v,G.uX,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b6R,r,r,r,r,Aw.a03,r,r,r)},
b1A(){var w=null
return new B.D(V.a0B,B.A(B.a([B.aG(w,w,w,w,A.n3,w,w,w,new C.f14(this),w,w,w,w,w,w),D.fZz,A.b4,D.c2a],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.BX,B.bn(!0,B.cs(new C.f2l(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e4()
n.d_(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
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
aE(d){return d.b!==this.b}}
C.rU.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mp.prototype={}
C.Ab.prototype={
aj(){var w=this
return B.H(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o8.prototype={}
C.wu.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a91.prototype={}
C.asH.prototype={}
C.a1A.prototype={
S(){return new C.aJ6(new B.au(A.av,$.aw()),B.k8(!0,null,!0,!0,null,null,!1),D.dO9,B.a([],x.s),B.ez([D.Jg],x.Q))}}
C.aJ6.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a3()},
a1a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().CG(90,700,700,A.eN),$async$a1a)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a1a)
case 8:p=e
if(r.c!=null)r.m(new C.f8J(r,p,q))
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
return B.i($async$a1a,v)},
a1d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hU().aJH(78,n,1100,1100),$async$a1d)
case 7:q=e
if(J.cr(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1d)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c6(p,"data:"+k+";base64,"+A.cP.gcu().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f8K(r,p))
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
return B.i($async$a1d,v)},
b6z(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cI.aM(A.d.gan(d.split(","))),A.A,u,u,A.cj,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.bxu},
c5b(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cz3(C.fO8(w,this.b6z(d),f),g)},
adC(d,e,f,g,h){var w=null,v=new C.f8H(f,e),u=new C.f8I(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.L(p?A.bA:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.at(B.X(f?A.zg:A.P8,A.bW,w,w,w,26),w,w,w),D.ex0],x.p),w),w)
else p=this.c5b(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.q(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bU2],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(w,w,o,q,w,w,A.n),w,44,w,w,A.mX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8G(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZJ(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.by(B.m(8),B.fR(A.cI.aM(A.d.gan(h.split(","))),A.A,p,p,A.cj,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.L(n?A.bA:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KM,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PT,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.q(p,B.A(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(p,p,r,s,p,p,A.n),p,50,p,p,A.kr,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fRA(),$async$a9F)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f8p(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f8q(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9F,v)},
afC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afC=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f8s(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f8t(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f8u(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c6(p,h)}w=7
return B.b(C.fMR(q,r.cx,j,new C.b3c(r.z,r.Q,r.as,r.at),new C.f8v(r),i,m,p,k),$async$afC)
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
if(r.c!=null)r.m(new C.f8w(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eP,g).w
g=B.aH(d,A.c1,g).w
w=B.at(B.q(h,h,A.f,h,h,new B.p(A.aV,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.q(h,D.bXl,A.f,h,h,new B.p(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bg.j(0.5),A.I,24)],v),D.c6h,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8X(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.PT,h,h,h,i.ax?h:new C.f8Y(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbFM()
v=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.I,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aP(!1,h,!0,B.q(h,B.X(i.e==null?A.wy:A.hG,A.c,h,h,h,20),A.f,h,h,new B.p(h,h,h,h,v,E.wQ,A.a7),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bt(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.m(16),D.b4j),h,h,h,h,h,h,h,h,Y.Ez,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aVn,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f8Z(i)
s=i.aZJ(A.ll,q,r,i.gcnL(),s)
r=i.z
r=B.E(i.adC(new C.f90(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.an,B.A(B.a([r,A.bm,B.E(i.adC(new C.f91(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f92(i)
s=i.aZJ(A.uC,r,p,i.gcnT(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adC(new C.f93(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fOe,A.ax,D.fR8,A.bz,u,A.U,D.fPx,A.aB,v,A.bz,B.A(B.a([q,A.au,B.E(B.x(B.a([s,A.an,B.A(B.a([p,A.bm,B.E(i.adC(new C.f94(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.an,D.fT3],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.L(D.boY,A.r,1)
w=C.ai_(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bL(A.a6,h,h,B.q(h,B.A(B.a([D.bYs,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fwJ,h,h,h),B.aP(!1,h,!0,D.er1,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f95(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.p(D.bgU,h,u,v,h,h,A.n),h,h,h,h,D.bB8,h,h,h),h)],t))}o.push(A.bz)
o.push(D.fEK)
o.push(A.U)
w=B.a([],t)
for(m=0;m<6;++m){l=D.def[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bA,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.bz(1,A.bc,new B.D(A.jn,B.aA(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b3,new B.p(v,h,new B.bH(k,k,k,k),h,h,h,A.a7),A.eG,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f96(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bz)
o.push(D.fXN)
o.push(A.U)
o.push(B.cs(new C.f97(i)))
o.push(A.bz)
o.push(D.fMh)
o.push(A.U)
w=B.a([i.b9v("auto","Let AI choose",A.ea,A.S_)],t)
for(v=x.O,m=0;m<11;++m){j=D.wU[m]
u=j.d
w.push(i.b9v(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bt,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.m(16)
u=B.L(i.r?A.bg.j(0.5):A.bA,A.r,1)
o.push(B.q(h,B.iQ(h,A.bg,h,h,h,new C.f9_(i),D.bTv,D.fX1,h,D.fH6,i.r),A.f,h,h,new B.p(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aUw,h,h,h)],t))
o.push(A.bz)
w=i.ax?h:i.gcdC()
v=B.fs(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.m(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fdH:A.HV
o.push(new B.a5(h,54,B.lR(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nd,h,h,h),w,v),h))
return new B.D(new B.R(0,0,0,f.f.d),B.q(h,B.bn(!0,B.cg(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wk,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aei,h,h,h,h,h,h,h,h),h)},
bSz(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f8x(this,p,d)
if(d===D.DX)return new C.aFE(p,o,q)
w=B.m(16)
v=p?E.wQ:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bA,A.r,1)
s=B.X(p?A.eb:C.hW9(d),A.c,q,q,q,20)
r=C.hWa(d)
return B.aA(q,B.cT(q,B.x(B.a([s,A.ax,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e0)],x.p),A.m,q,A.ba,A.i,0,A.p),q,q,A.b3,new B.p(u,q,t,w,q,v,A.n),A.h_,q,64,q,q,A.hF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9v(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bA
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.p(v,v,v,v,v,new B.a9(A.a6,A.aa,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cT(v,B.A(B.a([w,Z.AB,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.b3,new B.p(s,v,r,t,v,v,A.n),A.eG,v,v,v,v,P.amK,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8M(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1z.prototype={
S(){return new C.aJ5(new B.au(A.av,$.aw()))}}
C.aJ5.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
afD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afD=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f8i(r))
w=1
break}B.eY()
r.m(new C.f8j(r))
t=4
q=C.inx(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.inh(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f8k(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hcA()
f=$.Dl.h(0,k.a)
o=f==null||J.cr(f)?null:J.fr(f)
if(o==null){r.m(new C.f8l(r))
w=1
break}n=C.inf(o,r.a.c)
C.inb(r.a.c.a)
$.hbP=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hfy(j)
h=C.hfz(r.a.c)
e=C.hfA(r.a.c)
w=7
return B.b(C.bEB(k,r.a.c.a,j,h,new C.f8m(r),i,e,a0),$async$afD)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f8n(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eP,i).w
i=B.aH(d,A.c1,i).w
w=B.at(B.q(j,j,A.f,j,j,new B.p(A.aV,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.aqO,A.f,j,j,D.b6w,j,34,j,j,j,j,j,34),A.au,D.bIX],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaN,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bt(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.m(16),Ax.adK),j,j,j,j,j,j,j,j,Y.Ez,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aVn,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.dam[q]
o=B.d(p,j,j,j,j,j,j,AD.Vm,j,j,j)
n=A.c.j(0.06)
r.push(B.n1(j,n,o,j,k.e?j:new C.f8o(k,p),j,j,Q.vO,j))}w=B.a([w,A.aB,u,A.an,t,A.aB,s,A.X,B.bW(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUw,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gcdD()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bg.j(0.5),A.eo.j(0.5)],x.O):D.cI4
o=B.a([new B.ac(0,A.G,A.bg.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eqY:D.bY1
n=B.q(j,l,A.f,j,j,new B.p(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aP(!1,s,!0,B.eJ(B.A(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hi,j,j,j)],v),A.m,j,A.ba,A.i,0,j,j),j,new B.p(j,j,j,r,o,new B.a9(A.a6,A.aa,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.R(0,0,0,h.f.d),B.q(j,B.bn(!0,B.cg(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wk,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aei,j,j,j,j,j,j,j,j),j)}}
C.b3c.prototype={}
C.aFE.prototype={
S(){return new C.bml(null,null)}}
C.bml.prototype={
gazo(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.qr,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gazo().t()
this.bzy()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazo(),new C.ep9(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dgK[t]
q=r.a*v
r=r.b*u
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=D.yk.j(0.25+s*0.6).gp(0)
d.N(new B.o(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.o(q-o,r),new B.o(q+o,r+0),p)
d.ah(new B.o(q,r-o),new B.o(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.ate.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a_X.prototype={
S(){return new C.aD9()}}
C.aD9.prototype={
gajM(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aic(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAM(){var w=this.e
return w===$?this.e=C.hfy(this.a.c).q(0,D.DX):w},
a9s(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9s=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dsl(s))
u=3
r=A.d.fe(D.wU,new C.dsm(s))
q=B.d4(C.hfy(s.a.c),x.Q)
l=q
J.hk(l,D.DX)
p=l
if(s.gAM())J.c6(p,D.DX)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAM()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hfz(i.c)
g=C.hfA(s.a.c)
w=6
return B.b(C.bEB(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9s)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aic(q,s.gajM())
f=q==null?null:q.b
n=f==null?s.gajM():f
if(!J.z(n,r.a)&&!s.gAM())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dsn(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9s,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.c:A.S,k=m?A.aS:A.am,j=m?A.S:A.c,i=B.m(28),h=B.L(m?A.bA:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dsq(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wU[w]
u=o.gajM()
t=o.f?n:new C.dsr(o,v)
f.push(new C.bv0(v,u===v.a,t,n))}f=B.kU(1.25,f,3,10,10,n,A.dV,!0)
u=B.m(18)
t=o.gAM()?D.c90:n
if(o.gAM())s=n
else s=m?A.bp:A.bO
r=B.X(A.ea,o.gAM()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAM()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAM()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAM()
f=B.a([f,A.aB,B.q(n,B.A(B.a([r,A.au,q,B.b8R(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dss(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(s,n,n,u,n,t,A.n),n,n,n,n,O.alu,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fx2,n,n,n)],g))
f=B.cg(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GQ,n,n,A.ah)
u=o.f?n:o.gbEL()
t=B.bp(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.m(16),A.a1),n,n,n)
s=B.m(16)
return B.bn(!0,B.q(n,B.x(B.a([new B.D(D.bEk,e,n),new B.dn(1,A.cp,f,n),new B.D(A.GP,new B.a5(1/0,50,B.bI(B.eJ(B.at(o.f?A.tv:D.fOK,n,n,n),n,new B.p(n,n,n,s,n,D.c7B,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.p(j,n,h,i,n,n,A.n),n,n,n,A.ur,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bv0.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bL(A.ly,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fx_,w,w,w),w)],x.p)
if(q)v.push(D.b1u)
return B.aA(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b3,new B.p(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eG,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.ep6.prototype={
aHc(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xb(d,e){return this.aHc(0,e,null)}}
C.aNJ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b38.prototype={
B(d){var w,v,u=null,t=C.hen(this.c)
if(t==null)w=D.bvX
else{w=B.aH(d,u,x.w).w.cOG(D.bAE,D.fcR)
v=this.d
w=B.q7(new B.dx(!v,B.apn(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bnW(w,u),u),A.f,A.dB)}}
C.bnW.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dtz[w]
u=new B.aO(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.bf(u,u,u,u),t,D.asL,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.duX[w]
u=new B.aO(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.p(t,t,t,new B.bf(u,u,u,u),t,D.asL,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.p(t,t,t,B.m(64),D.d_e,D.c5Z,A.n),A.bi),0,0,0))
s.push(B.bR(3,B.c3(t,new B.p(A.w,t,t,B.m(61),t,t,A.n),A.bi),3,3,3))
s.push(B.bR(13,B.by(B.m(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.at(B.q(D.b1F,B.q(t,t,A.f,t,t,D.b6P,t,11,t,t,t,t,t,11),A.f,t,t,new B.p(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dx(!0,B.by(B.m(51),D.bxA,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dx(!0,B.at(B.q(t,t,A.f,t,t,new B.p(A.ab,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lu.prototype={
pV(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bs,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bj,j,2,"Your Presentation Title",0,0,"",D.n7,D.cW,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bs,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bj,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dk,D.cW,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rV(i,l,0,0,B.a([f,w,C.er(A.bn,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bs,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fH,t.l(),3,"",0,0,"",D.cs,D.fh,0.3,0.35,0.72)],s),C.cD(),D.n6,"","","Welcome",D.dk)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,34,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Agenda",0,0,"",D.cs,D.cW,0.84,0.08,0.08)
w=C.cD()
w=C.rV(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,22,A.bs,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bj,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vd,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n6,"","","Agenda",D.dk)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,32,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Main Idea",0,0,"",D.cs,D.cW,0.84,0.08,0.08)
f=C.cD()
f=C.rV(i,l,0,0,B.a([u,C.er(A.bn,!0,v.l(),A.aG,"",k,21,A.bs,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bj,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cs,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n6,"","","Key Point 1",D.dk)
u=C.cD()
u=C.er(A.bn,!1,e.l(),A.aG,"",k,30,A.bs,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bj,j,2,"Compare & Contrast",0,0,"",D.cs,D.cW,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bs,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bj,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cs,D.cW,0.4,0.08,0.24)
q=C.cD()
q=C.rV(i,l,0,0,B.a([u,r,C.er(A.bn,!0,v.l(),A.aG,"",k,18,A.bs,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bj,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cs,D.cW,0.4,0.52,0.24)],s),C.cD(),D.n6,"","","Key Point 2",D.dk)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bs,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bj,j,2,h,0,0,"",D.dk,D.cW,0.8,0.1,0.32)
e=C.cD()
p=C.Cm(l,l,l,l,D.DT,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rV(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bs,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bj,j,2,"Questions?",0,0,"",D.cs,D.cW,0.7,0.15,0.58)],s),C.cD(),D.n6,"","",h,D.dk)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fr.prototype={
ak(d){return this.e.$1(d)}}
C.ew.prototype={}
C.jb.prototype={}
C.Fi.prototype={
gaNc(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ai_(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4B(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fi(v,u,t,d==null?w.d:d)},
Gb(d){return this.a4B(null,d,null,null)},
aFR(d){return this.a4B(null,null,null,d)},
cOE(d,e){return this.a4B(d,e,null,null)},
beQ(d){return this.a4B(d,null,null,null)},
beW(d){return this.a4B(null,null,d,null)}}
C.Oj.prototype={
S(){return new C.blH(new B.eA(0,$.aw()),null,null)}}
C.blH.prototype={
Y(){var w,v=this
v.a2()
w=v.pZ(new C.e2I(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.bz1()},
B(d){var w=C.ai_(this.a.c.a)
if(w==null)w=A.d.gH(D.Ie)
return B.cs(new C.e2H(this,w,C.huV(this.a.c.d)))}}
C.btx.prototype={
B(d){return B.od(A.Xh,this.e,new C.f7v(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bgF.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVb(d,e,v)
break
case"confetti":w.bLk(d,e,v)
break
case"crown":w.bMY(d,e,v)
break
case"aurora":w.bFQ(d,e,v)
break
case"champagne":w.bJd(d,e,v)
break
case"diamonds":w.bP8(d,e,v)
break
case"starburst":w.cBb(d,e,v)
break
case"balloons":w.bG3(d,e,v)
break
case"galaxy":w.bUr(d,e,v)
break
case"redcarpet":w.cs4(d,e,v)
break
case"coins":w.bKJ(d,e,v)
break
case"lanterns":w.c3H(d,e,v)
break
case"hearts":w.c1c(d,e,v)
break
case"petals":w.cna(d,e,v)
break
case"butterflies":w.bIb(d,e,v)
break
case"neon":w.c7K(d,e,v)
break
case"disco":w.bPj(d,e,v)
break
case"sunrise":w.cCR(d,e,v)
break
case"pearls":w.cmd(d,e,v)
break
case"snow":w.cAT(d,e,v)
break
case"laurel":w.c3N(d,e,v)
break
case"ribbons":w.cuB(d,e,v)
break
case"kente":w.c3v(d,e,v)
break
case"trophy":w.cGA(d,e,v)
break
case"shooting":w.cyD(d,e,v)
break
case"bokeh":w.bGp(d,e,v)
break
case"orbits":w.cjQ(d,e,v)
break
case"flowers":w.bTF(d,e,v)
break
case"music":w.c7s(d,e,v)
break
case"mandala":w.c5S(d,e,v)
break
case"sparklers":w.cB_(d,e,v)
break
case"city":w.bK_(d,e,v)
break}},
t7(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.Q()
v=B.K()
v.r=g.j(A.j.E(h,0,1)).gp(0)
v.a=A.p4
u=new B.aF(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aZ(w,s))
u.D(new B.c5(w,t,w+f,t))
u.D(new B.c5(w,t,w,t+f))
u.D(new B.c5(w,t,w-f,t))
u.D(new B.c5(w,t,w,s))
u.D(new B.bu())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t7(d,new B.o(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aVb(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.aw],w),B.a([A.iq,A.bF],w),B.a([A.eC,A.aI],w),B.a([A.c,A.aC],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.ks(new B.o(h,b8),new B.o(g,f),A.cw.aA(0,j/0.22))
d.toString
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.sav(new B.a9(A.a6,A.aa,A.x,B.a([e[0].j(0),e[0]],w),null,null).aK(0,B.rX(new B.o(h,b8),d)))
a0.c=o
a0.d=A.bw
a1=B.ks(new B.o(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.O,A.M,A.R,A.T,A.P)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cw.aA(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.Q()
a6=new B.ao(A.O,A.M,A.R,A.T,A.P)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.o(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.o(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.Q()
b6=new B.ao(A.O,A.M,A.R,A.T,A.P)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bw
b6.a=A.p4
c0.ah(new B.o(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t7(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLk(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.Q(),d=B.K()
d.sav(new B.a9(A.aA,A.aF,A.x,D.dnN,B.a([A.j.E(h-0.15,0,1),A.j.E(h,0,1),A.j.E(h+0.15,0,1)],x.x),null).aK(0,new B.a1(0,0,g,f)))
a0.ar(new B.a1(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.Rr[A.o.E(A.j.bh(C.cY(u,7)*5),0,4)]
J.bo(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
t=new B.ao(A.O,A.M,A.R,A.T,A.P)
t.r=B.b0(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
a0.af(m,t)}else a0.ar(B.bs(A.I,q*1.8*A.j.E(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bMY(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.bj_],v),a4,a4).aK(0,B.bX(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.Q().r,A.ai,a4,a4,B.a([],s))
v=a6+k
j.D(new B.aZ(a5,v))
u=k*0.3
t=a6+u
j.D(new B.aq(a5,t))
p=a6+k*0.6
j.D(new B.aq(a5+l*0.22,p))
j.D(new B.aq(a5+l*0.5,a6))
j.D(new B.aq(a5+l*0.78,p))
p=a5+l
j.D(new B.aq(p,t))
j.D(new B.aq(p,v))
j.D(new B.bu())
i=A.j.E(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sav(new B.a9(A.b7,A.b9,A.x,D.dmr,a4,a4).aK(0,new B.a1(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eHi,D.eAr,D.eQY],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=d.gp(d)
a8.N(new B.o(e,o),m,a0)
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=A.ab.gp(0)
a8.N(new B.o(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.i4.gp(0)
a8.N(new B.o(a5+l*a1,a6+m),o,h)}}for(v=B.xH(j),u=B.a([],x.X),p=new B.ru(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jG(y.M));--h
p.iw()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.b=A.a9
a2.c=m
a2.e=A.dP
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BP(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.t7(a8,new B.o(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bFQ(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f2F,D.f2n,D.f2g,D.f3E]
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
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p4
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p4
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.w8.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p4
a6.N(new B.o(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJd(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.Q(),e=B.K()
e.sav(new B.c_(A.A,0.5,A.x,n,0,B.a([A.i2.j(0.25+0.1*j),D.Zh],x.O),n,n).aK(0,B.bX(new B.o(i,h),g)))
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
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=j
f.r=D.Rr[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t7(d,new B.o(s,p),o*2.4,A.bN,A.j.E(p/i,0,1))
continue}$.Q()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.b=A.a9
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u4.j(0.75).gp(0)
d.N(new B.o(s,p),o,g)
g=o*0.35
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=A.c.j(0.8).gp(0)
d.N(new B.o(s-g,p-g),f,e)}},
bP8(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lc,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bo(v.save())
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
a2=new B.bu()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.sav(new B.a9(A.aA,A.aF,A.x,D.dhS,a6,a6).aK(0,B.bs(A.I,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.b=A.a9
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.o(e,i),new B.o(a0,i),a4)
b0.ah(new B.o(h,j),new B.o(0,a1),a4)
b0.ah(new B.o(d,j),new B.o(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t7(b0,new B.o(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBb(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bwW.aA(0,k)*(0.5+0.5*C.cY(t,u)))
this.t7(d,new B.o(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Rr[A.o.E(A.j.bh(C.cY(t,4)*5),0,4)],r)}},
bG3(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aA_[A.o.F(p,6)]
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
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.b=A.a9
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bs(new B.o(k,l),o*2.3,m)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.c_(D.b1I,0.9,A.x,a1,0,B.a([A.c,j,e],u),X.azQ,a1).aK(0,a0))
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
i=new B.bu()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bo(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bs(A.I,t,u)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=D.aA_[A.o.F(p,6)].j(0.85).gp(0)
a5.ar(s,q)
a3.restore()}},
bUr(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.o(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f2N,D.f2t,D.f2z],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.o(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aK(0,B.bX(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eK,i)
f.toString
e=C.cY(k,3)
$.Q()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p4
b0.N(new B.o(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.Q()
a8=B.K()
a8.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.u4.j(0.55),D.aiY],t),a3,a3).aK(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
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
cs4(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
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
p=new B.bu()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c_(A.A,0.5,A.x,b4,0,B.a([A.u4.j(0.28),D.aiY],w),b4,b4).aK(0,B.bX(new B.o(r,v),u)))
p.a=A.p4
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.et:A.ep)
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
a8=new B.c5(a8,l,a4?h:a0,b6)
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
a8=new B.ao(A.O,A.M,A.R,A.T,A.P)
a8.sav(new B.a9(A.a6,A.aa,A.x,a6,b4,b4).aK(0,new B.a1(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.O,A.M,A.R,A.T,A.P)
b0.r=A.i2.gp(0)
b0.c=o
b0.d=A.bw
b8.ah(new B.o(a8,m),new B.o(a9,p),b0)}b1=new B.aF($.Q().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.D(new B.aZ(b5*0.42,w))
b1.D(new B.aq(b5*0.58,w))
b1.D(new B.aq(b5*0.8,b6))
b1.D(new B.aq(b5*0.2,b6))
b1.D(new B.bu())
v=B.K()
v.sav(D.c7v.aK(0,new B.a1(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t7(b8,new B.o(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bKJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bs(new B.o(p,q),r,r*A.j.E(n,0.12,1))
$.Q()
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.sav(new B.a9(A.aA,A.aF,A.x,o>0?D.dyp:D.cNW,null,null).aK(0,m))
d.bZ(m,r)
r=-(t*0.22)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.b=A.a9
l.c=Math.max(0.6,t*0.08)
l.r=D.btz.gp(0)
d.bZ(new B.a1(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t7(d,new B.o(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c3H(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.Q()
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.sav(new B.c_(A.A,0.5,A.x,e,0,B.a([As.yh.j(0.45*l),D.ahw],v),e,e).aK(0,B.bX(new B.o(m,n),k)))
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
k=new B.bu()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=B.ar(D.bje,A.c,0.2*l)
j.toString
k.sav(new B.a9(A.b7,A.b9,A.x,B.a([D.boz,j],v),e,e).aK(0,B.bs(new B.o(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.c.j(l).gp(0)
a2.N(new B.o(m,n+p*0.55),p*0.12,k)}},
c1c(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bo(u.save())
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
m=new B.bu()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.d83[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.c_(A.tJ,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a4T,d).aK(0,B.bX(A.I,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.iq,130)},
cna(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bo(v.save())
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
j=new B.c5(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.c5(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bu()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
m=(q&1)===0?D.cI3:D.djf
n.sav(new B.a9(A.a6,A.aa,A.x,m,h,h).aK(0,B.bX(A.I,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bIb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bo(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bo(v.save())
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
a3=new B.bu()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.sav(new B.a9(A.a6,A.aa,A.x,h?D.diY:D.dlU,a7,a7).aK(0,new B.a1(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.b=A.a9
a3.c=Math.max(0.6,i)
a3.r=D.BQ.gp(0)
b1.af(a5,a3)
v.restore()}$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=D.bsO.gp(0)
p.c=q*0.1
p.d=A.bw
b1.ah(new B.o(0,m*0.3),new B.o(0,q*0.4),p)
v.restore()}},
c7K(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.o(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.Q()
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=v
r.r=D.aB9[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bl(B.bs(g,s,s*1.6),new B.aO(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aB9[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bl(new B.a1(l,k,l+w,k+n),new B.aO(v,v))
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.ady,q)
d.am(k,l)}},
bPj(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.o(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o4,A.du][A.o.F(q,4)]
k=C.cY(q,3)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.j(0.75).gp(0)
j.a=A.p4
j.y=new B.hw(A.G,r)
a2.N(new B.o(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.Q()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.o(d,0),new B.o(d,w-u),t)
t=B.K()
t.r=A.df.gp(0)
a2.N(v,u,t)
t=a2.c
J.bo(t.save())
a0=new B.aF(a0.r,A.ai,null,null,B.a([],x.v))
a0.D(new B.jP(B.bX(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.r=B.ar(A.bq,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.ar(new B.a1(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t7(a2,v.a5(0,new B.o(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cCR(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cw.aA(0,A.j.E(a1/3,0,1))),e=new B.o(g,f)
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
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.Q()
f=B.K()
f.sav(new B.c_(A.A,0.5,A.x,k,0,B.a([D.bew.j(0.6),D.ahw],x.O),k,k).aK(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sav(D.exR.aK(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.j(0.18).gp(0)
d.bZ(B.bs(new B.o(n,m),s,v),l)
d.bZ(B.bs(new B.o(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i4,180)},
cmd(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
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
s=new B.bu()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.Q()
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=B.ar(A.cy,A.jf,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.Q()
u=new B.ao(A.O,A.M,A.R,A.T,A.P)
u.sav(new B.c_(Ap.B7,0.5,A.x,h,0,D.dpv,h,h).aK(0,B.bX(new B.o(o,i),j)))
d.N(new B.o(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cAT(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bw
J.bo(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.o(0,o),l)
d.ah(new B.o(0,n),new B.o(m,k),l)
d.ah(new B.o(0,n),new B.o(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eC,200)},
c3N(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.o(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.E(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cL(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bo(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bs(new B.o(o,0),p,q)
$.Q()
e=new B.ao(A.O,A.M,A.R,A.T,A.P)
e.sav(D.c7i.aK(0,new B.a1(0,n,m,l)))
a3.bZ(f,e)
r.restore()}}$.Q()
a0=B.K()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bjy.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t7(a3,w.a5(0,new B.o(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cuB(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i2,A.i4],a4),B.a([A.pb,A.iq],a4),B.a([A.aE,A.eK],a4)]
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
k.ab()}j.push(new B.o(f,e+d))}for(m=new B.ds(j,t),m=new B.bP(m,m.gI(0),s);m.C();){i=m.d
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
$.Q()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
l=a5[n]
i=l[0]
m.sav(new B.a9(A.a6,A.aa,A.x,B.a([i,l[1],i],a4),At.zL,new B.mI(w)).aK(0,new B.a1(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3v(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.j.bh(g/s),5)
a1=g+s
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3=Math.abs(a0)
a2.r=D.a4X[a3].gp(0)
b0.ar(new B.a1(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.r=D.a4X[A.o.F(a3+2,5)].gp(0)
b0.ar(new B.a1(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t7(b0,new B.o(u*a6,l-a7),a8*(0.01+0.012*t),D.a4X[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGA(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.o(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.o(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.D(new B.aZ(u,a2))
v=a1+v
m.D(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.D(new B.c5(v,r,p,l))
v=a2+n*0.95
m.D(new B.aq(p,v))
p=o*0.3
k=a2+n
m.D(new B.aq(a1+p,k))
m.D(new B.aq(a1-p,k))
q=a1-q
m.D(new B.aq(q,v))
m.D(new B.aq(q,l))
m.D(new B.c5(u,r,u,a2))
m.D(new B.bu())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bs(new B.o(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.b=A.a9
d.c=p
d.r=A.aC.gp(0)
a4.cC(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sav(new B.a9(A.a6,A.aa,A.x,D.dse,A.aA7,null).aK(0,new B.a1(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.t7(a4,new B.o(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLl(a4,a5,a6,60)},
bLl(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bo(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bs(A.I,r*A.j.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=D.Rr[A.o.F(p,5)].gp(0)
d.ar(o,n)
u.restore()}},
cyD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.j.F(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.j.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.o(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.o(m+t*k,v+u*k)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.c.j(0),A.bN],s),null,null).aK(0,B.rX(j,l)))
k.c=r
k.d=A.bw
d.ah(j,l,k)
this.t7(d,l,q,A.c,1-n)}},
bGp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.j.F(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.Q()
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
m=A.o.F(s,5)
n.r=D.aCW[m].j(o).gp(0)
n.a=A.p4
n.y=new B.hw(A.G,r*0.12)
d.N(new B.o(q,p),r,n)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=Math.max(0.6,r*0.05)
n.r=D.aCW[m].j(o*1.4).gp(0)
d.N(new B.o(q,p),r,n)}},
cjQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bo(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bs(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.Q()
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.b=A.a9
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bZ(p,o)
n=f*(0.9+q*0.25)+q
m=new B.o(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.i4.gp(0)
d.N(m,t,o)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=A.i2.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bTF(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.o(m*a1,p)
break
case 1:l=new B.o(m*a1,q)
break
case 2:l=new B.o(r,m*a2)
break
default:l=new B.o(s,m*a2)
break}k=A.j.F(a6+C.cY(o,2)*4,4)/4
j=A.e4.aA(0,A.j.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dfQ[A.o.F(o,5)]
J.bo(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bs(new B.o(0,l),i,j)
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.c,g],u),null,null).aK(0,B.bs(new B.o(0,l),f,h)))
a4.bZ(d,a0)}$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.i2.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i4,280)},
c7s(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bX(new B.o(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
j.c=u
j.r=D.azb[n].j((1-m)*0.8).gp(0)
a4.cC(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.azb[A.o.F(h,4)]
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=d.gp(0)
J.bo(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bZ(B.bs(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.o(s,g),new B.o(s,p),o)
if((h&1)===0){o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.o(s,p),new B.o(f+e*1.6,g-e*2),o)}}},
c5S(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.aF(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.c5(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.c5(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.b=A.a9
d.c=u
d.r=B.ar(A.bN,A.o4,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=A.i4.j(0.8).gp(0)
a7.N(new B.o(0,k),t,d)}v.restore()}a4=a6*0.17
$.Q()
a5=B.K()
a5.sav(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.i2.j(0.25),D.Zh],x.O),a3,a3).aK(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cB_(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.o(j,i)
$.Q()
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.r=A.bq.gp(0)
g.c=q
g.d=A.bw
b1.ah(new B.o(l,a9),h,g)
g=new B.ao(A.O,A.M,A.R,A.T,A.P)
g.sav(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i4,A.i2.j(0.6),D.Zh],o),null,null).aK(0,B.bX(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.j.F(b3+C.cY(f,2)*e,e)/e
a0=A.j.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.o(a4,a5)
a7=new B.ao(A.O,A.M,A.R,A.T,A.P)
a7.r=B.ar(A.i4,A.aw,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bw
a7.a=A.p4
b1.ah(new B.o(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.o(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bK_(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVb(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a1(p,l,p+n,l+m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.sav(D.c8d.aK(0,k))
a7.ar(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.Q()
a4=new B.ao(A.O,A.M,A.R,A.T,A.P)
a4.r=A.bN.j(0.85).gp(0)
a7.ar(new B.a1(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b12.prototype={
B(d){var w,v=null,u=new C.ceN(),t=new C.ceP(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.arU,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ceO(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ie[w]))
return B.bW(A.bH,s,A.bt,v,12,10)}}
C.a_u.prototype={
S(){return new C.aBw()}}
C.aBw.prototype={
gwe(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1F(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aP),$.aw())}return v},
gazp(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNc()
v=$.aw()
u.f!==$&&B.bF()
t=u.f=new B.au(new B.ba(w,A.b6,A.aP),v)}return t},
t(){var w=this.gb1F(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazp()
w.T$=v
w.P$=0
this.a3()},
a0_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hU().CG(90,700,700,A.eN),$async$a0_)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a0_)
case 8:p=e
o=q.b.toLowerCase()
n=J.aj_(o,".png")?"image/png":"image/jpeg"
r.m(new C.dhz(r,n,p))
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
return B.i($async$a0_,v)},
b1E(d){var w=null,v=A.c.j(0.07)
return B.bt(w,new B.b6(4,B.m(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vx,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ai_(p.gwe().a)
if(n==null)n=A.d.gH(D.Ie)
w=p.gwe()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Oj(p.gwe(),!1,!0,new B.bO(w.a+v,x.W)),0,0,0),B.ap(o,B.IC(A.n3,new C.dhE(d),B.nZ(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.IC(A.aqM,new C.dhF(p),B.nZ(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVm,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gb1F(0),o,o,o,o,o,2,p.b1E("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhG(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.fW,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i2.j(0.6),A.r,1)
if(p.gwe().d.length===0)q=D.bVJ
else{q=C.huV(p.gwe().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fR(q,A.A,o,o,A.cj,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.q(o,q,A.f,o,o,new B.p(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdE(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwe().d.length!==0)r.push(B.aG(o,o,o,o,H.PT,o,o,o,new C.dhH(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bn(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.m,o,A.e,A.i,0,o,o),A.U,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gazp(),o,o,o,o,o,2,p.b1E("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhI(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bUD,D.fYI,new C.dhJ(p,d),B.bp(A.aC,o,o,o,A.w,o,A.co,o,new B.b9(B.m(14),A.a1),o,o,o))],u),A.al,o,A.e,A.Q,0,A.p),A.f,o,o,D.b70,o,o,o,o,A.GM,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a_P.prototype={
S(){return new C.bib(new B.au(A.av,$.aw()))}}
C.bib.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.S(d).ax.a===A.J,m=n?A.c:A.S,l=n?A.aS:A.am,k=B.aH(d,A.c1,x.w).w,j=n?A.S:A.c,i=B.m(28),h=B.L(n?A.bA:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.don(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cZH[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aO(12,12)
q=new B.aO(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aP(!1,new B.bf(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pQ,o,o,o),A.f,o,o,new B.p(p,o,o,new B.bf(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doo(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hE,u,o),new B.CX(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.U)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aQ
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bt(o,new B.b6(4,B.m(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aWm,o,new C.dop(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.U)
return B.bn(!0,B.q(o,B.x(B.a([f,new B.dn(1,A.cp,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.p(j,o,h,i,o,o,A.n),o,o,o,A.ur,A.a0g,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhw.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e4()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.Q()
u=B.K()
u.y=A.H3
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.o(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.E(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.Q()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.o(l-d,h),new B.o(l+d,h+0),a0)
a2.ah(new B.o(l,h-d),new B.o(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bhd.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bl(new B.a1(0,0,0+a3.a,0+a3.b),A.jJ),e=this.b,d=Math.sin(e*2),a0=$.Q(),a1=B.K()
a1.b=A.a9
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.me
a2.am(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ai,g,g,B.a([],a1))
a0.D(new B.j8(f))
v=new B.TN(new B.ru(B.xH(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.iw()
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
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.b=A.a9
k.d=A.bw
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iw()
h=u[d].Dd(o).a
$.Q()
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=w.gp(0)
l.y=Ad.op
a2.N(h,5,l)
l=new B.ao(A.O,A.M,A.R,A.T,A.P)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqh.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e4()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.o(w,v)
t=e.gao2()*1.4
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
k=new B.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alx(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bc2.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
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
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.o(j,i),l,f)
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.o(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bbG.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c+11)
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
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
j.c=s
j.d=A.bw
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.bxn.prototype={
a4(d,e){var w,v,u=new B.a1(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.Q()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sav(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d6M,null).aK(0,u))
d.ar(u,w)
w=u.cn(-3)
v=B.K()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bul.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e4()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
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
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.o(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.btt.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a1(0,0,0+e.a,0+e.b)
$.Q()
v=B.K()
v.a=A.p4
v.sav(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.E(u-0.15,0,1),A.j.E(u,0,1),A.j.E(u+0.15,0,1)],x.x),null).aK(0,w))
d.ar(w,v)},
aE(d){return d.b!==this.b}}
C.bgy.prototype={
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
u.y=A.ux
r=new C.dhg(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.o(t,t),1,1)
v=e.a-t
r.$3(new B.o(v,t),-1,1)
s=e.b-t
r.$3(new B.o(t,s),1,-1)
r.$3(new B.o(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.y9.prototype={}
C.JD.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asG.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vb.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mS.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
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
u.n(0,"decoration",C.i9Y(v.z))
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
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.ckk(),m),m.k("ak.E"))
return C.rV(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.ckl(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gbd5(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gT7(){if(!C.kL(this.w))return!1
var w=this.gbd5()
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
q=B.U(r).k("N<1,m0>")
r=B.C(new B.N(r,new C.ck9(),q),q.k("ak.E"))
return C.Cm(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
w=B.C(new B.N(w,new C.cka(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jY.prototype={}
C.b3b.prototype={
B(d){return B.cs(new C.ckf(this))}}
C.apI.prototype={
S(){return new C.blr(null,null)}}
C.blr.prototype={
gb1G(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.fF,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gb1G().t()
this.byM()},
B(d){return B.c9(this.gb1G(),new C.dPR(),this.a.c)}}
C.aMZ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aer.prototype={
QC(d,e,f,g){return this.bTi(d,e,f,g)},
bTi(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QC)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QC,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dv,24)],x.V),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aV,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dh,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d8)
n.push(B.A(B.a([B.E(new C.aeI(A.hW,"Download",A.c4,new C.eBt(w,d),!0,v),1),A.au,B.E(new C.aeI(A.uM,"Share",A.bl,new C.eBu(w,d),!1,v),1),A.au,B.E(new C.aeI(A.hI,"Safari",A.b1,new C.eBv(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eBw(d),v,v))
return B.bn(!0,new B.D(A.qw,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GT,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeI.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aP(!1,u,!0,B.eJ(B.x(B.a([p,A.U,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.p(s,v,q,r,v,v,A.n),v,D.bGM,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b39.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arN(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.R(v,w,v,w)}else{v=6*w
u=new B.R(v,10*w,v,12*w)}t=i.cdF().am4(1.35)
s=B.axj(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEl(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.w,A.bl,h,h,h,h,2,D.c3_,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bO("slide_tf_"+g.a,x.W),h,A.xd,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AC,A.ao,h,A.Va,h,h)
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
w=n?t.cOr(B.b0(g.Q).j(0.45),A.cH):t
p=g.as
l=m?1:h
k=m?A.eO:A.Ex
p=B.d(f,new B.bO("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V1:s
$.Q()
j=B.K()
j.b=A.a9
j.c=3*w
j.e=A.dP
j.r=A.as.gp(0)
j=i.cuE(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cuC(k,t,l?A.V1:s)],x.p),h)}else w=i.cuD(p,t,g.k2?A.V1:s,m)
v=new B.mK(w,new B.bO("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c1U()
case 3:return i.cmc()
case 2:return B.b4(h,h,h,new C.b36(g,h),A.fJ)
case 5:g=g.r
return new C.b38(g,!i.e&&i.z==null,h)}},
cdF(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k0
j=A.cH
break
case"shadow":v=o.d
e=B.a([new B.cU(D.ahu,new B.o(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.I,6*v),new B.cU(l,A.I,16*v),new B.cU(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bk
w=A.as
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.nb
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bF,new B.o(v,v),0)],x.r)
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
e=B.a([new B.cU(A.bb,new B.o(-3*v,0),0),new B.cU(A.ay,new B.o(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cF,A.I,8*v),new B.cU(A.ay,new B.o(0,-3*v),18*v)],x.r)
k=A.u
w=A3.xV
break
case"ice":v=o.d
e=B.a([new B.cU(A.aI,A.I,10*v),new B.cU(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eC
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k0
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d8T[q]
u.push(new B.cU(v,new B.o(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.o(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.Q()
f=B.K()
v=o.d
f.sav(D.c5H.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.M4,new B.o(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.Q()
f=B.K()
v=o.d
f.sav(D.c60.aK(0,new B.a1(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.k0
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBq(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f9I.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ckd(h)
v=r.k2?C.imP(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eO:A.Ex
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.YY(B.cP(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cuE(d,e,f,g){return this.aBq(d,e,f,!1,g)},
cuC(d,e,f){return this.aBq(d,e,f,!1,null)},
cuD(d,e,f,g){return this.aBq(d,e,f,g,null)},
bEl(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.aa
default:return A.a6}},
c1U(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bM
return B.at(B.X(s.b===D.lr?A.HQ:A.Cx,A.aD,t,t,t,32),t,t,t)}w=u.bHp(r)
if(s.b===D.lr){s=B.m(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.p(A.c,t,B.L(A.ct,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.R(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQm(r,!0)
return C.fO8(s.go,v,s.id)}return w},
aQm(d,e){var w,v,u,t
try{w=C.in9(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cs(new C.ckc(this,w,v,e))
return u}catch(t){return D.aeX}},
bHp(d){return this.aQm(d,!1)},
cmc(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcq
return C.inr(v,w.db,w.dx)}}
C.b36.prototype={
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
r.D(new B.aZ(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.aZ(0,h))
f=u*0.65
r.D(new B.aq(f,h))
r.D(new B.aq(f,t*0.2))
r.D(new B.aq(u,t*0.5))
r.D(new B.aq(f,t*0.8))
t*=0.55
r.D(new B.aq(f,t))
r.D(new B.aq(0,t))
r.D(new B.bu())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.o(0,h),new B.o(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.aZ(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bu())
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
r.ab()}}r.D(new B.bu())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aKv.prototype={
S(){return new C.bwS(null,null)}}
C.bwS.prototype={
Y(){var w,v=this
v.a2()
w=B.bm(null,A.hD,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bB0()},
aQx(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.dh,w,w,w),w,w,w),new B.p(w,w,w,u,w,new B.a9(A.a6,A.aa,A.x,v,w,w),A.n),A.bi)},
bEz(){var w,v=this,u=null,t=v.aQx("Slide A",A.bl),s=v.aQx("Slide B",A.b1)
if(v.a.c===D.cs)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.fg4(v,s,t),u)},
B(d){return this.bEz()}}
C.aLc.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.Wb.prototype={
S(){return new C.blD(null,null)}}
C.blD.prototype={
Y(){var w,v,u=this
u.a2()
w=B.bm(null,A.C4,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cs){w.sp(0,1)
return}B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0r(u),x.a)},
bz(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cs)w.sp(0,1)
else B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0q(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bz0()},
B(d){var w,v=this.a
if(v.c.dy===D.cs||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e0p(this),v.d)}}
C.JC.prototype={
B(d){return B.cs(new C.ck5(this))}}
C.aBb.prototype={
S(){return new C.bfZ()}}
C.bfZ.prototype={
Y(){this.a2()
if(this.a.c!==D.cs)B.bQ(A.NF,new C.det(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cs)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Wb(C.er(A.bn,!1,4279310375,A.aG,"",4294538006,24,A.bs,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bj,o,2,"",0,0,"",u,D.fh,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.p(A.ch,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bO("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bn,!1,4294967295,A.aG,"",4280640491,22,A.bs,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bj,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ap(32,new C.Wb(t,B.q(p,D.fJR,A.f,p,p,new B.p(s,p,B.L(A.aV,A.r,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.bO("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7A,A.bi)}}
C.a8K.prototype={
S(){return new C.bmj(null,null)}}
C.bmj.prototype={
gb2h(){var w=this.a
if(w.e)w=D.f9U.q(0,w.c)||D.aSs.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a2()
if(v.gb2h()){w=C.ils(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bm(null,B.dv(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzw()},
B(d){var w,v=this,u=v.d
if(!v.gb2h()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.eoQ(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b15.prototype={
B(d){var w=null
return B.at(C.b3a(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bs,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bj,4280172719,2,"Aa",0,0,this.c,D.cs,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhb.prototype={
jt(d){return C.a3C(this.b,new B.a1(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsn.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a1(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3C(k,l),i=e.gdA(),h=new C.f5_()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aTY.aK(0,l))
d.af(j,w)
k=C.a3C(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btj.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fke.aK(0,l))
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
k.sav(D.fkc.aK(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3C(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bb.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pc.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.fk7.aK(0,l))
d.af(j,w)
w=C.a3C(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgh.gp(0)
d.af(w,v)
k=C.a3C(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjh.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aTY.aK(0,l))
d.af(j,k)
for(k=B.xH(j),w=B.a([],x.X),k=new B.ru(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jG(y.M));--r
k.iw()
q=w[r].b
q===$&&B.c()
p=A.o.E(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iw()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iw()
n=w[r].Dd(q*o/p).a
m=D.d61[A.o.F(o,4)]
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.c.j(0.9).gp(0)
d.N(new B.o(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fkg.aK(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fkd.aK(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3C(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.o8.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btq.prototype={
a4(d,e){d.Gp(C.a3C(this.b,new B.a1(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aNc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aNH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aP0.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.a92.prototype={}
C.ON.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aG3(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUu(){return this.r},
gUv(){return this.w},
gMb(){return this.x}}
C.aG3.prototype={
Y(){var w,v=this
v.a2()
$.aW.c1$.push(v)
C.fT7()
$.hCW=new C.eHH(v)
w=B.bm(null,A.C1,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IW()},
bz(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P5(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IW()}},
jl(d){if(d===A.B9||d===A.tL||d===A.tK||d===A.pY)this.u9()},
t(){var w,v,u,t=this
$.aW.hV(t)
w=t.at
if(w!=null)w.a1(0)
t.u9()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hi()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bzJ()},
gacB(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPo(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ad6(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gT7())return!1
return!0},
ky(){return this.ad6(null)},
ak3(){var w=this.c
if(w==null)return
w.L(x.q).f.U(D.fiv)},
qO(){if(!this.ky())return!1
this.ak3()
return!0},
asU(d){var w,v,u,t,s,r=this
if(r.ad6(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hC2(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ap(){return this.asU(null)},
IW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asI(k),$async$IW)
case 3:j=e
w=4
return B.b(C.arf(k),$async$IW)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h86(j,t.c4V())
w=t.gacB()?5:7
break
case 5:r=t.gPo()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1j(r),$async$IW)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eE4())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c4(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eE5())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zc(m==null?"":m)!=null)continue
C.fTj(n,s)
p=!0}t.m(new C.eE6(t,s))
if(p||s.length>J.ad(j))t.u9()
case 1:return B.h(u,v)}})
return B.i($async$IW,v)},
c4V(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kL(w)&&w!==q}if(w)p.push(r)
return p},
ct4(d){var w,v=this,u=d.w
if(!C.kL(u)||u==="hati_kiapo_uongozi")return
v.abq(d)
w=A.d.bj(v.d,new C.eFF(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c4(u,0,d.hQ())
v.db=!1},
cn9(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kL(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ct4(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i3>")
s=B.C(new B.cM(new B.Y(s,new C.eFt(),w.k("Y<1>")),new C.eFu(),v),v.k("M.E"))
return s},
P5(d){return this.bTJ(d)},
u9(){return this.P5(null)},
bTJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cn9()
w=3
return B.b(C.X4(d==null?t.a.c:d,s),$async$P5)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asU(r)?4:5
break
case 4:w=6
return B.b(C.a8g(r),$async$P5)
case 6:q=r.x
p=A.a.i(q==null?t.gPo():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eDs())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c4(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
pI(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kL(u.w))===!0?A.h_:A.lH
v.at=B.cy(w,new C.eGN(v))},
b1H(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agd(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cGS(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agd(w.e.hQ(),w.f,w.r))
w.m(new C.eHD(w,v.pop()))
w.pI()},
cs9(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agd(w.e.hQ(),w.f,w.r))
w.m(new C.eFD(w,v.pop()))
w.pI()},
oC(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eHq(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yu(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
y9(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KI(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d4(new B.cM(new B.Y(w,new C.eHr(),v.k("Y<1>")),new C.eHs(),u),u.k("M.E"))
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
m=w.c3(0,p,new C.eHt(n))
s.c3(0,p,new C.eHu())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
If(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eCR(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPo()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c4(u.d,0,u.e.hQ())}u.oC()
u.pI()},
akp(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.Yu(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kL(v.w))===!0
if(u){C.ilw(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ilx(t,w.d+w.f*0.5)}}s.If()
s.oC()
s.pI()
if(u&&s.c!=null)s.m(new C.eHE())},
cI_(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.If()
w.oC()
w.pI()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqS(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ijy(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c28(v)
t=q.c27(v)
s=B.b0(v.e)
r=v.f
return new C.jY(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hWl(o)},
c28(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.E(A.o.aq(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.S},
c27(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
agm(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacB()){w.c.L(x.q).f.U(D.fh6)
return}w.abq(d)
w.b2Z(C.bEC(d))
return}if(C.ckY(v)){w.abq(d)
w.b2Z(d)
return}w.m(new C.eEM(w,d))},
ats(){var w,v,u,t,s,r,q=this
q.a38(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kL(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eCP(q))
if(r&&q.c!=null){u.toString
q.Ke(u,s)}return}q.u9()
q.m(new C.eCQ(q))},
b2Y(d){this.abq(d)
this.a0C(d,!0)},
abq(d){if(!C.kL(d.w))return
C.fTj(d,this.d)},
a0C(d,e){return this.cj1(d,e)},
b2Z(d){return this.a0C(d,!1)},
cj1(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0C=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEC(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPo():r)
t.dy.W(0,q.toLowerCase())
C.arg(t.a.c,q)}r=s}else r=d
w=C.ckY(r.w)?3:4
break
case 3:w=5
return B.b(t.abr(r),$async$a0C)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eF8(l))
o=l.a.hQ()
n=C.kL(o.w)&&C.imK(o)
t.m(new C.eF9(t,o,p))
if(n){m=A.d.bj(t.d,new C.eFa(o))
if(m>=0){t.d[m]=o.hQ()
t.u9()}}if(!t.ad6(l.a))t.ZF()
r=!1
if(t.c!=null)if(!t.ad6(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asU(r)&&C.fPj(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.fhH)
case 1:return B.h(u,v)}})
return B.i($async$a0C,v)},
abr(d){return this.bRM(d)},
bRM(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ly(r.c,A.Ah),$async$abr)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lc(!1,r,s.c,s.d,null,A.Ah,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abr,v)},
oq(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ckY(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckn(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oq,v)},
ag3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eEL(),s,null,!0,!0,x.H),$async$ag3)
case 3:if(t.c==null){w=1
break}t.ats()
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
ag2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eEI(),s,null,!0,!0,x.H),$async$ag2)
case 3:if(t.c==null){w=1
break}t.m(new C.eEJ())
t.ats()
case 1:return B.h(u,v)}})
return B.i($async$ag2,v)},
ZF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZF)
case 3:r=e
if(B.k2(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aB("Bool","ngmy_marriage_hint_seen",!0),$async$ZF)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffH)
case 1:return B.h(u,v)}})
return B.i($async$ZF,v)},
Ke(d,e){return this.ctv(d,e)},
ctv(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ke=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahA(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Ke)
case 9:w=4
break
case 6:w=10
return B.b(C.ahB(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Ke)
case 10:w=4
break
case 7:w=11
return B.b(C.ahC(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Ke)
case 11:w=4
break
case 8:w=12
return B.b(C.ahD(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Ke)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ke,v)},
c3L(){var w,v,u,t,s=this
if(!s.gacB()){s.c.L(x.q).f.U(D.ffU)
return}w=s.gPo()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahz(u,t,v,new C.eE0(s),new C.eE1(s),w)},
agn(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dT,null,new C.eES(u),s,!0,!0,!1,A.lS,!1,!1,x.N),$async$agn)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahD(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahA(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahB(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahC(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c3L()
return B.h(null,v)}})
return B.i($async$agn,v)},
ci7(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1H()
w=C.cD()
v=C.Cm(t,t,t,t,D.DT,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eET(u,v))},
aaO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.irS(s),$async$aaO)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eCT())
t.da(new C.eCU(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaO,v)},
aio(d,e,f,g){var w=null,v=g?A.dr:A.bO,u=B.L(g?A.aV:A.ct,A.r,1)
return B.hb(B.aA(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.p(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0B(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qO()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eF3(),q),q.k("M.E"))}o=s!=null&&s.b===D.lR?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.fhS)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eF4(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0B)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0B,v)},
agE(){return this.cj0()},
cj0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.irE(s,t.f+1,o),$async$agE)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jz(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eF6(q))
t.da(new C.eF7(p,t,o,q,r))
t.c.L(x.q).f.U(D.fig)
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
agL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()||!t.Ap()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFo(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.ffs)
w=1
break}o=new B.N(p,new C.eFp(),B.U(p).k("N<1,I>")).f1(0,new C.eFq())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aP),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eFr(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agL)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eFs())
case 1:return B.h(u,v)}})
return B.i($async$agL,v)},
agq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qO()){w=1
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
return B.b(C.hEa(s,new C.Fi(r,q,p,o==null?"":o)),$async$agq)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.da(new C.eEU(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ai_(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agq,v)},
abk(){return this.bR3()},
bR3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.irR(s,t.f+1,l),$async$abk)
case 3:r=e
q=$.hbP
$.hbP=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.da(new C.eD9())
t.c.L(x.q).f.U(D.ffj)
w=1
break}if(!q){s=r.CW
s=C.hCU(l,s==null?"":s,!1)}else s=!1
if(s){t.da(new C.eDa(t,l,r))
t.c.L(x.q).f.U(D.fiK)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jz(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eDb(p))
o=s.length
t.da(new C.eDc(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abk,v)},
aSK(d,e){if(e){this.ahd()
return}this.ci7(d,!1)},
bMy(){return this.aSK(null,!1)},
ahd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eFy(t),r,!0,!0,!0,A.pJ,!1,!1,x.N),$async$ahd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFz(t,C.ijx(s).pV()))
case 1:return B.h(u,v)}})
return B.i($async$ahd,v)},
da(d){var w=this
if(w.qO())return
w.If()
w.b1H()
w.m(d)
w.KI()
w.oC()
w.pI()},
a9j(){this.da(new C.eBO(this,D.n6))},
aUe(){var w=this.gdB()
if(w==null)return
this.da(new C.eD7(this,w))},
aTk(){var w=this.e
if(w==null||w.r.length<=1)return
this.da(new C.eD5(this))},
b5S(d,e){if(this.e==null||d===e)return
this.da(new C.eFH(this,d,e))},
OC(d){return this.bOz(d)},
bOz(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPo():s)
w=5
return B.b(C.are(t.a.c,r),$async$OC)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asK(s)
w=6
return B.b(C.b3e(t.a.c,s),$async$OC)
case 6:if(t.c==null){w=1
break}t.m(new C.eD1(t,d))
w=7
return B.b(t.u9(),$async$OC)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
cts(d,e){var w=this
if(d.z){w.ak3()
return}w.m(new C.eFG(w,d,e))
w.pI()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xu(d){return this.ch.c3(0,d.a,new C.eCS(d))},
avl(d){return this.CW.c3(0,d.a,new C.eDt())},
a38(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yu(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.jr()},
b9p(){return this.a38(!0)},
a34(d){var w,v,u=this
if(u.qO())return
if(!u.Ap())return
w=u.Yu(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xu(w).sb1(0,"")}u.m(new C.eHo(u,d))
$.aW.x1$.push(new C.eHp(u,d,w))},
b9Y(d){var w=this
if(d.b===D.cW&&!w.ky()&&w.Ap()){w.a34(d.a)
return}w.aBQ(d.a)},
aBQ(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.Yu(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eGO(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.jr()}},
aOR(){this.da(new C.eBP(this))},
pq(d){return this.bDC(d)},
bDC(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$pq)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.da(new C.eBM(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pq,v)},
Wx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hs(78,1920),$async$Wx)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eBC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wx,v)},
Wr(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.Dx(t.a.c),$async$Wr)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.U(D.fjj)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eBz(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wr)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.da(new C.eBA(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wr,v)},
auj(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eD3(v))){w.c.L(x.q).f.U(D.fik)
return}if(w.w===v)w.a38(!0)
w.da(new C.eD4(w,v))},
bKP(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fh)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPz(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.da(new C.eCg(w,v,d,e,t,u))},
bFc(d){return this.aPz(d,null)},
a9z(d){return this.bFk(d)},
bFk(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9N.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oq(),$async$a9z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bFc(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fh){r=d.c
t.aPz(r.j(0.88),r)}w=1
break}t.da(new C.eCl(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9z,v)},
a9y(d){return this.bFi(d)},
bFi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9y=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.oq(),$async$a9y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eCj(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
bF2(d){var w=this.gdB()
if(w==null)return
this.da(new C.eCf(this,w,d))},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.irN(r),$async$a0H)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oC()
t.m(new C.eFi(t,s))
w=4
return B.b(t.u9(),$async$a0H)
case 4:if(t.c!=null)t.agm(s)
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
abb(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a38(!0)
t.oC()
s=t.c
s.toString
w=3
return B.b(C.Sa(s,q),$async$abb)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abb,v)},
E6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oC()
t=4
w=7
return B.b(C.aRR(m),$async$E6)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRh(o,q,m.b),$async$E6)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E6,v)},
FN(d,e){return this.cGf(d,e)},
cGf(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FN=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qO()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a38(!0)
t.oC()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eHx(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.ikv(q?"":s)
o=C.hBP(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eHy(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czk(n.length,o,s),$async$FN)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ikp(h.a)
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
return B.b(t.czj(n,o),$async$FN)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eHz(s))
s=h.a.b
w=11
return B.b(t.czh(k.b,s),$async$FN)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.iku(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fjv)
w=1
break}w=12
return B.b(t.czi(j.a,s,o,j.c),$async$FN)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eHA(h,t,i))
t.pI()
case 1:return B.h(u,v)}})
return B.i($async$FN,v)},
czk(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eH3(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
czj(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eH2(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
czh(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGX(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
czi(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGZ(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acF(){var w=null
return B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acG(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dv,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.p(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ew,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fuv,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXz(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VK,A.K,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.bV,w,w,w)},
aXC(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.p(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ne,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.z6,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDX(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c12(d,e,f,g,h,i){return this.aXC(d,e,f,!1,g,h,i)},
awF(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dh,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,w,w,w,A.a0E,w,w,w)},
aXB(d,e,f){var w=null,v=B.bp(A.c.j(0.08),w,w,w,A.c,w,A.co,w,new B.b9(B.m(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nV,w,w,w),w,new C.eDW(d,f),v)},
aXA(d,e){return this.aXB(d,e,null)},
Kz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pu(l,s.c,s.d),$async$Kz)
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
for(l=A.d.gae(o.z),n=new B.eB(l,new C.eGP());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaX(l.charCodeAt(0)==0?l:l,r.b),$async$Kz)
case 4:l=t.a
w=5
return B.b(B.pt(l.c,l.d),$async$Kz)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kz,v)},
IB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pu(q,s.c,s.d),$async$IB)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaX(A.Y.az(r.aj(),null),r.b+".json"),$async$IB)
case 4:q=t.a
w=5
return B.b(B.pt(q.c,q.d),$async$IB)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IB,v)},
b98(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oC()
u.u9()
w=u.c
w.toString
v=B.eb(new C.eHn(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$HP)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fTw(),$async$HP)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.inl(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.as,null,new C.eBH(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HP)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.da(new C.eBI(t,s))
w=1
break}if(p==="split")t.da(new C.eBJ(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HP,v)},
NX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}w=3
return B.b(t.oq(),$async$NX)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRQ(s,null,null),$async$NX)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eBN(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NX,v)},
b5E(d){var w=this.e
if(w==null||!C.kL(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aQW(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRQ(s,t==null?null:B.b0(t),u)},
a9h(d){return this.bDt(d)},
bDt(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fjK)
w=1
break}w=3
return B.b(t.aQW(),$async$a9h)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eBE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9h,v)},
ahX(d){return this.csc(d)},
csc(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fiS)
w=1
break}w=3
return B.b(t.aQW(),$async$ahX)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.da(new C.eFE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahX,v)},
ceO(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bE(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cFf()}},
cFf(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.da(new C.eHv(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1n(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.da(new C.eE_(this,r,u.d))},
c6d(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kL(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fQ4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lr&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c6e(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kL(w.w))!==!0)return!0
if(!this.Ap())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fQ4(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lr&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O4(d){return this.bFK(d)},
bFK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhI)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ari(p),$async$O4)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fim)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8g(r)
w=1
break}t.m(new C.eCp(t,d,o))
t.oC()
$.aW.x1$.push(new C.eCq(t))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
Wv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$Wv)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFi(),$async$Wv)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.da(new C.eBB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wv,v)},
OR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$OR)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fTn(r),$async$OR)
case 4:q=e
if(q==null){w=1
break}t.da(new C.eDr(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
jj(d){this.da(new C.eBK(this,d))},
qD(d){return this.bEW(d)},
bEW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qO()){w=1
break}m=!D.aSv.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oq(),$async$qD)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HP()
w=1
break A
case"sign_paper":t.NX()
w=1
break A
case"hd_photo":t.Wv()
w=1
break A
case"sharpen":t.OR()
w=1
break A
case"print":t.E6()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.da(new C.eBT(s))
w=1
break A
case"text_box":t.aOR()
w=1
break A
case"picture":t.Wx()
w=1
break A
case"present":t.b98()
w=1
break A
case"new_slide":t.a9j()
w=1
break A
case"export_json":t.IB()
w=1
break A
case"outline_share":t.Kz()
w=1
break A
case"flashcard_tool":t.vN(D.Jb)
w=1
break A
case"quiz_tool":t.vN(D.Jc)
w=1
break A
case"worksheet_tool":t.vN(D.Jd)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.da(new C.eBU(t,s))
w=1
break A
case"delete_el":t.auj()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eBV(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.da(new C.eC5(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.da(new C.eC8(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.da(new C.eC9(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.da(new C.eCa(s))
w=1
break A
case"grayscale":case"brighten":t.OR()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.da(new C.eCb(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.da(new C.eCc(s))
w=1
break A
case"rectangle":t.pq(D.bj)
w=1
break A
case"circle":t.pq(D.eY)
w=1
break A
case"triangle":t.pq(D.ka)
w=1
break A
case"arrow":t.pq(D.DV)
w=1
break A
case"line":case"divider":t.pq(D.fH)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eB(q,new C.eCd()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eCe(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqS().d.l(),A.aG,40,A.bs,A.u,0.18,q,"Presentation Title",0,D.n7,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqS().e.l(),A.aG,22,A.bs,A.a8,0.12,q,"Subtitle goes here",0,D.dk,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j5(A.bn,!0,4279310375,A.aG,20,A.bs,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vd,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j5(A.bn,!1,4279310375,A.aG,20,A.bs,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vc,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j5(A.K,!1,4279310375,A.aG,24,A.cH,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dk,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j5(A.bn,!1,4284773515,A.aG,14,A.bs,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.vd,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j5(A.dY,!1,4279310375,A.aG,14,A.bs,A.a8,0.08,C.cD(),C.bFk(),0,D.dk,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j5(A.dY,!1,4279310375,A.aG,13,A.bs,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dk,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.da(new C.eBW(t))
w=1
break A
case"footer_bar":t.da(new C.eBX(t))
w=1
break A
case"highlight":t.da(new C.eBY(t))
w=1
break A
case"redact":t.da(new C.eBZ(t))
w=1
break A
case"callout":t.da(new C.eC_(t))
w=1
break A
case"checkboxes":t.jj(C.j5(A.bn,!1,4279310375,A.aG,20,A.bs,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dk,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bs,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dk,0.8,0.1,0.18))
w=1
break A
case"memo":t.da(new C.eC0(t))
w=1
break A
case"letter":t.jj(C.j5(A.bn,!1,4279179050,A.aG,17,A.bs,A.a8,0.82,C.cD(),C.bFk()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j5(A.bn,!1,4279310375,A.aG,22,A.bs,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vd,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j5(A.bn,!1,4279310375,A.aG,18,A.bs,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dk,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bs,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dk,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bs,A.a8,0.08,C.cD(),"Initials: ______",0,D.dk,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j5(A.K,!1,4278556265,A.aG,28,A.bs,A.u,0.12,C.cD(),"APPROVED",0,D.n7,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j5(A.K,!1,4292617766,A.aG,28,A.bs,A.u,0.12,C.cD(),"DRAFT",0,D.dk,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j5(A.K,!1,871318596,A.aG,36,A.bs,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dk,0.8,0.1,0.42))
w=1
break A
case"sticky":t.da(new C.eC1(t))
w=1
break A
case"progress":t.da(new C.eC2(t))
w=1
break A
case"stars":t.jj(C.j5(A.K,!1,4279310375,A.aG,36,A.bs,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qW,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j5(A.K,!1,4279310375,A.aG,32,A.bs,A.V,0.14,C.cD(),"y = mx + b",0,D.dk,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j5(A.K,!1,4279310375,A.aG,18,A.bs,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vc,0.8,0.1,0.35))
w=1
break A
case"two_col":t.da(new C.eC3(t))
w=1
break A
case"compare":t.da(new C.eC4(t))
w=1
break A
case"link_text":t.jj(C.j5(A.bn,!1,4280640491,A.nb,16,A.bs,A.a8,0.1,C.cD(),"https://example.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j5(A.bn,!1,4279310375,A.aG,18,A.bs,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j5(A.bn,!1,4280640491,A.aG,18,A.bs,A.a8,0.1,C.cD(),"name@email.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.da(new C.eC6(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.da(new C.eC7(t,r))
w=1
break A
case"invoice":t.jj(C.j5(A.bn,!1,4279179050,A.aG,16,A.bs,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j5(A.bn,!1,4279179050,A.aG,17,A.bs,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j5(A.bn,!1,4279310375,A.aG,16,A.bs,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFk()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j5(A.bn,!1,4279310375,A.aG,17,A.bs,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j5(A.bn,!1,4279310375,A.aG,15,A.bs,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dk,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qD,v)},
cyM(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f9Q.q(0,this.z)},
cyL(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
baR(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cs,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bA
u=B.L(u,A.r,o&&e?2:1)
t=C.ina(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ab:A.am
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(w,p,u,v,p,p,A.n),p,p,p,p,new B.R(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.q(p,D.PK,A.f,p,p,D.Fh,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fy,B.aA(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRk(d){var w,v=null,u=this.kc()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.am,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Sk,new C.eDq(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.i,0,v,v)},
vN(d){return this.bDB(d)},
bDB(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSp.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oq(),$async$vN)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.da(new C.eBL(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f8a
w=h.e
if(w==null)return h.bHv()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.S(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aH(u,A.c1,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eP,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.biE
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gT7()}else j=!1
if(j)k.push(new C.a8L(h.a.c,!1,h.e.gbd5(),h.gceL(),g))
else if(s&&h.e!=null&&!h.ky()&&C.ckY(h.e.w)){j=h.a
k.push(new C.a8L(j.c,j.d,g,h.gcfU(),g))}if(s)k.push(h.bRf(w,t,r))
if(s&&h.ky()){w=t?A.fQ:A.kO
j=B.m(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bXB,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fQ,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.p(w,g,i,j,g,g,A.n),g,g,g,A.yz,A.it,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7b(t,r))
if(w&&h.ky())k.push(h.cGg(t))
if(r&&h.kc()!=null&&w&&!h.ky())k.push(h.c76(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8y(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8y(t,!1),g))
i.push(B.E(new B.bL(A.b7,g,g,h.bIQ(v,t,!s||p),g),1))
if(h.cyM(r)&&u&&s&&!h.ky())i.push(h.cex(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.ky()&&h.cyL(!1))j.push(new B.a5(240,g,h.bU7(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c77(t))
return B.c4(g,m,B.bn(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHv(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.S(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cdG(A.bl,A.qD,new C.eCt(r),r.gci4(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOz(A.bl,A.hV,"Blank Presentation",new C.eCu(r)),1),A.au,B.E(r.aOz(A.b1,A.uR,"Class Template",new C.eCv(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bz,s,A.na,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEo(w))
else{t=new B.i1(t,B.U(t).k("i1<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eCw(r,w),x.l))}return B.c4(q,p,B.bn(!1,B.cl(u,q,q,new B.R(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPm(){this.m(new C.eD6(this))
var w=this.c
w.toString
if(B.aH(w,A.c1,x.w).w.a.a<900){w=$.aW.ap$.d.c
if(w!=null)w.jr()}},
agF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.S(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eFh(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
Bq(d,e){return this.cz7(d,e)},
cz7(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i_(D.YN,!0,"Dismiss",j,new C.eGQ(),new C.eGR(d,e),A.iH,!0,x.N),$async$Bq)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ak3()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gT7()){r.ak3()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRR(d),$async$Bq)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRh(j,q,d.b),$async$Bq)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FN(d,!1),$async$Bq)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i_(D.YN,!0,"Dismiss",j,new C.eGS(),new C.eGT(d),A.a3,!0,x.y),$async$Bq)
case 20:if(g===!0)r.OC(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahH("Rename presentation",d.b),$async$Bq)
case 24:l=g
if(l!=null)r.cts(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eGU(r,k))
r.pI()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bq,v)},
b3C(d,e){var w=null
return B.bM(!1,D.fUk,w,w,!0,w,w,w,e,w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.az,w,A.lJ,w,w,w,w,w,A.kx,w,w))},
bEo(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBQ(this,d),null)},
bNs(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eCV(),x.dv).bY(0,new C.eCW()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.al7,this.aP9(v,e,new C.eCX(),f),null)},
aP9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e1)
t=e.j(g?0.14:0.1)
s=new B.aO(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bv,n,n,n,10),A.r2],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c7(A.aL,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.p(t,n,new B.bH(r,r,r,r),new B.bf(s,s,s,s),n,n,A.n),n,n,n,n,A.mY,n,n,n))
A.d.v(l,u)}return B.ev(A.a6,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.e0)},
bEm(d,e,f){return this.aP9(d,e,null,f)},
bNu(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dsw
else if(v==="hati_kuhoweya")w=D.dcX
else{if(v==="hati_kiapo_uongozi")v=D.cZB
else v=C.kL(v)?D.d6o:A.RW
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eD_(this,f,d,e,w),null)},
c77(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bM
w=k.Xu(i)
v=k.avl(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.D(A.Ca,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bM(!1,D.fPJ,j,j,!0,j,j,j,new C.eEq(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.as:A.c
q=B.m(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hb,B.c3(new B.D(A.eW,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),w,A.bl,j,j,j,j,2,D.c2I,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xd,j,j,j,j,j,j,!1,"\u2022",j,new C.eEr(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.S,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AC,A.ao,j,A.Va,j,j),j),new B.p(r,j,p,q,o,j,A.n),A.bi),j),1)
q=B.m(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.cg(B.A(B.a([k.uD(G.OM,j,new C.eEs(k,i),d),k.uD(G.a1M,j,new C.eEt(k,i),d),k.uD(I.apw,j,new C.eEu(k,i),d),k.uD(I.a2y,j,new C.eEv(k,i),d),k.uD(k.bEk(i.as),j,new C.eEw(k,i),d),k.uD(D.aqC,j,new C.eEx(k,i),d),k.uD(D.aqB,j,new C.eEy(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.alg,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.am,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dd],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.p(p,j,o,q,j,j,A.n),j,j,j,j,A.lK,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c76(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bM
w=m.b
v=w===D.cW
u=B.m(18)
t=x.O
t=d?B.a([A.bp,A.S],t):B.a([A.c,A.aQ],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b79(A.j2,"Edit",new C.eEb(o,m),d,!0))
if(w===D.lR)p.push(o.b79(A.HL,"Shape & ring",new C.eEc(o),d,!0))
p.push(o.uD(A.D0,"Format",new C.eEd(o),d))
if(v)A.d.v(p,B.a([o.uD(G.OM,n,new C.eEe(o,m),d),o.uD(D.aqC,n,new C.eEf(o,m),d),o.uD(D.aqB,n,new C.eEg(o,m),d)],q))
p.push(A.b4)
p.push(o.cwZ(A.eg,n,o.gaTi(),d,!0))
p.push(o.uD(A.hG,"Done",new C.eEh(o),d))
return B.q(n,B.A(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(n,n,s,u,r,new B.a9(A.a6,A.aa,A.x,t,n,n),A.n),n,n,n,A.C9,A.lK,n,n,n)},
bEk(d){switch(d.a){case 2:return D.a2v
case 1:case 5:return D.a2x
default:return D.a2w}},
c81(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dY
default:return A.bn}},
aBO(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.m(12)
u=B.m(12)
t=h?K.I3:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e1,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qu,B.aJ(!1,A.a3,!0,n,B.aP(!1,v,!1,B.eJ(new B.D(new B.R(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.p(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uD(d,e,f,g){return this.aBO(d,e,f,g,!1,!1)},
b79(d,e,f,g,h){return this.aBO(d,e,f,g,h,!1)},
cwZ(d,e,f,g,h){return this.aBO(d,e,f,g,!1,h)},
bRf(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bp,A.S],m):B.a([A.c,A.nn],m)
w=B.L(e?A.aM:A.nk,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3z(A.eM,"Back",p.gbKz(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.S,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dd,B.E(B.A(B.a([new B.dn(1,A.cp,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bW:A.am,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uh,o,A.e,A.i,0,A.d1,o),1)],q)
if(!p.ky()){u=p.a3z(A.ps,"Undo",p.ax.length===0?o:p.gcGR(),e)
A.d.v(r,B.a([u,p.a3z(D.bR3,"Redo",p.ay.length===0?o:p.gcs8(),e)],q))}r.push(p.a3z(A.z4,"PDF",new C.eDj(p),e))
r.push(p.a3z(A.hW,"Download as video",new C.eDk(p),e))
if(!p.ky())r.push(B.Cz(o,o,B.X(A.ov,e?A.ab:A.bv,o,o,o,o),new C.eDl(p),A.I,new C.eDm(p),A.ag,"More",x.N))
r.push(A.dd)
r.push(B.aJ(!1,A.a3,!0,o,B.aP(!1,B.m(14),!0,B.eJ(D.er4,o,new B.p(o,o,o,B.m(14),o,K.I3,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCD(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.p(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bBb,D.bGA,o,o,o)},
cGg(d){var w=this,v=null,u=B.m(18),t=d?A.as.j(0.92):A.c.j(0.96),s=B.L(d?A.cu:A.aO,A.r,1)
return B.q(v,B.cg(B.A(B.a([w.j5(A.uP,"Print",new C.eHB(w),d),w.j5(A.z4,"Download PDF",new C.eHC(w),d),w.j5(A.qJ,"Present",w.gaCD(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.p(t,v,s,u,v,v,A.n),v,v,v,A.yz,G.amR,v,v,v)},
a3z(d,e,f,g){var w,v=null
if(f==null)w=g?A.aV:A.dq
else w=g?A.ab:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c7b(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.as.j(0.92):A.c.j(0.96)
u=B.L(d?A.cu:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eEB(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.amw,new B.ff(new C.eEC(r),q),q))
A.d.v(t,w?B.a([new B.D(T.wm,r.aio(A.kt,"Ending celebration",r.gcih(),d),q),new B.D(T.wm,r.aio(A.HL,"Logo ring & frame",r.gciZ(),d),q)],x.p):A.f5)
A.d.v(t,w?B.a([new B.D(T.wm,r.aio(A.mh,"Look and feel",r.gcj_(),d),q),new B.D(T.wm,r.aio(A.pv,"Edit this slide's text",r.gcjw(),d),q)],x.p):A.f5)
t.push(new B.D(T.wm,B.hb(B.aA(q,B.q(q,D.f7z,A.f,q,q,new B.p(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.I,10)],x.V),D.asF,A.n),q,34,q,q,A.f2,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eED(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cg(B.A(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bH4,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.cg(r.cuA(d),A.t,q,A.y,q,new B.R(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(v,q,u,o,q,q,A.n),q,q,q,A.yz,q,q,q,q)},
cuA(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dlG[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwm(s),t.a,new C.eG_(u,e),a3,D.aSp.q(0,s)))}w.push(e.j5(A.lj,"Notes Slide",new C.eG0(e),a3))
w.push(e.lY(A.HK,"Quiz",new C.eG1(e),a3,!0))
w.push(e.lY(P.Hl,"Worksheet",new C.eGc(e),a3,!0))
w.push(e.lY(X.HN,"Flashcard",new C.eGn(e),a3,!0))
w.push(e.lY(A.PA,"Lab Report",new C.eGy(e),a3,!0))
w.push(e.lY(A.qG,"Rubric",new C.eGF(e),a3,!0))
w.push(e.lY(A.po,"Minutes",new C.eGG(e),a3,!0))
w.push(e.lY(A.ou,"Syllabus",new C.eGH(e),a3,!0))
w.push(e.lY(A.a35,"Timeline",new C.eGI(e),a3,!0))
return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dn3[v]
w.push(e.lY(r.b,r.c,new C.eGJ(e,r),a3,!D.aSv.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wK,a0,e.gaOQ(),a3),e.j5(A.uL,"Picture",new C.eG2(e),a3),e.j5(A.ze,"Bio link",new C.eG3(e),a3),e.j5(A.a34,"Table",new C.eG4(e),a3),e.j5(A.PE,"Sticky",new C.eG5(e),a3),e.j5(A.rX,"Divider",new C.eG6(e),a3),e.j5(A.zn,"Header",new C.eG7(e),a3),e.lY(A6.rV,"Rectangle",new C.eG8(e),a3,!0),e.lY(A.pl,"Circle",new C.eG9(e),a3,!0),e.lY(A.a2l,"Triangle",new C.eGa(e),a3,!0),e.lY(A.jE,"Arrow",new C.eGb(e),a3,!0),e.lY(D.bPv,"Parallelogram",new C.eGd(e),a3,!0),e.lY(D.bS_,"Hexagon",new C.eGe(e),a3,!0),e.lY(A.rX,"Line",new C.eGf(e),a3,!0),e.lY(A.z4,"PDF",new C.eGg(e),a3,!0),e.lY(N.a3e,"Signature",new C.eGh(e),a3,!0),e.j5(A5.CM,"Quote",new C.eGi(e),a3),e.j5(D.a1U,a1,new C.eGj(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.c1,x.w).w
u=x.p
t=B.A(B.a([e.aPI("Wide 16:9",D.DT,a3),e.aPI("Short 9:16",D.oM,a3),new B.D(A.fy,B.n1(D.bU8,d,D.fLW,d,new C.eGk(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bKO("This slide",!e.Q,a3,new C.eGl(e)),A.bm,e.aRY("All slides",e.Q,a3,new C.eGm(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bKP()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bW:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a5b,new C.eGo(e),n),n.k("ak.E"))
n=B.cg(B.A(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.do3[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.aV,1.5,A.r,-1)
l.push(new B.D(A.fy,B.aA(d,B.q(d,d,A.f,d,d,new B.p(j,d,new B.bH(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eGp(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cg(B.A(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGz()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eGq(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.U,q,A.an,p,A.U,o,A.ax,n,A.U,m,A.ax,l,A.U,j,A.ax,B.cg(B.A(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.an,e.c3S(a3)],u),A.E,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aH(w,A.c1,x.w).w
u=new C.eFZ(e)
t=new C.eGK(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Sk,f.dy,new C.eGr(e,u,f),A.b1)
A.d.v(p,B.a([o,A.ax,n,A.U,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Sk,q,new C.eGs(e,u),A.bl))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.lj,w,new C.eGt(e),a3),e.j5(A.uP,"Print deck",new C.eGu(e),a3),e.lY(D.aoD,"Export JSON",new C.eGv(e),a3,!0),e.j5(A.fU,"Duplicate Slide",e.gaUd(),a3),e.j5(A.eg,a2,e.gaTj(),a3),e.cAt(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a1U,a1,new C.eGw(e),a3),e.j5(A.fU,"Duplicate",e.gaUd(),a3),e.j5(A.eg,a2,e.gaTj(),a3),e.j5(A.qJ,"Present",e.gaCD(),a3),e.j5(A.CZ,a0,e.gaOQ(),a3),e.j5(A.CR,"Fit Text",new C.eGx(e),a3),e.j5(A.z4,"Download PDF",new C.eGz(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jI,"Transfer",new C.eGA(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OM,"Bold",new C.eGB(e,f),a3),e.j5(G.a1M,"Italic",new C.eGC(e,f),a3),e.j5(G.aoe,"Underline",new C.eGD(e,f),a3),e.j5(Ag.ON,"Bullets",new C.eGE(e,f),a3),e.bTR(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRk(a3))
w.push(e.j5(D.bOc,"Delete",e.gaTi(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.i,0,d,d)}},
aPI(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oM
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.abh,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dd,D.bTk],v))
return new B.D(A.fy,B.jv(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eCo(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cAt(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aV:A.ct,A.r,1)
u=B.m(8)
t=B.X(A.Hj,d?A.aD:A.am,q,q,q,14)
s=B.aG(q,q,q,q,D.arE,q,q,q,new C.eH6(r,p),q,q,q,q,q,A.ce)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bo,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arv,q,q,q,new C.eH7(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.p(q,q,v,u,q,q,A.n),q,q,q,A.GY,A.mX,q,q,q)},
cwm(d){switch(d.a){case 6:return X.HN
case 7:return A.HK
case 8:return P.Hl
case 4:return A.zn
default:return A.lj}},
bTR(d,e){var w=null,v=B.L(e?A.aV:A.ct,A.r,1),u=B.m(8),t=B.aG(w,w,w,w,D.arE,w,w,w,new C.eDw(this,d),w,w,w,w,w,A.ce),s=A.j.M(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bo,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arv,w,w,w,new C.eDx(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.p(w,w,v,u,w,w,A.n),w,w,w,A.uw,A.mX,w,w,w)},
c3S(d){var w=null
return B.Cz(B.E2(B.X(A8.a1X,d?A.ab:A.bv,w,w,w,16),w,w,D.fRD,w,w,w),w,w,new C.eE3(),A.I,this.gbF1(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dr:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.du:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.q(w,D.PK,A.f,w,w,D.Fh,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fy,B.aJ(!1,A.a3,!0,w,B.aP(!1,v,!0,B.eJ(new B.D(A.hb,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.p(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8y(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hN(t,new C.eHi(u,s,e,d),s.r.length,A.cl,t,w,new C.eHj(e),!1)
s=d?A.as:A.bO
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cl,B.IC(E.arS,new C.eHk(u),B.nZ(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aT8,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bIQ(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oM?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.R(u,u,u,u),new B.bL(A.b7,v,v,new B.fF(w,B.aA(v,B.cs(new C.eCN(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eCO(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bIS(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kL(a9.w))===!0,b1=b0&&C.fQ4(b3),b2=b0&&b3.b===D.lr&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6e(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6d(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ch:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.heZ(b3))o=a8
else if(p&&!a7.ky())o=a7.gceN()
else o=a7.ky()?a8:new C.eCB(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.heZ(b3)&&a7.Ap()?new C.eCC(a7,b3):a8
h=v&&b3.b===D.cW?new C.eCD(a7,b3):a8
g=u?new C.eCE(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.lr?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.c1,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ap()
a3=b3.b===D.cW
a4=a3?a7.Xu(b3):a8
a5=a3?a7.avl(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.c1,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eCF(a7,b3):a8
a3=v&&a3?new C.eCG(a7,b3):a8
a6=C.b3a(q,a4,a1,b3,a5,a2,a3,new C.eCH(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.p(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.aA(a8,B.q(a8,D.bW9,A.f,a8,a8,new B.p(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCI(a7,b3,b4,b5),a8,a8,new C.eCJ(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bWR,A.f,a8,a8,new B.p(A.df,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1m(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.q(a8,D.bYu,A.f,a8,a8,new B.p(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCK(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.c1,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.q(a8,D.h_N,A.f,a8,a8,new B.p(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lg,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCL(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eL(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bO("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aRY(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.L(e?A.bl:A.bA,A.r,1)
if(e)t=A.bl
else t=f?A.aD:A.am
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dd,B.q(r,D.PK,A.f,r,r,D.Fh,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.q(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.p(w,r,u,v,r,r,A.n),r,r,r,r,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bKO(d,e,f,g){return this.aRY(d,e,f,g,!1)},
cex(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aP),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.as:A.aQ
t=f?A.xG:l
if(f)s=new B.bH(new B.ay(e?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tj,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.b3C(e,new C.eEF(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bW:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.an,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(10),A.dn),l,A.bV,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eEG(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.p(u,l,s,t,r,l,A.n),l,96,l,l,new B.R(12,w,12,v),l,l,l)},
aVw(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bM
w=new C.eDK(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.E(1-a2.c,0.06,1)
t=A.j.E(1-a2.d,0.06,1)
s=A.j.E(1-a2.e,0.01,1)
r=A.j.E(1-a2.f,0.01,1)
q=a5?A.dV:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.S,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.b3C(a3,a0.gbPl())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fMs,B.E(B.kV(a1,a1,a1,u,0.05,new C.eDL(w,a2),A.j.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.fZ9,B.E(B.kV(a1,a1,a1,t,0.05,new C.eDM(w,a2),A.j.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fFZ,B.E(B.kV(a1,a1,a1,96,10,new C.eDN(w,a2),A.j.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lR
if(l||n===D.lr||n===D.TG)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fSs,B.E(B.kV(a1,a1,a1,s,0,new C.eDO(w,a2),A.j.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h_u,B.E(B.kV(a1,a1,a1,r,0,new C.eDP(w,a2),A.j.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Dh[j]
i.a=null
g=h.a
i.a=g
k.push(B.jv(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDQ(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Da[j]
f.a=null
g=e.a
f.a=g
h.push(B.jv(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDR(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.U,l,A.an,k,A.U,i,A.an,B.bW(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.U)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eDS(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bW(A.bH,l,A.bt,a1,6,6),A.af,B.hrq(new C.eDT(w,a2),D.cAg,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fh){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eDU(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bYg,D.fUw,new C.eDV(a0,a5),B.bp(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cu:A.c
p=a4?A.xG:a1
if(a4)o=new B.bH(new B.ay(a3?A.bA:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.p(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tj,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GH,a1,a1,a1)},
bU7(d){return this.aVw(d,!1,!1,null)},
cdG(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eDY(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fvp,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bG,A.cU,r.bEm(D.d3D,d,B.S(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aP(!1,q,!0,B.eJ(D.fe2,q,new B.p(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.er,8)],p),D.asK,A.a7),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.S(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.beJ,D.bfb],v):B.a([A.c,A.kO],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.p(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bV,q,q,q)},
aOz(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBx(this,g,d,e,f),null)},
ahH(d,e){return this.cqn(d,e)},
cqn(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b6,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.eFC(d,q),p,null,!0,!0,x.N),$async$ahH)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
QD(d){var w=d.bT()
return""+B.bK(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.agd.prototype={}
C.aAy.prototype={
S(){return new C.beL(null,null)}}
C.beL.prototype={
gcCO(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bK(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a2()
w=B.bm(u,A.qr,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bm(u,D.bzF,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxE()},
Jw(d){var w=0.12+d*0.09,v=A.j.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cw.aA(0,new B.hV(w,v,A.cw).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bFn,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d9V(this),v),v),v,v,v)}}
C.bf_.prototype={
B(d){var w=null,v=B.m(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFE,B.aJ(!1,A.a3,!0,w,B.q(w,B.by(B.m(22),B.x(B.a([new B.D(D.bEP,B.x(B.a([B.q(w,D.bWX,A.f,w,w,new B.p(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fWI,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fwF,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dX,D.byI,B.A(B.a([B.E(B.bM(!1,D.fKC,w,w,!0,w,w,w,new C.dai(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.nC,w,A.oR,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fQ3,w,w,!0,w,w,w,new C.daj(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nC,w,A.oR,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,Aa.Xs,new B.p(A.as,w,u,v,D.d41,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.KE.prototype={
S(){return new C.beK()}}
C.beK.prototype={
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
return B.dP(B.da(B.aA(o,B.vW(B.cT(o,B.A(B.a([r,A.au,new B.dn(1,A.cp,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eS:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.ba,A.Q,0,o,o),o,o,A.b3,new B.p(n,o,u,v,t,o,A.n),A.eG,o,o,o,o,A.nD,o,o,1/0),A.cw,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d9Q(p,d),new C.d9R(p),new C.d9S(p),new C.d9T(p),o,o,o,!1,A.a4),k),new B.o(0,(1-k)*16))}}
C.Qw.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aP(!1,s,!0,new B.D(A.eW,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.p(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ew,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ne,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0G.prototype={
S(){return new C.aG6(D.dk,null,null)}}
C.aG6.prototype={
gZM(){var w,v=this,u=v.w
if(u===$){w=B.bm(null,D.bze,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b91(d){if(!this.a.c.ay)return
this.x=d
this.gZM().iy(0,0)},
Y(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.axp(D.fkw)
C.ik2()
v.S6()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZM().t()
v=w.z
if(v!=null)v.a1(0)
C.axp(D.fkx)
C.ik5()
w.bzK()},
cFE(){B.jV()
this.m(new C.eIh())
var w=this.c.L(x.q).f
w.a5N()
if($.bmG)w.U(D.fhn)},
S6(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dv(0,0,0,0,0,A.o.E(C.hpC(u,w),1,120)),new C.eI7(v))},
cFh(){var w,v=this
v.m(new C.eIg(v))
if(v.r)v.S6()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXs(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czd(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eI8(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lI,new C.eI9(w))},
azq(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eI3(u))
u.S6()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXs()){u.czd()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eI4(u,A.o.F(w+1,s)))
u.b91(w)
u.S6()}},
cp1(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eI5(v))
v.S6()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eI6(v,w,t))
v.b91(w)
v.S6()}},
cAJ(d){var w,v=this,u=v.e
if(u===D.cs){u=v.d
u===$&&B.c()
return new B.mK(d,new B.bO(u,x.ac))}w=v.cAK(u)
u=v.d
u===$&&B.c()
return B.p7(new B.mK(d,new B.bO(u,x.ac)),w,new C.eIe(),A.b3,A.b3,new C.eIf(v))},
cAK(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzB
case 16:return A.iJ
case 18:return A.mS
default:return A.m9}},
cAI(d,e,f){var w,v,u,t=null,s=B.cJ(A.cw,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.vm,A.I,w),w.k("bg<bN.T>")),t,!0)
case 3:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.TU,A.I,w),w.k("bg<bN.T>")),t,!0)
case 4:case 21:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.ij,A.I,w),w.k("bg<bN.T>")),t,!0)
case 5:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.ti,A.I,w),w.k("bg<bN.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(0.82,1,w),w.k("bg<bN.T>")))
case 7:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bg(s,new B.br(1.18,1,w),w.k("bg<bN.T>")))
case 8:return B.c9(s,new C.eIa(s),e)
case 9:return B.c9(s,new C.eIb(s),e)
case 10:return B.c9(s,new C.eIc(s),e)
case 11:return B.c9(s,new C.eId(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.it(A.A,e,t,new B.bg(s,new B.br(1.03,1,w),w.k("bg<bN.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jl(B.jH(e,new B.bg(s,new B.br(A.vm,A.I,v),v.k("bg<bN.T>")),t,!0),A.t,new C.btW(w,t))
case 15:w=x.K
return B.jH(e,new B.bg(s,new B.br(A.TU,A.I,w),w.k("bg<bN.T>")),t,!0)
case 19:w=B.dr()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fw(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eL(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jl(new C.apI(B.c9(n.gZM(),new C.eIi(n,v,w),m),m),A.t,m)}else{t=B.t0(new C.JC(w,!0,!1,m))
l=B.b0(w.e)
u=n.cAJ(B.e8(B.jl(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hpC(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oY,m,m,m),A.bm,D.bZl],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.p(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.ha,m,m,m)
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
l.push(B.bR(0,new C.Oj(new C.Fi(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oM?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jl(B.uW(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmG){r=B.IC(A.ln,new C.eIj(d),B.nZ(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bn(!0,B.A(B.a([r,A.ae,B.IC(B.X(n.r?Am.uO:A.hu,m,m,m,m,m),n.gcFg(),B.nZ(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bn(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fW,m,m,m),A.f,m,m,new B.p(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.ha,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bn(!0,B.aA(A.c5,B.q(A.ly,$.bmG?A.bM:s,A.f,m,m,m,m,64,m,m,D.bAl,m,m,150),A.y,!1,m,n.gcFD(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aA(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eIk(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KK.prototype={
B(d){var w=null
return B.q(w,B.bn(!0,new B.D(E.ami,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7i,w,w,w,w,w,w,w,w)}}
C.btW.prototype={
jt(d){return new B.a1(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjL.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.m(999)
break
case"rounded":w=B.m(18)
break
case"arch":w=D.b43
break
default:w=B.m(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.m(999)
else{t=B.m(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.q(r,r,A.f,r,r,new B.p(r,r,r,q,r,E.wQ,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b3,new B.p(s.f,r,u,w,r,r,A.n),A.h_,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjK.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dBy.h(0,p)
if(o==null)o=D.dnd
p=p==="none"
w=p?q:new B.a9(A.a6,A.aa,A.x,o,q,q)
p=p?A.d0.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqQ:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.p(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.p(p,q,u,q,q,w,A.a7),q,52,q,q,A.ey,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLU.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aNU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzK.prototype={}
C.aNV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.b3d.prototype={}
C.X5.prototype={
S(){return new C.aG4()},
bjO(d){return this.e.$1(d)}}
C.aG4.prototype={
gb7f(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabz(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb7f()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQz(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7f()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8x(){return A.d.cJ(this.gabz(),0,new C.eHO())},
Y(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RH()},
RH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3P(s.c,s.f),$async$RH)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eHK(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RH,v)},
Jy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabz()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fTj(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pu(o,q.c,q.f),$async$Jy)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eb(new C.eHN(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cd(q),$async$Jy)
case 4:q=t.a
w=5
return B.b(B.pt(q.c,q.f),$async$Jy)
case 5:w=6
return B.b(t.RH(),$async$Jy)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jy,v)},
S4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.ee9,!0,"NgmySlidesTransferScan",x.N),$async$S4)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eHL(t))
w=4
return B.b(C.aiq(s),$async$S4)
case 4:r=e
t.m(new C.eHM(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.fgc)
w=1
break}w=5
return B.b(t.a.bjO(r),$async$S4)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S4,v)},
Jx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabz()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pu(s,r.c,r.f),$async$Jx)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fTy(null,A.d.gH(n),s,t.a.f)}else q=C.fTy(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.He(q,"ngmy_slides_"+p,!1),$async$Jx)
case 4:o=e
s=t.a
w=5
return B.b(B.pt(s.c,s.f),$async$Jx)
case 5:w=6
return B.b(t.RH(),$async$Jx)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jx,v)},
a3K(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3K=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eHP(t))
w=3
return B.b(C.bF2(),$async$a3K)
case 3:s=e
t.m(new C.eHQ(t))
if(s==null||J.cr(s)){w=1
break}w=4
return B.b(t.a.bjO(s),$async$a3K)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3K,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.S(d).ax.a===A.J,l=m?A.dg:A.bO,k=o.gabz().length!==0,j=B.ap(n,B.q(n,n,A.f,n,n,new B.p(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ab:A.am,n,n,n,n),n,n,n,new C.eHT(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.S,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.x8],h),A.m,n,A.e,A.i,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eZ,24)],x.V)
u=B.ap(n,B.X(A.qD,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.q(n,D.bZU,A.f,n,n,new B.p(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ew,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bKv],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.fe5,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcjI(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.p(n,n,n,w,v,D.a3K,A.n),n,n,n,n,E.a0s,n,n,1/0),A.dX,o.azr(m,"What to transfer"),A.af,B.A(B.a([B.E(o.aZU(A.qJ,m,new C.eHU(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.aZU(D.bPo,m,new C.eHV(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d8,o.azr(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.as:A.c
t=B.m(16)
s=B.L(m?A.bA:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.am,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.p(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.eHW(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.na)
w.push(o.azr(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.as0(A.aI,k,!0,A.jH,m,o.r,o.gcdK(),"Scan on another device","Show QR"),1),A.au,B.E(o.aOA(A.jT,!0,A.jo,m,o.gcvW(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bCQ(A.aY,k,A.hW,m,o.r,o.gcdH(),"Download .json","Backup file"),1),A.au,B.E(o.aOA(A.aw,!0,AC.zm,m,o.gcIa(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lN,A.bl.j(0.9),n,n,n,18)
r=o.gaQz()
q=o.gb8x()
p=o.gb8x()===1?"":"s"
A.d.v(w,B.a([A.bz,B.q(n,B.A(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.p(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bn(!0,B.x(B.a([new B.D(Ai.Oi,i,n),B.E(B.cl(w,n,n,D.bDX,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,V.XK,A.f,A.dO,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
agS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ir3(s,t.d,t.e),$async$agS)
case 2:return B.h(null,v)}})
return B.i($async$agS,v)},
azr(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.p(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.am,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZU(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.as:A.c
if(g)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cA,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.q(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.p(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.S,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aP(!1,r,!0,B.eJ(new B.D(A.bE,B.x(B.a([t,A.X,u,A.bG,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.p(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNt(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.as:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.bA:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c_5,A.f,q,q,new B.p(q,q,q,B.m(12),q,new B.a9(A.a6,A.aa,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.S,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.eb:A.pl
if(p)r=A.bl
else r=e?A.aV:A.dq
return new B.D(A.cx,B.aJ(!1,A.a3,!0,q,B.aP(!1,o,!0,B.q(q,B.A(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.p(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eHJ(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
as0(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.as:A.c
if(f)w=d.j(0.45)
else w=h?A.bA:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.p(v,s,s,u,s,s,A.n),s,s,s,s,A.rS,s,s,s)],t)
if(i)u.push(B.ap(s,B.q(s,D.arp,A.f,s,s,D.b74,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.S,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aP(!1,p,!0,B.eJ(new B.D(E.a05,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bG,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.p(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOA(d,e,f,g,h,i,j){return this.as0(d,e,!1,f,g,!1,h,i,j)},
bCQ(d,e,f,g,h,i,j,k){return this.as0(d,e,!1,f,g,h,i,j,k)}}
C.X6.prototype={
S(){return new C.bmF()}}
C.bmF.prototype={
Y(){this.a2()
this.afE()},
afE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fTy(null,A.d.gH(m),k,r.a.f):C.fTy(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kL(A.d.gH(n).w))C.fTj(A.d.gH(r.a.d),D.dkX)
n=r.a
m=n.c
n=C.inq(n.d)
w=7
return B.b(C.fTx(p,C.inv(r.a.d),n,m,q),$async$afE)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eHX(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.S(d).ax.a===A.J,h=i?A.dg:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.eHZ())
v=B.aG(j,j,j,j,B.X(A.eM,i?A.ab:A.am,j,j,j,18),j,j,j,new C.eI_(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.S,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.x8],u),A.m,j,A.e,A.i,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dh,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.U,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(j,j,j,t,j,D.a3K,A.n),j,j,j,j,E.a0s,j,j,1/0)
q=B.m(24)
s=B.L(A.aI.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vi,A.K,j,j))
else if(k.d==null)r.push(D.eqE)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fL5,A.an,B.aA(j,B.q(j,B.A(B.a([D.c0C,A.au,B.d(m,j,j,j,j,j,j,D.fx4,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.p(j,j,j,o,n,D.c5w,A.n),j,j,j,j,A4.am4,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eI0(k,d),j,j,j,j,j,j,!1,A.a4),A.U,D.fPA,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.L(A.bA,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.qa(j,j,!1,l,j,!0,!0,j,!1,D.buM),A.f,j,j,new B.p(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hh,A.K,j,j))
return B.c4(j,h,B.bn(!0,B.x(B.a([new B.D(Ai.Oi,v,j),B.E(B.cg(B.x(B.a([t,A.aR,B.q(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.p(j,j,s,q,j,D.c7r,A.n),j,j,j,j,A.uv,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.amn,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aG1.prototype={
S(){return new C.aG2(new B.au(A.av,$.aw()),B.k8(!0,null,!0,!0,null,null,!1))}}
C.aG2.prototype={
Y(){var w=this
w.a2()
w.e.aW(0,new C.eBr(w))
$.aW.x1$.push(new C.eBs(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a3()},
b1J(){var w,v=this.c
v.toString
w=C.zc(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eP,x.w).w,i=B.m(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vj,36),D.aes],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bX0,A.f,k,k,new B.p(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fI7,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b7v,k,k,k,k,A.yL,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.as:A.S
o=new B.aO(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.bz(1,A.bc,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fqn,k,k,k),k,k,A.b3,new B.p(s,k,new B.bH(m,m,m,m),new B.bf(o,o,o,o),n,k,A.n),A.h_,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.AB)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.i,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c3q,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uQ(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C4(5,k),new C.bxd()],x.aS),k,k,A.aUl,k,5,k,1,k,k,!1,"\u2022",k,new C.eBn(l),k,new C.eBo(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mx,k,k,k,k),0),0,0,0)],a1)
d=C.zc(w.a.a.toUpperCase())==null?k:l.gcdL()
return B.at(new B.D(new B.R(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cR(Af.LM,B.q(k,B.by(e,B.x(B.a([a0,new B.D(D.bEs,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.X,D.fGq,A.bz,new B.a5(1/0,50,B.bI(D.fXC,k,d,B.bp(A.bl,A.bp,A.am,k,A.c,k,k,k,new B.b9(B.m(16),A.a1),k,k,k)),k),A.an,B.bM(!1,A.nX,k,k,!0,k,k,k,new C.eBp(a2),k,B.ft(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.p(A.dg,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bxd.prototype={
oX(d,e){var w=e.a.toUpperCase()
return e.cOJ(B.hg(A.bB,w.length),w)}}
C.asL.prototype={
S(){return new C.aG5(B.zT(A.Nz,A.o2,A.v0))}}
C.aG5.prototype={
t(){this.d.t()
this.a3()},
b1I(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j_(w,d)},
abu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h1t(s),$async$abu)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1I("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abu,v)},
cdJ(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.int(w[u])
if(t!=null){this.b1I(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wM,s,s,s,t.gbRT(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eH(B.a([r,B.aG(s,s,s,s,B.X(q?A.uI:An.Ph,s,s,s,s,s),s,s,s,new C.eI2(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dg,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fYQ,s,s,s,1,s,!0)
r=B.zS(t.d,A.c_,t.gcdI())
w=B.m(28)
w=B.at(B.q(s,s,A.f,s,s,new B.p(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ap(32,B.q(s,D.fMd,A.f,s,s,new B.p(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxr.prototype={
B(d){var w=null,v=B.m(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.ar4,A.f,w,w,D.b7e,w,56,w,w,w,w,w,56),A.aR,D.fYw,A.an,new B.k1(this.c,new C.fiI(),w,w,x.cI),A.aR,new B.k1(this.d,new C.fiJ(),w,w,x.cl),A.af,D.fYu],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Af.LM,new B.p(A.as,w,u,v,w,w,A.n),w,w,w,K.a0y,D.bF5,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8L.prototype={
S(){return new C.bmo(A.bD)},
gd1(){return this.c}}
C.bmo.prototype={
Y(){var w=this
w.a2()
if(w.a.d)return
w.a00()
w.d=B.de(A.fF,new C.epH(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a3()},
a00(){return this.csf()},
csf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a00=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.epF(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bE(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ckZ(p.c),$async$a00)
case 6:r=e
q.a=r==null?A.bD:r
case 4:if(t.c==null){w=1
break}t.m(new C.epG(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a00,v)},
bTZ(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ay:A.c4
w=v.j(0.14)
u=B.m(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hj,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bTZ(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.p(w,r,t,u,r,r,A.n),r,r,r,A0.alb,A.it,r,r,1/0)}}
C.a9E.prototype={
nv(){var w,v,u,t=this
t.xU()
w=t.cx
v=t.c
w.bu8(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qg(B.H(["/S",D.eun,"/URI",new B.rW(B.XH(w.as),A.vn,!0)],x.N,u),u))}}
C.a9F.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b4T.prototype={
bBP(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.esG],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSc(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k7(w,new C.coT(),B.a4(w).k("k7<ch.E,F>")).f1(0,new C.coU())},
aEX(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tY(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jq(d.a,d.b))
s.n(0,"/Border",B.tY(H.at7))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcSc()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qg(w,x.Y))}}
C.coV.prototype={}
C.a44.prototype={}
C.ajl.prototype={}
C.aT5.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.Mz(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bj8(w)
u=x.N
t=x.Y
s=new C.coV(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bBP(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qg(B.H(["/Type",D.eul],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9E(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayo.prototype={}
C.aUz.prototype={
fV(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eg(u.a,u.b,0,1)
u=d.b
u.is()
t=s.a
t.toString
u.LH(t)
u.Tm(0)
u.pl(0,v)
w.fV(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(m0)","P(i3)","~()","P(eP)","P(oJ)","P(m0)","~(i3)","P(eP,eP)","KK(Z)","P(o8)","P(lu)","aB<P>()","F(F,i3)","a8<n,@>(i3)","ai<Ab>()","n(o8)","P(a91)","n(m0)","n(wu)","P(Fr)","F(i3,i3)","n(eP)","v(eP)","cL(eP)","v(hF)","~(hF)","eP(vb,I,I,I,I,F{fx:n,key:n,rotation:I})","eP(n,I,F)","F(oJ,oJ)","P(Ab)","P(n,ai<Ab>)","a8<n,@>(oJ)","o8()","ZM(Z)","eP(n,I,I,I,I,I{align:ql,anim:hF,bullets:P,color:F?,delay:F,fx:n,key:n,style:Iv,weight:nW})","a24(Z)","eP(n,I,I,I,I{anim:hF,delay:F,fx:n,key:n})","aB<~>(oJ)","P(mO)","ZK(Z)","a1A(Z)","a1z(Z)","Ql(Z)","a_X(Z)","eP(vb,I,I,I,I,F,n,n{anim:hF,delay:F,rotation:I,stroke:F,strokeWidth:I})","eP(n,I,I,I,I,I,n,n,F)","eP(I,I,n,F{size:I})","v(rK,I,I)","lu()","oJ(a8<@,@>)","~(v1)","Fr()","fi(eP)","v(jb)","a_u(Z)","~(Fi)","a_P(Z)","F(eP,eP)","eP(eP)","a8<n,@>(eP)","eP(a8<@,@>)","m0(m0)","a8<n,@>(m0)","m0(a8<@,@>)","P(jY)","jY()","n(i3)","~(ai<oJ>)","V(ai<i3>)","V(i3)","ai<i3>(n?)","adK(Z,F)","~(P(eP,eP))","aeo(Z)","ag3(Z,F)","u(m0,P)","WU(Z)","aer(Z)","WV(Z)","~(mS)","i3(i3)","I(eP)","a13(Z)","a0G(Z)","i3()","ai<FO>()","aB<~>(ai<i3>)","v(bB<F,i3>)","D(jY)","D(Fr)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(mp)","ai<jE<mS>>(Z)","jE<mS>(mS)","i3(a8<@,@>)","X5(Z)","eP(n,I,I,I,I,I,F{align:ql,style:Iv,weight:nW})","X6(Z)","v(i3)","~(mi)","JC(Z,m0,v?)","F(a9F)","aB<ai<a8<n,@>>?>()","n(n)","aB<Aa>({paper:n?,photo:dK?,request:n,template!lx})","aB<a8U>({doc!Aa,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lx})","ael(Z)"])
C.cO9.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:64}
C.cOa.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:73}
C.cOb.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galu(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mD(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:73}
C.cOc.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTt.prototype={
$1(d){return J.eE(A.dN.gaU(d),d.byteOffset,d.byteLength)},
$S:1689}
C.fFE.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iV(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iV(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iV(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iV(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1690}
C.c3p.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:30}
C.c3q.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:42}
C.c3s.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fWw.prototype={
$1(d){return new C.a24(this.a,this.b,C.iol(),null)},
$S:z+36}
C.fha.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fhe.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fhf.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhg.prototype={
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
C.fhb.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fhc.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fhd.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fh5.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hg,w,w,w)
return B.eg(B.a([B.bM(!1,E.aWt,w,w,!0,w,w,w,new C.fh3(d),w,w),B.bM(!1,D.fJD,w,w,!0,w,w,w,new C.fh4(d),w,w)],x.p),w,w,D.ZR,v,w,w,w,w,D.fZ8,w)},
$S:18}
C.fh3.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fh4.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fh6.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fh7.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fhk.prototype={
$0(){var w=this.a
return w.m(new C.fhj(w,this.b))},
$S:0}
C.fhj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fh9.prototype={
$0(){var w=this.a
return w.m(new C.fh8(w,this.b,this.c))},
$S:0}
C.fh8.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fhh.prototype={
$0(){return this.a.a28(this.b)},
$S:0}
C.fhi.prototype={
$0(){return this.a.PI(0,this.b)},
$S:0}
C.fhn.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fho.prototype={
$0(){var w=this.a
return w.m(new C.fhm(w,this.b))},
$S:0}
C.fhm.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fhl(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fhl.prototype={
$1(d){return d.a},
$S:z+67}
C.foO.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hmO(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oJ(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.foP.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fIP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcF()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fIN.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fIO.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fVZ.prototype={
$1(d){return d.aj()},
$S:z+32}
C.fFi.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fWS.prototype={
$1(d){return new C.ZM(this.a,null)},
$S:z+34}
C.cPw.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPy.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPA())},
$S:12}
C.cPA.prototype={
$0(){},
$S:0}
C.cPD.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a33(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPz(r))
if(p<0)q.c4(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiz(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:288}
C.cPz.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPE.prototype={
$1(d){},
$S:29}
C.cPx.prototype={
$1(d){return new C.ZK(this.b,this.a.gcC9(),null)},
$S:z+40}
C.cPF.prototype={
$1(d){return D.hqK},
$S:z+43}
C.cPs.prototype={
$1(d){var w=null,v=B.m(24),u=B.L(D.Zq,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bES,B.x(B.a([B.q(w,D.bU9,A.f,w,w,new B.p(A.ay.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fIy,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fvZ,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dX,new B.D(A.qw,B.A(B.a([B.E(B.dU(D.fPC,new C.cPq(d),B.di(w,w,w,w,w,w,w,w,w,E.nx,w,w,A.co,w,new B.b9(B.m(14),A.a1),D.b4v,w,w,w,w)),1),A.au,B.E(B.bI(D.fVR,w,new C.cPr(d),B.bp(A.bC,w,w,w,w,w,A.co,w,new B.b9(B.m(14),A.a1),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.xJ,new B.p(D.agf,w,u,v,D.d8Q,w,A.n),w,w,w,K.a0y,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1691}
C.cPq.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPr.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPt.prototype={
$0(){return J.nQ(this.a.d,new C.cPp(this.b))},
$S:0}
C.cPp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPo.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.L(D.Zq,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZd,A.f,t,t,new B.p(t,t,t,B.m(14),t,D.asF,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aW7,t,t,t),A.bG,D.fVM],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dwC[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azk(u[1],u[2],u[3],new C.cPm(v,d),!1,t))}q.push(A.an)
q.push(D.byL)
q.push(A.an)
q.push(new C.azk(A.eg,"Delete book","Remove it from this device",new C.cPn(d),!0,t))
return B.bn(!0,B.q(t,B.x(q,A.E,t,A.e,A.Q,0,A.p),A.f,t,t,new B.p(D.agf,t,r,s,t,t,A.n),t,t,t,A.ur,R.O4,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cPm.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPn.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPv.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLr,12)],x.V)
return B.dP(B.eL(A.A,e,B.q(w,B.by(B.m(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apu(d),A.f,A.dB),w),A.aq),A.f,w,w,new B.p(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.o(f,0))},
$S:z+48}
C.cPu.prototype={
$0(){return this.a.c7R()},
$S:0}
C.cPl.prototype={
$0(){return this.a.b06(0,this.b)},
$S:0}
C.cPk.prototype={
$0(){return this.a.DM(this.b)},
$S:0}
C.cPj.prototype={
$0(){return this.a.DM(this.b)},
$S:0}
C.cPG.prototype={
$2(d,e){var w=this.a
return w.bGq(J.t(w.d,e))},
$S:43}
C.cON.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bl()},
$S:0}
C.cOM.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3g("Page "+(v.length+1),"",""))},
$S:0}
C.cOP.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cOX.prototype={
$0(){},
$S:0}
C.cOY.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cOQ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aM(this.c)},
$S:0}
C.cOO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOS.prototype={
$0(){return this.a.Rd(this.b)},
$S:0}
C.cOT.prototype={
$0(){return this.a.Rd(this.b)},
$S:0}
C.cOU.prototype={
$0(){var w=this.a
w.m(new C.cOR(this.b))
w.EA()},
$S:0}
C.cOR.prototype={
$0(){return this.a.c=""},
$S:0}
C.cOW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cOV(w,d))
w.EA()},
$S:z+51}
C.cOV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cP2.prototype={
$2(d,e){if(d)this.a.Bl()},
$S:124}
C.cOZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bl(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fiM)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cP_.prototype={
$0(){return this.a.b_0(this.b,-1)},
$S:0}
C.cP0.prototype={
$0(){return this.a.b_0(this.b,1)},
$S:0}
C.cP1.prototype={
$0(){return this.a.c9e(0,this.b)},
$S:0}
C.fNm.prototype={
$1(d){return C.hwX()},
$S:44}
C.fNn.prototype={
$1(d){return null},
$S:29}
C.ft9.prototype={
$1(d){return null},
$S:29}
C.fOl.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:334}
C.fOk.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:215}
C.fOr.prototype={
$1(d){var w=this.a
return C.heQ(d)===w||C.hBL(d)===w},
$S:z+4}
C.fsa.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.cfb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNk.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fNl.prototype={
$1(d){return C.fQ4(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fIb.prototype={
$1(d){var w=null
return B.bn(!0,new B.D(E.yK,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fQe,A.U,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HW,D.fKf,new C.fI9(d),B.bp(A.c4,w,w,w,A.w,w,A.co,w,w,w,w,w)),A.X,B.es(A.uV,D.fRx,new C.fIa(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xH,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fI9.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIa.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIc.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,D.fGg,w,w,!0,w,w,w,new C.fI7(d),w,w),B.bI(D.fY9,w,new C.fI8(d),w)],x.p),w,w,w,D.h_6,w,w,w,w,D.fG9,w)},
$S:18}
C.fI7.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fI8.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ekY.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ekW.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ekX.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ekZ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.el_.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fOq.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.fOm.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a6,w,w,B.BU(A.A,B.q(w,w,A.f,w,w,new B.p(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1692}
C.fOo.prototype={
$1(d){var w=null,v=B.m(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fxj,w,w,w),A.f,w,w,new B.p(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:132}
C.fOp.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.ir,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.q(w,w,A.f,w,w,new B.p(w,w,B.L(A.ir,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.o(-d*0.38,0))],x.p),A.m,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1693}
C.fOn.prototype={
$2$female$size(d,e){var w=null,v=d?D.air:this.a,u=B.L(A.ir,A.r,1),t=e*0.32,s=B.ap(w,B.q(w,w,A.f,w,w,new B.p(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ap(e*0.06,B.q(w,w,A.f,w,w,new B.p(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.p(D.agv,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1694}
C.h_k.prototype={
$1(d){return new C.ael(this.a,this.b,null)},
$S:z+108}
C.e7t.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvn:A.MZ,q=B.L(D.jy.j(0.25),A.r,1),p=B.at(B.q(t,t,A.f,t,t,new B.p(A.c4.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.q(t,D.aro,A.f,t,t,new B.p(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jy.j(0.35),A.er,10)],x.V),D.c82,A.n),t,t,t,t,A.yA,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0o,B.x(B.a([p,A.aB,B.A(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jy,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fwv,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTp,new C.e7s(w,this.c),v,D.alZ,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.p(r,t,q,A.mE,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.e7s.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adK(w,new C.e7r(this.b,w),null)},
$S:z+72}
C.e7r.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fIf.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fIg.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yK,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fTQ,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HW,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fId(d),B.bp(D.jy,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fIe(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xH,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fId.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIe.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIj.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fIk.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yK,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fHk,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HW,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIh(d),B.bp(D.jy,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fIi(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xH,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIh.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIi.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fIn.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fIo.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yK,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fO_,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HW,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIl(d),B.bp(D.jy,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fIm(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xH,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIl.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIm.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h0N.prototype={
$1(d){return D.hvX},
$S:z+74}
C.epK.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.blV:A.MZ,s=B.L(A.aC.j(0.25),A.r,1),r=B.at(B.q(v,v,A.f,v,v,new B.p(A.aC.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.q(v,D.c0z,A.f,v,v,new B.p(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.er,10)],x.V),D.asK,A.n),v,v,v,v,A.yA,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0o,B.x(B.a([r,A.aB,B.A(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A2.MV,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.ftV,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTp,new C.epJ(this.b),19,D.alZ,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(t,v,s,A.mE,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.epJ.prototype={
$2(d,e){var w=D.SB[e]
return new C.ag3(w,new C.epI(this.a,w),null)},
$S:z+75}
C.epI.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fQ8.prototype={
$0(){return B.hdM(C.ibB(this.a))},
$S:335}
C.fQ7.prototype={
$0(){var w=C.hf8(this.a)
return"data:image/png;base64,"+A.cP.gcu().aM(w)},
$S:22}
C.fqr.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jr(d,e),new B.jr(w,e+v),new B.jr(d+f*14,e),new B.jr(w,e-v)],x.J)
B.a3_(this.a,C.fE(4291404327),v)},
$S:677}
C.h0Y.prototype={
$1(d){return new C.WU(this.a,null)},
$S:z+77}
C.esH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esG())},
$S:31}
C.esG.prototype={
$0(){},
$S:0}
C.esI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esF(w,d))},
$S:1696}
C.esF.prototype={
$0(){return this.a.x=J.eS(A.dN.gaU(this.b))},
$S:0}
C.esJ.prototype={
$1(d){},
$S:29}
C.esj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esf.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esq.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.esr.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eF4)},
$S:0}
C.ess.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esl.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cd)},
$S:0}
C.esm.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.esn.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.eso.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esp.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iI)}},
$S:7}
C.esk.prototype={
$0(){var w=this.a,v=w.z,u=C.fQM(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cNS(C.fQM(t))},
$S:0}
C.esh.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.esi.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esy.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.esz.prototype={
$0(){var w=this.a
return w.m(new C.esx(w))},
$S:0}
C.esx.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.esA.prototype={
$0(){var w=this.a
return w.m(new C.esw(w,this.b))},
$S:0}
C.esw.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.esB.prototype={
$1(d){var w=this.a
return w.m(new C.esv(w))},
$S:9}
C.esv.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.esC.prototype={
$1(d){var w=this.a
return w.m(new C.esu(w))},
$S:9}
C.esu.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.esD.prototype={
$0(){var w=this.a
return w.m(new C.est(w,this.b))},
$S:0}
C.est.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.esE.prototype={
$1(d){return this.a.a_N()},
$S:2}
C.esg.prototype={
$0(){return this.a.cd0(this.b)},
$S:0}
C.ciR.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:331}
C.ciP.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ciQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPJ.prototype={
boq(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTs(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cK8($.rg().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boq(d,e)},
$S:1697}
C.fO0.prototype={
$1(d){return d.length!==0},
$S:3}
C.fO2.prototype={
$1(d){var w=this.a.a
w=A.d.aN(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fO1.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fq(t,A.cr,t,t,t,B.cP(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r5,A.bX,t,A.dz,A.bY)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fq0.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fq1(),B.U(w).k("Y<1>")).gI(0)},
$S:246}
C.fq1.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpZ.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:209}
C.fq_.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:209}
C.ciS.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCh()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.heP(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hbt(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aN(n.gclm(),"\n\n")
d=B.fq(a6,A.cr,a6,a6,a6,B.cP(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aft(k,q,1.28),j),A.r5,A.bX,a6,A.dz,A.bY)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.heP(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hbt(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aft(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.R(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bc,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r5,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCg(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:391}
C.ciT.prototype={
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
n=o.gaCh()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.heP(f,new B.G(!0,e,a5,i,a5,a5,h,A.cT,A.bs,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hbt(g.length===0?B.a([a6],n):g,l))break}a1=o.aft(i,h,1.28)
a2=new C.ciU(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kh,new B.a5(v,a5,a4.f,a5),A.Kh,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHh,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bc,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCg(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:154}
C.ciU.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r5,w,w),w)},
$S:778}
C.h10.prototype={
$1(d){return new C.WV(this.a,this.b,null)},
$S:z+79}
C.ett.prototype={
$1(d){return d.lb()},
$S:1699}
C.etu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ets(w,d))},
$S:1700}
C.ets.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.etg.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eth.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etn.prototype={
$0(){return B.a6(this.a,!1).eO()},
$S:0}
C.eto.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bF,A.r,2.5)
return B.aA(w,B.q(w,B.b4(w,w,w,new C.bdZ(u,v.gazj(),w),A.fJ),A.f,w,w,new B.p(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etl(v),new C.etm(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.etl.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:271}
C.etm.prototype={
$1(d){var w=this.a
w.m(new C.eti(w,d,this.b,this.c))},
$S:203}
C.eti.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.E(s.x*r.d,1,6)
w=s.gazj()
r=r.a
v=t.c
u=t.d
s.r=A.j.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.etp.prototype={
$1(d){var w=this.a
return w.m(new C.etk(w,this.b))},
$S:9}
C.etk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etq.prototype={
$1(d){var w=this.a
return w.m(new C.etj(w,d))},
$S:6}
C.etj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etr.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h1g.prototype={
$1(d){return D.hyK},
$S:z+83}
C.f2m.prototype={
$1(d){return this.a.Zp()},
$S:7}
C.f1e.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aM(v)},
$S:0}
C.f1C.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f1M.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f0Y.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0Z.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f0W.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0X.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1v.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f1w(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jl(B.t0(q>0.2?F.bWU(r,new B.Ep(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jl(B.da(B.t0(F.bWU(s.$1(!0),new B.Ep(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(D.b1T,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi))}s=t.aL
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(D.b1D,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi))
s=t.aR
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.b9,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7o,v),A.n),A.bi))
if(t.aH>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.p(v,v,v,v,v,new B.a9(A.b7,A.b9,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.djd,v),A.n),A.bi),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.p(v,v,v,v,v,new B.c_(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dg1,v),A.n),A.bi))
t=t.aG
if(t>0)q.push(B.b4(v,v,v,new C.bhA(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:67}
C.f1w.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.c_,!0,q,!1,q,q),o=r.a,n=o.aZD(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
return B.dP(B.ed(A.A,B.eL(A.A,l,B.fw(A.A,new B.BG(new B.uL(q,q,n,A.xU),p,q),q,B.wh(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.o(-m*r.d*u/2,-t*r.c*u/2))},
$S:493}
C.f1I.prototype={
$0(){return this.a.m(new C.f1H(this.b,this.c))},
$S:0}
C.f1H.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1J.prototype={
$1(d){return this.a.m(new C.f1G(this.b,d))},
$S:6}
C.f1G.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1L.prototype={
$0(){return this.a.m(new C.f1K(this.b,this.c))},
$S:0}
C.f1K.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0O.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f0P.prototype={
$1(d){var w=this.a
return w.m(w.gcDx())},
$S:2}
C.f0Q.prototype={
$1(d){return this.a.m(new C.f0N())},
$S:2}
C.f0N.prototype={
$0(){},
$S:0}
C.f0R.prototype={
$0(){var w=this.a
return w.m(new C.f0M(w,this.b))},
$S:0}
C.f0M.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f0T.prototype={
$2(d,e){return A.au},
$S:37}
C.f0S.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bA
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b3,new B.p(w,w,q,s,w,new B.a9(A.b7,A.b9,A.x,r,w,w),A.n),A.h_,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fK,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0L(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f0L.prototype={
$0(){var w=this.a
return w.m(new C.f0I(w,this.b))},
$S:0}
C.f0I.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0U.prototype={
$1(d){var w=this.a
return w.m(new C.f0K(w,d))},
$S:9}
C.f0K.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f0V.prototype={
$1(d){var w=this.a
return w.m(new C.f0J(w,d))},
$S:9}
C.f0J.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f2b.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f2i.prototype={
$1(d){var w=this.a
return w.m(new C.f2j(w,d))},
$S:32}
C.f2j.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dY(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f2k.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:171}
C.f2c.prototype={
$0(){var w=this.a
return w.m(new C.f2a(w,this.b))},
$S:0}
C.f2a.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f2d.prototype={
$0(){var w=this.a
return w.m(new C.f29(w,this.b))},
$S:0}
C.f29.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f2e.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f28(v,w.b,w.c,w.d))},
$S:0}
C.f28.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f2f.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtc(v))},
$S:0}
C.f2g.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f2h.prototype={
$0(){var w=this.a
return w.m(new C.f27(w))},
$S:0}
C.f27.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f1V.prototype={
$1(d){return d.a===this.a.dy},
$S:218}
C.f1W.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aAX[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aO(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azn(new B.nr(new B.bf(n,n,n,n),A.aq,new B.l5(new B.p(j,j,j,j,j,new B.a9(A.a6,A.aa,A.x,m,j,j),A.n),A.bi,new C.b15(l,B.b0(k==null?v.w.x:k),A.j.E(w,12,26),j),j),j),u,q.b,o===p,new C.f1U(r,v),2,i))}return B.bW(A.bH,h,A.bt,j,7,7)},
$S:169}
C.f1U.prototype={
$0(){var w=this.b
return w.m(new C.f1P(this.a,w))},
$S:0}
C.f1P.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f1X.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:151}
C.f2_.prototype={
$0(){var w=this.a
return w.m(new C.f1T(w))},
$S:0}
C.f1T.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f20.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f21.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f22.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f23.prototype={
$0(){var w=this.a
return w.m(new C.f1S(w))},
$S:0}
C.f1S.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f24.prototype={
$0(){var w=this.a
return w.m(new C.f1R(w))},
$S:0}
C.f1R.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f25.prototype={
$0(){var w=this.b
return w.m(new C.f1Q(this.a,w))},
$S:0}
C.f1Q.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f26.prototype={
$1(d){return this.a.fx=d},
$S:151}
C.f1Y.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f1Z.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f1z.prototype={
$0(){var w=this.a
return w.m(new C.f1y(w))},
$S:0}
C.f1y.prototype={
$0(){var w=this.a
w.p4=null
w.b5X()},
$S:0}
C.f1A.prototype={
$0(){var w=this.a
return w.m(new C.f1x(w,this.b))},
$S:0}
C.f1x.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(w.gctU())},
$S:0}
C.f1r.prototype={
$0(){var w=this.a
return w.m(new C.f1q(w))},
$S:0}
C.f1q.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f1s.prototype={
$0(){var w=this.a
return w.m(new C.f1p(w))},
$S:0}
C.f1p.prototype={
$0(){var w=this.a
w.aH=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f1t.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgs[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aO(9,9)
m.push(v.azn(new B.nr(new B.bf(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BG(new B.uL(o,o,v.aZD(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xU),B.fR(u,A.A,140,o,A.cj,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f1o(v,s),3,n))}return B.bW(A.bH,m,A.bt,o,10,8)},
$S:169}
C.f1o.prototype={
$0(){var w=this.a
return w.m(new C.f1n(w,this.b))},
$S:0}
C.f1n.prototype={
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
C.f15.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f16.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f17.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f18.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f19.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f1a.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f1b.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f1c.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f1d.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f0r.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f0s.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f0t.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f0u.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f0v.prototype={
$0(){var w=this.a
return w.m(new C.f0q(w))},
$S:0}
C.f0q.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f0w.prototype={
$1(d){return this.a.b7=d},
$S:151}
C.f0x.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f1_.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f10.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f11.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f12.prototype={
$1(d){return this.a.bf=d},
$S:151}
C.f13.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f0B.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f0C.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f0D.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f0E.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f0F.prototype={
$0(){var w=this.a
return w.m(new C.f0A(w))},
$S:0}
C.f0A.prototype={
$0(){var w=this.a
return w.c9=A.j.F(w.c9+90+180,360)-180},
$S:0}
C.f0G.prototype={
$0(){var w=this.a
return w.m(new C.f0z(w))},
$S:0}
C.f0z.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f0H.prototype={
$0(){var w=this.a
return w.m(new C.f0y(w))},
$S:0}
C.f0y.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f1u.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.irH(v,w.p4)},
$S:0}
C.f1m.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bvI:B.fR(v,A.A,w,w,A.cj,A.c_,!1,w,!1,w,w)
return C.fO8(d.length===0?"rounded":d,u,e)},
$S:125}
C.f1i.prototype={
$0(){var w=this.a
return w.m(new C.f1h(w))},
$S:0}
C.f1h.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f1j.prototype={
$0(){var w=this.b
return w.m(new C.f1g(this.a,w))},
$S:0}
C.f1g.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f1k.prototype={
$0(){var w=this.b
return w.m(new C.f1f(this.a,w))},
$S:0}
C.f1f.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f1l.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.E(w.ay,0,1-d)
w.ch=A.j.E(w.ch,0,0.95)},
$S:6}
C.f1F.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b8.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cni(),n.r))
l.push(new C.JC(n.cAs(),!1,!1,t))
o=B.bR(0,B.by(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.q(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.p(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f1E(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.p(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:228}
C.f1E.prototype={
$1(d){var w=this.a
return w.m(new C.f1D(w,d,this.b,this.c))},
$S:19}
C.f1D.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f1O.prototype={
$0(){var w=this.a
return w.m(new C.f1N(w,this.b))},
$S:0}
C.f1N.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f14.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f2l.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1A(),B.E(B.at(w.b4A(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSx(),1),w.aOB()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.j.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1A(),new B.D(A.hE,B.at(s.b4A(u),t,t,t),t),B.E(s.aSx(),1),s.aOB()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:698}
C.fLp.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bCX(),null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cs,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bs,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,A.V)},
$S:z+98}
C.fLo.prototype={
$3(d,e,f){var w=this,v=C.bCX(),u=w.b?A.H:A.cC,t=w.c?A.cH:A.bs
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bj,4280172719,2,d,0,w.f,w.e,D.cs,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.ckm.prototype={
$1(d){return B.w(d)},
$S:17}
C.fT8.prototype={
$0(){return this.a},
$S:z+15}
C.fy0.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fy1.prototype={
$2(d,e){return J.cr(e)},
$S:z+31}
C.fTa.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fTd.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fTe.prototype={
$0(){return A.d.gH(D.wU)},
$S:z+33}
C.fT6.prototype={
$1(d){return d.a},
$S:z+16}
C.fT9.prototype={
$1(d){return d.a},
$S:z+16}
C.fR4.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fR5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fR6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fLt.prototype={
$0(){return C.cD()},
$S:22}
C.fLw.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cs,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bj,4280172719,2,d,s,0,"",t,D.cW,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dk,!1,null,0,"","",A.bs,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dk,!1,null,0,"",j,A.bs,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dk,!1,null,0,j,k,A.bs,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bs,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bs,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dk,!1,k,l,"",m,A.bs,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bs,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dk,!1,j,k,"",l,A.bs,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bs,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bs,A.a8)},
$S:z+35}
C.fLv.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cs,D.fh,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fLu.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cs,t=v?j:0
return C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bs,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bj,4280172719,2,"",t,0,"",u,D.lR,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qW,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fLs.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fNU.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hxY.c3(0,A.a.i(s.w).toLowerCase(),new C.fNS(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fNT(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bB(t.e,new B.bqI(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fNS.prototype={
$0(){return F.aPt(this.a.w)},
$S:202}
C.fNT.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBQ("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:202}
C.fpV.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fpW.prototype={
$1(d){return d.a},
$S:z+18}
C.fpX.prototype={
$1(d){return d.b},
$S:z+19}
C.h1s.prototype={
$1(d){return D.hzv},
$S:z+41}
C.f8J.prototype={
$0(){return this.a.x=C.i2B(this.b,this.c.b)},
$S:0}
C.f8K.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f8H.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.f8I.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.f8G.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.as,null,new C.f8B(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kB,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f8C(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hEb(o,m.cOE(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f8D(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f8B.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f8F(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bc2,A.f,p,p,D.b6Y,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Da:D.Dh,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fO8(v,i.b6z(h),u),p)))}t=B.kU(1,m,4,10,10,p,A.dV,!0)
if(!l)return B.bn(!0,new B.D(Ab.yH,t,p),!0,!1,A.ag,!0,!0)
s=new C.f8E(i,d)
m=B.aH(d,A.c1,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ie[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cR(new B.aY(0,1/0,0,m.a.b*0.85),B.cg(B.x(B.a([D.fMm,A.X,t,A.dX,D.f7H,A.ax,D.fXv,A.X,B.kU(1.15,l,3,10,10,p,A.dV,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yH,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.f8F.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.br:A.dr
return B.aA(w,B.q(w,e,A.f,w,w,new B.p(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hF,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f8A(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1704}
C.f8A.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f8E.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bN:A.bA
r=B.L(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.q(v,B.by(w,d.length===0?B.q(v,D.arU,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dx(!0,new C.Oj(u.Gb(d),!0,!1,v),v),A.aq),A.f,v,v,new B.p(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8z(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:125}
C.f8z.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f8C.prototype={
$0(){var w=this.a
return w.w=w.w.Gb("")},
$S:0}
C.f8D.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8p.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f8q.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f8s.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f8t.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f8u.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f8v.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8r(w,d))},
$S:2}
C.f8r.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f8w.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f8X.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f8Y.prototype={
$0(){var w=this.a
return w.m(new C.f8W(w))},
$S:0}
C.f8W.prototype={
$0(){return this.a.e=null},
$S:0}
C.f8Z.prototype={
$0(){var w=this.a
return w.m(new C.f8V(w))},
$S:0}
C.f8V.prototype={
$0(){return this.a.x=null},
$S:0}
C.f90.prototype={
$1(d){var w=this.a
return w.m(new C.f8U(w,d))},
$S:35}
C.f8U.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f91.prototype={
$1(d){var w=this.a
return w.m(new C.f8T(w,d))},
$S:35}
C.f8T.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f92.prototype={
$0(){var w=this.a
return w.m(new C.f8S(w))},
$S:0}
C.f8S.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f93.prototype={
$1(d){var w=this.a
return w.m(new C.f8R(w,d))},
$S:35}
C.f8R.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f94.prototype={
$1(d){var w=this.a
return w.m(new C.f8Q(w,d))},
$S:35}
C.f8Q.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f95.prototype={
$0(){var w=this.a
return w.m(new C.f8P(w))},
$S:0}
C.f8P.prototype={
$0(){var w=this.a
return w.w=w.w.Gb("")},
$S:0}
C.f96.prototype={
$0(){var w=this.a
return w.m(new C.f8O(w,this.b))},
$S:0}
C.f8O.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f97.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSz(D.a5z[v]),null))
return B.bW(A.bH,t,A.bt,null,8,8)},
$S:169}
C.f9_.prototype={
$1(d){var w=this.a
return w.m(new C.f8N(w,d))},
$S:9}
C.f8N.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f8x.prototype={
$0(){var w=this.a
return w.m(new C.f8y(w,this.b,this.c))},
$S:0}
C.f8y.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f8M.prototype={
$0(){var w=this.a
return w.m(new C.f8L(w,this.b))},
$S:0}
C.f8L.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h1r.prototype={
$1(d){return new C.a1z(this.a,this.b,null)},
$S:z+42}
C.f8i.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f8j.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f8k.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKM?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f8l.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f8m.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8h(w,d))},
$S:2}
C.f8h.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f8n.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f8o.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aC(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bB,w.length),A.aP))},
$S:0}
C.fxh.prototype={
$1(d){return d.a===this.a},
$S:218}
C.ep9.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazo(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.d0T:D.diW
t=D.yk.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bR(0,B.b4(q,q,q,new C.bjS(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bTJ(B.eL(A.A,0.5,B.q(q,q,A.f,q,q,new B.p(q,q,q,q,q,new B.a9(A.a6,A.aa,A.x,B.a([A.L,D.bjY.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.o(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.by(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.eb:A.mi,D.yk,q,q,q,20),A.ax,B.ev(A.A,B.od(A.jP,D.fFE,new C.ep8()),A.f,A.e0)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ap(q,B.q(q,D.fC7,A.f,q,q,new B.p(D.yk,q,q,B.m(6),q,q,A.n),q,q,q,q,P.amF,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.p(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:98}
C.ep8.prototype={
$1(d){return D.c6g.aK(0,d)},
$S:72}
C.fTf.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fTg.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:218}
C.fTh.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1705}
C.fTi.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fTb.prototype={
$1(d){return d.a},
$S:z+18}
C.fTc.prototype={
$1(d){return d.b},
$S:z+19}
C.h0F.prototype={
$1(d){return new C.a_X(this.a,this.b,null)},
$S:z+44}
C.dsl.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsm.prototype={
$1(d){return d.a===this.a.gajM()},
$S:z+10}
C.dsn.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dsq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dsr.prototype={
$0(){var w=this.a
return w.m(new C.dsp(w,this.b))},
$S:0}
C.dsp.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dss.prototype={
$1(d){var w=this.a
return w.m(new C.dso(w,d))},
$S:9}
C.dso.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ep7.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1706}
C.fm2.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bn,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fh,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cs,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fm4.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bs,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bj,4280172719,2,d,l,0,"",D.n7,D.cW,g,e,f)},
$S:z+46}
C.fm3.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xb(0,"twinkle")
w=t===D.bj?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n7,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fm1.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fMA.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fMB.prototype={
$0(){return A.d.gH(D.In)},
$S:z+49}
C.fMC.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fog.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fSI.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bj,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bj,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSJ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bj,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bj,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bj,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fH,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSK.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bj,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kb,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kb,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fH,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSV.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kb,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kb,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.ka,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bj,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fT_.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.ka,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bj,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bj,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fT0.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kb,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bj,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fT1.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d_M[w]
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fh,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bs,A.aG,4279310375,A.bn,null,D.bj,v,4294967295,2,0,!1,"",0,D.cs,0,"","","","","",!1,0)
u=$.Lf
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fT2.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mP,A.du,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fh,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bs,A.aG,4279310375,A.bn,null,D.DV,v,2450411,0,0,!1,"",0,D.cs,0,"","","","","",!1,0)
u=$.Lf
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fT3.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bj,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.ka,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fH,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fT4.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bj,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fH,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kb,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fT5.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kb,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bj,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bj,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSL.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.ka,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.ka,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fSM.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.ka,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.ka,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.ka,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eY,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fSN.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bj,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bj,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kb,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.ka,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fSO.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bj,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.ka,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.ka,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fSP.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.ls,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.ls,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.ls,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.ls,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.ls,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSQ.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kb,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eY,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSR.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mP,A.du,w/3).l()
u=Date.now()
t=$.jc
$.jc=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fh,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bs,A.aG,4279310375,A.bn,null,D.DV,v,2450411,0,0,!1,"",0,D.cs,0,"","","","","",!1,0)
u=$.Lf
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bj,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSS.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fh,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bs,A.aG,s,A.bn,null,D.fH,t,t,0,0,!1,"",0,D.cs,0,"","","","","",!1,0)
v=$.Lf
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bj,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bj,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fST.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bj,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bj,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bj,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bj,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bj,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fSU.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jc
$.jc=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fh,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bs,A.aG,r,A.bn,null,D.bj,4294967295,4280640491,2,0,!1,"",0,D.cs,0,"","","","","",!1,0)
u=$.Lf
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,t)
u=B.ar(A.d6,A.cn,w/2).l()
t=Date.now()
s=$.jc
$.jc=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fh,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bs,A.aG,r,A.bn,null,D.bj,u,q,0,0,!1,"",0,D.cs,0,"","","","","",!1,0)
v=$.Lf
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bj,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.ka,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSW.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kb,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kb,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kb,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kb,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bj,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eY,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSX.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bj,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eY,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eY,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eY,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kb,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSY.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bj,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bj,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bj,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eY,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fH,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jc
$.jc=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fh,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bs,A.aG,4279310375,A.bn,null,D.eY,16777215,t,2,0,!1,"",0,D.cs,0,"","","","","",!1,0)
v=$.Lf
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fSZ.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kb,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kb,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bj,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fKq.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fKr.prototype={
$0(){return A.d.gH($.bGz())},
$S:z+52}
C.fwA.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fwz.prototype={
$1(d){return C.iax(d,this.a,this.b)},
$S:z+53}
C.fTo.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wh(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUz(B.i_y(A.vM,C.iaA(w.c,w.d,v,u),t)))},
$S:389}
C.e2I.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e2H.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.p(w,w,w,w,w,new B.c_(A.F9,1.2,A.x,w,0,u.d,w,w),A.n),A.bi),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jl(new B.an(A.a0,w,A.b2,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgF(u.a,r,q,r),A.az),w),B.at(new B.k1(r,new C.e2G(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:323}
C.e2G.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.e4.aA(0,A.j.E(e/1.4,0,1)),p=A.j.E(e/0.9,0,1),o=A.j.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hS(B.fR(i,A.A,r,r,A.cj,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.p(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mI(e*0.8)),A.a7),r,w,r,r,new B.R(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btx(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.q(r,r,A.f,r,r,new B.p(r,r,r,r,r,new B.a9(A.a6,A.aa,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNc(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.o(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.R(l,0,l,0),B.x(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f7v.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.j.E(w-0.1,0,1),A.j.E(w,0,1),A.j.E(w+0.1,0,1),1],x.x),null).aK(0,d)},
$S:72}
C.ceN.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bN:A.bA
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i2.j(0.4),A.I,14)],x.V):v
w=B.cT(v,B.by(B.m(12),d,A.aq),v,v,A.b3,new B.p(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fK,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1707}
C.ceO.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gb(""))},
$S:0}
C.ceP.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dx(!0,new C.Oj(v.Gb(u),!0,!1,null),null),d.b,new C.ceQ(w,this.c,d),v.a===u)},
$S:z+54}
C.ceQ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hEb(u.b,t.c.Gb(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h_4.prototype={
$1(d){return new C.a_u(this.a,null)},
$S:z+55}
C.dhz.prototype={
$0(){var w=this.a
w.d=w.gwe().beQ("data:"+this.b+";base64,"+A.cP.gcu().aM(this.c));++w.r},
$S:0}
C.dhE.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhF.prototype={
$0(){var w=this.a
return w.m(new C.dhD(w))},
$S:0}
C.dhD.prototype={
$0(){return this.a.r++},
$S:0}
C.dhG.prototype={
$1(d){var w=this.a
return w.m(new C.dhC(w,d))},
$S:2}
C.dhC.prototype={
$0(){var w=this.a
return w.d=w.gwe().aFR(this.b)},
$S:0}
C.dhH.prototype={
$0(){var w=this.a
return w.m(new C.dhB(w))},
$S:0}
C.dhB.prototype={
$0(){var w=this.a
return w.d=w.gwe().beQ("")},
$S:0}
C.dhI.prototype={
$1(d){var w=this.a
return w.m(new C.dhA(w,d))},
$S:2}
C.dhA.prototype={
$0(){var w=this.a
return w.d=w.gwe().beW(this.b)},
$S:0}
C.dhJ.prototype={
$0(){var w=this.a
w=w.gwe().beW(w.gazp().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.h_3.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.h_2(w),null)},
$S:20}
C.h_2.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bn(!0,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c1,x.w).w.a.b*0.85),B.cg(B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fUv,A.ax,D.fUL,A.aB,new C.b12(v.a,new C.h_1(v,e,d),!0,w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7w,w,w,w,w,A.O1,w,w,w)},
$S:176}
C.h_1.prototype={
$1(d){this.b.$1(new C.h_0(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.h_0.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h1q.prototype={
$1(d){return D.hsY},
$S:z+57}
C.don.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.doo.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dop.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fQ1.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.E(w-0.12,0,1),A.j.E(w,0,1),A.j.E(w+0.12,0,1)],x.x),null).aK(0,d)},
$S:72}
C.dhg.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aZ(t+r*1.2,o))
u.D(new B.c5(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c5(w,q+p,w,q+p*1.2))
u.D(new B.DN(B.bX(new B.o(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.o(w,o),2.2,p)},
$S:459}
C.fQ5.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+58}
C.fIr.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fIs.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yK,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fCp,A.U,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HW,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fIp(d),B.bp(A.c4,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fIq(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.co,w,w,S.xH,w,w,w,w))],x.p),A.al,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fIp.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fIq.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ckk.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.ckl.prototype={
$1(d){return d.aj()},
$S:z+60}
C.ckj.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a3(b5,x.N,x.z),b3=B.aI(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aI(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aI(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i66(b2.h(0,"type"))
t=B.aI(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aI(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aI(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aI(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aI(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.aD2[A.o.E(b4,0,8)]
m=D.d2Y[A.o.E(w,0,1)]
l=C.i9X(b2.h(0,"decoration"))
k=B.aI(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.azo[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.icL(b2.h(0,"shape"))
g=B.aI(b2.h(0,"fillColor"))
g=g==null?b1:A.j.M(g)
if(g==null)g=4280640491
f=B.aI(b2.h(0,"strokeColor"))
f=f==null?b1:A.j.M(f)
if(f==null)f=4280172719
e=B.aI(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aI(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aI(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.j.M(a2)
if(a2==null)a2=0
a3=C.hz4(b2.h(0,"textTransition"))
a4=B.aI(b2.h(0,"textAnimDelayMs"))
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
b2=B.aI(b2.h(0,"textBg"))
b2=b2==null?b1:A.j.M(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ck9.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.cka.prototype={
$1(d){return d.aj()},
$S:z+63}
C.ck6.prototype={
$1(d){return B.w(d)},
$S:17}
C.ck7.prototype={
$1(d){return B.w(d)},
$S:17}
C.ck8.prototype={
$1(d){return C.hpD(B.a3(d,x.N,x.z))},
$S:z+64}
C.ckB.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckC.prototype={
$0(){return A.d.gH(D.a5b)},
$S:z+66}
C.ckw.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.ckv.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckr.prototype={
$1(d){return new B.N(d,new C.cks(),B.U(d).k("N<1,V>")).f1(0,new C.ckt())},
$S:z+69}
C.cks.prototype={
$1(d){return d.f},
$S:z+70}
C.ckt.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:682}
C.cku.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hWi(d)},
$S:z+71}
C.ckx.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cky.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckz.prototype={
$1(d){return d.aj()},
$S:z+14}
C.fQE.prototype={
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
C.fQA.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fQB.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fQC.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fQD.prototype={
$2(d,e){return d.b===D.fh&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ckf.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ilI(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cE(new B.b8(b4,b5),new C.cke(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qn.aA(0,A.j.E(b1,0,1))
u=new C.ckg()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckh(a9,b7.d)
r=new C.cki(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jB.aA(0,A.j.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kG(A.j.E(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.o(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fh){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lR&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kG(A.j.E(o,0,1),r.$1(l),a8),new B.kG(A.j.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iR(B.wL(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cs)a7=D.n7
p.push(s.$5(i.c,i.d,i.e,i.f,C.hBA(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ad,A.t,p,a8),new B.p(a8,a8,a8,a8,a8,new B.a9(A.a6,A.aa,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi)},
$S:452}
C.cke.prototype={
$1(d){return d.a},
$S:z+22}
C.ckg.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ckh.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1711}
C.cki.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8K(v,C.b3a(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dPR.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cko.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckp.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fTv.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:337}
C.fSC.prototype={
$1(d){return new C.aer(this.a,this.b,null)},
$S:z+78}
C.eBt.prototype={
$0(){return this.a.QC(this.b,C.ipE(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eBu.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QC(this.b,C.ipG(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eBv.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QC(this.b,C.ipF(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eBw.prototype={
$0(){A1.hBk()
B.a6(this.a,!1).O(null)},
$S:0}
C.ckd.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1712}
C.ckc.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nZ),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.E(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c_:A.dB
return B.fR(t,A.A,o,new C.ckb(),A.cj,w,!0,u,!1,new B.bO("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1713}
C.ckb.prototype={
$3(d,e,f){return D.aeX},
$S:217}
C.fQz.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fQy(e.b,e.d),u),u.k("ak.E"))
return B.by(s,B.c3(new B.an(A.a0,t,A.ad,A.t,r,t),new B.p(v,t,t,t,t,w,A.n),A.bi),A.aq)},
$S:1714}
C.fQy.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b3a(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fzj.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fzh(d))
w=B.aH(d,A.c1,x.w).w
v=B.m(22)
u=B.L(A.bA,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h2,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kf,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bM(!1,A.AQ,q,q,!0,q,q,q,new C.fzi(p,d),q,B.ft(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cc,q,new B.b9(B.m(12),A.a1),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.p(A.as,q,u,v,t,q,A.n),q,q,q,A.h1,A.GS,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:269}
C.fzh.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pW())B.a6(w,!0).eO()},
$S:0}
C.fzi.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eO()},
$S:0}
C.fg4.prototype={
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
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fL(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.km(r*0.5)
return B.fw(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fw(A.aa,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLc(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jl(u.b,A.t,new C.aLc(1-r,t))],x.p),t)
case 16:v=A0.XD.aA(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eL(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:65}
C.e0r.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0q.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0p.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hBA(v,w,e)},
$S:65}
C.ck5.prototype={
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
q=B.C(new B.N(v,new C.ck4(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ad,A.f,q,r),new B.p(t,r,r,r,r,u,A.n),A.bi)},
$S:452}
C.ck4.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cs?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8K(m,new C.Wb(d,C.b3a(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.det.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.des(w))},
$S:12}
C.des.prototype={
$0(){return this.a.d++},
$S:0}
C.eoQ.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSs.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ilr(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eg(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.o(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:65}
C.f5_.prototype={
$1(d){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=d
w.e=A.dP
return w},
$S:1715}
C.fO9.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.btq(u,t,r),A.az))
w.push(B.nT(s.d,A.aq,new C.bhb(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsn(u,q,t,r),A.az))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:231}
C.fCq.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:334}
C.eHH.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.Dx(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eHF(),new C.eHG(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1716}
C.eHF.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:181}
C.eHG.prototype={
$0(){return J.fr(this.a)},
$S:1718}
C.eE4.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eE5.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eE6.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eFF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFt.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eFu.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eDs.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGN.prototype={
$0(){this.a.u9()},
$S:0}
C.eHD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oC()
w.KI()},
$S:0}
C.eFD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oC()
w.KI()},
$S:0}
C.eHq.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHr.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHs.prototype={
$1(d){return d.a},
$S:z+22}
C.eHt.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.aw())},
$S:253}
C.eHu.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eCR.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHE.prototype={
$0(){},
$S:0}
C.eEM.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()
w.KI()},
$S:0}
C.eCP.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.y9()},
$S:0}
C.eCQ.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.y9()},
$S:0}
C.eF8.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eF9.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()
w.KI()
w.z="Home"},
$S:0}
C.eFa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEL.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEK(d),w,w)],x.p),w,w,w,D.fWn,w,w,w,w,D.fCS,w)},
$S:18}
C.eEK.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEI.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEH(d),w,w)],x.p),w,w,w,D.fH1,w,w,w,w,D.fEI,w)},
$S:18}
C.eEH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEJ.prototype={
$0(){},
$S:0}
C.eE0.prototype={
$1(d){return this.a.b2Y(C.bEC(d))},
$S:z+7}
C.eE1.prototype={
$1(d){return this.a.agm(C.bEC(d))},
$S:z+7}
C.eES.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.q(w,w,A.f,w,w,new B.p(A.aV,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bz,D.fWr,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bz,new C.Qw(A.wy,D.aAM,"HATI YA KUHOWA","Hati ya mahari",new C.eEN(d),w),A.X,new C.Qw(A.hv,D.dgu,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eEO(d),w),A.X,new C.Qw(A.hH,D.d0Y,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eEP(d),w),A.X,new C.Qw(A.id,D.d_1,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eEQ(d),w)],v)
if(this.a.gacB())A.d.v(u,B.a([A.X,new C.Qw(A.jp,D.cKU,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eER(d),w)],v))
return B.bn(!0,B.cg(B.x(u,A.al,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,E.yK,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEN.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eEO.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eEP.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eEQ.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eER.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eET.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()},
$S:0}
C.eCT.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eCU.prototype={
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
C.eF3.prototype={
$1(d){return d.b===D.lR},
$S:z+4}
C.eF4.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e0(new C.eF1(w,this.a,v),null)},
$S:20}
C.eF1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eF2(p,o,a3,n),l=B.S(a2).ax.a===A.J,k=l?A.c:A.S,j=l?A.aS:A.am,i=l?A.bp:A.bO,h=l?A.S:A.c,g=B.m(28),f=B.L(l?A.bA:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eEY(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Dh[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjL(t,u.b,p.a===t,i,k,new C.eEZ(v,m),q))}a1=B.bW(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Da[w]
s.a=null
t=s.a=r.a
u.push(new C.bjK(t,r.b,p.b===t,k,j,new C.eF_(s,m),q))}return B.bn(!0,B.q(q,B.cg(B.x(B.a([d,A.aR,a0,A.X,a1,A.bz,v,A.X,B.bW(A.bH,u,A.bt,q,12,12),A.bz,new B.a5(1/0,48,B.es(D.c2h,D.fYS,new C.eF0(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.m(16),A.a1),D.b51,q,q,q,q)),q)],e),A.E,q,A.e,A.Q,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.p(h,q,f,g,q,q,A.n),q,q,q,A.ur,D.bDB,q,q,q),!0,!1,A.ag,!0,!0)},
$S:87}
C.eF2.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eEW(w.a,d,e))
w.b.da(new C.eEX(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1721}
C.eEW.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eEX.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eEY.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEZ.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eF_.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eF0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A7.Hs(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.da(new C.eEV(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEV.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eF6.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eF7.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eF5(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.y9()},
$S:0}
C.eF5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFo.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eFp.prototype={
$1(d){return d.w},
$S:z+82}
C.eFq.prototype={
$2(d,e){return d>e?d:e},
$S:81}
C.eFr.prototype={
$1(d){var w=this,v=null,u=B.S(d).ax.a===A.J,t=u?A.c:A.S,s=u?A.aS:A.am,r=u?A.bp:A.aQ,q=u?A.S:A.c,p=B.m(28),o=B.L(u?A.bA:A.aO,A.r,1),n=B.aH(d,A.c1,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bWN,A.f,v,v,D.b6o,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eFl(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aB,new B.dn(1,A.cp,B.hN(v,new C.eFm(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.eFn(),!0),v)],l),A.E,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.p(q,v,o,p,v,v,A.n),v,v,v,A.ur,A.a0g,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFl.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFn.prototype={
$2(d,e){return A.af},
$S:37}
C.eFm.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.c_4,q,q,q,new C.eFj(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bFR,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bt(q,new B.b6(4,B.m(16),A.a1),q,A.eW,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.m(16),D.b4H),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eFk(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:687}
C.eFj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.irQ(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.o9(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bB,o+s.length),A.aP))
l.akp(k,m)
l.pI()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFk.prototype={
$1(d){var w=this.a
w.akp(this.b.a,d)
w.pI()},
$S:2}
C.eFs.prototype={
$0(){},
$S:0}
C.eEU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eD9.prototype={
$0(){},
$S:0}
C.eDa.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hCU(this.b,w,!0)
w=this.a
w.r=null
w.y9()},
$S:0}
C.eDb.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eDc.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eD8(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.y9()},
$S:0}
C.eD8.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFy.prototype={
$1(d){return B.pd(new C.eFx(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:133}
C.eFx.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aml,B.x(B.a([D.fTS,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.feF,new C.eFw(this.a,this.b),20,A.uu,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:432}
C.eFw.prototype={
$2(d,e){var w=null,v=D.In[e],u=C.hWd(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.p(o,w,w,n,w,w,A.n),w,w,w,w,A.fT,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.q(w,D.f7D,A.f,w,w,new B.p(A.dJ.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mY,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aP(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.m,w,A.e,A.i,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(w,w,p,s,w,new B.a9(A.a6,A.aa,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFv(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eFv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckn(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFz.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()},
$S:0}
C.eBO.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rV(4294967295,null,0,0,null,C.cD(),D.n6,"","","",D.dk),s=this.b
C.ckA(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DU){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eD7.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jc
$.jc=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c4(v.e.r,v.f+1,C.hpD(q));++v.f},
$S:0}
C.eD5.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eFH.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c4(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eD1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eD0(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eD0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFG.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eCS.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.aw())},
$S:253}
C.eDt.prototype={
$0(){return B.k8(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eHo.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eHp.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avl(w).fW()
v=u.Xu(w)
v.stT(B.hg(A.bB,v.a.a.length))},
$S:7}
C.eGO.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yu(v)
if(u!=null&&u.b===D.cW)w.Xu(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eBP.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,v.gqS().e.l(),A.aG,"",4280640491,24,A.bs,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bj,4280172719,2,"Tap to edit text",0,0,"",D.cs,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBM.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bn,!1,4279310375,A.aG,"",v.gqS().c.j(0.25).l(),24,A.bs,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqS().c.l(),2,"",0,0,"",D.cs,D.fh,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBC.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"",4280640491,24,A.bs,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lR,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eBz.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c9d],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal2().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUs,r,r,r,r,new C.eBy(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bn(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBy.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eBA.prototype={
$0(){var w=A.j.E(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.az(u.aj(),null),s=C.er(A.bn,!1,4279310375,A.aG,u.b,4280640491,24,A.bs,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bj,4280172719,2,t,0,0,"",D.cs,D.a7S,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eD3.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eD4.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eD2(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eD2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eCg.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fh){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eCh(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eCh.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eCl.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eCm(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eCm.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eCj.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eCk(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eCk.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eB(w,new C.eCi()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eCi.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCf.prototype={
$0(){return C.ckA(this.b,this.c,this.a.gqS())},
$S:0}
C.eFi.prototype={
$0(){return A.d.c4(this.a.d,0,this.b)},
$S:0}
C.eHx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHy.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eHz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHA.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c4(s,0,v.b)
else{w=A.d.bj(s,new C.eHw(v))
if(w>=0)t.d[w]=v.b}if(v.a.gT7()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.y9()
t.KI()}},
$S:0}
C.eHw.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eH3.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acF(),s=w.b,r=u.acG(A.fn,A.jI,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.U,r,A.bz,B.q(v,B.A(B.a([B.E(u.aXz(w.c,A.am),1),new B.D(A.fG,B.q(v,D.bUy,A.f,v,v,new B.p(A.fn.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXz(s,A.fn),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.p(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.bz,u.aXC(A.fn,d,D.bQF,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c12(A.aI,d,A.uJ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXA(d,"Not now"))
return new C.KK(B.x(p,A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eH2.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KK(B.x(B.a([v.acF(),A.U,v.acG(A.aI,D.bQk,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c1,x.w).w.a.b*0.42),B.hN(w,new C.eH0(v,u,d),u.length,w,w,A.ah,new C.eH1(),!0),w),A.aB,v.aXA(d,"Cancel")],x.p),A.al,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eH1.prototype={
$2(d,e){return A.X},
$S:37}
C.eH0.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aP(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.aro,A.f,w,w,new B.p(w,w,w,B.m(12),w,D.c6b,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ne,w,w,w),A.cU,B.d("Updated "+this.a.QD(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.p(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH_(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eH_.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eGX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acF()
t=t.acG(A.aw,A.uT,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KK(B.x(B.a([s,A.U,t,A.bz,B.A(B.a([B.E(B.dU(A.abp,new C.eGV(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.co,u,new B.b9(B.m(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.au,B.E(B.bI(D.fFi,u,new C.eGW(d),B.bp(A.fn,u,u,u,A.c,u,A.co,u,new B.b9(B.m(14),A.a1),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eGV.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eGW.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acF(),s=w.b,r=u.acG(A.aY,A.eb,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awF("Names",""+w.c),1),A.ae,B.E(u.awF("Fields",""+w.d),1),A.ae,B.E(u.awF("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bp(A.bl,v,v,v,A.c,v,A.yx,v,new B.b9(B.m(14),A.a1),v,v,v)
return new C.KK(B.x(B.a([t,A.U,r,A.aR,p,A.bz,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nV,v,v,v),v,new C.eGY(d),o),A.X,u.aXB(d,"Stay here",!1)],q),A.al,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eGY.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eDX.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDW.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eGP.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHn.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0G(A.d.dP(w.d,new C.eHl(v),new C.eHm(v)).hQ(),w.f,null)},
$S:z+84}
C.eHl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHm.prototype={
$0(){return this.a},
$S:z+85}
C.eBH.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fW,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWl,w,w,w,w,new C.eBF(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fDg,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXA,w,w,w,w,new C.eBG(d),!1,w,w,w,w,w,D.h_7,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.bn(!0,B.x(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBF.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eBG.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eBI.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bn,!1,4279310375,A.aG,v,4280640491,24,A.bs,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bj,4280172719,2,v,0,0,"",D.cs,D.TG,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jc
$.jc=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jc
$.jc=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.TG,0.04,0.06,0.92,0.88,v,24,A.a8,A.bs,A.aG,4279310375,A.bn,u,D.bj,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cs,0,"","","","","",!1,0))
A.d.c4(j.e.r,i+q-1,new C.m0(""+1000*p+"_"+o,r+n,"",D.qV,4294967295,null,D.dk,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eBN.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kL(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bn,!1,4279310375,A.aG,t,4280640491,24,A.bs,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lr,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eBE.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5E(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bn,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bs,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lr,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eBD(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ila(p)}},
$S:0}
C.eBD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFE.prototype={
$0(){var w=this.a,v=this.b
w.b5E(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eHv.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eE_.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eDZ())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eDZ.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eCp.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eCq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.u9()},
$S:7}
C.eBB.prototype={
$0(){var w=C.er(A.bn,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bs,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cs,D.lR,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eDr.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBK.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eBT.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eBU.prototype={
$0(){var w=this.b.hQ(),v=C.cD(),u=A.j.E(w.c+0.04,0,0.92),t=A.j.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eBV.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBS(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c4(w,u+1,v)}},
$S:0}
C.eBS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eC5.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBR(v))
if(u>0){A.d.cA(w,u)
A.d.c4(w,u-1,v)}},
$S:0}
C.eBR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eC8.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eC9.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eCa.prototype={
$0(){return this.a.as=A.dY},
$S:0}
C.eCb.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eCc.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eCd.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eCe.prototype={
$1(d){return d.length!==0},
$S:3}
C.eBW.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DC(w.gqS().c.j(0.18).l(),0.1,u,D.bj,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j5(A.bn,!1,w.gqS().d.l(),A.aG,18,A.bs,A.H,0.07,v,"Document Header",0,D.dk,0.9,0.05,0.02))},
$S:0}
C.eBX.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.DC(v.gqS().c.j(0.12).l(),0.1,t,D.bj,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFk()
A.d.J(t,C.j5(A.K,!1,v.gqS().e.l(),A.aG,12,A.bs,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dk,0.9,0.05,0.92))},
$S:0}
C.eBY.prototype={
$0(){A.d.J(this.a.gdB().z,C.DC(1727914055,0.12,C.cD(),D.bj,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eBZ.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.DC(w,0.08,C.cD(),D.bj,w,2,0.5,0.2,0.4))},
$S:0}
C.eC_.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.DC(w.gqS().c.j(0.35).l(),0.12,u,D.DV,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279310375,A.aG,18,A.bs,A.a8,0.15,C.cD(),"Important note",0,D.qW,0.5,0.38,0.52))},
$S:0}
C.eC0.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DC(4294507260,0.78,C.cD(),D.bj,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4279179050,A.aG,16,A.bs,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFk()+"\n\nSubject:\n\nBody text\u2026",0,D.dk,0.76,0.12,0.14))},
$S:0}
C.eC1.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.DC(4294897802,0.28,C.cD(),D.bj,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j5(A.bn,!1,4285611794,A.aG,15,A.bs,A.a8,0.24,C.cD(),"Sticky note",0,D.aKA,0.26,0.64,0.14))},
$S:0}
C.eC2.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.DC(4293060848,0.04,C.cD(),D.bj,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.DC(w,0.04,C.cD(),D.bj,w,2,0.55,0.1,0.48))},
$S:0}
C.eC3.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bs,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Je,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,18,A.bs,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vc,0.42,0.52,0.18))},
$S:0}
C.eC4.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DC(858088427,0.62,C.cD(),D.bj,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.DC(856004201,0.62,C.cD(),D.bj,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bs,A.H,0.1,C.cD(),"Option A",0,D.dk,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j5(A.bn,!1,w,A.aG,20,A.bs,A.H,0.1,C.cD(),"Option B",0,D.dk,0.36,0.56,0.2))},
$S:0}
C.eC6.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.DC(4294967295,0.36,C.cD(),D.bj,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j5(A.K,!1,w,A.aG,14,A.bs,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dk,0.24,0.38,0.4))},
$S:0}
C.eC7.prototype={
$0(){return C.ckA(this.b,D.TH,this.a.gqS())},
$S:0}
C.eDq.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9L.q(0,d),t=this.a
return t.baR(d,v===d,A.b1,this.c,new C.eDp(t,u,d,w),u)},
$S:z+25}
C.eDp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oq(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bG3(r,new C.eDo(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDo.prototype={
$0(){return this.a.da(new C.eDn(this.b,this.c))},
$S:0}
C.eDn.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eBL.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rV(4294967295,null,0,0,null,C.cD(),D.n6,"","","",D.dk),s=this.b
C.ckA(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DU){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.irT(p,q.d,s,new C.eCs(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.u9(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCs.prototype={
$1(d){return this.bnR(d)},
bnR(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eCr(t,d))
w=2
return B.b(t.u9(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eCr.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c4(v.d,0,u)}},
$S:0}
C.eCu.prototype={
$0(){return this.a.bMy()},
$S:0}
C.eCv.prototype={
$0(){return this.a.aSK("Class Presentation",!0)},
$S:0}
C.eCw.prototype={
$1(d){return this.a.bNu(d.b,this.b,d.a)},
$S:z+88}
C.eD6.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.c1,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eFh.prototype={
$1(d){return new B.D(new B.R(0,0,0,B.aH(d,A.eP,x.w).w.f.d),new B.e0(new C.eFg(this.a,this.b),null),null)},
$S:61}
C.eFg.prototype={
$2(d,e){return B.pd(new C.eFf(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:601}
C.eFf.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.as:A.c,s=B.L(u?A.bA:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.p(A.aV,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alM,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.S,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bM(!1,A.AQ,v,v,!0,v,v,v,new C.eFd(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aVw(u,!0,!0,new C.eFe(p,w.d))],q),e,v,D.bBg,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.p(t,v,s,A.l6,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.eFd.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFe.prototype={
$0(){this.b.$1(new C.eFb())
var w=this.a
if(w.c!=null)w.m(new C.eFc())},
$S:0}
C.eFb.prototype={
$0(){},
$S:0}
C.eFc.prototype={
$0(){},
$S:0}
C.eGQ.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:97}
C.eGR.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAy(this.a,null),0.94+w*0.06,null,null),w)},
$S:431}
C.eGS.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:97}
C.eGT.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,new C.bf_(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:431}
C.eGU.prototype={
$0(){return A.d.c4(this.a.d,0,C.X3(this.b))},
$S:0}
C.eBQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.as.j(0.72)],t):B.a([A.c.j(0.88),A.q7.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.cg.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A4.a25,u?A.ab:A.S,p,p,p,28),A.f,p,p,new B.p(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.S,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.by(o,B.uv(A.fi,B.q(p,B.x(B.a([t,A.aB,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.am,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:290}
C.eCV.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eCW.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCX.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k5
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2F:A.Cv}return w},
$S:690}
C.eD_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.j.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.as.j(0.78)],s):B.a([A.c.j(0.92),A.nn.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.q(l,B.X(C.kL(v.w)?A.wy:A.qJ,A.c,l,l,l,22),A.f,l,l,new B.p(l,l,l,q,l,new B.a9(A.a6,A.aa,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.S,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QD(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QD(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QD(v.f)
r=k.bNs(n,A.d.gH(r),t)
return B.q(l,B.by(j,new B.a8V(B.aJ(!1,A.a3,!0,l,B.aP(!1,l,!0,B.q(l,B.dG(!1,A.NZ,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ov,t?A.aD:A.bK,l,l,l,l),l,l,l,new C.eCY(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.p(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eCZ(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:98}
C.eCZ.prototype={
$0(){return this.a.agm(this.b)},
$S:0}
C.eCY.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
C.eEq.prototype={
$0(){var w=this.a
w.b9p()
w.m(new C.eEp())},
$S:0}
C.eEp.prototype={
$0(){},
$S:0}
C.eEr.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eEs.prototype={
$0(){this.a.da(new C.eEo(this.b))},
$S:0}
C.eEo.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eEt.prototype={
$0(){this.a.da(new C.eEn(this.b))},
$S:0}
C.eEn.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bs:A.cH},
$S:0}
C.eEu.prototype={
$0(){this.a.da(new C.eEm(this.b))},
$S:0}
C.eEm.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nb},
$S:0}
C.eEv.prototype={
$0(){this.a.da(new C.eEl(this.b))},
$S:0}
C.eEl.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEw.prototype={
$0(){var w=this.a
w.da(new C.eEk(w,this.b))},
$S:0}
C.eEk.prototype={
$0(){var w=this.b
return w.as=this.a.c81(w.as)},
$S:0}
C.eEx.prototype={
$0(){return this.a.da(new C.eEj(this.b))},
$S:0}
C.eEj.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEy.prototype={
$0(){return this.a.da(new C.eEi(this.b))},
$S:0}
C.eEi.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eEb.prototype={
$0(){return this.a.a34(this.b.a)},
$S:0}
C.eEc.prototype={
$0(){this.a.a0B()
return null},
$S:0}
C.eEd.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.c1,x.w).w.a.a<900)w.agF()
else w.m(new C.eEa(w))},
$S:0}
C.eEa.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eEe.prototype={
$0(){this.a.da(new C.eE9(this.b))},
$S:0}
C.eE9.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eEf.prototype={
$0(){return this.a.da(new C.eE8(this.b))},
$S:0}
C.eE8.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEg.prototype={
$0(){return this.a.da(new C.eE7(this.b))},
$S:0}
C.eE7.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eEh.prototype={
$0(){return this.a.aBQ(null)},
$S:0}
C.eDj.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eDk.prototype={
$0(){this.a.abb()
return null},
$S:0}
C.eDm.prototype={
$1(d){return this.bnS(d)},
bnS(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kz(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.as,null,new C.eDe(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.da(new C.eDf(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eDg(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.da(new C.eDh(r))
s=s.c.L(x.q).f
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
return B.b(C.hEa(q,new C.Fi(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.da(new C.eDi(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ai_(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eDe.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.erl],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.di,p,p,p)
q=u.e===s?D.bWu:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eDd(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bn(!0,B.x(o,A.m,p,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eDd.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDg.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eDh.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eDi.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDl.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Am(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Am(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Am(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ai_(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ewS,q,v,u,B.Am(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:145}
C.eHB.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFh(w,v)}},
$S:0}
C.eHC.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eEB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c65:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fy,B.aA(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b3,new B.p(w,u,u,r,u,q,A.n),A.eG,u,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEA(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:140}
C.eEA.prototype={
$0(){var w=this.a
return w.m(new C.eEz(w,this.b))},
$S:0}
C.eEz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEC.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5K:E.aAT
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbR2():t.gbMT()
return B.hb(B.aA(u,B.q(u,D.aqO,A.f,u,u,new B.p(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.aa,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1726}
C.eED.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ir8(v,w.a.c)},
$S:0}
C.eG_.prototype={
$0(){return this.b.vN(this.a.a)},
$S:0}
C.eG0.prototype={
$0(){return this.a.vN(D.n6)},
$S:0}
C.eG1.prototype={
$0(){return this.a.vN(D.Jc)},
$S:0}
C.eGc.prototype={
$0(){return this.a.vN(D.Jd)},
$S:0}
C.eGn.prototype={
$0(){return this.a.vN(D.Jb)},
$S:0}
C.eGy.prototype={
$0(){return this.a.qD("lab_report")},
$S:0}
C.eGF.prototype={
$0(){return this.a.qD("rubric")},
$S:0}
C.eGG.prototype={
$0(){return this.a.qD("minutes")},
$S:0}
C.eGH.prototype={
$0(){return this.a.qD("agenda")},
$S:0}
C.eGI.prototype={
$0(){return this.a.qD("timeline")},
$S:0}
C.eGJ.prototype={
$0(){return this.a.qD(this.b.a)},
$S:0}
C.eG2.prototype={
$0(){this.a.Wx()
return null},
$S:0}
C.eG3.prototype={
$0(){this.a.Wr()
return null},
$S:0}
C.eG4.prototype={
$0(){return this.a.qD("table")},
$S:0}
C.eG5.prototype={
$0(){return this.a.qD("sticky")},
$S:0}
C.eG6.prototype={
$0(){return this.a.qD("divider")},
$S:0}
C.eG7.prototype={
$0(){return this.a.qD("header_bar")},
$S:0}
C.eG8.prototype={
$0(){return this.a.pq(D.bj)},
$S:0}
C.eG9.prototype={
$0(){return this.a.pq(D.eY)},
$S:0}
C.eGa.prototype={
$0(){return this.a.pq(D.ka)},
$S:0}
C.eGb.prototype={
$0(){return this.a.pq(D.DV)},
$S:0}
C.eGd.prototype={
$0(){return this.a.pq(D.kb)},
$S:0}
C.eGe.prototype={
$0(){return this.a.pq(D.ls)},
$S:0}
C.eGf.prototype={
$0(){return this.a.pq(D.fH)},
$S:0}
C.eGg.prototype={
$0(){this.a.HP()
return null},
$S:0}
C.eGh.prototype={
$0(){this.a.NX()
return null},
$S:0}
C.eGi.prototype={
$0(){return this.a.qD("quote")},
$S:0}
C.eGj.prototype={
$0(){return this.a.a9j()},
$S:0}
C.eGk.prototype={
$0(){this.a.a0H()
return null},
$S:0}
C.eGl.prototype={
$0(){var w=this.a
return w.m(new C.eFQ(w))},
$S:0}
C.eFQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oq(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eFY(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eGo.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9N.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aV
u=B.a([B.q(s,s,A.f,s,s,new B.p(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.aa,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9N.q(0,q))u.push(B.ap(s,B.q(s,D.PK,A.f,s,s,D.Fh,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fy,B.aA(s,B.hb(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFX(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eFX.prototype={
$0(){this.a.a9z(this.b)
return null},
$S:0}
C.eGp.prototype={
$0(){this.a.a9y(this.b)
return null},
$S:0}
C.eGq.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hWe(d),p=this.a,o=B.m(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aV
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rV(4294967295,r,0,0,r,"preview_"+w,D.qV,"","","",D.dk)
C.hAY(s,w)
w=x.p
u=B.a([B.by(o,B.q(r,B.by(t,C.hCi(s),A.aq),A.f,r,r,new B.p(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.q(r,D.arp,A.f,r,r,D.Fh,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.am,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFW(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eFW.prototype={
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
return B.b(s.oq(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.da(new C.eFM(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFM.prototype={
$0(){return C.hAY(this.a,this.b.a)},
$S:0}
C.eFZ.prototype={
bnT(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9L.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oq(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bnT(d,e)},
$S:z+91}
C.eGK.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eGM(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cg(B.A(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eGM.prototype={
$1(d){var w=this
return w.a.baR(d,w.b===d,w.c,w.d,new C.eGL(w.e,d),!D.a9L.q(0,d))},
$S:z+25}
C.eGL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGr.prototype={
$1(d){this.b.$2(d,new C.eFV(this.a,d,this.c))
return null},
$S:z+26}
C.eFV.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bG3(u,new C.eFL(v,this.c,w),w)},
$S:0}
C.eFL.prototype={
$0(){return this.a.da(new C.eFJ(this.b,this.c))},
$S:0}
C.eFJ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eGs.prototype={
$1(d){this.b.$2(d,new C.eFU(this.a,d))
return null},
$S:z+26}
C.eFU.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h2e(u,new C.eFK(v,w),w)},
$S:0}
C.eFK.prototype={
$0(){var w=this.a
return w.da(new C.eFI(w,this.b))},
$S:0}
C.eFI.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eGt.prototype={
$0(){var w=this.a
return w.m(new C.eFT(w))},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eGu.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFh(w,v)}},
$S:0}
C.eGv.prototype={
$0(){this.a.IB()
return null},
$S:0}
C.eGw.prototype={
$0(){return this.a.a9j()},
$S:0}
C.eGx.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.da(new C.eFS(v))},
$S:0}
C.eFS.prototype={
$0(){var w=this.a
w.f=A.j.E(w.f*1.25,0.08,1.8)
w.e=A.j.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eGz.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eGA.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FN(v,!0)
return null},
$S:0}
C.eGB.prototype={
$0(){this.a.da(new C.eFR(this.b))},
$S:0}
C.eFR.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eGC.prototype={
$0(){this.a.da(new C.eFP(this.b))},
$S:0}
C.eFP.prototype={
$0(){var w=this.a
return w.y=w.y===A.cH?A.bs:A.cH},
$S:0}
C.eGD.prototype={
$0(){this.a.da(new C.eFO(this.b))},
$S:0}
C.eFO.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.nb},
$S:0}
C.eGE.prototype={
$0(){this.a.da(new C.eFN(this.b))},
$S:0}
C.eFN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eCo.prototype={
$1(d){return this.bnQ(d)},
bnQ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oq(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.da(new C.eCn(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:200}
C.eCn.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eH6.prototype={
$0(){var w=this.a
return w.da(new C.eH5(w,this.b))},
$S:0}
C.eH5.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eH7.prototype={
$0(){var w=this.a
return w.da(new C.eH4(w,this.b))},
$S:0}
C.eH4.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eDw.prototype={
$0(){return this.a.da(new C.eDv(this.b))},
$S:0}
C.eDv.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eDx.prototype={
$0(){return this.a.da(new C.eDu(this.b))},
$S:0}
C.eDu.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eE3.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.at5,new C.eE2(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eE2.prototype={
$1(d){var w=null
return B.Am(B.d(d.b,w,w,w,w,w,w,A.lU,w,w,w),48,d,x.fO)},
$S:z+95}
C.eHj.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eHi.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eHg(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.aV:A.ct
v=B.L(v,A.r,o?2:1)
u=r.d?A.cu:A.c
t=B.bR(0,C.hCi(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aA(q,B.q(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ap(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nT,q,q,q),A.f,q,q,new B.p(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.amG,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.p(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eHh(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eHh.prototype={
$0(){var w=this.a
return w.m(new C.eHc(w,this.b))},
$S:0}
C.eHc.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KI()},
$S:0}
C.eHg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eHd(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eHe(q,s))
q.aUe()}else if(r==="del"){q=t.a
q.m(new C.eHf(q,s))
q.aTk()}else if(r==="up")t.a.b5S(s,s-1)
else if(r==="down")t.a.b5S(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHd.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYd,w,w,w,w,new C.eH8(d),!1,w,w,w,w,w,w,w,D.fEf,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY6,w,w,w,w,new C.eH9(d),!1,w,w,w,w,w,w,w,A.xk,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXm,w,w,w,w,new C.eHa(d),!1,w,w,w,w,w,w,w,D.fMC,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZt,w,w,w,w,new C.eHb(d),!1,w,w,w,w,w,w,w,D.fE3,w,w,w))
return B.bn(!0,B.x(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eH8.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eH9.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eHa.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eHb.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eHe.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHk.prototype={
$0(){return this.a.a9j()},
$S:0}
C.eCO.prototype={
$0(){var w=this.a
w.b9p()
w.aBQ(null)},
$S:0}
C.eCN.prototype={
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
s=B.a([B.by(s,B.c3(A.l1,new B.p(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bi),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eCM(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ad,A.f,s,new B.bO("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.p(v,p,p,o,n,w,A.n),A.bi)},
$S:452}
C.eCM.prototype={
$1(d){var w=this
return w.a.bIS(d,w.b,w.c,w.d)},
$S:z+23}
C.eCB.prototype={
$0(){var w=this
if(w.b){w.a.O4(w.c)
return}if(w.d){w.a.a9h(w.c)
return}if(w.e){w.a.ahX(w.c)
return}if(w.f)w.a.b9Y(w.c)},
$S:0}
C.eCC.prototype={
$0(){this.a.O4(this.b)
return null},
$S:0}
C.eCD.prototype={
$0(){return this.a.a34(this.b.a)},
$S:0}
C.eCE.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eCA(u,d,w.c,w.d))
v.If()
v.oC()
v.pI()},
$S:19}
C.eCA.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eCF.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eCH.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.heZ(w))u.a.O4(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b9Y(v)},
$S:0}
C.eCG.prototype={
$0(){return this.a.a34(this.b.a)},
$S:0}
C.eCI.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eCz(w.b,d,w.c,w.d))
v.If()
v.oC()
v.pI()},
$S:19}
C.eCz.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.j.E(v.w+u*0.15,10,120)},
$S:0}
C.eCJ.prototype={
$1(d){var w=this.a
w.m(new C.eCy(this.b,d))
w.If()
w.oC()
w.pI()},
$S:203}
C.eCy.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.E(w.e*v,0.04,1.8)
w.f=A.j.E(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.j.E(w.w*v,10,120)},
$S:0}
C.eCK.prototype={
$0(){var w=this.a
w.m(new C.eCx(this.b))
w.If()
w.oC()
w.pI()},
$S:0}
C.eCx.prototype={
$0(){this.a.r=C.hBN()},
$S:0}
C.eCL.prototype={
$0(){return this.a.a34(this.b.a)},
$S:0}
C.eEF.prototype={
$0(){var w=this.a
return w.m(new C.eEE(w))},
$S:0}
C.eEE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEG.prototype={
$1(d){return this.a.cI_(this.b.a,d)},
$S:2}
C.eDK.prototype={
$1(d){var w
this.a.da(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.eDL.prototype={
$1(d){return this.a.$1(new C.eDJ(this.b,d))},
$S:6}
C.eDJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDM.prototype={
$1(d){return this.a.$1(new C.eDI(this.b,d))},
$S:6}
C.eDI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDN.prototype={
$1(d){return this.a.$1(new C.eDH(this.b,d))},
$S:6}
C.eDH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDO.prototype={
$1(d){return this.a.$1(new C.eDG(this.b,d))},
$S:6}
C.eDG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eDP.prototype={
$1(d){return this.a.$1(new C.eDF(this.b,d))},
$S:6}
C.eDF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDQ.prototype={
$1(d){return this.b.$1(new C.eDE(this.a,this.c))},
$S:9}
C.eDE.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eDR.prototype={
$1(d){return this.b.$1(new C.eDD(this.a,this.c))},
$S:9}
C.eDD.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDS.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bl:A.d0
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDC(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:348}
C.eDC.prototype={
$0(){return this.a.$1(new C.eDz(this.b,this.c))},
$S:0}
C.eDz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eDT.prototype={
$1(d){return this.a.$1(new C.eDB(this.b,d))},
$S:1727}
C.eDB.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eDU.prototype={
$1(d){var w=null
return B.aA(w,B.q(w,w,A.f,w,w,new B.p(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDA(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:348}
C.eDA.prototype={
$0(){return this.a.$1(new C.eDy(this.b,this.c))},
$S:0}
C.eDy.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eDV.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pW()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eO()}v.a.auj()},
$S:0}
C.eDY.prototype={
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
r.push(B.ap(2,B.q(n,B.X(A.uT,u,n,n,n,10),A.f,n,n,new B.p(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nF,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aP(!1,m,!0,B.eJ(new B.a5(48,48,new B.an(A.A,n,A.ad,A.t,r,n),n),n,new B.p(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:142}
C.eBx.prototype={
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
return B.aJ(!1,A.a3,!0,p,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.p(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.m,p,A.ba,A.i,0,A.p),p,new B.p(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GN,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:142}
C.eFC.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.asf,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.eFA(d),w,w),B.bI(A.r7,w,new C.eFB(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eFA.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFB.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d9V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.e4.aA(0,A.j.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dH.aA(0,i)
v=B.m(22)
t=B.ar(A.aM,A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.18+w*0.12),A.I,32+w*10),D.aes],s)
q=B.m(22)
p=x.O
o=B.ap(k,B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c_(A.b7,0.9,A.x,k,0,B.a([A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.p(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gan(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kL(m)?D.v5:L.nJ
s=B.a([new B.ac(0,A.G,A.d.gH(C.kL(m)?D.v5:L.nJ).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.q(k,B.X(C.kL(j.a.c.w)?A.wy:A.qJ,A.c,k,k,k,22),A.f,k,k,new B.p(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ad,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fK,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fvX,A.K,k,k),A.ax,B.d(j.gcCO(),k,k,k,k,k,k,D.fAP,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gT7()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kL(j.a.c.w)?D.v5:L.nJ).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.KE(A.z4,"Download PDF","pdf",A.d5,j.Jw(0),!1,k))
p=j.a.c
if(!p.z||p.gT7()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KE(A.jI,"Transfer to "+C.hBP(p==null?"":p),"transfer_hati",A.aY,j.Jw(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jw(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.KE(D.bPI,"Rename presentation","rename",A.cg,n,!1,k),A.an,new C.KE(A.aoz,"Duplicate","duplicate",A.b8,j.Jw(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.U)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.KE(A.eg,"Delete presentation","delete",A.ay,j.Jw(p),!0,k))
s.push(A.ax)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jw(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jw(n)
s.push(B.dP(B.da(B.bM(!1,E.aWj,k,k,!0,k,k,k,new C.d9U(d),k,B.ft(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bEx,k,k,k,k,k,A.kx,k,k)),n),new B.o(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.q(k,B.by(q,new B.an(A.a0,k,A.ad,A.t,B.a([o,new B.D(D.bDG,B.x(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Xq,new B.p(A.as,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.d9U.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dai.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.daj.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d9S.prototype={
$1(d){var w=this.a
return w.m(new C.d9O(w))},
$S:23}
C.d9O.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d9T.prototype={
$1(d){var w=this.a
return w.m(new C.d9N(w))},
$S:71}
C.d9N.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9R.prototype={
$0(){var w=this.a
return w.m(new C.d9P(w))},
$S:0}
C.d9P.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eIh.prototype={
$0(){return $.bmG=!$.bmG},
$S:0}
C.eI7.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXs())u.azq()},
$S:0}
C.eIg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eI8.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eI9.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azq()},
$S:0}
C.eI3.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eI4.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eI5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eI6.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eIe.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1728}
C.eIf.prototype={
$2(d,e){var w
if(e.gc5(e)===A.io)return new B.d0(e,!1,d,null)
w=this.a
return w.cAI(w.e,d,e)},
$S:479}
C.eIa.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIb.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIc.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eId.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fw(A.aa,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIi.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZM().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZM().x
t===$&&B.c()
return new C.b3b(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JC(v.c,t,!0,new B.bO("cine"+u,x.W))},
$S:670}
C.eIk.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.c1,x.w).w.a.a*0.55)w.azq()
else w.cp1()},
$S:71}
C.eIj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fTl.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:404}
C.fTu.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.fTr(d),w,w),B.bM(!1,D.fUd,w,w,!0,w,w,w,new C.fTs(d,this.b,v),w,w),B.bI(A.aWC,w,new C.fTt(d,v,this.c),w)],x.p),w,w,P.ub,new B.a5(320,w,t,w),w,w,w,w,D.fVL,w)},
$S:18}
C.fTr.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fTs.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hfD(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fTt.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRR(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRh(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fTk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckD.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:545}
C.fTq.prototype={
$1(d){return d.aj()},
$S:z+14}
C.foN.prototype={
$1(d){return C.hfB(C.X3(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h1u.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:97}
C.h1v.prototype={
$4(d,e,f,g){var w=A.cw.aA(0,e.gp(0))
return B.da(B.ed(A.A,D.hvZ,0.94+w*0.06,null,null),w)},
$S:431}
C.h1w.prototype={
$1(d){var w=this
return new C.X5(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eHO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHN.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X6(u,this.b,w.gaQz(),v,null)},
$S:z+99}
C.eHL.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHM.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHT.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHU.prototype={
$0(){var w=this.a
return w.m(new C.eHS(w))},
$S:0}
C.eHS.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eHV.prototype={
$0(){var w=this.a
return w.m(new C.eHR(w))},
$S:0}
C.eHR.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eHW.prototype={
$1(d){return this.a.bNt(d,this.b)},
$S:z+100}
C.eHJ.prototype={
$0(){var w=this.a
return w.m(new C.eHI(w,this.b))},
$S:0}
C.eHI.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eHX.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eHY.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eHZ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eI_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eI0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.fhJ)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBr.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBq())},
$S:0}
C.eBq.prototype={
$0(){},
$S:0}
C.eBs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eBn.prototype={
$1(d){return this.a.m(new C.eBm())},
$S:2}
C.eBm.prototype={
$0(){},
$S:0}
C.eBo.prototype={
$1(d){return this.a.b1J()},
$S:2}
C.eBp.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eI2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qs(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eI1(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eI1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fNC.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k1(this.c,new C.fNB(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:235}
C.fNB.prototype={
$3(d,e,f){return new C.JC(e,!1,!1,new B.bO(e.a,x.W))},
$S:z+102}
C.fND.prototype={
$1(d){var w=null
return B.oK(!1,B.at(new C.bxr(this.a,this.b,w),w,w,w),w,x.z)},
$S:287}
C.fNH.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.m9,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qi))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1731}
C.fNI.prototype={
bon(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.he),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eS(A.dN.gaU(r))],"image/png"))
t.toString
s=Ao.h5Z(t)
w=4
return B.b(new B.qp(s,"load",!1,x.ev).gH(0).dg(0,A.jW),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bon(d)},
$S:1732}
C.fNE.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:156}
C.fNF.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:156}
C.fNG.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fiI.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fsl,A.K,w,w)},
$S:1733}
C.fiJ.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.by(v,B.kn(A.bp,w,A.dK,8,w,e===0?w:e,w),A.aq)},
$S:574}
C.epH.prototype={
$1(d){this.a.a00()
return null},
$S:11}
C.epF.prototype={
$0(){return this.a.e=D.bzu},
$S:0}
C.epG.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bD
return this.b.e=w},
$S:0}
C.coT.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.coU.prototype={
$2(d,e){return(d|e)>>>0},
$S:64};(function aliases(){var w=C.aNJ.prototype
w.bzy=w.t
w=C.aNd.prototype
w.bz1=w.t
w=C.aMZ.prototype
w.byM=w.t
w=C.aNc.prototype
w.bz0=w.t
w=C.aNH.prototype
w.bzw=w.t
w=C.aP0.prototype
w.bB0=w.t
w=C.aLU.prototype
w.bxE=w.t
w=C.aNU.prototype
w.bzJ=w.t
w=C.aNV.prototype
w.bzK=w.t
w=C.b4T.prototype
w.bu8=w.aEX})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iol","aoR",104)
v(C.aKQ.prototype,"gc8q","ZT",0)
var r
u(r=C.azm.prototype,"gcC9","cCa",38)
v(r,"gc9f","aey",0)
v(r=C.azi.prototype,"gb05","EA",3)
v(r,"gc9c","c9d",3)
v(r,"gayw","yo",0)
v(r,"gaAz","JO",0)
t(C,"ipi","hU_",105)
v(C.aFt.prototype,"gccg","cch",3)
s(C,"ipt",0,null,["$4$paper$photo$request$template"],["fUL"],106,0)
s(C,"ips",0,null,["$5$doc$history$instruction$photo$template"],["bEA"],107,0)
v(r=C.aFK.prototype,"gcd_","Jt",0)
v(r,"gbMW","XG",0)
v(r,"gcd2","afq",0)
v(r,"gcd1","a_N",0)
v(r,"gb1o","ER",0)
v(C.aFN.prototype,"gcd7","a_P",0)
v(r=C.aHb.prototype,"gb1B","Qz",0)
v(r,"gctU","b5X",3)
v(r,"gcDx","aD6",86)
v(r,"gbQR","abg",0)
v(r,"gcdy","B3",0)
v(r=C.aJ6.prototype,"gcnL","a1a",0)
v(r,"gcnT","a1d",0)
v(r,"gbFM","a9F",0)
v(r,"gcdC","afC",0)
v(C.aJ5.prototype,"gcdD","afD",0)
v(C.aD9.prototype,"gbEL","a9s",0)
v(C.aBw.prototype,"gcdE","a0_",0)
w(C,"ipG","in2",12)
w(C,"ipE","ijW",12)
w(C,"ipF","im0",12)
v(r=C.aG3.prototype,"gcGR","cGS",3)
v(r,"gcs8","cs9",3)
u(r,"gEX","agm",7)
v(r,"gbKz","ats",3)
u(r,"gEY","b2Y",7)
v(r,"gcfU","ag3",0)
v(r,"gceL","ag2",0)
v(r,"gci4","agn",0)
v(r,"gbMT","aaO",0)
v(r,"gciZ","a0B",0)
v(r,"gcj_","agE",0)
v(r,"gcjw","agL",0)
v(r,"gcih","agq",0)
v(r,"gbR2","abk",0)
v(r,"gaUd","aUe",3)
v(r,"gaTj","aTk",3)
v(r,"gaOQ","aOR",3)
v(r,"gaTi","auj",3)
u(r,"gbF1","bF2",80)
v(r,"gaCD","b98",3)
v(r,"gceN","ceO",3)
v(r,"gc1m","c1n",3)
v(r,"gbPl","bPm",3)
v(r=C.aG6.prototype,"gcFD","cFE",3)
v(r,"gcFg","cFh",3)
t(C,"ipH","inj",2)
v(r=C.aG4.prototype,"gcdK","Jy",0)
v(r,"gcvW","S4",0)
v(r,"gcdH","Jx",0)
v(r,"gcIa","a3K",0)
v(r,"gcjI","agS",0)
v(C.aG2.prototype,"gcdL","b1J",3)
v(r=C.aG5.prototype,"gbRT","abu",0)
u(r,"gcdI","cdJ",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oi,C.SN,C.bKb,C.bIt,C.cG8,C.cG6,C.bSq,C.baB,C.cG7,C.bH2,C.coN,C.coL,C.coM,C.coK,C.aum,C.coJ,C.bTs,C.oJ,C.aGF,C.jC,C.o4,C.a8U,C.Aa,C.lx,C.oT,C.mp,C.Ab,C.o8,C.a91,C.asH,C.b3c,C.ep6,C.lu,C.Fr,C.ew,C.jb,C.Fi,C.y9,C.eP,C.m0,C.i3,C.jY,C.a92,C.agd,C.b3d,C.b4T,C.a44])
u(B.jw,[C.cO9,C.c3q,C.fIO,C.cPG,C.cP2,C.fOk,C.e7t,C.e7s,C.epK,C.epJ,C.fPJ,C.fpZ,C.fq_,C.ciS,C.ciT,C.ciU,C.eto,C.f1v,C.f0T,C.f0S,C.f1W,C.f1t,C.f1m,C.f1F,C.f2l,C.fy1,C.f8F,C.f8E,C.f97,C.ep9,C.fTh,C.e2H,C.h_2,C.fQ5,C.ckv,C.ckt,C.cky,C.fQA,C.fQB,C.fQC,C.fQD,C.ckf,C.ckg,C.dPR,C.ckc,C.fQz,C.fg4,C.e0p,C.ck5,C.eoQ,C.fO9,C.eF1,C.eFq,C.eFn,C.eFm,C.eFx,C.eFw,C.eH1,C.eH0,C.eFg,C.eFf,C.eBQ,C.eD_,C.eFZ,C.eHj,C.eHi,C.eCN,C.eDY,C.eBx,C.d9V,C.eIe,C.eIf,C.eIa,C.eIb,C.eIc,C.eId,C.eIi,C.ckD,C.eHO,C.eHZ,C.coU])
u(B.ht,[C.cOa,C.cOb,C.bTt,C.fFE,C.c3p,C.c3s,C.fWw,C.fhe,C.fh5,C.fhl,C.foO,C.foP,C.fIP,C.fIN,C.fVZ,C.fFi,C.fWS,C.cPw,C.cPB,C.cPD,C.cPz,C.cPE,C.cPx,C.cPF,C.cPs,C.cPp,C.cPo,C.cPv,C.cOY,C.cOW,C.fNm,C.fNn,C.ft9,C.fOl,C.fOr,C.fsa,C.cfb,C.fNk,C.fNl,C.fIb,C.fIc,C.fOq,C.fOm,C.fOo,C.fOp,C.fOn,C.h_k,C.fIf,C.fIg,C.fIj,C.fIk,C.fIn,C.fIo,C.h0N,C.fqr,C.h0Y,C.esH,C.esI,C.esJ,C.esp,C.esB,C.esC,C.esE,C.ciR,C.ciP,C.ciQ,C.fO0,C.fO2,C.fO1,C.fq0,C.fq1,C.h10,C.ett,C.etu,C.etl,C.etm,C.etp,C.etq,C.h1g,C.f2m,C.f1M,C.f1w,C.f1J,C.f0O,C.f0P,C.f0Q,C.f0U,C.f0V,C.f2b,C.f2i,C.f2k,C.f1V,C.f1X,C.f20,C.f21,C.f22,C.f26,C.f1Y,C.f1Z,C.f15,C.f16,C.f17,C.f18,C.f19,C.f1a,C.f1b,C.f1c,C.f1d,C.f0r,C.f0s,C.f0t,C.f0u,C.f0w,C.f0x,C.f1_,C.f10,C.f11,C.f12,C.f13,C.f0B,C.f0C,C.f0D,C.f0E,C.f1l,C.f1E,C.fLp,C.fLo,C.ckm,C.fy0,C.fTd,C.fT6,C.fT9,C.fR4,C.fR5,C.fR6,C.fLw,C.fLv,C.fLu,C.fLs,C.fpV,C.fpW,C.fpX,C.h1s,C.f8H,C.f8I,C.f8B,C.f8v,C.f90,C.f91,C.f93,C.f94,C.f9_,C.h1r,C.f8m,C.fxh,C.ep8,C.fTf,C.fTg,C.fTi,C.fTb,C.fTc,C.h0F,C.dsm,C.dss,C.ep7,C.fm2,C.fm4,C.fm3,C.fm1,C.fMA,C.fMC,C.fog,C.fSI,C.fSJ,C.fSK,C.fSV,C.fT_,C.fT0,C.fT1,C.fT2,C.fT3,C.fT4,C.fT5,C.fSL,C.fSM,C.fSN,C.fSO,C.fSP,C.fSQ,C.fSR,C.fSS,C.fST,C.fSU,C.fSW,C.fSX,C.fSY,C.fSZ,C.fKq,C.fwA,C.fwz,C.fTo,C.e2I,C.e2G,C.f7v,C.ceN,C.ceP,C.h_4,C.dhG,C.dhI,C.h_3,C.h_1,C.h1q,C.fQ1,C.dhg,C.fIr,C.fIs,C.ckk,C.ckl,C.ckj,C.ck9,C.cka,C.ck6,C.ck7,C.ck8,C.ckB,C.ckw,C.ckr,C.cks,C.cku,C.ckx,C.ckz,C.fQE,C.cke,C.ckh,C.cki,C.cko,C.ckp,C.fTv,C.fSC,C.ckd,C.ckb,C.fQy,C.fzj,C.ck4,C.f5_,C.fCq,C.eHF,C.eE4,C.eE5,C.eFF,C.eFt,C.eFu,C.eDs,C.eHq,C.eHr,C.eHs,C.eCR,C.eF8,C.eFa,C.eEL,C.eEI,C.eE0,C.eE1,C.eES,C.eCT,C.eF3,C.eF4,C.eF2,C.eF6,C.eF5,C.eFo,C.eFp,C.eFr,C.eFk,C.eDb,C.eD8,C.eFy,C.eD0,C.eHp,C.eBz,C.eD3,C.eD2,C.eCh,C.eCm,C.eCk,C.eCi,C.eHx,C.eHy,C.eHz,C.eHw,C.eH3,C.eH2,C.eGX,C.eGZ,C.eGP,C.eHn,C.eHl,C.eBH,C.eBD,C.eDZ,C.eCq,C.eBS,C.eBR,C.eCd,C.eCe,C.eDq,C.eCs,C.eCw,C.eFh,C.eGQ,C.eGR,C.eGS,C.eGT,C.eCV,C.eCW,C.eCX,C.eEr,C.eDm,C.eDe,C.eDl,C.eEB,C.eEC,C.eGo,C.eGq,C.eGK,C.eGM,C.eGr,C.eGs,C.eCo,C.eE3,C.eE2,C.eHd,C.eCM,C.eCE,C.eCF,C.eCI,C.eCJ,C.eEG,C.eDK,C.eDL,C.eDM,C.eDN,C.eDO,C.eDP,C.eDQ,C.eDR,C.eDS,C.eDT,C.eDU,C.eFC,C.d9S,C.d9T,C.eIk,C.fTl,C.fTu,C.fTk,C.fTq,C.foN,C.h1u,C.h1v,C.h1w,C.eHN,C.eHW,C.eBs,C.eBn,C.eBo,C.fNC,C.fNB,C.fND,C.fNI,C.fNE,C.fNF,C.fiI,C.fiJ,C.epH,C.coT])
u(B.iJ,[C.cOc,C.fha,C.fhf,C.fhg,C.fhb,C.fhc,C.fhd,C.fh3,C.fh4,C.fh6,C.fh7,C.fhk,C.fhj,C.fh9,C.fh8,C.fhh,C.fhi,C.fhn,C.fho,C.fhm,C.cPy,C.cPC,C.cPA,C.cPq,C.cPr,C.cPt,C.cPm,C.cPn,C.cPu,C.cPl,C.cPk,C.cPj,C.cON,C.cOM,C.cOP,C.cOX,C.cOQ,C.cOO,C.cOS,C.cOT,C.cOU,C.cOR,C.cOV,C.cOZ,C.cP_,C.cP0,C.cP1,C.fI9,C.fIa,C.fI7,C.fI8,C.ekY,C.ekW,C.ekX,C.ekZ,C.el_,C.e7r,C.fId,C.fIe,C.fIh,C.fIi,C.fIl,C.fIm,C.epI,C.fQ8,C.fQ7,C.esG,C.esF,C.esj,C.esf,C.esq,C.esr,C.ess,C.esl,C.esm,C.esn,C.eso,C.esk,C.esh,C.esi,C.esy,C.esz,C.esx,C.esA,C.esw,C.esv,C.esu,C.esD,C.est,C.esg,C.ets,C.etg,C.eth,C.etn,C.eti,C.etk,C.etj,C.etr,C.f1e,C.f1C,C.f0Y,C.f0Z,C.f0W,C.f0X,C.f1I,C.f1H,C.f1G,C.f1L,C.f1K,C.f0N,C.f0R,C.f0M,C.f0L,C.f0I,C.f0K,C.f0J,C.f2j,C.f2c,C.f2a,C.f2d,C.f29,C.f2e,C.f28,C.f2f,C.f2g,C.f2h,C.f27,C.f1U,C.f1P,C.f2_,C.f1T,C.f23,C.f1S,C.f24,C.f1R,C.f25,C.f1Q,C.f1z,C.f1y,C.f1A,C.f1x,C.f1B,C.f1r,C.f1q,C.f1s,C.f1p,C.f1o,C.f1n,C.f0v,C.f0q,C.f0F,C.f0A,C.f0G,C.f0z,C.f0H,C.f0y,C.f1u,C.f1i,C.f1h,C.f1j,C.f1g,C.f1k,C.f1f,C.f1D,C.f1O,C.f1N,C.f14,C.fT8,C.fTa,C.fTe,C.fLt,C.fNU,C.fNS,C.fNT,C.f8J,C.f8K,C.f8G,C.f8A,C.f8z,C.f8C,C.f8D,C.f8p,C.f8q,C.f8s,C.f8t,C.f8u,C.f8r,C.f8w,C.f8X,C.f8Y,C.f8W,C.f8Z,C.f8V,C.f8U,C.f8T,C.f92,C.f8S,C.f8R,C.f8Q,C.f95,C.f8P,C.f96,C.f8O,C.f8N,C.f8x,C.f8y,C.f8M,C.f8L,C.f8i,C.f8j,C.f8k,C.f8l,C.f8h,C.f8n,C.f8o,C.dsl,C.dsn,C.dsq,C.dsr,C.dsp,C.dso,C.fMB,C.fKr,C.ceO,C.ceQ,C.dhz,C.dhE,C.dhF,C.dhD,C.dhC,C.dhH,C.dhB,C.dhA,C.dhJ,C.h_0,C.don,C.doo,C.dop,C.fIp,C.fIq,C.ckC,C.eBt,C.eBu,C.eBv,C.eBw,C.fzh,C.fzi,C.e0r,C.e0q,C.det,C.des,C.eHH,C.eHG,C.eE6,C.eGN,C.eHD,C.eFD,C.eHt,C.eHu,C.eHE,C.eEM,C.eCP,C.eCQ,C.eF9,C.eEK,C.eEH,C.eEJ,C.eEN,C.eEO,C.eEP,C.eEQ,C.eER,C.eET,C.eCU,C.eEW,C.eEX,C.eEY,C.eEZ,C.eF_,C.eF0,C.eEV,C.eF7,C.eFl,C.eFj,C.eFs,C.eEU,C.eD9,C.eDa,C.eDc,C.eFv,C.eFz,C.eBO,C.eD7,C.eD5,C.eFH,C.eD1,C.eFG,C.eCS,C.eDt,C.eHo,C.eGO,C.eBP,C.eBM,C.eBC,C.eBy,C.eBA,C.eD4,C.eCg,C.eCl,C.eCj,C.eCf,C.eFi,C.eHA,C.eH_,C.eGV,C.eGW,C.eGY,C.eDX,C.eDW,C.eHm,C.eBF,C.eBG,C.eBI,C.eBJ,C.eBN,C.eBE,C.eFE,C.eHv,C.eE_,C.eCp,C.eBB,C.eDr,C.eBK,C.eBT,C.eBU,C.eBV,C.eC5,C.eC8,C.eC9,C.eCa,C.eCb,C.eCc,C.eBW,C.eBX,C.eBY,C.eBZ,C.eC_,C.eC0,C.eC1,C.eC2,C.eC3,C.eC4,C.eC6,C.eC7,C.eDp,C.eDo,C.eDn,C.eBL,C.eCt,C.eCr,C.eCu,C.eCv,C.eD6,C.eFd,C.eFe,C.eFb,C.eFc,C.eGU,C.eCZ,C.eCY,C.eEq,C.eEp,C.eEs,C.eEo,C.eEt,C.eEn,C.eEu,C.eEm,C.eEv,C.eEl,C.eEw,C.eEk,C.eEx,C.eEj,C.eEy,C.eEi,C.eEb,C.eEc,C.eEd,C.eEa,C.eEe,C.eE9,C.eEf,C.eE8,C.eEg,C.eE7,C.eEh,C.eDj,C.eDk,C.eDd,C.eDf,C.eDg,C.eDh,C.eDi,C.eHB,C.eHC,C.eEA,C.eEz,C.eED,C.eG_,C.eG0,C.eG1,C.eGc,C.eGn,C.eGy,C.eGF,C.eGG,C.eGH,C.eGI,C.eGJ,C.eG2,C.eG3,C.eG4,C.eG5,C.eG6,C.eG7,C.eG8,C.eG9,C.eGa,C.eGb,C.eGd,C.eGe,C.eGf,C.eGg,C.eGh,C.eGi,C.eGj,C.eGk,C.eGl,C.eFQ,C.eGm,C.eFY,C.eFX,C.eGp,C.eFW,C.eFM,C.eGL,C.eFV,C.eFL,C.eFJ,C.eFU,C.eFK,C.eFI,C.eGt,C.eFT,C.eGu,C.eGv,C.eGw,C.eGx,C.eFS,C.eGz,C.eGA,C.eGB,C.eFR,C.eGC,C.eFP,C.eGD,C.eFO,C.eGE,C.eFN,C.eCn,C.eH6,C.eH5,C.eH7,C.eH4,C.eDw,C.eDv,C.eDx,C.eDu,C.eHh,C.eHc,C.eHg,C.eH8,C.eH9,C.eHa,C.eHb,C.eHe,C.eHf,C.eHk,C.eCO,C.eCB,C.eCC,C.eCD,C.eCA,C.eCH,C.eCG,C.eCz,C.eCy,C.eCK,C.eCx,C.eCL,C.eEF,C.eEE,C.eDJ,C.eDI,C.eDH,C.eDG,C.eDF,C.eDE,C.eDD,C.eDC,C.eDz,C.eDB,C.eDA,C.eDy,C.eDV,C.eFA,C.eFB,C.d9U,C.dai,C.daj,C.d9O,C.d9N,C.d9R,C.d9P,C.d9Q,C.eIh,C.eI7,C.eIg,C.eI8,C.eI9,C.eI3,C.eI4,C.eI5,C.eI6,C.eIj,C.fTr,C.fTs,C.fTt,C.eHK,C.eHL,C.eHM,C.eHP,C.eHQ,C.eHT,C.eHU,C.eHS,C.eHV,C.eHR,C.eHJ,C.eHI,C.eHX,C.eHY,C.eI_,C.eI0,C.eBr,C.eBq,C.eBm,C.eBp,C.eI2,C.eI1,C.fNH,C.fNG,C.epF,C.epG])
t(C.aTf,B.M)
u(B.lD,[C.a4N,C.ayO,C.axs,C.y7,C.ya,C.la,C.tM,C.C8,C.rU,C.wu,C.ate,C.JD,C.asG,C.vb,C.mS,C.hF,C.a9F])
u(C.bSq,[C.cG9,C.bSr])
u(C.coN,[C.coR,C.aul])
t(C.coQ,C.coL)
t(C.coP,C.coK)
t(C.coS,C.coP)
t(C.coO,C.coM)
t(C.coI,C.coJ)
t(C.czf,B.awV)
t(C.a9r,B.xV)
u(B.af,[C.a24,C.ZM,C.ZK,C.arN,C.WU,C.WV,C.a13,C.a1A,C.a1z,C.aFE,C.a_X,C.Oj,C.a_u,C.a_P,C.apI,C.aKv,C.Wb,C.aBb,C.a8K,C.ON,C.aAy,C.KE,C.a0G,C.X5,C.X6,C.aG1,C.asL,C.a8L])
u(B.ah,[C.aKQ,C.azm,C.azi,C.aFt,C.aFK,C.aFN,C.aHb,C.aJ6,C.aJ5,C.aNJ,C.aD9,C.aNd,C.aBw,C.bib,C.aMZ,C.aP0,C.aNc,C.bfZ,C.aNH,C.aNU,C.aLU,C.beK,C.aNV,C.aG4,C.bmF,C.aG2,C.aG5,C.bmo])
u(B.ax,[C.azk,C.ael,C.adK,C.blp,C.aeo,C.ag3,C.b2O,C.bv0,C.b38,C.bnW,C.btx,C.b12,C.b3b,C.aer,C.aeI,C.b39,C.JC,C.b15,C.bf_,C.Qw,C.KK,C.bjL,C.bjK,C.bxr])
u(B.I3,[C.ber,C.bwp,C.aLc,C.bhb,C.btW])
u(B.mk,[C.beq,C.baU,C.btT,C.bdZ,C.bhA,C.bjS,C.bgF,C.bhw,C.bhd,C.bqh,C.bc2,C.bbG,C.bxn,C.bul,C.btt,C.bgy,C.b36,C.bsn,C.btq])
t(C.bml,C.aNJ)
t(C.blH,C.aNd)
t(C.blr,C.aMZ)
t(C.bwS,C.aP0)
t(C.blD,C.aNc)
t(C.bmj,C.aNH)
t(C.bzK,C.aNU)
t(C.aG3,C.bzK)
t(C.beL,C.aLU)
t(C.aG6,C.aNV)
t(C.bxd,B.j2)
t(C.a9E,B.kH)
t(C.coV,C.b4T)
t(C.ajl,C.a44)
u(B.YL,[C.aT5,C.aUz])
t(C.ayo,C.aT5)
w(C.aNJ,B.cc)
w(C.aNd,B.cc)
w(C.aMZ,B.cc)
w(C.aNc,B.cc)
w(C.aNH,B.cc)
w(C.aP0,B.cc)
w(C.aLU,B.eQ)
w(C.aNU,B.cc)
v(C.bzK,B.eC)
w(C.aNV,B.cc)})()
B.iT(b.typeUniverse,JSON.parse('{"aTR":{"hM":["aTR"]},"oi":{"aTR":[],"hM":["aTR"]},"aTf":{"M":["SN"],"M.E":"SN"},"a9r":{"xV":[],"oC":[]},"a24":{"af":[],"v":[]},"aKQ":{"ah":["a24"]},"ZM":{"af":[],"v":[]},"ZK":{"af":[],"v":[]},"azm":{"ah":["ZM"]},"azi":{"ah":["ZK"]},"azk":{"ax":[],"v":[]},"arN":{"af":[],"v":[]},"aFt":{"ah":["arN"]},"ael":{"ax":[],"v":[]},"adK":{"ax":[],"v":[]},"aeo":{"ax":[],"v":[]},"ag3":{"ax":[],"v":[]},"blp":{"ax":[],"v":[]},"WU":{"af":[],"v":[]},"aFK":{"ah":["WU"]},"b2O":{"ax":[],"v":[]},"ber":{"aC":[]},"beq":{"aC":[]},"bwp":{"aC":[]},"baU":{"aC":[]},"btT":{"aC":[]},"WV":{"af":[],"v":[]},"aFN":{"ah":["WV"]},"bdZ":{"aC":[]},"a13":{"af":[],"v":[]},"aHb":{"ah":["a13"]},"bhA":{"aC":[]},"a1A":{"af":[],"v":[]},"a1z":{"af":[],"v":[]},"aFE":{"af":[],"v":[]},"a_X":{"af":[],"v":[]},"aJ6":{"ah":["a1A"]},"aJ5":{"ah":["a1z"]},"bml":{"ah":["aFE"]},"bjS":{"aC":[]},"aD9":{"ah":["a_X"]},"bv0":{"ax":[],"v":[]},"b38":{"ax":[],"v":[]},"bnW":{"ax":[],"v":[]},"Oj":{"af":[],"v":[]},"a_u":{"af":[],"v":[]},"blH":{"ah":["Oj"]},"btx":{"ax":[],"v":[]},"bgF":{"aC":[]},"b12":{"ax":[],"v":[]},"aBw":{"ah":["a_u"]},"a_P":{"af":[],"v":[]},"bib":{"ah":["a_P"]},"bhw":{"aC":[]},"bhd":{"aC":[]},"bqh":{"aC":[]},"bc2":{"aC":[]},"bbG":{"aC":[]},"bxn":{"aC":[]},"bul":{"aC":[]},"btt":{"aC":[]},"bgy":{"aC":[]},"apI":{"af":[],"v":[]},"b3b":{"ax":[],"v":[]},"blr":{"ah":["apI"]},"aer":{"ax":[],"v":[]},"aeI":{"ax":[],"v":[]},"aKv":{"af":[],"v":[]},"Wb":{"af":[],"v":[]},"JC":{"ax":[],"v":[]},"aBb":{"af":[],"v":[]},"a8K":{"af":[],"v":[]},"b39":{"ax":[],"v":[]},"b36":{"aC":[]},"bwS":{"ah":["aKv"]},"aLc":{"aC":[]},"blD":{"ah":["Wb"]},"bfZ":{"ah":["aBb"]},"bmj":{"ah":["a8K"]},"b15":{"ax":[],"v":[]},"bhb":{"aC":[]},"bsn":{"aC":[]},"btq":{"aC":[]},"aAy":{"af":[],"v":[]},"KE":{"af":[],"v":[]},"a0G":{"af":[],"v":[]},"KK":{"ax":[],"v":[]},"ON":{"af":[],"v":[]},"aG3":{"ah":["ON"],"eC":[]},"beL":{"ah":["aAy"]},"bf_":{"ax":[],"v":[]},"beK":{"ah":["KE"]},"Qw":{"ax":[],"v":[]},"aG6":{"ah":["a0G"]},"btW":{"aC":[]},"bjL":{"ax":[],"v":[]},"bjK":{"ax":[],"v":[]},"X5":{"af":[],"v":[]},"X6":{"af":[],"v":[]},"aG1":{"af":[],"v":[]},"asL":{"af":[],"v":[]},"aG4":{"ah":["X5"]},"bmF":{"ah":["X6"]},"aG2":{"ah":["aG1"]},"bxd":{"j2":[]},"aG5":{"ah":["asL"]},"bxr":{"ax":[],"v":[]},"a8L":{"af":[],"v":[]},"bmo":{"ah":["a8L"]},"a9E":{"kH":["fv<eV>"],"ku":["fv<eV>"]},"ajl":{"a44":[]},"aT5":{"jf":[],"fi":[]},"ayo":{"jf":[],"fi":[]},"aUz":{"jf":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mv"),U:w("vY<ql>"),bz:w("u"),M:w("df<n>"),bo:w("jS"),g7:w("U9"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("C0"),fS:w("EE"),an:w("IN"),bm:w("O<SN>"),X:w("O<SQ>"),f3:w("O<aTR>"),aK:w("O<nq>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lS>"),d5:w("O<aB<bB<F,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<ny>"),cd:w("O<ai<jC>>"),ez:w("O<a8<n,aE>>"),d:w("O<a8<n,@>>"),B:w("O<mO>"),h:w("O<jC>"),gE:w("O<Aa>"),k:w("O<oJ>"),g:w("O<m0>"),D:w("O<i3>"),u:w("O<eP>"),m:w("O<vb>"),i:w("O<hF>"),aC:w("O<a91>"),o:w("O<Ab>"),e3:w("O<aE>"),dN:w("O<o>"),v:w("O<fT>"),cR:w("O<j0>"),J:w("O<jr>"),gx:w("O<pz<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(I,I)>"),ek:w("O<+(F,n)>"),n:w("O<+(F,F)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j2>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baB>"),bx:w("O<aGF>"),gz:w("O<agd>"),x:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<o?>"),Z:w("O<F?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oJ>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bB<F,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<F,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<o8,n>"),cT:w("N<jY,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<F,q3>"),gh:w("N<mS,jE<mS>>"),w:w("iC"),ei:w("iF"),g2:w("rK"),fB:w("Fi"),b6:w("Aa"),gX:w("a8U"),dt:w("lx"),ea:w("oJ"),bt:w("m0"),I:w("i3"),F:w("eP"),fO:w("mS"),ff:w("vb"),fP:w("hF"),Q:w("wu"),dO:w("asH"),a:w("ct"),C:w("aE"),dw:w("aum"),di:w("a9F"),Y:w("eV"),fz:w("+(n,n)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FO"),dB:w("ds<o>"),bJ:w("ds<n>"),_:w("e_<n>"),N:w("n"),fw:w("ql"),bO:w("au"),K:w("br<o>"),b:w("br<I>"),E:w("dK"),W:w("bO<n>"),ac:w("bO<F>"),ex:w("k1<m0>"),cI:w("k1<n>"),cl:w("k1<I>"),b4:w("Y<lu>"),a8:w("Y<mp>"),fR:w("Y<+(n,n)>"),co:w("e9<o>"),l:w("v"),b2:w("c2<~>"),ev:w("qp<dZ>"),dT:w("bk<~>"),q:w("my"),y:w("P"),gR:w("I"),z:w("@"),S:w("F"),at:w("bd?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i3?"),go:w("b3d?"),a6:w("a92?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1u=new B.bL(A.aA,null,null,H.as0,null)
D.b1D=new B.d9(0,-0.15)
D.b1F=new B.d9(0.62,0)
D.b1I=new B.d9(-0.35,-0.45)
D.b1T=new B.d9(0.9,-0.85)
D.b43=new B.bf(H.Um,H.Um,A.fI,A.fI)
D.b4j=new B.ay(A.b8,1,A.r,-1)
D.bq_=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4v=new B.ay(D.bq_,1,A.r,-1)
D.b4H=new B.ay(A.aE,1.5,A.r,-1)
D.b4M=new B.ay(A.b8,1.6,A.r,-1)
D.b51=new B.ay(A.aE,1.4,A.r,-1)
D.b6o=new B.p(null,null,null,null,null,K.I3,A.a7)
D.c7g=new B.a9(A.a6,A.aa,A.x,G.a5K,null,null)
D.b6w=new B.p(null,null,null,null,null,D.c7g,A.a7)
D.aei=new B.p(A.as,null,null,A.tM,null,null,A.n)
D.biR=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bpX=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d5X=w([D.biR,D.bpX],x.O)
D.eyf=new B.c_(A.A,0.5,A.x,null,0,D.d5X,null,null)
D.b6P=new B.p(null,null,null,null,null,D.eyf,A.a7)
D.Z5=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5h=new B.bH(Q.vO,A.a1,A.a1,A.a1)
D.b6R=new B.p(D.Z5,null,D.b5h,null,null,null,A.n)
D.c8Z=new B.a9(A.a6,A.aa,A.x,A.S_,null,null)
D.b6Y=new B.p(null,null,null,null,null,D.c8Z,A.a7)
D.afV=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b70=new B.p(D.afV,null,null,A.ri,null,null,A.n)
D.b74=new B.p(A.jU,null,null,null,null,null,A.a7)
D.b77=new B.p(A2.aha,null,H.adV,A.mE,null,null,A.n)
D.Fh=new B.p(A.dJ,null,null,null,null,null,A.a7)
D.b7e=new B.p(null,null,null,null,null,E.wQ,A.a7)
D.dbh=w([E.ai9,A.c3],x.O)
D.c8B=new B.a9(A.b7,A.b9,A.x,D.dbh,null,null)
D.b7i=new B.p(null,null,null,A.mE,null,D.c8B,A.n)
D.dmU=w([A.bl,A.dJ,A.jT],x.O)
D.a3K=new B.a9(A.aA,A.aF,A.x,D.dmU,null,null)
D.b7v=new B.p(null,null,null,null,null,D.a3K,A.n)
D.b7w=new B.p(D.afV,null,null,A.l6,null,null,A.n)
D.cAw=w([A.d6,A.bl],x.O)
D.c8s=new B.a9(A.aA,A.aF,A.x,D.cAw,null,null)
D.b7A=new B.p(null,null,null,null,null,D.c8s,A.n)
D.b7K=new B.p(null,null,null,null,null,G.uX,A.a7)
D.b84=new B.p(A.aib,null,null,null,null,null,A.a7)
D.bjS=new B.u(0.5647058823529412,0,0,0,A.q)
D.aes=new B.ac(0,A.G,D.bjS,A.Jr,28)
D.bad=new B.aY2()
D.baM=new C.czf()
D.aeX=new B.cf(A.A,null,null,A.a3z,null)
D.bdE=new B.fk(null,null,null,null,null,E.nx,null,null,null,null)
D.bbx=new B.cf(A.A,null,null,D.bdE,null)
D.bSF=new B.ae(A.ea,28,A.c,null,null,null)
D.bc2=new B.cf(A.A,null,null,D.bSF,null)
D.bdB=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bcp=new B.cf(A.A,null,null,D.bdB,null)
D.bSZ=new B.ae(K.Py,40,A.bC,null,null,null)
D.bcq=new B.cf(A.A,null,null,D.bSZ,null)
D.bew=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.beJ=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bfb=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfn=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bg0=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgh=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgj=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mf=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bgM=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bgU=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agf=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bhL=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biE=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agv=new B.u(1,1,1,0.9725490196078431,A.q)
D.bj_=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bje=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjh=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjy=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjY=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.blD=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YN=new B.u(0.8509803921568627,0,0,0,A.q)
D.blO=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.blV=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahu=new B.u(0.6,0,0,0,A.q)
D.ahw=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bnD=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.u7=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bo6=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.boz=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.boY=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.air=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Zh=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BQ=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MU=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jy=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aiY=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zq=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bsO=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btj=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btz=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZR=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.buM=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yk=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvn=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bvI=new B.hL(A.aV,!0,null,null)
D.fz1=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h__=new B.B("Bio link",null,D.fz1,null,null,null,null,null,null,null,null,null)
D.bck=new B.cf(A.A,null,null,D.h__,null)
D.bvX=new B.hL(A.Bu,!0,D.bck,null)
D.No=new C.a4N(0,"none")
D.ake=new C.a4N(1,"deflate")
D.akf=new C.a4N(2,"bzip2")
D.bwW=new B.kB(0.165,0.84,0.44,1)
D.dbB=w([A.ch,A.dK,A.aE],x.O)
D.c7J=new B.a9(A.aA,A.aF,A.x,D.dbB,null,null)
D.b6t=new B.p(null,null,null,null,null,D.c7J,A.n)
D.c12=new B.ae(A.f4,null,A.ab,null,null,null)
D.bcZ=new B.cf(A.A,null,null,D.c12,null)
D.bxu=new B.l5(D.b6t,A.bi,D.bcZ,null)
D.bt2=new B.u(0.058823529411764705,1,1,1,A.q)
D.df2=w([A.bA,A.rs,A.rs,D.bt2],x.O)
D.cS0=w([0,0.32,0.7,1],x.x)
D.c8i=new B.a9(A.aA,A.aF,A.x,D.df2,D.cS0,null)
D.b6i=new B.p(null,null,null,null,null,D.c8i,A.n)
D.bxA=new B.l5(D.b6i,A.bi,null,null)
D.byI=new B.mF(1,1,null,null,null,A.bp,null)
D.byL=new B.mF(1,null,null,null,null,D.Zq,null)
D.bze=new B.bd(125e4)
D.bzk=new B.bd(17e4)
D.bzu=new B.bd(35964e8)
D.bzB=new B.bd(55e4)
D.bzF=new B.bd(68e4)
D.bA5=new B.ik(0,0,0,5)
D.bAl=new B.R(0,16,16,0)
D.bAw=new B.R(0,36,0,36)
D.bAE=new B.R(0,54,0,0)
D.bAL=new B.R(10,0,10,3)
D.bAX=new B.ik(10,16,10,10)
D.bB8=new B.R(10,6,4,6)
D.bBb=new B.R(10,8,10,6)
D.ale=new B.R(11,8,11,11)
D.bBg=new B.R(12,0,12,24)
D.bBt=new B.R(12,12,12,4)
D.bBw=new B.R(12,12,8,12)
D.bBM=new B.R(12,8,8,12)
D.bCa=new B.R(14,14,14,0)
D.bCf=new B.R(14,14,14,90)
D.bCC=new B.R(16,10,16,16)
D.bCD=new B.R(16,10,16,20)
D.alZ=new B.R(16,6,16,28)
D.bDb=new B.R(18,0,18,10)
D.bDd=new B.R(18,0,18,30)
D.bDf=new B.R(18,10,18,12)
D.bDg=new B.R(18,10,18,14)
D.bDB=new B.R(18,16,14,18)
D.bDG=new B.R(18,18,18,12)
D.bDM=new B.R(18,26,18,12)
D.bDR=new B.R(18,34,18,34)
D.bDS=new B.R(18,4,18,14)
D.bDX=new B.R(18,8,18,24)
D.bEf=new B.R(20,16,14,4)
D.bEk=new B.R(20,18,12,4)
D.bEp=new B.R(20,20,12,20)
D.bEs=new B.R(20,22,20,20)
D.bEx=new B.R(20,6,20,6)
D.bEH=new B.R(22,18,22,18)
D.bEP=new B.R(22,24,22,0)
D.bES=new B.R(22,24,22,4)
D.bF_=new B.R(22,60,22,22)
D.bF5=new B.R(24,24,24,22)
D.bFf=new B.R(26,10,60,10)
D.bFn=new B.R(28,44,28,44)
D.bFE=new B.R(32,44,32,44)
D.bFM=new B.R(38,30,38,20)
D.bFR=new B.R(4,0,0,6)
D.bG2=new B.ik(4,4,4,4)
D.bGv=new B.ik(6,5,6,5)
D.bGA=new B.R(6,6,8,6)
D.bGM=new B.R(8,14,8,14)
D.bGN=new B.R(8,22,8,22)
D.bGW=new B.R(8,6,12,6)
D.bH4=new B.R(8,8,8,4)
D.amU=new B.R(9,9,9,6)
D.bHg=new B.ik(2.5,2.5,2.5,2.5)
D.bHh=new B.R(10.5,0,10.5,0)
D.bHi=new B.R(7,1.5,7,1.5)
D.d2L=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHy=new B.uL(null,null,D.d2L,A.xU)
D.d_w=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHz=new B.uL(null,null,D.d_w,A.xU)
D.aVX=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZh=new B.B("WORD DESIGN",null,D.aVX,null,null,null,null,null,null,null,null,null)
D.bIe=new B.bz(1,A.bc,D.fZh,null)
D.fYW=new B.B("Slides database",null,Ac.vv,null,null,null,null,null,null,null,null,null)
D.fW8=new B.B("Admin only \xb7 keep as many as you like",null,W.aVq,null,null,null,null,null,null,null,null,null)
D.dvH=w([D.fYW,A.bG,D.fW8],x.p)
D.bwn=new B.fj(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dvH,null)
D.bIh=new B.bz(1,A.bc,D.bwn,null)
D.fQj=new B.B("NGMY logo",null,A.fB,null,null,null,null,null,null,null,null,null)
D.bIk=new B.bz(1,A.bc,D.fQj,null)
D.fwI=new B.G(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0k=new B.B("TALK TO THE EDITOR",null,D.fwI,null,null,null,null,null,null,null,null,null)
D.bID=new B.bz(1,A.bc,D.h0k,null)
D.fJX=new B.B("Tell the AI what to change",null,Ac.vv,null,null,null,null,null,null,null,null,null)
D.bIX=new B.bz(1,A.bc,D.fJX,null)
D.bKr=new B.Eu(!0,"video/mp4")
D.fuT=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHT=new B.B("Move presentations between devices",null,D.fuT,null,null,null,!1,null,null,1,null,null)
D.bKv=new B.qH(A.e0,A.a6,A.f,D.fHT,null)
D.fJ7=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bKw=new B.qH(A.e0,A.A,A.f,D.fJ7,null)
D.bKL=new B.dn(1,A.cp,D.bKw,null)
D.a1U=new B.a0(60988,"MaterialIcons",!1)
D.bOc=new B.a0(61352,"MaterialIcons",!1)
D.aoD=new B.a0(61531,"MaterialIcons",!1)
D.bPo=new B.a0(63062,"MaterialIcons",!1)
D.bPv=new B.a0(63109,"MaterialIcons",!1)
D.bPI=new B.a0(63206,"MaterialIcons",!1)
D.apj=new B.a0(63238,"MaterialIcons",!1)
D.bPZ=new B.a0(63338,"MaterialIcons",!1)
D.a2v=new B.a0(63365,"MaterialIcons",!1)
D.a2w=new B.a0(63367,"MaterialIcons",!1)
D.a2x=new B.a0(63368,"MaterialIcons",!1)
D.apv=new B.a0(63384,"MaterialIcons",!1)
D.bQg=new B.a0(63525,"MaterialIcons",!1)
D.bQk=new B.a0(63568,"MaterialIcons",!1)
D.bQF=new B.a0(983072,"MaterialIcons",!1)
D.bR3=new B.a0(983271,"MaterialIcons",!0)
D.aqB=new B.a0(983965,"MaterialIcons",!1)
D.aqC=new B.a0(983966,"MaterialIcons",!1)
D.bS_=new B.a0(984592,"MaterialIcons",!1)
D.bSh=new B.ae(A.uE,16,A.aD,null,null,null)
D.aqO=new B.ae(A.pq,18,A.c,null,null,null)
D.bSG=new B.ae(A.Cu,18,N.lF,null,null,null)
D.bTk=new B.ae(A.jF,11,null,null,null,null)
D.bTv=new B.ae(A.a2c,null,A.eu,null,null,null)
D.bU2=new B.ae(A.rW,18,A.aD,null,null,null)
D.bU8=new B.ae(A5.CM,14,null,null,null,null)
D.bU9=new B.ae(A.eg,28,A.c0,null,null,null)
D.bUl=new B.ae(A.qJ,20,A.c,null,null,null)
D.bUs=new B.ae(A.ze,null,null,null,null,null)
D.bUy=new B.ae(A.jE,18,A.hn,null,null,null)
D.bUD=new B.ae(A.kt,null,null,null,null,null)
D.bPq=new B.a0(63065,"MaterialIcons",!1)
D.bVf=new B.ae(D.bPq,15,A.c,null,null,null)
D.bPw=new B.a0(63113,"MaterialIcons",!1)
D.bVl=new B.ae(D.bPw,null,A.ab,null,null,null)
D.bVJ=new B.ae(A.uC,22,A.bN,null,null,null)
D.bW3=new B.ae(A.rT,18,null,null,null,null)
D.bW9=new B.ae(A.CR,12,A.c,null,null,null)
D.bRC=new B.a0(983687,"MaterialIcons",!1)
D.bWl=new B.ae(D.bRC,null,A.bl,null,null,null)
D.bWu=new B.ae(A.hG,null,A.bl,null,null,null)
D.bWN=new B.ae(A.pv,22,A.c,null,null,null)
D.bWR=new B.ae(A.cz,13,A.c,null,null,null)
D.bWX=new B.ae(A.eg,26,A.ay,null,null,null)
D.bX0=new B.ae(A.rZ,26,A.c,null,null,null)
D.PK=new B.ae(A.jF,8,A.c,null,null,null)
D.bXl=new B.ae(A.pq,40,A.c,null,null,null)
D.bXm=new B.ae(A.bN9,null,null,null,null,null)
D.bXq=new B.ae(A.uP,20,null,null,null,null)
D.bRB=new B.a0(983683,"MaterialIcons",!1)
D.bXA=new B.ae(D.bRB,null,A.b1,null,null,null)
D.bXB=new B.ae(A.jF,16,A.bl,null,null,null)
D.bXW=new B.ae(A.ps,null,null,null,null,null)
D.aro=new B.ae(A.wy,22,A.c,null,null,null)
D.bY1=new B.ae(A.ea,17,A.c,null,null,null)
D.arp=new B.ae(A.jF,9,A.c,null,null,null)
D.bY6=new B.ae(A.wt,null,null,null,null,null)
D.bNq=new B.a0(57744,"MaterialIcons",!1)
D.bYd=new B.ae(D.bNq,null,null,null,null,null)
D.bYg=new B.ae(A.wt,16,null,null,null,null)
D.bS8=new B.a0(985181,"MaterialIcons",!1)
D.HW=new B.ae(D.bS8,null,null,null,null,null)
D.bYs=new B.ae(A.kt,16,A.bN,null,null,null)
D.bRu=new B.a0(983615,"MaterialIcons",!1)
D.bYu=new B.ae(D.bRu,12,A.c,null,null,null)
D.arv=new B.ae(A.z1,16,null,null,null,null)
D.bYC=new B.ae(A.ea,21,A.c,null,null,null)
D.bYH=new B.ae(A.hG,17,A.c,null,null,null)
D.bYI=new B.ae(A.uC,null,null,null,null,null)
D.bYZ=new B.ae(A.a3b,20,A.aD,null,null,null)
D.bZd=new B.ae(A.ou,22,E.nx,null,null,null)
D.bZl=new B.ae(A.qI,13,A.ab,null,null,null)
D.bZo=new B.ae(A.aqo,20,A.aD,null,null,null)
D.bN7=new B.a0(57495,"MaterialIcons",!1)
D.bZt=new B.ae(D.bN7,null,null,null,null,null)
D.bZx=new B.ae(A.ov,18,A.c,null,null,null)
D.bZU=new B.ae(A.uT,28,A.c,null,null,null)
D.c_4=new B.ae(D.apj,null,A.aE,null,null,null)
D.c_5=new B.ae(A.qJ,22,A.c,null,null,null)
D.arE=new B.ae(A.a1Q,16,null,null,null,null)
D.c_R=new B.ae(A.uC,32,A.c,null,null,null)
D.c0z=new B.ae(A.jp,22,A.c,null,null,null)
D.c0C=new B.ae(A.rZ,22,A.ab,null,null,null)
D.arU=new B.ae(A.uE,null,A.bW,null,null,null)
D.c1x=new B.ae(A.qC,18,null,null,null,null)
D.c2a=new B.ae(A.ea,18,A.bk,null,null,null)
D.c2h=new B.ae(A.aqj,null,null,null,null,null)
D.c2I=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVL,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.fmy=new B.G(!0,A.bK,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3_=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fmy,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.c3q=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.d7_=w([A.dJ,A.aE],x.O)
D.c5w=new B.a9(A.a6,A.aa,A.x,D.d7_,null,null)
D.c5H=new B.a9(A.b7,A.b9,A.VX,A.az1,null,null)
D.bf0=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bk_=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnE=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bhC=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cS2=w([D.bf0,D.bk_,D.bnE,D.bhC],x.O)
D.c5Z=new B.a9(A.aA,A.aF,A.x,D.cS2,A.Ir,null)
D.dvQ=w([A.cF,A.bF,A.b8],x.O)
D.c60=new B.a9(A.b7,A.b9,A.VX,D.dvQ,null,null)
D.dxk=w([A.bl,A.cg],x.O)
D.c65=new B.a9(A.a6,A.aa,A.x,D.dxk,null,null)
D.ds0=w([A.hC,A.cZ,A.aw],x.O)
D.c67=new B.a9(A.aA,A.aF,A.x,D.ds0,null,null)
D.ddl=w([A.cG,A.fn],x.O)
D.c6b=new B.a9(A.a6,A.aa,A.x,D.ddl,null,null)
D.dvJ=w([N.lF,A.cZ],x.O)
D.asF=new B.a9(A.a6,A.aa,A.x,D.dvJ,null,null)
D.bkI=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dvG=w([D.bkI,D.yk,A.c4],x.O)
D.c6g=new B.a9(A.a6,A.aa,A.x,D.dvG,null,null)
D.d8K=w([A.b5,A.cX,A.eo],x.O)
D.c6h=new B.a9(A.aA,A.aF,A.x,D.d8K,null,null)
D.Q1=new B.a9(A.a6,A.aa,A.x,A.IF,null,null)
D.btX=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cKZ=w([D.btX,A.c4,A.jA],x.O)
D.asK=new B.a9(A.aA,A.aF,A.x,D.cKZ,null,null)
D.dj6=w([A.u1,A.aC,D.BQ],x.O)
D.c7i=new B.a9(A.a6,A.aa,A.x,D.dj6,null,null)
D.bvo=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.biD=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.boM=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d7Q=w([D.bvo,D.biD,D.boM],x.O)
D.asL=new B.a9(A.a6,A.aa,A.x,D.d7Q,null,null)
D.bkK=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9i=w([AB.ajS,D.bkK],x.O)
D.c7r=new B.a9(A.b7,A.b9,A.x,D.c9i,null,null)
D.d5L=w([A.mN,A.bC],x.O)
D.c7v=new B.a9(A.b7,A.b9,A.x,D.d5L,null,null)
D.doA=w([A.aE,A.dK],x.O)
D.c7B=new B.a9(A.a6,A.aa,A.x,D.doA,null,null)
D.aiF=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAM=w([D.aiF,D.jy,D.Mf],x.O)
D.c82=new B.a9(A.aA,A.aF,A.x,D.aAM,null,null)
D.cKR=w([A.dx,A.dA],x.O)
D.c8d=new B.a9(A.b7,A.b9,A.x,D.cKR,null,null)
D.dlr=w([A.xX,A.y6],x.O)
D.c90=new B.a9(A.a6,A.aa,A.x,D.dlr,null,null)
D.fRV=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c9d=new B.q6(null,D.fRV,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zE=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7I=new C.la(2,"elegantNavy")
D.hDn=w([A.Zf,D.jy,A.c4],x.O)
D.k9=new C.y7(0,"classic")
D.a7x=new C.jC("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7I,4294967035,4279378237,4290283019,D.k9)
D.aKg=new C.la(3,"elegantGold")
D.bev=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bfH=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ah_=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hCQ=w([D.bev,D.bfH,D.ah_],x.O)
D.a7v=new C.jC("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKg,4294966515,4281016592,4289102906,D.k9)
D.dSH=new C.la(22,"goldRibbon")
D.hCM=w([A.Zf,D.jy,A.ir],x.O)
D.a7o=new C.jC("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dSH,4294967035,4279378237,4291404327,D.k9)
D.dSI=new C.la(23,"goldBaroque")
D.ahJ=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hCS=w([D.ahJ,A.aC,A.jA],x.O)
D.a7p=new C.jC("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dSI,4294964964,4283053072,4292128567,D.k9)
D.dSK=new C.la(4,"elegantEmerald")
D.bh1=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bi1=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hCY=w([D.bh1,D.bi1,A.ir],x.O)
D.a7q=new C.jC("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dSK,4294376440,4279122734,4291404327,D.k9)
D.dSL=new C.la(5,"elegantBurgundy")
D.bml=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hD4=w([D.bml,A.ag6,A.ir],x.O)
D.a7t=new C.jC("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dSL,4294965238,4283043359,4291404327,D.k9)
D.dSE=new C.la(19,"goldFiligree")
D.N1=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hCT=w([D.N1,A.aC,A.jA],x.O)
D.a7r=new C.jC("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dSE,4294966259,4279378237,4292128567,D.k9)
D.dSF=new C.la(20,"goldLaurel")
D.btN=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hD5=w([A.M8,A.ir,D.btN],x.O)
D.a7s=new C.jC("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dSF,4294966776,4282000405,4291404327,D.k9)
D.dSG=new C.la(21,"goldCrest")
D.afY=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.btU=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hCV=w([D.afY,A.aC,D.btU],x.O)
D.a7w=new C.jC("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dSG,4294965484,4283053072,4292128567,D.k9)
D.dSJ=new C.la(24,"goldStar")
D.bvf=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hCZ=w([D.bvf,A.aC,D.jy],x.O)
D.a7u=new C.jC("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dSJ,4294966518,4279378237,4292128567,D.k9)
D.I5=w([D.a7x,D.a7v,D.a7o,D.a7p,D.a7q,D.a7t,D.a7r,D.a7s,D.a7w,D.a7u],x.h)
D.qV=new C.mS(0,"blank")
D.TH=new C.mS(1,"title")
D.n6=new C.mS(2,"titleContent")
D.ecj=new C.mS(3,"twoColumn")
D.DU=new C.mS(4,"section")
D.eck=new C.mS(5,"comparison")
D.Jb=new C.mS(6,"flashcard")
D.Jc=new C.mS(7,"quiz")
D.Jd=new C.mS(8,"worksheet")
D.at5=w([D.qV,D.TH,D.n6,D.ecj,D.DU,D.eck,D.Jb,D.Jc,D.Jd],B.as("O<mS>"))
D.aBT=w([Aq.Yy,A.dA],x.O)
D.kX=w([A.c4,A.bN,A.i4,A.i2,D.BQ],x.O)
D.dOu=new C.jb("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBT,D.kX)
D.bu9=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmj=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d5Y=w([D.bu9,D.bmj],x.O)
D.dOl=new C.jb("confetti","Golden Confetti","Together we rise",D.d5Y,D.kX)
D.d2R=w([A.o3,A.Y7],x.O)
D.dOm=new C.jb("crown","Crown of Glory","Built for our community",D.d2R,D.kX)
D.biq=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.blX=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.dad=w([D.biq,D.blX],x.O)
D.uZ=w([A.bK,A.aQ,A.c,A.aO,A.am],x.O)
D.dOg=new C.jb("aurora","Aurora Gala","A brighter future, together",D.dad,D.uZ)
D.bnG=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dlA=w([G.afz,D.bnG],x.O)
D.dOx=new C.jb("champagne","Champagne Toast","Cheers to every member",D.dlA,D.kX)
D.dOy=new C.jb("diamonds","Diamond Rain","Every member is a jewel",A_.aCE,D.uZ)
D.bfv=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blm=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.drd=w([D.bfv,D.blm],x.O)
D.dOb=new C.jb("starburst","Golden Starburst","Thank you!",D.drd,D.kX)
D.c9p=w([A.fm,A.yb],x.O)
D.afJ=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RC=w([A.pb,A.iq,A.w9,A.o4,D.afJ],x.O)
D.dOF=new C.jb("balloons","Luxury Balloons","Let's celebrate",D.c9p,D.RC)
D.d23=w([A.Ym,A.w],x.O)
D.dOt=new C.jb("galaxy","Galaxy Spiral","The sky is not the limit",D.d23,D.uZ)
D.bs_=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dhP=w([A.ko,D.bs_],x.O)
D.dOo=new C.jb("redcarpet","Red Carpet","Tonight we shine",D.dhP,D.kX)
D.bpu=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnp=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dmz=w([D.bpu,D.bnp],x.O)
D.dOd=new C.jb("coins","Gold Coin Rain","Every contribution counts",D.dmz,D.kX)
D.du3=w([A.dx,A.i1],x.O)
D.dOj=new C.jb("lanterns","Sky Lanterns","Lighting the way together",D.du3,D.kX)
D.bjE=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d_S=w([A.yd,D.bjE],x.O)
D.dOf=new C.jb("hearts","Floating Hearts","Made with love",D.d_S,D.RC)
D.bg9=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bh8=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dvE=w([D.bg9,D.bh8],x.O)
D.dOE=new C.jb("petals","Rose Petals","Thank you, from our hearts",D.dvE,D.RC)
D.bt0=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.drz=w([A.le,D.bt0],x.O)
D.dOa=new C.jb("butterflies","Golden Butterflies","New beginnings",D.drz,D.kX)
D.boI=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d0W=w([D.boI,A.w],x.O)
D.dOw=new C.jb("neon","Neon Night","Let's go!",D.d0W,D.uZ)
D.bl_=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.doM=w([A.MC,D.bl_],x.O)
D.dOz=new C.jb("disco","Disco Ball","Party time",D.doM,D.uZ)
D.bpj=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dog=w([A.hC,D.bpj],x.O)
D.dOe=new C.jb("sunrise","Golden Sunrise","A new day for our community",D.dog,D.kX)
D.dnS=w([A.rw,A.dA],x.O)
D.dOA=new C.jb("pearls","Ocean Pearls","Deep roots, bright future",D.dnS,D.uZ)
D.bix=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.do5=w([D.bix,A.dA],x.O)
D.dOD=new C.jb("snow","Winter Gala","Warm wishes to all",D.do5,D.uZ)
D.beE=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bfV=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dux=w([D.beE,D.bfV],x.O)
D.dOs=new C.jb("laurel","Laurel Victory","We did it together",D.dux,D.kX)
D.beu=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.blT=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cZR=w([D.beu,D.blT],x.O)
D.dOC=new C.jb("ribbons","Silk Ribbons","Elegance in every step",D.cZR,D.kX)
D.bn4=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cKO=w([G.BP,D.bn4],x.O)
D.dOp=new C.jb("kente","Kente Pride","Proud of our roots",D.cKO,D.kX)
D.bqa=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bto=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dbZ=w([D.bqa,D.bto],x.O)
D.dOk=new C.jb("trophy","Trophy Shine","Winners together",D.dbZ,D.kX)
D.doc=w([Ar.Mm,A.w],x.O)
D.dOc=new C.jb("shooting","Shooting Stars","Make a wish",D.doc,D.uZ)
D.beN=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajD=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.duQ=w([D.beN,D.ajD],x.O)
D.dOq=new C.jb("bokeh","Golden Bokeh","Shine bright",D.duQ,D.kX)
D.bfd=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.diG=w([D.bfd,A.w],x.O)
D.dOi=new C.jb("orbits","Golden Orbits","Always moving forward",D.diG,D.kX)
D.bt1=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.deV=w([A.agV,D.bt1],x.O)
D.dOn=new C.jb("flowers","Blooming Garden","Growing together",D.deV,D.RC)
D.beZ=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bfM=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dtu=w([D.beZ,D.bfM],x.O)
D.dOh=new C.jb("music","Music Party","Celebrate with us",D.dtu,D.uZ)
D.bgN=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.btQ=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d05=w([D.bgN,D.btQ],x.O)
D.dOB=new C.jb("mandala","Royal Mandala","Harmony and unity",D.d05,D.kX)
D.df0=w([G.BP,D.ajD],x.O)
D.dOv=new C.jb("sparklers","Golden Sparklers","Light up the night",D.df0,D.kX)
D.dOr=new C.jb("city","City Lights","The whole city celebrates",D.aBT,D.kX)
D.Ie=w([D.dOu,D.dOl,D.dOm,D.dOg,D.dOx,D.dOy,D.dOb,D.dOF,D.dOt,D.dOo,D.dOd,D.dOj,D.dOf,D.dOE,D.dOa,D.dOw,D.dOz,D.dOe,D.dOA,D.dOD,D.dOs,D.dOC,D.dOp,D.dOk,D.dOc,D.dOq,D.dOi,D.dOn,D.dOh,D.dOB,D.dOv,D.dOr],B.as("O<jb>"))
D.eEd=new B.y("","No ring")
D.eUH=new B.y("platinum","Platinum")
D.eQJ=new B.y("glow","Glow")
D.eHY=new B.y("double","Double line")
D.eGR=new B.y("framed","Gallery frame")
D.eDK=new B.y("rosegold","Rose gold")
D.eRy=new B.y("jewels","Jeweled")
D.eO8=new B.y("aurora","Aurora")
D.Da=w([D.eEd,A.Us,D.eUH,D.eQJ,M.aR2,D.eHY,A.aR0,D.eGR,D.eDK,D.eRy,D.eO8],x.L)
D.ctZ=w([D.a7r,D.a7s,D.a7w,D.a7o,D.a7p,D.a7u],x.h)
D.bYQ=new B.ae(G.aod,16,null,null,null,null)
D.b9B=new B.vY(A.bn,D.bYQ,null,x.U)
D.bNz=new B.a0(58027,"MaterialIcons",!1)
D.bSn=new B.ae(D.bNz,16,null,null,null,null)
D.b9z=new B.vY(A.K,D.bSn,null,x.U)
D.bNA=new B.a0(58030,"MaterialIcons",!1)
D.bWs=new B.ae(D.bNA,16,null,null,null,null)
D.b9C=new B.vY(A.dY,D.bWs,null,x.U)
D.cAg=w([D.b9B,D.b9z,D.b9C],B.as("O<vY<ql>>"))
D.cI3=w([A.BU,A.hB],x.O)
D.cI4=w([A.b5,A.bg,A.eo],x.O)
D.Rr=w([A.bN,A.i2,A.i4,A.aC,A.o4],x.O)
D.cKU=w([A.c4,D.jy,D.Mf],x.O)
D.cLr=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eBx=new B.y(4278913286,4280030216)
D.eBP=new B.y(4279373061,4278518787)
D.eBW=new B.y(4279898630,4278847235)
D.dbl=w([D.eBx,D.eBP,D.eBW],x.n)
D.d6J=w(["\u265b","\u269c","\u2726"],x.s)
D.dSC=new C.y9("Royal Onyx & Gold",D.dbl,4292128567,4294370209,4294965479,3874020544,D.d6J)
D.eBk=new B.y(4278326799,4278598442)
D.eBm=new B.y(4278395929,4278258953)
D.eBt=new B.y(4278599728,4278327826)
D.dtV=w([D.eBk,D.eBm,D.eBt],x.n)
D.d0O=w(["\u269c","\u2756","\u2727"],x.s)
D.dSz=new C.y9("Imperial Emerald",D.dtV,4293050997,4294699968,4294180856,3872254170,D.d0O)
D.eBn=new B.y(4278455076,4278918747)
D.eBs=new B.y(4278587439,4278322714)
D.eBG=new B.y(4279051376,4278455076)
D.drX=w([D.eBn,D.eBs,D.eBG],x.n)
D.djq=w(["\u2654","\u2726","\u2748"],x.s)
D.dSt=new C.y9("Sapphire Crown",D.drX,4291417834,4294967295,4294310143,3871986666,D.djq)
D.eBU=new B.y(4279894534,4283041554)
D.eC5=new B.y(4281008906,4279042307)
D.eCd=new B.y(4284221976,4279894534)
D.dy_=w([D.eBU,D.eC5,D.eCd],x.n)
D.d2c=w(["\u265b","\u2766","\u2726"],x.s)
D.dSv=new C.y9("Ruby Throne",D.dy_,4293378685,4294963145,4294964466,3874213833,D.d2c)
D.eBO=new B.y(4279371039,4281995100)
D.eBY=new B.y(4280092723,4278714896)
D.eCa=new B.y(4283045242,4279371039)
D.duh=w([D.eBO,D.eBY,D.eCa],x.n)
D.dsj=w(["\u2655","\u2756","\u2727"],x.s)
D.dSA=new C.y9("Amethyst Palace",D.duh,4293314984,4294963421,4294702591,3873229802,D.dsj)
D.eBp=new B.y(4278519045,4280032287)
D.eBH=new B.y(4279111184,4278321666)
D.eC2=new B.y(4280492839,4278716426)
D.dqH=w([D.eBp,D.eBH,D.eC2],x.n)
D.dhB=w(["\u2726","\u25c6","\u2742"],x.s)
D.dSx=new C.y9("Obsidian & Platinum",D.dqH,4293256418,4294967295,4294638330,3872378836,D.dhB)
D.eBV=new B.y(4279896588,4282194463)
D.eC3=new B.y(4280553487,4279043334)
D.eCb=new B.y(4283048488,4279896588)
D.dh0=w([D.eBV,D.eC3,D.eCb],x.n)
D.dw6=w(["\u2766","\u273f","\u2727"],x.s)
D.dSu=new C.y9("Rose Gold Velvet",D.dh0,4293440672,4294960345,4294964979,3874214602,D.dw6)
D.eBq=new B.y(4278520340,4279180595)
D.eBv=new B.y(4278718495,4278322443)
D.eBS=new B.y(4279510591,4278520340)
D.cRJ=w([D.eBq,D.eBv,D.eBS],x.n)
D.dik=w(["\u269c","\u2736","\u2756"],x.s)
D.dSy=new C.y9("Midnight Brass",D.cRJ,4291405148,4293975208,4294439914,3872837564,D.dik)
D.eCq=new B.y(4294703086,4293780428)
D.eCm=new B.y(4294307549,4293187253)
D.eCr=new B.y(4294966517,4293977807)
D.d4z=w([D.eCq,D.eCm,D.eCr],x.n)
D.diK=w(["\u269c","\u265b","\u2726"],x.s)
D.dSB=new C.y9("Ivory Marble & Gold",D.d4z,4289760572,4286209048,4280951062,3863625518,D.diK)
D.eBB=new B.y(4278978566,4280555024)
D.eBR=new B.y(4279504137,4278518530)
D.eC7=new B.y(4281211923,4278978566)
D.d22=w([D.eBB,D.eBR,D.eC7],x.n)
D.dt4=w(["\u2742","\u2726","\u265c"],x.s)
D.dSw=new C.y9("Onyx & Copper",D.d22,4291856987,4294365880,4294964718,3873885630,D.dt4)
D.cLz=w([D.dSC,D.dSz,D.dSt,D.dSv,D.dSA,D.dSx,D.dSu,D.dSy,D.dSB,D.dSw],B.as("O<y9>"))
D.cNW=w([A.aC,D.BQ,A.i2],x.O)
D.eKd=new B.y("Original",null)
D.eKn=new B.y("Wide 16:9",1.7777777777777777)
D.eML=new B.y("Landscape 3:2",1.5)
D.eJE=new B.y("Photo 4:3",1.3333333333333333)
D.eYC=new B.y("Portrait 3:4",0.75)
D.aza=w([D.eKd,D.eKn,D.eML,D.eJE,M.aQR,D.eYC],B.as("O<+(n,I?)>"))
D.azb=w([A.i2,A.bU,A.bb,A.br],x.O)
D.eMX=new B.y("","Original")
D.eOS=new B.y("circle","Circle")
D.eVv=new B.y("rounded","Rounded")
D.eWv=new B.y("triangle","Triangle")
D.eR_=new B.y("hexagon","Hexagon")
D.ePi=new B.y("diamond","Diamond")
D.eO7=new B.y("arch","Arch")
D.Dh=w([D.eMX,D.eOS,D.eVv,D.eWv,D.eR_,D.ePi,D.eO7],x.L)
D.dNA=new C.lu("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kO,A.d6,A.aM)
D.dNQ=new C.lu("campus_green","Campus Green","Normal",A.b1,A.nt,A.u3,A.h8,A.ee)
D.dNH=new C.lu("warm_sand","Warm Sand","Normal",A.dW,A.i4,A.bN,A.i6,A.oa)
D.dNO=new C.lu("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aO,A.S,A.aM)
D.dNz=new C.lu("coral_fresh","Coral Fresh","Normal",A.ch,A.i3,A.q3,A.kp,A.tX)
D.dNP=new C.lu("lavender_calm","Lavender Calm","Normal",A.b8,A.q6,A.y4,A.of,A.kl)
D.dNB=new C.lu("ocean_breeze","Ocean Breeze","Normal",A.fn,A.rE,A.tT,A.tZ,A.ob)
D.aiN=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dNM=new C.lu("berry_pop","Berry Pop","Normal",A.fc,D.aiN,A.kK,G.ZO,A.BV)
D.dNC=new C.lu("midnight_pro","Midnight Pro","Professional",A.aE,A.S,A.dx,A.kK,A.ct)
D.dNL=new C.lu("executive_navy","Executive Navy","Professional",A.d5,A.ahX,A.d6,A.lc,A.bK)
D.dNJ=new C.lu("boardroom_charcoal","Boardroom Charcoal","Professional",A.am,A.bp,A.S,A.aQ,A.ct)
D.dND=new C.lu("corporate_steel","Corporate Steel","Professional",A.od,A.S,A.mP,A.fE,A.bK)
D.dNG=new C.lu("gold_luxe","Gold Luxe","Luxury",A.mJ,A.dT,A.pa,A.m2,A.bN)
D.bpo=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dNK=new C.lu("rose_gold_elite","Rose Gold Elite","Luxury",A.hB,D.bpo,A.Zx,A.iq,A.o4)
D.dNN=new C.lu("platinum_night","Platinum Night","Luxury",A.ct,A.dA,A.bp,A.aQ,A.aO)
D.dNR=new C.lu("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qa,A.eT,A.qj,A.jR)
D.dNy=new C.lu("royal_purple","Royal Purple","Luxury",A.nr,A.YE,A.kl,A.kK,A.M7)
D.dNI=new C.lu("neon_pitch","Neon Pitch","Bold",A.bb,A.dA,A.S,A.b0,A.aO)
D.dNF=new C.lu("crimson_impact","Crimson Impact","Bold",A.bC,A.ko,A.et,A.rF,A.eS)
D.dNE=new C.lu("sunset_gallery","Sunset Gallery","Bold",A.fo,A.tX,A.kp,A.q3,A.mO)
D.In=w([D.dNA,D.dNQ,D.dNH,D.dNO,D.dNz,D.dNP,D.dNB,D.dNM,D.dNC,D.dNL,D.dNJ,D.dND,D.dNG,D.dNK,D.dNN,D.dNR,D.dNy,D.dNI,D.dNF,D.dNE],B.as("O<lu>"))
D.cZB=w([A.c4,D.jy],x.O)
D.dhk=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eNT=new B.y("Faces & people",D.dhk)
D.cO_=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eA9=new B.y("Ideas & work",D.cO_)
D.d7e=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eR4=new B.y("Nature",D.d7e)
D.dht=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eKb=new B.y("Places & things",D.dht)
D.daT=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eOc=new B.y("Symbols",D.daT)
D.cZH=w([D.eNT,D.eA9,D.eR4,D.eKb,D.eOc],B.as("O<+(n,ai<n>)>"))
D.bf3=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d_1=w([A.c4,D.ah_,D.bf3],x.O)
D.b8V=new B.ac(0,A.G,A.M4,A.aL6,40)
D.b8B=new B.ac(0,A.G,A.o8,A.er,8)
D.d_e=w([D.b8V,D.b8B],x.V)
D.d_M=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azz=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4X=w([A.i2,A.eo,A.bC,A.as,A.ch],x.O)
D.d0I=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ahe=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d0T=w([A.Zo,D.ahe,A.Zo],x.O)
D.d0Y=w([A.ir,D.jy,D.Mf],x.O)
D.eJY=new B.y(A.bn,D.a2w)
D.eLq=new B.y(A.K,D.a2v)
D.eF_=new B.y(A.dY,D.a2x)
D.d1Y=w([D.eJY,D.eLq,D.eF_],B.as("O<+(ql,a0)>"))
D.cW=new C.JD(0,"text")
D.lR=new C.JD(1,"image")
D.fh=new C.JD(2,"shape")
D.TG=new C.JD(3,"pdf")
D.lr=new C.JD(4,"signature")
D.a7S=new C.JD(5,"bio")
D.d2X=w([D.cW,D.lR,D.fh,D.TG,D.lr,D.a7S],B.as("O<JD>"))
D.d2Y=w([A.bs,A.cH],B.as("O<Iv>"))
D.d3D=w(["School","Documents","Sign & present"],x.s)
D.b9_=new B.ac(0,A.G,A.ajs,A.vj,28)
D.d41=w([D.b9_],x.V)
D.d4k=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RL=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aA_=w([A.i2,A.Gl,A.aO,A.c,A.pb,A.aC],x.O)
D.eY_=new B.y(0.1,0.08)
D.eR2=new B.y(0.3,0.05)
D.eEs=new B.y(0.55,0.1)
D.eIU=new B.y(0.8,0.06)
D.eMb=new B.y(0.92,0.16)
D.eLF=new B.y(0.2,0.2)
D.eJo=new B.y(0.7,0.22)
D.ePF=new B.y(0.05,0.4)
D.eMD=new B.y(0.95,0.45)
D.eFf=new B.y(0.12,0.7)
D.eHC=new B.y(0.88,0.75)
D.eHK=new B.y(0.4,0.9)
D.eCI=new B.y(0.65,0.93)
D.eIx=new B.y(0.25,0.97)
D.eJV=new B.y(0.85,0.9)
D.eGa=new B.y(0.5,0.04)
D.d5T=w([D.eY_,D.eR2,D.eEs,D.eIU,D.eMb,D.eLF,D.eJo,D.ePF,D.eMD,D.eFf,D.eHC,D.eHK,D.eCI,D.eIx,D.eJV,D.eGa],x.G)
D.d61=w([A.c,A.hB,A.aI,A.aY],x.O)
D.edW=new C.jY("office_blue","Office Blue",A.bl,A.d6,A.aM,A.c,A.kO)
D.ee6=new C.jY("campus_green","Campus Green",A.b1,A.h8,A.ee,A.nt,A.u3)
D.edX=new C.jY("sunset","Sunset",A.fo,A.kp,A.oa,A.i3,A.q3)
D.edY=new C.jY("midnight","Midnight",A.aE,A.kK,A.ct,A.S,A.dx)
D.ee8=new C.jY("classic","Classic",A.cZ,A.dT,A.m3,A.i4,A.fY)
D.ee5=new C.jY("rose_gold","Rose Gold",A.hB,A.ye,A.yd,A.w9,A.BU)
D.edR=new C.jY("ocean_teal","Ocean Teal",A.fn,A.tZ,A.ob,A.rE,A.tT)
D.edQ=new C.jY("slate_pro","Slate Pro",A.bv,A.S,A.aM,A.aQ,A.aO)
D.edP=new C.jY("neon_night","Neon Night",A.bb,A.b0,A.aO,A.dA,A.S)
D.ee0=new C.jY("lavender","Lavender",A.b8,A.of,A.kl,A.q6,A.y4)
D.ee2=new C.jY("coral","Coral",A.ch,A.kp,A.tX,A.i3,A.mO)
D.edS=new C.jY("forest","Forest",A.hm,A.e3,A.cu,A.m4,A.eu)
D.edT=new C.jY("berry","Berry",A.fc,G.ZO,A.BV,D.aiN,A.kK)
D.ee_=new C.jY("sand","Sand",A.dW,A.i6,A.oa,A.i4,A.bN)
D.ee4=new C.jY("ice","Ice",A.od,A.FS,A.aM,A.nn,A.fE)
D.edV=new C.jY("charcoal","Charcoal",A.am,A.aQ,A.ct,A.bp,A.S)
D.edO=new C.jY("mint","Mint",A.aY,A.fP,A.h8,A.m4,A.qj)
D.ee3=new C.jY("crimson","Crimson",A.bC,A.mN,A.ko,A.Gj,A.rF)
D.bi0=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.edZ=new C.jY("gold","Gold",A.mJ,A.xX,A.pa,D.bi0,A.m2)
D.ee1=new C.jY("aqua","Aqua",A.bT,A.G4,A.p7,A.q7,A.pc)
D.edU=new C.jY("plum","Plum",A.nr,A.yb,A.BV,A.FT,A.rA)
D.ee7=new C.jY("steel","Steel",A.d5,A.d6,A.bp,A.kO,A.lc)
D.a5b=w([D.edW,D.ee6,D.edX,D.edY,D.ee8,D.ee5,D.edR,D.edQ,D.edP,D.ee0,D.ee2,D.edS,D.edT,D.ee_,D.ee4,D.edV,D.edO,D.ee3,D.edZ,D.ee1,D.edU,D.ee7],B.as("O<jY>"))
D.d6o=w([A.c4,A.jA],x.O)
D.TI=new C.hF(10,"rotate3d")
D.Jf=new C.hF(8,"flip")
D.aKz=new C.hF(19,"spiral")
D.qW=new C.hF(16,"bounce")
D.aKC=new C.hF(9,"flipVertical")
D.d6p=w([D.TI,D.Jf,D.aKz,D.qW,D.aKC],x.i)
D.ek=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d6M=w([0.62,1],x.x)
D.d7o=w([0,0.32,0.68,1],x.x)
D.n7=new C.hF(6,"zoom")
D.vd=new C.hF(4,"slideUp")
D.vc=new C.hF(2,"slideLeft")
D.d7y=w([D.n7,D.Jf,D.vd,D.TI,D.vc],x.i)
D.d83=w([A.bU,A.hB,A.iq,A.i2,A.c],x.O)
D.b8Q=new B.ac(0,A.G,D.ahu,A.vj,30)
D.d8Q=w([D.b8Q],x.V)
D.epr=new B.o(0,-2.5)
D.eph=new B.o(-2.5,0)
D.ent=new B.o(2.5,0)
D.d8T=w([A.TW,A.a8j,A.aLK,A.a8i,D.epr,O.aLG,D.eph,D.ent],x.dN)
D.It=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9q=w([23,114,69,56,80,144],x.t)
D.d9U=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.dam=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dc3=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dc8=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bj=new C.vb(0,"rectangle")
D.eY=new C.vb(1,"circle")
D.ls=new C.vb(6,"hexagon")
D.dco=w([D.bj,D.eY,D.ls],x.m)
D.oK=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aiX=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dcX=w([D.aiX,A.e3],x.O)
D.eEJ=new B.y("","Classic")
D.eCX=new B.y("caps","Bold caps")
D.ePI=new B.y("elegant","Elegant")
D.eVP=new B.y("shadow","Shadow")
D.eJh=new B.y("neon","Neon glow")
D.eTv=new B.y("marker","Highlighter")
D.eW2=new B.y("stamp","Stamp")
D.eI9=new B.y("threed","3D")
D.eQe=new B.y("fire","Fire")
D.eRe=new B.y("ice","Ice")
D.eOR=new B.y("chalk","Chalk")
D.eOW=new B.y("comic","Comic")
D.eXk=new B.y("softglow","Soft glow")
D.eSh=new B.y("lowercase","Lowercase")
D.ePq=new B.y("double","Echo")
D.eXu=new B.y("whisper","Whisper")
D.aAX=w([D.eEJ,D.eCX,D.ePI,D.eVP,D.eJh,M.aR1,D.eTv,D.eW2,M.aR3,D.eI9,M.aQW,D.eQe,D.eRe,D.eOR,D.eOW,A.Us,Au.aR4,D.eXk,D.eSh,D.ePq,D.eXu],x.L)
D.def=w([3,5,7,10,12,15],x.t)
D.dfQ=w([A.bU,A.bN,A.c,A.eK,A.cF],x.O)
D.dF3=new C.tM(10,"cardWorld")
D.DN=new C.C8(3,"rounded")
D.dVC=new C.lx("world","NGMY World",D.dF3,D.DN,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dF4=new C.tM(11,"cardSplit")
D.dVy=new C.lx("business","Business Wire",D.dF4,D.DN,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dF5=new C.tM(12,"cardBreaking")
D.dVL=new C.lx("breaking","Breaking Red",D.dF5,D.DN,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dF6=new C.tM(13,"cardFeature")
D.dVE=new C.lx("feature","Tech Feature",D.dF6,D.DN,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJc=new C.tM(6,"circle")
D.aJ6=new C.C8(4,"circle")
D.dVI=new C.lx("parchment","Royal Circle",D.aJc,D.aJ6,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dVx=new C.lx("ocean","Blue Ocean",D.aJc,D.aJ6,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dF9=new C.tM(7,"rail")
D.aJ5=new C.C8(1,"double")
D.dVz=new C.lx("forest","Green Leaf",D.dF9,D.aJ5,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJ9=new C.tM(1,"sideBySide")
D.dVN=new C.lx("herald","NGMY Herald",D.aJ9,D.DN,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJ8=new C.tM(0,"classic")
D.a73=new C.C8(9,"shadow")
D.dVM=new C.lx("daily","The Daily",D.aJ8,D.a73,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dF7=new C.tM(2,"splash")
D.aJ7=new C.C8(6,"cutCorner")
D.dVw=new C.lx("tabloid","Big Tabloid",D.dF7,D.aJ7,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJd=new C.tM(9,"minimal")
D.dVH=new C.lx("modern","Modern Digest",D.aJd,D.DN,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJa=new C.tM(3,"magazine")
D.aJ4=new C.C8(0,"plain")
D.dVD=new C.lx("midnight","Midnight Edition",D.aJa,D.aJ4,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dFa=new C.tM(8,"banner")
D.dVF=new C.lx("metro","Metro Wire",D.dFa,D.aJ7,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dF2=new C.C8(8,"arch")
D.dVG=new C.lx("sunrise","Sunrise Post",D.aJa,D.dF2,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJb=new C.tM(5,"scrapbook")
D.dF1=new C.C8(5,"tape")
D.dVB=new C.lx("neon","Neon Beat",D.aJb,D.dF1,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dF8=new C.tM(4,"wrap")
D.dVO=new C.lx("gold","Golden Press",D.dF8,D.a73,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dVP=new C.lx("minimal","Paper White",D.aJd,D.a73,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dVA=new C.lx("gazette","Fresh Gazette",D.aJ8,D.aJ5,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dVK=new C.lx("times","Classic Times",D.aJ9,D.aJ4,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Td=new C.C8(2,"polaroid")
D.dVJ=new C.lx("scrapbook","Memory Scrapbook",D.aJb,D.Td,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5s=w([D.dVC,D.dVy,D.dVL,D.dVE,D.dVI,D.dVx,D.dVz,D.dVN,D.dVM,D.dVw,D.dVH,D.dVD,D.dVF,D.dVG,D.dVB,D.dVO,D.dVP,D.dVA,D.dVK,D.dVJ],B.as("O<lx>"))
D.dg1=w([0.45,1],x.x)
D.Ix=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dgr=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hxH=new C.oT("Original",0,1,1,0,0,0)
D.hxL=new C.oT("Black & white",0,1.1,0,0,0,0)
D.hxy=new C.oT("Noir",-0.05,1.55,0,0,0,0)
D.hxC=new C.oT("Sepia",0,1,0.25,0.9,0,0)
D.hxB=new C.oT("Vivid",0,1.15,1.6,0,0,0)
D.hxu=new C.oT("Pop",0,1.3,1.9,0,0,0)
D.hxw=new C.oT("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hxI=new C.oT("Matte",0,0.9,0.85,0,0,0.55)
D.hxD=new C.oT("Cool",0,1.05,1,-0.8,0,0)
D.hxK=new C.oT("Warm",0.03,1.05,1.1,0.8,0,0)
D.hxv=new C.oT("Golden hour",0.04,1,1.25,1,0,0)
D.hxA=new C.oT("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hxJ=new C.oT("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hxz=new C.oT("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hxF=new C.oT("Retro",0,0.9,0.7,0.4,0,0.35)
D.hxE=new C.oT("Forest",0,1,1.2,-0.1,-0.45,0)
D.hxG=new C.oT("Rose",0,1,1.1,0.3,0.4,0)
D.hxx=new C.oT("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgs=w([D.hxH,D.hxL,D.hxy,D.hxC,D.hxB,D.hxu,D.hxw,D.hxI,D.hxD,D.hxK,D.hxv,D.hxA,D.hxJ,D.hxz,D.hxF,D.hxE,D.hxG,D.hxx],B.as("O<oT>"))
D.bep=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dgu=w([D.aiX,A.e3,D.bep],x.O)
D.eA2=new B.y(0.12,0.3)
D.eRp=new B.y(0.26,0.75)
D.ePE=new B.y(0.8,0.22)
D.eWe=new B.y(0.9,0.7)
D.eSg=new B.y(0.5,0.15)
D.eUp=new B.y(0.65,0.85)
D.eGH=new B.y(0.08,0.85)
D.dgK=w([D.eA2,D.eRp,D.ePE,D.eWe,D.eSg,D.eUp,D.eGH],x.G)
D.aB9=w([A.bb,A.bU,A.br,A.b5],x.O)
D.dhF=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dhS=w([A.c,A.fE,A.du,A.vZ],x.O)
D.big=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.diW=w([D.big,D.ahe],x.O)
D.diY=w([A.u1,A.aC],x.O)
D.djd=w([0,0.25,0.75,1],x.x)
D.djf=w([A.y0,A.pb],x.O)
D.aK9=new C.la(10,"kenteSunset")
D.hCO=w([D.ahJ,A.kj,A.aC],x.O)
D.dQP=new C.jC("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aK9,4294964964,4282000405,4279983648,D.k9)
D.aKa=new C.la(11,"indigoMudcloth")
D.bfB=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hD1=w([D.bfB,A.ahb,A.ir],x.O)
D.dQX=new C.jC("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aKa,4294439140,4279903102,4279903102,D.k9)
D.aKb=new C.la(12,"adinkraRoyal")
D.buB=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hD2=w([D.afY,D.buB,A.aC],x.O)
D.dQZ=new C.jC("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aKb,4294965484,4285218591,4287322667,D.k9)
D.aKc=new C.la(13,"nileLotus")
D.bqw=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmF=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hD7=w([D.bqw,D.bmF,A.ir],x.O)
D.dQY=new C.jC("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKc,4294244340,4279196764,4279196764,D.k9)
D.aKd=new C.la(14,"shweshweIvory")
D.bkw=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bj6=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bg8=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hCP=w([D.bkw,D.bj6,D.bg8],x.O)
D.dQU=new C.jC("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKd,4294505710,4279970378,4291058750,D.k9)
D.te=new C.la(15,"certIvoryNavy")
D.hCN=w([D.N1,D.jy,A.ir],x.O)
D.aJK=new C.y7(1,"ringsNdoa")
D.dQR=new C.jC("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.te,4294966259,4279378237,4291404327,D.aJK)
D.a7z=new C.y7(2,"coupleCards")
D.dQM=new C.jC("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.te,4294966259,4279378237,4291404327,D.a7z)
D.DQ=new C.la(18,"certIvoryNavyBar")
D.afX=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hD0=w([D.afX,D.jy,A.ir],x.O)
D.aJL=new C.y7(3,"kuhoweshaForm")
D.dQK=new C.jC("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DQ,4294966519,4279378237,4291404327,D.aJL)
D.ahs=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hDk=w([D.N1,D.ahs,A.ir],x.O)
D.a7A=new C.y7(4,"mahariPande")
D.dQN=new C.jC("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.te,4294966259,4279904068,4291404327,D.a7A)
D.aKe=new C.la(16,"certIvoryGreen")
D.bjP=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hCR=w([A.M8,D.bjP,A.ir],x.O)
D.aJM=new C.y7(5,"familiaMti")
D.dQT=new C.jC("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKe,4294966776,4280241466,4291404327,D.aJM)
D.a7B=new C.y7(6,"ndoaSafi")
D.dQL=new C.jC("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DQ,4294966519,4279378237,4291404327,D.a7B)
D.boH=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hCU=w([D.N1,A.ir,D.boH],x.O)
D.a7C=new C.y7(7,"peteWide")
D.dQQ=new C.jC("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.te,4294966259,4282001936,4291404327,D.a7C)
D.dR_=new C.y7(8,"muhuriCrest")
D.dQJ=new C.jC("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.te,4294966259,4279378237,4291404327,D.dR_)
D.hD3=w([D.afX,D.ahs,A.ir],x.O)
D.dR0=new C.y7(9,"fomuWazi")
D.dQW=new C.jC("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DQ,4294966519,4279904068,4291404327,D.dR0)
D.aKf=new C.la(17,"certIvoryRose")
D.bkB=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hD6=w([D.bkB,D.air,A.ir],x.O)
D.a7y=new C.y7(10,"upendoOrnate")
D.dQS=new C.jC("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKf,4294965493,4286200650,4291404327,D.a7y)
D.djH=w([D.dQP,D.dQX,D.dQZ,D.dQY,D.dQU,D.dQR,D.dQM,D.dQK,D.dQN,D.dQT,D.dQL,D.dQQ,D.dQJ,D.dQW,D.dQS],x.h)
D.el=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jg=new C.wu(0,"emojis")
D.DW=new C.wu(1,"pictures")
D.Jh=new C.wu(2,"icons3d")
D.a7U=new C.wu(3,"animations")
D.TK=new C.wu(4,"videoMotion")
D.DX=new C.wu(5,"luxe")
D.a5z=w([D.Jg,D.DW,D.Jh,D.a7U,D.TK,D.DX],B.as("O<wu>"))
D.eV2=new B.y(A.ea,"Looks")
D.eIN=new B.y(A.D2,"Light")
D.eIK=new B.y(A.mh,"Colour")
D.eGI=new B.y(A.ww,"Effects")
D.ape=new B.a0(63112,"MaterialIcons",!1)
D.eDc=new B.y(D.ape,"Crop")
D.dkf=w([D.eV2,D.eIN,D.eIK,D.eGI,D.eDc],x.f2)
D.dkX=w([],x.D)
D.hDh=w([],x.L)
D.eGW=new B.y("Flashcard",D.Jb)
D.eKQ=new B.y("Quiz",D.Jc)
D.eMS=new B.y("Worksheet",D.Jd)
D.eJQ=new B.y("Notes",D.n6)
D.eLo=new B.y("Section",D.DU)
D.dlG=w([D.eGW,D.eKQ,D.eMS,D.eJQ,D.eLo],B.as("O<+(n,mS)>"))
D.dSM=new C.la(6,"beadedPearl")
D.bnu=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hDl=w([H.Zw,D.bnu,A.ir],x.O)
D.aJI=new C.jC("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dSM,4294966774,4286209070,4291404327,D.k9)
D.dSN=new C.la(7,"artDeco")
D.brU=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.buW=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hDj=w([D.brU,D.buW,A.c4],x.O)
D.aJJ=new C.jC("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dSN,4294440434,4280228630,4290283019,D.k9)
D.dSO=new C.la(8,"rosetteCorners")
D.bu2=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bil=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bnn=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hCX=w([D.bu2,D.bil,D.bnn],x.O)
D.aJH=new C.jC("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dSO,4294702831,4285218602,4291394365,D.k9)
D.dSP=new C.la(9,"modernLedger")
D.hCW=w([A.c,D.jy,D.jy],x.O)
D.aJG=new C.jC("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dSP,4294967295,4279378237,4279378237,D.k9)
D.dlK=w([D.aJI,D.aJJ,D.aJH,D.aJG],x.h)
D.dlU=w([A.iq,A.pb],x.O)
D.cs=new C.hF(0,"none")
D.dk=new C.hF(1,"fade")
D.Je=new C.hF(3,"slideRight")
D.aKB=new C.hF(5,"slideDown")
D.ecq=new C.hF(7,"zoomOut")
D.a7T=new C.hF(11,"cube")
D.ecl=new C.hF(12,"blur")
D.aKy=new C.hF(13,"dissolve")
D.ecm=new C.hF(14,"wipeLeft")
D.ecn=new C.hF(15,"wipeRight")
D.TJ=new C.hF(17,"push")
D.eco=new C.hF(18,"flash")
D.aKA=new C.hF(20,"swing")
D.ecp=new C.hF(21,"curtain")
D.Sk=w([D.cs,D.dk,D.vc,D.Je,D.vd,D.aKB,D.n7,D.ecq,D.Jf,D.aKC,D.TI,D.a7T,D.ecl,D.aKy,D.ecm,D.ecn,D.qW,D.TJ,D.eco,D.aKz,D.aKA,D.ecp],x.i)
D.Sl=w([D.a7x,D.a7v,D.a7o,D.a7p,D.a7q,D.a7t,D.a7r,D.a7s,D.a7w,D.a7u,D.aJI,D.aJJ,D.aJH,D.aJG],x.h)
D.dmg=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dmn=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dmr=w([A.u4,A.i2,A.c4],x.O)
D.eI3=new B.y(A.uH,"Design")
D.eWE=new B.y(D.apv,"Word sizes")
D.eS_=new B.y(A.CZ,"Text")
D.bQU=new B.a0(983182,"MaterialIcons",!1)
D.eS4=new B.y(D.bQU,"Photo")
D.eCL=new B.y(A.ll,"Logo")
D.eXY=new B.y(A.HT,"News")
D.dmx=w([D.eI3,D.eWE,D.eS_,D.eS4,D.eCL,D.eXY],x.f2)
D.dmy=w(["golddust","sparkle","sheen"],x.s)
D.edN=new C.ew("upload_pdf",K.Py,"Upload PDF")
D.ecX=new C.ew("sign_paper",A.HQ,"Sign Paper")
D.bQ9=new B.a0(63438,"MaterialIcons",!1)
D.edJ=new C.ew("hd_photo",D.bQ9,"HD Photo")
D.ecP=new C.ew("sharpen",E.a2f,"Sharpen")
D.ecZ=new C.ew("print",K.Py,"Download PDF")
D.edq=new C.ew("rotate",D.ape,"Rotate")
D.ed7=new C.ew("text_box",A.CZ,"Text Box")
D.ed9=new C.ew("picture",A.uL,"Picture")
D.ed5=new C.ew("title",A.wK,"Title")
D.ed1=new C.ew("subtitle",V.aq5,"Subtitle")
D.edz=new C.ew("bullets",I.a2y,"Bullet List")
D.ed2=new C.ew("numbered",A.Pl,"Numbered")
D.edC=new C.ew("quote",A5.CM,"Quote")
D.ede=new C.ew("citation",A.ou,"Citation")
D.edF=new C.ew("date_stamp",Aj.a2j,"Date Stamp")
D.eds=new C.ew("page_number",A.zl,"Page #")
D.edw=new C.ew("header_bar",A.zn,"Header")
D.ed8=new C.ew("footer_bar",Av.a36,"Footer")
D.ecY=new C.ew("divider",A.rX,"Divider")
D.ecU=new C.ew("highlight",A.a2B,"Highlight")
D.edy=new C.ew("redact",A.uU,"Redact")
D.edl=new C.ew("callout",A.CD,"Callout")
D.edH=new C.ew("checkboxes",I.aox,"Checklist")
D.edi=new C.ew("table",A.a34,"Table")
D.edc=new C.ew("memo",I.a2O,"Memo")
D.edm=new C.ew("letter",A.HF,"Letter")
D.bPN=new B.a0(63259,"MaterialIcons",!0)
D.ecO=new C.ew("agenda",D.bPN,"Agenda")
D.ed_=new C.ew("toc",AE.apI,"Contents")
D.bQ5=new B.a0(63406,"MaterialIcons",!1)
D.edj=new C.ew("sig_line",D.bQ5,"Sign Line")
D.ecH=new C.ew("initial_line",A.j2,"Initials")
D.ecK=new C.ew("approved",A.ll,"APPROVED")
D.edo=new C.ew("draft",A.pv,"DRAFT")
D.edu=new C.ew("confidential",A.jF,"Confidential")
D.edx=new C.ew("sticky",A.PE,"Sticky Note")
D.edG=new C.ew("progress",A.apH,"Progress")
D.bRj=new B.a0(983507,"MaterialIcons",!1)
D.ecV=new C.ew("stars",D.bRj,"Star Rating")
D.ecF=new C.ew("equation",A.apx,"Equation")
D.ecQ=new C.ew("timeline",A.a35,"Timeline")
D.edd=new C.ew("two_col",A.a37,"Two Columns")
D.ecS=new C.ew("compare",AA.a2n,"Compare")
D.ecD=new C.ew("duplicate_el",A.fU,"Duplicate")
D.edL=new C.ew("delete_el",A.eg,"Delete")
D.edB=new C.ew("bring_fwd",H.apr,"Bring Front")
D.ecI=new C.ew("send_back",H.apq,"Send Back")
D.edn=new C.ew("align_left",D.a2w,"Align L")
D.edt=new C.ew("align_center",D.a2v,"Align C")
D.edK=new C.ew("align_right",D.a2x,"Align R")
D.ed6=new C.ew("word_count",A4.a1V,"Word Count")
D.ed3=new C.ew("link_text",A.hJ,"Link")
D.edr=new C.ew("phone",A.j3,"Phone")
D.ecT=new C.ew("email",A.CI,"Email")
D.edM=new C.ew("qr_placeholder",A.jH,"QR Placeholder")
D.ecN=new C.ew("rectangle",A6.rV,"Rectangle")
D.edh=new C.ew("circle",A.pl,"Circle")
D.ecJ=new C.ew("arrow",A.jE,"Arrow")
D.edA=new C.ew("line",A.rX,"Line")
D.ecW=new C.ew("triangle",A.a2l,"Triangle")
D.bPU=new B.a0(63318,"MaterialIcons",!1)
D.ed0=new C.ew("grayscale",D.bPU,"Grayscale")
D.eda=new C.ew("brighten",I.aoS,"Brighten")
D.edf=new C.ew("flip_h",A.CL,"Flip H")
D.bQ0=new B.a0(63348,"MaterialIcons",!1)
D.edI=new C.ew("flip_v",D.bQ0,"Flip V")
D.edv=new C.ew("cover_page",A.qD,"Cover Page")
D.ecG=new C.ew("invoice",A.hv,"Invoice")
D.ecR=new C.ew("resume",A.mZ,"Resume")
D.ed4=new C.ew("minutes",A.po,"Minutes")
D.ecL=new C.ew("lab_report",A.PA,"Lab Report")
D.ecM=new C.ew("rubric",A.qG,"Rubric")
D.edg=new C.ew("flashcard_tool",X.HN,"Flashcard")
D.edD=new C.ew("quiz_tool",A.HK,"Quiz Block")
D.edk=new C.ew("worksheet_tool",P.Hl,"Worksheet")
D.edp=new C.ew("outline_share",A.PC,"Share Outline")
D.edE=new C.ew("export_json",D.aoD,"Export JSON")
D.ecE=new C.ew("new_slide",D.a1U,"New Slide")
D.edb=new C.ew("present",A.qJ,"Present")
D.dn3=w([D.edN,D.ecX,D.edJ,D.ecP,D.ecZ,D.edq,D.ed7,D.ed9,D.ed5,D.ed1,D.edz,D.ed2,D.edC,D.ede,D.edF,D.eds,D.edw,D.ed8,D.ecY,D.ecU,D.edy,D.edl,D.edH,D.edi,D.edc,D.edm,D.ecO,D.ed_,D.edj,D.ecH,D.ecK,D.edo,D.edu,D.edx,D.edG,D.ecV,D.ecF,D.ecQ,D.edd,D.ecS,D.ecD,D.edL,D.edB,D.ecI,D.edn,D.edt,D.edK,D.ed6,D.ed3,D.edr,D.ecT,D.edM,D.ecN,D.edh,D.ecJ,D.edA,D.ecW,D.ed0,D.eda,D.edf,D.edI,D.edv,D.ecG,D.ecR,D.ed4,D.ecL,D.ecM,D.edg,D.edD,D.edk,D.edp,D.edE,D.ecE,D.edb],B.as("O<ew>"))
D.dnd=w([A.ct,A.am],x.O)
D.eCh=new B.y(4286331629,4292552567)
D.eC4=new B.y(4280640491,4278630100)
D.eCp=new B.y(4294538006,4292943176)
D.eBr=new B.y(4278556265,4280640491)
D.dgW=w([D.eCh,D.eC4,D.eCp,D.eBr],x.n)
D.cE4=w([4294626325,4280472558,4294210230],x.t)
D.ecy=new C.o8("colorful","Colorful",A.mh,D.dgW,4294967295,3875536895,D.cE4,D.n7)
D.eBT=new B.y(4279522093,4279657780)
D.eC8=new B.y(4281750292,4283268111)
D.eBu=new B.y(4278603323,4279203438)
D.eC9=new B.y(4282343954,4279599165)
D.cPd=w([D.eBT,D.eC8,D.eBu,D.eC9],x.n)
D.cDN=w([4288931381,4294829706,4287033260],x.t)
D.ecu=new C.o8("nature","Nature",A.HR,D.cPd,4294442727,3874290891,D.cDN,D.dk)
D.eBN=new B.y(4279369771,4283178389)
D.eBK=new B.y(4279179050,4286456526)
D.eC0=new B.y(4280163147,4290648157)
D.eBj=new B.y(4278322711,4285343961)
D.d6D=w([D.eBN,D.eBK,D.eC0,D.eBj],x.n)
D.cE0=w([4294210230,4280472558,4289170426],x.t)
D.ecs=new C.o8("vibe","Vibe",A.Pp,D.d6D,4294967295,3874869502,D.cE0,D.vc)
D.eCl=new B.y(4290007817,4292552567)
D.eCf=new B.y(4286328082,4294286859)
D.eCk=new B.y(4288485197,4294538006)
D.eCe=new B.y(4285343961,4293675161)
D.c9S=w([D.eCl,D.eCf,D.eCk,D.eCe],x.n)
D.cE5=w([4294829706,4294967295,4284999929],x.t)
D.ect=new C.o8("celebration","Celebration",A.kt,D.c9S,4294967295,4009752557,D.cE5,D.qW)
D.eBI=new B.y(4279179050,4280171146)
D.eBM=new B.y(4279310375,4280232247)
D.eBA=new B.y(4278916151,4280172719)
D.eBJ=new B.y(4279179050,4281549141)
D.cZV=w([D.eBI,D.eBM,D.eBA,D.eBJ],x.n)
D.cDI=w([4281908728,4294626325,4287931320],x.t)
D.ecx=new C.o8("professional","Professional",A.CB,D.cZV,4294967295,3872118241,D.cDI,D.TJ)
D.eBE=new B.y(4278995566,4278413729)
D.eBw=new B.y(4278727492,4279137424)
D.eC1=new B.y(4280171146,4278751666)
D.eBF=new B.y(4278995566,4279590517)
D.cHW=w([D.eBE,D.eBw,D.eC1,D.eBF],x.n)
D.cDL=w([4286436348,4284410580,4294829706],x.t)
D.ecz=new C.o8("ocean","Ocean",I.a39,D.cHW,4294967295,3873501950,D.cDL,D.vd)
D.eCg=new B.y(4286328082,4294538006)
D.eCi=new B.y(4286781507,4294677052)
D.eCc=new B.y(4283178389,4294197086)
D.eCj=new B.y(4288295954,4294688548)
D.cW7=w([D.eCg,D.eCi,D.eCc,D.eCj],x.n)
D.cE6=w([4294829706,4294967295,4294747557],x.t)
D.ecA=new C.o8("sunset","Sunset",A.PH,D.cW7,4294967295,4009749973,D.cE6,D.dk)
D.eCt=new B.y(4294967295,4294047225)
D.eCo=new B.y(4294507260,4294967295)
D.eCs=new B.y(4294967295,4293060848)
D.eCn=new B.y(4294507260,4294047225)
D.da_=w([D.eCt,D.eCo,D.eCs,D.eCn],x.n)
D.cDG=w([4280640491,4279179050,4287931320],x.t)
D.ecw=new C.o8("minimal","Minimal",A6.rV,D.da_,4279179050,4282865001,D.cDG,D.dk)
D.eBD=new B.y(4278979081,4280886564)
D.eBX=new B.y(4280031511,4278979081)
D.eBL=new B.y(4279308561,4281148438)
D.eBC=new B.y(4278979081,4280031511)
D.dpf=w([D.eBD,D.eBX,D.eBL,D.eBC],x.n)
D.cDU=w([4292128567,4294829706,4289241758],x.t)
D.ecB=new C.o8("elegant","Elegant",A.mi,D.dpf,4294898631,3873957348,D.cDU,D.aKy)
D.eBZ=new B.y(4280159034,4282058596)
D.eBz=new B.y(4278916151,4280163147)
D.eC6=new B.y(4281208933,4278916151)
D.eBQ=new B.y(4279502891,4283178389)
D.dwL=w([D.eBZ,D.eBz,D.eC6,D.eBQ],x.n)
D.cE2=w([4294296657,4292128567,4291081725],x.t)
D.ecv=new C.o8("royal","Royal Gold",A.jp,D.dwL,4294965222,3874084351,D.cE2,D.n7)
D.eBo=new B.y(4278464302,4280163147)
D.eBy=new B.y(4278916151,4279455306)
D.eC_=new B.y(4280163147,4283040846)
D.eBl=new B.y(4278332450,4281413249)
D.dgx=w([D.eBo,D.eBy,D.eC_,D.eBl],x.n)
D.cDH=w([4281193663,4289170426,4294210230],x.t)
D.ecC=new C.o8("aurora","Aurora Glow",A.ea,D.dgx,4293983738,3869766608,D.cDH,D.dk)
D.wU=w([D.ecy,D.ecu,D.ecs,D.ect,D.ecx,D.ecz,D.ecA,D.ecw,D.ecB,D.ecv,D.ecC],B.as("O<o8>"))
D.bo4=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dnN=w([A.rs,D.bo4,A.rs],x.O)
D.do3=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.do7=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eRS=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eHE=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eMq=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eyO=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eL1=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eJ9=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eNI=new B.y("Surprise me","")
D.doH=w([D.eRS,D.eHE,D.eMq,D.eyO,D.eL1,D.eJ9,D.eNI],x.L)
D.bga=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsr=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dpv=w([A.c,D.bga,D.bsr],x.O)
D.drM=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aK7=new C.la(0,"heritageGold")
D.bmp=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hDm=w([D.bmp,A0.ahE,A.aC],x.O)
D.dQV=new C.jC("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aK7,4294570461,4284234270,4292128567,D.k9)
D.aK8=new C.la(1,"heritageCrimson")
D.bek=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bky=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bsd=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hD_=w([D.bek,D.bky,D.bsd],x.O)
D.dQO=new C.jC("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aK8,4294635750,4285213214,4292912216,D.k9)
D.drR=w([D.a7x,D.a7v,D.dQV,D.dQO,D.a7q,D.a7t],x.h)
D.dWS=new C.rU(1,"circuit")
D.dXk=new C.mp("neural","Neural Link","Robotic",D.dWS,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dWR=new C.rU(0,"grid")
D.dXh=new C.mp("signal","Signal Grid","Robotic",D.dWR,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dWX=new C.rU(2,"hexes")
D.dX2=new C.mp("core","Core Protocol","Robotic",D.dWX,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKv=new C.rU(11,"diagonal")
D.dXd=new C.mp("steel","Steel Tech","Robotic",D.aKv,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKw=new C.rU(3,"rings")
D.dX1=new C.mp("vault","Vault Gold","Robotic",D.aKw,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dWV=new C.rU(13,"leaves")
D.dX4=new C.mp("forest","Forest Morning","Nature",D.dWV,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKx=new C.rU(5,"waves")
D.dXb=new C.mp("ocean","Ocean Calm","Nature",D.aKx,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dWY=new C.rU(6,"sunset")
D.dXg=new C.mp("sunset","Sunset Glow","Nature",D.dWY,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dWZ=new C.rU(7,"mountains")
D.dX3=new C.mp("mountain","Mountain Air","Nature",D.dWZ,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dX_=new C.rU(8,"stars")
D.dXa=new C.mp("night","Night Sky","Nature",D.dX_,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7R=new C.rU(4,"orbs")
D.dX8=new C.mp("aurora","Aurora","Nature",D.a7R,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dXi=new C.mp("sand","Sand Dune","Nature",D.aKx,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dX0=new C.rU(9,"rays")
D.dX7=new C.mp("golden","Golden Hour","Warm",D.dX0,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dX5=new C.mp("royal","Royal Purple","Warm",D.aKv,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dX6=new C.mp("rose","Rose Petal","Warm",D.a7R,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dWU=new C.rU(12,"blocks")
D.dX9=new C.mp("electric","Electric Blue","Bold",D.dWU,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dXj=new C.mp("mint","Fresh Mint","Bold",D.a7R,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dWW=new C.rU(14,"minimal")
D.dXf=new C.mp("white","Clean White","Clean",D.dWW,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dWT=new C.rU(10,"frame")
D.dXc=new C.mp("midnight","Midnight Gold","Clean",D.dWT,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dXe=new C.mp("community","Community Green","Clean",D.aKw,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a63=w([D.dXk,D.dXh,D.dX2,D.dXd,D.dX1,D.dX4,D.dXb,D.dXg,D.dX3,D.dXa,D.dX8,D.dXi,D.dX7,D.dX5,D.dX6,D.dX9,D.dXj,D.dXf,D.dXc,D.dXe],B.as("O<mp>"))
D.dse=w([D.BQ,A.u1,A.i2,A.c4],x.O)
D.dsw=w([D.aiF,D.jy],x.O)
D.dsG=w(["pdf","docx","txt","md"],x.s)
D.f1b=new B.b5(-3,150,34)
D.f1c=new B.b5(-3,214,62)
D.f1d=new B.b5(-3,288,62)
D.dtz=w([D.f1b,D.f1c,D.f1d],B.as("O<+(I,I,I)>"))
D.du5=w(["rays","bokeh","aurora","spotlight"],x.s)
D.duO=w(["Write","Design","Print & fold"],x.s)
D.ka=new C.vb(2,"triangle")
D.DV=new C.vb(3,"arrow")
D.fH=new C.vb(4,"line")
D.kb=new C.vb(5,"parallelogram")
D.duR=w([D.bj,D.eY,D.ka,D.DV,D.fH,D.kb,D.ls],x.m)
D.eAi=new B.y(240,96)
D.eD4=new B.y(560,46)
D.duX=w([D.eAi,D.eD4],x.G)
D.hDx=new C.ya(0,"classic")
D.dSS=new C.o4("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aK7,4294570461,4282000405,4284234270)
D.dT3=new C.o4("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aK8,4294635750,4281999378,4285213214)
D.dST=new C.o4("elegant_navy","Umoja Mzuri",y.s,D.a7I,4294967035,4279378237,4290283019)
D.dT5=new C.o4("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKg,4294966515,4281016592,4289102906)
D.dT7=new C.o4("kente_sunset","Kente ya Jua",y.H,D.aK9,4294964964,4282000405,4279983648)
D.dSQ=new C.o4("indigo_mudcloth","Nguo ya Indigo",y.n,D.aKa,4294439140,4279903102,4279903102)
D.dSV=new C.o4("adinkra_royal","Muhuri wa Adinkra",y.z,D.aKb,4294965484,4285218591,4287322667)
D.dT_=new C.o4("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aKc,4294244340,4279196764,4279196764)
D.dT1=new C.o4("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aKd,4294505710,4279970378,4291058750)
D.hDy=new C.ya(1,"ringsNdoa")
D.dSU=new C.o4("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.te,4294966259,4279378237,4291404327)
D.hDA=new C.ya(2,"coupleCards")
D.dT4=new C.o4("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.te,4294966259,4279378237,4291404327)
D.hDB=new C.ya(3,"kuhoweshaForm")
D.dT0=new C.o4("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DQ,4294966519,4279378237,4291404327)
D.hDC=new C.ya(4,"mahariPande")
D.dSR=new C.o4("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.te,4294966259,4279904068,4291404327)
D.hDD=new C.ya(5,"familiaMti")
D.dT6=new C.o4("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKe,4294966776,4280241466,4291404327)
D.hDE=new C.ya(6,"ndoaSafi")
D.dSY=new C.o4("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DQ,4294966519,4279378237,4291404327)
D.hDF=new C.ya(7,"peteWide")
D.dSX=new C.o4("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.te,4294966259,4282001936,4291404327)
D.hDG=new C.ya(8,"muhuriCrest")
D.dSW=new C.o4("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.te,4294966259,4279378237,4291404327)
D.hDH=new C.ya(9,"fomuWazi")
D.dSZ=new C.o4("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DQ,4294966519,4279904068,4291404327)
D.hDz=new C.ya(10,"upendoOrnate")
D.dT2=new C.o4("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKf,4294965493,4286200650,4291404327)
D.SB=w([D.dSS,D.dT3,D.dST,D.dT5,D.dT7,D.dSQ,D.dSV,D.dT_,D.dT1,D.dSU,D.dT4,D.dT0,D.dSR,D.dT6,D.dSY,D.dSX,D.dSW,D.dSZ,D.dT2],B.as("O<o4>"))
D.DT=new C.asG(0,"landscape169")
D.oM=new C.asG(1,"portrait916")
D.dvI=w([D.DT,D.oM],B.as("O<asG>"))
D.aCW=w([A.i2,A.bN,A.cF,A.iq,A.c],x.O)
D.v5=w([A.c4,A.i6],x.O)
D.ezi=new B.y(1000,"M")
D.eEy=new B.y(900,"CM")
D.eCZ=new B.y(500,"D")
D.eBe=new B.y(400,"CD")
D.ezj=new B.y(100,"C")
D.eEz=new B.y(90,"XC")
D.eD_=new B.y(50,"L")
D.eBf=new B.y(40,"XL")
D.ezp=new B.y(10,"X")
D.eEL=new B.y(9,"IX")
D.eDg=new B.y(5,"V")
D.eCK=new B.y(4,"IV")
D.ezW=new B.y(1,"I")
D.dwr=w([D.ezi,D.eEy,D.eCZ,D.eBe,D.ezj,D.eEz,D.eD_,D.eBf,D.ezp,D.eEL,D.eDg,D.eCK,D.ezW],x.ek)
D.f2r=new B.cu(["open",A.j2,"Open & write","Keep writing this book"])
D.f2S=new B.cu(["print",A.uP,"Print as a book","Fold and staple it"])
D.dwC=w([D.f2r,D.f2S],B.as("O<+(n,a0,n,n)>"))
D.dxj=w([D.a7T,D.n7,D.Jf,D.TJ,D.dk,D.TI],x.i)
D.eSC=new B.y(-1,"Small")
D.ez3=new B.y(0,"Normal")
D.ezT=new B.y(1,"Big")
D.eAz=new B.y(2,"Huge")
D.dxT=w([D.eSC,D.ez3,D.ezT,D.eAz],x.ek)
D.dyj=w([49,65,89,38,83,89],x.t)
D.dyp=w([A.u1,A.i2,A.c4],x.O)
D.dyT=w([D.dk,D.n7,D.vc,D.a7T,D.Jf,D.TJ],x.i)
D.aIe=new B.cZ([0,D.No,8,D.ake,12,D.akf],B.as("cZ<F,a4N>"))
D.eiz={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d_5=w([A.bN,H.ajh],x.O)
D.dlp=w([A.b0,A.bl],x.O)
D.dfB=w([A.bU,A.aI,A.bk],x.O)
D.dwD=w([A.ct,A.bv],x.O)
D.d7C=w([A.bb,A.fc],x.O)
D.diw=w([A.b8,A.fm],x.O)
D.bkb=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dhN=w([D.bkb,A.pb],x.O)
D.dbN=w([A.hj,A.y7],x.O)
D.d7p=w([A.bx,A.cg],x.O)
D.dBy=new B.bw(D.eiz,[D.d_5,O.at2,D.dlp,D.dfB,D.dwD,D.d7C,D.diw,D.dhN,D.dbN,D.d7p],B.as("bw<n,ai<u>>"))
D.ehL={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6I=new B.bw(D.ehL,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bw<n,n>"))
D.a6P=new B.bw(A.hY,[],B.as("bw<F,+icon3d,picture(n?,n?)>"))
D.dFN=new F.NN(30,null)
D.dL1=new F.mO("Chapter 1","","","")
D.dvv=w([D.dL1],x.B)
D.dL5=new F.rK("My Book","","",D.dvv,E.aJy)
D.dL3=new F.v1("starry",null,null,null,null,"","","")
D.dL6=new F.rK("Dream Big","","",E.a5H,D.dL3)
D.dL4=new F.v1("story",null,null,null,null,"","","")
D.dL7=new F.rK("Little Lion","","",E.a5H,D.dL4)
D.dL2=new F.v1("vintage",null,null,null,null,"","","")
D.dL8=new F.rK("Our Story","","",E.a5H,D.dL2)
D.dO9=new C.Fi("","NGMY","","")
D.dVv=new C.Aa("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ecr=new C.b3c(null,null,null,null)
D.ee9=new C.asL(null)
D.eek=new C.ate(0,"smaller")
D.eel=new C.ate(1,"bigger")
D.aKM=new C.ate(2,"fit")
D.em8=new B.o(3,6)
D.ems=new B.o(4,8)
D.eqE=new B.D(E.al6,V.afe,null)
D.eqI=new B.D(A.a_Q,A.m0,null)
D.bSE=new B.ae(A.k4,16,A.bW,null,null,null)
D.eqM=new B.D(A.iK,D.bSE,null)
D.bdJ=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.eqY=new B.D(A.GX,D.bdJ,null)
D.c28=new B.ae(A.cz,16,A.aD,null,null,null)
D.er1=new B.D(A.ey,D.c28,null)
D.fLm=new B.B("Play",null,A.nW,null,null,null,null,null,null,null,null,null)
D.dlH=w([W.arw,A.tt,D.fLm],x.p)
D.f7w=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dlH,null)
D.er4=new B.D(A.nD,D.f7w,null)
D.bdS=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.fdY=new B.a5(20,20,D.bdS,null)
D.erb=new B.D(A.iK,D.fdY,null)
D.fUP=new B.B("Seconds per slide",null,A.fW,null,null,null,null,null,null,null,null,null)
D.erl=new B.D(A.bh,D.fUP,null)
D.esG=new C.a9F(2,"print")
D.esJ=new B.j0(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eul=new B.he("/Annot")
D.eun=new B.he("/URI")
D.fFq=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ewS=new B.jE("share",48,D.fFq,null,B.as("jE<n>"))
D.c21=new B.ae(A.ea,14,A.eK,null,null,null)
D.ex0=new B.cL(null,-2,-2,null,null,null,D.c21,null)
D.d1l=w([H.aia,A.L],x.O)
D.c8A=new B.a9(A.a6,A.aa,A.x,D.d1l,null,null)
D.b6l=new B.p(null,null,null,null,null,D.c8A,A.n)
D.bxr=new B.l5(D.b6l,A.bi,null,null)
D.exc=new B.cL(0,0,null,0,8,null,D.bxr,null)
D.dqI=w([A.i4,A.mO,A.ch],x.O)
D.exR=new B.c_(A.A,0.5,A.x,null,0,D.dqI,null,null)
D.eAr=new B.y(0.22,A.bl)
D.eF4=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eHi=new B.y(0.5,A.hB)
D.eQY=new B.y(0.78,A.aY)
D.f2g=new B.cu([A.br,0.22,0.7,2.6])
D.f2n=new B.cu([A.bb,0.36,1.2,1.3])
D.f2t=new B.cu([A.dK,0.28,0.2,0.4])
D.f2z=new B.cu([A.cy,0.05,0.3,0.35])
D.f2F=new B.cu([A.bx,0.28,0.9,0])
D.f2N=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f3E=new B.cu([A.bU,0.42,1,4.1])
D.f7e=new B.aaE(9)
D.bTK=new B.ae(A.HT,28,A.bk,null,null,null)
D.fVn=new B.B("NGMY News",null,A.dh,null,null,null,null,null,null,null,null,null)
D.bHO=new B.bz(1,A.bc,D.fVn,null)
D.du8=w([D.bTK,A.au,D.bHO],x.p)
D.f7q=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.du8,null)
D.bTV=new B.ae(A.ou,16,A.c,null,null,null)
D.fWY=new B.B("Book",null,A.oV,null,null,null,null,null,null,null,null,null)
D.dyo=w([D.bTV,A.e1,D.fWY],x.p)
D.f7z=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dyo,null)
D.c_C=new B.ae(A.jF,10,A.c,null,null,null)
D.fJn=new B.B("Pro",null,A.nT,null,null,null,null,null,null,null,null,null)
D.dlM=w([D.c_C,A.r2,D.fJn],x.p)
D.f7D=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.dlM,null)
D.fUN=new B.B("Make a newspaper",null,A.VF,null,null,null,null,null,null,null,null,null)
D.c9Q=w([E.a3w,A.ae,D.fUN],x.p)
D.f7E=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.c9Q,null)
D.bZ5=new B.ae(A.kt,18,A.bN,null,null,null)
D.fLA=new B.B("Ending celebration",null,A.hi,null,null,null,null,null,null,null,null,null)
D.dt7=w([D.bZ5,A.bm,D.fLA],x.p)
D.f7H=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dt7,null)
D.c_o=new B.ae(A.j2,18,A.kp,null,null,null)
D.fp0=new B.G(!0,A.kp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXg=new B.B("Write",null,D.fp0,null,null,null,null,null,null,null,null,null)
D.d9O=w([D.c_o,A.ae,D.fXg],x.p)
D.f7O=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.d9O,null)
D.fJl=new B.B("Download picture",null,A.nU,null,null,null,null,null,null,null,null,null)
D.bKy=new B.qH(A.e0,A.A,A.f,D.fJl,null)
D.bKJ=new B.dn(1,A.cp,D.bKy,null)
D.dmb=w([K.arn,A.ae,D.bKJ],x.p)
D.f7P=new B.c7(A.aL,A.ba,A.i,A.m,null,A.p,null,0,D.dmb,null)
D.bVH=new B.ae(A.HT,22,A.bk,null,null,null)
D.fTl=new B.B("NGMY NEWS",null,M.aaF,null,null,null,null,null,null,null,null,null)
D.d0L=w([D.bVH,A.ae,D.fTl],x.p)
D.f7Z=new B.c7(A.aL,A.e,A.Q,A.m,null,A.p,null,0,D.d0L,null)
D.f8a=new B.pA(!1,!1,null,V.XK,null,A.c3,null,null,null)
D.a9L=new B.iM([D.cs,D.dk,D.vc,D.Je,D.vd,D.aKB],B.as("iM<hF>"))
D.ekm={title:0,quote:1,closing:2,bio:3}
D.f9F=new B.df(D.ekm,4,x.M)
D.ei5={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f9I=new B.df(D.ei5,5,x.M)
D.ejC={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9N=new B.df(D.ejC,8,x.M)
D.eiM={Design:0,Transitions:1,Insert:2}
D.f9Q=new B.df(D.eiM,3,x.M)
D.hDQ=new B.iM([D.a7U],B.as("iM<wu>"))
D.eiV={float3d:0,drift:1,pulse:2}
D.f9U=new B.df(D.eiV,3,x.M)
D.aSp=new B.iM([D.Jb,D.Jc,D.Jd],B.as("iM<mS>"))
D.ei3={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSs=new B.df(D.ei3,14,x.M)
D.hDR=new B.df(A.hY,0,B.as("df<wu>"))
D.eiS={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UJ=new B.df(D.eiS,4,x.M)
D.ehX={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSv=new B.df(D.ehX,30,x.M)
D.ej0={circle:0,triangle:1,hexagon:2,diamond:3}
D.fan=new B.df(D.ej0,4,x.M)
D.fcR=new B.av(390,844)
D.fdH=new B.a5(20,20,A.M1,null)
D.aTi=new B.a5(null,2.5,null,null)
D.fdR=new B.a5(18,18,A.M1,null)
D.c_s=new B.ae(A.jp,19,A.c,null,null,null)
D.fe2=new B.a5(38,38,D.c_s,null)
D.bYE=new B.ae(A.zq,22,A.c,null,null,null)
D.fe5=new B.a5(40,40,D.bYE,null)
D.feF=new B.hG(2,10,10,1.15,null)
D.aTp=new B.hG(2,16,14,0.62,null)
D.bFD=new B.R(32,30,32,40)
D.bfq=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bTH=new B.ae(A.qD,56,D.bfq,null,null,null)
D.ajg=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fr8=new B.G(!0,D.ajg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQc=new B.B("Your books will live here.",null,D.fr8,null,A.K,null,null,null,null,null,null,null)
D.dcN=w([D.bTH,A.X,D.fQc],x.p)
D.bwm=new B.fj(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.dcN,null)
D.erj=new B.D(D.bFD,D.bwm,null)
D.ff0=new B.mu(D.erj,null)
D.fQ9=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ffi=new B.b1(D.fQ9,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fOd=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new B.b1(D.fOd,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTp=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new B.b1(D.fTp,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTY=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ffH=new B.b1(D.fTY,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fMQ=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ffU=new B.b1(D.fMQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h0h=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new B.b1(D.h0h,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYi=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new B.b1(D.fYi,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fU6=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fh6=new B.b1(D.fU6,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fHw=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhn=new B.b1(D.fHw,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qp,!1,null,null,null,A.t,null)
D.fJv=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fhF=new B.b1(D.fJv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPP=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhH=new B.b1(D.fPP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPv=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new B.b1(D.fPv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fWe=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new B.b1(D.fWe,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDA=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new B.b1(D.fDA,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fKF=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fie=new B.b1(D.fKF,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZX=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fig=new B.b1(D.fZX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZt=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.b1(D.fZt,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fCv=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fim=new B.b1(D.fCv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVi=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fiv=new B.b1(D.fVi,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZ2=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new B.b1(D.fZ2,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYU=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fiM=new B.b1(D.fYU,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fCm=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new B.b1(D.fCm,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fGt=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new B.b1(D.fGt,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fY5=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fjv=new B.b1(D.fY5,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fGf=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fjK=new B.b1(D.fGf,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bnJ=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_l=w([A.iq,A.pb,D.bnJ,D.afJ,A.iq],x.O)
D.fk7=new B.fY(A.A,0,6.283185307179586,A.x,D.d_l,null,null)
D.d8U=w([A.bN,A.c4,A.i2,D.BQ,A.bN],x.O)
D.aTY=new B.fY(A.A,0,6.283185307179586,A.x,D.d8U,null,null)
D.do1=w([A.bU,A.br,A.bb,A.b5,A.bk,A.bU],x.O)
D.fkc=new B.fY(A.A,0,6.283185307179586,A.x,D.do1,null,null)
D.d1C=w([A.qj,A.pc,A.y4,A.iq,A.qj],x.O)
D.fkd=new B.fY(A.A,0,6.283185307179586,A.x,D.d1C,null,null)
D.dnW=w([A.aQ,A.bK,A.aO,A.am,A.aQ],x.O)
D.fke=new B.fY(A.A,0,6.283185307179586,A.x,D.dnW,null,null)
D.dwe=w([A.bx,A.bb,A.br,A.bU,A.bx],x.O)
D.fkg=new B.fY(A.A,0,6.283185307179586,A.x,D.dwe,null,null)
D.bj5=new B.u(1,0,1,0,A.q)
D.bo3=new B.u(1,0,1,1,A.q)
D.bkV=new B.u(1,0,0,1,A.q)
D.bgP=new B.u(1,1,0,1,A.q)
D.ds6=w([A.Mi,A.Z1,D.bj5,D.bo3,D.bkV,D.bgP,A.Mi],x.O)
D.fkh=new B.fY(A.A,0,6.283185307179586,A.x,D.ds6,null,null)
D.fkw=new C.axs(2,"immersiveSticky")
D.fkx=new C.axs(3,"edgeToEdge")
D.fky=new C.axs(4,"manual")
D.fn3=new B.G(!0,A.o7,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUw=new B.G(!0,A.eS,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnD=new B.G(!0,E.nx,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqn=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new B.G(!0,A.bW,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqT=new B.G(!0,A.eK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsl=new B.G(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsw=new B.G(!0,A.jV,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new B.t4(!0,A.JB,null,null,null,null,A.dD,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftc=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new B.G(!0,A.jA,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fui=new B.G(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esM=new B.j0(1,1,0.7568627450980392,0.027450980392156862)
D.fum=new B.t4(!0,D.esM,null,null,null,null,A.dD,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahZ=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVl=new B.G(!0,D.ahZ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new B.G(!0,D.ajg,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVn=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new B.t4(!0,A.pG,null,null,null,null,A.dD,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvX=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.G(!0,D.ahZ,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KG=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwv=new B.G(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwF=new B.G(!0,A.bK,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new B.G(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a5e,null,null,null)
D.fx2=new B.G(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx4=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxv=new B.G(!0,A.du,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new B.G(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new B.G(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW_=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW1=new B.G(!0,A.bW,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.btP=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fAk=new B.G(!0,D.btP,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW7=new B.G(!0,E.nx,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAP=new B.G(!0,A.bK,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAS=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftr=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC7=new B.B("NEW",null,D.ftr,null,null,null,null,null,null,null,null,null)
D.fCp=new B.B("Hati ya Kuhowesha",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fCS=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fDg=new B.B("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.fE1=new B.B("Big quote mark",null,A.ju,null,null,null,null,null,null,null,null,null)
D.fE3=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fEI=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEK=new B.B("How many slides?",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fFi=new B.B("Transfer",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fp3=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFE=new B.B("Luxury FX",null,D.fp3,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.B("Font",null,A.tz,null,null,null,null,null,null,null,null,null)
D.fG9=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fGg=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new B.G(!0,A.bK,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new B.B("Example  GA847",null,D.fzR,null,null,null,null,null,null,null,null,null)
D.fGQ=new B.B("Design shapes",null,A.ju,null,null,null,null,null,null,null,null,null)
D.fH1=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fH6=new B.B("Non-stop (loop)",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fHk=new B.B("Hati ya Kuhoweya",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fHD=new B.B("Photo studio",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fI6=new B.B("Add your picture",null,A.kf,null,null,null,null,null,null,null,null,null)
D.fsL=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new B.B("Enter document code",null,D.fsL,null,A.K,null,null,null,null,null,null,null)
D.fI8=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fId=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fqb=new B.G(!0,E.nx,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIy=new B.B("Delete this book?",null,D.fqb,null,A.K,null,null,null,null,null,null,null)
D.fuY=new B.G(!0,E.nx,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJx=new B.B("Your library",null,D.fuY,null,null,null,null,null,null,null,null,null)
D.fJD=new B.B("Delete",null,A.aVe,null,null,null,null,null,null,null,null,null)
D.fJG=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ay.EE,null,null,null,null,null,null,null,null,null)
D.fJR=new B.B("Element flies in",null,A.aVr,null,null,null,null,null,null,null,null,null)
D.VQ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fKC=new B.B("Cancel",null,E.aVB,null,null,null,null,null,null,null,null,null)
D.fKE=new B.B("The lines and circles that come with the design",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fyF=new B.G(!0,A.hp,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL5=new B.B("DOCUMENT CODE",null,D.fyF,null,null,null,null,null,null,null,null,null)
D.fLW=new B.B("Quotes",null,G.abh,null,null,null,null,null,null,null,null,null)
D.fs7=new B.G(!0,N.lF,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM5=new B.B("Add a picture",null,D.fs7,null,null,null,null,null,null,null,null,null)
D.fMd=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vu,null,A.K,null,null,null,null,null,null,null)
D.fMh=new B.B("Look & feel",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fMm=new B.B("Rings",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fMs=new B.B("W",null,A.tz,null,null,null,null,null,null,null,null,null)
D.fMC=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fMW=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VC,null,A.K,null,null,null,null,null,null,null)
D.fMY=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNI=new B.B("Add page",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fO_=new B.B("Malipo ya Awamu ya Mahari",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fsA=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOe=new B.B("Create with AI",null,D.fsA,null,A.K,null,null,null,null,null,null,null)
D.fOK=new B.B("Apply look",null,A.hi,null,null,null,null,null,null,null,null,null)
D.fth=new B.G(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPx=new B.B("Type your presentation below",null,D.fth,null,A.K,null,null,null,null,null,null,null)
D.fPA=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aWc,null,A.K,null,null,null,null,null,null,null)
D.fPC=new B.B("Keep it",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fnW=new B.G(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPJ=new B.B("Done",null,D.fnW,null,null,null,null,null,null,null,null,null)
D.fQ3=new B.B("Delete",null,A.nV,null,null,null,null,null,null,null,null,null)
D.fQe=new B.B("Hati ya Kiapo cha Uongozi",null,A.fA,null,null,null,null,null,null,null,null,null)
D.frq=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR8=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.frq,null,A.K,null,null,null,null,null,null,null)
D.fRx=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fRD=new B.B("Layout",null,A.VH,null,null,null,null,null,null,null,null,null)
D.fSj=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fSs=new B.B("X",null,A.tz,null,null,null,null,null,null,null,null,null)
D.fT3=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A3.AM,null,null,null,null,null,null,null,null,null)
D.fTC=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.B("Hati ya Kuhowa",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fTS=new B.B("Choose a class template",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fTU=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fU0=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fUd=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fUk=new B.B("Done",null,A.aVZ,null,null,null,null,null,null,null,null,null)
D.fUv=new B.B("Ending celebration",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fUw=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fUL=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A3.ty,null,null,null,null,null,null,null,null,null)
D.fVL=new B.B("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.fVM=new B.B("What would you like to do?",null,D.aVl,null,null,null,null,null,null,null,null,null)
D.fVR=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fWn=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fWr=new B.B("Hati (Documents)",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fWE=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fzG=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new B.B("Delete presentation?",null,D.fzG,null,A.K,null,null,null,null,null,null,null)
D.fX1=new B.B("After the last slide it starts again from the first",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fXd=new B.B("\ud83c\udf33",null,A.ED,null,A.K,null,null,null,null,null,null,null)
D.fXv=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fXC=new B.B("Transfer document",null,A.nd,null,null,null,null,null,null,null,null,null)
D.fXN=new B.B("Add to the slides",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fY9=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fYo=new B.B("Make a book",null,I.aUQ,null,null,null,null,null,null,null,null,null)
D.fYs=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fs0=new B.G(!0,A.am,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYu=new B.B("Keep this page open until it finishes.",null,D.fs0,null,null,null,null,null,null,null,null,null)
D.fYw=new B.B("Making your video",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fYB=new B.B("LANGUAGE",null,R.tA,null,null,null,null,null,null,null,null,null)
D.fYI=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fYQ=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYS=new B.B("Upload a different logo",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fZ8=new B.B("Delete from the database?",null,A.kf,null,null,null,null,null,null,null,null,null)
D.fZ9=new B.B("H",null,A.tz,null,null,null,null,null,null,null,null,null)
D.fZz=new B.B("NGMY Quotes",null,A.dh,null,null,null,null,null,null,null,null,null)
D.h_2=new B.B("Cover",null,D.aW7,null,null,null,null,null,null,null,null,null)
D.h_6=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new B.B("Each page becomes its own slide you can present",null,A.hh,null,null,null,null,null,null,null,null,null)
D.h_u=new B.B("Y",null,A.tz,null,null,null,null,null,null,null,null,null)
D.h_G=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h_N=new B.B("Edit text",null,A.KB,null,null,null,null,null,null,null,null,null)
D.h26=B.dR("a9r")
D.ES=new C.ayO(0,"none")
D.b_5=new C.ayO(1,"zipCrypto")
D.b_6=new C.ayO(2,"aes")
D.hqK=new F.Ql("","",null)
D.hrS=new C.ber(null)
D.hsY=new C.a_P(null)
D.hvX=new C.aeo(null)
D.hvZ=new C.aG1(null)
D.hyK=new C.a13(null)
D.hzv=new C.a1A(null)
D.hA7=new C.bwp(null)})();(function staticFields(){$.hsP=null
$.hsQ=null
$.hsR=null
$.hsS=null
$.ha4=B.wT("_lastQuoRemDigits")
$.ha5=B.wT("_lastQuoRemUsed")
$.aza=B.wT("_lastRemUsed")
$.ha6=B.wT("_lastRem_nsh")
$.qu=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8f=B.T(x.N,x.I)
$.h7v=!1
$.hxP=B.T(B.as("la"),x.N)
$.hy0=B.T(B.as("la"),x.E)
$.hvX=!1
$.bC3="q"
$.Rp=0
$.Dl=B.T(x.N,B.as("ai<Ab>"))
$.hwj=!1
$.hbP=!1
$.hCW=null
$.i7x=B.T(x.N,B.as("aB<n?>"))
$.Lf=""
$.jc=0
$.hpF=function(){var w=x.N
return B.T(w,w)}()
$.hpE=B.T(x.N,x.R)
$.hc9=!1
$.ah4=B.T(x.N,x.E)
$.hd0=0
$.bmG=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iy_","DI",()=>C.bbV(0))
w($,"ixY","a3R",()=>C.bbV(1))
w($,"ixZ","hGP",()=>C.bbV(2))
w($,"ixX","hh8",()=>$.a3R().vE(0))
w($,"ixV","hGN",()=>C.bbV(1e4))
w($,"ixW","hGO",()=>B.EZ(8))
w($,"itG","hEI",()=>B.EZ(0))
w($,"itO","hEM",()=>B.EZ(0))
w($,"itN","hEL",()=>B.c2i(0))
w($,"iBX","hIY",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6I.gdO(D.a6I),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iCo","bGz",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.na(new C.fSI(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.na(new C.fSJ(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.na(new C.fSK(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.na(new C.fSV(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.na(new C.fT_(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.na(new C.fT0(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.na(new C.fT1(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.na(new C.fT2(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.na(new C.fT3(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.na(new C.fT4(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.na(new C.fT5(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.na(new C.fSL(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.na(new C.fSM(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.na(new C.fSN(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.na(new C.fSO(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.na(new C.fSP(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.na(new C.fSQ(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.na(new C.fSR(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.na(new C.fSS(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.na(new C.fST(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.na(new C.fSU(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.na(new C.fSW(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.na(new C.fSX(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.na(new C.fSY(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.na(new C.fSZ(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fr>"))})
w($,"iC_","hJ_",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["vP+635io4/uwGRLRWQYDTDkhRTw="]=a.current})($__dart_deferred_initializers__);