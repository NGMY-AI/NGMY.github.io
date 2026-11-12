((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
ue(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h9F(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Ku(d){var w
if(d===0)return $.DD()
if(d===1)return $.a3N()
if(d===2)return $.hGd()
if(Math.abs(d)<4294967296)return C.bbQ(A.o.M(d))
w=C.i0v(d)
return w},
bbQ(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ue(4,w)
return new C.oe(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ue(1,w)
return new C.oe(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.ue(2,w)
return new C.oe(v===0?!1:s,w,v)}v=A.o.ar(A.o.galu(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ar(d,65536)}v=C.ue(v,w)
return new C.oe(v===0?!1:s,w,v)},
i0v(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DD()
w=$.hGc()
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
h9G(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hsm(d,e,f,g){var w,v,u,t,s,r=A.o.ar(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hsh(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16)
if(A.o.F(f,16)===0)return C.h9G(d,e,s,g)
w=e+s+1
C.hsm(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i0y(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cO2(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i0w(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbR(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hsn(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.ar(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.ar(r,65536)}},
i0x(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oe:function oe(d,e,f){this.a=d
this.b=e
this.c=f},
cO3:function cO3(){},
cO4:function cO4(){},
cO5:function cO5(d,e){this.a=d
this.b=e},
cO6:function cO6(d){this.a=d},
aTa:function aTa(d,e){this.a=d
this.b=e},
hi2(d,e,f){var w=new C.SJ(d,A.o.ar(Date.now(),1000),e)
w.Q=f
return w},
SJ:function SJ(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4J:function a4J(d,e){this.a=d
this.b=e},
bK6:function bK6(d){this.a=d
this.c=this.b=0},
hJy(){return new C.bIo()},
bIo:function bIo(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cG2:function cG2(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i0b(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cb(d.gd2n(d)))
v=f*2+2
u=C.hq1(C.hq3(),64)
t=new C.coK(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.coL(e,1000,v)
s=new Uint8Array(v)
return A.aH.dt(s,0,t.cQc(w,0,s,0))},
cG0:function cG0(d,e){this.c=d
this.d=e},
ayL:function ayL(d,e){this.a=d
this.b=e},
cG3:function cG3(d,e,f,g){var _=this
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
baw:function baw(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cG1:function cG1(){this.a=$},
hrR(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hJh(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGY:function bGY(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hfF(d,e){e&=31
return(d&$.qr[e])<<e>>>0},
nJ(d,e){e&=31
return(d>>>e|C.hfF(d,32-e))>>>0},
hq2(d){var w,v=new C.auj()
if(B.iS(d))v.aMu(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hq3(){var w=C.hq2(0),v=new Uint8Array(4),u=x.S
u=new C.coM(w,v,A.Fh,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.ir(0)
return u},
hq1(d,e){var w=new C.coI(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
coH:function coH(){},
coL:function coL(d,e,f){this.a=d
this.b=e
this.c=f},
coF:function coF(){},
aui:function aui(d){this.a=d},
coK:function coK(d){this.a=$
this.b=d
this.c=$},
coG:function coG(){},
coE:function coE(){},
auj:function auj(){this.b=this.a=$},
coJ:function coJ(){},
coM:function coM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
coI:function coI(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
coD:function coD(){},
coC:function coC(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSl:function bSl(){},
bSm:function bSm(d){this.a=d},
i3x(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bc5:function bc5(){},
cz9:function cz9(){},
bTn:function bTn(d,e){this.a=d
this.b=!1
this.c=e},
bTo:function bTo(){},
icG(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
axm(d){var w=0,v=B.j(x.H),u
var $async$axm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fk2?2:4
break
case 2:w=5
return B.b(A.kA.h8("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axm)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kA.h8("SystemChrome.setEnabledSystemUIOverlays",C.icG(null),u),$async$axm)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axm,v)},
axp:function axp(d,e){this.a=d
this.b=e},
a9n:function a9n(d){this.a=d},
ifj(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fFg(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
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
fFg:function fFg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoO(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahW("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aoO)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.dd(s,x.f)
t=B.cE(t,new C.c3k(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a4(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c3l())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoO,v)},
aoQ(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoO(),$async$aoQ)
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
return B.b(B.nI("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ak(),"savedAt",l],t,q),null),$async$aoQ)
case 7:if(!f){w=5
break}s.n(0,p,B.H(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.nI("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],t,q),null),$async$aoQ)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoQ,v)},
c3m(d){return C.hPl(d)},
hPl(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3m=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahW("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i8),$async$c3m)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.X_(B.a2(q,x.N,x.z))
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
return B.i($async$c3m,v)},
aoP(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoO(),$async$aoP)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nM(r,new C.c3n(d))
w=4
return B.b(B.nI("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).ab().ag()],x.N,x.z),null),$async$aoP)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aR8("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoP)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoP,v)},
c3k:function c3k(){},
c3l:function c3l(){},
c3n:function c3n(d){this.a=d},
ipu(d,e,f){return B.bT(A.L,null,new C.fW6(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fW6:function fW6(d,e,f){this.a=d
this.b=e
this.c=f},
a20:function a20(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKN:function aKN(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fh1:function fh1(d,e){this.a=d
this.b=e},
fh5:function fh5(d){this.a=d},
fh6:function fh6(d){this.a=d},
fh7:function fh7(d,e,f){this.a=d
this.b=e
this.c=f},
fh2:function fh2(d){this.a=d},
fh3:function fh3(d){this.a=d},
fh4:function fh4(d,e){this.a=d
this.b=e},
fgX:function fgX(d){this.a=d},
fgV:function fgV(d){this.a=d},
fgW:function fgW(d){this.a=d},
fgY:function fgY(d){this.a=d},
fgZ:function fgZ(d){this.a=d},
fhb:function fhb(d,e){this.a=d
this.b=e},
fha:function fha(d,e){this.a=d
this.b=e},
fh0:function fh0(d,e,f){this.a=d
this.b=e
this.c=f},
fh_:function fh_(d,e,f){this.a=d
this.b=e
this.c=f},
fh8:function fh8(d,e){this.a=d
this.b=e},
fh9:function fh9(d,e){this.a=d
this.b=e},
fhe:function fhe(d){this.a=d},
fhf:function fhf(d,e){this.a=d
this.b=e},
fhd:function fhd(d,e){this.a=d
this.b=e},
fhc:function fhc(){},
huO(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dd(w,x.f)
v=B.cE(v,new C.fox(),v.$ti.k("M.E"),x.ea)
u=B.a4(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.foy(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a30(d){return C.igF(d)},
igF(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a30=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fIr(n)
t=4
j=m
i=C
w=7
return B.b(B.a3A("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a30)
case 7:j.$1(i.huO(f))
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
return B.b(B.az(),$async$a30)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.huO(B.aT(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.foG(d),$async$a30)
case 13:p=j.C(new i.Y(h,new g.fIp(f),o),o.k("M.E"))
A.d.aZ(p,new C.fIq())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a30,v)},
aix(d,e){return C.ipa(d,e)},
ipa(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aix=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fVB(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.Y.az(n,null)
q=!1
t=4
w=7
return B.b(B.aio("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aix)
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
return B.b(B.az(),$async$aix)
case 12:p=g
w=13
return B.b(p.aA("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aix)
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
return B.i($async$aix,v)},
foG(d){return C.i4Z(d)},
i4Z(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$foG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$foG)
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
return B.i($async$foG,v)},
aho(d,e){return C.ifb(d,e)},
ifb(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aho=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aho)
case 6:s=g
r=B.aR(x.N)
q=s.tQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h7(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a4(q).k("cg.E"))
w=7
return B.b(s.aA("StringList","ngmy_books_deleted_v1_"+r,q),$async$aho)
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
return B.b(C.a30(d),$async$aho)
case 8:n=g
J.nM(n,new C.fEV(e))
w=9
return B.b(C.aix(d,n),$async$aho)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aho,v)},
ipz(d,e){return B.a6(d,!1).cd(B.eb(new C.fWs(e),!0,null,x.H))},
i0A(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cC(w.d,new C.cPq())},
oG:function oG(d,e,f){this.a=d
this.b=e
this.c=f},
fox:function fox(){},
foy:function foy(){},
fIr:function fIr(d){this.a=d},
fIp:function fIp(d){this.a=d},
fIq:function fIq(){},
fVB:function fVB(){},
fEV:function fEV(d){this.a=d},
fWs:function fWs(d){this.a=d},
ZI:function ZI(d,e){this.c=d
this.a=e},
azj:function azj(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cPq:function cPq(){},
cPs:function cPs(d,e){this.a=d
this.b=e},
cPv:function cPv(d){this.a=d},
cPw:function cPw(d){this.a=d},
cPu:function cPu(){},
cPx:function cPx(d,e){this.a=d
this.b=e},
cPt:function cPt(d){this.a=d},
cPy:function cPy(){},
cPr:function cPr(d,e){this.a=d
this.b=e},
cPz:function cPz(){},
cPm:function cPm(d){this.a=d},
cPk:function cPk(d){this.a=d},
cPl:function cPl(d){this.a=d},
cPn:function cPn(d,e){this.a=d
this.b=e},
cPj:function cPj(d){this.a=d},
cPi:function cPi(d){this.a=d},
cPg:function cPg(d,e){this.a=d
this.b=e},
cPh:function cPh(d){this.a=d},
cPp:function cPp(){},
cPo:function cPo(d){this.a=d},
cPf:function cPf(d,e){this.a=d
this.b=e},
cPe:function cPe(d,e){this.a=d
this.b=e},
cPd:function cPd(d,e){this.a=d
this.b=e},
cPA:function cPA(d){this.a=d},
ZG:function ZG(d,e,f){this.c=d
this.d=e
this.a=f},
aGC:function aGC(d,e,f){this.a=d
this.b=e
this.c=f},
azf:function azf(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cOH:function cOH(d){this.a=d},
cOG:function cOG(d){this.a=d},
cOJ:function cOJ(d,e,f){this.a=d
this.b=e
this.c=f},
cOR:function cOR(){},
cOS:function cOS(d){this.a=d},
cOK:function cOK(d,e,f){this.a=d
this.b=e
this.c=f},
cOI:function cOI(d,e){this.a=d
this.b=e},
cOM:function cOM(d,e){this.a=d
this.b=e},
cON:function cON(d,e){this.a=d
this.b=e},
cOO:function cOO(d,e){this.a=d
this.b=e},
cOL:function cOL(d){this.a=d},
cOQ:function cOQ(d){this.a=d},
cOP:function cOP(d,e){this.a=d
this.b=e},
cOX:function cOX(d){this.a=d},
cOT:function cOT(d,e){this.a=d
this.b=e},
cOU:function cOU(d,e){this.a=d
this.b=e},
cOV:function cOV(d,e){this.a=d
this.b=e},
cOW:function cOW(d,e){this.a=d
this.b=e},
azh:function azh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ij1(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bG(new C.fMZ(),x.H).eM(new C.fN_())}}else if(s)C.hwn()}catch(t){}},
hwn(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eM(new C.fsQ())}catch(u){}},
ij4(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fMZ:function fMZ(){},
fN_:function fN_(){},
fsQ:function fsQ(){},
hBd(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
hBa(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lr)return null
return A.a.b2(w,14)},
hej(d){var w
if(d.b!==D.lr)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
iju(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hBe(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ijp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cE(u,new C.fNY(),B.a4(u).k("M.E"),t)
s=B.C(u,B.a4(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Gh(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
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
ijn(d,e){var w,v,u,t,s,r=B.a4(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fNX())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aSa(w,u,s,0)}return w},
ijr(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6B:$.hIm(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hBb(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fpz(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hBd(q)===e)return q}return null},
ijs(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gH(D.I1).a},
ijt(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.af8(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.af8(0,0,0)
v=C.fpz(b6,b0)
u=C.fpz(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ijr(b2,C.ijp(C.hBb(b2),v.r))
if(s.a!==0){u.r=C.ijn(C.hBb(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hBd(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.dY(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fpz(b6,n)
i=C.fpz(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.hej(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hBa(a8)===a0||C.hej(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RN(a1,new C.fO3(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jb
$.jb=a9+1
A.d.J(a1,new C.eN(""+1000*a6+"_"+a9,D.lr,a2,a3,a4,a5,"",24,A.a8,A.bs,A.aG,4279310375,A.bk,d.at,D.bj,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cq,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.af8(k,t,e)},
ijo(d){var w=C.ijs(d)
if(d.w==="hati_kuhowa")return C.hAy("",w)
return C.hAx("",w)},
fNY:function fNY(){},
fNX:function fNX(){},
fO3:function fO3(d){this.a=d},
hw4(){var w=new B.V(Date.now(),0,!1),v=new C.frR()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
hes(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fOW(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lr&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hBs(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fOW(d)
w=B.bj(u)
if(w==null)return!C.fOW(d)
return new B.V(Date.now(),0,!1).ab().d3(w.ab().bR(18e9))},
ik9(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).ab().ag()},
hTo(d){return A.a.i(d).toLowerCase()},
arc(d){return C.hTq(d)},
hTq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$arc=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$arc)
case 7:r=f
p=r.tQ("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.inL(),B.U(o).k("N<1,m>")).bZ(0,new C.cf5())
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
return B.i($async$arc,v)},
arb(d,e){return C.hTp(d,e)},
hTp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$arb=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arc(d),$async$arb)
case 3:r=g
if(!J.c5(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$arb)
case 8:q=g
w=9
return B.b(q.aA("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$arb)
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
return B.i($async$arb,v)},
ard(d,e){return C.hTr(d,e)},
hTr(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ard=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.arc(d),$async$ard)
case 3:r=g
if(!J.hk(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$ard)
case 8:q=g
w=9
return B.b(q.aA("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pU(r)),$async$ard)
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
return B.i($async$ard,v)},
Wn(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Wn=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h72&&!a5){w=1
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
if(f.b(n.b))J.aK(o,J.k(n.a),C.X_(B.a2(f.a(n.b),e,a0)))}$.a8b=o}}t=2
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
return B.b(B.c7(),$async$Wn)
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
J.aK(k,J.k(j.a),C.X_(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a8b.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbs())f=d===e.gbs()&&f.b<e.gcE()
else f=!0
f=!f}else f=!0
if(f)$.a8b.n(0,i.a,i.b)}w=20
return B.b(C.are(),$async$Wn)
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
case 16:case 9:$.h72=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Wn,v)},
are(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$are=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$are)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a8b,o=new B.ck(o,B.a4(o).k("ck<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.ak())}w=7
return B.b(s.aA("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Y.az(r,null)),$async$are)
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
return B.i($async$are,v)},
b1e(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b1e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Wn(!1),$async$b1e)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a8b.h(0,t)
r=s==null?null:s.hQ()
if(r==null){u=null
w=1
break}u=C.bEx(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1e,v)},
a8c(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8c=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hQ()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a8b.n(0,d,o)
$.h72=!0
w=3
return B.b(C.are(),$async$a8c)
case 3:w=4
return B.b(B.c7(),$async$a8c)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a8b,n=new B.ck(n,B.a4(n).k("ck<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aK(r,q.a,q.b.ak())}w=9
return B.b(B.nI("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).ab().ag()],e,x.z),null),$async$a8c)
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
return B.i($async$a8c,v)},
arf(d){var w=0,v=B.j(x.T),u,t,s
var $async$arf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a6F(A.eN),$async$arf)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fp(),$async$arf)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1d(t,d),$async$arf)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arf,v)},
b1d(d,e){return C.hTs(d,e)},
hTs(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1d=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c7(),$async$b1d)
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
return B.b(p.xG(q,new Uint8Array(B.cb(d)),D.bKl),$async$b1d)
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
return B.i($async$b1d,v)},
Lh(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cW,l,m,n)},
fri(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
hbi(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.j.E(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cF,A.R,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cW,g,e,f)},
fqR(d,e,f,g){return C.fri(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hbj(d,e,f,g,h,i,j,k){var w=C.cD()
return C.er(A.r6,!1,j,A.aG,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bs,A.a8,"",h,w,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cW,g,e,f)},
hw3(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.em(v,w,"").split(":"))},
bEx(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hw3(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lr&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hdY(u)
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
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hw3(m)
if(l!=null&&r.ao(0,l)){o=r.h(0,l)
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
A.d.bt(a1.z,new C.fMX(a2))}else A.d.bt(a1.z,new C.fMY())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fOW(a0))a0.ax=a6.f.ab().ag()
return a0},
hdY(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fPJ(D.a7B),l=C.cD(),k=x.u,j=B.a([C.er(A.bk,!1,s,A.aG,"marriage_locked_bg",r,24,A.bs,A.a8,"",1,C.cD(),m,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cq,D.lR,1,0,0)],k),i=B.a([],k)
i.push(C.Lh("NGMY",A.K,236069181,52,A.bs,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lh("TAREHE:",A.bk,o,16,A.bs,A.I,A.j.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hbi("tarehe",0.8059999999999999,0.026,0.18,A.bk,16,p,C.hw4()))
i.push(C.fqR(0.8099999999999999,0.026+A.j.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lh("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bs,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lh("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cF,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fri(0,0.002,D.fH,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hbj("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hbj("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hbj("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fri(268435456,0.175,D.bj,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lh("VIDEO YA KIAPO",A.bk,o,10,A.bs,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bk,!1,s,A.aG,"__kiapo_video__",r,24,A.bs,A.a8,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bj,q,2,"",0,0,"",D.cq,D.lR,0.77,0.115,0.492))
i.push(C.Lh("Rais Anayeapa:",A.bk,p,15,A.bs,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lh("Jina:",A.bk,p,13,A.bs,A.R,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hbi("rais_jina",0.195,0.6930000000000001,0.62,A.bk,13,p,""))
i.push(C.fqR(0.195,0.7130000000000001,0.62,n))
i.push(C.Lh("Sahihi:",A.bk,p,13,A.bs,A.R,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bk,!1,s,A.aG,"marriage_sign_rais",0,24,A.bs,A.a8,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,0.38,0.21500000000000002,0.73))
i.push(C.fqR(0.21500000000000002,0.795,0.38,n))
i.push(C.Lh("Tarehe:",A.bk,p,13,A.bs,A.R,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hbi("rais_tarehe",0.745,0.74,0.2,A.bk,12,p,C.hw4()))
i.push(C.fqR(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fri(0,0.032,D.bj,o,1,"state_box",0.72,0.14,0.875),C.Lh("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bs,A.R,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rS(4294967035,t,0,0,j,l,D.qW,"","",u,D.dk)
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahw(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahw=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.feN)
w=1
break}w=3
return B.b(C.Wn(!0),$async$ahw)
case 3:w=4
return B.b(C.b1e(p),$async$ahw)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hBs(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.blH,null,new C.fHO(p),f,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahw)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fHP(),f,null,!0,!0,x.y),$async$ahw)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hdY(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hdY(p))
case 1:return B.h(u,v)}})
return B.i($async$ahw,v)},
frR:function frR(){},
cf5:function cf5(){},
fMX:function fMX(d){this.a=d},
fMY:function fMY(){},
fHO:function fHO(d){this.a=d},
fHM:function fHM(d){this.a=d},
fHN:function fHN(d){this.a=d},
fHP:function fHP(){},
fHK:function fHK(d){this.a=d},
fHL:function fHL(d){this.a=d},
arK:function arK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFq:function aFq(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ekQ:function ekQ(d){this.a=d},
ekO:function ekO(d){this.a=d},
ekP:function ekP(d){this.a=d},
ekR:function ekR(d){this.a=d},
ekS:function ekS(d){this.a=d},
x0(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.er(e,!1,f,A.aG,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",j,D.bj,4280172719,2,d,0,0,"",D.cq,D.cW,l,m,n)},
hvF(d,e,f){var w=4291404327
return B.a([C.qq(0,f,D.eW,w,2,"ring_l",f,d-f*0.42,e),C.qq(0,f,D.eW,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fqg(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qq(4294967288,f,D.eW,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qq(h,s,D.eW,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qq(h,f*0.46,D.eW,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qq(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
fqf(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.j.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aG,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cF,A.R,"",v,w,null,"","",0,!1,"",0,D.bj,4280172719,2,l,0,0,"",D.cq,D.cW,g,e,f)},
bBV(d,e,f,g){return C.qq(0,0.002,D.fH,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hvE(d,e,f,g,h){var w=A.j.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qq(0,0.036,D.bj,h,1.4,"banner_box_"+d,w,v,e),C.x0(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hBc(){var w=new B.V(Date.now(),0,!1),v=new C.fO2()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bK(w)))+"/"+B.bC(w)},
hvG(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x0(r+".",A.bk,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fqf("witness_"+d+"_"+r+"_name",q,g,p,A.bk,!0,16,j,"[Jina la Shahidi]"),C.bBV(q,g+A.j.E(0.0272,0.02,0.06),p,w),C.x0("Sahihi:",A.bk,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d+"_witness_"+r,0,24,A.bs,A.a8,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,s,t,g-0.004),C.bBV(t,g+0.044,s,w)],x.u)},
ahY(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dru,D.ctS,D.djl,D.dln],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hav(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fPJ(d.d),v=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cD(),w,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,1,0,0)],x.u)
A.d.v(v,C.i7x(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i7x(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x0("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hvF(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hvF(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fqg(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fqg(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x0("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qq(0,0.062,D.eW,b1,1.6,"crest_o",0.11,0.445,0.012),C.qq(0,0.046,D.eW,b1,1,"crest_i",0.084,0.458,0.02),C.x0("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qq(0,0.002,D.fH,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qq(b9,0.016,D.ls,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qq(0,0.002,D.fH,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.x0("TAREHE:",A.bk,c0,20,A.I,A.j.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fqf("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bk,!1,21,b9,C.hBc()),C.bBV(0.814,0.026+A.j.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x0(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qq(c0,0.0026,D.bj,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qq(c3.e,0.138,D.bj,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.er(A.bk,!1,b9,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bs,A.cC,"",0.128,s,a9,"","",0,!1,"",0,D.bj,b3,2,c5,0,0,"",D.cq,D.cW,0.82,0.09,t))
t+=c4
if(c8){r=A.j.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qq(0,0.036,D.bj,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.er(A.K,!1,c0,A.aG,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bs,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bj,b3,2,c7,0,0,"",D.cq,D.cW,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hvE(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x0(c9,A.bk,b9,d0,A.R,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.E(0.037399999999999996,0.02,0.06):A.j.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fqf("mahari_"+p,0.132,k,m,A.bk,!1,16,b9,s)
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
d=B.a([new C.eN(""+1000*i+"_"+h,D.cW,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bs,A.aG,c0,A.bk,a9,D.bj,b2,b3,2,0,!1,s,0,D.cq,0,"","","","","",!1,0),j,new C.eN(""+1000*f+"_"+e,D.fg,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bs,A.aG,b6,A.bk,a9,D.fH,0,b5,0.8,0,!1,g,0,D.cq,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eN(""+1000*s+"_"+p,D.cW,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bs,A.aG,b7,A.dX,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*i+"_"+h,D.fg,a1,a2,0.046,0.025875,"",24,A.a8,A.bs,A.aG,b6,A.bk,a9,D.bj,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*g+"_"+f,D.cW,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bs,A.aG,b7,A.K,a9,D.bj,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cq,0,"","","","","",!1,0),new C.eN(""+1000*e+"_"+a3,D.fg,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bs,A.aG,b6,A.bk,a9,D.bj,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cq,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hvE("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7s||w===D.a7u||w===D.a7r||w===D.a7t){w=t-0.008
A.d.v(c2,C.fqg(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fqg(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qq(0,a4,D.bj,c0,1.3,"wit_table_border",0.82,0.09,t),C.qq(c0,a4,D.bj,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qq(0,0.0022,D.fH,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x0("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x0("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hvG("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hvG("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qq(0,0.11,D.bj,c0,1.2,"mw_box",0.82,0.09,t),C.x0("MWANDISHI",A.bk,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x0("Jina:",A.bk,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fqf("mwandishi_jina",0.215,w,0.3116,A.bk,!0,15,b9,""),C.bBV(0.215,p,0.3116,b5),C.x0("Sahihi:",A.bk,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bk,!1,b6,A.aG,"marriage_sign_mwandishi",0,24,A.bs,A.a8,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,0.3161999999999999,0.5738,s-0.044),C.bBV(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qq(0,0.032,D.bj,c0,1,"state_box",0.7,0.15,a8),C.x0("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.R,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ijq(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.heC(d.d),p=new C.fNZ(s),o=new C.fO_(s),n=d.z,m=n===D.a7s||n===D.a7u||n===D.a7r||n===D.a7t,l=n===D.aJG||n===D.a7v||n===D.aJH,k=B.bR(0,B.fR(q,A.A,t,t,A.cj,A.bZ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7v?26:16
i.push(new C.fO1().$1$size(w))}if(n===D.aJI)i.push(D.fWD)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iR,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.n(4)
i.push(B.q(t,B.x(B.a([p.$0(),D.aTe,p.$1$w(0.9),D.aTe,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bgd,t,n,w,t,t,A.n),t,t,t,t,A.amF,t,t,t))
i.push(A.am)
i.push(new C.fO0(r).$1("NIMETOWE"))
i.push(A.fK)
v=J.e2(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NI,new B.c6(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.q(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.dd,new B.by(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(A.alg,B.x(i,A.al,t,A.e,A.i,0,A.p),t)],j),t)},
hAx(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahY(e,t)
if(r==null)r=A.d.gH(D.I1)
w=C.cD()
v=C.rS(r.e,t,0,0,C.hav(r,0.165,y.O,D.dm_,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qW,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hAy(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahY(e,t)
if(r==null)r=A.d.gH(D.I1)
w=C.cD()
v=C.rS(r.e,t,0,0,C.hav(r,0.165,y.f,D.dhk,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qW,"","",s,D.dk)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ch(t,t,t,t,D.oM,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFQ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.fZV(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFQ,v)},
ahx(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahx=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHS(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MQ,null,new C.fHT(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahx)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFQ(d,"Hati ya Kuhowa",D.I1),$async$ahx)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LX(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahx)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAx(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahx,v)},
ahy(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahy=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fHW(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MQ,null,new C.fHX(p),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahy)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFQ(d,"Hati ya Kuhoweya",D.I1),$async$ahy)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LX(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahy)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hAy(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahy,v)},
ahz(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahz=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fI_(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.MQ,null,new C.fI0(m),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahz)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFQ(d,"Malipo ya Awamu ya Mahari",D.Sf),$async$ahz)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LX(d,"Tafuta jimbo\u2026","",A.ku,"Chagua jimbo"),$async$ahz)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahY(s,D.Sf)
if(q==null)q=A.d.gH(D.Sf)
n=C.cD()
p=C.rS(q.e,null,0,0,C.hav(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dbV,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qW,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dk)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ch(null,null,null,null,D.oM,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahz,v)},
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
fO2:function fO2(){},
fNZ:function fNZ(d){this.a=d},
fO0:function fO0(d){this.a=d},
fO1:function fO1(){},
fO_:function fO_(d){this.a=d},
fZV:function fZV(d,e){this.a=d
this.b=e},
aeh:function aeh(d,e,f){this.c=d
this.d=e
this.a=f},
e7l:function e7l(d,e,f){this.a=d
this.b=e
this.c=f},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
adG:function adG(d,e,f){this.c=d
this.d=e
this.a=f},
fHS:function fHS(){},
fHT:function fHT(d){this.a=d},
fHQ:function fHQ(d){this.a=d},
fHR:function fHR(d){this.a=d},
fHW:function fHW(){},
fHX:function fHX(d){this.a=d},
fHU:function fHU(d){this.a=d},
fHV:function fHV(d){this.a=d},
fI_:function fI_(){},
fI0:function fI0(d){this.a=d},
fHY:function fHY(d){this.a=d},
fHZ:function fHZ(d){this.a=d},
Lk(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.er(e,!1,f,A.aG,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bs,h,"",i,w,null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cW,k,l,m)},
Dj(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.er(A.bk,!1,4279310375,A.aG,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bs,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cq,D.fg,j,k,l)},
hwq(d,e,f){return C.Dj(0,0.002,D.fH,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bC5(d,e,f,g,h){return B.a([C.Dj(4294967288,0.032,D.bj,4291404327,1.15,"pill_"+d,g,f,e),C.Lk(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hbn(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dj(0,0.002,D.fH,g,1,"orn_l_"+t,u,d,v),C.Dj(h,0.016,D.ls,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dj(0,0.002,D.fH,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2o(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lk(d,A.bk,j,i,A.R,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.er(A.K,!1,j,A.aG,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cF,A.R,"",0.02,s,null,"","",0,!1,"",0,D.bj,4280172719,2,k,0,0,"",D.cq,D.cW,t,u,g-0.002),C.hwq(u,g+0.018,t)],x.u)},
hwr(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dj(h,0.028,D.bj,h,0,"chv_"+d,g,e,f),C.Dj(w,0.024,D.ls,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dj(w,0.024,D.ls,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lk(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bC4(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lk("Sahihi:",A.bk,h,10,A.R,0.02,"is_"+d,0.12,e,f),C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_"+d,0,24,A.bs,A.a8,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bj,0,2,"",0,0,"",D.cq,D.fg,v,w,f-0.006),C.hwq(w,f+0.016,v)],x.u)},
heD(d){var w,v
for(w=0;w<19;++w){v=D.Sv[w]
if(v.a===d)return v}return null},
ilJ(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahY(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahY(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.ahY(u,D.Sf)
v=w==null?l:w.d
if(v==null){w=C.ahY(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.heD(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hxf.a8(0)
$.hxr.a8(0)
t=C.fPJ(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hfN(d){var w=0,v=B.j(x.T),u
var $async$hfN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h0n(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hfN,v)},
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
blk:function blk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h0n:function h0n(){},
aek:function aek(d){this.a=d},
epC:function epC(d,e){this.a=d
this.b=e},
epB:function epB(d){this.a=d},
epA:function epA(d,e){this.a=d
this.b=e},
ag_:function ag_(d,e,f){this.c=d
this.d=e
this.a=f},
heC(d){return $.hxr.c3(0,d,new C.fPL(d))},
fPJ(d){return $.hxf.c3(0,d,new C.fPK(d))},
fE(d){return B.h4C(d>>>16&255,d>>>8&255,d&255,255)},
iaJ(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hyx(4294570461,4293910718,4284234270,u)
case 1:return C.hyx(4294635750,4293975240,t,4292912216)
case 2:w=C.foO(s,4294505966,r)
C.bBP(w,14,16,p)
C.kH(w,8,9,464,836,u,1.2)
C.Df(w,2,2,1,1,u,10)
C.Df(w,478,2,-1,1,u,10)
C.Df(w,2,852,1,-1,u,10)
C.Df(w,478,852,-1,-1,u,10)
return w
case 3:return C.foO(4294966515,4294373082,4289102906)
case 4:return C.i5h(C.foO(4294376440,4293653998,4290287194))
case 5:w=C.foO(4294965238,4294437098,4288444980)
C.bBP(w,14,16,4283043359)
C.kH(w,6,7,468,840,u,1)
C.kH(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,n,4294175448)
C.tc(v,n)
C.kH(v,24,24,432,806,4286209070,1)
C.a2b(v,12,12,468,12,o,3,20)
C.a2b(v,12,842,468,842,o,3,20)
C.a2b(v,12,12,12,842,o,3,20)
C.a2b(v,468,12,468,842,o,3,20)
return v
case 7:return C.i3b(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,m,4293911504)
C.tc(v,m)
C.kH(v,28,28,424,798,l,1)
C.fyq(v,28,28,l,k)
C.fyq(v,452,28,l,k)
C.fyq(v,28,826,l,k)
C.fyq(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,j,4294111986)
C.tc(v,j)
C.kH(v,18,18,444,818,4292401368,0.7)
B.iU(v,!0,C.fE(p),0,13,0,853)
return v
case 10:return C.i7j(i,4294173372)
case 11:return C.i8t(4294439140,4293449662)
case 12:return C.i31(h,4294239432)
case 13:return C.i7U(4294244340,4293193448)
case 14:return C.icf(4294505710,4293780694)
case 15:return C.fnI(4294966259,4294439138,o,p,q)
case 16:return C.fnI(4294966776,4294178544,o,g,g)
case 17:return C.fnI(4294965493,4294504170,o,4286200650,q)
case 18:return C.fnI(4294966519,4294373862,o,p,p)
case 19:return C.i6p()
case 20:return C.i6q()
case 21:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,h,4293976768)
C.tc(v,h)
C.bBP(v,14,16,p)
B.iU(v,!0,C.fE(u),4,475,4,9)
B.iU(v,!0,C.fE(u),4,475,844,849)
B.iU(v,!0,C.fE(u),4,9,4,849)
B.iU(v,!0,C.fE(u),470,475,4,849)
C.a2b(v,10,12,470,12,u,2,16)
C.a2b(v,10,842,470,842,u,2,16)
C.a2b(v,10,12,10,842,u,2,18)
C.a2b(v,470,12,470,842,u,2,18)
C.Df(v,2,2,1,1,t,10)
C.Df(v,478,2,-1,1,t,10)
C.Df(v,2,852,1,-1,t,10)
C.Df(v,478,852,-1,-1,t,10)
C.kH(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,s,4294438872)
C.tc(v,s)
C.kH(v,14,16,452,822,o,2.2)
C.kH(v,22,24,436,806,o,1)
C.hcL(v,!1,!1,o,p,p,36,14,16)
C.kW(v,240,20,7,o,!0)
C.kW(v,240,834,7,o,!0)
C.kW(v,18,427,7,o,!0)
C.kW(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
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
case 24:v=B.hn(q,q,A.cb,0,A.e4,854,q,0,3,q,A.cb,480,!1)
C.z_(v,e,4294174404)
C.tc(v,e)
C.bBP(v,14,16,p)
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
B.kY(d,!1,A.dh,new B.MA(s),r,A.d1,1,0,w-1,k,k);++k}},
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
v=A.o.E(A.j.M(s.gb8(s))-3,0,255)
r=A.o.E(A.j.M(s.gbe())-3,0,255)
q=A.o.E(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k7(u,t,v,r,q,255)}},
kH(d,e,f,g,h,i,j){var w,v=null,u=C.fE(i),t=e+g
B.kY(d,!0,A.dh,u,v,A.d1,j,e,t,f,f)
w=f+h
B.kY(d,!0,A.dh,u,v,A.d1,j,e,t,w,w)
B.kY(d,!0,A.dh,u,v,A.d1,j,e,e,f,w)
B.kY(d,!0,A.dh,u,v,A.d1,j,t,t,f,w)},
Df(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.j.V(j*0.72),8,j-2)
B.kY(d,!0,A.dh,C.fE(i),u,A.d1,2,e,e+g*j,f,f)
B.kY(d,!0,A.dh,C.fE(i),u,A.d1,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kY(d,!0,A.dh,C.fE(i),u,A.d1,1,w,e+g*t,v,v)
B.kY(d,!0,A.dh,C.fE(i),u,A.d1,1,w,w,v,f+h*t)},
hyx(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
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
foO(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
C.z_(v,d,e)
C.tc(v,d)
C.kH(v,14,16,452,822,f,1.6)
C.kH(v,20,22,440,810,f,0.8)
return v},
bBP(d,e,f,g){var w,v=C.fE(g)
B.iU(d,!0,v,0,479,0,f-1)
w=854-f
B.iU(d,!0,v,0,479,w,853);--w
B.iU(d,!0,v,0,e-1,f,w)
B.iU(d,!0,v,480-e,479,f,w)},
i5h(d){var w,v,u=4291404327
C.bBP(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kW(d,w,8,3,u,!0)
C.kW(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kW(d,7,v,3,u,!0)
C.kW(d,473,v,3,u,!0)}return d},
fBE(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jq(e,f),new B.jq(e+g*n,f),new B.jq(e,f+h*n)],t)
B.a2X(d,C.fE(m),s)
w=A.o.E(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jq(s,u),new B.jq(e+g*v,u),new B.jq(s,f+h*v)],t)
B.a2X(d,C.fE(k),t)
t=A.j.V(n*0.39)
C.kW(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kW(d,e+g*t,f+h*3,4,k,!0)
C.kW(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kW(d,e+g*t,f,5,k,!0)
C.kW(d,e,f+h*t,5,k,!0)}},
hcL(d,e,f,g,h,i,j,k,l){var w,v
C.fBE(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fBE(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fBE(d,k,v,1,-1,e,f,g,h,i,j)
C.fBE(d,w,v,-1,-1,e,f,g,h,i,j)},
a2b(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.ll(d,!0,A.dh,new B.rm(p),null,A.d1,j,r,q)}},
fAz(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.dh,new B.rm(o),null,A.d1,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kY(d,!0,A.dh,new B.rm(o),null,A.d1,1.4,q,q,p,p+h*r)}},
i3b(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e4,854,o,0,3,o,A.cb,480,!1)
C.z_(n,d,e)
C.tc(n,d)
C.kH(n,20,20,440,814,f,1.2)
C.fAz(n,0,0,1,1,g)
C.fAz(n,480,0,-1,1,g)
C.fAz(n,0,854,1,-1,g)
C.fAz(n,480,854,-1,-1,g)
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
B.kY(n,!0,A.dh,new B.rm(p),o,A.d1,1.2,240,r,60,q)}return n},
fyq(d,e,f,g,h){var w
C.fFh(d,!0,C.fE(g),13,e,f)
C.fFh(d,!0,C.fE(g),9,e,f)
w=B.a([new B.jq(e,f-4),new B.jq(e+4,f),new B.jq(e,f+4),new B.jq(e-4,f)],x.J)
B.a2X(d,C.fE(h),w)},
kW(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jq(e,v),new B.jq(u,f),new B.jq(e,t),new B.jq(s,f)],x.J)
if(i){B.a2X(d,C.fE(h),r)
return}B.kY(d,!0,A.dh,C.fE(h),w,A.d1,1,e,u,v,f)
B.kY(d,!0,A.dh,C.fE(h),w,A.d1,1,u,e,f,t)
B.kY(d,!0,A.dh,C.fE(h),w,A.d1,1,e,s,t,f)
B.kY(d,!0,A.dh,C.fE(h),w,A.d1,1,s,e,f,v)},
fnH(d,e,f,g,h,i,j){var w,v=B.a([new B.jq(e,f),new B.jq(e+g*28,f),new B.jq(e,f+h*28)],x.J)
B.a2X(d,C.fE(i),v)
v=e+g*14
w=f+h*14
C.kW(d,v,w,6,j,!0)
C.kW(d,v,w,3,i,!0)},
fnI(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e4,854,w,0,3,w,A.cb,480,!1)
C.z_(v,d,e)
C.tc(v,d)
C.kH(v,18,18,444,818,f,2)
C.kH(v,26,26,428,802,f,0.9)
if(h!=null)B.iU(v,!0,C.fE(h),28,451,28,34)
C.fnH(v,18,18,1,1,g,f)
C.fnH(v,462,18,-1,1,g,f)
C.fnH(v,18,836,1,-1,g,f)
C.fnH(v,462,836,-1,-1,g,f)
return v},
i6p(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e4,854,v,0,3,v,A.cb,480,!1)
C.z_(r,u,4294240980)
C.tc(r,u)
C.kH(r,10,12,460,830,t,3.2)
C.kH(r,18,20,444,814,s,1.2)
C.kH(r,24,26,432,802,t,1.8)
C.hcL(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kW(r,w,16,3,t,!0)
C.kW(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kW(r,16,w,3,t,!0)
C.kW(r,464,w,3,t,!0)}return r},
i6q(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e4,854,t,0,3,t,A.cb,480,!1)
C.z_(p,s,4294373080)
C.tc(p,s)
C.kH(p,16,18,448,818,r,2.4)
C.kH(p,24,26,432,802,4286209044,1)
w=new C.fq7(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hcL(p,!1,!0,r,q,q,34,16,18)
return p},
bCw(d,e,f,g,h,i){B.iU(d,!0,C.fE(i),e,e+g,f,f+h)},
bDn(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kY(d,!1,A.dh,new B.MA(i),null,A.d1,1,e,w,l,l)}},
i7i(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.ar(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.dh,new B.rm(r),null,A.d1,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.ar(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kY(d,!1,A.dh,new B.rm(r),null,A.d1,1,t,t,f,s);++q}},
i7j(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e4,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i7i(t,v,w,30,D.d47,(A.o.ar(v,30)+A.o.ar(w,30)&1)===0)
C.bCw(t,44,44,392,766,d)
C.bDn(t,44,44,392,766,d,e)
C.tc(t,d)
C.kH(t,44,44,392,766,4292128567,2.2)
C.kH(t,50,50,380,754,4279898632,0.8)
return t},
i8s(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kW(d,e,f,7,h,!0)
C.kW(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kY(d,!0,A.dh,C.fE(h),o,A.d1,1.6,w,u,v,t)
B.kY(d,!0,A.dh,C.fE(h),o,A.d1,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kY(d,!0,A.dh,new B.rm(p),o,A.d1,1.2,w,v,q,q)}break
default:B.kY(d,!0,A.dh,C.fE(h),o,A.d1,1.5,e-8,e+8,f,f)
B.kY(d,!0,A.dh,C.fE(h),o,A.d1,1.5,e,e,f-8,f+8)
B.ll(d,!0,A.dh,C.fE(h),o,A.d1,2,e,f)}},
i8t(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e4,854,s,0,3,s,A.cb,480,!1)
B.iU(r,!0,C.fE(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i8s(r,u,v,w,4292391514)}C.bCw(r,46,46,388,762,d)
C.bDn(r,46,46,388,762,d,e)
C.tc(r,d)
C.kH(r,46,46,388,762,4291404327,1.8)
return r},
htO(d,e,f,g){C.fFh(d,!0,C.fE(g),16,e,f)
C.fFh(d,!0,C.fE(g),11,e,f)
C.kW(d,e,f,6,g,!0)
B.kY(d,!0,A.dh,C.fE(g),null,A.d1,1.3,e-14,e+14,f,f)
B.kY(d,!0,A.dh,C.fE(g),null,A.d1,1.3,e,e,f-14,f+14)},
i31(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e4,854,v,0,3,v,A.cb,480,!1)
B.iU(s,!0,C.fE(4280948752),0,479,0,853)
B.iU(s,!0,C.fE(u),0,479,0,78)
B.iU(s,!0,C.fE(u),0,479,776,853)
for(w=28;w<460;w+=44){C.htO(s,w,39,t)
C.htO(s,w,815,t)}C.bCw(s,38,92,404,670,d)
C.bDn(s,38,92,404,670,d,e)
C.tc(s,d)
C.kH(s,38,92,404,670,t,1.8)
C.kH(s,45,99,390,656,4287322667,0.8)
return s},
i7T(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jq(e,f),new B.jq(q-5,w),new B.jq(q,f-(18-Math.abs(r)*3)),new B.jq(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2X(d,new B.rm(o),p)}B.ll(d,!0,A.dh,C.fE(4292128567),null,A.d1,3,e,f)},
i7U(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e4,854,s,0,3,s,A.cb,480,!1)
C.z_(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kY(q,!0,A.dh,new B.rm(v),s,A.d1,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kY(q,!0,A.dh,new B.rm(u),s,A.d1,1.1,v,v,0,853)}B.iU(q,!0,C.fE(r),0,479,0,70)
B.iU(q,!0,C.fE(r),0,479,798,853)
for(t=0;t<5;++t)C.i7T(q,70+t*85,48,4292128567)
C.bCw(q,48,78,384,712,d)
C.bDn(q,48,78,384,712,d,e)
C.tc(q,d)
C.kH(q,48,78,384,712,4291404327,1.6)
return q},
icf(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e4,854,t,0,3,t,A.cb,480,!1)
B.iU(r,!0,C.fE(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kW(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.ll(r,!0,A.dh,new B.rm(u),t,A.d1,1,v,w)}C.bCw(r,40,40,400,774,d)
C.bDn(r,40,40,400,774,d,e)
C.tc(r,d)
C.kH(r,40,40,400,774,4291058750,2)
C.kH(r,48,48,384,758,s,0.8)
return r},
l8:function l8(d,e){this.a=d
this.b=e},
fPL:function fPL(d){this.a=d},
fPK:function fPK(d){this.a=d},
fq7:function fq7(d){this.a=d},
fQo(d){var w
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
i8m(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hbg(d){var w,v,u,t=null,s=A.a.cq(d,"{"),r=A.a.p5(d,"}")
if(s<0||r<=s)return t
try{w=A.Y.aQ(0,Ak.ahU(A.a.aB(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
agm(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$agm)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nh(n)
if(e==null)s=A.hX
else{r=C.i8m(e)
s=B.a([new B.a18(A.cP.gcu().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rb(t,d,s,"news",E.Gw),$async$agm)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LL(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agm,v)},
bF0(d){return C.ilp(d)},
ilp(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bF0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Y.az(d.ak(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agm(r,null),$async$bF0)
case 7:q=f
p=C.hbg(q)
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
return B.i($async$bF0,v)},
hxL(d){var w,v=F.hdU(d)
v=B.aL(v,"book","newspaper")
if(F.a3g(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fUn(d,e,f,g){return C.ini(d,e,f,g)},
ini(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fUn=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fQo(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hBB()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agm('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hxL(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fUn)
case 3:r=m.hbg(i)
if(r==null)throw B.W(y.S)
q=new C.A5(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aEy(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aO(t," ")
if(F.a3g(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3g(A.d.aO(t," "))==="sw"?C.bF0(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUn,v)},
bEv(d,e,f,g,h){return C.ij_(d,e,f,g,h)},
ij_(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEv=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aO(l,"\n")
l=C.hBB()
k=A.Y.az(d.ak(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agm('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hxL(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEv)
case 3:p=j.hbg(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aEy(B.a2(o,x.N,x.z))
m=A.Y.az(n.ak(),null)!==A.Y.az(d.ak(),null)}else{n=d
m=!1}w=m&&F.a3g(A.d.aO(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bF0(n),$async$bEv)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8Q(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEv,v)},
a8Q:function a8Q(d,e,f){this.a=d
this.b=e
this.c=f},
iq7(d,e){return B.a6(d,!1).cd(B.eb(new C.h0y(e),!0,null,x.H))},
h0y:function h0y(d){this.a=d},
WQ:function WQ(d,e){this.c=d
this.a=e},
aFH:function aFH(d,e,f,g,h,i,j,k){var _=this
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
esz:function esz(d){this.a=d},
esy:function esy(){},
esA:function esA(d){this.a=d},
esx:function esx(d,e){this.a=d
this.b=e},
esB:function esB(){},
esb:function esb(d,e){this.a=d
this.b=e},
es7:function es7(d,e){this.a=d
this.b=e},
esi:function esi(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
ese:function ese(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
esg:function esg(d){this.a=d},
esh:function esh(d){this.a=d},
esc:function esc(d,e){this.a=d
this.b=e},
es9:function es9(d){this.a=d},
esa:function esa(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
esp:function esp(d){this.a=d},
ess:function ess(d,e){this.a=d
this.b=e},
eso:function eso(d,e){this.a=d
this.b=e},
est:function est(d){this.a=d},
esn:function esn(d){this.a=d},
esu:function esu(d){this.a=d},
esm:function esm(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esl:function esl(d,e){this.a=d
this.b=e},
esw:function esw(d){this.a=d},
es8:function es8(d,e){this.a=d
this.b=e},
fPk(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fPk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvn){w=1
break}r=new C.fPl()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fPk)
case 7:$.hvn=!0
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
return B.i($async$fPk,v)},
bES(d){return A.Dj[B.mn(d)-1]+", "+A.oH[B.bK(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
ibm(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dw0[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hei(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fND(),B.U(v).k("Y<1>")))
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
continue}o=new C.fNF(j,h)
n=new C.fNE(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ar(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j6(o.$1(l)))
j.a+=l}return u},
hb_(d,e){var w=new C.fpH()
return A.d.cI(e,0,new C.fpF(w))>=A.d.cI(d,0,new C.fpG(w))},
hst(d){var w,v,u=new B.aF($.S().r,A.ai,null,null,B.a([],x.v))
u.D(new B.aZ(46,0))
w=d.a
u.D(new B.aq(w,0))
v=d.b
u.D(new B.aq(w,v-46))
u.D(new B.aq(w-46,v))
u.D(new B.aq(0,v))
u.D(new B.aq(0,46))
u.D(new B.bv())
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
ciL:function ciL(d){this.a=d},
ciJ:function ciJ(){},
ciK:function ciK(){},
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
fPl:function fPl(){},
fND:function fND(){},
fNF:function fNF(d,e){this.a=d
this.b=e},
fNE:function fNE(d,e,f){this.a=d
this.b=e
this.c=f},
fpH:function fpH(){},
fpI:function fpI(){},
fpF:function fpF(d){this.a=d},
fpG:function fpG(d){this.a=d},
b2J:function b2J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ciM:function ciM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciN:function ciN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciO:function ciO(d){this.a=d},
bem:function bem(d){this.a=d},
bel:function bel(d,e){this.b=d
this.a=e},
bwk:function bwk(d){this.a=d},
baP:function baP(d,e){this.b=d
this.a=e},
btO:function btO(d,e){this.b=d
this.a=e},
hDF(d,e){return B.a6(d,!1).cd(B.eb(new C.h0B(e,null),!0,null,x.E))},
h0B:function h0B(d,e){this.a=d
this.b=e},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
aFK:function aFK(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
etl:function etl(){},
etm:function etm(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
etf:function etf(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
ete:function ete(d,e,f){this.a=d
this.b=e
this.c=f},
eta:function eta(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eth:function eth(d,e){this.a=d
this.b=e},
etc:function etc(d,e){this.a=d
this.b=e},
eti:function eti(d){this.a=d},
etb:function etb(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
bdU:function bdU(d,e,f){this.b=d
this.c=e
this.a=f},
iqd(d){return B.a6(d,!1).cd(B.eb(new C.h0R(),!0,null,x.I))},
bCh(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hcs(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h0R:function h0R(){},
a1_:function a1_(d){this.a=d},
oQ:function oQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aH8:function aH8(d,e,f,g,h,i,j,k,l){var _=this
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
f2d:function f2d(d){this.a=d},
f15:function f15(d,e){this.a=d
this.b=e},
f1t:function f1t(d,e){this.a=d
this.b=e},
f1D:function f1D(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0O:function f0O(d){this.a=d},
f1m:function f1m(d,e){this.a=d
this.b=e},
f1n:function f1n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1z:function f1z(d,e,f){this.a=d
this.b=e
this.c=f},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1A:function f1A(d,e){this.a=d
this.b=e},
f1x:function f1x(d,e){this.a=d
this.b=e},
f1C:function f1C(d,e,f){this.a=d
this.b=e
this.c=f},
f1B:function f1B(d,e){this.a=d
this.b=e},
f0F:function f0F(d){this.a=d},
f0G:function f0G(d){this.a=d},
f0H:function f0H(d){this.a=d},
f0E:function f0E(){},
f0I:function f0I(d,e){this.a=d
this.b=e},
f0D:function f0D(d,e){this.a=d
this.b=e},
f0K:function f0K(){},
f0J:function f0J(d,e){this.a=d
this.b=e},
f0C:function f0C(d,e){this.a=d
this.b=e},
f0z:function f0z(d,e){this.a=d
this.b=e},
f0L:function f0L(d){this.a=d},
f0B:function f0B(d,e){this.a=d
this.b=e},
f0M:function f0M(d){this.a=d},
f0A:function f0A(d,e){this.a=d
this.b=e},
f22:function f22(d,e){this.a=d
this.b=e},
f29:function f29(d){this.a=d},
f2a:function f2a(d,e){this.a=d
this.b=e},
f2b:function f2b(){},
f23:function f23(d,e){this.a=d
this.b=e},
f21:function f21(d,e){this.a=d
this.b=e},
f24:function f24(d,e){this.a=d
this.b=e},
f20:function f20(d,e){this.a=d
this.b=e},
f25:function f25(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f2_:function f2_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f26:function f26(d){this.a=d},
f27:function f27(d,e){this.a=d
this.b=e},
f28:function f28(d){this.a=d},
f1Z:function f1Z(d){this.a=d},
f1M:function f1M(d){this.a=d},
f1N:function f1N(d){this.a=d},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1O:function f1O(d){this.a=d},
f1R:function f1R(d){this.a=d},
f1K:function f1K(d){this.a=d},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1U:function f1U(d){this.a=d},
f1V:function f1V(d){this.a=d},
f1J:function f1J(d){this.a=d},
f1W:function f1W(d){this.a=d},
f1I:function f1I(d){this.a=d},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1H:function f1H(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1q:function f1q(d){this.a=d},
f1p:function f1p(d){this.a=d},
f1r:function f1r(d,e){this.a=d
this.b=e},
f1o:function f1o(d,e){this.a=d
this.b=e},
f1s:function f1s(d){this.a=d},
f1i:function f1i(d){this.a=d},
f1h:function f1h(d){this.a=d},
f1j:function f1j(d){this.a=d},
f1g:function f1g(d){this.a=d},
f1k:function f1k(d,e){this.a=d
this.b=e},
f1f:function f1f(d,e){this.a=d
this.b=e},
f1e:function f1e(d,e){this.a=d
this.b=e},
f0X:function f0X(d){this.a=d},
f0Y:function f0Y(d){this.a=d},
f0Z:function f0Z(d){this.a=d},
f1_:function f1_(d){this.a=d},
f10:function f10(d){this.a=d},
f11:function f11(d){this.a=d},
f12:function f12(d){this.a=d},
f13:function f13(d){this.a=d},
f14:function f14(d){this.a=d},
f0i:function f0i(d){this.a=d},
f0j:function f0j(d){this.a=d},
f0k:function f0k(d){this.a=d},
f0l:function f0l(d){this.a=d},
f0m:function f0m(d){this.a=d},
f0h:function f0h(d){this.a=d},
f0n:function f0n(d){this.a=d},
f0o:function f0o(d){this.a=d},
f0R:function f0R(d){this.a=d},
f0S:function f0S(d){this.a=d},
f0T:function f0T(d){this.a=d},
f0U:function f0U(d){this.a=d},
f0V:function f0V(d){this.a=d},
f0s:function f0s(d){this.a=d},
f0t:function f0t(d){this.a=d},
f0u:function f0u(d){this.a=d},
f0v:function f0v(d){this.a=d},
f0w:function f0w(d){this.a=d},
f0r:function f0r(d){this.a=d},
f0x:function f0x(d){this.a=d},
f0q:function f0q(d){this.a=d},
f0y:function f0y(d){this.a=d},
f0p:function f0p(d){this.a=d},
f1l:function f1l(d){this.a=d},
f1d:function f1d(d){this.a=d},
f19:function f19(d){this.a=d},
f18:function f18(d){this.a=d},
f1a:function f1a(d,e){this.a=d
this.b=e},
f17:function f17(d,e){this.a=d
this.b=e},
f1b:function f1b(d,e){this.a=d
this.b=e},
f16:function f16(d,e){this.a=d
this.b=e},
f1c:function f1c(d){this.a=d},
f1w:function f1w(d){this.a=d},
f1v:function f1v(d,e,f){this.a=d
this.b=e
this.c=f},
f1u:function f1u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1E:function f1E(d,e){this.a=d
this.b=e},
f0W:function f0W(d){this.a=d},
f2c:function f2c(d){this.a=d},
bhv:function bhv(d,e){this.b=d
this.a=e},
ilA(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ilB(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a4(n).k("M.E"))
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
bCS(){var w=$.bBZ,v=$.Rk
$.Rk=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,C.bCS(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cq,D.fg,g,e,f)},
oh(d,e,f,g){var w=f*9
return C.ii(D.eW,d-f/2,e-w/32,f,w/16,g,0)},
i4O(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bBZ
o=$.Rk
$.Rk=o+1
w.push(new C.eN(p+"_"+o,D.fg,0,q,1,0.0016,"",24,A.a8,A.bs,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bBZ
o=$.Rk
$.Rk=o+1
w.push(new C.eN(p+"_"+o,D.fg,n,0,0.004,1,"",24,A.a8,A.bs,A.aG,k,A.bk,null,D.bj,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}w.push(C.oh(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.oh(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bj,0.08,0.08,0.5,0.003,v,0),C.ii(D.bj,0.58,0.08,0.004,0.06,v,0),C.ii(D.bj,0.58,0.14,0.34,0.003,v,0),C.ii(D.bj,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bj,0.08,0.8,0.004,0.14,t,0),C.ii(D.bj,0.08,0.94,0.6,0.003,t,0),C.oh(0.58,0.08,0.05,e),C.oh(0.92,0.22,0.05,e),C.oh(0.08,0.8,0.05,f),C.oh(0.68,0.94,0.05,f),C.oh(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.ls,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.ls,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.ls,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.ls,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
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
for(m=0;m<16;++m){v=D.d5G[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bBZ
l=$.Rk
$.Rk=l+1
w.push(new C.eN(o+"_"+l,D.fg,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bs,A.aG,k,A.bk,null,D.eW,s,s,0,0,!1,"",0,D.cq,0,"","","","","",!1,0))}w.push(C.oh(0.85,0.12,0.35,f&16777215|570425344))
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
return B.a([C.ii(D.eW,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eW,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eW,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eW,-0.05,0.9,0.4,0.12,v,-0.9),C.oh(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bj,0.09,0.12,0.16,0.006,e,0),C.ii(D.bj,0.05,0.03,0.9,0.001,w,0),C.ii(D.bj,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ii2(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBZ=j
$.Rk=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fL1()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_background",m,24,A.bs,A.a8,"",1,C.bCS(),g,"","",0,!1,"",0,D.bj,l,2,"",0,0,"",D.cq,D.lR,1,0,0))
if(a9)A.d.v(q,C.i4O(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ilA(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fL0(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bk,!1,n,A.aG,"ngmy_quote_logo",m,24,A.bs,A.a8,a1,a3*9/16,C.bCS(),a0,"","",0,!1,a2,0,D.bj,l,2,"",0,0,"",D.cq,D.lR,a3,a4,a5))
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
fL1:function fL1(){},
fL0:function fL0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hVB(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ckg(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.A6(u,t,s,B.w(w==null?"":w))},
fSK(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fSK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hvK){w=1
break}$.hvK=!0
t=4
w=7
return B.b(B.az(),$async$fSK)
case 7:r=e
q=B.aT(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Y.aQ(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i7(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gR(h)
l=C.hVB(m)
if(l!=null)J.c5(n,l)}$.Dg.c3(0,B.w(o.a),new C.fSL(n))}C.hc6()
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
return B.i($async$fSK,v)},
hc6(){var w,v=new B.V(Date.now(),0,!1).bR(-12e8)
for(w=new B.dq($.Dg,$.Dg.r,$.Dg.e);w.C();)J.nM(w.d,new C.fxH(v))
$.Dg.bt($.Dg,new C.fxI())},
aPN(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPN=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPN)
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
J.c5(p,B.H(["at",g.a.ab().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aA("String","ngmy_slides_ai_history_v1",A.Y.az(n,null)),$async$aPN)
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
return B.i($async$aPN,v)},
imd(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hc6()
w=$.Dg.c3(0,d,new C.fSN())
v=Date.now()
u=B.C(e,B.a4(e).k("cg.E"))
J.pT(w,0,new C.A6(new B.V(v,0,!1),f,u,g))
C.aPN()},
ima(d){var w,v=$.Dg.h(0,d)
if(v==null||J.cr(v))return
w=J.cC(v)
w.cA(v,0)
if(w.gau(v))$.Dg.W(0,d)
C.aPN()},
A6:function A6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ckg:function ckg(){},
fSL:function fSL(d){this.a=d},
fxH:function fxH(d){this.a=d},
fxI:function fxI(){},
fSN:function fSN(){},
imf(d){return A.d.dP(D.wT,new C.fSQ(d),new C.fSR())},
hVz(d){var w
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
hVy(d){var w
switch(d.a){case 0:w=D.apf
break
case 1:w=A.zd
break
case 2:w=A.PA
break
case 3:w=I.aoV
break
case 4:w=A.apL
break
case 5:w=A.mi
break
default:w=null}return w},
i7Z(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.RF[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.RF[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hVA(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Y.az(B.H(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
imb(d,e,f,g,h){var w=new B.N(D.wT,new C.fSJ(),x.eC).aO(0,", "),v=""+d,u=C.hBt(h),t=F.fMq(h),s=C.hxp(g),r=e.q(0,D.Jc)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Jd)?'- New slides get an "icon3d" from: '+A.d.aO(D.RF,", ")+".\n":"",p=e.q(0,D.DU)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
imc(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wT,new C.fSM(),x.eC).aO(0,", "),p=new B.fd("")
if(e.q(0,D.Jc)){p.a=s
w=s}else w=""
if(e.q(0,D.Jd))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aO(D.RF,", ")+".\n")
if(e.q(0,D.DU))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hBt(d)
v=F.fMq(d)
u=C.hxp(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ai9(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DF(a3,"{"),a5=J.h49(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.M5(a3,a4,a5+1)
try{w=A.Y.aQ(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.cr(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fQH(),m).bZ(0,new C.fQI())
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
f=C.i7Z(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a8Y(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.aW(D.wT,new C.fQJ(r))?r:a7
o=C.fwX(J.t(w,"logo_frame"),D.Df)
n=C.fwX(J.t(w,"logo_ring"),D.D8)
m=C.fwX(J.t(w,"photo_frame"),D.Df)
l=C.fwX(J.t(w,"photo_ring"),D.D8)
return new C.asE(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2N(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hAA(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DV),f7=f6?C.i1m():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.d_(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.o4("luxe",u.a,A.mi,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dk)
w=s}if(w==null)w=C.imf(f9.b)
r=g2.q(0,D.a7N)||f6
q=g2.q(0,D.Jc)
p=g2.q(0,D.TE)
o=new C.fL5()
n=B.a([],x.g)
m=new C.fL8(o,w,r)
l=new C.fL7(o,r)
k=new C.fL6(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aW(u,new C.fL4(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d7l[b8]
c0=D.d6c[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f9a.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eW,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eW,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eW,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.n5,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qX,500,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.TB
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eW,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.ls,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bj,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DS
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eW,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eW,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.n5,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cF,A.R))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qX,500,f2,f0))
d3=D.n4
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eW,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bj,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vc:D.cq
c1.push(new C.eN(b4,D.a7L,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bs,A.aG,4279310375,A.bk,e4,D.bj,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n4
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eW,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eW,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.n5,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qX,450,f2,f0))
c1.push(l.$8$fx$key(D.bj,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.TB
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eW,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eW,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bj,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bj,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aO(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ja,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n4}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dk,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i30(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dys[A.o.F(b1,6)]:s
n.push(new C.lY(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ch(e4,e4,e4,e4,D.DR,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aB(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fNt(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fNt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DU)
n=e.q(0,D.Jd)
if(!o&&!n){u=D.a6I
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fNw(o,s[r],n,$.i6G,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fNt)
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
return B.i($async$fNt,v)},
fMt(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fMt=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.imc(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aP6(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fMt)
case 3:u=s.aPs(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMt,v)},
bEw(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEw=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dY(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.imd(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ai9(i,"colorful")
t=C.imb(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aP6(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hX),$async$bEw)
case 3:u=o.aPs(m,f,h,g,D.ec_,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEw,v)},
aP6(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aP6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$aP6)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nh(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rb(t,d,g,"slides",null),$async$aP6)
case 7:q=i
p=q.b
if(p!=null){o=C.ai9(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LL(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aP6,v)},
aPs(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPs=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DU)||e.q(0,D.Jd)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.DU)}w=6
return B.b(C.fNt(d,t),$async$aPs)
case 6:s=k
w=4
break
case 5:s=D.a6I
case 4:t=d.c
w=A.d.aW(t,new C.fpB())?7:9
break
case 7:r=$.hCl
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aPs)
case 10:q=k
p=q!=null?A.Y.az(q.ak(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hAA(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hVA(new C.asE(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,m>")
t=B.C(new B.N(m,new C.fpC(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("k5<cg.E,m>")
t=B.C(new B.k5(e,new C.fpD(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.TE)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPs,v)},
hf1(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a5s[v]
if(A.d.q(t,u.b))w.J(0,u)}return w},
iqi(d){return B.bT(A.L,null,new C.h12(),d,!0,!0,!0,null,!1,!1,x.I)},
i2_(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cP.gcu().aM(d)},
iqh(d,e,f){return B.bT(A.L,null,new C.h11(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hf2(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hf3(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fwX(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aW(e,new C.fwY(w))?w:""},
hxp(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hCj(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ai9(a1==null?"":a1,a0),a3=C.ai9(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.nv(new B.Y(r,new C.fSS(t[p]),q))
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
g=B.C(new B.Y(k,new C.fST(),v),r)
A.d.aZ(g,new C.fSU())
if(g.length===0)continue
f=new C.fSV(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
imw(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKI
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edT
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.edU
return null},
hx1(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cK(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
img(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oM
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cW)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.E(m*0.85,10,120)
break
case 1:j=A.j.E(m*1.15,10,120)
if(C.hx1(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hx1(n,i,v,u))if(n.w>10){f=h+1
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
ime(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ai9(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5s[r]
if(q.b===s)w.J(0,q)}}v=C.hf2(e)
u=C.hf3(e)
p=C.hAA(n,D.a6I,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,m>")
o=B.C(new B.N(o,new C.fSO(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k5<cg.E,m>")
o=B.C(new B.k5(w,new C.fSP(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.TE)
return p},
iq4(d,e,f){return B.bT(A.L,null,new C.h0f(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i1m(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.d_(t)
w=D.cLp[s.aw(10)]
v=new C.ep_(s)
u=x.N
return new C.eoZ(w,s.aw(4),J.fq(v.$1$2(D.dca,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dtH,2+s.aw(2),u),v.$1$2(D.dma,2,u),v.$1$2(D.dwT,4,x.fP),t)},
i30(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.d_(a5.w+a3*13)
w=new C.flU(a4)
v=new C.flW(a4,d)
u=new C.flV(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cW){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c4(a2,0,w.$8(D.eW,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a2N(a0,52),"lux_spot",a5.xb(0,"spotlight")))
else A.d.c4(a2,0,w.$8(D.bj,0,0,1,1,0,"lux_back",a5.xb(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c4(a2,1,w.$8(D.bj,0,0,1,1,0,"lux_back2",a5.aH7(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.022,0.038,0.956,0.924,0,g,a5.xb(0,f),D.dk,150,C.a2N(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.018,0.032,0.964,0.936,0,g,a5.xb(0,f),D.dk,120,C.a2N(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bj,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dk,260,C.a2N(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bj,0,0,1,1,0,"lux_filigree",a5.xb(0,"filigree"),D.dk,200))
break
default:a2.push(w.$10$anim$delay(D.bj,0.08,0.06,0.84,0.004,C.a2N(a0,208),"lux_rule",a5.aH7(0,"shimmer",r),D.vb,150))
a2.push(w.$10$anim$delay(D.bj,0.08,0.936,0.84,0.004,C.a2N(a0,144),"lux_rule2","",D.Ja,220))}l=!A.d.aW(a2,new C.flT())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xb(0,"crest"),350))
else{o=a1.h2()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xb(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2N(r,242)
j=a5.xb(0,"orbit")
i=s===D.bj?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qX,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eW,t-0.007,0.9495,0.014,0.025,C.a2N(r,242),"lux_g2",a5.xb(0,"orbit"),D.qX,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
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
fSQ:function fSQ(d){this.a=d},
fSR:function fSR(){},
wq:function wq(d,e){this.a=d
this.b=e},
a8Y:function a8Y(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asE:function asE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fSJ:function fSJ(){},
fSM:function fSM(){},
fQH:function fQH(){},
fQI:function fQI(){},
fQJ:function fQJ(d){this.a=d},
fL5:function fL5(){},
fL8:function fL8(d,e,f){this.a=d
this.b=e
this.c=f},
fL7:function fL7(d,e){this.a=d
this.b=e},
fL6:function fL6(d,e){this.a=d
this.b=e},
fL4:function fL4(d){this.a=d},
fNw:function fNw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fNu:function fNu(d){this.a=d},
fNv:function fNv(d){this.a=d},
fpB:function fpB(){},
fpC:function fpC(){},
fpD:function fpD(){},
h12:function h12(){},
a1w:function a1w(d){this.a=d},
aJ3:function aJ3(d,e,f,g,h){var _=this
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
f8A:function f8A(d,e,f){this.a=d
this.b=e
this.c=f},
f8B:function f8B(d,e){this.a=d
this.b=e},
f8y:function f8y(d,e){this.a=d
this.b=e},
f8z:function f8z(d,e){this.a=d
this.b=e},
f8x:function f8x(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f8s:function f8s(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8w:function f8w(d,e){this.a=d
this.b=e},
f8r:function f8r(d,e){this.a=d
this.b=e},
f8v:function f8v(d,e){this.a=d
this.b=e},
f8q:function f8q(d,e){this.a=d
this.b=e},
f8t:function f8t(d){this.a=d},
f8u:function f8u(d,e){this.a=d
this.b=e},
f8g:function f8g(d,e){this.a=d
this.b=e},
f8h:function f8h(d,e){this.a=d
this.b=e},
f8j:function f8j(d){this.a=d},
f8k:function f8k(d){this.a=d},
f8l:function f8l(d){this.a=d},
f8m:function f8m(d){this.a=d},
f8i:function f8i(d,e){this.a=d
this.b=e},
f8n:function f8n(d,e){this.a=d
this.b=e},
f8O:function f8O(d){this.a=d},
f8P:function f8P(d){this.a=d},
f8N:function f8N(d){this.a=d},
f8Q:function f8Q(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8S:function f8S(d){this.a=d},
f8L:function f8L(d,e){this.a=d
this.b=e},
f8T:function f8T(d){this.a=d},
f8K:function f8K(d,e){this.a=d
this.b=e},
f8U:function f8U(d){this.a=d},
f8J:function f8J(d){this.a=d},
f8V:function f8V(d){this.a=d},
f8I:function f8I(d,e){this.a=d
this.b=e},
f8W:function f8W(d){this.a=d},
f8H:function f8H(d,e){this.a=d
this.b=e},
f8X:function f8X(d){this.a=d},
f8G:function f8G(d){this.a=d},
f8Y:function f8Y(d,e){this.a=d
this.b=e},
f8F:function f8F(d,e){this.a=d
this.b=e},
f8Z:function f8Z(d){this.a=d},
f8R:function f8R(d){this.a=d},
f8E:function f8E(d,e){this.a=d
this.b=e},
f8o:function f8o(d,e,f){this.a=d
this.b=e
this.c=f},
f8p:function f8p(d,e,f){this.a=d
this.b=e
this.c=f},
f8D:function f8D(d,e){this.a=d
this.b=e},
f8C:function f8C(d,e){this.a=d
this.b=e},
h11:function h11(d,e){this.a=d
this.b=e},
a1v:function a1v(d,e,f){this.c=d
this.d=e
this.a=f},
aJ2:function aJ2(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f89:function f89(d){this.a=d},
f8a:function f8a(d){this.a=d},
f8b:function f8b(d,e){this.a=d
this.b=e},
f8c:function f8c(d){this.a=d},
f8d:function f8d(d){this.a=d},
f88:function f88(d,e){this.a=d
this.b=e},
f8e:function f8e(d,e){this.a=d
this.b=e},
f8f:function f8f(d,e){this.a=d
this.b=e},
fwY:function fwY(d){this.a=d},
b37:function b37(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFB:function aFB(d,e,f){this.c=d
this.d=e
this.a=f},
bmg:function bmg(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
ep1:function ep1(d){this.a=d},
ep0:function ep0(){},
bjN:function bjN(d,e){this.b=d
this.a=e},
fSS:function fSS(d){this.a=d},
fST:function fST(){},
fSU:function fSU(){},
fSV:function fSV(d){this.a=d},
atb:function atb(d,e){this.a=d
this.b=e},
fSO:function fSO(){},
fSP:function fSP(){},
h0f:function h0f(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f){this.c=d
this.d=e
this.a=f},
aD6:function aD6(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dsf:function dsf(d){this.a=d},
dsg:function dsg(d){this.a=d},
dsh:function dsh(d,e){this.a=d
this.b=e},
dsk:function dsk(d){this.a=d},
dsl:function dsl(d,e){this.a=d
this.b=e},
dsj:function dsj(d,e){this.a=d
this.b=e},
dsm:function dsm(d){this.a=d},
dsi:function dsi(d,e){this.a=d
this.b=e},
buW:function buW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eoZ:function eoZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ep_:function ep_(d){this.a=d},
flU:function flU(d){this.a=d},
flW:function flW(d,e){this.a=d
this.b=e},
flV:function flV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flT:function flT(){},
aNG:function aNG(){},
hdR(d){var w,v,u
try{w=A.Y.aQ(0,d,null)
if(x.f.b(w)){v=B.wj(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b33:function b33(d,e,f){this.c=d
this.d=e
this.a=f},
bnR:function bnR(d,e){this.c=d
this.a=e},
iiw(d){return A.d.dP(D.Ij,new C.fMc(d),new C.fMd())},
iix(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.Ij,new C.fMe(w),x.b4)
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
fMc:function fMc(d){this.a=d},
fMd:function fMd(){},
fMe:function fMe(d){this.a=d},
n7(d,e,f,g,h){return new C.Fm(f,g,d)},
i4i(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fo0(),v),v.k("M.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.L9
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c4(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bs,A.a8,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cq,D.fg,j,k,l)},
hAn(d,e){var w
C.i4i(d)
w=A.d.dP($.bGu(),new C.fK2(e),new C.fK3())
$.L9=w.a
d.x=w.a;++d.y
try{w.aj(d)}finally{$.L9=""}d.z=B.bp(d.z,!0,x.F)},
Fm:function Fm(d,e,f){this.a=d
this.b=e
this.e=f},
fo0:function fo0(){},
fSk:function fSk(){},
fSl:function fSl(){},
fSm:function fSm(){},
fSx:function fSx(){},
fSC:function fSC(){},
fSD:function fSD(){},
fSE:function fSE(){},
fSF:function fSF(){},
fSG:function fSG(){},
fSH:function fSH(){},
fSI:function fSI(){},
fSn:function fSn(){},
fSo:function fSo(){},
fSp:function fSp(){},
fSq:function fSq(){},
fSr:function fSr(){},
fSs:function fSs(){},
fSt:function fSt(){},
fSu:function fSu(){},
fSv:function fSv(){},
fSw:function fSw(){},
fSy:function fSy(){},
fSz:function fSz(){},
fSA:function fSA(){},
fSB:function fSB(){},
fK2:function fK2(d){this.a=d},
fK3:function fK3(){},
j4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bj,4280172719,2,m,n,0,"",o,D.cW,p,q,r)},
Dx(d,e,f,g,h,i,j,k,l){return C.er(A.bk,!1,4279310375,A.aG,"",d,24,A.bs,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cq,D.fg,j,k,l)},
bFf(){var w=new B.V(Date.now(),0,!1)
return A.iO[B.bK(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bCC(d){return new B.iZ((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
i9G(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.ao7(A.cG.aM(A.d.gal(d.split(","))))
return w}catch(v){return null}},
i9K(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fwg(),x.dv).aO(0,"\n")},
i9J(d){switch(d.a){case 2:return A.nP
case 1:case 5:return A.fkx
default:return A.V1}},
i9D(d){switch(d.a){case 2:return A.vK
case 1:case 5:return A.X2
default:return A.ad5}},
i9H(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bCC(u),q=(s&255)===0?v:C.bCC(d.ch),p=A.j.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nO(q,p,A.l8)
w=new B.pV(t,t,t,t)}switch(d.ax.a){case 1:return B.lN(v,v,v,new B.kO(r,w,v,A.aep,v),v,v,v,v)
case 4:return u?new B.fV(v,v,v):B.xw(B.lN(v,v,q,v,p+0.4,v,v,v))
default:return B.lN(v,v,v,new B.kO(r,w,B.vT(4),A.i0,v),v,v,v,v)}},
i9F(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fg?0.4:12,g=A.j.E(d.e*e,h,e),f=A.j.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i9D(d.as)
v=A.j.E(d.w*(e/960),3,96)
u=C.i9K(d)
t=C.bCC(d.Q)
s=d.x.a>=700?A.ez:A.wo
r=d.y===A.cF?A.yU:A.anF
q=d.z
p=new B.DJ(w,l,l,B.fc(u,l,l,l,B.ha(l,t,1===q.a?A.aUb:A.aUa,l,l,l,l,l,l,A.dC,l,l,v,r,s,l,!0,l,l,l,l),C.i9J(d.as)))
break
case 1:case 4:o=C.i9G(d.at)
n=i===D.lR&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xw(B.fc(w,l,l,l,B.ha(l,A.tj,l,l,l,l,l,l,l,A.dC,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IE(o,n?A.ael:A.Xq,l,l)
break
case 3:w=new B.nO(A.Jx,1,A.l8)
u=B.vT(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lN(A.vK,B.fc(t,l,l,l,B.ha(l,D.esh,l,l,l,l,l,l,l,A.dC,l,l,11,l,A.ez,l,!0,l,l,l,l),A.nP),l,new B.kO(E.aM9,new B.pV(w,w,w,w),u,A.i0,l),l,l,l,l)
break
case 2:p=C.i9H(d,e)
break
case 5:p=C.i9E(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hrL(-w,p)
w=i===D.cW
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.au0(m/255,p)}if(w)return new F.wv(k,l,j,l,new B.Tn(new B.kN(g,g,f,1/0),p))
if(i===D.lr){i=new B.nO(A.Jx,1,A.l8)
i=B.lN(A.vK,p,l,new B.kO(A.pG,new B.pV(i,i,i,i),B.vT(4),A.i0,l),l,l,D.bFX,l)}else i=p
return new F.wv(k,l,j,l,new B.fV(g,f,i))},
i9I(d,e,f,g){var w,v=null,u=C.bCC(d.e),t=d.f
t=B.a([F.hql(t!=null?B.lN(v,v,v,new B.kO(v,v,v,A.i0,new B.aYA(E.X4,A.ad_,B.a([u,C.bCC(t)],x.cR),v)),v,v,v,v):B.lN(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fwf(f,g),B.U(w).k("N<1,fi>")))
return F.czB(t)},
hf5(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hf5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5c(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.XC(A.x1,A.Ju,D.bHa,null,null,null,!1,null)
o=new B.Cm(o,new C.fT0(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hf5,v)},
i9E(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hdR(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gal2()
if(h==null)h=A.aBr
j=B.tW(4279308564)
w=B.vT(18)
v=new B.nO(B.tW(4287531653),3,A.l8)
u=i.length===0?"My links":i
u=B.a([B.xw(B.fc(u,m,m,m,B.ha(m,A.pG,m,m,m,m,m,m,m,A.dC,m,m,12,m,A.ez,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xw(B.fc(A.a.i(l.c),m,m,m,D.fsd,m)))
u.push(new B.fV(m,8,m))
for(t=B.cW(h,0,B.dA(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bO(t,t.gI(0),s.k("bO<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tW(4280690220)
o=new B.aai(8,8)
n=A.a.i(r.b)
u.push(new B.o5(D.bA_,new C.ayl(new C.aji(q),B.lN(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fuC,A.nP),m,new B.kO(p,m,new B.ajL(o,o,o,o),A.i0,m),m,m,D.bGp,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xw(B.fc(k,m,m,m,D.ftQ,m))
u.push(new C.ayl(C.hJn(k),t))}return B.lN(m,B.zo(u,A.Np,A.lQ),m,new B.kO(j,new B.pV(v,v,v,v),w,A.i0,m),m,m,D.bAR,m)},
fwg:function fwg(){},
fwf:function fwf(d,e){this.a=d
this.b=e},
fT0:function fT0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahX(d){var w,v
for(w=0;w<32;++w){v=D.Ia[w]
if(v.a===d)return v}return null},
hul(d){var w,v,u=A.a.cq(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aM(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hDB(d,e){return B.a6(d,!1).cd(B.eb(new C.fZF(e),!0,null,x.fB))},
hDA(d,e){return B.bT(A.L,null,new C.fZE(e),d,!0,!0,!0,null,!1,!1,x.fB)},
ja:function ja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fd:function Fd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Oe:function Oe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blC:function blC(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.a9$=f
_.c=_.a=null},
e2A:function e2A(d){this.a=d},
e2z:function e2z(d,e,f){this.a=d
this.b=e
this.c=f},
e2y:function e2y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bts:function bts(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f7m:function f7m(d,e){this.a=d
this.b=e},
bgA:function bgA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0Y:function b0Y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceH:function ceH(){},
ceI:function ceI(d){this.a=d},
ceJ:function ceJ(d,e,f){this.a=d
this.b=e
this.c=f},
ceK:function ceK(d,e,f){this.a=d
this.b=e
this.c=f},
fZF:function fZF(d){this.a=d},
a_q:function a_q(d,e){this.c=d
this.a=e},
aBt:function aBt(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dht:function dht(d,e,f){this.a=d
this.b=e
this.c=f},
dhy:function dhy(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhx:function dhx(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhB:function dhB(d){this.a=d},
dhv:function dhv(d){this.a=d},
dhC:function dhC(d){this.a=d},
dhu:function dhu(d,e){this.a=d
this.b=e},
dhD:function dhD(d,e){this.a=d
this.b=e},
fZE:function fZE(d){this.a=d},
fZD:function fZD(d){this.a=d},
fZC:function fZC(d,e,f){this.a=d
this.b=e
this.c=f},
fZB:function fZB(d,e){this.a=d
this.b=e},
aNa:function aNa(){},
iqg(d){return B.bT(A.L,null,new C.h10(),d,!0,!0,!0,null,!1,!1,x.N)},
h10:function h10(){},
a_L:function a_L(d){this.a=d},
bi6:function bi6(d){this.d=d
this.c=this.a=null},
doh:function doh(d){this.a=d},
doi:function doi(d,e){this.a=d
this.b=e},
doj:function doj(d){this.a=d},
i5V(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return D.yi},
ikr(d){var w=7000
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
ikq(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i5V(d)
switch(q){case"shimmer":return B.o9(A.LD,g,new C.fPE(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bhr(e,f,p,r),A.ay),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.da(F.bWP(g,new B.Ek(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.p(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bh8(e,p,r),A.ay),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.E(0.55+s*0.45,0,1)
return B.da(B.eK(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fL(e)
u.n_(Math.sin(e)*0.3)
return B.dP(B.fw(A.A,g,r,u,!0),new B.p(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bqc(e,f,p,r),A.ay),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbY(e,f,p,r),A.ay),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.dx(!0,B.b4(r,r,r,new C.bbB(e,f,p,r),A.ay),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bxi(e,p,r),A.ay),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bug(e,f,p,r),A.ay),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bto(e,p,r),A.ay),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.dx(!0,B.b4(r,r,r,new C.bgt(e,p,r),A.ay),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ad,A.f,B.a([B.bR(0,new B.dx(!0,B.ed(A.A,B.c3(r,new B.o(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bi),1.6+s*0.15,r,r),r),0,0,0),B.eK(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fPE:function fPE(d,e){this.a=d
this.b=e},
bhr:function bhr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bh8:function bh8(d,e,f){this.b=d
this.c=e
this.a=f},
bqc:function bqc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbY:function bbY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbB:function bbB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxi:function bxi(d,e,f){this.b=d
this.c=e
this.a=f},
bug:function bug(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bto:function bto(d,e,f){this.b=d
this.c=e
this.a=f},
bgt:function bgt(d,e,f){this.b=d
this.d=e
this.a=f},
dha:function dha(d,e,f,g,h){var _=this
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
fPH(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lr},
ikw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fPI())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aSa(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ikv(d,e){var w,v,u,t,s,r=d.db
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
ahA(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahA=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fI3(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dS,null,new C.fI4(e),d,!0,!0,!1,A.lS,!1,!1,x.N),$async$ahA)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hfN(d),$async$ahA)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LX(d,"Search states\u2026","",A.ku,"Choose state"),$async$ahA)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.heD(s)
if(p==null)p=A.d.gH(D.Sv)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fPJ(p.d)
k=x.u
j=B.a([C.er(A.bk,!1,4279310375,A.aG,"marriage_locked_bg",4280640491,24,A.bs,A.a8,"",1,C.cD(),l,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dj(i,0.016,D.ls,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dj(0,0.058,D.eW,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dj(0,0.058,D.eW,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lk("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lk("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.hbn(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bC5("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a2o("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a2o("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a2o("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a2o("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bC5("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dj(m,0.082,D.bj,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.er(A.bk,!1,i,A.aG,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bs,A.cC,"",0.074,g,null,"","",0,!1,"",0,D.bj,4280172719,2,y.O,0,0,"",D.cq,D.cW,0.78,0.11,0.388))
A.d.v(k,C.hbn(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bC5("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hwr("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hwr("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a2o("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a2o("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bC4("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bC4("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bC5("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lk("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lk("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bC4("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bC4("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bC5("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a2o("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bC4("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a2o("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hbn(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lk("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lk("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Ch(null,null,null,null,D.oM,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rS(m,null,0,0,j,n,D.qW,"","","Hati ya Ndoa",D.dk)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahA,v)},
fPI:function fPI(){},
fI3:function fI3(){},
fI4:function fI4(d){this.a=d},
fI1:function fI1(d){this.a=d},
fI2:function fI2(d){this.a=d},
i95(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i94(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.na
case"lineThrough":return A.xb
default:return A.aG}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eN(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hyv(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Se[w]
if(v.b===u)return v}return D.dk},
i5i(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d2L[w]
if(v.b===u)return v}return D.cW},
ibT(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.duq[w]
if(v.b===u)return v}return D.bj},
rS(d,e,f,g,h,i,j,k,l,m,n){return new C.lY(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hp6(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i7n(d.h(0,"layout"))
t=B.aI(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aI(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hyv(d.h(0,"transition"))
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
n=B.cE(n,new C.ckd(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a4(n).k("M.E"))}return C.rS(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i7n(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.at1[w]
if(v.b===u)return v}return D.n4},
Ch(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rS(4294967295,null,0,0,null,C.cD(),D.qW,"","","",D.dk)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
X_(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i3i(a6.h(0,"aspectRatio"))
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
else{f=J.b7(f,new C.ck0(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.ck1(),x.N)
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
g=B.cE(g,new C.ck2(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a4(g).k("M.E"))}return C.Ch(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rS(4294967295,a3,0,0,a3,C.cD(),D.qW,"","","",D.dk)],x.g):g,v,p,o,s)},
kJ(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i3i(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dvh[w]
if(v.b===u)return v}return D.DR},
cD(){var w=Date.now(),v=$.jb
$.jb=v+1
return""+1000*w+"_"+v},
cku(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.DS){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,40,A.bs,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cq,D.cW,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,20,A.bs,A.cC,"",0.12,u,p,"","",0,!1,"",0,D.bj,m,2,"Click to add subtitle",0,0,"",D.cq,D.cW,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,32,A.bs,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bj,m,2,o,0,0,"",D.cq,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!0,f.e.l(),A.aG,"",n,20,A.bs,A.cC,"",0.68,u,p,"","",0,!1,"",0,D.bj,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cq,D.cW,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Two Column Slide",0,0,"",D.cq,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bs,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bj,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cq,D.cW,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.er(A.bk,!0,t.l(),A.aG,"",n,18,A.bs,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bj,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cq,D.cW,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.er(A.K,!1,4294967295,A.aG,"",n,42,A.bs,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bj,m,2,"Section Header",0,0,"",D.cq,D.cW,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,30,A.bs,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bj,m,2,"Compare",0,0,"",D.cq,D.cW,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.er(A.bk,!1,l,A.aG,"",t.j(0.12).l(),24,A.bs,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bj,t.l(),2,"",0,0,"",D.cq,D.fg,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bs,A.R,"",0.6,s,p,"","",0,!1,"",0,D.bj,m,2,"Option A",0,0,"",D.cq,D.cW,0.38,0.08,0.26)
q=C.cD()
t=C.er(A.bk,!1,l,A.aG,"",t.j(0.06).l(),24,A.bs,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bj,t.j(0.5).l(),2,"",0,0,"",D.cq,D.fg,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.er(A.bk,!1,r.l(),A.aG,"",n,20,A.bs,A.R,"",0.6,q,p,"","",0,!1,"",0,D.bj,m,2,"Option B",0,0,"",D.cq,D.cW,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.er(A.K,!1,f.d.l(),A.aG,"",n,36,A.bs,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bj,m,2,"TERM / QUESTION",0,0,"",D.cq,D.cW,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.K,!1,f.e.l(),A.aG,"",n,22,A.bs,A.cC,"",0.35,u,p,"","",0,!1,"",0,D.bj,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cq,D.cW,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,28,A.bs,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bj,m,2,"Quiz Question",0,0,"",D.cq,D.cW,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,20,A.bs,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bj,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cq,D.cW,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.er(A.bk,!1,f.d.l(),A.aG,"",n,26,A.bs,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bj,m,2,"Worksheet / Assignment",0,0,"",D.cq,D.cW,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.er(A.bk,!1,f.e.l(),A.aG,"",n,18,A.bs,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bj,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cq,D.cW,0.88,0.06,0.16)],x.u))
break}},
hVK(d){return A.d.dP(D.a54,new C.ckv(d),new C.ckw())},
hVH(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Y.aQ(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c5(v,C.X_(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h7E(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.ckq(t)
for(w=J.aU(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.ckp())
return u},
hp9(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ckl()
if(u!==w)return u>=w?d:e
return v.$1(d).cf(v.$1(e))?d:e},
asF(d){return C.hVF(d)},
hVF(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$asF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cko()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3A(m),$async$asF)
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
return B.b(B.az(),$async$asF)
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
case 11:o=l.$1($.hp8.h(0,m))
n=C.h7E(C.h7E(j,r),o)
if(n.length===0){u=C.hp9(C.hp9(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$asF,v)},
ckk(d){return C.hVE(d)},
hVE(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ckk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ckk)
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
return B.i($async$ckk,v)},
b39(d,e){return C.hVG(d,e)},
hVG(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b39=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b39)
case 6:s=g
q=s.tQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.M4(r,J.ad(r)-500):r
w=7
return B.b(s.aA("StringList","ngmy_slides_deleted_"+p,o),$async$b39)
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
return B.i($async$b39,v)},
X0(d,e){return C.hVI(d,e)},
hVI(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$X0=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hp7.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.asF(a3),$async$X0)
case 5:p=a6
case 4:w=6
return B.b(C.ckk(a3),$async$X0)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
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
e=B.C(new B.Y(new B.b8(n,m),new C.ckr(o),l),l.k("M.E"))
A.d.aZ(e,new C.cks())
$.hp7.n(0,a0,e)
n=B.U(e).k("N<1,a8<m,@>>")
n=B.C(new B.N(e,new C.ckt(),n),n.k("ak.E"))
r=A.Y.az(n,null)
$.hp8.n(0,a0,r)
t=8
w=11
return B.b(B.aio(a0,r),$async$X0)
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
Jx:function Jx(d,e){this.a=d
this.b=e},
asD:function asD(d,e){this.a=d
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
cke:function cke(){},
ckf:function ckf(){},
ckd:function ckd(){},
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
ck3:function ck3(){},
ck4:function ck4(){},
ck0:function ck0(){},
ck1:function ck1(){},
ck2:function ck2(){},
jW:function jW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckv:function ckv(d){this.a=d},
ckw:function ckw(){},
ckq:function ckq(d){this.a=d},
ckp:function ckp(){},
ckl:function ckl(){},
ckm:function ckm(){},
ckn:function ckn(){},
cko:function cko(){},
ckr:function ckr(d){this.a=d},
cks:function cks(){},
ckt:function ckt(){},
ikH(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fQg(e,v,d,B.aR(w))
w.$1(new C.fQc())
w.$1(new C.fQd())
w.$1(new C.fQe())
w.$1(new C.fQf())
return v},
fQg:function fQg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQc:function fQc(){},
fQd:function fQd(){},
fQe:function fQe(){},
fQf:function fQf(){},
b36:function b36(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck9:function ck9(d){this.a=d},
ck8:function ck8(){},
cka:function cka(){},
ckb:function ckb(d,e){this.a=d
this.b=e},
ckc:function ckc(d){this.a=d},
apF:function apF(d,e){this.c=d
this.a=e},
blm:function blm(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
dPJ:function dPJ(){},
aMW:function aMW(){},
ckh(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ckh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fhJ)
u=!1
w=1
break}u=B.la(!1,d,t,!1,null,A.a7P,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckh,v)},
hVC(d){var w=A.d.bj(D.Ij,new C.cki(d))
if(w<0)return!0
return w>=4},
hVD(d){var w=A.d.bj($.bGu(),new C.ckj(d))
if(w<0)return!0
return w>=5},
cki:function cki(d){this.a=d},
ckj:function ckj(d){this.a=d},
imq(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xk()
$.pQ().pc(t,new C.fT7(s),!0)
u=B.a([B.BR(v,A.pH,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.q(v,B.d(e,v,v,v,v,v,v,D.fsG,v,v,v),A.f,v,v,new B.o(A.aT,v,v,w,v,v,A.n),v,v,v,v,A.mV,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fT7:function fT7(d){this.a=d},
im1(){return C.heZ()},
iiV(){return C.bEt()},
il_(){return C.heQ()},
aRb(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fSd(d,f),$async$aRb)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRb,v)},
fSd(d,e){var w=0,v=B.j(x.H),u
var $async$fSd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCD
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fSe(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fSd)
case 2:return B.h(null,v)}})
return B.i($async$fSd,v)},
fSe:function fSe(d,e){this.a=d
this.b=e},
aen:function aen(d,e,f){this.c=d
this.d=e
this.a=f},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBm:function eBm(d,e){this.a=d
this.b=e},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBo:function eBo(d){this.a=d},
aeE:function aeE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b35(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b34(g,m,f,d,e,h,l,k,j,o,i,null)},
hBI(d){return B.cs(new C.fQb(d))},
hf0(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
im9(d){if(d===D.cq)return"None"
return C.hf0(d)},
bD8(d,e,f,g){return C.ic_(d,e,f,g)},
ic_(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bD8=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hbG&&t.pW())t.eO()
$.hbG=!0
s.a=null
w=3
return B.b(B.hZ(A.bn,!0,"Animation preview",d,new C.fz_(s,e,g,f),null,A.eG,!0,x.H),$async$bD8)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hbG=!1
case 1:return B.h(u,v)}})
return B.i($async$bD8,v)},
h1P(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h1P=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c0,x.w).w.a.a*0.88,280,440)
s=f===D.cq
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hf0(f)+" Slide transition preview"
s=s?Ah.GA:A.uk
w=3
return B.b(C.bD8(d,s,new B.a5(t,t*0.56,B.bx(B.n(14),new C.aKs(f,null),A.aq),null),r),$async$h1P)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h1P,v)},
hB_(d,e,f){var w,v,u=null,t=A.cx.aC(0,A.j.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.da(f,t)
case 2:case 17:return B.dP(B.da(f,t),new B.p((1-t)*48,0))
case 3:return B.dP(B.da(f,t),new B.p(-(1-t)*48,0))
case 4:case 21:return B.dP(B.da(f,t),new B.p(0,(1-t)*36))
case 5:return B.dP(B.da(f,t),new B.p(0,-(1-t)*36))
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
case 11:case 12:case 14:case 15:case 20:return B.dP(B.da(f,t),new B.p((1-t)*24,0))}},
bFZ(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.E(B.aH(d,A.c0,x.w).w.a.a*0.88,300,440)
s=f===D.cq
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hf0(f)+" Element animation preview"
s=s?Ah.GA:A.uk
w=3
return B.b(C.bD8(d,s,new B.a5(t,t*0.62,B.bx(B.n(14),new C.aB8(f,null),A.aq),null),r),$async$bFZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFZ,v)},
im8(d){var w,v,u,t,s=$.ah1.W(0,d)
if(s!=null){$.ah1.n(0,d,s)
return s}w=A.cG.aM(A.a.b2(d,A.a.cq(d,",")+1))
$.ah1.n(0,d,w)
v=$.hcx=$.hcx+w.length
u=B.a4($.ah1).k("cx<1>")
for(;;){if(!(v>41943040&&$.ah1.a>1))break
t=new B.cx($.ah1,u).gae(0)
if(!t.C())B.bi(B.fp())
v-=$.ah1.W(0,t.gR(0)).length
$.hcx=v}return w},
ilO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a4(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
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
a3z(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
m.D(new B.jN(e))
return m
case"rounded":m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
w=e.gdA()*0.18
m.D(new B.j7(B.bn(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbF().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bv())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aF(w.r,A.ai,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aZ(p,o)
m.push(p)
o=v.f
if(o!=null)p.aj(o)
v.aa()}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.aj(o)
v.aa()}}v.D(new B.bv())
return v
case"diamond":m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
m.D(new B.aZ(e.gbF().a,e.b))
m.D(new B.aq(e.c,e.gbF().b))
m.D(new B.aq(e.gbF().a,e.d))
m.D(new B.aq(e.a,e.gbF().b))
m.D(new B.bv())
return m
case"arch":m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bdd(new B.p(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bv())
return m
default:m=new B.aF($.S().r,A.ai,n,n,B.a([],m))
m.D(new B.or(e))
return m}},
fNL(d,e,f){return B.cs(new C.fNM(D.f9T.q(0,d),d,f,e))},
b34:function b34(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ck7:function ck7(d){this.a=d},
ck6:function ck6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck5:function ck5(){},
b31:function b31(d,e){this.b=d
this.a=e},
fQb:function fQb(d){this.a=d},
fQa:function fQa(d,e){this.a=d
this.b=e},
fz_:function fz_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyY:function fyY(d){this.a=d},
fyZ:function fyZ(d,e){this.a=d
this.b=e},
aKs:function aKs(d,e){this.c=d
this.a=e},
bwN:function bwN(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
ffW:function ffW(d,e,f){this.a=d
this.b=e
this.c=f},
aL9:function aL9(d,e){this.b=d
this.a=e},
W7:function W7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bly:function bly(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
e0j:function e0j(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0h:function e0h(d){this.a=d},
Jw:function Jw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ck_:function ck_(d){this.a=d},
cjZ:function cjZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB8:function aB8(d,e){this.c=d
this.a=e},
bfU:function bfU(){this.d=0
this.c=this.a=null},
den:function den(d){this.a=d},
dem:function dem(d){this.a=d},
a8G:function a8G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bme:function bme(d,e){var _=this
_.d=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
eoI:function eoI(d,e,f){this.a=d
this.b=e
this.c=f},
b10:function b10(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bh6:function bh6(d,e,f){this.b=d
this.c=e
this.a=f},
bsi:function bsi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f4R:function f4R(){},
fNM:function fNM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btl:function btl(d,e,f){this.b=d
this.c=e
this.a=f},
aN9:function aN9(){},
aNE:function aNE(){},
aOY:function aOY(){},
fRc(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fRc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.cp().MD(D.dsi,A.uy,!0),$async$fRc)
case 3:r=e
if(r==null||J.cr(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ilI(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRc,v)},
ilI(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a8Z(d,new B.a18(A.cP.gcu().aM(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.idI(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8Z(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)}w=A.c9.Ln(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8Z(d,null,w.length>6e4?A.a.aB(w,0,6e4):w)},
idI(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cG1().cPY(B.rC(d,A.im,o,o),o,o,!1).cRT(0,"word/document.xml")
if(n==null)return""
w=n.d_1()
v=A.c9.Ln(0,w==null?$.hE6():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cE(q,new C.fC2(),B.a4(q).k("M.E"),t).he(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8Z:function a8Z(d,e,f){this.a=d
this.b=e
this.c=f},
fC2:function fC2(){},
hVJ(d,e,f,g,h,i,j,k,l){return new C.OI(l,e,d,g,f,i,h,j,k,null)},
OI:function OI(d,e,f,g,h,i,j,k,l,m){var _=this
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
aG0:function aG0(d,e,f,g,h,i,j,k,l){var _=this
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
eHz:function eHz(d){this.a=d},
eHx:function eHx(){},
eHy:function eHy(d){this.a=d},
eDX:function eDX(){},
eDY:function eDY(){},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eFl:function eFl(){},
eFm:function eFm(){},
eDk:function eDk(){},
eGF:function eGF(d){this.a=d},
eHv:function eHv(d,e){this.a=d
this.b=e},
eFv:function eFv(d,e){this.a=d
this.b=e},
eHi:function eHi(d){this.a=d},
eHj:function eHj(){},
eHk:function eHk(){},
eHl:function eHl(d){this.a=d},
eHm:function eHm(){},
eCJ:function eCJ(d){this.a=d},
eHw:function eHw(){},
eEE:function eEE(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF1:function eF1(d,e,f){this.a=d
this.b=e
this.c=f},
eF2:function eF2(d){this.a=d},
eED:function eED(){},
eEC:function eEC(d){this.a=d},
eEA:function eEA(){},
eEz:function eEz(d){this.a=d},
eEB:function eEB(){},
eDT:function eDT(d){this.a=d},
eDU:function eDU(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d){this.a=d},
eEI:function eEI(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eEL:function eEL(d,e){this.a=d
this.b=e},
eCL:function eCL(){},
eCM:function eCM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEW:function eEW(){},
eEX:function eEX(d,e){this.a=d
this.b=e},
eEU:function eEU(d,e,f){this.a=d
this.b=e
this.c=f},
eEV:function eEV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEO:function eEO(d,e,f){this.a=d
this.b=e
this.c=f},
eEP:function eEP(d,e,f){this.a=d
this.b=e
this.c=f},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eET:function eET(d,e){this.a=d
this.b=e},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d){this.a=d},
eF_:function eF_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEY:function eEY(d){this.a=d},
eFg:function eFg(){},
eFh:function eFh(){},
eFi:function eFi(){},
eFj:function eFj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFd:function eFd(d){this.a=d},
eFf:function eFf(){},
eFe:function eFe(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eFb:function eFb(d,e,f){this.a=d
this.b=e
this.c=f},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFk:function eFk(){},
eEM:function eEM(d,e){this.a=d
this.b=e},
eD1:function eD1(){},
eD2:function eD2(d,e,f){this.a=d
this.b=e
this.c=f},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eD0:function eD0(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFr:function eFr(d,e){this.a=d
this.b=e},
eBG:function eBG(d,e){this.a=d
this.b=e},
eD_:function eD_(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eFz:function eFz(d,e,f){this.a=d
this.b=e
this.c=f},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCT:function eCT(d){this.a=d},
eFy:function eFy(d,e,f){this.a=d
this.b=e
this.c=f},
eCK:function eCK(d){this.a=d},
eDl:function eDl(){},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHh:function eHh(d,e,f){this.a=d
this.b=e
this.c=f},
eGG:function eGG(d,e,f){this.a=d
this.b=e
this.c=f},
eBH:function eBH(d){this.a=d},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBr:function eBr(d){this.a=d},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBs:function eBs(d,e){this.a=d
this.b=e},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d,e){this.a=d
this.b=e},
eCV:function eCV(d){this.a=d},
eC8:function eC8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eC9:function eC9(d,e){this.a=d
this.b=e},
eCd:function eCd(d,e){this.a=d
this.b=e},
eCe:function eCe(d){this.a=d},
eCb:function eCb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCc:function eCc(d){this.a=d},
eCa:function eCa(){},
eC7:function eC7(d,e,f){this.a=d
this.b=e
this.c=f},
eFa:function eFa(d,e){this.a=d
this.b=e},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d,e,f){this.a=d
this.b=e
this.c=f},
eHo:function eHo(d){this.a=d},
eGW:function eGW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGV:function eGV(d,e,f){this.a=d
this.b=e
this.c=f},
eGU:function eGU(){},
eGT:function eGT(d,e,f){this.a=d
this.b=e
this.c=f},
eGS:function eGS(d,e){this.a=d
this.b=e},
eGP:function eGP(d,e,f){this.a=d
this.b=e
this.c=f},
eGN:function eGN(d){this.a=d},
eGO:function eGO(d){this.a=d},
eGR:function eGR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGQ:function eGQ(d){this.a=d},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e){this.a=d
this.b=e},
eGH:function eGH(){},
eHf:function eHf(d,e){this.a=d
this.b=e},
eHd:function eHd(d){this.a=d},
eHe:function eHe(d){this.a=d},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBx:function eBx(d){this.a=d},
eBy:function eBy(d){this.a=d},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBB:function eBB(d,e,f){this.a=d
this.b=e
this.c=f},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBw:function eBw(d,e,f){this.a=d
this.b=e
this.c=f},
eBv:function eBv(d){this.a=d},
eFw:function eFw(d,e,f){this.a=d
this.b=e
this.c=f},
eHn:function eHn(d,e,f){this.a=d
this.b=e
this.c=f},
eDS:function eDS(d,e,f){this.a=d
this.b=e
this.c=f},
eDR:function eDR(){},
eCh:function eCh(d,e,f){this.a=d
this.b=e
this.c=f},
eCi:function eCi(d){this.a=d},
eBt:function eBt(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
eBN:function eBN(d,e){this.a=d
this.b=e},
eBK:function eBK(d){this.a=d},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d){this.a=d},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d){this.a=d},
eC2:function eC2(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC5:function eC5(){},
eC6:function eC6(){},
eBO:function eBO(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBT:function eBT(d){this.a=d},
eBU:function eBU(d){this.a=d},
eBV:function eBV(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d,e){this.a=d
this.b=e},
eDi:function eDi(d,e,f){this.a=d
this.b=e
this.c=f},
eDh:function eDh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDg:function eDg(d,e,f){this.a=d
this.b=e
this.c=f},
eDf:function eDf(d,e){this.a=d
this.b=e},
eBD:function eBD(d,e){this.a=d
this.b=e},
eCl:function eCl(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCj:function eCj(d,e){this.a=d
this.b=e},
eCm:function eCm(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d){this.a=d},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF7:function eF7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d,e){this.a=d
this.b=e},
eF3:function eF3(){},
eF4:function eF4(){},
eGI:function eGI(){},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGK:function eGK(){},
eGL:function eGL(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e){this.a=d
this.b=e},
eCN:function eCN(){},
eCO:function eCO(){},
eCP:function eCP(){},
eCS:function eCS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCR:function eCR(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e,f){this.a=d
this.b=e
this.c=f},
eEi:function eEi(d){this.a=d},
eEh:function eEh(){},
eEj:function eEj(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e){this.a=d
this.b=e},
eEg:function eEg(d){this.a=d},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEf:function eEf(d){this.a=d},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEe:function eEe(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEd:function eEd(d){this.a=d},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e){this.a=d
this.b=e},
eEb:function eEb(d){this.a=d},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEa:function eEa(d){this.a=d},
eE3:function eE3(d,e){this.a=d
this.b=e},
eE4:function eE4(d){this.a=d},
eE5:function eE5(d){this.a=d},
eE2:function eE2(d){this.a=d},
eE6:function eE6(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eE9:function eE9(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDe:function eDe(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD5:function eD5(d,e){this.a=d
this.b=e},
eD7:function eD7(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d,e){this.a=d
this.b=e},
eDd:function eDd(d){this.a=d},
eHt:function eHt(d){this.a=d},
eHu:function eHu(d){this.a=d},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e){this.a=d
this.b=e},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEu:function eEu(d){this.a=d},
eEv:function eEv(d){this.a=d},
eFS:function eFS(d,e){this.a=d
this.b=e},
eFT:function eFT(d){this.a=d},
eFU:function eFU(d){this.a=d},
eG4:function eG4(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGq:function eGq(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d,e){this.a=d
this.b=e},
eFV:function eFV(d){this.a=d},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eG9:function eG9(d){this.a=d},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d){this.a=d},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eFI:function eFI(d){this.a=d},
eGe:function eGe(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eGg:function eGg(d){this.a=d},
eFP:function eFP(d,e){this.a=d
this.b=e},
eGh:function eGh(d,e){this.a=d
this.b=e},
eGi:function eGi(d,e){this.a=d
this.b=e},
eFO:function eFO(d,e,f){this.a=d
this.b=e
this.c=f},
eFE:function eFE(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGE:function eGE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGD:function eGD(d,e){this.a=d
this.b=e},
eGj:function eGj(d,e,f){this.a=d
this.b=e
this.c=f},
eFN:function eFN(d,e,f){this.a=d
this.b=e
this.c=f},
eFD:function eFD(d,e,f){this.a=d
this.b=e
this.c=f},
eFB:function eFB(d,e){this.a=d
this.b=e},
eGk:function eGk(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eGl:function eGl(d){this.a=d},
eFL:function eFL(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d){this.a=d},
eFK:function eFK(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d,e){this.a=d
this.b=e},
eFJ:function eFJ(d){this.a=d},
eGu:function eGu(d,e){this.a=d
this.b=e},
eFH:function eFH(d){this.a=d},
eGv:function eGv(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eGw:function eGw(d,e){this.a=d
this.b=e},
eFF:function eFF(d){this.a=d},
eCg:function eCg(d,e,f){this.a=d
this.b=e
this.c=f},
eCf:function eCf(d,e){this.a=d
this.b=e},
eGZ:function eGZ(d,e){this.a=d
this.b=e},
eGY:function eGY(d,e){this.a=d
this.b=e},
eH_:function eH_(d,e){this.a=d
this.b=e},
eGX:function eGX(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDm:function eDm(d){this.a=d},
eDW:function eDW(){},
eDV:function eDV(){},
eHb:function eHb(d){this.a=d},
eHa:function eHa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH5:function eH5(d,e){this.a=d
this.b=e},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH3:function eH3(d){this.a=d},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eHc:function eHc(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCF:function eCF(d,e,f){this.a=d
this.b=e
this.c=f},
eCE:function eCE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCt:function eCt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCs:function eCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCz:function eCz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCA:function eCA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCr:function eCr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCC:function eCC(d,e){this.a=d
this.b=e},
eCp:function eCp(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
eEx:function eEx(d){this.a=d},
eEw:function eEw(d){this.a=d},
eEy:function eEy(d,e){this.a=d
this.b=e},
eDC:function eDC(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDG:function eDG(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDH:function eDH(d,e){this.a=d
this.b=e},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDI:function eDI(d,e,f){this.a=d
this.b=e
this.c=f},
eDw:function eDw(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDu:function eDu(d,e,f){this.a=d
this.b=e
this.c=f},
eDr:function eDr(d,e){this.a=d
this.b=e},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDt:function eDt(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDs:function eDs(d,e,f){this.a=d
this.b=e
this.c=f},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDN:function eDN(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBp:function eBp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
ag9:function ag9(d,e,f){this.a=d
this.b=e
this.c=f},
aAv:function aAv(d,e){this.c=d
this.a=e},
beG:function beG(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
d9P:function d9P(d){this.a=d},
d9O:function d9O(d){this.a=d},
beV:function beV(d,e){this.c=d
this.a=e},
dac:function dac(d){this.a=d},
dad:function dad(d){this.a=d},
Ky:function Ky(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beF:function beF(){this.d=!1
this.c=this.a=null},
d9M:function d9M(d){this.a=d},
d9I:function d9I(d){this.a=d},
d9N:function d9N(d){this.a=d},
d9H:function d9H(d){this.a=d},
d9L:function d9L(d){this.a=d},
d9J:function d9J(d){this.a=d},
d9K:function d9K(d,e){this.a=d
this.b=e},
Qr:function Qr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0C:function a0C(d,e,f){this.c=d
this.d=e
this.a=f},
aG3:function aG3(d,e,f){var _=this
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
eI9:function eI9(){},
eI_:function eI_(d){this.a=d},
eI8:function eI8(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eHW:function eHW(d){this.a=d},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHZ:function eHZ(d,e,f){this.a=d
this.b=e
this.c=f},
eI6:function eI6(){},
eI7:function eI7(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d){this.a=d},
eIa:function eIa(d,e,f){this.a=d
this.b=e
this.c=f},
eIc:function eIc(d,e){this.a=d
this.b=e},
eIb:function eIb(d){this.a=d},
KE:function KE(d,e){this.c=d
this.a=e},
btR:function btR(d,e){this.b=d
this.a=e},
bjG:function bjG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjF:function bjF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLR:function aLR(){},
aNR:function aNR(){},
bzF:function bzF(){},
aNS:function aNS(){},
fT8(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fT8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xH.cp().MD(B.a(["pdf"],x.s),A.uy,!0),$async$fT8)
case 3:q=e
if(q==null||J.cr(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqZ(s,"data:application/pdf;base64,"+A.cP.gcu().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT8,v)},
imk(d){var w,v,u,t,s,r
try{w=B.jG(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gI(0)
if(t>0){s=J.aSD(t,1,200)
return s}}catch(r){}return 1},
fT_(d){return C.imj(d)},
imj(d){var w=0,v=B.j(x.T),u
var $async$fT_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT_,v)},
bFe(d,e,f,g){return C.imt(d,e,f,g)},
imt(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFe=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.E(b5.a,80,2400)
q=A.j.E(b5.b,80,2400)
p=B.hCi(b7,new B.av(r,q))
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
l=Math.max(B.jg(b0),a9)}o=A.j.E(o-0.04,0,1)
n=A.j.E(n-0.04,0,1)
m=A.j.E(m+0.04,0,1)
l=A.j.E(l+0.04,0,1)
j=A.j.E(m-o,0.12,1)
i=A.j.E(l-n,0.12,1)
h=A.o.E(A.j.V(800*(i/j)),180,420)
$.S()
g=new B.pW(new B.pv())
f=B.zn(g,null)
a7=B.J()
a7.r=A.rt.gp(0)
f.aq(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.J()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bB
b1.e=A.dO
b1.b=A.aa
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.K)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.p((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o0()
w=7
return B.b(a3.xC(800,h),$async$bFe)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hs(A.hd),$async$bFe)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dM.gaU(a5))
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
return B.i($async$bFe,v)},
aRK(d,e,f){return C.imh(d,e,f)},
imh(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.au:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiD(d,e,f,new C.fSY(r,q),q,"Sign document"),$async$aRK)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFe(q,t,r.b,r.c),$async$aRK)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b38(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRK,v)},
imr(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hv8(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hv8(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.huK(q.ay)+";border:2px solid "+C.huK(q.ch)+'"></div>'
break
case 5:l=C.hdR(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gal2()
if(p==null)p=A.aBr
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
huK(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hv8(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFc(d,e){var w=0,v=B.j(x.H)
var $async$bFc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fT6(e,C.imr(e),d),d,null,!0,!0,x.H),$async$bFc)
case 2:return B.h(null,v)}})
return B.i($async$bFc,v)},
bFd(){var w=0,v=B.j(x.T),u,t,s
var $async$bFd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(92,2400),$async$bFd)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fT_(s),$async$bFd)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFd,v)},
aRL(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hf5(d),$async$aRL)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fVJ(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRL,v)},
hp5(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b38:function b38(d,e,f){this.a=d
this.b=e
this.c=f},
fSY:function fSY(d,e){this.a=d
this.b=e},
fT6:function fT6(d,e,f){this.a=d
this.b=e
this.c=f},
fT3:function fT3(d){this.a=d},
fT4:function fT4(d,e,f){this.a=d
this.b=e
this.c=f},
fT5:function fT5(d,e,f){this.a=d
this.b=e
this.c=f},
imi(d){return C.kJ(d.w)},
imp(d){var w,v,u,t
if(d.length===0||!A.d.cC(d,C.io9()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
z8(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hIo()
if(w.b.test(u))return u
return null},
hCk(d,e,f){var w,v,u=C.hRm(d),t=$.oo()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.u(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
imv(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aU(d.a),v=new B.eB(w,d.b);v.C();){u=w.gR(w).y
t=C.z8(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fSW(d,e){var w,v=d.y,u=C.z8(v==null?"":v)
if(u!=null)return d.y=u
w=C.imv(new B.Y(e,new C.fSX(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hCk(v==null?"":v,null,w)},
imu(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kJ(w.w))return null
v=w.y
return C.z8(v==null?"":v)},
hVL(){var w,v=$.oo(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.he(u)},
X3(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$X3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$X3)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f4("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$X3)
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
X4(d){return C.hVM(d)},
hVM(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$X4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$X4)
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
a90(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a90=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c7(),$async$a90)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.X3(),$async$a90)
case 4:s=a6
r=C.z8(a2==null?"":a2)
if(r==null)r=a3!=null?C.hCk(a3,null,A.M):null
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
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dR.aM(t)
g.n(0,"payload",A.cP.gcu().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).ab().ag())
if(D.UD.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.z8(J.k(q==null?"":q))
if(f==null)f=C.hpa(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.X4(s),$async$a90)
case 7:u=new B.aHv(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hVL()
n=r==null
d=n?C.hpa(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dR.aM(t)
q.n(0,"payload",A.cP.gcu().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).ab().ag())
if(D.UD.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.X4(s),$async$a90)
case 8:u=new B.aHv(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a90,v)},
hpa(d){var w,v,u=$.oo()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.u(u.aw(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.b_(A.o.u(Date.now()%1000),3,"0")},
asH(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$asH)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.X3(),$async$asH)
case 6:t=f
s=J.a7(t)
r=s.gI(t)
s.bt(t,new C.ckx(q))
w=s.gI(t)!==r?7:8
break
case 7:w=9
return B.b(C.X4(t),$async$asH)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asH,v)},
asG(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.z8(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$asG)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.X3(),$async$asG)
case 6:t=o.i7(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.z8(J.k(q==null?"":q))===p){u=C.a9_(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asG,v)},
a9_(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9_=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c7(),$async$a9_)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.X3(),$async$a9_)
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
if(D.UD.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.Y.aQ(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.Y.az(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dM(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=7
return B.b(C.X4(p),$async$a9_)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9_,v)},
imo(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a8<m,@>>")
w=B.C(new B.N(d,new C.fT2(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fTa(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).ab().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ak())
return A.Y.az(w,null)}return A.Y.az(C.imo(d==null?B.a([],x.D):d,f,g),null)},
fT9(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fT9=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a90(h,d,e,f,g),$async$fT9)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.z8(e==null?"":e)
u=new B.aHh(s,t)
w=1
break}t=A.dR.aM(h)
t=A.kI.gcu().aM(t)
u=new B.aHh(C.z8(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fT9,v)},
hf7(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d3(q,"{"))try{w=A.Y.aQ(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
ims(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hf7(u))return u
t=A.a.cq(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hf7(s))return s}r=A.a.cq(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hf7(s))return s}}return null},
fSZ(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.Y.aQ(0,A.c9.cG(0,A.cG.aM(J.nl(t,8))),null))
else w=v.a(A.Y.aQ(0,t,null))
v=C.i4K(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ain(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ain=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asG(t[1]),$async$ain)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSZ(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.z8(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asG(r),$async$ain)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSZ(s)
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
return B.b(C.a9_(t[1]),$async$ain)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fSZ(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fSZ(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ain,v)},
i4K(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.UD.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hf4(C.X_(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dd(u,x.f)
t=B.cE(t,new C.fow(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a4(t).k("M.E"))
return t}return B.a([],x.D)},
hf4(d,e){var w,v,u,t,s,r,q,p,o=d.ak()
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
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.X_(B.a2(o,x.N,x.z))
if(e&&C.kJ(p.w))p.Q=new B.V(Date.now(),0,!1).ab().bR(144e8).ag()
return p},
bEY(){var w=0,v=B.j(x.aT),u,t,s
var $async$bEY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hm(),$async$bEY)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ain(s),$async$bEY)
case 4:t=e
u=J.cr(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEY,v)},
h13(d){var w=0,v=B.j(x.T),u,t
var $async$h13=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.YF,!0,"Dismiss",d,new C.h14(),new C.h15(),A.Gy,!0,x.N),$async$h13)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.ffS)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h13,v)},
iqj(d,e,f,g,h){return B.a6(d,!1).cd(B.eb(new C.h16(h,e,g,f),!0,null,x.H))},
fSX:function fSX(d){this.a=d},
ckx:function ckx(d){this.a=d},
fT2:function fT2(){},
fow:function fow(d){this.a=d},
h14:function h14(){},
h15:function h15(){},
h16:function h16(d,e,f,g){var _=this
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
aG1:function aG1(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eHG:function eHG(){},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHI:function eHI(d){this.a=d},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHB:function eHB(d,e){this.a=d
this.b=e},
eHA:function eHA(d,e){this.a=d
this.b=e},
X2:function X2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmA:function bmA(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d){this.a=d},
eHR:function eHR(){},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d,e){this.a=d
this.b=e},
aFZ:function aFZ(d){this.a=d},
aG_:function aG_(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eBj:function eBj(d){this.a=d},
eBi:function eBi(){},
eBk:function eBk(d){this.a=d},
eBf:function eBf(d){this.a=d},
eBe:function eBe(){},
eBg:function eBg(d){this.a=d},
eBh:function eBh(d){this.a=d},
bx8:function bx8(){},
asI:function asI(d){this.a=d},
aG2:function aG2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHV:function eHV(d){this.a=d},
eHU:function eHU(d){this.a=d},
iac(){var w,v,u,t
for(v=0;v<4;++v){w=D.dga[v]
try{if(Ae.c0O(w)){u=w
return u}}catch(t){}}return null},
S6(d,e){return C.ij5(d,e)},
ij5(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$S6=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.iac()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oM?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qO(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.ps(new C.fNe(c2,b7,o),!1,!1)
b6.m7(0,l)
b9=x.H
B.cf(null,A.dj,!1,null,new C.fNf(n,m),c6,null,!0,!0,b9)
k=new C.fNj(b7)
j=new C.fNk()
i=null
t=4
b3=c2.a
h=Al.aU5(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h41(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aZ7(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IT.z4(i,"dataavailable",new C.fNg(e))
d=new B.c2(new B.bk($.bE,x.dT),x.b2)
A.IT.z4(i,"stop",new C.fNh(d))
J.aj0(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$S6)
case 8:w=7
return B.b(c5.$1(d0),$async$S6)
case 7:a0=d0
J.h42(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aj0(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aj0(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$S6)
case 15:w=14
return B.b(c5.$1(d0),$async$S6)
case 14:a0=d0
case 13:J.h42(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aj0(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbs())b3=b3===b8.gbs()&&0<b8.gcE()
else b3=!0
if(!b3){w=17
break}J.h42(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fe,null,b9),$async$S6)
case 18:w=16
break
case 17:J.aj0(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aj0(n,"Saving your video\u2026")
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
B.bQ(A.qo,new C.fNi(a7),b9)
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
c3.sic(b3)
J.aSH(c3,0)
c3=n
c3.sic(b3)
J.aSH(c3,0)
c3=m
c3.sic(b3)
J.aSH(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$S6,v)},
fNe:function fNe(d,e,f){this.a=d
this.b=e
this.c=f},
fNd:function fNd(){},
fNf:function fNf(d,e){this.a=d
this.b=e},
fNj:function fNj(d){this.a=d},
fNk:function fNk(){},
fNg:function fNg(d){this.a=d},
fNh:function fNh(d){this.a=d},
fNi:function fNi(d){this.a=d},
bxm:function bxm(d,e,f){this.c=d
this.d=e
this.a=f},
fiz:function fiz(){},
fiA:function fiA(){},
ckT(d){var w=0,v=B.j(x.at),u,t,s
var $async$ckT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asQ(d,A.Af),$async$ckT)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bE(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bC
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ckT,v)},
ckS(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8H:function a8H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmj:function bmj(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
epz:function epz(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
a9A:function a9A(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a9B:function a9B(d,e){this.a=d
this.b=e},
b4O:function b4O(){},
coN:function coN(){},
coO:function coO(){},
coP:function coP(d,e,f,g,h,i,j,k,l){var _=this
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
hJn(d){return new C.aji(d)},
a40:function a40(){},
aji:function aji(d){this.a=d},
aT0:function aT0(){},
ayl:function ayl(d,e){this.d=d
this.b=e
this.a=null},
aUu:function aUu(d){this.b=d
this.a=null},
bDS(d,e){var w=0,v=B.j(x.H),u
var $async$bDS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gua().Mk(d,e),$async$bDS)
case 2:u=B.fVQ()
w=3
return B.b(u,$async$bDS)
case 3:return B.h(null,v)}})
return B.i($async$bDS,v)},
hzw(d,e){return(A.t5[(d^e)&255]^A.o.aI(d,8))>>>0},
fFh(d,e,f,g,h,i){var w=C.ifj(d,A.dh,f,null,A.d1,g,h,i)
return w},
hBt(d){var w=F.hCb(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hRm(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pC.h(0,w)
if(v!=null)return v
for(u=A.pC.gdO(A.pC),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aB(s,0,2)
return A.a.aB(s+"XX",0,2)},
hBB(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<57;++w)v+="- "+D.dmS[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bD5(d,e){return C.ibV(d,e)},
ibV(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bD5=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aWf(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cv(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jL(o,"share",[p]),x.H),$async$bD5)
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
return B.i($async$bD5,v)},
heZ(){var w=0,v=B.j(x.y),u,t,s
var $async$heZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fwh
s=$.bCD
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bD5(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$heZ,v)},
bEt(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fwh
l=$.bCD
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hvS()?3:4
break
case 3:w=5
return B.b(C.bD5(m,k),$async$bEt)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCE
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
return B.b(B.bQ(A.a3,null,x.H),$async$bEt)
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
return B.i($async$bEt,v)},
heQ(){var w=0,v=B.j(x.y),u,t,s,r
var $async$heQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCE
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
return B.i($async$heQ,v)},
hf6(d,e){var w=0,v=B.j(x.H),u,t
var $async$hf6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.lW.rj(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hf6,v)},
b3K(d,e){var w=0,v=B.j(x.y),u
var $async$b3K=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3M(d,e),$async$b3K)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3L(d),$async$b3K)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3K,v)}},D,O,Ao,A9,A_,Aa,W,Ap,G,F,E,H,X,R,A0,A1,Aq,M,Ar,A2,As,At,Ab,K,Au,Av,A3,N,Y,P,Z,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,AD,T,U,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[204]
A7=c[73]
Ak=c[53]
Al=c[64]
V=c[221]
A8=c[57]
Am=c[147]
An=c[232]
C=a.updateHolder(c[5],C)
D=c[219]
O=c[139]
Ao=c[41]
A9=c[223]
A_=c[220]
Aa=c[233]
W=c[209]
Ap=c[132]
G=c[188]
F=c[35]
E=c[222]
H=c[95]
X=c[121]
R=c[149]
A0=c[32]
A1=c[178]
Aq=c[235]
M=c[158]
Ar=c[185]
A2=c[105]
As=c[134]
At=c[228]
Ab=c[116]
K=c[224]
Au=c[236]
Av=c[131]
A3=c[67]
N=c[198]
Y=c[82]
P=c[160]
Z=c[114]
Ac=c[118]
Aw=c[226]
Q=c[123]
Ad=c[141]
Ax=c[93]
Ae=c[58]
Af=c[194]
Ay=c[40]
Ag=c[80]
Az=c[157]
Ah=c[148]
Ai=c[231]
AA=c[234]
AB=c[230]
S=c[74]
AC=c[227]
I=c[175]
AD=c[237]
T=c[51]
U=c[225]
L=c[206]
A4=c[229]
A5=c[111]
A6=c[63]
C.oe.prototype={
vE(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ue(t,v)
return new C.oe(t===0?!1:w,v,t)},
bPz(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DD()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ue(w,u)
return new C.oe(r===0?!1:s,u,r)},
bQ5(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DD()
w=o-d
if(w<=0)return p.a?$.hgC():$.DD()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ue(w,u)
q=new C.oe(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aK(0,$.a3N())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ar(e,16)
if(A.o.F(e,16)===0)return r.bPz(v)
u=w+v+1
t=new Uint16Array(u)
C.hsm(r.b,w,e,t)
w=r.a
s=C.ue(u,t)
return new C.oe(s===0?!1:w,t,s)},
mD(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ar(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQ5(v)
t=w-v
if(t<=0)return n.a?$.hgC():$.DD()
s=n.b
r=new Uint16Array(t)
C.i0y(s,w,e,r)
w=n.a
q=C.ue(t,r)
p=new C.oe(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aK(0,$.a3N())
for(o=0;o<v;++o)if(s[o]!==0)return p.aK(0,$.a3N())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cO2(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9b(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9b(t,e)
if(s===0)return $.DD()
if(r===0)return t.a===e?t:t.vE(0)
w=s+1
v=new Uint16Array(w)
C.i0w(t.b,s,d.b,r,v)
u=C.ue(w,v)
return new C.oe(u===0?!1:e,v,u)},
HM(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DD()
w=d.c
if(w===0)return t.a===e?t:t.vE(0)
v=new Uint16Array(s)
C.bbR(t.b,s,d.b,w,v)
u=C.ue(s,v)
return new C.oe(u===0?!1:e,v,u)},
bCu(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ue(r,u)
return new C.oe(!1,u,s)},
bCt(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ue(u,r)
return new C.oe(!1,r,v)},
bCv(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
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
if(w===e.a){if(w){w=$.a3N()
return t.HM(w,!0).bCv(e.HM(w,!0),!0).a9b(w,!0)}return t.bCu(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bCt(v.HM($.a3N(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9b(e,v)
if(C.cO2(u.b,t,e.b,w)>=0)return u.HM(e,v)
return e.HM(u,!v)},
aK(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vE(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9b(e,v)
if(C.cO2(u.b,t,e.b,w)>=0)return u.HM(e,v)
return e.HM(u,!v)},
aN(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DD()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hsn(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ue(w,t)
return new C.oe(q===0?!1:r,t,q)},
bPy(d){var w,v,u,t
if(this.c<d.c)return $.DD()
this.aTJ(d)
w=$.h9D.cp()-$.az7.cp()
v=C.h9F($.h9C.cp(),$.az7.cp(),$.h9D.cp(),w)
u=C.ue(w,v)
t=new C.oe(!1,v,u)
return this.a!==d.a&&u>0?t.vE(0):t},
csU(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aTJ(d)
w=C.h9F($.h9C.cp(),0,$.az7.cp(),$.az7.cp())
v=C.ue($.az7.cp(),w)
u=new C.oe(!1,w,v)
if($.h9E.cp()>0)u=u.mD(0,$.h9E.cp())
return t.a&&u.c>0?u.vE(0):u},
aTJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hsj&&d.c===$.hsl&&g.b===$.hsi&&d.b===$.hsk)return
w=d.b
v=d.c
u=16-A.o.galu(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hsh(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hsh(g.b,f,u,r)}else{r=C.h9F(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h9G(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cO2(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbR(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbR(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i0x(p,r,i);--o
C.hsn(h,j,0,r,o,s)
if(r[i]<h){m=C.h9G(j,s,o,n)
C.bbR(r,l,n,m,r)
while(--h,r[i]<h)C.bbR(r,l,n,m,r)}--i}$.hsi=g.b
$.hsj=f
$.hsk=w
$.hsl=v
$.h9C.b=r
$.h9D.b=l
$.az7.b=s
$.h9E.b=u},
gX(d){var w,v,u,t=new C.cO3(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cO4().$1(w)},
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
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cO5(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cO6(w)
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
while(v.c>1){u=$.hGb()
if(u.c===0)B.bi(D.ba6)
t=v.csU(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bPy(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).he(0)},
$iaTM:1,
$ihM:1}
C.aTa.prototype={
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
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kg(w,w.length,B.U(w).k("kg<1>"))}}
C.SJ.prototype={
d_1(){var w,v
if(this.as==null)this.bfF()
w=this.as
v=w==null?null:w.aqC()
return v==null?null:v.eV()},
bfF(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqC().eV()
this.as=new C.bSm(v)}},
gZ(d){return this.at}}
C.a4J.prototype={
a7(){return"CompressionType."+this.b}}
C.bK6.prototype={
eG(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.zP[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.zP[d])
s.c=t}return v}}
C.bIo.prototype={
cPX(d,e){var w,v,u,t,s,r=this,q=new C.bK6(d)
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
t=r.crb(q)
if(t<0)return!1
if(t===0){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
s=r.cre(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eG(8)
q.eG(8)
q.eG(8)
q.eG(8)
return!0}}return!0},
crb(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eG(8)
if(t!==D.dxT[u])v=!1
if(t!==D.d9c[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cre(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eG(1),d2=((d3.eG(8)<<8|d3.eG(8))<<8|d3.eG(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eG(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c5H()
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
u[w]=l}c9.fr=B.bZ(6,$.hEa(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eG(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eG(1)===0)break
i=d3.eG(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hE9()
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
if(f<h)h=f}c9.c0X(v[j],u[j],o[j],n[j],h,g,r)
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
u[a9]=a7}else{b1=A.o.ar(a8,16)
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
c1=(c1<<8^D.Ip[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.It[b9];++b9
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
if(b8===0){b8=D.It[b9];++b9
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
if(b8===0){b8=D.It[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.It[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.It[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.Ip[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.Ip[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.Ip[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.Ip[c1>>>24&255^c7&255])>>>0
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
c0X(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c5H(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cG2.prototype={
aJW(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bT9(e)
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
r.crz(e)
q=r.r
v=r.f
u=e.aN4(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.baw()
s.d_0(0,u,e,f)
q.push(s)}},
crz(d){var w,v,u,t,s=d.c,r=this.a-20
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
bT9(d){var w,v,u,t,s,r,q,p,o,n
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
o=new B.an5(A.im)
o.aOj(r.eV(),A.im,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cG0.prototype={}
C.ayL.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cG3.prototype={
aJW(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b3()
o.b=e.b3()
w=D.aIa.h(0,e.b3())
o.c=w==null?D.Nj:w
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
o.at=(o.b&1)!==0?D.b_0:D.ER
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.ER&&u>2){w=o.y
w.toString
s=B.rC(w,A.im,null,null)
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
o.at=D.b_1
o.ax=new C.cG0(r,q)
w=D.aIa.h(0,q)
o.c=w==null?D.Nj:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gI(d){return this.bpp().length},
aqC(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rC(new Uint8Array(0),A.im,q,q)
w=r.at
if(w!==D.ER)if(p.gI(0)<=0)r.at=D.ER
else{if(w===D.b_0){p=r.bNR(p)
r.Q=p}else if(w===D.b_1){p=r.bNu(p)
r.Q=p}r.at=D.ER}w=r.c
if(w===D.ak8){v=p.c
u=B.dj()
p=r.Q
if(p.gI(0)<=524288e3)u.b=A.q0.C4(p.eV(),!0,!1)
else{t=B.a9p(A.im,r.w)
p=r.Q
p.toString
A.q0.a4Y(p,t,!0,!1)
u.b=t.Hl()}r.Q.c=v
return B.rC(u.bl(),A.im,q,q)}else if(w===D.ak9){s=B.a9p(A.im,32768)
p=r.Q
v=p.c
C.hJy().cPX(p,s)
u=s.Hl()
r.Q.c=v
return B.rC(u,A.im,q,q)}else return B.rC(p.eV(),A.im,q,q)},
bpp(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
u(d){return this.x},
bbt(d){var w=this.ch,v=C.Ku(C.hzw(w[0].M(0),d))
w[0]=v
v=w[1].a5(0,v.Vz(0,C.Ku(255)))
w[1]=v
w[1]=v.aN(0,C.Ku(134775813)).a5(0,C.Ku(1)).Vz(0,C.Ku(4294967295))
w[2]=C.Ku(C.hzw(w[2].M(0),w[1].mD(0,24).M(0)))},
aT7(){var w=(this.ch[2].Vz(0,C.Ku(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bNR(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rC(new Uint8Array(0),A.im,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bbt(u[v.c++]^r.aT7())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aT7()
r.bbt(s)
u&2&&B.aj(t)
t[w]=s}return B.rC(t,A.im,q,q)},
bNu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gI(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i0b(k,w,v)
p=new Uint8Array(B.cb(A.aH.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cb(A.aH.dt(q,v,k)))
if(!C.hrR(A.aH.dt(q,k,k+2),u))throw B.W(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bGY(k,new Uint8Array(16),p)
k=x.S
m=J.a6e(0,k)
m=n.r=new C.coC(m)
m.c=!0
m.b=m.boG(!0,new C.aui(p))
if(m.c)m.d=B.bp(D.oK,!0,k)
else m.d=B.bp(D.zC,!0,k)
l=C.hq1(C.hq3(),64)
l.bi4(new C.aui(o))
n.w=l
n.cZy(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hrR(k,m))throw B.W(B.fl("macs don't match"))
return B.rC(r,A.im,null,null)}}
C.baw.prototype={
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
if(v>=4){s=B.rC(t,A.im,null,null)
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
t=new C.cG3(D.Nj,n,D.ER,B.a([C.Ku(0),C.Ku(0),C.Ku(0)],x.f3))
n.ch=t
t.aJW(0,f,g)},
u(d){return this.at}}
C.cG1.prototype={
cPY(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cG2(B.a([],x.fT))
this.a=g
g.aJW(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTa(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SJ(o,A.o.ar(Date.now(),1000),0):C.hi2(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hi2(o,q.w,q)
if(k.as==null)k.bfF()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.an5(A.im)
j.aOj(o,A.im,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GL(!1).E0(i,0,h,!0)}}return v}}
C.bGY.prototype={
cZy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CX(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hJh(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bRo(u,0,w,0,o)}else{o===$&&B.c()
q.bNV(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
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
C.coH.prototype={}
C.coL.prototype={}
C.coF.prototype={}
C.aui.prototype={}
C.coK.prototype={
cQc(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bi4(new C.aui(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bSv(n.a,n.b,t,s,r)
r+=v}A.aH.h9(f,g,g+w,s)
return o.a.c},
bSv(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
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
C.coG.prototype={}
C.coE.prototype={}
C.auj.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auj){v=this.a
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
w=A.o.tR(w,e.gc1d())
if(!w)e.gc1d()
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
C.coJ.prototype={
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
CX(d,e,f,g){var w=this.cpV(e,f,g)
f+=w
g-=w
w=this.cpW(e,f,g)
this.cpM(e,f+w,g-w)},
LF(d,e){var w,v=this,u=C.hq2(v.a),t=u.a
t===$&&B.c()
t=C.hfF(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hfF(w,3)
v.cpQ()
v.cpN(u)
v.auu()
v.cjW(d,e)
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
cpM(d,e,f){while(f>0){this.aq5(d[e]);++e;--f}},
cpW(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b4z(d,e)
e+=4
f-=4
w.aN7(4)
v+=4}return v},
cpV(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aq5(d[e]);++e;--f;++v}return v},
cpQ(){this.aq5(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aq5(0)}},
cpN(d){var w,v=this,u=v.w
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
cjW(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iy===this.d,s=0;s<w;++s){r=v[s]
q=J.oq(A.aH.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdd(d){return this.f}}
C.coM.prototype={
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
C.coI.prototype={
bi4(d){var w,v,u,t,s=this,r=s.a
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
C.coD.prototype={}
C.coC.prototype={
a3c(d){return(D.oK[d&255]&255|(D.oK[d>>>8&255]&255)<<8|(D.oK[d>>>16&255]&255)<<16|D.oK[d>>>24&255]<<24)>>>0},
boG(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
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
for(r=1;r<=10;++r){p=(p^f.a3c((m>>>8|(m&$.qr[24])<<24)>>>0)^D.cLh[r-1])>>>0
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
bRo(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oq(A.aH.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
bNV(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oq(A.aH.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
a4=D.zC[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zC[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zC[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zC[o>>>8&255]
i=D.zC[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zC[b0&255]
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
C.bSl.prototype={}
C.bSm.prototype={
gI(d){var w=this.a.length
return w},
aqC(){return B.rC(this.a,A.im,null,null)}}
C.bc5.prototype={
vy(d){return C.i3x(d)}}
C.cz9.prototype={
Nj(d){var w=d.w,v=Math.max(1,A.j.cK(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.ab3(v,t+20,u+16,t,u,B.uo(d.x))},
nD(d){return!1}}
C.bTn.prototype={
cK_(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bTo(),x.E))},
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
return B.b(p.bDS(f,r),$async$mW)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mW,v)}}
C.axp.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9n.prototype={
A(d,e){if(e==null)return!1
if(J.bU(e)!==B.b2(this))return!1
return e instanceof C.a9n&&e.a===this.a},
gX(d){return B.bw(B.b2(this),B.xh(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b2(this)===D.h1w)return"["+(w+B.ea(this.a))+"]"
return"[ObjectKey "+(w+B.ea(this.a))+"]"}}
C.a20.prototype={
S(){return new C.aKN(B.aR(x.N))},
cXF(d){return this.d.$1(d)},
cVl(){return this.e.$0()}}
C.aKN.prototype={
Y(){this.a3()
this.PJ()},
PJ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cVl(),$async$PJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fh1(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PJ,v)},
ZS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fh5(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fh6(t))
w=3
return B.b(C.aoQ(p),$async$ZS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fh7(t,s,p))
w=4
return B.b(t.PJ(),$async$ZS)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
a27(d){return this.cu6(d)},
cu6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a27=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fh2(t))
s=J.t(d,"id")
w=3
return B.b(C.c3m(J.k(s==null?"":s)),$async$a27)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fh3(t))
w=1
break}q=C.hf4(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cXF(B.a([q],x.D)),$async$a27)
case 4:if(t.c==null){w=1
break}t.m(new C.fh4(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a27,v)},
PI(d,e){return this.bOm(0,e)},
bOm(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.fgX(q),r,null,!0,!0,x.y),$async$PI)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fgY(t))
s=s.h(e,"id")
w=4
return B.b(C.aoP(J.k(s==null?"":s)),$async$PI)
case 4:if(t.c==null){w=1
break}t.m(new C.fgZ(t))
w=5
return B.b(t.PJ(),$async$PI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
cIZ(d){var w=B.bj(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iO[B.bK(v)-1]+" "+B.bV(v)},
aSZ(d,e){var w=null,v=B.n(e*0.3)
return B.q(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.PW,A.n),w,e,w,w,w,w,w,e)},
aSY(d){return this.aSZ(d,44)},
b9M(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.PW:u,r=B.n(14),q=B.X(e,t?A.c:A.aD,u,u,u,17),p=x.p
q=B.a([q,Z.Eu,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aD,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([Z.Eu,B.q(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bHc,u,u,u)],p))}return B.E(B.aA(A.c5,B.cT(u,B.A(q,A.m,u,A.ba,A.i,0,u,u),u,u,A.b4,new B.o(u,u,u,r,u,s,A.n),A.fZ,u,u,u,u,A.qv,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fhb(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cnT(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d9.j(0.14):D.ZL,n=B.n(18),m=p?A.d9:A.dr
m=B.L(m,A.r,p?1.8:1)
w=this.aSY(A.qK)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aVV,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cU,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aVX,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.PW:q
u=p?q:B.L(A.aV,A.r,1.6)
r=p?D.bYB:q
return B.aA(q,B.cT(q,B.A(B.a([w,A.bd,t,B.cT(q,r,q,q,A.b4,new B.o(q,q,u,q,q,v,A.a7),A.fS,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b4,new B.o(o,q,m,n,q,q,A.n),A.fS,q,q,q,A.d3,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fh0(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cvJ(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cIZ(J.k(o==null?"":o))
o=B.n(18)
w=B.L(A.dr,A.r,1)
v=r.aSY(A.P2)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aVV,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cU,B.d(p+" slides"+t,q,q,q,q,q,q,D.aVX,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b6f(A.hW,A.bw,"Bring it back",r.r?q:new C.fh8(r,d))
return B.q(q,B.A(B.a([v,A.bd,t,p,A.bl,r.b6f(A.ef,A.c_,"Delete",r.r?q:new C.fh9(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.ZL,q,w,o,q,q,A.n),q,q,q,A.d3,D.bBq,q,q,q)},
b6f(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hb(B.aA(w,B.q(w,B.X(d,v?A.aV:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
auK(d,e,f){var w=null
return new B.D(D.bAq,B.x(B.a([B.X(d,A.aV,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fxZ,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fq0,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.cc
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.c0,x.w).w
u=B.q(i,i,A.f,i,i,new B.o(A.aV,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aSZ(A.zo,46),A.bd,D.bIb],t)
if(j.r)s.push(D.eqK)
s.push(B.aG(i,i,i,i,A.t1,i,i,i,new C.fhe(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.L(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.X,u,new B.D(D.bE9,s,i),B.q(i,B.A(B.a([j.b9M(0,A.z5,"Save",j.a.c.length),j.b9M(1,A.Pl,"Saved",o.gI(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bD9,A.ey,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c_:A.bw).j(0.12)
s=B.n(14)
r=B.L((j.y?A.c_:A.bw).j(0.4),A.r,1)
p=j.y
n=p?A.P6:A.ea
n=B.X(n,p?A.c_:A.bw,i,i,i,18)
m=j.x
m.toString
q.push(B.q(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.Vi,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bD5,A.it,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.ftM,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fwY,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fhf(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.m,i,A.e,A.i,0,i,i),A.X],t)
if(j.a.c.length===0)s.push(j.auK(A.qK,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cnT(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eqg)
else if(j.e==null)s.push(j.auK(A.a2f,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.auK(A.pn,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cvJ(r.gR(r)))
A.d.v(u,s)}q.push(new B.dn(1,A.co,B.cl(u,i,i,A_.alX,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc8h()
p=s?i:D.PW
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cA,18)],x.V)
u=u.a
m=u===0
k=B.X(A.z5,m?A.jV:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bDM,B.aA(i,B.cT(i,B.A(B.a([k,A.aa5,new B.dn(1,A.co,B.ev(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jV:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e_),i)],t),A.m,i,A.ba,A.i,0,i,i),i,i,A.b4,new B.o(s,i,i,o,n,p,A.n),A.fZ,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.X)
return B.q(i,B.bm(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b70,i,i,i,i,i,i,i,i)}}
C.oG.prototype={
ak(){return B.H(["id",this.a,"doc",this.b.ak(),"updatedAt",this.c.ab().ag()],x.N,x.z)}}
C.ZI.prototype={
S(){return new C.azj(B.a([],x.k),B.f3(null,x.H))},
ge3(){return this.c}}
C.azj.prototype={
Y(){this.a3()
this.PT()},
PT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a30(t.a.c),$async$PT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cPs(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
cC1(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qz(t.d,new C.cPv(d))
v=w<0
if(v&&C.i0A(d))return t.f
u=t.d
if(v)J.pT(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h5m(new C.cPw(t),v)
return t.f=t.f.bG(new C.cPx(t,d),v).eM(new C.cPy())},
Ja(d,e,f){return this.chq(0,e,f)},
b0_(d,e){return this.Ja(0,e,!1)},
chq(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ja=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cd(B.eb(new C.cPr(t,e),!1,null,x.H)),$async$Ja)
case 3:w=4
return B.b(t.f,$async$Ja)
case 4:w=5
return B.b(t.PT(),$async$Ja)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ja,v)},
b_e(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dKE:d
this.Ja(0,new C.oG(w,v,new B.V(Date.now(),0,!1)),!0)},
c7K(){return this.b_e(null)},
aex(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aex=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPz(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aex)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_e(s)
case 1:return B.h(u,v)}})
return B.i($async$aex,v)},
J9(d,e){return this.bOd(0,e)},
bOd(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cPm(e),s,null,!0,!0,x.y),$async$J9)
case 3:if(g!==!0){w=1
break}t.m(new C.cPn(t,e))
w=4
return B.b(t.f,$async$J9)
case 4:w=5
return B.b(C.aho(t.a.c,e.a),$async$J9)
case 5:w=6
return B.b(t.PT(),$async$J9)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J9,v)},
DL(d){return this.bGl(d)},
bGl(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cPi(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DL)
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
return B.b(t.b0_(0,d),$async$DL)
case 9:w=5
break
case 7:w=10
return B.b(F.hfH(r,d.b,null),$async$DL)
case 10:w=5
break
case 8:w=11
return B.b(t.J9(0,d),$async$DL)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DL,v)},
c19(){var w,v,u,t,s=null,r=[D.dKH,D.dKF,D.dKG],q=new C.cPp(),p=B.n(26),o=x.V,n=B.a([new B.ac(0,A.G,A.d2.j(0.4),A.eX,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dun[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.q(s,B.d(v,s,s,s,s,s,s,A.oY,s,s,s),A.f,s,s,new B.o(u,s,s,new B.bg(t,t,t,t),s,s,A.n),s,s,s,s,A.oo,s,s,s))}return B.q(s,B.A(B.a([B.E(B.x(B.a([D.fXO,A.Q,B.bW(A.bH,l,A.bt,s,6,6),A.aR,B.aA(s,B.q(s,D.f7j,A.f,s,s,new B.o(A.c,s,s,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cL,10)],o),s,A.n),s,s,s,s,V.aml,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cPo(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.i,0,A.p),1),new B.a5(130,110,new B.an(A.A,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.m,s,A.e,A.i,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c63,A.n),s,s,s,s,D.bEj,s,s,s)},
bGj(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cA,14)],x.V),r=x.p
s=B.q(v,B.bx(B.n(6),new B.an(A.a0,v,A.b2,A.t,B.a([B.ev(A.A,F.apr(d.b),A.f,A.bZ),D.ewL,B.ao(v,B.aA(v,B.q(v,D.bZr,A.f,v,v,D.b7Y,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPd(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fn6,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fF(0.6470588235294118,s,v),A.Q,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.ftY,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cPe(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cPf(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eG(B.a([new B.D(O.akS,B.hb(B.aA(s,B.q(s,A.arL,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.H,12)],x.V),E.wP,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc96(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nt,s,s,s,!0,s,s,s,s,s,D.fXS,s,s,s,1,s,!0)
if(t.e)r=D.bbr
else{w=t.c19()
v=B.a([D.fJ0,A.ae],r)
if(J.cI(t.d)){u=B.n(999)
v.push(B.q(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fmx,s,s,s),A.f,s,s,new B.o(D.bgG,s,s,u,s,s,A.n),s,s,s,s,A.yM,s,s,s))}r=B.a([new B.oa(A7.a06,new B.mq(w,s),s),new B.oa(D.bDG,new B.mq(B.A(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.cr(t.d))r.push(D.fev)
else r.push(new B.oa(D.bD7,B.PH(new B.oK(new C.cPA(t),J.ad(t.d),!0,!0,!0,0,B.tl(),s),D.baF),s))
r=B.vX(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bfh,r,s,!1,!1,s,s)}}
C.ZG.prototype={
S(){return new C.azf(B.a([],x.bx))},
UP(d){return this.d.$1(d)}}
C.aGC.prototype={}
C.azf.prototype={
b39(d,e,f){var w=$.aw(),v=new B.au(new B.ba(d,A.b5,A.aP),w),u=this.gb_Z()
v.aV(0,u)
w=new B.au(new B.ba(e,A.b5,A.aP),w)
w.aV(0,u)
return new C.aGC(v,w,f)},
EA(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cz(A.qt,new C.cOH(v))},
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
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b5,A.aP),v)
o.aV(0,t)
n=new B.au(new B.ba(p.b,A.b5,A.aP),v)
n.aV(0,t)
r.push(new C.aGC(o,n,p.c))}if(r.length===0)r.push(m.b39("Page 1","",""))},
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.K)(s),++q){p=s[q]
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
c94(){this.m(new C.cOG(this))
this.EA()},
aZU(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cOJ(w,d,v))
w.EA()},
c95(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cOR())
this.EA()
$.aW.x1$.push(new C.cOS(w))},
Rc(d){return this.cnJ(d)},
cnJ(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
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
n=J.aiX(o,".png")?"image/png":"image/jpeg"
r.m(new C.cOK(d,n,p))
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
return B.i($async$Rc,v)},
yo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hDo(r,t.gpw()),$async$yo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cOI(t,s))
t.EA()
case 1:return B.h(u,v)}})
return B.i($async$yo,v)},
co0(d){var w,v=this,u=null,t=F.fMv(d.c)
if(t==null)return new B.bL(A.a6,u,u,B.ho(D.bSA,D.fLz,new C.cOM(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.a0,u,A.ad,A.t,B.a([B.bx(B.n(12),B.fR(t,A.A,u,u,A.cj,A.bZ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b6g(A.jH,new C.cON(v,d)),A.bl,v.b6g(A.cz,new C.cOO(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6g(d,e){var w=null
return B.aJ(!1,A.a3,!0,w,B.aO(!1,w,!0,new B.D(A.hG,B.X(d,A.c,w,w,w,18),w),A.cR,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aT,0,w,w,A.cR,w,w,A.aj)},
JN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$JN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bk(),$async$JN)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hfH(s,t.gpw(),new C.cOQ(t)),$async$JN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$JN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eG(B.a([new B.D(A.qu,B.ho(D.bXk,D.fRJ,m.gaAu(),B.fs(l,l,l,l,l,l,l,l,l,l,l,A.bN,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aG(l,l,l,l,A.arK,l,l,l,new C.cOT(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.YM,l,1,l,l,l,!1,l,!1,E.nt,l,l,l,!0,l,l,l,l,l,D.fMq,l,l,l,1,l,!0),i=Ay.aWr(N.lF,A.c,Ag.Xx,A.oD,D.fNa,m.gc93()),h=B.n(18),g=m.gays(),f=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j7,12)],x.V)
f=B.aA(l,B.q(l,new B.a5(92,142.1818181818182,B.ev(A.A,F.apr(m.gpw()),A.f,A.dz),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.q(l,B.A(B.a([f,A.ev,B.E(B.x(B.a([D.fZs,A.aw,B.d(F.he7(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fzO,l,l,l),A.X,B.dh(E.ar2,E.aWK,g,B.bo(A.d2,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.i,0,A.p),1)],k),A.m,l,A.e,A.i,0,l,l),A.f,l,l,new B.o(E.YM,l,l,h,l,l,A.n),l,l,l,l,A.bh,l,l,l)
g=m.d
g===$&&B.c()
g=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),g,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.oW,!0,A.a5,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),w,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aC,g,A.Q,w,A.Q,B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),f,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(12),A.dn),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l),A.aR],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(N.lF.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fAl,l,l,l)
r=B.aG(l,l,l,l,D.bVY,l,l,l,v===0?l:new C.cOU(m,v),l,l,l,l,"Move up",A.ce)
q=h.length
p=B.aG(l,l,l,l,D.c1r,l,l,l,v===q-1?l:new C.cOV(m,v),l,l,l,l,"Move down",A.ce)
q=q===1?l:new C.cOW(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.q(l,B.x(B.a([new B.c6(A.aL,A.e,A.i,A.m,l,A.p,l,0,B.a([s,A.b3,r,p,B.aG(l,l,l,l,B.X(A.ef,A.pe,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.ce)],k),l),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].a,l,l,l,l,l,2,new B.e5(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(o,o,o,o),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cf,!0,A.a5,l,A.ao,l,l,l,l),A.am,m.co0(h[v]),B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),h[v].b,l,l,l,l,l,2,new B.e5(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.bg(n,n,n,n),A.dn),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a5,l,A.ao,l,l,l,l)],k),A.m,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(E.nt,l,new B.bH(u,u,u,u),new B.bg(w,w,w,w),l,l,A.n),l,l,new C.a9n(g),A.ei,D.bBG,l,l,l))}return B.oH(!0,B.c4(j,E.aiP,B.cl(f,l,l,D.bC9,l,l,A.ah,!1),l,!1,!1,i,l),new C.cOX(m),x.C)}}
C.azh.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c_:E.nt,q=B.n(16),p=B.n(16),o=s?A.az.j(0.08):A.c.j(0.04)
s=s?A.az.j(0.16):A.d2.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eL,B.aJ(!1,A.a3,!0,t,B.aO(!1,q,!0,B.q(t,B.A(B.a([B.q(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(u.e,t,t,t,t,t,t,D.aVh,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bh,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.arK.prototype={
S(){return new C.aFq()}}
C.aFq.prototype={
Y(){this.a3()
this.a_y()},
by(d){this.bJ(d)
if(d.c!=this.a.c)this.a1X()},
a1X(){var w=0,v=B.j(x.H),u=this,t
var $async$a1X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a1X)
case 2:u.d=null
if(u.c!=null)u.m(new C.ekQ(u))
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
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.Zl(B.cF(n,0,null),new B.Q3(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iV(0).df(0,A.qq),$async$a_y)
case 7:if(r.c==null){w=1
break}r.d.tW(!1)
r.m(new C.ekO(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ekP(r))
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
cc8(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hg(0)
w.m(new C.ekR(w))}else{v.qo(0)
w.m(new C.ekS(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bL
n=B.n(8*n.d)
m=B.a([D.jy.j(0.92),D.Mb.j(0.95)],x.O)
w=B.L(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qN,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c3(B.at(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.R,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),A.bi)}if(p.f)return B.at(B.X(A.aqh,A.aD,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bcj
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.ev(A.A,new B.a5(r,q,new B.AF(s,o),o),A.t,A.bZ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.q(o,B.X(A.hs,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a7),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcc7(),o,o,o,o,o,o,!1,A.a4)}}
C.y4.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jA.prototype={}
C.aeh.prototype={
B(d){return B.pa(new C.e7l(this,B.R(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adG.prototype={
B(d){var w,v,u=null,t=B.R(d).ax.a===A.J,s=B.n(18),r=B.n(18),q=B.L(D.jy.j(t?0.35:0.4),A.r,1),p=t?D.MQ:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cA,14)],o),m=B.n(10),l=B.L(A.c3.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],o)
w=this.c
o=B.E(B.q(u,new B.fF(0.5625,C.ijq(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.amQ,u,u,u,u),1)
m=D.jy.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jy,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aJ(!1,A.a3,!0,u,B.aO(!1,s,!0,B.q(u,B.x(B.a([o,B.q(u,B.x(B.a([l,A.cU,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aD:D.bnZ,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.al8,u,u,u)],v),A.al,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.y7.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o0.prototype={}
C.blk.prototype={
a_H(d){var w=null
return new B.bL(A.a6,w,w,B.BP(A.A,B.q(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ccC(){return this.a_H(1)},
az8(d){var w=null,v=B.n(8),u=B.L(A.ip,A.r,0.9)
return B.q(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.agr,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.q(v,v,A.f,v,v,new B.o(v,v,B.L(A.ip,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.q(v,v,A.f,v,v,new B.o(v,v,B.L(A.ip,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.p(-8.36,0))],u),A.m,v,A.ba,A.i,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.az8("TAARIFA ZA WANANDOA"),A.am,w.ccC(),A.cU,w.a_H(0.9),A.cU,w.a_H(0.7),A.Q,w.az8("TAMKO LA MAKUBALIANO"),A.fK,w.a_H(1),A.cU,w.a_H(0.95),A.Q,w.az8("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.aek.prototype={
B(d){return B.pa(new C.epC(B.R(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.ag_.prototype={
B(d){var w,v,u,t,s,r=null,q=B.R(d).ax.a===A.J,p=B.n(18),o=B.n(18),n=B.L(A.aB.j(q?0.35:0.4),A.r,1),m=q?D.bnv:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cA,14)],l),j=B.n(10),i=B.L(A.aB.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dG,6)],l)
w=this.c
v=C.heD(w.a)
if(v==null)v=A.d.gH(D.Sv)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.q(r,new B.fF(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fR(C.heC(v.d),A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),0,0,0),new B.D(A.alN,new C.blk(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.amQ,r,r,r,r),1)
j=A.aB.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.MR,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aJ(!1,A.a3,!0,r,B.aO(!1,p,!0,B.q(r,B.x(B.a([l,B.q(r,B.x(B.a([i,A.cU,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aD:D.bfV,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.al8,r,r,r)],s),A.al,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.l8.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8Q.prototype={}
C.WQ.prototype={
S(){var w=$.aw()
return new C.aFH(new B.cw(null,x.A),new B.au(A.av,w),new B.au(A.av,w),B.mT(0,null,null),A.d.gH(D.a5l),D.dV3,B.a([],x.L),B.a([],x.gE))}}
C.aFH.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.A5(C.fQo(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fPk().bG(new C.esz(v),w)
$.rd().jo(0,"assets/images/ngmy_logo.png").bG(new C.esA(v),w).eM(new C.esB())},
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
return B.b(C.hDF(m,p),$async$Js)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFC(new B.q5(o,1),m),$async$Js)
case 10:if(r.c!=null)r.m(new C.esb(r,o))
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
return B.b(C.hDF(s,q),$async$XF)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFC(new B.q5(r,1),s),$async$XF)
case 4:if(t.c!=null)t.m(new C.es7(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XF,v)},
afq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.esi(q))
t=4
q.a.toString
p=C.inW()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afq)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.esj(q,n))
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
if(q.c!=null)q.m(new C.esk(q))
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
break}q.m(new C.esd(q,i))
t=4
q.a.toString
p=C.inV()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_M)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ese(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.esf(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.esg(q))
$.aW.x1$.push(new C.esh(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_M,v)},
ccS(d){this.m(new C.esc(this,d))},
ER(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ER=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.es9(q))
t=4
w=7
return B.b($.aW.gmS(),$async$ER)
case 7:w=8
return B.b(B.bQ(A.mQ,null,x.H),$async$ER)
case 8:k=$.aW.ap$.x.h(0,q.d)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The page is not ready yet.")
w=9
return B.b(p.md(1800/p.gZ(0).a),$async$ER)
case 9:o=e
w=10
return B.b(o.hs(A.hd),$async$ER)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahq(J.eQ(A.dM.gaU(n)),"ngmy_news.png","image/png"),$async$ER)
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
if(q.c!=null)q.m(new C.esa(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ER,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aG(a2,a2,a2,a2,A.ln,a2,a2,a2,new C.esq(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aG(a2,a2,a2,a2,D.bXQ,a2,a2,a2,new C.esr(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aG(a2,a2,a2,a2,A.oC,a2,a2,a2,a4?a1.gb1h():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eG(v,a2,a2,!0,!0,A.BV,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f7u,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eX,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.q(a2,new B.fF(0.7142857142857143,B.ev(A.A,new B.em(new C.b2J(t,s,r,a1.x,a2),a1.d),A.f,A.dz),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
t=a1.as?a2:a1.gccR()
t=B.a([B.E(B.dh(D.bYC,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cf,a2,a2,a2),t,B.bo(D.u6,a2,a2,a2,A.c,A.h2,a2,a2,new B.b9(B.n(14),Q.vM),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.n(10),B.fR(r,A.A,a2,a2,A.cj,A.bZ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aG(a2,a2,a2,a2,D.bVf,a2,a2,a2,a1.as?a2:a1.gbMP(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
q=B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aUP("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dok[o]
p.push(B.mZ(a2,D.u6,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pN,a2,a2,a2),A.hf,new C.ess(a1,n),a2,a2,Q.vM,a2))}p=B.bW(A.bH,p,A.bt,a2,6,8)
m=a1.Q
m=B.bW(A.bH,B.a([D.fY0,A.bd,B.jt(a2,a2,a2,D.fHH,a2,new C.est(a1),m==="en",a2,a2,a2,a2),A.ae,B.jt(a2,a2,a2,D.fHC,a2,new C.esu(a1),m==="sw",a2,a2,a2,a2)],w),A.vG,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tz,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cW(D.a5l,0,B.dA(10,"count",x.S),j),h=i.$ti,i=new B.bO(i,i.gI(0),h.k("bO<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTh(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cW(D.a5l,10,a2,j),h=j.$ti,j=new B.bO(j,j.gI(0),h.k("bO<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTh(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gccU()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bF.j(0.4),A.H,18)],v)
v=B.a([u,A.aC,new B.D(A.cw,s,a2),t,A.aC,new B.D(A.cw,r,a2),q,A.Q,p,A.X,m,A.aC,new B.D(A.cw,l,a2),new B.a5(a2,78,k,a2),A.Q,new B.a5(a2,78,j,a2),A.aR,B.aA(a2,B.q(A.A,B.A(B.a([D.bYw,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fB,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uW,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dW,B.A(B.a([D.dFl,A.at,D.bIx],w),A.m,a2,A.e,A.i,0,a2,a2),A.Q],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a6
q=e?A.b7.j(0.35):D.u6
p=new B.aP(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bL(r,a2,a2,B.q(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fxJ,a2,a2,a2),A.f,a2,A9.Xm,new B.o(q,a2,new B.bH(d,d,d,d),new B.bg(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.it,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d9G[o]
t.push(B.mZ(a2,D.u6,B.d(a0,a2,a2,a2,a2,a2,a2,A.Ks,a2,a2,a2),A.hf,new C.esv(a1,a0),a2,a2,Q.vM,a2))}u.push(B.bW(A.bH,t,A.bt,a2,6,8))
u.push(A.X)
t=B.E(B.aM(a2,A.Z,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aUP("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.esw(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gccT()
u.push(B.A(B.a([t,A.ae,B.Ix(A.zs,s,B.nV(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aC)
t=a1.as?a2:a1.gb1h()
u.push(B.dh(A.oC,D.fTq,t,B.bo(A.cY,a2,a2,a2,a2,A.Kc,a2,a2,new B.b9(B.n(16),A.a1),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.aly,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.L(E.km.j(0.5),A.r,1)
v.push(B.bR(0,B.e8(B.at(B.q(a2,B.A(B.a([E.aa6,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.ju,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.BL,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bEB,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.BV,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aUP(d){var w=null
return B.bs(w,new B.b6(4,B.n(14),A.a1),w,A.eU,w,w,w,w,!0,w,w,w,w,w,w,D.u6,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Ey,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTh(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bF:A.bz
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.q(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kr,t,t,t,t),A.fK],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.q(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bAF,t,t,t,t))
w.push(A.cU)
w.push(new B.D(A.jn,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.q(t,B.x(w,A.m,t,A.ba,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iK,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.es8(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.A5.prototype={
beR(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.A5(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cNJ(d){var w=null
return this.beR(w,w,w,w,w,d,w,w,w,w)},
ak(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aEy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciL(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciJ(),B.U(w).k("N<1,m>")).bZ(0,new C.ciK())
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
gG3(d){return this.f}}
C.tJ.prototype={
a7(){return"NewsLayout."+this.b}}
C.C3.prototype={
a7(){return"NewsFrame."+this.b}}
C.lv.prototype={}
C.b2J.prototype={
rU(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1j(d,e,f,g){return this.rU(d,e,null,1.25,f,A.bs,g)},
Qv(d,e,f,g,h){return this.rU(d,e,f,1.25,g,A.bs,h)},
aze(d,e,f,g,h){return this.rU(d,e,null,f,g,A.bs,h)},
azd(d,e,f,g,h){return this.rU(d,e,f,g,0,A.bs,h)},
b1l(d,e,f,g,h){return this.rU(d,e,null,f,0,g,h)},
ccY(d,e,f,g,h,i){return this.rU(d,e,f,g,0,h,i)},
azc(d,e,f,g){return this.rU(d,e,null,f,0,A.bs,g)},
aft(d,e,f){return this.rU(d,e,null,f,0,A.bs,A.cT)},
b1k(d,e,f,g,h){return this.rU(d,e,f,g,0,h,A.cT)},
ccX(d,e,f,g){return this.rU(d,e,null,f,0,g,A.cT)},
ccW(d,e,f,g){return this.rU(d,e,f,g,0,A.bs,A.cT)},
afu(d,e,f,g,h,i){return this.rU(d,e,f,g,h,A.bs,i)},
b1i(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iG(new B.en(d,u,u,A.cH,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.bW,new B.jf(1),u,u,h,u,A.bX,u,A.ct)
v.o5(g)
if(!v.b.a.c.gaGk())return w
w-=2}return j},
afr(d,e,f,g,h,i,j,k){return this.b1i(d,e,f,g,h,i,j,k,A.bs)},
aBp(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.q(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a5(w,3,w,w),B.q(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aBo(d){return this.aBp(null,!1,d)},
air(d,e){return this.aBp(null,d,e)},
cuQ(d,e){return this.aBp(d,!1,e)},
gb3w(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaXw(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pe(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afr(w.gaXw(),u,A.R,d,g,h,i,1.02)
return B.d(w.gaXw(),v,g,A.a2,v,v,v,w.azd(u,t,f,1.02,A.R),e,v,v)},
aXB(d){return this.Pe(d,A.K,null,2,78,30)},
acG(d,e,f,g,h){return this.Pe(d,e,null,f,g,h)},
c12(d,e,f,g,h){return this.Pe(d,A.K,e,f,g,h)},
c11(d,e,f){return this.Pe(d,A.K,null,e,f,30)},
Sv(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bL
w=v.d.as
return new B.D(A.jC,B.d(s,u,g,A.a2,u,u,u,v.b1k(w,v.b1i(t,w,A.cT,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b9q(d){return this.Sv(d,A.K,null,3,24)},
aCT(d,e,f,g){return this.Sv(d,e,null,f,g)},
cCv(d,e,f){return this.Sv(d,A.K,e,3,f)},
b9r(d,e){return this.Sv(d,e,null,3,24)},
cCt(d,e){return this.Sv(d,A.K,null,3,e)},
cCu(d,e,f){return this.Sv(d,e,null,3,f)},
asM(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f2,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qv("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.q(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O9(){return this.asM(null,!0)},
asL(d){return this.asM(null,d)},
bIM(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bL
return new B.D(A.i9,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.ccX(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
w5(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb3w(),h=A.o.ar(j.bE(B.c1(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.ibm(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1j(k,12,1.2,A.R),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afr(i,v,A.R,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afr(i.toUpperCase(),v,A.R,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.q(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eO,l,l,l,m.afu(v,u*0.84,h,1,1,A.R),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.Q,B.A(B.a([B.d(C.bES(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iR,A.i,0,l,l),A.am,m.air(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.q(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.E(B.d(i,l,1,A.eO,l,l,l,m.azc(v,u*0.9,1,A.R),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.X,B.A(B.a([B.d(C.bES(j),l,l,l,l,l,l,m.Qv(k,13,B.b0(h),0.6,A.R),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iR,A.i,0,l,l),A.Q,m.cuQ(B.b0(h),3)],w),A.m,l,A.e,A.i,0,A.p)
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
return B.x(B.a([B.A(B.a([v,A.ae,B.eK(A.A,-0.03,B.q(l,B.d("NEWS",l,l,l,l,l,l,m.rU(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dn(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afu(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.R),A.dX,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.Q,B.q(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l)
t=m.air(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azc(v,u,1,A.R),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.air(!0,1.4),A.aw,B.d(C.bES(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBo(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aze(v,u,1,3,A.R),A.K,l,l),A.Q,m.air(!0,1.2),A.aw,B.A(B.a([B.d(C.bES(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iR,A.i,0,l,l),A.aw,m.aBo(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adS(d){return this.w5(d,!1)},
afs(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.q(w,B.d(d,w,w,w,w,w,w,this.afu("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
ccV(d,e){return this.afs(d,null,e,null)},
aZM(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b0(this.d.w).j(0.75),s=this.azd("Roboto",15,t,1,A.cC),r=B.X(E.aos,t,w,w,w,18),q=A.a.aB(A.oH[B.bK(v)-1],0,3),p=A.a.b_(A.o.u(B.fP(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.q(w,w,A.f,t.j(0.4),w,w,w,20,w,A.h0,w,w,w,1),B.X(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axV(){return this.aZM(A.n_)},
b6t(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afu("Roboto",this.afr(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
aBs(d,e,f){return this.b6t(d,e,f,30)},
aCW(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bL
return new B.D(A.wa,B.d(v,w,e,A.a2,w,w,w,this.ccW("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b9v(d){return this.aCW(d,3,22)},
cCG(d,e){return this.aCW(d,e,22)},
ue(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fR(r,A.A,s,s,A.cj,A.bZ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BB(D.bHt,w,s)
if(v==="sepia")w=new B.BB(D.bHs,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.q(s,B.at(B.X(A.z0,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c3(s,new B.o(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.L,A.YH.j(0.38)],x.O),s,s),A.n),A.bi))
return new B.a5(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.L(B.b0(i),A.r,3)
i=B.L(B.b0(i),A.r,1)
return B.q(j,B.q(j,k.ue(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.ey,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.me,j,j,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.em0,14)],x.V)
v=k.ue(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eK(A.A,-0.035,B.q(j,B.x(B.a([v,B.E(B.at(B.d(u,j,2,A.a2,j,j,j,k.b1k(i.as,13.5,D.bhF,1.1,A.cF),A.K,j,j),j,j,j),1)],x.p),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(D.blw,j,j,j,w,j,A.n),j,e,j,j,D.bC4,j,j,d),j)
case 3:w=B.n(30)
i=B.L(B.b0(i.x),A.r,5)
return B.q(j,B.bx(B.n(25),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.L(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a5(d,e,B.at(B.q(j,B.hR(k.ue(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a7),j,t,j,j,A.me,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ac(0,A.G,A.w.j(0.3),D.elH,10)],x.V)
return B.eK(A.A,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.q(j,k.ue(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.rR,j,j,j),0,0,0),B.ao(j,B.eK(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ao(-10,B.eK(A.A,-0.6,B.q(j,j,A.f,A.bN.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a5(d,e,B.b4(B.nP(k.ue(d,e),A.aq,D.hrf),new C.bel(i,j),j,j,A.ay),j)
case 7:i=x.p
w=B.a([k.ue(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bh(s));++m){l=new B.aP(2,2)
n.push(B.q(j,j,A.f,j,j,new B.o(A.bP,j,j,new B.bg(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cL(0,p,0,o,j,j,new B.c6(A.aL,A.qR,A.i,A.m,j,A.p,j,0,n,j),j))}return B.q(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.em,j,j,j,e,j,j,D.bGH,j,j,d)
case 8:w=d/2
v=B.xs(A.fI,new B.aP(w,w))
i=B.L(B.b0(i.x),A.r,5)
w-=5
return B.q(j,B.bx(B.xs(A.hw,new B.aP(w,w)),k.ue(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h1,22)],x.V)
return B.q(j,k.ue(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bU,j,j,d)
case 10:return new B.a5(d,e,B.nP(k.ue(d,e),A.aq,D.hz_),j)
case 0:i=B.L(B.b0(i.w),A.r,2.4)
return B.q(j,k.ue(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.ey,j,j,d)}},
aQP(d,e){return this.d.e===D.T7?A.bL:this.bIM(d,e)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1l(v.Q,19,1.15,A.cF,A.R),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Qv("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.aft(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.q(n,B.jk(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bh,n,n,d)},
gcld(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aal(d,e,f,g){return B.cs(new C.ciM(this,e,d,f,g))},
aak(d){return this.aal(d,22,!0,18)},
Xo(d,e){return this.aal(d,22,!0,e)},
aRS(d,e,f){return this.aal(d,22,e,f)},
bKL(d,e,f){return this.aal(d,e,!0,f)},
bcu(d,e,f,g){return B.cs(new C.ciN(this,e,d,g,!0,f))},
ck0(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adS(824),A.aC,k.aXB(824),k.b9q(824),A.Q,k.O9(),A.af,B.at(k.qV(824,360),j,j,j),k.Xb(824),A.af,B.E(k.aak(3),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adS(824),A.aR,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.acG(440,A.bk,3,62,26),k.aCT(440,A.bk,2,20),A.b3,k.asM(B.b0(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Kd,B.x(B.a([k.qV(362,310),k.Xb(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.X,k.aBo(2),A.af,B.E(k.aak(3),1)],w),A.al,j,A.e,A.i,0,A.p)
case 2:w=k.w5(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c12(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cCv(788,u?B.b0(h.f):A.c,22))
v=B.q(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.Ce,j,j,j)
u=B.a([B.at(k.qV(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.T7){h=A.w.j(0.65)
u.push(B.ao(0,B.q(j,B.d(s,j,2,A.a2,j,j,j,k.azd(i,14,A.c,1.15,A.R),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.Q,k.O9(),A.X,B.E(k.Xo(2,21),1)],t),A.al,j,A.e,A.i,0,A.p)
case 3:h=k.w5(824,!0)
w=k.qV(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b8,j,A.ad,A.t,B.a([w,B.ao(0,B.q(j,k.Pe(780,A.bk,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b6,A.b8,A.x,v,j,j),A.n),j,j,j,j,D.bEU,j,j,j),j,j,0,0,j,j)],u),j),k.b9r(824,A.bk),A.Q,k.O9(),A.X,B.E(k.aak(3),1)],u),A.al,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adS(824),A.aC,k.aXB(824),k.b9q(824),A.Q,k.O9(),A.af,B.E(k.bcu(3,300,B.x(B.a([k.qV(300,300),k.Xb(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.al,j,A.e,A.i,0,A.p)
case 5:w=k.w5(824,!0)
v=x.p
u=B.x(B.a([k.acG(440,A.bk,3,62,26),k.aCT(440,A.bk,2,20),A.b3,k.asL(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.by,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aTb,new B.D(A.i9,k.qV(364,h.e===D.T7?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aC,B.E(k.Xo(2,21),1)],v),A.al,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adS(824),A.af,k.c11(824,2,70),k.cCt(824,21),A.Q,k.O9(),A.af,B.E(k.bcu(3,340,B.at(k.qV(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.i,0,A.p)
case 7:w=k.w5(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bES(new B.V(u,0,!1))
t=x.p
v=B.a([B.q(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qv(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bh,j,j,j),A.aC],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1l(h.Q,24,1.15,A.cF,A.R),j,j,j))
v.push(A.b3)
if(k.gaCc())v.push(k.aCb(230,250))
return B.x(B.a([w,A.aC,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.i,0,A.p),j),B.q(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.al6,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.acG(570,A.bk,3,62,28),k.cCu(570,A.bk,20),A.Q,k.asL(!1),A.Q,B.at(k.qV(570,330),j,j,j),k.Xb(570),A.X,B.E(k.aRS(2,!1,17),1)],t),A.al,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.al,j,A.e,A.i,0,A.p)
case 8:w=k.w5(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qv(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.q(j,B.x(B.a([t,A.am,k.Pe(788,A.bk,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bDa,j,j,j),k.b9r(824,A.bk),A.X,B.at(k.qV(824,310),j,j,j),k.Xb(824),A.Q,k.O9(),A.X,B.E(k.aak(3),1)],s),A.al,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.w5(824,!0),A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([k.qV(824,430),B.ao(18,k.ccV(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.aBs(824,3,66),k.b9v(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.axV(),A.aC,B.E(k.Xo(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.w5(824,!0),A.by,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afs(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b6t(410,4,58,28),k.aCW(410,6,20),A.b3],w),A.E,j,A.e,A.i,0,A.p),j),V.aTc,k.qV(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aC,k.axV(),A.aR,B.E(k.Xo(2,18),1)],w),A.al,j,A.e,A.i,0,A.p)
case 12:w=k.w5(824,!0)
v=k.qV(824,420)
u=B.hOw(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.H,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ao(22,B.fw(j,B.q(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.ccY(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bF9,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.aBs(824,3,62),k.b9v(824),A.af,B.q(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.aZM(A.lO),A.aC,B.E(k.Xo(2,18),1)],r),A.al,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.w5(824,!0)
u=h.w
t=x.p
w=B.a([k.qV(824,380),B.ao(j,k.afs(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBs(824,2,60)
r=k.cCG(824,2)
p=k.axV()
o=B.E(k.aRS(2,!1,18),1)
n=B.L(B.b0(u).j(0.18),A.r,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.a0,j,A.ad,A.t,w,j),A.aR,s,r,A.X,p,A.aC,o,A.af,B.q(j,B.A(B.a([B.bx(B.n(14),k.ue(150,104),A.aq),A.oT,B.E(B.x(B.a([k.afs("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.Q,B.d(q,j,2,A.a2,j,j,j,k.azc(i,19,1.15,A.I),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eI,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bh,j,j,j)],t),A.al,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.w5(824,!0),A.by,k.acG(824,A.bk,3,62,30),k.aCT(824,A.bk,2,22),A.X,k.asL(!1),A.X,B.at(k.qV(824,330),j,j,j),k.aQP(824,A.bk),A.aR,B.E(k.bKL(2,40,21),1)],x.p),A.al,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,B.c3(s,new B.o(s,s,s,s,s,new B.a9(A.aA,A.aF,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b4(s,s,s,new C.baP(B.b0(q.w),s),A.ay),0,0,0))
w=q.w
n.push(new B.D(D.bFG,B.x(B.a([B.E(t.ck0(),1),A.Q,B.q(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fK,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1j(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qv(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iR,A.i,0,s,s)],o),A.al,s,A.e,A.i,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.dx(!0,B.b4(s,s,s,new C.btO(v.j(q.ch?0.07:0.06),s),A.ay),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.L(B.b0(w).j(0.5),A.r,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fR(q,A.A,s,s,A.cj,A.bZ,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n_,B.b0(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aze(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,new B.dx(!0,B.da(B.q(s,B.A(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bGQ,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jk(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bem.prototype={
jt(d){return C.hst(d)},
k9(d){return!1}}
C.bel.prototype={
a4(d,e){var w,v=C.hst(e)
$.S()
w=B.J()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bwk.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.d_(3)
w=$.S()
v=B.a([],x.v)
u=new B.aF(w.r,A.ai,null,null,v)
u.D(new B.aZ(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ai()*14)
v.push(w)
r=u.f
if(r!=null)w.aj(r)
u.aa()}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ai()*14)
v.push(q)
p=u.f
if(p!=null)q.aj(p)
u.aa()}u.D(new B.aq(0,r))
u.D(new B.bv())
return u},
k9(d){return!1}}
C.baP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e4()
o.d_(7)
$.S()
w=B.J()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.N(new B.p(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.p(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sav(new B.c0(A.A,0.5,A.x,p,0,B.a([A.Y9.j(0.13),A.L],v),p,p).aJ(0,B.bX(r,q)))
d.N(r,q,w)}w.sav(p)},
aE(d){return!1}}
C.btO.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.ft(u,A.ct,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.bW,u,A.dA,A.bX)
s.eb()
w=d.c
J.br(w.save())
w.translate(t/2,e.b*0.52)
d.hW(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.p(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.WR.prototype={
S(){return new C.aFK()}}
C.aFK.prototype={
Y(){var w=this
w.a3()
B.fGK(w.a.c,null).bG(new C.etl(),x.g7).bG(new C.etm(w),x.a)
w.a.toString},
gaPB(){var w=D.az6[this.e].b
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
q=A.j.E(v*p,q,p-q)-q
w=A.j.E(u*o,w,o-w)-w
return new B.a3(q,w,q+s,w+t)},
a_O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.et8(r))
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
i=B.J()
i.z=A.hb
m.q1(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.o0().xC(J.hhL(p),J.hhL(o)),$async$a_O)
case 7:l=e
w=8
return B.b(l.hs(A.hd),$async$a_O)
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
if(r.c!=null){r.m(new C.et9(r))
r.c.L(x.q).f.U(D.fh9)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_O,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aG(s,s,s,s,A.ln,s,s,s,new C.etf(d),s,s,s,s,s,s),p=x.p
q=B.eG(B.a([B.bM(!1,D.fW3,s,s,!0,s,s,s,t.y||r==null?s:t.gccZ(),s,s)],p),s,s,!0,!0,A.BV,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h_5,s,s,s,1,s,!0)
if(r==null)p=A.m0
else{w=B.E(new B.D(A.bR,B.at(new B.fF(t.gaPB(),B.cs(new C.etg(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iK,B.jt(s,s,s,B.d(D.az6[u].a,s,s,s,s,s,s,A.aaJ,s,s,s),s,new C.eth(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.q(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.bZi,B.E(B.kT(s,s,s,6,1,new C.eti(t),t.f),1),D.bYT],p),A.m,s,A.e,A.i,0,s,s),D.fTj,A.am,B.bM(!1,D.fT1,s,s,!0,s,s,s,new C.etj(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.YY,s,s,s,s,s,s,D.bCw,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c4(q,A.BV,p,s,!1,!1,s,s)}}
C.bdU.prototype={
a4(d,e){var w
$.S()
w=B.J()
w.z=A.cj
return d.q1(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1_.prototype={
S(){var w=$.aw(),v=x.A
return new C.aH8(new B.au(A.av,w),new B.au(new B.ba("NGMY",A.b5,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a5X),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oQ.prototype={}
C.aH8.prototype={
gaXK(){var w,v,u=this
if(u.p1)w=new B.w6(1,u.p2,0.9,u.p3).k_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f2d(w))},
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
return B.b(F.bFC(new B.q5(p,1),o),$async$Zo)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f15(r,p))
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
return B.b(F.bFC(new B.q5(p,1),n),$async$Qy)
case 9:if(r.c==null){w=1
break}r.m(new C.f1t(r,p))
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
w.aH=w.aR=w.aL=w.aG=w.a_=w.bb=w.bn=w.y2=0
w.b7=null
w.b6=0.25
w.bf=null
w.bK=0.5
w.aP=1
w.c9=w.bH=w.bm=0
w.cO=w.c6=!1},
aZw(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCh(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.drp)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCh(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCh(C.hcs(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCh(C.hcs(1-a0*0.5,n,n,n),w)}return a1?C.bCh(C.hcs(-1,255,255,255),w):w},
aD1(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a4(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xA(u,v,w)
this.dx.px(new C.f1D(t),!0)
return t},
b8p(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aD1()
w=C.ilB(e.d.a.a,e.db)
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
return C.ii2(d,k,v,a0,j,e.gaXK(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cAj(){return this.b8p(null)},
DK(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmS(),$async$DK)
case 3:w=4
return B.b(B.bQ(A.eQ,null,x.H),$async$DK)
case 4:w=5
return B.b($.aW.gmS(),$async$DK)
case 5:s=$.aW.ap$.x.h(0,t.r)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf)){u=null
w=1
break}w=7
return B.b(r.md(1080/r.gZ(0).a),$async$DK)
case 7:w=6
return B.b(e.hs(A.hd),$async$DK)
case 6:q=e
u=q==null?null:J.eQ(A.dM.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DK,v)},
abf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0P(q))
t=4
w=7
return B.b(q.DK(),$async$abf)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cP.gcu().aM(p)
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
if(q.c!=null)q.m(new C.f0Q(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abf,v)},
B2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f0N(q))
t=4
w=7
return B.b($.aW.gmS(),$async$B2)
case 7:w=8
return B.b(B.bQ(A.ny,null,x.H),$async$B2)
case 8:w=9
return B.b($.aW.gmS(),$async$B2)
case 9:k=$.aW.ap$.x.h(0,q.f)
p=k==null?null:k.gbg()
if(!(p instanceof B.qf))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.md(1080/p.gZ(0).a),$async$B2)
case 10:o=e
w=11
return B.b(o.hs(A.hd),$async$B2)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahq(J.eQ(A.dM.gaU(n)),"ngmy_quote.png","image/png"),$async$B2)
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
if(q.c!=null)q.m(new C.f0O(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B2,v)},
cn9(){var w=this.p4
w.toString
return B.cs(new C.f1m(this,w))},
b1s(d,e){var w=null
return B.bs(w,w,w,w,w,D.fs_,w,w,!0,new B.b6(4,B.n(16),Q.vM),w,w,w,w,w,D.u6,!0,w,w,w,w,new B.b6(4,B.n(16),D.b4G),w,w,w,w,w,w,w,w,Ad.EG,e,w,w,w,w,w,w,w,D.fxz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yx(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bl],v))
u.push(B.d(d,w,w,w,w,w,w,D.aVT,w,w,w))
return new B.D(H.akX,B.A(u,A.m,w,A.e,A.i,0,w,w),w)},
b1r(d,e){var w=null,v=B.n(18),u=B.L(A.bz,A.r,1)
return B.q(w,B.aJ(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.k8),A.f,w,w,new B.o(D.u6,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wd(d){return this.b1r(d,A.bE)},
ox(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uW:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.L(f?A.L:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jV,r,r,r,16),A.bl],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jV,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cT(r,B.A(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b4,new B.o(w,r,u,v,r,p,A.n),A.fZ,r,r,r,r,A.GG,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahn(d,e,f){return this.ox(d,null,e,f)},
azj(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eK:A.bz,s=x.p
v=B.a([B.cT(w,d,w,w,A.b4,new B.o(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.fZ,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aD
A.d.v(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a5(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b1v(d,e,f,g,h,i){return this.azj(d,e,f,g,h,5,i)},
kz(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUG,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.eqk,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f1z(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.q(u,B.d(j,u,u,u,u,u,u,A.aUV,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a0y,u,u,u))
s=B.A(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.ab0(w).cP4(A.b7,A.bz,A.b7.j(0.2),A.c,D.f6K,4)
return new B.D(A.yu,B.x(B.a([s,B.YJ(B.kT(u,u,u,g,f,new C.f1A(this,h),A.j.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajq(d,e,f,g,h,i){return this.kz(d,e,f,g,h,null,i)},
ajP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aV
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bSb:o
n.push(B.aA(o,B.q(o,t,A.f,o,o,new B.o(s,o,new B.bH(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f1C(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bW(A.bH,n,A.bt,o,10,10)},
bOT(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5X
else{v=x.a8
w=B.C(new B.Y(D.a5X,new C.f0F(o),v),v.k("M.E"))}v=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b1s("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f0G(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.ab1,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.Z,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b1s("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f0H(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a5,n,A.ao,n,n,n,n)
t=o.yx("DESIGNS",A.uG)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d0w[q]
r.push(new B.D(A.iK,o.ahn(p,o.x===p,new C.f0I(o,p)),n))}return B.x(B.a([v,A.X,u,t,B.ch(B.A(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.af,new B.a5(n,118,B.hN(n,new C.f0J(o,w),w.length,n,n,A.aL,new C.f0K(),!1),n),A.Q,o.b1r(B.x(B.a([B.iP(A.b7,n,n,A.ag,!0,new C.f0L(o),n,D.fK7,n,D.fGj,o.k3),B.iP(A.b7,n,n,A.ag,!0,new C.f0M(o),n,n,n,D.fDv,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alx)],s),A.E,n,A.e,A.i,0,A.p)},
cJg(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aD1()
if(a7.length===0)return a5.wd(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.KB,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aB(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a4(u).k("cg.E"))
A.d.fi(m)
l=m.length!==0&&A.d.cC(m,new C.f22(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f29(a5)
j=new C.f2b()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.KB,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eK:A.bz
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aB(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.aA(a6,B.q(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bH(d,d,d,d),new B.bg(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Od,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f23(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wd(B.bW(A.bH,o,A.vG,a6,6,6))
i=B.a([a5.ox("All words",K.aq0,!1,new C.f24(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahn("Sentence "+a3,!1,new C.f25(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahn("Clear picks",!1,new C.f26(a5)))
i=B.bW(A.bH,i,A.bt,a6,8,8)
g=a5.yx("SIZE OF THE PICKED WORDS",D.apr)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dxs[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f27(e,k)
f.push(a5.ahn(a0.b,l===a4,e))}return B.x(B.a([q,A.X,o,A.X,i,g,B.bW(A.bH,f,A.bt,a6,8,8),A.X,a5.ox("Make every word normal",A.k5,!1,new C.f28(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cEc(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bI8,B.d(A.d.fe(D.aAT,new C.f1M(q)).b,p,p,p,p,p,p,D.fqm,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cs(new C.f1N(q)),l=q.yx("HIGHLIGHT BEHIND THE WORDS",A.a2u),k=q.p1?-1:q.k4
k=q.ajP(k,new C.f1O(q),D.dbQ)
w=q.p1
v=w?A.c:A.aV
n=B.a([n,A.X,m,l,B.bW(A.bH,B.a([k,B.aA(p,B.q(p,D.bV9,A.f,p,p,new B.o(p,p,B.L(v,A.r,w?3:1),p,p,D.fjM,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1R(q),p,p,p,p,p,p,!1,A.a4)],o),A.vG,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.KB,p,p,p)],o)
if(q.gaXK()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajq("Colour",l,0,360,new C.f1S(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajq("Shade",k,0.15,0.9,new C.f1T(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kz("Strength",l,0.15,1,new C.f1U(q),1,""+A.j.V(l*100)+"%"))
A.d.v(n,B.a([A.X,q.wd(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yx("LOOK",A.wJ))
m=B.a([q.ox("Bold",I.app,q.fy,new C.f1V(q)),q.ox("Italic",I.apq,q.go,new C.f1W(q))],o)
for(u=0;u<3;++u){l={}
k=D.d1M[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uW:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bz,1,A.r,-1)
m.push(B.aA(p,B.q(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bH(r,r,r,r),new B.bg(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f1X(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bW(A.bH,m,A.vG,p,8,8))
n.push(q.yx("COLOUR",A.mh))
n.push(q.ajP(q.fx,new C.f1Y(q),D.dnL))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.KB,p,p,p))
n.push(q.yx("SIZE AND PLACE",A.HE))
m=q.fr
m=q.kz("Text size",m,0.5,1.6,new C.f1P(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wd(B.x(B.a([m,q.kz("Up / down",l,0.12,0.5,new C.f1Q(q),0.3,""+A.j.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cna(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.n(22)
v=B.L(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bF.j(0.12)],x.O)
return B.aA(q,B.q(q,B.x(B.a([B.q(q,D.c_L,A.f,q,q,D.b7D,q,62,q,q,q,q,q,62),A.aC,D.fHA,A.am,D.fMo],x.p),A.m,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(D.u6,q,v,w,q,new B.a9(A.a6,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bDL,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb1u(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bx(B.n(12),new B.a5(46,62,B.fR(p,A.A,120,q,A.cj,A.bZ,!1,q,!1,q,q),q),A.aq),A.bd,B.E(B.x(B.a([D.fH6,A.Q,B.bW(A.bH,B.a([r.ox("Change",A.jH,!1,r.gb1u()),r.ox("Remove",A.ef,!1,new C.f1q(r))],w),A.bt,q,6,6)],w),A.E,q,A.e,A.i,0,A.p),1)],w),A.m,q,A.e,A.i,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.djT[t]
u.push(r.ox(s.b,s.a,r.at===t,new C.f1r(r,t)))}u=B.bW(A.bH,u,A.bt,q,8,8)
switch(r.at){case 0:s=r.c5a(p)
break
case 1:s=r.c45()
break
case 2:s=r.bKK()
break
case 3:s=r.bRb()
break
default:s=r.bMQ()
break}return B.x(B.a([v,A.af,u,A.aC,s,A.X,new B.bL(A.a6,q,q,r.ox("Reset the whole picture",A.k5,!1,new C.f1s(r)),q)],w),A.E,q,A.e,A.i,0,A.p)},
c5a(d){var w=this,v=x.p
return B.x(B.a([B.bW(A.bH,B.a([w.ox("Auto enhance",E.a27,!1,new C.f1i(w)),w.ox("Make words easy to read",A.pt,!1,new C.f1j(w))],v),A.bt,null,8,8),A.aC,B.cs(new C.f1k(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c45(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kz("Exposure",n,-1.5,1.5,new C.f0X(o),0,A.j.ad(n,1))
w=o.RG
w=o.kz("Brightness",w,-0.5,0.5,new C.f0Y(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kz("Contrast",v,0.4,2,new C.f0Z(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kz("Fade",u,0,1,new C.f1_(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kz("Spotlight",t,0,1,new C.f10(o),0,""+A.j.V(t*100))
s=o.a_
s=o.kz("Darken",s,0,0.85,new C.f11(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kz("Vignette",r,0,0.9,new C.f12(o),0,""+A.j.V(r*100))
q=o.aH
q=o.kz("Shade behind words",q,0,0.85,new C.f13(o),0,""+A.j.V(q*100))
p=o.aR
return o.wd(B.x(B.a([n,w,v,u,t,s,r,q,o.kz("Shade top & bottom",p,0,0.85,new C.f14(o),0,""+A.j.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bKK(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kz("Colour strength",q,0,2.2,new C.f0i(s),1,""+A.j.V(q*100))
w=s.to
w=s.kz("Warmth",w,-1,1,new C.f0j(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kz("Tint",v,-1,1,new C.f0k(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wd(B.x(B.a([q,w,v,s.kz("Shift colours",u,-180,180,new C.f0l(s),0,""+A.j.V(u)+"\xb0"),new B.bL(A.a6,r,r,s.ox("Negative",D.bQa,s.y1,new C.f0m(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yx("COLOUR WASH",A.Pd)
w=s.b7
q=B.a([null],x.Z)
A.d.v(q,D.azv)
t=B.a([u,v,s.ajP(w,new C.f0n(s),q),A.Q],t)
if(s.b7!=null){q=s.b6
t.push(s.wd(s.ajq("Wash strength",q,0,0.9,new C.f0o(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bRb(){var w,v,u,t,s,r=this,q=r.y2
q=r.kz("Blur",q,0,24,new C.f0R(r),0,A.o.u(A.j.V(q)))
w=r.bn
w=r.kz("Soft focus",w,0,1,new C.f0S(r),0,""+A.j.V(w*100))
v=r.aG
u=x.p
v=r.wd(B.x(B.a([q,w,r.kz("Film grain",v,0,1,new C.f0T(r),0,""+A.j.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yx("LIGHT LEAK",D.bPT)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.cW(D.azv,0,B.dA(8,"count",s),s))
u=B.a([v,w,r.ajP(q,new C.f0U(r),t),A.Q],u)
if(r.bf!=null){q=r.bK
u.push(r.wd(r.ajq("Leak strength",q,0,1,new C.f0V(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bMQ(){var w,v,u,t,s=this,r=s.aP
r=s.kz("Zoom",r,1,3,new C.f0s(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kz("Left / right",w,-1,1,new C.f0t(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kz("Up / down",v,-1,1,new C.f0u(s),0,""+A.j.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.wd(B.x(B.a([r,w,v,s.kz("Turn",u,-180,180,new C.f0v(s),0,""+A.j.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.X,B.bW(A.bH,B.a([s.ox("Turn 90\xb0",H.aqt,!1,new C.f0w(s)),s.ox("Flip sideways",A.CJ,s.c6,new C.f0x(s)),s.ox("Flip upside down",A.CJ,s.cO,new C.f0y(s))],t),A.bt,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c7T(){var w=null,v=B.n(22),u=B.L(A.bz,A.r,1)
return B.q(w,B.x(B.a([D.f6W,A.X,D.fJ9,A.aC,B.aA(w,B.q(A.A,D.f79,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uW,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f1l(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.u6,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c4Y(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f1d(p),m=x.p,l=B.A(B.a([D.bIe,p.ox("Reset",A.k5,!1,new C.f19(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.KB,o,o,o),j=p.yx("SHAPE",A.aqq),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b1v(n.$2(t,p.cy),62,u.b,s===t,new C.f1a(v,p),62))}}i=B.bW(A.bH,i,A.bt,o,8,8)
v=p.yx("RING",A.pl)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b1v(n.$2(p.cx,t),62,r.b,q===t,new C.f1b(s,p),62))}u=B.bW(A.bH,u,A.bt,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.af,p.wd(p.kz("Size",s,0.12,0.4,new C.f1c(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b4t(d){return new B.a5(null,d,new B.fF(0.5625,B.cs(new C.f1w(this)),null),null)},
cDq(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.L(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uW:q
t=new B.aP(14,14)
s=D.dm9[w]
r=v?A.c:A.aD
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aD
l.push(new B.by(1,A.bb,B.aA(A.c5,B.cT(q,B.x(B.a([r,A.cU,new B.qE(A.e_,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b4,new B.o(q,q,q,new B.bg(t,t,t,t),q,u,A.n),D.bze,q,q,q,q,A.hF,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f1F(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.q(q,B.A(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bBn,A.me,q,q,q)},
aSq(){var w,v,u=this,t=null,s=u.cDq()
switch(u.as){case 0:w=u.bOT()
break
case 1:w=u.cJg()
break
case 2:w=u.cEc()
break
case 3:w=u.cna()
break
case 4:w=u.c4Y()
break
default:w=u.c7T()
break}v=x.p
return B.bx(A.tL,B.e8(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bCx,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.YY,!0),A.aq)},
aOv(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcdp(),p=B.n(16)
q=B.E(B.aA(r,B.q(r,D.f7k,A.f,r,r,new B.o(A.c.j(0.08),r,B.L(A.aV,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbQK()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bF.j(0.35),A.cA,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fdm)
else t.push(D.bUf)
t.push(A.ae)
t.push(D.bKF)
return B.q(r,B.A(B.a([q,A.at,B.E(B.aA(r,B.q(r,B.A(t,A.m,r,A.ba,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uW,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b6K,r,r,r,r,G.aln,r,r,r)},
b1t(){var w=null
return new B.D(U.a0t,B.A(B.a([B.aG(w,w,w,w,A.n1,w,w,w,new C.f0W(this),w,w,w,w,w,w),D.fYZ,A.b3,D.c24],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.BV,B.bm(!0,B.cs(new C.f2c(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bhv.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e4()
n.d_(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.S()
t=B.J()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.J()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.aq(new B.a3(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.rR.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.ml.prototype={}
C.A6.prototype={
ak(){var w=this
return B.H(["at",w.a.ab().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o4.prototype={}
C.wq.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a8Y.prototype={}
C.asE.prototype={}
C.a1w.prototype={
S(){return new C.aJ3(new B.au(A.av,$.aw()),B.k6(!0,null,!0,!0,null,null,!1),D.dNI,B.a([],x.s),B.ez([D.Jc],x.Q))}}
C.aJ3.prototype={
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
if(r.c!=null)r.m(new C.f8A(r,p,q))
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
break}p=B.bp(r.y,!0,x.N)
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
J.c5(p,"data:"+k+";base64,"+A.cP.gcu().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f8B(r,p))
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
return w}catch(v){}return D.bxo},
c54(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cyY(C.fNL(w,this.b6s(d),f),g)},
adB(d,e,f,g,h){var w=null,v=new C.f8y(f,e),u=new C.f8z(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.L(p?A.bz:A.b7.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.at(B.X(f?A.ze:A.P1,A.bV,w,w,w,26),w,w,w),D.ewz],x.p),w),w)
else p=this.c54(g,v.$1(h),u.$1(h),34)
return B.aJ(!1,A.a3,!0,s,B.aO(!1,r,!0,B.q(w,B.A(B.a([B.E(B.at(p,w,w,w),1),D.bTX],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mU,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8x(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aZC(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.n(8),B.fR(A.cG.aM(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bZ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.L(n?A.bz:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ew,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.KH,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PN,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aJ(!1,A.a3,!0,u,B.aO(!1,t,!0,B.q(p,B.A(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kr,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9E(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9E=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fRc(),$async$a9E)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f8g(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f8h(r,p))
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
if(f.length<6&&r.e==null){r.m(new C.f8j(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f8k(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f8l(r))
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
return B.b(C.fMt(q,r.cx,j,new C.b37(r.z,r.Q,r.as,r.at),new C.f8m(r),i,m,p,k),$async$afC)
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
if(r.c!=null)r.m(new C.f8n(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afC,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eP,g).w
g=B.aH(d,A.c0,g).w
w=B.at(B.q(h,h,A.f,h,h,new B.o(A.aV,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.q(h,D.bXf,A.f,h,h,new B.o(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bg.j(0.5),A.H,24)],v),D.c6d,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8O(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aG(h,h,h,h,H.PN,h,h,h,i.ax?h:new C.f8P(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbFF()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.H,10)],v)
s.push(B.hb(B.aJ(!1,A.a3,!0,h,B.aO(!1,h,!0,B.q(h,B.X(i.e==null?A.wx:A.hH,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wP,A.a7),h,40,h,h,h,h,h,40),A.cR,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cR,h,h,A.aj),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.n(16),D.b4d),h,h,h,h,h,h,h,h,Y.Ey,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iK,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aVj,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f8Q(i)
s=i.aZC(A.ll,q,r,i.gcnC(),s)
r=i.z
r=B.E(i.adB(new C.f8S(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bl,B.E(i.adB(new C.f8T(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.f8U(i)
s=i.aZC(A.uB,r,p,i.gcnK(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adB(new C.f8V(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aC,D.fNH,A.aw,D.fQz,A.by,u,A.Q,D.fOY,A.aC,v,A.by,B.A(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bl,B.E(i.adB(new C.f8W(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fSt],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.L(D.boR,A.r,1)
w=C.ahX(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.X,new B.bL(A.a6,h,h,B.q(h,B.A(B.a([D.bYm,A.bl,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fwb,h,h,h),B.aO(!1,h,!0,D.eqA,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f8X(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bgO,h,u,v,h,h,A.n),h,h,h,h,D.bB2,h,h,h),h)],t))}o.push(A.by)
o.push(D.fEd)
o.push(A.Q)
w=B.a([],t)
for(m=0;m<6;++m){l=D.de1[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aD:A.bz,1,A.r,-1)
u=u?A.u:A.R
w.push(new B.by(1,A.bb,new B.D(A.jn,B.aA(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b4,new B.o(v,h,new B.bH(k,k,k,k),h,h,h,A.a7),A.eG,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8Y(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.by)
o.push(D.fXc)
o.push(A.Q)
o.push(B.cs(new C.f8Z(i)))
o.push(A.by)
o.push(D.fLL)
o.push(A.Q)
w=B.a([i.b9o("auto","Let AI choose",A.e9,A.RT)],t)
for(v=x.O,m=0;m<11;++m){j=D.wT[m]
u=j.d
w.push(i.b9o(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bW(A.bH,w,A.bt,h,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.L(i.r?A.bg.j(0.5):A.bz,A.r,1)
o.push(B.q(h,B.iP(h,A.bg,h,h,h,new C.f8R(i),D.bTp,D.fWr,h,D.fGA,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aC,B.d(w,h,h,h,h,h,h,D.aUs,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gcdt()
v=B.fr(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.n(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fdc:A.HR
o.push(new B.a5(h,54,B.lO(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nT,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.q(h,B.bm(!0,B.ch(B.x(o,A.al,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wj,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aee,h,h,h,h,h,h,h,h),h)},
bSs(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f8o(this,p,d)
if(d===D.DV)return new C.aFB(p,o,q)
w=B.n(16)
v=p?E.wP:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aD:A.bz,A.r,1)
s=B.X(p?A.ea:C.hVy(d),A.c,q,q,q,20)
r=C.hVz(d)
return B.aA(q,B.cT(q,B.x(B.a([s,A.aw,B.ev(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e_)],x.p),A.m,q,A.ba,A.i,0,A.p),q,q,A.b4,new B.o(u,q,t,w,q,v,A.n),A.fZ,q,64,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9o(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bz
r=B.L(r,A.r,u?1.6:1)
w=B.q(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a6,A.a9,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.aA(v,B.cT(v,B.A(B.a([w,Z.Eu,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b4,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,v,P.amG,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8D(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1v.prototype={
S(){return new C.aJ2(new B.au(A.av,$.aw()))}}
C.aJ2.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
afD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afD=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f89(r))
w=1
break}B.eX()
r.m(new C.f8a(r))
t=4
q=C.imw(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.img(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f8b(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hc6()
f=$.Dg.h(0,k.a)
o=f==null||J.cr(f)?null:J.fq(f)
if(o==null){r.m(new C.f8c(r))
w=1
break}n=C.ime(o,r.a.c)
C.ima(r.a.c.a)
$.hbl=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hf1(j)
h=C.hf2(r.a.c)
e=C.hf3(r.a.c)
w=7
return B.b(C.bEw(k,r.a.c.a,j,h,new C.f8d(r),i,e,a0),$async$afD)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f8e(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eP,i).w
i=B.aH(d,A.c0,i).w
w=B.at(B.q(j,j,A.f,j,j,new B.o(A.aV,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.q(j,D.aqK,A.f,j,j,D.b6p,j,34,j,j,j,j,j,34),A.at,D.bIR],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aaG,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.n(16),Aw.adF),j,j,j,j,j,j,j,j,Y.Ey,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aVj,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.da8[q]
o=B.d(p,j,j,j,j,j,j,AC.Vh,j,j,j)
n=A.c.j(0.06)
r.push(B.mZ(j,n,o,j,k.e?j:new C.f8f(k,p),j,j,Q.vM,j))}w=B.a([w,A.aC,u,A.am,t,A.aC,s,A.X,B.bW(A.bH,r,A.bt,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aUs,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gcdu()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bg.j(0.5),A.en.j(0.5)],x.O):D.cHV
o=B.a([new B.ac(0,A.G,A.bg.j(0.35),A.cA,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.eqw:D.bXW
n=B.q(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aJ(!1,A.a3,!0,j,B.aO(!1,s,!0,B.eI(B.A(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hh,j,j,j)],v),A.m,j,A.ba,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a6,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.Q(0,0,0,h.f.d),B.q(j,B.bm(!0,B.ch(B.x(w,A.al,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wj,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aee,j,j,j,j,j,j,j,j),j)}}
C.b37.prototype={}
C.aFB.prototype={
S(){return new C.bmg(null,null)}}
C.bmg.prototype={
gazk(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.qr,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gazk().t()
this.bzr()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.c9(this.gazk(),new C.ep1(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dgs[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=D.yi.j(0.25+s*0.6).gp(0)
d.N(new B.p(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.p(q-o,r),new B.p(q+o,r+0),p)
d.ah(new B.p(q,r-o),new B.p(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atb.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a_T.prototype={
S(){return new C.aD6()}}
C.aD6.prototype={
gajM(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ai9(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAL(){var w=this.e
return w===$?this.e=C.hf1(this.a.c).q(0,D.DV):w},
a9r(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9r=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dsf(s))
u=3
r=A.d.fe(D.wT,new C.dsg(s))
q=B.d4(C.hf1(s.a.c),x.Q)
l=q
J.hk(l,D.DV)
p=l
if(s.gAL())J.c5(p,D.DV)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAL()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hf2(i.c)
g=C.hf3(s.a.c)
w=6
return B.b(C.bEw(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9r)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ai9(q,s.gajM())
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
if(s.c!=null)s.m(new C.dsh(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9r,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.c:A.O,k=m?A.aS:A.an,j=m?A.O:A.c,i=B.n(28),h=B.L(m?A.bz:A.aO,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bG,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dsk(d)
e=B.A(B.a([f,B.aG(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wT[w]
u=o.gajM()
t=o.f?n:new C.dsl(o,v)
f.push(new C.buW(v,u===v.a,t,n))}f=B.kS(1.25,f,3,10,10,n,A.dU,!0)
u=B.n(18)
t=o.gAL()?D.c8W:n
if(o.gAL())s=n
else s=m?A.bp:A.bO
r=B.X(A.e9,o.gAL()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAL()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAL()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAL()
f=B.a([f,A.aC,B.q(n,B.A(B.a([r,A.at,q,B.b8M(n,A.c,n,A.bN,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dsm(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,O.alp,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.X,B.d(u,n,n,n,n,n,n,D.fwv,n,n,n)],g))
f=B.ch(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GN,n,n,A.ah)
u=o.f?n:o.gbEE()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.n(16),A.a1),n,n,n)
s=B.n(16)
return B.bm(!0,B.q(n,B.x(B.a([new B.D(D.bEe,e,n),new B.dn(1,A.co,f,n),new B.D(A.GM,new B.a5(1/0,50,B.bI(B.eI(B.at(o.f?A.tu:D.fOa,n,n,n),n,new B.o(n,n,n,s,n,D.c7x,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uq,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.buW.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.H,12)],x.V):w
v=B.a([new B.bL(A.ly,w,w,B.X(v.c,A.ab,w,w,w,18),w),new B.bL(A.lz,w,w,B.d(v.b,w,w,w,w,w,w,D.fws,w,w,w),w)],x.p)
if(q)v.push(D.b1p)
return B.aA(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b4,new B.o(w,w,p,t,s,new B.a9(A.aA,A.aF,A.x,r,w,w),A.n),A.eG,w,w,w,w,A.cl,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eoZ.prototype={
aH7(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xb(d,e){return this.aH7(0,e,null)}}
C.aNG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b33.prototype={
B(d){var w,v,u=null,t=C.hdR(this.c)
if(t==null)w=D.bvR
else{w=B.aH(d,u,x.w).w.cOx(D.bAy,D.fcm)
v=this.d
w=B.q4(new B.dx(!v,B.apk(!1,t,!1,v,!1,390),u),w)}return B.ev(A.A,new B.a5(416,870,new C.bnR(w,u),u),A.f,A.dz)}}
C.bnR.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dtb[w]
u=new B.aP(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.q(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asH,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.duw[w]
u=new B.aP(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.q(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.asH,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,B.c3(t,new B.o(t,t,t,B.n(64),D.d_2,D.c5V,A.n),A.bi),0,0,0))
s.push(B.bR(3,B.c3(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bi),3,3,3))
s.push(B.bR(13,B.bx(B.n(51),B.e8(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.at(B.q(D.b1A,B.q(t,t,A.f,t,t,D.b6I,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dx(!0,B.bx(B.n(51),D.bxu,A.aq),t),13,13,13))
s.push(B.ao(22,new B.dx(!0,B.at(B.q(t,t,A.f,t,t,new B.o(A.ab,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.ls.prototype={
pV(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.er(A.K,!1,e.l(),A.aG,"",k,42,A.bs,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bj,j,2,"Your Presentation Title",0,0,"",D.n5,D.cW,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.er(A.K,!1,v.l(),A.aG,"",k,20,A.bs,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bj,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dk,D.cW,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rS(i,l,0,0,B.a([f,w,C.er(A.bk,!1,4279310375,A.aG,"",t.j(0.8).l(),24,A.bs,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fH,t.l(),3,"",0,0,"",D.cq,D.fg,0.3,0.35,0.72)],s),C.cD(),D.n4,"","","Welcome",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,34,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Agenda",0,0,"",D.cq,D.cW,0.84,0.08,0.08)
w=C.cD()
w=C.rS(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,22,A.bs,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bj,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vc,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n4,"","","Agenda",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,32,A.bs,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bj,j,2,"Main Idea",0,0,"",D.cq,D.cW,0.84,0.08,0.08)
f=C.cD()
f=C.rS(i,l,0,0,B.a([u,C.er(A.bk,!0,v.l(),A.aG,"",k,21,A.bs,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bj,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cq,D.cW,0.8,0.1,0.26)],s),C.cD(),D.n4,"","","Key Point 1",D.dk)
u=C.cD()
u=C.er(A.bk,!1,e.l(),A.aG,"",k,30,A.bs,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bj,j,2,"Compare & Contrast",0,0,"",D.cq,D.cW,0.84,0.08,0.08)
r=C.cD()
r=C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bs,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bj,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cq,D.cW,0.4,0.08,0.24)
q=C.cD()
q=C.rS(i,l,0,0,B.a([u,r,C.er(A.bk,!0,v.l(),A.aG,"",k,18,A.bs,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bj,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cq,D.cW,0.4,0.52,0.24)],s),C.cD(),D.n4,"","","Key Point 2",D.dk)
r=C.cD()
r=C.er(A.K,!1,e.l(),A.aG,"",k,48,A.bs,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bj,j,2,h,0,0,"",D.dk,D.cW,0.8,0.1,0.32)
e=C.cD()
p=C.Ch(l,l,l,l,D.DR,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rS(i,l,0,0,B.a([r,C.er(A.K,!1,v.l(),A.aG,"",k,22,A.bs,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bj,j,2,"Questions?",0,0,"",D.cq,D.cW,0.7,0.15,0.58)],s),C.cD(),D.n4,"","",h,D.dk)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fm.prototype={
aj(d){return this.e.$1(d)}}
C.ew.prototype={}
C.ja.prototype={}
C.Fd.prototype={
gaN6(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahX(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4A(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fd(v,u,t,d==null?w.d:d)},
Gb(d){return this.a4A(null,d,null,null)},
aFM(d){return this.a4A(null,null,null,d)},
cOv(d,e){return this.a4A(d,e,null,null)},
beJ(d){return this.a4A(d,null,null,null)},
beP(d){return this.a4A(null,null,d,null)}}
C.Oe.prototype={
S(){return new C.blC(new B.eA(0,$.aw()),null,null)}}
C.blC.prototype={
Y(){var w,v=this
v.a3()
w=v.pZ(new C.e2A(v))
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
this.byV()},
B(d){var w=C.ahX(this.a.c.a)
if(w==null)w=A.d.gH(D.Ia)
return B.cs(new C.e2z(this,w,C.hul(this.a.c.d)))}}
C.bts.prototype={
B(d){return B.o9(A.Xc,this.e,new C.f7m(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bgA.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aV4(d,e,v)
break
case"confetti":w.bLd(d,e,v)
break
case"crown":w.bMR(d,e,v)
break
case"aurora":w.bFJ(d,e,v)
break
case"champagne":w.bJ6(d,e,v)
break
case"diamonds":w.bP1(d,e,v)
break
case"starburst":w.cB2(d,e,v)
break
case"balloons":w.bFX(d,e,v)
break
case"galaxy":w.bUk(d,e,v)
break
case"redcarpet":w.crW(d,e,v)
break
case"coins":w.bKC(d,e,v)
break
case"lanterns":w.c3A(d,e,v)
break
case"hearts":w.c15(d,e,v)
break
case"petals":w.cn1(d,e,v)
break
case"butterflies":w.bI4(d,e,v)
break
case"neon":w.c7D(d,e,v)
break
case"disco":w.bPc(d,e,v)
break
case"sunrise":w.cCI(d,e,v)
break
case"pearls":w.cm4(d,e,v)
break
case"snow":w.cAK(d,e,v)
break
case"laurel":w.c3G(d,e,v)
break
case"ribbons":w.cus(d,e,v)
break
case"kente":w.c3o(d,e,v)
break
case"trophy":w.cGr(d,e,v)
break
case"shooting":w.cyu(d,e,v)
break
case"bokeh":w.bGi(d,e,v)
break
case"orbits":w.cjH(d,e,v)
break
case"flowers":w.bTy(d,e,v)
break
case"music":w.c7l(d,e,v)
break
case"mandala":w.c5L(d,e,v)
break
case"sparklers":w.cAR(d,e,v)
break
case"city":w.bJT(d,e,v)
break}},
t7(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.J()
v.r=g.j(A.j.E(h,0,1)).gp(0)
v.a=A.p4
u=new B.aF(w.r,A.ai,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aZ(w,s))
u.D(new B.c8(w,t,w+f,t))
u.D(new B.c8(w,t,w,t+f))
u.D(new B.c8(w,t,w-f,t))
u.D(new B.c8(w,t,w,s))
u.D(new B.bv())
d.af(u,v)
d.N(e,f*0.18,v)},
m0(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.t7(d,new B.p(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aV4(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m0(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bN,A.ax],w),B.a([A.io,A.bF],w),B.a([A.eC,A.aJ],w),B.a([A.c,A.aB],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bh(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cY(i,1))
g=h+b7*(C.cY(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cY(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kD(new B.p(h,b8),new B.p(g,f),A.cx.aC(0,j/0.22))
d.toString
$.S()
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.sav(new B.a9(A.a6,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aJ(0,B.rU(new B.p(h,b8),d)))
a0.c=o
a0.d=A.bB
a1=B.kD(new B.p(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ap(A.S,A.N,A.U,A.V,A.T)
a1.r=A.c.gp(0)
c0.N(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cx.aC(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cY(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ap(A.S,A.N,A.U,A.V,A.T)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.hw(A.G,p)
c0.N(new B.p(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cY(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cY(i,a9+60))
b2=new B.p(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ap(A.S,A.N,A.U,A.V,A.T)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bB
b6.a=A.p4
c0.ah(new B.p(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cY(i,a9+120)>0.5)this.t7(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLd(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.J()
d.sav(new B.a9(A.aA,A.aF,A.x,D.dnq,B.a([A.j.E(h-0.15,0,1),A.j.E(h,0,1),A.j.E(h+0.15,0,1)],x.x),null).aJ(0,new B.a3(0,0,g,f)))
a0.aq(new B.a3(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a2*(0.8+C.cY(u,4))+u)
q=i*(0.012+0.012*C.cY(u,5))
p=Math.cos(a2*(2+3*C.cY(u,6))+u)
o=D.Rk[A.o.E(A.j.bh(C.cY(u,7)*5),0,4)]
J.br(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(e.r,A.ai,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.aa()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.aj(r)
m.aa()}e=$.S()
t=new B.ap(A.S,A.N,A.U,A.V,A.T)
t.r=B.b0(n.r).gp(0)
t.b=A.aa
t.c=q*0.35
a0.af(m,t)}else a0.aq(B.bB(A.H,q*1.8*A.j.E(t,0.15,1),q),n)
g.restore()}this.m0(a0,a1,a2,25,A.bN,30)},
bMR(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.p(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aF(p.r,A.ai,a4,a4,o)
o.push(new B.aZ(a5,a6))
n.aa()
p=q-0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=q+0.07
p=new B.aq(a5+Math.cos(p)*a7*1.2,a6+Math.sin(p)*a7*1.2)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.aj(o)
n.aa()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.sav(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bN.j(0.22),D.biU],v),a4,a4).aJ(0,B.bX(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aF($.S().r,A.ai,a4,a4,B.a([],s))
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
j.D(new B.bv())
i=A.j.E(b0/1.8,0,1)
t=i>=1
if(t){o=B.J()
o.sav(new B.a9(A.b6,A.b8,A.x,D.dm3,a4,a4).aJ(0,new B.a3(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eGQ,D.eA_,D.eQv],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.r=d.gp(d)
a8.N(new B.p(e,o),m,a0)
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.r=A.ab.gp(0)
a8.N(new B.p(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ap(A.S,A.N,A.U,A.V,A.T)
h.r=A.i4.gp(0)
a8.N(new B.p(a5+l*a1,a6+m),o,h)}}for(v=B.xE(j),u=B.a([],x.X),p=new B.rr(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jE(y.M));--h
p.iw()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ap(A.S,A.N,A.U,A.V,A.T)
a2.b=A.aa
a2.c=m
a2.e=A.dO
a2.r=A.bN.gp(0)
a8.af(new B.aF(o,e,a4,new B.cu([new B.BK(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.t7(a8,new B.p(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m0(a8,a9,b0,45,A.bN,40)},
bFJ(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m0(a6,a7,a8,60,A.c,50)
w=[D.f2a,D.f1T,D.f1M,D.f39]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aF(o.r,A.ai,null,null,j)
for(o=a4*m,h=a8*l,g=h*1.4,f=0;f<=s;f+=r){e=f/a3
d=o+Math.sin(e*4+h+k)*a5*0.07+Math.sin(e*9-g+k)*a5*0.025
if(f===0){e=new B.aZ(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.aj(a0)
i.aa()}else{e=new B.aq(f,d)
j.push(e)
a0=i.f
if(a0!=null)e.aj(a0)
i.aa()}}$.S()
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.b=A.aa
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.p4
o.y=new B.hw(A.G,u)
a6.af(i,o)
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.b=A.aa
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.p4
o.y=new B.hw(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cY(a2,1))+C.cY(a2,2)*a1,a1)
s=C.cY(a2,3)
r=Math.sin(a8+a2)
q=C.cY(a2,4)
$.S()
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=A.w6.j(0.4+0.5*C.cY(a2,5)).gp(0)
o.a=A.p4
a6.N(new B.p(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJ6(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.J()
e.sav(new B.c0(A.A,0.5,A.x,n,0,B.a([A.i2.j(0.25+0.1*j),D.Z9],x.O),n,n).aJ(0,B.bX(new B.p(i,h),g)))
d.N(new B.p(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aF(g.r,A.ai,n,n,f)
g=v?0:m
e=l*(0.05+w*0.07)
f.push(new B.aZ(g,e))
u.aa()
for(t=1;t<=20;++t){g=t/20*m
s=v?g*0.45:m-g*0.45
g=new B.aq(s,e+t*k*0.012+Math.sin(t*0.8+i+w)*k*0.02)
f.push(g)
r=u.f
if(r!=null)g.aj(r)
u.aa()}g=$.S()
f=new B.ap(A.S,A.N,A.U,A.V,A.T)
f.b=A.aa
f.c=j
f.r=D.Rk[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*q,q)
s=m*(0.1+0.8*C.cY(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cY(w,4))
if(p<i){this.t7(d,new B.p(s,p),o*2.4,A.bN,A.j.E(p/i,0,1))
continue}$.S()
g=new B.ap(A.S,A.N,A.U,A.V,A.T)
g.b=A.aa
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.u4.j(0.75).gp(0)
d.N(new B.p(s,p),o,g)
g=o*0.35
e=new B.ap(A.S,A.N,A.U,A.V,A.T)
e.r=A.c.j(0.8).gp(0)
d.N(new B.p(s-g,p-g),f,e)}},
bP1(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m0(b0,b1,b2,30,A.lc,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cY(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a7+Math.sin(s+p)*a9*0.02
J.br(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aF(h.r,A.ai,a6,a6,g)
h=-o
e=h*0.5
g.push(new B.aZ(e,i))
f.aa()
h*=0.28
j*=0.6
d=new B.aq(h,j)
g.push(d)
a0=f.f
if(a0!=null)d.aj(a0)
f.aa()
d=o*0.28
a0=new B.aq(d,j)
g.push(a0)
a1=f.f
if(a1!=null)a0.aj(a1)
f.aa()
a0=o*0.5
a1=new B.aq(a0,i)
g.push(a1)
a2=f.f
if(a2!=null)a1.aj(a2)
f.aa()
a1=k*0.6
a2=new B.aq(0,a1)
g.push(a2)
a3=f.f
if(a3!=null)a2.aj(a3)
f.aa()
a2=new B.bv()
g.push(a2)
g=f.f
if(g!=null)a2.aj(g)
f.aa()
g=new B.ap(A.S,A.N,A.U,A.V,A.T)
g.sav(new B.a9(A.aA,A.aF,A.x,D.dhx,a6,a6).aJ(0,B.bB(A.H,k*1.2,o)))
b0.af(f,g)
a4=new B.ap(A.S,A.N,A.U,A.V,A.T)
a4.b=A.aa
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.p(e,i),new B.p(a0,i),a4)
b0.ah(new B.p(h,j),new B.p(0,a1),a4)
b0.ah(new B.p(d,j),new B.p(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.t7(b0,new B.p(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cB2(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.p(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aF(p.r,A.ai,null,null,o)
o.push(new B.aZ(h,g))
n.aa()
p=s-q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=s+q
p=new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.aj(o)
n.aa()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=A.bN.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ap(A.S,A.N,A.U,A.V,A.T)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bN.j(r*0.6).gp(0)
d.N(w,f*(0.15+0.6*k),u)}j=A.j.bh(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bwQ.aC(0,k)*(0.5+0.5*C.cY(t,u)))
this.t7(d,new B.p(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Rk[A.o.E(A.j.bh(C.cY(t,4)*5),0,4)],r)}},
bFX(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cY(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cY(p,2))+C.cY(p,3)*n,n)
k=C.cY(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.azW[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aF(i.r,A.ai,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.aa()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.aj(d)
g.aa()}h=$.S()
e=new B.ap(A.S,A.N,A.U,A.V,A.T)
e.b=A.aa
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bB(new B.p(k,l),o*2.3,m)
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
e=B.ar(j,A.w,0.35)
e.toString
m.sav(new B.c0(D.b1D,0.9,A.x,a1,0,B.a([A.c,j,e],u),W.azM,a1).aJ(0,a0))
a5.bY(a0,m)
m=B.a([],t)
h=new B.aF(h.r,A.ai,a1,a1,m)
e=o*0.12
m.push(new B.aZ(k-e,i))
h.aa()
i=new B.aq(k+e,i)
m.push(i)
e=h.f
if(e!=null)i.aj(e)
h.aa()
i=new B.aq(k,l+o)
m.push(i)
e=h.f
if(e!=null)i.aj(e)
h.aa()
i=new B.bv()
m.push(i)
m=h.f
if(m!=null)i.aj(m)
h.aa()
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
m.r=B.ar(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cY(p,11))+C.cY(p,12)*n,n)
q=C.cY(p,13)
J.br(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bB(A.H,t,u)
$.S()
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=D.azW[A.o.F(p,6)].j(0.85).gp(0)
a5.aq(s,q)
a3.restore()}},
bUk(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.p(a7,a8)
this.m0(b0,b1,b2,50,A.c,70)
for(w=[D.f2i,D.f1Z,D.f24],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.p(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aJ(0,B.bX(m,r)))
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
$.S()
d=new B.ap(A.S,A.N,A.U,A.V,A.T)
d.r=f.j(0.5+0.5*C.cY(k,4)).gp(0)
d.a=A.p4
b0.N(new B.p(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.J()
a8.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.u4.j(0.55),D.aiS],t),a3,a3).aJ(0,B.bX(a9,a7)))
b0.N(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bh(b2/3.5)
a2=new B.p(a4*(0.1+0.5*C.cY(a1,9)),a5*0.1*C.cY(a1,8))
a4=B.kD(a2,a2.a5(0,new B.p(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kD(a2,a4,0.6)
a5.toString
a7=B.J()
a7.sav(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aJ(0,B.rU(a2,a4)))
a7.c=a6*0.005
a7.d=A.bB
b0.ah(a5,a4,a7)}},
crW(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aF(p.r,A.ai,b4,b4,o)
o.push(new B.aZ(r,v))
n.aa()
p=q-0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=q+0.16
p=new B.aq(r+Math.cos(p)*u,v+Math.sin(p)*u)
o.push(p)
m=n.f
if(m!=null)p.aj(m)
n.aa()
p=new B.bv()
o.push(p)
o=n.f
if(o!=null)p.aj(o)
n.aa()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.sav(new B.c0(A.A,0.5,A.x,b4,0,B.a([A.u4.j(0.28),D.aiS],w),b4,b4).aJ(0,B.bX(new B.p(r,v),u)))
p.a=A.p4
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.et:A.eo)
a8=$.S()
a9=B.a([],t)
n=new B.aF(a8.r,A.ai,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.aa()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.aj(b0)
n.aa()
a8=a4?i:a1
a8=new B.c8(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.aj(b0)
n.aa()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.aj(b0)
n.aa()
a8=new B.bv()
a9.push(a8)
a9=n.f
if(a9!=null)a8.aj(a9)
n.aa()
a8=new B.ap(A.S,A.N,A.U,A.V,A.T)
a8.sav(new B.a9(A.a6,A.a9,A.x,a6,b4,b4).aJ(0,new B.a3(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ap(A.S,A.N,A.U,A.V,A.T)
b0.r=A.i2.gp(0)
b0.c=o
b0.d=A.bB
b8.ah(new B.p(a8,m),new B.p(a9,p),b0)}b1=new B.aF($.S().r,A.ai,b4,b4,B.a([],t))
w=b6*0.78
b1.D(new B.aZ(b5*0.42,w))
b1.D(new B.aq(b5*0.58,w))
b1.D(new B.aq(b5*0.8,b6))
b1.D(new B.aq(b5*0.2,b6))
b1.D(new B.bv())
v=B.J()
v.sav(D.c7r.aJ(0,new B.a3(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cY(s,1))+C.cY(s,2)*b2,b2)
t=C.cY(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.t7(b8,new B.p(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cY(s,4)),A.bN,0.3+0.7*((p+1)/2))}},
bKC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cY(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cY(u,2))+C.cY(u,3)*s,s)-r
p=C.cY(u,4)*k
o=Math.cos(f*(2+3*C.cY(u,5))+u)
n=Math.abs(o)
m=B.bB(new B.p(p,q),r,r*A.j.E(n,0.12,1))
$.S()
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.sav(new B.a9(A.aA,A.aF,A.x,o>0?D.dxZ:D.cNM,null,null).aJ(0,m))
d.bY(m,r)
r=-(t*0.22)
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.b=A.aa
l.c=Math.max(0.6,t*0.08)
l.r=D.btt.gp(0)
d.bY(new B.a3(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.t7(d,new B.p(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m0(d,e,f,30,A.bN,110)},
c3A(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m0(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cY(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ap(A.S,A.N,A.U,A.V,A.T)
i.sav(new B.c0(A.A,0.5,A.x,e,0,B.a([As.yf.j(0.45*l),D.ahs],v),e,e).aJ(0,B.bX(new B.p(m,n),k)))
a2.N(new B.p(m,n),k,i)
i=B.a([],r)
h=new B.aF(j.r,A.ai,e,e,i)
j=p*0.5
k=p*0.7
g=n-k
i.push(new B.aZ(m-j,g))
h.aa()
j=new B.aq(m+j,g)
i.push(j)
g=h.f
if(g!=null)j.aj(g)
h.aa()
j=p*0.38
k=n+k
g=new B.aq(m+j,k)
i.push(g)
f=h.f
if(f!=null)g.aj(f)
h.aa()
k=new B.aq(m-j,k)
i.push(k)
j=h.f
if(j!=null)k.aj(j)
h.aa()
k=new B.bv()
i.push(k)
j=h.f
if(j!=null)k.aj(j)
h.aa()
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
j=B.ar(D.bj8,A.c,0.2*l)
j.toString
k.sav(new B.a9(A.b6,A.b8,A.x,B.a([D.bos,j],v),e,e).aJ(0,B.bB(new B.p(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.r=A.c.j(l).gp(0)
a2.N(new B.p(m,n+p*0.55),p*0.12,k)}},
c15(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.br(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aF(m.r,A.ai,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.aa()
k=-o
h=k*0.2
g=k*1.6
k=new B.kP(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.aj(f)
i.aa()
m=new B.kP(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.aj(k)
i.aa()
m=new B.bv()
l.push(m)
l=i.f
if(l!=null)m.aj(l)
i.aa()
e=D.d7R[A.o.F(p,5)]
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
l=B.ar(e,A.w,0.25)
l.toString
m.sav(new B.c0(A.tI,0.5,A.x,d,0,B.a([A.c,e,l],v),M.a4M,d).aJ(0,B.bX(A.H,o*1.4)))
a3.af(i,m)
u.restore()}this.m0(a3,a4,a5,30,A.io,130)},
cn1(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cY(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.br(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ai,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.aa()
l=n*0.2
j=new B.c8(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.aa()
n=new B.c8(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.aj(l)
k.aa()
n=new B.bv()
m.push(n)
m=k.f
if(m!=null)n.aj(m)
k.aa()
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
m=(q&1)===0?D.cHU:D.diU
n.sav(new B.a9(A.a6,A.a9,A.x,m,h,h).aJ(0,B.bX(A.H,p)))
d.af(k,n)
v.restore()}this.m0(d,a0,a1,25,A.bN,140)},
bI4(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m0(b1,b2,b3,40,A.bN,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cY(r,1))
p=Math.sin(b3*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.br(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.br(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aF(a3.r,A.ai,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.aa()
a3=new B.kP(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.aj(a6)
a5.aa()
a3=new B.kP(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.aj(a6)
a5.aa()
a3=new B.bv()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.aj(a4)
a5.aa()
a3=new B.ap(A.S,A.N,A.U,A.V,A.T)
a3.sav(new B.a9(A.a6,A.a9,A.x,h?D.diC:D.dlx,a7,a7).aJ(0,new B.a3(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ap(A.S,A.N,A.U,A.V,A.T)
a3.b=A.aa
a3.c=Math.max(0.6,i)
a3.r=D.BO.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=D.bsI.gp(0)
p.c=q*0.1
p.d=A.bB
b1.ah(new B.p(0,m*0.3),new B.p(0,q*0.4),p)
v.restore()}},
c7D(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.p(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.b=A.aa
r.c=v
r.r=D.aB5[u].j((1-t)*0.9).gp(0)
r.y=new B.hw(A.G,v)
q=s*0.3
d.am(B.bn(B.bB(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cY(o,1)*4)+o)))
m=D.aB5[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bn(new B.a3(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=m.j(0.85).gp(0)
l.y=new B.hw(A.adt,q)
d.am(k,l)}},
bPc(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.p(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cY(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cY(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bN,A.o2,A.dx][A.o.F(q,4)]
k=C.cY(q,3)
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=l.j(0.75).gp(0)
j.a=A.p4
j.y=new B.hw(A.G,r)
a2.N(new B.p(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.J()
t.r=A.aD.gp(0)
t.c=1.2
a2.ah(new B.p(d,0),new B.p(d,w-u),t)
t=B.J()
t.r=A.di.gp(0)
a2.N(v,u,t)
t=a2.c
J.br(t.save())
a0=new B.aF(a0.r,A.ai,null,null,B.a([],x.v))
a0.D(new B.jN(B.bX(v,u)))
a2.mQ(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ap(A.S,A.N,A.U,A.V,A.T)
e.r=B.ar(A.bo,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.aq(new B.a3(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.t7(a2,v.a5(0,new B.p(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cCI(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cx.aC(0,A.j.E(a1/3,0,1))),e=new B.p(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aF(s.r,A.ai,k,k,r)
r.push(new B.aZ(g,f))
q.aa()
s=t-0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.aj(p)
q.aa()
s=t+0.04
s=new B.aq(g+Math.cos(s)*h*1.5,f+Math.sin(s)*h*1.5)
r.push(s)
p=q.f
if(p!=null)s.aj(p)
q.aa()
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.aj(r)
q.aa()
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.r=A.bN.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.J()
f.sav(new B.c0(A.A,0.5,A.x,k,0,B.a([D.bep.j(0.6),D.ahs],x.O),k,k).aJ(0,B.bX(e,g)))
d.N(e,g,f)
f=h*0.2
g=B.J()
g.sav(D.exp.aJ(0,B.bX(e,f)))
d.N(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cY(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=A.c.j(0.18).gp(0)
d.bY(B.bB(new B.p(n,m),s,v),l)
d.bY(B.bB(new B.p(n+r,m-p),s,o),l)}this.m0(d,a0,a1,20,A.i4,180)},
cm4(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aF(s.r,A.ai,h,h,r)
r.push(new B.aZ(0,f))
q.aa()
for(s=f*(0.72+t*0.07),p=a1*(1+t*0.3),o=0;o<=w;o+=v){n=new B.aq(o,s+Math.sin(o/g*6+p+t)*e*0.03)
r.push(n)
m=q.f
if(m!=null)n.aj(m)
q.aa()}s=new B.aq(g,f)
r.push(s)
p=q.f
if(p!=null)s.aj(p)
q.aa()
s=new B.bv()
r.push(s)
r=q.f
if(r!=null)s.aj(r)
q.aa()
$.S()
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.r=B.ar(A.cy,A.jf,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cY(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cY(k,2))+C.cY(k,3)*l,l)
o=C.cY(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ap(A.S,A.N,A.U,A.V,A.T)
u.sav(new B.c0(Ap.B3,0.5,A.x,h,0,D.dp8,h,h).aJ(0,B.bX(new B.p(o,i),j)))
d.N(new B.p(o,i),j,u)}this.m0(d,a0,a1,25,A.c,190)},
cAK(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cY(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bB
J.br(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.H,new B.p(0,o),l)
d.ah(new B.p(0,n),new B.p(m,k),l)
d.ah(new B.p(0,n),new B.p(j,k),l)}v.restore()}this.m0(d,e,a0,40,A.eC,200)},
c3G(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.p(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.E(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cK(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.br(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bB(new B.p(o,0),p,q)
$.S()
e=new B.ap(A.S,A.N,A.U,A.V,A.T)
e.sav(D.c7e.aJ(0,new B.a3(0,n,m,l)))
a3.bY(f,e)
r.restore()}}$.S()
a0=B.J()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.bjr.gp(0)
a3.N(w,v*1.08,a0)
d=a5*0.8
this.t7(a3,w.a5(0,new B.p(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m0(a3,a4,a5,40,A.bN,210)},
cus(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i2,A.i4],a4),B.a([A.pc,A.io],a4),B.a([A.aE,A.eK],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bO<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
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
if(a0!=null)g.aj(a0)
k.aa()}else{g=new B.aq(f,g)
l.push(g)
a0=k.f
if(a0!=null)g.aj(a0)
k.aa()}j.push(new B.p(f,e+d))}for(m=new B.ds(j,t),m=new B.bO(m,m.gI(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.aj(g)
k.aa()}m=new B.bv()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.aa()
$.S()
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
l=a5[n]
i=l[0]
m.sav(new B.a9(A.a6,A.a9,A.x,B.a([i,l[1],i],a4),At.zJ,new B.mF(w)).aJ(0,new B.a3(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m0(a6,a7,a8,40,A.c,220)},
c3o(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
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
a2=new B.ap(A.S,A.N,A.U,A.V,A.T)
a3=Math.abs(a0)
a2.r=D.a4Q[a3].gp(0)
b0.aq(new B.a3(g,i,a1,f),a2)
a2=g+r
a4=new B.ap(A.S,A.N,A.U,A.V,A.T)
a4.r=D.a4Q[A.o.F(a3+2,5)].gp(0)
b0.aq(new B.a3(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a5,a5)
u=C.cY(a0,3)
t=C.cY(a0,4)
this.t7(b0,new B.p(u*a6,l-a7),a8*(0.01+0.012*t),D.a4Q[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cGr(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.p(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.c=u
p.r=A.bN.j(0.06).gp(0)
a4.ah(w,new B.p(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aF($.S().r,A.ai,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.D(new B.aZ(u,a2))
v=a1+v
m.D(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.D(new B.c8(v,r,p,l))
v=a2+n*0.95
m.D(new B.aq(p,v))
p=o*0.3
k=a2+n
m.D(new B.aq(a1+p,k))
m.D(new B.aq(a1-p,k))
q=a1-q
m.D(new B.aq(q,v))
m.D(new B.aq(q,l))
m.D(new B.c8(u,r,u,a2))
m.D(new B.bv())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bB(new B.p(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ap(A.S,A.N,A.U,A.V,A.T)
d.b=A.aa
d.c=p
d.r=A.aB.gp(0)
a4.cM(f,e,3.141592653589793,!1,d)}a1=B.J()
a1.sav(new B.a9(A.a6,A.a9,A.x,D.drR,A.aA3,null).aJ(0,new B.a3(u,a2,r,k)))
a4.af(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.t7(a4,new B.p(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLe(a4,a5,a6,60)},
bLe(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.br(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bB(A.H,r*A.j.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
n.r=D.Rk[A.o.F(p,5)].gp(0)
d.aq(o,n)
u.restore()}},
cyu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m0(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cY(p,1)*1.6
n=A.j.F(f+C.cY(p,2)*o,o)/o
m=i*(C.cY(p*7+A.j.bh((f+C.cY(p,2)*o)/o),3)*1.2-0.1)
l=new B.p(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.p(m+t*k,v+u*k)
$.S()
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.sav(new B.a9(A.a6,A.a9,A.x,B.a([A.c.j(0),A.bN],s),null,null).aJ(0,B.rU(j,l)))
k.c=r
k.d=A.bB
d.ah(j,l,k)
this.t7(d,l,q,A.c,1-n)}},
bGi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cY(s,1))
q=A.j.F(C.cY(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cY(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
m=A.o.F(s,5)
n.r=D.aCS[m].j(o).gp(0)
n.a=A.p4
n.y=new B.hw(A.G,r*0.12)
d.N(new B.p(q,p),r,n)
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
n.b=A.aa
n.c=Math.max(0.6,r*0.05)
n.r=D.aCS[m].j(o*1.4).gp(0)
d.N(new B.p(q,p),r,n)}},
cjH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.br(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bB(A.H,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.b=A.aa
o.c=u
o.r=A.bN.j(0.45).gp(0)
d.bY(p,o)
n=f*(0.9+q*0.25)+q
m=new B.p(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=A.i4.gp(0)
d.N(m,t,o)
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=A.i2.j(0.4).gp(0)
o.y=new B.hw(A.G,r)
d.N(m,s,o)
w.restore()}this.m0(d,e,f,45,A.bN,270)},
bTy(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
switch(n){case 0:l=new B.p(m*a1,p)
break
case 1:l=new B.p(m*a1,q)
break
case 2:l=new B.p(r,m*a2)
break
default:l=new B.p(s,m*a2)
break}k=A.j.F(a6+C.cY(o,2)*4,4)/4
j=A.ep.aC(0,A.j.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.dfz[A.o.F(o,5)]
J.br(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bB(new B.p(0,l),i,j)
$.S()
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.sav(new B.a9(A.b6,A.b8,A.x,B.a([A.c,g],u),null,null).aJ(0,B.bB(new B.p(0,l),f,h)))
a4.bY(d,a0)}$.S()
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=A.i2.gp(0)
a4.N(A.H,h*0.3,l)
v.restore()}this.m0(a4,a5,a6,30,A.i4,280)},
c7l(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bX(new B.p(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.b=A.aa
j.c=u
j.r=D.az7[n].j((1-m)*0.8).gp(0)
a4.cM(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cY(h,1))+C.cY(h,2)*i,i)
f=C.cY(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cY(h,4))
d=D.az7[A.o.F(h,4)]
$.S()
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.r=d.gp(0)
J.br(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.bY(B.bB(A.H,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.p(s,g),new B.p(s,p),o)
if((h&1)===0){o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.p(s,p),new B.p(f+e*1.6,g-e*2),o)}}},
c5L(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.p(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.br(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aF(d.r,A.ai,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.aa()
d=new B.c8(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.aj(a2)
a1.aa()
d=new B.c8(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.aj(a0)
a1.aa()
d=new B.ap(A.S,A.N,A.U,A.V,A.T)
d.b=A.aa
d.c=u
d.r=B.ar(A.bN,A.o2,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ap(A.S,A.N,A.U,A.V,A.T)
d.r=A.i4.j(0.8).gp(0)
a7.N(new B.p(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.J()
a5.sav(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.i2.j(0.25),D.Z9],x.O),a3,a3).aJ(0,B.bX(w,a4)))
a7.N(w,a4,a5)
this.m0(a7,a8,a9,30,A.bN,300)},
cAR(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.p(j,i)
$.S()
g=new B.ap(A.S,A.N,A.U,A.V,A.T)
g.r=A.bo.gp(0)
g.c=q
g.d=A.bB
b1.ah(new B.p(l,a9),h,g)
g=new B.ap(A.S,A.N,A.U,A.V,A.T)
g.sav(new B.c0(A.A,0.5,A.x,null,0,B.a([A.i4,A.i2.j(0.6),D.Z9],o),null,null).aJ(0,B.bX(h,p)))
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
a6=new B.p(a4,a5)
a7=new B.ap(A.S,A.N,A.U,A.V,A.T)
a7.r=B.ar(A.i4,A.ax,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bB
a7.a=A.p4
b1.ah(new B.p(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.p(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m0(b1,b2,b3,35,A.bN,310)},
bJT(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aV4(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cY(o,1))
m=a6*(0.14+0.24*C.cY(o,2))
l=a6-m
k=new B.a3(p,l,p+n,l+m)
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.sav(D.c89.aJ(0,k))
a7.aq(k,j)
i=A.j.bh(n/r)
h=A.j.bh(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cY(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ap(A.S,A.N,A.U,A.V,A.T)
a4.r=A.bN.j(0.85).gp(0)
a7.aq(new B.a3(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b0Y.prototype={
B(d){var w,v=null,u=new C.ceH(),t=new C.ceJ(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.q(v,D.arQ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.ceI(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Ia[w]))
return B.bW(A.bH,s,A.bt,v,12,10)}}
C.a_q.prototype={
S(){return new C.aBt()}}
C.aBt.prototype={
gwe(){var w=this.d
return w===$?this.d=this.a.c:w},
gb1y(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b5,A.aP),$.aw())}return v},
gazl(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaN6()
v=$.aw()
u.f!==$&&B.bF()
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
n=J.aiX(o,".png")?"image/png":"image/jpeg"
r.m(new C.dht(r,n,p))
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
return B.bs(w,new B.b6(4,B.n(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vs,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahX(p.gwe().a)
if(n==null)n=A.d.gH(D.Ia)
w=p.gwe()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Oe(p.gwe(),!1,!0,new B.bP(w.a+v,x.W)),0,0,0),B.ao(o,B.Ix(A.n1,new C.dhy(d),B.nV(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Ix(A.aqI,new C.dhz(p),B.nV(o,A.aT,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aVi,o,o,o)
t=B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gb1y(0),o,o,o,o,o,2,p.b1x("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhA(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.fW,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i2.j(0.6),A.r,1)
if(p.gwe().d.length===0)q=D.bVD
else{q=C.hul(p.gwe().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fR(q,A.A,o,o,A.cj,A.bZ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.aA(o,B.q(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdv(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwe().d.length!==0)r.push(B.aG(o,o,o,o,H.PN,o,o,o,new C.dhB(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.q(o,B.x(B.a([w,A.X,B.A(r,A.m,o,A.e,A.i,0,o,o),A.Q,B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),p.gazl(),o,o,o,o,o,2,p.b1x("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dhC(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a5,o,A.ao,o,o,o,o),A.af,B.dh(D.bUx,D.fY7,new C.dhD(p,d),B.bo(A.aB,o,o,o,A.w,o,A.cn,o,new B.b9(B.n(14),A.a1),o,o,o))],u),A.al,o,A.e,A.P,0,A.p),A.f,o,o,D.b6U,o,o,o,o,A.GJ,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a_L.prototype={
S(){return new C.bi6(new B.au(A.av,$.aw()))}}
C.bi6.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.R(d).ax.a===A.J,m=n?A.c:A.O,l=n?A.aS:A.an,k=B.aH(d,A.c0,x.w).w,j=n?A.O:A.c,i=B.n(28),h=B.L(n?A.bz:A.aO,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aG(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.doh(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cZv[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aU(v.b);v.C();){s=v.gR(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bO
t.push(B.aO(!1,new B.bg(r,r,r,r),!0,B.q(A.A,B.d(s,o,o,o,o,o,o,A.pQ,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bg(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.doi(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hF,u,o),new B.CS(A.bH,6,6,A.bt,t,o)],g))}e.push(A.aC)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.Q)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bp:A.aQ
e.push(B.A(B.a([B.E(B.aM(o,A.Z,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b6(4,B.n(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aWh,o,new C.doj(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.Q)
return B.bm(!0,B.q(o,B.x(B.a([f,new B.dn(1,A.co,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uq,A.a09,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bhr.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e4()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.J()
u.y=A.H0
t=B.J()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.p(l,h)
if(a1.ai()<0.25){f=B.ar(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.E(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.N(g,k*2.4,u)
t.r=e.gp(0)
a2.N(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.p(l-d,h),new B.p(l+d,h+0),a0)
a2.ah(new B.p(l,h-d),new B.p(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bh8.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bn(new B.a3(0,0,0+a3.a,0+a3.b),A.jI),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.J()
a1.b=A.aa
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mf
a2.am(f,a1)
a1=x.v
a0=new B.aF(a0.r,A.ai,g,g,B.a([],a1))
a0.D(new B.j7(f))
v=new B.TJ(new B.rr(B.xE(a0),!1,B.a([],x.X))).gH(0)
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
$.S()
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.b=A.aa
k.d=A.bB
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aF(r,l,g,new B.cu([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aF(r,l,g,new B.cu([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aF(r,e.b,g,new B.cu([v,0,i,!0]),B.a([],a1)),k)}}a0.iw()
h=u[d].Dc(o).a
$.S()
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=w.gp(0)
l.y=Ad.op
a2.N(h,5,l)
l=new B.ap(A.S,A.N,A.U,A.V,A.T)
l.r=A.c.gp(0)
a2.N(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqc.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e4()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h2()?-0.1:1.1
v=e.b*v
u=new B.p(w,v)
t=e.gao0()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aF(k.r,A.ai,g,g,j)
j.push(new B.aZ(w,v))
i.aa()
k=m-l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.aa()
k=m+l
k=new B.aq(w+Math.cos(k)*t,v+Math.sin(k)*t)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.aa()
k=new B.bv()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.aa()
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
j=B.a([s.j(0.16),s.j(0)],r)
k.sav(new B.alu(u,t,j,g,A.x,g,g,0))
k.y=A.kW
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bbY.prototype={
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
g=f}$.S()
f=new B.ap(A.S,A.N,A.U,A.V,A.T)
f.r=g.j(h).gp(0)
f.y=new B.hw(A.G,l*0.35)
d.N(new B.p(j,i),l,f)
f=new B.ap(A.S,A.N,A.U,A.V,A.T)
f.b=A.aa
f.c=1
f.r=B.ar(g,A.c,0.5).j(h*0.9).gp(0)
d.N(new B.p(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bbB.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e4()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aF(j.r,A.ai,null,null,i)
i.push(new B.aZ(0,m))
h.aa()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.aj(f)
h.aa()}$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.b=A.aa
j.c=s
j.d=A.bB
if(n===1){i=B.ar(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.hw(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.bxi.prototype={
a4(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.J()
t=(0.5+0.5*t)*0.12
w.sav(new B.c0(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d6z,null).aJ(0,u))
d.aq(u,w)
w=u.cn(-3)
v=B.J()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kW
d.aq(w,v)},
aE(d){return d.b!==this.b}}
C.bug.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bh(f)*7,q=0;q<7;++q){p=new B.e4()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ar(s,A.c,0.7).j(m)
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=k.gp(0)
j.c=1.4
j.d=A.bB
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
i=new B.ap(A.S,A.N,A.U,A.V,A.T)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.hw(A.G,l*0.3)
d.N(new B.p(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.bto.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.J()
v.a=A.p4
v.sav(new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.E(u-0.15,0,1),A.j.E(u,0,1),A.j.E(u+0.15,0,1)],x.x),null).aJ(0,w))
d.aq(w,v)},
aE(d){return d.b!==this.b}}
C.bgt.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdA(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.J()
w.b=A.aa
w.c=1.4
w.d=A.bB
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.J()
u.b=A.aa
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uw
r=new C.dha(this,r*0.16,d,u,w)
t=e.gdA()*0.045
r.$3(new B.p(t,t),1,1)
v=e.a-t
r.$3(new B.p(v,t),-1,1)
s=e.b-t
r.$3(new B.p(t,s),1,-1)
r.$3(new B.p(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.y6.prototype={}
C.Jx.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.asD.prototype={
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
u.n(0,"decoration",C.i95(v.z))
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
n=B.C(new B.N(n,new C.cke(),m),m.k("ak.E"))
return C.rS(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ak(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a8<m,@>>")
n=B.C(new B.N(n,new C.ckf(),m),m.k("ak.E"))
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
r=B.C(new B.N(r,new C.ck3(),q),q.k("ak.E"))
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
w=B.C(new B.N(w,new C.ck4(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jW.prototype={}
C.b36.prototype={
B(d){return B.cs(new C.ck9(this))}}
C.apF.prototype={
S(){return new C.blm(null,null)}}
C.blm.prototype={
gb1z(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fF,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gb1z().t()
this.byF()},
B(d){return B.c9(this.gb1z(),new C.dPJ(),this.a.c)}}
C.aMW.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aen.prototype={
QB(d,e,f,g){return this.bTb(d,e,f,g)},
bTb(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
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
B(d){var w=this,v=null,u=B.n(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.du,24)],x.V),r=B.at(B.q(v,v,A.f,v,v,new B.o(A.aV,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.df,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d6)
n.push(B.A(B.a([B.E(new C.aeE(A.hW,"Download",A.c3,new C.eBl(w,d),!0,v),1),A.at,B.E(new C.aeE(A.uL,"Share",A.bm,new C.eBm(w,d),!1,v),1),A.at,B.E(new C.aeE(A.hJ,"Safari",A.b1,new C.eBn(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aC)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eBo(d),v,v))
return B.bm(!0,new B.D(A.qx,B.x(B.a([B.q(v,B.x(n,A.al,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.ji,v,t,u,s,v,A.n),v,v,v,v,A.GQ,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.aeE.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aJ(!1,A.a3,!0,v,B.aO(!1,u,!0,B.eI(B.x(B.a([p,A.Q,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bGG,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b34.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arK(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cdw().am4(1.35)
s=B.axg(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bEe(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Z,!1,h,!0,A.t,h,B.aN(),i.w,A.bm,h,h,h,h,2,D.c2U,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bP("slide_tf_"+g.a,x.W),h,A.xc,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.Az,A.ao,h,A.V4,h,h)
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
w=n?t.cOi(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eO:A.Ew
p=B.d(f,new B.bP("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.UW:s
$.S()
j=B.J()
j.b=A.aa
j.c=3*w
j.e=A.dO
j.r=A.au.gp(0)
j=i.cuv(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cut(k,t,l?A.UW:s)],x.p),h)}else w=i.cuu(p,t,g.k2?A.UW:s,m)
v=new B.mH(w,new B.bP("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bL(r,h,h,q,h),h)
case 1:case 4:return i.c1N()
case 3:return i.cm3()
case 2:return B.b4(h,h,h,new C.b31(g,h),A.fJ)
case 5:g=g.r
return new C.b33(g,!i.e&&i.z==null,h)}},
cdw(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
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
e=B.a([new B.cU(D.ahq,new B.p(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.H,6*v),new B.cU(l,A.H,16*v),new B.cU(l.j(0.8),A.H,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bq
w=A.au
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.na
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bF,new B.p(v,v),0)],x.r)
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
e=B.a([new B.cU(A.bc,new B.p(-3*v,0),0),new B.cU(A.az,new B.p(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cJ,A.H,8*v),new B.cU(A.az,new B.p(0,-3*v),18*v)],x.r)
k=A.u
w=A2.xV
break
case"ice":v=o.d
e=B.a([new B.cU(A.aJ,A.H,10*v),new B.cU(A.cy,A.H,22*v)],x.r)
k=A.R
w=A.eC
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.H,3*h)],x.r)
w=l
k=A.k1
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d8G[q]
u.push(new B.cU(v,new B.p(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.p(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.J()
v=o.d
f.sav(D.c5C.aJ(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.M0,new B.p(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.J()
v=o.d
f.sav(D.c5X.aJ(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.H,14*o.d)],x.r)
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
e=B.a([new B.cU(l.j(0.45),new B.p(u,u),0),new B.cU(l.j(0.2),new B.p(v,v),0)],x.r)
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
if(D.f9d.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ck7(h)
v=r.k2?C.ilO(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eO:A.Ew
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.YU(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cuv(d,e,f,g){return this.aBl(d,e,f,!1,g)},
cut(d,e,f){return this.aBl(d,e,f,!1,null)},
cuu(d,e,f,g){return this.aBl(d,e,f,g,null)},
bEe(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a9
default:return A.a6}},
c1N(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bL
return B.at(B.X(s.b===D.lr?A.HM:A.Cv,A.aD,t,t,t,32),t,t,t)}w=u.bHi(r)
if(s.b===D.lr){s=B.n(6)
v=2*u.d
return B.q(t,w,A.f,t,t,new B.o(A.c,t,B.L(A.cu,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dG,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQg(r,!0)
return C.fNL(s.go,v,s.id)}return w},
aQg(d,e){var w,v,u,t
try{w=C.im8(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cs(new C.ck6(this,w,v,e))
return u}catch(t){return D.aeT}},
bHi(d){return this.aQg(d,!1)},
cm3(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bck
return C.imq(v,w.db,w.dx)}}
C.b31.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.J(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.J()
w.r=B.b0(f.ch).gp(0)
w.b=A.aa
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a3(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aq(s,g)
d.aq(s,w)
break
case 1:d.bY(s,g)
d.bY(s,w)
break
case 2:r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.aZ(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bv())
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
r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.p(0,h),new B.p(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ai,i,i,B.a([],x.v))
r.D(new B.aZ(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bv())
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
if(v!=null)h.aj(v)
r.aa()}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.aj(v)
r.aa()}}r.D(new B.bv())
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aKs.prototype={
S(){return new C.bwN(null,null)}}
C.bwN.prototype={
Y(){var w,v=this
v.a3()
w=B.bl(null,A.hE,null,1,null,v)
w.cP(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bAU()},
aQr(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c3(B.at(B.d(d,w,w,w,w,w,w,A.df,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a6,A.a9,A.x,v,w,w),A.n),A.bi)},
bEs(){var w,v=this,u=null,t=v.aQr("Slide A",A.bm),s=v.aQr("Slide B",A.b1)
if(v.a.c===D.cq)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.R,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c9(w,new C.ffW(v,s,t),u)},
B(d){return this.bEs()}}
C.aL9.prototype={
jt(d){return new B.a3(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.W7.prototype={
S(){return new C.bly(null,null)}}
C.bly.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bl(null,A.C2,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cq){w.sp(0,1)
return}B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0j(u),x.a)},
by(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cq)w.sp(0,1)
else B.bQ(B.dv(0,0,0,v.c.fr+v.f*120,0,0),new C.e0i(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.byU()},
B(d){var w,v=this.a
if(v.c.dy===D.cq||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c9(w,new C.e0h(this),v.d)}}
C.Jw.prototype={
B(d){return B.cs(new C.ck_(this))}}
C.aB8.prototype={
S(){return new C.bfU()}}
C.bfU.prototype={
Y(){this.a3()
if(this.a.c!==D.cq)B.bQ(A.NA,new C.den(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cq)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.R,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.W7(C.er(A.bk,!1,4279310375,A.aG,"",4294538006,24,A.bs,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bj,o,2,"",0,0,"",u,D.fg,0.84,0.08,0.12),B.q(p,p,A.f,p,p,new B.o(A.ch,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bP("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bk,!1,4294967295,A.aG,"",4280640491,22,A.bs,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bj,o,2,"Element flies in",0,0,"",q.a.c,D.cW,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ao(32,new C.W7(t,B.q(p,D.fJk,A.f,p,p,new B.o(s,p,B.L(A.aV,A.r,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.bP("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c3(n,D.b7t,A.bi)}}
C.a8G.prototype={
S(){return new C.bme(null,null)}}
C.bme.prototype={
gb2a(){var w=this.a
if(w.e)w=D.f9p.q(0,w.c)||D.aSo.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb2a()){w=C.ikr(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dv(0,0,0,w,0,0),null,1,null,v)
w.cP(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bzp()},
B(d){var w,v=this,u=v.d
if(!v.gb2a()||u==null)return v.a.d
w=v.a
return B.c9(u,new C.eoI(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b10.prototype={
B(d){var w=null
return B.at(C.b35(!0,w,!1,C.er(A.K,!1,this.e.l(),A.aG,"",4280640491,this.f,A.bs,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bj,4280172719,2,"Aa",0,0,this.c,D.cq,D.cW,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bh6.prototype={
jt(d){return C.a3z(this.b,new B.a3(0,0,0+d.a,0+d.b).cn(-this.c))},
k9(d){return d.b!==this.b||d.c!==this.c}}
C.bsi.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a3(0,0,0+e.a,0+e.b).cn(-this.d),k=this.b,j=C.a3z(k,l),i=e.gdA(),h=new C.f4R()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sav(D.aTU.aJ(0,l))
d.af(j,w)
k=C.a3z(k,l.cn(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.btd.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sav(D.fjJ.aJ(0,l))
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
k.sav(D.fjH.aJ(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3z(k,l.cn(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.bc.j(0.7).gp(0)
k.y=new B.hw(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pd.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sav(D.fjC.aJ(0,l))
d.af(j,w)
w=C.a3z(k,l.cn(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bgb.gp(0)
d.af(w,v)
k=C.a3z(k,l.cn(i*0.03))
v=h.$1(i*0.004)
v.r=D.bjb.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sav(D.aTU.aJ(0,l))
d.af(j,k)
for(k=B.xE(j),w=B.a([],x.X),k=new B.rr(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jE(y.M));--r
k.iw()
q=w[r].b
q===$&&B.c()
p=A.o.E(A.j.bh(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.iw()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.iw()
n=w[r].Dc(q*o/p).a
m=D.d5P[A.o.F(o,4)]
$.S()
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=m.gp(0)
d.N(n,v,q)
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=A.c.j(0.9).gp(0)
d.N(new B.p(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sav(D.fjL.aJ(0,l))
k.y=new B.hw(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.sav(D.fjI.aJ(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3z(k,l.cn(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.o7.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btl.prototype={
a4(d,e){d.Gp(C.a3z(this.b,new B.a3(0,0,0+e.a,0+e.b).cn(-this.c)),A.w,e.gdA()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aN9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aNE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aOY.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.a8Z.prototype={}
C.OI.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aG0(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUt(){return this.r},
gUu(){return this.w},
gMa(){return this.x}}
C.aG0.prototype={
Y(){var w,v=this
v.a3()
$.aW.c1$.push(v)
C.fSK()
$.hCl=new C.eHz(v)
w=B.bl(null,A.C_,null,1,null,v)
w.fs(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IV()},
by(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P5(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IV()}},
jl(d){if(d===A.B5||d===A.tK||d===A.tJ||d===A.pY)this.u9()},
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
v.P$=0}t.bzC()},
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
w.L(x.q).f.U(D.fi_)},
qO(){if(!this.kw())return!1
this.ak3()
return!0},
asR(d){var w,v,u,t,s,r=this
if(r.ad5(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hBs(w))return!1
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
return B.b(C.asF(k),$async$IV)
case 3:j=e
w=4
return B.b(C.arc(k),$async$IV)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h7E(j,t.c4O())
w=t.gacA()?5:7
break
case 5:r=t.gPo()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b1e(r),$async$IV)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.eDX())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c4(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.eDY())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.z8(m==null?"":m)!=null)continue
C.fSW(n,s)
p=!0}t.m(new C.eDZ(t,s))
if(p||s.length>J.ad(j))t.u9()
case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
c4O(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kJ(w)&&w!==q}if(w)p.push(r)
return p},
csW(d){var w,v=this,u=d.w
if(!C.kJ(u)||u==="hati_kiapo_uongozi")return
v.abp(d)
w=A.d.bj(v.d,new C.eFx(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c4(u,0,d.hQ())
v.db=!1},
cn0(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kJ(s)&&s!=="hati_kiapo_uongozi"}if(s)u.csW(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,i3>")
s=B.C(new B.cM(new B.Y(s,new C.eFl(),w.k("Y<1>")),new C.eFm(),v),v.k("M.E"))
return s},
P5(d){return this.bTC(d)},
u9(){return this.P5(null)},
bTC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cn0()
w=3
return B.b(C.X0(d==null?t.a.c:d,s),$async$P5)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asR(r)?4:5
break
case 4:w=6
return B.b(C.a8c(r),$async$P5)
case 6:q=r.x
p=A.a.i(q==null?t.gPo():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eDk())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c4(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
pI(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kJ(u.w))===!0?A.fZ:A.lH
v.at=B.cz(w,new C.eGF(v))},
b1A(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ag9(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cGJ(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ag9(w.e.hQ(),w.f,w.r))
w.m(new C.eHv(w,v.pop()))
w.pI()},
cs0(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ag9(w.e.hQ(),w.f,w.r))
w.m(new C.eFv(w,v.pop()))
w.pI()},
oD(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eHi(u))
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
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hi()}w.a8(0)},
KH(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,m>")
t=B.d4(new B.cM(new B.Y(w,new C.eHj(),v.k("Y<1>")),new C.eHk(),u),u.k("M.E"))
w=this.ch
v=B.a4(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hi()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cW)continue
p=n.a
m=w.c3(0,p,new C.eHl(n))
s.c3(0,p,new C.eHm())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Ie(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aW(u.d,new C.eCJ(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPo()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c4(u.d,0,u.e.hQ())}u.oD()
u.pI()},
akp(d,e){var w,v,u,t,s=this
if(s.kw())return
w=s.Yt(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kJ(v.w))===!0
if(u){C.ikv(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ikw(t,w.d+w.f*0.5)}}s.Ie()
s.oD()
s.pI()
if(u&&s.c!=null)s.m(new C.eHw())},
cHR(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ie()
w.oD()
w.pI()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqS(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.iix(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c21(v)
t=q.c20(v)
s=B.b0(v.e)
r=v.f
return new C.jW(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hVK(o)},
c21(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cW)s=t.w>=28||A.o.E(A.o.ar(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.O},
c20(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cW&&t.w<28)return B.b0(t.Q)}return A.aM},
agm(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacA()){w.c.L(x.q).f.U(D.fgB)
return}w.abp(d)
w.b2S(C.bEx(d))
return}if(C.ckS(v)){w.abp(d)
w.b2S(d)
return}w.m(new C.eEE(w,d))},
atp(){var w,v,u,t,s,r,q=this
q.a37(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kJ(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eCH(q))
if(r&&q.c!=null){u.toString
q.Kd(u,s)}return}q.u9()
q.m(new C.eCI(q))},
b2R(d){this.abp(d)
this.a0B(d,!0)},
abp(d){if(!C.kJ(d.w))return
C.fSW(d,this.d)},
a0B(d,e){return this.ciT(d,e)},
b2S(d){return this.a0B(d,!1)},
ciT(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0B=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEx(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPo():r)
t.dy.W(0,q.toLowerCase())
C.ard(t.a.c,q)}r=s}else r=d
w=C.ckS(r.w)?3:4
break
case 3:w=5
return B.b(t.abq(r),$async$a0B)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aW(t.d,new C.eF0(l))
o=l.a.hQ()
n=C.kJ(o.w)&&C.ilJ(o)
t.m(new C.eF1(t,o,p))
if(n){m=A.d.bj(t.d,new C.eF2(o))
if(m>=0){t.d[m]=o.hQ()
t.u9()}}if(!t.ad5(l.a))t.ZE()
r=!1
if(t.c!=null)if(!t.ad5(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asR(r)&&C.fOW(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.fhb)
case 1:return B.h(u,v)}})
return B.i($async$a0B,v)},
abq(d){return this.bRF(d)},
bRF(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lw(r.c,A.Af),$async$abq)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.la(!1,r,s.c,s.d,null,A.Af,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abq,v)},
or(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$or=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ckS(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ckh(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$or,v)},
ag3(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eED(),s,null,!0,!0,x.H),$async$ag3)
case 3:if(t.c==null){w=1
break}t.atp()
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
ag2(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.eEA(),s,null,!0,!0,x.H),$async$ag2)
case 3:if(t.c==null){w=1
break}t.m(new C.eEB())
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
break}s.L(x.q).f.U(D.ffb)
case 1:return B.h(u,v)}})
return B.i($async$ZE,v)},
Kd(d,e){return this.ctl(d,e)},
ctl(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(C.ahx(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Kd)
case 9:w=4
break
case 6:w=10
return B.b(C.ahy(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Kd)
case 10:w=4
break
case 7:w=11
return B.b(C.ahz(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Kd)
case 11:w=4
break
case 8:w=12
return B.b(C.ahA(s,t.gEY(),t.gEX(),!0,e,t.d),$async$Kd)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kd,v)},
c3E(){var w,v,u,t,s=this
if(!s.gacA()){s.c.L(x.q).f.U(D.ffo)
return}w=s.gPo()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahw(u,t,v,new C.eDT(s),new C.eDU(s),w)},
agn(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dS,null,new C.eEK(u),s,!0,!0,!1,A.lS,!1,!1,x.N),$async$agn)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahA(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahx(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahy(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahz(s,u.gEY(),u.gEX(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c3E()
return B.h(null,v)}})
return B.i($async$agn,v)},
chZ(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b1A()
w=C.cD()
v=C.Ch(t,t,t,t,D.DR,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eEL(u,v))},
aaN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iqi(s),$async$aaN)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cC(q.r,new C.eCL())
t.d9(new C.eCM(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaN,v)},
aio(d,e,f,g){var w=null,v=g?A.dr:A.bO,u=B.L(g?A.aV:A.cu,A.r,1)
return B.hb(B.aA(w,B.q(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
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
p=B.C(new B.Y(r,new C.eEW(),q),q.k("M.E"))}o=s!=null&&s.b===D.lR?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.fhm)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eEX(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0A)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0A,v)},
agE(){return this.ciS()},
ciS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iq4(s,t.f+1,o),$async$agE)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jx(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eEZ(q))
t.d9(new C.eF_(p,t,o,q,r))
t.c.L(x.q).f.U(D.fhL)
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
agL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qO()||!t.Ap()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eFg(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.feX)
w=1
break}o=new B.N(p,new C.eFh(),B.U(p).k("N<1,I>")).f1(0,new C.eFi())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b5,A.aP),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eFj(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agL)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eFk())
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
return B.b(C.hDA(s,new C.Fd(r,q,p,o==null?"":o)),$async$agq)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d9(new C.eEM(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahX(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agq,v)},
abj(){return this.bQX()},
bQX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qO()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iqh(s,t.f+1,l),$async$abj)
case 3:r=e
q=$.hbl
$.hbl=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d9(new C.eD1())
t.c.L(x.q).f.U(D.feO)
w=1
break}if(!q){s=r.CW
s=C.hCj(l,s==null?"":s,!1)}else s=!1
if(s){t.d9(new C.eD2(t,l,r))
t.c.L(x.q).f.U(D.fie)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jx(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eD3(p))
o=s.length
t.d9(new C.eD4(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
aSD(d,e){if(e){this.ahd()
return}this.chZ(d,!1)},
bMr(){return this.aSD(null,!1)},
ahd(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c2,null,new C.eFq(t),r,!0,!0,!0,A.pJ,!1,!1,x.N),$async$ahd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eFr(t,C.iiw(s).pV()))
case 1:return B.h(u,v)}})
return B.i($async$ahd,v)},
d9(d){var w=this
if(w.qO())return
w.Ie()
w.b1A()
w.m(d)
w.KH()
w.oD()
w.pI()},
a9i(){this.d9(new C.eBG(this,D.n4))},
aU7(){var w=this.gdB()
if(w==null)return
this.d9(new C.eD_(this,w))},
aTd(){var w=this.e
if(w==null||w.r.length<=1)return
this.d9(new C.eCY(this))},
b5L(d,e){if(this.e==null||d===e)return
this.d9(new C.eFz(this,d,e))},
OC(d){return this.bOs(d)},
bOs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$OC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPo():s)
w=5
return B.b(C.arb(t.a.c,r),$async$OC)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.asH(s)
w=6
return B.b(C.b39(t.a.c,s),$async$OC)
case 6:if(t.c==null){w=1
break}t.m(new C.eCU(t,d))
w=7
return B.b(t.u9(),$async$OC)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
cti(d,e){var w=this
if(d.z){w.ak3()
return}w.m(new C.eFy(w,d,e))
w.pI()},
kc(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xt(d){return this.ch.c3(0,d.a,new C.eCK(d))},
avi(d){return this.CW.c3(0,d.a,new C.eDl())},
a37(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yt(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ap$.d.c
if(u!=null)u.jr()},
b9i(){return this.a37(!0)},
a33(d){var w,v,u=this
if(u.qO())return
if(!u.Ap())return
w=u.Yt(d)
if(w==null||w.b!==D.cW)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xt(w).sb1(0,"")}u.m(new C.eHg(u,d))
$.aW.x1$.push(new C.eHh(u,d,w))},
b9R(d){var w=this
if(d.b===D.cW&&!w.kw()&&w.Ap()){w.a33(d.a)
return}w.aBL(d.a)},
aBL(d){var w,v,u,t,s,r=this
if(r.kw())return
w=r.r
if(w!=null&&w!==d){v=r.Yt(w)
if(v!=null&&v.b===D.cW){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eGG(r,s,d))
if(s||d==null){t=$.aW.ap$.d.c
if(t!=null)t.jr()}},
aOL(){this.d9(new C.eBH(this))},
pq(d){return this.bDv(d)},
bDv(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$pq)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBE(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pq,v)},
Ww(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ww=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(78,1920),$async$Ww)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.d9(new C.eBu(t,s))
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
if(r.gau(s)){t.c.L(x.q).f.U(D.fiO)
w=1
break}w=r.gI(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eBr(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wq)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.d9(new C.eBs(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wq,v)},
aug(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aW(w.gdB().z,new C.eCW(v))){w.c.L(x.q).f.U(D.fhP)
return}if(w.w===v)w.a37(!0)
w.d9(new C.eCX(w,v))},
bKI(){var w=this.kc(),v=w==null
if((v?null:w.b)===D.fg)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cW)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPt(d,e){var w=this,v=w.kc(),u=w.gdB(),t=w.e
if(t==null)return
w.d9(new C.eC8(w,v,d,e,t,u))},
bF5(d){return this.aPt(d,null)},
a9y(d){return this.bFd(d)},
bFd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9G.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.or(),$async$a9y)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s!=null){r=s.b
if(r===D.cW)t.bF5(s.w>=28||s.x.gdR(0)>=A.I.gdR(0)?d.d:d.e)
else if(r===D.fg){r=d.c
t.aPt(r.j(0.88),r)}w=1
break}t.d9(new C.eCd(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
a9x(d){return this.bFb(d)},
bFb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
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
return B.b(t.or(),$async$a9x)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eCb(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9x,v)},
bEW(d){var w=this.gdB()
if(w==null)return
this.d9(new C.eC7(this,w,d))},
a0G(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iqd(r),$async$a0G)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oD()
t.m(new C.eFa(t,s))
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
t.oD()
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
E6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$E6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oD()
t=4
w=7
return B.b(C.aRL(m),$async$E6)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRb(o,q,m.b),$async$E6)
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
FN(d,e){return this.cG6(d,e)},
cG6(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FN=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qO()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a37(!0)
t.oD()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eHp(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.iju(q?"":s)
o=C.hBe(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eHq(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.czb(n.length,o,s),$async$FN)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ijo(h.a)
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
return B.b(t.cza(n,o),$async$FN)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fe(t.d,new C.eHr(s))
s=h.a.b
w=11
return B.b(t.cz8(k.b,s),$async$FN)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.ijt(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fj_)
w=1
break}w=12
return B.b(t.cz9(j.a,s,o,j.c),$async$FN)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eHs(h,t,i))
t.pI()
case 1:return B.h(u,v)}})
return B.i($async$FN,v)},
czb(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGW(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cza(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGV(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cz8(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGP(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cz9(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eGR(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acE(){var w=null
return B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acF(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c2,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.du,18)],x.V)
v=x.p
return B.A(B.a([B.q(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.aA,A.aF,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.ftZ,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aXs(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.L(e.j(0.22),A.r,1)
return B.q(w,B.d(d,w,2,A.a2,w,w,w,A.VG,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aXv(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.aA,A.aF,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aJ(!1,A.a3,!0,w,B.aO(!1,v,!0,B.q(w,B.A(B.a([B.q(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nc,w,w,w),A.cU,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.z4,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eDP(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
c0W(d,e,f,g,h,i){return this.aXv(d,e,f,!1,g,h,i)},
awC(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.L(A.c.j(0.08),A.r,1)
return B.q(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.df,w,w,w),A.bG,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a0w,w,w,w)},
aXu(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nS,w,w,w),w,new C.eDO(d,f),v)},
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
for(l=A.d.gae(o.z),n=new B.eB(l,new C.eGH());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaT(l.charCodeAt(0)==0?l:l,r.b),$async$Ky)
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
return B.b(B.aaT(A.Y.az(r.ak(),null),r.b+".json"),$async$IA)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.d),$async$IA)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IA,v)},
b91(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oD()
u.u9()
w=u.c
w.toString
v=B.eb(new C.eHf(u,t),!1,null,x.z)
B.a6(w,!1).cd(v)},
HO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$HO)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fT8(),$async$HO)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.imk(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.au,null,new C.eBz(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HO)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d9(new C.eBA(t,s))
w=1
break}if(p==="split")t.d9(new C.eBB(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HO,v)},
NX(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}w=3
return B.b(t.or(),$async$NX)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRK(s,null,null),$async$NX)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eBF(t,r))
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
return C.aRK(s,t==null?null:B.b0(t),u)},
a9g(d){return this.bDm(d)},
bDm(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fje)
w=1
break}w=3
return B.b(t.aQQ(),$async$a9g)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eBw(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9g,v)},
ahX(d){return this.cs3(d)},
cs3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fim)
w=1
break}w=3
return B.b(t.aQQ(),$async$ahX)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.d9(new C.eFw(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahX,v)},
ceF(){var w,v,u=this
if(u.kw())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bE(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cF6()}},
cF6(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d9(new C.eHn(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c1g(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d9(new C.eDS(this,r,u.d))},
c66(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fPH(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lr&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c67(d){var w
if(this.kw())return!1
w=this.e
if((w==null?null:C.kJ(w.w))!==!0)return!0
if(!this.Ap())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fPH(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lr&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O4(d){return this.bFD(d)},
bFD(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qO()){w=1
break}if(!t.Ap()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhc)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arf(p),$async$O4)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fhR)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8c(r)
w=1
break}t.m(new C.eCh(t,d,o))
t.oD()
$.aW.x1$.push(new C.eCi(t))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$Wu)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFd(),$async$Wu)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.d9(new C.eBt(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
OR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.or(),$async$OR)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kc()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fT_(r),$async$OR)
case 4:q=e
if(q==null){w=1
break}t.d9(new C.eDj(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
jj(d){this.d9(new C.eBC(this,d))},
qD(d){return this.bEP(d)},
bEP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qO()){w=1
break}m=!D.aSr.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.or(),$async$qD)
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
case"print":t.E6()
w=1
break A
case"rotate":s=t.kc()
if(s!=null)t.d9(new C.eBL(s))
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
case"flashcard_tool":t.vN(D.J7)
w=1
break A
case"quiz_tool":t.vN(D.J8)
w=1
break A
case"worksheet_tool":t.vN(D.J9)
w=1
break A
case"duplicate_el":s=t.kc()
if(s==null){w=1
break A}t.d9(new C.eBM(t,s))
w=1
break A
case"delete_el":t.aug()
w=1
break A
case"bring_fwd":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.d9(new C.eBN(t,s))
w=1
break A
case"send_back":s=t.kc()
if(s==null||t.gdB()==null){w=1
break A}t.d9(new C.eBY(t,s))
w=1
break A
case"align_left":s=t.kc()
if(s!=null)t.d9(new C.eC0(s))
w=1
break A
case"align_center":s=t.kc()
if(s!=null)t.d9(new C.eC1(s))
w=1
break A
case"align_right":s=t.kc()
if(s!=null)t.d9(new C.eC2(s))
w=1
break A
case"grayscale":case"brighten":t.OR()
w=1
break A
case"flip_h":s=t.kc()
if(s!=null)t.d9(new C.eC3(s))
w=1
break A
case"flip_v":s=t.kc()
if(s!=null)t.d9(new C.eC4(s))
w=1
break A
case"rectangle":t.pq(D.bj)
w=1
break A
case"circle":t.pq(D.eW)
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
break A}for(q=A.d.gae(r.z),p=new B.eB(q,new C.eC5()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eC6(),B.U(n).k("Y<1>")).gI(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.jj(C.j4(A.K,!1,t.gqS().d.l(),A.aG,40,A.bs,A.u,0.18,q,"Presentation Title",0,D.n5,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.jj(C.j4(A.K,!1,t.gqS().e.l(),A.aG,22,A.bs,A.a8,0.12,q,"Subtitle goes here",0,D.dk,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j4(A.bk,!0,4279310375,A.aG,20,A.bs,A.a8,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vc,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j4(A.bk,!1,4279310375,A.aG,20,A.bs,A.a8,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.vb,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j4(A.K,!1,4279310375,A.aG,24,A.cF,A.a8,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dk,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j4(A.bk,!1,4284773515,A.aG,14,A.bs,A.a8,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.vc,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j4(A.dX,!1,4279310375,A.aG,14,A.bs,A.a8,0.08,C.cD(),C.bFf(),0,D.dk,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j4(A.dX,!1,4279310375,A.aG,13,A.bs,A.a8,0.06,C.cD(),"Page "+(t.f+1),0,D.dk,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d9(new C.eBO(t))
w=1
break A
case"footer_bar":t.d9(new C.eBP(t))
w=1
break A
case"highlight":t.d9(new C.eBQ(t))
w=1
break A
case"redact":t.d9(new C.eBR(t))
w=1
break A
case"callout":t.d9(new C.eBS(t))
w=1
break A
case"checkboxes":t.jj(C.j4(A.bk,!1,4279310375,A.aG,20,A.bs,A.a8,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dk,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j4(A.bk,!1,4279310375,A.aG,16,A.bs,A.a8,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dk,0.8,0.1,0.18))
w=1
break A
case"memo":t.d9(new C.eBT(t))
w=1
break A
case"letter":t.jj(C.j4(A.bk,!1,4279179050,A.aG,17,A.bs,A.a8,0.82,C.cD(),C.bFf()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j4(A.bk,!1,4279310375,A.aG,22,A.bs,A.R,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vc,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j4(A.bk,!1,4279310375,A.aG,18,A.bs,A.a8,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dk,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j4(A.bk,!1,4279310375,A.aG,16,A.bs,A.a8,0.08,C.cD(),"Signature: _________________________",0,D.dk,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j4(A.bk,!1,4279310375,A.aG,16,A.bs,A.a8,0.08,C.cD(),"Initials: ______",0,D.dk,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j4(A.K,!1,4278556265,A.aG,28,A.bs,A.u,0.12,C.cD(),"APPROVED",0,D.n5,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j4(A.K,!1,4292617766,A.aG,28,A.bs,A.u,0.12,C.cD(),"DRAFT",0,D.dk,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j4(A.K,!1,871318596,A.aG,36,A.bs,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dk,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d9(new C.eBU(t))
w=1
break A
case"progress":t.d9(new C.eBV(t))
w=1
break A
case"stars":t.jj(C.j4(A.K,!1,4279310375,A.aG,36,A.bs,A.a8,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qX,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j4(A.K,!1,4279310375,A.aG,32,A.bs,A.R,0.14,C.cD(),"y = mx + b",0,D.dk,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j4(A.K,!1,4279310375,A.aG,18,A.bs,A.a8,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vb,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d9(new C.eBW(t))
w=1
break A
case"compare":t.d9(new C.eBX(t))
w=1
break A
case"link_text":t.jj(C.j4(A.bk,!1,4280640491,A.na,16,A.bs,A.a8,0.1,C.cD(),"https://example.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j4(A.bk,!1,4279310375,A.aG,18,A.bs,A.a8,0.1,C.cD(),"(555) 123-4567",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j4(A.bk,!1,4280640491,A.aG,18,A.bs,A.a8,0.1,C.cD(),"name@email.com",0,D.dk,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d9(new C.eBZ(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.d9(new C.eC_(t,r))
w=1
break A
case"invoice":t.jj(C.j4(A.bk,!1,4279179050,A.aG,16,A.bs,A.a8,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j4(A.bk,!1,4279179050,A.aG,17,A.bs,A.a8,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dk,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j4(A.bk,!1,4279310375,A.aG,16,A.bs,A.a8,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bFf()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j4(A.bk,!1,4279310375,A.aG,17,A.bs,A.a8,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dk,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j4(A.bk,!1,4279310375,A.aG,15,A.bs,A.a8,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dk,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qD,v)},
cyD(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f9l.q(0,this.z)},
cyC(d){if(this.kc()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
baK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cq,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bz
u=B.L(u,A.r,o&&e?2:1)
t=C.im9(d)
s=o?12:18
r=o?A.I:A.cT
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.q(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.q(p,D.PE,A.f,p,p,D.Ff,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fy,B.aA(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRd(d){var w,v=null,u=this.kc()
if(u==null)return A.bL
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aD:A.an,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bl],x.p)
A.d.v(w,new B.N(D.Se,new C.eDi(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.i,0,v,v)},
vN(d){return this.bDu(d)},
bDu(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aSl.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.or(),$async$vN)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d9(new C.eBD(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f7G
w=h.e
if(w==null)return h.bHo()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.R(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aH(u,A.c0,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eP,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c2:D.biy
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gT6()}else j=!1
if(j)k.push(new C.a8H(h.a.c,!1,h.e.gbcZ(),h.gceC(),g))
else if(s&&h.e!=null&&!h.kw()&&C.ckS(h.e.w)){j=h.a
k.push(new C.a8H(j.c,j.d,g,h.gcfL(),g))}if(s)k.push(h.bR8(w,t,r))
if(s&&h.kw()){w=t?A.fQ:A.kQ
j=B.n(14)
i=B.L(A.bm.j(0.35),A.r,1)
k.push(B.q(g,B.A(B.a([D.bXv,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fQ,g,g,g,g,g,g,g,g,12,g,g,A.R,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yx,A.it,g,g,g))}w=!n
if(w&&!h.kw())k.push(h.c74(t,r))
if(w&&h.kw())k.push(h.cG7(t))
if(r&&h.kc()!=null&&w&&!h.kw())k.push(h.c7_(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b8r(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b8r(t,!1),g))
i.push(B.E(new B.bL(A.b6,g,g,h.bIJ(v,t,!s||p),g),1))
if(h.cyD(r)&&u&&s&&!h.kw())i.push(h.ceo(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kw()&&h.cyC(!1))j.push(new B.a5(240,g,h.bU0(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c70(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bHo(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.R(p).ax.a===A.J
p=w?A.c2:A.bO
v=r.a.e
u=r.cdx(A.bm,A.qE,new C.eCl(r),r.gchW(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aOt(A.bm,A.hV,"Blank Presentation",new C.eCm(r)),1),A.at,B.E(r.aOt(A.b1,A.uQ,"Class Template",new C.eCn(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.by,s,A.n9,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.af],t)
t=r.d
if(t.length===0)u.push(r.bEh(w))
else{t=new B.i1(t,B.U(t).k("i1<1>"))
A.d.v(u,t.gdO(t).dL(0,new C.eCo(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cl(u,q,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bPf(){this.m(new C.eCZ(this))
var w=this.c
w.toString
if(B.aH(w,A.c0,x.w).w.a.a<900){w=$.aW.ap$.d.c
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
return B.b(B.bT(A.L,null,new C.eF9(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
Bp(d,e){return this.cyZ(d,e)},
cyZ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bp=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.YF,!0,"Dismiss",j,new C.eGI(),new C.eGJ(d,e),A.iH,!0,x.N),$async$Bp)
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
return B.b(C.aRL(d),$async$Bp)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRb(j,q,d.b),$async$Bp)
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
return B.b(r.FN(d,!1),$async$Bp)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.YF,!0,"Dismiss",j,new C.eGK(),new C.eGL(d),A.a3,!0,x.y),$async$Bp)
case 20:if(g===!0)r.OC(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahH("Rename presentation",d.b),$async$Bp)
case 24:l=g
if(l!=null)r.cti(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ak()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eGM(r,k))
r.pI()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bp,v)},
b3v(d,e){var w=null
return B.bM(!1,D.fTK,w,w,!0,w,w,w,e,w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bm,w,w,w,A.ay,w,A.lJ,w,w,w,w,w,A.kx,w,w))},
bEh(d){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBI(this,d),null)},
bNl(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eCN(),x.dv).bZ(0,new C.eCO()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.al1,this.aP3(v,e,new C.eCP(),f),null)},
aP3(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e2)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ab:A.bv,n,n,n,10),A.r3],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.q(n,new B.c6(A.aL,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bH(r,r,r,r),new B.bg(s,s,s,s),n,n,A.n),n,n,n,n,A.mV,n,n,n))
A.d.v(l,u)}return B.ev(A.a6,B.A(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e_)},
bEf(d,e,f){return this.aP3(d,e,null,f)},
bNn(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.ds8
else if(v==="hati_kuhoweya")w=D.dcJ
else{if(v==="hati_kiapo_uongozi")v=D.cZp
else v=C.kJ(v)?D.d6b:A.RP
w=v}v=this.fy
v===$&&B.c()
return B.c9(v,new C.eCS(this,f,d,e,w),null)},
c70(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kc()
if(i==null||i.b!==D.cW)return A.bL
w=k.Xt(i)
v=k.avi(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.C8,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bM(!1,D.fP9,j,j,!0,j,j,j,new C.eEi(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.au:A.c
q=B.n(18)
p=B.L(A.bm.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.ha,B.c3(new B.D(A.eU,B.aM(j,A.Z,!0,j,!0,A.t,j,B.aN(),w,A.bm,j,j,j,j,2,D.c2C,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xc,j,j,j,j,j,j,!1,"\u2022",j,new C.eEj(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.O,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.Az,A.ao,j,A.V4,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bi),j),1)
q=B.n(16)
p=d?A.bp:A.c
o=B.L(d?A.aM:A.aO,A.r,1)
n=B.E(B.ch(B.A(B.a([k.uD(G.OG,j,new C.eEk(k,i),d),k.uD(G.a1E,j,new C.eEl(k,i),d),k.uD(I.aps,j,new C.eEm(k,i),d),k.uD(I.a2r,j,new C.eEn(k,i),d),k.uD(k.bEd(i.as),j,new C.eEo(k,i),d),k.uD(D.aqy,j,new C.eEp(k,i),d),k.uD(D.aqx,j,new C.eEq(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bR(0,B.aJ(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.ala,B.q(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aD:A.an,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dd],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lK,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c7_(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kc()
if(m==null)return A.bL
w=m.b
v=w===D.cW
u=B.n(18)
t=x.O
t=d?B.a([A.bp,A.O],t):B.a([A.c,A.aQ],t)
s=B.L(d?A.aM:A.aO,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cA,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b72(A.j2,"Edit",new C.eE3(o,m),d,!0))
if(w===D.lR)p.push(o.b72(A.HH,"Shape & ring",new C.eE4(o),d,!0))
p.push(o.uD(A.CZ,"Format",new C.eE5(o),d))
if(v)A.d.v(p,B.a([o.uD(G.OG,n,new C.eE6(o,m),d),o.uD(D.aqy,n,new C.eE7(o,m),d),o.uD(D.aqx,n,new C.eE8(o,m),d)],q))
p.push(A.b3)
p.push(o.cwQ(A.ef,n,o.gaTb(),d,!0))
p.push(o.uD(A.hH,"Done",new C.eE9(o),d))
return B.q(n,B.A(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a6,A.a9,A.x,t,n,n),A.n),n,n,n,A.C7,A.lK,n,n,n)},
bEd(d){switch(d.a){case 2:return D.a2o
case 1:case 5:return D.a2q
default:return D.a2p}},
c7V(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dX
default:return A.bk}},
aBJ(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.az
else if(h)w=A.c
else{v=g?A.ab:A.aM
w=v}v=B.n(12)
u=B.n(12)
t=h?K.I_:n
if(h)s=n
else s=g?A.c.j(0.06):A.bO
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.e2,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qu,B.aJ(!1,A.a3,!0,n,B.aO(!1,v,!1,B.eI(new B.D(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uD(d,e,f,g){return this.aBJ(d,e,f,g,!1,!1)},
b72(d,e,f,g,h){return this.aBJ(d,e,f,g,h,!1)},
cwQ(d,e,f,g,h){return this.aBJ(d,e,f,g,!1,h)},
bR8(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bp,A.O],m):B.a([A.c,A.nk],m)
w=B.L(e?A.aM:A.o5,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bm.j(e?0.18:0.1),A.cA,18)],x.V)
u=p.a3y(A.eM,"Back",p.gbKs(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.O,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dd,B.E(B.A(B.a([new B.dn(1,A.co,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bV:A.an,o,o,o,o,o,o,o,o,11,o,o,A.R,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ug,o,A.e,A.i,0,A.d0,o),1)],q)
if(!p.kw()){u=p.a3y(A.ps,"Undo",p.ax.length===0?o:p.gcGI(),e)
A.d.v(r,B.a([u,p.a3y(D.bQY,"Redo",p.ay.length===0?o:p.gcs_(),e)],q))}r.push(p.a3y(A.z2,"PDF",new C.eDb(p),e))
r.push(p.a3y(A.hW,"Download as video",new C.eDc(p),e))
if(!p.kw())r.push(B.Cu(o,o,B.X(A.ov,e?A.ab:A.bv,o,o,o,o),new C.eDd(p),A.H,new C.eDe(p),A.ag,"More",x.N))
r.push(A.dd)
r.push(B.aJ(!1,A.a3,!0,o,B.aO(!1,B.n(14),!0,B.eI(D.eqD,o,new B.o(o,o,o,B.n(14),o,K.I_,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaCy(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.q(o,B.A(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.aA,A.aF,A.x,m,o,o),A.n),o,o,o,D.bB5,D.bGu,o,o,o)},
cG7(d){var w=this,v=null,u=B.n(18),t=d?A.au.j(0.92):A.c.j(0.96),s=B.L(d?A.cs:A.aO,A.r,1)
return B.q(v,B.ch(B.A(B.a([w.j5(A.uO,"Print",new C.eHt(w),d),w.j5(A.z2,"Download PDF",new C.eHu(w),d),w.j5(A.qK,"Present",w.gaCy(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yx,G.amN,v,v,v)},
a3y(d,e,f,g){var w,v=null
if(f==null)w=g?A.aV:A.dq
else w=g?A.ab:A.aM
return B.aG(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c74(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.au.j(0.92):A.c.j(0.96)
u=B.L(d?A.cs:A.aO,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eEt(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.ams,new B.ff(new C.eEu(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wl,r.aio(A.kt,"Ending celebration",r.gci8(),d),q),new B.D(S.wl,r.aio(A.HH,"Logo ring & frame",r.gciQ(),d),q)],x.p):A.f5)
A.d.v(t,w?B.a([new B.D(S.wl,r.aio(A.mh,"Look and feel",r.gciR(),d),q),new B.D(S.wl,r.aio(A.pv,"Edit this slide's text",r.gcjn(),d),q)],x.p):A.f5)
t.push(new B.D(S.wl,B.hb(B.aA(q,B.q(q,D.f74,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,N.lF.j(0.4),A.H,10)],x.V),D.asB,A.n),q,34,q,q,A.f2,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEv(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.A(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bGZ,q,q,A.aL)
s=e?8:10
return B.q(q,B.x(B.a([t,B.ch(r.cur(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yx,q,q,q,q)},
cur(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dlj[v]
u.a=null
s=u.a=t.b
w.push(e.lY(e.cwd(s),t.a,new C.eFS(u,e),a3,D.aSl.q(0,s)))}w.push(e.j5(A.lj,"Notes Slide",new C.eFT(e),a3))
w.push(e.lY(A.HG,"Quiz",new C.eFU(e),a3,!0))
w.push(e.lY(P.Hi,"Worksheet",new C.eG4(e),a3,!0))
w.push(e.lY(W.HJ,"Flashcard",new C.eGf(e),a3,!0))
w.push(e.lY(A.Pu,"Lab Report",new C.eGq(e),a3,!0))
w.push(e.lY(A.qH,"Rubric",new C.eGx(e),a3,!0))
w.push(e.lY(A.po,"Minutes",new C.eGy(e),a3,!0))
w.push(e.lY(A.ou,"Syllabus",new C.eGz(e),a3,!0))
w.push(e.lY(A.a2Z,"Timeline",new C.eGA(e),a3,!0))
return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dmG[v]
w.push(e.lY(r.b,r.c,new C.eGB(e,r),a3,!D.aSr.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.wJ,a0,e.gaOK(),a3),e.j5(A.uK,"Picture",new C.eFV(e),a3),e.j5(A.zc,"Bio link",new C.eFW(e),a3),e.j5(A.a2Y,"Table",new C.eFX(e),a3),e.j5(A.Py,"Sticky",new C.eFY(e),a3),e.j5(A.rW,"Divider",new C.eFZ(e),a3),e.j5(A.zl,"Header",new C.eG_(e),a3),e.lY(A5.rU,"Rectangle",new C.eG0(e),a3,!0),e.lY(A.pl,"Circle",new C.eG1(e),a3,!0),e.lY(A.a2e,"Triangle",new C.eG2(e),a3,!0),e.lY(A.jD,"Arrow",new C.eG3(e),a3,!0),e.lY(D.bPp,"Parallelogram",new C.eG5(e),a3,!0),e.lY(D.bRU,"Hexagon",new C.eG6(e),a3,!0),e.lY(A.rW,"Line",new C.eG7(e),a3,!0),e.lY(A.z2,"PDF",new C.eG8(e),a3,!0),e.lY(N.a37,"Signature",new C.eG9(e),a3,!0),e.j5(A4.CK,"Quote",new C.eGa(e),a3),e.j5(D.a1M,a1,new C.eGb(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.c0,x.w).w
u=x.p
t=B.A(B.a([e.aPC("Wide 16:9",D.DR,a3),e.aPC("Short 9:16",D.oM,a3),new B.D(A.fy,B.mZ(D.bU2,d,D.fLp,d,new C.eGc(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.A(B.a([e.bKH("This slide",!e.Q,a3,new C.eGd(e)),A.bl,e.aRR("All slides",e.Q,a3,new C.eGe(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bKI()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bV:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a54,new C.eGg(e),n),n.k("ak.E"))
n=B.ch(B.A(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dnH[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.aV,1.5,A.r,-1)
l.push(new B.D(A.fy,B.aA(d,B.q(d,d,A.f,d,d,new B.o(j,d,new B.bH(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eGh(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ch(B.A(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGu()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eGi(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.Q,q,A.am,p,A.Q,o,A.aw,n,A.Q,m,A.aw,l,A.Q,j,A.aw,B.ch(B.A(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c3L(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kc()
w=e.c
w.toString
w=B.aH(w,A.c0,x.w).w
u=new C.eFR(e)
t=new C.eGC(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Se,f.dy,new C.eGj(e,u,f),A.b1)
A.d.v(p,B.a([o,A.aw,n,A.Q,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aD:A.an,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.Se,q,new C.eGk(e,u),A.bm))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.lj,w,new C.eGl(e),a3),e.j5(A.uO,"Print deck",new C.eGm(e),a3),e.lY(D.aoz,"Export JSON",new C.eGn(e),a3,!0),e.j5(A.fU,"Duplicate Slide",e.gaU6(),a3),e.j5(A.ef,a2,e.gaTc(),a3),e.cAk(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kc()
w=x.p
u=B.a([e.j5(D.a1M,a1,new C.eGo(e),a3),e.j5(A.fU,"Duplicate",e.gaU6(),a3),e.j5(A.ef,a2,e.gaTc(),a3),e.j5(A.qK,"Present",e.gaCy(),a3),e.j5(A.CX,a0,e.gaOK(),a3),e.j5(A.CP,"Fit Text",new C.eGp(e),a3),e.j5(A.z2,"Download PDF",new C.eGr(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jH,"Transfer",new C.eGs(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.OG,"Bold",new C.eGt(e,f),a3),e.j5(G.a1E,"Italic",new C.eGu(e,f),a3),e.j5(G.aoa,"Underline",new C.eGv(e,f),a3),e.j5(Ag.OH,"Bullets",new C.eGw(e,f),a3),e.bTK(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bRd(a3))
w.push(e.j5(D.bO6,"Delete",e.gaTb(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.i,0,d,d)}},
aPC(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oM
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.aba,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dd,D.bTe],v))
return new B.D(A.fy,B.jt(t,t,t,B.A(u,A.m,t,A.e,A.P,0,t,t),t,new C.eCg(this,w,e),s===e,A.bm.j(0.25),t,t,t),t)},
cAk(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bL
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aV:A.cu,A.r,1)
u=B.n(8)
t=B.X(A.Hg,d?A.aD:A.an,q,q,q,14)
s=B.aG(q,q,q,q,D.arA,q,q,q,new C.eGZ(r,p),q,q,q,q,q,A.ce)
return B.q(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bn,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aG(q,q,q,q,D.arr,q,q,q,new C.eH_(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.GV,A.mU,q,q,q)},
cwd(d){switch(d.a){case 6:return W.HJ
case 7:return A.HG
case 8:return P.Hi
case 4:return A.zl
default:return A.lj}},
bTK(d,e){var w=null,v=B.L(e?A.aV:A.cu,A.r,1),u=B.n(8),t=B.aG(w,w,w,w,D.arA,w,w,w,new C.eDo(this,d),w,w,w,w,w,A.ce),s=A.j.M(d.w)
return B.q(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bn,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aG(w,w,w,w,D.arr,w,w,w,new C.eDp(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uv,A.mU,w,w,w)},
c3L(d){var w=null
return B.Cu(B.DY(B.X(A7.a1P,d?A.ab:A.bv,w,w,w,16),w,w,D.fR3,w,w,w),w,w,new C.eDW(),A.H,this.gbEV(),A.cl,"Slide layout",x.fO)},
lY(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bO,s=B.L(g?A.dr:A.aO,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dx:A.bm,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.q(w,D.PE,A.f,w,w,D.Ff,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fy,B.aJ(!1,A.a3,!0,w,B.aO(!1,v,!0,B.eI(new B.D(A.ha,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cU,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
j5(d,e,f,g){return this.lY(d,e,f,g,!1)},
b8r(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hN(t,new C.eHa(u,s,e,d),s.r.length,A.cl,t,w,new C.eHb(e),!1)
s=d?A.au:A.bO
w=B.a([],x.p)
if(e&&!u.kw())w.push(new B.D(A.cl,B.Ix(E.arO,new C.eHc(u),B.nV(t,A.bm,t,t,t,t,t,t,t,t,t,t,E.aT4,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.q(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bIJ(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oM?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bL(A.b6,v,v,new B.fF(w,B.aA(v,B.cs(new C.eCF(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eCG(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bIL(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kJ(a9.w))===!0,b1=b0&&C.fPH(b3),b2=b0&&b3.b===D.lr&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kw())v=!b0||a7.c67(b3)
else v=!1
if(!a7.kw())u=!b0||a7.c66(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ch:A.bm
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hes(b3))o=a8
else if(p&&!a7.kw())o=a7.gceE()
else o=a7.kw()?a8:new C.eCt(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.iL
i=w&&C.hes(b3)&&a7.Ap()?new C.eCu(a7,b3):a8
h=v&&b3.b===D.cW?new C.eCv(a7,b3):a8
g=u?new C.eCw(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c3:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.lr?A.L:a8
if(b1){a1=a7.kw()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.R,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.c0,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ap()
a3=b3.b===D.cW
a4=a3?a7.Xt(b3):a8
a5=a3?a7.avi(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.c0,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eCx(a7,b3):a8
a3=v&&a3?new C.eCy(a7,b3):a8
a6=C.b35(q,a4,a1,b3,a5,a2,a3,new C.eCz(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.q(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aA(a8,B.q(a8,D.bW3,A.f,a8,a8,new B.o(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCA(a7,b3,b4,b5),a8,a8,new C.eCB(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kw()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aA(a8,B.q(a8,D.bWL,A.f,a8,a8,new B.o(A.di,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc1f(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kw()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aA(a8,B.q(a8,D.bYo,A.f,a8,a8,new B.o(A.c3,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.H,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCC(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cW)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.c0,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aA(a8,B.q(a8,D.h_c,A.f,a8,a8,new B.o(A.bm,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.H,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lg,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eCD(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aA(j,B.eK(A.A,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bP("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aRR(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bm.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.L(e?A.bm:A.bz,A.r,1)
if(e)t=A.bm
else t=f?A.aD:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dd,B.q(r,D.PE,A.f,r,r,D.Ff,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.q(r,B.A(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bKH(d,e,f,g){return this.aRR(d,e,f,g,!1)},
ceo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b5,A.aP),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.au:A.aQ
t=f?A.xG:l
if(f)s=new B.bH(new B.ay(e?A.bz:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.ti,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ab:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b3v(e,new C.eEx(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bV:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.q(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(10),A.dn),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eEy(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aVp(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kc()
if(a2==null)return A.bL
w=new C.eDC(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.E(1-a2.c,0.06,1)
t=A.j.E(1-a2.d,0.06,1)
s=A.j.E(1-a2.e,0.01,1)
r=A.j.E(1-a2.f,0.01,1)
q=a5?A.dU:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.O,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b3v(a3,a0.gbPe())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.X)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fLW,B.E(B.kT(a1,a1,a1,u,0.05,new C.eDD(w,a2),A.j.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.A(B.a([D.fYz,B.E(B.kT(a1,a1,a1,t,0.05,new C.eDE(w,a2),A.j.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cW
if(m)o.push(B.A(B.a([D.fFs,B.E(B.kT(a1,a1,a1,96,10,new C.eDF(w,a2),A.j.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lR
if(l||n===D.lr||n===D.TA)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fRS,B.E(B.kT(a1,a1,a1,s,0,new C.eDG(w,a2),A.j.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.A(B.a([D.fZU,B.E(B.kT(a1,a1,a1,r,0,new C.eDH(w,a2),A.j.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Df[j]
i.a=null
g=h.a
i.a=g
k.push(B.jt(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDI(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bH,k,A.bt,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.D8[j]
f.a=null
g=e.a
f.a=g
h.push(B.jt(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.pP,a1,a1,a1),a1,new C.eDJ(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.Q,l,A.am,k,A.Q,i,A.am,B.bW(A.bH,h,A.bt,a1,6,6)],p))}o.push(A.Q)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eDK(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bH,l,A.bt,a1,6,6),A.af,B.hqU(new C.eDL(w,a2),D.cA8,B.ez([a2.as],k),!0,a1,k)],p))}if(n===D.fg){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aD:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eDM(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bH,m,A.bt,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.bYa,D.fTW,new C.eDN(a0,a5),B.bo(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cs:A.c
p=a4?A.xG:a1
if(a4)o=new B.bH(new B.ay(a3?A.bz:A.aO,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.q(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.ti,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GE,a1,a1,a1)},
bU0(d){return this.aVp(d,!1,!1,null)},
cdx(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c9(p,new C.eDQ(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fuT,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bG,A.cU,r.bEf(D.d3q,d,B.R(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ae,B.dP(B.hb(B.aJ(!1,A.a3,!0,q,B.aO(!1,q,!0,B.eI(D.fdy,q,new B.o(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c3.j(0.4),A.er,8)],p),D.asG,A.a7),q,q,q),A.cR,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.H)],u))
t=B.A(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.R(w).ax.a===A.J
w=B.n(20)
v=x.O
v=s?B.a([D.beD,D.bf5],v):B.a([A.c,A.kQ],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.q(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cA,14)],p),new B.a9(A.aA,A.aF,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aOt(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c9(w,new C.eBp(this,g,d,e,f),null)},
ahH(d,e){return this.cqe(d,e)},
cqe(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahH=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.ba(e,A.b5,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.eFu(d,q),p,null,!0,!0,x.N),$async$ahH)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
QC(d){var w=d.bT()
return""+B.bK(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.ag9.prototype={}
C.aAv.prototype={
S(){return new C.beG(null,null)}}
C.beG.prototype={
gcCF(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bK(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bl(u,A.qr,u,1,u,v)
w.fs(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bl(u,D.bzz,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bxx()},
Jv(d){var w=0.12+d*0.09,v=A.j.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cx.aC(0,new B.hU(w,v,A.cx).aC(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bFh,B.c9(new B.h5(B.a([u,w],x.dS)),new C.d9P(this),v),v),v,v,v)}}
C.beV.prototype={
B(d){var w=null,v=B.n(22),u=B.L(A.aM,A.r,1),t=x.p
return B.at(new B.D(D.bFy,B.aJ(!1,A.a3,!0,w,B.q(w,B.bx(B.n(22),B.x(B.a([new B.D(D.bEJ,B.x(B.a([B.q(w,D.bWR,A.f,w,w,new B.o(A.az.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fW7,A.X,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fw7,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dW,D.byC,B.A(B.a([B.E(B.bM(!1,D.fK5,w,w,!0,w,w,w,new C.dac(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.nz,w,A.oR,w,w,w,w,w,w)),1),B.q(w,w,A.f,A.bp,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fPu,w,w,!0,w,w,w,new C.dad(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.az,w,w,w,w,w,A.nz,w,A.oR,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.aq),A.f,w,A9.Xm,new B.o(A.au,w,u,v,D.d3P,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.Ky.prototype={
S(){return new C.beF()}}
C.beF.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dG,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.q(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.da(B.aA(o,B.vS(B.cT(o,B.A(B.a([r,A.at,new B.dn(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f_:A.c,o,o,o,o,o,o,o,o,13,o,o,A.R,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.ba,A.P,0,o,o),o,o,A.b4,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,o,A.nA,o,o,1/0),A.cx,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d9K(p,d),new C.d9L(p),new C.d9M(p),new C.d9N(p),o,o,o,!1,A.a4),k),new B.p(0,(1-k)*16))}}
C.Qr.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aJ(!1,A.a3,!0,t,B.aO(!1,s,!0,new B.D(A.eU,B.A(B.a([B.q(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.aA,A.aF,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nc,v,v,v),A.bG,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a0C.prototype={
S(){return new C.aG3(D.dk,null,null)}}
C.aG3.prototype={
gZL(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bz8,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b8V(d){if(!this.a.c.ay)return
this.x=d
this.gZL().iy(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.axm(D.fk0)
C.ij1()
v.S5()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.gZL().t()
v=w.z
if(v!=null)v.a1(0)
C.axm(D.fk1)
C.ij4()
w.bzD()},
cFv(){B.jT()
this.m(new C.eI9())
var w=this.c.L(x.q).f
w.a5M()
if($.bmB)w.U(D.fgS)},
S5(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cz(B.dv(0,0,0,0,0,A.o.E(C.hp5(u,w),1,120)),new C.eI_(v))},
cF8(){var w,v=this
v.m(new C.eI8(v))
if(v.r)v.S5()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXl(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cz4(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eI0(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cz(A.lI,new C.eI1(w))},
azm(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eHW(u))
u.S5()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXl()){u.cz4()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eHX(u,A.o.F(w+1,s)))
u.b8V(w)
u.S5()}},
coT(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eHY(v))
v.S5()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eHZ(v,w,t))
v.b8V(w)
v.S5()}},
cAA(d){var w,v=this,u=v.e
if(u===D.cq){u=v.d
u===$&&B.c()
return new B.mH(d,new B.bP(u,x.ac))}w=v.cAB(u)
u=v.d
u===$&&B.c()
return B.p4(new B.mH(d,new B.bP(u,x.ac)),w,new C.eI6(),A.b4,A.b4,new C.eI7(v))},
cAB(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bzv
case 16:return A.iJ
case 18:return A.mQ
default:return A.ma}},
cAz(d,e,f){var w,v,u,t=null,s=B.cJ(A.cx,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jF(e,new B.bf(s,new B.bq(A.vl,A.H,w),w.k("bf<bN.T>")),t,!0)
case 3:w=x.K
return B.jF(e,new B.bf(s,new B.bq(A.TO,A.H,w),w.k("bf<bN.T>")),t,!0)
case 4:case 21:w=x.K
return B.jF(e,new B.bf(s,new B.bq(A.ih,A.H,w),w.k("bf<bN.T>")),t,!0)
case 5:w=x.K
return B.jF(e,new B.bf(s,new B.bq(A.th,A.H,w),w.k("bf<bN.T>")),t,!0)
case 6:case 16:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bN.T>")))
case 7:w=x.b
return B.it(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bN.T>")))
case 8:return B.c9(s,new C.eI2(s),e)
case 9:return B.c9(s,new C.eI3(s),e)
case 10:return B.c9(s,new C.eI4(s),e)
case 11:return B.c9(s,new C.eI5(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.it(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bN.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jk(B.jF(e,new B.bf(s,new B.bq(A.vl,A.H,v),v.k("bf<bN.T>")),t,!0),A.t,new C.btR(w,t))
case 15:w=x.K
return B.jF(e,new B.bf(s,new B.bq(A.TO,A.H,w),w.k("bf<bN.T>")),t,!0)
case 19:w=B.dr()
w.n_((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k5(v,u,v,1)
return B.fw(A.A,B.da(e,s.gp(0)),t,w,!0)
case 20:return B.eK(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jk(new C.apF(B.c9(n.gZL(),new C.eIa(n,v,w),m),m),A.t,m)}else{t=B.rY(new C.Jw(w,!0,!1,m))
l=B.b0(w.e)
u=n.cAA(B.e8(B.jk(t,A.t,m),l,!0))}l=B.n(20)
k=x.p
s=B.q(m,B.A(B.a([B.d(n.r?"Auto "+C.hp5(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oY,m,m,m),A.bl,D.bZf],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aT,m,m,l,m,m,A.n),m,m,m,m,A.h9,m,m,m)
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
l.push(B.bR(0,new C.Oe(new C.Fd(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oM?0.5625:1.7777777777777777
l.push(B.at(new B.fF(r,B.jk(B.uS(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmB){r=B.Ix(A.ln,new C.eIb(d),B.nV(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ae,B.Ix(B.X(n.r?Am.uN:A.hs,m,m,m,m,m),n.gcF7(),B.nV(m,A.aT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bm(!0,B.q(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fW,m,m,m),A.f,m,m,new B.o(A.aT,m,m,r,m,m,A.n),m,m,m,m,A.h9,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aA(A.c5,B.q(A.ly,$.bmB?A.bL:s,A.f,m,m,m,m,64,m,m,D.bAf,m,m,150),A.y,!1,m,n.gcFu(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.aA(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eIc(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KE.prototype={
B(d){var w=null
return B.q(w,B.bm(!0,new B.D(E.ame,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7b,w,w,w,w,w,w,w,w)}}
C.btR.prototype={
jt(d){return new B.a3(0,0,0+d.a*A.j.E(this.b,0,1),0+d.b)},
k9(d){return d.b!==this.b}}
C.bjG.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.n(999)
break
case"rounded":w=B.n(18)
break
case"arch":w=D.b3Y
break
default:w=B.n(6)
break}v=s.e
u=B.L(v?A.aE:A.L,A.r,2.5)
if(q==="circle")q=B.n(999)
else{t=B.n(q==="rounded"?9:3)
q=t}w=B.cT(r,B.at(B.q(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.wP,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b4,new B.o(s.f,r,u,w,r,r,A.n),A.fZ,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bjF.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dB6.h(0,p)
if(o==null)o=D.dmQ
p=p==="none"
w=p?q:new B.a9(A.a6,A.a9,A.x,o,q,q)
p=p?A.d_.j(0.25):q
v=r.e
u=v?B.L(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqM:q
w=B.q(q,B.q(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a7),q,52,q,q,A.ey,q,q,52)
return B.aA(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLR.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a2()}}
C.aNR.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzF.prototype={}
C.aNS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.b38.prototype={}
C.X1.prototype={
S(){return new C.aG1()},
bjH(d){return this.e.$1(d)}}
C.aG1.prototype={
gb78(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaby(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb78()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQt(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb78()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8q(){return A.d.cI(this.gaby(),0,new C.eHG())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RF()},
RF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3K(s.c,s.f),$async$RF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eHC(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RF,v)},
Jx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaby()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fSW(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pr(o,q.c,q.f),$async$Jx)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eb(new C.eHF(t,p),!1,null,x.H)
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
return B.b(B.hE(o,D.edI,!0,"NgmySlidesTransferScan",x.N),$async$S3)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eHD(t))
w=4
return B.b(C.ain(s),$async$S3)
case 4:r=e
t.m(new C.eHE(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.ffH)
w=1
break}w=5
return B.b(t.a.bjH(r),$async$S3)
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
q=C.fTa(null,A.d.gH(n),s,t.a.f)}else q=C.fTa(n,null,r.c,r.f)
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
for(;;)switch(w){case 0:t.m(new C.eHH(t))
w=3
return B.b(C.bEY(),$async$a3J)
case 3:s=e
t.m(new C.eHI(t))
if(s==null||J.cr(s)){w=1
break}w=4
return B.b(t.a.bjH(s),$async$a3J)
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
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.dj:A.bO,k=o.gaby().length!==0,j=B.ao(n,B.q(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bm.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aG(n,n,n,n,B.X(A.cz,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eHL(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.O,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.x7],h),A.m,n,A.e,A.i,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bm.j(0.35),A.eX,24)],x.V)
u=B.ao(n,B.X(A.qE,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.A(B.a([B.q(n,D.bZO,A.f,n,n,new B.o(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bKp],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hb(B.aA(A.c5,D.fdA,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcjz(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.q(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a3D,A.n),n,n,n,n,E.a0k,n,n,1/0),A.dW,o.azn(m,"What to transfer"),A.af,B.A(B.a([B.E(o.aZN(A.qK,m,new C.eHM(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aZN(D.bPi,m,new C.eHN(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d6,o.azn(m,"Choose presentation"),A.X],h)
u=o.a.d
if(u.length===0){u=m?A.au:A.c
t=B.n(16)
s=B.L(m?A.bz:A.aO,A.r,1)
v.push(B.q(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aD:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.eHO(o,m),B.U(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.n9)
w.push(o.azn(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.arZ(A.aJ,k,!0,A.jG,m,o.r,o.gcdB(),"Scan on another device","Show QR"),1),A.at,B.E(o.aOu(A.jT,!0,A.jo,m,o.gcvN(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.X)
w.push(B.A(B.a([B.E(o.bCJ(A.aY,k,A.hW,m,o.r,o.gcdy(),"Download .json","Backup file"),1),A.at,B.E(o.aOu(A.ax,!0,AB.zk,m,o.gcI1(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bm.j(m?0.12:0.08)
u=B.n(16)
t=B.L(A.bm.j(0.28),A.r,1)
s=B.X(A.lN,A.bm.j(0.9),n,n,n,18)
r=o.gaQt()
q=o.gb8q()
p=o.gb8q()===1?"":"s"
A.d.v(w,B.a([A.by,B.q(n,B.A(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ab:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ai.Oc,i,n),B.E(B.cl(w,n,n,D.bDR,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.q(n,U.XD,A.f,A.dN,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
agS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ipu(s,t.d,t.e),$async$agS)
case 2:return B.h(null,v)}})
return B.i($async$agS,v)},
azn(d,e){var w=null,v=B.q(w,w,A.f,w,w,new B.o(A.bm,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aD:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZN(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.au:A.c
if(g)w=A.bm
else w=e?A.bz:A.aO
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bm.j(0.2),A.cA,14)],x.V):s
u=A.bm.j(g?0.2:0.1)
t=B.n(12)
t=B.q(s,B.X(d,A.bm,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cl,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.O,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aJ(!1,A.a3,!0,s,B.aO(!1,r,!0,B.eI(new B.D(A.bE,B.x(B.a([t,A.X,u,A.bG,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bNm(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.au:A.c,m=B.n(16)
if(p)w=A.bm
else w=e?A.bz:A.aO
w=B.L(w,A.r,p?2:1)
v=B.q(q,D.c__,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a6,A.a9,A.x,B.a([A.bm,A.bm.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.O,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aD:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ea:A.pl
if(p)r=A.bm
else r=e?A.aV:A.dq
return new B.D(A.cw,B.aJ(!1,A.a3,!0,q,B.aO(!1,o,!0,B.q(q,B.A(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eHB(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
arZ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.au:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aO
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.q(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rR,s,s,s)],t)
if(i)u.push(B.ao(s,B.q(s,D.arl,A.f,s,s,D.b6Y,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.O,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.da(B.aJ(!1,A.a3,!0,s,B.aO(!1,p,!0,B.eI(new B.D(E.a_Y,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bG,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aD:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aOu(d,e,f,g,h,i,j){return this.arZ(d,e,!1,f,g,!1,h,i,j)},
bCJ(d,e,f,g,h,i,j,k){return this.arZ(d,e,!1,f,g,h,i,j,k)}}
C.X2.prototype={
S(){return new C.bmA()}}
C.bmA.prototype={
Y(){this.a3()
this.afE()},
afE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fTa(null,A.d.gH(m),k,r.a.f):C.fTa(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kJ(A.d.gH(n).w))C.fSW(A.d.gH(r.a.d),D.dkA)
n=r.a
m=n.c
n=C.imp(n.d)
w=7
return B.b(C.fT9(p,C.imu(r.a.d),n,m,q),$async$afE)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eHP(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHQ(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.R(d).ax.a===A.J,h=i?A.dj:A.bO,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eHR())
v=B.aG(j,j,j,j,B.X(A.eM,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eHS(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.O,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.x7],u),A.m,j,A.e,A.i,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.df,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.q(j,B.x(B.a([r,A.Q,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.R,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a3D,A.n),j,j,j,j,E.a0k,j,j,1/0)
q=B.n(24)
s=B.L(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.Vc,A.K,j,j))
else if(k.d==null)r.push(D.eqc)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cA,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fKz,A.am,B.aA(j,B.q(j,B.A(B.a([D.c0w,A.at,B.d(m,j,j,j,j,j,j,D.fwx,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c5r,A.n),j,j,j,j,A3.am_,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eHT(k,d),j,j,j,j,j,j,!1,A.a4),A.Q,D.fP0,A.aC],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.L(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.q(j,B.q7(j,j,!1,l,j,!0,!0,j,!1,D.buG),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cl,j,j,j))
A.d.v(r,p)}r.push(A.aC)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hg,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ai.Oc,v,j),B.E(B.ch(B.x(B.a([t,A.aR,B.q(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c7n,A.n),j,j,j,j,A.uu,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.amj,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aFZ.prototype={
S(){return new C.aG_(new B.au(A.av,$.aw()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aG_.prototype={
Y(){var w=this
w.a3()
w.e.aV(0,new C.eBj(w))
$.aW.x1$.push(new C.eBk(w))},
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
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eP,x.w).w,i=B.n(28),h=B.L(A.bm.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bm.j(0.28),A.vi,36),D.aeo],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.q(k,B.x(B.a([B.q(k,D.bWV,A.f,k,k,new B.o(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fHB,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b7o,k,k,k,k,A.yJ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.au:A.O
o=new B.aP(14,14)
if(q)n=A.bm
else n=r?A.bm.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bm.j(0.28),A.H,12)],g):k
t.push(new B.by(1,A.bb,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fpR,k,k,k),k,k,A.b4,new B.o(s,k,new B.bH(m,m,m,m),new B.bg(o,o,o,o),n,k,A.n),A.fZ,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.Eu)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.i,0,k,k),B.bR(0,B.da(B.aM(k,A.Z,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c3k,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uM(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C_(5,k),new C.bx8()],x.aS),k,k,A.aUh,k,5,k,1,k,k,!1,"\u2022",k,new C.eBf(l),k,new C.eBg(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mw,k,k,k,k),0),0,0,0)],a1)
d=C.z8(w.a.a.toUpperCase())==null?k:l.gcdC()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aJ(!1,A.a3,!0,k,new B.cR(Af.LI,B.q(k,B.bx(e,B.x(B.a([a0,new B.D(D.bEm,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.X,D.fFU,A.by,new B.a5(1/0,50,B.bI(D.fX1,k,d,B.bo(A.bm,A.bp,A.an,k,A.c,k,k,k,new B.b9(B.n(16),A.a1),k,k,k)),k),A.am,B.bM(!1,A.nV,k,k,!0,k,k,k,new C.eBh(a2),k,B.fs(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.dj,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bx8.prototype={
oY(d,e){var w=e.a.toUpperCase()
return e.cOA(B.hg(A.bA,w.length),w)}}
C.asI.prototype={
S(){return new C.aG2(B.zO(A.Nu,A.o0,A.v_))}}
C.aG2.prototype={
t(){this.d.t()
this.a2()},
b1B(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iY(w,d)},
abt(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h13(s),$async$abt)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b1B("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abt,v)},
cdA(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.ims(w[u])
if(t!=null){this.b1B(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aG(s,s,s,s,A.wL,s,s,s,t.gbRM(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eG(B.a([r,B.aG(s,s,s,s,B.X(q?A.uH:An.Pa,s,s,s,s,s),s,s,s,new C.eHV(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dj,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fYf,s,s,s,1,s,!0)
r=B.zN(t.d,A.bZ,t.gcdz())
w=B.n(28)
w=B.at(B.q(s,s,A.f,s,s,new B.o(s,s,B.L(A.bm,A.r,3),w,B.a([new B.ac(2,A.G,A.bm.j(0.35),A.H,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ao(32,B.q(s,D.fLH,A.f,s,s,new B.o(v,s,B.L(A.bm.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxm.prototype={
B(d){var w=null,v=B.n(24),u=B.L(A.aM,A.r,1)
return B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([B.q(w,H.ar0,A.f,w,w,D.b77,w,56,w,w,w,w,w,56),A.aR,D.fXW,A.am,new B.k_(this.c,new C.fiz(),w,w,x.cI),A.aR,new B.k_(this.d,new C.fiA(),w,w,x.cl),A.af,D.fXU],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Af.LI,new B.o(A.au,w,u,v,w,w,A.n),w,w,w,K.a0q,D.bF_,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8H.prototype={
S(){return new C.bmj(A.bC)},
gd1(){return this.c}}
C.bmj.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a0_()
w.d=B.de(A.fF,new C.epz(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a0_(){return this.cs6()},
cs6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.epx(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bE(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ckT(p.c),$async$a0_)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.epy(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0_,v)},
bTS(d){var w,v,u=d.a,t=A.o.ar(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ar(u,6e7)%60
v=A.o.ar(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.u(w),2,"0")+"m "+A.a.b_(A.o.u(v),2,"0")+"s left"
return A.a.b_(A.o.u(w),2,"0")+":"+A.a.b_(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bL
w=s.e.a
v=A.o.ar(w,6e7)<30&&A.o.ar(w,36e8)<999?A.az:A.c3
w=v.j(0.14)
u=B.n(14)
t=B.L(v.j(0.55),A.r,1)
return B.q(r,B.A(B.a([B.X(A.Hg,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bTS(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Aa.al5,A.it,r,r,1/0)}}
C.a9A.prototype={
nv(){var w,v,u,t=this
t.xU()
w=t.cx
v=t.c
w.bu1(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qd(B.H(["/S",D.etW,"/URI",new B.rT(B.XD(w.as),A.vm,!0)],x.N,u),u))}}
C.a9B.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b4O.prototype={
bBI(d,e,f,g,h,i,j,k,l,m){var w=B.ez([D.ese],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcS3(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k5(w,new C.coN(),B.a4(w).k("k5<cg.E,F>")).f1(0,new C.coO())},
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
C.coP.prototype={}
C.a40.prototype={}
C.aji.prototype={}
C.aT0.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lA(d)
q.My(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bj1(w)
u=x.N
t=x.Y
s=new C.coP(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bBI(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qd(B.H(["/Type",D.etU],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9A(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.ayl.prototype={}
C.aUu.prototype={
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
u.LG(t)
u.Tl(0)
u.pl(0,v)
w.fV(d)
u.ny(0)}}}
var z=a.updateTypes(["aB<~>()","~(lY)","P(i3)","~()","P(eN)","P(oG)","P(lY)","~(i3)","P(eN,eN)","KE(Z)","P(o4)","P(ls)","aB<P>()","F(F,i3)","a8<m,@>(i3)","ai<A6>()","m(o4)","P(a8Y)","m(lY)","m(wq)","P(Fm)","F(i3,i3)","m(eN)","v(eN)","cL(eN)","v(hF)","~(hF)","eN(v7,I,I,I,I,F{fx:m,key:m,rotation:I})","eN(m,I,F)","F(oG,oG)","P(A6)","P(m,ai<A6>)","a8<m,@>(oG)","o4()","ZI(Z)","eN(m,I,I,I,I,I{align:qi,anim:hF,bullets:P,color:F?,delay:F,fx:m,key:m,style:Iq,weight:nS})","a20(Z)","eN(m,I,I,I,I{anim:hF,delay:F,fx:m,key:m})","aB<~>(oG)","P(mL)","ZG(Z)","a1w(Z)","a1v(Z)","Qg(Z)","a_T(Z)","eN(v7,I,I,I,I,F,m,m{anim:hF,delay:F,rotation:I,stroke:F,strokeWidth:I})","eN(m,I,I,I,I,I,m,m,F)","eN(I,I,m,F{size:I})","v(rH,I,I)","ls()","oG(a8<@,@>)","~(uY)","Fm()","fi(eN)","v(ja)","a_q(Z)","~(Fd)","a_L(Z)","F(eN,eN)","eN(eN)","a8<m,@>(eN)","eN(a8<@,@>)","lY(lY)","a8<m,@>(lY)","lY(a8<@,@>)","P(jW)","jW()","m(i3)","~(ai<oG>)","V(ai<i3>)","V(i3)","ai<i3>(m?)","adG(Z,F)","~(P(eN,eN))","aek(Z)","ag_(Z,F)","u(lY,P)","WQ(Z)","aen(Z)","WR(Z)","~(mP)","i3(i3)","I(eN)","a1_(Z)","a0C(Z)","i3()","ai<FJ>()","aB<~>(ai<i3>)","v(bA<F,i3>)","D(jW)","D(Fm)","aB<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","P(ml)","ai<jC<mP>>(Z)","jC<mP>(mP)","i3(a8<@,@>)","X1(Z)","eN(m,I,I,I,I,I,F{align:qi,style:Iq,weight:nS})","X2(Z)","v(i3)","~(me)","Jw(Z,lY,v?)","F(a9B)","aB<ai<a8<m,@>>?>()","m(m)","aB<A5>({paper:m?,photo:dK?,request:m,template!lv})","aB<a8Q>({doc!A5,history:ai<+(m,m)>,instruction!m,photo:dK?,template!lv})","aeh(Z)"])
C.cO3.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:64}
C.cO4.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:73}
C.cO5.prototype={
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
C.cO6.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTo.prototype={
$1(d){return J.eE(A.dM.gaU(d),d.byteOffset,d.byteLength)},
$S:1689}
C.fFg.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iT(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iT(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iT(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iT(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1690}
C.c3k.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:30}
C.c3l.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:42}
C.c3n.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fW6.prototype={
$1(d){return new C.a20(this.a,this.b,C.ink(),null)},
$S:z+36}
C.fh1.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fh5.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fh6.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fh7.prototype={
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
C.fh2.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fh3.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fh4.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fgX.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hf,w,w,w)
return B.eg(B.a([B.bM(!1,E.aWo,w,w,!0,w,w,w,new C.fgV(d),w,w),B.bM(!1,D.fJ6,w,w,!0,w,w,w,new C.fgW(d),w,w)],x.p),w,w,D.ZL,v,w,w,w,w,D.fYy,w)},
$S:18}
C.fgV.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fgW.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.fgY.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fgZ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fhb.prototype={
$0(){var w=this.a
return w.m(new C.fha(w,this.b))},
$S:0}
C.fha.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fh0.prototype={
$0(){var w=this.a
return w.m(new C.fh_(w,this.b,this.c))},
$S:0}
C.fh_.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.fh8.prototype={
$0(){return this.a.a27(this.b)},
$S:0}
C.fh9.prototype={
$0(){return this.a.PI(0,this.b)},
$S:0}
C.fhe.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fhf.prototype={
$0(){var w=this.a
return w.m(new C.fhd(w,this.b))},
$S:0}
C.fhd.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fhc(),B.U(w).k("N<1,m>")))}},
$S:0}
C.fhc.prototype={
$1(d){return d.a},
$S:z+67}
C.fox.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hmh(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cD)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oG(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.foy.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fIr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbs())q=n===o.gbs()&&p.b>o.gcE()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fIp.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fIq.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+29}
C.fVB.prototype={
$1(d){return d.ak()},
$S:z+32}
C.fEV.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fWs.prototype={
$1(d){return new C.ZI(this.a,null)},
$S:z+34}
C.cPq.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cPs.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cPv.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cPu())},
$S:12}
C.cPu.prototype={
$0(){},
$S:0}
C.cPx.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a30(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cC(s)
p=q.bj(s,new C.cPt(r))
if(p<0)q.c4(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aix(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:283}
C.cPt.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPy.prototype={
$1(d){},
$S:29}
C.cPr.prototype={
$1(d){return new C.ZG(this.b,this.a.gcC0(),null)},
$S:z+40}
C.cPz.prototype={
$1(d){return D.hq7},
$S:z+43}
C.cPm.prototype={
$1(d){var w=null,v=B.n(24),u=B.L(D.Zi,A.r,1),t=x.p
return B.at(B.aJ(!1,A.a3,!0,w,B.q(w,B.x(B.a([new B.D(D.bEM,B.x(B.a([B.q(w,D.bU3,A.f,w,w,new B.o(A.az.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aR,D.fI1,A.X,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fvs,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dW,new B.D(A.qx,B.A(B.a([B.E(B.dU(D.fP2,new C.cPk(d),B.di(w,w,w,w,w,w,w,w,w,E.nt,w,w,A.cn,w,new B.b9(B.n(14),A.a1),D.b4p,w,w,w,w)),1),A.at,B.E(B.bI(D.fVg,w,new C.cPl(d),B.bo(A.bD,w,w,w,w,w,A.cn,w,new B.b9(B.n(14),A.a1),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xJ,new B.o(D.agb,w,u,v,D.d8D,w,A.n),w,w,w,K.a0q,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1691}
C.cPk.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cPl.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cPn.prototype={
$0(){return J.nM(this.a.d,new C.cPj(this.b))},
$S:0}
C.cPj.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cPi.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.L(D.Zi,A.r,1),q=x.p
q=B.a([B.A(B.a([B.q(t,D.bZ7,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.asB,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aW2,t,t,t),A.bG,D.fVb],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aC],q)
for(w=0;w<2;++w){v={}
u=D.dwb[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azh(u[1],u[2],u[3],new C.cPg(v,d),!1,t))}q.push(A.am)
q.push(D.byF)
q.push(A.am)
q.push(new C.azh(A.ef,"Delete book","Remove it from this device",new C.cPh(d),!0,t))
return B.bm(!0,B.q(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.agb,t,r,s,t,t,A.n),t,t,t,A.uq,E.a03,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cPg.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cPh.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cPp.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aLn,12)],x.V)
return B.dP(B.eK(A.A,e,B.q(w,B.bx(B.n(4),new B.a5(62,95.81818181818181,B.ev(A.A,F.apr(d),A.f,A.dz),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.p(f,0))},
$S:z+48}
C.cPo.prototype={
$0(){return this.a.c7K()},
$S:0}
C.cPf.prototype={
$0(){return this.a.b0_(0,this.b)},
$S:0}
C.cPe.prototype={
$0(){return this.a.DL(this.b)},
$S:0}
C.cPd.prototype={
$0(){return this.a.DL(this.b)},
$S:0}
C.cPA.prototype={
$2(d,e){var w=this.a
return w.bGj(J.t(w.d,e))},
$S:43}
C.cOH.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bk()},
$S:0}
C.cOG.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b39("Page "+(v.length+1),"",""))},
$S:0}
C.cOJ.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cOR.prototype={
$0(){},
$S:0}
C.cOS.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cOK.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cP.gcu().aM(this.c)},
$S:0}
C.cOI.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOM.prototype={
$0(){return this.a.Rc(this.b)},
$S:0}
C.cON.prototype={
$0(){return this.a.Rc(this.b)},
$S:0}
C.cOO.prototype={
$0(){var w=this.a
w.m(new C.cOL(this.b))
w.EA()},
$S:0}
C.cOL.prototype={
$0(){return this.a.c=""},
$S:0}
C.cOQ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cOP(w,d))
w.EA()},
$S:z+51}
C.cOP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cOX.prototype={
$2(d,e){if(d)this.a.Bk()},
$S:124}
C.cOT.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bk(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fig)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cOU.prototype={
$0(){return this.a.aZU(this.b,-1)},
$S:0}
C.cOV.prototype={
$0(){return this.a.aZU(this.b,1)},
$S:0}
C.cOW.prototype={
$0(){return this.a.c95(0,this.b)},
$S:0}
C.fMZ.prototype={
$1(d){return C.hwn()},
$S:44}
C.fN_.prototype={
$1(d){return null},
$S:29}
C.fsQ.prototype={
$1(d){return null},
$S:29}
C.fNY.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:334}
C.fNX.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:215}
C.fO3.prototype={
$1(d){var w=this.a
return C.hej(d)===w||C.hBa(d)===w},
$S:z+4}
C.frR.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.cf5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fMX.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fMY.prototype={
$1(d){return C.fPH(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fHO.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fPF,A.Q,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HS,D.fJJ,new C.fHM(d),B.bo(A.c3,w,w,w,A.w,w,A.cn,w,w,w,w,w)),A.X,B.es(A.uU,D.fQY,new C.fHN(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cn,w,w,R.xH,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHM.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHN.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHP.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,D.fFK,w,w,!0,w,w,w,new C.fHK(d),w,w),B.bI(D.fXz,w,new C.fHL(d),w)],x.p),w,w,w,D.fZw,w,w,w,w,D.fFD,w)},
$S:18}
C.fHK.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fHL.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ekQ.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ekO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ekP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ekR.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ekS.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fO2.prototype={
$1(d){return A.a.b_(A.o.u(d),2,"0")},
$S:78}
C.fNZ.prototype={
$2$h$w(d,e){var w=null
return new B.bL(A.a6,w,w,B.BP(A.A,B.q(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1692}
C.fO0.prototype={
$1(d){var w=null,v=B.n(3)
return B.q(A.A,B.d(d,w,w,w,w,w,w,D.fwM,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:132}
C.fO1.prototype={
$1$size(d){var w=null
return B.A(B.a([B.q(w,w,A.f,w,w,new B.o(w,w,B.L(A.ip,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.q(w,w,A.f,w,w,new B.o(w,w,B.L(A.ip,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.p(-d*0.38,0))],x.p),A.m,w,A.ba,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1693}
C.fO_.prototype={
$2$female$size(d,e){var w=null,v=d?D.ail:this.a,u=B.L(A.ip,A.r,1),t=e*0.32,s=B.ao(w,B.q(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.q(w,new B.an(A.A,w,A.ad,A.t,B.a([s,B.ao(e*0.06,B.q(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.agr,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1694}
C.fZV.prototype={
$1(d){return new C.aeh(this.a,this.b,null)},
$S:z+108}
C.e7l.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bvh:A.MV,q=B.L(D.jy.j(0.25),A.r,1),p=B.at(B.q(t,t,A.f,t,t,new B.o(A.c3.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.q(t,D.ark,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jy.j(0.35),A.er,10)],x.V),D.c7Z,A.n),t,t,t,t,A.yy,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.q(t,B.x(B.a([new B.D(O.a0g,B.x(B.a([p,A.aC,B.A(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jy,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bG,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fvY,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aTl,new C.e7k(w,this.c),v,D.alU,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mD,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.e7k.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adG(w,new C.e7j(this.b,w),null)},
$S:z+72}
C.e7j.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fHS.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fHT.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fTf,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HS,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHQ(d),B.bo(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VM,new C.fHR(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cn,w,w,R.xH,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHQ.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHR.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fHW.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fHX.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fGO,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HS,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHU(d),B.bo(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VM,new C.fHV(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cn,w,w,R.xH,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHU.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHV.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fI_.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fI0.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fNs,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HS,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fHY(d),B.bo(D.jy,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VM,new C.fHZ(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cn,w,w,R.xH,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fHY.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fHZ.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.h0n.prototype={
$1(d){return D.hvk},
$S:z+74}
C.epC.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.blO:A.MV,s=B.L(A.aB.j(0.25),A.r,1),r=B.at(B.q(v,v,A.f,v,v,new B.o(A.aB.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.q(v,D.c0t,A.f,v,v,new B.o(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c3.j(0.35),A.er,10)],x.V),D.asG,A.n),v,v,v,v,A.yy,v,v,v)
w=x.p
return B.q(v,B.x(B.a([new B.D(O.a0g,B.x(B.a([r,A.aC,B.A(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.MR,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bG,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fto,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aTl,new C.epB(this.b),19,D.alU,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mD,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.epB.prototype={
$2(d,e){var w=D.Sv[e]
return new C.ag_(w,new C.epA(this.a,w),null)},
$S:z+75}
C.epA.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fPL.prototype={
$0(){return B.hdf(C.iaJ(this.a))},
$S:335}
C.fPK.prototype={
$0(){var w=C.heC(this.a)
return"data:image/png;base64,"+A.cP.gcu().aM(w)},
$S:22}
C.fq7.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jq(d,e),new B.jq(w,e+v),new B.jq(d+f*14,e),new B.jq(w,e-v)],x.J)
B.a2X(this.a,C.fE(4291404327),v)},
$S:677}
C.h0y.prototype={
$1(d){return new C.WQ(this.a,null)},
$S:z+77}
C.esz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esy())},
$S:31}
C.esy.prototype={
$0(){},
$S:0}
C.esA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esx(w,d))},
$S:1696}
C.esx.prototype={
$0(){return this.a.x=J.eQ(A.dM.gaU(this.b))},
$S:0}
C.esB.prototype={
$1(d){},
$S:29}
C.esb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.es7.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esi.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.esj.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eED)},
$S:0}
C.esk.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esd.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cd)},
$S:0}
C.ese.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.esf.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.esg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esh.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dV,A.iI)}},
$S:7}
C.esc.prototype={
$0(){var w=this.a,v=w.z,u=C.fQo(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cNJ(C.fQo(t))},
$S:0}
C.es9.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.esa.prototype={
$0(){return this.a.as=!1},
$S:0}
C.esq.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.esr.prototype={
$0(){var w=this.a
return w.m(new C.esp(w))},
$S:0}
C.esp.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ess.prototype={
$0(){var w=this.a
return w.m(new C.eso(w,this.b))},
$S:0}
C.eso.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.est.prototype={
$1(d){var w=this.a
return w.m(new C.esn(w))},
$S:9}
C.esn.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.esu.prototype={
$1(d){var w=this.a
return w.m(new C.esm(w))},
$S:9}
C.esm.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.esv.prototype={
$0(){var w=this.a
return w.m(new C.esl(w,this.b))},
$S:0}
C.esl.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.esw.prototype={
$1(d){return this.a.a_M()},
$S:2}
C.es8.prototype={
$0(){return this.a.ccS(this.b)},
$S:0}
C.ciL.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:331}
C.ciJ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ciK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPl.prototype={
boj(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTn(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cK_($.rd().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mW(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boj(d,e)},
$S:1697}
C.fND.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNF.prototype={
$1(d){var w=this.a.a
w=A.d.aO(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fNE.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ft(t,A.ct,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r6,A.bW,t,A.dA,A.bX)
v=this.a
w.o5(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fpH.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fpI(),B.U(w).k("Y<1>")).gI(0)},
$S:246}
C.fpI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpF.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:209}
C.fpG.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:209}
C.ciM.prototype={
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
o=C.hei(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hb_(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aO(n.gcld(),"\n\n")
d=B.ft(a6,A.ct,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aft(k,q,1.28),j),A.r6,A.bW,a6,A.dA,A.bX)
d.o5(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hei(i,new B.G(!0,h,a6,k,a6,a6,q,A.cT,A.bs,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.hb_(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aft(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.q(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bb,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.r6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCb(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:391}
C.ciN.prototype={
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
l=C.hei(f,new B.G(!0,e,a5,i,a5,a5,h,A.cT,A.bs,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.hb_(g.length===0?B.a([a6],n):g,l))break}a1=o.aft(i,h,1.28)
a2=new C.ciO(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Kd,new B.a5(v,a5,a4.f,a5),A.Kd,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bHb,B.q(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bb,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.r6,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCb(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:154}
C.ciO.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r6,w,w),w)},
$S:778}
C.h0B.prototype={
$1(d){return new C.WR(this.a,this.b,null)},
$S:z+79}
C.etl.prototype={
$1(d){return d.lb()},
$S:1699}
C.etm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.etk(w,d))},
$S:1700}
C.etk.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.et8.prototype={
$0(){return this.a.y=!0},
$S:0}
C.et9.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etf.prototype={
$0(){return B.a6(this.a,!1).eO()},
$S:0}
C.etg.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bF,A.r,2.5)
return B.aA(w,B.q(w,B.b4(w,w,w,new C.bdU(u,v.gazf(),w),A.fJ),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etd(v),new C.ete(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.etd.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:270}
C.ete.prototype={
$1(d){var w=this.a
w.m(new C.eta(w,d,this.b,this.c))},
$S:203}
C.eta.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.E(s.x*r.d,1,6)
w=s.gazf()
r=r.a
v=t.c
u=t.d
s.r=A.j.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eth.prototype={
$1(d){var w=this.a
return w.m(new C.etc(w,this.b))},
$S:9}
C.etc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eti.prototype={
$1(d){var w=this.a
return w.m(new C.etb(w,d))},
$S:6}
C.etb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etj.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.h0R.prototype={
$1(d){return D.hy7},
$S:z+83}
C.f2d.prototype={
$1(d){return this.a.Zo()},
$S:7}
C.f15.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cP.gcu().aM(v)},
$S:0}
C.f1t.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f1D.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f0P.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0Q.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f0N.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f0O.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f1m.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f1n(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jk(B.rY(q>0.2?F.bWP(r,new B.Ek(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jk(B.da(B.rY(F.bWP(s.$1(!0),new B.Ek(12,12,A.x))),w*0.75),A.t,v))
s=t.b7
if(s!=null&&t.b6>0)q.push(B.e8(v,B.b0(s).j(t.b6),!0))
s=t.bf
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bf
w.toString
q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c0(D.b1N,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi))}s=t.aL
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c0(D.b1y,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi))
s=t.aR
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b6,A.b8,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.d7b,v),A.n),A.bi))
if(t.aH>0){s=t.k1
q.push(B.ao(v,B.c3(v,new B.o(v,v,v,v,v,new B.a9(A.b6,A.b8,A.x,B.a([A.w.j(0),A.w.j(t.aH),A.w.j(t.aH),A.w.j(0)],x.O),D.diS,v),A.n),A.bi),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a_
if(s>0)q.push(B.e8(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(B.c3(v,new B.o(v,v,v,v,v,new B.c0(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dfL,v),A.n),A.bi))
t=t.aG
if(t>0)q.push(B.b4(v,v,v,new C.bhv(t,v),A.ay))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:67}
C.f1n.prototype={
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
t=o.bH
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eK(A.A,l,B.fw(A.A,new B.BB(new B.uH(q,q,n,A.xU),p,q),q,B.wd(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.p(-m*r.d*u/2,-t*r.c*u/2))},
$S:493}
C.f1z.prototype={
$0(){return this.a.m(new C.f1y(this.b,this.c))},
$S:0}
C.f1y.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1A.prototype={
$1(d){return this.a.m(new C.f1x(this.b,d))},
$S:6}
C.f1x.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f1C.prototype={
$0(){return this.a.m(new C.f1B(this.b,this.c))},
$S:0}
C.f1B.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0F.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f0G.prototype={
$1(d){var w=this.a
return w.m(w.gcDo())},
$S:2}
C.f0H.prototype={
$1(d){return this.a.m(new C.f0E())},
$S:2}
C.f0E.prototype={
$0(){},
$S:0}
C.f0I.prototype={
$0(){var w=this.a
return w.m(new C.f0D(w,this.b))},
$S:0}
C.f0D.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f0K.prototype={
$2(d,e){return A.at},
$S:37}
C.f0J.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bz
q=B.L(q,A.r,t?2.5:1)
r=B.cT(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b4,new B.o(w,w,q,s,w,new B.a9(A.b6,A.b8,A.x,r,w,w),A.n),A.fZ,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a5(70,w,B.x(B.a([r,A.fK,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aD,w,w,w,w,w,w,w,w,10.5,w,w,A.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0C(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.f0C.prototype={
$0(){var w=this.a
return w.m(new C.f0z(w,this.b))},
$S:0}
C.f0z.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f0L.prototype={
$1(d){var w=this.a
return w.m(new C.f0B(w,d))},
$S:9}
C.f0B.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f0M.prototype={
$1(d){var w=this.a
return w.m(new C.f0A(w,d))},
$S:9}
C.f0A.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f22.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f29.prototype={
$1(d){var w=this.a
return w.m(new C.f2a(w,d))},
$S:32}
C.f2a.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dY(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f2b.prototype={
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
C.f23.prototype={
$0(){var w=this.a
return w.m(new C.f21(w,this.b))},
$S:0}
C.f21.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.f24.prototype={
$0(){var w=this.a
return w.m(new C.f20(w,this.b))},
$S:0}
C.f20.prototype={
$0(){var w,v=this.b.length,u=J.e2(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f25.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f2_(v,w.b,w.c,w.d))},
$S:0}
C.f2_.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f26.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtc(v))},
$S:0}
C.f27.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f28.prototype={
$0(){var w=this.a
return w.m(new C.f1Z(w))},
$S:0}
C.f1Z.prototype={
$0(){var w=this.a.db
return A.d.hy(w,0,w.length,0)},
$S:0}
C.f1M.prototype={
$1(d){return d.a===this.a.dy},
$S:218}
C.f1N.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aAT[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azj(new B.nn(new B.bg(n,n,n,n),A.aq,new B.l3(new B.o(j,j,j,j,j,new B.a9(A.a6,A.a9,A.x,m,j,j),A.n),A.bi,new C.b10(l,B.b0(k==null?v.w.x:k),A.j.E(w,12,26),j),j),j),u,q.b,o===p,new C.f1L(r,v),2,i))}return B.bW(A.bH,h,A.bt,j,7,7)},
$S:169}
C.f1L.prototype={
$0(){var w=this.b
return w.m(new C.f1G(this.a,w))},
$S:0}
C.f1G.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f1O.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:151}
C.f1R.prototype={
$0(){var w=this.a
return w.m(new C.f1K(w))},
$S:0}
C.f1K.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f1S.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f1T.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f1U.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f1V.prototype={
$0(){var w=this.a
return w.m(new C.f1J(w))},
$S:0}
C.f1J.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f1W.prototype={
$0(){var w=this.a
return w.m(new C.f1I(w))},
$S:0}
C.f1I.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f1X.prototype={
$0(){var w=this.b
return w.m(new C.f1H(this.a,w))},
$S:0}
C.f1H.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f1Y.prototype={
$1(d){return this.a.fx=d},
$S:151}
C.f1P.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f1Q.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f1q.prototype={
$0(){var w=this.a
return w.m(new C.f1p(w))},
$S:0}
C.f1p.prototype={
$0(){var w=this.a
w.p4=null
w.b5Q()},
$S:0}
C.f1r.prototype={
$0(){var w=this.a
return w.m(new C.f1o(w,this.b))},
$S:0}
C.f1o.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f1s.prototype={
$0(){var w=this.a
return w.m(w.gctL())},
$S:0}
C.f1i.prototype={
$0(){var w=this.a
return w.m(new C.f1h(w))},
$S:0}
C.f1h.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f1j.prototype={
$0(){var w=this.a
return w.m(new C.f1g(w))},
$S:0}
C.f1g.prototype={
$0(){var w=this.a
w.aH=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f1k.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dgb[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azj(new B.nn(new B.bg(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BB(new B.uH(o,o,v.aZw(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.xU),B.fR(u,A.A,140,o,A.cj,A.bZ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f1f(v,s),3,n))}return B.bW(A.bH,m,A.bt,o,10,8)},
$S:169}
C.f1f.prototype={
$0(){var w=this.a
return w.m(new C.f1e(w,this.b))},
$S:0}
C.f1e.prototype={
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
C.f0X.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f0Y.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f0Z.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f1_.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f10.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f11.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f12.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f13.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f14.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f0i.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f0j.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f0k.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f0l.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f0m.prototype={
$0(){var w=this.a
return w.m(new C.f0h(w))},
$S:0}
C.f0h.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f0n.prototype={
$1(d){return this.a.b7=d},
$S:151}
C.f0o.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f0R.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f0S.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f0T.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.f0U.prototype={
$1(d){return this.a.bf=d},
$S:151}
C.f0V.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f0s.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.f0t.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f0u.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f0v.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.f0w.prototype={
$0(){var w=this.a
return w.m(new C.f0r(w))},
$S:0}
C.f0r.prototype={
$0(){var w=this.a
return w.c9=A.j.F(w.c9+90+180,360)-180},
$S:0}
C.f0x.prototype={
$0(){var w=this.a
return w.m(new C.f0q(w))},
$S:0}
C.f0q.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.f0y.prototype={
$0(){var w=this.a
return w.m(new C.f0p(w))},
$S:0}
C.f0p.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f1l.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iq7(v,w.p4)},
$S:0}
C.f1d.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bvC:B.fR(v,A.A,w,w,A.cj,A.bZ,!1,w,!1,w,w)
return C.fNL(d.length===0?"rounded":d,u,e)},
$S:125}
C.f19.prototype={
$0(){var w=this.a
return w.m(new C.f18(w))},
$S:0}
C.f18.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f1a.prototype={
$0(){var w=this.b
return w.m(new C.f17(this.a,w))},
$S:0}
C.f17.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f1b.prototype={
$0(){var w=this.b
return w.m(new C.f16(this.a,w))},
$S:0}
C.f16.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f1c.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.E(w.ay,0,1-d)
w.ch=A.j.E(w.ch,0,0.95)},
$S:6}
C.f1w.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.H,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.em(n.cn9(),n.r))
l.push(new C.Jw(n.cAj(),!1,!1,t))
o=B.bR(0,B.bx(o,new B.em(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.q(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ao(t,B.aA(A.c5,B.c3(t,new B.o(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f1v(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:228}
C.f1v.prototype={
$1(d){var w=this.a
return w.m(new C.f1u(w,d,this.b,this.c))},
$S:19}
C.f1u.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f1F.prototype={
$0(){var w=this.a
return w.m(new C.f1E(w,this.b))},
$S:0}
C.f1E.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f0W.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.f2c.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b1t(),B.E(B.at(w.b4t(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aSq(),1),w.aOv()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.j.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1t(),new B.D(A.hF,B.at(s.b4t(u),t,t,t),t),B.E(s.aSq(),1),s.aOv()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:698}
C.fL1.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aG,"",4280640491,i,l,m,"",h,C.bCS(),null,"","",0,!1,"",0,D.bj,4280172719,2,d,0,0,"",D.cq,D.cW,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bs,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bs,A.R)},
$S:z+98}
C.fL0.prototype={
$3(d,e,f){var w=this,v=C.bCS(),u=w.b?A.I:A.cC,t=w.c?A.cF:A.bs
return C.er(w.d,!1,f,A.aG,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bj,4280172719,2,d,0,w.f,w.e,D.cq,D.cW,0.82,0.09,w.a)},
$S:z+28}
C.ckg.prototype={
$1(d){return B.w(d)},
$S:17}
C.fSL.prototype={
$0(){return this.a},
$S:z+15}
C.fxH.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fxI.prototype={
$2(d,e){return J.cr(e)},
$S:z+31}
C.fSN.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fSQ.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fSR.prototype={
$0(){return A.d.gH(D.wT)},
$S:z+33}
C.fSJ.prototype={
$1(d){return d.a},
$S:z+16}
C.fSM.prototype={
$1(d){return d.a},
$S:z+16}
C.fQH.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fQI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQJ.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fL5.prototype={
$0(){return C.cD()},
$S:22}
C.fL8.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cq,s=u?n:0
return C.er(j,l,v,A.aG,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bj,4280172719,2,d,s,0,"",t,D.cW,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"","",A.bs,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,"",j,A.bs,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,null,0,j,k,A.bs,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bs,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bs,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dk,!1,k,l,"",m,A.bs,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,null,0,"",k,A.bs,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,D.dk,!1,j,k,"",l,A.bs,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,!1,k,0,l,m,A.bs,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bk,j,k,l,m,"",n,A.bs,A.a8)},
$S:z+35}
C.fL7.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cq,D.fg,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fL6.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cq,t=v?j:0
return C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bs,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bj,4280172719,2,"",t,0,"",u,D.lR,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qX,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fL4.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fNw.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hxo.c3(0,A.a.i(s.w).toLowerCase(),new C.fNu(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fNv(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bqD(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1703}
C.fNu.prototype={
$0(){return F.aPp(this.a.w)},
$S:202}
C.fNv.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBL("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:202}
C.fpB.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fpC.prototype={
$1(d){return d.a},
$S:z+18}
C.fpD.prototype={
$1(d){return d.b},
$S:z+19}
C.h12.prototype={
$1(d){return D.hyn},
$S:z+41}
C.f8A.prototype={
$0(){return this.a.x=C.i2_(this.b,this.c.b)},
$S:0}
C.f8B.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f8y.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.f8z.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.f8x.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.au,null,new C.f8s(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kB,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.f8t(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hDB(o,m.cOv(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f8u(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f8s.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f8w(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.q(p,D.bbX,A.f,p,p,D.b6R,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.D8:D.Df,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fNL(v,i.b6s(h),u),p)))}t=B.kS(1,m,4,10,10,p,A.dU,!0)
if(!l)return B.bm(!0,new B.D(Ab.yF,t,p),!0,!1,A.ag,!0,!0)
s=new C.f8v(i,d)
m=B.aH(d,A.c0,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Ia[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,m.a.b*0.85),B.ch(B.x(B.a([D.fLQ,A.X,t,A.dW,D.f7c,A.aw,D.fWV,A.X,B.kS(1.15,l,3,10,10,p,A.dU,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yF,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.f8w.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.br:A.dr
return B.aA(w,B.q(w,e,A.f,w,w,new B.o(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hG,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f8r(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1704}
C.f8r.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f8v.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bN:A.bz
r=B.L(r,A.r,t?2.5:1)
w=B.n(10)
u=B.E(B.q(v,B.bx(w,d.length===0?B.q(v,D.arQ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dx(!0,new C.Oe(u.Gb(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bN:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f8q(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:125}
C.f8q.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f8t.prototype={
$0(){var w=this.a
return w.w=w.w.Gb("")},
$S:0}
C.f8u.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f8g.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f8h.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f8j.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f8k.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f8l.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f8m.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f8i(w,d))},
$S:2}
C.f8i.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f8n.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f8O.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.f8P.prototype={
$0(){var w=this.a
return w.m(new C.f8N(w))},
$S:0}
C.f8N.prototype={
$0(){return this.a.e=null},
$S:0}
C.f8Q.prototype={
$0(){var w=this.a
return w.m(new C.f8M(w))},
$S:0}
C.f8M.prototype={
$0(){return this.a.x=null},
$S:0}
C.f8S.prototype={
$1(d){var w=this.a
return w.m(new C.f8L(w,d))},
$S:35}
C.f8L.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f8T.prototype={
$1(d){var w=this.a
return w.m(new C.f8K(w,d))},
$S:35}
C.f8K.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8U.prototype={
$0(){var w=this.a
return w.m(new C.f8J(w))},
$S:0}
C.f8J.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f8V.prototype={
$1(d){var w=this.a
return w.m(new C.f8I(w,d))},
$S:35}
C.f8I.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f8W.prototype={
$1(d){var w=this.a
return w.m(new C.f8H(w,d))},
$S:35}
C.f8H.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f8X.prototype={
$0(){var w=this.a
return w.m(new C.f8G(w))},
$S:0}
C.f8G.prototype={
$0(){var w=this.a
return w.w=w.w.Gb("")},
$S:0}
C.f8Y.prototype={
$0(){var w=this.a
return w.m(new C.f8F(w,this.b))},
$S:0}
C.f8F.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f8Z.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bSs(D.a5s[v]),null))
return B.bW(A.bH,t,A.bt,null,8,8)},
$S:169}
C.f8R.prototype={
$1(d){var w=this.a
return w.m(new C.f8E(w,d))},
$S:9}
C.f8E.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f8o.prototype={
$0(){var w=this.a
return w.m(new C.f8p(w,this.b,this.c))},
$S:0}
C.f8p.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.f8D.prototype={
$0(){var w=this.a
return w.m(new C.f8C(w,this.b))},
$S:0}
C.f8C.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h11.prototype={
$1(d){return new C.a1v(this.a,this.b,null)},
$S:z+42}
C.f89.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f8a.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f8b.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKI?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f8c.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f8d.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f88(w,d))},
$S:2}
C.f88.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f8e.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f8f.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.aB(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hg(A.bA,w.length),A.aP))},
$S:0}
C.fwY.prototype={
$1(d){return d.a===this.a},
$S:218}
C.ep1.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazk(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.d0H:D.diA
t=D.yi.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yi.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.H,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bR(0,B.b4(q,q,q,new C.bjN(n*6.283,q),A.ay),0,0,0)
o=o.x
o=B.bR(0,B.bTE(B.eK(A.A,0.5,B.q(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a6,A.a9,A.x,B.a([A.L,D.bjR.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.p(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.q(q,B.bx(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ea:A.mi,D.yi,q,q,q,20),A.aw,B.ev(A.A,B.o9(A.jO,D.fF7,new C.ep0()),A.f,A.e_)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.q(q,D.fBB,A.f,q,q,new B.o(D.yi,q,q,B.n(6),q,q,A.n),q,q,q,q,P.amB,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.aA,A.aF,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:98}
C.ep0.prototype={
$1(d){return D.c6c.aJ(0,d)},
$S:72}
C.fSS.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fST.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:218}
C.fSU.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1705}
C.fSV.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fSO.prototype={
$1(d){return d.a},
$S:z+18}
C.fSP.prototype={
$1(d){return d.b},
$S:z+19}
C.h0f.prototype={
$1(d){return new C.a_T(this.a,this.b,null)},
$S:z+44}
C.dsf.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dsg.prototype={
$1(d){return d.a===this.a.gajM()},
$S:z+10}
C.dsh.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dsk.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dsl.prototype={
$0(){var w=this.a
return w.m(new C.dsj(w,this.b))},
$S:0}
C.dsj.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dsm.prototype={
$1(d){var w=this.a
return w.m(new C.dsi(w,d))},
$S:9}
C.dsi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ep_.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.e0(w,this.a)
return B.cW(w,0,B.dA(e,"count",x.S),B.U(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1706}
C.flU.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bk,!1,4279310375,A.aG,"",i,24,A.bs,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fg,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cq,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.flW.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.K,!1,this.b.d,A.aG,"",4280640491,i,A.bs,A.cT,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bj,4280172719,2,d,l,0,"",D.n5,D.cW,g,e,f)},
$S:z+46}
C.flV.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xb(0,"twinkle")
w=t===D.bj?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.n5,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.flT.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fMc.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fMd.prototype={
$0(){return A.d.gH(D.Ij)},
$S:z+49}
C.fMe.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fo0.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fSk.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bj,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bj,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSl.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bj,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bj,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bj,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fH,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSm.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bj,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.kc,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.kc,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fH,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSx.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.kc,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.kc,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.kb,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bj,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSC.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.kb,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bj,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bj,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSD.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.kc,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bj,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSE.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d_A[w]
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bs,A.aG,4279310375,A.bk,null,D.bj,v,4294967295,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.L9
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSF.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mN,A.dx,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bs,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.L9
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSG.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bj,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.kb,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fH,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSH.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bj,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fH,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.kc,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bj,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSI.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.kc,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bj,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bj,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSn.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.kb,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.kb,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fSo.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.kb,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.kb,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.kb,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eW,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fSp.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bj,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bj,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.kc,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.kb,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fH,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fSq.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bj,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.kb,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.kb,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fH,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fSr.prototype={
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
C.fSs.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.kc,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eW,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fH,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fSt.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mN,A.dx,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bs,A.aG,4279310375,A.bk,null,D.DT,v,2450411,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.L9
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bj,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fSu.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bs,A.aG,s,A.bk,null,D.fH,t,t,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.L9
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bj,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bj,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fH,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSv.prototype={
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
C.fSw.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jb
$.jb=t+1
t=new C.eN("design_"+(""+1000*u+"_"+t),D.fg,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bs,A.aG,r,A.bk,null,D.bj,4294967295,4280640491,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
u=$.L9
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c4(d.z,0,t)
u=B.ar(A.d5,A.cr,w/2).l()
t=Date.now()
s=$.jb
$.jb=s+1
u=new C.eN("design_"+(""+1000*t+"_"+s),D.fg,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bs,A.aG,r,A.bk,null,D.bj,u,q,0,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.L9
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bj,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.kb,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fSy.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.kc,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.kc,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.kc,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.kc,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bj,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eW,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fSz.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bj,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bj,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eW,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eW,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eW,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.kc,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fSA.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bj,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bj,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bj,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eW,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fH,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eN("design_"+(""+1000*v+"_"+u),D.fg,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bs,A.aG,4279310375,A.bk,null,D.eW,16777215,t,2,0,!1,"",0,D.cq,0,"","","","","",!1,0)
v=$.L9
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c4(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fSB.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bj,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.kc,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.kc,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bj,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bj,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fK2.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fK3.prototype={
$0(){return A.d.gH($.bGu())},
$S:z+52}
C.fwg.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fwf.prototype={
$1(d){return C.i9F(d,this.a,this.b)},
$S:z+53}
C.fT0.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wd(1.0375,1.01875,1)
return new B.fV(v,u,new C.aUu(B.hZX(A.vK,C.i9I(w.c,w.d,v,u),t)))},
$S:389}
C.e2A.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e2z.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c3(w,new B.o(w,w,w,w,w,new B.c0(A.Lm,1.2,A.x,w,0,u.d,w,w),A.n),A.bi),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jk(new B.an(A.a0,w,A.b2,A.t,B.a([t,new B.em(B.b4(w,w,w,new C.bgA(u.a,r,q,r),A.ay),w),B.at(new B.k_(r,new C.e2y(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:323}
C.e2y.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ep.aC(0,A.j.E(e/1.4,0,1)),p=A.j.E(e/0.9,0,1),o=A.j.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.H,l)],x.V)
A.d.v(j,B.a([B.q(r,B.hR(B.fR(i,A.A,r,r,A.cj,A.bZ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.mF(e*0.8)),A.a7),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bts(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.H,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.da(B.dP(B.x(B.a([B.q(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a6,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaN6(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.p(0,(1-o)*m*0.03)),o))
return B.da(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f7m.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,this.a.c,B.a([0,A.j.E(w-0.1,0,1),A.j.E(w,0,1),A.j.E(w+0.1,0,1),1],x.x),null).aJ(0,d)},
$S:72}
C.ceH.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bN:A.bz
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i2.j(0.4),A.H,14)],x.V):v
w=B.cT(v,B.bx(B.n(12),d,A.aq),v,v,A.b4,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a5(112,v,B.x(B.a([w,A.fK,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bN:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1707}
C.ceI.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gb(""))},
$S:0}
C.ceJ.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dx(!0,new C.Oe(v.Gb(u),!0,!1,null),null),d.b,new C.ceK(w,this.c,d),v.a===u)},
$S:z+54}
C.ceK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hDB(u.b,t.c.Gb(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fZF.prototype={
$1(d){return new C.a_q(this.a,null)},
$S:z+55}
C.dht.prototype={
$0(){var w=this.a
w.d=w.gwe().beJ("data:"+this.b+";base64,"+A.cP.gcu().aM(this.c));++w.r},
$S:0}
C.dhy.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhz.prototype={
$0(){var w=this.a
return w.m(new C.dhx(w))},
$S:0}
C.dhx.prototype={
$0(){return this.a.r++},
$S:0}
C.dhA.prototype={
$1(d){var w=this.a
return w.m(new C.dhw(w,d))},
$S:2}
C.dhw.prototype={
$0(){var w=this.a
return w.d=w.gwe().aFM(this.b)},
$S:0}
C.dhB.prototype={
$0(){var w=this.a
return w.m(new C.dhv(w))},
$S:0}
C.dhv.prototype={
$0(){var w=this.a
return w.d=w.gwe().beJ("")},
$S:0}
C.dhC.prototype={
$1(d){var w=this.a
return w.m(new C.dhu(w,d))},
$S:2}
C.dhu.prototype={
$0(){var w=this.a
return w.d=w.gwe().beP(this.b)},
$S:0}
C.dhD.prototype={
$0(){var w=this.a
w=w.gwe().beP(w.gazl().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fZE.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fZD(w),null)},
$S:20}
C.fZD.prototype={
$2(d,e){var w=null,v=this.a
return B.q(w,B.bm(!0,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c0,x.w).w.a.b*0.85),B.ch(B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aC,D.fTV,A.aw,D.fUa,A.aC,new C.b0Y(v.a,new C.fZC(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b7p,w,w,w,w,A.NX,w,w,w)},
$S:176}
C.fZC.prototype={
$1(d){this.b.$1(new C.fZB(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fZB.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h10.prototype={
$1(d){return D.hsl},
$S:z+57}
C.doh.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.doi.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.doj.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fPE.prototype={
$1(d){var w=this.b
return new B.a9(A.aA,A.aF,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.E(w-0.12,0,1),A.j.E(w,0,1),A.j.E(w+0.12,0,1)],x.x),null).aJ(0,d)},
$S:72}
C.dha.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ai,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aZ(t+r*1.2,o))
u.D(new B.c8(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c8(w,q+p,w,q+p*1.2))
u.D(new B.DI(B.bX(new B.p(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.J()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.N(new B.p(w,o),2.2,p)},
$S:459}
C.fPI.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+58}
C.fI3.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fI4.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yI,B.x(B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fBT,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dh(D.HS,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fI1(d),B.bo(A.c3,w,w,w,A.c,w,A.cn,w,w,w,w,w)),A.X,B.es(A.oD,D.VM,new C.fI2(d),B.di(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cn,w,w,R.xH,w,w,w,w))],x.p),A.al,w,A.e,A.P,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fI1.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fI2.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cke.prototype={
$1(d){return d.hQ()},
$S:z+59}
C.ckf.prototype={
$1(d){return d.ak()},
$S:z+60}
C.ckd.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aI(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aI(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aI(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i5i(b2.h(0,"type"))
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
n=A.aCZ[A.o.E(b4,0,8)]
m=D.d2M[A.o.E(w,0,1)]
l=C.i94(b2.h(0,"decoration"))
k=B.aI(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.azk[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ibT(b2.h(0,"shape"))
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
a3=C.hyv(b2.h(0,"textTransition"))
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
C.ck3.prototype={
$1(d){return d.hQ()},
$S:z+62}
C.ck4.prototype={
$1(d){return d.ak()},
$S:z+63}
C.ck0.prototype={
$1(d){return B.w(d)},
$S:17}
C.ck1.prototype={
$1(d){return B.w(d)},
$S:17}
C.ck2.prototype={
$1(d){return C.hp6(B.a2(d,x.N,x.z))},
$S:z+64}
C.ckv.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckw.prototype={
$0(){return A.d.gH(D.a54)},
$S:z+66}
C.ckq.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cf(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.ckp.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckl.prototype={
$1(d){return new B.N(d,new C.ckm(),B.U(d).k("N<1,V>")).f1(0,new C.ckn())},
$S:z+69}
C.ckm.prototype={
$1(d){return d.f},
$S:z+70}
C.ckn.prototype={
$2(d,e){return d.cf(e)?d:e},
$S:682}
C.cko.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hVH(d)},
$S:z+71}
C.ckr.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cks.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+21}
C.ckt.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fQg.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ao(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fQc.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fQd.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fQe.prototype={
$2(d,e){var w
if(d.b===D.cW){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fQf.prototype={
$2(d,e){return d.b===D.fg&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ck9.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ikH(b2,b3),b5=B.a4(b4).k("b8<2>")
b5=B.cE(new B.b8(b4,b5),new C.ck8(),b5.k("M.E"),x.N)
w=B.d4(b5,B.a4(b5).k("M.E"))
b1=b1.e
v=A.qn.aC(0,A.j.E(b1,0,1))
u=new C.cka()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ckb(a9,b7.d)
r=new C.ckc(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jW.aC(0,A.j.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kE(A.j.E(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.p(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
a5=r.$1(a4)}else a5=a2===D.lR&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kE(A.j.E(o,0,1),r.$1(l),a8),new B.kE(A.j.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iQ(B.wH(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cq)a7=D.n5
p.push(s.$5(i.c,i.d,i.e,i.f,C.hB_(a7,a6,r.$1(i))))}}return B.c3(new B.an(A.a0,a8,A.ad,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a6,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi)},
$S:452}
C.ck8.prototype={
$1(d){return d.a},
$S:z+22}
C.cka.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ckb.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1711}
C.ckc.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8G(v,C.b35(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dPJ.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.d9(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cki.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ckj.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fT7.prototype={
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
C.fSe.prototype={
$1(d){return new C.aen(this.a,this.b,null)},
$S:z+78}
C.eBl.prototype={
$0(){return this.a.QB(this.b,C.io6(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eBm.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QB(this.b,C.io8(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eBn.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QB(this.b,C.io7(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eBo.prototype={
$0(){A0.hAK()
B.a6(this.a,!1).O(null)},
$S:0}
C.ck7.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1712}
C.ck6.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nX),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.E(p*Math.max(B.jg(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bZ:A.dz
return B.fR(t,A.A,o,new C.ck5(),A.cj,w,!0,u,!1,new B.bP("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1713}
C.ck5.prototype={
$3(d,e,f){return D.aeT},
$S:217}
C.fQb.prototype={
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
r=B.C(new B.N(r,new C.fQa(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c3(new B.an(A.a0,t,A.ad,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bi),A.aq)},
$S:1714}
C.fQa.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b35(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fz_.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cz(r.b,new C.fyY(d))
w=B.aH(d,A.c0,x.w).w
v=B.n(22)
u=B.L(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h1,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aJ(!1,A.a3,!0,q,B.q(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kg,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bM(!1,A.AM,q,q,!0,q,q,q,new C.fyZ(p,d),q,B.fs(q,q,A.bm,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ca,q,new B.b9(B.n(12),A.a1),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aC,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.au,q,u,v,t,q,A.n),q,q,q,A.h0,A.GP,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:268}
C.fyY.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pW())B.a6(w,!0).eO()},
$S:0}
C.fyZ.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eO()},
$S:0}
C.ffW.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.p(0,-(1-r)*140))],x.p),t)
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
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jk(u.b,A.t,new C.aL9(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jk(u.b,A.t,new C.aL9(1-r,t))],x.p),t)
case 16:v=D.baS.aC(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.da(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(B.e8(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n_(r*6.28)
s.k5(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eK(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.da(u.b,r)],x.p),t),t)}},
$S:65}
C.e0j.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0i.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e0h.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hB_(v,w,e)},
$S:65}
C.ck_.prototype={
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
q=B.C(new B.N(v,new C.cjZ(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c3(new B.an(A.a0,r,A.ad,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bi)},
$S:452}
C.cjZ.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cq?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a8G(m,new C.W7(d,C.b35(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.den.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dem(w))},
$S:12}
C.dem.prototype={
$0(){return this.a.d++},
$S:0}
C.eoI.prototype={
$2(d,e){var w,v=null,u=A.o.ar(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aSo.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ikq(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
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
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.p(s*14,w*10))
default:s=Math.sin(t)
return B.da(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:65}
C.f4R.prototype={
$1(d){var w
$.S()
w=B.J()
w.b=A.aa
w.c=d
w.e=A.dO
return w},
$S:1715}
C.fNM.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.btl(u,t,r),A.ay))
w.push(B.nP(s.d,A.aq,new C.bh6(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsi(u,q,t,r),A.ay))
return B.at(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:231}
C.fC2.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:334}
C.eHz.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Ds(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dP(s,new C.eHx(),new C.eHy(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1716}
C.eHx.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:181}
C.eHy.prototype={
$0(){return J.fq(this.a)},
$S:1718}
C.eDX.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDY.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDZ.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eFx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFl.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eFm.prototype={
$1(d){return d.hQ()},
$S:z+81}
C.eDk.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGF.prototype={
$0(){this.a.u9()},
$S:0}
C.eHv.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KH()},
$S:0}
C.eFv.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oD()
w.KH()},
$S:0}
C.eHi.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHj.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHk.prototype={
$1(d){return d.a},
$S:z+22}
C.eHl.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:275}
C.eHm.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eCJ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eHw.prototype={
$0(){},
$S:0}
C.eEE.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()
w.KH()},
$S:0}
C.eCH.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.y9()},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.y9()},
$S:0}
C.eF0.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eF1.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()
w.KH()
w.z="Home"},
$S:0}
C.eF2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eED.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VL,w,w,!0,w,w,w,new C.eEC(d),w,w)],x.p),w,w,w,D.fVN,w,w,w,w,D.fCl,w)},
$S:18}
C.eEC.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEA.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.VL,w,w,!0,w,w,w,new C.eEz(d),w,w)],x.p),w,w,w,D.fGv,w,w,w,w,D.fEb,w)},
$S:18}
C.eEz.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eEB.prototype={
$0(){},
$S:0}
C.eDT.prototype={
$1(d){return this.a.b2R(C.bEx(d))},
$S:z+7}
C.eDU.prototype={
$1(d){return this.a.agm(C.bEx(d))},
$S:z+7}
C.eEK.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.q(w,w,A.f,w,w,new B.o(A.aV,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fVR,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Qr(A.wx,D.aAI,"HATI YA KUHOWA","Hati ya mahari",new C.eEF(d),w),A.X,new C.Qr(A.ht,D.dgd,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eEG(d),w),A.X,new C.Qr(A.hI,D.d0M,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eEH(d),w),A.X,new C.Qr(A.ib,D.cZQ,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eEI(d),w)],v)
if(this.a.gacA())A.d.v(u,B.a([A.X,new C.Qr(A.jp,D.cKK,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eEJ(d),w)],v))
return B.bm(!0,B.ch(B.x(u,A.al,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yI,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEF.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eEG.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eEH.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eEI.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eEJ.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eEL.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()},
$S:0}
C.eCL.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eCM.prototype={
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
C.eEW.prototype={
$1(d){return d.b===D.lR},
$S:z+4}
C.eEX.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e0(new C.eEU(w,this.a,v),null)},
$S:20}
C.eEU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eEV(p,o,a3,n),l=B.R(a2).ax.a===A.J,k=l?A.c:A.O,j=l?A.aS:A.an,i=l?A.bp:A.bO,h=l?A.O:A.c,g=B.n(28),f=B.L(l?A.bz:A.aO,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bG,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aG(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.eEQ(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Df[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjG(t,u.b,p.a===t,i,k,new C.eER(v,m),q))}a1=B.bW(A.bH,a1,A.bt,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.D8[w]
s.a=null
t=s.a=r.a
u.push(new C.bjF(t,r.b,p.b===t,k,j,new C.eES(s,m),q))}return B.bm(!0,B.q(q,B.ch(B.x(B.a([d,A.aR,a0,A.X,a1,A.by,v,A.X,B.bW(A.bH,u,A.bt,q,12,12),A.by,new B.a5(1/0,48,B.es(D.c2b,D.fYh,new C.eET(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b9(B.n(16),A.a1),D.b4W,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uq,D.bDv,q,q,q),!0,!1,A.ag,!0,!0)},
$S:87}
C.eEV.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eEO(w.a,d,e))
w.b.d9(new C.eEP(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1721}
C.eEO.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eEP.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eEQ.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eER.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eES.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eET.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hn(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d9(new C.eEN(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEN.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eEZ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eF_.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eEY(t.d))
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
C.eEY.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFg.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eFh.prototype={
$1(d){return d.w},
$S:z+82}
C.eFi.prototype={
$2(d,e){return d>e?d:e},
$S:81}
C.eFj.prototype={
$1(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.c:A.O,s=u?A.aS:A.an,r=u?A.bp:A.aQ,q=u?A.O:A.c,p=B.n(28),o=B.L(u?A.bz:A.aO,A.r,1),n=B.aH(d,A.c0,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.q(v,B.x(B.a([B.A(B.a([B.q(v,D.bWH,A.f,v,v,D.b6h,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aG(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.eFd(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aC,new B.dn(1,A.co,B.hN(v,new C.eFe(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.eFf(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uq,A.a09,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFd.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFf.prototype={
$2(d,e){return A.af},
$S:37}
C.eFe.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cC
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aG(q,q,q,q,D.bZZ,q,q,q,new C.eFb(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bFL,n,q),B.aM(q,A.Z,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b6(4,B.n(16),A.a1),q,A.eU,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.n(16),D.b4B),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eFc(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:687}
C.eFb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iqg(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.o9(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hg(A.bA,o+s.length),A.aP))
l.akp(k,m)
l.pI()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFc.prototype={
$1(d){var w=this.a
w.akp(this.b.a,d)
w.pI()},
$S:2}
C.eFk.prototype={
$0(){},
$S:0}
C.eEM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eD1.prototype={
$0(){},
$S:0}
C.eD2.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hCj(this.b,w,!0)
w=this.a
w.r=null
w.y9()},
$S:0}
C.eD3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eD4.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.eD0(t.d))
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
C.eD0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFq.prototype={
$1(d){return B.pa(new C.eFp(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:133}
C.eFp.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.amh,B.x(B.a([D.fTh,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.fe9,new C.eFo(this.a,this.b),20,A.ut,w,A.ah,!1),1)],v),A.al,w,A.e,A.i,0,A.p)},
$S:432}
C.eFo.prototype={
$2(d,e){var w=null,v=D.Ij[e],u=C.hVC(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.q(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fT,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bl,B.q(w,D.f78,A.f,w,w,new B.o(A.dI.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.mV,w,w,w)],m))
return B.aJ(!1,A.a3,!0,w,B.aO(!1,t,!0,B.q(w,B.x(B.a([B.A(n,A.m,w,A.e,A.i,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a6,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFn(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eFn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ckh(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFr.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.y9()},
$S:0}
C.eBG.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rS(4294967295,null,0,0,null,C.cD(),D.n4,"","","",D.dk),s=this.b
C.cku(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eD_.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ak()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.jb
$.jb=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c4(v.e.r,v.f+1,C.hp6(q));++v.f},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eFz.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c4(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eCU.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.eCT(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eCT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eFy.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eCK.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b5,A.aP),$.aw())},
$S:275}
C.eDl.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:686}
C.eHg.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eHh.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avi(w).fW()
v=u.Xt(w)
v.stT(B.hg(A.bA,v.a.a.length))},
$S:7}
C.eGG.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yt(v)
if(u!=null&&u.b===D.cW)w.Xt(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eBH.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,v.gqS().e.l(),A.aG,"",4280640491,24,A.bs,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bj,4280172719,2,"Tap to edit text",0,0,"",D.cq,D.cW,0.7,0.15,0.2)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBE.prototype={
$0(){var w=C.cD(),v=this.a,u=C.er(A.bk,!1,4279310375,A.aG,"",v.gqS().c.j(0.25).l(),24,A.bs,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqS().c.l(),2,"",0,0,"",D.cq,D.fg,0.25,0.3,0.3)
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBu.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"",4280640491,24,A.bs,A.a8,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,0.6,0.2,0.18),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eBr.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c97],x.p)
for(w=J.aU(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.gal2().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bUm,r,r,r,r,new C.eBq(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBq.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eBs.prototype={
$0(){var w=A.j.E(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.Y.az(u.ak(),null),s=C.er(A.bk,!1,4279310375,A.aG,u.b,4280640491,24,A.bs,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bj,4280172719,2,t,0,0,"",D.cq,D.a7L,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eCW.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eCX.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdB().z,new C.eCV(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eCV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eC8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cW)s.Q=t.c.l()
else if(w===D.fg){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eC9(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eC9.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eCd.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eCe(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eCe.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eCb.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cW){s.Q=t.c
return}w=new C.eCc(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eCc.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eB(w,new C.eCa()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eCa.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eC7.prototype={
$0(){return C.cku(this.b,this.c,this.a.gqS())},
$S:0}
C.eFa.prototype={
$0(){return A.d.c4(this.a.d,0,this.b)},
$S:0}
C.eHp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHq.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eHr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHs.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c4(s,0,v.b)
else{w=A.d.bj(s,new C.eHo(v))
if(w>=0)t.d[w]=v.b}if(v.a.gT6()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.y9()
t.KH()}},
$S:0}
C.eHo.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eGW.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acE(),s=w.b,r=u.acF(A.fn,A.jH,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.Q,r,A.by,B.q(v,B.A(B.a([B.E(u.aXs(w.c,A.an),1),new B.D(A.fG,B.q(v,D.bUs,A.f,v,v,new B.o(A.fn.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXs(s,A.fn),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.aA,A.aF,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.by,u.aXv(A.fn,d,D.bQz,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.X,u.c0W(A.aJ,d,A.uI,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aC)
p.push(u.aXt(d,"Not now"))
return new C.KE(B.x(p,A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eGV.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KE(B.x(B.a([v.acE(),A.Q,v.acF(A.aJ,D.bQe,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cR(new B.aY(0,1/0,0,B.aH(d,A.c0,x.w).w.a.b*0.42),B.hN(w,new C.eGT(v,u,d),u.length,w,w,A.ah,new C.eGU(),!0),w),A.aC,v.aXt(d,"Cancel")],x.p),A.al,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eGU.prototype={
$2(d,e){return A.X},
$S:37}
C.eGT.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aJ(!1,A.a3,!0,w,B.aO(!1,u,!0,B.q(w,B.A(B.a([B.q(w,D.ark,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.c67,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nc,w,w,w),A.cU,B.d("Updated "+this.a.QC(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGS(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:79}
C.eGS.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eGP.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acE()
t=t.acF(A.ax,A.uS,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KE(B.x(B.a([s,A.Q,t,A.by,B.A(B.a([B.E(B.dU(A.abi,new C.eGN(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cn,u,new B.b9(B.n(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.at,B.E(B.bI(D.fEM,u,new C.eGO(d),B.bo(A.fn,u,u,u,A.c,u,A.cn,u,new B.b9(B.n(14),A.a1),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.al,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eGN.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eGO.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eGR.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acE(),s=w.b,r=u.acF(A.aY,A.ea,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.awC("Names",""+w.c),1),A.ae,B.E(u.awC("Fields",""+w.d),1),A.ae,B.E(u.awC("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bm,v,v,v,A.c,v,A.yv,v,new B.b9(B.n(14),A.a1),v,v,v)
return new C.KE(B.x(B.a([t,A.Q,r,A.aR,p,A.by,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nS,v,v,v),v,new C.eGQ(d),o),A.X,u.aXu(d,"Stay here",!1)],q),A.al,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eGQ.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eDP.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eDO.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eGH.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eHf.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0C(A.d.dP(w.d,new C.eHd(v),new C.eHe(v)).hQ(),w.f,null)},
$S:z+84}
C.eHd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHe.prototype={
$0(){return this.a},
$S:z+85}
C.eBz.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fW,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWf,w,w,w,w,new C.eBx(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fCK,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXu,w,w,w,w,new C.eBy(d),!1,w,w,w,w,w,D.fZx,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eBx.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eBy.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eBA.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bk,!1,4279310375,A.aG,v,4280640491,24,A.bs,A.a8,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bj,4280172719,2,v,0,0,"",D.cq,D.TA,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eBB.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jb
$.jb=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jb
$.jb=k+1
m.push(new C.eN(""+1000*l+"_"+k,D.TA,0.04,0.06,0.92,0.88,v,24,A.a8,A.bs,A.aG,4279310375,A.bk,u,D.bj,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cq,0,"","","","","",!1,0))
A.d.c4(j.e.r,i+q-1,new C.lY(""+1000*p+"_"+o,r+n,"",D.qW,4294967295,null,D.dk,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eBF.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kJ(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bk,!1,4279310375,A.aG,t,4280640491,24,A.bs,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lr,0.35,0.55,0.62)
A.d.J(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eBw.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b5x(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bk,!1,4279310375,A.aG,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bs,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lr,s,u,t)
A.d.J(p.gdB().z,q)
A.d.bt(p.gdB().z,new C.eBv(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ik9(p)}},
$S:0}
C.eBv.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFw.prototype={
$0(){var w=this.a,v=this.b
w.b5x(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eHn.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eDS.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.eDR())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eDR.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eCh.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eCi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.u9()},
$S:7}
C.eBt.prototype={
$0(){var w=C.er(A.bk,!1,4279310375,A.aG,"HD Photo",4280640491,24,A.bs,A.a8,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bj,4280172719,2,"",0,0,"",D.cq,D.lR,0.8,0.1,0.1),v=this.a
A.d.J(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eDj.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eBC.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eBL.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eBM.prototype={
$0(){var w=this.b.hQ(),v=C.cD(),u=A.j.E(w.c+0.04,0,0.92),t=A.j.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eBN.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBK(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c4(w,u+1,v)}},
$S:0}
C.eBK.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eBY.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eBJ(v))
if(u>0){A.d.cA(w,u)
A.d.c4(w,u-1,v)}},
$S:0}
C.eBJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eC0.prototype={
$0(){return this.a.as=A.bk},
$S:0}
C.eC1.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eC2.prototype={
$0(){return this.a.as=A.dX},
$S:0}
C.eC3.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eC4.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eC5.prototype={
$1(d){return d.b===D.cW},
$S:z+4}
C.eC6.prototype={
$1(d){return d.length!==0},
$S:3}
C.eBO.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.Dx(w.gqS().c.j(0.18).l(),0.1,u,D.bj,0,2,1,0,0))
u=w.gdB().z
v=C.cD()
A.d.J(u,C.j4(A.bk,!1,w.gqS().d.l(),A.aG,18,A.bs,A.I,0.07,v,"Document Header",0,D.dk,0.9,0.05,0.02))},
$S:0}
C.eBP.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cD()
A.d.J(u,C.Dx(v.gqS().c.j(0.12).l(),0.1,t,D.bj,0,2,1,0,0.9))
t=v.gdB().z
u=C.cD()
w=C.bFf()
A.d.J(t,C.j4(A.K,!1,v.gqS().e.l(),A.aG,12,A.bs,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dk,0.9,0.05,0.92))},
$S:0}
C.eBQ.prototype={
$0(){A.d.J(this.a.gdB().z,C.Dx(1727914055,0.12,C.cD(),D.bj,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eBR.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdB().z,C.Dx(w,0.08,C.cD(),D.bj,w,2,0.5,0.2,0.4))},
$S:0}
C.eBS.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cD()
A.d.J(v,C.Dx(w.gqS().c.j(0.35).l(),0.12,u,D.DT,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdB().z,C.j4(A.bk,!1,4279310375,A.aG,18,A.bs,A.a8,0.15,C.cD(),"Important note",0,D.qX,0.5,0.38,0.52))},
$S:0}
C.eBT.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.Dx(4294507260,0.78,C.cD(),D.bj,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdB().z,C.j4(A.bk,!1,4279179050,A.aG,16,A.bs,A.a8,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFf()+"\n\nSubject:\n\nBody text\u2026",0,D.dk,0.76,0.12,0.14))},
$S:0}
C.eBU.prototype={
$0(){var w=this.a
A.d.J(w.gdB().z,C.Dx(4294897802,0.28,C.cD(),D.bj,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdB().z,C.j4(A.bk,!1,4285611794,A.aG,15,A.bs,A.a8,0.24,C.cD(),"Sticky note",0,D.aKw,0.26,0.64,0.14))},
$S:0}
C.eBV.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdB().z,C.Dx(4293060848,0.04,C.cD(),D.bj,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdB().z,C.Dx(w,0.04,C.cD(),D.bj,w,2,0.55,0.1,0.48))},
$S:0}
C.eBW.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.j4(A.bk,!1,w,A.aG,18,A.bs,A.a8,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ja,0.42,0.06,0.18))
A.d.J(v.gdB().z,C.j4(A.bk,!1,w,A.aG,18,A.bs,A.a8,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vb,0.42,0.52,0.18))},
$S:0}
C.eBX.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.Dx(858088427,0.62,C.cD(),D.bj,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdB().z,C.Dx(856004201,0.62,C.cD(),D.bj,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdB().z,C.j4(A.bk,!1,w,A.aG,20,A.bs,A.I,0.1,C.cD(),"Option A",0,D.dk,0.36,0.08,0.2))
A.d.J(v.gdB().z,C.j4(A.bk,!1,w,A.aG,20,A.bs,A.I,0.1,C.cD(),"Option B",0,D.dk,0.36,0.56,0.2))},
$S:0}
C.eBZ.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdB().z,C.Dx(4294967295,0.36,C.cD(),D.bj,w,2,0.24,0.38,0.28))
A.d.J(v.gdB().z,C.j4(A.K,!1,w,A.aG,14,A.bs,A.a8,0.12,C.cD(),"[ QR CODE ]",0,D.dk,0.24,0.38,0.4))},
$S:0}
C.eC_.prototype={
$0(){return C.cku(this.b,D.TB,this.a.gqS())},
$S:0}
C.eDi.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9E.q(0,d),t=this.a
return t.baK(d,v===d,A.b1,this.c,new C.eDh(t,u,d,w),u)},
$S:z+25}
C.eDh.prototype={
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
C.bFZ(r,new C.eDg(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDg.prototype={
$0(){return this.a.d9(new C.eDf(this.b,this.c))},
$S:0}
C.eDf.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eBD.prototype={
$0(){var w,v=this.a,u=v.gqS(),t=C.rS(4294967295,null,0,0,null,C.cD(),D.n4,"","","",D.dk),s=this.b
C.cku(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.DS){t.e=w.e
t.f=w.f}A.d.c4(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eCl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iqj(p,q.d,s,new C.eCk(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.u9(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCk.prototype={
$1(d){return this.bnK(d)},
bnK(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eCj(t,d))
w=2
return B.b(t.u9(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eCj.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c4(v.d,0,u)}},
$S:0}
C.eCm.prototype={
$0(){return this.a.bMr()},
$S:0}
C.eCn.prototype={
$0(){return this.a.aSD("Class Presentation",!0)},
$S:0}
C.eCo.prototype={
$1(d){return this.a.bNn(d.b,this.b,d.a)},
$S:z+88}
C.eCZ.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.c0,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eF9.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eP,x.w).w.f.d),new B.e0(new C.eF8(this.a,this.b),null),null)},
$S:61}
C.eF8.prototype={
$2(d,e){return B.pa(new C.eF7(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:601}
C.eF7.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.au:A.c,s=B.L(u?A.bz:A.aO,A.r,1),r=B.q(v,v,A.f,v,v,new B.o(A.aV,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.q(v,B.x(B.a([A.X,r,new B.D(A.alH,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.O,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bM(!1,A.AM,v,v,!0,v,v,v,new C.eF5(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aVp(u,!0,!0,new C.eF6(p,w.d))],q),e,v,D.bBa,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.l7,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.eF5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eF6.prototype={
$0(){this.b.$1(new C.eF3())
var w=this.a
if(w.c!=null)w.m(new C.eF4())},
$S:0}
C.eF3.prototype={
$0(){},
$S:0}
C.eF4.prototype={
$0(){},
$S:0}
C.eGI.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.eGJ.prototype={
$4(d,e,f,g){var w=A.cx.aC(0,e.gp(0))
return B.da(B.ed(A.A,new C.aAv(this.a,null),0.94+w*0.06,null,null),w)},
$S:431}
C.eGK.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.eGL.prototype={
$4(d,e,f,g){var w=A.cx.aC(0,e.gp(0))
return B.da(B.ed(A.A,new C.beV(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:431}
C.eGM.prototype={
$0(){return A.d.c4(this.a.d,0,C.X_(this.b))},
$S:0}
C.eBI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aC(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.au.j(0.72)],t):B.a([A.c.j(0.88),A.q7.j(0.75)],t)
r=B.L(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.cg.j(0.18),A.L],t)
q=B.L(A.b0.j(0.45+q),A.r,1)
t=B.q(p,B.X(A3.a1Y,u?A.ab:A.O,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.O,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.us(A.fh,B.q(p,B.x(B.a([t,A.aC,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aD:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.aA,A.aF,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:290}
C.eCN.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eCO.prototype={
$1(d){return d.length!==0},
$S:3}
C.eCP.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k6
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2y:A.Ct}return w},
$S:690}
C.eCS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dy.aC(0,A.j.F(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.au.j(0.78)],s):B.a([A.c.j(0.92),A.nk.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.n(10)
q=B.q(l,B.X(C.kJ(v.w)?A.wx:A.qK,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a6,A.a9,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.O,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QC(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QC(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.QC(v.f)
r=k.bNl(n,A.d.gH(r),t)
return B.q(l,B.bx(j,new B.a8R(B.aJ(!1,A.a3,!0,l,B.aO(!1,l,!0,B.q(l,B.dG(!1,A.NU,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aG(l,l,l,l,B.X(A.ov,t?A.aD:A.bM,l,l,l,l),l,l,l,new C.eCQ(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.aA,A.aF,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eCR(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:98}
C.eCR.prototype={
$0(){return this.a.agm(this.b)},
$S:0}
C.eCQ.prototype={
$0(){return this.a.Bp(this.b,this.c)},
$S:0}
C.eEi.prototype={
$0(){var w=this.a
w.b9i()
w.m(new C.eEh())},
$S:0}
C.eEh.prototype={
$0(){},
$S:0}
C.eEj.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eEk.prototype={
$0(){this.a.d9(new C.eEg(this.b))},
$S:0}
C.eEg.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.R)?A.cC:A.R},
$S:0}
C.eEl.prototype={
$0(){this.a.d9(new C.eEf(this.b))},
$S:0}
C.eEf.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bs:A.cF},
$S:0}
C.eEm.prototype={
$0(){this.a.d9(new C.eEe(this.b))},
$S:0}
C.eEe.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.na},
$S:0}
C.eEn.prototype={
$0(){this.a.d9(new C.eEd(this.b))},
$S:0}
C.eEd.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEo.prototype={
$0(){var w=this.a
w.d9(new C.eEc(w,this.b))},
$S:0}
C.eEc.prototype={
$0(){var w=this.b
return w.as=this.a.c7V(w.as)},
$S:0}
C.eEp.prototype={
$0(){return this.a.d9(new C.eEb(this.b))},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eEq.prototype={
$0(){return this.a.d9(new C.eEa(this.b))},
$S:0}
C.eEa.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eE3.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eE4.prototype={
$0(){this.a.a0A()
return null},
$S:0}
C.eE5.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.c0,x.w).w.a.a<900)w.agF()
else w.m(new C.eE2(w))},
$S:0}
C.eE2.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eE6.prototype={
$0(){this.a.d9(new C.eE1(this.b))},
$S:0}
C.eE1.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.R)?A.cC:A.R},
$S:0}
C.eE7.prototype={
$0(){return this.a.d9(new C.eE0(this.b))},
$S:0}
C.eE0.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eE8.prototype={
$0(){return this.a.d9(new C.eE_(this.b))},
$S:0}
C.eE_.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eE9.prototype={
$0(){return this.a.aBL(null)},
$S:0}
C.eDb.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eDc.prototype={
$0(){this.a.aba()
return null},
$S:0}
C.eDe.prototype={
$1(d){return this.bnL(d)},
bnL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(B.bT(A.au,null,new C.eD6(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d9(new C.eD7(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eD8(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d9(new C.eD9(r))
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
return B.b(C.hDA(q,new C.Fd(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d9(new C.eDa(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahX(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.a_,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eD6.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.eqU],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dg,p,p,p)
q=u.e===s?D.bWo:p
o.push(B.dG(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eD5(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.m,p,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eD5.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eD7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eD8.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eD9.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eDa.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eDd.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ah(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ah(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ah(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahX(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ewq,q,v,u,B.Ah(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:145}
C.eHt.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFc(w,v)}},
$S:0}
C.eHu.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eEt.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.c61:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bO
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fy,B.aA(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b4,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eEs(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:140}
C.eEs.prototype={
$0(){var w=this.a
return w.m(new C.eEr(w,this.b))},
$S:0}
C.eEr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eEu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5D:E.aAP
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbQW():t.gbMM()
return B.hb(B.aA(u,B.q(u,D.aqK,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.H,10)],x.V),new B.a9(A.a6,A.a9,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1726}
C.eEv.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ipz(v,w.a.c)},
$S:0}
C.eFS.prototype={
$0(){return this.b.vN(this.a.a)},
$S:0}
C.eFT.prototype={
$0(){return this.a.vN(D.n4)},
$S:0}
C.eFU.prototype={
$0(){return this.a.vN(D.J8)},
$S:0}
C.eG4.prototype={
$0(){return this.a.vN(D.J9)},
$S:0}
C.eGf.prototype={
$0(){return this.a.vN(D.J7)},
$S:0}
C.eGq.prototype={
$0(){return this.a.qD("lab_report")},
$S:0}
C.eGx.prototype={
$0(){return this.a.qD("rubric")},
$S:0}
C.eGy.prototype={
$0(){return this.a.qD("minutes")},
$S:0}
C.eGz.prototype={
$0(){return this.a.qD("agenda")},
$S:0}
C.eGA.prototype={
$0(){return this.a.qD("timeline")},
$S:0}
C.eGB.prototype={
$0(){return this.a.qD(this.b.a)},
$S:0}
C.eFV.prototype={
$0(){this.a.Ww()
return null},
$S:0}
C.eFW.prototype={
$0(){this.a.Wq()
return null},
$S:0}
C.eFX.prototype={
$0(){return this.a.qD("table")},
$S:0}
C.eFY.prototype={
$0(){return this.a.qD("sticky")},
$S:0}
C.eFZ.prototype={
$0(){return this.a.qD("divider")},
$S:0}
C.eG_.prototype={
$0(){return this.a.qD("header_bar")},
$S:0}
C.eG0.prototype={
$0(){return this.a.pq(D.bj)},
$S:0}
C.eG1.prototype={
$0(){return this.a.pq(D.eW)},
$S:0}
C.eG2.prototype={
$0(){return this.a.pq(D.kb)},
$S:0}
C.eG3.prototype={
$0(){return this.a.pq(D.DT)},
$S:0}
C.eG5.prototype={
$0(){return this.a.pq(D.kc)},
$S:0}
C.eG6.prototype={
$0(){return this.a.pq(D.ls)},
$S:0}
C.eG7.prototype={
$0(){return this.a.pq(D.fH)},
$S:0}
C.eG8.prototype={
$0(){this.a.HO()
return null},
$S:0}
C.eG9.prototype={
$0(){this.a.NX()
return null},
$S:0}
C.eGa.prototype={
$0(){return this.a.qD("quote")},
$S:0}
C.eGb.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eGc.prototype={
$0(){this.a.a0G()
return null},
$S:0}
C.eGd.prototype={
$0(){var w=this.a
return w.m(new C.eFI(w))},
$S:0}
C.eFI.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eGe.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.or(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eFQ(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFQ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eGg.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kc()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9G.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aV
u=B.a([B.q(s,s,A.f,s,s,new B.o(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a6,A.a9,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.a9G.q(0,q))u.push(B.ao(s,B.q(s,D.PE,A.f,s,s,D.Ff,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fy,B.aA(s,B.hb(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFP(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eFP.prototype={
$0(){this.a.a9y(this.b)
return null},
$S:0}
C.eGh.prototype={
$0(){this.a.a9x(this.b)
return null},
$S:0}
C.eGi.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hVD(d),p=this.a,o=B.n(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bm:A.aV
v=p.gdB()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rS(4294967295,r,0,0,r,"preview_"+w,D.qW,"","","",D.dk)
C.hAn(s,w)
w=x.p
u=B.a([B.bx(o,B.q(r,B.bx(t,C.hBI(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.q(r,D.arl,A.f,r,r,D.Ff,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iK,B.aA(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cU,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aD:A.an,r,r,r,r,r,r,r,r,9,r,r,A.R,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFO(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eFO.prototype={
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
break}s.d9(new C.eFE(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFE.prototype={
$0(){return C.hAn(this.a,this.b.a)},
$S:0}
C.eFR.prototype={
bnM(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9E.q(0,d)
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
$2(d,e){return this.bnM(d,e)},
$S:z+91}
C.eGC.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eGE(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ch(B.A(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eGE.prototype={
$1(d){var w=this
return w.a.baK(d,w.b===d,w.c,w.d,new C.eGD(w.e,d),!D.a9E.q(0,d))},
$S:z+25}
C.eGD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGj.prototype={
$1(d){this.b.$2(d,new C.eFN(this.a,d,this.c))
return null},
$S:z+26}
C.eFN.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFZ(u,new C.eFD(v,this.c,w),w)},
$S:0}
C.eFD.prototype={
$0(){return this.a.d9(new C.eFB(this.b,this.c))},
$S:0}
C.eFB.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eGk.prototype={
$1(d){this.b.$2(d,new C.eFM(this.a,d))
return null},
$S:z+26}
C.eFM.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h1P(u,new C.eFC(v,w),w)},
$S:0}
C.eFC.prototype={
$0(){var w=this.a
return w.d9(new C.eFA(w,this.b))},
$S:0}
C.eFA.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eGl.prototype={
$0(){var w=this.a
return w.m(new C.eFL(w))},
$S:0}
C.eFL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eGm.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFc(w,v)}},
$S:0}
C.eGn.prototype={
$0(){this.a.IA()
return null},
$S:0}
C.eGo.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eGp.prototype={
$0(){var w=this.a,v=w.kc()
if(v!=null&&v.b===D.cW)w.d9(new C.eFK(v))},
$S:0}
C.eFK.prototype={
$0(){var w=this.a
w.f=A.j.E(w.f*1.25,0.08,1.8)
w.e=A.j.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eGr.prototype={
$0(){this.a.E6()
return null},
$S:0}
C.eGs.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FN(v,!0)
return null},
$S:0}
C.eGt.prototype={
$0(){this.a.d9(new C.eFJ(this.b))},
$S:0}
C.eFJ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.R)?A.cC:A.R},
$S:0}
C.eGu.prototype={
$0(){this.a.d9(new C.eFH(this.b))},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bs:A.cF},
$S:0}
C.eGv.prototype={
$0(){this.a.d9(new C.eFG(this.b))},
$S:0}
C.eFG.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aG:A.na},
$S:0}
C.eGw.prototype={
$0(){this.a.d9(new C.eFF(this.b))},
$S:0}
C.eFF.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eCg.prototype={
$1(d){return this.bnJ(d)},
bnJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d9(new C.eCf(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:200}
C.eCf.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eGZ.prototype={
$0(){var w=this.a
return w.d9(new C.eGY(w,this.b))},
$S:0}
C.eGY.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eH_.prototype={
$0(){var w=this.a
return w.d9(new C.eGX(w,this.b))},
$S:0}
C.eGX.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eDo.prototype={
$0(){return this.a.d9(new C.eDn(this.b))},
$S:0}
C.eDn.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w-2,10,96)},
$S:0}
C.eDp.prototype={
$0(){return this.a.d9(new C.eDm(this.b))},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
return w.w=A.j.E(w.w+2,10,96)},
$S:0}
C.eDW.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.at1,new C.eDV(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eDV.prototype={
$1(d){var w=null
return B.Ah(B.d(d.b,w,w,w,w,w,w,A.lU,w,w,w),48,d,x.fO)},
$S:z+95}
C.eHb.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:37}
C.eHa.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kw()?q:new C.eH8(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bm
else v=r.d?A.aV:A.cu
v=B.L(v,A.r,o?2:1)
u=r.d?A.cs:A.c
t=B.bR(0,C.hBI(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aA(q,B.q(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ao(4,B.q(q,B.d(""+(e+1),q,q,q,q,q,q,A.nQ,q,q,q),A.f,q,q,new B.o(A.aT,q,q,s,q,q,A.n),q,q,q,q,A.amC,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eH9(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.eH9.prototype={
$0(){var w=this.a
return w.m(new C.eH4(w,this.b))},
$S:0}
C.eH4.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KH()},
$S:0}
C.eH8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eH5(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eH6(q,s))
q.aU7()}else if(r==="del"){q=t.a
q.m(new C.eH7(q,s))
q.aTd()}else if(r==="up")t.a.b5L(s,s-1)
else if(r==="down")t.a.b5L(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH5.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY7,w,w,w,w,new C.eH0(d),!1,w,w,w,w,w,w,w,D.fDJ,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bY0,w,w,w,w,new C.eH1(d),!1,w,w,w,w,w,w,w,A.xj,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bXg,w,w,w,w,new C.eH2(d),!1,w,w,w,w,w,w,w,D.fM5,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZn,w,w,w,w,new C.eH3(d),!1,w,w,w,w,w,w,w,D.fDx,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eH0.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.eH1.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eH2.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.eH3.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.eH6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eH7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eHc.prototype={
$0(){return this.a.a9i()},
$S:0}
C.eCG.prototype={
$0(){var w=this.a
w.b9i()
w.aBL(null)},
$S:0}
C.eCF.prototype={
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
A.d.v(s,new B.N(r,new C.eCE(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aD:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c3(new B.an(A.a0,p,A.ad,A.f,s,new B.bP("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bi)},
$S:452}
C.eCE.prototype={
$1(d){var w=this
return w.a.bIL(d,w.b,w.c,w.d)},
$S:z+23}
C.eCt.prototype={
$0(){var w=this
if(w.b){w.a.O4(w.c)
return}if(w.d){w.a.a9g(w.c)
return}if(w.e){w.a.ahX(w.c)
return}if(w.f)w.a.b9R(w.c)},
$S:0}
C.eCu.prototype={
$0(){this.a.O4(this.b)
return null},
$S:0}
C.eCv.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eCw.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eCs(u,d,w.c,w.d))
v.Ie()
v.oD()
v.pI()},
$S:19}
C.eCs.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eCx.prototype={
$1(d){return this.a.akp(this.b.a,d)},
$S:2}
C.eCz.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hes(w))u.a.O4(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b9R(v)},
$S:0}
C.eCy.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eCA.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eCr(w.b,d,w.c,w.d))
v.Ie()
v.oD()
v.pI()},
$S:19}
C.eCr.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cW)v.w=A.j.E(v.w+u*0.15,10,120)},
$S:0}
C.eCB.prototype={
$1(d){var w=this.a
w.m(new C.eCq(this.b,d))
w.Ie()
w.oD()
w.pI()},
$S:203}
C.eCq.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.E(w.e*v,0.04,1.8)
w.f=A.j.E(w.f*v,0.04,1.8)
if(w.b===D.cW)w.w=A.j.E(w.w*v,10,120)},
$S:0}
C.eCC.prototype={
$0(){var w=this.a
w.m(new C.eCp(this.b))
w.Ie()
w.oD()
w.pI()},
$S:0}
C.eCp.prototype={
$0(){this.a.r=C.hBc()},
$S:0}
C.eCD.prototype={
$0(){return this.a.a33(this.b.a)},
$S:0}
C.eEx.prototype={
$0(){var w=this.a
return w.m(new C.eEw(w))},
$S:0}
C.eEw.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eEy.prototype={
$1(d){return this.a.cHR(this.b.a,d)},
$S:2}
C.eDC.prototype={
$1(d){var w
this.a.d9(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.eDD.prototype={
$1(d){return this.a.$1(new C.eDB(this.b,d))},
$S:6}
C.eDB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDE.prototype={
$1(d){return this.a.$1(new C.eDA(this.b,d))},
$S:6}
C.eDA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDF.prototype={
$1(d){return this.a.$1(new C.eDz(this.b,d))},
$S:6}
C.eDz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eDG.prototype={
$1(d){return this.a.$1(new C.eDy(this.b,d))},
$S:6}
C.eDy.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eDH.prototype={
$1(d){return this.a.$1(new C.eDx(this.b,d))},
$S:6}
C.eDx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDI.prototype={
$1(d){return this.b.$1(new C.eDw(this.a,this.c))},
$S:9}
C.eDw.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eDJ.prototype={
$1(d){return this.b.$1(new C.eDv(this.a,this.c))},
$S:9}
C.eDv.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eDK.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bm:A.d_
return B.aA(w,B.q(w,w,A.f,w,w,new B.o(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDu(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:348}
C.eDu.prototype={
$0(){return this.a.$1(new C.eDr(this.b,this.c))},
$S:0}
C.eDr.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eDL.prototype={
$1(d){return this.a.$1(new C.eDt(this.b,d))},
$S:1727}
C.eDt.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eDM.prototype={
$1(d){var w=null
return B.aA(w,B.q(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eDs(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:348}
C.eDs.prototype={
$0(){return this.a.$1(new C.eDq(this.b,this.c))},
$S:0}
C.eDq.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eDN.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pW()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eO()}v.a.aug()},
$S:0}
C.eDQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dy.aC(0,m)
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
r.push(B.ao(2,B.q(n,B.X(A.uS,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nC,n,n,n),n,n,n,2,n,n))
return B.aJ(!1,A.a3,!0,n,B.aO(!1,m,!0,B.eI(new B.a5(48,48,new B.an(A.A,n,A.ad,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.aA,A.aF,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:142}
C.eBp.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.aC(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.ar(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aJ(!1,A.a3,!0,p,B.aO(!1,o,!0,B.eI(B.x(B.a([B.ed(A.A,B.q(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.ja,A.K,p,p)],x.p),A.m,p,A.ba,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.aA,A.aF,A.x,u,p,p),A.n),p,A.GK,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:142}
C.eFu.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Z,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.asb,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.eFs(d),w,w),B.bI(A.r8,w,new C.eFt(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eFs.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eFt.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d9P.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dy.aC(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ep.aC(0,A.j.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.aC(0,i)
v=B.n(22)
t=B.ar(A.aM,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.18+w*0.12),A.H,32+w*10),D.aeo],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.q(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.b6,0.9,A.x,k,0,B.a([A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.28+w*0.14)
p=B.q(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.08),A.L],p),k,k),A.a7),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kJ(m)?D.v4:L.nG
s=B.a([new B.ac(0,A.G,A.d.gH(C.kJ(m)?D.v4:L.nG).j(0.45+w*0.2),A.cA,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.q(k,B.X(C.kJ(j.a.c.w)?A.wx:A.qK,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.aA,A.aF,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ad,A.t,l,k),A.X,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fK,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fvq,A.K,k,k),A.aw,B.d(j.gcCF(),k,k,k,k,k,k,D.fAi,A.K,k,k),A.aC],m)
p=j.a.c
if(p.z){p=p.gT6()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kJ(j.a.c.w)?D.v4:L.nG).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.R,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.af],m))}s.push(new C.Ky(A.z2,"Download PDF","pdf",A.d9,j.Jv(0),!1,k))
p=j.a.c
if(!p.z||p.gT6()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ky(A.jH,"Transfer to "+C.hBe(p==null?"":p),"transfer_hati",A.aY,j.Jv(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jv(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ky(D.bPC,"Rename presentation","rename",A.cg,n,!1,k),A.am,new C.Ky(A.aov,"Duplicate","duplicate",A.b7,j.Jv(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.Q)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ky(A.ef,"Delete presentation","delete",A.az,j.Jv(p),!0,k))
s.push(A.aw)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jv(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jv(n)
s.push(B.dP(B.da(B.bM(!1,E.aWe,k,k,!0,k,k,k,new C.d9O(d),k,B.fs(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.ay,k,D.bEr,k,k,k,k,k,A.kx,k,k)),n),new B.p(0,(1-p)*8)))
return B.ed(A.A,B.da(B.aJ(!1,A.a3,!0,k,B.q(k,B.bx(q,new B.an(A.a0,k,A.ad,A.t,B.a([o,new B.D(D.bDA,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.Xl,new B.o(A.au,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.d9O.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dac.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dad.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d9M.prototype={
$1(d){var w=this.a
return w.m(new C.d9I(w))},
$S:23}
C.d9I.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d9N.prototype={
$1(d){var w=this.a
return w.m(new C.d9H(w))},
$S:71}
C.d9H.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9L.prototype={
$0(){var w=this.a
return w.m(new C.d9J(w))},
$S:0}
C.d9J.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d9K.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eI9.prototype={
$0(){return $.bmB=!$.bmB},
$S:0}
C.eI_.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXl())u.azm()},
$S:0}
C.eI8.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eI0.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eI1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azm()},
$S:0}
C.eHW.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eHX.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eHY.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eHZ.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eI6.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1728}
C.eI7.prototype={
$2(d,e){var w
if(e.gc5(e)===A.il)return new B.d0(e,!1,d,null)
w=this.a
return w.cAz(w.e,d,e)},
$S:479}
C.eI2.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fL((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eI3.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kl((1-v.gp(0))*1.5708)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eI4.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fL(v.gp(0)*0.8)
w.kl(v.gp(0)*0.35)
return B.fw(A.A,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eI5.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fL(-v.gp(0)*1.2)
return B.fw(A.a9,B.da(e,v.gp(0)),null,w,!0)},
$S:46}
C.eIa.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZL().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZL().x
t===$&&B.c()
return new C.b36(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Jw(v.c,t,!0,new B.bP("cine"+u,x.W))},
$S:670}
C.eIc.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.c0,x.w).w.a.a*0.55)w.azm()
else w.coT()},
$S:71}
C.eIb.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fSY.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:404}
C.fT6.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.fT3(d),w,w),B.bM(!1,D.fTD,w,w,!0,w,w,w,new C.fT4(d,this.b,v),w,w),B.bI(A.aWx,w,new C.fT5(d,v,this.c),w)],x.p),w,w,P.ua,new B.a5(320,w,t,w),w,w,w,w,D.fVa,w)},
$S:18}
C.fT3.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fT4.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.hf6(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fT5.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRL(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRb(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fSX.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ckx.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:545}
C.fT2.prototype={
$1(d){return d.ak()},
$S:z+14}
C.fow.prototype={
$1(d){return C.hf4(C.X_(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.h14.prototype={
$3(d,e,f){return A.bL},
$C:"$3",
$R:3,
$S:97}
C.h15.prototype={
$4(d,e,f,g){var w=A.cx.aC(0,e.gp(0))
return B.da(B.ed(A.A,D.hvm,0.94+w*0.06,null,null),w)},
$S:431}
C.h16.prototype={
$1(d){var w=this
return new C.X1(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eHG.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eHF.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.X2(u,this.b,w.gaQt(),v,null)},
$S:z+99}
C.eHD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHH.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eHI.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHM.prototype={
$0(){var w=this.a
return w.m(new C.eHK(w))},
$S:0}
C.eHK.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eHN.prototype={
$0(){var w=this.a
return w.m(new C.eHJ(w))},
$S:0}
C.eHJ.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eHO.prototype={
$1(d){return this.a.bNm(d,this.b)},
$S:z+100}
C.eHB.prototype={
$0(){var w=this.a
return w.m(new C.eHA(w,this.b))},
$S:0}
C.eHA.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eHP.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eHQ.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eHR.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eHS.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fG(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.fhd)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eBi())},
$S:0}
C.eBi.prototype={
$0(){},
$S:0}
C.eBk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eBf.prototype={
$1(d){return this.a.m(new C.eBe())},
$S:2}
C.eBe.prototype={
$0(){},
$S:0}
C.eBg.prototype={
$1(d){return this.a.b1C()},
$S:2}
C.eBh.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eHV.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qs(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHU(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHU.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fNe.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.em(new B.k_(this.c,new C.fNd(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:235}
C.fNd.prototype={
$3(d,e,f){return new C.Jw(e,!1,!1,new B.bP(e.a,x.W))},
$S:z+102}
C.fNf.prototype={
$1(d){var w=null
return B.oH(!1,B.at(new C.bxm(this.a,this.b,w),w,w,w),w,x.z)},
$S:287}
C.fNj.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmS(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.ma,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmS(),$async$$0)
case 5:s=$.aW.ap$.x.h(0,t.a)
r=s==null?null:s.gbg()
if(!(r instanceof B.qf))throw B.W("Could not draw the slide.")
u=r.md(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1731}
C.fNk.prototype={
bog(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hs(A.hd),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.eQ(A.dM.gaU(r))],"image/png"))
t.toString
s=Ao.h5w(t)
w=4
return B.b(new B.qm(s,"load",!1,x.ev).gH(0).df(0,A.jX),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bog(d)},
$S:1732}
C.fNg.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:156}
C.fNh.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h_(0)},
$S:156}
C.fNi.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fiz.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.frP,A.K,w,w)},
$S:1733}
C.fiA.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bx(v,B.kl(A.bp,w,A.dJ,8,w,e===0?w:e,w),A.aq)},
$S:574}
C.epz.prototype={
$1(d){this.a.a0_()
return null},
$S:11}
C.epx.prototype={
$0(){return this.a.e=D.bzo},
$S:0}
C.epy.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.coN.prototype={
$1(d){return A.o.dw(1,d.a)},
$S:z+103}
C.coO.prototype={
$2(d,e){return(d|e)>>>0},
$S:64};(function aliases(){var w=C.aNG.prototype
w.bzr=w.t
w=C.aNa.prototype
w.byV=w.t
w=C.aMW.prototype
w.byF=w.t
w=C.aN9.prototype
w.byU=w.t
w=C.aNE.prototype
w.bzp=w.t
w=C.aOY.prototype
w.bAU=w.t
w=C.aLR.prototype
w.bxx=w.t
w=C.aNR.prototype
w.bzC=w.t
w=C.aNS.prototype
w.bzD=w.t
w=C.b4O.prototype
w.bu1=w.aES})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ink","aoO",104)
v(C.aKN.prototype,"gc8h","ZS",0)
var r
u(r=C.azj.prototype,"gcC0","cC1",38)
v(r,"gc96","aex",0)
v(r=C.azf.prototype,"gb_Z","EA",3)
v(r,"gc93","c94",3)
v(r,"gays","yo",0)
v(r,"gaAu","JN",0)
t(C,"inL","hTo",105)
v(C.aFq.prototype,"gcc7","cc8",3)
s(C,"inW",0,null,["$4$paper$photo$request$template"],["fUn"],106,0)
s(C,"inV",0,null,["$5$doc$history$instruction$photo$template"],["bEv"],107,0)
v(r=C.aFH.prototype,"gccR","Js",0)
v(r,"gbMP","XF",0)
v(r,"gccU","afq",0)
v(r,"gccT","a_M",0)
v(r,"gb1h","ER",0)
v(C.aFK.prototype,"gccZ","a_O",0)
v(r=C.aH8.prototype,"gb1u","Qy",0)
v(r,"gctL","b5Q",3)
v(r,"gcDo","aD1",86)
v(r,"gbQK","abf",0)
v(r,"gcdp","B2",0)
v(r=C.aJ3.prototype,"gcnC","a19",0)
v(r,"gcnK","a1c",0)
v(r,"gbFF","a9E",0)
v(r,"gcdt","afC",0)
v(C.aJ2.prototype,"gcdu","afD",0)
v(C.aD6.prototype,"gbEE","a9r",0)
v(C.aBt.prototype,"gcdv","a_Z",0)
w(C,"io8","im1",12)
w(C,"io6","iiV",12)
w(C,"io7","il_",12)
v(r=C.aG0.prototype,"gcGI","cGJ",3)
v(r,"gcs_","cs0",3)
u(r,"gEX","agm",7)
v(r,"gbKs","atp",3)
u(r,"gEY","b2R",7)
v(r,"gcfL","ag3",0)
v(r,"gceC","ag2",0)
v(r,"gchW","agn",0)
v(r,"gbMM","aaN",0)
v(r,"gciQ","a0A",0)
v(r,"gciR","agE",0)
v(r,"gcjn","agL",0)
v(r,"gci8","agq",0)
v(r,"gbQW","abj",0)
v(r,"gaU6","aU7",3)
v(r,"gaTc","aTd",3)
v(r,"gaOK","aOL",3)
v(r,"gaTb","aug",3)
u(r,"gbEV","bEW",80)
v(r,"gaCy","b91",3)
v(r,"gceE","ceF",3)
v(r,"gc1f","c1g",3)
v(r,"gbPe","bPf",3)
v(r=C.aG3.prototype,"gcFu","cFv",3)
v(r,"gcF7","cF8",3)
t(C,"io9","imi",2)
v(r=C.aG1.prototype,"gcdB","Jx",0)
v(r,"gcvN","S3",0)
v(r,"gcdy","Jw",0)
v(r,"gcI1","a3J",0)
v(r,"gcjz","agS",0)
v(C.aG_.prototype,"gcdC","b1C",3)
v(r=C.aG2.prototype,"gbRM","abt",0)
u(r,"gcdz","cdA",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.oe,C.SJ,C.bK6,C.bIo,C.cG2,C.cG0,C.bSl,C.baw,C.cG1,C.bGY,C.coH,C.coF,C.coG,C.coE,C.auj,C.coD,C.bTn,C.oG,C.aGC,C.jA,C.o0,C.a8Q,C.A5,C.lv,C.oQ,C.ml,C.A6,C.o4,C.a8Y,C.asE,C.b37,C.eoZ,C.ls,C.Fm,C.ew,C.ja,C.Fd,C.y6,C.eN,C.lY,C.i3,C.jW,C.a8Z,C.ag9,C.b38,C.b4O,C.a40])
u(B.ju,[C.cO3,C.c3l,C.fIq,C.cPA,C.cOX,C.fNX,C.e7l,C.e7k,C.epC,C.epB,C.fPl,C.fpF,C.fpG,C.ciM,C.ciN,C.ciO,C.etg,C.f1m,C.f0K,C.f0J,C.f1N,C.f1k,C.f1d,C.f1w,C.f2c,C.fxI,C.f8w,C.f8v,C.f8Z,C.ep1,C.fSU,C.e2z,C.fZD,C.fPI,C.ckp,C.ckn,C.cks,C.fQc,C.fQd,C.fQe,C.fQf,C.ck9,C.cka,C.dPJ,C.ck6,C.fQb,C.ffW,C.e0h,C.ck_,C.eoI,C.fNM,C.eEU,C.eFi,C.eFf,C.eFe,C.eFp,C.eFo,C.eGU,C.eGT,C.eF8,C.eF7,C.eBI,C.eCS,C.eFR,C.eHb,C.eHa,C.eCF,C.eDQ,C.eBp,C.d9P,C.eI6,C.eI7,C.eI2,C.eI3,C.eI4,C.eI5,C.eIa,C.ckx,C.eHG,C.eHR,C.coO])
u(B.ht,[C.cO4,C.cO5,C.bTo,C.fFg,C.c3k,C.c3n,C.fW6,C.fh5,C.fgX,C.fhc,C.fox,C.foy,C.fIr,C.fIp,C.fVB,C.fEV,C.fWs,C.cPq,C.cPv,C.cPx,C.cPt,C.cPy,C.cPr,C.cPz,C.cPm,C.cPj,C.cPi,C.cPp,C.cOS,C.cOQ,C.fMZ,C.fN_,C.fsQ,C.fNY,C.fO3,C.frR,C.cf5,C.fMX,C.fMY,C.fHO,C.fHP,C.fO2,C.fNZ,C.fO0,C.fO1,C.fO_,C.fZV,C.fHS,C.fHT,C.fHW,C.fHX,C.fI_,C.fI0,C.h0n,C.fq7,C.h0y,C.esz,C.esA,C.esB,C.esh,C.est,C.esu,C.esw,C.ciL,C.ciJ,C.ciK,C.fND,C.fNF,C.fNE,C.fpH,C.fpI,C.h0B,C.etl,C.etm,C.etd,C.ete,C.eth,C.eti,C.h0R,C.f2d,C.f1D,C.f1n,C.f1A,C.f0F,C.f0G,C.f0H,C.f0L,C.f0M,C.f22,C.f29,C.f2b,C.f1M,C.f1O,C.f1S,C.f1T,C.f1U,C.f1Y,C.f1P,C.f1Q,C.f0X,C.f0Y,C.f0Z,C.f1_,C.f10,C.f11,C.f12,C.f13,C.f14,C.f0i,C.f0j,C.f0k,C.f0l,C.f0n,C.f0o,C.f0R,C.f0S,C.f0T,C.f0U,C.f0V,C.f0s,C.f0t,C.f0u,C.f0v,C.f1c,C.f1v,C.fL1,C.fL0,C.ckg,C.fxH,C.fSQ,C.fSJ,C.fSM,C.fQH,C.fQI,C.fQJ,C.fL8,C.fL7,C.fL6,C.fL4,C.fpB,C.fpC,C.fpD,C.h12,C.f8y,C.f8z,C.f8s,C.f8m,C.f8S,C.f8T,C.f8V,C.f8W,C.f8R,C.h11,C.f8d,C.fwY,C.ep0,C.fSS,C.fST,C.fSV,C.fSO,C.fSP,C.h0f,C.dsg,C.dsm,C.ep_,C.flU,C.flW,C.flV,C.flT,C.fMc,C.fMe,C.fo0,C.fSk,C.fSl,C.fSm,C.fSx,C.fSC,C.fSD,C.fSE,C.fSF,C.fSG,C.fSH,C.fSI,C.fSn,C.fSo,C.fSp,C.fSq,C.fSr,C.fSs,C.fSt,C.fSu,C.fSv,C.fSw,C.fSy,C.fSz,C.fSA,C.fSB,C.fK2,C.fwg,C.fwf,C.fT0,C.e2A,C.e2y,C.f7m,C.ceH,C.ceJ,C.fZF,C.dhA,C.dhC,C.fZE,C.fZC,C.h10,C.fPE,C.dha,C.fI3,C.fI4,C.cke,C.ckf,C.ckd,C.ck3,C.ck4,C.ck0,C.ck1,C.ck2,C.ckv,C.ckq,C.ckl,C.ckm,C.cko,C.ckr,C.ckt,C.fQg,C.ck8,C.ckb,C.ckc,C.cki,C.ckj,C.fT7,C.fSe,C.ck7,C.ck5,C.fQa,C.fz_,C.cjZ,C.f4R,C.fC2,C.eHx,C.eDX,C.eDY,C.eFx,C.eFl,C.eFm,C.eDk,C.eHi,C.eHj,C.eHk,C.eCJ,C.eF0,C.eF2,C.eED,C.eEA,C.eDT,C.eDU,C.eEK,C.eCL,C.eEW,C.eEX,C.eEV,C.eEZ,C.eEY,C.eFg,C.eFh,C.eFj,C.eFc,C.eD3,C.eD0,C.eFq,C.eCT,C.eHh,C.eBr,C.eCW,C.eCV,C.eC9,C.eCe,C.eCc,C.eCa,C.eHp,C.eHq,C.eHr,C.eHo,C.eGW,C.eGV,C.eGP,C.eGR,C.eGH,C.eHf,C.eHd,C.eBz,C.eBv,C.eDR,C.eCi,C.eBK,C.eBJ,C.eC5,C.eC6,C.eDi,C.eCk,C.eCo,C.eF9,C.eGI,C.eGJ,C.eGK,C.eGL,C.eCN,C.eCO,C.eCP,C.eEj,C.eDe,C.eD6,C.eDd,C.eEt,C.eEu,C.eGg,C.eGi,C.eGC,C.eGE,C.eGj,C.eGk,C.eCg,C.eDW,C.eDV,C.eH5,C.eCE,C.eCw,C.eCx,C.eCA,C.eCB,C.eEy,C.eDC,C.eDD,C.eDE,C.eDF,C.eDG,C.eDH,C.eDI,C.eDJ,C.eDK,C.eDL,C.eDM,C.eFu,C.d9M,C.d9N,C.eIc,C.fSY,C.fT6,C.fSX,C.fT2,C.fow,C.h14,C.h15,C.h16,C.eHF,C.eHO,C.eBk,C.eBf,C.eBg,C.fNe,C.fNd,C.fNf,C.fNk,C.fNg,C.fNh,C.fiz,C.fiA,C.epz,C.coN])
u(B.iH,[C.cO6,C.fh1,C.fh6,C.fh7,C.fh2,C.fh3,C.fh4,C.fgV,C.fgW,C.fgY,C.fgZ,C.fhb,C.fha,C.fh0,C.fh_,C.fh8,C.fh9,C.fhe,C.fhf,C.fhd,C.cPs,C.cPw,C.cPu,C.cPk,C.cPl,C.cPn,C.cPg,C.cPh,C.cPo,C.cPf,C.cPe,C.cPd,C.cOH,C.cOG,C.cOJ,C.cOR,C.cOK,C.cOI,C.cOM,C.cON,C.cOO,C.cOL,C.cOP,C.cOT,C.cOU,C.cOV,C.cOW,C.fHM,C.fHN,C.fHK,C.fHL,C.ekQ,C.ekO,C.ekP,C.ekR,C.ekS,C.e7j,C.fHQ,C.fHR,C.fHU,C.fHV,C.fHY,C.fHZ,C.epA,C.fPL,C.fPK,C.esy,C.esx,C.esb,C.es7,C.esi,C.esj,C.esk,C.esd,C.ese,C.esf,C.esg,C.esc,C.es9,C.esa,C.esq,C.esr,C.esp,C.ess,C.eso,C.esn,C.esm,C.esv,C.esl,C.es8,C.etk,C.et8,C.et9,C.etf,C.eta,C.etc,C.etb,C.etj,C.f15,C.f1t,C.f0P,C.f0Q,C.f0N,C.f0O,C.f1z,C.f1y,C.f1x,C.f1C,C.f1B,C.f0E,C.f0I,C.f0D,C.f0C,C.f0z,C.f0B,C.f0A,C.f2a,C.f23,C.f21,C.f24,C.f20,C.f25,C.f2_,C.f26,C.f27,C.f28,C.f1Z,C.f1L,C.f1G,C.f1R,C.f1K,C.f1V,C.f1J,C.f1W,C.f1I,C.f1X,C.f1H,C.f1q,C.f1p,C.f1r,C.f1o,C.f1s,C.f1i,C.f1h,C.f1j,C.f1g,C.f1f,C.f1e,C.f0m,C.f0h,C.f0w,C.f0r,C.f0x,C.f0q,C.f0y,C.f0p,C.f1l,C.f19,C.f18,C.f1a,C.f17,C.f1b,C.f16,C.f1u,C.f1F,C.f1E,C.f0W,C.fSL,C.fSN,C.fSR,C.fL5,C.fNw,C.fNu,C.fNv,C.f8A,C.f8B,C.f8x,C.f8r,C.f8q,C.f8t,C.f8u,C.f8g,C.f8h,C.f8j,C.f8k,C.f8l,C.f8i,C.f8n,C.f8O,C.f8P,C.f8N,C.f8Q,C.f8M,C.f8L,C.f8K,C.f8U,C.f8J,C.f8I,C.f8H,C.f8X,C.f8G,C.f8Y,C.f8F,C.f8E,C.f8o,C.f8p,C.f8D,C.f8C,C.f89,C.f8a,C.f8b,C.f8c,C.f88,C.f8e,C.f8f,C.dsf,C.dsh,C.dsk,C.dsl,C.dsj,C.dsi,C.fMd,C.fK3,C.ceI,C.ceK,C.dht,C.dhy,C.dhz,C.dhx,C.dhw,C.dhB,C.dhv,C.dhu,C.dhD,C.fZB,C.doh,C.doi,C.doj,C.fI1,C.fI2,C.ckw,C.eBl,C.eBm,C.eBn,C.eBo,C.fyY,C.fyZ,C.e0j,C.e0i,C.den,C.dem,C.eHz,C.eHy,C.eDZ,C.eGF,C.eHv,C.eFv,C.eHl,C.eHm,C.eHw,C.eEE,C.eCH,C.eCI,C.eF1,C.eEC,C.eEz,C.eEB,C.eEF,C.eEG,C.eEH,C.eEI,C.eEJ,C.eEL,C.eCM,C.eEO,C.eEP,C.eEQ,C.eER,C.eES,C.eET,C.eEN,C.eF_,C.eFd,C.eFb,C.eFk,C.eEM,C.eD1,C.eD2,C.eD4,C.eFn,C.eFr,C.eBG,C.eD_,C.eCY,C.eFz,C.eCU,C.eFy,C.eCK,C.eDl,C.eHg,C.eGG,C.eBH,C.eBE,C.eBu,C.eBq,C.eBs,C.eCX,C.eC8,C.eCd,C.eCb,C.eC7,C.eFa,C.eHs,C.eGS,C.eGN,C.eGO,C.eGQ,C.eDP,C.eDO,C.eHe,C.eBx,C.eBy,C.eBA,C.eBB,C.eBF,C.eBw,C.eFw,C.eHn,C.eDS,C.eCh,C.eBt,C.eDj,C.eBC,C.eBL,C.eBM,C.eBN,C.eBY,C.eC0,C.eC1,C.eC2,C.eC3,C.eC4,C.eBO,C.eBP,C.eBQ,C.eBR,C.eBS,C.eBT,C.eBU,C.eBV,C.eBW,C.eBX,C.eBZ,C.eC_,C.eDh,C.eDg,C.eDf,C.eBD,C.eCl,C.eCj,C.eCm,C.eCn,C.eCZ,C.eF5,C.eF6,C.eF3,C.eF4,C.eGM,C.eCR,C.eCQ,C.eEi,C.eEh,C.eEk,C.eEg,C.eEl,C.eEf,C.eEm,C.eEe,C.eEn,C.eEd,C.eEo,C.eEc,C.eEp,C.eEb,C.eEq,C.eEa,C.eE3,C.eE4,C.eE5,C.eE2,C.eE6,C.eE1,C.eE7,C.eE0,C.eE8,C.eE_,C.eE9,C.eDb,C.eDc,C.eD5,C.eD7,C.eD8,C.eD9,C.eDa,C.eHt,C.eHu,C.eEs,C.eEr,C.eEv,C.eFS,C.eFT,C.eFU,C.eG4,C.eGf,C.eGq,C.eGx,C.eGy,C.eGz,C.eGA,C.eGB,C.eFV,C.eFW,C.eFX,C.eFY,C.eFZ,C.eG_,C.eG0,C.eG1,C.eG2,C.eG3,C.eG5,C.eG6,C.eG7,C.eG8,C.eG9,C.eGa,C.eGb,C.eGc,C.eGd,C.eFI,C.eGe,C.eFQ,C.eFP,C.eGh,C.eFO,C.eFE,C.eGD,C.eFN,C.eFD,C.eFB,C.eFM,C.eFC,C.eFA,C.eGl,C.eFL,C.eGm,C.eGn,C.eGo,C.eGp,C.eFK,C.eGr,C.eGs,C.eGt,C.eFJ,C.eGu,C.eFH,C.eGv,C.eFG,C.eGw,C.eFF,C.eCf,C.eGZ,C.eGY,C.eH_,C.eGX,C.eDo,C.eDn,C.eDp,C.eDm,C.eH9,C.eH4,C.eH8,C.eH0,C.eH1,C.eH2,C.eH3,C.eH6,C.eH7,C.eHc,C.eCG,C.eCt,C.eCu,C.eCv,C.eCs,C.eCz,C.eCy,C.eCr,C.eCq,C.eCC,C.eCp,C.eCD,C.eEx,C.eEw,C.eDB,C.eDA,C.eDz,C.eDy,C.eDx,C.eDw,C.eDv,C.eDu,C.eDr,C.eDt,C.eDs,C.eDq,C.eDN,C.eFs,C.eFt,C.d9O,C.dac,C.dad,C.d9I,C.d9H,C.d9L,C.d9J,C.d9K,C.eI9,C.eI_,C.eI8,C.eI0,C.eI1,C.eHW,C.eHX,C.eHY,C.eHZ,C.eIb,C.fT3,C.fT4,C.fT5,C.eHC,C.eHD,C.eHE,C.eHH,C.eHI,C.eHL,C.eHM,C.eHK,C.eHN,C.eHJ,C.eHB,C.eHA,C.eHP,C.eHQ,C.eHS,C.eHT,C.eBj,C.eBi,C.eBe,C.eBh,C.eHV,C.eHU,C.fNj,C.fNi,C.epx,C.epy])
t(C.aTa,B.M)
u(B.lB,[C.a4J,C.ayL,C.axp,C.y4,C.y7,C.l8,C.tJ,C.C3,C.rR,C.wq,C.atb,C.Jx,C.asD,C.v7,C.mP,C.hF,C.a9B])
u(C.bSl,[C.cG3,C.bSm])
u(C.coH,[C.coL,C.aui])
t(C.coK,C.coF)
t(C.coJ,C.coE)
t(C.coM,C.coJ)
t(C.coI,C.coG)
t(C.coC,C.coD)
t(C.bc5,B.p8)
t(C.cz9,B.awS)
t(C.a9n,B.xS)
u(B.af,[C.a20,C.ZI,C.ZG,C.arK,C.WQ,C.WR,C.a1_,C.a1w,C.a1v,C.aFB,C.a_T,C.Oe,C.a_q,C.a_L,C.apF,C.aKs,C.W7,C.aB8,C.a8G,C.OI,C.aAv,C.Ky,C.a0C,C.X1,C.X2,C.aFZ,C.asI,C.a8H])
u(B.ah,[C.aKN,C.azj,C.azf,C.aFq,C.aFH,C.aFK,C.aH8,C.aJ3,C.aJ2,C.aNG,C.aD6,C.aNa,C.aBt,C.bi6,C.aMW,C.aOY,C.aN9,C.bfU,C.aNE,C.aNR,C.aLR,C.beF,C.aNS,C.aG1,C.bmA,C.aG_,C.aG2,C.bmj])
u(B.ax,[C.azh,C.aeh,C.adG,C.blk,C.aek,C.ag_,C.b2J,C.buW,C.b33,C.bnR,C.bts,C.b0Y,C.b36,C.aen,C.aeE,C.b34,C.Jw,C.b10,C.beV,C.Qr,C.KE,C.bjG,C.bjF,C.bxm])
u(B.HZ,[C.bem,C.bwk,C.aL9,C.bh6,C.btR])
u(B.mg,[C.bel,C.baP,C.btO,C.bdU,C.bhv,C.bjN,C.bgA,C.bhr,C.bh8,C.bqc,C.bbY,C.bbB,C.bxi,C.bug,C.bto,C.bgt,C.b31,C.bsi,C.btl])
t(C.bmg,C.aNG)
t(C.blC,C.aNa)
t(C.blm,C.aMW)
t(C.bwN,C.aOY)
t(C.bly,C.aN9)
t(C.bme,C.aNE)
t(C.bzF,C.aNR)
t(C.aG0,C.bzF)
t(C.beG,C.aLR)
t(C.aG3,C.aNS)
t(C.bx8,B.j0)
t(C.a9A,B.kF)
t(C.coP,C.b4O)
t(C.aji,C.a40)
u(B.YH,[C.aT0,C.aUu])
t(C.ayl,C.aT0)
w(C.aNG,B.cc)
w(C.aNa,B.cc)
w(C.aMW,B.cc)
w(C.aN9,B.cc)
w(C.aNE,B.cc)
w(C.aOY,B.cc)
w(C.aLR,B.eO)
w(C.aNR,B.cc)
v(C.bzF,B.eC)
w(C.aNS,B.cc)})()
B.j1(b.typeUniverse,JSON.parse('{"aTM":{"hM":["aTM"]},"oe":{"aTM":[],"hM":["aTM"]},"aTa":{"M":["SJ"],"M.E":"SJ"},"bc5":{"p8":[]},"a9n":{"xS":[],"oz":[]},"a20":{"af":[],"v":[]},"aKN":{"ah":["a20"]},"ZI":{"af":[],"v":[]},"ZG":{"af":[],"v":[]},"azj":{"ah":["ZI"]},"azf":{"ah":["ZG"]},"azh":{"ax":[],"v":[]},"arK":{"af":[],"v":[]},"aFq":{"ah":["arK"]},"aeh":{"ax":[],"v":[]},"adG":{"ax":[],"v":[]},"aek":{"ax":[],"v":[]},"ag_":{"ax":[],"v":[]},"blk":{"ax":[],"v":[]},"WQ":{"af":[],"v":[]},"aFH":{"ah":["WQ"]},"b2J":{"ax":[],"v":[]},"bem":{"aC":[]},"bel":{"aC":[]},"bwk":{"aC":[]},"baP":{"aC":[]},"btO":{"aC":[]},"WR":{"af":[],"v":[]},"aFK":{"ah":["WR"]},"bdU":{"aC":[]},"a1_":{"af":[],"v":[]},"aH8":{"ah":["a1_"]},"bhv":{"aC":[]},"a1w":{"af":[],"v":[]},"a1v":{"af":[],"v":[]},"aFB":{"af":[],"v":[]},"a_T":{"af":[],"v":[]},"aJ3":{"ah":["a1w"]},"aJ2":{"ah":["a1v"]},"bmg":{"ah":["aFB"]},"bjN":{"aC":[]},"aD6":{"ah":["a_T"]},"buW":{"ax":[],"v":[]},"b33":{"ax":[],"v":[]},"bnR":{"ax":[],"v":[]},"Oe":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"blC":{"ah":["Oe"]},"bts":{"ax":[],"v":[]},"bgA":{"aC":[]},"b0Y":{"ax":[],"v":[]},"aBt":{"ah":["a_q"]},"a_L":{"af":[],"v":[]},"bi6":{"ah":["a_L"]},"bhr":{"aC":[]},"bh8":{"aC":[]},"bqc":{"aC":[]},"bbY":{"aC":[]},"bbB":{"aC":[]},"bxi":{"aC":[]},"bug":{"aC":[]},"bto":{"aC":[]},"bgt":{"aC":[]},"apF":{"af":[],"v":[]},"b36":{"ax":[],"v":[]},"blm":{"ah":["apF"]},"aen":{"ax":[],"v":[]},"aeE":{"ax":[],"v":[]},"aKs":{"af":[],"v":[]},"W7":{"af":[],"v":[]},"Jw":{"ax":[],"v":[]},"aB8":{"af":[],"v":[]},"a8G":{"af":[],"v":[]},"b34":{"ax":[],"v":[]},"b31":{"aC":[]},"bwN":{"ah":["aKs"]},"aL9":{"aC":[]},"bly":{"ah":["W7"]},"bfU":{"ah":["aB8"]},"bme":{"ah":["a8G"]},"b10":{"ax":[],"v":[]},"bh6":{"aC":[]},"bsi":{"aC":[]},"btl":{"aC":[]},"aAv":{"af":[],"v":[]},"Ky":{"af":[],"v":[]},"a0C":{"af":[],"v":[]},"KE":{"ax":[],"v":[]},"OI":{"af":[],"v":[]},"aG0":{"ah":["OI"],"eC":[]},"beG":{"ah":["aAv"]},"beV":{"ax":[],"v":[]},"beF":{"ah":["Ky"]},"Qr":{"ax":[],"v":[]},"aG3":{"ah":["a0C"]},"btR":{"aC":[]},"bjG":{"ax":[],"v":[]},"bjF":{"ax":[],"v":[]},"X1":{"af":[],"v":[]},"X2":{"af":[],"v":[]},"aFZ":{"af":[],"v":[]},"asI":{"af":[],"v":[]},"aG1":{"ah":["X1"]},"bmA":{"ah":["X2"]},"aG_":{"ah":["aFZ"]},"bx8":{"j0":[]},"aG2":{"ah":["asI"]},"bxm":{"ax":[],"v":[]},"a8H":{"af":[],"v":[]},"bmj":{"ah":["a8H"]},"a9A":{"kF":["fv<eU>"],"kr":["fv<eU>"]},"aji":{"a40":[]},"aT0":{"je":[],"fi":[]},"ayl":{"je":[],"fi":[]},"aUu":{"je":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mp"),U:w("vU<qi>"),bz:w("u"),M:w("df<m>"),bo:w("jQ"),g7:w("U5"),gc:w("aB<iE?>"),bq:w("aB<~>"),cc:w("BW"),fS:w("Ez"),an:w("II"),bm:w("O<SJ>"),X:w("O<SM>"),f3:w("O<aTM>"),aK:w("O<nm>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lP>"),d5:w("O<aB<bA<F,+icon3d,picture(m?,m?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<nu>"),cd:w("O<ai<jA>>"),ez:w("O<a8<m,aE>>"),d:w("O<a8<m,@>>"),B:w("O<mL>"),h:w("O<jA>"),gE:w("O<A5>"),k:w("O<oG>"),g:w("O<lY>"),D:w("O<i3>"),u:w("O<eN>"),m:w("O<v7>"),i:w("O<hF>"),aC:w("O<a8Y>"),o:w("O<A6>"),e3:w("O<aE>"),dN:w("O<p>"),v:w("O<fT>"),cR:w("O<iZ>"),J:w("O<jq>"),gx:w("O<pw<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(I,I)>"),ek:w("O<+(F,m)>"),n:w("O<+(F,F)>"),r:w("O<cU>"),s:w("O<m>"),aS:w("O<j0>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<baw>"),bx:w("O<aGC>"),gz:w("O<ag9>"),x:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<p?>"),Z:w("O<F?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oG>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bA<F,+icon3d,picture(m?,m?)>"),P:w("a8<m,@>"),f:w("a8<@,@>"),gI:w("a8<F,+icon3d,picture(m?,m?)>"),bR:w("N<hF,v>"),eC:w("N<o4,m>"),cT:w("N<jW,D>"),dv:w("N<m,m>"),f0:w("N<m,v>"),gN:w("N<F,q0>"),gh:w("N<mP,jC<mP>>"),w:w("iB"),ei:w("iE"),g2:w("rH"),fB:w("Fd"),b6:w("A5"),gX:w("a8Q"),dt:w("lv"),ea:w("oG"),bt:w("lY"),I:w("i3"),F:w("eN"),fO:w("mP"),ff:w("v7"),fP:w("hF"),Q:w("wq"),dO:w("asE"),a:w("ct"),C:w("aE"),dw:w("auj"),di:w("a9B"),Y:w("eU"),fz:w("+(m,m)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("FJ"),dB:w("ds<p>"),bJ:w("ds<m>"),_:w("e_<m>"),N:w("m"),fw:w("qi"),bO:w("au"),K:w("bq<p>"),b:w("bq<I>"),E:w("dK"),W:w("bP<m>"),ac:w("bP<F>"),ex:w("k_<lY>"),cI:w("k_<m>"),cl:w("k_<I>"),b4:w("Y<ls>"),a8:w("Y<ml>"),fR:w("Y<+(m,m)>"),co:w("e9<p>"),l:w("v"),b2:w("c2<~>"),ev:w("qm<dZ>"),dT:w("bk<~>"),q:w("mu"),y:w("P"),gR:w("I"),z:w("@"),S:w("F"),at:w("bd?"),gw:w("ai<a8<m,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iE?"),af:w("i3?"),go:w("b38?"),a6:w("a8Z?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dK,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1p=new B.bL(A.aA,null,null,H.arX,null)
D.b1y=new B.d9(0,-0.15)
D.b1A=new B.d9(0.62,0)
D.b1D=new B.d9(-0.35,-0.45)
D.b1N=new B.d9(0.9,-0.85)
D.b3Y=new B.bg(H.Ug,H.Ug,A.fI,A.fI)
D.b4d=new B.ay(A.b7,1,A.r,-1)
D.bpU=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b4p=new B.ay(D.bpU,1,A.r,-1)
D.b4B=new B.ay(A.aE,1.5,A.r,-1)
D.b4G=new B.ay(A.b7,1.6,A.r,-1)
D.b4W=new B.ay(A.aE,1.4,A.r,-1)
D.b6h=new B.o(null,null,null,null,null,K.I_,A.a7)
D.c7c=new B.a9(A.a6,A.a9,A.x,G.a5D,null,null)
D.b6p=new B.o(null,null,null,null,null,D.c7c,A.a7)
D.aee=new B.o(A.au,null,null,A.tL,null,null,A.n)
D.biL=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bpR=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d5K=w([D.biL,D.bpR],x.O)
D.exO=new B.c0(A.A,0.5,A.x,null,0,D.d5K,null,null)
D.b6I=new B.o(null,null,null,null,null,D.exO,A.a7)
D.YY=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b5b=new B.bH(Q.vM,A.a1,A.a1,A.a1)
D.b6K=new B.o(D.YY,null,D.b5b,null,null,null,A.n)
D.c8V=new B.a9(A.a6,A.a9,A.x,A.RT,null,null)
D.b6R=new B.o(null,null,null,null,null,D.c8V,A.a7)
D.afR=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b6U=new B.o(D.afR,null,null,A.rj,null,null,A.n)
D.b6Y=new B.o(A.jU,null,null,null,null,null,A.a7)
D.b70=new B.o(A1.ah6,null,H.adQ,A.mD,null,null,A.n)
D.Ff=new B.o(A.dI,null,null,null,null,null,A.a7)
D.b77=new B.o(null,null,null,null,null,E.wP,A.a7)
D.db3=w([E.ai5,A.c2],x.O)
D.c8x=new B.a9(A.b6,A.b8,A.x,D.db3,null,null)
D.b7b=new B.o(null,null,null,A.mD,null,D.c8x,A.n)
D.dmw=w([A.bm,A.dI,A.jT],x.O)
D.a3D=new B.a9(A.aA,A.aF,A.x,D.dmw,null,null)
D.b7o=new B.o(null,null,null,null,null,D.a3D,A.n)
D.b7p=new B.o(D.afR,null,null,A.l7,null,null,A.n)
D.cAn=w([A.d5,A.bm],x.O)
D.c8o=new B.a9(A.aA,A.aF,A.x,D.cAn,null,null)
D.b7t=new B.o(null,null,null,null,null,D.c8o,A.n)
D.b7D=new B.o(null,null,null,null,null,G.uW,A.a7)
D.b7Y=new B.o(A.ai7,null,null,null,null,null,A.a7)
D.bjL=new B.u(0.5647058823529412,0,0,0,A.q)
D.aeo=new B.ac(0,A.G,D.bjL,A.Jn,28)
D.ba6=new B.aXY()
D.baF=new C.cz9()
D.baS=new C.bc5()
D.aeT=new B.ce(A.A,null,null,A.a3s,null)
D.bdy=new B.fk(null,null,null,null,null,E.nt,null,null,null,null)
D.bbr=new B.ce(A.A,null,null,D.bdy,null)
D.bSz=new B.ae(A.e9,28,A.c,null,null,null)
D.bbX=new B.ce(A.A,null,null,D.bSz,null)
D.bdv=new B.fk(2,null,null,null,null,A.c3,null,null,null,null)
D.bcj=new B.ce(A.A,null,null,D.bdv,null)
D.bST=new B.ae(K.Ps,40,A.bD,null,null,null)
D.bck=new B.ce(A.A,null,null,D.bST,null)
D.bep=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.beD=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bf5=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bfh=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bfV=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bgb=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bgd=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Mb=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bgG=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bgO=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.agb=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bhF=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.biy=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.agr=new B.u(1,1,1,0.9725490196078431,A.q)
D.biU=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bj8=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bjb=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bjr=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjR=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.blw=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YF=new B.u(0.8509803921568627,0,0,0,A.q)
D.blH=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.blO=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ahq=new B.u(0.6,0,0,0,A.q)
D.ahs=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bnv=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.u6=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bnZ=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bos=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.boR=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ail=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Z9=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.BO=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MQ=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jy=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aiS=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zi=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bsI=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.btd=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.btt=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZL=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.buG=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yi=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bvh=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bvC=new B.hL(A.aV,!0,null,null)
D.fyu=new B.G(!0,A.aD,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZp=new B.B("Bio link",null,D.fyu,null,null,null,null,null,null,null,null,null)
D.bce=new B.ce(A.A,null,null,D.fZp,null)
D.bvR=new B.hL(A.Bq,!0,D.bce,null)
D.Nj=new C.a4J(0,"none")
D.ak8=new C.a4J(1,"deflate")
D.ak9=new C.a4J(2,"bzip2")
D.bwQ=new B.ky(0.165,0.84,0.44,1)
D.dbn=w([A.ch,A.dJ,A.aE],x.O)
D.c7F=new B.a9(A.aA,A.aF,A.x,D.dbn,null,null)
D.b6m=new B.o(null,null,null,null,null,D.c7F,A.n)
D.c0X=new B.ae(A.f4,null,A.ab,null,null,null)
D.bcT=new B.ce(A.A,null,null,D.c0X,null)
D.bxo=new B.l3(D.b6m,A.bi,D.bcT,null)
D.bsX=new B.u(0.058823529411764705,1,1,1,A.q)
D.deN=w([A.bz,A.rt,A.rt,D.bsX],x.O)
D.cRR=w([0,0.32,0.7,1],x.x)
D.c8e=new B.a9(A.aA,A.aF,A.x,D.deN,D.cRR,null)
D.b6b=new B.o(null,null,null,null,null,D.c8e,A.n)
D.bxu=new B.l3(D.b6b,A.bi,null,null)
D.byC=new B.mC(1,1,null,null,null,A.bp,null)
D.byF=new B.mC(1,null,null,null,null,D.Zi,null)
D.bz8=new B.bd(125e4)
D.bze=new B.bd(17e4)
D.bzo=new B.bd(35964e8)
D.bzv=new B.bd(55e4)
D.bzz=new B.bd(68e4)
D.bA_=new B.ik(0,0,0,5)
D.bAf=new B.Q(0,16,16,0)
D.bAq=new B.Q(0,36,0,36)
D.bAy=new B.Q(0,54,0,0)
D.bAF=new B.Q(10,0,10,3)
D.bAR=new B.ik(10,16,10,10)
D.bB2=new B.Q(10,6,4,6)
D.bB5=new B.Q(10,8,10,6)
D.al8=new B.Q(11,8,11,11)
D.bBa=new B.Q(12,0,12,24)
D.bBn=new B.Q(12,12,12,4)
D.bBq=new B.Q(12,12,8,12)
D.bBG=new B.Q(12,8,8,12)
D.bC4=new B.Q(14,14,14,0)
D.bC9=new B.Q(14,14,14,90)
D.bCw=new B.Q(16,10,16,16)
D.bCx=new B.Q(16,10,16,20)
D.alU=new B.Q(16,6,16,28)
D.bD5=new B.Q(18,0,18,10)
D.bD7=new B.Q(18,0,18,30)
D.bD9=new B.Q(18,10,18,12)
D.bDa=new B.Q(18,10,18,14)
D.bDv=new B.Q(18,16,14,18)
D.bDA=new B.Q(18,18,18,12)
D.bDG=new B.Q(18,26,18,12)
D.bDL=new B.Q(18,34,18,34)
D.bDM=new B.Q(18,4,18,14)
D.bDR=new B.Q(18,8,18,24)
D.bE9=new B.Q(20,16,14,4)
D.bEe=new B.Q(20,18,12,4)
D.bEj=new B.Q(20,20,12,20)
D.bEm=new B.Q(20,22,20,20)
D.bEr=new B.Q(20,6,20,6)
D.bEB=new B.Q(22,18,22,18)
D.bEJ=new B.Q(22,24,22,0)
D.bEM=new B.Q(22,24,22,4)
D.bEU=new B.Q(22,60,22,22)
D.bF_=new B.Q(24,24,24,22)
D.bF9=new B.Q(26,10,60,10)
D.bFh=new B.Q(28,44,28,44)
D.bFy=new B.Q(32,44,32,44)
D.bFG=new B.Q(38,30,38,20)
D.bFL=new B.Q(4,0,0,6)
D.bFX=new B.ik(4,4,4,4)
D.bGp=new B.ik(6,5,6,5)
D.bGu=new B.Q(6,6,8,6)
D.bGG=new B.Q(8,14,8,14)
D.bGH=new B.Q(8,22,8,22)
D.bGQ=new B.Q(8,6,12,6)
D.bGZ=new B.Q(8,8,8,4)
D.amQ=new B.Q(9,9,9,6)
D.bHa=new B.ik(2.5,2.5,2.5,2.5)
D.bHb=new B.Q(10.5,0,10.5,0)
D.bHc=new B.Q(7,1.5,7,1.5)
D.d2z=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bHs=new B.uH(null,null,D.d2z,A.xU)
D.d_k=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bHt=new B.uH(null,null,D.d_k,A.xU)
D.aVT=new B.G(!0,A.aD,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYH=new B.B("WORD DESIGN",null,D.aVT,null,null,null,null,null,null,null,null,null)
D.bI8=new B.by(1,A.bb,D.fYH,null)
D.fYl=new B.B("Slides database",null,Ac.vu,null,null,null,null,null,null,null,null,null)
D.fVy=new B.B("Admin only \xb7 keep as many as you like",null,V.aVm,null,null,null,null,null,null,null,null,null)
D.dvg=w([D.fYl,A.bG,D.fVy],x.p)
D.bwh=new B.fj(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dvg,null)
D.bIb=new B.by(1,A.bb,D.bwh,null)
D.fPK=new B.B("NGMY logo",null,A.fB,null,null,null,null,null,null,null,null,null)
D.bIe=new B.by(1,A.bb,D.fPK,null)
D.fwa=new B.G(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_K=new B.B("TALK TO THE EDITOR",null,D.fwa,null,null,null,null,null,null,null,null,null)
D.bIx=new B.by(1,A.bb,D.h_K,null)
D.fJq=new B.B("Tell the AI what to change",null,Ac.vu,null,null,null,null,null,null,null,null,null)
D.bIR=new B.by(1,A.bb,D.fJq,null)
D.bKl=new B.Ep(!0,"video/mp4")
D.fum=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new B.B("Move presentations between devices",null,D.fum,null,null,null,!1,null,null,1,null,null)
D.bKp=new B.qE(A.e_,A.a6,A.f,D.fHm,null)
D.fIB=new B.B("Edit in Slides",null,A.ja,null,null,null,null,null,null,null,null,null)
D.bKq=new B.qE(A.e_,A.A,A.f,D.fIB,null)
D.bKF=new B.dn(1,A.co,D.bKq,null)
D.a1M=new B.a0(60988,"MaterialIcons",!1)
D.bO6=new B.a0(61352,"MaterialIcons",!1)
D.aoz=new B.a0(61531,"MaterialIcons",!1)
D.bPi=new B.a0(63062,"MaterialIcons",!1)
D.bPp=new B.a0(63109,"MaterialIcons",!1)
D.bPC=new B.a0(63206,"MaterialIcons",!1)
D.apf=new B.a0(63238,"MaterialIcons",!1)
D.bPT=new B.a0(63338,"MaterialIcons",!1)
D.a2o=new B.a0(63365,"MaterialIcons",!1)
D.a2p=new B.a0(63367,"MaterialIcons",!1)
D.a2q=new B.a0(63368,"MaterialIcons",!1)
D.apr=new B.a0(63384,"MaterialIcons",!1)
D.bQa=new B.a0(63525,"MaterialIcons",!1)
D.bQe=new B.a0(63568,"MaterialIcons",!1)
D.bQz=new B.a0(983072,"MaterialIcons",!1)
D.bQY=new B.a0(983271,"MaterialIcons",!0)
D.aqx=new B.a0(983965,"MaterialIcons",!1)
D.aqy=new B.a0(983966,"MaterialIcons",!1)
D.bRU=new B.a0(984592,"MaterialIcons",!1)
D.bSb=new B.ae(A.uD,16,A.aD,null,null,null)
D.aqK=new B.ae(A.pq,18,A.c,null,null,null)
D.bSA=new B.ae(A.Cs,18,N.lF,null,null,null)
D.bTe=new B.ae(A.jE,11,null,null,null,null)
D.bTp=new B.ae(A.a24,null,A.ew,null,null,null)
D.bTX=new B.ae(A.rV,18,A.aD,null,null,null)
D.bU2=new B.ae(A4.CK,14,null,null,null,null)
D.bU3=new B.ae(A.ef,28,A.c_,null,null,null)
D.bUf=new B.ae(A.qK,20,A.c,null,null,null)
D.bUm=new B.ae(A.zc,null,null,null,null,null)
D.bUs=new B.ae(A.jD,18,A.hn,null,null,null)
D.bUx=new B.ae(A.kt,null,null,null,null,null)
D.bPk=new B.a0(63065,"MaterialIcons",!1)
D.bV9=new B.ae(D.bPk,15,A.c,null,null,null)
D.bPq=new B.a0(63113,"MaterialIcons",!1)
D.bVf=new B.ae(D.bPq,null,A.ab,null,null,null)
D.bVD=new B.ae(A.uB,22,A.bN,null,null,null)
D.bVY=new B.ae(A.rS,18,null,null,null,null)
D.bW3=new B.ae(A.CP,12,A.c,null,null,null)
D.bRw=new B.a0(983687,"MaterialIcons",!1)
D.bWf=new B.ae(D.bRw,null,A.bm,null,null,null)
D.bWo=new B.ae(A.hH,null,A.bm,null,null,null)
D.bWH=new B.ae(A.pv,22,A.c,null,null,null)
D.bWL=new B.ae(A.cz,13,A.c,null,null,null)
D.bWR=new B.ae(A.ef,26,A.az,null,null,null)
D.bWV=new B.ae(A.rY,26,A.c,null,null,null)
D.PE=new B.ae(A.jE,8,A.c,null,null,null)
D.bXf=new B.ae(A.pq,40,A.c,null,null,null)
D.bXg=new B.ae(A.bN3,null,null,null,null,null)
D.bXk=new B.ae(A.uO,20,null,null,null,null)
D.bRv=new B.a0(983683,"MaterialIcons",!1)
D.bXu=new B.ae(D.bRv,null,A.b1,null,null,null)
D.bXv=new B.ae(A.jE,16,A.bm,null,null,null)
D.bXQ=new B.ae(A.ps,null,null,null,null,null)
D.ark=new B.ae(A.wx,22,A.c,null,null,null)
D.bXW=new B.ae(A.e9,17,A.c,null,null,null)
D.arl=new B.ae(A.jE,9,A.c,null,null,null)
D.bY0=new B.ae(A.ws,null,null,null,null,null)
D.bNk=new B.a0(57744,"MaterialIcons",!1)
D.bY7=new B.ae(D.bNk,null,null,null,null,null)
D.bYa=new B.ae(A.ws,16,null,null,null,null)
D.bS2=new B.a0(985181,"MaterialIcons",!1)
D.HS=new B.ae(D.bS2,null,null,null,null,null)
D.bYm=new B.ae(A.kt,16,A.bN,null,null,null)
D.bRo=new B.a0(983615,"MaterialIcons",!1)
D.bYo=new B.ae(D.bRo,12,A.c,null,null,null)
D.arr=new B.ae(A.z_,16,null,null,null,null)
D.bYw=new B.ae(A.e9,21,A.c,null,null,null)
D.bYB=new B.ae(A.hH,17,A.c,null,null,null)
D.bYC=new B.ae(A.uB,null,null,null,null,null)
D.bYT=new B.ae(A.a34,20,A.aD,null,null,null)
D.bZ7=new B.ae(A.ou,22,E.nt,null,null,null)
D.bZf=new B.ae(A.qJ,13,A.ab,null,null,null)
D.bZi=new B.ae(A.aqk,20,A.aD,null,null,null)
D.bN1=new B.a0(57495,"MaterialIcons",!1)
D.bZn=new B.ae(D.bN1,null,null,null,null,null)
D.bZr=new B.ae(A.ov,18,A.c,null,null,null)
D.bZO=new B.ae(A.uS,28,A.c,null,null,null)
D.bZZ=new B.ae(D.apf,null,A.aE,null,null,null)
D.c__=new B.ae(A.qK,22,A.c,null,null,null)
D.arA=new B.ae(A.a1I,16,null,null,null,null)
D.c_L=new B.ae(A.uB,32,A.c,null,null,null)
D.c0t=new B.ae(A.jp,22,A.c,null,null,null)
D.c0w=new B.ae(A.rY,22,A.ab,null,null,null)
D.arQ=new B.ae(A.uD,null,A.bV,null,null,null)
D.c1r=new B.ae(A.qD,18,null,null,null,null)
D.c24=new B.ae(A.e9,18,A.bq,null,null,null)
D.c2b=new B.ae(A.aqf,null,null,null,null,null)
D.c2C=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVH,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.fm1=new B.G(!0,A.bM,null,null,null,null,null,A.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c2U=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fm1,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.c3k=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eJ,!0,null,null,null,null)
D.d6N=w([A.dI,A.aE],x.O)
D.c5r=new B.a9(A.a6,A.a9,A.x,D.d6N,null,null)
D.c5C=new B.a9(A.b6,A.b8,A.VT,A.ayY,null,null)
D.beV=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bjT=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bnw=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bhw=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cRT=w([D.beV,D.bjT,D.bnw,D.bhw],x.O)
D.c5V=new B.a9(A.aA,A.aF,A.x,D.cRT,A.In,null)
D.dvp=w([A.cJ,A.bF,A.b7],x.O)
D.c5X=new B.a9(A.b6,A.b8,A.VT,D.dvp,null,null)
D.dwU=w([A.bm,A.cg],x.O)
D.c61=new B.a9(A.a6,A.a9,A.x,D.dwU,null,null)
D.drD=w([A.hB,A.d2,A.ax],x.O)
D.c63=new B.a9(A.aA,A.aF,A.x,D.drD,null,null)
D.dd7=w([A.cO,A.fn],x.O)
D.c67=new B.a9(A.a6,A.a9,A.x,D.dd7,null,null)
D.dvi=w([N.lF,A.d2],x.O)
D.asB=new B.a9(A.a6,A.a9,A.x,D.dvi,null,null)
D.bkB=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dvf=w([D.bkB,D.yi,A.c3],x.O)
D.c6c=new B.a9(A.a6,A.a9,A.x,D.dvf,null,null)
D.d8y=w([A.b9,A.cY,A.en],x.O)
D.c6d=new B.a9(A.aA,A.aF,A.x,D.d8y,null,null)
D.PW=new B.a9(A.a6,A.a9,A.x,A.IB,null,null)
D.btR=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cKP=w([D.btR,A.c3,A.jA],x.O)
D.asG=new B.a9(A.aA,A.aF,A.x,D.cKP,null,null)
D.diL=w([A.u0,A.aB,D.BO],x.O)
D.c7e=new B.a9(A.a6,A.a9,A.x,D.diL,null,null)
D.bvi=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bix=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.boF=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d7D=w([D.bvi,D.bix,D.boF],x.O)
D.asH=new B.a9(A.a6,A.a9,A.x,D.d7D,null,null)
D.bkD=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c9b=w([AA.ajL,D.bkD],x.O)
D.c7n=new B.a9(A.b6,A.b8,A.x,D.c9b,null,null)
D.d5y=w([A.mL,A.bD],x.O)
D.c7r=new B.a9(A.b6,A.b8,A.x,D.d5y,null,null)
D.dod=w([A.aE,A.dJ],x.O)
D.c7x=new B.a9(A.a6,A.a9,A.x,D.dod,null,null)
D.aiz=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAI=w([D.aiz,D.jy,D.Mb],x.O)
D.c7Z=new B.a9(A.aA,A.aF,A.x,D.aAI,null,null)
D.cKH=w([A.dw,A.dB],x.O)
D.c89=new B.a9(A.b6,A.b8,A.x,D.cKH,null,null)
D.dl4=w([A.xX,A.BG],x.O)
D.c8W=new B.a9(A.a6,A.a9,A.x,D.dl4,null,null)
D.fRl=new B.B("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c97=new B.q3(null,D.fRl,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zC=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7B=new C.l8(2,"elegantNavy")
D.hCf=w([A.Z7,D.jy,A.c3],x.O)
D.ka=new C.y4(0,"classic")
D.a7q=new C.jA("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7B,4294967035,4279378237,4290283019,D.ka)
D.aKc=new C.l8(3,"elegantGold")
D.beo=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bfB=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.agW=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hBI=w([D.beo,D.bfB,D.agW],x.O)
D.a7o=new C.jA("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aKc,4294966515,4281016592,4289102906,D.ka)
D.dSf=new C.l8(22,"goldRibbon")
D.hBE=w([A.Z7,D.jy,A.ip],x.O)
D.a7h=new C.jA("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dSf,4294967035,4279378237,4291404327,D.ka)
D.dSg=new C.l8(23,"goldBaroque")
D.ahF=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hBK=w([D.ahF,A.aB,A.jA],x.O)
D.a7i=new C.jA("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dSg,4294964964,4283053072,4292128567,D.ka)
D.dSi=new C.l8(4,"elegantEmerald")
D.bgW=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bhW=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hBQ=w([D.bgW,D.bhW,A.ip],x.O)
D.a7j=new C.jA("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dSi,4294376440,4279122734,4291404327,D.ka)
D.dSj=new C.l8(5,"elegantBurgundy")
D.bme=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hBX=w([D.bme,A.ag2,A.ip],x.O)
D.a7m=new C.jA("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dSj,4294965238,4283043359,4291404327,D.ka)
D.dSc=new C.l8(19,"goldFiligree")
D.MY=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hBL=w([D.MY,A.aB,A.jA],x.O)
D.a7k=new C.jA("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dSc,4294966259,4279378237,4292128567,D.ka)
D.dSd=new C.l8(20,"goldLaurel")
D.btH=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hBY=w([A.M4,A.ip,D.btH],x.O)
D.a7l=new C.jA("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dSd,4294966776,4282000405,4291404327,D.ka)
D.dSe=new C.l8(21,"goldCrest")
D.afU=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.btO=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hBN=w([D.afU,A.aB,D.btO],x.O)
D.a7p=new C.jA("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dSe,4294965484,4283053072,4292128567,D.ka)
D.dSh=new C.l8(24,"goldStar")
D.bv9=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hBR=w([D.bv9,A.aB,D.jy],x.O)
D.a7n=new C.jA("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dSh,4294966518,4279378237,4292128567,D.ka)
D.I1=w([D.a7q,D.a7o,D.a7h,D.a7i,D.a7j,D.a7m,D.a7k,D.a7l,D.a7p,D.a7n],x.h)
D.qW=new C.mP(0,"blank")
D.TB=new C.mP(1,"title")
D.n4=new C.mP(2,"titleContent")
D.ebS=new C.mP(3,"twoColumn")
D.DS=new C.mP(4,"section")
D.ebT=new C.mP(5,"comparison")
D.J7=new C.mP(6,"flashcard")
D.J8=new C.mP(7,"quiz")
D.J9=new C.mP(8,"worksheet")
D.at1=w([D.qW,D.TB,D.n4,D.ebS,D.DS,D.ebT,D.J7,D.J8,D.J9],B.as("O<mP>"))
D.aBP=w([Aq.Yq,A.dB],x.O)
D.kZ=w([A.c3,A.bN,A.i4,A.i2,D.BO],x.O)
D.dO2=new C.ja("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBP,D.kZ)
D.bu3=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bmc=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d5L=w([D.bu3,D.bmc],x.O)
D.dNU=new C.ja("confetti","Golden Confetti","Together we rise",D.d5L,D.kZ)
D.d2F=w([A.o1,A.Y0],x.O)
D.dNV=new C.ja("crown","Crown of Glory","Built for our community",D.d2F,D.kZ)
D.bik=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.blQ=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.da_=w([D.bik,D.blQ],x.O)
D.uY=w([A.bM,A.aQ,A.c,A.aO,A.an],x.O)
D.dNP=new C.ja("aurora","Aurora Gala","A brighter future, together",D.da_,D.uY)
D.bny=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dld=w([G.afu,D.bny],x.O)
D.dO5=new C.ja("champagne","Champagne Toast","Cheers to every member",D.dld,D.kZ)
D.dO6=new C.ja("diamonds","Diamond Rain","Every member is a jewel",A_.aCA,D.uY)
D.bfp=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.blf=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dqR=w([D.bfp,D.blf],x.O)
D.dNK=new C.ja("starburst","Golden Starburst","Thank you!",D.dqR,D.kZ)
D.c9i=w([A.fj,A.y9],x.O)
D.afE=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Rw=w([A.pc,A.io,A.w7,A.o2,D.afE],x.O)
D.dOd=new C.ja("balloons","Luxury Balloons","Let's celebrate",D.c9i,D.Rw)
D.d1S=w([A.Ye,A.w],x.O)
D.dO1=new C.ja("galaxy","Galaxy Spiral","The sky is not the limit",D.d1S,D.uY)
D.brT=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dhu=w([A.ko,D.brT],x.O)
D.dNX=new C.ja("redcarpet","Red Carpet","Tonight we shine",D.dhu,D.kZ)
D.bpo=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bni=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dmb=w([D.bpo,D.bni],x.O)
D.dNM=new C.ja("coins","Gold Coin Rain","Every contribution counts",D.dmb,D.kZ)
D.dtF=w([A.dw,A.i1],x.O)
D.dNS=new C.ja("lanterns","Sky Lanterns","Lighting the way together",D.dtF,D.kZ)
D.bjx=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d_G=w([A.yb,D.bjx],x.O)
D.dNO=new C.ja("hearts","Floating Hearts","Made with love",D.d_G,D.Rw)
D.bg3=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bh2=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dvd=w([D.bg3,D.bh2],x.O)
D.dOc=new C.ja("petals","Rose Petals","Thank you, from our hearts",D.dvd,D.Rw)
D.bsV=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.drc=w([A.le,D.bsV],x.O)
D.dNJ=new C.ja("butterflies","Golden Butterflies","New beginnings",D.drc,D.kZ)
D.boB=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d0K=w([D.boB,A.w],x.O)
D.dO4=new C.ja("neon","Neon Night","Let's go!",D.d0K,D.uY)
D.bkT=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dop=w([A.My,D.bkT],x.O)
D.dO7=new C.ja("disco","Disco Ball","Party time",D.dop,D.uY)
D.bpd=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dnU=w([A.hB,D.bpd],x.O)
D.dNN=new C.ja("sunrise","Golden Sunrise","A new day for our community",D.dnU,D.kZ)
D.dnv=w([A.rw,A.dB],x.O)
D.dO8=new C.ja("pearls","Ocean Pearls","Deep roots, bright future",D.dnv,D.uY)
D.bir=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dnJ=w([D.bir,A.dB],x.O)
D.dOb=new C.ja("snow","Winter Gala","Warm wishes to all",D.dnJ,D.uY)
D.bex=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bfP=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.du6=w([D.bex,D.bfP],x.O)
D.dO0=new C.ja("laurel","Laurel Victory","We did it together",D.du6,D.kZ)
D.ben=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.blM=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cZF=w([D.ben,D.blM],x.O)
D.dOa=new C.ja("ribbons","Silk Ribbons","Elegance in every step",D.cZF,D.kZ)
D.bmY=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cKF=w([G.BN,D.bmY],x.O)
D.dNY=new C.ja("kente","Kente Pride","Proud of our roots",D.cKF,D.kZ)
D.bq3=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bti=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dbL=w([D.bq3,D.bti],x.O)
D.dNT=new C.ja("trophy","Trophy Shine","Winners together",D.dbL,D.kZ)
D.dnQ=w([Ar.Mi,A.w],x.O)
D.dNL=new C.ja("shooting","Shooting Stars","Make a wish",D.dnQ,D.uY)
D.beH=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.ajw=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dup=w([D.beH,D.ajw],x.O)
D.dNZ=new C.ja("bokeh","Golden Bokeh","Shine bright",D.dup,D.kZ)
D.bf7=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dik=w([D.bf7,A.w],x.O)
D.dNR=new C.ja("orbits","Golden Orbits","Always moving forward",D.dik,D.kZ)
D.bsW=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.deF=w([A.agR,D.bsW],x.O)
D.dNW=new C.ja("flowers","Blooming Garden","Growing together",D.deF,D.Rw)
D.beT=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bfG=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dt6=w([D.beT,D.bfG],x.O)
D.dNQ=new C.ja("music","Music Party","Celebrate with us",D.dt6,D.uY)
D.bgH=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.btK=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d_U=w([D.bgH,D.btK],x.O)
D.dO9=new C.ja("mandala","Royal Mandala","Harmony and unity",D.d_U,D.kZ)
D.deL=w([G.BN,D.ajw],x.O)
D.dO3=new C.ja("sparklers","Golden Sparklers","Light up the night",D.deL,D.kZ)
D.dO_=new C.ja("city","City Lights","The whole city celebrates",D.aBP,D.kZ)
D.Ia=w([D.dO2,D.dNU,D.dNV,D.dNP,D.dO5,D.dO6,D.dNK,D.dOd,D.dO1,D.dNX,D.dNM,D.dNS,D.dNO,D.dOc,D.dNJ,D.dO4,D.dO7,D.dNN,D.dO8,D.dOb,D.dO0,D.dOa,D.dNY,D.dNT,D.dNL,D.dNZ,D.dNR,D.dNW,D.dNQ,D.dO9,D.dO3,D.dO_],B.as("O<ja>"))
D.eDM=new B.y("","No ring")
D.eUd=new B.y("platinum","Platinum")
D.eQg=new B.y("glow","Glow")
D.eHv=new B.y("double","Double line")
D.eGo=new B.y("framed","Gallery frame")
D.eDi=new B.y("rosegold","Rose gold")
D.eR5=new B.y("jewels","Jeweled")
D.eNG=new B.y("aurora","Aurora")
D.D8=w([D.eDM,A.Um,D.eUd,D.eQg,M.aQZ,D.eHv,A.aQX,D.eGo,D.eDi,D.eR5,D.eNG],x.L)
D.ctS=w([D.a7k,D.a7l,D.a7p,D.a7h,D.a7i,D.a7n],x.h)
D.bYK=new B.ae(G.ao9,16,null,null,null,null)
D.b9u=new B.vU(A.bk,D.bYK,null,x.U)
D.bNt=new B.a0(58027,"MaterialIcons",!1)
D.bSh=new B.ae(D.bNt,16,null,null,null,null)
D.b9s=new B.vU(A.K,D.bSh,null,x.U)
D.bNu=new B.a0(58030,"MaterialIcons",!1)
D.bWm=new B.ae(D.bNu,16,null,null,null,null)
D.b9v=new B.vU(A.dX,D.bWm,null,x.U)
D.cA8=w([D.b9u,D.b9s,D.b9v],B.as("O<vU<qi>>"))
D.cHU=w([A.BS,A.hA],x.O)
D.cHV=w([A.b9,A.bg,A.en],x.O)
D.Rk=w([A.bN,A.i2,A.i4,A.aB,A.o2],x.O)
D.cKK=w([A.c3,D.jy,D.Mb],x.O)
D.cLh=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eB5=new B.y(4278913286,4280030216)
D.eBn=new B.y(4279373061,4278518787)
D.eBu=new B.y(4279898630,4278847235)
D.db7=w([D.eB5,D.eBn,D.eBu],x.n)
D.d6w=w(["\u265b","\u269c","\u2726"],x.s)
D.dSa=new C.y6("Royal Onyx & Gold",D.db7,4292128567,4294370209,4294965479,3874020544,D.d6w)
D.eAT=new B.y(4278326799,4278598442)
D.eAV=new B.y(4278395929,4278258953)
D.eB1=new B.y(4278599728,4278327826)
D.dtw=w([D.eAT,D.eAV,D.eB1],x.n)
D.d0C=w(["\u269c","\u2756","\u2727"],x.s)
D.dS7=new C.y6("Imperial Emerald",D.dtw,4293050997,4294699968,4294180856,3872254170,D.d0C)
D.eAW=new B.y(4278455076,4278918747)
D.eB0=new B.y(4278587439,4278322714)
D.eBe=new B.y(4279051376,4278455076)
D.drz=w([D.eAW,D.eB0,D.eBe],x.n)
D.dj4=w(["\u2654","\u2726","\u2748"],x.s)
D.dS1=new C.y6("Sapphire Crown",D.drz,4291417834,4294967295,4294310143,3871986666,D.dj4)
D.eBs=new B.y(4279894534,4283041554)
D.eBE=new B.y(4281008906,4279042307)
D.eBM=new B.y(4284221976,4279894534)
D.dxz=w([D.eBs,D.eBE,D.eBM],x.n)
D.d20=w(["\u265b","\u2766","\u2726"],x.s)
D.dS3=new C.y6("Ruby Throne",D.dxz,4293378685,4294963145,4294964466,3874213833,D.d20)
D.eBm=new B.y(4279371039,4281995100)
D.eBw=new B.y(4280092723,4278714896)
D.eBJ=new B.y(4283045242,4279371039)
D.dtT=w([D.eBm,D.eBw,D.eBJ],x.n)
D.drW=w(["\u2655","\u2756","\u2727"],x.s)
D.dS8=new C.y6("Amethyst Palace",D.dtT,4293314984,4294963421,4294702591,3873229802,D.drW)
D.eAY=new B.y(4278519045,4280032287)
D.eBf=new B.y(4279111184,4278321666)
D.eBB=new B.y(4280492839,4278716426)
D.dqk=w([D.eAY,D.eBf,D.eBB],x.n)
D.dhg=w(["\u2726","\u25c6","\u2742"],x.s)
D.dS5=new C.y6("Obsidian & Platinum",D.dqk,4293256418,4294967295,4294638330,3872378836,D.dhg)
D.eBt=new B.y(4279896588,4282194463)
D.eBC=new B.y(4280553487,4279043334)
D.eBK=new B.y(4283048488,4279896588)
D.dgJ=w([D.eBt,D.eBC,D.eBK],x.n)
D.dvG=w(["\u2766","\u273f","\u2727"],x.s)
D.dS2=new C.y6("Rose Gold Velvet",D.dgJ,4293440672,4294960345,4294964979,3874214602,D.dvG)
D.eAZ=new B.y(4278520340,4279180595)
D.eB3=new B.y(4278718495,4278322443)
D.eBq=new B.y(4279510591,4278520340)
D.cRz=w([D.eAZ,D.eB3,D.eBq],x.n)
D.dhZ=w(["\u269c","\u2736","\u2756"],x.s)
D.dS6=new C.y6("Midnight Brass",D.cRz,4291405148,4293975208,4294439914,3872837564,D.dhZ)
D.eBZ=new B.y(4294703086,4293780428)
D.eBV=new B.y(4294307549,4293187253)
D.eC_=new B.y(4294966517,4293977807)
D.d4m=w([D.eBZ,D.eBV,D.eC_],x.n)
D.dio=w(["\u269c","\u265b","\u2726"],x.s)
D.dS9=new C.y6("Ivory Marble & Gold",D.d4m,4289760572,4286209048,4280951062,3863625518,D.dio)
D.eB9=new B.y(4278978566,4280555024)
D.eBp=new B.y(4279504137,4278518530)
D.eBG=new B.y(4281211923,4278978566)
D.d1R=w([D.eB9,D.eBp,D.eBG],x.n)
D.dsH=w(["\u2742","\u2726","\u265c"],x.s)
D.dS4=new C.y6("Onyx & Copper",D.d1R,4291856987,4294365880,4294964718,3873885630,D.dsH)
D.cLp=w([D.dSa,D.dS7,D.dS1,D.dS3,D.dS8,D.dS5,D.dS2,D.dS6,D.dS9,D.dS4],B.as("O<y6>"))
D.cNM=w([A.aB,D.BO,A.i2],x.O)
D.eJL=new B.y("Original",null)
D.eJV=new B.y("Wide 16:9",1.7777777777777777)
D.eMi=new B.y("Landscape 3:2",1.5)
D.eJb=new B.y("Photo 4:3",1.3333333333333333)
D.eY7=new B.y("Portrait 3:4",0.75)
D.az6=w([D.eJL,D.eJV,D.eMi,D.eJb,M.aQN,D.eY7],B.as("O<+(m,I?)>"))
D.az7=w([A.i2,A.c4,A.bc,A.br],x.O)
D.eMu=new B.y("","Original")
D.eOp=new B.y("circle","Circle")
D.eV1=new B.y("rounded","Rounded")
D.eW1=new B.y("triangle","Triangle")
D.eQx=new B.y("hexagon","Hexagon")
D.eOQ=new B.y("diamond","Diamond")
D.eNF=new B.y("arch","Arch")
D.Df=w([D.eMu,D.eOp,D.eV1,D.eW1,D.eQx,D.eOQ,D.eNF],x.L)
D.dN8=new C.ls("classic_blue","Classic Blue","Normal",A.bm,A.c,A.kQ,A.d5,A.aM)
D.dNo=new C.ls("campus_green","Campus Green","Normal",A.b1,A.np,A.u3,A.h7,A.ed)
D.dNf=new C.ls("warm_sand","Warm Sand","Normal",A.e1,A.i4,A.bN,A.iq,A.o9)
D.dNm=new C.ls("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aO,A.O,A.aM)
D.dN7=new C.ls("coral_fresh","Coral Fresh","Normal",A.ch,A.i3,A.q3,A.kp,A.tW)
D.dNn=new C.ls("lavender_calm","Lavender Calm","Normal",A.b7,A.q6,A.y4,A.of,A.jQ)
D.dN9=new C.ls("ocean_breeze","Ocean Breeze","Normal",A.fn,A.rE,A.tS,A.tY,A.oa)
D.aiH=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dNk=new C.ls("berry_pop","Berry Pop","Normal",A.fc,D.aiH,A.kM,G.ZI,A.BT)
D.dNa=new C.ls("midnight_pro","Midnight Pro","Professional",A.aE,A.O,A.dw,A.kM,A.cu)
D.dNj=new C.ls("executive_navy","Executive Navy","Professional",A.d9,A.ahT,A.d5,A.lc,A.bM)
D.dNh=new C.ls("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bp,A.O,A.aQ,A.cu)
D.dNb=new C.ls("corporate_steel","Corporate Steel","Professional",A.oc,A.O,A.mN,A.fE,A.bM)
D.dNe=new C.ls("gold_luxe","Gold Luxe","Luxury",A.m2,A.dS,A.pa,A.m3,A.bN)
D.bpi=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dNi=new C.ls("rose_gold_elite","Rose Gold Elite","Luxury",A.hA,D.bpi,A.Zq,A.io,A.o2)
D.dNl=new C.ls("platinum_night","Platinum Night","Luxury",A.cu,A.dB,A.bp,A.aQ,A.aO)
D.dNp=new C.ls("emerald_prestige","Emerald Prestige","Luxury",A.aY,A.qa,A.f0,A.qj,A.jR)
D.dN6=new C.ls("royal_purple","Royal Purple","Luxury",A.nn,A.Yw,A.jQ,A.kM,A.M3)
D.dNg=new C.ls("neon_pitch","Neon Pitch","Bold",A.bc,A.dB,A.O,A.b0,A.aO)
D.dNd=new C.ls("crimson_impact","Crimson Impact","Bold",A.bD,A.ko,A.et,A.rF,A.f_)
D.dNc=new C.ls("sunset_gallery","Sunset Gallery","Bold",A.fw,A.tW,A.kp,A.q3,A.mM)
D.Ij=w([D.dN8,D.dNo,D.dNf,D.dNm,D.dN7,D.dNn,D.dN9,D.dNk,D.dNa,D.dNj,D.dNh,D.dNb,D.dNe,D.dNi,D.dNl,D.dNp,D.dN6,D.dNg,D.dNd,D.dNc],B.as("O<ls>"))
D.cZp=w([A.c3,D.jy],x.O)
D.dh0=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eNq=new B.y("Faces & people",D.dh0)
D.cNQ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ezI=new B.y("Ideas & work",D.cNQ)
D.d71=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eQC=new B.y("Nature",D.d71)
D.dh9=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eJJ=new B.y("Places & things",D.dh9)
D.daF=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eNK=new B.y("Symbols",D.daF)
D.cZv=w([D.eNq,D.ezI,D.eQC,D.eJJ,D.eNK],B.as("O<+(m,ai<m>)>"))
D.beY=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cZQ=w([A.c3,D.agW,D.beY],x.O)
D.b8O=new B.ac(0,A.G,A.M0,A.aL2,40)
D.b8u=new B.ac(0,A.G,A.o7,A.er,8)
D.d_2=w([D.b8O,D.b8u],x.V)
D.d_A=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.azv=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4Q=w([A.i2,A.en,A.bD,A.au,A.ch],x.O)
D.d0w=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aha=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d0H=w([A.Zg,D.aha,A.Zg],x.O)
D.d0M=w([A.ip,D.jy,D.Mb],x.O)
D.eJv=new B.y(A.bk,D.a2p)
D.eKY=new B.y(A.K,D.a2o)
D.eEy=new B.y(A.dX,D.a2q)
D.d1M=w([D.eJv,D.eKY,D.eEy],B.as("O<+(qi,a0)>"))
D.cW=new C.Jx(0,"text")
D.lR=new C.Jx(1,"image")
D.fg=new C.Jx(2,"shape")
D.TA=new C.Jx(3,"pdf")
D.lr=new C.Jx(4,"signature")
D.a7L=new C.Jx(5,"bio")
D.d2L=w([D.cW,D.lR,D.fg,D.TA,D.lr,D.a7L],B.as("O<Jx>"))
D.d2M=w([A.bs,A.cF],B.as("O<Iq>"))
D.d3q=w(["School","Documents","Sign & present"],x.s)
D.b8T=new B.ac(0,A.G,A.ajl,A.vi,28)
D.d3P=w([D.b8T],x.V)
D.d47=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.RF=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.azW=w([A.i2,A.Gi,A.aO,A.c,A.pc,A.aB],x.O)
D.eXw=new B.y(0.1,0.08)
D.eQA=new B.y(0.3,0.05)
D.eE0=new B.y(0.55,0.1)
D.eIr=new B.y(0.8,0.06)
D.eLJ=new B.y(0.92,0.16)
D.eLc=new B.y(0.2,0.2)
D.eIW=new B.y(0.7,0.22)
D.ePc=new B.y(0.05,0.4)
D.eMa=new B.y(0.95,0.45)
D.eEO=new B.y(0.12,0.7)
D.eH9=new B.y(0.88,0.75)
D.eHh=new B.y(0.4,0.9)
D.eCg=new B.y(0.65,0.93)
D.eI4=new B.y(0.25,0.97)
D.eJs=new B.y(0.85,0.9)
D.eFI=new B.y(0.5,0.04)
D.d5G=w([D.eXw,D.eQA,D.eE0,D.eIr,D.eLJ,D.eLc,D.eIW,D.ePc,D.eMa,D.eEO,D.eH9,D.eHh,D.eCg,D.eI4,D.eJs,D.eFI],x.G)
D.d5P=w([A.c,A.hA,A.aJ,A.aY],x.O)
D.edu=new C.jW("office_blue","Office Blue",A.bm,A.d5,A.aM,A.c,A.kQ)
D.edF=new C.jW("campus_green","Campus Green",A.b1,A.h7,A.ed,A.np,A.u3)
D.edv=new C.jW("sunset","Sunset",A.fw,A.kp,A.o9,A.i3,A.q3)
D.edw=new C.jW("midnight","Midnight",A.aE,A.kM,A.cu,A.O,A.dw)
D.edH=new C.jW("classic","Classic",A.d2,A.dS,A.m4,A.i4,A.h6)
D.edE=new C.jW("rose_gold","Rose Gold",A.hA,A.yc,A.yb,A.w7,A.BS)
D.edp=new C.jW("ocean_teal","Ocean Teal",A.fn,A.tY,A.oa,A.rE,A.tS)
D.edo=new C.jW("slate_pro","Slate Pro",A.bv,A.O,A.aM,A.aQ,A.aO)
D.edn=new C.jW("neon_night","Neon Night",A.bc,A.b0,A.aO,A.dB,A.O)
D.edz=new C.jW("lavender","Lavender",A.b7,A.of,A.jQ,A.q6,A.y4)
D.edB=new C.jW("coral","Coral",A.ch,A.kp,A.tW,A.i3,A.mM)
D.edq=new C.jW("forest","Forest",A.hl,A.e0,A.cs,A.m5,A.ew)
D.edr=new C.jW("berry","Berry",A.fc,G.ZI,A.BT,D.aiH,A.kM)
D.edy=new C.jW("sand","Sand",A.e1,A.iq,A.o9,A.i4,A.bN)
D.edD=new C.jW("ice","Ice",A.oc,A.FQ,A.aM,A.nk,A.fE)
D.edt=new C.jW("charcoal","Charcoal",A.an,A.aQ,A.cu,A.bp,A.O)
D.edm=new C.jW("mint","Mint",A.aY,A.fP,A.h7,A.m5,A.qj)
D.edC=new C.jW("crimson","Crimson",A.bD,A.mL,A.ko,A.Gg,A.rF)
D.bhV=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.edx=new C.jW("gold","Gold",A.m2,A.xX,A.pa,D.bhV,A.m3)
D.edA=new C.jW("aqua","Aqua",A.bT,A.G2,A.p7,A.q7,A.pd)
D.eds=new C.jW("plum","Plum",A.nn,A.y9,A.BT,A.FR,A.rA)
D.edG=new C.jW("steel","Steel",A.d9,A.d5,A.bp,A.kQ,A.lc)
D.a54=w([D.edu,D.edF,D.edv,D.edw,D.edH,D.edE,D.edp,D.edo,D.edn,D.edz,D.edB,D.edq,D.edr,D.edy,D.edD,D.edt,D.edm,D.edC,D.edx,D.edA,D.eds,D.edG],B.as("O<jW>"))
D.d6b=w([A.c3,A.jA],x.O)
D.TC=new C.hF(10,"rotate3d")
D.Jb=new C.hF(8,"flip")
D.aKv=new C.hF(19,"spiral")
D.qX=new C.hF(16,"bounce")
D.aKy=new C.hF(9,"flipVertical")
D.d6c=w([D.TC,D.Jb,D.aKv,D.qX,D.aKy],x.i)
D.ej=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d6z=w([0.62,1],x.x)
D.d7b=w([0,0.32,0.68,1],x.x)
D.n5=new C.hF(6,"zoom")
D.vc=new C.hF(4,"slideUp")
D.vb=new C.hF(2,"slideLeft")
D.d7l=w([D.n5,D.Jb,D.vc,D.TC,D.vb],x.i)
D.d7R=w([A.c4,A.hA,A.io,A.i2,A.c],x.O)
D.b8J=new B.ac(0,A.G,D.ahq,A.vi,30)
D.d8D=w([D.b8J],x.V)
D.ep_=new B.p(0,-2.5)
D.eoQ=new B.p(-2.5,0)
D.en1=new B.p(2.5,0)
D.d8G=w([A.TQ,A.a8c,A.aLG,A.a8b,D.ep_,O.aLC,D.eoQ,D.en1],x.dN)
D.Ip=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d9c=w([23,114,69,56,80,144],x.t)
D.d9G=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.da8=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dbQ=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dbV=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bj=new C.v7(0,"rectangle")
D.eW=new C.v7(1,"circle")
D.ls=new C.v7(6,"hexagon")
D.dca=w([D.bj,D.eW,D.ls],x.m)
D.oK=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aiR=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dcJ=w([D.aiR,A.e0],x.O)
D.eEh=new B.y("","Classic")
D.eCv=new B.y("caps","Bold caps")
D.ePf=new B.y("elegant","Elegant")
D.eVl=new B.y("shadow","Shadow")
D.eIP=new B.y("neon","Neon glow")
D.eT1=new B.y("marker","Highlighter")
D.eVz=new B.y("stamp","Stamp")
D.eHH=new B.y("threed","3D")
D.ePM=new B.y("fire","Fire")
D.eQM=new B.y("ice","Ice")
D.eOo=new B.y("chalk","Chalk")
D.eOt=new B.y("comic","Comic")
D.eWR=new B.y("softglow","Soft glow")
D.eRP=new B.y("lowercase","Lowercase")
D.eOY=new B.y("double","Echo")
D.eX0=new B.y("whisper","Whisper")
D.aAT=w([D.eEh,D.eCv,D.ePf,D.eVl,D.eIP,M.aQY,D.eT1,D.eVz,M.aR_,D.eHH,M.aQS,D.ePM,D.eQM,D.eOo,D.eOt,A.Um,Au.aR0,D.eWR,D.eRP,D.eOY,D.eX0],x.L)
D.de1=w([3,5,7,10,12,15],x.t)
D.dfz=w([A.c4,A.bN,A.c,A.eK,A.cJ],x.O)
D.dEC=new C.tJ(10,"cardWorld")
D.DL=new C.C3(3,"rounded")
D.dVa=new C.lv("world","NGMY World",D.dEC,D.DL,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dED=new C.tJ(11,"cardSplit")
D.dV6=new C.lv("business","Business Wire",D.dED,D.DL,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dEE=new C.tJ(12,"cardBreaking")
D.dVj=new C.lv("breaking","Breaking Red",D.dEE,D.DL,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dEF=new C.tJ(13,"cardFeature")
D.dVc=new C.lv("feature","Tech Feature",D.dEF,D.DL,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aJ8=new C.tJ(6,"circle")
D.aJ2=new C.C3(4,"circle")
D.dVg=new C.lv("parchment","Royal Circle",D.aJ8,D.aJ2,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dV5=new C.lv("ocean","Blue Ocean",D.aJ8,D.aJ2,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dEI=new C.tJ(7,"rail")
D.aJ1=new C.C3(1,"double")
D.dV7=new C.lv("forest","Green Leaf",D.dEI,D.aJ1,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aJ5=new C.tJ(1,"sideBySide")
D.dVl=new C.lv("herald","NGMY Herald",D.aJ5,D.DL,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aJ4=new C.tJ(0,"classic")
D.a6X=new C.C3(9,"shadow")
D.dVk=new C.lv("daily","The Daily",D.aJ4,D.a6X,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dEG=new C.tJ(2,"splash")
D.aJ3=new C.C3(6,"cutCorner")
D.dV4=new C.lv("tabloid","Big Tabloid",D.dEG,D.aJ3,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aJ9=new C.tJ(9,"minimal")
D.dVf=new C.lv("modern","Modern Digest",D.aJ9,D.DL,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aJ6=new C.tJ(3,"magazine")
D.aJ0=new C.C3(0,"plain")
D.dVb=new C.lv("midnight","Midnight Edition",D.aJ6,D.aJ0,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dEJ=new C.tJ(8,"banner")
D.dVd=new C.lv("metro","Metro Wire",D.dEJ,D.aJ3,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dEB=new C.C3(8,"arch")
D.dVe=new C.lv("sunrise","Sunrise Post",D.aJ6,D.dEB,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aJ7=new C.tJ(5,"scrapbook")
D.dEA=new C.C3(5,"tape")
D.dV9=new C.lv("neon","Neon Beat",D.aJ7,D.dEA,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dEH=new C.tJ(4,"wrap")
D.dVm=new C.lv("gold","Golden Press",D.dEH,D.a6X,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dVn=new C.lv("minimal","Paper White",D.aJ9,D.a6X,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dV8=new C.lv("gazette","Fresh Gazette",D.aJ4,D.aJ1,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dVi=new C.lv("times","Classic Times",D.aJ5,D.aJ0,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.T7=new C.C3(2,"polaroid")
D.dVh=new C.lv("scrapbook","Memory Scrapbook",D.aJ7,D.T7,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5l=w([D.dVa,D.dV6,D.dVj,D.dVc,D.dVg,D.dV5,D.dV7,D.dVl,D.dVk,D.dV4,D.dVf,D.dVb,D.dVd,D.dVe,D.dV9,D.dVm,D.dVn,D.dV8,D.dVi,D.dVh],B.as("O<lv>"))
D.dfL=w([0.45,1],x.x)
D.It=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dga=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hx4=new C.oQ("Original",0,1,1,0,0,0)
D.hx8=new C.oQ("Black & white",0,1.1,0,0,0,0)
D.hwW=new C.oQ("Noir",-0.05,1.55,0,0,0,0)
D.hx_=new C.oQ("Sepia",0,1,0.25,0.9,0,0)
D.hwZ=new C.oQ("Vivid",0,1.15,1.6,0,0,0)
D.hwS=new C.oQ("Pop",0,1.3,1.9,0,0,0)
D.hwU=new C.oQ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hx5=new C.oQ("Matte",0,0.9,0.85,0,0,0.55)
D.hx0=new C.oQ("Cool",0,1.05,1,-0.8,0,0)
D.hx7=new C.oQ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hwT=new C.oQ("Golden hour",0.04,1,1.25,1,0,0)
D.hwY=new C.oQ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hx6=new C.oQ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hwX=new C.oQ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hx2=new C.oQ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hx1=new C.oQ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hx3=new C.oQ("Rose",0,1,1.1,0.3,0.4,0)
D.hwV=new C.oQ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dgb=w([D.hx4,D.hx8,D.hwW,D.hx_,D.hwZ,D.hwS,D.hwU,D.hx5,D.hx0,D.hx7,D.hwT,D.hwY,D.hx6,D.hwX,D.hx2,D.hx1,D.hx3,D.hwV],B.as("O<oQ>"))
D.bei=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dgd=w([D.aiR,A.e0,D.bei],x.O)
D.ezB=new B.y(0.12,0.3)
D.eQX=new B.y(0.26,0.75)
D.ePb=new B.y(0.8,0.22)
D.eVL=new B.y(0.9,0.7)
D.eRO=new B.y(0.5,0.15)
D.eTW=new B.y(0.65,0.85)
D.eGe=new B.y(0.08,0.85)
D.dgs=w([D.ezB,D.eQX,D.ePb,D.eVL,D.eRO,D.eTW,D.eGe],x.G)
D.aB5=w([A.bc,A.c4,A.br,A.b9],x.O)
D.dhk=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dhx=w([A.c,A.fE,A.dx,A.vX],x.O)
D.bia=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.diA=w([D.bia,D.aha],x.O)
D.diC=w([A.u0,A.aB],x.O)
D.diS=w([0,0.25,0.75,1],x.x)
D.diU=w([A.y0,A.pc],x.O)
D.aK5=new C.l8(10,"kenteSunset")
D.hBG=w([D.ahF,A.kk,A.aB],x.O)
D.dQn=new C.jA("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aK5,4294964964,4282000405,4279983648,D.ka)
D.aK6=new C.l8(11,"indigoMudcloth")
D.bfv=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hBU=w([D.bfv,A.ah7,A.ip],x.O)
D.dQv=new C.jA("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aK6,4294439140,4279903102,4279903102,D.ka)
D.aK7=new C.l8(12,"adinkraRoyal")
D.buv=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hBV=w([D.afU,D.buv,A.aB],x.O)
D.dQx=new C.jA("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aK7,4294965484,4285218591,4287322667,D.ka)
D.aK8=new C.l8(13,"nileLotus")
D.bqp=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bmy=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hC_=w([D.bqp,D.bmy,A.ip],x.O)
D.dQw=new C.jA("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK8,4294244340,4279196764,4279196764,D.ka)
D.aK9=new C.l8(14,"shweshweIvory")
D.bkp=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bj0=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bg2=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hBH=w([D.bkp,D.bj0,D.bg2],x.O)
D.dQs=new C.jA("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK9,4294505710,4279970378,4291058750,D.ka)
D.td=new C.l8(15,"certIvoryNavy")
D.hBF=w([D.MY,D.jy,A.ip],x.O)
D.aJG=new C.y4(1,"ringsNdoa")
D.dQp=new C.jA("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.td,4294966259,4279378237,4291404327,D.aJG)
D.a7s=new C.y4(2,"coupleCards")
D.dQk=new C.jA("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.td,4294966259,4279378237,4291404327,D.a7s)
D.DO=new C.l8(18,"certIvoryNavyBar")
D.afT=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hBT=w([D.afT,D.jy,A.ip],x.O)
D.aJH=new C.y4(3,"kuhoweshaForm")
D.dQi=new C.jA("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DO,4294966519,4279378237,4291404327,D.aJH)
D.aho=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hCc=w([D.MY,D.aho,A.ip],x.O)
D.a7t=new C.y4(4,"mahariPande")
D.dQl=new C.jA("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.td,4294966259,4279904068,4291404327,D.a7t)
D.aKa=new C.l8(16,"certIvoryGreen")
D.bjI=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hBJ=w([A.M4,D.bjI,A.ip],x.O)
D.aJI=new C.y4(5,"familiaMti")
D.dQr=new C.jA("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aKa,4294966776,4280241466,4291404327,D.aJI)
D.a7u=new C.y4(6,"ndoaSafi")
D.dQj=new C.jA("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DO,4294966519,4279378237,4291404327,D.a7u)
D.boA=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hBM=w([D.MY,A.ip,D.boA],x.O)
D.a7v=new C.y4(7,"peteWide")
D.dQo=new C.jA("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.td,4294966259,4282001936,4291404327,D.a7v)
D.dQy=new C.y4(8,"muhuriCrest")
D.dQh=new C.jA("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.td,4294966259,4279378237,4291404327,D.dQy)
D.hBW=w([D.afT,D.aho,A.ip],x.O)
D.dQz=new C.y4(9,"fomuWazi")
D.dQu=new C.jA("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DO,4294966519,4279904068,4291404327,D.dQz)
D.aKb=new C.l8(17,"certIvoryRose")
D.bku=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hBZ=w([D.bku,D.ail,A.ip],x.O)
D.a7r=new C.y4(10,"upendoOrnate")
D.dQq=new C.jA("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aKb,4294965493,4286200650,4291404327,D.a7r)
D.djl=w([D.dQn,D.dQv,D.dQx,D.dQw,D.dQs,D.dQp,D.dQk,D.dQi,D.dQl,D.dQr,D.dQj,D.dQo,D.dQh,D.dQu,D.dQq],x.h)
D.ek=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jc=new C.wq(0,"emojis")
D.DU=new C.wq(1,"pictures")
D.Jd=new C.wq(2,"icons3d")
D.a7N=new C.wq(3,"animations")
D.TE=new C.wq(4,"videoMotion")
D.DV=new C.wq(5,"luxe")
D.a5s=w([D.Jc,D.DU,D.Jd,D.a7N,D.TE,D.DV],B.as("O<wq>"))
D.eUz=new B.y(A.e9,"Looks")
D.eIk=new B.y(A.D0,"Light")
D.eIh=new B.y(A.mh,"Colour")
D.eGf=new B.y(A.wv,"Effects")
D.apa=new B.a0(63112,"MaterialIcons",!1)
D.eCL=new B.y(D.apa,"Crop")
D.djT=w([D.eUz,D.eIk,D.eIh,D.eGf,D.eCL],x.f2)
D.dkA=w([],x.D)
D.hC9=w([],x.L)
D.eGt=new B.y("Flashcard",D.J7)
D.eKn=new B.y("Quiz",D.J8)
D.eMp=new B.y("Worksheet",D.J9)
D.eJn=new B.y("Notes",D.n4)
D.eKW=new B.y("Section",D.DS)
D.dlj=w([D.eGt,D.eKn,D.eMp,D.eJn,D.eKW],B.as("O<+(m,mP)>"))
D.dSk=new C.l8(6,"beadedPearl")
D.bnm=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hCd=w([H.Zp,D.bnm,A.ip],x.O)
D.aJE=new C.jA("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dSk,4294966774,4286209070,4291404327,D.ka)
D.dSl=new C.l8(7,"artDeco")
D.brN=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.buQ=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hCb=w([D.brN,D.buQ,A.c3],x.O)
D.aJF=new C.jA("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dSl,4294440434,4280228630,4290283019,D.ka)
D.dSm=new C.l8(8,"rosetteCorners")
D.btX=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bif=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bng=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hBP=w([D.btX,D.bif,D.bng],x.O)
D.aJD=new C.jA("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dSm,4294702831,4285218602,4291394365,D.ka)
D.dSn=new C.l8(9,"modernLedger")
D.hBO=w([A.c,D.jy,D.jy],x.O)
D.aJC=new C.jA("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dSn,4294967295,4279378237,4279378237,D.ka)
D.dln=w([D.aJE,D.aJF,D.aJD,D.aJC],x.h)
D.dlx=w([A.io,A.pc],x.O)
D.cq=new C.hF(0,"none")
D.dk=new C.hF(1,"fade")
D.Ja=new C.hF(3,"slideRight")
D.aKx=new C.hF(5,"slideDown")
D.ebZ=new C.hF(7,"zoomOut")
D.a7M=new C.hF(11,"cube")
D.ebU=new C.hF(12,"blur")
D.aKu=new C.hF(13,"dissolve")
D.ebV=new C.hF(14,"wipeLeft")
D.ebW=new C.hF(15,"wipeRight")
D.TD=new C.hF(17,"push")
D.ebX=new C.hF(18,"flash")
D.aKw=new C.hF(20,"swing")
D.ebY=new C.hF(21,"curtain")
D.Se=w([D.cq,D.dk,D.vb,D.Ja,D.vc,D.aKx,D.n5,D.ebZ,D.Jb,D.aKy,D.TC,D.a7M,D.ebU,D.aKu,D.ebV,D.ebW,D.qX,D.TD,D.ebX,D.aKv,D.aKw,D.ebY],x.i)
D.Sf=w([D.a7q,D.a7o,D.a7h,D.a7i,D.a7j,D.a7m,D.a7k,D.a7l,D.a7p,D.a7n,D.aJE,D.aJF,D.aJD,D.aJC],x.h)
D.dm_=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dm3=w([A.u4,A.i2,A.c3],x.O)
D.eHB=new B.y(A.uG,"Design")
D.eWa=new B.y(D.apr,"Word sizes")
D.eRx=new B.y(A.CX,"Text")
D.bQO=new B.a0(983182,"MaterialIcons",!1)
D.eRC=new B.y(D.bQO,"Photo")
D.eCj=new B.y(A.ll,"Logo")
D.eXu=new B.y(A.HP,"News")
D.dm9=w([D.eHB,D.eWa,D.eRx,D.eRC,D.eCj,D.eXu],x.f2)
D.dma=w(["golddust","sparkle","sheen"],x.s)
D.edl=new C.ew("upload_pdf",K.Ps,"Upload PDF")
D.ecv=new C.ew("sign_paper",A.HM,"Sign Paper")
D.bQ3=new B.a0(63438,"MaterialIcons",!1)
D.edh=new C.ew("hd_photo",D.bQ3,"HD Photo")
D.ecn=new C.ew("sharpen",E.a27,"Sharpen")
D.ecx=new C.ew("print",K.Ps,"Download PDF")
D.ecZ=new C.ew("rotate",D.apa,"Rotate")
D.ecG=new C.ew("text_box",A.CX,"Text Box")
D.ecI=new C.ew("picture",A.uK,"Picture")
D.ecE=new C.ew("title",A.wJ,"Title")
D.ecA=new C.ew("subtitle",U.aq1,"Subtitle")
D.ed7=new C.ew("bullets",I.a2r,"Bullet List")
D.ecB=new C.ew("numbered",A.Pe,"Numbered")
D.eda=new C.ew("quote",A4.CK,"Quote")
D.ecN=new C.ew("citation",A.ou,"Citation")
D.edd=new C.ew("date_stamp",Aj.a2c,"Date Stamp")
D.ed0=new C.ew("page_number",A.zj,"Page #")
D.ed4=new C.ew("header_bar",A.zl,"Header")
D.ecH=new C.ew("footer_bar",Av.a3_,"Footer")
D.ecw=new C.ew("divider",A.rW,"Divider")
D.ecs=new C.ew("highlight",A.a2u,"Highlight")
D.ed6=new C.ew("redact",A.uT,"Redact")
D.ecU=new C.ew("callout",A.CB,"Callout")
D.edf=new C.ew("checkboxes",I.aot,"Checklist")
D.ecR=new C.ew("table",A.a2Y,"Table")
D.ecL=new C.ew("memo",I.a2H,"Memo")
D.ecV=new C.ew("letter",A.HB,"Letter")
D.bPH=new B.a0(63259,"MaterialIcons",!0)
D.ecm=new C.ew("agenda",D.bPH,"Agenda")
D.ecy=new C.ew("toc",AD.apE,"Contents")
D.bQ_=new B.a0(63406,"MaterialIcons",!1)
D.ecS=new C.ew("sig_line",D.bQ_,"Sign Line")
D.ecf=new C.ew("initial_line",A.j2,"Initials")
D.eci=new C.ew("approved",A.ll,"APPROVED")
D.ecX=new C.ew("draft",A.pv,"DRAFT")
D.ed2=new C.ew("confidential",A.jE,"Confidential")
D.ed5=new C.ew("sticky",A.Py,"Sticky Note")
D.ede=new C.ew("progress",A.apD,"Progress")
D.bRd=new B.a0(983507,"MaterialIcons",!1)
D.ect=new C.ew("stars",D.bRd,"Star Rating")
D.ecd=new C.ew("equation",A.apt,"Equation")
D.eco=new C.ew("timeline",A.a2Z,"Timeline")
D.ecM=new C.ew("two_col",A.a30,"Two Columns")
D.ecq=new C.ew("compare",Az.a2g,"Compare")
D.ecb=new C.ew("duplicate_el",A.fU,"Duplicate")
D.edj=new C.ew("delete_el",A.ef,"Delete")
D.ed9=new C.ew("bring_fwd",H.apn,"Bring Front")
D.ecg=new C.ew("send_back",H.apm,"Send Back")
D.ecW=new C.ew("align_left",D.a2p,"Align L")
D.ed1=new C.ew("align_center",D.a2o,"Align C")
D.edi=new C.ew("align_right",D.a2q,"Align R")
D.ecF=new C.ew("word_count",A3.a1N,"Word Count")
D.ecC=new C.ew("link_text",A.hK,"Link")
D.ed_=new C.ew("phone",A.j3,"Phone")
D.ecr=new C.ew("email",A.CG,"Email")
D.edk=new C.ew("qr_placeholder",A.jG,"QR Placeholder")
D.ecl=new C.ew("rectangle",A5.rU,"Rectangle")
D.ecQ=new C.ew("circle",A.pl,"Circle")
D.ech=new C.ew("arrow",A.jD,"Arrow")
D.ed8=new C.ew("line",A.rW,"Line")
D.ecu=new C.ew("triangle",A.a2e,"Triangle")
D.bPO=new B.a0(63318,"MaterialIcons",!1)
D.ecz=new C.ew("grayscale",D.bPO,"Grayscale")
D.ecJ=new C.ew("brighten",I.aoO,"Brighten")
D.ecO=new C.ew("flip_h",A.CJ,"Flip H")
D.bPV=new B.a0(63348,"MaterialIcons",!1)
D.edg=new C.ew("flip_v",D.bPV,"Flip V")
D.ed3=new C.ew("cover_page",A.qE,"Cover Page")
D.ece=new C.ew("invoice",A.ht,"Invoice")
D.ecp=new C.ew("resume",A.mW,"Resume")
D.ecD=new C.ew("minutes",A.po,"Minutes")
D.ecj=new C.ew("lab_report",A.Pu,"Lab Report")
D.eck=new C.ew("rubric",A.qH,"Rubric")
D.ecP=new C.ew("flashcard_tool",W.HJ,"Flashcard")
D.edb=new C.ew("quiz_tool",A.HG,"Quiz Block")
D.ecT=new C.ew("worksheet_tool",P.Hi,"Worksheet")
D.ecY=new C.ew("outline_share",A.Pw,"Share Outline")
D.edc=new C.ew("export_json",D.aoz,"Export JSON")
D.ecc=new C.ew("new_slide",D.a1M,"New Slide")
D.ecK=new C.ew("present",A.qK,"Present")
D.dmG=w([D.edl,D.ecv,D.edh,D.ecn,D.ecx,D.ecZ,D.ecG,D.ecI,D.ecE,D.ecA,D.ed7,D.ecB,D.eda,D.ecN,D.edd,D.ed0,D.ed4,D.ecH,D.ecw,D.ecs,D.ed6,D.ecU,D.edf,D.ecR,D.ecL,D.ecV,D.ecm,D.ecy,D.ecS,D.ecf,D.eci,D.ecX,D.ed2,D.ed5,D.ede,D.ect,D.ecd,D.eco,D.ecM,D.ecq,D.ecb,D.edj,D.ed9,D.ecg,D.ecW,D.ed1,D.edi,D.ecF,D.ecC,D.ed_,D.ecr,D.edk,D.ecl,D.ecQ,D.ech,D.ed8,D.ecu,D.ecz,D.ecJ,D.ecO,D.edg,D.ed3,D.ece,D.ecp,D.ecD,D.ecj,D.eck,D.ecP,D.edb,D.ecT,D.ecY,D.edc,D.ecc,D.ecK],B.as("O<ew>"))
D.dmQ=w([A.cu,A.an],x.O)
D.eBQ=new B.y(4286331629,4292552567)
D.eBD=new B.y(4280640491,4278630100)
D.eBY=new B.y(4294538006,4292943176)
D.eB_=new B.y(4278556265,4280640491)
D.dgE=w([D.eBQ,D.eBD,D.eBY,D.eB_],x.n)
D.cDW=w([4294626325,4280472558,4294210230],x.t)
D.ec6=new C.o4("colorful","Colorful",A.mh,D.dgE,4294967295,3875536895,D.cDW,D.n5)
D.eBr=new B.y(4279522093,4279657780)
D.eBH=new B.y(4281750292,4283268111)
D.eB2=new B.y(4278603323,4279203438)
D.eBI=new B.y(4282343954,4279599165)
D.cP3=w([D.eBr,D.eBH,D.eB2,D.eBI],x.n)
D.cDE=w([4288931381,4294829706,4287033260],x.t)
D.ec2=new C.o4("nature","Nature",A.HN,D.cP3,4294442727,3874290891,D.cDE,D.dk)
D.eBl=new B.y(4279369771,4283178389)
D.eBi=new B.y(4279179050,4286456526)
D.eBz=new B.y(4280163147,4290648157)
D.eAS=new B.y(4278322711,4285343961)
D.d6q=w([D.eBl,D.eBi,D.eBz,D.eAS],x.n)
D.cDS=w([4294210230,4280472558,4289170426],x.t)
D.ec0=new C.o4("vibe","Vibe",A.Pi,D.d6q,4294967295,3874869502,D.cDS,D.vb)
D.eBU=new B.y(4290007817,4292552567)
D.eBO=new B.y(4286328082,4294286859)
D.eBT=new B.y(4288485197,4294538006)
D.eBN=new B.y(4285343961,4293675161)
D.c9L=w([D.eBU,D.eBO,D.eBT,D.eBN],x.n)
D.cDX=w([4294829706,4294967295,4284999929],x.t)
D.ec1=new C.o4("celebration","Celebration",A.kt,D.c9L,4294967295,4009752557,D.cDX,D.qX)
D.eBg=new B.y(4279179050,4280171146)
D.eBk=new B.y(4279310375,4280232247)
D.eB8=new B.y(4278916151,4280172719)
D.eBh=new B.y(4279179050,4281549141)
D.cZJ=w([D.eBg,D.eBk,D.eB8,D.eBh],x.n)
D.cDz=w([4281908728,4294626325,4287931320],x.t)
D.ec5=new C.o4("professional","Professional",A.Cz,D.cZJ,4294967295,3872118241,D.cDz,D.TD)
D.eBc=new B.y(4278995566,4278413729)
D.eB4=new B.y(4278727492,4279137424)
D.eBA=new B.y(4280171146,4278751666)
D.eBd=new B.y(4278995566,4279590517)
D.cHM=w([D.eBc,D.eB4,D.eBA,D.eBd],x.n)
D.cDC=w([4286436348,4284410580,4294829706],x.t)
D.ec7=new C.o4("ocean","Ocean",I.a32,D.cHM,4294967295,3873501950,D.cDC,D.vc)
D.eBP=new B.y(4286328082,4294538006)
D.eBR=new B.y(4286781507,4294677052)
D.eBL=new B.y(4283178389,4294197086)
D.eBS=new B.y(4288295954,4294688548)
D.cVX=w([D.eBP,D.eBR,D.eBL,D.eBS],x.n)
D.cDY=w([4294829706,4294967295,4294747557],x.t)
D.ec8=new C.o4("sunset","Sunset",A.PB,D.cVX,4294967295,4009749973,D.cDY,D.dk)
D.eC1=new B.y(4294967295,4294047225)
D.eBX=new B.y(4294507260,4294967295)
D.eC0=new B.y(4294967295,4293060848)
D.eBW=new B.y(4294507260,4294047225)
D.d9M=w([D.eC1,D.eBX,D.eC0,D.eBW],x.n)
D.cDx=w([4280640491,4279179050,4287931320],x.t)
D.ec4=new C.o4("minimal","Minimal",A5.rU,D.d9M,4279179050,4282865001,D.cDx,D.dk)
D.eBb=new B.y(4278979081,4280886564)
D.eBv=new B.y(4280031511,4278979081)
D.eBj=new B.y(4279308561,4281148438)
D.eBa=new B.y(4278979081,4280031511)
D.doT=w([D.eBb,D.eBv,D.eBj,D.eBa],x.n)
D.cDL=w([4292128567,4294829706,4289241758],x.t)
D.ec9=new C.o4("elegant","Elegant",A.mi,D.doT,4294898631,3873957348,D.cDL,D.aKu)
D.eBx=new B.y(4280159034,4282058596)
D.eB7=new B.y(4278916151,4280163147)
D.eBF=new B.y(4281208933,4278916151)
D.eBo=new B.y(4279502891,4283178389)
D.dwk=w([D.eBx,D.eB7,D.eBF,D.eBo],x.n)
D.cDU=w([4294296657,4292128567,4291081725],x.t)
D.ec3=new C.o4("royal","Royal Gold",A.jp,D.dwk,4294965222,3874084351,D.cDU,D.n5)
D.eAX=new B.y(4278464302,4280163147)
D.eB6=new B.y(4278916151,4279455306)
D.eBy=new B.y(4280163147,4283040846)
D.eAU=new B.y(4278332450,4281413249)
D.dgg=w([D.eAX,D.eB6,D.eBy,D.eAU],x.n)
D.cDy=w([4281193663,4289170426,4294210230],x.t)
D.eca=new C.o4("aurora","Aurora Glow",A.e9,D.dgg,4293983738,3869766608,D.cDy,D.dk)
D.wT=w([D.ec6,D.ec2,D.ec0,D.ec1,D.ec5,D.ec7,D.ec8,D.ec4,D.ec9,D.ec3,D.eca],B.as("O<o4>"))
D.dmS=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.bnX=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dnq=w([A.rt,D.bnX,A.rt],x.O)
D.dnH=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dnL=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eRp=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eHb=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eLY=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eym=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eKz=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eIH=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eNf=new B.y("Surprise me","")
D.dok=w([D.eRp,D.eHb,D.eLY,D.eym,D.eKz,D.eIH,D.eNf],x.L)
D.bg4=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bsl=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dp8=w([A.c,D.bg4,D.bsl],x.O)
D.drp=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aK3=new C.l8(0,"heritageGold")
D.bmi=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hCe=w([D.bmi,Aa.ahA,A.aB],x.O)
D.dQt=new C.jA("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aK3,4294570461,4284234270,4292128567,D.ka)
D.aK4=new C.l8(1,"heritageCrimson")
D.bee=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bkr=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bs7=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hBS=w([D.bee,D.bkr,D.bs7],x.O)
D.dQm=new C.jA("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aK4,4294635750,4285213214,4292912216,D.ka)
D.dru=w([D.a7q,D.a7o,D.dQt,D.dQm,D.a7j,D.a7m],x.h)
D.dWq=new C.rR(1,"circuit")
D.dWT=new C.ml("neural","Neural Link","Robotic",D.dWq,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dWp=new C.rR(0,"grid")
D.dWQ=new C.ml("signal","Signal Grid","Robotic",D.dWp,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dWv=new C.rR(2,"hexes")
D.dWB=new C.ml("core","Core Protocol","Robotic",D.dWv,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKr=new C.rR(11,"diagonal")
D.dWM=new C.ml("steel","Steel Tech","Robotic",D.aKr,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKs=new C.rR(3,"rings")
D.dWA=new C.ml("vault","Vault Gold","Robotic",D.aKs,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dWt=new C.rR(13,"leaves")
D.dWD=new C.ml("forest","Forest Morning","Nature",D.dWt,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKt=new C.rR(5,"waves")
D.dWK=new C.ml("ocean","Ocean Calm","Nature",D.aKt,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dWw=new C.rR(6,"sunset")
D.dWP=new C.ml("sunset","Sunset Glow","Nature",D.dWw,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dWx=new C.rR(7,"mountains")
D.dWC=new C.ml("mountain","Mountain Air","Nature",D.dWx,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dWy=new C.rR(8,"stars")
D.dWJ=new C.ml("night","Night Sky","Nature",D.dWy,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7K=new C.rR(4,"orbs")
D.dWH=new C.ml("aurora","Aurora","Nature",D.a7K,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dWR=new C.ml("sand","Sand Dune","Nature",D.aKt,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dWz=new C.rR(9,"rays")
D.dWG=new C.ml("golden","Golden Hour","Warm",D.dWz,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dWE=new C.ml("royal","Royal Purple","Warm",D.aKr,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dWF=new C.ml("rose","Rose Petal","Warm",D.a7K,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dWs=new C.rR(12,"blocks")
D.dWI=new C.ml("electric","Electric Blue","Bold",D.dWs,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dWS=new C.ml("mint","Fresh Mint","Bold",D.a7K,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dWu=new C.rR(14,"minimal")
D.dWO=new C.ml("white","Clean White","Clean",D.dWu,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dWr=new C.rR(10,"frame")
D.dWL=new C.ml("midnight","Midnight Gold","Clean",D.dWr,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dWN=new C.ml("community","Community Green","Clean",D.aKs,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5X=w([D.dWT,D.dWQ,D.dWB,D.dWM,D.dWA,D.dWD,D.dWK,D.dWP,D.dWC,D.dWJ,D.dWH,D.dWR,D.dWG,D.dWE,D.dWF,D.dWI,D.dWS,D.dWO,D.dWL,D.dWN],B.as("O<ml>"))
D.drR=w([D.BO,A.u0,A.i2,A.c3],x.O)
D.ds8=w([D.aiz,D.jy],x.O)
D.dsi=w(["pdf","docx","txt","md"],x.s)
D.f0H=new B.b5(-3,150,34)
D.f0I=new B.b5(-3,214,62)
D.f0J=new B.b5(-3,288,62)
D.dtb=w([D.f0H,D.f0I,D.f0J],B.as("O<+(I,I,I)>"))
D.dtH=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dun=w(["Write","Design","Print & fold"],x.s)
D.kb=new C.v7(2,"triangle")
D.DT=new C.v7(3,"arrow")
D.fH=new C.v7(4,"line")
D.kc=new C.v7(5,"parallelogram")
D.duq=w([D.bj,D.eW,D.kb,D.DT,D.fH,D.kc,D.ls],x.m)
D.ezR=new B.y(240,96)
D.eCD=new B.y(560,46)
D.duw=w([D.ezR,D.eCD],x.G)
D.hCp=new C.y7(0,"classic")
D.dSq=new C.o0("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aK3,4294570461,4282000405,4284234270)
D.dSC=new C.o0("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aK4,4294635750,4281999378,4285213214)
D.dSr=new C.o0("elegant_navy","Umoja Mzuri",y.s,D.a7B,4294967035,4279378237,4290283019)
D.dSE=new C.o0("elegant_gold","Umoja wa Dhahabu",y.Q,D.aKc,4294966515,4281016592,4289102906)
D.dSG=new C.o0("kente_sunset","Kente ya Jua",y.H,D.aK5,4294964964,4282000405,4279983648)
D.dSo=new C.o0("indigo_mudcloth","Nguo ya Indigo",y.n,D.aK6,4294439140,4279903102,4279903102)
D.dSt=new C.o0("adinkra_royal","Muhuri wa Adinkra",y.z,D.aK7,4294965484,4285218591,4287322667)
D.dSy=new C.o0("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aK8,4294244340,4279196764,4279196764)
D.dSA=new C.o0("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aK9,4294505710,4279970378,4291058750)
D.hCq=new C.y7(1,"ringsNdoa")
D.dSs=new C.o0("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.td,4294966259,4279378237,4291404327)
D.hCs=new C.y7(2,"coupleCards")
D.dSD=new C.o0("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.td,4294966259,4279378237,4291404327)
D.hCt=new C.y7(3,"kuhoweshaForm")
D.dSz=new C.o0("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DO,4294966519,4279378237,4291404327)
D.hCu=new C.y7(4,"mahariPande")
D.dSp=new C.o0("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.td,4294966259,4279904068,4291404327)
D.hCv=new C.y7(5,"familiaMti")
D.dSF=new C.o0("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aKa,4294966776,4280241466,4291404327)
D.hCw=new C.y7(6,"ndoaSafi")
D.dSw=new C.o0("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DO,4294966519,4279378237,4291404327)
D.hCx=new C.y7(7,"peteWide")
D.dSv=new C.o0("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.td,4294966259,4282001936,4291404327)
D.hCy=new C.y7(8,"muhuriCrest")
D.dSu=new C.o0("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.td,4294966259,4279378237,4291404327)
D.hCz=new C.y7(9,"fomuWazi")
D.dSx=new C.o0("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DO,4294966519,4279904068,4291404327)
D.hCr=new C.y7(10,"upendoOrnate")
D.dSB=new C.o0("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aKb,4294965493,4286200650,4291404327)
D.Sv=w([D.dSq,D.dSC,D.dSr,D.dSE,D.dSG,D.dSo,D.dSt,D.dSy,D.dSA,D.dSs,D.dSD,D.dSz,D.dSp,D.dSF,D.dSw,D.dSv,D.dSu,D.dSx,D.dSB],B.as("O<o0>"))
D.DR=new C.asD(0,"landscape169")
D.oM=new C.asD(1,"portrait916")
D.dvh=w([D.DR,D.oM],B.as("O<asD>"))
D.aCS=w([A.i2,A.bN,A.cJ,A.io,A.c],x.O)
D.v4=w([A.c3,A.iq],x.O)
D.eyR=new B.y(1000,"M")
D.eE6=new B.y(900,"CM")
D.eCx=new B.y(500,"D")
D.eAN=new B.y(400,"CD")
D.eyS=new B.y(100,"C")
D.eE7=new B.y(90,"XC")
D.eCy=new B.y(50,"L")
D.eAO=new B.y(40,"XL")
D.eyY=new B.y(10,"X")
D.eEj=new B.y(9,"IX")
D.eCP=new B.y(5,"V")
D.eCi=new B.y(4,"IV")
D.ezu=new B.y(1,"I")
D.dw0=w([D.eyR,D.eE6,D.eCx,D.eAN,D.eyS,D.eE7,D.eCy,D.eAO,D.eyY,D.eEj,D.eCP,D.eCi,D.ezu],x.ek)
D.f1X=new B.cu(["open",A.j2,"Open & write","Keep writing this book"])
D.f2n=new B.cu(["print",A.uO,"Print as a book","Fold and staple it"])
D.dwb=w([D.f1X,D.f2n],B.as("O<+(m,a0,m,m)>"))
D.dwT=w([D.a7M,D.n5,D.Jb,D.TD,D.dk,D.TC],x.i)
D.eS9=new B.y(-1,"Small")
D.eyC=new B.y(0,"Normal")
D.ezr=new B.y(1,"Big")
D.eA7=new B.y(2,"Huge")
D.dxs=w([D.eS9,D.eyC,D.ezr,D.eA7],x.ek)
D.dxT=w([49,65,89,38,83,89],x.t)
D.dxZ=w([A.u0,A.i2,A.c3],x.O)
D.dys=w([D.dk,D.n5,D.vb,D.a7M,D.Jb,D.TD],x.i)
D.aIa=new B.cZ([0,D.Nj,8,D.ak8,12,D.ak9],B.as("cZ<F,a4J>"))
D.ei7={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.brY=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cZU=w([A.bN,D.brY],x.O)
D.dl2=w([A.b0,A.bm],x.O)
D.dfl=w([A.c4,A.aJ,A.bq],x.O)
D.dwc=w([A.cu,A.bv],x.O)
D.d7p=w([A.bc,A.fc],x.O)
D.dia=w([A.b7,A.fj],x.O)
D.bk4=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dhs=w([D.bk4,A.pc],x.O)
D.dbz=w([A.hi,A.y6],x.O)
D.d7c=w([A.bw,A.cg],x.O)
D.dB6=new B.bu(D.ei7,[D.cZU,O.asZ,D.dl2,D.dfl,D.dwc,D.d7p,D.dia,D.dhs,D.dbz,D.d7c],B.as("bu<m,ai<u>>"))
D.ehj={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6B=new B.bu(D.ehj,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bu<m,m>"))
D.a6I=new B.bu(A.hY,[],B.as("bu<F,+icon3d,picture(m?,m?)>"))
D.dFl=new F.NI(30,null)
D.dKA=new F.mL("Chapter 1","","","")
D.dv4=w([D.dKA],x.B)
D.dKE=new F.rH("My Book","","",D.dv4,E.aJu)
D.dKC=new F.uY("starry",null,null,null,null,"","","")
D.dKF=new F.rH("Dream Big","","",E.a5A,D.dKC)
D.dKD=new F.uY("story",null,null,null,null,"","","")
D.dKG=new F.rH("Little Lion","","",E.a5A,D.dKD)
D.dKB=new F.uY("vintage",null,null,null,null,"","","")
D.dKH=new F.rH("Our Story","","",E.a5A,D.dKB)
D.dNI=new C.Fd("","NGMY","","")
D.dV3=new C.A5("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ec_=new C.b37(null,null,null,null)
D.edI=new C.asI(null)
D.edT=new C.atb(0,"smaller")
D.edU=new C.atb(1,"bigger")
D.aKI=new C.atb(2,"fit")
D.elH=new B.p(3,6)
D.em0=new B.p(4,8)
D.eqc=new B.D(E.al0,U.afa,null)
D.eqg=new B.D(A.a_J,A.m0,null)
D.bSy=new B.ae(A.k5,16,A.bV,null,null,null)
D.eqk=new B.D(A.iK,D.bSy,null)
D.bdD=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.eqw=new B.D(A.GU,D.bdD,null)
D.c22=new B.ae(A.cz,16,A.aD,null,null,null)
D.eqA=new B.D(A.ey,D.c22,null)
D.fKQ=new B.B("Play",null,A.nU,null,null,null,null,null,null,null,null,null)
D.dlk=w([V.ars,A.ts,D.fKQ],x.p)
D.f71=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dlk,null)
D.eqD=new B.D(A.nA,D.f71,null)
D.bdM=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.fdt=new B.a5(20,20,D.bdM,null)
D.eqK=new B.D(A.iK,D.fdt,null)
D.fUe=new B.B("Seconds per slide",null,A.fW,null,null,null,null,null,null,null,null,null)
D.eqU=new B.D(A.bh,D.fUe,null)
D.ese=new C.a9B(2,"print")
D.esh=new B.iZ(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.etU=new B.he("/Annot")
D.etW=new B.he("/URI")
D.fEU=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ewq=new B.jC("share",48,D.fEU,null,B.as("jC<m>"))
D.c1W=new B.ae(A.e9,14,A.eK,null,null,null)
D.ewz=new B.cL(null,-2,-2,null,null,null,D.c1W,null)
D.d19=w([H.ai6,A.L],x.O)
D.c8w=new B.a9(A.a6,A.a9,A.x,D.d19,null,null)
D.b6e=new B.o(null,null,null,null,null,D.c8w,A.n)
D.bxl=new B.l3(D.b6e,A.bi,null,null)
D.ewL=new B.cL(0,0,null,0,8,null,D.bxl,null)
D.dql=w([A.i4,A.mM,A.ch],x.O)
D.exp=new B.c0(A.A,0.5,A.x,null,0,D.dql,null,null)
D.eA_=new B.y(0.22,A.bm)
D.eED=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eGQ=new B.y(0.5,A.hA)
D.eQv=new B.y(0.78,A.aY)
D.f1M=new B.cu([A.br,0.22,0.7,2.6])
D.f1T=new B.cu([A.bc,0.36,1.2,1.3])
D.f1Z=new B.cu([A.dJ,0.28,0.2,0.4])
D.f24=new B.cu([A.cy,0.05,0.3,0.35])
D.f2a=new B.cu([A.bw,0.28,0.9,0])
D.f2i=new B.cu([A.aE,-0.25,-0.15,0.45])
D.f39=new B.cu([A.c4,0.42,1,4.1])
D.f6K=new B.aaA(9)
D.bTE=new B.ae(A.HP,28,A.bq,null,null,null)
D.fUN=new B.B("NGMY News",null,A.df,null,null,null,null,null,null,null,null,null)
D.bHI=new B.by(1,A.bb,D.fUN,null)
D.dtK=w([D.bTE,A.at,D.bHI],x.p)
D.f6W=new B.c6(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dtK,null)
D.bTP=new B.ae(A.ou,16,A.c,null,null,null)
D.fWn=new B.B("Book",null,A.oV,null,null,null,null,null,null,null,null,null)
D.dxY=w([D.bTP,A.e2,D.fWn],x.p)
D.f74=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dxY,null)
D.c_w=new B.ae(A.jE,10,A.c,null,null,null)
D.fIR=new B.B("Pro",null,A.nQ,null,null,null,null,null,null,null,null,null)
D.dlp=w([D.c_w,A.r3,D.fIR],x.p)
D.f78=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dlp,null)
D.fUc=new B.B("Make a newspaper",null,A.VB,null,null,null,null,null,null,null,null,null)
D.c9J=w([E.a3p,A.ae,D.fUc],x.p)
D.f79=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.c9J,null)
D.bZ_=new B.ae(A.kt,18,A.bN,null,null,null)
D.fL3=new B.B("Ending celebration",null,A.hh,null,null,null,null,null,null,null,null,null)
D.dsK=w([D.bZ_,A.bl,D.fL3],x.p)
D.f7c=new B.c6(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dsK,null)
D.c_i=new B.ae(A.j2,18,A.kp,null,null,null)
D.fou=new B.G(!0,A.kp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWG=new B.B("Write",null,D.fou,null,null,null,null,null,null,null,null,null)
D.d9A=w([D.c_i,A.ae,D.fWG],x.p)
D.f7j=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.d9A,null)
D.fIP=new B.B("Download picture",null,A.nR,null,null,null,null,null,null,null,null,null)
D.bKs=new B.qE(A.e_,A.A,A.f,D.fIP,null)
D.bKD=new B.dn(1,A.co,D.bKs,null)
D.dlP=w([K.arj,A.ae,D.bKD],x.p)
D.f7k=new B.c6(A.aL,A.ba,A.i,A.m,null,A.p,null,0,D.dlP,null)
D.bVB=new B.ae(A.HP,22,A.bq,null,null,null)
D.fSL=new B.B("NGMY NEWS",null,M.aay,null,null,null,null,null,null,null,null,null)
D.d0z=w([D.bVB,A.ae,D.fSL],x.p)
D.f7u=new B.c6(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.d0z,null)
D.f7G=new B.px(!1,!1,null,U.XD,null,A.c2,null,null,null)
D.a9E=new B.iL([D.cq,D.dk,D.vb,D.Ja,D.vc,D.aKx],B.as("iL<hF>"))
D.ejV={title:0,quote:1,closing:2,bio:3}
D.f9a=new B.df(D.ejV,4,x.M)
D.ehE={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f9d=new B.df(D.ehE,5,x.M)
D.eja={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9G=new B.df(D.eja,8,x.M)
D.eik={Design:0,Transitions:1,Insert:2}
D.f9l=new B.df(D.eik,3,x.M)
D.hCI=new B.iL([D.a7N],B.as("iL<wq>"))
D.eit={float3d:0,drift:1,pulse:2}
D.f9p=new B.df(D.eit,3,x.M)
D.aSl=new B.iL([D.J7,D.J8,D.J9],B.as("iL<mP>"))
D.ehC={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aSo=new B.df(D.ehC,14,x.M)
D.hCJ=new B.df(A.hY,0,B.as("df<wq>"))
D.eiq={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.UD=new B.df(D.eiq,4,x.M)
D.ehv={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aSr=new B.df(D.ehv,30,x.M)
D.eiz={circle:0,triangle:1,hexagon:2,diamond:3}
D.f9T=new B.df(D.eiz,4,x.M)
D.fcm=new B.av(390,844)
D.fdc=new B.a5(20,20,A.LY,null)
D.aTe=new B.a5(null,2.5,null,null)
D.fdm=new B.a5(18,18,A.LY,null)
D.c_m=new B.ae(A.jp,19,A.c,null,null,null)
D.fdy=new B.a5(38,38,D.c_m,null)
D.bYy=new B.ae(A.zo,22,A.c,null,null,null)
D.fdA=new B.a5(40,40,D.bYy,null)
D.fe9=new B.hG(2,10,10,1.15,null)
D.aTl=new B.hG(2,16,14,0.62,null)
D.bFx=new B.Q(32,30,32,40)
D.bfk=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bTB=new B.ae(A.qE,56,D.bfk,null,null,null)
D.aja=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fqC=new B.G(!0,D.aja,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPD=new B.B("Your books will live here.",null,D.fqC,null,A.K,null,null,null,null,null,null,null)
D.dcz=w([D.bTB,A.X,D.fPD],x.p)
D.bwg=new B.fj(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.dcz,null)
D.eqS=new B.D(D.bFx,D.bwg,null)
D.fev=new B.mq(D.eqS,null)
D.fPA=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.feN=new B.b1(D.fPA,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fNG=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.feO=new B.b1(D.fNG,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fSP=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.feX=new B.b1(D.fSP,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTn=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new B.b1(D.fTn,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fMi=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new B.b1(D.fMi,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.h_H=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffH=new B.b1(D.h_H,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXI=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ffS=new B.b1(D.fXI,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fTw=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new B.b1(D.fTw,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fH_=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new B.b1(D.fH_,null,null,null,null,null,null,null,A.iU,null,null,null,null,A.qp,!1,null,null,null,A.t,null)
D.fIZ=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fh9=new B.b1(D.fIZ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fPf=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhb=new B.b1(D.fPf,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fOW=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new B.b1(D.fOW,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fVE=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new B.b1(D.fVE,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fD3=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fhm=new B.b1(D.fD3,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fK8=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new B.b1(D.fK8,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fZm=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fhL=new B.b1(D.fZm,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYT=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new B.b1(D.fYT,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fBZ=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new B.b1(D.fBZ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fUI=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fi_=new B.b1(D.fUI,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYs=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fie=new B.b1(D.fYs,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fYj=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fig=new B.b1(D.fYj,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fBQ=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fim=new B.b1(D.fBQ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fFX=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new B.b1(D.fFX,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fXv=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fj_=new B.b1(D.fXv,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.fFJ=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fje=new B.b1(D.fFJ,null,null,null,null,null,null,null,null,null,null,null,null,A.a_,!1,null,null,null,A.t,null)
D.bnB=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d_9=w([A.io,A.pc,D.bnB,D.afE,A.io],x.O)
D.fjC=new B.fY(A.A,0,6.283185307179586,A.x,D.d_9,null,null)
D.d8H=w([A.bN,A.c3,A.i2,D.BO,A.bN],x.O)
D.aTU=new B.fY(A.A,0,6.283185307179586,A.x,D.d8H,null,null)
D.dnF=w([A.c4,A.br,A.bc,A.b9,A.bq,A.c4],x.O)
D.fjH=new B.fY(A.A,0,6.283185307179586,A.x,D.dnF,null,null)
D.d1q=w([A.qj,A.pd,A.y4,A.io,A.qj],x.O)
D.fjI=new B.fY(A.A,0,6.283185307179586,A.x,D.d1q,null,null)
D.dnz=w([A.aQ,A.bM,A.aO,A.an,A.aQ],x.O)
D.fjJ=new B.fY(A.A,0,6.283185307179586,A.x,D.dnz,null,null)
D.dvO=w([A.bw,A.bc,A.br,A.c4,A.bw],x.O)
D.fjL=new B.fY(A.A,0,6.283185307179586,A.x,D.dvO,null,null)
D.bj_=new B.u(1,0,1,0,A.q)
D.bnW=new B.u(1,0,1,1,A.q)
D.bkO=new B.u(1,0,0,1,A.q)
D.bgJ=new B.u(1,1,0,1,A.q)
D.drJ=w([A.Me,A.YU,D.bj_,D.bnW,D.bkO,D.bgJ,A.Me],x.O)
D.fjM=new B.fY(A.A,0,6.283185307179586,A.x,D.drJ,null,null)
D.fk0=new C.axp(2,"immersiveSticky")
D.fk1=new C.axp(3,"edgeToEdge")
D.fk2=new C.axp(4,"manual")
D.fmx=new B.G(!0,A.o6,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUs=new B.G(!0,A.f_,null,null,null,null,12.5,A.R,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn6=new B.G(!0,E.nt,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq0=new B.G(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqm=new B.G(!0,A.eK,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frP=new B.G(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs_=new B.G(!0,A.jV,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsd=new B.t1(!0,A.Jx,null,null,null,null,A.dC,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fto=new B.G(!0,A.jA,null,null,null,null,11.5,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftM=new B.G(!0,A.aD,null,null,null,null,12.5,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esk=new B.iZ(1,1,0.7568627450980392,0.027450980392156862)
D.ftQ=new B.t1(!0,D.esk,null,null,null,null,A.dC,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahV=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aVh=new B.G(!0,D.ahV,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftY=new B.G(!0,D.aja,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftZ=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVj=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new B.t1(!0,A.pG,null,null,null,null,A.dC,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuT=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new B.G(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvs=new B.G(!0,D.ahV,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KB=new B.G(!0,A.aD,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvY=new B.G(!0,A.c3,null,null,null,null,11.5,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new B.G(!0,A.bM,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new B.G(!0,A.bN,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fws=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a57,null,null,null)
D.fwv=new B.G(!0,A.c_,null,null,null,null,null,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwx=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwM=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwY=new B.G(!0,A.dx,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new B.G(!0,A.aS,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.G(!0,A.ab,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVV=new B.G(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVX=new B.G(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.btJ=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fzO=new B.G(!0,D.btJ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW2=new B.G(!0,E.nt,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.G(!0,A.bM,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAl=new B.G(!0,N.lF,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsV=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBB=new B.B("NEW",null,D.fsV,null,null,null,null,null,null,null,null,null)
D.fBT=new B.B("Hati ya Kuhowesha",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fCl=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fCK=new B.B("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fDv=new B.B("Big quote mark",null,A.ju,null,null,null,null,null,null,null,null,null)
D.fDx=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fDJ=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new B.B("How many slides?",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fEM=new B.B("Transfer",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fox=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new B.B("Luxury FX",null,D.fox,null,null,null,null,null,null,null,null,null)
D.fFs=new B.B("Font",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fFD=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fzk=new B.G(!0,A.bM,null,null,null,null,12,A.R,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new B.B("Example  GA847",null,D.fzk,null,null,null,null,null,null,null,null,null)
D.fGj=new B.B("Design shapes",null,A.ju,null,null,null,null,null,null,null,null,null)
D.fGv=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fGA=new B.B("Non-stop (loop)",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fGO=new B.B("Hati ya Kuhoweya",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fH6=new B.B("Photo studio",null,A.fB,null,null,null,null,null,null,null,null,null)
D.fHA=new B.B("Add your picture",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fse=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHB=new B.B("Enter document code",null,D.fse,null,A.K,null,null,null,null,null,null,null)
D.fHC=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fpF=new B.G(!0,E.nt,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI1=new B.B("Delete this book?",null,D.fpF,null,A.K,null,null,null,null,null,null,null)
D.fur=new B.G(!0,E.nt,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ0=new B.B("Your library",null,D.fur,null,null,null,null,null,null,null,null,null)
D.fJ6=new B.B("Delete",null,A.aVa,null,null,null,null,null,null,null,null,null)
D.fJ9=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.Ky,null,null,null,null,null,null,null,null,null)
D.fJk=new B.B("Element flies in",null,A.aVn,null,null,null,null,null,null,null,null,null)
D.VM=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fJJ=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fK5=new B.B("Cancel",null,E.aVx,null,null,null,null,null,null,null,null,null)
D.fK7=new B.B("The lines and circles that come with the design",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fy7=new B.G(!0,A.hC,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKz=new B.B("DOCUMENT CODE",null,D.fy7,null,null,null,null,null,null,null,null,null)
D.fLp=new B.B("Quotes",null,G.aba,null,null,null,null,null,null,null,null,null)
D.frB=new B.G(!0,N.lF,null,null,null,null,null,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLz=new B.B("Add a picture",null,D.frB,null,null,null,null,null,null,null,null,null)
D.fLH=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vp,null,A.K,null,null,null,null,null,null,null)
D.fLL=new B.B("Look & feel",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fLQ=new B.B("Rings",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fLW=new B.B("W",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fM5=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fMo=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Vy,null,A.K,null,null,null,null,null,null,null)
D.fMq=new B.B("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNa=new B.B("Add page",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fNs=new B.B("Malipo ya Awamu ya Mahari",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fs3=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNH=new B.B("Create with AI",null,D.fs3,null,A.K,null,null,null,null,null,null,null)
D.fOa=new B.B("Apply look",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fsL=new B.G(!0,A.ew,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOY=new B.B("Type your presentation below",null,D.fsL,null,A.K,null,null,null,null,null,null,null)
D.fP0=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aW7,null,A.K,null,null,null,null,null,null,null)
D.fP2=new B.B("Keep it",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fnp=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP9=new B.B("Done",null,D.fnp,null,null,null,null,null,null,null,null,null)
D.fPu=new B.B("Delete",null,A.nS,null,null,null,null,null,null,null,null,null)
D.fPF=new B.B("Hati ya Kiapo cha Uongozi",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fqU=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQz=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fqU,null,A.K,null,null,null,null,null,null,null)
D.fQY=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fR3=new B.B("Layout",null,A.VD,null,null,null,null,null,null,null,null,null)
D.fRJ=new B.B("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fRS=new B.B("X",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fSt=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A2.ED,null,null,null,null,null,null,null,null,null)
D.fT1=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fTf=new B.B("Hati ya Kuhowa",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fTh=new B.B("Choose a class template",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fTj=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fTq=new B.B("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fTD=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new B.B("Done",null,A.aVU,null,null,null,null,null,null,null,null,null)
D.fTV=new B.B("Ending celebration",null,A.df,null,null,null,null,null,null,null,null,null)
D.fTW=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fUa=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A2.tx,null,null,null,null,null,null,null,null,null)
D.fVa=new B.B("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fVb=new B.B("What would you like to do?",null,D.aVh,null,null,null,null,null,null,null,null,null)
D.fVg=new B.B("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fVN=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fVR=new B.B("Hati (Documents)",null,A.fA,null,null,null,null,null,null,null,null,null)
D.fW3=new B.B("Done",null,A.lw,null,null,null,null,null,null,null,null,null)
D.fz9=new B.G(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW7=new B.B("Delete presentation?",null,D.fz9,null,A.K,null,null,null,null,null,null,null)
D.fWr=new B.B("After the last slide it starts again from the first",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fWD=new B.B("\ud83c\udf33",null,A.EC,null,A.K,null,null,null,null,null,null,null)
D.fWV=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fX1=new B.B("Transfer document",null,A.nT,null,null,null,null,null,null,null,null,null)
D.fXc=new B.B("Add to the slides",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fXz=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fXO=new B.B("Make a book",null,I.aUM,null,null,null,null,null,null,null,null,null)
D.fXS=new B.B("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fru=new B.G(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXU=new B.B("Keep this page open until it finishes.",null,D.fru,null,null,null,null,null,null,null,null,null)
D.fXW=new B.B("Making your video",null,A.df,null,null,null,null,null,null,null,null,null)
D.fY0=new B.B("LANGUAGE",null,X.tz,null,null,null,null,null,null,null,null,null)
D.fY7=new B.B("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fYf=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYh=new B.B("Upload a different logo",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fYy=new B.B("Delete from the database?",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fYz=new B.B("H",null,A.ty,null,null,null,null,null,null,null,null,null)
D.fYZ=new B.B("NGMY Quotes",null,A.df,null,null,null,null,null,null,null,null,null)
D.fZs=new B.B("Cover",null,D.aW2,null,null,null,null,null,null,null,null,null)
D.fZw=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fZx=new B.B("Each page becomes its own slide you can present",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fZU=new B.B("Y",null,A.ty,null,null,null,null,null,null,null,null,null)
D.h_5=new B.B("Crop the picture",null,A.lw,null,null,null,null,null,null,null,null,null)
D.h_c=new B.B("Edit text",null,A.Kw,null,null,null,null,null,null,null,null,null)
D.h1w=B.dR("a9n")
D.ER=new C.ayL(0,"none")
D.b_0=new C.ayL(1,"zipCrypto")
D.b_1=new C.ayL(2,"aes")
D.hq7=new F.Qg("","",null)
D.hrf=new C.bem(null)
D.hsl=new C.a_L(null)
D.hvk=new C.aek(null)
D.hvm=new C.aFZ(null)
D.hy7=new C.a1_(null)
D.hyn=new C.a1w(null)
D.hz_=new C.bwk(null)})();(function staticFields(){$.hsi=null
$.hsj=null
$.hsk=null
$.hsl=null
$.h9C=B.wP("_lastQuoRemDigits")
$.h9D=B.wP("_lastQuoRemUsed")
$.az7=B.wP("_lastRemUsed")
$.h9E=B.wP("_lastRem_nsh")
$.qr=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a8b=B.T(x.N,x.I)
$.h72=!1
$.hxf=B.T(B.as("l8"),x.N)
$.hxr=B.T(B.as("l8"),x.E)
$.hvn=!1
$.bBZ="q"
$.Rk=0
$.Dg=B.T(x.N,B.as("ai<A6>"))
$.hvK=!1
$.hbl=!1
$.hCl=null
$.i6G=B.T(x.N,B.as("aB<m?>"))
$.L9=""
$.jb=0
$.hp8=function(){var w=x.N
return B.T(w,w)}()
$.hp7=B.T(x.N,x.R)
$.hbG=!1
$.ah1=B.T(x.N,x.E)
$.hcx=0
$.bmB=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iwo","DD",()=>C.bbQ(0))
w($,"iwm","a3N",()=>C.bbQ(1))
w($,"iwn","hGd",()=>C.bbQ(2))
w($,"iwl","hgC",()=>$.a3N().vE(0))
w($,"iwj","hGb",()=>C.bbQ(1e4))
w($,"iwk","hGc",()=>B.EU(8))
w($,"is4","hE6",()=>B.EU(0))
w($,"isc","hEa",()=>B.EU(0))
w($,"isb","hE9",()=>B.c2d(0))
w($,"iAl","hIm",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a6B.gdO(D.a6B),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iAN","bGu",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n7(new C.fSk(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.n7(new C.fSl(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fSm(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.n7(new C.fSx(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.n7(new C.fSC(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fSD(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.n7(new C.fSE(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.n7(new C.fSF(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.n7(new C.fSG(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.n7(new C.fSH(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.n7(new C.fSI(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.n7(new C.fSn(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.n7(new C.fSo(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.n7(new C.fSp(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.n7(new C.fSq(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.n7(new C.fSr(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.n7(new C.fSs(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.n7(new C.fSt(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.n7(new C.fSu(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.n7(new C.fSv(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.n7(new C.fSw(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.n7(new C.fSy(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.n7(new C.fSz(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.n7(new C.fSA(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.n7(new C.fSB(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.as("O<Fm>"))})
w($,"iAo","hIo",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["CFk3YlSoCguVUpX5NhQM8aXzFUw="]=a.current})($__dart_deferred_initializers__);