((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,A6,Ai,Aj,U,A7,Ak,Al,C={
tu(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fPa(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
J1(d){var w
if(d===0)return $.Cy()
if(d===1)return $.a1H()
if(d===2)return $.hiY()
if(Math.abs(d)<4294967296)return C.b8b(A.o.O(d))
w=C.hDx(d)
return w},
b8b(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tu(4,w)
return new C.nI(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tu(1,w)
return new C.nI(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tu(2,w)
return new C.nI(v===0?!1:s,w,v)}v=A.o.an(A.o.gaiN(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tu(v,w)
return new C.nI(v===0?!1:s,w,v)},
hDx(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.U(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Cy()
w=$.hiX()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l_(A.aG.gaP(w))
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
q=new C.nI(!1,r,4)
if(s<0)p=q.md(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fPb(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
h5V(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fw(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
h5Q(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fPb(d,e,s,g)
w=e+s+1
C.h5V(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hDA(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fw(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fw(u,r)}w&2&&B.aj(g)
g[n]=o},
cC6(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hDy(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b8c(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
h5W(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.an(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.an(r,65536)}},
hDz(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e3((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nI:function nI(d,e,f){this.a=d
this.b=e
this.c=f},
cC7:function cC7(){},
cC8:function cC8(){},
cC9:function cC9(d,e){this.a=d
this.b=e},
cCa:function cCa(d){this.a=d},
aPQ:function aPQ(d,e){this.a=d
this.b=e},
fWU(d,e,f){var w=new C.QY(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
QY:function QY(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a2S:function a2S(d,e){this.a=d
this.b=e},
bFL:function bFL(d){this.a=d
this.c=this.b=0},
hma(){return new C.bE6()},
bE6:function bE6(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cuh:function cuh(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hDf(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.cp(d.gcSj(d)))
v=f*2+2
u=C.h3z(C.h3B(),64)
t=new C.cem(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cen(e,1000,v)
s=new Uint8Array(v)
return A.aG.dn(s,0,t.cFZ(w,0,s,0))},
cuf:function cuf(d,e){this.c=d
this.d=e},
avI:function avI(d,e){this.a=d
this.b=e},
cui:function cui(d,e,f,g){var _=this
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
b6T:function b6T(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cug:function cug(){this.a=$},
h5l(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hlU(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bCH:function bCH(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fUF(d,e){e&=31
return(d&$.pT[e])<<e>>>0},
ng(d,e){e&=31
return(d>>>e|C.fUF(d,32-e))>>>0},
h3A(d){var w,v=new C.arq()
if(B.iE(d))v.aIt(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h3B(){var w=C.h3A(0),v=new Uint8Array(4),u=x.S
u=new C.ceo(w,v,A.Dq,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lm(0)
return u},
h3z(d,e){var w=new C.cek(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cej:function cej(){},
cen:function cen(d,e,f){this.a=d
this.b=e
this.c=f},
ceh:function ceh(){},
arp:function arp(d){this.a=d},
cem:function cem(d){this.a=$
this.b=d
this.c=$},
cei:function cei(){},
ceg:function ceg(){},
arq:function arq(){this.b=this.a=$},
cel:function cel(){},
ceo:function ceo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cek:function cek(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cef:function cef(){},
cee:function cee(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bLH:function bLH(){},
bLI:function bLI(d){this.a=d},
hGs(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b8r:function b8r(){},
cof:function cof(){},
bMA:function bMA(d,e){this.a=d
this.b=!1
this.c=e},
bMB:function bMB(){},
hPg(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
aum(d){var w=0,v=B.j(x.H),u
var $async$aum=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eO4?2:4
break
case 2:w=5
return B.b(A.jX.fT("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$aum)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jX.fT("SystemChrome.setEnabledSystemUIOverlays",C.hPg(null),u),$async$aum)
case 6:case 3:return B.h(null,v)}})
return B.i($async$aum,v)},
aup:function aup(d,e){this.a=d
this.b=e},
a7t:function a7t(d){this.a=d},
fL8(d,e){return new C.aUd(e,d,null)},
aUd:function aUd(d,e,f){this.e=d
this.c=e
this.a=f},
azf:function azf(d,e,f,g,h){var _=this
_.af=d
_.ak=e
_.ab$=f
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
hRS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.flw(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bw(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
flw:function flw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
amh(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$amh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.afL("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$amh)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d7(s,x.f)
t=B.cD(t,new C.bWZ(),t.$ti.k("H.E"),x.P)
r=B.B(t,B.a3(t).k("H.E"))}else r=B.a([],x.d)
A.d.b1(r,new C.bX_())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amh,v)},
amj(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$amj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amh(),$async$amj)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.V(t,x.P)
for(r=J.aX(j);r.C();){q=r.gU(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a5().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nf("ngmy_menu_lib_v1_zzslide_"+B.aJ(p,k,""),B.E(["deck",m.ad(),"savedAt",l],t,q),null),$async$amj)
case 7:if(!f){w=5
break}s.n(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("H.E"))
w=10
return B.b(B.nf("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],t,q),null),$async$amj)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amj,v)},
bX0(d){return C.hrz(d)},
hrz(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bX0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.afL("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,o,""),A.hF),$async$bX0)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.V3(B.a1(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a9(m)
$.am.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bX0,v)},
ami(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ami=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.amh(),$async$ami)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nh(r,new C.bX1(d))
w=4
return B.b(B.nf("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$ami)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aNR("ngmy_menu_lib_v1_zzslide_"+B.aJ(d,s,"")),$async$ami)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ami,v)},
bWZ:function bWZ(){},
bX_:function bX_(){},
bX1:function bX1(d){this.a=d},
i0J(d,e,f){return B.bW(A.K,null,new C.fBf(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fBf:function fBf(d,e,f){this.a=d
this.b=e
this.c=f},
a_V:function a_V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHD:function aHD(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f04:function f04(d,e){this.a=d
this.b=e},
f08:function f08(d){this.a=d},
f09:function f09(d){this.a=d},
f0a:function f0a(d,e,f){this.a=d
this.b=e
this.c=f},
f05:function f05(d){this.a=d},
f06:function f06(d){this.a=d},
f07:function f07(d,e){this.a=d
this.b=e},
f0_:function f0_(d){this.a=d},
f_Y:function f_Y(d){this.a=d},
f_Z:function f_Z(d){this.a=d},
f00:function f00(d){this.a=d},
f01:function f01(d){this.a=d},
f0e:function f0e(d,e){this.a=d
this.b=e},
f0d:function f0d(d,e){this.a=d
this.b=e},
f03:function f03(d,e,f){this.a=d
this.b=e
this.c=f},
f02:function f02(d,e,f){this.a=d
this.b=e
this.c=f},
f0b:function f0b(d,e){this.a=d
this.b=e},
f0c:function f0c(d,e){this.a=d
this.b=e},
f0h:function f0h(d){this.a=d},
f0i:function f0i(d,e){this.a=d
this.b=e},
f0g:function f0g(d,e){this.a=d
this.b=e},
f0f:function f0f(){},
h8i(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d7(w,x.f)
v=B.cD(v,new C.f7g(),v.$ti.k("H.E"),x.ea)
u=B.a3(v).k("a2<H.E>")
v=B.B(new B.a2(v,new C.f7h(),u),u.k("H.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a0T(d){return C.hT7(d)},
hT7(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a0T=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.V(x.N,x.ea)
m=new C.fnZ(n)
t=4
j=m
i=C
w=7
return B.b(B.a1s("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a0T)
case 7:j.$1(i.h8i(f))
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
return B.b(B.aA(),$async$a0T)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.h8i(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bc<2>")
o=p.k("a2<H.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.f7p(d),$async$a0T)
case 13:p=j.B(new i.a2(h,new g.fnX(f),o),o.k("H.E"))
A.d.b1(p,new C.fnY())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0T,v)},
agk(d,e){return C.i0o(d,e)},
i0o(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$agk=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fAK(),x.P)
n=B.B(n,n.$ti.k("ai.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agc("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agk)
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
return B.b(B.aA(),$async$agk)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$agk)
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
return B.i($async$agk,v)},
f7p(d){return C.hHQ(d)},
hHQ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$f7p=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$f7p)
case 7:r=f
q=r.rQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kv(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$f7p,v)},
af9(d,e){return C.hRK(d,e)},
hRK(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$af9=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$af9)
case 6:s=g
r=B.aW(x.N)
q=s.rQ("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a3(q).k("cl.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$af9)
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
return B.b(C.a0T(d),$async$af9)
case 8:n=g
J.nh(n,new C.flc(e))
w=9
return B.b(C.agk(d,n),$async$af9)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$af9,v)},
i0O(d,e){return B.a5(d,!1).ce(B.ej(new C.fBB(e),!0,null,x.H))},
hDC(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d9(w.d,new C.cDt())},
o8:function o8(d,e,f){this.a=d
this.b=e
this.c=f},
f7g:function f7g(){},
f7h:function f7h(){},
fnZ:function fnZ(d){this.a=d},
fnX:function fnX(d){this.a=d},
fnY:function fnY(){},
fAK:function fAK(){},
flc:function flc(d){this.a=d},
fBB:function fBB(d){this.a=d},
XI:function XI(d,e){this.c=d
this.a=e},
awf:function awf(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cDt:function cDt(){},
cDv:function cDv(d,e){this.a=d
this.b=e},
cDy:function cDy(d){this.a=d},
cDz:function cDz(d){this.a=d},
cDx:function cDx(){},
cDA:function cDA(d,e){this.a=d
this.b=e},
cDw:function cDw(d){this.a=d},
cDB:function cDB(){},
cDu:function cDu(d,e){this.a=d
this.b=e},
cDC:function cDC(){},
cDp:function cDp(d){this.a=d},
cDn:function cDn(d){this.a=d},
cDo:function cDo(d){this.a=d},
cDq:function cDq(d,e){this.a=d
this.b=e},
cDm:function cDm(d){this.a=d},
cDl:function cDl(d){this.a=d},
cDj:function cDj(d,e){this.a=d
this.b=e},
cDk:function cDk(d){this.a=d},
cDs:function cDs(){},
cDr:function cDr(d){this.a=d},
cDi:function cDi(d,e){this.a=d
this.b=e},
cDh:function cDh(d,e){this.a=d
this.b=e},
cDg:function cDg(d,e){this.a=d
this.b=e},
cDD:function cDD(d){this.a=d},
XG:function XG(d,e,f){this.c=d
this.d=e
this.a=f},
aDx:function aDx(d,e,f){this.a=d
this.b=e
this.c=f},
awb:function awb(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cCK:function cCK(d){this.a=d},
cCJ:function cCJ(d){this.a=d},
cCM:function cCM(d,e,f){this.a=d
this.b=e
this.c=f},
cCU:function cCU(){},
cCV:function cCV(d){this.a=d},
cCN:function cCN(d,e,f){this.a=d
this.b=e
this.c=f},
cCL:function cCL(d,e){this.a=d
this.b=e},
cCP:function cCP(d,e){this.a=d
this.b=e},
cCQ:function cCQ(d,e){this.a=d
this.b=e},
cCR:function cCR(d,e){this.a=d
this.b=e},
cCO:function cCO(d){this.a=d},
cCT:function cCT(d){this.a=d},
cCS:function cCS(d,e){this.a=d
this.b=e},
cD_:function cD_(d){this.a=d},
cCW:function cCW(d,e){this.a=d
this.b=e},
cCX:function cCX(d,e){this.a=d
this.b=e},
cCY:function cCY(d,e){this.a=d
this.b=e},
cCZ:function cCZ(d,e){this.a=d
this.b=e},
awd:function awd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hVs(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ef(v,x.cK).bz(new C.fsw(),x.H).eT(new C.fsx())}}else if(s)C.h9L()}catch(t){}},
h9L(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ef(v,x.cK).eT(new C.fbF())}catch(u){}},
hVv(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fsw:function fsw(){},
fsx:function fsx(){},
fbF:function fbF(){},
hei(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
hef(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kO)return null
return A.a.b_(w,14)},
fTp(d){var w
if(d.b!==D.kO)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b_(w,21)},
hVV(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hej(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hVQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aJ(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aJ(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.V(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kL(0,f)
t=x.N
u=B.cD(u,new C.ftv(),B.a3(u).k("H.E"),t)
s=B.B(u,B.a3(u).k("H.E"))
if(s.length===0)return B.V(t,t)
for(u=v.kL(0,f),u=new B.J0(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.QE(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.QE(A.a.b_(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.V(t,t)
k=B.V(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
hVO(d,e){var w,v,u,t,s,r=B.a3(e).k("cy<1>"),q=B.B(new B.cy(e,r),r.k("H.E"))
A.d.b1(q,new C.ftu())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aOP(w,u,s,0)}return w},
hVS(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a2H:$.hkY(),s=x.N,r=B.V(s,s)
for(s=t.gdL(t),s=s.gah(s);s.C();){w=s.gU(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
heg(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
f8i(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hei(q)===e)return q}return null},
hVT(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b_(v,u)
return A.d.gL(D.G6).a},
hVU(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ad4(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ad4(0,0,0)
v=C.f8i(b6,b0)
u=C.f8i(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hVS(b2,C.hVQ(C.heg(b2),v.r))
if(s.a!==0){u.r=C.hVO(C.heg(b4),s)
t=s.a}}r=B.aW(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hei(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.f8i(b6,n)
i=C.f8i(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fTp(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hef(a8)===a0||C.fTp(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Qd(a1,new C.ftB(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iW
$.iW=a9+1
A.d.J(a1,new C.eG(""+1000*a6+"_"+a9,D.kO,a2,a3,a4,a5,"",24,A.a4,A.bl,A.aC,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cg,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.ad4(k,t,e)},
hVP(d){var w=C.hVT(d)
if(d.w==="hati_kuhowa")return C.hdD("",w)
return C.hdC("",w)},
ftv:function ftv(){},
ftu:function ftu(){},
ftB:function ftB(d){this.a=d},
h9u(){var w=new B.S(Date.now(),0,!1),v=new C.faI()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
fTx(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fut(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kO&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hew(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fut(d)
w=B.bi(u)
if(w==null)return!C.fut(d)
return new B.S(Date.now(),0,!1).a5().cY(w.a5().bN(18e9))},
hWA(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a5().ac()},
hvA(d){return A.a.i(d).toLowerCase()},
aoq(d){return C.hvC(d)},
hvC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aoq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$aoq)
case 7:r=f
p=r.rQ("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.J(o,C.i_5(),B.T(o).k("J<1,n>")).bZ(0,new C.c6y())
o=B.d9(o,o.$ti.k("H.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aoq,v)},
aop(d,e){return C.hvB(d,e)},
hvB(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aop=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoq(d),$async$aop)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$aop)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$aop)
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
return B.i($async$aop,v)},
aor(d,e){return C.hvD(d,e)},
hvD(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aor=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aoq(d),$async$aor)
case 3:r=g
if(!J.hJ(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$aor)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q1(r)),$async$aor)
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
return B.i($async$aor,v)},
Ul(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ul=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fMD&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Ul)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.V(e,x.I)
for(d=J.jq(p),d=d.gah(d),a0=x.z;d.C();){n=d.gU(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.V3(B.a1(f.a(n.b),e,a0)))}$.a6i=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a9(a2)
$.am.$1("[kiapo] local load: "+B.t(m))
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
return B.b(B.c1(),$async$Ul)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tI("civic_hati_kiapo_uongozi",null,A.ed),$async$Ul)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.V(o,x.I)
for(f=x.f,e=J.jq(f.a(J.q(l,"byState"))),e=e.gah(e),d=x.z;e.C();){j=e.gU(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.V3(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gah(0);o.C();){f=o.d
f.toString
i=f
h=$.a6i.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcv()
else f=!0
f=!f}else f=!0
if(f)$.a6i.n(0,i.a,i.b)}w=20
return B.b(C.aos(),$async$Ul)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a9(a3)
$.am.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fMD=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ul,v)},
aos(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aos=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aos)
case 6:s=e
r=B.V(x.N,x.P)
for(o=$.a6i,o=new B.cJ(o,B.a3(o).k("cJ<1,2>")).gah(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ad())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$aos)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a9(l)
$.am.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aos,v)},
aYF(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aYF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ul(!1),$async$aYF)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6i.h(0,t)
r=s==null?null:s.hy()
if(r==null){u=null
w=1
break}u=C.bAd(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYF,v)},
a6j(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6j=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hy()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6i.n(0,d,o)
$.fMD=!0
w=3
return B.b(C.aos(),$async$a6j)
case 3:w=4
return B.b(B.c1(),$async$a6j)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.V(e,x.P)
for(n=$.a6i,n=new B.cJ(n,B.a3(n).k("cJ<1,2>")).gah(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ad())}w=9
return B.b(B.nf("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a6j)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a9(a0)
$.am.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a6j,v)},
aot(d){var w=0,v=B.j(x.T),u,t,s
var $async$aot=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a4z(A.eG),$async$aot)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fd(),$async$aot)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aYE(t,d),$async$aot)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aot,v)},
aYE(d,e){return C.hvE(d,e)},
hvE(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aYE=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c1(),$async$aYE)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aJ(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eU().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.i1("media")
w=8
return B.b(p.wD(q,new Uint8Array(B.cp(d)),D.bvj),$async$aYE)
case 8:n=p.Cd(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a9(k)
$.am.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aYE,v)},
JU(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aC,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
f9Y(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
fQE(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.en(h,!1,j,A.aC,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
f9w(d,e,f,g){return C.f9Y(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fQF(d,e,f,g,h,i,j,k){var w=C.cC()
return C.en(A.q_,!1,j,A.aC,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a4,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,g,e,f)},
h9t(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.e9(v,w,"").split(":"))},
bAd(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gL(t)
t=x.N
r=B.V(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.h9t(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kO&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hy()}h=C.fT3(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Ba(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.h9t(m)
if(l!=null&&r.ag(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kO&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fsu(a2))}else A.d.bn(a1.z,new C.fsv())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fut(a0))a0.ax=a6.f.a5().ac()
return a0},
fT3(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fvg(D.a3H),l=C.cC(),k=x.u,j=B.a([C.en(A.bg,!1,s,A.aC,"marriage_locked_bg",r,24,A.bl,A.a4,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lg,1,0,0)],k),i=B.a([],k)
i.push(C.JU("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.JU("TAREHE:",A.bg,o,16,A.bl,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fQE("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.h9u()))
i.push(C.f9w(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.JU("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.JU("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cD,A.a4,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f9Y(0,0.002,D.fp,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fQF("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fQF("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fQF("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f9Y(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.JU("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.en(A.bg,!1,s,A.aC,"__kiapo_video__",r,24,A.bl,A.a4,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cg,D.lg,0.77,0.115,0.492))
i.push(C.JU("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.JU("Jina:",A.bg,p,13,A.bl,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fQE("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.f9w(0.195,0.7130000000000001,0.62,n))
i.push(C.JU("Sahihi:",A.bg,p,13,A.bl,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.en(A.bg,!1,s,A.aC,"marriage_sign_rais",0,24,A.bl,A.a4,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,0.38,0.21500000000000002,0.73))
i.push(C.f9w(0.21500000000000002,0.795,0.38,n))
i.push(C.JU("Tarehe:",A.bg,p,13,A.bl,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fQE("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.h9u()))
i.push(C.f9w(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f9Y(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.JU("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rd(4294967035,t,0,0,j,l,D.pO,"","",u,D.dc)
return C.Ba(t,t,t,t,D.nT,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
afl(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afl=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eIU)
w=1
break}w=3
return B.b(C.Ul(!0),$async$afl)
case 3:w=4
return B.b(C.aYF(p),$async$afl)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hew(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bW(D.ba3,null,new C.fnk(p),f,!0,!0,!1,A.lh,!1,!1,x.N),$async$afl)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.c9(null,null,!0,null,new C.fnl(),f,null,!0,!0,x.y),$async$afl)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fT3(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fT3(p))
case 1:return B.h(u,v)}})
return B.i($async$afl,v)},
faI:function faI(){},
c6y:function c6y(){},
fsu:function fsu(d){this.a=d},
fsv:function fsv(){},
fnk:function fnk(d){this.a=d},
fni:function fni(d){this.a=d},
fnj:function fnj(d){this.a=d},
fnl:function fnl(){},
fng:function fng(d){this.a=d},
fnh:function fnh(d){this.a=d},
aoZ:function aoZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCj:function aCj(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e48:function e48(d){this.a=d},
e46:function e46(d){this.a=d},
e47:function e47(d){this.a=d},
e49:function e49(d){this.a=d},
e4a:function e4a(d){this.a=d},
wc(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.en(e,!1,f,A.aC,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,l,m,n)},
h97(d,e,f){var w=4291404327
return B.a([C.pS(0,f,D.eI,w,2,"ring_l",f,d-f*0.42,e),C.pS(0,f,D.eI,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
f8X(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pS(4294967288,f,D.eI,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pS(h,s,D.eI,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pS(h,f*0.46,D.eI,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pS(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
f8W(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.en(h,!1,k,A.aC,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cD,A.O,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cg,D.cQ,g,e,f)},
bxE(d,e,f,g){return C.pS(0,0.002,D.fp,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
h96(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pS(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wc(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
heh(){var w=new B.S(Date.now(),0,!1),v=new C.ftA()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.by(w)},
h98(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wc(r+".",A.bg,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.f8W("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.bxE(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wc("Sahihi:",A.bg,j,15,A.a4,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a4,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,s,t,g-0.004),C.bxE(t,g+0.044,s,w)],x.u)},
afN(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d5G,D.ccx,D.cZQ,D.d0D],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gah(s[w]);v.C();){u=v.gU(0)
if(u.a===d)return u}return null},
fPY(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fvg(d.d),v=B.a([C.en(A.bg,!1,4279310375,A.aC,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,1,0,0)],x.u)
A.d.v(v,C.hKe(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hKe(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wc("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.h97(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.h97(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.f8X(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.f8X(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wc("\ud83c\udf33",A.L,4279898632,22,A.a4,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pS(0,0.062,D.eI,b1,1.6,"crest_o",0.11,0.445,0.012),C.pS(0,0.046,D.eI,b1,1,"crest_i",0.084,0.458,0.02),C.wc("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pS(0,0.002,D.fp,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pS(b9,0.016,D.kP,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pS(0,0.002,D.fp,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wc("TAREHE:",A.bg,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.f8W("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.heh()),C.bxE(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wc(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pS(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pS(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.en(A.bg,!1,b9,A.aC,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cs,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cg,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pS(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.en(A.L,!1,c0,A.aC,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cg,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.h96(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wc(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.f8W("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iW
$.iW=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iW
$.iW=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eG(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bl,A.aC,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cg,0,"","","","","",!1,0),j,new C.eG(""+1000*f+"_"+e,D.eZ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a4,A.bl,A.aC,b6,A.bg,a9,D.fp,0,b5,0.8,0,!1,g,0,D.cg,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iW
$.iW=p+1
i=Date.now()
h=$.iW
$.iW=h+1
g=Date.now()
f=$.iW
$.iW=f+1
e=Date.now()
a3=$.iW
$.iW=a3+1
A.d.v(d,B.a([new C.eG(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aC,b7,A.dK,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*i+"_"+h,D.eZ,a1,a2,0.046,0.025875,"",24,A.a4,A.bl,A.aC,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aC,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cg,0,"","","","","",!1,0),new C.eG(""+1000*e+"_"+a3,D.eZ,a0,k,a1+0.046-a0,l,"",24,A.a4,A.bl,A.aC,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cg,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.h96("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a3w||w===D.a3y||w===D.a3v||w===D.a3x){w=t-0.008
A.d.v(c2,C.f8X(0.21,w,0.044,!0,b0))
A.d.v(c2,C.f8X(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pS(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.pS(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pS(0,0.0022,D.fp,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wc("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wc("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.h98("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.h98("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pS(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wc("MWANDISHI",A.bg,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wc("Jina:",A.bg,b9,15,A.a4,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.f8W("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.bxE(0.215,p,0.3116,b5),C.wc("Sahihi:",A.bg,b9,15,A.a4,0.028,0,"mw_sl",0.09,0.5,w),C.en(A.bg,!1,b6,A.aC,"marriage_sign_mwandishi",0,24,A.bl,A.a4,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,0.3161999999999999,0.5738,s-0.044),C.bxE(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pS(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wc("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hVR(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fTH(d.d),p=new C.ftw(s),o=new C.ftx(s),n=d.z,m=n===D.a3w||n===D.a3y||n===D.a3v||n===D.a3x,l=n===D.aD9||n===D.a3z||n===D.aDa,k=B.bY(0,B.fL(q,A.A,t,t,A.cn,A.bQ,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a3z?26:16
i.push(new C.ftz().$1$size(w))}if(n===D.aDb)i.push(D.fmK)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hK,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ao)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aM7,p.$1$w(0.9),D.aM7,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b5L,t,n,w,t,t,A.n),t,t,t,t,A.ah_,t,t,t))
i.push(A.ao)
i.push(new C.fty(r).$1("NIMETOWE"))
i.push(A.fV)
v=J.e1(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.Lg,new B.co(A.aQ,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d8,new B.bE(1,A.bi,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b3)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.q,B.a([k,new B.C(A.afA,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hdC(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.afN(e,t)
if(r==null)r=A.d.gL(D.G6)
w=C.cC()
v=C.rd(r.e,t,0,0,C.fPY(r,0.165,y.O,D.d1c,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pO,"","",s,D.dc)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ba(t,t,t,t,D.nT,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hdD(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.afN(e,t)
if(r==null)r=A.d.gL(D.G6)
w=C.cC()
v=C.rd(r.e,t,0,0,C.fPY(r,0.165,y.f,D.cY2,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pO,"","",s,D.dc)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ba(t,t,t,t,D.nT,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bBA(d,e,f){var w=0,v=B.j(x.T),u
var $async$bBA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bW(A.K,null,new C.fF2(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBA,v)},
afm(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afm=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fno(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Ks,null,new C.fnp(p),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afm)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hy())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBA(d,"Hati ya Kuhowa",D.G6),$async$afm)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$afm)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hdC(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afm,v)},
afn(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$afn=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fns(),q),q.k("H.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Ks,null,new C.fnt(p),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afn)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hy())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBA(d,"Hati ya Kuhoweya",D.G6),$async$afn)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$afn)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hdD(r,s))
case 1:return B.h(u,v)}})
return B.i($async$afn,v)},
afo(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$afo=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fnw(),n),n.k("H.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(D.Ks,null,new C.fnx(m),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afo)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hy())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bBA(d,"Malipo ya Awamu ya Mahari",D.PD),$async$afo)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Tafuta jimbo\u2026","",A.jS,"Chagua jimbo"),$async$afo)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.afN(s,D.PD)
if(q==null)q=A.d.gL(D.PD)
n=C.cC()
p=C.rd(q.e,null,0,0,C.fPY(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cTd,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pO,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dc)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ba(null,null,null,null,D.nT,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
xa:function xa(d,e){this.a=d
this.b=e},
jg:function jg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
ftA:function ftA(){},
ftw:function ftw(d){this.a=d},
fty:function fty(d){this.a=d},
ftz:function ftz(){},
ftx:function ftx(d){this.a=d},
fF2:function fF2(d,e){this.a=d
this.b=e},
acb:function acb(d,e,f){this.c=d
this.d=e
this.a=f},
dUR:function dUR(d,e,f){this.a=d
this.b=e
this.c=f},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
abB:function abB(d,e,f){this.c=d
this.d=e
this.a=f},
fno:function fno(){},
fnp:function fnp(d){this.a=d},
fnm:function fnm(d){this.a=d},
fnn:function fnn(d){this.a=d},
fns:function fns(){},
fnt:function fnt(d){this.a=d},
fnq:function fnq(d){this.a=d},
fnr:function fnr(d){this.a=d},
fnw:function fnw(){},
fnx:function fnx(d){this.a=d},
fnu:function fnu(d){this.a=d},
fnv:function fnv(d){this.a=d},
JX(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.en(e,!1,f,A.aC,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,k,l,m)},
Cd(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.en(A.bg,!1,4279310375,A.aC,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a4,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cg,D.eZ,j,k,l)},
h9O(d,e,f){return C.Cd(0,0.002,D.fp,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bxO(d,e,f,g,h){return B.a([C.Cd(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.JX(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fQJ(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cd(0,0.002,D.fp,g,1,"orn_l_"+t,u,d,v),C.Cd(h,0.016,D.kP,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cd(0,0.002,D.fp,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0g(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.JX(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.en(A.L,!1,j,A.aC,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cD,A.O,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cg,D.cQ,t,u,g-0.002),C.h9O(u,g+0.018,t)],x.u)},
h9P(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cd(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cd(w,0.024,D.kP,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cd(w,0.024,D.kP,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.JX(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bxN(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.JX("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_"+d,0,24,A.bl,A.a4,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cg,D.eZ,v,w,f-0.006),C.h9O(w,f+0.016,v)],x.u)},
fTI(d){var w,v
for(w=0;w<19;++w){v=D.PQ[w]
if(v.a===d)return v}return null},
hY7(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.afN(A.a.b_(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.afN(A.a.b_(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b_(k,18)
w=C.afN(u,D.PD)
v=w==null?l:w.d
if(v==null){w=C.afN(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fTI(A.a.b_(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.haD.a8(0)
$.haQ.a8(0)
t=C.fvg(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fUM(d){var w=0,v=B.j(x.T),u
var $async$fUM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bW(A.K,null,new C.fGv(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUM,v)},
xd:function xd(d,e){this.a=d
this.b=e},
nv:function nv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bhq:function bhq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fGv:function fGv(){},
ace:function ace(d){this.a=d},
e9n:function e9n(d,e){this.a=d
this.b=e},
e9m:function e9m(d){this.a=d},
e9l:function e9l(d,e){this.a=d
this.b=e},
adT:function adT(d,e,f){this.c=d
this.d=e
this.a=f},
fTH(d){return $.haQ.ci(0,d,new C.fvi(d))},
fvg(d){return $.haD.ci(0,d,new C.fvh(d))},
fx(d){return B.fKh(d>>>16&255,d>>>8&255,d&255,255)},
hNg(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hbT(4294570461,4293910718,4284234270,u)
case 1:return C.hbT(4294635750,4293975240,t,4292912216)
case 2:w=C.f7x(s,4294505966,r)
C.bxy(w,14,16,p)
C.kn(w,8,9,464,836,u,1.2)
C.C9(w,2,2,1,1,u,10)
C.C9(w,478,2,-1,1,u,10)
C.C9(w,2,852,1,-1,u,10)
C.C9(w,478,852,-1,-1,u,10)
return w
case 3:return C.f7x(4294966515,4294373082,4289102906)
case 4:return C.hI3(C.f7x(4294376440,4293653998,4290287194))
case 5:w=C.f7x(4294965238,4294437098,4288444980)
C.bxy(w,14,16,4283043359)
C.kn(w,6,7,468,840,u,1)
C.kn(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,n,4294175448)
C.rx(v,n)
C.kn(v,24,24,432,806,4286209070,1)
C.a04(v,12,12,468,12,o,3,20)
C.a04(v,12,842,468,842,o,3,20)
C.a04(v,12,12,12,842,o,3,20)
C.a04(v,468,12,468,842,o,3,20)
return v
case 7:return C.hG8(4294440434,4293518297,4280228630,r)
case 8:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,m,4293911504)
C.rx(v,m)
C.kn(v,28,28,424,798,l,1)
C.ffZ(v,28,28,l,k)
C.ffZ(v,452,28,l,k)
C.ffZ(v,28,826,l,k)
C.ffZ(v,452,826,l,k)
return v
case 9:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,j,4294111986)
C.rx(v,j)
C.kn(v,18,18,444,818,4292401368,0.7)
B.iG(v,!0,C.fx(p),0,13,0,853)
return v
case 10:return C.hK0(i,4294173372)
case 11:return C.hL5(4294439140,4293449662)
case 12:return C.hG0(h,4294239432)
case 13:return C.hKx(4294244340,4293193448)
case 14:return C.hOO(4294505710,4293780694)
case 15:return C.f6x(4294966259,4294439138,o,p,q)
case 16:return C.f6x(4294966776,4294178544,o,g,g)
case 17:return C.f6x(4294965493,4294504170,o,4286200650,q)
case 18:return C.f6x(4294966519,4294373862,o,p,p)
case 19:return C.hJ8()
case 20:return C.hJ9()
case 21:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,h,4293976768)
C.rx(v,h)
C.bxy(v,14,16,p)
B.iG(v,!0,C.fx(u),4,475,4,9)
B.iG(v,!0,C.fx(u),4,475,844,849)
B.iG(v,!0,C.fx(u),4,9,4,849)
B.iG(v,!0,C.fx(u),470,475,4,849)
C.a04(v,10,12,470,12,u,2,16)
C.a04(v,10,842,470,842,u,2,16)
C.a04(v,10,12,10,842,u,2,18)
C.a04(v,470,12,470,842,u,2,18)
C.C9(v,2,2,1,1,t,10)
C.C9(v,478,2,-1,1,t,10)
C.C9(v,2,852,1,-1,t,10)
C.C9(v,478,852,-1,-1,t,10)
C.kn(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,s,4294438872)
C.rx(v,s)
C.kn(v,14,16,452,822,o,2.2)
C.kn(v,22,24,436,806,o,1)
C.fS0(v,!1,!1,o,p,p,36,14,16)
C.kz(v,240,20,7,o,!0)
C.kz(v,240,834,7,o,!0)
C.kz(v,18,427,7,o,!0)
C.kz(v,462,427,7,o,!0)
return v
case 23:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,i,4293910712)
C.rx(v,i)
B.iG(v,!0,C.fx(u),0,479,0,20)
B.iG(v,!0,C.fx(u),0,479,834,853)
B.iG(v,!0,C.fx(u),0,20,0,853)
B.iG(v,!0,C.fx(u),460,479,0,853)
B.iG(v,!0,C.fx(f),5,474,5,9)
B.iG(v,!0,C.fx(f),5,474,844,848)
B.iG(v,!0,C.fx(f),5,9,5,848)
B.iG(v,!0,C.fx(f),470,474,5,848)
C.kn(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hk(q,q,A.c9,0,A.e_,854,q,0,3,q,A.c9,480,!1)
C.y2(v,e,4294174404)
C.rx(v,e)
C.bxy(v,14,16,p)
B.iG(v,!0,C.fx(u),3,476,3,8)
B.iG(v,!0,C.fx(u),3,476,845,850)
B.iG(v,!0,C.fx(u),3,8,3,850)
B.iG(v,!0,C.fx(u),471,476,3,850)
C.kn(v,9,10,462,834,t,1)
C.kn(v,14,16,452,822,u,1.8)
C.kz(v,240,8,4,u,!0)
C.kz(v,240,846,4,u,!0)
C.kz(v,8,427,4,u,!0)
C.kz(v,472,427,4,u,!0)
C.kz(v,8,8,3,t,!0)
C.kz(v,472,8,3,t,!0)
C.kz(v,8,846,3,t,!0)
C.kz(v,472,846,3,t,!0)
return v}},
y2(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.k.V(q*w+p*t),0,255)
u=A.o.D(A.k.V(o*w+n*t),0,255)
w=A.o.D(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kB(d,!1,A.d9,new B.Rg(s),r,A.cW,1,0,w-1,k,k);++k}},
rx(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eT()
n.dI(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iB()
v=A.o.D(A.k.O(s.gb6(s))-3,0,255)
r=A.o.D(A.k.O(s.gbf())-3,0,255)
q=A.o.D(A.k.O(s.gbg(s))-2,0,255)
p=d.a
if(p!=null)p.jw(u,t,v,r,q,255)}},
kn(d,e,f,g,h,i,j){var w,v=null,u=C.fx(i),t=e+g
B.kB(d,!0,A.d9,u,v,A.cW,j,e,t,f,f)
w=f+h
B.kB(d,!0,A.d9,u,v,A.cW,j,e,t,w,w)
B.kB(d,!0,A.d9,u,v,A.cW,j,e,e,f,w)
B.kB(d,!0,A.d9,u,v,A.cW,j,t,t,f,w)},
C9(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,2,e,e+g*j,f,f)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,1,w,e+g*t,v,v)
B.kB(d,!0,A.d9,C.fx(i),u,A.cW,1,w,w,v,f+h*t)},
hbT(d,e,f,g){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
B.iG(v,!0,C.fx(f),0,479,0,28)
B.iG(v,!0,C.fx(f),0,479,826,853)
B.iG(v,!0,C.fx(f),0,28,0,853)
B.iG(v,!0,C.fx(f),452,479,0,853)
C.kn(v,5,5,470,844,g,1.1)
C.kn(v,28,28,424,798,g,1.6)
C.C9(v,2,2,1,1,g,11)
C.C9(v,478,2,-1,1,g,11)
C.C9(v,2,852,1,-1,g,11)
C.C9(v,478,852,-1,-1,g,11)
return v},
f7x(d,e,f){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
C.kn(v,14,16,452,822,f,1.6)
C.kn(v,20,22,440,810,f,0.8)
return v},
bxy(d,e,f,g){var w,v=C.fx(g)
B.iG(d,!0,v,0,479,0,f-1)
w=854-f
B.iG(d,!0,v,0,479,w,853);--w
B.iG(d,!0,v,0,e-1,f,w)
B.iG(d,!0,v,480-e,479,f,w)},
hI3(d){var w,v,u=4291404327
C.bxy(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kz(d,w,8,3,u,!0)
C.kz(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kz(d,7,v,3,u,!0)
C.kz(d,473,v,3,u,!0)}return d},
fiY(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j8(e,f),new B.j8(e+g*n,f),new B.j8(e,f+h*n)],t)
B.a0Q(d,C.fx(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j8(s,u),new B.j8(e+g*v,u),new B.j8(s,f+h*v)],t)
B.a0Q(d,C.fx(k),t)
t=A.k.V(n*0.39)
C.kz(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kz(d,e+g*t,f+h*3,4,k,!0)
C.kz(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kz(d,e+g*t,f,5,k,!0)
C.kz(d,e,f+h*t,5,k,!0)}},
fS0(d,e,f,g,h,i,j,k,l){var w,v
C.fiY(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fiY(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fiY(d,k,v,1,-1,e,f,g,h,i,j)
C.fiY(d,w,v,-1,-1,e,f,g,h,i,j)},
a04(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kV(d,!0,A.d9,new B.qK(p),null,A.cW,j,r,q)}},
fi6(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kB(d,!0,A.d9,new B.qK(o),null,A.cW,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kB(d,!0,A.d9,new B.qK(o),null,A.cW,1.4,q,q,p,p+h*r)}},
hG8(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hk(o,o,A.c9,0,A.e_,854,o,0,3,o,A.c9,480,!1)
C.y2(n,d,e)
C.rx(n,d)
C.kn(n,20,20,440,814,f,1.2)
C.fi6(n,0,0,1,1,g)
C.fi6(n,480,0,-1,1,g)
C.fi6(n,0,854,1,-1,g)
C.fi6(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.k.V(240+24*r)
q=A.k.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kB(n,!0,A.d9,new B.qK(p),o,A.cW,1.2,240,r,60,q)}return n},
ffZ(d,e,f,g,h){var w
C.flx(d,!0,C.fx(g),13,e,f)
C.flx(d,!0,C.fx(g),9,e,f)
w=B.a([new B.j8(e,f-4),new B.j8(e+4,f),new B.j8(e,f+4),new B.j8(e-4,f)],x.J)
B.a0Q(d,C.fx(h),w)},
kz(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j8(e,v),new B.j8(u,f),new B.j8(e,t),new B.j8(s,f)],x.J)
if(i){B.a0Q(d,C.fx(h),r)
return}B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,e,u,v,f)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,u,e,f,t)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,e,s,t,f)
B.kB(d,!0,A.d9,C.fx(h),w,A.cW,1,s,e,f,v)},
f6w(d,e,f,g,h,i,j){var w,v=B.a([new B.j8(e,f),new B.j8(e+g*28,f),new B.j8(e,f+h*28)],x.J)
B.a0Q(d,C.fx(i),v)
v=e+g*14
w=f+h*14
C.kz(d,v,w,6,j,!0)
C.kz(d,v,w,3,i,!0)},
f6x(d,e,f,g,h){var w=null,v=B.hk(w,w,A.c9,0,A.e_,854,w,0,3,w,A.c9,480,!1)
C.y2(v,d,e)
C.rx(v,d)
C.kn(v,18,18,444,818,f,2)
C.kn(v,26,26,428,802,f,0.9)
if(h!=null)B.iG(v,!0,C.fx(h),28,451,28,34)
C.f6w(v,18,18,1,1,g,f)
C.f6w(v,462,18,-1,1,g,f)
C.f6w(v,18,836,1,-1,g,f)
C.f6w(v,462,836,-1,-1,g,f)
return v},
hJ8(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hk(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
C.y2(r,u,4294240980)
C.rx(r,u)
C.kn(r,10,12,460,830,t,3.2)
C.kn(r,18,20,444,814,s,1.2)
C.kn(r,24,26,432,802,t,1.8)
C.fS0(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kz(r,w,16,3,t,!0)
C.kz(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kz(r,16,w,3,t,!0)
C.kz(r,464,w,3,t,!0)}return r},
hJ9(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hk(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
C.y2(p,s,4294373080)
C.rx(p,s)
C.kn(p,16,18,448,818,r,2.4)
C.kn(p,24,26,432,802,4286209044,1)
w=new C.f8O(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fS0(p,!1,!0,r,q,q,34,16,18)
return p},
bye(d,e,f,g,h,i){B.iG(d,!0,C.fx(i),e,e+g,f,f+h)},
bz3(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.k.V(v*l+u*m),0,255)
j=A.o.D(A.k.V(t*l+s*m),0,255)
l=A.o.D(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kB(d,!1,A.d9,new B.Rg(i),null,A.cW,1,e,w,l,l)}},
hK_(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kB(d,!1,A.d9,new B.qK(r),null,A.cW,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kB(d,!1,A.d9,new B.qK(r),null,A.cW,1,t,t,f,s);++q}},
hK0(d,e){var w,v,u=null,t=B.hk(u,u,A.c9,0,A.e_,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hK_(t,v,w,30,D.cMo,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bye(t,44,44,392,766,d)
C.bz3(t,44,44,392,766,d,e)
C.rx(t,d)
C.kn(t,44,44,392,766,4292128567,2.2)
C.kn(t,50,50,380,754,4279898632,0.8)
return t},
hL4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kz(d,e,f,7,h,!0)
C.kz(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.6,w,u,v,t)
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kB(d,!0,A.d9,new B.qK(p),o,A.cW,1.2,w,v,q,q)}break
default:B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.5,e-8,e+8,f,f)
B.kB(d,!0,A.d9,C.fx(h),o,A.cW,1.5,e,e,f-8,f+8)
B.kV(d,!0,A.d9,C.fx(h),o,A.cW,2,e,f)}},
hL5(d,e){var w,v,u,t,s=null,r=B.hk(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
B.iG(r,!0,C.fx(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hL4(r,u,v,w,4292391514)}C.bye(r,46,46,388,762,d)
C.bz3(r,46,46,388,762,d,e)
C.rx(r,d)
C.kn(r,46,46,388,762,4291404327,1.8)
return r},
h7m(d,e,f,g){C.flx(d,!0,C.fx(g),16,e,f)
C.flx(d,!0,C.fx(g),11,e,f)
C.kz(d,e,f,6,g,!0)
B.kB(d,!0,A.d9,C.fx(g),null,A.cW,1.3,e-14,e+14,f,f)
B.kB(d,!0,A.d9,C.fx(g),null,A.cW,1.3,e,e,f-14,f+14)},
hG0(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hk(v,v,A.c9,0,A.e_,854,v,0,3,v,A.c9,480,!1)
B.iG(s,!0,C.fx(4280948752),0,479,0,853)
B.iG(s,!0,C.fx(u),0,479,0,78)
B.iG(s,!0,C.fx(u),0,479,776,853)
for(w=28;w<460;w+=44){C.h7m(s,w,39,t)
C.h7m(s,w,815,t)}C.bye(s,38,92,404,670,d)
C.bz3(s,38,92,404,670,d,e)
C.rx(s,d)
C.kn(s,38,92,404,670,t,1.8)
C.kn(s,45,99,390,656,4287322667,0.8)
return s},
hKw(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j8(e,f),new B.j8(q-5,w),new B.j8(q,f-(18-Math.abs(r)*3)),new B.j8(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a0Q(d,new B.qK(o),p)}B.kV(d,!0,A.d9,C.fx(4292128567),null,A.cW,3,e,f)},
hKx(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hk(s,s,A.c9,0,A.e_,854,s,0,3,s,A.c9,480,!1)
C.y2(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kB(q,!0,A.d9,new B.qK(v),s,A.cW,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kB(q,!0,A.d9,new B.qK(u),s,A.cW,1.1,v,v,0,853)}B.iG(q,!0,C.fx(r),0,479,0,70)
B.iG(q,!0,C.fx(r),0,479,798,853)
for(t=0;t<5;++t)C.hKw(q,70+t*85,48,4292128567)
C.bye(q,48,78,384,712,d)
C.bz3(q,48,78,384,712,d,e)
C.rx(q,d)
C.kn(q,48,78,384,712,4291404327,1.6)
return q},
hOO(d,e){var w,v,u,t=null,s=4279970378,r=B.hk(t,t,A.c9,0,A.e_,854,t,0,3,t,A.c9,480,!1)
B.iG(r,!0,C.fx(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kz(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kV(r,!0,A.d9,new B.qK(u),t,A.cW,1,v,w)}C.bye(r,40,40,400,774,d)
C.bz3(r,40,40,400,774,d,e)
C.rx(r,d)
C.kn(r,40,40,400,774,4291058750,2)
C.kn(r,48,48,384,758,s,0.8)
return r},
kJ:function kJ(d,e){this.a=d
this.b=e},
fvi:function fvi(d){this.a=d},
fvh:function fvh(d){this.a=d},
f8O:function f8O(d){this.a=d},
fvW(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hKZ(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fQC(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.om(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.afJ(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aee(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aee=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$aee)
case 3:n=g
if(A.a.i(n).length===0)throw B.U("AI is not available right now. Please try again later.")
t=B.mY(n)
if(e==null)s=A.hj
else{r=C.hKZ(e)
s=B.a([new B.a_5(A.cS.gcu().aI(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qB(t,d,s,E.ED),$async$aee)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.U(q!=null&&B.Km(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aee,v)},
bAH(d){return C.hXO(d)},
hXO(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bAH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ad(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aee(r,null),$async$bAH)
case 7:q=f
p=C.fQC(q)
if(p==null){u=d
w=1
break}o=d.aAX(p)
if(o.r.length===0||A.d.aH(o.r," ").length<A.d.aH(d.r," ").length*0.5){u=d
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
return B.i($async$bAH,v)},
hbd(d){var w,v=F.fT_(d)
v=B.aJ(v,"book","newspaper")
if(F.a18(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fzR(d,e,f,g){return C.hZF(d,e,f,g)},
hZF(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fzR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fvW(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.heF()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aee('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hbd(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fzR)
case 3:r=m.fQC(i)
if(r==null)throw B.U(y.S)
q=new C.z2(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aAX(r)
t=q.r
if(t.length===0)throw B.U("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a18(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a18(A.d.aH(t," "))==="sw"?C.bAH(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fzR,v)},
bAb(d,e,f,g,h){return C.hVq(d,e,f,g,h)},
hVq(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bAb=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fH(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.heF()
k=A.R.ao(d.ad(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aee('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hbd(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bAb)
case 3:p=j.fQC(a0)
if(p==null)throw B.U(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cw(o)){n=d.aAX(B.a1(o,x.N,x.z))
m=A.R.ao(n.ad(),null)!==A.R.ao(d.ad(),null)}else{n=d
m=!1}w=m&&F.a18(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bAH(n),$async$bAb)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a6X(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAb,v)},
a6X:function a6X(d,e,f){this.a=d
this.b=e
this.c=f},
i1m(d,e){return B.a5(d,!1).ce(B.ej(new C.fGG(e),!0,null,x.H))},
fGG:function fGG(d){this.a=d},
UR:function UR(d,e){this.c=d
this.a=e},
aCC:function aCC(d,e,f,g,h,i,j,k){var _=this
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
ecF:function ecF(d){this.a=d},
ecE:function ecE(){},
ecG:function ecG(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecH:function ecH(){},
ech:function ech(d,e){this.a=d
this.b=e},
ecd:function ecd(d,e){this.a=d
this.b=e},
eco:function eco(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
ecq:function ecq(d){this.a=d},
ecj:function ecj(d,e){this.a=d
this.b=e},
eck:function eck(d,e){this.a=d
this.b=e},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
eci:function eci(d,e){this.a=d
this.b=e},
ecf:function ecf(d){this.a=d},
ecg:function ecg(d){this.a=d},
ecw:function ecw(d){this.a=d},
ecx:function ecx(d){this.a=d},
ecv:function ecv(d){this.a=d},
ecy:function ecy(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecz:function ecz(d){this.a=d},
ect:function ect(d){this.a=d},
ecA:function ecA(d){this.a=d},
ecs:function ecs(d){this.a=d},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecr:function ecr(d,e){this.a=d
this.b=e},
ecC:function ecC(d){this.a=d},
ece:function ece(d,e){this.a=d
this.b=e},
fuS(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fuS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h8Q){w=1
break}r=new C.fuT()
t=4
q=x.s
w=7
return B.b(B.iI(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fuS)
case 7:$.h8Q=!0
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
return B.i($async$fuS,v)},
bAy(d){return A.Gr[B.mp(d)-1]+", "+A.oD[B.bG(d)-1]+" "+B.bQ(d)+", "+B.by(d)},
hNU(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.d9I[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fTo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fv(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fta(),B.T(v).k("a2<1>")))
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
continue}o=new C.ftc(j,h)
n=new C.ftb(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iR(o.$1(l)))
j.a+=l}return u},
fQm(d,e){var w=new C.f8p()
return A.d.cI(e,0,new C.f8n(w))>=A.d.cI(d,0,new C.f8o(w))},
h61(d){var w,v,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ap(w,0))
v=d.b
u.E(new B.ap(w,v-46))
u.E(new B.ap(w-46,v))
u.E(new B.ap(0,v))
u.E(new B.ap(0,46))
u.E(new B.bF())
return u},
z2:function z2(d,e,f,g,h,i,j,k,l,m){var _=this
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
cad:function cad(d){this.a=d},
cab:function cab(){},
cac:function cac(){},
rZ:function rZ(d,e){this.a=d
this.b=e},
AY:function AY(d,e){this.a=d
this.b=e},
l7:function l7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fuT:function fuT(){},
fta:function fta(){},
ftc:function ftc(d,e){this.a=d
this.b=e},
ftb:function ftb(d,e,f){this.a=d
this.b=e
this.c=f},
f8p:function f8p(){},
f8q:function f8q(){},
f8n:function f8n(d){this.a=d},
f8o:function f8o(d){this.a=d},
b_a:function b_a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cae:function cae(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
caf:function caf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cag:function cag(d){this.a=d},
baE:function baE(d){this.a=d},
baD:function baD(d,e){this.b=d
this.a=e},
bs4:function bs4(d){this.a=d},
b7a:function b7a(d,e){this.b=d
this.a=e},
bpB:function bpB(d,e){this.b=d
this.a=e},
hgz(d,e){return B.a5(d,!1).ce(B.ej(new C.fGJ(e,null),!0,null,x.E))},
fGJ:function fGJ(d,e){this.a=d
this.b=e},
UU:function UU(d,e,f){this.c=d
this.d=e
this.a=f},
aCG:function aCG(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
edQ:function edQ(){},
edR:function edR(d){this.a=d},
edP:function edP(d,e){this.a=d
this.b=e},
edD:function edD(d){this.a=d},
edE:function edE(d){this.a=d},
edK:function edK(d){this.a=d},
edL:function edL(d,e){this.a=d
this.b=e},
edI:function edI(d){this.a=d},
edJ:function edJ(d,e,f){this.a=d
this.b=e
this.c=f},
edF:function edF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edM:function edM(d,e){this.a=d
this.b=e},
edH:function edH(d,e){this.a=d
this.b=e},
edN:function edN(d){this.a=d},
edG:function edG(d,e){this.a=d
this.b=e},
edO:function edO(d,e){this.a=d
this.b=e},
baa:function baa(d,e,f){this.b=d
this.c=e
this.a=f},
i1s(d){return B.a5(d,!1).ce(B.ej(new C.fGZ(),!0,null,x.I))},
by_(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fRK(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fGZ:function fGZ(){},
ZZ:function ZZ(d){this.a=d},
ok:function ok(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aE2:function aE2(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aN=_.aE=_.az=_.Z=_.b5=_.bi=_.y2=0
_.b3=null
_.b0=0.25
_.ba=null
_.bJ=0.5
_.aR=1
_.c6=_.bS=_.bj=0
_.cW=_.cT=!1
_.c=_.a=null},
eN4:function eN4(d){this.a=d},
eLX:function eLX(d,e){this.a=d
this.b=e},
eMk:function eMk(d,e){this.a=d
this.b=e},
eMu:function eMu(d){this.a=d},
eLG:function eLG(d){this.a=d},
eLH:function eLH(d){this.a=d},
eLE:function eLE(d){this.a=d},
eLF:function eLF(d){this.a=d},
eMd:function eMd(d,e){this.a=d
this.b=e},
eMe:function eMe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eMq:function eMq(d,e,f){this.a=d
this.b=e
this.c=f},
eMp:function eMp(d,e){this.a=d
this.b=e},
eMr:function eMr(d,e){this.a=d
this.b=e},
eMo:function eMo(d,e){this.a=d
this.b=e},
eMt:function eMt(d,e,f){this.a=d
this.b=e
this.c=f},
eMs:function eMs(d,e){this.a=d
this.b=e},
eLw:function eLw(d){this.a=d},
eLx:function eLx(d){this.a=d},
eLy:function eLy(d){this.a=d},
eLv:function eLv(){},
eLz:function eLz(d,e){this.a=d
this.b=e},
eLu:function eLu(d,e){this.a=d
this.b=e},
eLB:function eLB(){},
eLA:function eLA(d,e){this.a=d
this.b=e},
eLt:function eLt(d,e){this.a=d
this.b=e},
eLq:function eLq(d,e){this.a=d
this.b=e},
eLC:function eLC(d){this.a=d},
eLs:function eLs(d,e){this.a=d
this.b=e},
eLD:function eLD(d){this.a=d},
eLr:function eLr(d,e){this.a=d
this.b=e},
eMU:function eMU(d,e){this.a=d
this.b=e},
eN0:function eN0(d){this.a=d},
eN1:function eN1(d,e){this.a=d
this.b=e},
eN2:function eN2(){},
eMV:function eMV(d,e){this.a=d
this.b=e},
eMT:function eMT(d,e){this.a=d
this.b=e},
eMW:function eMW(d,e){this.a=d
this.b=e},
eMS:function eMS(d,e){this.a=d
this.b=e},
eMX:function eMX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eMR:function eMR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eMY:function eMY(d){this.a=d},
eMZ:function eMZ(d,e){this.a=d
this.b=e},
eN_:function eN_(d){this.a=d},
eMQ:function eMQ(d){this.a=d},
eMD:function eMD(d){this.a=d},
eME:function eME(d){this.a=d},
eMC:function eMC(d,e){this.a=d
this.b=e},
eMx:function eMx(d,e){this.a=d
this.b=e},
eMF:function eMF(d){this.a=d},
eMI:function eMI(d){this.a=d},
eMB:function eMB(d){this.a=d},
eMJ:function eMJ(d){this.a=d},
eMK:function eMK(d){this.a=d},
eML:function eML(d){this.a=d},
eMM:function eMM(d){this.a=d},
eMA:function eMA(d){this.a=d},
eMN:function eMN(d){this.a=d},
eMz:function eMz(d){this.a=d},
eMO:function eMO(d,e){this.a=d
this.b=e},
eMy:function eMy(d,e){this.a=d
this.b=e},
eMP:function eMP(d){this.a=d},
eMG:function eMG(d){this.a=d},
eMH:function eMH(d){this.a=d},
eMh:function eMh(d){this.a=d},
eMg:function eMg(d){this.a=d},
eMi:function eMi(d,e){this.a=d
this.b=e},
eMf:function eMf(d,e){this.a=d
this.b=e},
eMj:function eMj(d){this.a=d},
eM9:function eM9(d){this.a=d},
eM8:function eM8(d){this.a=d},
eMa:function eMa(d){this.a=d},
eM7:function eM7(d){this.a=d},
eMb:function eMb(d,e){this.a=d
this.b=e},
eM6:function eM6(d,e){this.a=d
this.b=e},
eM5:function eM5(d,e){this.a=d
this.b=e},
eLO:function eLO(d){this.a=d},
eLP:function eLP(d){this.a=d},
eLQ:function eLQ(d){this.a=d},
eLR:function eLR(d){this.a=d},
eLS:function eLS(d){this.a=d},
eLT:function eLT(d){this.a=d},
eLU:function eLU(d){this.a=d},
eLV:function eLV(d){this.a=d},
eLW:function eLW(d){this.a=d},
eL9:function eL9(d){this.a=d},
eLa:function eLa(d){this.a=d},
eLb:function eLb(d){this.a=d},
eLc:function eLc(d){this.a=d},
eLd:function eLd(d){this.a=d},
eL8:function eL8(d){this.a=d},
eLe:function eLe(d){this.a=d},
eLf:function eLf(d){this.a=d},
eLI:function eLI(d){this.a=d},
eLJ:function eLJ(d){this.a=d},
eLK:function eLK(d){this.a=d},
eLL:function eLL(d){this.a=d},
eLM:function eLM(d){this.a=d},
eLj:function eLj(d){this.a=d},
eLk:function eLk(d){this.a=d},
eLl:function eLl(d){this.a=d},
eLm:function eLm(d){this.a=d},
eLn:function eLn(d){this.a=d},
eLi:function eLi(d){this.a=d},
eLo:function eLo(d){this.a=d},
eLh:function eLh(d){this.a=d},
eLp:function eLp(d){this.a=d},
eLg:function eLg(d){this.a=d},
eMc:function eMc(d){this.a=d},
eM4:function eM4(d){this.a=d},
eM0:function eM0(d){this.a=d},
eM_:function eM_(d){this.a=d},
eM1:function eM1(d,e){this.a=d
this.b=e},
eLZ:function eLZ(d,e){this.a=d
this.b=e},
eM2:function eM2(d,e){this.a=d
this.b=e},
eLY:function eLY(d,e){this.a=d
this.b=e},
eM3:function eM3(d){this.a=d},
eMn:function eMn(d){this.a=d},
eMm:function eMm(d,e,f){this.a=d
this.b=e
this.c=f},
eMl:function eMl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eMw:function eMw(d,e){this.a=d
this.b=e},
eMv:function eMv(d,e){this.a=d
this.b=e},
eLN:function eLN(d){this.a=d},
eN3:function eN3(d){this.a=d},
bdH:function bdH(d,e){this.b=d
this.a=e},
hXZ(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hY_(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kL(0,d),m=B.B(n,B.a3(n).k("H.E"))
if(m.length===0)return d
w=new B.fc("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.ap(d,v,n)
p=m[r].b
p=A.a.ap(d,n,p.index+p[0].length)
n=B.af("[*~^]",!0,!1,!1,!1)
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
v=t.index+t[0].length}n=w.a=n+A.a.b_(d,v)
return n.charCodeAt(0)==0?n:n},
byA(){var w=$.bxI,v=$.PA
$.PA=v+1
return w+"_"+v},
i5(d,e,f,g,h,i,j){return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bl,A.a4,"",h,C.byA(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cg,D.eZ,g,e,f)},
nL(d,e,f,g){var w=f*9
return C.i5(D.eI,d-f/2,e-w/32,f,w/16,g,0)},
hHF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bxI
p=$.PA
$.PA=p+1
w.push(new C.eG(q+"_"+p,D.eZ,0,r,1,0.0016,"",24,A.a4,A.bl,A.aC,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bxI
p=$.PA
$.PA=p+1
w.push(new C.eG(q+"_"+p,D.eZ,o,0,0.004,1,"",24,A.a4,A.bl,A.aC,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nL(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nL(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i5(D.be,0.08,0.08,0.5,0.003,v,0),C.i5(D.be,0.58,0.08,0.004,0.06,v,0),C.i5(D.be,0.58,0.14,0.34,0.003,v,0),C.i5(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i5(D.be,0.08,0.8,0.004,0.14,t,0),C.i5(D.be,0.08,0.94,0.6,0.003,t,0),C.nL(0.58,0.08,0.05,e),C.nL(0.92,0.22,0.05,e),C.nL(0.08,0.8,0.05,f),C.nL(0.68,0.94,0.05,f),C.nL(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i5(D.kP,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i5(D.kP,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i5(D.kP,0.7,0.8,0.22,0.12,w|1140850688,0),C.i5(D.kP,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nL(0.5,0.5,1.5,w|335544320),C.nL(0.5,0.5,1.15,w|402653184),C.nL(0.5,0.5,0.8,v|436207616),C.nL(0.95,0.05,0.4,v|855638016),C.nL(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nL(0.85,0.08,0.7,w|1140850688),C.nL(0.1,0.35,0.5,v|855638016),C.nL(0.9,0.62,0.55,v|771751936),C.nL(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i5(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i5(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i5(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i5(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nL(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nL(0.5,0.2,0.65,(w|3422552064)>>>0),C.nL(0.5,0.2,0.95,w|855638016),C.i5(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i5(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i5(D.jx,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i5(D.jx,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i5(D.jx,0.15,0.86,0.6,0.14,1712265002,0),C.nL(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cNI[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bxI
l=$.PA
$.PA=l+1
w.push(new C.eG(m+"_"+l,D.eZ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a4,A.bl,A.aC,k,A.bg,null,D.eI,q,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0))}w.push(C.nL(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i5(D.jx,0.35,-0.1,0.3,0.62,w|855638016,0),C.i5(D.jx,0.05,-0.1,0.3,0.55,v,-0.5),C.i5(D.jx,0.65,-0.1,0.3,0.55,v,0.5),C.nL(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i5(D.be,0.06,0.04,0.88,0.002,e,0),C.i5(D.be,0.06,0.96,0.88,0.002,e,0),C.i5(D.be,0.06,0.04,0.004,0.92,e,0),C.i5(D.be,0.936,0.04,0.004,0.92,e,0),C.i5(D.be,0.09,0.07,0.82,0.001,w,0),C.i5(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i5(D.jy,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i5(D.jy,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i5(D.jy,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i5(D.be,0,0,0.3,0.09,w|1140850688,0),C.i5(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i5(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i5(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i5(D.eI,0.62,0.02,0.5,0.16,v,0.6),C.i5(D.eI,0.78,0.12,0.4,0.12,u,0.9),C.i5(D.eI,-0.12,0.8,0.5,0.16,u,-0.6),C.i5(D.eI,-0.05,0.9,0.4,0.12,v,-0.9),C.nL(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i5(D.be,0.09,0.12,0.16,0.006,e,0),C.i5(D.be,0.05,0.03,0.9,0.001,w,0),C.i5(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hUu(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bxI=j
$.PA=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fqz()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.en(A.bg,!1,n,A.aC,"ngmy_quote_background",m,24,A.bl,A.a4,"",1,C.byA(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cg,D.lg,1,0,0))
if(a9)A.d.v(q,C.hHF(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.hXZ(B.aJ(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fqy(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a4))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a4))
if(a0!=null&&a0.length!==0)q.push(C.en(A.bg,!1,n,A.aC,"ngmy_quote_logo",m,24,A.bl,A.a4,a1,a3*9/16,C.byA(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cg,D.lg,a3,a4,a5))
return C.rd(s,r,0,0,q,j+"_slide",D.pO,"","","",D.dc)},
rc:function rc(d,e){this.a=d
this.b=e},
lV:function lV(d,e,f,g,h,i,j,k,l,m){var _=this
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
fqz:function fqz(){},
fqy:function fqy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hxN(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cbA(),x.N)
s=B.B(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bR()
w=w.h(d,"request")
return new C.z4(u,t,s,B.t(w==null?"":w))},
fye(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fye=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.h9c){w=1
break}$.h9c=!0
t=4
w=7
return B.b(B.aA(),$async$fye)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jq(p),k=k.gah(k),j=x.j,i=x.o;k.C();){o=k.gU(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aX(j.a(o.b));h.C();){m=h.gU(h)
l=C.hxN(m)
if(l!=null)J.cf(n,l)}$.Ca.ci(0,B.t(o.a),new C.fyf(n))}C.fRq()
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
return B.i($async$fye,v)},
fRq(){var w,v=new B.S(Date.now(),0,!1).bN(-12e8)
for(w=new B.dt($.Ca,$.Ca.r,$.Ca.e);w.C();)J.nh(w.d,new C.ffb(v))
$.Ca.bn($.Ca,new C.ffc())},
aMA(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aMA=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aMA)
case 6:s=a0
m=x.N
l=x.z
r=B.V(m,l)
for(k=new B.cJ($.Ca,B.a3($.Ca).k("cJ<1,2>")).gah(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aX(q.b);h.C();){o=h.gU(h)
g=o
J.cf(p,B.E(["at",g.a.a5().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aMA)
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
return B.i($async$aMA,v)},
hYA(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fRq()
w=$.Ca.ci(0,d,new C.fyh())
v=Date.now()
u=B.B(e,B.a3(e).k("cl.E"))
J.pk(w,0,new C.z4(new B.S(v,0,!1),f,u,g))
C.aMA()},
hYx(d){var w,v=$.Ca.h(0,d)
if(v==null||J.ck(v))return
w=J.cE(v)
w.cz(v,0)
if(w.gam(v))$.Ca.W(0,d)
C.aMA()},
z4:function z4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbA:function cbA(){},
fyf:function fyf(d){this.a=d},
ffb:function ffb(d){this.a=d},
ffc:function ffc(){},
fyh:function fyh(){},
hYC(d){return A.d.dM(D.vx,new C.fyk(d),new C.fyl())},
hxL(d){var w
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
hxK(d){var w
switch(d.a){case 0:w=D.ajn
break
case 1:w=A.xR
break
case 2:w=A.akv
break
case 3:w=I.aj0
break
case 4:w=A.ajT
break
case 5:w=A.lE
break
default:w=null}return w},
hKC(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.P3[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.P3[w]
if(!B.dr(v.toLowerCase(),t,0))u=B.dr(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hxM(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=B.V(u,t)
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
o.push(q)}return A.R.ao(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hYy(d,e,f,g,h){var w=new B.J(D.vx,new C.fyd(),x.eC).aH(0,", "),v=""+d,u=C.hex(h),t=F.frY(h),s=C.haO(g),r=e.t(0,D.Hm)?'- New slides get an "emoji".\n':"",q=e.t(0,D.Hn)?'- New slides get an "icon3d" from: '+A.d.aH(D.P3,", ")+".\n":"",p=e.t(0,D.C9)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hYz(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.vx,new C.fyg(),x.eC).aH(0,", "),p=new B.fc("")
if(e.t(0,D.Hm)){p.a=s
w=s}else w=""
if(e.t(0,D.Hn))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.P3,", ")+".\n")
if(e.t(0,D.C9))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hex(d)
v=F.frY(d)
u=C.haO(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
afZ(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CA(a3,"{"),a5=J.fJS(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.KH(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ck(v))return a1
u=B.a([],x.aC)
for(o=J.aX(v),n=x.s,m=x.N;o.C();){t=o.gU(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fwd(),m).bZ(0,new C.fwe())
k=B.B(l,l.$ti.k("H.E"))}else k=B.a([],n)
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
f=C.hKC(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a74(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ac(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b8(D.vx,new C.fwf(r))?r:a7
o=C.feq(J.q(w,"logo_frame"),D.Bz)
n=C.feq(J.q(w,"logo_ring"),D.Bu)
m=C.feq(J.q(w,"photo_frame"),D.Bz)
l=C.feq(J.q(w,"photo_ring"),D.Bu)
return new C.apO(q,p,u,o,n,m,l)}catch(a0){return a1}},
a0F(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hdF(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Ca),f7=f6?C.hEo():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eT()
v.dI(f7.w+1)
u=f7.a
t=B.bl(u.b,!0,x.dL)
A.d.fo(t,v)
s=u.c
s=new C.nz("luxe",u.a,A.lE,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dc)
w=s}if(w==null)w=C.hYC(f9.b)
r=g2.t(0,D.a3Q)||f6
q=g2.t(0,D.Hm)
p=g2.t(0,D.QZ)
o=new C.fqD()
n=B.a([],x.g)
m=new C.fqG(o,w,r)
l=new C.fqF(o,r)
k=new C.fqE(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.b8(u,new C.fqC(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cPd[b8]
c0=D.cO9[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eE3.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eI,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eI,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mo,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pP,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.QW
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eI,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kP,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.C7
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eI,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mo,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cD,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pP,500,f2,f0))
d3=D.mn
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eI,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tX:D.cg
c1.push(new C.eG(b4,D.a3O,0.64,0.05,0.27,0.9,g1,24,A.a4,A.bl,A.aC,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mn
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eI,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eI,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mo,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pP,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.QW
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eI,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eI,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Hk,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mn}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dc,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hG_(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dbX[A.o.F(b1,6)]:s
n.push(new C.ly(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ba(e4,e4,e4,e4,D.C6,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
ft0(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$ft0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.C9)
n=e.t(0,D.Hn)
if(!o&&!n){u=D.a2N
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.ft3(o,s[r],n,$.hJn,r).$0())
s=B.V(x.S,x.aH)
m=J
w=3
return B.b(B.iI(t,x.e),$async$ft0)
case 3:q=m.aX(g)
case 4:if(!q.C()){w=5
break}p=q.gU(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ft0,v)},
fs0(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fs0=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hYz(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aLW(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fs0)
case 3:u=s.aMg(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fs0,v)},
bAc(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bAc=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aW(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.hYA(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.afZ(i,"colorful")
t=C.hYy(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aLW(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hj),$async$bAc)
case 3:u=o.aMg(m,f,h,g,D.dPW,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAc,v)},
aLW(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aLW=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.v2(null,""),$async$aLW)
case 3:n=i
if(A.a.i(n).length===0)throw B.U("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mY(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qB(t,d,g,null),$async$aLW)
case 7:q=i
p=q.b
if(p!=null){o=C.afZ(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.U(s!=null&&B.Km(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aLW,v)},
aMg(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aMg=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.C9)||e.t(0,D.Hn)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d9(e,x.Q)
t.W(0,D.C9)}w=6
return B.b(C.ft0(d,t),$async$aMg)
case 6:s=k
w=4
break
case 5:s=D.a2N
case 4:t=d.c
w=A.d.b8(t,new C.f8k())?7:9
break
case 7:r=$.hfp
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aMg)
case 10:q=k
p=q!=null?A.R.ao(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hdF(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hxM(new C.apO(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("J<1,n>")
t=B.B(new B.J(m,new C.f8l(),n),n.k("ai.E"))
l.cx=t
t=B.a3(e).k("jI<cl.E,n>")
t=B.B(new B.jI(e,new C.f8m(),t),t.k("H.E"))
l.cy=t
l.ay=e.t(0,D.QZ)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMg,v)},
fU6(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aW(x.Q)
for(v=0;v<6;++v){u=D.a1H[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
i1x(d){return B.bW(A.K,null,new C.fHa(),d,!0,!0,!0,null,!1,!1,x.I)},
hF_(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcu().aI(d)},
i1w(d,e,f){return B.bW(A.K,null,new C.fH9(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fU7(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fU8(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
feq(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b8(e,new C.fer(w))?w:""},
haO(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hfn(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.afZ(a1==null?"":a1,a0),a3=C.afZ(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qZ(new B.a2(r,new C.fym(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("H.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.B(new B.a2(k,new C.fyn(),v),r)
A.d.b1(g,new C.fyo())
if(g.length===0)continue
f=new C.fyp(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hYT(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aEe
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dRR
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dRS
return null},
hap(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bw(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hYD(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nT
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hap(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hap(n,i,v,u))if(n.w>10){f=h+1
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
hYB(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.afZ(o,"colorful")
if(n==null)throw B.U("That earlier version could not be read.")
w=B.aW(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a1H[r]
if(q.b===s)w.J(0,q)}}v=C.fU7(e)
u=C.fU8(e)
p=C.hdF(n,D.a2N,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("J<1,n>")
o=B.B(new B.J(o,new C.fyi(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jI<cl.E,n>")
o=B.B(new B.jI(w,new C.fyj(),o),o.k("H.E"))
p.cy=o
p.ay=w.t(0,D.QZ)
return p},
i1j(d,e,f){return B.bW(A.K,null,new C.fGn(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hEo(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eT()
s.dI(t)
w=D.ctC[s.aB(10)]
v=new C.e8L(s)
u=x.N
return new C.e8K(w,s.aB(4),J.fo(v.$1$2(D.cTq,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.d7I,2+s.aB(2),u),v.$1$2(D.d1m,2,u),v.$1$2(D.daw,4,x.fP),t)},
hG_(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eT()
a1.dI(a5.w+a3*13)
w=new C.f4R(a4)
v=new C.f4T(a4,d)
u=new C.f4S(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fO(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fO(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.cn(a2,0,w.$8(D.eI,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a0F(a0,52),"lux_spot",a5.wc(0,"spotlight")))
else A.d.cn(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wc(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cn(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aDl(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wc(0,f),D.dc,150,C.a0F(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wc(0,f),D.dc,120,C.a0F(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dc,260,C.a0F(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wc(0,"filigree"),D.dc,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a0F(a0,208),"lux_rule",a5.aDl(0,"shimmer",r),D.tW,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a0F(a0,144),"lux_rule2","",D.Hk,220))}l=!A.d.b8(a2,new C.f4Q())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wc(0,"crest"),350))
else{o=a1.hf()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wc(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a0F(r,242)
j=a5.wc(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pP,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eI,t-0.007,0.9495,0.014,0.025,C.a0F(r,242),"lux_g2",a5.wc(0,"orbit"),D.pP,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fO(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wc(0,"velvet")))},
nz:function nz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fyk:function fyk(d){this.a=d},
fyl:function fyl(){},
vE:function vE(d,e){this.a=d
this.b=e},
a74:function a74(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
apO:function apO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fyd:function fyd(){},
fyg:function fyg(){},
fwd:function fwd(){},
fwe:function fwe(){},
fwf:function fwf(d){this.a=d},
fqD:function fqD(){},
fqG:function fqG(d,e,f){this.a=d
this.b=e
this.c=f},
fqF:function fqF(d,e){this.a=d
this.b=e},
fqE:function fqE(d,e){this.a=d
this.b=e},
fqC:function fqC(d){this.a=d},
ft3:function ft3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ft1:function ft1(d){this.a=d},
ft2:function ft2(d){this.a=d},
f8k:function f8k(){},
f8l:function f8l(){},
f8m:function f8m(){},
fHa:function fHa(){},
a_t:function a_t(d){this.a=d},
aFX:function aFX(d,e,f,g,h){var _=this
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
eT3:function eT3(d,e,f){this.a=d
this.b=e
this.c=f},
eT4:function eT4(d,e){this.a=d
this.b=e},
eT1:function eT1(d,e){this.a=d
this.b=e},
eT2:function eT2(d,e){this.a=d
this.b=e},
eT0:function eT0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eSW:function eSW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eT_:function eT_(d,e){this.a=d
this.b=e},
eSV:function eSV(d,e){this.a=d
this.b=e},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eSU:function eSU(d,e){this.a=d
this.b=e},
eSX:function eSX(d){this.a=d},
eSY:function eSY(d,e){this.a=d
this.b=e},
eSK:function eSK(d,e){this.a=d
this.b=e},
eSL:function eSL(d,e){this.a=d
this.b=e},
eSN:function eSN(d){this.a=d},
eSO:function eSO(d){this.a=d},
eSP:function eSP(d){this.a=d},
eSQ:function eSQ(d){this.a=d},
eSM:function eSM(d,e){this.a=d
this.b=e},
eSR:function eSR(d,e){this.a=d
this.b=e},
eTh:function eTh(d){this.a=d},
eTi:function eTi(d){this.a=d},
eTg:function eTg(d){this.a=d},
eTj:function eTj(d){this.a=d},
eTf:function eTf(d){this.a=d},
eTl:function eTl(d){this.a=d},
eTe:function eTe(d,e){this.a=d
this.b=e},
eTm:function eTm(d){this.a=d},
eTd:function eTd(d,e){this.a=d
this.b=e},
eTn:function eTn(d){this.a=d},
eTc:function eTc(d){this.a=d},
eTo:function eTo(d){this.a=d},
eTb:function eTb(d,e){this.a=d
this.b=e},
eTp:function eTp(d){this.a=d},
eTa:function eTa(d,e){this.a=d
this.b=e},
eTq:function eTq(d){this.a=d},
eT9:function eT9(d){this.a=d},
eTr:function eTr(d,e){this.a=d
this.b=e},
eT8:function eT8(d,e){this.a=d
this.b=e},
eTs:function eTs(d){this.a=d},
eTk:function eTk(d){this.a=d},
eT7:function eT7(d,e){this.a=d
this.b=e},
eSS:function eSS(d,e,f){this.a=d
this.b=e
this.c=f},
eST:function eST(d,e,f){this.a=d
this.b=e
this.c=f},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT5:function eT5(d,e){this.a=d
this.b=e},
fH9:function fH9(d,e){this.a=d
this.b=e},
a_s:function a_s(d,e,f){this.c=d
this.d=e
this.a=f},
aFW:function aFW(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eSD:function eSD(d){this.a=d},
eSE:function eSE(d){this.a=d},
eSF:function eSF(d,e){this.a=d
this.b=e},
eSG:function eSG(d){this.a=d},
eSH:function eSH(d){this.a=d},
eSC:function eSC(d,e){this.a=d
this.b=e},
eSI:function eSI(d,e){this.a=d
this.b=e},
eSJ:function eSJ(d,e){this.a=d
this.b=e},
fer:function fer(d){this.a=d},
b_y:function b_y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCv:function aCv(d,e,f){this.c=d
this.d=e
this.a=f},
bik:function bik(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
e8N:function e8N(d){this.a=d},
e8M:function e8M(){},
bfT:function bfT(d,e){this.b=d
this.a=e},
fym:function fym(d){this.a=d},
fyn:function fyn(){},
fyo:function fyo(){},
fyp:function fyp(d){this.a=d},
aqn:function aqn(d,e){this.a=d
this.b=e},
fyi:function fyi(){},
fyj:function fyj(){},
fGn:function fGn(d,e){this.a=d
this.b=e},
YR:function YR(d,e,f){this.c=d
this.d=e
this.a=f},
azX:function azX(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dfB:function dfB(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfG:function dfG(d){this.a=d},
dfH:function dfH(d,e){this.a=d
this.b=e},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfI:function dfI(d){this.a=d},
dfE:function dfE(d,e){this.a=d
this.b=e},
bqG:function bqG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e8K:function e8K(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e8L:function e8L(d){this.a=d},
f4R:function f4R(d){this.a=d},
f4T:function f4T(d,e){this.a=d
this.b=e},
f4S:function f4S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4Q:function f4Q(){},
aKu:function aKu(){},
fSX(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vw(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b_u:function b_u(d,e,f){this.c=d
this.d=e
this.a=f},
bjY:function bjY(d,e){this.c=d
this.a=e},
hUX(d){return A.d.dM(D.Go,new C.frK(d),new C.frL())},
hUY(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b_(t,6)
if(w.length===0)return null
v=new B.a2(D.Go,new C.frM(w),x.b4)
if(!v.gah(0).C())return null
u=v.gL(0)
return new C.jz("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
l4:function l4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frK:function frK(d){this.a=d},
frL:function frL(){},
frM:function frM(d){this.a=d},
mL(d,e,f,g,h){return new C.E8(f,g,d)},
hHc(d){var w=d.z,v=B.T(w).k("a2<1>")
w=B.B(new B.a2(w,new C.f6Q(),v),v.k("H.E"))
d.z=w
d.x=""},
du(d,e){var w=$.JM
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cn(d.z,0,e)},
dv(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aC,"",d,24,A.bl,A.a4,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cg,D.eZ,j,k,l)},
hds(d,e){var w
C.hHc(d)
w=A.d.dM($.bCd(),new C.fpA(e),new C.fpB())
$.JM=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.JM=""}d.z=B.bl(d.z,!0,x.F)},
E8:function E8(d,e,f){this.a=d
this.b=e
this.e=f},
f6Q:function f6Q(){},
fxP:function fxP(){},
fxQ:function fxQ(){},
fxR:function fxR(){},
fy1:function fy1(){},
fy6:function fy6(){},
fy7:function fy7(){},
fy8:function fy8(){},
fy9:function fy9(){},
fya:function fya(){},
fyb:function fyb(){},
fyc:function fyc(){},
fxS:function fxS(){},
fxT:function fxT(){},
fxU:function fxU(){},
fxV:function fxV(){},
fxW:function fxW(){},
fxX:function fxX(){},
fxY:function fxY(){},
fxZ:function fxZ(){},
fy_:function fy_(){},
fy0:function fy0(){},
fy2:function fy2(){},
fy3:function fy3(){},
fy4:function fy4(){},
fy5:function fy5(){},
fpA:function fpA(d){this.a=d},
fpB:function fpB(){},
iQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.en(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
Cs(d,e,f,g,h,i,j,k,l){return C.en(A.bg,!1,4279310375,A.aC,"",d,24,A.bl,A.a4,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cg,D.eZ,j,k,l)},
bAW(){var w=new B.S(Date.now(),0,!1)
return A.i7[B.bG(w)-1]+" "+B.bQ(w)+", "+B.by(w)},
er:function er(d,e,f){this.a=d
this.b=e
this.c=f},
byk(d){return new B.iL((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hMe(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.alB(A.cB.aI(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hMi(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.fed(),x.dv).aH(0,"\n")},
hMh(d){switch(d.a){case 2:return A.na
case 1:case 5:return A.eOo
default:return A.Sk}},
hMb(d){switch(d.a){case 2:return A.ut
case 1:case 5:return A.U9
default:return A.a8D}},
hMf(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.byk(u),q=(s&255)===0?v:C.byk(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nj(q,p,A.kv)
w=new B.pl(t,t,t,t)}switch(d.ax.a){case 1:return B.ln(v,v,v,new B.ks(r,w,v,A.a9R,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wE(B.ln(v,v,q,v,p+0.4,v,v,v))
default:return B.ln(v,v,v,new B.ks(r,w,B.v9(4),A.hA,v),v,v,v,v)}},
hMd(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eZ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hMb(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hMi(d)
t=C.byk(d.Q)
s=d.x.a>=700?A.ei:A.v3
r=d.y===A.cD?A.xt:A.ahS
q=d.z
p=new B.CD(w,l,l,B.f7(u,l,l,l,B.h2(l,t,1===q.a?A.aN5:A.aN4,l,l,l,l,l,l,A.dr,l,l,v,r,s,l,!0,l,l,l,l),C.hMh(d.as)))
break
case 1:case 4:o=C.hMe(d.at)
n=i===D.lg&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wE(B.f7(w,l,l,l,B.h2(l,A.ra,l,l,l,l,l,l,l,A.dr,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hb(o,n?A.a9N:A.Uw,l,l)
break
case 3:w=new B.nj(A.HD,1,A.kv)
u=B.v9(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ln(A.ut,B.f7(t,l,l,l,B.h2(l,D.e2Y,l,l,l,l,l,l,l,A.dr,l,l,11,l,A.ei,l,!0,l,l,l,l),A.na),l,new B.ks(E.aFw,new B.pl(w,w,w,w),u,A.hA,l),l,l,l,l)
break
case 2:p=C.hMf(d,e)
break
case 5:p=C.hMc(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.h5e(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.ar8(m/255,p)}if(w)return new F.vK(k,l,j,l,new B.Rn(new B.kr(g,g,f,1/0),p))
if(i===D.kO){i=new B.nj(A.HD,1,A.kv)
i=B.ln(A.ut,p,l,new B.ks(A.oK,new B.pl(i,i,i,i),B.v9(4),A.hA,l),l,l,D.brU,l)}else i=p
return new F.vK(k,l,j,l,new B.fO(g,f,i))},
hMg(d,e,f,g){var w,v=null,u=C.byk(d.e),t=d.f
t=B.a([F.h3S(t!=null?B.ln(v,v,v,new B.ks(v,v,v,A.hA,new B.aV1(E.Ua,A.a8x,B.a([u,C.byk(t)],x.cR),v)),v,v,v,v):B.ln(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.fec(f,g),B.T(w).k("J<1,fd>")))
return F.coI(t)},
fUa(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fUa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3f(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.VD(A.vL,A.HA,D.bt_,null,null,null,!1,null)
o=new B.Bg(o,new C.fyv(607,787,p,d))
o.LZ(n,null)
r.push(o)}u=n.jQ(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUa,v)},
hMc(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fSX(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaim()
if(h==null)h=A.avi
j=B.tb(4279308564)
w=B.v9(18)
v=new B.nj(B.tb(4287531653),3,A.kv)
u=i.length===0?"My links":i
u=B.a([B.wE(B.f7(u,m,m,m,B.h2(m,A.oK,m,m,m,m,m,m,m,A.dr,m,m,12,m,A.ei,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wE(B.f7(A.a.i(l.c),m,m,m,D.eVt,m)))
u.push(new B.fO(m,8,m))
for(t=B.db(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bV(t,t.gM(0),s.k("bV<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tb(4280690220)
o=new B.a8k(8,8)
n=A.a.i(r.b)
u.push(new B.nA(D.bmb,new C.avk(new C.ah1(q),B.ln(m,B.f7(n.length===0?A.a.i(r.c):n,m,m,m,D.eXL,A.na),m,new B.ks(p,m,new B.ahs(o,o,o,o),A.hA,m),m,m,D.bsj,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wE(B.f7(k,m,m,m,D.eX0,m))
u.push(new C.avk(C.hm_(k),t))}return B.ln(m,B.yp(u,A.KZ,A.le),m,new B.ks(j,new B.pl(v,v,v,v),w,A.hA,m),m,m,D.bn1,m)},
fed:function fed(){},
fec:function fec(d,e){this.a=d
this.b=e},
fyv:function fyv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afM(d){var w,v
for(w=0;w<32;++w){v=D.Gf[w]
if(v.a===d)return v}return null},
h7Q(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cB.aI(A.a.b_(d,u+1))
return w}catch(v){return null}},
cT(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hgv(d,e){return B.a5(d,!1).ce(B.ej(new C.fEN(e),!0,null,x.fB))},
hgu(d,e){return B.bW(A.K,null,new C.fEM(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iU:function iU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
E_:function E_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
MK:function MK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhH:function bhH(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a7$=f
_.c=_.a=null},
dQB:function dQB(d){this.a=d},
dQA:function dQA(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpg:function bpg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eRR:function eRR(d,e){this.a=d
this.b=e},
bcN:function bcN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aYo:function aYo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c69:function c69(){},
c6a:function c6a(d){this.a=d},
c6b:function c6b(d,e,f){this.a=d
this.b=e
this.c=f},
c6c:function c6c(d,e,f){this.a=d
this.b=e
this.c=f},
fEN:function fEN(d){this.a=d},
Yp:function Yp(d,e){this.c=d
this.a=e},
ayk:function ayk(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d4Q:function d4Q(d,e,f){this.a=d
this.b=e
this.c=f},
d4V:function d4V(d){this.a=d},
d4W:function d4W(d){this.a=d},
d4U:function d4U(d){this.a=d},
d4X:function d4X(d){this.a=d},
d4T:function d4T(d,e){this.a=d
this.b=e},
d4Y:function d4Y(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4Z:function d4Z(d){this.a=d},
d4R:function d4R(d,e){this.a=d
this.b=e},
d5_:function d5_(d,e){this.a=d
this.b=e},
fEM:function fEM(d){this.a=d},
fEL:function fEL(d){this.a=d},
fEK:function fEK(d,e,f){this.a=d
this.b=e
this.c=f},
fEJ:function fEJ(d,e){this.a=d
this.b=e},
aJY:function aJY(){},
i1v(d){return B.bW(A.K,null,new C.fH8(),d,!0,!0,!0,null,!1,!1,x.N)},
fH8:function fH8(){},
YK:function YK(d){this.a=d},
beg:function beg(d){this.d=d
this.c=this.a=null},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbD:function dbD(d){this.a=d},
hIH(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.wW},
hWS(d){var w,v=A.d.gL(d.split("@"))
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
hWR(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hIH(d)
switch(q){case"shimmer":return B.nE(A.a8Z,g,new C.fvb(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bdE(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.e9(A.A,B.dc(C.fL8(g,B.a49(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bdl(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eA(A.A,e*0.5,B.e9(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dl()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fu(e)
u.mx(Math.sin(e)*0.3)
return B.dU(B.fr(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.bm8(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.b8j(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.q,B.a([B.e_(B.b3(r,r,r,new C.b7X(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bt0(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bq3(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bpc(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.q,B.a([g,B.e_(B.b3(r,r,r,new C.bcG(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bY(0,B.e_(B.e9(A.A,B.bZ(r,new B.o(r,r,r,r,r,new B.bR(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eA(A.A,s*0.06,B.e9(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fvb:function fvb(d,e){this.a=d
this.b=e},
bdE:function bdE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdl:function bdl(d,e,f){this.b=d
this.c=e
this.a=f},
bm8:function bm8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8j:function b8j(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b7X:function b7X(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bt0:function bt0(d,e,f){this.b=d
this.c=e
this.a=f},
bq3:function bq3(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bpc:function bpc(d,e,f){this.b=d
this.c=e
this.a=f},
bcG:function bcG(d,e,f){this.b=d
this.d=e
this.a=f},
d4x:function d4x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xc:function xc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fve(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kO},
hWX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b1(j,new C.fvf())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aOP(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hWW(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d3(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d3(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
afp(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afp=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fnA(),f),f.k("H.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bW(A.dC,null,new C.fnB(e),d,!0,!0,!1,A.lh,!1,!1,x.N),$async$afp)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hy())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fUM(d),$async$afp)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Kx(d,"Search states\u2026","",A.jS,"Choose state"),$async$afp)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fTI(s)
if(p==null)p=A.d.gL(D.PQ)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fvg(p.d)
k=x.u
j=B.a([C.en(A.bg,!1,4279310375,A.aC,"marriage_locked_bg",4280640491,24,A.bl,A.a4,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cd(i,0.016,D.kP,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cd(0,0.058,D.eI,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cd(0,0.058,D.eI,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.JX("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.JX("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a4,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fQJ(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bxO("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0g("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0g("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0g("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0g("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bxO("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cd(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.en(A.bg,!1,i,A.aC,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cs,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cg,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fQJ(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bxO("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.h9P("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.h9P("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0g("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0g("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bxN("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bxN("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bxO("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.JX("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.JX("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bxN("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bxN("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bxO("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0g("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bxN("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0g("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fQJ(0.22,0.83,0.56,4291404327,i),h)
h.push(C.JX("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.JX("Nakala ya Hati",A.L,4291404327,9,A.a4,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Ba(null,null,null,null,D.nT,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rd(m,null,0,0,j,n,D.pO,"","","Hati ya Ndoa",D.dc)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
fvf:function fvf(){},
fnA:function fnA(){},
fnB:function fnB(d){this.a=d},
fny:function fny(d){this.a=d},
fnz:function fnz(d){this.a=d},
hLH(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hLG(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ms
case"lineThrough":return A.z6
default:return A.aC}},
en(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eG(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hbR(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.PC[w]
if(v.b===u)return v}return D.dc},
hI4(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cLb[w]
if(v.b===u)return v}return D.cQ},
hOs(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.d8j[w]
if(v.b===u)return v}return D.be},
rd(d,e,f,g,h,i,j,k,l,m,n){return new C.ly(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h2C(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hK4(d.h(0,"layout"))
t=B.aN(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aN(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hbR(d.h(0,"transition"))
q=B.aN(d.h(0,"durationSeconds"))
q=q==null?m:A.k.O(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aN(d.h(0,"designRevision"))
o=o==null?m:A.k.O(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d7(n,x.f)
n=B.cD(n,new C.cbx(),n.$ti.k("H.E"),x.F)
n=B.B(n,B.a3(n).k("H.E"))}return C.rd(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hK4(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.anb[w]
if(v.b===u)return v}return D.mn},
Ba(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hY(p,t,a1,h,i,w,a0==null?B.a([C.rd(4294967295,null,0,0,null,C.cC(),D.pO,"","","",D.dc)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
V3(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hGf(a6.h(0,"aspectRatio"))
t=B.aN(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.O(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.S(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kp(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kp(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aN(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aN(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.O(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cbk(),x.N)
f=B.B(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cbl(),x.N)
e=B.B(e,e.$ti.k("ai.E"))}d=a6.h(0,"finaleStyle")
d=d==null?a3:J.k(d)
a0=a6.h(0,"finaleTitle")
a0=a0==null?a3:J.k(a0)
a1=a6.h(0,"finaleSubtitle")
a1=a1==null?a3:J.k(a1)
a2=a6.h(0,"finaleLogo")
a2=a2==null?a3:J.k(a2)
g=g.a(a6.h(0,"slides"))
if(g==null)g=a3
else{g=J.d7(g,x.f)
g=B.cD(g,new C.cbm(),g.$ti.k("H.E"),x.bt)
g=B.B(g,B.a3(g).k("H.E"))}return C.Ba(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rd(4294967295,a3,0,0,a3,C.cC(),D.pO,"","","",D.dc)],x.g):g,v,p,o,s)},
kp(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hGf(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.d98[w]
if(v.b===u)return v}return D.C6},
cC(){var w=Date.now(),v=$.iW
$.iW=v+1
return""+1000*w+"_"+v},
cbO(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.C7){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aC,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aC,"",n,20,A.bl,A.cs,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cg,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!0,f.e.l(),A.aC,"",n,20,A.bl,A.cs,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cg,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.en(A.bg,!0,t.l(),A.aC,"",n,18,A.bl,A.a4,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cg,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.en(A.bg,!0,t.l(),A.aC,"",n,18,A.bl,A.a4,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cg,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.en(A.L,!1,4294967295,A.aC,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cg,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.en(A.bg,!1,l,A.aC,"",t.j(0.12).l(),24,A.bl,A.a4,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cg,D.eZ,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.en(A.bg,!1,r.l(),A.aC,"",n,20,A.bl,A.O,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cg,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.en(A.bg,!1,l,A.aC,"",t.j(0.06).l(),24,A.bl,A.a4,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cg,D.eZ,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.en(A.bg,!1,r.l(),A.aC,"",n,20,A.bl,A.O,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cg,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.en(A.L,!1,f.d.l(),A.aC,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cg,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.L,!1,f.e.l(),A.aC,"",n,22,A.bl,A.cs,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cg,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cg,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aC,"",n,20,A.bl,A.a4,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cg,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.en(A.bg,!1,f.d.l(),A.aC,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cg,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.en(A.bg,!1,f.e.l(),A.aC,"",n,18,A.bl,A.a4,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cg,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hxW(d){return A.d.dM(D.a1l,new C.cbP(d),new C.cbQ())},
hxT(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aX(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gU(t)
if(!q.b(u))continue
try{J.cf(v,C.V3(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fNf(d,e){var w,v,u,t=B.V(x.N,x.I),s=new C.cbK(t)
for(w=J.aX(d);w.C();)s.$1(w.gU(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("H.E"))
A.d.b1(u,new C.cbJ())
return u},
h2F(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cbF()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
apP(d){return C.hxR(d)},
hxR(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$apP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cbI()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1s(m),$async$apP)
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
return B.b(B.aA(),$async$apP)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aU(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.h2E.h(0,m))
n=C.fNf(C.fNf(j,r),o)
if(n.length===0){u=C.h2F(C.h2F(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apP,v)},
cbE(d){return C.hxQ(d)},
hxQ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cbE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cbE)
case 7:r=f
q=r.rQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kv(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aW(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cbE,v)},
b_A(d,e){return C.hxS(d,e)},
hxS(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b_A=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b_A)
case 6:s=g
q=s.rQ("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ac(r)>500?J.KG(r,J.ac(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b_A)
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
return B.i($async$b_A,v)},
V4(d,e){return C.hxU(d,e)},
hxU(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$V4=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ac(a0)===0){w=1
break}p=$.h2D.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.apP(a3),$async$V4)
case 5:p=a6
case 4:w=6
return B.b(C.cbE(a3),$async$V4)
case 6:o=a6
n=B.V(x.N,x.I)
for(m=J.aX(p);m.C();){l=m.gU(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcv()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<H.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.cbL(o),l),l.k("H.E"))
A.d.b1(e,new C.cbM())
$.h2D.n(0,a0,e)
n=B.T(e).k("J<1,a4<n,@>>")
n=B.B(new B.J(e,new C.cbN(),n),n.k("ai.E"))
r=A.R.ao(n,null)
$.h2E.n(0,a0,r)
t=8
w=11
return B.b(B.agc(a0,r),$async$V4)
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
return B.b(B.aA(),$async$V4)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$V4)
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
return B.i($async$V4,v)},
I4:function I4(d,e){this.a=d
this.b=e},
apN:function apN(d,e){this.a=d
this.b=e},
us:function us(d,e){this.a=d
this.b=e},
mn:function mn(d,e){this.a=d
this.b=e},
hv:function hv(d,e){this.a=d
this.b=e},
eG:function eG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ly:function ly(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cby:function cby(){},
cbz:function cbz(){},
cbx:function cbx(){},
hY:function hY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cbn:function cbn(){},
cbo:function cbo(){},
cbk:function cbk(){},
cbl:function cbl(){},
cbm:function cbm(){},
jz:function jz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cbP:function cbP(d){this.a=d},
cbQ:function cbQ(){},
cbK:function cbK(d){this.a=d},
cbJ:function cbJ(){},
cbF:function cbF(){},
cbG:function cbG(){},
cbH:function cbH(){},
cbI:function cbI(){},
cbL:function cbL(d){this.a=d},
cbM:function cbM(){},
cbN:function cbN(){},
hX7(d,e){var w=x.N,v=B.V(w,x.F)
w=new C.fvO(e,v,d,B.aW(w))
w.$1(new C.fvK())
w.$1(new C.fvL())
w.$1(new C.fvM())
w.$1(new C.fvN())
return v},
fvO:function fvO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fvK:function fvK(){},
fvL:function fvL(){},
fvM:function fvM(){},
fvN:function fvN(){},
b_x:function b_x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbt:function cbt(d){this.a=d},
cbs:function cbs(){},
cbu:function cbu(){},
cbv:function cbv(d,e){this.a=d
this.b=e},
cbw:function cbw(d){this.a=d},
an_:function an_(d,e){this.c=d
this.a=e},
bhs:function bhs(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dDd:function dDd(){},
aJJ:function aJJ(){},
cbB(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cbB=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eLM)
u=!1
w=1
break}u=B.kL(!1,d,t,!1,null,A.a3S,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cbB,v)},
hxO(d){var w=A.d.bc(D.Go,new C.cbC(d))
if(w<0)return!0
return w>=4},
hxP(d){var w=A.d.bc($.bCd(),new C.cbD(d))
if(w<0)return!0
return w>=5},
cbC:function cbC(d){this.a=d},
cbD:function cbD(d){this.a=d},
hYN(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.ye()
$.pZ().py(t,new C.fyC(s),!0)
u=B.a([B.Dl(v,A.pS,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eVX,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.mW,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.q,u,v)},
fyC:function fyC(d){this.a=d},
hYo(){return C.fU3()},
hVl(){return C.bA9()},
hXo(){return C.fTV()},
aNU(d,e,f){var w=0,v=B.j(x.H),u
var $async$aNU=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fxI(d,f),$async$aNU)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aNU,v)},
fxI(d,e){var w=0,v=B.j(x.H),u
var $async$fxI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.byl
if(u==null)u=e+".pdf"
w=2
return B.b(B.bW(A.K,null,new C.fxJ(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fxI)
case 2:return B.h(null,v)}})
return B.i($async$fxI,v)},
fxJ:function fxJ(d,e){this.a=d
this.b=e},
ach:function ach(d,e,f){this.c=d
this.d=e
this.a=f},
ekR:function ekR(d,e){this.a=d
this.b=e},
ekS:function ekS(d,e){this.a=d
this.b=e},
ekT:function ekT(d,e){this.a=d
this.b=e},
ekU:function ekU(d){this.a=d},
acz:function acz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b_w(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b_v(g,m,f,d,e,h,l,k,j,o,i,null)},
heM(d){return B.cm(new C.fvJ(d))},
fU5(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hYw(d){if(d===D.cg)return"None"
return C.fU5(d)},
byR(d,e,f,g){return C.hOz(d,e,f,g)},
hOz(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$byR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fR1&&t.ph())t.eH()
$.fR1=!0
s.a=null
w=3
return B.b(B.hQ(A.bh,!0,"Animation preview",d,new C.fgx(s,e,g,f),null,A.eE,!0,x.H),$async$byR)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fR1=!1
case 1:return B.h(u,v)}})
return B.i($async$byR,v)},
fHX(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fHX=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,280,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fU5(f)+" Slide transition preview"
s=s?Af.EG:A.uO
w=3
return B.b(C.byR(d,s,new B.a6(t,t*0.56,B.bv(B.m(14),new C.aHk(f,null),A.aq),null),r),$async$fHX)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fHX,v)},
he4(d,e,f){var w,v,u=null,t=A.cq.av(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dU(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.e9(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.e9(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fu((1-t)*1.2)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jL((1-t)*1.2)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dl()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mx((1-t)*0.8)
v=0.6+t*0.4
w.jv(v,v,v,1)
return B.fr(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bBJ(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bBJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bS,x.w).w.a.a*0.88,300,440)
s=f===D.cg
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fU5(f)+" Element animation preview"
s=s?Af.EG:A.uO
w=3
return B.b(C.byR(d,s,new B.a6(t,t*0.62,B.bv(B.m(14),new C.ay4(f,null),A.aq),null),r),$async$bBJ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bBJ,v)},
hYv(d){var w,v,u,t,s=$.aeS.W(0,d)
if(s!=null){$.aeS.n(0,d,s)
return s}w=A.cB.aI(A.a.b_(d,A.a.cJ(d,",")+1))
$.aeS.n(0,d,w)
v=$.fRP=$.fRP+w.length
u=B.a3($.aeS).k("cy<1>")
for(;;){if(!(v>41943040&&$.aeS.a>1))break
t=new B.cy($.aeS,u).gah(0)
if(!t.C())B.ba(B.fC())
v-=$.aeS.W(0,t.gU(0)).length
$.fRP=v}return w},
hYc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kL(0,d),j=B.B(k,B.a3(k).k("H.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.RW(s,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.RW(t,A.u))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.RW(u,A.cs))
v.push(new B.eo(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b_(d,r)
v.push(B.dq(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1r(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.kE(e))
return m
case"rounded":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.gee()*0.18
m.E(new B.iS(B.bz(e,new B.aV(w,w))))
return m
case"triangle":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bF())
return m
case"hexagon":w=$.X()
m=B.a([],m)
v=new B.aQ(w.r,A.ap,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.E(new B.bF())
return v
case"diamond":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
m.E(new B.ap(e.c,e.gbQ().b))
m.E(new B.ap(e.gbQ().a,e.d))
m.E(new B.ap(e.a,e.gbQ().b))
m.E(new B.bF())
return m
case"arch":m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b7M(new B.u(t,p),new B.aV(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aQ($.X().r,A.ap,n,n,B.a([],m))
m.E(new B.nU(e))
return m}},
fti(d,e,f){return B.cm(new C.ftj(D.eEs.t(0,d),d,f,e))},
b_v:function b_v(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cbr:function cbr(d){this.a=d},
cbq:function cbq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbp:function cbp(){},
b_s:function b_s(d,e){this.b=d
this.a=e},
fvJ:function fvJ(d){this.a=d},
fvI:function fvI(d,e){this.a=d
this.b=e},
fgx:function fgx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgv:function fgv(d){this.a=d},
fgw:function fgw(d,e){this.a=d
this.b=e},
aHk:function aHk(d,e){this.c=d
this.a=e},
bsx:function bsx(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f_a:function f_a(d,e,f){this.a=d
this.b=e
this.c=f},
aHX:function aHX(d,e){this.b=d
this.a=e},
U5:function U5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bhE:function bhE(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
dOO:function dOO(d){this.a=d},
dON:function dON(d){this.a=d},
dOM:function dOM(d){this.a=d},
I3:function I3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cbj:function cbj(d){this.a=d},
cbi:function cbi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay4:function ay4(d,e){this.c=d
this.a=e},
bca:function bca(){this.d=0
this.c=this.a=null},
d1M:function d1M(d){this.a=d},
d1L:function d1L(d){this.a=d},
a6N:function a6N(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bii:function bii(d,e){var _=this
_.d=null
_.bq$=d
_.a7$=e
_.c=_.a=null},
e8t:function e8t(d,e,f){this.a=d
this.b=e
this.c=f},
aYr:function aYr(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bdj:function bdj(d,e,f){this.b=d
this.c=e
this.a=f},
bo9:function bo9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ePw:function ePw(){},
ftj:function ftj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bp9:function bp9(d,e,f){this.b=d
this.c=e
this.a=f},
aJX:function aJX(){},
aKs:function aKs(){},
aLN:function aLN(){},
fwJ(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fwJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wN.c4().Lo(D.d6q,A.tp,!0),$async$fwJ)
case 3:r=e
if(r==null||J.ck(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.U("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.U("That file is too big. Use a file under 8 MB.")
u=C.hY6(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fwJ,v)},
hY6(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a75(d,new B.a_5(A.cS.gcu().aI(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.hQa(e)
if(A.a.i(w).length===0)throw B.U("No readable words were found in that Word file.")
return new C.a75(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c4.Kc(0,e,!0)
if(A.a.i(w).length===0)throw B.U("That file is empty.")
return new C.a75(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hQa(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cug().cFK(B.qY(d,A.hR,o,o),o,o,!1).cHq(0,"word/document.xml")
if(n==null)return""
w=n.cPl()
v=A.c4.Kc(0,w==null?$.hgZ():w,!0).split("</w:p>")
u=new B.fc("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kL(0,r)
p=A.a.i(B.cD(q,new C.fjl(),B.a3(q).k("H.E"),t).fU(0))
if(p.length!==0){q=B.aJ(p,"&lt;","<")
q=B.aJ(q,"&gt;",">")
q=B.aJ(q,"&quot;",'"')
q=B.aJ(q,"&apos;","'")
q=B.aJ(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a75:function a75(d,e,f){this.a=d
this.b=e
this.c=f},
fjl:function fjl(){},
hxV(d,e,f,g,h,i,j,k,l){return new C.Na(l,e,d,g,f,i,h,j,k,null)},
Na:function Na(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCW:function aCW(d,e,f,g,h,i,j,k,l){var _=this
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
_.a7$=l
_.c=_.a=null},
er4:function er4(d){this.a=d},
er2:function er2(){},
er3:function er3(d){this.a=d},
ens:function ens(){},
ent:function ent(){},
enu:function enu(d,e){this.a=d
this.b=e},
ep2:function ep2(d){this.a=d},
eoR:function eoR(){},
eoS:function eoS(){},
emQ:function emQ(){},
eqa:function eqa(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
ep0:function ep0(d,e){this.a=d
this.b=e},
eqO:function eqO(d){this.a=d},
eqP:function eqP(){},
eqQ:function eqQ(){},
eqR:function eqR(d){this.a=d},
eqS:function eqS(){},
eme:function eme(d){this.a=d},
er1:function er1(){},
eo9:function eo9(d,e){this.a=d
this.b=e},
emc:function emc(d){this.a=d},
emd:function emd(d){this.a=d},
eow:function eow(d){this.a=d},
eox:function eox(d,e,f){this.a=d
this.b=e
this.c=f},
eoy:function eoy(d){this.a=d},
eo8:function eo8(){},
eo7:function eo7(d){this.a=d},
eo5:function eo5(){},
eo4:function eo4(d){this.a=d},
eo6:function eo6(){},
eno:function eno(d){this.a=d},
enp:function enp(d){this.a=d},
eof:function eof(d){this.a=d},
eoa:function eoa(d){this.a=d},
eob:function eob(d){this.a=d},
eoc:function eoc(d){this.a=d},
eod:function eod(d){this.a=d},
eoe:function eoe(d){this.a=d},
eog:function eog(d,e){this.a=d
this.b=e},
emg:function emg(){},
emh:function emh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eor:function eor(){},
eos:function eos(d,e){this.a=d
this.b=e},
eop:function eop(d,e,f){this.a=d
this.b=e
this.c=f},
eoq:function eoq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoj:function eoj(d,e,f){this.a=d
this.b=e
this.c=f},
eok:function eok(d,e,f){this.a=d
this.b=e
this.c=f},
eol:function eol(d){this.a=d},
eom:function eom(d,e){this.a=d
this.b=e},
eon:function eon(d,e){this.a=d
this.b=e},
eoo:function eoo(d,e){this.a=d
this.b=e},
eoi:function eoi(d,e){this.a=d
this.b=e},
eou:function eou(d){this.a=d},
eov:function eov(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eot:function eot(d){this.a=d},
eoM:function eoM(){},
eoN:function eoN(){},
eoO:function eoO(){},
eoP:function eoP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoJ:function eoJ(d){this.a=d},
eoL:function eoL(){},
eoK:function eoK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eoH:function eoH(d,e,f){this.a=d
this.b=e
this.c=f},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoQ:function eoQ(){},
eoh:function eoh(d,e){this.a=d
this.b=e},
emx:function emx(){},
emy:function emy(d,e,f){this.a=d
this.b=e
this.c=f},
emz:function emz(d){this.a=d},
emA:function emA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
emw:function emw(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoV:function eoV(d,e){this.a=d
this.b=e},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoT:function eoT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoX:function eoX(d,e){this.a=d
this.b=e},
elb:function elb(d,e){this.a=d
this.b=e},
emv:function emv(d,e){this.a=d
this.b=e},
emt:function emt(d){this.a=d},
ep4:function ep4(d,e,f){this.a=d
this.b=e
this.c=f},
emp:function emp(d,e){this.a=d
this.b=e},
emo:function emo(d){this.a=d},
ep3:function ep3(d,e,f){this.a=d
this.b=e
this.c=f},
emf:function emf(d){this.a=d},
emR:function emR(){},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e,f){this.a=d
this.b=e
this.c=f},
eqb:function eqb(d,e,f){this.a=d
this.b=e
this.c=f},
elc:function elc(d){this.a=d},
el9:function el9(d,e){this.a=d
this.b=e},
el_:function el_(d,e){this.a=d
this.b=e},
ekX:function ekX(d){this.a=d},
ekW:function ekW(d,e){this.a=d
this.b=e},
ekY:function ekY(d,e){this.a=d
this.b=e},
emr:function emr(d){this.a=d},
ems:function ems(d,e){this.a=d
this.b=e},
emq:function emq(d){this.a=d},
elE:function elE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
elF:function elF(d,e){this.a=d
this.b=e},
elJ:function elJ(d,e){this.a=d
this.b=e},
elK:function elK(d){this.a=d},
elH:function elH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
elI:function elI(d){this.a=d},
elG:function elG(){},
elD:function elD(d,e,f){this.a=d
this.b=e
this.c=f},
eoG:function eoG(d,e){this.a=d
this.b=e},
eqV:function eqV(d){this.a=d},
eqW:function eqW(d,e){this.a=d
this.b=e},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d,e,f){this.a=d
this.b=e
this.c=f},
eqU:function eqU(d){this.a=d},
eqr:function eqr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqp:function eqp(){},
eqo:function eqo(d,e,f){this.a=d
this.b=e
this.c=f},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqk:function eqk(d,e,f){this.a=d
this.b=e
this.c=f},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqm:function eqm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eql:function eql(d){this.a=d},
enk:function enk(d,e){this.a=d
this.b=e},
enj:function enj(d,e){this.a=d
this.b=e},
eqc:function eqc(){},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
el4:function el4(d,e){this.a=d
this.b=e},
el2:function el2(d){this.a=d},
el3:function el3(d){this.a=d},
el5:function el5(d,e){this.a=d
this.b=e},
el6:function el6(d,e,f){this.a=d
this.b=e
this.c=f},
ela:function ela(d,e){this.a=d
this.b=e},
el1:function el1(d,e,f){this.a=d
this.b=e
this.c=f},
el0:function el0(d){this.a=d},
ep1:function ep1(d,e,f){this.a=d
this.b=e
this.c=f},
eqT:function eqT(d,e,f){this.a=d
this.b=e
this.c=f},
enn:function enn(d,e,f){this.a=d
this.b=e
this.c=f},
enm:function enm(){},
elN:function elN(d,e,f){this.a=d
this.b=e
this.c=f},
elO:function elO(d){this.a=d},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
emP:function emP(d,e){this.a=d
this.b=e},
el7:function el7(d,e){this.a=d
this.b=e},
elg:function elg(d){this.a=d},
elh:function elh(d,e){this.a=d
this.b=e},
eli:function eli(d,e){this.a=d
this.b=e},
elf:function elf(d){this.a=d},
elt:function elt(d,e){this.a=d
this.b=e},
ele:function ele(d){this.a=d},
elw:function elw(d){this.a=d},
elx:function elx(d){this.a=d},
ely:function ely(d){this.a=d},
elz:function elz(d){this.a=d},
elA:function elA(d){this.a=d},
elB:function elB(){},
elC:function elC(){},
elj:function elj(d){this.a=d},
elk:function elk(d){this.a=d},
ell:function ell(d){this.a=d},
elm:function elm(d){this.a=d},
eln:function eln(d){this.a=d},
elo:function elo(d){this.a=d},
elp:function elp(d){this.a=d},
elq:function elq(d){this.a=d},
elr:function elr(d){this.a=d},
els:function els(d){this.a=d},
elu:function elu(d){this.a=d},
elv:function elv(d,e){this.a=d
this.b=e},
emO:function emO(d,e,f){this.a=d
this.b=e
this.c=f},
emN:function emN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
emM:function emM(d,e,f){this.a=d
this.b=e
this.c=f},
emL:function emL(d,e){this.a=d
this.b=e},
el8:function el8(d,e){this.a=d
this.b=e},
elR:function elR(d){this.a=d},
elQ:function elQ(d){this.a=d},
elP:function elP(d,e){this.a=d
this.b=e},
elS:function elS(d){this.a=d},
elT:function elT(d){this.a=d},
elU:function elU(d,e){this.a=d
this.b=e},
emu:function emu(d){this.a=d},
eoF:function eoF(d,e){this.a=d
this.b=e},
eoE:function eoE(d,e){this.a=d
this.b=e},
eoD:function eoD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoB:function eoB(d){this.a=d},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoz:function eoz(){},
eoA:function eoA(){},
eqd:function eqd(){},
eqe:function eqe(d,e){this.a=d
this.b=e},
eqf:function eqf(){},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d,e){this.a=d
this.b=e},
eld:function eld(d,e){this.a=d
this.b=e},
emi:function emi(){},
emj:function emj(){},
emk:function emk(){},
emn:function emn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
emm:function emm(d,e){this.a=d
this.b=e},
eml:function eml(d,e,f){this.a=d
this.b=e
this.c=f},
enO:function enO(d){this.a=d},
enN:function enN(){},
enP:function enP(d,e){this.a=d
this.b=e},
enQ:function enQ(d,e){this.a=d
this.b=e},
enM:function enM(d){this.a=d},
enR:function enR(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
enS:function enS(d,e){this.a=d
this.b=e},
enK:function enK(d){this.a=d},
enT:function enT(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
enU:function enU(d,e){this.a=d
this.b=e},
enI:function enI(d,e){this.a=d
this.b=e},
enV:function enV(d,e){this.a=d
this.b=e},
enH:function enH(d){this.a=d},
enW:function enW(d,e){this.a=d
this.b=e},
enG:function enG(d){this.a=d},
enz:function enz(d,e){this.a=d
this.b=e},
enA:function enA(d){this.a=d},
enB:function enB(d){this.a=d},
eny:function eny(d){this.a=d},
enC:function enC(d,e){this.a=d
this.b=e},
enx:function enx(d){this.a=d},
enD:function enD(d,e){this.a=d
this.b=e},
enw:function enw(d){this.a=d},
enE:function enE(d,e){this.a=d
this.b=e},
env:function env(d){this.a=d},
enF:function enF(d){this.a=d},
emH:function emH(d){this.a=d},
emI:function emI(d){this.a=d},
emK:function emK(d){this.a=d},
emC:function emC(d){this.a=d},
emB:function emB(d,e){this.a=d
this.b=e},
emD:function emD(d,e){this.a=d
this.b=e},
emE:function emE(d){this.a=d},
emF:function emF(d){this.a=d},
emG:function emG(d,e){this.a=d
this.b=e},
emJ:function emJ(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d){this.a=d},
enZ:function enZ(d,e){this.a=d
this.b=e},
enY:function enY(d,e){this.a=d
this.b=e},
enX:function enX(d,e){this.a=d
this.b=e},
eo_:function eo_(d){this.a=d},
eo0:function eo0(d){this.a=d},
epn:function epn(d,e){this.a=d
this.b=e},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epA:function epA(d){this.a=d},
epL:function epL(d){this.a=d},
epW:function epW(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
ept:function ept(d){this.a=d},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
epz:function epz(d){this.a=d},
epB:function epB(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(d){this.a=d},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epJ:function epJ(d){this.a=d},
epd:function epd(d){this.a=d},
epK:function epK(d){this.a=d},
epl:function epl(d){this.a=d},
epM:function epM(d){this.a=d},
epk:function epk(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
epO:function epO(d,e){this.a=d
this.b=e},
epj:function epj(d,e,f){this.a=d
this.b=e
this.c=f},
ep9:function ep9(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eq8:function eq8(d,e){this.a=d
this.b=e},
epP:function epP(d,e,f){this.a=d
this.b=e
this.c=f},
epi:function epi(d,e,f){this.a=d
this.b=e
this.c=f},
ep8:function ep8(d,e,f){this.a=d
this.b=e
this.c=f},
ep6:function ep6(d,e){this.a=d
this.b=e},
epQ:function epQ(d,e){this.a=d
this.b=e},
eph:function eph(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e){this.a=d
this.b=e},
ep5:function ep5(d,e){this.a=d
this.b=e},
epR:function epR(d){this.a=d},
epg:function epg(d){this.a=d},
epS:function epS(d){this.a=d},
epT:function epT(d){this.a=d},
epU:function epU(d){this.a=d},
epV:function epV(d){this.a=d},
epf:function epf(d){this.a=d},
epX:function epX(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
epe:function epe(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
epc:function epc(d){this.a=d},
eq0:function eq0(d,e){this.a=d
this.b=e},
epb:function epb(d){this.a=d},
eq1:function eq1(d,e){this.a=d
this.b=e},
epa:function epa(d){this.a=d},
elM:function elM(d,e,f){this.a=d
this.b=e
this.c=f},
elL:function elL(d,e){this.a=d
this.b=e},
equ:function equ(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqv:function eqv(d,e){this.a=d
this.b=e},
eqs:function eqs(d,e){this.a=d
this.b=e},
emU:function emU(d,e){this.a=d
this.b=e},
emT:function emT(d){this.a=d},
emV:function emV(d,e){this.a=d
this.b=e},
emS:function emS(d){this.a=d},
enr:function enr(){},
enq:function enq(){},
eqH:function eqH(d){this.a=d},
eqG:function eqG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqz:function eqz(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqI:function eqI(d){this.a=d},
emb:function emb(d){this.a=d},
ema:function ema(d,e,f){this.a=d
this.b=e
this.c=f},
em9:function em9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elZ:function elZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
em_:function em_(d,e){this.a=d
this.b=e},
em0:function em0(d,e){this.a=d
this.b=e},
em1:function em1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elY:function elY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
em2:function em2(d,e){this.a=d
this.b=e},
em4:function em4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
em3:function em3(d,e){this.a=d
this.b=e},
em5:function em5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
elX:function elX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
em6:function em6(d,e){this.a=d
this.b=e},
elW:function elW(d,e){this.a=d
this.b=e},
em7:function em7(d,e){this.a=d
this.b=e},
elV:function elV(d){this.a=d},
em8:function em8(d,e){this.a=d
this.b=e},
eo2:function eo2(d){this.a=d},
eo1:function eo1(d){this.a=d},
eo3:function eo3(d,e){this.a=d
this.b=e},
en7:function en7(d,e){this.a=d
this.b=e},
en8:function en8(d,e){this.a=d
this.b=e},
en6:function en6(d,e){this.a=d
this.b=e},
en9:function en9(d,e){this.a=d
this.b=e},
en5:function en5(d,e){this.a=d
this.b=e},
ena:function ena(d,e){this.a=d
this.b=e},
en4:function en4(d,e){this.a=d
this.b=e},
enb:function enb(d,e){this.a=d
this.b=e},
en3:function en3(d,e){this.a=d
this.b=e},
enc:function enc(d,e){this.a=d
this.b=e},
en2:function en2(d,e){this.a=d
this.b=e},
end:function end(d,e,f){this.a=d
this.b=e
this.c=f},
en1:function en1(d,e){this.a=d
this.b=e},
ene:function ene(d,e,f){this.a=d
this.b=e
this.c=f},
en0:function en0(d,e){this.a=d
this.b=e},
enf:function enf(d,e){this.a=d
this.b=e},
en_:function en_(d,e,f){this.a=d
this.b=e
this.c=f},
emX:function emX(d,e){this.a=d
this.b=e},
eng:function eng(d,e){this.a=d
this.b=e},
emZ:function emZ(d,e){this.a=d
this.b=e},
enh:function enh(d,e){this.a=d
this.b=e},
emY:function emY(d,e,f){this.a=d
this.b=e
this.c=f},
emW:function emW(d,e){this.a=d
this.b=e},
eni:function eni(d,e){this.a=d
this.b=e},
enl:function enl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekV:function ekV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ep_:function ep_(d,e){this.a=d
this.b=e},
eoY:function eoY(d){this.a=d},
eoZ:function eoZ(d,e){this.a=d
this.b=e},
ae2:function ae2(d,e,f){this.a=d
this.b=e
this.c=f},
axr:function axr(d,e){this.c=d
this.a=e},
baY:function baY(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
cYO:function cYO(d){this.a=d},
cYN:function cYN(d){this.a=d},
bbb:function bbb(d,e){this.c=d
this.a=e},
cZ9:function cZ9(d){this.a=d},
cZa:function cZa(d){this.a=d},
J5:function J5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
baX:function baX(){this.d=!1
this.c=this.a=null},
cYL:function cYL(d){this.a=d},
cYH:function cYH(d){this.a=d},
cYM:function cYM(d){this.a=d},
cYG:function cYG(d){this.a=d},
cYK:function cYK(d){this.a=d},
cYI:function cYI(d){this.a=d},
cYJ:function cYJ(d,e){this.a=d
this.b=e},
ON:function ON(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ZB:function ZB(d,e,f){this.c=d
this.d=e
this.a=f},
aCZ:function aCZ(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a7$=f
_.c=_.a=null},
erF:function erF(){},
erv:function erv(d){this.a=d},
erE:function erE(d){this.a=d},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
err:function err(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
ert:function ert(d){this.a=d},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
erC:function erC(){},
erD:function erD(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(d){this.a=d},
erA:function erA(d){this.a=d},
erB:function erB(d){this.a=d},
erG:function erG(d,e,f){this.a=d
this.b=e
this.c=f},
erI:function erI(d,e){this.a=d
this.b=e},
erH:function erH(d){this.a=d},
Je:function Je(d,e){this.c=d
this.a=e},
bpE:function bpE(d,e){this.b=d
this.a=e},
bfN:function bfN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfM:function bfM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aIE:function aIE(){},
aKG:function aKG(){},
bvl:function bvl(){},
aKH:function aKH(){},
fyD(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fyD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wN.c4().Lo(B.a(["pdf"],x.s),A.tp,!0),$async$fyD)
case 3:q=e
if(q==null||J.ck(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bmV(s,"data:application/pdf;base64,"+A.cS.gcu().aI(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyD,v)},
hYH(d){var w,v,u,t,s,r
try{w=B.jk(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kL(0,w).gM(0)
if(t>0){s=J.aPg(t,1,200)
return s}}catch(r){}return 1},
fyu(d){return C.hYG(d)},
hYG(d){var w=0,v=B.j(x.T),u
var $async$fyu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyu,v)},
bAV(d,e,f,g){return C.hYQ(d,e,f,g)},
hYQ(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bAV=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e6(b6,x.co).gah(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hfm(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lH(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lH(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lH(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lH(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.X()
g=new B.rP()
f=B.Gw(g,null)
a7=B.M()
a7.r=A.qp.gp(0)
f.aY(new B.aa(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.M()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fz
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.qe()
w=7
return B.b(a3.yZ(800,h),$async$bAV)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hm(A.fS),$async$bAV)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dF.gaP(a5))
a7=A.cS.gcu().aI(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a9(b5)
$.am.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bAV,v)},
aOt(d,e,f){return C.hYE(d,e,f)},
hYE(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aOt=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aA:e
r.c=f==null?5.2:f
w=3
return B.b(B.agq(d,e,f,new C.fys(r,q),q,"Sign document"),$async$aOt)
case 3:if(!new B.e6(q,x.co).gah(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bAV(q,t,r.b,r.c),$async$aOt)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b_z(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOt,v)},
hYO(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.h8C(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.h8C(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b_(A.a.aT(A.o.fO(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b_(A.a.aT(A.o.fO(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aJ(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lg&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aJ(p,"&",h)
p=B.aJ(p,"<",g)
p=B.aJ(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aJ(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.h8e(q.ay)+";border:2px solid "+C.h8e(q.ch)+'"></div>'
break
case 5:l=C.fSX(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aJ(n,"&",h)
n=B.aJ(n,"<",g)
n=B.aJ(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aJ(n,'"',e)+"</div>")
p=p?null:l.gaim()
if(p==null)p=A.avi
n=B.T(p)
k=n.k("pK<1>")
j=new B.pK(p,0,8,k)
j.GI(p,0,8,n.c)
j=new B.bV(j,j.gM(0),k.k("bV<ai.E>"))
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
h8e(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
h8C(d){var w=B.aJ(d,"&","&amp;")
w=B.aJ(w,"<","&lt;")
w=B.aJ(w,">","&gt;")
return B.aJ(w,'"',"&quot;")},
bAT(d,e){var w=0,v=B.j(x.H)
var $async$bAT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.c9(null,null,!0,null,new C.fyB(e,C.hYO(e),d),d,null,!0,!0,x.H),$async$bAT)
case 2:return B.h(null,v)}})
return B.i($async$bAT,v)},
bAU(){var w=0,v=B.j(x.T),u,t,s
var $async$bAU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G1(92,2400),$async$bAU)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fyu(s),$async$bAU)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAU,v)},
aOu(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aOu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fUa(d),$async$aOu)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aJ(s,r,"_"))
u=Z.fAS(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOu,v)},
h2B(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b_z:function b_z(d,e,f){this.a=d
this.b=e
this.c=f},
fys:function fys(d,e){this.a=d
this.b=e},
fyB:function fyB(d,e,f){this.a=d
this.b=e
this.c=f},
fyy:function fyy(d){this.a=d},
fyz:function fyz(d,e,f){this.a=d
this.b=e
this.c=f},
fyA:function fyA(d,e,f){this.a=d
this.b=e
this.c=f},
hYF(d){return C.kp(d.w)},
hYM(d){var w,v,u,t
if(d.length===0||!A.d.d9(d,C.i_u()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yc(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aJ(w.toUpperCase(),v,"")
w=$.hl_()
if(w.b.test(u))return u
return null},
hfo(d,e,f){var w,v,u=C.hty(d),t=$.pg()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hYS(d){var w,v,u,t,s=B.aW(x.N)
for(w=J.aX(d.a),v=new B.fG(w,d.b);v.C();){u=w.gU(w).y
t=C.yc(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fyq(d,e){var w,v=d.y,u=C.yc(v==null?"":v)
if(u!=null)return d.y=u
w=C.hYS(new B.a2(e,new C.fyr(d),B.T(e).k("a2<1>")))
v=d.x
return d.y=C.hfo(v==null?"":v,null,w)},
hYR(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kp(w.w))return null
v=w.y
return C.yc(v==null?"":v)},
hxX(){var w,v=$.pg(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fU(u)},
V7(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$V7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$V7)
case 3:if(!e){u=B.V(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f0("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$V7)
case 8:r=e
if(r==null){u=B.V(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a9(m)
$.am.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.V(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V7,v)},
V8(d){return C.hxY(d)},
hxY(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$V8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$V8)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hA("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cF,null),$async$V8)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a9(p)
$.am.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V8,v)},
a77(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a77=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c1(),$async$a77)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.V7(),$async$a77)
case 4:s=a6
r=C.yc(a2==null?"":a2)
if(r==null)r=a3!=null?C.hfo(a3,null,A.I0):null
q=x.N
p=B.aW(q)
for(o=J.dj(s),n=J.aX(o.ghW(s)),m=x.f;n.C();){l=n.gU(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yc(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdL(s),n=n.gah(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gU(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dH.aI(t)
g.n(0,"payload",A.cS.gcu().aI(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RX.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yc(J.k(q==null?"":q))
if(f==null)f=C.h2G(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.V8(s),$async$a77)
case 7:u=new B.aEo(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hxX()
n=r==null
d=n?C.h2G(p):r
q=B.V(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dH.aI(t)
q.n(0,"payload",A.cS.gcu().aI(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.RX.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.V8(s),$async$a77)
case 8:u=new B.aEo(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a77,v)},
h2G(d){var w,v,u=$.pg()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
apR(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$apR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$apR)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.V7(),$async$apR)
case 6:t=f
s=J.a8(t)
r=s.gM(t)
s.bn(t,new C.cbR(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.V8(t),$async$apR)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$apR,v)},
apQ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$apQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yc(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$apQ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.V7(),$async$apQ)
case 6:t=o.jq(f),t=t.gah(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gU(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yc(J.k(q==null?"":q))===p){u=C.a76(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apQ,v)},
a76(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a76=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c1(),$async$a76)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.V7(),$async$a76)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aN(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{s=A.c4.c8(0,A.cB.aI(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.RX.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=7
return B.b(C.V8(p),$async$a76)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a76,v)},
hYL(d,e,f){var w,v=B.V(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("J<1,a4<n,@>>")
w=B.B(new B.J(d,new C.fyx(),w),w.k("ai.E"))
v.n(0,"decks",w)
return v},
fyF(d,e,f,g){var w
if(e!=null){w=B.V(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ad())
return A.R.ao(w,null)}return A.R.ao(C.hYL(d==null?B.a([],x.D):d,f,g),null)},
fyE(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fyE=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a77(h,d,e,f,g),$async$fyE)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yc(e==null?"":e)
u=new B.aEb(s,t)
w=1
break}t=A.dH.aI(h)
t=A.k2.gcu().aI(t)
u=new B.aEb(C.yc(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyE,v)},
fUc(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ac(q)===0)return!1
if(J.cZ(q,"NGMYSLIDESYNC2|"))return!0
if(J.cZ(q,"NGMYSLIDECODE|"))return!0
if(J.cZ(q,"NGMY_SL:"))return!0
if(J.eY(q,s)||J.eY(q,r))return!0
if(J.cZ(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hYP(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fUc(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b_(v,u))
if(C.fUc(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b_(v,s))
if(C.fUc(t))return t}}return null},
fyt(d){var w,v,u,t=A.a.i(d)
if(J.ac(t)===0||J.cZ(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cZ(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c4.c8(0,A.cB.aI(J.mw(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hHC(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agb(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.apQ(t[1]),$async$agb)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fyt(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yc(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.apQ(r),$async$agb)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fyt(s)
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
return B.b(C.a76(t[1]),$async$agb)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fyt(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fyt(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
hHC(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.RX.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fU9(C.V3(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d7(u,x.f)
t=B.cD(t,new C.f7f(w),t.$ti.k("H.E"),x.I)
t=B.B(t,B.a3(t).k("H.E"))
return t}return B.a([],x.D)},
fU9(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aX(v),t=x.f;u.C();){s=u.gU(u)
if(t.b(s)){r=Date.now()
q=$.iW
$.iW=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.V3(B.a1(o,x.N,x.z))
if(e&&C.kp(p.w))p.Q=new B.S(Date.now(),0,!1).a5().bN(144e8).ac()
return p},
bAE(){var w=0,v=B.j(x.aT),u,t,s
var $async$bAE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.G0(),$async$bAE)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agb(s),$async$bAE)
case 4:t=e
u=J.ck(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bAE,v)},
fHb(d){var w=0,v=B.j(x.T),u,t
var $async$fHb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hQ(D.VD,!0,"Dismiss",d,new C.fHc(),new C.fHd(),A.Aq,!0,x.N),$async$fHb)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eJZ)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHb,v)},
i1y(d,e,f,g,h){return B.a5(d,!1).ce(B.ej(new C.fHe(h,e,g,f),!0,null,x.H))},
fyr:function fyr(d){this.a=d},
cbR:function cbR(d){this.a=d},
fyx:function fyx(){},
f7f:function f7f(d){this.a=d},
fHc:function fHc(){},
fHd:function fHd(){},
fHe:function fHe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
V5:function V5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCX:function aCX(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
erb:function erb(){},
er7:function er7(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
er9:function er9(d){this.a=d},
erc:function erc(d){this.a=d},
erd:function erd(d){this.a=d},
erg:function erg(d){this.a=d},
erh:function erh(d){this.a=d},
erf:function erf(d){this.a=d},
eri:function eri(d){this.a=d},
ere:function ere(d){this.a=d},
erj:function erj(d,e){this.a=d
this.b=e},
er6:function er6(d,e){this.a=d
this.b=e},
er5:function er5(d,e){this.a=d
this.b=e},
V6:function V6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biE:function biE(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
erk:function erk(d,e){this.a=d
this.b=e},
erl:function erl(d){this.a=d},
erm:function erm(){},
ern:function ern(d){this.a=d},
ero:function ero(d,e){this.a=d
this.b=e},
aCU:function aCU(d){this.a=d},
aCV:function aCV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ekP:function ekP(d){this.a=d},
ekO:function ekO(){},
ekQ:function ekQ(d){this.a=d},
ekL:function ekL(d){this.a=d},
ekK:function ekK(){},
ekM:function ekM(d){this.a=d},
ekN:function ekN(d){this.a=d},
bsS:function bsS(){},
apS:function apS(d){this.a=d},
aCY:function aCY(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
erq:function erq(d){this.a=d},
erp:function erp(d){this.a=d},
hML(){var w,v,u,t
for(v=0;v<4;++v){w=D.cX1[v]
try{if(Ac.bUw(w)){u=w
return u}}catch(t){}}return null},
Qk(d,e){return C.hVw(d,e)},
hVw(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Qk=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hML()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nT?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qi(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.o9(new C.fsM(c2,b7,o),!1,!1)
b6.lD(0,l)
b9=x.H
B.c9(null,A.da,!1,null,new C.fsN(n,m),c6,null,!0,!0,b9)
k=new C.fsR(b7)
j=new C.fsS()
i=null
t=4
b3=c2.a
h=Aj.aQL(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fJJ(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aVB(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.H0.xZ(i,"dataavailable",new C.fsO(e))
d=new B.bS(new B.bg($.bw,x.dT),x.b2)
A.H0.xZ(i,"stop",new C.fsP(d))
J.agK(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Qk)
case 8:w=7
return B.b(c5.$1(d0),$async$Qk)
case 7:a0=d0
J.fJL(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.agK(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.agK(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Qk)
case 15:w=14
return B.b(c5.$1(d0),$async$Qk)
case 14:a0=d0
case 13:J.fJL(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.agK(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bN(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcv()
else b3=!0
if(!b3){w=17
break}J.fJL(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fw,null,b9),$async$Qk)
case 18:w=16
break
case 17:J.agK(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.agK(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cN(0,A.nC),$async$Qk)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hK(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aJ(c3,b3,"_"))
c0=B.n_(a7)
c0.download=B.t(J.ac(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.KD(b0)
J.lN(b0)
B.bN(A.nB,new C.fsQ(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a9(c4)
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
J.lN(l)
if(p.ph())p.eH()
c3=o
b3=$.aw()
c3.shO(b3)
J.aPl(c3,0)
c3=n
c3.shO(b3)
J.aPl(c3,0)
c3=m
c3.shO(b3)
J.aPl(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qk,v)},
fsM:function fsM(d,e,f){this.a=d
this.b=e
this.c=f},
fsL:function fsL(){},
fsN:function fsN(d,e){this.a=d
this.b=e},
fsR:function fsR(d){this.a=d},
fsS:function fsS(){},
fsO:function fsO(d){this.a=d},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d){this.a=d},
bt3:function bt3(d,e,f){this.c=d
this.d=e
this.a=f},
f1C:function f1C(){},
f1D:function f1D(){},
ccd(d){var w=0,v=B.j(x.at),u,t,s
var $async$ccd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aq1(d,A.yO),$async$ccd)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.by(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ccd,v)},
ccc(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a6O:function a6O(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bin:function bin(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e9k:function e9k(d){this.a=d},
e9i:function e9i(d){this.a=d},
e9j:function e9j(d,e){this.a=d
this.b=e},
a7G:function a7G(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ob$=k
_.oc$=l
_.od$=m
_.ny$=n},
a7H:function a7H(d,e){this.a=d
this.b=e},
b1c:function b1c(){},
cep:function cep(){},
ceq:function ceq(){},
cer:function cer(d,e,f,g,h,i,j,k,l){var _=this
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
hm_(d){return new C.ah1(d)},
a1V:function a1V(){},
ah1:function ah1(d){this.a=d},
aPG:function aPG(){},
avk:function avk(d,e){this.d=d
this.b=e
this.a=null},
aR9:function aR9(d){this.b=d
this.a=null},
fnU(d,e){var w=0,v=B.j(x.H)
var $async$fnU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.X().gxc().L7(d,e),$async$fnU)
case 2:B.fAY()
return B.h(null,v)}})
return B.i($async$fnU,v)},
hcF(d,e){return(A.qX[(d^e)&255]^A.o.aA(d,8))>>>0},
flx(d,e,f,g,h,i){var w=C.hRS(d,A.d9,f,null,A.cW,g,h,i)
return w},
hex(d){var w=F.hff(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hty(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oH.h(0,w)
if(v!=null)return v
for(u=A.oH.gdL(A.oH),u=u.gah(u);u.C();){t=u.gU(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aJ(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
heF(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<33;++w)v+="- "+D.cT1[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
byO(d,e){return C.hOu(d,e)},
hOu(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hK([d],"application/pdf")
n=x.z
q=B.aSL(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cA(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ef(B.jS(o,"share",[p]),x.H),$async$byO)
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
return B.i($async$byO,v)},
fU3(){var w=0,v=B.j(x.y),u,t,s
var $async$fU3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fee
s=$.byl
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.byO(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fU3,v)},
bA9(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bA9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fee
l=$.byl
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.h9i()?3:4
break
case 3:w=5
return B.b(C.byO(m,k),$async$bA9)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bym
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
J.KD(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bA9)
case 10:J.lN(q)
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
return B.i($async$bA9,v)},
fTV(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fTV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bym
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ll.uo(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fTV,v)},
fUb(d,e){var w=0,v=B.j(x.H),u,t
var $async$fUb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hK([d],"text/html"))
t.toString
u=window
u.toString
A.ll.uo(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fUb,v)},
b09(d,e){var w=0,v=B.j(x.y),u
var $async$b09=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b0b(d,e),$async$b09)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b0a(d),$async$b09)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b09,v)}},D,H,Am,A8,Y,V,An,G,F,E,P,W,Q,Z,A_,Ao,Ap,A9,K,A0,N,X,Aa,L,Ab,Aq,O,A1,Ar,As,Ac,Ad,At,Ae,Af,Ag,Au,Av,R,Aw,Ax,I,Ay,Az,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[188]
A5=c[66]
A6=c[153]
Ai=c[49]
Aj=c[57]
U=c[203]
A7=c[52]
Ak=c[130]
Al=c[213]
C=a.updateHolder(c[4],C)
D=c[201]
H=c[116]
Am=c[36]
A8=c[205]
Y=c[202]
V=c[191]
An=c[121]
G=c[172]
F=c[31]
E=c[204]
P=c[91]
W=c[112]
Q=c[132]
Z=c[29]
A_=c[160]
Ao=c[215]
Ap=c[168]
A9=c[134]
K=c[206]
A0=c[60]
N=c[182]
X=c[75]
Aa=c[109]
L=c[141]
Ab=c[104]
Aq=c[208]
O=c[103]
A1=c[119]
Ar=c[86]
As=c[114]
Ac=c[53]
Ad=c[178]
At=c[35]
Ae=c[73]
Af=c[131]
Ag=c[212]
Au=c[214]
Av=c[211]
R=c[67]
Aw=c[108]
Ax=c[209]
I=c[157]
Ay=c[169]
Az=c[216]
S=c[47]
T=c[207]
M=c[189]
A2=c[210]
A3=c[96]
A4=c[56]
C.nI.prototype={
uJ(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tu(t,v)
return new C.nI(t===0?!1:w,v,t)},
bIL(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Cy()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tu(w,u)
return new C.nI(r===0?!1:s,u,r)},
bJb(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Cy()
w=o-d
if(w<=0)return p.a?$.fVx():$.Cy()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tu(w,u)
q=new C.nI(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a1H())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bIL(v)
u=w+v+1
t=new Uint16Array(u)
C.h5V(r.b,w,e,t)
w=r.a
s=C.tu(u,t)
return new C.nI(s===0?!1:w,t,s)},
md(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.U(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bJb(v)
t=w-v
if(t<=0)return n.a?$.fVx():$.Cy()
s=n.b
r=new Uint16Array(t)
C.hDA(s,w,e,r)
w=n.a
q=C.tu(t,r)
p=new C.nI(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a1H())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a1H())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cC6(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a6X(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a6X(t,e)
if(s===0)return $.Cy()
if(r===0)return t.a===e?t:t.uJ(0)
w=s+1
v=new Uint16Array(w)
C.hDy(t.b,s,d.b,r,v)
u=C.tu(w,v)
return new C.nI(u===0?!1:e,v,u)},
GJ(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Cy()
w=d.c
if(w===0)return t.a===e?t:t.uJ(0)
v=new Uint16Array(s)
C.b8c(t.b,s,d.b,w,v)
u=C.tu(s,v)
return new C.nI(u===0?!1:e,v,u)},
bvR(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tu(r,u)
return new C.nI(!1,u,s)},
bvQ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tu(u,r)
return new C.nI(!1,r,v)},
bvS(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tu(p,m)
return new C.nI(s!==0,m,s)},
TU(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Cy()
w=t.a
if(w===e.a){if(w){w=$.a1H()
return t.GJ(w,!0).bvS(e.GJ(w,!0),!0).a6X(w,!0)}return t.bvR(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bvQ(v.GJ($.a1H(),!1),!1)},
ae(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a6X(e,v)
if(C.cC6(u.b,t,e.b,w)>=0)return u.GJ(e,v)
return e.GJ(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uJ(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a6X(e,v)
if(C.cC6(u.b,t,e.b,w)>=0)return u.GJ(e,v)
return e.GJ(u,!v)},
aK(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Cy()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.h5W(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tu(w,t)
return new C.nI(q===0?!1:r,t,q)},
bIK(d){var w,v,u,t
if(this.c<d.c)return $.Cy()
this.aPu(d)
w=$.fP8.c4()-$.aw3.c4()
v=C.fPa($.fP7.c4(),$.aw3.c4(),$.fP8.c4(),w)
u=C.tu(w,v)
t=new C.nI(!1,v,u)
return this.a!==d.a&&u>0?t.uJ(0):t},
cjQ(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aPu(d)
w=C.fPa($.fP7.c4(),0,$.aw3.c4(),$.aw3.c4())
v=C.tu($.aw3.c4(),w)
u=new C.nI(!1,w,v)
if($.fP9.c4()>0)u=u.md(0,$.fP9.c4())
return t.a&&u.c>0?u.uJ(0):u},
aPu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.h5S&&d.c===$.h5U&&g.b===$.h5R&&d.b===$.h5T)return
w=d.b
v=d.c
u=16-A.o.gaiN(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.h5Q(w,v,u,t)
r=new Uint16Array(f+5)
q=C.h5Q(g.b,f,u,r)}else{r=C.fPa(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fPb(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cC6(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b8c(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b8c(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hDz(p,r,i);--o
C.h5W(h,j,0,r,o,s)
if(r[i]<h){m=C.fPb(j,s,o,n)
C.b8c(r,l,n,m,r)
while(--h,r[i]<h)C.b8c(r,l,n,m,r)}--i}$.h5R=g.b
$.h5S=f
$.h5T=w
$.h5U=v
$.fP7.b=r
$.fP8.b=l
$.aw3.b=s
$.fP9.b=u},
gX(d){var w,v,u,t=new C.cC7(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cC8().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nI&&this.aL(0,e)===0},
rR(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uD(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gaiN(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cC9(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cCa(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l_(A.aG.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uJ(0):r
while(v.c>1){u=$.hiW()
if(u.c===0)B.ba(D.b0j)
t=v.cjQ(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bIK(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fU(0)},
$iaQp:1,
$ihD:1}
C.aPQ.prototype={
J(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gM(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cHq(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gah(d){var w=this.a
return new J.jV(w,w.length,B.T(w).k("jV<1>"))}}
C.QY.prototype={
cPl(){var w,v
if(this.as==null)this.ba8()
w=this.as
v=w==null?null:w.ans()
return v==null?null:v.eC()},
ba8(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ans().eC()
this.as=new C.bLI(v)}},
gY(d){return this.at}}
C.a2S.prototype={
a4(){return"CompressionType."+this.b}}
C.bFL.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.co()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yn[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.co()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fw(u,t)&A.yn[d])
s.c=t}return v}}
C.bE6.prototype={
cFJ(d,e){var w,v,u,t,s,r=this,q=new C.bFL(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eq(8)!==66||q.eq(8)!==90||q.eq(8)!==104)return!1
w=r.a=q.eq(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.ci8(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cib(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
ci8(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.dbp[u])v=!1
if(t!==D.cQU[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cib(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.bYQ()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eq(3)
if(q<2||q>6)return-1
v=d3.eq(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eq(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hh2(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hh1()
u=x.an
c9.y=B.c2(6,v,!1,u)
c9.z=B.c2(6,v,!1,u)
c9.Q=B.c2(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bUq(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asg(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asg(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.an(a8,16)
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
a3=c9.asg(d3)
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
d4.bF(c3)
c1=(c1<<8^D.Gv[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Gx[b9];++b9
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
if(b8===0){b8=D.Gx[b9];++b9
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
if(b8===0){b8=D.Gx[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Gx[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Gx[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bF(c3)
c1=c1<<8^D.Gv[c1>>>24&255^v];--c2}d4.bF(c3)
c1=(c1<<8^D.Gv[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bF(c7)
c1=(c1<<8^D.Gv[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bF(c7)
c1=(c1<<8^D.Gv[c1>>>24&255^c7&255])>>>0
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
asg(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eq(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eq(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bUq(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bYQ(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cuh.prototype={
aG0(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bLR(e)
if(q<0)return
e.c=q
if(e.aJ()!==101010256)return
e.aU()
e.aU()
e.aU()
e.aU()
r.f=e.aJ()
r.r=e.aJ()
w=e.aU()
if(w>0)e.aG3(w,!1)
r.ciw(e)
q=r.r
v=r.f
u=e.aJ0(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aJ()!==33639248)break
s=new C.b6T()
s.cPk(0,u,e,f)
q.push(s)}},
ciw(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a6A(20,r)
if(w.aJ()!==117853008){d.c=s
return}w.aJ()
v=w.rF()
w.aJ()
d.c=v
if(d.aJ()!==101075792){d.c=s
return}d.rF()
d.aU()
d.aU()
d.aJ()
d.aJ()
d.rF()
d.rF()
u=d.rF()
t=d.rF()
this.f=u
this.r=t
d.c=s},
bLR(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a6A(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.akz(A.hR)
o.aKh(r.eC(),A.hR,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aJ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cuf.prototype={}
C.avI.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cui.prototype={
aG0(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aJ()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aBH.h(0,e.aU())
o.c=w==null?D.KT:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aJ()
o.r=e.aJ()
o.w=e.aJ()
v=e.aU()
u=e.aU()
o.x=e.amg(v)
o.y=e.h7(u).eC()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aRp:D.D_
o.ay=f
o.Q=e.h7(t)
if(o.at!==D.D_&&u>2){w=o.y
w.toString
s=B.qY(w,A.hR,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amg(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aRq
o.ax=new C.cuf(r,q)
w=D.aBH.h(0,q)
o.c=w==null?D.KT:w}}}if((o.b&8)!==0){p=e.aJ()
if(p===134695760)o.f=e.aJ()
else o.f=p
o.r=e.aJ()
o.w=e.aJ()}},
gM(d){return this.bjy().length},
ans(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qY(new Uint8Array(0),A.hR,q,q)
w=r.at
if(w!==D.D_)if(p.gM(0)<=0)r.at=D.D_
else{if(w===D.aRp){p=r.bH4(p)
r.Q=p}else if(w===D.aRq){p=r.bGI(p)
r.Q=p}r.at=D.D_}w=r.c
if(w===D.aex){v=p.c
u=B.df()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.p3.B5(p.eC(),!0,!1)
else{t=B.a7v(A.hR,r.w)
p=r.Q
p.toString
A.p3.a2P(p,t,!0,!1)
u.b=t.Gh()}r.Q.c=v
return B.qY(u.bd(),A.hR,q,q)}else if(w===D.aey){s=B.a7v(A.hR,32768)
p=r.Q
v=p.c
C.hma().cFJ(p,s)
u=s.Gh()
r.Q.c=v
return B.qY(u,A.hR,q,q)}else return B.qY(p.eC(),A.hR,q,q)},
bjy(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eC()},
u(d){return this.x},
b65(d){var w=this.ch,v=C.J1(C.hcF(w[0].O(0),d))
w[0]=v
v=w[1].ae(0,v.TU(0,C.J1(255)))
w[1]=v
w[1]=v.aK(0,C.J1(134775813)).ae(0,C.J1(1)).TU(0,C.J1(4294967295))
w[2]=C.J1(C.hcF(w[2].O(0),w[1].md(0,24).O(0)))},
aOV(){var w=(this.ch[2].TU(0,C.J1(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bH4(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qY(new Uint8Array(0),A.hR,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b65(u[v.c++]^r.aOV())}t=r.Q.eC()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aOV()
r.b65(s)
u&2&&B.aj(t)
t[w]=s}return B.qY(t,A.hR,q,q)},
bGI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h7(8).eC()
v=16}else if(k===2){w=d.h7(12).eC()
v=24}else{w=d.h7(16).eC()
v=32}u=d.h7(2).eC()
t=d.h7(d.gM(0)-10)
s=d.h7(10)
r=t.eC()
k=this.ay
k.toString
q=C.hDf(k,w,v)
p=new Uint8Array(B.cp(A.aG.dn(q,0,v)))
k=v*2
o=new Uint8Array(B.cp(A.aG.dn(q,v,k)))
if(!C.h5l(A.aG.dn(q,k,k+2),u))throw B.U(B.fk("password error"))
k=new Uint8Array(16)
n=new C.bCH(k,new Uint8Array(16),p)
k=x.S
m=J.a4h(0,k)
m=n.r=new C.cee(m)
m.c=!0
m.b=m.biS(!0,new C.arp(p))
if(m.c)m.d=B.bl(D.nR,!0,k)
else m.d=B.bl(D.yg,!0,k)
l=C.h3z(C.h3B(),64)
l.bcr(new C.arp(o))
n.w=l
n.cOU(r,0,r.length)
k=s.eC()
m=n.x
m===$&&B.c()
if(!C.h5l(k,m))throw B.U(B.fk("macs don't match"))
return B.qY(r,A.hR,null,null)}}
C.b6T.prototype={
cPk(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aJ()
n.w=e.aJ()
n.x=e.aJ()
w=e.aU()
v=e.aU()
u=e.aU()
n.y=e.aU()
e.aU()
n.Q=e.aJ()
n.as=e.aJ()
if(w>0)n.at=e.amg(w)
if(v>0){t=e.h7(v).eC()
n.ax=t
if(v>=4){s=B.qY(t,A.hR,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a6A(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rF()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rF()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rF()
p-=8}if(p>=4&&n.y===65535)n.y=o.aJ()}}}}if(u>0)e.amg(u)
f.c=n.as
t=new C.cui(D.KT,n,D.D_,B.a([C.J1(0),C.J1(0),C.J1(0)],x.f3))
n.ch=t
t.aG0(0,f,g)},
u(d){return this.at}}
C.cug.prototype={
cFK(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cuh(B.a([],x.fT))
this.a=g
g.aG0(0,d,f)
g=B.a([],x.bm)
w=B.V(x.N,x.S)
v=new C.aPQ(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.QY(o,A.o.an(Date.now(),1000),0):C.fWU(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fWU(o,q.w,q)
if(k.as==null)k.ba8()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.akz(A.hR)
j.aKh(o,A.hR,h,h)}i=j==null?h:j.eC()
if(i!=null)new B.JJ(!1).Hk(i,0,h,!0)}}return v}}
C.bCH.prototype={
cOU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.C0(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hlU(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bKg(u,0,w,0,o)}else{o===$&&B.c()
q.bH8(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Kt(w,0)
m.x=A.aG.dn(m.x,0,10)
w=m.w
l=w.a
l.lm(0)
w=w.d
w===$&&B.c()
l.C0(0,w,0,w.length)
return f}}
C.cej.prototype={}
C.cen.prototype={}
C.ceh.prototype={}
C.arp.prototype={}
C.cem.prototype={
cFZ(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e3(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bcr(new C.arp(A.aG.fH(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bLe(n.a,n.b,t,s,r)
r+=v}A.aG.hi(f,g,g+w,s)
return o.a.c},
bLe(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.U(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.C0(0,d,0,d.length)
v.C0(0,f,0,4)
u=m.c
u===$&&B.c()
w.Kt(u,0)
u=m.c
A.aG.hi(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.C0(0,s,0,s.length)
w.Kt(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cei.prototype={}
C.ceg.prototype={}
C.arq.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.arq){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rR(d,e){var w=this.a
w===$&&B.c()
w=A.o.rR(w,e.gbUH())
if(!w)e.gbUH()
return w},
aIt(d,e){this.a=0
this.b=d},
rV(d){return this.aIt(d,null)},
aJ3(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fc(""),u=w.a
u===$&&B.c()
w.aZ3(v,u)
u=w.b
u===$&&B.c()
w.aZ3(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aZ3(d,e){var w,v=A.o.fO(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cel.prototype={
lm(d){var w,v=this
v.a.rV(0)
v.c=0
A.aG.hb(v.b,0,4,0)
v.w=0
w=v.r
A.d.hb(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
amX(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b_y(u,0)
v.c=0}v.a.aJ3(1)},
C0(d,e,f,g){var w=this.ch0(e,f,g)
f+=w
g-=w
w=this.ch1(e,f,g)
this.cgS(e,f+w,g-w)},
Kt(d,e){var w,v=this,u=C.h3A(v.a),t=u.a
t===$&&B.c()
t=C.fUF(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fUF(w,3)
v.cgW()
v.cgT(u)
v.ar6()
v.cb7(d,e)
v.lm(0)
return 20},
b_y(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nS(A.aG.gaP(d),d.byteOffset,d.length).getUint32(e,A.i1===w.d)
if(w.w===16)w.ar6()},
ar6(){this.cOT()
this.w=0
A.d.hb(this.r,0,16,0)},
cgS(d,e,f){while(f>0){this.amX(d[e]);++e;--f}},
ch1(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b_y(d,e)
e+=4
f-=4
w.aJ3(4)
v+=4}return v},
ch0(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.amX(d[e]);++e;--f;++v}return v},
cgW(){this.amX(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.amX(0)}},
cgT(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.ar6()
u=v.d
switch(u){case A.i1:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Dq:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.U(B.bd("Invalid endianness: "+u.u(0)))}},
cb7(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i1===this.d,s=0;s<w;++s){r=v[s]
q=J.nS(A.aG.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.ceo.prototype={
cOT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pT[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pT[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pT[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pT[30]
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
C.cek.prototype={
bcr(d){var w,v,u,t,s=this,r=s.a
r.lm(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.C0(0,w,0,v)
w=s.d
w===$&&B.c()
r.Kt(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hi(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hb(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hi(w,0,u,s.d)
s.b7e(s.d,u,54)
s.b7e(s.e,u,92)
u=s.d
r.C0(0,u,0,u.length)},
Kt(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Kt(s,w)
s=u.e
t.C0(0,s,0,s.length)
v=t.Kt(d,e)
s=u.e
A.aG.hb(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.C0(0,s,0,s.length)
return v},
b7e(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cef.prototype={}
C.cee.prototype={
a1c(d){return(D.nR[d&255]&255|(D.nR[d>>>8&255]&255)<<8|(D.nR[d>>>16&255]&255)<<16|D.nR[d>>>24&255]<<24)>>>0},
biS(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.U(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e1(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1c((m>>>8|(m&$.pT[24])<<24)>>>0)^D.ctu[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1c((k>>>8|(k&$.pT[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1c((k>>>8|(k&$.pT[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nS(A.aG.gaP(e),e.byteOffset,w)
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
p=(p^f.a1c((g>>>8|(g&$.pT[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1c(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.U(B.bd("Should never get here"))}return s},
bKg(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nS(A.aG.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e6[a8&255]
u=D.e6[a9>>>8&255]
t=$.pT[8]
s=D.e6[b0>>>16&255]
r=$.pT[16]
q=D.e6[b1>>>24&255]
p=$.pT[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e6[a9&255]
s=D.e6[b0>>>8&255]
u=D.e6[b1>>>16&255]
v=D.e6[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e6[b0&255]
u=D.e6[b1>>>8&255]
s=D.e6[a8>>>16&255]
q=D.e6[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e6[b1&255]
a8=D.e6[a8>>>8&255]
a9=D.e6[a9>>>16&255]
b0=D.e6[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e6[n&255]
b0=D.e6[m>>>8&255]
a9=D.e6[l>>>16&255]
a8=D.e6[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e6[m&255]
b0=D.e6[l>>>8&255]
o=D.e6[b1>>>16&255]
s=D.e6[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e6[l&255]
o=D.e6[b1>>>8&255]
b0=D.e6[n>>>16&255]
u=D.e6[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e6[b1&255]
o=D.e6[n>>>8&255]
s=D.e6[m>>>16&255]
v=D.e6[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e6[a8&255]^C.ng(D.e6[a9>>>8&255],24)^C.ng(D.e6[b0>>>16&255],16)^C.ng(D.e6[b1>>>24&255],8)^b6[w][0]
m=D.e6[a9&255]^C.ng(D.e6[b0>>>8&255],24)^C.ng(D.e6[b1>>>16&255],16)^C.ng(D.e6[a8>>>24&255],8)^b6[w][1]
l=D.e6[b0&255]^C.ng(D.e6[b1>>>8&255],24)^C.ng(D.e6[a8>>>16&255],16)^C.ng(D.e6[a9>>>24&255],8)^b6[w][2]
b1=D.e6[b1&255]^C.ng(D.e6[a8>>>8&255],24)^C.ng(D.e6[a9>>>16&255],16)^C.ng(D.e6[b0>>>24&255],8)^b6[w][3]
a7=D.nR[n&255]
b0=D.nR[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nR[l>>>8&255]
a9=D.nR[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nR[b1>>>8&255]
h=D.nR[n>>>16&255]
g=D.nR[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nR[l>>>24&255]
s=s[3]
a1=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nS(A.aG.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bH8(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nS(A.aG.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e5[a6&255]
v=D.e5[b0>>>8&255]
u=$.pT[8]
t=D.e5[a5>>>16&255]
s=$.pT[16]
r=D.e5[a4>>>24&255]
q=$.pT[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e5[a4&255]
t=D.e5[a6>>>8&255]
v=D.e5[b0>>>16&255]
w=D.e5[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e5[a5&255]
v=D.e5[a4>>>8&255]
t=D.e5[a6>>>16&255]
r=D.e5[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e5[b0&255]
a5=D.e5[a5>>>8&255]
a4=D.e5[a4>>>16&255]
a6=D.e5[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e5[p&255]
a6=D.e5[b0>>>8&255]
a4=D.e5[n>>>16&255]
a5=D.e5[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e5[o&255]
a4=D.e5[p>>>8&255]
a7=D.e5[b0>>>16&255]
t=D.e5[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e5[n&255]
a7=D.e5[o>>>8&255]
a5=D.e5[p>>>16&255]
v=D.e5[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e5[b0&255]
a7=D.e5[n>>>8&255]
t=D.e5[o>>>16&255]
w=D.e5[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e5[a6&255]^C.ng(D.e5[b0>>>8&255],24)^C.ng(D.e5[a5>>>16&255],16)^C.ng(D.e5[a4>>>24&255],8)^b5[a9][0]
o=D.e5[a4&255]^C.ng(D.e5[a6>>>8&255],24)^C.ng(D.e5[b0>>>16&255],16)^C.ng(D.e5[a5>>>24&255],8)^b5[a9][1]
n=D.e5[a5&255]^C.ng(D.e5[a4>>>8&255],24)^C.ng(D.e5[a6>>>16&255],16)^C.ng(D.e5[b0>>>24&255],8)^b5[a9][2]
b0=D.e5[b0&255]^C.ng(D.e5[a5>>>8&255],24)^C.ng(D.e5[a4>>>16&255],16)^C.ng(D.e5[a6>>>24&255],8)^b5[a9][3]
a4=D.yg[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yg[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yg[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yg[o>>>8&255]
i=D.yg[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yg[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nS(A.aG.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bLH.prototype={}
C.bLI.prototype={
gM(d){var w=this.a.length
return w},
ans(){return B.qY(this.a,A.hR,null,null)}}
C.b8r.prototype={
uF(d){return C.hGs(d)}}
C.cof.prototype={
M2(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a93(v,t+20,u+16,t,u,B.tE(d.x))},
n9(d){return!1}}
C.bMA.prototype={
cA8(d){if(this.b)throw B.U(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bMB(),x.E))},
mt(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.U(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mt)
case 6:w=5
return B.b(p.fnU(f,r),$async$mt)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mt,v)}}
C.aup.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7t.prototype={
A(d,e){if(e==null)return!1
if(J.bL(e)!==B.b_(this))return!1
return e instanceof C.a7t&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wr(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fsn)return"["+(w+B.e3(this.a))+"]"
return"[ObjectKey "+(w+B.e3(this.a))+"]"}}
C.aUd.prototype={
c_(d){var w=new C.azf(!0,this.e,null,new B.dd(),B.cg())
w.bY()
w.scB(null)
return w},
c7(d,e){var w
x.cQ.a(e)
e.syi(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aED()}}}
C.azf.prototype={
syi(d,e){return},
gpe(){var w=this.ab$
return w!=null},
gkT(){var w=this.ab$
return w!=null},
LS(d){var w=d==null?B.fZh(null):d
w.sa3J(this.ak)
return w}}
C.a_V.prototype={
T(){return new C.aHD(B.aW(x.N))},
cN5(d){return this.d.$1(d)},
cKT(){return this.e.$0()}}
C.aHD.prototype={
a_(){this.a1()
this.Op()},
Op(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Op=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cKT(),$async$Op)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f04(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Op,v)},
Y1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Y1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f08(t),q),q.k("H.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f09(t))
w=3
return B.b(C.amj(p),$async$Y1)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f0a(t,s,p))
w=4
return B.b(t.Op(),$async$Y1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Y1,v)},
a0b(d){return this.cl2(d)},
cl2(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0b=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f05(t))
s=J.q(d,"id")
w=3
return B.b(C.bX0(J.k(s==null?"":s)),$async$a0b)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f06(t))
w=1
break}q=C.fU9(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cN5(B.a([q],x.D)),$async$a0b)
case 4:if(t.c==null){w=1
break}t.m(new C.f07(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0b,v)},
Oo(d,e){return this.bHx(0,e)},
bHx(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oo=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.f0_(q),r,null,!0,!0,x.y),$async$Oo)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f00(t))
s=s.h(e,"id")
w=4
return B.b(C.ami(J.k(s==null?"":s)),$async$Oo)
case 4:if(t.c==null){w=1
break}t.m(new C.f01(t))
w=5
return B.b(t.Op(),$async$Oo)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oo,v)},
czb(d){var w=B.bi(d),v=w==null?null:w.bR()
if(v==null)return""
return A.i7[B.bG(v)-1]+" "+B.bQ(v)},
aOM(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.No,A.n),w,e,w,w,w,w,w,e)},
aOL(d){return this.aOM(d,44)},
b4t(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.No:u,r=B.m(14),q=B.W(e,t?A.c:A.ay,u,u,u,17),p=x.p
q=B.a([q,L.Id,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.ay,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Id,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bt1,u,u,u)],p))}return B.D(B.aE(A.c5,B.dg(u,B.A(q,A.m,u,A.ba,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hV,u,u,u,A.uS,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f0e(this,d),u,u,u,u,u,u,!1,A.a8),1)},
ceZ(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d7.j(0.14):D.Wy,n=B.m(18),m=p?A.d7:A.dq
m=B.I(m,A.r,p?1.8:1)
w=this.aOL(A.pB)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aOG,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.v(B.a([v,A.d0,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aOI,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.No:q
u=p?q:B.I(A.b5,A.r,1.6)
r=p?D.bI9:q
return B.aE(q,B.dg(q,B.A(B.a([w,A.bf,t,B.dg(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.db,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f03(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cmA(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.czb(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.r,1)
v=r.aOL(A.MC)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aOG,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.v(B.a([u,A.d0,B.d(p+" slides"+t,q,q,q,q,q,q,D.aOI,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b1b(A.hx,A.bs,"Bring it back",r.r?q:new C.f0b(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b1b(A.e4,A.cr,"Delete",r.r?q:new C.f0c(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Wy,q,w,o,q,q,A.n),q,q,q,A.db,D.bnA,q,q,q)},
b1b(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.ho(B.aE(w,B.p(w,B.W(d,v?A.b5:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
arn(d,e,f){var w=null
return new B.C(D.bmD,B.v(B.a([B.W(d,A.b5,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f_P,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eTq,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bS,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b5,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aOM(A.y3,46),A.bf,D.btR],t)
if(j.r)s.push(D.e1s)
s.push(B.aH(i,i,i,i,A.N9,i,i,i,new C.f0h(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.r,1)
o=J.a8(h)
q=B.a([A.S,u,new B.C(D.bq8,s,i),B.p(i,B.A(B.a([j.b4t(0,A.xD,"Save",j.a.c.length),j.b4t(1,A.MR,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bpc,A.en,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cr:A.bs).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cr:A.bs).j(0.4),A.r,1)
p=j.y
n=p?A.MD:A.ee
n=B.W(n,p?A.cr:A.bs,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.D(B.d(m,i,i,i,i,i,i,A.a6s,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bp8,A.iN,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eWX,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eZW,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f0i(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.arn(A.pB,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.ceZ(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e10)
else if(j.e==null)s.push(j.arn(A.aja,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.arn(A.os,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gah(h);r.C();)s.push(j.cmA(r.gU(r)))
A.d.v(u,s)}q.push(new B.dm(1,A.ci,B.cB(u,i,Y.agi,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc0j()
p=s?i:D.No
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ad(0,A.G,A.b4.j(0.4),A.cy,18)],x.V)
u=u.a
m=u===0
k=B.W(A.xD,m?A.j3:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bpL,B.aE(i,B.dg(i,B.A(B.a([k,A.a5T,new B.dm(1,A.ci,B.f1(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j3:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.ba,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hV,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bm(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aYh,i,i,i,i,i,i,i,i)}}
C.o8.prototype={
ad(){return B.E(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.XI.prototype={
T(){return new C.awf(B.a([],x.k),B.fe(null,x.H))},
gdX(){return this.c}}
C.awf.prototype={
a_(){this.a1()
this.Ow()},
Ow(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ow=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a0T(t.a.c),$async$Ow)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cDv(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ow,v)},
csA(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q0(t.d,new C.cDy(d))
v=w<0
if(v&&C.hDC(d))return t.f
u=t.d
if(v)J.pk(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fKZ(new C.cDz(t),v)
return t.f=t.f.bz(new C.cDA(t,d),v).eT(new C.cDB())},
I4(d,e,f){return this.c8F(0,e,f)},
aWh(d,e){return this.I4(0,e,!1)},
c8F(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$I4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).ce(B.ej(new C.cDu(t,e),!1,null,x.H)),$async$I4)
case 3:w=4
return B.b(t.f,$async$I4)
case 4:w=5
return B.b(t.Ow(),$async$I4)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I4,v)},
aVy(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dnI:d
this.I4(0,new C.o8(w,v,new B.S(Date.now(),0,!1)),!0)},
c_P(){return this.aVy(null)},
ac4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ac4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.cDC(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ac4)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aVy(s)
case 1:return B.h(u,v)}})
return B.i($async$ac4,v)},
I3(d,e){return this.bHp(0,e)},
bHp(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.cDp(e),s,null,!0,!0,x.y),$async$I3)
case 3:if(g!==!0){w=1
break}t.m(new C.cDq(t,e))
w=4
return B.b(t.f,$async$I3)
case 4:w=5
return B.b(C.af9(t.a.c,e.a),$async$I3)
case 5:w=6
return B.b(t.Ow(),$async$I3)
case 6:case 1:return B.h(u,v)}})
return B.i($async$I3,v)},
CK(d){return this.bzG(d)},
bzG(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.cDl(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CK)
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
return B.b(t.aWh(0,d),$async$CK)
case 9:w=5
break
case 7:w=10
return B.b(F.fUH(r,d.b,null),$async$CK)
case 10:w=5
break
case 8:w=11
return B.b(t.I3(0,d),$async$CK)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CK,v)},
bUE(){var w,v,u=null,t=[D.dnL,D.dnJ,D.dnK],s=new C.cDs(),r=B.m(26),q=x.V,p=B.a([new B.ad(0,A.G,A.dj.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aV(999,999)
n.push(B.p(u,new B.x(D.d8g[w],u,A.o1,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nI,u,u,u))}return B.p(u,B.A(B.a([B.D(B.v(B.a([D.fnV,A.P,B.c_(A.bD,n,A.bt,6,6),A.aO,B.aE(u,B.p(u,D.eCC,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ad(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.agF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cDr(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a6(130,110,new B.an(A.A,u,A.aa,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bQ3,A.n),u,u,u,u,D.bqi,u,u,u)},
bzE(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ad(0,A.G,A.w.j(0.5),A.cy,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.an(A.W,v,A.b_,A.q,B.a([B.f1(A.A,F.amR(d.b),A.f,A.bQ),D.e6L,B.ao(v,B.aE(v,B.p(v,D.bIW,A.f,v,v,D.aZc,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDg(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eQS,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fF(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eX6,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,new C.cDh(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cDi(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.C(H.afe,B.ho(B.aE(s,B.p(s,A.alV,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ad(0,A.G,A.b4.j(0.5),A.J,12)],x.V),E.vr,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc14(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mL,s,s,s,!0,s,s,s,s,s,D.fnZ,s,s,s,1,s,!0)
if(t.e)r=D.b1A
else{w=t.bUE()
v=B.a([D.fa6,A.ab],r)
if(J.cw(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ac(t.d),s,s,s,s,s,s,D.eQi,s,s,s),A.f,s,s,new B.o(D.b69,s,s,u,s,s,A.n),s,s,s,s,A.xl,s,s,s))}r=B.a([new B.nF(A5.XH,new B.lY(w,s),s),new B.nF(D.bpF,new B.lY(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ck(t.d))r.push(D.eIC)
else r.push(new B.nF(D.bpa,B.O8(new B.od(new C.cDD(t),J.ac(t.d),!0,!0,!0,0,B.rE(),s),D.b0S),s))
r=B.ve(0,s,A.q,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.cb(q,D.b4Y,r,s,!1,!1,s,s)}}
C.XG.prototype={
T(){return new C.awb(B.a([],x.bx))},
Ta(d){return this.d.$1(d)}}
C.aDx.prototype={}
C.awb.prototype={
aZ5(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b2,A.aN),w),u=this.gaWg()
v.aM(0,u)
w=new B.ar(new B.bb(e,A.b2,A.aN),w)
w.aM(0,u)
return new C.aDx(v,w,f)},
Dz(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cM(A.pp,new C.cCK(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b2,A.aN),v)
t=m.gaWg()
u.aM(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ar(new B.bb(w.b,A.b2,A.aN),v)
u.aM(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ar(new B.bb(w.c,A.b2,A.aN),v)
u.aM(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b2,A.aN),v)
o.aM(0,t)
n=new B.ar(new B.bb(p.b,A.b2,A.aN),v)
n.aM(0,t)
r.push(new C.aDx(o,n,p.c))}if(r.length===0)r.push(m.aZ5("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goQ()
q=r.a
q.Ta(q.c)}q=r.d
q===$&&B.c()
w=q.S$=$.aw()
q.P$=0
q=r.e
q===$&&B.c()
q.S$=w
q.P$=0
q=r.f
q===$&&B.c()
q.S$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.S$=w
s.P$=0
s=t.b
s.S$=w
s.P$=0}r.a2()},
goQ(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mj(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.r2(n,w,v,t,u)},
An(){var w=0,v=B.j(x.H),u=this,t
var $async$An=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goQ()
t=u.a
w=2
return B.b(t.Ta(t.c),$async$An)
case 2:return B.h(null,v)}})
return B.i($async$An,v)},
c12(){this.m(new C.cCJ(this))
this.Dz()},
aVf(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cCM(w,d,v))
w.Dz()},
c13(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cCU())
this.Dz()
$.aT.x1$.push(new C.cCV(w))},
PF(d){return this.ceP(d)},
ceP(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(80,1400,A.eG),$async$PF)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$PF)
case 8:p=f
o=q.b.toLowerCase()
n=J.agG(o,".png")?"image/png":"image/jpeg"
r.m(new C.cCN(d,n,p))
r.Dz()
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
return B.i($async$PF,v)},
xk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hgi(r,t.goQ()),$async$xk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cCL(t,s))
t.Dz()
case 1:return B.h(u,v)}})
return B.i($async$xk,v)},
cf6(d){var w,v=this,u=null,t=F.fs2(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hc(D.bCi,D.fcu,new C.cCP(v,d),u),u)
w=x.p
return new B.C(A.cG,new B.an(A.W,u,A.aa,A.q,B.a([B.bv(B.m(12),B.fL(t,A.A,u,u,A.cn,A.bQ,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b1c(A.kJ,new C.cCQ(v,d)),A.bp,v.b1c(A.cx,new C.cCR(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b1c(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.C(A.hu,B.W(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.af)},
I5(){var w=0,v=B.j(x.H),u,t=this,s
var $async$I5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.An(),$async$I5)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fUH(s,t.goQ(),new C.cCT(t)),$async$I5)
case 4:case 1:return B.h(u,v)}})
return B.i($async$I5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.C(A.qD,B.hc(D.bGV,D.fik,n.gav0(),B.fu(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.alU,m,m,m,new C.cCW(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.VJ,m,1,m,m,m,!1,m,!1,E.mL,m,m,m,!0,m,m,m,m,m,D.fdj,m,m,m,1,m,!0),j=At.aSW(N.l0,A.c,Ae.UE,A.nM,D.fe2,n.gc11()),i=B.m(18),h=n.gav_(),g=B.a([new B.ad(0,A.G,A.w.j(0.4),A.je,12)],x.V)
g=B.aE(m,B.p(m,new B.a6(92,142.1818181818182,B.f1(A.A,F.amR(n.goQ()),A.f,A.dt),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.ev,B.D(B.v(B.a([D.fpt,A.at,B.d(F.fTd(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f1y,m,m,m),A.S,B.dp(E.alb,E.aPr,h,B.bk(A.dj,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.VJ,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.o0,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.az,h,A.P,w,A.P,B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.df),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aV(16,16)
u=new B.az(N.l0.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bFF,m,m,m,v===0?m:new C.cCX(n,v),m,m,m,m,"Move up",A.c7)
r=i.length
q=B.aH(m,m,m,m,D.bLS,m,m,m,v===r-1?m:new C.cCY(n,v),m,m,m,m,"Move down",A.c7)
r=r===1?m:new C.cCZ(n,v)
p=new B.aV(12,12)
o=new B.aV(12,12)
g.push(B.p(m,B.v(B.a([new B.co(A.aQ,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f24,m,m,m,m,m,m,m,m,m),A.b3,s,q,B.aH(m,m,m,m,B.W(A.e4,A.oj,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c7)],l),m),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e0(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a5,m,A.am,m,m,m,m),A.ao,n.cf6(i[v]),B.aL(m,A.T,!1,m,!0,A.q,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e0(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.df),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mL,m,new B.bP(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a7t(h),A.e3,D.bnP,m,m,m))}return B.oa(!0,B.cb(k,E.ads,B.cB(g,m,D.bog,m,m,A.ah,!1),m,!1,!1,j,m),new C.cD_(n),x.C)}}
C.awd.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cr:E.mL,q=B.m(16),p=B.m(16),o=s?A.aB.j(0.08):A.c.j(0.04)
s=s?A.aB.j(0.16):A.dj.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.D(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(u.e,t,t,t,t,t,t,D.aO3,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.W(A.eo,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.af),t)}}
C.aoZ.prototype={
T(){return new C.aCj()}}
C.aCj.prototype={
a_(){this.a1()
this.YE()},
br(d){this.bE(d)
if(d.c!=this.a.c)this.a00()},
a00(){var w=0,v=B.j(x.H),u=this,t
var $async$a00=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$a00)
case 2:u.d=null
if(u.c!=null)u.m(new C.e48(u))
w=3
return B.b(u.YE(),$async$a00)
case 3:return B.h(null,v)}})
return B.i($async$a00,v)},
YE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ac(n)===0){w=1
break}t=4
if(J.cZ(n,"http://")||J.cZ(n,"https://")||J.cZ(n,"data:")){o=B.Xi(B.cv(n,0,null),new B.Ow(!0))
r.d=o}else{o=B.fk("unsupported video ref")
throw B.U(o)}w=7
return B.b(o.i2(0).cN(0,A.pm),$async$YE)
case 7:if(r.c==null){w=1
break}r.d.rX(!1)
r.m(new C.e46(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a9(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e47(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YE,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c3z(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fZ(0)
w.m(new C.e49(w))}else{v.px(0)
w.m(new C.e4a(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j_.j(0.92),D.K_.j(0.95)],x.O)
w=B.I(A.bV.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.pE,A.bV,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bZ(B.av(B.v(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.W(A.akt,A.ay,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b2o
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f1(A.A,new B.a6(r,q,new B.zF(s,o),o),A.q,A.bQ)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.W(A.iO,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bv(n,new B.an(A.W,o,A.b_,A.q,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc3y(),o,o,o,o,o,o,!1,A.a8)}}
C.xa.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jg.prototype={}
C.acb.prototype={
B(d){return B.oD(new C.dUR(this,B.N(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.abB.prototype={
B(d){var w,v,u=null,t=B.N(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.I(D.j_.j(t?0.35:0.4),A.r,1),p=t?D.Ks:A.c,o=x.V,n=B.a([new B.ad(0,A.G,A.w.j(t?0.3:0.08),A.cy,14)],o),m=B.m(10),l=B.I(A.bV.j(0.5),A.r,1)
o=B.a([new B.ad(0,A.G,A.w.j(0.14),A.dA,6)],o)
w=this.c
o=B.D(B.p(u,new B.fF(0.5625,C.hVR(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ah8,u,u,u,u),1)
m=D.j_.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j_,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.d0,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.ay:D.bbY,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bP(new B.az(m,1,A.r,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.aft,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.af)}}
C.xd.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nv.prototype={}
C.bhq.prototype={
Vb(d){var w=null
return new B.bI(A.a3,w,w,B.Dk(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bzk(){return this.Vb(1)},
avG(d){var w=null,v=B.m(8),u=B.I(A.hT,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.abD,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hT,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hT,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.ba,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ao,w.avG("TAARIFA ZA WANANDOA"),A.ao,w.bzk(),A.d0,w.Vb(0.9),A.d0,w.Vb(0.7),A.P,w.avG("TAMKO LA MAKUBALIANO"),A.fV,w.Vb(1),A.d0,w.Vb(0.95),A.P,w.avG("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ace.prototype={
B(d){return B.oD(new C.e9n(B.N(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.adT.prototype={
B(d){var w,v,u,t,s,r=null,q=B.N(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.I(A.av.j(q?0.35:0.4),A.r,1),m=q?D.bby:A.c,l=x.V,k=B.a([new B.ad(0,A.G,A.w.j(q?0.3:0.08),A.cy,14)],l),j=B.m(10),i=B.I(A.av.j(0.5),A.r,1)
l=B.a([new B.ad(0,A.G,A.w.j(0.14),A.dA,6)],l)
w=this.c
v=C.fTI(w.a)
if(v==null)v=A.d.gL(D.PQ)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.D(B.p(r,new B.fF(0.5625,new B.an(A.W,r,A.b_,A.q,B.a([B.bY(0,B.fL(C.fTH(v.d),A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),0,0,0),new B.C(A.ag9,new C.bhq(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ah8,r,r,r,r),1)
j=A.av.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Kt,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.d0,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.ay:D.b5t,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bP(new B.az(j,1,A.r,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.aft,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.af)}}
C.kJ.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a6X.prototype={}
C.UR.prototype={
T(){var w=$.aw()
return new C.aCC(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mr(0,null,null),A.d.gL(D.a1A),D.dy0,B.a([],x.L),B.a([],x.gE))}}
C.aCC.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.z2(C.fvW(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fuS().bz(new C.ecF(v),w)
$.tP().kc(0,"assets/images/ngmy_logo.png").bz(new C.ecG(v),w).eT(new C.ecH())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
afX(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
In(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$In=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(88,1600,A.eG),$async$In)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$In)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hgz(m,p),$async$In)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bBi(new B.px(o,1),m),$async$In)
case 10:if(r.c!=null)r.m(new C.ech(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a9(k)
r.afX("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$In,v)},
VU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hgz(s,q),$async$VU)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bBi(new B.px(r,1),s),$async$VU)
case 4:if(t.c!=null)t.m(new C.ecd(t,r))
case 1:return B.h(u,v)}})
return B.i($async$VU,v)},
acS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$acS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eco(q))
t=4
q.a.toString
p=C.i_g()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$acS)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ecp(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a9(i)
q.afX(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecq(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$acS,v)},
YR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$YR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ac(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ecj(q,i))
t=4
q.a.toString
p=C.i_f()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$YR)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eck(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a9(g)
if(q.c!=null)q.m(new C.ecl(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecm(q))
$.aT.x1$.push(new C.ecn(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YR,v)},
c4f(d){this.m(new C.eci(this,d))},
DR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$DR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ecf(q))
t=4
w=7
return B.b($.aT.gmn(),$async$DR)
case 7:w=8
return B.b(B.bN(A.mR,null,x.H),$async$DR)
case 8:k=$.aT.ak$.x.h(0,q.d)
p=k==null?null:k.gb7()
if(!(p instanceof B.ql))throw B.U("The page is not ready yet.")
w=9
return B.b(p.m7(1800/p.gY(0).a),$async$DR)
case 9:o=e
w=10
return B.b(o.hm(A.fS),$async$DR)
case 10:n=e
if(n==null)throw B.U("Could not make the picture.")
w=11
return B.b(A7.afc(J.fa(A.dF.gaP(n)),"ngmy_news.png","image/png"),$async$DR)
case 11:m=e
q.afX(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
q.afX(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ecg(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DR,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kL,a2,a2,a2,new C.ecw(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bHq,a2,a2,a2,new C.ecx(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oA,a2,a2,a2,a4?a1.gaXj():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.Ak,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eCL,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ad(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fF(0.7142857142857143,B.f1(A.A,new B.eu(new C.b_a(t,s,r,a1.x,a2),a1.d),A.f,A.dt),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.SL,a2,a2,a2)
t=a1.as?a2:a1.gc4e()
t=B.a([B.D(B.dp(D.bIa,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rW,a2,a2,a2,A.c,A.fL,a2,a2,new B.b7(B.m(14),O.uv),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fL(r,A.A,a2,a2,A.cn,A.bQ,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.aw,r,B.aH(a2,a2,a2,a2,D.bEY,a2,a2,a2,a1.as?a2:a1.gbG2(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.SL,a2,a2,a2)
q=B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aQw("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d3a[o]
p.push(B.my(a2,D.rW,new B.x(n.a,a2,A.oU,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hz,new C.ecy(a1,n),a2,a2,O.uv,a2))}p=B.c_(A.bD,p,A.bt,6,8)
m=a1.Q
m=B.c_(A.bD,B.a([D.fo7,A.bf,B.jG(a2,a2,a2,D.f8Y,a2,new C.ecz(a1),m==="en",a2,a2,a2,a2),A.ab,B.jG(a2,a2,a2,D.f8T,a2,new C.ecA(a1),m==="sw",a2,a2,a2,a2)],w),A.rt,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.SL,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.db(D.a1A,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bV(i,i.gM(0),h.k("bV<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aP4(g==null?h.a(g):g))}k=B.cB(k,a2,a2,a2,a2,A.aQ,!1)
i=B.a([],w)
for(j=B.db(D.a1A,10,a2,j),h=j.$ti,j=new B.bV(j,j.gM(0),h.k("bV<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aP4(g==null?h.a(g):g))}j=B.cB(i,a2,a2,a2,a2,A.aQ,!1)
i=a1.as?a2:a1.gc4h()
h=B.m(18)
v=B.a([new B.ad(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.az,new B.C(A.cG,s,a2),t,A.az,new B.C(A.cG,r,a2),q,A.P,p,A.S,m,A.az,new B.C(A.cG,l,a2),new B.a6(a2,78,k,a2),A.P,new B.a6(a2,78,j,a2),A.aO,B.aE(a2,B.p(A.A,B.A(B.a([D.bI4,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fW,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tI,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e0,B.A(B.a([D.diA,A.aw,D.bu8],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b4.j(0.35):D.rW
p=new B.aV(16,16)
d=new B.az(A.bF,1,A.r,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f_B,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Us,new B.o(q,a2,new B.bP(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cG,A.iN,a2,a2,a2),a2))}u.push(A.ao)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cRi[o]
t.push(B.my(a2,D.rW,new B.x(a0,a2,A.In,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hz,new C.ecB(a1,a0),a2,a2,O.uv,a2))}u.push(B.c_(A.bD,t,A.bt,6,8))
u.push(A.S)
t=B.D(B.aL(a2,A.T,!1,a2,!0,A.q,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aQw("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ecC(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a5,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc4g()
u.push(B.A(B.a([t,A.ab,B.H5(A.y8,s,B.np(a2,A.b4,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.az)
t=a1.as?a2:a1.gaXj()
u.push(B.dp(A.oA,D.fjP,t,B.bk(A.cZ,a2,a2,a2,a2,A.Ib,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cB(v,a1.r,A.afW,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jG.j(0.5),A.r,1)
v.push(B.bY(0,B.ei(B.av(B.p(a2,B.A(B.a([E.a5U,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iC,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Ac,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bqA,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cb(a3,A.Ak,new B.an(A.W,a2,A.aa,A.q,v,a2),a2,!1,!1,a2,a2)},
aQw(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.rW,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,X.Ij,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aP4(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l3,t,t,t,t),A.fV],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bmR,t,t,t,t))
w.push(A.d0)
w.push(new B.C(A.jq,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.ba,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.j6,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ece(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.z2.prototype={
b9l(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.z2(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cDu(d){var w=null
return this.b9l(w,w,w,w,w,d,w,w,w,w)},
ad(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aAX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cad(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aX(g);v.C();){u=v.gU(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fv(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.cab(),B.T(w).k("J<1,n>")).bZ(0,new C.cac())
t=B.B(w,w.$ti.k("H.E"))}else t=k
w=h.$1("paper")
w=J.ac(w==null?"":w)===0?k:h.$1("paper")
v=h.$1(j)
v=J.ac(v==null?"":v)===0?k:h.$1(j)
s=h.$1("subhead")
r=h.$1("byline")
r=J.ac(r==null?"":r)===0?k:h.$1("byline")
q=h.$1("caption")
p=t!=null&&t.length!==0?t:k
o=h.$1("pullQuote")
n=h.$1("sidebarTitle")
m=h.$1("sidebarText")
l=h.$1(i)
return this.b9l(p,r,q,J.ac(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gF0(d){return this.f}}
C.rZ.prototype={
a4(){return"NewsLayout."+this.b}}
C.AY.prototype={
a4(){return"NewsFrame."+this.b}}
C.l7.prototype={}
C.b_a.prototype={
qX(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aXl(d,e,f,g){return this.qX(d,e,null,1.25,f,A.bl,g)},
P0(d,e,f,g,h){return this.qX(d,e,f,1.25,g,A.bl,h)},
avM(d,e,f,g,h){return this.qX(d,e,null,f,g,A.bl,h)},
avL(d,e,f,g,h){return this.qX(d,e,f,g,0,A.bl,h)},
aXn(d,e,f,g,h){return this.qX(d,e,null,f,0,g,h)},
c4l(d,e,f,g,h,i){return this.qX(d,e,f,g,0,h,i)},
avK(d,e,f,g){return this.qX(d,e,null,f,0,A.bl,g)},
acV(d,e,f){return this.qX(d,e,null,f,0,A.bl,A.cN)},
aXm(d,e,f,g,h){return this.qX(d,e,f,g,0,h,A.cN)},
c4k(d,e,f,g){return this.qX(d,e,null,f,0,g,A.cN)},
c4j(d,e,f,g){return this.qX(d,e,f,g,0,A.bl,A.cN)},
acW(d,e,f,g,h,i){return this.qX(d,e,f,g,h,A.bl,i)},
aXk(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.km(new B.eo(d,u,u,A.cO,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.ch,new B.jm(1),u,u,h,u,A.cd,u)
v.Bu(g)
if(!v.b.a.c.gaCA())return w
w-=2}return j},
acT(d,e,f,g,h,i,j,k){return this.aXk(d,e,f,g,h,i,j,k,A.bl)},
axQ(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
axP(d){return this.axQ(null,!1,d)},
afL(d,e){return this.axQ(null,d,e)},
clI(d,e){return this.axQ(d,!1,e)},
gaZt(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaT5(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
NV(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.acT(w.gaT5(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaT5(),v,g,A.a2,v,v,v,w.avL(u,t,f,1.02,A.O),e,v,v)},
aTa(d){return this.NV(d,A.L,null,2,78,30)},
aan(d,e,f,g,h){return this.NV(d,e,null,f,g,h)},
bUw(d,e,f,g,h){return this.NV(d,A.L,e,f,g,h)},
bUv(d,e,f){return this.NV(d,A.L,null,e,f,30)},
QW(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kc,B.d(s,u,g,A.a2,u,u,u,v.aXm(w,v.aXk(t,w,A.cN,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b49(d){return this.QW(d,A.L,null,3,24)},
azi(d,e,f,g){return this.QW(d,e,null,f,g)},
ct3(d,e,f){return this.QW(d,A.L,e,3,f)},
b4a(d,e){return this.QW(d,e,null,3,24)},
ct1(d,e){return this.QW(d,A.L,null,3,e)},
ct2(d,e,f){return this.QW(d,e,null,3,f)},
app(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.h2,B.d(u.toUpperCase(),v,v,v,v,v,v,w.P0("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
MS(){return this.app(null,!0)},
apo(d){return this.app(null,d)},
bBZ(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.i6,new B.a6(d,w,B.d(v,w,2,A.a2,w,w,w,this.c4k(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vb(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gaZt(),h=A.o.an(j.by(B.c0(B.by(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hNU(Math.max(1,B.by(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aXl(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.acT(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.acT(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.acW(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bAy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hK,A.j,0,l,l),A.ao,m.afL(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.D(B.d(i,l,1,A.eC,l,l,l,m.avK(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bAy(j),l,l,l,l,l,l,m.P0(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hK,A.j,0,l,l),A.P,m.clI(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaZt()
v=B.d("NGMY",l,l,l,l,l,l,m.avM(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eA(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qX(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.dm(1,A.ci,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.acW(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hK,A.j,0,l,l)
t=m.afL(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.avK(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.afL(!0,1.4),A.at,B.d(C.bAy(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.axP(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.avM(v,u,1,3,A.O),A.L,l,l),A.P,m.afL(!0,1.2),A.at,B.A(B.a([B.d(C.bAy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hK,A.j,0,l,l),A.at,m.axP(3)],h),A.m,l,A.e,A.j,0,A.p)}},
abt(d){return this.vb(d,!1)},
acU(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.acW("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c4i(d,e){return this.acU(d,null,e,null)},
aV7(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dh(v),12)===0?12:A.o.F(B.dh(v),12),t=B.b0(this.d.w).j(0.75),s=this.avL("Roboto",15,t,1,A.cs),r=B.W(E.aix,t,w,w,w,18),q=A.a.ap(A.oD[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dh(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.by(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fH,w,w,w,1),B.W(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
auu(){return this.aV7(A.me)},
b1q(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.acW("Roboto",this.acT(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
axT(d,e,f){return this.b1q(d,e,f,30)},
azl(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.uR,B.d(v,w,e,A.a2,w,w,w,this.c4j("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b4e(d){return this.azl(d,3,22)},
cte(d,e){return this.azl(d,e,22)},
te(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cn,A.bQ,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.CT(D.bti,w,s)
if(v==="sepia")w=new B.CT(D.bth,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.W(A.xy,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bZ(s,new B.o(s,s,s,s,s,new B.bR(A.A,0.95,A.x,s,0,B.a([A.K,A.VE.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a6(d,e,new B.an(A.W,s,A.b_,A.q,v,s),s)},
q2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.r,3)
j=B.I(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.te(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.en,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lB,k,k,d)
case 2:w=B.a([new B.ad(0,A.G,A.w.j(0.35),D.dYz,14)],x.V)
v=l.te(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eA(A.A,-0.035,B.p(k,B.v(B.a([v,B.D(B.av(B.d(u,k,2,A.a2,k,k,k,l.aXm(j.as,13.5,D.b6V,1.1,A.cD),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.b9V,k,k,k,w,k,A.n),k,e,k,k,D.bob,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.r,5)
return B.p(k,B.bv(B.m(25),l.te(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a6(d,e,B.av(B.p(k,B.hR(l.te(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lB,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ad(0,A.G,A.w.j(0.3),D.dYp,10)],x.V)
return B.eA(A.A,0.025,new B.a6(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bY(0,B.p(k,l.te(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qG,k,k,k),0,0,0),B.ao(k,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eA(A.A,-0.6,B.p(k,k,A.f,A.bJ.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a6(d,e,B.b3(B.nk(l.te(d,e),A.aq,D.fFc),new C.baD(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.te(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bw(u));++n){m=new B.aV(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bX,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cK(0,q,0,p,k,k,new B.co(A.aQ,A.pJ,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.q,w,k),A.f,A.e8,k,k,k,e,k,k,D.bsz,k,k,d)
case 8:w=d/2
v=B.wA(A.ha,new B.aV(w,w))
j=B.I(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bv(B.wA(A.hy,new B.aV(w,w)),l.te(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ad(0,A.G,A.w.j(0.35),A.fK,22)],x.V)
return B.p(k,l.te(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a6(d,e,B.nk(l.te(d,e),A.aq,D.fLe),k)
case 0:j=B.I(B.b0(j.w),A.r,2.4)
return B.p(k,l.te(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.en,k,k,d)}},
aMH(d,e){return this.d.e===D.Qt?A.bH:this.bBZ(d,e)},
Vs(d){return this.aMH(d,A.L)},
gayE(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
ayD(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aXn(v.Q,19,1.15,A.cD,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.P0("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.a2,n,n,n,o.acV(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jr(B.v(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gccm(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a87(d,e,f,g){return B.cm(new C.cae(this,e,d,f,g))},
a86(d){return this.a87(d,22,!0,18)},
VD(d,e){return this.a87(d,22,!0,e)},
aNJ(d,e,f){return this.a87(d,22,e,f)},
bDY(d,e,f){return this.a87(d,e,!0,f)},
b74(d,e,f,g){return B.cm(new C.caf(this,e,d,g,!0,f))},
cbb(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.abt(824),A.az,k.aTa(824),k.b49(824),A.P,k.MS(),A.ac,B.av(k.q2(824,360),j,j,j),k.Vs(824),A.ac,B.D(k.a86(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.abt(824),A.aO,new B.a6(j,350,B.A(B.a([new B.a6(440,j,B.v(B.a([k.aan(440,A.bg,3,62,26),k.azi(440,A.bg,2,20),A.b3,k.app(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ic,B.v(B.a([k.q2(362,310),k.Vs(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.axP(2),A.ac,B.D(k.a86(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vb(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bUw(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.ct3(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.AG,j,j,j)
u=B.a([B.av(k.q2(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Qt){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.avL(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lz,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.q,u,j),A.P,k.MS(),A.S,B.D(k.VD(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vb(824,!0)
w=k.q2(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.q,B.a([w,B.ao(0,B.p(j,k.NV(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.b1,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bqT,j,j,j),j,j,0,0,j,j)],u),j),k.b4a(824,A.bg),A.P,k.MS(),A.S,B.D(k.a86(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.abt(824),A.az,k.aTa(824),k.b49(824),A.P,k.MS(),A.ac,B.D(k.b74(3,300,B.v(B.a([k.q2(300,300),k.Vs(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vb(824,!0)
v=x.p
u=B.v(B.a([k.aan(440,A.bg,3,62,26),k.azi(440,A.bg,2,20),A.b3,k.apo(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.bv,new B.a6(j,400,B.A(B.a([new B.a6(440,j,u,j),A.aM5,new B.C(A.i6,k.q2(364,h.e===D.Qt?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.az,B.D(k.VD(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.abt(824),A.ac,k.bUv(824,2,70),k.ct1(824,21),A.P,k.MS(),A.ac,B.D(k.b74(3,340,B.av(k.q2(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vb(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bAy(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.P0(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.az],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aXn(h.Q,24,1.15,A.cD,A.O),j,j,j))
v.push(A.b3)
if(k.gayE())v.push(k.ayD(230,250))
return B.v(B.a([w,A.az,B.D(B.A(B.a([new B.a6(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.afs,j,j,j,1.2),new B.a6(570,j,B.v(B.a([k.aan(570,A.bg,3,62,28),k.ct2(570,A.bg,20),A.P,k.apo(!1),A.P,B.av(k.q2(570,330),j,j,j),k.Vs(570),A.S,B.D(k.aNJ(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vb(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.P0(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.ao,k.NV(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bpd,j,j,j),k.b4a(824,A.bg),A.S,B.av(k.q2(824,310),j,j,j),k.Vs(824),A.P,k.MS(),A.S,B.D(k.a86(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vb(824,!0),A.aO,new B.an(A.W,j,A.aa,A.q,B.a([k.q2(824,430),B.ao(18,k.c4i(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.axT(824,3,66),k.b4e(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.auu(),A.az,B.D(k.VD(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vb(824,!0),A.bv,new B.a6(j,500,B.A(B.a([new B.a6(410,j,B.v(B.a([k.acU(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b1q(410,4,58,28),k.azl(410,6,20),A.b3],w),A.F,j,A.e,A.j,0,A.p),j),U.aM6,k.q2(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.az,k.auu(),A.aO,B.D(k.VD(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vb(824,!0)
v=k.q2(824,420)
u=B.hqJ(-0.25)
t=B.b0(h.x)
s=B.a([new B.ad(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aO,new B.an(A.W,j,A.aa,A.q,B.a([v,B.ao(22,B.fr(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c4l(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.br8,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.axT(824,3,62),k.b4e(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aV7(A.la),A.az,B.D(k.VD(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vb(824,!0)
u=h.w
t=x.p
w=B.a([k.q2(824,380),B.ao(j,k.acU(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.axT(824,2,60)
r=k.cte(824,2)
p=k.auu()
o=B.D(k.aNJ(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aO,new B.an(A.W,j,A.aa,A.q,w,j),A.aO,s,r,A.S,p,A.az,o,A.ac,B.p(j,B.A(B.a([B.bv(B.m(14),k.te(150,104),A.aq),A.nZ,B.D(B.v(B.a([k.acU("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.avK(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.W(A.eo,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vb(824,!0),A.bv,k.aan(824,A.bg,3,62,30),k.azi(824,A.bg,2,22),A.S,k.apo(!1),A.S,B.av(k.q2(824,330),j,j,j),k.aMH(824,A.bg),A.aO,B.D(k.bDY(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bY(0,B.bZ(s,new B.o(s,s,s,s,s,new B.a7(A.ax,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bY(0,B.b3(s,s,s,new C.b7a(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.brE,B.v(B.a([B.D(t.cbb(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fV,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aXl(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.P0(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hK,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bY(0,B.e_(B.b3(s,s,s,new C.bpB(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hR(B.fL(q,A.A,s,s,A.cn,A.bQ,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.me,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.avM(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e_(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bsI,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jr(new B.an(A.W,s,A.aa,A.q,n,s),A.q,s),s)}}
C.baE.prototype={
iR(d){return C.h61(d)},
jy(d){return!1}}
C.baD.prototype={
a6(d,e){var w,v=C.h61(e)
$.X()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
aq(d){return!d.b.A(0,this.b)}}
C.bs4.prototype={
iR(d){var w,v,u,t,s,r,q,p,o=new B.eT()
o.dI(3)
w=$.X()
v=B.a([],x.v)
u=new B.aQ(w.r,A.ap,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bx(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ap(t,8))
w=d.b
r=w-8
u.E(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bx(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ap(0,r))
u.E(new B.bF())
return u},
jy(d){return!1}}
C.b7a.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eT()
k.dI(7)
$.X()
w=B.M()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.K0.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sau(l)},
aq(d){return!1}}
C.bpB.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.ih(u,u,u,u,B.dq(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.ch,u,A.er,A.cd)
s.eO()
w=d.a
J.bA(w.save())
w.translate(t/2,e.b*0.52)
d.j6(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.u(-v/2,-t.gbb(t)/2))
w.restore()},
aq(d){return!d.b.A(0,this.b)}}
C.UU.prototype={
T(){return new C.aCG()}}
C.aCG.prototype={
a_(){var w=this
w.a1()
B.hcQ(w.a.c,null).bz(new C.edQ(),x.g7).bz(new C.edR(w),x.a)
w.a.toString},
gaLw(){var w=D.at9[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gavN(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaLw()
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
return new B.aa(q,w,q+s,w+t)},
YT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$YT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.edD(r))
t=4
q=r.gavN()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.X()
n=new B.rP()
m=B.Gw(n,null)
i=B.M()
i.Q=A.fQ
m.Bc(g,q,new B.aa(0,0,0+p,0+o),i)
w=7
return B.b(n.qe().yZ(J.fWE(p),J.fWE(o)),$async$YT)
case 7:l=e
w=8
return B.b(l.hm(A.fS),$async$YT)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.N(J.fa(J.wv(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.edE(r))
r.c.I(x.q).f.R(D.eLc)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$YT,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kL,s,s,s,new C.edK(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.fmd,s,s,!0,s,s,t.y||r==null?s:t.gc4m(),s,s)],p),s,s,!0,!0,A.Ak,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fq4,s,s,s,1,s,!0)
if(r==null)p=A.lY
else{w=B.D(new B.C(A.bU,B.av(new B.fF(t.gaLw(),B.cm(new C.edL(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.j6,B.jG(s,s,s,new B.x(D.at9[u].a,s,E.aNS,s,s,s,s,s,s,s,s,s),s,new C.edM(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bm(!0,B.v(B.a([new B.a6(s,40,B.cB(v,s,s,s,s,A.aQ,!1),s),B.A(B.a([D.bIN,B.D(B.kR(s,s,s,6,1,new C.edN(t),t.f),1),D.bIp],p),A.m,s,A.e,A.j,0,s,s),D.fjJ,A.ao,B.bK(!1,D.fjt,s,s,!0,s,s,new C.edO(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.VU,s,s,s,s,s,s,D.boz,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cb(q,A.Ak,p,s,!1,!1,s,s)}}
C.baa.prototype={
a6(d,e){var w
$.X()
w=B.M()
w.Q=A.cn
return d.Bc(this.b,this.c,new B.aa(0,0,0+e.a,0+e.b),w)},
aq(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.ZZ.prototype={
T(){var w=$.aw(),v=x.A
return new C.aE2(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b2,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a25),"quote"+1000*Date.now(),B.a([],x.t),B.aW(x.S),A.L)}}
C.ok.prototype={}
C.aE2.prototype={
gaTi(){var w,v,u=this
if(u.p1)w=new B.wQ(1,u.p2,0.9,u.p3).iB().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eN4(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
Xz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.tP().kc(0,"assets/images/ngmy_logo.png"),$async$Xz)
case 7:q=e
p=J.fa(J.wv(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bBi(new B.px(p,1),o),$async$Xz)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eLX(r,p))
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
return B.i($async$Xz,v)},
P3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().kW(92,1800,A.eG),$async$P3)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$P3)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bBi(new B.px(p,1),n),$async$P3)
case 9:if(r.c==null){w=1
break}r.m(new C.eMk(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$P3,v)},
b0O(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aN=w.aE=w.az=w.Z=w.b5=w.bi=w.y2=0
w.b3=null
w.b0=0.25
w.ba=null
w.bJ=0.5
w.aR=1
w.c6=w.bS=w.bj=0
w.cW=w.cT=!1},
aUS(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.by_(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d5C)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.by_(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.by_(C.fRK(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.by_(C.fRK(1-a0*0.5,n,n,n),w)}return a1?C.by_(C.fRK(-1,255,255,255),w):w},
azr(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kL(0,this.d.a.a),t=B.B(u,B.a3(u).k("H.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yS(u,v,w)
this.dx.pU(new C.eMu(t),!0)
return t},
b3i(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.azr()
w=C.hY_(e.d.a.a,e.db)
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
return C.hUu(d,k,v,a0,j,e.gaTi(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cr1(){return this.b3i(null)},
CJ(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gmn(),$async$CJ)
case 3:w=4
return B.b(B.bN(A.eN,null,x.H),$async$CJ)
case 4:w=5
return B.b($.aT.gmn(),$async$CJ)
case 5:s=$.aT.ak$.x.h(0,t.r)
r=s==null?null:s.gb7()
if(!(r instanceof B.ql)){u=null
w=1
break}w=7
return B.b(r.m7(1080/r.gY(0).a),$async$CJ)
case 7:w=6
return B.b(e.hm(A.fS),$async$CJ)
case 6:q=e
u=q==null?null:J.fa(A.dF.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CJ,v)},
a8Z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a8Z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eLG(q))
t=4
w=7
return B.b(q.CJ(),$async$a8Z)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcu().aI(p)
n=C.Ba(null,null,null,null,D.nT,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b3i(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a9(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eLH(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8Z,v)},
A5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$A5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eLE(q))
t=4
w=7
return B.b($.aT.gmn(),$async$A5)
case 7:w=8
return B.b(B.bN(A.on,null,x.H),$async$A5)
case 8:w=9
return B.b($.aT.gmn(),$async$A5)
case 9:k=$.aT.ak$.x.h(0,q.f)
p=k==null?null:k.gb7()
if(!(p instanceof B.ql))throw B.U("The picture is not ready yet.")
w=10
return B.b(p.m7(1080/p.gY(0).a),$async$A5)
case 10:o=e
w=11
return B.b(o.hm(A.fS),$async$A5)
case 11:n=e
if(n==null)throw B.U("Could not make the picture.")
w=12
return B.b(A7.afc(J.fa(A.dF.gaP(n)),"ngmy_quote.png","image/png"),$async$A5)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a9(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eLF(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$A5,v)},
ceg(){var w=this.p4
w.toString
return B.cm(new C.eMd(this,w))},
aXu(d,e){var w=null
return B.br(w,w,w,w,w,D.eVf,w,w,!0,new B.b4(4,B.m(16),O.uv),w,w,w,w,w,D.rW,!0,w,w,w,w,new B.b4(4,B.m(16),D.aVW),w,w,w,w,w,w,w,w,A1.CS,e,w,w,w,w,w,w,w,D.f_s,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xt(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.W(e,A.b4,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aOD,w,w,w))
return new B.C(D.bmv,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aXt(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.r,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.ju),A.f,w,w,new B.o(D.rW,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vi(d){return this.aXt(d,A.bB)},
nS(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tI:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.W(e,q?A.c:A.j3,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j3,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dg(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hV,r,r,r,A.EL,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
aeL(d,e,f){return this.nS(d,null,e,f)},
avR(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b4.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.dg(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hV,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.ay
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a6(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aXx(d,e,f,g,h,i){return this.avR(d,e,f,g,h,5,i)},
k0(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eSj,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e14,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eMq(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aNJ,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Y6,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.atP(w).cER(A.b4,A.bF,A.b4.j(0.2),A.c,D.eC5,4)
return new B.C(A.x6,B.v(B.a([s,B.a9_(B.kR(u,u,u,g,f,new C.eMr(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
agL(d,e,f,g,h,i){return this.k0(d,e,f,g,h,null,i)},
ahb(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b5
p=new B.az(q,r?3:1,A.r,-1)
t=t?D.bBV:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bP(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eMt(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.c_(A.bD,n,A.bt,10,10)},
bI4(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a25
else{v=x.a8
w=B.B(new B.a2(D.a25,new C.eLw(o),v),v.k("H.E"))}v=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.d,n,n,n,n,n,2,o.aXu("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eLx(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a6S,!0,A.a5,n,A.am,n,n,n,n)
u=B.aL(n,A.T,!1,n,!0,A.q,n,B.aM(),o.e,n,n,n,n,n,2,o.aXu("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eLy(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a5,n,A.am,n,n,n,n)
t=o.xt("DESIGNS",A.tw)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cJc[q]
r.push(new B.C(A.j6,o.aeL(p,o.x===p,new C.eLz(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.y,n,n,n,n,A.aQ),A.ac,new B.a6(n,118,B.hE(n,new C.eLA(o,w),w.length,n,n,A.aQ,new C.eLB(),!1),n),A.P,o.aXt(B.v(B.a([B.iC(A.b4,n,n,A.ag,!0,new C.eLC(o),n,D.fb8,n,D.f7I,o.k3),B.iC(A.b4,n,n,A.ag,!0,new C.eLD(o),n,n,n,D.f4Y,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.afV)],s),A.F,n,A.e,A.j,0,A.p)},
czr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.azr()
if(a7.length===0)return a5.vi(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Iw,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.B(u,B.a3(u).k("cl.E"))
A.d.ff(m)
l=m.length!==0&&A.d.d9(m,new C.eMU(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eN0(a5)
j=new C.eN2()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Iw,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aV(11,11)
f=u.t(0,h)?A.b4.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.az(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aJ(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a4
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bP(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.LN,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eMV(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vi(B.c_(A.bD,o,A.rt,6,6))
i=B.a([a5.nS("All words",K.ak9,!1,new C.eMW(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aeL("Sentence "+a3,!1,new C.eMX(a5,a7,v,a2)))
a2=a3}}i.push(a5.aeL("Clear picks",!1,new C.eMY(a5)))
i=B.c_(A.bD,i,A.bt,8,8)
g=a5.xt("SIZE OF THE PICKED WORDS",D.ajz)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.db_[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eMZ(e,k)
f.push(a5.aeL(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.c_(A.bD,f,A.bt,8,8),A.S,a5.nS("Make every word normal",A.l9,!1,new C.eN_(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cuJ(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.btO,B.d(A.d.ix(D.auQ,new C.eMD(q)).b,p,p,p,p,p,p,D.eTL,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cm(new C.eME(q)),l=q.xt("HIGHLIGHT BEHIND THE WORDS",A.a__),k=q.p1?-1:q.k4
k=q.ahb(k,new C.eMF(q),D.cT9)
w=q.p1
v=w?A.c:A.b5
n=B.a([n,A.S,m,l,B.c_(A.bD,B.a([k,B.aE(p,B.p(p,D.bES,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.eNO,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMI(q),p,p,p,p,p,p,!1,A.a8)],o),A.rt,10,10),A.ao,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Iw,p,p,p)],o)
if(q.gaTi()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.agL("Colour",l,0,360,new C.eMJ(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.agL("Shade",k,0.15,0.9,new C.eMK(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.k0("Strength",l,0.15,1,new C.eML(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vi(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xt("LOOK",A.xX))
m=B.a([q.nS("Bold",I.ajx,q.fy,new C.eMM(q)),q.nS("Italic",I.ajy,q.go,new C.eMN(q))],o)
for(u=0;u<3;++u){l={}
k=D.cKl[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tI:p
w=w?p:A.c.j(0.07)
s=new B.aV(14,14)
r=new B.az(q.id===l.a?A.K:A.bF,1,A.r,-1)
m.push(B.aE(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bP(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMO(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.c_(A.bD,m,A.rt,8,8))
n.push(q.xt("COLOUR",A.mZ))
n.push(q.ahb(q.fx,new C.eMP(q),D.d2H))
n.push(A.ao)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Iw,p,p,p))
n.push(q.xt("SIZE AND PLACE",A.FH))
m=q.fr
m=q.k0("Text size",m,0.5,1.6,new C.eMG(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vi(B.v(B.a([m,q.k0("Up / down",l,0.12,0.5,new C.eMH(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
ceh(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b4.j(0.6),A.r,1.6)
u=B.a([A.b4.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bKc,A.f,p,p,D.aYU,p,62,p,p,p,p,p,62),A.az,D.f8R,A.ao,D.fdh],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.rW,p,v,w,p,new B.a7(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bpK,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaXw(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bv(B.m(12),new B.a6(46,62,B.fL(o,A.A,120,p,A.cn,A.bQ,!1,p,!1,p,p),p),A.aq),A.bf,B.D(B.v(B.a([D.f8r,A.P,B.c_(A.bD,B.a([q.nS("Change",A.kJ,!1,q.gaXw()),q.nS("Remove",A.e4,!1,new C.eMh(q))],w),A.bt,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d_k[t]
u.push(q.nS(s.b,s.a,q.at===t,new C.eMi(q,t)))}u=B.c_(A.bD,u,A.bt,8,8)
r=q.at
A:{if(0===r){s=q.bYk(o)
break A}if(1===r){s=q.bXo()
break A}if(2===r){s=q.bDX()
break A}if(3===r){s=q.bK7()
break A}s=q.bG3()
break A}return B.v(B.a([v,A.ac,u,A.az,s,A.S,new B.bI(A.a3,p,p,q.nS("Reset the whole picture",A.l9,!1,new C.eMj(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bYk(d){var w=this,v=x.p
return B.v(B.a([B.c_(A.bD,B.a([w.nS("Auto enhance",E.ZE,!1,new C.eM9(w)),w.nS("Make words easy to read",A.ox,!1,new C.eMa(w))],v),A.bt,8,8),A.az,B.cm(new C.eMb(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bXo(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.k0("Exposure",n,-1.5,1.5,new C.eLO(o),0,A.k.aa(n,1))
w=o.RG
w=o.k0("Brightness",w,-0.5,0.5,new C.eLP(o),0,""+A.k.V(w*100))
v=o.rx
v=o.k0("Contrast",v,0.4,2,new C.eLQ(o),1,""+A.k.V(v*100))
u=o.xr
u=o.k0("Fade",u,0,1,new C.eLR(o),0,""+A.k.V(u*100))
t=o.aE
t=o.k0("Spotlight",t,0,1,new C.eLS(o),0,""+A.k.V(t*100))
s=o.Z
s=o.k0("Darken",s,0,0.85,new C.eLT(o),0,""+A.k.V(s*100))
r=o.b5
r=o.k0("Vignette",r,0,0.9,new C.eLU(o),0,""+A.k.V(r*100))
q=o.aF
q=o.k0("Shade behind words",q,0,0.85,new C.eLV(o),0,""+A.k.V(q*100))
p=o.aN
return o.vi(B.v(B.a([n,w,v,u,t,s,r,q,o.k0("Shade top & bottom",p,0,0.85,new C.eLW(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bDX(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.k0("Colour strength",q,0,2.2,new C.eL9(s),1,""+A.k.V(q*100))
w=s.to
w=s.k0("Warmth",w,-1,1,new C.eLa(s),0,""+A.k.V(w*100))
v=s.x1
v=s.k0("Tint",v,-1,1,new C.eLb(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vi(B.v(B.a([q,w,v,s.k0("Shift colours",u,-180,180,new C.eLc(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.nS("Negative",D.bzV,s.y1,new C.eLd(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xt("COLOUR WASH",A.MM)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.atz)
t=B.a([u,v,s.ahb(w,new C.eLe(s),q),A.P],t)
if(s.b3!=null){q=s.b0
t.push(s.vi(s.agL("Wash strength",q,0,0.9,new C.eLf(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bK7(){var w,v,u,t,s,r=this,q=r.y2
q=r.k0("Blur",q,0,24,new C.eLI(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.k0("Soft focus",w,0,1,new C.eLJ(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vi(B.v(B.a([q,w,r.k0("Film grain",v,0,1,new C.eLK(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xt("LIGHT LEAK",H.ajt)
q=r.ba
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.db(D.atz,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahb(q,new C.eLL(r),t),A.P],u)
if(r.ba!=null){q=r.bJ
u.push(r.vi(r.agL("Leak strength",q,0,1,new C.eLM(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bG3(){var w,v,u,t,s=this,r=s.aR
r=s.k0("Zoom",r,1,3,new C.eLj(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.k0("Left / right",w,-1,1,new C.eLk(s),0,""+A.k.V(w*100))
v=s.bS
v=s.k0("Up / down",v,-1,1,new C.eLl(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.v(B.a([s.vi(B.v(B.a([r,w,v,s.k0("Turn",u,-180,180,new C.eLm(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.c_(A.bD,B.a([s.nS("Turn 90\xb0",P.akH,!1,new C.eLn(s)),s.nS("Flip sideways",A.Fv,s.cT,new C.eLo(s)),s.nS("Flip upside down",A.Fv,s.cW,new C.eLp(s))],t),A.bt,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c_Y(){var w=null,v=B.m(22),u=B.I(A.bF,A.r,1)
return B.p(w,B.v(B.a([D.eCh,A.S,D.fac,A.az,B.aE(w,B.p(A.A,D.eCu,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tI,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eMc(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.rW,w,u,v,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
bYc(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eM4(p),m=x.p,l=B.A(B.a([D.btU,p.nS("Reset",A.l9,!1,new C.eM0(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Iw,o,o,o),j=p.xt("SHAPE",A.akD),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Bz[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aXx(n.$2(t,p.cy),62,u.b,s===t,new C.eM1(v,p),62))}}i=B.c_(A.bD,i,A.bt,8,8)
v=p.xt("RING",A.qI)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Bu[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aXx(n.$2(p.cx,t),62,r.b,q===t,new C.eM2(s,p),62))}u=B.c_(A.bD,u,A.bt,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vi(p.k0("Size",s,0.12,0.4,new C.eM3(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b_r(d){return new B.a6(null,d,new B.fF(0.5625,B.cm(new C.eMn(this)),null),null)},
cu0(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tI:q
t=new B.aV(14,14)
s=D.d1l[w]
r=v?A.c:A.ay
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.ay
l.push(new B.bE(1,A.bi,B.aE(A.c5,B.dg(q,B.v(B.a([r,A.d0,new B.q5(A.eg,A.A,A.f,new B.x(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.blr,q,q,q,A.hG,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eMw(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bnx,A.lB,q,q,q)},
aOe(){var w,v,u=this,t=null,s=u.cu0(),r=u.as
A:{if(0===r){w=u.bI4()
break A}if(1===r){w=u.czr()
break A}if(2===r){w=u.cuJ()
break A}if(3===r){w=u.ceh()
break A}if(4===r){w=u.bYc()
break A}w=u.c_Y()
break A}v=x.p
return B.bv(A.rz,B.ei(B.v(B.a([s,B.D(B.cB(B.a([w],v),t,D.boA,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.VU,!0),A.aq)},
aKu(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc4N(),p=B.m(16)
q=B.D(B.aE(r,B.p(r,D.eCD,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b5,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbJI()
w=B.m(16)
v=B.a([new B.ad(0,A.G,A.bA.j(0.35),A.cy,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eHw)
else t.push(D.bDZ)
t.push(A.ab)
t.push(D.bvD)
return B.p(r,B.A(B.a([q,A.aw,B.D(B.aE(r,B.p(r,B.A(t,A.m,r,A.ba,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tI,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aY1,r,r,r,r,G.afJ,r,r,r)},
aXv(){var w=null
return new B.C(T.Y2,B.A(B.a([B.aH(w,w,w,w,A.mi,w,w,w,new C.eLN(this),w,w,w,w,w,w),D.fp2,A.b3,D.bMt],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cb(w,A.Ak,B.bm(!0,B.cm(new C.eN3(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bdH.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eT()
m.dI(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.X()
t=B.M()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.M()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c4(new B.aa(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aq(d){return d.b!==this.b}}
C.rc.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.lV.prototype={}
C.z4.prototype={
ad(){var w=this
return B.E(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nz.prototype={}
C.vE.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a74.prototype={}
C.apO.prototype={}
C.a_t.prototype={
T(){return new C.aFX(new B.ar(A.as,$.aw()),B.kg(!0,null,!0,!0,null,null,!1),D.dqL,B.a([],x.s),B.et([D.Hm],x.Q))}}
C.aFX.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().BG(90,700,700,A.eG),$async$a_d)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$a_d)
case 8:p=e
if(r.c!=null)r.m(new C.eT3(r,p,q))
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
return B.i($async$a_d,v)},
a_g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aFJ(78,n,1100,1100),$async$a_g)
case 7:q=e
if(J.ck(q)){w=1
break}p=B.bl(r.y,!0,x.N)
n=J.aX(q)
case 8:if(!n.C()){w=9
break}o=n.gU(n)
if(J.ac(p)>=20){w=9
break}w=10
return B.b(o.fd(),$async$a_g)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cS.gcu().aI(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eT4(r,p))
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
return B.i($async$a_g,v)},
b1p(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cB.aI(A.d.gal(d.split(","))),A.A,u,u,A.cn,A.bQ,!0,u,!1,u,u)
return w}catch(v){}return D.bjJ},
bYi(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.co3(C.fti(w,this.b1p(d),f),g)},
abe(d,e,f,g,h){var w=null,v=new C.eT1(f,e),u=new C.eT2(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b4.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.W(f?A.Be:A.MB,A.c_,w,w,w,26),w,w,w),D.e6z],x.p),w),w)
else p=this.bYi(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.A(B.a([B.D(B.av(p,w,w,w),1),D.bDG],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.ma,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eT0(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.af)},
aUY(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bv(B.m(8),B.fL(A.cB.aI(A.d.gal(h.split(","))),A.A,p,p,A.cn,A.bQ,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bn.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.ey,p,p,p,20):q
n=B.a([n,A.ab,B.D(B.d(e,p,1,A.a2,p,p,p,A.SZ,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a_V,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l3,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.af)},
a7r(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7r=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fwJ(),$async$a7r)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eSK(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a9(n)
if(r.c!=null)r.m(new C.eSL(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7r,v)},
ad3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ad3=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eSN(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eSO(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eSP(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cf(p,h)}w=7
return B.b(C.fs0(q,r.cx,j,new C.b_y(r.z,r.Q,r.as,r.at),new C.eSQ(r),i,m,p,k),$async$ad3)
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
if(p!=null)B.a5(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a9(e)
if(r.c!=null)r.m(new C.eSR(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bS,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b5,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bGQ,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ad(2,A.G,A.bn.j(0.5),A.J,24)],v),D.bQd,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eTh(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a_V,h,h,h,i.ax?h:new C.eTi(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbz1()
v=B.a([new B.ad(0,A.G,A.b4.j(0.45),A.J,10)],v)
s.push(B.ho(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.W(i.e==null?A.vc:A.hw,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vr,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.af),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aVt),h,h,h,h,h,h,h,h,X.Ij,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.j6,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aO5,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eTj(i)
s=i.aUY(A.lb,q,r,i.gceI(),s)
r=i.z
r=B.D(i.abe(new C.eTl(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.v(B.a([s,A.ao,B.A(B.a([r,A.bp,B.D(i.abe(new C.eTm(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eTn(i)
s=i.aUY(A.v9,r,p,i.gceQ(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.D(i.abe(new C.eTo(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.az,D.fev,A.at,D.fhi,A.bv,u,A.P,D.ffM,A.az,v,A.bv,B.A(B.a([q,A.aw,B.D(B.v(B.a([s,A.ao,B.A(B.a([p,A.bp,B.D(i.abe(new C.eTp(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ao,D.fiX],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bcJ,A.r,1)
w=C.afM(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bHV,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eZd,h,h,h),B.aK(!1,h,!0,D.e1k,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eTq(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b6e,h,u,v,h,h,A.n),h,h,h,h,D.bnc,h,h,h),h)],t))}o.push(A.bv)
o.push(D.f5G)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cVa[m]
v=i.ch===l?A.b4:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.ay:A.bF,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bE(1,A.bi,new B.C(A.jq,B.aE(h,B.dg(A.A,new B.x(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bP(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eTr(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.fnj)
o.push(A.P)
o.push(B.cm(new C.eTs(i)))
o.push(A.bv)
o.push(D.fcF)
o.push(A.P)
w=B.a([i.b47("auto","Let AI choose",A.dV,A.Ph)],t)
for(v=x.O,m=0;m<11;++m){j=D.vx[m]
u=j.d
w.push(i.b47(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.c_(A.bD,w,A.bt,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bn.j(0.5):A.bF,A.r,1)
o.push(B.p(h,B.iC(h,A.bn,h,h,h,new C.eTk(i),D.bD7,D.fmz,h,D.f7V,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.az,B.d(w,h,h,h,h,h,h,D.aNk,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc4R()
v=B.fm(h,h,A.b4,A.b4.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eHm:A.FV
o.push(new B.a6(h,54,B.lo(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oT,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.q,h,A.y,h,A.v1,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.a9G,h,h,h,h,h,h,h,h),h)},
bLb(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eSS(this,p,d)
if(d===D.Ca)return new C.aCv(p,o,q)
w=B.m(16)
v=p?E.vr:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.ay:A.bF,A.r,1)
s=B.W(p?A.ee:C.hxK(d),A.c,q,q,q,20)
r=C.hxL(d)
return B.aE(q,B.dg(q,B.v(B.a([s,A.at,B.f1(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.ba,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hV,q,64,q,A.hu,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b47(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dg(v,B.A(B.a([w,L.Id,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a4,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ah0,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eT6(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_s.prototype={
T(){return new C.aFW(new B.ar(A.as,$.aw()))}}
C.aFW.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
ad4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ad4=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ac(a0)<3){r.m(new C.eSD(r))
w=1
break}B.eP()
r.m(new C.eSE(r))
t=4
q=C.hYT(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hYD(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eSF(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fRq()
f=$.Ca.h(0,k.a)
o=f==null||J.ck(f)?null:J.fo(f)
if(o==null){r.m(new C.eSG(r))
w=1
break}n=C.hYB(o,r.a.c)
C.hYx(r.a.c.a)
$.fQH=!0
k=r.c
if(k!=null)B.a5(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fU6(j)
h=C.fU7(r.a.c)
e=C.fU8(r.a.c)
w=7
return B.b(C.bAc(k,r.a.c.a,j,h,new C.eSH(r),i,e,a0),$async$ad4)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a9(a1)
if(r.c!=null)r.m(new C.eSI(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bS,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b5,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.akW,A.f,j,j,D.aXH,j,34,j,j,j,j,j,34),A.aw,D.bus],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,X.aNN,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.az(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),Aq.a9b),j,j,j,j,j,j,j,j,X.Ij,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aO5,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cRH[q]
o=A.c.j(0.06)
n=k.e?j:new C.eSJ(k,p)
r.push(B.my(j,o,new B.x(p,j,Ax.Sv,j,j,j,j,j,j,j,j,j),j,n,j,j,O.uv,j))}w=B.a([w,A.az,u,A.ao,t,A.az,s,A.S,B.c_(A.bD,r,A.bt,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aNk,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc4S()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bn.j(0.5),A.fm.j(0.5)],x.O):D.cqg
o=B.a([new B.ad(0,A.G,A.bn.j(0.35),A.cy,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e1g:D.bHu
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.ex(B.A(B.a([n,A.aw,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jg,j,j,j)],v),A.m,j,A.ba,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.af))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.q,j,A.y,j,A.v1,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.a9G,j,j,j,j,j,j,j,j),j)}}
C.b_y.prototype={}
C.aCv.prototype={
T(){return new C.bik(null,null)}}
C.bik.prototype={
gavS(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pn,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gavS().q()
this.bsZ()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gavS(),new C.e8N(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bfT.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cXf[s]
p=q.a*v
q=q.b*u
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.wW.j(0.25+r*0.6).gp(0)
n=o.H()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.H()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.H()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
aq(d){return d.b!==this.b}}
C.aqn.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.YR.prototype={
T(){return new C.azX()}}
C.azX.prototype={
gah8(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.afZ(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzQ(){var w=this.e
return w===$?this.e=C.fU6(this.a.c).t(0,D.Ca):w},
a7e(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7e=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dfB(s))
u=3
r=A.d.ix(D.vx,new C.dfC(s))
q=B.d9(C.fU6(s.a.c),x.Q)
l=q
J.hJ(l,D.Ca)
p=l
if(s.gzQ())J.cf(p,D.Ca)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzQ()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fU7(i.c)
g=C.fU8(s.a.c)
w=6
return B.b(C.bAc(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7e)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.afZ(q,s.gah8())
f=q==null?null:q.b
n=f==null?s.gah8():f
if(!J.y(n,r.a)&&!s.gzQ())throw B.U("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a9(d)
if(s.c!=null)s.m(new C.dfD(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7e,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.N(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.r,1),g=x.p,f=B.D(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bz,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dfG(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.W(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vx[w]
u=o.gah8()
t=o.f?n:new C.dfH(o,v)
f.push(new C.bqG(v,u===v.a,t,n))}f=B.lR(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzQ()?D.bSU:n
if(o.gzQ())s=n
else s=m?A.bm:A.bN
r=B.W(A.dV,o.gzQ()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzQ()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzQ()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzQ()
f=B.a([f,A.az,B.p(n,B.A(B.a([r,A.aw,q,B.auk(n,A.c,n,A.bJ,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dfI(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.afM,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.eZw,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.y,n,A.ET,n,n,A.ah)
u=o.f?n:o.gby0()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.v(B.a([new B.C(D.bqd,e,n),new B.dm(1,A.ci,f,n),new B.C(A.ES,new B.a6(1/0,50,B.bJ(B.ex(B.av(o.f?A.rk:D.feZ,n,n,n),n,new B.o(n,n,n,s,n,D.bRt,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.th,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bqG.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ad(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.kW,w,w,B.W(v.c,A.ad,w,w,w,18),w),new B.bI(A.ln,w,w,B.d(v.b,w,w,w,w,w,w,D.eZu,w,w,w),w)],x.p)
if(q)v.push(D.aTz)
return B.aE(w,B.dg(w,new B.an(A.W,w,A.aa,A.q,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aD,A.x,r,w,w),A.n),A.eE,w,w,w,A.cj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.e8K.prototype={
aDl(d,e,f){return e+"@"+A.a.aT(A.o.fO(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wc(d,e){return this.aDl(0,e,null)}}
C.aKu.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_u.prototype={
B(d){var w,v,u=null,t=C.fSX(this.c)
if(t==null)w=D.biu
else{w=B.aI(d,u,x.w).w.cEj(D.bmK,D.eGB)
v=this.d
w=B.uf(B.e_(B.amK(!1,t,!1,v,!1,390),!v,u),w)}return B.f1(A.A,new B.a6(416,870,new C.bjY(w,u),u),A.f,A.dt)}}
C.bjY.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.d7e[w]
u=new B.aV(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.amQ,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.d8o[w]
u=new B.aV(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.amQ,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bY(0,B.bZ(t,new B.o(t,t,t,B.m(64),D.cI_,D.bPW,A.n),A.bd),0,0,0))
s.push(B.bY(3,B.bZ(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bY(13,B.bv(B.m(51),B.ei(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aTL,B.p(t,t,A.f,t,t,D.aY_,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bY(13,B.e_(B.bv(B.m(51),D.bjP,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e_(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.l4.prototype={
pg(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.en(A.L,!1,e.l(),A.aC,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mo,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.en(A.L,!1,v.l(),A.aC,"",k,20,A.bl,A.a4,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dc,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rd(i,l,0,0,B.a([f,w,C.en(A.bg,!1,4279310375,A.aC,"",t.j(0.8).l(),24,A.bl,A.a4,"",0.006,u,l,"","",0,!1,"",0,D.fp,t.l(),3,"",0,0,"",D.cg,D.eZ,0.3,0.35,0.72)],s),C.cC(),D.mn,"","","Welcome",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rd(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aC,"",k,22,A.bl,A.a4,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tX,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mn,"","","Agenda",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rd(i,l,0,0,B.a([u,C.en(A.bg,!0,v.l(),A.aC,"",k,21,A.bl,A.a4,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cg,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mn,"","","Key Point 1",D.dc)
u=C.cC()
u=C.en(A.bg,!1,e.l(),A.aC,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cg,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.en(A.bg,!0,v.l(),A.aC,"",k,18,A.bl,A.a4,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rd(i,l,0,0,B.a([u,r,C.en(A.bg,!0,v.l(),A.aC,"",k,18,A.bl,A.a4,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cg,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mn,"","","Key Point 2",D.dc)
r=C.cC()
r=C.en(A.L,!1,e.l(),A.aC,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dc,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Ba(l,l,l,l,D.C6,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rd(i,l,0,0,B.a([r,C.en(A.L,!1,v.l(),A.aC,"",k,22,A.bl,A.a4,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cg,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mn,"","",h,D.dc)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.E8.prototype={
bx(d){return this.e.$1(d)}}
C.er.prototype={}
C.iU.prototype={}
C.E_.prototype={
gaJ2(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.afM(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a2v(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.E_(v,u,t,d==null?w.d:d)},
F7(d){return this.a2v(null,d,null,null)},
aC4(d){return this.a2v(null,null,null,d)},
cEh(d,e){return this.a2v(d,e,null,null)},
b9c(d){return this.a2v(d,null,null,null)},
b9j(d){return this.a2v(null,null,d,null)}}
C.MK.prototype={
T(){return new C.bhH(new B.eL(0,$.aw()),null,null)}}
C.bhH.prototype={
a_(){var w,v=this
v.a1()
w=v.qc(new C.dQB(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.iV(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.bsr()},
B(d){var w=C.afM(this.a.c.a)
if(w==null)w=A.d.gL(D.Gf)
return B.cm(new C.dQA(this,w,C.h7Q(this.a.c.d)))}}
C.bpg.prototype={
B(d){return B.nE(A.Ui,this.e,new C.eRR(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bcN.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aQL(d,e,v)
break
case"confetti":w.bEs(d,e,v)
break
case"crown":w.bG4(d,e,v)
break
case"aurora":w.bz5(d,e,v)
break
case"champagne":w.bCj(d,e,v)
break
case"diamonds":w.bId(d,e,v)
break
case"starburst":w.crJ(d,e,v)
break
case"balloons":w.bzj(d,e,v)
break
case"galaxy":w.bMU(d,e,v)
break
case"redcarpet":w.ciU(d,e,v)
break
case"coins":w.bDP(d,e,v)
break
case"lanterns":w.bWV(d,e,v)
break
case"hearts":w.bUA(d,e,v)
break
case"petals":w.ce9(d,e,v)
break
case"butterflies":w.bBl(d,e,v)
break
case"neon":w.c_I(d,e,v)
break
case"disco":w.bIo(d,e,v)
break
case"sunrise":w.ctg(d,e,v)
break
case"pearls":w.cdd(d,e,v)
break
case"snow":w.cro(d,e,v)
break
case"laurel":w.bX0(d,e,v)
break
case"ribbons":w.clo(d,e,v)
break
case"kente":w.bWJ(d,e,v)
break
case"trophy":w.cwT(d,e,v)
break
case"shooting":w.cph(d,e,v)
break
case"bokeh":w.bzD(d,e,v)
break
case"orbits":w.caU(d,e,v)
break
case"flowers":w.bMb(d,e,v)
break
case"music":w.c_s(d,e,v)
break
case"mandala":w.bYU(d,e,v)
break
case"sparklers":w.crx(d,e,v)
break
case"city":w.bD8(d,e,v)
break}},
ra(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.X()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nj
u=new B.aQ(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cS(w,t,w+f,t))
u.E(new B.cS(w,t,w,t+f))
u.E(new B.cS(w,t,w-f,t))
u.E(new B.cS(w,t,w,s))
u.E(new B.bF())
d.aO(u,v)
d.ai(e,f*0.18,v)},
lw(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cT(q,v)*2.5)+C.cT(q,u)*6.28)+1)/2
this.ra(d,new B.u(C.cT(q,t)*o,C.cT(q,s)*n),m*(0.006+0.014*C.cT(q,r))*(0.5+p),h,p*p)}},
aQL(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lw(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aJ],w),B.a([A.ij,A.bA],w),B.a([A.es,A.aW],w),B.a([A.c,A.av],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bw(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cT(h,1))
f=g+c0*(C.cT(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cT(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.la(new B.u(g,c1),new B.u(f,e),A.cq.av(0,i/0.22))
a0.toString
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.sau(new B.a7(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rf(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.la(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cq.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cT(h,4)
if(a5<0.15){a4=1-a5/0.15
$.X()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hs(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cT(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cT(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.X()
b9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.nj
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cT(h,b1+120)>0.5)this.ra(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bEs(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.X(),a0=B.M()
a0.sau(new B.a7(A.ax,A.aD,A.x,D.d2m,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.aa(0,0,f,e)))
a1.aY(new B.aa(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cT(u,1)))+C.cT(u,2)*w,w)
s=C.cT(u,3)
r=Math.sin(a3*(0.8+C.cT(u,4))+u)
q=h*(0.012+0.012*C.cT(u,5))
p=Math.cos(a3*(2+3*C.cT(u,6))+u)
o=D.OL[A.o.D(A.k.bw(C.cT(u,7)*5),0,4)]
J.bA(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cT(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aQ(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbI().a.snapshot()):t).a,k)
k.delete()}else{t=B.cu(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c4(t),k)
k.delete()}f.restore()}this.lw(a1,a2,a3,25,A.bJ,30)},
bG4(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.X()
n=B.a([],r)
m=new B.aQ(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.bJ.j(0.22),D.b7U],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbI().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aQ($.X().r,A.ap,a4,a4,B.a([],r))
v=a6+j
i.E(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.E(new B.ap(a5,s))
o=a6+j*0.6
i.E(new B.ap(a5+k*0.22,o))
i.E(new B.ap(a5+k*0.5,a6))
i.E(new B.ap(a5+k*0.78,o))
o=a5+k
i.E(new B.ap(o,s))
i.E(new B.ap(o,v))
i.E(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.M()
n.sau(new B.a7(A.b1,A.b6,A.x,D.d1g,a4,a4).aw(0,new B.aa(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.efq,D.e9E,D.eoj],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.hS.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wL(i),u=B.a([],x.X),o=new B.vh(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jP(y.M));--f
o.jg()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aQ(n,v.b,a4,new B.cL([new B.GP(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fz
f.r=A.bJ.gp(0)
l=f.H()
f=d.gbI().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.ra(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lw(a8,a9,b0,45,A.bJ,40)},
bz5(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lw(a8,a9,b0,60,A.c,50)
w=[D.eye,D.exX,D.exS,D.ez9]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.X()
i=B.a([],p)
h=new B.aQ(n.r,A.ap,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nj
n.z=new B.hs(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nj
n.z=new B.hs(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbI().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cT(a4,1))+C.cT(a4,2)*a3,a3)
r=C.cT(a4,3)
q=Math.sin(b0+a4)
p=C.cT(a4,4)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.wV.j(0.4+0.5*C.cT(a4,5)).gp(0)
n.a=A.nj
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bCj(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.X(),a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,l,0,B.a([A.hC.j(0.25+0.1*h),D.W3],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
a1.ai(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aQ(d.r,A.ap,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bx(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.OL[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbI().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cT(w,1)))+C.cT(w,2)*o,o)
r=k*(0.1+0.8*C.cT(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cT(w,4))
if(n<f){this.ra(a1,new B.u(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.A5.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bId(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lw(a9,b0,b1,30,A.kY,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cT(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cT(p,2))+C.cT(p,3)*n,n)-o*2
l=C.cT(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bA(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.X()
g=B.a([],q)
f=new B.aQ(h.r,A.ap,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b5(e,i))
h*=0.28
j*=0.6
g.push(new B.ap(h,j))
d=o*0.28
g.push(new B.ap(d,j))
a0=o*0.5
g.push(new B.ap(a0,i))
a1=k*0.6
g.push(new B.ap(0,a1))
g.push(new B.bF())
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.ax,A.aD,A.x,D.cYe,a5,a5).aw(0,B.cu(A.J,k*1.2,o)))
a2=g.H()
g=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(g)).a,a2)
a2.delete()
a3=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3.b=A.ae
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.H()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.H()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.H()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.ra(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
crJ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.X()
o=B.a([],v)
n=new B.aQ(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bF())
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bJ.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbI().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.X()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bw(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cT(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bjb.av(0,k)*(0.5+0.5*C.cT(t,v)))
this.ra(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cT(t,3)),D.OL[A.o.D(A.k.bw(C.cT(t,4)*5),0,4)],u)}},
bzj(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cT(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cT(o,2))+C.cT(o,3)*m,m)
j=C.cT(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.atY[A.o.F(o,6)]
h=$.X()
g=B.a([],s)
f=new B.aQ(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbI().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cu(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sau(new B.bR(D.aTO,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.atP,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c4(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aQ(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbI().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cT(o,11))+C.cT(o,12)*m,m)
r=C.cT(o,13)
J.bA(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cu(A.J,t,v)
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.atY[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c4(s),a1)
a1.delete()
u.restore()}},
bMU(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lw(b1,b2,b3,50,A.c,70)
for(w=[D.eym,D.ey2,D.ey8],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aw(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cT(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cT(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bJ,A.ez,g)
k.toString
d=C.cT(i,3)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cT(i,4)).gp(0)
a0.a=A.nj
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.X()
a9=B.M()
a9.sau(new B.bR(A.A,0.5,A.x,a4,0,B.a([A.A5.j(0.55),D.adu],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.ai(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bw(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cT(a2,9)),a6*0.1*C.cT(a2,8))
a5=B.la(a3,a3.ae(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.la(a3,a5,0.6)
a6.toString
a8=B.M()
a8.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rf(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
ciU(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.X()
n=B.a([],s)
m=new B.aQ(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bF())
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.sau(new B.bR(A.A,0.5,A.x,b5,0,B.a([A.A5.j(0.28),D.adu],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nj
l=o.H()
q=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ex:A.eM)
a9=$.X()
b0=B.a([],s)
m=new B.aQ(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cS(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.sau(new B.a7(A.a3,A.a7,A.x,a7,b5,b5).aw(0,new B.aa(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbI().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hC.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aQ($.X().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bF())
v=B.M()
v.sau(D.bRn.aw(0,new B.aa(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cT(r,1))+C.cT(r,2)*b3,b3)
u=C.cT(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.ra(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cT(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
bDP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cT(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cT(t,2))+C.cT(t,3)*r,r)-q
o=C.cT(t,4)*i
n=Math.cos(f*(2+3*C.cT(t,5))+t)
m=Math.abs(n)
l=B.cu(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.sau(new B.a7(A.ax,A.aD,A.x,n>0?D.dbw:D.cvU,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c4(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bgt.gp(0)
k=j.H()
v.drawOval(B.c4(new B.aa(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.ra(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lw(d,e,f,30,A.bJ,110)},
bWV(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lw(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cT(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.sau(new B.bR(A.A,0.5,A.x,d,0,B.a([W.Wf.j(0.45*k),D.acq],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aQ(i.r,A.ap,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b84,A.c,0.2*k)
i.toString
j.sau(new B.a7(A.b1,A.b6,A.x,B.a([D.bcm,i],u),d,d).aw(0,B.cu(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbI().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bUA(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cT(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cT(p,2))+C.cT(p,3)*n,n)
l=C.cT(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bA(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.X()
l=B.a([],t)
i=new B.aQ(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pp(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pp(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cPH[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sau(new B.bR(A.rw,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a13,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbI().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lw(a3,a4,a5,30,A.ij,130)},
ce9(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cT(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cT(q,2))+C.cT(q,3)*o,o)
m=C.cT(q,4)
l=Math.sin(s+q*0.7)
J.bA(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cT(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.X()
m=B.a([],u)
k=new B.aQ(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cS(p,l,0,p))
m.push(new B.cS(n,l,0,n))
m.push(new B.bF())
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cqf:D.cZs
n.sau(new B.a7(A.a3,A.a7,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbI().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lw(d,e,a0,25,A.bJ,140)},
bBl(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lw(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cT(r,1))
p=Math.sin(b2*(0.15+0.1*C.cT(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cT(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bA(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bA(v.save())
v.scale(a1*n,1)
a2=$.X()
a3=B.a([],u)
a4=new B.aQ(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pp(f,e,l,d,h,0))
a3.push(new B.pp(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.sau(new B.a7(A.a3,A.a7,A.x,i?D.cZc:D.d0L,a6,a6).aw(0,new B.aa(0,m,k,j)))
a5=a2.H()
a2=a4.gbI().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Ae.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbI().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bfO.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c_I(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.X()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.av_[t].j((1-s)*0.9).gp(0)
q.z=new B.hs(A.G,v)
p=r*0.3
p=B.bz(B.cu(e,r,r*1.6),new B.aV(p,p))
o=q.H()
u.drawRRect(B.ep(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cT(m,1)*4)+m)))
k=D.av_[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.aa(j,i,j+w,i+l),new B.aV(v,v))
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hs(A.a9_,p)
o=j.H()
u.drawRRect(B.ep(i),o)
o.delete()}},
bIo(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cT(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cT(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.o9,A.dy][A.o.F(p,4)]
j=C.cT(p,3)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nj
i.z=new B.hs(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.X()
t=B.M()
t.r=A.ay.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dL.gp(0)
a3.ai(v,u,t)
J.bA(q.save())
a1=new B.aQ(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.kE(B.bU(v,u)))
a3.tO(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.X()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bo,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c4(new B.aa(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.ra(a3,v.ae(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
ctg(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cq.av(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.X()
q=B.a([],u)
p=new B.aQ(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bJ.j(0.1).gp(0)
o=r.H()
r=p.gbI().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.X()
a0=B.M()
a0.sau(new B.bR(A.A,0.5,A.x,h,0,B.a([D.b4h.j(0.6),D.acq],x.O),h,h).aw(0,B.bU(a1,d)))
a2.ai(a1,d,a0)
a0=e*0.2
d=B.M()
d.sau(D.e7p.aw(0,B.bU(a1,a0)))
a2.ai(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cT(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cu(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()
i=B.cu(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c4(i),o)
o.delete()}this.lw(a2,a3,a4,20,A.hS,180)},
cdd(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.X()
q=B.a([],t)
p=new B.aQ(r.r,A.ap,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bx(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bx(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.X()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cv,A.iY,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbI().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cT(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cT(i,2))+C.cT(i,3)*j,j)
n=C.cT(i,4)*e+Math.sin(a3+i)*a0*0.02
$.X()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.sau(new B.bR(An.qb,0.5,A.x,f,0,D.d3U,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lw(a1,a2,a3,25,A.c,190)},
cro(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cT(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cT(r,2))+C.cT(r,3)*p,p)
n=C.cT(r,4)
m=Math.sin(t+r)
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cT(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
J.bA(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.H()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.H()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.H()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lw(d,a0,a1,40,A.es,200)},
bX0(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dw(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bA(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cu(new B.u(p,0),q,r)
$.X()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.sau(D.bRa.aw(0,new B.aa(0,o,n,m)))
e=f.H()
s.drawOval(B.c4(g),e)
e.delete()
s.restore()}}$.X()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.b8h.gp(0)
a3.ai(w,v*1.08,a0)
d=a5*0.8
this.ra(a3,w.ae(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lw(a3,a4,a5,40,A.bJ,210)},
clo(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hC,A.hS],a6),B.a([A.of,A.ij],a6),B.a([A.aE,A.ez],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bV<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.X()
k=B.a([],o)
j=new B.aQ(l.r,A.ap,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dw(i,s),l=new B.bV(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bx(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.bx(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sau(new B.a7(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.auE,new B.mc(w)).aw(0,new B.aa(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbI().a.snapshot()):l).a,a2)
a2.delete()}this.lw(a8,a9,b0,40,A.c,220)},
bWJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bw(g/t),5)
a1=g+t
$.X()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a16[a3].gp(0)
a4=a2.H()
s.drawRect(B.c4(new B.aa(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a16[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c4(new B.aa(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cT(a0,1))+C.cT(a0,2)*a6,a6)
v=C.cT(a0,3)
t=C.cT(a0,4)
this.ra(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a16[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cwT(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bJ.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cS(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cS(v,r,v,a2))
l.E(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cu(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.av.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c4(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.sau(new B.a7(A.a3,A.a7,A.x,D.d61,A.au4,null).aw(0,new B.aa(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.ra(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bEt(a4,a5,a6,60)},
bEt(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cT(p,31))+C.cT(p,32)*v,v)
n=C.cT(p,33)
J.bA(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cu(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.X()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.OL[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c4(o),m)
m.delete()
u.restore()}},
cph(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lw(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cT(o,1)*1.6
m=A.k.F(a2+C.cT(o,2)*n,n)/n
l=e*(C.cT(o*7+A.k.bw((a2+C.cT(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.X()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.sau(new B.a7(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bJ],s),null,null).aw(0,B.rf(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.ra(a0,i,p,A.c,1-m)}},
bzD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cT(r,1))
p=A.k.F(C.cT(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cT(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.X()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.awp[l].j(n).gp(0)
m.a=A.nj
m.z=new B.hs(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.awp[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
caU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bA(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cu(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.X()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bJ.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c4(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hS.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hC.j(0.4).gp(0)
k.z=new B.hs(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lw(d,e,f,45,A.bJ,270)},
bMb(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cT(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cT(o,2)*4,4)/4
j=A.eu.av(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cT(o,3))*(j*i)
if(h<=0.5)continue
g=D.cWu[A.o.F(o,5)]
J.bA(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cu(new B.u(0,l),i,j)
$.X()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.sau(new B.a7(A.b1,A.b6,A.x,B.a([A.c,g],u),null,null).aw(0,B.cu(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c4(d),a1)
a1.delete()}$.X()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hC.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lw(a5,a6,a7,30,A.hS,280)},
c_s(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.ata[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c4(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cT(g,1))+C.cT(g,2)*h,h)
e=C.cT(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cT(g,4))
a0=D.ata[A.o.F(g,4)]
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bA(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cu(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c4(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bYU(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bA(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.X()
a0=B.a([],s)
a1=new B.aQ(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cS(h,m,0,g))
a0.push(new B.cS(j,m,0,i))
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bJ,A.o9,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbI().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hS.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.X()
a5=B.M()
a5.sau(new B.bR(A.A,0.5,A.x,a3,0,B.a([A.hC.j(0.25),D.W3],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.ai(w,a4,a5)
this.lw(a7,a8,a9,30,A.bJ,300)},
crx(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.X()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bo.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.sau(new B.bR(A.A,0.5,A.x,null,0,B.a([A.hS,A.hC.j(0.6),D.W3],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cT(f,1)
d=A.k.F(b2+C.cT(f,2)*e,e)/e
a0=A.k.bw((b2+C.cT(f,2)*e)/e)
a1=C.cT(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cT(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hS,A.aJ,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.nj
g=a6.H()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.H()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.H()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lw(b0,b1,b2,35,A.bJ,310)},
bD8(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aQL(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cT(n,1))
l=a8*(0.14+0.24*C.cT(n,2))
k=a8-l
j=new B.aa(o,k,o+m,k+l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.sau(D.bS6.aw(0,j))
h=i.H()
r.drawRect(B.c4(j),h)
h.delete()
g=A.k.bw(m/q)
f=A.k.bw(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cT(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.X()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bJ.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c4(new B.aa(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aYo.prototype={
B(d){var w,v=null,u=new C.c69(),t=new C.c6b(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.alZ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c6a(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gf[w]))
return B.c_(A.bD,s,A.bt,12,10)}}
C.Yp.prototype={
T(){return new C.ayk()}}
C.ayk.prototype={
gvj(){var w=this.d
return w===$?this.d=this.a.c:w},
gaXA(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b2,A.aN),$.aw())}return v},
gavT(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJ2()
v=$.aw()
u.f!==$&&B.bM()
t=u.f=new B.ar(new B.bb(w,A.b2,A.aN),v)}return t},
q(){var w=this.gaXA(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gavT()
w.S$=v
w.P$=0
this.a2()},
Z3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Z3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().BG(90,700,700,A.eG),$async$Z3)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$Z3)
case 8:p=e
o=q.b.toLowerCase()
n=J.agG(o,".png")?"image/png":"image/jpeg"
r.m(new C.d4Q(r,n,p))
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
return B.i($async$Z3,v)},
aXz(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aOa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.afM(p.gvj().a)
if(n==null)n=A.d.gL(D.Gf)
w=p.gvj()
v=p.r
u=x.p
v=B.D(new B.an(A.W,o,A.aa,A.q,B.a([B.bY(0,new C.MK(p.gvj(),!1,!0,new B.cz(w.a+v,x.W)),0,0,0),B.ao(o,B.H5(A.mi,new C.d4V(d),B.np(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.H5(D.bC1,new C.d4W(p),B.np(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aO4,o,o,o)
t=B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gaXA(0),o,o,o,o,o,2,p.aXz("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4X(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hm,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hC.j(0.6),A.r,1)
if(p.gvj().d.length===0)q=D.bFl
else{q=C.h7Q(p.gvj().d)
if(q==null)q=new Uint8Array(0)
q=B.hR(B.fL(q,A.A,o,o,A.cn,A.bQ,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc4T(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvj().d.length!==0)r.push(B.aH(o,o,o,o,D.a_V,o,o,o,new C.d4Y(p),o,o,o,o,"Remove logo",o))
return B.cb(o,A.w,B.bm(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),p.gavT(),o,o,o,o,o,2,p.aXz("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d4Z(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dp(D.bEg,D.foe,new C.d5_(p,d),B.bk(A.av,o,o,o,A.w,o,A.cf,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aYa,o,o,o,o,A.EP,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aJY.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.YK.prototype={
T(){return new C.beg(new B.ar(A.as,$.aw()))}}
C.beg.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.N(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bS,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.r,1),g=x.p,f=B.A(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.W(A.cx,l,o,o,o,o),o,o,o,new C.dbB(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cHq[w]
u=B.a([],g)
for(t=J.aX(v.b);t.C();){s=t.gU(t)
r=new B.aV(12,12)
q=new B.aV(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aK(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.ui,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dbC(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hG,new B.x(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.EX(A.bD,6,6,A.bt,u,o)],g))}e.push(A.az)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.A(B.a([B.D(B.aL(o,A.T,!1,o,!0,A.q,o,B.aM(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aP_,new C.dbD(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.v(B.a([f,new B.dm(1,A.ci,B.cB(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.th,A.XK,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bdE.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eT()
a2.dI(this.c)
w=this.b
v=w/6.283185307179586
$.X()
u=B.M()
u.z=A.Qj
t=B.M()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.aj()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.H()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.H()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.X()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aq(d){return d.b!==this.b}}
C.bdl.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.aa(0,0,0+a7.a,0+a7.b),A.kl),a2=this.b,a3=Math.sin(a2*2),a4=$.X(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lf
a6.aD(a1,a5)
a5=x.v
a4=new B.aQ(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iS(a1))
v=new B.RI(new B.vh(B.wL(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.jg()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.X()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aQ(r,k,a0,new B.cL([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aQ(r,k,a0,new B.cL([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aQ(r,a2.b,a0,new B.cL([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbI().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jg()
e=u[a3].M7(n).a
$.X()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mm
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.bm8.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eT()
e.dI(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hf()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gal8()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.X()
i=B.a([],n)
h=new B.aQ(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bF())
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.sau(B.aTu(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jd
g=j.H()
j=h.gbI().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
aq(d){return d.b!==this.b}}
C.b8j.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eT()
a0.dI(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.aj()
l=a0.aj()
k=Math.min(t,r)*(0.03+a0.aj()*0.09)
j=a0.aj()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.X()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hs(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.b7X.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eT()
a0.dI(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.X()
h=B.a([],n)
g=new B.aQ(i.r,A.ap,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bO
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hs(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbI().a.snapshot()):i).a,d)
d.delete()}},
aq(d){return d.b!==this.b}}
C.bt0.prototype={
a6(d,e){var w,v,u=new B.aa(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.X()
w=B.M()
t=(0.5+0.5*t)*0.12
w.sau(new B.bR(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cOu,null).aw(0,u))
d.aY(u,w)
w=u.cG(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jd
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bq3.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bw(d)*7,p=0;p<7;++p){o=new B.eT()
o.dI(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.X()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bO
h=i.H()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.H()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.H()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.H()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hs(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aq(d){return d.b!==this.b}}
C.bpc.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.aa(0,0,0+e.a,0+e.b)
$.X()
v=B.M()
v.a=A.nj
v.sau(new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aY(w,v)},
aq(d){return d.b!==this.b}}
C.bcG.prototype={
a6(d,e){var w,v,u,t,s,r=e.gee(),q=0.55+0.45*Math.sin(this.b)
$.X()
w=B.M()
w.b=A.ae
w.c=1.4
w.d=A.bO
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.M()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.r0
r=new C.d4x(this,r*0.16,d,u,w)
t=e.gee()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
aq(d){return d.b!==this.b}}
C.xc.prototype={}
C.I4.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.apN.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.us.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.mn.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hv.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eG.prototype={
hy(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.en(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.V(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdH(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hLH(v.z))
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
C.ly.prototype={
hy(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,eG>")
n=B.B(new B.J(n,new C.cby(),m),m.k("ai.E"))
return C.rd(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,a4<n,@>>")
n=B.B(new B.J(n,new C.cbz(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hY.prototype={
gb7y(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRt(){if(!C.kp(this.w))return!1
var w=this.gb7y()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bR())},
hy(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
if(a3==null)a3=null
else a3=B.B(a3,x.N)
w=p.cy
if(w==null)w=null
else w=B.B(w,x.N)
v=p.db
u=p.dx
t=p.dy
s=p.fr
r=p.r
q=B.T(r).k("J<1,ly>")
r=B.B(new B.J(r,new C.cbn(),q),q.k("ai.E"))
return C.Ba(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.V(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a5().ac())
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
v=B.T(w).k("J<1,a4<n,@>>")
w=B.B(new B.J(w,new C.cbo(),v),v.k("ai.E"))
t.n(0,"slides",w)
return t}}
C.jz.prototype={}
C.b_x.prototype={
B(d){return B.cm(new C.cbt(this))}}
C.an_.prototype={
T(){return new C.bhs(null,null)}}
C.bhs.prototype={
gaXB(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.hf,null,1,null,v)
w.cH(0)
v.d!==$&&B.bM()
v.d=w
u=w}return u},
q(){this.gaXB().q()
this.bsb()},
B(d){return B.c6(this.gaXB(),new C.dDd(),this.a.c)}}
C.aJJ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.ach.prototype={
P6(d,e,f,g){return this.bLT(d,e,f,g)},
bLT(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$P6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$P6)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).N(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ad(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.du,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.ao,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a4,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.D(new C.acz(A.hx,"Download",A.bV,new C.ekR(w,d),!0,v),1),A.aw,B.D(new C.acz(A.ve,"Share",A.bj,new C.ekS(w,d),!1,v),1),A.aw,B.D(new C.acz(A.hh,"Safari",A.aZ,new C.ekT(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.az)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ekU(d),v,v))
return B.bm(!0,new B.C(A.pq,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iJ,v,t,u,s,v,A.n),v,v,v,v,A.EW,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.acz.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.ex(B.v(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bsy,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.af)}}
C.b_v.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aoZ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c4U().ajl(1.35)
s=B.aue(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bxB(v)
if(i.e&&i.w!=null)q=B.aL(h,A.T,!1,h,!0,A.q,h,B.aM(),i.w,A.bj,h,h,h,h,2,D.bNg,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cz("slide_tf_"+g.a,x.W),h,A.vU,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.z5,A.am,h,A.Sn,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.t(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gX(v)
w=n?t.cE4(B.b0(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eC:A.CI
p=B.d(f,new B.cz("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Se:s
$.X()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fz
j.r=A.aA.gp(0)
j=i.clr(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.q,B.a([j,i.clp(k,t,l?A.Se:s)],x.p),h)}else w=i.clq(p,t,g.k2?A.Se:s,m)
v=new B.n6(w,new B.cz("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bVd()
case 3:return i.cdc()
case 2:return B.b3(h,h,h,new C.b_s(g,h),A.f_)
case 5:g=g.r
return new C.b_u(g,!i.e&&i.z==null,h)}},
c4U(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jO
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cP(D.aco,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cP(l,A.J,6*v),new B.cP(l,A.J,16*v),new B.cP(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cp
w=A.aA
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.ms
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cP(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cP(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cP(A.b7,new B.u(-3*v,0),0),new B.cP(A.aB,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cP(A.cw,A.J,8*v),new B.cP(A.aB,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.V9
break
case"ice":v=o.d
e=B.a([new B.cP(A.aW,A.J,10*v),new B.cP(A.cv,A.J,22*v)],x.r)
k=A.O
w=A.es
break
case"chalk":h=o.d
e=B.a([new B.cP(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jO
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cQr[q]
u.push(new B.cP(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cP(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.X()
f=B.M()
v=o.d
f.sau(D.bPD.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cP(A.JP,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.X()
f=B.M()
v=o.d
f.sau(D.bPY.aw(0,new B.aa(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cP(l,A.J,14*o.d)],x.r)
w=l
k=A.a4
break
case"lowercase":h=2*o.d
w=l
k=A.cs
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cP(l.j(0.45),new B.u(u,u),0),new B.cP(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jO
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
axM(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eE5.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cbr(h)
v=r.k2?C.hYc(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.CI
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.WV(B.dq(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
clr(d,e,f,g){return this.axM(d,e,f,!1,g)},
clp(d,e,f){return this.axM(d,e,f,!1,null)},
clq(d,e,f,g){return this.axM(d,e,f,g,null)},
bxB(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bVd(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.W(s.b===D.kO?A.FQ:A.B0,A.ay,t,t,t,32),t,t,t)}w=u.bAz(r)
if(s.b===D.kO){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cm,A.r,1),s,B.a([new B.ad(0,A.G,A.w.j(0.08),A.dA,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aMa(r,!0)
return C.fti(s.go,v,s.id)}return w},
aMa(d,e){var w,v,u,t
try{w=C.hYv(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cm(new C.cbq(this,w,v,e))
return u}catch(t){return D.aal}},
bAz(d){return this.aMa(d,!1)},
cdc(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b2p
return C.hYN(v,w.db,w.dx)}}
C.b_s.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.X(),g=B.M(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.M()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.aa(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aY(s,g)
d.aY(s,w)
break
case 1:d.i_(s,g)
d.i_(s,w)
break
case 2:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 3:r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
h=t*0.45
r.E(new B.b5(0,h))
f=u*0.65
r.E(new B.ap(f,h))
r.E(new B.ap(f,t*0.2))
r.E(new B.ap(u,t*0.5))
r.E(new B.ap(f,t*0.8))
t*=0.55
r.E(new B.ap(f,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 4:h=t/2
w.c=v+2
d.bA(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aQ(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ap(u,0))
r.E(new B.ap(u-q,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aQ(h.r,A.ap,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break}},
aq(d){return d.b!==this.b}}
C.aHk.prototype={
T(){return new C.bsx(null,null)}}
C.bsx.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.it,null,1,null,v)
w.cH(0)
v.d!==$&&B.aO()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bur()},
aMl(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bZ(B.av(B.d(d,w,w,w,w,w,w,A.du,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bxP(){var w,v=this,u=null,t=v.aMl("Slide A",A.bj),s=v.aMl("Slide B",A.aZ)
if(v.a.c===D.cg)return new B.an(A.W,u,A.b_,A.q,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f_a(v,s,t),u)},
B(d){return this.bxP()}}
C.aHX.prototype={
iR(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jy(d){return d.b!==this.b}}
C.U5.prototype={
T(){return new C.bhE(null,null)}}
C.bhE.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.At,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cg){w.sp(0,1)
return}B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dOO(u),x.a)},
br(d){var w,v,u,t=this
t.bE(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cg)w.sp(0,1)
else B.bN(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dON(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bsq()},
B(d){var w,v=this.a
if(v.c.dy===D.cg||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dOM(this),v.d)}}
C.I3.prototype={
B(d){return B.cm(new C.cbj(this))}}
C.ay4.prototype={
T(){return new C.bca()}}
C.bca.prototype={
a_(){this.a1()
if(this.a.c!==D.cg)B.bN(A.L8,new C.d1M(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cg)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.U5(C.en(A.bg,!1,4279310375,A.aC,"",4294538006,24,A.bl,A.a4,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.eZ,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cb,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cz("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.en(A.bg,!1,4294967295,A.aC,"",4280640491,22,A.bl,A.a4,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.q,B.a([w,B.ao(32,new C.U5(t,B.p(p,D.fan,A.f,p,p,new B.o(s,p,B.I(A.b5,A.r,1),r,p,p,A.n),p,p,p,p,A.j7,p,p,1/0),!0,1,new B.cz("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bZ(n,D.aYK,A.bd)}}
C.a6N.prototype={
T(){return new C.bii(null,null)}}
C.bii.prototype={
gaY7(){var w=this.a
if(w.e)w=D.eEc.t(0,w.c)||D.aLj.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaY7()){w=C.hWS(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bsX()},
B(d){var w,v=this,u=v.d
if(!v.gaY7()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.e8t(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aYr.prototype={
B(d){var w=null
return B.av(C.b_w(!0,w,!1,C.en(A.L,!1,this.e.l(),A.aC,"",4280640491,this.f,A.bl,A.a4,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cg,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bdj.prototype={
iR(d){return C.a1r(this.b,new B.aa(0,0,0+d.a,0+d.b).cG(-this.c))},
jy(d){return d.b!==this.b||d.c!==this.c}}
C.bo9.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.aa(0,0,0+a1.a,0+a1.b).cG(-this.d),g=this.b,f=C.a1r(g,h),e=a1.gee(),d=new C.ePw()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sau(D.aMP.aw(0,h))
a0.aO(f,w)
g=C.a1r(g,h.cG(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bgg.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sau(D.eNL.aw(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hs(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sau(D.eNJ.aw(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1r(g,h.cG(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b7.j(0.7).gp(0)
g.z=new B.hs(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.oh.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sau(D.eNE.aw(0,h))
a0.aO(f,w)
w=C.a1r(g,h.cG(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b5K.gp(0)
a0.aO(w,v)
g=C.a1r(g,h.cG(e*0.03))
v=d.$1(e*0.004)
v.r=D.b87.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sau(D.aMP.aw(0,h))
a0.aO(f,g)
for(g=B.wL(f),w=B.a([],x.X),g=new B.vh(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jP(y.M));--q
g.jg()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bw(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jg()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jg()
m=w[q].M7(p*n/o).a
l=D.cNP[A.o.F(n,4)]
$.X()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sau(D.eNN.aw(0,h))
g.z=new B.hs(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.sau(D.eNK.aw(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1r(g,h.cG(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.np.gp(0)
a0.aO(g,w)
break}},
aq(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bp9.prototype={
a6(d,e){d.Fm(C.a1r(this.b,new B.aa(0,0,0+e.a,0+e.b).cG(-this.c)),A.w,e.gee()*0.05,!1)},
aq(d){return d.b!==this.b||d.c!==this.c}}
C.aJX.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aKs.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aLN.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.a75.prototype={}
C.Na.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aCW(B.a([],x.D),B.a([],w),B.a([],w),B.V(v,u),B.V(v,x.bo),B.V(v,u),B.aW(v),null,null)},
gdX(){return this.c},
gSP(){return this.r},
gSQ(){return this.w},
gKZ(){return this.x}}
C.aCW.prototype={
a_(){var w,v=this
v.a1()
$.aT.c1$.push(v)
C.fye()
$.hfp=new C.er4(v)
w=B.bj(null,A.Ar,null,1,null,v)
w.f7(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.HS()},
br(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.NM(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.HS()}},
iM(d){if(d===A.zu||d===A.ry||d===A.rx||d===A.p1)this.tb()},
q(){var w,v,u,t=this
$.aT.hB(t)
w=t.at
if(w!=null)w.a9(0)
t.tb()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bK(0)
v.h_()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bta()},
gaah(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gO5(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
aaL(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRt())return!1
return!0},
jX(){return this.aaL(null)},
ahq(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.eM2)},
pW(){if(!this.jX())return!1
this.ahq()
return!0},
apu(d){var w,v,u,t,s,r=this
if(r.aaL(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hew(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zv(){return this.apu(null)},
HS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$HS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.apP(k),$async$HS)
case 3:j=e
w=4
return B.b(C.aoq(k),$async$HS)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fNf(j,t.bY3())
w=t.gaah()?5:7
break
case 5:r=t.gO5()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aYF(r),$async$HS)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.ens())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cn(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.ent())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yc(m==null?"":m)!=null)continue
C.fyq(n,s)
p=!0}t.m(new C.enu(t,s))
if(p||s.length>J.ac(j))t.tb()
case 1:return B.h(u,v)}})
return B.i($async$HS,v)},
bY3(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kp(w)&&w!==q}if(w)p.push(r)
return p},
cjS(d){var w,v=this,u=d.w
if(!C.kp(u)||u==="hati_kiapo_uongozi")return
v.a98(d)
w=A.d.bc(v.d,new C.ep2(d))
u=v.d
if(w>=0){u[w]=d.hy()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cn(u,0,d.hy())
v.db=!1},
ce8(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kp(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cjS(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hY>")
s=B.B(new B.cQ(new B.a2(s,new C.eoR(),w.k("a2<1>")),new C.eoS(),v),v.k("H.E"))
return s},
NM(d){return this.bMf(d)},
tb(){return this.NM(null)},
bMf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$NM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ce8()
w=3
return B.b(C.V4(d==null?t.a.c:d,s),$async$NM)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.apu(r)?4:5
break
case 4:w=6
return B.b(C.a6j(r),$async$NM)
case 6:q=r.x
p=A.a.i(q==null?t.gO5():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bc(t.d,new C.emQ())
q=t.d
if(o>=0)q[o]=r.hy()
else A.d.cn(q,0,r.hy())
case 5:case 1:return B.h(u,v)}})
return B.i($async$NM,v)},
p_(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kp(u.w))===!0?A.hV:A.ly
v.at=B.cM(w,new C.eqa(v))},
aXC(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.ae2(u.hy(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.a8(v.ay)},
cx6(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.ae2(w.e.hy(),w.f,w.r))
w.m(new C.er0(w,v.pop()))
w.p_()},
ciZ(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.ae2(w.e.hy(),w.f,w.r))
w.m(new C.ep0(w,v.pop()))
w.p_()},
nW(){var w,v,u=this
if(u.e==null)return
w=A.d.bc(u.d,new C.eqO(u))
if(w>=0){u.d[w]=u.e.hy()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
WH(d){var w,v,u,t,s=this.gdq()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
x6(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bK(0)
u.h_()}w.a8(0)},
Jx(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdq()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.d9(new B.cQ(new B.a2(w,new C.eqP(),v.k("a2<1>")),new C.eqQ(),u),u.k("H.E"))
w=this.ch
v=B.a3(w).k("cy<1>")
v=B.B(new B.cy(w,v),v.k("H.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bK(0)
p.h_()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.ci(0,p,new C.eqR(n))
s.ci(0,p,new C.eqS())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hc(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b8(u.d,new C.eme(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gO5()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cn(u.d,0,u.e.hy())}u.nW()
u.p_()},
ahL(d,e){var w,v,u,t,s=this
if(s.jX())return
w=s.WH(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kp(v.w))===!0
if(u){C.hWW(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdq()
if(t!=null)C.hWX(t,w.d+w.f*0.5)}}s.Hc()
s.nW()
s.p_()
if(u&&s.c!=null)s.m(new C.er1())},
cy9(d,e){var w=this,v=w.gdq()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hc()
w.nW()
w.p_()},
gdq(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gq_(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hUY(o)
if(w!=null)return w
v=q.gdq()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bVs(v)
t=q.bVr(v)
s=B.b0(v.e)
r=v.f
return new C.jz(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hxW(o)},
bVs(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bVr(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
adK(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaah()){w.c.I(x.q).f.R(D.eKF)
return}w.a98(d)
w.aYO(C.bAd(d))
return}if(C.ccc(v)){w.a98(d)
w.aYO(d)
return}w.m(new C.eo9(w,d))},
aq2(){var w,v,u,t,s,r,q=this
q.a17(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kp(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.emc(q))
if(r&&q.c!=null){u.toString
q.J7(u,s)}return}q.tb()
q.m(new C.emd(q))},
aYN(d){this.a98(d)
this.ZE(d,!0)},
a98(d){if(!C.kp(d.w))return
C.fyq(d,this.d)},
ZE(d,e){return this.ca5(d,e)},
aYO(d){return this.ZE(d,!1)},
ca5(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ZE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bAd(d)
if(e){r=s.x
q=A.a.i(r==null?t.gO5():r)
t.dy.W(0,q.toLowerCase())
C.aor(t.a.c,q)}r=s}else r=d
w=C.ccc(r.w)?3:4
break
case 3:w=5
return B.b(t.a99(r),$async$ZE)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b8(t.d,new C.eow(l))
o=l.a.hy()
n=C.kp(o.w)&&C.hY7(o)
t.m(new C.eox(t,o,p))
if(n){m=A.d.bc(t.d,new C.eoy(o))
if(m>=0){t.d[m]=o.hy()
t.tb()}}if(!t.aaL(l.a))t.XP()
r=!1
if(t.c!=null)if(!t.aaL(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.apu(r)&&C.fut(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.eLe)
case 1:return B.h(u,v)}})
return B.i($async$ZE,v)},
a99(d){return this.bKw(d)},
bKw(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a99=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.l8(r.c,A.yO),$async$a99)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kL(!1,r,s.c,s.d,null,A.yO,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
nO(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ccc(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cbB(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nO,v)},
adr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.eo8(),s,null,!0,!0,x.H),$async$adr)
case 3:if(t.c==null){w=1
break}t.aq2()
case 1:return B.h(u,v)}})
return B.i($async$adr,v)},
adq(){var w=0,v=B.j(x.H),u,t=this,s
var $async$adq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.c9(null,null,!1,null,new C.eo5(),s,null,!0,!0,x.H),$async$adq)
case 3:if(t.c==null){w=1
break}t.m(new C.eo6())
t.aq2()
case 1:return B.h(u,v)}})
return B.i($async$adq,v)},
XP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$XP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$XP)
case 3:r=e
if(B.ka(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$XP)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJi)
case 1:return B.h(u,v)}})
return B.i($async$XP,v)},
J7(d,e){return this.cki(d,e)},
cki(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J7=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.afm(s,t.gDY(),t.gDX(),!0,e,t.d),$async$J7)
case 9:w=4
break
case 6:w=10
return B.b(C.afn(s,t.gDY(),t.gDX(),!0,e,t.d),$async$J7)
case 10:w=4
break
case 7:w=11
return B.b(C.afo(s,t.gDY(),t.gDX(),!0,e,t.d),$async$J7)
case 11:w=4
break
case 8:w=12
return B.b(C.afp(s,t.gDY(),t.gDX(),!0,e,t.d),$async$J7)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$J7,v)},
bWZ(){var w,v,u,t,s=this
if(!s.gaah()){s.c.I(x.q).f.R(D.eJv)
return}w=s.gO5()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.afl(u,t,v,new C.eno(s),new C.enp(s),w)},
adL(){var w=0,v=B.j(x.H),u=this,t,s
var $async$adL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bW(A.dC,null,new C.eof(u),s,!0,!0,!1,A.lh,!1,!1,x.N),$async$adL)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.afp(s,u.gDY(),u.gDX(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.afm(s,u.gDY(),u.gDX(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.afn(s,u.gDY(),u.gDX(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.afo(s,u.gDY(),u.gDX(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bWZ()
return B.h(null,v)}})
return B.i($async$adL,v)},
c9c(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aXC()
w=C.cC()
v=C.Ba(t,t,t,t,D.C6,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eog(u,v))},
a8A(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a8A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pW()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i1x(s),$async$a8A)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d9(q.r,new C.emg())
t.d1(new C.emh(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8A,v)},
afI(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.I(g?A.b5:A.cm,A.r,1)
return B.ho(B.aE(w,B.p(w,B.W(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
ZD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pW()){w=1
break}s=t.jB()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eor(),q),q.k("H.E"))}o=s!=null&&s.b===D.lg?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.eLp)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.eos(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$ZD)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ZD,v)},
ae1(){return this.ca4()},
ca4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ae1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pW()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i1j(s,t.f+1,o),$async$ae1)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kv(s,B.T(s).c)
p.a=A.d.bc(o.r,new C.eou(q))
t.d1(new C.eov(p,t,o,q,r))
t.c.I(x.q).f.R(D.eLO)
case 1:return B.h(u,v)}})
return B.i($async$ae1,v)},
ae8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ae8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pW()||!t.zv()){w=1
break}s=t.gdq()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eoM(),q),q.k("H.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eJ3)
w=1
break}o=new B.J(p,new C.eoN(),B.T(p).k("J<1,O>")).fD(0,new C.eoO())
r=B.V(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b2,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bW(A.K,null,new C.eoP(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ae8)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eoQ())
case 1:return B.h(u,v)}})
return B.i($async$ae8,v)},
adO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$adO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pW()){w=1
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
return B.b(C.hgu(s,new C.E_(r,q,p,o==null?"":o)),$async$adO)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d1(new C.eoh(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.afM(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$adO,v)},
a92(){return this.bJT()},
bJT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a92=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pW()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i1w(s,t.f+1,l),$async$a92)
case 3:r=e
q=$.fQH
$.fQH=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d1(new C.emx())
t.c.I(x.q).f.R(D.eIV)
w=1
break}if(!q){s=r.CW
s=C.hfn(l,s==null?"":s,!1)}else s=!1
if(s){t.d1(new C.emy(t,l,r))
t.c.I(x.q).f.R(D.eMh)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kv(s,B.T(s).c)
s=l.r
m.a=A.d.bc(s,new C.emz(p))
o=s.length
t.d1(new C.emA(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a92,v)},
aOq(d,e){if(e){this.aeB()
return}this.c9c(d,!1)},
bFF(){return this.aOq(null,!1)},
aeB(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bW(A.bW,null,new C.eoW(t),r,!0,!0,!0,A.oN,!1,!1,x.N),$async$aeB)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eoX(t,C.hUX(s).pg()))
case 1:return B.h(u,v)}})
return B.i($async$aeB,v)},
d1(d){var w=this
if(w.pW())return
w.Hc()
w.aXC()
w.m(d)
w.Jx()
w.nW()
w.p_()},
a73(){this.d1(new C.elb(this,D.mn))},
aPO(){var w=this.gdq()
if(w==null)return
this.d1(new C.emv(this,w))},
aP0(){var w=this.e
if(w==null||w.r.length<=1)return
this.d1(new C.emt(this))},
b0I(d,e){if(this.e==null||d===e)return
this.d1(new C.ep4(this,d,e))},
Nj(d){return this.bHD(d)},
bHD(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gO5():s)
w=5
return B.b(C.aop(t.a.c,r),$async$Nj)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.apR(s)
w=6
return B.b(C.b_A(t.a.c,s),$async$Nj)
case 6:if(t.c==null){w=1
break}t.m(new C.emp(t,d))
w=7
return B.b(t.tb(),$async$Nj)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Nj,v)},
ckf(d,e){var w=this
if(d.z){w.ahq()
return}w.m(new C.ep3(w,d,e))
w.p_()},
jB(){var w,v,u,t,s,r=this.gdq()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
VI(d){return this.ch.ci(0,d.a,new C.emf(d))},
arT(d){return this.CW.ci(0,d.a,new C.emR())},
a17(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.WH(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ak$.d.c
if(u!=null)u.js()},
b41(){return this.a17(!0)},
a15(d){var w,v,u=this
if(u.pW())return
if(!u.zv())return
w=u.WH(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.VI(w).saV(0,"")}u.m(new C.eqM(u,d))
$.aT.x1$.push(new C.eqN(u,d,w))},
b4x(d){var w=this
if(d.b===D.cQ&&!w.jX()&&w.zv()){w.a15(d.a)
return}w.ayb(d.a)},
ayb(d){var w,v,u,t,s,r=this
if(r.jX())return
w=r.r
if(w!=null&&w!==d){v=r.WH(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eqb(r,s,d))
if(s||d==null){t=$.aT.ak$.d.c
if(t!=null)t.js()}},
aKJ(){this.d1(new C.elc(this))},
oK(d){return this.bwR(d)},
bwR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nO(),$async$oK)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d1(new C.el9(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oK,v)},
US(){var w=0,v=B.j(x.H),u,t=this,s
var $async$US=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G1(78,1920),$async$US)
case 3:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.el_(t,s))
case 1:return B.h(u,v)}})
return B.i($async$US,v)},
UM(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdq()==null){w=1
break}w=3
return B.b(S.Cn(t.a.c),$async$UM)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gam(s)){t.c.I(x.q).f.R(D.eMR)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bW(null,null,new C.ekX(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$UM)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdq()==null){w=1
break}t.d1(new C.ekY(t,q))
case 1:return B.h(u,v)}})
return B.i($async$UM,v)},
aqS(){var w=this,v=w.r
if(v==null||w.gdq()==null)return
if(A.d.b8(w.gdq().z,new C.emr(v))){w.c.I(x.q).f.R(D.eLS)
return}if(w.w===v)w.a17(!0)
w.d1(new C.ems(w,v))},
bDV(){var w=this.jB(),v=w==null
if((v?null:w.b)===D.eZ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aLq(d,e){var w=this,v=w.jB(),u=w.gdq(),t=w.e
if(t==null)return
w.d1(new C.elE(w,v,d,e,t,u))},
bys(d){return this.aLq(d,null)},
a7l(d){return this.byA(d)},
byA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a5u.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nO(),$async$a7l)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jB()
if(s!=null){r=s.b
if(r===D.cQ)t.bys(s.w>=28||s.x.gdH(0)>=A.I.gdH(0)?d.d:d.e)
else if(r===D.eZ){r=d.c
t.aLq(r.j(0.88),r)}w=1
break}t.d1(new C.elJ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7l,v)},
a7k(d){return this.byy(d)},
byy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jB()
r=t.gdq()
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
return B.b(t.nO(),$async$a7k)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.elH(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7k,v)},
byi(d){var w=this.gdq()
if(w==null)return
this.d1(new C.elD(this,w,d))},
ZJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i1s(r),$async$ZJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nW()
t.m(new C.eoG(t,s))
w=4
return B.b(t.tb(),$async$ZJ)
case 4:if(t.c!=null)t.adK(s)
case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
a8V(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a17(!0)
t.nW()
s=t.c
s.toString
w=3
return B.b(C.Qk(s,q),$async$a8V)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a8V,v)},
D6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$D6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nW()
t=4
w=7
return B.b(C.aOu(m),$async$D6)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aNU(o,q,m.b),$async$D6)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a9(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D6,v)},
EL(d,e){return this.cwA(d,e)},
cwA(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$EL=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pW()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a17(!0)
t.nW()
s=h.a=t.e.hy()}else{r=A.d.bc(t.d,new C.eqV(d))
s=h.a=r>=0?t.d[r].hy():d.hy()}s=s.w
q=s==null
p=C.hVV(q?"":s)
o=C.hej(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a2<1>")
n=B.B(new B.a2(s,new C.eqW(h,p),q),q.k("H.E"))
s=h.a.b
w=3
return B.b(t.cpY(n.length,o,s),$async$EL)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hVP(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gL(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.cpX(n,o),$async$EL)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.ix(t.d,new C.eqX(s))
s=h.a.b
w=11
return B.b(t.cpV(k.b,s),$async$EL)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hy()
case 5:j=C.hVU(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.eN1)
w=1
break}w=12
return B.b(t.cpW(j.a,s,o,j.c),$async$EL)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eqY(h,t,i))
t.p_()
case 1:return B.h(u,v)}})
return B.i($async$EL,v)},
cpY(d,e,f){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqr(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cpX(d,e){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqq(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cpV(d,e){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqk(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cpW(d,e,f,g){var w=this.c
w.toString
return B.bW(A.K,null,new C.eqm(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aal(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aam(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bW,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ad(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.D(B.v(B.a([B.d(g,u,u,u,u,u,u,D.eX7,u,u,u),A.ao,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a4,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aT1(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.SW,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aT4(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.D(B.v(B.a([B.d(i,w,w,w,w,w,w,A.ne,w,w,w),A.d0,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a4,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.W(A.B3,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.enk(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
bUp(d,e,f,g,h,i){return this.aT4(d,e,f,!1,g,h,i)},
atc(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.du,w,w,w),A.bz,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Y4,w,w,w)},
aT3(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.nc,w,w,w),new C.enj(d,f),v)},
aT2(d,e){return this.aT3(d,e,null)},
Jo(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oV(l,s.c,s.d),$async$Jo)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aK("=",l.length)+"\n\n"
q=new B.fc(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gah(o.z),n=new B.fG(l,new C.eqc());n.C();){m=l.gU(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aJ(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a8T(l.charCodeAt(0)==0?l:l,r.b),$async$Jo)
case 4:l=t.a
w=5
return B.b(B.oU(l.c,l.d),$async$Jo)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jo,v)},
Hy(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Hy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oV(q,s.c,s.d),$async$Hy)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a8T(A.R.ao(r.ad(),null),r.b+".json"),$async$Hy)
case 4:q=t.a
w=5
return B.b(B.oU(q.c,q.d),$async$Hy)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Hy,v)},
b3P(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nW()
u.tb()
w=u.c
w.toString
v=B.ej(new C.eqL(u,t),!1,null,x.z)
B.a5(w,!1).ce(v)},
GL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$GL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nO(),$async$GL)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fyD(),$async$GL)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hYH(s.a)
q=t.c
q.toString
w=5
return B.b(B.bW(A.aA,null,new C.el4(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$GL)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d1(new C.el5(t,s))
w=1
break}if(p==="split")t.d1(new C.el6(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$GL,v)},
MF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$MF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pW()){w=1
break}w=3
return B.b(t.nO(),$async$MF)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aOt(s,null,null),$async$MF)
case 4:r=e
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.ela(t,r))
case 1:return B.h(u,v)}})
return B.i($async$MF,v)},
b0v(d){var w=this.e
if(w==null||!C.kp(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aMI(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aOt(s,t==null?null:B.b0(t),u)},
a71(d){return this.bwI(d)},
bwI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a71=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pW()){w=1
break}if(!t.zv()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eNg)
w=1
break}w=3
return B.b(t.aMI(),$async$a71)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.el1(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a71,v)},
afl(d){return this.cj1(d)},
cj1(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pW()){w=1
break}if(!t.zv()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMp)
w=1
break}w=3
return B.b(t.aMI(),$async$afl)
case 3:r=f
if(r==null||t.gdq()==null){w=1
break}t.d1(new C.ep1(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afl,v)},
c5U(){var w,v,u=this
if(u.jX())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cvD()}},
cvD(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d1(new C.eqT(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bUK(){var w,v,u,t,s,r=this.gdq()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d1(new C.enn(this,r,u.d))},
bZf(d){var w
if(this.jX())return!1
w=this.e
if((w==null?null:C.kp(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fve(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kO&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
bZg(d){var w
if(this.jX())return!1
w=this.e
if((w==null?null:C.kp(w.w))!==!0)return!0
if(!this.zv())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fve(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kO&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
MO(d){return this.bz_(d)},
bz_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$MO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pW()){w=1
break}if(!t.zv()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eLf)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aot(p),$async$MO)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.eLU)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6j(r)
w=1
break}t.m(new C.elN(t,d,o))
t.nW()
$.aT.x1$.push(new C.elO(t))
case 1:return B.h(u,v)}})
return B.i($async$MO,v)},
UQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$UQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nO(),$async$UQ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bAU(),$async$UQ)
case 4:s=e
if(s==null||t.gdq()==null){w=1
break}t.d1(new C.ekZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$UQ,v)},
Nx(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nO(),$async$Nx)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jB()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fyu(r),$async$Nx)
case 4:q=e
if(q==null){w=1
break}t.d1(new C.emP(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Nx,v)},
iJ(d){this.d1(new C.el7(this,d))},
pL(d){return this.byb(d)},
byb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pW()){w=1
break}m=!D.aLl.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nO(),$async$pL)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.GL()
w=1
break A
case"sign_paper":t.MF()
w=1
break A
case"hd_photo":t.UQ()
w=1
break A
case"sharpen":t.Nx()
w=1
break A
case"print":t.D6()
w=1
break A
case"rotate":s=t.jB()
if(s!=null)t.d1(new C.elg(s))
w=1
break A
case"text_box":t.aKJ()
w=1
break A
case"picture":t.US()
w=1
break A
case"present":t.b3P()
w=1
break A
case"new_slide":t.a73()
w=1
break A
case"export_json":t.Hy()
w=1
break A
case"outline_share":t.Jo()
w=1
break A
case"flashcard_tool":t.uS(D.Hh)
w=1
break A
case"quiz_tool":t.uS(D.Hi)
w=1
break A
case"worksheet_tool":t.uS(D.Hj)
w=1
break A
case"duplicate_el":s=t.jB()
if(s==null){w=1
break A}t.d1(new C.elh(t,s))
w=1
break A
case"delete_el":t.aqS()
w=1
break A
case"bring_fwd":s=t.jB()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.eli(t,s))
w=1
break A
case"send_back":s=t.jB()
if(s==null||t.gdq()==null){w=1
break A}t.d1(new C.elt(t,s))
w=1
break A
case"align_left":s=t.jB()
if(s!=null)t.d1(new C.elw(s))
w=1
break A
case"align_center":s=t.jB()
if(s!=null)t.d1(new C.elx(s))
w=1
break A
case"align_right":s=t.jB()
if(s!=null)t.d1(new C.ely(s))
w=1
break A
case"grayscale":case"brighten":t.Nx()
w=1
break A
case"flip_h":s=t.jB()
if(s!=null)t.d1(new C.elz(s))
w=1
break A
case"flip_v":s=t.jB()
if(s!=null)t.d1(new C.elA(s))
w=1
break A
case"rectangle":t.oK(D.be)
w=1
break A
case"circle":t.oK(D.eI)
w=1
break A
case"triangle":t.oK(D.jx)
w=1
break A
case"arrow":t.oK(D.C8)
w=1
break A
case"line":case"divider":t.oK(D.fp)
w=1
break A
case"word_count":r=t.gdq()
if(r==null){w=1
break A}for(q=A.d.gah(r.z),p=new B.fG(q,new C.elB()),o=0;p.C();){n=A.a.fv(A.a.i(q.gU(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.elC(),B.T(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iJ(C.iQ(A.L,!1,t.gq_().d.l(),A.aC,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mo,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iJ(C.iQ(A.L,!1,t.gq_().e.l(),A.aC,22,A.bl,A.a4,0.12,q,"Subtitle goes here",0,D.dc,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iJ(C.iQ(A.bg,!0,4279310375,A.aC,20,A.bl,A.a4,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tX,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,20,A.bl,A.a4,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.tW,0.8,0.1,0.22))
w=1
break A
case"quote":t.iJ(C.iQ(A.L,!1,4279310375,A.aC,24,A.cD,A.a4,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dc,0.8,0.1,0.3))
w=1
break A
case"citation":t.iJ(C.iQ(A.bg,!1,4284773515,A.aC,14,A.bl,A.a4,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.tX,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iJ(C.iQ(A.dK,!1,4279310375,A.aC,14,A.bl,A.a4,0.08,C.cC(),C.bAW(),0,D.dc,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iJ(C.iQ(A.dK,!1,4279310375,A.aC,13,A.bl,A.a4,0.06,C.cC(),"Page "+(t.f+1),0,D.dc,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d1(new C.elj(t))
w=1
break A
case"footer_bar":t.d1(new C.elk(t))
w=1
break A
case"highlight":t.d1(new C.ell(t))
w=1
break A
case"redact":t.d1(new C.elm(t))
w=1
break A
case"callout":t.d1(new C.eln(t))
w=1
break A
case"checkboxes":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,20,A.bl,A.a4,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dc,0.8,0.1,0.2))
w=1
break A
case"table":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,16,A.bl,A.a4,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dc,0.8,0.1,0.18))
w=1
break A
case"memo":t.d1(new C.elo(t))
w=1
break A
case"letter":t.iJ(C.iQ(A.bg,!1,4279179050,A.aC,17,A.bl,A.a4,0.82,C.cC(),C.bAW()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,22,A.bl,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tX,0.8,0.1,0.12))
w=1
break A
case"toc":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,18,A.bl,A.a4,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dc,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,16,A.bl,A.a4,0.08,C.cC(),"Signature: _________________________",0,D.dc,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,16,A.bl,A.a4,0.08,C.cC(),"Initials: ______",0,D.dc,0.3,0.65,0.78))
w=1
break A
case"approved":t.iJ(C.iQ(A.L,!1,4278556265,A.aC,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mo,0.32,0.62,0.08))
w=1
break A
case"draft":t.iJ(C.iQ(A.L,!1,4292617766,A.aC,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dc,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iJ(C.iQ(A.L,!1,871318596,A.aC,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dc,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d1(new C.elp(t))
w=1
break A
case"progress":t.d1(new C.elq(t))
w=1
break A
case"stars":t.iJ(C.iQ(A.L,!1,4279310375,A.aC,36,A.bl,A.a4,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.pP,0.8,0.1,0.4))
w=1
break A
case"equation":t.iJ(C.iQ(A.L,!1,4279310375,A.aC,32,A.bl,A.O,0.14,C.cC(),"y = mx + b",0,D.dc,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iJ(C.iQ(A.L,!1,4279310375,A.aC,18,A.bl,A.a4,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.tW,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d1(new C.elr(t))
w=1
break A
case"compare":t.d1(new C.els(t))
w=1
break A
case"link_text":t.iJ(C.iQ(A.bg,!1,4280640491,A.ms,16,A.bl,A.a4,0.1,C.cC(),"https://example.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"phone":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,18,A.bl,A.a4,0.1,C.cC(),"(555) 123-4567",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"email":t.iJ(C.iQ(A.bg,!1,4280640491,A.aC,18,A.bl,A.a4,0.1,C.cC(),"name@email.com",0,D.dc,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d1(new C.elu(t))
w=1
break A
case"cover_page":r=t.gdq()
if(r==null){w=1
break A}t.d1(new C.elv(t,r))
w=1
break A
case"invoice":t.iJ(C.iQ(A.bg,!1,4279179050,A.aC,16,A.bl,A.a4,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"resume":t.iJ(C.iQ(A.bg,!1,4279179050,A.aC,17,A.bl,A.a4,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dc,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,16,A.bl,A.a4,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bAW()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,17,A.bl,A.a4,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dc,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iJ(C.iQ(A.bg,!1,4279310375,A.aC,15,A.bl,A.a4,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dc,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pL,v)},
cpp(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eE9.t(0,this.z)},
cpo(d){if(this.jB()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b5m(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cg,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.r,o&&e?2:1)
t=C.hYw(d)
s=o?12:18
r=o?A.I:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Na,A.f,p,p,D.Do,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fx,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bK8(d){var w,v=null,u=this.jB()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.ay:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.J(D.PC,new C.emO(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uS(d){return this.bwQ(d)},
bwQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aLg.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nO(),$async$uS)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d1(new C.el8(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uS,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eCW
w=h.e
if(w==null)return h.bAF()
v=h.gdq()
v.toString
u=h.c
u.toString
t=B.N(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bS,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bW:D.b7C
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRt()}else j=!1
if(j)k.push(new C.a6O(h.a.c,!1,h.e.gb7y(),h.gc5R(),g))
else if(s&&h.e!=null&&!h.jX()&&C.ccc(h.e.w)){j=h.a
k.push(new C.a6O(j.c,j.d,g,h.gc7_(),g))}if(s)k.push(h.bK4(w,t,r))
if(s&&h.jX()){w=t?A.fl:A.ka
j=B.m(14)
i=B.I(A.bj.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bH5,A.ab,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fl,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Ay,A.iN,g,g,g))}w=!n
if(w&&!h.jX())k.push(h.c_b(t,r))
if(w&&h.jX())k.push(h.cwB(t))
if(r&&h.jB()!=null&&w&&!h.jX())k.push(h.c_7(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b3k(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b3k(t,!1),g))
i.push(B.D(new B.bI(A.b1,g,g,h.bBW(v,t,!s||p),g),1))
if(h.cpp(r)&&u&&s&&!h.jX())i.push(h.c5F(v,t,r))
j.push(B.D(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jX()&&h.cpo(!1))j.push(new B.a6(240,g,h.bMD(t),g))
k.push(B.D(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c_8(t))
return B.cb(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bAF(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.N(p).ax.a===A.H
p=w?A.bW:A.bN
v=r.a.e
u=r.c4V(A.bj,A.pu,new C.elR(r),r.gc99(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.D(r.aKs(A.bj,A.hv,"Blank Presentation",new C.elS(r)),1),A.aw,B.D(r.aKs(A.aZ,A.xU,"Class Template",new C.elT(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.mr,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bxE(w))
else{t=new B.hW(t,B.T(t).k("hW<1>"))
A.d.v(u,t.gdL(t).dt(0,new C.elU(r,w),x.l))}return B.cb(q,p,B.bm(!1,B.cB(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bIr(){this.m(new C.emu(this))
var w=this.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900){w=$.aT.ak$.d.c
if(w!=null)w.js()}},
ae2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jB()==null){w=1
break}s=t.c
s.toString
s=B.N(s)
r=t.c
r.toString
w=3
return B.b(B.bW(A.K,null,new C.eoF(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$ae2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
As(d,e){return this.cpL(d,e)},
cpL(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$As=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hQ(D.VD,!0,"Dismiss",j,new C.eqd(),new C.eqe(d,e),A.ir,!0,x.N),$async$As)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ahq()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRt()){r.ahq()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aOu(d),$async$As)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aNU(j,q,d.b),$async$As)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a9(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.EL(d,!1),$async$As)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hQ(D.VD,!0,"Dismiss",j,new C.eqf(),new C.eqg(d),A.a1,!0,x.y),$async$As)
case 20:if(g===!0)r.Nj(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.af5("Rename presentation",d.b),$async$As)
case 24:l=g
if(l!=null)r.ckf(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eqh(r,k))
r.p_()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$As,v)},
aZs(d,e){var w=null
return B.bK(!1,D.fk6,w,w,!0,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lz,w,w,w,w,w,A.kh,w,w))},
bxE(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eld(this,d),null)},
bGz(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.emi(),x.dv).bZ(0,new C.emj()),v=B.B(w,w.$ti.k("H.E"))
return new B.C(G.afm,this.aL0(v,e,new C.emk(),f),null)},
aL0(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ea)
t=e.j(g?0.14:0.1)
s=new B.aV(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.W(p,g?A.ad:A.bw,n,n,n,10),A.pX],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.co(A.aQ,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bP(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.mW,n,n,n))
A.d.v(l,u)}return B.f1(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bxC(d,e,f){return this.aL0(d,e,null,f)},
bGB(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.d6h
else if(v==="hati_kuhoweya")w=D.cTY
else{if(v==="hati_kiapo_uongozi")v=D.cHk
else v=C.kp(v)?D.cO8:A.Pd
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.emn(this,f,d,e,w),null)},
c_8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jB()
if(i==null||i.b!==D.cQ)return A.bH
w=k.VI(i)
v=k.arT(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.C(A.AA,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bK(!1,D.ffY,j,j,!0,j,j,new C.enO(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aA:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.r,1)
o=B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h3,B.bZ(new B.C(A.eP,B.aL(j,A.T,!0,j,!0,A.q,j,B.aM(),w,A.bj,j,j,j,j,2,D.bMZ,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.vU,j,j,j,j,j,j,!1,"\u2022",j,new C.enP(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.z5,A.am,j,A.Sn,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.r,1)
n=B.D(B.cd(B.A(B.a([k.tA(G.Ma,j,new C.enQ(k,i),d),k.tA(G.Ze,j,new C.enR(k,i),d),k.tA(I.ajA,j,new C.enS(k,i),d),k.tA(I.ZV,j,new C.enT(k,i),d),k.tA(k.bxA(i.as),j,new C.enU(k,i),d),k.tA(D.akM,j,new C.enV(k,i),d),k.tA(D.akL,j,new C.enW(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.y,j,j,j,j,A.aQ),1)
m=A.k.O(i.w)
return B.bY(0,B.aF(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(D.bnk,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.ay:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d8],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.l5,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.af),0,0,0)},
c_7(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jB()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.r,1)
r=B.a([new B.ad(0,A.G,A.w.j(0.12),A.cy,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b2_(A.j9,"Edit",new C.enz(o,m),d,!0))
if(w===D.lg)p.push(o.b2_(A.FK,"Shape & ring",new C.enA(o),d,!0))
p.push(o.tA(A.Bj,"Format",new C.enB(o),d))
if(v)A.d.v(p,B.a([o.tA(G.Ma,n,new C.enC(o,m),d),o.tA(D.akM,n,new C.enD(o,m),d),o.tA(D.akL,n,new C.enE(o,m),d)],q))
p.push(A.b3)
p.push(o.cnF(A.e4,n,o.gaOZ(),d,!0))
p.push(o.tA(A.hw,"Done",new C.enF(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.EI,A.l5,n,n,n)},
bxA(d){switch(d.a){case 2:return D.ZS
case 1:case 5:return D.ZU
default:return D.ZT}},
c_Z(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bg}},
aya(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aB
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.G4:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ea,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qD,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.ex(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.af),n)},
tA(d,e,f,g){return this.aya(d,e,f,g,!1,!1)},
b2_(d,e,f,g,h){return this.aya(d,e,f,g,h,!1)},
cnF(d,e,f,g,h){return this.aya(d,e,f,g,!1,h)},
bK4(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mD],m)
w=B.I(e?A.aK:A.p5,A.r,1.2)
v=B.a([new B.ad(0,A.G,A.bj.j(e?0.18:0.1),A.cy,18)],x.V)
u=p.a1x(A.eB,"Back",p.gbDF(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d8,B.D(B.A(B.a([new B.dm(1,A.ci,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.t7,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.jX()){u=p.a1x(A.qR,"Undo",p.ax.length===0?o:p.gcx5(),e)
A.d.v(r,B.a([u,p.a1x(D.bAG,"Redo",p.ay.length===0?o:p.gciY(),e)],q))}r.push(p.a1x(A.xA,"PDF",new C.emH(p),e))
r.push(p.a1x(A.hx,"Download as video",new C.emI(p),e))
if(!p.jX())r.push(B.Bo(o,o,B.W(A.nK,e?A.ad:A.bw,o,o,o,o),new C.emJ(p),A.J,new C.emK(p),A.ag,"More",x.N))
r.push(A.d8)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.m(14),!0,B.ex(D.e1n,o,new B.o(o,o,o,B.m(14),o,K.G4,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaz_(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.af))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aD,A.x,m,o,o),A.n),o,o,o,D.bnf,D.bsn,o,o,o)},
cwB(d){var w=this,v=null,u=B.m(18),t=d?A.aA.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.r,1)
return B.p(v,B.cd(B.A(B.a([w.ir(A.tC,"Print",new C.eqZ(w),d),w.ir(A.xA,"Download PDF",new C.er_(w),d),w.ir(A.pB,"Present",w.gaz_(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.y,v,v,v,v,A.aQ),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Ay,G.ah6,v,v,v)},
a1x(d,e,f,g){var w,v=null
if(f==null)w=g?A.b5:A.dm
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c7)},
c_b(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aA.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.r,1)
t=x.f0
t=B.B(new B.J(p,new C.enZ(r,d),t),t.k("ai.E"))
t.push(new B.C(Y.agM,new B.fj(new C.eo_(r),q),q))
A.d.v(t,w?B.a([new B.C(R.v2,r.afI(A.l6,"Ending celebration",r.gc9m(),d),q),new B.C(R.v2,r.afI(A.FK,"Logo ring & frame",r.gca2(),d),q)],x.p):A.h6)
A.d.v(t,w?B.a([new B.C(R.v2,r.afI(A.mZ,"Look and feel",r.gca3(),d),q),new B.C(R.v2,r.afI(A.oz,"Edit this slide's text",r.gcaA(),d),q)],x.p):A.h6)
t.push(new B.C(R.v2,B.ho(B.aE(q,B.p(q,D.eCp,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ad(0,A.G,N.l0.j(0.4),A.J,10)],x.V),D.amK,A.n),q,34,q,q,A.h2,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eo0(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.y,q,D.bsR,q,q,A.aQ)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cln(d),A.q,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aQ)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Ay,q,q,q,q)},
cln(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d0z[v]
u.a=null
s=u.a=t.b
w.push(e.lt(e.cn4(s),t.a,new C.epn(u,e),a3,D.aLg.t(0,s)))}w.push(e.ir(A.kH,"Notes Slide",new C.epo(e),a3))
w.push(e.lt(A.FJ,"Quiz",new C.epp(e),a3,!0))
w.push(e.lt(L.Fm,"Worksheet",new C.epA(e),a3,!0))
w.push(e.lt(V.FM,"Flashcard",new C.epL(e),a3,!0))
w.push(e.lt(A.N0,"Lab Report",new C.epW(e),a3,!0))
w.push(e.lt(A.xG,"Rubric",new C.eq2(e),a3,!0))
w.push(e.lt(A.ot,"Minutes",new C.eq3(e),a3,!0))
w.push(e.lt(A.pz,"Syllabus",new C.eq4(e),a3,!0))
w.push(e.lt(A.N4,"Timeline",new C.eq5(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d1L[v]
w.push(e.lt(r.b,r.c,new C.eq6(e,r),a3,!D.aLl.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ir(A.xX,a0,e.gaKI(),a3),e.ir(A.tz,"Picture",new C.epq(e),a3),e.ir(A.xQ,"Bio link",new C.epr(e),a3),e.ir(A.a_p,"Table",new C.eps(e),a3),e.ir(A.N3,"Sticky",new C.ept(e),a3),e.ir(A.ty,"Divider",new C.epu(e),a3),e.ir(A.Bk,"Header",new C.epv(e),a3),e.lt(A3.vb,"Rectangle",new C.epw(e),a3,!0),e.lt(A.qI,"Circle",new C.epx(e),a3,!0),e.lt(A.ZK,"Triangle",new C.epy(e),a3,!0),e.lt(A.j8,"Arrow",new C.epz(e),a3,!0),e.lt(D.bza,"Parallelogram",new C.epB(e),a3,!0),e.lt(D.bBD,"Hexagon",new C.epC(e),a3,!0),e.lt(A.ty,"Line",new C.epD(e),a3,!0),e.lt(A.xA,"PDF",new C.epE(e),a3,!0),e.lt(N.a_y,"Signature",new C.epF(e),a3,!0),e.ir(A2.Ba,"Quote",new C.epG(e),a3),e.ir(D.Zm,a1,new C.epH(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=x.p
t=B.A(B.a([e.aLx("Wide 16:9",D.C6,a3),e.aLx("Short 9:16",D.nT,a3),new B.C(A.fx,B.my(D.bDM,d,D.fcm,d,new C.epI(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bDU("This slide",!e.Q,a3,new C.epJ(e)),A.bp,e.aNI("All slides",e.Q,a3,new C.epK(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bDV()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bI,d,d,d,d,d,d,d,d,10,d,d,A.a4,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.J(D.a1l,new C.epM(e),n),n.k("ai.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d2D[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dm:A.b5,1.5,A.r,-1)
l.push(new B.C(A.fx,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bP(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.epN(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bCd()
g=B.T(h).k("J<1,C>")
h=B.B(new B.J(h,new C.epO(e,a3),g),g.k("ai.E"))
return new B.a6(w.a.a-20,d,B.v(B.a([t,A.P,q,A.ao,p,A.P,o,A.at,n,A.P,m,A.at,l,A.P,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.y,d,d,d,d,A.aQ),A.ao,e.bX5(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jB()
w=e.c
w.toString
w=B.aI(w,A.bS,x.w).w
u=new C.epm(e)
t=new C.eq7(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.PC,f.dy,new C.epP(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.ay:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdq()
q=q==null?d:q.r
p.push(t.$4(D.PC,q,new C.epQ(e,u),A.bj))
return new B.a6(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ir(A.kH,w,new C.epR(e),a3),e.ir(A.tC,"Print deck",new C.epS(e),a3),e.lt(D.aiE,"Export JSON",new C.epT(e),a3,!0),e.ir(A.fJ,"Duplicate Slide",e.gaPN(),a3),e.ir(A.e4,a2,e.gaP_(),a3),e.cr2(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jB()
w=x.p
u=B.a([e.ir(D.Zm,a1,new C.epU(e),a3),e.ir(A.fJ,"Duplicate",e.gaPN(),a3),e.ir(A.e4,a2,e.gaP_(),a3),e.ir(A.pB,"Present",e.gaz_(),a3),e.ir(A.Bi,a0,e.gaKI(),a3),e.ir(A.Bd,"Fit Text",new C.epV(e),a3),e.ir(A.xA,"Download PDF",new C.epX(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ir(A.kJ,"Transfer",new C.epY(e),a3))
if(f!=null){w=B.a([A.ab,e.ir(G.Ma,"Bold",new C.epZ(e,f),a3),e.ir(G.Ze,"Italic",new C.eq_(e,f),a3),e.ir(G.aif,"Underline",new C.eq0(e,f),a3),e.ir(Ae.Mb,"Bullets",new C.eq1(e,f),a3),e.bMm(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bK8(a3))
w.push(e.ir(D.bxR,"Delete",e.gaOZ(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aLx(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nT
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7_,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d8,D.bCY],v))
return new B.C(A.fx,B.jG(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.elM(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cr2(d){var w,v,u,t,s,r=this,q=null,p=r.gdq()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b5:A.cm,A.r,1)
u=B.m(8)
t=B.W(A.Fk,d?A.ay:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.alK,q,q,q,new C.equ(r,p),q,q,q,q,q,A.c7)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bh,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.alB,q,q,q,new C.eqv(r,p),q,q,q,q,q,A.c7)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.F0,A.ma,q,q,q)},
cn4(d){switch(d.a){case 6:return V.FM
case 7:return A.FJ
case 8:return L.Fm
case 4:return A.Bk
default:return A.kH}},
bMm(d,e){var w=null,v=B.I(e?A.b5:A.cm,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.alK,w,w,w,new C.emU(this,d),w,w,w,w,w,A.c7),s=A.k.O(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bh,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.alB,w,w,w,new C.emV(this,d),w,w,w,w,w,A.c7)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xj,A.ma,w,w,w)},
bX5(d){var w=null
return B.Bo(B.CR(B.W(A5.Zp,d?A.ad:A.bw,w,w,w,16),w,w,D.fhK,w,w,w),w,w,new C.enr(),A.J,this.gbyh(),A.cj,"Slide layout",x.fO)},
lt(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.dq:A.aL,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Na,A.f,w,w,D.Do,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fx,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.ex(new B.C(A.h3,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.d0,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w)},
ir(d,e,f,g){return this.lt(d,e,f,g,!1)},
b3k(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aQ
v=B.hE(t,new C.eqG(u,s,e,d),s.r.length,A.cj,t,w,new C.eqH(e),!1)
s=d?A.aA:A.bN
w=B.a([],x.p)
if(e&&!u.jX())w.push(new B.C(A.cj,B.H5(E.alX,new C.eqI(u),B.np(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aLZ,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bBW(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nT?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bI(A.b1,v,v,new B.fF(w,B.aE(v,B.cm(new C.ema(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.emb(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bBY(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kp(a9.w))===!0,b1=b0&&C.fve(b3),b2=b0&&b3.b===D.kO&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.jX())v=!b0||a7.bZg(b3)
else v=!1
if(!a7.jX())u=!b0||a7.bZf(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cb:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fTx(b3))o=a8
else if(p&&!a7.jX())o=a7.gc5T()
else o=a7.jX()?a8:new C.elZ(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jr
i=w&&C.fTx(b3)&&a7.zv()?new C.em_(a7,b3):a8
h=v&&b3.b===D.cQ?new C.em0(a7,b3):a8
g=u?new C.em1(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bn
else e=q?A.bV:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bV.j(0.08)
else a0=b3.b===D.kO?A.K:a8
if(b1){a1=a7.jX()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bV.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bS,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zv()
a3=b3.b===D.cQ
a4=a3?a7.VI(b3):a8
a5=a3?a7.arT(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bS,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.em2(a7,b3):a8
a3=v&&a3?new C.em3(a7,b3):a8
a6=C.b_w(q,a4,a1,b3,a5,a2,a3,new C.em4(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bFL,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.em5(a7,b3,b4,b5),a8,a8,new C.em6(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jX()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bGp,A.f,a8,a8,new B.o(A.dL,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbUJ(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jX()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bHX,A.f,a8,a8,new B.o(A.bV,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ad(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.em7(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bS,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fqa,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ad(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kF,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.em8(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eA(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cz("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aNI(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bF,A.r,1)
if(e)t=A.bj
else t=f?A.ay:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d8,B.p(r,D.Na,A.f,r,r,D.Do,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bDU(d,e,f,g){return this.aNI(d,e,f,g,!1)},
c5F(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b2,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aA:A.aP
t=f?A.wn:l
if(f)s=new B.bP(new B.az(e?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ad(0,A.G,A.w.j(0.12),A.r9,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.aZs(e,new C.eo2(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bI,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.ao,B.D(B.aL(l,A.T,!1,l,!0,A.q,l,B.aM(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.df),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eo3(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aR3(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jB()
if(a2==null)return A.bH
w=new C.en7(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.aZs(a3,a0.gbIq())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fcP,B.D(B.kR(a1,a1,a1,u,0.05,new C.en8(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.foF,B.D(B.kR(a1,a1,a1,t,0.05,new C.en9(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.f6T,B.D(B.kR(a1,a1,a1,96,10,new C.ena(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lg
if(l||n===D.kO||n===D.QV)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fio,B.D(B.kR(a1,a1,a1,s,0,new C.enb(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fpU,B.D(B.kR(a1,a1,a1,r,0,new C.enc(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Bz[j]
i.a=null
g=h.a
i.a=g
k.push(B.jG(a1,a1,a1,new B.x(h.b,a1,A.q1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.end(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.c_(A.bD,k,A.bt,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Bu[j]
f.a=null
g=e.a
f.a=g
h.push(B.jG(a1,a1,a1,new B.x(e.b,a1,A.q1,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ene(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ao,k,A.P,i,A.ao,B.c_(A.bD,h,A.bt,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.J(v,new C.enf(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ao,B.c_(A.bD,l,A.bt,6,6),A.ac,B.h4q(new C.eng(w,a2),D.ciH,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.eZ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.ay:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.J(v,new C.enh(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.c_(A.bD,m,A.bt,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bHJ,D.fkh,new C.eni(a0,a5),B.bk(A.bL,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cB(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wn:a1
if(a4)o=new B.bP(new B.az(a3?A.bF:A.aL,1,A.r,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ad(0,A.G,A.w.j(0.12),A.r9,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.EJ,a1,a1,a1)},
bMD(d){return this.aR3(d,!1,!1,null)},
c4V(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.enl(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eY1,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.D(B.v(B.a([w,A.bz,A.d0,r.bxC(D.cLN,d,B.N(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.ho(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.ex(D.eHH,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ad(0,A.G,A.bV.j(0.4),A.ej,8)],p),D.amP,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.N(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.b4t,D.b4S],v):B.a([A.c,A.ka],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ad(0,A.G,d.j(s?0.18:0.1),A.cy,14)],p),new B.a7(A.ax,A.aD,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aKs(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.ekV(this,g,d,e,f),null)},
af5(d,e){return this.chk(d,e)},
chk(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$af5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b2,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.c9(null,null,!0,null,new C.ep_(d,q),p,null,!0,!0,x.N),$async$af5)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$af5,v)},
P7(d){var w=d.bR()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.by(w)}}
C.ae2.prototype={}
C.axr.prototype={
T(){return new C.baY(null,null)}}
C.baY.prototype={
gctd(){var w,v=this.a.c,u=v.f.bR(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pn,u,1,u,v)
w.f7(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bj(u,D.blL,u,1,u,v)
w.cp(0)
v.e!==$&&B.aO()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.br3()},
Iq(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cq.av(0,new B.hL(w,v,A.cq).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.brf,B.c6(new B.h3(B.a([u,w],x.dS)),new C.cYO(this),v),v),v,v,v)}}
C.bbb.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.r,1),t=x.p
return B.av(new B.C(D.brw,B.aF(!1,A.a1,!0,w,B.p(w,B.bv(B.m(22),B.v(B.a([new B.C(D.bqI,B.v(B.a([B.p(w,D.bGv,A.f,w,w,new B.o(A.aB.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fmi,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eZa,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,D.bkP,B.A(B.a([B.D(B.bK(!1,D.fb6,w,w,!0,w,w,new C.cZ9(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bI,w,w,w,w,w,A.mT,w,A.nX,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.D(B.bK(!1,D.fgh,w,w,!0,w,w,new C.cZa(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.aB,w,w,w,w,w,A.mT,w,A.nX,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Us,new B.o(A.aA,w,u,v,D.cM6,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w),w,w,w)}}
C.J5.prototype={
T(){return new C.baX()}}
C.baX.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ad(0,A.G,m.j(0.08),A.dA,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.dc(B.aE(o,B.v7(B.dg(o,B.A(B.a([r,A.aw,new B.dm(1,A.ci,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f9:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.ba,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.oo,o,o,1/0),A.cq,A.j4,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cYJ(p,d),new C.cYK(p),new C.cYL(p),new C.cYM(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.ON.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.D(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.ne,v,v,v),A.bz,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.W(A.eo,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.af)}}
C.ZB.prototype={
T(){return new C.aCZ(D.dc,null,null)}}
C.aCZ.prototype={
gXV(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bll,null,1,null,v)
v.w!==$&&B.bM()
v.w=w
u=w}return u},
b3K(d){if(!this.a.c.ay)return
this.x=d
this.gXV().im(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.aum(D.eO2)
C.hVs()
v.Qw()},
q(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gXV().q()
v=w.z
if(v!=null)v.a9(0)
C.aum(D.eO3)
C.hVv()
w.btb()},
cw_(){B.jd()
this.m(new C.erF())
var w=this.c.I(x.q).f
w.a3D()
if($.biF)w.R(D.eKV)},
Qw(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dB(0,0,0,0,0,A.o.D(C.h2B(u,w),1,120)),new C.erv(v))},
cvF(){var w,v=this
v.m(new C.erE(v))
if(v.r)v.Qw()
else{w=v.f
if(w!=null)w.a9(0)}},
gaSV(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cpR(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.m(new C.erw(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.l2,new C.erx(w))},
auI(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.m(new C.err(u))
u.Qw()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaSV()){u.cpR()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ers(u,A.o.F(w+1,s)))
u.b3K(w)
u.Qw()}},
cfZ(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.m(new C.ert(v))
v.Qw()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eru(v,w,t))
v.b3K(w)
v.Qw()}},
cre(d){var w,v=this,u=v.e
if(u===D.cg){u=v.d
u===$&&B.c()
return new B.n6(d,new B.cz(u,x.ac))}w=v.crf(u)
u=v.d
u===$&&B.c()
return B.q2(new B.n6(d,new B.cz(u,x.ac)),w,new C.erC(),A.bb,A.bb,new C.erD(v))},
crf(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.blH
case 16:return A.kC
case 18:return A.mR
default:return A.mS}},
crd(d,e,f){var w,v,u,t=null,s=B.cI(A.cq,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cX(s,!1,e,t)
case 2:case 17:w=x.K
return B.jj(e,new B.bf(s,new B.bn(A.u4,A.J,w),w.k("bf<bH.T>")),t,!0)
case 3:w=x.K
return B.jj(e,new B.bf(s,new B.bn(A.Ra,A.J,w),w.k("bf<bH.T>")),t,!0)
case 4:case 21:w=x.K
return B.jj(e,new B.bf(s,new B.bn(A.ib,A.J,w),w.k("bf<bH.T>")),t,!0)
case 5:w=x.K
return B.jj(e,new B.bf(s,new B.bn(A.u3,A.J,w),w.k("bf<bH.T>")),t,!0)
case 6:case 16:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(0.82,1,w),w.k("bf<bH.T>")))
case 7:w=x.b
return B.ig(A.A,new B.cX(s,!1,e,t),t,new B.bf(s,new B.bn(1.18,1,w),w.k("bf<bH.T>")))
case 8:return B.c6(s,new C.ery(s),e)
case 9:return B.c6(s,new C.erz(s),e)
case 10:return B.c6(s,new C.erA(s),e)
case 11:return B.c6(s,new C.erB(s),e)
case 12:w=x.b
return new B.cX(s,!1,B.ig(A.A,e,t,new B.bf(s,new B.bn(1.03,1,w),w.k("bf<bH.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jr(B.jj(e,new B.bf(s,new B.bn(A.u4,A.J,v),v.k("bf<bH.T>")),t,!0),A.q,new C.bpE(w,t))
case 15:w=x.K
return B.jj(e,new B.bf(s,new B.bn(A.Ra,A.J,w),w.k("bf<bH.T>")),t,!0)
case 19:w=B.dl()
w.mx((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jv(v,u,v,1)
return B.fr(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eA(A.A,(1-s.gp(0))*0.2,new B.cX(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jr(new C.an_(B.c6(n.gXV(),new C.erG(n,v,w),m),m),A.q,m)}else{t=B.rh(new C.I3(w,!0,!1,m))
l=B.b0(w.e)
u=n.cre(B.ei(B.jr(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h2B(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.o1,m,m,m),A.bp,D.bIL],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fG,m,m,m)
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
l.push(B.bY(0,new C.MK(new C.E_(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nT?0.5625:1.7777777777777777
l.push(B.av(new B.fF(r,B.jr(B.ua(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.biF){r=B.H5(A.kL,new C.erH(d),B.np(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ab,B.H5(B.W(n.r?Ak.xO:A.iO,m,m,m,m,m),n.gcvE(),B.np(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hm,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fG,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aE(A.c5,B.p(A.kW,$.biF?A.bH:s,A.f,m,m,m,m,64,m,m,D.bms,m,m,150),A.y,!1,m,n.gcvZ(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cb(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.q,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.erI(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Je.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.C(E.agz,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYs,w,w,w,w,w,w,w,w)}}
C.bpE.prototype={
iR(d){return new B.aa(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jy(d){return d.b!==this.b}}
C.bfN.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aVf
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vr,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hV,r,64,r,r,r,r,64)
return B.aE(r,new B.a6(78,r,B.v(B.a([w,A.ao,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bfM.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dez.h(0,p)
if(o==null)o=D.d1T
p=p==="none"
w=p?q:new B.a7(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.akY:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.en,q,q,52)
return B.aE(q,new B.a6(66,q,B.v(B.a([w,A.ao,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aIE.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.aKG.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.bvl.prototype={}
C.aKH.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.b_z.prototype={}
C.V5.prototype={
T(){return new C.aCX()},
be6(d){return this.e.$1(d)}}
C.aCX.prototype={
gb25(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9i(){var w,v
if(this.d==="all")return B.bl(this.a.d,!0,x.I)
w=this.gb25()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaMn(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb25()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb3j(){return A.d.cI(this.ga9i(),0,new C.erb())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Q7()},
Q7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b09(s.c,s.f),$async$Q7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.er7(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Q7,v)},
Is(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Is=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9i()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fyq(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oV(o,q.c,q.f),$async$Is)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ej(new C.era(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).ce(q),$async$Is)
case 4:q=t.a
w=5
return B.b(B.oU(q.c,q.f),$async$Is)
case 5:w=6
return B.b(t.Q7(),$async$Is)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
Qu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hu(o,D.dRE,!0,"NgmySlidesTransferScan",x.N),$async$Qu)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.er8(t))
w=4
return B.b(C.agb(s),$async$Qu)
case 4:r=e
t.m(new C.er9(t))
o=J.a8(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eJO)
w=1
break}w=5
return B.b(t.a.be6(r),$async$Qu)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).N(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qu,v)},
Ir(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ir=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9i()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oV(s,r.c,r.f),$async$Ir)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fyF(null,A.d.gL(n),s,t.a.f)}else q=C.fyF(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aJ(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.FQ(q,"ngmy_slides_"+p,!1),$async$Ir)
case 4:o=e
s=t.a
w=5
return B.b(B.oU(s.c,s.f),$async$Ir)
case 5:w=6
return B.b(t.Q7(),$async$Ir)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ir,v)},
a1I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a1I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.erc(t))
w=3
return B.b(C.bAE(),$async$a1I)
case 3:s=e
t.m(new C.erd(t))
if(s==null||J.ck(s)){w=1
break}w=4
return B.b(t.a.be6(s),$async$a1I)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).N(null)
r=t.c.I(x.q).f
q=J.a8(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a1I,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.N(d).ax.a===A.H,l=m?A.da:A.bN,k=o.ga9i().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bR(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.W(A.cx,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.erg(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.z2],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ad(0,A.G,A.bj.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.W(A.pu,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bJg,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.D(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bvn],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.ho(B.aE(A.c5,D.eHJ,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcaM(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a02,A.n),n,n,n,n,E.XT,n,n,1/0),A.e0,o.avU(m,"What to transfer"),A.ac,B.A(B.a([B.D(o.aV8(A.pB,m,new C.erh(o),o.d==="one","Pick a single deck","One presentation"),1),A.aw,B.D(o.aV8(D.bz2,m,new C.eri(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.avU(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aA:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.ay:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bU,n,n,n))}else A.d.v(v,new B.J(u,new C.erj(o,m),B.T(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.mr)
w.push(o.avU(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.D(o.aoE(A.aW,k,!0,A.jc,m,o.r,o.gc4Z(),"Scan on another device","Show QR"),1),A.aw,B.D(o.aKt(A.jH,!0,A.iP,m,o.gcmF(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.D(o.bw5(A.aU,k,A.hx,m,o.r,o.gc4W(),"Download .json","Backup file"),1),A.aw,B.D(o.aKt(A.aJ,!0,Av.xZ,m,o.gcyk(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.r,1)
s=B.W(A.l8,A.bj.j(0.9),n,n,n,18)
r=o.gaMn()
q=o.gb3j()
p=o.gb3j()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.A(B.a([s,A.aw,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a4,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.v(B.a([new B.C(Ag.LM,i,n),B.D(B.cB(w,n,D.bpR,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,T.UL,A.f,A.dz,n,n,n,n,n,n,n,n,n,n))
return B.cb(n,l,new B.an(A.W,n,A.aa,A.q,j,n),n,!1,!1,n,n)},
aef(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aef=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i0J(s,t.d,t.e),$async$aef)
case 2:return B.h(null,v)}})
return B.i($async$aef,v)},
avU(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.ay:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aV8(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aA:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ad(0,A.G,A.bj.j(0.2),A.cy,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.W(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cj,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.ex(new B.C(A.bB,B.v(B.a([t,A.S,u,A.bz,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af)},
bGA(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aA:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bJr,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.ay:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qI
if(p)r=A.bj
else r=e?A.b5:A.dm
return new B.C(A.cG,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.W(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.er6(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q)},
aoE(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aA:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qG,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.alv,A.f,s,s,D.aYe,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.ex(new B.C(E.Xy,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bz,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.ay:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.af),r)},
aKt(d,e,f,g,h,i,j){return this.aoE(d,e,!1,f,g,!1,h,i,j)},
bw5(d,e,f,g,h,i,j,k){return this.aoE(d,e,!1,f,g,h,i,j,k)}}
C.V6.prototype={
T(){return new C.biE()}}
C.biE.prototype={
a_(){this.a1()
this.ad5()},
ad5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ad5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fyF(null,A.d.gL(m),k,r.a.f):C.fyF(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kp(A.d.gL(n).w))C.fyq(A.d.gL(r.a.d),D.d_X)
n=r.a
m=n.c
n=C.hYM(n.d)
w=7
return B.b(C.fyE(p,C.hYR(r.a.d),n,m,q),$async$ad5)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.erk(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.erl(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ad5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.N(d).ax.a===A.H,h=i?A.da:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.erm())
v=B.aH(j,j,j,j,B.W(A.eB,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ern(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.z2],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.du,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a02,A.n),j,j,j,j,E.XT,j,j,1/0)
q=B.m(24)
s=B.I(A.aW.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6m,A.L,j,j))
else if(k.d==null)r.push(D.e0X)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ad(0,A.G,A.aE.j(0.35),A.cy,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fbz,A.ao,B.aE(j,B.p(j,B.A(B.a([D.bKZ,A.aw,B.d(m,j,j,j,j,j,j,D.eZy,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bPr,A.n),j,j,j,j,A0.agl,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ero(k,d),j,j,j,j,j,j,!1,A.a8),A.P,D.ffP,A.az],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pz(j,j,!1,l,j,!0,!0,j,!1,D.bhw),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cj,j,j,j))
A.d.v(r,p)}r.push(A.az)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hn,A.L,j,j))
return B.cb(j,h,B.bm(!0,B.v(B.a([new B.C(Ag.LM,v,j),B.D(B.cd(B.v(B.a([t,A.aO,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bRj,A.n),j,j,j,j,A.tm,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.y,j,E.agE,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aCU.prototype={
T(){return new C.aCV(new B.ar(A.as,$.aw()),B.kg(!0,null,!0,!0,null,null,!1))}}
C.aCV.prototype={
a_(){var w=this
w.a1()
w.e.aM(0,new C.ekP(w))
$.aT.x1$.push(new C.ekQ(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aXE(){var w,v=this.c
v.toString
w=C.yc(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ad(0,A.G,A.bj.j(0.28),A.u2,36),D.a9Q],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bGy,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.f8S,A.ao,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a4,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.aYF,k,k,k,k,A.xi,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.aw)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge5()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aA:A.M
o=new B.aV(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.az(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ad(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bE(1,A.bi,B.dg(A.A,new B.x(p,k,D.eTh,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bP(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hV,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Id)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bY(0,B.dc(B.aL(k,A.T,!0,k,!0,A.q,k,B.aM(),w,k,k,k,k,k,2,D.bNH,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u0(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.AT(5,k),new C.bsS()],x.aS),k,k,A.aNc,k,5,k,1,k,k,!1,"\u2022",k,new C.ekL(l),k,new C.ekM(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.lQ,k,k,k,k),0),0,0,0)],a1)
d=C.yc(w.a.a.toUpperCase())==null?k:l.gc5_()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cU(Ad.Jz,B.p(k,B.bv(e,B.v(B.a([a0,new B.C(D.bql,B.v(B.a([new B.an(A.W,k,A.aa,A.q,g,k),A.S,D.f7i,A.bv,new B.a6(1/0,50,B.bJ(D.fn8,d,B.bk(A.bj,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.ao,B.bK(!1,A.nf,k,k,!0,k,k,new C.ekN(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.af),k),k,k,k)}}
C.bsS.prototype={
oh(d,e){var w=e.a.toUpperCase()
return e.cEm(B.h8(A.bu,w.length),w)}}
C.apS.prototype={
T(){return new C.aCY(B.yM(A.L3,A.nm,A.tL))}}
C.aCY.prototype={
q(){this.d.q()
this.a2()},
aXD(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iK(w,d)},
a9c(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9c=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fHb(s),$async$a9c)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aXD("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9c,v)},
c4Y(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hYP(w[u])
if(t!=null){this.aXD(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vo,s,s,s,t.gbKD(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aH(s,s,s,s,B.W(q?A.qM:Al.MI,s,s,s,s,s),s,s,s,new C.erq(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fom,s,s,s,1,s,!0)
r=B.yL(t.d,A.bQ,t.gc4X())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.r,3),w,B.a([new B.ad(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cb(p,A.w,new B.an(A.W,s,A.b_,A.q,B.a([r,w,B.ao(32,B.p(s,D.fcC,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.j7,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bt3.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.r,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bEJ,A.f,w,w,D.aYo,w,56,w,w,w,w,w,56),A.aO,D.fo2,A.ao,new B.k9(this.c,new C.f1C(),w,w,x.cI),A.aO,new B.k9(this.d,new C.f1D(),w,w,x.cl),A.ac,D.fo_],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.Jz,new B.o(A.aA,w,u,v,w,w,A.n),w,w,w,K.Y_,D.bqZ,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)}}
C.a6O.prototype={
T(){return new C.bin(A.bx)},
gdc(){return this.c}}
C.bin.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Z4()
w.d=B.dC(A.hf,new C.e9k(w))},
q(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
Z4(){return this.cj4()},
cj4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Z4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.e9i(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ccd(p.c),$async$Z4)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.e9j(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Z4,v)},
bMu(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aB:A.bV
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.W(A.Fk,v,r,r,r,20),A.aw,B.D(B.d("Marriage document session \xb7 "+s.bMu(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.afq,A.iN,r,r,1/0)}}
C.a7G.prototype={
n_(){var w,v,u,t=this
t.wQ()
w=t.cx
v=t.c
w.bnI(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pG(B.E(["/S",D.e4C,"/URI",new B.re(B.VE(w.as),A.u5,!0)],x.N,u),u))}}
C.a7H.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b1c.prototype={
bv9(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e2V],x.di)
this.w!==$&&B.aO()
this.w=w},
gcHC(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jI(w,new C.cep(),B.a3(w).k("jI<cl.E,G>")).fD(0,new C.ceq())},
aBd(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.ta(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.j7(d.a,d.b))
s.n(0,"/Border",B.ta(D.bTk))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcHC()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pG(w,x.Y))}}
C.cer.prototype={}
C.a1V.prototype={}
C.ah1.prototype={}
C.aPG.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.l4(d)
q.Lk(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bdt(w)
u=x.N
t=x.Y
s=new C.cer(q.d.a,"/Link",w,p,p,p,p,p,B.V(u,t))
s.bv9(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pG(B.E(["/Type",D.e4A],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a7G(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.avk.prototype={}
C.aR9.prototype={
fV(d){var w,v,u,t,s=this
s.l4(d)
w=s.b
if(w!=null){v=B.dl()
u=s.a
v.e2(u.a,u.b,0,1)
u=d.b
u.hX()
t=s.a
t.toString
u.Ku(t)
u.RK(0)
u.oD(0,v)
w.fV(d)
u.n2(0)}}}
var z=a.updateTypes(["ay<~>()","~(ly)","R(hY)","~()","R(eG)","R(o8)","R(ly)","~(hY)","R(eG,eG)","Je(Y)","R(nz)","R(l4)","ay<R>()","G(G,hY)","a4<n,@>(hY)","ak<z4>()","n(nz)","R(a74)","n(ly)","n(vE)","R(E8)","G(hY,hY)","n(eG)","r(eG)","cK(eG)","r(hv)","~(hv)","eG(us,O,O,O,O,G{fx:n,key:n,rotation:O})","eG(n,O,G)","G(o8,o8)","R(z4)","R(n,ak<z4>)","a4<n,@>(o8)","nz()","XI(Y)","eG(n,O,O,O,O,O{align:pM,anim:hv,bullets:R,color:G?,delay:G,fx:n,key:n,style:H1,weight:q7})","a_V(Y)","eG(n,O,O,O,O{anim:hv,delay:G,fx:n,key:n})","ay<~>(o8)","R(mj)","XG(Y)","a_t(Y)","a_s(Y)","OD(Y)","YR(Y)","eG(us,O,O,O,O,G,n,n{anim:hv,delay:G,rotation:O,stroke:G,strokeWidth:O})","eG(n,O,O,O,O,O,n,n,G)","eG(O,O,n,G{size:O})","r(r2,O,O)","l4()","o8(a4<@,@>)","~(ui)","E8()","fd(eG)","r(iU)","Yp(Y)","~(E_)","YK(Y)","G(eG,eG)","eG(eG)","a4<n,@>(eG)","eG(a4<@,@>)","ly(ly)","a4<n,@>(ly)","ly(a4<@,@>)","R(jz)","jz()","n(hY)","~(ak<o8>)","S(ak<hY>)","S(hY)","ak<hY>(n?)","abB(Y,G)","~(R(eG,eG))","ace(Y)","adT(Y,G)","w(ly,R)","UR(Y)","ach(Y)","UU(Y)","~(mn)","hY(hY)","O(eG)","ZZ(Y)","ZB(Y)","hY()","ak<Eu>()","ay<~>(ak<hY>)","r(bu<G,hY>)","C(jz)","C(E8)","ay<~>(hv,~())","r(ak<hv>,hv?,~(hv),w)","R(lV)","ak<ji<mn>>(Y)","ji<mn>(mn)","hY(a4<@,@>)","V5(Y)","eG(n,O,O,O,O,O,G{align:pM,style:H1,weight:q7})","V6(Y)","r(hY)","~(lP)","I3(Y,ly,r?)","G(a7H)","ay<ak<a4<n,@>>?>()","n(n)","ay<z2>({paper:n?,photo:dD?,request:n,template!l7})","ay<a6X>({doc!z2,history:ak<+(n,n)>,instruction!n,photo:dD?,template!l7})","acb(Y)"])
C.cC7.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:77}
C.cC8.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cC9.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gaiN(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.md(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:74}
C.cCa.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bMB.prototype={
$1(d){return J.eW(A.dF.gaP(d),d.byteOffset,d.byteLength)},
$S:1666}
C.flw.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iF(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iF(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iF(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iF(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bWZ.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:26}
C.bX_.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.bX1.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fBf.prototype={
$1(d){return new C.a_V(this.a,this.b,C.hZH(),null)},
$S:z+36}
C.f04.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f08.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f09.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f0a.prototype={
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
C.f05.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f06.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f07.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f0_.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hz,w,w,w)
return B.eh(B.a([B.bK(!1,D.fb2,w,w,!0,w,w,new C.f_Y(d),w,w),B.bK(!1,D.faa,w,w,!0,w,w,new C.f_Z(d),w,w)],x.p),w,w,D.Wy,v,w,w,w,w,D.foE,w)},
$S:19}
C.f_Y.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.f_Z.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.f00.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f01.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f0e.prototype={
$0(){var w=this.a
return w.m(new C.f0d(w,this.b))},
$S:0}
C.f0d.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f03.prototype={
$0(){var w=this.a
return w.m(new C.f02(w,this.b,this.c))},
$S:0}
C.f02.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.f0b.prototype={
$0(){return this.a.a0b(this.b)},
$S:0}
C.f0c.prototype={
$0(){return this.a.Oo(0,this.b)},
$S:0}
C.f0h.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.f0i.prototype={
$0(){var w=this.a
return w.m(new C.f0g(w,this.b))},
$S:0}
C.f0g.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.f0f(),B.T(w).k("J<1,n>")))}},
$S:0}
C.f0f.prototype={
$1(d){return d.a},
$S:z+67}
C.f7g.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h_R(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.o8(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.f7h.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fnZ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcv()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fnX.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fnY.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fAK.prototype={
$1(d){return d.ad()},
$S:z+32}
C.flc.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fBB.prototype={
$1(d){return new C.XI(this.a,null)},
$S:z+34}
C.cDt.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cDv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cDy.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDz.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cDx())},
$S:11}
C.cDx.prototype={
$0(){},
$S:0}
C.cDA.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a0T(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bc(s,new C.cDw(r))
if(p<0)q.cn(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.agk(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:297}
C.cDw.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDB.prototype={
$1(d){},
$S:31}
C.cDu.prototype={
$1(d){return new C.XG(this.b,this.a.gcsz(),null)},
$S:z+40}
C.cDC.prototype={
$1(d){return D.fE6},
$S:z+43}
C.cDp.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Wd,A.r,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bqL,B.v(B.a([B.p(w,D.bDN,A.f,w,w,new B.o(A.aB.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.f9f,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eYA,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e0,new B.C(A.pq,B.A(B.a([B.D(B.dT(D.ffR,new C.cDn(d),B.de(w,w,w,w,w,w,w,w,w,E.mL,w,w,A.cf,w,new B.b7(B.m(14),A.Y),D.aVF,w,w,w,w)),1),A.aw,B.D(B.bJ(D.flu,new C.cDo(d),B.bk(A.bL,w,w,w,w,w,A.cf,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wq,new B.o(D.abo,w,u,v,D.cQo,w,A.n),w,w,w,K.Y_,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af),w,w,w)},
$S:1668}
C.cDn.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cDo.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cDq.prototype={
$0(){return J.nh(this.a.d,new C.cDm(this.b))},
$S:0}
C.cDm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cDl.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Wd,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bIE,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.amK,A.n),t,44,t,t,t,t,t,44),A.bf,B.D(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aOQ,t,t,t),A.bz,D.flr],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.az],q)
for(w=0;w<2;++w){v={}
u=D.d9S[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awd(u[1],u[2],u[3],new C.cDj(v,d),!1,t))}q.push(A.ao)
q.push(D.bkS)
q.push(A.ao)
q.push(new C.awd(A.e4,"Delete book","Remove it from this device",new C.cDk(d),!0,t))
return B.bm(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.abo,t,r,s,t,t,A.n),t,t,t,A.th,E.XE,t,t,t),!0,!1,A.ag,!0,!0)},
$S:29}
C.cDj.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.cDk.prototype={
$0(){B.a5(this.a,!1).N("delete")
return null},
$S:0}
C.cDs.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ad(0,A.G,A.w.j(0.45),A.aEO,12)],x.V)
return B.dU(B.eA(A.A,e,B.p(w,B.bv(B.m(4),new B.a6(62,95.81818181818181,B.f1(A.A,F.amR(d),A.f,A.dt),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cDr.prototype={
$0(){return this.a.c_P()},
$S:0}
C.cDi.prototype={
$0(){return this.a.aWh(0,this.b)},
$S:0}
C.cDh.prototype={
$0(){return this.a.CK(this.b)},
$S:0}
C.cDg.prototype={
$0(){return this.a.CK(this.b)},
$S:0}
C.cDD.prototype={
$2(d,e){var w=this.a
return w.bzE(J.q(w.d,e))},
$S:39}
C.cCK.prototype={
$0(){var w=this.a
if(w.c!=null)w.An()},
$S:0}
C.cCJ.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aZ5("Page "+(v.length+1),"",""))},
$S:0}
C.cCM.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cCU.prototype={
$0(){},
$S:0}
C.cCV.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:8}
C.cCN.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcu().aI(this.c)},
$S:0}
C.cCL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cCP.prototype={
$0(){return this.a.PF(this.b)},
$S:0}
C.cCQ.prototype={
$0(){return this.a.PF(this.b)},
$S:0}
C.cCR.prototype={
$0(){var w=this.a
w.m(new C.cCO(this.b))
w.Dz()},
$S:0}
C.cCO.prototype={
$0(){return this.a.c=""},
$S:0}
C.cCT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cCS(w,d))
w.Dz()},
$S:z+51}
C.cCS.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cD_.prototype={
$2(d,e){if(d)this.a.An()},
$S:118}
C.cCW.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.An(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.eMj)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cCX.prototype={
$0(){return this.a.aVf(this.b,-1)},
$S:0}
C.cCY.prototype={
$0(){return this.a.aVf(this.b,1)},
$S:0}
C.cCZ.prototype={
$0(){return this.a.c13(0,this.b)},
$S:0}
C.fsw.prototype={
$1(d){return C.h9L()},
$S:44}
C.fsx.prototype={
$1(d){return null},
$S:31}
C.fbF.prototype={
$1(d){return null},
$S:31}
C.ftv.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:310}
C.ftu.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:239}
C.ftB.prototype={
$1(d){var w=this.a
return C.fTp(d)===w||C.hef(d)===w},
$S:z+4}
C.faI.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:76}
C.c6y.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fsv.prototype={
$1(d){return C.fve(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fnk.prototype={
$1(d){var w=null
return B.bm(!0,new B.C(E.xh,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fgq,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FW,D.faL,new C.fni(d),B.bk(A.bV,w,w,w,A.w,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.vn,D.fhE,new C.fnj(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wo,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fni.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnj.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fnl.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,D.f7a,w,w,!0,w,w,new C.fng(d),w,w),B.bJ(D.fnG,new C.fnh(d),w)],x.p),w,w,w,D.fpx,w,w,w,w,D.f74,w)},
$S:19}
C.fng.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fnh.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.e48.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e46.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e47.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e49.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e4a.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ftA.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:76}
C.ftw.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dk(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fty.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.eZL,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:175}
C.ftz.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hT,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hT,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.ba,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.ftx.prototype={
$2$female$size(d,e){var w=null,v=d?D.ad6:this.a,u=B.I(A.hT,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.q,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.abD,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fF2.prototype={
$1(d){return new C.acb(this.a,this.b,null)},
$S:z+108}
C.dUR.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bhY:A.Kw,q=B.I(D.j_.j(0.25),A.r,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bV.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.alu,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ad(0,A.G,D.j_.j(0.35),A.ej,10)],x.V),D.bRW,A.n),t,t,t,t,A.Ln,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.XP,B.v(B.a([p,A.az,B.A(B.a([o,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j_,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eZ2,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ib(!0,t,e,A.y,D.aMf,new C.dUQ(w,this.c),v,D.agg,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.lV,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:109}
C.dUQ.prototype={
$2(d,e){var w=this.a.d[e]
return new C.abB(w,new C.dUP(this.b,w),null)},
$S:z+72}
C.dUP.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fno.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fnp.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xh,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fjF,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FW,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fnm(d),B.bk(D.j_,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nM,D.T2,new C.fnn(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wo,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fnm.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnn.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fns.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fnt.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xh,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.f88,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FW,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fnq(d),B.bk(D.j_,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nM,D.T2,new C.fnr(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wo,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fnq.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnr.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fnw.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fnx.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xh,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.feg,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FW,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fnu(d),B.bk(D.j_,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nM,D.T2,new C.fnv(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wo,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fnu.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnv.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fGv.prototype={
$1(d){return D.fHT},
$S:z+74}
C.e9n.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.ba9:A.Kw,s=B.I(A.av.j(0.25),A.r,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.av.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bKV,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ad(0,A.G,A.bV.j(0.35),A.ej,10)],x.V),D.amP,A.n),v,v,v,v,A.Ln,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.XP,B.v(B.a([r,A.az,B.A(B.a([q,A.bf,B.D(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Kt,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bz,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eWz,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ib(!0,v,e,A.y,D.aMf,new C.e9m(this.b),19,D.agg,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.lV,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:109}
C.e9m.prototype={
$2(d,e){var w=D.PQ[e]
return new C.adT(w,new C.e9l(this.a,w),null)},
$S:z+75}
C.e9l.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fvi.prototype={
$0(){return B.fSq(C.hNg(this.a))},
$S:298}
C.fvh.prototype={
$0(){var w=C.fTH(this.a)
return"data:image/png;base64,"+A.cS.gcu().aI(w)},
$S:23}
C.f8O.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j8(d,e),new B.j8(w,e+v),new B.j8(d+f*14,e),new B.j8(w,e-v)],x.J)
B.a0Q(this.a,C.fx(4291404327),v)},
$S:664}
C.fGG.prototype={
$1(d){return new C.UR(this.a,null)},
$S:z+77}
C.ecF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ecE())},
$S:27}
C.ecE.prototype={
$0(){},
$S:0}
C.ecG.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ecD(w,d))},
$S:1673}
C.ecD.prototype={
$0(){return this.a.x=J.fa(A.dF.gaP(this.b))},
$S:0}
C.ecH.prototype={
$1(d){},
$S:31}
C.ech.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ecd.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eco.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ecp.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.edr)},
$S:0}
C.ecq.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecj.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bM(0,A.c3)},
$S:0}
C.eck.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ecl.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ecm.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecn.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.lW(v,A.dX,A.i5)}},
$S:8}
C.eci.prototype={
$0(){var w=this.a,v=w.z,u=C.fvW(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cDu(C.fvW(t))},
$S:0}
C.ecf.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ecg.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ecw.prototype={
$0(){return B.a5(this.a,!1).m2()},
$S:0}
C.ecx.prototype={
$0(){var w=this.a
return w.m(new C.ecv(w))},
$S:0}
C.ecv.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ecy.prototype={
$0(){var w=this.a
return w.m(new C.ecu(w,this.b))},
$S:0}
C.ecu.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ecz.prototype={
$1(d){var w=this.a
return w.m(new C.ect(w))},
$S:9}
C.ect.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ecA.prototype={
$1(d){var w=this.a
return w.m(new C.ecs(w))},
$S:9}
C.ecs.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ecB.prototype={
$0(){var w=this.a
return w.m(new C.ecr(w,this.b))},
$S:0}
C.ecr.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ecC.prototype={
$1(d){return this.a.YR()},
$S:2}
C.ece.prototype={
$0(){return this.a.c4f(this.b)},
$S:0}
C.cad.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:394}
C.cab.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.cac.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuT.prototype={
biv(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bMA(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cA8($.tP().kc(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mt(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.biv(d,e)},
$S:1674}
C.fta.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftc.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dn(this.b,w,w+d)," ")
w=B.aJ(w," \n\n ","\n\n")
w=B.aJ(w," \n\n","\n\n")
return B.aJ(w,"\n\n ","\n\n")},
$S:76}
C.ftb.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.ih(t,t,t,t,B.dq(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.q_,A.ch,t,A.er,A.cd)
v=this.a
w.Bu(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:34}
C.f8p.prototype={
$1(d){var w=A.a.fv(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.f8q(),B.T(w).k("a2<1>")).gM(0)},
$S:254}
C.f8q.prototype={
$1(d){return d.length!==0},
$S:3}
C.f8n.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.f8o.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.cae.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gayE()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fTo(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fQm(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gccm(),"\n\n")
d=B.ih(a6,a6,a6,a6,B.dq(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.acV(k,q,1.28),j),A.q_,A.ch,a6,A.er,A.cd)
d.Bu(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fTo(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fQm(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.acV(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bE(1,A.bi,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.q_,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.ayD(s,j))
i.push(new B.a6(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:457}
C.caf.prototype={
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
n=o.gayE()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fTo(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fQm(g.length===0?B.a([a6],n):g,l))break}a1=o.acV(i,h,1.28)
a2=new C.cag(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ic,new B.a6(v,a5,a4.f,a5),A.Ic,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bt0,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bE(1,A.bi,new B.x(l[2+a3],a5,a1,a5,A.q_,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.ayD(r,g))
f.push(new B.a6(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a6(a5,q,v,a5),A.ac,B.D(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:150}
C.cag.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.q_,w,w),w)},
$S:1675}
C.fGJ.prototype={
$1(d){return new C.UU(this.a,this.b,null)},
$S:z+79}
C.edQ.prototype={
$1(d){return d.ma()},
$S:1676}
C.edR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.edP(w,d))},
$S:1677}
C.edP.prototype={
$0(){var w=this.b
return this.a.d=w.gfl(w)},
$S:0}
C.edD.prototype={
$0(){return this.a.y=!0},
$S:0}
C.edE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.edK.prototype={
$0(){return B.a5(this.a,!1).eH()},
$S:0}
C.edL.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.r,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.baa(u,v.gavN(),w),A.f_),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edI(v),new C.edJ(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.edI.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:261}
C.edJ.prototype={
$1(d){var w=this.a
w.m(new C.edF(w,d,this.b,this.c))},
$S:212}
C.edF.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gavN()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.edM.prototype={
$1(d){var w=this.a
return w.m(new C.edH(w,this.b))},
$S:9}
C.edH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edN.prototype={
$1(d){var w=this.a
return w.m(new C.edG(w,d))},
$S:6}
C.edG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.edO.prototype={
$0(){return B.a5(this.b,!1).N(this.a.a.c)},
$S:0}
C.fGZ.prototype={
$1(d){return D.fKG},
$S:z+83}
C.eN4.prototype={
$1(d){return this.a.Xz()},
$S:8}
C.eLX.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcu().aI(v)},
$S:0}
C.eMk.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eMu.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eLG.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eLH.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eLE.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eLF.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eMd.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eMe(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jr(B.rh(p>0.2?C.fL8(q,B.a49(p,p,A.x)):q),A.q,u)],x.p)
w=s.bi
if(w>0.02){v=B.a49(12,12,A.x)
p.push(B.jr(B.dc(B.rh(C.fL8(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b3
if(r!=null&&s.b0>0)p.push(B.ei(u,B.b0(r).j(s.b0),!0))
r=s.ba
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.ba
w.toString
p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(D.aTY,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(D.aTJ,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aN
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.a7(A.b1,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cP4,u),A.n),A.bd))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.bZ(u,new B.o(u,u,u,u,u,new B.a7(A.b1,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.cZq,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ei(u,A.w.j(r),!0))
r=s.b5
if(r>0)p.push(B.bZ(u,new B.o(u,u,u,u,u,new B.bR(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cWG,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bdH(s,u),A.au))
return new B.an(A.W,u,A.b_,A.q,p,u)},
$S:62}
C.eMe.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cn,A.bQ,!0,q,!1,q,q),o=r.a,n=o.aUS(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aR
u=v-1
t=o.bS
s=o.cT?-1:1
return B.dU(B.e9(A.A,B.eA(A.A,l,B.fr(A.A,new B.CT(new B.ys(q,q,n,A.zR),p,q),q,B.vr(s,o.cW?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eMq.prototype={
$0(){return this.a.m(new C.eMp(this.b,this.c))},
$S:0}
C.eMp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eMr.prototype={
$1(d){return this.a.m(new C.eMo(this.b,d))},
$S:6}
C.eMo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eMt.prototype={
$0(){return this.a.m(new C.eMs(this.b,this.c))},
$S:0}
C.eMs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eLw.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eLx.prototype={
$1(d){var w=this.a
return w.m(w.gctZ())},
$S:2}
C.eLy.prototype={
$1(d){return this.a.m(new C.eLv())},
$S:2}
C.eLv.prototype={
$0(){},
$S:0}
C.eLz.prototype={
$0(){var w=this.a
return w.m(new C.eLu(w,this.b))},
$S:0}
C.eLu.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eLB.prototype={
$2(d,e){return A.aw},
$S:36}
C.eLA.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.r,t?2.5:1)
r=B.dg(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a7(A.b1,A.b6,A.x,r,w,w),A.n),A.hV,w,94,w,w,w,w,70)
return B.aE(w,new B.a6(70,w,B.v(B.a([r,A.fV,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.ay,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eLt(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:73}
C.eLt.prototype={
$0(){var w=this.a
return w.m(new C.eLq(w,this.b))},
$S:0}
C.eLq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eLC.prototype={
$1(d){var w=this.a
return w.m(new C.eLs(w,d))},
$S:9}
C.eLs.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eLD.prototype={
$1(d){var w=this.a
return w.m(new C.eLr(w,d))},
$S:9}
C.eLr.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eMU.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:34}
C.eN0.prototype={
$1(d){var w=this.a
return w.m(new C.eN1(w,d))},
$S:28}
C.eN1.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eN2.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eMV.prototype={
$0(){var w=this.a
return w.m(new C.eMT(w,this.b))},
$S:0}
C.eMT.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eMW.prototype={
$0(){var w=this.a
return w.m(new C.eMS(w,this.b))},
$S:0}
C.eMS.prototype={
$0(){var w,v=this.b.length,u=J.e1(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eMX.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eMR(v,w.b,w.c,w.d))},
$S:0}
C.eMR.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eMY.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grf(v))},
$S:0}
C.eMZ.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eN_.prototype={
$0(){var w=this.a
return w.m(new C.eMQ(w))},
$S:0}
C.eMQ.prototype={
$0(){var w=this.a.db
return A.d.hb(w,0,w.length,0)},
$S:0}
C.eMD.prototype={
$1(d){return d.a===this.a.dy},
$S:231}
C.eME.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.auQ[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aV(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.avR(new B.nX(new B.bp(n,n,n,n),A.aq,new B.kG(new B.o(j,j,j,j,j,new B.a7(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aYr(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eMC(r,v),2,i))}return B.c_(A.bD,h,A.bt,7,7)},
$S:161}
C.eMC.prototype={
$0(){var w=this.b
return w.m(new C.eMx(this.a,w))},
$S:0}
C.eMx.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eMF.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:235}
C.eMI.prototype={
$0(){var w=this.a
return w.m(new C.eMB(w))},
$S:0}
C.eMB.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eMJ.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eMK.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eML.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eMM.prototype={
$0(){var w=this.a
return w.m(new C.eMA(w))},
$S:0}
C.eMA.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eMN.prototype={
$0(){var w=this.a
return w.m(new C.eMz(w))},
$S:0}
C.eMz.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eMO.prototype={
$0(){var w=this.b
return w.m(new C.eMy(this.a,w))},
$S:0}
C.eMy.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eMP.prototype={
$1(d){return this.a.fx=d},
$S:235}
C.eMG.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eMH.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eMh.prototype={
$0(){var w=this.a
return w.m(new C.eMg(w))},
$S:0}
C.eMg.prototype={
$0(){var w=this.a
w.p4=null
w.b0O()},
$S:0}
C.eMi.prototype={
$0(){var w=this.a
return w.m(new C.eMf(w,this.b))},
$S:0}
C.eMf.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eMj.prototype={
$0(){var w=this.a
return w.m(w.gckH())},
$S:0}
C.eM9.prototype={
$0(){var w=this.a
return w.m(new C.eM8(w))},
$S:0}
C.eM8.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eMa.prototype={
$0(){var w=this.a
return w.m(new C.eM7(w))},
$S:0}
C.eM7.prototype={
$0(){var w=this.a
w.aF=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eMb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cX2[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aV(9,9)
m.push(v.avR(new B.nX(new B.bp(p,p,p,p),A.aq,new B.a6(1/0,1/0,new B.CT(new B.ys(o,o,v.aUS(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.zR),B.fL(u,A.A,140,o,A.cn,A.bQ,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eM6(v,s),3,n))}return B.c_(A.bD,m,A.bt,10,8)},
$S:161}
C.eM6.prototype={
$0(){var w=this.a
return w.m(new C.eM5(w,this.b))},
$S:0}
C.eM5.prototype={
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
C.eLO.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eLP.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eLQ.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eLR.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eLS.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eLT.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.eLU.prototype={
$1(d){return this.a.b5=d},
$S:6}
C.eLV.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eLW.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eL9.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eLa.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eLb.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eLc.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eLd.prototype={
$0(){var w=this.a
return w.m(new C.eL8(w))},
$S:0}
C.eL8.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eLe.prototype={
$1(d){return this.a.b3=d},
$S:235}
C.eLf.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eLI.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eLJ.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eLK.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eLL.prototype={
$1(d){return this.a.ba=d},
$S:235}
C.eLM.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eLj.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eLk.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eLl.prototype={
$1(d){return this.a.bS=d},
$S:6}
C.eLm.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.eLn.prototype={
$0(){var w=this.a
return w.m(new C.eLi(w))},
$S:0}
C.eLi.prototype={
$0(){var w=this.a
return w.c6=A.k.F(w.c6+90+180,360)-180},
$S:0}
C.eLo.prototype={
$0(){var w=this.a
return w.m(new C.eLh(w))},
$S:0}
C.eLh.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eLp.prototype={
$0(){var w=this.a
return w.m(new C.eLg(w))},
$S:0}
C.eLg.prototype={
$0(){var w=this.a
return w.cW=!w.cW},
$S:0}
C.eMc.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i1m(v,w.p4)},
$S:0}
C.eM4.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bif:B.fL(v,A.A,w,w,A.cn,A.bQ,!1,w,!1,w,w)
return C.fti(d.length===0?"rounded":d,u,e)},
$S:130}
C.eM0.prototype={
$0(){var w=this.a
return w.m(new C.eM_(w))},
$S:0}
C.eM_.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eM1.prototype={
$0(){var w=this.b
return w.m(new C.eLZ(this.a,w))},
$S:0}
C.eLZ.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eM2.prototype={
$0(){var w=this.b
return w.m(new C.eLY(this.a,w))},
$S:0}
C.eLY.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eM3.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eMn.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ad(-4,A.G,A.b4.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eu(n.ceg(),n.r))
l.push(new C.I3(n.cr1(),!1,!1,t))
o=B.bY(0,B.bv(o,new B.eu(new B.an(A.W,t,A.b_,A.q,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.q,B.a([o,B.ao(t,B.aE(A.c5,B.bZ(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eMm(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:203}
C.eMm.prototype={
$1(d){var w=this.a
return w.m(new C.eMl(w,d,this.b,this.c))},
$S:18}
C.eMl.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eMw.prototype={
$0(){var w=this.a
return w.m(new C.eMv(w,this.b))},
$S:0}
C.eMv.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eLN.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).m2()},
$S:0}
C.eN3.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a6(Math.min(s*0.4,460),t,B.v(B.a([w.aXv(),B.D(B.av(w.b_r(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.v(B.a([B.D(w.aOe(),1),w.aKu()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aXv(),new B.C(A.hG,B.av(s.b_r(u),t,t,t),t),B.D(s.aOe(),1),s.aKu()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:569}
C.fqz.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.en(k,!1,j,A.aC,"",4280640491,i,l,m,"",h,C.byA(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cg,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.O)},
$S:z+98}
C.fqy.prototype={
$3(d,e,f){var w=this,v=C.byA(),u=w.b?A.I:A.cs,t=w.c?A.cD:A.bl
return C.en(w.d,!1,f,A.aC,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cg,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cbA.prototype={
$1(d){return B.t(d)},
$S:17}
C.fyf.prototype={
$0(){return this.a},
$S:z+15}
C.ffb.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.ffc.prototype={
$2(d,e){return J.ck(e)},
$S:z+31}
C.fyh.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fyk.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fyl.prototype={
$0(){return A.d.gL(D.vx)},
$S:z+33}
C.fyd.prototype={
$1(d){return d.a},
$S:z+16}
C.fyg.prototype={
$1(d){return d.a},
$S:z+16}
C.fwd.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fwe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwf.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fqD.prototype={
$0(){return C.cC()},
$S:23}
C.fqG.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cg,s=u?n:0
return C.en(j,l,v,A.aC,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"","",A.bl,A.a4)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,"",j,A.bl,A.a4)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,null,0,j,k,A.bl,A.a4)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bl,A.a4)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bl,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dc,!1,k,l,"",m,A.bl,A.a4)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bl,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dc,!1,j,k,"",l,A.bl,A.a4)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bl,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bl,A.a4)},
$S:z+35}
C.fqF.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bl,A.a4,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cg,D.eZ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fqE.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cg,t=v?j:0
return C.en(A.bg,!1,4279310375,A.aC,"",4280640491,24,A.bl,A.a4,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lg,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pP,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fqC.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.ft3.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.haN.ci(0,A.a.i(s.w).toLowerCase(),new C.ft1(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ci(0,s.r,new C.ft2(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bu(t.e,new B.bmA(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.ft1.prototype={
$0(){return F.aMd(this.a.w)},
$S:181}
C.ft2.prototype={
$0(){var w=this.a.r,v=B.aJ(w.toLowerCase()," ","_")
return F.bxu("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hz(2,w,A.c4,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:181}
C.f8k.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.f8l.prototype={
$1(d){return d.a},
$S:z+18}
C.f8m.prototype={
$1(d){return d.b},
$S:z+19}
C.fHa.prototype={
$1(d){return D.fKW},
$S:z+41}
C.eT3.prototype={
$0(){return this.a.x=C.hF_(this.b,this.c.b)},
$S:0}
C.eT4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eT1.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:400}
C.eT2.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:400}
C.eT0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bW(A.aA,null,new C.eSW(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.lN,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b_(s,7)
if(r.length===0){n.m(new C.eSX(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hgv(o,m.cEh(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eSY(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eSW.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eT_(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b22,A.f,p,p,D.aY8,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Bu:D.Bz,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fti(v,i.b1p(h),u),p)))}t=B.lR(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bm(!0,new B.C(A9.AE,t,p),!0,!1,A.ag,!0,!0)
s=new C.eSZ(i,d)
m=B.aI(d,A.bS,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gf[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cU(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fcJ,A.S,t,A.e0,D.eCx,A.at,D.fn1,A.S,B.lR(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.y,p,A9.AE,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:29}
C.eT_.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b4.j(0.22):A.c.j(0.04),s=v?A.by:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hu,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSV(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eSV.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eSZ.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bF
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bv(w,d.length===0?B.p(v,D.alZ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e_(new C.MK(u.F7(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bJ:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eSU(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:130}
C.eSU.prototype={
$0(){B.a5(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eSX.prototype={
$0(){var w=this.a
return w.w=w.w.F7("")},
$S:0}
C.eSY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eSK.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eSL.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eSN.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eSO.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eSP.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eSQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eSM(w,d))},
$S:2}
C.eSM.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eSR.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eTh.prototype={
$0(){return this.a.f.fE()},
$S:0}
C.eTi.prototype={
$0(){var w=this.a
return w.m(new C.eTg(w))},
$S:0}
C.eTg.prototype={
$0(){return this.a.e=null},
$S:0}
C.eTj.prototype={
$0(){var w=this.a
return w.m(new C.eTf(w))},
$S:0}
C.eTf.prototype={
$0(){return this.a.x=null},
$S:0}
C.eTl.prototype={
$1(d){var w=this.a
return w.m(new C.eTe(w,d))},
$S:32}
C.eTe.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eTm.prototype={
$1(d){var w=this.a
return w.m(new C.eTd(w,d))},
$S:32}
C.eTd.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eTn.prototype={
$0(){var w=this.a
return w.m(new C.eTc(w))},
$S:0}
C.eTc.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eTo.prototype={
$1(d){var w=this.a
return w.m(new C.eTb(w,d))},
$S:32}
C.eTb.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eTp.prototype={
$1(d){var w=this.a
return w.m(new C.eTa(w,d))},
$S:32}
C.eTa.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eTq.prototype={
$0(){var w=this.a
return w.m(new C.eT9(w))},
$S:0}
C.eT9.prototype={
$0(){var w=this.a
return w.w=w.w.F7("")},
$S:0}
C.eTr.prototype={
$0(){var w=this.a
return w.m(new C.eT8(w,this.b))},
$S:0}
C.eT8.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eTs.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bLb(D.a1H[v]),null))
return B.c_(A.bD,t,A.bt,8,8)},
$S:161}
C.eTk.prototype={
$1(d){var w=this.a
return w.m(new C.eT7(w,d))},
$S:9}
C.eT7.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eSS.prototype={
$0(){var w=this.a
return w.m(new C.eST(w,this.b,this.c))},
$S:0}
C.eST.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eT6.prototype={
$0(){var w=this.a
return w.m(new C.eT5(w,this.b))},
$S:0}
C.eT5.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fH9.prototype={
$1(d){return new C.a_s(this.a,this.b,null)},
$S:z+42}
C.eSD.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eSE.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eSF.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aEe?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eSG.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eSH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eSC(w,d))},
$S:2}
C.eSC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eSI.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eSJ.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bM(0,new B.bb(w,B.h8(A.bu,w.length),A.aN))},
$S:0}
C.fer.prototype={
$1(d){return d.a===this.a},
$S:231}
C.e8N.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gavS(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cJn:D.cZb
t=D.wW.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.wW.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ad(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bY(0,B.b3(q,q,q,new C.bfT(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bY(0,B.bMR(B.eA(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a3,A.a7,A.x,B.a([A.K,D.b8B.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.an(A.W,q,A.aa,A.q,B.a([n,o,B.av(B.v(B.a([B.W(p.a.c?A.ee:A.lE,D.wW,q,q,q,20),A.at,B.f1(A.A,B.nE(A.ji,D.f6x,new C.e8M()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f3g,A.f,q,q,new B.o(D.wW,q,q,B.m(6),q,q,A.n),q,q,q,q,L.agW,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.e8M.prototype={
$1(d){return D.bQc.aw(0,d)},
$S:65}
C.fym.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fyn.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:231}
C.fyo.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fyp.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aJ(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aJ(u,p,q.toUpperCase())}return u},
$S:13}
C.fyi.prototype={
$1(d){return d.a},
$S:z+18}
C.fyj.prototype={
$1(d){return d.b},
$S:z+19}
C.fGn.prototype={
$1(d){return new C.YR(this.a,this.b,null)},
$S:z+44}
C.dfB.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dfC.prototype={
$1(d){return d.a===this.a.gah8()},
$S:z+10}
C.dfD.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dfG.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dfH.prototype={
$0(){var w=this.a
return w.m(new C.dfF(w,this.b))},
$S:0}
C.dfF.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfI.prototype={
$1(d){var w=this.a
return w.m(new C.dfE(w,d))},
$S:9}
C.dfE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8L.prototype={
$1$2(d,e,f){var w=B.bl(d,!0,f)
A.d.fo(w,this.a)
return B.db(w,0,B.dJ(e,"count",x.S),B.T(w).c).dF(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f4R.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.en(A.bg,!1,4279310375,A.aC,"",i,24,A.bl,A.a4,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eZ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cg,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f4T.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.en(A.L,!1,this.b.d,A.aC,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mo,D.cQ,g,e,f)},
$S:z+46}
C.f4S.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wc(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mo,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f4Q.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.frK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.frL.prototype={
$0(){return A.d.gL(D.Go)},
$S:z+49}
C.frM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.f6Q.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fxP.prototype={
$1(d){var w=2450411,v=4281908728
C.du(d,C.dv(4280171146,1,0,D.be,w,0,0.52,0,0))
C.du(d,C.dv(v,1,0,D.be,w,0,0.04,0.48,0))
C.du(d,C.dv(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fxQ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.du(d,C.dv(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.du(d,C.dv(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.du(d,C.dv(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.22,0.08,0.12))
C.du(d,C.dv(u,0.004,0,D.fp,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fxR.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(4279080072,0.11,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.du(d,C.dv(856528008,0.72,0,D.jy,w,0,0.28,0.72,0.14))
C.du(d,C.dv(1426953352,0.2,0,D.jy,w,0,0.2,0.78,0.22))
C.du(d,C.dv(v,0.004,0,D.fp,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fy1.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4279203438,0.55,0,D.jy,w,0,0.5,0.55,-0.05))
C.du(d,C.dv(4280171146,0.5,0,D.jy,w,0,0.45,0.62,0.35))
C.du(d,C.dv(4280640491,0.4,0.3,D.jx,w,0,0.35,0.68,0.55))
C.du(d,C.dv(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fy6.prototype={
$1(d){var w=4280472558
C.du(d,C.dv(4279310375,0.75,-0.4,D.jx,2450411,0,0.75,-0.15,0.35))
C.du(d,C.dv(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.35,0.08,0.08))
C.du(d,C.dv(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fy7.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3423541034,0.48,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.12,-0.08,D.jy,w,0,1.1,-0.05,0.38))
C.du(d,C.dv(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fy8.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cIr[w]
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a4,A.bl,A.aC,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fy9.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.m3,A.dy,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a4,A.bl,A.aC,4279310375,A.bg,null,D.C8,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fya.prototype={
$1(d){var w=4294967295
C.du(d,C.dv(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.du(d,C.dv(4280110808,1.1,1.57,D.jx,2450411,0,0.18,0.35,-0.05))
C.du(d,C.dv(w,0.006,0,D.fp,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyb.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0))
C.du(d,C.dv(u,0.012,0,D.be,v,0,1,0,0.1))
C.du(d,C.dv(u,0.006,0,D.fp,u,3,0.42,0.06,0.14))
C.du(d,C.dv(403446057,0.68,0,D.jy,v,0,0.22,0.72,0.18))
C.du(d,C.dv(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fyc.prototype={
$1(d){var w=4278630100
C.du(d,C.dv(4279310375,1.2,0.15,D.jy,2450411,0,0.55,-0.2,-0.1))
C.du(d,C.dv(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.du(d,C.dv(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fxS.prototype={
$1(d){var w=4292617766
C.du(d,C.dv(4282714634,0.65,-0.2,D.jx,2450411,0,0.65,-0.1,0.45))
C.du(d,C.dv(w,0.5,-0.15,D.jx,2450411,0,0.5,0.05,0.55))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fxT.prototype={
$1(d){var w=2450411
C.du(d,C.dv(4278413729,0.35,3.14,D.jx,w,0,0.45,-0.05,0.7))
C.du(d,C.dv(4278355143,0.3,3.14,D.jx,w,0,0.4,0.25,0.75))
C.du(d,C.dv(4279150057,0.32,3.14,D.jx,w,0,0.5,0.55,0.72))
C.du(d,C.dv(863884284,0.22,0,D.eI,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fxU.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.du(d,C.dv(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.du(d,C.dv(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.du(d,C.dv(w,0.28,0,D.jy,v,0,0.35,-0.08,0.78))
C.du(d,C.dv(u,0.22,0.5,D.jx,v,0,0.3,0.72,0.78))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fxV.prototype={
$1(d){var w=4293571336,v=1156231944
C.du(d,C.dv(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.du(d,C.dv(v,0.15,0,D.jx,2450411,0,0.15,0.02,0.02))
C.du(d,C.dv(v,0.15,3.14,D.jx,2450411,0,0.15,0.83,0.83))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fxW.prototype={
$1(d){var w=4279080072,v=2450411
C.du(d,C.dv(w,0.14,0,D.kP,v,0,0.14,0.68,0.18))
C.du(d,C.dv(4279548070,0.14,0,D.kP,v,0,0.14,0.78,0.28))
C.du(d,C.dv(4281193663,0.14,0,D.kP,v,0,0.14,0.68,0.38))
C.du(d,C.dv(4284410580,0.14,0,D.kP,v,0,0.14,0.78,0.48))
C.du(d,C.dv(4279203438,0.14,0,D.kP,v,0,0.14,0.68,0.58))
C.du(d,C.dv(w,0.006,0,D.fp,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fxX.prototype={
$1(d){var w=2450411,v=4280640491
C.du(d,C.dv(3708753706,0.42,0,D.be,w,0,1,0,0))
C.du(d,C.dv(v,0.06,-0.05,D.jy,w,0,1,0,0.38))
C.du(d,C.dv(859356664,0.25,0,D.eI,w,0,0.25,0.7,0.08))
C.du(d,C.dv(v,0.006,0,D.fp,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fxY.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.m3,A.dy,w/3).l()
u=Date.now()
t=$.iW
$.iW=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a4,A.bl,A.aC,4279310375,A.bg,null,D.C8,v,2450411,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,v)}C.du(d,C.dv(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fxZ.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a4,A.bl,A.aC,s,A.bg,null,D.fp,t,t,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.du(d,C.dv(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.du(d,C.dv(s,0.006,0,D.fp,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fy_.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.du(d,C.dv(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.du(d,C.dv(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.du(d,C.dv(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.du(d,C.dv(w,0.004,0,D.fp,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fy0.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iW
$.iW=t+1
t=new C.eG("design_"+(""+1000*u+"_"+t),D.eZ,0.55,0.14+v,0.38,0.18,"",24,A.a4,A.bl,A.aC,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
u=$.JM
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cn(d.z,0,t)
u=B.aq(A.dp,A.ct,w/2).l()
t=Date.now()
s=$.iW
$.iW=s+1
u=new C.eG("design_"+(""+1000*t+"_"+s),D.eZ,0.57,0.16+v,0.06,0.14,"",24,A.a4,A.bl,A.aC,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}C.du(d,C.dv(4280171146,1,0,D.be,q,0,0.48,0,0))
C.du(d,C.dv(4280172719,1.1,1.57,D.jx,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fy2.prototype={
$1(d){var w=2450411
C.du(d,C.dv(870995980,0.55,0.45,D.jy,w,0,0.55,-0.12,-0.08))
C.du(d,C.dv(856996006,0.45,0.45,D.jy,w,0,0.45,0.62,-0.05))
C.du(d,C.dv(16777215,0.38,0.45,D.jy,4293548044,5,0.38,0.52,0.12))
C.du(d,C.dv(585783308,0.3,0.45,D.jy,w,0,0.3,0.56,0.16))
C.du(d,C.dv(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.du(d,C.dv(1156208652,0.28,0,D.eI,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fy3.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.du(d,C.dv(w,1,0,D.be,v,0,0.07,0,0))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.du(d,C.dv(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.du(d,C.dv(s,0.08,0,D.eI,v,0,0.08,0.5,0.16))
C.du(d,C.dv(w,0.08,0,D.eI,v,0,0.08,0.5,0.3))
C.du(d,C.dv(4279548070,0.08,0,D.eI,v,0,0.08,0.5,0.44))
C.du(d,C.dv(16777215,0.32,0.45,D.jy,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fy4.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.du(d,C.dv(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.du(d,C.dv(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.du(d,C.dv(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.du(d,C.dv(16777215,0.28,0,D.eI,s,4,0.32,0,0.72))
C.du(d,C.dv(r,0.006,0,D.fp,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iW
$.iW=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.eZ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a4,A.bl,A.aC,4279310375,A.bg,null,D.eI,16777215,t,2,0,!1,"",0,D.cg,0,"","","","","",!1,0)
v=$.JM
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cn(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fy5.prototype={
$1(d){var w=2450411,v=4279548070
C.du(d,C.dv(3423541034,0.55,0,D.be,w,0,1,0,0))
C.du(d,C.dv(4009754623,0.56,0.45,D.jy,w,0,0.56,0.22,0.18))
C.du(d,C.dv(3439329279,0.44,0.45,D.jy,w,0,0.44,0.28,0.24))
C.du(d,C.dv(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.du(d,C.dv(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fpA.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fpB.prototype={
$0(){return A.d.gL($.bCd())},
$S:z+52}
C.fed.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fec.prototype={
$1(d){return C.hMd(d,this.a,this.b)},
$S:z+53}
C.fyv.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vr(1.0375,1.01875,1)
return new B.fO(v,u,new C.aR9(B.hC1(A.ut,C.hMg(w.c,w.d,v,u),t)))},
$S:399}
C.dQB.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dQA.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bZ(w,new B.o(w,w,w,w,w,new B.bR(A.Je,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jr(new B.an(A.W,w,A.b_,A.q,B.a([t,new B.eu(B.b3(w,w,w,new C.bcN(u.a,r,q,r),A.au),w),B.av(new B.k9(r,new C.dQz(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:430}
C.dQz.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.eu.av(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ad(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hR(B.fL(i,A.A,r,r,A.cn,A.bQ,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mc(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bpg(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cP(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaJ2(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a4,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.e9(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eRR.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:65}
C.c69.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bF
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ad(0,A.G,A.hC.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bv(B.m(12),d,A.aq),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a6(112,v,B.v(B.a([w,A.fV,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bJ:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c6a.prototype={
$0(){var w=this.a
return w.d.$1(w.c.F7(""))},
$S:0}
C.c6b.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e_(new C.MK(v.F7(u),!0,!1,null),!0,null),d.b,new C.c6c(w,this.c,d),v.a===u)},
$S:z+54}
C.c6c.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hgv(u.b,t.c.F7(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEN.prototype={
$1(d){return new C.Yp(this.a,null)},
$S:z+55}
C.d4Q.prototype={
$0(){var w=this.a
w.d=w.gvj().b9c("data:"+this.b+";base64,"+A.cS.gcu().aI(this.c));++w.r},
$S:0}
C.d4V.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.d4W.prototype={
$0(){var w=this.a
return w.m(new C.d4U(w))},
$S:0}
C.d4U.prototype={
$0(){return this.a.r++},
$S:0}
C.d4X.prototype={
$1(d){var w=this.a
return w.m(new C.d4T(w,d))},
$S:2}
C.d4T.prototype={
$0(){var w=this.a
return w.d=w.gvj().aC4(this.b)},
$S:0}
C.d4Y.prototype={
$0(){var w=this.a
return w.m(new C.d4S(w))},
$S:0}
C.d4S.prototype={
$0(){var w=this.a
return w.d=w.gvj().b9c("")},
$S:0}
C.d4Z.prototype={
$1(d){var w=this.a
return w.m(new C.d4R(w,d))},
$S:2}
C.d4R.prototype={
$0(){var w=this.a
return w.d=w.gvj().b9j(this.b)},
$S:0}
C.d5_.prototype={
$0(){var w=this.a
w=w.gvj().b9j(w.gavT().a.a)
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.fEM.prototype={
$1(d){var w={}
w.a=this.a
return new B.e2(new C.fEL(w),null)},
$S:20}
C.fEL.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.az,D.fkg,A.at,D.fkw,A.az,new C.aYo(v.a,new C.fEK(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.aYG,w,w,w,w,A.Lw,w,w,w)},
$S:199}
C.fEK.prototype={
$1(d){this.b.$1(new C.fEJ(this.a,d))
B.a5(this.c,!1).N(d)},
$S:z+56}
C.fEJ.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fH8.prototype={
$1(d){return D.fGj},
$S:z+57}
C.dbB.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dbC.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).N(this.b)
return null},
$S:0}
C.dbD.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).N(v)}},
$S:0}
C.fvb.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aD,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:65}
C.d4x.prototype={
$3(d,e,f){var w,v=this,u=new B.aQ($.X().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cS(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cS(w,q+p,w,q+p*1.2))
u.E(new B.CC(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ai(new B.u(w,o),2.2,p)},
$S:668}
C.fvf.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fnA.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fnB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.C(E.xh,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.f3w,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.FW,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fny(d),B.bk(A.bV,w,w,w,A.c,w,A.cf,w,w,w,w,w)),A.S,B.ez(A.nM,D.T2,new C.fnz(d),B.de(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cf,w,w,Q.wo,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:29}
C.fny.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fnz.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.cby.prototype={
$1(d){return d.hy()},
$S:z+59}
C.cbz.prototype={
$1(d){return d.ad()},
$S:z+60}
C.cbx.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aN(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a4.gdH(0)
b3=B.aN(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aN(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hI4(b2.h(0,"type"))
t=B.aN(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aN(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aN(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aN(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aN(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.awx[A.o.D(b4,0,8)]
m=D.cLc[A.o.D(w,0,1)]
l=C.hLG(b2.h(0,"decoration"))
k=B.aN(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.atm[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hOs(b2.h(0,"shape"))
g=B.aN(b2.h(0,"fillColor"))
g=g==null?b1:A.k.O(g)
if(g==null)g=4280640491
f=B.aN(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.O(f)
if(f==null)f=4280172719
e=B.aN(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aN(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.y(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aN(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.hbR(b2.h(0,"textTransition"))
a4=B.aN(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.O(a4)
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
b2=B.aN(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.en(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cbn.prototype={
$1(d){return d.hy()},
$S:z+62}
C.cbo.prototype={
$1(d){return d.ad()},
$S:z+63}
C.cbk.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbl.prototype={
$1(d){return B.t(d)},
$S:17}
C.cbm.prototype={
$1(d){return C.h2C(B.a1(d,x.N,x.z))},
$S:z+64}
C.cbP.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cbQ.prototype={
$0(){return A.d.gL(D.a1l)},
$S:z+66}
C.cbK.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hy())},
$S:z+7}
C.cbJ.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbF.prototype={
$1(d){return new B.J(d,new C.cbG(),B.T(d).k("J<1,S>")).fD(0,new C.cbH())},
$S:z+69}
C.cbG.prototype={
$1(d){return d.f},
$S:z+70}
C.cbH.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:669}
C.cbI.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hxT(d)},
$S:z+71}
C.cbL.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cbM.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cbN.prototype={
$1(d){return d.ad()},
$S:z+14}
C.fvO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ag(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fvK.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fvL.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fvM.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fvN.prototype={
$2(d,e){return d.b===D.eZ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cbt.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hX7(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cbs(),b5.k("H.E"),x.N)
w=B.d9(b5,B.a3(b5).k("H.E"))
b1=b1.e
v=A.pk.av(0,A.k.D(b1,0,1))
u=new C.cbu()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cbv(a9,b7.d)
r=new C.cbw(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jK.av(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kN(A.k.D(1-k,0,1),B.dU(B.e9(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eZ){a4=i.hy()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lg&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.q,B.a([new B.kN(A.k.D(o,0,1),r.$1(l),a8),new B.kN(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iD(B.vW(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cg)a7=D.mo
p.push(s.$5(i.c,i.d,i.e,i.f,C.he4(a7,a6,r.$1(i))))}}return B.bZ(new B.an(A.W,a8,A.aa,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:384}
C.cbs.prototype={
$1(d){return d.a},
$S:z+22}
C.cbu.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cbv.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cbw.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a6N(v,C.b_w(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dDd.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e9(new B.d8(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cbC.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cbD.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fyC.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:307}
C.fxJ.prototype={
$1(d){return new C.ach(this.a,this.b,null)},
$S:z+78}
C.ekR.prototype={
$0(){return this.a.P6(this.b,C.i_r(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ekS.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.P6(this.b,C.i_t(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ekT.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.P6(this.b,C.i_s(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ekU.prototype={
$0(){Z.hdP()
B.a5(this.a,!1).N(null)},
$S:0}
C.cbr.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cbq.prototype={
$2(d,e){var w,v=this,u=null,t=B.dL(d,A.nh),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lH(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bQ:A.dt
return B.fL(t,A.A,o,new C.cbp(),A.cn,w,!0,u,!1,new B.cz("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cbp.prototype={
$3(d,e,f){return D.aal},
$S:220}
C.fvJ.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.db(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("J<ai.E,cK>")
r=B.B(new B.J(r,new C.fvI(e.b,e.d),u),u.k("ai.E"))
return B.bv(s,B.bZ(new B.an(A.W,t,A.aa,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fvI.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b_w(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fgx.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fgv(d))
w=B.aI(d,A.bS,x.w).w
v=B.m(22)
u=B.I(A.bF,A.r,1)
t=B.a([new B.ad(0,A.G,A.w.j(0.45),A.fK,28)],x.V)
s=x.p
return new B.cX(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.D(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kT,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zd,q,q,!0,q,q,new C.fgw(p,d),q,B.fu(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.EM,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.az,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aA,q,u,v,t,q,A.n),q,q,q,A.fH,A.EV,q,q,q),A.f,A.K,0,q,q,q,q,q,A.af),q,q,q),q)},
$C:"$3",
$R:3,
$S:263}
C.fgv.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).ph())B.a5(w,!0).eH()},
$S:0}
C.fgw.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a5(this.b,!0).eH()},
$S:0}
C.f_a.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fu(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jL(r*3.14159)
return B.fr(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fu(r*1.2)
s.jL(r*0.5)
return B.fr(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fu(-r*1.4)
return B.fr(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(B.e9(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jr(u.b,A.q,new C.aHX(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.jr(u.b,A.q,new C.aHX(1-r,t))],x.p),t)
case 16:v=D.b13.av(0,r)
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.e9(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(B.ei(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dl()
s.mx(r*6.28)
s.jv(r,r,r,1)
return B.fr(A.A,u.b,t,s,!0)
case 20:return B.eA(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.q,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:58}
C.dOO.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dON.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cp(0)}},
$S:11}
C.dOM.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.he4(v,w,e)},
$S:58}
C.cbj.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a7(A.a3,A.a7,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("J<1,cK>")
q=B.B(new B.J(v,new C.cbi(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bZ(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:384}
C.cbi.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cg?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a6N(m,new C.U5(d,C.b_w(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d1M.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d1L(w))},
$S:11}
C.d1L.prototype={
$0(){return this.a.d++},
$S:0}
C.e8t.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aLj.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hWR(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dl()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e2(0,w*7,0,1)
s.fu(Math.sin(t)*0.32)
s.jL(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jv(w,w,w,1)
return B.fr(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.e9(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.e9(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.ePw.prototype={
$1(d){var w
$.X()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fz
return w},
$S:1693}
C.ftj.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gee()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bp9(u,t,r),A.au))
w.push(B.nk(s.d,A.aq,new C.bdj(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bo9(u,q,t,r),A.au))
return B.av(new B.a6(v.a,v.b,new B.an(A.W,r,A.b_,A.q,w,r),r),r,r,r)},
$S:247}
C.fjl.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:310}
C.er4.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.Cn(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.er2(),new C.er3(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.er2.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:178}
C.er3.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.ens.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ent.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.enu.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ep2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eoR.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eoS.prototype={
$1(d){return d.hy()},
$S:z+81}
C.emQ.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eqa.prototype={
$0(){this.a.tb()},
$S:0}
C.er0.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nW()
w.Jx()},
$S:0}
C.ep0.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nW()
w.Jx()},
$S:0}
C.eqO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eqP.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqQ.prototype={
$1(d){return d.a},
$S:z+22}
C.eqR.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b2,A.aN),$.aw())},
$S:257}
C.eqS.prototype={
$0(){return B.kg(!0,null,!0,!0,null,null,!1)},
$S:673}
C.eme.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.er1.prototype={
$0(){},
$S:0}
C.eo9.prototype={
$0(){var w=this.a
w.e=this.b.hy()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x6()
w.Jx()},
$S:0}
C.emc.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.x6()},
$S:0}
C.emd.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.x6()},
$S:0}
C.eow.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eox.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x6()
w.Jx()
w.z="Home"},
$S:0}
C.eoy.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eo8.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.T1,w,w,!0,w,w,new C.eo7(d),w,w)],x.p),w,w,w,D.flY,w,w,w,w,D.f3Y,w)},
$S:19}
C.eo7.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eo5.prototype={
$1(d){var w=null
return B.eh(B.a([B.bK(!1,A.T1,w,w,!0,w,w,new C.eo4(d),w,w)],x.p),w,w,w,D.f7R,w,w,w,w,D.f5E,w)},
$S:19}
C.eo4.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eo6.prototype={
$0(){},
$S:0}
C.eno.prototype={
$1(d){return this.a.aYN(C.bAd(d))},
$S:z+7}
C.enp.prototype={
$1(d){return this.a.adK(C.bAd(d))},
$S:z+7}
C.eof.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b5,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fm1,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.ON(A.vc,D.auI,"HATI YA KUHOWA","Hati ya mahari",new C.eoa(d),w),A.S,new C.ON(A.h5,D.cX3,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eob(d),w),A.S,new C.ON(A.hX,D.cJt,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eoc(d),w),A.S,new C.ON(A.hI,D.cHO,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eod(d),w)],v)
if(this.a.gaah())A.d.v(u,B.a([A.S,new C.ON(A.iQ,D.csX,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eoe(d),w)],v))
return B.bm(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.q,w,A.y,w,E.xh,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:29}
C.eoa.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eob.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eoc.prototype={
$0(){B.a5(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.eod.prototype={
$0(){B.a5(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eoe.prototype={
$0(){B.a5(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eog.prototype={
$0(){var w=this.a
w.e=this.b.hy()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x6()},
$S:0}
C.emg.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.emh.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mZ(r,v.f+1,q);++v.f
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
C.eor.prototype={
$1(d){return d.b===D.lg},
$S:z+4}
C.eos.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e2(new C.eop(w,this.a,v),null)},
$S:20}
C.eop.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eoq(p,o,a3,n),l=B.N(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.r,1),e=x.p,d=B.A(B.a([B.D(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bz,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.W(A.cx,j,q,q,q,q),q,q,q,new C.eol(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Bz[w]
v.a=null
t=v.a=u.a
a1.push(new C.bfN(t,u.b,p.a===t,i,k,new C.eom(v,m),q))}a1=B.c_(A.bD,a1,A.bt,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Bu[w]
s.a=null
t=s.a=r.a
u.push(new C.bfM(t,r.b,p.b===t,k,j,new C.eon(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.v(B.a([d,A.aO,a0,A.S,a1,A.bv,v,A.S,B.c_(A.bD,u,A.bt,12,12),A.bv,new B.a6(1/0,48,B.ez(D.bMz,D.fon,new C.eoo(o,n),B.de(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aWb,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.q,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.th,D.bpu,q,q,q),!0,!1,A.ag,!0,!0)},
$S:89}
C.eoq.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eoj(w.a,d,e))
w.b.d1(new C.eok(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.eoj.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eok.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eol.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eom.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eon.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eoo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.G1(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d1(new C.eoi(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoi.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eou.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eov.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eot(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mZ(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x6()},
$S:0}
C.eot.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eoM.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eoN.prototype={
$1(d){return d.w},
$S:z+82}
C.eoO.prototype={
$2(d,e){return d>e?d:e},
$S:85}
C.eoP.prototype={
$1(d){var w=this,v=null,u=B.N(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.r,1),n=B.aI(d,A.bS,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bGl,A.f,v,v,D.aXz,v,38,v,v,v,v,v,38),A.bf,B.D(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.W(A.cx,s,v,v,v,v),v,v,v,new C.eoJ(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.az,new B.dm(1,A.ci,B.hE(v,new C.eoK(m,k,w.c,s,w.d,t,r),k.length,A.fx,v,A.ah,new C.eoL(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.th,A.XK,v,v,v),!0,!1,A.ag,!0,!0)},
$S:29}
C.eoJ.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoL.prototype={
$2(d,e){return A.ac},
$S:36}
C.eoK.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cs
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bJq,q,q,q,new C.eoH(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.brJ,n,q),B.aL(q,A.T,!1,q,!0,A.q,q,B.aM(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aVR),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eoI(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.eoH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i1v(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geu()?p.a:q.a.length
n=p.geu()?p.b:q.a.length
m=A.a.ou(q.a,o,n,s)
r.bM(0,new B.bb(m,B.h8(A.bu,o+s.length),A.aN))
l.ahL(k,m)
l.p_()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoI.prototype={
$1(d){var w=this.a
w.ahL(this.b.a,d)
w.p_()},
$S:2}
C.eoQ.prototype={
$0(){},
$S:0}
C.eoh.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.emx.prototype={
$0(){},
$S:0}
C.emy.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hfn(this.b,w,!0)
w=this.a
w.r=null
w.x6()},
$S:0}
C.emz.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.emA.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.emw(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mZ(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.x6()},
$S:0}
C.emw.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eoW.prototype={
$1(d){return B.oD(new C.eoV(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:137}
C.eoV.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.agC,B.v(B.a([D.fjH,A.ao,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ib(!0,w,e,A.y,D.eIh,new C.eoU(this.a,this.b),20,A.tk,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:383}
C.eoU.prototype={
$2(d,e){var w=null,v=D.Go[e],u=C.hxO(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fI,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eCt,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mW,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eoT(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:78}
C.eoT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cbB(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoX.prototype={
$0(){var w=this.a
w.e=this.b.hy()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.x6()},
$S:0}
C.elb.prototype={
$0(){var w,v=this.a,u=v.gq_(),t=C.rd(4294967295,null,0,0,null,C.cC(),D.mn,"","","",D.dc),s=this.b
C.cbO(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C7){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.emv.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aX(w),u=x.f;v.C();){t=v.gU(v)
if(u.b(t)){s=Date.now()
r=$.iW
$.iW=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cn(v.e.r,v.f+1,C.h2C(q));++v.f},
$S:0}
C.emt.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ep4.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.cn(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.emp.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.emo(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.emo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ep3.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.emf.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b2,A.aN),$.aw())},
$S:257}
C.emR.prototype={
$0(){return B.kg(!0,null,!0,!0,null,null,!1)},
$S:673}
C.eqM.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eqN.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.arT(w).fE()
v=u.VI(w)
v.srU(B.h8(A.bu,v.a.a.length))},
$S:8}
C.eqb.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.WH(v)
if(u!=null&&u.b===D.cQ)w.VI(u).saV(0,u.r)}else w.w=null},
$S:0}
C.elc.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,v.gq_().e.l(),A.aC,"",4280640491,24,A.bl,A.a4,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cg,D.cQ,0.7,0.15,0.2)
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.el9.prototype={
$0(){var w=C.cC(),v=this.a,u=C.en(A.bg,!1,4279310375,A.aC,"",v.gq_().c.j(0.25).l(),24,A.bl,A.a4,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gq_().c.l(),2,"",0,0,"",D.cg,D.eZ,0.25,0.3,0.3)
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.el_.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aC,"",4280640491,24,A.bl,A.a4,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,0.6,0.2,0.18),v=this.a
A.d.J(v.gdq().z,w)
v.r=w.a},
$S:0}
C.ekX.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bT4],x.p)
for(w=J.aX(this.a);w.C();){v=w.gU(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaim().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bE5,r,r,r,r,new C.ekW(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cB(q,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:29}
C.ekW.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.ekY.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ad(),null),s=C.en(A.bg,!1,4279310375,A.aC,u.b,4280640491,24,A.bl,A.a4,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cg,D.a3O,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdq().z,s)
t.r=s.a},
$S:0}
C.emr.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ems.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdq().z,new C.emq(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.emq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.elE.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.eZ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.elF(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.elF.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.elJ.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.elK(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdq()
if(t!=null)v.$1(t)}},
$S:0}
C.elK.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.elH.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.elI(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.elI.prototype={
$1(d){var w,v,u
for(w=A.d.gah(d.z),v=new B.fG(w,new C.elG()),u=this.a;v.C();)w.gU(0).Q=u},
$S:z+1}
C.elG.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.elD.prototype={
$0(){return C.cbO(this.b,this.c,this.a.gq_())},
$S:0}
C.eoG.prototype={
$0(){return A.d.cn(this.a.d,0,this.b)},
$S:0}
C.eqV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqW.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eqX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqY.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cn(s,0,v.b)
else{w=A.d.bc(s,new C.eqU(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRt()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hy()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.x6()
t.Jx()}},
$S:0}
C.eqU.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eqr.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aal(),s=w.b,r=u.aam(A.f6,A.kJ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bv,B.p(v,B.A(B.a([B.D(u.aT1(w.c,A.ak),1),new B.C(A.fo,B.p(v,D.bEb,A.f,v,v,new B.o(A.f6.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.D(u.aT1(s,A.f6),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.bv,u.aT4(A.f6,d,D.bAi,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bUp(A.aW,d,A.tx,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.az)
p.push(u.aT2(d,"Not now"))
return new C.Je(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eqq.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Je(B.v(B.a([v.aal(),A.P,v.aam(A.aW,D.bzY,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cU(new B.aY(0,1/0,0,B.aI(d,A.bS,x.w).w.a.b*0.42),B.hE(w,new C.eqo(v,u,d),u.length,w,w,A.ah,new C.eqp(),!0),w),A.az,v.aT2(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eqp.prototype={
$2(d,e){return A.S},
$S:36}
C.eqo.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.alu,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bQ7,A.n),w,42,w,w,w,w,w,42),A.bf,B.D(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ne,w,w,w),A.d0,B.d("Updated "+this.a.P7(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.W(A.eo,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqn(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.af)},
$S:78}
C.eqn.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.eqk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aal()
t=t.aam(A.aJ,A.tG,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Je(B.v(B.a([s,A.P,t,A.bv,B.A(B.a([B.D(B.dT(A.a77,new C.eqi(d),B.de(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cf,u,new B.b7(B.m(14),A.Y),new B.az(w,1,A.r,-1),u,u,u,u)),1),A.aw,B.D(B.bJ(D.f6d,new C.eqj(d),B.bk(A.f6,u,u,u,A.c,u,A.cf,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eqi.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eqj.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eqm.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aal(),s=w.b,r=u.aam(A.aU,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.D(u.atc("Names",""+w.c),1),A.ab,B.D(u.atc("Fields",""+w.d),1),A.ab,B.D(u.atc("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bj,v,v,v,A.c,v,A.x7,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Je(B.v(B.a([t,A.P,r,A.aO,p,A.bv,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.nc,v,v,v),new C.eql(d),o),A.S,u.aT3(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eql.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.enk.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.enj.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eqc.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqL.prototype={
$1(d){var w=this.a,v=this.b
return new C.ZB(A.d.dM(w.d,new C.eqJ(v),new C.eqK(v)).hy(),w.f,null)},
$S:z+84}
C.eqJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eqK.prototype={
$0(){return this.a},
$S:z+85}
C.el4.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hm,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bFW,w,w,w,w,new C.el2(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.f4h,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bH4,w,w,w,w,new C.el3(d),!1,w,w,w,w,w,D.fpy,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bm(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.el2.prototype={
$0(){B.a5(this.a,!1).N("scroll")
return null},
$S:0}
C.el3.prototype={
$0(){B.a5(this.a,!1).N("split")
return null},
$S:0}
C.el5.prototype={
$0(){var w=this.b,v=w.c,u=C.en(A.bg,!1,4279310375,A.aC,v,4280640491,24,A.bl,A.a4,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cg,D.QV,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdq().z,u)
v.r=u.a},
$S:0}
C.el6.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iW
$.iW=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iW
$.iW=k+1
m.push(new C.eG(""+1000*l+"_"+k,D.QV,0.04,0.06,0.92,0.88,v,24,A.a4,A.bl,A.aC,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cg,0,"","","","","",!1,0))
A.d.cn(j.e.r,i+q-1,new C.ly(""+1000*p+"_"+o,r+n,"",D.pO,4294967295,null,D.dc,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ela.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.kp(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.en(A.bg,!1,4279310375,A.aC,t,4280640491,24,A.bl,A.a4,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kO,0.35,0.55,0.62)
A.d.J(u.gdq().z,w)
u.r=w.a},
$S:0}
C.el1.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b0v(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.en(A.bg,!1,4279310375,A.aC,"marriage_sign_placed_"+A.a.e9(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a4,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.kO,s,u,t)
A.d.J(p.gdq().z,q)
A.d.bn(p.gdq().z,new C.el0(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.hWA(p)}},
$S:0}
C.el0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ep1.prototype={
$0(){var w=this.a,v=this.b
w.b0v(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eqT.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.enn.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.enm())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.enm.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.elN.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.elO.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tb()},
$S:8}
C.ekZ.prototype={
$0(){var w=C.en(A.bg,!1,4279310375,A.aC,"HD Photo",4280640491,24,A.bl,A.a4,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cg,D.lg,0.8,0.1,0.1),v=this.a
A.d.J(v.gdq().z,w)
v.r=w.a},
$S:0}
C.emP.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.el7.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdq().z,v)
w.r=v.a},
$S:0}
C.elg.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.elh.prototype={
$0(){var w=this.b.hy(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.en(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdq().z,f)
t.r=f.a},
$S:0}
C.eli.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.bc(w,new C.elf(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.cn(w,u+1,v)}},
$S:0}
C.elf.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.elt.prototype={
$0(){var w=this.a.gdq().z,v=this.b,u=A.d.bc(w,new C.ele(v))
if(u>0){A.d.cz(w,u)
A.d.cn(w,u-1,v)}},
$S:0}
C.ele.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.elw.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.elx.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ely.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.elz.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.elA.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.elB.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.elC.prototype={
$1(d){return d.length!==0},
$S:3}
C.elj.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.J(v,C.Cs(w.gq_().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdq().z
v=C.cC()
A.d.J(u,C.iQ(A.bg,!1,w.gq_().d.l(),A.aC,18,A.bl,A.I,0.07,v,"Document Header",0,D.dc,0.9,0.05,0.02))},
$S:0}
C.elk.prototype={
$0(){var w,v=this.a,u=v.gdq().z,t=C.cC()
A.d.J(u,C.Cs(v.gq_().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdq().z
u=C.cC()
w=C.bAW()
A.d.J(t,C.iQ(A.L,!1,v.gq_().e.l(),A.aC,12,A.bl,A.a4,0.06,u,"Footer \xb7 "+w,0,D.dc,0.9,0.05,0.92))},
$S:0}
C.ell.prototype={
$0(){A.d.J(this.a.gdq().z,C.Cs(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.elm.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdq().z,C.Cs(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.eln.prototype={
$0(){var w=this.a,v=w.gdq().z,u=C.cC()
A.d.J(v,C.Cs(w.gq_().c.j(0.35).l(),0.12,u,D.C8,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4279310375,A.aC,18,A.bl,A.a4,0.15,C.cC(),"Important note",0,D.pP,0.5,0.38,0.52))},
$S:0}
C.elo.prototype={
$0(){var w=this.a
A.d.J(w.gdq().z,C.Cs(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4279179050,A.aC,16,A.bl,A.a4,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bAW()+"\n\nSubject:\n\nBody text\u2026",0,D.dc,0.76,0.12,0.14))},
$S:0}
C.elp.prototype={
$0(){var w=this.a
A.d.J(w.gdq().z,C.Cs(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdq().z,C.iQ(A.bg,!1,4285611794,A.aC,15,A.bl,A.a4,0.24,C.cC(),"Sticky note",0,D.aE3,0.26,0.64,0.14))},
$S:0}
C.elq.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdq().z,C.Cs(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdq().z,C.Cs(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.elr.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aC,18,A.bl,A.a4,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Hk,0.42,0.06,0.18))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aC,18,A.bl,A.a4,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.tW,0.42,0.52,0.18))},
$S:0}
C.els.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.Cs(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdq().z,C.Cs(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aC,20,A.bl,A.I,0.1,C.cC(),"Option A",0,D.dc,0.36,0.08,0.2))
A.d.J(v.gdq().z,C.iQ(A.bg,!1,w,A.aC,20,A.bl,A.I,0.1,C.cC(),"Option B",0,D.dc,0.36,0.56,0.2))},
$S:0}
C.elu.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdq().z,C.Cs(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.J(v.gdq().z,C.iQ(A.L,!1,w,A.aC,14,A.bl,A.a4,0.12,C.cC(),"[ QR CODE ]",0,D.dc,0.24,0.38,0.4))},
$S:0}
C.elv.prototype={
$0(){return C.cbO(this.b,D.QW,this.a.gq_())},
$S:0}
C.emO.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a5t.t(0,d),t=this.a
return t.b5m(d,v===d,A.aZ,this.c,new C.emN(t,u,d,w),u)},
$S:z+25}
C.emN.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nO(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bBJ(r,new C.emM(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.emM.prototype={
$0(){return this.a.d1(new C.emL(this.b,this.c))},
$S:0}
C.emL.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.el8.prototype={
$0(){var w,v=this.a,u=v.gq_(),t=C.rd(4294967295,null,0,0,null,C.cC(),D.mn,"","","",D.dc),s=this.b
C.cbO(t,s,u)
w=v.gdq()
if(w!=null&&s!==D.C7){t.e=w.e
t.f=w.f}A.d.cn(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.elR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i1y(p,q.d,s,new C.elQ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tb(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.elQ.prototype={
$1(d){return this.bhU(d)},
bhU(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.elP(t,d))
w=2
return B.b(t.tb(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.elP.prototype={
$0(){var w,v,u
for(w=J.aX(this.b),v=this.a;w.C();){u=w.gU(w)
A.d.cn(v.d,0,u)}},
$S:0}
C.elS.prototype={
$0(){return this.a.bFF()},
$S:0}
C.elT.prototype={
$0(){return this.a.aOq("Class Presentation",!0)},
$S:0}
C.elU.prototype={
$1(d){return this.a.bGB(d.b,this.b,d.a)},
$S:z+88}
C.emu.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bS,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eoF.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e2(new C.eoE(this.a,this.b),null),null)},
$S:59}
C.eoE.prototype={
$2(d,e){return B.oD(new C.eoD(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.eoD.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aA:A.c,s=B.I(u?A.bF:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.b5,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.ag3,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bK(!1,A.zd,v,v,!0,v,v,new C.eoB(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cB(B.a([p.aR3(u,!0,!0,new C.eoC(p,w.d))],q),e,D.bnl,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.ku,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:109}
C.eoB.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoC.prototype={
$0(){this.b.$1(new C.eoz())
var w=this.a
if(w.c!=null)w.m(new C.eoA())},
$S:0}
C.eoz.prototype={
$0(){},
$S:0}
C.eoA.prototype={
$0(){},
$S:0}
C.eqd.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.eqe.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.dc(B.e9(A.A,new C.axr(this.a,null),0.94+w*0.06,null,null),w)},
$S:381}
C.eqf.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.eqg.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.dc(B.e9(A.A,new C.bbb(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:381}
C.eqh.prototype={
$0(){return A.d.cn(this.a.d,0,C.V3(this.b))},
$S:0}
C.eld.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dI.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.72)],t):B.a([A.c.j(0.88),A.p9.j(0.75)],t)
r=B.I(A.b0.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b0.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b0.j(0.45+q),A.r,1)
t=B.p(p,B.W(A0.Zy,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bR(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.tH(A.ft,B.p(p,B.v(B.a([t,A.az,q,A.ao,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.ay:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:293}
C.emi.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.emj.prototype={
$1(d){return d.length!==0},
$S:3}
C.emk.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.ke
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_3:A.AZ}return w},
$S:677}
C.emn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dI.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aA.j(0.78)],s):B.a([A.c.j(0.92),A.mD.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.W(C.kp(v.w)?A.vc:A.pB,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a7(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.P7(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.P7(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.P7(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.P7(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.P7(v.f)
r=k.bGz(n,A.d.gL(r),t)
return B.p(l,B.bv(j,new B.a6Y(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dN(!1,A.Lt,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.W(A.nK,t?A.ay:A.bI,l,l,l,l),l,l,l,new C.eml(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aD,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.emm(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.af),l),A.aq),A.f,l,l,l,l,l,l,A.db,l,l,l,l)},
$S:95}
C.emm.prototype={
$0(){return this.a.adK(this.b)},
$S:0}
C.eml.prototype={
$0(){return this.a.As(this.b,this.c)},
$S:0}
C.enO.prototype={
$0(){var w=this.a
w.b41()
w.m(new C.enN())},
$S:0}
C.enN.prototype={
$0(){},
$S:0}
C.enP.prototype={
$1(d){return this.a.ahL(this.b.a,d)},
$S:2}
C.enQ.prototype={
$0(){this.a.d1(new C.enM(this.b))},
$S:0}
C.enM.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.enR.prototype={
$0(){this.a.d1(new C.enL(this.b))},
$S:0}
C.enL.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.enS.prototype={
$0(){this.a.d1(new C.enK(this.b))},
$S:0}
C.enK.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aC:A.ms},
$S:0}
C.enT.prototype={
$0(){this.a.d1(new C.enJ(this.b))},
$S:0}
C.enJ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.enU.prototype={
$0(){var w=this.a
w.d1(new C.enI(w,this.b))},
$S:0}
C.enI.prototype={
$0(){var w=this.b
return w.as=this.a.c_Z(w.as)},
$S:0}
C.enV.prototype={
$0(){return this.a.d1(new C.enH(this.b))},
$S:0}
C.enH.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.enW.prototype={
$0(){return this.a.d1(new C.enG(this.b))},
$S:0}
C.enG.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.enz.prototype={
$0(){return this.a.a15(this.b.a)},
$S:0}
C.enA.prototype={
$0(){this.a.ZD()
return null},
$S:0}
C.enB.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bS,x.w).w.a.a<900)w.ae2()
else w.m(new C.eny(w))},
$S:0}
C.eny.prototype={
$0(){return this.a.as=!0},
$S:0}
C.enC.prototype={
$0(){this.a.d1(new C.enx(this.b))},
$S:0}
C.enx.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.enD.prototype={
$0(){return this.a.d1(new C.enw(this.b))},
$S:0}
C.enw.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.enE.prototype={
$0(){return this.a.d1(new C.env(this.b))},
$S:0}
C.env.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.enF.prototype={
$0(){return this.a.ayb(null)},
$S:0}
C.emH.prototype={
$0(){this.a.D6()
return null},
$S:0}
C.emI.prototype={
$0(){this.a.a8V()
return null},
$S:0}
C.emK.prototype={
$1(d){return this.bhV(d)},
bhV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Jo(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bW(A.aA,null,new C.emC(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d1(new C.emD(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.emE(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d1(new C.emF(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hgu(q,new C.E_(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d1(new C.emG(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.afM(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:91}
C.emC.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e1A],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bG2:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.emB(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dk,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.emB.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.emD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.emE.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.emF.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.emG.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.emJ.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zf(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zf(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zf(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.afM(r?t:s.db)
s=s==null?t:s.b
return B.a([D.e6q,q,v,u,B.zf(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:126}
C.eqZ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAT(w,v)}},
$S:0}
C.er_.prototype={
$0(){this.a.D6()
return null},
$S:0}
C.enZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bQ1:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bw
return new B.C(A.fx,B.aE(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lz,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.enY(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:127}
C.enY.prototype={
$0(){var w=this.a
return w.m(new C.enX(w,this.b))},
$S:0}
C.enX.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eo_.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a1S:E.auO
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbJS():t.gbG_()
return B.ho(B.aE(u,B.p(u,D.akW,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ad(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a7(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.eo0.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i0O(v,w.a.c)},
$S:0}
C.epn.prototype={
$0(){return this.b.uS(this.a.a)},
$S:0}
C.epo.prototype={
$0(){return this.a.uS(D.mn)},
$S:0}
C.epp.prototype={
$0(){return this.a.uS(D.Hi)},
$S:0}
C.epA.prototype={
$0(){return this.a.uS(D.Hj)},
$S:0}
C.epL.prototype={
$0(){return this.a.uS(D.Hh)},
$S:0}
C.epW.prototype={
$0(){return this.a.pL("lab_report")},
$S:0}
C.eq2.prototype={
$0(){return this.a.pL("rubric")},
$S:0}
C.eq3.prototype={
$0(){return this.a.pL("minutes")},
$S:0}
C.eq4.prototype={
$0(){return this.a.pL("agenda")},
$S:0}
C.eq5.prototype={
$0(){return this.a.pL("timeline")},
$S:0}
C.eq6.prototype={
$0(){return this.a.pL(this.b.a)},
$S:0}
C.epq.prototype={
$0(){this.a.US()
return null},
$S:0}
C.epr.prototype={
$0(){this.a.UM()
return null},
$S:0}
C.eps.prototype={
$0(){return this.a.pL("table")},
$S:0}
C.ept.prototype={
$0(){return this.a.pL("sticky")},
$S:0}
C.epu.prototype={
$0(){return this.a.pL("divider")},
$S:0}
C.epv.prototype={
$0(){return this.a.pL("header_bar")},
$S:0}
C.epw.prototype={
$0(){return this.a.oK(D.be)},
$S:0}
C.epx.prototype={
$0(){return this.a.oK(D.eI)},
$S:0}
C.epy.prototype={
$0(){return this.a.oK(D.jx)},
$S:0}
C.epz.prototype={
$0(){return this.a.oK(D.C8)},
$S:0}
C.epB.prototype={
$0(){return this.a.oK(D.jy)},
$S:0}
C.epC.prototype={
$0(){return this.a.oK(D.kP)},
$S:0}
C.epD.prototype={
$0(){return this.a.oK(D.fp)},
$S:0}
C.epE.prototype={
$0(){this.a.GL()
return null},
$S:0}
C.epF.prototype={
$0(){this.a.MF()
return null},
$S:0}
C.epG.prototype={
$0(){return this.a.pL("quote")},
$S:0}
C.epH.prototype={
$0(){return this.a.a73()},
$S:0}
C.epI.prototype={
$0(){this.a.ZJ()
return null},
$S:0}
C.epJ.prototype={
$0(){var w=this.a
return w.m(new C.epd(w))},
$S:0}
C.epd.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.epK.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nO(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.epl(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epl.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.epM.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jB()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a5u.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b5
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a7(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a5u.t(0,q))u.push(B.ao(s,B.p(s,D.Na,A.f,s,s,D.Do,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fx,B.aE(s,B.ho(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.epk(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.epk.prototype={
$0(){this.a.a7l(this.b)
return null},
$S:0}
C.epN.prototype={
$0(){this.a.a7k(this.b)
return null},
$S:0}
C.epO.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hxP(d),p=this.a,o=B.m(8),n=p.gdq()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b5
v=p.gdq()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rd(4294967295,r,0,0,r,"preview_"+w,D.pO,"","","",D.dc)
C.hds(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.heM(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.alv,A.f,r,r,D.Do,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.j6,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.q,u,r),A.d0,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.ay:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.epj(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.epj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdq()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.nO(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d1(new C.ep9(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ep9.prototype={
$0(){return C.hds(this.a,this.b.a)},
$S:0}
C.epm.prototype={
bhW(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a5t.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nO(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bhW(d,e)},
$S:z+91}
C.eq7.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("J<1,r>")
v=B.B(new B.J(d,new C.eq9(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.y,w,w,w,w,A.aQ)},
$S:z+92}
C.eq9.prototype={
$1(d){var w=this
return w.a.b5m(d,w.b===d,w.c,w.d,new C.eq8(w.e,d),!D.a5t.t(0,d))},
$S:z+25}
C.eq8.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.epP.prototype={
$1(d){this.b.$2(d,new C.epi(this.a,d,this.c))
return null},
$S:z+26}
C.epi.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bBJ(u,new C.ep8(v,this.c,w),w)},
$S:0}
C.ep8.prototype={
$0(){return this.a.d1(new C.ep6(this.b,this.c))},
$S:0}
C.ep6.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epQ.prototype={
$1(d){this.b.$2(d,new C.eph(this.a,d))
return null},
$S:z+26}
C.eph.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fHX(u,new C.ep7(v,w),w)},
$S:0}
C.ep7.prototype={
$0(){var w=this.a
return w.d1(new C.ep5(w,this.b))},
$S:0}
C.ep5.prototype={
$0(){return this.a.gdq().r=this.b},
$S:0}
C.epR.prototype={
$0(){var w=this.a
return w.m(new C.epg(w))},
$S:0}
C.epg.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.epS.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bAT(w,v)}},
$S:0}
C.epT.prototype={
$0(){this.a.Hy()
return null},
$S:0}
C.epU.prototype={
$0(){return this.a.a73()},
$S:0}
C.epV.prototype={
$0(){var w=this.a,v=w.jB()
if(v!=null&&v.b===D.cQ)w.d1(new C.epf(v))},
$S:0}
C.epf.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.epX.prototype={
$0(){this.a.D6()
return null},
$S:0}
C.epY.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.EL(v,!0)
return null},
$S:0}
C.epZ.prototype={
$0(){this.a.d1(new C.epe(this.b))},
$S:0}
C.epe.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cs:A.O},
$S:0}
C.eq_.prototype={
$0(){this.a.d1(new C.epc(this.b))},
$S:0}
C.epc.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bl:A.cD},
$S:0}
C.eq0.prototype={
$0(){this.a.d1(new C.epb(this.b))},
$S:0}
C.epb.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aC:A.ms},
$S:0}
C.eq1.prototype={
$0(){this.a.d1(new C.epa(this.b))},
$S:0}
C.epa.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.elM.prototype={
$1(d){return this.bhT(d)},
bhT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nO(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d1(new C.elL(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:191}
C.elL.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.d1(new C.eqt(w,this.b))},
$S:0}
C.eqt.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
return w.d1(new C.eqs(w,this.b))},
$S:0}
C.eqs.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.emU.prototype={
$0(){return this.a.d1(new C.emT(this.b))},
$S:0}
C.emT.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.emV.prototype={
$0(){return this.a.d1(new C.emS(this.b))},
$S:0}
C.emS.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.enr.prototype={
$1(d){var w=x.gh
w=B.B(new B.J(D.anb,new C.enq(),w),w.k("ai.E"))
return w},
$S:z+94}
C.enq.prototype={
$1(d){var w=null
return B.zf(B.d(d.b,w,w,w,w,w,w,A.mv,w,w,w),48,d,x.fO)},
$S:z+95}
C.eqH.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:36}
C.eqG.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jX()?q:new C.eqE(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b5:A.cm
v=B.I(v,A.r,o?2:1)
u=r.d?A.cC:A.c
t=B.bY(0,C.heM(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.q,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nb,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.agX,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eqF(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:73}
C.eqF.prototype={
$0(){var w=this.a
return w.m(new C.eqA(w,this.b))},
$S:0}
C.eqA.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Jx()},
$S:0}
C.eqE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bW(null,null,new C.eqB(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eqC(q,s))
q.aPO()}else if(r==="del"){q=t.a
q.m(new C.eqD(q,s))
q.aP0()}else if(r==="up")t.a.b0I(s,s-1)
else if(r==="down")t.a.b0I(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqB.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHG,w,w,w,w,new C.eqw(d),!1,w,w,w,w,w,w,w,D.f5b,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bHz,w,w,w,w,new C.eqx(d),!1,w,w,w,w,w,w,w,A.w0,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bGR,w,w,w,w,new C.eqy(d),!1,w,w,w,w,w,w,w,D.fcZ,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bIS,w,w,w,w,new C.eqz(d),!1,w,w,w,w,w,w,w,D.f50,w,w,w))
return B.bm(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.eqw.prototype={
$0(){B.a5(this.a,!1).N("dup")
return null},
$S:0}
C.eqx.prototype={
$0(){B.a5(this.a,!1).N("del")
return null},
$S:0}
C.eqy.prototype={
$0(){B.a5(this.a,!1).N("up")
return null},
$S:0}
C.eqz.prototype={
$0(){B.a5(this.a,!1).N("down")
return null},
$S:0}
C.eqC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqI.prototype={
$0(){return this.a.a73()},
$S:0}
C.emb.prototype={
$0(){var w=this.a
w.b41()
w.ayb(null)},
$S:0}
C.ema.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ad(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a7(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a7(A.ax,A.aD,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.bZ(A.kn,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.em9(this.a,e.b,e.d,q),B.T(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.ay:A.bI,p,p,p,p,p,p,p,p,p,p,p,A.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bZ(new B.an(A.W,p,A.aa,A.f,s,new B.cz("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:384}
C.em9.prototype={
$1(d){var w=this
return w.a.bBY(d,w.b,w.c,w.d)},
$S:z+23}
C.elZ.prototype={
$0(){var w=this
if(w.b){w.a.MO(w.c)
return}if(w.d){w.a.a71(w.c)
return}if(w.e){w.a.afl(w.c)
return}if(w.f)w.a.b4x(w.c)},
$S:0}
C.em_.prototype={
$0(){this.a.MO(this.b)
return null},
$S:0}
C.em0.prototype={
$0(){return this.a.a15(this.b.a)},
$S:0}
C.em1.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.elY(u,d,w.c,w.d))
v.Hc()
v.nW()
v.p_()},
$S:18}
C.elY.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.em2.prototype={
$1(d){return this.a.ahL(this.b.a,d)},
$S:2}
C.em4.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fTx(w))u.a.MO(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b4x(v)},
$S:0}
C.em3.prototype={
$0(){return this.a.a15(this.b.a)},
$S:0}
C.em5.prototype={
$1(d){var w=this,v=w.a
v.m(new C.elX(w.b,d,w.c,w.d))
v.Hc()
v.nW()
v.p_()},
$S:18}
C.elX.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.em6.prototype={
$1(d){var w=this.a
w.m(new C.elW(this.b,d))
w.Hc()
w.nW()
w.p_()},
$S:212}
C.elW.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.em7.prototype={
$0(){var w=this.a
w.m(new C.elV(this.b))
w.Hc()
w.nW()
w.p_()},
$S:0}
C.elV.prototype={
$0(){this.a.r=C.heh()},
$S:0}
C.em8.prototype={
$0(){return this.a.a15(this.b.a)},
$S:0}
C.eo2.prototype={
$0(){var w=this.a
return w.m(new C.eo1(w))},
$S:0}
C.eo1.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eo3.prototype={
$1(d){return this.a.cy9(this.b.a,d)},
$S:2}
C.en7.prototype={
$1(d){var w
this.a.d1(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.en8.prototype={
$1(d){return this.a.$1(new C.en6(this.b,d))},
$S:6}
C.en6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.en9.prototype={
$1(d){return this.a.$1(new C.en5(this.b,d))},
$S:6}
C.en5.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ena.prototype={
$1(d){return this.a.$1(new C.en4(this.b,d))},
$S:6}
C.en4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.enb.prototype={
$1(d){return this.a.$1(new C.en3(this.b,d))},
$S:6}
C.en3.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.enc.prototype={
$1(d){return this.a.$1(new C.en2(this.b,d))},
$S:6}
C.en2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.end.prototype={
$1(d){return this.b.$1(new C.en1(this.a,this.c))},
$S:9}
C.en1.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ene.prototype={
$1(d){return this.b.$1(new C.en0(this.a,this.c))},
$S:9}
C.en0.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.enf.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.en_(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:386}
C.en_.prototype={
$0(){return this.a.$1(new C.emX(this.b,this.c))},
$S:0}
C.emX.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eng.prototype={
$1(d){return this.a.$1(new C.emZ(this.b,d))},
$S:1705}
C.emZ.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.enh.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.emY(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:386}
C.emY.prototype={
$0(){return this.a.$1(new C.emW(this.b,this.c))},
$S:0}
C.emW.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eni.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).ph()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eH()}v.a.aqS()},
$S:0}
C.enl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dI.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b0,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.W(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.W(A.tG,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mV,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.ex(new B.a6(48,48,new B.an(A.A,n,A.aa,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aD,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.af)},
$S:138}
C.ekV.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dI.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b0,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.ex(B.v(B.a([B.e9(A.A,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jB,A.L,p,p)],x.p),A.m,p,A.ba,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aD,A.x,u,p,p),A.n),p,A.EQ,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.af)},
$S:138}
C.ep_.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.T,!0,w,!0,A.q,w,B.aM(),u,w,w,w,w,w,2,A.aml,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.eoY(d),w,w),B.bJ(A.oW,new C.eoZ(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eoY.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eoZ.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).N(w)
return null},
$S:0}
C.cYO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dI.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.eu.av(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dX.av(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ad(w*2,A.G,A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2).j(0.18+w*0.12),A.J,32+w*10),D.a9Q],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.b1,0.9,A.x,k,0,B.a([A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bR(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kp(j.a.c.w)?D.tO:M.n2).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kp(m)?D.tO:M.n2
s=B.a([new B.ad(0,A.G,A.d.gL(C.kp(m)?D.tO:M.n2).j(0.45+w*0.2),A.cy,18)],s)
m=x.p
l=B.a([p,B.e9(A.A,B.p(k,B.W(C.kp(j.a.c.w)?A.vc:A.pB,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aD,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.q,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fV,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.eYy,A.L,k,k),A.at,B.d(j.gctd(),k,k,k,k,k,k,D.f21,A.L,k,k),A.az],m)
p=j.a.c
if(p.z){p=p.gRt()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kp(j.a.c.w)?D.tO:M.n2).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.J5(A.xA,"Download PDF","pdf",A.d7,j.Iq(0),!1,k))
p=j.a.c
if(!p.z||p.gRt()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J5(A.kJ,"Transfer to "+C.hej(p==null?"":p),"transfer_hati",A.aU,j.Iq(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Iq(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ao,new C.J5(D.bzl,"Rename presentation","rename",A.c8,n,!1,k),A.ao,new C.J5(A.aiA,"Duplicate","duplicate",A.b4,j.Iq(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.J5(A.e4,"Delete presentation","delete",A.aB,j.Iq(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Iq(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Iq(n)
s.push(B.dU(B.dc(B.bK(!1,E.aOX,k,k,!0,k,k,new C.cYN(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bI,k,k,k,A.au,k,D.bqq,k,k,k,k,k,A.kh,k,k)),n),new B.u(0,(1-p)*8)))
return B.e9(A.A,B.dc(B.aF(!1,A.a1,!0,k,B.p(k,B.bv(q,new B.an(A.W,k,A.aa,A.q,B.a([o,new B.C(D.bpz,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Ur,new B.o(A.aA,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.af),i),0.88+u*0.12,k,k)},
$S:45}
C.cYN.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.cZ9.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cZa.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cYL.prototype={
$1(d){var w=this.a
return w.m(new C.cYH(w))},
$S:22}
C.cYH.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cYM.prototype={
$1(d){var w=this.a
return w.m(new C.cYG(w))},
$S:50}
C.cYG.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYK.prototype={
$0(){var w=this.a
return w.m(new C.cYI(w))},
$S:0}
C.cYI.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cYJ.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.erF.prototype={
$0(){return $.biF=!$.biF},
$S:0}
C.erv.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaSV())u.auI()},
$S:0}
C.erE.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.erw.prototype={
$0(){return this.a.y=!0},
$S:0}
C.erx.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.auI()},
$S:0}
C.err.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.ers.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ert.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eru.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.erC.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.q,w,null)},
$S:1706}
C.erD.prototype={
$2(d,e){var w
if(e.gc2(e)===A.hQ)return new B.cX(e,!1,d,null)
w=this.a
return w.crd(w.e,d,e)},
$S:380}
C.ery.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fu((1-v.gp(0))*1.5708)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.erz.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jL((1-v.gp(0))*1.5708)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.erA.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fu(v.gp(0)*0.8)
w.jL(v.gp(0)*0.35)
return B.fr(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.erB.prototype={
$2(d,e){var w=B.dl(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fu(-v.gp(0)*1.2)
return B.fr(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.erG.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gXV().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gXV().x
t===$&&B.c()
return new C.b_x(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.I3(v.c,t,!0,new B.cz("cine"+u,x.W))},
$S:657}
C.erI.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bS,x.w).w.a.a*0.55)w.auI()
else w.cfZ()},
$S:50}
C.erH.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fys.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:410}
C.fyB.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eh(B.a([B.bK(!1,A.dd,w,w,!0,w,w,new C.fyy(d),w,w),B.bK(!1,D.fk_,w,w,!0,w,w,new C.fyz(d,this.b,v),w,w),B.bJ(A.aPd,new C.fyA(d,v,this.c),w)],x.p),w,w,L.rZ,new B.a6(320,w,t,w),w,w,w,w,D.flq,w)},
$S:19}
C.fyy.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fyz.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
C.fUb(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fyA.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aOu(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aNU(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fyr.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cbR.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fyx.prototype={
$1(d){return d.ad()},
$S:z+14}
C.f7f.prototype={
$1(d){return C.fU9(C.V3(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fHc.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.fHd.prototype={
$4(d,e,f,g){var w=A.cq.av(0,e.gp(0))
return B.dc(B.e9(A.A,D.fHV,0.94+w*0.06,null,null),w)},
$S:381}
C.fHe.prototype={
$1(d){var w=this
return new C.V5(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.erb.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.er7.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.era.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.V6(u,this.b,w.gaMn(),v,null)},
$S:z+99}
C.er8.prototype={
$0(){return this.a.f=!0},
$S:0}
C.er9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.erc.prototype={
$0(){return this.a.f=!0},
$S:0}
C.erd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.erg.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.erh.prototype={
$0(){var w=this.a
return w.m(new C.erf(w))},
$S:0}
C.erf.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.m(new C.ere(w))},
$S:0}
C.ere.prototype={
$0(){return this.a.d="all"},
$S:0}
C.erj.prototype={
$1(d){return this.a.bGA(d,this.b)},
$S:z+100}
C.er6.prototype={
$0(){var w=this.a
return w.m(new C.er5(w,this.b))},
$S:0}
C.er5.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.erk.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.erl.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.erm.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ern.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.ero.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fA(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.eLg)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ekP.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ekO())},
$S:0}
C.ekO.prototype={
$0(){},
$S:0}
C.ekQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fE()},
$S:8}
C.ekL.prototype={
$1(d){return this.a.m(new C.ekK())},
$S:2}
C.ekK.prototype={
$0(){},
$S:0}
C.ekM.prototype={
$1(d){return this.a.aXE()},
$S:2}
C.ekN.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.erq.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pB(),$async$$0)
case 2:if(t.c!=null)t.m(new C.erp(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.erp.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fsM.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eu(new B.k9(this.c,new C.fsL(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:215}
C.fsL.prototype={
$3(d,e,f){return new C.I3(e,!1,!1,new B.cz(e.a,x.W))},
$S:z+102}
C.fsN.prototype={
$1(d){var w=null
return B.oa(!1,B.av(new C.bt3(this.a,this.b,w),w,w,w),w,x.z)},
$S:331}
C.fsR.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gmn(),$async$$0)
case 3:w=4
return B.b(B.bN(A.mS,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gmn(),$async$$0)
case 5:s=$.aT.ak$.x.h(0,t.a)
r=s==null?null:s.gb7()
if(!(r instanceof B.ql))throw B.U("Could not draw the slide.")
u=r.m7(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fsS.prototype={
bis(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hm(A.fS),$async$$1)
case 3:r=f
if(r==null)throw B.U("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hK([J.fa(A.dF.gaP(r))],"image/png"))
t.toString
s=Am.fL6(t)
w=4
return B.b(new B.pN(s,"load",!1,x.ev).gL(0).cN(0,A.jn),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bis(d)},
$S:1710}
C.fsO.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:142}
C.fsP.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fL(0)},
$S:142}
C.fsQ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f1C.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eV6,A.L,w,w)},
$S:1711}
C.f1D.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.mf(A.bm,w,A.dO,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.e9k.prototype={
$1(d){this.a.Z4()
return null},
$S:14}
C.e9i.prototype={
$0(){return this.a.e=D.blB},
$S:0}
C.e9j.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cep.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.ceq.prototype={
$2(d,e){return(d|e)>>>0},
$S:77};(function aliases(){var w=C.aKu.prototype
w.bsZ=w.q
w=C.aJY.prototype
w.bsr=w.q
w=C.aJJ.prototype
w.bsb=w.q
w=C.aJX.prototype
w.bsq=w.q
w=C.aKs.prototype
w.bsX=w.q
w=C.aLN.prototype
w.bur=w.q
w=C.aIE.prototype
w.br3=w.q
w=C.aKG.prototype
w.bta=w.q
w=C.aKH.prototype
w.btb=w.q
w=C.b1c.prototype
w.bnI=w.aBd})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hZH","amh",104)
v(C.aHD.prototype,"gc0j","Y1",0)
var r
u(r=C.awf.prototype,"gcsz","csA",38)
v(r,"gc14","ac4",0)
v(r=C.awb.prototype,"gaWg","Dz",3)
v(r,"gc11","c12",3)
v(r,"gav_","xk",0)
v(r,"gav0","I5",0)
t(C,"i_5","hvA",105)
v(C.aCj.prototype,"gc3y","c3z",3)
s(C,"i_g",0,null,["$4$paper$photo$request$template"],["fzR"],106,0)
s(C,"i_f",0,null,["$5$doc$history$instruction$photo$template"],["bAb"],107,0)
v(r=C.aCC.prototype,"gc4e","In",0)
v(r,"gbG2","VU",0)
v(r,"gc4h","acS",0)
v(r,"gc4g","YR",0)
v(r,"gaXj","DR",0)
v(C.aCG.prototype,"gc4m","YT",0)
v(r=C.aE2.prototype,"gaXw","P3",0)
v(r,"gckH","b0O",3)
v(r,"gctZ","azr",86)
v(r,"gbJI","a8Z",0)
v(r,"gc4N","A5",0)
v(r=C.aFX.prototype,"gceI","a_d",0)
v(r,"gceQ","a_g",0)
v(r,"gbz1","a7r",0)
v(r,"gc4R","ad3",0)
v(C.aFW.prototype,"gc4S","ad4",0)
v(C.azX.prototype,"gby0","a7e",0)
v(C.ayk.prototype,"gc4T","Z3",0)
w(C,"i_t","hYo",12)
w(C,"i_r","hVl",12)
w(C,"i_s","hXo",12)
v(r=C.aCW.prototype,"gcx5","cx6",3)
v(r,"gciY","ciZ",3)
u(r,"gDX","adK",7)
v(r,"gbDF","aq2",3)
u(r,"gDY","aYN",7)
v(r,"gc7_","adr",0)
v(r,"gc5R","adq",0)
v(r,"gc99","adL",0)
v(r,"gbG_","a8A",0)
v(r,"gca2","ZD",0)
v(r,"gca3","ae1",0)
v(r,"gcaA","ae8",0)
v(r,"gc9m","adO",0)
v(r,"gbJS","a92",0)
v(r,"gaPN","aPO",3)
v(r,"gaP_","aP0",3)
v(r,"gaKI","aKJ",3)
v(r,"gaOZ","aqS",3)
u(r,"gbyh","byi",80)
v(r,"gaz_","b3P",3)
v(r,"gc5T","c5U",3)
v(r,"gbUJ","bUK",3)
v(r,"gbIq","bIr",3)
v(r=C.aCZ.prototype,"gcvZ","cw_",3)
v(r,"gcvE","cvF",3)
t(C,"i_u","hYF",2)
v(r=C.aCX.prototype,"gc4Z","Is",0)
v(r,"gcmF","Qu",0)
v(r,"gc4W","Ir",0)
v(r,"gcyk","a1I",0)
v(r,"gcaM","aef",0)
v(C.aCV.prototype,"gc5_","aXE",3)
v(r=C.aCY.prototype,"gbKD","a9c",0)
u(r,"gc4X","c4Y",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nI,C.QY,C.bFL,C.bE6,C.cuh,C.cuf,C.bLH,C.b6T,C.cug,C.bCH,C.cej,C.ceh,C.cei,C.ceg,C.arq,C.cef,C.bMA,C.o8,C.aDx,C.jg,C.nv,C.a6X,C.z2,C.l7,C.ok,C.lV,C.z4,C.nz,C.a74,C.apO,C.b_y,C.e8K,C.l4,C.E8,C.er,C.iU,C.E_,C.xc,C.eG,C.ly,C.hY,C.jz,C.a75,C.ae2,C.b_z,C.b1c,C.a1V])
u(B.kc,[C.cC7,C.bX_,C.fnY,C.cDD,C.cD_,C.ftu,C.dUR,C.dUQ,C.e9n,C.e9m,C.fuT,C.f8n,C.f8o,C.cae,C.caf,C.cag,C.edL,C.eMd,C.eLB,C.eLA,C.eME,C.eMb,C.eM4,C.eMn,C.eN3,C.ffc,C.eT_,C.eSZ,C.eTs,C.e8N,C.fyo,C.dQA,C.fEL,C.fvf,C.cbJ,C.cbH,C.cbM,C.fvK,C.fvL,C.fvM,C.fvN,C.cbt,C.cbu,C.dDd,C.cbq,C.fvJ,C.f_a,C.dOM,C.cbj,C.e8t,C.ftj,C.eop,C.eoO,C.eoL,C.eoK,C.eoV,C.eoU,C.eqp,C.eqo,C.eoE,C.eoD,C.eld,C.emn,C.epm,C.eqH,C.eqG,C.ema,C.enl,C.ekV,C.cYO,C.erC,C.erD,C.ery,C.erz,C.erA,C.erB,C.erG,C.cbR,C.erb,C.erm,C.ceq])
u(B.hS,[C.cC8,C.cC9,C.bMB,C.flw,C.bWZ,C.bX1,C.fBf,C.f08,C.f0_,C.f0f,C.f7g,C.f7h,C.fnZ,C.fnX,C.fAK,C.flc,C.fBB,C.cDt,C.cDy,C.cDA,C.cDw,C.cDB,C.cDu,C.cDC,C.cDp,C.cDm,C.cDl,C.cDs,C.cCV,C.cCT,C.fsw,C.fsx,C.fbF,C.ftv,C.ftB,C.faI,C.c6y,C.fsu,C.fsv,C.fnk,C.fnl,C.ftA,C.ftw,C.fty,C.ftz,C.ftx,C.fF2,C.fno,C.fnp,C.fns,C.fnt,C.fnw,C.fnx,C.fGv,C.f8O,C.fGG,C.ecF,C.ecG,C.ecH,C.ecn,C.ecz,C.ecA,C.ecC,C.cad,C.cab,C.cac,C.fta,C.ftc,C.ftb,C.f8p,C.f8q,C.fGJ,C.edQ,C.edR,C.edI,C.edJ,C.edM,C.edN,C.fGZ,C.eN4,C.eMu,C.eMe,C.eMr,C.eLw,C.eLx,C.eLy,C.eLC,C.eLD,C.eMU,C.eN0,C.eN2,C.eMD,C.eMF,C.eMJ,C.eMK,C.eML,C.eMP,C.eMG,C.eMH,C.eLO,C.eLP,C.eLQ,C.eLR,C.eLS,C.eLT,C.eLU,C.eLV,C.eLW,C.eL9,C.eLa,C.eLb,C.eLc,C.eLe,C.eLf,C.eLI,C.eLJ,C.eLK,C.eLL,C.eLM,C.eLj,C.eLk,C.eLl,C.eLm,C.eM3,C.eMm,C.fqz,C.fqy,C.cbA,C.ffb,C.fyk,C.fyd,C.fyg,C.fwd,C.fwe,C.fwf,C.fqG,C.fqF,C.fqE,C.fqC,C.f8k,C.f8l,C.f8m,C.fHa,C.eT1,C.eT2,C.eSW,C.eSQ,C.eTl,C.eTm,C.eTo,C.eTp,C.eTk,C.fH9,C.eSH,C.fer,C.e8M,C.fym,C.fyn,C.fyp,C.fyi,C.fyj,C.fGn,C.dfC,C.dfI,C.e8L,C.f4R,C.f4T,C.f4S,C.f4Q,C.frK,C.frM,C.f6Q,C.fxP,C.fxQ,C.fxR,C.fy1,C.fy6,C.fy7,C.fy8,C.fy9,C.fya,C.fyb,C.fyc,C.fxS,C.fxT,C.fxU,C.fxV,C.fxW,C.fxX,C.fxY,C.fxZ,C.fy_,C.fy0,C.fy2,C.fy3,C.fy4,C.fy5,C.fpA,C.fed,C.fec,C.fyv,C.dQB,C.dQz,C.eRR,C.c69,C.c6b,C.fEN,C.d4X,C.d4Z,C.fEM,C.fEK,C.fH8,C.fvb,C.d4x,C.fnA,C.fnB,C.cby,C.cbz,C.cbx,C.cbn,C.cbo,C.cbk,C.cbl,C.cbm,C.cbP,C.cbK,C.cbF,C.cbG,C.cbI,C.cbL,C.cbN,C.fvO,C.cbs,C.cbv,C.cbw,C.cbC,C.cbD,C.fyC,C.fxJ,C.cbr,C.cbp,C.fvI,C.fgx,C.cbi,C.ePw,C.fjl,C.er2,C.ens,C.ent,C.ep2,C.eoR,C.eoS,C.emQ,C.eqO,C.eqP,C.eqQ,C.eme,C.eow,C.eoy,C.eo8,C.eo5,C.eno,C.enp,C.eof,C.emg,C.eor,C.eos,C.eoq,C.eou,C.eot,C.eoM,C.eoN,C.eoP,C.eoI,C.emz,C.emw,C.eoW,C.emo,C.eqN,C.ekX,C.emr,C.emq,C.elF,C.elK,C.elI,C.elG,C.eqV,C.eqW,C.eqX,C.eqU,C.eqr,C.eqq,C.eqk,C.eqm,C.eqc,C.eqL,C.eqJ,C.el4,C.el0,C.enm,C.elO,C.elf,C.ele,C.elB,C.elC,C.emO,C.elQ,C.elU,C.eoF,C.eqd,C.eqe,C.eqf,C.eqg,C.emi,C.emj,C.emk,C.enP,C.emK,C.emC,C.emJ,C.enZ,C.eo_,C.epM,C.epO,C.eq7,C.eq9,C.epP,C.epQ,C.elM,C.enr,C.enq,C.eqB,C.em9,C.em1,C.em2,C.em5,C.em6,C.eo3,C.en7,C.en8,C.en9,C.ena,C.enb,C.enc,C.end,C.ene,C.enf,C.eng,C.enh,C.ep_,C.cYL,C.cYM,C.erI,C.fys,C.fyB,C.fyr,C.fyx,C.f7f,C.fHc,C.fHd,C.fHe,C.era,C.erj,C.ekQ,C.ekL,C.ekM,C.fsM,C.fsL,C.fsN,C.fsS,C.fsO,C.fsP,C.f1C,C.f1D,C.e9k,C.cep])
u(B.j2,[C.cCa,C.f04,C.f09,C.f0a,C.f05,C.f06,C.f07,C.f_Y,C.f_Z,C.f00,C.f01,C.f0e,C.f0d,C.f03,C.f02,C.f0b,C.f0c,C.f0h,C.f0i,C.f0g,C.cDv,C.cDz,C.cDx,C.cDn,C.cDo,C.cDq,C.cDj,C.cDk,C.cDr,C.cDi,C.cDh,C.cDg,C.cCK,C.cCJ,C.cCM,C.cCU,C.cCN,C.cCL,C.cCP,C.cCQ,C.cCR,C.cCO,C.cCS,C.cCW,C.cCX,C.cCY,C.cCZ,C.fni,C.fnj,C.fng,C.fnh,C.e48,C.e46,C.e47,C.e49,C.e4a,C.dUP,C.fnm,C.fnn,C.fnq,C.fnr,C.fnu,C.fnv,C.e9l,C.fvi,C.fvh,C.ecE,C.ecD,C.ech,C.ecd,C.eco,C.ecp,C.ecq,C.ecj,C.eck,C.ecl,C.ecm,C.eci,C.ecf,C.ecg,C.ecw,C.ecx,C.ecv,C.ecy,C.ecu,C.ect,C.ecs,C.ecB,C.ecr,C.ece,C.edP,C.edD,C.edE,C.edK,C.edF,C.edH,C.edG,C.edO,C.eLX,C.eMk,C.eLG,C.eLH,C.eLE,C.eLF,C.eMq,C.eMp,C.eMo,C.eMt,C.eMs,C.eLv,C.eLz,C.eLu,C.eLt,C.eLq,C.eLs,C.eLr,C.eN1,C.eMV,C.eMT,C.eMW,C.eMS,C.eMX,C.eMR,C.eMY,C.eMZ,C.eN_,C.eMQ,C.eMC,C.eMx,C.eMI,C.eMB,C.eMM,C.eMA,C.eMN,C.eMz,C.eMO,C.eMy,C.eMh,C.eMg,C.eMi,C.eMf,C.eMj,C.eM9,C.eM8,C.eMa,C.eM7,C.eM6,C.eM5,C.eLd,C.eL8,C.eLn,C.eLi,C.eLo,C.eLh,C.eLp,C.eLg,C.eMc,C.eM0,C.eM_,C.eM1,C.eLZ,C.eM2,C.eLY,C.eMl,C.eMw,C.eMv,C.eLN,C.fyf,C.fyh,C.fyl,C.fqD,C.ft3,C.ft1,C.ft2,C.eT3,C.eT4,C.eT0,C.eSV,C.eSU,C.eSX,C.eSY,C.eSK,C.eSL,C.eSN,C.eSO,C.eSP,C.eSM,C.eSR,C.eTh,C.eTi,C.eTg,C.eTj,C.eTf,C.eTe,C.eTd,C.eTn,C.eTc,C.eTb,C.eTa,C.eTq,C.eT9,C.eTr,C.eT8,C.eT7,C.eSS,C.eST,C.eT6,C.eT5,C.eSD,C.eSE,C.eSF,C.eSG,C.eSC,C.eSI,C.eSJ,C.dfB,C.dfD,C.dfG,C.dfH,C.dfF,C.dfE,C.frL,C.fpB,C.c6a,C.c6c,C.d4Q,C.d4V,C.d4W,C.d4U,C.d4T,C.d4Y,C.d4S,C.d4R,C.d5_,C.fEJ,C.dbB,C.dbC,C.dbD,C.fny,C.fnz,C.cbQ,C.ekR,C.ekS,C.ekT,C.ekU,C.fgv,C.fgw,C.dOO,C.dON,C.d1M,C.d1L,C.er4,C.er3,C.enu,C.eqa,C.er0,C.ep0,C.eqR,C.eqS,C.er1,C.eo9,C.emc,C.emd,C.eox,C.eo7,C.eo4,C.eo6,C.eoa,C.eob,C.eoc,C.eod,C.eoe,C.eog,C.emh,C.eoj,C.eok,C.eol,C.eom,C.eon,C.eoo,C.eoi,C.eov,C.eoJ,C.eoH,C.eoQ,C.eoh,C.emx,C.emy,C.emA,C.eoT,C.eoX,C.elb,C.emv,C.emt,C.ep4,C.emp,C.ep3,C.emf,C.emR,C.eqM,C.eqb,C.elc,C.el9,C.el_,C.ekW,C.ekY,C.ems,C.elE,C.elJ,C.elH,C.elD,C.eoG,C.eqY,C.eqn,C.eqi,C.eqj,C.eql,C.enk,C.enj,C.eqK,C.el2,C.el3,C.el5,C.el6,C.ela,C.el1,C.ep1,C.eqT,C.enn,C.elN,C.ekZ,C.emP,C.el7,C.elg,C.elh,C.eli,C.elt,C.elw,C.elx,C.ely,C.elz,C.elA,C.elj,C.elk,C.ell,C.elm,C.eln,C.elo,C.elp,C.elq,C.elr,C.els,C.elu,C.elv,C.emN,C.emM,C.emL,C.el8,C.elR,C.elP,C.elS,C.elT,C.emu,C.eoB,C.eoC,C.eoz,C.eoA,C.eqh,C.emm,C.eml,C.enO,C.enN,C.enQ,C.enM,C.enR,C.enL,C.enS,C.enK,C.enT,C.enJ,C.enU,C.enI,C.enV,C.enH,C.enW,C.enG,C.enz,C.enA,C.enB,C.eny,C.enC,C.enx,C.enD,C.enw,C.enE,C.env,C.enF,C.emH,C.emI,C.emB,C.emD,C.emE,C.emF,C.emG,C.eqZ,C.er_,C.enY,C.enX,C.eo0,C.epn,C.epo,C.epp,C.epA,C.epL,C.epW,C.eq2,C.eq3,C.eq4,C.eq5,C.eq6,C.epq,C.epr,C.eps,C.ept,C.epu,C.epv,C.epw,C.epx,C.epy,C.epz,C.epB,C.epC,C.epD,C.epE,C.epF,C.epG,C.epH,C.epI,C.epJ,C.epd,C.epK,C.epl,C.epk,C.epN,C.epj,C.ep9,C.eq8,C.epi,C.ep8,C.ep6,C.eph,C.ep7,C.ep5,C.epR,C.epg,C.epS,C.epT,C.epU,C.epV,C.epf,C.epX,C.epY,C.epZ,C.epe,C.eq_,C.epc,C.eq0,C.epb,C.eq1,C.epa,C.elL,C.equ,C.eqt,C.eqv,C.eqs,C.emU,C.emT,C.emV,C.emS,C.eqF,C.eqA,C.eqE,C.eqw,C.eqx,C.eqy,C.eqz,C.eqC,C.eqD,C.eqI,C.emb,C.elZ,C.em_,C.em0,C.elY,C.em4,C.em3,C.elX,C.elW,C.em7,C.elV,C.em8,C.eo2,C.eo1,C.en6,C.en5,C.en4,C.en3,C.en2,C.en1,C.en0,C.en_,C.emX,C.emZ,C.emY,C.emW,C.eni,C.eoY,C.eoZ,C.cYN,C.cZ9,C.cZa,C.cYH,C.cYG,C.cYK,C.cYI,C.cYJ,C.erF,C.erv,C.erE,C.erw,C.erx,C.err,C.ers,C.ert,C.eru,C.erH,C.fyy,C.fyz,C.fyA,C.er7,C.er8,C.er9,C.erc,C.erd,C.erg,C.erh,C.erf,C.eri,C.ere,C.er6,C.er5,C.erk,C.erl,C.ern,C.ero,C.ekP,C.ekO,C.ekK,C.ekN,C.erq,C.erp,C.fsR,C.fsQ,C.e9i,C.e9j])
t(C.aPQ,B.H)
u(B.m_,[C.a2S,C.avI,C.aup,C.xa,C.xd,C.kJ,C.rZ,C.AY,C.rc,C.vE,C.aqn,C.I4,C.apN,C.us,C.mn,C.hv,C.a7H])
u(C.bLH,[C.cui,C.bLI])
u(C.cej,[C.cen,C.arp])
t(C.cem,C.ceh)
t(C.cel,C.ceg)
t(C.ceo,C.cel)
t(C.cek,C.cei)
t(C.cee,C.cef)
t(C.b8r,B.oB)
t(C.cof,B.atR)
t(C.a7t,B.wY)
t(C.aUd,B.dG)
t(C.azf,B.asK)
u(B.ag,[C.a_V,C.XI,C.XG,C.aoZ,C.UR,C.UU,C.ZZ,C.a_t,C.a_s,C.aCv,C.YR,C.MK,C.Yp,C.YK,C.an_,C.aHk,C.U5,C.ay4,C.a6N,C.Na,C.axr,C.J5,C.ZB,C.V5,C.V6,C.aCU,C.apS,C.a6O])
u(B.ah,[C.aHD,C.awf,C.awb,C.aCj,C.aCC,C.aCG,C.aE2,C.aFX,C.aFW,C.aKu,C.azX,C.aJY,C.ayk,C.beg,C.aJJ,C.aLN,C.aJX,C.bca,C.aKs,C.aKG,C.aIE,C.baX,C.aKH,C.aCX,C.biE,C.aCV,C.aCY,C.bin])
u(B.au,[C.awd,C.acb,C.abB,C.bhq,C.ace,C.adT,C.b_a,C.bqG,C.b_u,C.bjY,C.bpg,C.aYo,C.b_x,C.ach,C.acz,C.b_v,C.I3,C.aYr,C.bbb,C.ON,C.Je,C.bfN,C.bfM,C.bt3])
u(B.GC,[C.baE,C.bs4,C.aHX,C.bdj,C.bpE])
u(B.mE,[C.baD,C.b7a,C.bpB,C.baa,C.bdH,C.bfT,C.bcN,C.bdE,C.bdl,C.bm8,C.b8j,C.b7X,C.bt0,C.bq3,C.bpc,C.bcG,C.b_s,C.bo9,C.bp9])
t(C.bik,C.aKu)
t(C.bhH,C.aJY)
t(C.bhs,C.aJJ)
t(C.bsx,C.aLN)
t(C.bhE,C.aJX)
t(C.bii,C.aKs)
t(C.bvl,C.aKG)
t(C.aCW,C.bvl)
t(C.baY,C.aIE)
t(C.aCZ,C.aKH)
t(C.bsS,B.iN)
t(C.a7G,B.kk)
t(C.cer,C.b1c)
t(C.ah1,C.a1V)
u(B.WI,[C.aPG,C.aR9])
t(C.avk,C.aPG)
w(C.aKu,B.c8)
w(C.aJY,B.c8)
w(C.aJJ,B.c8)
w(C.aJX,B.c8)
w(C.aKs,B.c8)
w(C.aLN,B.c8)
w(C.aIE,B.eR)
w(C.aKG,B.c8)
v(C.bvl,B.ev)
w(C.aKH,B.c8)})()
B.jR(b.typeUniverse,JSON.parse('{"aQp":{"hD":["aQp"]},"nI":{"aQp":[],"hD":["aQp"]},"aPQ":{"H":["QY"],"H.E":"QY"},"b8r":{"oB":[]},"a7t":{"wY":[],"o2":[]},"aUd":{"dG":[],"cx":[],"r":[]},"azf":{"aS":[],"d4":["aS"],"aR":[],"ct":[]},"a_V":{"ag":[],"r":[]},"aHD":{"ah":["a_V"]},"XI":{"ag":[],"r":[]},"XG":{"ag":[],"r":[]},"awf":{"ah":["XI"]},"awb":{"ah":["XG"]},"awd":{"au":[],"r":[]},"aoZ":{"ag":[],"r":[]},"aCj":{"ah":["aoZ"]},"acb":{"au":[],"r":[]},"abB":{"au":[],"r":[]},"ace":{"au":[],"r":[]},"adT":{"au":[],"r":[]},"bhq":{"au":[],"r":[]},"UR":{"ag":[],"r":[]},"aCC":{"ah":["UR"]},"b_a":{"au":[],"r":[]},"baE":{"aB":[]},"baD":{"aB":[]},"bs4":{"aB":[]},"b7a":{"aB":[]},"bpB":{"aB":[]},"UU":{"ag":[],"r":[]},"aCG":{"ah":["UU"]},"baa":{"aB":[]},"ZZ":{"ag":[],"r":[]},"aE2":{"ah":["ZZ"]},"bdH":{"aB":[]},"a_t":{"ag":[],"r":[]},"a_s":{"ag":[],"r":[]},"aCv":{"ag":[],"r":[]},"YR":{"ag":[],"r":[]},"aFX":{"ah":["a_t"]},"aFW":{"ah":["a_s"]},"bik":{"ah":["aCv"]},"bfT":{"aB":[]},"azX":{"ah":["YR"]},"bqG":{"au":[],"r":[]},"b_u":{"au":[],"r":[]},"bjY":{"au":[],"r":[]},"MK":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"bhH":{"ah":["MK"]},"bpg":{"au":[],"r":[]},"bcN":{"aB":[]},"aYo":{"au":[],"r":[]},"ayk":{"ah":["Yp"]},"YK":{"ag":[],"r":[]},"beg":{"ah":["YK"]},"bdE":{"aB":[]},"bdl":{"aB":[]},"bm8":{"aB":[]},"b8j":{"aB":[]},"b7X":{"aB":[]},"bt0":{"aB":[]},"bq3":{"aB":[]},"bpc":{"aB":[]},"bcG":{"aB":[]},"an_":{"ag":[],"r":[]},"b_x":{"au":[],"r":[]},"bhs":{"ah":["an_"]},"ach":{"au":[],"r":[]},"acz":{"au":[],"r":[]},"aHk":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"I3":{"au":[],"r":[]},"ay4":{"ag":[],"r":[]},"a6N":{"ag":[],"r":[]},"b_v":{"au":[],"r":[]},"b_s":{"aB":[]},"bsx":{"ah":["aHk"]},"aHX":{"aB":[]},"bhE":{"ah":["U5"]},"bca":{"ah":["ay4"]},"bii":{"ah":["a6N"]},"aYr":{"au":[],"r":[]},"bdj":{"aB":[]},"bo9":{"aB":[]},"bp9":{"aB":[]},"axr":{"ag":[],"r":[]},"J5":{"ag":[],"r":[]},"ZB":{"ag":[],"r":[]},"Je":{"au":[],"r":[]},"Na":{"ag":[],"r":[]},"aCW":{"ah":["Na"],"ev":[]},"baY":{"ah":["axr"]},"bbb":{"au":[],"r":[]},"baX":{"ah":["J5"]},"ON":{"au":[],"r":[]},"aCZ":{"ah":["ZB"]},"bpE":{"aB":[]},"bfN":{"au":[],"r":[]},"bfM":{"au":[],"r":[]},"V5":{"ag":[],"r":[]},"V6":{"ag":[],"r":[]},"aCU":{"ag":[],"r":[]},"apS":{"ag":[],"r":[]},"aCX":{"ah":["V5"]},"biE":{"ah":["V6"]},"aCV":{"ah":["aCU"]},"bsS":{"iN":[]},"aCY":{"ah":["apS"]},"bt3":{"au":[],"r":[]},"a6O":{"ag":[],"r":[]},"bin":{"ah":["a6O"]},"a7G":{"kk":["fq<eJ>"],"k6":["fq<eJ>"]},"ah1":{"a1V":[]},"aPG":{"iY":[],"fd":[]},"avk":{"iY":[],"fd":[]},"aR9":{"iY":[],"fd":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("KZ"),U:w("va<pM>"),bz:w("w"),M:w("eV<n>"),bo:w("jt"),g7:w("Lu"),gc:w("ay<is?>"),bq:w("ay<~>"),cc:w("a3Z"),fS:w("Dq"),an:w("akB"),bm:w("P<QY>"),X:w("P<a22>"),f3:w("P<aQp>"),aK:w("P<n0>"),V:w("P<ad>"),O:w("P<w>"),fA:w("P<lq>"),d5:w("P<ay<bu<G,+icon3d,picture(n?,n?)>>>"),bH:w("P<ay<dD>>"),fG:w("P<ay<~>>"),aF:w("P<n5>"),cd:w("P<ak<jg>>"),ez:w("P<a4<n,aC>>"),d:w("P<a4<n,@>>"),B:w("P<mj>"),h:w("P<jg>"),gE:w("P<z2>"),k:w("P<o8>"),g:w("P<ly>"),D:w("P<hY>"),u:w("P<eG>"),m:w("P<us>"),i:w("P<hv>"),aC:w("P<a74>"),o:w("P<z4>"),e3:w("P<aC>"),dN:w("P<u>"),v:w("P<hm>"),cR:w("P<iL>"),J:w("P<j8>"),gx:w("P<oX<n>>"),f2:w("P<+(a0,n)>"),L:w("P<+(n,n)>"),aD:w("P<+data,mimeType(n,n)>"),G:w("P<+(O,O)>"),ek:w("P<+(G,n)>"),n:w("P<+(G,G)>"),r:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),eR:w("P<fd>"),fT:w("P<b6T>"),bx:w("P<aDx>"),gz:w("P<ae2>"),x:w("P<O>"),t:w("P<G>"),dS:w("P<aB?>"),bA:w("P<u?>"),Z:w("P<G?>"),cA:w("P<cj>"),A:w("cs<ah<ag>>"),gL:w("ak<o8>"),R:w("ak<hY>"),j:w("ak<@>"),bW:w("ak<G>"),e:w("bu<G,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<G,+icon3d,picture(n?,n?)>"),bR:w("J<hv,r>"),eC:w("J<nz,n>"),cT:w("J<jz,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<G,pr>"),gh:w("J<mn,ji<mn>>"),w:w("iy"),ei:w("is"),g2:w("r2"),fB:w("E_"),b6:w("z2"),gX:w("a6X"),dt:w("l7"),ea:w("o8"),bt:w("ly"),I:w("hY"),F:w("eG"),fO:w("mn"),ff:w("us"),fP:w("hv"),Q:w("vE"),dO:w("apO"),a:w("cn"),C:w("aC"),dw:w("arq"),di:w("a7H"),Y:w("eJ"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Eu"),dB:w("dw<u>"),bJ:w("dw<n>"),_:w("dZ<n>"),N:w("n"),fw:w("pM"),bO:w("ar"),K:w("bn<u>"),b:w("bn<O>"),E:w("dD"),W:w("cz<n>"),ac:w("cz<G>"),ex:w("k9<ly>"),cI:w("k9<n>"),cl:w("k9<O>"),b4:w("a2<l4>"),a8:w("a2<lV>"),fR:w("a2<+(n,n)>"),co:w("e6<u>"),l:w("r"),b2:w("bS<~>"),ev:w("pN<dV>"),dT:w("bg<~>"),cQ:w("azf"),q:w("mT"),y:w("R"),gR:w("O"),z:w("@"),S:w("G"),at:w("b9?"),gw:w("ak<a4<n,@>>?"),aT:w("ak<hY>?"),c:w("ak<@>?"),aP:w("is?"),af:w("hY?"),go:w("b_z?"),a6:w("a75?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aTz=new B.bI(A.ax,null,null,P.am5,null)
D.aTJ=new B.d8(0,-0.15)
D.aTL=new B.d8(0.62,0)
D.aTO=new B.d8(-0.35,-0.45)
D.aTY=new B.d8(0.9,-0.85)
D.aJZ=new B.aV(30,30)
D.aVf=new B.bp(D.aJZ,D.aJZ,A.ha,A.ha)
D.aVt=new B.az(A.b4,1,A.r,-1)
D.bdy=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aVF=new B.az(D.bdy,1,A.r,-1)
D.aVR=new B.az(A.aE,1.5,A.r,-1)
D.aVW=new B.az(A.b4,1.6,A.r,-1)
D.aWb=new B.az(A.aE,1.4,A.r,-1)
D.aXz=new B.o(null,null,null,null,null,K.G4,A.a6)
D.bR9=new B.a7(A.a3,A.a7,A.x,G.a1S,null,null)
D.aXH=new B.o(null,null,null,null,null,D.bR9,A.a6)
D.a9G=new B.o(A.aA,null,null,A.rz,null,null,A.n)
D.b7N=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bdw=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cNM=w([D.b7N,D.bdw],x.O)
D.e7O=new B.bR(A.A,0.5,A.x,null,0,D.cNM,null,null)
D.aY_=new B.o(null,null,null,null,null,D.e7O,A.a6)
D.VU=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aWr=new B.bP(O.uv,A.Y,A.Y,A.Y)
D.aY1=new B.o(D.VU,null,D.aWr,null,null,null,A.n)
D.bSS=new B.a7(A.a3,A.a7,A.x,A.Ph,null,null)
D.aY8=new B.o(null,null,null,null,null,D.bSS,A.a6)
D.ab8=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aYa=new B.o(D.ab8,null,null,A.rA,null,null,A.n)
D.aYe=new B.o(A.k8,null,null,null,null,null,A.a6)
D.aWy=new B.bP(A.zD,A.Y,A.Y,A.Y)
D.aYh=new B.o(A_.ac7,null,D.aWy,A.lV,null,null,A.n)
D.Do=new B.o(A.dS,null,null,null,null,null,A.a6)
D.aYo=new B.o(null,null,null,null,null,E.vr,A.a6)
D.cSs=w([E.acV,A.bW],x.O)
D.bSu=new B.a7(A.b1,A.b6,A.x,D.cSs,null,null)
D.aYs=new B.o(null,null,null,A.lV,null,D.bSu,A.n)
D.d1F=w([A.bj,A.dS,A.jH],x.O)
D.a02=new B.a7(A.ax,A.aD,A.x,D.d1F,null,null)
D.aYF=new B.o(null,null,null,null,null,D.a02,A.n)
D.aYG=new B.o(D.ab8,null,null,A.ku,null,null,A.n)
D.ciT=w([A.dp,A.bj],x.O)
D.bSm=new B.a7(A.ax,A.aD,A.x,D.ciT,null,null)
D.aYK=new B.o(null,null,null,null,null,D.bSm,A.n)
D.aYU=new B.o(null,null,null,null,null,G.tI,A.a6)
D.aZc=new B.o(A.acW,null,null,null,null,null,A.a6)
D.b8w=new B.w(0.5647058823529412,0,0,0,A.t)
D.a9Q=new B.ad(0,A.G,D.b8w,A.R6,28)
D.b0j=new B.aUq()
D.b0S=new C.cof()
D.b13=new C.b8r()
D.aal=new B.cq(A.A,null,null,A.a_S,null)
D.b3v=new B.fh(null,null,null,null,null,E.mL,null,null,null,null)
D.b1A=new B.cq(A.A,null,null,D.b3v,null)
D.bCh=new B.ae(A.dV,28,A.c,null,null,null)
D.b22=new B.cq(A.A,null,null,D.bCh,null)
D.b3s=new B.fh(2,null,null,null,null,A.bV,null,null,null,null)
D.b2o=new B.cq(A.A,null,null,D.b3s,null)
D.bCC=new B.ae(K.MY,40,A.bL,null,null,null)
D.b2p=new B.cq(A.A,null,null,D.bCC,null)
D.b4h=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b4t=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b4S=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b4Y=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b5t=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b5K=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b5L=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.K_=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b69=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b6e=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.abo=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b6V=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b7C=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.abD=new B.w(1,1,1,0.9725490196078431,A.t)
D.b7U=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b84=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b87=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b8h=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b8B=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b9V=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.VD=new B.w(0.8509803921568627,0,0,0,A.t)
D.ba3=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.ba9=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aco=new B.w(0.6,0,0,0,A.t)
D.acq=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bby=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rW=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bbY=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bcm=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bcJ=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ad6=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.W3=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Ae=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Ks=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j_=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.adu=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Wd=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bfO=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bgg=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bgt=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Wy=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bhw=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.wW=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bhY=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bif=new B.hC(A.b5,!0,null,null)
D.f0i=new B.F(!0,A.ay,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new B.x("Bio link",null,D.f0i,null,null,null,null,null,null,null,null,null)
D.b2i=new B.cq(A.A,null,null,D.fpq,null)
D.biu=new B.hC(A.V1,!0,D.b2i,null)
D.KT=new C.a2S(0,"none")
D.aex=new C.a2S(1,"deflate")
D.aey=new C.a2S(2,"bzip2")
D.bjb=new B.ke(0.165,0.84,0.44,1)
D.cSL=w([A.cb,A.dO,A.aE],x.O)
D.bRC=new B.a7(A.ax,A.aD,A.x,D.cSL,null,null)
D.aXE=new B.o(null,null,null,null,null,D.bRC,A.n)
D.bLn=new B.ae(A.eR,null,A.ad,null,null,null)
D.b2T=new B.cq(A.A,null,null,D.bLn,null)
D.bjJ=new B.kG(D.aXE,A.bd,D.b2T,null)
D.bg3=new B.w(0.058823529411764705,1,1,1,A.t)
D.cVP=w([A.bF,A.qp,A.qp,D.bg3],x.O)
D.czU=w([0,0.32,0.7,1],x.x)
D.bSb=new B.a7(A.ax,A.aD,A.x,D.cVP,D.czU,null)
D.aXt=new B.o(null,null,null,null,null,D.bSb,A.n)
D.bjP=new B.kG(D.aXt,A.bd,null,null)
D.bkP=new B.m9(1,1,null,null,null,A.bm,null)
D.bkS=new B.m9(1,null,null,null,null,D.Wd,null)
D.bll=new B.b9(125e4)
D.blr=new B.b9(17e4)
D.blB=new B.b9(35964e8)
D.blH=new B.b9(55e4)
D.blL=new B.b9(68e4)
D.bmb=new B.i8(0,0,0,5)
D.bms=new B.Q(0,16,16,0)
D.bmv=new B.Q(0,18,0,8)
D.bmD=new B.Q(0,36,0,36)
D.bmK=new B.Q(0,54,0,0)
D.bmR=new B.Q(10,0,10,3)
D.bn1=new B.i8(10,16,10,10)
D.bnc=new B.Q(10,6,4,6)
D.bnf=new B.Q(10,8,10,6)
D.aft=new B.Q(11,8,11,11)
D.bnk=new B.Q(12,0,12,10)
D.bnl=new B.Q(12,0,12,24)
D.bnx=new B.Q(12,12,12,4)
D.bnA=new B.Q(12,12,8,12)
D.bnP=new B.Q(12,8,8,12)
D.bob=new B.Q(14,14,14,0)
D.bog=new B.Q(14,14,14,90)
D.boz=new B.Q(16,10,16,16)
D.boA=new B.Q(16,10,16,20)
D.agg=new B.Q(16,6,16,28)
D.bp8=new B.Q(18,0,18,10)
D.bpa=new B.Q(18,0,18,30)
D.bpc=new B.Q(18,10,18,12)
D.bpd=new B.Q(18,10,18,14)
D.bpu=new B.Q(18,16,14,18)
D.bpz=new B.Q(18,18,18,12)
D.bpF=new B.Q(18,26,18,12)
D.bpK=new B.Q(18,34,18,34)
D.bpL=new B.Q(18,4,18,14)
D.bpR=new B.Q(18,8,18,24)
D.bq8=new B.Q(20,16,14,4)
D.bqd=new B.Q(20,18,12,4)
D.bqi=new B.Q(20,20,12,20)
D.bql=new B.Q(20,22,20,20)
D.bqq=new B.Q(20,6,20,6)
D.bqA=new B.Q(22,18,22,18)
D.bqI=new B.Q(22,24,22,0)
D.bqL=new B.Q(22,24,22,4)
D.bqT=new B.Q(22,60,22,22)
D.bqZ=new B.Q(24,24,24,22)
D.br8=new B.Q(26,10,60,10)
D.brf=new B.Q(28,44,28,44)
D.brw=new B.Q(32,44,32,44)
D.brE=new B.Q(38,30,38,20)
D.brJ=new B.Q(4,0,0,6)
D.brU=new B.i8(4,4,4,4)
D.bsj=new B.i8(6,5,6,5)
D.bsn=new B.Q(6,6,8,6)
D.bsy=new B.Q(8,14,8,14)
D.bsz=new B.Q(8,22,8,22)
D.bsI=new B.Q(8,6,12,6)
D.bsR=new B.Q(8,8,8,4)
D.ah8=new B.Q(9,9,9,6)
D.bt_=new B.i8(2.5,2.5,2.5,2.5)
D.bt0=new B.Q(10.5,0,10.5,0)
D.bt1=new B.Q(7,1.5,7,1.5)
D.cL2=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bth=new B.ys(null,null,D.cL2,A.zR)
D.cIe=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bti=new B.ys(null,null,D.cIe,A.zR)
D.aOD=new B.F(!0,A.ay,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new B.x("WORD DESIGN",null,D.aOD,null,null,null,null,null,null,null,null,null)
D.btO=new B.bE(1,A.bi,D.foL,null)
D.foq=new B.x("Slides database",null,Ab.vV,null,null,null,null,null,null,null,null,null)
D.flL=new B.x("Admin only \xb7 keep as many as you like",null,U.aO8,null,null,null,null,null,null,null,null,null)
D.d97=w([D.foq,A.bz,D.flL],x.p)
D.biU=new B.fl(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.d97,null)
D.btR=new B.bE(1,A.bi,D.biU,null)
D.fgv=new B.x("NGMY logo",null,A.fW,null,null,null,null,null,null,null,null,null)
D.btU=new B.bE(1,A.bi,D.fgv,null)
D.eZc=new B.F(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqE=new B.x("TALK TO THE EDITOR",null,D.eZc,null,null,null,null,null,null,null,null,null)
D.bu8=new B.bE(1,A.bi,D.fqE,null)
D.fat=new B.x("Tell the AI what to change",null,Ab.vV,null,null,null,null,null,null,null,null,null)
D.bus=new B.bE(1,A.bi,D.fat,null)
D.bvj=new B.Df(!0,"video/mp4")
D.eXv=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8H=new B.x("Move presentations between devices",null,D.eXv,null,null,null,!1,null,null,1,null,null)
D.bvn=new B.q5(A.eg,A.a3,A.f,D.f8H,null)
D.f9K=new B.x("Edit in Slides",null,A.jB,null,null,null,null,null,null,null,null,null)
D.bvo=new B.q5(A.eg,A.A,A.f,D.f9K,null)
D.bvD=new B.dm(1,A.ci,D.bvo,null)
D.Zm=new B.a0(60988,"MaterialIcons",!1)
D.bxR=new B.a0(61352,"MaterialIcons",!1)
D.aiE=new B.a0(61531,"MaterialIcons",!1)
D.bz2=new B.a0(63062,"MaterialIcons",!1)
D.bza=new B.a0(63109,"MaterialIcons",!1)
D.bzl=new B.a0(63206,"MaterialIcons",!1)
D.ajn=new B.a0(63238,"MaterialIcons",!1)
D.ZS=new B.a0(63365,"MaterialIcons",!1)
D.ZT=new B.a0(63367,"MaterialIcons",!1)
D.ZU=new B.a0(63368,"MaterialIcons",!1)
D.ajz=new B.a0(63384,"MaterialIcons",!1)
D.bzV=new B.a0(63525,"MaterialIcons",!1)
D.bzY=new B.a0(63568,"MaterialIcons",!1)
D.bAi=new B.a0(983072,"MaterialIcons",!1)
D.bAG=new B.a0(983271,"MaterialIcons",!0)
D.akL=new B.a0(983965,"MaterialIcons",!1)
D.akM=new B.a0(983966,"MaterialIcons",!1)
D.bBD=new B.a0(984592,"MaterialIcons",!1)
D.bBV=new B.ae(A.tu,16,A.ay,null,null,null)
D.bC1=new B.ae(A.mf,null,A.c,null,null,null)
D.akW=new B.ae(A.pA,18,A.c,null,null,null)
D.bCi=new B.ae(A.AY,18,N.l0,null,null,null)
D.bCY=new B.ae(A.ja,11,null,null,null,null)
D.bD7=new B.ae(A.ZC,null,A.ey,null,null,null)
D.bDG=new B.ae(A.qL,18,A.ay,null,null,null)
D.bDM=new B.ae(A2.Ba,14,null,null,null,null)
D.bDN=new B.ae(A.e4,28,A.cr,null,null,null)
D.bDZ=new B.ae(A.pB,20,A.c,null,null,null)
D.bE5=new B.ae(A.xQ,null,null,null,null,null)
D.bEb=new B.ae(A.j8,18,A.ht,null,null,null)
D.bEg=new B.ae(A.l6,null,null,null,null,null)
D.bEJ=new B.ae(A.a_8,28,A.c,null,null,null)
D.bz5=new B.a0(63065,"MaterialIcons",!1)
D.bES=new B.ae(D.bz5,15,A.c,null,null,null)
D.bzb=new B.a0(63113,"MaterialIcons",!1)
D.bEY=new B.ae(D.bzb,null,A.ad,null,null,null)
D.bFl=new B.ae(A.v9,22,A.bJ,null,null,null)
D.bFF=new B.ae(A.va,18,null,null,null,null)
D.bFL=new B.ae(A.Bd,12,A.c,null,null,null)
D.bBf=new B.a0(983687,"MaterialIcons",!1)
D.bFW=new B.ae(D.bBf,null,A.bj,null,null,null)
D.bG2=new B.ae(A.hw,null,A.bj,null,null,null)
D.bGl=new B.ae(A.oz,22,A.c,null,null,null)
D.bGp=new B.ae(A.cx,13,A.c,null,null,null)
D.bGv=new B.ae(A.e4,26,A.aB,null,null,null)
D.bGy=new B.ae(A.qQ,26,A.c,null,null,null)
D.Na=new B.ae(A.ja,8,A.c,null,null,null)
D.bGQ=new B.ae(A.pA,40,A.c,null,null,null)
D.bGR=new B.ae(A.bwO,null,null,null,null,null)
D.bGV=new B.ae(A.tC,20,null,null,null,null)
D.bBe=new B.a0(983683,"MaterialIcons",!1)
D.bH4=new B.ae(D.bBe,null,A.aZ,null,null,null)
D.bH5=new B.ae(A.ja,16,A.bj,null,null,null)
D.bHq=new B.ae(A.qR,null,null,null,null,null)
D.alu=new B.ae(A.vc,22,A.c,null,null,null)
D.bHu=new B.ae(A.dV,17,A.c,null,null,null)
D.alv=new B.ae(A.ja,9,A.c,null,null,null)
D.bHz=new B.ae(A.v6,null,null,null,null,null)
D.bx4=new B.a0(57744,"MaterialIcons",!1)
D.bHG=new B.ae(D.bx4,null,null,null,null,null)
D.bHJ=new B.ae(A.v6,16,null,null,null,null)
D.bBM=new B.a0(985181,"MaterialIcons",!1)
D.FW=new B.ae(D.bBM,null,null,null,null,null)
D.bHV=new B.ae(A.l6,16,A.bJ,null,null,null)
D.bB7=new B.a0(983615,"MaterialIcons",!1)
D.bHX=new B.ae(D.bB7,12,A.c,null,null,null)
D.alB=new B.ae(A.xx,16,null,null,null,null)
D.bI4=new B.ae(A.dV,21,A.c,null,null,null)
D.bI9=new B.ae(A.hw,17,A.c,null,null,null)
D.bIa=new B.ae(A.v9,null,null,null,null,null)
D.bIp=new B.ae(A.a_w,20,A.ay,null,null,null)
D.bIE=new B.ae(A.pz,22,E.mL,null,null,null)
D.bIL=new B.ae(A.py,13,A.ad,null,null,null)
D.bIN=new B.ae(A.akx,20,A.ay,null,null,null)
D.bwM=new B.a0(57495,"MaterialIcons",!1)
D.bIS=new B.ae(D.bwM,null,null,null,null,null)
D.bIW=new B.ae(A.nK,18,A.c,null,null,null)
D.bJg=new B.ae(A.tG,28,A.c,null,null,null)
D.bJq=new B.ae(D.ajn,null,A.aE,null,null,null)
D.bJr=new B.ae(A.pB,22,A.c,null,null,null)
D.alK=new B.ae(A.Zi,16,null,null,null,null)
D.bKc=new B.ae(A.v9,32,A.c,null,null,null)
D.bKV=new B.ae(A.iQ,22,A.c,null,null,null)
D.bKZ=new B.ae(A.qQ,22,A.ad,null,null,null)
D.alZ=new B.ae(A.tu,null,A.c_,null,null,null)
D.bLS=new B.ae(A.tt,18,null,null,null,null)
D.bMt=new B.ae(A.dV,18,A.cp,null,null,null)
D.a_V=new B.ae(A.cx,18,A.ay,null,null,null)
D.bMz=new B.ae(A.akr,null,null,null,null,null)
D.bMZ=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aOq,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ew,!0,null,null,null,null)
D.ePR=new B.F(!0,A.bI,null,null,null,null,null,A.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNg=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.ePR,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ew,!0,null,null,null,null)
D.bNH=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ew,!0,null,null,null,null)
D.cOH=w([A.dS,A.aE],x.O)
D.bPr=new B.a7(A.a3,A.a7,A.x,D.cOH,null,null)
D.bPD=new B.a7(A.b1,A.b6,A.T9,A.at1,null,null)
D.b4I=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b8E=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bbz=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b6N=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.czW=w([D.b4I,D.b8E,D.bbz,D.b6N],x.O)
D.bPW=new B.a7(A.ax,A.aD,A.x,D.czW,A.Gu,null)
D.d9e=w([A.cw,A.bA,A.b4],x.O)
D.bPY=new B.a7(A.b1,A.b6,A.T9,D.d9e,null,null)
D.dax=w([A.bj,A.c8],x.O)
D.bQ1=new B.a7(A.a3,A.a7,A.x,D.dax,null,null)
D.d5O=w([A.hs,A.dj,A.aJ],x.O)
D.bQ3=new B.a7(A.ax,A.aD,A.x,D.d5O,null,null)
D.cUl=w([A.cY,A.f6],x.O)
D.bQ7=new B.a7(A.a3,A.a7,A.x,D.cUl,null,null)
D.d99=w([N.l0,A.dj],x.O)
D.amK=new B.a7(A.a3,A.a7,A.x,D.d99,null,null)
D.b9b=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.d96=w([D.b9b,D.wW,A.bV],x.O)
D.bQc=new B.a7(A.a3,A.a7,A.x,D.d96,null,null)
D.cQj=w([A.bc,A.cZ,A.fm],x.O)
D.bQd=new B.a7(A.ax,A.aD,A.x,D.cQj,null,null)
D.No=new B.a7(A.a3,A.a7,A.x,A.GI,null,null)
D.bgQ=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.ct1=w([D.bgQ,A.bV,A.j1],x.O)
D.amP=new B.a7(A.ax,A.aD,A.x,D.ct1,null,null)
D.cZl=w([A.wK,A.av,D.Ae],x.O)
D.bRa=new B.a7(A.a3,A.a7,A.x,D.cZl,null,null)
D.bhZ=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b7B=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bcz=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cPt=w([D.bhZ,D.b7B,D.bcz],x.O)
D.amQ=new B.a7(A.a3,A.a7,A.x,D.cPt,null,null)
D.b9d=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bT7=w([Au.aee,D.b9d],x.O)
D.bRj=new B.a7(A.b1,A.b6,A.x,D.bT7,null,null)
D.cNA=w([A.mJ,A.bL],x.O)
D.bRn=new B.a7(A.b1,A.b6,A.x,D.cNA,null,null)
D.d34=w([A.aE,A.dO],x.O)
D.bRt=new B.a7(A.a3,A.a7,A.x,D.d34,null,null)
D.adg=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.auI=w([D.adg,D.j_,D.K_],x.O)
D.bRW=new B.a7(A.ax,A.aD,A.x,D.auI,null,null)
D.csU=w([A.dv,A.dJ],x.O)
D.bS6=new B.a7(A.b1,A.b6,A.x,D.csU,null,null)
D.d0n=w([A.uA,Ay.E1],x.O)
D.bSU=new B.a7(A.a3,A.a7,A.x,D.d0n,null,null)
D.fi_=new B.x("Which Bio link?",null,A.cu,null,null,null,null,null,null,null,null,null)
D.bT4=new B.pw(null,D.fi_,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yg=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a3H=new C.kJ(2,"elegantNavy")
D.fOs=w([A.W1,D.j_,A.bV],x.O)
D.jw=new C.xa(0,"classic")
D.a3u=new C.jg("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a3H,4294967035,4279378237,4290283019,D.jw)
D.aDK=new C.kJ(3,"elegantGold")
D.b4g=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b5c=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.abY=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fNV=w([D.b4g,D.b5c,D.abY],x.O)
D.a3s=new C.jg("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aDK,4294966515,4281016592,4289102906,D.jw)
D.dvb=new C.kJ(22,"goldRibbon")
D.fNR=w([A.W1,D.j_,A.hT],x.O)
D.a3l=new C.jg("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dvb,4294967035,4279378237,4291404327,D.jw)
D.dvc=new C.kJ(23,"goldBaroque")
D.acx=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fNX=w([D.acx,A.av,A.j1],x.O)
D.a3m=new C.jg("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dvc,4294964964,4283053072,4292128567,D.jw)
D.dve=new C.kJ(4,"elegantEmerald")
D.b6k=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b79=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fO2=w([D.b6k,D.b79,A.hT],x.O)
D.a3n=new C.jg("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dve,4294376440,4279122734,4291404327,D.jw)
D.dvf=new C.kJ(5,"elegantBurgundy")
D.bay=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fO9=w([D.bay,A.abh,A.hT],x.O)
D.a3q=new C.jg("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dvf,4294965238,4283043359,4291404327,D.jw)
D.dv8=new C.kJ(19,"goldFiligree")
D.Kz=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fNY=w([D.Kz,A.av,A.j1],x.O)
D.a3o=new C.jg("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dv8,4294966259,4279378237,4292128567,D.jw)
D.dv9=new C.kJ(20,"goldLaurel")
D.bgG=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fOa=w([A.JT,A.hT,D.bgG],x.O)
D.a3p=new C.jg("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dv9,4294966776,4282000405,4291404327,D.jw)
D.dva=new C.kJ(21,"goldCrest")
D.aba=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bgN=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fO_=w([D.aba,A.av,D.bgN],x.O)
D.a3t=new C.jg("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dva,4294965484,4283053072,4292128567,D.jw)
D.dvd=new C.kJ(24,"goldStar")
D.bhT=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fO3=w([D.bhT,A.av,D.j_],x.O)
D.a3r=new C.jg("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dvd,4294966518,4279378237,4292128567,D.jw)
D.G6=w([D.a3u,D.a3s,D.a3l,D.a3m,D.a3n,D.a3q,D.a3o,D.a3p,D.a3t,D.a3r],x.h)
D.pO=new C.mn(0,"blank")
D.QW=new C.mn(1,"title")
D.mn=new C.mn(2,"titleContent")
D.dPO=new C.mn(3,"twoColumn")
D.C7=new C.mn(4,"section")
D.dPP=new C.mn(5,"comparison")
D.Hh=new C.mn(6,"flashcard")
D.Hi=new C.mn(7,"quiz")
D.Hj=new C.mn(8,"worksheet")
D.anb=w([D.pO,D.QW,D.mn,D.dPO,D.C7,D.dPP,D.Hh,D.Hi,D.Hj],B.ax("P<mn>"))
D.bTk=w([0,0,0],x.cA)
D.avE=w([Ao.Vo,A.dJ],x.O)
D.kg=w([A.bV,A.bJ,A.hS,A.hC,D.Ae],x.O)
D.dr5=new C.iU("fireworks","Royal Fireworks","Thank you for celebrating with us",D.avE,D.kg)
D.bgY=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.baw=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cNN=w([D.bgY,D.baw],x.O)
D.dqX=new C.iU("confetti","Golden Confetti","Together we rise",D.cNN,D.kg)
D.cL7=w([A.nn,A.V4],x.O)
D.dqY=new C.iU("crown","Crown of Glory","Built for our community",D.cL7,D.kg)
D.b7s=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bab=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cRA=w([D.b7s,D.bab],x.O)
D.tK=w([A.bI,A.aP,A.c,A.aL,A.ak],x.O)
D.dqS=new C.iU("aurora","Aurora Gala","A brighter future, together",D.cRA,D.tK)
D.bbB=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d0t=w([G.aaQ,D.bbB],x.O)
D.dr8=new C.iU("champagne","Champagne Toast","Cheers to every member",D.d0t,D.kg)
D.dr9=new C.iU("diamonds","Diamond Rain","Every member is a jewel",Y.awe,D.tK)
D.b53=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b9H=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d58=w([D.b53,D.b9H],x.O)
D.dqN=new C.iU("starburst","Golden Starburst","Thank you!",D.d58,D.kg)
D.bTd=w([A.f5,A.wO],x.O)
D.aaY=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.OW=w([A.of,A.ij,A.uM,A.o9,D.aaY],x.O)
D.drg=new C.iU("balloons","Luxury Balloons","Let's celebrate",D.bTd,D.OW)
D.cKr=w([A.Vd,A.w],x.O)
D.dr4=new C.iU("galaxy","Galaxy Spiral","The sky is not the limit",D.cKr,D.tK)
D.bf9=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cYb=w([A.k7,D.bf9],x.O)
D.dr_=new C.iU("redcarpet","Red Carpet","Tonight we shine",D.cYb,D.kg)
D.bda=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bbo=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d1n=w([D.bda,D.bbo],x.O)
D.dqP=new C.iU("coins","Gold Coin Rain","Every contribution counts",D.d1n,D.kg)
D.d7G=w([A.dv,A.hB],x.O)
D.dqV=new C.iU("lanterns","Sky Lanterns","Lighting the way together",D.d7G,D.kg)
D.b8l=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cIv=w([A.wQ,D.b8l],x.O)
D.dqR=new C.iU("hearts","Floating Hearts","Made with love",D.cIv,D.OW)
D.b5D=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b6q=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.d94=w([D.b5D,D.b6q],x.O)
D.drf=new C.iU("petals","Rose Petals","Thank you, from our hearts",D.d94,D.OW)
D.bg1=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d5s=w([A.l_,D.bg1],x.O)
D.dqM=new C.iU("butterflies","Golden Butterflies","New beginnings",D.d5s,D.kg)
D.bcw=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cJq=w([D.bcw,A.w],x.O)
D.dr7=new C.iU("neon","Neon Night","Let's go!",D.cJq,D.tK)
D.b9q=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d3e=w([A.Kg,D.b9q],x.O)
D.dra=new C.iU("disco","Disco Ball","Party time",D.d3e,D.tK)
D.bd1=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d2O=w([A.hs,D.bd1],x.O)
D.dqQ=new C.iU("sunrise","Golden Sunrise","A new day for our community",D.d2O,D.kg)
D.d2r=w([A.qt,A.dJ],x.O)
D.drb=new C.iU("pearls","Ocean Pearls","Deep roots, bright future",D.d2r,D.tK)
D.b7x=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d2F=w([D.b7x,A.dJ],x.O)
D.dre=new C.iU("snow","Winter Gala","Warm wishes to all",D.d2F,D.tK)
D.b4p=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b5n=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.d82=w([D.b4p,D.b5n],x.O)
D.dr3=new C.iU("laurel","Laurel Victory","We did it together",D.d82,D.kg)
D.b4f=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.ba7=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cHD=w([D.b4f,D.ba7],x.O)
D.drd=new C.iU("ribbons","Silk Ribbons","Elegance in every step",D.cHD,D.kg)
D.bb7=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.csR=w([G.Ad,D.bb7],x.O)
D.dr0=new C.iU("kente","Kente Pride","Proud of our roots",D.csR,D.kg)
D.bdH=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bgk=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cT5=w([D.bdH,D.bgk],x.O)
D.dqW=new C.iU("trophy","Trophy Shine","Winners together",D.cT5,D.kg)
D.d2L=w([Ap.K5,A.w],x.O)
D.dqO=new C.iU("shooting","Shooting Stars","Make a wish",D.d2L,D.tK)
D.b4w=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ae4=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.d8i=w([D.b4w,D.ae4],x.O)
D.dr1=new C.iU("bokeh","Golden Bokeh","Shine bright",D.d8i,D.kg)
D.b4T=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cZ_=w([D.b4T,A.w],x.O)
D.dqU=new C.iU("orbits","Golden Orbits","Always moving forward",D.cZ_,D.kg)
D.bg2=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cVI=w([A.abW,D.bg2],x.O)
D.dqZ=new C.iU("flowers","Blooming Garden","Growing together",D.cVI,D.OW)
D.b4G=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b5h=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.d79=w([D.b4G,D.b5h],x.O)
D.dqT=new C.iU("music","Music Party","Celebrate with us",D.d79,D.tK)
D.b6a=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bgJ=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cIH=w([D.b6a,D.bgJ],x.O)
D.drc=new C.iU("mandala","Royal Mandala","Harmony and unity",D.cIH,D.kg)
D.cVN=w([G.Ad,D.ae4],x.O)
D.dr6=new C.iU("sparklers","Golden Sparklers","Light up the night",D.cVN,D.kg)
D.dr2=new C.iU("city","City Lights","The whole city celebrates",D.avE,D.kg)
D.Gf=w([D.dr5,D.dqX,D.dqY,D.dqS,D.dr8,D.dr9,D.dqN,D.drg,D.dr4,D.dr_,D.dqP,D.dqV,D.dqR,D.drf,D.dqM,D.dr7,D.dra,D.dqQ,D.drb,D.dre,D.dr3,D.drd,D.dr0,D.dqW,D.dqO,D.dr1,D.dqU,D.dqZ,D.dqT,D.drc,D.dr6,D.dr2],B.ax("P<iU>"))
D.ecM=new B.z("","No ring")
D.er1=new B.z("platinum","Platinum")
D.eo7=new B.z("glow","Glow")
D.eg4=new B.z("double","Double line")
D.ef0=new B.z("framed","Gallery frame")
D.ecp=new B.z("rosegold","Rose gold")
D.eoQ=new B.z("jewels","Jeweled")
D.elC=new B.z("aurora","Aurora")
D.Bu=w([D.ecM,A.a4Z,D.er1,D.eo7,H.aKc,D.eg4,A.a50,D.ef0,D.ecp,D.eoQ,D.elC],x.L)
D.ccx=w([D.a3o,D.a3p,D.a3t,D.a3l,D.a3m,D.a3r],x.h)
D.bIi=new B.ae(G.aie,16,null,null,null,null)
D.b_F=new B.va(A.bg,D.bIi,null,x.U)
D.bxd=new B.a0(58027,"MaterialIcons",!1)
D.bC0=new B.ae(D.bxd,16,null,null,null,null)
D.b_D=new B.va(A.L,D.bC0,null,x.U)
D.bxe=new B.a0(58030,"MaterialIcons",!1)
D.bG1=new B.ae(D.bxe,16,null,null,null,null)
D.b_G=new B.va(A.dK,D.bG1,null,x.U)
D.ciH=w([D.b_F,D.b_D,D.b_G],B.ax("P<va<pM>>"))
D.cqf=w([A.Ai,A.hc],x.O)
D.cqg=w([A.bc,A.bn,A.fm],x.O)
D.OL=w([A.bJ,A.hC,A.hS,A.av,A.o9],x.O)
D.csX=w([A.bV,D.j_,D.K_],x.O)
D.ctu=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eau=new B.z(4278913286,4280030216)
D.eaM=new B.z(4279373061,4278518787)
D.eaT=new B.z(4279898630,4278847235)
D.cSw=w([D.eau,D.eaM,D.eaT],x.n)
D.cOr=w(["\u265b","\u269c","\u2726"],x.s)
D.dv6=new C.xc("Royal Onyx & Gold",D.cSw,4292128567,4294370209,4294965479,3874020544,D.cOr)
D.eah=new B.z(4278326799,4278598442)
D.eaj=new B.z(4278395929,4278258953)
D.eaq=new B.z(4278599728,4278327826)
D.d7x=w([D.eah,D.eaj,D.eaq],x.n)
D.cJi=w(["\u269c","\u2756","\u2727"],x.s)
D.dv3=new C.xc("Imperial Emerald",D.d7x,4293050997,4294699968,4294180856,3872254170,D.cJi)
D.eak=new B.z(4278455076,4278918747)
D.eap=new B.z(4278587439,4278322714)
D.eaD=new B.z(4279051376,4278455076)
D.d5K=w([D.eak,D.eap,D.eaD],x.n)
D.cZA=w(["\u2654","\u2726","\u2748"],x.s)
D.duY=new C.xc("Sapphire Crown",D.d5K,4291417834,4294967295,4294310143,3871986666,D.cZA)
D.eaR=new B.z(4279894534,4283041554)
D.eb2=new B.z(4281008906,4279042307)
D.eba=new B.z(4284221976,4279894534)
D.db5=w([D.eaR,D.eb2,D.eba],x.n)
D.cKz=w(["\u265b","\u2766","\u2726"],x.s)
D.dv_=new C.xc("Ruby Throne",D.db5,4293378685,4294963145,4294964466,3874213833,D.cKz)
D.eaL=new B.z(4279371039,4281995100)
D.eaV=new B.z(4280092723,4278714896)
D.eb7=new B.z(4283045242,4279371039)
D.d7T=w([D.eaL,D.eaV,D.eb7],x.n)
D.d65=w(["\u2655","\u2756","\u2727"],x.s)
D.dv4=new C.xc("Amethyst Palace",D.d7T,4293314984,4294963421,4294702591,3873229802,D.d65)
D.eam=new B.z(4278519045,4280032287)
D.eaE=new B.z(4279111184,4278321666)
D.eb_=new B.z(4280492839,4278716426)
D.d4G=w([D.eam,D.eaE,D.eb_],x.n)
D.cXZ=w(["\u2726","\u25c6","\u2742"],x.s)
D.dv1=new C.xc("Obsidian & Platinum",D.d4G,4293256418,4294967295,4294638330,3872378836,D.cXZ)
D.eaS=new B.z(4279896588,4282194463)
D.eb0=new B.z(4280553487,4279043334)
D.eb8=new B.z(4283048488,4279896588)
D.cXu=w([D.eaS,D.eb0,D.eb8],x.n)
D.d9s=w(["\u2766","\u273f","\u2727"],x.s)
D.duZ=new C.xc("Rose Gold Velvet",D.cXu,4293440672,4294960345,4294964979,3874214602,D.d9s)
D.ean=new B.z(4278520340,4279180595)
D.eas=new B.z(4278718495,4278322443)
D.eaP=new B.z(4279510591,4278520340)
D.czE=w([D.ean,D.eas,D.eaP],x.n)
D.cYE=w(["\u269c","\u2736","\u2756"],x.s)
D.dv2=new C.xc("Midnight Brass",D.czE,4291405148,4293975208,4294439914,3872837564,D.cYE)
D.ebn=new B.z(4294703086,4293780428)
D.ebj=new B.z(4294307549,4293187253)
D.ebo=new B.z(4294966517,4293977807)
D.cMB=w([D.ebn,D.ebj,D.ebo],x.n)
D.cZ2=w(["\u269c","\u265b","\u2726"],x.s)
D.dv5=new C.xc("Ivory Marble & Gold",D.cMB,4289760572,4286209048,4280951062,3863625518,D.cZ2)
D.eay=new B.z(4278978566,4280555024)
D.eaO=new B.z(4279504137,4278518530)
D.eb4=new B.z(4281211923,4278978566)
D.cKq=w([D.eay,D.eaO,D.eb4],x.n)
D.d6N=w(["\u2742","\u2726","\u265c"],x.s)
D.dv0=new C.xc("Onyx & Copper",D.cKq,4291856987,4294365880,4294964718,3873885630,D.d6N)
D.ctC=w([D.dv6,D.dv3,D.duY,D.dv_,D.dv4,D.dv1,D.duZ,D.dv2,D.dv5,D.dv0],B.ax("P<xc>"))
D.cvU=w([A.av,D.Ae,A.hC],x.O)
D.ei5=new B.z("Original",null)
D.eid=new B.z("Wide 16:9",1.7777777777777777)
D.eko=new B.z("Landscape 3:2",1.5)
D.ehA=new B.z("Photo 4:3",1.3333333333333333)
D.ejf=new B.z("Square",1)
D.euw=new B.z("Portrait 3:4",0.75)
D.at9=w([D.ei5,D.eid,D.eko,D.ehA,D.ejf,D.euw],B.ax("P<+(n,O?)>"))
D.ata=w([A.hC,A.bZ,A.b7,A.by],x.O)
D.eky=new B.z("","Original")
D.emk=new B.z("circle","Circle")
D.erM=new B.z("rounded","Rounded")
D.esF=new B.z("triangle","Triangle")
D.eol=new B.z("hexagon","Hexagon")
D.emJ=new B.z("diamond","Diamond")
D.elB=new B.z("arch","Arch")
D.Bz=w([D.eky,D.emk,D.erM,D.esF,D.eol,D.emJ,D.elB],x.L)
D.dqc=new C.l4("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ka,A.dp,A.aK)
D.dqs=new C.l4("campus_green","Campus Green","Normal",A.aZ,A.mH,A.rT,A.h0,A.et)
D.dqj=new C.l4("warm_sand","Warm Sand","Normal",A.dT,A.hS,A.bJ,A.ip,A.nr)
D.dqq=new C.l4("slate_minimal","Slate Minimal","Normal",A.bw,A.aP,A.aL,A.M,A.aK)
D.dqb=new C.l4("coral_fresh","Coral Fresh","Normal",A.cb,A.il,A.ql,A.jJ,A.rN)
D.dqr=new C.l4("lavender_calm","Lavender Calm","Normal",A.b4,A.p7,A.A0,A.pa,A.jk)
D.dqd=new C.l4("ocean_breeze","Ocean Breeze","Normal",A.f6,A.qx,A.rH,A.uC,A.ns)
D.adm=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dqo=new C.l4("berry_pop","Berry Pop","Normal",A.ff,D.adm,A.k4,G.Ww,A.Eo)
D.dqe=new C.l4("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dv,A.k4,A.cm)
D.dqn=new C.l4("executive_navy","Executive Navy","Professional",A.d7,A.acJ,A.dp,A.kY,A.bI)
D.dql=new C.l4("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cm)
D.dqf=new C.l4("corporate_steel","Corporate Steel","Professional",A.mF,A.M,A.m3,A.fg,A.bI)
D.dqi=new C.l4("gold_luxe","Gold Luxe","Luxury",A.od,A.dC,A.oe,A.lt,A.bJ)
D.bd5=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dqm=new C.l4("rose_gold_elite","Rose Gold Elite","Luxury",A.hc,D.bd5,A.Wl,A.ij,A.o9)
D.dqp=new C.l4("platinum_night","Platinum Night","Luxury",A.cm,A.dJ,A.bm,A.aP,A.aL)
D.dqt=new C.l4("emerald_prestige","Emerald Prestige","Luxury",A.aU,A.pd,A.eX,A.pj,A.jl)
D.dqa=new C.l4("royal_purple","Royal Purple","Luxury",A.mG,A.Vv,A.jk,A.k4,A.JS)
D.dqk=new C.l4("neon_pitch","Neon Pitch","Bold",A.b7,A.dJ,A.M,A.b0,A.aL)
D.dqh=new C.l4("crimson_impact","Crimson Impact","Bold",A.bL,A.k7,A.ex,A.t4,A.f9)
D.dqg=new C.l4("sunset_gallery","Sunset Gallery","Bold",A.fC,A.rN,A.jJ,A.ql,A.og)
D.Go=w([D.dqc,D.dqs,D.dqj,D.dqq,D.dqb,D.dqr,D.dqd,D.dqo,D.dqe,D.dqn,D.dql,D.dqf,D.dqi,D.dqm,D.dqp,D.dqt,D.dqa,D.dqk,D.dqh,D.dqg],B.ax("P<l4>"))
D.cHk=w([A.bV,D.j_],x.O)
D.cXK=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eln=new B.z("Faces & people",D.cXK)
D.cvY=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.e9n=new B.z("Ideas & work",D.cvY)
D.cOV=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eoq=new B.z("Nature",D.cOV)
D.cXS=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ei3=new B.z("Places & things",D.cXS)
D.cS6=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.elG=new B.z("Symbols",D.cS6)
D.cHq=w([D.eln,D.e9n,D.eoq,D.ei3,D.elG],B.ax("P<+(n,ak<n>)>"))
D.b4L=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cHO=w([A.bV,D.abY,D.b4L],x.O)
D.b_0=new B.ad(0,A.G,A.JP,A.aEy,40)
D.aZI=new B.ad(0,A.G,A.np,A.ej,8)
D.cI_=w([D.b_0,D.aZI],x.V)
D.cIr=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.atz=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a16=w([A.hC,A.fm,A.bL,A.aA,A.cb],x.O)
D.cJc=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acb=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cJn=w([A.Wa,D.acb,A.Wa],x.O)
D.cJt=w([A.hT,D.j_,D.K_],x.O)
D.ehT=new B.z(A.bg,D.ZT)
D.eja=new B.z(A.L,D.ZS)
D.edo=new B.z(A.dK,D.ZU)
D.cKl=w([D.ehT,D.eja,D.edo],B.ax("P<+(pM,a0)>"))
D.cQ=new C.I4(0,"text")
D.lg=new C.I4(1,"image")
D.eZ=new C.I4(2,"shape")
D.QV=new C.I4(3,"pdf")
D.kO=new C.I4(4,"signature")
D.a3O=new C.I4(5,"bio")
D.cLb=w([D.cQ,D.lg,D.eZ,D.QV,D.kO,D.a3O],B.ax("P<I4>"))
D.cLc=w([A.bl,A.cD],B.ax("P<H1>"))
D.cLN=w(["School","Documents","Sign & present"],x.s)
D.b_5=new B.ad(0,A.G,A.adV,A.u2,28)
D.cM6=w([D.b_5],x.V)
D.cMo=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.P3=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.atY=w([A.hC,A.En,A.aL,A.c,A.of,A.av],x.O)
D.etU=new B.z(0.1,0.08)
D.eoo=new B.z(0.3,0.05)
D.ecW=new B.z(0.55,0.1)
D.egV=new B.z(0.8,0.06)
D.ejS=new B.z(0.92,0.16)
D.ejp=new B.z(0.2,0.2)
D.ehm=new B.z(0.7,0.22)
D.en5=new B.z(0.05,0.4)
D.ekg=new B.z(0.95,0.45)
D.edB=new B.z(0.12,0.7)
D.efJ=new B.z(0.88,0.75)
D.efR=new B.z(0.4,0.9)
D.ebC=new B.z(0.65,0.93)
D.egy=new B.z(0.25,0.97)
D.ehQ=new B.z(0.85,0.9)
D.eeq=new B.z(0.5,0.04)
D.cNI=w([D.etU,D.eoo,D.ecW,D.egV,D.ejS,D.ejp,D.ehm,D.en5,D.ekg,D.edB,D.efJ,D.efR,D.ebC,D.egy,D.ehQ,D.eeq],x.G)
D.cNP=w([A.c,A.hc,A.aW,A.aU],x.O)
D.dRq=new C.jz("office_blue","Office Blue",A.bj,A.dp,A.aK,A.c,A.ka)
D.dRB=new C.jz("campus_green","Campus Green",A.aZ,A.h0,A.et,A.mH,A.rT)
D.dRr=new C.jz("sunset","Sunset",A.fC,A.jJ,A.nr,A.il,A.ql)
D.dRs=new C.jz("midnight","Midnight",A.aE,A.k4,A.cm,A.M,A.dv)
D.dRD=new C.jz("classic","Classic",A.dj,A.dC,A.lu,A.hS,A.fZ)
D.dRA=new C.jz("rose_gold","Rose Gold",A.hc,A.wR,A.wQ,A.uM,A.Ai)
D.dRl=new C.jz("ocean_teal","Ocean Teal",A.f6,A.uC,A.ns,A.qx,A.rH)
D.dRk=new C.jz("slate_pro","Slate Pro",A.bw,A.M,A.aK,A.aP,A.aL)
D.dRj=new C.jz("neon_night","Neon Night",A.b7,A.b0,A.aL,A.dJ,A.M)
D.dRv=new C.jz("lavender","Lavender",A.b4,A.pa,A.jk,A.p7,A.A0)
D.dRx=new C.jz("coral","Coral",A.cb,A.jJ,A.rN,A.il,A.og)
D.dRm=new C.jz("forest","Forest",A.hd,A.ec,A.cC,A.lv,A.ey)
D.dRn=new C.jz("berry","Berry",A.ff,G.Ww,A.Eo,D.adm,A.k4)
D.dRu=new C.jz("sand","Sand",A.dT,A.ip,A.nr,A.hS,A.bJ)
D.dRz=new C.jz("ice","Ice",A.mF,A.Kh,A.aK,A.mD,A.fg)
D.dRp=new C.jz("charcoal","Charcoal",A.ak,A.aP,A.cm,A.bm,A.M)
D.dRi=new C.jz("mint","Mint",A.aU,A.fu,A.h0,A.lv,A.pj)
D.dRy=new C.jz("crimson","Crimson",A.bL,A.mJ,A.k7,A.El,A.t4)
D.b78=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dRt=new C.jz("gold","Gold",A.od,A.uA,A.oe,D.b78,A.lt)
D.dRw=new C.jz("aqua","Aqua",A.bM,A.Ea,A.ob,A.p9,A.oh)
D.dRo=new C.jz("plum","Plum",A.mG,A.wO,A.Eo,A.DY,A.t_)
D.dRC=new C.jz("steel","Steel",A.d7,A.dp,A.bm,A.ka,A.kY)
D.a1l=w([D.dRq,D.dRB,D.dRr,D.dRs,D.dRD,D.dRA,D.dRl,D.dRk,D.dRj,D.dRv,D.dRx,D.dRm,D.dRn,D.dRu,D.dRz,D.dRp,D.dRi,D.dRy,D.dRt,D.dRw,D.dRo,D.dRC],B.ax("P<jz>"))
D.cO8=w([A.bV,A.j1],x.O)
D.QX=new C.hv(10,"rotate3d")
D.Hl=new C.hv(8,"flip")
D.aE2=new C.hv(19,"spiral")
D.pP=new C.hv(16,"bounce")
D.aE5=new C.hv(9,"flipVertical")
D.cO9=w([D.QX,D.Hl,D.aE2,D.pP,D.aE5],x.i)
D.e5=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cOu=w([0.62,1],x.x)
D.cP4=w([0,0.32,0.68,1],x.x)
D.mo=new C.hv(6,"zoom")
D.tX=new C.hv(4,"slideUp")
D.tW=new C.hv(2,"slideLeft")
D.cPd=w([D.mo,D.Hl,D.tX,D.QX,D.tW],x.i)
D.cPH=w([A.bZ,A.hc,A.ij,A.hC,A.c],x.O)
D.aZW=new B.ad(0,A.G,D.aco,A.u2,30)
D.cQo=w([D.aZW],x.V)
D.e_U=new B.u(0,-2.5)
D.e_K=new B.u(-2.5,0)
D.dZs=new B.u(2.5,0)
D.cQr=w([A.Rc,A.a4a,A.aF3,A.a49,D.e_U,H.aF_,D.e_K,D.dZs],x.dN)
D.Gv=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cQU=w([23,114,69,56,80,144],x.t)
D.cRi=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cRH=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cT1=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. Rooms change with a short fade to black and the camera follows the person smoothly. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cT9=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cTd=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.us(0,"rectangle")
D.eI=new C.us(1,"circle")
D.kP=new C.us(6,"hexagon")
D.cTq=w([D.be,D.eI,D.kP],x.m)
D.nR=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.adt=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cTY=w([D.adt,A.ec],x.O)
D.ed6=new B.z("","Classic")
D.ebP=new B.z("caps","Bold caps")
D.en8=new B.z("elegant","Elegant")
D.es4=new B.z("shadow","Shadow")
D.ehg=new B.z("neon","Neon glow")
D.eqI=new B.z("outline","Outline")
D.epW=new B.z("marker","Highlighter")
D.esf=new B.z("stamp","Stamp")
D.erH=new B.z("retro","Retro")
D.egf=new B.z("threed","3D")
D.enE=new B.z("fire","Fire")
D.eoz=new B.z("ice","Ice")
D.emj=new B.z("chalk","Chalk")
D.emo=new B.z("comic","Comic")
D.esh=new B.z("sunset","Sunset")
D.etl=new B.z("softglow","Soft glow")
D.epx=new B.z("lowercase","Lowercase")
D.emQ=new B.z("double","Echo")
D.ets=new B.z("whisper","Whisper")
D.auQ=w([D.ed6,D.ebP,D.en8,D.es4,D.ehg,D.eqI,D.epW,D.esf,D.erH,D.egf,H.aKa,D.enE,D.eoz,D.emj,D.emo,A.a4Z,D.esh,D.etl,D.epx,D.emQ,D.ets],x.L)
D.cVa=w([3,5,7,10,12,15],x.t)
D.cWu=w([A.bZ,A.bJ,A.c,A.ez,A.cw],x.O)
D.dhR=new C.rZ(10,"cardWorld")
D.C_=new C.AY(3,"rounded")
D.dy7=new C.l7("world","NGMY World",D.dhR,D.C_,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dhS=new C.rZ(11,"cardSplit")
D.dy3=new C.l7("business","Business Wire",D.dhS,D.C_,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dhT=new C.rZ(12,"cardBreaking")
D.dyg=new C.l7("breaking","Breaking Red",D.dhT,D.C_,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dhU=new C.rZ(13,"cardFeature")
D.dy9=new C.l7("feature","Tech Feature",D.dhU,D.C_,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aCA=new C.rZ(6,"circle")
D.aCu=new C.AY(4,"circle")
D.dyd=new C.l7("parchment","Royal Circle",D.aCA,D.aCu,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dy2=new C.l7("ocean","Blue Ocean",D.aCA,D.aCu,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dhX=new C.rZ(7,"rail")
D.aCt=new C.AY(1,"double")
D.dy4=new C.l7("forest","Green Leaf",D.dhX,D.aCt,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aCx=new C.rZ(1,"sideBySide")
D.dyi=new C.l7("herald","NGMY Herald",D.aCx,D.C_,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aCw=new C.rZ(0,"classic")
D.a30=new C.AY(9,"shadow")
D.dyh=new C.l7("daily","The Daily",D.aCw,D.a30,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dhV=new C.rZ(2,"splash")
D.aCv=new C.AY(6,"cutCorner")
D.dy1=new C.l7("tabloid","Big Tabloid",D.dhV,D.aCv,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aCB=new C.rZ(9,"minimal")
D.dyc=new C.l7("modern","Modern Digest",D.aCB,D.C_,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aCy=new C.rZ(3,"magazine")
D.aCs=new C.AY(0,"plain")
D.dy8=new C.l7("midnight","Midnight Edition",D.aCy,D.aCs,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dhY=new C.rZ(8,"banner")
D.dya=new C.l7("metro","Metro Wire",D.dhY,D.aCv,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dhQ=new C.AY(8,"arch")
D.dyb=new C.l7("sunrise","Sunrise Post",D.aCy,D.dhQ,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aCz=new C.rZ(5,"scrapbook")
D.dhP=new C.AY(5,"tape")
D.dy6=new C.l7("neon","Neon Beat",D.aCz,D.dhP,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dhW=new C.rZ(4,"wrap")
D.dyj=new C.l7("gold","Golden Press",D.dhW,D.a30,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dyk=new C.l7("minimal","Paper White",D.aCB,D.a30,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dy5=new C.l7("gazette","Fresh Gazette",D.aCw,D.aCt,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dyf=new C.l7("times","Classic Times",D.aCx,D.aCs,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Qt=new C.AY(2,"polaroid")
D.dye=new C.l7("scrapbook","Memory Scrapbook",D.aCz,D.Qt,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a1A=w([D.dy7,D.dy3,D.dyg,D.dy9,D.dyd,D.dy2,D.dy4,D.dyi,D.dyh,D.dy1,D.dyc,D.dy8,D.dya,D.dyb,D.dy6,D.dyj,D.dyk,D.dy5,D.dyf,D.dye],B.ax("P<l7>"))
D.cWG=w([0.45,1],x.x)
D.Gx=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cX1=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fJD=new C.ok("Original",0,1,1,0,0,0)
D.fJH=new C.ok("Black & white",0,1.1,0,0,0,0)
D.fJu=new C.ok("Noir",-0.05,1.55,0,0,0,0)
D.fJy=new C.ok("Sepia",0,1,0.25,0.9,0,0)
D.fJx=new C.ok("Vivid",0,1.15,1.6,0,0,0)
D.fJq=new C.ok("Pop",0,1.3,1.9,0,0,0)
D.fJs=new C.ok("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fJE=new C.ok("Matte",0,0.9,0.85,0,0,0.55)
D.fJz=new C.ok("Cool",0,1.05,1,-0.8,0,0)
D.fJG=new C.ok("Warm",0.03,1.05,1.1,0.8,0,0)
D.fJr=new C.ok("Golden hour",0.04,1,1.25,1,0,0)
D.fJw=new C.ok("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fJF=new C.ok("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fJv=new C.ok("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fJB=new C.ok("Retro",0,0.9,0.7,0.4,0,0.35)
D.fJA=new C.ok("Forest",0,1,1.2,-0.1,-0.45,0)
D.fJC=new C.ok("Rose",0,1,1.1,0.3,0.4,0)
D.fJt=new C.ok("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cX2=w([D.fJD,D.fJH,D.fJu,D.fJy,D.fJx,D.fJq,D.fJs,D.fJE,D.fJz,D.fJG,D.fJr,D.fJw,D.fJF,D.fJv,D.fJB,D.fJA,D.fJC,D.fJt],B.ax("P<ok>"))
D.b4b=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cX3=w([D.adt,A.ec,D.b4b],x.O)
D.e9g=new B.z(0.12,0.3)
D.eoK=new B.z(0.26,0.75)
D.en4=new B.z(0.8,0.22)
D.esp=new B.z(0.9,0.7)
D.epw=new B.z(0.5,0.15)
D.eqK=new B.z(0.65,0.85)
D.eeU=new B.z(0.08,0.85)
D.cXf=w([D.e9g,D.eoK,D.en4,D.esp,D.epw,D.eqK,D.eeU],x.G)
D.av_=w([A.b7,A.bZ,A.by,A.bc],x.O)
D.cY2=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cYe=w([A.c,A.fg,A.dy,A.uD],x.O)
D.b7l=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cZb=w([D.b7l,D.acb],x.O)
D.cZc=w([A.wK,A.av],x.O)
D.cZq=w([0,0.25,0.75,1],x.x)
D.cZs=w([A.wG,A.of],x.O)
D.aDD=new C.kJ(10,"kenteSunset")
D.fNT=w([D.acx,A.jF,A.av],x.O)
D.dtp=new C.jg("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aDD,4294964964,4282000405,4279983648,D.jw)
D.aDE=new C.kJ(11,"indigoMudcloth")
D.b58=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fO6=w([D.b58,A.ac8,A.hT],x.O)
D.dtx=new C.jg("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aDE,4294439140,4279903102,4279903102,D.jw)
D.aDF=new C.kJ(12,"adinkraRoyal")
D.bhn=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fO7=w([D.aba,D.bhn,A.av],x.O)
D.dtz=new C.jg("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aDF,4294965484,4285218591,4287322667,D.jw)
D.aDG=new C.kJ(13,"nileLotus")
D.bdW=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.baM=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fOc=w([D.bdW,D.baM,A.hT],x.O)
D.dty=new C.jg("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDG,4294244340,4279196764,4279196764,D.jw)
D.aDH=new C.kJ(14,"shweshweIvory")
D.b93=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b7Y=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b5C=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fNU=w([D.b93,D.b7Y,D.b5C],x.O)
D.dtu=new C.jg("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDH,4294505710,4279970378,4291058750,D.jw)
D.r5=new C.kJ(15,"certIvoryNavy")
D.fNS=w([D.Kz,D.j_,A.hT],x.O)
D.aD9=new C.xa(1,"ringsNdoa")
D.dtr=new C.jg("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.r5,4294966259,4279378237,4291404327,D.aD9)
D.a3w=new C.xa(2,"coupleCards")
D.dtm=new C.jg("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.r5,4294966259,4279378237,4291404327,D.a3w)
D.C2=new C.kJ(18,"certIvoryNavyBar")
D.ab9=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fO5=w([D.ab9,D.j_,A.hT],x.O)
D.aDa=new C.xa(3,"kuhoweshaForm")
D.dtk=new C.jg("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.C2,4294966519,4279378237,4291404327,D.aDa)
D.acm=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fOp=w([D.Kz,D.acm,A.hT],x.O)
D.a3x=new C.xa(4,"mahariPande")
D.dtn=new C.jg("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.r5,4294966259,4279904068,4291404327,D.a3x)
D.aDI=new C.kJ(16,"certIvoryGreen")
D.b8u=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fNW=w([A.JT,D.b8u,A.hT],x.O)
D.aDb=new C.xa(5,"familiaMti")
D.dtt=new C.jg("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aDI,4294966776,4280241466,4291404327,D.aDb)
D.a3y=new C.xa(6,"ndoaSafi")
D.dtl=new C.jg("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.C2,4294966519,4279378237,4291404327,D.a3y)
D.bcv=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fNZ=w([D.Kz,A.hT,D.bcv],x.O)
D.a3z=new C.xa(7,"peteWide")
D.dtq=new C.jg("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.r5,4294966259,4282001936,4291404327,D.a3z)
D.dtA=new C.xa(8,"muhuriCrest")
D.dtj=new C.jg("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.r5,4294966259,4279378237,4291404327,D.dtA)
D.fO8=w([D.ab9,D.acm,A.hT],x.O)
D.dtB=new C.xa(9,"fomuWazi")
D.dtw=new C.jg("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.C2,4294966519,4279904068,4291404327,D.dtB)
D.aDJ=new C.kJ(17,"certIvoryRose")
D.b95=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fOb=w([D.b95,D.ad6,A.hT],x.O)
D.a3v=new C.xa(10,"upendoOrnate")
D.dts=new C.jg("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aDJ,4294965493,4286200650,4291404327,D.a3v)
D.cZQ=w([D.dtp,D.dtx,D.dtz,D.dty,D.dtu,D.dtr,D.dtm,D.dtk,D.dtn,D.dtt,D.dtl,D.dtq,D.dtj,D.dtw,D.dts],x.h)
D.e6=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Hm=new C.vE(0,"emojis")
D.C9=new C.vE(1,"pictures")
D.Hn=new C.vE(2,"icons3d")
D.a3Q=new C.vE(3,"animations")
D.QZ=new C.vE(4,"videoMotion")
D.Ca=new C.vE(5,"luxe")
D.a1H=w([D.Hm,D.C9,D.Hn,D.a3Q,D.QZ,D.Ca],B.ax("P<vE>"))
D.erk=new B.z(A.dV,"Looks")
D.egO=new B.z(A.y2,"Light")
D.egK=new B.z(A.mZ,"Colour")
D.eeV=new B.z(A.xC,"Effects")
D.aji=new B.a0(63112,"MaterialIcons",!1)
D.ec1=new B.z(D.aji,"Crop")
D.d_k=w([D.erk,D.egO,D.egK,D.eeV,D.ec1],x.f2)
D.d_X=w([],x.D)
D.fOm=w([],x.L)
D.ef5=new B.z("Flashcard",D.Hh)
D.eiE=new B.z("Quiz",D.Hi)
D.ekt=new B.z("Worksheet",D.Hj)
D.ehL=new B.z("Notes",D.mn)
D.ej8=new B.z("Section",D.C7)
D.d0z=w([D.ef5,D.eiE,D.ekt,D.ehL,D.ej8],B.ax("P<+(n,mn)>"))
D.dvg=new C.kJ(6,"beadedPearl")
D.bbr=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fOq=w([P.Wk,D.bbr,A.hT],x.O)
D.aD7=new C.jg("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dvg,4294966774,4286209070,4291404327,D.jw)
D.dvh=new C.kJ(7,"artDeco")
D.bf3=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bhC=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fOo=w([D.bf3,D.bhC,A.bV],x.O)
D.aD8=new C.jg("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dvh,4294440434,4280228630,4290283019,D.jw)
D.dvi=new C.kJ(8,"rosetteCorners")
D.bgT=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b7n=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bbm=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fO1=w([D.bgT,D.b7n,D.bbm],x.O)
D.aD6=new C.jg("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dvi,4294702831,4285218602,4291394365,D.jw)
D.dvj=new C.kJ(9,"modernLedger")
D.fO0=w([A.c,D.j_,D.j_],x.O)
D.aD5=new C.jg("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dvj,4294967295,4279378237,4279378237,D.jw)
D.d0D=w([D.aD7,D.aD8,D.aD6,D.aD5],x.h)
D.d0L=w([A.ij,A.of],x.O)
D.cg=new C.hv(0,"none")
D.dc=new C.hv(1,"fade")
D.Hk=new C.hv(3,"slideRight")
D.aE4=new C.hv(5,"slideDown")
D.dPV=new C.hv(7,"zoomOut")
D.a3P=new C.hv(11,"cube")
D.dPQ=new C.hv(12,"blur")
D.aE1=new C.hv(13,"dissolve")
D.dPR=new C.hv(14,"wipeLeft")
D.dPS=new C.hv(15,"wipeRight")
D.QY=new C.hv(17,"push")
D.dPT=new C.hv(18,"flash")
D.aE3=new C.hv(20,"swing")
D.dPU=new C.hv(21,"curtain")
D.PC=w([D.cg,D.dc,D.tW,D.Hk,D.tX,D.aE4,D.mo,D.dPV,D.Hl,D.aE5,D.QX,D.a3P,D.dPQ,D.aE1,D.dPR,D.dPS,D.pP,D.QY,D.dPT,D.aE2,D.aE3,D.dPU],x.i)
D.PD=w([D.a3u,D.a3s,D.a3l,D.a3m,D.a3n,D.a3q,D.a3o,D.a3p,D.a3t,D.a3r,D.aD7,D.aD8,D.aD6,D.aD5],x.h)
D.d1c=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d1g=w([A.A5,A.hC,A.bV],x.O)
D.ega=new B.z(A.tw,"Design")
D.esO=new B.z(D.ajz,"Word sizes")
D.epg=new B.z(A.Bi,"Text")
D.bAx=new B.a0(983182,"MaterialIcons",!1)
D.epk=new B.z(D.bAx,"Photo")
D.ebE=new B.z(A.lb,"Logo")
D.etS=new B.z(A.FT,"News")
D.d1l=w([D.ega,D.esO,D.epg,D.epk,D.ebE,D.etS],x.f2)
D.d1m=w(["golddust","sparkle","sheen"],x.s)
D.dRh=new C.er("upload_pdf",K.MY,"Upload PDF")
D.dQr=new C.er("sign_paper",A.FQ,"Sign Paper")
D.bzO=new B.a0(63438,"MaterialIcons",!1)
D.dRd=new C.er("hd_photo",D.bzO,"HD Photo")
D.dQj=new C.er("sharpen",E.ZE,"Sharpen")
D.dQt=new C.er("print",K.MY,"Download PDF")
D.dQV=new C.er("rotate",D.aji,"Rotate")
D.dQC=new C.er("text_box",A.Bi,"Text Box")
D.dQE=new C.er("picture",A.tz,"Picture")
D.dQA=new C.er("title",A.xX,"Title")
D.dQw=new C.er("subtitle",T.akb,"Subtitle")
D.dR3=new C.er("bullets",I.ZV,"Bullet List")
D.dQx=new C.er("numbered",A.MN,"Numbered")
D.dR6=new C.er("quote",A2.Ba,"Quote")
D.dQJ=new C.er("citation",A.pz,"Citation")
D.dR9=new C.er("date_stamp",Ah.ZJ,"Date Stamp")
D.dQX=new C.er("page_number",A.xW,"Page #")
D.dR0=new C.er("header_bar",A.Bk,"Header")
D.dQD=new C.er("footer_bar",Aw.a_r,"Footer")
D.dQs=new C.er("divider",A.ty,"Divider")
D.dQo=new C.er("highlight",A.a__,"Highlight")
D.dR2=new C.er("redact",A.y_,"Redact")
D.dQQ=new C.er("callout",A.B6,"Callout")
D.dRb=new C.er("checkboxes",I.aiy,"Checklist")
D.dQN=new C.er("table",A.a_p,"Table")
D.dQH=new C.er("memo",I.a_b,"Memo")
D.dQR=new C.er("letter",A.FF,"Letter")
D.bzq=new B.a0(63259,"MaterialIcons",!0)
D.dQi=new C.er("agenda",D.bzq,"Agenda")
D.dQu=new C.er("toc",Az.ajM,"Contents")
D.bzK=new B.a0(63406,"MaterialIcons",!1)
D.dQO=new C.er("sig_line",D.bzK,"Sign Line")
D.dQb=new C.er("initial_line",A.j9,"Initials")
D.dQe=new C.er("approved",A.lb,"APPROVED")
D.dQT=new C.er("draft",A.oz,"DRAFT")
D.dQZ=new C.er("confidential",A.ja,"Confidential")
D.dR1=new C.er("sticky",A.N3,"Sticky Note")
D.dRa=new C.er("progress",A.ajL,"Progress")
D.bB_=new B.a0(983507,"MaterialIcons",!1)
D.dQp=new C.er("stars",D.bB_,"Star Rating")
D.dQ9=new C.er("equation",A.ajC,"Equation")
D.dQk=new C.er("timeline",A.N4,"Timeline")
D.dQI=new C.er("two_col",A.a_s,"Two Columns")
D.dQm=new C.er("compare",A1.ZM,"Compare")
D.dQ7=new C.er("duplicate_el",A.fJ,"Duplicate")
D.dRf=new C.er("delete_el",A.e4,"Delete")
D.dR5=new C.er("bring_fwd",P.ajv,"Bring Front")
D.dQc=new C.er("send_back",P.aju,"Send Back")
D.dQS=new C.er("align_left",D.ZT,"Align L")
D.dQY=new C.er("align_center",D.ZS,"Align C")
D.dRe=new C.er("align_right",D.ZU,"Align R")
D.dQB=new C.er("word_count",A0.Zn,"Word Count")
D.dQy=new C.er("link_text",A.hi,"Link")
D.dQW=new C.er("phone",A.iw,"Phone")
D.dQn=new C.er("email",A.B8,"Email")
D.dRg=new C.er("qr_placeholder",A.jc,"QR Placeholder")
D.dQh=new C.er("rectangle",A3.vb,"Rectangle")
D.dQM=new C.er("circle",A.qI,"Circle")
D.dQd=new C.er("arrow",A.j8,"Arrow")
D.dR4=new C.er("line",A.ty,"Line")
D.dQq=new C.er("triangle",A.ZK,"Triangle")
D.bzy=new B.a0(63318,"MaterialIcons",!1)
D.dQv=new C.er("grayscale",D.bzy,"Grayscale")
D.dQF=new C.er("brighten",I.aiS,"Brighten")
D.dQK=new C.er("flip_h",A.Fv,"Flip H")
D.bzF=new B.a0(63348,"MaterialIcons",!1)
D.dRc=new C.er("flip_v",D.bzF,"Flip V")
D.dR_=new C.er("cover_page",A.pu,"Cover Page")
D.dQa=new C.er("invoice",A.h5,"Invoice")
D.dQl=new C.er("resume",A.mb,"Resume")
D.dQz=new C.er("minutes",A.ot,"Minutes")
D.dQf=new C.er("lab_report",A.N0,"Lab Report")
D.dQg=new C.er("rubric",A.xG,"Rubric")
D.dQL=new C.er("flashcard_tool",V.FM,"Flashcard")
D.dR7=new C.er("quiz_tool",A.FJ,"Quiz Block")
D.dQP=new C.er("worksheet_tool",L.Fm,"Worksheet")
D.dQU=new C.er("outline_share",A.N1,"Share Outline")
D.dR8=new C.er("export_json",D.aiE,"Export JSON")
D.dQ8=new C.er("new_slide",D.Zm,"New Slide")
D.dQG=new C.er("present",A.pB,"Present")
D.d1L=w([D.dRh,D.dQr,D.dRd,D.dQj,D.dQt,D.dQV,D.dQC,D.dQE,D.dQA,D.dQw,D.dR3,D.dQx,D.dR6,D.dQJ,D.dR9,D.dQX,D.dR0,D.dQD,D.dQs,D.dQo,D.dR2,D.dQQ,D.dRb,D.dQN,D.dQH,D.dQR,D.dQi,D.dQu,D.dQO,D.dQb,D.dQe,D.dQT,D.dQZ,D.dR1,D.dRa,D.dQp,D.dQ9,D.dQk,D.dQI,D.dQm,D.dQ7,D.dRf,D.dR5,D.dQc,D.dQS,D.dQY,D.dRe,D.dQB,D.dQy,D.dQW,D.dQn,D.dRg,D.dQh,D.dQM,D.dQd,D.dR4,D.dQq,D.dQv,D.dQF,D.dQK,D.dRc,D.dR_,D.dQa,D.dQl,D.dQz,D.dQf,D.dQg,D.dQL,D.dR7,D.dQP,D.dQU,D.dR8,D.dQ8,D.dQG],B.ax("P<er>"))
D.d1T=w([A.cm,A.ak],x.O)
D.ebe=new B.z(4286331629,4292552567)
D.eb1=new B.z(4280640491,4278630100)
D.ebm=new B.z(4294538006,4292943176)
D.eao=new B.z(4278556265,4280640491)
D.cXp=w([D.ebe,D.eb1,D.ebm,D.eao],x.n)
D.cmn=w([4294626325,4280472558,4294210230],x.t)
D.dQ2=new C.nz("colorful","Colorful",A.mZ,D.cXp,4294967295,3875536895,D.cmn,D.mo)
D.eaQ=new B.z(4279522093,4279657780)
D.eb5=new B.z(4281750292,4283268111)
D.ear=new B.z(4278603323,4279203438)
D.eb6=new B.z(4282343954,4279599165)
D.cxa=w([D.eaQ,D.eb5,D.ear,D.eb6],x.n)
D.cm5=w([4288931381,4294829706,4287033260],x.t)
D.dPZ=new C.nz("nature","Nature",A.FR,D.cxa,4294442727,3874290891,D.cm5,D.dc)
D.eaK=new B.z(4279369771,4283178389)
D.eaH=new B.z(4279179050,4286456526)
D.eaY=new B.z(4280163147,4290648157)
D.eag=new B.z(4278322711,4285343961)
D.cOm=w([D.eaK,D.eaH,D.eaY,D.eag],x.n)
D.cmj=w([4294210230,4280472558,4289170426],x.t)
D.dPX=new C.nz("vibe","Vibe",A.ZY,D.cOm,4294967295,3874869502,D.cmj,D.tW)
D.ebi=new B.z(4290007817,4292552567)
D.ebc=new B.z(4286328082,4294286859)
D.ebh=new B.z(4288485197,4294538006)
D.ebb=new B.z(4285343961,4293675161)
D.bTD=w([D.ebi,D.ebc,D.ebh,D.ebb],x.n)
D.cmo=w([4294829706,4294967295,4284999929],x.t)
D.dPY=new C.nz("celebration","Celebration",A.l6,D.bTD,4294967295,4009752557,D.cmo,D.pP)
D.eaF=new B.z(4279179050,4280171146)
D.eaJ=new B.z(4279310375,4280232247)
D.eax=new B.z(4278916151,4280172719)
D.eaG=new B.z(4279179050,4281549141)
D.cHH=w([D.eaF,D.eaJ,D.eax,D.eaG],x.n)
D.cm0=w([4281908728,4294626325,4287931320],x.t)
D.dQ1=new C.nz("professional","Professional",A.B4,D.cHH,4294967295,3872118241,D.cm0,D.QY)
D.eaB=new B.z(4278995566,4278413729)
D.eat=new B.z(4278727492,4279137424)
D.eaZ=new B.z(4280171146,4278751666)
D.eaC=new B.z(4278995566,4279590517)
D.cq8=w([D.eaB,D.eat,D.eaZ,D.eaC],x.n)
D.cm3=w([4286436348,4284410580,4294829706],x.t)
D.dQ3=new C.nz("ocean","Ocean",I.a_u,D.cq8,4294967295,3873501950,D.cm3,D.tX)
D.ebd=new B.z(4286328082,4294538006)
D.ebf=new B.z(4286781507,4294677052)
D.eb9=new B.z(4283178389,4294197086)
D.ebg=new B.z(4288295954,4294688548)
D.cDU=w([D.ebd,D.ebf,D.eb9,D.ebg],x.n)
D.cmp=w([4294829706,4294967295,4294747557],x.t)
D.dQ4=new C.nz("sunset","Sunset",A.N6,D.cDU,4294967295,4009749973,D.cmp,D.dc)
D.ebq=new B.z(4294967295,4294047225)
D.ebl=new B.z(4294507260,4294967295)
D.ebp=new B.z(4294967295,4293060848)
D.ebk=new B.z(4294507260,4294047225)
D.cRo=w([D.ebq,D.ebl,D.ebp,D.ebk],x.n)
D.clZ=w([4280640491,4279179050,4287931320],x.t)
D.dQ0=new C.nz("minimal","Minimal",A3.vb,D.cRo,4279179050,4282865001,D.clZ,D.dc)
D.eaA=new B.z(4278979081,4280886564)
D.eaU=new B.z(4280031511,4278979081)
D.eaI=new B.z(4279308561,4281148438)
D.eaz=new B.z(4278979081,4280031511)
D.d3I=w([D.eaA,D.eaU,D.eaI,D.eaz],x.n)
D.cmc=w([4292128567,4294829706,4289241758],x.t)
D.dQ5=new C.nz("elegant","Elegant",A.lE,D.d3I,4294898631,3873957348,D.cmc,D.aE1)
D.eaW=new B.z(4280159034,4282058596)
D.eaw=new B.z(4278916151,4280163147)
D.eb3=new B.z(4281208933,4278916151)
D.eaN=new B.z(4279502891,4283178389)
D.da1=w([D.eaW,D.eaw,D.eb3,D.eaN],x.n)
D.cml=w([4294296657,4292128567,4291081725],x.t)
D.dQ_=new C.nz("royal","Royal Gold",A.iQ,D.da1,4294965222,3874084351,D.cml,D.mo)
D.eal=new B.z(4278464302,4280163147)
D.eav=new B.z(4278916151,4279455306)
D.eaX=new B.z(4280163147,4283040846)
D.eai=new B.z(4278332450,4281413249)
D.cX6=w([D.eal,D.eav,D.eaX,D.eai],x.n)
D.cm_=w([4281193663,4289170426,4294210230],x.t)
D.dQ6=new C.nz("aurora","Aurora Glow",A.dV,D.cX6,4293983738,3869766608,D.cm_,D.dc)
D.vx=w([D.dQ2,D.dPZ,D.dPX,D.dPY,D.dQ1,D.dQ3,D.dQ4,D.dQ0,D.dQ5,D.dQ_,D.dQ6],B.ax("P<nz>"))
D.bbW=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d2m=w([A.qp,D.bbW,A.qp],x.O)
D.d2D=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d2H=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ep8=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.efL=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ek4=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.e8n=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eiO=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eh8=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.elc=new B.z("Surprise me","")
D.d3a=w([D.ep8,D.efL,D.ek4,D.e8n,D.eiO,D.eh8,D.elc],x.L)
D.b5E=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bfv=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d3U=w([A.c,D.b5E,D.bfv],x.O)
D.d5C=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aDB=new C.kJ(0,"heritageGold")
D.baB=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fOr=w([D.baB,W.acu,A.av],x.O)
D.dtv=new C.jg("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aDB,4294570461,4284234270,4292128567,D.jw)
D.aDC=new C.kJ(1,"heritageCrimson")
D.b47=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b94=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bfm=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fO4=w([D.b47,D.b94,D.bfm],x.O)
D.dto=new C.jg("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aDC,4294635750,4285213214,4292912216,D.jw)
D.d5G=w([D.a3u,D.a3s,D.dtv,D.dto,D.a3n,D.a3q],x.h)
D.dzn=new C.rc(1,"circuit")
D.dzQ=new C.lV("neural","Neural Link","Robotic",D.dzn,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dzm=new C.rc(0,"grid")
D.dzN=new C.lV("signal","Signal Grid","Robotic",D.dzm,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dzs=new C.rc(2,"hexes")
D.dzy=new C.lV("core","Core Protocol","Robotic",D.dzs,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aDZ=new C.rc(11,"diagonal")
D.dzJ=new C.lV("steel","Steel Tech","Robotic",D.aDZ,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aE_=new C.rc(3,"rings")
D.dzx=new C.lV("vault","Vault Gold","Robotic",D.aE_,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dzq=new C.rc(13,"leaves")
D.dzA=new C.lV("forest","Forest Morning","Nature",D.dzq,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aE0=new C.rc(5,"waves")
D.dzH=new C.lV("ocean","Ocean Calm","Nature",D.aE0,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dzt=new C.rc(6,"sunset")
D.dzM=new C.lV("sunset","Sunset Glow","Nature",D.dzt,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dzu=new C.rc(7,"mountains")
D.dzz=new C.lV("mountain","Mountain Air","Nature",D.dzu,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dzv=new C.rc(8,"stars")
D.dzG=new C.lV("night","Night Sky","Nature",D.dzv,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a3N=new C.rc(4,"orbs")
D.dzE=new C.lV("aurora","Aurora","Nature",D.a3N,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dzO=new C.lV("sand","Sand Dune","Nature",D.aE0,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dzw=new C.rc(9,"rays")
D.dzD=new C.lV("golden","Golden Hour","Warm",D.dzw,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dzB=new C.lV("royal","Royal Purple","Warm",D.aDZ,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dzC=new C.lV("rose","Rose Petal","Warm",D.a3N,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dzp=new C.rc(12,"blocks")
D.dzF=new C.lV("electric","Electric Blue","Bold",D.dzp,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dzP=new C.lV("mint","Fresh Mint","Bold",D.a3N,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dzr=new C.rc(14,"minimal")
D.dzL=new C.lV("white","Clean White","Clean",D.dzr,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dzo=new C.rc(10,"frame")
D.dzI=new C.lV("midnight","Midnight Gold","Clean",D.dzo,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dzK=new C.lV("community","Community Green","Clean",D.aE_,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a25=w([D.dzQ,D.dzN,D.dzy,D.dzJ,D.dzx,D.dzA,D.dzH,D.dzM,D.dzz,D.dzG,D.dzE,D.dzO,D.dzD,D.dzB,D.dzC,D.dzF,D.dzP,D.dzL,D.dzI,D.dzK],B.ax("P<lV>"))
D.d61=w([D.Ae,A.wK,A.hC,A.bV],x.O)
D.d6h=w([D.adg,D.j_],x.O)
D.d6q=w(["pdf","docx","txt","md"],x.s)
D.ex6=new B.bx(-3,150,34)
D.ex7=new B.bx(-3,214,62)
D.ex8=new B.bx(-3,288,62)
D.d7e=w([D.ex6,D.ex7,D.ex8],B.ax("P<+(O,O,O)>"))
D.d7I=w(["rays","bokeh","aurora","spotlight"],x.s)
D.d8g=w(["Write","Design","Print & fold"],x.s)
D.jx=new C.us(2,"triangle")
D.C8=new C.us(3,"arrow")
D.fp=new C.us(4,"line")
D.jy=new C.us(5,"parallelogram")
D.d8j=w([D.be,D.eI,D.jx,D.C8,D.fp,D.jy,D.kP],x.m)
D.e9v=new B.z(240,96)
D.ebV=new B.z(560,46)
D.d8o=w([D.e9v,D.ebV],x.G)
D.fOC=new C.xd(0,"classic")
D.dvm=new C.nv("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aDB,4294570461,4282000405,4284234270)
D.dvy=new C.nv("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aDC,4294635750,4281999378,4285213214)
D.dvn=new C.nv("elegant_navy","Umoja Mzuri",y.s,D.a3H,4294967035,4279378237,4290283019)
D.dvA=new C.nv("elegant_gold","Umoja wa Dhahabu",y.Q,D.aDK,4294966515,4281016592,4289102906)
D.dvC=new C.nv("kente_sunset","Kente ya Jua",y.H,D.aDD,4294964964,4282000405,4279983648)
D.dvk=new C.nv("indigo_mudcloth","Nguo ya Indigo",y.n,D.aDE,4294439140,4279903102,4279903102)
D.dvp=new C.nv("adinkra_royal","Muhuri wa Adinkra",y.z,D.aDF,4294965484,4285218591,4287322667)
D.dvu=new C.nv("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aDG,4294244340,4279196764,4279196764)
D.dvw=new C.nv("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aDH,4294505710,4279970378,4291058750)
D.fOD=new C.xd(1,"ringsNdoa")
D.dvo=new C.nv("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.r5,4294966259,4279378237,4291404327)
D.fOF=new C.xd(2,"coupleCards")
D.dvz=new C.nv("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.r5,4294966259,4279378237,4291404327)
D.fOG=new C.xd(3,"kuhoweshaForm")
D.dvv=new C.nv("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.C2,4294966519,4279378237,4291404327)
D.fOH=new C.xd(4,"mahariPande")
D.dvl=new C.nv("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.r5,4294966259,4279904068,4291404327)
D.fOI=new C.xd(5,"familiaMti")
D.dvB=new C.nv("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aDI,4294966776,4280241466,4291404327)
D.fOJ=new C.xd(6,"ndoaSafi")
D.dvs=new C.nv("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.C2,4294966519,4279378237,4291404327)
D.fOK=new C.xd(7,"peteWide")
D.dvr=new C.nv("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.r5,4294966259,4282001936,4291404327)
D.fOL=new C.xd(8,"muhuriCrest")
D.dvq=new C.nv("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.r5,4294966259,4279378237,4291404327)
D.fOM=new C.xd(9,"fomuWazi")
D.dvt=new C.nv("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.C2,4294966519,4279904068,4291404327)
D.fOE=new C.xd(10,"upendoOrnate")
D.dvx=new C.nv("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aDJ,4294965493,4286200650,4291404327)
D.PQ=w([D.dvm,D.dvy,D.dvn,D.dvA,D.dvC,D.dvk,D.dvp,D.dvu,D.dvw,D.dvo,D.dvz,D.dvv,D.dvl,D.dvB,D.dvs,D.dvr,D.dvq,D.dvt,D.dvx],B.ax("P<nv>"))
D.C6=new C.apN(0,"landscape169")
D.nT=new C.apN(1,"portrait916")
D.d98=w([D.C6,D.nT],B.ax("P<apN>"))
D.awp=w([A.hC,A.bJ,A.cw,A.ij,A.c],x.O)
D.tO=w([A.bV,A.ip],x.O)
D.e8K=new B.z(1000,"M")
D.ecY=new B.z(900,"CM")
D.ebQ=new B.z(500,"D")
D.eae=new B.z(400,"CD")
D.e8L=new B.z(100,"C")
D.ecZ=new B.z(90,"XC")
D.ebR=new B.z(50,"L")
D.eaf=new B.z(40,"XL")
D.e8P=new B.z(10,"X")
D.ed8=new B.z(9,"IX")
D.ec4=new B.z(5,"V")
D.ebD=new B.z(4,"IV")
D.e9b=new B.z(1,"I")
D.d9I=w([D.e8K,D.ecY,D.ebQ,D.eae,D.e8L,D.ecZ,D.ebR,D.eaf,D.e8P,D.ed8,D.ec4,D.ebD,D.e9b],x.ek)
D.ey0=new B.cL(["open",A.j9,"Open & write","Keep writing this book"])
D.eyq=new B.cL(["print",A.tC,"Print as a book","Fold and staple it"])
D.d9S=w([D.ey0,D.eyq],B.ax("P<+(n,a0,n,n)>"))
D.daw=w([D.a3P,D.mo,D.Hl,D.QY,D.dc,D.QX],x.i)
D.epG=new B.z(-1,"Small")
D.e8x=new B.z(0,"Normal")
D.e9a=new B.z(1,"Big")
D.e9L=new B.z(2,"Huge")
D.db_=w([D.epG,D.e8x,D.e9a,D.e9L],x.ek)
D.dbp=w([49,65,89,38,83,89],x.t)
D.dbw=w([A.wK,A.hC,A.bV],x.O)
D.dbX=w([D.dc,D.mo,D.tW,D.a3P,D.Hl,D.QY],x.i)
D.aBH=new B.dQ([0,D.KT,8,D.aex,12,D.aey],B.ax("dQ<G,a2S>"))
D.dW_={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bff=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cHR=w([A.bJ,D.bff],x.O)
D.d0l=w([A.b0,A.bj],x.O)
D.cWg=w([A.bZ,A.aW,A.cp],x.O)
D.d9T=w([A.cm,A.bw],x.O)
D.cPg=w([A.b7,A.ff],x.O)
D.cYR=w([A.b4,A.f5],x.O)
D.b8P=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cY9=w([D.b8P,A.of],x.O)
D.cSW=w([A.fX,A.wL],x.O)
D.cP5=w([A.bs,A.c8],x.O)
D.dez=new B.bq(D.dW_,[D.cHR,H.an7,D.d0l,D.cWg,D.d9T,D.cPg,D.cYR,D.cY9,D.cSW,D.cP5],B.ax("bq<n,ak<w>>"))
D.dVa={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a2H=new B.bq(D.dVa,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bq<n,n>"))
D.a2N=new B.bq(A.ia,[],B.ax("bq<G,+icon3d,picture(n?,n?)>"))
D.diA=new F.Md(30,null)
D.dnE=new F.mj("Chapter 1","","","")
D.d8V=w([D.dnE],x.B)
D.dnI=new F.r2("My Book","","",D.d8V,E.aCW)
D.dnG=new F.ui("starry",null,null,null,null,"","","")
D.dnJ=new F.r2("Dream Big","","",E.a1Q,D.dnG)
D.dnH=new F.ui("story",null,null,null,null,"","","")
D.dnK=new F.r2("Little Lion","","",E.a1Q,D.dnH)
D.dnF=new F.ui("vintage",null,null,null,null,"","","")
D.dnL=new F.r2("Our Story","","",E.a1Q,D.dnF)
D.dqL=new C.E_("","NGMY","","")
D.dy0=new C.z2("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dPW=new C.b_y(null,null,null,null)
D.dRE=new C.apS(null)
D.dRR=new C.aqn(0,"smaller")
D.dRS=new C.aqn(1,"bigger")
D.aEe=new C.aqn(2,"fit")
D.dYp=new B.u(3,6)
D.dYz=new B.u(4,8)
D.e0X=new B.C(E.afl,T.aaB,null)
D.e10=new B.C(A.Xi,A.lY,null)
D.bCg=new B.ae(A.l9,16,A.c_,null,null,null)
D.e14=new B.C(A.j6,D.bCg,null)
D.b3A=new B.fh(2.2,null,null,null,null,A.c,null,null,null,null)
D.e1g=new B.C(A.F_,D.b3A,null)
D.bMr=new B.ae(A.cx,16,A.ay,null,null,null)
D.e1k=new B.C(A.en,D.bMr,null)
D.fbO=new B.x("Play",null,A.nd,null,null,null,null,null,null,null,null,null)
D.d0A=w([U.alC,A.ri,D.fbO],x.p)
D.eCn=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d0A,null)
D.e1n=new B.C(A.oo,D.eCn,null)
D.b3J=new B.fh(2.4,null,null,null,null,null,null,null,null,null)
D.eHC=new B.a6(20,20,D.b3J,null)
D.e1s=new B.C(A.j6,D.eHC,null)
D.fkz=new B.x("Seconds per slide",null,A.hm,null,null,null,null,null,null,null,null,null)
D.e1A=new B.C(A.bk,D.fkz,null)
D.e2V=new C.a7H(2,"print")
D.e2Y=new B.iL(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e4A=new B.h6("/Annot")
D.e4C=new B.h6("/URI")
D.f6m=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.e6q=new B.ji("share",48,D.f6m,null,B.ax("ji<n>"))
D.bMl=new B.ae(A.dV,14,A.ez,null,null,null)
D.e6z=new B.cK(null,-2,-2,null,null,null,D.bMl,null)
D.bck=new B.w(0.3333333333333333,0,0,0,A.t)
D.cJN=w([D.bck,A.K],x.O)
D.bSt=new B.a7(A.a3,A.a7,A.x,D.cJN,null,null)
D.aXw=new B.o(null,null,null,null,null,D.bSt,A.n)
D.bjG=new B.kG(D.aXw,A.bd,null,null)
D.e6L=new B.cK(0,0,null,0,8,null,D.bjG,null)
D.d4H=w([A.hS,A.og,A.cb],x.O)
D.e7p=new B.bR(A.A,0.5,A.x,null,0,D.d4H,null,null)
D.e9E=new B.z(0.22,A.bj)
D.edr=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.efq=new B.z(0.5,A.hc)
D.eoj=new B.z(0.78,A.aU)
D.exS=new B.cL([A.by,0.22,0.7,2.6])
D.exX=new B.cL([A.b7,0.36,1.2,1.3])
D.ey2=new B.cL([A.dO,0.28,0.2,0.4])
D.ey8=new B.cL([A.cv,0.05,0.3,0.35])
D.eye=new B.cL([A.bs,0.28,0.9,0])
D.eym=new B.cL([A.aE,-0.25,-0.15,0.45])
D.ez9=new B.cL([A.bZ,0.42,1,4.1])
D.eC5=new B.a8A(9)
D.bDn=new B.ae(A.FT,28,A.cp,null,null,null)
D.fl5=new B.x("NGMY News",null,A.du,null,null,null,null,null,null,null,null,null)
D.btp=new B.bE(1,A.bi,D.fl5,null)
D.d7L=w([D.bDn,A.aw,D.btp],x.p)
D.eCh=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d7L,null)
D.bDy=new B.ae(A.pz,16,A.c,null,null,null)
D.fmv=new B.x("Book",null,A.o_,null,null,null,null,null,null,null,null,null)
D.dbv=w([D.bDy,A.ea,D.fmv],x.p)
D.eCp=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.dbv,null)
D.bJY=new B.ae(A.ja,10,A.c,null,null,null)
D.f9Z=new B.x("Pro",null,A.nb,null,null,null,null,null,null,null,null,null)
D.d0F=w([D.bJY,A.pX,D.f9Z],x.p)
D.eCt=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.d0F,null)
D.fky=new B.x("Make a newspaper",null,As.SS,null,null,null,null,null,null,null,null,null)
D.bTB=w([E.a_P,A.ab,D.fky],x.p)
D.eCu=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.bTB,null)
D.bIw=new B.ae(A.l6,18,A.bJ,null,null,null)
D.fc1=new B.x("Ending celebration",null,A.jg,null,null,null,null,null,null,null,null,null)
D.d6Q=w([D.bIw,A.bp,D.fc1],x.p)
D.eCx=new B.co(A.aQ,A.e,A.j,A.m,null,A.p,null,0,D.d6Q,null)
D.bJK=new B.ae(A.j9,18,A.jJ,null,null,null)
D.eS2=new B.F(!0,A.jJ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmM=new B.x("Write",null,D.eS2,null,null,null,null,null,null,null,null,null)
D.cRd=w([D.bJK,A.ab,D.fmM],x.p)
D.eCC=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cRd,null)
D.f9X=new B.x("Download picture",null,A.q0,null,null,null,null,null,null,null,null,null)
D.bvq=new B.q5(A.eg,A.A,A.f,D.f9X,null)
D.bvB=new B.dm(1,A.ci,D.bvq,null)
D.d11=w([K.als,A.ab,D.bvB],x.p)
D.eCD=new B.co(A.aQ,A.ba,A.j,A.m,null,A.p,null,0,D.d11,null)
D.bFj=new B.ae(A.FT,22,A.cp,null,null,null)
D.fje=new B.x("NGMY NEWS",null,H.a6q,null,null,null,null,null,null,null,null,null)
D.cJf=w([D.bFj,A.ab,D.fje],x.p)
D.eCL=new B.co(A.aQ,A.e,A.Q,A.m,null,A.p,null,0,D.cJf,null)
D.eCW=new B.oY(!1,!1,null,T.UL,null,A.bW,null,null,null)
D.a5t=new B.jJ([D.cg,D.dc,D.tW,D.Hk,D.tX,D.aE4],B.ax("jJ<hv>"))
D.dXd={title:0,quote:1,closing:2,bio:3}
D.eE3=new B.eV(D.dXd,4,x.M)
D.dVr={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eE5=new B.eV(D.dVr,5,x.M)
D.dWL={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a5u=new B.eV(D.dWL,8,x.M)
D.dW8={Design:0,Transitions:1,Insert:2}
D.eE9=new B.eV(D.dW8,3,x.M)
D.fOU=new B.jJ([D.a3Q],B.ax("jJ<vE>"))
D.dWf={float3d:0,drift:1,pulse:2}
D.eEc=new B.eV(D.dWf,3,x.M)
D.aLg=new B.jJ([D.Hh,D.Hi,D.Hj],B.ax("jJ<mn>"))
D.dVo={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aLj=new B.eV(D.dVo,14,x.M)
D.fOV=new B.eV(A.ia,0,B.ax("eV<vE>"))
D.dWc={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.RX=new B.eV(D.dWc,4,x.M)
D.dVi={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aLl=new B.eV(D.dVi,30,x.M)
D.dWk={circle:0,triangle:1,hexagon:2,diamond:3}
D.eEs=new B.eV(D.dWk,4,x.M)
D.eGB=new B.at(390,844)
D.eHm=new B.a6(20,20,A6.JM,null)
D.aM7=new B.a6(null,2.5,null,null)
D.eHw=new B.a6(18,18,A6.JM,null)
D.bJO=new B.ae(A.iQ,19,A.c,null,null,null)
D.eHH=new B.a6(38,38,D.bJO,null)
D.bI6=new B.ae(A.y3,22,A.c,null,null,null)
D.eHJ=new B.a6(40,40,D.bI6,null)
D.eIh=new B.hH(2,10,10,1.15,null)
D.aMf=new B.hH(2,16,14,0.62,null)
D.brv=new B.Q(32,30,32,40)
D.b5_=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bDk=new B.ae(A.pu,56,D.b5_,null,null,null)
D.adM=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eTZ=new B.F(!0,D.adM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new B.x("Your books will live here.",null,D.eTZ,null,A.L,null,null,null,null,null,null,null)
D.cTP=w([D.bDk,A.S,D.fgo],x.p)
D.biT=new B.fl(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cTP,null)
D.e1y=new B.C(D.brv,D.biT,null)
D.eIC=new B.lY(D.e1y,null)
D.fgl=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eIU=new B.b1(D.fgl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.feu=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eIV=new B.b1(D.feu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fjh=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ3=new B.b1(D.fjh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fjN=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eJi=new B.b1(D.fjN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fdb=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eJv=new B.b1(D.fdb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fqB=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eJO=new B.b1(D.fqB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fnP=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eJZ=new B.b1(D.fnP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fjV=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eKF=new B.b1(D.fjV,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f8k=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eKV=new B.b1(D.f8k,null,null,null,null,null,null,null,A.ie,null,null,null,null,A.pl,!1,null,null,null,A.q,null)
D.fa4=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eLc=new B.b1(D.fa4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fg3=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eLe=new B.b1(D.fg3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.ffK=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eLf=new B.b1(D.ffK,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.flQ=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eLg=new B.b1(D.flQ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f4z=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eLp=new B.b1(D.f4z,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fb9=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eLM=new B.b1(D.fb9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fpo=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eLO=new B.b1(D.fpo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.foX=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eLS=new B.b1(D.foX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f3B=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLU=new B.b1(D.f3B,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fl0=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eM2=new B.b1(D.fl0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.foy=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eMh=new B.b1(D.foy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.foo=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new B.b1(D.foo,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f3t=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eMp=new B.b1(D.f3t,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f7l=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMR=new B.b1(D.f7l,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.fnC=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eN1=new B.b1(D.fnC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.f79=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eNg=new B.b1(D.f79,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.q,null)
D.bbE=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cI4=w([A.ij,A.of,D.bbE,D.aaY,A.ij],x.O)
D.eNE=new B.fS(A.A,0,6.283185307179586,A.x,D.cI4,null,null)
D.cQs=w([A.bJ,A.bV,A.hC,D.Ae,A.bJ],x.O)
D.aMP=new B.fS(A.A,0,6.283185307179586,A.x,D.cQs,null,null)
D.d2B=w([A.bZ,A.by,A.b7,A.bc,A.cp,A.bZ],x.O)
D.eNJ=new B.fS(A.A,0,6.283185307179586,A.x,D.d2B,null,null)
D.cK0=w([A.pj,A.oh,A.A0,A.ij,A.pj],x.O)
D.eNK=new B.fS(A.A,0,6.283185307179586,A.x,D.cK0,null,null)
D.d2v=w([A.aP,A.bI,A.aL,A.ak,A.aP],x.O)
D.eNL=new B.fS(A.A,0,6.283185307179586,A.x,D.d2v,null,null)
D.d9z=w([A.bs,A.b7,A.by,A.bZ,A.bs],x.O)
D.eNN=new B.fS(A.A,0,6.283185307179586,A.x,D.d9z,null,null)
D.bbV=new B.w(1,0,1,1,A.t)
D.b6c=new B.w(1,1,0,1,A.t)
D.d5U=w([A.DN,A.acE,H.abI,D.bbV,H.ac3,D.b6c,A.DN],x.O)
D.eNO=new B.fS(A.A,0,6.283185307179586,A.x,D.d5U,null,null)
D.eO2=new C.aup(2,"immersiveSticky")
D.eO3=new C.aup(3,"edgeToEdge")
D.eO4=new C.aup(4,"manual")
D.eQi=new B.F(!0,A.oa,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNk=new B.F(!0,A.f9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQS=new B.F(!0,E.mL,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSj=new B.F(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTh=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTq=new B.F(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTL=new B.F(!0,A.ez,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV6=new B.F(!0,A.bI,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVf=new B.F(!0,A.j3,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVt=new B.rl(!0,A.HD,null,null,null,null,A.dr,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVX=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWz=new B.F(!0,A.j1,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWX=new B.F(!0,A.ay,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e30=new B.iL(1,1,0.7568627450980392,0.027450980392156862)
D.eX0=new B.rl(!0,D.e30,null,null,null,null,A.dr,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.acL=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aO3=new B.F(!0,D.acL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new B.F(!0,D.adM,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX7=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aO5=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXL=new B.rl(!0,A.oK,null,null,null,null,A.dr,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY1=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.SL=new B.F(!0,A.ay,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new B.F(!0,D.acL,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Iw=new B.F(!0,A.ay,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ2=new B.F(!0,A.bV,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZa=new B.F(!0,A.bI,null,null,null,null,14,A.a4,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZd=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.auh,null,null,null)
D.eZw=new B.F(!0,A.cr,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZy=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZW=new B.F(!0,A.dy,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_s=new B.F(!0,A.aR,null,null,null,null,null,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_B=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new B.F(!0,A.ad,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOG=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOI=new B.F(!0,A.c_,null,null,null,null,11.5,A.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bgI=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f1y=new B.F(!0,D.bgI,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOQ=new B.F(!0,E.mL,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f21=new B.F(!0,A.bI,null,null,null,null,11,A.a4,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f24=new B.F(!0,N.l0,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWa=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new B.x("NEW",null,D.eWa,null,null,null,null,null,null,null,null,null)
D.f3w=new B.x("Hati ya Kuhowesha",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f3Y=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new B.x("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.f4Y=new B.x("Big quote mark",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f50=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.f5E=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.f5G=new B.x("How many slides?",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f6d=new B.x("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eS5=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6x=new B.x("Luxury FX",null,D.eS5,null,null,null,null,null,null,null,null,null)
D.f6T=new B.x("Font",null,A.rn,null,null,null,null,null,null,null,null,null)
D.f74=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.f7a=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f15=new B.F(!0,A.bI,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new B.x("Example  GA847",null,D.f15,null,null,null,null,null,null,null,null,null)
D.f7I=new B.x("Design shapes",null,A.iC,null,null,null,null,null,null,null,null,null)
D.f7R=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f7V=new B.x("Non-stop (loop)",null,A.hm,null,null,null,null,null,null,null,null,null)
D.f88=new B.x("Hati ya Kuhoweya",null,A.ho,null,null,null,null,null,null,null,null,null)
D.f8r=new B.x("Photo studio",null,A.fW,null,null,null,null,null,null,null,null,null)
D.f8R=new B.x("Add your picture",null,A.kT,null,null,null,null,null,null,null,null,null)
D.eVu=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8S=new B.x("Enter document code",null,D.eVu,null,A.L,null,null,null,null,null,null,null)
D.f8T=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.f8Y=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eT7=new B.F(!0,E.mL,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new B.x("Delete this book?",null,D.eT7,null,A.L,null,null,null,null,null,null,null)
D.eXA=new B.F(!0,E.mL,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa6=new B.x("Your library",null,D.eXA,null,null,null,null,null,null,null,null,null)
D.faa=new B.x("Delete",null,A.aNX,null,null,null,null,null,null,null,null,null)
D.fac=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ar.It,null,null,null,null,null,null,null,null,null)
D.fan=new B.x("Element flies in",null,A.aO9,null,null,null,null,null,null,null,null,null)
D.T2=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.faL=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.x("Cancel",null,E.aOj,null,null,null,null,null,null,null,null,null)
D.fb8=new B.x("The lines and circles that come with the design",null,A.hn,null,null,null,null,null,null,null,null,null)
D.f_X=new B.F(!0,A.he,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new B.x("DOCUMENT CODE",null,D.f_X,null,null,null,null,null,null,null,null,null)
D.fcm=new B.x("Quotes",null,G.a7_,null,null,null,null,null,null,null,null,null)
D.eUU=new B.F(!0,N.l0,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcu=new B.x("Add a picture",null,D.eUU,null,null,null,null,null,null,null,null,null)
D.fcC=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a6G,null,A.L,null,null,null,null,null,null,null)
D.fcF=new B.x("Look & feel",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fcJ=new B.x("Rings",null,A.jg,null,null,null,null,null,null,null,null,null)
D.fcP=new B.x("W",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fcZ=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fdh=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.SO,null,A.L,null,null,null,null,null,null,null)
D.fdj=new B.x("Write your book",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fe2=new B.x("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.feg=new B.x("Malipo ya Awamu ya Mahari",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eVj=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fev=new B.x("Create with AI",null,D.eVj,null,A.L,null,null,null,null,null,null,null)
D.feZ=new B.x("Apply look",null,A.jg,null,null,null,null,null,null,null,null,null)
D.eW1=new B.F(!0,A.ey,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.x("Type your presentation below",null,D.eW1,null,A.L,null,null,null,null,null,null,null)
D.ffP=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aOS,null,A.L,null,null,null,null,null,null,null)
D.ffR=new B.x("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eR9=new B.F(!0,A.ct,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffY=new B.x("Done",null,D.eR9,null,null,null,null,null,null,null,null,null)
D.fgh=new B.x("Delete",null,A.nc,null,null,null,null,null,null,null,null,null)
D.fgq=new B.x("Hati ya Kiapo cha Uongozi",null,A.ho,null,null,null,null,null,null,null,null,null)
D.eUg=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhi=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.eUg,null,A.L,null,null,null,null,null,null,null)
D.fhE=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new B.x("Layout",null,A.SU,null,null,null,null,null,null,null,null,null)
D.fik=new B.x("Print",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fio=new B.x("X",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fiX=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.SG,null,null,null,null,null,null,null,null,null)
D.fjt=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new B.x("Hati ya Kuhowa",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fjH=new B.x("Choose a class template",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fjP=new B.x("Download the newspaper picture",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fk_=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fk6=new B.x("Done",null,A.aOF,null,null,null,null,null,null,null,null,null)
D.fkg=new B.x("Ending celebration",null,A.du,null,null,null,null,null,null,null,null,null)
D.fkh=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.Sy,null,null,null,null,null,null,null,null,null)
D.flq=new B.x("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.flr=new B.x("What would you like to do?",null,D.aO3,null,null,null,null,null,null,null,null,null)
D.flu=new B.x("Delete",null,A.cu,null,null,null,null,null,null,null,null,null)
D.flY=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fm1=new B.x("Hati (Documents)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fmd=new B.x("Done",null,A.kU,null,null,null,null,null,null,null,null,null)
D.f0X=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.x("Delete presentation?",null,D.f0X,null,A.L,null,null,null,null,null,null,null)
D.fmz=new B.x("After the last slide it starts again from the first",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fmK=new B.x("\ud83c\udf33",null,A.Iq,null,A.L,null,null,null,null,null,null,null)
D.fn1=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fn8=new B.x("Transfer document",null,A.oT,null,null,null,null,null,null,null,null,null)
D.fnj=new B.x("Add to the slides",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fnG=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new B.x("Make a book",null,I.aNB,null,null,null,null,null,null,null,null,null)
D.fnZ=new B.x("Books",null,A.cu,null,null,null,null,null,null,null,null,null)
D.eUN=new B.F(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new B.x("Keep this page open until it finishes.",null,D.eUN,null,null,null,null,null,null,null,null,null)
D.fo2=new B.x("Making your video",null,A.du,null,null,null,null,null,null,null,null,null)
D.fo7=new B.x("LANGUAGE",null,D.SL,null,null,null,null,null,null,null,null,null)
D.foe=new B.x("Use this ending",null,A.cu,null,null,null,null,null,null,null,null,null)
D.fom=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fon=new B.x("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.foE=new B.x("Delete from the database?",null,A.kT,null,null,null,null,null,null,null,null,null)
D.foF=new B.x("H",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fp2=new B.x("NGMY Quotes",null,A.du,null,null,null,null,null,null,null,null,null)
D.fpt=new B.x("Cover",null,D.aOQ,null,null,null,null,null,null,null,null,null)
D.fpx=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new B.x("Each page becomes its own slide you can present",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fpU=new B.x("Y",null,A.rn,null,null,null,null,null,null,null,null,null)
D.fq4=new B.x("Crop the picture",null,A.kU,null,null,null,null,null,null,null,null,null)
D.fqa=new B.x("Edit text",null,A.Ir,null,null,null,null,null,null,null,null,null)
D.fsn=B.dP("a7t")
D.D_=new C.avI(0,"none")
D.aRp=new C.avI(1,"zipCrypto")
D.aRq=new C.avI(2,"aes")
D.fE6=new F.OD("","",null)
D.fFc=new C.baE(null)
D.fGj=new C.YK(null)
D.fHT=new C.ace(null)
D.fHV=new C.aCU(null)
D.fKG=new C.ZZ(null)
D.fKW=new C.a_t(null)
D.fLe=new C.bs4(null)})();(function staticFields(){$.h5R=null
$.h5S=null
$.h5T=null
$.h5U=null
$.fP7=B.uP("_lastQuoRemDigits")
$.fP8=B.uP("_lastQuoRemUsed")
$.aw3=B.uP("_lastRemUsed")
$.fP9=B.uP("_lastRem_nsh")
$.pT=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6i=B.V(x.N,x.I)
$.fMD=!1
$.haD=B.V(B.ax("kJ"),x.N)
$.haQ=B.V(B.ax("kJ"),x.E)
$.h8Q=!1
$.bxI="q"
$.PA=0
$.Ca=B.V(x.N,B.ax("ak<z4>"))
$.h9c=!1
$.fQH=!1
$.hfp=null
$.hJn=B.V(x.N,B.ax("ay<n?>"))
$.JM=""
$.iW=0
$.h2E=function(){var w=x.N
return B.V(w,w)}()
$.h2D=B.V(x.N,x.R)
$.fR1=!1
$.aeS=B.V(x.N,x.E)
$.fRP=0
$.biF=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"i7q","Cy",()=>C.b8b(0))
w($,"i7o","a1H",()=>C.b8b(1))
w($,"i7p","hiY",()=>C.b8b(2))
w($,"i7n","fVx",()=>$.a1H().uJ(0))
w($,"i7l","hiW",()=>C.b8b(1e4))
w($,"i7m","hiX",()=>B.DI(8))
w($,"i3d","hgZ",()=>B.DI(0))
w($,"i3l","hh2",()=>B.DI(0))
w($,"i3k","hh1",()=>B.bVV(0))
w($,"ib4","hkY",()=>{var v,u,t=x.N
t=B.V(t,t)
for(v=D.a2H.gdL(D.a2H),v=v.gah(v);v.C();){u=v.gU(v)
t.n(0,u.b,u.a)}return t})
w($,"ibv","bCd",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mL(new C.fxP(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mL(new C.fxQ(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mL(new C.fxR(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mL(new C.fy1(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mL(new C.fy6(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mL(new C.fy7(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mL(new C.fy8(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mL(new C.fy9(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mL(new C.fya(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mL(new C.fyb(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mL(new C.fyc(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mL(new C.fxS(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mL(new C.fxT(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mL(new C.fxU(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mL(new C.fxV(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mL(new C.fxW(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mL(new C.fxX(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mL(new C.fxY(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mL(new C.fxZ(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mL(new C.fy_(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mL(new C.fy0(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mL(new C.fy2(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mL(new C.fy3(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mL(new C.fy4(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mL(new C.fy5(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("P<E8>"))})
w($,"ib7","hl_",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["2oXdTq0v6F7lkXVALID655sEiKg="]=a.current})($__dart_deferred_initializers__);