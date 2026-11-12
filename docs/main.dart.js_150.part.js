((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
ue(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h9y(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Kv(d){var w
if(d===0)return $.DD()
if(d===1)return $.a3L()
if(d===2)return $.hG6()
if(Math.abs(d)<4294967296)return C.bbN(A.o.M(d))
w=C.i0o(d)
return w},
bbN(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ue(4,w)
return new C.oe(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ue(1,w)
return new C.oe(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aJ(d,16)
v=C.ue(2,w)
return new C.oe(v===0?!1:s,w,v)}v=A.o.aq(A.o.galu(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aq(d,65536)}v=C.ue(v,w)
return new C.oe(v===0?!1:s,w,v)},
i0o(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DD()
w=$.hG5()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.ln(A.aH.gaU(w))
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
q=new C.oe(!1,r,4)
if(s<0)p=q.mD(0,-s)
else p=s>0?q.dX(0,s):q
return p},
h9z(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hsf(d,e,f,g){var w,v,u,t,s,r=A.o.aq(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hsa(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16)
if(A.o.E(f,16)===0)return C.h9z(d,e,s,g)
w=e+s+1
C.hsf(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i0r(d,e,f,g){var w,v,u,t,s=A.o.aq(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cNZ(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i0p(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbO(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}},
hsg(d,e,f,g,h,i){var w,v,u,t,s,r
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
i0q(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ec((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oe:function oe(d,e,f){this.a=d
this.b=e
this.c=f},
cO_:function cO_(){},
cO0:function cO0(){},
cO1:function cO1(d,e){this.a=d
this.b=e},
cO2:function cO2(d){this.a=d},
aT7:function aT7(d,e){this.a=d
this.b=e},
hhW(d,e,f){var w=new C.SJ(d,A.o.aq(Date.now(),1000),e)
w.Q=f
return w},
SJ:function SJ(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4H:function a4H(d,e){this.a=d
this.b=e},
bK2:function bK2(d){this.a=d
this.c=this.b=0},
hJr(){return new C.bIl()},
bIl:function bIl(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cFZ:function cFZ(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i04(d,e,f){var w,v,u,t,s
if(d.gav(d))return new Uint8Array(0)
w=new Uint8Array(B.cb(d.gd2n(d)))
v=f*2+2
u=C.hpV(C.hpX(),64)
t=new C.coG(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.coH(e,1000,v)
s=new Uint8Array(v)
return A.aH.dt(s,0,t.cQc(w,0,s,0))},
cFX:function cFX(d,e){this.c=d
this.d=e},
ayI:function ayI(d,e){this.a=d
this.b=e},
cG_:function cG_(d,e,f,g){var _=this
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
bat:function bat(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cFY:function cFY(){this.a=$},
hrK(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hJa(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGV:function bGV(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hfy(d,e){e&=31
return(d&$.qr[e])<<e>>>0},
nJ(d,e){e&=31
return(d>>>e|C.hfy(d,32-e))>>>0},
hpW(d){var w,v=new C.auf()
if(B.iS(d))v.aMu(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hpX(){var w=C.hpW(0),v=new Uint8Array(4),u=x.S
u=new C.coI(w,v,A.Fh,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.ir(0)
return u},
hpV(d,e){var w=new C.coE(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
coD:function coD(){},
coH:function coH(d,e,f){this.a=d
this.b=e
this.c=f},
coB:function coB(){},
aue:function aue(d){this.a=d},
coG:function coG(d){this.a=$
this.b=d
this.c=$},
coC:function coC(){},
coA:function coA(){},
auf:function auf(){this.b=this.a=$},
coF:function coF(){},
coI:function coI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
coE:function coE(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
coz:function coz(){},
coy:function coy(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSh:function bSh(){},
bSi:function bSi(d){this.a=d},
i3p(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bc2:function bc2(){},
cz5:function cz5(){},
bTj:function bTj(d,e){this.a=d
this.b=!1
this.c=e},
bTk:function bTk(){},
icB(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axj(d){var w=0,v=B.j(x.H),u
var $async$axj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fk8?2:4
break
case 2:w=5
return B.b(A.kB.h7("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axj)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kB.h7("SystemChrome.setEnabledSystemUIOverlays",C.icB(null),u),$async$axj)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axj,v)},
axm:function axm(d,e){this.a=d
this.b=e},
a9l:function a9l(d){this.a=d},
ifd(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fF9(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
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
fF9:function fF9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoK(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahT("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aoK)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cE(t,new C.c3g(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3h())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoK,v)},
aoM(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoK(),$async$aoM)
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
l=new B.V(Date.now(),0,!1).ab().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nI("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ak(),"savedAt",l],t,q),null),$async$aoM)
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
return B.b(B.nI("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],t,q),null),$async$aoM)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoM,v)},
c3i(d){return C.hPe(d)},
hPe(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3i=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahT("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i8),$async$c3i)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X_(B.a3(q,x.N,x.z))
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
return B.i($async$c3i,v)},
aoL(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoK(),$async$aoL)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nM(r,new C.c3j(d))
w=4
return B.b(B.nI("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z),null),$async$aoL)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aR5("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoL)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoL,v)},
c3g:function c3g(){},
c3h:function c3h(){},
c3j:function c3j(d){this.a=d},
ipn(d,e,f){return B.bT(A.L,null,new C.fW_(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fW_:function fW_(d,e,f){this.a=d
this.b=e
this.c=f},
a2_:function a2_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKK:function aKK(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fgY:function fgY(d,e){this.a=d
this.b=e},
fh1:function fh1(d){this.a=d},
fh2:function fh2(d){this.a=d},
fh3:function fh3(d,e,f){this.a=d
this.b=e
this.c=f},
fgZ:function fgZ(d){this.a=d},
fh_:function fh_(d){this.a=d},
fh0:function fh0(d,e){this.a=d
this.b=e},
fgT:function fgT(d){this.a=d},
fgR:function fgR(d){this.a=d},
fgS:function fgS(d){this.a=d},
fgU:function fgU(d){this.a=d},
fgV:function fgV(d){this.a=d},
fh7:function fh7(d,e){this.a=d
this.b=e},
fh6:function fh6(d,e){this.a=d
this.b=e},
fgX:function fgX(d,e,f){this.a=d
this.b=e
this.c=f},
fgW:function fgW(d,e,f){this.a=d
this.b=e
this.c=f},
fh4:function fh4(d,e){this.a=d
this.b=e},
fh5:function fh5(d,e){this.a=d
this.b=e},
fha:function fha(d){this.a=d},
fhb:function fhb(d,e){this.a=d
this.b=e},
fh9:function fh9(d,e){this.a=d
this.b=e},
fh8:function fh8(){},
huH(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cE(v,new C.foq(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fos(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2Z(d){return C.igz(d)},
igz(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2Z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fIk(n)
t=4
j=m
i=C
w=7
return B.b(B.a3y("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2Z)
case 7:j.$1(i.huH(f))
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
return B.b(B.az(),$async$a2Z)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.huH(B.aT(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.foA(d),$async$a2Z)
case 13:p=j.C(new i.Y(h,new g.fIi(f),o),o.k("M.E"))
A.d.aZ(p,new C.fIj())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2Z,v)},
ait(d,e){return C.ip3(d,e)},
ip3(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ait=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fVu(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.az(n,null)
q=!1
t=4
w=7
return B.b(B.ail("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ait)
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
return B.b(B.az(),$async$ait)
case 12:p=g
w=13
return B.b(p.aA("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ait)
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
return B.i($async$ait,v)},
foA(d){return C.i4P(d)},
i4P(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$foA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$foA)
case 7:r=f
q=r.tQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jx(q,B.U(q).c)
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
return B.i($async$foA,v)},
ahl(d,e){return C.if5(d,e)},
if5(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahl=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ahl)
case 6:s=g
r=B.aR(x.N)
q=s.tQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c6(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("cg.E"))
w=7
return B.b(s.aA("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahl)
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
return B.b(C.a2Z(d),$async$ahl)
case 8:n=g
J.nM(n,new C.fEO(e))
w=9
return B.b(C.ait(d,n),$async$ahl)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahl,v)},
ips(d,e){return B.a6(d,!1).cd(B.eb(new C.fWl(e),!0,null,x.H))},
i0t(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cC(w.d,new C.cPm())},
oG:function oG(d,e,f){this.a=d
this.b=e
this.c=f},
foq:function foq(){},
fos:function fos(){},
fIk:function fIk(d){this.a=d},
fIi:function fIi(d){this.a=d},
fIj:function fIj(){},
fVu:function fVu(){},
fEO:function fEO(d){this.a=d},
fWl:function fWl(d){this.a=d},
ZH:function ZH(d,e){this.c=d
this.a=e},
azg:function azg(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPm:function cPm(){},
cPo:function cPo(d,e){this.a=d
this.b=e},
cPr:function cPr(d){this.a=d},
cPs:function cPs(d){this.a=d},
cPq:function cPq(){},
cPt:function cPt(d,e){this.a=d
this.b=e},
cPp:function cPp(d){this.a=d},
cPu:function cPu(){},
cPn:function cPn(d,e){this.a=d
this.b=e},
cPv:function cPv(){},
cPi:function cPi(d){this.a=d},
cPg:function cPg(d){this.a=d},
cPh:function cPh(d){this.a=d},
cPj:function cPj(d,e){this.a=d
this.b=e},
cPf:function cPf(d){this.a=d},
cPe:function cPe(d){this.a=d},
cPc:function cPc(d,e){this.a=d
this.b=e},
cPd:function cPd(d){this.a=d},
cPl:function cPl(){},
cPk:function cPk(d){this.a=d},
cPb:function cPb(d,e){this.a=d
this.b=e},
cPa:function cPa(d,e){this.a=d
this.b=e},
cP9:function cP9(d,e){this.a=d
this.b=e},
cPw:function cPw(d){this.a=d},
ZF:function ZF(d,e,f){this.c=d
this.d=e
this.a=f},
aGz:function aGz(d,e,f){this.a=d
this.b=e
this.c=f},
azc:function azc(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cOD:function cOD(d){this.a=d},
cOC:function cOC(d){this.a=d},
cOF:function cOF(d,e,f){this.a=d
this.b=e
this.c=f},
cON:function cON(){},
cOO:function cOO(d){this.a=d},
cOG:function cOG(d,e,f){this.a=d
this.b=e
this.c=f},
cOE:function cOE(d,e){this.a=d
this.b=e},
cOI:function cOI(d,e){this.a=d
this.b=e},
cOJ:function cOJ(d,e){this.a=d
this.b=e},
cOK:function cOK(d,e){this.a=d
this.b=e},
cOH:function cOH(d){this.a=d},
cOM:function cOM(d){this.a=d},
cOL:function cOL(d,e){this.a=d
this.b=e},
cOT:function cOT(d){this.a=d},
cOP:function cOP(d,e){this.a=d
this.b=e},
cOQ:function cOQ(d,e){this.a=d
this.b=e},
cOR:function cOR(d,e){this.a=d
this.b=e},
cOS:function cOS(d,e){this.a=d
this.b=e},
aze:function aze(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
iiW(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bF(new C.fMS(),x.H).eM(new C.fMT())}}else if(s)C.hwg()}catch(t){}},
hwg(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fsK())}catch(u){}},
iiZ(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fMS:function fMS(){},
fMT:function fMT(){},
fsK:function fsK(){},
hB6(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
hB3(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lq)return null
return A.a.b2(w,14)},
hec(d){var w
if(d.b!==D.lq)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
ijo(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hB7(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ijj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fNR(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gg(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Sr(A.a.aB(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Sr(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ijh(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fNQ())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aS7(w,u,s,0)}return w},
ijl(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6z:$.hIf(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hB4(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fpt(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.hB6(q)===e)return q}return null},
ijm(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I3).a},
ijn(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.af6(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.af6(0,0,0)
v=C.fpt(b6,b0)
u=C.fpt(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ijl(b2,C.ijj(C.hB4(b2),v.r))
if(s.a!==0){u.r=C.ijh(C.hB4(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.hB6(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dY(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fpt(b6,n)
i=C.fpt(b5,n)
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
a0=C.hec(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.hB3(a8)===a0||C.hec(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RN(a1,new C.fNX(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jb
$.jb=a9+1
A.d.J(a1,new C.eN(""+1000*a6+"_"+a9,D.lq,a2,a3,a4,a5,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,d.at,D.bj,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cq,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.af6(k,t,e)},
iji(d){var w=C.ijm(d)
if(d.w==="hati_kuhowa")return C.hAr("",w)
return C.hAq("",w)},
fNR:function fNR(){},
fNQ:function fNQ(){},
fNX:function fNX(d){this.a=d},
hvY(){var w=new B.V(Date.now(),0,!1),v=new C.frL()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bB(w)},
hel(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fOP(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lq&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hBl(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fOP(d)
w=B.bj(u)
if(w==null)return!C.fOP(d)
return new B.V(Date.now(),0,!1).ab().d3(w.ab().bR(18e9))},
ik3(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).ab().ag()},
hTh(d){return A.a.i(d).toLowerCase()},
ar8(d){return C.hTj(d)},
hTj(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$ar8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ar8)
case 7:r=f
p=r.tQ("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.inF(),B.U(o).k("N<1,m>")).bZ(0,new C.cf1())
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
return B.i($async$ar8,v)},
ar7(d,e){return C.hTi(d,e)},
hTi(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ar7=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ar8(d),$async$ar7)
case 3:r=g
if(!J.c6(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ar7)
case 8:q=g
w=9
return B.b(q.aA("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$ar7)
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
return B.i($async$ar7,v)},
ar9(d,e){return C.hTk(d,e)},
hTk(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ar9=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ar8(d),$async$ar9)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ar9)
case 8:q=g
w=9
return B.b(q.aA("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$ar9)
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
return B.i($async$ar9,v)},
Wn(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wn=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h6W&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Wn)
case 7:r=a7
q=B.aT(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Y.aQ(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.i7(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aK(o,J.k(n.a),C.X_(B.a3(f.a(n.b),e,a0)))}$.a89=o}}t=2
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
return B.b(B.c8(),$async$Wn)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.ut("civic_hati_kiapo_uongozi",null,A.eh),$async$Wn)
case 17:l=a7
w=l!=null&&x.f.b(J.t(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.i7(f.a(J.t(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aK(k,J.k(j.a),C.X_(B.a3(f.a(j.b),o,d)))}for(o=k,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a89.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcE()
else f=!0
f=!f}else f=!0
if(f)$.a89.n(0,i.a,i.b)}w=20
return B.b(C.ara(),$async$Wn)
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
case 16:case 9:$.h6W=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wn,v)},
ara(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$ara=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ara)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a89,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.ak())}w=7
return B.b(s.aA("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.az(r,null)),$async$ara)
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
return B.i($async$ara,v)},
b1b(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1b=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wn(!1),$async$b1b)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a89.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEu(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1b,v)},
a8a(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8a=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a89.n(0,d,o)
$.h6W=!0
w=3
return B.b(C.ara(),$async$a8a)
case 3:w=4
return B.b(B.c8(),$async$a8a)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a89,n=new B.ck(n,B.a4(n).k("ck<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.ak())}w=9
return B.b(B.nI("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).ab().ag()],e,x.z),null),$async$a8a)
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
return B.i($async$a8a,v)},
arb(d){var w=0,v=B.j(x.T),u,t,s
var $async$arb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a6F(A.eN),$async$arb)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$arb)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1a(t,d),$async$arb)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arb,v)},
b1a(d,e){return C.hTl(d,e)},
hTl(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1a=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1a)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f_().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iz("media")
w=8
return B.b(p.xG(q,new Uint8Array(B.cb(d)),D.bKb),$async$b1a)
case 8:n=p.D9(q)
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
return B.i($async$b1a,v)},
Li(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cX,l,m,n)},
frc(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
hbb(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.j.F(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cF,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cX,g,e,f)},
fqL(d,e,f,g){return C.frc(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hbc(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r6,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bq,A.a8,"",h,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cX,g,e,f)},
hvX(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
bEu(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hvX(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lq&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hdR(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Ch(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.hvX(m)
if(l!=null&&r.an(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lq&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fMQ(a2))}else A.d.bt(a1.z,new C.fMR())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fOP(a0))a0.ax=a6.f.ab().ag()
return a0},
hdR(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fPC(D.a7z),l=C.cD(),k=x.u,j=B.a([C.er(A.bk,!1,s,A.aG,"marriage_locked_bg",r,24,A.bq,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cq,D.lR,1,0,0)],k),i=B.a([],k)
i.push(C.Li("NGMY",A.K,236069181,52,A.bq,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Li("TAREHE:",A.bk,o,16,A.bq,A.H,A.j.F(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hbb("tarehe",0.8059999999999999,0.026,0.18,A.bk,16,p,C.hvY()))
i.push(C.fqL(0.8099999999999999,0.026+A.j.F(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Li("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bq,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Li("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cF,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.frc(0,0.002,D.fH,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hbc("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hbc("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hbc("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.frc(268435456,0.175,D.bj,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Li("VIDEO YA KIAPO",A.bk,o,10,A.bq,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bk,!1,s,A.aG,"__kiapo_video__",r,24,A.bq,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cq,D.lR,0.77,0.115,0.492))
i.push(C.Li("Rais Anayeapa:",A.bk,p,15,A.bq,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Li("Jina:",A.bk,p,13,A.bq,A.V,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hbb("rais_jina",0.195,0.6930000000000001,0.62,A.bk,13,p,""))
i.push(C.fqL(0.195,0.7130000000000001,0.62,n))
i.push(C.Li("Sahihi:",A.bk,p,13,A.bq,A.V,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bk,!1,s,A.aG,"marriage_sign_rais",0,24,A.bq,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,0.38,0.21500000000000002,0.73))
i.push(C.fqL(0.21500000000000002,0.795,0.38,n))
i.push(C.Li("Tarehe:",A.bk,p,13,A.bq,A.V,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hbb("rais_tarehe",0.745,0.74,0.2,A.bk,12,p,C.hvY()))
i.push(C.fqL(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.frc(0,0.032,D.bj,o,1,"state_box",0.72,0.14,0.875),C.Li("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bq,A.V,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rS(4294967035,t,0,0,j,l,D.qW,"","",u,D.dk)
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
aht(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aht=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.feT)
w=1
break}w=3
return B.b(C.Wn(!0),$async$aht)
case 3:w=4
return B.b(C.b1b(p),$async$aht)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hBl(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.blD,null,new C.fHH(p),f,!0,!0,!1,A.lS,!1,!1,x.N),$async$aht)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fHI(),f,null,!0,!0,x.y),$async$aht)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hdR(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hdR(p))
case 1:return B.h(u,v)}})
return B.i($async$aht,v)},
frL:function frL(){},
cf1:function cf1(){},
fMQ:function fMQ(d){this.a=d},
fMR:function fMR(){},
fHH:function fHH(d){this.a=d},
fHF:function fHF(d){this.a=d},
fHG:function fHG(d){this.a=d},
fHI:function fHI(){},
fHD:function fHD(d){this.a=d},
fHE:function fHE(d){this.a=d},
arG:function arG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFn:function aFn(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ekM:function ekM(d){this.a=d},
ekK:function ekK(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekO:function ekO(d){this.a=d},
x0(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",j,D.bj,4280172719,2,d,0,0,"",D.cq,D.cX,l,m,n)},
hvy(d,e,f){var w=4291404327
return B.a([C.qq(0,f,D.eX,w,2,"ring_l",f,d-f*0.42,e),C.qq(0,f,D.eX,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fqa(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qq(4294967288,f,D.eX,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qq(h,s,D.eX,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qq(h,f*0.46,D.eX,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qq(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
fq9(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.j.F(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cF,A.V,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,l,0,0,"",D.cq,D.cX,g,e,f)},
bBS(d,e,f,g){return C.qq(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hvx(d,e,f,g,h){var w=A.j.F(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qq(0,0.036,D.bj,h,1.4,"banner_box_"+d,w,v,e),C.x0(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hB5(){var w=new B.V(Date.now(),0,!1),v=new C.fNW()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bB(w)},
hvz(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x0(r+".",A.bk,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fq9("witness_"+d+"_"+r+"_name",q,g,p,A.bk,!0,16,j,"[Jina la Shahidi]"),C.bBS(q,g+A.j.F(0.0272,0.02,0.06),p,w),C.x0("Sahihi:",A.bk,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bq,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,s,t,g-0.004),C.bBS(t,g+0.044,s,w)],x.u)},
ahV(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.drv,D.ctP,D.djm,D.dln],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hao(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fPC(d.d),v=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,1,0,0)],x.u)
A.d.v(v,C.i7n(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i7n(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x0("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hvy(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hvy(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fqa(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fqa(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x0("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qq(0,0.062,D.eX,b1,1.6,"crest_o",0.11,0.445,0.012),C.qq(0,0.046,D.eX,b1,1,"crest_i",0.084,0.458,0.02),C.x0("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qq(0,0.002,D.fH,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qq(b9,0.016,D.lr,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qq(0,0.002,D.fH,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x0("TAREHE:",A.bk,c0,20,A.H,A.j.F(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fq9("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bk,!1,21,b9,C.hB5()),C.bBS(0.814,0.026+A.j.F(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x0(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qq(c0,0.0026,D.bj,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qq(c3.e,0.138,D.bj,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bk,!1,b9,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bq,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bj,b3,2,c5,0,0,"",D.cq,D.cX,0.82,0.09,t))
t+=c4
if(c8){r=A.j.F(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qq(0,0.036,D.bj,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bq,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bj,b3,2,c7,0,0,"",D.cq,D.cX,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hvx(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x0(c9,A.bk,b9,d0,A.V,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.F(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.F(0.037399999999999996,0.02,0.06):A.j.F(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fq9("mahari_"+p,0.132,k,m,A.bk,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.jb
$.jb=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.jb
$.jb=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eN(""+1000*i+"_"+h,D.cX,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bq,A.aG,c0,A.bk,a9,D.bj,b2,b3,2,0,!1,s,0,D.cq,0,"","","","","",!1,0),j,new C.eN(""+1000*f+"_"+e,D.fg,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.fH,0,b5,0.8,0,!1,g,0,D.cq,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.jb
$.jb=p+1
i=Date.now()
h=$.jb
$.jb=h+1
g=Date.now()
f=$.jb
$.jb=f+1
e=Date.now()
a3=$.jb
$.jb=a3+1
A.d.v(d,B.a([new C.eN(""+1000*s+"_"+p,D.cX,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bq,A.aG,b7,A.dX,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*i+"_"+h,D.fg,a1,a2,0.046,0.025875,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.bj,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*g+"_"+f,D.cX,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bq,A.aG,b7,A.K,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*e+"_"+a3,D.fg,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bq,A.aG,b6,A.bk,a9,D.bj,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cq,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hvx("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7q||w===D.a7s||w===D.a7p||w===D.a7r){w=t-0.008
A.d.v(c2,C.fqa(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fqa(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qq(0,a4,D.bj,c0,1.3,"wit_table_border",0.82,0.09,t),C.qq(c0,a4,D.bj,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qq(0,0.0022,D.fH,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x0("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x0("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hvz("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hvz("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qq(0,0.11,D.bj,c0,1.2,"mw_box",0.82,0.09,t),C.x0("MWANDISHI",A.bk,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x0("Jina:",A.bk,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fq9("mwandishi_jina",0.215,w,0.3116,A.bk,!0,15,b9,""),C.bBS(0.215,p,0.3116,b5),C.x0("Sahihi:",A.bk,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bk,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bq,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,0.3161999999999999,0.5738,s-0.044),C.bBS(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qq(0,0.032,D.bj,c0,1,"state_box",0.7,0.15,a8),C.x0("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.V,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ijk(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hev(d.d),p=new C.fNS(s),o=new C.fNT(s),n=d.z,m=n===D.a7q||n===D.a7s||n===D.a7p||n===D.a7r,l=n===D.aJG||n===D.a7t||n===D.aJH,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.bZ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7t?26:16
i.push(new C.fNV().$1$size(w))}if(n===D.aJI)i.push(D.fWM)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iR,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.an)
n=B.L(r,A.r,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aTe,p.$1$w(0.9),D.aTe,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bga,t,n,w,t,t,A.n),t,t,t,t,A.amF,t,t,t))
i.push(A.an)
i.push(new C.fNU(r).$1("NIMETOWE"))
i.push(A.fK)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NM,new B.c7(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.dd,new B.by(1,A.bc,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b4,A.t,B.a([k,new B.D(A.alg,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hAq(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahV(e,t)
if(r==null)r=A.d.gH(D.I3)
w=C.cD()
v=C.rS(r.e,t,0,0,C.hao(r,0.165,y.O,D.dm_,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qW,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hAr(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahV(e,t)
if(r==null)r=A.d.gH(D.I3)
w=C.cD()
v=C.rS(r.e,t,0,0,C.hao(r,0.165,y.f,D.dhk,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qW,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFN(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFN=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.fZO(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFN,v)},
ahu(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahu=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHL(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHM(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahu)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFN(d,"Hati ya Kuhowa",D.I3),$async$ahu)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LY(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahu)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAq(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahu,v)},
ahv(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahv=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHP(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHQ(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahv)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFN(d,"Hati ya Kuhoweya",D.I3),$async$ahv)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LY(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahv)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAr(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahv,v)},
ahw(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahw=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fHT(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MT,null,new C.fHU(m),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahw)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFN(d,"Malipo ya Awamu ya Mahari",D.Sj),$async$ahw)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LY(d,"Tafuta jimbo\u2026","",A.kv,"Chagua jimbo"),$async$ahw)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahV(s,D.Sj)
if(q==null)q=A.d.gH(D.Sj)
n=C.cD()
p=C.rS(q.e,null,0,0,C.hao(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dbT,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qW,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dk)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ch(null,null,null,null,D.oM,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahw,v)},
y4:function y4(d,e){this.a=d
this.b=e},
jA:function jA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fNW:function fNW(){},
fNS:function fNS(d){this.a=d},
fNU:function fNU(d){this.a=d},
fNV:function fNV(){},
fNT:function fNT(d){this.a=d},
fZO:function fZO(d,e){this.a=d
this.b=e},
aef:function aef(d,e,f){this.c=d
this.d=e
this.a=f},
e7h:function e7h(d,e,f){this.a=d
this.b=e
this.c=f},
e7g:function e7g(d,e){this.a=d
this.b=e},
e7f:function e7f(d,e){this.a=d
this.b=e},
adE:function adE(d,e,f){this.c=d
this.d=e
this.a=f},
fHL:function fHL(){},
fHM:function fHM(d){this.a=d},
fHJ:function fHJ(d){this.a=d},
fHK:function fHK(d){this.a=d},
fHP:function fHP(){},
fHQ:function fHQ(d){this.a=d},
fHN:function fHN(d){this.a=d},
fHO:function fHO(d){this.a=d},
fHT:function fHT(){},
fHU:function fHU(d){this.a=d},
fHR:function fHR(d){this.a=d},
fHS:function fHS(d){this.a=d},
Ll(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cX,k,l,m)},
Dj(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
hwj(d,e,f){return C.Dj(0,0.002,D.fH,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bC2(d,e,f,g,h){return B.a([C.Dj(4294967288,0.032,D.bj,4291404327,1.15,"pill_"+d,g,f,e),C.Ll(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hbg(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dj(0,0.002,D.fH,g,1,"orn_l_"+t,u,d,v),C.Dj(h,0.016,D.lr,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dj(0,0.002,D.fH,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2n(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ll(d,A.bk,j,i,A.V,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cF,A.V,"",0.02,s,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cX,t,u,g-0.002),C.hwj(u,g+0.018,t)],x.u)},
hwk(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dj(h,0.028,D.bj,h,0,"chv_"+d,g,e,f),C.Dj(w,0.024,D.lr,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dj(w,0.024,D.lr,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ll(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bC1(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ll("Sahihi:",A.bk,h,10,A.V,0.02,"is_"+d,0.12,e,f),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bq,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,v,w,f-0.006),C.hwj(w,f+0.016,v)],x.u)},
hew(d){var w,v
for(w=0;w<19;++w){v=D.Sz[w]
if(v.a===d)return v}return null},
ilD(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahV(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahV(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ahV(u,D.Sj)
v=w==null?l:w.d
if(v==null){w=C.ahV(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hew(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hx8.a9(0)
$.hxk.a9(0)
t=C.fPC(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hfG(d){var w=0,v=B.j(x.T),u
var $async$hfG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0g(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfG,v)},
y7:function y7(d,e){this.a=d
this.b=e},
o0:function o0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blh:function blh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h0g:function h0g(){},
aei:function aei(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
epx:function epx(d){this.a=d},
epw:function epw(d,e){this.a=d
this.b=e},
afY:function afY(d,e,f){this.c=d
this.d=e
this.a=f},
hev(d){return $.hxk.c3(0,d,new C.fPE(d))},
fPC(d){return $.hx8.c3(0,d,new C.fPD(d))},
fE(d){return B.h4v(d>>>16&255,d>>>8&255,d&255,255)},
iaB(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hyq(4294570461,4293910718,4284234270,u)
case 1:return C.hyq(4294635750,4293975240,t,4292912216)
case 2:w=C.foI(s,4294505966,r)
C.bBM(w,14,16,p)
C.kH(w,8,9,464,836,u,1.2)
C.Df(w,2,2,1,1,u,10)
C.Df(w,478,2,-1,1,u,10)
C.Df(w,2,852,1,-1,u,10)
C.Df(w,478,852,-1,-1,u,10)
return w
case 3:return C.foI(4294966515,4294373082,4289102906)
case 4:return C.i56(C.foI(4294376440,4293653998,4290287194))
case 5:w=C.foI(4294965238,4294437098,4288444980)
C.bBM(w,14,16,4283043359)
C.kH(w,6,7,468,840,u,1)
C.kH(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,n,4294175448)
C.tc(v,n)
C.kH(v,24,24,432,806,4286209070,1)
C.a2a(v,12,12,468,12,o,3,20)
C.a2a(v,12,842,468,842,o,3,20)
C.a2a(v,12,12,12,842,o,3,20)
C.a2a(v,468,12,468,842,o,3,20)
return v
case 7:return C.i33(4294440434,4293518297,4280228630,r)
case 8:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,m,4293911504)
C.tc(v,m)
C.kH(v,28,28,424,798,l,1)
C.fyk(v,28,28,l,k)
C.fyk(v,452,28,l,k)
C.fyk(v,28,826,l,k)
C.fyk(v,452,826,l,k)
return v
case 9:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,j,4294111986)
C.tc(v,j)
C.kH(v,18,18,444,818,4292401368,0.7)
B.iU(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i79(i,4294173372)
case 11:return C.i8j(4294439140,4293449662)
case 12:return C.i2V(h,4294239432)
case 13:return C.i7K(4294244340,4293193448)
case 14:return C.ic8(4294505710,4293780694)
case 15:return C.fnC(4294966259,4294439138,o,p,q)
case 16:return C.fnC(4294966776,4294178544,o,g,g)
case 17:return C.fnC(4294965493,4294504170,o,4286200650,q)
case 18:return C.fnC(4294966519,4294373862,o,p,p)
case 19:return C.i6f()
case 20:return C.i6g()
case 21:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,h,4293976768)
C.tc(v,h)
C.bBM(v,14,16,p)
B.iU(v,!0,C.fE(u),4,475,4,9)
B.iU(v,!0,C.fE(u),4,475,844,849)
B.iU(v,!0,C.fE(u),4,9,4,849)
B.iU(v,!0,C.fE(u),470,475,4,849)
C.a2a(v,10,12,470,12,u,2,16)
C.a2a(v,10,842,470,842,u,2,16)
C.a2a(v,10,12,10,842,u,2,18)
C.a2a(v,470,12,470,842,u,2,18)
C.Df(v,2,2,1,1,t,10)
C.Df(v,478,2,-1,1,t,10)
C.Df(v,2,852,1,-1,t,10)
C.Df(v,478,852,-1,-1,t,10)
C.kH(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,s,4294438872)
C.tc(v,s)
C.kH(v,14,16,452,822,o,2.2)
C.kH(v,22,24,436,806,o,1)
C.hcE(v,!1,!1,o,p,p,36,14,16)
C.kW(v,240,20,7,o,!0)
C.kW(v,240,834,7,o,!0)
C.kW(v,18,427,7,o,!0)
C.kW(v,462,427,7,o,!0)
return v
case 23:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,i,4293910712)
C.tc(v,i)
B.iU(v,!0,C.fE(u),0,479,0,20)
B.iU(v,!0,C.fE(u),0,479,834,853)
B.iU(v,!0,C.fE(u),0,20,0,853)
B.iU(v,!0,C.fE(u),460,479,0,853)
B.iU(v,!0,C.fE(f),5,474,5,9)
B.iU(v,!0,C.fE(f),5,474,844,848)
B.iU(v,!0,C.fE(f),5,9,5,848)
B.iU(v,!0,C.fE(f),470,474,5,848)
C.kH(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ho(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,e,4294174404)
C.tc(v,e)
C.bBM(v,14,16,p)
B.iU(v,!0,C.fE(u),3,476,3,8)
B.iU(v,!0,C.fE(u),3,476,845,850)
B.iU(v,!0,C.fE(u),3,8,3,850)
B.iU(v,!0,C.fE(u),471,476,3,850)
C.kH(v,9,10,462,834,t,1)
C.kH(v,14,16,452,822,u,1.8)
C.kW(v,240,8,4,u,!0)
C.kW(v,240,846,4,u,!0)
C.kW(v,8,427,4,u,!0)
C.kW(v,472,427,4,u,!0)
C.kW(v,8,8,3,t,!0)
C.kW(v,472,8,3,t,!0)
C.kW(v,8,846,3,t,!0)
C.kW(v,472,846,3,t,!0)
return v}},
z_(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.F(A.j.V(q*w+p*t),0,255)
u=A.o.F(A.j.V(o*w+n*t),0,255)
w=A.o.F(A.j.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kY(d,!1,A.di,new B.MB(s),r,A.d1,1,0,w-1,k,k);++k}},
tc(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
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
v=A.o.F(A.j.M(s.gb8(s))-3,0,255)
r=A.o.F(A.j.M(s.gbe())-3,0,255)
q=A.o.F(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kH(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.kY(d,!0,A.di,u,v,A.d1,j,e,t,f,f)
w=f+h
B.kY(d,!0,A.di,u,v,A.d1,j,e,t,w,w)
B.kY(d,!0,A.di,u,v,A.d1,j,e,e,f,w)
B.kY(d,!0,A.di,u,v,A.d1,j,t,t,f,w)},
Df(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.F(A.j.V(j*0.72),8,j-2)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,2,e,e+g*j,f,f)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kY(d,!0,A.di,C.fE(i),u,A.d1,1,w,e+g*t,v,v)
B.kY(d,!0,A.di,C.fE(i),u,A.d1,1,w,w,v,f+h*t)},
hyq(d,e,f,g){var w=null,v=B.ho(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
C.z_(v,d,e)
C.tc(v,d)
B.iU(v,!0,C.fE(f),0,479,0,28)
B.iU(v,!0,C.fE(f),0,479,826,853)
B.iU(v,!0,C.fE(f),0,28,0,853)
B.iU(v,!0,C.fE(f),452,479,0,853)
C.kH(v,5,5,470,844,g,1.1)
C.kH(v,28,28,424,798,g,1.6)
C.Df(v,2,2,1,1,g,11)
C.Df(v,478,2,-1,1,g,11)
C.Df(v,2,852,1,-1,g,11)
C.Df(v,478,852,-1,-1,g,11)
return v},
foI(d,e,f){var w=null,v=B.ho(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
C.z_(v,d,e)
C.tc(v,d)
C.kH(v,14,16,452,822,f,1.6)
C.kH(v,20,22,440,810,f,0.8)
return v},
bBM(d,e,f,g){var w,v=C.fE(g)
B.iU(d,!0,v,0,479,0,f-1)
w=854-f
B.iU(d,!0,v,0,479,w,853);--w
B.iU(d,!0,v,0,e-1,f,w)
B.iU(d,!0,v,480-e,479,f,w)},
i56(d){var w,v,u=4291404327
C.bBM(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kW(d,w,8,3,u,!0)
C.kW(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kW(d,7,v,3,u,!0)
C.kW(d,473,v,3,u,!0)}return d},
fBx(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jq(e,f),new B.jq(e+g*n,f),new B.jq(e,f+h*n)],t)
B.a2V(d,C.fE(m),s)
w=A.o.F(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jq(s,u),new B.jq(e+g*v,u),new B.jq(s,f+h*v)],t)
B.a2V(d,C.fE(k),t)
t=A.j.V(n*0.39)
C.kW(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kW(d,e+g*t,f+h*3,4,k,!0)
C.kW(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kW(d,e+g*t,f,5,k,!0)
C.kW(d,e,f+h*t,5,k,!0)}},
hcE(d,e,f,g,h,i,j,k,l){var w,v
C.fBx(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fBx(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fBx(d,k,v,1,-1,e,f,g,h,i,j)
C.fBx(d,w,v,-1,-1,e,f,g,h,i,j)},
a2a(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ll(d,!0,A.di,new B.rm(p),null,A.d1,j,r,q)}},
fAt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.di,new B.rm(o),null,A.d1,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.di,new B.rm(o),null,A.d1,1.4,q,q,p,p+h*r)}},
i33(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ho(o,o,A.cb,0,A.e4,854,o,0,3,o,A.cb,480,!1)
C.z_(n,d,e)
C.tc(n,d)
C.kH(n,20,20,440,814,f,1.2)
C.fAt(n,0,0,1,1,g)
C.fAt(n,480,0,-1,1,g)
C.fAt(n,0,854,1,-1,g)
C.fAt(n,480,854,-1,-1,g)
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
B.kY(n,!0,A.di,new B.rm(p),o,A.d1,1.2,240,r,60,q)}return n},
fyk(d,e,f,g,h){var w
C.fFa(d,!0,C.fE(g),13,e,f)
C.fFa(d,!0,C.fE(g),9,e,f)
w=B.a([new B.jq(e,f-4),new B.jq(e+4,f),new B.jq(e,f+4),new B.jq(e-4,f)],x.J)
B.a2V(d,C.fE(h),w)},
kW(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jq(e,v),new B.jq(u,f),new B.jq(e,t),new B.jq(s,f)],x.J)
if(i){B.a2V(d,C.fE(h),r)
return}B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,e,u,v,f)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,u,e,f,t)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,e,s,t,f)
B.kY(d,!0,A.di,C.fE(h),w,A.d1,1,s,e,f,v)},
fnB(d,e,f,g,h,i,j){var w,v=B.a([new B.jq(e,f),new B.jq(e+g*28,f),new B.jq(e,f+h*28)],x.J)
B.a2V(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kW(d,v,w,6,j,!0)
C.kW(d,v,w,3,i,!0)},
fnC(d,e,f,g,h){var w=null,v=B.ho(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
C.z_(v,d,e)
C.tc(v,d)
C.kH(v,18,18,444,818,f,2)
C.kH(v,26,26,428,802,f,0.9)
if(h!=null)B.iU(v,!0,C.fE(h),28,451,28,34)
C.fnB(v,18,18,1,1,g,f)
C.fnB(v,462,18,-1,1,g,f)
C.fnB(v,18,836,1,-1,g,f)
C.fnB(v,462,836,-1,-1,g,f)
return v},
i6f(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ho(v,v,A.cb,0,A.e4,854,v,0,3,v,A.cb,480,!1)
C.z_(r,u,4294240980)
C.tc(r,u)
C.kH(r,10,12,460,830,t,3.2)
C.kH(r,18,20,444,814,s,1.2)
C.kH(r,24,26,432,802,t,1.8)
C.hcE(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kW(r,w,16,3,t,!0)
C.kW(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kW(r,16,w,3,t,!0)
C.kW(r,464,w,3,t,!0)}return r},
i6g(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ho(t,t,A.cb,0,A.e4,854,t,0,3,t,A.cb,480,!1)
C.z_(p,s,4294373080)
C.tc(p,s)
C.kH(p,16,18,448,818,r,2.4)
C.kH(p,24,26,432,802,4286209044,1)
w=new C.fq1(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hcE(p,!1,!0,r,q,q,34,16,18)
return p},
bCt(d,e,f,g,h,i){B.iU(d,!0,C.fE(i),e,e+g,f,f+h)},
bDk(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.F(A.j.V(v*l+u*m),0,255)
j=A.o.F(A.j.V(t*l+s*m),0,255)
l=A.o.F(A.j.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kY(d,!1,A.di,new B.MB(i),null,A.d1,1,e,w,l,l)}},
i78(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.aq(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.di,new B.rm(r),null,A.d1,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.aq(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.di,new B.rm(r),null,A.d1,1,t,t,f,s);++q}},
i79(d,e){var w,v,u=null,t=B.ho(u,u,A.cb,0,A.e4,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i78(t,v,w,30,D.d46,(A.o.aq(v,30)+A.o.aq(w,30)&1)===0)
C.bCt(t,44,44,392,766,d)
C.bDk(t,44,44,392,766,d,e)
C.tc(t,d)
C.kH(t,44,44,392,766,4292128567,2.2)
C.kH(t,50,50,380,754,4279898632,0.8)
return t},
i8i(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kW(d,e,f,7,h,!0)
C.kW(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.6,w,u,v,t)
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kY(d,!0,A.di,new B.rm(p),o,A.d1,1.2,w,v,q,q)}break
default:B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.5,e-8,e+8,f,f)
B.kY(d,!0,A.di,C.fE(h),o,A.d1,1.5,e,e,f-8,f+8)
B.ll(d,!0,A.di,C.fE(h),o,A.d1,2,e,f)}},
i8j(d,e){var w,v,u,t,s=null,r=B.ho(s,s,A.cb,0,A.e4,854,s,0,3,s,A.cb,480,!1)
B.iU(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i8i(r,u,v,w,4292391514)}C.bCt(r,46,46,388,762,d)
C.bDk(r,46,46,388,762,d,e)
C.tc(r,d)
C.kH(r,46,46,388,762,4291404327,1.8)
return r},
htH(d,e,f,g){C.fFa(d,!0,C.fE(g),16,e,f)
C.fFa(d,!0,C.fE(g),11,e,f)
C.kW(d,e,f,6,g,!0)
B.kY(d,!0,A.di,C.fE(g),null,A.d1,1.3,e-14,e+14,f,f)
B.kY(d,!0,A.di,C.fE(g),null,A.d1,1.3,e,e,f-14,f+14)},
i2V(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ho(v,v,A.cb,0,A.e4,854,v,0,3,v,A.cb,480,!1)
B.iU(s,!0,C.fE(4280948752),0,479,0,853)
B.iU(s,!0,C.fE(u),0,479,0,78)
B.iU(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.htH(s,w,39,t)
C.htH(s,w,815,t)}C.bCt(s,38,92,404,670,d)
C.bDk(s,38,92,404,670,d,e)
C.tc(s,d)
C.kH(s,38,92,404,670,t,1.8)
C.kH(s,45,99,390,656,4287322667,0.8)
return s},
i7J(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jq(e,f),new B.jq(q-5,w),new B.jq(q,f-(18-Math.abs(r)*3)),new B.jq(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2V(d,new B.rm(o),p)}B.ll(d,!0,A.di,C.fE(4292128567),null,A.d1,3,e,f)},
i7K(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ho(s,s,A.cb,0,A.e4,854,s,0,3,s,A.cb,480,!1)
C.z_(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kY(q,!0,A.di,new B.rm(v),s,A.d1,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kY(q,!0,A.di,new B.rm(u),s,A.d1,1.1,v,v,0,853)}B.iU(q,!0,C.fE(r),0,479,0,70)
B.iU(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.i7J(q,70+t*85,48,4292128567)
C.bCt(q,48,78,384,712,d)
C.bDk(q,48,78,384,712,d,e)
C.tc(q,d)
C.kH(q,48,78,384,712,4291404327,1.6)
return q},
ic8(d,e){var w,v,u,t=null,s=4279970378,r=B.ho(t,t,A.cb,0,A.e4,854,t,0,3,t,A.cb,480,!1)
B.iU(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kW(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ll(r,!0,A.di,new B.rm(u),t,A.d1,1,v,w)}C.bCt(r,40,40,400,774,d)
C.bDk(r,40,40,400,774,d,e)
C.tc(r,d)
C.kH(r,40,40,400,774,4291058750,2)
C.kH(r,48,48,384,758,s,0.8)
return r},
l8:function l8(d,e){this.a=d
this.b=e},
fPE:function fPE(d){this.a=d},
fPD:function fPD(d){this.a=d},
fq1:function fq1(d){this.a=d},
fQh(d){var w
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
i8c(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hb9(d){var w,v,u,t=null,s=A.a.cp(d,"{"),r=A.a.p0(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Ak.ahR(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a3(w,x.N,x.z):t
return v}catch(u){return t}},
agk(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$agk)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nh(n)
if(e==null)s=A.hW
else{r=C.i8c(e)
s=B.a([new B.a17(A.cO.gcu().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rb(t,d,s,"news",E.Gx),$async$agk)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LM(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agk,v)},
bEY(d){return C.ilj(d)},
ilj(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bEY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.az(d.ak(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agk(r,null),$async$bEY)
case 7:q=f
p=C.hb9(q)
if(p==null){u=d
w=1
break}o=d.aEy(p)
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
return B.i($async$bEY,v)},
hxE(d){var w,v=F.hdN(d)
v=B.aL(v,"book","newspaper")
if(F.a3e(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fUg(d,e,f,g){return C.inc(d,e,f,g)},
inc(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fUg=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fQh(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hBu()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agk('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hxE(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fUg)
case 3:r=m.hb9(i)
if(r==null)throw B.W(y.S)
q=new C.A5(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEy(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3e(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3e(A.d.aO(t," "))==="sw"?C.bEY(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUg,v)},
bEs(d,e,f,g,h){return C.iiU(d,e,f,g,h)},
iiU(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEs=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hBu()
k=A.Y.az(d.ak(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agk('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hxE(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEs)
case 3:p=j.hb9(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEy(B.a3(o,x.N,x.z))
m=A.Y.az(n.ak(),null)!==A.Y.az(d.ak(),null)}else{n=d
m=!1}w=m&&F.a3e(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bEY(n),$async$bEs)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8O(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEs,v)},
a8O:function a8O(d,e,f){this.a=d
this.b=e
this.c=f},
iq0(d,e){return B.a6(d,!1).cd(B.eb(new C.h0r(e),!0,null,x.H))},
h0r:function h0r(d){this.a=d},
WQ:function WQ(d,e){this.c=d
this.a=e},
aFE:function aFE(d,e,f,g,h,i,j,k){var _=this
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
esv:function esv(d){this.a=d},
esu:function esu(){},
esw:function esw(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
esx:function esx(){},
es7:function es7(d,e){this.a=d
this.b=e},
es3:function es3(d,e){this.a=d
this.b=e},
ese:function ese(d){this.a=d},
esf:function esf(d,e){this.a=d
this.b=e},
esg:function esg(d){this.a=d},
es9:function es9(d,e){this.a=d
this.b=e},
esa:function esa(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
esc:function esc(d){this.a=d},
esd:function esd(d){this.a=d},
es8:function es8(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
esm:function esm(d){this.a=d},
esn:function esn(d){this.a=d},
esl:function esl(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
esk:function esk(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esj:function esj(d){this.a=d},
esq:function esq(d){this.a=d},
esi:function esi(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
esh:function esh(d,e){this.a=d
this.b=e},
ess:function ess(d){this.a=d},
es4:function es4(d,e){this.a=d
this.b=e},
fPd(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fPd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvg){w=1
break}r=new C.fPe()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fPd)
case 7:$.hvg=!0
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
return B.i($async$fPd,v)},
bEP(d){return A.Dj[B.mn(d)-1]+", "+A.oH[B.bK(d)-1]+" "+B.bV(d)+", "+B.bB(d)},
ibf(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dw3[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
heb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fNw(),B.U(v).k("Y<1>")))
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
continue}o=new C.fNy(j,h)
n=new C.fNx(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.aq(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
haT(d,e){var w=new C.fpB()
return A.d.cI(e,0,new C.fpz(w))>=A.d.cI(d,0,new C.fpA(w))},
hsm(d){var w,v,u=new B.aF($.S().r,A.ah,null,null,B.a([],x.v))
u.D(new B.aY(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bt())
return u},
A5:function A5(d,e,f,g,h,i,j,k,l,m){var _=this
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
ciH:function ciH(d){this.a=d},
ciF:function ciF(){},
ciG:function ciG(){},
tJ:function tJ(d,e){this.a=d
this.b=e},
C3:function C3(d,e){this.a=d
this.b=e},
lv:function lv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fPe:function fPe(){},
fNw:function fNw(){},
fNy:function fNy(d,e){this.a=d
this.b=e},
fNx:function fNx(d,e,f){this.a=d
this.b=e
this.c=f},
fpB:function fpB(){},
fpC:function fpC(){},
fpz:function fpz(d){this.a=d},
fpA:function fpA(d){this.a=d},
b2G:function b2G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ciI:function ciI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciJ:function ciJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciK:function ciK(d){this.a=d},
bej:function bej(d){this.a=d},
bei:function bei(d,e){this.b=d
this.a=e},
bwh:function bwh(d){this.a=d},
baM:function baM(d,e){this.b=d
this.a=e},
btL:function btL(d,e){this.b=d
this.a=e},
hDy(d,e){return B.a6(d,!1).cd(B.eb(new C.h0u(e,null),!0,null,x.E))},
h0u:function h0u(d,e){this.a=d
this.b=e},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
aFH:function aFH(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eth:function eth(){},
eti:function eti(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
et5:function et5(d){this.a=d},
etb:function etb(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
et9:function et9(d){this.a=d},
eta:function eta(d,e,f){this.a=d
this.b=e
this.c=f},
et6:function et6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etd:function etd(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
ete:function ete(d){this.a=d},
et7:function et7(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
bdR:function bdR(d,e,f){this.b=d
this.c=e
this.a=f},
iq6(d){return B.a6(d,!1).cd(B.eb(new C.h0K(),!0,null,x.I))},
bCe(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hcl(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h0K:function h0K(){},
a0Z:function a0Z(d){this.a=d},
oQ:function oQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aH5:function aH5(d,e,f,g,h,i,j,k,l){var _=this
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
_.aI=_.aR=_.aL=_.aH=_.a_=_.bb=_.bn=_.y2=0
_.b7=null
_.b6=0.25
_.bf=null
_.bJ=0.5
_.aP=1
_.c9=_.bG=_.bm=0
_.cO=_.c6=!1
_.c=_.a=null},
f29:function f29(d){this.a=d},
f11:function f11(d,e){this.a=d
this.b=e},
f1p:function f1p(d,e){this.a=d
this.b=e},
f1z:function f1z(d){this.a=d},
f0L:function f0L(d){this.a=d},
f0M:function f0M(d){this.a=d},
f0J:function f0J(d){this.a=d},
f0K:function f0K(d){this.a=d},
f1i:function f1i(d,e){this.a=d
this.b=e},
f1j:function f1j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1v:function f1v(d,e,f){this.a=d
this.b=e
this.c=f},
f1u:function f1u(d,e){this.a=d
this.b=e},
f1w:function f1w(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1y:function f1y(d,e,f){this.a=d
this.b=e
this.c=f},
f1x:function f1x(d,e){this.a=d
this.b=e},
f0B:function f0B(d){this.a=d},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0A:function f0A(){},
f0E:function f0E(d,e){this.a=d
this.b=e},
f0z:function f0z(d,e){this.a=d
this.b=e},
f0G:function f0G(){},
f0F:function f0F(d,e){this.a=d
this.b=e},
f0y:function f0y(d,e){this.a=d
this.b=e},
f0v:function f0v(d,e){this.a=d
this.b=e},
f0H:function f0H(d){this.a=d},
f0x:function f0x(d,e){this.a=d
this.b=e},
f0I:function f0I(d){this.a=d},
f0w:function f0w(d,e){this.a=d
this.b=e},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f25:function f25(d){this.a=d},
f26:function f26(d,e){this.a=d
this.b=e},
f27:function f27(){},
f2_:function f2_(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d,e){this.a=d
this.b=e},
f20:function f20(d,e){this.a=d
this.b=e},
f1X:function f1X(d,e){this.a=d
this.b=e},
f21:function f21(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1W:function f1W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f22:function f22(d){this.a=d},
f23:function f23(d,e){this.a=d
this.b=e},
f24:function f24(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1H:function f1H(d,e){this.a=d
this.b=e},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1K:function f1K(d){this.a=d},
f1N:function f1N(d){this.a=d},
f1G:function f1G(d){this.a=d},
f1O:function f1O(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1F:function f1F(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1E:function f1E(d){this.a=d},
f1T:function f1T(d,e){this.a=d
this.b=e},
f1D:function f1D(d,e){this.a=d
this.b=e},
f1U:function f1U(d){this.a=d},
f1L:function f1L(d){this.a=d},
f1M:function f1M(d){this.a=d},
f1m:function f1m(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1n:function f1n(d,e){this.a=d
this.b=e},
f1k:function f1k(d,e){this.a=d
this.b=e},
f1o:function f1o(d){this.a=d},
f1e:function f1e(d){this.a=d},
f1d:function f1d(d){this.a=d},
f1f:function f1f(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1g:function f1g(d,e){this.a=d
this.b=e},
f1b:function f1b(d,e){this.a=d
this.b=e},
f1a:function f1a(d,e){this.a=d
this.b=e},
f0T:function f0T(d){this.a=d},
f0U:function f0U(d){this.a=d},
f0V:function f0V(d){this.a=d},
f0W:function f0W(d){this.a=d},
f0X:function f0X(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0Z:function f0Z(d){this.a=d},
f1_:function f1_(d){this.a=d},
f10:function f10(d){this.a=d},
f0e:function f0e(d){this.a=d},
f0f:function f0f(d){this.a=d},
f0g:function f0g(d){this.a=d},
f0h:function f0h(d){this.a=d},
f0i:function f0i(d){this.a=d},
f0d:function f0d(d){this.a=d},
f0j:function f0j(d){this.a=d},
f0k:function f0k(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0O:function f0O(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0R:function f0R(d){this.a=d},
f0o:function f0o(d){this.a=d},
f0p:function f0p(d){this.a=d},
f0q:function f0q(d){this.a=d},
f0r:function f0r(d){this.a=d},
f0s:function f0s(d){this.a=d},
f0n:function f0n(d){this.a=d},
f0t:function f0t(d){this.a=d},
f0m:function f0m(d){this.a=d},
f0u:function f0u(d){this.a=d},
f0l:function f0l(d){this.a=d},
f1h:function f1h(d){this.a=d},
f19:function f19(d){this.a=d},
f15:function f15(d){this.a=d},
f14:function f14(d){this.a=d},
f16:function f16(d,e){this.a=d
this.b=e},
f13:function f13(d,e){this.a=d
this.b=e},
f17:function f17(d,e){this.a=d
this.b=e},
f12:function f12(d,e){this.a=d
this.b=e},
f18:function f18(d){this.a=d},
f1s:function f1s(d){this.a=d},
f1r:function f1r(d,e,f){this.a=d
this.b=e
this.c=f},
f1q:function f1q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1B:function f1B(d,e){this.a=d
this.b=e},
f1A:function f1A(d,e){this.a=d
this.b=e},
f0S:function f0S(d){this.a=d},
f28:function f28(d){this.a=d},
bhs:function bhs(d,e){this.b=d
this.a=e},
ilu(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ilv(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
bCP(){var w=$.bBW,v=$.Rl
$.Rl=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,C.bCP(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cq,D.fg,g,e,f)},
oh(d,e,f,g){var w=f*9
return C.ii(D.eX,d-f/2,e-w/32,f,w/16,g,0)},
i4E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bBW
o=$.Rl
$.Rl=o+1
w.push(new C.eN(p+"_"+o,D.fg,0,q,1,0.0016,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bBW
o=$.Rl
$.Rl=o+1
w.push(new C.eN(p+"_"+o,D.fg,n,0,0.004,1,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}w.push(C.oh(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.oh(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bj,0.08,0.08,0.5,0.003,v,0),C.ii(D.bj,0.58,0.08,0.004,0.06,v,0),C.ii(D.bj,0.58,0.14,0.34,0.003,v,0),C.ii(D.bj,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bj,0.08,0.8,0.004,0.14,t,0),C.ii(D.bj,0.08,0.94,0.6,0.003,t,0),C.oh(0.58,0.08,0.05,e),C.oh(0.92,0.22,0.05,e),C.oh(0.08,0.8,0.05,f),C.oh(0.68,0.94,0.05,f),C.oh(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lr,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lr,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lr,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lr,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.oh(0.5,0.5,1.5,w|335544320),C.oh(0.5,0.5,1.15,w|402653184),C.oh(0.5,0.5,0.8,v|436207616),C.oh(0.95,0.05,0.4,v|855638016),C.oh(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.oh(0.85,0.08,0.7,w|1140850688),C.oh(0.1,0.35,0.5,v|855638016),C.oh(0.9,0.62,0.55,v|771751936),C.oh(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ii(D.bj,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ii(D.bj,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ii(D.bj,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ii(D.bj,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.oh(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.oh(0.5,0.2,0.65,(w|3422552064)>>>0),C.oh(0.5,0.2,0.95,w|855638016),C.ii(D.bj,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ii(D.bj,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ii(D.kb,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.kb,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.kb,0.15,0.86,0.6,0.14,1712265002,0),C.oh(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d5F[m]
u=A.o.E(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bBW
l=$.Rl
$.Rl=l+1
w.push(new C.eN(o+"_"+l,D.fg,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bq,A.aG,k,A.bk,null,D.eX,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}w.push(C.oh(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.kb,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.kb,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.kb,0.65,-0.1,0.3,0.55,v,0.5),C.oh(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bj,0.06,0.04,0.88,0.002,e,0),C.ii(D.bj,0.06,0.96,0.88,0.002,e,0),C.ii(D.bj,0.06,0.04,0.004,0.92,e,0),C.ii(D.bj,0.936,0.04,0.004,0.92,e,0),C.ii(D.bj,0.09,0.07,0.82,0.001,w,0),C.ii(D.bj,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.kc,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.kc,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.kc,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bj,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bj,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bj,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bj,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eX,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eX,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eX,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eX,-0.05,0.9,0.4,0.12,v,-0.9),C.oh(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bj,0.09,0.12,0.16,0.006,e,0),C.ii(D.bj,0.05,0.03,0.9,0.001,w,0),C.ii(D.bj,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ihX(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBW=j
$.Rl=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fKV()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_background",m,24,A.bq,A.a8,"",1,C.bCP(),g,"","",0,!1,"",0,D.bj,l,2,"",0,0,"",D.cq,D.lR,1,0,0))
if(a9)A.d.v(q,C.i4E(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.F(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ilu(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fKU(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.F(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bq,A.a8,a1,a3*9/16,C.bCP(),a0,"","",0,!1,a2,0,D.bj,l,2,"",0,0,"",D.cq,D.lR,a3,a4,a5))
return C.rS(s,r,0,0,q,j+"_slide",D.qW,"","","",D.dk)},
rR:function rR(d,e){this.a=d
this.b=e},
ml:function ml(d,e,f,g,h,i,j,k,l,m){var _=this
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
fKV:function fKV(){},
fKU:function fKU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hVu(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ckc(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.A6(u,t,s,B.w(w==null?"":w))},
fSD(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fSD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvD){w=1
break}$.hvD=!0
t=4
w=7
return B.b(B.az(),$async$fSD)
case 7:r=e
q=B.aT(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i7(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hVu(m)
if(l!=null)J.c6(n,l)}$.Dg.c3(0,B.w(o.a),new C.fSE(n))}C.hc_()
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
return B.i($async$fSD,v)},
hc_(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dg,$.Dg.r,$.Dg.e);w.C();)J.nM(w.d,new C.fxB(v))
$.Dg.bt($.Dg,new C.fxC())},
aPK(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPK=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPK)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.ck($.Dg,B.a4($.Dg).k("ck<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gR(h)
g=o
J.c6(p,B.H(["at",g.a.ab().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aA("String","ngmy_slides_ai_history_v1",A.Y.az(n,null)),$async$aPK)
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
return B.i($async$aPK,v)},
im7(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hc_()
w=$.Dg.c3(0,d,new C.fSG())
v=Date.now()
u=B.C(e,B.a4(e).k("cg.E"))
J.pT(w,0,new C.A6(new B.V(v,0,!1),f,u,g))
C.aPK()},
im4(d){var w,v=$.Dg.h(0,d)
if(v==null||J.cr(v))return
w=J.cC(v)
w.cA(v,0)
if(w.gav(v))$.Dg.W(0,d)
C.aPK()},
A6:function A6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckc:function ckc(){},
fSE:function fSE(d){this.a=d},
fxB:function fxB(d){this.a=d},
fxC:function fxC(){},
fSG:function fSG(){},
im9(d){return A.d.dP(D.wT,new C.fSJ(d),new C.fSK())},
hVs(d){var w
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
hVr(d){var w
switch(d.a){case 0:w=D.apg
break
case 1:w=A.ze
break
case 2:w=A.PF
break
case 3:w=I.aoW
break
case 4:w=A.apM
break
case 5:w=A.mg
break
default:w=null}return w},
i7P(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RJ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RJ[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hVt(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
im5(d,e,f,g,h){var w=new B.N(D.wT,new C.fSC(),x.eC).aO(0,", "),v=""+d,u=C.hBm(h),t=F.fMj(h),s=C.hxi(g),r=e.q(0,D.Je)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jf)?'- New slides get an "icon3d" from: '+A.d.aO(D.RJ,", ")+".\n":"",p=e.q(0,D.DU)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
im6(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wT,new C.fSF(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Je)){p.a=s
w=s}else w=""
if(e.q(0,D.Jf))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RJ,", ")+".\n")
if(e.q(0,D.DU))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hBm(d)
v=F.fMj(d)
u=C.hxi(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ai6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DF(a3,"{"),a5=J.h42(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.M6(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cr(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fQA(),m).bZ(0,new C.fQB())
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
f=C.i7P(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c6(u,new C.a8W(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.aW(D.wT,new C.fQC(r))?r:a7
o=C.fwR(J.t(w,"logo_frame"),D.Df)
n=C.fwR(J.t(w,"logo_ring"),D.D8)
m=C.fwR(J.t(w,"photo_frame"),D.Df)
l=C.fwR(J.t(w,"photo_ring"),D.D8)
return new C.asA(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2L(d,e){return(A.o.F(e,0,255)<<24|d&16777215)>>>0},
hAt(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DV),f7=f6?C.i1f():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.d_(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o4("luxe",u.a,A.mg,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dk)
w=s}if(w==null)w=C.im9(f9.b)
r=g2.q(0,D.a7L)||f6
q=g2.q(0,D.Je)
p=g2.q(0,D.TI)
o=new C.fKZ()
n=B.a([],x.g)
m=new C.fL1(o,w,r)
l=new C.fL0(o,r)
k=new C.fL_(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aW(u,new C.fKY(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.d7l[b8]
c0=D.d6b[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f9g.q(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eX,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.F(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eX,0.7,-0.25,0.46,0.82,(A.o.F(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,-0.08,0.68,0.24,0.43,(A.o.F(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n4,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qX,500,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TF
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eX,0.64,0.46,0.42,0.75,(A.o.F(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lr,0.78,0.1,0.18,0.32,(A.o.F(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bj,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DS
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eX,-0.12,-0.2,0.36,0.64,(A.o.F(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.82,0.66,0.26,0.46,(A.o.F(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n4,(A.o.F(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cF,A.V))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qX,500,f2,f0))
d3=D.n3
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eX,0.58,0.04,0.44,0.8,(A.o.F(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bj,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vd:D.cq
c1.push(new C.eN(b4,D.a7J,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bq,A.aG,4279310375,A.bk,e4,D.bj,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n3
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eX,-0.15,-0.3,0.5,0.9,(A.o.F(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.78,0.62,0.3,0.54,(A.o.F(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n4,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qX,450,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TF
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eX,b4,0.52,0.3,0.54,(A.o.F(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eX,b4,-0.18,0.26,0.46,(A.o.F(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bj,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bj,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jc,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n3}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dk,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i2U(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dyw[A.o.E(b1,6)]:s
n.push(new C.lY(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ch(e4,e4,e4,e4,D.DR,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fNm(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fNm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DU)
n=e.q(0,D.Jf)
if(!o&&!n){u=D.a6G
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fNp(o,s[r],n,$.i6w,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fNm)
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
return B.i($async$fNm,v)},
fMm(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fMm=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.im6(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aP3(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fMm)
case 3:u=s.aPp(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMm,v)},
bEt(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEt=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dY(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.im7(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ai6(i,"colorful")
t=C.im5(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aP3(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hW),$async$bEt)
case 3:u=o.aPp(m,f,h,g,D.ec1,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEt,v)},
aP3(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aP3=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$aP3)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nh(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rb(t,d,g,"slides",null),$async$aP3)
case 7:q=i
p=q.b
if(p!=null){o=C.ai6(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LM(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aP3,v)},
aPp(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPp=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DU)||e.q(0,D.Jf)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DU)}w=6
return B.b(C.fNm(d,t),$async$aPp)
case 6:s=k
w=4
break
case 5:s=D.a6G
case 4:t=d.c
w=A.d.aW(t,new C.fpv())?7:9
break
case 7:r=$.hCe
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPp)
case 10:q=k
p=q!=null?A.Y.az(q.ak(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hAt(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hVt(new C.asA(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,m>")
t=B.C(new B.N(m,new C.fpw(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k5<cg.E,m>")
t=B.C(new B.k5(e,new C.fpx(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TI)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPp,v)},
heV(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5q[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
iqb(d){return B.bT(A.L,null,new C.h0W(),d,!0,!0,!0,null,!1,!1,x.I)},
i1T(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cO.gcu().aM(d)},
iqa(d,e,f){return B.bT(A.L,null,new C.h0V(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
heW(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
heX(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fwR(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aW(e,new C.fwS(w))?w:""},
hxi(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hCc(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ai6(a1==null?"":a1,a0),a3=C.ai6(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.nv(new B.Y(r,new C.fSL(t[p]),q))
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
g=B.C(new B.Y(k,new C.fSM(),v),r)
A.d.aZ(g,new C.fSN())
if(g.length===0)continue
f=new C.fSO(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
imq(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKI
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edV
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edW
return null},
hwV(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cK(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ima(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.F(a1,0,d-1)]],x.g)
w=a0.d===D.oM
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cX)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.F(m*0.85,10,120)
break
case 1:j=A.j.F(m*1.15,10,120)
if(C.hwV(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hwV(n,i,v,u))if(n.w>10){f=h+1
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
im8(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ai6(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5q[r]
if(q.b===s)w.J(0,q)}}v=C.heW(e)
u=C.heX(e)
p=C.hAt(n,D.a6G,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,m>")
o=B.C(new B.N(o,new C.fSH(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k5<cg.E,m>")
o=B.C(new B.k5(w,new C.fSI(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TI)
return p},
ipY(d,e,f){return B.bT(A.L,null,new C.h08(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i1f(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.d_(t)
w=D.cLo[s.aw(10)]
v=new C.eoW(s)
u=x.N
return new C.eoV(w,s.aw(4),J.fq(v.$1$2(D.dc7,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dtH,2+s.aw(2),u),v.$1$2(D.dma,2,u),v.$1$2(D.dwX,4,x.fP),t)},
i2U(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.d_(a5.w+a3*13)
w=new C.flQ(a4)
v=new C.flS(a4,d)
u=new C.flR(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cX){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c4(a2,0,w.$8(D.eX,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a2L(a0,52),"lux_spot",a5.xb(0,"spotlight")))
else A.d.c4(a2,0,w.$8(D.bj,0,0,1,1,0,"lux_back",a5.xb(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c4(a2,1,w.$8(D.bj,0,0,1,1,0,"lux_back2",a5.aH7(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.022,0.038,0.956,0.924,0,g,a5.xb(0,f),D.dk,150,C.a2L(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.018,0.032,0.964,0.936,0,g,a5.xb(0,f),D.dk,120,C.a2L(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dk,260,C.a2L(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bj,0,0,1,1,0,"lux_filigree",a5.xb(0,"filigree"),D.dk,200))
break
default:a2.push(w.$10$anim$delay(D.bj,0.08,0.06,0.84,0.004,C.a2L(a0,208),"lux_rule",a5.aH7(0,"shimmer",r),D.vc,150))
a2.push(w.$10$anim$delay(D.bj,0.08,0.936,0.84,0.004,C.a2L(a0,144),"lux_rule2","",D.Jc,220))}l=!A.d.aW(a2,new C.flP())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xb(0,"crest"),350))
else{o=a1.h8()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xb(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2L(r,242)
j=a5.xb(0,"orbit")
i=s===D.bj?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qX,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eX,t-0.007,0.9495,0.014,0.025,C.a2L(r,242),"lux_g2",a5.xb(0,"orbit"),D.qX,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.bj,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bj,0,0,1,1,0,"lux_velvet",a5.xb(0,"velvet")))},
o4:function o4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fSJ:function fSJ(d){this.a=d},
fSK:function fSK(){},
wq:function wq(d,e){this.a=d
this.b=e},
a8W:function a8W(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asA:function asA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fSC:function fSC(){},
fSF:function fSF(){},
fQA:function fQA(){},
fQB:function fQB(){},
fQC:function fQC(d){this.a=d},
fKZ:function fKZ(){},
fL1:function fL1(d,e,f){this.a=d
this.b=e
this.c=f},
fL0:function fL0(d,e){this.a=d
this.b=e},
fL_:function fL_(d,e){this.a=d
this.b=e},
fKY:function fKY(d){this.a=d},
fNp:function fNp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fNn:function fNn(d){this.a=d},
fNo:function fNo(d){this.a=d},
fpv:function fpv(){},
fpw:function fpw(){},
fpx:function fpx(){},
h0W:function h0W(){},
a1v:function a1v(d){this.a=d},
aJ0:function aJ0(d,e,f,g,h){var _=this
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
f8w:function f8w(d,e,f){this.a=d
this.b=e
this.c=f},
f8x:function f8x(d,e){this.a=d
this.b=e},
f8u:function f8u(d,e){this.a=d
this.b=e},
f8v:function f8v(d,e){this.a=d
this.b=e},
f8t:function f8t(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f8o:function f8o(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8s:function f8s(d,e){this.a=d
this.b=e},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8r:function f8r(d,e){this.a=d
this.b=e},
f8m:function f8m(d,e){this.a=d
this.b=e},
f8p:function f8p(d){this.a=d},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8c:function f8c(d,e){this.a=d
this.b=e},
f8d:function f8d(d,e){this.a=d
this.b=e},
f8f:function f8f(d){this.a=d},
f8g:function f8g(d){this.a=d},
f8h:function f8h(d){this.a=d},
f8i:function f8i(d){this.a=d},
f8e:function f8e(d,e){this.a=d
this.b=e},
f8j:function f8j(d,e){this.a=d
this.b=e},
f8K:function f8K(d){this.a=d},
f8L:function f8L(d){this.a=d},
f8J:function f8J(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8I:function f8I(d){this.a=d},
f8O:function f8O(d){this.a=d},
f8H:function f8H(d,e){this.a=d
this.b=e},
f8P:function f8P(d){this.a=d},
f8G:function f8G(d,e){this.a=d
this.b=e},
f8Q:function f8Q(d){this.a=d},
f8F:function f8F(d){this.a=d},
f8R:function f8R(d){this.a=d},
f8E:function f8E(d,e){this.a=d
this.b=e},
f8S:function f8S(d){this.a=d},
f8D:function f8D(d,e){this.a=d
this.b=e},
f8T:function f8T(d){this.a=d},
f8C:function f8C(d){this.a=d},
f8U:function f8U(d,e){this.a=d
this.b=e},
f8B:function f8B(d,e){this.a=d
this.b=e},
f8V:function f8V(d){this.a=d},
f8N:function f8N(d){this.a=d},
f8A:function f8A(d,e){this.a=d
this.b=e},
f8k:function f8k(d,e,f){this.a=d
this.b=e
this.c=f},
f8l:function f8l(d,e,f){this.a=d
this.b=e
this.c=f},
f8z:function f8z(d,e){this.a=d
this.b=e},
f8y:function f8y(d,e){this.a=d
this.b=e},
h0V:function h0V(d,e){this.a=d
this.b=e},
a1u:function a1u(d,e,f){this.c=d
this.d=e
this.a=f},
aJ_:function aJ_(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f85:function f85(d){this.a=d},
f86:function f86(d){this.a=d},
f87:function f87(d,e){this.a=d
this.b=e},
f88:function f88(d){this.a=d},
f89:function f89(d){this.a=d},
f84:function f84(d,e){this.a=d
this.b=e},
f8a:function f8a(d,e){this.a=d
this.b=e},
f8b:function f8b(d,e){this.a=d
this.b=e},
fwS:function fwS(d){this.a=d},
b34:function b34(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFy:function aFy(d,e,f){this.c=d
this.d=e
this.a=f},
bmd:function bmd(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
eoY:function eoY(d){this.a=d},
eoX:function eoX(){},
bjK:function bjK(d,e){this.b=d
this.a=e},
fSL:function fSL(d){this.a=d},
fSM:function fSM(){},
fSN:function fSN(){},
fSO:function fSO(d){this.a=d},
at7:function at7(d,e){this.a=d
this.b=e},
fSH:function fSH(){},
fSI:function fSI(){},
h08:function h08(d,e){this.a=d
this.b=e},
a_S:function a_S(d,e,f){this.c=d
this.d=e
this.a=f},
aD3:function aD3(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dsb:function dsb(d){this.a=d},
dsc:function dsc(d){this.a=d},
dsd:function dsd(d,e){this.a=d
this.b=e},
dsg:function dsg(d){this.a=d},
dsh:function dsh(d,e){this.a=d
this.b=e},
dsf:function dsf(d,e){this.a=d
this.b=e},
dsi:function dsi(d){this.a=d},
dse:function dse(d,e){this.a=d
this.b=e},
buT:function buT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eoV:function eoV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eoW:function eoW(d){this.a=d},
flQ:function flQ(d){this.a=d},
flS:function flS(d,e){this.a=d
this.b=e},
flR:function flR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flP:function flP(){},
aND:function aND(){},
hdK(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wj(B.a3(w,x.N,x.z))
return v}}catch(u){}return null},
b30:function b30(d,e,f){this.c=d
this.d=e
this.a=f},
bnO:function bnO(d,e){this.c=d
this.a=e},
iiq(d){return A.d.dP(D.Il,new C.fM5(d),new C.fM6())},
iir(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Il,new C.fM7(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jW("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ls:function ls(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fM5:function fM5(d){this.a=d},
fM6:function fM6(){},
fM7:function fM7(d){this.a=d},
n7(d,e,f,g,h){return new C.Fl(f,g,d)},
i49(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fnV(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.La
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c4(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bq,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cq,D.fg,j,k,l)},
hAg(d,e){var w
C.i49(d)
w=A.d.dP($.bGr(),new C.fJW(e),new C.fJX())
$.La=w.a
d.x=w.a;++d.y
try{w.ai(d)}finally{$.La=""}d.z=B.bo(d.z,!0,x.F)},
Fl:function Fl(d,e,f){this.a=d
this.b=e
this.e=f},
fnV:function fnV(){},
fSd:function fSd(){},
fSe:function fSe(){},
fSf:function fSf(){},
fSq:function fSq(){},
fSv:function fSv(){},
fSw:function fSw(){},
fSx:function fSx(){},
fSy:function fSy(){},
fSz:function fSz(){},
fSA:function fSA(){},
fSB:function fSB(){},
fSg:function fSg(){},
fSh:function fSh(){},
fSi:function fSi(){},
fSj:function fSj(){},
fSk:function fSk(){},
fSl:function fSl(){},
fSm:function fSm(){},
fSn:function fSn(){},
fSo:function fSo(){},
fSp:function fSp(){},
fSr:function fSr(){},
fSs:function fSs(){},
fSt:function fSt(){},
fSu:function fSu(){},
fJW:function fJW(d){this.a=d},
fJX:function fJX(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bj,4280172719,2,m,n,0,"",o,D.cX,p,q,r)},
Dx(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bq,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cq,D.fg,j,k,l)},
bFc(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bK(w)-1]+" "+B.bV(w)+", "+B.bB(w)},
ev:function ev(d,e,f){this.a=d
this.b=e
this.c=f},
bCz(d){return new B.j_((A.o.aJ(d,24)&255)/255,(A.o.aJ(d,16)&255)/255,(A.o.aJ(d,8)&255)/255,(d&255)/255)},
i9x(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.ao3(A.cG.aM(A.d.gal(d.split(","))))
return w}catch(v){return null}},
i9B(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fwa(),x.dv).aO(0,"\n")},
i9A(d){switch(d.a){case 2:return A.nP
case 1:case 5:return A.fkD
default:return A.V5}},
i9u(d){switch(d.a){case 2:return A.vK
case 1:case 5:return A.X6
default:return A.ad3}},
i9y(d,e){var w,v=null,u=d.ay,t=A.o.aJ(u,24),s=A.o.aJ(d.ch,24),r=(t&255)===0?v:C.bCz(u),q=(s&255)===0?v:C.bCz(d.ch),p=A.j.F(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nO(q,p,A.l6)
w=new B.pV(t,t,t,t)}switch(d.ax.a){case 1:return B.lN(v,v,v,new B.kO(r,w,v,A.aen,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xw(B.lN(v,v,q,v,p+0.4,v,v,v))
default:return B.lN(v,v,v,new B.kO(r,w,B.vT(4),A.i_,v),v,v,v,v)}},
i9w(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fg?0.4:12,g=A.j.F(d.e*e,h,e),f=A.j.F(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i9u(d.as)
v=A.j.F(d.w*(e/960),3,96)
u=C.i9B(d)
t=C.bCz(d.Q)
s=d.x.a>=700?A.ez:A.wo
r=d.y===A.cF?A.yV:A.anF
q=d.z
p=new B.DJ(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUb:A.aUa,l,l,l,l,l,l,A.dz,l,l,v,r,s,l,!0,l,l,l,l),C.i9A(d.as)))
break
case 1:case 4:o=C.i9x(d.at)
n=i===D.lR&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xw(B.fc(w,l,l,l,B.ha(l,A.ti,l,l,l,l,l,l,l,A.dz,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IE(o,n?A.aej:A.Xu,l,l)
break
case 3:w=new B.nO(A.Jz,1,A.l6)
u=B.vT(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lN(A.vK,B.fc(t,l,l,l,B.ha(l,D.esm,l,l,l,l,l,l,l,A.dz,l,l,11,l,A.ez,l,!0,l,l,l,l),A.nP),l,new B.kO(E.aM9,new B.pV(w,w,w,w),u,A.i_,l),l,l,l,l)
break
case 2:p=C.i9y(d,e)
break
case 5:p=C.i9v(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hrE(-w,p)
w=i===D.cX
if(w){m=A.o.aJ(d.Q,24)&255
if(m<255)p=new B.atX(m/255,p)}if(w)return new F.wv(k,l,j,l,new B.Tn(new B.kN(g,g,f,1/0),p))
if(i===D.lq){i=new B.nO(A.Jz,1,A.l6)
i=B.lN(A.vK,p,l,new B.kO(A.pG,new B.pV(i,i,i,i),B.vT(4),A.i_,l),l,l,D.bFL,l)}else i=p
return new F.wv(k,l,j,l,new B.fV(g,f,i))},
i9z(d,e,f,g){var w,v=null,u=C.bCz(d.e),t=d.f
t=B.a([F.hqe(t!=null?B.lN(v,v,v,new B.kO(v,v,v,A.i_,new B.aYx(E.X8,A.acY,B.a([u,C.bCz(t)],x.cR),v)),v,v,v,v):B.lN(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fw9(f,g),B.U(w).k("N<1,fi>")))
return F.czx(t)},
heZ(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$heZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5a(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.XC(A.x1,A.Jw,D.bGZ,null,null,null,!1,null)
o=new B.Cm(o,new C.fSU(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heZ,v)},
i9v(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hdK(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal2()
if(h==null)h=A.aBs
j=B.tW(4279308564)
w=B.vT(18)
v=new B.nO(B.tW(4287531653),3,A.l6)
u=i.length===0?"My links":i
u=B.a([B.xw(B.fc(u,m,m,m,B.ha(m,A.pG,m,m,m,m,m,m,m,A.dz,m,m,12,m,A.ez,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xw(B.fc(A.a.i(l.c),m,m,m,D.fsj,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bO(t,t.gI(0),s.k("bO<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tW(4280690220)
o=new B.aag(8,8)
n=A.a.i(r.b)
u.push(new B.o5(D.bzQ,new C.ayi(new C.aje(q),B.lN(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fuI,A.nP),m,new B.kO(p,m,new B.ajH(o,o,o,o),A.i_,m),m,m,D.bGd,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xw(B.fc(k,m,m,m,D.ftW,m))
u.push(new C.ayi(C.hJg(k),t))}return B.lN(m,B.zo(u,A.Nt,A.lQ),m,new B.kO(j,new B.pV(v,v,v,v),w,A.i_,m),m,m,D.bAH,m)},
fwa:function fwa(){},
fw9:function fw9(d,e){this.a=d
this.b=e},
fSU:function fSU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahU(d){var w,v
for(w=0;w<32;++w){v=D.Ic[w]
if(v.a===d)return v}return null},
hue(d){var w,v,u=A.a.cp(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aM(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hDu(d,e){return B.a6(d,!1).cd(B.eb(new C.fZy(e),!0,null,x.fB))},
hDt(d,e){return B.bT(A.L,null,new C.fZx(e),d,!0,!0,!0,null,!1,!1,x.fB)},
ja:function ja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fc:function Fc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Of:function Of(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blz:function blz(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.aa$=f
_.c=_.a=null},
e2w:function e2w(d){this.a=d},
e2v:function e2v(d,e,f){this.a=d
this.b=e
this.c=f},
e2u:function e2u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btp:function btp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7i:function f7i(d,e){this.a=d
this.b=e},
bgx:function bgx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0V:function b0V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceD:function ceD(){},
ceE:function ceE(d){this.a=d},
ceF:function ceF(d,e,f){this.a=d
this.b=e
this.c=f},
ceG:function ceG(d,e,f){this.a=d
this.b=e
this.c=f},
fZy:function fZy(d){this.a=d},
a_p:function a_p(d,e){this.c=d
this.a=e},
aBq:function aBq(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dhp:function dhp(d,e,f){this.a=d
this.b=e
this.c=f},
dhu:function dhu(d){this.a=d},
dhv:function dhv(d){this.a=d},
dht:function dht(d){this.a=d},
dhw:function dhw(d){this.a=d},
dhs:function dhs(d,e){this.a=d
this.b=e},
dhx:function dhx(d){this.a=d},
dhr:function dhr(d){this.a=d},
dhy:function dhy(d){this.a=d},
dhq:function dhq(d,e){this.a=d
this.b=e},
dhz:function dhz(d,e){this.a=d
this.b=e},
fZx:function fZx(d){this.a=d},
fZw:function fZw(d){this.a=d},
fZv:function fZv(d,e,f){this.a=d
this.b=e
this.c=f},
fZu:function fZu(d,e){this.a=d
this.b=e},
aN7:function aN7(){},
iq9(d){return B.bT(A.L,null,new C.h0U(),d,!0,!0,!0,null,!1,!1,x.N)},
h0U:function h0U(){},
a_K:function a_K(d){this.a=d},
bi3:function bi3(d){this.d=d
this.c=this.a=null},
dod:function dod(d){this.a=d},
doe:function doe(d,e){this.a=d
this.b=e},
dof:function dof(d){this.a=d},
i5L(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yk},
ikl(d){var w=7000
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
ikk(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i5L(d)
switch(q){case"shimmer":return B.o9(A.LF,g,new C.fPx(p,A.j.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bho(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bWL(g,new B.Ek(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.q(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bh5(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.F(0.55+s*0.45,0,1)
return B.da(B.eK(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fw(A.A,g,r,u,!0),new B.q(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bq9(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbV(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b4,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bby(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bxf(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bud(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.btl(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b4,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bgq(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ac,A.f,B.a([B.bR(0,new B.dx(!0,B.ed(A.A,B.c3(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bi),1.6+s*0.15,r,r),r),0,0,0),B.eK(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fPx:function fPx(d,e){this.a=d
this.b=e},
bho:function bho(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bh5:function bh5(d,e,f){this.b=d
this.c=e
this.a=f},
bq9:function bq9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbV:function bbV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bby:function bby(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxf:function bxf(d,e,f){this.b=d
this.c=e
this.a=f},
bud:function bud(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btl:function btl(d,e,f){this.b=d
this.c=e
this.a=f},
bgq:function bgq(d,e,f){this.b=d
this.d=e
this.a=f},
dh6:function dh6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
y6:function y6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fPA(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lq},
ikq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fPB())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aS7(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ikp(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d0(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d0(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.j.F(s,0.06,u)}else{d.w=A.j.F((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.j.F(r*(d.w*0.001)+0.028,0.06,u)},
ahx(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahx=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fHX(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dR,null,new C.fHY(e),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahx)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hfG(d),$async$ahx)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LY(d,"Search states\u2026","",A.kv,"Choose state"),$async$ahx)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hew(s)
if(p==null)p=A.d.gH(D.Sz)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fPC(p.d)
k=x.u
j=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dj(i,0.016,D.lr,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dj(0,0.058,D.eX,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dj(0,0.058,D.eX,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ll("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ll("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hbg(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bC2("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2n("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2n("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2n("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2n("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bC2("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dj(m,0.082,D.bj,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bk,!1,i,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bq,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bj,4280172719,2,y.O,0,0,"",D.cq,D.cX,0.78,0.11,0.388))
A.d.v(k,C.hbg(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bC2("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hwk("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hwk("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2n("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2n("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bC1("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bC1("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bC2("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ll("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ll("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bC1("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bC1("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bC2("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2n("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bC1("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2n("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hbg(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ll("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ll("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Ch(null,null,null,null,D.oM,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rS(m,null,0,0,j,n,D.qW,"","","Hati ya Ndoa",D.dk)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahx,v)},
fPB:function fPB(){},
fHX:function fHX(){},
fHY:function fHY(d){this.a=d},
fHV:function fHV(d){this.a=d},
fHW:function fHW(d){this.a=d},
i8W(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i8V(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.n9
case"lineThrough":return A.xa
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eN(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hyo(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Si[w]
if(v.b===u)return v}return D.dk},
i57(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d2K[w]
if(v.b===u)return v}return D.cX},
ibM(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.duq[w]
if(v.b===u)return v}return D.bj},
rS(d,e,f,g,h,i,j,k,l,m,n){return new C.lY(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hp_(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i7d(d.h(0,"layout"))
t=B.aI(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aI(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hyo(d.h(0,"transition"))
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
n=B.cE(n,new C.ck9(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rS(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i7d(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.at1[w]
if(v.b===u)return v}return D.n3},
Ch(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rS(4294967295,null,0,0,null,C.cD(),D.qW,"","","",D.dk)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X_(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i3a(a6.h(0,"aspectRatio"))
t=B.aI(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.F(A.j.M(t),1,120)
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
o=C.kJ(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kJ(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b7(f,new C.cjX(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cjY(),x.N)
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
g=B.cE(g,new C.cjZ(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Ch(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rS(4294967295,a3,0,0,a3,C.cD(),D.qW,"","","",D.dk)],x.g):g,v,p,o,s)},
kJ(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i3a(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dvj[w]
if(v.b===u)return v}return D.DR},
cD(){var w=Date.now(),v=$.jb
$.jb=v+1
return""+1000*w+"_"+v},
ckq(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.DS){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bq,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cq,D.cX,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bq,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bj,m,2,"Click to add subtitle",0,0,"",D.cq,D.cX,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,32,A.bq,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cq,D.cX,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!0,f.e.l(),A.aG,"",n,20,A.bq,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bj,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cq,D.cX,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Two Column Slide",0,0,"",D.cq,D.cX,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bq,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bj,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cq,D.cX,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bq,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bj,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cq,D.cX,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bq,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bj,m,2,"Section Header",0,0,"",D.cq,D.cX,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Compare",0,0,"",D.cq,D.cX,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bk,!1,l,A.aG,"",t.j(0.12).l(),24,A.bq,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bj,t.l(),2,"",0,0,"",D.cq,D.fg,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bq,A.V,"",0.6,s,p,"","",0,!1,"",0,D.bj,m,2,"Option A",0,0,"",D.cq,D.cX,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bk,!1,l,A.aG,"",t.j(0.06).l(),24,A.bq,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bj,t.j(0.5).l(),2,"",0,0,"",D.cq,D.fg,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bq,A.V,"",0.6,q,p,"","",0,!1,"",0,D.bj,m,2,"Option B",0,0,"",D.cq,D.cX,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bq,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bj,m,2,"TERM / QUESTION",0,0,"",D.cq,D.cX,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bq,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bj,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cq,D.cX,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,28,A.bq,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bj,m,2,"Quiz Question",0,0,"",D.cq,D.cX,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,20,A.bq,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bj,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cq,D.cX,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,26,A.bq,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bj,m,2,"Worksheet / Assignment",0,0,"",D.cq,D.cX,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,18,A.bq,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bj,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cq,D.cX,0.88,0.06,0.16)],x.u))
break}},
hVD(d){return A.d.dP(D.a52,new C.ckr(d),new C.cks())},
hVA(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c6(v,C.X_(B.a3(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h7x(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ckm(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.ckl())
return u},
hp2(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ckh()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asB(d){return C.hVy(d)},
hVy(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ckk()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3y(m),$async$asB)
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
return B.b(B.az(),$async$asB)
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
case 11:o=l.$1($.hp1.h(0,m))
n=C.h7x(C.h7x(j,r),o)
if(n.length===0){u=C.hp2(C.hp2(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asB,v)},
ckg(d){return C.hVx(d)},
hVx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ckg)
case 7:r=f
q=r.tQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jx(q,B.U(q).c)
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
return B.i($async$ckg,v)},
b36(d,e){return C.hVz(d,e)},
hVz(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b36=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b36)
case 6:s=g
q=s.tQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.M5(r,J.ad(r)-500):r
w=7
return B.b(s.aA("StringList","ngmy_slides_deleted_"+p,o),$async$b36)
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
return B.i($async$b36,v)},
X0(d,e){return C.hVB(d,e)},
hVB(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X0=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hp0.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asB(a3),$async$X0)
case 5:p=a6
case 4:w=6
return B.b(C.ckg(a3),$async$X0)
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
if(f<=g.gbs())k=f===g.gbs()&&k.b>g.gcE()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.ckn(o),l),l.k("M.E"))
A.d.aZ(e,new C.cko())
$.hp0.n(0,a0,e)
n=B.U(e).k("N<1,a8<m,@>>")
n=B.C(new B.N(e,new C.ckp(),n),n.k("ak.E"))
r=A.Y.az(n,null)
$.hp1.n(0,a0,r)
t=8
w=11
return B.b(B.ail(a0,r),$async$X0)
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
return B.b(B.az(),$async$X0)
case 16:q=a6
w=17
return B.b(q.aA("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$X0)
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
return B.i($async$X0,v)},
Jy:function Jy(d,e){this.a=d
this.b=e},
asz:function asz(d,e){this.a=d
this.b=e},
v7:function v7(d,e){this.a=d
this.b=e},
mP:function mP(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eN:function eN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lY:function lY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cka:function cka(){},
ckb:function ckb(){},
ck9:function ck9(){},
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
ck_:function ck_(){},
ck0:function ck0(){},
cjX:function cjX(){},
cjY:function cjY(){},
cjZ:function cjZ(){},
jW:function jW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckr:function ckr(d){this.a=d},
cks:function cks(){},
ckm:function ckm(d){this.a=d},
ckl:function ckl(){},
ckh:function ckh(){},
cki:function cki(){},
ckj:function ckj(){},
ckk:function ckk(){},
ckn:function ckn(d){this.a=d},
cko:function cko(){},
ckp:function ckp(){},
ikB(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fQ9(e,v,d,B.aR(w))
w.$1(new C.fQ5())
w.$1(new C.fQ6())
w.$1(new C.fQ7())
w.$1(new C.fQ8())
return v},
fQ9:function fQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQ5:function fQ5(){},
fQ6:function fQ6(){},
fQ7:function fQ7(){},
fQ8:function fQ8(){},
b33:function b33(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck5:function ck5(d){this.a=d},
ck4:function ck4(){},
ck6:function ck6(){},
ck7:function ck7(d,e){this.a=d
this.b=e},
ck8:function ck8(d){this.a=d},
apB:function apB(d,e){this.c=d
this.a=e},
blj:function blj(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
dPF:function dPF(){},
aMT:function aMT(){},
ckd(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckd=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fhP)
u=!1
w=1
break}u=B.la(!1,d,t,!1,null,A.a7N,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckd,v)},
hVv(d){var w=A.d.bj(D.Il,new C.cke(d))
if(w<0)return!0
return w>=4},
hVw(d){var w=A.d.bj($.bGr(),new C.ckf(d))
if(w<0)return!0
return w>=5},
cke:function cke(d){this.a=d},
ckf:function ckf(d){this.a=d},
imk(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xk()
$.pQ().pb(t,new C.fT0(s),!0)
u=B.a([B.BR(v,A.pH,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ap(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fsM,v,v,v),A.f,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.mT,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b4,A.t,u,v)},
fT0:function fT0(d){this.a=d},
ilW(){return C.heS()},
iiP(){return C.bEq()},
ikU(){return C.heJ()},
aR8(d,e,f){var w=0,v=B.j(x.H),u
var $async$aR8=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fS6(d,f),$async$aR8)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aR8,v)},
fS6(d,e){var w=0,v=B.j(x.H),u
var $async$fS6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCA
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fS7(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fS6)
case 2:return B.h(null,v)}})
return B.i($async$fS6,v)},
fS7:function fS7(d,e){this.a=d
this.b=e},
ael:function ael(d,e,f){this.c=d
this.d=e
this.a=f},
eBh:function eBh(d,e){this.a=d
this.b=e},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBj:function eBj(d,e){this.a=d
this.b=e},
eBk:function eBk(d){this.a=d},
aeC:function aeC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b32(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b31(g,m,f,d,e,h,l,k,j,o,i,null)},
hBB(d){return B.cs(new C.fQ4(d))},
heU(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
im3(d){if(d===D.cq)return"None"
return C.heU(d)},
bD5(d,e,f,g){return C.ibT(d,e,f,g)},
ibT(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bD5=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hbz&&t.pW())t.eO()
$.hbz=!0
s.a=null
w=3
return B.b(B.hZ(A.bl,!0,"Animation preview",d,new C.fyU(s,e,g,f),null,A.eK,!0,x.H),$async$bD5)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hbz=!1
case 1:return B.h(u,v)}})
return B.i($async$bD5,v)},
h1I(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h1I=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.F(B.aH(d,A.c_,x.w).w.a.a*0.88,280,440)
s=f===D.cq
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.heU(f)+" Slide transition preview"
s=s?Ah.GB:A.uk
w=3
return B.b(C.bD5(d,s,new B.a5(t,t*0.56,B.bx(B.n(14),new C.aKp(f,null),A.aq),null),r),$async$h1I)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h1I,v)},
hAT(d,e,f){var w,v,u=null,t=A.cx.aE(0,A.j.F(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.q((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.q(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.q(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.q(0,-(1-t)*36))
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
w.kl((1-t)*1.2)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n_((1-t)*0.8)
v=0.6+t*0.4
w.k5(v,v,v,1)
return B.fw(A.A,B.da(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.q((1-t)*24,0))}},
bFW(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.F(B.aH(d,A.c_,x.w).w.a.a*0.88,300,440)
s=f===D.cq
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.heU(f)+" Element animation preview"
s=s?Ah.GB:A.uk
w=3
return B.b(C.bD5(d,s,new B.a5(t,t*0.62,B.bx(B.n(14),new C.aB5(f,null),A.aq),null),r),$async$bFW)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFW,v)},
im2(d){var w,v,u,t,s=$.agZ.W(0,d)
if(s!=null){$.agZ.n(0,d,s)
return s}w=A.cG.aM(A.a.b2(d,A.a.cp(d,",")+1))
$.agZ.n(0,d,w)
v=$.hcq=$.hcq+w.length
u=B.a4($.agZ).k("cx<1>")
for(;;){if(!(v>41943040&&$.agZ.a>1))break
t=new B.cx($.agZ,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.agZ.W(0,t.gR(0)).length
$.hcq=v}return w},
ilI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aB(d,r,o)
m=f.$1(e)
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Tx(s,A.u))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Tx(t,A.u))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Tx(u,A.cC))
v.push(new B.en(n,l,l,A.cH,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3x(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.jN(e))
return m
case"rounded":m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
w=e.gdA()*0.18
m.D(new B.iW(B.br(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbK().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bt())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aF(w.r,A.ah,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aY(p,o)
m.push(p)
o=v.f
if(o!=null)p.ai(o)
v.a8()}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.ai(o)
v.a8()}}v.D(new B.bt())
return v
case"diamond":m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbK().a,e.b))
m.D(new B.aq(e.c,e.gbK().b))
m.D(new B.aq(e.gbK().a,e.d))
m.D(new B.aq(e.a,e.gbK().b))
m.D(new B.bt())
return m
case"arch":m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aY(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bdd(new B.q(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bt())
return m
default:m=new B.aF($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.or(e))
return m}},
fNE(d,e,f){return B.cs(new C.fNF(D.f9Z.q(0,d),d,f,e))},
b31:function b31(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ck3:function ck3(d){this.a=d},
ck2:function ck2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck1:function ck1(){},
b2Z:function b2Z(d,e){this.b=d
this.a=e},
fQ4:function fQ4(d){this.a=d},
fQ3:function fQ3(d,e){this.a=d
this.b=e},
fyU:function fyU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyS:function fyS(d){this.a=d},
fyT:function fyT(d,e){this.a=d
this.b=e},
aKp:function aKp(d,e){this.c=d
this.a=e},
bwK:function bwK(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
ffS:function ffS(d,e,f){this.a=d
this.b=e
this.c=f},
aL6:function aL6(d,e){this.b=d
this.a=e},
W7:function W7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blv:function blv(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
e0f:function e0f(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0d:function e0d(d){this.a=d},
Jx:function Jx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cjW:function cjW(d){this.a=d},
cjV:function cjV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB5:function aB5(d,e){this.c=d
this.a=e},
bfR:function bfR(){this.d=0
this.c=this.a=null},
dej:function dej(d){this.a=d},
dei:function dei(d){this.a=d},
a8E:function a8E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmb:function bmb(d,e){var _=this
_.d=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
eoE:function eoE(d,e,f){this.a=d
this.b=e
this.c=f},
b0Y:function b0Y(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bh3:function bh3(d,e,f){this.b=d
this.c=e
this.a=f},
bsf:function bsf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f4N:function f4N(){},
fNF:function fNF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bti:function bti(d,e,f){this.b=d
this.c=e
this.a=f},
aN6:function aN6(){},
aNB:function aNB(){},
aOV:function aOV(){},
fR5(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fR5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.co().MD(D.dsj,A.uz,!0),$async$fR5)
case 3:r=e
if(r==null||J.cr(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ilC(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fR5,v)},
ilC(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a8X(d,new B.a17(A.cO.gcu().aM(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.idC(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8X(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.c9.Ln(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8X(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
idC(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cFY().cPY(B.rC(d,A.io,o,o),o,o,!1).cRT(0,"word/document.xml")
if(n==null)return""
w=n.d_1()
v=A.c9.Ln(0,w==null?$.hE_():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fBW(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8X:function a8X(d,e,f){this.a=d
this.b=e
this.c=f},
fBW:function fBW(){},
hVC(d,e,f,g,h,i,j,k,l){return new C.OJ(l,e,d,g,f,i,h,j,k,null)},
OJ:function OJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFY:function aFY(d,e,f,g,h,i,j,k,l){var _=this
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
_.aa$=l
_.c=_.a=null},
eHv:function eHv(d){this.a=d},
eHt:function eHt(){},
eHu:function eHu(d){this.a=d},
eDT:function eDT(){},
eDU:function eDU(){},
eDV:function eDV(d,e){this.a=d
this.b=e},
eFt:function eFt(d){this.a=d},
eFh:function eFh(){},
eFi:function eFi(){},
eDg:function eDg(){},
eGB:function eGB(d){this.a=d},
eHr:function eHr(d,e){this.a=d
this.b=e},
eFr:function eFr(d,e){this.a=d
this.b=e},
eHe:function eHe(d){this.a=d},
eHf:function eHf(){},
eHg:function eHg(){},
eHh:function eHh(d){this.a=d},
eHi:function eHi(){},
eCF:function eCF(d){this.a=d},
eHs:function eHs(){},
eEA:function eEA(d,e){this.a=d
this.b=e},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eEX:function eEX(d){this.a=d},
eEY:function eEY(d,e,f){this.a=d
this.b=e
this.c=f},
eEZ:function eEZ(d){this.a=d},
eEz:function eEz(){},
eEy:function eEy(d){this.a=d},
eEw:function eEw(){},
eEv:function eEv(d){this.a=d},
eEx:function eEx(){},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEB:function eEB(d){this.a=d},
eEC:function eEC(d){this.a=d},
eED:function eED(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
eCH:function eCH(){},
eCI:function eCI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eES:function eES(){},
eET:function eET(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d,e,f){this.a=d
this.b=e
this.c=f},
eER:function eER(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEK:function eEK(d,e,f){this.a=d
this.b=e
this.c=f},
eEL:function eEL(d,e,f){this.a=d
this.b=e
this.c=f},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEV:function eEV(d){this.a=d},
eEW:function eEW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEU:function eEU(d){this.a=d},
eFc:function eFc(){},
eFd:function eFd(){},
eFe:function eFe(){},
eFf:function eFf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF9:function eF9(d){this.a=d},
eFb:function eFb(){},
eFa:function eFa(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eF7:function eF7(d,e,f){this.a=d
this.b=e
this.c=f},
eF8:function eF8(d,e){this.a=d
this.b=e},
eFg:function eFg(){},
eEI:function eEI(d,e){this.a=d
this.b=e},
eCY:function eCY(){},
eCZ:function eCZ(d,e,f){this.a=d
this.b=e
this.c=f},
eD_:function eD_(d){this.a=d},
eD0:function eD0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCX:function eCX(d){this.a=d},
eFm:function eFm(d){this.a=d},
eFl:function eFl(d,e){this.a=d
this.b=e},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFn:function eFn(d,e){this.a=d
this.b=e},
eBC:function eBC(d,e){this.a=d
this.b=e},
eCW:function eCW(d,e){this.a=d
this.b=e},
eCU:function eCU(d){this.a=d},
eFv:function eFv(d,e,f){this.a=d
this.b=e
this.c=f},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCP:function eCP(d){this.a=d},
eFu:function eFu(d,e,f){this.a=d
this.b=e
this.c=f},
eCG:function eCG(d){this.a=d},
eDh:function eDh(){},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e,f){this.a=d
this.b=e
this.c=f},
eGC:function eGC(d,e,f){this.a=d
this.b=e
this.c=f},
eBD:function eBD(d){this.a=d},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBn:function eBn(d){this.a=d},
eBm:function eBm(d,e){this.a=d
this.b=e},
eBo:function eBo(d,e){this.a=d
this.b=e},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCR:function eCR(d){this.a=d},
eC4:function eC4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eC5:function eC5(d,e){this.a=d
this.b=e},
eC9:function eC9(d,e){this.a=d
this.b=e},
eCa:function eCa(d){this.a=d},
eC7:function eC7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eC8:function eC8(d){this.a=d},
eC6:function eC6(){},
eC3:function eC3(d,e,f){this.a=d
this.b=e
this.c=f},
eF6:function eF6(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eHm:function eHm(d,e){this.a=d
this.b=e},
eHn:function eHn(d){this.a=d},
eHo:function eHo(d,e,f){this.a=d
this.b=e
this.c=f},
eHk:function eHk(d){this.a=d},
eGS:function eGS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGR:function eGR(d,e,f){this.a=d
this.b=e
this.c=f},
eGQ:function eGQ(){},
eGP:function eGP(d,e,f){this.a=d
this.b=e
this.c=f},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e,f){this.a=d
this.b=e
this.c=f},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGN:function eGN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGM:function eGM(d){this.a=d},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eGD:function eGD(){},
eHb:function eHb(d,e){this.a=d
this.b=e},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d){this.a=d},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBt:function eBt(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBw:function eBw(d,e){this.a=d
this.b=e},
eBx:function eBx(d,e,f){this.a=d
this.b=e
this.c=f},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBs:function eBs(d,e,f){this.a=d
this.b=e
this.c=f},
eBr:function eBr(d){this.a=d},
eFs:function eFs(d,e,f){this.a=d
this.b=e
this.c=f},
eHj:function eHj(d,e,f){this.a=d
this.b=e
this.c=f},
eDO:function eDO(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(){},
eCd:function eCd(d,e,f){this.a=d
this.b=e
this.c=f},
eCe:function eCe(d){this.a=d},
eBp:function eBp(d,e){this.a=d
this.b=e},
eDf:function eDf(d,e){this.a=d
this.b=e},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBG:function eBG(d){this.a=d},
eBU:function eBU(d,e){this.a=d
this.b=e},
eBF:function eBF(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC0:function eC0(d){this.a=d},
eC1:function eC1(){},
eC2:function eC2(){},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBT:function eBT(d){this.a=d},
eBV:function eBV(d){this.a=d},
eBW:function eBW(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e,f){this.a=d
this.b=e
this.c=f},
eDd:function eDd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDc:function eDc(d,e,f){this.a=d
this.b=e
this.c=f},
eDb:function eDb(d,e){this.a=d
this.b=e},
eBz:function eBz(d,e){this.a=d
this.b=e},
eCh:function eCh(d){this.a=d},
eCg:function eCg(d){this.a=d},
eCf:function eCf(d,e){this.a=d
this.b=e},
eCi:function eCi(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d,e){this.a=d
this.b=e},
eCV:function eCV(d){this.a=d},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF4:function eF4(d,e){this.a=d
this.b=e},
eF3:function eF3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF1:function eF1(d){this.a=d},
eF2:function eF2(d,e){this.a=d
this.b=e},
eF_:function eF_(){},
eF0:function eF0(){},
eGE:function eGE(){},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGG:function eGG(){},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eCJ:function eCJ(){},
eCK:function eCK(){},
eCL:function eCL(){},
eCO:function eCO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCN:function eCN(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e,f){this.a=d
this.b=e
this.c=f},
eEe:function eEe(d){this.a=d},
eEd:function eEd(){},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEc:function eEc(d){this.a=d},
eEh:function eEh(d,e){this.a=d
this.b=e},
eEb:function eEb(d){this.a=d},
eEi:function eEi(d,e){this.a=d
this.b=e},
eEa:function eEa(d){this.a=d},
eEj:function eEj(d,e){this.a=d
this.b=e},
eE9:function eE9(d){this.a=d},
eEk:function eEk(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eE7:function eE7(d){this.a=d},
eEm:function eEm(d,e){this.a=d
this.b=e},
eE6:function eE6(d){this.a=d},
eE_:function eE_(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eE1:function eE1(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eE2:function eE2(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eE3:function eE3(d,e){this.a=d
this.b=e},
eDX:function eDX(d){this.a=d},
eE4:function eE4(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eE5:function eE5(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eDa:function eDa(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d){this.a=d},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEq:function eEq(d){this.a=d},
eEr:function eEr(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFP:function eFP(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eG0:function eG0(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGx:function eGx(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
eFE:function eFE(d){this.a=d},
eGa:function eGa(d){this.a=d},
eFM:function eFM(d){this.a=d},
eGc:function eGc(d){this.a=d},
eFL:function eFL(d,e){this.a=d
this.b=e},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e){this.a=d
this.b=e},
eFK:function eFK(d,e,f){this.a=d
this.b=e
this.c=f},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFN:function eFN(d){this.a=d},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGA:function eGA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGf:function eGf(d,e,f){this.a=d
this.b=e
this.c=f},
eFJ:function eFJ(d,e,f){this.a=d
this.b=e
this.c=f},
eFz:function eFz(d,e,f){this.a=d
this.b=e
this.c=f},
eFx:function eFx(d,e){this.a=d
this.b=e},
eGg:function eGg(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFy:function eFy(d,e){this.a=d
this.b=e},
eFw:function eFw(d,e){this.a=d
this.b=e},
eGh:function eGh(d){this.a=d},
eFH:function eFH(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eFG:function eFG(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
eGr:function eGr(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eFB:function eFB(d){this.a=d},
eCc:function eCc(d,e,f){this.a=d
this.b=e
this.c=f},
eCb:function eCb(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e){this.a=d
this.b=e},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGW:function eGW(d,e){this.a=d
this.b=e},
eGT:function eGT(d,e){this.a=d
this.b=e},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDj:function eDj(d){this.a=d},
eDl:function eDl(d,e){this.a=d
this.b=e},
eDi:function eDi(d){this.a=d},
eDS:function eDS(){},
eDR:function eDR(){},
eH7:function eH7(d){this.a=d},
eH6:function eH6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH5:function eH5(d,e){this.a=d
this.b=e},
eH0:function eH0(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH1:function eH1(d,e){this.a=d
this.b=e},
eGX:function eGX(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH2:function eH2(d,e){this.a=d
this.b=e},
eH3:function eH3(d,e){this.a=d
this.b=e},
eH8:function eH8(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCB:function eCB(d,e,f){this.a=d
this.b=e
this.c=f},
eCA:function eCA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCp:function eCp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCs:function eCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCo:function eCo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCn:function eCn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCl:function eCl(d){this.a=d},
eCz:function eCz(d,e){this.a=d
this.b=e},
eEt:function eEt(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEu:function eEu(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDu:function eDu(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e,f){this.a=d
this.b=e
this.c=f},
eDs:function eDs(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e,f){this.a=d
this.b=e
this.c=f},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDq:function eDq(d,e,f){this.a=d
this.b=e
this.c=f},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e,f){this.a=d
this.b=e
this.c=f},
eDm:function eDm(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBl:function eBl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
ag7:function ag7(d,e,f){this.a=d
this.b=e
this.c=f},
aAs:function aAs(d,e){this.c=d
this.a=e},
beD:function beD(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
d9L:function d9L(d){this.a=d},
d9K:function d9K(d){this.a=d},
beS:function beS(d,e){this.c=d
this.a=e},
da8:function da8(d){this.a=d},
da9:function da9(d){this.a=d},
Kz:function Kz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beC:function beC(){this.d=!1
this.c=this.a=null},
d9I:function d9I(d){this.a=d},
d9E:function d9E(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9D:function d9D(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9F:function d9F(d){this.a=d},
d9G:function d9G(d,e){this.a=d
this.b=e},
Qs:function Qs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0B:function a0B(d,e,f){this.c=d
this.d=e
this.a=f},
aG0:function aG0(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.aa$=f
_.c=_.a=null},
eI5:function eI5(){},
eHW:function eHW(d){this.a=d},
eI4:function eI4(d){this.a=d},
eHX:function eHX(d){this.a=d},
eHY:function eHY(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
eHU:function eHU(d){this.a=d},
eHV:function eHV(d,e,f){this.a=d
this.b=e
this.c=f},
eI2:function eI2(){},
eI3:function eI3(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eI6:function eI6(d,e,f){this.a=d
this.b=e
this.c=f},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI7:function eI7(d){this.a=d},
KF:function KF(d,e){this.c=d
this.a=e},
btO:function btO(d,e){this.b=d
this.a=e},
bjD:function bjD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjC:function bjC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLO:function aLO(){},
aNO:function aNO(){},
bzC:function bzC(){},
aNP:function aNP(){},
fT1(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fT1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.co().MD(B.a(["pdf"],x.s),A.uz,!0),$async$fT1)
case 3:q=e
if(q==null||J.cr(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqW(s,"data:application/pdf;base64,"+A.cO.gcu().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT1,v)},
ime(d){var w,v,u,t,s,r
try{w=B.jG(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.F(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aSA(t,1,200)
return s}}catch(r){}return 1},
fST(d){return C.imd(d)},
imd(d){var w=0,v=B.j(x.T),u
var $async$fST=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fST,v)},
bFb(d,e,f,g){return C.imn(d,e,f,g)},
imn(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFb=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.F(b5.a,80,2400)
q=A.j.F(b5.b,80,2400)
p=B.hCb(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jg(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jg(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jg(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jg(b0),a9)}o=A.j.F(o-0.04,0,1)
n=A.j.F(n-0.04,0,1)
m=A.j.F(m+0.04,0,1)
l=A.j.F(l+0.04,0,1)
j=A.j.F(m-o,0.12,1)
i=A.j.F(l-n,0.12,1)
h=A.o.F(A.j.V(800*(i/j)),180,420)
$.S()
g=new B.pW(new B.pv())
f=B.zn(g,null)
a7=B.K()
a7.r=A.rt.gp(0)
f.au(new B.a2(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bA
b1.e=A.dS
b1.b=A.aa
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.J)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.q((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o0()
w=7
return B.b(a3.xC(800,h),$async$bFb)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.he),$async$bFb)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dM.gaU(a5))
a7=A.cO.gcu().aM(a7)
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
return B.i($async$bFb,v)},
aRH(d,e,f){return C.imb(d,e,f)},
imb(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiz(d,e,f,new C.fSR(r,q),q,"Sign document"),$async$aRH)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFb(q,t,r.b,r.c),$async$aRH)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b35(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRH,v)},
iml(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hv1(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hv1(a0.b)+"</h1>\n"
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.huD(q.ay)+";border:2px solid "+C.huD(q.ch)+'"></div>'
break
case 5:l=C.hdK(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal2()
if(p==null)p=A.aBs
n=B.U(p)
k=n.k("iu<1>")
j=new B.iu(p,0,8,k)
j.n5(p,0,8,n.c)
j=new B.bO(j,j.gI(0),k.k("bO<ak.E>"))
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
huD(d){var w=A.o.aJ(d,24)
return"rgba("+(A.o.aJ(d,16)&255)+","+(A.o.aJ(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hv1(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bF9(d,e){var w=0,v=B.j(x.H)
var $async$bF9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fT_(e,C.iml(e),d),d,null,!0,!0,x.H),$async$bF9)
case 2:return B.h(null,v)}})
return B.i($async$bF9,v)},
bFa(){var w=0,v=B.j(x.T),u,t,s
var $async$bFa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(92,2400),$async$bFa)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fST(s),$async$bFa)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFa,v)},
aRI(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.heZ(d),$async$aRI)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fVC(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRI,v)},
hoZ(d,e){var w
if(e<0||e>=d.r.length)return A.o.F(d.e,1,120)
w=d.r[e].w
return A.o.F(w>0?w:d.e,1,120)},
b35:function b35(d,e,f){this.a=d
this.b=e
this.c=f},
fSR:function fSR(d,e){this.a=d
this.b=e},
fT_:function fT_(d,e,f){this.a=d
this.b=e
this.c=f},
fSX:function fSX(d){this.a=d},
fSY:function fSY(d,e,f){this.a=d
this.b=e
this.c=f},
fSZ:function fSZ(d,e,f){this.a=d
this.b=e
this.c=f},
imc(d){return C.kJ(d.w)},
imj(d){var w,v,u,t
if(d.length===0||!A.d.cC(d,C.io3()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
z8(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hIh()
if(w.b.test(u))return u
return null},
hCd(d,e,f){var w,v,u=C.hRf(d),t=$.oo()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
imp(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eA(w,d.b);v.C();){u=w.gR(w).y
t=C.z8(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fSP(d,e){var w,v=d.y,u=C.z8(v==null?"":v)
if(u!=null)return d.y=u
w=C.imp(new B.Y(e,new C.fSQ(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hCd(v==null?"":v,null,w)},
imo(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kJ(w.w))return null
v=w.y
return C.z8(v==null?"":v)},
hVE(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.he(u)},
X3(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X3)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$X3)
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
return B.i($async$X3,v)},
X4(d){return C.hVF(d)},
hVF(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$X4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$X4)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,A.cK,null),$async$X4)
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
return B.i($async$X4,v)},
a8Z(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8Z=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8Z)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X3(),$async$a8Z)
case 4:s=a6
r=C.z8(a2==null?"":a2)
if(r==null)r=a3!=null?C.hCd(a3,null,A.M):null
q=x.N
p=B.aR(q)
for(o=J.dm(s),n=J.aU(o.ghK(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.z8(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a3(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dQ.aM(t)
g.n(0,"payload",A.cO.gcu().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).ab().ag())
if(D.UH.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.z8(J.k(q==null?"":q))
if(f==null)f=C.hp3(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.X4(s),$async$a8Z)
case 7:u=new B.aHs(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hVE()
n=r==null
d=n?C.hp3(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dQ.aM(t)
q.n(0,"payload",A.cO.gcu().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).ab().ag())
if(D.UH.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.X4(s),$async$a8Z)
case 8:u=new B.aHs(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8Z,v)},
hp3(d){var w,v,u=$.oo()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.aw(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asD(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asD)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X3(),$async$asD)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.bt(t,new C.ckt(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.X4(t),$async$asD)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asD,v)},
asC(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.z8(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asC)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X3(),$async$asC)
case 6:t=o.i7(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.z8(J.k(q==null?"":q))===p){u=C.a8Y(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asC,v)},
a8Y(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8Y=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8Y)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X3(),$async$a8Y)
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
try{s=A.c9.cG(0,A.cG.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.UH.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
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
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=7
return B.b(C.X4(p),$async$a8Y)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8Y,v)},
imi(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<m,@>>")
w=B.C(new B.N(d,new C.fSW(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fT3(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ak())
return A.Y.az(w,null)}return A.Y.az(C.imi(d==null?B.a([],x.D):d,f,g),null)},
fT2(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fT2=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8Z(h,d,e,f,g),$async$fT2)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.z8(e==null?"":e)
u=new B.aHe(s,t)
w=1
break}t=A.dQ.aM(h)
t=A.kI.gcu().aM(t)
u=new B.aHe(C.z8(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT2,v)},
hf0(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d2(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
imm(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hf0(u))return u
t=A.a.cp(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hf0(s))return s}r=A.a.cp(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hf0(s))return s}}return null},
fSS(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cG(0,A.cG.aM(J.nl(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i4A(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aik(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aik=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asC(t[1]),$async$aik)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSS(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.z8(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asC(r),$async$aik)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSS(s)
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
return B.b(C.a8Y(t[1]),$async$aik)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSS(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fSS(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aik,v)},
i4A(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UH.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.heY(C.X_(B.a3(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cE(t,new C.fop(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
heY(d,e){var w,v,u,t,s,r,q,p,o=d.ak()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.jb
$.jb=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X_(B.a3(o,x.N,x.z))
if(e&&C.kJ(p.w))p.Q=new B.V(Date.now(),0,!1).ab().bR(144e8).ag()
return p},
bEV(){var w=0,v=B.j(x.aT),u,t,s
var $async$bEV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hm(),$async$bEV)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aik(s),$async$bEV)
case 4:t=e
u=J.cr(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEV,v)},
h0X(d){var w=0,v=B.j(x.T),u,t
var $async$h0X=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.YH,!0,"Dismiss",d,new C.h0Y(),new C.h0Z(),A.Gz,!0,x.N),$async$h0X)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.ffY)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0X,v)},
iqc(d,e,f,g,h){return B.a6(d,!1).cd(B.eb(new C.h1_(h,e,g,f),!0,null,x.H))},
fSQ:function fSQ(d){this.a=d},
ckt:function ckt(d){this.a=d},
fSW:function fSW(){},
fop:function fop(d){this.a=d},
h0Y:function h0Y(){},
h0Z:function h0Z(){},
h1_:function h1_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X1:function X1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFZ:function aFZ(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eHC:function eHC(){},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHI:function eHI(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHx:function eHx(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
X2:function X2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmx:function bmx(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
eHN:function eHN(){},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d,e){this.a=d
this.b=e},
aFW:function aFW(d){this.a=d},
aFX:function aFX(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eBf:function eBf(d){this.a=d},
eBe:function eBe(){},
eBg:function eBg(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBa:function eBa(){},
eBc:function eBc(d){this.a=d},
eBd:function eBd(d){this.a=d},
bx5:function bx5(){},
asE:function asE(d){this.a=d},
aG_:function aG_(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHR:function eHR(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
ia3(){var w,v,u,t
for(v=0;v<4;++v){w=D.dga[v]
try{if(Ae.c0K(w)){u=w
return u}}catch(t){}}return null},
S6(d,e){return C.ij_(d,e)},
ij_(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$S6=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ia3()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oM?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qO(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.ez(b8,b9)
n=new B.ez("Getting ready\u2026",b9)
m=new B.ez(0,b9)
l=B.ps(new C.fN7(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.df,!1,null,new C.fN8(n,m),c6,null,!0,!0,b9)
k=new C.fNc(b7)
j=new C.fNd()
i=null
t=4
b3=c2.a
h=Al.aU2(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h3V(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZ4(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IV.z4(i,"dataavailable",new C.fN9(e))
d=new B.c2(new B.bk($.bD,x.dT),x.b2)
A.IV.z4(i,"stop",new C.fNa(d))
J.aiX(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$S6)
case 8:w=7
return B.b(c5.$1(d0),$async$S6)
case 7:a0=d0
J.h3W(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aiX(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aiX(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$S6)
case 15:w=14
return B.b(c5.$1(d0),$async$S6)
case 14:a0=d0
case 13:J.h3W(g,a0,0,0,c2.a,c2.b)
a3=A.o.F(a2.w>0?a2.w:c7.e,1,120)
J.aiX(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcE()
else b3=!0
if(!b3){w=17
break}J.h3W(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fe,null,b9),$async$S6)
case 18:w=16
break
case 17:J.aiX(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aiX(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.df(0,A.ok),$async$S6)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n_(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HA(b0)
J.lH(b0)
B.bQ(A.qp,new C.fNb(a7),b9)
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
J.lH(l)
if(p.pW())p.eO()
c3=o
b3=$.aw()
c3.sib(b3)
J.aSE(c3,0)
c3=n
c3.sib(b3)
J.aSE(c3,0)
c3=m
c3.sib(b3)
J.aSE(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$S6,v)},
fN7:function fN7(d,e,f){this.a=d
this.b=e
this.c=f},
fN6:function fN6(){},
fN8:function fN8(d,e){this.a=d
this.b=e},
fNc:function fNc(d){this.a=d},
fNd:function fNd(){},
fN9:function fN9(d){this.a=d},
fNa:function fNa(d){this.a=d},
fNb:function fNb(d){this.a=d},
bxj:function bxj(d,e,f){this.c=d
this.d=e
this.a=f},
fiv:function fiv(){},
fiw:function fiw(){},
ckP(d){var w=0,v=B.j(x.at),u,t,s
var $async$ckP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asM(d,A.Ag),$async$ckP)
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
return B.i($async$ckP,v)},
ckO(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8F:function a8F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmg:function bmg(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
epv:function epv(d){this.a=d},
ept:function ept(d){this.a=d},
epu:function epu(d,e){this.a=d
this.b=e},
a9y:function a9y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a9z:function a9z(d,e){this.a=d
this.b=e},
b4L:function b4L(){},
coJ:function coJ(){},
coK:function coK(){},
coL:function coL(d,e,f,g,h,i,j,k,l){var _=this
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
hJg(d){return new C.aje(d)},
a3Z:function a3Z(){},
aje:function aje(d){this.a=d},
aSY:function aSY(){},
ayi:function ayi(d,e){this.d=d
this.b=e
this.a=null},
aUr:function aUr(d){this.b=d
this.a=null},
bDP(d,e){var w=0,v=B.j(x.H),u
var $async$bDP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gua().Mk(d,e),$async$bDP)
case 2:u=B.fVJ()
w=3
return B.b(u,$async$bDP)
case 3:return B.h(null,v)}})
return B.i($async$bDP,v)},
hzp(d,e){return(A.t4[(d^e)&255]^A.o.aJ(d,8))>>>0},
fFa(d,e,f,g,h,i){var w=C.ifd(d,A.di,f,null,A.d1,g,h,i)
return w},
hBm(d){var w=F.hC4(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hRf(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pC.h(0,w)
if(v!=null)return v
for(u=A.pC.gdO(A.pC),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hBu(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<56;++w)v+="- "+D.dil[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bD2(d,e){return C.ibO(d,e)},
ibO(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bD2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWc(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cv(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jL(o,"share",[p]),x.H),$async$bD2)
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
return B.i($async$bD2,v)},
heS(){var w=0,v=B.j(x.y),u,t,s
var $async$heS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fwb
s=$.bCA
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bD2(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heS,v)},
bEq(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fwb
l=$.bCA
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hvL()?3:4
break
case 3:w=5
return B.b(C.bD2(m,k),$async$bEq)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCB
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n_(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HA(q)
w=10
return B.b(B.bQ(A.a3,null,x.H),$async$bEq)
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
return B.i($async$bEq,v)},
heJ(){var w=0,v=B.j(x.y),u,t,s,r
var $async$heJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCB
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
return B.i($async$heJ,v)},
hf_(d,e){var w=0,v=B.j(x.H),u,t
var $async$hf_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lW.rj(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hf_,v)},
b3H(d,e){var w=0,v=B.j(x.y),u
var $async$b3H=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3J(d,e),$async$b3H)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3I(d),$async$b3H)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3H,v)}},D,O,Ao,A9,A_,Aa,W,Ap,G,F,E,H,X,R,A0,A1,Aq,M,Ar,A2,As,At,Ab,K,Au,Av,A3,N,Y,P,Z,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,AD,T,U,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[203]
A7=c[73]
Ak=c[53]
Al=c[64]
V=c[220]
A8=c[57]
Am=c[147]
An=c[231]
C=a.updateHolder(c[5],C)
D=c[218]
O=c[139]
Ao=c[41]
A9=c[222]
A_=c[219]
Aa=c[232]
W=c[208]
Ap=c[132]
G=c[187]
F=c[35]
E=c[221]
H=c[95]
X=c[121]
R=c[149]
A0=c[32]
A1=c[177]
Aq=c[234]
M=c[157]
Ar=c[184]
A2=c[105]
As=c[134]
At=c[227]
Ab=c[116]
K=c[223]
Au=c[235]
Av=c[131]
A3=c[67]
N=c[197]
Y=c[82]
P=c[159]
Z=c[114]
Ac=c[118]
Aw=c[225]
Q=c[123]
Ad=c[141]
Ax=c[93]
Ae=c[58]
Af=c[193]
Ay=c[40]
Ag=c[80]
Az=c[156]
Ah=c[148]
Ai=c[230]
AA=c[233]
AB=c[229]
S=c[74]
AC=c[226]
I=c[174]
AD=c[236]
T=c[51]
U=c[224]
L=c[205]
A4=c[228]
A5=c[111]
A6=c[63]
C.oe.prototype={
vE(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ue(t,v)
return new C.oe(t===0?!1:w,v,t)},
bPy(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DD()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ue(w,u)
return new C.oe(r===0?!1:s,u,r)},
bQ4(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DD()
w=o-d
if(w<=0)return p.a?$.hgv():$.DD()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ue(w,u)
q=new C.oe(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aK(0,$.a3L())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aq(e,16)
if(A.o.E(e,16)===0)return r.bPy(v)
u=w+v+1
t=new Uint16Array(u)
C.hsf(r.b,w,e,t)
w=r.a
s=C.ue(u,t)
return new C.oe(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aq(e,16)
u=A.o.E(e,16)
if(u===0)return n.bQ4(v)
t=w-v
if(t<=0)return n.a?$.hgv():$.DD()
s=n.b
r=new Uint16Array(t)
C.i0r(s,w,e,r)
w=n.a
q=C.ue(t,r)
p=new C.oe(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aK(0,$.a3L())
for(o=0;o<v;++o)if(s[o]!==0)return p.aK(0,$.a3L())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cNZ(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9b(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9b(t,e)
if(s===0)return $.DD()
if(r===0)return t.a===e?t:t.vE(0)
w=s+1
v=new Uint16Array(w)
C.i0p(t.b,s,d.b,r,v)
u=C.ue(w,v)
return new C.oe(u===0?!1:e,v,u)},
HM(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DD()
w=d.c
if(w===0)return t.a===e?t:t.vE(0)
v=new Uint16Array(s)
C.bbO(t.b,s,d.b,w,v)
u=C.ue(s,v)
return new C.oe(u===0?!1:e,v,u)},
bCt(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ue(r,u)
return new C.oe(!1,u,s)},
bCs(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ue(u,r)
return new C.oe(!1,r,v)},
bCu(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ue(p,m)
return new C.oe(s!==0,m,s)},
Vz(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DD()
w=t.a
if(w===e.a){if(w){w=$.a3L()
return t.HM(w,!0).bCu(e.HM(w,!0),!0).a9b(w,!0)}return t.bCt(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCs(v.HM($.a3L(),!1),!1)},
a6(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9b(e,v)
if(C.cNZ(u.b,t,e.b,w)>=0)return u.HM(e,v)
return e.HM(u,!v)},
aK(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vE(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9b(e,v)
if(C.cNZ(u.b,t,e.b,w)>=0)return u.HM(e,v)
return e.HM(u,!v)},
aN(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DD()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hsg(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ue(w,t)
return new C.oe(q===0?!1:r,t,q)},
bPx(d){var w,v,u,t
if(this.c<d.c)return $.DD()
this.aTJ(d)
w=$.h9w.co()-$.az4.co()
v=C.h9y($.h9v.co(),$.az4.co(),$.h9w.co(),w)
u=C.ue(w,v)
t=new C.oe(!1,v,u)
return this.a!==d.a&&u>0?t.vE(0):t},
csT(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aTJ(d)
w=C.h9y($.h9v.co(),0,$.az4.co(),$.az4.co())
v=C.ue($.az4.co(),w)
u=new C.oe(!1,w,v)
if($.h9x.co()>0)u=u.mD(0,$.h9x.co())
return t.a&&u.c>0?u.vE(0):u},
aTJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hsc&&d.c===$.hse&&g.b===$.hsb&&d.b===$.hsd)return
w=d.b
v=d.c
u=16-A.o.galu(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hsa(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hsa(g.b,f,u,r)}else{r=C.h9y(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h9z(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cNZ(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbO(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbO(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i0q(p,r,i);--o
C.hsg(h,j,0,r,o,s)
if(r[i]<h){m=C.h9z(j,s,o,n)
C.bbO(r,l,n,m,r)
while(--h,r[i]<h)C.bbO(r,l,n,m,r)}--i}$.hsb=g.b
$.hsc=f
$.hsd=w
$.hse=v
$.h9v.b=r
$.h9w.b=l
$.az4.b=s
$.h9x.b=u},
gX(d){var w,v,u,t=new C.cO_(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cO0().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oe&&this.aS(0,e)===0},
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
w[7]=(w[7]|A.o.aJ(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cO1(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cO2(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.ln(A.aH.gaU(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vE(0):r
while(v.c>1){u=$.hG4()
if(u.c===0)B.bi(D.ba4)
t=v.csT(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPx(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaTJ:1,
$ihM:1}
C.aT7.prototype={
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
cRT(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gav(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kg(w,w.length,B.U(w).k("kg<1>"))}}
C.SJ.prototype={
d_1(){var w,v
if(this.as==null)this.bfE()
w=this.as
v=w==null?null:w.aqC()
return v==null?null:v.eV()},
bfE(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqC().eV()
this.as=new C.bSi(v)}},
gZ(d){return this.at}}
C.a4H.prototype={
a7(){return"CompressionType."+this.b}}
C.bK2.prototype={
eG(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zQ[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zQ[d])
s.c=t}return v}}
C.bIl.prototype={
cPX(d,e){var w,v,u,t,s,r=this,q=new C.bK2(d)
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
t=r.cra(q)
if(t<0)return!1
if(t===0){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
s=r.crd(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
return!0}}return!0},
cra(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eG(8)
if(t!==D.dxX[u])v=!1
if(t!==D.d9b[u])w=!1
if(!w&&!v)return-1}return v?0:2},
crd(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eG(1),d2=((d3.eG(8)<<8|d3.eG(8))<<8|d3.eG(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c5G()
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
u[w]=l}c9.fr=B.bZ(6,$.hE3(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eG(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eG(1)===0)break
i=d3.eG(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hE2()
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
if(f<h)h=f}c9.c0W(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.avG(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.avG(d3)}while(a3===0||a3===1);++a5
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
b2=A.o.E(a8,16)
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
a3=c9.avG(d3)
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
c1=(c1<<8^D.Ir[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Iv[b9];++b9
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
if(b8===0){b8=D.Iv[b9];++b9
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
if(b8===0){b8=D.Iv[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Iv[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Iv[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Ir[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Ir[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Ir[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Ir[c1>>>24&255^c7&255])>>>0
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
avG(d){var w,v,u,t,s=this,r=s.ay
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
c0W(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c5G(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cFZ.prototype={
aJW(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bT8(e)
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
if(w>0)e.aJZ(w,!1)
r.cry(e)
q=r.r
v=r.f
u=e.aN4(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.bat()
s.d_0(0,u,e,f)
q.push(s)}},
cry(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8S(20,r)
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
bT8(d){var w,v,u,t,s,r,q,p,o,n
if(d.gI(0)<=4)return-1
w=d.c
v=d.gI(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8S(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.an1(A.io)
o.aOj(r.eV(),A.io,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cFX.prototype={}
C.ayI.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cG_.prototype={
aJW(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIa.h(0,e.b3())
o.c=w==null?D.Nn:w
o.d=e.b3()
o.e=e.b3()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b3()
u=e.b3()
o.x=e.apf(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aZZ:D.ER
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.ER&&u>2){w=o.y
w.toString
s=B.rC(w,A.io,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b3()===39169){s.b3()
s.b3()
s.apf(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b3()
o.at=D.b__
o.ax=new C.cFX(r,q)
w=D.aIa.h(0,q)
o.c=w==null?D.Nn:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpo().length},
aqC(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rC(new Uint8Array(0),A.io,q,q)
w=r.at
if(w!==D.ER)if(p.gI(0)<=0)r.at=D.ER
else{if(w===D.aZZ){p=r.bNQ(p)
r.Q=p}else if(w===D.b__){p=r.bNt(p)
r.Q=p}r.at=D.ER}w=r.c
if(w===D.ak8){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q0.C4(p.eV(),!0,!1)
else{t=B.a9n(A.io,r.w)
p=r.Q
p.toString
A.q0.a4Y(p,t,!0,!1)
u.b=t.Hk()}r.Q.c=v
return B.rC(u.bl(),A.io,q,q)}else if(w===D.ak9){s=B.a9n(A.io,32768)
p=r.Q
v=p.c
C.hJr().cPX(p,s)
u=s.Hk()
r.Q.c=v
return B.rC(u,A.io,q,q)}else return B.rC(p.eV(),A.io,q,q)},
bpo(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbt(d){var w=this.ch,v=C.Kv(C.hzp(w[0].M(0),d))
w[0]=v
v=w[1].a6(0,v.Vz(0,C.Kv(255)))
w[1]=v
w[1]=v.aN(0,C.Kv(134775813)).a6(0,C.Kv(1)).Vz(0,C.Kv(4294967295))
w[2]=C.Kv(C.hzp(w[2].M(0),w[1].mD(0,24).M(0)))},
aT7(){var w=(this.ch[2].Vz(0,C.Kv(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bNQ(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rC(new Uint8Array(0),A.io,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbt(u[v.c++]^r.aT7())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aT7()
r.bbt(s)
u&2&&B.aj(t)
t[w]=s}return B.rC(t,A.io,q,q)},
bNt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i04(k,w,v)
p=new Uint8Array(B.cb(A.aH.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cb(A.aH.dt(q,v,k)))
if(!C.hrK(A.aH.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bGV(k,new Uint8Array(16),p)
k=x.S
m=J.a6c(0,k)
m=n.r=new C.coy(m)
m.c=!0
m.b=m.boF(!0,new C.aue(p))
if(m.c)m.d=B.bo(D.oK,!0,k)
else m.d=B.bo(D.zD,!0,k)
l=C.hpV(C.hpX(),64)
l.bi3(new C.aue(o))
n.w=l
n.cZy(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hrK(k,m))throw B.W(B.fl("macs don't match"))
return B.rC(r,A.io,null,null)}}
C.bat.prototype={
d_0(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.apf(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rC(t,A.io,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b3()
p=s.b3()
o=s.a8S(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tC()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tC()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tC()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apf(u)
f.c=n.as
t=new C.cG_(D.Nn,n,D.ER,B.a([C.Kv(0),C.Kv(0),C.Kv(0)],x.f3))
n.ch=t
t.aJW(0,f,g)},
u(d){return this.at}}
C.cFY.prototype={
cPY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cFZ(B.a([],x.fT))
this.a=g
g.aJW(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aT7(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SJ(o,A.o.aq(Date.now(),1000),0):C.hhW(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hhW(o,q.w,q)
if(k.as==null)k.bfE()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.an1(A.io)
j.aOj(o,A.io,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GK(!1).E_(i,0,h,!0)}}return v}}
C.bGV.prototype={
cZy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CX(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hJa(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRn(u,0,w,0,o)}else{o===$&&B.c()
q.bNU(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LF(w,0)
m.x=A.aH.dt(m.x,0,10)
w=m.w
l=w.a
l.ir(0)
w=w.d
w===$&&B.c()
l.CX(0,w,0,w.length)
return f}}
C.coD.prototype={}
C.coH.prototype={}
C.coB.prototype={}
C.aue.prototype={}
C.coG.prototype={
cQc(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ec(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bi3(new C.aue(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSu(n.a,n.b,t,s,r)
r+=v}A.aH.h9(f,g,g+w,s)
return o.a.c},
bSu(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CX(0,d,0,d.length)
v.CX(0,f,0,4)
u=m.c
u===$&&B.c()
w.LF(u,0)
u=m.c
A.aH.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CX(0,s,0,s.length)
w.LF(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.coC.prototype={}
C.coA.prototype={}
C.auf.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auf){v=this.a
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
w=A.o.tR(w,e.gc1c())
if(!w)e.gc1c()
return w},
aMu(d,e){this.a=0
this.b=d},
tU(d){return this.aMu(d,null)},
aN7(d){var w,v=this,u=v.b
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
w.b37(v,u)
u=w.b
u===$&&B.c()
w.b37(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b37(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bw(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.coF.prototype={
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
aq5(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b4z(u,0)
v.c=0}v.a.aN7(1)},
CX(d,e,f,g){var w=this.cpU(e,f,g)
f+=w
g-=w
w=this.cpV(e,f,g)
this.cpL(e,f+w,g-w)},
LF(d,e){var w,v=this,u=C.hpW(v.a),t=u.a
t===$&&B.c()
t=C.hfy(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hfy(w,3)
v.cpP()
v.cpM(u)
v.auu()
v.cjV(d,e)
v.ir(0)
return 20},
b4z(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oq(A.aH.gaU(d),d.byteOffset,d.length).getUint32(e,A.iy===w.d)
if(w.w===16)w.auu()},
auu(){this.cZx()
this.w=0
A.d.hy(this.r,0,16,0)},
cpL(d,e,f){while(f>0){this.aq5(d[e]);++e;--f}},
cpV(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4z(d,e)
e+=4
f-=4
w.aN7(4)
v+=4}return v},
cpU(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aq5(d[e]);++e;--f;++v}return v},
cpP(){this.aq5(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aq5(0)}},
cpM(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auu()
u=v.d
switch(u){case A.iy:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fh:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.u(0)))}},
cjV(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iy===this.d,s=0;s<w;++s){r=v[s]
q=J.oq(A.aH.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdd(d){return this.f}}
C.coI.prototype={
cZx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qr[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qr[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qr[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qr[30]
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
C.coE.prototype={
bi3(d){var w,v,u,t,s=this,r=s.a
r.ir(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CX(0,w,0,v)
w=s.d
w===$&&B.c()
r.LF(w,0)
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
s.bcH(s.d,u,54)
s.bcH(s.e,u,92)
u=s.d
r.CX(0,u,0,u.length)},
LF(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LF(s,w)
s=u.e
t.CX(0,s,0,s.length)
v=t.LF(d,e)
s=u.e
A.aH.hy(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CX(0,s,0,s.length)
return v},
bcH(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.coz.prototype={}
C.coy.prototype={
a3c(d){return(D.oK[d&255]&255|(D.oK[d>>>8&255]&255)<<8|(D.oK[d>>>16&255]&255)<<16|D.oK[d>>>24&255]<<24)>>>0},
boF(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e2(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3c((m>>>8|(m&$.qr[24])<<24)>>>0)^D.cLg[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3c((k>>>8|(k&$.qr[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3c((k>>>8|(k&$.qr[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oq(A.aH.gaU(e),e.byteOffset,w)
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
p=(p^f.a3c((g>>>8|(g&$.qr[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3c(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bRn(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oq(A.aH.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ek[a8&255]
u=D.ek[a9>>>8&255]
t=$.qr[8]
s=D.ek[b0>>>16&255]
r=$.qr[16]
q=D.ek[b1>>>24&255]
p=$.qr[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ek[a9&255]
s=D.ek[b0>>>8&255]
u=D.ek[b1>>>16&255]
v=D.ek[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ek[b0&255]
u=D.ek[b1>>>8&255]
s=D.ek[a8>>>16&255]
q=D.ek[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ek[b1&255]
a8=D.ek[a8>>>8&255]
a9=D.ek[a9>>>16&255]
b0=D.ek[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ek[n&255]
b0=D.ek[m>>>8&255]
a9=D.ek[l>>>16&255]
a8=D.ek[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ek[m&255]
b0=D.ek[l>>>8&255]
o=D.ek[b1>>>16&255]
s=D.ek[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ek[l&255]
o=D.ek[b1>>>8&255]
b0=D.ek[n>>>16&255]
u=D.ek[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ek[b1&255]
o=D.ek[n>>>8&255]
s=D.ek[m>>>16&255]
v=D.ek[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ek[a8&255]^C.nJ(D.ek[a9>>>8&255],24)^C.nJ(D.ek[b0>>>16&255],16)^C.nJ(D.ek[b1>>>24&255],8)^b6[w][0]
m=D.ek[a9&255]^C.nJ(D.ek[b0>>>8&255],24)^C.nJ(D.ek[b1>>>16&255],16)^C.nJ(D.ek[a8>>>24&255],8)^b6[w][1]
l=D.ek[b0&255]^C.nJ(D.ek[b1>>>8&255],24)^C.nJ(D.ek[a8>>>16&255],16)^C.nJ(D.ek[a9>>>24&255],8)^b6[w][2]
b1=D.ek[b1&255]^C.nJ(D.ek[a8>>>8&255],24)^C.nJ(D.ek[a9>>>16&255],16)^C.nJ(D.ek[b0>>>24&255],8)^b6[w][3]
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
a1=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oq(A.aH.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bNU(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ej[a6&255]
v=D.ej[b0>>>8&255]
u=$.qr[8]
t=D.ej[a5>>>16&255]
s=$.qr[16]
r=D.ej[a4>>>24&255]
q=$.qr[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ej[a4&255]
t=D.ej[a6>>>8&255]
v=D.ej[b0>>>16&255]
w=D.ej[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ej[a5&255]
v=D.ej[a4>>>8&255]
t=D.ej[a6>>>16&255]
r=D.ej[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ej[b0&255]
a5=D.ej[a5>>>8&255]
a4=D.ej[a4>>>16&255]
a6=D.ej[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ej[p&255]
a6=D.ej[b0>>>8&255]
a4=D.ej[n>>>16&255]
a5=D.ej[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ej[o&255]
a4=D.ej[p>>>8&255]
a7=D.ej[b0>>>16&255]
t=D.ej[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ej[n&255]
a7=D.ej[o>>>8&255]
a5=D.ej[p>>>16&255]
v=D.ej[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ej[b0&255]
a7=D.ej[n>>>8&255]
t=D.ej[o>>>16&255]
w=D.ej[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ej[a6&255]^C.nJ(D.ej[b0>>>8&255],24)^C.nJ(D.ej[a5>>>16&255],16)^C.nJ(D.ej[a4>>>24&255],8)^b5[a9][0]
o=D.ej[a4&255]^C.nJ(D.ej[a6>>>8&255],24)^C.nJ(D.ej[b0>>>16&255],16)^C.nJ(D.ej[a5>>>24&255],8)^b5[a9][1]
n=D.ej[a5&255]^C.nJ(D.ej[a4>>>8&255],24)^C.nJ(D.ej[a6>>>16&255],16)^C.nJ(D.ej[b0>>>24&255],8)^b5[a9][2]
b0=D.ej[b0&255]^C.nJ(D.ej[a5>>>8&255],24)^C.nJ(D.ej[a4>>>16&255],16)^C.nJ(D.ej[a6>>>24&255],8)^b5[a9][3]
a4=D.zD[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zD[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zD[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zD[o>>>8&255]
i=D.zD[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zD[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oq(A.aH.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSh.prototype={}
C.bSi.prototype={
gI(d){var w=this.a.length
return w},
aqC(){return B.rC(this.a,A.io,null,null)}}
C.bc2.prototype={
vy(d){return C.i3p(d)}}
C.cz5.prototype={
Nj(d){var w=d.w,v=Math.max(1,A.j.cK(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.ab1(v,t+20,u+16,t,u,B.uo(d.x))},
nD(d){return!1}}
C.bTj.prototype={
cJZ(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bF(new C.bTk(),x.E))},
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
return B.b(p.bDP(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.J)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axm.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9l.prototype={
A(d,e){if(e==null)return!1
if(J.bU(e)!==B.b2(this))return!1
return e instanceof C.a9l&&e.a===this.a},
gX(d){return B.bw(B.b2(this),B.xh(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h1G)return"["+(w+B.ea(this.a))+"]"
return"[ObjectKey "+(w+B.ea(this.a))+"]"}}
C.a2_.prototype={
S(){return new C.aKK(B.aR(x.N))},
cXF(d){return this.d.$1(d)},
cVl(){return this.e.$0()}}
C.aKK.prototype={
Y(){this.a3()
this.PJ()},
PJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVl(),$async$PJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fgY(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
ZS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fh1(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fh2(t))
w=3
return B.b(C.aoM(p),$async$ZS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fh3(t,s,p))
w=4
return B.b(t.PJ(),$async$ZS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
a27(d){return this.cu5(d)},
cu5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a27=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fgZ(t))
s=J.t(d,"id")
w=3
return B.b(C.c3i(J.k(s==null?"":s)),$async$a27)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fh_(t))
w=1
break}q=C.heY(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cXF(B.a([q],x.D)),$async$a27)
case 4:if(t.c==null){w=1
break}t.m(new C.fh0(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a27,v)},
PI(d,e){return this.bOl(0,e)},
bOl(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fgT(q),r,null,!0,!0,x.y),$async$PI)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fgU(t))
s=s.h(e,"id")
w=4
return B.b(C.aoL(J.k(s==null?"":s)),$async$PI)
case 4:if(t.c==null){w=1
break}t.m(new C.fgV(t))
w=5
return B.b(t.PJ(),$async$PI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
cIY(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bK(v)-1]+" "+B.bV(v)},
aSZ(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Q0,A.n),w,e,w,w,w,w,w,e)},
aSY(d){return this.aSZ(d,44)},
b9M(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Q0:u,r=B.n(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.Eu,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([Z.Eu,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bH0,u,u,u)],p))}return B.E(B.aA(A.c5,B.cV(u,B.A(q,A.m,u,A.ba,A.i,0,u,u),u,u,A.b6,new B.o(u,u,u,r,u,s,A.n),A.h8,u,u,u,u,A.rM,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fh7(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cnS(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d5.j(0.14):D.ZL,n=B.n(18),m=p?A.d5:A.dt
m=B.L(m,A.r,p?1.8:1)
w=this.aSY(A.qK)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aVV,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aVX,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Q0:q
u=p?q:B.L(A.aV,A.r,1.6)
r=p?D.bYt:q
return B.aA(q,B.cV(q,B.A(B.a([w,A.be,t,B.cV(q,r,q,q,A.b6,new B.o(q,q,u,q,q,v,A.a7),A.fS,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b6,new B.o(o,q,m,n,q,q,A.n),A.fS,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fgX(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cvI(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cIY(J.k(o==null?"":o))
o=B.n(18)
w=B.L(A.dt,A.r,1)
v=r.aSY(A.P6)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aVV,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aVX,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6f(A.hV,A.bw,"Bring it back",r.r?q:new C.fh4(r,d))
return B.p(q,B.A(B.a([v,A.be,t,p,A.bn,r.b6f(A.ef,A.c0,"Delete",r.r?q:new C.fh5(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.ZL,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBg,q,q,q)},
b6f(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.p(w,B.X(d,v?A.aV:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auK(d,e,f){var w=null
return new B.D(D.bAg,B.x(B.a([B.X(d,A.aV,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fy4,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fq6,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cc
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.c_,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aV,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aSZ(A.zp,46),A.be,D.bI1],t)
if(j.r)s.push(D.eqP)
s.push(B.aG(i,i,i,i,A.t0,i,i,i,new C.fha(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.L(A.dt,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bDY,s,i),B.p(i,B.A(B.a([j.b9M(0,A.z6,"Save",j.a.c.length),j.b9M(1,A.Pp,"Saved",o.gI(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bCZ,A.ey,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bw).j(0.12)
s=B.n(14)
r=B.L((j.y?A.c0:A.bw).j(0.4),A.r,1)
p=j.y
n=p?A.Pa:A.ea
n=B.X(n,p?A.c0:A.bw,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vm,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bCV,A.iu,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.ftS,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fx3,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fhb(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.m,i,A.e,A.i,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auK(A.qK,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.cnS(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eql)
else if(j.e==null)s.push(j.auK(A.a2d,"Could not reach the database","Check the connection, then open this again."))
else if(o.gav(h))s.push(j.auK(A.pn,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cvI(r.gR(r)))
A.d.v(u,s)}q.push(new B.dn(1,A.co,B.cl(u,i,i,A_.alX,i,i,A.ai,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8g()
p=s?i:D.Q0
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b8.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z6,m?A.jV:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bDA,B.aA(i,B.cV(i,B.A(B.a([k,A.aa3,new B.dn(1,A.co,B.eE(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jV:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.m,i,A.ba,A.i,0,i,i),i,i,A.b6,new B.o(s,i,i,o,n,p,A.n),A.h8,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b6Z,i,i,i,i,i,i,i,i)}}
C.oG.prototype={
ak(){return B.H(["id",this.a,"doc",this.b.ak(),"updatedAt",this.c.ab().ag()],x.N,x.z)}}
C.ZH.prototype={
S(){return new C.azg(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azg.prototype={
Y(){this.a3()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2Z(t.a.c),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
cC0(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qz(t.d,new C.cPr(d))
v=w<0
if(v&&C.i0t(d))return t.f
u=t.d
if(v)J.pT(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h5f(new C.cPs(t),v)
return t.f=t.f.bF(new C.cPt(t,d),v).eM(new C.cPu())},
Ja(d,e,f){return this.chp(0,e,f)},
b0_(d,e){return this.Ja(0,e,!1)},
chp(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ja=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.eb(new C.cPn(t,e),!1,null,x.H)),$async$Ja)
case 3:w=4
return B.b(t.f,$async$Ja)
case 4:w=5
return B.b(t.PT(),$async$Ja)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ja,v)},
b_e(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dKG:d
this.Ja(0,new C.oG(w,v,new B.V(Date.now(),0,!1)),!0)},
c7J(){return this.b_e(null)},
aex(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPv(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aex)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_e(s)
case 1:return B.h(u,v)}})
return B.i($async$aex,v)},
J9(d,e){return this.bOc(0,e)},
bOc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cPi(e),s,null,!0,!0,x.y),$async$J9)
case 3:if(g!==!0){w=1
break}t.m(new C.cPj(t,e))
w=4
return B.b(t.f,$async$J9)
case 4:w=5
return B.b(C.ahl(t.a.c,e.a),$async$J9)
case 5:w=6
return B.b(t.PT(),$async$J9)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
DK(d){return this.bGk(d)},
bGk(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPe(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DK)
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
return B.b(t.b0_(0,d),$async$DK)
case 9:w=5
break
case 7:w=10
return B.b(F.hfA(r,d.b,null),$async$DK)
case 10:w=5
break
case 8:w=11
return B.b(t.J9(0,d),$async$DK)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DK,v)},
c18(){var w,v,u,t,s=null,r=[D.dKJ,D.dKH,D.dKI],q=new C.cPl(),p=B.n(26),o=x.V,n=B.a([new B.ac(0,A.G,A.d2.j(0.4),A.eY,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dun[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.p(s,B.d(v,s,s,s,s,s,s,A.oY,s,s,s),A.f,s,s,new B.o(u,s,s,new B.bg(t,t,t,t),s,s,A.n),s,s,s,s,A.oo,s,s,s))}return B.p(s,B.A(B.a([B.E(B.x(B.a([D.fXX,A.R,B.bW(A.bH,l,A.bt,s,6,6),A.aR,B.aA(s,B.p(s,D.f7p,A.f,s,s,new B.o(A.c,s,s,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.aml,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPk(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ac,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.m,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c5X,A.n),s,s,s,s,D.bE7,s,s,s)},
bGi(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.p(v,B.bx(B.n(6),new B.an(A.a0,v,A.b4,A.t,B.a([B.eE(A.A,F.apn(d.b),A.f,A.bZ),D.ewQ,B.ap(v,B.aA(v,B.p(v,D.bZj,A.f,v,v,D.b7W,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cP9(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fnc,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.R,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fu3,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPa(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPb(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eG(B.a([new B.D(O.akS,B.hb(B.aA(s,B.p(s,A.arL,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b8.j(0.5),A.I,12)],x.V),E.wP,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc95(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nt,s,s,s,!0,s,s,s,s,s,D.fY0,s,s,s,1,s,!0)
if(t.e)r=D.bbp
else{w=t.c18()
v=B.a([D.fJ9,A.ae],r)
if(J.cI(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fmD,s,s,s),A.f,s,s,new B.o(D.bgD,s,s,u,s,s,A.n),s,s,s,s,A.yM,s,s,s))}r=B.a([new B.oa(A7.a06,new B.mq(w,s),s),new B.oa(D.bDu,new B.mq(B.A(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cr(t.d))r.push(D.feB)
else r.push(new B.oa(D.bCX,B.PI(new B.oK(new C.cPw(t),J.ad(t.d),!0,!0,!0,0,B.tl(),s),D.baD),s))
r=B.vX(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ai,!1,r)}return B.c5(q,D.bfe,r,s,!1,!1,s,s)}}
C.ZF.prototype={
S(){return new C.azc(B.a([],x.bx))},
UP(d){return this.d.$1(d)}}
C.aGz.prototype={}
C.azc.prototype={
b39(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb_Z()
v.aV(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aV(0,u)
return new C.aGz(v,w,f)},
Ez(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cz(A.qu,new C.cOD(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.ba(w.a,A.b5,A.aP),v)
t=m.gb_Z()
u.aV(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b5,A.aP),v)
u.aV(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b5,A.aP),v)
u.aV(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aV(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aV(0,t)
r.push(new C.aGz(o,n,p.c))}if(r.length===0)r.push(m.b39("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpw()
q=r.a
q.UP(q.c)}q=r.d
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
s.P$=0}r.a2()},
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
t.push(new F.mL(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rH(n,w,v,t,u)},
Bk(){var w=0,v=B.j(x.H),u=this,t
var $async$Bk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpw()
t=u.a
w=2
return B.b(t.UP(t.c),$async$Bk)
case 2:return B.h(null,v)}})
return B.i($async$Bk,v)},
c93(){this.m(new C.cOC(this))
this.Ez()},
aZU(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cOF(w,d,v))
w.Ez()},
c94(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cON())
this.Ez()
$.aW.x1$.push(new C.cOO(w))},
Rc(d){return this.cnI(d)},
cnI(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rc=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(80,1400,A.eN),$async$Rc)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Rc)
case 8:p=f
o=q.b.toLowerCase()
n=J.aiT(o,".png")?"image/png":"image/jpeg"
r.m(new C.cOG(d,n,p))
r.Ez()
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
return B.i($async$Rc,v)},
yo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hDh(r,t.gpw()),$async$yo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cOE(t,s))
t.Ez()
case 1:return B.h(u,v)}})
return B.i($async$yo,v)},
co_(d){var w,v=this,u=null,t=F.fMo(d.c)
if(t==null)return new B.bL(A.a6,u,u,B.hp(D.bSr,D.fLI,new C.cOI(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.a0,u,A.ac,A.t,B.a([B.bx(B.n(12),B.fR(t,A.A,u,u,A.cj,A.bZ,!0,140,!1,u,1/0),A.aq),B.ap(u,B.A(B.a([v.b6g(A.jJ,new C.cOJ(v,d)),A.bn,v.b6g(A.cz,new C.cOK(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6g(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aO(!1,w,!0,new B.D(A.hT,B.X(d,A.c,w,w,w,18),w),A.cQ,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aT,0,w,w,A.cQ,w,w,A.aj)},
JN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bk(),$async$JN)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hfA(s,t.gpw(),new C.cOM(t)),$async$JN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eG(B.a([new B.D(A.qv,B.hp(D.bXc,D.fRT,m.gaAu(),B.fu(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.arK,l,l,l,new C.cOP(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.YO,l,1,l,l,l,!1,l,!1,E.nt,l,l,l,!0,l,l,l,l,l,D.fMz,l,l,l,1,l,!0),i=Ay.aWo(N.lF,A.c,Ag.XB,A.oD,D.fNj,m.gc92()),h=B.n(18),g=m.gays(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.aA(l,B.p(l,new B.a5(92,142.1818181818182,B.eE(A.A,F.apn(m.gpw()),A.f,A.dC),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.p(l,B.A(B.a([f,A.ev,B.E(B.x(B.a([D.fZB,A.aw,B.d(F.he0(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fzU,l,l,l),A.X,B.dh(E.ar2,E.aWI,g,B.bn(A.d2,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.YO,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),g,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.oW,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),w,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aC,g,A.R,w,A.R,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),f,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fAr,l,l,l)
r=B.aG(l,l,l,l,D.bVQ,l,l,l,v===0?l:new C.cOQ(m,v),l,l,l,l,"Move up",A.ce)
q=h.length
p=B.aG(l,l,l,l,D.c1k,l,l,l,v===q-1?l:new C.cOR(m,v),l,l,l,l,"Move down",A.ce)
q=q===1?l:new C.cOS(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.p(l,B.x(B.a([new B.c7(A.aL,A.e,A.i,A.m,l,A.p,l,0,B.a([s,A.b3,r,p,B.aG(l,l,l,l,B.X(A.ef,A.pe,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ce)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(o,o,o,o),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.cg,!0,A.a5,l,A.ao,l,l,l,l),A.an,m.co_(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(n,n,n,n),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.m,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nt,l,new B.bG(u,u,u,u),new B.bg(w,w,w,w),l,l,A.n),l,l,new C.a9l(g),A.ei,D.bBw,l,l,l))}return B.oH(!0,B.c5(j,E.aiP,B.cl(f,l,l,D.bC_,l,l,A.ai,!1),l,!1,!1,i,l),new C.cOT(m),x.C)}}
C.aze.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nt,q=B.n(16),p=B.n(16),o=s?A.ax.j(0.08):A.c.j(0.04)
s=s?A.ax.j(0.16):A.d2.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eL,B.aJ(!1,A.a3,!0,t,B.aO(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVh,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eH,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arG.prototype={
S(){return new C.aFn()}}
C.aFn.prototype={
Y(){this.a3()
this.a_y()},
by(d){this.bI(d)
if(d.c!=this.a.c)this.a1X()},
a1X(){var w=0,v=B.j(x.H),u=this,t
var $async$a1X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a1X)
case 2:u.d=null
if(u.c!=null)u.m(new C.ekM(u))
w=3
return B.b(u.a_y(),$async$a1X)
case 3:return B.h(null,v)}})
return B.i($async$a1X,v)},
a_y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Zk(B.cF(n,0,null),new B.Q4(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iV(0).df(0,A.qr),$async$a_y)
case 7:if(r.c==null){w=1
break}r.d.tW(!1)
r.m(new C.ekK(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ekL(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_y,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
cc7(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.ekN(w))}else{v.qo(0)
w.m(new C.ekO(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bL
n=B.n(8*n.d)
m=B.a([D.jy.j(0.92),D.Md.j(0.95)],x.O)
w=B.L(A.c4.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qN,A.c4,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.O,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bi)}if(p.f)return B.at(B.X(A.aqh,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bci
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eE(A.A,new B.a5(r,q,new B.AF(s,o),o),A.t,A.bZ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.hs,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a7),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a0,o,A.b4,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcc6(),o,o,o,o,o,o,!1,A.a4)}}
C.y4.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jA.prototype={}
C.aef.prototype={
B(d){return B.pa(new C.e7h(this,B.R(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adE.prototype={
B(d){var w,v,u=null,t=B.R(d).ax.a===A.J,s=B.n(18),r=B.n(18),q=B.L(D.jy.j(t?0.35:0.4),A.r,1),p=t?D.MT:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.n(10),l=B.L(A.c4.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dF,6)],o)
w=this.c
o=B.E(B.p(u,new B.fF(0.5625,C.ijk(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.amQ,u,u,u,u),1)
m=D.jy.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jy,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.bnT,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.al8,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.y7.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o0.prototype={}
C.blh.prototype={
a_H(d){var w=null
return new B.bL(A.a6,w,w,B.BP(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ccB(){return this.a_H(1)},
az8(d){var w=null,v=B.n(8),u=B.L(A.iq,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.agp,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.iq,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.iq,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.q(-8.36,0))],u),A.m,v,A.ba,A.i,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.an,w.az8("TAARIFA ZA WANANDOA"),A.an,w.ccB(),A.cU,w.a_H(0.9),A.cU,w.a_H(0.7),A.R,w.az8("TAMKO LA MAKUBALIANO"),A.fK,w.a_H(1),A.cU,w.a_H(0.95),A.R,w.az8("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.aei.prototype={
B(d){return B.pa(new C.epy(B.R(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afY.prototype={
B(d){var w,v,u,t,s,r=null,q=B.R(d).ax.a===A.J,p=B.n(18),o=B.n(18),n=B.L(A.aB.j(q?0.35:0.4),A.r,1),m=q?D.bnp:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.n(10),i=B.L(A.aB.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dF,6)],l)
w=this.c
v=C.hew(w.a)
if(v==null)v=A.d.gH(D.Sz)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fF(0.5625,new B.an(A.a0,r,A.b4,A.t,B.a([B.bR(0,B.fR(C.hev(v.d),A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),0,0,0),new B.D(A.alN,new C.blh(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.amQ,r,r,r,r),1)
j=A.aB.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.MU,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bfS,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.al8,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.l8.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8O.prototype={}
C.WQ.prototype={
S(){var w=$.aw()
return new C.aFE(new B.cw(null,x.A),new B.au(A.au,w),new B.au(A.au,w),B.mT(0,null,null),A.d.gH(D.a5j),D.dV5,B.a([],x.L),B.a([],x.gE))}}
C.aFE.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.A5(C.fQh(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fPd().bF(new C.esv(v),w)
$.rd().jo(0,"assets/images/ngmy_logo.png").bF(new C.esw(v),w).eM(new C.esx())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a2()},
afp(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.a_,w,w,w,w,w,w,w,w,w,w))},
Js(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Js=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(88,1600,A.eN),$async$Js)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Js)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hDy(m,p),$async$Js)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFz(new B.q5(o,1),m),$async$Js)
case 10:if(r.c!=null)r.m(new C.es7(r,o))
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
return B.i($async$Js,v)},
XF(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hDy(s,q),$async$XF)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFz(new B.q5(r,1),s),$async$XF)
case 4:if(t.c!=null)t.m(new C.es3(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XF,v)},
afq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ese(q))
t=4
q.a.toString
p=C.inQ()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afq)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esf(q,n))
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
if(q.c!=null)q.m(new C.esg(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afq,v)},
a_M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.es9(q,i))
t=4
q.a.toString
p=C.inP()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_M)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esa(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.esb(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esc(q))
$.aW.x1$.push(new C.esd(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_M,v)},
ccR(d){this.m(new C.es8(this,d))},
EQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.es5(q))
t=4
w=7
return B.b($.aW.gmS(),$async$EQ)
case 7:w=8
return B.b(B.bQ(A.mN,null,x.H),$async$EQ)
case 8:k=$.aW.ao$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$EQ)
case 9:o=e
w=10
return B.b(o.hs(A.he),$async$EQ)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahn(J.eQ(A.dM.gaU(n)),"ngmy_news.png","image/png"),$async$EQ)
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
if(q.c!=null)q.m(new C.es6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EQ,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.lm,a2,a2,a2,new C.esm(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bXI,a2,a2,a2,new C.esn(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oC,a2,a2,a2,a4?a1.gb1h():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eG(v,a2,a2,!0,!0,A.BU,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f7A,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eY,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.eE(A.A,new B.em(new C.b2G(t,s,r,a1.x,a2),a1.d),A.f,A.dC),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
t=a1.as?a2:a1.gccQ()
t=B.a([B.E(B.dh(D.bYu,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cg,a2,a2,a2),t,B.bn(D.u6,a2,a2,a2,A.c,A.h3,a2,a2,new B.b9(B.n(14),Q.vM),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.n(10),B.fR(r,A.A,a2,a2,A.cj,A.bZ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aG(a2,a2,a2,a2,D.bV7,a2,a2,a2,a1.as?a2:a1.gbMO(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aUP("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dh,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dok[o]
p.push(B.mZ(a2,D.u6,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pN,a2,a2,a2),A.hh,new C.eso(a1,n),a2,a2,Q.vM,a2))}p=B.bW(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.fY9,A.be,B.jt(a2,a2,a2,D.fHQ,a2,new C.esp(a1),m==="en",a2,a2,a2,a2),A.ae,B.jt(a2,a2,a2,D.fHL,a2,new C.esq(a1),m==="sw",a2,a2,a2,a2)],w),A.vG,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5j,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bO(i,i.gI(0),h.k("bO<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTh(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5j,10,a2,j),h=j.$ti,j=new B.bO(j,j.gI(0),h.k("bO<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTh(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gccT()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bF.j(0.4),A.I,18)],v)
v=B.a([u,A.aC,new B.D(A.cw,s,a2),t,A.aC,new B.D(A.cw,r,a2),q,A.R,p,A.X,m,A.aC,new B.D(A.cw,l,a2),new B.a5(a2,78,k,a2),A.R,new B.a5(a2,78,j,a2),A.aR,B.aA(a2,B.p(A.A,B.A(B.a([D.bYo,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fC,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uX,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dV,B.A(B.a([D.dFn,A.at,D.bIn],w),A.m,a2,A.e,A.i,0,a2,a2),A.R],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a6
q=e?A.b8.j(0.35):D.u6
p=new B.aP(16,16)
d=new B.ay(A.bB,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.p(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fxP,a2,a2,a2),A.f,a2,A9.Xq,new B.o(q,a2,new B.bG(d,d,d,d),new B.bg(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.iu,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d9F[o]
t.push(B.mZ(a2,D.u6,B.d(a0,a2,a2,a2,a2,a2,a2,A.Ku,a2,a2,a2),A.hh,new C.esr(a1,a0),a2,a2,Q.vM,a2))}u.push(B.bW(A.bH,t,A.bt,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aUP("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ess(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ab,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dh,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gccS()
u.push(B.A(B.a([t,A.ae,B.Ix(A.zt,s,B.nV(a2,A.b8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aC)
t=a1.as?a2:a1.gb1h()
u.push(B.dh(A.oC,D.fTz,t,B.bn(A.cV,a2,a2,a2,a2,A.Ke,a2,a2,new B.b9(B.n(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.aly,a2,a2,A.ai,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.L(E.kn.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.p(a2,B.A(B.a([E.aa4,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jt,a2,a2,a2)],w),A.m,a2,A.e,A.O,0,a2,a2),A.f,a2,a2,new B.o(E.BK,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bEp,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.BU,new B.an(A.a0,a2,A.ac,A.t,v,a2),a2,!1,!1,a2,a2)},
aUP(d){var w=null
return B.bs(w,new B.b6(4,B.n(14),A.a1),w,A.eV,w,w,w,w,!0,w,w,w,w,w,w,D.u6,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Ey,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTh(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bF:A.bB
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ks,t,t,t,t),A.fK],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bAv,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jE,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.p(t,B.x(w,A.m,t,A.ba,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.es4(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.A5.prototype={
beR(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.A5(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cNI(d){var w=null
return this.beR(w,w,w,w,w,d,w,w,w,w)},
ak(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciH(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciF(),B.U(w).k("N<1,m>")).bZ(0,new C.ciG())
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
return this.beR(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG2(d){return this.f}}
C.tJ.prototype={
a7(){return"NewsLayout."+this.b}}
C.C3.prototype={
a7(){return"NewsFrame."+this.b}}
C.lv.prototype={}
C.b2G.prototype={
rU(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1j(d,e,f,g){return this.rU(d,e,null,1.25,f,A.bq,g)},
Qv(d,e,f,g,h){return this.rU(d,e,f,1.25,g,A.bq,h)},
aze(d,e,f,g,h){return this.rU(d,e,null,f,g,A.bq,h)},
azd(d,e,f,g,h){return this.rU(d,e,f,g,0,A.bq,h)},
b1l(d,e,f,g,h){return this.rU(d,e,null,f,0,g,h)},
ccX(d,e,f,g,h,i){return this.rU(d,e,f,g,0,h,i)},
azc(d,e,f,g){return this.rU(d,e,null,f,0,A.bq,g)},
aft(d,e,f){return this.rU(d,e,null,f,0,A.bq,A.cT)},
b1k(d,e,f,g,h){return this.rU(d,e,f,g,0,h,A.cT)},
ccW(d,e,f,g){return this.rU(d,e,null,f,0,g,A.cT)},
ccV(d,e,f,g){return this.rU(d,e,f,g,0,A.bq,A.cT)},
afu(d,e,f,g,h,i){return this.rU(d,e,f,g,h,A.bq,i)},
b1i(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iG(new B.en(d,u,u,A.cH,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bW,new B.jf(1),u,u,h,u,A.bX,u,A.cu)
v.o5(g)
if(!v.b.a.c.gaGk())return w
w-=2}return j},
afr(d,e,f,g,h,i,j,k){return this.b1i(d,e,f,g,h,i,j,k,A.bq)},
aBp(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aBo(d){return this.aBp(null,!1,d)},
air(d,e){return this.aBp(null,d,e)},
cuP(d,e){return this.aBp(d,!1,e)},
gb3w(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXw(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pe(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afr(w.gaXw(),u,A.V,d,g,h,i,1.02)
return B.d(w.gaXw(),v,g,A.a2,v,v,v,w.azd(u,t,f,1.02,A.V),e,v,v)},
aXB(d){return this.Pe(d,A.K,null,2,78,30)},
acG(d,e,f,g,h){return this.Pe(d,e,null,f,g,h)},
c11(d,e,f,g,h){return this.Pe(d,A.K,e,f,g,h)},
c10(d,e,f){return this.Pe(d,A.K,null,e,f,30)},
Sv(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bL
w=v.d.as
return new B.D(A.jD,B.d(s,u,g,A.a2,u,u,u,v.b1k(w,v.b1i(t,w,A.cT,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b9q(d){return this.Sv(d,A.K,null,3,24)},
aCT(d,e,f,g){return this.Sv(d,e,null,f,g)},
cCu(d,e,f){return this.Sv(d,A.K,e,3,f)},
b9r(d,e){return this.Sv(d,e,null,3,24)},
cCs(d,e){return this.Sv(d,A.K,null,3,e)},
cCt(d,e,f){return this.Sv(d,e,null,3,f)},
asM(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f1,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qv("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O9(){return this.asM(null,!0)},
asL(d){return this.asM(null,d)},
bIL(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bL
return new B.D(A.i9,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.ccW(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
w5(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3w(),h=A.o.aq(j.bE(B.c1(B.bB(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ibf(Math.max(1,B.bB(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1j(k,12,1.2,A.V),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afr(i,v,A.V,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afr(i.toUpperCase(),v,A.V,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eO,l,l,l,m.afu(v,u*0.84,h,1,1,A.V),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.R,B.A(B.a([B.d(C.bEP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iR,A.i,0,l,l),A.an,m.air(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.E(B.d(i,l,1,A.eO,l,l,l,m.azc(v,u*0.9,1,A.V),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.X,B.A(B.a([B.d(C.bEP(j),l,l,l,l,l,l,m.Qv(k,13,B.b0(h),0.6,A.V),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iR,A.i,0,l,l),A.R,m.cuP(B.b0(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb3w()
v=B.d("NGMY",l,l,l,l,l,l,m.aze(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eK(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rU(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dn(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afu(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.V),A.dX,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.R,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l)
t=m.air(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azc(v,u,1,A.V),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.air(!0,1.4),A.aw,B.d(C.bEP(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBo(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aze(v,u,1,3,A.V),A.K,l,l),A.R,m.air(!0,1.2),A.aw,B.A(B.a([B.d(C.bEP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l),A.aw,m.aBo(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adS(d){return this.w5(d,!1)},
afs(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afu("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
ccU(d,e){return this.afs(d,null,e,null)},
aZM(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.E(B.dg(v),12)===0?12:A.o.E(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azd("Roboto",15,t,1,A.cC),r=B.X(E.aos,t,w,w,w,18),q=A.a.aB(A.oH[B.bK(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bV(v)+", "+B.bB(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h1,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axV(){return this.aZM(A.mZ)},
b6t(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afu("Roboto",this.afr(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBs(d,e,f){return this.b6t(d,e,f,30)},
aCW(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bL
return new B.D(A.wa,B.d(v,w,e,A.a2,w,w,w,this.ccV("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9v(d){return this.aCW(d,3,22)},
cCF(d,e){return this.aCW(d,e,22)},
ue(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.bZ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BB(D.bHh,w,s)
if(v==="sepia")w=new B.BB(D.bHg,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.z1,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.YJ.j(0.38)],x.O),s,s),A.n),A.bi))
return new B.a5(d,e,new B.an(A.a0,s,A.b4,A.t,v,s),s)},
qV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.p(j,B.p(j,k.ue(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.ey,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.md,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.em4,14)],x.V)
v=k.ue(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eK(A.A,-0.035,B.p(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1k(i.as,13.5,D.bhC,1.1,A.cF),A.K,j,j),j,j,j),1)],x.p),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.bls,j,j,j,w,j,A.n),j,e,j,j,D.bBV,j,j,d),j)
case 3:w=B.n(30)
i=B.L(B.b0(i.x),A.r,5)
return B.p(j,B.bx(B.n(25),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.at(B.p(j,B.hR(k.ue(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a7),j,t,j,j,A.md,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.elL,10)],x.V)
return B.eK(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ac,A.f,B.a([B.bR(0,B.p(j,k.ue(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rQ,j,j,j),0,0,0),B.ap(j,B.eK(A.A,-0.6,B.p(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ap(-10,B.eK(A.A,-0.6,B.p(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b4(B.nP(k.ue(d,e),A.aq,D.hrp),new C.bei(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ue(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aP(2,2)
n.push(B.p(j,j,A.f,j,j,new B.o(A.bP,j,j,new B.bg(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c7(A.aL,A.qR,A.i,A.m,j,A.p,j,0,n,j),j))}return B.p(j,new B.an(A.a0,j,A.b4,A.t,w,j),A.f,A.em,j,j,j,e,j,j,D.bGv,j,j,d)
case 8:w=d/2
v=B.xs(A.fI,new B.aP(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.p(j,B.bx(B.xs(A.hM,new B.aP(w,w)),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h2,22)],x.V)
return B.p(j,k.ue(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bU,j,j,d)
case 10:return new B.a5(d,e,B.nP(k.ue(d,e),A.aq,D.hz9),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.p(j,k.ue(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.ey,j,j,d)}},
aQP(d,e){return this.d.e===D.Tb?A.bL:this.bIL(d,e)},
Xb(d){return this.aQP(d,A.K)},
gaCc(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCb(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1l(v.Q,19,1.15,A.cF,A.V),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qv("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aft(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jk(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gclc(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aal(d,e,f,g){return B.cs(new C.ciI(this,e,d,f,g))},
aak(d){return this.aal(d,22,!0,18)},
Xo(d,e){return this.aal(d,22,!0,e)},
aRS(d,e,f){return this.aal(d,22,e,f)},
bKK(d,e,f){return this.aal(d,e,!0,f)},
bcu(d,e,f,g){return B.cs(new C.ciJ(this,e,d,g,!0,f))},
ck_(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adS(824),A.aC,k.aXB(824),k.b9q(824),A.R,k.O9(),A.af,B.at(k.qV(824,360),j,j,j),k.Xb(824),A.af,B.E(k.aak(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adS(824),A.aR,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acG(440,A.bk,3,62,26),k.aCT(440,A.bk,2,20),A.b3,k.asM(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kf,B.x(B.a([k.qV(362,310),k.Xb(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.X,k.aBo(2),A.af,B.E(k.aak(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.w5(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c11(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCu(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Ce,j,j,j)
u=B.a([B.at(k.qV(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Tb){h=A.w.j(0.65)
u.push(B.ap(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.azd(i,14,A.c,1.15,A.V),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ac,A.t,u,j),A.R,k.O9(),A.X,B.E(k.Xo(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.w5(824,!0)
w=k.qV(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b7,j,A.ac,A.t,B.a([w,B.ap(0,B.p(j,k.Pe(780,A.bk,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b1,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bEI,j,j,j),j,j,0,0,j,j)],u),j),k.b9r(824,A.bk),A.R,k.O9(),A.X,B.E(k.aak(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adS(824),A.aC,k.aXB(824),k.b9q(824),A.R,k.O9(),A.af,B.E(k.bcu(3,300,B.x(B.a([k.qV(300,300),k.Xb(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.w5(824,!0)
v=x.p
u=B.x(B.a([k.acG(440,A.bk,3,62,26),k.aCT(440,A.bk,2,20),A.b3,k.asL(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.by,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTb,new B.D(A.i9,k.qV(364,h.e===D.Tb?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aC,B.E(k.Xo(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adS(824),A.af,k.c10(824,2,70),k.cCs(824,21),A.R,k.O9(),A.af,B.E(k.bcu(3,340,B.at(k.qV(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.w5(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bEP(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qv(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aC],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1l(h.Q,24,1.15,A.cF,A.V),j,j,j))
v.push(A.b3)
if(k.gaCc())v.push(k.aCb(230,250))
return B.x(B.a([w,A.aC,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.al6,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acG(570,A.bk,3,62,28),k.cCt(570,A.bk,20),A.R,k.asL(!1),A.R,B.at(k.qV(570,330),j,j,j),k.Xb(570),A.X,B.E(k.aRS(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.w5(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qv(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.p(j,B.x(B.a([t,A.an,k.Pe(788,A.bk,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bD_,j,j,j),k.b9r(824,A.bk),A.X,B.at(k.qV(824,310),j,j,j),k.Xb(824),A.R,k.O9(),A.X,B.E(k.aak(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w5(824,!0),A.aR,new B.an(A.a0,j,A.ac,A.t,B.a([k.qV(824,430),B.ap(18,k.ccU(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.aBs(824,3,66),k.b9v(824),A.af,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.axV(),A.aC,B.E(k.Xo(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w5(824,!0),A.by,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afs(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6t(410,4,58,28),k.aCW(410,6,20),A.b3],w),A.E,j,A.e,A.i,0,A.p),j),V.aTc,k.qV(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aC,k.axV(),A.aR,B.E(k.Xo(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.w5(824,!0)
v=k.qV(824,420)
u=B.hOp(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ac,A.t,B.a([v,B.ap(22,B.fw(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.ccX(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bEY,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.aBs(824,3,62),k.b9v(824),A.af,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.aZM(A.lO),A.aC,B.E(k.Xo(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w5(824,!0)
u=h.w
t=x.p
w=B.a([k.qV(824,380),B.ap(j,k.afs(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBs(824,2,60)
r=k.cCF(824,2)
p=k.axV()
o=B.E(k.aRS(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ac,A.t,w,j),A.aR,s,r,A.X,p,A.aC,o,A.af,B.p(j,B.A(B.a([B.bx(B.n(14),k.ue(150,104),A.aq),A.oT,B.E(B.x(B.a([k.afs("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.R,B.d(q,j,2,A.a2,j,j,j,k.azc(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.O,0,A.p),1),B.X(A.eH,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.w5(824,!0),A.by,k.acG(824,A.bk,3,62,30),k.aCT(824,A.bk,2,22),A.X,k.asL(!1),A.X,B.at(k.qV(824,330),j,j,j),k.aQP(824,A.bk),A.aR,B.E(k.bKK(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.o(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.baM(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bFu,B.x(B.a([B.E(t.ck_(),1),A.R,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fK,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1j(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qv(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iR,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dx(!0,B.b4(s,s,s,new C.btL(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fR(q,A.A,s,s,A.cj,A.bZ,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mZ,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aze(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,new B.dx(!0,B.da(B.p(s,B.A(o,A.m,s,A.e,A.O,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bGE,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jk(new B.an(A.a0,s,A.ac,A.t,n,s),A.t,s),s)}}
C.bej.prototype={
jt(d){return C.hsm(d)},
k9(d){return!1}}
C.bei.prototype={
a4(d,e){var w,v=C.hsm(e)
$.S()
w=B.K()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.af(v,w)},
aD(d){return!d.b.A(0,this.b)}}
C.bwh.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.d_(3)
w=$.S()
v=B.a([],x.v)
u=new B.aF(w.r,A.ah,null,null,v)
u.D(new B.aY(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.ai(r)
u.a8()}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.ai(p)
u.a8()}u.D(new B.aq(0,r))
u.D(new B.bt())
return u},
k9(d){return!1}}
C.baM.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e4()
o.d_(7)
$.S()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.aj()*0.07).gp(0)
d.N(new B.q(o.aj()*u,o.aj()*t),0.4+o.aj()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.q(o.aj()*u,o.aj()*t)
q=50+o.aj()*90
w.sar(new B.c_(A.A,0.5,A.x,p,0,B.a([A.Yd.j(0.13),A.L],v),p,p).aG(0,B.bX(r,q)))
d.N(r,q,w)}w.sar(p)},
aD(d){return!1}}
C.btL.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fv(u,A.cu,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bW,u,A.dD,A.bX)
s.ef()
w=d.c
J.bq(w.save())
w.translate(t/2,e.b*0.52)
d.is(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.q(-v/2,-t.gba(t)/2))
w.restore()},
aD(d){return!d.b.A(0,this.b)}}
C.WR.prototype={
S(){return new C.aFH()}}
C.aFH.prototype={
Y(){var w=this
w.a3()
B.fGD(w.a.c,null).bF(new C.eth(),x.g7).bF(new C.eti(w),x.a)
w.a.toString},
gaPB(){var w=D.az5[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazf(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaPB()
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
q=A.j.F(v*p,q,p-q)-q
w=A.j.F(u*o,w,o-w)-w
return new B.a2(q,w,q+s,w+t)},
a_O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.et4(r))
t=4
q=r.gazf()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.pW(new B.pv())
m=B.zn(n,null)
i=B.K()
i.z=A.hc
m.q1(g,q,new B.a2(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xC(J.hhE(p),J.hhE(o)),$async$a_O)
case 7:l=e
w=8
return B.b(l.hs(A.he),$async$a_O)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eQ(J.vQ(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.et5(r))
r.c.L(x.q).f.U(D.fhf)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_O,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.lm,s,s,s,new C.etb(d),s,s,s,s,s,s),p=x.p
q=B.eG(B.a([B.bM(!1,D.fWc,s,s,!0,s,s,s,t.y||r==null?s:t.gccY(),s,s)],p),s,s,!0,!0,A.BU,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h_e,s,s,s,1,s,!0)
if(r==null)p=A.m0
else{w=B.E(new B.D(A.bR,B.at(new B.fF(t.gaPB(),B.cs(new C.etc(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.jt(s,s,s,B.d(D.az5[u].a,s,s,s,s,s,s,A.aaH,s,s,s),s,new C.etd(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZa,B.E(B.kT(s,s,s,6,1,new C.ete(t),t.f),1),D.bYL],p),A.m,s,A.e,A.i,0,s,s),D.fTs,A.an,B.bM(!1,D.fTa,s,s,!0,s,s,s,new C.etf(t,d),s,s)],p),A.m,s,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.YZ,s,s,s,s,s,s,D.bCl,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c5(q,A.BU,p,s,!1,!1,s,s)}}
C.bdR.prototype={
a4(d,e){var w
$.S()
w=B.K()
w.z=A.cj
return d.q1(this.b,this.c,new B.a2(0,0,0+e.a,0+e.b),w)},
aD(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0Z.prototype={
S(){var w=$.aw(),v=x.A
return new C.aH5(new B.au(A.au,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a5V),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oQ.prototype={}
C.aH5.prototype={
gaXK(){var w,v,u=this
if(u.p1)w=new B.w6(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.F(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f29(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Zo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rd().jo(0,"assets/images/ngmy_logo.png"),$async$Zo)
case 7:q=e
p=J.eQ(J.vQ(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFz(new B.q5(p,1),o),$async$Zo)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f11(r,p))
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
return B.i($async$Zo,v)},
Qy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l8(92,1800,A.eN),$async$Qy)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$Qy)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFz(new B.q5(p,1),n),$async$Qy)
case 9:if(r.c==null){w=1
break}r.m(new C.f1p(r,p))
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
return B.i($async$Qy,v)},
b5Q(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aI=w.aR=w.aL=w.aH=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bJ=0.5
w.aP=1
w.c9=w.bG=w.bm=0
w.cO=w.c6=!1},
aZw(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCe(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.drq)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCe(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCe(C.hcl(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCe(C.hcl(1-a0*0.5,n,n,n),w)}return a1?C.bCe(C.hcl(-1,255,255,255),w):w},
aD1(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xA(u,v,w)
this.dx.px(new C.f1z(t),!0)
return t},
b8p(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aD1()
w=C.ilv(e.d.a.a,e.db)
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
return C.ihX(d,k,v,a0,j,e.gaXK(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAi(){return this.b8p(null)},
DJ(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DJ)
case 3:w=4
return B.b(B.bQ(A.eS,null,x.H),$async$DJ)
case 4:w=5
return B.b($.aW.gmS(),$async$DJ)
case 5:s=$.aW.ao$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DJ)
case 7:w=6
return B.b(e.hs(A.he),$async$DJ)
case 6:q=e
u=q==null?null:J.eQ(A.dM.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DJ,v)},
abf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0L(q))
t=4
w=7
return B.b(q.DJ(),$async$abf)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cO.gcu().aM(p)
n=C.Ch(null,null,null,null,D.oM,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8p(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.f0M(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abf,v)},
B2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0J(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B2)
case 7:w=8
return B.b(B.bQ(A.ny,null,x.H),$async$B2)
case 8:w=9
return B.b($.aW.gmS(),$async$B2)
case 9:k=$.aW.ao$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B2)
case 10:o=e
w=11
return B.b(o.hs(A.he),$async$B2)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahn(J.eQ(A.dM.gaU(n)),"ngmy_quote.png","image/png"),$async$B2)
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
if(q.c!=null)q.m(new C.f0K(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B2,v)},
cn8(){var w=this.p4
w.toString
return B.cs(new C.f1i(this,w))},
b1s(d,e){var w=null
return B.bs(w,w,w,w,w,D.fs5,w,w,!0,new B.b6(4,B.n(16),Q.vM),w,w,w,w,w,D.u6,!0,w,w,w,w,new B.b6(4,B.n(16),D.b4E),w,w,w,w,w,w,w,w,Ad.EG,e,w,w,w,w,w,w,w,D.fxF,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yx(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b8,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aVT,w,w,w))
return new B.D(H.akX,B.A(u,A.m,w,A.e,A.i,0,w,w),w)},
b1r(d,e){var w=null,v=B.n(18),u=B.L(A.bB,A.r,1)
return B.p(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k8),A.f,w,w,new B.o(D.u6,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wd(d){return this.b1r(d,A.bE)},
ow(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uX:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.L(f?A.L:A.bB,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jV,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jV,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cV(r,B.A(s,A.m,r,A.e,A.O,0,r,r),r,r,A.b6,new B.o(w,r,u,v,r,p,A.n),A.h8,r,r,r,r,A.GH,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahn(d,e,f){return this.ow(d,null,e,f)},
azj(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b8.j(0.28):A.c.j(0.05),t=g?A.eJ:A.bB,s=x.p
v=B.a([B.cV(w,d,w,w,A.b6,new B.o(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h8,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.O,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1v(d,e,f,g,h,i){return this.azj(d,e,f,g,h,5,i)},
kz(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUG,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.eqp,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1v(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aUV,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a0y,u,u,u))
s=B.A(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awN(w).cP4(A.b8,A.bB,A.b8.j(0.2),A.c,D.f6Q,4)
return new B.D(A.yw,B.x(B.a([s,B.aaY(B.kT(u,u,u,g,f,new C.f1w(this,h),A.j.F(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajq(d,e,f,g,h,i){return this.kz(d,e,f,g,h,null,i)},
ajP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.dt:B.b0(u)
r=d==u
q=r?A.c:A.aV
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bS2:o
n.push(B.aA(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f1y(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bt,o,10,10)},
bOS(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5V
else{v=x.a8
w=B.C(new B.Y(D.a5V,new C.f0B(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b1s("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f0C(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.ab_,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b1s("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f0D(o),n,n,n,!1,n,n,!1,n,!0,n,A.ab,n,n,n,n,n,n,n,n,n,n,n,A.dh,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yx("DESIGNS",A.uH)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d0x[q]
r.push(new B.D(A.iK,o.ahn(p,o.x===p,new C.f0E(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.ch(B.A(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hN(n,new C.f0F(o,w),w.length,n,n,A.aL,new C.f0G(),!1),n),A.R,o.b1r(B.x(B.a([B.iP(A.b8,n,n,A.ag,!0,new C.f0H(o),n,D.fKh,n,D.fGs,o.k3),B.iP(A.b8,n,n,A.ag,!0,new C.f0I(o),n,n,n,D.fDD,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alx)],s),A.E,n,A.e,A.i,0,A.p)},
cJf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aD1()
if(a7.length===0)return a5.wd(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KD,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("cg.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cC(m,new C.f1Z(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f25(a5)
j=new C.f27()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KD,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b8.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eJ:A.bB
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.p(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.bg(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Oh,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f2_(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wd(B.bW(A.bH,o,A.vG,a6,6,6))
i=B.a([a5.ow("All words",K.aq0,!1,new C.f20(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahn("Sentence "+a3,!1,new C.f21(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahn("Clear picks",!1,new C.f22(a5)))
i=B.bW(A.bH,i,A.bt,a6,8,8)
g=a5.yx("SIZE OF THE PICKED WORDS",D.aps)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dxw[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f23(e,k)
f.push(a5.ahn(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bW(A.bH,f,A.bt,a6,8,8),A.X,a5.ow("Make every word normal",A.k5,!1,new C.f24(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEb(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bHZ,B.d(A.d.fe(D.aAU,new C.f1I(q)).b,p,p,p,p,p,p,D.fqs,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cs(new C.f1J(q)),l=q.yx("HIGHLIGHT BEHIND THE WORDS",A.a2s),k=q.p1?-1:q.k4
k=q.ajP(k,new C.f1K(q),D.dbO)
w=q.p1
v=w?A.c:A.aV
n=B.a([n,A.X,m,l,B.bW(A.bH,B.a([k,B.aA(p,B.p(p,D.bV1,A.f,p,p,new B.o(p,p,B.L(v,A.r,w?3:1),p,p,D.fjS,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1N(q),p,p,p,p,p,p,!1,A.a4)],o),A.vG,p,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KD,p,p,p)],o)
if(q.gaXK()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajq("Colour",l,0,360,new C.f1O(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajq("Shade",k,0.15,0.9,new C.f1P(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kz("Strength",l,0.15,1,new C.f1Q(q),1,""+A.j.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.wd(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yx("LOOK",A.wJ))
m=B.a([q.ow("Bold",I.apq,q.fy,new C.f1R(q)),q.ow("Italic",I.apr,q.go,new C.f1S(q))],o)
for(u=0;u<3;++u){l={}
k=D.d1L[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uX:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bB,1,A.r,-1)
m.push(B.aA(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.bg(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1T(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vG,p,8,8))
n.push(q.yx("COLOUR",A.mf))
n.push(q.ajP(q.fx,new C.f1U(q),D.dnL))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KD,p,p,p))
n.push(q.yx("SIZE AND PLACE",A.HG))
m=q.fr
m=q.kz("Text size",m,0.5,1.6,new C.f1L(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wd(B.x(B.a([m,q.kz("Up / down",l,0.12,0.5,new C.f1M(q),0.3,""+A.j.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cn9(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.n(22)
v=B.L(A.b8.j(0.6),A.r,1.6)
u=B.a([A.b8.j(0.18),A.bF.j(0.12)],x.O)
return B.aA(q,B.p(q,B.x(B.a([B.p(q,D.c_E,A.f,q,q,D.b7B,q,62,q,q,q,q,q,62),A.aC,D.fHJ,A.an,D.fMx],x.p),A.m,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.u6,q,v,w,q,new B.a9(A.a6,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bDz,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1u(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.n(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.bZ,!1,q,!1,q,q),q),A.aq),A.be,B.E(B.x(B.a([D.fHf,A.R,B.bW(A.bH,B.a([r.ow("Change",A.jJ,!1,r.gb1u()),r.ow("Remove",A.ef,!1,new C.f1m(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.m,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.djU[t]
u.push(r.ow(s.b,s.a,r.at===t,new C.f1n(r,t)))}u=B.bW(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c59(p)
break
case 1:s=r.c44()
break
case 2:s=r.bKJ()
break
case 3:s=r.bRa()
break
default:s=r.bMP()
break}return B.x(B.a([v,A.af,u,A.aC,s,A.X,new B.bL(A.a6,q,q,r.ow("Reset the whole picture",A.k5,!1,new C.f1o(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c59(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.ow("Auto enhance",E.a25,!1,new C.f1e(w)),w.ow("Make words easy to read",A.pt,!1,new C.f1f(w))],v),A.bt,null,8,8),A.aC,B.cs(new C.f1g(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c44(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kz("Exposure",n,-1.5,1.5,new C.f0T(o),0,A.j.ad(n,1))
w=o.RG
w=o.kz("Brightness",w,-0.5,0.5,new C.f0U(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kz("Contrast",v,0.4,2,new C.f0V(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kz("Fade",u,0,1,new C.f0W(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kz("Spotlight",t,0,1,new C.f0X(o),0,""+A.j.V(t*100))
s=o.a_
s=o.kz("Darken",s,0,0.85,new C.f0Y(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kz("Vignette",r,0,0.9,new C.f0Z(o),0,""+A.j.V(r*100))
q=o.aI
q=o.kz("Shade behind words",q,0,0.85,new C.f1_(o),0,""+A.j.V(q*100))
p=o.aR
return o.wd(B.x(B.a([n,w,v,u,t,s,r,q,o.kz("Shade top & bottom",p,0,0.85,new C.f10(o),0,""+A.j.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bKJ(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kz("Colour strength",q,0,2.2,new C.f0e(s),1,""+A.j.V(q*100))
w=s.to
w=s.kz("Warmth",w,-1,1,new C.f0f(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kz("Tint",v,-1,1,new C.f0g(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wd(B.x(B.a([q,w,v,s.kz("Shift colours",u,-180,180,new C.f0h(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a6,r,r,s.ow("Negative",D.bQ0,s.y1,new C.f0i(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yx("COLOUR WASH",A.Ph)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azu)
t=B.a([u,v,s.ajP(w,new C.f0j(s),q),A.R],t)
if(s.b7!=null){q=s.b6
t.push(s.wd(s.ajq("Wash strength",q,0,0.9,new C.f0k(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRa(){var w,v,u,t,s,r=this,q=r.y2
q=r.kz("Blur",q,0,24,new C.f0N(r),0,A.o.u(A.j.V(q)))
w=r.bn
w=r.kz("Soft focus",w,0,1,new C.f0O(r),0,""+A.j.V(w*100))
v=r.aH
u=x.p
v=r.wd(B.x(B.a([q,w,r.kz("Film grain",v,0,1,new C.f0P(r),0,""+A.j.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yx("LIGHT LEAK",D.bPJ)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azu,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajP(q,new C.f0Q(r),t),A.R],u)
if(r.bf!=null){q=r.bJ
u.push(r.wd(r.ajq("Leak strength",q,0,1,new C.f0R(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bMP(){var w,v,u,t,s=this,r=s.aP
r=s.kz("Zoom",r,1,3,new C.f0o(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kz("Left / right",w,-1,1,new C.f0p(s),0,""+A.j.V(w*100))
v=s.bG
v=s.kz("Up / down",v,-1,1,new C.f0q(s),0,""+A.j.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.wd(B.x(B.a([r,w,v,s.kz("Turn",u,-180,180,new C.f0r(s),0,""+A.j.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.X,B.bW(A.bH,B.a([s.ow("Turn 90\xb0",H.aqt,!1,new C.f0s(s)),s.ow("Flip sideways",A.CJ,s.c6,new C.f0t(s)),s.ow("Flip upside down",A.CJ,s.cO,new C.f0u(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c7S(){var w=null,v=B.n(22),u=B.L(A.bB,A.r,1)
return B.p(w,B.x(B.a([D.f71,A.X,D.fJi,A.aC,B.aA(w,B.p(A.A,D.f7f,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uX,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1h(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.u6,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c4X(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f19(p),m=x.p,l=B.A(B.a([D.bI4,p.ow("Reset",A.k5,!1,new C.f15(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KD,o,o,o),j=p.yx("SHAPE",A.aqq),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1v(n.$2(t,p.cy),62,u.b,s===t,new C.f16(v,p),62))}}i=B.bW(A.bH,i,A.bt,o,8,8)
v=p.yx("RING",A.pl)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1v(n.$2(p.cx,t),62,r.b,q===t,new C.f17(s,p),62))}u=B.bW(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.af,p.wd(p.kz("Size",s,0.12,0.4,new C.f18(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4t(d){return new B.a5(null,d,new B.fF(0.5625,B.cs(new C.f1s(this)),null),null)},
cDp(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.L(A.bB,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uX:q
t=new B.aP(14,14)
s=D.dm9[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.by(1,A.bc,B.aA(A.c5,B.cV(q,B.x(B.a([r,A.cU,new B.qE(A.e2,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.m,q,A.e,A.O,0,A.p),q,q,A.b6,new B.o(q,q,q,new B.bg(t,t,t,t),q,u,A.n),D.bz4,q,q,q,q,A.hE,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1B(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.A(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bBd,A.md,q,q,q)},
aSq(){var w,v,u=this,t=null,s=u.cDp()
switch(u.as){case 0:w=u.bOS()
break
case 1:w=u.cJf()
break
case 2:w=u.cEb()
break
case 3:w=u.cn9()
break
case 4:w=u.c4X()
break
default:w=u.c7S()
break}v=x.p
return B.bx(A.tL,B.e8(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bCm,t,t,A.ai,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.YZ,!0),A.aq)},
aOv(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdo(),p=B.n(16)
q=B.E(B.aA(r,B.p(r,D.f7q,A.f,r,r,new B.o(A.c.j(0.08),r,B.L(A.aV,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbQJ()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bF.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fds)
else t.push(D.bU7)
t.push(A.ae)
t.push(D.bKv)
return B.p(r,B.A(B.a([q,A.at,B.E(B.aA(r,B.p(r,B.A(t,A.m,r,A.ba,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uX,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b6I,r,r,r,r,G.aln,r,r,r)},
b1t(){var w=null
return new B.D(U.a0t,B.A(B.a([B.aG(w,w,w,w,A.n0,w,w,w,new C.f0S(this),w,w,w,w,w,w),D.fZ7,A.b3,D.c1Y],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.BU,B.bm(!0,B.cs(new C.f28(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhs.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e4()
n.d_(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.S()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.aj()*w
p=n.aj()*v
o=(q&1)===0?t:r
d.au(new B.a2(s,p,s+1.1,p+1.1),o)}},
aD(d){return d.b!==this.b}}
C.rR.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.ml.prototype={}
C.A6.prototype={
ak(){var w=this
return B.H(["at",w.a.ab().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o4.prototype={}
C.wq.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a8W.prototype={}
C.asA.prototype={}
C.a1v.prototype={
S(){return new C.aJ0(new B.au(A.au,$.aw()),B.k6(!0,null,!0,!0,null,null,!1),D.dNK,B.a([],x.s),B.ey([D.Je],x.Q))}}
C.aJ0.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a2()},
a19(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a19=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().CF(90,700,700,A.eN),$async$a19)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a19)
case 8:p=e
if(r.c!=null)r.m(new C.f8w(r,p,q))
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
return B.i($async$a19,v)},
a1c(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1c=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aJB(78,n,1100,1100),$async$a1c)
case 7:q=e
if(J.cr(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fp(),$async$a1c)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.c6(p,"data:"+k+";base64,"+A.cO.gcu().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f8x(r,p))
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
return B.i($async$a1c,v)},
b6s(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fR(A.cG.aM(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bZ,!0,u,!1,u,u)
return w}catch(v){}return D.bxe},
c53(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cyU(C.fNE(w,this.b6s(d),f),g)},
adB(d,e,f,g,h){var w=null,v=new C.f8u(f,e),u=new C.f8v(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.L(p?A.bB:A.b8.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ac,A.f,B.a([B.at(B.X(f?A.zf:A.P5,A.bV,w,w,w,26),w,w,w),D.ewE],x.p),w),w)
else p=this.c53(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aO(!1,r,!0,B.p(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bTP],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mS,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8t(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZC(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.n(8),B.fR(A.cG.aM(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bZ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.L(n?A.bB:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KJ,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PS,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aO(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.ks,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9E(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9E=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fR5(),$async$a9E)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f8c(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f8d(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9E,v)},
afC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afC=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f8f(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f8g(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f8h(r))
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
return B.b(C.fMm(q,r.cx,j,new C.b34(r.z,r.Q,r.as,r.at),new C.f8i(r),i,m,p,k),$async$afC)
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
if(r.c!=null)r.m(new C.f8j(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eP,g).w
g=B.aH(d,A.c_,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aV,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.p(h,D.bX7,A.f,h,h,new B.o(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bg.j(0.5),A.I,24)],v),D.c66,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8K(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.PS,h,h,h,i.ax?h:new C.f8L(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbFE()
v=B.a([new B.ac(0,A.G,A.b8.j(0.45),A.I,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wx:A.hF,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wP,A.a7),h,40,h,h,h,h,h,40),A.cQ,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cQ,h,h,A.aj),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.O,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.n(16),D.b4b),h,h,h,h,h,h,h,h,Y.Ey,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,h,D.aVj,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f8M(i)
s=i.aZC(A.lk,q,r,i.gcnB(),s)
r=i.z
r=B.E(i.adB(new C.f8O(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.an,B.A(B.a([r,A.bn,B.E(i.adB(new C.f8P(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f8Q(i)
s=i.aZC(A.uC,r,p,i.gcnJ(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adB(new C.f8R(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aC,D.fNR,A.aw,D.fQK,A.by,u,A.R,D.fP7,A.aC,v,A.by,B.A(B.a([q,A.at,B.E(B.x(B.a([s,A.an,B.A(B.a([p,A.bn,B.E(i.adB(new C.f8S(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.an,D.fSC],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.L(D.boK,A.r,1)
w=C.ahU(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bL(A.a6,h,h,B.p(h,B.A(B.a([D.bYe,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fwh,h,h,h),B.aO(!1,h,!0,D.eqF,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f8T(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.O,0,h,h),A.f,h,h,new B.o(D.bgL,h,u,v,h,h,A.n),h,h,h,h,D.bAT,h,h,h),h)],t))}o.push(A.by)
o.push(D.fEm)
o.push(A.R)
w=B.a([],t)
for(m=0;m<6;++m){l=D.de0[m]
v=i.ch===l?A.b8:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bB,1,A.r,-1)
u=u?A.u:A.V
w.push(new B.by(1,A.bc,new B.D(A.jE,B.aA(h,B.cV(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b6,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a7),A.eK,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8U(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.by)
o.push(D.fXl)
o.push(A.R)
o.push(B.cs(new C.f8V(i)))
o.push(A.by)
o.push(D.fLU)
o.push(A.R)
w=B.a([i.b9o("auto","Let AI choose",A.e9,A.RY)],t)
for(v=x.O,m=0;m<11;++m){j=D.wT[m]
u=j.d
w.push(i.b9o(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bt,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.L(i.r?A.bg.j(0.5):A.bB,A.r,1)
o.push(B.p(h,B.iP(h,A.bg,h,h,h,new C.f8N(i),D.bTh,D.fWA,h,D.fGJ,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aC,B.d(w,h,h,h,h,h,h,D.aUs,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gcds()
v=B.fr(h,h,A.b8,A.b8.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.n(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fdi:A.HT
o.push(new B.a5(h,54,B.lO(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nT,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.ch(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wk,h,h,A.ai),!0,!1,A.ag,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.aec,h,h,h,h,h,h,h,h),h)},
bSr(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f8k(this,p,d)
if(d===D.DV)return new C.aFy(p,o,q)
w=B.n(16)
v=p?E.wP:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bB,A.r,1)
s=B.X(p?A.ea:C.hVr(d),A.c,q,q,q,20)
r=C.hVs(d)
return B.aA(q,B.cV(q,B.x(B.a([s,A.aw,B.eE(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.m,q,A.ba,A.i,0,A.p),q,q,A.b6,new B.o(u,q,t,w,q,v,A.n),A.h8,q,64,q,q,A.hT,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9o(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bB
r=B.L(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a6,A.a9,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cV(v,B.A(B.a([w,Z.Eu,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,v,v),v,v,A.b6,new B.o(s,v,r,t,v,v,A.n),A.eK,v,v,v,v,P.amG,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8z(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1u.prototype={
S(){return new C.aJ_(new B.au(A.au,$.aw()))}}
C.aJ_.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
afD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afD=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f85(r))
w=1
break}B.eX()
r.m(new C.f86(r))
t=4
q=C.imq(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ima(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f87(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hc_()
f=$.Dg.h(0,k.a)
o=f==null||J.cr(f)?null:J.fq(f)
if(o==null){r.m(new C.f88(r))
w=1
break}n=C.im8(o,r.a.c)
C.im4(r.a.c.a)
$.hbe=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.heV(j)
h=C.heW(r.a.c)
e=C.heX(r.a.c)
w=7
return B.b(C.bEt(k,r.a.c.a,j,h,new C.f89(r),i,e,a0),$async$afD)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f8a(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eP,i).w
i=B.aH(d,A.c_,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aV,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.aqK,A.f,j,j,D.b6n,j,34,j,j,j,j,j,34),A.at,D.bIH],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaE,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.n(16),Aw.adD),j,j,j,j,j,j,j,j,Y.Ey,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,D.aVj,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.da7[q]
o=B.d(p,j,j,j,j,j,j,AC.Vl,j,j,j)
n=A.c.j(0.06)
r.push(B.mZ(j,n,o,j,k.e?j:new C.f8b(k,p),j,j,Q.vM,j))}w=B.a([w,A.aC,u,A.an,t,A.aC,s,A.X,B.bW(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUs,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gcdt()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bg.j(0.5),A.en.j(0.5)],x.O):D.cHU
o=B.a([new B.ac(0,A.G,A.bg.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eqB:D.bXO
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aO(!1,s,!0,B.eI(B.A(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hz,j,j,j)],v),A.m,j,A.ba,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a6,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.ch(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wk,j,j,A.ai),!0,!1,A.ag,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.aec,j,j,j,j,j,j,j,j),j)}}
C.b34.prototype={}
C.aFy.prototype={
S(){return new C.bmd(null,null)}}
C.bmd.prototype={
gazk(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qs,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazk().t()
this.bzq()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazk(),new C.eoY(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dgs[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.r=D.yk.j(0.25+s*0.6).gp(0)
d.N(new B.q(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.q(q-o,r),new B.q(q+o,r+0),p)
d.ah(new B.q(q,r-o),new B.q(q+0,r+o),p)}}},
aD(d){return d.b!==this.b}}
C.at7.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a_S.prototype={
S(){return new C.aD3()}}
C.aD3.prototype={
gajM(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ai6(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAL(){var w=this.e
return w===$?this.e=C.heV(this.a.c).q(0,D.DV):w},
a9r(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9r=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dsb(s))
u=3
r=A.d.fe(D.wT,new C.dsc(s))
q=B.d4(C.heV(s.a.c),x.Q)
l=q
J.hk(l,D.DV)
p=l
if(s.gAL())J.c6(p,D.DV)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAL()?" with Luxury FX":""
i=s.a
h=i.d
i=C.heW(i.c)
g=C.heX(s.a.c)
w=6
return B.b(C.bEt(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9r)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ai6(q,s.gajM())
f=q==null?null:q.b
n=f==null?s.gajM():f
if(!J.z(n,r.a)&&!s.gAL())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dsd(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9r,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.c:A.Q,k=m?A.aS:A.am,j=m?A.Q:A.c,i=B.n(28),h=B.L(m?A.bB:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dsg(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wT[w]
u=o.gajM()
t=o.f?n:new C.dsh(o,v)
f.push(new C.buT(v,u===v.a,t,n))}f=B.kS(1.25,f,3,10,10,n,A.dU,!0)
u=B.n(18)
t=o.gAL()?D.c8U:n
if(o.gAL())s=n
else s=m?A.bp:A.bO
r=B.X(A.e9,o.gAL()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAL()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAL()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAL()
f=B.a([f,A.aC,B.p(n,B.A(B.a([r,A.at,q,B.b8J(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dsi(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,O.alp,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fwB,n,n,n)],g))
f=B.ch(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GO,n,n,A.ai)
u=o.f?n:o.gbED()
t=B.bn(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.n(16),A.a1),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bE2,e,n),new B.dn(1,A.co,f,n),new B.D(A.GN,new B.a5(1/0,50,B.bH(B.eI(B.at(o.f?A.tt:D.fOk,n,n,n),n,new B.o(n,n,n,s,n,D.c7s,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.O,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uq,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.buT.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bL(A.lx,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bL(A.ly,w,w,B.d(v.b,w,w,w,w,w,w,D.fwy,w,w,w),w)],x.p)
if(q)v.push(D.b1n)
return B.aA(w,B.cV(w,new B.an(A.a0,w,A.ac,A.t,v,w),w,w,A.b6,new B.o(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eK,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eoV.prototype={
aH7(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xb(d,e){return this.aH7(0,e,null)}}
C.aND.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b30.prototype={
B(d){var w,v,u=null,t=C.hdK(this.c)
if(t==null)w=D.bvH
else{w=B.aH(d,u,x.w).w.cOw(D.bAo,D.fcs)
v=this.d
w=B.q4(new B.dx(!v,B.apg(!1,t,!1,v,!1,390),u),w)}return B.eE(A.A,new B.a5(416,870,new C.bnO(w,u),u),A.f,A.dC)}}
C.bnO.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dtb[w]
u=new B.aP(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asH,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dux[w]
u=new B.aP(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asH,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.o(t,t,t,B.n(64),D.d_3,D.c5O,A.n),A.bi),0,0,0))
s.push(B.bR(3,B.c3(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bi),3,3,3))
s.push(B.bR(13,B.bx(B.n(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ap(t,B.at(B.p(D.b1y,B.p(t,t,A.f,t,t,D.b6G,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dx(!0,B.bx(B.n(51),D.bxk,A.aq),t),13,13,13))
s.push(B.ap(22,new B.dx(!0,B.at(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ac,A.f,s,t)}}
C.ls.prototype={
pV(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bq,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bj,j,2,"Your Presentation Title",0,0,"",D.n4,D.cX,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bq,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bj,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dk,D.cX,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rS(i,l,0,0,B.a([f,w,C.er(A.bk,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bq,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fH,t.l(),3,"",0,0,"",D.cq,D.fg,0.3,0.35,0.72)],s),C.cD(),D.n3,"","","Welcome",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,34,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Agenda",0,0,"",D.cq,D.cX,0.84,0.08,0.08)
w=C.cD()
w=C.rS(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,22,A.bq,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bj,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vd,D.cX,0.8,0.1,0.26)],s),C.cD(),D.n3,"","","Agenda",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,32,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Main Idea",0,0,"",D.cq,D.cX,0.84,0.08,0.08)
f=C.cD()
f=C.rS(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,21,A.bq,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bj,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cq,D.cX,0.8,0.1,0.26)],s),C.cD(),D.n3,"","","Key Point 1",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,30,A.bq,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bj,j,2,"Compare & Contrast",0,0,"",D.cq,D.cX,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bq,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bj,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cq,D.cX,0.4,0.08,0.24)
q=C.cD()
q=C.rS(i,l,0,0,B.a([u,r,C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bq,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bj,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cq,D.cX,0.4,0.52,0.24)],s),C.cD(),D.n3,"","","Key Point 2",D.dk)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bq,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bj,j,2,h,0,0,"",D.dk,D.cX,0.8,0.1,0.32)
e=C.cD()
p=C.Ch(l,l,l,l,D.DR,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rS(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bq,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bj,j,2,"Questions?",0,0,"",D.cq,D.cX,0.7,0.15,0.58)],s),C.cD(),D.n3,"","",h,D.dk)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fl.prototype={
ai(d){return this.e.$1(d)}}
C.ev.prototype={}
C.ja.prototype={}
C.Fc.prototype={
gaN6(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahU(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4A(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fc(v,u,t,d==null?w.d:d)},
Ga(d){return this.a4A(null,d,null,null)},
aFM(d){return this.a4A(null,null,null,d)},
cOu(d,e){return this.a4A(d,e,null,null)},
beJ(d){return this.a4A(d,null,null,null)},
beP(d){return this.a4A(null,null,d,null)}}
C.Of.prototype={
S(){return new C.blz(new B.ez(0,$.aw()),null,null)}}
C.blz.prototype={
Y(){var w,v=this
v.a3()
w=v.pZ(new C.e2w(v))
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
this.byU()},
B(d){var w=C.ahU(this.a.c.a)
if(w==null)w=A.d.gH(D.Ic)
return B.cs(new C.e2v(this,w,C.hue(this.a.c.d)))}}
C.btp.prototype={
B(d){return B.o9(A.Xg,this.e,new C.f7i(this,A.j.E(this.d*0.35,1.6)-0.3))}}
C.bgx.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aV4(d,e,v)
break
case"confetti":w.bLc(d,e,v)
break
case"crown":w.bMQ(d,e,v)
break
case"aurora":w.bFI(d,e,v)
break
case"champagne":w.bJ5(d,e,v)
break
case"diamonds":w.bP0(d,e,v)
break
case"starburst":w.cB1(d,e,v)
break
case"balloons":w.bFW(d,e,v)
break
case"galaxy":w.bUj(d,e,v)
break
case"redcarpet":w.crV(d,e,v)
break
case"coins":w.bKB(d,e,v)
break
case"lanterns":w.c3z(d,e,v)
break
case"hearts":w.c14(d,e,v)
break
case"petals":w.cn0(d,e,v)
break
case"butterflies":w.bI3(d,e,v)
break
case"neon":w.c7C(d,e,v)
break
case"disco":w.bPb(d,e,v)
break
case"sunrise":w.cCH(d,e,v)
break
case"pearls":w.cm3(d,e,v)
break
case"snow":w.cAJ(d,e,v)
break
case"laurel":w.c3F(d,e,v)
break
case"ribbons":w.cur(d,e,v)
break
case"kente":w.c3n(d,e,v)
break
case"trophy":w.cGq(d,e,v)
break
case"shooting":w.cyt(d,e,v)
break
case"bokeh":w.bGh(d,e,v)
break
case"orbits":w.cjG(d,e,v)
break
case"flowers":w.bTx(d,e,v)
break
case"music":w.c7k(d,e,v)
break
case"mandala":w.c5K(d,e,v)
break
case"sparklers":w.cAQ(d,e,v)
break
case"city":w.bJS(d,e,v)
break}},
t7(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.K()
v.r=g.j(A.j.F(h,0,1)).gp(0)
v.a=A.p4
u=new B.aF(w.r,A.ah,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aY(w,s))
u.D(new B.c4(w,t,w+f,t))
u.D(new B.c4(w,t,w,t+f))
u.D(new B.c4(w,t,w-f,t))
u.D(new B.c4(w,t,w,s))
u.D(new B.bt())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t7(d,new B.q(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aV4(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.ay],w),B.a([A.ip,A.bF],w),B.a([A.eC,A.aJ],w),B.a([A.c,A.aB],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.E(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.E(i,4))]
if(j<0.22){d=B.kD(new B.q(h,b8),new B.q(g,f),A.cx.aE(0,j/0.22))
d.toString
$.S()
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.sar(new B.a9(A.a6,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aG(0,B.rU(new B.q(h,b8),d)))
a0.c=o
a0.d=A.bA
a1=B.kD(new B.q(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ao(A.P,A.N,A.T,A.U,A.S)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cx.aE(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ao(A.P,A.N,A.T,A.U,A.S)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hm(A.G,p)
c0.N(new B.q(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.q(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ao(A.P,A.N,A.T,A.U,A.S)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bA
b6.a=A.p4
c0.ah(new B.q(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t7(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLc(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.E(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.K()
d.sar(new B.a9(A.aA,A.aF,A.x,D.dnq,B.a([A.j.F(h-0.15,0,1),A.j.F(h,0,1),A.j.F(h+0.15,0,1)],x.x),null).aG(0,new B.a2(0,0,g,f)))
a0.au(new B.a2(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.E(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.Rp[A.o.F(A.j.bh(C.cY(u,7)*5),0,4)]
J.bq(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.P,A.N,A.T,A.U,A.S)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aF(e.r,A.ah,null,null,t)
e=-q*2
t.push(new B.aY(e,0))
m.a8()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ai(r)
m.a8()}e=$.S()
t=new B.ao(A.P,A.N,A.T,A.U,A.S)
t.r=B.b0(n.r).gp(0)
t.b=A.aa
t.c=q*0.35
a0.af(m,t)}else a0.au(B.bJ(A.I,q*1.8*A.j.F(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bMQ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.q(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aF(p.r,A.ah,a4,a4,o)
o.push(new B.aY(a5,a6))
n.a8()
p=q-0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=q+0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.biR],v),a4,a4).aG(0,B.bX(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.S().r,A.ah,a4,a4,B.a([],s))
v=a6+k
j.D(new B.aY(a5,v))
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
j.D(new B.bt())
i=A.j.F(b0/1.8,0,1)
t=i>=1
if(t){o=B.K()
o.sar(new B.a9(A.b1,A.b7,A.x,D.dm3,a4,a4).aG(0,new B.a2(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eGW,D.eA5,D.eQB],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.r=d.gp(d)
a8.N(new B.q(e,o),m,a0)
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.r=A.ad.gp(0)
a8.N(new B.q(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ao(A.P,A.N,A.T,A.U,A.S)
h.r=A.i4.gp(0)
a8.N(new B.q(a5+l*a1,a6+m),o,h)}}for(v=B.xE(j),u=B.a([],x.X),p=new B.rr(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jE(y.M));--h
p.ik()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ao(A.P,A.N,A.T,A.U,A.S)
a2.b=A.aa
a2.c=m
a2.e=A.dS
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BK(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.E(b0*0.5,1)
this.t7(a8,new B.q(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bFI(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f2g,D.f1Z,D.f1S,D.f3f]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aF(o.r,A.ah,null,null,j)
for(o=a4*m,h=a8*l,g=h*1.4,f=0;f<=s;f+=r){e=f/a3
d=o+Math.sin(e*4+h+k)*a5*0.07+Math.sin(e*9-g+k)*a5*0.025
if(f===0){e=new B.aY(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ai(a0)
i.a8()}else{e=new B.aq(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.ai(a0)
i.a8()}}$.S()
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p4
o.y=new B.hm(A.G,u)
a6.af(i,o)
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p4
o.y=new B.hm(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.E(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.S()
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.r=A.w6.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p4
a6.N(new B.q(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJ5(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.K()
e.sar(new B.c_(A.A,0.5,A.x,n,0,B.a([A.i1.j(0.25+0.1*j),D.Za],x.O),n,n).aG(0,B.bX(new B.q(i,h),g)))
d.N(new B.q(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aF(g.r,A.ah,n,n,f)
g=v?0:m
e=l*(0.05+w*0.07)
f.push(new B.aY(g,e))
u.a8()
for(t=1;t<=20;++t){g=t/20*m
s=v?g*0.45:m-g*0.45
g=new B.aq(s,e+t*k*0.012+Math.sin(t*0.8+i+w)*k*0.02)
f.push(g)
r=u.f
if(r!=null)g.ai(r)
u.a8()}g=$.S()
f=new B.ao(A.P,A.N,A.T,A.U,A.S)
f.b=A.aa
f.c=j
f.r=D.Rp[A.o.E(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.E(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t7(d,new B.q(s,p),o*2.4,A.bN,A.j.F(p/i,0,1))
continue}$.S()
g=new B.ao(A.P,A.N,A.T,A.U,A.S)
g.b=A.aa
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u4.j(0.75).gp(0)
d.N(new B.q(s,p),o,g)
g=o*0.35
e=new B.ao(A.P,A.N,A.T,A.U,A.S)
e.r=A.c.j(0.8).gp(0)
d.N(new B.q(s-g,p-g),f,e)}},
bP0(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lb,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.j.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.bq(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aF(h.r,A.ah,a6,a6,g)
h=-o
e=h*0.5
g.push(new B.aY(e,i))
f.a8()
h*=0.28
j*=0.6
d=new B.aq(h,j)
g.push(d)
a0=f.f
if(a0!=null)d.ai(a0)
f.a8()
d=o*0.28
a0=new B.aq(d,j)
g.push(a0)
a1=f.f
if(a1!=null)a0.ai(a1)
f.a8()
a0=o*0.5
a1=new B.aq(a0,i)
g.push(a1)
a2=f.f
if(a2!=null)a1.ai(a2)
f.a8()
a1=k*0.6
a2=new B.aq(0,a1)
g.push(a2)
a3=f.f
if(a3!=null)a2.ai(a3)
f.a8()
a2=new B.bt()
g.push(a2)
g=f.f
if(g!=null)a2.ai(g)
f.a8()
g=new B.ao(A.P,A.N,A.T,A.U,A.S)
g.sar(new B.a9(A.aA,A.aF,A.x,D.dhx,a6,a6).aG(0,B.bJ(A.I,k*1.2,o)))
b0.af(f,g)
a4=new B.ao(A.P,A.N,A.T,A.U,A.S)
a4.b=A.aa
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.q(e,i),new B.q(a0,i),a4)
b0.ah(new B.q(h,j),new B.q(0,a1),a4)
b0.ah(new B.q(d,j),new B.q(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t7(b0,new B.q(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cB1(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.q(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aF(p.r,A.ah,null,null,o)
o.push(new B.aY(h,g))
n.a8()
p=s-q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=s+q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.E(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.P,A.N,A.T,A.U,A.S)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.E(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bwG.aE(0,k)*(0.5+0.5*C.cY(t,u)))
this.t7(d,new B.q(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Rp[A.o.F(A.j.bh(C.cY(t,4)*5),0,4)],r)}},
bFW(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.E(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.azW[A.o.E(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aF(i.r,A.ah,a1,a1,h)
i=l+o*1.15
h.push(new B.aY(k,i))
g.a8()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ai(d)
g.a8()}h=$.S()
e=new B.ao(A.P,A.N,A.T,A.U,A.S)
e.b=A.aa
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bJ(new B.q(k,l),o*2.3,m)
m=new B.ao(A.P,A.N,A.T,A.U,A.S)
e=B.ar(j,A.w,0.35)
e.toString
m.sar(new B.c_(D.b1B,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.azM,a1).aG(0,a0))
a5.bY(a0,m)
m=B.a([],t)
h=new B.aF(h.r,A.ah,a1,a1,m)
e=o*0.12
m.push(new B.aY(k-e,i))
h.a8()
i=new B.aq(k+e,i)
m.push(i)
e=h.f
if(e!=null)i.ai(e)
h.a8()
i=new B.aq(k,l+o)
m.push(i)
e=h.f
if(e!=null)i.ai(e)
h.a8()
i=new B.bt()
m.push(i)
m=h.f
if(m!=null)i.ai(m)
h.a8()
m=new B.ao(A.P,A.N,A.T,A.U,A.S)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.E(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.bq(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bJ(A.I,t,u)
$.S()
q=new B.ao(A.P,A.N,A.T,A.U,A.S)
q.r=D.azW[A.o.E(p,6)].j(0.85).gp(0)
a5.au(s,q)
a3.restore()}},
bUj(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.q(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f2o,D.f24,D.f2a],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.q(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aG(0,B.bX(m,r)))
b0.N(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.E(k,3)
i=C.cY(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cY(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ar(A.bN,A.eJ,i)
f.toString
e=C.cY(k,3)
$.S()
d=new B.ao(A.P,A.N,A.T,A.U,A.S)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p4
b0.N(new B.q(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.K()
a8.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.u4.j(0.55),D.aiS],t),a3,a3).aG(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.E(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
a2=new B.q(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.kD(a2,a2.a6(0,new B.q(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kD(a2,a4,0.6)
a5.toString
a7=B.K()
a7.sar(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aG(0,B.rU(a2,a4)))
a7.c=a6*0.005
a7.d=A.bA
b0.ah(a5,a4,a7)}},
crV(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aF(p.r,A.ah,b4,b4,o)
o.push(new B.aY(r,v))
n.a8()
p=q-0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=q+0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.ai(m)
n.a8()
p=new B.bt()
o.push(p)
o=n.f
if(o!=null)p.ai(o)
n.a8()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.sar(new B.c_(A.A,0.5,A.x,b4,0,B.a([A.u4.j(0.28),D.aiS],w),b4,b4).aG(0,B.bX(new B.q(r,v),u)))
p.a=A.p4
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.eo:A.ep)
a8=$.S()
a9=B.a([],t)
n=new B.aF(a8.r,A.ah,b4,b4,a9)
a9.push(new B.aY(a4?0:b5,0))
n.a8()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=a4?i:a1
a8=new B.c4(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ai(b0)
n.a8()
a8=new B.bt()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ai(a9)
n.a8()
a8=new B.ao(A.P,A.N,A.T,A.U,A.S)
a8.sar(new B.a9(A.a6,A.a9,A.x,a6,b4,b4).aG(0,new B.a2(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ao(A.P,A.N,A.T,A.U,A.S)
b0.r=A.i1.gp(0)
b0.c=o
b0.d=A.bA
b8.ah(new B.q(a8,m),new B.q(a9,p),b0)}b1=new B.aF($.S().r,A.ah,b4,b4,B.a([],t))
w=b6*0.78
b1.D(new B.aY(b5*0.42,w))
b1.D(new B.aq(b5*0.58,w))
b1.D(new B.aq(b5*0.8,b6))
b1.D(new B.aq(b5*0.2,b6))
b1.D(new B.bt())
v=B.K()
v.sar(D.c7l.aG(0,new B.a2(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.E(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t7(b8,new B.q(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bKB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.j.E(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bJ(new B.q(p,q),r,r*A.j.F(n,0.12,1))
$.S()
r=new B.ao(A.P,A.N,A.T,A.U,A.S)
r.sar(new B.a9(A.aA,A.aF,A.x,o>0?D.dy2:D.cNM,null,null).aG(0,m))
d.bY(m,r)
r=-(t*0.22)
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.b=A.aa
l.c=Math.max(0.6,t*0.08)
l.r=D.btk.gp(0)
d.bY(new B.a2(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t7(d,new B.q(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c3z(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.j.E(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ao(A.P,A.N,A.T,A.U,A.S)
i.sar(new B.c_(A.A,0.5,A.x,e,0,B.a([As.yh.j(0.45*l),D.ahq],v),e,e).aG(0,B.bX(new B.q(m,n),k)))
a2.N(new B.q(m,n),k,i)
i=B.a([],r)
h=new B.aF(j.r,A.ah,e,e,i)
j=p*0.5
k=p*0.7
g=n-k
i.push(new B.aY(m-j,g))
h.a8()
j=new B.aq(m+j,g)
i.push(j)
g=h.f
if(g!=null)j.ai(g)
h.a8()
j=p*0.38
k=n+k
g=new B.aq(m+j,k)
i.push(g)
f=h.f
if(f!=null)g.ai(f)
h.a8()
k=new B.aq(m-j,k)
i.push(k)
j=h.f
if(j!=null)k.ai(j)
h.a8()
k=new B.bt()
i.push(k)
j=h.f
if(j!=null)k.ai(j)
h.a8()
k=new B.ao(A.P,A.N,A.T,A.U,A.S)
j=B.ar(D.bj5,A.c,0.2*l)
j.toString
k.sar(new B.a9(A.b1,A.b7,A.x,B.a([D.bol,j],v),e,e).aG(0,B.bJ(new B.q(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ao(A.P,A.N,A.T,A.U,A.S)
k.r=A.c.j(l).gp(0)
a2.N(new B.q(m,n+p*0.55),p*0.12,k)}},
c14(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.j.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bq(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aF(m.r,A.ah,d,d,l)
m=o*0.9
l.push(new B.aY(0,m))
i.a8()
k=-o
h=k*0.2
g=k*1.6
k=new B.kP(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ai(f)
i.a8()
m=new B.kP(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ai(k)
i.a8()
m=new B.bt()
l.push(m)
l=i.f
if(l!=null)m.ai(l)
i.a8()
e=D.d7R[A.o.E(p,5)]
m=new B.ao(A.P,A.N,A.T,A.U,A.S)
l=B.ar(e,A.w,0.25)
l.toString
m.sar(new B.c_(A.tI,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a4K,d).aG(0,B.bX(A.I,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.ip,130)},
cn0(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.j.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bq(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ah,h,h,m)
n=-p
m.push(new B.aY(0,n))
k.a8()
l=n*0.2
j=new B.c4(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ai(i)
k.a8()
n=new B.c4(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ai(l)
k.a8()
n=new B.bt()
m.push(n)
m=k.f
if(m!=null)n.ai(m)
k.a8()
n=new B.ao(A.P,A.N,A.T,A.U,A.S)
m=(q&1)===0?D.cHT:D.diV
n.sar(new B.a9(A.a6,A.a9,A.x,m,h,h).aG(0,B.bX(A.I,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bI3(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bq(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.bq(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aF(a3.r,A.ah,a7,a7,a4)
a4.push(new B.aY(0,0))
a5.a8()
a3=new B.kP(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ai(a6)
a5.a8()
a3=new B.kP(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ai(a6)
a5.a8()
a3=new B.bt()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ai(a4)
a5.a8()
a3=new B.ao(A.P,A.N,A.T,A.U,A.S)
a3.sar(new B.a9(A.a6,A.a9,A.x,h?D.diE:D.dlx,a7,a7).aG(0,new B.a2(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ao(A.P,A.N,A.T,A.U,A.S)
a3.b=A.aa
a3.c=Math.max(0.6,i)
a3.r=D.BN.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.r=D.bsz.gp(0)
p.c=q*0.1
p.d=A.bA
b1.ah(new B.q(0,m*0.3),new B.q(0,q*0.4),p)
v.restore()}},
c7C(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.q(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.E(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ao(A.P,A.N,A.T,A.U,A.S)
r.b=A.aa
r.c=v
r.r=D.aB6[u].j((1-t)*0.9).gp(0)
r.y=new B.hm(A.G,v)
q=s*0.3
d.ap(B.br(B.bJ(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aB6[A.o.E(o,4)]
l=o*p+j
k=i-n
k=B.br(new B.a2(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=m.j(0.85).gp(0)
l.y=new B.hm(A.adr,q)
d.ap(k,l)}},
bPb(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.q(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o2,A.dw][A.o.E(q,4)]
k=C.cY(q,3)
$.S()
j=new B.ao(A.P,A.N,A.T,A.U,A.S)
j.r=l.j(0.75).gp(0)
j.a=A.p4
j.y=new B.hm(A.G,r)
a2.N(new B.q(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.K()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.q(d,0),new B.q(d,w-u),t)
t=B.K()
t.r=A.dj.gp(0)
a2.N(v,u,t)
t=a2.c
J.bq(t.save())
a0=new B.aF(a0.r,A.ah,null,null,B.a([],x.v))
a0.D(new B.jN(B.bX(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.E(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ao(A.P,A.N,A.T,A.U,A.S)
e.r=B.ar(A.bo,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.au(new B.a2(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t7(a2,v.a6(0,new B.q(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cCH(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cx.aE(0,A.j.F(a1/3,0,1))),e=new B.q(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aF(s.r,A.ah,k,k,r)
r.push(new B.aY(g,f))
q.a8()
s=t-0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=t+0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ai(r)
q.a8()
s=new B.ao(A.P,A.N,A.T,A.U,A.S)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.K()
f.sar(new B.c_(A.A,0.5,A.x,k,0,B.a([D.beo.j(0.6),D.ahq],x.O),k,k).aG(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.K()
g.sar(D.exu.aG(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.E(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=A.c.j(0.18).gp(0)
d.bY(B.bJ(new B.q(n,m),s,v),l)
d.bY(B.bJ(new B.q(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i4,180)},
cm3(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aF(s.r,A.ah,h,h,r)
r.push(new B.aY(0,f))
q.a8()
for(s=f*(0.72+t*0.07),p=a1*(1+t*0.3),o=0;o<=w;o+=v){n=new B.aq(o,s+Math.sin(o/g*6+p+t)*e*0.03)
r.push(n)
m=q.f
if(m!=null)n.ai(m)
q.a8()}s=new B.aq(g,f)
r.push(s)
p=q.f
if(p!=null)s.ai(p)
q.a8()
s=new B.bt()
r.push(s)
r=q.f
if(r!=null)s.ai(r)
q.a8()
$.S()
s=new B.ao(A.P,A.N,A.T,A.U,A.S)
s.r=B.ar(A.cy,A.jf,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.j.E(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ao(A.P,A.N,A.T,A.U,A.S)
u.sar(new B.c_(Ap.xF,0.5,A.x,h,0,D.dp8,h,h).aG(0,B.bX(new B.q(o,i),j)))
d.N(new B.q(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cAJ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.j.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bA
J.bq(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.I,new B.q(0,o),l)
d.ah(new B.q(0,n),new B.q(m,k),l)
d.ah(new B.q(0,n),new B.q(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eC,200)},
c3F(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.q(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.F(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cK(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.bq(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bJ(new B.q(o,0),p,q)
$.S()
e=new B.ao(A.P,A.N,A.T,A.U,A.S)
e.sar(D.c78.aG(0,new B.a2(0,n,m,l)))
a3.bY(f,e)
r.restore()}}$.S()
a0=B.K()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.bjo.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t7(a3,w.a6(0,new B.q(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cur(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i1,A.i4],a4),B.a([A.pb,A.ip],a4),B.a([A.aE,A.eJ],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bO<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aF(m.r,A.ah,null,null,l)
j=B.a([],o)
for(m=n*0.2,i=a2*(0.3+m),m=a8*(0.8+m),h=0;h<=40;++h){g=h/40
f=g*a1
e=i+Math.sin(g*5+m+n)*a3*0.1
d=a3*(0.03+0.03*(0.5+0.5*Math.sin(g*7+q+n)))
g=e-d
if(h===0){g=new B.aY(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ai(a0)
k.a8()}else{g=new B.aq(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.ai(a0)
k.a8()}j.push(new B.q(f,e+d))}for(m=new B.ds(j,t),m=new B.bO(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ai(g)
k.a8()}m=new B.bt()
l.push(m)
l=k.f
if(l!=null)m.ai(l)
k.a8()
$.S()
m=new B.ao(A.P,A.N,A.T,A.U,A.S)
l=a5[n]
i=l[0]
m.sar(new B.a9(A.a6,A.a9,A.x,B.a([i,l[1],i],a4),At.zK,new B.mF(w)).aG(0,new B.a2(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3n(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.E(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.E(A.j.bh(g/s),5)
a1=g+s
$.S()
a2=new B.ao(A.P,A.N,A.T,A.U,A.S)
a3=Math.abs(a0)
a2.r=D.a4O[a3].gp(0)
b0.au(new B.a2(g,i,a1,f),a2)
a2=g+r
a4=new B.ao(A.P,A.N,A.T,A.U,A.S)
a4.r=D.a4O[A.o.E(a3+2,5)].gp(0)
b0.au(new B.a2(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t7(b0,new B.q(u*a6,l-a7),a8*(0.01+0.012*t),D.a4O[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGq(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.q(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.P,A.N,A.T,A.U,A.S)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.q(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.S().r,A.ah,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.D(new B.aY(u,a2))
v=a1+v
m.D(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.D(new B.c4(v,r,p,l))
v=a2+n*0.95
m.D(new B.aq(p,v))
p=o*0.3
k=a2+n
m.D(new B.aq(a1+p,k))
m.D(new B.aq(a1-p,k))
q=a1-q
m.D(new B.aq(q,v))
m.D(new B.aq(q,l))
m.D(new B.c4(u,r,u,a2))
m.D(new B.bt())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bJ(new B.q(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.P,A.N,A.T,A.U,A.S)
d.b=A.aa
d.c=p
d.r=A.aB.gp(0)
a4.cN(f,e,3.141592653589793,!1,d)}a1=B.K()
a1.sar(new B.a9(A.a6,A.a9,A.x,D.drS,A.aA3,null).aG(0,new B.a2(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.E(a6*0.6,1.4)
if(a0<1)this.t7(a4,new B.q(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLd(a4,a5,a6,60)},
bLd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.E(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bq(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bJ(A.I,r*A.j.F(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.P,A.N,A.T,A.U,A.S)
n.r=D.Rp[A.o.E(p,5)].gp(0)
d.au(o,n)
u.restore()}},
cyt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.j.E(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.j.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.q(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.q(m+t*k,v+u*k)
$.S()
k=new B.ao(A.P,A.N,A.T,A.U,A.S)
k.sar(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.bN],s),null,null).aG(0,B.rU(j,l)))
k.c=r
k.d=A.bA
d.ah(j,l,k)
this.t7(d,l,q,A.c,1-n)}},
bGh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.j.E(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.E(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ao(A.P,A.N,A.T,A.U,A.S)
m=A.o.E(s,5)
n.r=D.aCS[m].j(o).gp(0)
n.a=A.p4
n.y=new B.hm(A.G,r*0.12)
d.N(new B.q(q,p),r,n)
n=new B.ao(A.P,A.N,A.T,A.U,A.S)
n.b=A.aa
n.c=Math.max(0.6,r*0.05)
n.r=D.aCS[m].j(o*1.4).gp(0)
d.N(new B.q(q,p),r,n)}},
cjG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.bq(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bJ(A.I,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.b=A.aa
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bY(p,o)
n=f*(0.9+q*0.25)+q
m=new B.q(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.r=A.i4.gp(0)
d.N(m,t,o)
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.r=A.i1.j(0.4).gp(0)
o.y=new B.hm(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bTx(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.q(m*a1,p)
break
case 1:l=new B.q(m*a1,q)
break
case 2:l=new B.q(r,m*a2)
break
default:l=new B.q(s,m*a2)
break}k=A.j.E(a6+C.cY(o,2)*4,4)/4
j=A.ew.aE(0,A.j.F(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dfy[A.o.E(o,5)]
J.bq(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bJ(new B.q(0,l),i,j)
$.S()
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.sar(new B.a9(A.b1,A.b7,A.x,B.a([A.c,g],u),null,null).aG(0,B.bJ(new B.q(0,l),f,h)))
a4.bY(d,a0)}$.S()
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=A.i1.gp(0)
a4.N(A.I,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i4,280)},
c7k(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.E(t+n/4,1)
l=B.bX(new B.q(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.P,A.N,A.T,A.U,A.S)
j.b=A.aa
j.c=u
j.r=D.az6[n].j((1-m)*0.8).gp(0)
a4.cN(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.E(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.az6[A.o.E(h,4)]
$.S()
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.r=d.gp(0)
J.bq(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bY(B.bJ(A.I,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.q(s,g),new B.q(s,p),o)
if((h&1)===0){o=new B.ao(A.P,A.N,A.T,A.U,A.S)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.q(s,p),new B.q(f+e*1.6,g-e*2),o)}}},
c5K(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.q(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bq(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aF(d.r,A.ah,a3,a3,a0)
a0.push(new B.aY(0,i))
a1.a8()
d=new B.c4(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ai(a2)
a1.a8()
d=new B.c4(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ai(a0)
a1.a8()
d=new B.ao(A.P,A.N,A.T,A.U,A.S)
d.b=A.aa
d.c=u
d.r=B.ar(A.bN,A.o2,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ao(A.P,A.N,A.T,A.U,A.S)
d.r=A.i4.j(0.8).gp(0)
a7.N(new B.q(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.K()
a5.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.i1.j(0.25),D.Za],x.O),a3,a3).aG(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cAQ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.q(j,i)
$.S()
g=new B.ao(A.P,A.N,A.T,A.U,A.S)
g.r=A.bo.gp(0)
g.c=q
g.d=A.bA
b1.ah(new B.q(l,a9),h,g)
g=new B.ao(A.P,A.N,A.T,A.U,A.S)
g.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i4,A.i1.j(0.6),D.Za],o),null,null).aG(0,B.bX(h,p)))
b1.N(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.j.E(b3+C.cY(f,2)*e,e)/e
a0=A.j.bh((b3+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cY(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.q(a4,a5)
a7=new B.ao(A.P,A.N,A.T,A.U,A.S)
a7.r=B.ar(A.i4,A.ay,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bA
a7.a=A.p4
b1.ah(new B.q(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.q(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.q(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bJS(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aV4(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a2(p,l,p+n,l+m)
$.S()
j=new B.ao(A.P,A.N,A.T,A.U,A.S)
j.sar(D.c85.aG(0,k))
a7.au(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ao(A.P,A.N,A.T,A.U,A.S)
a4.r=A.bN.j(0.85).gp(0)
a7.au(new B.a2(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.b0V.prototype={
B(d){var w,v=null,u=new C.ceD(),t=new C.ceF(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.arQ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ceE(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ic[w]))
return B.bW(A.bH,s,A.bt,v,12,10)}}
C.a_p.prototype={
S(){return new C.aBq()}}
C.aBq.prototype={
gwe(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1y(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.aw())}return v},
gazl(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaN6()
v=$.aw()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.ba(w,A.b5,A.aP),v)}return t},
t(){var w=this.gb1y(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gazl()
w.T$=v
w.P$=0
this.a2()},
a_Z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_Z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().CF(90,700,700,A.eN),$async$a_Z)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fp(),$async$a_Z)
case 8:p=e
o=q.b.toLowerCase()
n=J.aiT(o,".png")?"image/png":"image/jpeg"
r.m(new C.dhp(r,n,p))
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
return B.i($async$a_Z,v)},
b1x(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b6(4,B.n(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahU(p.gwe().a)
if(n==null)n=A.d.gH(D.Ic)
w=p.gwe()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ac,A.t,B.a([B.bR(0,new C.Of(p.gwe(),!1,!0,new B.bP(w.a+v,x.W)),0,0,0),B.ap(o,B.Ix(A.n0,new C.dhu(d),B.nV(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.Ix(A.aqI,new C.dhv(p),B.nV(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVi,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gb1y(0),o,o,o,o,o,2,p.b1x("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhw(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.fW,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i1.j(0.6),A.r,1)
if(p.gwe().d.length===0)q=D.bVv
else{q=C.hue(p.gwe().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fR(q,A.A,o,o,A.cj,A.bZ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdu(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwe().d.length!==0)r.push(B.aG(o,o,o,o,H.PS,o,o,o,new C.dhx(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.X,B.A(r,A.m,o,A.e,A.i,0,o,o),A.R,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gazl(),o,o,o,o,o,2,p.b1x("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhy(p),o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,A.dh,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bUp,D.fYg,new C.dhz(p,d),B.bn(A.aB,o,o,o,A.w,o,A.cn,o,new B.b9(B.n(14),A.a1),o,o,o))],u),A.al,o,A.e,A.O,0,A.p),A.f,o,o,D.b6S,o,o,o,o,A.GK,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aN7.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a_K.prototype={
S(){return new C.bi3(new B.au(A.au,$.aw()))}}
C.bi3.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.R(d).ax.a===A.J,m=n?A.c:A.Q,l=n?A.aS:A.am,k=B.aH(d,A.c_,x.w).w,j=n?A.Q:A.c,i=B.n(28),h=B.L(n?A.bB:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.dod(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cZv[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aO(!1,new B.bg(r,r,r,r),!0,B.p(A.A,B.d(s,o,o,o,o,o,o,A.pQ,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bg(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doe(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hE,u,o),new B.CS(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aC)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.R)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aQ
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b6(4,B.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ab,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bH(A.aWg,o,new C.dof(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.R)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dn(1,A.co,B.cl(e,o,o,o,o,o,A.ai,!0),o)],g),A.E,o,A.e,A.O,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uq,A.a09,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bho.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e4()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.K()
u.y=A.H2
t=B.K()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.aj()
m=a1.aj()
l=a1.aj()
k=0.8+a1.aj()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.j.E(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.q(l,h)
if(a1.aj()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.F(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ao(A.P,A.N,A.T,A.U,A.S)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.q(l-d,h),new B.q(l+d,h+0),a0)
a2.ah(new B.q(l,h-d),new B.q(l+0,h+d),a0)}}},
aD(d){return d.b!==this.b}}
C.bh5.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.br(new B.a2(0,0,0+a3.a,0+a3.b),A.jK),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.K()
a1.b=A.aa
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mU
a2.ap(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ah,g,g,B.a([],a1))
a0.D(new B.iW(f))
v=new B.TJ(new B.rr(B.xE(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.ik()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.j.E(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ao(A.P,A.N,A.T,A.U,A.S)
k.b=A.aa
k.d=A.bA
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.E(o-q*(1-n/10),t)
i=A.j.E(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.ik()
h=u[d].Hq(o).a
$.S()
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=w.gp(0)
l.y=Ad.op
a2.N(h,5,l)
l=new B.ao(A.P,A.N,A.T,A.U,A.S)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aD(d){return d.b!==this.b}}
C.bq9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e4()
f.d_(this.c)
w=e.a*(0.2+f.aj()*0.6)
v=f.h8()?-0.1:1.1
v=e.b*v
u=new B.q(w,v)
t=e.gao0()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aF(k.r,A.ah,g,g,j)
j.push(new B.aY(w,v))
i.a8()
k=m-l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=m+l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.ai(h)
i.a8()
k=new B.bt()
j.push(k)
j=i.f
if(j!=null)k.ai(j)
i.a8()
k=new B.ao(A.P,A.N,A.T,A.U,A.S)
j=B.a([s.j(0.16),s.j(0)],r)
k.sar(new B.alq(u,t,j,g,A.x,g,g,0))
k.y=A.kU
d.af(i,k)}},
aD(d){return d.b!==this.b}}
C.bbV.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.aj()
m=e.aj()
l=Math.min(u,s)*(0.03+e.aj()*0.09)
k=e.aj()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ar(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ao(A.P,A.N,A.T,A.U,A.S)
f.r=g.j(h).gp(0)
f.y=new B.hm(A.G,l*0.35)
d.N(new B.q(j,i),l,f)
f=new B.ao(A.P,A.N,A.T,A.U,A.S)
f.b=A.aa
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.q(j,i),l,f)}},
aD(d){return d.b!==this.b}}
C.bby.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.aj()-0.5)*0.1)
l=v*(0.06+e.aj()*0.05)
k=e.aj()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aF(j.r,A.ah,null,null,i)
i.push(new B.aY(0,m))
h.a8()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ai(f)
h.a8()}$.S()
j=new B.ao(A.P,A.N,A.T,A.U,A.S)
j.b=A.aa
j.c=s
j.d=A.bA
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hm(A.G,u)
d.af(h,j)}},
aD(d){return d.b!==this.b}}
C.bxf.prototype={
a4(d,e){var w,v,u=new B.a2(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sar(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d6z,null).aG(0,u))
d.au(u,w)
w=u.cr(-3)
v=B.K()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kU
d.au(w,v)},
aD(d){return d.b!==this.b}}
C.bud.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e4()
p.d_(r+q)
o=p.aj()*w
n=p.aj()*u
m=Math.sin(A.j.E(A.j.E(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.aj()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ao(A.P,A.N,A.T,A.U,A.S)
j.r=k.gp(0)
j.c=1.4
j.d=A.bA
d.ah(new B.q(o-l,n),new B.q(o+l,n+0),j)
i=l*1.4
d.ah(new B.q(o,n-i),new B.q(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.q(h,n-i),new B.q(g,n+i),j)
i=-l*0.45
d.ah(new B.q(h,n-i),new B.q(g,n+i),j)
i=new B.ao(A.P,A.N,A.T,A.U,A.S)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hm(A.G,l*0.3)
d.N(new B.q(o,n),l*0.35,i)}},
aD(d){return d.b!==this.b}}
C.btl.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a2(0,0,0+e.a,0+e.b)
$.S()
v=B.K()
v.a=A.p4
v.sar(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.F(u-0.15,0,1),A.j.F(u,0,1),A.j.F(u+0.15,0,1)],x.x),null).aG(0,w))
d.au(w,v)},
aD(d){return d.b!==this.b}}
C.bgq.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.K()
w.b=A.aa
w.c=1.4
w.d=A.bA
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.aa
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.ux
r=new C.dh6(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.q(t,t),1,1)
v=e.a-t
r.$3(new B.q(v,t),-1,1)
s=e.b-t
r.$3(new B.q(t,s),1,-1)
r.$3(new B.q(v,s),-1,-1)},
aD(d){return d.b!==this.b}}
C.y6.prototype={}
C.Jy.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asz.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.v7.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mP.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eN.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ak(){var w,v=this,u=B.T(x.N,x.z)
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
u.n(0,"decoration",C.i8W(v.z))
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
C.lY.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eN>")
n=B.C(new B.N(n,new C.cka(),m),m.k("ak.E"))
return C.rS(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ak(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<m,@>>")
n=B.C(new B.N(n,new C.ckb(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gbcZ(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gT6(){if(!C.kJ(this.w))return!1
var w=this.gbcZ()
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
q=B.U(r).k("N<1,lY>")
r=B.C(new B.N(r,new C.ck_(),q),q.k("ak.E"))
return C.Ch(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ak(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.ab().ag())
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
v=B.U(w).k("N<1,a8<m,@>>")
w=B.C(new B.N(w,new C.ck0(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jW.prototype={}
C.b33.prototype={
B(d){return B.cs(new C.ck5(this))}}
C.apB.prototype={
S(){return new C.blj(null,null)}}
C.blj.prototype={
gb1z(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fF,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb1z().t()
this.byE()},
B(d){return B.c9(this.gb1z(),new C.dPF(),this.a.c)}}
C.aMT.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.ael.prototype={
QB(d,e,f,g){return this.bTa(d,e,f,g)},
bTa(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QB=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QB)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.L(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QB,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.du,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aV,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dg,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d6)
n.push(B.A(B.a([B.E(new C.aeC(A.hV,"Download",A.c4,new C.eBh(w,d),!0,v),1),A.at,B.E(new C.aeC(A.uM,"Share",A.bm,new C.eBi(w,d),!1,v),1),A.at,B.E(new C.aeC(A.hH,"Safari",A.b2,new C.eBj(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aC)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eBk(d),v,v))
return B.bm(!0,new B.D(A.qx,B.x(B.a([B.p(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GR,v,v,1/0)],m),A.m,v,A.e,A.O,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeC.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aO(!1,u,!0,B.eI(B.x(B.a([p,A.R,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.O,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bGu,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b31.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arG(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cdv().am4(1.35)
s=B.axd(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEd(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.w,A.bm,h,h,h,h,2,D.c2N,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bP("slide_tf_"+g.a,x.W),h,A.xb,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ab,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AB,A.ao,h,A.V8,h,h)
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
w=n?t.cOh(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eO:A.Ew
p=B.d(f,new B.bP("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.V_:s
$.S()
j=B.K()
j.b=A.aa
j.c=3*w
j.e=A.dS
j.r=A.av.gp(0)
j=i.cuu(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ac,A.t,B.a([j,i.cus(k,t,l?A.V_:s)],x.p),h)}else w=i.cut(p,t,g.k2?A.V_:s,m)
v=new B.mH(w,new B.bP("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c1M()
case 3:return i.cm2()
case 2:return B.b4(h,h,h,new C.b2Z(g,h),A.fJ)
case 5:g=g.r
return new C.b30(g,!i.e&&i.z==null,h)}},
cdv(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k1
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cT(D.aho,new B.q(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cT(l,A.I,6*v),new B.cT(l,A.I,16*v),new B.cT(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.br
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.n9
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cT(A.bF,new B.q(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cT(v,new B.q(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cT(A.bb,new B.q(-3*v,0),0),new B.cT(A.ax,new B.q(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cT(A.cJ,A.I,8*v),new B.cT(A.ax,new B.q(0,-3*v),18*v)],x.r)
k=A.u
w=A2.xX
break
case"ice":v=o.d
e=B.a([new B.cT(A.aJ,A.I,10*v),new B.cT(A.cy,A.I,22*v)],x.r)
k=A.V
w=A.eC
break
case"chalk":h=o.d
e=B.a([new B.cT(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.k1
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d8G[q]
u.push(new B.cT(v,new B.q(p.a*t,p.b*t),0))}u.push(new B.cT(v,new B.q(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.K()
v=o.d
f.sar(D.c5v.aG(0,new B.a2(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cT(A.M2,new B.q(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.K()
v=o.d
f.sar(D.c5Q.aG(0,new B.a2(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cT(l,A.I,14*o.d)],x.r)
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
e=B.a([new B.cT(l.j(0.45),new B.q(u,u),0),new B.cT(l.j(0.2),new B.q(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k1
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBl(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f9j.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ck3(h)
v=r.k2?C.ilI(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eO:A.Ew
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.YT(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cuu(d,e,f,g){return this.aBl(d,e,f,!1,g)},
cus(d,e,f){return this.aBl(d,e,f,!1,null)},
cut(d,e,f,g){return this.aBl(d,e,f,g,null)},
bEd(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a9
default:return A.a6}},
c1M(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bL
return B.at(B.X(s.b===D.lq?A.HO:A.Cv,A.aD,t,t,t,32),t,t,t)}w=u.bHh(r)
if(s.b===D.lq){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.L(A.cs,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dF,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQg(r,!0)
return C.fNE(s.go,v,s.id)}return w},
aQg(d,e){var w,v,u,t
try{w=C.im2(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cs(new C.ck2(this,w,v,e))
return u}catch(t){return D.aeR}},
bHh(d){return this.aQg(d,!1)},
cm2(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bcj
return C.imk(v,w.db,w.dx)}}
C.b2Z.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
w.r=B.b0(f.ch).gp(0)
w.b=A.aa
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a2(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.au(s,g)
d.au(s,w)
break
case 1:d.bY(s,g)
d.bY(s,w)
break
case 2:r=new B.aF(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aF(h.r,A.ah,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.aY(0,h))
f=u*0.65
r.D(new B.aq(f,h))
r.D(new B.aq(f,t*0.2))
r.D(new B.aq(u,t*0.5))
r.D(new B.aq(f,t*0.8))
t*=0.55
r.D(new B.aq(f,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.q(0,h),new B.q(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aF(h.r,A.ah,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aY(k,j)
f.push(h)
v=r.f
if(v!=null)h.ai(v)
r.a8()}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.ai(v)
r.a8()}}r.D(new B.bt())
d.af(r,g)
d.af(r,w)
break}},
aD(d){return d.b!==this.b}}
C.aKp.prototype={
S(){return new C.bwK(null,null)}}
C.bwK.prototype={
Y(){var w,v=this
v.a3()
w=B.bl(null,A.hD,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAT()},
aQr(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.dg,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a6,A.a9,A.x,v,w,w),A.n),A.bi)},
bEr(){var w,v=this,u=null,t=v.aQr("Slide A",A.bm),s=v.aQr("Slide B",A.b2)
if(v.a.c===D.cq)return new B.an(A.a0,u,A.b4,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.ffS(v,s,t),u)},
B(d){return this.bEr()}}
C.aL6.prototype={
jt(d){return new B.a2(0,0,0+d.a*A.j.F(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.W7.prototype={
S(){return new C.blv(null,null)}}
C.blv.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bl(null,A.C1,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cq){w.sp(0,1)
return}B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0f(u),x.a)},
by(d){var w,v,u,t=this
t.bI(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cq)w.sp(0,1)
else B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0e(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.byT()},
B(d){var w,v=this.a
if(v.c.dy===D.cq||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e0d(this),v.d)}}
C.Jx.prototype={
B(d){return B.cs(new C.cjW(this))}}
C.aB5.prototype={
S(){return new C.bfR()}}
C.bfR.prototype={
Y(){this.a3()
if(this.a.c!==D.cq)B.bQ(A.NE,new C.dej(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cq)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.W7(C.er(A.bk,!1,4279310375,A.aG,"",4294538006,24,A.bq,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bj,o,2,"",0,0,"",u,D.fg,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cf,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bP("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bk,!1,4294967295,A.aG,"",4280640491,22,A.bq,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bj,o,2,"Element flies in",0,0,"",q.a.c,D.cX,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.a0,p,A.ac,A.t,B.a([w,B.ap(32,new C.W7(t,B.p(p,D.fJu,A.f,p,p,new B.o(s,p,B.L(A.aV,A.r,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.bP("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7r,A.bi)}}
C.a8E.prototype={
S(){return new C.bmb(null,null)}}
C.bmb.prototype={
gb2a(){var w=this.a
if(w.e)w=D.f9v.q(0,w.c)||D.aSo.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb2a()){w=C.ikl(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dv(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzo()},
B(d){var w,v=this,u=v.d
if(!v.gb2a()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.eoE(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0Y.prototype={
B(d){var w=null
return B.at(C.b32(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bq,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bj,4280172719,2,"Aa",0,0,this.c,D.cq,D.cX,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bh3.prototype={
jt(d){return C.a3x(this.b,new B.a2(0,0,0+d.a,0+d.b).cr(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsf.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a2(0,0,0+e.a,0+e.b).cr(-this.d),k=this.b,j=C.a3x(k,l),i=e.gdA(),h=new C.f4N()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sar(D.aTU.aG(0,l))
d.af(j,w)
k=C.a3x(k,l.cr(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bt4.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sar(D.fjP.aG(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.hm(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sar(D.fjN.aG(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3x(k,l.cr(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bb.j(0.7).gp(0)
k.y=new B.hm(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pc.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sar(D.fjI.aG(0,l))
d.af(j,w)
w=C.a3x(k,l.cr(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bg8.gp(0)
d.af(w,v)
k=C.a3x(k,l.cr(i*0.03))
v=h.$1(i*0.004)
v.r=D.bj8.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sar(D.aTU.aG(0,l))
d.af(j,k)
for(k=B.xE(j),w=B.a([],x.X),k=new B.rr(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jE(y.M));--r
k.ik()
q=w[r].b
q===$&&B.c()
p=A.o.F(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.ik()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.ik()
n=w[r].Hq(q*o/p).a
m=D.d5O[A.o.E(o,4)]
$.S()
q=new B.ao(A.P,A.N,A.T,A.U,A.S)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ao(A.P,A.N,A.T,A.U,A.S)
q.r=A.c.j(0.9).gp(0)
d.N(new B.q(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sar(D.fjR.aG(0,l))
k.y=new B.hm(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sar(D.fjO.aG(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3x(k,l.cr(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.o7.gp(0)
d.af(k,w)
break}},
aD(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bti.prototype={
a4(d,e){d.Go(C.a3x(this.b,new B.a2(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdA()*0.05,!1)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aN6.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aNB.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aOV.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a8X.prototype={}
C.OJ.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aFY(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUt(){return this.r},
gUu(){return this.w},
gMa(){return this.x}}
C.aFY.prototype={
Y(){var w,v=this
v.a3()
$.aW.c1$.push(v)
C.fSD()
$.hCe=new C.eHv(v)
w=B.bl(null,A.BZ,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IV()},
by(d){var w,v,u=this
u.bI(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P5(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IV()}},
jl(d){if(d===A.B4||d===A.tK||d===A.tJ||d===A.pY)this.u9()},
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
v.P$=0}t.bzB()},
gacA(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPo(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ad5(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gT6())return!1
return!0},
kw(){return this.ad5(null)},
ak3(){var w=this.c
if(w==null)return
w.L(x.q).f.U(D.fi5)},
qO(){if(!this.kw())return!1
this.ak3()
return!0},
asR(d){var w,v,u,t,s,r=this
if(r.ad5(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hBl(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ap(){return this.asR(null)},
IV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.asB(k),$async$IV)
case 3:j=e
w=4
return B.b(C.ar8(k),$async$IV)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h7x(j,t.c4N())
w=t.gacA()?5:7
break
case 5:r=t.gPo()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1b(r),$async$IV)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eDT())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c4(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eDU())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.z8(m==null?"":m)!=null)continue
C.fSP(n,s)
p=!0}t.m(new C.eDV(t,s))
if(p||s.length>J.ad(j))t.u9()
case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
c4N(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kJ(w)&&w!==q}if(w)p.push(r)
return p},
csV(d){var w,v=this,u=d.w
if(!C.kJ(u)||u==="hati_kiapo_uongozi")return
v.abp(d)
w=A.d.bj(v.d,new C.eFt(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c4(u,0,d.hQ())
v.db=!1},
cn_(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kJ(s)&&s!=="hati_kiapo_uongozi"}if(s)u.csV(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i3>")
s=B.C(new B.cM(new B.Y(s,new C.eFh(),w.k("Y<1>")),new C.eFi(),v),v.k("M.E"))
return s},
P5(d){return this.bTB(d)},
u9(){return this.P5(null)},
bTB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cn_()
w=3
return B.b(C.X0(d==null?t.a.c:d,s),$async$P5)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asR(r)?4:5
break
case 4:w=6
return B.b(C.a8a(r),$async$P5)
case 6:q=r.x
p=A.a.i(q==null?t.gPo():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eDg())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c4(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
pI(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kJ(u.w))===!0?A.h8:A.lH
v.at=B.cz(w,new C.eGB(v))},
b1A(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ag7(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cGI(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ag7(w.e.hQ(),w.f,w.r))
w.m(new C.eHr(w,v.pop()))
w.pI()},
cs_(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ag7(w.e.hQ(),w.f,w.r))
w.m(new C.eFr(w,v.pop()))
w.pI()},
oC(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eHe(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yt(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
y9(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a9(0)},
KH(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,m>")
t=B.d4(new B.cM(new B.Y(w,new C.eHf(),v.k("Y<1>")),new C.eHg(),u),u.k("M.E"))
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
if(n.b!==D.cX)continue
p=n.a
m=w.c3(0,p,new C.eHh(n))
s.c3(0,p,new C.eHi())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ie(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aW(u.d,new C.eCF(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPo()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c4(u.d,0,u.e.hQ())}u.oC()
u.pI()},
akp(d,e){var w,v,u,t,s=this
if(s.kw())return
w=s.Yt(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kJ(v.w))===!0
if(u){C.ikp(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ikq(t,w.d+w.f*0.5)}}s.Ie()
s.oC()
s.pI()
if(u&&s.c!=null)s.m(new C.eHs())},
cHQ(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ie()
w.oC()
w.pI()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.F(this.f,0,w.length-1)]},
gqS(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.iir(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c20(v)
t=q.c2_(v)
s=B.b0(v.e)
r=v.f
return new C.jW(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hVD(o)},
c20(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cX)s=t.w>=28||A.o.F(A.o.aq(t.x.a,100)-1,0,8)>=A.o.F(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.Q},
c2_(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cX&&t.w<28)return B.b0(t.Q)}return A.aM},
agm(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacA()){w.c.L(x.q).f.U(D.fgH)
return}w.abp(d)
w.b2S(C.bEu(d))
return}if(C.ckO(v)){w.abp(d)
w.b2S(d)
return}w.m(new C.eEA(w,d))},
atp(){var w,v,u,t,s,r,q=this
q.a37(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kJ(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eCD(q))
if(r&&q.c!=null){u.toString
q.Kd(u,s)}return}q.u9()
q.m(new C.eCE(q))},
b2R(d){this.abp(d)
this.a0B(d,!0)},
abp(d){if(!C.kJ(d.w))return
C.fSP(d,this.d)},
a0B(d,e){return this.ciS(d,e)},
b2S(d){return this.a0B(d,!1)},
ciS(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0B=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEu(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPo():r)
t.dy.W(0,q.toLowerCase())
C.ar9(t.a.c,q)}r=s}else r=d
w=C.ckO(r.w)?3:4
break
case 3:w=5
return B.b(t.abq(r),$async$a0B)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aW(t.d,new C.eEX(l))
o=l.a.hQ()
n=C.kJ(o.w)&&C.ilD(o)
t.m(new C.eEY(t,o,p))
if(n){m=A.d.bj(t.d,new C.eEZ(o))
if(m>=0){t.d[m]=o.hQ()
t.u9()}}if(!t.ad5(l.a))t.ZE()
r=!1
if(t.c!=null)if(!t.ad5(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asR(r)&&C.fOP(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.fhh)
case 1:return B.h(u,v)}})
return B.i($async$a0B,v)},
abq(d){return this.bRE(d)},
bRE(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lw(r.c,A.Ag),$async$abq)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.la(!1,r,s.c,s.d,null,A.Ag,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abq,v)},
oq(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ckO(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckd(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oq,v)},
ag3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eEz(),s,null,!0,!0,x.H),$async$ag3)
case 3:if(t.c==null){w=1
break}t.atp()
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
ag2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eEw(),s,null,!0,!0,x.H),$async$ag2)
case 3:if(t.c==null){w=1
break}t.m(new C.eEx())
t.atp()
case 1:return B.h(u,v)}})
return B.i($async$ag2,v)},
ZE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$ZE)
case 3:r=e
if(B.k0(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aA("Bool","ngmy_marriage_hint_seen",!0),$async$ZE)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffh)
case 1:return B.h(u,v)}})
return B.i($async$ZE,v)},
Kd(d,e){return this.ctk(d,e)},
ctk(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kd=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahu(s,t.gEX(),t.gEW(),!0,e,t.d),$async$Kd)
case 9:w=4
break
case 6:w=10
return B.b(C.ahv(s,t.gEX(),t.gEW(),!0,e,t.d),$async$Kd)
case 10:w=4
break
case 7:w=11
return B.b(C.ahw(s,t.gEX(),t.gEW(),!0,e,t.d),$async$Kd)
case 11:w=4
break
case 8:w=12
return B.b(C.ahx(s,t.gEX(),t.gEW(),!0,e,t.d),$async$Kd)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kd,v)},
c3D(){var w,v,u,t,s=this
if(!s.gacA()){s.c.L(x.q).f.U(D.ffu)
return}w=s.gPo()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.aht(u,t,v,new C.eDP(s),new C.eDQ(s),w)},
agn(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dR,null,new C.eEG(u),s,!0,!0,!1,A.lS,!1,!1,x.N),$async$agn)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahx(s,u.gEX(),u.gEW(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahu(s,u.gEX(),u.gEW(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahv(s,u.gEX(),u.gEW(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahw(s,u.gEX(),u.gEW(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c3D()
return B.h(null,v)}})
return B.i($async$agn,v)},
chY(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1A()
w=C.cD()
v=C.Ch(t,t,t,t,D.DR,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eEH(u,v))},
aaN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iqb(s),$async$aaN)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cC(q.r,new C.eCH())
t.d9(new C.eCI(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaN,v)},
aio(d,e,f,g){var w=null,v=g?A.dt:A.bO,u=B.L(g?A.aV:A.cs,A.r,1)
return B.hb(B.aA(w,B.p(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qO()){w=1
break}s=t.kc()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eES(),q),q.k("M.E"))}o=s!=null&&s.b===D.lR?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.fhs)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eET(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0A)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0A,v)},
agE(){return this.ciR()},
ciR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ipY(s,t.f+1,o),$async$agE)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jx(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eEV(q))
t.d9(new C.eEW(p,t,o,q,r))
t.c.L(x.q).f.U(D.fhR)
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
agL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()||!t.Ap()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFc(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.ff2)
w=1
break}o=new B.N(p,new C.eFd(),B.U(p).k("N<1,I>")).f1(0,new C.eFe())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eFf(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agL)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eFg())
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
return B.b(C.hDt(s,new C.Fc(r,q,p,o==null?"":o)),$async$agq)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d9(new C.eEI(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahU(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agq,v)},
abj(){return this.bQW()},
bQW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iqa(s,t.f+1,l),$async$abj)
case 3:r=e
q=$.hbe
$.hbe=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d9(new C.eCY())
t.c.L(x.q).f.U(D.feU)
w=1
break}if(!q){s=r.CW
s=C.hCc(l,s==null?"":s,!1)}else s=!1
if(s){t.d9(new C.eCZ(t,l,r))
t.c.L(x.q).f.U(D.fik)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jx(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eD_(p))
o=s.length
t.d9(new C.eD0(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
aSD(d,e){if(e){this.ahd()
return}this.chY(d,!1)},
bMq(){return this.aSD(null,!1)},
ahd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c3,null,new C.eFm(t),r,!0,!0,!0,A.pJ,!1,!1,x.N),$async$ahd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFn(t,C.iiq(s).pV()))
case 1:return B.h(u,v)}})
return B.i($async$ahd,v)},
d9(d){var w=this
if(w.qO())return
w.Ie()
w.b1A()
w.m(d)
w.KH()
w.oC()
w.pI()},
a9i(){this.d9(new C.eBC(this,D.n3))},
aU7(){var w=this.gdB()
if(w==null)return
this.d9(new C.eCW(this,w))},
aTd(){var w=this.e
if(w==null||w.r.length<=1)return
this.d9(new C.eCU(this))},
b5L(d,e){if(this.e==null||d===e)return
this.d9(new C.eFv(this,d,e))},
OC(d){return this.bOr(d)},
bOr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPo():s)
w=5
return B.b(C.ar7(t.a.c,r),$async$OC)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asD(s)
w=6
return B.b(C.b36(t.a.c,s),$async$OC)
case 6:if(t.c==null){w=1
break}t.m(new C.eCQ(t,d))
w=7
return B.b(t.u9(),$async$OC)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
cth(d,e){var w=this
if(d.z){w.ak3()
return}w.m(new C.eFu(w,d,e))
w.pI()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xt(d){return this.ch.c3(0,d.a,new C.eCG(d))},
avi(d){return this.CW.c3(0,d.a,new C.eDh())},
a37(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yt(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ao$.d.c
if(u!=null)u.jr()},
b9i(){return this.a37(!0)},
a33(d){var w,v,u=this
if(u.qO())return
if(!u.Ap())return
w=u.Yt(d)
if(w==null||w.b!==D.cX)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xt(w).sb1(0,"")}u.m(new C.eHc(u,d))
$.aW.x1$.push(new C.eHd(u,d,w))},
b9R(d){var w=this
if(d.b===D.cX&&!w.kw()&&w.Ap()){w.a33(d.a)
return}w.aBL(d.a)},
aBL(d){var w,v,u,t,s,r=this
if(r.kw())return
w=r.r
if(w!=null&&w!==d){v=r.Yt(w)
if(v!=null&&v.b===D.cX){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eGC(r,s,d))
if(s||d==null){t=$.aW.ao$.d.c
if(t!=null)t.jr()}},
aOL(){this.d9(new C.eBD(this))},
pq(d){return this.bDu(d)},
bDu(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$pq)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBA(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pq,v)},
Ww(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ww=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(78,1920),$async$Ww)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.d9(new C.eBq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ww,v)},
Wq(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(T.Ds(t.a.c),$async$Wq)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gav(s)){t.c.L(x.q).f.U(D.fiU)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eBn(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wq)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.d9(new C.eBo(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wq,v)},
aug(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aW(w.gdB().z,new C.eCS(v))){w.c.L(x.q).f.U(D.fhV)
return}if(w.w===v)w.a37(!0)
w.d9(new C.eCT(w,v))},
bKH(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fg)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cX)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPt(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.d9(new C.eC4(w,v,d,e,t,u))},
bF4(d){return this.aPt(d,null)},
a9y(d){return this.bFc(d)},
bFc(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9E.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oq(),$async$a9y)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cX)t.bF4(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fg){r=d.c
t.aPt(r.j(0.88),r)}w=1
break}t.d9(new C.eC9(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
a9x(d){return this.bFa(d)},
bFa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9x=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.oq(),$async$a9x)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eC7(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9x,v)},
bEV(d){var w=this.gdB()
if(w==null)return
this.d9(new C.eC3(this,w,d))},
a0G(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iq6(r),$async$a0G)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oC()
t.m(new C.eF6(t,s))
w=4
return B.b(t.u9(),$async$a0G)
case 4:if(t.c!=null)t.agm(s)
case 1:return B.h(u,v)}})
return B.i($async$a0G,v)},
aba(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aba=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a37(!0)
t.oC()
s=t.c
s.toString
w=3
return B.b(C.S6(s,q),$async$aba)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aba,v)},
E5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oC()
t=4
w=7
return B.b(C.aRI(m),$async$E5)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aR8(o,q,m.b),$async$E5)
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
return B.i($async$E5,v)},
FM(d,e){return this.cG5(d,e)},
cG5(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FM=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qO()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a37(!0)
t.oC()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eHl(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.ijo(q?"":s)
o=C.hB7(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eHm(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cza(n.length,o,s),$async$FM)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.iji(h.a)
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
return B.b(t.cz9(n,o),$async$FM)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eHn(s))
s=h.a.b
w=11
return B.b(t.cz7(k.b,s),$async$FM)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ijn(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fj5)
w=1
break}w=12
return B.b(t.cz8(j.a,s,o,j.c),$async$FM)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eHo(h,t,i))
t.pI()
case 1:return B.h(u,v)}})
return B.i($async$FM,v)},
cza(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGS(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cz9(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGR(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cz7(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGL(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cz8(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGN(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acE(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acF(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.du,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fu4,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXs(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.L(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.VK,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aXv(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aO(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nc,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.z5,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDL(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c0V(d,e,f,g,h,i){return this.aXv(d,e,f,!1,g,h,i)},
awC(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.L(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dg,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a0w,w,w,w)},
aXu(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nS,w,w,w),w,new C.eDK(d,f),v)},
aXt(d,e){return this.aXu(d,e,null)},
Ky(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ky=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pr(l,s.c,s.d),$async$Ky)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aN("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eA(l,new C.eGD());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaR(l.charCodeAt(0)==0?l:l,r.b),$async$Ky)
case 4:l=t.a
w=5
return B.b(B.pq(l.c,l.d),$async$Ky)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ky,v)},
IA(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pr(q,s.c,s.d),$async$IA)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaR(A.Y.az(r.ak(),null),r.b+".json"),$async$IA)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.d),$async$IA)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IA,v)},
b91(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oC()
u.u9()
w=u.c
w.toString
v=B.eb(new C.eHb(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$HO)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fT1(),$async$HO)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ime(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.av,null,new C.eBv(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HO)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d9(new C.eBw(t,s))
w=1
break}if(p==="split")t.d9(new C.eBx(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HO,v)},
NX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}w=3
return B.b(t.oq(),$async$NX)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRH(s,null,null),$async$NX)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eBB(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NX,v)},
b5x(d){var w=this.e
if(w==null||!C.kJ(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aQQ(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRH(s,t==null?null:B.b0(t),u)},
a9g(d){return this.bDl(d)},
bDl(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fjk)
w=1
break}w=3
return B.b(t.aQQ(),$async$a9g)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eBs(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9g,v)},
ahX(d){return this.cs2(d)},
cs2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fis)
w=1
break}w=3
return B.b(t.aQQ(),$async$ahX)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eFs(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahX,v)},
ceE(){var w,v,u=this
if(u.kw())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bE(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cF5()}},
cF5(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d9(new C.eHj(this,r,(A.o.aJ(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1f(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d9(new C.eDO(this,r,u.d))},
c65(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fPA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lq&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c66(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
if(!this.Ap())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fPA(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lq&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O4(d){return this.bFC(d)},
bFC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhi)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arb(p),$async$O4)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fhX)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8a(r)
w=1
break}t.m(new C.eCd(t,d,o))
t.oC()
$.aW.x1$.push(new C.eCe(t))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oq(),$async$Wu)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFa(),$async$Wu)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.d9(new C.eBp(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
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
return B.b(C.fST(r),$async$OR)
case 4:q=e
if(q==null){w=1
break}t.d9(new C.eDf(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
jj(d){this.d9(new C.eBy(this,d))},
qD(d){return this.bEO(d)},
bEO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qO()){w=1
break}m=!D.aSr.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oq(),$async$qD)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HO()
w=1
break A
case"sign_paper":t.NX()
w=1
break A
case"hd_photo":t.Wu()
w=1
break A
case"sharpen":t.OR()
w=1
break A
case"print":t.E5()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.d9(new C.eBH(s))
w=1
break A
case"text_box":t.aOL()
w=1
break A
case"picture":t.Ww()
w=1
break A
case"present":t.b91()
w=1
break A
case"new_slide":t.a9i()
w=1
break A
case"export_json":t.IA()
w=1
break A
case"outline_share":t.Ky()
w=1
break A
case"flashcard_tool":t.vN(D.J9)
w=1
break A
case"quiz_tool":t.vN(D.Ja)
w=1
break A
case"worksheet_tool":t.vN(D.Jb)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.d9(new C.eBI(t,s))
w=1
break A
case"delete_el":t.aug()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.d9(new C.eBJ(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.d9(new C.eBU(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.d9(new C.eBX(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.d9(new C.eBY(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.d9(new C.eBZ(s))
w=1
break A
case"grayscale":case"brighten":t.OR()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.d9(new C.eC_(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.d9(new C.eC0(s))
w=1
break A
case"rectangle":t.pq(D.bj)
w=1
break A
case"circle":t.pq(D.eX)
w=1
break A
case"triangle":t.pq(D.kb)
w=1
break A
case"arrow":t.pq(D.DT)
w=1
break A
case"line":case"divider":t.pq(D.fH)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eA(q,new C.eC1()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eC2(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqS().d.l(),A.aG,40,A.bq,A.u,0.18,q,"Presentation Title",0,D.n4,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jj(C.j5(A.K,!1,t.gqS().e.l(),A.aG,22,A.bq,A.a8,0.12,q,"Subtitle goes here",0,D.dk,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j5(A.bk,!0,4279310375,A.aG,20,A.bq,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vd,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j5(A.bk,!1,4279310375,A.aG,20,A.bq,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vc,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j5(A.K,!1,4279310375,A.aG,24,A.cF,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dk,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j5(A.bk,!1,4284773515,A.aG,14,A.bq,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.vd,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j5(A.dX,!1,4279310375,A.aG,14,A.bq,A.a8,0.08,C.cD(),C.bFc(),0,D.dk,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j5(A.dX,!1,4279310375,A.aG,13,A.bq,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dk,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d9(new C.eBK(t))
w=1
break A
case"footer_bar":t.d9(new C.eBL(t))
w=1
break A
case"highlight":t.d9(new C.eBM(t))
w=1
break A
case"redact":t.d9(new C.eBN(t))
w=1
break A
case"callout":t.d9(new C.eBO(t))
w=1
break A
case"checkboxes":t.jj(C.j5(A.bk,!1,4279310375,A.aG,20,A.bq,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dk,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j5(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dk,0.8,0.1,0.18))
w=1
break A
case"memo":t.d9(new C.eBP(t))
w=1
break A
case"letter":t.jj(C.j5(A.bk,!1,4279179050,A.aG,17,A.bq,A.a8,0.82,C.cD(),C.bFc()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j5(A.bk,!1,4279310375,A.aG,22,A.bq,A.V,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vd,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j5(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dk,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j5(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dk,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j5(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.08,C.cD(),"Initials: ______",0,D.dk,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j5(A.K,!1,4278556265,A.aG,28,A.bq,A.u,0.12,C.cD(),"APPROVED",0,D.n4,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j5(A.K,!1,4292617766,A.aG,28,A.bq,A.u,0.12,C.cD(),"DRAFT",0,D.dk,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j5(A.K,!1,871318596,A.aG,36,A.bq,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dk,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d9(new C.eBQ(t))
w=1
break A
case"progress":t.d9(new C.eBR(t))
w=1
break A
case"stars":t.jj(C.j5(A.K,!1,4279310375,A.aG,36,A.bq,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qX,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j5(A.K,!1,4279310375,A.aG,32,A.bq,A.V,0.14,C.cD(),"y = mx + b",0,D.dk,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j5(A.K,!1,4279310375,A.aG,18,A.bq,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vc,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d9(new C.eBS(t))
w=1
break A
case"compare":t.d9(new C.eBT(t))
w=1
break A
case"link_text":t.jj(C.j5(A.bk,!1,4280640491,A.n9,16,A.bq,A.a8,0.1,C.cD(),"https://example.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j5(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j5(A.bk,!1,4280640491,A.aG,18,A.bq,A.a8,0.1,C.cD(),"name@email.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d9(new C.eBV(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.d9(new C.eBW(t,r))
w=1
break A
case"invoice":t.jj(C.j5(A.bk,!1,4279179050,A.aG,16,A.bq,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j5(A.bk,!1,4279179050,A.aG,17,A.bq,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j5(A.bk,!1,4279310375,A.aG,16,A.bq,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFc()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j5(A.bk,!1,4279310375,A.aG,17,A.bq,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j5(A.bk,!1,4279310375,A.aG,15,A.bq,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dk,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qD,v)},
cyC(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f9r.q(0,this.z)},
cyB(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
baK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cq,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bB
u=B.L(u,A.r,o&&e?2:1)
t=C.im3(d)
s=o?12:18
r=o?A.H:A.cT
if(o)if(e)q=f
else q=g?A.ad:A.am
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.p(p,D.PJ,A.f,p,p,D.Ff,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aA(p,new B.an(A.a0,p,A.ac,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRc(d){var w,v=null,u=this.kc()
if(u==null)return A.bL
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.am,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.N(D.Si,new C.eDe(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.i,0,v,v)},
vN(d){return this.bDt(d)},
bDt(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSl.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oq(),$async$vN)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBz(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f7M
w=h.e
if(w==null)return h.bHn()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.R(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aH(u,A.c_,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eP,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.biv
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gT6()}else j=!1
if(j)k.push(new C.a8F(h.a.c,!1,h.e.gbcZ(),h.gceB(),g))
else if(s&&h.e!=null&&!h.kw()&&C.ckO(h.e.w)){j=h.a
k.push(new C.a8F(j.c,j.d,g,h.gcfK(),g))}if(s)k.push(h.bR7(w,t,r))
if(s&&h.kw()){w=t?A.fQ:A.kO
j=B.n(14)
i=B.L(A.bm.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bXn,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fQ,g,g,g,g,g,g,g,g,12,g,g,A.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yy,A.iu,g,g,g))}w=!n
if(w&&!h.kw())k.push(h.c73(t,r))
if(w&&h.kw())k.push(h.cG6(t))
if(r&&h.kc()!=null&&w&&!h.kw())k.push(h.c6Z(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8r(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8r(t,!1),g))
i.push(B.E(new B.bL(A.b1,g,g,h.bII(v,t,!s||p),g),1))
if(h.cyC(r)&&u&&s&&!h.kw())i.push(h.cen(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kw()&&h.cyB(!1))j.push(new B.a5(240,g,h.bU_(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c7_(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a0,g,A.ac,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHn(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.R(p).ax.a===A.J
p=w?A.c3:A.bO
v=r.a.e
u=r.cdw(A.bm,A.qE,new C.eCh(r),r.gchV(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOt(A.bm,A.hU,"Blank Presentation",new C.eCi(r)),1),A.at,B.E(r.aOt(A.b2,A.uR,"Class Template",new C.eCj(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.by,s,A.n8,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEg(w))
else{t=new B.i1(t,B.U(t).k("i1<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eCk(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.cl(u,q,q,new B.Q(18,12,18,v),q,q,A.ai,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPe(){this.m(new C.eCV(this))
var w=this.c
w.toString
if(B.aH(w,A.c_,x.w).w.a.a<900){w=$.aW.ao$.d.c
if(w!=null)w.jr()}},
agF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kc()==null){w=1
break}s=t.c
s.toString
s=B.R(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eF5(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
Bp(d,e){return this.cyY(d,e)},
cyY(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.YH,!0,"Dismiss",j,new C.eGE(),new C.eGF(d,e),A.iH,!0,x.N),$async$Bp)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ak3()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gT6()){r.ak3()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRI(d),$async$Bp)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aR8(j,q,d.b),$async$Bp)
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
return B.b(r.FM(d,!1),$async$Bp)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.YH,!0,"Dismiss",j,new C.eGG(),new C.eGH(d),A.a3,!0,x.y),$async$Bp)
case 20:if(g===!0)r.OC(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahH("Rename presentation",d.b),$async$Bp)
case 24:l=g
if(l!=null)r.cth(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ak()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eGI(r,k))
r.pI()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bp,v)},
b3v(d,e){var w=null
return B.bM(!1,D.fTT,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bm,w,w,w,A.az,w,A.lJ,w,w,w,w,w,A.ky,w,w))},
bEg(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBE(this,d),null)},
bNk(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eCJ(),x.dv).bZ(0,new C.eCK()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.al1,this.aP3(v,e,new C.eCL(),f),null)},
aP3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e1)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bu,n,n,n,10),A.r3],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.p(n,new B.c7(A.aL,A.e,A.O,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.bg(s,s,s,s),n,n,A.n),n,n,n,n,A.mT,n,n,n))
A.d.v(l,u)}return B.eE(A.a6,B.A(l,A.m,n,A.e,A.O,0,n,n),A.f,A.e2)},
bEe(d,e,f){return this.aP3(d,e,null,f)},
bNm(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.ds9
else if(v==="hati_kuhoweya")w=D.dcG
else{if(v==="hati_kiapo_uongozi")v=D.cZp
else v=C.kJ(v)?D.d6a:A.RU
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eCO(this,f,d,e,w),null)},
c7_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cX)return A.bL
w=k.Xt(i)
v=k.avi(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.C8,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bM(!1,D.fPj,j,j,!0,j,j,j,new C.eEe(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.av:A.c
q=B.n(18)
p=B.L(A.bm.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hb,B.c3(new B.D(A.eV,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),w,A.bm,j,j,j,j,2,D.c2v,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xb,j,j,j,j,j,j,!1,"\u2022",j,new C.eEf(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ab,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.Q,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.AB,A.ao,j,A.V8,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bi),j),1)
q=B.n(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.ch(B.A(B.a([k.uD(G.OJ,j,new C.eEg(k,i),d),k.uD(G.a1E,j,new C.eEh(k,i),d),k.uD(I.apt,j,new C.eEi(k,i),d),k.uD(I.a2p,j,new C.eEj(k,i),d),k.uD(k.bEc(i.as),j,new C.eEk(k,i),d),k.uD(D.aqy,j,new C.eEl(k,i),d),k.uD(D.aqx,j,new C.eEm(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.ala,B.p(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.am,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dd],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lK,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c6Z(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bL
w=m.b
v=w===D.cX
u=B.n(18)
t=x.O
t=d?B.a([A.bp,A.Q],t):B.a([A.c,A.aQ],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b72(A.j2,"Edit",new C.eE_(o,m),d,!0))
if(w===D.lR)p.push(o.b72(A.HJ,"Shape & ring",new C.eE0(o),d,!0))
p.push(o.uD(A.CZ,"Format",new C.eE1(o),d))
if(v)A.d.v(p,B.a([o.uD(G.OJ,n,new C.eE2(o,m),d),o.uD(D.aqy,n,new C.eE3(o,m),d),o.uD(D.aqx,n,new C.eE4(o,m),d)],q))
p.push(A.b3)
p.push(o.cwP(A.ef,n,o.gaTb(),d,!0))
p.push(o.uD(A.hF,"Done",new C.eE5(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a6,A.a9,A.x,t,n,n),A.n),n,n,n,A.C7,A.lK,n,n,n)},
bEc(d){switch(d.a){case 2:return D.a2m
case 1:case 5:return D.a2o
default:return D.a2n}},
c7U(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dX
default:return A.bk}},
aBJ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ax
else if(h)w=A.c
else{v=g?A.ad:A.aM
w=v}v=B.n(12)
u=B.n(12)
t=h?K.I1:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e1,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qv,B.aJ(!1,A.a3,!0,n,B.aO(!1,v,!1,B.eI(new B.D(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.O,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uD(d,e,f,g){return this.aBJ(d,e,f,g,!1,!1)},
b72(d,e,f,g,h){return this.aBJ(d,e,f,g,h,!1)},
cwP(d,e,f,g,h){return this.aBJ(d,e,f,g,!1,h)},
bR7(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bp,A.Q],m):B.a([A.c,A.nk],m)
w=B.L(e?A.aM:A.o5,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bm.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3y(A.eM,"Back",p.gbKr(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.Q,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dd,B.E(B.A(B.a([new B.dn(1,A.co,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bV:A.am,o,o,o,o,o,o,o,o,11,o,o,A.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ug,o,A.e,A.i,0,A.d0,o),1)],q)
if(!p.kw()){u=p.a3y(A.ps,"Undo",p.ax.length===0?o:p.gcGH(),e)
A.d.v(r,B.a([u,p.a3y(D.bQO,"Redo",p.ay.length===0?o:p.gcrZ(),e)],q))}r.push(p.a3y(A.z3,"PDF",new C.eD7(p),e))
r.push(p.a3y(A.hV,"Download as video",new C.eD8(p),e))
if(!p.kw())r.push(B.Cu(o,o,B.X(A.ov,e?A.ad:A.bu,o,o,o,o),new C.eD9(p),A.I,new C.eDa(p),A.ag,"More",x.N))
r.push(A.dd)
r.push(B.aJ(!1,A.a3,!0,o,B.aO(!1,B.n(14),!0,B.eI(D.eqI,o,new B.o(o,o,o,B.n(14),o,K.I1,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCy(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.p(o,B.A(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bAW,D.bGi,o,o,o)},
cG6(d){var w=this,v=null,u=B.n(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.L(d?A.ct:A.aO,A.r,1)
return B.p(v,B.ch(B.A(B.a([w.j5(A.uP,"Print",new C.eHp(w),d),w.j5(A.z3,"Download PDF",new C.eHq(w),d),w.j5(A.qK,"Present",w.gaCy(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yy,G.amN,v,v,v)},
a3y(d,e,f,g){var w,v=null
if(f==null)w=g?A.aV:A.dq
else w=g?A.ad:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c73(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.L(d?A.ct:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eEp(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.ams,new B.ff(new C.eEq(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wm,r.aio(A.ku,"Ending celebration",r.gci7(),d),q),new B.D(S.wm,r.aio(A.HJ,"Logo ring & frame",r.gciP(),d),q)],x.p):A.f4)
A.d.v(t,w?B.a([new B.D(S.wm,r.aio(A.mf,"Look and feel",r.gciQ(),d),q),new B.D(S.wm,r.aio(A.pv,"Edit this slide's text",r.gcjm(),d),q)],x.p):A.f4)
t.push(new B.D(S.wm,B.hb(B.aA(q,B.p(q,D.f7a,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.I,10)],x.V),D.asB,A.n),q,34,q,q,A.f1,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEr(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.A(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bGN,q,q,A.aL)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ch(r.cuq(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yy,q,q,q,q)},
cuq(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dlj[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwc(s),t.a,new C.eFO(u,e),a3,D.aSl.q(0,s)))}w.push(e.j5(A.li,"Notes Slide",new C.eFP(e),a3))
w.push(e.lY(A.HI,"Quiz",new C.eFQ(e),a3,!0))
w.push(e.lY(P.Hk,"Worksheet",new C.eG0(e),a3,!0))
w.push(e.lY(W.HL,"Flashcard",new C.eGb(e),a3,!0))
w.push(e.lY(A.Pz,"Lab Report",new C.eGm(e),a3,!0))
w.push(e.lY(A.qH,"Rubric",new C.eGt(e),a3,!0))
w.push(e.lY(A.po,"Minutes",new C.eGu(e),a3,!0))
w.push(e.lY(A.ou,"Syllabus",new C.eGv(e),a3,!0))
w.push(e.lY(A.a2W,"Timeline",new C.eGw(e),a3,!0))
return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dmG[v]
w.push(e.lY(r.b,r.c,new C.eGx(e,r),a3,!D.aSr.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wJ,a0,e.gaOK(),a3),e.j5(A.uL,"Picture",new C.eFR(e),a3),e.j5(A.zd,"Bio link",new C.eFS(e),a3),e.j5(A.a2V,"Table",new C.eFT(e),a3),e.j5(A.PD,"Sticky",new C.eFU(e),a3),e.j5(A.rV,"Divider",new C.eFV(e),a3),e.j5(A.zm,"Header",new C.eFW(e),a3),e.lY(A5.rT,"Rectangle",new C.eFX(e),a3,!0),e.lY(A.pl,"Circle",new C.eFY(e),a3,!0),e.lY(A.a2c,"Triangle",new C.eFZ(e),a3,!0),e.lY(A.jF,"Arrow",new C.eG_(e),a3,!0),e.lY(D.bPf,"Parallelogram",new C.eG1(e),a3,!0),e.lY(D.bRL,"Hexagon",new C.eG2(e),a3,!0),e.lY(A.rV,"Line",new C.eG3(e),a3,!0),e.lY(A.z3,"PDF",new C.eG4(e),a3,!0),e.lY(N.a34,"Signature",new C.eG5(e),a3,!0),e.j5(A4.CK,"Quote",new C.eG6(e),a3),e.j5(D.a1M,a1,new C.eG7(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.c_,x.w).w
u=x.p
t=B.A(B.a([e.aPC("Wide 16:9",D.DR,a3),e.aPC("Short 9:16",D.oM,a3),new B.D(A.fz,B.mZ(D.bTV,d,D.fLz,d,new C.eG8(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bKG("This slide",!e.Q,a3,new C.eG9(e)),A.bn,e.aRR("All slides",e.Q,a3,new C.eGa(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bKH()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bV:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a52,new C.eGc(e),n),n.k("ak.E"))
n=B.ch(B.A(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dnH[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.aV,1.5,A.r,-1)
l.push(new B.D(A.fz,B.aA(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eGd(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ch(B.A(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGr()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eGe(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.R,q,A.an,p,A.R,o,A.aw,n,A.R,m,A.aw,l,A.R,j,A.aw,B.ch(B.A(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.an,e.c3K(a3)],u),A.E,d,A.e,A.O,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aH(w,A.c_,x.w).w
u=new C.eFN(e)
t=new C.eGy(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Si,f.dy,new C.eGf(e,u,f),A.b2)
A.d.v(p,B.a([o,A.aw,n,A.R,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.am,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Si,q,new C.eGg(e,u),A.bm))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.O,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.li,w,new C.eGh(e),a3),e.j5(A.uP,"Print deck",new C.eGi(e),a3),e.lY(D.aoz,"Export JSON",new C.eGj(e),a3,!0),e.j5(A.fU,"Duplicate Slide",e.gaU6(),a3),e.j5(A.ef,a2,e.gaTc(),a3),e.cAj(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a1M,a1,new C.eGk(e),a3),e.j5(A.fU,"Duplicate",e.gaU6(),a3),e.j5(A.ef,a2,e.gaTc(),a3),e.j5(A.qK,"Present",e.gaCy(),a3),e.j5(A.CX,a0,e.gaOK(),a3),e.j5(A.CP,"Fit Text",new C.eGl(e),a3),e.j5(A.z3,"Download PDF",new C.eGn(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jJ,"Transfer",new C.eGo(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OJ,"Bold",new C.eGp(e,f),a3),e.j5(G.a1E,"Italic",new C.eGq(e,f),a3),e.j5(G.aoa,"Underline",new C.eGr(e,f),a3),e.j5(Ag.OK,"Bullets",new C.eGs(e,f),a3),e.bTJ(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRc(a3))
w.push(e.j5(D.bNX,"Delete",e.gaTb(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.i,0,d,d)}},
aPC(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oM
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.ab8,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dd,D.bT6],v))
return new B.D(A.fz,B.jt(t,t,t,B.A(u,A.m,t,A.e,A.O,0,t,t),t,new C.eCc(this,w,e),s===e,A.bm.j(0.25),t,t,t),t)},
cAj(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bL
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aV:A.cs,A.r,1)
u=B.n(8)
t=B.X(A.Hi,d?A.aD:A.am,q,q,q,14)
s=B.aG(q,q,q,q,D.arA,q,q,q,new C.eGV(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bl,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arr,q,q,q,new C.eGW(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.O,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.GW,A.mS,q,q,q)},
cwc(d){switch(d.a){case 6:return W.HL
case 7:return A.HI
case 8:return P.Hk
case 4:return A.zm
default:return A.li}},
bTJ(d,e){var w=null,v=B.L(e?A.aV:A.cs,A.r,1),u=B.n(8),t=B.aG(w,w,w,w,D.arA,w,w,w,new C.eDk(this,d),w,w,w,w,w,A.ce),s=A.j.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bl,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arr,w,w,w,new C.eDl(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.O,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uw,A.mS,w,w,w)},
c3K(d){var w=null
return B.Cu(B.DY(B.X(A7.a1P,d?A.ad:A.bu,w,w,w,16),w,w,D.fRe,w,w,w),w,w,new C.eDS(),A.I,this.gbEU(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dt:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dw:A.bm,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.p(w,D.PJ,A.f,w,w,D.Ff,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aJ(!1,A.a3,!0,w,B.aO(!1,v,!0,B.eI(new B.D(A.hb,B.x(B.a([new B.an(A.a0,w,A.ac,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bu,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.O,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8r(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ai:A.aL
v=B.hN(t,new C.eH6(u,s,e,d),s.r.length,A.cl,t,w,new C.eH7(e),!1)
s=d?A.av:A.bO
w=B.a([],x.p)
if(e&&!u.kw())w.push(new B.D(A.cl,B.Ix(E.arO,new C.eH8(u),B.nV(t,A.bm,t,t,t,t,t,t,t,t,t,t,E.aT4,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bII(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oM?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bL(A.b1,v,v,new B.fF(w,B.aA(v,B.cs(new C.eCB(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eCC(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bIK(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kJ(a9.w))===!0,b1=b0&&C.fPA(b3),b2=b0&&b3.b===D.lq&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kw())v=!b0||a7.c66(b3)
else v=!1
if(!a7.kw())u=!b0||a7.c65(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cf:A.bm
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hel(b3))o=a8
else if(p&&!a7.kw())o=a7.gceD()
else o=a7.kw()?a8:new C.eCp(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.hel(b3)&&a7.Ap()?new C.eCq(a7,b3):a8
h=v&&b3.b===D.cX?new C.eCr(a7,b3):a8
g=u?new C.eCs(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c4:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c4.j(0.08)
else a0=b3.b===D.lq?A.L:a8
if(b1){a1=a7.kw()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c4.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.V,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.c_,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ap()
a3=b3.b===D.cX
a4=a3?a7.Xt(b3):a8
a5=a3?a7.avi(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.c_,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eCt(a7,b3):a8
a3=v&&a3?new C.eCu(a7,b3):a8
a6=C.b32(q,a4,a1,b3,a5,a2,a3,new C.eCv(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ap(-4,B.aA(a8,B.p(a8,D.bVW,A.f,a8,a8,new B.o(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCw(a7,b3,b4,b5),a8,a8,new C.eCx(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kw()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bWD,A.f,a8,a8,new B.o(A.dj,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1e(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kw()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bYg,A.f,a8,a8,new B.o(A.c4,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCy(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cX)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.c_,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.p(a8,D.h_l,A.f,a8,a8,new B.o(A.bm,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lf,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCz(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eK(A.A,f,new B.an(A.a0,a8,A.ac,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bP("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aRR(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bm.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.L(e?A.bm:A.bB,A.r,1)
if(e)t=A.bm
else t=f?A.aD:A.am
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dd,B.p(r,D.PJ,A.f,r,r,D.Ff,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.p(r,B.A(t,A.m,r,A.e,A.O,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bKG(d,e,f,g){return this.aRR(d,e,f,g,!1)},
cen(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aQ
t=f?A.xI:l
if(f)s=new B.bG(new B.ay(e?A.bB:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.th,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bu,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3v(e,new C.eEt(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bV:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.an,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(10),A.dn),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eEu(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aVp(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bL
w=new C.eDy(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.F(1-a2.c,0.06,1)
t=A.j.F(1-a2.d,0.06,1)
s=A.j.F(1-a2.e,0.01,1)
r=A.j.F(1-a2.f,0.01,1)
q=a5?A.dU:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.Q,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3v(a3,a0.gbPd())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fM4,B.E(B.kT(a1,a1,a1,u,0.05,new C.eDz(w,a2),A.j.F(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.fYI,B.E(B.kT(a1,a1,a1,t,0.05,new C.eDA(w,a2),A.j.F(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cX
if(m)o.push(B.A(B.a([D.fFB,B.E(B.kT(a1,a1,a1,96,10,new C.eDB(w,a2),A.j.F(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lR
if(l||n===D.lq||n===D.TE)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fS1,B.E(B.kT(a1,a1,a1,s,0,new C.eDC(w,a2),A.j.F(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.h_2,B.E(B.kT(a1,a1,a1,r,0,new C.eDD(w,a2),A.j.F(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Df[j]
i.a=null
g=h.a
i.a=g
k.push(B.jt(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDE(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.D8[j]
f.a=null
g=e.a
f.a=g
h.push(B.jt(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDF(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.R,l,A.an,k,A.R,i,A.an,B.bW(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.R)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eDG(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bW(A.bH,l,A.bt,a1,6,6),A.af,B.hqN(new C.eDH(w,a2),D.cA8,B.ey([a2.as],k),!0,a1,k)],p))}if(n===D.fg){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.am,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eDI(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bY2,D.fU4,new C.eDJ(a0,a5),B.bn(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ai,a5)
if(a5)return d
q=a3?A.ct:A.c
p=a4?A.xI:a1
if(a4)o=new B.bG(new B.ay(a3?A.bB:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.th,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GF,a1,a1,a1)},
bU_(d){return this.aVp(d,!1,!1,null)},
cdw(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eDM(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fuZ,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bG,A.cU,r.bEe(D.d3p,d,B.R(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aO(!1,q,!0,B.eI(D.fdE,q,new B.o(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c4.j(0.4),A.er,8)],p),D.asG,A.a7),q,q,q),A.cQ,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.A(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.R(w).ax.a===A.J
w=B.n(20)
v=x.O
v=s?B.a([D.beB,D.bf3],v):B.a([A.c,A.kO],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aOt(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBl(this,g,d,e,f),null)},
ahH(d,e){return this.cqd(d,e)},
cqd(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eFq(d,q),p,null,!0,!0,x.N),$async$ahH)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
QC(d){var w=d.bT()
return""+B.bK(w)+"/"+B.bV(w)+"/"+B.bB(w)}}
C.ag7.prototype={}
C.aAs.prototype={
S(){return new C.beD(null,null)}}
C.beD.prototype={
gcCE(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bK(u)+"/"+B.bV(u)+"/"+B.bB(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bl(u,A.qs,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bzp,u,1,u,v)
w.cq(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxw()},
Jv(d){var w=0.12+d*0.09,v=A.j.F(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cx.aE(0,new B.hU(w,v,A.cx).aE(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bF5,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d9L(this),v),v),v,v,v)}}
C.beS.prototype={
B(d){var w=null,v=B.n(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFm,B.aJ(!1,A.a3,!0,w,B.p(w,B.bx(B.n(22),B.x(B.a([new B.D(D.bEx,B.x(B.a([B.p(w,D.bWJ,A.f,w,w,new B.o(A.ax.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fWg,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fwd,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dV,D.bys,B.A(B.a([B.E(B.bM(!1,D.fKf,w,w,!0,w,w,w,new C.da8(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.nz,w,A.oR,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fPE,w,w,!0,w,w,w,new C.da9(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.ax,w,w,w,w,w,A.nz,w,A.oR,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.O,0,A.p),A.aq),A.f,w,A9.Xq,new B.o(A.av,w,u,v,D.d3O,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.Kz.prototype={
S(){return new C.beC()}}
C.beC.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dF,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.da(B.aA(o,B.vS(B.cV(o,B.A(B.a([r,A.at,new B.dn(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.eQ:A.c,o,o,o,o,o,o,o,o,13,o,o,A.V,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.ba,A.O,0,o,o),o,o,A.b6,new B.o(n,o,u,v,t,o,A.n),A.eK,o,o,o,o,A.nA,o,o,1/0),A.cx,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d9G(p,d),new C.d9H(p),new C.d9I(p),new C.d9J(p),o,o,o,!1,A.a4),k),new B.q(0,(1-k)*16))}}
C.Qs.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aO(!1,s,!0,new B.D(A.eV,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nc,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eH,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0B.prototype={
S(){return new C.aG0(D.dk,null,null)}}
C.aG0.prototype={
gZL(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.byZ,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b8V(d){if(!this.a.c.ay)return
this.x=d
this.gZL().iy(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.F(w.d,0,w.c.r.length-1)
C.axj(D.fk6)
C.iiW()
v.S5()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZL().t()
v=w.z
if(v!=null)v.a1(0)
C.axj(D.fk7)
C.iiZ()
w.bzC()},
cFu(){B.jT()
this.m(new C.eI5())
var w=this.c.L(x.q).f
w.a5M()
if($.bmy)w.U(D.fgY)},
S5(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cz(B.dv(0,0,0,0,0,A.o.F(C.hoZ(u,w),1,120)),new C.eHW(v))},
cF7(){var w,v=this
v.m(new C.eI4(v))
if(v.r)v.S5()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXl(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cz3(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eHX(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cz(A.lI,new C.eHY(w))},
azm(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eHS(u))
u.S5()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXl()){u.cz3()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eHT(u,A.o.E(w+1,s)))
u.b8V(w)
u.S5()}},
coS(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eHU(v))
v.S5()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eHV(v,w,t))
v.b8V(w)
v.S5()}},
cAz(d){var w,v=this,u=v.e
if(u===D.cq){u=v.d
u===$&&B.c()
return new B.mH(d,new B.bP(u,x.ac))}w=v.cAA(u)
u=v.d
u===$&&B.c()
return B.p4(new B.mH(d,new B.bP(u,x.ac)),w,new C.eI2(),A.b6,A.b6,new C.eI3(v))},
cAA(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzl
case 16:return A.iJ
case 18:return A.mN
default:return A.ma}},
cAy(d,e,f){var w,v,u,t=null,s=B.cJ(A.cx,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jF(e,new B.bf(s,new B.bp(A.vm,A.I,w),w.k("bf<bN.T>")),t,!0)
case 3:w=x.K
return B.jF(e,new B.bf(s,new B.bp(A.TS,A.I,w),w.k("bf<bN.T>")),t,!0)
case 4:case 21:w=x.K
return B.jF(e,new B.bf(s,new B.bp(A.ih,A.I,w),w.k("bf<bN.T>")),t,!0)
case 5:w=x.K
return B.jF(e,new B.bf(s,new B.bp(A.tg,A.I,w),w.k("bf<bN.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bN.T>")))
case 7:w=x.b
return B.it(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bN.T>")))
case 8:return B.c9(s,new C.eHZ(s),e)
case 9:return B.c9(s,new C.eI_(s),e)
case 10:return B.c9(s,new C.eI0(s),e)
case 11:return B.c9(s,new C.eI1(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.it(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bN.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jk(B.jF(e,new B.bf(s,new B.bp(A.vm,A.I,v),v.k("bf<bN.T>")),t,!0),A.t,new C.btO(w,t))
case 15:w=x.K
return B.jF(e,new B.bf(s,new B.bp(A.TS,A.I,w),w.k("bf<bN.T>")),t,!0)
case 19:w=B.dr()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fw(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eK(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jk(new C.apB(B.c9(n.gZL(),new C.eI6(n,v,w),m),m),A.t,m)}else{t=B.rY(new C.Jx(w,!0,!1,m))
l=B.b0(w.e)
u=n.cAz(B.e8(B.jk(t,A.t,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.hoZ(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oY,m,m,m),A.bn,D.bZ7],k),A.m,m,A.e,A.O,0,m,m),A.f,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.ha,m,m,m)
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
l.push(B.bR(0,new C.Of(new C.Fc(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oM?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jk(B.uS(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmy){r=B.Ix(A.lm,new C.eI7(d),B.nV(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bm(!0,B.A(B.a([r,A.ae,B.Ix(B.X(n.r?Am.uO:A.hs,m,m,m,m,m),n.gcF6(),B.nV(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ap(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fW,m,m,m),A.f,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.ha,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bm(!0,B.aA(A.c5,B.p(A.lx,$.bmy?A.bL:s,A.f,m,m,m,m,64,m,m,D.bA5,m,m,150),A.y,!1,m,n.gcFt(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.aA(m,new B.an(A.a0,m,A.b4,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eI8(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KF.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.ame,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b79,w,w,w,w,w,w,w,w)}}
C.btO.prototype={
jt(d){return new B.a2(0,0,0+d.a*A.j.F(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjD.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.n(999)
break
case"rounded":w=B.n(18)
break
case"arch":w=D.b3W
break
default:w=B.n(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.n(999)
else{t=B.n(q==="rounded"?9:3)
q=t}w=B.cV(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.wP,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b6,new B.o(s.f,r,u,w,r,r,A.n),A.h8,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjC.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dBa.h(0,p)
if(o==null)o=D.dmQ
p=p==="none"
w=p?q:new B.a9(A.a6,A.a9,A.x,o,q,q)
p=p?A.d_.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqM:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a7),q,52,q,q,A.ey,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLO.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a5(0,w.gdH())
w.b9$=null
w.a2()}}
C.aNO.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzC.prototype={}
C.aNP.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b35.prototype={}
C.X1.prototype={
S(){return new C.aFZ()},
bjG(d){return this.e.$1(d)}}
C.aFZ.prototype={
gb78(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaby(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb78()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQt(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb78()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8q(){return A.d.cI(this.gaby(),0,new C.eHC())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RF()},
RF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3H(s.c,s.f),$async$RF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eHy(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RF,v)},
Jx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaby()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fSP(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pr(o,q.c,q.f),$async$Jx)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eb(new C.eHB(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cd(q),$async$Jx)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.f),$async$Jx)
case 5:w=6
return B.b(t.RF(),$async$Jx)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jx,v)},
S3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$S3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.edK,!0,"NgmySlidesTransferScan",x.N),$async$S3)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eHz(t))
w=4
return B.b(C.aik(s),$async$S3)
case 4:r=e
t.m(new C.eHA(t))
o=J.a7(r)
if(o.gav(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.ffN)
w=1
break}w=5
return B.b(t.a.bjG(r),$async$S3)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gI(r)
o=o.gI(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$S3,v)},
Jw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaby()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pr(s,r.c,r.f),$async$Jw)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fT3(null,A.d.gH(n),s,t.a.f)}else q=C.fT3(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.H9(q,"ngmy_slides_"+p,!1),$async$Jw)
case 4:o=e
s=t.a
w=5
return B.b(B.pq(s.c,s.f),$async$Jw)
case 5:w=6
return B.b(t.RF(),$async$Jw)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jw,v)},
a3J(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3J=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eHD(t))
w=3
return B.b(C.bEV(),$async$a3J)
case 3:s=e
t.m(new C.eHE(t))
if(s==null||J.cr(s)){w=1
break}w=4
return B.b(t.a.bjG(s),$async$a3J)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gI(s)
q=q.gI(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3J,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.df:A.bO,k=o.gaby().length!==0,j=B.ap(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bm.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ad:A.am,n,n,n,n),n,n,n,new C.eHH(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.Q,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.AA],h),A.m,n,A.e,A.i,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bm.j(0.35),A.eY,24)],x.V)
u=B.ap(n,B.X(A.qE,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.A(B.a([B.p(n,D.bZG,A.f,n,n,new B.o(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bKf],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hb(B.aA(A.c5,D.fdG,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcjy(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a0,n,A.ac,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a3A,A.n),n,n,n,n,E.a0k,n,n,1/0),A.dV,o.azn(m,"What to transfer"),A.af,B.A(B.a([B.E(o.aZN(A.qK,m,new C.eHI(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aZN(D.bP8,m,new C.eHJ(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.azn(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.n(16)
s=B.L(m?A.bB:A.aO,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.am,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.eHK(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.n8)
w.push(o.azn(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.arZ(A.aJ,k,!0,A.jI,m,o.r,o.gcdA(),"Scan on another device","Show QR"),1),A.at,B.E(o.aOu(A.ko,!0,A.jn,m,o.gcvM(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bCI(A.aY,k,A.hV,m,o.r,o.gcdx(),"Download .json","Backup file"),1),A.at,B.E(o.aOu(A.ay,!0,AB.zl,m,o.gcI0(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bm.j(m?0.12:0.08)
u=B.n(16)
t=B.L(A.bm.j(0.28),A.r,1)
s=B.X(A.lN,A.bm.j(0.9),n,n,n,18)
r=o.gaQt()
q=o.gb8q()
p=o.gb8q()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.A(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bu,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Og,i,n),B.E(B.cl(w,n,n,D.bDF,n,n,A.ai,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,U.XH,A.f,A.dN,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a0,n,A.ac,A.t,j,n),n,!1,!1,n,n)},
agS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ipn(s,t.d,t.e),$async$agS)
case 2:return B.h(null,v)}})
return B.i($async$agS,v)},
azn(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bm,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.am,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZN(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.av:A.c
if(g)w=A.bm
else w=e?A.bB:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bm.j(0.2),A.cA,14)],x.V):s
u=A.bm.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bm,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.Q,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aO(!1,r,!0,B.eI(new B.D(A.bE,B.x(B.a([t,A.X,u,A.bG,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNl(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.av:A.c,m=B.n(16)
if(p)w=A.bm
else w=e?A.bB:A.aO
w=B.L(w,A.r,p?2:1)
v=B.p(q,D.bZS,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a6,A.a9,A.x,B.a([A.bm,A.bm.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.Q,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.am,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ea:A.pl
if(p)r=A.bm
else r=e?A.aV:A.dq
return new B.D(A.cw,B.aJ(!1,A.a3,!0,q,B.aO(!1,o,!0,B.p(q,B.A(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eHx(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
arZ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bB:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rQ,s,s,s)],t)
if(i)u.push(B.ap(s,B.p(s,D.arl,A.f,s,s,D.b6W,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.Q,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aO(!1,p,!0,B.eI(new B.D(E.a_Y,B.x(B.a([new B.an(A.a0,s,A.ac,A.f,u,s),A.af,v,A.bG,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.am,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOu(d,e,f,g,h,i,j){return this.arZ(d,e,!1,f,g,!1,h,i,j)},
bCI(d,e,f,g,h,i,j,k){return this.arZ(d,e,!1,f,g,h,i,j,k)}}
C.X2.prototype={
S(){return new C.bmx()}}
C.bmx.prototype={
Y(){this.a3()
this.afE()},
afE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fT3(null,A.d.gH(m),k,r.a.f):C.fT3(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kJ(A.d.gH(n).w))C.fSP(A.d.gH(r.a.d),D.dkB)
n=r.a
m=n.c
n=C.imj(n.d)
w=7
return B.b(C.fT2(p,C.imo(r.a.d),n,m,q),$async$afE)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eHL(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.R(d).ax.a===A.J,h=i?A.df:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eHN())
v=B.aG(j,j,j,j,B.X(A.eM,i?A.ad:A.am,j,j,j,18),j,j,j,new C.eHO(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.Q,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.AA],u),A.m,j,A.e,A.i,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dg,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.R,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a3A,A.n),j,j,j,j,E.a0k,j,j,1/0)
q=B.n(24)
s=B.L(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vg,A.K,j,j))
else if(k.d==null)r.push(D.eqh)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fKJ,A.an,B.aA(j,B.p(j,B.A(B.a([D.c0p,A.at,B.d(m,j,j,j,j,j,j,D.fwD,j,j,j)],u),A.m,j,A.e,A.O,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c5k,A.n),j,j,j,j,A3.am_,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eHP(k,d),j,j,j,j,j,j,!1,A.a4),A.R,D.fPa,A.aC],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.L(A.bB,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q7(j,j,!1,l,j,!0,!0,j,!1,D.bux),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aC)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hy,A.K,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Og,v,j),B.E(B.ch(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c7h,A.n),j,j,j,j,A.uv,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.amj,j,j,A.ai),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aFW.prototype={
S(){return new C.aFX(new B.au(A.au,$.aw()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aFX.prototype={
Y(){var w=this
w.a3()
w.e.aV(0,new C.eBf(w))
$.aW.x1$.push(new C.eBg(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a2()},
b1C(){var w,v=this.c
v.toString
w=C.z8(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eP,x.w).w,i=B.n(28),h=B.L(A.bm.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bm.j(0.28),A.vj,36),D.aem],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bWN,A.f,k,k,new B.o(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fHK,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b7m,k,k,k,k,A.yJ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.Q
o=new B.aP(14,14)
if(q)n=A.bm
else n=r?A.bm.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bm.j(0.28),A.I,12)],g):k
t.push(new B.by(1,A.bc,B.cV(A.A,B.d(p,k,k,k,k,k,k,D.fpX,k,k,k),k,k,A.b6,new B.o(s,k,new B.bG(m,m,m,m),new B.bg(o,o,o,o),n,k,A.n),A.h8,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.Eu)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.i,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c3d,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uM(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C_(5,k),new C.bx5()],x.aS),k,k,A.aUh,k,5,k,1,k,k,!1,"\u2022",k,new C.eBb(l),k,new C.eBc(l),k,!1,k,k,!1,k,!0,k,A.ab,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mu,k,k,k,k),0),0,0,0)],a1)
d=C.z8(w.a.a.toUpperCase())==null?k:l.gcdB()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cR(Af.LK,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bEa,B.x(B.a([new B.an(A.a0,k,A.ac,A.t,g,k),A.X,D.fG2,A.by,new B.a5(1/0,50,B.bH(D.fXa,k,d,B.bn(A.bm,A.bp,A.am,k,A.c,k,k,k,new B.b9(B.n(16),A.a1),k,k,k)),k),A.an,B.bM(!1,A.nV,k,k,!0,k,k,k,new C.eBd(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.O,0,A.p),A.aq),A.f,k,k,new B.o(A.df,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bx5.prototype={
oX(d,e){var w=e.a.toUpperCase()
return e.cOz(B.hg(A.bz,w.length),w)}}
C.asE.prototype={
S(){return new C.aG_(B.zO(A.Ny,A.o0,A.v0))}}
C.aG_.prototype={
t(){this.d.t()
this.a2()},
b1B(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iZ(w,d)},
abt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h0X(s),$async$abt)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1B("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abt,v)},
cdz(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.imm(w[u])
if(t!=null){this.b1B(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wL,s,s,s,t.gbRL(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eG(B.a([r,B.aG(s,s,s,s,B.X(q?A.uI:An.Pe,s,s,s,s,s),s,s,s,new C.eHR(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.df,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fYo,s,s,s,1,s,!0)
r=B.zN(t.d,A.bZ,t.gcdy())
w=B.n(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.L(A.bm,A.r,3),w,B.a([new B.ac(2,A.G,A.bm.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c5(p,A.w,new B.an(A.a0,s,A.b4,A.t,B.a([r,w,B.ap(32,B.p(s,D.fLQ,A.f,s,s,new B.o(v,s,B.L(A.bm.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxj.prototype={
B(d){var w=null,v=B.n(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.p(w,B.x(B.a([B.p(w,H.ar0,A.f,w,w,D.b75,w,56,w,w,w,w,w,56),A.aR,D.fY4,A.an,new B.k_(this.c,new C.fiv(),w,w,x.cI),A.aR,new B.k_(this.d,new C.fiw(),w,w,x.cl),A.af,D.fY2],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,Af.LK,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,K.a0q,D.bEO,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8F.prototype={
S(){return new C.bmg(A.bD)},
gd1(){return this.c}}
C.bmg.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a0_()
w.d=B.de(A.fF,new C.epv(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a0_(){return this.cs5()},
cs5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ept(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bE(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ckP(p.c),$async$a0_)
case 6:r=e
q.a=r==null?A.bD:r
case 4:if(t.c==null){w=1
break}t.m(new C.epu(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0_,v)},
bTR(d){var w,v,u=d.a,t=A.o.aq(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aq(u,6e7)%60
v=A.o.aq(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bL
w=s.e.a
v=A.o.aq(w,6e7)<30&&A.o.aq(w,36e8)<999?A.ax:A.c4
w=v.j(0.14)
u=B.n(14)
t=B.L(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.X(A.Hi,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bTR(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Aa.al5,A.iu,r,r,1/0)}}
C.a9y.prototype={
nv(){var w,v,u,t=this
t.xU()
w=t.cx
v=t.c
w.bu0(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qd(B.H(["/S",D.eu0,"/URI",new B.rT(B.XD(w.as),A.vn,!0)],x.N,u),u))}}
C.a9z.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b4L.prototype={
bBH(d,e,f,g,h,i,j,k,l,m){var w=B.ey([D.esj],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcS3(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k5(w,new C.coJ(),B.a4(w).k("k5<cg.E,F>")).f1(0,new C.coK())},
aES(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tV(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jp(d.a,d.b))
s.n(0,"/Border",B.tV(H.at3))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcS3()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qd(w,x.Y))}}
C.coL.prototype={}
C.a3Z.prototype={}
C.aje.prototype={}
C.aSY.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.My(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bj0(w)
u=x.N
t=x.Y
s=new C.coL(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bBH(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qd(B.H(["/Type",D.etZ],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9y(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayi.prototype={}
C.aUr.prototype={
fV(d){var w,v,u,t,s=this
s.lA(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eg(u.a,u.b,0,1)
u=d.b
u.it()
t=s.a
t.toString
u.LG(t)
u.Tl(0)
u.pl(0,v)
w.fV(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(lY)","P(i3)","~()","P(eN)","P(oG)","P(lY)","~(i3)","P(eN,eN)","KF(Z)","P(o4)","P(ls)","aB<P>()","F(F,i3)","a8<m,@>(i3)","ai<A6>()","m(o4)","P(a8W)","m(lY)","m(wq)","P(Fl)","F(i3,i3)","m(eN)","v(eN)","cL(eN)","v(hF)","~(hF)","eN(v7,I,I,I,I,F{fx:m,key:m,rotation:I})","eN(m,I,F)","F(oG,oG)","P(A6)","P(m,ai<A6>)","a8<m,@>(oG)","o4()","ZH(Z)","eN(m,I,I,I,I,I{align:qi,anim:hF,bullets:P,color:F?,delay:F,fx:m,key:m,style:Iq,weight:nS})","a2_(Z)","eN(m,I,I,I,I{anim:hF,delay:F,fx:m,key:m})","aB<~>(oG)","P(mL)","ZF(Z)","a1v(Z)","a1u(Z)","Qh(Z)","a_S(Z)","eN(v7,I,I,I,I,F,m,m{anim:hF,delay:F,rotation:I,stroke:F,strokeWidth:I})","eN(m,I,I,I,I,I,m,m,F)","eN(I,I,m,F{size:I})","v(rH,I,I)","ls()","oG(a8<@,@>)","~(uY)","Fl()","fi(eN)","v(ja)","a_p(Z)","~(Fc)","a_K(Z)","F(eN,eN)","eN(eN)","a8<m,@>(eN)","eN(a8<@,@>)","lY(lY)","a8<m,@>(lY)","lY(a8<@,@>)","P(jW)","jW()","m(i3)","~(ai<oG>)","V(ai<i3>)","V(i3)","ai<i3>(m?)","adE(Z,F)","~(P(eN,eN))","aei(Z)","afY(Z,F)","u(lY,P)","WQ(Z)","ael(Z)","WR(Z)","~(mP)","i3(i3)","I(eN)","a0Z(Z)","a0B(Z)","i3()","ai<FI>()","aB<~>(ai<i3>)","v(bA<F,i3>)","D(jW)","D(Fl)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(ml)","ai<jC<mP>>(Z)","jC<mP>(mP)","i3(a8<@,@>)","X1(Z)","eN(m,I,I,I,I,I,F{align:qi,style:Iq,weight:nS})","X2(Z)","v(i3)","~(me)","Jx(Z,lY,v?)","F(a9z)","aB<ai<a8<m,@>>?>()","m(m)","aB<A5>({paper:m?,photo:dK?,request:m,template!lv})","aB<a8O>({doc!A5,history:ai<+(m,m)>,instruction!m,photo:dK?,template!lv})","aef(Z)"])
C.cO_.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:58}
C.cO0.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:69}
C.cO1.prototype={
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
$S:69}
C.cO2.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTk.prototype={
$1(d){return J.eD(A.dM.gaU(d),d.byteOffset,d.byteLength)},
$S:1689}
C.fF9.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iT(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iT(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iT(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iT(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1690}
C.c3g.prototype={
$1(d){return B.a3(d,x.N,x.z)},
$S:30}
C.c3h.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:43}
C.c3j.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fW_.prototype={
$1(d){return new C.a2_(this.a,this.b,C.ine(),null)},
$S:z+36}
C.fgY.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fh1.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fh2.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fh3.prototype={
$0(){var w,v,u=this.a
u.r=!1
w=this.b
v=this.c.length
if(w===v){v=w===1?"":"s"
u.x="Saved "+w+" presentation"+v+" to the database."
u.y=!1
u.d.a9(0)
u.w=1}else if(w===0){u.x="Could not save. Check the connection and try again."
u.y=!0}else{u.x="Saved "+w+" of "+v+". Try the rest again."
u.y=!0}},
$S:0}
C.fgZ.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fh_.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fh0.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fgT.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hh,w,w,w)
return B.eg(B.a([B.bM(!1,E.aWn,w,w,!0,w,w,w,new C.fgR(d),w,w),B.bM(!1,D.fJf,w,w,!0,w,w,w,new C.fgS(d),w,w)],x.p),w,w,D.ZL,v,w,w,w,w,D.fYH,w)},
$S:18}
C.fgR.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fgS.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fgU.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fgV.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fh7.prototype={
$0(){var w=this.a
return w.m(new C.fh6(w,this.b))},
$S:0}
C.fh6.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fgX.prototype={
$0(){var w=this.a
return w.m(new C.fgW(w,this.b,this.c))},
$S:0}
C.fgW.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fh4.prototype={
$0(){return this.a.a27(this.b)},
$S:0}
C.fh5.prototype={
$0(){return this.a.PI(0,this.b)},
$S:0}
C.fha.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fhb.prototype={
$0(){var w=this.a
return w.m(new C.fh9(w,this.b))},
$S:0}
C.fh9.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fh8(),B.U(w).k("N<1,m>")))}},
$S:0}
C.fh8.prototype={
$1(d){return d.a},
$S:z+67}
C.foq.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a3(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hma(w.b(t.h(0,"doc"))?B.a3(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oG(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fos.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fIk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcE()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fIi.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fIj.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fVu.prototype={
$1(d){return d.ak()},
$S:z+32}
C.fEO.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fWl.prototype={
$1(d){return new C.ZH(this.a,null)},
$S:z+34}
C.cPm.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPo.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPr.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPs.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPq())},
$S:12}
C.cPq.prototype={
$0(){},
$S:0}
C.cPt.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2Z(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPp(r))
if(p<0)q.c4(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ait(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:306}
C.cPp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPu.prototype={
$1(d){},
$S:31}
C.cPn.prototype={
$1(d){return new C.ZF(this.b,this.a.gcC_(),null)},
$S:z+40}
C.cPv.prototype={
$1(d){return D.hqh},
$S:z+43}
C.cPi.prototype={
$1(d){var w=null,v=B.n(24),u=B.L(D.Zj,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.p(w,B.x(B.a([new B.D(D.bEA,B.x(B.a([B.p(w,D.bTW,A.f,w,w,new B.o(A.ax.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fIa,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fvy,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dV,new B.D(A.qx,B.A(B.a([B.E(B.dU(D.fPc,new C.cPg(d),B.di(w,w,w,w,w,w,w,w,w,E.nt,w,w,A.cn,w,new B.b9(B.n(14),A.a1),D.b4n,w,w,w,w)),1),A.at,B.E(B.bH(D.fVp,w,new C.cPh(d),B.bn(A.bC,w,w,w,w,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.O,0,A.p),A.f,w,A.xL,new B.o(D.ag9,w,u,v,D.d8D,w,A.n),w,w,w,K.a0q,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1691}
C.cPg.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPh.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPj.prototype={
$0(){return J.nM(this.a.d,new C.cPf(this.b))},
$S:0}
C.cPf.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPe.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.L(D.Zj,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bZ_,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.asB,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aW2,t,t,t),A.bG,D.fVk],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aC],q)
for(w=0;w<2;++w){v={}
u=D.dwe[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aze(u[1],u[2],u[3],new C.cPc(v,d),!1,t))}q.push(A.an)
q.push(D.byv)
q.push(A.an)
q.push(new C.aze(A.ef,"Delete book","Remove it from this device",new C.cPd(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.O,0,A.p),A.f,t,t,new B.o(D.ag9,t,r,s,t,t,A.n),t,t,t,A.uq,E.a03,t,t,t),!0,!1,A.ag,!0,!0)},
$S:25}
C.cPc.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPd.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPl.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLn,12)],x.V)
return B.dP(B.eK(A.A,e,B.p(w,B.bx(B.n(4),new B.a5(62,95.81818181818181,B.eE(A.A,F.apn(d),A.f,A.dC),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.q(f,0))},
$S:z+48}
C.cPk.prototype={
$0(){return this.a.c7J()},
$S:0}
C.cPb.prototype={
$0(){return this.a.b0_(0,this.b)},
$S:0}
C.cPa.prototype={
$0(){return this.a.DK(this.b)},
$S:0}
C.cP9.prototype={
$0(){return this.a.DK(this.b)},
$S:0}
C.cPw.prototype={
$2(d,e){var w=this.a
return w.bGi(J.t(w.d,e))},
$S:41}
C.cOD.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bk()},
$S:0}
C.cOC.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b39("Page "+(v.length+1),"",""))},
$S:0}
C.cOF.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cON.prototype={
$0(){},
$S:0}
C.cOO.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cOG.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cO.gcu().aM(this.c)},
$S:0}
C.cOE.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOI.prototype={
$0(){return this.a.Rc(this.b)},
$S:0}
C.cOJ.prototype={
$0(){return this.a.Rc(this.b)},
$S:0}
C.cOK.prototype={
$0(){var w=this.a
w.m(new C.cOH(this.b))
w.Ez()},
$S:0}
C.cOH.prototype={
$0(){return this.a.c=""},
$S:0}
C.cOM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cOL(w,d))
w.Ez()},
$S:z+51}
C.cOL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOT.prototype={
$2(d,e){if(d)this.a.Bk()},
$S:130}
C.cOP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bk(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fim)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cOQ.prototype={
$0(){return this.a.aZU(this.b,-1)},
$S:0}
C.cOR.prototype={
$0(){return this.a.aZU(this.b,1)},
$S:0}
C.cOS.prototype={
$0(){return this.a.c94(0,this.b)},
$S:0}
C.fMS.prototype={
$1(d){return C.hwg()},
$S:44}
C.fMT.prototype={
$1(d){return null},
$S:31}
C.fsK.prototype={
$1(d){return null},
$S:31}
C.fNR.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:318}
C.fNQ.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:209}
C.fNX.prototype={
$1(d){var w=this.a
return C.hec(d)===w||C.hB3(d)===w},
$S:z+4}
C.frL.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.cf1.prototype={
$1(d){return d.length!==0},
$S:3}
C.fMQ.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fMR.prototype={
$1(d){return C.fPA(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fHH.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fPP,A.R,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HU,D.fJT,new C.fHF(d),B.bn(A.c4,w,w,w,A.w,w,A.cn,w,w,w,w,w)),A.X,B.es(A.uV,D.fR8,new C.fHG(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fHF.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHG.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHI.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,D.fFT,w,w,!0,w,w,w,new C.fHD(d),w,w),B.bH(D.fXI,w,new C.fHE(d),w)],x.p),w,w,w,D.fZF,w,w,w,w,D.fFM,w)},
$S:18}
C.fHD.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fHE.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ekM.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ekK.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ekL.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ekN.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ekO.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fNW.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:76}
C.fNS.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a6,w,w,B.BP(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1692}
C.fNU.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fwS,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:135}
C.fNV.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.iq,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.iq,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.q(-d*0.38,0))],x.p),A.m,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1693}
C.fNT.prototype={
$2$female$size(d,e){var w=null,v=d?D.ail:this.a,u=B.L(A.iq,A.r,1),t=e*0.32,s=B.ap(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ac,A.t,B.a([s,B.ap(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.agp,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1694}
C.fZO.prototype={
$1(d){return new C.aef(this.a,this.b,null)},
$S:z+108}
C.e7h.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bv7:A.MY,q=B.L(D.jy.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c4.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.ark,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jy.j(0.35),A.er,10)],x.V),D.c7V,A.n),t,t,t,t,A.yz,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(O.a0g,B.x(B.a([p,A.aC,B.A(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jy,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fw3,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTl,new C.e7g(w,this.c),v,D.alU,t,A.ai,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mA,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:121}
C.e7g.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adE(w,new C.e7f(this.b,w),null)},
$S:z+72}
C.e7f.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fHL.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fHM.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fTo,A.R,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HU,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHJ(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fHK(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fHJ.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHK.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHP.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fHQ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fGX,A.R,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HU,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHN(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fHO(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fHN.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHO.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHT.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fHU.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fNB,A.R,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HU,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHR(d),B.bn(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fHS(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fHR.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHS.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h0g.prototype={
$1(d){return D.hvu},
$S:z+74}
C.epy.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.blK:A.MY,s=B.L(A.aB.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aB.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.c0m,A.f,v,v,new B.o(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c4.j(0.35),A.er,10)],x.V),D.asG,A.n),v,v,v,v,A.yz,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(O.a0g,B.x(B.a([r,A.aC,B.A(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.MU,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.ftu,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTl,new C.epx(this.b),19,D.alU,v,A.ai,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mA,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.epx.prototype={
$2(d,e){var w=D.Sz[e]
return new C.afY(w,new C.epw(this.a,w),null)},
$S:z+75}
C.epw.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fPE.prototype={
$0(){return B.hd8(C.iaB(this.a))},
$S:334}
C.fPD.prototype={
$0(){var w=C.hev(this.a)
return"data:image/png;base64,"+A.cO.gcu().aM(w)},
$S:22}
C.fq1.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jq(d,e),new B.jq(w,e+v),new B.jq(d+f*14,e),new B.jq(w,e-v)],x.J)
B.a2V(this.a,C.fE(4291404327),v)},
$S:695}
C.h0r.prototype={
$1(d){return new C.WQ(this.a,null)},
$S:z+77}
C.esv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esu())},
$S:28}
C.esu.prototype={
$0(){},
$S:0}
C.esw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.est(w,d))},
$S:1696}
C.est.prototype={
$0(){return this.a.x=J.eQ(A.dM.gaU(this.b))},
$S:0}
C.esx.prototype={
$1(d){},
$S:31}
C.es7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.es3.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ese.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.esf.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eEJ)},
$S:0}
C.esg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.es9.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cd)},
$S:0}
C.esa.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.esb.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.esc.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esd.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dW,A.iI)}},
$S:7}
C.es8.prototype={
$0(){var w=this.a,v=w.z,u=C.fQh(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cNI(C.fQh(t))},
$S:0}
C.es5.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.es6.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esm.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.esn.prototype={
$0(){var w=this.a
return w.m(new C.esl(w))},
$S:0}
C.esl.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eso.prototype={
$0(){var w=this.a
return w.m(new C.esk(w,this.b))},
$S:0}
C.esk.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.esp.prototype={
$1(d){var w=this.a
return w.m(new C.esj(w))},
$S:9}
C.esj.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.esq.prototype={
$1(d){var w=this.a
return w.m(new C.esi(w))},
$S:9}
C.esi.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.esr.prototype={
$0(){var w=this.a
return w.m(new C.esh(w,this.b))},
$S:0}
C.esh.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.ess.prototype={
$1(d){return this.a.a_M()},
$S:2}
C.es4.prototype={
$0(){return this.a.ccR(this.b)},
$S:0}
C.ciH.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:341}
C.ciF.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ciG.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPe.prototype={
boi(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTj(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.J)(e),++t){s=e[t]
r.cJZ($.rd().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boi(d,e)},
$S:1697}
C.fNw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNy.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:76}
C.fNx.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fv(t,A.cu,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r6,A.bW,t,A.dD,A.bX)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fpB.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fpC(),B.U(w).k("Y<1>")).gI(0)},
$S:256}
C.fpC.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpz.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.fpA.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.ciI.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCc()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.heb(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.haT(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gclc(),"\n\n")
d=B.fv(a6,A.cu,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aft(k,q,1.28),j),A.r6,A.bW,a6,A.dD,A.bX)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.heb(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.haT(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aft(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bc,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCb(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:430}
C.ciJ.prototype={
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
n=o.gaCc()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.heb(f,new B.G(!0,e,a5,i,a5,a5,h,A.cT,A.bq,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.haT(g.length===0?B.a([a6],n):g,l))break}a1=o.aft(i,h,1.28)
a2=new C.ciK(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kf,new B.a5(v,a5,a4.f,a5),A.Kf,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bH_,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bc,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r6,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCb(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:146}
C.ciK.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r6,w,w),w)},
$S:1698}
C.h0u.prototype={
$1(d){return new C.WR(this.a,this.b,null)},
$S:z+79}
C.eth.prototype={
$1(d){return d.lb()},
$S:1699}
C.eti.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etg(w,d))},
$S:1700}
C.etg.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.et4.prototype={
$0(){return this.a.y=!0},
$S:0}
C.et5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etb.prototype={
$0(){return B.a6(this.a,!1).eO()},
$S:0}
C.etc.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bF,A.r,2.5)
return B.aA(w,B.p(w,B.b4(w,w,w,new C.bdR(u,v.gazf(),w),A.fJ),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.et9(v),new C.eta(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.et9.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:271}
C.eta.prototype={
$1(d){var w=this.a
w.m(new C.et6(w,d,this.b,this.c))},
$S:211}
C.et6.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.F(s.x*r.d,1,6)
w=s.gazf()
r=r.a
v=t.c
u=t.d
s.r=A.j.F(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.F(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.etd.prototype={
$1(d){var w=this.a
return w.m(new C.et8(w,this.b))},
$S:9}
C.et8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ete.prototype={
$1(d){var w=this.a
return w.m(new C.et7(w,d))},
$S:6}
C.et7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etf.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h0K.prototype={
$1(d){return D.hyh},
$S:z+83}
C.f29.prototype={
$1(d){return this.a.Zo()},
$S:7}
C.f11.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cO.gcu().aM(v)},
$S:0}
C.f1p.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f1z.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f0L.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0M.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f0J.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0K.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1i.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f1j(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jk(B.rY(q>0.2?F.bWL(r,new B.Ek(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jk(B.da(B.rY(F.bWL(s.$1(!0),new B.Ek(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bJ>0){s=B.b0(s).j(t.bJ)
w=t.bf
w.toString
q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(D.b1L,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi))}s=t.aL
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(D.b1w,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi))
s=t.aR
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b1,A.b7,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7b,v),A.n),A.bi))
if(t.aI>0){s=t.k1
q.push(B.ap(v,B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b1,A.b7,A.x,B.a([A.w.j(0),A.w.j(t.aI),A.w.j(t.aI),A.w.j(0)],x.O),D.diT,v),A.n),A.bi),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c_(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dfK,v),A.n),A.bi))
t=t.aH
if(t>0)q.push(B.b4(v,v,v,new C.bhs(t,v),A.az))
return new B.an(A.a0,v,A.b4,A.t,q,v)},
$S:68}
C.f1j.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fR(r.b,A.A,q,q,A.cj,A.bZ,!0,q,!1,q,q),o=r.a,n=o.aZw(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
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
t=o.bG
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eK(A.A,l,B.fw(A.A,new B.BB(new B.uH(q,q,n,A.xW),p,q),q,B.wd(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.q(-m*r.d*u/2,-t*r.c*u/2))},
$S:558}
C.f1v.prototype={
$0(){return this.a.m(new C.f1u(this.b,this.c))},
$S:0}
C.f1u.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1w.prototype={
$1(d){return this.a.m(new C.f1t(this.b,d))},
$S:6}
C.f1t.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1y.prototype={
$0(){return this.a.m(new C.f1x(this.b,this.c))},
$S:0}
C.f1x.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0B.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f0C.prototype={
$1(d){var w=this.a
return w.m(w.gcDn())},
$S:2}
C.f0D.prototype={
$1(d){return this.a.m(new C.f0A())},
$S:2}
C.f0A.prototype={
$0(){},
$S:0}
C.f0E.prototype={
$0(){var w=this.a
return w.m(new C.f0z(w,this.b))},
$S:0}
C.f0z.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f0G.prototype={
$2(d,e){return A.at},
$S:36}
C.f0F.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bB
q=B.L(q,A.r,t?2.5:1)
r=B.cV(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b6,new B.o(w,w,q,s,w,new B.a9(A.b1,A.b7,A.x,r,w,w),A.n),A.h8,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fK,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0y(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f0y.prototype={
$0(){var w=this.a
return w.m(new C.f0v(w,this.b))},
$S:0}
C.f0v.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0H.prototype={
$1(d){var w=this.a
return w.m(new C.f0x(w,d))},
$S:9}
C.f0x.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f0I.prototype={
$1(d){var w=this.a
return w.m(new C.f0w(w,d))},
$S:9}
C.f0w.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f1Z.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f25.prototype={
$1(d){var w=this.a
return w.m(new C.f26(w,d))},
$S:29}
C.f26.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dY(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f27.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:177}
C.f2_.prototype={
$0(){var w=this.a
return w.m(new C.f1Y(w,this.b))},
$S:0}
C.f1Y.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f20.prototype={
$0(){var w=this.a
return w.m(new C.f1X(w,this.b))},
$S:0}
C.f1X.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f21.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f1W(v,w.b,w.c,w.d))},
$S:0}
C.f1W.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f22.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtc(v))},
$S:0}
C.f23.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f24.prototype={
$0(){var w=this.a
return w.m(new C.f1V(w))},
$S:0}
C.f1V.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f1I.prototype={
$1(d){return d.a===this.a.dy},
$S:215}
C.f1J.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aAU[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azj(new B.nn(new B.bg(n,n,n,n),A.aq,new B.l3(new B.o(j,j,j,j,j,new B.a9(A.a6,A.a9,A.x,m,j,j),A.n),A.bi,new C.b0Y(l,B.b0(k==null?v.w.x:k),A.j.F(w,12,26),j),j),j),u,q.b,o===p,new C.f1H(r,v),2,i))}return B.bW(A.bH,h,A.bt,j,7,7)},
$S:162}
C.f1H.prototype={
$0(){var w=this.b
return w.m(new C.f1C(this.a,w))},
$S:0}
C.f1C.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f1K.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:158}
C.f1N.prototype={
$0(){var w=this.a
return w.m(new C.f1G(w))},
$S:0}
C.f1G.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f1O.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f1P.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f1Q.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f1R.prototype={
$0(){var w=this.a
return w.m(new C.f1F(w))},
$S:0}
C.f1F.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f1S.prototype={
$0(){var w=this.a
return w.m(new C.f1E(w))},
$S:0}
C.f1E.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f1T.prototype={
$0(){var w=this.b
return w.m(new C.f1D(this.a,w))},
$S:0}
C.f1D.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f1U.prototype={
$1(d){return this.a.fx=d},
$S:158}
C.f1L.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f1M.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f1m.prototype={
$0(){var w=this.a
return w.m(new C.f1l(w))},
$S:0}
C.f1l.prototype={
$0(){var w=this.a
w.p4=null
w.b5Q()},
$S:0}
C.f1n.prototype={
$0(){var w=this.a
return w.m(new C.f1k(w,this.b))},
$S:0}
C.f1k.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1o.prototype={
$0(){var w=this.a
return w.m(w.gctK())},
$S:0}
C.f1e.prototype={
$0(){var w=this.a
return w.m(new C.f1d(w))},
$S:0}
C.f1d.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f1f.prototype={
$0(){var w=this.a
return w.m(new C.f1c(w))},
$S:0}
C.f1c.prototype={
$0(){var w=this.a
w.aI=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f1g.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgb[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azj(new B.nn(new B.bg(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BB(new B.uH(o,o,v.aZw(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xW),B.fR(u,A.A,140,o,A.cj,A.bZ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f1b(v,s),3,n))}return B.bW(A.bH,m,A.bt,o,10,8)},
$S:162}
C.f1b.prototype={
$0(){var w=this.a
return w.m(new C.f1a(w,this.b))},
$S:0}
C.f1a.prototype={
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
C.f0T.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f0U.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f0V.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f0W.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f0X.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f0Y.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f0Z.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f1_.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.f10.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f0e.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f0f.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f0g.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f0h.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f0i.prototype={
$0(){var w=this.a
return w.m(new C.f0d(w))},
$S:0}
C.f0d.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f0j.prototype={
$1(d){return this.a.b7=d},
$S:158}
C.f0k.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f0N.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f0O.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f0P.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f0Q.prototype={
$1(d){return this.a.bf=d},
$S:158}
C.f0R.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.f0o.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f0p.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f0q.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.f0r.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f0s.prototype={
$0(){var w=this.a
return w.m(new C.f0n(w))},
$S:0}
C.f0n.prototype={
$0(){var w=this.a
return w.c9=A.j.E(w.c9+90+180,360)-180},
$S:0}
C.f0t.prototype={
$0(){var w=this.a
return w.m(new C.f0m(w))},
$S:0}
C.f0m.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f0u.prototype={
$0(){var w=this.a
return w.m(new C.f0l(w))},
$S:0}
C.f0l.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f1h.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iq0(v,w.p4)},
$S:0}
C.f19.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bvs:B.fR(v,A.A,w,w,A.cj,A.bZ,!1,w,!1,w,w)
return C.fNE(d.length===0?"rounded":d,u,e)},
$S:123}
C.f15.prototype={
$0(){var w=this.a
return w.m(new C.f14(w))},
$S:0}
C.f14.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f16.prototype={
$0(){var w=this.b
return w.m(new C.f13(this.a,w))},
$S:0}
C.f13.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f17.prototype={
$0(){var w=this.b
return w.m(new C.f12(this.a,w))},
$S:0}
C.f12.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f18.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.F(w.ay,0,1-d)
w.ch=A.j.F(w.ch,0,0.95)},
$S:6}
C.f1s.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b8.j(0.35),A.I,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cn8(),n.r))
l.push(new C.Jx(n.cAi(),!1,!1,t))
o=B.bR(0,B.bx(o,new B.em(new B.an(A.a0,t,A.b4,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.a0,t,A.ac,A.t,B.a([o,B.ap(t,B.aA(A.c5,B.c3(t,new B.o(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f1r(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:227}
C.f1r.prototype={
$1(d){var w=this.a
return w.m(new C.f1q(w,d,this.b,this.c))},
$S:19}
C.f1q.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.F(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.F(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f1B.prototype={
$0(){var w=this.a
return w.m(new C.f1A(w,this.b))},
$S:0}
C.f1A.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f0S.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f28.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1t(),B.E(B.at(w.b4t(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSq(),1),w.aOv()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.j.F(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1t(),new B.D(A.hE,B.at(s.b4t(u),t,t,t),t),B.E(s.aSq(),1),s.aOv()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:625}
C.fKV.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bCP(),null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cX,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bq,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,A.V)},
$S:z+98}
C.fKU.prototype={
$3(d,e,f){var w=this,v=C.bCP(),u=w.b?A.H:A.cC,t=w.c?A.cF:A.bq
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bj,4280172719,2,d,0,w.f,w.e,D.cq,D.cX,0.82,0.09,w.a)},
$S:z+28}
C.ckc.prototype={
$1(d){return B.w(d)},
$S:17}
C.fSE.prototype={
$0(){return this.a},
$S:z+15}
C.fxB.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fxC.prototype={
$2(d,e){return J.cr(e)},
$S:z+31}
C.fSG.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fSJ.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fSK.prototype={
$0(){return A.d.gH(D.wT)},
$S:z+33}
C.fSC.prototype={
$1(d){return d.a},
$S:z+16}
C.fSF.prototype={
$1(d){return d.a},
$S:z+16}
C.fQA.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fQB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQC.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fKZ.prototype={
$0(){return C.cD()},
$S:22}
C.fL1.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cq,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bj,4280172719,2,d,s,0,"",t,D.cX,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"","",A.bq,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"",j,A.bq,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,j,k,A.bq,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bq,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bq,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dk,!1,k,l,"",m,A.bq,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,null,0,"",k,A.bq,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,j,k,"",l,A.bq,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,k,0,l,m,A.bq,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,k,l,m,"",n,A.bq,A.a8)},
$S:z+35}
C.fL0.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cq,D.fg,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fL_.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cq,t=v?j:0
return C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bq,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bj,4280172719,2,"",t,0,"",u,D.lR,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qX,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fKY.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fNp.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hxh.c3(0,A.a.i(s.w).toLowerCase(),new C.fNn(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fNo(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bqA(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fNn.prototype={
$0(){return F.aPm(this.a.w)},
$S:199}
C.fNo.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBI("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:199}
C.fpv.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fpw.prototype={
$1(d){return d.a},
$S:z+18}
C.fpx.prototype={
$1(d){return d.b},
$S:z+19}
C.h0W.prototype={
$1(d){return D.hyx},
$S:z+41}
C.f8w.prototype={
$0(){return this.a.x=C.i1T(this.b,this.c.b)},
$S:0}
C.f8x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f8u.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:387}
C.f8v.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:387}
C.f8t.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.av,null,new C.f8o(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.ke,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f8p(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hDu(o,m.cOu(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f8q(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f8o.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f8s(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bbV,A.f,p,p,D.b6P,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.D8:D.Df,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fNE(v,i.b6s(h),u),p)))}t=B.kS(1,m,4,10,10,p,A.dU,!0)
if(!l)return B.bm(!0,new B.D(Ab.yG,t,p),!0,!1,A.ag,!0,!0)
s=new C.f8r(i,d)
m=B.aH(d,A.c_,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ic[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cR(new B.aZ(0,1/0,0,m.a.b*0.85),B.ch(B.x(B.a([D.fLZ,A.X,t,A.dV,D.f7i,A.aw,D.fX3,A.X,B.kS(1.15,l,3,10,10,p,A.dU,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yG,p,p,A.ai),p),!0,!1,A.ag,!0,!0)},
$S:25}
C.f8s.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b8.j(0.22):A.c.j(0.04),s=v?A.bs:A.dt
return B.aA(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hT,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f8n(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1704}
C.f8n.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f8r.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bN:A.bB
r=B.L(r,A.r,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.arQ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dx(!0,new C.Of(u.Ga(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8m(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:123}
C.f8m.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f8p.prototype={
$0(){var w=this.a
return w.w=w.w.Ga("")},
$S:0}
C.f8q.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8c.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f8d.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f8f.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f8g.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f8h.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f8i.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8e(w,d))},
$S:2}
C.f8e.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f8j.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f8K.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f8L.prototype={
$0(){var w=this.a
return w.m(new C.f8J(w))},
$S:0}
C.f8J.prototype={
$0(){return this.a.e=null},
$S:0}
C.f8M.prototype={
$0(){var w=this.a
return w.m(new C.f8I(w))},
$S:0}
C.f8I.prototype={
$0(){return this.a.x=null},
$S:0}
C.f8O.prototype={
$1(d){var w=this.a
return w.m(new C.f8H(w,d))},
$S:35}
C.f8H.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f8P.prototype={
$1(d){var w=this.a
return w.m(new C.f8G(w,d))},
$S:35}
C.f8G.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8Q.prototype={
$0(){var w=this.a
return w.m(new C.f8F(w))},
$S:0}
C.f8F.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f8R.prototype={
$1(d){var w=this.a
return w.m(new C.f8E(w,d))},
$S:35}
C.f8E.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f8S.prototype={
$1(d){var w=this.a
return w.m(new C.f8D(w,d))},
$S:35}
C.f8D.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f8T.prototype={
$0(){var w=this.a
return w.m(new C.f8C(w))},
$S:0}
C.f8C.prototype={
$0(){var w=this.a
return w.w=w.w.Ga("")},
$S:0}
C.f8U.prototype={
$0(){var w=this.a
return w.m(new C.f8B(w,this.b))},
$S:0}
C.f8B.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f8V.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSr(D.a5q[v]),null))
return B.bW(A.bH,t,A.bt,null,8,8)},
$S:162}
C.f8N.prototype={
$1(d){var w=this.a
return w.m(new C.f8A(w,d))},
$S:9}
C.f8A.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f8k.prototype={
$0(){var w=this.a
return w.m(new C.f8l(w,this.b,this.c))},
$S:0}
C.f8l.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f8z.prototype={
$0(){var w=this.a
return w.m(new C.f8y(w,this.b))},
$S:0}
C.f8y.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h0V.prototype={
$1(d){return new C.a1u(this.a,this.b,null)},
$S:z+42}
C.f85.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f86.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f87.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKI?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f88.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f89.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f84(w,d))},
$S:2}
C.f84.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f8a.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f8b.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bz,w.length),A.aP))},
$S:0}
C.fwS.prototype={
$1(d){return d.a===this.a},
$S:215}
C.eoY.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazk(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.d0I:D.diC
t=D.yk.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bR(0,B.b4(q,q,q,new C.bjK(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bTA(B.eK(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a6,A.a9,A.x,B.a([A.L,D.bjO.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.q(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a0,q,A.ac,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ea:A.mg,D.yk,q,q,q,20),A.aw,B.eE(A.A,B.o9(A.jQ,D.fFg,new C.eoX()),A.f,A.e2)],r),A.m,q,A.e,A.O,0,A.p),q,q,q),B.ap(q,B.p(q,D.fBI,A.f,q,q,new B.o(D.yk,q,q,B.n(6),q,q,A.n),q,q,q,q,P.amB,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.eoX.prototype={
$1(d){return D.c65.aG(0,d)},
$S:73}
C.fSL.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fSM.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:215}
C.fSN.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1705}
C.fSO.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fSH.prototype={
$1(d){return d.a},
$S:z+18}
C.fSI.prototype={
$1(d){return d.b},
$S:z+19}
C.h08.prototype={
$1(d){return new C.a_S(this.a,this.b,null)},
$S:z+44}
C.dsb.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsc.prototype={
$1(d){return d.a===this.a.gajM()},
$S:z+10}
C.dsd.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dsg.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dsh.prototype={
$0(){var w=this.a
return w.m(new C.dsf(w,this.b))},
$S:0}
C.dsf.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dsi.prototype={
$1(d){var w=this.a
return w.m(new C.dse(w,d))},
$S:9}
C.dse.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eoW.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1706}
C.flQ.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bq,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fg,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cq,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.flS.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bq,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bj,4280172719,2,d,l,0,"",D.n4,D.cX,g,e,f)},
$S:z+46}
C.flR.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xb(0,"twinkle")
w=t===D.bj?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n4,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.flP.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fM5.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fM6.prototype={
$0(){return A.d.gH(D.Il)},
$S:z+49}
C.fM7.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fnV.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fSd.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bj,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bj,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSe.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bj,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bj,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bj,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fH,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSf.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bj,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kc,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kc,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fH,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSq.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kc,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kc,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.kb,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bj,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSv.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.kb,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bj,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bj,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSw.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kc,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bj,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSx.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d_B[w]
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.bj,v,4294967295,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.La
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSy.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mK,A.dw,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.La
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSz.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bj,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.kb,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fH,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSA.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bj,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fH,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kc,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSB.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kc,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bj,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bj,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSg.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.kb,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.kb,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fSh.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.kb,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.kb,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.kb,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eX,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fSi.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bj,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bj,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kc,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.kb,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fSj.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bj,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.kb,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.kb,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fSk.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.lr,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.lr,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.lr,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.lr,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.lr,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSl.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kc,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eX,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSm.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mK,A.dw,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.La
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bj,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSn.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bq,A.aG,s,A.bk,null,D.fH,t,t,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.La
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bj,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bj,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSo.prototype={
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
C.fSp.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jb
$.jb=t+1
t=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bq,A.aG,r,A.bk,null,D.bj,4294967295,4280640491,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.La
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,t)
u=B.ar(A.d9,A.cr,w/2).l()
t=Date.now()
s=$.jb
$.jb=s+1
u=new C.eN("design_"+(""+1000*t+"_"+s),D.fg,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bq,A.aG,r,A.bk,null,D.bj,u,q,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.La
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bj,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.kb,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSr.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kc,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kc,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kc,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kc,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bj,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eX,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSs.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bj,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eX,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eX,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eX,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kc,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSt.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bj,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bj,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bj,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eX,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fH,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bq,A.aG,4279310375,A.bk,null,D.eX,16777215,t,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.La
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fSu.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kc,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kc,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bj,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fJW.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fJX.prototype={
$0(){return A.d.gH($.bGr())},
$S:z+52}
C.fwa.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fw9.prototype={
$1(d){return C.i9w(d,this.a,this.b)},
$S:z+53}
C.fSU.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wd(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUr(B.hZQ(A.vK,C.i9z(w.c,w.d,v,u),t)))},
$S:386}
C.e2w.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e2v.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.o(w,w,w,w,w,new B.c_(A.Lo,1.2,A.x,w,0,u.d,w,w),A.n),A.bi),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jk(new B.an(A.a0,w,A.b4,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgx(u.a,r,q,r),A.az),w),B.at(new B.k_(r,new C.e2u(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:327}
C.e2u.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aE(0,A.j.F(e/1.4,0,1)),p=A.j.F(e/0.9,0,1),o=A.j.F((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hR(B.fR(i,A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mF(e*0.8)),A.a7),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btp(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cT(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a6,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaN6(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.O,0,A.p),new B.q(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.O,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f7i.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.j.F(w-0.1,0,1),A.j.F(w,0,1),A.j.F(w+0.1,0,1),1],x.x),null).aG(0,d)},
$S:73}
C.ceD.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bN:A.bB
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i1.j(0.4),A.I,14)],x.V):v
w=B.cV(v,B.bx(B.n(12),d,A.aq),v,v,A.b6,new B.o(v,v,t,u,w,v,A.n),A.eK,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fK,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1707}
C.ceE.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ga(""))},
$S:0}
C.ceF.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dx(!0,new C.Of(v.Ga(u),!0,!1,null),null),d.b,new C.ceG(w,this.c,d),v.a===u)},
$S:z+54}
C.ceG.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hDu(u.b,t.c.Ga(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fZy.prototype={
$1(d){return new C.a_p(this.a,null)},
$S:z+55}
C.dhp.prototype={
$0(){var w=this.a
w.d=w.gwe().beJ("data:"+this.b+";base64,"+A.cO.gcu().aM(this.c));++w.r},
$S:0}
C.dhu.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhv.prototype={
$0(){var w=this.a
return w.m(new C.dht(w))},
$S:0}
C.dht.prototype={
$0(){return this.a.r++},
$S:0}
C.dhw.prototype={
$1(d){var w=this.a
return w.m(new C.dhs(w,d))},
$S:2}
C.dhs.prototype={
$0(){var w=this.a
return w.d=w.gwe().aFM(this.b)},
$S:0}
C.dhx.prototype={
$0(){var w=this.a
return w.m(new C.dhr(w))},
$S:0}
C.dhr.prototype={
$0(){var w=this.a
return w.d=w.gwe().beJ("")},
$S:0}
C.dhy.prototype={
$1(d){var w=this.a
return w.m(new C.dhq(w,d))},
$S:2}
C.dhq.prototype={
$0(){var w=this.a
return w.d=w.gwe().beP(this.b)},
$S:0}
C.dhz.prototype={
$0(){var w=this.a
w=w.gwe().beP(w.gazl().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fZx.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fZw(w),null)},
$S:21}
C.fZw.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cR(new B.aZ(0,1/0,0,B.aH(d,A.c_,x.w).w.a.b*0.85),B.ch(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aC,D.fU3,A.aw,D.fUj,A.aC,new C.b0V(v.a,new C.fZv(v,e,d),!0,w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ai),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7n,w,w,w,w,A.O0,w,w,w)},
$S:164}
C.fZv.prototype={
$1(d){this.b.$1(new C.fZu(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fZu.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h0U.prototype={
$1(d){return D.hsv},
$S:z+57}
C.dod.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.doe.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dof.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fPx.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.F(w-0.12,0,1),A.j.F(w,0,1),A.j.F(w+0.12,0,1)],x.x),null).aG(0,d)},
$S:73}
C.dh6.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ah,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c4(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c4(w,q+p,w,q+p*1.2))
u.D(new B.DI(B.bX(new B.q(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.q(w,o),2.2,p)},
$S:378}
C.fPB.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+58}
C.fHX.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fHY.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fC_,A.R,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HU,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHV(d),B.bn(A.c4,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VQ,new C.fHW(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cn,w,w,R.xJ,w,w,w,w))],x.p),A.al,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:25}
C.fHV.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHW.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cka.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.ckb.prototype={
$1(d){return d.ak()},
$S:z+60}
C.ck9.prototype={
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
u=C.i57(b2.h(0,"type"))
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
n=A.aCZ[A.o.F(b4,0,8)]
m=D.d2L[A.o.F(w,0,1)]
l=C.i8V(b2.h(0,"decoration"))
k=B.aI(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.azj[A.o.F(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ibM(b2.h(0,"shape"))
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
a3=C.hyo(b2.h(0,"textTransition"))
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
C.ck_.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.ck0.prototype={
$1(d){return d.ak()},
$S:z+63}
C.cjX.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjY.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjZ.prototype={
$1(d){return C.hp_(B.a3(d,x.N,x.z))},
$S:z+64}
C.ckr.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cks.prototype={
$0(){return A.d.gH(D.a52)},
$S:z+66}
C.ckm.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.ckl.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckh.prototype={
$1(d){return new B.N(d,new C.cki(),B.U(d).k("N<1,V>")).f1(0,new C.ckj())},
$S:z+69}
C.cki.prototype={
$1(d){return d.f},
$S:z+70}
C.ckj.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:697}
C.ckk.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hVA(d)},
$S:z+71}
C.ckn.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cko.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckp.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fQ9.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.an(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fQ5.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fQ6.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fQ7.prototype={
$2(d,e){var w
if(d.b===D.cX){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fQ8.prototype={
$2(d,e){return d.b===D.fg&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ck5.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ikB(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cE(new B.b8(b4,b5),new C.ck4(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qo.aE(0,A.j.F(b1,0,1))
u=new C.ck6()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ck7(a9,b7.d)
r=new C.ck8(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jW.aE(0,A.j.F(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kE(A.j.F(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.q(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.fg){a4=i.hQ()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lR&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b4,A.t,B.a([new B.kE(A.j.F(o,0,1),r.$1(l),a8),new B.kE(A.j.F(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iQ(B.wH(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.F((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cq)a7=D.n4
p.push(s.$5(i.c,i.d,i.e,i.f,C.hAT(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ac,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a6,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi)},
$S:377}
C.ck4.prototype={
$1(d){return d.a},
$S:z+22}
C.ck6.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ck7.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1711}
C.ck8.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8E(v,C.b32(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dPF.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cke.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckf.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fT0.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:315}
C.fS7.prototype={
$1(d){return new C.ael(this.a,this.b,null)},
$S:z+78}
C.eBh.prototype={
$0(){return this.a.QB(this.b,C.io0(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eBi.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QB(this.b,C.io2(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eBj.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QB(this.b,C.io1(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eBk.prototype={
$0(){A0.hAD()
B.a6(this.a,!1).O(null)},
$S:0}
C.ck3.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1712}
C.ck2.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nX),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.F(p*Math.max(B.jg(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bZ:A.dC
return B.fR(t,A.A,o,new C.ck1(),A.cj,w,!0,u,!1,new B.bP("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1713}
C.ck1.prototype={
$3(d,e,f){return D.aeR},
$S:213}
C.fQ4.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cW(r,0,B.dA(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cL>")
r=B.C(new B.N(r,new C.fQ3(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c3(new B.an(A.a0,t,A.ac,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bi),A.aq)},
$S:1714}
C.fQ3.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b32(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fyU.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cz(r.b,new C.fyS(d))
w=B.aH(d,A.c_,x.w).w
v=B.n(22)
u=B.L(A.bB,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h2,28)],x.V)
s=x.p
return new B.d_(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.p(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kh,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bM(!1,A.AN,q,q,!0,q,q,q,new C.fyT(p,d),q,B.fu(q,q,A.bm,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ca,q,new B.b9(B.n(12),A.a1),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aC,r.d],s),A.m,q,A.e,A.O,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.h1,A.GQ,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:260}
C.fyS.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pW())B.a6(w,!0).eO()},
$S:0}
C.fyT.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eO()},
$S:0}
C.ffS.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dP(u.b,new B.q((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dP(u.b,new B.q(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dP(u.b,new B.q(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.dP(u.b,new B.q(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),1.3-r*0.3,t,t)],x.p),t)
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
s.kl(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(r*1.2)
s.kl(r*0.5)
return B.fw(A.A,B.da(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fL(-r*1.4)
return B.fw(A.a9,B.da(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.jk(u.b,A.t,new C.aL6(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.jk(u.b,A.t,new C.aL6(1-r,t))],x.p),t)
case 16:v=D.baQ.aE(0,r)
return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eK(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b4,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:65}
C.e0f.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e0e.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e0d.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hAT(v,w,e)},
$S:65}
C.cjW.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a6,A.a9,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cL>")
q=B.C(new B.N(v,new C.cjV(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ac,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bi)},
$S:377}
C.cjV.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cq?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8E(m,new C.W7(d,C.b32(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dej.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dei(w))},
$S:12}
C.dei.prototype={
$0(){return this.a.d++},
$S:0}
C.eoE.prototype={
$2(d,e){var w,v=null,u=A.o.aq(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSo.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ikk(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eg(0,w*7,0,1)
s.fL(Math.sin(t)*0.32)
s.kl(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k5(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.q(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:65}
C.f4N.prototype={
$1(d){var w
$.S()
w=B.K()
w.b=A.aa
w.c=d
w.e=A.dS
return w},
$S:1715}
C.fNF.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bti(u,t,r),A.az))
w.push(B.nP(s.d,A.aq,new C.bh3(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsf(u,q,t,r),A.az))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b4,A.t,w,r),r),r,r,r)},
$S:231}
C.fBW.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:318}
C.eHv.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Ds(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gav(s)){u=null
w=1
break}u=r.dP(s,new C.eHt(),new C.eHu(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1716}
C.eHt.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:183}
C.eHu.prototype={
$0(){return J.fq(this.a)},
$S:1718}
C.eDT.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDV.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eFt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFh.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eFi.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eDg.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGB.prototype={
$0(){this.a.u9()},
$S:0}
C.eHr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.F(v.b,0,u.r.length-1)
w.r=v.c
w.oC()
w.KH()},
$S:0}
C.eFr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.F(v.b,0,u.r.length-1)
w.r=v.c
w.oC()
w.KH()},
$S:0}
C.eHe.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHf.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eHg.prototype={
$1(d){return d.a},
$S:z+22}
C.eHh.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:268}
C.eHi.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:700}
C.eCF.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHs.prototype={
$0(){},
$S:0}
C.eEA.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y9()
w.KH()},
$S:0}
C.eCD.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.y9()},
$S:0}
C.eCE.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.y9()},
$S:0}
C.eEX.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eEY.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y9()
w.KH()
w.z="Home"},
$S:0}
C.eEZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEz.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEy(d),w,w)],x.p),w,w,w,D.fVW,w,w,w,w,D.fCt,w)},
$S:18}
C.eEy.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEw.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VP,w,w,!0,w,w,w,new C.eEv(d),w,w)],x.p),w,w,w,D.fGE,w,w,w,w,D.fEk,w)},
$S:18}
C.eEv.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEx.prototype={
$0(){},
$S:0}
C.eDP.prototype={
$1(d){return this.a.b2R(C.bEu(d))},
$S:z+7}
C.eDQ.prototype={
$1(d){return this.a.agm(C.bEu(d))},
$S:z+7}
C.eEG.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fW_,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Qs(A.wx,D.aAJ,"HATI YA KUHOWA","Hati ya mahari",new C.eEB(d),w),A.X,new C.Qs(A.ht,D.dgd,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eEC(d),w),A.X,new C.Qs(A.hG,D.d0N,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eED(d),w),A.X,new C.Qs(A.ib,D.cZR,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eEE(d),w)],v)
if(this.a.gacA())A.d.v(u,B.a([A.X,new C.Qs(A.jo,D.cKJ,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eEF(d),w)],v))
return B.bm(!0,B.ch(B.x(u,A.al,w,A.e,A.O,0,A.p),A.t,w,A.y,w,E.yI,w,w,A.ai),!0,!1,A.ag,!0,!0)},
$S:25}
C.eEB.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eEC.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eED.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eEE.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eEF.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eEH.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y9()},
$S:0}
C.eCH.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eCI.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
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
C.eES.prototype={
$1(d){return d.b===D.lR},
$S:z+4}
C.eET.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e0(new C.eEQ(w,this.a,v),null)},
$S:21}
C.eEQ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eER(p,o,a3,n),l=B.R(a2).ax.a===A.J,k=l?A.c:A.Q,j=l?A.aS:A.am,i=l?A.bp:A.bO,h=l?A.Q:A.c,g=B.n(28),f=B.L(l?A.bB:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eEM(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjD(t,u.b,p.a===t,i,k,new C.eEN(v,m),q))}a1=B.bW(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
u.push(new C.bjC(t,r.b,p.b===t,k,j,new C.eEO(s,m),q))}return B.bm(!0,B.p(q,B.ch(B.x(B.a([d,A.aR,a0,A.X,a1,A.by,v,A.X,B.bW(A.bH,u,A.bt,q,12,12),A.by,new B.a5(1/0,48,B.es(D.c24,D.fYq,new C.eEP(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.n(16),A.a1),D.b4U,q,q,q,q)),q)],e),A.E,q,A.e,A.O,0,A.p),A.t,q,A.y,q,q,q,q,A.ai),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uq,D.bDj,q,q,q),!0,!1,A.ag,!0,!0)},
$S:87}
C.eER.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eEK(w.a,d,e))
w.b.d9(new C.eEL(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1721}
C.eEK.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eEL.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eEM.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEN.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eEO.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eEP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d9(new C.eEJ(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEJ.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eEV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEW.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eEU(t.d))
u=A.o.F(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.F(s.f,0,v.length-1)
s.r=null
s.y9()},
$S:0}
C.eEU.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFc.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eFd.prototype={
$1(d){return d.w},
$S:z+82}
C.eFe.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.eFf.prototype={
$1(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.c:A.Q,s=u?A.aS:A.am,r=u?A.bp:A.aQ,q=u?A.Q:A.c,p=B.n(28),o=B.L(u?A.bB:A.aO,A.r,1),n=B.aH(d,A.c_,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.A(B.a([B.p(v,D.bWz,A.f,v,v,D.b6f,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eF9(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aC,new B.dn(1,A.co,B.hN(v,new C.eFa(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ai,new C.eFb(),!0),v)],l),A.E,v,A.e,A.O,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uq,A.a09,v,v,v),!0,!1,A.ag,!0,!0)},
$S:25}
C.eF9.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFb.prototype={
$2(d,e){return A.af},
$S:36}
C.eFa.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.bZR,q,q,q,new C.eF7(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bFz,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b6(4,B.n(16),A.a1),q,A.eV,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.n(16),D.b4z),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eF8(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ab,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:701}
C.eF7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iq9(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.o9(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bz,o+s.length),A.aP))
l.akp(k,m)
l.pI()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eF8.prototype={
$1(d){var w=this.a
w.akp(this.b.a,d)
w.pI()},
$S:2}
C.eFg.prototype={
$0(){},
$S:0}
C.eEI.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eCY.prototype={
$0(){},
$S:0}
C.eCZ.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hCc(this.b,w,!0)
w=this.a
w.r=null
w.y9()},
$S:0}
C.eD_.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eD0.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eCX(t.d))
u=A.o.F(s.a,0,v.length)
s.a=u
s=t.e
A.d.nu(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.F(s.f,0,v.length-1)
s.r=null
s.y9()},
$S:0}
C.eCX.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFm.prototype={
$1(d){return B.pa(new C.eFl(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:142}
C.eFl.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amh,B.x(B.a([D.fTq,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.fef,new C.eFk(this.a,this.b),20,A.ut,w,A.ai,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:375}
C.eFk.prototype={
$2(d,e){var w=null,v=D.Il[e],u=C.hVv(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fT,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.f7e,A.f,w,w,new B.o(A.dH.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.mT,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.A(n,A.m,w,A.e,A.i,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a6,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFj(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eFj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckd(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFn.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.y9()},
$S:0}
C.eBC.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rS(4294967295,null,0,0,null,C.cD(),D.n3,"","","",D.dk),s=this.b
C.ckq(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCW.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ak()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jb
$.jb=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c4(v.e.r,v.f+1,C.hp_(q));++v.f},
$S:0}
C.eCU.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.F(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eFv.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c4(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eCQ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eCP(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eCP.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFu.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eCG.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:268}
C.eDh.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:700}
C.eHc.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eHd.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avi(w).fW()
v=u.Xt(w)
v.stT(B.hg(A.bz,v.a.a.length))},
$S:7}
C.eGC.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yt(v)
if(u!=null&&u.b===D.cX)w.Xt(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eBD.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,v.gqS().e.l(),A.aG,"",4280640491,24,A.bq,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bj,4280172719,2,"Tap to edit text",0,0,"",D.cq,D.cX,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBA.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,4279310375,A.aG,"",v.gqS().c.j(0.25).l(),24,A.bq,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqS().c.l(),2,"",0,0,"",D.cq,D.fg,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBq.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bq,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eBn.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c94],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal2().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUe,r,r,r,r,new C.eBm(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ai,!0),!0,!1,A.ag,!0,!0)},
$S:25}
C.eBm.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eBo.prototype={
$0(){var w=A.j.F(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.az(u.ak(),null),s=C.er(A.bk,!1,4279310375,A.aG,u.b,4280640491,24,A.bq,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bj,4280172719,2,t,0,0,"",D.cq,D.a7J,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eCS.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eCT.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eCR(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eCR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eC4.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cX)s.Q=t.c.l()
else if(w===D.fg){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eC5(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eC5.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eC9.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eCa(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eCa.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eC7.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cX){s.Q=t.c
return}w=new C.eC8(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eC8.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eA(w,new C.eC6()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eC6.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eC3.prototype={
$0(){return C.ckq(this.b,this.c,this.a.gqS())},
$S:0}
C.eF6.prototype={
$0(){return A.d.c4(this.a.d,0,this.b)},
$S:0}
C.eHl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHm.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eHn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHo.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c4(s,0,v.b)
else{w=A.d.bj(s,new C.eHk(v))
if(w>=0)t.d[w]=v.b}if(v.a.gT6()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.y9()
t.KH()}},
$S:0}
C.eHk.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eGS.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acE(),s=w.b,r=u.acF(A.fn,A.jJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.R,r,A.by,B.p(v,B.A(B.a([B.E(u.aXs(w.c,A.am),1),new B.D(A.fG,B.p(v,D.bUk,A.f,v,v,new B.o(A.fn.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXs(s,A.fn),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.by,u.aXv(A.fn,d,D.bQp,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c0V(A.aJ,d,A.uJ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aC)
p.push(u.aXt(d,"Not now"))
return new C.KF(B.x(p,A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eGR.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KF(B.x(B.a([v.acE(),A.R,v.acF(A.aJ,D.bQ4,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cR(new B.aZ(0,1/0,0,B.aH(d,A.c_,x.w).w.a.b*0.42),B.hN(w,new C.eGP(v,u,d),u.length,w,w,A.ai,new C.eGQ(),!0),w),A.aC,v.aXt(d,"Cancel")],x.p),A.al,w,A.e,A.O,0,A.p),w)},
$S:z+9}
C.eGQ.prototype={
$2(d,e){return A.X},
$S:36}
C.eGP.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aO(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ark,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.c60,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nc,w,w,w),A.cU,B.d("Updated "+this.a.QC(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eH,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGO(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:80}
C.eGO.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eGL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acE()
t=t.acF(A.ay,A.uT,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KF(B.x(B.a([s,A.R,t,A.by,B.A(B.a([B.E(B.dU(A.abg,new C.eGJ(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cn,u,new B.b9(B.n(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.at,B.E(B.bH(D.fEV,u,new C.eGK(d),B.bn(A.fn,u,u,u,A.c,u,A.cn,u,new B.b9(B.n(14),A.a1),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.O,0,A.p),u)},
$S:z+9}
C.eGJ.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eGK.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGN.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acE(),s=w.b,r=u.acF(A.aY,A.ea,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awC("Names",""+w.c),1),A.ae,B.E(u.awC("Fields",""+w.d),1),A.ae,B.E(u.awC("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bn(A.bm,v,v,v,A.c,v,A.yx,v,new B.b9(B.n(14),A.a1),v,v,v)
return new C.KF(B.x(B.a([t,A.R,r,A.aR,p,A.by,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nS,v,v,v),v,new C.eGM(d),o),A.X,u.aXu(d,"Stay here",!1)],q),A.al,v,A.e,A.O,0,A.p),v)},
$S:z+9}
C.eGM.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eDL.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDK.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eGD.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eHb.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0B(A.d.dP(w.d,new C.eH9(v),new C.eHa(v)).hQ(),w.f,null)},
$S:z+84}
C.eH9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHa.prototype={
$0(){return this.a},
$S:z+85}
C.eBv.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fW,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bW7,w,w,w,w,new C.eBt(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fCS,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXm,w,w,w,w,new C.eBu(d),!1,w,w,w,w,w,D.fZG,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dh,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eBt.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eBu.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eBw.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bk,!1,4279310375,A.aG,v,4280640491,24,A.bq,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bj,4280172719,2,v,0,0,"",D.cq,D.TE,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBx.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jb
$.jb=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jb
$.jb=k+1
m.push(new C.eN(""+1000*l+"_"+k,D.TE,0.04,0.06,0.92,0.88,v,24,A.a8,A.bq,A.aG,4279310375,A.bk,u,D.bj,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cq,0,"","","","","",!1,0))
A.d.c4(j.e.r,i+q-1,new C.lY(""+1000*p+"_"+o,r+n,"",D.qW,4294967295,null,D.dk,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eBB.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kJ(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bk,!1,4279310375,A.aG,t,4280640491,24,A.bq,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lq,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eBs.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5x(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bq,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lq,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eBr(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ik3(p)}},
$S:0}
C.eBr.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFs.prototype={
$0(){var w=this.a,v=this.b
w.b5x(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eHj.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eDO.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eDN())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eDN.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eCd.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eCe.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.u9()},
$S:7}
C.eBp.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bq,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eDf.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBy.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eBH.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eBI.prototype={
$0(){var w=this.b.hQ(),v=C.cD(),u=A.j.F(w.c+0.04,0,0.92),t=A.j.F(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eBJ.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBG(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c4(w,u+1,v)}},
$S:0}
C.eBG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBU.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBF(v))
if(u>0){A.d.cA(w,u)
A.d.c4(w,u-1,v)}},
$S:0}
C.eBF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBX.prototype={
$0(){return this.a.as=A.bk},
$S:0}
C.eBY.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eBZ.prototype={
$0(){return this.a.as=A.dX},
$S:0}
C.eC_.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eC0.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eC1.prototype={
$1(d){return d.b===D.cX},
$S:z+4}
C.eC2.prototype={
$1(d){return d.length!==0},
$S:3}
C.eBK.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.Dx(w.gqS().c.j(0.18).l(),0.1,u,D.bj,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j5(A.bk,!1,w.gqS().d.l(),A.aG,18,A.bq,A.H,0.07,v,"Document Header",0,D.dk,0.9,0.05,0.02))},
$S:0}
C.eBL.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.Dx(v.gqS().c.j(0.12).l(),0.1,t,D.bj,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFc()
A.d.J(t,C.j5(A.K,!1,v.gqS().e.l(),A.aG,12,A.bq,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dk,0.9,0.05,0.92))},
$S:0}
C.eBM.prototype={
$0(){A.d.J(this.a.gdB().z,C.Dx(1727914055,0.12,C.cD(),D.bj,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eBN.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.Dx(w,0.08,C.cD(),D.bj,w,2,0.5,0.2,0.4))},
$S:0}
C.eBO.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.Dx(w.gqS().c.j(0.35).l(),0.12,u,D.DT,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j5(A.bk,!1,4279310375,A.aG,18,A.bq,A.a8,0.15,C.cD(),"Important note",0,D.qX,0.5,0.38,0.52))},
$S:0}
C.eBP.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.Dx(4294507260,0.78,C.cD(),D.bj,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j5(A.bk,!1,4279179050,A.aG,16,A.bq,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFc()+"\n\nSubject:\n\nBody text\u2026",0,D.dk,0.76,0.12,0.14))},
$S:0}
C.eBQ.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.Dx(4294897802,0.28,C.cD(),D.bj,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j5(A.bk,!1,4285611794,A.aG,15,A.bq,A.a8,0.24,C.cD(),"Sticky note",0,D.aKw,0.26,0.64,0.14))},
$S:0}
C.eBR.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.Dx(4293060848,0.04,C.cD(),D.bj,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.Dx(w,0.04,C.cD(),D.bj,w,2,0.55,0.1,0.48))},
$S:0}
C.eBS.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j5(A.bk,!1,w,A.aG,18,A.bq,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jc,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j5(A.bk,!1,w,A.aG,18,A.bq,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vc,0.42,0.52,0.18))},
$S:0}
C.eBT.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.Dx(858088427,0.62,C.cD(),D.bj,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.Dx(856004201,0.62,C.cD(),D.bj,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j5(A.bk,!1,w,A.aG,20,A.bq,A.H,0.1,C.cD(),"Option A",0,D.dk,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j5(A.bk,!1,w,A.aG,20,A.bq,A.H,0.1,C.cD(),"Option B",0,D.dk,0.36,0.56,0.2))},
$S:0}
C.eBV.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.Dx(4294967295,0.36,C.cD(),D.bj,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j5(A.K,!1,w,A.aG,14,A.bq,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dk,0.24,0.38,0.4))},
$S:0}
C.eBW.prototype={
$0(){return C.ckq(this.b,D.TF,this.a.gqS())},
$S:0}
C.eDe.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9C.q(0,d),t=this.a
return t.baK(d,v===d,A.b2,this.c,new C.eDd(t,u,d,w),u)},
$S:z+25}
C.eDd.prototype={
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
C.bFW(r,new C.eDc(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDc.prototype={
$0(){return this.a.d9(new C.eDb(this.b,this.c))},
$S:0}
C.eDb.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eBz.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rS(4294967295,null,0,0,null,C.cD(),D.n3,"","","",D.dk),s=this.b
C.ckq(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iqc(p,q.d,s,new C.eCg(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.u9(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCg.prototype={
$1(d){return this.bnJ(d)},
bnJ(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eCf(t,d))
w=2
return B.b(t.u9(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eCf.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c4(v.d,0,u)}},
$S:0}
C.eCi.prototype={
$0(){return this.a.bMq()},
$S:0}
C.eCj.prototype={
$0(){return this.a.aSD("Class Presentation",!0)},
$S:0}
C.eCk.prototype={
$1(d){return this.a.bNm(d.b,this.b,d.a)},
$S:z+88}
C.eCV.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.c_,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eF5.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eP,x.w).w.f.d),new B.e0(new C.eF4(this.a,this.b),null),null)},
$S:61}
C.eF4.prototype={
$2(d,e){return B.pa(new C.eF3(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:634}
C.eF3.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.L(u?A.bB:A.aO,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aV,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.X,r,new B.D(A.alH,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.Q,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bM(!1,A.AN,v,v,!0,v,v,v,new C.eF1(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aVp(u,!0,!0,new C.eF2(p,w.d))],q),e,v,D.bB0,v,v,A.ai,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.l5,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eF1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eF2.prototype={
$0(){this.b.$1(new C.eF_())
var w=this.a
if(w.c!=null)w.m(new C.eF0())},
$S:0}
C.eF_.prototype={
$0(){},
$S:0}
C.eF0.prototype={
$0(){},
$S:0}
C.eGE.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:94}
C.eGF.prototype={
$4(d,e,f,g){var w=A.cx.aE(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAs(this.a,null),0.94+w*0.06,null,null),w)},
$S:372}
C.eGG.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:94}
C.eGH.prototype={
$4(d,e,f,g){var w=A.cx.aE(0,e.gp(0))
return B.da(B.ed(A.A,new C.beS(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:372}
C.eGI.prototype={
$0(){return A.d.c4(this.a.d,0,C.X_(this.b))},
$S:0}
C.eBE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aE(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.q7.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.ch.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.p(p,B.X(A3.a1Y,u?A.ad:A.Q,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.Q,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.us(A.fh,B.p(p,B.x(B.a([t,A.aC,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.am,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:300}
C.eCJ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eCK.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCL.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k6
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2w:A.Ct}return w},
$S:704}
C.eCO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dy.aE(0,A.j.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.nk.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kJ(v.w)?A.wx:A.qK,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a6,A.a9,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.Q,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QC(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QC(v.f)
r=k.bNk(n,A.d.gH(r),t)
return B.p(l,B.bx(j,new B.a8P(B.aJ(!1,A.a3,!0,l,B.aO(!1,l,!0,B.p(l,B.dG(!1,A.NY,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ov,t?A.aD:A.bM,l,l,l,l),l,l,l,new C.eCM(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eCN(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:93}
C.eCN.prototype={
$0(){return this.a.agm(this.b)},
$S:0}
C.eCM.prototype={
$0(){return this.a.Bp(this.b,this.c)},
$S:0}
C.eEe.prototype={
$0(){var w=this.a
w.b9i()
w.m(new C.eEd())},
$S:0}
C.eEd.prototype={
$0(){},
$S:0}
C.eEf.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eEg.prototype={
$0(){this.a.d9(new C.eEc(this.b))},
$S:0}
C.eEc.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eEh.prototype={
$0(){this.a.d9(new C.eEb(this.b))},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bq:A.cF},
$S:0}
C.eEi.prototype={
$0(){this.a.d9(new C.eEa(this.b))},
$S:0}
C.eEa.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.n9},
$S:0}
C.eEj.prototype={
$0(){this.a.d9(new C.eE9(this.b))},
$S:0}
C.eE9.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEk.prototype={
$0(){var w=this.a
w.d9(new C.eE8(w,this.b))},
$S:0}
C.eE8.prototype={
$0(){var w=this.b
return w.as=this.a.c7U(w.as)},
$S:0}
C.eEl.prototype={
$0(){return this.a.d9(new C.eE7(this.b))},
$S:0}
C.eE7.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w+2,10,96)},
$S:0}
C.eEm.prototype={
$0(){return this.a.d9(new C.eE6(this.b))},
$S:0}
C.eE6.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w-2,10,96)},
$S:0}
C.eE_.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eE0.prototype={
$0(){this.a.a0A()
return null},
$S:0}
C.eE1.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.c_,x.w).w.a.a<900)w.agF()
else w.m(new C.eDZ(w))},
$S:0}
C.eDZ.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eE2.prototype={
$0(){this.a.d9(new C.eDY(this.b))},
$S:0}
C.eDY.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eE3.prototype={
$0(){return this.a.d9(new C.eDX(this.b))},
$S:0}
C.eDX.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w+2,10,96)},
$S:0}
C.eE4.prototype={
$0(){return this.a.d9(new C.eDW(this.b))},
$S:0}
C.eDW.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w-2,10,96)},
$S:0}
C.eE5.prototype={
$0(){return this.a.aBL(null)},
$S:0}
C.eD7.prototype={
$0(){this.a.E5()
return null},
$S:0}
C.eD8.prototype={
$0(){this.a.aba()
return null},
$S:0}
C.eDa.prototype={
$1(d){return this.bnK(d)},
bnK(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Ky(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.av,null,new C.eD2(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d9(new C.eD3(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eD4(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eD5(r))
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
return B.b(C.hDt(q,new C.Fc(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d9(new C.eD6(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahU(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:97}
C.eD2.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.eqZ],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dh,p,p,p)
q=u.e===s?D.bWg:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eD1(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.m,p,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eD1.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eD3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eD4.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eD5.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eD6.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eD9.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ah(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ah(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ah(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahU(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ewv,q,v,u,B.Ah(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:133}
C.eHp.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF9(w,v)}},
$S:0}
C.eHq.prototype={
$0(){this.a.E5()
return null},
$S:0}
C.eEp.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.c5V:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bu
return new B.D(A.fz,B.aA(u,B.cV(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b6,new B.o(w,u,u,r,u,q,A.n),A.eK,u,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEo(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:141}
C.eEo.prototype={
$0(){var w=this.a
return w.m(new C.eEn(w,this.b))},
$S:0}
C.eEn.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEq.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5B:E.aAQ
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbQV():t.gbML()
return B.hb(B.aA(u,B.p(u,D.aqK,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.I,10)],x.V),new B.a9(A.a6,A.a9,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1726}
C.eEr.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ips(v,w.a.c)},
$S:0}
C.eFO.prototype={
$0(){return this.b.vN(this.a.a)},
$S:0}
C.eFP.prototype={
$0(){return this.a.vN(D.n3)},
$S:0}
C.eFQ.prototype={
$0(){return this.a.vN(D.Ja)},
$S:0}
C.eG0.prototype={
$0(){return this.a.vN(D.Jb)},
$S:0}
C.eGb.prototype={
$0(){return this.a.vN(D.J9)},
$S:0}
C.eGm.prototype={
$0(){return this.a.qD("lab_report")},
$S:0}
C.eGt.prototype={
$0(){return this.a.qD("rubric")},
$S:0}
C.eGu.prototype={
$0(){return this.a.qD("minutes")},
$S:0}
C.eGv.prototype={
$0(){return this.a.qD("agenda")},
$S:0}
C.eGw.prototype={
$0(){return this.a.qD("timeline")},
$S:0}
C.eGx.prototype={
$0(){return this.a.qD(this.b.a)},
$S:0}
C.eFR.prototype={
$0(){this.a.Ww()
return null},
$S:0}
C.eFS.prototype={
$0(){this.a.Wq()
return null},
$S:0}
C.eFT.prototype={
$0(){return this.a.qD("table")},
$S:0}
C.eFU.prototype={
$0(){return this.a.qD("sticky")},
$S:0}
C.eFV.prototype={
$0(){return this.a.qD("divider")},
$S:0}
C.eFW.prototype={
$0(){return this.a.qD("header_bar")},
$S:0}
C.eFX.prototype={
$0(){return this.a.pq(D.bj)},
$S:0}
C.eFY.prototype={
$0(){return this.a.pq(D.eX)},
$S:0}
C.eFZ.prototype={
$0(){return this.a.pq(D.kb)},
$S:0}
C.eG_.prototype={
$0(){return this.a.pq(D.DT)},
$S:0}
C.eG1.prototype={
$0(){return this.a.pq(D.kc)},
$S:0}
C.eG2.prototype={
$0(){return this.a.pq(D.lr)},
$S:0}
C.eG3.prototype={
$0(){return this.a.pq(D.fH)},
$S:0}
C.eG4.prototype={
$0(){this.a.HO()
return null},
$S:0}
C.eG5.prototype={
$0(){this.a.NX()
return null},
$S:0}
C.eG6.prototype={
$0(){return this.a.qD("quote")},
$S:0}
C.eG7.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eG8.prototype={
$0(){this.a.a0G()
return null},
$S:0}
C.eG9.prototype={
$0(){var w=this.a
return w.m(new C.eFE(w))},
$S:0}
C.eFE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGa.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oq(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eFM(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFM.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eGc.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9E.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aV
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.a9,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9E.q(0,q))u.push(B.ap(s,B.p(s,D.PJ,A.f,s,s,D.Ff,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aA(s,B.hb(new B.an(A.a0,s,A.ac,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFL(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eFL.prototype={
$0(){this.a.a9y(this.b)
return null},
$S:0}
C.eGd.prototype={
$0(){this.a.a9x(this.b)
return null},
$S:0}
C.eGe.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hVw(d),p=this.a,o=B.n(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bm:A.aV
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rS(4294967295,r,0,0,r,"preview_"+w,D.qW,"","","",D.dk)
C.hAg(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hBB(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ap(r,B.p(r,D.arl,A.f,r,r,D.Ff,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ac,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.am,r,r,r,r,r,r,r,r,9,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFK(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eFK.prototype={
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
break}s.d9(new C.eFA(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFA.prototype={
$0(){return C.hAg(this.a,this.b.a)},
$S:0}
C.eFN.prototype={
bnL(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9C.q(0,d)
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
$2(d,e){return this.bnL(d,e)},
$S:z+91}
C.eGy.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eGA(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ch(B.A(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eGA.prototype={
$1(d){var w=this
return w.a.baK(d,w.b===d,w.c,w.d,new C.eGz(w.e,d),!D.a9C.q(0,d))},
$S:z+25}
C.eGz.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGf.prototype={
$1(d){this.b.$2(d,new C.eFJ(this.a,d,this.c))
return null},
$S:z+26}
C.eFJ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFW(u,new C.eFz(v,this.c,w),w)},
$S:0}
C.eFz.prototype={
$0(){return this.a.d9(new C.eFx(this.b,this.c))},
$S:0}
C.eFx.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eGg.prototype={
$1(d){this.b.$2(d,new C.eFI(this.a,d))
return null},
$S:z+26}
C.eFI.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h1I(u,new C.eFy(v,w),w)},
$S:0}
C.eFy.prototype={
$0(){var w=this.a
return w.d9(new C.eFw(w,this.b))},
$S:0}
C.eFw.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eGh.prototype={
$0(){var w=this.a
return w.m(new C.eFH(w))},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eGi.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF9(w,v)}},
$S:0}
C.eGj.prototype={
$0(){this.a.IA()
return null},
$S:0}
C.eGk.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eGl.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cX)w.d9(new C.eFG(v))},
$S:0}
C.eFG.prototype={
$0(){var w=this.a
w.f=A.j.F(w.f*1.25,0.08,1.8)
w.e=A.j.F(w.e*1.1,0.08,1.8)},
$S:0}
C.eGn.prototype={
$0(){this.a.E5()
return null},
$S:0}
C.eGo.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FM(v,!0)
return null},
$S:0}
C.eGp.prototype={
$0(){this.a.d9(new C.eFF(this.b))},
$S:0}
C.eFF.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.V)?A.cC:A.V},
$S:0}
C.eGq.prototype={
$0(){this.a.d9(new C.eFD(this.b))},
$S:0}
C.eFD.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bq:A.cF},
$S:0}
C.eGr.prototype={
$0(){this.a.d9(new C.eFC(this.b))},
$S:0}
C.eFC.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.n9},
$S:0}
C.eGs.prototype={
$0(){this.a.d9(new C.eFB(this.b))},
$S:0}
C.eFB.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eCc.prototype={
$1(d){return this.bnI(d)},
bnI(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d9(new C.eCb(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:196}
C.eCb.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eGV.prototype={
$0(){var w=this.a
return w.d9(new C.eGU(w,this.b))},
$S:0}
C.eGU.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.F(u-1,1,120)},
$S:0}
C.eGW.prototype={
$0(){var w=this.a
return w.d9(new C.eGT(w,this.b))},
$S:0}
C.eGT.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.F(u+1,1,120)},
$S:0}
C.eDk.prototype={
$0(){return this.a.d9(new C.eDj(this.b))},
$S:0}
C.eDj.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w-2,10,96)},
$S:0}
C.eDl.prototype={
$0(){return this.a.d9(new C.eDi(this.b))},
$S:0}
C.eDi.prototype={
$0(){var w=this.a
return w.w=A.j.F(w.w+2,10,96)},
$S:0}
C.eDS.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.at1,new C.eDR(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eDR.prototype={
$1(d){var w=null
return B.Ah(B.d(d.b,w,w,w,w,w,w,A.lU,w,w,w),48,d,x.fO)},
$S:z+95}
C.eH7.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:36}
C.eH6.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kw()?q:new C.eH4(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bm
else v=r.d?A.aV:A.cs
v=B.L(v,A.r,o?2:1)
u=r.d?A.ct:A.c
t=B.bR(0,C.hBB(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aA(q,B.p(q,new B.an(A.a0,q,A.ac,A.t,B.a([t,B.ap(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nQ,q,q,q),A.f,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.amC,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eH5(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eH5.prototype={
$0(){var w=this.a
return w.m(new C.eH0(w,this.b))},
$S:0}
C.eH0.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KH()},
$S:0}
C.eH4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eH1(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eH2(q,s))
q.aU7()}else if(r==="del"){q=t.a
q.m(new C.eH3(q,s))
q.aTd()}else if(r==="up")t.a.b5L(s,s-1)
else if(r==="down")t.a.b5L(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH1.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY_,w,w,w,w,new C.eGX(d),!1,w,w,w,w,w,w,w,D.fDS,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXT,w,w,w,w,new C.eGY(d),!1,w,w,w,w,w,w,w,A.xk,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bX8,w,w,w,w,new C.eGZ(d),!1,w,w,w,w,w,w,w,D.fMe,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZf,w,w,w,w,new C.eH_(d),!1,w,w,w,w,w,w,w,D.fDG,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eGX.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eGY.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eGZ.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eH_.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eH2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eH3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eH8.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eCC.prototype={
$0(){var w=this.a
w.b9i()
w.aBL(null)},
$S:0}
C.eCB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.du,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.aA,A.aF,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.aA,A.aF,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c3(A.kC,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bi),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eCA(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ac,A.f,s,new B.bP("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bi)},
$S:377}
C.eCA.prototype={
$1(d){var w=this
return w.a.bIK(d,w.b,w.c,w.d)},
$S:z+23}
C.eCp.prototype={
$0(){var w=this
if(w.b){w.a.O4(w.c)
return}if(w.d){w.a.a9g(w.c)
return}if(w.e){w.a.ahX(w.c)
return}if(w.f)w.a.b9R(w.c)},
$S:0}
C.eCq.prototype={
$0(){this.a.O4(this.b)
return null},
$S:0}
C.eCr.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eCs.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eCo(u,d,w.c,w.d))
v.Ie()
v.oC()
v.pI()},
$S:19}
C.eCo.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.F(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.F(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eCt.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eCv.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hel(w))u.a.O4(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b9R(v)},
$S:0}
C.eCu.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eCw.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eCn(w.b,d,w.c,w.d))
v.Ie()
v.oC()
v.pI()},
$S:19}
C.eCn.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.F(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.F(v.f+u/w.d,0.04,1.8)
if(v.b===D.cX)v.w=A.j.F(v.w+u*0.15,10,120)},
$S:0}
C.eCx.prototype={
$1(d){var w=this.a
w.m(new C.eCm(this.b,d))
w.Ie()
w.oC()
w.pI()},
$S:211}
C.eCm.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.F(w.e*v,0.04,1.8)
w.f=A.j.F(w.f*v,0.04,1.8)
if(w.b===D.cX)w.w=A.j.F(w.w*v,10,120)},
$S:0}
C.eCy.prototype={
$0(){var w=this.a
w.m(new C.eCl(this.b))
w.Ie()
w.oC()
w.pI()},
$S:0}
C.eCl.prototype={
$0(){this.a.r=C.hB5()},
$S:0}
C.eCz.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eEt.prototype={
$0(){var w=this.a
return w.m(new C.eEs(w))},
$S:0}
C.eEs.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEu.prototype={
$1(d){return this.a.cHQ(this.b.a,d)},
$S:2}
C.eDy.prototype={
$1(d){var w
this.a.d9(d)
w=this.b
if(w!=null)w.$0()},
$S:173}
C.eDz.prototype={
$1(d){return this.a.$1(new C.eDx(this.b,d))},
$S:6}
C.eDx.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDA.prototype={
$1(d){return this.a.$1(new C.eDw(this.b,d))},
$S:6}
C.eDw.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDB.prototype={
$1(d){return this.a.$1(new C.eDv(this.b,d))},
$S:6}
C.eDv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDC.prototype={
$1(d){return this.a.$1(new C.eDu(this.b,d))},
$S:6}
C.eDu.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eDD.prototype={
$1(d){return this.a.$1(new C.eDt(this.b,d))},
$S:6}
C.eDt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDE.prototype={
$1(d){return this.b.$1(new C.eDs(this.a,this.c))},
$S:9}
C.eDs.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eDF.prototype={
$1(d){return this.b.$1(new C.eDr(this.a,this.c))},
$S:9}
C.eDr.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDG.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bm:A.d_
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDq(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:379}
C.eDq.prototype={
$0(){return this.a.$1(new C.eDn(this.b,this.c))},
$S:0}
C.eDn.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eDH.prototype={
$1(d){return this.a.$1(new C.eDp(this.b,d))},
$S:1727}
C.eDp.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eDI.prototype={
$1(d){var w=null
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDo(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:379}
C.eDo.prototype={
$0(){return this.a.$1(new C.eDm(this.b,this.c))},
$S:0}
C.eDm.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eDJ.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pW()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eO()}v.a.aug()},
$S:0}
C.eDM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dy.aE(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.ar(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.p(n,B.X(A.uT,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nC,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aO(!1,m,!0,B.eI(new B.a5(48,48,new B.an(A.A,n,A.ac,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:132}
C.eBl.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aE(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aJ(!1,A.a3,!0,p,B.aO(!1,o,!0,B.eI(B.x(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.m,p,A.ba,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GL,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:132}
C.eFq.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.asb,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.eFo(d),w,w),B.bH(A.r8,w,new C.eFp(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eFo.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFp.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d9L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dy.aE(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.aE(0,A.j.F(v,0,1))
i=i.x
i===$&&B.c()
i=A.dW.aE(0,i)
v=B.n(22)
t=B.ar(A.aM,A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.18+w*0.12),A.I,32+w*10),D.aem],s)
q=B.n(22)
p=x.O
o=B.ap(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b1,0.9,A.x,k,0,B.a([A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kJ(m)?D.v5:L.nG
s=B.a([new B.ac(0,A.G,A.d.gH(C.kJ(m)?D.v5:L.nG).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kJ(j.a.c.w)?A.wx:A.qK,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ac,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fK,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fvw,A.K,k,k),A.aw,B.d(j.gcCE(),k,k,k,k,k,k,D.fAo,A.K,k,k),A.aC],m)
p=j.a.c
if(p.z){p=p.gT6()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v5:L.nG).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.V,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.Kz(A.z3,"Download PDF","pdf",A.d5,j.Jv(0),!1,k))
p=j.a.c
if(!p.z||p.gT6()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Kz(A.jJ,"Transfer to "+C.hB7(p==null?"":p),"transfer_hati",A.aY,j.Jv(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jv(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Kz(D.bPs,"Rename presentation","rename",A.ch,n,!1,k),A.an,new C.Kz(A.aov,"Duplicate","duplicate",A.b8,j.Jv(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.R)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Kz(A.ef,"Delete presentation","delete",A.ax,j.Jv(p),!0,k))
s.push(A.aw)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jv(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jv(n)
s.push(B.dP(B.da(B.bM(!1,E.aWd,k,k,!0,k,k,k,new C.d9K(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.az,k,D.bEf,k,k,k,k,k,A.ky,k,k)),n),new B.q(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.p(k,B.bx(q,new B.an(A.a0,k,A.ac,A.t,B.a([o,new B.D(D.bDo,B.x(s,A.m,k,A.e,A.O,0,A.p),k)],m),k),A.aq),A.f,k,A.Xp,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:45}
C.d9K.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.da8.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.da9.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d9I.prototype={
$1(d){var w=this.a
return w.m(new C.d9E(w))},
$S:23}
C.d9E.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d9J.prototype={
$1(d){var w=this.a
return w.m(new C.d9D(w))},
$S:72}
C.d9D.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9H.prototype={
$0(){var w=this.a
return w.m(new C.d9F(w))},
$S:0}
C.d9F.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9G.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eI5.prototype={
$0(){return $.bmy=!$.bmy},
$S:0}
C.eHW.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXl())u.azm()},
$S:0}
C.eI4.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eHX.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eHY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azm()},
$S:0}
C.eHS.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eHT.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eHU.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eHV.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.eI2.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b4,A.t,w,null)},
$S:1728}
C.eI3.prototype={
$2(d,e){var w
if(e.gc5(e)===A.im)return new B.d_(e,!1,d,null)
w=this.a
return w.cAy(w.e,d,e)},
$S:371}
C.eHZ.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:45}
C.eI_.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kl((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:45}
C.eI0.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.kl(v.gp(0)*0.35)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:45}
C.eI1.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fw(A.a9,B.da(e,v.gp(0)),null,w,!0)},
$S:45}
C.eI6.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZL().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZL().x
t===$&&B.c()
return new C.b33(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Jx(v.c,t,!0,new B.bP("cine"+u,x.W))},
$S:688}
C.eI8.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.c_,x.w).w.a.a*0.55)w.azm()
else w.coS()},
$S:72}
C.eI7.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fSR.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:480}
C.fT_.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.fSX(d),w,w),B.bM(!1,D.fTM,w,w,!0,w,w,w,new C.fSY(d,this.b,v),w,w),B.bH(A.aWv,w,new C.fSZ(d,v,this.c),w)],x.p),w,w,P.ua,new B.a5(320,w,t,w),w,w,w,w,D.fVj,w)},
$S:18}
C.fSX.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fSY.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hf_(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fSZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRI(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aR8(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fSQ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckt.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:595}
C.fSW.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fop.prototype={
$1(d){return C.heY(C.X_(B.a3(d,x.N,x.z)),this.a)},
$S:z+96}
C.h0Y.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:94}
C.h0Z.prototype={
$4(d,e,f,g){var w=A.cx.aE(0,e.gp(0))
return B.da(B.ed(A.A,D.hvw,0.94+w*0.06,null,null),w)},
$S:372}
C.h1_.prototype={
$1(d){var w=this
return new C.X1(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eHC.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHy.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHB.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X2(u,this.b,w.gaQt(),v,null)},
$S:z+99}
C.eHz.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHI.prototype={
$0(){var w=this.a
return w.m(new C.eHG(w))},
$S:0}
C.eHG.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eHJ.prototype={
$0(){var w=this.a
return w.m(new C.eHF(w))},
$S:0}
C.eHF.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eHK.prototype={
$1(d){return this.a.bNl(d,this.b)},
$S:z+100}
C.eHx.prototype={
$0(){var w=this.a
return w.m(new C.eHw(w,this.b))},
$S:0}
C.eHw.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eHL.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eHM.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eHN.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHO.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.fhj)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBf.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBe())},
$S:0}
C.eBe.prototype={
$0(){},
$S:0}
C.eBg.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eBb.prototype={
$1(d){return this.a.m(new C.eBa())},
$S:2}
C.eBa.prototype={
$0(){},
$S:0}
C.eBc.prototype={
$1(d){return this.a.b1C()},
$S:2}
C.eBd.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHR.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qs(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHQ(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHQ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fN7.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.em(new B.k_(this.c,new C.fN6(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:230}
C.fN6.prototype={
$3(d,e,f){return new C.Jx(e,!1,!1,new B.bP(e.a,x.W))},
$S:z+102}
C.fN8.prototype={
$1(d){var w=null
return B.oH(!1,B.at(new C.bxj(this.a,this.b,w),w,w,w),w,x.z)},
$S:326}
C.fNc.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.ma,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.ao$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1731}
C.fNd.prototype={
bof(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.he),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eQ(A.dM.gaU(r))],"image/png"))
t.toString
s=Ao.h5p(t)
w=4
return B.b(new B.qm(s,"load",!1,x.ev).gH(0).df(0,A.jX),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bof(d)},
$S:1732}
C.fN9.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fNa.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:155}
C.fNb.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fiv.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.frV,A.K,w,w)},
$S:1733}
C.fiw.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bx(v,B.kl(A.bp,w,A.dJ,8,w,e===0?w:e,w),A.aq)},
$S:617}
C.epv.prototype={
$1(d){this.a.a0_()
return null},
$S:11}
C.ept.prototype={
$0(){return this.a.e=D.bze},
$S:0}
C.epu.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bD
return this.b.e=w},
$S:0}
C.coJ.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.coK.prototype={
$2(d,e){return(d|e)>>>0},
$S:58};(function aliases(){var w=C.aND.prototype
w.bzq=w.t
w=C.aN7.prototype
w.byU=w.t
w=C.aMT.prototype
w.byE=w.t
w=C.aN6.prototype
w.byT=w.t
w=C.aNB.prototype
w.bzo=w.t
w=C.aOV.prototype
w.bAT=w.t
w=C.aLO.prototype
w.bxw=w.t
w=C.aNO.prototype
w.bzB=w.t
w=C.aNP.prototype
w.bzC=w.t
w=C.b4L.prototype
w.bu0=w.aES})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ine","aoK",104)
v(C.aKK.prototype,"gc8g","ZS",0)
var r
u(r=C.azg.prototype,"gcC_","cC0",38)
v(r,"gc95","aex",0)
v(r=C.azc.prototype,"gb_Z","Ez",3)
v(r,"gc92","c93",3)
v(r,"gays","yo",0)
v(r,"gaAu","JN",0)
t(C,"inF","hTh",105)
v(C.aFn.prototype,"gcc6","cc7",3)
s(C,"inQ",0,null,["$4$paper$photo$request$template"],["fUg"],106,0)
s(C,"inP",0,null,["$5$doc$history$instruction$photo$template"],["bEs"],107,0)
v(r=C.aFE.prototype,"gccQ","Js",0)
v(r,"gbMO","XF",0)
v(r,"gccT","afq",0)
v(r,"gccS","a_M",0)
v(r,"gb1h","EQ",0)
v(C.aFH.prototype,"gccY","a_O",0)
v(r=C.aH5.prototype,"gb1u","Qy",0)
v(r,"gctK","b5Q",3)
v(r,"gcDn","aD1",86)
v(r,"gbQJ","abf",0)
v(r,"gcdo","B2",0)
v(r=C.aJ0.prototype,"gcnB","a19",0)
v(r,"gcnJ","a1c",0)
v(r,"gbFE","a9E",0)
v(r,"gcds","afC",0)
v(C.aJ_.prototype,"gcdt","afD",0)
v(C.aD3.prototype,"gbED","a9r",0)
v(C.aBq.prototype,"gcdu","a_Z",0)
w(C,"io2","ilW",12)
w(C,"io0","iiP",12)
w(C,"io1","ikU",12)
v(r=C.aFY.prototype,"gcGH","cGI",3)
v(r,"gcrZ","cs_",3)
u(r,"gEW","agm",7)
v(r,"gbKr","atp",3)
u(r,"gEX","b2R",7)
v(r,"gcfK","ag3",0)
v(r,"gceB","ag2",0)
v(r,"gchV","agn",0)
v(r,"gbML","aaN",0)
v(r,"gciP","a0A",0)
v(r,"gciQ","agE",0)
v(r,"gcjm","agL",0)
v(r,"gci7","agq",0)
v(r,"gbQV","abj",0)
v(r,"gaU6","aU7",3)
v(r,"gaTc","aTd",3)
v(r,"gaOK","aOL",3)
v(r,"gaTb","aug",3)
u(r,"gbEU","bEV",80)
v(r,"gaCy","b91",3)
v(r,"gceD","ceE",3)
v(r,"gc1e","c1f",3)
v(r,"gbPd","bPe",3)
v(r=C.aG0.prototype,"gcFt","cFu",3)
v(r,"gcF6","cF7",3)
t(C,"io3","imc",2)
v(r=C.aFZ.prototype,"gcdA","Jx",0)
v(r,"gcvM","S3",0)
v(r,"gcdx","Jw",0)
v(r,"gcI0","a3J",0)
v(r,"gcjy","agS",0)
v(C.aFX.prototype,"gcdB","b1C",3)
v(r=C.aG_.prototype,"gbRL","abt",0)
u(r,"gcdy","cdz",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oe,C.SJ,C.bK2,C.bIl,C.cFZ,C.cFX,C.bSh,C.bat,C.cFY,C.bGV,C.coD,C.coB,C.coC,C.coA,C.auf,C.coz,C.bTj,C.oG,C.aGz,C.jA,C.o0,C.a8O,C.A5,C.lv,C.oQ,C.ml,C.A6,C.o4,C.a8W,C.asA,C.b34,C.eoV,C.ls,C.Fl,C.ev,C.ja,C.Fc,C.y6,C.eN,C.lY,C.i3,C.jW,C.a8X,C.ag7,C.b35,C.b4L,C.a3Z])
u(B.ju,[C.cO_,C.c3h,C.fIj,C.cPw,C.cOT,C.fNQ,C.e7h,C.e7g,C.epy,C.epx,C.fPe,C.fpz,C.fpA,C.ciI,C.ciJ,C.ciK,C.etc,C.f1i,C.f0G,C.f0F,C.f1J,C.f1g,C.f19,C.f1s,C.f28,C.fxC,C.f8s,C.f8r,C.f8V,C.eoY,C.fSN,C.e2v,C.fZw,C.fPB,C.ckl,C.ckj,C.cko,C.fQ5,C.fQ6,C.fQ7,C.fQ8,C.ck5,C.ck6,C.dPF,C.ck2,C.fQ4,C.ffS,C.e0d,C.cjW,C.eoE,C.fNF,C.eEQ,C.eFe,C.eFb,C.eFa,C.eFl,C.eFk,C.eGQ,C.eGP,C.eF4,C.eF3,C.eBE,C.eCO,C.eFN,C.eH7,C.eH6,C.eCB,C.eDM,C.eBl,C.d9L,C.eI2,C.eI3,C.eHZ,C.eI_,C.eI0,C.eI1,C.eI6,C.ckt,C.eHC,C.eHN,C.coK])
u(B.hu,[C.cO0,C.cO1,C.bTk,C.fF9,C.c3g,C.c3j,C.fW_,C.fh1,C.fgT,C.fh8,C.foq,C.fos,C.fIk,C.fIi,C.fVu,C.fEO,C.fWl,C.cPm,C.cPr,C.cPt,C.cPp,C.cPu,C.cPn,C.cPv,C.cPi,C.cPf,C.cPe,C.cPl,C.cOO,C.cOM,C.fMS,C.fMT,C.fsK,C.fNR,C.fNX,C.frL,C.cf1,C.fMQ,C.fMR,C.fHH,C.fHI,C.fNW,C.fNS,C.fNU,C.fNV,C.fNT,C.fZO,C.fHL,C.fHM,C.fHP,C.fHQ,C.fHT,C.fHU,C.h0g,C.fq1,C.h0r,C.esv,C.esw,C.esx,C.esd,C.esp,C.esq,C.ess,C.ciH,C.ciF,C.ciG,C.fNw,C.fNy,C.fNx,C.fpB,C.fpC,C.h0u,C.eth,C.eti,C.et9,C.eta,C.etd,C.ete,C.h0K,C.f29,C.f1z,C.f1j,C.f1w,C.f0B,C.f0C,C.f0D,C.f0H,C.f0I,C.f1Z,C.f25,C.f27,C.f1I,C.f1K,C.f1O,C.f1P,C.f1Q,C.f1U,C.f1L,C.f1M,C.f0T,C.f0U,C.f0V,C.f0W,C.f0X,C.f0Y,C.f0Z,C.f1_,C.f10,C.f0e,C.f0f,C.f0g,C.f0h,C.f0j,C.f0k,C.f0N,C.f0O,C.f0P,C.f0Q,C.f0R,C.f0o,C.f0p,C.f0q,C.f0r,C.f18,C.f1r,C.fKV,C.fKU,C.ckc,C.fxB,C.fSJ,C.fSC,C.fSF,C.fQA,C.fQB,C.fQC,C.fL1,C.fL0,C.fL_,C.fKY,C.fpv,C.fpw,C.fpx,C.h0W,C.f8u,C.f8v,C.f8o,C.f8i,C.f8O,C.f8P,C.f8R,C.f8S,C.f8N,C.h0V,C.f89,C.fwS,C.eoX,C.fSL,C.fSM,C.fSO,C.fSH,C.fSI,C.h08,C.dsc,C.dsi,C.eoW,C.flQ,C.flS,C.flR,C.flP,C.fM5,C.fM7,C.fnV,C.fSd,C.fSe,C.fSf,C.fSq,C.fSv,C.fSw,C.fSx,C.fSy,C.fSz,C.fSA,C.fSB,C.fSg,C.fSh,C.fSi,C.fSj,C.fSk,C.fSl,C.fSm,C.fSn,C.fSo,C.fSp,C.fSr,C.fSs,C.fSt,C.fSu,C.fJW,C.fwa,C.fw9,C.fSU,C.e2w,C.e2u,C.f7i,C.ceD,C.ceF,C.fZy,C.dhw,C.dhy,C.fZx,C.fZv,C.h0U,C.fPx,C.dh6,C.fHX,C.fHY,C.cka,C.ckb,C.ck9,C.ck_,C.ck0,C.cjX,C.cjY,C.cjZ,C.ckr,C.ckm,C.ckh,C.cki,C.ckk,C.ckn,C.ckp,C.fQ9,C.ck4,C.ck7,C.ck8,C.cke,C.ckf,C.fT0,C.fS7,C.ck3,C.ck1,C.fQ3,C.fyU,C.cjV,C.f4N,C.fBW,C.eHt,C.eDT,C.eDU,C.eFt,C.eFh,C.eFi,C.eDg,C.eHe,C.eHf,C.eHg,C.eCF,C.eEX,C.eEZ,C.eEz,C.eEw,C.eDP,C.eDQ,C.eEG,C.eCH,C.eES,C.eET,C.eER,C.eEV,C.eEU,C.eFc,C.eFd,C.eFf,C.eF8,C.eD_,C.eCX,C.eFm,C.eCP,C.eHd,C.eBn,C.eCS,C.eCR,C.eC5,C.eCa,C.eC8,C.eC6,C.eHl,C.eHm,C.eHn,C.eHk,C.eGS,C.eGR,C.eGL,C.eGN,C.eGD,C.eHb,C.eH9,C.eBv,C.eBr,C.eDN,C.eCe,C.eBG,C.eBF,C.eC1,C.eC2,C.eDe,C.eCg,C.eCk,C.eF5,C.eGE,C.eGF,C.eGG,C.eGH,C.eCJ,C.eCK,C.eCL,C.eEf,C.eDa,C.eD2,C.eD9,C.eEp,C.eEq,C.eGc,C.eGe,C.eGy,C.eGA,C.eGf,C.eGg,C.eCc,C.eDS,C.eDR,C.eH1,C.eCA,C.eCs,C.eCt,C.eCw,C.eCx,C.eEu,C.eDy,C.eDz,C.eDA,C.eDB,C.eDC,C.eDD,C.eDE,C.eDF,C.eDG,C.eDH,C.eDI,C.eFq,C.d9I,C.d9J,C.eI8,C.fSR,C.fT_,C.fSQ,C.fSW,C.fop,C.h0Y,C.h0Z,C.h1_,C.eHB,C.eHK,C.eBg,C.eBb,C.eBc,C.fN7,C.fN6,C.fN8,C.fNd,C.fN9,C.fNa,C.fiv,C.fiw,C.epv,C.coJ])
u(B.iH,[C.cO2,C.fgY,C.fh2,C.fh3,C.fgZ,C.fh_,C.fh0,C.fgR,C.fgS,C.fgU,C.fgV,C.fh7,C.fh6,C.fgX,C.fgW,C.fh4,C.fh5,C.fha,C.fhb,C.fh9,C.cPo,C.cPs,C.cPq,C.cPg,C.cPh,C.cPj,C.cPc,C.cPd,C.cPk,C.cPb,C.cPa,C.cP9,C.cOD,C.cOC,C.cOF,C.cON,C.cOG,C.cOE,C.cOI,C.cOJ,C.cOK,C.cOH,C.cOL,C.cOP,C.cOQ,C.cOR,C.cOS,C.fHF,C.fHG,C.fHD,C.fHE,C.ekM,C.ekK,C.ekL,C.ekN,C.ekO,C.e7f,C.fHJ,C.fHK,C.fHN,C.fHO,C.fHR,C.fHS,C.epw,C.fPE,C.fPD,C.esu,C.est,C.es7,C.es3,C.ese,C.esf,C.esg,C.es9,C.esa,C.esb,C.esc,C.es8,C.es5,C.es6,C.esm,C.esn,C.esl,C.eso,C.esk,C.esj,C.esi,C.esr,C.esh,C.es4,C.etg,C.et4,C.et5,C.etb,C.et6,C.et8,C.et7,C.etf,C.f11,C.f1p,C.f0L,C.f0M,C.f0J,C.f0K,C.f1v,C.f1u,C.f1t,C.f1y,C.f1x,C.f0A,C.f0E,C.f0z,C.f0y,C.f0v,C.f0x,C.f0w,C.f26,C.f2_,C.f1Y,C.f20,C.f1X,C.f21,C.f1W,C.f22,C.f23,C.f24,C.f1V,C.f1H,C.f1C,C.f1N,C.f1G,C.f1R,C.f1F,C.f1S,C.f1E,C.f1T,C.f1D,C.f1m,C.f1l,C.f1n,C.f1k,C.f1o,C.f1e,C.f1d,C.f1f,C.f1c,C.f1b,C.f1a,C.f0i,C.f0d,C.f0s,C.f0n,C.f0t,C.f0m,C.f0u,C.f0l,C.f1h,C.f15,C.f14,C.f16,C.f13,C.f17,C.f12,C.f1q,C.f1B,C.f1A,C.f0S,C.fSE,C.fSG,C.fSK,C.fKZ,C.fNp,C.fNn,C.fNo,C.f8w,C.f8x,C.f8t,C.f8n,C.f8m,C.f8p,C.f8q,C.f8c,C.f8d,C.f8f,C.f8g,C.f8h,C.f8e,C.f8j,C.f8K,C.f8L,C.f8J,C.f8M,C.f8I,C.f8H,C.f8G,C.f8Q,C.f8F,C.f8E,C.f8D,C.f8T,C.f8C,C.f8U,C.f8B,C.f8A,C.f8k,C.f8l,C.f8z,C.f8y,C.f85,C.f86,C.f87,C.f88,C.f84,C.f8a,C.f8b,C.dsb,C.dsd,C.dsg,C.dsh,C.dsf,C.dse,C.fM6,C.fJX,C.ceE,C.ceG,C.dhp,C.dhu,C.dhv,C.dht,C.dhs,C.dhx,C.dhr,C.dhq,C.dhz,C.fZu,C.dod,C.doe,C.dof,C.fHV,C.fHW,C.cks,C.eBh,C.eBi,C.eBj,C.eBk,C.fyS,C.fyT,C.e0f,C.e0e,C.dej,C.dei,C.eHv,C.eHu,C.eDV,C.eGB,C.eHr,C.eFr,C.eHh,C.eHi,C.eHs,C.eEA,C.eCD,C.eCE,C.eEY,C.eEy,C.eEv,C.eEx,C.eEB,C.eEC,C.eED,C.eEE,C.eEF,C.eEH,C.eCI,C.eEK,C.eEL,C.eEM,C.eEN,C.eEO,C.eEP,C.eEJ,C.eEW,C.eF9,C.eF7,C.eFg,C.eEI,C.eCY,C.eCZ,C.eD0,C.eFj,C.eFn,C.eBC,C.eCW,C.eCU,C.eFv,C.eCQ,C.eFu,C.eCG,C.eDh,C.eHc,C.eGC,C.eBD,C.eBA,C.eBq,C.eBm,C.eBo,C.eCT,C.eC4,C.eC9,C.eC7,C.eC3,C.eF6,C.eHo,C.eGO,C.eGJ,C.eGK,C.eGM,C.eDL,C.eDK,C.eHa,C.eBt,C.eBu,C.eBw,C.eBx,C.eBB,C.eBs,C.eFs,C.eHj,C.eDO,C.eCd,C.eBp,C.eDf,C.eBy,C.eBH,C.eBI,C.eBJ,C.eBU,C.eBX,C.eBY,C.eBZ,C.eC_,C.eC0,C.eBK,C.eBL,C.eBM,C.eBN,C.eBO,C.eBP,C.eBQ,C.eBR,C.eBS,C.eBT,C.eBV,C.eBW,C.eDd,C.eDc,C.eDb,C.eBz,C.eCh,C.eCf,C.eCi,C.eCj,C.eCV,C.eF1,C.eF2,C.eF_,C.eF0,C.eGI,C.eCN,C.eCM,C.eEe,C.eEd,C.eEg,C.eEc,C.eEh,C.eEb,C.eEi,C.eEa,C.eEj,C.eE9,C.eEk,C.eE8,C.eEl,C.eE7,C.eEm,C.eE6,C.eE_,C.eE0,C.eE1,C.eDZ,C.eE2,C.eDY,C.eE3,C.eDX,C.eE4,C.eDW,C.eE5,C.eD7,C.eD8,C.eD1,C.eD3,C.eD4,C.eD5,C.eD6,C.eHp,C.eHq,C.eEo,C.eEn,C.eEr,C.eFO,C.eFP,C.eFQ,C.eG0,C.eGb,C.eGm,C.eGt,C.eGu,C.eGv,C.eGw,C.eGx,C.eFR,C.eFS,C.eFT,C.eFU,C.eFV,C.eFW,C.eFX,C.eFY,C.eFZ,C.eG_,C.eG1,C.eG2,C.eG3,C.eG4,C.eG5,C.eG6,C.eG7,C.eG8,C.eG9,C.eFE,C.eGa,C.eFM,C.eFL,C.eGd,C.eFK,C.eFA,C.eGz,C.eFJ,C.eFz,C.eFx,C.eFI,C.eFy,C.eFw,C.eGh,C.eFH,C.eGi,C.eGj,C.eGk,C.eGl,C.eFG,C.eGn,C.eGo,C.eGp,C.eFF,C.eGq,C.eFD,C.eGr,C.eFC,C.eGs,C.eFB,C.eCb,C.eGV,C.eGU,C.eGW,C.eGT,C.eDk,C.eDj,C.eDl,C.eDi,C.eH5,C.eH0,C.eH4,C.eGX,C.eGY,C.eGZ,C.eH_,C.eH2,C.eH3,C.eH8,C.eCC,C.eCp,C.eCq,C.eCr,C.eCo,C.eCv,C.eCu,C.eCn,C.eCm,C.eCy,C.eCl,C.eCz,C.eEt,C.eEs,C.eDx,C.eDw,C.eDv,C.eDu,C.eDt,C.eDs,C.eDr,C.eDq,C.eDn,C.eDp,C.eDo,C.eDm,C.eDJ,C.eFo,C.eFp,C.d9K,C.da8,C.da9,C.d9E,C.d9D,C.d9H,C.d9F,C.d9G,C.eI5,C.eHW,C.eI4,C.eHX,C.eHY,C.eHS,C.eHT,C.eHU,C.eHV,C.eI7,C.fSX,C.fSY,C.fSZ,C.eHy,C.eHz,C.eHA,C.eHD,C.eHE,C.eHH,C.eHI,C.eHG,C.eHJ,C.eHF,C.eHx,C.eHw,C.eHL,C.eHM,C.eHO,C.eHP,C.eBf,C.eBe,C.eBa,C.eBd,C.eHR,C.eHQ,C.fNc,C.fNb,C.ept,C.epu])
t(C.aT7,B.M)
u(B.lB,[C.a4H,C.ayI,C.axm,C.y4,C.y7,C.l8,C.tJ,C.C3,C.rR,C.wq,C.at7,C.Jy,C.asz,C.v7,C.mP,C.hF,C.a9z])
u(C.bSh,[C.cG_,C.bSi])
u(C.coD,[C.coH,C.aue])
t(C.coG,C.coB)
t(C.coF,C.coA)
t(C.coI,C.coF)
t(C.coE,C.coC)
t(C.coy,C.coz)
t(C.bc2,B.p8)
t(C.cz5,B.awP)
t(C.a9l,B.xS)
u(B.af,[C.a2_,C.ZH,C.ZF,C.arG,C.WQ,C.WR,C.a0Z,C.a1v,C.a1u,C.aFy,C.a_S,C.Of,C.a_p,C.a_K,C.apB,C.aKp,C.W7,C.aB5,C.a8E,C.OJ,C.aAs,C.Kz,C.a0B,C.X1,C.X2,C.aFW,C.asE,C.a8F])
u(B.ah,[C.aKK,C.azg,C.azc,C.aFn,C.aFE,C.aFH,C.aH5,C.aJ0,C.aJ_,C.aND,C.aD3,C.aN7,C.aBq,C.bi3,C.aMT,C.aOV,C.aN6,C.bfR,C.aNB,C.aNO,C.aLO,C.beC,C.aNP,C.aFZ,C.bmx,C.aFX,C.aG_,C.bmg])
u(B.ax,[C.aze,C.aef,C.adE,C.blh,C.aei,C.afY,C.b2G,C.buT,C.b30,C.bnO,C.btp,C.b0V,C.b33,C.ael,C.aeC,C.b31,C.Jx,C.b0Y,C.beS,C.Qs,C.KF,C.bjD,C.bjC,C.bxj])
u(B.HZ,[C.bej,C.bwh,C.aL6,C.bh3,C.btO])
u(B.mg,[C.bei,C.baM,C.btL,C.bdR,C.bhs,C.bjK,C.bgx,C.bho,C.bh5,C.bq9,C.bbV,C.bby,C.bxf,C.bud,C.btl,C.bgq,C.b2Z,C.bsf,C.bti])
t(C.bmd,C.aND)
t(C.blz,C.aN7)
t(C.blj,C.aMT)
t(C.bwK,C.aOV)
t(C.blv,C.aN6)
t(C.bmb,C.aNB)
t(C.bzC,C.aNO)
t(C.aFY,C.bzC)
t(C.beD,C.aLO)
t(C.aG0,C.aNP)
t(C.bx5,B.j1)
t(C.a9y,B.kF)
t(C.coL,C.b4L)
t(C.aje,C.a3Z)
u(B.YH,[C.aSY,C.aUr])
t(C.ayi,C.aSY)
w(C.aND,B.cd)
w(C.aN7,B.cd)
w(C.aMT,B.cd)
w(C.aN6,B.cd)
w(C.aNB,B.cd)
w(C.aOV,B.cd)
w(C.aLO,B.eO)
w(C.aNO,B.cd)
v(C.bzC,B.eB)
w(C.aNP,B.cd)})()
B.j2(b.typeUniverse,JSON.parse('{"aTJ":{"hM":["aTJ"]},"oe":{"aTJ":[],"hM":["aTJ"]},"aT7":{"M":["SJ"],"M.E":"SJ"},"bc2":{"p8":[]},"a9l":{"xS":[],"oz":[]},"a2_":{"af":[],"v":[]},"aKK":{"ah":["a2_"]},"ZH":{"af":[],"v":[]},"ZF":{"af":[],"v":[]},"azg":{"ah":["ZH"]},"azc":{"ah":["ZF"]},"aze":{"ax":[],"v":[]},"arG":{"af":[],"v":[]},"aFn":{"ah":["arG"]},"aef":{"ax":[],"v":[]},"adE":{"ax":[],"v":[]},"aei":{"ax":[],"v":[]},"afY":{"ax":[],"v":[]},"blh":{"ax":[],"v":[]},"WQ":{"af":[],"v":[]},"aFE":{"ah":["WQ"]},"b2G":{"ax":[],"v":[]},"bej":{"aC":[]},"bei":{"aC":[]},"bwh":{"aC":[]},"baM":{"aC":[]},"btL":{"aC":[]},"WR":{"af":[],"v":[]},"aFH":{"ah":["WR"]},"bdR":{"aC":[]},"a0Z":{"af":[],"v":[]},"aH5":{"ah":["a0Z"]},"bhs":{"aC":[]},"a1v":{"af":[],"v":[]},"a1u":{"af":[],"v":[]},"aFy":{"af":[],"v":[]},"a_S":{"af":[],"v":[]},"aJ0":{"ah":["a1v"]},"aJ_":{"ah":["a1u"]},"bmd":{"ah":["aFy"]},"bjK":{"aC":[]},"aD3":{"ah":["a_S"]},"buT":{"ax":[],"v":[]},"b30":{"ax":[],"v":[]},"bnO":{"ax":[],"v":[]},"Of":{"af":[],"v":[]},"a_p":{"af":[],"v":[]},"blz":{"ah":["Of"]},"btp":{"ax":[],"v":[]},"bgx":{"aC":[]},"b0V":{"ax":[],"v":[]},"aBq":{"ah":["a_p"]},"a_K":{"af":[],"v":[]},"bi3":{"ah":["a_K"]},"bho":{"aC":[]},"bh5":{"aC":[]},"bq9":{"aC":[]},"bbV":{"aC":[]},"bby":{"aC":[]},"bxf":{"aC":[]},"bud":{"aC":[]},"btl":{"aC":[]},"bgq":{"aC":[]},"apB":{"af":[],"v":[]},"b33":{"ax":[],"v":[]},"blj":{"ah":["apB"]},"ael":{"ax":[],"v":[]},"aeC":{"ax":[],"v":[]},"aKp":{"af":[],"v":[]},"W7":{"af":[],"v":[]},"Jx":{"ax":[],"v":[]},"aB5":{"af":[],"v":[]},"a8E":{"af":[],"v":[]},"b31":{"ax":[],"v":[]},"b2Z":{"aC":[]},"bwK":{"ah":["aKp"]},"aL6":{"aC":[]},"blv":{"ah":["W7"]},"bfR":{"ah":["aB5"]},"bmb":{"ah":["a8E"]},"b0Y":{"ax":[],"v":[]},"bh3":{"aC":[]},"bsf":{"aC":[]},"bti":{"aC":[]},"aAs":{"af":[],"v":[]},"Kz":{"af":[],"v":[]},"a0B":{"af":[],"v":[]},"KF":{"ax":[],"v":[]},"OJ":{"af":[],"v":[]},"aFY":{"ah":["OJ"],"eB":[]},"beD":{"ah":["aAs"]},"beS":{"ax":[],"v":[]},"beC":{"ah":["Kz"]},"Qs":{"ax":[],"v":[]},"aG0":{"ah":["a0B"]},"btO":{"aC":[]},"bjD":{"ax":[],"v":[]},"bjC":{"ax":[],"v":[]},"X1":{"af":[],"v":[]},"X2":{"af":[],"v":[]},"aFW":{"af":[],"v":[]},"asE":{"af":[],"v":[]},"aFZ":{"ah":["X1"]},"bmx":{"ah":["X2"]},"aFX":{"ah":["aFW"]},"bx5":{"j1":[]},"aG_":{"ah":["asE"]},"bxj":{"ax":[],"v":[]},"a8F":{"af":[],"v":[]},"bmg":{"ah":["a8F"]},"a9y":{"kF":["ft<eU>"],"kr":["ft<eU>"]},"aje":{"a3Z":[]},"aSY":{"je":[],"fi":[]},"ayi":{"je":[],"fi":[]},"aUr":{"je":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mq"),U:w("vU<qi>"),bz:w("u"),M:w("df<m>"),bo:w("jQ"),g7:w("U5"),gc:w("aB<iE?>"),bq:w("aB<~>"),cc:w("BW"),fS:w("Ez"),an:w("II"),bm:w("O<SJ>"),X:w("O<SM>"),f3:w("O<aTJ>"),aK:w("O<nm>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lP>"),d5:w("O<aB<bA<F,+icon3d,picture(m?,m?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nu>"),cd:w("O<ai<jA>>"),ez:w("O<a8<m,aE>>"),d:w("O<a8<m,@>>"),B:w("O<mL>"),h:w("O<jA>"),gE:w("O<A5>"),k:w("O<oG>"),g:w("O<lY>"),D:w("O<i3>"),u:w("O<eN>"),m:w("O<v7>"),i:w("O<hF>"),aC:w("O<a8W>"),o:w("O<A6>"),e3:w("O<aE>"),dN:w("O<q>"),v:w("O<fT>"),cR:w("O<j_>"),J:w("O<jq>"),gx:w("O<pw<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(I,I)>"),ek:w("O<+(F,m)>"),n:w("O<+(F,F)>"),r:w("O<cT>"),s:w("O<m>"),aS:w("O<j1>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<bat>"),bx:w("O<aGz>"),gz:w("O<ag7>"),x:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<q?>"),Z:w("O<F?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oG>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bA<F,+icon3d,picture(m?,m?)>"),P:w("a8<m,@>"),f:w("a8<@,@>"),gI:w("a8<F,+icon3d,picture(m?,m?)>"),bR:w("N<hF,v>"),eC:w("N<o4,m>"),cT:w("N<jW,D>"),dv:w("N<m,m>"),f0:w("N<m,v>"),gN:w("N<F,q0>"),gh:w("N<mP,jC<mP>>"),w:w("iB"),ei:w("iE"),g2:w("rH"),fB:w("Fc"),b6:w("A5"),gX:w("a8O"),dt:w("lv"),ea:w("oG"),bt:w("lY"),I:w("i3"),F:w("eN"),fO:w("mP"),ff:w("v7"),fP:w("hF"),Q:w("wq"),dO:w("asA"),a:w("ct"),C:w("aE"),dw:w("auf"),di:w("a9z"),Y:w("eU"),fz:w("+(m,m)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("FI"),dB:w("ds<q>"),bJ:w("ds<m>"),_:w("e_<m>"),N:w("m"),fw:w("qi"),bO:w("au"),K:w("bp<q>"),b:w("bp<I>"),E:w("dK"),W:w("bP<m>"),ac:w("bP<F>"),ex:w("k_<lY>"),cI:w("k_<m>"),cl:w("k_<I>"),b4:w("Y<ls>"),a8:w("Y<ml>"),fR:w("Y<+(m,m)>"),co:w("e9<q>"),l:w("v"),b2:w("c2<~>"),ev:w("qm<dZ>"),dT:w("bk<~>"),q:w("mu"),y:w("P"),gR:w("I"),z:w("@"),S:w("F"),at:w("bd?"),gw:w("ai<a8<m,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iE?"),af:w("i3?"),go:w("b35?"),a6:w("a8X?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1n=new B.bL(A.aA,null,null,H.arX,null)
D.b1w=new B.d9(0,-0.15)
D.b1y=new B.d9(0.62,0)
D.b1B=new B.d9(-0.35,-0.45)
D.b1L=new B.d9(0.9,-0.85)
D.b3W=new B.bg(H.Uk,H.Uk,A.fI,A.fI)
D.b4b=new B.ay(A.b8,1,A.r,-1)
D.bpK=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4n=new B.ay(D.bpK,1,A.r,-1)
D.b4z=new B.ay(A.aE,1.5,A.r,-1)
D.b4E=new B.ay(A.b8,1.6,A.r,-1)
D.b4U=new B.ay(A.aE,1.4,A.r,-1)
D.b6f=new B.o(null,null,null,null,null,K.I1,A.a7)
D.c76=new B.a9(A.a6,A.a9,A.x,G.a5B,null,null)
D.b6n=new B.o(null,null,null,null,null,D.c76,A.a7)
D.aec=new B.o(A.av,null,null,A.tL,null,null,A.n)
D.biI=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bpH=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d5J=w([D.biI,D.bpH],x.O)
D.exU=new B.c_(A.A,0.5,A.x,null,0,D.d5J,null,null)
D.b6G=new B.o(null,null,null,null,null,D.exU,A.a7)
D.YZ=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b59=new B.bG(Q.vM,A.a1,A.a1,A.a1)
D.b6I=new B.o(D.YZ,null,D.b59,null,null,null,A.n)
D.c8S=new B.a9(A.a6,A.a9,A.x,A.RY,null,null)
D.b6P=new B.o(null,null,null,null,null,D.c8S,A.a7)
D.afP=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b6S=new B.o(D.afP,null,null,A.rj,null,null,A.n)
D.b6W=new B.o(A.jB,null,null,null,null,null,A.a7)
D.b6Z=new B.o(A1.ah4,null,H.adO,A.mA,null,null,A.n)
D.Ff=new B.o(A.dH,null,null,null,null,null,A.a7)
D.b75=new B.o(null,null,null,null,null,E.wP,A.a7)
D.db1=w([E.ai5,A.c3],x.O)
D.c8t=new B.a9(A.b1,A.b7,A.x,D.db1,null,null)
D.b79=new B.o(null,null,null,A.mA,null,D.c8t,A.n)
D.dmw=w([A.bm,A.dH,A.ko],x.O)
D.a3A=new B.a9(A.aA,A.aF,A.x,D.dmw,null,null)
D.b7m=new B.o(null,null,null,null,null,D.a3A,A.n)
D.b7n=new B.o(D.afP,null,null,A.l5,null,null,A.n)
D.cAn=w([A.d9,A.bm],x.O)
D.c8k=new B.a9(A.aA,A.aF,A.x,D.cAn,null,null)
D.b7r=new B.o(null,null,null,null,null,D.c8k,A.n)
D.b7B=new B.o(null,null,null,null,null,G.uX,A.a7)
D.b7W=new B.o(A.ai7,null,null,null,null,null,A.a7)
D.bjI=new B.u(0.5647058823529412,0,0,0,A.q)
D.aem=new B.ac(0,A.G,D.bjI,A.Jp,28)
D.ba4=new B.aXV()
D.baD=new C.cz5()
D.baQ=new C.bc2()
D.aeR=new B.cc(A.A,null,null,A.a3p,null)
D.bdx=new B.fk(null,null,null,null,null,E.nt,null,null,null,null)
D.bbp=new B.cc(A.A,null,null,D.bdx,null)
D.bSq=new B.ae(A.e9,28,A.c,null,null,null)
D.bbV=new B.cc(A.A,null,null,D.bSq,null)
D.bdu=new B.fk(2,null,null,null,null,A.c4,null,null,null,null)
D.bci=new B.cc(A.A,null,null,D.bdu,null)
D.bSK=new B.ae(K.Pw,40,A.bC,null,null,null)
D.bcj=new B.cc(A.A,null,null,D.bSK,null)
D.beo=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.beB=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bf3=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfe=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bfS=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bg8=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bga=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Md=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bgD=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bgL=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ag9=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bhC=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biv=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agp=new B.u(1,1,1,0.9725490196078431,A.q)
D.biR=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bj5=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bj8=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjo=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjO=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bls=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YH=new B.u(0.8509803921568627,0,0,0,A.q)
D.blD=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.blK=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.aho=new B.u(0.6,0,0,0,A.q)
D.ahq=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bnp=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.u6=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bnT=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bol=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.boK=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ail=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Za=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BN=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MT=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jy=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aiS=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zj=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bsz=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bt4=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btk=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZL=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bux=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yk=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bv7=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bvs=new B.hL(A.aV,!0,null,null)
D.fyA=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZy=new B.B("Bio link",null,D.fyA,null,null,null,null,null,null,null,null,null)
D.bcc=new B.cc(A.A,null,null,D.fZy,null)
D.bvH=new B.hL(A.Bp,!0,D.bcc,null)
D.Nn=new C.a4H(0,"none")
D.ak8=new C.a4H(1,"deflate")
D.ak9=new C.a4H(2,"bzip2")
D.bwG=new B.ky(0.165,0.84,0.44,1)
D.dbl=w([A.cf,A.dJ,A.aE],x.O)
D.c7B=new B.a9(A.aA,A.aF,A.x,D.dbl,null,null)
D.b6k=new B.o(null,null,null,null,null,D.c7B,A.n)
D.c0Q=new B.ae(A.f3,null,A.ad,null,null,null)
D.bcS=new B.cc(A.A,null,null,D.c0Q,null)
D.bxe=new B.l3(D.b6k,A.bi,D.bcS,null)
D.bsO=new B.u(0.058823529411764705,1,1,1,A.q)
D.deM=w([A.bB,A.rt,A.rt,D.bsO],x.O)
D.cRR=w([0,0.32,0.7,1],x.x)
D.c8a=new B.a9(A.aA,A.aF,A.x,D.deM,D.cRR,null)
D.b69=new B.o(null,null,null,null,null,D.c8a,A.n)
D.bxk=new B.l3(D.b69,A.bi,null,null)
D.bys=new B.mC(1,1,null,null,null,A.bp,null)
D.byv=new B.mC(1,null,null,null,null,D.Zj,null)
D.byZ=new B.bd(125e4)
D.bz4=new B.bd(17e4)
D.bze=new B.bd(35964e8)
D.bzl=new B.bd(55e4)
D.bzp=new B.bd(68e4)
D.bzQ=new B.ik(0,0,0,5)
D.bA5=new B.Q(0,16,16,0)
D.bAg=new B.Q(0,36,0,36)
D.bAo=new B.Q(0,54,0,0)
D.bAv=new B.Q(10,0,10,3)
D.bAH=new B.ik(10,16,10,10)
D.bAT=new B.Q(10,6,4,6)
D.bAW=new B.Q(10,8,10,6)
D.al8=new B.Q(11,8,11,11)
D.bB0=new B.Q(12,0,12,24)
D.bBd=new B.Q(12,12,12,4)
D.bBg=new B.Q(12,12,8,12)
D.bBw=new B.Q(12,8,8,12)
D.bBV=new B.Q(14,14,14,0)
D.bC_=new B.Q(14,14,14,90)
D.bCl=new B.Q(16,10,16,16)
D.bCm=new B.Q(16,10,16,20)
D.alU=new B.Q(16,6,16,28)
D.bCV=new B.Q(18,0,18,10)
D.bCX=new B.Q(18,0,18,30)
D.bCZ=new B.Q(18,10,18,12)
D.bD_=new B.Q(18,10,18,14)
D.bDj=new B.Q(18,16,14,18)
D.bDo=new B.Q(18,18,18,12)
D.bDu=new B.Q(18,26,18,12)
D.bDz=new B.Q(18,34,18,34)
D.bDA=new B.Q(18,4,18,14)
D.bDF=new B.Q(18,8,18,24)
D.bDY=new B.Q(20,16,14,4)
D.bE2=new B.Q(20,18,12,4)
D.bE7=new B.Q(20,20,12,20)
D.bEa=new B.Q(20,22,20,20)
D.bEf=new B.Q(20,6,20,6)
D.bEp=new B.Q(22,18,22,18)
D.bEx=new B.Q(22,24,22,0)
D.bEA=new B.Q(22,24,22,4)
D.bEI=new B.Q(22,60,22,22)
D.bEO=new B.Q(24,24,24,22)
D.bEY=new B.Q(26,10,60,10)
D.bF5=new B.Q(28,44,28,44)
D.bFm=new B.Q(32,44,32,44)
D.bFu=new B.Q(38,30,38,20)
D.bFz=new B.Q(4,0,0,6)
D.bFL=new B.ik(4,4,4,4)
D.bGd=new B.ik(6,5,6,5)
D.bGi=new B.Q(6,6,8,6)
D.bGu=new B.Q(8,14,8,14)
D.bGv=new B.Q(8,22,8,22)
D.bGE=new B.Q(8,6,12,6)
D.bGN=new B.Q(8,8,8,4)
D.amQ=new B.Q(9,9,9,6)
D.bGZ=new B.ik(2.5,2.5,2.5,2.5)
D.bH_=new B.Q(10.5,0,10.5,0)
D.bH0=new B.Q(7,1.5,7,1.5)
D.d2y=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHg=new B.uH(null,null,D.d2y,A.xW)
D.d_l=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHh=new B.uH(null,null,D.d_l,A.xW)
D.aVT=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYQ=new B.B("WORD DESIGN",null,D.aVT,null,null,null,null,null,null,null,null,null)
D.bHZ=new B.by(1,A.bc,D.fYQ,null)
D.fYu=new B.B("Slides database",null,Ac.tw,null,null,null,null,null,null,null,null,null)
D.fVH=new B.B("Admin only \xb7 keep as many as you like",null,V.aVm,null,null,null,null,null,null,null,null,null)
D.dvi=w([D.fYu,A.bG,D.fVH],x.p)
D.bw7=new B.fj(A.ai,A.e,A.i,A.E,null,A.p,null,0,D.dvi,null)
D.bI1=new B.by(1,A.bc,D.bw7,null)
D.fPU=new B.B("NGMY logo",null,A.fC,null,null,null,null,null,null,null,null,null)
D.bI4=new B.by(1,A.bc,D.fPU,null)
D.fwg=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_U=new B.B("TALK TO THE EDITOR",null,D.fwg,null,null,null,null,null,null,null,null,null)
D.bIn=new B.by(1,A.bc,D.h_U,null)
D.fJA=new B.B("Tell the AI what to change",null,Ac.tw,null,null,null,null,null,null,null,null,null)
D.bIH=new B.by(1,A.bc,D.fJA,null)
D.bKb=new B.Ep(!0,"video/mp4")
D.fus=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new B.B("Move presentations between devices",null,D.fus,null,null,null,!1,null,null,1,null,null)
D.bKf=new B.qE(A.e2,A.a6,A.f,D.fHv,null)
D.fIK=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bKg=new B.qE(A.e2,A.A,A.f,D.fIK,null)
D.bKv=new B.dn(1,A.co,D.bKg,null)
D.a1M=new B.a0(60988,"MaterialIcons",!1)
D.bNX=new B.a0(61352,"MaterialIcons",!1)
D.aoz=new B.a0(61531,"MaterialIcons",!1)
D.bP8=new B.a0(63062,"MaterialIcons",!1)
D.bPf=new B.a0(63109,"MaterialIcons",!1)
D.bPs=new B.a0(63206,"MaterialIcons",!1)
D.apg=new B.a0(63238,"MaterialIcons",!1)
D.bPJ=new B.a0(63338,"MaterialIcons",!1)
D.a2m=new B.a0(63365,"MaterialIcons",!1)
D.a2n=new B.a0(63367,"MaterialIcons",!1)
D.a2o=new B.a0(63368,"MaterialIcons",!1)
D.aps=new B.a0(63384,"MaterialIcons",!1)
D.bQ0=new B.a0(63525,"MaterialIcons",!1)
D.bQ4=new B.a0(63568,"MaterialIcons",!1)
D.bQp=new B.a0(983072,"MaterialIcons",!1)
D.bQO=new B.a0(983271,"MaterialIcons",!0)
D.aqx=new B.a0(983965,"MaterialIcons",!1)
D.aqy=new B.a0(983966,"MaterialIcons",!1)
D.bRL=new B.a0(984592,"MaterialIcons",!1)
D.bS2=new B.ae(A.uE,16,A.aD,null,null,null)
D.aqK=new B.ae(A.pq,18,A.c,null,null,null)
D.bSr=new B.ae(A.Cs,18,N.lF,null,null,null)
D.bT6=new B.ae(A.jG,11,null,null,null,null)
D.bTh=new B.ae(A.a22,null,A.et,null,null,null)
D.bTP=new B.ae(A.rU,18,A.aD,null,null,null)
D.bTV=new B.ae(A4.CK,14,null,null,null,null)
D.bTW=new B.ae(A.ef,28,A.c0,null,null,null)
D.bU7=new B.ae(A.qK,20,A.c,null,null,null)
D.bUe=new B.ae(A.zd,null,null,null,null,null)
D.bUk=new B.ae(A.jF,18,A.hm,null,null,null)
D.bUp=new B.ae(A.ku,null,null,null,null,null)
D.bPa=new B.a0(63065,"MaterialIcons",!1)
D.bV1=new B.ae(D.bPa,15,A.c,null,null,null)
D.bPg=new B.a0(63113,"MaterialIcons",!1)
D.bV7=new B.ae(D.bPg,null,A.ad,null,null,null)
D.bVv=new B.ae(A.uC,22,A.bN,null,null,null)
D.bVQ=new B.ae(A.rR,18,null,null,null,null)
D.bVW=new B.ae(A.CP,12,A.c,null,null,null)
D.bRn=new B.a0(983687,"MaterialIcons",!1)
D.bW7=new B.ae(D.bRn,null,A.bm,null,null,null)
D.bWg=new B.ae(A.hF,null,A.bm,null,null,null)
D.bWz=new B.ae(A.pv,22,A.c,null,null,null)
D.bWD=new B.ae(A.cz,13,A.c,null,null,null)
D.bWJ=new B.ae(A.ef,26,A.ax,null,null,null)
D.bWN=new B.ae(A.rX,26,A.c,null,null,null)
D.PJ=new B.ae(A.jG,8,A.c,null,null,null)
D.bX7=new B.ae(A.pq,40,A.c,null,null,null)
D.bX8=new B.ae(A.bMU,null,null,null,null,null)
D.bXc=new B.ae(A.uP,20,null,null,null,null)
D.bRm=new B.a0(983683,"MaterialIcons",!1)
D.bXm=new B.ae(D.bRm,null,A.b2,null,null,null)
D.bXn=new B.ae(A.jG,16,A.bm,null,null,null)
D.bXI=new B.ae(A.ps,null,null,null,null,null)
D.ark=new B.ae(A.wx,22,A.c,null,null,null)
D.bXO=new B.ae(A.e9,17,A.c,null,null,null)
D.arl=new B.ae(A.jG,9,A.c,null,null,null)
D.bXT=new B.ae(A.ws,null,null,null,null,null)
D.bNa=new B.a0(57744,"MaterialIcons",!1)
D.bY_=new B.ae(D.bNa,null,null,null,null,null)
D.bY2=new B.ae(A.ws,16,null,null,null,null)
D.bRU=new B.a0(985181,"MaterialIcons",!1)
D.HU=new B.ae(D.bRU,null,null,null,null,null)
D.bYe=new B.ae(A.ku,16,A.bN,null,null,null)
D.bRf=new B.a0(983615,"MaterialIcons",!1)
D.bYg=new B.ae(D.bRf,12,A.c,null,null,null)
D.arr=new B.ae(A.z0,16,null,null,null,null)
D.bYo=new B.ae(A.e9,21,A.c,null,null,null)
D.bYt=new B.ae(A.hF,17,A.c,null,null,null)
D.bYu=new B.ae(A.uC,null,null,null,null,null)
D.bYL=new B.ae(A.a31,20,A.aD,null,null,null)
D.bZ_=new B.ae(A.ou,22,E.nt,null,null,null)
D.bZ7=new B.ae(A.qJ,13,A.ad,null,null,null)
D.bZa=new B.ae(A.aqk,20,A.aD,null,null,null)
D.bMS=new B.a0(57495,"MaterialIcons",!1)
D.bZf=new B.ae(D.bMS,null,null,null,null,null)
D.bZj=new B.ae(A.ov,18,A.c,null,null,null)
D.bZG=new B.ae(A.uT,28,A.c,null,null,null)
D.bZR=new B.ae(D.apg,null,A.aE,null,null,null)
D.bZS=new B.ae(A.qK,22,A.c,null,null,null)
D.arA=new B.ae(A.a1I,16,null,null,null,null)
D.c_E=new B.ae(A.uC,32,A.c,null,null,null)
D.c0m=new B.ae(A.jo,22,A.c,null,null,null)
D.c0p=new B.ae(A.rX,22,A.ad,null,null,null)
D.arQ=new B.ae(A.uE,null,A.bV,null,null,null)
D.c1k=new B.ae(A.qD,18,null,null,null,null)
D.c1Y=new B.ae(A.e9,18,A.br,null,null,null)
D.c24=new B.ae(A.aqf,null,null,null,null,null)
D.c2v=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVH,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eI,!0,null,null,null,null)
D.fm7=new B.G(!0,A.bM,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2N=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fm7,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eI,!0,null,null,null,null)
D.c3d=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eI,!0,null,null,null,null)
D.d6N=w([A.dH,A.aE],x.O)
D.c5k=new B.a9(A.a6,A.a9,A.x,D.d6N,null,null)
D.c5v=new B.a9(A.b1,A.b7,A.VX,A.ayX,null,null)
D.beT=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bjQ=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnq=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bht=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cRT=w([D.beT,D.bjQ,D.bnq,D.bht],x.O)
D.c5O=new B.a9(A.aA,A.aF,A.x,D.cRT,A.Ip,null)
D.dvr=w([A.cJ,A.bF,A.b8],x.O)
D.c5Q=new B.a9(A.b1,A.b7,A.VX,D.dvr,null,null)
D.dwY=w([A.bm,A.ch],x.O)
D.c5V=new B.a9(A.a6,A.a9,A.x,D.dwY,null,null)
D.drE=w([A.hR,A.d2,A.ay],x.O)
D.c5X=new B.a9(A.aA,A.aF,A.x,D.drE,null,null)
D.dd6=w([A.cS,A.fn],x.O)
D.c60=new B.a9(A.a6,A.a9,A.x,D.dd6,null,null)
D.dvk=w([N.lF,A.d2],x.O)
D.asB=new B.a9(A.a6,A.a9,A.x,D.dvk,null,null)
D.bky=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dvh=w([D.bky,D.yk,A.c4],x.O)
D.c65=new B.a9(A.a6,A.a9,A.x,D.dvh,null,null)
D.d8y=w([A.b9,A.cV,A.en],x.O)
D.c66=new B.a9(A.aA,A.aF,A.x,D.d8y,null,null)
D.Q0=new B.a9(A.a6,A.a9,A.x,A.ID,null,null)
D.btI=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cKO=w([D.btI,A.c4,A.jA],x.O)
D.asG=new B.a9(A.aA,A.aF,A.x,D.cKO,null,null)
D.diN=w([A.u0,A.aB,D.BN],x.O)
D.c78=new B.a9(A.a6,A.a9,A.x,D.diN,null,null)
D.bv8=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.biu=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.boy=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d7D=w([D.bv8,D.biu,D.boy],x.O)
D.asH=new B.a9(A.a6,A.a9,A.x,D.d7D,null,null)
D.bkA=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c98=w([AA.ajL,D.bkA],x.O)
D.c7h=new B.a9(A.b1,A.b7,A.x,D.c98,null,null)
D.d5x=w([A.nr,A.bC],x.O)
D.c7l=new B.a9(A.b1,A.b7,A.x,D.d5x,null,null)
D.dod=w([A.aE,A.dJ],x.O)
D.c7s=new B.a9(A.a6,A.a9,A.x,D.dod,null,null)
D.aiz=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAJ=w([D.aiz,D.jy,D.Md],x.O)
D.c7V=new B.a9(A.aA,A.aF,A.x,D.aAJ,null,null)
D.cKG=w([A.dx,A.dI],x.O)
D.c85=new B.a9(A.b1,A.b7,A.x,D.cKG,null,null)
D.dl5=w([A.xZ,A.BF],x.O)
D.c8U=new B.a9(A.a6,A.a9,A.x,D.dl5,null,null)
D.fRv=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c94=new B.q3(null,D.fRv,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zD=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7z=new C.l8(2,"elegantNavy")
D.hCp=w([A.Z8,D.jy,A.c4],x.O)
D.ka=new C.y4(0,"classic")
D.a7o=new C.jA("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7z,4294967035,4279378237,4290283019,D.ka)
D.aKc=new C.l8(3,"elegantGold")
D.ben=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bfy=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.agU=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hBS=w([D.ben,D.bfy,D.agU],x.O)
D.a7m=new C.jA("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKc,4294966515,4281016592,4289102906,D.ka)
D.dSh=new C.l8(22,"goldRibbon")
D.hBO=w([A.Z8,D.jy,A.iq],x.O)
D.a7f=new C.jA("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dSh,4294967035,4279378237,4291404327,D.ka)
D.dSi=new C.l8(23,"goldBaroque")
D.ahD=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hBU=w([D.ahD,A.aB,A.jA],x.O)
D.a7g=new C.jA("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dSi,4294964964,4283053072,4292128567,D.ka)
D.dSk=new C.l8(4,"elegantEmerald")
D.bgT=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bhT=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hC_=w([D.bgT,D.bhT,A.iq],x.O)
D.a7h=new C.jA("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dSk,4294376440,4279122734,4291404327,D.ka)
D.dSl=new C.l8(5,"elegantBurgundy")
D.bma=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hC6=w([D.bma,A.ag0,A.iq],x.O)
D.a7k=new C.jA("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dSl,4294965238,4283043359,4291404327,D.ka)
D.dSe=new C.l8(19,"goldFiligree")
D.N0=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hBV=w([D.N0,A.aB,A.jA],x.O)
D.a7i=new C.jA("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dSe,4294966259,4279378237,4292128567,D.ka)
D.dSf=new C.l8(20,"goldLaurel")
D.bty=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hC7=w([A.M6,A.iq,D.bty],x.O)
D.a7j=new C.jA("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dSf,4294966776,4282000405,4291404327,D.ka)
D.dSg=new C.l8(21,"goldCrest")
D.afS=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.btF=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hBX=w([D.afS,A.aB,D.btF],x.O)
D.a7n=new C.jA("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dSg,4294965484,4283053072,4292128567,D.ka)
D.dSj=new C.l8(24,"goldStar")
D.bv_=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hC0=w([D.bv_,A.aB,D.jy],x.O)
D.a7l=new C.jA("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dSj,4294966518,4279378237,4292128567,D.ka)
D.I3=w([D.a7o,D.a7m,D.a7f,D.a7g,D.a7h,D.a7k,D.a7i,D.a7j,D.a7n,D.a7l],x.h)
D.qW=new C.mP(0,"blank")
D.TF=new C.mP(1,"title")
D.n3=new C.mP(2,"titleContent")
D.ebU=new C.mP(3,"twoColumn")
D.DS=new C.mP(4,"section")
D.ebV=new C.mP(5,"comparison")
D.J9=new C.mP(6,"flashcard")
D.Ja=new C.mP(7,"quiz")
D.Jb=new C.mP(8,"worksheet")
D.at1=w([D.qW,D.TF,D.n3,D.ebU,D.DS,D.ebV,D.J9,D.Ja,D.Jb],B.as("O<mP>"))
D.aBQ=w([Aq.Yt,A.dI],x.O)
D.kX=w([A.c4,A.bN,A.i4,A.i1,D.BN],x.O)
D.dO4=new C.ja("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBQ,D.kX)
D.btV=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bm8=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d5K=w([D.btV,D.bm8],x.O)
D.dNW=new C.ja("confetti","Golden Confetti","Together we rise",D.d5K,D.kX)
D.d2E=w([A.o1,A.Y4],x.O)
D.dNX=new C.ja("crown","Crown of Glory","Built for our community",D.d2E,D.kX)
D.bih=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.blM=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d9Z=w([D.bih,D.blM],x.O)
D.uZ=w([A.bM,A.aQ,A.c,A.aO,A.am],x.O)
D.dNR=new C.ja("aurora","Aurora Gala","A brighter future, together",D.d9Z,D.uZ)
D.bns=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dld=w([G.afs,D.bns],x.O)
D.dO7=new C.ja("champagne","Champagne Toast","Cheers to every member",D.dld,D.kX)
D.dO8=new C.ja("diamonds","Diamond Rain","Every member is a jewel",A_.aCB,D.uZ)
D.bfm=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blc=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dqS=w([D.bfm,D.blc],x.O)
D.dNM=new C.ja("starburst","Golden Starburst","Thank you!",D.dqS,D.kX)
D.c9f=w([A.fj,A.yb],x.O)
D.afC=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.RA=w([A.pb,A.ip,A.w7,A.o2,D.afC],x.O)
D.dOf=new C.ja("balloons","Luxury Balloons","Let's celebrate",D.c9f,D.RA)
D.d1R=w([A.Yi,A.w],x.O)
D.dO3=new C.ja("galaxy","Galaxy Spiral","The sky is not the limit",D.d1R,D.uZ)
D.brJ=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dhu=w([A.jU,D.brJ],x.O)
D.dNZ=new C.ja("redcarpet","Red Carpet","Tonight we shine",D.dhu,D.kX)
D.bpf=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bnc=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dmb=w([D.bpf,D.bnc],x.O)
D.dNO=new C.ja("coins","Gold Coin Rain","Every contribution counts",D.dmb,D.kX)
D.dtF=w([A.dx,A.i0],x.O)
D.dNU=new C.ja("lanterns","Sky Lanterns","Lighting the way together",D.dtF,D.kX)
D.bju=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d_H=w([A.yd,D.bju],x.O)
D.dNQ=new C.ja("hearts","Floating Hearts","Made with love",D.d_H,D.RA)
D.bg0=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bh_=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dvf=w([D.bg0,D.bh_],x.O)
D.dOe=new C.ja("petals","Rose Petals","Thank you, from our hearts",D.dvf,D.RA)
D.bsM=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.drd=w([A.ld,D.bsM],x.O)
D.dNL=new C.ja("butterflies","Golden Butterflies","New beginnings",D.drd,D.kX)
D.bou=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d0L=w([D.bou,A.w],x.O)
D.dO6=new C.ja("neon","Neon Night","Let's go!",D.d0L,D.uZ)
D.bkQ=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dop=w([A.MA,D.bkQ],x.O)
D.dO9=new C.ja("disco","Disco Ball","Party time",D.dop,D.uZ)
D.bp4=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dnU=w([A.hR,D.bp4],x.O)
D.dNP=new C.ja("sunrise","Golden Sunrise","A new day for our community",D.dnU,D.kX)
D.dnv=w([A.q9,A.dI],x.O)
D.dOa=new C.ja("pearls","Ocean Pearls","Deep roots, bright future",D.dnv,D.uZ)
D.bio=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dnJ=w([D.bio,A.dI],x.O)
D.dOd=new C.ja("snow","Winter Gala","Warm wishes to all",D.dnJ,D.uZ)
D.bew=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bfM=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.du6=w([D.bew,D.bfM],x.O)
D.dO2=new C.ja("laurel","Laurel Victory","We did it together",D.du6,D.kX)
D.bem=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.blI=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cZG=w([D.bem,D.blI],x.O)
D.dOc=new C.ja("ribbons","Silk Ribbons","Elegance in every step",D.cZG,D.kX)
D.bmT=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cKD=w([G.BM,D.bmT],x.O)
D.dO_=new C.ja("kente","Kente Pride","Proud of our roots",D.cKD,D.kX)
D.bpU=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bt9=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dbJ=w([D.bpU,D.bt9],x.O)
D.dNV=new C.ja("trophy","Trophy Shine","Winners together",D.dbJ,D.kX)
D.dnQ=w([Ar.Mk,A.w],x.O)
D.dNN=new C.ja("shooting","Shooting Stars","Make a wish",D.dnQ,D.uZ)
D.beF=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajw=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dup=w([D.beF,D.ajw],x.O)
D.dO0=new C.ja("bokeh","Golden Bokeh","Shine bright",D.dup,D.kX)
D.bf5=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dim=w([D.bf5,A.w],x.O)
D.dNT=new C.ja("orbits","Golden Orbits","Always moving forward",D.dim,D.kX)
D.bsN=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.deE=w([A.agP,D.bsN],x.O)
D.dNY=new C.ja("flowers","Blooming Garden","Growing together",D.deE,D.RA)
D.beR=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bfD=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dt6=w([D.beR,D.bfD],x.O)
D.dNS=new C.ja("music","Music Party","Celebrate with us",D.dt6,D.uZ)
D.bgE=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.btB=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d_V=w([D.bgE,D.btB],x.O)
D.dOb=new C.ja("mandala","Royal Mandala","Harmony and unity",D.d_V,D.kX)
D.deK=w([G.BM,D.ajw],x.O)
D.dO5=new C.ja("sparklers","Golden Sparklers","Light up the night",D.deK,D.kX)
D.dO1=new C.ja("city","City Lights","The whole city celebrates",D.aBQ,D.kX)
D.Ic=w([D.dO4,D.dNW,D.dNX,D.dNR,D.dO7,D.dO8,D.dNM,D.dOf,D.dO3,D.dNZ,D.dNO,D.dNU,D.dNQ,D.dOe,D.dNL,D.dO6,D.dO9,D.dNP,D.dOa,D.dOd,D.dO2,D.dOc,D.dO_,D.dNV,D.dNN,D.dO0,D.dNT,D.dNY,D.dNS,D.dOb,D.dO5,D.dO1],B.as("O<ja>"))
D.eDS=new B.y("","No ring")
D.eUj=new B.y("platinum","Platinum")
D.eQm=new B.y("glow","Glow")
D.eHB=new B.y("double","Double line")
D.eGu=new B.y("framed","Gallery frame")
D.eDo=new B.y("rosegold","Rose gold")
D.eRb=new B.y("jewels","Jeweled")
D.eNM=new B.y("aurora","Aurora")
D.D8=w([D.eDS,A.Uq,D.eUj,D.eQm,M.aQZ,D.eHB,A.aQX,D.eGu,D.eDo,D.eRb,D.eNM],x.L)
D.ctP=w([D.a7i,D.a7j,D.a7n,D.a7f,D.a7g,D.a7l],x.h)
D.bYC=new B.ae(G.ao9,16,null,null,null,null)
D.b9s=new B.vU(A.bk,D.bYC,null,x.U)
D.bNj=new B.a0(58027,"MaterialIcons",!1)
D.bS8=new B.ae(D.bNj,16,null,null,null,null)
D.b9q=new B.vU(A.K,D.bS8,null,x.U)
D.bNk=new B.a0(58030,"MaterialIcons",!1)
D.bWe=new B.ae(D.bNk,16,null,null,null,null)
D.b9t=new B.vU(A.dX,D.bWe,null,x.U)
D.cA8=w([D.b9s,D.b9q,D.b9t],B.as("O<vU<qi>>"))
D.cHT=w([A.BR,A.hB],x.O)
D.cHU=w([A.b9,A.bg,A.en],x.O)
D.Rp=w([A.bN,A.i1,A.i4,A.aB,A.o2],x.O)
D.cKJ=w([A.c4,D.jy,D.Md],x.O)
D.cLg=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eBb=new B.y(4278913286,4280030216)
D.eBt=new B.y(4279373061,4278518787)
D.eBA=new B.y(4279898630,4278847235)
D.db5=w([D.eBb,D.eBt,D.eBA],x.n)
D.d6w=w(["\u265b","\u269c","\u2726"],x.s)
D.dSc=new C.y6("Royal Onyx & Gold",D.db5,4292128567,4294370209,4294965479,3874020544,D.d6w)
D.eAZ=new B.y(4278326799,4278598442)
D.eB0=new B.y(4278395929,4278258953)
D.eB7=new B.y(4278599728,4278327826)
D.dtw=w([D.eAZ,D.eB0,D.eB7],x.n)
D.d0D=w(["\u269c","\u2756","\u2727"],x.s)
D.dS9=new C.y6("Imperial Emerald",D.dtw,4293050997,4294699968,4294180856,3872254170,D.d0D)
D.eB1=new B.y(4278455076,4278918747)
D.eB6=new B.y(4278587439,4278322714)
D.eBk=new B.y(4279051376,4278455076)
D.drA=w([D.eB1,D.eB6,D.eBk],x.n)
D.dj5=w(["\u2654","\u2726","\u2748"],x.s)
D.dS3=new C.y6("Sapphire Crown",D.drA,4291417834,4294967295,4294310143,3871986666,D.dj5)
D.eBy=new B.y(4279894534,4283041554)
D.eBK=new B.y(4281008906,4279042307)
D.eBS=new B.y(4284221976,4279894534)
D.dxD=w([D.eBy,D.eBK,D.eBS],x.n)
D.d2_=w(["\u265b","\u2766","\u2726"],x.s)
D.dS5=new C.y6("Ruby Throne",D.dxD,4293378685,4294963145,4294964466,3874213833,D.d2_)
D.eBs=new B.y(4279371039,4281995100)
D.eBC=new B.y(4280092723,4278714896)
D.eBP=new B.y(4283045242,4279371039)
D.dtT=w([D.eBs,D.eBC,D.eBP],x.n)
D.drX=w(["\u2655","\u2756","\u2727"],x.s)
D.dSa=new C.y6("Amethyst Palace",D.dtT,4293314984,4294963421,4294702591,3873229802,D.drX)
D.eB3=new B.y(4278519045,4280032287)
D.eBl=new B.y(4279111184,4278321666)
D.eBH=new B.y(4280492839,4278716426)
D.dqk=w([D.eB3,D.eBl,D.eBH],x.n)
D.dhg=w(["\u2726","\u25c6","\u2742"],x.s)
D.dS7=new C.y6("Obsidian & Platinum",D.dqk,4293256418,4294967295,4294638330,3872378836,D.dhg)
D.eBz=new B.y(4279896588,4282194463)
D.eBI=new B.y(4280553487,4279043334)
D.eBQ=new B.y(4283048488,4279896588)
D.dgJ=w([D.eBz,D.eBI,D.eBQ],x.n)
D.dvJ=w(["\u2766","\u273f","\u2727"],x.s)
D.dS4=new C.y6("Rose Gold Velvet",D.dgJ,4293440672,4294960345,4294964979,3874214602,D.dvJ)
D.eB4=new B.y(4278520340,4279180595)
D.eB9=new B.y(4278718495,4278322443)
D.eBw=new B.y(4279510591,4278520340)
D.cRz=w([D.eB4,D.eB9,D.eBw],x.n)
D.dhZ=w(["\u269c","\u2736","\u2756"],x.s)
D.dS8=new C.y6("Midnight Brass",D.cRz,4291405148,4293975208,4294439914,3872837564,D.dhZ)
D.eC4=new B.y(4294703086,4293780428)
D.eC0=new B.y(4294307549,4293187253)
D.eC5=new B.y(4294966517,4293977807)
D.d4l=w([D.eC4,D.eC0,D.eC5],x.n)
D.diq=w(["\u269c","\u265b","\u2726"],x.s)
D.dSb=new C.y6("Ivory Marble & Gold",D.d4l,4289760572,4286209048,4280951062,3863625518,D.diq)
D.eBf=new B.y(4278978566,4280555024)
D.eBv=new B.y(4279504137,4278518530)
D.eBM=new B.y(4281211923,4278978566)
D.d1Q=w([D.eBf,D.eBv,D.eBM],x.n)
D.dsH=w(["\u2742","\u2726","\u265c"],x.s)
D.dS6=new C.y6("Onyx & Copper",D.d1Q,4291856987,4294365880,4294964718,3873885630,D.dsH)
D.cLo=w([D.dSc,D.dS9,D.dS3,D.dS5,D.dSa,D.dS7,D.dS4,D.dS8,D.dSb,D.dS6],B.as("O<y6>"))
D.cNM=w([A.aB,D.BN,A.i1],x.O)
D.eJR=new B.y("Original",null)
D.eK0=new B.y("Wide 16:9",1.7777777777777777)
D.eMo=new B.y("Landscape 3:2",1.5)
D.eJh=new B.y("Photo 4:3",1.3333333333333333)
D.eYd=new B.y("Portrait 3:4",0.75)
D.az5=w([D.eJR,D.eK0,D.eMo,D.eJh,M.aQN,D.eYd],B.as("O<+(m,I?)>"))
D.az6=w([A.i1,A.c1,A.bb,A.bs],x.O)
D.eMA=new B.y("","Original")
D.eOv=new B.y("circle","Circle")
D.eV7=new B.y("rounded","Rounded")
D.eW7=new B.y("triangle","Triangle")
D.eQD=new B.y("hexagon","Hexagon")
D.eOW=new B.y("diamond","Diamond")
D.eNL=new B.y("arch","Arch")
D.Df=w([D.eMA,D.eOv,D.eV7,D.eW7,D.eQD,D.eOW,D.eNL],x.L)
D.dNa=new C.ls("classic_blue","Classic Blue","Normal",A.bm,A.c,A.kO,A.d9,A.aM)
D.dNq=new C.ls("campus_green","Campus Green","Normal",A.b2,A.np,A.u3,A.h7,A.ed)
D.dNh=new C.ls("warm_sand","Warm Sand","Normal",A.e0,A.i4,A.bN,A.ir,A.o9)
D.dNo=new C.ls("slate_minimal","Slate Minimal","Normal",A.bu,A.aQ,A.aO,A.Q,A.aM)
D.dN9=new C.ls("coral_fresh","Coral Fresh","Normal",A.cf,A.i2,A.q3,A.kq,A.tW)
D.dNp=new C.ls("lavender_calm","Lavender Calm","Normal",A.b8,A.q6,A.y6,A.of,A.jx)
D.dNb=new C.ls("ocean_breeze","Ocean Breeze","Normal",A.fn,A.rD,A.tS,A.tY,A.oa)
D.aiH=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dNm=new C.ls("berry_pop","Berry Pop","Normal",A.fb,D.aiH,A.kK,G.ZI,A.BS)
D.dNc=new C.ls("midnight_pro","Midnight Pro","Professional",A.aE,A.Q,A.dx,A.kK,A.cs)
D.dNl=new C.ls("executive_navy","Executive Navy","Professional",A.d5,A.ahT,A.d9,A.lb,A.bM)
D.dNj=new C.ls("boardroom_charcoal","Boardroom Charcoal","Professional",A.am,A.bp,A.Q,A.aQ,A.cs)
D.dNd=new C.ls("corporate_steel","Corporate Steel","Professional",A.oc,A.Q,A.mK,A.fq,A.bM)
D.dNg=new C.ls("gold_luxe","Gold Luxe","Luxury",A.m2,A.dR,A.pa,A.m3,A.bN)
D.bp9=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dNk=new C.ls("rose_gold_elite","Rose Gold Elite","Luxury",A.hB,D.bp9,A.Zq,A.ip,A.o2)
D.dNn=new C.ls("platinum_night","Platinum Night","Luxury",A.cs,A.dI,A.bp,A.aQ,A.aO)
D.dNr=new C.ls("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qc,A.fc,A.qk,A.jS)
D.dN8=new C.ls("royal_purple","Royal Purple","Luxury",A.nn,A.Yy,A.jx,A.kK,A.M5)
D.dNi=new C.ls("neon_pitch","Neon Pitch","Bold",A.bb,A.dI,A.Q,A.b0,A.aO)
D.dNf=new C.ls("crimson_impact","Crimson Impact","Bold",A.bC,A.jU,A.eo,A.rE,A.eQ)
D.dNe=new C.ls("sunset_gallery","Sunset Gallery","Bold",A.fx,A.tW,A.kq,A.q3,A.mI)
D.Il=w([D.dNa,D.dNq,D.dNh,D.dNo,D.dN9,D.dNp,D.dNb,D.dNm,D.dNc,D.dNl,D.dNj,D.dNd,D.dNg,D.dNk,D.dNn,D.dNr,D.dN8,D.dNi,D.dNf,D.dNe],B.as("O<ls>"))
D.cZp=w([A.c4,D.jy],x.O)
D.dh0=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eNw=new B.y("Faces & people",D.dh0)
D.cNQ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ezO=new B.y("Ideas & work",D.cNQ)
D.d71=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eQI=new B.y("Nature",D.d71)
D.dh9=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eJP=new B.y("Places & things",D.dh9)
D.daD=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eNQ=new B.y("Symbols",D.daD)
D.cZv=w([D.eNw,D.ezO,D.eQI,D.eJP,D.eNQ],B.as("O<+(m,ai<m>)>"))
D.beW=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cZR=w([A.c4,D.agU,D.beW],x.O)
D.b8M=new B.ac(0,A.G,A.M2,A.aL2,40)
D.b8s=new B.ac(0,A.G,A.o7,A.er,8)
D.d_3=w([D.b8M,D.b8s],x.V)
D.d_B=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azu=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4O=w([A.i1,A.en,A.bC,A.av,A.cf],x.O)
D.d0x=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ah8=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d0I=w([A.Zh,D.ah8,A.Zh],x.O)
D.d0N=w([A.iq,D.jy,D.Md],x.O)
D.eJB=new B.y(A.bk,D.a2n)
D.eL3=new B.y(A.K,D.a2m)
D.eEE=new B.y(A.dX,D.a2o)
D.d1L=w([D.eJB,D.eL3,D.eEE],B.as("O<+(qi,a0)>"))
D.cX=new C.Jy(0,"text")
D.lR=new C.Jy(1,"image")
D.fg=new C.Jy(2,"shape")
D.TE=new C.Jy(3,"pdf")
D.lq=new C.Jy(4,"signature")
D.a7J=new C.Jy(5,"bio")
D.d2K=w([D.cX,D.lR,D.fg,D.TE,D.lq,D.a7J],B.as("O<Jy>"))
D.d2L=w([A.bq,A.cF],B.as("O<Iq>"))
D.d3p=w(["School","Documents","Sign & present"],x.s)
D.b8R=new B.ac(0,A.G,A.ajl,A.vj,28)
D.d3O=w([D.b8R],x.V)
D.d46=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RJ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.azW=w([A.i1,A.Gj,A.aO,A.c,A.pb,A.aB],x.O)
D.eXC=new B.y(0.1,0.08)
D.eQG=new B.y(0.3,0.05)
D.eE6=new B.y(0.55,0.1)
D.eIx=new B.y(0.8,0.06)
D.eLP=new B.y(0.92,0.16)
D.eLi=new B.y(0.2,0.2)
D.eJ1=new B.y(0.7,0.22)
D.ePi=new B.y(0.05,0.4)
D.eMg=new B.y(0.95,0.45)
D.eEU=new B.y(0.12,0.7)
D.eHf=new B.y(0.88,0.75)
D.eHn=new B.y(0.4,0.9)
D.eCm=new B.y(0.65,0.93)
D.eIa=new B.y(0.25,0.97)
D.eJy=new B.y(0.85,0.9)
D.eFO=new B.y(0.5,0.04)
D.d5F=w([D.eXC,D.eQG,D.eE6,D.eIx,D.eLP,D.eLi,D.eJ1,D.ePi,D.eMg,D.eEU,D.eHf,D.eHn,D.eCm,D.eIa,D.eJy,D.eFO],x.G)
D.d5O=w([A.c,A.hB,A.aJ,A.aY],x.O)
D.edw=new C.jW("office_blue","Office Blue",A.bm,A.d9,A.aM,A.c,A.kO)
D.edH=new C.jW("campus_green","Campus Green",A.b2,A.h7,A.ed,A.np,A.u3)
D.edx=new C.jW("sunset","Sunset",A.fx,A.kq,A.o9,A.i2,A.q3)
D.edy=new C.jW("midnight","Midnight",A.aE,A.kK,A.cs,A.Q,A.dx)
D.edJ=new C.jW("classic","Classic",A.d2,A.dR,A.m4,A.i4,A.fY)
D.edG=new C.jW("rose_gold","Rose Gold",A.hB,A.ye,A.yd,A.w7,A.BR)
D.edr=new C.jW("ocean_teal","Ocean Teal",A.fn,A.tY,A.oa,A.rD,A.tS)
D.edq=new C.jW("slate_pro","Slate Pro",A.bu,A.Q,A.aM,A.aQ,A.aO)
D.edp=new C.jW("neon_night","Neon Night",A.bb,A.b0,A.aO,A.dI,A.Q)
D.edB=new C.jW("lavender","Lavender",A.b8,A.of,A.jx,A.q6,A.y6)
D.edD=new C.jW("coral","Coral",A.cf,A.kq,A.tW,A.i2,A.mI)
D.eds=new C.jW("forest","Forest",A.hl,A.e_,A.ct,A.m5,A.et)
D.edt=new C.jW("berry","Berry",A.fb,G.ZI,A.BS,D.aiH,A.kK)
D.edA=new C.jW("sand","Sand",A.e0,A.ir,A.o9,A.i4,A.bN)
D.edF=new C.jW("ice","Ice",A.oc,A.FS,A.aM,A.nk,A.fq)
D.edv=new C.jW("charcoal","Charcoal",A.am,A.aQ,A.cs,A.bp,A.Q)
D.edo=new C.jW("mint","Mint",A.aY,A.fP,A.h7,A.m5,A.qk)
D.edE=new C.jW("crimson","Crimson",A.bC,A.nr,A.jU,A.Gh,A.rE)
D.bhS=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.edz=new C.jW("gold","Gold",A.m2,A.xZ,A.pa,D.bhS,A.m3)
D.edC=new C.jW("aqua","Aqua",A.bT,A.G3,A.p7,A.q7,A.pc)
D.edu=new C.jW("plum","Plum",A.nn,A.yb,A.BS,A.FT,A.rz)
D.edI=new C.jW("steel","Steel",A.d5,A.d9,A.bp,A.kO,A.lb)
D.a52=w([D.edw,D.edH,D.edx,D.edy,D.edJ,D.edG,D.edr,D.edq,D.edp,D.edB,D.edD,D.eds,D.edt,D.edA,D.edF,D.edv,D.edo,D.edE,D.edz,D.edC,D.edu,D.edI],B.as("O<jW>"))
D.d6a=w([A.c4,A.jA],x.O)
D.TG=new C.hF(10,"rotate3d")
D.Jd=new C.hF(8,"flip")
D.aKv=new C.hF(19,"spiral")
D.qX=new C.hF(16,"bounce")
D.aKy=new C.hF(9,"flipVertical")
D.d6b=w([D.TG,D.Jd,D.aKv,D.qX,D.aKy],x.i)
D.ej=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d6z=w([0.62,1],x.x)
D.d7b=w([0,0.32,0.68,1],x.x)
D.n4=new C.hF(6,"zoom")
D.vd=new C.hF(4,"slideUp")
D.vc=new C.hF(2,"slideLeft")
D.d7l=w([D.n4,D.Jd,D.vd,D.TG,D.vc],x.i)
D.d7R=w([A.c1,A.hB,A.ip,A.i1,A.c],x.O)
D.b8H=new B.ac(0,A.G,D.aho,A.vj,30)
D.d8D=w([D.b8H],x.V)
D.ep4=new B.q(0,-2.5)
D.eoV=new B.q(-2.5,0)
D.en6=new B.q(2.5,0)
D.d8G=w([A.TU,A.a8a,A.aLG,A.a89,D.ep4,O.aLC,D.eoV,D.en6],x.dN)
D.Ir=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9b=w([23,114,69,56,80,144],x.t)
D.d9F=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.da7=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dbO=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dbT=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bj=new C.v7(0,"rectangle")
D.eX=new C.v7(1,"circle")
D.lr=new C.v7(6,"hexagon")
D.dc7=w([D.bj,D.eX,D.lr],x.m)
D.oK=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aiR=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dcG=w([D.aiR,A.e_],x.O)
D.eEn=new B.y("","Classic")
D.eCB=new B.y("caps","Bold caps")
D.ePl=new B.y("elegant","Elegant")
D.eVr=new B.y("shadow","Shadow")
D.eIV=new B.y("neon","Neon glow")
D.eT7=new B.y("marker","Highlighter")
D.eVF=new B.y("stamp","Stamp")
D.eHN=new B.y("threed","3D")
D.ePS=new B.y("fire","Fire")
D.eQS=new B.y("ice","Ice")
D.eOu=new B.y("chalk","Chalk")
D.eOz=new B.y("comic","Comic")
D.eWX=new B.y("softglow","Soft glow")
D.eRV=new B.y("lowercase","Lowercase")
D.eP3=new B.y("double","Echo")
D.eX6=new B.y("whisper","Whisper")
D.aAU=w([D.eEn,D.eCB,D.ePl,D.eVr,D.eIV,M.aQY,D.eT7,D.eVF,M.aR_,D.eHN,M.aQS,D.ePS,D.eQS,D.eOu,D.eOz,A.Uq,Au.aR0,D.eWX,D.eRV,D.eP3,D.eX6],x.L)
D.de0=w([3,5,7,10,12,15],x.t)
D.dfy=w([A.c1,A.bN,A.c,A.eJ,A.cJ],x.O)
D.dEE=new C.tJ(10,"cardWorld")
D.DL=new C.C3(3,"rounded")
D.dVc=new C.lv("world","NGMY World",D.dEE,D.DL,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dEF=new C.tJ(11,"cardSplit")
D.dV8=new C.lv("business","Business Wire",D.dEF,D.DL,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dEG=new C.tJ(12,"cardBreaking")
D.dVl=new C.lv("breaking","Breaking Red",D.dEG,D.DL,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dEH=new C.tJ(13,"cardFeature")
D.dVe=new C.lv("feature","Tech Feature",D.dEH,D.DL,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJ8=new C.tJ(6,"circle")
D.aJ2=new C.C3(4,"circle")
D.dVi=new C.lv("parchment","Royal Circle",D.aJ8,D.aJ2,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dV7=new C.lv("ocean","Blue Ocean",D.aJ8,D.aJ2,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dEK=new C.tJ(7,"rail")
D.aJ1=new C.C3(1,"double")
D.dV9=new C.lv("forest","Green Leaf",D.dEK,D.aJ1,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJ5=new C.tJ(1,"sideBySide")
D.dVn=new C.lv("herald","NGMY Herald",D.aJ5,D.DL,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJ4=new C.tJ(0,"classic")
D.a6V=new C.C3(9,"shadow")
D.dVm=new C.lv("daily","The Daily",D.aJ4,D.a6V,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dEI=new C.tJ(2,"splash")
D.aJ3=new C.C3(6,"cutCorner")
D.dV6=new C.lv("tabloid","Big Tabloid",D.dEI,D.aJ3,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJ9=new C.tJ(9,"minimal")
D.dVh=new C.lv("modern","Modern Digest",D.aJ9,D.DL,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJ6=new C.tJ(3,"magazine")
D.aJ0=new C.C3(0,"plain")
D.dVd=new C.lv("midnight","Midnight Edition",D.aJ6,D.aJ0,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dEL=new C.tJ(8,"banner")
D.dVf=new C.lv("metro","Metro Wire",D.dEL,D.aJ3,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dED=new C.C3(8,"arch")
D.dVg=new C.lv("sunrise","Sunrise Post",D.aJ6,D.dED,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJ7=new C.tJ(5,"scrapbook")
D.dEC=new C.C3(5,"tape")
D.dVb=new C.lv("neon","Neon Beat",D.aJ7,D.dEC,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dEJ=new C.tJ(4,"wrap")
D.dVo=new C.lv("gold","Golden Press",D.dEJ,D.a6V,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dVp=new C.lv("minimal","Paper White",D.aJ9,D.a6V,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dVa=new C.lv("gazette","Fresh Gazette",D.aJ4,D.aJ1,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dVk=new C.lv("times","Classic Times",D.aJ5,D.aJ0,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Tb=new C.C3(2,"polaroid")
D.dVj=new C.lv("scrapbook","Memory Scrapbook",D.aJ7,D.Tb,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5j=w([D.dVc,D.dV8,D.dVl,D.dVe,D.dVi,D.dV7,D.dV9,D.dVn,D.dVm,D.dV6,D.dVh,D.dVd,D.dVf,D.dVg,D.dVb,D.dVo,D.dVp,D.dVa,D.dVk,D.dVj],B.as("O<lv>"))
D.dfK=w([0.45,1],x.x)
D.Iv=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dga=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hxe=new C.oQ("Original",0,1,1,0,0,0)
D.hxi=new C.oQ("Black & white",0,1.1,0,0,0,0)
D.hx5=new C.oQ("Noir",-0.05,1.55,0,0,0,0)
D.hx9=new C.oQ("Sepia",0,1,0.25,0.9,0,0)
D.hx8=new C.oQ("Vivid",0,1.15,1.6,0,0,0)
D.hx1=new C.oQ("Pop",0,1.3,1.9,0,0,0)
D.hx3=new C.oQ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hxf=new C.oQ("Matte",0,0.9,0.85,0,0,0.55)
D.hxa=new C.oQ("Cool",0,1.05,1,-0.8,0,0)
D.hxh=new C.oQ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hx2=new C.oQ("Golden hour",0.04,1,1.25,1,0,0)
D.hx7=new C.oQ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hxg=new C.oQ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hx6=new C.oQ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hxc=new C.oQ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hxb=new C.oQ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hxd=new C.oQ("Rose",0,1,1.1,0.3,0.4,0)
D.hx4=new C.oQ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgb=w([D.hxe,D.hxi,D.hx5,D.hx9,D.hx8,D.hx1,D.hx3,D.hxf,D.hxa,D.hxh,D.hx2,D.hx7,D.hxg,D.hx6,D.hxc,D.hxb,D.hxd,D.hx4],B.as("O<oQ>"))
D.beh=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dgd=w([D.aiR,A.e_,D.beh],x.O)
D.ezH=new B.y(0.12,0.3)
D.eR2=new B.y(0.26,0.75)
D.ePh=new B.y(0.8,0.22)
D.eVR=new B.y(0.9,0.7)
D.eRU=new B.y(0.5,0.15)
D.eU1=new B.y(0.65,0.85)
D.eGk=new B.y(0.08,0.85)
D.dgs=w([D.ezH,D.eR2,D.ePh,D.eVR,D.eRU,D.eU1,D.eGk],x.G)
D.aB6=w([A.bb,A.c1,A.bs,A.b9],x.O)
D.dhk=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dhx=w([A.c,A.fq,A.dw,A.vX],x.O)
D.dil=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.bi7=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.diC=w([D.bi7,D.ah8],x.O)
D.diE=w([A.u0,A.aB],x.O)
D.diT=w([0,0.25,0.75,1],x.x)
D.diV=w([A.y2,A.pb],x.O)
D.aK5=new C.l8(10,"kenteSunset")
D.hBQ=w([D.ahD,A.kl,A.aB],x.O)
D.dQp=new C.jA("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aK5,4294964964,4282000405,4279983648,D.ka)
D.aK6=new C.l8(11,"indigoMudcloth")
D.bfs=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hC3=w([D.bfs,A.ah5,A.iq],x.O)
D.dQx=new C.jA("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aK6,4294439140,4279903102,4279903102,D.ka)
D.aK7=new C.l8(12,"adinkraRoyal")
D.bum=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hC4=w([D.afS,D.bum,A.aB],x.O)
D.dQz=new C.jA("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aK7,4294965484,4285218591,4287322667,D.ka)
D.aK8=new C.l8(13,"nileLotus")
D.bqf=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmu=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hC9=w([D.bqf,D.bmu,A.iq],x.O)
D.dQy=new C.jA("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK8,4294244340,4279196764,4279196764,D.ka)
D.aK9=new C.l8(14,"shweshweIvory")
D.bkm=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.biY=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bg_=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hBR=w([D.bkm,D.biY,D.bg_],x.O)
D.dQu=new C.jA("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK9,4294505710,4279970378,4291058750,D.ka)
D.tc=new C.l8(15,"certIvoryNavy")
D.hBP=w([D.N0,D.jy,A.iq],x.O)
D.aJG=new C.y4(1,"ringsNdoa")
D.dQr=new C.jA("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tc,4294966259,4279378237,4291404327,D.aJG)
D.a7q=new C.y4(2,"coupleCards")
D.dQm=new C.jA("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tc,4294966259,4279378237,4291404327,D.a7q)
D.DO=new C.l8(18,"certIvoryNavyBar")
D.afR=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hC2=w([D.afR,D.jy,A.iq],x.O)
D.aJH=new C.y4(3,"kuhoweshaForm")
D.dQk=new C.jA("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DO,4294966519,4279378237,4291404327,D.aJH)
D.ahm=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hCm=w([D.N0,D.ahm,A.iq],x.O)
D.a7r=new C.y4(4,"mahariPande")
D.dQn=new C.jA("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tc,4294966259,4279904068,4291404327,D.a7r)
D.aKa=new C.l8(16,"certIvoryGreen")
D.bjF=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hBT=w([A.M6,D.bjF,A.iq],x.O)
D.aJI=new C.y4(5,"familiaMti")
D.dQt=new C.jA("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKa,4294966776,4280241466,4291404327,D.aJI)
D.a7s=new C.y4(6,"ndoaSafi")
D.dQl=new C.jA("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DO,4294966519,4279378237,4291404327,D.a7s)
D.bot=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hBW=w([D.N0,A.iq,D.bot],x.O)
D.a7t=new C.y4(7,"peteWide")
D.dQq=new C.jA("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tc,4294966259,4282001936,4291404327,D.a7t)
D.dQA=new C.y4(8,"muhuriCrest")
D.dQj=new C.jA("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tc,4294966259,4279378237,4291404327,D.dQA)
D.hC5=w([D.afR,D.ahm,A.iq],x.O)
D.dQB=new C.y4(9,"fomuWazi")
D.dQw=new C.jA("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DO,4294966519,4279904068,4291404327,D.dQB)
D.aKb=new C.l8(17,"certIvoryRose")
D.bkr=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hC8=w([D.bkr,D.ail,A.iq],x.O)
D.a7p=new C.y4(10,"upendoOrnate")
D.dQs=new C.jA("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKb,4294965493,4286200650,4291404327,D.a7p)
D.djm=w([D.dQp,D.dQx,D.dQz,D.dQy,D.dQu,D.dQr,D.dQm,D.dQk,D.dQn,D.dQt,D.dQl,D.dQq,D.dQj,D.dQw,D.dQs],x.h)
D.ek=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Je=new C.wq(0,"emojis")
D.DU=new C.wq(1,"pictures")
D.Jf=new C.wq(2,"icons3d")
D.a7L=new C.wq(3,"animations")
D.TI=new C.wq(4,"videoMotion")
D.DV=new C.wq(5,"luxe")
D.a5q=w([D.Je,D.DU,D.Jf,D.a7L,D.TI,D.DV],B.as("O<wq>"))
D.eUF=new B.y(A.e9,"Looks")
D.eIq=new B.y(A.D0,"Light")
D.eIn=new B.y(A.mf,"Colour")
D.eGl=new B.y(A.wv,"Effects")
D.apb=new B.a0(63112,"MaterialIcons",!1)
D.eCR=new B.y(D.apb,"Crop")
D.djU=w([D.eUF,D.eIq,D.eIn,D.eGl,D.eCR],x.f2)
D.dkB=w([],x.D)
D.hCj=w([],x.L)
D.eGz=new B.y("Flashcard",D.J9)
D.eKt=new B.y("Quiz",D.Ja)
D.eMv=new B.y("Worksheet",D.Jb)
D.eJt=new B.y("Notes",D.n3)
D.eL1=new B.y("Section",D.DS)
D.dlj=w([D.eGz,D.eKt,D.eMv,D.eJt,D.eL1],B.as("O<+(m,mP)>"))
D.dSm=new C.l8(6,"beadedPearl")
D.bng=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hCn=w([H.Zp,D.bng,A.iq],x.O)
D.aJE=new C.jA("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dSm,4294966774,4286209070,4291404327,D.ka)
D.dSn=new C.l8(7,"artDeco")
D.brD=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.buG=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hCl=w([D.brD,D.buG,A.c4],x.O)
D.aJF=new C.jA("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dSn,4294440434,4280228630,4290283019,D.ka)
D.dSo=new C.l8(8,"rosetteCorners")
D.btO=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bic=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bna=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hBZ=w([D.btO,D.bic,D.bna],x.O)
D.aJD=new C.jA("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dSo,4294702831,4285218602,4291394365,D.ka)
D.dSp=new C.l8(9,"modernLedger")
D.hBY=w([A.c,D.jy,D.jy],x.O)
D.aJC=new C.jA("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dSp,4294967295,4279378237,4279378237,D.ka)
D.dln=w([D.aJE,D.aJF,D.aJD,D.aJC],x.h)
D.dlx=w([A.ip,A.pb],x.O)
D.cq=new C.hF(0,"none")
D.dk=new C.hF(1,"fade")
D.Jc=new C.hF(3,"slideRight")
D.aKx=new C.hF(5,"slideDown")
D.ec0=new C.hF(7,"zoomOut")
D.a7K=new C.hF(11,"cube")
D.ebW=new C.hF(12,"blur")
D.aKu=new C.hF(13,"dissolve")
D.ebX=new C.hF(14,"wipeLeft")
D.ebY=new C.hF(15,"wipeRight")
D.TH=new C.hF(17,"push")
D.ebZ=new C.hF(18,"flash")
D.aKw=new C.hF(20,"swing")
D.ec_=new C.hF(21,"curtain")
D.Si=w([D.cq,D.dk,D.vc,D.Jc,D.vd,D.aKx,D.n4,D.ec0,D.Jd,D.aKy,D.TG,D.a7K,D.ebW,D.aKu,D.ebX,D.ebY,D.qX,D.TH,D.ebZ,D.aKv,D.aKw,D.ec_],x.i)
D.Sj=w([D.a7o,D.a7m,D.a7f,D.a7g,D.a7h,D.a7k,D.a7i,D.a7j,D.a7n,D.a7l,D.aJE,D.aJF,D.aJD,D.aJC],x.h)
D.dm_=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dm3=w([A.u4,A.i1,A.c4],x.O)
D.eHH=new B.y(A.uH,"Design")
D.eWg=new B.y(D.aps,"Word sizes")
D.eRD=new B.y(A.CX,"Text")
D.bQE=new B.a0(983182,"MaterialIcons",!1)
D.eRI=new B.y(D.bQE,"Photo")
D.eCp=new B.y(A.lk,"Logo")
D.eXA=new B.y(A.HR,"News")
D.dm9=w([D.eHH,D.eWg,D.eRD,D.eRI,D.eCp,D.eXA],x.f2)
D.dma=w(["golddust","sparkle","sheen"],x.s)
D.edn=new C.ev("upload_pdf",K.Pw,"Upload PDF")
D.ecx=new C.ev("sign_paper",A.HO,"Sign Paper")
D.bPU=new B.a0(63438,"MaterialIcons",!1)
D.edj=new C.ev("hd_photo",D.bPU,"HD Photo")
D.ecp=new C.ev("sharpen",E.a25,"Sharpen")
D.ecz=new C.ev("print",K.Pw,"Download PDF")
D.ed0=new C.ev("rotate",D.apb,"Rotate")
D.ecI=new C.ev("text_box",A.CX,"Text Box")
D.ecK=new C.ev("picture",A.uL,"Picture")
D.ecG=new C.ev("title",A.wJ,"Title")
D.ecC=new C.ev("subtitle",U.aq1,"Subtitle")
D.ed9=new C.ev("bullets",I.a2p,"Bullet List")
D.ecD=new C.ev("numbered",A.Pi,"Numbered")
D.edc=new C.ev("quote",A4.CK,"Quote")
D.ecP=new C.ev("citation",A.ou,"Citation")
D.edf=new C.ev("date_stamp",Aj.a2a,"Date Stamp")
D.ed2=new C.ev("page_number",A.zk,"Page #")
D.ed6=new C.ev("header_bar",A.zm,"Header")
D.ecJ=new C.ev("footer_bar",Av.a2X,"Footer")
D.ecy=new C.ev("divider",A.rV,"Divider")
D.ecu=new C.ev("highlight",A.a2s,"Highlight")
D.ed8=new C.ev("redact",A.uU,"Redact")
D.ecW=new C.ev("callout",A.CB,"Callout")
D.edh=new C.ev("checkboxes",I.aot,"Checklist")
D.ecT=new C.ev("table",A.a2V,"Table")
D.ecN=new C.ev("memo",I.a2F,"Memo")
D.ecX=new C.ev("letter",A.HD,"Letter")
D.bPx=new B.a0(63259,"MaterialIcons",!0)
D.eco=new C.ev("agenda",D.bPx,"Agenda")
D.ecA=new C.ev("toc",AD.apF,"Contents")
D.bPQ=new B.a0(63406,"MaterialIcons",!1)
D.ecU=new C.ev("sig_line",D.bPQ,"Sign Line")
D.ech=new C.ev("initial_line",A.j2,"Initials")
D.eck=new C.ev("approved",A.lk,"APPROVED")
D.ecZ=new C.ev("draft",A.pv,"DRAFT")
D.ed4=new C.ev("confidential",A.jG,"Confidential")
D.ed7=new C.ev("sticky",A.PD,"Sticky Note")
D.edg=new C.ev("progress",A.apE,"Progress")
D.bR4=new B.a0(983507,"MaterialIcons",!1)
D.ecv=new C.ev("stars",D.bR4,"Star Rating")
D.ecf=new C.ev("equation",A.apu,"Equation")
D.ecq=new C.ev("timeline",A.a2W,"Timeline")
D.ecO=new C.ev("two_col",A.a2Y,"Two Columns")
D.ecs=new C.ev("compare",Az.a2e,"Compare")
D.ecd=new C.ev("duplicate_el",A.fU,"Duplicate")
D.edl=new C.ev("delete_el",A.ef,"Delete")
D.edb=new C.ev("bring_fwd",H.apo,"Bring Front")
D.eci=new C.ev("send_back",H.apn,"Send Back")
D.ecY=new C.ev("align_left",D.a2n,"Align L")
D.ed3=new C.ev("align_center",D.a2m,"Align C")
D.edk=new C.ev("align_right",D.a2o,"Align R")
D.ecH=new C.ev("word_count",A3.a1N,"Word Count")
D.ecE=new C.ev("link_text",A.hI,"Link")
D.ed1=new C.ev("phone",A.j3,"Phone")
D.ect=new C.ev("email",A.CG,"Email")
D.edm=new C.ev("qr_placeholder",A.jI,"QR Placeholder")
D.ecn=new C.ev("rectangle",A5.rT,"Rectangle")
D.ecS=new C.ev("circle",A.pl,"Circle")
D.ecj=new C.ev("arrow",A.jF,"Arrow")
D.eda=new C.ev("line",A.rV,"Line")
D.ecw=new C.ev("triangle",A.a2c,"Triangle")
D.bPE=new B.a0(63318,"MaterialIcons",!1)
D.ecB=new C.ev("grayscale",D.bPE,"Grayscale")
D.ecL=new C.ev("brighten",I.aoO,"Brighten")
D.ecQ=new C.ev("flip_h",A.CJ,"Flip H")
D.bPL=new B.a0(63348,"MaterialIcons",!1)
D.edi=new C.ev("flip_v",D.bPL,"Flip V")
D.ed5=new C.ev("cover_page",A.qE,"Cover Page")
D.ecg=new C.ev("invoice",A.ht,"Invoice")
D.ecr=new C.ev("resume",A.mV,"Resume")
D.ecF=new C.ev("minutes",A.po,"Minutes")
D.ecl=new C.ev("lab_report",A.Pz,"Lab Report")
D.ecm=new C.ev("rubric",A.qH,"Rubric")
D.ecR=new C.ev("flashcard_tool",W.HL,"Flashcard")
D.edd=new C.ev("quiz_tool",A.HI,"Quiz Block")
D.ecV=new C.ev("worksheet_tool",P.Hk,"Worksheet")
D.ed_=new C.ev("outline_share",A.PB,"Share Outline")
D.ede=new C.ev("export_json",D.aoz,"Export JSON")
D.ece=new C.ev("new_slide",D.a1M,"New Slide")
D.ecM=new C.ev("present",A.qK,"Present")
D.dmG=w([D.edn,D.ecx,D.edj,D.ecp,D.ecz,D.ed0,D.ecI,D.ecK,D.ecG,D.ecC,D.ed9,D.ecD,D.edc,D.ecP,D.edf,D.ed2,D.ed6,D.ecJ,D.ecy,D.ecu,D.ed8,D.ecW,D.edh,D.ecT,D.ecN,D.ecX,D.eco,D.ecA,D.ecU,D.ech,D.eck,D.ecZ,D.ed4,D.ed7,D.edg,D.ecv,D.ecf,D.ecq,D.ecO,D.ecs,D.ecd,D.edl,D.edb,D.eci,D.ecY,D.ed3,D.edk,D.ecH,D.ecE,D.ed1,D.ect,D.edm,D.ecn,D.ecS,D.ecj,D.eda,D.ecw,D.ecB,D.ecL,D.ecQ,D.edi,D.ed5,D.ecg,D.ecr,D.ecF,D.ecl,D.ecm,D.ecR,D.edd,D.ecV,D.ed_,D.ede,D.ece,D.ecM],B.as("O<ev>"))
D.dmQ=w([A.cs,A.am],x.O)
D.eBW=new B.y(4286331629,4292552567)
D.eBJ=new B.y(4280640491,4278630100)
D.eC3=new B.y(4294538006,4292943176)
D.eB5=new B.y(4278556265,4280640491)
D.dgE=w([D.eBW,D.eBJ,D.eC3,D.eB5],x.n)
D.cDV=w([4294626325,4280472558,4294210230],x.t)
D.ec8=new C.o4("colorful","Colorful",A.mf,D.dgE,4294967295,3875536895,D.cDV,D.n4)
D.eBx=new B.y(4279522093,4279657780)
D.eBN=new B.y(4281750292,4283268111)
D.eB8=new B.y(4278603323,4279203438)
D.eBO=new B.y(4282343954,4279599165)
D.cP3=w([D.eBx,D.eBN,D.eB8,D.eBO],x.n)
D.cDD=w([4288931381,4294829706,4287033260],x.t)
D.ec4=new C.o4("nature","Nature",A.HP,D.cP3,4294442727,3874290891,D.cDD,D.dk)
D.eBr=new B.y(4279369771,4283178389)
D.eBo=new B.y(4279179050,4286456526)
D.eBF=new B.y(4280163147,4290648157)
D.eAY=new B.y(4278322711,4285343961)
D.d6q=w([D.eBr,D.eBo,D.eBF,D.eAY],x.n)
D.cDR=w([4294210230,4280472558,4289170426],x.t)
D.ec2=new C.o4("vibe","Vibe",A.Pm,D.d6q,4294967295,3874869502,D.cDR,D.vc)
D.eC_=new B.y(4290007817,4292552567)
D.eBU=new B.y(4286328082,4294286859)
D.eBZ=new B.y(4288485197,4294538006)
D.eBT=new B.y(4285343961,4293675161)
D.c9I=w([D.eC_,D.eBU,D.eBZ,D.eBT],x.n)
D.cDW=w([4294829706,4294967295,4284999929],x.t)
D.ec3=new C.o4("celebration","Celebration",A.ku,D.c9I,4294967295,4009752557,D.cDW,D.qX)
D.eBm=new B.y(4279179050,4280171146)
D.eBq=new B.y(4279310375,4280232247)
D.eBe=new B.y(4278916151,4280172719)
D.eBn=new B.y(4279179050,4281549141)
D.cZK=w([D.eBm,D.eBq,D.eBe,D.eBn],x.n)
D.cDy=w([4281908728,4294626325,4287931320],x.t)
D.ec7=new C.o4("professional","Professional",A.Cz,D.cZK,4294967295,3872118241,D.cDy,D.TH)
D.eBi=new B.y(4278995566,4278413729)
D.eBa=new B.y(4278727492,4279137424)
D.eBG=new B.y(4280171146,4278751666)
D.eBj=new B.y(4278995566,4279590517)
D.cHL=w([D.eBi,D.eBa,D.eBG,D.eBj],x.n)
D.cDB=w([4286436348,4284410580,4294829706],x.t)
D.ec9=new C.o4("ocean","Ocean",I.a3_,D.cHL,4294967295,3873501950,D.cDB,D.vd)
D.eBV=new B.y(4286328082,4294538006)
D.eBX=new B.y(4286781507,4294677052)
D.eBR=new B.y(4283178389,4294197086)
D.eBY=new B.y(4288295954,4294688548)
D.cVX=w([D.eBV,D.eBX,D.eBR,D.eBY],x.n)
D.cDX=w([4294829706,4294967295,4294747557],x.t)
D.eca=new C.o4("sunset","Sunset",A.PG,D.cVX,4294967295,4009749973,D.cDX,D.dk)
D.eC7=new B.y(4294967295,4294047225)
D.eC2=new B.y(4294507260,4294967295)
D.eC6=new B.y(4294967295,4293060848)
D.eC1=new B.y(4294507260,4294047225)
D.d9L=w([D.eC7,D.eC2,D.eC6,D.eC1],x.n)
D.cDw=w([4280640491,4279179050,4287931320],x.t)
D.ec6=new C.o4("minimal","Minimal",A5.rT,D.d9L,4279179050,4282865001,D.cDw,D.dk)
D.eBh=new B.y(4278979081,4280886564)
D.eBB=new B.y(4280031511,4278979081)
D.eBp=new B.y(4279308561,4281148438)
D.eBg=new B.y(4278979081,4280031511)
D.doT=w([D.eBh,D.eBB,D.eBp,D.eBg],x.n)
D.cDK=w([4292128567,4294829706,4289241758],x.t)
D.ecb=new C.o4("elegant","Elegant",A.mg,D.doT,4294898631,3873957348,D.cDK,D.aKu)
D.eBD=new B.y(4280159034,4282058596)
D.eBd=new B.y(4278916151,4280163147)
D.eBL=new B.y(4281208933,4278916151)
D.eBu=new B.y(4279502891,4283178389)
D.dwo=w([D.eBD,D.eBd,D.eBL,D.eBu],x.n)
D.cDT=w([4294296657,4292128567,4291081725],x.t)
D.ec5=new C.o4("royal","Royal Gold",A.jo,D.dwo,4294965222,3874084351,D.cDT,D.n4)
D.eB2=new B.y(4278464302,4280163147)
D.eBc=new B.y(4278916151,4279455306)
D.eBE=new B.y(4280163147,4283040846)
D.eB_=new B.y(4278332450,4281413249)
D.dgg=w([D.eB2,D.eBc,D.eBE,D.eB_],x.n)
D.cDx=w([4281193663,4289170426,4294210230],x.t)
D.ecc=new C.o4("aurora","Aurora Glow",A.e9,D.dgg,4293983738,3869766608,D.cDx,D.dk)
D.wT=w([D.ec8,D.ec4,D.ec2,D.ec3,D.ec7,D.ec9,D.eca,D.ec6,D.ecb,D.ec5,D.ecc],B.as("O<o4>"))
D.bnR=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dnq=w([A.rt,D.bnR,A.rt],x.O)
D.dnH=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dnL=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eRv=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eHh=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eM3=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eys=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eKF=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eIN=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eNl=new B.y("Surprise me","")
D.dok=w([D.eRv,D.eHh,D.eM3,D.eys,D.eKF,D.eIN,D.eNl],x.L)
D.bg1=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsc=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dp8=w([A.c,D.bg1,D.bsc],x.O)
D.drq=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aK3=new C.l8(0,"heritageGold")
D.bme=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hCo=w([D.bme,Aa.ahy,A.aB],x.O)
D.dQv=new C.jA("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aK3,4294570461,4284234270,4292128567,D.ka)
D.aK4=new C.l8(1,"heritageCrimson")
D.bed=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bko=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.brZ=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hC1=w([D.bed,D.bko,D.brZ],x.O)
D.dQo=new C.jA("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aK4,4294635750,4285213214,4292912216,D.ka)
D.drv=w([D.a7o,D.a7m,D.dQv,D.dQo,D.a7h,D.a7k],x.h)
D.dWs=new C.rR(1,"circuit")
D.dWV=new C.ml("neural","Neural Link","Robotic",D.dWs,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dWr=new C.rR(0,"grid")
D.dWS=new C.ml("signal","Signal Grid","Robotic",D.dWr,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dWx=new C.rR(2,"hexes")
D.dWD=new C.ml("core","Core Protocol","Robotic",D.dWx,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKr=new C.rR(11,"diagonal")
D.dWO=new C.ml("steel","Steel Tech","Robotic",D.aKr,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKs=new C.rR(3,"rings")
D.dWC=new C.ml("vault","Vault Gold","Robotic",D.aKs,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dWv=new C.rR(13,"leaves")
D.dWF=new C.ml("forest","Forest Morning","Nature",D.dWv,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKt=new C.rR(5,"waves")
D.dWM=new C.ml("ocean","Ocean Calm","Nature",D.aKt,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dWy=new C.rR(6,"sunset")
D.dWR=new C.ml("sunset","Sunset Glow","Nature",D.dWy,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dWz=new C.rR(7,"mountains")
D.dWE=new C.ml("mountain","Mountain Air","Nature",D.dWz,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dWA=new C.rR(8,"stars")
D.dWL=new C.ml("night","Night Sky","Nature",D.dWA,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7I=new C.rR(4,"orbs")
D.dWJ=new C.ml("aurora","Aurora","Nature",D.a7I,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dWT=new C.ml("sand","Sand Dune","Nature",D.aKt,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dWB=new C.rR(9,"rays")
D.dWI=new C.ml("golden","Golden Hour","Warm",D.dWB,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dWG=new C.ml("royal","Royal Purple","Warm",D.aKr,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dWH=new C.ml("rose","Rose Petal","Warm",D.a7I,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dWu=new C.rR(12,"blocks")
D.dWK=new C.ml("electric","Electric Blue","Bold",D.dWu,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dWU=new C.ml("mint","Fresh Mint","Bold",D.a7I,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dWw=new C.rR(14,"minimal")
D.dWQ=new C.ml("white","Clean White","Clean",D.dWw,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dWt=new C.rR(10,"frame")
D.dWN=new C.ml("midnight","Midnight Gold","Clean",D.dWt,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dWP=new C.ml("community","Community Green","Clean",D.aKs,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5V=w([D.dWV,D.dWS,D.dWD,D.dWO,D.dWC,D.dWF,D.dWM,D.dWR,D.dWE,D.dWL,D.dWJ,D.dWT,D.dWI,D.dWG,D.dWH,D.dWK,D.dWU,D.dWQ,D.dWN,D.dWP],B.as("O<ml>"))
D.drS=w([D.BN,A.u0,A.i1,A.c4],x.O)
D.ds9=w([D.aiz,D.jy],x.O)
D.dsj=w(["pdf","docx","txt","md"],x.s)
D.f0N=new B.b5(-3,150,34)
D.f0O=new B.b5(-3,214,62)
D.f0P=new B.b5(-3,288,62)
D.dtb=w([D.f0N,D.f0O,D.f0P],B.as("O<+(I,I,I)>"))
D.dtH=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dun=w(["Write","Design","Print & fold"],x.s)
D.kb=new C.v7(2,"triangle")
D.DT=new C.v7(3,"arrow")
D.fH=new C.v7(4,"line")
D.kc=new C.v7(5,"parallelogram")
D.duq=w([D.bj,D.eX,D.kb,D.DT,D.fH,D.kc,D.lr],x.m)
D.ezX=new B.y(240,96)
D.eCJ=new B.y(560,46)
D.dux=w([D.ezX,D.eCJ],x.G)
D.hCz=new C.y7(0,"classic")
D.dSs=new C.o0("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aK3,4294570461,4282000405,4284234270)
D.dSE=new C.o0("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aK4,4294635750,4281999378,4285213214)
D.dSt=new C.o0("elegant_navy","Umoja Mzuri",y.s,D.a7z,4294967035,4279378237,4290283019)
D.dSG=new C.o0("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKc,4294966515,4281016592,4289102906)
D.dSI=new C.o0("kente_sunset","Kente ya Jua",y.H,D.aK5,4294964964,4282000405,4279983648)
D.dSq=new C.o0("indigo_mudcloth","Nguo ya Indigo",y.n,D.aK6,4294439140,4279903102,4279903102)
D.dSv=new C.o0("adinkra_royal","Muhuri wa Adinkra",y.z,D.aK7,4294965484,4285218591,4287322667)
D.dSA=new C.o0("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK8,4294244340,4279196764,4279196764)
D.dSC=new C.o0("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK9,4294505710,4279970378,4291058750)
D.hCA=new C.y7(1,"ringsNdoa")
D.dSu=new C.o0("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tc,4294966259,4279378237,4291404327)
D.hCC=new C.y7(2,"coupleCards")
D.dSF=new C.o0("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tc,4294966259,4279378237,4291404327)
D.hCD=new C.y7(3,"kuhoweshaForm")
D.dSB=new C.o0("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DO,4294966519,4279378237,4291404327)
D.hCE=new C.y7(4,"mahariPande")
D.dSr=new C.o0("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tc,4294966259,4279904068,4291404327)
D.hCF=new C.y7(5,"familiaMti")
D.dSH=new C.o0("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKa,4294966776,4280241466,4291404327)
D.hCG=new C.y7(6,"ndoaSafi")
D.dSy=new C.o0("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DO,4294966519,4279378237,4291404327)
D.hCH=new C.y7(7,"peteWide")
D.dSx=new C.o0("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tc,4294966259,4282001936,4291404327)
D.hCI=new C.y7(8,"muhuriCrest")
D.dSw=new C.o0("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tc,4294966259,4279378237,4291404327)
D.hCJ=new C.y7(9,"fomuWazi")
D.dSz=new C.o0("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DO,4294966519,4279904068,4291404327)
D.hCB=new C.y7(10,"upendoOrnate")
D.dSD=new C.o0("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKb,4294965493,4286200650,4291404327)
D.Sz=w([D.dSs,D.dSE,D.dSt,D.dSG,D.dSI,D.dSq,D.dSv,D.dSA,D.dSC,D.dSu,D.dSF,D.dSB,D.dSr,D.dSH,D.dSy,D.dSx,D.dSw,D.dSz,D.dSD],B.as("O<o0>"))
D.DR=new C.asz(0,"landscape169")
D.oM=new C.asz(1,"portrait916")
D.dvj=w([D.DR,D.oM],B.as("O<asz>"))
D.aCS=w([A.i1,A.bN,A.cJ,A.ip,A.c],x.O)
D.v5=w([A.c4,A.ir],x.O)
D.eyX=new B.y(1000,"M")
D.eEc=new B.y(900,"CM")
D.eCD=new B.y(500,"D")
D.eAT=new B.y(400,"CD")
D.eyY=new B.y(100,"C")
D.eEd=new B.y(90,"XC")
D.eCE=new B.y(50,"L")
D.eAU=new B.y(40,"XL")
D.ez3=new B.y(10,"X")
D.eEp=new B.y(9,"IX")
D.eCV=new B.y(5,"V")
D.eCo=new B.y(4,"IV")
D.ezA=new B.y(1,"I")
D.dw3=w([D.eyX,D.eEc,D.eCD,D.eAT,D.eyY,D.eEd,D.eCE,D.eAU,D.ez3,D.eEp,D.eCV,D.eCo,D.ezA],x.ek)
D.f22=new B.cu(["open",A.j2,"Open & write","Keep writing this book"])
D.f2t=new B.cu(["print",A.uP,"Print as a book","Fold and staple it"])
D.dwe=w([D.f22,D.f2t],B.as("O<+(m,a0,m,m)>"))
D.dwX=w([D.a7K,D.n4,D.Jd,D.TH,D.dk,D.TG],x.i)
D.eSf=new B.y(-1,"Small")
D.eyI=new B.y(0,"Normal")
D.ezx=new B.y(1,"Big")
D.eAd=new B.y(2,"Huge")
D.dxw=w([D.eSf,D.eyI,D.ezx,D.eAd],x.ek)
D.dxX=w([49,65,89,38,83,89],x.t)
D.dy2=w([A.u0,A.i1,A.c4],x.O)
D.dyw=w([D.dk,D.n4,D.vc,D.a7K,D.Jd,D.TH],x.i)
D.aIa=new B.d3([0,D.Nn,8,D.ak8,12,D.ak9],B.as("d3<F,a4H>"))
D.ei9={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.brP=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cZV=w([A.bN,D.brP],x.O)
D.dl3=w([A.b0,A.bm],x.O)
D.dfk=w([A.c1,A.aJ,A.br],x.O)
D.dwf=w([A.cs,A.bu],x.O)
D.d7p=w([A.bb,A.fb],x.O)
D.dib=w([A.b8,A.fj],x.O)
D.bk1=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dhs=w([D.bk1,A.pb],x.O)
D.dbx=w([A.hi,A.y8],x.O)
D.d7c=w([A.bw,A.ch],x.O)
D.dBa=new B.bv(D.ei9,[D.cZV,O.asZ,D.dl3,D.dfk,D.dwf,D.d7p,D.dib,D.dhs,D.dbx,D.d7c],B.as("bv<m,ai<u>>"))
D.ehl={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6z=new B.bv(D.ehl,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bv<m,m>"))
D.a6G=new B.bv(A.hX,[],B.as("bv<F,+icon3d,picture(m?,m?)>"))
D.dFn=new F.NJ(30,null)
D.dKC=new F.mL("Chapter 1","","","")
D.dv5=w([D.dKC],x.B)
D.dKG=new F.rH("My Book","","",D.dv5,E.aJu)
D.dKE=new F.uY("starry",null,null,null,null,"","","")
D.dKH=new F.rH("Dream Big","","",E.a5y,D.dKE)
D.dKF=new F.uY("story",null,null,null,null,"","","")
D.dKI=new F.rH("Little Lion","","",E.a5y,D.dKF)
D.dKD=new F.uY("vintage",null,null,null,null,"","","")
D.dKJ=new F.rH("Our Story","","",E.a5y,D.dKD)
D.dNK=new C.Fc("","NGMY","","")
D.dV5=new C.A5("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ec1=new C.b34(null,null,null,null)
D.edK=new C.asE(null)
D.edV=new C.at7(0,"smaller")
D.edW=new C.at7(1,"bigger")
D.aKI=new C.at7(2,"fit")
D.elL=new B.q(3,6)
D.em4=new B.q(4,8)
D.eqh=new B.D(E.al0,U.af8,null)
D.eql=new B.D(A.a_J,A.m0,null)
D.bSp=new B.ae(A.k5,16,A.bV,null,null,null)
D.eqp=new B.D(A.iK,D.bSp,null)
D.bdC=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.eqB=new B.D(A.GV,D.bdC,null)
D.c1W=new B.ae(A.cz,16,A.aD,null,null,null)
D.eqF=new B.D(A.ey,D.c1W,null)
D.fL_=new B.B("Play",null,A.nU,null,null,null,null,null,null,null,null,null)
D.dlk=w([V.ars,A.tr,D.fL_],x.p)
D.f77=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dlk,null)
D.eqI=new B.D(A.nA,D.f77,null)
D.bdL=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.fdz=new B.a5(20,20,D.bdL,null)
D.eqP=new B.D(A.iK,D.fdz,null)
D.fUn=new B.B("Seconds per slide",null,A.fW,null,null,null,null,null,null,null,null,null)
D.eqZ=new B.D(A.bh,D.fUn,null)
D.esj=new C.a9z(2,"print")
D.esm=new B.j_(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.etZ=new B.he("/Annot")
D.eu0=new B.he("/URI")
D.fF2=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ewv=new B.jC("share",48,D.fF2,null,B.as("jC<m>"))
D.c1P=new B.ae(A.e9,14,A.eJ,null,null,null)
D.ewE=new B.cL(null,-2,-2,null,null,null,D.c1P,null)
D.d1a=w([H.ai6,A.L],x.O)
D.c8s=new B.a9(A.a6,A.a9,A.x,D.d1a,null,null)
D.b6c=new B.o(null,null,null,null,null,D.c8s,A.n)
D.bxb=new B.l3(D.b6c,A.bi,null,null)
D.ewQ=new B.cL(0,0,null,0,8,null,D.bxb,null)
D.dql=w([A.i4,A.mI,A.cf],x.O)
D.exu=new B.c_(A.A,0.5,A.x,null,0,D.dql,null,null)
D.eA5=new B.y(0.22,A.bm)
D.eEJ=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eGW=new B.y(0.5,A.hB)
D.eQB=new B.y(0.78,A.aY)
D.f1S=new B.cu([A.bs,0.22,0.7,2.6])
D.f1Z=new B.cu([A.bb,0.36,1.2,1.3])
D.f24=new B.cu([A.dJ,0.28,0.2,0.4])
D.f2a=new B.cu([A.cy,0.05,0.3,0.35])
D.f2g=new B.cu([A.bw,0.28,0.9,0])
D.f2o=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f3f=new B.cu([A.c1,0.42,1,4.1])
D.f6Q=new B.aay(9)
D.bTw=new B.ae(A.HR,28,A.br,null,null,null)
D.fUW=new B.B("NGMY News",null,A.dg,null,null,null,null,null,null,null,null,null)
D.bHx=new B.by(1,A.bc,D.fUW,null)
D.dtK=w([D.bTw,A.at,D.bHx],x.p)
D.f71=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dtK,null)
D.bTH=new B.ae(A.ou,16,A.c,null,null,null)
D.fWw=new B.B("Book",null,A.oV,null,null,null,null,null,null,null,null,null)
D.dy1=w([D.bTH,A.e1,D.fWw],x.p)
D.f7a=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dy1,null)
D.c_p=new B.ae(A.jG,10,A.c,null,null,null)
D.fJ_=new B.B("Pro",null,A.nQ,null,null,null,null,null,null,null,null,null)
D.dlp=w([D.c_p,A.r3,D.fJ_],x.p)
D.f7e=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.dlp,null)
D.fUl=new B.B("Make a newspaper",null,A.VF,null,null,null,null,null,null,null,null,null)
D.c9G=w([E.a3m,A.ae,D.fUl],x.p)
D.f7f=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.c9G,null)
D.bYS=new B.ae(A.ku,18,A.bN,null,null,null)
D.fLd=new B.B("Ending celebration",null,A.hz,null,null,null,null,null,null,null,null,null)
D.dsK=w([D.bYS,A.bn,D.fLd],x.p)
D.f7i=new B.c7(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dsK,null)
D.c_b=new B.ae(A.j2,18,A.kq,null,null,null)
D.foA=new B.G(!0,A.kq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWP=new B.B("Write",null,D.foA,null,null,null,null,null,null,null,null,null)
D.d9z=w([D.c_b,A.ae,D.fWP],x.p)
D.f7p=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.d9z,null)
D.fIY=new B.B("Download picture",null,A.nR,null,null,null,null,null,null,null,null,null)
D.bKi=new B.qE(A.e2,A.A,A.f,D.fIY,null)
D.bKt=new B.dn(1,A.co,D.bKi,null)
D.dlP=w([K.arj,A.ae,D.bKt],x.p)
D.f7q=new B.c7(A.aL,A.ba,A.i,A.m,null,A.p,null,0,D.dlP,null)
D.bVt=new B.ae(A.HR,22,A.br,null,null,null)
D.fSU=new B.B("NGMY NEWS",null,M.aaw,null,null,null,null,null,null,null,null,null)
D.d0A=w([D.bVt,A.ae,D.fSU],x.p)
D.f7A=new B.c7(A.aL,A.e,A.O,A.m,null,A.p,null,0,D.d0A,null)
D.f7M=new B.px(!1,!1,null,U.XH,null,A.c3,null,null,null)
D.a9C=new B.iL([D.cq,D.dk,D.vc,D.Jc,D.vd,D.aKx],B.as("iL<hF>"))
D.ejX={title:0,quote:1,closing:2,bio:3}
D.f9g=new B.df(D.ejX,4,x.M)
D.ehG={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f9j=new B.df(D.ehG,5,x.M)
D.ejc={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9E=new B.df(D.ejc,8,x.M)
D.eim={Design:0,Transitions:1,Insert:2}
D.f9r=new B.df(D.eim,3,x.M)
D.hCS=new B.iL([D.a7L],B.as("iL<wq>"))
D.eiv={float3d:0,drift:1,pulse:2}
D.f9v=new B.df(D.eiv,3,x.M)
D.aSl=new B.iL([D.J9,D.Ja,D.Jb],B.as("iL<mP>"))
D.ehE={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSo=new B.df(D.ehE,14,x.M)
D.hCT=new B.df(A.hX,0,B.as("df<wq>"))
D.eis={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UH=new B.df(D.eis,4,x.M)
D.ehx={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSr=new B.df(D.ehx,30,x.M)
D.eiB={circle:0,triangle:1,hexagon:2,diamond:3}
D.f9Z=new B.df(D.eiB,4,x.M)
D.fcs=new B.av(390,844)
D.fdi=new B.a5(20,20,A.M_,null)
D.aTe=new B.a5(null,2.5,null,null)
D.fds=new B.a5(18,18,A.M_,null)
D.c_f=new B.ae(A.jo,19,A.c,null,null,null)
D.fdE=new B.a5(38,38,D.c_f,null)
D.bYq=new B.ae(A.zp,22,A.c,null,null,null)
D.fdG=new B.a5(40,40,D.bYq,null)
D.fef=new B.hG(2,10,10,1.15,null)
D.aTl=new B.hG(2,16,14,0.62,null)
D.bFl=new B.Q(32,30,32,40)
D.bfh=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bTt=new B.ae(A.qE,56,D.bfh,null,null,null)
D.aja=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fqI=new B.G(!0,D.aja,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPN=new B.B("Your books will live here.",null,D.fqI,null,A.K,null,null,null,null,null,null,null)
D.dcw=w([D.bTt,A.X,D.fPN],x.p)
D.bw6=new B.fj(A.ai,A.e,A.i,A.m,null,A.p,null,0,D.dcw,null)
D.eqX=new B.D(D.bFl,D.bw6,null)
D.feB=new B.mq(D.eqX,null)
D.fPK=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.feT=new B.b1(D.fPK,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fNQ=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.feU=new B.b1(D.fNQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fSY=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new B.b1(D.fSY,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTw=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ffh=new B.b1(D.fTw,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fMr=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new B.b1(D.fMr,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_R=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffN=new B.b1(D.h_R,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXR=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ffY=new B.b1(D.fXR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTF=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fgH=new B.b1(D.fTF,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fH8=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fgY=new B.b1(D.fH8,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qq,!1,null,null,null,A.t,null)
D.fJ7=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fhf=new B.b1(D.fJ7,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPp=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new B.b1(D.fPp,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fP5=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhi=new B.b1(D.fP5,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVN=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fhj=new B.b1(D.fVN,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fDb=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new B.b1(D.fDb,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fKi=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new B.b1(D.fKi,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZv=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new B.b1(D.fZv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZ1=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fhV=new B.b1(D.fZ1,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fC5=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new B.b1(D.fC5,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUR=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fi5=new B.b1(D.fUR,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYB=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.b1(D.fYB,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYs=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fim=new B.b1(D.fYs,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fBX=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fis=new B.b1(D.fBX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fG5=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new B.b1(D.fG5,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXE=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.b1(D.fXE,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fFS=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new B.b1(D.fFS,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bnv=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_a=w([A.ip,A.pb,D.bnv,D.afC,A.ip],x.O)
D.fjI=new B.fY(A.A,0,6.283185307179586,A.x,D.d_a,null,null)
D.d8H=w([A.bN,A.c4,A.i1,D.BN,A.bN],x.O)
D.aTU=new B.fY(A.A,0,6.283185307179586,A.x,D.d8H,null,null)
D.dnF=w([A.c1,A.bs,A.bb,A.b9,A.br,A.c1],x.O)
D.fjN=new B.fY(A.A,0,6.283185307179586,A.x,D.dnF,null,null)
D.d1p=w([A.qk,A.pc,A.y6,A.ip,A.qk],x.O)
D.fjO=new B.fY(A.A,0,6.283185307179586,A.x,D.d1p,null,null)
D.dnz=w([A.aQ,A.bM,A.aO,A.am,A.aQ],x.O)
D.fjP=new B.fY(A.A,0,6.283185307179586,A.x,D.dnz,null,null)
D.dvR=w([A.bw,A.bb,A.bs,A.c1,A.bw],x.O)
D.fjR=new B.fY(A.A,0,6.283185307179586,A.x,D.dvR,null,null)
D.biX=new B.u(1,0,1,0,A.q)
D.bnQ=new B.u(1,0,1,1,A.q)
D.bkL=new B.u(1,0,0,1,A.q)
D.bgG=new B.u(1,1,0,1,A.q)
D.drK=w([A.Mg,A.ahN,D.biX,D.bnQ,D.bkL,D.bgG,A.Mg],x.O)
D.fjS=new B.fY(A.A,0,6.283185307179586,A.x,D.drK,null,null)
D.fk6=new C.axm(2,"immersiveSticky")
D.fk7=new C.axm(3,"edgeToEdge")
D.fk8=new C.axm(4,"manual")
D.fmD=new B.G(!0,A.o6,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUs=new B.G(!0,A.eQ,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnc=new B.G(!0,E.nt,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new B.G(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqs=new B.G(!0,A.eJ,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frV=new B.G(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs5=new B.G(!0,A.jV,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new B.t1(!0,A.Jz,null,null,null,null,A.dz,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new B.G(!0,A.jA,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftS=new B.G(!0,A.aD,null,null,null,null,12.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esp=new B.j_(1,1,0.7568627450980392,0.027450980392156862)
D.ftW=new B.t1(!0,D.esp,null,null,null,null,A.dz,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahV=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVh=new B.G(!0,D.ahV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,D.aja,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu4=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVj=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new B.t1(!0,A.pG,null,null,null,null,A.dz,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvw=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvy=new B.G(!0,D.ahV,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KD=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw3=new B.G(!0,A.c4,null,null,null,null,11.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new B.G(!0,A.bM,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwh=new B.G(!0,A.bN,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwy=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a55,null,null,null)
D.fwB=new B.G(!0,A.c0,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwD=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwS=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx3=new B.G(!0,A.dw,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new B.G(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxP=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVX=new B.G(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.btA=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fzU=new B.G(!0,D.btA,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW2=new B.G(!0,E.nt,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAo=new B.G(!0,A.bM,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBI=new B.B("NEW",null,D.ft0,null,null,null,null,null,null,null,null,null)
D.fC_=new B.B("Hati ya Kuhowesha",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fCt=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fCS=new B.B("Scrollable PDF on this slide",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fDD=new B.B("Big quote mark",null,A.jt,null,null,null,null,null,null,null,null,null)
D.fDG=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fDS=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fEk=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEm=new B.B("How many slides?",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fEV=new B.B("Transfer",null,A.cg,null,null,null,null,null,null,null,null,null)
D.foD=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFg=new B.B("Luxury FX",null,D.foD,null,null,null,null,null,null,null,null,null)
D.fFB=new B.B("Font",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fFM=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fFT=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fzq=new B.G(!0,A.bM,null,null,null,null,12,A.V,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG2=new B.B("Example  GA847",null,D.fzq,null,null,null,null,null,null,null,null,null)
D.fGs=new B.B("Design shapes",null,A.jt,null,null,null,null,null,null,null,null,null)
D.fGE=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fGJ=new B.B("Non-stop (loop)",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fGX=new B.B("Hati ya Kuhoweya",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fHf=new B.B("Photo studio",null,A.fC,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.B("Add your picture",null,A.kh,null,null,null,null,null,null,null,null,null)
D.fsk=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHK=new B.B("Enter document code",null,D.fsk,null,A.K,null,null,null,null,null,null,null)
D.fHL=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fHQ=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new B.G(!0,E.nt,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIa=new B.B("Delete this book?",null,D.fpL,null,A.K,null,null,null,null,null,null,null)
D.fux=new B.G(!0,E.nt,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.B("Your library",null,D.fux,null,null,null,null,null,null,null,null,null)
D.fJf=new B.B("Delete",null,A.aVa,null,null,null,null,null,null,null,null,null)
D.fJi=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.KA,null,null,null,null,null,null,null,null,null)
D.fJu=new B.B("Element flies in",null,A.aVn,null,null,null,null,null,null,null,null,null)
D.VQ=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fJT=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new B.B("Cancel",null,E.aVx,null,null,null,null,null,null,null,null,null)
D.fKh=new B.B("The lines and circles that come with the design",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fyd=new B.G(!0,A.ho,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKJ=new B.B("DOCUMENT CODE",null,D.fyd,null,null,null,null,null,null,null,null,null)
D.fLz=new B.B("Quotes",null,G.ab8,null,null,null,null,null,null,null,null,null)
D.frH=new B.G(!0,N.lF,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLI=new B.B("Add a picture",null,D.frH,null,null,null,null,null,null,null,null,null)
D.fLQ=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vt,null,A.K,null,null,null,null,null,null,null)
D.fLU=new B.B("Look & feel",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fLZ=new B.B("Rings",null,A.hz,null,null,null,null,null,null,null,null,null)
D.fM4=new B.B("W",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fMe=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fMx=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.VC,null,A.K,null,null,null,null,null,null,null)
D.fMz=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNj=new B.B("Add page",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fNB=new B.B("Malipo ya Awamu ya Mahari",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fs9=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new B.B("Create with AI",null,D.fs9,null,A.K,null,null,null,null,null,null,null)
D.fOk=new B.B("Apply look",null,A.hz,null,null,null,null,null,null,null,null,null)
D.fsR=new B.G(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP7=new B.B("Type your presentation below",null,D.fsR,null,A.K,null,null,null,null,null,null,null)
D.fPa=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aW6,null,A.K,null,null,null,null,null,null,null)
D.fPc=new B.B("Keep it",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fnv=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPj=new B.B("Done",null,D.fnv,null,null,null,null,null,null,null,null,null)
D.fPE=new B.B("Delete",null,A.nS,null,null,null,null,null,null,null,null,null)
D.fPP=new B.B("Hati ya Kiapo cha Uongozi",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fr_=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQK=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fr_,null,A.K,null,null,null,null,null,null,null)
D.fR8=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fRe=new B.B("Layout",null,A.VH,null,null,null,null,null,null,null,null,null)
D.fRT=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fS1=new B.B("X",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fSC=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A2.ED,null,null,null,null,null,null,null,null,null)
D.fTa=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fTo=new B.B("Hati ya Kuhowa",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fTq=new B.B("Choose a class template",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fTs=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fTz=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTM=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fTT=new B.B("Done",null,A.aVU,null,null,null,null,null,null,null,null,null)
D.fU3=new B.B("Ending celebration",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fU4=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A2.tx,null,null,null,null,null,null,null,null,null)
D.fVj=new B.B("Export presentation",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fVk=new B.B("What would you like to do?",null,D.aVh,null,null,null,null,null,null,null,null,null)
D.fVp=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fVW=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fW_=new B.B("Hati (Documents)",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fWc=new B.B("Done",null,A.lv,null,null,null,null,null,null,null,null,null)
D.fzf=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWg=new B.B("Delete presentation?",null,D.fzf,null,A.K,null,null,null,null,null,null,null)
D.fWA=new B.B("After the last slide it starts again from the first",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fWM=new B.B("\ud83c\udf33",null,A.EC,null,A.K,null,null,null,null,null,null,null)
D.fX3=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fXa=new B.B("Transfer document",null,A.nT,null,null,null,null,null,null,null,null,null)
D.fXl=new B.B("Add to the slides",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fXI=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fXX=new B.B("Make a book",null,I.aUM,null,null,null,null,null,null,null,null,null)
D.fY0=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.frA=new B.G(!0,A.am,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY2=new B.B("Keep this page open until it finishes.",null,D.frA,null,null,null,null,null,null,null,null,null)
D.fY4=new B.B("Making your video",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fY9=new B.B("LANGUAGE",null,X.tz,null,null,null,null,null,null,null,null,null)
D.fYg=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fYo=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYq=new B.B("Upload a different logo",null,A.cg,null,null,null,null,null,null,null,null,null)
D.fYH=new B.B("Delete from the database?",null,A.kh,null,null,null,null,null,null,null,null,null)
D.fYI=new B.B("H",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fZ7=new B.B("NGMY Quotes",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fZB=new B.B("Cover",null,D.aW2,null,null,null,null,null,null,null,null,null)
D.fZF=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fZG=new B.B("Each page becomes its own slide you can present",null,A.hy,null,null,null,null,null,null,null,null,null)
D.h_2=new B.B("Y",null,A.ty,null,null,null,null,null,null,null,null,null)
D.h_e=new B.B("Crop the picture",null,A.lv,null,null,null,null,null,null,null,null,null)
D.h_l=new B.B("Edit text",null,A.Ky,null,null,null,null,null,null,null,null,null)
D.h1G=B.dR("a9l")
D.ER=new C.ayI(0,"none")
D.aZZ=new C.ayI(1,"zipCrypto")
D.b__=new C.ayI(2,"aes")
D.hqh=new F.Qh("","",null)
D.hrp=new C.bej(null)
D.hsv=new C.a_K(null)
D.hvu=new C.aei(null)
D.hvw=new C.aFW(null)
D.hyh=new C.a0Z(null)
D.hyx=new C.a1v(null)
D.hz9=new C.bwh(null)})();(function staticFields(){$.hsb=null
$.hsc=null
$.hsd=null
$.hse=null
$.h9v=B.wP("_lastQuoRemDigits")
$.h9w=B.wP("_lastQuoRemUsed")
$.az4=B.wP("_lastRemUsed")
$.h9x=B.wP("_lastRem_nsh")
$.qr=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a89=B.T(x.N,x.I)
$.h6W=!1
$.hx8=B.T(B.as("l8"),x.N)
$.hxk=B.T(B.as("l8"),x.E)
$.hvg=!1
$.bBW="q"
$.Rl=0
$.Dg=B.T(x.N,B.as("ai<A6>"))
$.hvD=!1
$.hbe=!1
$.hCe=null
$.i6w=B.T(x.N,B.as("aB<m?>"))
$.La=""
$.jb=0
$.hp1=function(){var w=x.N
return B.T(w,w)}()
$.hp0=B.T(x.N,x.R)
$.hbz=!1
$.agZ=B.T(x.N,x.E)
$.hcq=0
$.bmy=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iwh","DD",()=>C.bbN(0))
w($,"iwf","a3L",()=>C.bbN(1))
w($,"iwg","hG6",()=>C.bbN(2))
w($,"iwe","hgv",()=>$.a3L().vE(0))
w($,"iwc","hG4",()=>C.bbN(1e4))
w($,"iwd","hG5",()=>B.ET(8))
w($,"irY","hE_",()=>B.ET(0))
w($,"is5","hE3",()=>B.ET(0))
w($,"is4","hE2",()=>B.c29(0))
w($,"iAe","hIf",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6z.gdO(D.a6z),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iAG","bGr",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n7(new C.fSd(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.n7(new C.fSe(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fSf(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.n7(new C.fSq(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.n7(new C.fSv(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fSw(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.n7(new C.fSx(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.n7(new C.fSy(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.n7(new C.fSz(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fSA(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.n7(new C.fSB(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.n7(new C.fSg(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.n7(new C.fSh(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.n7(new C.fSi(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fSj(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.n7(new C.fSk(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.n7(new C.fSl(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.n7(new C.fSm(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.n7(new C.fSn(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.n7(new C.fSo(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.n7(new C.fSp(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.n7(new C.fSr(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.n7(new C.fSs(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.n7(new C.fSt(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.n7(new C.fSu(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fl>"))})
w($,"iAh","hIh",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["EDFbuf+bPiGqnFizS8Q6sCFhf/w="]=a.current})($__dart_deferred_initializers__);