((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tM(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fXi(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jy(d){var w
if(d===0)return $.CU()
if(d===1)return $.a2o()
if(d===2)return $.hrz()
if(Math.abs(d)<4294967296)return C.b9m(A.o.N(d))
w=C.hMf(d)
return w},
b9m(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tM(4,w)
return new C.nS(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tM(1,w)
return new C.nS(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aB(d,16)
v=C.tM(2,w)
return new C.nS(v===0?!1:s,w,v)}v=A.o.an(A.o.gajM(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tM(v,w)
return new C.nS(v===0?!1:s,w,v)},
hMf(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CU()
w=$.hry()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l5(A.aH.gaN(w))
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
q=new C.nS(!1,r,4)
if(s<0)p=q.mt(0,-s)
else p=s>0?q.dY(0,s):q
return p},
fXj(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hen(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dY(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fG(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dY(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hei(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fXj(d,e,s,g)
w=e+s+1
C.hen(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hMi(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dY(1,r)-1,o=A.o.fG(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dY(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fG(u,r)}w&2&&B.aj(g)
g[n]=o},
cEs(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hMg(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9n(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aB(v,16)&1)}},
heo(d,e,f,g,h,i){var w,v,u,t,s,r
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
hMh(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e7((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nS:function nS(d,e,f){this.a=d
this.b=e
this.c=f},
cEt:function cEt(){},
cEu:function cEu(){},
cEv:function cEv(d,e){this.a=d
this.b=e},
cEw:function cEw(d){this.a=d},
aQR:function aQR(d,e){this.a=d
this.b=e},
h4e(d,e,f){var w=new C.Rz(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rz:function Rz(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3z:function a3z(d,e){this.a=d
this.b=e},
bH5:function bH5(d){this.a=d
this.c=this.b=0},
huM(){return new C.bFs()},
bFs:function bFs(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwD:function cwD(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hLY(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcWs(d)))
v=f*2+2
u=C.hc_(C.hc1(),64)
t=new C.cgs(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cgt(e,1000,v)
s=new Uint8Array(v)
return A.aH.dr(s,0,t.cJU(w,0,s,0))},
cwB:function cwB(d,e){this.c=d
this.d=e},
awG:function awG(d,e){this.a=d
this.b=e},
cwE:function cwE(d,e,f,g){var _=this
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
b83:function b83(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwC:function cwC(){this.a=$},
hdN(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
huv(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bE2:function bE2(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h1W(d,e){e&=31
return(d&$.q8[e])<<e>>>0},
nq(d,e){e&=31
return(d>>>e|C.h1W(d,32-e))>>>0},
hc0(d){var w,v=new C.aso()
if(B.iH(d))v.aJO(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hc1(){var w=C.hc0(0),v=new Uint8Array(4),u=x.S
u=new C.cgu(w,v,A.E2,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lC(0)
return u},
hc_(d,e){var w=new C.cgq(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cgp:function cgp(){},
cgt:function cgt(d,e,f){this.a=d
this.b=e
this.c=f},
cgn:function cgn(){},
asn:function asn(d){this.a=d},
cgs:function cgs(d){this.a=$
this.b=d
this.c=$},
cgo:function cgo(){},
cgm:function cgm(){},
aso:function aso(){this.b=this.a=$},
cgr:function cgr(){},
cgu:function cgu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cgq:function cgq(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cgl:function cgl(){},
cgk:function cgk(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNt:function bNt(){},
bNu:function bNu(d){this.a=d},
hPc(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9C:function b9C(){},
cqs:function cqs(){},
bOm:function bOm(d,e){this.a=d
this.b=!1
this.c=e},
bOn:function bOn(){},
hY2(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avk(d){var w=0,v=B.j(x.H),u
var $async$avk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eZ0?2:4
break
case 2:w=5
return B.b(A.kc.fZ("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avk)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kc.fZ("SystemChrome.setEnabledSystemUIOverlays",C.hY2(null),u),$async$avk)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avk,v)},
avn:function avn(d,e){this.a=d
this.b=e},
a8a:function a8a(d){this.a=d},
fTh(d,e){return new C.aVl(e,d,null)},
aVl:function aVl(d,e,f){this.e=d
this.c=e
this.a=f},
aAe:function aAe(d,e,f,g,h){var _=this
_.ah=d
_.ak=e
_.aa$=f
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
i_H(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.ftb(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bn(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
ftb:function ftb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ane(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ane=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agD("ngmy_menu_lib_v1_zzslides_index",A.bI),$async$ane)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cD(t,new C.bZ2(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bZ3())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ane,v)},
ang(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ang=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ane(),$async$ang)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a7().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.np("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$ang)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],t,q),null),$async$ang)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ang,v)},
bZ4(d){return C.hAe(d)},
hAe(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bZ4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agD("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hM),$async$bZ4)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VI(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.aa(m)
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
return B.i($async$bZ4,v)},
anf(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ane(),$async$anf)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nr(r,new C.bZ5(d))
w=4
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),null),$async$anf)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOV("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anf)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anf,v)},
bZ2:function bZ2(){},
bZ3:function bZ3(){},
bZ5:function bZ5(d){this.a=d},
i9E(d,e,f){return B.bS(A.K,null,new C.fJ7(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fJ7:function fJ7(d,e,f){this.a=d
this.b=e
this.c=f},
a0C:function a0C(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aID:function aID(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f6s:function f6s(d,e){this.a=d
this.b=e},
f6w:function f6w(d){this.a=d},
f6x:function f6x(d){this.a=d},
f6y:function f6y(d,e,f){this.a=d
this.b=e
this.c=f},
f6t:function f6t(d){this.a=d},
f6u:function f6u(d){this.a=d},
f6v:function f6v(d,e){this.a=d
this.b=e},
f6n:function f6n(d){this.a=d},
f6l:function f6l(d){this.a=d},
f6m:function f6m(d){this.a=d},
f6o:function f6o(d){this.a=d},
f6p:function f6p(d){this.a=d},
f6C:function f6C(d,e){this.a=d
this.b=e},
f6B:function f6B(d,e){this.a=d
this.b=e},
f6r:function f6r(d,e,f){this.a=d
this.b=e
this.c=f},
f6q:function f6q(d,e,f){this.a=d
this.b=e
this.c=f},
f6z:function f6z(d,e){this.a=d
this.b=e},
f6A:function f6A(d,e){this.a=d
this.b=e},
f6F:function f6F(d){this.a=d},
f6G:function f6G(d,e){this.a=d
this.b=e},
f6E:function f6E(d,e){this.a=d
this.b=e},
f6D:function f6D(){},
hgN(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aI(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cD(v,new C.fdE(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fdF(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1B(d){return C.i0X(d)},
i0X(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1B=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fvO(n)
t=4
j=m
i=C
w=7
return B.b(B.a2a("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1B)
case 7:j.$1(i.hgN(f))
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
return B.b(B.az(),$async$a1B)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hgN(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a_<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fdN(d),$async$a1B)
case 13:p=j.C(new i.a_(h,new g.fvM(f),o),o.k("J.E"))
A.d.b0(p,new C.fvN())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1B,v)},
ahd(d,e){return C.i9j(d,e)},
i9j(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahd=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fIC(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah5("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahd)
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
return B.b(B.az(),$async$ahd)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahd)
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
return B.i($async$ahd,v)},
fdN(d){return C.hQx(d)},
hQx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fdN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fdN)
case 7:r=f
q=r.ta("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kC(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fdN,v)},
ag3(d,e){return C.i_z(d,e)},
i_z(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ag3=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ag3)
case 6:s=g
r=B.aX(x.N)
q=s.ta("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h3(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$ag3)
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
return B.b(C.a1B(d),$async$ag3)
case 8:n=g
J.nr(n,new C.fsQ(e))
w=9
return B.b(C.ahd(d,n),$async$ag3)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ag3,v)},
i9J(d,e){return B.a6(d,!1).ck(B.e8(new C.fJt(e),!0,null,x.H))},
hMk(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFP())},
oi:function oi(d,e,f){this.a=d
this.b=e
this.c=f},
fdE:function fdE(){},
fdF:function fdF(){},
fvO:function fvO(d){this.a=d},
fvM:function fvM(d){this.a=d},
fvN:function fvN(){},
fIC:function fIC(){},
fsQ:function fsQ(d){this.a=d},
fJt:function fJt(d){this.a=d},
Ym:function Ym(d,e){this.c=d
this.a=e},
axd:function axd(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFP:function cFP(){},
cFR:function cFR(d,e){this.a=d
this.b=e},
cFU:function cFU(d){this.a=d},
cFV:function cFV(d){this.a=d},
cFT:function cFT(){},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFS:function cFS(d){this.a=d},
cFX:function cFX(){},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
cFY:function cFY(){},
cFL:function cFL(d){this.a=d},
cFJ:function cFJ(d){this.a=d},
cFK:function cFK(d){this.a=d},
cFM:function cFM(d,e){this.a=d
this.b=e},
cFI:function cFI(d){this.a=d},
cFH:function cFH(d){this.a=d},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFG:function cFG(d){this.a=d},
cFO:function cFO(){},
cFN:function cFN(d){this.a=d},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFD:function cFD(d,e){this.a=d
this.b=e},
cFC:function cFC(d,e){this.a=d
this.b=e},
cFZ:function cFZ(d){this.a=d},
Yk:function Yk(d,e,f){this.c=d
this.d=e
this.a=f},
aEv:function aEv(d,e,f){this.a=d
this.b=e
this.c=f},
ax9:function ax9(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cF5:function cF5(d){this.a=d},
cF4:function cF4(d){this.a=d},
cF7:function cF7(d,e,f){this.a=d
this.b=e
this.c=f},
cFf:function cFf(){},
cFg:function cFg(d){this.a=d},
cF8:function cF8(d,e,f){this.a=d
this.b=e
this.c=f},
cF6:function cF6(d,e){this.a=d
this.b=e},
cFa:function cFa(d,e){this.a=d
this.b=e},
cFb:function cFb(d,e){this.a=d
this.b=e},
cFc:function cFc(d,e){this.a=d
this.b=e},
cF9:function cF9(d){this.a=d},
cFe:function cFe(d){this.a=d},
cFd:function cFd(d,e){this.a=d
this.b=e},
cFl:function cFl(d){this.a=d},
cFh:function cFh(d,e){this.a=d
this.b=e},
cFi:function cFi(d,e){this.a=d
this.b=e},
cFj:function cFj(d,e){this.a=d
this.b=e},
cFk:function cFk(d,e){this.a=d
this.b=e},
axb:function axb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i3h(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bA(new C.fAh(),x.H).eP(new C.fAi())}}else if(s)C.hie()}catch(t){}},
hie(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eP(new C.fi3())}catch(u){}},
i3k(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fAh:function fAh(){},
fAi:function fAi(){},
fi3:function fi3(){},
hmQ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
hmN(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l5)return null
return A.a.b3(w,14)},
h0F(d){var w
if(d.b!==D.l5)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b3(w,21)},
i3K(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hmR(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i3F(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kY(0,f)
t=x.N
u=B.cD(u,new C.fBg(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kY(0,f),u=new B.Jx(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Rg(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Rg(A.a.b3(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i3D(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fBf())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.ca(s,"]"))continue
w=B.aPR(w,u,s,0)}return w},
i3H(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3P:$.htz(),s=x.N,r=B.T(s,s)
for(s=t.gdO(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.ca(u,"]"))continue
r.n(0,w.b,u)}return r},
hmO(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
feG(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hmQ(q)===e)return q}return null},
i3I(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b3(v,u)
return A.d.gI(D.GJ).a},
i3J(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adX(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adX(0,0,0)
v=C.feG(b6,b0)
u=C.feG(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i3H(b2,C.i3F(C.hmO(b2),v.r))
if(s.a!==0){u.r=C.i3D(C.hmO(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hmQ(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.feG(b6,n)
i=C.feG(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.h0F(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hmN(a8)===a0||C.h0F(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QO(a1,new C.fBm(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j0
$.j0=a9+1
A.d.L(a1,new C.eL(""+1000*a6+"_"+a9,D.l5,a2,a3,a4,a5,"",24,A.a5,A.bn,A.aD,4279310375,A.bh,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adX(k,t,e)},
i3E(d){var w=C.i3I(d)
if(d.w==="hati_kuhowa")return C.hma("",w)
return C.hm9("",w)},
fBg:function fBg(){},
fBf:function fBf(){},
fBm:function fBm(d){this.a=d},
hhY(){var w=new B.S(Date.now(),0,!1),v=new C.fh6()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
h0O(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fCe(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l5&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hn4(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fCe(d)
w=B.bi(u)
if(w==null)return!C.fCe(d)
return new B.S(Date.now(),0,!1).a7().cY(w.a7().bR(18e9))},
i4p(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a7().ac()},
hEf(d){return A.a.i(d).toLowerCase()},
app(d){return C.hEh(d)},
hEh(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$app=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$app)
case 7:r=f
p=r.ta("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.M(o,C.i7X(),B.U(o).k("M<1,n>")).c0(0,new C.c8C())
o=B.dd(o,o.$ti.k("J.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$app,v)},
apo(d,e){return C.hEg(d,e)},
hEg(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apo=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.app(d),$async$apo)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apo)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qh(r)),$async$apo)
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
return B.i($async$apo,v)},
apq(d,e){return C.hEi(d,e)},
hEi(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.app(d),$async$apq)
case 3:r=g
if(!J.hv(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$apq)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qh(r)),$async$apq)
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
return B.i($async$apq,v)},
V0(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$V0=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fUM&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$V0)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aI(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jw(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VI(B.a2(f.a(n.b),e,a0)))}$.a6Z=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.aa(a2)
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
return B.b(B.c3(),$async$V0)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tZ("civic_hati_kiapo_uongozi",null,A.ef),$async$V0)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jw(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VI(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6Z.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a6Z.n(0,i.a,i.b)}w=20
return B.b(C.apr(),$async$V0)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.aa(a3)
$.am.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fUM=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V0,v)},
apr(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apr=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$apr)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6Z,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apr)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.aa(l)
$.am.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$apr,v)},
aZM(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.V0(!1),$async$aZM)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6Z.h(0,t)
r=s==null?null:s.hG()
if(r==null){u=null
w=1
break}u=C.bBA(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZM,v)},
a7_(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7_=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hG()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6Z.n(0,d,o)
$.fUM=!0
w=3
return B.b(C.apr(),$async$a7_)
case 3:w=4
return B.b(B.c3(),$async$a7_)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6Z,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.np("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a7().ac()],e,x.z),null),$async$a7_)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.aa(a0)
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
return B.i($async$a7_,v)},
aps(d){var w=0,v=B.j(x.T),u,t,s
var $async$aps=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hZ().a5o(A.eJ),$async$aps)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fl(),$async$aps)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZL(t,d),$async$aps)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aps,v)},
aZL(d,e){return C.hEj(d,e)},
hEj(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZL=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZL)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ie("media")
w=8
return B.b(p.wX(q,new Uint8Array(B.ce(d)),D.bzx),$async$aZL)
case 8:n=p.CB(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.aa(k)
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
return B.i($async$aZL,v)},
Kp(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
fgm(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f2,j,k,l)},
fYO(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eq(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
ffV(d,e,f,g){return C.fgm(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fYP(d,e,f,g,h,i,j,k){var w=C.cB()
return C.eq(A.qr,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bn,A.a5,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hhX(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
bBA(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hhX(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l5&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hG()}h=C.h0j(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BA(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hhX(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l5&&A.a.ca(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fAf(a2))}else A.d.bq(a1.z,new C.fAg())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fCe(a0))a0.ax=a6.f.a7().ac()
return a0},
h0j(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fD1(D.a4R),l=C.cB(),k=x.u,j=B.a([C.eq(A.bh,!1,s,A.aD,"marriage_locked_bg",r,24,A.bn,A.a5,"",1,C.cB(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lw,1,0,0)],k),i=B.a([],k)
i.push(C.Kp("NGMY",A.L,236069181,52,A.bn,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kp("TAREHE:",A.bh,o,16,A.bn,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fYO("tarehe",0.8059999999999999,0.026,0.18,A.bh,16,p,C.hhY()))
i.push(C.ffV(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kp("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bn,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kp("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fgm(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fYP("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fYP("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fYP("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fgm(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kp("VIDEO YA KIAPO",A.bh,o,10,A.bn,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eq(A.bh,!1,s,A.aD,"__kiapo_video__",r,24,A.bn,A.a5,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lw,0.77,0.115,0.492))
i.push(C.Kp("Rais Anayeapa:",A.bh,p,15,A.bn,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kp("Jina:",A.bh,p,13,A.bn,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fYO("rais_jina",0.195,0.6930000000000001,0.62,A.bh,13,p,""))
i.push(C.ffV(0.195,0.7130000000000001,0.62,n))
i.push(C.Kp("Sahihi:",A.bh,p,13,A.bn,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eq(A.bh,!1,s,A.aD,"marriage_sign_rais",0,24,A.bn,A.a5,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f2,0.38,0.21500000000000002,0.73))
i.push(C.ffV(0.21500000000000002,0.795,0.38,n))
i.push(C.Kp("Tarehe:",A.bh,p,13,A.bn,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fYO("rais_tarehe",0.745,0.74,0.2,A.bh,12,p,C.hhY()))
i.push(C.ffV(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fgm(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kp("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bn,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rt(4294967035,t,0,0,j,l,D.qf,"","",u,D.dd)
return C.BA(t,t,t,t,D.od,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
age(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$age=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.J(x.q).f.U(D.eTQ)
w=1
break}w=3
return B.b(C.V0(!0),$async$age)
case 3:w=4
return B.b(C.aZM(p),$async$age)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hn4(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bS(D.bdk,null,new C.fv9(p),f,!0,!0,!1,A.lx,!1,!1,x.N),$async$age)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fva(),f,null,!0,!0,x.y),$async$age)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h0j(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.J(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h0j(p))
case 1:return B.h(u,v)}})
return B.i($async$age,v)},
fh6:function fh6(){},
c8C:function c8C(){},
fAf:function fAf(d){this.a=d},
fAg:function fAg(){},
fv9:function fv9(d){this.a=d},
fv7:function fv7(d){this.a=d},
fv8:function fv8(d){this.a=d},
fva:function fva(){},
fv5:function fv5(d){this.a=d},
fv6:function fv6(d){this.a=d},
apX:function apX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDh:function aDh(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e9L:function e9L(d){this.a=d},
e9J:function e9J(d){this.a=d},
e9K:function e9K(d){this.a=d},
e9M:function e9M(d){this.a=d},
e9N:function e9N(d){this.a=d},
wu(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hhB(d,e,f){var w=4291404327
return B.a([C.q7(0,f,D.eM,w,2,"ring_l",f,d-f*0.42,e),C.q7(0,f,D.eM,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
ffl(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q7(4294967288,f,D.eM,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q7(h,s,D.eM,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q7(h,f*0.46,D.eM,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q7(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f2,j,k,l)},
ffk(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eq(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
bz0(d,e,f,g){return C.q7(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hhA(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q7(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.wu(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hmP(){var w=new B.S(Date.now(),0,!1),v=new C.fBl()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hhC(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wu(r+".",A.bh,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.ffk("witness_"+d+"_"+r+"_name",q,g,p,A.bh,!0,16,j,"[Jina la Shahidi]"),C.bz0(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wu("Sahihi:",A.bh,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bn,A.a5,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f2,s,t,g-0.004),C.bz0(t,g+0.044,s,w)],x.u)},
agF(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dcG,D.ci6,D.d5m,D.d7a],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fY5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fD1(d.d),v=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cB(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lw,1,0,0)],x.u)
A.d.v(v,C.hSX(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hSX(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wu("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hhB(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hhB(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.ffl(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.ffl(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wu("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q7(0,0.062,D.eM,b1,1.6,"crest_o",0.11,0.445,0.012),C.q7(0,0.046,D.eM,b1,1,"crest_i",0.084,0.458,0.02),C.wu("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q7(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q7(b9,0.016,D.l6,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q7(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wu("TAREHE:",A.bh,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.ffk("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bh,!1,21,b9,C.hmP()),C.bz0(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wu(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q7(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q7(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.eq(A.bh,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bn,A.cw,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q7(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.eq(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bn,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hhA(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wu(c9,A.bh,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.ffk("mahari_"+p,0.132,k,m,A.bh,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j0
$.j0=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j0
$.j0=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eL(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bn,A.aD,c0,A.bh,a9,D.bf,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eL(""+1000*f+"_"+e,D.f2,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bn,A.aD,b6,A.bh,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j0
$.j0=p+1
i=Date.now()
h=$.j0
$.j0=h+1
g=Date.now()
f=$.j0
$.j0=f+1
e=Date.now()
a3=$.j0
$.j0=a3+1
A.d.v(d,B.a([new C.eL(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bn,A.aD,b7,A.dN,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eL(""+1000*i+"_"+h,D.f2,a1,a2,0.046,0.025875,"",24,A.a5,A.bn,A.aD,b6,A.bh,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eL(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bn,A.aD,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eL(""+1000*e+"_"+a3,D.f2,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bn,A.aD,b6,A.bh,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hhA("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4G||w===D.a4I||w===D.a4F||w===D.a4H){w=t-0.008
A.d.v(c2,C.ffl(0.21,w,0.044,!0,b0))
A.d.v(c2,C.ffl(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q7(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.q7(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q7(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wu("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wu("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hhC("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hhC("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q7(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.wu("MWANDISHI",A.bh,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wu("Jina:",A.bh,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.ffk("mwandishi_jina",0.215,w,0.3116,A.bh,!0,15,b9,""),C.bz0(0.215,p,0.3116,b5),C.wu("Sahihi:",A.bh,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.eq(A.bh,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bn,A.a5,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f2,0.3161999999999999,0.5738,s-0.044),C.bz0(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q7(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.wu("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i3G(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h0Y(d.d),p=new C.fBh(s),o=new C.fBi(s),n=d.z,m=n===D.a4G||n===D.a4I||n===D.a4F||n===D.a4H,l=n===D.aF4||n===D.a4J||n===D.aF5,k=B.bZ(0,B.fO(q,A.A,t,t,A.ci,A.bU,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4J?26:16
i.push(new C.fBk().$1$size(w))}if(n===D.aF6)i.push(D.fyL)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hC,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.w(B.a([p.$0(),D.aOa,p.$1$w(0.9),D.aOa,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b8I,t,n,w,t,t,A.n),t,t,t,t,A.aiG,t,t,t))
i.push(A.am)
i.push(new C.fBj(r).$1("NIMETOWE"))
i.push(A.h1)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.M2,new B.cl(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bB(1,A.bg,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b1,A.r,B.a([k,new B.D(A.ahf,B.w(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hm9(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agF(e,t)
if(r==null)r=A.d.gI(D.GJ)
w=C.cB()
v=C.rt(r.e,t,0,0,C.fY5(r,0.165,y.O,D.d7K,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qf,"","",s,D.dd)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BA(t,t,t,t,D.od,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hma(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agF(e,t)
if(r==null)r=A.d.gI(D.GJ)
w=C.cB()
v=C.rt(r.e,t,0,0,C.fY5(r,0.165,y.f,D.d3v,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qf,"","",s,D.dd)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BA(t,t,t,t,D.od,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCW(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fMV(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCW,v)},
agf(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agf=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fvd(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lf,null,new C.fve(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agf)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCW(d,"Hati ya Kuhowa",D.GJ),$async$agf)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L2(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agf)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hm9(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agf,v)},
agg(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agg=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fvh(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lf,null,new C.fvi(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agg)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCW(d,"Hati ya Kuhoweya",D.GJ),$async$agg)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L2(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agg)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hma(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
agh(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agh=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fvl(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lf,null,new C.fvm(m),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agh)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCW(d,"Malipo ya Awamu ya Mahari",D.Qs),$async$agh)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L2(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agh)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agF(s,D.Qs)
if(q==null)q=A.d.gI(D.Qs)
n=C.cB()
p=C.rt(q.e,null,0,0,C.fY5(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cZv,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qf,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BA(null,null,null,null,D.od,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agh,v)},
xs:function xs(d,e){this.a=d
this.b=e},
jm:function jm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fBl:function fBl(){},
fBh:function fBh(d){this.a=d},
fBj:function fBj(d){this.a=d},
fBk:function fBk(){},
fBi:function fBi(d){this.a=d},
fMV:function fMV(d,e){this.a=d
this.b=e},
ad1:function ad1(d,e,f){this.c=d
this.d=e
this.a=f},
dY5:function dY5(d,e,f){this.a=d
this.b=e
this.c=f},
dY4:function dY4(d,e){this.a=d
this.b=e},
dY3:function dY3(d,e){this.a=d
this.b=e},
acq:function acq(d,e,f){this.c=d
this.d=e
this.a=f},
fvd:function fvd(){},
fve:function fve(d){this.a=d},
fvb:function fvb(d){this.a=d},
fvc:function fvc(d){this.a=d},
fvh:function fvh(){},
fvi:function fvi(d){this.a=d},
fvf:function fvf(d){this.a=d},
fvg:function fvg(d){this.a=d},
fvl:function fvl(){},
fvm:function fvm(d){this.a=d},
fvj:function fvj(d){this.a=d},
fvk:function fvk(d){this.a=d},
Ks(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.eq(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
CB(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f2,j,k,l)},
hih(d,e,f){return C.CB(0,0.002,D.fs,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bza(d,e,f,g,h){return B.a([C.CB(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Ks(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fYT(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.CB(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.CB(h,0.016,D.l6,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CB(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0Z(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ks(d,A.bh,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.eq(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hih(u,g+0.018,t)],x.u)},
hii(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CB(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.CB(w,0.024,D.l6,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CB(w,0.024,D.l6,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ks(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz9(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ks("Sahihi:",A.bh,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bn,A.a5,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f2,v,w,f-0.006),C.hih(w,f+0.016,v)],x.u)},
h0Z(d){var w,v
for(w=0;w<19;++w){v=D.QG[w]
if(v.a===d)return v}return null},
i5X(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agF(A.a.b3(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agF(A.a.b3(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b3(k,18)
w=C.agF(u,D.Qs)
v=w==null?l:w.d
if(v==null){w=C.agF(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h0Z(A.a.b3(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hj6.a8(0)
$.hjj.a8(0)
t=C.fD1(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h22(d){var w=0,v=B.j(x.T),u
var $async$h22=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fOn(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h22,v)},
xv:function xv(d,e){this.a=d
this.b=e},
nF:function nF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biG:function biG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fOn:function fOn(){},
ad4:function ad4(d){this.a=d},
ef_:function ef_(d,e){this.a=d
this.b=e},
eeZ:function eeZ(d){this.a=d},
eeY:function eeY(d,e){this.a=d
this.b=e},
aeL:function aeL(d,e,f){this.c=d
this.d=e
this.a=f},
h0Y(d){return $.hjj.c8(0,d,new C.fD3(d))},
fD1(d){return $.hj6.c8(0,d,new C.fD2(d))},
fB(d){return B.fSl(d>>>16&255,d>>>8&255,d&255,255)},
hW_(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hko(4294570461,4293910718,4284234270,u)
case 1:return C.hko(4294635750,4293975240,t,4292912216)
case 2:w=C.fdV(s,4294505966,r)
C.byV(w,14,16,p)
C.ks(w,8,9,464,836,u,1.2)
C.Cx(w,2,2,1,1,u,10)
C.Cx(w,478,2,-1,1,u,10)
C.Cx(w,2,852,1,-1,u,10)
C.Cx(w,478,852,-1,-1,u,10)
return w
case 3:return C.fdV(4294966515,4294373082,4289102906)
case 4:return C.hQM(C.fdV(4294376440,4293653998,4290287194))
case 5:w=C.fdV(4294965238,4294437098,4288444980)
C.byV(w,14,16,4283043359)
C.ks(w,6,7,468,840,u,1)
C.ks(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,n,4294175448)
C.rO(v,n)
C.ks(v,24,24,432,806,4286209070,1)
C.a0M(v,12,12,468,12,o,3,20)
C.a0M(v,12,842,468,842,o,3,20)
C.a0M(v,12,12,12,842,o,3,20)
C.a0M(v,468,12,468,842,o,3,20)
return v
case 7:return C.hOT(4294440434,4293518297,4280228630,r)
case 8:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,m,4293911504)
C.rO(v,m)
C.ks(v,28,28,424,798,l,1)
C.fnc(v,28,28,l,k)
C.fnc(v,452,28,l,k)
C.fnc(v,28,826,l,k)
C.fnc(v,452,826,l,k)
return v
case 9:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,j,4294111986)
C.rO(v,j)
C.ks(v,18,18,444,818,4292401368,0.7)
B.iJ(v,!0,C.fB(p),0,13,0,853)
return v
case 10:return C.hSJ(i,4294173372)
case 11:return C.hTO(4294439140,4293449662)
case 12:return C.hOL(h,4294239432)
case 13:return C.hTf(4294244340,4293193448)
case 14:return C.hXA(4294505710,4293780694)
case 15:return C.fcT(4294966259,4294439138,o,p,q)
case 16:return C.fcT(4294966776,4294178544,o,g,g)
case 17:return C.fcT(4294965493,4294504170,o,4286200650,q)
case 18:return C.fcT(4294966519,4294373862,o,p,p)
case 19:return C.hRR()
case 20:return C.hRS()
case 21:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,h,4293976768)
C.rO(v,h)
C.byV(v,14,16,p)
B.iJ(v,!0,C.fB(u),4,475,4,9)
B.iJ(v,!0,C.fB(u),4,475,844,849)
B.iJ(v,!0,C.fB(u),4,9,4,849)
B.iJ(v,!0,C.fB(u),470,475,4,849)
C.a0M(v,10,12,470,12,u,2,16)
C.a0M(v,10,842,470,842,u,2,16)
C.a0M(v,10,12,10,842,u,2,18)
C.a0M(v,470,12,470,842,u,2,18)
C.Cx(v,2,2,1,1,t,10)
C.Cx(v,478,2,-1,1,t,10)
C.Cx(v,2,852,1,-1,t,10)
C.Cx(v,478,852,-1,-1,t,10)
C.ks(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,s,4294438872)
C.rO(v,s)
C.ks(v,14,16,452,822,o,2.2)
C.ks(v,22,24,436,806,o,1)
C.h_c(v,!1,!1,o,p,p,36,14,16)
C.kH(v,240,20,7,o,!0)
C.kH(v,240,834,7,o,!0)
C.kH(v,18,427,7,o,!0)
C.kH(v,462,427,7,o,!0)
return v
case 23:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,i,4293910712)
C.rO(v,i)
B.iJ(v,!0,C.fB(u),0,479,0,20)
B.iJ(v,!0,C.fB(u),0,479,834,853)
B.iJ(v,!0,C.fB(u),0,20,0,853)
B.iJ(v,!0,C.fB(u),460,479,0,853)
B.iJ(v,!0,C.fB(f),5,474,5,9)
B.iJ(v,!0,C.fB(f),5,474,844,848)
B.iJ(v,!0,C.fB(f),5,9,5,848)
B.iJ(v,!0,C.fB(f),470,474,5,848)
C.ks(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hp(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.ym(v,e,4294174404)
C.rO(v,e)
C.byV(v,14,16,p)
B.iJ(v,!0,C.fB(u),3,476,3,8)
B.iJ(v,!0,C.fB(u),3,476,845,850)
B.iJ(v,!0,C.fB(u),3,8,3,850)
B.iJ(v,!0,C.fB(u),471,476,3,850)
C.ks(v,9,10,462,834,t,1)
C.ks(v,14,16,452,822,u,1.8)
C.kH(v,240,8,4,u,!0)
C.kH(v,240,846,4,u,!0)
C.kH(v,8,427,4,u,!0)
C.kH(v,472,427,4,u,!0)
C.kH(v,8,8,3,t,!0)
C.kH(v,472,8,3,t,!0)
C.kH(v,8,846,3,t,!0)
C.kH(v,472,846,3,t,!0)
return v}},
ym(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kK(d,!1,A.dc,new B.RU(s),r,A.cX,1,0,w-1,k,k);++k}},
rO(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eJ()
n.dw(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aA(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aA(v==null?0:v)
v=d.a
s=v==null?o:v.dU(u,t,o)
if(s==null)s=new B.iE()
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jM(u,t,v,r,q,255)}},
ks(d,e,f,g,h,i,j){var w,v=null,u=C.fB(i),t=e+g
B.kK(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kK(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kK(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kK(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Cx(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kK(d,!0,A.dc,C.fB(i),u,A.cX,2,e,e+g*j,f,f)
B.kK(d,!0,A.dc,C.fB(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kK(d,!0,A.dc,C.fB(i),u,A.cX,1,w,e+g*t,v,v)
B.kK(d,!0,A.dc,C.fB(i),u,A.cX,1,w,w,v,f+h*t)},
hko(d,e,f,g){var w=null,v=B.hp(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.ym(v,d,e)
C.rO(v,d)
B.iJ(v,!0,C.fB(f),0,479,0,28)
B.iJ(v,!0,C.fB(f),0,479,826,853)
B.iJ(v,!0,C.fB(f),0,28,0,853)
B.iJ(v,!0,C.fB(f),452,479,0,853)
C.ks(v,5,5,470,844,g,1.1)
C.ks(v,28,28,424,798,g,1.6)
C.Cx(v,2,2,1,1,g,11)
C.Cx(v,478,2,-1,1,g,11)
C.Cx(v,2,852,1,-1,g,11)
C.Cx(v,478,852,-1,-1,g,11)
return v},
fdV(d,e,f){var w=null,v=B.hp(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.ym(v,d,e)
C.rO(v,d)
C.ks(v,14,16,452,822,f,1.6)
C.ks(v,20,22,440,810,f,0.8)
return v},
byV(d,e,f,g){var w,v=C.fB(g)
B.iJ(d,!0,v,0,479,0,f-1)
w=854-f
B.iJ(d,!0,v,0,479,w,853);--w
B.iJ(d,!0,v,0,e-1,f,w)
B.iJ(d,!0,v,480-e,479,f,w)},
hQM(d){var w,v,u=4291404327
C.byV(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kH(d,w,8,3,u,!0)
C.kH(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kH(d,7,v,3,u,!0)
C.kH(d,473,v,3,u,!0)}return d},
fqf(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.je(e,f),new B.je(e+g*n,f),new B.je(e,f+h*n)],t)
B.a1y(d,C.fB(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.je(s,u),new B.je(e+g*v,u),new B.je(s,f+h*v)],t)
B.a1y(d,C.fB(k),t)
t=A.k.V(n*0.39)
C.kH(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kH(d,e+g*t,f+h*3,4,k,!0)
C.kH(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kH(d,e+g*t,f,5,k,!0)
C.kH(d,e,f+h*t,5,k,!0)}},
h_c(d,e,f,g,h,i,j,k,l){var w,v
C.fqf(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fqf(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fqf(d,k,v,1,-1,e,f,g,h,i,j)
C.fqf(d,w,v,-1,-1,e,f,g,h,i,j)},
a0M(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l0(d,!0,A.dc,new B.r_(p),null,A.cX,j,r,q)}},
fpl(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kK(d,!0,A.dc,new B.r_(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kK(d,!0,A.dc,new B.r_(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hOT(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hp(o,o,A.cb,0,A.e3,854,o,0,3,o,A.cb,480,!1)
C.ym(n,d,e)
C.rO(n,d)
C.ks(n,20,20,440,814,f,1.2)
C.fpl(n,0,0,1,1,g)
C.fpl(n,480,0,-1,1,g)
C.fpl(n,0,854,1,-1,g)
C.fpl(n,480,854,-1,-1,g)
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
B.kK(n,!0,A.dc,new B.r_(p),o,A.cX,1.2,240,r,60,q)}return n},
fnc(d,e,f,g,h){var w
C.ftc(d,!0,C.fB(g),13,e,f)
C.ftc(d,!0,C.fB(g),9,e,f)
w=B.a([new B.je(e,f-4),new B.je(e+4,f),new B.je(e,f+4),new B.je(e-4,f)],x.J)
B.a1y(d,C.fB(h),w)},
kH(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.je(e,v),new B.je(u,f),new B.je(e,t),new B.je(s,f)],x.J)
if(i){B.a1y(d,C.fB(h),r)
return}B.kK(d,!0,A.dc,C.fB(h),w,A.cX,1,e,u,v,f)
B.kK(d,!0,A.dc,C.fB(h),w,A.cX,1,u,e,f,t)
B.kK(d,!0,A.dc,C.fB(h),w,A.cX,1,e,s,t,f)
B.kK(d,!0,A.dc,C.fB(h),w,A.cX,1,s,e,f,v)},
fcS(d,e,f,g,h,i,j){var w,v=B.a([new B.je(e,f),new B.je(e+g*28,f),new B.je(e,f+h*28)],x.J)
B.a1y(d,C.fB(i),v)
v=e+g*14
w=f+h*14
C.kH(d,v,w,6,j,!0)
C.kH(d,v,w,3,i,!0)},
fcT(d,e,f,g,h){var w=null,v=B.hp(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.ym(v,d,e)
C.rO(v,d)
C.ks(v,18,18,444,818,f,2)
C.ks(v,26,26,428,802,f,0.9)
if(h!=null)B.iJ(v,!0,C.fB(h),28,451,28,34)
C.fcS(v,18,18,1,1,g,f)
C.fcS(v,462,18,-1,1,g,f)
C.fcS(v,18,836,1,-1,g,f)
C.fcS(v,462,836,-1,-1,g,f)
return v},
hRR(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hp(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
C.ym(r,u,4294240980)
C.rO(r,u)
C.ks(r,10,12,460,830,t,3.2)
C.ks(r,18,20,444,814,s,1.2)
C.ks(r,24,26,432,802,t,1.8)
C.h_c(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kH(r,w,16,3,t,!0)
C.kH(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kH(r,16,w,3,t,!0)
C.kH(r,464,w,3,t,!0)}return r},
hRS(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hp(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
C.ym(p,s,4294373080)
C.rO(p,s)
C.ks(p,16,18,448,818,r,2.4)
C.ks(p,24,26,432,802,4286209044,1)
w=new C.ffc(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h_c(p,!1,!0,r,q,q,34,16,18)
return p},
bzB(d,e,f,g,h,i){B.iJ(d,!0,C.fB(i),e,e+g,f,f+h)},
bAq(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kK(d,!1,A.dc,new B.RU(i),null,A.cX,1,e,w,l,l)}},
hSI(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kK(d,!1,A.dc,new B.r_(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kK(d,!1,A.dc,new B.r_(r),null,A.cX,1,t,t,f,s);++q}},
hSJ(d,e){var w,v,u=null,t=B.hp(u,u,A.cb,0,A.e3,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hSI(t,v,w,30,D.cSo,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzB(t,44,44,392,766,d)
C.bAq(t,44,44,392,766,d,e)
C.rO(t,d)
C.ks(t,44,44,392,766,4292128567,2.2)
C.ks(t,50,50,380,754,4279898632,0.8)
return t},
hTN(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kH(d,e,f,7,h,!0)
C.kH(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kK(d,!0,A.dc,C.fB(h),o,A.cX,1.6,w,u,v,t)
B.kK(d,!0,A.dc,C.fB(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kK(d,!0,A.dc,new B.r_(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kK(d,!0,A.dc,C.fB(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kK(d,!0,A.dc,C.fB(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l0(d,!0,A.dc,C.fB(h),o,A.cX,2,e,f)}},
hTO(d,e){var w,v,u,t,s=null,r=B.hp(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
B.iJ(r,!0,C.fB(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hTN(r,u,v,w,4292391514)}C.bzB(r,46,46,388,762,d)
C.bAq(r,46,46,388,762,d,e)
C.rO(r,d)
C.ks(r,46,46,388,762,4291404327,1.8)
return r},
hfP(d,e,f,g){C.ftc(d,!0,C.fB(g),16,e,f)
C.ftc(d,!0,C.fB(g),11,e,f)
C.kH(d,e,f,6,g,!0)
B.kK(d,!0,A.dc,C.fB(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kK(d,!0,A.dc,C.fB(g),null,A.cX,1.3,e,e,f-14,f+14)},
hOL(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hp(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
B.iJ(s,!0,C.fB(4280948752),0,479,0,853)
B.iJ(s,!0,C.fB(u),0,479,0,78)
B.iJ(s,!0,C.fB(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hfP(s,w,39,t)
C.hfP(s,w,815,t)}C.bzB(s,38,92,404,670,d)
C.bAq(s,38,92,404,670,d,e)
C.rO(s,d)
C.ks(s,38,92,404,670,t,1.8)
C.ks(s,45,99,390,656,4287322667,0.8)
return s},
hTe(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.je(e,f),new B.je(q-5,w),new B.je(q,f-(18-Math.abs(r)*3)),new B.je(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1y(d,new B.r_(o),p)}B.l0(d,!0,A.dc,C.fB(4292128567),null,A.cX,3,e,f)},
hTf(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hp(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
C.ym(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kK(q,!0,A.dc,new B.r_(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kK(q,!0,A.dc,new B.r_(u),s,A.cX,1.1,v,v,0,853)}B.iJ(q,!0,C.fB(r),0,479,0,70)
B.iJ(q,!0,C.fB(r),0,479,798,853)
for(t=0;t<5;++t)C.hTe(q,70+t*85,48,4292128567)
C.bzB(q,48,78,384,712,d)
C.bAq(q,48,78,384,712,d,e)
C.rO(q,d)
C.ks(q,48,78,384,712,4291404327,1.6)
return q},
hXA(d,e){var w,v,u,t=null,s=4279970378,r=B.hp(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
B.iJ(r,!0,C.fB(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kH(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l0(r,!0,A.dc,new B.r_(u),t,A.cX,1,v,w)}C.bzB(r,40,40,400,774,d)
C.bAq(r,40,40,400,774,d,e)
C.rO(r,d)
C.ks(r,40,40,400,774,4291058750,2)
C.ks(r,48,48,384,758,s,0.8)
return r},
kR:function kR(d,e){this.a=d
this.b=e},
fD3:function fD3(d){this.a=d},
fD2:function fD2(d){this.a=d},
ffc:function ffc(d){this.a=d},
fDH(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hTH(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fYM(d){var w,v,u,t=null,s=A.a.cH(d,"{"),r=A.a.oD(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aI(0,Ai.agB(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af8(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$af8)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n5(n)
if(e==null)s=A.hB
else{r=C.hTH(e)
s=B.a([new B.a_M(A.cT.gcA().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qP(t,d,s,"news",E.Fc),$async$af8)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KS(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af8,v)},
bC3(d){return C.i5D(d)},
i5D(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bC3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af8(r,null),$async$bC3)
case 7:q=f
p=C.fYM(q)
if(p==null){u=d
w=1
break}o=d.aCc(p)
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
return B.i($async$bC3,v)},
hjI(d){var w,v=F.h0f(d)
v=B.aK(v,"book","newspaper")
if(F.a1R(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fHC(d,e,f,g){return C.i7u(d,e,f,g)},
i7u(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fHC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fDH(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hnd()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af8('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hjI(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fHC)
case 3:r=m.fYM(i)
if(r==null)throw B.V(y.S)
q=new C.zp(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aCc(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1R(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1R(A.d.aH(t," "))==="sw"?C.bC3(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHC,v)},
bBy(d,e,f,g,h){return C.i3f(d,e,f,g,h)},
i3f(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBy=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fN(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hnd()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af8('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hjI(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBy)
case 3:p=j.fYM(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cI(o)){n=d.aCc(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1R(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bC3(n),$async$bBy)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7E(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBy,v)},
a7E:function a7E(d,e,f){this.a=d
this.b=e
this.c=f},
iah(d,e){return B.a6(d,!1).ck(B.e8(new C.fOy(e),!0,null,x.H))},
fOy:function fOy(d){this.a=d},
Vw:function Vw(d,e){this.c=d
this.a=e},
aDA:function aDA(d,e,f,g,h,i,j,k){var _=this
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
eih:function eih(d){this.a=d},
eig:function eig(){},
eii:function eii(d){this.a=d},
eif:function eif(d,e){this.a=d
this.b=e},
eij:function eij(){},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ei0:function ei0(d){this.a=d},
ei1:function ei1(d,e){this.a=d
this.b=e},
ei2:function ei2(d){this.a=d},
ehW:function ehW(d,e){this.a=d
this.b=e},
ehX:function ehX(d,e){this.a=d
this.b=e},
ehY:function ehY(d,e){this.a=d
this.b=e},
ehZ:function ehZ(d){this.a=d},
ei_:function ei_(d){this.a=d},
ehV:function ehV(d,e){this.a=d
this.b=e},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei9:function ei9(d){this.a=d},
ei7:function ei7(d){this.a=d},
eia:function eia(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
eib:function eib(d){this.a=d},
ei5:function ei5(d){this.a=d},
eic:function eic(d){this.a=d},
ei4:function ei4(d){this.a=d},
eid:function eid(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e){this.a=d
this.b=e},
eie:function eie(d){this.a=d},
ehR:function ehR(d,e){this.a=d
this.b=e},
fCD(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fCD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hhk){w=1
break}r=new C.fCE()
t=4
q=x.s
w=7
return B.b(B.iM(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fCD)
case 7:$.hhk=!0
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
return B.i($async$fCD,v)},
bBV(d){return A.H3[B.my(d)-1]+", "+A.p0[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hWE(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dgT[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h0E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fF(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fAW(),B.U(v).k("a_<1>")))
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
continue}o=new C.fAY(j,h)
n=new C.fAX(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iV(o.$1(l)))
j.a+=l}return u},
fYv(d,e){var w=new C.feN()
return A.d.cK(e,0,new C.feL(w))>=A.d.cK(d,0,new C.feM(w))},
heu(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bE())
return u},
zp:function zp(d,e,f,g,h,i,j,k,l,m){var _=this
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
cci:function cci(d){this.a=d},
ccg:function ccg(){},
cch:function cch(){},
tg:function tg(d,e){this.a=d
this.b=e},
Bn:function Bn(d,e){this.a=d
this.b=e},
ld:function ld(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fCE:function fCE(){},
fAW:function fAW(){},
fAY:function fAY(d,e){this.a=d
this.b=e},
fAX:function fAX(d,e,f){this.a=d
this.b=e
this.c=f},
feN:function feN(){},
feO:function feO(){},
feL:function feL(d){this.a=d},
feM:function feM(d){this.a=d},
b0h:function b0h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ccj:function ccj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cck:function cck(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ccl:function ccl(d){this.a=d},
bbR:function bbR(d){this.a=d},
bbQ:function bbQ(d,e){this.b=d
this.a=e},
bts:function bts(d){this.a=d},
b8l:function b8l(d,e){this.b=d
this.a=e},
bqX:function bqX(d,e){this.b=d
this.a=e},
hp8(d,e){return B.a6(d,!1).ck(B.e8(new C.fOB(e,null),!0,null,x.E))},
fOB:function fOB(d,e){this.a=d
this.b=e},
Vz:function Vz(d,e,f){this.c=d
this.d=e
this.a=f},
aDE:function aDE(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ejs:function ejs(){},
ejt:function ejt(d){this.a=d},
ejr:function ejr(d,e){this.a=d
this.b=e},
ejf:function ejf(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejm:function ejm(d){this.a=d},
ejn:function ejn(d,e){this.a=d
this.b=e},
ejk:function ejk(d){this.a=d},
ejl:function ejl(d,e,f){this.a=d
this.b=e
this.c=f},
ejh:function ejh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejo:function ejo(d,e){this.a=d
this.b=e},
ejj:function ejj(d,e){this.a=d
this.b=e},
ejp:function ejp(d){this.a=d},
eji:function eji(d,e){this.a=d
this.b=e},
ejq:function ejq(d,e){this.a=d
this.b=e},
bbn:function bbn(d,e,f){this.b=d
this.c=e
this.a=f},
ian(d){return B.a6(d,!1).ck(B.e8(new C.fOR(),!0,null,x.I))},
bzm(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fZU(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fOR:function fOR(){},
a_D:function a_D(d){this.a=d},
ou:function ou(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF0:function aF0(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aM=_.aE=_.au=_.Y=_.b8=_.bh=_.y2=0
_.b1=null
_.aO=0.25
_.bb=null
_.bz=0.5
_.aS=1
_.c3=_.bQ=_.bk=0
_.cP=_.cJ=!1
_.c=_.a=null},
eT2:function eT2(d){this.a=d},
eRV:function eRV(d,e){this.a=d
this.b=e},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSs:function eSs(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRF:function eRF(d){this.a=d},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d){this.a=d},
eSb:function eSb(d,e){this.a=d
this.b=e},
eSc:function eSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSo:function eSo(d,e,f){this.a=d
this.b=e
this.c=f},
eSn:function eSn(d,e){this.a=d
this.b=e},
eSp:function eSp(d,e){this.a=d
this.b=e},
eSm:function eSm(d,e){this.a=d
this.b=e},
eSr:function eSr(d,e,f){this.a=d
this.b=e
this.c=f},
eSq:function eSq(d,e){this.a=d
this.b=e},
eRu:function eRu(d){this.a=d},
eRv:function eRv(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRt:function eRt(){},
eRx:function eRx(d,e){this.a=d
this.b=e},
eRs:function eRs(d,e){this.a=d
this.b=e},
eRz:function eRz(){},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRr:function eRr(d,e){this.a=d
this.b=e},
eRo:function eRo(d,e){this.a=d
this.b=e},
eRA:function eRA(d){this.a=d},
eRq:function eRq(d,e){this.a=d
this.b=e},
eRB:function eRB(d){this.a=d},
eRp:function eRp(d,e){this.a=d
this.b=e},
eSS:function eSS(d,e){this.a=d
this.b=e},
eSZ:function eSZ(d){this.a=d},
eT_:function eT_(d,e){this.a=d
this.b=e},
eT0:function eT0(){},
eST:function eST(d,e){this.a=d
this.b=e},
eSR:function eSR(d,e){this.a=d
this.b=e},
eSU:function eSU(d,e){this.a=d
this.b=e},
eSQ:function eSQ(d,e){this.a=d
this.b=e},
eSV:function eSV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSP:function eSP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSW:function eSW(d){this.a=d},
eSX:function eSX(d,e){this.a=d
this.b=e},
eSY:function eSY(d){this.a=d},
eSO:function eSO(d){this.a=d},
eSB:function eSB(d){this.a=d},
eSC:function eSC(d){this.a=d},
eSA:function eSA(d,e){this.a=d
this.b=e},
eSv:function eSv(d,e){this.a=d
this.b=e},
eSD:function eSD(d){this.a=d},
eSG:function eSG(d){this.a=d},
eSz:function eSz(d){this.a=d},
eSH:function eSH(d){this.a=d},
eSI:function eSI(d){this.a=d},
eSJ:function eSJ(d){this.a=d},
eSK:function eSK(d){this.a=d},
eSy:function eSy(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSx:function eSx(d){this.a=d},
eSM:function eSM(d,e){this.a=d
this.b=e},
eSw:function eSw(d,e){this.a=d
this.b=e},
eSN:function eSN(d){this.a=d},
eSE:function eSE(d){this.a=d},
eSF:function eSF(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSg:function eSg(d,e){this.a=d
this.b=e},
eSd:function eSd(d,e){this.a=d
this.b=e},
eSh:function eSh(d){this.a=d},
eS7:function eS7(d){this.a=d},
eS6:function eS6(d){this.a=d},
eS8:function eS8(d){this.a=d},
eS5:function eS5(d){this.a=d},
eS9:function eS9(d,e){this.a=d
this.b=e},
eS4:function eS4(d,e){this.a=d
this.b=e},
eS3:function eS3(d,e){this.a=d
this.b=e},
eRM:function eRM(d){this.a=d},
eRN:function eRN(d){this.a=d},
eRO:function eRO(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRQ:function eRQ(d){this.a=d},
eRR:function eRR(d){this.a=d},
eRS:function eRS(d){this.a=d},
eRT:function eRT(d){this.a=d},
eRU:function eRU(d){this.a=d},
eR7:function eR7(d){this.a=d},
eR8:function eR8(d){this.a=d},
eR9:function eR9(d){this.a=d},
eRa:function eRa(d){this.a=d},
eRb:function eRb(d){this.a=d},
eR6:function eR6(d){this.a=d},
eRc:function eRc(d){this.a=d},
eRd:function eRd(d){this.a=d},
eRG:function eRG(d){this.a=d},
eRH:function eRH(d){this.a=d},
eRI:function eRI(d){this.a=d},
eRJ:function eRJ(d){this.a=d},
eRK:function eRK(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRl:function eRl(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRf:function eRf(d){this.a=d},
eRn:function eRn(d){this.a=d},
eRe:function eRe(d){this.a=d},
eSa:function eSa(d){this.a=d},
eS2:function eS2(d){this.a=d},
eRZ:function eRZ(d){this.a=d},
eRY:function eRY(d){this.a=d},
eS_:function eS_(d,e){this.a=d
this.b=e},
eRX:function eRX(d,e){this.a=d
this.b=e},
eS0:function eS0(d,e){this.a=d
this.b=e},
eRW:function eRW(d,e){this.a=d
this.b=e},
eS1:function eS1(d){this.a=d},
eSl:function eSl(d){this.a=d},
eSk:function eSk(d,e,f){this.a=d
this.b=e
this.c=f},
eSj:function eSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSu:function eSu(d,e){this.a=d
this.b=e},
eSt:function eSt(d,e){this.a=d
this.b=e},
eRL:function eRL(d){this.a=d},
eT1:function eT1(d){this.a=d},
beW:function beW(d,e){this.b=d
this.a=e},
i5O(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i5P(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kY(0,d),m=B.C(n,B.a3(n).k("J.E"))
if(m.length===0)return d
w=new B.fe("")
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
o=B.aK(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b3(d,v)
return n.charCodeAt(0)==0?n:n},
bzX(){var w=$.bz4,v=$.Qb
$.Qb=v+1
return w+"_"+v},
ic(d,e,f,g,h,i,j){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,C.bzX(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f2,g,e,f)},
nV(d,e,f,g){var w=f*9
return C.ic(D.eM,d-f/2,e-w/32,f,w/16,g,0)},
hQm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bz4
p=$.Qb
$.Qb=p+1
w.push(new C.eL(q+"_"+p,D.f2,0,r,1,0.0016,"",24,A.a5,A.bn,A.aD,k,A.bh,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bz4
p=$.Qb
$.Qb=p+1
w.push(new C.eL(q+"_"+p,D.f2,o,0,0.004,1,"",24,A.a5,A.bn,A.aD,k,A.bh,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nV(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nV(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ic(D.bf,0.08,0.08,0.5,0.003,v,0),C.ic(D.bf,0.58,0.08,0.004,0.06,v,0),C.ic(D.bf,0.58,0.14,0.34,0.003,v,0),C.ic(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ic(D.bf,0.08,0.8,0.004,0.14,t,0),C.ic(D.bf,0.08,0.94,0.6,0.003,t,0),C.nV(0.58,0.08,0.05,e),C.nV(0.92,0.22,0.05,e),C.nV(0.08,0.8,0.05,f),C.nV(0.68,0.94,0.05,f),C.nV(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ic(D.l6,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ic(D.l6,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ic(D.l6,0.7,0.8,0.22,0.12,w|1140850688,0),C.ic(D.l6,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nV(0.5,0.5,1.5,w|335544320),C.nV(0.5,0.5,1.15,w|402653184),C.nV(0.5,0.5,0.8,v|436207616),C.nV(0.95,0.05,0.4,v|855638016),C.nV(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nV(0.85,0.08,0.7,w|1140850688),C.nV(0.1,0.35,0.5,v|855638016),C.nV(0.9,0.62,0.55,v|771751936),C.nV(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ic(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ic(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ic(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ic(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nV(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nV(0.5,0.2,0.65,(w|3422552064)>>>0),C.nV(0.5,0.2,0.95,w|855638016),C.ic(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ic(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ic(D.jO,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ic(D.jO,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ic(D.jO,0.15,0.86,0.6,0.14,1712265002,0),C.nV(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cTO[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bz4
l=$.Qb
$.Qb=l+1
w.push(new C.eL(m+"_"+l,D.f2,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bn,A.aD,k,A.bh,null,D.eM,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nV(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ic(D.jO,0.35,-0.1,0.3,0.62,w|855638016,0),C.ic(D.jO,0.05,-0.1,0.3,0.55,v,-0.5),C.ic(D.jO,0.65,-0.1,0.3,0.55,v,0.5),C.nV(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ic(D.bf,0.06,0.04,0.88,0.002,e,0),C.ic(D.bf,0.06,0.96,0.88,0.002,e,0),C.ic(D.bf,0.06,0.04,0.004,0.92,e,0),C.ic(D.bf,0.936,0.04,0.004,0.92,e,0),C.ic(D.bf,0.09,0.07,0.82,0.001,w,0),C.ic(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ic(D.jP,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ic(D.jP,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ic(D.jP,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ic(D.bf,0,0,0.3,0.09,w|1140850688,0),C.ic(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.ic(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.ic(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ic(D.eM,0.62,0.02,0.5,0.16,v,0.6),C.ic(D.eM,0.78,0.12,0.4,0.12,u,0.9),C.ic(D.eM,-0.12,0.8,0.5,0.16,u,-0.6),C.ic(D.eM,-0.05,0.9,0.4,0.12,v,-0.9),C.nV(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ic(D.bf,0.09,0.12,0.16,0.006,e,0),C.ic(D.bf,0.05,0.03,0.9,0.001,w,0),C.ic(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i2j(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bz4=j
$.Qb=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fyk()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_background",m,24,A.bn,A.a5,"",1,C.bzX(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cm,D.lw,1,0,0))
if(a9)A.d.v(q,C.hQm(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i5O(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fyj(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bn,A.a5,a1,a3*9/16,C.bzX(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cm,D.lw,a3,a4,a5))
return C.rt(s,r,0,0,q,j+"_slide",D.qf,"","","",D.dd)},
rs:function rs(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g,h,i,j,k,l,m){var _=this
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
fyk:function fyk(){},
fyj:function fyj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hGt(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdG(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.zr(u,t,s,B.t(w==null?"":w))},
fG_(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fG_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hhG){w=1
break}$.hhG=!0
t=4
w=7
return B.b(B.az(),$async$fG_)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aI(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jw(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hGt(m)
if(l!=null)J.ci(n,l)}$.Cy.c8(0,B.t(o.a),new C.fG0(n))}C.fZA()
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
return B.i($async$fG_,v)},
fZA(){var w,v=new B.S(Date.now(),0,!1).bR(-12e8)
for(w=new B.du($.Cy,$.Cy.r,$.Cy.e);w.C();)J.nr(w.d,new C.fmp(v))
$.Cy.bq($.Cy,new C.fmq())},
aNC(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNC=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aNC)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Cy,B.a3($.Cy).k("cK<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ci(p,B.F(["at",g.a.a7().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aNC)
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
return B.i($async$aNC,v)},
i6p(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fZA()
w=$.Cy.c8(0,d,new C.fG2())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.px(w,0,new C.zr(new B.S(v,0,!1),f,u,g))
C.aNC()},
i6m(d){var w,v=$.Cy.h(0,d)
if(v==null||J.cn(v))return
w=J.cF(v)
w.cw(v,0)
if(w.gam(v))$.Cy.W(0,d)
C.aNC()},
zr:function zr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdG:function cdG(){},
fG0:function fG0(d){this.a=d},
fmp:function fmp(d){this.a=d},
fmq:function fmq(){},
fG2:function fG2(){},
i6r(d){return A.d.dM(D.w1,new C.fG5(d),new C.fG6())},
hGr(d){var w
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
hGq(d){var w
switch(d.a){case 0:w=D.al5
break
case 1:w=A.yj
break
case 2:w=A.am9
break
case 3:w=K.akI
break
case 4:w=A.alA
break
case 5:w=A.lV
break
default:w=null}return w},
hTk(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PS[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PS[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hGs(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.S.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i6n(d,e,f,g,h){var w=new B.M(D.w1,new C.fFZ(),x.eC).aH(0,", "),v=""+d,u=C.hn5(h),t=F.fzJ(h),s=C.hjh(g),r=e.t(0,D.HY)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HZ)?'- New slides get an "icon3d" from: '+A.d.aH(D.PS,", ")+".\n":"",p=e.t(0,D.CJ)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i6o(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.w1,new C.fG1(),x.eC).aH(0,", "),p=new B.fe("")
if(e.t(0,D.HY)){p.a=s
w=s}else w=""
if(e.t(0,D.HZ))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.PS,", ")+".\n")
if(e.t(0,D.CJ))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hn5(d)
v=F.fzJ(d)
u=C.hjh(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agR(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CX(a3,"{"),a5=J.fRV(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lb(a3,a4,a5+1)
try{w=A.S.aI(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fDZ(),m).c0(0,new C.fE_())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
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
f=C.hTk(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a7M(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fp(u).b:q))
p=A.d.b4(D.w1,new C.fE0(r))?r:a7
o=C.flE(J.q(w,"logo_frame"),D.C5)
n=C.flE(J.q(w,"logo_ring"),D.C_)
m=C.flE(J.q(w,"photo_frame"),D.C5)
l=C.flE(J.q(w,"photo_ring"),D.C_)
return new C.aqM(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1n(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hmc(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CK),f7=f6?C.hN6():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eJ()
v.dw(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.fn(t,v)
s=u.c
s=new C.nJ("luxe",u.a,A.lV,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i6r(f9.b)
r=g2.t(0,D.a5_)||f6
q=g2.t(0,D.HY)
p=g2.t(0,D.RP)
o=new C.fyo()
n=B.a([],x.g)
m=new C.fyr(o,w,r)
l=new C.fyq(o,r)
k=new C.fyp(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b4(u,new C.fyn(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cVk[b8]
c0=D.cUg[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eOR.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eM,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eM,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eM,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mJ,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qg,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.RM
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eM,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l6,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CH
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eM,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eM,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mJ,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qg,500,f2,f0))
d3=D.mI
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eM,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uo:D.cm
c1.push(new C.eL(b4,D.a4Y,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bn,A.aD,4279310375,A.bh,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mI
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eM,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eM,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mJ,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qg,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.RM
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eM,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eM,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HW,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mI}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hOK(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.djc[A.o.E(b1,6)]:s
n.push(new C.lE(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BA(e4,e4,e4,e4,D.CG,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fAM(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fAM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CJ)
n=e.t(0,D.HZ)
if(!o&&!n){u=D.a3W
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fAP(o,s[r],n,$.hS5,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iM(t,x.e),$async$fAM)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAM,v)},
fzM(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fzM=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i6o(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMY(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fzM)
case 3:u=s.aNi(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fzM,v)},
bBz(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBz=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i6p(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agR(i,"colorful")
t=C.i6n(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMY(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hB),$async$bBz)
case 3:u=o.aNi(m,f,h,g,D.dXI,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBz,v)},
aMY(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMY=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$aMY)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n5(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qP(t,d,g,"slides",null),$async$aMY)
case 7:q=i
p=q.b
if(p!=null){o=C.agR(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KS(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMY,v)},
aNi(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CJ)||e.t(0,D.HZ)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dd(e,x.Q)
t.W(0,D.CJ)}w=6
return B.b(C.fAM(d,t),$async$aNi)
case 6:s=k
w=4
break
case 5:s=D.a3W
case 4:t=d.c
w=A.d.b4(t,new C.feI())?7:9
break
case 7:r=$.hnY
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dQ(r,x.aP),$async$aNi)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hmc(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hGs(new C.aqM(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("M<1,n>")
t=B.C(new B.M(m,new C.feJ(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jO<co.E,n>")
t=B.C(new B.jO(e,new C.feK(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.RP)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNi,v)},
h1n(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2I[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
ias(d){return B.bS(A.K,null,new C.fP2(),d,!0,!0,!0,null,!1,!1,x.I)},
hNJ(d,e){var w,v=e.toLowerCase()
if(A.a.ca(v,".png"))w="image/png"
else w=A.a.ca(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cT.gcA().aJ(d)},
iar(d,e,f){return B.bS(A.K,null,new C.fP1(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h1o(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h1p(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
flE(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.flF(w))?w:""},
hjh(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hnW(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agR(a1==null?"":a1,a0),a3=C.agR(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.re(new B.a_(r,new C.fG7(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("J.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.a_(k,new C.fG8(),v),r)
A.d.b0(g,new C.fG9())
if(g.length===0)continue
f=new C.fGa(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i6I(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGa
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dZD
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dZE
return null},
hiT(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bn(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dA(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i6s(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.od
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
if(C.hiT(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hiT(n,i,v,u))if(n.w>10){f=h+1
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
i6q(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agR(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2I[r]
if(q.b===s)w.L(0,q)}}v=C.h1o(e)
u=C.h1p(e)
p=C.hmc(n,D.a3W,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("M<1,n>")
o=B.C(new B.M(o,new C.fG3(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jO<co.E,n>")
o=B.C(new B.jO(w,new C.fG4(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.RP)
return p},
iae(d,e,f){return B.bS(A.K,null,new C.fOf(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hN6(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eJ()
s.dw(t)
w=D.czn[s.aA(10)]
v=new C.een(s)
u=x.N
return new C.eem(w,s.aA(4),J.fp(v.$1$2(D.cZJ,1,x.ff)),w.r[s.aA(3)],v.$1$2(D.deM,2+s.aA(2),u),v.$1$2(D.d7U,2,u),v.$1$2(D.dhK,4,x.fP),t)},
hOK(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eJ()
a1.dw(a5.w+a3*13)
w=new C.fbf(a4)
v=new C.fbh(a4,d)
u=new C.fbg(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fU(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fU(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.eM,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1n(a0,52),"lux_spot",a5.wu(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.wu(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEz(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.wu(0,f),D.dd,150,C.a1n(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.wu(0,f),D.dd,120,C.a1n(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1n(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.wu(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1n(a0,208),"lux_rule",a5.aEz(0,"shimmer",r),D.un,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1n(a0,144),"lux_rule2","",D.HW,220))}l=!A.d.b4(a2,new C.fbe())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wu(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wu(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1n(r,242)
j=a5.wu(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qg,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eM,t-0.007,0.9495,0.014,0.025,C.a1n(r,242),"lux_g2",a5.wu(0,"orbit"),D.qg,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fU(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.wu(0,"velvet")))},
nJ:function nJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fG5:function fG5(d){this.a=d},
fG6:function fG6(){},
vW:function vW(d,e){this.a=d
this.b=e},
a7M:function a7M(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqM:function aqM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fFZ:function fFZ(){},
fG1:function fG1(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fE0:function fE0(d){this.a=d},
fyo:function fyo(){},
fyr:function fyr(d,e,f){this.a=d
this.b=e
this.c=f},
fyq:function fyq(d,e){this.a=d
this.b=e},
fyp:function fyp(d,e){this.a=d
this.b=e},
fyn:function fyn(d){this.a=d},
fAP:function fAP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAN:function fAN(d){this.a=d},
fAO:function fAO(d){this.a=d},
feI:function feI(){},
feJ:function feJ(){},
feK:function feK(){},
fP2:function fP2(){},
a09:function a09(d){this.a=d},
aGW:function aGW(d,e,f,g,h){var _=this
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
eZf:function eZf(d,e,f){this.a=d
this.b=e
this.c=f},
eZg:function eZg(d,e){this.a=d
this.b=e},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZe:function eZe(d,e){this.a=d
this.b=e},
eZc:function eZc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eZ7:function eZ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eZb:function eZb(d,e){this.a=d
this.b=e},
eZ6:function eZ6(d,e){this.a=d
this.b=e},
eZa:function eZa(d,e){this.a=d
this.b=e},
eZ5:function eZ5(d,e){this.a=d
this.b=e},
eZ8:function eZ8(d){this.a=d},
eZ9:function eZ9(d,e){this.a=d
this.b=e},
eYW:function eYW(d,e){this.a=d
this.b=e},
eYX:function eYX(d,e){this.a=d
this.b=e},
eYZ:function eYZ(d){this.a=d},
eZ_:function eZ_(d){this.a=d},
eZ0:function eZ0(d){this.a=d},
eZ1:function eZ1(d){this.a=d},
eYY:function eYY(d,e){this.a=d
this.b=e},
eZ2:function eZ2(d,e){this.a=d
this.b=e},
eZt:function eZt(d){this.a=d},
eZu:function eZu(d){this.a=d},
eZs:function eZs(d){this.a=d},
eZv:function eZv(d){this.a=d},
eZr:function eZr(d){this.a=d},
eZx:function eZx(d){this.a=d},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZy:function eZy(d){this.a=d},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZz:function eZz(d){this.a=d},
eZo:function eZo(d){this.a=d},
eZA:function eZA(d){this.a=d},
eZn:function eZn(d,e){this.a=d
this.b=e},
eZB:function eZB(d){this.a=d},
eZm:function eZm(d,e){this.a=d
this.b=e},
eZC:function eZC(d){this.a=d},
eZl:function eZl(d){this.a=d},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZE:function eZE(d){this.a=d},
eZw:function eZw(d){this.a=d},
eZj:function eZj(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d,e,f){this.a=d
this.b=e
this.c=f},
eZ4:function eZ4(d,e,f){this.a=d
this.b=e
this.c=f},
eZi:function eZi(d,e){this.a=d
this.b=e},
eZh:function eZh(d,e){this.a=d
this.b=e},
fP1:function fP1(d,e){this.a=d
this.b=e},
a08:function a08(d,e,f){this.c=d
this.d=e
this.a=f},
aGV:function aGV(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eYP:function eYP(d){this.a=d},
eYQ:function eYQ(d){this.a=d},
eYR:function eYR(d,e){this.a=d
this.b=e},
eYS:function eYS(d){this.a=d},
eYT:function eYT(d){this.a=d},
eYO:function eYO(d,e){this.a=d
this.b=e},
eYU:function eYU(d,e){this.a=d
this.b=e},
eYV:function eYV(d,e){this.a=d
this.b=e},
flF:function flF(d){this.a=d},
b0F:function b0F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDt:function aDt(d,e,f){this.c=d
this.d=e
this.a=f},
bjB:function bjB(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
eep:function eep(d){this.a=d},
eeo:function eeo(){},
bh8:function bh8(d,e){this.b=d
this.a=e},
fG7:function fG7(d){this.a=d},
fG8:function fG8(){},
fG9:function fG9(){},
fGa:function fGa(d){this.a=d},
arl:function arl(d,e){this.a=d
this.b=e},
fG3:function fG3(){},
fG4:function fG4(){},
fOf:function fOf(d,e){this.a=d
this.b=e},
Zv:function Zv(d,e,f){this.c=d
this.d=e
this.a=f},
aAW:function aAW(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dir:function dir(d){this.a=d},
dis:function dis(d){this.a=d},
dit:function dit(d,e){this.a=d
this.b=e},
diw:function diw(d){this.a=d},
dix:function dix(d,e){this.a=d
this.b=e},
div:function div(d,e){this.a=d
this.b=e},
diy:function diy(d){this.a=d},
diu:function diu(d,e){this.a=d
this.b=e},
bs2:function bs2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eem:function eem(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
een:function een(d){this.a=d},
fbf:function fbf(d){this.a=d},
fbh:function fbh(d,e){this.a=d
this.b=e},
fbg:function fbg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbe:function fbe(){},
aLu:function aLu(){},
h0c(d){var w,v,u
try{w=A.S.aI(0,d,null)
if(x.f.b(w)){v=B.vO(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0B:function b0B(d,e,f){this.c=d
this.d=e
this.a=f},
ble:function ble(d,e){this.c=d
this.a=e},
i2M(d){return A.d.dM(D.H0,new C.fzv(d),new C.fzw())},
i2N(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b3(t,6)
if(w.length===0)return null
v=new B.a_(D.H0,new C.fzx(w),x.b4)
if(!v.gae(0).C())return null
u=v.gI(0)
return new C.jE("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
la:function la(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fzv:function fzv(d){this.a=d},
fzw:function fzw(){},
fzx:function fzx(d){this.a=d},
mT(d,e,f,g,h){return new C.Ey(f,g,d)},
hPT(d){var w=d.z,v=B.U(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fdb(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.Kh
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f2,j,k,l)},
hm_(d,e){var w
C.hPT(d)
w=A.d.dM($.bDz(),new C.fxl(e),new C.fxm())
$.Kh=w.a
d.x=w.a;++d.y
try{w.bB(d)}finally{$.Kh=""}d.z=B.bo(d.z,!0,x.F)},
Ey:function Ey(d,e,f){this.a=d
this.b=e
this.e=f},
fdb:function fdb(){},
fFA:function fFA(){},
fFB:function fFB(){},
fFC:function fFC(){},
fFN:function fFN(){},
fFS:function fFS(){},
fFT:function fFT(){},
fFU:function fFU(){},
fFV:function fFV(){},
fFW:function fFW(){},
fFX:function fFX(){},
fFY:function fFY(){},
fFD:function fFD(){},
fFE:function fFE(){},
fFF:function fFF(){},
fFG:function fFG(){},
fFH:function fFH(){},
fFI:function fFI(){},
fFJ:function fFJ(){},
fFK:function fFK(){},
fFL:function fFL(){},
fFM:function fFM(){},
fFO:function fFO(){},
fFP:function fFP(){},
fFQ:function fFQ(){},
fFR:function fFR(){},
fxl:function fxl(d){this.a=d},
fxm:function fxm(){},
iU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eq(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CP(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f2,j,k,l)},
bCi(){var w=new B.S(Date.now(),0,!1)
return A.ik[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
ev:function ev(d,e,f){this.a=d
this.b=e
this.c=f},
bzH(d){return new B.iP((A.o.aB(d,24)&255)/255,(A.o.aB(d,16)&255)/255,(A.o.aB(d,8)&255)/255,(d&255)/255)},
hUX(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amy(A.cI.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hV0(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fld(),x.dv).aH(0,"\n")},
hV_(d){switch(d.a){case 2:return A.nv
case 1:case 5:return A.eZv
default:return A.Th}},
hUU(d){switch(d.a){case 2:return A.uX
case 1:case 5:return A.V5
default:return A.a9S}},
hUY(d,e){var w,v=null,u=d.ay,t=A.o.aB(u,24),s=A.o.aB(d.ch,24),r=(t&255)===0?v:C.bzH(u),q=(s&255)===0?v:C.bzH(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nt(q,p,A.kM)
w=new B.py(t,t,t,t)}switch(d.ax.a){case 1:return B.lt(v,v,v,new B.kz(r,w,v,A.ab6,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.wX(B.lt(v,v,q,v,p+0.4,v,v,v))
default:return B.lt(v,v,v,new B.kz(r,w,B.vq(4),A.hH,v),v,v,v,v)}},
hUW(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f2?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hUU(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hV0(d)
t=C.bzH(d.Q)
s=d.x.a>=700?A.el:A.vx
r=d.y===A.cF?A.xX:A.ajz
q=d.z
p=new B.D_(w,l,l,B.fb(u,l,l,l,B.h7(l,t,1===q.a?A.aP9:A.aP8,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hV_(d.as)))
break
case 1:case 4:o=C.hUX(d.at)
n=i===D.lw&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wX(B.fb(w,l,l,l,B.h7(l,A.rE,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HH(o,n?A.ab2:A.Vt,l,l)
break
case 3:w=new B.nt(A.Ie,1,A.kM)
u=B.vq(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lt(A.uX,B.fb(t,l,l,l,B.h7(l,D.eb2,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.el,l,!0,l,l,l,l),A.nv),l,new B.kz(E.aHt,new B.py(w,w,w,w),u,A.hH,l),l,l,l,l)
break
case 2:p=C.hUY(d,e)
break
case 5:p=C.hUV(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hdG(-w,p)
w=i===D.cQ
if(w){m=A.o.aB(d.Q,24)&255
if(m<255)p=new B.as6(m/255,p)}if(w)return new F.w1(k,l,j,l,new B.S0(new B.ky(g,g,f,1/0),p))
if(i===D.l5){i=new B.nt(A.Ie,1,A.kM)
i=B.lt(A.uX,p,l,new B.kz(A.p6,new B.py(i,i,i,i),B.vq(4),A.hH,l),l,l,D.bw0,l)}else i=p
return new F.w1(k,l,j,l,new B.fR(g,f,i))},
hUZ(d,e,f,g){var w,v=null,u=C.bzH(d.e),t=d.f
t=B.a([F.hci(t!=null?B.lt(v,v,v,new B.kz(v,v,v,A.hH,new B.aW9(E.V6,A.a9M,B.a([u,C.bzH(t)],x.cR),v)),v,v,v,v):B.lt(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.flc(f,g),B.U(w).k("M<1,ff>")))
return F.cqV(t)},
h1r(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h1r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a40(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Wh(A.wd,A.Ib,D.bx7,null,null,null,!1,null)
o=new B.BG(o,new C.fGg(607,787,p,d))
o.Mv(n,null)
r.push(o)}u=n.k9(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1r,v)},
hUV(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h0c(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajn()
if(h==null)h=A.ax2
j=B.tt(4279308564)
w=B.vq(18)
v=new B.nt(B.tt(4287531653),3,A.kM)
u=i.length===0?"My links":i
u=B.a([B.wX(B.fb(u,m,m,m,B.h7(m,A.p6,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wX(B.fb(A.a.i(l.c),m,m,m,D.f5F,m)))
u.push(new B.fR(m,8,m))
for(t=B.db(h,0,B.dG(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bQ(t,t.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tt(4280690220)
o=new B.a94(8,8)
n=A.a.i(r.b)
u.push(new B.nK(D.bqj,new C.awi(new C.ahX(q),B.lt(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.f7Y,A.nv),m,new B.kz(p,m,new B.ain(o,o,o,o),A.hH,m),m,m,D.bwq,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wX(B.fb(k,m,m,m,D.f7c,m))
u.push(new C.awi(C.huB(k),t))}return B.lt(m,B.yJ(u,A.LK,A.lu),m,new B.kz(j,new B.py(v,v,v,v),w,A.hH,m),m,m,D.br8,m)},
fld:function fld(){},
flc:function flc(d,e){this.a=d
this.b=e},
fGg:function fGg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agE(d){var w,v
for(w=0;w<32;++w){v=D.GS[w]
if(v.a===d)return v}return null},
hgk(d){var w,v,u=A.a.cH(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aJ(A.a.b3(d,u+1))
return w}catch(v){return null}},
cX(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hp4(d,e){return B.a6(d,!1).ck(B.e8(new C.fMF(e),!0,null,x.fB))},
hp3(d,e){return B.bS(A.K,null,new C.fME(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iZ:function iZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ep:function Ep(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ni:function Ni(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biY:function biY(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dTQ:function dTQ(d){this.a=d},
dTP:function dTP(d,e,f){this.a=d
this.b=e
this.c=f},
dTO:function dTO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqC:function bqC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eY2:function eY2(d,e){this.a=d
this.b=e},
be1:function be1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZv:function aZv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8d:function c8d(){},
c8e:function c8e(d){this.a=d},
c8f:function c8f(d,e,f){this.a=d
this.b=e
this.c=f},
c8g:function c8g(d,e,f){this.a=d
this.b=e
this.c=f},
fMF:function fMF(d){this.a=d},
Z3:function Z3(d,e){this.c=d
this.a=e},
azj:function azj(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7E:function d7E(d,e,f){this.a=d
this.b=e
this.c=f},
d7J:function d7J(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7H:function d7H(d,e){this.a=d
this.b=e},
d7M:function d7M(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7O:function d7O(d,e){this.a=d
this.b=e},
fME:function fME(d){this.a=d},
fMD:function fMD(d){this.a=d},
fMC:function fMC(d,e,f){this.a=d
this.b=e
this.c=f},
fMB:function fMB(d,e){this.a=d
this.b=e},
aKY:function aKY(){},
iaq(d){return B.bS(A.K,null,new C.fP0(),d,!0,!0,!0,null,!1,!1,x.N)},
fP0:function fP0(){},
Zo:function Zo(d){this.a=d},
bfv:function bfv(d){this.d=d
this.c=this.a=null},
deq:function deq(d){this.a=d},
der:function der(d,e){this.a=d
this.b=e},
des:function des(d){this.a=d},
hRo(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xo},
i4H(d){var w,v=A.d.gI(d.split("@"))
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
i4G(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hRo(d)
switch(q){case"shimmer":return B.nO(A.aad,g,new C.fCX(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.beT(e,f,p,r),A.av),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dV(B.ed(A.A,B.de(C.fTh(g,B.a4R(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.beA(e,p,r),A.av),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.de(B.eH(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fC(e)
u.mN(Math.sin(e)*0.3)
return B.dV(B.fu(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b1,A.r,B.a([B.dZ(B.b3(r,r,r,new C.bnu(e,f,p,r),A.av),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b1,A.r,B.a([B.dZ(B.b3(r,r,r,new C.b9u(e,f,p,r),A.av),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b1,A.r,B.a([B.dZ(B.b3(r,r,r,new C.b97(e,f,p,r),A.av),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.buo(e,p,r),A.av),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.brp(e,f,p,r),A.av),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.bqy(e,p,r),A.av),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.dZ(B.b3(r,r,r,new C.bdV(e,p,r),A.av),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.dZ(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eH(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fCX:function fCX(d,e){this.a=d
this.b=e},
beT:function beT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beA:function beA(d,e,f){this.b=d
this.c=e
this.a=f},
bnu:function bnu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9u:function b9u(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b97:function b97(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buo:function buo(d,e,f){this.b=d
this.c=e
this.a=f},
brp:function brp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqy:function bqy(d,e,f){this.b=d
this.c=e
this.a=f},
bdV:function bdV(d,e,f){this.b=d
this.d=e
this.a=f},
d7l:function d7l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xu:function xu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fD_(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l5},
i4M(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fD0())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aPR(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i4L(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d6(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d6(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
agi(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agi=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fvp(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(A.dH,null,new C.fvq(e),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agi)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h22(d),$async$agi)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L2(d,"Search states\u2026","",A.k7,"Choose state"),$async$agi)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h0Z(s)
if(p==null)p=A.d.gI(D.QG)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fD1(p.d)
k=x.u
j=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cB(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lw,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CB(i,0.016,D.l6,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CB(0,0.058,D.eM,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CB(0,0.058,D.eM,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ks("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ks("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fYT(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bza("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0Z("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0Z("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0Z("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0Z("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bza("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CB(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.eq(A.bh,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bn,A.cw,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fYT(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bza("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hii("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hii("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0Z("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0Z("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bz9("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bz9("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bza("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ks("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ks("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bz9("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bz9("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bza("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0Z("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bz9("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0Z("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fYT(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ks("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ks("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BA(null,null,null,null,D.od,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rt(m,null,0,0,j,n,D.qf,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agi,v)},
fD0:function fD0(){},
fvp:function fvp(){},
fvq:function fvq(d){this.a=d},
fvn:function fvn(d){this.a=d},
fvo:function fvo(d){this.a=d},
hUp(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hUo(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mO
case"lineThrough":return A.zz
default:return A.aD}},
eq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eL(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hkm(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qr[w]
if(v.b===u)return v}return D.dd},
hQN(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cRa[w]
if(v.b===u)return v}return D.cQ},
hXd(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dfr[w]
if(v.b===u)return v}return D.bf},
rt(d,e,f,g,h,i,j,k,l,m,n){return new C.lE(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hb2(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hSN(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hkm(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.N(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.k.N(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.da(n,x.f)
n=B.cD(n,new C.cdD(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rt(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hSN(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoS[w]
if(v.b===u)return v}return D.mI},
BA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i1(p,t,a1,h,i,w,a0==null?B.a([C.rt(4294967295,null,0,0,null,C.cB(),D.qf,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VI(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hP_(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.N(t),1,120)
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
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.ku(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ku(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.N(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.A(a6.h(0,"cinematic"),!0)
i=J.A(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cdq(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cdr(),x.N)
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
else{g=J.da(g,x.f)
g=B.cD(g,new C.cds(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.BA(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rt(4294967295,a3,0,0,a3,C.cB(),D.qf,"","","",D.dd)],x.g):g,v,p,o,s)},
ku(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hP_(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dgh[w]
if(v.b===u)return v}return D.CG},
cB(){var w=Date.now(),v=$.j0
$.j0=v+1
return""+1000*w+"_"+v},
cdU(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CH){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,40,A.bn,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,20,A.bn,A.cw,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cm,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,32,A.bn,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!0,f.e.l(),A.aD,"",n,20,A.bn,A.cw,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cm,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cm,D.cQ,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cm,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.eq(A.L,!1,4294967295,A.aD,"",n,42,A.bn,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.eq(A.bh,!1,l,A.aD,"",t.j(0.12).l(),24,A.bn,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cm,D.f2,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bn,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cB()
t=C.eq(A.bh,!1,l,A.aD,"",t.j(0.06).l(),24,A.bn,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f2,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bn,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,36,A.bn,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cm,D.cQ,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,22,A.bn,A.cw,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cm,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,28,A.bn,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,20,A.bn,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cm,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,26,A.bn,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cm,D.cQ,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,18,A.bn,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cm,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hGC(d){return A.d.dM(D.a2l,new C.cdV(d),new C.cdW())},
hGz(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aI(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ci(v,C.VI(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fVn(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdQ(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdP())
return u},
hb5(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdL()
if(u!==w)return u>=w?d:e
return v.$1(d).cb(v.$1(e))?d:e},
aqN(d){return C.hGx(d)},
hGx(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdO()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2a(m),$async$aqN)
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
return B.b(B.az(),$async$aqN)
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
case 11:o=l.$1($.hb4.h(0,m))
n=C.fVn(C.fVn(j,r),o)
if(n.length===0){u=C.hb5(C.hb5(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqN,v)},
cdK(d){return C.hGw(d)},
hGw(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cdK)
case 7:r=f
q=r.ta("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kC(q,B.U(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aX(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cdK,v)},
b0H(d,e){return C.hGy(d,e)},
hGy(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0H=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b0H)
case 6:s=g
q=s.ta("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.La(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b0H)
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
return B.i($async$b0H,v)},
VJ(d,e){return C.hGA(d,e)},
hGA(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VJ=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hb3.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqN(a3),$async$VJ)
case 5:p=a6
case 4:w=6
return B.b(C.cdK(a3),$async$VJ)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbr())k=f===g.gbr()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cdR(o),l),l.k("J.E"))
A.d.b0(e,new C.cdS())
$.hb3.n(0,a0,e)
n=B.U(e).k("M<1,a5<n,@>>")
n=B.C(new B.M(e,new C.cdT(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.hb4.n(0,a0,r)
t=8
w=11
return B.b(B.ah5(a0,r),$async$VJ)
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
return B.b(B.az(),$async$VJ)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VJ)
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
return B.i($async$VJ,v)},
IB:function IB(d,e){this.a=d
this.b=e},
aqL:function aqL(d,e){this.a=d
this.b=e},
uE:function uE(d,e){this.a=d
this.b=e},
mw:function mw(d,e){this.a=d
this.b=e},
hC:function hC(d,e){this.a=d
this.b=e},
eL:function eL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lE:function lE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cdE:function cdE(){},
cdF:function cdF(){},
cdD:function cdD(){},
i1:function i1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cdt:function cdt(){},
cdu:function cdu(){},
cdq:function cdq(){},
cdr:function cdr(){},
cds:function cds(){},
jE:function jE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdV:function cdV(d){this.a=d},
cdW:function cdW(){},
cdQ:function cdQ(d){this.a=d},
cdP:function cdP(){},
cdL:function cdL(){},
cdM:function cdM(){},
cdN:function cdN(){},
cdO:function cdO(){},
cdR:function cdR(d){this.a=d},
cdS:function cdS(){},
cdT:function cdT(){},
i4X(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fDz(e,v,d,B.aX(w))
w.$1(new C.fDv())
w.$1(new C.fDw())
w.$1(new C.fDx())
w.$1(new C.fDy())
return v},
fDz:function fDz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDv:function fDv(){},
fDw:function fDw(){},
fDx:function fDx(){},
fDy:function fDy(){},
b0E:function b0E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdz:function cdz(d){this.a=d},
cdy:function cdy(){},
cdA:function cdA(){},
cdB:function cdB(d,e){this.a=d
this.b=e},
cdC:function cdC(d){this.a=d},
anX:function anX(d,e){this.c=d
this.a=e},
biI:function biI(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dG4:function dG4(){},
aKJ:function aKJ(){},
cdH(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.J(x.q).f.U(D.eWI)
u=!1
w=1
break}u=B.kT(!1,d,t,!1,null,A.a51,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdH,v)},
hGu(d){var w=A.d.bg(D.H0,new C.cdI(d))
if(w<0)return!0
return w>=4},
hGv(d){var w=A.d.bg($.bDz(),new C.cdJ(d))
if(w<0)return!0
return w>=5},
cdI:function cdI(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
i6C(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yx()
$.qe().pU(t,new C.fGn(s),!0)
u=B.a([B.DL(v,A.qj,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f68,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nh,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b1,A.r,u,v)},
fGn:function fGn(d){this.a=d},
i6d(){return C.h1k()},
i3a(){return C.bBw()},
i5d(){return C.h1b()},
aOY(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fFt(d,f),$async$aOY)
case 5:w=1
break
case 4:if(d.e!=null)d.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOY,v)},
fFt(d,e){var w=0,v=B.j(x.H),u
var $async$fFt=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzI
if(u==null)u=e+".pdf"
w=2
return B.b(B.bS(A.K,null,new C.fFu(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fFt)
case 2:return B.h(null,v)}})
return B.i($async$fFt,v)},
fFu:function fFu(d,e){this.a=d
this.b=e},
ad7:function ad7(d,e,f){this.c=d
this.d=e
this.a=f},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e){this.a=d
this.b=e},
eqS:function eqS(d){this.a=d},
adp:function adp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0D(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0C(g,m,f,d,e,h,l,k,j,o,i,null)},
hnk(d){return B.cq(new C.fDu(d))},
h1m(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i6l(d){if(d===D.cm)return"None"
return C.h1m(d)},
bAd(d,e,f,g){return C.hXk(d,e,f,g)},
hXk(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAd=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fZb&&t.py())t.eN()
$.fZb=!0
s.a=null
w=3
return B.b(B.hU(A.bj,!0,"Animation preview",d,new C.fnL(s,e,g,f),null,A.eH,!0,x.H),$async$bAd)
case 3:s=s.a
if(s!=null)s.a6(0)
$.fZb=!1
case 1:return B.h(u,v)}})
return B.i($async$bAd,v)},
fPP(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fPP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h1m(f)+" Slide transition preview"
s=s?Af.Fh:A.vj
w=3
return B.b(C.bAd(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aIk(f,null),A.aq),null),r),$async$fPP)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fPP,v)},
hmC(d,e,f){var w,v,u=null,t=A.ct.az(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.de(f,t)
case 2:case 17:return B.dV(B.de(f,t),new B.u((1-t)*48,0))
case 3:return B.dV(B.de(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dV(B.de(f,t),new B.u(0,(1-t)*36))
case 5:return B.dV(B.de(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.de(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.de(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fC((1-t)*1.2)
return B.fu(A.A,B.de(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k5((1-t)*1.2)
return B.fu(A.A,B.de(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mN((1-t)*0.8)
v=0.6+t*0.4
w.jL(v,v,v,1)
return B.fu(A.A,B.de(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dV(B.de(f,t),new B.u((1-t)*24,0))}},
bD4(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bD4=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h1m(f)+" Element animation preview"
s=s?Af.Fh:A.vj
w=3
return B.b(C.bAd(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.az3(f,null),A.aq),null),r),$async$bD4)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bD4,v)},
i6k(d){var w,v,u,t,s=$.afM.W(0,d)
if(s!=null){$.afM.n(0,d,s)
return s}w=A.cI.aJ(A.a.b3(d,A.a.cH(d,",")+1))
$.afM.n(0,d,w)
v=$.fZZ=$.fZZ+w.length
u=B.a3($.afM).k("cu<1>")
for(;;){if(!(v>41943040&&$.afM.a>1))break
t=new B.cu($.afM,u).gae(0)
if(!t.C())B.b8(B.fs())
v-=$.afM.W(0,t.gR(0)).length
$.fZZ=v}return w},
i61(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kY(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.er(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Sx(s,A.u))
v.push(new B.er(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Sx(t,A.u))
v.push(new B.er(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Sx(u,A.cw))
v.push(new B.er(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b3(d,r)
v.push(B.d3(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a29(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k1(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdE()*0.18
m.F(new B.iK(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bE())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ao,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bB(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bB(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
m.F(new B.ap(e.c,e.gbP().b))
m.F(new B.ap(e.gbP().a,e.d))
m.F(new B.ap(e.a,e.gbP().b))
m.F(new B.bE())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.b9J(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o2(e))
return m}},
fB3(d,e,f){return B.cq(new C.fB4(D.ePj.t(0,d),d,f,e))},
b0C:function b0C(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cdx:function cdx(d){this.a=d},
cdw:function cdw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdv:function cdv(){},
b0z:function b0z(d,e){this.b=d
this.a=e},
fDu:function fDu(d){this.a=d},
fDt:function fDt(d,e){this.a=d
this.b=e},
fnL:function fnL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnJ:function fnJ(d){this.a=d},
fnK:function fnK(d,e){this.a=d
this.b=e},
aIk:function aIk(d,e){this.c=d
this.a=e},
btV:function btV(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
f5y:function f5y(d,e,f){this.a=d
this.b=e
this.c=f},
aIX:function aIX(d,e){this.b=d
this.a=e},
UL:function UL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biV:function biV(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dS2:function dS2(d){this.a=d},
dS1:function dS1(d){this.a=d},
dS0:function dS0(d){this.a=d},
IA:function IA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdp:function cdp(d){this.a=d},
cdo:function cdo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az3:function az3(d,e){this.c=d
this.a=e},
bdo:function bdo(){this.d=0
this.c=this.a=null},
d4A:function d4A(d){this.a=d},
d4z:function d4z(d){this.a=d},
a7u:function a7u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjz:function bjz(d,e){var _=this
_.d=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
ee5:function ee5(d,e,f){this.a=d
this.b=e
this.c=f},
aZy:function aZy(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bey:function bey(d,e,f){this.b=d
this.c=e
this.a=f},
bpv:function bpv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eVG:function eVG(){},
fB4:function fB4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqv:function bqv(d,e,f){this.b=d
this.c=e
this.a=f},
aKX:function aKX(){},
aLs:function aLs(){},
aMP:function aMP(){},
fEu(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fEu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c6().LU(D.ddv,A.tP,!0),$async$fEu)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i5W(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEu,v)},
i5W(d,e){var w,v=d.toLowerCase()
if(A.a.ca(v,".pdf"))return new C.a7N(d,new B.a_M(A.cT.gcA().aJ(e),"application/pdf"),"")
if(A.a.ca(v,".docx")){w=C.hYZ(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7N(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cf.KG(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7N(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hYZ(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwC().cJF(B.rd(d,A.hX,o,o),o,o,!1).cLo(0,"word/document.xml")
if(n==null)return""
w=n.cTo()
v=A.cf.KG(0,w==null?$.hpA():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kY(0,r)
p=A.a.i(B.cD(q,new C.fqE(),B.a3(q).k("J.E"),t).h_(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7N:function a7N(d,e,f){this.a=d
this.b=e
this.c=f},
fqE:function fqE(){},
hGB(d,e,f,g,h,i,j,k,l){return new C.NK(l,e,d,g,f,i,h,j,k,null)},
NK:function NK(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDU:function aDU(d,e,f,g,h,i,j,k,l){var _=this
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
_.bt$=k
_.a9$=l
_.c=_.a=null},
ex2:function ex2(d){this.a=d},
ex0:function ex0(){},
ex1:function ex1(d){this.a=d},
etq:function etq(){},
etr:function etr(){},
ets:function ets(d,e){this.a=d
this.b=e},
ev0:function ev0(d){this.a=d},
euP:function euP(){},
euQ:function euQ(){},
esO:function esO(){},
ew8:function ew8(d){this.a=d},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
euZ:function euZ(d,e){this.a=d
this.b=e},
ewM:function ewM(d){this.a=d},
ewN:function ewN(){},
ewO:function ewO(){},
ewP:function ewP(d){this.a=d},
ewQ:function ewQ(){},
esc:function esc(d){this.a=d},
ex_:function ex_(){},
eu7:function eu7(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
esb:function esb(d){this.a=d},
euu:function euu(d){this.a=d},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
euw:function euw(d){this.a=d},
eu6:function eu6(){},
eu5:function eu5(d){this.a=d},
eu3:function eu3(){},
eu2:function eu2(d){this.a=d},
eu4:function eu4(){},
etm:function etm(d){this.a=d},
etn:function etn(d){this.a=d},
eud:function eud(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
ese:function ese(){},
esf:function esf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eup:function eup(){},
euq:function euq(d,e){this.a=d
this.b=e},
eun:function eun(d,e,f){this.a=d
this.b=e
this.c=f},
euo:function euo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euh:function euh(d,e,f){this.a=d
this.b=e
this.c=f},
eui:function eui(d,e,f){this.a=d
this.b=e
this.c=f},
euj:function euj(d){this.a=d},
euk:function euk(d,e){this.a=d
this.b=e},
eul:function eul(d,e){this.a=d
this.b=e},
eum:function eum(d,e){this.a=d
this.b=e},
eug:function eug(d,e){this.a=d
this.b=e},
eus:function eus(d){this.a=d},
eut:function eut(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eur:function eur(d){this.a=d},
euK:function euK(){},
euL:function euL(){},
euM:function euM(){},
euN:function euN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euH:function euH(d){this.a=d},
euJ:function euJ(){},
euI:function euI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
euF:function euF(d,e,f){this.a=d
this.b=e
this.c=f},
euG:function euG(d,e){this.a=d
this.b=e},
euO:function euO(){},
euf:function euf(d,e){this.a=d
this.b=e},
esv:function esv(){},
esw:function esw(d,e,f){this.a=d
this.b=e
this.c=f},
esx:function esx(d){this.a=d},
esy:function esy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esu:function esu(d){this.a=d},
euU:function euU(d){this.a=d},
euT:function euT(d,e){this.a=d
this.b=e},
euS:function euS(d,e){this.a=d
this.b=e},
euR:function euR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euV:function euV(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esr:function esr(d){this.a=d},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
esn:function esn(d,e){this.a=d
this.b=e},
esm:function esm(d){this.a=d},
ev1:function ev1(d,e,f){this.a=d
this.b=e
this.c=f},
esd:function esd(d){this.a=d},
esP:function esP(){},
ewK:function ewK(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e,f){this.a=d
this.b=e
this.c=f},
ew9:function ew9(d,e,f){this.a=d
this.b=e
this.c=f},
era:function era(d){this.a=d},
er7:function er7(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e){this.a=d
this.b=e},
eqV:function eqV(d){this.a=d},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqW:function eqW(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esq:function esq(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
erC:function erC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
erD:function erD(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
erI:function erI(d){this.a=d},
erF:function erF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erG:function erG(d){this.a=d},
erE:function erE(){},
erB:function erB(d,e,f){this.a=d
this.b=e
this.c=f},
euE:function euE(d,e){this.a=d
this.b=e},
ewT:function ewT(d){this.a=d},
ewU:function ewU(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewW:function ewW(d,e,f){this.a=d
this.b=e
this.c=f},
ewS:function ewS(d){this.a=d},
ewp:function ewp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewo:function ewo(d,e,f){this.a=d
this.b=e
this.c=f},
ewn:function ewn(){},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e,f){this.a=d
this.b=e
this.c=f},
ewg:function ewg(d){this.a=d},
ewh:function ewh(d){this.a=d},
ewk:function ewk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewj:function ewj(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
ewa:function ewa(){},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewH:function ewH(d){this.a=d},
ewI:function ewI(d){this.a=d},
er2:function er2(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er3:function er3(d,e){this.a=d
this.b=e},
er4:function er4(d,e,f){this.a=d
this.b=e
this.c=f},
er8:function er8(d,e){this.a=d
this.b=e},
er_:function er_(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(d){this.a=d},
ev_:function ev_(d,e,f){this.a=d
this.b=e
this.c=f},
ewR:function ewR(d,e,f){this.a=d
this.b=e
this.c=f},
etl:function etl(d,e,f){this.a=d
this.b=e
this.c=f},
etk:function etk(){},
erL:function erL(d,e,f){this.a=d
this.b=e
this.c=f},
erM:function erM(d){this.a=d},
eqX:function eqX(d,e){this.a=d
this.b=e},
esN:function esN(d,e){this.a=d
this.b=e},
er5:function er5(d,e){this.a=d
this.b=e},
ere:function ere(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
err:function err(d,e){this.a=d
this.b=e},
erc:function erc(d){this.a=d},
eru:function eru(d){this.a=d},
erv:function erv(d){this.a=d},
erw:function erw(d){this.a=d},
erx:function erx(d){this.a=d},
ery:function ery(d){this.a=d},
erz:function erz(){},
erA:function erA(){},
erh:function erh(d){this.a=d},
eri:function eri(d){this.a=d},
erj:function erj(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d){this.a=d},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
ers:function ers(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
esM:function esM(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esK:function esK(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d,e){this.a=d
this.b=e},
er6:function er6(d,e){this.a=d
this.b=e},
erP:function erP(d){this.a=d},
erO:function erO(d){this.a=d},
erN:function erN(d,e){this.a=d
this.b=e},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d,e){this.a=d
this.b=e},
ess:function ess(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
euC:function euC(d,e){this.a=d
this.b=e},
euB:function euB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euz:function euz(d){this.a=d},
euA:function euA(d,e){this.a=d
this.b=e},
eux:function eux(){},
euy:function euy(){},
ewb:function ewb(){},
ewc:function ewc(d,e){this.a=d
this.b=e},
ewd:function ewd(){},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d,e){this.a=d
this.b=e},
erb:function erb(d,e){this.a=d
this.b=e},
esg:function esg(){},
esh:function esh(){},
esi:function esi(){},
esl:function esl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esk:function esk(d,e){this.a=d
this.b=e},
esj:function esj(d,e,f){this.a=d
this.b=e
this.c=f},
etM:function etM(d){this.a=d},
etL:function etL(){},
etN:function etN(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
etK:function etK(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etJ:function etJ(d){this.a=d},
etQ:function etQ(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
etG:function etG(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
etF:function etF(d){this.a=d},
etU:function etU(d,e){this.a=d
this.b=e},
etE:function etE(d){this.a=d},
etx:function etx(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etw:function etw(d){this.a=d},
etA:function etA(d,e){this.a=d
this.b=e},
etv:function etv(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
etC:function etC(d,e){this.a=d
this.b=e},
ett:function ett(d){this.a=d},
etD:function etD(d){this.a=d},
esF:function esF(d){this.a=d},
esG:function esG(d){this.a=d},
esI:function esI(d){this.a=d},
esA:function esA(d){this.a=d},
esz:function esz(d,e){this.a=d
this.b=e},
esB:function esB(d,e){this.a=d
this.b=e},
esC:function esC(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
etX:function etX(d,e){this.a=d
this.b=e},
etW:function etW(d,e){this.a=d
this.b=e},
etV:function etV(d,e){this.a=d
this.b=e},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
evl:function evl(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
evn:function evn(d){this.a=d},
evy:function evy(d){this.a=d},
evJ:function evJ(d){this.a=d},
evU:function evU(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew3:function ew3(d){this.a=d},
ew4:function ew4(d,e){this.a=d
this.b=e},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evt:function evt(d){this.a=d},
evu:function evu(d){this.a=d},
evv:function evv(d){this.a=d},
evw:function evw(d){this.a=d},
evx:function evx(d){this.a=d},
evz:function evz(d){this.a=d},
evA:function evA(d){this.a=d},
evB:function evB(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(d){this.a=d},
evF:function evF(d){this.a=d},
evG:function evG(d){this.a=d},
evH:function evH(d){this.a=d},
evb:function evb(d){this.a=d},
evI:function evI(d){this.a=d},
evj:function evj(d){this.a=d},
evK:function evK(d){this.a=d},
evi:function evi(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evh:function evh(d,e,f){this.a=d
this.b=e
this.c=f},
ev7:function ev7(d,e){this.a=d
this.b=e},
evk:function evk(d){this.a=d},
ew5:function ew5(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ew6:function ew6(d,e){this.a=d
this.b=e},
evN:function evN(d,e,f){this.a=d
this.b=e
this.c=f},
evg:function evg(d,e,f){this.a=d
this.b=e
this.c=f},
ev6:function ev6(d,e,f){this.a=d
this.b=e
this.c=f},
ev4:function ev4(d,e){this.a=d
this.b=e},
evO:function evO(d,e){this.a=d
this.b=e},
evf:function evf(d,e){this.a=d
this.b=e},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev3:function ev3(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
eve:function eve(d){this.a=d},
evQ:function evQ(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d){this.a=d},
evT:function evT(d){this.a=d},
evd:function evd(d){this.a=d},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evX:function evX(d,e){this.a=d
this.b=e},
evc:function evc(d){this.a=d},
evY:function evY(d,e){this.a=d
this.b=e},
eva:function eva(d){this.a=d},
evZ:function evZ(d,e){this.a=d
this.b=e},
ev9:function ev9(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
ev8:function ev8(d){this.a=d},
erK:function erK(d,e,f){this.a=d
this.b=e
this.c=f},
erJ:function erJ(d,e){this.a=d
this.b=e},
ews:function ews(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewq:function ewq(d,e){this.a=d
this.b=e},
esS:function esS(d,e){this.a=d
this.b=e},
esR:function esR(d){this.a=d},
esT:function esT(d,e){this.a=d
this.b=e},
esQ:function esQ(d){this.a=d},
etp:function etp(){},
eto:function eto(){},
ewF:function ewF(d){this.a=d},
ewE:function ewE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewC:function ewC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewz:function ewz(d,e){this.a=d
this.b=e},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d){this.a=d},
eww:function eww(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewA:function ewA(d,e){this.a=d
this.b=e},
ewB:function ewB(d,e){this.a=d
this.b=e},
ewG:function ewG(d){this.a=d},
es9:function es9(d){this.a=d},
es8:function es8(d,e,f){this.a=d
this.b=e
this.c=f},
es7:function es7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erX:function erX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
erY:function erY(d,e){this.a=d
this.b=e},
erZ:function erZ(d,e){this.a=d
this.b=e},
es_:function es_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erW:function erW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es0:function es0(d,e){this.a=d
this.b=e},
es2:function es2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es1:function es1(d,e){this.a=d
this.b=e},
es3:function es3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erV:function erV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es4:function es4(d,e){this.a=d
this.b=e},
erU:function erU(d,e){this.a=d
this.b=e},
es5:function es5(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
es6:function es6(d,e){this.a=d
this.b=e},
eu0:function eu0(d){this.a=d},
eu_:function eu_(d){this.a=d},
eu1:function eu1(d,e){this.a=d
this.b=e},
et5:function et5(d,e){this.a=d
this.b=e},
et6:function et6(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
et7:function et7(d,e){this.a=d
this.b=e},
et3:function et3(d,e){this.a=d
this.b=e},
et8:function et8(d,e){this.a=d
this.b=e},
et2:function et2(d,e){this.a=d
this.b=e},
et9:function et9(d,e){this.a=d
this.b=e},
et1:function et1(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
et0:function et0(d,e){this.a=d
this.b=e},
etb:function etb(d,e,f){this.a=d
this.b=e
this.c=f},
et_:function et_(d,e){this.a=d
this.b=e},
etc:function etc(d,e,f){this.a=d
this.b=e
this.c=f},
esZ:function esZ(d,e){this.a=d
this.b=e},
etd:function etd(d,e){this.a=d
this.b=e},
esY:function esY(d,e,f){this.a=d
this.b=e
this.c=f},
esV:function esV(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
etf:function etf(d,e){this.a=d
this.b=e},
esW:function esW(d,e,f){this.a=d
this.b=e
this.c=f},
esU:function esU(d,e){this.a=d
this.b=e},
etg:function etg(d,e){this.a=d
this.b=e},
etj:function etj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqT:function eqT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euY:function euY(d,e){this.a=d
this.b=e},
euW:function euW(d){this.a=d},
euX:function euX(d,e){this.a=d
this.b=e},
aeV:function aeV(d,e,f){this.a=d
this.b=e
this.c=f},
ayq:function ayq(d,e){this.c=d
this.a=e},
bca:function bca(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
d0b:function d0b(d){this.a=d},
d0a:function d0a(d){this.a=d},
bco:function bco(d,e){this.c=d
this.a=e},
d0x:function d0x(d){this.a=d},
d0y:function d0y(d){this.a=d},
JC:function JC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc9:function bc9(){this.d=!1
this.c=this.a=null},
d08:function d08(d){this.a=d},
d04:function d04(d){this.a=d},
d09:function d09(d){this.a=d},
d03:function d03(d){this.a=d},
d07:function d07(d){this.a=d},
d05:function d05(d){this.a=d},
d06:function d06(d,e){this.a=d
this.b=e},
Po:function Po(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_f:function a_f(d,e,f){this.c=d
this.d=e
this.a=f},
aDX:function aDX(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bt$=e
_.a9$=f
_.c=_.a=null},
exD:function exD(){},
ext:function ext(d){this.a=d},
exC:function exC(d){this.a=d},
exu:function exu(d){this.a=d},
exv:function exv(d){this.a=d},
exp:function exp(d){this.a=d},
exq:function exq(d,e){this.a=d
this.b=e},
exr:function exr(d){this.a=d},
exs:function exs(d,e,f){this.a=d
this.b=e
this.c=f},
exA:function exA(){},
exB:function exB(d){this.a=d},
exw:function exw(d){this.a=d},
exx:function exx(d){this.a=d},
exy:function exy(d){this.a=d},
exz:function exz(d){this.a=d},
exE:function exE(d,e,f){this.a=d
this.b=e
this.c=f},
exG:function exG(d,e){this.a=d
this.b=e},
exF:function exF(d){this.a=d},
JJ:function JJ(d,e){this.c=d
this.a=e},
br_:function br_(d,e){this.b=d
this.a=e},
bh2:function bh2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bh1:function bh1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJE:function aJE(){},
aLG:function aLG(){},
bwJ:function bwJ(){},
aLH:function aLH(){},
fGo(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fGo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c6().LU(B.a(["pdf"],x.s),A.tP,!0),$async$fGo)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bog(s,"data:application/pdf;base64,"+A.cT.gcA().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGo,v)},
i6w(d){var w,v,u,t,s,r
try{w=B.jq(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kY(0,w).gM(0)
if(t>0){s=J.aQi(t,1,200)
return s}}catch(r){}return 1},
fGf(d){return C.i6v(d)},
i6v(d){var w=0,v=B.j(x.T),u
var $async$fGf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGf,v)},
bCh(d,e,f,g){return C.i6F(d,e,f,g)},
i6F(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCh=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hnV(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lP(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lP(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lP(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lP(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qZ()
f=B.Df(g,null)
a7=B.N()
a7.r=A.qP.gp(0)
f.aZ(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bS
b1.e=A.fE
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
b2.delete()}a0=a2}a3=g.pE()
w=7
return B.b(a3.zj(800,h),$async$bCh)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hv(A.fZ),$async$bCh)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaN(a5))
a7=A.cT.gcA().aJ(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.aa(b5)
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
return B.i($async$bCh,v)},
aPw(d,e,f){return C.i6t(d,e,f)},
i6t(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPw=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahj(d,e,f,new C.fGd(r,q),q,"Sign document"),$async$aPw)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCh(q,t,r.b,r.c),$async$aPw)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0G(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPw,v)},
i6D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hh6(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hh6(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b3(A.a.aU(A.o.fU(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b3(A.a.aU(A.o.fU(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lw&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hgJ(q.ay)+";border:2px solid "+C.hgJ(q.ch)+'"></div>'
break
case 5:l=C.h0c(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajn()
if(p==null)p=A.ax2
n=B.U(p)
k=n.k("nl<1>")
j=new B.nl(p,0,8,k)
j.zI(p,0,8,n.c)
j=new B.bQ(j,j.gM(0),k.k("bQ<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
p=B.aK(p,'"',e)
n=B.aK(i,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aK(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hgJ(d){var w=A.o.aB(d,24)
return"rgba("+(A.o.aB(d,16)&255)+","+(A.o.aB(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hh6(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCf(d,e){var w=0,v=B.j(x.H)
var $async$bCf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fGm(e,C.i6D(e),d),d,null,!0,!0,x.H),$async$bCf)
case 2:return B.h(null,v)}})
return B.i($async$bCf,v)},
bCg(){var w=0,v=B.j(x.T),u,t,s
var $async$bCg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gw(92,2400),$async$bCg)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fGf(s),$async$bCg)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCg,v)},
aPx(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h1r(d),$async$aPx)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fIK(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPx,v)},
hb1(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0G:function b0G(d,e,f){this.a=d
this.b=e
this.c=f},
fGd:function fGd(d,e){this.a=d
this.b=e},
fGm:function fGm(d,e,f){this.a=d
this.b=e
this.c=f},
fGj:function fGj(d){this.a=d},
fGk:function fGk(d,e,f){this.a=d
this.b=e
this.c=f},
fGl:function fGl(d,e,f){this.a=d
this.b=e
this.c=f},
i6u(d){return C.ku(d.w)},
i6B(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i8l()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yv(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.htB()
if(w.b.test(u))return u
return null},
hnX(d,e,f){var w,v,u=C.hCd(d),t=$.pt()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aA(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
i6H(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f_(w,d.b);v.C();){u=w.gR(w).y
t=C.yv(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fGb(d,e){var w,v=d.y,u=C.yv(v==null?"":v)
if(u!=null)return d.y=u
w=C.i6H(new B.a_(e,new C.fGc(d),B.U(e).k("a_<1>")))
v=d.x
return d.y=C.hnX(v==null?"":v,null,w)},
i6G(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.ku(w.w))return null
v=w.y
return C.yv(v==null?"":v)},
hGD(){var w,v=$.pt(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"SL"+A.d.h_(u)},
VM(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VM)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bI),$async$VM)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.aa(m)
$.am.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.T(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VM,v)},
VN(d){return C.hGE(d)},
hGE(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VN)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hG("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VN)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.aa(p)
$.am.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VN,v)},
a7P(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7P=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7P)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VM(),$async$a7P)
case 4:s=a6
r=C.yv(a2==null?"":a2)
if(r==null)r=a3!=null?C.hnX(a3,null,A.ID):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gi8(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yv(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdO(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aJ(t)
g.n(0,"payload",A.cT.gcA().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SU.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yv(J.k(q==null?"":q))
if(f==null)f=C.hb6(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VN(s),$async$a7P)
case 7:u=new B.aFn(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hGD()
n=r==null
d=n?C.hb6(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aJ(t)
q.n(0,"payload",A.cT.gcA().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SU.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VN(s),$async$a7P)
case 8:u=new B.aFn(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7P,v)},
hb6(d){var w,v,u=$.pt()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aA(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
aqP(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqP)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VM(),$async$aqP)
case 6:t=f
s=J.a4(t)
r=s.gM(t)
s.bq(t,new C.cdX(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VN(t),$async$aqP)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqP,v)},
aqO(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yv(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqO)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VM(),$async$aqO)
case 6:t=o.jw(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yv(J.k(q==null?"":q))===p){u=C.a7O(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqO,v)},
a7O(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7O=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7O)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VM(),$async$a7O)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.N(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cf.cz(0,A.cI.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.SU.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aI(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.S.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=7
return B.b(C.VN(p),$async$a7O)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7O,v)},
i6A(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("M<1,a5<n,@>>")
w=B.C(new B.M(d,new C.fGi(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fGq(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.i6A(d==null?B.a([],x.D):d,f,g),null)},
fGp(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fGp=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7P(h,d,e,f,g),$async$fGp)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yv(e==null?"":e)
u=new B.aFa(s,t)
w=1
break}t=A.dK.aJ(h)
t=A.kk.gcA().aJ(t)
u=new B.aFa(C.yv(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGp,v)},
h1t(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d0(q,"NGMYSLIDESYNC2|"))return!0
if(J.d0(q,"NGMYSLIDECODE|"))return!0
if(J.d0(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d0(q,"{"))try{w=A.S.aI(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i6E(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h1t(v))return v
u=A.a.cH(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b3(v,u))
if(C.h1t(t))return t}s=A.a.cH(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b3(v,s))
if(C.h1t(t))return t}}return null},
fGe(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d0(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d0(t,"NGMY_SL:"))w=v.a(A.S.aI(0,A.cf.cz(0,A.cI.aJ(J.mG(t,8))),null))
else w=v.a(A.S.aI(0,t,null))
v=C.hQj(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ah4(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ah4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqO(t[1]),$async$ah4)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGe(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yv(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqO(r),$async$ah4)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGe(s)
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
return B.b(C.a7O(t[1]),$async$ah4)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fGe(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fGe(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah4,v)},
hQj(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.SU.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h1q(C.VI(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cD(t,new C.fdD(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h1q(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j0
$.j0=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VI(B.a2(o,x.N,x.z))
if(e&&C.ku(p.w))p.Q=new B.S(Date.now(),0,!1).a7().bR(144e8).ac()
return p},
bC0(){var w=0,v=B.j(x.aT),u,t,s
var $async$bC0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gv(),$async$bC0)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ah4(s),$async$bC0)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC0,v)},
fP3(d){var w=0,v=B.j(x.T),u,t
var $async$fP3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hU(D.WB,!0,"Dismiss",d,new C.fP4(),new C.fP5(),A.Fe,!0,x.N),$async$fP3)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.J(x.q).f.U(D.eUV)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fP3,v)},
iat(d,e,f,g,h){return B.a6(d,!1).ck(B.e8(new C.fP6(h,e,g,f),!0,null,x.H))},
fGc:function fGc(d){this.a=d},
cdX:function cdX(d){this.a=d},
fGi:function fGi(){},
fdD:function fdD(d){this.a=d},
fP4:function fP4(){},
fP5:function fP5(){},
fP6:function fP6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VK:function VK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDV:function aDV(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ex9:function ex9(){},
ex5:function ex5(d,e){this.a=d
this.b=e},
ex8:function ex8(d,e){this.a=d
this.b=e},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d){this.a=d},
exa:function exa(d){this.a=d},
exb:function exb(d){this.a=d},
exe:function exe(d){this.a=d},
exf:function exf(d){this.a=d},
exd:function exd(d){this.a=d},
exg:function exg(d){this.a=d},
exc:function exc(d){this.a=d},
exh:function exh(d,e){this.a=d
this.b=e},
ex4:function ex4(d,e){this.a=d
this.b=e},
ex3:function ex3(d,e){this.a=d
this.b=e},
VL:function VL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjV:function bjV(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
exi:function exi(d,e){this.a=d
this.b=e},
exj:function exj(d){this.a=d},
exk:function exk(){},
exl:function exl(d){this.a=d},
exm:function exm(d,e){this.a=d
this.b=e},
aDS:function aDS(d){this.a=d},
aDT:function aDT(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eqN:function eqN(d){this.a=d},
eqM:function eqM(){},
eqO:function eqO(d){this.a=d},
eqJ:function eqJ(d){this.a=d},
eqI:function eqI(){},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
buf:function buf(){},
aqQ:function aqQ(d){this.a=d},
aDW:function aDW(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
exo:function exo(d){this.a=d},
exn:function exn(d){this.a=d},
hVt(){var w,v,u,t
for(v=0;v<4;++v){w=D.d2t[v]
try{if(Ac.bWA(w)){u=w
return u}}catch(t){}}return null},
QW(d,e){return C.i3l(d,e)},
i3l(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QW=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hVt()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.od?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qw(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eM(b8,b9)
n=new B.eM("Getting ready\u2026",b9)
m=new B.eM(0,b9)
l=B.oj(new C.fAx(c2,b7,o),!1,!1)
b6.lR(0,l)
b9=x.H
B.cb(null,A.da,!1,null,new C.fAy(n,m),c6,null,!0,!0,b9)
k=new C.fAC(b7)
j=new C.fAD()
i=null
t=4
b3=c2.a
h=Aj.aRN(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fRM(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWI(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HC.ym(i,"dataavailable",new C.fAz(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.HC.ym(i,"stop",new C.fAA(d))
J.ahF(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QW)
case 8:w=7
return B.b(c5.$1(d0),$async$QW)
case 7:a0=d0
J.fRO(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahF(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahF(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QW)
case 15:w=14
return B.b(c5.$1(d0),$async$QW)
case 14:a0=d0
case 13:J.fRO(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahF(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fRO(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QW)
case 18:w=16
break
case 17:J.ahF(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahF(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d6(0,A.nX),$async$QW)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hP(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n7(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.L7(b0)
J.lW(b0)
B.bN(A.pN,new C.fAB(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.aa(c4)
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
J.lW(l)
if(p.py())p.eN()
c3=o
b3=$.aw()
c3.si_(b3)
J.aQm(c3,0)
c3=n
c3.si_(b3)
J.aQm(c3,0)
c3=m
c3.si_(b3)
J.aQm(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QW,v)},
fAx:function fAx(d,e,f){this.a=d
this.b=e
this.c=f},
fAw:function fAw(){},
fAy:function fAy(d,e){this.a=d
this.b=e},
fAC:function fAC(d){this.a=d},
fAD:function fAD(){},
fAz:function fAz(d){this.a=d},
fAA:function fAA(d){this.a=d},
fAB:function fAB(d){this.a=d},
bur:function bur(d,e,f){this.c=d
this.d=e
this.a=f},
f8_:function f8_(){},
f80:function f80(){},
cej(d){var w=0,v=B.j(x.at),u,t,s
var $async$cej=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ar_(d,A.zg),$async$cej)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bE(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cej,v)},
cei(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7v:function a7v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjE:function bjE(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eeX:function eeX(d){this.a=d},
eeV:function eeV(d){this.a=d},
eeW:function eeW(d,e){this.a=d
this.b=e},
a8n:function a8n(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ot$=k
_.ou$=l
_.ov$=m
_.nO$=n},
a8o:function a8o(d,e){this.a=d
this.b=e},
b2j:function b2j(){},
cgv:function cgv(){},
cgw:function cgw(){},
cgx:function cgx(d,e,f,g,h,i,j,k,l){var _=this
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
huB(d){return new C.ahX(d)},
a2B:function a2B(){},
ahX:function ahX(d){this.a=d},
aQH:function aQH(){},
awi:function awi(d,e){this.d=d
this.b=e
this.a=null},
aSb:function aSb(d){this.b=d
this.a=null},
fvJ(d,e){var w=0,v=B.j(x.H)
var $async$fvJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxy().LC(d,e),$async$fvJ)
case 2:B.fIQ()
return B.h(null,v)}})
return B.i($async$fvJ,v)},
hld(d,e){return(A.rp[(d^e)&255]^A.o.aB(d,8))>>>0},
ftc(d,e,f,g,h,i){var w=C.i_H(d,A.dc,f,null,A.cX,g,h,i)
return w},
hn5(d){var w=F.hnO(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hCd(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p3.h(0,w)
if(v!=null)return v
for(u=A.p3.gdO(A.p3),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hnd(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.deP[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAa(d,e){return C.hXf(d,e)},
hXf(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hP([d],"application/pdf")
n=x.z
q=B.aTS(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jZ(o,"share",[p]),x.H),$async$bAa)
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
return B.i($async$bAa,v)},
h1k(){var w=0,v=B.j(x.y),u,t,s
var $async$h1k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fle
s=$.bzI
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAa(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1k,v)},
bBw(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fle
l=$.bzI
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hhM()?3:4
break
case 3:w=5
return B.b(C.bAa(m,k),$async$bBw)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzJ
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n7(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.L7(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBw)
case 10:J.lW(q)
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
return B.i($async$bBw,v)},
h1b(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h1b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzJ
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lA.qL(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h1b,v)},
h1s(d,e){var w=0,v=B.j(x.H),u,t
var $async$h1s=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hP([d],"text/html"))
t.toString
u=window
u.toString
A.lA.qL(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h1s,v)},
b1g(d,e){var w=0,v=B.j(x.y),u
var $async$b1g=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1i(d,e),$async$b1g)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1h(d),$async$b1g)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1g,v)}},D,H,I,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,L,Aq,A_,O,A0,Aa,M,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,K,Az,S,T,AA,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[196]
A5=c[66]
Ai=c[49]
A6=c[161]
Aj=c[57]
U=c[211]
A7=c[52]
Ak=c[138]
Al=c[221]
C=a.updateHolder(c[4],C)
D=c[209]
H=c[91]
I=c[126]
Am=c[36]
A8=c[213]
X=c[210]
V=c[199]
An=c[120]
G=c[180]
F=c[31]
E=c[212]
W=c[122]
Q=c[140]
Y=c[29]
Z=c[168]
Ao=c[223]
Ap=c[176]
A9=c[111]
L=c[214]
Aq=c[119]
A_=c[60]
O=c[190]
A0=c[75]
Aa=c[99]
M=c[149]
Ab=c[102]
Ar=c[89]
As=c[216]
P=c[114]
A1=c[129]
At=c[87]
Au=c[124]
Ac=c[53]
Ad=c[186]
Av=c[35]
Ae=c[73]
Af=c[139]
Ag=c[220]
Aw=c[222]
Ax=c[219]
R=c[67]
Ay=c[217]
K=c[165]
Az=c[177]
S=c[47]
T=c[215]
AA=c[224]
N=c[197]
A2=c[218]
A3=c[108]
A4=c[56]
C.nS.prototype={
v0(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tM(t,v)
return new C.nS(t===0?!1:w,v,t)},
bLb(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CU()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tM(w,u)
return new C.nS(r===0?!1:s,u,r)},
bLG(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CU()
w=o-d
if(w<=0)return p.a?$.h2R():$.CU()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tM(w,u)
q=new C.nS(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a2o())
return q},
dY(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bLb(v)
u=w+v+1
t=new Uint16Array(u)
C.hen(r.b,w,e,t)
w=r.a
s=C.tM(u,t)
return new C.nS(s===0?!1:w,t,s)},
mt(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bLG(v)
t=w-v
if(t<=0)return n.a?$.h2R():$.CU()
s=n.b
r=new Uint16Array(t)
C.hMi(s,w,e,r)
w=n.a
q=C.tM(t,r)
p=new C.nS(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dY(1,u)-1)!==0)return p.aC(0,$.a2o())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a2o())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEs(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7Q(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7Q(t,e)
if(s===0)return $.CU()
if(r===0)return t.a===e?t:t.v0(0)
w=s+1
v=new Uint16Array(w)
C.hMg(t.b,s,d.b,r,v)
u=C.tM(w,v)
return new C.nS(u===0?!1:e,v,u)},
Hb(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CU()
w=d.c
if(w===0)return t.a===e?t:t.v0(0)
v=new Uint16Array(s)
C.b9n(t.b,s,d.b,w,v)
u=C.tM(s,v)
return new C.nS(u===0?!1:e,v,u)},
bya(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tM(r,u)
return new C.nS(!1,u,s)},
by9(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tM(u,r)
return new C.nS(!1,r,v)},
byb(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tM(p,m)
return new C.nS(s!==0,m,s)},
Uw(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CU()
w=t.a
if(w===e.a){if(w){w=$.a2o()
return t.Hb(w,!0).byb(e.Hb(w,!0),!0).a7Q(w,!0)}return t.bya(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.by9(v.Hb($.a2o(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7Q(e,v)
if(C.cEs(u.b,t,e.b,w)>=0)return u.Hb(e,v)
return e.Hb(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v0(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7Q(e,v)
if(C.cEs(u.b,t,e.b,w)>=0)return u.Hb(e,v)
return e.Hb(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CU()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.heo(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tM(w,t)
return new C.nS(q===0?!1:r,t,q)},
bLa(d){var w,v,u,t
if(this.c<d.c)return $.CU()
this.aQW(d)
w=$.fXg.c6()-$.ax1.c6()
v=C.fXi($.fXf.c6(),$.ax1.c6(),$.fXg.c6(),w)
u=C.tM(w,v)
t=new C.nS(!1,v,u)
return this.a!==d.a&&u>0?t.v0(0):t},
cng(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQW(d)
w=C.fXi($.fXf.c6(),0,$.ax1.c6(),$.ax1.c6())
v=C.tM($.ax1.c6(),w)
u=new C.nS(!1,w,v)
if($.fXh.c6()>0)u=u.mt(0,$.fXh.c6())
return t.a&&u.c>0?u.v0(0):u},
aQW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hek&&d.c===$.hem&&g.b===$.hej&&d.b===$.hel)return
w=d.b
v=d.c
u=16-A.o.gajM(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hei(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hei(g.b,f,u,r)}else{r=C.fXi(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fXj(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEs(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9n(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9n(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hMh(p,r,i);--o
C.heo(h,j,0,r,o,s)
if(r[i]<h){m=C.fXj(j,s,o,n)
C.b9n(r,l,n,m,r)
while(--h,r[i]<h)C.b9n(r,l,n,m,r)}--i}$.hej=g.b
$.hek=f
$.hel=w
$.hem=v
$.fXf.b=r
$.fXg.b=l
$.ax1.b=s
$.fXh.b=u},
gX(d){var w,v,u,t=new C.cEt(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEu().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nS&&this.aL(0,e)===0},
tb(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uV(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajM(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aB(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cEv(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cEw(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l5(A.aH.gaN(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v0(0):r
while(v.c>1){u=$.hrx()
if(u.c===0)B.b8(D.b37)
t=v.cng(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLa(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).h_(0)},
$iaRq:1,
$ihJ:1}
C.aQR.prototype={
L(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cLo(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k2(w,w.length,B.U(w).k("k2<1>"))}}
C.Rz.prototype={
cTo(){var w,v
if(this.as==null)this.bc9()
w=this.as
v=w==null?null:w.aos()
return v==null?null:v.eJ()},
bc9(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aos().eJ()
this.as=new C.bNu(v)}},
gZ(d){return this.at}}
C.a3z.prototype={
a5(){return"CompressionType."+this.b}}
C.bH5.prototype={
ex(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dY(v,u)+(s.b&A.yQ[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dY(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fG(u,t)&A.yQ[d])
s.c=t}return v}}
C.bFs.prototype={
cJE(d,e){var w,v,u,t,s,r=this,q=new C.bH5(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.ex(8)!==66||q.ex(8)!==90||q.ex(8)!==104)return!1
w=r.a=q.ex(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.clx(q)
if(t<0)return!1
if(t===0){q.ex(8)
q.ex(8)
q.ex(8)
q.ex(8)
s=r.clA(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ex(8)
q.ex(8)
q.ex(8)
q.ex(8)
return!0}}return!0},
clx(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ex(8)
if(t!==D.diE[u])v=!1
if(t!==D.cX1[u])w=!1
if(!w&&!v)return-1}return v?0:2},
clA(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ex(1),d2=((d3.ex(8)<<8|d3.ex(8))<<8|d3.ex(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ex(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ex(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c0M()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.ex(3)
if(q<2||q>6)return-1
v=d3.ex(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.ex(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hpE(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ex(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ex(1)===0)break
i=d3.ex(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hpD()
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
if(f<h)h=f}c9.bXe(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atj(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atj(d3)}while(a3===0||a3===1);++a5
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
a3=c9.atj(d3)
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
d4.bJ(c3)
c1=(c1<<8^D.H8[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Ha[b9];++b9
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
if(b8===0){b8=D.Ha[b9];++b9
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
if(b8===0){b8=D.Ha[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Ha[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Ha[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.H8[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.H8[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.H8[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.H8[c1>>>24&255^c7&255])>>>0
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
atj(d){var w,v,u,t,s=this,r=s.ay
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
t=d.ex(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.ex(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bXe(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c0M(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwD.prototype={
aHh(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bOt(e)
if(q<0)return
e.c=q
if(e.aK()!==101010256)return
e.aV()
e.aV()
e.aV()
e.aV()
r.f=e.aK()
r.r=e.aK()
w=e.aV()
if(w>0)e.aHk(w,!1)
r.clV(e)
q=r.r
v=r.f
u=e.aKm(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b83()
s.cTn(0,u,e,f)
q.push(s)}},
clV(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7t(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.t_()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.t_()
d.aV()
d.aV()
d.aK()
d.aK()
d.t_()
d.t_()
u=d.t_()
t=d.t_()
this.f=u
this.r=t
d.c=s},
bOt(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7t(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alw(A.hX)
o.aLD(r.eJ(),A.hX,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwB.prototype={}
C.awG.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwE.prototype={
aHh(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aV()
o.b=e.aV()
w=D.aDz.h(0,e.aV())
o.c=w==null?D.LE:w
o.d=e.aV()
o.e=e.aV()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aV()
u=e.aV()
o.x=e.ang(v)
o.y=e.hg(u).eJ()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aU8:D.DC
o.ay=f
o.Q=e.hg(t)
if(o.at!==D.DC&&u>2){w=o.y
w.toString
s=B.rd(w,A.hX,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aV()===39169){s.aV()
s.aV()
s.ang(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aV()
o.at=D.aU9
o.ax=new C.cwB(r,q)
w=D.aDz.h(0,q)
o.c=w==null?D.LE:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.blK().length},
aos(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rd(new Uint8Array(0),A.hX,q,q)
w=r.at
if(w!==D.DC)if(p.gM(0)<=0)r.at=D.DC
else{if(w===D.aU8){p=r.bJt(p)
r.Q=p}else if(w===D.aU9){p=r.bJ6(p)
r.Q=p}r.at=D.DC}w=r.c
if(w===D.ag8){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pt.Bs(p.eJ(),!0,!1)
else{t=B.a8c(A.hX,r.w)
p=r.Q
p.toString
A.pt.a3D(p,t,!0,!1)
u.b=t.GM()}r.Q.c=v
return B.rd(u.bi(),A.hX,q,q)}else if(w===D.ag9){s=B.a8c(A.hX,32768)
p=r.Q
v=p.c
C.huM().cJE(p,s)
u=s.GM()
r.Q.c=v
return B.rd(u,A.hX,q,q)}else return B.rd(p.eJ(),A.hX,q,q)},
blK(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eJ()},
u(d){return this.x},
b81(d){var w=this.ch,v=C.Jy(C.hld(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Uw(0,C.Jy(255)))
w[1]=v
w[1]=v.aG(0,C.Jy(134775813)).ad(0,C.Jy(1)).Uw(0,C.Jy(4294967295))
w[2]=C.Jy(C.hld(w[2].N(0),w[1].mt(0,24).N(0)))},
aQj(){var w=(this.ch[2].Uw(0,C.Jy(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJt(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rd(new Uint8Array(0),A.hX,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b81(u[v.c++]^r.aQj())}t=r.Q.eJ()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQj()
r.b81(s)
u&2&&B.aj(t)
t[w]=s}return B.rd(t,A.hX,q,q)},
bJ6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hg(8).eJ()
v=16}else if(k===2){w=d.hg(12).eJ()
v=24}else{w=d.hg(16).eJ()
v=32}u=d.hg(2).eJ()
t=d.hg(d.gM(0)-10)
s=d.hg(10)
r=t.eJ()
k=this.ay
k.toString
q=C.hLY(k,w,v)
p=new Uint8Array(B.ce(A.aH.dr(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.dr(q,v,k)))
if(!C.hdN(A.aH.dr(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bE2(k,new Uint8Array(16),p)
k=x.S
m=J.a4Z(0,k)
m=n.r=new C.cgk(m)
m.c=!0
m.b=m.bl2(!0,new C.asn(p))
if(m.c)m.d=B.bo(D.oa,!0,k)
else m.d=B.bo(D.yI,!0,k)
l=C.hc_(C.hc1(),64)
l.bew(new C.asn(o))
n.w=l
n.cSX(r,0,r.length)
k=s.eJ()
m=n.x
m===$&&B.c()
if(!C.hdN(k,m))throw B.V(B.fm("macs don't match"))
return B.rd(r,A.hX,null,null)}}
C.b83.prototype={
cTn(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aV()
e.aV()
e.aV()
e.aV()
e.aV()
e.aV()
e.aK()
n.w=e.aK()
n.x=e.aK()
w=e.aV()
v=e.aV()
u=e.aV()
n.y=e.aV()
e.aV()
n.Q=e.aK()
n.as=e.aK()
if(w>0)n.at=e.ang(w)
if(v>0){t=e.hg(v).eJ()
n.ax=t
if(v>=4){s=B.rd(t,A.hX,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aV()
p=s.aV()
o=s.a7t(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t_()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t_()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t_()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.ang(u)
f.c=n.as
t=new C.cwE(D.LE,n,D.DC,B.a([C.Jy(0),C.Jy(0),C.Jy(0)],x.f3))
n.ch=t
t.aHh(0,f,g)},
u(d){return this.at}}
C.cwC.prototype={
cJF(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwD(B.a([],x.fT))
this.a=g
g.aHh(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQR(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.ca(o,"/")||A.a.ca(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rz(o,A.o.an(Date.now(),1000),0):C.h4e(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h4e(o,q.w,q)
if(k.as==null)k.bc9()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alw(A.hX)
j.aLD(o,A.hX,h,h)}i=j==null?h:j.eJ()
if(i!=null)new B.FU(!1).Dr(i,0,h,!0)}}return v}}
C.bE2.prototype={
cSX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Co(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.huv(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bMP(u,0,w,0,o)}else{o===$&&B.c()
q.bJx(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KX(w,0)
m.x=A.aH.dr(m.x,0,10)
w=m.w
l=w.a
l.lC(0)
w=w.d
w===$&&B.c()
l.Co(0,w,0,w.length)
return f}}
C.cgp.prototype={}
C.cgt.prototype={}
C.cgn.prototype={}
C.asn.prototype={}
C.cgs.prototype={
cJU(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e7(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bew(new C.asn(A.aH.fN(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bNP(n.a,n.b,t,s,r)
r+=v}A.aH.hi(f,g,g+w,s)
return o.a.c},
bNP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Co(0,d,0,d.length)
v.Co(0,f,0,4)
u=m.c
u===$&&B.c()
w.KX(u,0)
u=m.c
A.aH.hi(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Co(0,s,0,s.length)
w.KX(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cgo.prototype={}
C.cgm.prototype={}
C.aso.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aso){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tb(d,e){var w=this.a
w===$&&B.c()
w=A.o.tb(w,e.gbXv())
if(!w)e.gbXv()
return w},
aJO(d,e){this.a=0
this.b=d},
tf(d){return this.aJO(d,null)},
aKp(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fe(""),u=w.a
u===$&&B.c()
w.b_M(v,u)
u=w.b
u===$&&B.c()
w.b_M(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_M(d,e){var w,v=A.o.fU(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgr.prototype={
lC(d){var w,v=this
v.a.tf(0)
v.c=0
A.aH.h2(v.b,0,4,0)
v.w=0
w=v.r
A.d.h2(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anX(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1g(u,0)
v.c=0}v.a.aKp(1)},
Co(d,e,f,g){var w=this.ckh(e,f,g)
f+=w
g-=w
w=this.cki(e,f,g)
this.ck8(e,f+w,g-w)},
KX(d,e){var w,v=this,u=C.hc0(v.a),t=u.a
t===$&&B.c()
t=C.h1W(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h1W(w,3)
v.ckc()
v.ck9(u)
v.as7()
v.cem(d,e)
v.lC(0)
return 20},
b1g(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o1(A.aH.gaN(d),d.byteOffset,d.length).getUint32(e,A.ia===w.d)
if(w.w===16)w.as7()},
as7(){this.cSW()
this.w=0
A.d.h2(this.r,0,16,0)},
ck8(d,e,f){while(f>0){this.anX(d[e]);++e;--f}},
cki(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1g(d,e)
e+=4
f-=4
w.aKp(4)
v+=4}return v},
ckh(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anX(d[e]);++e;--f;++v}return v},
ckc(){this.anX(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anX(0)}},
ck9(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.as7()
u=v.d
switch(u){case A.ia:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.E2:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cem(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ia===this.d,s=0;s<w;++s){r=v[s]
q=J.o1(A.aH.gaN(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgu.prototype={
cSW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q8[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q8[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q8[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q8[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q8[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q8[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q8[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q8[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q8[30]
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
C.cgq.prototype={
bew(d){var w,v,u,t,s=this,r=s.a
r.lC(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Co(0,w,0,v)
w=s.d
w===$&&B.c()
r.KX(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hi(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h2(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hi(w,0,u,s.d)
s.b9b(s.d,u,54)
s.b9b(s.e,u,92)
u=s.d
r.Co(0,u,0,u.length)},
KX(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KX(s,w)
s=u.e
t.Co(0,s,0,s.length)
v=t.KX(d,e)
s=u.e
A.aH.h2(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Co(0,s,0,s.length)
return v},
b9b(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cgl.prototype={}
C.cgk.prototype={
a1Z(d){return(D.oa[d&255]&255|(D.oa[d>>>8&255]&255)<<8|(D.oa[d>>>16&255]&255)<<16|D.oa[d>>>24&255]<<24)>>>0},
bl2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o1(A.aH.gaN(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1Z((m>>>8|(m&$.q8[24])<<24)>>>0)^D.czf[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o1(A.aH.gaN(e),e.byteOffset,w)
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
p=(p^f.a1Z((k>>>8|(k&$.q8[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1Z((k>>>8|(k&$.q8[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o1(A.aH.gaN(e),e.byteOffset,w)
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
p=(p^f.a1Z((g>>>8|(g&$.q8[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1Z(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bMP(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o1(A.aH.gaN(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.q8[8]
s=D.e8[b0>>>16&255]
r=$.q8[16]
q=D.e8[b1>>>24&255]
p=$.q8[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e8[a9&255]
s=D.e8[b0>>>8&255]
u=D.e8[b1>>>16&255]
v=D.e8[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e8[b0&255]
u=D.e8[b1>>>8&255]
s=D.e8[a8>>>16&255]
q=D.e8[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e8[b1&255]
a8=D.e8[a8>>>8&255]
a9=D.e8[a9>>>16&255]
b0=D.e8[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e8[n&255]
b0=D.e8[m>>>8&255]
a9=D.e8[l>>>16&255]
a8=D.e8[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e8[m&255]
b0=D.e8[l>>>8&255]
o=D.e8[b1>>>16&255]
s=D.e8[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e8[l&255]
o=D.e8[b1>>>8&255]
b0=D.e8[n>>>16&255]
u=D.e8[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e8[b1&255]
o=D.e8[n>>>8&255]
s=D.e8[m>>>16&255]
v=D.e8[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.nq(D.e8[a9>>>8&255],24)^C.nq(D.e8[b0>>>16&255],16)^C.nq(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.nq(D.e8[b0>>>8&255],24)^C.nq(D.e8[b1>>>16&255],16)^C.nq(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.nq(D.e8[b1>>>8&255],24)^C.nq(D.e8[a8>>>16&255],16)^C.nq(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.nq(D.e8[a8>>>8&255],24)^C.nq(D.e8[a9>>>16&255],16)^C.nq(D.e8[b0>>>24&255],8)^b6[w][3]
a7=D.oa[n&255]
b0=D.oa[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oa[l>>>8&255]
a9=D.oa[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oa[b1>>>8&255]
h=D.oa[n>>>16&255]
g=D.oa[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oa[l>>>24&255]
s=s[3]
a1=J.o1(A.aH.gaN(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o1(A.aH.gaN(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o1(A.aH.gaN(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o1(A.aH.gaN(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bJx(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o1(A.aH.gaN(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o1(A.aH.gaN(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o1(A.aH.gaN(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o1(A.aH.gaN(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.q8[8]
t=D.e7[a5>>>16&255]
s=$.q8[16]
r=D.e7[a4>>>24&255]
q=$.q8[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e7[a4&255]
t=D.e7[a6>>>8&255]
v=D.e7[b0>>>16&255]
w=D.e7[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e7[a5&255]
v=D.e7[a4>>>8&255]
t=D.e7[a6>>>16&255]
r=D.e7[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e7[b0&255]
a5=D.e7[a5>>>8&255]
a4=D.e7[a4>>>16&255]
a6=D.e7[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e7[p&255]
a6=D.e7[b0>>>8&255]
a4=D.e7[n>>>16&255]
a5=D.e7[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e7[o&255]
a4=D.e7[p>>>8&255]
a7=D.e7[b0>>>16&255]
t=D.e7[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e7[n&255]
a7=D.e7[o>>>8&255]
a5=D.e7[p>>>16&255]
v=D.e7[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e7[b0&255]
a7=D.e7[n>>>8&255]
t=D.e7[o>>>16&255]
w=D.e7[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.nq(D.e7[b0>>>8&255],24)^C.nq(D.e7[a5>>>16&255],16)^C.nq(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.nq(D.e7[a6>>>8&255],24)^C.nq(D.e7[b0>>>16&255],16)^C.nq(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.nq(D.e7[a4>>>8&255],24)^C.nq(D.e7[a6>>>16&255],16)^C.nq(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.nq(D.e7[a5>>>8&255],24)^C.nq(D.e7[a4>>>16&255],16)^C.nq(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yI[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yI[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yI[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yI[o>>>8&255]
i=D.yI[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yI[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o1(A.aH.gaN(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNt.prototype={}
C.bNu.prototype={
gM(d){var w=this.a.length
return w},
aos(){return B.rd(this.a,A.hX,null,null)}}
C.b9C.prototype={
uX(d){return C.hPc(d)}}
C.cqs.prototype={
Mz(d){var w=d.w,v=Math.max(1,A.k.dA(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9P(v,t+20,u+16,t,u,B.tV(d.x))},
no(d){return!1}}
C.bOm.prototype={
cDV(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bA(new C.bOn(),x.E))},
mJ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mJ)
case 6:w=5
return B.b(p.fvJ(f,r),$async$mJ)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mJ,v)}}
C.avn.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8a.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a8a&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wL(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fEs)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVl.prototype={
c1(d){var w=new C.aAe(!0,this.e,null,new B.dh(),B.cj())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syD(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFU()}}}
C.aAe.prototype={
syD(d,e){return},
gpu(){var w=this.aa$
return w!=null},
gl4(){var w=this.aa$
return w!=null},
Mo(d){var w=d==null?B.h6G(null):d
w.sa4x(this.ak)
return w}}
C.a0C.prototype={
T(){return new C.aID(B.aX(x.N))},
cR7(d){return this.d.$1(d)},
cOV(){return this.e.$0()}}
C.aID.prototype={
a_(){this.a1()
this.OX()},
OX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cOV(),$async$OX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6s(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OX,v)},
YJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f6w(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f6x(t))
w=3
return B.b(C.ang(p),$async$YJ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6y(t,s,p))
w=4
return B.b(t.OX(),$async$YJ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YJ,v)},
a0W(d){return this.cou(d)},
cou(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f6t(t))
s=J.q(d,"id")
w=3
return B.b(C.bZ4(J.k(s==null?"":s)),$async$a0W)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f6u(t))
w=1
break}q=C.h1q(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cR7(B.a([q],x.D)),$async$a0W)
case 4:if(t.c==null){w=1
break}t.m(new C.f6v(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0W,v)},
OW(d,e){return this.bJY(0,e)},
bJY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.f6n(q),r,null,!0,!0,x.y),$async$OW)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f6o(t))
s=s.h(e,"id")
w=4
return B.b(C.anf(J.k(s==null?"":s)),$async$OW)
case 4:if(t.c==null){w=1
break}t.m(new C.f6p(t))
w=5
return B.b(t.OX(),$async$OW)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OW,v)},
cCX(d){var w=B.bi(d),v=w==null?null:w.bT()
if(v==null)return""
return A.ik[B.bH(v)-1]+" "+B.bR(v)},
aQa(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ob,A.n),w,e,w,w,w,w,w,e)},
aQ9(d){return this.aQa(d,44)},
b6o(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ob:u,r=B.m(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.IR,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.IR,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bx9,u,u,u)],p))}return B.E(B.aC(A.c7,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hx,u,u,u,A.tH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f6C(this,d),u,u,u,u,u,u,!1,A.a7),1)},
cif(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xx,n=B.m(18),m=p?A.d3:A.dm
m=B.I(m,A.q,p?1.8:1)
w=this.aQ9(A.q3)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQN,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.w(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQP,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Ob:q
u=p?q:B.I(A.b0,A.q,1.6)
r=p?D.bNf:q
return B.aC(q,B.df(q,B.B(B.a([w,A.bd,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fA,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fA,q,q,A.d8,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f6r(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cq3(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cCX(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dm,A.q,1)
v=r.aQ9(A.No)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQN,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.w(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQP,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b30(A.hA,A.bv,"Bring it back",r.r?q:new C.f6z(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b30(A.e6,A.c9,"Delete",r.r?q:new C.f6A(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xx,q,w,o,q,q,A.n),q,q,q,A.d8,D.brG,q,q,q)},
b30(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.ht(B.aC(w,B.p(w,B.X(d,v?A.b0:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asn(d,e,f){var w=null
return new B.D(D.bqK,B.w(B.a([B.X(d,A.b0,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.fb4,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f3B,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b0,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQa(A.yv,46),A.bd,D.by1],t)
if(j.r)s.push(D.e9x)
s.push(B.aH(i,i,i,i,A.vT,i,i,i,new C.f6F(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dm,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bud,s,i),B.p(i,B.B(B.a([j.b6o(0,A.y6,"Save",j.a.c.length),j.b6o(1,A.NC,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bti,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c9:A.bv).j(0.12)
s=B.m(14)
r=B.I((j.y?A.c9:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.Np:A.eg
n=B.X(n,p?A.c9:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a7A,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bte,A.ii,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f78,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aC(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fab,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f6G(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asn(A.q3,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cif(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e95)
else if(j.e==null)s.push(j.asn(A.akS,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asn(A.oO,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cq3(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.co,B.cw(u,i,X.ahY,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc3i()
p=s?i:D.Ob
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y6,m?A.jh:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.btR,B.aC(i,B.df(i,B.B(B.a([k,A.a71,new B.dq(1,A.co,B.f6(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jh:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.ei),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hx,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.w(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b03,i,i,i,i,i,i,i,i)}}
C.oi.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ac()],x.N,x.z)}}
C.Ym.prototype={
T(){return new C.axd(B.a([],x.k),B.f8(null,x.H))},
ge2(){return this.c}}
C.axd.prototype={
a_(){this.a1()
this.P4()},
P4(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1B(t.a.c),$async$P4)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFR(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P4,v)},
cwf(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qg(t.d,new C.cFU(d))
v=w<0
if(v&&C.hMk(d))return t.f
u=t.d
if(v)J.px(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fT4(new C.cFV(t),v)
return t.f=t.f.bA(new C.cFW(t,d),v).eP(new C.cFX())},
Iw(d,e,f){return this.cbT(0,e,f)},
aXU(d,e){return this.Iw(0,e,!1)},
cbT(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iw=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ck(B.e8(new C.cFQ(t,e),!1,null,x.H)),$async$Iw)
case 3:w=4
return B.b(t.f,$async$Iw)
case 4:w=5
return B.b(t.P4(),$async$Iw)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iw,v)},
aXa(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dvr:d
this.Iw(0,new C.oi(w,v,new B.S(Date.now(),0,!1)),!0)},
c2N(){return this.aXa(null)},
ad1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ad1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cFY(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ad1)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXa(s)
case 1:return B.h(u,v)}})
return B.i($async$ad1,v)},
Iv(d,e){return this.bJQ(0,e)},
bJQ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cFL(e),s,null,!0,!0,x.y),$async$Iv)
case 3:if(g!==!0){w=1
break}t.m(new C.cFM(t,e))
w=4
return B.b(t.f,$async$Iv)
case 4:w=5
return B.b(C.ag3(t.a.c,e.a),$async$Iv)
case 5:w=6
return B.b(t.P4(),$async$Iv)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Iv,v)},
Da(d){return this.bC_(d)},
bC_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cFH(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Da)
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
return B.b(t.aXU(0,d),$async$Da)
case 9:w=5
break
case 7:w=10
return B.b(F.h1Y(r,d.b,null),$async$Da)
case 10:w=5
break
case 8:w=11
return B.b(t.Iv(0,d),$async$Da)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
bXs(){var w,v,u=null,t=[D.dvu,D.dvs,D.dvt],s=new C.cFO(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.y(D.dfo[w],u,A.oo,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.o1,u,u,u))}return B.p(u,B.B(B.a([B.E(B.w(B.a([D.fzW,A.N,B.bW(A.bA,n,A.bq,6,6),A.aR,B.aC(u,B.p(u,D.eNn,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ail,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFN(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bVs,A.n),u,u,u,u,D.bun,u,u,u)},
bBY(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b1,A.r,B.a([B.f6(A.A,F.anO(d.b),A.f,A.bU),D.ef3,B.ao(v,B.aC(v,B.p(v,D.bO2,A.f,v,v,D.b1_,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFC(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f0Y,v,v,v)
w=u===1?"":"s"
return B.aC(v,B.w(B.a([new B.fI(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f7k,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFD(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFE(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.D(I.agR,B.ht(B.aC(s,B.p(s,A.anA,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.vX,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc43(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n4,s,s,s,!0,s,s,s,s,s,D.fA_,s,s,s,1,s,!0)
if(t.e)r=D.b4o
else{w=t.bXs()
v=B.a([D.flB,A.ab],r)
if(J.cI(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f0p,s,s,s),A.f,s,s,new B.o(D.b97,s,s,u,s,s,A.n),s,s,s,s,A.xP,s,s,s))}r=B.a([new B.nP(A5.YH,new B.m8(w,s),s),new B.nP(D.btL,new B.m8(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eTy)
else r.push(new B.nP(D.btg,B.OJ(new B.on(new C.cFZ(t),J.ad(t.d),!0,!0,!0,0,B.rV(),s),D.b3G),s))
r=B.vv(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c7(q,D.b7W,r,s,!1,!1,s,s)}}
C.Yk.prototype={
T(){return new C.ax9(B.a([],x.bx))},
TL(d){return this.d.$1(d)}}
C.aEv.prototype={}
C.ax9.prototype={
b_O(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aN),w),u=this.gaXT()
v.aP(0,u)
w=new B.as(new B.bb(e,A.b5,A.aN),w)
w.aP(0,u)
return new C.aEv(v,w,f)},
E0(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a6(0)
v.x=B.cM(A.pT,new C.cF5(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aN),v)
t=m.gaXT()
u.aP(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aN),v)
u.aP(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aN),v)
u.aP(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aN),v)
o.aP(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aN),v)
n.aP(0,t)
r.push(new C.aEv(o,n,p.c))}if(r.length===0)r.push(m.b_O("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a6(0)
if(r.y){r.a.c.b=r.gp9()
q=r.a
q.TL(q.c)}q=r.d
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
gp9(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.ms(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.ri(n,w,v,t,u)},
AJ(){var w=0,v=B.j(x.H),u=this,t
var $async$AJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a6(0)
u.y=!1
u.a.c.b=u.gp9()
t=u.a
w=2
return B.b(t.TL(t.c),$async$AJ)
case 2:return B.h(null,v)}})
return B.i($async$AJ,v)},
c41(){this.m(new C.cF4(this))
this.E0()},
aWS(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cF7(w,d,v))
w.E0()},
c42(d,e){var w=A.d.cw(this.w,e)
this.m(new C.cFf())
this.E0()
$.aW.x1$.push(new C.cFg(w))},
Qf(d){return this.ci5(d)},
ci5(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hZ().l7(80,1400,A.eJ),$async$Qf)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Qf)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahA(o,".png")?"image/png":"image/jpeg"
r.m(new C.cF8(d,n,p))
r.E0()
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
return B.i($async$Qf,v)},
xG(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hoS(r,t.gp9()),$async$xG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cF6(t,s))
t.E0()
case 1:return B.h(u,v)}})
return B.i($async$xG,v)},
cin(d){var w,v=this,u=null,t=F.fzO(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hj(D.bHl,D.fo4,new C.cFa(v,d),u),u)
w=x.p
return new B.D(A.cy,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fO(t,A.A,u,u,A.ci,A.bU,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b31(A.kw,new C.cFb(v,d)),A.bp,v.b31(A.cD,new C.cFc(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b31(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hy,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ah)},
Ix(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ix=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AJ(),$async$Ix)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h1Y(s,t.gp9(),new C.cFe(t)),$async$Ix)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ix,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.D(A.r5,B.hj(D.bM0,D.fu4,n.gaw5(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.anz,m,m,m,new C.cFh(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WI,m,1,m,m,m,!1,m,!1,E.n4,m,m,m,!0,m,m,m,m,m,D.foX,m,m,m,1,m,!0),j=Av.aU2(O.li,A.c,Ae.VB,A.o6,D.fpG,n.gc40()),i=B.m(18),h=n.gaw4(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.ju,12)],x.V)
g=B.aC(m,B.p(m,new B.a7(92,142.1818181818182,B.f6(A.A,F.anO(n.gp9()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.w(B.a([D.fBx,A.at,B.d(F.h0t(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fcN,m,m,m),A.R,B.dn(E.amR,E.aRC,h,B.bn(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WI,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.om,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aR],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.li.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bKK,m,m,m,v===0?m:new C.cFi(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.bR0,m,m,m,v===r-1?m:new C.cFj(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cFk(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.w(B.a([new B.cl(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fdk,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oH,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.cin(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n4,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a8a(h),A.e5,D.brV,m,m,m))}return B.ok(!0,B.c7(k,E.af0,B.cw(g,m,D.bsm,m,m,A.ag,!1),m,!1,!1,j,m),new C.cFl(n),x.C)}}
C.axb.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c9:E.n4,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d5.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eI,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.w(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(u.e,t,t,t,t,t,t,D.aQ8,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.apX.prototype={
T(){return new C.aDh()}}
C.aDh.prototype={
a_(){this.a1()
this.Zn()},
bu(d){this.bG(d)
if(d.c!=this.a.c)this.a0L()},
a0L(){var w=0,v=B.j(x.H),u=this,t
var $async$a0L=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dQ(t,x.H),$async$a0L)
case 2:u.d=null
if(u.c!=null)u.m(new C.e9L(u))
w=3
return B.b(u.Zn(),$async$a0L)
case 3:return B.h(null,v)}})
return B.i($async$a0L,v)},
Zn(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zn=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d0(n,"http://")||J.d0(n,"https://")||J.d0(n,"data:")){o=B.XZ(B.cE(n,0,null),new B.P5(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ig(0).d6(0,A.pP),$async$Zn)
case 7:if(r.c==null){w=1
break}r.d.th(!1)
r.m(new C.e9J(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e9K(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zn,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c6L(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.e9M(w))}else{v.pT(0)
w.m(new C.e9N(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.je.j(0.92),D.KH.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q6,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.w(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.X(A.am7,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b5d
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f6(A.A,new B.a7(r,q,new B.A2(s,o),o),A.r,A.bU)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iI,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aC(o,B.bw(n,new B.an(A.W,o,A.b1,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6K(),o,o,o,o,o,o,!1,A.a7)}}
C.xs.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jm.prototype={}
C.ad1.prototype={
B(d){return B.oO(new C.dY5(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acq.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.je.j(t?0.35:0.4),A.q,1),p=t?D.Lf:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.m(10),l=B.I(A.c_.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fI(0.5625,C.i3G(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aiQ,u,u,u,u),1)
m=D.je.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.je,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.w(B.a([o,B.p(u,B.w(B.a([l,A.cS,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bfd,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ah6,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xv.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nF.prototype={}
C.biG.prototype={
Zw(d){var w=null
return new B.bI(A.a3,w,w,B.DJ(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c7c(){return this.Zw(1)},
awK(d){var w=null,v=B.m(8),u=B.I(A.hZ,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acZ,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.w(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hZ,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dV(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hZ,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awK("TAARIFA ZA WANANDOA"),A.am,w.c7c(),A.cS,w.Zw(0.9),A.cS,w.Zw(0.7),A.N,w.awK("TAMKO LA MAKUBALIANO"),A.h1,w.Zw(1),A.cS,w.Zw(0.95),A.N,w.awK("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ad4.prototype={
B(d){return B.oO(new C.ef_(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeL.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.beO:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h0Z(w.a)
if(v==null)v=A.d.gI(D.QG)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fI(0.5625,new B.an(A.W,r,A.b1,A.r,B.a([B.bZ(0,B.fO(C.h0Y(v.d),A.A,r,r,A.ci,A.bU,!0,r,!1,r,r),0,0,0),new B.D(A.ahP,new C.biG(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aiQ,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lg,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.w(B.a([l,B.p(r,B.w(B.a([i,A.cS,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b8r,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ah6,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kR.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7E.prototype={}
C.Vw.prototype={
T(){var w=$.aw()
return new C.aDA(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mA(0,null,null),A.d.gI(D.a2A),D.dFM,B.a([],x.L),B.a([],x.gE))}}
C.aDA.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zp(C.fDH(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fCD().bA(new C.eih(v),w)
$.qS().jC(0,"assets/images/ngmy_logo.png").bA(new C.eii(v),w).eP(new C.eij())},
q(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a2()},
agW(d){var w=null,v=this.c
if(v!=null)v.J(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hZ().l7(88,1600,A.eJ),$async$IQ)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$IQ)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hp8(m,p),$async$IQ)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCF(new B.pL(o,1),m),$async$IQ)
case 10:if(r.c!=null)r.m(new C.ehU(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agW("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IQ,v)},
Wy(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hp8(s,q),$async$Wy)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCF(new B.pL(r,1),s),$async$Wy)
case 4:if(t.c!=null)t.m(new C.ehQ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wy,v)},
adR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ei0(q))
t=4
q.a.toString
p=C.i87()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adR)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ei1(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agW(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ei2(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adR,v)},
ZB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ehW(q,i))
t=4
q.a.toString
p=C.i86()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZB)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ehX(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.ehY(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehZ(q))
$.aW.x1$.push(new C.ei_(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZB,v)},
c7s(d){this.m(new C.ehV(this,d))},
Eh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ehS(q))
t=4
w=7
return B.b($.aW.gmE(),$async$Eh)
case 7:w=8
return B.b(B.bN(A.nb,null,x.H),$async$Eh)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.pW))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m_(1800/p.gZ(0).a),$async$Eh)
case 9:o=e
w=10
return B.b(o.hv(A.fZ),$async$Eh)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag6(J.eT(A.dD.gaN(n)),"ngmy_news.png","image/png"),$async$Eh)
case 11:m=e
q.agW(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agW(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehT(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eh,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l2,a2,a2,a2,new C.ei8(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bMw,a2,a2,a2,new C.ei9(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oX,a2,a2,a2,a4?a1.gaZ0():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.AO,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eNx,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fI(0.7142857142857143,B.f6(A.A,new B.ew(new C.b0h(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zG,a2,a2,a2)
t=a1.as?a2:a1.gc7r()
t=B.a([B.E(B.dn(D.bNg,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.to,a2,a2,a2,A.c,A.fP,a2,a2,new B.b7(B.m(14),P.uZ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fO(r,A.A,a2,a2,A.ci,A.bU,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.au,r,B.aH(a2,a2,a2,a2,D.bK2,a2,a2,a2,a1.as?a2:a1.gbIr(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zG,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aS1("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d9U[o]
p.push(B.mI(a2,D.to,new B.y(n.a,a2,A.pf,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.eia(a1,n),a2,a2,P.uZ,a2))}p=B.bW(A.bA,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bA,B.a([D.fA8,A.bd,B.j7(a2,a2,a2,D.fko,a2,new C.eib(a1),m==="en",a2,a2,a2,a2),A.ab,B.j7(a2,a2,a2,D.fkj,a2,new C.eic(a1),m==="sw",a2,a2,a2,a2)],w),A.rY,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zG,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.db(D.a2A,0,B.dG(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQv(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.db(D.a2A,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQv(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc7u()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cy,s,a2),t,A.aB,new B.D(A.cy,r,a2),q,A.N,p,A.R,m,A.aB,new B.D(A.cy,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aR,B.aC(a2,B.p(A.A,B.B(B.a([D.bNa,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fQ,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u8,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dqj,A.au,D.byl],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.to
p=new B.aT(16,16)
d=new B.ay(A.bE,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.faR,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Vo,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cy,A.ii,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cXt[o]
t.push(B.mI(a2,D.to,new B.y(a0,a2,A.J3,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.eid(a1,a0),a2,a2,P.uZ,a2))}u.push(B.bW(A.bA,t,A.bq,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aS1("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eie(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc7t()
u.push(B.B(B.a([t,A.ab,B.HB(A.yA,s,B.nz(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZ0()
u.push(B.dn(A.oX,D.fvF,t,B.bn(A.cZ,a2,a2,a2,a2,A.IP,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ahB,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jW.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a72,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iO,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.AG,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.buF,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.AO,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aS1(d){var w=null
return B.bs(w,new B.b4(4,B.m(14),A.Y),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.to,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.J_,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQv(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bC:A.bE
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kW,t,t,t,t),A.h1],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bqY,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jn,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aC(t,B.p(t,B.w(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iZ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ehR(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zp.prototype={
bbk(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zp(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cHp(d){var w=null
return this.bbk(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cci(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fF(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ccg(),B.U(w).k("M<1,n>")).c0(0,new C.cch())
t=B.C(w,w.$ti.k("J.E"))}else t=k
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
return this.bbk(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFt(d){return this.f}}
C.tg.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bn.prototype={
a5(){return"NewsFrame."+this.b}}
C.ld.prototype={}
C.b0h.prototype={
rk(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZ2(d,e,f,g){return this.rk(d,e,null,1.25,f,A.bn,g)},
PB(d,e,f,g,h){return this.rk(d,e,f,1.25,g,A.bn,h)},
awQ(d,e,f,g,h){return this.rk(d,e,null,f,g,A.bn,h)},
awP(d,e,f,g,h){return this.rk(d,e,f,g,0,A.bn,h)},
aZ4(d,e,f,g,h){return this.rk(d,e,null,f,0,g,h)},
c7y(d,e,f,g,h,i){return this.rk(d,e,f,g,0,h,i)},
awO(d,e,f,g){return this.rk(d,e,null,f,0,A.bn,g)},
adU(d,e,f){return this.rk(d,e,null,f,0,A.bn,A.cN)},
aZ3(d,e,f,g,h){return this.rk(d,e,f,g,0,h,A.cN)},
c7x(d,e,f,g){return this.rk(d,e,null,f,0,g,A.cN)},
c7w(d,e,f,g){return this.rk(d,e,f,g,0,A.bn,A.cN)},
adV(d,e,f,g,h,i){return this.rk(d,e,f,g,h,A.bn,i)},
aZ1(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kh(new B.er(d,u,u,A.cO,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c6,new B.js(1),u,u,h,u,A.c5,u)
v.wD(g)
if(!v.b.a.c.gaDP())return w
w-=2}return j},
adS(d,e,f,g,h,i,j,k){return this.aZ1(d,e,f,g,h,i,j,k,A.bn)},
ayY(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.w(t,A.m,w,A.e,A.j,0,A.p)},
ayX(d){return this.ayY(null,!1,d)},
agK(d,e){return this.ayY(null,d,e)},
cpc(d,e){return this.ayY(d,!1,e)},
gb0b(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUD(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Os(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adS(w.gaUD(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaUD(),v,g,A.a2,v,v,v,w.awP(u,t,f,1.02,A.O),e,v,v)},
aUI(d){return this.Os(d,A.L,null,2,78,30)},
abi(d,e,f,g,h){return this.Os(d,e,null,f,g,h)},
bXk(d,e,f,g,h){return this.Os(d,A.L,e,f,g,h)},
bXj(d,e,f){return this.Os(d,A.L,null,e,f,30)},
Rx(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.D(A.jG,B.d(s,u,g,A.a2,u,u,u,v.aZ3(w,v.aZ1(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b64(d){return this.Rx(d,A.L,null,3,24)},
aAt(d,e,f,g){return this.Rx(d,e,null,f,g)},
cwJ(d,e,f){return this.Rx(d,A.L,e,3,f)},
b65(d,e){return this.Rx(d,e,null,3,24)},
cwH(d,e){return this.Rx(d,A.L,null,3,e)},
cwI(d,e,f){return this.Rx(d,e,null,3,f)},
aqo(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fW,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PB("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Np(){return this.aqo(null,!0)},
aqn(d){return this.aqo(null,d)},
bEk(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.D(A.i1,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7x(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vt(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb0b(),h=A.o.an(j.bE(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hWE(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZ2(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adS(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adS(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.w(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eE,l,l,l,m.adV(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bBV(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hC,A.j,0,l,l),A.am,m.agK(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.w(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eE,l,l,l,m.awO(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bBV(j),l,l,l,l,l,l,m.PB(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hC,A.j,0,l,l),A.N,m.cpc(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0b()
v=B.d("NGMY",l,l,l,l,l,l,m.awQ(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.w(B.a([B.B(B.a([v,A.ab,B.eH(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rk(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adV(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dN,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l)
t=m.agK(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awO(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.w(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agK(!0,1.4),A.at,B.d(C.bBV(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayX(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.w(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awQ(v,u,1,3,A.O),A.L,l,l),A.N,m.agK(!0,1.2),A.at,B.B(B.a([B.d(C.bBV(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l),A.at,m.ayX(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acp(d){return this.vt(d,!1)},
adT(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adV("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c7v(d,e){return this.adT(d,null,e,null)},
aWK(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.awP("Roboto",15,t,1,A.cw),r=B.X(E.ake,t,w,w,w,18),q=A.a.ap(A.p0[B.bH(v)-1],0,3),p=A.a.aU(A.o.u(B.h0(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fM,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avy(){return this.aWK(A.my)},
b3f(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adV("Roboto",this.adS(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
az0(d,e,f){return this.b3f(d,e,f,30)},
aAw(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.D(A.vk,B.d(v,w,e,A.a2,w,w,w,this.c7w("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b69(d){return this.aAw(d,3,22)},
cwU(d,e){return this.aAw(d,e,22)},
tA(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.ci,A.bU,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dh(D.bxq,w,s)
if(v==="sepia")w=new B.Dh(D.bxp,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.y1,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.WD.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.W,s,A.b1,A.r,v,s),s)},
qo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tA(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lS,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e5B,14)],x.V)
v=l.tA(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eH(A.A,-0.035,B.p(k,B.w(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aZ3(j.as,13.5,D.b9Y,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bdc,k,k,k,w,k,A.n),k,e,k,k,D.bsh,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tA(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hV(l.tA(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lS,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e5r,10)],x.V)
return B.eH(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tA(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r9,k,k,k),0,0,0),B.ao(k,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nu(l.tA(d,e),A.aq,D.fXK),new C.bbQ(j,k),k,k,A.av),k)
case 7:j=x.p
w=B.a([l.tA(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bn(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bP,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cl(A.aO,A.qa,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b1,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bwG,k,k,d)
case 8:w=d/2
v=B.wT(A.hg,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wT(A.hD,new B.aT(w,w)),l.tA(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fO,22)],x.V)
return B.p(k,l.tA(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a7(d,e,B.nu(l.tA(d,e),A.aq,D.h2M),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tA(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aO3(d,e){return this.d.e===D.Rj?A.bH:this.bEk(d,e)},
W6(d){return this.aO3(d,A.L)},
gazN(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azM(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.I(B.b0(v.w),A.q,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZ4(v.Q,19,1.15,A.cF,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PB("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adU(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jx(B.w(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gcfD(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a90(d,e,f,g){return B.cq(new C.ccj(this,e,d,f,g))},
a9_(d){return this.a90(d,22,!0,18)},
Wh(d,e){return this.a90(d,22,!0,e)},
aP5(d,e,f){return this.a90(d,22,e,f)},
bGm(d,e,f){return this.a90(d,e,!0,f)},
b91(d,e,f,g){return B.cq(new C.cck(this,e,d,g,!0,f))},
cer(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.w(B.a([k.acp(824),A.aB,k.aUI(824),k.b64(824),A.N,k.Np(),A.ac,B.av(k.qo(824,360),j,j,j),k.W6(824),A.ac,B.E(k.a9_(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.w(B.a([k.acp(824),A.aR,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.w(B.a([k.abi(440,A.bh,3,62,26),k.aAt(440,A.bh,2,20),A.b7,k.aqo(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.IQ,B.w(B.a([k.qo(362,310),k.W6(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.ayX(2),A.ac,B.E(k.a9_(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vt(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bXk(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cwJ(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.w(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B9,j,j,j)
u=B.a([B.av(k.qo(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Rj){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awP(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lQ,j,j,j),j,j,0,0,j,j))}return B.w(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Np(),A.R,B.E(k.Wh(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vt(824,!0)
w=k.qo(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.w(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Os(780,A.bh,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.buY,j,j,j),j,j,0,0,j,j)],u),j),k.b65(824,A.bh),A.N,k.Np(),A.R,B.E(k.a9_(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.w(B.a([k.acp(824),A.aB,k.aUI(824),k.b64(824),A.N,k.Np(),A.ac,B.E(k.b91(3,300,B.w(B.a([k.qo(300,300),k.W6(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vt(824,!0)
v=x.p
u=B.w(B.a([k.abi(440,A.bh,3,62,26),k.aAt(440,A.bh,2,20),A.b7,k.aqn(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.w(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aO8,new B.D(A.i1,k.qo(364,h.e===D.Rj?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wh(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.w(B.a([k.acp(824),A.ac,k.bXj(824,2,70),k.cwH(824,21),A.N,k.Np(),A.ac,B.E(k.b91(3,340,B.av(k.qo(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vt(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBV(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PB(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZ4(h.Q,24,1.15,A.cF,A.O),j,j,j))
v.push(A.b7)
if(k.gazN())v.push(k.azM(230,250))
return B.w(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.w(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ah4,j,j,j,1.2),new B.a7(570,j,B.w(B.a([k.abi(570,A.bh,3,62,28),k.cwI(570,A.bh,20),A.N,k.aqn(!1),A.N,B.av(k.qo(570,330),j,j,j),k.W6(570),A.R,B.E(k.aP5(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vt(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PB(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.w(B.a([w,A.ac,B.p(j,B.w(B.a([t,A.am,k.Os(788,A.bh,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.btj,j,j,j),k.b65(824,A.bh),A.R,B.av(k.qo(824,310),j,j,j),k.W6(824),A.N,k.Np(),A.R,B.E(k.a9_(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.w(B.a([k.vt(824,!0),A.aR,new B.an(A.W,j,A.aa,A.r,B.a([k.qo(824,430),B.ao(18,k.c7v(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.az0(824,3,66),k.b69(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avy(),A.aB,B.E(k.Wh(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.w(B.a([k.vt(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.w(B.a([k.adT(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b3f(410,4,58,28),k.aAw(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aO9,k.qo(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avy(),A.aR,B.E(k.Wh(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vt(824,!0)
v=k.qo(824,420)
u=B.hzo(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.w(B.a([w,A.aR,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fu(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7y(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bvd,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.az0(824,3,62),k.b69(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWK(A.lq),A.aB,B.E(k.Wh(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vt(824,!0)
u=h.w
t=x.p
w=B.a([k.qo(824,380),B.ao(j,k.adT(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.az0(824,2,60)
r=k.cwU(824,2)
p=k.avy()
o=B.E(k.aP5(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.w(B.a([v,A.aR,new B.an(A.W,j,A.aa,A.r,w,j),A.aR,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.m(14),k.tA(150,104),A.aq),A.oj,B.E(B.w(B.a([k.adT("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awO(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.P,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.w(B.a([k.vt(824,!0),A.by,k.abi(824,A.bh,3,62,30),k.aAt(824,A.bh,2,22),A.R,k.aqn(!1),A.R,B.av(k.qo(824,330),j,j,j),k.aO3(824,A.bh),A.aR,B.E(k.bGm(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8l(B.b0(q.w),s),A.av),0,0,0))
w=q.w
n.push(new B.D(D.bvK,B.w(B.a([B.E(t.cer(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h1,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZ2(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PB(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hC,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.dZ(B.b3(s,s,s,new C.bqX(v.j(q.ch?0.07:0.06),s),A.av),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hV(B.fO(q,A.A,s,s,A.ci,A.bU,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.my,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awQ(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.dZ(B.de(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bwO,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jx(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbR.prototype={
j7(d){return C.heu(d)},
jO(d){return!1}}
C.bbQ.prototype={
a4(d,e){var w,v=C.heu(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aQ(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bts.prototype={
j7(d){var w,v,u,t,s,r,q,p,o=new B.eJ()
o.dw(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bB(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bB(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jO(d){return!1}}
C.b8l.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eJ()
k.dw(7)
$.W()
w=B.N()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.KI.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
av(d){return!1}}
C.bqX.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.h1(u,u,u,u,B.d3(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c6,u,A.dP,A.c5)
s.en()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j4(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbd(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.Vz.prototype={
T(){return new C.aDE()}}
C.aDE.prototype={
a_(){var w=this
w.a1()
B.h_P(w.a.c,null).bA(new C.ejs(),x.g7).bA(new C.ejt(w),x.a)
w.a.toString},
gaMT(){var w=D.auR[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawR(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMT()
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
return new B.a9(q,w,q+s,w+t)},
ZD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ejf(r))
t=4
q=r.gawR()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qZ()
m=B.Df(n,null)
i=B.N()
i.Q=A.fX
m.qz(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pE().zj(J.h3Z(p),J.h3Z(o)),$async$ZD)
case 7:l=e
w=8
return B.b(l.hv(A.fZ),$async$ZD)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.vm(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ejg(r))
r.c.J(x.q).f.U(D.eW8)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZD,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l2,s,s,s,new C.ejm(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.fyb,s,s,!0,s,s,t.y||r==null?s:t.gc7z(),s,s)],p),s,s,!0,!0,A.AO,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fC8,s,s,s,1,s,!0)
if(r==null)p=A.lH
else{w=B.E(new B.D(A.bQ,B.av(new B.fI(t.gaMT(),B.cq(new C.ejn(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iZ,B.j7(s,s,s,new B.y(D.auR[u].a,s,E.aPX,s,s,s,s,s,s,s,s,s),s,new C.ejo(t,u),t.e===u,s,s,s,s),s))
p=B.w(B.a([w,B.p(s,B.bm(!0,B.w(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bNU,B.E(B.kY(s,s,s,6,1,new C.ejp(t),t.f),1),D.bNw],p),A.m,s,A.e,A.j,0,s,s),D.fvz,A.am,B.bK(!1,D.fvi,s,s,!0,s,s,new C.ejq(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.WS,s,s,s,s,s,s,D.bsF,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c7(q,A.AO,p,s,!1,!1,s,s)}}
C.bbn.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.ci
return d.qz(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_D.prototype={
T(){var w=$.aw(),v=x.A
return new C.aF0(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a3c),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ou.prototype={}
C.aF0.prototype={
gaUQ(){var w,v,u=this
if(u.p1)w=new B.vD(1,u.p2,0.9,u.p3).iE().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eT2(w))},
q(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
Yg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qS().jC(0,"assets/images/ngmy_logo.png"),$async$Yg)
case 7:q=e
p=J.eT(J.vm(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCF(new B.pL(p,1),o),$async$Yg)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eRV(r,p))
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
return B.i($async$Yg,v)},
PE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hZ().l7(92,1800,A.eJ),$async$PE)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$PE)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCF(new B.pL(p,1),n),$async$PE)
case 9:if(r.c==null){w=1
break}r.m(new C.eSi(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PE,v)},
b2C(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aM=w.aE=w.au=w.Y=w.b8=w.bh=w.y2=0
w.b1=null
w.aO=0.25
w.bb=null
w.bz=0.5
w.aS=1
w.c3=w.bQ=w.bk=0
w.cP=w.cJ=!1},
aWu(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzm(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dcC)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzm(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzm(C.fZU(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzm(C.fZU(1-a0*0.5,n,n,n),w)}return a1?C.bzm(C.fZU(-1,255,255,255),w):w},
aAC(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kY(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zc(u,v,w)
this.dx.pa(new C.eSs(t),!0)
return t},
b58(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAC()
w=C.i5P(e.d.a.a,e.db)
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
return C.i2j(d,k,v,a0,j,e.gaUQ(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cuF(){return this.b58(null)},
D9(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmE(),$async$D9)
case 3:w=4
return B.b(B.bN(A.eL,null,x.H),$async$D9)
case 4:w=5
return B.b($.aW.gmE(),$async$D9)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.pW)){u=null
w=1
break}w=7
return B.b(r.m_(1080/r.gZ(0).a),$async$D9)
case 7:w=6
return B.b(e.hv(A.fZ),$async$D9)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaN(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D9,v)},
a9S(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9S=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRE(q))
t=4
w=7
return B.b(q.D9(),$async$a9S)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cT.gcA().aJ(p)
n=C.BA(null,null,null,null,D.od,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b58(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRF(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9S,v)},
Ar(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ar=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRC(q))
t=4
w=7
return B.b($.aW.gmE(),$async$Ar)
case 7:w=8
return B.b(B.bN(A.oK,null,x.H),$async$Ar)
case 8:w=9
return B.b($.aW.gmE(),$async$Ar)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.pW))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m_(1080/p.gZ(0).a),$async$Ar)
case 10:o=e
w=11
return B.b(o.hv(A.fZ),$async$Ar)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag6(J.eT(A.dD.gaN(n)),"ngmy_quote.png","image/png"),$async$Ar)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.J(x.q).f
k.U(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRD(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ar,v)},
chx(){var w=this.p4
w.toString
return B.cq(new C.eSb(this,w))},
aZb(d,e){var w=null
return B.bs(w,w,w,w,w,D.f5r,w,w,!0,new B.b4(4,B.m(16),P.uZ),w,w,w,w,w,D.to,!0,w,w,w,w,new B.b4(4,B.m(16),D.aYI),w,w,w,w,w,w,w,w,A1.Ds,e,w,w,w,w,w,w,w,D.faI,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xO(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQK,w,w,w))
return new B.D(H.agW,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZa(d,e){var w=null,v=B.m(18),u=B.I(A.bE,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jK),A.f,w,w,new B.o(D.to,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vA(d){return this.aZa(d,A.bB)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u8:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bE,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jh,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jh,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aC(r,B.df(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hx,r,r,r,A.Fk,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afJ(d,e,f){return this.oa(d,null,e,f)},
awV(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eB:A.bE,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hx,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aC(w,new B.a7(j,w,B.w(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZe(d,e,f,g,h,i){return this.awV(d,e,f,g,h,5,i)},
kj(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f2t,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aC(u,D.e99,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eSo(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPP,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Z6,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auO(w).cIN(A.b6,A.bE,A.b6.j(0.2),A.c,D.eMP,4)
return new B.D(A.xz,B.w(B.a([s,B.a9L(B.kY(u,u,u,g,f,new C.eSp(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahK(d,e,f,g,h,i){return this.kj(d,e,f,g,h,null,i)},
aia(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dm:B.b0(u)
r=d==u
q=r?A.c:A.b0
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bGY:o
n.push(B.aC(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eSr(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bW(A.bA,n,A.bq,10,10)},
bKv(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3c
else{v=x.a8
w=B.C(new B.a_(D.a3c,new C.eRu(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZb("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eRv(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a80,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZb("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eRw(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dp,!0,A.a4,n,A.an,n,n,n,n)
t=o.xO("DESIGNS",A.tW)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cP6[q]
r.push(new B.D(A.iZ,o.afJ(p,o.x===p,new C.eRx(o,p)),n))}return B.w(B.a([v,A.R,u,t,B.c9(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hK(n,new C.eRy(o,w),w.length,n,n,A.aO,new C.eRz(),!1),n),A.N,o.aZa(B.w(B.a([B.iF(A.b6,n,n,A.af,!0,new C.eRA(o),n,D.fmI,n,D.fj4,o.k3),B.iF(A.b6,n,n,A.af,!0,new C.eRB(o),n,n,n,D.fgj,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ahA)],s),A.F,n,A.e,A.j,0,A.p)},
cDc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAC()
if(a7.length===0)return a5.vA(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Ja,a6,a6,a6))
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
m=B.C(u,B.a3(u).k("co.E"))
A.d.fo(m)
l=m.length!==0&&A.d.d7(m,new C.eSS(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eSZ(a5)
j=new C.eT0()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Ja,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eB:A.bE
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aC(a6,B.p(a6,new B.y(e,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mz,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eST(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vA(B.bW(A.bA,o,A.rY,6,6))
i=B.a([a5.oa("All words",L.alP,!1,new C.eSU(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afJ("Sentence "+a3,!1,new C.eSV(a5,a7,v,a2)))
a2=a3}}i.push(a5.afJ("Clear picks",!1,new C.eSW(a5)))
i=B.bW(A.bA,i,A.bq,8,8)
g=a5.xO("SIZE OF THE PICKED WORDS",D.alh)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.die[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eSX(e,k)
f.push(a5.afJ(a0.b,l===a4,e))}return B.w(B.a([q,A.R,o,A.R,i,g,B.bW(A.bA,f,A.bq,8,8),A.R,a5.oa("Make every word normal",A.lp,!1,new C.eSY(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cyo(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bxZ,B.d(A.d.hn(D.awy,new C.eSB(q)).b,p,p,p,p,p,p,D.f3W,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eSC(q)),l=q.xO("HIGHLIGHT BEHIND THE WORDS",A.a00),k=q.p1?-1:q.k4
k=q.aia(k,new C.eSD(q),D.cZr)
w=q.p1
v=w?A.c:A.b0
n=B.a([n,A.R,m,l,B.bW(A.bA,B.a([k,B.aC(p,B.p(p,D.bJX,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eYK,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSG(q),p,p,p,p,p,p,!1,A.a7)],o),A.rY,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Ja,p,p,p)],o)
if(q.gaUQ()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahK("Colour",l,0,360,new C.eSH(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahK("Shade",k,0.15,0.9,new C.eSI(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kj("Strength",l,0.15,1,new C.eSJ(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vA(B.w(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xO("LOOK",A.yo))
m=B.a([q.oa("Bold",K.alf,q.fy,new C.eSK(q)),q.oa("Italic",K.alg,q.go,new C.eSL(q))],o)
for(u=0;u<3;++u){l={}
k=D.cQi[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u8:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bE,1,A.q,-1)
m.push(B.aC(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSM(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bW(A.bA,m,A.rY,8,8))
n.push(q.xO("COLOUR",A.nk))
n.push(q.aia(q.fx,new C.eSN(q),D.d9o))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Ja,p,p,p))
n.push(q.xO("SIZE AND PLACE",A.Gk))
m=q.fr
m=q.kj("Text size",m,0.5,1.6,new C.eSE(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vA(B.w(B.a([m,q.kj("Up / down",l,0.12,0.5,new C.eSF(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.w(n,A.F,p,A.e,A.j,0,A.p)},
chy(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bC.j(0.12)],x.O)
return B.aC(p,B.p(p,B.w(B.a([B.p(p,D.bPj,A.f,p,p,D.b0G,p,62,p,p,p,p,p,62),A.aB,D.fkh,A.am,D.foV],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.to,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.btQ,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZd(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.m(12),new B.a7(46,62,B.fO(o,A.A,120,p,A.ci,A.bU,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.w(B.a([D.fjP,A.N,B.bW(A.bA,B.a([q.oa("Change",A.kw,!1,q.gaZd()),q.oa("Remove",A.e6,!1,new C.eSf(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d5Q[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eSg(q,t)))}u=B.bW(A.bA,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c0f(o)
break A}if(1===r){s=q.c_e()
break A}if(2===r){s=q.bGl()
break A}if(3===r){s=q.bMF()
break A}s=q.bIs()
break A}return B.w(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.lp,!1,new C.eSh(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c0f(d){var w=this,v=x.p
return B.w(B.a([B.bW(A.bA,B.a([w.oa("Auto enhance",E.a_E,!1,new C.eS7(w)),w.oa("Make words easy to read",A.oU,!1,new C.eS8(w))],v),A.bq,8,8),A.aB,B.cq(new C.eS9(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c_e(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kj("Exposure",n,-1.5,1.5,new C.eRM(o),0,A.k.ab(n,1))
w=o.RG
w=o.kj("Brightness",w,-0.5,0.5,new C.eRN(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kj("Contrast",v,0.4,2,new C.eRO(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kj("Fade",u,0,1,new C.eRP(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kj("Spotlight",t,0,1,new C.eRQ(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kj("Darken",s,0,0.85,new C.eRR(o),0,""+A.k.V(s*100))
r=o.b8
r=o.kj("Vignette",r,0,0.9,new C.eRS(o),0,""+A.k.V(r*100))
q=o.aF
q=o.kj("Shade behind words",q,0,0.85,new C.eRT(o),0,""+A.k.V(q*100))
p=o.aM
return o.vA(B.w(B.a([n,w,v,u,t,s,r,q,o.kj("Shade top & bottom",p,0,0.85,new C.eRU(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bGl(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kj("Colour strength",q,0,2.2,new C.eR7(s),1,""+A.k.V(q*100))
w=s.to
w=s.kj("Warmth",w,-1,1,new C.eR8(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kj("Tint",v,-1,1,new C.eR9(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vA(B.w(B.a([q,w,v,s.kj("Shift colours",u,-180,180,new C.eRa(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bEV,s.y1,new C.eRb(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xO("COLOUR WASH",A.Nx)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.avg)
t=B.a([u,v,s.aia(w,new C.eRc(s),q),A.N],t)
if(s.b1!=null){q=s.aO
t.push(s.vA(s.ahK("Wash strength",q,0,0.9,new C.eRd(s),""+A.k.V(q*100))))}return B.w(t,A.F,r,A.e,A.j,0,A.p)},
bMF(){var w,v,u,t,s,r=this,q=r.y2
q=r.kj("Blur",q,0,24,new C.eRG(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.kj("Soft focus",w,0,1,new C.eRH(r),0,""+A.k.V(w*100))
v=r.au
u=x.p
v=r.vA(B.w(B.a([q,w,r.kj("Film grain",v,0,1,new C.eRI(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xO("LIGHT LEAK",I.alb)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.db(D.avg,0,B.dG(8,"count",s),s))
u=B.a([v,w,r.aia(q,new C.eRJ(r),t),A.N],u)
if(r.bb!=null){q=r.bz
u.push(r.vA(r.ahK("Leak strength",q,0,1,new C.eRK(r),""+A.k.V(q*100))))}return B.w(u,A.F,null,A.e,A.j,0,A.p)},
bIs(){var w,v,u,t,s=this,r=s.aS
r=s.kj("Zoom",r,1,3,new C.eRh(s),1,""+A.k.V(r*100)+"%")
w=s.bk
w=s.kj("Left / right",w,-1,1,new C.eRi(s),0,""+A.k.V(w*100))
v=s.bQ
v=s.kj("Up / down",v,-1,1,new C.eRj(s),0,""+A.k.V(v*100))
u=s.c3
t=x.p
return B.w(B.a([s.vA(B.w(B.a([r,w,v,s.kj("Turn",u,-180,180,new C.eRk(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bW(A.bA,B.a([s.oa("Turn 90\xb0",H.aml,!1,new C.eRl(s)),s.oa("Flip sideways",A.G6,s.cJ,new C.eRm(s)),s.oa("Flip upside down",A.G6,s.cP,new C.eRn(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c2W(){var w=null,v=B.m(22),u=B.I(A.bE,A.q,1)
return B.p(w,B.w(B.a([D.eN0,A.R,D.flK,A.aB,B.aC(w,B.p(A.A,D.eNd,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.u8,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSa(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.to,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c03(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eS2(p),m=x.p,l=B.B(B.a([D.by4,p.oa("Reset",A.lp,!1,new C.eRZ(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Ja,o,o,o),j=p.xO("SHAPE",A.amh),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.C5[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZe(n.$2(t,p.cy),62,u.b,s===t,new C.eS_(v,p),62))}}i=B.bW(A.bA,i,A.bq,8,8)
v=p.xO("RING",A.rb)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.C_[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZe(n.$2(p.cx,t),62,r.b,q===t,new C.eS0(s,p),62))}u=B.bW(A.bA,u,A.bq,8,8)
s=p.CW
return B.w(B.a([l,A.at,k,j,i,v,u,A.ac,p.vA(p.kj("Size",s,0.12,0.4,new C.eS1(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b19(d){return new B.a7(null,d,new B.fI(0.5625,B.cq(new C.eSl(this)),null),null)},
cxF(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bE,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u8:q
t=new B.aT(14,14)
s=D.d7T[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bg,B.aC(A.c7,B.df(q,B.w(B.a([r,A.cS,new B.ql(A.ei,A.A,A.f,new B.y(s.b,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bpz,q,q,q,A.hN,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eSu(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.brD,A.lS,q,q,q)},
aPB(){var w,v,u=this,t=null,s=u.cxF(),r=u.as
A:{if(0===r){w=u.bKv()
break A}if(1===r){w=u.cDc()
break A}if(2===r){w=u.cyo()
break A}if(3===r){w=u.chy()
break A}if(4===r){w=u.c03()
break A}w=u.c2W()
break A}v=x.p
return B.bw(A.t3,B.el(B.w(B.a([s,B.E(B.cw(B.a([w],v),t,D.bsG,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.WS,!0),A.aq)},
aLQ(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc8_(),p=B.m(16)
q=B.E(B.aC(r,B.p(r,D.eNo,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b0,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbMf()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bC.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eSs)
else t.push(D.bJ1)
t.push(A.ab)
t.push(D.bzR)
return B.p(r,B.B(B.a([q,A.au,B.E(B.aC(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u8,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b_N,r,r,r,r,G.aho,r,r,r)},
aZc(){var w=null
return new B.D(T.Z2,B.B(B.a([B.aH(w,w,w,w,A.mC,w,w,w,new C.eRL(this),w,w,w,w,w,w),D.fB5,A.b7,D.bRC],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.AO,B.bm(!0,B.cq(new C.eT1(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beW.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eJ()
m.dw(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.N()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c_(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rs.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m5.prototype={}
C.zr.prototype={
ag(){var w=this
return B.F(["at",w.a.a7().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nJ.prototype={}
C.vW.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7M.prototype={}
C.aqM.prototype={}
C.a09.prototype={
T(){return new C.aGW(new B.as(A.as,$.aw()),B.jP(!0,null,!0,!0,null,null,!1),D.dyv,B.a([],x.s),B.eu([D.HY],x.Q))}}
C.aGW.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hZ().C3(90,700,700,A.eJ),$async$a_Y)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a_Y)
case 8:p=e
if(r.c!=null)r.m(new C.eZf(r,p,q))
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
return B.i($async$a_Y,v)},
a00(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a00=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hZ().aH_(78,n,1100,1100),$async$a00)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fl(),$async$a00)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.ca(l,".png"))k="image/png"
else k=A.a.ca(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cT.gcA().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eZg(r,p))
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
return B.i($async$a00,v)},
b3e(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fO(A.cI.aJ(A.d.gal(d.split(","))),A.A,u,u,A.ci,A.bU,!0,u,!1,u,u)
return w}catch(v){}return D.bnJ},
c09(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cqg(C.fB3(w,this.b3e(d),f),g)},
aca(d,e,f,g,h){var w=null,v=new C.eZd(f,e),u=new C.eZe(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bE:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BI:A.Nn,A.c0,w,w,w,26),w,w,w),D.eeS],x.p),w),w)
else p=this.c09(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bIJ],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mt,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZc(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aWA(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fO(A.cI.aJ(A.d.gal(h.split(","))),A.A,p,p,A.ci,A.bU,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bE:A.bi.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TU,p,p,p),1)],x.p)
if(f!=null)n.push(B.aC(p,D.a0U,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8k(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8k=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fEu(),$async$a8k)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eYW(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eYX(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8k,v)},
ae2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ae2=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eYZ(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eZ_(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eZ0(r))
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
return B.b(C.fzM(q,r.cx,j,new C.b0F(r.z,r.Q,r.as,r.at),new C.eZ1(r),i,m,p,k),$async$ae2)
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
n=B.aa(e)
if(r.c!=null)r.m(new C.eZ2(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eG,g).w
g=B.aI(d,A.bW,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b0,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aC(h,B.p(h,D.bLW,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bi.j(0.5),A.J,24)],v),D.bVC,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZt(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0U,h,h,h,i.ax?h:new C.eZu(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbBk()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.ht(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vG:A.hn,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vX,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aYf),h,h,h,h,h,h,h,h,A0.J_,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iZ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aQa,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eZv(i)
s=i.aWA(A.lr,q,r,i.gchZ(),s)
r=i.z
r=B.E(i.aca(new C.eZx(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.w(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.aca(new C.eZy(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eZz(i)
s=i.aWA(A.vD,r,p,i.gci6(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.aca(new C.eZA(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fq9,A.at,D.ft_,A.by,u,A.N,D.frq,A.aB,v,A.by,B.B(B.a([q,A.au,B.E(B.w(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.aca(new C.eZB(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fuJ],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bg0,A.q,1)
w=C.agE(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bN0,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f9r,h,h,h),B.aL(!1,h,!0,D.e9p,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eZC(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.b9d,h,u,v,h,h,A.n),h,h,h,h,D.brk,h,h,h),h)],t))}o.push(A.by)
o.push(D.fh0)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d0y[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bE,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bB(1,A.bg,new B.D(A.jn,B.aC(h,B.df(A.A,new B.y(""+l,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZD(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fzk)
o.push(A.N)
o.push(B.cq(new C.eZE(i)))
o.push(A.by)
o.push(D.fog)
o.push(A.N)
w=B.a([i.b62("auto","Let AI choose",A.dX,A.Q6)],t)
for(v=x.O,m=0;m<11;++m){j=D.w1[m]
u=j.d
w.push(i.b62(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bW(A.bA,w,A.bq,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bi.j(0.5):A.bE,A.q,1)
o.push(B.p(h,B.iF(h,A.bi,h,h,h,new C.eZw(i),D.bIa,D.fyz,h,D.fji,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aPp,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc83()
v=B.fn(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eSi:A.Gx
o.push(new B.a7(h,54,B.lu(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pe,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.c9(B.w(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vv,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aaW,h,h,h,h,h,h,h,h),h)},
bNM(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eZ3(this,p,d)
if(d===D.CK)return new C.aDt(p,o,q)
w=B.m(16)
v=p?E.vX:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bE,A.q,1)
s=B.X(p?A.eg:C.hGq(d),A.c,q,q,q,20)
r=C.hGr(d)
return B.aC(q,B.df(q,B.w(B.a([s,A.at,B.f6(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.ei)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hx,q,64,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b62(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bE
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aC(v,B.df(v,B.B(B.a([w,M.IR,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,M.aiH,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZi(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a08.prototype={
T(){return new C.aGV(new B.as(A.as,$.aw()))}}
C.aGV.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
ae3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ae3=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eYP(r))
w=1
break}B.eU()
r.m(new C.eYQ(r))
t=4
q=C.i6I(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i6s(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eYR(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fZA()
f=$.Cy.h(0,k.a)
o=f==null||J.cn(f)?null:J.fp(f)
if(o==null){r.m(new C.eYS(r))
w=1
break}n=C.i6q(o,r.a.c)
C.i6m(r.a.c.a)
$.fYR=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h1n(j)
h=C.h1o(r.a.c)
e=C.h1p(r.a.c)
w=7
return B.b(C.bBz(k,r.a.c.a,j,h,new C.eYT(r),i,e,a0),$async$ae3)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eYU(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eG,i).w
i=B.aI(d,A.bW,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b0,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.amB,A.f,j,j,D.b_s,j,34,j,j,j,j,j,34),A.au,D.byG],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7I,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.aaq),j,j,j,j,j,j,j,j,A0.J_,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aQa,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cXT[q]
o=A.c.j(0.06)
n=k.e?j:new C.eYV(k,p)
r.push(B.mI(j,o,new B.y(p,j,Ay.Tt,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uZ,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bW(A.bA,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aPp,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gc84()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bi.j(0.5),A.eA.j(0.5)],x.O):D.cvY
o=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e9l:D.bMA
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eF(B.B(B.a([n,A.au,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hF,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.c9(B.w(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vv,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aaW,j,j,j,j,j,j,j,j),j)}}
C.b0F.prototype={}
C.aDt.prototype={
T(){return new C.bjB(null,null)}}
C.bjB.prototype={
gawW(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pR,null,1,null,v)
w.cI(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawW().q()
this.bvd()},
B(d){var w=null,v=this.a.d
return B.aC(w,B.c6(this.gawW(),new C.eep(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bh8.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d2H[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xo.j(0.25+r*0.6).gp(0)
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
av(d){return d.b!==this.b}}
C.arl.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zv.prototype={
T(){return new C.aAW()}}
C.aAW.prototype={
gai7(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agR(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAb(){var w=this.e
return w===$?this.e=C.h1n(this.a.c).t(0,D.CK):w},
a87(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a87=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dir(s))
u=3
r=A.d.hn(D.w1,new C.dis(s))
q=B.dd(C.h1n(s.a.c),x.Q)
l=q
J.hv(l,D.CK)
p=l
if(s.gAb())J.ci(p,D.CK)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAb()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h1o(i.c)
g=C.h1p(s.a.c)
w=6
return B.b(C.bBz(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a87)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agR(q,s.gai7())
f=q==null?null:q.b
n=f==null?s.gai7():f
if(!J.A(n,r.a)&&!s.gAb())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dit(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a87,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bE:A.aL,A.q,1),g=x.p,f=B.E(B.w(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bD,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.diw(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.w1[w]
u=o.gai7()
t=o.f?n:new C.dix(o,v)
f.push(new C.bs2(v,u===v.a,t,n))}f=B.m0(1.25,f,3,10,10,n,A.dS,!0)
u=B.m(18)
t=o.gAb()?D.bYn:n
if(o.gAb())s=n
else s=m?A.bo:A.bK
r=B.X(A.dX,o.gAb()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAb()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.w(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAb()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAb()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.au,q,B.aaf(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.diy(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ahr,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.f9L,n,n,n)],g))
f=B.c9(B.w(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fs,n,n,A.ag)
u=o.f?n:o.gbAj()
t=B.bn(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.w(B.a([new B.D(D.bui,e,n),new B.dq(1,A.co,f,n),new B.D(A.Fr,new B.a7(1/0,50,B.bG(B.eF(B.av(o.f?A.rO:D.fqD,n,n,n),n,new B.o(n,n,n,s,n,D.bWW,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tI,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bs2.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.ld,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lC,w,w,B.d(v.b,w,w,w,w,w,w,D.f9J,w,w,w),w)],x.p)
if(q)v.push(D.aWj)
return B.aC(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eH,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.eem.prototype={
aEz(d,e,f){return e+"@"+A.a.aU(A.o.fU(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wu(d,e){return this.aEz(0,e,null)}}
C.aLu.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.b0B.prototype={
B(d){var w,v,u=null,t=C.h0c(this.c)
if(t==null)w=D.bmg
else{w=B.aI(d,u,x.w).w.cIe(D.bqR,D.eRw)
v=this.d
w=B.td(B.dZ(B.anH(!1,t,!1,v,!1,390),!v,u),w)}return B.f6(A.A,new B.a7(416,870,new C.ble(w,u),u),A.f,A.du)}}
C.ble.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dej[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aov,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dfw[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aov,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.m(64),D.cNQ,D.bVk,A.n),A.be),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.be),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aWv,B.p(t,t,A.f,t,t,D.b_L,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.dZ(B.bw(B.m(51),D.bnP,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.dZ(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.la.prototype={
px(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.eq(A.L,!1,e.l(),A.aD,"",k,42,A.bn,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mJ,D.cQ,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.eq(A.L,!1,v.l(),A.aD,"",k,20,A.bn,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.rt(i,l,0,0,B.a([f,w,C.eq(A.bh,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bn,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cm,D.f2,0.3,0.35,0.72)],s),C.cB(),D.mI,"","","Welcome",D.dd)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,34,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cB()
w=C.rt(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uo,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mI,"","","Agenda",D.dd)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,32,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cB()
f=C.rt(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,21,A.bn,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mI,"","","Key Point 1",D.dd)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,30,A.bn,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cB()
r=C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cB()
q=C.rt(i,l,0,0,B.a([u,r,C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cB(),D.mI,"","","Key Point 2",D.dd)
r=C.cB()
r=C.eq(A.L,!1,e.l(),A.aD,"",k,48,A.bn,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cB()
p=C.BA(l,l,l,l,D.CG,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rt(i,l,0,0,B.a([r,C.eq(A.L,!1,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cB(),D.mI,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Ey.prototype={
bB(d){return this.e.$1(d)}}
C.ev.prototype={}
C.iZ.prototype={}
C.Ep.prototype={
gaKo(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agE(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3k(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ep(v,u,t,d==null?w.d:d)},
FA(d){return this.a3k(null,d,null,null)},
aDk(d){return this.a3k(null,null,null,d)},
cIc(d,e){return this.a3k(d,e,null,null)},
bbb(d){return this.a3k(d,null,null,null)},
bbi(d){return this.a3k(null,null,d,null)}}
C.Ni.prototype={
T(){return new C.biY(new B.eM(0,$.aw()),null,null)}}
C.biY.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(new C.dTQ(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iX(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.aw()
w.P$=0
this.buG()},
B(d){var w=C.agE(this.a.c.a)
if(w==null)w=A.d.gI(D.GS)
return B.cq(new C.dTP(this,w,C.hgk(this.a.c.d)))}}
C.bqC.prototype={
B(d){return B.nO(A.Ve,this.e,new C.eY2(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.be1.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSg(d,e,v)
break
case"confetti":w.bGR(d,e,v)
break
case"crown":w.bIt(d,e,v)
break
case"aurora":w.bBo(d,e,v)
break
case"champagne":w.bEG(d,e,v)
break
case"diamonds":w.bKE(d,e,v)
break
case"starburst":w.cvm(d,e,v)
break
case"balloons":w.bBC(d,e,v)
break
case"galaxy":w.bPz(d,e,v)
break
case"redcarpet":w.cmi(d,e,v)
break
case"coins":w.bGd(d,e,v)
break
case"lanterns":w.bZL(d,e,v)
break
case"hearts":w.bXo(d,e,v)
break
case"petals":w.chq(d,e,v)
break
case"butterflies":w.bDG(d,e,v)
break
case"neon":w.c2G(d,e,v)
break
case"disco":w.bKP(d,e,v)
break
case"sunrise":w.cwW(d,e,v)
break
case"pearls":w.cgu(d,e,v)
break
case"snow":w.cv1(d,e,v)
break
case"laurel":w.bZR(d,e,v)
break
case"ribbons":w.coR(d,e,v)
break
case"kente":w.bZz(d,e,v)
break
case"trophy":w.cAB(d,e,v)
break
case"shooting":w.csQ(d,e,v)
break
case"bokeh":w.bBX(d,e,v)
break
case"orbits":w.ce7(d,e,v)
break
case"flowers":w.bOP(d,e,v)
break
case"music":w.c2o(d,e,v)
break
case"mandala":w.c0Q(d,e,v)
break
case"sparklers":w.cva(d,e,v)
break
case"city":w.bFv(d,e,v)
break}},
rA(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nF
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cV(w,t,w+f,t))
u.F(new B.cV(w,t,w,t+f))
u.F(new B.cV(w,t,w-f,t))
u.F(new B.cV(w,t,w,s))
u.F(new B.bE())
d.aQ(u,v)
d.af(e,f*0.18,v)},
lL(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cX(q,v)*2.5)+C.cX(q,u)*6.28)+1)/2
this.rA(d,new B.u(C.cX(q,t)*o,C.cX(q,s)*n),m*(0.006+0.014*C.cX(q,r))*(0.5+p),h,p*p)}},
aSg(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lL(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.ix,A.bC],w),B.a([A.ev,A.aP],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bn(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cX(h,1))
f=g+c0*(C.cX(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cX(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lg(new B.u(g,c1),new B.u(f,e),A.ct.az(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rv(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bS
a2=B.lg(new B.u(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.az(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cX(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hz(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cX(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cX(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bS
b9.a=A.nF
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cX(h,b1+120)>0.5)this.rA(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bGR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d92,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cX(u,1)))+C.cX(u,2)*w,w)
s=C.cX(u,3)
r=Math.sin(a3*(0.8+C.cX(u,4))+u)
q=h*(0.012+0.012*C.cX(u,5))
p=Math.cos(a3*(2+3*C.cX(u,6))+u)
o=D.Py[A.o.D(A.k.bn(C.cX(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cX(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bB(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cC(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cg(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lL(a1,a2,a3,25,A.bL,30)},
bIt(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bb3],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cC(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ao,a4,a4,B.a([],r))
v=a6+j
i.F(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.F(new B.ap(a5,s))
o=a6+j*0.6
i.F(new B.ap(a5+k*0.22,o))
i.F(new B.ap(a5+k*0.5,a6))
i.F(new B.ap(a5+k*0.78,o))
o=a5+k
i.F(new B.ap(o,s))
i.F(new B.ap(o,v))
i.F(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.saq(new B.a8(A.b_,A.b4,A.x,D.d7O,a4,a4).aw(0,new B.a9(a5,a6,o,v)))
a8.aQ(i,n)
for(v=[D.eov,D.ei9,D.exH],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.hY.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x3(i),u=B.a([],x.X),o=new B.vy(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jV(y.M));--f
o.ju()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cA([new B.Hh(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fE
f.r=A.bL.gp(0)
l=f.H()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cC(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rA(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lL(a8,a9,b0,45,A.bL,40)},
bBo(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lL(a8,a9,b0,60,A.c,50)
w=[D.eIJ,D.eIr,D.eIl,D.eJH]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aO(n.r,A.ao,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bB(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bB(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nF
n.z=new B.hz(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nF
n.z=new B.hz(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cX(a4,1))+C.cX(a4,2)*a3,a3)
r=C.cX(a4,3)
q=Math.sin(b0+a4)
p=C.cX(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vg.j(0.4+0.5*C.cX(a4,5)).gp(0)
n.a=A.nF
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bEG(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hJ.j(0.25+0.1*h),D.X1],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
a1.af(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ao,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bB(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Py[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cC(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cX(w,1)))+C.cX(w,2)*o,o)
r=k*(0.1+0.8*C.cX(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cX(w,4))
if(n<f){this.rA(a1,new B.u(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xb.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bKE(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lL(a9,b0,b1,30,A.lf,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cX(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cX(p,2))+C.cX(p,3)*n,n)-o*2
l=C.cX(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aO(h.r,A.ao,a5,a5,g)
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
g.push(new B.bE())
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d3H,a5,a5).aw(0,B.cg(A.J,k*1.2,o)))
a2=g.H()
g=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cC(g)).a,a2)
a2.delete()
a3=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
if(a4>0.85)this.rA(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cvm(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ao,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cC(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bn(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cX(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bnc.az(0,k)*(0.5+0.5*C.cX(t,v)))
this.rA(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cX(t,3)),D.Py[A.o.D(A.k.bn(C.cX(t,4)*5),0,4)],u)}},
bBC(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cX(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cX(o,2))+C.cX(o,3)*m,m)
j=C.cX(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.avF[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bB(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cC(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cg(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aWy,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.avw,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cC(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cX(o,11))+C.cX(o,12)*m,m)
r=C.cX(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cg(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.avF[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bPz(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lL(b1,b2,b3,50,A.c,70)
for(w=[D.eIR,D.eIx,D.eID],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aw(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cX(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cX(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bL,A.eB,g)
k.toString
d=C.cX(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cX(i,4)).gp(0)
a0.a=A.nF
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.xb.j(0.55),D.af2],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bn(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cX(a2,9)),a6*0.1*C.cX(a2,8))
a5=B.lg(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lg(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rv(a3,a5)))
a8.c=a7*0.005
a8.d=A.bS
b1.bF(a6,a5,a8)}},
cmi(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ao,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.xb.j(0.28),D.af2],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nF
l=o.H()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cC(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eq:A.eQ)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cV(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).aw(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cC(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hJ.gp(0)
b1.c=o
b1.d=A.bS
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bE())
v=B.N()
v.saq(D.bWQ.aw(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aQ(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cX(r,1))+C.cX(r,2)*b3,b3)
u=C.cX(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rA(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cX(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bGd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cX(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cX(t,2))+C.cX(t,3)*r,r)-q
o=C.cX(t,4)*i
n=Math.cos(f*(2+3*C.cX(t,5))+t)
m=Math.abs(n)
l=B.cg(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.diL:D.cBF,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bk5.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rA(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lL(d,e,f,30,A.bL,110)},
bZL(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lL(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cX(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cX(p,2))+C.cX(p,3)*n,n)
l=C.cX(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.Xe.j(0.45*k),D.adT],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ao,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bE())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.bbd,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b4,A.x,B.a([D.bfD,i],u),d,d).aw(0,B.cg(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cC(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bXo(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cX(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cX(p,2))+C.cX(p,3)*n,n)
l=C.cX(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ao,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pC(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pC(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cVQ[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.t0,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a22,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cC(m)).a,e)
e.delete()
v.restore()}this.lL(a3,a4,a5,30,A.ix,130)},
chq(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cX(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cX(q,2))+C.cX(q,3)*o,o)
m=C.cX(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cX(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cV(p,l,0,p))
m.push(new B.cV(n,l,0,n))
m.push(new B.bE())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cvX:D.d4X
n.saq(new B.a8(A.a3,A.a8,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cC(n)).a,j)
j.delete()
v.restore()}this.lL(d,e,a0,25,A.bL,140)},
bDG(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lL(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cX(r,1))
p=Math.sin(b2*(0.15+0.1*C.cX(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cX(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pC(f,e,l,d,h,0))
a3.push(new B.pC(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a8,A.x,i?D.d4G:D.d7i,a6,a6).aw(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cC(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AI.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cC(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bjo.gp(0)
p.c=q*0.1
p.d=A.bS
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c2G(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awK[t].j((1-s)*0.9).gp(0)
q.z=new B.hz(A.G,v)
p=r*0.3
p=B.bx(B.cg(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.es(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cX(m,1)*4)+m)))
k=D.awK[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hz(A.aae,p)
o=j.H()
u.drawRRect(B.es(i),o)
o.delete()}},
bKP(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cX(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cX(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nK,A.dv][A.o.E(p,4)]
j=C.cX(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nF
i.z=new B.hz(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bF(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dy.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.k1(B.bU(v,u)))
a3.qv(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bl,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rA(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cwW(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.az(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.H()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cC(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b7f.j(0.6),D.adT],x.O),h,h).aw(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.efI.aw(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cX(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cg(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.cg(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lL(a2,a3,a4,20,A.hY,180)},
cgu(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bB(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bB(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bB(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cB,A.ja,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cC(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cX(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cX(i,2))+C.cX(i,3)*j,j)
n=C.cX(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pp,0.5,A.x,f,0,D.daE,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lL(a1,a2,a3,25,A.c,190)},
cv1(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cX(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cX(r,2))+C.cX(r,3)*p,p)
n=C.cX(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cX(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bS
J.by(v.save())
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
h.delete()}v.restore()}this.lL(d,a0,a1,40,A.ev,200)},
bZR(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dA(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cg(new B.u(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bWD.aw(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bbt.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rA(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lL(a3,a4,a5,40,A.bL,210)},
coR(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hJ,A.hY],a6),B.a([A.oE,A.ix],a6),B.a([A.aE,A.eB],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bQ<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ao,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bB(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bB(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bQ(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bB(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bB(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.awm,new B.mn(w)).aw(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cC(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lL(a8,a9,b0,40,A.c,220)},
bZz(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bn(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a25[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a25[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cX(a0,1))+C.cX(a0,2)*a6,a6)
v=C.cX(a0,3)
t=C.cX(a0,4)
this.rA(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a25[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cAB(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bL.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cV(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cV(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cg(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a8(A.a3,A.a8,A.x,D.dd2,A.avM,null).aw(0,new B.a9(v,a2,r,j)))
a4.aQ(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rA(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGS(a4,a5,a6,60)},
bGS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cX(p,31))+C.cX(p,32)*v,v)
n=C.cX(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cg(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Py[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
csQ(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lL(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cX(o,1)*1.6
m=A.k.E(a2+C.cX(o,2)*n,n)/n
l=e*(C.cX(o*7+A.k.bn((a2+C.cX(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aw(0,B.rv(new B.u(l,h),i)))
g.c=r
g.d=A.bS
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rA(a0,i,p,A.c,1-m)}},
bBX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cX(r,1))
p=A.k.E(C.cX(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cX(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ayg[l].j(n).gp(0)
m.a=A.nF
m.z=new B.hz(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ayg[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ce7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cg(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c_(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hY.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hJ.j(0.4).gp(0)
k.z=new B.hz(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lL(d,e,f,45,A.bL,270)},
bOP(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cX(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.E(a7+C.cX(o,2)*4,4)/4
j=A.ew.az(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cX(o,3))*(j*i)
if(h<=0.5)continue
g=D.d1T[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cg(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b4,A.x,B.a([A.c,g],u),null,null).aw(0,B.cg(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hJ.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lL(a5,a6,a7,30,A.hY,280)},
c2o(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.auS[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cX(g,1))+C.cX(g,2)*h,h)
e=C.cX(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cX(g,4))
a0=D.auS[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cg(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c_(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c0Q(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.by(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cV(h,m,0,g))
a0.push(new B.cV(j,m,0,i))
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bL,A.nK,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cC(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hY.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hJ.j(0.25),D.X1],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lL(a7,a8,a9,30,A.bL,300)},
cva(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bS
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hY,A.hJ.j(0.6),D.X1],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cX(f,1)
d=A.k.E(b2+C.cX(f,2)*e,e)/e
a0=A.k.bn((b2+C.cX(f,2)*e)/e)
a1=C.cX(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cX(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hY,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bS
a6.a=A.nF
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
g.delete()}}}this.lL(b0,b1,b2,35,A.bL,310)},
bFv(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSg(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cX(n,1))
l=a8*(0.14+0.24*C.cX(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bXy.aw(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bn(m/q)
f=A.k.bn(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cX(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aZv.prototype={
B(d){var w,v=null,u=new C.c8d(),t=new C.c8f(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.anE,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8e(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GS[w]))
return B.bW(A.bA,s,A.bq,12,10)}}
C.Z3.prototype={
T(){return new C.azj()}}
C.azj.prototype={
gvB(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZh(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aN),$.aw())}return v},
gawX(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKo()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aN),v)}return t},
q(){var w=this.gaZh(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gawX()
w.S$=v
w.P$=0
this.a2()},
ZO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hZ().C3(90,700,700,A.eJ),$async$ZO)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$ZO)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahA(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7E(r,n,p))
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
return B.i($async$ZO,v)},
aZg(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aQf,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agE(p.gvB().a)
if(n==null)n=A.d.gI(D.GS)
w=p.gvB()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Ni(p.gvB(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HB(A.mC,new C.d7J(d),B.nz(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HB(D.bH4,new C.d7K(p),B.nz(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aQ9,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaZh(0),o,o,o,o,o,2,p.aZg("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7L(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hs,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hJ.j(0.6),A.q,1)
if(p.gvB().d.length===0)q=D.bKq
else{q=C.hgk(p.gvB().d)
if(q==null)q=new Uint8Array(0)
q=B.hV(B.fO(q,A.A,o,o,A.ci,A.bU,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aC(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc85(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvB().d.length!==0)r.push(B.aH(o,o,o,o,D.a0U,o,o,o,new C.d7M(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bm(!0,B.w(B.a([v,B.p(o,B.w(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawX(),o,o,o,o,o,2,p.aZg("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7N(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dp,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bJj,D.fAf,new C.d7O(p,d),B.bn(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.P,0,A.p),A.f,o,o,D.b_X,o,o,o,o,A.Fo,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKY.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.Zo.prototype={
T(){return new C.bfv(new B.as(A.as,$.aw()))}}
C.bfv.prototype={
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bE:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.deq(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cNg[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bK
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.ph,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.der(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hN,new B.y(v.a.toUpperCase(),o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ca(A.bA,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aR9,new C.des(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.w(B.a([f,new B.dq(1,A.co,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.P,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tI,A.YK,o,o,o),!0,!1,A.af,!0,!0)}}
C.beT.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eJ()
a2.dw(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.R9
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aA(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
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
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
av(d){return d.b!==this.b}}
C.beA.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kd),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lv
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iK(a1))
v=new B.Sm(new B.vy(B.x3(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ju()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.E(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bS
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cA([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cA([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cA([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}}a4.ju()
e=u[a3].ME(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mH
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bnu.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eJ()
e.dw(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gam8()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ao,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUB(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jt
g=j.H()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cC(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.b9u.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eJ()
a0.dw(this.c*7+3)
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
f=e}$.W()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hz(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.b97.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eJ()
a0.dw(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bB(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bS
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hz(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cC(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.buo.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cUB,null).aw(0,u))
d.aZ(u,w)
w=u.cv(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jt
d.aZ(w,v)},
av(d){return d.b!==this.b}}
C.brp.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bn(d)*7,p=0;p<7;++p){o=new B.eJ()
o.dw(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bS
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hz(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.bqy.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nF
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aZ(w,v)},
av(d){return d.b!==this.b}}
C.bdV.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdE(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bS
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.ru
r=new C.d7l(this,r*0.16,d,u,w)
t=e.gdE()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
av(d){return d.b!==this.b}}
C.xu.prototype={}
C.IB.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqL.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uE.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mw.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hC.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eL.prototype={
hG(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eq(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdN(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hUp(v.z))
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
C.lE.prototype={
hG(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("M<1,eL>")
n=B.C(new B.M(n,new C.cdE(),m),m.k("ak.E"))
return C.rt(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("M<1,a5<n,@>>")
n=B.C(new B.M(n,new C.cdF(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i1.prototype={
gb9v(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gS5(){if(!C.ku(this.w))return!1
var w=this.gb9v()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cY(w.bT())},
hG(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("M<1,lE>")
r=B.C(new B.M(r,new C.cdt(),q),q.k("ak.E"))
return C.BA(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ac())
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
v=B.U(w).k("M<1,a5<n,@>>")
w=B.C(new B.M(w,new C.cdu(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jE.prototype={}
C.b0E.prototype={
B(d){return B.cq(new C.cdz(this))}}
C.anX.prototype={
T(){return new C.biI(null,null)}}
C.biI.prototype={
gaZi(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fV,null,1,null,v)
w.cI(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZi().q()
this.buq()},
B(d){return B.c6(this.gaZi(),new C.dG4(),this.a.c)}}
C.aKJ.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.ad7.prototype={
PH(d,e,f,g){return this.bOv(d,e,f,g)},
bOv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PH=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PH)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.J(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PH,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b0,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dj,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adp(A.hA,"Download",A.c_,new C.eqP(w,d),!0,v),1),A.au,B.E(new C.adp(A.vI,"Share",A.bk,new C.eqQ(w,d),!1,v),1),A.au,B.E(new C.adp(A.ho,"Safari",A.aZ,new C.eqR(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eqS(d),v,v))
return B.bm(!0,new B.D(A.pU,B.w(B.a([B.p(v,B.w(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iU,v,t,u,s,v,A.n),v,v,v,v,A.Fv,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adp.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eF(B.w(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bwF,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b0C.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apX(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c86().akk(1.35)
s=B.avd(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzU(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bk,h,h,h,h,2,D.bSq,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wm,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zy,A.an,h,A.Tk,h,h)
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
w=n?t.cI_(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eE:A.Dg
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Tb:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fE
j.r=A.az.gp(0)
j=i.coU(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.coS(k,t,l?A.Tb:s)],x.p),h)}else w=i.coT(p,t,g.k2?A.Tb:s,m)
v=new B.nf(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aC(A.c7,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bY3()
case 3:return i.cgt()
case 2:return B.b3(h,h,h,new C.b0z(g,h),A.f3)
case 5:g=g.r
return new C.b0B(g,!i.e&&i.z==null,h)}},
c86(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k3
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adR,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bN
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mO
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bC,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cR(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cR(A.b8,new B.u(-3*v,0),0),new B.cR(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.KG
break
case"ice":v=o.d
e=B.a([new B.cR(A.aP,A.J,10*v),new B.cR(A.cB,A.J,22*v)],x.r)
k=A.O
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k3
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cWA[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bV1.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Kv,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bVm.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
w=l
k=A.a5
break
case"lowercase":h=2*o.d
w=l
k=A.cw
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cR(l.j(0.45),new B.u(u,u),0),new B.cR(l.j(0.2),new B.u(v,v),0)],x.r)
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
ayU(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eOT.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdx(h)
v=r.k2?C.i61(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eE:A.Dg
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XA(B.d3(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
coU(d,e,f,g){return this.ayU(d,e,f,!1,g)},
coS(d,e,f){return this.ayU(d,e,f,!1,null)},
coT(d,e,f,g){return this.ayU(d,e,f,g,null)},
bzU(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bY3(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.X(s.b===D.l5?A.Gs:A.Bu,A.aA,t,t,t,32),t,t,t)}w=u.bCU(r)
if(s.b===D.l5){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNx(r,!0)
return C.fB3(s.go,v,s.id)}return w},
aNx(d,e){var w,v,u,t
try{w=C.i6k(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.ca(u,"_bg")
u=B.cq(new C.cdw(this,w,v,e))
return u}catch(t){return D.abB}},
bCU(d){return this.aNx(d,!1)},
cgt(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b5e
return C.i6C(v,w.db,w.dx)}}
C.b0z.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aZ(s,g)
d.aZ(s,w)
break
case 1:d.hS(s,g)
d.hS(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 3:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
h=t*0.45
r.F(new B.b5(0,h))
f=u*0.65
r.F(new B.ap(f,h))
r.F(new B.ap(f,t*0.2))
r.F(new B.ap(u,t*0.5))
r.F(new B.ap(f,t*0.8))
t*=0.55
r.F(new B.ap(f,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 4:h=t/2
w.c=v+2
d.bF(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ao,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bB(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bB(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aQ(r,g)
d.aQ(r,w)
break}},
av(d){return d.b!==this.b}}
C.aIk.prototype={
T(){return new C.btV(null,null)}}
C.btV.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ih,null,1,null,v)
w.cI(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwJ()},
aNI(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dj,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.be)},
bA7(){var w,v=this,u=null,t=v.aNI("Slide A",A.bk),s=v.aNI("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b1,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f5y(v,s,t),u)},
B(d){return this.bA7()}}
C.aIX.prototype={
j7(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jO(d){return d.b!==this.b}}
C.UL.prototype={
T(){return new C.biV(null,null)}}
C.biV.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AW,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dS2(u),x.a)},
bu(d){var w,v,u,t=this
t.bG(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dS1(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.buF()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dS0(this),v.d)}}
C.IA.prototype={
B(d){return B.cq(new C.cdp(this))}}
C.az3.prototype={
T(){return new C.bdo()}}
C.bdo.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LV,new C.d4A(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UL(C.eq(A.bh,!1,4279310375,A.aD,"",4294538006,24,A.bn,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f2,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cg,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eq(A.bh,!1,4294967295,A.aD,"",4280640491,22,A.bn,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UL(t,B.p(p,D.flV,A.f,p,p,new B.o(s,p,B.I(A.b0,A.q,1),r,p,p,A.n),p,p,p,p,A.jm,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b0w,A.be)}}
C.a7u.prototype={
T(){return new C.bjz(null,null)}}
C.bjz.prototype={
gaZQ(){var w=this.a
if(w.e)w=D.eP1.t(0,w.c)||D.aNm.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZQ()){w=C.i4H(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cI(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bvb()},
B(d){var w,v=this,u=v.d
if(!v.gaZQ()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ee5(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZy.prototype={
B(d){var w=null
return B.av(C.b0D(!0,w,!1,C.eq(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bn,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bey.prototype={
j7(d){return C.a29(this.b,new B.a9(0,0,0+d.a,0+d.b).cv(-this.c))},
jO(d){return d.b!==this.b||d.c!==this.c}}
C.bpv.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cv(-this.d),g=this.b,f=C.a29(g,h),e=a1.gdE(),d=new C.eVG()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOS.aw(0,h))
a0.aQ(f,w)
g=C.a29(g,h.cv(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bjS.gp(0)
a0.aQ(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eYH.aw(0,h))
a0.aQ(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hz(A.G,e*0.04)
a0.aQ(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aQ(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eYF.aw(0,h))
a0.aQ(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aQ(f,w)
g=C.a29(g,h.cv(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aQ(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hz(A.G,e*0.035)
a0.aQ(f,g)
g=d.$1(e*0.016)
g.r=A.oF.gp(0)
a0.aQ(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eYA.aw(0,h))
a0.aQ(f,w)
w=C.a29(g,h.cv(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b8H.gp(0)
a0.aQ(w,v)
g=C.a29(g,h.cv(e*0.03))
v=d.$1(e*0.004)
v.r=D.bbg.gp(0)
a0.aQ(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOS.aw(0,h))
a0.aQ(f,g)
for(g=B.x3(f),w=B.a([],x.X),g=new B.vy(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jV(y.M));--q
g.ju()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bn(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ju()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ju()
m=w[q].ME(p*n/o).a
l=D.cTV[A.o.E(n,4)]
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.saq(D.eYJ.aw(0,h))
g.z=new B.hz(A.G,e*0.03)
a0.aQ(f,g)
g=d.$1(e*0.018)
g.saq(D.eYG.aw(0,h))
a0.aQ(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aQ(f,w)
g=C.a29(g,h.cv(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nM.gp(0)
a0.aQ(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqv.prototype={
a4(d,e){d.FQ(C.a29(this.b,new B.a9(0,0,0+e.a,0+e.b).cv(-this.c)),A.w,e.gdE()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aKX.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.aLs.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.aMP.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.a7N.prototype={}
C.NK.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aDU(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge2(){return this.c},
gTq(){return this.r},
gTr(){return this.w},
gLs(){return this.x}}
C.aDU.prototype={
a_(){var w,v=this
v.a1()
$.aW.c_$.push(v)
C.fG_()
$.hnY=new C.ex2(v)
w=B.bj(null,A.AU,null,1,null,v)
w.ff(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ij()},
bu(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Oj(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ij()}},
j0(d){if(d===A.A1||d===A.t2||d===A.t1||d===A.pq)this.tx()},
q(){var w,v,u,t=this
$.aW.hJ(t)
w=t.at
if(w!=null)w.a6(0)
t.tx()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h6()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bvp()},
gabc(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOD(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abG(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gS5())return!1
return!0},
kg(){return this.abG(null)},
aiq(){var w=this.c
if(w==null)return
w.J(x.q).f.U(D.eWZ)},
qg(){if(!this.kg())return!1
this.aiq()
return!0},
aqt(d){var w,v,u,t,s,r=this
if(r.abG(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hn4(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zQ(){return this.aqt(null)},
Ij(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ij=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqN(k),$async$Ij)
case 3:j=e
w=4
return B.b(C.app(k),$async$Ij)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fVn(j,t.c_V())
w=t.gabc()?5:7
break
case 5:r=t.gOD()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZM(r),$async$Ij)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.etq())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.etr())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yv(m==null?"":m)!=null)continue
C.fGb(n,s)
p=!0}t.m(new C.ets(t,s))
if(p||s.length>J.ad(j))t.tx()
case 1:return B.h(u,v)}})
return B.i($async$Ij,v)},
c_V(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ku(w)&&w!==q}if(w)p.push(r)
return p},
cni(d){var w,v=this,u=d.w
if(!C.ku(u)||u==="hati_kiapo_uongozi")return
v.aa1(d)
w=A.d.bg(v.d,new C.ev0(d))
u=v.d
if(w>=0){u[w]=d.hG()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cj(u,0,d.hG())
v.db=!1},
chp(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ku(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cni(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i1>")
s=B.C(new B.cQ(new B.a_(s,new C.euP(),w.k("a_<1>")),new C.euQ(),v),v.k("J.E"))
return s},
Oj(d){return this.bOT(d)},
tx(){return this.Oj(null)},
bOT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Oj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.chp()
w=3
return B.b(C.VJ(d==null?t.a.c:d,s),$async$Oj)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqt(r)?4:5
break
case 4:w=6
return B.b(C.a7_(r),$async$Oj)
case 6:q=r.x
p=A.a.i(q==null?t.gOD():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.esO())
q=t.d
if(o>=0)q[o]=r.hG()
else A.d.cj(q,0,r.hG())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oj,v)},
pj(){var w,v=this,u=v.at
if(u!=null)u.a6(0)
u=v.e
w=(u==null?null:C.ku(u.w))===!0?A.hx:A.lO
v.at=B.cM(w,new C.ew8(v))},
aZj(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeV(u.hG(),v.f,v.r))
if(w.length>40)A.d.cw(w,0)
A.d.a8(v.ay)},
cAP(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeV(w.e.hG(),w.f,w.r))
w.m(new C.ewZ(w,v.pop()))
w.pj()},
cmn(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeV(w.e.hG(),w.f,w.r))
w.m(new C.euZ(w,v.pop()))
w.pj()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.ewM(u))
if(w>=0){u.d[w]=u.e.hG()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xl(d){var w,v,u,t,s=this.gds()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xs(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h6()}w.a8(0)},
K_(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gds()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.dd(new B.cQ(new B.a_(w,new C.ewN(),v.k("a_<1>")),new C.ewO(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c8(0,p,new C.ewP(n))
s.c8(0,p,new C.ewQ())
p=m.a.a
o=n.r
if(p!==o)m.saW(0,o)}},
HE(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.esc(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOD()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hG())}u.of()
u.pj()},
aiM(d,e){var w,v,u,t,s=this
if(s.kg())return
w=s.Xl(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ku(v.w))===!0
if(u){C.i4L(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gds()
if(t!=null)C.i4M(t,w.d+w.f*0.5)}}s.HE()
s.of()
s.pj()
if(u&&s.c!=null)s.m(new C.ex_())},
cBT(d,e){var w=this,v=w.gds()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HE()
w.of()
w.pj()},
gds(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gql(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i2N(o)
if(w!=null)return w
v=q.gds()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bYi(v)
t=q.bYh(v)
s=B.b0(v.e)
r=v.f
return new C.jE(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hGC(o)},
bYi(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bYh(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aeI(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabc()){w.c.J(x.q).f.U(D.eVB)
return}w.aa1(d)
w.b_w(C.bBA(d))
return}if(C.cei(v)){w.aa1(d)
w.b_w(d)
return}w.m(new C.eu7(w,d))},
ar2(){var w,v,u,t,s,r,q=this
q.a1U(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ku(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.esa(q))
if(r&&q.c!=null){u.toString
q.JA(u,s)}return}q.tx()
q.m(new C.esb(q))},
b_v(d){this.aa1(d)
this.a_o(d,!0)},
aa1(d){if(!C.ku(d.w))return
C.fGb(d,this.d)},
a_o(d,e){return this.cdj(d,e)},
b_w(d){return this.a_o(d,!1)},
cdj(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_o=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBA(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOD():r)
t.dy.W(0,q.toLowerCase())
C.apq(t.a.c,q)}r=s}else r=d
w=C.cei(r.w)?3:4
break
case 3:w=5
return B.b(t.aa2(r),$async$a_o)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.euu(l))
o=l.a.hG()
n=C.ku(o.w)&&C.i5X(o)
t.m(new C.euv(t,o,p))
if(n){m=A.d.bg(t.d,new C.euw(o))
if(m>=0){t.d[m]=o.hG()
t.tx()}}if(!t.abG(l.a))t.Yw()
r=!1
if(t.c!=null)if(!t.abG(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqt(r)&&C.fCe(l.a)}else l=r
else l=r
if(l)t.c.J(x.q).f.U(D.eWa)
case 1:return B.h(u,v)}})
return B.i($async$a_o,v)},
aa2(d){return this.bN4(d)},
bN4(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aa2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.le(r.c,A.zg),$async$aa2)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kT(!1,r,s.c,s.d,null,A.zg,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aa2,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cei(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdH(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aep(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aep=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.eu6(),s,null,!0,!0,x.H),$async$aep)
case 3:if(t.c==null){w=1
break}t.ar2()
case 1:return B.h(u,v)}})
return B.i($async$aep,v)},
aeo(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.eu3(),s,null,!0,!0,x.H),$async$aeo)
case 3:if(t.c==null){w=1
break}t.m(new C.eu4())
t.ar2()
case 1:return B.h(u,v)}})
return B.i($async$aeo,v)},
Yw(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Yw)
case 3:r=e
if(B.jK(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Yw)
case 4:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eUe)
case 1:return B.h(u,v)}})
return B.i($async$Yw,v)},
JA(d,e){return this.cnJ(d,e)},
cnJ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JA=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agf(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JA)
case 9:w=4
break
case 6:w=10
return B.b(C.agg(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JA)
case 10:w=4
break
case 7:w=11
return B.b(C.agh(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JA)
case 11:w=4
break
case 8:w=12
return B.b(C.agi(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JA)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JA,v)},
bZP(){var w,v,u,t,s=this
if(!s.gabc()){s.c.J(x.q).f.U(D.eUr)
return}w=s.gOD()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.age(u,t,v,new C.etm(s),new C.etn(s),w)},
aeJ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bS(A.dH,null,new C.eud(u),s,!0,!0,!1,A.lx,!1,!1,x.N),$async$aeJ)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agi(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agf(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agg(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agh(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZP()
return B.h(null,v)}})
return B.i($async$aeJ,v)},
ccq(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZj()
w=C.cB()
v=C.BA(t,t,t,t,D.CG,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eue(u,v))},
a9t(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ias(s),$async$a9t)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.ese())
t.d2(new C.esf(t,p,q,r))
s=t.c.J(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
agH(d,e,f,g){var w=null,v=g?A.dm:A.bK,u=B.I(g?A.b0:A.cr,A.q,1)
return B.ht(B.aC(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qg()){w=1
break}s=t.jS()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.eup(),q),q.k("J.E"))}o=s!=null&&s.b===D.lw?B.a([s],x.u):p
if(o.length===0){t.c.J(x.q).f.U(D.eWl)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.euq(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_n)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_n,v)},
af_(){return this.cdi()},
cdi(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$af_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iae(s,t.f+1,o),$async$af_)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kC(s,B.U(s).c)
p.a=A.d.bg(o.r,new C.eus(q))
t.d2(new C.eut(p,t,o,q,r))
t.c.J(x.q).f.U(D.eWK)
case 1:return B.h(u,v)}})
return B.i($async$af_,v)},
af6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()||!t.zQ()){w=1
break}s=t.gds()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.euK(),q),q.k("J.E"))
if(p.length===0){t.c.J(x.q).f.U(D.eU_)
w=1
break}o=new B.M(p,new C.euL(),B.U(p).k("M<1,L>")).fd(0,new C.euM())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bS(A.K,null,new C.euN(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$af6)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.euO())
case 1:return B.h(u,v)}})
return B.i($async$af6,v)},
aeM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qg()){w=1
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
return B.b(C.hp3(s,new C.Ep(r,q,p,o==null?"":o)),$async$aeM)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d2(new C.euf(m,n))
s=t.c.J(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agE(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeM,v)},
a9W(){return this.bMq()},
bMq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iar(s,t.f+1,l),$async$a9W)
case 3:r=e
q=$.fYR
$.fYR=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d2(new C.esv())
t.c.J(x.q).f.U(D.eTR)
w=1
break}if(!q){s=r.CW
s=C.hnW(l,s==null?"":s,!1)}else s=!1
if(s){t.d2(new C.esw(t,l,r))
t.c.J(x.q).f.U(D.eXd)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kC(s,B.U(s).c)
s=l.r
m.a=A.d.bg(s,new C.esx(p))
o=s.length
t.d2(new C.esy(m,t,l,p,r))
n=s.length-o
s=t.c.J(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9W,v)},
aPO(d,e){if(e){this.afz()
return}this.ccq(d,!1)},
bI3(){return this.aPO(null,!1)},
afz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.bZ,null,new C.euU(t),r,!0,!0,!0,A.p9,!1,!1,x.N),$async$afz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.euV(t,C.i2M(s).px()))
case 1:return B.h(u,v)}})
return B.i($async$afz,v)},
d2(d){var w=this
if(w.qg())return
w.HE()
w.aZj()
w.m(d)
w.K_()
w.of()
w.pj()},
a7X(){this.d2(new C.er9(this,D.mI))},
aRi(){var w=this.gds()
if(w==null)return
this.d2(new C.est(this,w))},
aQq(){var w=this.e
if(w==null||w.r.length<=1)return
this.d2(new C.esr(this))},
b2w(d,e){if(this.e==null||d===e)return
this.d2(new C.ev2(this,d,e))},
NR(d){return this.bK3(d)},
bK3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOD():s)
w=5
return B.b(C.apo(t.a.c,r),$async$NR)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aqP(s)
w=6
return B.b(C.b0H(t.a.c,s),$async$NR)
case 6:if(t.c==null){w=1
break}t.m(new C.esn(t,d))
w=7
return B.b(t.tx(),$async$NR)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NR,v)},
cnG(d,e){var w=this
if(d.z){w.aiq()
return}w.m(new C.ev1(w,d,e))
w.pj()},
jS(){var w,v,u,t,s,r=this.gds()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wm(d){return this.ch.c8(0,d.a,new C.esd(d))},
asW(d){return this.CW.c8(0,d.a,new C.esP())},
a1U(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xl(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jI()},
b5X(){return this.a1U(!0)},
a1R(d){var w,v,u=this
if(u.qg())return
if(!u.zQ())return
w=u.Xl(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wm(w).saW(0,"")}u.m(new C.ewK(u,d))
$.aW.x1$.push(new C.ewL(u,d,w))},
b6s(d){var w=this
if(d.b===D.cQ&&!w.kg()&&w.zQ()){w.a1R(d.a)
return}w.azj(d.a)},
azj(d){var w,v,u,t,s,r=this
if(r.kg())return
w=r.r
if(w!=null&&w!==d){v=r.Xl(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ew9(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jI()}},
aM5(){this.d2(new C.era(this))},
p_(d){return this.bza(d)},
bza(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p_)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d2(new C.er7(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p_,v)},
Vv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gw(78,1920),$async$Vv)
case 3:s=e
if(s==null||t.gds()==null){w=1
break}t.d2(new C.eqY(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vv,v)},
Vp(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gds()==null){w=1
break}w=3
return B.b(S.CK(t.a.c),$async$Vp)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gam(s)){t.c.J(x.q).f.U(D.eXN)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bS(null,null,new C.eqV(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vp)
case 7:q=e
case 5:if(q==null||t.c==null||t.gds()==null){w=1
break}t.d2(new C.eqW(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vp,v)},
arT(){var w=this,v=w.r
if(v==null||w.gds()==null)return
if(A.d.b4(w.gds().z,new C.esp(v))){w.c.J(x.q).f.U(D.eWO)
return}if(w.w===v)w.a1U(!0)
w.d2(new C.esq(w,v))},
bGj(){var w=this.jS(),v=w==null
if((v?null:w.b)===D.f2)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMN(d,e){var w=this,v=w.jS(),u=w.gds(),t=w.e
if(t==null)return
w.d2(new C.erC(w,v,d,e,t,u))},
bAL(d){return this.aMN(d,null)},
a8e(d){return this.bAT(d)},
bAT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8e=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6D.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a8e)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jS()
if(s!=null){r=s.b
if(r===D.cQ)t.bAL(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f2){r=d.c
t.aMN(r.j(0.88),r)}w=1
break}t.d2(new C.erH(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8e,v)},
a8d(d){return this.bAR(d)},
bAR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jS()
r=t.gds()
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
return B.b(t.o6(),$async$a8d)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.erF(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8d,v)},
bAB(d){var w=this.gds()
if(w==null)return
this.d2(new C.erB(this,w,d))},
a_t(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ian(r),$async$a_t)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.euE(t,s))
w=4
return B.b(t.tx(),$async$a_t)
case 4:if(t.c!=null)t.aeI(s)
case 1:return B.h(u,v)}})
return B.i($async$a_t,v)},
a9O(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1U(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.QW(s,q),$async$a9O)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9O,v)},
Dx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPx(m),$async$Dx)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOY(o,q,m.b),$async$Dx)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dx,v)},
Fb(d,e){return this.cAh(d,e)},
cAh(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fb=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qg()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1U(!0)
t.of()
s=h.a=t.e.hG()}else{r=A.d.bg(t.d,new C.ewT(d))
s=h.a=r>=0?t.d[r].hG():d.hG()}s=s.w
q=s==null
p=C.i3K(q?"":s)
o=C.hmR(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ewU(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cty(n.length,o,s),$async$Fb)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i3E(h.a)
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
return B.b(t.ctx(n,o),$async$Fb)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.hn(t.d,new C.ewV(s))
s=h.a.b
w=11
return B.b(t.ctv(k.b,s),$async$Fb)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hG()
case 5:j=C.i3J(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.J(x.q).f.U(D.eXY)
w=1
break}w=12
return B.b(t.ctw(j.a,s,o,j.c),$async$Fb)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ewW(h,t,i))
t.pj()
case 1:return B.h(u,v)}})
return B.i($async$Fb,v)},
cty(d,e,f){var w=this.c
w.toString
return B.bS(A.K,null,new C.ewp(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctx(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.ewo(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctv(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.ewi(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ctw(d,e,f,g){var w=this.c
w.toString
return B.bS(A.K,null,new C.ewk(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abg(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abh(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bZ,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.w(B.a([B.d(g,u,u,u,u,u,u,D.f7l,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUz(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.TR,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aUC(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.w(B.a([B.d(i,w,w,w,w,w,w,A.nA,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bx,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eti(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bXd(d,e,f,g,h,i){return this.aUC(d,e,f,!1,g,h,i)},
auf(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.w(B.a([B.d(e,w,w,w,w,w,w,A.dj,w,w,w),A.bD,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Z4,w,w,w)},
aUB(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.ny,w,w,w),new C.eth(d,f),v)},
aUA(d,e){return this.aUB(d,e,null)},
JR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p5(l,s.c,s.d),$async$JR)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aG("=",l.length)+"\n\n"
q=new B.fe(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f_(l,new C.ewa());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9E(l.charCodeAt(0)==0?l:l,r.b),$async$JR)
case 4:l=t.a
w=5
return B.b(B.p4(l.c,l.d),$async$JR)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JR,v)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p5(q,s.c,s.d),$async$HZ)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9E(A.S.ao(r.ag(),null),r.b+".json"),$async$HZ)
case 4:q=t.a
w=5
return B.b(B.p4(q.c,q.d),$async$HZ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
b5H(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.tx()
w=u.c
w.toString
v=B.e8(new C.ewJ(u,t),!1,null,x.z)
B.a6(w,!1).ck(v)},
Hd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Hd)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fGo(),$async$Hd)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i6w(s.a)
q=t.c
q.toString
w=5
return B.b(B.bS(A.az,null,new C.er2(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hd)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d2(new C.er3(t,s))
w=1
break}if(p==="split")t.d2(new C.er4(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hd,v)},
Nc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}w=3
return B.b(t.o6(),$async$Nc)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPw(s,null,null),$async$Nc)
case 4:r=e
if(r==null||t.gds()==null){w=1
break}t.d2(new C.er8(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nc,v)},
b2j(d){var w=this.e
if(w==null||!C.ku(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aO4(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPw(s,t==null?null:B.b0(t),u)},
a7V(d){return this.bz1(d)},
bz1(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eYc)
w=1
break}w=3
return B.b(t.aO4(),$async$a7V)
case 3:r=f
if(r==null||t.gds()==null){w=1
break}t.d2(new C.er_(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7V,v)},
agk(d){return this.cmr(d)},
cmr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eXl)
w=1
break}w=3
return B.b(t.aO4(),$async$agk)
case 3:r=f
if(r==null||t.gds()==null){w=1
break}t.d2(new C.ev_(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agk,v)},
c97(){var w,v,u=this
if(u.kg())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bE(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.czi()}},
czi(){var w,v,u,t,s,r=this.gds()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d2(new C.ewR(this,r,(A.o.aB(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bXy(){var w,v,u,t,s,r=this.gds()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d2(new C.etl(this,r,u.d))},
c1b(d){var w
if(this.kg())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fD_(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c1c(d){var w
if(this.kg())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
if(!this.zQ())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fD_(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nl(d){return this.bBi(d)},
bBi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zQ()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eWb)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aps(p),$async$Nl)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.J(x.q).f.U(D.eWQ)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7_(r)
w=1
break}t.m(new C.erL(t,d,o))
t.of()
$.aW.x1$.push(new C.erM(t))
case 1:return B.h(u,v)}})
return B.i($async$Nl,v)},
Vt(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Vt)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCg(),$async$Vt)
case 4:s=e
if(s==null||t.gds()==null){w=1
break}t.d2(new C.eqX(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vt,v)},
O4(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$O4)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jS()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fGf(r),$async$O4)
case 4:q=e
if(q==null){w=1
break}t.d2(new C.esN(s,q))
case 1:return B.h(u,v)}})
return B.i($async$O4,v)},
iY(d){this.d2(new C.er5(this,d))},
q6(d){return this.bAu(d)},
bAu(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qg()){w=1
break}m=!D.aNp.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$q6)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hd()
w=1
break A
case"sign_paper":t.Nc()
w=1
break A
case"hd_photo":t.Vt()
w=1
break A
case"sharpen":t.O4()
w=1
break A
case"print":t.Dx()
w=1
break A
case"rotate":s=t.jS()
if(s!=null)t.d2(new C.ere(s))
w=1
break A
case"text_box":t.aM5()
w=1
break A
case"picture":t.Vv()
w=1
break A
case"present":t.b5H()
w=1
break A
case"new_slide":t.a7X()
w=1
break A
case"export_json":t.HZ()
w=1
break A
case"outline_share":t.JR()
w=1
break A
case"flashcard_tool":t.v9(D.HT)
w=1
break A
case"quiz_tool":t.v9(D.HU)
w=1
break A
case"worksheet_tool":t.v9(D.HV)
w=1
break A
case"duplicate_el":s=t.jS()
if(s==null){w=1
break A}t.d2(new C.erf(t,s))
w=1
break A
case"delete_el":t.arT()
w=1
break A
case"bring_fwd":s=t.jS()
if(s==null||t.gds()==null){w=1
break A}t.d2(new C.erg(t,s))
w=1
break A
case"send_back":s=t.jS()
if(s==null||t.gds()==null){w=1
break A}t.d2(new C.err(t,s))
w=1
break A
case"align_left":s=t.jS()
if(s!=null)t.d2(new C.eru(s))
w=1
break A
case"align_center":s=t.jS()
if(s!=null)t.d2(new C.erv(s))
w=1
break A
case"align_right":s=t.jS()
if(s!=null)t.d2(new C.erw(s))
w=1
break A
case"grayscale":case"brighten":t.O4()
w=1
break A
case"flip_h":s=t.jS()
if(s!=null)t.d2(new C.erx(s))
w=1
break A
case"flip_v":s=t.jS()
if(s!=null)t.d2(new C.ery(s))
w=1
break A
case"rectangle":t.p_(D.bf)
w=1
break A
case"circle":t.p_(D.eM)
w=1
break A
case"triangle":t.p_(D.jO)
w=1
break A
case"arrow":t.p_(D.CI)
w=1
break A
case"line":case"divider":t.p_(D.fs)
w=1
break A
case"word_count":r=t.gds()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f_(q,new C.erz()),o=0;p.C();){n=A.a.fF(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.erA(),B.U(n).k("a_<1>")).gM(0)}t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.iY(C.iU(A.L,!1,t.gql().d.l(),A.aD,40,A.bn,A.u,0.18,q,"Presentation Title",0,D.mJ,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.iY(C.iU(A.L,!1,t.gql().e.l(),A.aD,22,A.bn,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iY(C.iU(A.bh,!0,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uo,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iY(C.iU(A.bh,!1,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.un,0.8,0.1,0.22))
w=1
break A
case"quote":t.iY(C.iU(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cB(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iY(C.iU(A.bh,!1,4284773515,A.aD,14,A.bn,A.a5,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.uo,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iY(C.iU(A.dN,!1,4279310375,A.aD,14,A.bn,A.a5,0.08,C.cB(),C.bCi(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iY(C.iU(A.dN,!1,4279310375,A.aD,13,A.bn,A.a5,0.06,C.cB(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d2(new C.erh(t))
w=1
break A
case"footer_bar":t.d2(new C.eri(t))
w=1
break A
case"highlight":t.d2(new C.erj(t))
w=1
break A
case"redact":t.d2(new C.erk(t))
w=1
break A
case"callout":t.d2(new C.erl(t))
w=1
break A
case"checkboxes":t.iY(C.iU(A.bh,!1,4279310375,A.aD,20,A.bn,A.a5,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iY(C.iU(A.bh,!1,4279310375,A.aD,16,A.bn,A.a5,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d2(new C.erm(t))
w=1
break A
case"letter":t.iY(C.iU(A.bh,!1,4279179050,A.aD,17,A.bn,A.a5,0.82,C.cB(),C.bCi()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iY(C.iU(A.bh,!1,4279310375,A.aD,22,A.bn,A.O,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uo,0.8,0.1,0.12))
w=1
break A
case"toc":t.iY(C.iU(A.bh,!1,4279310375,A.aD,18,A.bn,A.a5,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iY(C.iU(A.bh,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cB(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iY(C.iU(A.bh,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cB(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iY(C.iU(A.L,!1,4278556265,A.aD,28,A.bn,A.u,0.12,C.cB(),"APPROVED",0,D.mJ,0.32,0.62,0.08))
w=1
break A
case"draft":t.iY(C.iU(A.L,!1,4292617766,A.aD,28,A.bn,A.u,0.12,C.cB(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iY(C.iU(A.L,!1,871318596,A.aD,36,A.bn,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d2(new C.ern(t))
w=1
break A
case"progress":t.d2(new C.ero(t))
w=1
break A
case"stars":t.iY(C.iU(A.L,!1,4279310375,A.aD,36,A.bn,A.a5,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.qg,0.8,0.1,0.4))
w=1
break A
case"equation":t.iY(C.iU(A.L,!1,4279310375,A.aD,32,A.bn,A.O,0.14,C.cB(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iY(C.iU(A.L,!1,4279310375,A.aD,18,A.bn,A.a5,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.un,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d2(new C.erp(t))
w=1
break A
case"compare":t.d2(new C.erq(t))
w=1
break A
case"link_text":t.iY(C.iU(A.bh,!1,4280640491,A.mO,16,A.bn,A.a5,0.1,C.cB(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iY(C.iU(A.bh,!1,4279310375,A.aD,18,A.bn,A.a5,0.1,C.cB(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iY(C.iU(A.bh,!1,4280640491,A.aD,18,A.bn,A.a5,0.1,C.cB(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d2(new C.ers(t))
w=1
break A
case"cover_page":r=t.gds()
if(r==null){w=1
break A}t.d2(new C.ert(t,r))
w=1
break A
case"invoice":t.iY(C.iU(A.bh,!1,4279179050,A.aD,16,A.bn,A.a5,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iY(C.iU(A.bh,!1,4279179050,A.aD,17,A.bn,A.a5,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iY(C.iU(A.bh,!1,4279310375,A.aD,16,A.bn,A.a5,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bCi()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iY(C.iU(A.bh,!1,4279310375,A.aD,17,A.bn,A.a5,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iY(C.iU(A.bh,!1,4279310375,A.aD,15,A.bn,A.a5,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q6,v)},
csZ(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eOY.t(0,this.z)},
csY(d){if(this.jS()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7i(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bE
u=B.I(u,A.q,o&&e?2:1)
t=C.i6l(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NX,A.f,p,p,D.E0,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aC(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bMG(d){var w,v=null,u=this.jS()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.Qr,new C.esM(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v9(d){return this.bz9(d)},
bz9(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aNj.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$v9)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d2(new C.er6(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v9,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eNJ
w=h.e
if(w==null)return h.bD_()
v=h.gds()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eG,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bZ:D.baK
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gS5()}else j=!1
if(j)k.push(new C.a7v(h.a.c,!1,h.e.gb9v(),h.gc94(),g))
else if(s&&h.e!=null&&!h.kg()&&C.cei(h.e.w)){j=h.a
k.push(new C.a7v(j.c,j.d,g,h.gcad(),g))}if(s)k.push(h.bMC(w,t,r))
if(s&&h.kg()){w=t?A.fy:A.ks
j=B.m(14)
i=B.I(A.bk.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bMb,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fy,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.B0,A.ii,g,g,g))}w=!n
if(w&&!h.kg())k.push(h.c27(t,r))
if(w&&h.kg())k.push(h.cAi(t))
if(r&&h.jS()!=null&&w&&!h.kg())k.push(h.c23(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5a(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5a(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bEh(v,t,!s||p),g),1))
if(h.csZ(r)&&u&&s&&!h.kg())i.push(h.c8S(v,t,r))
j.push(B.E(B.w(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kg()&&h.csY(!1))j.push(new B.a7(240,g,h.bPg(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.w(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c24(t))
return B.c7(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bD_(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bZ:A.bK
v=r.a.e
u=r.c87(A.bk,A.pY,new C.erP(r),r.gccn(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLO(A.bk,A.hz,"Blank Presentation",new C.erQ(r)),1),A.au,B.E(r.aLO(A.aZ,A.vP,"Class Template",new C.erR(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mN,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzX(w))
else{t=new B.i_(t,B.U(t).k("i_<1>"))
A.d.v(u,t.gdO(t).du(0,new C.erS(r,w),x.l))}return B.c7(q,p,B.bm(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bKS(){this.m(new C.ess(this))
var w=this.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jI()}},
af0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jS()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.euD(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$af0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$af0,v)},
AO(d,e){return this.ctk(d,e)},
ctk(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hU(D.WB,!0,"Dismiss",j,new C.ewb(),new C.ewc(d,e),A.iE,!0,x.N),$async$AO)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiq()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gS5()){r.aiq()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPx(d),$async$AO)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOY(j,q,d.b),$async$AO)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fb(d,!1),$async$AO)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hU(D.WB,!0,"Dismiss",j,new C.ewd(),new C.ewe(d),A.a1,!0,x.y),$async$AO)
case 20:if(g===!0)r.NR(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ag3("Rename presentation",d.b),$async$AO)
case 24:l=g
if(l!=null)r.cnG(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ewf(r,k))
r.pj()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AO,v)},
b0a(d,e){var w=null
return B.bK(!1,D.fvZ,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.av,w,A.lQ,w,w,w,w,w,A.k9,w,w))},
bzX(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.erb(this,d),null)},
bIY(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.esg(),x.dv).c0(0,new C.esh()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ah_,this.aMn(v,e,new C.esi(),f),null)},
aMn(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.br,n,n,n,10),A.qo],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.y(p,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cl(A.aO,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nh,n,n,n))
A.d.v(l,u)}return B.f6(A.a3,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.ei)},
bzV(d,e,f){return this.aMn(d,e,null,f)},
bJ_(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.ddk
else if(v==="hati_kuhoweya")w=D.d_h
else{if(v==="hati_kiapo_uongozi")v=D.cNa
else v=C.ku(v)?D.cUf:A.Q2
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.esl(this,f,d,e,w),null)},
c24(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jS()
if(i==null||i.b!==D.cQ)return A.bH
w=k.Wm(i)
v=k.asW(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.B3,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.frC,j,j,!0,j,j,new C.etM(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.az:A.c
q=B.m(18)
p=B.I(A.bk.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h9,B.c0(new B.D(A.eR,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bk,j,j,j,j,2,D.bS8,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wm,j,j,j,j,j,j,!1,"\u2022",j,new C.etN(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zy,A.an,j,A.Tk,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.c9(B.B(B.a([k.tY(G.MX,j,new C.etO(k,i),d),k.tY(G.a_e,j,new C.etP(k,i),d),k.tY(K.ali,j,new C.etQ(k,i),d),k.tY(K.a_V,j,new C.etR(k,i),d),k.tY(k.bzT(i.as),j,new C.etS(k,i),d),k.tY(D.amq,j,new C.etT(k,i),d),k.tY(D.amp,j,new C.etU(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aF(!1,A.a1,!0,j,B.w(B.a([s,r,new B.D(H.ah8,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ll,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c23(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jS()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3P(A.jp,"Edit",new C.etx(o,m),d,!0))
if(w===D.lw)p.push(o.b3P(A.Gn,"Shape & ring",new C.ety(o),d,!0))
p.push(o.tY(A.BO,"Format",new C.etz(o),d))
if(v)A.d.v(p,B.a([o.tY(G.MX,n,new C.etA(o,m),d),o.tY(D.amq,n,new C.etB(o,m),d),o.tY(D.amp,n,new C.etC(o,m),d)],q))
p.push(A.b7)
p.push(o.cr9(A.e6,n,o.gaQo(),d,!0))
p.push(o.tY(A.hn,"Done",new C.etD(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.B1,A.ll,n,n,n)},
bzT(d){switch(d.a){case 2:return D.a_S
case 1:case 5:return D.a_U
default:return D.a_T}},
c2X(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dN
default:return A.bh}},
azi(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?L.GH:n
if(h)s=n
else s=g?A.c.j(0.06):A.bK
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.r5,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
tY(d,e,f,g){return this.azi(d,e,f,g,!1,!1)},
b3P(d,e,f,g,h){return this.azi(d,e,f,g,h,!1)},
cr9(d,e,f,g,h){return this.azi(d,e,f,g,!1,h)},
bMC(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.mX],m)
w=B.I(e?A.aK:A.oy,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a2j(A.eD,"Back",p.gbG3(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.co,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c0:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tx,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kg()){u=p.a2j(A.rj,"Undo",p.ax.length===0?o:p.gcAO(),e)
A.d.v(r,B.a([u,p.a2j(D.bFI,"Redo",p.ay.length===0?o:p.gcmm(),e)],q))}r.push(p.a2j(A.y3,"PDF",new C.esF(p),e))
r.push(p.a2j(A.hA,"Download as video",new C.esG(p),e))
if(!p.kg())r.push(B.BO(o,o,B.X(A.o4,e?A.ad:A.br,o,o,o,o),new C.esH(p),A.J,new C.esI(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eF(D.e9s,o,new B.o(o,o,o,B.m(14),o,L.GH,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaA8(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.brn,D.bwu,o,o,o)},
cAi(d){var w=this,v=null,u=B.m(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cu:A.aL,A.q,1)
return B.p(v,B.c9(B.B(B.a([w.iI(A.u2,"Print",new C.ewX(w),d),w.iI(A.y3,"Download PDF",new C.ewY(w),d),w.iI(A.q3,"Present",w.gaA8(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.B0,G.aiO,v,v,v)},
a2j(d,e,f,g){var w,v=null
if(f==null)w=g?A.b0:A.dr
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c27(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cu:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.etX(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ais,new B.fg(new C.etY(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vw,r.agH(A.lm,"Ending celebration",r.gccA(),d),q),new B.D(R.vw,r.agH(A.Gn,"Logo ring & frame",r.gcdg(),d),q)],x.p):A.hc)
A.d.v(t,w?B.a([new B.D(R.vw,r.agH(A.nk,"Look and feel",r.gcdh(),d),q),new B.D(R.vw,r.agH(A.oW,"Edit this slide's text",r.gcdO(),d),q)],x.p):A.hc)
t.push(new B.D(R.vw,B.ht(B.aC(q,B.p(q,D.eN8,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.li.j(0.4),A.J,10)],x.V),D.aop,A.n),q,34,q,q,A.fW,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.etZ(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c9(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bwX,q,q,A.aO)
s=e?8:10
return B.p(q,B.w(B.a([t,B.c9(r.coQ(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.B0,q,q,q,q)},
coQ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d76[v]
u.a=null
s=u.a=t.b
w.push(e.lI(e.cqz(s),t.a,new C.evl(u,e),a3,D.aNj.t(0,s)))}w.push(e.iI(A.l_,"Notes Slide",new C.evm(e),a3))
w.push(e.lI(A.Gm,"Quiz",new C.evn(e),a3,!0))
w.push(e.lI(M.FX,"Worksheet",new C.evy(e),a3,!0))
w.push(e.lI(V.Gp,"Flashcard",new C.evJ(e),a3,!0))
w.push(e.lI(A.NM,"Lab Report",new C.evU(e),a3,!0))
w.push(e.lI(A.tX,"Rubric",new C.ew0(e),a3,!0))
w.push(e.lI(A.oQ,"Minutes",new C.ew1(e),a3,!0))
w.push(e.lI(A.o3,"Syllabus",new C.ew2(e),a3,!0))
w.push(e.lI(A.NS,"Timeline",new C.ew3(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d8k[v]
w.push(e.lI(r.b,r.c,new C.ew4(e,r),a3,!D.aNp.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iI(A.yo,a0,e.gaM4(),a3),e.iI(A.u_,"Picture",new C.evo(e),a3),e.iI(A.yi,"Bio link",new C.evp(e),a3),e.iI(A.a0n,"Table",new C.evq(e),a3),e.iI(A.NQ,"Sticky",new C.evr(e),a3),e.iI(A.tZ,"Divider",new C.evs(e),a3),e.iI(A.BP,"Header",new C.evt(e),a3),e.lI(A3.vF,"Rectangle",new C.evu(e),a3,!0),e.lI(A.rb,"Circle",new C.evv(e),a3,!0),e.lI(A.a_K,"Triangle",new C.evw(e),a3,!0),e.lI(A.j_,"Arrow",new C.evx(e),a3,!0),e.lI(D.bEa,"Parallelogram",new C.evz(e),a3,!0),e.lI(D.bGG,"Hexagon",new C.evA(e),a3,!0),e.lI(A.tZ,"Line",new C.evB(e),a3,!0),e.lI(A.y3,"PDF",new C.evC(e),a3,!0),e.lI(O.a0x,"Signature",new C.evD(e),a3,!0),e.iI(A2.BE,"Quote",new C.evE(e),a3),e.iI(D.a_m,a1,new C.evF(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aMU("Wide 16:9",D.CG,a3),e.aMU("Short 9:16",D.od,a3),new B.D(A.fB,B.mI(D.bIP,d,D.fnX,d,new C.evG(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bGi("This slide",!e.Q,a3,new C.evH(e)),A.bp,e.aP4("All slides",e.Q,a3,new C.evI(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bGj()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c0:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2l,new C.evK(e),n),n.k("ak.E"))
n=B.c9(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d9k[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dr:A.b0,1.5,A.q,-1)
l.push(new B.D(A.fB,B.aC(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.evL(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.c9(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDz()
g=B.U(h).k("M<1,D>")
h=B.C(new B.M(h,new C.evM(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.w(B.a([t,A.N,q,A.am,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.c9(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bZW(a3)],u),A.F,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.jS()
w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=new C.evk(e)
t=new C.ew5(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qr,f.dy,new C.evN(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gds()
q=q==null?d:q.r
p.push(t.$4(D.Qr,q,new C.evO(e,u),A.bk))
return new B.a7(w.a.a-20,d,B.w(p,A.F,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iI(A.l_,w,new C.evP(e),a3),e.iI(A.u2,"Print deck",new C.evQ(e),a3),e.lI(D.akl,"Export JSON",new C.evR(e),a3,!0),e.iI(A.fN,"Duplicate Slide",e.gaRh(),a3),e.iI(A.e6,a2,e.gaQp(),a3),e.cuG(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jS()
w=x.p
u=B.a([e.iI(D.a_m,a1,new C.evS(e),a3),e.iI(A.fN,"Duplicate",e.gaRh(),a3),e.iI(A.e6,a2,e.gaQp(),a3),e.iI(A.q3,"Present",e.gaA8(),a3),e.iI(A.BN,a0,e.gaM4(),a3),e.iI(A.BH,"Fit Text",new C.evT(e),a3),e.iI(A.y3,"Download PDF",new C.evV(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iI(A.kw,"Transfer",new C.evW(e),a3))
if(f!=null){w=B.a([A.ab,e.iI(G.MX,"Bold",new C.evX(e,f),a3),e.iI(G.a_e,"Italic",new C.evY(e,f),a3),e.iI(G.ajX,"Underline",new C.evZ(e,f),a3),e.iI(Ae.MY,"Bullets",new C.ew_(e,f),a3),e.bP_(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bMG(a3))
w.push(e.iI(D.bCO,"Delete",e.gaQo(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMU(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.od
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a88,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bI0],v))
return new B.D(A.fB,B.j7(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.erK(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cuG(d){var w,v,u,t,s,r=this,q=null,p=r.gds()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b0:A.cr,A.q,1)
u=B.m(8)
t=B.X(A.FV,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.ano,q,q,q,new C.ews(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bj,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.anf,q,q,q,new C.ewt(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FB,A.mt,q,q,q)},
cqz(d){switch(d.a){case 6:return V.Gp
case 7:return A.Gm
case 8:return M.FX
case 4:return A.BP
default:return A.l_}},
bP_(d,e){var w=null,v=B.I(e?A.b0:A.cr,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.ano,w,w,w,new C.esS(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bj,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.anf,w,w,w,new C.esT(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xN,A.mt,w,w,w)},
bZW(d){var w=null
return B.BO(B.De(B.X(A5.a_p,d?A.ad:A.br,w,w,w,16),w,w,D.ftr,w,w,w),w,w,new C.etp(),A.J,this.gbAA(),A.cp,"Slide layout",x.fO)},
lI(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bK,s=B.I(g?A.dm:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NX,A.f,w,w,D.E0,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eF(new B.D(A.h9,B.w(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iI(d,e,f,g){return this.lI(d,e,f,g,!1)},
b5a(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aO
v=B.hK(t,new C.ewE(u,s,e,d),s.r.length,A.cp,t,w,new C.ewF(e),!1)
s=d?A.az:A.bK
w=B.a([],x.p)
if(e&&!u.kg())w.push(new B.D(A.cp,B.HB(E.anC,new C.ewG(u),B.nz(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aO1,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.w(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bEh(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.od?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fI(w,B.aC(v,B.cq(new C.es8(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.es9(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bEj(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ku(a9.w))===!0,b1=b0&&C.fD_(b3),b2=b0&&b3.b===D.l5&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kg())v=!b0||a7.c1c(b3)
else v=!1
if(!a7.kg())u=!b0||a7.c1b(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cg:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h0O(b3))o=a8
else if(p&&!a7.kg())o=a7.gc96()
else o=a7.kg()?a8:new C.erX(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c7:A.jH
i=w&&C.h0O(b3)&&a7.zQ()?new C.erY(a7,b3):a8
h=v&&b3.b===D.cQ?new C.erZ(a7,b3):a8
g=u?new C.es_(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bi
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.l5?A.K:a8
if(b1){a1=a7.kg()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zQ()
a3=b3.b===D.cQ
a4=a3?a7.Wm(b3):a8
a5=a3?a7.asW(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.es0(a7,b3):a8
a3=v&&a3?new C.es1(a7,b3):a8
a6=C.b0D(q,a4,a1,b3,a5,a2,a3,new C.es2(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aC(a8,B.p(a8,D.bKQ,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.es3(a7,b3,b4,b5),a8,a8,new C.es4(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kg()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bLu,A.f,a8,a8,new B.o(A.dy,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbXx(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kg()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bN2,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.es5(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aC(a8,B.p(a8,D.fCe,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kX,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.es6(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aC(j,B.eH(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aP4(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bk:A.bE,A.q,1)
if(e)t=A.bk
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.NX,A.f,r,r,D.E0,r,12,r,r,r,r,r,12)],s))
return B.aC(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bGi(d,e,f,g){return this.aP4(d,e,f,g,!1)},
c8S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aQ
t=f?A.wO:l
if(f)s=new B.bO(new B.ay(e?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rD,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b0a(e,new C.eu0(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c0:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.w(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.m(10),A.dg),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eu1(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSz(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jS()
if(a2==null)return A.bH
w=new C.et5(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b0a(a3,a0.gbKR())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fos,B.E(B.kY(a1,a1,a1,u,0.05,new C.et6(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fAH,B.E(B.kY(a1,a1,a1,t,0.05,new C.et7(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fif,B.E(B.kY(a1,a1,a1,96,10,new C.et8(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lw
if(l||n===D.l5||n===D.RL)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fua,B.E(B.kY(a1,a1,a1,s,0,new C.et9(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fBY,B.E(B.kY(a1,a1,a1,r,0,new C.eta(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.C5[j]
i.a=null
g=h.a
i.a=g
k.push(B.j7(a1,a1,a1,new B.y(h.b,a1,A.pg,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etb(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bA,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.C_[j]
f.a=null
g=e.a
f.a=g
h.push(B.j7(a1,a1,a1,new B.y(e.b,a1,A.pg,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etc(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bW(A.bA,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.etd(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bA,l,A.bq,6,6),A.ac,B.hcS(new C.ete(w,a2),D.coj,B.eu([a2.as],k),!0,a1,k)],p))}if(n===D.f2){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.etf(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bA,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bMP,D.fw9,new C.etg(a0,a5),B.bn(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cu:A.c
p=a4?A.wO:a1
if(a4)o=new B.bO(new B.ay(a3?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rD,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fj,a1,a1,a1)},
bPg(d){return this.aSz(d,!1,!1,null)},
c87(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.etj(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f8f,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.w(B.a([w,A.bD,A.cS,r.bzV(D.cRM,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dV(B.ht(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eF(D.eSD,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.em,8)],p),D.aou,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b7s,D.b7Q],v):B.a([A.c,A.ks],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cz,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aLO(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eqT(this,g,d,e,f),null)},
ag3(d,e){return this.ckB(d,e)},
ckB(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ag3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.euY(d,q),p,null,!0,!0,x.N),$async$ag3)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
PI(d){var w=d.bT()
return""+B.bH(w)+"/"+B.bR(w)+"/"+B.bA(w)}}
C.aeV.prototype={}
C.ayq.prototype={
T(){return new C.bca(null,null)}}
C.bca.prototype={
gcwT(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pR,u,1,u,v)
w.ff(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bpT,u,1,u,v)
w.cr(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bti()},
IT(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.az(0,new B.hQ(w,v,A.ct).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bvl,B.c6(new B.h8(B.a([u,w],x.dS)),new C.d0b(this),v),v),v,v,v)}}
C.bco.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.bvC,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.w(B.a([new B.D(D.buN,B.w(B.a([B.p(w,D.bLA,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fyg,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f9o,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.boX,B.B(B.a([B.E(B.bK(!1,D.fmG,w,w,!0,w,w,new C.d0x(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.ne,w,A.oh,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.frX,w,w,!0,w,w,new C.d0y(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.ne,w,A.oh,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.aq),A.f,w,A8.Vo,new B.o(A.az,w,u,v,D.cS5,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JC.prototype={
T(){return new C.bc9()}}
C.bc9.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dV(B.de(B.aC(o,B.vo(B.df(o,B.B(B.a([r,A.au,new B.dq(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f6:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.P,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,A.o_,o,o,1/0),A.ct,A.jk,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d06(p,d),new C.d07(p),new C.d08(p),new C.d09(p),o,o,o,!1,A.a7),k),new B.u(0,(1-k)*16))}}
C.Po.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.w(B.a([B.d(w.e,v,v,v,v,v,v,A.nA,v,v,v),A.bD,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_f.prototype={
T(){return new C.aDX(D.dd,null,null)}}
C.aDX.prototype={
gYC(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bpt,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5B(d){if(!this.a.c.ay)return
this.x=d
this.gYC().iC(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avk(D.eYZ)
C.i3h()
v.R6()},
q(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.gYC().q()
v=w.z
if(v!=null)v.a6(0)
C.avk(D.eZ_)
C.i3k()
w.bvq()},
czF(){B.jj()
this.m(new C.exD())
var w=this.c.J(x.q).f
w.a4r()
if($.bjW)w.U(D.eVR)},
R6(){var w,v=this,u=v.f
if(u!=null)u.a6(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.hb1(u,w),1,120)),new C.ext(v))},
czk(){var w,v=this
v.m(new C.exC(v))
if(v.r)v.R6()
else{w=v.f
if(w!=null)w.a6(0)}},
gaUs(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ctr(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.m(new C.exu(w))
v=w.z
if(v!=null)v.a6(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lk,new C.exv(w))},
avN(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a6(0)
if(u.a.c.ch){u.m(new C.exp(u))
u.R6()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUs()){u.ctr()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.exq(u,A.o.E(w+1,s)))
u.b5B(w)
u.R6()}},
cjf(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a6(0)
v.m(new C.exr(v))
v.R6()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.exs(v,w,t))
v.b5B(w)
v.R6()}},
cuS(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nf(d,new B.cx(u,x.ac))}w=v.cuT(u)
u=v.d
u===$&&B.c()
return B.qi(new B.nf(d,new B.cx(u,x.ac)),w,new C.exA(),A.bc,A.bc,new C.exB(v))},
cuT(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bpP
case 16:return A.ku
case 18:return A.nb
default:return A.nc}},
cuR(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jp(e,new B.bf(s,new B.bq(A.uw,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jp(e,new B.bf(s,new B.bq(A.S0,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jp(e,new B.bf(s,new B.bq(A.io,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jp(e,new B.bf(s,new B.bq(A.uv,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.iq(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.iq(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.exw(s),e)
case 9:return B.c6(s,new C.exx(s),e)
case 10:return B.c6(s,new C.exy(s),e)
case 11:return B.c6(s,new C.exz(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iq(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jx(B.jp(e,new B.bf(s,new B.bq(A.uw,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.br_(w,t))
case 15:w=x.K
return B.jp(e,new B.bf(s,new B.bq(A.S0,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mN((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jL(v,u,v,1)
return B.fu(A.A,B.de(e,s.gp(0)),t,w,!0)
case 20:return B.eH(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jx(new C.anX(B.c6(n.gYC(),new C.exE(n,v,w),m),m),A.r,m)}else{t=B.ry(new C.IA(w,!0,!1,m))
l=B.b0(w.e)
u=n.cuS(B.el(B.jx(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hb1(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oo,m,m,m),A.bp,D.bNS],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fL,m,m,m)
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
l.push(B.bZ(0,new C.Ni(new C.Ep(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.od?0.5625:1.7777777777777777
l.push(B.av(new B.fI(r,B.jx(B.uo(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjW){r=B.HB(A.l2,new C.exF(d),B.nz(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HB(B.X(n.r?Ak.yg:A.iI,m,m,m,m,m),n.gczj(),B.nz(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hs,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fL,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aC(A.c7,B.p(A.ld,$.bjW?A.bH:s,A.f,m,m,m,m,64,m,m,D.bqA,m,m,150),A.y,!1,m,n.gczE(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aC(m,new B.an(A.W,m,A.b1,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.exG(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JJ.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aie,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b0e,w,w,w,w,w,w,w,w)}}
C.br_.prototype={
j7(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jO(d){return d.b!==this.b}}
C.bh2.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aY0
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vX,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hx,r,64,r,r,r,r,64)
return B.aC(r,new B.a7(78,r,B.w(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bh1.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dlP.h(0,p)
if(o==null)o=D.d8v
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cV.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.amC:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ek,q,q,52)
return B.aC(q,new B.a7(66,q,B.w(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJE.prototype={
aT(){this.b_()
this.aY()
this.dL()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aLG.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.bwJ.prototype={}
C.aLH.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b_()
this.aY()
this.by()}}
C.b0G.prototype={}
C.VK.prototype={
T(){return new C.aDV()},
bga(d){return this.e.$1(d)}}
C.aDV.prototype={
gb3V(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaab(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb3V()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNK(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3V()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb59(){return A.d.cK(this.gaab(),0,new C.ex9())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QI()},
QI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1g(s.c,s.f),$async$QI)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ex5(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QI,v)},
IV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaab()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fGb(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p5(o,q.c,q.f),$async$IV)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.ex8(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ck(q),$async$IV)
case 4:q=t.a
w=5
return B.b(B.p4(q.c,q.f),$async$IV)
case 5:w=6
return B.b(t.QI(),$async$IV)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
R4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hB(o,D.dZq,!0,"NgmySlidesTransferScan",x.N),$async$R4)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ex6(t))
w=4
return B.b(C.ah4(s),$async$R4)
case 4:r=e
t.m(new C.ex7(t))
o=J.a4(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.J(x.q).f.U(D.eUK)
w=1
break}w=5
return B.b(t.a.bga(r),$async$R4)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.J(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$R4,v)},
IU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaab()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p5(s,r.c,r.f),$async$IU)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fGq(null,A.d.gI(n),s,t.a.f)}else q=C.fGq(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gk(q,"ngmy_slides_"+p,!1),$async$IU)
case 4:o=e
s=t.a
w=5
return B.b(B.p4(s.c,s.f),$async$IU)
case 5:w=6
return B.b(t.QI(),$async$IU)
case 6:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IU,v)},
a2u(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exa(t))
w=3
return B.b(C.bC0(),$async$a2u)
case 3:s=e
t.m(new C.exb(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bga(s),$async$a2u)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.J(x.q).f
q=J.a4(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2u,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.da:A.bK,k=o.gaab().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.exe(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zw],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.pY,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bOn,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.w(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bzB],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.ht(B.aC(A.c7,D.eSF,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gce_(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a11,A.n),n,n,n,n,E.YT,n,n,1/0),A.dY,o.awY(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWL(A.q3,m,new C.exf(o),o.d==="one","Pick a single deck","One presentation"),1),A.au,B.E(o.aWL(D.bE2,m,new C.exg(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.awY(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.m(16)
s=B.I(m?A.bE:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.M(u,new C.exh(o,m),B.U(u).k("M<1,r>")))
A.d.v(w,v)}w.push(A.mN)
w.push(o.awY(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apD(A.aP,k,!0,A.js,m,o.r,o.gc8b(),"Scan on another device","Show QR"),1),A.au,B.E(o.aLP(A.jX,!0,A.j0,m,o.gcq8(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.byp(A.aV,k,A.hA,m,o.r,o.gc88(),"Download .json","Backup file"),1),A.au,B.E(o.aLP(A.aF,!0,Ax.yq,m,o.gcC3(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bk.j(0.28),A.q,1)
s=B.X(A.lo,A.bk.j(0.9),n,n,n,18)
r=o.gaNK()
q=o.gb59()
p=o.gb59()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.au,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.w(B.a([new B.D(Ag.My,i,n),B.E(B.cw(w,n,D.btX,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VI,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afd(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i9E(s,t.d,t.e),$async$afd)
case 2:return B.h(null,v)}})
return B.i($async$afd,v)},
awY(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWL(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.az:A.c
if(g)w=A.bk
else w=e?A.bE:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cz,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eF(new B.D(A.bB,B.w(B.a([t,A.R,u,A.bD,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bIZ(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.az:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bE:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bOy,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.w(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eg:A.rb
if(p)r=A.bk
else r=e?A.b0:A.dr
return new B.D(A.cy,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ex4(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
apD(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bE:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r9,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.an9,A.f,s,s,D.b00,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.de(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eF(new B.D(E.Yy,B.w(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bD,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aLP(d,e,f,g,h,i,j){return this.apD(d,e,!1,f,g,!1,h,i,j)},
byp(d,e,f,g,h,i,j,k){return this.apD(d,e,!1,f,g,h,i,j,k)}}
C.VL.prototype={
T(){return new C.bjV()}}
C.bjV.prototype={
a_(){this.a1()
this.ae4()},
ae4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ae4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fGq(null,A.d.gI(m),k,r.a.f):C.fGq(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ku(A.d.gI(n).w))C.fGb(A.d.gI(r.a.d),D.d6s)
n=r.a
m=n.c
n=C.i6B(n.d)
w=7
return B.b(C.fGp(p,C.i6G(r.a.d),n,m,q),$async$ae4)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.exi(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.exj(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.da:A.bK,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cK(k.a.d,0,new C.exk())
v=B.aH(j,j,j,j,B.X(A.eD,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.exl(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zw],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dj,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.w(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a11,A.n),j,j,j,j,E.YT,j,j,1/0)
q=B.m(24)
s=B.I(A.aP.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7v,A.L,j,j))
else if(k.d==null)r.push(D.e91)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fn8,A.am,B.aC(j,B.p(j,B.B(B.a([D.bQ6,A.au,B.d(m,j,j,j,j,j,j,D.f9N,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bUQ,A.n),j,j,j,j,A_.ai0,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.exm(k,d),j,j,j,j,j,j,!1,A.a7),A.N,D.frt,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bE,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pN(j,j,!1,l,j,!0,!0,j,!1,D.ble),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.h2,A.L,j,j))
return B.c7(j,h,B.bm(!0,B.w(B.a([new B.D(Ag.My,v,j),B.E(B.c9(B.w(B.a([t,A.aR,B.p(j,B.w(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bWM,A.n),j,j,j,j,A.tN,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aij,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDS.prototype={
T(){return new C.aDT(new B.as(A.as,$.aw()),B.jP(!0,null,!0,!0,null,null,!1))}}
C.aDT.prototype={
a_(){var w=this
w.a1()
w.e.aP(0,new C.eqN(w))
$.aW.x1$.push(new C.eqO(w))},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZl(){var w,v=this.c
v.toString
w=C.yv(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eG,x.w).w,i=B.m(28),h=B.I(A.bk.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.uu,36),D.ab5],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.w(B.a([B.p(k,D.bLD,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fki,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b0r,k,k,k,k,A.xM,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.au)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge8()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aT(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bg,B.df(A.A,new B.y(p,k,D.f3r,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hx,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.IR)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.de(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bSR,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.uf(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bj(5,k),new C.buf()],x.aS),k,k,A.aPg,k,5,k,1,k,k,!1,"\u2022",k,new C.eqJ(l),k,new C.eqK(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m5,k,k,k,k),0),0,0,0)],a1)
d=C.yv(w.a.a.toUpperCase())==null?k:l.gc8c()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ad.Ke,B.p(k,B.bw(e,B.w(B.a([a0,new B.D(D.buq,B.w(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.R,D.fiF,A.by,new B.a7(1/0,50,B.bG(D.fz9,d,B.bn(A.bk,A.bo,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nB,k,k,!0,k,k,new C.eqL(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.da,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.buf.prototype={
oz(d,e){var w=e.a.toUpperCase()
return e.cIh(B.he(A.bw,w.length),w)}}
C.aqQ.prototype={
T(){return new C.aDW(B.z8(A.LP,A.nI,A.ub))}}
C.aDW.prototype={
q(){this.d.q()
this.a2()},
aZk(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iO(w,d)},
aa5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aa5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fP3(s),$async$aa5)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZk("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aa5,v)},
c8a(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.i6E(w[u])
if(t!=null){this.aZk(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vU,s,s,s,t.gbNb(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aH(s,s,s,s,B.X(q?A.re:Al.Nu,s,s,s,s,s),s,s,s,new C.exo(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.da,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fAn,s,s,s,1,s,!0)
r=B.z7(t.d,A.bU,t.gc89())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bk,A.q,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c7(p,A.w,new B.an(A.W,s,A.b1,A.r,B.a([r,w,B.ao(32,B.p(s,D.foc,A.f,s,s,new B.o(v,s,B.I(A.bk.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jm,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bur.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([B.p(w,H.amO,A.f,w,w,D.b09,w,56,w,w,w,w,w,56),A.aR,D.fA3,A.am,new B.jJ(this.c,new C.f8_(),w,w,x.cI),A.aR,new B.jJ(this.d,new C.f80(),w,w,x.cl),A.ac,D.fA0],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Ad.Ke,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,L.Z_,D.bv3,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7v.prototype={
T(){return new C.bjE(A.bx)},
gde(){return this.c}}
C.bjE.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZP()
w.d=B.dt(A.fV,new C.eeX(w))},
q(){var w=this.d
if(w!=null)w.a6(0)
this.a2()},
ZP(){return this.cmu()},
cmu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eeV(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bE(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cej(p.c),$async$ZP)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.eeW(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZP,v)},
bP7(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.c_
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FV,v,r,r,r,20),A.au,B.E(B.d("Marriage document session \xb7 "+s.bP7(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ah3,A.ii,r,r,1/0)}}
C.a8n.prototype={
ne(){var w,v,u,t=this
t.xc()
w=t.cx
v=t.c
w.bpX(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pU(B.F(["/S",D.ecH,"/URI",new B.ru(B.Wi(w.as),A.ux,!0)],x.N,u),u))}}
C.a8o.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2j.prototype={
bxt(d,e,f,g,h,i,j,k,l,m){var w=B.eu([D.eb_],x.di)
this.w!==$&&B.aP()
this.w=w},
gcLA(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jO(w,new C.cgv(),B.a3(w).k("jO<co.E,G>")).fd(0,new C.cgw())},
aCu(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hc(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.ts(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jd(d.a,d.b))
s.n(0,"/Border",B.ts(H.aoU))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h_(t.gcLA()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pU(w,x.Y))}}
C.cgx.prototype={}
C.a2B.prototype={}
C.ahX.prototype={}
C.aQH.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.li(d)
q.LQ(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfy(w)
u=x.N
t=x.Y
s=new C.cgx(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bxt(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pU(B.F(["/Type",D.ecF],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8n(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awi.prototype={}
C.aSb.prototype={
h0(d){var w,v,u,t,s=this
s.li(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.ea(u.a,u.b,0,1)
u=d.b
u.i9()
t=s.a
t.toString
u.KY(t)
u.Sl(0)
u.oU(0,v)
w.h0(d)
u.nh(0)}}}
var z=a.updateTypes(["aA<~>()","~(lE)","R(i1)","~()","R(eL)","R(oi)","R(lE)","~(i1)","R(eL,eL)","JJ(Y)","R(nJ)","R(la)","aA<R>()","G(G,i1)","a5<n,@>(i1)","ai<zr>()","n(nJ)","R(a7M)","n(lE)","n(vW)","R(Ey)","G(i1,i1)","n(eL)","r(eL)","cL(eL)","r(hC)","~(hC)","eL(uE,L,L,L,L,G{fx:n,key:n,rotation:L})","eL(n,L,G)","G(oi,oi)","R(zr)","R(n,ai<zr>)","a5<n,@>(oi)","nJ()","Ym(Y)","eL(n,L,L,L,L,L{align:q_,anim:hC,bullets:R,color:G?,delay:G,fx:n,key:n,style:Hw,weight:oP})","a0C(Y)","eL(n,L,L,L,L{anim:hC,delay:G,fx:n,key:n})","aA<~>(oi)","R(ms)","Yk(Y)","a09(Y)","a08(Y)","Pe(Y)","Zv(Y)","eL(uE,L,L,L,L,G,n,n{anim:hC,delay:G,rotation:L,stroke:G,strokeWidth:L})","eL(n,L,L,L,L,L,n,n,G)","eL(L,L,n,G{size:L})","r(ri,L,L)","la()","oi(a5<@,@>)","~(uu)","Ey()","ff(eL)","r(iZ)","Z3(Y)","~(Ep)","Zo(Y)","G(eL,eL)","eL(eL)","a5<n,@>(eL)","eL(a5<@,@>)","lE(lE)","a5<n,@>(lE)","lE(a5<@,@>)","R(jE)","jE()","n(i1)","~(ai<oi>)","S(ai<i1>)","S(i1)","ai<i1>(n?)","acq(Y,G)","~(R(eL,eL))","ad4(Y)","aeL(Y,G)","v(lE,R)","Vw(Y)","ad7(Y)","Vz(Y)","~(mw)","i1(i1)","L(eL)","a_D(Y)","a_f(Y)","i1()","ai<EU>()","aA<~>(ai<i1>)","r(bv<G,i1>)","D(jE)","D(Ey)","aA<~>(hC,~())","r(ai<hC>,hC?,~(hC),v)","R(m5)","ai<jo<mw>>(Y)","jo<mw>(mw)","i1(a5<@,@>)","VK(Y)","eL(n,L,L,L,L,L,G{align:q_,style:Hw,weight:oP})","VL(Y)","r(i1)","~(lZ)","IA(Y,lE,r?)","G(a8o)","aA<ai<a5<n,@>>?>()","n(n)","aA<zp>({paper:n?,photo:dJ?,request:n,template!ld})","aA<a7E>({doc!zp,history:ai<+(n,n)>,instruction!n,photo:dJ?,template!ld})","ad1(Y)"])
C.cEt.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:72}
C.cEu.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:77}
C.cEv.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajM(s):16;--w.c}w.b=A.o.dY(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mt(v,t)
w.b=v-A.o.dY(q,t)
w.a=t
return q},
$S:77}
C.cEw.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOn.prototype={
$1(d){return J.eZ(A.dD.gaN(d),d.byteOffset,d.byteLength)},
$S:1665}
C.ftb.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iI(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iI(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iI(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iI(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1666}
C.bZ2.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:29}
C.bZ3.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:45}
C.bZ5.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fJ7.prototype={
$1(d){return new C.a0C(this.a,this.b,C.i7w(),null)},
$S:z+36}
C.f6s.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f6w.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f6x.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6y.prototype={
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
C.f6t.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6u.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f6v.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f6n.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hE,w,w,w)
return B.ek(B.a([B.bK(!1,D.fmC,w,w,!0,w,w,new C.f6l(d),w,w),B.bK(!1,D.flH,w,w,!0,w,w,new C.f6m(d),w,w)],x.p),w,w,D.Xx,v,w,w,w,w,D.fAG,w)},
$S:20}
C.f6l.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f6m.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f6o.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f6p.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f6C.prototype={
$0(){var w=this.a
return w.m(new C.f6B(w,this.b))},
$S:0}
C.f6B.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f6r.prototype={
$0(){var w=this.a
return w.m(new C.f6q(w,this.b,this.c))},
$S:0}
C.f6q.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f6z.prototype={
$0(){return this.a.a0W(this.b)},
$S:0}
C.f6A.prototype={
$0(){return this.a.OW(0,this.b)},
$S:0}
C.f6F.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f6G.prototype={
$0(){var w=this.a
return w.m(new C.f6E(w,this.b))},
$S:0}
C.f6E.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f6D(),B.U(w).k("M<1,n>")))}},
$S:0}
C.f6D.prototype={
$1(d){return d.a},
$S:z+67}
C.fdE.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h8g(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cC)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oi(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fdF.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fvO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbr())q=n===o.gbr()&&p.b>o.gcB()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fvM.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fvN.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fIC.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fsQ.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fJt.prototype={
$1(d){return new C.Ym(this.a,null)},
$S:z+34}
C.cFP.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFR.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFU.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFT())},
$S:11}
C.cFT.prototype={
$0(){},
$S:0}
C.cFW.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1B(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cFS(r))
if(p<0)q.cj(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahd(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:336}
C.cFS.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFX.prototype={
$1(d){},
$S:28}
C.cFQ.prototype={
$1(d){return new C.Yk(this.b,this.a.gcwe(),null)},
$S:z+40}
C.cFY.prototype={
$1(d){return D.fWE},
$S:z+43}
C.cFL.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.Xc,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([new B.D(D.buQ,B.w(B.a([B.p(w,D.bIQ,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aR,D.fkJ,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f8O,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pU,B.B(B.a([B.E(B.dU(D.frv,new C.cFJ(d),B.di(w,w,w,w,w,w,w,w,w,E.n4,w,w,A.cl,w,new B.b7(B.m(14),A.Y),D.aYr,w,w,w,w)),1),A.au,B.E(B.bG(D.fxp,new C.cFK(d),B.bn(A.bz,w,w,w,w,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.wR,new B.o(D.acL,w,u,v,D.cWx,w,A.n),w,w,w,L.Z_,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1667}
C.cFJ.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cFK.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cFM.prototype={
$0(){return J.nr(this.a.d,new C.cFI(this.b))},
$S:0}
C.cFI.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFH.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.Xc,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bNL,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.aop,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.w(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQX,t,t,t),A.bD,D.fxl],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dh2[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axb(u[1],u[2],u[3],new C.cFF(v,d),!1,t))}q.push(A.am)
q.push(D.bp_)
q.push(A.am)
q.push(new C.axb(A.e6,"Delete book","Remove it from this device",new C.cFG(d),!0,t))
return B.bm(!0,B.p(t,B.w(q,A.F,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.acL,t,r,s,t,t,A.n),t,t,t,A.tI,E.YE,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFF.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cFG.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cFO.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGL,12)],x.V)
return B.dV(B.eH(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f6(A.A,F.anO(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFN.prototype={
$0(){return this.a.c2N()},
$S:0}
C.cFE.prototype={
$0(){return this.a.aXU(0,this.b)},
$S:0}
C.cFD.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cFC.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cFZ.prototype={
$2(d,e){var w=this.a
return w.bBY(J.q(w.d,e))},
$S:42}
C.cF5.prototype={
$0(){var w=this.a
if(w.c!=null)w.AJ()},
$S:0}
C.cF4.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_O("Page "+(v.length+1),"",""))},
$S:0}
C.cF7.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cFf.prototype={
$0(){},
$S:0}
C.cFg.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cF8.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cT.gcA().aJ(this.c)},
$S:0}
C.cF6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFa.prototype={
$0(){return this.a.Qf(this.b)},
$S:0}
C.cFb.prototype={
$0(){return this.a.Qf(this.b)},
$S:0}
C.cFc.prototype={
$0(){var w=this.a
w.m(new C.cF9(this.b))
w.E0()},
$S:0}
C.cF9.prototype={
$0(){return this.a.c=""},
$S:0}
C.cFe.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cFd(w,d))
w.E0()},
$S:z+51}
C.cFd.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFl.prototype={
$2(d,e){if(d)this.a.AJ()},
$S:126}
C.cFh.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AJ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.J(x.q).f.U(D.eXf)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cFi.prototype={
$0(){return this.a.aWS(this.b,-1)},
$S:0}
C.cFj.prototype={
$0(){return this.a.aWS(this.b,1)},
$S:0}
C.cFk.prototype={
$0(){return this.a.c42(0,this.b)},
$S:0}
C.fAh.prototype={
$1(d){return C.hie()},
$S:44}
C.fAi.prototype={
$1(d){return null},
$S:28}
C.fi3.prototype={
$1(d){return null},
$S:28}
C.fBg.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fBf.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:261}
C.fBm.prototype={
$1(d){var w=this.a
return C.h0F(d)===w||C.hmN(d)===w},
$S:z+4}
C.fh6.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.c8C.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAf.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fAg.prototype={
$1(d){return C.fD_(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fv9.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xL,B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fs6,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.Gy,D.fmi,new C.fv7(d),B.bn(A.c_,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.R,B.eC(A.vS,D.ftl,new C.fv8(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wP,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fv7.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fv8.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fva.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fix,w,w,!0,w,w,new C.fv5(d),w,w),B.bG(D.fzH,new C.fv6(d),w)],x.p),w,w,w,D.fBB,w,w,w,w,D.fiq,w)},
$S:20}
C.fv5.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fv6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e9L.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e9J.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9K.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e9M.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e9N.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fBl.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:81}
C.fBh.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.DJ(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1668}
C.fBj.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fa_,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:150}
C.fBk.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hZ,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dV(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hZ,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1669}
C.fBi.prototype={
$2$female$size(d,e){var w=null,v=d?D.aeF:this.a,u=B.I(A.hZ,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acZ,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1670}
C.fMV.prototype={
$1(d){return new C.ad1(this.a,this.b,null)},
$S:z+108}
C.dY5.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.blI:A.Lj,q=B.I(D.je.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.an8,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.je.j(0.35),A.em,10)],x.V),D.bXn,A.n),t,t,t,t,A.xC,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.w(B.a([new B.D(I.YP,B.w(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.w(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.je,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f9g,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ij(!0,t,e,A.y,D.aOi,new C.dY4(w,this.c),v,D.ahW,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mc,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:113}
C.dY4.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acq(w,new C.dY3(this.b,w),null)},
$S:z+72}
C.dY3.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fvd.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fve.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xL,B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvv,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.Gy,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvb(d),B.bn(D.je,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.R,B.eC(A.o6,D.TY,new C.fvc(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wP,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fvb.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fvc.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fvh.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fvi.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xL,B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fjw,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.Gy,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvf(d),B.bn(D.je,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.R,B.eC(A.o6,D.TY,new C.fvg(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wP,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fvf.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fvg.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fvl.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fvm.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xL,B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fpV,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.Gy,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvj(d),B.bn(D.je,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.R,B.eC(A.o6,D.TY,new C.fvk(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wP,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fvj.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fvk.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fOn.prototype={
$1(d){return D.h_p},
$S:z+74}
C.ef_.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bdr:A.Lj,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bQ2,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.em,10)],x.V),D.aou,A.n),v,v,v,v,A.xC,v,v,v)
w=x.p
return B.p(v,B.w(B.a([new B.D(I.YP,B.w(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.w(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lg,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bD,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f6L,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ij(!0,v,e,A.y,D.aOi,new C.eeZ(this.b),19,D.ahW,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mc,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.eeZ.prototype={
$2(d,e){var w=D.QG[e]
return new C.aeL(w,new C.eeY(this.a,w),null)},
$S:z+75}
C.eeY.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fD3.prototype={
$0(){return B.h_D(C.hW_(this.a))},
$S:276}
C.fD2.prototype={
$0(){var w=C.h0Y(this.a)
return"data:image/png;base64,"+A.cT.gcA().aJ(w)},
$S:23}
C.ffc.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.je(d,e),new B.je(w,e+v),new B.je(d+f*14,e),new B.je(w,e-v)],x.J)
B.a1y(this.a,C.fB(4291404327),v)},
$S:654}
C.fOy.prototype={
$1(d){return new C.Vw(this.a,null)},
$S:z+77}
C.eih.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eig())},
$S:30}
C.eig.prototype={
$0(){},
$S:0}
C.eii.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eif(w,d))},
$S:1672}
C.eif.prototype={
$0(){return this.a.x=J.eT(A.dD.gaN(this.b))},
$S:0}
C.eij.prototype={
$1(d){},
$S:28}
C.ehU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ei0.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ei1.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.emr)},
$S:0}
C.ei2.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehW.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c8)},
$S:0}
C.ehX.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ehY.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ehZ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ei_.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcZ(v).Q
v.toString
w.mb(v,A.dV,A.ig)}},
$S:9}
C.ehV.prototype={
$0(){var w=this.a,v=w.z,u=C.fDH(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cHp(C.fDH(t))},
$S:0}
C.ehS.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ehT.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ei8.prototype={
$0(){return B.a6(this.a,!1).lx()},
$S:0}
C.ei9.prototype={
$0(){var w=this.a
return w.m(new C.ei7(w))},
$S:0}
C.ei7.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eia.prototype={
$0(){var w=this.a
return w.m(new C.ei6(w,this.b))},
$S:0}
C.ei6.prototype={
$0(){var w=this.b.b
this.a.e.saW(0,w)
return w},
$S:0}
C.eib.prototype={
$1(d){var w=this.a
return w.m(new C.ei5(w))},
$S:8}
C.ei5.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eic.prototype={
$1(d){var w=this.a
return w.m(new C.ei4(w))},
$S:8}
C.ei4.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eid.prototype={
$0(){var w=this.a
return w.m(new C.ei3(w,this.b))},
$S:0}
C.ei3.prototype={
$0(){var w=this.b
this.a.f.saW(0,w)
return w},
$S:0}
C.eie.prototype={
$1(d){return this.a.ZB()},
$S:2}
C.ehR.prototype={
$0(){return this.a.c7s(this.b)},
$S:0}
C.cci.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:303}
C.ccg.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cch.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCE.prototype={
bkG(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOm(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cDV($.qS().jC(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mJ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkG(d,e)},
$S:1673}
C.fAW.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAY.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dr(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:81}
C.fAX.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h1(t,t,t,t,B.d3(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qr,A.c6,t,A.dP,A.c5)
v=this.a
w.wD(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:33}
C.feN.prototype={
$1(d){var w=A.a.fF(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.feO(),B.U(w).k("a_<1>")).gM(0)},
$S:259}
C.feO.prototype={
$1(d){return d.length!==0},
$S:3}
C.feL.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.feM.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.ccj.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazN()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h0E(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fYv(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcfD(),"\n\n")
d=B.h1(a6,a6,a6,a6,B.d3(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adU(k,q,1.28),j),A.qr,A.c6,a6,A.dP,A.c5)
d.wD(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h0E(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fYv(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adU(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bg,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qr,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azM(s,j))
i.push(new B.a7(s,a6,B.w(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:427}
C.cck.prototype={
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
n=o.gazN()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h0E(f,new B.H(!0,e,a5,i,a5,a5,h,A.cN,A.bn,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fYv(g.length===0?B.a([a6],n):g,l))break}a1=o.adU(i,h,1.28)
a2=new C.ccl(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.IQ,new B.a7(v,a5,a4.f,a5),A.IQ,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bx8,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bg,new B.y(l[2+a3],a5,a1,a5,A.qr,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azM(r,g))
f.push(new B.a7(r,a5,B.w(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.w(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.ccl.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qr,w,w),w)},
$S:1674}
C.fOB.prototype={
$1(d){return new C.Vz(this.a,this.b,null)},
$S:z+79}
C.ejs.prototype={
$1(d){return d.m1()},
$S:1675}
C.ejt.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejr(w,d))},
$S:1676}
C.ejr.prototype={
$0(){var w=this.b
return this.a.d=w.gfu(w)},
$S:0}
C.ejf.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ejg.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ejm.prototype={
$0(){return B.a6(this.a,!1).eN()},
$S:0}
C.ejn.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bC,A.q,2.5)
return B.aC(w,B.p(w,B.b3(w,w,w,new C.bbn(u,v.gawR(),w),A.f3),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ejk(v),new C.ejl(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:35}
C.ejk.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:249}
C.ejl.prototype={
$1(d){var w=this.a
w.m(new C.ejh(w,d,this.b,this.c))},
$S:215}
C.ejh.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawR()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ejo.prototype={
$1(d){var w=this.a
return w.m(new C.ejj(w,this.b))},
$S:8}
C.ejj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ejp.prototype={
$1(d){var w=this.a
return w.m(new C.eji(w,d))},
$S:6}
C.eji.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ejq.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fOR.prototype={
$1(d){return D.h2c},
$S:z+83}
C.eT2.prototype={
$1(d){return this.a.Yg()},
$S:9}
C.eRV.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cT.gcA().aJ(v)},
$S:0}
C.eSi.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eSs.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eRE.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRF.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRC.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRD.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eSb.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eSc(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jx(B.ry(p>0.2?C.fTh(q,B.a4R(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4R(12,12,A.x)
p.push(B.jx(B.de(B.ry(C.fTh(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b1
if(r!=null&&s.aO>0)p.push(B.el(u,B.b0(r).j(s.aO),!0))
r=s.bb
if(r!=null&&s.bz>0){r=B.b0(r).j(s.bz)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWI,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWt,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aM
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aM)],x.O),D.cVb,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.d4V,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d24,u),A.n),A.be))
s=s.au
if(s>0)p.push(B.b3(u,u,u,new C.beW(s,u),A.av))
return new B.an(A.W,u,A.b1,A.r,p,u)},
$S:63}
C.eSc.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.ci,A.bU,!0,q,!1,q,q),o=r.a,n=o.aWu(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c3,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bk
v=o.aS
u=v-1
t=o.bQ
s=o.cJ?-1:1
return B.dV(B.ed(A.A,B.eH(A.A,l,B.fu(A.A,new B.Dh(new B.yO(q,q,n,A.An),p,q),q,B.vJ(s,o.cP?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:610}
C.eSo.prototype={
$0(){return this.a.m(new C.eSn(this.b,this.c))},
$S:0}
C.eSn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSp.prototype={
$1(d){return this.a.m(new C.eSm(this.b,d))},
$S:6}
C.eSm.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSr.prototype={
$0(){return this.a.m(new C.eSq(this.b,this.c))},
$S:0}
C.eSq.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRu.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eRv.prototype={
$1(d){var w=this.a
return w.m(w.gcxD())},
$S:2}
C.eRw.prototype={
$1(d){return this.a.m(new C.eRt())},
$S:2}
C.eRt.prototype={
$0(){},
$S:0}
C.eRx.prototype={
$0(){var w=this.a
return w.m(new C.eRs(w,this.b))},
$S:0}
C.eRs.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eRz.prototype={
$2(d,e){return A.au},
$S:36}
C.eRy.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bE
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b4,A.x,r,w,w),A.n),A.hx,w,94,w,w,w,w,70)
return B.aC(w,new B.a7(70,w,B.w(B.a([r,A.h1,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRr(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:75}
C.eRr.prototype={
$0(){var w=this.a
return w.m(new C.eRo(w,this.b))},
$S:0}
C.eRo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRA.prototype={
$1(d){var w=this.a
return w.m(new C.eRq(w,d))},
$S:8}
C.eRq.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eRB.prototype={
$1(d){var w=this.a
return w.m(new C.eRp(w,d))},
$S:8}
C.eRp.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eSS.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:33}
C.eSZ.prototype={
$1(d){var w=this.a
return w.m(new C.eT_(w,d))},
$S:27}
C.eT_.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eT0.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eST.prototype={
$0(){var w=this.a
return w.m(new C.eSR(w,this.b))},
$S:0}
C.eSR.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eSU.prototype={
$0(){var w=this.a
return w.m(new C.eSQ(w,this.b))},
$S:0}
C.eSQ.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eSV.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eSP(v,w.b,w.c,w.d))},
$S:0}
C.eSP.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eSW.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grE(v))},
$S:0}
C.eSX.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eSY.prototype={
$0(){var w=this.a
return w.m(new C.eSO(w))},
$S:0}
C.eSO.prototype={
$0(){var w=this.a.db
return A.d.h2(w,0,w.length,0)},
$S:0}
C.eSB.prototype={
$1(d){return d.a===this.a.dy},
$S:205}
C.eSC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awy[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awV(new B.n9(new B.bp(n,n,n,n),A.aq,new B.kO(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.be,new C.aZy(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eSA(r,v),2,i))}return B.bW(A.bA,h,A.bq,7,7)},
$S:175}
C.eSA.prototype={
$0(){var w=this.b
return w.m(new C.eSv(this.a,w))},
$S:0}
C.eSv.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eSD.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:223}
C.eSG.prototype={
$0(){var w=this.a
return w.m(new C.eSz(w))},
$S:0}
C.eSz.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eSH.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eSI.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eSJ.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eSK.prototype={
$0(){var w=this.a
return w.m(new C.eSy(w))},
$S:0}
C.eSy.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eSL.prototype={
$0(){var w=this.a
return w.m(new C.eSx(w))},
$S:0}
C.eSx.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eSM.prototype={
$0(){var w=this.b
return w.m(new C.eSw(this.a,w))},
$S:0}
C.eSw.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eSN.prototype={
$1(d){return this.a.fx=d},
$S:223}
C.eSE.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eSF.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eSf.prototype={
$0(){var w=this.a
return w.m(new C.eSe(w))},
$S:0}
C.eSe.prototype={
$0(){var w=this.a
w.p4=null
w.b2C()},
$S:0}
C.eSg.prototype={
$0(){var w=this.a
return w.m(new C.eSd(w,this.b))},
$S:0}
C.eSd.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eSh.prototype={
$0(){var w=this.a
return w.m(w.gco7())},
$S:0}
C.eS7.prototype={
$0(){var w=this.a
return w.m(new C.eS6(w))},
$S:0}
C.eS6.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eS8.prototype={
$0(){var w=this.a
return w.m(new C.eS5(w))},
$S:0}
C.eS5.prototype={
$0(){var w=this.a
w.aF=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eS9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d2u[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awV(new B.n9(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dh(new B.yO(o,o,v.aWu(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.An),B.fO(u,A.A,140,o,A.ci,A.bU,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eS4(v,s),3,n))}return B.bW(A.bA,m,A.bq,10,8)},
$S:175}
C.eS4.prototype={
$0(){var w=this.a
return w.m(new C.eS3(w,this.b))},
$S:0}
C.eS3.prototype={
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
C.eRM.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eRN.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eRO.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eRP.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eRQ.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eRR.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eRS.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eRT.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eRU.prototype={
$1(d){return this.a.aM=d},
$S:6}
C.eR7.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eR8.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eR9.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eRa.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eRb.prototype={
$0(){var w=this.a
return w.m(new C.eR6(w))},
$S:0}
C.eR6.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eRc.prototype={
$1(d){return this.a.b1=d},
$S:223}
C.eRd.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eRG.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eRH.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eRI.prototype={
$1(d){return this.a.au=d},
$S:6}
C.eRJ.prototype={
$1(d){return this.a.bb=d},
$S:223}
C.eRK.prototype={
$1(d){return this.a.bz=d},
$S:6}
C.eRh.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.eRi.prototype={
$1(d){return this.a.bk=d},
$S:6}
C.eRj.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eRk.prototype={
$1(d){return this.a.c3=d},
$S:6}
C.eRl.prototype={
$0(){var w=this.a
return w.m(new C.eRg(w))},
$S:0}
C.eRg.prototype={
$0(){var w=this.a
return w.c3=A.k.E(w.c3+90+180,360)-180},
$S:0}
C.eRm.prototype={
$0(){var w=this.a
return w.m(new C.eRf(w))},
$S:0}
C.eRf.prototype={
$0(){var w=this.a
return w.cJ=!w.cJ},
$S:0}
C.eRn.prototype={
$0(){var w=this.a
return w.m(new C.eRe(w))},
$S:0}
C.eRe.prototype={
$0(){var w=this.a
return w.cP=!w.cP},
$S:0}
C.eSa.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iah(v,w.p4)},
$S:0}
C.eS2.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bm0:B.fO(v,A.A,w,w,A.ci,A.bU,!1,w,!1,w,w)
return C.fB3(d.length===0?"rounded":d,u,e)},
$S:131}
C.eRZ.prototype={
$0(){var w=this.a
return w.m(new C.eRY(w))},
$S:0}
C.eRY.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eS_.prototype={
$0(){var w=this.b
return w.m(new C.eRX(this.a,w))},
$S:0}
C.eRX.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eS0.prototype={
$0(){var w=this.b
return w.m(new C.eRW(this.a,w))},
$S:0}
C.eRW.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eS1.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eSl.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ew(n.chx(),n.r))
l.push(new C.IA(n.cuF(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ew(new B.an(A.W,t,A.b1,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aC(A.c7,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eSk(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:222}
C.eSk.prototype={
$1(d){var w=this.a
return w.m(new C.eSj(w,d,this.b,this.c))},
$S:18}
C.eSj.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eSu.prototype={
$0(){var w=this.a
return w.m(new C.eSt(w,this.b))},
$S:0}
C.eSt.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eRL.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lx()},
$S:0}
C.eT1.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.w(B.a([w.aZc(),B.E(B.av(w.b19(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.w(B.a([B.E(w.aPB(),1),w.aLQ()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.w(B.a([s.aZc(),new B.D(A.hN,B.av(s.b19(u),t,t,t),t),B.E(s.aPB(),1),s.aLQ()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:629}
C.fyk.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eq(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzX(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bn,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,A.O)},
$S:z+98}
C.fyj.prototype={
$3(d,e,f){var w=this,v=C.bzX(),u=w.b?A.H:A.cw,t=w.c?A.cF:A.bn
return C.eq(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdG.prototype={
$1(d){return B.t(d)},
$S:17}
C.fG0.prototype={
$0(){return this.a},
$S:z+15}
C.fmp.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.fmq.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fG2.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fG5.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fG6.prototype={
$0(){return A.d.gI(D.w1)},
$S:z+33}
C.fFZ.prototype={
$1(d){return d.a},
$S:z+16}
C.fG1.prototype={
$1(d){return d.a},
$S:z+16}
C.fDZ.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fE_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fE0.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fyo.prototype={
$0(){return C.cB()},
$S:23}
C.fyr.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cm,s=u?n:0
return C.eq(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dd,!1,null,0,"","",A.bn,A.a5)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dd,!1,null,0,"",j,A.bn,A.a5)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dd,!1,null,0,j,k,A.bn,A.a5)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bn,A.a5)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bn,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bn,A.a5)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,null,0,"",k,A.bn,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dd,!1,j,k,"",l,A.bn,A.a5)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,k,0,l,m,A.bn,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,k,l,m,"",n,A.bn,A.a5)},
$S:z+35}
C.fyq.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f2,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fyp.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lw,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qg,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fyn.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fAP.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hjg.c8(0,A.a.i(s.w).toLowerCase(),new C.fAN(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c8(0,s.r,new C.fAO(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnW(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1680}
C.fAN.prototype={
$0(){return F.aNf(this.a.w)},
$S:177}
C.fAO.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byR("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ia(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:177}
C.feI.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.feJ.prototype={
$1(d){return d.a},
$S:z+18}
C.feK.prototype={
$1(d){return d.b},
$S:z+19}
C.fP2.prototype={
$1(d){return D.h2t},
$S:z+41}
C.eZf.prototype={
$0(){return this.a.x=C.hNJ(this.b,this.c.b)},
$S:0}
C.eZg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eZd.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:381}
C.eZe.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:381}
C.eZc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bS(A.az,null,new C.eZ7(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kC,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b3(s,7)
if(r.length===0){n.m(new C.eZ8(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hp4(o,m.cIc(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eZ9(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eZ7.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eZb(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b4S,A.f,p,p,D.b_U,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.C_:D.C5,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fB3(v,i.b3e(h),u),p)))}t=B.m0(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bm(!0,new B.D(A9.xI,t,p),!0,!1,A.af,!0,!0)
s=new C.eZa(i,d)
m=B.aI(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GS[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.c9(B.w(B.a([D.fol,A.R,t,A.dY,D.eNg,A.at,D.fz2,A.R,B.m0(1.15,l,3,10,10,p,A.dS,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xI,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eZb.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dm
return B.aC(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hy,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eZ6(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1681}
C.eZ6.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eZa.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bE
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.anE,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.dZ(new C.Ni(u.FA(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aC(v,B.w(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZ5(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:131}
C.eZ5.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eZ8.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.eZ9.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYW.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eYX.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eYZ.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eZ_.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eZ0.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eZ1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYY(w,d))},
$S:2}
C.eYY.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eZ2.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eZt.prototype={
$0(){return this.a.f.fL()},
$S:0}
C.eZu.prototype={
$0(){var w=this.a
return w.m(new C.eZs(w))},
$S:0}
C.eZs.prototype={
$0(){return this.a.e=null},
$S:0}
C.eZv.prototype={
$0(){var w=this.a
return w.m(new C.eZr(w))},
$S:0}
C.eZr.prototype={
$0(){return this.a.x=null},
$S:0}
C.eZx.prototype={
$1(d){var w=this.a
return w.m(new C.eZq(w,d))},
$S:32}
C.eZq.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eZy.prototype={
$1(d){var w=this.a
return w.m(new C.eZp(w,d))},
$S:32}
C.eZp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eZz.prototype={
$0(){var w=this.a
return w.m(new C.eZo(w))},
$S:0}
C.eZo.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eZA.prototype={
$1(d){var w=this.a
return w.m(new C.eZn(w,d))},
$S:32}
C.eZn.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZB.prototype={
$1(d){var w=this.a
return w.m(new C.eZm(w,d))},
$S:32}
C.eZm.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZC.prototype={
$0(){var w=this.a
return w.m(new C.eZl(w))},
$S:0}
C.eZl.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.eZD.prototype={
$0(){var w=this.a
return w.m(new C.eZk(w,this.b))},
$S:0}
C.eZk.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eZE.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bNM(D.a2I[v]),null))
return B.bW(A.bA,t,A.bq,8,8)},
$S:175}
C.eZw.prototype={
$1(d){var w=this.a
return w.m(new C.eZj(w,d))},
$S:8}
C.eZj.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eZ3.prototype={
$0(){var w=this.a
return w.m(new C.eZ4(w,this.b,this.c))},
$S:0}
C.eZ4.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eZi.prototype={
$0(){var w=this.a
return w.m(new C.eZh(w,this.b))},
$S:0}
C.eZh.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fP1.prototype={
$1(d){return new C.a08(this.a,this.b,null)},
$S:z+42}
C.eYP.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eYQ.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eYR.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aGa?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eYS.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eYT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYO(w,d))},
$S:2}
C.eYO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eYU.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eYV.prototype={
$0(){var w=this.b
if(A.a.ca(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.he(A.bw,w.length),A.aN))},
$S:0}
C.flF.prototype={
$1(d){return d.a===this.a},
$S:205}
C.eep.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawW(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cPh:D.d4F
t=D.xo.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xo.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bh8(n*6.283,q),A.av),0,0,0)
o=o.x
o=B.bZ(0,B.bOD(B.eH(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bbO.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.w(B.a([B.X(p.a.c?A.eg:A.lV,D.xo,q,q,q,20),A.at,B.f6(A.A,B.nO(A.jx,D.fhU,new C.eeo()),A.f,A.ei)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.p(q,D.fey,A.f,q,q,new B.o(D.xo,q,q,B.m(6),q,q,A.n),q,q,q,q,M.aiC,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:92}
C.eeo.prototype={
$1(d){return D.bVB.aw(0,d)},
$S:67}
C.fG7.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fG8.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:205}
C.fG9.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1682}
C.fGa.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fG3.prototype={
$1(d){return d.a},
$S:z+18}
C.fG4.prototype={
$1(d){return d.b},
$S:z+19}
C.fOf.prototype={
$1(d){return new C.Zv(this.a,this.b,null)},
$S:z+44}
C.dir.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dis.prototype={
$1(d){return d.a===this.a.gai7()},
$S:z+10}
C.dit.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.diw.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dix.prototype={
$0(){var w=this.a
return w.m(new C.div(w,this.b))},
$S:0}
C.div.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.diy.prototype={
$1(d){var w=this.a
return w.m(new C.diu(w,d))},
$S:8}
C.diu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.een.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.fn(w,this.a)
return B.db(w,0,B.dG(e,"count",x.S),B.U(w).c).dK(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1683}
C.fbf.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f2,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fbh.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eq(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bn,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mJ,D.cQ,g,e,f)},
$S:z+46}
C.fbg.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wu(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mJ,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fbe.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fzv.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fzw.prototype={
$0(){return A.d.gI(D.H0)},
$S:z+49}
C.fzx.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fdb.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fFA.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFB.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fFC.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jP,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jP,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fFN.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jP,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jP,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jO,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fFS.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jO,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFT.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jP,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fFU.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cOj[w]
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eL("design_"+(""+1000*u+"_"+t),D.f2,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bn,A.aD,4279310375,A.bh,null,D.bf,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fFV.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mm,A.dv,w/3).l()
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eL("design_"+(""+1000*u+"_"+t),D.f2,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bn,A.aD,4279310375,A.bh,null,D.CI,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fFW.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jO,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFX.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jP,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFY.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jP,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFD.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jO,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jO,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fFE.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jO,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jO,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jO,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eM,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fFF.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jP,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jO,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fFG.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jO,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jO,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fFH.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.l6,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.l6,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.l6,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.l6,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.l6,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fFI.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jP,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eM,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fFJ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mm,A.dv,w/3).l()
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eL("design_"+(""+1000*u+"_"+t),D.f2,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bn,A.aD,4279310375,A.bh,null,D.CI,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kh
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fFK.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j0
$.j0=u+1
u=new C.eL("design_"+(""+1000*v+"_"+u),D.f2,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bn,A.aD,s,A.bh,null,D.fs,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFL.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fFM.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j0
$.j0=t+1
t=new C.eL("design_"+(""+1000*u+"_"+t),D.f2,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bn,A.aD,r,A.bh,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kh
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.di,A.cn,w/2).l()
t=Date.now()
s=$.j0
$.j0=s+1
u=new C.eL("design_"+(""+1000*t+"_"+s),D.f2,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bn,A.aD,r,A.bh,null,D.bf,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jO,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fFO.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jP,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jP,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jP,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jP,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eM,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFP.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.bf,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eM,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eM,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eM,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jP,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fFQ.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eM,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j0
$.j0=u+1
u=new C.eL("design_"+(""+1000*v+"_"+u),D.f2,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bn,A.aD,4279310375,A.bh,null,D.eM,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kh
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fFR.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jP,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jP,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fxl.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fxm.prototype={
$0(){return A.d.gI($.bDz())},
$S:z+52}
C.fld.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.flc.prototype={
$1(d){return C.hUW(d,this.a,this.b)},
$S:z+53}
C.fGg.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vJ(1.0375,1.01875,1)
return new B.fR(v,u,new C.aSb(B.hKK(A.uX,C.hUZ(w.c,w.d,v,u),t)))},
$S:379}
C.dTQ.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTP.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JU,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jx(new B.an(A.W,w,A.b1,A.r,B.a([t,new B.ew(B.b3(w,w,w,new C.be1(u.a,r,q,r),A.av),w),B.av(new B.jJ(r,new C.dTO(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:459}
C.dTO.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hV(B.fO(i,A.A,r,r,A.ci,A.bU,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fV(A.A,0,6.283185307179586,A.x,t,r,new B.mn(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqC(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.de(B.dV(B.w(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKo(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.de(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.w(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eY2.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:67}
C.c8d.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bE
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hJ.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v)
return B.aC(v,new B.a7(112,v,B.w(B.a([w,A.h1,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1684}
C.c8e.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FA(""))},
$S:0}
C.c8f.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.dZ(new C.Ni(v.FA(u),!0,!1,null),!0,null),d.b,new C.c8g(w,this.c,d),v.a===u)},
$S:z+54}
C.c8g.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hp4(u.b,t.c.FA(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fMF.prototype={
$1(d){return new C.Z3(this.a,null)},
$S:z+55}
C.d7E.prototype={
$0(){var w=this.a
w.d=w.gvB().bbb("data:"+this.b+";base64,"+A.cT.gcA().aJ(this.c));++w.r},
$S:0}
C.d7J.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7K.prototype={
$0(){var w=this.a
return w.m(new C.d7I(w))},
$S:0}
C.d7I.prototype={
$0(){return this.a.r++},
$S:0}
C.d7L.prototype={
$1(d){var w=this.a
return w.m(new C.d7H(w,d))},
$S:2}
C.d7H.prototype={
$0(){var w=this.a
return w.d=w.gvB().aDk(this.b)},
$S:0}
C.d7M.prototype={
$0(){var w=this.a
return w.m(new C.d7G(w))},
$S:0}
C.d7G.prototype={
$0(){var w=this.a
return w.d=w.gvB().bbb("")},
$S:0}
C.d7N.prototype={
$1(d){var w=this.a
return w.m(new C.d7F(w,d))},
$S:2}
C.d7F.prototype={
$0(){var w=this.a
return w.d=w.gvB().bbi(this.b)},
$S:0}
C.d7O.prototype={
$0(){var w=this.a
w=w.gvB().bbi(w.gawX().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fME.prototype={
$1(d){var w={}
w.a=this.a
return new B.e1(new C.fMD(w),null)},
$S:21}
C.fMD.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.85),B.c9(B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fw8,A.at,D.fwo,A.aB,new C.aZv(v.a,new C.fMC(v,e,d),!0,w)],x.p),A.F,w,A.e,A.P,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b0s,w,w,w,w,A.Mi,w,w,w)},
$S:160}
C.fMC.prototype={
$1(d){this.b.$1(new C.fMB(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fMB.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fP0.prototype={
$1(d){return D.fYR},
$S:z+57}
C.deq.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.der.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.des.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fCX.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:67}
C.d7l.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cV(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cV(w,q+p,w,q+p*1.2))
u.F(new B.CZ(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aQ(u,v.d)
s.aQ(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.u(w,o),2.2,p)},
$S:672}
C.fD0.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fvp.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fvq.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xL,B.w(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.feP,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.Gy,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fvn(d),B.bn(A.c_,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.R,B.eC(A.o6,D.TY,new C.fvo(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wP,w,w,w,w))],x.p),A.aj,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fvn.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fvo.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cdE.prototype={
$1(d){return d.hG()},
$S:z+59}
C.cdF.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdD.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdN(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hQN(b2.h(0,"type"))
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
n=A.ayo[A.o.D(b4,0,8)]
m=D.cRb[A.o.D(w,0,1)]
l=C.hUo(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.av3[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hXd(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.N(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.N(f)
if(f==null)f=4280172719
e=B.aJ(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aJ(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hkm(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.eq(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cdt.prototype={
$1(d){return d.hG()},
$S:z+62}
C.cdu.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cdq.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdr.prototype={
$1(d){return B.t(d)},
$S:17}
C.cds.prototype={
$1(d){return C.hb2(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdV.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdW.prototype={
$0(){return A.d.gI(D.a2l)},
$S:z+66}
C.cdQ.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cb(d.f))w.n(0,u,d.hG())},
$S:z+7}
C.cdP.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdL.prototype={
$1(d){return new B.M(d,new C.cdM(),B.U(d).k("M<1,S>")).fd(0,new C.cdN())},
$S:z+69}
C.cdM.prototype={
$1(d){return d.f},
$S:z+70}
C.cdN.prototype={
$2(d,e){return d.cb(e)?d:e},
$S:675}
C.cdO.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hGz(d)},
$S:z+71}
C.cdR.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdS.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdT.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fDz.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fDv.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fDw.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fDx.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fDy.prototype={
$2(d,e){return d.b===D.f2&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdz.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i4X(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cdy(),b5.k("J.E"),x.N)
w=B.dd(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pM.az(0,A.k.D(b1,0,1))
u=new C.cdA()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdB(a9,b7.d)
r=new C.cdC(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jC.az(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kD(A.k.D(1-k,0,1),B.dV(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.f2){a4=i.hG()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lw&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b1,A.r,B.a([new B.kD(A.k.D(o,0,1),r.$1(l),a8),new B.kD(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iG(B.wd(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mJ
p.push(s.$5(i.c,i.d,i.e,i.f,C.hmC(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:362}
C.cdy.prototype={
$1(d){return d.a},
$S:z+22}
C.cdA.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdB.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1688}
C.cdC.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7u(v,C.b0D(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dG4.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.dc(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdI.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fGn.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:323}
C.fFu.prototype={
$1(d){return new C.ad7(this.a,this.b,null)},
$S:z+78}
C.eqP.prototype={
$0(){return this.a.PH(this.b,C.i8i(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PH(this.b,C.i8k(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eqR.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PH(this.b,C.i8j(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eqS.prototype={
$0(){Y.hmm()
B.a6(this.a,!1).O(null)},
$S:0}
C.cdx.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1689}
C.cdw.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nD),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lP(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bU:A.du
return B.fO(t,A.A,o,new C.cdv(),A.ci,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1690}
C.cdv.prototype={
$3(d,e,f){return D.abB},
$S:227}
C.fDu.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.db(r,0,B.dG(6,"count",x.S),B.U(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fDt(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1691}
C.fDt.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0D(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fnL.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fnJ(d))
w=B.aI(d,A.bW,x.w).w
v=B.m(22)
u=B.I(A.bE,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fO,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.w(B.a([B.B(B.a([B.E(B.w(B.a([B.d(r.c,q,q,q,q,q,q,A.kg,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zK,q,q,!0,q,q,new C.fnK(p,d),q,B.fx(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Fl,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fM,A.Fu,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:271}
C.fnJ.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).py())B.a6(w,!0).eN()},
$S:0}
C.fnK.prototype={
$0(){var w=this.a.a
if(w!=null)w.a6(0)
B.a6(this.b,!0).eN()},
$S:0}
C.f5y.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dV(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dV(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dV(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dV(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ed(A.A,B.de(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ed(A.A,B.de(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fC(r*3.14159)
return B.fu(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k5(r*3.14159)
return B.fu(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fC(r*1.2)
s.k5(r*0.5)
return B.fu(A.A,B.de(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fC(-r*1.4)
return B.fu(A.a8,B.de(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aIX(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aIX(1-r,t))],x.p),t)
case 16:v=D.b3S.az(0,r)
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ed(A.A,B.de(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mN(r*6.28)
s.jL(r,r,r,1)
return B.fu(A.A,u.b,t,s,!0)
case 20:return B.eH(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t),t)}},
$S:61}
C.dS2.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dS1.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dS0.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hmC(v,w,e)},
$S:61}
C.cdp.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a3,A.a8,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("M<1,cL>")
q=B.C(new B.M(v,new C.cdo(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:362}
C.cdo.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7u(m,new C.UL(d,C.b0D(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d4A.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4z(w))},
$S:11}
C.d4z.prototype={
$0(){return this.a.d++},
$S:0}
C.ee5.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNm.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i4G(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ea(0,w*7,0,1)
s.fC(Math.sin(t)*0.32)
s.k5(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jL(w,w,w,1)
return B.fu(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dV(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.de(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:61}
C.eVG.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fE
return w},
$S:1692}
C.fB4.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdE()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqv(u,t,r),A.av))
w.push(B.nu(s.d,A.aq,new C.bey(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpv(u,q,t,r),A.av))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b1,A.r,w,r),r),r,r,r)},
$S:242}
C.fqE.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.ex2.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CK(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.ex0(),new C.ex1(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1693}
C.ex0.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:196}
C.ex1.prototype={
$0(){return J.fp(this.a)},
$S:1695}
C.etq.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etr.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ets.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ev0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euP.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.euQ.prototype={
$1(d){return d.hG()},
$S:z+81}
C.esO.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ew8.prototype={
$0(){this.a.tx()},
$S:0}
C.ewZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K_()},
$S:0}
C.euZ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K_()},
$S:0}
C.ewM.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ewN.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewO.prototype={
$1(d){return d.a},
$S:z+22}
C.ewP.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:255}
C.ewQ.prototype={
$0(){return B.jP(!0,null,!0,!0,null,null,!1)},
$S:686}
C.esc.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ex_.prototype={
$0(){},
$S:0}
C.eu7.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()
w.K_()},
$S:0}
C.esa.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xs()},
$S:0}
C.esb.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xs()},
$S:0}
C.euu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.euv.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()
w.K_()
w.z="Home"},
$S:0}
C.euw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eu6.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TX,w,w,!0,w,w,new C.eu5(d),w,w)],x.p),w,w,w,D.fxV,w,w,w,w,D.ffg,w)},
$S:20}
C.eu5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eu3.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TX,w,w,!0,w,w,new C.eu2(d),w,w)],x.p),w,w,w,D.fje,w,w,w,w,D.fgZ,w)},
$S:20}
C.eu2.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eu4.prototype={
$0(){},
$S:0}
C.etm.prototype={
$1(d){return this.a.b_v(C.bBA(d))},
$S:z+7}
C.etn.prototype={
$1(d){return this.a.aeI(C.bBA(d))},
$S:z+7}
C.eud.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b0,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fxZ,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Po(A.vG,D.awq,"HATI YA KUHOWA","Hati ya mahari",new C.eu8(d),w),A.R,new C.Po(A.hb,D.d2v,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eu9(d),w),A.R,new C.Po(A.i3,D.cPn,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eua(d),w),A.R,new C.Po(A.hP,D.cNE,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eub(d),w)],v)
if(this.a.gabc())A.d.v(u,B.a([A.R,new C.Po(A.j1,D.cyI,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.euc(d),w)],v))
return B.bm(!0,B.c9(B.w(u,A.aj,w,A.e,A.P,0,A.p),A.r,w,A.y,w,E.xL,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:26}
C.eu8.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eu9.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eua.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eub.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.euc.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eue.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()},
$S:0}
C.ese.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.esf.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mk(r,v.f+1,q);++v.f
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
C.eup.prototype={
$1(d){return d.b===D.lw},
$S:z+4}
C.euq.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e1(new C.eun(w,this.a,v),null)},
$S:21}
C.eun.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.euo(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bo:A.bK,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bE:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.w(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bD,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.euj(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.C5[w]
v.a=null
t=v.a=u.a
a1.push(new C.bh2(t,u.b,p.a===t,i,k,new C.euk(v,m),q))}a1=B.bW(A.bA,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.C_[w]
s.a=null
t=s.a=r.a
u.push(new C.bh1(t,r.b,p.b===t,k,j,new C.eul(s,m),q))}return B.bm(!0,B.p(q,B.c9(B.w(B.a([d,A.aR,a0,A.R,a1,A.by,v,A.R,B.bW(A.bA,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.eC(D.bRI,D.fAp,new C.eum(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aYY,q,q,q,q)),q)],e),A.F,q,A.e,A.P,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tI,D.btA,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.euo.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.euh(w.a,d,e))
w.b.d2(new C.eui(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1698}
C.euh.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eui.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.euj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euk.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eul.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eum.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gw(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d2(new C.eug(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eug.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eus.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eut.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eur(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mk(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xs()},
$S:0}
C.eur.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.euK.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.euL.prototype={
$1(d){return d.w},
$S:z+82}
C.euM.prototype={
$2(d,e){return d>e?d:e},
$S:89}
C.euN.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bo:A.aQ,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bE:A.aL,A.q,1),n=B.aI(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.w(B.a([B.B(B.a([B.p(v,D.bLq,A.f,v,v,D.b_k,v,38,v,v,v,v,v,38),A.bd,B.E(B.w(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.euH(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.co,B.hK(v,new C.euI(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ag,new C.euJ(),!0),v)],l),A.F,v,A.e,A.P,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tI,A.YK,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.euH.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euJ.prototype={
$2(d,e){return A.ac},
$S:36}
C.euI.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cw
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bOx,q,q,q,new C.euF(s,w,p),q,q,q,q,"Add an icon",q)
return B.w(B.a([new B.D(D.bvP,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.m(16),A.Y),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aYD),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.euG(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:688}
C.euF.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iaq(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.oK(q.a,o,n,s)
r.bO(0,new B.bb(m,B.he(A.bw,o+s.length),A.aN))
l.aiM(k,m)
l.pj()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euG.prototype={
$1(d){var w=this.a
w.aiM(this.b.a,d)
w.pj()},
$S:2}
C.euO.prototype={
$0(){},
$S:0}
C.euf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.esv.prototype={
$0(){},
$S:0}
C.esw.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hnW(this.b,w,!0)
w=this.a
w.r=null
w.xs()},
$S:0}
C.esx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esy.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.esu(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mk(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xs()},
$S:0}
C.esu.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.euU.prototype={
$1(d){return B.oO(new C.euT(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:136}
C.euT.prototype={
$2(d,e){var w=null,v=x.p
return B.w(B.a([new B.D(E.aih,B.w(B.a([D.fvx,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ij(!0,w,e,A.y,D.eTd,new C.euS(this.a,this.b),20,A.tL,w,A.ag,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:360}
C.euS.prototype={
$2(d,e){var w=null,v=D.H0[e],u=C.hGu(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fD,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eNc,A.f,w,w,new B.o(A.dM.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nh,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.w(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euR(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.euR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdH(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euV.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xs()},
$S:0}
C.er9.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rt(4294967295,null,0,0,null,C.cB(),D.mI,"","","",D.dd),s=this.b
C.cdU(t,s,u)
w=v.gds()
if(w!=null&&s!==D.CH){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.est.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j0
$.j0=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.hb2(q));++v.f},
$S:0}
C.esr.prototype={
$0(){var w=this.a
A.d.cw(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ev2.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cw(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.esn.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.esm(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.esm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev1.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.esd.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:255}
C.esP.prototype={
$0(){return B.jP(!0,null,!0,!0,null,null,!1)},
$S:686}
C.ewK.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ewL.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asW(w).fL()
v=u.Wm(w)
v.ste(B.he(A.bw,v.a.a.length))},
$S:9}
C.ew9.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xl(v)
if(u!=null&&u.b===D.cQ)w.Wm(u).saW(0,u.r)}else w.w=null},
$S:0}
C.era.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,v.gql().e.l(),A.aD,"",4280640491,24,A.bn,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.L(v.gds().z,u)
v.r=u.a},
$S:0}
C.er7.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,4279310375,A.aD,"",v.gql().c.j(0.25).l(),24,A.bn,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gql().c.l(),2,"",0,0,"",D.cm,D.f2,0.25,0.3,0.3)
A.d.L(v.gds().z,u)
v.r=u.a},
$S:0}
C.eqY.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lw,0.6,0.2,0.18),v=this.a
A.d.L(v.gds().z,w)
v.r=w.a},
$S:0}
C.eqV.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bYy],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajn().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bJ8,r,r,r,r,new C.eqU(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eqU.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eqW.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ag(),null),s=C.eq(A.bh,!1,4279310375,A.aD,u.b,4280640491,24,A.bn,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cm,D.a4Y,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gds().z,s)
t.r=s.a},
$S:0}
C.esp.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.esq.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gds().z,new C.eso(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eso.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.erC.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f2){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.erD(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.erD.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.erH.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.erI(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gds()
if(t!=null)v.$1(t)}},
$S:0}
C.erI.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.erF.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.erG(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.erG.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f_(w,new C.erE()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.erE.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.erB.prototype={
$0(){return C.cdU(this.b,this.c,this.a.gql())},
$S:0}
C.euE.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.ewT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewU.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ewV.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewW.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.bg(s,new C.ewS(v))
if(w>=0)t.d[w]=v.b}if(v.a.gS5()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hG()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xs()
t.K_()}},
$S:0}
C.ewS.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ewp.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abg(),s=w.b,r=u.abh(A.fd,A.kw,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.B(B.a([B.E(u.aUz(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bJe,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aUz(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.by,u.aUC(A.fd,d,D.bFj,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bXd(A.aP,d,A.tY,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUA(d,"Not now"))
return new C.JJ(B.w(p,A.aj,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.ewo.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JJ(B.w(B.a([v.abg(),A.N,v.abh(A.aP,D.bEZ,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.42),B.hK(w,new C.ewm(v,u,d),u.length,w,w,A.ag,new C.ewn(),!0),w),A.aB,v.aUA(d,"Cancel")],x.p),A.aj,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.ewn.prototype={
$2(d,e){return A.R},
$S:36}
C.ewm.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.an8,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bVw,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.w(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nA,w,w,w),A.cS,B.d("Updated "+this.a.PI(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewl(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.ewl.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ewi.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abg()
t=t.abh(A.aF,A.u6,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JJ(B.w(B.a([s,A.N,t,A.by,B.B(B.a([B.E(B.dU(A.a8g,new C.ewg(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.au,B.E(B.bG(D.fhy,new C.ewh(d),B.bn(A.fd,u,u,u,A.c,u,A.cl,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.ewg.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ewh.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ewk.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abg(),s=w.b,r=u.abh(A.aV,A.eg,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auf("Names",""+w.c),1),A.ab,B.E(u.auf("Fields",""+w.d),1),A.ab,B.E(u.auf("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bk,v,v,v,A.c,v,A.xA,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.JJ(B.w(B.a([t,A.N,r,A.aR,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.ny,v,v,v),new C.ewj(d),o),A.R,u.aUB(d,"Stay here",!1)],q),A.aj,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.ewj.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eti.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eth.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ewa.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewJ.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_f(A.d.dM(w.d,new C.ewH(v),new C.ewI(v)).hG(),w.f,null)},
$S:z+84}
C.ewH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewI.prototype={
$0(){return this.a},
$S:z+85}
C.er2.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hs,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bL0,w,w,w,w,new C.er0(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.ffA,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMa,w,w,w,w,new C.er1(d),!1,w,w,w,w,w,D.fBC,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dp,w,w,w),w,w,w))
return B.bm(!0,B.w(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.er0.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.er1.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.er3.prototype={
$0(){var w=this.b,v=w.c,u=C.eq(A.bh,!1,4279310375,A.aD,v,4280640491,24,A.bn,A.a5,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cm,D.RL,0.88,0.06,0.08)
v=this.a
A.d.L(v.gds().z,u)
v.r=u.a},
$S:0}
C.er4.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j0
$.j0=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j0
$.j0=k+1
m.push(new C.eL(""+1000*l+"_"+k,D.RL,0.04,0.06,0.92,0.88,v,24,A.a5,A.bn,A.aD,4279310375,A.bh,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lE(""+1000*p+"_"+o,r+n,"",D.qf,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.er8.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.ku(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eq(A.bh,!1,4279310375,A.aD,t,4280640491,24,A.bn,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l5,0.35,0.55,0.62)
A.d.L(u.gds().z,w)
u.r=w.a},
$S:0}
C.er_.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2j(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.eg(v.db,"marriage_sign_",""),4280640491,24,A.bn,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l5,s,u,t)
A.d.L(p.gds().z,q)
A.d.bq(p.gds().z,new C.eqZ(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i4p(p)}},
$S:0}
C.eqZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ev_.prototype={
$0(){var w=this.a,v=this.b
w.b2j(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ewR.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.etl.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.etk())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.etk.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.erL.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.erM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tx()},
$S:9}
C.eqX.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bn,A.a5,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lw,0.8,0.1,0.1),v=this.a
A.d.L(v.gds().z,w)
v.r=w.a},
$S:0}
C.esN.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.er5.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gds().z,v)
w.r=v.a},
$S:0}
C.ere.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.erf.prototype={
$0(){var w=this.b.hG(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eq(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gds().z,f)
t.r=f.a},
$S:0}
C.erg.prototype={
$0(){var w=this.a.gds().z,v=this.b,u=A.d.bg(w,new C.erd(v))
if(u>=0&&u<w.length-1){A.d.cw(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.erd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.err.prototype={
$0(){var w=this.a.gds().z,v=this.b,u=A.d.bg(w,new C.erc(v))
if(u>0){A.d.cw(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.erc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eru.prototype={
$0(){return this.a.as=A.bh},
$S:0}
C.erv.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.erw.prototype={
$0(){return this.a.as=A.dN},
$S:0}
C.erx.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ery.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.erz.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.erA.prototype={
$1(d){return d.length!==0},
$S:3}
C.erh.prototype={
$0(){var w=this.a,v=w.gds().z,u=C.cB()
A.d.L(v,C.CP(w.gql().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gds().z
v=C.cB()
A.d.L(u,C.iU(A.bh,!1,w.gql().d.l(),A.aD,18,A.bn,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eri.prototype={
$0(){var w,v=this.a,u=v.gds().z,t=C.cB()
A.d.L(u,C.CP(v.gql().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gds().z
u=C.cB()
w=C.bCi()
A.d.L(t,C.iU(A.L,!1,v.gql().e.l(),A.aD,12,A.bn,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.erj.prototype={
$0(){A.d.L(this.a.gds().z,C.CP(1727914055,0.12,C.cB(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.erk.prototype={
$0(){var w=4279310375
A.d.L(this.a.gds().z,C.CP(w,0.08,C.cB(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.erl.prototype={
$0(){var w=this.a,v=w.gds().z,u=C.cB()
A.d.L(v,C.CP(w.gql().c.j(0.35).l(),0.12,u,D.CI,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gds().z,C.iU(A.bh,!1,4279310375,A.aD,18,A.bn,A.a5,0.15,C.cB(),"Important note",0,D.qg,0.5,0.38,0.52))},
$S:0}
C.erm.prototype={
$0(){var w=this.a
A.d.L(w.gds().z,C.CP(4294507260,0.78,C.cB(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gds().z,C.iU(A.bh,!1,4279179050,A.aD,16,A.bn,A.a5,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCi()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.ern.prototype={
$0(){var w=this.a
A.d.L(w.gds().z,C.CP(4294897802,0.28,C.cB(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gds().z,C.iU(A.bh,!1,4285611794,A.aD,15,A.bn,A.a5,0.24,C.cB(),"Sticky note",0,D.aG_,0.26,0.64,0.14))},
$S:0}
C.ero.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gds().z,C.CP(4293060848,0.04,C.cB(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gds().z,C.CP(w,0.04,C.cB(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.erp.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gds().z,C.iU(A.bh,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HW,0.42,0.06,0.18))
A.d.L(v.gds().z,C.iU(A.bh,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.un,0.42,0.52,0.18))},
$S:0}
C.erq.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gds().z,C.CP(858088427,0.62,C.cB(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gds().z,C.CP(856004201,0.62,C.cB(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gds().z,C.iU(A.bh,!1,w,A.aD,20,A.bn,A.H,0.1,C.cB(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gds().z,C.iU(A.bh,!1,w,A.aD,20,A.bn,A.H,0.1,C.cB(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.ers.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gds().z,C.CP(4294967295,0.36,C.cB(),D.bf,w,2,0.24,0.38,0.28))
A.d.L(v.gds().z,C.iU(A.L,!1,w,A.aD,14,A.bn,A.a5,0.12,C.cB(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.ert.prototype={
$0(){return C.cdU(this.b,D.RM,this.a.gql())},
$S:0}
C.esM.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6C.t(0,d),t=this.a
return t.b7i(d,v===d,A.aZ,this.c,new C.esL(t,u,d,w),u)},
$S:z+25}
C.esL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bD4(r,new C.esK(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esK.prototype={
$0(){return this.a.d2(new C.esJ(this.b,this.c))},
$S:0}
C.esJ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.er6.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rt(4294967295,null,0,0,null,C.cB(),D.mI,"","","",D.dd),s=this.b
C.cdU(t,s,u)
w=v.gds()
if(w!=null&&s!==D.CH){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.erP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iat(p,q.d,s,new C.erO(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tx(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erO.prototype={
$1(d){return this.bk6(d)},
bk6(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.erN(t,d))
w=2
return B.b(t.tx(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.erN.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.erQ.prototype={
$0(){return this.a.bI3()},
$S:0}
C.erR.prototype={
$0(){return this.a.aPO("Class Presentation",!0)},
$S:0}
C.erS.prototype={
$1(d){return this.a.bJ_(d.b,this.b,d.a)},
$S:z+88}
C.ess.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.euD.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eG,x.w).w.f.d),new B.e1(new C.euC(this.a,this.b),null),null)},
$S:59}
C.euC.prototype={
$2(d,e){return B.oO(new C.euB(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:501}
C.euB.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bE:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b0,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.w(B.a([A.R,r,new B.D(A.ahJ,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zK,v,v,!0,v,v,new C.euz(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aSz(u,!0,!0,new C.euA(p,w.d))],q),e,D.brr,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kL,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.euz.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euA.prototype={
$0(){this.b.$1(new C.eux())
var w=this.a
if(w.c!=null)w.m(new C.euy())},
$S:0}
C.eux.prototype={
$0(){},
$S:0}
C.euy.prototype={
$0(){},
$S:0}
C.ewb.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.ewc.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.de(B.ed(A.A,new C.ayq(this.a,null),0.94+w*0.06,null,null),w)},
$S:359}
C.ewd.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.ewe.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.de(B.ed(A.A,new C.bco(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:359}
C.ewf.prototype={
$0(){return A.d.cj(this.a.d,0,C.VI(this.b))},
$S:0}
C.erb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.pz.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.ce.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_y,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tY(A.fw,B.p(p,B.w(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:304}
C.esg.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.esh.prototype={
$1(d){return d.length!==0},
$S:3}
C.esi.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jJ
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a04:A.Bs}return w},
$S:690}
C.esl.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.az(0,A.k.E(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mX.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ku(v.w)?A.vG:A.q3,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PI(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PI(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PI(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.PI(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PI(v.f)
r=k.bIY(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a7F(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.Mf,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o4,t?A.aA:A.bJ,l,l,l,l),l,l,l,new C.esj(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.esk(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d8,l,l,l,l)},
$S:92}
C.esk.prototype={
$0(){return this.a.aeI(this.b)},
$S:0}
C.esj.prototype={
$0(){return this.a.AO(this.b,this.c)},
$S:0}
C.etM.prototype={
$0(){var w=this.a
w.b5X()
w.m(new C.etL())},
$S:0}
C.etL.prototype={
$0(){},
$S:0}
C.etN.prototype={
$1(d){return this.a.aiM(this.b.a,d)},
$S:2}
C.etO.prototype={
$0(){this.a.d2(new C.etK(this.b))},
$S:0}
C.etK.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.etP.prototype={
$0(){this.a.d2(new C.etJ(this.b))},
$S:0}
C.etJ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.etQ.prototype={
$0(){this.a.d2(new C.etI(this.b))},
$S:0}
C.etI.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mO},
$S:0}
C.etR.prototype={
$0(){this.a.d2(new C.etH(this.b))},
$S:0}
C.etH.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.etS.prototype={
$0(){var w=this.a
w.d2(new C.etG(w,this.b))},
$S:0}
C.etG.prototype={
$0(){var w=this.b
return w.as=this.a.c2X(w.as)},
$S:0}
C.etT.prototype={
$0(){return this.a.d2(new C.etF(this.b))},
$S:0}
C.etF.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etU.prototype={
$0(){return this.a.d2(new C.etE(this.b))},
$S:0}
C.etE.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etx.prototype={
$0(){return this.a.a1R(this.b.a)},
$S:0}
C.ety.prototype={
$0(){this.a.a_n()
return null},
$S:0}
C.etz.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bW,x.w).w.a.a<900)w.af0()
else w.m(new C.etw(w))},
$S:0}
C.etw.prototype={
$0(){return this.a.as=!0},
$S:0}
C.etA.prototype={
$0(){this.a.d2(new C.etv(this.b))},
$S:0}
C.etv.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.etB.prototype={
$0(){return this.a.d2(new C.etu(this.b))},
$S:0}
C.etu.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etC.prototype={
$0(){return this.a.d2(new C.ett(this.b))},
$S:0}
C.ett.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etD.prototype={
$0(){return this.a.azj(null)},
$S:0}
C.esF.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.esG.prototype={
$0(){this.a.a9O()
return null},
$S:0}
C.esI.prototype={
$1(d){return this.bk7(d)},
bk7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JR(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bS(A.az,null,new C.esA(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d2(new C.esB(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.esC(r))
s=s.c.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d2(new C.esD(r))
s=s.c.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hp3(q,new C.Ep(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d2(new C.esE(r,p))
s=s.c.J(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agE(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.esA.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e9F],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bL7:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.esz(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dp,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.w(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.esz.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.esB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esC.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.esD.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.esE.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.esH.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zC(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zC(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zC(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agE(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eeJ,q,v,u,B.zC(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:130}
C.ewX.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCf(w,v)}},
$S:0}
C.ewY.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.etX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bVq:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bK
if(s)v=A.c
else v=this.b?A.aS:A.br
return new B.D(A.fB,B.aC(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,A.lQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.etW(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:139}
C.etW.prototype={
$0(){var w=this.a
return w.m(new C.etV(w,this.b))},
$S:0}
C.etV.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.etY.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2T:E.aww
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbMp():t.gbIo()
return B.ht(B.aC(u,B.p(u,D.amB,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1703}
C.etZ.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i9J(v,w.a.c)},
$S:0}
C.evl.prototype={
$0(){return this.b.v9(this.a.a)},
$S:0}
C.evm.prototype={
$0(){return this.a.v9(D.mI)},
$S:0}
C.evn.prototype={
$0(){return this.a.v9(D.HU)},
$S:0}
C.evy.prototype={
$0(){return this.a.v9(D.HV)},
$S:0}
C.evJ.prototype={
$0(){return this.a.v9(D.HT)},
$S:0}
C.evU.prototype={
$0(){return this.a.q6("lab_report")},
$S:0}
C.ew0.prototype={
$0(){return this.a.q6("rubric")},
$S:0}
C.ew1.prototype={
$0(){return this.a.q6("minutes")},
$S:0}
C.ew2.prototype={
$0(){return this.a.q6("agenda")},
$S:0}
C.ew3.prototype={
$0(){return this.a.q6("timeline")},
$S:0}
C.ew4.prototype={
$0(){return this.a.q6(this.b.a)},
$S:0}
C.evo.prototype={
$0(){this.a.Vv()
return null},
$S:0}
C.evp.prototype={
$0(){this.a.Vp()
return null},
$S:0}
C.evq.prototype={
$0(){return this.a.q6("table")},
$S:0}
C.evr.prototype={
$0(){return this.a.q6("sticky")},
$S:0}
C.evs.prototype={
$0(){return this.a.q6("divider")},
$S:0}
C.evt.prototype={
$0(){return this.a.q6("header_bar")},
$S:0}
C.evu.prototype={
$0(){return this.a.p_(D.bf)},
$S:0}
C.evv.prototype={
$0(){return this.a.p_(D.eM)},
$S:0}
C.evw.prototype={
$0(){return this.a.p_(D.jO)},
$S:0}
C.evx.prototype={
$0(){return this.a.p_(D.CI)},
$S:0}
C.evz.prototype={
$0(){return this.a.p_(D.jP)},
$S:0}
C.evA.prototype={
$0(){return this.a.p_(D.l6)},
$S:0}
C.evB.prototype={
$0(){return this.a.p_(D.fs)},
$S:0}
C.evC.prototype={
$0(){this.a.Hd()
return null},
$S:0}
C.evD.prototype={
$0(){this.a.Nc()
return null},
$S:0}
C.evE.prototype={
$0(){return this.a.q6("quote")},
$S:0}
C.evF.prototype={
$0(){return this.a.a7X()},
$S:0}
C.evG.prototype={
$0(){this.a.a_t()
return null},
$S:0}
C.evH.prototype={
$0(){var w=this.a
return w.m(new C.evb(w))},
$S:0}
C.evb.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.evI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.evj(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evj.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.evK.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jS()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6D.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b0
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6D.t(0,q))u.push(B.ao(s,B.p(s,D.NX,A.f,s,s,D.E0,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aC(s,B.ht(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.evi(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.evi.prototype={
$0(){this.a.a8e(this.b)
return null},
$S:0}
C.evL.prototype={
$0(){this.a.a8d(this.b)
return null},
$S:0}
C.evM.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hGv(d),p=this.a,o=B.m(8),n=p.gds()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.b0
v=p.gds()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rt(4294967295,r,0,0,r,"preview_"+w,D.qf,"","","",D.dd)
C.hm_(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hnk(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.an9,A.f,r,r,D.E0,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iZ,B.aC(r,B.w(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.evh(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.evh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gds()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d2(new C.ev7(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev7.prototype={
$0(){return C.hm_(this.a,this.b.a)},
$S:0}
C.evk.prototype={
bk8(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6C.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bk8(d,e)},
$S:z+91}
C.ew5.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("M<1,r>")
v=B.C(new B.M(d,new C.ew7(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c9(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.ew7.prototype={
$1(d){var w=this
return w.a.b7i(d,w.b===d,w.c,w.d,new C.ew6(w.e,d),!D.a6C.t(0,d))},
$S:z+25}
C.ew6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.evN.prototype={
$1(d){this.b.$2(d,new C.evg(this.a,d,this.c))
return null},
$S:z+26}
C.evg.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bD4(u,new C.ev6(v,this.c,w),w)},
$S:0}
C.ev6.prototype={
$0(){return this.a.d2(new C.ev4(this.b,this.c))},
$S:0}
C.ev4.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.evO.prototype={
$1(d){this.b.$2(d,new C.evf(this.a,d))
return null},
$S:z+26}
C.evf.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fPP(u,new C.ev5(v,w),w)},
$S:0}
C.ev5.prototype={
$0(){var w=this.a
return w.d2(new C.ev3(w,this.b))},
$S:0}
C.ev3.prototype={
$0(){return this.a.gds().r=this.b},
$S:0}
C.evP.prototype={
$0(){var w=this.a
return w.m(new C.eve(w))},
$S:0}
C.eve.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.evQ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCf(w,v)}},
$S:0}
C.evR.prototype={
$0(){this.a.HZ()
return null},
$S:0}
C.evS.prototype={
$0(){return this.a.a7X()},
$S:0}
C.evT.prototype={
$0(){var w=this.a,v=w.jS()
if(v!=null&&v.b===D.cQ)w.d2(new C.evd(v))},
$S:0}
C.evd.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.evV.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.evW.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fb(v,!0)
return null},
$S:0}
C.evX.prototype={
$0(){this.a.d2(new C.evc(this.b))},
$S:0}
C.evc.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.evY.prototype={
$0(){this.a.d2(new C.eva(this.b))},
$S:0}
C.eva.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.evZ.prototype={
$0(){this.a.d2(new C.ev9(this.b))},
$S:0}
C.ev9.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mO},
$S:0}
C.ew_.prototype={
$0(){this.a.d2(new C.ev8(this.b))},
$S:0}
C.ev8.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erK.prototype={
$1(d){return this.bk5(d)},
bk5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d2(new C.erJ(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:200}
C.erJ.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ews.prototype={
$0(){var w=this.a
return w.d2(new C.ewr(w,this.b))},
$S:0}
C.ewr.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ewt.prototype={
$0(){var w=this.a
return w.d2(new C.ewq(w,this.b))},
$S:0}
C.ewq.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.esS.prototype={
$0(){return this.a.d2(new C.esR(this.b))},
$S:0}
C.esR.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esT.prototype={
$0(){return this.a.d2(new C.esQ(this.b))},
$S:0}
C.esQ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etp.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.aoS,new C.eto(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eto.prototype={
$1(d){var w=null
return B.zC(B.d(d.b,w,w,w,w,w,w,A.m8,w,w,w),48,d,x.fO)},
$S:z+95}
C.ewF.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ewE.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kg()?q:new C.ewC(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.b0:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cu:A.c
t=B.bZ(0,C.hnk(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aC(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nw,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aiD,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ewD(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:75}
C.ewD.prototype={
$0(){var w=this.a
return w.m(new C.ewy(w,this.b))},
$S:0}
C.ewy.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K_()},
$S:0}
C.ewC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bS(null,null,new C.ewz(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ewA(q,s))
q.aRi()}else if(r==="del"){q=t.a
q.m(new C.ewB(q,s))
q.aQq()}else if(r==="up")t.a.b2w(s,s-1)
else if(r==="down")t.a.b2w(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewz.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMM,w,w,w,w,new C.ewu(d),!1,w,w,w,w,w,w,w,D.fgx,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMF,w,w,w,w,new C.ewv(d),!1,w,w,w,w,w,w,w,A.ws,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLX,w,w,w,w,new C.eww(d),!1,w,w,w,w,w,w,w,D.foC,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNZ,w,w,w,w,new C.ewx(d),!1,w,w,w,w,w,w,w,D.fgm,w,w,w))
return B.bm(!0,B.w(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.ewu.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.ewv.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.eww.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.ewx.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.ewA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ewB.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ewG.prototype={
$0(){return this.a.a7X()},
$S:0}
C.es9.prototype={
$0(){var w=this.a
w.b5X()
w.azj(null)},
$S:0}
C.es8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c0(A.kE,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.es7(this.a,e.b,e.d,q),B.U(r).k("M<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:362}
C.es7.prototype={
$1(d){var w=this
return w.a.bEj(d,w.b,w.c,w.d)},
$S:z+23}
C.erX.prototype={
$0(){var w=this
if(w.b){w.a.Nl(w.c)
return}if(w.d){w.a.a7V(w.c)
return}if(w.e){w.a.agk(w.c)
return}if(w.f)w.a.b6s(w.c)},
$S:0}
C.erY.prototype={
$0(){this.a.Nl(this.b)
return null},
$S:0}
C.erZ.prototype={
$0(){return this.a.a1R(this.b.a)},
$S:0}
C.es_.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.erW(u,d,w.c,w.d))
v.HE()
v.of()
v.pj()},
$S:18}
C.erW.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.es0.prototype={
$1(d){return this.a.aiM(this.b.a,d)},
$S:2}
C.es2.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h0O(w))u.a.Nl(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6s(v)},
$S:0}
C.es1.prototype={
$0(){return this.a.a1R(this.b.a)},
$S:0}
C.es3.prototype={
$1(d){var w=this,v=w.a
v.m(new C.erV(w.b,d,w.c,w.d))
v.HE()
v.of()
v.pj()},
$S:18}
C.erV.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.es4.prototype={
$1(d){var w=this.a
w.m(new C.erU(this.b,d))
w.HE()
w.of()
w.pj()},
$S:215}
C.erU.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.es5.prototype={
$0(){var w=this.a
w.m(new C.erT(this.b))
w.HE()
w.of()
w.pj()},
$S:0}
C.erT.prototype={
$0(){this.a.r=C.hmP()},
$S:0}
C.es6.prototype={
$0(){return this.a.a1R(this.b.a)},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
return w.m(new C.eu_(w))},
$S:0}
C.eu_.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eu1.prototype={
$1(d){return this.a.cBT(this.b.a,d)},
$S:2}
C.et5.prototype={
$1(d){var w
this.a.d2(d)
w=this.b
if(w!=null)w.$0()},
$S:173}
C.et6.prototype={
$1(d){return this.a.$1(new C.et4(this.b,d))},
$S:6}
C.et4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.et7.prototype={
$1(d){return this.a.$1(new C.et3(this.b,d))},
$S:6}
C.et3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.et8.prototype={
$1(d){return this.a.$1(new C.et2(this.b,d))},
$S:6}
C.et2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.et9.prototype={
$1(d){return this.a.$1(new C.et1(this.b,d))},
$S:6}
C.et1.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eta.prototype={
$1(d){return this.a.$1(new C.et0(this.b,d))},
$S:6}
C.et0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etb.prototype={
$1(d){return this.b.$1(new C.et_(this.a,this.c))},
$S:8}
C.et_.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.etc.prototype={
$1(d){return this.b.$1(new C.esZ(this.a,this.c))},
$S:8}
C.esZ.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.etd.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bk:A.cV
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esY(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:368}
C.esY.prototype={
$0(){return this.a.$1(new C.esV(this.b,this.c))},
$S:0}
C.esV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ete.prototype={
$1(d){return this.a.$1(new C.esX(this.b,d))},
$S:1704}
C.esX.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.etf.prototype={
$1(d){var w=null
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esW(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:368}
C.esW.prototype={
$0(){return this.a.$1(new C.esU(this.b,this.c))},
$S:0}
C.esU.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.etg.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).py()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eN()}v.a.arT()},
$S:0}
C.etj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.az(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.u6,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.ng,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eF(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:141}
C.eqT.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eF(B.w(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j6,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Fp,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:141}
C.euY.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.ao0,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.euW(d),w,w),B.bG(A.pk,new C.euX(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.euW.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euX.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d0b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.az(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.az(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.az(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gI(C.ku(j.a.c.w)?D.ug:N.no),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.ku(j.a.c.w)?D.ug:N.no).j(0.18+w*0.12),A.J,32+w*10),D.ab5],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gI(C.ku(j.a.c.w)?D.ug:N.no).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.ku(j.a.c.w)?D.ug:N.no).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ku(j.a.c.w)?D.ug:N.no).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ku(m)?D.ug:N.no
s=B.a([new B.ac(0,A.G,A.d.gI(C.ku(m)?D.ug:N.no).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.ku(j.a.c.w)?A.vG:A.q3,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ku(j.a.c.w)?D.ug:N.no).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h1,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f8M,A.L,k,k),A.at,B.d(j.gcwT(),k,k,k,k,k,k,D.fdh,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gS5()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ku(j.a.c.w)?D.ug:N.no).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JC(A.y3,"Download PDF","pdf",A.d3,j.IT(0),!1,k))
p=j.a.c
if(!p.z||p.gS5()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JC(A.kw,"Transfer to "+C.hmR(p==null?"":p),"transfer_hati",A.aV,j.IT(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IT(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JC(D.bEm,"Rename presentation","rename",A.ce,n,!1,k),A.am,new C.JC(A.akh,"Duplicate","duplicate",A.b6,j.IT(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JC(A.e6,"Delete presentation","delete",A.ay,j.IT(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IT(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IT(n)
s.push(B.dV(B.de(B.bK(!1,E.aR6,k,k,!0,k,k,new C.d0a(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.av,k,D.buv,k,k,k,k,k,A.k9,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.de(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.btF,B.w(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.Vn,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d0a.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d0x.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d0y.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d08.prototype={
$1(d){var w=this.a
return w.m(new C.d04(w))},
$S:22}
C.d04.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d09.prototype={
$1(d){var w=this.a
return w.m(new C.d03(w))},
$S:50}
C.d03.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d07.prototype={
$0(){var w=this.a
return w.m(new C.d05(w))},
$S:0}
C.d05.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d06.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.exD.prototype={
$0(){return $.bjW=!$.bjW},
$S:0}
C.ext.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUs())u.avN()},
$S:0}
C.exC.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.exu.prototype={
$0(){return this.a.y=!0},
$S:0}
C.exv.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avN()},
$S:0}
C.exp.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.exq.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.exr.prototype={
$0(){return this.a.y=!1},
$S:0}
C.exs.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.exA.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.r,w,null)},
$S:1705}
C.exB.prototype={
$2(d,e){var w
if(e.gc4(e)===A.hW)return new B.cZ(e,!1,d,null)
w=this.a
return w.cuR(w.e,d,e)},
$S:358}
C.exw.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fC((1-v.gp(0))*1.5708)
return B.fu(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.exx.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k5((1-v.gp(0))*1.5708)
return B.fu(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.exy.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fC(v.gp(0)*0.8)
w.k5(v.gp(0)*0.35)
return B.fu(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.exz.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fC(-v.gp(0)*1.2)
return B.fu(A.a8,B.de(e,v.gp(0)),null,w,!0)},
$S:46}
C.exE.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYC().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYC().x
t===$&&B.c()
return new C.b0E(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IA(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:628}
C.exG.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bW,x.w).w.a.a*0.55)w.avN()
else w.cjf()},
$S:50}
C.exF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fGd.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:357}
C.fGm.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fGj(d),w,w),B.bK(!1,D.fvS,w,w,!0,w,w,new C.fGk(d,this.b,v),w,w),B.bG(A.aRo,new C.fGl(d,v,this.c),w)],x.p),w,w,M.tq,new B.a7(320,w,t,w),w,w,w,w,D.fxk,w)},
$S:20}
C.fGj.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fGk.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.h1s(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fGl.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPx(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOY(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fGc.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdX.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:562}
C.fGi.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fdD.prototype={
$1(d){return C.h1q(C.VI(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fP4.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:95}
C.fP5.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.de(B.ed(A.A,D.h_r,0.94+w*0.06,null,null),w)},
$S:359}
C.fP6.prototype={
$1(d){var w=this
return new C.VK(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ex9.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ex5.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ex8.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VL(u,this.b,w.gaNK(),v,null)},
$S:z+99}
C.ex6.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ex7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exa.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exb.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exe.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.exf.prototype={
$0(){var w=this.a
return w.m(new C.exd(w))},
$S:0}
C.exd.prototype={
$0(){return this.a.d="one"},
$S:0}
C.exg.prototype={
$0(){var w=this.a
return w.m(new C.exc(w))},
$S:0}
C.exc.prototype={
$0(){return this.a.d="all"},
$S:0}
C.exh.prototype={
$1(d){return this.a.bIZ(d,this.b)},
$S:z+100}
C.ex4.prototype={
$0(){var w=this.a
return w.m(new C.ex3(w,this.b))},
$S:0}
C.ex3.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.exi.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.exj.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.exk.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exl.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.exm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fM(new B.fE(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.J(x.q).f.U(D.eWc)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqN.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eqM())},
$S:0}
C.eqM.prototype={
$0(){},
$S:0}
C.eqO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.eqJ.prototype={
$1(d){return this.a.m(new C.eqI())},
$S:2}
C.eqI.prototype={
$0(){},
$S:0}
C.eqK.prototype={
$1(d){return this.a.aZl()},
$S:2}
C.eqL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.exo.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.exn(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.exn.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fAx.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ew(new B.jJ(this.c,new C.fAw(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:235}
C.fAw.prototype={
$3(d,e,f){return new C.IA(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fAy.prototype={
$1(d){var w=null
return B.ok(!1,B.av(new C.bur(this.a,this.b,w),w,w,w),w,x.z)},
$S:316}
C.fAC.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmE(),$async$$0)
case 3:w=4
return B.b(B.bN(A.nc,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmE(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.pW))throw B.V("Could not draw the slide.")
u=r.m_(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.fAD.prototype={
bkD(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hv(A.fZ),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hP([J.eT(A.dD.gaN(r))],"image/png"))
t.toString
s=Am.fTf(t)
w=4
return B.b(new B.q1(s,"load",!1,x.ev).gI(0).d6(0,A.jD),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkD(d)},
$S:1709}
C.fAz.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:144}
C.fAA.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fR(0)},
$S:144}
C.fAB.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f8_.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f5i,A.L,w,w)},
$S:1710}
C.f80.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m3(A.bo,w,A.dR,8,w,e===0?w:e,w),A.aq)},
$S:526}
C.eeX.prototype={
$1(d){this.a.ZP()
return null},
$S:12}
C.eeV.prototype={
$0(){return this.a.e=D.bpJ},
$S:0}
C.eeW.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgv.prototype={
$1(d){return A.o.dz(1,d.a)},
$S:z+103}
C.cgw.prototype={
$2(d,e){return(d|e)>>>0},
$S:72};(function aliases(){var w=C.aLu.prototype
w.bvd=w.q
w=C.aKY.prototype
w.buG=w.q
w=C.aKJ.prototype
w.buq=w.q
w=C.aKX.prototype
w.buF=w.q
w=C.aLs.prototype
w.bvb=w.q
w=C.aMP.prototype
w.bwJ=w.q
w=C.aJE.prototype
w.bti=w.q
w=C.aLG.prototype
w.bvp=w.q
w=C.aLH.prototype
w.bvq=w.q
w=C.b2j.prototype
w.bpX=w.aCu})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i7w","ane",104)
v(C.aID.prototype,"gc3i","YJ",0)
var r
u(r=C.axd.prototype,"gcwe","cwf",38)
v(r,"gc43","ad1",0)
v(r=C.ax9.prototype,"gaXT","E0",3)
v(r,"gc40","c41",3)
v(r,"gaw4","xG",0)
v(r,"gaw5","Ix",0)
t(C,"i7X","hEf",105)
v(C.aDh.prototype,"gc6K","c6L",3)
s(C,"i87",0,null,["$4$paper$photo$request$template"],["fHC"],106,0)
s(C,"i86",0,null,["$5$doc$history$instruction$photo$template"],["bBy"],107,0)
v(r=C.aDA.prototype,"gc7r","IQ",0)
v(r,"gbIr","Wy",0)
v(r,"gc7u","adR",0)
v(r,"gc7t","ZB",0)
v(r,"gaZ0","Eh",0)
v(C.aDE.prototype,"gc7z","ZD",0)
v(r=C.aF0.prototype,"gaZd","PE",0)
v(r,"gco7","b2C",3)
v(r,"gcxD","aAC",86)
v(r,"gbMf","a9S",0)
v(r,"gc8_","Ar",0)
v(r=C.aGW.prototype,"gchZ","a_Y",0)
v(r,"gci6","a00",0)
v(r,"gbBk","a8k",0)
v(r,"gc83","ae2",0)
v(C.aGV.prototype,"gc84","ae3",0)
v(C.aAW.prototype,"gbAj","a87",0)
v(C.azj.prototype,"gc85","ZO",0)
w(C,"i8k","i6d",12)
w(C,"i8i","i3a",12)
w(C,"i8j","i5d",12)
v(r=C.aDU.prototype,"gcAO","cAP",3)
v(r,"gcmm","cmn",3)
u(r,"gEn","aeI",7)
v(r,"gbG3","ar2",3)
u(r,"gEo","b_v",7)
v(r,"gcad","aep",0)
v(r,"gc94","aeo",0)
v(r,"gccn","aeJ",0)
v(r,"gbIo","a9t",0)
v(r,"gcdg","a_n",0)
v(r,"gcdh","af_",0)
v(r,"gcdO","af6",0)
v(r,"gccA","aeM",0)
v(r,"gbMp","a9W",0)
v(r,"gaRh","aRi",3)
v(r,"gaQp","aQq",3)
v(r,"gaM4","aM5",3)
v(r,"gaQo","arT",3)
u(r,"gbAA","bAB",80)
v(r,"gaA8","b5H",3)
v(r,"gc96","c97",3)
v(r,"gbXx","bXy",3)
v(r,"gbKR","bKS",3)
v(r=C.aDX.prototype,"gczE","czF",3)
v(r,"gczj","czk",3)
t(C,"i8l","i6u",2)
v(r=C.aDV.prototype,"gc8b","IV",0)
v(r,"gcq8","R4",0)
v(r,"gc88","IU",0)
v(r,"gcC3","a2u",0)
v(r,"gce_","afd",0)
v(C.aDT.prototype,"gc8c","aZl",3)
v(r=C.aDW.prototype,"gbNb","aa5",0)
u(r,"gc89","c8a",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nS,C.Rz,C.bH5,C.bFs,C.cwD,C.cwB,C.bNt,C.b83,C.cwC,C.bE2,C.cgp,C.cgn,C.cgo,C.cgm,C.aso,C.cgl,C.bOm,C.oi,C.aEv,C.jm,C.nF,C.a7E,C.zp,C.ld,C.ou,C.m5,C.zr,C.nJ,C.a7M,C.aqM,C.b0F,C.eem,C.la,C.Ey,C.ev,C.iZ,C.Ep,C.xu,C.eL,C.lE,C.i1,C.jE,C.a7N,C.aeV,C.b0G,C.b2j,C.a2B])
u(B.kj,[C.cEt,C.bZ3,C.fvN,C.cFZ,C.cFl,C.fBf,C.dY5,C.dY4,C.ef_,C.eeZ,C.fCE,C.feL,C.feM,C.ccj,C.cck,C.ccl,C.ejn,C.eSb,C.eRz,C.eRy,C.eSC,C.eS9,C.eS2,C.eSl,C.eT1,C.fmq,C.eZb,C.eZa,C.eZE,C.eep,C.fG9,C.dTP,C.fMD,C.fD0,C.cdP,C.cdN,C.cdS,C.fDv,C.fDw,C.fDx,C.fDy,C.cdz,C.cdA,C.dG4,C.cdw,C.fDu,C.f5y,C.dS0,C.cdp,C.ee5,C.fB4,C.eun,C.euM,C.euJ,C.euI,C.euT,C.euS,C.ewn,C.ewm,C.euC,C.euB,C.erb,C.esl,C.evk,C.ewF,C.ewE,C.es8,C.etj,C.eqT,C.d0b,C.exA,C.exB,C.exw,C.exx,C.exy,C.exz,C.exE,C.cdX,C.ex9,C.exk,C.cgw])
u(B.hW,[C.cEu,C.cEv,C.bOn,C.ftb,C.bZ2,C.bZ5,C.fJ7,C.f6w,C.f6n,C.f6D,C.fdE,C.fdF,C.fvO,C.fvM,C.fIC,C.fsQ,C.fJt,C.cFP,C.cFU,C.cFW,C.cFS,C.cFX,C.cFQ,C.cFY,C.cFL,C.cFI,C.cFH,C.cFO,C.cFg,C.cFe,C.fAh,C.fAi,C.fi3,C.fBg,C.fBm,C.fh6,C.c8C,C.fAf,C.fAg,C.fv9,C.fva,C.fBl,C.fBh,C.fBj,C.fBk,C.fBi,C.fMV,C.fvd,C.fve,C.fvh,C.fvi,C.fvl,C.fvm,C.fOn,C.ffc,C.fOy,C.eih,C.eii,C.eij,C.ei_,C.eib,C.eic,C.eie,C.cci,C.ccg,C.cch,C.fAW,C.fAY,C.fAX,C.feN,C.feO,C.fOB,C.ejs,C.ejt,C.ejk,C.ejl,C.ejo,C.ejp,C.fOR,C.eT2,C.eSs,C.eSc,C.eSp,C.eRu,C.eRv,C.eRw,C.eRA,C.eRB,C.eSS,C.eSZ,C.eT0,C.eSB,C.eSD,C.eSH,C.eSI,C.eSJ,C.eSN,C.eSE,C.eSF,C.eRM,C.eRN,C.eRO,C.eRP,C.eRQ,C.eRR,C.eRS,C.eRT,C.eRU,C.eR7,C.eR8,C.eR9,C.eRa,C.eRc,C.eRd,C.eRG,C.eRH,C.eRI,C.eRJ,C.eRK,C.eRh,C.eRi,C.eRj,C.eRk,C.eS1,C.eSk,C.fyk,C.fyj,C.cdG,C.fmp,C.fG5,C.fFZ,C.fG1,C.fDZ,C.fE_,C.fE0,C.fyr,C.fyq,C.fyp,C.fyn,C.feI,C.feJ,C.feK,C.fP2,C.eZd,C.eZe,C.eZ7,C.eZ1,C.eZx,C.eZy,C.eZA,C.eZB,C.eZw,C.fP1,C.eYT,C.flF,C.eeo,C.fG7,C.fG8,C.fGa,C.fG3,C.fG4,C.fOf,C.dis,C.diy,C.een,C.fbf,C.fbh,C.fbg,C.fbe,C.fzv,C.fzx,C.fdb,C.fFA,C.fFB,C.fFC,C.fFN,C.fFS,C.fFT,C.fFU,C.fFV,C.fFW,C.fFX,C.fFY,C.fFD,C.fFE,C.fFF,C.fFG,C.fFH,C.fFI,C.fFJ,C.fFK,C.fFL,C.fFM,C.fFO,C.fFP,C.fFQ,C.fFR,C.fxl,C.fld,C.flc,C.fGg,C.dTQ,C.dTO,C.eY2,C.c8d,C.c8f,C.fMF,C.d7L,C.d7N,C.fME,C.fMC,C.fP0,C.fCX,C.d7l,C.fvp,C.fvq,C.cdE,C.cdF,C.cdD,C.cdt,C.cdu,C.cdq,C.cdr,C.cds,C.cdV,C.cdQ,C.cdL,C.cdM,C.cdO,C.cdR,C.cdT,C.fDz,C.cdy,C.cdB,C.cdC,C.cdI,C.cdJ,C.fGn,C.fFu,C.cdx,C.cdv,C.fDt,C.fnL,C.cdo,C.eVG,C.fqE,C.ex0,C.etq,C.etr,C.ev0,C.euP,C.euQ,C.esO,C.ewM,C.ewN,C.ewO,C.esc,C.euu,C.euw,C.eu6,C.eu3,C.etm,C.etn,C.eud,C.ese,C.eup,C.euq,C.euo,C.eus,C.eur,C.euK,C.euL,C.euN,C.euG,C.esx,C.esu,C.euU,C.esm,C.ewL,C.eqV,C.esp,C.eso,C.erD,C.erI,C.erG,C.erE,C.ewT,C.ewU,C.ewV,C.ewS,C.ewp,C.ewo,C.ewi,C.ewk,C.ewa,C.ewJ,C.ewH,C.er2,C.eqZ,C.etk,C.erM,C.erd,C.erc,C.erz,C.erA,C.esM,C.erO,C.erS,C.euD,C.ewb,C.ewc,C.ewd,C.ewe,C.esg,C.esh,C.esi,C.etN,C.esI,C.esA,C.esH,C.etX,C.etY,C.evK,C.evM,C.ew5,C.ew7,C.evN,C.evO,C.erK,C.etp,C.eto,C.ewz,C.es7,C.es_,C.es0,C.es3,C.es4,C.eu1,C.et5,C.et6,C.et7,C.et8,C.et9,C.eta,C.etb,C.etc,C.etd,C.ete,C.etf,C.euY,C.d08,C.d09,C.exG,C.fGd,C.fGm,C.fGc,C.fGi,C.fdD,C.fP4,C.fP5,C.fP6,C.ex8,C.exh,C.eqO,C.eqJ,C.eqK,C.fAx,C.fAw,C.fAy,C.fAD,C.fAz,C.fAA,C.f8_,C.f80,C.eeX,C.cgv])
u(B.j8,[C.cEw,C.f6s,C.f6x,C.f6y,C.f6t,C.f6u,C.f6v,C.f6l,C.f6m,C.f6o,C.f6p,C.f6C,C.f6B,C.f6r,C.f6q,C.f6z,C.f6A,C.f6F,C.f6G,C.f6E,C.cFR,C.cFV,C.cFT,C.cFJ,C.cFK,C.cFM,C.cFF,C.cFG,C.cFN,C.cFE,C.cFD,C.cFC,C.cF5,C.cF4,C.cF7,C.cFf,C.cF8,C.cF6,C.cFa,C.cFb,C.cFc,C.cF9,C.cFd,C.cFh,C.cFi,C.cFj,C.cFk,C.fv7,C.fv8,C.fv5,C.fv6,C.e9L,C.e9J,C.e9K,C.e9M,C.e9N,C.dY3,C.fvb,C.fvc,C.fvf,C.fvg,C.fvj,C.fvk,C.eeY,C.fD3,C.fD2,C.eig,C.eif,C.ehU,C.ehQ,C.ei0,C.ei1,C.ei2,C.ehW,C.ehX,C.ehY,C.ehZ,C.ehV,C.ehS,C.ehT,C.ei8,C.ei9,C.ei7,C.eia,C.ei6,C.ei5,C.ei4,C.eid,C.ei3,C.ehR,C.ejr,C.ejf,C.ejg,C.ejm,C.ejh,C.ejj,C.eji,C.ejq,C.eRV,C.eSi,C.eRE,C.eRF,C.eRC,C.eRD,C.eSo,C.eSn,C.eSm,C.eSr,C.eSq,C.eRt,C.eRx,C.eRs,C.eRr,C.eRo,C.eRq,C.eRp,C.eT_,C.eST,C.eSR,C.eSU,C.eSQ,C.eSV,C.eSP,C.eSW,C.eSX,C.eSY,C.eSO,C.eSA,C.eSv,C.eSG,C.eSz,C.eSK,C.eSy,C.eSL,C.eSx,C.eSM,C.eSw,C.eSf,C.eSe,C.eSg,C.eSd,C.eSh,C.eS7,C.eS6,C.eS8,C.eS5,C.eS4,C.eS3,C.eRb,C.eR6,C.eRl,C.eRg,C.eRm,C.eRf,C.eRn,C.eRe,C.eSa,C.eRZ,C.eRY,C.eS_,C.eRX,C.eS0,C.eRW,C.eSj,C.eSu,C.eSt,C.eRL,C.fG0,C.fG2,C.fG6,C.fyo,C.fAP,C.fAN,C.fAO,C.eZf,C.eZg,C.eZc,C.eZ6,C.eZ5,C.eZ8,C.eZ9,C.eYW,C.eYX,C.eYZ,C.eZ_,C.eZ0,C.eYY,C.eZ2,C.eZt,C.eZu,C.eZs,C.eZv,C.eZr,C.eZq,C.eZp,C.eZz,C.eZo,C.eZn,C.eZm,C.eZC,C.eZl,C.eZD,C.eZk,C.eZj,C.eZ3,C.eZ4,C.eZi,C.eZh,C.eYP,C.eYQ,C.eYR,C.eYS,C.eYO,C.eYU,C.eYV,C.dir,C.dit,C.diw,C.dix,C.div,C.diu,C.fzw,C.fxm,C.c8e,C.c8g,C.d7E,C.d7J,C.d7K,C.d7I,C.d7H,C.d7M,C.d7G,C.d7F,C.d7O,C.fMB,C.deq,C.der,C.des,C.fvn,C.fvo,C.cdW,C.eqP,C.eqQ,C.eqR,C.eqS,C.fnJ,C.fnK,C.dS2,C.dS1,C.d4A,C.d4z,C.ex2,C.ex1,C.ets,C.ew8,C.ewZ,C.euZ,C.ewP,C.ewQ,C.ex_,C.eu7,C.esa,C.esb,C.euv,C.eu5,C.eu2,C.eu4,C.eu8,C.eu9,C.eua,C.eub,C.euc,C.eue,C.esf,C.euh,C.eui,C.euj,C.euk,C.eul,C.eum,C.eug,C.eut,C.euH,C.euF,C.euO,C.euf,C.esv,C.esw,C.esy,C.euR,C.euV,C.er9,C.est,C.esr,C.ev2,C.esn,C.ev1,C.esd,C.esP,C.ewK,C.ew9,C.era,C.er7,C.eqY,C.eqU,C.eqW,C.esq,C.erC,C.erH,C.erF,C.erB,C.euE,C.ewW,C.ewl,C.ewg,C.ewh,C.ewj,C.eti,C.eth,C.ewI,C.er0,C.er1,C.er3,C.er4,C.er8,C.er_,C.ev_,C.ewR,C.etl,C.erL,C.eqX,C.esN,C.er5,C.ere,C.erf,C.erg,C.err,C.eru,C.erv,C.erw,C.erx,C.ery,C.erh,C.eri,C.erj,C.erk,C.erl,C.erm,C.ern,C.ero,C.erp,C.erq,C.ers,C.ert,C.esL,C.esK,C.esJ,C.er6,C.erP,C.erN,C.erQ,C.erR,C.ess,C.euz,C.euA,C.eux,C.euy,C.ewf,C.esk,C.esj,C.etM,C.etL,C.etO,C.etK,C.etP,C.etJ,C.etQ,C.etI,C.etR,C.etH,C.etS,C.etG,C.etT,C.etF,C.etU,C.etE,C.etx,C.ety,C.etz,C.etw,C.etA,C.etv,C.etB,C.etu,C.etC,C.ett,C.etD,C.esF,C.esG,C.esz,C.esB,C.esC,C.esD,C.esE,C.ewX,C.ewY,C.etW,C.etV,C.etZ,C.evl,C.evm,C.evn,C.evy,C.evJ,C.evU,C.ew0,C.ew1,C.ew2,C.ew3,C.ew4,C.evo,C.evp,C.evq,C.evr,C.evs,C.evt,C.evu,C.evv,C.evw,C.evx,C.evz,C.evA,C.evB,C.evC,C.evD,C.evE,C.evF,C.evG,C.evH,C.evb,C.evI,C.evj,C.evi,C.evL,C.evh,C.ev7,C.ew6,C.evg,C.ev6,C.ev4,C.evf,C.ev5,C.ev3,C.evP,C.eve,C.evQ,C.evR,C.evS,C.evT,C.evd,C.evV,C.evW,C.evX,C.evc,C.evY,C.eva,C.evZ,C.ev9,C.ew_,C.ev8,C.erJ,C.ews,C.ewr,C.ewt,C.ewq,C.esS,C.esR,C.esT,C.esQ,C.ewD,C.ewy,C.ewC,C.ewu,C.ewv,C.eww,C.ewx,C.ewA,C.ewB,C.ewG,C.es9,C.erX,C.erY,C.erZ,C.erW,C.es2,C.es1,C.erV,C.erU,C.es5,C.erT,C.es6,C.eu0,C.eu_,C.et4,C.et3,C.et2,C.et1,C.et0,C.et_,C.esZ,C.esY,C.esV,C.esX,C.esW,C.esU,C.etg,C.euW,C.euX,C.d0a,C.d0x,C.d0y,C.d04,C.d03,C.d07,C.d05,C.d06,C.exD,C.ext,C.exC,C.exu,C.exv,C.exp,C.exq,C.exr,C.exs,C.exF,C.fGj,C.fGk,C.fGl,C.ex5,C.ex6,C.ex7,C.exa,C.exb,C.exe,C.exf,C.exd,C.exg,C.exc,C.ex4,C.ex3,C.exi,C.exj,C.exl,C.exm,C.eqN,C.eqM,C.eqI,C.eqL,C.exo,C.exn,C.fAC,C.fAB,C.eeV,C.eeW])
t(C.aQR,B.J)
u(B.ma,[C.a3z,C.awG,C.avn,C.xs,C.xv,C.kR,C.tg,C.Bn,C.rs,C.vW,C.arl,C.IB,C.aqL,C.uE,C.mw,C.hC,C.a8o])
u(C.bNt,[C.cwE,C.bNu])
u(C.cgp,[C.cgt,C.asn])
t(C.cgs,C.cgn)
t(C.cgr,C.cgm)
t(C.cgu,C.cgr)
t(C.cgq,C.cgo)
t(C.cgk,C.cgl)
t(C.b9C,B.oM)
t(C.cqs,B.auQ)
t(C.a8a,B.xf)
t(C.aVl,B.dF)
t(C.aAe,B.atI)
u(B.ag,[C.a0C,C.Ym,C.Yk,C.apX,C.Vw,C.Vz,C.a_D,C.a09,C.a08,C.aDt,C.Zv,C.Ni,C.Z3,C.Zo,C.anX,C.aIk,C.UL,C.az3,C.a7u,C.NK,C.ayq,C.JC,C.a_f,C.VK,C.VL,C.aDS,C.aqQ,C.a7v])
u(B.ah,[C.aID,C.axd,C.ax9,C.aDh,C.aDA,C.aDE,C.aF0,C.aGW,C.aGV,C.aLu,C.aAW,C.aKY,C.azj,C.bfv,C.aKJ,C.aMP,C.aKX,C.bdo,C.aLs,C.aLG,C.aJE,C.bc9,C.aLH,C.aDV,C.bjV,C.aDT,C.aDW,C.bjE])
u(B.au,[C.axb,C.ad1,C.acq,C.biG,C.ad4,C.aeL,C.b0h,C.bs2,C.b0B,C.ble,C.bqC,C.aZv,C.b0E,C.ad7,C.adp,C.b0C,C.IA,C.aZy,C.bco,C.Po,C.JJ,C.bh2,C.bh1,C.bur])
u(B.H5,[C.bbR,C.bts,C.aIX,C.bey,C.br_])
u(B.mM,[C.bbQ,C.b8l,C.bqX,C.bbn,C.beW,C.bh8,C.be1,C.beT,C.beA,C.bnu,C.b9u,C.b97,C.buo,C.brp,C.bqy,C.bdV,C.b0z,C.bpv,C.bqv])
t(C.bjB,C.aLu)
t(C.biY,C.aKY)
t(C.biI,C.aKJ)
t(C.btV,C.aMP)
t(C.biV,C.aKX)
t(C.bjz,C.aLs)
t(C.bwJ,C.aLG)
t(C.aDU,C.bwJ)
t(C.bca,C.aJE)
t(C.aDX,C.aLH)
t(C.buf,B.iR)
t(C.a8n,B.kq)
t(C.cgx,C.b2j)
t(C.ahX,C.a2B)
u(B.Xn,[C.aQH,C.aSb])
t(C.awi,C.aQH)
w(C.aLu,B.ca)
w(C.aKY,B.ca)
w(C.aKJ,B.ca)
w(C.aKX,B.ca)
w(C.aLs,B.ca)
w(C.aMP,B.ca)
w(C.aJE,B.eS)
w(C.aLG,B.ca)
v(C.bwJ,B.ez)
w(C.aLH,B.ca)})()
B.jY(b.typeUniverse,JSON.parse('{"aRq":{"hJ":["aRq"]},"nS":{"aRq":[],"hJ":["aRq"]},"aQR":{"J":["Rz"],"J.E":"Rz"},"b9C":{"oM":[]},"a8a":{"xf":[],"ob":[]},"aVl":{"dF":[],"cy":[],"r":[]},"aAe":{"aS":[],"d7":["aS"],"aR":[],"cv":[]},"a0C":{"ag":[],"r":[]},"aID":{"ah":["a0C"]},"Ym":{"ag":[],"r":[]},"Yk":{"ag":[],"r":[]},"axd":{"ah":["Ym"]},"ax9":{"ah":["Yk"]},"axb":{"au":[],"r":[]},"apX":{"ag":[],"r":[]},"aDh":{"ah":["apX"]},"ad1":{"au":[],"r":[]},"acq":{"au":[],"r":[]},"ad4":{"au":[],"r":[]},"aeL":{"au":[],"r":[]},"biG":{"au":[],"r":[]},"Vw":{"ag":[],"r":[]},"aDA":{"ah":["Vw"]},"b0h":{"au":[],"r":[]},"bbR":{"aB":[]},"bbQ":{"aB":[]},"bts":{"aB":[]},"b8l":{"aB":[]},"bqX":{"aB":[]},"Vz":{"ag":[],"r":[]},"aDE":{"ah":["Vz"]},"bbn":{"aB":[]},"a_D":{"ag":[],"r":[]},"aF0":{"ah":["a_D"]},"beW":{"aB":[]},"a09":{"ag":[],"r":[]},"a08":{"ag":[],"r":[]},"aDt":{"ag":[],"r":[]},"Zv":{"ag":[],"r":[]},"aGW":{"ah":["a09"]},"aGV":{"ah":["a08"]},"bjB":{"ah":["aDt"]},"bh8":{"aB":[]},"aAW":{"ah":["Zv"]},"bs2":{"au":[],"r":[]},"b0B":{"au":[],"r":[]},"ble":{"au":[],"r":[]},"Ni":{"ag":[],"r":[]},"Z3":{"ag":[],"r":[]},"biY":{"ah":["Ni"]},"bqC":{"au":[],"r":[]},"be1":{"aB":[]},"aZv":{"au":[],"r":[]},"azj":{"ah":["Z3"]},"Zo":{"ag":[],"r":[]},"bfv":{"ah":["Zo"]},"beT":{"aB":[]},"beA":{"aB":[]},"bnu":{"aB":[]},"b9u":{"aB":[]},"b97":{"aB":[]},"buo":{"aB":[]},"brp":{"aB":[]},"bqy":{"aB":[]},"bdV":{"aB":[]},"anX":{"ag":[],"r":[]},"b0E":{"au":[],"r":[]},"biI":{"ah":["anX"]},"ad7":{"au":[],"r":[]},"adp":{"au":[],"r":[]},"aIk":{"ag":[],"r":[]},"UL":{"ag":[],"r":[]},"IA":{"au":[],"r":[]},"az3":{"ag":[],"r":[]},"a7u":{"ag":[],"r":[]},"b0C":{"au":[],"r":[]},"b0z":{"aB":[]},"btV":{"ah":["aIk"]},"aIX":{"aB":[]},"biV":{"ah":["UL"]},"bdo":{"ah":["az3"]},"bjz":{"ah":["a7u"]},"aZy":{"au":[],"r":[]},"bey":{"aB":[]},"bpv":{"aB":[]},"bqv":{"aB":[]},"ayq":{"ag":[],"r":[]},"JC":{"ag":[],"r":[]},"a_f":{"ag":[],"r":[]},"JJ":{"au":[],"r":[]},"NK":{"ag":[],"r":[]},"aDU":{"ah":["NK"],"ez":[]},"bca":{"ah":["ayq"]},"bco":{"au":[],"r":[]},"bc9":{"ah":["JC"]},"Po":{"au":[],"r":[]},"aDX":{"ah":["a_f"]},"br_":{"aB":[]},"bh2":{"au":[],"r":[]},"bh1":{"au":[],"r":[]},"VK":{"ag":[],"r":[]},"VL":{"ag":[],"r":[]},"aDS":{"ag":[],"r":[]},"aqQ":{"ag":[],"r":[]},"aDV":{"ah":["VK"]},"bjV":{"ah":["VL"]},"aDT":{"ah":["aDS"]},"buf":{"iR":[]},"aDW":{"ah":["aqQ"]},"bur":{"au":[],"r":[]},"a7v":{"ag":[],"r":[]},"bjE":{"ah":["a7v"]},"a8n":{"kq":["ft<eQ>"],"ke":["ft<eQ>"]},"ahX":{"a2B":[]},"aQH":{"j2":[],"ff":[]},"awi":{"j2":[],"ff":[]},"aSb":{"j2":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lv"),U:w("vr<q_>"),bz:w("v"),M:w("em<n>"),bo:w("jz"),g7:w("M0"),gc:w("aA<iy?>"),bq:w("aA<~>"),cc:w("Md"),fS:w("DQ"),an:w("HM"),bm:w("O<Rz>"),X:w("O<a2J>"),f3:w("O<aRq>"),aK:w("O<n8>"),V:w("O<ac>"),O:w("O<v>"),fA:w("O<lw>"),d5:w("O<aA<bv<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dJ>>"),fG:w("O<aA<~>>"),aF:w("O<ne>"),cd:w("O<ai<jm>>"),ez:w("O<a5<n,aD>>"),d:w("O<a5<n,@>>"),B:w("O<ms>"),h:w("O<jm>"),gE:w("O<zp>"),k:w("O<oi>"),g:w("O<lE>"),D:w("O<i1>"),u:w("O<eL>"),m:w("O<uE>"),i:w("O<hC>"),aC:w("O<a7M>"),o:w("O<zr>"),e3:w("O<aD>"),dN:w("O<u>"),v:w("O<hr>"),cR:w("O<iP>"),J:w("O<je>"),gx:w("O<p7<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(L,L)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cR>"),s:w("O<n>"),aS:w("O<iR>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b83>"),bx:w("O<aEv>"),gz:w("O<aeV>"),x:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<G?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<oi>"),R:w("ai<i1>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bv<G,+icon3d,picture(n?,n?)>"),P:w("a5<n,@>"),f:w("a5<@,@>"),gI:w("a5<G,+icon3d,picture(n?,n?)>"),bR:w("M<hC,r>"),eC:w("M<nJ,n>"),cT:w("M<jE,D>"),dv:w("M<n,n>"),f0:w("M<n,r>"),gN:w("M<G,pE>"),gh:w("M<mw,jo<mw>>"),w:w("iB"),ei:w("iy"),g2:w("ri"),fB:w("Ep"),b6:w("zp"),gX:w("a7E"),dt:w("ld"),ea:w("oi"),bt:w("lE"),I:w("i1"),F:w("eL"),fO:w("mw"),ff:w("uE"),fP:w("hC"),Q:w("vW"),dO:w("aqM"),a:w("cr"),C:w("aD"),dw:w("aso"),di:w("a8o"),Y:w("eQ"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EU"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e0<n>"),N:w("n"),fw:w("q_"),bO:w("as"),K:w("bq<u>"),b:w("bq<L>"),E:w("dJ"),W:w("cx<n>"),ac:w("cx<G>"),ex:w("jJ<lE>"),cI:w("jJ<n>"),cl:w("jJ<L>"),b4:w("a_<la>"),a8:w("a_<m5>"),fR:w("a_<+(n,n)>"),co:w("e9<u>"),l:w("r"),b2:w("bX<~>"),ev:w("q1<dX>"),dT:w("bg<~>"),cQ:w("aAe"),q:w("n0"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),at:w("ba?"),gw:w("ai<a5<n,@>>?"),aT:w("ai<i1>?"),c:w("ai<@>?"),aP:w("iy?"),af:w("i1?"),go:w("b0G?"),a6:w("a7N?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dJ,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dJ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWj=new B.bI(A.ax,null,null,H.anL,null)
D.aWt=new B.dc(0,-0.15)
D.aWv=new B.dc(0.62,0)
D.aWy=new B.dc(-0.35,-0.45)
D.aWI=new B.dc(0.9,-0.85)
D.aY0=new B.bp(H.Sr,H.Sr,A.hg,A.hg)
D.aYf=new B.ay(A.b6,1,A.q,-1)
D.bgT=new B.v(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aYr=new B.ay(D.bgT,1,A.q,-1)
D.aYD=new B.ay(A.aE,1.5,A.q,-1)
D.aYI=new B.ay(A.b6,1.6,A.q,-1)
D.aYY=new B.ay(A.aE,1.4,A.q,-1)
D.b_k=new B.o(null,null,null,null,null,L.GH,A.a6)
D.bWB=new B.a8(A.a3,A.a8,A.x,G.a2T,null,null)
D.b_s=new B.o(null,null,null,null,null,D.bWB,A.a6)
D.aaW=new B.o(A.az,null,null,A.t3,null,null,A.n)
D.baV=new B.v(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bgQ=new B.v(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cTS=w([D.baV,D.bgQ],x.O)
D.eg7=new B.bT(A.A,0.5,A.x,null,0,D.cTS,null,null)
D.b_L=new B.o(null,null,null,null,null,D.eg7,A.a6)
D.WS=new B.v(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aZd=new B.bO(P.uZ,A.Y,A.Y,A.Y)
D.b_N=new B.o(D.WS,null,D.aZd,null,null,null,A.n)
D.bYl=new B.a8(A.a3,A.a8,A.x,A.Q6,null,null)
D.b_U=new B.o(null,null,null,null,null,D.bYl,A.a6)
D.act=new B.v(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_X=new B.o(D.act,null,null,A.qF,null,null,A.n)
D.b00=new B.o(A.jZ,null,null,null,null,null,A.a6)
D.b03=new B.o(Z.ady,null,H.aaB,A.mc,null,null,A.n)
D.E0=new B.o(A.dM,null,null,null,null,null,A.a6)
D.b09=new B.o(null,null,null,null,null,E.vX,A.a6)
D.cYJ=w([E.aes,A.bZ],x.O)
D.bXX=new B.a8(A.b_,A.b4,A.x,D.cYJ,null,null)
D.b0e=new B.o(null,null,null,A.mc,null,D.bXX,A.n)
D.d8d=w([A.bk,A.dM,A.jX],x.O)
D.a11=new B.a8(A.ax,A.aC,A.x,D.d8d,null,null)
D.b0r=new B.o(null,null,null,null,null,D.a11,A.n)
D.b0s=new B.o(D.act,null,null,A.kL,null,null,A.n)
D.cow=w([A.di,A.bk],x.O)
D.bXO=new B.a8(A.ax,A.aC,A.x,D.cow,null,null)
D.b0w=new B.o(null,null,null,null,null,D.bXO,A.n)
D.b0G=new B.o(null,null,null,null,null,G.u8,A.a6)
D.b1_=new B.o(A.aeu,null,null,null,null,null,A.a6)
D.bbJ=new B.v(0.5647058823529412,0,0,0,A.t)
D.ab5=new B.ac(0,A.G,D.bbJ,A.RX,28)
D.b37=new B.aVy()
D.b3G=new C.cqs()
D.b3S=new C.b9C()
D.abB=new B.cp(A.A,null,null,A.a0R,null)
D.b6p=new B.fj(null,null,null,null,null,E.n4,null,null,null,null)
D.b4o=new B.cp(A.A,null,null,D.b6p,null)
D.bHk=new B.ae(A.dX,28,A.c,null,null,null)
D.b4S=new B.cp(A.A,null,null,D.bHk,null)
D.b6m=new B.fj(2,null,null,null,null,A.c_,null,null,null,null)
D.b5d=new B.cp(A.A,null,null,D.b6m,null)
D.bHF=new B.ae(L.NJ,40,A.bz,null,null,null)
D.b5e=new B.cp(A.A,null,null,D.bHF,null)
D.b7f=new B.v(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b7s=new B.v(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b7Q=new B.v(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b7W=new B.v(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b8r=new B.v(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b8H=new B.v(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b8I=new B.v(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KH=new B.v(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b97=new B.v(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b9d=new B.v(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acL=new B.v(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b9Y=new B.v(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.baK=new B.v(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acZ=new B.v(1,1,1,0.9725490196078431,A.t)
D.bb3=new B.v(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bbd=new B.v(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bbg=new B.v(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bbt=new B.v(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bbO=new B.v(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bdc=new B.v(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WB=new B.v(0.8509803921568627,0,0,0,A.t)
D.bdk=new B.v(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bdr=new B.v(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adR=new B.v(0.6,0,0,0,A.t)
D.adT=new B.v(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.beO=new B.v(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.to=new B.v(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bfd=new B.v(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bfD=new B.v(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bg0=new B.v(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aeF=new B.v(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.X1=new B.v(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AI=new B.v(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lf=new B.v(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.je=new B.v(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.af2=new B.v(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xc=new B.v(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bjo=new B.v(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bjS=new B.v(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bk5=new B.v(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xx=new B.v(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.ble=new B.v(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xo=new B.v(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.blI=new B.v(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bm0=new B.hI(A.b0,!0,null,null)
D.fby=new B.H(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBu=new B.y("Bio link",null,D.fby,null,null,null,null,null,null,null,null,null)
D.b57=new B.cp(A.A,null,null,D.fBu,null)
D.bmg=new B.hI(A.VY,!0,D.b57,null)
D.LE=new C.a3z(0,"none")
D.ag8=new C.a3z(1,"deflate")
D.ag9=new C.a3z(2,"bzip2")
D.bnc=new B.kl(0.165,0.84,0.44,1)
D.cZ1=w([A.cg,A.dR,A.aE],x.O)
D.bX4=new B.a8(A.ax,A.aC,A.x,D.cZ1,null,null)
D.b_p=new B.o(null,null,null,null,null,D.bX4,A.n)
D.bQw=new B.ae(A.eT,null,A.ad,null,null,null)
D.b5J=new B.cp(A.A,null,null,D.bQw,null)
D.bnJ=new B.kO(D.b_p,A.be,D.b5J,null)
D.bjE=new B.v(0.058823529411764705,1,1,1,A.t)
D.d1d=w([A.bE,A.qP,A.qP,D.bjE],x.O)
D.cFJ=w([0,0.32,0.7,1],x.x)
D.bXD=new B.a8(A.ax,A.aC,A.x,D.d1d,D.cFJ,null)
D.b_e=new B.o(null,null,null,null,null,D.bXD,A.n)
D.bnP=new B.kO(D.b_e,A.be,null,null)
D.boX=new B.mk(1,1,null,null,null,A.bo,null)
D.bp_=new B.mk(1,null,null,null,null,D.Xc,null)
D.bpt=new B.ba(125e4)
D.bpz=new B.ba(17e4)
D.bpJ=new B.ba(35964e8)
D.bpP=new B.ba(55e4)
D.bpT=new B.ba(68e4)
D.bqj=new B.ig(0,0,0,5)
D.bqA=new B.Q(0,16,16,0)
D.bqK=new B.Q(0,36,0,36)
D.bqR=new B.Q(0,54,0,0)
D.bqY=new B.Q(10,0,10,3)
D.br8=new B.ig(10,16,10,10)
D.brk=new B.Q(10,6,4,6)
D.brn=new B.Q(10,8,10,6)
D.ah6=new B.Q(11,8,11,11)
D.brr=new B.Q(12,0,12,24)
D.brD=new B.Q(12,12,12,4)
D.brG=new B.Q(12,12,8,12)
D.brV=new B.Q(12,8,8,12)
D.bsh=new B.Q(14,14,14,0)
D.bsm=new B.Q(14,14,14,90)
D.bsF=new B.Q(16,10,16,16)
D.bsG=new B.Q(16,10,16,20)
D.ahW=new B.Q(16,6,16,28)
D.bte=new B.Q(18,0,18,10)
D.btg=new B.Q(18,0,18,30)
D.bti=new B.Q(18,10,18,12)
D.btj=new B.Q(18,10,18,14)
D.btA=new B.Q(18,16,14,18)
D.btF=new B.Q(18,18,18,12)
D.btL=new B.Q(18,26,18,12)
D.btQ=new B.Q(18,34,18,34)
D.btR=new B.Q(18,4,18,14)
D.btX=new B.Q(18,8,18,24)
D.bud=new B.Q(20,16,14,4)
D.bui=new B.Q(20,18,12,4)
D.bun=new B.Q(20,20,12,20)
D.buq=new B.Q(20,22,20,20)
D.buv=new B.Q(20,6,20,6)
D.buF=new B.Q(22,18,22,18)
D.buN=new B.Q(22,24,22,0)
D.buQ=new B.Q(22,24,22,4)
D.buY=new B.Q(22,60,22,22)
D.bv3=new B.Q(24,24,24,22)
D.bvd=new B.Q(26,10,60,10)
D.bvl=new B.Q(28,44,28,44)
D.bvC=new B.Q(32,44,32,44)
D.bvK=new B.Q(38,30,38,20)
D.bvP=new B.Q(4,0,0,6)
D.bw0=new B.ig(4,4,4,4)
D.bwq=new B.ig(6,5,6,5)
D.bwu=new B.Q(6,6,8,6)
D.bwF=new B.Q(8,14,8,14)
D.bwG=new B.Q(8,22,8,22)
D.bwO=new B.Q(8,6,12,6)
D.bwX=new B.Q(8,8,8,4)
D.aiQ=new B.Q(9,9,9,6)
D.bx7=new B.ig(2.5,2.5,2.5,2.5)
D.bx8=new B.Q(10.5,0,10.5,0)
D.bx9=new B.Q(7,1.5,7,1.5)
D.cR0=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bxp=new B.yO(null,null,D.cR0,A.An)
D.cO4=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bxq=new B.yO(null,null,D.cO4,A.An)
D.aQK=new B.H(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAO=new B.y("WORD DESIGN",null,D.aQK,null,null,null,null,null,null,null,null,null)
D.bxZ=new B.bB(1,A.bg,D.fAO,null)
D.fAt=new B.y("Slides database",null,Ab.qs,null,null,null,null,null,null,null,null,null)
D.fxH=new B.y("Admin only \xb7 keep as many as you like",null,U.aQd,null,null,null,null,null,null,null,null,null)
D.dgg=w([D.fAt,A.bD,D.fxH],x.p)
D.bmG=new B.fl(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.dgg,null)
D.by1=new B.bB(1,A.bg,D.bmG,null)
D.fsb=new B.y("NGMY logo",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.by4=new B.bB(1,A.bg,D.fsb,null)
D.f9q=new B.H(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new B.y("TALK TO THE EDITOR",null,D.f9q,null,null,null,null,null,null,null,null,null)
D.byl=new B.bB(1,A.bg,D.fCJ,null)
D.fm0=new B.y("Tell the AI what to change",null,Ab.qs,null,null,null,null,null,null,null,null,null)
D.byG=new B.bB(1,A.bg,D.fm0,null)
D.bzx=new B.DE(!0,"video/mp4")
D.f7J=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new B.y("Move presentations between devices",null,D.f7J,null,null,null,!1,null,null,1,null,null)
D.bzB=new B.ql(A.ei,A.a3,A.f,D.fk4,null)
D.fld=new B.y("Edit in Slides",null,A.j6,null,null,null,null,null,null,null,null,null)
D.bzC=new B.ql(A.ei,A.A,A.f,D.fld,null)
D.bzR=new B.dq(1,A.co,D.bzC,null)
D.a_m=new B.a0(60988,"MaterialIcons",!1)
D.bCO=new B.a0(61352,"MaterialIcons",!1)
D.akl=new B.a0(61531,"MaterialIcons",!1)
D.bE2=new B.a0(63062,"MaterialIcons",!1)
D.bEa=new B.a0(63109,"MaterialIcons",!1)
D.bEm=new B.a0(63206,"MaterialIcons",!1)
D.al5=new B.a0(63238,"MaterialIcons",!1)
D.a_S=new B.a0(63365,"MaterialIcons",!1)
D.a_T=new B.a0(63367,"MaterialIcons",!1)
D.a_U=new B.a0(63368,"MaterialIcons",!1)
D.alh=new B.a0(63384,"MaterialIcons",!1)
D.bEV=new B.a0(63525,"MaterialIcons",!1)
D.bEZ=new B.a0(63568,"MaterialIcons",!1)
D.bFj=new B.a0(983072,"MaterialIcons",!1)
D.bFI=new B.a0(983271,"MaterialIcons",!0)
D.amp=new B.a0(983965,"MaterialIcons",!1)
D.amq=new B.a0(983966,"MaterialIcons",!1)
D.bGG=new B.a0(984592,"MaterialIcons",!1)
D.bGY=new B.ae(A.tU,16,A.aA,null,null,null)
D.bH4=new B.ae(A.mz,null,A.c,null,null,null)
D.amB=new B.ae(A.q2,18,A.c,null,null,null)
D.bHl=new B.ae(A.Br,18,O.li,null,null,null)
D.bI0=new B.ae(A.jq,11,null,null,null,null)
D.bIa=new B.ae(A.a_C,null,A.eu,null,null,null)
D.bIJ=new B.ae(A.rd,18,A.aA,null,null,null)
D.bIP=new B.ae(A2.BE,14,null,null,null,null)
D.bIQ=new B.ae(A.e6,28,A.c9,null,null,null)
D.bJ1=new B.ae(A.q3,20,A.c,null,null,null)
D.bJ8=new B.ae(A.yi,null,null,null,null,null)
D.bJe=new B.ae(A.j_,18,A.hw,null,null,null)
D.bJj=new B.ae(A.lm,null,null,null,null,null)
D.bE5=new B.a0(63065,"MaterialIcons",!1)
D.bJX=new B.ae(D.bE5,15,A.c,null,null,null)
D.bEb=new B.a0(63113,"MaterialIcons",!1)
D.bK2=new B.ae(D.bEb,null,A.ad,null,null,null)
D.bKq=new B.ae(A.vD,22,A.bL,null,null,null)
D.bKK=new B.ae(A.vE,18,null,null,null,null)
D.bKQ=new B.ae(A.BH,12,A.c,null,null,null)
D.bGi=new B.a0(983687,"MaterialIcons",!1)
D.bL0=new B.ae(D.bGi,null,A.bk,null,null,null)
D.bL7=new B.ae(A.hn,null,A.bk,null,null,null)
D.bLq=new B.ae(A.oW,22,A.c,null,null,null)
D.bLu=new B.ae(A.cD,13,A.c,null,null,null)
D.bLA=new B.ae(A.e6,26,A.ay,null,null,null)
D.bLD=new B.ae(A.ri,26,A.c,null,null,null)
D.NX=new B.ae(A.jq,8,A.c,null,null,null)
D.bLW=new B.ae(A.q2,40,A.c,null,null,null)
D.bLX=new B.ae(A.bBL,null,null,null,null,null)
D.bM0=new B.ae(A.u2,20,null,null,null,null)
D.bGh=new B.a0(983683,"MaterialIcons",!1)
D.bMa=new B.ae(D.bGh,null,A.aZ,null,null,null)
D.bMb=new B.ae(A.jq,16,A.bk,null,null,null)
D.bMw=new B.ae(A.rj,null,null,null,null,null)
D.an8=new B.ae(A.vG,22,A.c,null,null,null)
D.bMA=new B.ae(A.dX,17,A.c,null,null,null)
D.an9=new B.ae(A.jq,9,A.c,null,null,null)
D.bMF=new B.ae(A.vA,null,null,null,null,null)
D.bC1=new B.a0(57744,"MaterialIcons",!1)
D.bMM=new B.ae(D.bC1,null,null,null,null,null)
D.bMP=new B.ae(A.vA,16,null,null,null,null)
D.bGP=new B.a0(985181,"MaterialIcons",!1)
D.Gy=new B.ae(D.bGP,null,null,null,null,null)
D.bN0=new B.ae(A.lm,16,A.bL,null,null,null)
D.bG9=new B.a0(983615,"MaterialIcons",!1)
D.bN2=new B.ae(D.bG9,12,A.c,null,null,null)
D.anf=new B.ae(A.y0,16,null,null,null,null)
D.bNa=new B.ae(A.dX,21,A.c,null,null,null)
D.bNf=new B.ae(A.hn,17,A.c,null,null,null)
D.bNg=new B.ae(A.vD,null,null,null,null,null)
D.bNw=new B.ae(A.a0v,20,A.aA,null,null,null)
D.bNL=new B.ae(A.o3,22,E.n4,null,null,null)
D.bNS=new B.ae(A.q1,13,A.ad,null,null,null)
D.bNU=new B.ae(A.amb,20,A.aA,null,null,null)
D.bBJ=new B.a0(57495,"MaterialIcons",!1)
D.bNZ=new B.ae(D.bBJ,null,null,null,null,null)
D.bO2=new B.ae(A.o4,18,A.c,null,null,null)
D.bOn=new B.ae(A.u6,28,A.c,null,null,null)
D.bOx=new B.ae(D.al5,null,A.aE,null,null,null)
D.bOy=new B.ae(A.q3,22,A.c,null,null,null)
D.ano=new B.ae(A.a_i,16,null,null,null,null)
D.bPj=new B.ae(A.vD,32,A.c,null,null,null)
D.bQ2=new B.ae(A.j1,22,A.c,null,null,null)
D.bQ6=new B.ae(A.ri,22,A.ad,null,null,null)
D.anE=new B.ae(A.tU,null,A.c0,null,null,null)
D.bR0=new B.ae(A.tT,18,null,null,null,null)
D.bRC=new B.ae(A.dX,18,A.bN,null,null,null)
D.a0U=new B.ae(A.cD,18,A.aA,null,null,null)
D.bRI=new B.ae(A.am5,null,null,null,null,null)
D.bS8=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQx,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.f_Y=new B.H(!0,A.bJ,null,null,null,null,null,A.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bSq=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f_Y,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bSR=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cUP=w([A.dM,A.aE],x.O)
D.bUQ=new B.a8(A.a3,A.a8,A.x,D.cUP,null,null)
D.bV1=new B.a8(A.b_,A.b4,A.U4,A.auI,null,null)
D.b7G=new B.v(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bbR=new B.v(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.beP=new B.v(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b9Q=new B.v(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cFL=w([D.b7G,D.bbR,D.beP,D.b9Q],x.O)
D.bVk=new B.a8(A.ax,A.aC,A.x,D.cFL,A.H6,null)
D.dgo=w([A.cs,A.bC,A.b6],x.O)
D.bVm=new B.a8(A.b_,A.b4,A.U4,D.dgo,null,null)
D.dhL=w([A.bk,A.ce],x.O)
D.bVq=new B.a8(A.a3,A.a8,A.x,D.dhL,null,null)
D.dcP=w([A.hl,A.d5,A.aF],x.O)
D.bVs=new B.a8(A.ax,A.aC,A.x,D.dcP,null,null)
D.d_G=w([A.cY,A.fd],x.O)
D.bVw=new B.a8(A.a3,A.a8,A.x,D.d_G,null,null)
D.dgi=w([O.li,A.d5],x.O)
D.aop=new B.a8(A.a3,A.a8,A.x,D.dgi,null,null)
D.bcr=new B.v(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dgf=w([D.bcr,D.xo,A.c_],x.O)
D.bVB=new B.a8(A.a3,A.a8,A.x,D.dgf,null,null)
D.cWs=w([A.b2,A.cZ,A.eA],x.O)
D.bVC=new B.a8(A.ax,A.aC,A.x,D.cWs,null,null)
D.Ob=new B.a8(A.a3,A.a8,A.x,A.Hj,null,null)
D.bks=new B.v(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cyN=w([D.bks,A.c_,A.jg],x.O)
D.aou=new B.a8(A.ax,A.aC,A.x,D.cyN,null,null)
D.d4P=w([A.v9,A.aw,D.AI],x.O)
D.bWD=new B.a8(A.a3,A.a8,A.x,D.d4P,null,null)
D.blJ=new B.v(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.baJ=new B.v(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bfQ=new B.v(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cVB=w([D.blJ,D.baJ,D.bfQ],x.O)
D.aov=new B.a8(A.a3,A.a8,A.x,D.cVB,null,null)
D.bct=new B.v(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bYB=w([Aw.afP,D.bct],x.O)
D.bWM=new B.a8(A.b_,A.b4,A.x,D.bYB,null,null)
D.cTG=w([A.n3,A.bz],x.O)
D.bWQ=new B.a8(A.b_,A.b4,A.x,D.cTG,null,null)
D.d9N=w([A.aE,A.dR],x.O)
D.bWW=new B.a8(A.a3,A.a8,A.x,D.d9N,null,null)
D.aeP=new B.v(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awq=w([D.aeP,D.je,D.KH],x.O)
D.bXn=new B.a8(A.ax,A.aC,A.x,D.awq,null,null)
D.cyF=w([A.dx,A.dI],x.O)
D.bXy=new B.a8(A.b_,A.b4,A.x,D.cyF,null,null)
D.d6V=w([A.v5,Az.EE],x.O)
D.bYn=new B.a8(A.a3,A.a8,A.x,D.d6V,null,null)
D.ftH=new B.y("Which Bio link?",null,A.cA,null,null,null,null,null,null,null,null,null)
D.bYy=new B.pK(null,D.ftH,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yI=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4R=new C.kR(2,"elegantNavy")
D.h6f=w([A.X_,D.je,A.c_],x.O)
D.jN=new C.xs(0,"classic")
D.a4E=new C.jm("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4R,4294967035,4279378237,4290283019,D.jN)
D.aFG=new C.kR(3,"elegantGold")
D.b7e=new B.v(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b8a=new B.v(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adn=new B.v(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.h5I=w([D.b7e,D.b8a,D.adn],x.O)
D.a4C=new C.jm("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aFG,4294966515,4281016592,4289102906,D.jN)
D.dCX=new C.kR(22,"goldRibbon")
D.h5E=w([A.X_,D.je,A.hZ],x.O)
D.a4v=new C.jm("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dCX,4294967035,4279378237,4291404327,D.jN)
D.dCY=new C.kR(23,"goldBaroque")
D.ae1=new B.v(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.h5K=w([D.ae1,A.aw,A.jg],x.O)
D.a4w=new C.jm("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dCY,4294964964,4283053072,4292128567,D.jN)
D.dD_=new C.kR(4,"elegantEmerald")
D.b9j=new B.v(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bad=new B.v(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.h5Q=w([D.b9j,D.bad,A.hZ],x.O)
D.a4x=new C.jm("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dD_,4294376440,4279122734,4291404327,D.jN)
D.dD0=new C.kR(5,"elegantBurgundy")
D.bdQ=new B.v(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.h5X=w([D.bdQ,A.acD,A.hZ],x.O)
D.a4A=new C.jm("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dD0,4294965238,4283043359,4291404327,D.jN)
D.dCU=new C.kR(19,"goldFiligree")
D.Lm=new B.v(1,1,0.984313725490196,0.9529411764705882,A.t)
D.h5L=w([D.Lm,A.aw,A.jg],x.O)
D.a4y=new C.jm("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dCU,4294966259,4279378237,4292128567,D.jN)
D.dCV=new C.kR(20,"goldLaurel")
D.bki=new B.v(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.h5Y=w([A.Kz,A.hZ,D.bki],x.O)
D.a4z=new C.jm("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dCV,4294966776,4282000405,4291404327,D.jN)
D.dCW=new C.kR(21,"goldCrest")
D.acw=new B.v(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bkp=new B.v(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.h5N=w([D.acw,A.aw,D.bkp],x.O)
D.a4D=new C.jm("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dCW,4294965484,4283053072,4292128567,D.jN)
D.dCZ=new C.kR(24,"goldStar")
D.blC=new B.v(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.h5R=w([D.blC,A.aw,D.je],x.O)
D.a4B=new C.jm("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dCZ,4294966518,4279378237,4292128567,D.jN)
D.GJ=w([D.a4E,D.a4C,D.a4v,D.a4w,D.a4x,D.a4A,D.a4y,D.a4z,D.a4D,D.a4B],x.h)
D.qf=new C.mw(0,"blank")
D.RM=new C.mw(1,"title")
D.mI=new C.mw(2,"titleContent")
D.dXA=new C.mw(3,"twoColumn")
D.CH=new C.mw(4,"section")
D.dXB=new C.mw(5,"comparison")
D.HT=new C.mw(6,"flashcard")
D.HU=new C.mw(7,"quiz")
D.HV=new C.mw(8,"worksheet")
D.aoS=w([D.qf,D.RM,D.mI,D.dXA,D.CH,D.dXB,D.HT,D.HU,D.HV],B.ax("O<mw>"))
D.axt=w([Ao.Wm,A.dI],x.O)
D.ky=w([A.c_,A.bL,A.hY,A.hJ,D.AI],x.O)
D.dyQ=new C.iZ("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axt,D.ky)
D.bkA=new B.v(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bdO=new B.v(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cTT=w([D.bkA,D.bdO],x.O)
D.dyH=new C.iZ("confetti","Golden Confetti","Together we rise",D.cTT,D.ky)
D.cR5=w([A.nJ,A.W0],x.O)
D.dyI=new C.iZ("crown","Crown of Glory","Built for our community",D.cR5,D.ky)
D.baz=new B.v(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bdt=new B.v(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cXL=w([D.baz,D.bdt],x.O)
D.ua=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dyC=new C.iZ("aurora","Aurora Gala","A brighter future, together",D.cXL,D.ua)
D.beR=new B.v(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d70=w([G.ac9,D.beR],x.O)
D.dyT=new C.iZ("champagne","Champagne Toast","Cheers to every member",D.d70,D.ky)
D.dyU=new C.iZ("diamonds","Diamond Rain","Every member is a jewel",X.ay5,D.ua)
D.b81=new B.v(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bd_=new B.v(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.dc6=w([D.b81,D.bd_],x.O)
D.dyx=new C.iZ("starburst","Golden Starburst","Thank you!",D.dc6,D.ky)
D.bYH=w([A.fc,A.xg],x.O)
D.aci=new B.v(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PK=w([A.oE,A.ix,A.vh,A.nK,D.aci],x.O)
D.dz0=new C.iZ("balloons","Luxury Balloons","Let's celebrate",D.bYH,D.PK)
D.cQo=w([A.Wa,A.w],x.O)
D.dyP=new C.iZ("galaxy","Galaxy Spiral","The sky is not the limit",D.cQo,D.ua)
D.biE=new B.v(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d3E=w([A.kr,D.biE],x.O)
D.dyK=new C.iZ("redcarpet","Red Carpet","Tonight we shine",D.d3E,D.ky)
D.bgt=new B.v(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.beE=new B.v(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d7V=w([D.bgt,D.beE],x.O)
D.dyz=new C.iZ("coins","Gold Coin Rain","Every contribution counts",D.d7V,D.ky)
D.deK=w([A.dx,A.hI],x.O)
D.dyF=new C.iZ("lanterns","Sky Lanterns","Lighting the way together",D.deK,D.ky)
D.bbx=new B.v(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cOo=w([A.xi,D.bbx],x.O)
D.dyB=new C.iZ("hearts","Floating Hearts","Made with love",D.cOo,D.PK)
D.b8A=new B.v(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b9p=new B.v(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dgd=w([D.b8A,D.b9p],x.O)
D.dz_=new C.iZ("petals","Rose Petals","Thank you, from our hearts",D.dgd,D.PK)
D.bjC=new B.v(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dcq=w([A.lh,D.bjC],x.O)
D.dyw=new C.iZ("butterflies","Golden Butterflies","New beginnings",D.dcq,D.ky)
D.bfN=new B.v(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cPk=w([D.bfN,A.w],x.O)
D.dyS=new C.iZ("neon","Neon Night","Let's go!",D.cPk,D.ua)
D.bcG=new B.v(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d9Y=w([A.KZ,D.bcG],x.O)
D.dyV=new C.iZ("disco","Disco Ball","Party time",D.d9Y,D.ua)
D.bgk=new B.v(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d9v=w([A.hl,D.bgk],x.O)
D.dyA=new C.iZ("sunrise","Golden Sunrise","A new day for our community",D.d9v,D.ky)
D.d97=w([A.qS,A.dI],x.O)
D.dyW=new C.iZ("pearls","Ocean Pearls","Deep roots, bright future",D.d97,D.ua)
D.baE=new B.v(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d9m=w([D.baE,A.dI],x.O)
D.dyZ=new C.iZ("snow","Winter Gala","Warm wishes to all",D.d9m,D.ua)
D.b7o=new B.v(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b8l=new B.v(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.df8=w([D.b7o,D.b8l],x.O)
D.dyO=new C.iZ("laurel","Laurel Victory","We did it together",D.df8,D.ky)
D.b7d=new B.v(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bdp=new B.v(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cNt=w([D.b7d,D.bdp],x.O)
D.dyY=new C.iZ("ribbons","Silk Ribbons","Elegance in every step",D.cNt,D.ky)
D.ben=new B.v(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cyC=w([G.AH,D.ben],x.O)
D.dyL=new C.iZ("kente","Kente Pride","Proud of our roots",D.cyC,D.ky)
D.bh1=new B.v(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bjW=new B.v(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cZn=w([D.bh1,D.bjW],x.O)
D.dyG=new C.iZ("trophy","Trophy Shine","Winners together",D.cZn,D.ky)
D.d9s=w([Ap.KN,A.w],x.O)
D.dyy=new C.iZ("shooting","Shooting Stars","Make a wish",D.d9s,D.ua)
D.b7v=new B.v(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afD=new B.v(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dfq=w([D.b7v,D.afD],x.O)
D.dyM=new C.iZ("bokeh","Golden Bokeh","Shine bright",D.dfq,D.ky)
D.b7R=new B.v(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d4t=w([D.b7R,A.w],x.O)
D.dyE=new C.iZ("orbits","Golden Orbits","Always moving forward",D.d4t,D.ky)
D.bjD=new B.v(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d16=w([A.adj,D.bjD],x.O)
D.dyJ=new C.iZ("flowers","Blooming Garden","Growing together",D.d16,D.PK)
D.b7E=new B.v(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b8f=new B.v(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dee=w([D.b7E,D.b8f],x.O)
D.dyD=new C.iZ("music","Music Party","Celebrate with us",D.dee,D.ua)
D.b98=new B.v(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bkl=new B.v(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cOA=w([D.b98,D.bkl],x.O)
D.dyX=new C.iZ("mandala","Royal Mandala","Harmony and unity",D.cOA,D.ky)
D.d1b=w([G.AH,D.afD],x.O)
D.dyR=new C.iZ("sparklers","Golden Sparklers","Light up the night",D.d1b,D.ky)
D.dyN=new C.iZ("city","City Lights","The whole city celebrates",D.axt,D.ky)
D.GS=w([D.dyQ,D.dyH,D.dyI,D.dyC,D.dyT,D.dyU,D.dyx,D.dz0,D.dyP,D.dyK,D.dyz,D.dyF,D.dyB,D.dz_,D.dyw,D.dyS,D.dyV,D.dyA,D.dyW,D.dyZ,D.dyO,D.dyY,D.dyL,D.dyG,D.dyy,D.dyM,D.dyE,D.dyJ,D.dyD,D.dyX,D.dyR,D.dyN],B.ax("O<iZ>"))
D.elG=new B.z("","No ring")
D.eB_=new B.z("platinum","Platinum")
D.exu=new B.z("glow","Glow")
D.ep9=new B.z("double","Double line")
D.eo3=new B.z("framed","Gallery frame")
D.elh=new B.z("rosegold","Rose gold")
D.eyf=new B.z("jewels","Jeweled")
D.euW=new B.z("aurora","Aurora")
D.C_=w([D.elG,A.a66,D.eB_,D.exu,I.aMd,D.ep9,A.a68,D.eo3,D.elh,D.eyf,D.euW],x.L)
D.ci6=w([D.a4y,D.a4z,D.a4D,D.a4v,D.a4w,D.a4B],x.h)
D.bNo=new B.ae(G.ajW,16,null,null,null,null)
D.b2t=new B.vr(A.bh,D.bNo,null,x.U)
D.bCa=new B.a0(58027,"MaterialIcons",!1)
D.bH3=new B.ae(D.bCa,16,null,null,null,null)
D.b2r=new B.vr(A.L,D.bH3,null,x.U)
D.bCb=new B.a0(58030,"MaterialIcons",!1)
D.bL6=new B.ae(D.bCb,16,null,null,null,null)
D.b2u=new B.vr(A.dN,D.bL6,null,x.U)
D.coj=w([D.b2t,D.b2r,D.b2u],B.ax("O<vr<q_>>"))
D.cvX=w([A.AL,A.hi],x.O)
D.cvY=w([A.b2,A.bi,A.eA],x.O)
D.Py=w([A.bL,A.hJ,A.hY,A.aw,A.nK],x.O)
D.cyI=w([A.c_,D.je,D.KH],x.O)
D.czf=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ej7=new B.z(4278913286,4280030216)
D.ejp=new B.z(4279373061,4278518787)
D.ejw=new B.z(4279898630,4278847235)
D.cYN=w([D.ej7,D.ejp,D.ejw],x.n)
D.cUy=w(["\u265b","\u269c","\u2726"],x.s)
D.dCS=new C.xu("Royal Onyx & Gold",D.cYN,4292128567,4294370209,4294965479,3874020544,D.cUy)
D.eiV=new B.z(4278326799,4278598442)
D.eiX=new B.z(4278395929,4278258953)
D.ej3=new B.z(4278599728,4278327826)
D.deB=w([D.eiV,D.eiX,D.ej3],x.n)
D.cPc=w(["\u269c","\u2756","\u2727"],x.s)
D.dCP=new C.xu("Imperial Emerald",D.deB,4293050997,4294699968,4294180856,3872254170,D.cPc)
D.eiY=new B.z(4278455076,4278918747)
D.ej2=new B.z(4278587439,4278322714)
D.ejg=new B.z(4279051376,4278455076)
D.dcL=w([D.eiY,D.ej2,D.ejg],x.n)
D.d56=w(["\u2654","\u2726","\u2748"],x.s)
D.dCJ=new C.xu("Sapphire Crown",D.dcL,4291417834,4294967295,4294310143,3871986666,D.d56)
D.eju=new B.z(4279894534,4283041554)
D.ejG=new B.z(4281008906,4279042307)
D.ejO=new B.z(4284221976,4279894534)
D.dik=w([D.eju,D.ejG,D.ejO],x.n)
D.cQx=w(["\u265b","\u2766","\u2726"],x.s)
D.dCL=new C.xu("Ruby Throne",D.dik,4293378685,4294963145,4294964466,3874213833,D.cQx)
D.ejo=new B.z(4279371039,4281995100)
D.ejy=new B.z(4280092723,4278714896)
D.ejL=new B.z(4283045242,4279371039)
D.deZ=w([D.ejo,D.ejy,D.ejL],x.n)
D.dd6=w(["\u2655","\u2756","\u2727"],x.s)
D.dCQ=new C.xu("Amethyst Palace",D.deZ,4293314984,4294963421,4294702591,3873229802,D.dd6)
D.ej_=new B.z(4278519045,4280032287)
D.ejh=new B.z(4279111184,4278321666)
D.ejD=new B.z(4280492839,4278716426)
D.dbE=w([D.ej_,D.ejh,D.ejD],x.n)
D.d3r=w(["\u2726","\u25c6","\u2742"],x.s)
D.dCN=new C.xu("Obsidian & Platinum",D.dbE,4293256418,4294967295,4294638330,3872378836,D.d3r)
D.ejv=new B.z(4279896588,4282194463)
D.ejE=new B.z(4280553487,4279043334)
D.ejM=new B.z(4283048488,4279896588)
D.d2W=w([D.ejv,D.ejE,D.ejM],x.n)
D.dgC=w(["\u2766","\u273f","\u2727"],x.s)
D.dCK=new C.xu("Rose Gold Velvet",D.d2W,4293440672,4294960345,4294964979,3874214602,D.dgC)
D.ej0=new B.z(4278520340,4279180595)
D.ej5=new B.z(4278718495,4278322443)
D.ejs=new B.z(4279510591,4278520340)
D.cFr=w([D.ej0,D.ej5,D.ejs],x.n)
D.d47=w(["\u269c","\u2736","\u2756"],x.s)
D.dCO=new C.xu("Midnight Brass",D.cFr,4291405148,4293975208,4294439914,3872837564,D.d47)
D.ek0=new B.z(4294703086,4293780428)
D.ejX=new B.z(4294307549,4293187253)
D.ek1=new B.z(4294966517,4293977807)
D.cSC=w([D.ek0,D.ejX,D.ek1],x.n)
D.d4w=w(["\u269c","\u265b","\u2726"],x.s)
D.dCR=new C.xu("Ivory Marble & Gold",D.cSC,4289760572,4286209048,4280951062,3863625518,D.d4w)
D.ejb=new B.z(4278978566,4280555024)
D.ejr=new B.z(4279504137,4278518530)
D.ejI=new B.z(4281211923,4278978566)
D.cQn=w([D.ejb,D.ejr,D.ejI],x.n)
D.ddS=w(["\u2742","\u2726","\u265c"],x.s)
D.dCM=new C.xu("Onyx & Copper",D.cQn,4291856987,4294365880,4294964718,3873885630,D.ddS)
D.czn=w([D.dCS,D.dCP,D.dCJ,D.dCL,D.dCQ,D.dCN,D.dCK,D.dCO,D.dCR,D.dCM],B.ax("O<xu>"))
D.cBF=w([A.aw,D.AI,A.hJ],x.O)
D.erg=new B.z("Original",null)
D.ero=new B.z("Wide 16:9",1.7777777777777777)
D.etD=new B.z("Landscape 3:2",1.5)
D.eqJ=new B.z("Photo 4:3",1.3333333333333333)
D.ess=new B.z("Square",1)
D.eEB=new B.z("Portrait 3:4",0.75)
D.auR=w([D.erg,D.ero,D.etD,D.eqJ,D.ess,D.eEB],B.ax("O<+(n,L?)>"))
D.auS=w([A.hJ,A.bX,A.b8,A.bu],x.O)
D.etO=new B.z("","Original")
D.evG=new B.z("circle","Circle")
D.eBK=new B.z("rounded","Rounded")
D.eCE=new B.z("triangle","Triangle")
D.exJ=new B.z("hexagon","Hexagon")
D.ew5=new B.z("diamond","Diamond")
D.euV=new B.z("arch","Arch")
D.C5=w([D.etO,D.evG,D.eBK,D.eCE,D.exJ,D.ew5,D.euV],x.L)
D.dxW=new C.la("classic_blue","Classic Blue","Normal",A.bk,A.c,A.ks,A.di,A.aK)
D.dyb=new C.la("campus_green","Campus Green","Normal",A.aZ,A.n1,A.tl,A.h7,A.ee)
D.dy2=new C.la("warm_sand","Warm Sand","Normal",A.dU,A.hY,A.bL,A.id,A.nO)
D.dy9=new C.la("slate_minimal","Slate Minimal","Normal",A.br,A.aQ,A.aL,A.M,A.aK)
D.dxV=new C.la("coral_fresh","Coral Fresh","Normal",A.cg,A.iz,A.qM,A.k_,A.te)
D.dya=new C.la("lavender_calm","Lavender Calm","Normal",A.b6,A.px,A.Ax,A.pB,A.jb)
D.dxX=new C.la("ocean_breeze","Ocean Breeze","Normal",A.fd,A.qX,A.ta,A.tg,A.nP)
D.aeV=new B.v(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dy7=new C.la("berry_pop","Berry Pop","Normal",A.fb,D.aeV,A.km,G.Xv,A.EZ)
D.dxY=new C.la("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.km,A.cr)
D.dy6=new C.la("executive_navy","Executive Navy","Professional",A.d3,A.aeg,A.di,A.lf,A.bJ)
D.dy4=new C.la("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bo,A.M,A.aQ,A.cr)
D.dxZ=new C.la("corporate_steel","Corporate Steel","Professional",A.n_,A.M,A.mm,A.f8,A.bJ)
D.dy1=new C.la("gold_luxe","Gold Luxe","Luxury",A.mZ,A.dH,A.oD,A.lJ,A.bL)
D.bgo=new B.v(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dy5=new C.la("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bgo,A.Xj,A.ix,A.nK)
D.dy8=new C.la("platinum_night","Platinum Night","Luxury",A.cr,A.dI,A.bo,A.aQ,A.aL)
D.dyc=new C.la("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pE,A.f_,A.pL,A.jA)
D.dxU=new C.la("royal_purple","Royal Purple","Luxury",A.n0,A.Ws,A.jb,A.km,A.Ky)
D.dy3=new C.la("neon_pitch","Neon Pitch","Bold",A.b8,A.dI,A.M,A.b3,A.aL)
D.dy0=new C.la("crimson_impact","Crimson Impact","Bold",A.bz,A.kr,A.eq,A.tw,A.f6)
D.dy_=new C.la("sunset_gallery","Sunset Gallery","Bold",A.fl,A.te,A.k_,A.qM,A.mk)
D.H0=w([D.dxW,D.dyb,D.dy2,D.dy9,D.dxV,D.dya,D.dxX,D.dy7,D.dxY,D.dy6,D.dy4,D.dxZ,D.dy1,D.dy5,D.dy8,D.dyc,D.dxU,D.dy3,D.dy0,D.dy_],B.ax("O<la>"))
D.cNa=w([A.c_,D.je],x.O)
D.d3b=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.euH=new B.z("Faces & people",D.d3b)
D.cBJ=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ehT=new B.z("Ideas & work",D.cBJ)
D.cV3=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.exO=new B.z("Nature",D.cV3)
D.d3k=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ere=new B.z("Places & things",D.d3k)
D.cYm=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.ev_=new B.z("Symbols",D.cYm)
D.cNg=w([D.euH,D.ehT,D.exO,D.ere,D.ev_],B.ax("O<+(n,ai<n>)>"))
D.b7J=new B.v(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cNE=w([A.c_,D.adn,D.b7J],x.O)
D.b1P=new B.ac(0,A.G,A.Kv,A.aGv,40)
D.b1v=new B.ac(0,A.G,A.nM,A.em,8)
D.cNQ=w([D.b1P,D.b1v],x.V)
D.cOj=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.avg=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a25=w([A.hJ,A.eA,A.bz,A.az,A.cg],x.O)
D.cP6=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adD=new B.v(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cPh=w([A.X9,D.adD,A.X9],x.O)
D.cPn=w([A.hZ,D.je,D.KH],x.O)
D.er1=new B.z(A.bh,D.a_T)
D.esn=new B.z(A.L,D.a_S)
D.emm=new B.z(A.dN,D.a_U)
D.cQi=w([D.er1,D.esn,D.emm],B.ax("O<+(q_,a0)>"))
D.cQ=new C.IB(0,"text")
D.lw=new C.IB(1,"image")
D.f2=new C.IB(2,"shape")
D.RL=new C.IB(3,"pdf")
D.l5=new C.IB(4,"signature")
D.a4Y=new C.IB(5,"bio")
D.cRa=w([D.cQ,D.lw,D.f2,D.RL,D.l5,D.a4Y],B.ax("O<IB>"))
D.cRb=w([A.bn,A.cF],B.ax("O<Hw>"))
D.cRM=w(["School","Documents","Sign & present"],x.s)
D.b1U=new B.ac(0,A.G,A.aft,A.uu,28)
D.cS5=w([D.b1U],x.V)
D.cSo=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PS=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.avF=w([A.hJ,A.EY,A.aL,A.c,A.oE,A.aw],x.O)
D.eE_=new B.z(0.1,0.08)
D.exM=new B.z(0.3,0.05)
D.elT=new B.z(0.55,0.1)
D.eq1=new B.z(0.8,0.06)
D.et6=new B.z(0.92,0.16)
D.esC=new B.z(0.2,0.2)
D.equ=new B.z(0.7,0.22)
D.ews=new B.z(0.05,0.4)
D.etv=new B.z(0.95,0.45)
D.emB=new B.z(0.12,0.7)
D.eoO=new B.z(0.88,0.75)
D.eoW=new B.z(0.4,0.9)
D.ekg=new B.z(0.65,0.93)
D.epF=new B.z(0.25,0.97)
D.eqZ=new B.z(0.85,0.9)
D.enq=new B.z(0.5,0.04)
D.cTO=w([D.eE_,D.exM,D.elT,D.eq1,D.et6,D.esC,D.equ,D.ews,D.etv,D.emB,D.eoO,D.eoW,D.ekg,D.epF,D.eqZ,D.enq],x.G)
D.cTV=w([A.c,A.hi,A.aP,A.aV],x.O)
D.dZc=new C.jE("office_blue","Office Blue",A.bk,A.di,A.aK,A.c,A.ks)
D.dZn=new C.jE("campus_green","Campus Green",A.aZ,A.h7,A.ee,A.n1,A.tl)
D.dZd=new C.jE("sunset","Sunset",A.fl,A.k_,A.nO,A.iz,A.qM)
D.dZe=new C.jE("midnight","Midnight",A.aE,A.km,A.cr,A.M,A.dx)
D.dZp=new C.jE("classic","Classic",A.d5,A.dH,A.lK,A.hY,A.h5)
D.dZm=new C.jE("rose_gold","Rose Gold",A.hi,A.xk,A.xi,A.vh,A.AL)
D.dZ7=new C.jE("ocean_teal","Ocean Teal",A.fd,A.tg,A.nP,A.qX,A.ta)
D.dZ6=new C.jE("slate_pro","Slate Pro",A.br,A.M,A.aK,A.aQ,A.aL)
D.dZ5=new C.jE("neon_night","Neon Night",A.b8,A.b3,A.aL,A.dI,A.M)
D.dZh=new C.jE("lavender","Lavender",A.b6,A.pB,A.jb,A.px,A.Ax)
D.dZj=new C.jE("coral","Coral",A.cg,A.k_,A.te,A.iz,A.mk)
D.dZ8=new C.jE("forest","Forest",A.hk,A.dZ,A.cu,A.lL,A.eu)
D.dZ9=new C.jE("berry","Berry",A.fb,G.Xv,A.EZ,D.aeV,A.km)
D.dZg=new C.jE("sand","Sand",A.dU,A.id,A.nO,A.hY,A.bL)
D.dZl=new C.jE("ice","Ice",A.n_,A.L_,A.aK,A.mX,A.f8)
D.dZb=new C.jE("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bo,A.M)
D.dZ4=new C.jE("mint","Mint",A.aV,A.fx,A.h7,A.lL,A.pL)
D.dZk=new C.jE("crimson","Crimson",A.bz,A.n3,A.kr,A.EW,A.tw)
D.bac=new B.v(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dZf=new C.jE("gold","Gold",A.mZ,A.v5,A.oD,D.bac,A.lJ)
D.dZi=new C.jE("aqua","Aqua",A.bO,A.EM,A.oA,A.pz,A.oF)
D.dZa=new C.jE("plum","Plum",A.n0,A.xg,A.EZ,A.EA,A.qV)
D.dZo=new C.jE("steel","Steel",A.d3,A.di,A.bo,A.ks,A.lf)
D.a2l=w([D.dZc,D.dZn,D.dZd,D.dZe,D.dZp,D.dZm,D.dZ7,D.dZ6,D.dZ5,D.dZh,D.dZj,D.dZ8,D.dZ9,D.dZg,D.dZl,D.dZb,D.dZ4,D.dZk,D.dZf,D.dZi,D.dZa,D.dZo],B.ax("O<jE>"))
D.cUf=w([A.c_,A.jg],x.O)
D.RN=new C.hC(10,"rotate3d")
D.HX=new C.hC(8,"flip")
D.aFZ=new C.hC(19,"spiral")
D.qg=new C.hC(16,"bounce")
D.aG1=new C.hC(9,"flipVertical")
D.cUg=w([D.RN,D.HX,D.aFZ,D.qg,D.aG1],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cUB=w([0.62,1],x.x)
D.cVb=w([0,0.32,0.68,1],x.x)
D.mJ=new C.hC(6,"zoom")
D.uo=new C.hC(4,"slideUp")
D.un=new C.hC(2,"slideLeft")
D.cVk=w([D.mJ,D.HX,D.uo,D.RN,D.un],x.i)
D.cVQ=w([A.bX,A.hi,A.ix,A.hJ,A.c],x.O)
D.b1K=new B.ac(0,A.G,D.adR,A.uu,30)
D.cWx=w([D.b1K],x.V)
D.e7X=new B.u(0,-2.5)
D.e7N=new B.u(-2.5,0)
D.e6v=new B.u(2.5,0)
D.cWA=w([A.S2,A.a5k,A.aH0,A.a5j,D.e7X,I.aGX,D.e7N,D.e6v],x.dN)
D.H8=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cX1=w([23,114,69,56,80,144],x.t)
D.cXt=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cXT=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cZr=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cZv=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uE(0,"rectangle")
D.eM=new C.uE(1,"circle")
D.l6=new C.uE(6,"hexagon")
D.cZJ=w([D.bf,D.eM,D.l6],x.m)
D.oa=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.af1=new B.v(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d_h=w([D.af1,A.dZ],x.O)
D.em4=new B.z("","Classic")
D.ekv=new B.z("caps","Bold caps")
D.ewv=new B.z("elegant","Elegant")
D.eC2=new B.z("shadow","Shadow")
D.eqn=new B.z("neon","Neon glow")
D.eAG=new B.z("outline","Outline")
D.ezS=new B.z("marker","Highlighter")
D.eCd=new B.z("stamp","Stamp")
D.eBF=new B.z("retro","Retro")
D.epl=new B.z("threed","3D")
D.ex1=new B.z("fire","Fire")
D.exY=new B.z("ice","Ice")
D.evF=new B.z("chalk","Chalk")
D.evK=new B.z("comic","Comic")
D.eCf=new B.z("sunset","Sunset")
D.eDm=new B.z("softglow","Soft glow")
D.eyW=new B.z("lowercase","Lowercase")
D.ewc=new B.z("double","Echo")
D.eDv=new B.z("whisper","Whisper")
D.awy=w([D.em4,D.ekv,D.ewv,D.eC2,D.eqn,D.eAG,D.ezS,D.eCd,D.eBF,D.epl,I.aM9,D.ex1,D.exY,D.evF,D.evK,A.a66,D.eCf,D.eDm,D.eyW,D.ewc,D.eDv],x.L)
D.d0y=w([3,5,7,10,12,15],x.t)
D.d1T=w([A.bX,A.bL,A.c,A.eB,A.cs],x.O)
D.dpA=new C.tg(10,"cardWorld")
D.Cz=new C.Bn(3,"rounded")
D.dFT=new C.ld("world","NGMY World",D.dpA,D.Cz,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dpB=new C.tg(11,"cardSplit")
D.dFP=new C.ld("business","Business Wire",D.dpB,D.Cz,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dpC=new C.tg(12,"cardBreaking")
D.dG1=new C.ld("breaking","Breaking Red",D.dpC,D.Cz,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dpD=new C.tg(13,"cardFeature")
D.dFV=new C.ld("feature","Tech Feature",D.dpD,D.Cz,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aEv=new C.tg(6,"circle")
D.aEp=new C.Bn(4,"circle")
D.dFZ=new C.ld("parchment","Royal Circle",D.aEv,D.aEp,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dFO=new C.ld("ocean","Blue Ocean",D.aEv,D.aEp,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dpG=new C.tg(7,"rail")
D.aEo=new C.Bn(1,"double")
D.dFQ=new C.ld("forest","Green Leaf",D.dpG,D.aEo,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEs=new C.tg(1,"sideBySide")
D.dG3=new C.ld("herald","NGMY Herald",D.aEs,D.Cz,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEr=new C.tg(0,"classic")
D.a4a=new C.Bn(9,"shadow")
D.dG2=new C.ld("daily","The Daily",D.aEr,D.a4a,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dpE=new C.tg(2,"splash")
D.aEq=new C.Bn(6,"cutCorner")
D.dFN=new C.ld("tabloid","Big Tabloid",D.dpE,D.aEq,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aEw=new C.tg(9,"minimal")
D.dFY=new C.ld("modern","Modern Digest",D.aEw,D.Cz,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEt=new C.tg(3,"magazine")
D.aEn=new C.Bn(0,"plain")
D.dFU=new C.ld("midnight","Midnight Edition",D.aEt,D.aEn,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dpH=new C.tg(8,"banner")
D.dFW=new C.ld("metro","Metro Wire",D.dpH,D.aEq,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dpz=new C.Bn(8,"arch")
D.dFX=new C.ld("sunrise","Sunrise Post",D.aEt,D.dpz,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEu=new C.tg(5,"scrapbook")
D.dpy=new C.Bn(5,"tape")
D.dFS=new C.ld("neon","Neon Beat",D.aEu,D.dpy,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dpF=new C.tg(4,"wrap")
D.dG4=new C.ld("gold","Golden Press",D.dpF,D.a4a,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dG5=new C.ld("minimal","Paper White",D.aEw,D.a4a,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dFR=new C.ld("gazette","Fresh Gazette",D.aEr,D.aEo,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dG0=new C.ld("times","Classic Times",D.aEs,D.aEn,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Rj=new C.Bn(2,"polaroid")
D.dG_=new C.ld("scrapbook","Memory Scrapbook",D.aEu,D.Rj,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2A=w([D.dFT,D.dFP,D.dG1,D.dFV,D.dFZ,D.dFO,D.dFQ,D.dG3,D.dG2,D.dFN,D.dFY,D.dFU,D.dFW,D.dFX,D.dFS,D.dG4,D.dG5,D.dFR,D.dG0,D.dG_],B.ax("O<ld>"))
D.d24=w([0.45,1],x.x)
D.Ha=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d2t=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h19=new C.ou("Original",0,1,1,0,0,0)
D.h1d=new C.ou("Black & white",0,1.1,0,0,0,0)
D.h10=new C.ou("Noir",-0.05,1.55,0,0,0,0)
D.h14=new C.ou("Sepia",0,1,0.25,0.9,0,0)
D.h13=new C.ou("Vivid",0,1.15,1.6,0,0,0)
D.h0X=new C.ou("Pop",0,1.3,1.9,0,0,0)
D.h0Z=new C.ou("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h1a=new C.ou("Matte",0,0.9,0.85,0,0,0.55)
D.h15=new C.ou("Cool",0,1.05,1,-0.8,0,0)
D.h1c=new C.ou("Warm",0.03,1.05,1.1,0.8,0,0)
D.h0Y=new C.ou("Golden hour",0.04,1,1.25,1,0,0)
D.h12=new C.ou("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h1b=new C.ou("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h11=new C.ou("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h17=new C.ou("Retro",0,0.9,0.7,0.4,0,0.35)
D.h16=new C.ou("Forest",0,1,1.2,-0.1,-0.45,0)
D.h18=new C.ou("Rose",0,1,1.1,0.3,0.4,0)
D.h1_=new C.ou("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d2u=w([D.h19,D.h1d,D.h10,D.h14,D.h13,D.h0X,D.h0Z,D.h1a,D.h15,D.h1c,D.h0Y,D.h12,D.h1b,D.h11,D.h17,D.h16,D.h18,D.h1_],B.ax("O<ou>"))
D.b79=new B.v(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d2v=w([D.af1,A.dZ,D.b79],x.O)
D.ehM=new B.z(0.12,0.3)
D.ey8=new B.z(0.26,0.75)
D.ewr=new B.z(0.8,0.22)
D.eCn=new B.z(0.9,0.7)
D.eyV=new B.z(0.5,0.15)
D.eAI=new B.z(0.65,0.85)
D.enV=new B.z(0.08,0.85)
D.d2H=w([D.ehM,D.ey8,D.ewr,D.eCn,D.eyV,D.eAI,D.enV],x.G)
D.awK=w([A.b8,A.bX,A.bu,A.b2],x.O)
D.d3v=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d3H=w([A.c,A.f8,A.dv,A.v7],x.O)
D.bap=new B.v(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d4F=w([D.bap,D.adD],x.O)
D.d4G=w([A.v9,A.aw],x.O)
D.d4V=w([0,0.25,0.75,1],x.x)
D.d4X=w([A.x7,A.oE],x.O)
D.aFz=new C.kR(10,"kenteSunset")
D.h5G=w([D.ae1,A.jV,A.aw],x.O)
D.dB9=new C.jm("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFz,4294964964,4282000405,4279983648,D.jN)
D.aFA=new C.kR(11,"indigoMudcloth")
D.b86=new B.v(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.h5U=w([D.b86,A.adz,A.hZ],x.O)
D.dBh=new C.jm("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFA,4294439140,4279903102,4279903102,D.jN)
D.aFB=new C.kR(12,"adinkraRoyal")
D.bl2=new B.v(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.h5V=w([D.acw,D.bl2,A.aw],x.O)
D.dBj=new C.jm("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFB,4294965484,4285218591,4287322667,D.jN)
D.aFC=new C.kR(13,"nileLotus")
D.bhj=new B.v(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.be2=new B.v(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.h6_=w([D.bhj,D.be2,A.hZ],x.O)
D.dBi=new C.jm("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFC,4294244340,4279196764,4279196764,D.jN)
D.aFD=new C.kR(14,"shweshweIvory")
D.bch=new B.v(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bb7=new B.v(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b8z=new B.v(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.h5H=w([D.bch,D.bb7,D.b8z],x.O)
D.dBe=new C.jm("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFD,4294505710,4279970378,4291058750,D.jN)
D.rz=new C.kR(15,"certIvoryNavy")
D.h5F=w([D.Lm,D.je,A.hZ],x.O)
D.aF4=new C.xs(1,"ringsNdoa")
D.dBb=new C.jm("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rz,4294966259,4279378237,4291404327,D.aF4)
D.a4G=new C.xs(2,"coupleCards")
D.dB6=new C.jm("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rz,4294966259,4279378237,4291404327,D.a4G)
D.CC=new C.kR(18,"certIvoryNavyBar")
D.acv=new B.v(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.h5T=w([D.acv,D.je,A.hZ],x.O)
D.aF5=new C.xs(3,"kuhoweshaForm")
D.dB4=new C.jm("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CC,4294966519,4279378237,4291404327,D.aF5)
D.adP=new B.v(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.h6c=w([D.Lm,D.adP,A.hZ],x.O)
D.a4H=new C.xs(4,"mahariPande")
D.dB7=new C.jm("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rz,4294966259,4279904068,4291404327,D.a4H)
D.aFE=new C.kR(16,"certIvoryGreen")
D.bbH=new B.v(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.h5J=w([A.Kz,D.bbH,A.hZ],x.O)
D.aF6=new C.xs(5,"familiaMti")
D.dBd=new C.jm("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFE,4294966776,4280241466,4291404327,D.aF6)
D.a4I=new C.xs(6,"ndoaSafi")
D.dB5=new C.jm("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CC,4294966519,4279378237,4291404327,D.a4I)
D.bfM=new B.v(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.h5M=w([D.Lm,A.hZ,D.bfM],x.O)
D.a4J=new C.xs(7,"peteWide")
D.dBa=new C.jm("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rz,4294966259,4282001936,4291404327,D.a4J)
D.dBk=new C.xs(8,"muhuriCrest")
D.dB3=new C.jm("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rz,4294966259,4279378237,4291404327,D.dBk)
D.h5W=w([D.acv,D.adP,A.hZ],x.O)
D.dBl=new C.xs(9,"fomuWazi")
D.dBg=new C.jm("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CC,4294966519,4279904068,4291404327,D.dBl)
D.aFF=new C.kR(17,"certIvoryRose")
D.bcl=new B.v(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.h5Z=w([D.bcl,D.aeF,A.hZ],x.O)
D.a4F=new C.xs(10,"upendoOrnate")
D.dBc=new C.jm("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFF,4294965493,4286200650,4291404327,D.a4F)
D.d5m=w([D.dB9,D.dBh,D.dBj,D.dBi,D.dBe,D.dBb,D.dB6,D.dB4,D.dB7,D.dBd,D.dB5,D.dBa,D.dB3,D.dBg,D.dBc],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HY=new C.vW(0,"emojis")
D.CJ=new C.vW(1,"pictures")
D.HZ=new C.vW(2,"icons3d")
D.a5_=new C.vW(3,"animations")
D.RP=new C.vW(4,"videoMotion")
D.CK=new C.vW(5,"luxe")
D.a2I=w([D.HY,D.CJ,D.HZ,D.a5_,D.RP,D.CK],B.ax("O<vW>"))
D.eBi=new B.z(A.dX,"Looks")
D.epV=new B.z(A.yu,"Light")
D.epS=new B.z(A.nk,"Colour")
D.enW=new B.z(A.y5,"Effects")
D.al_=new B.a0(63112,"MaterialIcons",!1)
D.ekL=new B.z(D.al_,"Crop")
D.d5Q=w([D.eBi,D.epV,D.epS,D.enW,D.ekL],x.f2)
D.d6s=w([],x.D)
D.h69=w([],x.L)
D.eo8=new B.z("Flashcard",D.HT)
D.erQ=new B.z("Quiz",D.HU)
D.etJ=new B.z("Worksheet",D.HV)
D.eqU=new B.z("Notes",D.mI)
D.esl=new B.z("Section",D.CH)
D.d76=w([D.eo8,D.erQ,D.etJ,D.eqU,D.esl],B.ax("O<+(n,mw)>"))
D.dD1=new C.kR(6,"beadedPearl")
D.beH=new B.v(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.h6d=w([H.Xi,D.beH,A.hZ],x.O)
D.aF2=new C.jm("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dD1,4294966774,4286209070,4291404327,D.jN)
D.dD2=new C.kR(7,"artDeco")
D.biy=new B.v(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bll=new B.v(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.h6b=w([D.biy,D.bll,A.c_],x.O)
D.aF3=new C.jm("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dD2,4294440434,4280228630,4290283019,D.jN)
D.dD3=new C.kR(8,"rosetteCorners")
D.bkv=new B.v(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bau=new B.v(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.beC=new B.v(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.h5P=w([D.bkv,D.bau,D.beC],x.O)
D.aF1=new C.jm("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dD3,4294702831,4285218602,4291394365,D.jN)
D.dD4=new C.kR(9,"modernLedger")
D.h5O=w([A.c,D.je,D.je],x.O)
D.aF0=new C.jm("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dD4,4294967295,4279378237,4279378237,D.jN)
D.d7a=w([D.aF2,D.aF3,D.aF1,D.aF0],x.h)
D.d7i=w([A.ix,A.oE],x.O)
D.cm=new C.hC(0,"none")
D.dd=new C.hC(1,"fade")
D.HW=new C.hC(3,"slideRight")
D.aG0=new C.hC(5,"slideDown")
D.dXH=new C.hC(7,"zoomOut")
D.a4Z=new C.hC(11,"cube")
D.dXC=new C.hC(12,"blur")
D.aFY=new C.hC(13,"dissolve")
D.dXD=new C.hC(14,"wipeLeft")
D.dXE=new C.hC(15,"wipeRight")
D.RO=new C.hC(17,"push")
D.dXF=new C.hC(18,"flash")
D.aG_=new C.hC(20,"swing")
D.dXG=new C.hC(21,"curtain")
D.Qr=w([D.cm,D.dd,D.un,D.HW,D.uo,D.aG0,D.mJ,D.dXH,D.HX,D.aG1,D.RN,D.a4Z,D.dXC,D.aFY,D.dXD,D.dXE,D.qg,D.RO,D.dXF,D.aFZ,D.aG_,D.dXG],x.i)
D.Qs=w([D.a4E,D.a4C,D.a4v,D.a4w,D.a4x,D.a4A,D.a4y,D.a4z,D.a4D,D.a4B,D.aF2,D.aF3,D.aF1,D.aF0],x.h)
D.d7K=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d7O=w([A.xb,A.hJ,A.c_],x.O)
D.epf=new B.z(A.tW,"Design")
D.eCN=new B.z(D.alh,"Word sizes")
D.eyF=new B.z(A.BN,"Text")
D.bFy=new B.a0(983182,"MaterialIcons",!1)
D.eyJ=new B.z(D.bFy,"Photo")
D.ekj=new B.z(A.lr,"Logo")
D.eDY=new B.z(A.Gv,"News")
D.d7T=w([D.epf,D.eCN,D.eyF,D.eyJ,D.ekj,D.eDY],x.f2)
D.d7U=w(["golddust","sparkle","sheen"],x.s)
D.dZ3=new C.ev("upload_pdf",L.NJ,"Upload PDF")
D.dYd=new C.ev("sign_paper",A.Gs,"Sign Paper")
D.bEO=new B.a0(63438,"MaterialIcons",!1)
D.dZ_=new C.ev("hd_photo",D.bEO,"HD Photo")
D.dY5=new C.ev("sharpen",E.a_E,"Sharpen")
D.dYf=new C.ev("print",L.NJ,"Download PDF")
D.dYH=new C.ev("rotate",D.al_,"Rotate")
D.dYo=new C.ev("text_box",A.BN,"Text Box")
D.dYq=new C.ev("picture",A.u_,"Picture")
D.dYm=new C.ev("title",A.yo,"Title")
D.dYi=new C.ev("subtitle",T.alR,"Subtitle")
D.dYQ=new C.ev("bullets",K.a_V,"Bullet List")
D.dYj=new C.ev("numbered",A.Ny,"Numbered")
D.dYT=new C.ev("quote",A2.BE,"Quote")
D.dYv=new C.ev("citation",A.o3,"Citation")
D.dYW=new C.ev("date_stamp",Ah.a_J,"Date Stamp")
D.dYJ=new C.ev("page_number",A.yn,"Page #")
D.dYN=new C.ev("header_bar",A.BP,"Header")
D.dYp=new C.ev("footer_bar",Aq.a0q,"Footer")
D.dYe=new C.ev("divider",A.tZ,"Divider")
D.dYa=new C.ev("highlight",A.a00,"Highlight")
D.dYP=new C.ev("redact",A.yr,"Redact")
D.dYC=new C.ev("callout",A.BA,"Callout")
D.dYY=new C.ev("checkboxes",K.akf,"Checklist")
D.dYz=new C.ev("table",A.a0n,"Table")
D.dYt=new C.ev("memo",K.a0a,"Memo")
D.dYD=new C.ev("letter",A.Gh,"Letter")
D.bEq=new B.a0(63259,"MaterialIcons",!0)
D.dY4=new C.ev("agenda",D.bEq,"Agenda")
D.dYg=new C.ev("toc",AA.alt,"Contents")
D.bEK=new B.a0(63406,"MaterialIcons",!1)
D.dYA=new C.ev("sig_line",D.bEK,"Sign Line")
D.dXY=new C.ev("initial_line",A.jp,"Initials")
D.dY0=new C.ev("approved",A.lr,"APPROVED")
D.dYF=new C.ev("draft",A.oW,"DRAFT")
D.dYL=new C.ev("confidential",A.jq,"Confidential")
D.dYO=new C.ev("sticky",A.NQ,"Sticky Note")
D.dYX=new C.ev("progress",A.als,"Progress")
D.bG1=new B.a0(983507,"MaterialIcons",!1)
D.dYb=new C.ev("stars",D.bG1,"Star Rating")
D.dXW=new C.ev("equation",A.alj,"Equation")
D.dY6=new C.ev("timeline",A.NS,"Timeline")
D.dYu=new C.ev("two_col",A.a0r,"Two Columns")
D.dY8=new C.ev("compare",A1.a_M,"Compare")
D.dXU=new C.ev("duplicate_el",A.fN,"Duplicate")
D.dZ1=new C.ev("delete_el",A.e6,"Delete")
D.dYS=new C.ev("bring_fwd",H.ald,"Bring Front")
D.dXZ=new C.ev("send_back",H.alc,"Send Back")
D.dYE=new C.ev("align_left",D.a_T,"Align L")
D.dYK=new C.ev("align_center",D.a_S,"Align C")
D.dZ0=new C.ev("align_right",D.a_U,"Align R")
D.dYn=new C.ev("word_count",A_.a_n,"Word Count")
D.dYk=new C.ev("link_text",A.hp,"Link")
D.dYI=new C.ev("phone",A.iH,"Phone")
D.dY9=new C.ev("email",A.BC,"Email")
D.dZ2=new C.ev("qr_placeholder",A.js,"QR Placeholder")
D.dY3=new C.ev("rectangle",A3.vF,"Rectangle")
D.dYy=new C.ev("circle",A.rb,"Circle")
D.dY_=new C.ev("arrow",A.j_,"Arrow")
D.dYR=new C.ev("line",A.tZ,"Line")
D.dYc=new C.ev("triangle",A.a_K,"Triangle")
D.bEy=new B.a0(63318,"MaterialIcons",!1)
D.dYh=new C.ev("grayscale",D.bEy,"Grayscale")
D.dYr=new C.ev("brighten",K.akz,"Brighten")
D.dYw=new C.ev("flip_h",A.G6,"Flip H")
D.bEF=new B.a0(63348,"MaterialIcons",!1)
D.dYZ=new C.ev("flip_v",D.bEF,"Flip V")
D.dYM=new C.ev("cover_page",A.pY,"Cover Page")
D.dXX=new C.ev("invoice",A.hb,"Invoice")
D.dY7=new C.ev("resume",A.mu,"Resume")
D.dYl=new C.ev("minutes",A.oQ,"Minutes")
D.dY1=new C.ev("lab_report",A.NM,"Lab Report")
D.dY2=new C.ev("rubric",A.tX,"Rubric")
D.dYx=new C.ev("flashcard_tool",V.Gp,"Flashcard")
D.dYU=new C.ev("quiz_tool",A.Gm,"Quiz Block")
D.dYB=new C.ev("worksheet_tool",M.FX,"Worksheet")
D.dYG=new C.ev("outline_share",A.NO,"Share Outline")
D.dYV=new C.ev("export_json",D.akl,"Export JSON")
D.dXV=new C.ev("new_slide",D.a_m,"New Slide")
D.dYs=new C.ev("present",A.q3,"Present")
D.d8k=w([D.dZ3,D.dYd,D.dZ_,D.dY5,D.dYf,D.dYH,D.dYo,D.dYq,D.dYm,D.dYi,D.dYQ,D.dYj,D.dYT,D.dYv,D.dYW,D.dYJ,D.dYN,D.dYp,D.dYe,D.dYa,D.dYP,D.dYC,D.dYY,D.dYz,D.dYt,D.dYD,D.dY4,D.dYg,D.dYA,D.dXY,D.dY0,D.dYF,D.dYL,D.dYO,D.dYX,D.dYb,D.dXW,D.dY6,D.dYu,D.dY8,D.dXU,D.dZ1,D.dYS,D.dXZ,D.dYE,D.dYK,D.dZ0,D.dYn,D.dYk,D.dYI,D.dY9,D.dZ2,D.dY3,D.dYy,D.dY_,D.dYR,D.dYc,D.dYh,D.dYr,D.dYw,D.dYZ,D.dYM,D.dXX,D.dY7,D.dYl,D.dY1,D.dY2,D.dYx,D.dYU,D.dYB,D.dYG,D.dYV,D.dXV,D.dYs],B.ax("O<ev>"))
D.d8v=w([A.cr,A.ak],x.O)
D.ejS=new B.z(4286331629,4292552567)
D.ejF=new B.z(4280640491,4278630100)
D.ek_=new B.z(4294538006,4292943176)
D.ej1=new B.z(4278556265,4280640491)
D.d2R=w([D.ejS,D.ejF,D.ek_,D.ej1],x.n)
D.cs2=w([4294626325,4280472558,4294210230],x.t)
D.dXP=new C.nJ("colorful","Colorful",A.nk,D.d2R,4294967295,3875536895,D.cs2,D.mJ)
D.ejt=new B.z(4279522093,4279657780)
D.ejJ=new B.z(4281750292,4283268111)
D.ej4=new B.z(4278603323,4279203438)
D.ejK=new B.z(4282343954,4279599165)
D.cCW=w([D.ejt,D.ejJ,D.ej4,D.ejK],x.n)
D.crL=w([4288931381,4294829706,4287033260],x.t)
D.dXL=new C.nJ("nature","Nature",A.Gt,D.cCW,4294442727,3874290891,D.crL,D.dd)
D.ejn=new B.z(4279369771,4283178389)
D.ejk=new B.z(4279179050,4286456526)
D.ejB=new B.z(4280163147,4290648157)
D.eiU=new B.z(4278322711,4285343961)
D.cUt=w([D.ejn,D.ejk,D.ejB,D.eiU],x.n)
D.crZ=w([4294210230,4280472558,4289170426],x.t)
D.dXJ=new C.nJ("vibe","Vibe",A.a_Z,D.cUt,4294967295,3874869502,D.crZ,D.un)
D.ejW=new B.z(4290007817,4292552567)
D.ejQ=new B.z(4286328082,4294286859)
D.ejV=new B.z(4288485197,4294538006)
D.ejP=new B.z(4285343961,4293675161)
D.bZ7=w([D.ejW,D.ejQ,D.ejV,D.ejP],x.n)
D.cs3=w([4294829706,4294967295,4284999929],x.t)
D.dXK=new C.nJ("celebration","Celebration",A.lm,D.bZ7,4294967295,4009752557,D.cs3,D.qg)
D.eji=new B.z(4279179050,4280171146)
D.ejm=new B.z(4279310375,4280232247)
D.eja=new B.z(4278916151,4280172719)
D.ejj=new B.z(4279179050,4281549141)
D.cNx=w([D.eji,D.ejm,D.eja,D.ejj],x.n)
D.crG=w([4281908728,4294626325,4287931320],x.t)
D.dXO=new C.nJ("professional","Professional",A.By,D.cNx,4294967295,3872118241,D.crG,D.RO)
D.eje=new B.z(4278995566,4278413729)
D.ej6=new B.z(4278727492,4279137424)
D.ejC=new B.z(4280171146,4278751666)
D.ejf=new B.z(4278995566,4279590517)
D.cvQ=w([D.eje,D.ej6,D.ejC,D.ejf],x.n)
D.crJ=w([4286436348,4284410580,4294829706],x.t)
D.dXQ=new C.nJ("ocean","Ocean",K.a0t,D.cvQ,4294967295,3873501950,D.crJ,D.uo)
D.ejR=new B.z(4286328082,4294538006)
D.ejT=new B.z(4286781507,4294677052)
D.ejN=new B.z(4283178389,4294197086)
D.ejU=new B.z(4288295954,4294688548)
D.cJJ=w([D.ejR,D.ejT,D.ejN,D.ejU],x.n)
D.cs4=w([4294829706,4294967295,4294747557],x.t)
D.dXR=new C.nJ("sunset","Sunset",A.NU,D.cJJ,4294967295,4009749973,D.cs4,D.dd)
D.ek3=new B.z(4294967295,4294047225)
D.ejZ=new B.z(4294507260,4294967295)
D.ek2=new B.z(4294967295,4293060848)
D.ejY=new B.z(4294507260,4294047225)
D.cXz=w([D.ek3,D.ejZ,D.ek2,D.ejY],x.n)
D.crE=w([4280640491,4279179050,4287931320],x.t)
D.dXN=new C.nJ("minimal","Minimal",A3.vF,D.cXz,4279179050,4282865001,D.crE,D.dd)
D.ejd=new B.z(4278979081,4280886564)
D.ejx=new B.z(4280031511,4278979081)
D.ejl=new B.z(4279308561,4281148438)
D.ejc=new B.z(4278979081,4280031511)
D.dar=w([D.ejd,D.ejx,D.ejl,D.ejc],x.n)
D.crS=w([4292128567,4294829706,4289241758],x.t)
D.dXS=new C.nJ("elegant","Elegant",A.lV,D.dar,4294898631,3873957348,D.crS,D.aFY)
D.ejz=new B.z(4280159034,4282058596)
D.ej9=new B.z(4278916151,4280163147)
D.ejH=new B.z(4281208933,4278916151)
D.ejq=new B.z(4279502891,4283178389)
D.dhc=w([D.ejz,D.ej9,D.ejH,D.ejq],x.n)
D.cs0=w([4294296657,4292128567,4291081725],x.t)
D.dXM=new C.nJ("royal","Royal Gold",A.j1,D.dhc,4294965222,3874084351,D.cs0,D.mJ)
D.eiZ=new B.z(4278464302,4280163147)
D.ej8=new B.z(4278916151,4279455306)
D.ejA=new B.z(4280163147,4283040846)
D.eiW=new B.z(4278332450,4281413249)
D.d2y=w([D.eiZ,D.ej8,D.ejA,D.eiW],x.n)
D.crF=w([4281193663,4289170426,4294210230],x.t)
D.dXT=new C.nJ("aurora","Aurora Glow",A.dX,D.d2y,4293983738,3869766608,D.crF,D.dd)
D.w1=w([D.dXP,D.dXL,D.dXJ,D.dXK,D.dXO,D.dXQ,D.dXR,D.dXN,D.dXS,D.dXM,D.dXT],B.ax("O<nJ>"))
D.bfb=new B.v(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d92=w([A.qP,D.bfb,A.qP],x.O)
D.d9k=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d9o=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eyy=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eoQ=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.etj=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.egH=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.erZ=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eqf=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.euw=new B.z("Surprise me","")
D.d9U=w([D.eyy,D.eoQ,D.etj,D.egH,D.erZ,D.eqf,D.euw],x.L)
D.b8B=new B.v(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bj2=new B.v(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.daE=w([A.c,D.b8B,D.bj2],x.O)
D.dcC=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFx=new C.kR(0,"heritageGold")
D.bdS=new B.v(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.h6e=w([D.bdS,W.adZ,A.aw],x.O)
D.dBf=new C.jm("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFx,4294570461,4284234270,4292128567,D.jN)
D.aFy=new C.kR(1,"heritageCrimson")
D.b75=new B.v(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bci=new B.v(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.biT=new B.v(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.h5S=w([D.b75,D.bci,D.biT],x.O)
D.dB8=new C.jm("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFy,4294635750,4285213214,4292912216,D.jN)
D.dcG=w([D.a4E,D.a4C,D.dBf,D.dB8,D.a4x,D.a4A],x.h)
D.dH8=new C.rs(1,"circuit")
D.dHB=new C.m5("neural","Neural Link","Robotic",D.dH8,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dH7=new C.rs(0,"grid")
D.dHy=new C.m5("signal","Signal Grid","Robotic",D.dH7,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dHd=new C.rs(2,"hexes")
D.dHj=new C.m5("core","Core Protocol","Robotic",D.dHd,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFV=new C.rs(11,"diagonal")
D.dHu=new C.m5("steel","Steel Tech","Robotic",D.aFV,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFW=new C.rs(3,"rings")
D.dHi=new C.m5("vault","Vault Gold","Robotic",D.aFW,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dHb=new C.rs(13,"leaves")
D.dHl=new C.m5("forest","Forest Morning","Nature",D.dHb,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFX=new C.rs(5,"waves")
D.dHs=new C.m5("ocean","Ocean Calm","Nature",D.aFX,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dHe=new C.rs(6,"sunset")
D.dHx=new C.m5("sunset","Sunset Glow","Nature",D.dHe,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dHf=new C.rs(7,"mountains")
D.dHk=new C.m5("mountain","Mountain Air","Nature",D.dHf,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dHg=new C.rs(8,"stars")
D.dHr=new C.m5("night","Night Sky","Nature",D.dHg,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4X=new C.rs(4,"orbs")
D.dHp=new C.m5("aurora","Aurora","Nature",D.a4X,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dHz=new C.m5("sand","Sand Dune","Nature",D.aFX,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dHh=new C.rs(9,"rays")
D.dHo=new C.m5("golden","Golden Hour","Warm",D.dHh,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dHm=new C.m5("royal","Royal Purple","Warm",D.aFV,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dHn=new C.m5("rose","Rose Petal","Warm",D.a4X,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dHa=new C.rs(12,"blocks")
D.dHq=new C.m5("electric","Electric Blue","Bold",D.dHa,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dHA=new C.m5("mint","Fresh Mint","Bold",D.a4X,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dHc=new C.rs(14,"minimal")
D.dHw=new C.m5("white","Clean White","Clean",D.dHc,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dH9=new C.rs(10,"frame")
D.dHt=new C.m5("midnight","Midnight Gold","Clean",D.dH9,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dHv=new C.m5("community","Community Green","Clean",D.aFW,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3c=w([D.dHB,D.dHy,D.dHj,D.dHu,D.dHi,D.dHl,D.dHs,D.dHx,D.dHk,D.dHr,D.dHp,D.dHz,D.dHo,D.dHm,D.dHn,D.dHq,D.dHA,D.dHw,D.dHt,D.dHv],B.ax("O<m5>"))
D.dd2=w([D.AI,A.v9,A.hJ,A.c_],x.O)
D.ddk=w([D.aeP,D.je],x.O)
D.ddv=w(["pdf","docx","txt","md"],x.s)
D.eHu=new B.bk(-3,150,34)
D.eHv=new B.bk(-3,214,62)
D.eHw=new B.bk(-3,288,62)
D.dej=w([D.eHu,D.eHv,D.eHw],B.ax("O<+(L,L,L)>"))
D.deM=w(["rays","bokeh","aurora","spotlight"],x.s)
D.deP=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dfo=w(["Write","Design","Print & fold"],x.s)
D.jO=new C.uE(2,"triangle")
D.CI=new C.uE(3,"arrow")
D.fs=new C.uE(4,"line")
D.jP=new C.uE(5,"parallelogram")
D.dfr=w([D.bf,D.eM,D.jO,D.CI,D.fs,D.jP,D.l6],x.m)
D.ei0=new B.z(240,96)
D.ekD=new B.z(560,46)
D.dfw=w([D.ei0,D.ekD],x.G)
D.h6p=new C.xv(0,"classic")
D.dD7=new C.nF("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFx,4294570461,4282000405,4284234270)
D.dDj=new C.nF("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFy,4294635750,4281999378,4285213214)
D.dD8=new C.nF("elegant_navy","Umoja Mzuri",y.s,D.a4R,4294967035,4279378237,4290283019)
D.dDl=new C.nF("elegant_gold","Umoja wa Dhahabu",y.Q,D.aFG,4294966515,4281016592,4289102906)
D.dDn=new C.nF("kente_sunset","Kente ya Jua",y.H,D.aFz,4294964964,4282000405,4279983648)
D.dD5=new C.nF("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFA,4294439140,4279903102,4279903102)
D.dDa=new C.nF("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFB,4294965484,4285218591,4287322667)
D.dDf=new C.nF("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFC,4294244340,4279196764,4279196764)
D.dDh=new C.nF("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFD,4294505710,4279970378,4291058750)
D.h6q=new C.xv(1,"ringsNdoa")
D.dD9=new C.nF("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rz,4294966259,4279378237,4291404327)
D.h6s=new C.xv(2,"coupleCards")
D.dDk=new C.nF("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rz,4294966259,4279378237,4291404327)
D.h6t=new C.xv(3,"kuhoweshaForm")
D.dDg=new C.nF("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CC,4294966519,4279378237,4291404327)
D.h6u=new C.xv(4,"mahariPande")
D.dD6=new C.nF("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rz,4294966259,4279904068,4291404327)
D.h6v=new C.xv(5,"familiaMti")
D.dDm=new C.nF("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFE,4294966776,4280241466,4291404327)
D.h6w=new C.xv(6,"ndoaSafi")
D.dDd=new C.nF("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CC,4294966519,4279378237,4291404327)
D.h6x=new C.xv(7,"peteWide")
D.dDc=new C.nF("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rz,4294966259,4282001936,4291404327)
D.h6y=new C.xv(8,"muhuriCrest")
D.dDb=new C.nF("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rz,4294966259,4279378237,4291404327)
D.h6z=new C.xv(9,"fomuWazi")
D.dDe=new C.nF("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CC,4294966519,4279904068,4291404327)
D.h6r=new C.xv(10,"upendoOrnate")
D.dDi=new C.nF("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFF,4294965493,4286200650,4291404327)
D.QG=w([D.dD7,D.dDj,D.dD8,D.dDl,D.dDn,D.dD5,D.dDa,D.dDf,D.dDh,D.dD9,D.dDk,D.dDg,D.dD6,D.dDm,D.dDd,D.dDc,D.dDb,D.dDe,D.dDi],B.ax("O<nF>"))
D.CG=new C.aqL(0,"landscape169")
D.od=new C.aqL(1,"portrait916")
D.dgh=w([D.CG,D.od],B.ax("O<aqL>"))
D.ayg=w([A.hJ,A.bL,A.cs,A.ix,A.c],x.O)
D.ug=w([A.c_,A.id],x.O)
D.eh8=new B.z(1000,"M")
D.elV=new B.z(900,"CM")
D.ekx=new B.z(500,"D")
D.eiP=new B.z(400,"CD")
D.eh9=new B.z(100,"C")
D.elW=new B.z(90,"XC")
D.eky=new B.z(50,"L")
D.eiQ=new B.z(40,"XL")
D.ehf=new B.z(10,"X")
D.em6=new B.z(9,"IX")
D.ekP=new B.z(5,"V")
D.eki=new B.z(4,"IV")
D.ehH=new B.z(1,"I")
D.dgT=w([D.eh8,D.elV,D.ekx,D.eiP,D.eh9,D.elW,D.eky,D.eiQ,D.ehf,D.em6,D.ekP,D.eki,D.ehH],x.ek)
D.eIv=new B.cA(["open",A.jp,"Open & write","Keep writing this book"])
D.eIW=new B.cA(["print",A.u2,"Print as a book","Fold and staple it"])
D.dh2=w([D.eIv,D.eIW],B.ax("O<+(n,a0,n,n)>"))
D.dhK=w([D.a4Z,D.mJ,D.HX,D.RO,D.dd,D.RN],x.i)
D.ezb=new B.z(-1,"Small")
D.egV=new B.z(0,"Normal")
D.ehG=new B.z(1,"Big")
D.eig=new B.z(2,"Huge")
D.die=w([D.ezb,D.egV,D.ehG,D.eig],x.ek)
D.diE=w([49,65,89,38,83,89],x.t)
D.diL=w([A.v9,A.hJ,A.c_],x.O)
D.djc=w([D.dd,D.mJ,D.un,D.a4Z,D.HX,D.RO],x.i)
D.aDz=new B.dT([0,D.LE,8,D.ag8,12,D.ag9],B.ax("dT<G,a3z>"))
D.e2R={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.biK=new B.v(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cNH=w([A.bL,D.biK],x.O)
D.d6T=w([A.b3,A.bk],x.O)
D.d1F=w([A.bX,A.aP,A.bN],x.O)
D.dh3=w([A.cr,A.br],x.O)
D.cVo=w([A.b8,A.fb],x.O)
D.d4k=w([A.b6,A.fc],x.O)
D.bc2=new B.v(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d3C=w([D.bc2,A.oE],x.O)
D.cZd=w([A.h3,A.xc],x.O)
D.cVc=w([A.bv,A.ce],x.O)
D.dlP=new B.bl(D.e2R,[D.cNH,I.aoO,D.d6T,D.d1F,D.dh3,D.cVo,D.d4k,D.d3C,D.cZd,D.cVc],B.ax("bl<n,ai<v>>"))
D.e1Z={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3P=new B.bl(D.e1Z,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bl<n,n>"))
D.a3W=new B.bl(A.i8,[],B.ax("bl<G,+icon3d,picture(n?,n?)>"))
D.dqj=new F.MM(30,null)
D.dvn=new F.ms("Chapter 1","","","")
D.dg3=w([D.dvn],x.B)
D.dvr=new F.ri("My Book","","",D.dg3,E.aER)
D.dvp=new F.uu("starry",null,null,null,null,"","","")
D.dvs=new F.ri("Dream Big","","",E.a2R,D.dvp)
D.dvq=new F.uu("story",null,null,null,null,"","","")
D.dvt=new F.ri("Little Lion","","",E.a2R,D.dvq)
D.dvo=new F.uu("vintage",null,null,null,null,"","","")
D.dvu=new F.ri("Our Story","","",E.a2R,D.dvo)
D.dyv=new C.Ep("","NGMY","","")
D.dFM=new C.zp("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dXI=new C.b0F(null,null,null,null)
D.dZq=new C.aqQ(null)
D.dZD=new C.arl(0,"smaller")
D.dZE=new C.arl(1,"bigger")
D.aGa=new C.arl(2,"fit")
D.e5r=new B.u(3,6)
D.e5B=new B.u(4,8)
D.e91=new B.D(E.agZ,T.abT,null)
D.e95=new B.D(A.Yj,A.lH,null)
D.bHj=new B.ae(A.lp,16,A.c0,null,null,null)
D.e99=new B.D(A.iZ,D.bHj,null)
D.b6u=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e9l=new B.D(A.FA,D.b6u,null)
D.bRA=new B.ae(A.cD,16,A.aA,null,null,null)
D.e9p=new B.D(A.ek,D.bRA,null)
D.fnn=new B.y("Play",null,A.nz,null,null,null,null,null,null,null,null,null)
D.d77=w([U.ang,A.rM,D.fnn],x.p)
D.eN6=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.d77,null)
D.e9s=new B.D(A.o_,D.eN6,null)
D.b6D=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eSy=new B.a7(20,20,D.b6D,null)
D.e9x=new B.D(A.iZ,D.eSy,null)
D.fws=new B.y("Seconds per slide",null,A.hs,null,null,null,null,null,null,null,null,null)
D.e9F=new B.D(A.bm,D.fws,null)
D.eb_=new C.a8o(2,"print")
D.eb2=new B.iP(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ecF=new B.hc("/Annot")
D.ecH=new B.hc("/URI")
D.fhH=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eeJ=new B.jo("share",48,D.fhH,null,B.ax("jo<n>"))
D.bRu=new B.ae(A.dX,14,A.eB,null,null,null)
D.eeS=new B.cL(null,-2,-2,null,null,null,D.bRu,null)
D.cPJ=w([H.aet,A.K],x.O)
D.bXW=new B.a8(A.a3,A.a8,A.x,D.cPJ,null,null)
D.b_h=new B.o(null,null,null,null,null,D.bXW,A.n)
D.bnG=new B.kO(D.b_h,A.be,null,null)
D.ef3=new B.cL(0,0,null,0,8,null,D.bnG,null)
D.dbF=w([A.hY,A.mk,A.cg],x.O)
D.efI=new B.bT(A.A,0.5,A.x,null,0,D.dbF,null,null)
D.ei9=new B.z(0.22,A.bk)
D.emr=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eov=new B.z(0.5,A.hi)
D.exH=new B.z(0.78,A.aV)
D.eIl=new B.cA([A.bu,0.22,0.7,2.6])
D.eIr=new B.cA([A.b8,0.36,1.2,1.3])
D.eIx=new B.cA([A.dR,0.28,0.2,0.4])
D.eID=new B.cA([A.cB,0.05,0.3,0.35])
D.eIJ=new B.cA([A.bv,0.28,0.9,0])
D.eIR=new B.cA([A.aE,-0.25,-0.15,0.45])
D.eJH=new B.cA([A.bX,0.42,1,4.1])
D.eMP=new B.a9l(9)
D.bIq=new B.ae(A.Gv,28,A.bN,null,null,null)
D.fx_=new B.y("NGMY News",null,A.dj,null,null,null,null,null,null,null,null,null)
D.bxx=new B.bB(1,A.bg,D.fx_,null)
D.deQ=w([D.bIq,A.au,D.bxx],x.p)
D.eN0=new B.cl(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.deQ,null)
D.bIB=new B.ae(A.o3,16,A.c,null,null,null)
D.fyv=new B.y("Book",null,A.ol,null,null,null,null,null,null,null,null,null)
D.diK=w([D.bIB,A.ec,D.fyv],x.p)
D.eN8=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.diK,null)
D.bP4=new B.ae(A.jq,10,A.c,null,null,null)
D.fls=new B.y("Pro",null,A.nw,null,null,null,null,null,null,null,null,null)
D.d7c=w([D.bP4,A.qo,D.fls],x.p)
D.eNc=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.d7c,null)
D.fwq=new B.y("Make a newspaper",null,Au.TO,null,null,null,null,null,null,null,null,null)
D.bZ5=w([E.a0O,A.ab,D.fwq],x.p)
D.eNd=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.bZ5,null)
D.bND=new B.ae(A.lm,18,A.bL,null,null,null)
D.fnB=new B.y("Ending celebration",null,A.hF,null,null,null,null,null,null,null,null,null)
D.ddV=w([D.bND,A.bp,D.fnB],x.p)
D.eNg=new B.cl(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.ddV,null)
D.bOR=new B.ae(A.jp,18,A.k_,null,null,null)
D.f2c=new B.H(!0,A.k_,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyN=new B.y("Write",null,D.f2c,null,null,null,null,null,null,null,null,null)
D.cXn=w([D.bOR,A.ab,D.fyN],x.p)
D.eNn=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.cXn,null)
D.flq=new B.y("Download picture",null,A.pc,null,null,null,null,null,null,null,null,null)
D.bzE=new B.ql(A.ei,A.A,A.f,D.flq,null)
D.bzP=new B.dq(1,A.co,D.bzE,null)
D.d7z=w([L.an6,A.ab,D.bzP],x.p)
D.eNo=new B.cl(A.aO,A.b9,A.j,A.m,null,A.p,null,0,D.d7z,null)
D.bKo=new B.ae(A.Gv,22,A.bN,null,null,null)
D.fv1=new B.y("NGMY NEWS",null,I.a7y,null,null,null,null,null,null,null,null,null)
D.cP9=w([D.bKo,A.ab,D.fv1],x.p)
D.eNx=new B.cl(A.aO,A.e,A.P,A.m,null,A.p,null,0,D.cP9,null)
D.eNJ=new B.p8(!1,!1,null,T.VI,null,A.bZ,null,null,null)
D.a6C=new B.ji([D.cm,D.dd,D.un,D.HW,D.uo,D.aG0],B.ax("ji<hC>"))
D.e4f={title:0,quote:1,closing:2,bio:3}
D.eOR=new B.em(D.e4f,4,x.M)
D.e2h={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eOT=new B.em(D.e2h,5,x.M)
D.e3H={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6D=new B.em(D.e3H,8,x.M)
D.e3_={Design:0,Transitions:1,Insert:2}
D.eOY=new B.em(D.e3_,3,x.M)
D.h6H=new B.ji([D.a5_],B.ax("ji<vW>"))
D.e38={float3d:0,drift:1,pulse:2}
D.eP1=new B.em(D.e38,3,x.M)
D.aNj=new B.ji([D.HT,D.HU,D.HV],B.ax("ji<mw>"))
D.e2e={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNm=new B.em(D.e2e,14,x.M)
D.h6I=new B.em(A.i8,0,B.ax("em<vW>"))
D.e35={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.SU=new B.em(D.e35,4,x.M)
D.e26={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aNp=new B.em(D.e26,30,x.M)
D.e3d={circle:0,triangle:1,hexagon:2,diamond:3}
D.ePj=new B.em(D.e3d,4,x.M)
D.eRw=new B.ar(390,844)
D.eSi=new B.a7(20,20,A6.Ks,null)
D.aOa=new B.a7(null,2.5,null,null)
D.eSs=new B.a7(18,18,A6.Ks,null)
D.bOV=new B.ae(A.j1,19,A.c,null,null,null)
D.eSD=new B.a7(38,38,D.bOV,null)
D.bNc=new B.ae(A.yv,22,A.c,null,null,null)
D.eSF=new B.a7(40,40,D.bNc,null)
D.eTd=new B.hN(2,10,10,1.15,null)
D.aOi=new B.hN(2,16,14,0.62,null)
D.bvB=new B.Q(32,30,32,40)
D.b7Y=new B.v(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bIn=new B.ae(A.pY,56,D.b7Y,null,null,null)
D.afk=new B.v(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f49=new B.H(!0,D.afk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new B.y("Your books will live here.",null,D.f49,null,A.L,null,null,null,null,null,null,null)
D.d_8=w([D.bIn,A.R,D.fs4],x.p)
D.bmF=new B.fl(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d_8,null)
D.e9D=new B.D(D.bvB,D.bmF,null)
D.eTy=new B.m8(D.e9D,null)
D.fs1=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eTQ=new B.b1(D.fs1,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fq8=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eTR=new B.b1(D.fq8,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fv5=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new B.b1(D.fv5,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvD=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eUe=new B.b1(D.fvD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.foP=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eUr=new B.b1(D.foP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fCG=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eUK=new B.b1(D.fCG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzQ=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eUV=new B.b1(D.fzQ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvL=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eVB=new B.b1(D.fvL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjI=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVR=new B.b1(D.fjI,null,null,null,null,null,null,null,A.is,null,null,null,null,A.pO,!1,null,null,null,A.r,null)
D.flz=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eW8=new B.b1(D.flz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frI=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eWa=new B.b1(D.frI,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fro=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eWb=new B.b1(D.fro,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxN=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eWc=new B.b1(D.fxN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ffU=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new B.b1(D.ffU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmJ=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eWI=new B.b1(D.fmJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fBs=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new B.b1(D.fBs,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fB_=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eWO=new B.b1(D.fB_,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feU=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eWQ=new B.b1(D.feU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwV=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eWZ=new B.b1(D.fwV,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAA=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eXd=new B.b1(D.fAA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAr=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eXf=new B.b1(D.fAr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feM=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eXl=new B.b1(D.feM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiI=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new B.b1(D.fiI,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzD=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eXY=new B.b1(D.fzD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiw=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eYc=new B.b1(D.fiw,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.beT=new B.v(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cNV=w([A.ix,A.oE,D.beT,D.aci,A.ix],x.O)
D.eYA=new B.fV(A.A,0,6.283185307179586,A.x,D.cNV,null,null)
D.cWB=w([A.bL,A.c_,A.hJ,D.AI,A.bL],x.O)
D.aOS=new B.fV(A.A,0,6.283185307179586,A.x,D.cWB,null,null)
D.d9i=w([A.bX,A.bu,A.b8,A.b2,A.bN,A.bX],x.O)
D.eYF=new B.fV(A.A,0,6.283185307179586,A.x,D.d9i,null,null)
D.cPX=w([A.pL,A.oF,A.Ax,A.ix,A.pL],x.O)
D.eYG=new B.fV(A.A,0,6.283185307179586,A.x,D.cPX,null,null)
D.d9c=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eYH=new B.fV(A.A,0,6.283185307179586,A.x,D.d9c,null,null)
D.dgJ=w([A.bv,A.b8,A.bu,A.bX,A.bv],x.O)
D.eYJ=new B.fV(A.A,0,6.283185307179586,A.x,D.dgJ,null,null)
D.bfa=new B.v(1,0,1,1,A.t)
D.b9a=new B.v(1,1,0,1,A.t)
D.dcV=w([A.Eq,A.aeb,I.ad3,D.bfa,I.adu,D.b9a,A.Eq],x.O)
D.eYK=new B.fV(A.A,0,6.283185307179586,A.x,D.dcV,null,null)
D.eYZ=new C.avn(2,"immersiveSticky")
D.eZ_=new C.avn(3,"edgeToEdge")
D.eZ0=new C.avn(4,"manual")
D.f0p=new B.H(!0,A.oz,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPp=new B.H(!0,A.f6,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new B.H(!0,E.n4,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2t=new B.H(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3r=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3B=new B.H(!0,A.c0,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3W=new B.H(!0,A.eB,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5i=new B.H(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5r=new B.H(!0,A.jh,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5F=new B.rC(!0,A.Ie,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f68=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6L=new B.H(!0,A.jg,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f78=new B.H(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eb5=new B.iP(1,1,0.7568627450980392,0.027450980392156862)
D.f7c=new B.rC(!0,D.eb5,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aei=new B.v(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQ8=new B.H(!0,D.aei,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7k=new B.H(!0,D.afk,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7l=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQa=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7Y=new B.rC(!0,A.p6,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8f=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8M=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new B.H(!0,D.aei,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ja=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9g=new B.H(!0,A.c_,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9o=new B.H(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new B.H(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9J=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avZ,null,null,null)
D.f9L=new B.H(!0,A.c9,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9N=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fab=new B.H(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faI=new B.H(!0,A.aS,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faR=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new B.H(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQN=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQP=new B.H(!0,A.c0,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bkk=new B.v(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fcN=new B.H(!0,D.bkk,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQX=new B.H(!0,E.n4,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdh=new B.H(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new B.H(!0,O.li,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6m=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fey=new B.y("NEW",null,D.f6m,null,null,null,null,null,null,null,null,null)
D.feP=new B.y("Hati ya Kuhowesha",null,A.fG,null,null,null,null,null,null,null,null,null)
D.ffg=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new B.y("Scrollable PDF on this slide",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fgj=new B.y("Big quote mark",null,A.iO,null,null,null,null,null,null,null,null,null)
D.fgm=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fgx=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new B.y("How many slides?",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fhy=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f2f=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new B.y("Luxury FX",null,D.f2f,null,null,null,null,null,null,null,null,null)
D.fif=new B.y("Font",null,A.rQ,null,null,null,null,null,null,null,null,null)
D.fiq=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fcl=new B.H(!0,A.bJ,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new B.y("Example  GA847",null,D.fcl,null,null,null,null,null,null,null,null,null)
D.fj4=new B.y("Design shapes",null,A.iO,null,null,null,null,null,null,null,null,null)
D.fje=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fji=new B.y("Non-stop (loop)",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fjw=new B.y("Hati ya Kuhoweya",null,A.fG,null,null,null,null,null,null,null,null,null)
D.fjP=new B.y("Photo studio",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.fkh=new B.y("Add your picture",null,A.kg,null,null,null,null,null,null,null,null,null)
D.f5G=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fki=new B.y("Enter document code",null,D.f5G,null,A.L,null,null,null,null,null,null,null)
D.fkj=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f3h=new B.H(!0,E.n4,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkJ=new B.y("Delete this book?",null,D.f3h,null,A.L,null,null,null,null,null,null,null)
D.f7O=new B.H(!0,E.n4,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flB=new B.y("Your library",null,D.f7O,null,null,null,null,null,null,null,null,null)
D.flH=new B.y("Delete",null,A.aQ2,null,null,null,null,null,null,null,null,null)
D.flK=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Do,null,null,null,null,null,null,null,null,null)
D.flV=new B.y("Element flies in",null,A.aQe,null,null,null,null,null,null,null,null,null)
D.TY=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fmC=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new B.y("Cancel",null,E.aQp,null,null,null,null,null,null,null,null,null)
D.fmI=new B.y("The lines and circles that come with the design",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fbc=new B.H(!0,A.fU,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.y("DOCUMENT CODE",null,D.fbc,null,null,null,null,null,null,null,null,null)
D.fnX=new B.y("Quotes",null,G.a88,null,null,null,null,null,null,null,null,null)
D.f55=new B.H(!0,O.li,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new B.y("Add a picture",null,D.f55,null,null,null,null,null,null,null,null,null)
D.foc=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7R,null,A.L,null,null,null,null,null,null,null)
D.fog=new B.y("Look & feel",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fol=new B.y("Rings",null,A.hF,null,null,null,null,null,null,null,null,null)
D.fos=new B.y("W",null,A.rQ,null,null,null,null,null,null,null,null,null)
D.foC=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.foV=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TK,null,A.L,null,null,null,null,null,null,null)
D.foX=new B.y("Write your book",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fpG=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fpV=new B.y("Malipo ya Awamu ya Mahari",null,A.fG,null,null,null,null,null,null,null,null,null)
D.f5v=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq9=new B.y("Create with AI",null,D.f5v,null,A.L,null,null,null,null,null,null,null)
D.fqD=new B.y("Apply look",null,A.hF,null,null,null,null,null,null,null,null,null)
D.f6d=new B.H(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frq=new B.y("Type your presentation below",null,D.f6d,null,A.L,null,null,null,null,null,null,null)
D.frt=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aR0,null,A.L,null,null,null,null,null,null,null)
D.frv=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f1e=new B.H(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frC=new B.y("Done",null,D.f1e,null,null,null,null,null,null,null,null,null)
D.frX=new B.y("Delete",null,A.ny,null,null,null,null,null,null,null,null,null)
D.fs6=new B.y("Hati ya Kiapo cha Uongozi",null,A.fG,null,null,null,null,null,null,null,null,null)
D.f4r=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f4r,null,A.L,null,null,null,null,null,null,null)
D.ftl=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.ftr=new B.y("Layout",null,A.TQ,null,null,null,null,null,null,null,null,null)
D.fu4=new B.y("Print",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fua=new B.y("X",null,A.rQ,null,null,null,null,null,null,null,null,null)
D.fuJ=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.zF,null,null,null,null,null,null,null,null,null)
D.fvi=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fvv=new B.y("Hati ya Kuhowa",null,A.fG,null,null,null,null,null,null,null,null,null)
D.fvx=new B.y("Choose a class template",null,A.fG,null,null,null,null,null,null,null,null,null)
D.fvz=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fvF=new B.y("Download the newspaper picture",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fvS=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new B.y("Done",null,A.aQM,null,null,null,null,null,null,null,null,null)
D.fw8=new B.y("Ending celebration",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fw9=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fwo=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.zE,null,null,null,null,null,null,null,null,null)
D.fxk=new B.y("Export presentation",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fxl=new B.y("What would you like to do?",null,D.aQ8,null,null,null,null,null,null,null,null,null)
D.fxp=new B.y("Delete",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.y("Hati (Documents)",null,A.fG,null,null,null,null,null,null,null,null,null)
D.fyb=new B.y("Done",null,A.lb,null,null,null,null,null,null,null,null,null)
D.fcb=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new B.y("Delete presentation?",null,D.fcb,null,A.L,null,null,null,null,null,null,null)
D.fyz=new B.y("After the last slide it starts again from the first",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fyL=new B.y("\ud83c\udf33",null,A.J5,null,A.L,null,null,null,null,null,null,null)
D.fz2=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fz9=new B.y("Transfer document",null,A.pe,null,null,null,null,null,null,null,null,null)
D.fzk=new B.y("Add to the slides",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fzH=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new B.y("Make a book",null,K.aPH,null,null,null,null,null,null,null,null,null)
D.fA_=new B.y("Books",null,A.cA,null,null,null,null,null,null,null,null,null)
D.f4Z=new B.H(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new B.y("Keep this page open until it finishes.",null,D.f4Z,null,null,null,null,null,null,null,null,null)
D.fA3=new B.y("Making your video",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fA8=new B.y("LANGUAGE",null,H.zG,null,null,null,null,null,null,null,null,null)
D.fAf=new B.y("Use this ending",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fAn=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fAp=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fAG=new B.y("Delete from the database?",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fAH=new B.y("H",null,A.rQ,null,null,null,null,null,null,null,null,null)
D.fB5=new B.y("NGMY Quotes",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fBx=new B.y("Cover",null,D.aQX,null,null,null,null,null,null,null,null,null)
D.fBB=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fBC=new B.y("Each page becomes its own slide you can present",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fBY=new B.y("Y",null,A.rQ,null,null,null,null,null,null,null,null,null)
D.fC8=new B.y("Crop the picture",null,A.lb,null,null,null,null,null,null,null,null,null)
D.fCe=new B.y("Edit text",null,A.J6,null,null,null,null,null,null,null,null,null)
D.fEs=B.dS("a8a")
D.DC=new C.awG(0,"none")
D.aU8=new C.awG(1,"zipCrypto")
D.aU9=new C.awG(2,"aes")
D.fWE=new F.Pe("","",null)
D.fXK=new C.bbR(null)
D.fYR=new C.Zo(null)
D.h_p=new C.ad4(null)
D.h_r=new C.aDS(null)
D.h2c=new C.a_D(null)
D.h2t=new C.a09(null)
D.h2M=new C.bts(null)})();(function staticFields(){$.hej=null
$.hek=null
$.hel=null
$.hem=null
$.fXf=B.v2("_lastQuoRemDigits")
$.fXg=B.v2("_lastQuoRemUsed")
$.ax1=B.v2("_lastRemUsed")
$.fXh=B.v2("_lastRem_nsh")
$.q8=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6Z=B.T(x.N,x.I)
$.fUM=!1
$.hj6=B.T(B.ax("kR"),x.N)
$.hjj=B.T(B.ax("kR"),x.E)
$.hhk=!1
$.bz4="q"
$.Qb=0
$.Cy=B.T(x.N,B.ax("ai<zr>"))
$.hhG=!1
$.fYR=!1
$.hnY=null
$.hS5=B.T(x.N,B.ax("aA<n?>"))
$.Kh=""
$.j0=0
$.hb4=function(){var w=x.N
return B.T(w,w)}()
$.hb3=B.T(x.N,x.R)
$.fZb=!1
$.afM=B.T(x.N,x.E)
$.fZZ=0
$.bjW=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ign","CU",()=>C.b9m(0))
w($,"igl","a2o",()=>C.b9m(1))
w($,"igm","hrz",()=>C.b9m(2))
w($,"igk","h2R",()=>$.a2o().v0(0))
w($,"igi","hrx",()=>C.b9m(1e4))
w($,"igj","hry",()=>B.E7(8))
w($,"ica","hpA",()=>B.E7(0))
w($,"ici","hpE",()=>B.E7(0))
w($,"ich","hpD",()=>B.bXZ(0))
w($,"ik2","htz",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3P.gdO(D.a3P),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ikt","bDz",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mT(new C.fFA(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mT(new C.fFB(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mT(new C.fFC(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mT(new C.fFN(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mT(new C.fFS(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mT(new C.fFT(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mT(new C.fFU(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mT(new C.fFV(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mT(new C.fFW(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mT(new C.fFX(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mT(new C.fFY(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mT(new C.fFD(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mT(new C.fFE(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mT(new C.fFF(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mT(new C.fFG(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mT(new C.fFH(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mT(new C.fFI(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mT(new C.fFJ(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mT(new C.fFK(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mT(new C.fFL(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mT(new C.fFM(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mT(new C.fFO(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mT(new C.fFP(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mT(new C.fFQ(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mT(new C.fFR(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Ey>"))})
w($,"ik5","htB",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["8uAgHiQ0f4JNGD8Iq44ZpLcnDTE="]=a.current})($__dart_deferred_initializers__);