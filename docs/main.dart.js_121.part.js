((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,U,A2,Ac,Ad,Ae,Af,C={
t2(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fAG(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
HS(d){var w
if(d===0)return $.BB()
if(d===1)return $.a0l()
if(d===2)return $.h3L()
if(Math.abs(d)<4294967296)return C.b5K(A.o.L(d))
w=C.hoe(d)
return w},
b5K(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t2(4,w)
return new C.nm(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t2(1,w)
return new C.nm(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.ar(d,16)
v=C.t2(2,w)
return new C.nm(v===0?!1:s,w,v)}v=A.o.aj(A.o.gagx(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.aj(d,65536)}v=C.t2(v,w)
return new C.nm(v===0?!1:s,w,v)},
hoe(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.O(B.dC("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BB()
w=$.h3K()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kO(A.aD.gaL(w))
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
q=new C.nm(!1,r,4)
if(s<0)p=q.lS(0,-s)
else p=s>0?q.dN(0,s):q
return p},
fAH(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fS2(d,e,f,g){var w,v,u,t,s,r=A.o.aj(f,16),q=A.o.J(f,16),p=16-q,o=A.o.dN(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fl(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dN(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fRY(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16)
if(A.o.J(f,16)===0)return C.fAH(d,e,s,g)
w=e+s+1
C.fS2(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hoh(d,e,f,g){var w,v,u,t,s=A.o.aj(f,16),r=A.o.J(f,16),q=16-r,p=A.o.dN(1,r)-1,o=A.o.fl(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dN(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fl(u,r)}w&2&&B.ah(g)
g[n]=o},
cxy(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hof(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b5L(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.ar(v,16)&1)}},
fS3(d,e,f,g,h,i){var w,v,u,t,s,r
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
hog(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nm:function nm(d,e,f){this.a=d
this.b=e
this.c=f},
cxz:function cxz(){},
cxA:function cxA(){},
cxB:function cxB(d,e){this.a=d
this.b=e},
cxC:function cxC(d){this.a=d},
aNC:function aNC(d,e){this.a=d
this.b=e},
fId(d,e,f){var w=new C.PL(d,A.o.aj(Date.now(),1000),e)
w.Q=f
return w},
PL:function PL(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1w:function a1w(d,e){this.a=d
this.b=e},
bCo:function bCo(d){this.a=d
this.c=this.b=0},
h6Y(){return new C.bB7()},
bB7:function bB7(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cpH:function cpH(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hnX(d,e,f){var w,v,u,t,s
if(d.gag(d))return new Uint8Array(0)
w=new Uint8Array(B.ck(d.gcL3(d)))
v=f*2+2
u=C.fPI(C.fPK(),64)
t=new C.car(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cas(e,1000,v)
s=new Uint8Array(v)
return A.aD.dC(s,0,t.cz1(w,0,s,0))},
cpF:function cpF(d,e){this.c=d
this.d=e},
atT:function atT(d,e){this.a=d
this.b=e},
cpI:function cpI(d,e,f,g){var _=this
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
b4v:function b4v(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cpG:function cpG(){this.a=$},
fRt(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
h6H(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bzI:function bzI(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fG_(d,e){e&=31
return(d&$.pA[e])<<e>>>0},
mW(d,e){e&=31
return(d>>>e|C.fG_(d,32-e))>>>0},
fPJ(d){var w,v=new C.apE()
if(B.iw(d))v.aFb(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fPK(){var w=C.fPJ(0),v=new Uint8Array(4),u=x.r
u=new C.cat(w,v,A.Cf,5,B.bS(5,0,!1,u),B.bS(80,0,!1,u))
u.l1(0)
return u},
fPI(d,e){var w=new C.cap(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cao:function cao(){},
cas:function cas(d,e,f){this.a=d
this.b=e
this.c=f},
cam:function cam(){},
apD:function apD(d){this.a=d},
car:function car(d){this.a=$
this.b=d
this.c=$},
can:function can(){},
cal:function cal(){},
apE:function apE(){this.b=this.a=$},
caq:function caq(){},
cat:function cat(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cap:function cap(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cak:function cak(){},
caj:function caj(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bIg:function bIg(){},
bIh:function bIh(d){this.a=d},
hr7(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b60:function b60(){},
cjH:function cjH(){},
hzt(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
asx(d){var w=0,v=B.j(x.H),u
var $async$asx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.ekf?2:4
break
case 2:w=5
return B.b(A.jI.fI("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$asx)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jI.fI("SystemChrome.setEnabledSystemUIOverlays",C.hzt(null),u),$async$asx)
case 6:case 3:return B.h(null,v)}})
return B.i($async$asx,v)},
asA:function asA(d,e){this.a=d
this.b=e},
a6_:function a6_(d){this.a=d},
fwJ(d,e){return new C.aRT(e,d,null)},
aRT:function aRT(d,e,f){this.e=d
this.c=e
this.a=f},
axk:function axk(d,e,f,g,h){var _=this
_.ac=d
_.ae=e
_.a7$=f
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
hC_(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.f8t(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bK(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
f8t:function f8t(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
akD(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$akD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Q.ae7("ngmy_menu_lib_v1_zzslides_index",A.bE),$async$akD)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d2(s,x.f)
t=B.cy(t,new C.bTf(),t.$ti.k("E.E"),x.P)
r=B.z(t,B.a2(t).k("E.E"))}else r=B.a([],x.d)
A.d.aY(r,new C.bTg())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akD,v)},
akF(d){var w=0,v=B.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j
var $async$akF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akD(),$async$akF)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.Q(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.N(Date.now(),0,!1).a4().aa()
p=m.a
k=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nu("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.D(["deck",m.ad(),"savedAt",l],t,q),null),$async$akF)
case 7:if(!f){w=5
break}s.m(0,p,B.D(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.J)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("be<2>")
s=B.z(new B.be(s,r),r.k("E.E"))
w=10
return B.b(B.nu("ngmy_menu_lib_v1_zzslides_index",B.D(["items",s,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],t,q),null),$async$akF)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akF,v)},
bTh(d){return C.hck(d)},
hck(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bTh=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(Q.ae7("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hp),$async$bTh)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.TN(B.Y(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a5(m)
$.ak.$1("[admin slides vault] load "+d+": "+B.t(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bTh,v)},
akE(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$akE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akD(),$async$akE)
case 3:r=f
if(r==null){u=!1
w=1
break}J.mX(r,new C.bTi(d))
w=4
return B.b(B.nu("ngmy_menu_lib_v1_zzslides_index",B.D(["items",r,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),null),$async$akE)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(Q.aLF("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$akE)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akE,v)},
bTf:function bTf(){},
bTg:function bTg(){},
bTi:function bTi(d){this.a=d},
hLv(d,e,f){return B.c0(A.K,new C.fnf(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fnf:function fnf(d,e,f){this.a=d
this.b=e
this.c=f},
Zx:function Zx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFz:function aFz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eP7:function eP7(d,e){this.a=d
this.b=e},
ePb:function ePb(d){this.a=d},
ePc:function ePc(d){this.a=d},
ePd:function ePd(d,e,f){this.a=d
this.b=e
this.c=f},
eP8:function eP8(d){this.a=d},
eP9:function eP9(d){this.a=d},
ePa:function ePa(d,e){this.a=d
this.b=e},
eP2:function eP2(d){this.a=d},
eP0:function eP0(d){this.a=d},
eP1:function eP1(d){this.a=d},
eP3:function eP3(d){this.a=d},
eP4:function eP4(d){this.a=d},
ePh:function ePh(d,e){this.a=d
this.b=e},
ePg:function ePg(d,e){this.a=d
this.b=e},
eP6:function eP6(d,e,f){this.a=d
this.b=e
this.c=f},
eP5:function eP5(d,e,f){this.a=d
this.b=e
this.c=f},
ePe:function ePe(d,e){this.a=d
this.b=e},
ePf:function ePf(d,e){this.a=d
this.b=e},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d,e){this.a=d
this.b=e},
ePj:function ePj(d,e){this.a=d
this.b=e},
ePi:function ePi(){},
fUo(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d2(w,x.f)
v=B.cy(v,new C.eWi(),v.$ti.k("E.E"),x.ea)
u=B.a2(v).k("a3<E.E>")
v=B.z(new B.a3(v,new C.eWj(),u),u.k("E.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_w(d){return C.hDc(d)},
hDc(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_w=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.Q(x.N,x.ea)
m=new C.faD(n)
t=4
j=m
i=C
w=7
return B.b(B.a04("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_w)
case 7:j.$1(i.fUo(f))
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
return B.b(B.au(),$async$a_w)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fUo(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("be<2>")
o=p.k("a3<E.E>")
j=B
i=B
h=new B.be(n,p)
g=C
w=13
return B.b(C.eWr(d),$async$a_w)
case 13:p=j.z(new i.a3(h,new g.faB(f),o),o.k("E.E"))
A.d.aY(p,new C.faC())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_w,v)},
aeH(d,e){return C.hLa(d,e)},
hLa(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aeH=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b3(e,new C.fmO(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.ak(n,null)
q=!1
t=4
w=7
return B.b(B.aez("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeH)
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
return B.b(B.au(),$async$aeH)
case 12:p=g
w=13
return B.b(p.an("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aeH)
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
return B.i($async$aeH,v)},
eWr(d){return C.hsq(d)},
hsq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eWr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$eWr)
case 7:r=f
q=r.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ki(q,B.S(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$eWr,v)},
adB(d,e){return C.hBS(d,e)},
hBS(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adB=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$adB)
case 6:s=g
r=B.aY(x.N)
q=s.rk("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fR(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("cj.E"))
w=7
return B.b(s.an("StringList","ngmy_books_deleted_v1_"+r,q),$async$adB)
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
return B.b(C.a_w(d),$async$adB)
case 8:n=g
J.mX(n,new C.f89(e))
w=9
return B.b(C.aeH(d,n),$async$adB)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adB,v)},
hLA(d,e){return B.a6(d,!1).cz(B.eN(new C.fnB(e),!0,null,x.H))},
hoj(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e7(w.d,new C.cyV())},
nO:function nO(d,e,f){this.a=d
this.b=e
this.c=f},
eWi:function eWi(){},
eWj:function eWj(){},
faD:function faD(d){this.a=d},
faB:function faB(d){this.a=d},
faC:function faC(){},
fmO:function fmO(){},
f89:function f89(d){this.a=d},
fnB:function fnB(d){this.a=d},
Wl:function Wl(d,e){this.c=d
this.a=e},
auo:function auo(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cyV:function cyV(){},
cyX:function cyX(d,e){this.a=d
this.b=e},
cz_:function cz_(d){this.a=d},
cz0:function cz0(d){this.a=d},
cyZ:function cyZ(){},
cz1:function cz1(d,e){this.a=d
this.b=e},
cyY:function cyY(d){this.a=d},
cz2:function cz2(){},
cyW:function cyW(d,e){this.a=d
this.b=e},
cz3:function cz3(){},
cyR:function cyR(d){this.a=d},
cyP:function cyP(d){this.a=d},
cyQ:function cyQ(d){this.a=d},
cyS:function cyS(d,e){this.a=d
this.b=e},
cyO:function cyO(d){this.a=d},
cyN:function cyN(d){this.a=d},
cyL:function cyL(d,e){this.a=d
this.b=e},
cyM:function cyM(d){this.a=d},
cyU:function cyU(){},
cyT:function cyT(d){this.a=d},
cyK:function cyK(d,e){this.a=d
this.b=e},
cyJ:function cyJ(d,e){this.a=d
this.b=e},
cyI:function cyI(d,e){this.a=d
this.b=e},
cz4:function cz4(d){this.a=d},
Wj:function Wj(d,e,f){this.c=d
this.d=e
this.a=f},
aBu:function aBu(d,e,f){this.a=d
this.b=e
this.c=f},
auk:function auk(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cyb:function cyb(d){this.a=d},
cya:function cya(d){this.a=d},
cyd:function cyd(d,e,f){this.a=d
this.b=e
this.c=f},
cyl:function cyl(){},
cym:function cym(d){this.a=d},
cye:function cye(d,e,f){this.a=d
this.b=e
this.c=f},
cyc:function cyc(d,e){this.a=d
this.b=e},
cyg:function cyg(d,e){this.a=d
this.b=e},
cyh:function cyh(d,e){this.a=d
this.b=e},
cyi:function cyi(d,e){this.a=d
this.b=e},
cyf:function cyf(d){this.a=d},
cyk:function cyk(d){this.a=d},
cyj:function cyj(d,e){this.a=d
this.b=e},
cyr:function cyr(d){this.a=d},
cyn:function cyn(d,e){this.a=d
this.b=e},
cyo:function cyo(d,e){this.a=d
this.b=e},
cyp:function cyp(d,e){this.a=d
this.b=e},
cyq:function cyq(d,e){this.a=d
this.b=e},
aum:function aum(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hFt(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.e9(v,x.cK).bC(new C.feS(),x.H).eX(new C.feT())}}else if(s)C.fVM()}catch(t){}},
fVM(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.e9(v,x.cK).eX(new C.f_p())}catch(u){}},
hFw(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
feS:function feS(){},
feT:function feT(){},
f_p:function f_p(){},
h_a(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.dZ(v,w,"").split(":"))},
h_7(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kz)return null
return A.a.aV(w,14)},
fEJ(d){var w
if(d.b!==D.kz)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aV(w,21)},
hFT(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h_b(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hFO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.Q(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kq(0,f)
t=x.N
u=B.cy(u,new C.ffN(),B.a2(u).k("E.E"),t)
s=B.z(u,B.a2(u).k("E.E"))
if(s.length===0)return B.Q(t,t)
for(u=v.kq(0,f),u=new B.HR(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Pt(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Pt(A.a.aV(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cw(w)
if(l==null)return B.Q(t,t)
k=B.Q(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hFM(d,e){var w,v,u,t,s,r=B.a2(e).k("ct<1>"),q=B.z(new B.ct(e,r),r.k("E.E"))
A.d.aY(q,new C.ffM())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.J)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c5(s,"]"))continue
w=B.aMC(w,u,s,0)}return w},
hFQ(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a_W:$.h5K(),s=x.N,r=B.Q(s,s)
for(s=t.gdH(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c5(u,"]"))continue
r.m(0,w.b,u)}return r},
h_8(d){if(d==="hati_kuhowa")return y.t
if(d==="hati_kuhoweya")return y.v
return""},
eXi(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
if(C.h_a(q)===e)return q}return null},
hFR(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aV(v,u)
return A.d.gI(D.EJ).a},
hFS(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abA(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abA(0,0,0)
v=C.eXi(b6,b0)
u=C.eXi(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hFQ(b2,C.hFO(C.h_8(b2),v.r))
if(s.a!==0){u.r=C.hFM(C.h_8(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){l=C.h_a(o[m])
if(l==null||l==="utangulizi")continue
r.G(0,l)}for(q=B.ee(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eXi(b6,n)
i=C.eXi(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.J)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.J)(o),++m){d=o[m]
a0=C.fEJ(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.J)(a1),++a7){a8=a1[a7]
if(C.h_7(a8)===a0||C.fEJ(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.P0(a1,new C.ffT(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iM
$.iM=a9+1
A.d.G(a1,new C.ev(""+1000*a6+"_"+a9,D.kz,a2,a3,a4,a5,"",24,A.a_,A.bl,A.ay,4279310375,A.bn,d.at,D.b6,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.ca,0,"","","","","",!1,0));++e}b5.f=new B.N(Date.now(),0,!1)
return new B.abA(k,t,e)},
hFN(d){var w=C.hFR(d)
if(d.w==="hati_kuhowa")return C.fZv("",w)
return C.fZu("",w)},
ffN:function ffN(){},
ffM:function ffM(){},
ffT:function ffT(d){this.a=d},
fVw(){var w=new B.N(Date.now(),0,!1),v=new C.eZt()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bC(w)))+"/"+B.by(w)},
fER(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fgL(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kz&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h_o(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fgL(d)
w=B.bf(u)
if(w==null)return!C.fgL(d)
return new B.N(Date.now(),0,!1).a4().cT(w.a4().bL(18e9))},
hGy(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.N(Date.now(),0,!1).a4().aa()},
hgo(d){return A.a.i(d).toLowerCase()},
amL(d){return C.hgq(d)},
hgq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$amL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$amL)
case 7:r=f
p=r.rk("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.I(o,C.hK0(),B.S(o).k("I<1,n>")).bZ(0,new C.c2L())
o=B.d7(o,o.$ti.k("E.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$amL,v)},
amK(d,e){return C.hgp(d,e)},
hgp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amK=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amL(d),$async$amK)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.au(),$async$amK)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pI(r)),$async$amK)
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
return B.i($async$amK,v)},
amM(d,e){return C.hgr(d,e)},
hgr(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$amM=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.amL(d),$async$amM)
case 3:r=g
if(!J.hB(r,o)){w=1
break}t=5
w=8
return B.b(B.au(),$async$amM)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pI(r)),$async$amM)
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
return B.i($async$amM,v)},
T8(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$T8=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fyf&&!a5){w=1
break}t=4
w=7
return B.b(B.au(),$async$T8)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aC(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.Q(e,x.I)
for(d=J.ji(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.TN(B.Y(f.a(n.b),e,a0)))}$.a4R=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a5(a2)
$.ak.$1("[kiapo] local load: "+B.t(m))
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
return B.b(B.bW(),$async$T8)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.th("civic_hati_kiapo_uongozi",null,A.ea),$async$T8)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.Q(o,x.I)
for(f=x.f,e=J.ji(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.TN(B.Y(f.a(j.b),o,d)))}for(o=k,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a4R.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbm())f=d===e.gbm()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a4R.m(0,i.a,i.b)}w=20
return B.b(C.amN(),$async$T8)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a5(a3)
$.ak.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fyf=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$T8,v)},
amN(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$amN=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$amN)
case 6:s=e
r=B.Q(x.N,x.P)
for(o=$.a4R,o=new B.cM(o,B.a2(o).k("cM<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ad())}w=7
return B.b(s.an("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.ak(r,null)),$async$amN)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a5(l)
$.ak.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$amN,v)},
aWl(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.T8(!1),$async$aWl)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a4R.h(0,t)
r=s==null?null:s.hr()
if(r==null){u=null
w=1
break}u=C.bxn(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWl,v)},
a4S(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a4S=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.N(Date.now(),0,!1)
o=a1.hr()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.J)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a4R.m(0,d,o)
$.fyf=!0
w=3
return B.b(C.amN(),$async$a4S)
case 3:w=4
return B.b(B.bW(),$async$a4S)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.Q(e,x.P)
for(n=$.a4R,n=new B.cM(n,B.a2(n).k("cM<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ad())}w=9
return B.b(B.nu("civic_hati_kiapo_uongozi",B.D(["byState",r,"updatedAt",new B.N(Date.now(),0,!1).a4().aa()],e,x.z),null),$async$a4S)
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
$.ak.$1("[kiapo] cloud save: "+B.t(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a4S,v)},
amO(d){var w=0,v=B.j(x.T),u,t,s
var $async$amO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a2N(A.ev),$async$amO)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fd(),$async$amO)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWk(t,d),$async$amO)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$amO,v)},
aWk(d,e){return C.hgs(d,e)},
hgs(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWk=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bW(),$async$aWk)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ad("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eJ().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hU("media")
w=8
return B.b(p.w_(q,new Uint8Array(B.ck(d)),D.blf),$async$aWk)
case 8:n=p.Bp(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a5(k)
$.ak.$1("[kiapo] video upload: "+B.t(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aWk,v)},
IH(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.b6,4280172719,2,d,0,0,"",D.ca,D.cG,l,m,n)},
eYI(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a_,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eN,j,k,l)},
fC7(d,e,f,g,h,i,j,k){var w=C.cx(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eg(h,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cS,A.O,"",v,w,null,"","",0,!1,"",0,D.b6,4280172719,2,k,0,0,"",D.ca,D.cG,g,e,f)},
eYo(d,e,f,g){return C.eYI(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fC8(d,e,f,g,h,i,j,k){var w=C.cx()
return C.eg(A.Bu,!1,j,A.ay,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bl,A.a_,"",h,w,null,"","",0,!1,"",0,D.b6,4280172719,2,k,0,0,"",D.ca,D.cG,g,e,f)},
fVv(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.dZ(v,w,"").split(":"))},
bxn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.Q(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.J)(t),++n){m=t[n]
l=C.fVv(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kz&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hr()}h=C.fEo(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Ah(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.J)(w),++n){m=w[n]
l=C.fVv(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kz&&A.a.c5(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bk(a1.z,new C.feQ(a2))}else A.d.bk(a1.z,new C.feR())
A.d.G(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fgL(a0))a0.ax=a6.f.a4().aa()
return a0},
fEo(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fhv(D.a0W),l=C.cx(),k=x.u,j=B.a([C.eg(A.bn,!1,s,A.ay,"marriage_locked_bg",r,24,A.bl,A.a_,"",1,C.cx(),m,"","",0,!1,"",0,D.b6,q,2,"",0,0,"",D.ca,D.l_,1,0,0)],k),i=B.a([],k)
i.push(C.IH("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IH("TAREHE:",A.bn,o,16,A.bl,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fC7("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.fVw()))
i.push(C.eYo(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IH("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IH("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cS,A.a_,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.eYI(0,0.002,D.fb,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fC8("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fC8("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fC8("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.eYI(268435456,0.175,D.b6,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IH("VIDEO YA KIAPO",A.bn,o,10,A.bl,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eg(A.bn,!1,s,A.ay,"__kiapo_video__",r,24,A.bl,A.a_,"",0.131,C.cx(),t,"","",0,!1,"",0,D.b6,q,2,"",0,0,"",D.ca,D.l_,0.77,0.115,0.492))
i.push(C.IH("Rais Anayeapa:",A.bn,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IH("Jina:",A.bn,p,13,A.bl,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fC7("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.eYo(0.195,0.7130000000000001,0.62,n))
i.push(C.IH("Sahihi:",A.bn,p,13,A.bl,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eg(A.bn,!1,s,A.ay,"marriage_sign_rais",0,24,A.bl,A.a_,"",0.07,C.cx(),t,"","",0,!1,"",0,D.b6,0,2,"",0,0,"",D.ca,D.eN,0.38,0.21500000000000002,0.73))
i.push(C.eYo(0.21500000000000002,0.795,0.38,n))
i.push(C.IH("Tarehe:",A.bn,p,13,A.bl,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fC7("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.fVw()))
i.push(C.eYo(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.eYI(0,0.032,D.b6,o,1,"state_box",0.72,0.14,0.875),C.IH("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qO(4294967035,t,0,0,j,l,D.pi,"","",u,D.d7)
return C.Ah(t,t,t,t,D.nw,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cx(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
adJ(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adJ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.E(x.q).f.P(D.ef5)
w=1
break}w=3
return B.b(C.T8(!0),$async$adJ)
case 3:w=4
return B.b(C.aWl(p),$async$adJ)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h_o(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c0(D.b2A,new C.fa0(p),f,!0,!0,!1,A.l0,!1,!1,x.N),$async$adJ)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fa1(),f,null,!0,!0,x.y),$async$adJ)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fEo(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.E(x.q).f
q.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fEo(p))
case 1:return B.h(u,v)}})
return B.i($async$adJ,v)},
eZt:function eZt(){},
c2L:function c2L(){},
feQ:function feQ(d){this.a=d},
feR:function feR(){},
fa0:function fa0(d){this.a=d},
f9Z:function f9Z(d){this.a=d},
fa_:function fa_(d){this.a=d},
fa1:function fa1(){},
f9X:function f9X(d){this.a=d},
f9Y:function f9Y(d){this.a=d},
ani:function ani(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAm:function aAm(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dWW:function dWW(d){this.a=d},
dWU:function dWU(d){this.a=d},
dWV:function dWV(d){this.a=d},
dWX:function dWX(d){this.a=d},
dWY:function dWY(d){this.a=d},
vB(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.eg(e,!1,f,A.ay,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.b6,4280172719,2,d,0,0,"",D.ca,D.cG,l,m,n)},
fV9(d,e,f){var w=4291404327
return B.a([C.pz(0,f,D.ew,w,2,"ring_l",f,d-f*0.42,e),C.pz(0,f,D.ew,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
eXR(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pz(4294967288,f,D.ew,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pz(h,s,D.ew,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pz(h,f*0.46,D.ew,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pz(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a_,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eN,j,k,l)},
eXQ(d,e,f,g,h,i,j,k,l){var w=C.cx(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eg(h,!1,k,A.ay,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cS,A.O,"",v,w,null,"","",0,!1,"",0,D.b6,4280172719,2,l,0,0,"",D.ca,D.cG,g,e,f)},
buS(d,e,f,g){return C.pz(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fV8(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pz(0,0.036,D.b6,h,1.4,"banner_box_"+d,w,v,e),C.vB(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h_9(){var w=new B.N(Date.now(),0,!1),v=new C.ffS()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bC(w)))+"/"+B.by(w)},
fVa(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vB(r+".",A.bn,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.eXQ("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.buS(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vB("Sahihi:",A.bn,j,15,A.a_,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a_,"",0.05,C.cx(),null,"","",0,!1,"",0,D.b6,0,2,"",0,0,"",D.ca,D.eN,s,t,g-0.004),C.buS(t,g+0.044,s,w)],x.u)},
ae9(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cT7,D.c0y,D.cMM,D.cOs],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.J)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fBt(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fhv(d.d),v=B.a([C.eg(A.bn,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bl,A.a_,"",1,C.cx(),w,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.l_,1,0,0)],x.u)
A.d.v(v,C.huE(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
huE(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vB("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fV9(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fV9(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.eXR(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.eXR(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vB("\ud83c\udf33",A.L,4279898632,22,A.a_,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pz(0,0.062,D.ew,b1,1.6,"crest_o",0.11,0.445,0.012),C.pz(0,0.046,D.ew,b1,1,"crest_i",0.084,0.458,0.02),C.vB("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pz(0,0.002,D.fb,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pz(b9,0.016,D.kA,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pz(0,0.002,D.fb,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vB("TAREHE:",A.bn,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.eXQ("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.h_9()),C.buS(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vB(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pz(c0,0.0026,D.b6,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pz(c3.e,0.138,D.b6,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cx()
c2.push(C.eg(A.bn,!1,b9,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bl,A.cn,"",0.128,s,a9,"","",0,!1,"",0,D.b6,b3,2,c5,0,0,"",D.ca,D.cG,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pz(0,0.036,D.b6,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cx()
A.d.v(c2,B.a([s,C.eg(A.L,!1,c0,A.ay,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.b6,b3,2,c7,0,0,"",D.ca,D.cG,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fV8(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vB(c9,A.bn,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.eXQ("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iM
$.iM=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iM
$.iM=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ev(""+1000*i+"_"+h,D.cG,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bl,A.ay,c0,A.bn,a9,D.b6,b2,b3,2,0,!1,s,0,D.ca,0,"","","","","",!1,0),j,new C.ev(""+1000*f+"_"+e,D.eN,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a_,A.bl,A.ay,b6,A.bn,a9,D.fb,0,b5,0.8,0,!1,g,0,D.ca,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iM
$.iM=p+1
i=Date.now()
h=$.iM
$.iM=h+1
g=Date.now()
f=$.iM
$.iM=f+1
e=Date.now()
a3=$.iM
$.iM=a3+1
A.d.v(d,B.a([new C.ev(""+1000*s+"_"+p,D.cG,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.ay,b7,A.dN,a9,D.b6,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.ca,0,"","","","","",!1,0),new C.ev(""+1000*i+"_"+h,D.eN,a1,a2,0.046,0.025875,"",24,A.a_,A.bl,A.ay,b6,A.bn,a9,D.b6,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.ca,0,"","","","","",!1,0),new C.ev(""+1000*g+"_"+f,D.cG,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.ay,b7,A.L,a9,D.b6,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.ca,0,"","","","","",!1,0),new C.ev(""+1000*e+"_"+a3,D.eN,a0,k,a1+0.046-a0,l,"",24,A.a_,A.bl,A.ay,b6,A.bn,a9,D.b6,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.ca,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fV8("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a0L||w===D.a0N||w===D.a0K||w===D.a0M){w=t-0.008
A.d.v(c2,C.eXR(0.21,w,0.044,!0,b0))
A.d.v(c2,C.eXR(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pz(0,a4,D.b6,c0,1.3,"wit_table_border",0.82,0.09,t),C.pz(c0,a4,D.b6,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pz(0,0.0022,D.fb,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vB("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vB("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fVa("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fVa("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pz(0,0.11,D.b6,c0,1.2,"mw_box",0.82,0.09,t),C.vB("MWANDISHI",A.bn,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vB("Jina:",A.bn,b9,15,A.a_,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.eXQ("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.buS(0.215,p,0.3116,b5),C.vB("Sahihi:",A.bn,b9,15,A.a_,0.028,0,"mw_sl",0.09,0.5,w),C.eg(A.bn,!1,b6,A.ay,"marriage_sign_mwandishi",0,24,A.bl,A.a_,"",0.044,C.cx(),a9,"","",0,!1,"",0,D.b6,0,2,"",0,0,"",D.ca,D.eN,0.3161999999999999,0.5738,s-0.044),C.buS(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pz(0,0.032,D.b6,c0,1,"state_box",0.7,0.15,a8),C.vB("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hFP(d){var w,v,u,t=null,s=B.bg(d.f),r=B.bg(d.r),q=C.fF0(d.d),p=new C.ffO(s),o=new C.ffP(s),n=d.z,m=n===D.a0L||n===D.a0N||n===D.a0K||n===D.a0M,l=n===D.ayY||n===D.a0O||n===D.ayZ,k=B.c_(0,B.fU(q,A.C,t,t,A.cl,A.bP,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a0O?26:16
i.push(new C.ffR().$1$size(w))}if(n===D.az_)i.push(D.eSe)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iZ,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aHl,p.$1$w(0.9),D.aHl,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.i,t,t,new B.o(D.aZI,t,n,w,t,t,A.n),t,t,t,t,A.adx,t,t,t))
i.push(A.ar)
i.push(new C.ffQ(r).$1("NIMETOWE"))
i.push(A.hh)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.B(A.Jp,new B.cF(A.b_,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.i,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d4,new B.bI(1,A.bt,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.bd)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.W,t,A.aX,A.q,B.a([k,new B.B(A.acb,B.u(i,A.al,t,A.e,A.j,0,A.p),t)],j),t)},
fZu(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ae9(e,t)
if(r==null)r=A.d.gI(D.EJ)
w=C.cx()
v=C.qO(r.e,t,0,0,C.fBt(r,0.165,y.t,D.cOX,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pi,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ah(t,t,t,t,D.nw,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
fZv(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ae9(e,t)
if(r==null)r=A.d.gI(D.EJ)
w=C.cx()
v=C.qO(r.e,t,0,0,C.fBt(r,0.165,y.v,D.cL0,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pi,"","",s,D.d7)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.Ah(t,t,t,t,D.nw,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
byD(d,e,f){var w=0,v=B.j(x.T),u
var $async$byD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c0(A.K,new C.fr1(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byD,v)},
adK(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a3<1>")
p=B.z(new B.a3(i,new C.fa4(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.II,new C.fa5(p),d,!0,!0,!1,A.l0,!1,!1,x.N),$async$adK)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byD(d,"Hati ya Kuhowa",D.EJ),$async$adK)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jj(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adK)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.fZu(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adK,v)},
adL(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$adL=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("a3<1>")
p=B.z(new B.a3(i,new C.fa8(),q),q.k("E.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.II,new C.fa9(p),d,!0,!0,!1,A.l0,!1,!1,x.N),$async$adL)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byD(d,"Hati ya Kuhoweya",D.EJ),$async$adL)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jj(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adL)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.fZv(r,s))
case 1:return B.h(u,v)}})
return B.i($async$adL,v)},
adM(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$adM=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("a3<1>")
m=B.z(new B.a3(i,new C.fac(),n),n.k("E.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.II,new C.fad(m),d,!0,!0,!1,A.l0,!1,!1,x.N),$async$adM)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.byD(d,"Malipo ya Awamu ya Mahari",D.NG),$async$adM)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jj(d,"Tafuta jimbo\u2026","",A.jF,"Chagua jimbo"),$async$adM)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ae9(s,D.NG)
if(q==null)q=A.d.gI(D.NG)
n=C.cx()
p=C.qO(q.e,null,0,0,C.fBt(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cGq,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pi,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.d7)
n=C.cx()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Ah(null,null,null,null,D.nw,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adM,v)},
wx:function wx(d,e){this.a=d
this.b=e},
j8:function j8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
ffS:function ffS(){},
ffO:function ffO(d){this.a=d},
ffQ:function ffQ(d){this.a=d},
ffR:function ffR(){},
ffP:function ffP(d){this.a=d},
fr1:function fr1(d,e){this.a=d
this.b=e},
aaG:function aaG(d,e,f){this.c=d
this.d=e
this.a=f},
dOk:function dOk(d,e,f){this.a=d
this.b=e
this.c=f},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOi:function dOi(d,e){this.a=d
this.b=e},
aa5:function aa5(d,e,f){this.c=d
this.d=e
this.a=f},
fa4:function fa4(){},
fa5:function fa5(d){this.a=d},
fa2:function fa2(d){this.a=d},
fa3:function fa3(d){this.a=d},
fa8:function fa8(){},
fa9:function fa9(d){this.a=d},
fa6:function fa6(d){this.a=d},
fa7:function fa7(d){this.a=d},
fac:function fac(){},
fad:function fad(d){this.a=d},
faa:function faa(d){this.a=d},
fab:function fab(d){this.a=d},
IK(d,e,f,g,h,i,j,k,l,m){var w=C.cx()
return C.eg(e,!1,f,A.ay,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.b6,4280172719,2,d,0,0,"",D.ca,D.cG,k,l,m)},
Bi(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.eg(A.bn,!1,4279310375,A.ay,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a_,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.ca,D.eN,j,k,l)},
fVP(d,e,f){return C.Bi(0,0.002,D.fb,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bv1(d,e,f,g,h){return B.a([C.Bi(4294967288,0.032,D.b6,4291404327,1.15,"pill_"+d,g,f,e),C.IK(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fCc(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bi(0,0.002,D.fb,g,1,"orn_l_"+t,u,d,v),C.Bi(h,0.016,D.kA,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bi(0,0.002,D.fb,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
ZT(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.IK(d,A.bn,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cx()
return B.a([v,C.eg(A.L,!1,j,A.ay,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cS,A.O,"",0.02,s,null,"","",0,!1,"",0,D.b6,4280172719,2,k,0,0,"",D.ca,D.cG,t,u,g-0.002),C.fVP(u,g+0.018,t)],x.u)},
fVQ(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bi(h,0.028,D.b6,h,0,"chv_"+d,g,e,f),C.Bi(w,0.024,D.kA,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bi(w,0.024,D.kA,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.IK(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bv0(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.IK("Sahihi:",A.bn,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_"+d,0,24,A.bl,A.a_,"",0.032,C.cx(),null,"","",0,!1,"",0,D.b6,0,2,"",0,0,"",D.ca,D.eN,v,w,f-0.006),C.fVP(w,f+0.016,v)],x.u)},
fF1(d){var w,v
for(w=0;w<19;++w){v=D.NT[w]
if(v.a===d)return v}return null},
hI3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.ae9(A.a.aV(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.ae9(A.a.aV(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aV(k,18)
w=C.ae9(u,D.NG)
v=w==null?l:w.d
if(v==null){w=C.ae9(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fF1(A.a.aV(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fWD.a8(0)
$.fWP.a8(0)
t=C.fhv(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.J)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fG6(d){var w=0,v=B.j(x.T),u
var $async$fG6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c0(A.K,new C.fsg(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fG6,v)},
wA:function wA(d,e){this.a=d
this.b=e},
na:function na(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
beV:function beV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fsg:function fsg(){},
aaJ:function aaJ(d){this.a=d},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
acn:function acn(d,e,f){this.c=d
this.d=e
this.a=f},
fF0(d){return $.fWP.ci(0,d,new C.fhx(d))},
fhv(d){return $.fWD.ci(0,d,new C.fhw(d))},
fr(d){return B.fvR(d>>>16&255,d>>>8&255,d&255,255)},
hxA(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.fXQ(4294570461,4293910718,4284234270,u)
case 1:return C.fXQ(4294635750,4293975240,t,4292912216)
case 2:w=C.eWx(s,4294505966,r)
C.buM(w,14,16,p)
C.kb(w,8,9,464,836,u,1.2)
C.Be(w,2,2,1,1,u,10)
C.Be(w,478,2,-1,1,u,10)
C.Be(w,2,852,1,-1,u,10)
C.Be(w,478,852,-1,-1,u,10)
return w
case 3:return C.eWx(4294966515,4294373082,4289102906)
case 4:return C.hsB(C.eWx(4294376440,4293653998,4290287194))
case 5:w=C.eWx(4294965238,4294437098,4288444980)
C.buM(w,14,16,4283043359)
C.kb(w,6,7,468,840,u,1)
C.kb(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,n,4294175448)
C.r8(v,n)
C.kb(v,24,24,432,806,4286209070,1)
C.ZH(v,12,12,468,12,o,3,20)
C.ZH(v,12,842,468,842,o,3,20)
C.ZH(v,12,12,12,842,o,3,20)
C.ZH(v,468,12,468,842,o,3,20)
return v
case 7:return C.hqP(4294440434,4293518297,4280228630,r)
case 8:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,m,4293911504)
C.r8(v,m)
C.kb(v,28,28,424,798,l,1)
C.f3F(v,28,28,l,k)
C.f3F(v,452,28,l,k)
C.f3F(v,28,826,l,k)
C.f3F(v,452,826,l,k)
return v
case 9:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,j,4294111986)
C.r8(v,j)
C.kb(v,18,18,444,818,4292401368,0.7)
B.iy(v,!0,C.fr(p),0,13,0,853)
return v
case 10:return C.hur(i,4294173372)
case 11:return C.hvu(4294439140,4293449662)
case 12:return C.hqI(h,4294239432)
case 13:return C.huX(4294244340,4293193448)
case 14:return C.hz4(4294505710,4293780694)
case 15:return C.eVz(4294966259,4294439138,o,p,q)
case 16:return C.eVz(4294966776,4294178544,o,g,g)
case 17:return C.eVz(4294965493,4294504170,o,4286200650,q)
case 18:return C.eVz(4294966519,4294373862,o,p,p)
case 19:return C.htC()
case 20:return C.htD()
case 21:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,h,4293976768)
C.r8(v,h)
C.buM(v,14,16,p)
B.iy(v,!0,C.fr(u),4,475,4,9)
B.iy(v,!0,C.fr(u),4,475,844,849)
B.iy(v,!0,C.fr(u),4,9,4,849)
B.iy(v,!0,C.fr(u),470,475,4,849)
C.ZH(v,10,12,470,12,u,2,16)
C.ZH(v,10,842,470,842,u,2,16)
C.ZH(v,10,12,10,842,u,2,18)
C.ZH(v,470,12,470,842,u,2,18)
C.Be(v,2,2,1,1,t,10)
C.Be(v,478,2,-1,1,t,10)
C.Be(v,2,852,1,-1,t,10)
C.Be(v,478,852,-1,-1,t,10)
C.kb(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,s,4294438872)
C.r8(v,s)
C.kb(v,14,16,452,822,o,2.2)
C.kb(v,22,24,436,806,o,1)
C.fDs(v,!1,!1,o,p,p,36,14,16)
C.ko(v,240,20,7,o,!0)
C.ko(v,240,834,7,o,!0)
C.ko(v,18,427,7,o,!0)
C.ko(v,462,427,7,o,!0)
return v
case 23:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,i,4293910712)
C.r8(v,i)
B.iy(v,!0,C.fr(u),0,479,0,20)
B.iy(v,!0,C.fr(u),0,479,834,853)
B.iy(v,!0,C.fr(u),0,20,0,853)
B.iy(v,!0,C.fr(u),460,479,0,853)
B.iy(v,!0,C.fr(f),5,474,5,9)
B.iy(v,!0,C.fr(f),5,474,844,848)
B.iy(v,!0,C.fr(f),5,9,5,848)
B.iy(v,!0,C.fr(f),470,474,5,848)
C.kb(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hd(q,q,A.c4,0,A.dU,854,q,0,3,q,A.c4,480,!1)
C.xo(v,e,4294174404)
C.r8(v,e)
C.buM(v,14,16,p)
B.iy(v,!0,C.fr(u),3,476,3,8)
B.iy(v,!0,C.fr(u),3,476,845,850)
B.iy(v,!0,C.fr(u),3,8,3,850)
B.iy(v,!0,C.fr(u),471,476,3,850)
C.kb(v,9,10,462,834,t,1)
C.kb(v,14,16,452,822,u,1.8)
C.ko(v,240,8,4,u,!0)
C.ko(v,240,846,4,u,!0)
C.ko(v,8,427,4,u,!0)
C.ko(v,472,427,4,u,!0)
C.ko(v,8,8,3,t,!0)
C.ko(v,472,8,3,t,!0)
C.ko(v,8,846,3,t,!0)
C.ko(v,472,846,3,t,!0)
return v}},
xo(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kp(d,!1,A.d5,new B.Q4(s),r,A.cN,1,0,w-1,k,k);++k}},
r8(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f9()
n.e2(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aE(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aE(v==null?0:v)
v=d.a
s=v==null?o:v.dK(u,t,o)
if(s==null)s=new B.it()
v=A.o.D(A.k.L(s.gb2(s))-3,0,255)
r=A.o.D(A.k.L(s.gb9())-3,0,255)
q=A.o.D(A.k.L(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.je(u,t,v,r,q,255)}},
kb(d,e,f,g,h,i,j){var w,v=null,u=C.fr(i),t=e+g
B.kp(d,!0,A.d5,u,v,A.cN,j,e,t,f,f)
w=f+h
B.kp(d,!0,A.d5,u,v,A.cN,j,e,t,w,w)
B.kp(d,!0,A.d5,u,v,A.cN,j,e,e,f,w)
B.kp(d,!0,A.d5,u,v,A.cN,j,t,t,f,w)},
Be(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kp(d,!0,A.d5,C.fr(i),u,A.cN,2,e,e+g*j,f,f)
B.kp(d,!0,A.d5,C.fr(i),u,A.cN,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kp(d,!0,A.d5,C.fr(i),u,A.cN,1,w,e+g*t,v,v)
B.kp(d,!0,A.d5,C.fr(i),u,A.cN,1,w,w,v,f+h*t)},
fXQ(d,e,f,g){var w=null,v=B.hd(w,w,A.c4,0,A.dU,854,w,0,3,w,A.c4,480,!1)
C.xo(v,d,e)
C.r8(v,d)
B.iy(v,!0,C.fr(f),0,479,0,28)
B.iy(v,!0,C.fr(f),0,479,826,853)
B.iy(v,!0,C.fr(f),0,28,0,853)
B.iy(v,!0,C.fr(f),452,479,0,853)
C.kb(v,5,5,470,844,g,1.1)
C.kb(v,28,28,424,798,g,1.6)
C.Be(v,2,2,1,1,g,11)
C.Be(v,478,2,-1,1,g,11)
C.Be(v,2,852,1,-1,g,11)
C.Be(v,478,852,-1,-1,g,11)
return v},
eWx(d,e,f){var w=null,v=B.hd(w,w,A.c4,0,A.dU,854,w,0,3,w,A.c4,480,!1)
C.xo(v,d,e)
C.r8(v,d)
C.kb(v,14,16,452,822,f,1.6)
C.kb(v,20,22,440,810,f,0.8)
return v},
buM(d,e,f,g){var w,v=C.fr(g)
B.iy(d,!0,v,0,479,0,f-1)
w=854-f
B.iy(d,!0,v,0,479,w,853);--w
B.iy(d,!0,v,0,e-1,f,w)
B.iy(d,!0,v,480-e,479,f,w)},
hsB(d){var w,v,u=4291404327
C.buM(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.ko(d,w,8,3,u,!0)
C.ko(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.ko(d,7,v,3,u,!0)
C.ko(d,473,v,3,u,!0)}return d},
f6A(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.iX(e,f),new B.iX(e+g*n,f),new B.iX(e,f+h*n)],t)
B.a_t(d,C.fr(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.iX(s,u),new B.iX(e+g*v,u),new B.iX(s,f+h*v)],t)
B.a_t(d,C.fr(k),t)
t=A.k.U(n*0.39)
C.ko(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.ko(d,e+g*t,f+h*3,4,k,!0)
C.ko(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.ko(d,e+g*t,f,5,k,!0)
C.ko(d,e,f+h*t,5,k,!0)}},
fDs(d,e,f,g,h,i,j,k,l){var w,v
C.f6A(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f6A(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f6A(d,k,v,1,-1,e,f,g,h,i,j)
C.f6A(d,w,v,-1,-1,e,f,g,h,i,j)},
ZH(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kL(d,!0,A.d5,new B.ql(p),null,A.cN,j,r,q)}},
f5L(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kp(d,!0,A.d5,new B.ql(o),null,A.cN,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kp(d,!0,A.d5,new B.ql(o),null,A.cN,1.4,q,q,p,p+h*r)}},
hqP(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hd(o,o,A.c4,0,A.dU,854,o,0,3,o,A.c4,480,!1)
C.xo(n,d,e)
C.r8(n,d)
C.kb(n,20,20,440,814,f,1.2)
C.f5L(n,0,0,1,1,g)
C.f5L(n,480,0,-1,1,g)
C.f5L(n,0,854,1,-1,g)
C.f5L(n,480,854,-1,-1,g)
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
B.kp(n,!0,A.d5,new B.ql(p),o,A.cN,1.2,240,r,60,q)}return n},
f3F(d,e,f,g,h){var w
C.f8u(d,!0,C.fr(g),13,e,f)
C.f8u(d,!0,C.fr(g),9,e,f)
w=B.a([new B.iX(e,f-4),new B.iX(e+4,f),new B.iX(e,f+4),new B.iX(e-4,f)],x.J)
B.a_t(d,C.fr(h),w)},
ko(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.iX(e,v),new B.iX(u,f),new B.iX(e,t),new B.iX(s,f)],x.J)
if(i){B.a_t(d,C.fr(h),r)
return}B.kp(d,!0,A.d5,C.fr(h),w,A.cN,1,e,u,v,f)
B.kp(d,!0,A.d5,C.fr(h),w,A.cN,1,u,e,f,t)
B.kp(d,!0,A.d5,C.fr(h),w,A.cN,1,e,s,t,f)
B.kp(d,!0,A.d5,C.fr(h),w,A.cN,1,s,e,f,v)},
eVy(d,e,f,g,h,i,j){var w,v=B.a([new B.iX(e,f),new B.iX(e+g*28,f),new B.iX(e,f+h*28)],x.J)
B.a_t(d,C.fr(i),v)
v=e+g*14
w=f+h*14
C.ko(d,v,w,6,j,!0)
C.ko(d,v,w,3,i,!0)},
eVz(d,e,f,g,h){var w=null,v=B.hd(w,w,A.c4,0,A.dU,854,w,0,3,w,A.c4,480,!1)
C.xo(v,d,e)
C.r8(v,d)
C.kb(v,18,18,444,818,f,2)
C.kb(v,26,26,428,802,f,0.9)
if(h!=null)B.iy(v,!0,C.fr(h),28,451,28,34)
C.eVy(v,18,18,1,1,g,f)
C.eVy(v,462,18,-1,1,g,f)
C.eVy(v,18,836,1,-1,g,f)
C.eVy(v,462,836,-1,-1,g,f)
return v},
htC(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hd(v,v,A.c4,0,A.dU,854,v,0,3,v,A.c4,480,!1)
C.xo(r,u,4294240980)
C.r8(r,u)
C.kb(r,10,12,460,830,t,3.2)
C.kb(r,18,20,444,814,s,1.2)
C.kb(r,24,26,432,802,t,1.8)
C.fDs(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.ko(r,w,16,3,t,!0)
C.ko(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.ko(r,16,w,3,t,!0)
C.ko(r,464,w,3,t,!0)}return r},
htD(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hd(t,t,A.c4,0,A.dU,854,t,0,3,t,A.c4,480,!1)
C.xo(p,s,4294373080)
C.r8(p,s)
C.kb(p,16,18,448,818,r,2.4)
C.kb(p,24,26,432,802,4286209044,1)
w=new C.eXI(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fDs(p,!1,!0,r,q,q,34,16,18)
return p},
bvs(d,e,f,g,h,i){B.iy(d,!0,C.fr(i),e,e+g,f,f+h)},
bwh(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kp(d,!1,A.d5,new B.Q4(i),null,A.cN,1,e,w,l,l)}},
huq(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.J(A.o.aj(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kp(d,!1,A.d5,new B.ql(r),null,A.cN,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.J(A.o.aj(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kp(d,!1,A.d5,new B.ql(r),null,A.cN,1,t,t,f,s);++q}},
hur(d,e){var w,v,u=null,t=B.hd(u,u,A.c4,0,A.dU,854,u,0,3,u,A.c4,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.huq(t,v,w,30,D.czW,(A.o.aj(v,30)+A.o.aj(w,30)&1)===0)
C.bvs(t,44,44,392,766,d)
C.bwh(t,44,44,392,766,d,e)
C.r8(t,d)
C.kb(t,44,44,392,766,4292128567,2.2)
C.kb(t,50,50,380,754,4279898632,0.8)
return t},
hvt(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.J(g,4)){case 0:C.ko(d,e,f,7,h,!0)
C.ko(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kp(d,!0,A.d5,C.fr(h),o,A.cN,1.6,w,u,v,t)
B.kp(d,!0,A.d5,C.fr(h),o,A.cN,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kp(d,!0,A.d5,new B.ql(p),o,A.cN,1.2,w,v,q,q)}break
default:B.kp(d,!0,A.d5,C.fr(h),o,A.cN,1.5,e-8,e+8,f,f)
B.kp(d,!0,A.d5,C.fr(h),o,A.cN,1.5,e,e,f-8,f+8)
B.kL(d,!0,A.d5,C.fr(h),o,A.cN,2,e,f)}},
hvu(d,e){var w,v,u,t,s=null,r=B.hd(s,s,A.c4,0,A.dU,854,s,0,3,s,A.c4,480,!1)
B.iy(r,!0,C.fr(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hvt(r,u,v,w,4292391514)}C.bvs(r,46,46,388,762,d)
C.bwh(r,46,46,388,762,d,e)
C.r8(r,d)
C.kb(r,46,46,388,762,4291404327,1.8)
return r},
fTt(d,e,f,g){C.f8u(d,!0,C.fr(g),16,e,f)
C.f8u(d,!0,C.fr(g),11,e,f)
C.ko(d,e,f,6,g,!0)
B.kp(d,!0,A.d5,C.fr(g),null,A.cN,1.3,e-14,e+14,f,f)
B.kp(d,!0,A.d5,C.fr(g),null,A.cN,1.3,e,e,f-14,f+14)},
hqI(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hd(v,v,A.c4,0,A.dU,854,v,0,3,v,A.c4,480,!1)
B.iy(s,!0,C.fr(4280948752),0,479,0,853)
B.iy(s,!0,C.fr(u),0,479,0,78)
B.iy(s,!0,C.fr(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fTt(s,w,39,t)
C.fTt(s,w,815,t)}C.bvs(s,38,92,404,670,d)
C.bwh(s,38,92,404,670,d,e)
C.r8(s,d)
C.kb(s,38,92,404,670,t,1.8)
C.kb(s,45,99,390,656,4287322667,0.8)
return s},
huW(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.iX(e,f),new B.iX(q-5,w),new B.iX(q,f-(18-Math.abs(r)*3)),new B.iX(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_t(d,new B.ql(o),p)}B.kL(d,!0,A.d5,C.fr(4292128567),null,A.cN,3,e,f)},
huX(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hd(s,s,A.c4,0,A.dU,854,s,0,3,s,A.c4,480,!1)
C.xo(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kp(q,!0,A.d5,new B.ql(v),s,A.cN,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kp(q,!0,A.d5,new B.ql(u),s,A.cN,1.1,v,v,0,853)}B.iy(q,!0,C.fr(r),0,479,0,70)
B.iy(q,!0,C.fr(r),0,479,798,853)
for(t=0;t<5;++t)C.huW(q,70+t*85,48,4292128567)
C.bvs(q,48,78,384,712,d)
C.bwh(q,48,78,384,712,d,e)
C.r8(q,d)
C.kb(q,48,78,384,712,4291404327,1.6)
return q},
hz4(d,e){var w,v,u,t=null,s=4279970378,r=B.hd(t,t,A.c4,0,A.dU,854,t,0,3,t,A.c4,480,!1)
B.iy(r,!0,C.fr(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.ko(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kL(r,!0,A.d5,new B.ql(u),t,A.cN,1,v,w)}C.bvs(r,40,40,400,774,d)
C.bwh(r,40,40,400,774,d,e)
C.r8(r,d)
C.kb(r,40,40,400,774,4291058750,2)
C.kb(r,48,48,384,758,s,0.8)
return r},
kA:function kA(d,e){this.a=d
this.b=e},
fhx:function fhx(d){this.a=d},
fhw:function fhw(d){this.a=d},
eXI:function eXI(d){this.a=d},
hMc(d){return B.a6(d,!1).cz(B.eN(new C.fsI(),!0,null,x.I))},
bvd(d,e){var w,v,u,t,s,r,q=B.bS(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fDb(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fsI:function fsI(){},
YC:function YC(d){this.a=d},
o1:function o1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aBZ:function aBZ(d,e,f,g,h,i,j,k,l){var _=this
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
_.aA=_.aK=_.av=_.au=_.Y=_.aZ=_.bn=_.y2=0
_.b_=null
_.aS=0.25
_.b7=null
_.bE=0.5
_.aQ=1
_.c9=_.bO=_.bf=0
_.cS=_.dd=!1
_.c=_.a=null},
eBc:function eBc(d){this.a=d},
eA5:function eA5(d,e){this.a=d
this.b=e},
eAs:function eAs(d,e){this.a=d
this.b=e},
eAC:function eAC(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
ezN:function ezN(d){this.a=d},
ezO:function ezO(d){this.a=d},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAm:function eAm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAy:function eAy(d,e,f){this.a=d
this.b=e
this.c=f},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAz:function eAz(d,e){this.a=d
this.b=e},
eAw:function eAw(d,e){this.a=d
this.b=e},
eAB:function eAB(d,e,f){this.a=d
this.b=e
this.c=f},
eAA:function eAA(d,e){this.a=d
this.b=e},
ezF:function ezF(d){this.a=d},
ezG:function ezG(d){this.a=d},
ezH:function ezH(d){this.a=d},
ezE:function ezE(){},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezD:function ezD(d,e){this.a=d
this.b=e},
ezK:function ezK(){},
ezJ:function ezJ(d,e){this.a=d
this.b=e},
ezC:function ezC(d,e){this.a=d
this.b=e},
ezz:function ezz(d,e){this.a=d
this.b=e},
ezL:function ezL(d){this.a=d},
ezB:function ezB(d,e){this.a=d
this.b=e},
ezM:function ezM(d){this.a=d},
ezA:function ezA(d,e){this.a=d
this.b=e},
eB1:function eB1(d,e){this.a=d
this.b=e},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d,e){this.a=d
this.b=e},
eBa:function eBa(){},
eB2:function eB2(d,e){this.a=d
this.b=e},
eB0:function eB0(d,e){this.a=d
this.b=e},
eB3:function eB3(d,e){this.a=d
this.b=e},
eB_:function eB_(d,e){this.a=d
this.b=e},
eB4:function eB4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAZ:function eAZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eB5:function eB5(d){this.a=d},
eB6:function eB6(d,e){this.a=d
this.b=e},
eB7:function eB7(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAK:function eAK(d,e){this.a=d
this.b=e},
eAF:function eAF(d,e){this.a=d
this.b=e},
eAN:function eAN(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAJ:function eAJ(d){this.a=d},
eAR:function eAR(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAV:function eAV(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAW:function eAW(d,e){this.a=d
this.b=e},
eAG:function eAG(d,e){this.a=d
this.b=e},
eAX:function eAX(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAp:function eAp(d){this.a=d},
eAo:function eAo(d){this.a=d},
eAq:function eAq(d,e){this.a=d
this.b=e},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAr:function eAr(d){this.a=d},
eAi:function eAi(d){this.a=d},
eAh:function eAh(d){this.a=d},
eAj:function eAj(d){this.a=d},
eAg:function eAg(d){this.a=d},
eAk:function eAk(d,e){this.a=d
this.b=e},
eAf:function eAf(d,e){this.a=d
this.b=e},
eAe:function eAe(d,e){this.a=d
this.b=e},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
eA_:function eA_(d){this.a=d},
eA0:function eA0(d){this.a=d},
eA1:function eA1(d){this.a=d},
eA2:function eA2(d){this.a=d},
eA3:function eA3(d){this.a=d},
eA4:function eA4(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezj:function ezj(d){this.a=d},
ezk:function ezk(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezm:function ezm(d){this.a=d},
ezh:function ezh(d){this.a=d},
ezn:function ezn(d){this.a=d},
ezo:function ezo(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezT:function ezT(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezs:function ezs(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezw:function ezw(d){this.a=d},
ezr:function ezr(d){this.a=d},
ezx:function ezx(d){this.a=d},
ezq:function ezq(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezp:function ezp(d){this.a=d},
eAd:function eAd(d){this.a=d},
eA9:function eA9(d){this.a=d},
eA8:function eA8(d){this.a=d},
eAa:function eAa(d,e){this.a=d
this.b=e},
eA7:function eA7(d,e){this.a=d
this.b=e},
eAb:function eAb(d,e){this.a=d
this.b=e},
eA6:function eA6(d,e){this.a=d
this.b=e},
eAc:function eAc(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAu:function eAu(d,e,f){this.a=d
this.b=e
this.c=f},
eAt:function eAt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAE:function eAE(d,e){this.a=d
this.b=e},
eAD:function eAD(d,e){this.a=d
this.b=e},
ezW:function ezW(d){this.a=d},
eBb:function eBb(d){this.a=d},
bbc:function bbc(d,e){this.b=d
this.a=e},
hHV(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hHW(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).kq(0,d),m=B.z(n,B.a2(n).k("E.E"))
if(m.length===0)return d
w=new B.f3("")
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
v=t.index+t[0].length}n=w.a=n+A.a.aV(d,v)
return n.charCodeAt(0)==0?n:n},
bvO(){var w=$.buW,v=$.On
$.On=v+1
return w+"_"+v},
i_(d,e,f,g,h,i,j){return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bl,A.a_,"",h,C.bvO(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.ca,D.eN,g,e,f)},
nq(d,e,f,g){var w=f*9
return C.i_(D.ew,d-f/2,e-w/32,f,w/16,g,0)},
hsf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.buW
p=$.On
$.On=p+1
w.push(new C.ev(q+"_"+p,D.eN,0,r,1,0.0016,"",24,A.a_,A.bl,A.ay,k,A.bn,null,D.b6,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.buW
p=$.On
$.On=p+1
w.push(new C.ev(q+"_"+p,D.eN,o,0,0.004,1,"",24,A.a_,A.bl,A.ay,k,A.bn,null,D.b6,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.nq(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nq(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i_(D.b6,0.08,0.08,0.5,0.003,v,0),C.i_(D.b6,0.58,0.08,0.004,0.06,v,0),C.i_(D.b6,0.58,0.14,0.34,0.003,v,0),C.i_(D.b6,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i_(D.b6,0.08,0.8,0.004,0.14,t,0),C.i_(D.b6,0.08,0.94,0.6,0.003,t,0),C.nq(0.58,0.08,0.05,e),C.nq(0.92,0.22,0.05,e),C.nq(0.08,0.8,0.05,f),C.nq(0.68,0.94,0.05,f),C.nq(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i_(D.kA,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i_(D.kA,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i_(D.kA,0.7,0.8,0.22,0.12,w|1140850688,0),C.i_(D.kA,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nq(0.5,0.5,1.5,w|335544320),C.nq(0.5,0.5,1.15,w|402653184),C.nq(0.5,0.5,0.8,v|436207616),C.nq(0.95,0.05,0.4,v|855638016),C.nq(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nq(0.85,0.08,0.7,w|1140850688),C.nq(0.1,0.35,0.5,v|855638016),C.nq(0.9,0.62,0.55,v|771751936),C.nq(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i_(D.b6,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i_(D.b6,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i_(D.b6,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i_(D.b6,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nq(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nq(0.5,0.2,0.65,(w|3422552064)>>>0),C.nq(0.5,0.2,0.95,w|855638016),C.i_(D.b6,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i_(D.b6,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i_(D.jj,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i_(D.jj,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i_(D.jj,0.15,0.86,0.6,0.14,1712265002,0),C.nq(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cBc[n]
u=A.o.J(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.buW
l=$.On
$.On=l+1
w.push(new C.ev(m+"_"+l,D.eN,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a_,A.bl,A.ay,k,A.bn,null,D.ew,q,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0))}w.push(C.nq(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i_(D.jj,0.35,-0.1,0.3,0.62,w|855638016,0),C.i_(D.jj,0.05,-0.1,0.3,0.55,v,-0.5),C.i_(D.jj,0.65,-0.1,0.3,0.55,v,0.5),C.nq(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i_(D.b6,0.06,0.04,0.88,0.002,e,0),C.i_(D.b6,0.06,0.96,0.88,0.002,e,0),C.i_(D.b6,0.06,0.04,0.004,0.92,e,0),C.i_(D.b6,0.936,0.04,0.004,0.92,e,0),C.i_(D.b6,0.09,0.07,0.82,0.001,w,0),C.i_(D.b6,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i_(D.jk,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i_(D.jk,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i_(D.jk,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i_(D.b6,0,0,0.3,0.09,w|1140850688,0),C.i_(D.b6,0.7,0.9,0.3,0.1,v|1426063360,0),C.i_(D.b6,0.82,0.04,0.12,0.07,w|771751936,0),C.i_(D.b6,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i_(D.ew,0.62,0.02,0.5,0.16,v,0.6),C.i_(D.ew,0.78,0.12,0.4,0.12,u,0.9),C.i_(D.ew,-0.12,0.8,0.5,0.16,u,-0.6),C.i_(D.ew,-0.05,0.9,0.4,0.12,v,-0.9),C.nq(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i_(D.b6,0.09,0.12,0.16,0.006,e,0),C.i_(D.b6,0.05,0.03,0.9,0.001,w,0),C.i_(D.b6,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hEw(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.buW=j
$.On=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fcU()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eg(A.bn,!1,n,A.ay,"ngmy_quote_background",m,24,A.bl,A.a_,"",1,C.bvO(),g,"","",0,!1,"",0,D.b6,l,2,"",0,0,"",D.ca,D.l_,1,0,0))
if(a9)A.d.v(q,C.hsf(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hHV(B.aK(w,p,""))
o=A.a.q(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fcT(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cS,A.a_))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a_))
if(a0!=null&&a0.length!==0)q.push(C.eg(A.bn,!1,n,A.ay,"ngmy_quote_logo",m,24,A.bl,A.a_,a1,a3*9/16,C.bvO(),a0,"","",0,!1,a2,0,D.b6,l,2,"",0,0,"",D.ca,D.l_,a3,a4,a5))
return C.qO(s,r,0,0,q,j+"_slide",D.pi,"","","",D.d7)},
qN:function qN(d,e){this.a=d
this.b=e},
lG:function lG(d,e,f,g,h,i,j,k,l,m){var _=this
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
fcU:function fcU(){},
fcT:function fcT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hiv(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bf(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b3(u.a(w.h(d,"extras")),new C.c7E(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.ym(u,t,s,B.t(w==null?"":w))},
fks(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fks=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fVe){w=1
break}$.fVe=!0
t=4
w=7
return B.b(B.au(),$async$fks)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aC(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.ji(p),k=k.gaf(k),j=x.j,i=x.m;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hiv(m)
if(l!=null)J.ci(n,l)}$.Bf.ci(0,B.t(o.a),new C.fkt(n))}C.fCS()
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
return B.i($async$fks,v)},
fCS(){var w,v=new B.N(Date.now(),0,!1).bL(-12e8)
for(w=new B.du($.Bf,$.Bf.r,$.Bf.e);w.C();)J.mX(w.d,new C.f2S(v))
$.Bf.bk($.Bf,new C.f2T())},
aKq(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aKq=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$aKq)
case 6:s=a0
m=x.N
l=x.z
r=B.Q(m,l)
for(k=new B.cM($.Bf,B.a2($.Bf).k("cM<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.ci(p,B.D(["at",g.a.a4().aa(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.an("String","ngmy_slides_ai_history_v1",A.Q.ak(n,null)),$async$aKq)
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
return B.i($async$aKq,v)},
hIw(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fCS()
w=$.Bf.ci(0,d,new C.fkv())
v=Date.now()
u=B.z(e,B.a2(e).k("cj.E"))
J.oY(w,0,new C.ym(new B.N(v,0,!1),f,u,g))
C.aKq()},
hIt(d){var w,v=$.Bf.h(0,d)
if(v==null||J.ch(v))return
w=J.cB(v)
w.ct(v,0)
if(w.gag(v))$.Bf.W(0,d)
C.aKq()},
ym:function ym(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7E:function c7E(){},
fkt:function fkt(d){this.a=d},
f2S:function f2S(d){this.a=d},
f2T:function f2T(){},
fkv:function fkv(){},
hIy(d){return A.d.dP(D.uI,new C.fky(d),new C.fkz())},
hit(d){var w
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
his(d){var w
switch(d.a){case 0:w=D.afP
break
case 1:w=A.wW
break
case 2:w=A.agR
break
case 3:w=I.afu
break
case 4:w=A.agi
break
case 5:w=A.kW
break
default:w=null}return w},
hv1(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.N9[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.N9[w]
if(!B.dk(v.toLowerCase(),t,0))u=B.dk(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hiu(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.J)(w),++s){r=w[s]
q=B.Q(u,t)
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
o.push(q)}return A.Q.ak(B.D(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hIu(d,e,f,g,h){var w=new B.I(D.uI,new C.fkr(),x.eC).aH(0,", "),v=""+d,u=C.h_p(h),t=F.fei(h),s=C.fWO(g),r=e.q(0,D.FW)?'- New slides get an "emoji".\n':"",q=e.q(0,D.FX)?'- New slides get an "icon3d" from: '+A.d.aH(D.N9,", ")+".\n":"",p=e.q(0,D.AY)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hIv(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.I(D.uI,new C.fku(),x.eC).aH(0,", "),p=new B.f3("")
if(e.q(0,D.FW)){p.a=s
w=s}else w=""
if(e.q(0,D.FX))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.N9,", ")+".\n")
if(e.q(0,D.AY))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h_p(d)
v=F.fei(d)
u=C.fWO(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ael(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BE(a3,"{"),a5=J.fvr(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Jt(a3,a4,a5+1)
try{w=A.Q.aC(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ch(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b3(p.a(J.q(t,a2)),new C.fir(),m).bZ(0,new C.fis())
k=B.z(l,l.$ti.k("E.E"))}else k=B.a([],n)
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
f=C.hv1(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a5B(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.aa(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fl(u).b:q))
p=A.d.bc(D.uI,new C.fit(r))?r:a7
o=C.f26(J.q(w,"logo_frame"),D.Ao)
n=C.f26(J.q(w,"logo_ring"),D.Aj)
m=C.f26(J.q(w,"photo_frame"),D.Ao)
l=C.f26(J.q(w,"photo_ring"),D.Aj)
return new C.ao3(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_i(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
fZx(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.AZ),f7=f6?C.hp5():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f9()
v.e2(f7.w+1)
u=f7.a
t=B.bi(u.b,!0,x.dL)
A.d.fL(t,v)
s=u.c
s=new C.ne("luxe",u.a,A.kW,t,u.e,u.f,B.a([s,u.d,s],x.t),D.d7)
w=s}if(w==null)w=C.hIy(f9.b)
r=g2.q(0,D.a14)||f6
q=g2.q(0,D.FW)
p=g2.q(0,D.OY)
o=new C.fcY()
n=B.a([],x.g)
m=new C.fd0(o,w,r)
l=new C.fd_(o,r)
k=new C.fcZ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.bc(u,new C.fcX(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.J(b1,a3.length)]
b4=A.o.J(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.J(b1,5)
b9=D.cCA[b8]
c0=D.cBG[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eaj.q(0,b2.a)){c7=b0+1
c5=g8[A.o.J(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.ew,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.ew,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ew,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.m3,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pj,500,f2,f0))
c1.push(l.$8$fx$key(D.b6,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.OV
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ew,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kA,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.b6,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.AW
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ew,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ew,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.m3,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cS,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pj,500,f2,f0))
d3=D.m2
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ew,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.b6,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.tb:D.ca
c1.push(new C.ev(b4,D.a12,0.64,0.05,0.27,0.9,g1,24,A.a_,A.bl,A.ay,4279310375,A.bn,e4,D.b6,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.m2
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ew,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ew,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.m3,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pj,450,f2,f0))
c1.push(l.$8$fx$key(D.b6,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.OV
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ew,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ew,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.b6,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.b6,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.FU,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.m2}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.d7,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hqH(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.J(b1,b8.length)]}else b8=r?D.cYR[A.o.J(b1,6)]:s
n.push(new C.lj(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Ah(e4,e4,e4,e4,D.AV,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
ffn(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$ffn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.AY)
n=e.q(0,D.FX)
if(!o&&!n){u=D.a01
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.ffq(o,s[r],n,$.htQ,r).$0())
s=B.Q(x.r,x.aH)
m=J
w=3
return B.b(B.iJ(t,x.e),$async$ffn)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ffn,v)},
fel(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fel=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hIv(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aJN(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fel)
case 3:u=s.aK7(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fel,v)},
bxm(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bxm=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.ee(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.G(0,(q==null?r.a(q):q).b)}C.hIw(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ael(i,"colorful")
t=C.hIu(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aJN(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hf),$async$bxm)
case 3:u=o.aK7(m,f,h,g,D.dBA,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxm,v)},
aJN(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aJN=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vP(null,""),$async$aJN)
case 3:n=i
if(A.a.i(n).length===0)throw B.O("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mV(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.ra(t,d,g,null),$async$aJN)
case 7:q=i
p=q.b
if(p!=null){o=C.ael(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.O(s!=null&&B.Pf(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aJN,v)},
aK7(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aK7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.AY)||e.q(0,D.FX)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d7(e,x.K)
t.W(0,D.AY)}w=6
return B.b(C.ffn(d,t),$async$aK7)
case 6:s=k
w=4
break
case 5:s=D.a01
case 4:t=d.c
w=A.d.bc(t,new C.eXk())?7:9
break
case 7:r=$.h0g
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aK7)
case 10:q=k
p=q!=null?A.Q.ak(q.ad(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.fZx(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hiu(new C.ao3(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("I<1,n>")
t=B.z(new B.I(m,new C.eXl(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jx<cj.E,n>")
t=B.z(new B.jx(e,new C.eXm(),t),t.k("E.E"))
l.cy=t
l.ay=e.q(0,D.OY)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aK7,v)},
fFq(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aY(x.K)
for(v=0;v<6;++v){u=D.a__[v]
if(A.d.q(t,u.b))w.G(0,u)}return w},
hMh(d){return B.c0(A.K,new C.fsU(),d,!0,!0,!0,null,!1,!1,x.I)},
hpH(d,e){var w,v=e.toLowerCase()
if(A.a.c5(v,".png"))w="image/png"
else w=A.a.c5(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cM.gcs().aF(d)},
hMg(d,e,f){return B.c0(A.K,new C.fsT(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fFr(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fFs(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
f26(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bc(e,new C.f27(w))?w:""},
fWO(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h0e(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ael(a1==null?"":a1,a0),a3=C.ael(a5,a0)
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
for(v=t.length,r=a4.r,q=B.S(r).k("a3<1>"),p=0;p<t.length;t.length===v||(0,B.J)(t),++p){o=B.qz(new B.a3(r,new C.fkA(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("E.E"),q=x.Q,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.V(m.b,l.b),new B.V(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.V(j[h],i[h]))
k.push(new B.V(m.e,l.e))
g=B.z(new B.a3(k,new C.fkB(),v),r)
A.d.aY(g,new C.fkC())
if(g.length===0)continue
f=new C.fkD(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.J)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hIP(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aA2
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dDv
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dDw
return null},
fWp(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bK(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hIz(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nw
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.J)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.J)(q),++o){n=q[o]
if(n.b!==D.cG)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fWp(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fWp(n,i,v,u))if(n.w>10){f=h+1
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
hIx(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ael(o,"colorful")
if(n==null)throw B.O("That earlier version could not be read.")
w=B.aY(x.K)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a__[r]
if(q.b===s)w.G(0,q)}}v=C.fFr(e)
u=C.fFs(e)
p=C.fZx(n,D.a01,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("I<1,n>")
o=B.z(new B.I(o,new C.fkw(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jx<cj.E,n>")
o=B.z(new B.jx(w,new C.fkx(),o),o.k("E.E"))
p.cy=o
p.ay=w.q(0,D.OY)
return p},
hM4(d,e,f){return B.c0(A.K,new C.fs8(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hp5(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f9()
s.e2(t)
w=D.chx[s.aE(10)]
v=new C.e0k(s)
u=x.N
return new C.e0j(w,s.aE(4),J.fl(v.$1$2(D.cGC,1,x.ff)),w.r[s.aE(3)],v.$1$2(D.cV2,2+s.aE(2),u),v.$1$2(D.cP5,2,u),v.$1$2(D.cXy,4,x.fP),t)},
hqH(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f9()
a1.e2(a5.w+a3*13)
w=new C.eTU(a4)
v=new C.eTW(a4,d)
u=new C.eTV(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.J)(a2),++q){p=a2[q]
if(p.b===D.cG){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aU(A.o.fC(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aU(A.o.fC(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.J(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.ew,0.1+a1.ah()*0.45,0.05+a1.ah()*0.3,0.45,0.75,C.a_i(a0,52),"lux_spot",a5.vA(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.b6,0,0,1,1,0,"lux_back",a5.vA(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.b6,0,0,1,1,0,"lux_back2",a5.aAd(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b6,0.022,0.038,0.956,0.924,0,g,a5.vA(0,f),D.d7,150,C.a_i(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b6,0.018,0.032,0.964,0.936,0,g,a5.vA(0,f),D.d7,120,C.a_i(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b6,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.d7,260,C.a_i(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.b6,0,0,1,1,0,"lux_filigree",a5.vA(0,"filigree"),D.d7,200))
break
default:a2.push(w.$10$anim$delay(D.b6,0.08,0.06,0.84,0.004,C.a_i(a0,208),"lux_rule",a5.aAd(0,"shimmer",r),D.ta,150))
a2.push(w.$10$anim$delay(D.b6,0.08,0.936,0.84,0.004,C.a_i(a0,144),"lux_rule2","",D.FU,220))}l=!A.d.bc(a2,new C.eTT())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vA(0,"crest"),350))
else{o=a1.hc()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vA(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_i(r,242)
j=a5.vA(0,"orbit")
i=s===D.b6?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pj,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ew,t-0.007,0.9495,0.014,0.025,C.a_i(r,242),"lux_g2",a5.vA(0,"orbit"),D.pj,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){h=t[q]
a2.push(w.$8(D.b6,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aU(A.o.fC(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.b6,0,0,1,1,0,"lux_velvet",a5.vA(0,"velvet")))},
ne:function ne(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fky:function fky(d){this.a=d},
fkz:function fkz(){},
v2:function v2(d,e){this.a=d
this.b=e},
a5B:function a5B(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ao3:function ao3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fkr:function fkr(){},
fku:function fku(){},
fir:function fir(){},
fis:function fis(){},
fit:function fit(d){this.a=d},
fcY:function fcY(){},
fd0:function fd0(d,e,f){this.a=d
this.b=e
this.c=f},
fd_:function fd_(d,e){this.a=d
this.b=e},
fcZ:function fcZ(d,e){this.a=d
this.b=e},
fcX:function fcX(d){this.a=d},
ffq:function ffq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffo:function ffo(d){this.a=d},
ffp:function ffp(d){this.a=d},
eXk:function eXk(){},
eXl:function eXl(){},
eXm:function eXm(){},
fsU:function fsU(){},
Z5:function Z5(d){this.a=d},
aDT:function aDT(d,e,f,g,h){var _=this
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
eH6:function eH6(d,e,f){this.a=d
this.b=e
this.c=f},
eH7:function eH7(d,e){this.a=d
this.b=e},
eH4:function eH4(d,e){this.a=d
this.b=e},
eH5:function eH5(d,e){this.a=d
this.b=e},
eH3:function eH3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGZ:function eGZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eH2:function eH2(d,e){this.a=d
this.b=e},
eGY:function eGY(d,e){this.a=d
this.b=e},
eH1:function eH1(d,e){this.a=d
this.b=e},
eGX:function eGX(d,e){this.a=d
this.b=e},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d,e){this.a=d
this.b=e},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGO:function eGO(d,e){this.a=d
this.b=e},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGU:function eGU(d,e){this.a=d
this.b=e},
eHk:function eHk(d){this.a=d},
eHl:function eHl(d){this.a=d},
eHj:function eHj(d){this.a=d},
eHm:function eHm(d){this.a=d},
eHi:function eHi(d){this.a=d},
eHo:function eHo(d){this.a=d},
eHh:function eHh(d,e){this.a=d
this.b=e},
eHp:function eHp(d){this.a=d},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHq:function eHq(d){this.a=d},
eHf:function eHf(d){this.a=d},
eHr:function eHr(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHs:function eHs(d){this.a=d},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHt:function eHt(d){this.a=d},
eHc:function eHc(d){this.a=d},
eHu:function eHu(d,e){this.a=d
this.b=e},
eHb:function eHb(d,e){this.a=d
this.b=e},
eHv:function eHv(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHa:function eHa(d,e){this.a=d
this.b=e},
eGV:function eGV(d,e,f){this.a=d
this.b=e
this.c=f},
eGW:function eGW(d,e,f){this.a=d
this.b=e
this.c=f},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH8:function eH8(d,e){this.a=d
this.b=e},
fsT:function fsT(d,e){this.a=d
this.b=e},
Z4:function Z4(d,e,f){this.c=d
this.d=e
this.a=f},
aDS:function aDS(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
f27:function f27(d){this.a=d},
aYd:function aYd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAy:function aAy(d,e,f){this.c=d
this.d=e
this.a=f},
bfN:function bfN(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
e0m:function e0m(d){this.a=d},
e0l:function e0l(){},
bdp:function bdp(d,e){this.b=d
this.a=e},
fkA:function fkA(d){this.a=d},
fkB:function fkB(){},
fkC:function fkC(){},
fkD:function fkD(d){this.a=d},
aoD:function aoD(d,e){this.a=d
this.b=e},
fkw:function fkw(){},
fkx:function fkx(){},
fs8:function fs8(d,e){this.a=d
this.b=e},
Xv:function Xv(d,e,f){this.c=d
this.d=e
this.a=f},
ay0:function ay0(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
d9S:function d9S(d){this.a=d},
d9T:function d9T(d){this.a=d},
d9U:function d9U(d,e){this.a=d
this.b=e},
d9X:function d9X(d){this.a=d},
d9Y:function d9Y(d,e){this.a=d
this.b=e},
d9W:function d9W(d,e){this.a=d
this.b=e},
d9Z:function d9Z(d){this.a=d},
d9V:function d9V(d,e){this.a=d
this.b=e},
bo0:function bo0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e0j:function e0j(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e0k:function e0k(d){this.a=d},
eTU:function eTU(d){this.a=d},
eTW:function eTW(d,e){this.a=d
this.b=e},
eTV:function eTV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTT:function eTT(){},
aIn:function aIn(){},
fEi(d){var w,v,u
try{w=A.Q.aC(0,d,null)
if(x.f.b(w)){v=B.uT(B.Y(w,x.N,x.z))
return v}}catch(u){}return null},
aY9:function aY9(d,e,f){this.c=d
this.d=e
this.a=f},
bho:function bho(d,e){this.c=d
this.a=e},
hEZ(d){return A.d.dP(D.F0,new C.fe4(d),new C.fe5())},
hF_(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aV(t,6)
if(w.length===0)return null
v=new B.a3(D.F0,new C.fe6(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jr("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kU:function kU(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fe4:function fe4(d){this.a=d},
fe5:function fe5(){},
fe6:function fe6(d){this.a=d},
ml(d,e,f,g,h){return new C.D9(f,g,d)},
hrQ(d){var w=d.z,v=B.S(w).k("a3<1>")
w=B.z(new B.a3(w,new C.eVS(),v),v.k("E.E"))
d.z=w
d.x=""},
dl(d,e){var w=$.Iz
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dm(d,e,f,g,h,i,j,k,l){return C.eg(A.bn,!1,4279310375,A.ay,"",d,24,A.bl,A.a_,"",e,"design_"+C.cx(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.ca,D.eN,j,k,l)},
fZj(d,e){var w
C.hrQ(d)
w=A.d.dP($.bzf(),new C.fbX(e),new C.fbY())
$.Iz=w.a
d.x=w.a;++d.y
try{w.bI(d)}finally{$.Iz=""}d.z=B.bi(d.z,!0,x.E)},
D9:function D9(d,e,f){this.a=d
this.b=e
this.e=f},
eVS:function eVS(){},
fk2:function fk2(){},
fk3:function fk3(){},
fk4:function fk4(){},
fkf:function fkf(){},
fkk:function fkk(){},
fkl:function fkl(){},
fkm:function fkm(){},
fkn:function fkn(){},
fko:function fko(){},
fkp:function fkp(){},
fkq:function fkq(){},
fk5:function fk5(){},
fk6:function fk6(){},
fk7:function fk7(){},
fk8:function fk8(){},
fk9:function fk9(){},
fka:function fka(){},
fkb:function fkb(){},
fkc:function fkc(){},
fkd:function fkd(){},
fke:function fke(){},
fkg:function fkg(){},
fkh:function fkh(){},
fki:function fki(){},
fkj:function fkj(){},
fbX:function fbX(d){this.a=d},
fbY:function fbY(){},
iH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eg(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.b6,4280172719,2,m,n,0,"",o,D.cG,p,q,r)},
Bw(d,e,f,g,h,i,j,k,l){return C.eg(A.bn,!1,4279310375,A.ay,"",d,24,A.bl,A.a_,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.ca,D.eN,j,k,l)},
by0(){var w=new B.N(Date.now(),0,!1)
return A.hV[B.bC(w)-1]+" "+B.bN(w)+", "+B.by(w)},
em:function em(d,e,f){this.a=d
this.b=e
this.c=f},
bvy(d){return new B.iC((A.o.ar(d,24)&255)/255,(A.o.ar(d,16)&255)/255,(A.o.ar(d,8)&255)/255,(d&255)/255)},
hwA(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.ajX(A.cw.aF(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hwE(d){var w=d.r
if(!d.cy)return w
return new B.I(B.a(w.split("\n"),x.s),new C.f1V(),x.dv).aH(0,"\n")},
hwD(d){switch(d.a){case 2:return A.mO
case 1:case 5:return A.ekz
default:return A.Qi}},
hwx(d){switch(d.a){case 2:return A.tJ
case 1:case 5:return A.S1
default:return A.a5F}},
hwB(d,e){var w,v=null,u=d.ay,t=A.o.ar(u,24),s=A.o.ar(d.ch,24),r=(t&255)===0?v:C.bvy(u),q=(s&255)===0?v:C.bvy(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.mZ(q,p,A.kg)
w=new B.oZ(t,t,t,t)}switch(d.ax.a){case 1:return B.l8(v,v,v,new B.kf(r,w,v,A.a6U,v),v,v,v,v)
case 4:return u?new B.fF(v,v,v):B.xH(B.l8(v,v,q,v,p+0.4,v,v,v))
default:return B.l8(v,v,v,new B.kf(r,w,B.uw(4),A.hj,v),v,v,v,v)}},
hwz(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eN?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hwx(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hwE(d)
t=C.bvy(d.Q)
s=d.x.a>=700?A.eh:A.ue
r=d.y===A.cS?A.wx:A.aeo
q=d.z
p=new B.Fd(w,l,l,B.f4(u,l,l,l,B.h5(l,t,1===q.a?A.aIk:A.aIj,l,l,l,l,l,l,A.dq,l,l,v,r,s,l,!0,l,l,l,l),C.hwD(d.as)))
break
case 1:case 4:o=C.hwA(d.at)
n=i===D.l_&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xH(B.f4(w,l,l,l,B.h5(l,A.tm,l,l,l,l,l,l,l,A.dq,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.G5(o,n?A.a6Q:A.Sl,l,l)
break
case 3:w=new B.mZ(A.G9,1,A.kg)
u=B.uw(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.l8(A.tJ,B.f4(t,l,l,l,B.h5(l,D.dLW,l,l,l,l,l,l,l,A.dq,l,l,11,l,A.eh,l,!0,l,l,l,l),A.mO),l,new B.kf(E.aB1,new B.oZ(w,w,w,w),u,A.hj,l),l,l,l,l)
break
case 2:p=C.hwB(d,e)
break
case 5:p=C.hwy(d)
break
default:p=l}w=d.cx
if(w!==0)p=new B.atj(B.fLg(-w),A.tJ,p)
w=i===D.cG
if(w){m=A.o.ar(d.Q,24)&255
if(m<255)p=new C.aZu(m/255,p)}if(w)return new F.v9(k,l,j,l,new B.Qb(new B.kP(g,g,f,1/0),p))
if(i===D.kz){i=new B.mZ(A.G9,1,A.kg)
i=B.l8(A.tJ,p,l,new B.kf(A.oh,new B.oZ(i,i,i,i),B.uw(4),A.hj,l),l,l,D.bir,l)}else i=p
return new F.v9(k,l,j,l,new B.fF(g,f,i))},
hwC(d,e,f,g){var w,v=null,u=C.bvy(d.e),t=d.f
t=B.a([F.fQ0(t!=null?B.l8(v,v,v,new B.kf(v,v,v,A.hj,new B.aSH(E.S2,D.aNf,B.a([u,C.bvy(t)],x.cR),v)),v,v,v,v):B.l8(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.I(w,new C.f1U(f,g),B.S(w).k("I<1,f6>")))
return F.ck9(t)},
fFu(d){var w=0,v=B.j(x.G),u,t,s,r,q,p,o,n
var $async$fFu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a1U(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.J)(t),++q){p=t[q]
o=new B.M7(A.uS,A.B9,D.bjs,null,!1,null)
o=new B.An(o,new C.fkJ(607,787,p,d))
o.KU(n,null)
r.push(o)}u=n.jy(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFu,v)},
hwy(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fEi(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gag8()
if(h==null)h=A.art
j=B.rM(4279308564)
w=B.uw(18)
v=new B.mZ(B.rM(4287531653),3,A.kg)
u=i.length===0?"My links":i
u=B.a([B.xH(B.f4(u,m,m,m,B.h5(m,A.oh,m,m,m,m,m,m,m,A.dq,m,m,12,m,A.eh,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xH(B.f4(A.a.i(l.c),m,m,m,D.ero,m)))
u.push(new B.fF(m,8,m))
for(t=B.dg(h,0,B.dK(8,"count",x.r),B.S(h).c),s=t.$ti,t=new B.bR(t,t.gH(0),s.k("bR<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rM(4280690220)
o=new B.a6O(8,8)
n=A.a.i(r.b)
u.push(new B.nQ(D.bcV,new C.atv(new C.afm(q),B.l8(m,B.f4(n.length===0?A.a.i(r.c):n,m,m,m,D.etw,A.mO),m,new B.kf(p,m,new B.afN(o,o,o,o),A.hj,m),m,m,D.biP,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xH(B.f4(k,m,m,m,D.esR,m))
u.push(new C.atv(C.h6N(k),t))}return B.l8(m,B.xI(u,A.J5,A.kZ),m,new B.kf(j,new B.oZ(v,v,v,v),w,A.hj,m),m,m,D.bdH,m)},
f1V:function f1V(){},
f1U:function f1U(d,e){this.a=d
this.b=e},
fkJ:function fkJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae8(d){var w,v
for(w=0;w<32;++w){v=D.ES[w]
if(v.a===d)return v}return null},
fTW(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aF(A.a.aV(d,u+1))
return w}catch(v){return null}},
cL(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h1m(d,e){return B.a6(d,!1).cz(B.eN(new C.fqM(e),!0,null,x.fB))},
h1l(d,e){return B.c0(A.K,new C.fqL(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iK:function iK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D0:function D0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Lt:function Lt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bf9:function bf9(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
dK4:function dK4(d){this.a=d},
dK3:function dK3(d,e,f){this.a=d
this.b=e
this.c=f},
dK2:function dK2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmC:function bmC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFU:function eFU(d,e){this.a=d
this.b=e},
bai:function bai(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aW3:function aW3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c2n:function c2n(){},
c2o:function c2o(d){this.a=d},
c2p:function c2p(d,e,f){this.a=d
this.b=e
this.c=f},
c2q:function c2q(d,e,f){this.a=d
this.b=e
this.c=f},
fqM:function fqM(d){this.a=d},
X3:function X3(d,e){this.c=d
this.a=e},
awr:function awr(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d_o:function d_o(d,e,f){this.a=d
this.b=e
this.c=f},
d_t:function d_t(d){this.a=d},
d_u:function d_u(d){this.a=d},
d_s:function d_s(d){this.a=d},
d_v:function d_v(d){this.a=d},
d_r:function d_r(d,e){this.a=d
this.b=e},
d_w:function d_w(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_x:function d_x(d){this.a=d},
d_p:function d_p(d,e){this.a=d
this.b=e},
d_y:function d_y(d,e){this.a=d
this.b=e},
fqL:function fqL(d){this.a=d},
fqK:function fqK(d){this.a=d},
fqJ:function fqJ(d,e,f){this.a=d
this.b=e
this.c=f},
fqI:function fqI(d,e){this.a=d
this.b=e},
aHR:function aHR(){},
hMf(d){return B.c0(A.K,new C.fsS(),d,!0,!0,!0,null,!1,!1,x.N)},
fsS:function fsS(){},
Xo:function Xo(d){this.a=d},
bbM:function bbM(d){this.d=d
this.c=this.a=null},
d5S:function d5S(d){this.a=d},
d5T:function d5T(d,e){this.a=d
this.b=e},
d5U:function d5U(d){this.a=d},
htc(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.bg(w)}return D.vZ},
hGP(d){var w,v=A.d.gI(d.split("@"))
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
hGO(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.htc(d)
switch(q){case"shimmer":return B.ni(A.a60,g,new C.fhq(p,A.k.J(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.bb9(e,f,p,r),A.at),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dN(B.e4(A.C,B.d8(C.fwJ(g,B.a2K(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.baR(e,p,r),A.at),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d8(B.eO(A.C,e*0.5,B.e4(A.C,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.df()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.ma(Math.sin(e)*0.3)
return B.dN(B.fp(A.C,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.W,r,A.aX,A.q,B.a([B.ec(B.b1(r,r,r,new C.bjz(e,f,p,r),A.at),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.W,r,A.aX,A.q,B.a([B.ec(B.b1(r,r,r,new C.b5T(e,f,p,r),A.at),!0,r),g],x.p),r)
case"aurora":return new B.am(A.W,r,A.aX,A.q,B.a([B.ec(B.b1(r,r,r,new C.b5v(e,f,p,r),A.at),!0,r),g],x.p),r)
case"velvet":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.bqj(e,p,r),A.at),!0,r)],x.p),r)
case"sparkle":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.bno(e,f,p,r),A.at),!0,r)],x.p),r)
case"sheen":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.bmy(e,p,r),A.at),!0,r)],x.p),r)
case"filigree":return new B.am(A.W,r,A.aX,A.q,B.a([g,B.ec(B.b1(r,r,r,new C.bab(e,p,r),A.at),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.C,r,A.a9,A.i,B.a([B.c_(0,B.ec(B.e4(A.C,B.bQ(r,new B.o(r,r,r,r,r,new B.bT(A.C,0.5,A.w,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.ba),1.6+s*0.15,r,r),!0,r),0,0,0),B.eO(A.C,s*0.06,B.e4(A.C,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fhq:function fhq(d,e){this.a=d
this.b=e},
bb9:function bb9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
baR:function baR(d,e,f){this.b=d
this.c=e
this.a=f},
bjz:function bjz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b5T:function b5T(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b5v:function b5v(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqj:function bqj(d,e,f){this.b=d
this.c=e
this.a=f},
bno:function bno(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bmy:function bmy(d,e,f){this.b=d
this.c=e
this.a=f},
bab:function bab(d,e,f){this.b=d
this.d=e
this.a=f},
d_5:function d_5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wz:function wz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fht(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kz},
hGU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aY(j,new C.fhu())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.J)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gI(B.aMC(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hGT(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d_(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d_(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
adN(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adN=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("a3<1>")
e=B.z(new B.a3(a4,new C.fag(),f),f.k("E.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(A.dw,new C.fah(e),d,!0,!0,!1,A.l0,!1,!1,x.N),$async$adN)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hr())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fG6(d),$async$adN)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Jj(d,"Search states\u2026","",A.jF,"Choose state"),$async$adN)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fF1(s)
if(p==null)p=A.d.gI(D.NT)
f=C.cx()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cx()
m=p.e
l=C.fhv(p.d)
k=x.u
j=B.a([C.eg(A.bn,!1,4279310375,A.ay,"marriage_locked_bg",4280640491,24,A.bl,A.a_,"",1,C.cx(),l,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.l_,1,0,0)],k)
i=p.f
h=x.E
k=B.z(B.a([C.Bi(i,0.016,D.kA,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bi(0,0.058,D.ew,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bi(0,0.058,D.ew,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.IK("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.IK("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a_,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fCc(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bv1("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.ZT("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.ZT("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.ZT("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.ZT("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bv1("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bi(m,0.082,D.b6,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cx()
k.push(C.eg(A.bn,!1,i,A.ay,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bl,A.cn,"",0.074,g,null,"","",0,!1,"",0,D.b6,4280172719,2,y.t,0,0,"",D.ca,D.cG,0.78,0.11,0.388))
A.d.v(k,C.fCc(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bv1("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fVQ("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fVQ("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.ZT("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.ZT("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bv0("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bv0("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bv1("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.IK("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.IK("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bv0("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bv0("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bv1("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.ZT("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bv0("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.ZT("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fCc(0.22,0.83,0.56,4291404327,i),h)
h.push(C.IK("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.IK("Nakala ya Hati",A.L,4291404327,9,A.a_,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Ah(null,null,null,null,D.nw,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qO(m,null,0,0,j,n,D.pi,"","","Hati ya Ndoa",D.d7)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$adN,v)},
fhu:function fhu(){},
fag:function fag(){},
fah:function fah(d){this.a=d},
fae:function fae(d){this.a=d},
faf:function faf(d){this.a=d},
hw5(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hw4(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.m7
case"lineThrough":return A.y7
default:return A.ay}},
eg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ev(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
fXO(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NF[w]
if(v.b===u)return v}return D.d7},
hsC(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cyL[w]
if(v.b===u)return v}return D.cG},
hyJ(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cVC[w]
if(v.b===u)return v}return D.b6},
qO(d,e,f,g,h,i,j,k,l,m,n){return new C.lj(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fOK(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.huu(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.L(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.L(s)
r=C.fXO(d.h(0,"transition"))
q=B.aQ(d.h(0,"durationSeconds"))
q=q==null?m:A.k.L(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aQ(d.h(0,"designRevision"))
o=o==null?m:A.k.L(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.d2(n,x.f)
n=B.cy(n,new C.c7B(),n.$ti.k("E.E"),x.E)
n=B.z(n,B.a2(n).k("E.E"))}return C.qO(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
huu(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajv[w]
if(v.b===u)return v}return D.m2},
Ah(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.N(Date.now(),0,!1):a4
return new C.hP(p,t,a1,h,i,w,a0==null?B.a([C.qO(4294967295,null,0,0,null,C.cx(),D.pi,"","","",D.d7)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
TN(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hqW(a6.h(0,"aspectRatio"))
t=B.aQ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.L(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bf(J.k(s==null?"":s))
if(s==null)s=new B.N(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kd(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kd(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aQ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aQ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.L(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.y(a6.h(0,"cinematic"),!0)
i=J.y(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b3(f,new C.c7o(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b3(e,new C.c7p(),x.N)
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
else{g=J.d2(g,x.f)
g=B.cy(g,new C.c7q(),g.$ti.k("E.E"),x.bt)
g=B.z(g,B.a2(g).k("E.E"))}return C.Ah(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qO(4294967295,a3,0,0,a3,C.cx(),D.pi,"","","",D.d7)],x.g):g,v,p,o,s)},
kd(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hqW(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cWn[w]
if(v.b===u)return v}return D.AV},
cx(){var w=Date.now(),v=$.iM
$.iM=v+1
return""+1000*w+"_"+v},
c7S(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.AW){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.b6,m,2,o,0,0,"",D.ca,D.cG,0.84,0.08,0.3)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,20,A.bl,A.cn,"",0.12,u,p,"","",0,!1,"",0,D.b6,m,2,"Click to add subtitle",0,0,"",D.ca,D.cG,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.b6,m,2,o,0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!0,f.e.l(),A.ay,"",n,20,A.bl,A.cn,"",0.68,u,p,"","",0,!1,"",0,D.b6,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.ca,D.cG,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b6,m,2,"Two Column Slide",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
t=f.e
u=C.eg(A.bn,!0,t.l(),A.ay,"",n,18,A.bl,A.a_,"",0.7,u,p,"","",0,!1,"",0,D.b6,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.ca,D.cG,0.42,0.06,0.22)
s=C.cx()
A.d.v(w,B.a([v,u,C.eg(A.bn,!0,t.l(),A.ay,"",n,18,A.bl,A.a_,"",0.7,s,p,"","",0,!1,"",0,D.b6,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.ca,D.cG,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.G(d.z,C.eg(A.L,!1,4294967295,A.ay,"",n,42,A.bl,A.u,"",0.2,C.cx(),p,"","",0,!1,"",0,D.b6,m,2,"Section Header",0,0,"",D.ca,D.cG,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b6,m,2,"Compare",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
t=f.c
u=C.eg(A.bn,!1,l,A.ay,"",t.j(0.12).l(),24,A.bl,A.a_,"",0.68,u,p,"","",0,!1,"",0,D.b6,t.l(),2,"",0,0,"",D.ca,D.eN,0.42,0.06,0.22)
s=C.cx()
r=f.e
s=C.eg(A.bn,!1,r.l(),A.ay,"",n,20,A.bl,A.O,"",0.6,s,p,"","",0,!1,"",0,D.b6,m,2,"Option A",0,0,"",D.ca,D.cG,0.38,0.08,0.26)
q=C.cx()
t=C.eg(A.bn,!1,l,A.ay,"",t.j(0.06).l(),24,A.bl,A.a_,"",0.68,q,p,"","",0,!1,"",0,D.b6,t.j(0.5).l(),2,"",0,0,"",D.ca,D.eN,0.42,0.52,0.22)
q=C.cx()
A.d.v(w,B.a([v,u,s,t,C.eg(A.bn,!1,r.l(),A.ay,"",n,20,A.bl,A.O,"",0.6,q,p,"","",0,!1,"",0,D.b6,m,2,"Option B",0,0,"",D.ca,D.cG,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cx()
v=C.eg(A.L,!1,f.d.l(),A.ay,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.b6,m,2,"TERM / QUESTION",0,0,"",D.ca,D.cG,0.8,0.1,0.12)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.L,!1,f.e.l(),A.ay,"",n,22,A.bl,A.cn,"",0.35,u,p,"","",0,!1,"",0,D.b6,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.ca,D.cG,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.b6,m,2,"Quiz Question",0,0,"",D.ca,D.cG,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!1,f.e.l(),A.ay,"",n,20,A.bl,A.a_,"",0.62,u,p,"","",0,!1,"",0,D.b6,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.ca,D.cG,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cx()
v=C.eg(A.bn,!1,f.d.l(),A.ay,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.b6,m,2,"Worksheet / Assignment",0,0,"",D.ca,D.cG,0.88,0.06,0.04)
u=C.cx()
A.d.v(w,B.a([v,C.eg(A.bn,!1,f.e.l(),A.ay,"",n,18,A.bl,A.a_,"",0.78,u,p,"","",0,!1,"",0,D.b6,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.ca,D.cG,0.88,0.06,0.16)],x.u))
break}},
hiE(d){return A.d.dP(D.ZG,new C.c7T(d),new C.c7U())},
hiB(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aC(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ci(v,C.TN(B.Y(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fyP(d,e){var w,v,u,t=B.Q(x.N,x.I),s=new C.c7O(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.J)(e),++v)s.$1(e[v])
w=t.$ti.k("be<2>")
u=B.z(new B.be(t,w),w.k("E.E"))
A.d.aY(u,new C.c7N())
return u},
fON(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c7J()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
ao4(d){return C.hiz(d)},
hiz(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$ao4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c7M()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a04(m),$async$ao4)
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
return B.b(B.au(),$async$ao4)
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
case 11:o=l.$1($.fOM.h(0,m))
n=C.fyP(C.fyP(j,r),o)
if(n.length===0){u=C.fON(C.fON(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ao4,v)},
c7I(d){return C.hiy(d)},
hiy(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c7I=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.au(),$async$c7I)
case 7:r=f
q=r.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.ki(q,B.S(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$c7I,v)},
aYf(d,e){return C.hiA(d,e)},
hiA(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYf=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.au(),$async$aYf)
case 6:s=g
q=s.rk("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.G(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.aa(r)>500?J.Js(r,J.aa(r)-500):r
w=7
return B.b(s.an("StringList","ngmy_slides_deleted_"+p,o),$async$aYf)
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
return B.i($async$aYf,v)},
TO(d,e){return C.hiC(d,e)},
hiC(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$TO=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.aa(a0)===0){w=1
break}p=$.fOL.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.ao4(a3),$async$TO)
case 5:p=a6
case 4:w=6
return B.b(C.c7I(a3),$async$TO)
case 6:o=a6
n=B.Q(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.J)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbm())k=f===g.gbm()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("be<2>")
l=m.k("a3<E.E>")
e=B.z(new B.a3(new B.be(n,m),new C.c7P(o),l),l.k("E.E"))
A.d.aY(e,new C.c7Q())
$.fOL.m(0,a0,e)
n=B.S(e).k("I<1,a0<n,@>>")
n=B.z(new B.I(e,new C.c7R(),n),n.k("ai.E"))
r=A.Q.ak(n,null)
$.fOM.m(0,a0,r)
t=8
w=11
return B.b(B.aez(a0,r),$async$TO)
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
return B.b(B.au(),$async$TO)
case 16:q=a6
w=17
return B.b(q.an("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$TO)
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
return B.i($async$TO,v)},
GW:function GW(d,e){this.a=d
this.b=e},
ao2:function ao2(d,e){this.a=d
this.b=e},
tT:function tT(d,e){this.a=d
this.b=e},
m3:function m3(d,e){this.a=d
this.b=e},
hm:function hm(d,e){this.a=d
this.b=e},
ev:function ev(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lj:function lj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c7C:function c7C(){},
c7D:function c7D(){},
c7B:function c7B(){},
hP:function hP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c7r:function c7r(){},
c7s:function c7s(){},
c7o:function c7o(){},
c7p:function c7p(){},
c7q:function c7q(){},
jr:function jr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c7T:function c7T(d){this.a=d},
c7U:function c7U(){},
c7O:function c7O(d){this.a=d},
c7N:function c7N(){},
c7J:function c7J(){},
c7K:function c7K(){},
c7L:function c7L(){},
c7M:function c7M(){},
c7P:function c7P(d){this.a=d},
c7Q:function c7Q(){},
c7R:function c7R(){},
hH4(d,e){var w=x.N,v=B.Q(w,x.E)
w=new C.fi2(e,v,d,B.aY(w))
w.$1(new C.fhZ())
w.$1(new C.fi_())
w.$1(new C.fi0())
w.$1(new C.fi1())
return v},
fi2:function fi2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhZ:function fhZ(){},
fi_:function fi_(){},
fi0:function fi0(){},
fi1:function fi1(){},
aYc:function aYc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7x:function c7x(d){this.a=d},
c7w:function c7w(){},
c7y:function c7y(){},
c7z:function c7z(d,e){this.a=d
this.b=e},
c7A:function c7A(d){this.a=d},
all:function all(d,e){this.c=d
this.a=e},
beX:function beX(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dxp:function dxp(){},
aHD:function aHD(){},
c7F(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c7F=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.E(x.q).f.P(D.ehX)
u=!1
w=1
break}u=B.kC(!1,d,t,!1,null,A.a16,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c7F,v)},
hiw(d){var w=A.d.be(D.F0,new C.c7G(d))
if(w<0)return!0
return w>=4},
hix(d){var w=A.d.be($.bzf(),new C.c7H(d))
if(w<0)return!0
return w>=5},
c7G:function c7G(d){this.a=d},
c7H:function c7H(d){this.a=d},
hIJ(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xy()
$.pG().p_(t,new C.fkQ(s),!0)
u=B.a([B.Cm(v,A.pm,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.erR,v,v,v),A.i,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nj,v,v,v),v,v,4,v,4,v))}return new B.am(A.W,v,A.aX,A.q,u,v)},
fkQ:function fkQ(d){this.a=d},
hIk(){return C.fFn()},
hFn(){return C.bxk()},
hHl(){return C.fFe()},
aLJ(d,e,f){var w=0,v=B.j(x.H),u
var $async$aLJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fjW(d,f),$async$aLJ)
case 5:w=1
break
case 4:if(d.e!=null)d.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aLJ,v)},
fjW(d,e){var w=0,v=B.j(x.H),u
var $async$fjW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bvz
if(u==null)u=e+".pdf"
w=2
return B.b(B.c0(A.K,new C.fjX(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fjW)
case 2:return B.h(null,v)}})
return B.i($async$fjW,v)},
fjX:function fjX(d,e){this.a=d
this.b=e},
aaM:function aaM(d,e,f){this.c=d
this.d=e
this.a=f},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9E:function e9E(d,e){this.a=d
this.b=e},
e9F:function e9F(d,e){this.a=d
this.b=e},
e9G:function e9G(d){this.a=d},
ab4:function ab4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYb(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYa(g,m,f,d,e,h,l,k,j,o,i,null)},
h_D(d){return B.co(new C.fhY(d))},
fFp(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hIs(d){if(d===D.ca)return"None"
return C.fFp(d)},
bw4(d,e,f,g){return C.hyQ(d,e,f,g)},
hyQ(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bw4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fCv&&t.pF())t.eC()
$.fCv=!0
s.a=null
w=3
return B.b(B.hM(A.bg,!0,"Animation preview",d,new C.f4d(s,e,g,f),null,A.eC,!0,x.H),$async$bw4)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fCv=!1
case 1:return B.h(u,v)}})
return B.i($async$bw4,v)},
ftG(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$ftG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bM,x.w).w.a.a*0.88,280,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fFp(f)+" Slide transition preview"
s=s?A9.Dj:A.u2
w=3
return B.b(C.bw4(d,s,new B.a8(t,t*0.56,B.bw(B.m(14),new C.aFg(f,null),A.ap),null),r),$async$ftG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ftG,v)},
fZX(d,e,f){var w,v,u=null,t=A.cm.aq(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d8(f,t)
case 2:case 17:return B.dN(B.d8(f,t),new B.v((1-t)*48,0))
case 3:return B.dN(B.d8(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dN(B.d8(f,t),new B.v(0,(1-t)*36))
case 5:return B.dN(B.d8(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e4(A.C,B.d8(f,t),0.5+t*0.5,u,u)
case 7:return B.e4(A.C,B.d8(f,t),1.4-t*0.4,u,u)
case 8:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fp(A.C,B.d8(f,t),u,w,!0)
case 9:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jv((1-t)*1.2)
return B.fp(A.C,B.d8(f,t),u,w,!0)
case 10:case 19:w=B.df()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.ma((1-t)*0.8)
v=0.6+t*0.4
w.jd(v,v,v,1)
return B.fp(A.C,B.d8(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dN(B.d8(f,t),new B.v((1-t)*24,0))}},
byM(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$byM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bM,x.w).w.a.a*0.88,300,440)
s=f===D.ca
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fFp(f)+" Element animation preview"
s=s?A9.Dj:A.u2
w=3
return B.b(C.bw4(d,s,new B.a8(t,t*0.62,B.bw(B.m(14),new C.awc(f,null),A.ap),null),r),$async$byM)
case 3:case 1:return B.h(u,v)}})
return B.i($async$byM,v)},
hIr(d){var w,v,u,t,s=$.adk.W(0,d)
if(s!=null){$.adk.m(0,d,s)
return s}w=A.cw.aF(A.a.aV(d,A.a.cP(d,",")+1))
$.adk.m(0,d,w)
v=$.fDg=$.fDg+w.length
u=B.a2($.adk).k("ct<1>")
for(;;){if(!(v>41943040&&$.adk.a>1))break
t=new B.ct($.adk,u).gaf(0)
if(!t.C())B.b7(B.fw())
v-=$.adk.W(0,t.gT(0)).length
$.fDg=v}return w},
hI8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kq(0,d),j=B.z(k,B.a2(k).k("E.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.J)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.eE(n,l,l,A.cT,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QD(s,A.u))
v.push(new B.eE(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QD(t,A.u))
v.push(new B.eE(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QD(u,A.cn))
v.push(new B.eE(n,l,l,A.cT,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aV(d,r)
v.push(B.dw(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a03(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
m.N(new B.ks(e))
return m
case"rounded":m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
w=e.gef()*0.18
m.N(new B.j1(B.bZ(e,new B.b2(w,w))))
return m
case"triangle":m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
w=e.d
m.N(new B.aw(e.c,w))
m.N(new B.aw(e.a,w))
m.N(new B.bX())
return m
case"hexagon":w=$.a1()
m=B.a([],m)
v=new B.b_(w.r,A.au,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.bj(p,o)
m.push(p)
o=v.f
if(o!=null)p.bI(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aw(p,o)
m.push(p)
o=v.f
if(o!=null)p.bI(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.N(new B.bX())
return v
case"diamond":m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
m.N(new B.aw(e.c,e.gbN().b))
m.N(new B.aw(e.gbN().a,e.d))
m.N(new B.aw(e.a,e.gbN().b))
m.N(new B.bX())
return m
case"arch":m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
w=e.a
u=e.d
m.N(new B.bj(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.N(new B.aw(w,p))
m.b3E(new B.v(t,p),new B.b2(s,s))
m.N(new B.aw(t,u))
m.N(new B.bX())
return m
default:m=new B.b_($.a1().r,A.au,n,n,B.a([],m))
m.N(new B.nz(e))
return m}},
ffC(d,e,f){return B.co(new C.ffD(D.eaH.q(0,d),d,f,e))},
aYa:function aYa(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c7v:function c7v(d){this.a=d},
c7u:function c7u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7t:function c7t(){},
aY7:function aY7(d,e){this.b=d
this.a=e},
fhY:function fhY(d){this.a=d},
fhX:function fhX(d,e){this.a=d
this.b=e},
f4d:function f4d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4b:function f4b(d){this.a=d},
f4c:function f4c(d,e){this.a=d
this.b=e},
aFg:function aFg(d,e){this.c=d
this.a=e},
bpR:function bpR(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eOd:function eOd(d,e,f){this.a=d
this.b=e
this.c=f},
aFT:function aFT(d,e){this.b=d
this.a=e},
ST:function ST(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bf6:function bf6(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dIh:function dIh(d){this.a=d},
dIg:function dIg(d){this.a=d},
dIf:function dIf(d){this.a=d},
GV:function GV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7n:function c7n(d){this.a=d},
c7m:function c7m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awc:function awc(d,e){this.c=d
this.a=e},
b9H:function b9H(){this.d=0
this.c=this.a=null},
cXK:function cXK(d){this.a=d},
cXJ:function cXJ(d){this.a=d},
a5k:function a5k(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfL:function bfL(d,e){var _=this
_.d=null
_.bq$=d
_.a5$=e
_.c=_.a=null},
e02:function e02(d,e,f){this.a=d
this.b=e
this.c=f},
aW6:function aW6(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
baP:function baP(d,e,f){this.b=d
this.c=e
this.a=f},
bly:function bly(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eDE:function eDE(){},
ffD:function ffD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bmv:function bmv(d,e,f){this.b=d
this.c=e
this.a=f},
aHQ:function aHQ(){},
aIl:function aIl(){},
aJE:function aJE(){},
fiX(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fiX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wa.c2().Kj(D.cTR,A.rE,!0),$async$fiX)
case 3:r=e
if(r==null||J.ch(r.a)){u=null
w=1
break}t=J.fl(r.a)
s=t.c
if(s==null)throw B.O("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.O("That file is too big. Use a file under 8 MB.")
u=C.hI2(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fiX,v)},
hI2(d,e){var w,v=d.toLowerCase()
if(A.a.c5(v,".pdf"))return new C.a5C(d,new B.abn(A.cM.gcs().aF(e),"application/pdf"),"")
if(A.a.c5(v,".docx")){w=C.hAi(e)
if(A.a.i(w).length===0)throw B.O("No readable words were found in that Word file.")
return new C.a5C(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c_.J9(0,e,!0)
if(A.a.i(w).length===0)throw B.O("That file is empty.")
return new C.a5C(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hAi(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cpG().cyN(B.qy(d,A.hz,o,o),o,o,!1).cAs(0,"word/document.xml")
if(n==null)return""
w=n.cI9()
v=A.c_.J9(0,w==null?$.h1M():w,!0).split("</w:p>")
u=new B.f3("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kq(0,r)
p=A.a.i(B.cy(q,new C.f6Y(),B.a2(q).k("E.E"),t).fJ(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5C:function a5C(d,e,f){this.a=d
this.b=e
this.c=f},
f6Y:function f6Y(){},
hiD(d,e,f,g,h,i,j,k,l){return new C.LV(l,e,d,g,f,i,h,j,k,null)},
LV:function LV(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAU:function aAU(d,e,f,g,h,i,j,k,l){var _=this
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
efR:function efR(d){this.a=d},
efP:function efP(){},
efQ:function efQ(d){this.a=d},
ece:function ece(){},
ecf:function ecf(){},
ecg:function ecg(d,e){this.a=d
this.b=e},
edP:function edP(d){this.a=d},
edD:function edD(){},
edE:function edE(){},
ebC:function ebC(){},
eeX:function eeX(d){this.a=d},
efN:function efN(d,e){this.a=d
this.b=e},
edN:function edN(d,e){this.a=d
this.b=e},
efA:function efA(d){this.a=d},
efB:function efB(){},
efC:function efC(){},
efD:function efD(d){this.a=d},
efE:function efE(){},
eb0:function eb0(d){this.a=d},
efO:function efO(){},
ecW:function ecW(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d){this.a=d},
eb_:function eb_(d){this.a=d},
edi:function edi(d){this.a=d},
edj:function edj(d,e,f){this.a=d
this.b=e
this.c=f},
edk:function edk(d){this.a=d},
ecV:function ecV(){},
ecU:function ecU(d){this.a=d},
ecS:function ecS(){},
ecR:function ecR(d){this.a=d},
ecT:function ecT(){},
eca:function eca(d){this.a=d},
ecb:function ecb(d){this.a=d},
ed1:function ed1(d){this.a=d},
ecX:function ecX(d){this.a=d},
ecY:function ecY(d){this.a=d},
ecZ:function ecZ(d){this.a=d},
ed_:function ed_(d){this.a=d},
ed0:function ed0(d){this.a=d},
ed2:function ed2(d,e){this.a=d
this.b=e},
eb2:function eb2(){},
eb3:function eb3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edd:function edd(){},
ede:function ede(d,e){this.a=d
this.b=e},
edb:function edb(d,e,f){this.a=d
this.b=e
this.c=f},
edc:function edc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed5:function ed5(d,e,f){this.a=d
this.b=e
this.c=f},
ed6:function ed6(d,e,f){this.a=d
this.b=e
this.c=f},
ed7:function ed7(d){this.a=d},
ed8:function ed8(d,e){this.a=d
this.b=e},
ed9:function ed9(d,e){this.a=d
this.b=e},
eda:function eda(d,e){this.a=d
this.b=e},
ed4:function ed4(d,e){this.a=d
this.b=e},
edg:function edg(d){this.a=d},
edh:function edh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edf:function edf(d){this.a=d},
edy:function edy(){},
edz:function edz(){},
edA:function edA(){},
edB:function edB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edv:function edv(d){this.a=d},
edx:function edx(){},
edw:function edw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
edt:function edt(d,e,f){this.a=d
this.b=e
this.c=f},
edu:function edu(d,e){this.a=d
this.b=e},
edC:function edC(){},
ed3:function ed3(d,e){this.a=d
this.b=e},
ebj:function ebj(){},
ebk:function ebk(d,e,f){this.a=d
this.b=e
this.c=f},
ebl:function ebl(d){this.a=d},
ebm:function ebm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ebi:function ebi(d){this.a=d},
edI:function edI(d){this.a=d},
edH:function edH(d,e){this.a=d
this.b=e},
edG:function edG(d,e){this.a=d
this.b=e},
edF:function edF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edJ:function edJ(d,e){this.a=d
this.b=e},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
ebh:function ebh(d,e){this.a=d
this.b=e},
ebf:function ebf(d){this.a=d},
edR:function edR(d,e,f){this.a=d
this.b=e
this.c=f},
ebb:function ebb(d,e){this.a=d
this.b=e},
eba:function eba(d){this.a=d},
edQ:function edQ(d,e,f){this.a=d
this.b=e
this.c=f},
eb1:function eb1(d){this.a=d},
ebD:function ebD(){},
efy:function efy(d,e){this.a=d
this.b=e},
efz:function efz(d,e,f){this.a=d
this.b=e
this.c=f},
eeY:function eeY(d,e,f){this.a=d
this.b=e
this.c=f},
e9Z:function e9Z(d){this.a=d},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9M:function e9M(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9K:function e9K(d,e){this.a=d
this.b=e},
ebd:function ebd(d){this.a=d},
ebe:function ebe(d,e){this.a=d
this.b=e},
ebc:function ebc(d){this.a=d},
eaq:function eaq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ear:function ear(d,e){this.a=d
this.b=e},
eav:function eav(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eat:function eat(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eau:function eau(d){this.a=d},
eas:function eas(){},
eap:function eap(d,e,f){this.a=d
this.b=e
this.c=f},
eds:function eds(d,e){this.a=d
this.b=e},
efH:function efH(d){this.a=d},
efI:function efI(d,e){this.a=d
this.b=e},
efJ:function efJ(d){this.a=d},
efK:function efK(d,e,f){this.a=d
this.b=e
this.c=f},
efG:function efG(d){this.a=d},
efd:function efd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efc:function efc(d,e,f){this.a=d
this.b=e
this.c=f},
efb:function efb(){},
efa:function efa(d,e,f){this.a=d
this.b=e
this.c=f},
ef9:function ef9(d,e){this.a=d
this.b=e},
ef6:function ef6(d,e,f){this.a=d
this.b=e
this.c=f},
ef4:function ef4(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef8:function ef8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ef7:function ef7(d){this.a=d},
ec6:function ec6(d,e){this.a=d
this.b=e},
ec5:function ec5(d,e){this.a=d
this.b=e},
eeZ:function eeZ(){},
efx:function efx(d,e){this.a=d
this.b=e},
efv:function efv(d){this.a=d},
efw:function efw(d){this.a=d},
e9R:function e9R(d,e){this.a=d
this.b=e},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d){this.a=d},
e9S:function e9S(d,e){this.a=d
this.b=e},
e9T:function e9T(d,e,f){this.a=d
this.b=e
this.c=f},
e9X:function e9X(d,e){this.a=d
this.b=e},
e9O:function e9O(d,e,f){this.a=d
this.b=e
this.c=f},
e9N:function e9N(d){this.a=d},
edO:function edO(d,e,f){this.a=d
this.b=e
this.c=f},
efF:function efF(d,e,f){this.a=d
this.b=e
this.c=f},
ec9:function ec9(d,e,f){this.a=d
this.b=e
this.c=f},
ec8:function ec8(){},
eaz:function eaz(d,e,f){this.a=d
this.b=e
this.c=f},
eaA:function eaA(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
ebB:function ebB(d,e){this.a=d
this.b=e},
e9U:function e9U(d,e){this.a=d
this.b=e},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d,e){this.a=d
this.b=e},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea1:function ea1(d){this.a=d},
eaf:function eaf(d,e){this.a=d
this.b=e},
ea0:function ea0(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
eak:function eak(d){this.a=d},
eal:function eal(d){this.a=d},
eam:function eam(d){this.a=d},
ean:function ean(){},
eao:function eao(){},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d){this.a=d},
ea7:function ea7(d){this.a=d},
ea8:function ea8(d){this.a=d},
ea9:function ea9(d){this.a=d},
eaa:function eaa(d){this.a=d},
eab:function eab(d){this.a=d},
eac:function eac(d){this.a=d},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
eag:function eag(d){this.a=d},
eah:function eah(d,e){this.a=d
this.b=e},
ebA:function ebA(d,e,f){this.a=d
this.b=e
this.c=f},
ebz:function ebz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eby:function eby(d,e,f){this.a=d
this.b=e
this.c=f},
ebx:function ebx(d,e){this.a=d
this.b=e},
e9V:function e9V(d,e){this.a=d
this.b=e},
eaD:function eaD(d){this.a=d},
eaC:function eaC(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
eaE:function eaE(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaG:function eaG(d,e){this.a=d
this.b=e},
ebg:function ebg(d){this.a=d},
edr:function edr(d,e){this.a=d
this.b=e},
edq:function edq(d,e){this.a=d
this.b=e},
edp:function edp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edn:function edn(d){this.a=d},
edo:function edo(d,e){this.a=d
this.b=e},
edl:function edl(){},
edm:function edm(){},
ef_:function ef_(){},
ef0:function ef0(d,e){this.a=d
this.b=e},
ef1:function ef1(){},
ef2:function ef2(d){this.a=d},
ef3:function ef3(d,e){this.a=d
this.b=e},
ea_:function ea_(d,e){this.a=d
this.b=e},
eb4:function eb4(){},
eb5:function eb5(){},
eb6:function eb6(){},
eb9:function eb9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eb8:function eb8(d,e){this.a=d
this.b=e},
eb7:function eb7(d,e,f){this.a=d
this.b=e
this.c=f},
ecA:function ecA(d){this.a=d},
ecz:function ecz(){},
ecB:function ecB(d,e){this.a=d
this.b=e},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecy:function ecy(d){this.a=d},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecx:function ecx(d){this.a=d},
ecE:function ecE(d,e){this.a=d
this.b=e},
ecw:function ecw(d){this.a=d},
ecF:function ecF(d,e){this.a=d
this.b=e},
ecv:function ecv(d){this.a=d},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecu:function ecu(d,e){this.a=d
this.b=e},
ecH:function ecH(d,e){this.a=d
this.b=e},
ect:function ect(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
ecs:function ecs(d){this.a=d},
ecl:function ecl(d,e){this.a=d
this.b=e},
ecm:function ecm(d){this.a=d},
ecn:function ecn(d){this.a=d},
eck:function eck(d){this.a=d},
eco:function eco(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ecp:function ecp(d,e){this.a=d
this.b=e},
eci:function eci(d){this.a=d},
ecq:function ecq(d,e){this.a=d
this.b=e},
ech:function ech(d){this.a=d},
ecr:function ecr(d){this.a=d},
ebt:function ebt(d){this.a=d},
ebu:function ebu(d){this.a=d},
ebw:function ebw(d){this.a=d},
ebo:function ebo(d){this.a=d},
ebn:function ebn(d,e){this.a=d
this.b=e},
ebp:function ebp(d,e){this.a=d
this.b=e},
ebq:function ebq(d){this.a=d},
ebr:function ebr(d){this.a=d},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebv:function ebv(d){this.a=d},
efL:function efL(d){this.a=d},
efM:function efM(d){this.a=d},
ecL:function ecL(d,e){this.a=d
this.b=e},
ecK:function ecK(d,e){this.a=d
this.b=e},
ecJ:function ecJ(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecN:function ecN(d){this.a=d},
ee9:function ee9(d,e){this.a=d
this.b=e},
eea:function eea(d){this.a=d},
eeb:function eeb(d){this.a=d},
eem:function eem(d){this.a=d},
eex:function eex(d){this.a=d},
eeI:function eeI(d){this.a=d},
eeP:function eeP(d){this.a=d},
eeQ:function eeQ(d){this.a=d},
eeR:function eeR(d){this.a=d},
eeS:function eeS(d){this.a=d},
eeT:function eeT(d,e){this.a=d
this.b=e},
eec:function eec(d){this.a=d},
eed:function eed(d){this.a=d},
eee:function eee(d){this.a=d},
eef:function eef(d){this.a=d},
eeg:function eeg(d){this.a=d},
eeh:function eeh(d){this.a=d},
eei:function eei(d){this.a=d},
eej:function eej(d){this.a=d},
eek:function eek(d){this.a=d},
eel:function eel(d){this.a=d},
een:function een(d){this.a=d},
eeo:function eeo(d){this.a=d},
eep:function eep(d){this.a=d},
eeq:function eeq(d){this.a=d},
eer:function eer(d){this.a=d},
ees:function ees(d){this.a=d},
eet:function eet(d){this.a=d},
eeu:function eeu(d){this.a=d},
eev:function eev(d){this.a=d},
ee_:function ee_(d){this.a=d},
eew:function eew(d){this.a=d},
ee7:function ee7(d){this.a=d},
eey:function eey(d){this.a=d},
ee6:function ee6(d,e){this.a=d
this.b=e},
eez:function eez(d,e){this.a=d
this.b=e},
eeA:function eeA(d,e){this.a=d
this.b=e},
ee5:function ee5(d,e,f){this.a=d
this.b=e
this.c=f},
edW:function edW(d,e){this.a=d
this.b=e},
ee8:function ee8(d){this.a=d},
eeU:function eeU(d,e){this.a=d
this.b=e},
eeW:function eeW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eeV:function eeV(d,e){this.a=d
this.b=e},
eeB:function eeB(d,e,f){this.a=d
this.b=e
this.c=f},
ee4:function ee4(d,e,f){this.a=d
this.b=e
this.c=f},
edV:function edV(d,e,f){this.a=d
this.b=e
this.c=f},
edT:function edT(d,e){this.a=d
this.b=e},
eeC:function eeC(d,e){this.a=d
this.b=e},
ee3:function ee3(d,e){this.a=d
this.b=e},
edU:function edU(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
eeD:function eeD(d){this.a=d},
ee2:function ee2(d){this.a=d},
eeE:function eeE(d){this.a=d},
eeF:function eeF(d){this.a=d},
eeG:function eeG(d){this.a=d},
eeH:function eeH(d){this.a=d},
ee1:function ee1(d){this.a=d},
eeJ:function eeJ(d){this.a=d},
eeK:function eeK(d){this.a=d},
eeL:function eeL(d,e){this.a=d
this.b=e},
ee0:function ee0(d){this.a=d},
eeM:function eeM(d,e){this.a=d
this.b=e},
edZ:function edZ(d){this.a=d},
eeN:function eeN(d,e){this.a=d
this.b=e},
edY:function edY(d){this.a=d},
eeO:function eeO(d,e){this.a=d
this.b=e},
edX:function edX(d){this.a=d},
eay:function eay(d,e,f){this.a=d
this.b=e
this.c=f},
eax:function eax(d,e){this.a=d
this.b=e},
efg:function efg(d,e){this.a=d
this.b=e},
eff:function eff(d,e){this.a=d
this.b=e},
efh:function efh(d,e){this.a=d
this.b=e},
efe:function efe(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e){this.a=d
this.b=e},
ebF:function ebF(d){this.a=d},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebE:function ebE(d){this.a=d},
ecd:function ecd(){},
ecc:function ecc(){},
eft:function eft(d){this.a=d},
efs:function efs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efr:function efr(d,e){this.a=d
this.b=e},
efm:function efm(d,e){this.a=d
this.b=e},
efq:function efq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efn:function efn(d,e){this.a=d
this.b=e},
efi:function efi(d){this.a=d},
efj:function efj(d){this.a=d},
efk:function efk(d){this.a=d},
efl:function efl(d){this.a=d},
efo:function efo(d,e){this.a=d
this.b=e},
efp:function efp(d,e){this.a=d
this.b=e},
efu:function efu(d){this.a=d},
eaY:function eaY(d){this.a=d},
eaX:function eaX(d,e,f){this.a=d
this.b=e
this.c=f},
eaW:function eaW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaL:function eaL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eaM:function eaM(d,e){this.a=d
this.b=e},
eaN:function eaN(d,e){this.a=d
this.b=e},
eaO:function eaO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaK:function eaK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaP:function eaP(d,e){this.a=d
this.b=e},
eaR:function eaR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eaS:function eaS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaJ:function eaJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eaT:function eaT(d,e){this.a=d
this.b=e},
eaI:function eaI(d,e){this.a=d
this.b=e},
eaU:function eaU(d,e){this.a=d
this.b=e},
eaH:function eaH(d){this.a=d},
eaV:function eaV(d,e){this.a=d
this.b=e},
ecP:function ecP(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecQ:function ecQ(d,e){this.a=d
this.b=e},
ebU:function ebU(d,e){this.a=d
this.b=e},
ebV:function ebV(d,e){this.a=d
this.b=e},
ebT:function ebT(d,e){this.a=d
this.b=e},
ebW:function ebW(d,e){this.a=d
this.b=e},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebX:function ebX(d,e){this.a=d
this.b=e},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebY:function ebY(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d,e){this.a=d
this.b=e},
ebZ:function ebZ(d,e){this.a=d
this.b=e},
ebP:function ebP(d,e){this.a=d
this.b=e},
ec_:function ec_(d,e,f){this.a=d
this.b=e
this.c=f},
ebO:function ebO(d,e){this.a=d
this.b=e},
ec0:function ec0(d,e,f){this.a=d
this.b=e
this.c=f},
ebN:function ebN(d,e){this.a=d
this.b=e},
ec1:function ec1(d,e){this.a=d
this.b=e},
ebM:function ebM(d,e,f){this.a=d
this.b=e
this.c=f},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ec2:function ec2(d,e){this.a=d
this.b=e},
ebL:function ebL(d,e){this.a=d
this.b=e},
ec3:function ec3(d,e){this.a=d
this.b=e},
ebK:function ebK(d,e,f){this.a=d
this.b=e
this.c=f},
ebI:function ebI(d,e){this.a=d
this.b=e},
ec4:function ec4(d,e){this.a=d
this.b=e},
ec7:function ec7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9H:function e9H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
edM:function edM(d,e){this.a=d
this.b=e},
edK:function edK(d){this.a=d},
edL:function edL(d,e){this.a=d
this.b=e},
acx:function acx(d,e,f){this.a=d
this.b=e
this.c=f},
avA:function avA(d,e){this.c=d
this.a=e},
b8u:function b8u(d,e){var _=this
_.e=_.d=$
_.cN$=d
_.aX$=e
_.c=_.a=null},
cUf:function cUf(d){this.a=d},
cUe:function cUe(d){this.a=d},
b8I:function b8I(d,e){this.c=d
this.a=e},
cUB:function cUB(d){this.a=d},
cUC:function cUC(d){this.a=d},
HW:function HW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b8t:function b8t(){this.d=!1
this.c=this.a=null},
cUc:function cUc(d){this.a=d},
cU8:function cU8(d){this.a=d},
cUd:function cUd(d){this.a=d},
cU7:function cU7(d){this.a=d},
cUb:function cUb(d){this.a=d},
cU9:function cU9(d){this.a=d},
cUa:function cUa(d,e){this.a=d
this.b=e},
Nz:function Nz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yf:function Yf(d,e,f){this.c=d
this.d=e
this.a=f},
aAX:function aAX(d,e,f){var _=this
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
egr:function egr(){},
egh:function egh(d){this.a=d},
egq:function egq(d){this.a=d},
egi:function egi(d){this.a=d},
egj:function egj(d){this.a=d},
egd:function egd(d){this.a=d},
ege:function ege(d,e){this.a=d
this.b=e},
egf:function egf(d){this.a=d},
egg:function egg(d,e,f){this.a=d
this.b=e
this.c=f},
ego:function ego(){},
egp:function egp(d){this.a=d},
egk:function egk(d){this.a=d},
egl:function egl(d){this.a=d},
egm:function egm(d){this.a=d},
egn:function egn(d){this.a=d},
egs:function egs(d,e,f){this.a=d
this.b=e
this.c=f},
egu:function egu(d,e){this.a=d
this.b=e},
egt:function egt(d){this.a=d},
I2:function I2(d,e){this.c=d
this.a=e},
bmZ:function bmZ(d,e){this.b=d
this.a=e},
bdj:function bdj(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdi:function bdi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGy:function aGy(){},
aIz:function aIz(){},
bsA:function bsA(){},
aIA:function aIA(){},
fkR(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fkR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wa.c2().Kj(B.a(["pdf"],x.s),A.rE,!0),$async$fkR)
case 3:q=e
if(q==null||J.ch(q.a)){u=null
w=1
break}t=J.fl(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bkk(s,"data:application/pdf;base64,"+A.cM.gcs().aF(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fkR,v)},
hID(d){var w,v,u,t,s,r
try{w=B.jc(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cw(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).kq(0,w).gH(0)
if(t>0){s=J.aN3(t,1,200)
return s}}catch(r){}return 1},
fkI(d){return C.hIC(d)},
hIC(d){var w=0,v=B.j(x.T),u
var $async$fkI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fkI,v)},
by_(d,e,f,g){return C.hIM(d,e,f,g)},
hIM(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$by_=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e2(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h0d(b9,new B.ap(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.ls(a9),b0)
b0=n
a9=k.b
n=Math.min(B.ls(b0),a9)
a9=m
b0=k.a
m=Math.max(B.ls(a9),b0)
b0=l
a9=k.b
l=Math.max(B.ls(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a1()
g=new B.ts()
f=B.JU(g,null)
a7=B.T()
a7.r=A.pU.gt(0)
f.bp(new B.af(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.T()
b1.r=b8.gt(b8)
b1.c=p*e
b1.d=A.bZ
b1.e=A.fj
b1.b=A.aj
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.J)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.M()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.qP()
w=7
return B.b(a3.B5(800,h),$async$by_)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hv(A.fZ),$async$by_)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.fa(A.dH.gaL(a5))
a7=A.cM.gcs().aF(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a5(b5)
$.ak.$1("[slides signature] "+B.t(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$by_,v)},
aMh(d,e,f){return C.hIA(d,e,f)},
hIA(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.aeN(d,e,f,new C.fkG(r,q),q,"Sign document"),$async$aMh)
case 3:if(!new B.e2(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.by_(q,t,r.b,r.c),$async$aMh)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYe(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMh,v)},
hIK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fUG(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fUG(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aV(A.a.aU(A.o.fC(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aV(A.a.aU(A.o.fC(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l_&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fUk(q.ay)+";border:2px solid "+C.fUk(q.ch)+'"></div>'
break
case 5:l=C.fEi(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gag8()
if(p==null)p=A.art
n=B.S(p)
k=n.k("pr<1>")
j=new B.pr(p,0,8,k)
j.FK(p,0,8,n.c)
j=new B.bR(j,j.gH(0),k.k("bR<ai.E>"))
k=k.k("ai.E")
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
fUk(d){var w=A.o.ar(d,24)
return"rgba("+(A.o.ar(d,16)&255)+","+(A.o.ar(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
fUG(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bxY(d,e){var w=0,v=B.j(x.H)
var $async$bxY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fkP(e,C.hIK(e),d),d,null,!0,!0,x.H),$async$bxY)
case 2:return B.h(null,v)}})
return B.i($async$bxY,v)},
bxZ(){var w=0,v=B.j(x.T),u,t,s
var $async$bxZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.EY(92,2400),$async$bxZ)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fkI(s),$async$bxZ)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxZ,v)},
aMi(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aMi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fFu(d),$async$aMi)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=W.fmW(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMi,v)},
fOJ(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYe:function aYe(d,e,f){this.a=d
this.b=e
this.c=f},
fkG:function fkG(d,e){this.a=d
this.b=e},
fkP:function fkP(d,e,f){this.a=d
this.b=e
this.c=f},
fkM:function fkM(d){this.a=d},
fkN:function fkN(d,e,f){this.a=d
this.b=e
this.c=f},
fkO:function fkO(d,e,f){this.a=d
this.b=e
this.c=f},
hIB(d){return C.kd(d.w)},
hII(d){var w,v,u,t
if(d.length===0||!A.d.e7(d,C.hKn()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xw(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.h5M()
if(w.b.test(u))return u
return null},
h0f(d,e,f){var w,v,u=C.hej(d),t=$.oV()
for(w=0;w<80;++w){v=u+A.a.aU(A.o.u(t.aE(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
hIO(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.hX(w,d.b);v.C();){u=w.gT(w).y
t=C.xw(u==null?"":u)
if(t!=null)s.G(0,t)}return s},
fkE(d,e){var w,v=d.y,u=C.xw(v==null?"":v)
if(u!=null)return d.y=u
w=C.hIO(new B.a3(e,new C.fkF(d),B.S(e).k("a3<1>")))
v=d.x
return d.y=C.h0f(v==null?"":v,null,w)},
hIN(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kd(w.w))return null
v=w.y
return C.xw(v==null?"":v)},
hiF(){var w,v=$.oV(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aE(32)]
return"SL"+A.d.fJ(u)},
TR(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$TR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bW(),$async$TR)
case 3:if(!e){u=B.Q(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eU("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bE),$async$TR)
case 8:r=e
if(r==null){u=B.Q(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.Y(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.a5(m)
$.ak.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.Q(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TR,v)},
TS(d){return C.hiG(d)},
hiG(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$TS=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bW(),$async$TS)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hr("ngmy_slides_transfer_qr_stashes_v1",B.D(["stashes",d,"savedAt",new B.N(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,A.cy,null),$async$TS)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a5(p)
$.ak.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$TS,v)},
a5E(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5E=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bW(),$async$a5E)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.TR(),$async$a5E)
case 4:s=a6
r=C.xw(a2==null?"":a2)
if(r==null)r=a3!=null?C.h0f(a3,null,A.a2H):null
q=x.N
p=B.aY(q)
for(o=J.dd(s),n=J.aW(o.ghP(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xw(J.k(k==null?"":k))
if(j!=null)p.G(0,j)}n=o.gdH(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Y(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dA.aF(t)
g.m(0,"payload",A.cM.gcs().aF(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.PU.q(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xw(J.k(q==null?"":q))
if(f==null)f=C.fOO(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.TS(s),$async$a5E)
case 7:u=new B.aCk(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hiF()
n=r==null
d=n?C.fOO(p):r
q=B.Q(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dA.aF(t)
q.m(0,"payload",A.cM.gcs().aF(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.N(Date.now(),0,!1).a4().aa())
if(D.PU.q(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.TS(s),$async$a5E)
case 8:u=new B.aCk(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5E,v)},
fOO(d){var w,v,u=$.oV()
for(w=0;w<200;++w){v="SL"+A.a.aU(A.o.u(u.aE(1000)),3,"0")
if(d.G(0,v))return v}return"SL"+A.a.aU(A.o.u(Date.now()%1000),3,"0")},
ao6(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ao6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bW(),$async$ao6)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.TR(),$async$ao6)
case 6:t=f
s=J.a4(t)
r=s.gH(t)
s.bk(t,new C.c7V(q))
w=s.gH(t)!==r?7:8
break
case 7:w=9
return B.b(C.TS(t),$async$ao6)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$ao6,v)},
ao5(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$ao5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xw(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bW(),$async$ao5)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.TR(),$async$ao5)
case 6:t=o.ji(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xw(J.k(q==null?"":q))===p){u=C.a5D(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ao5,v)},
a5D(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5D=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bW(),$async$a5D)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.TR(),$async$a5D)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
k=B.aQ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.L(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=A.c_.c4(0,A.cw.aF(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.PU.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aC(0,s,null)
if(m.b(r)){q=B.Y(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.ak(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dP(B.Y(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.N(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=7
return B.b(C.TS(p),$async$a5D)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5D,v)},
hIH(d,e,f){var w,v=B.Q(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.S(d).k("I<1,a0<n,@>>")
w=B.z(new B.I(d,new C.fkL(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
fkT(d,e,f,g){var w
if(e!=null){w=B.Q(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.N(Date.now(),0,!1).a4().aa())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ad())
return A.Q.ak(w,null)}return A.Q.ak(C.hIH(d==null?B.a([],x.D):d,f,g),null)},
fkS(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fkS=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5E(h,d,e,f,g),$async$fkS)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xw(e==null?"":e)
u=new B.aC7(s,t)
w=1
break}t=A.dA.aF(h)
t=A.jP.gcs().aF(t)
u=new B.aC7(C.xw(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fkS,v)},
fFw(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.aa(q)===0)return!1
if(J.cS(q,"NGMYSLIDESYNC2|"))return!0
if(J.cS(q,"NGMYSLIDECODE|"))return!0
if(J.cS(q,"NGMY_SL:"))return!0
if(J.eR(q,s)||J.eR(q,r))return!0
if(J.cS(q,"{"))try{w=A.Q.aC(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hIL(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fFw(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aV(v,u))
if(C.fFw(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aV(v,s))
if(C.fFw(t))return t}}return null},
fkH(d){var w,v,u,t=A.a.i(d)
if(J.aa(t)===0||J.cS(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cS(t,"NGMY_SL:"))w=v.a(A.Q.aC(0,A.c_.c4(0,A.cw.aF(J.ma(t,8))),null))
else w=v.a(A.Q.aC(0,t,null))
v=C.hsc(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aey(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aey=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.ao5(t[1]),$async$aey)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fkH(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xw(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.ao5(r),$async$aey)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fkH(s)
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
return B.b(C.a5D(t[1]),$async$aey)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fkH(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fkH(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
hsc(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.PU.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fFt(C.TN(B.Y(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d2(u,x.f)
t=B.cy(t,new C.eWh(w),t.$ti.k("E.E"),x.I)
t=B.z(t,B.a2(t).k("E.E"))
return t}return B.a([],x.D)},
fFt(d,e){var w,v,u,t,s,r,q,p,o=d.ad()
o.m(0,"id",C.cx())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iM
$.iM=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.TN(B.Y(o,x.N,x.z))
if(e&&C.kd(p.w))p.Q=new B.N(Date.now(),0,!1).a4().bL(144e8).aa()
return p},
bxK(){var w=0,v=B.j(x.aT),u,t,s
var $async$bxK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.EX(),$async$bxK)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aey(s),$async$bxK)
case 4:t=e
u=J.ch(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bxK,v)},
fsV(d){var w=0,v=B.j(x.T),u,t
var $async$fsV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hM(D.Ti,!0,"Dismiss",d,new C.fsW(),new C.fsX(),A.Dh,!0,x.N),$async$fsV)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.E(x.q).f.P(D.ega)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fsV,v)},
hMi(d,e,f,g,h){return B.a6(d,!1).cz(B.eN(new C.fsY(h,e,g,f),!0,null,x.H))},
fkF:function fkF(d){this.a=d},
c7V:function c7V(d){this.a=d},
fkL:function fkL(){},
eWh:function eWh(d){this.a=d},
fsW:function fsW(){},
fsX:function fsX(){},
fsY:function fsY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
TP:function TP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAV:function aAV(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
efY:function efY(){},
efU:function efU(d,e){this.a=d
this.b=e},
efX:function efX(d,e){this.a=d
this.b=e},
efV:function efV(d){this.a=d},
efW:function efW(d){this.a=d},
efZ:function efZ(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg3:function eg3(d){this.a=d},
eg1:function eg1(d){this.a=d},
eg4:function eg4(d){this.a=d},
eg0:function eg0(d){this.a=d},
eg5:function eg5(d,e){this.a=d
this.b=e},
efT:function efT(d,e){this.a=d
this.b=e},
efS:function efS(d,e){this.a=d
this.b=e},
TQ:function TQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bg5:function bg5(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eg6:function eg6(d,e){this.a=d
this.b=e},
eg7:function eg7(d){this.a=d},
eg8:function eg8(){},
eg9:function eg9(d){this.a=d},
ega:function ega(d,e){this.a=d
this.b=e},
aAS:function aAS(d){this.a=d},
aAT:function aAT(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
e9B:function e9B(d){this.a=d},
e9A:function e9A(){},
e9C:function e9C(d){this.a=d},
e9x:function e9x(d){this.a=d},
e9w:function e9w(){},
e9y:function e9y(d){this.a=d},
e9z:function e9z(d){this.a=d},
bqa:function bqa(){},
ao7:function ao7(d){this.a=d},
aAW:function aAW(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
egc:function egc(d){this.a=d},
egb:function egb(d){this.a=d},
hx5(){var w,v,u,t
for(v=0;v<4;++v){w=D.cK0[v]
try{if(A6.bQT(w)){u=w
return u}}catch(t){}}return null},
P8(d,e){return C.hFx(d,e)},
hFx(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$P8=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hx5()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nw?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.J(b4,2)
c2.b=b5-A.o.J(b5,2)
b6=B.pW(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cn(null,x.eF)
b8=A.d.gI(c3)
b9=$.as()
o=new B.eI(b8,b9)
n=new B.eI("Getting ready\u2026",b9)
m=new B.eI(0,b9)
l=B.nP(new C.ff7(c2,b7,o),!1,!1)
b6.lk(0,l)
b9=x.H
B.cb(null,A.dc,!1,null,new C.ff8(n,m),c6,null,!0,!0,b9)
k=new C.ffc(b7)
j=new C.ffd()
i=null
t=4
b3=c2.a
h=Ac.aOx(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fvh(h,30)
e=B.a([],x.aK)
b3=x.z
i=A6.aTg(f,B.D(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FA.xh(i,"dataavailable",new C.ff9(e))
d=new B.bL(new B.bc($.bs,x.dT),x.b2)
A.FA.xh(i,"stop",new C.ffa(d))
J.af4(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$P8)
case 8:w=7
return B.b(c5.$1(d0),$async$P8)
case 7:a0=d0
J.fvk(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.af4(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.af4(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$P8)
case 15:w=14
return B.b(c5.$1(d0),$async$P8)
case 14:a0=d0
case 13:J.fvk(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.af4(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.N(Date.now(),0,!1).bL(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbm())b3=b3===b8.gbm()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fvk(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fg,null,b9),$async$P8)
case 18:w=16
break
case 17:J.af4(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.af4(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cI(0,A.nb),$async$P8)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hC(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.mB(a7)
c0.download=B.t(J.aa(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Jp(b0)
J.ly(b0)
B.bK(A.nY,new C.ffb(a7),b9)
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
J.ly(l)
if(p.pF())p.eC()
c3=o
b3=$.as()
c3.shH(b3)
J.aN8(c3,0)
c3=n
c3.shH(b3)
J.aN8(c3,0)
c3=m
c3.shH(b3)
J.aN8(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$P8,v)},
ff7:function ff7(d,e,f){this.a=d
this.b=e
this.c=f},
ff6:function ff6(){},
ff8:function ff8(d,e){this.a=d
this.b=e},
ffc:function ffc(d){this.a=d},
ffd:function ffd(){},
ff9:function ff9(d){this.a=d},
ffa:function ffa(d){this.a=d},
ffb:function ffb(d){this.a=d},
bqm:function bqm(d,e,f){this.c=d
this.d=e
this.a=f},
eQF:function eQF(){},
eQG:function eQG(){},
c8h(d){var w=0,v=B.j(x.at),u,t,s
var $async$c8h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoh(d,A.xP),$async$c8h)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.N(Date.now(),0,!1))
if(t.a<0){u=A.bs
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8h,v)},
c8g(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5l:function a5l(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfQ:function bfQ(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e0U:function e0U(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
apH:function apH(d,e){this.a=d
this.b=e},
a6b:function a6b(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nN$=k
_.nO$=l
_.nP$=m
_.nc$=n},
a6c:function a6c(d,e){this.a=d
this.b=e},
aZT:function aZT(){},
cau:function cau(){},
cav:function cav(){},
caw:function caw(d,e,f,g,h,i,j,k,l){var _=this
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
h6N(d){return new C.afm(d)},
a0A:function a0A(){},
afm:function afm(d){this.a=d},
aNs:function aNs(){},
atv:function atv(d,e){this.d=d
this.b=e
this.a=null},
aZu:function aZu(d,e){this.d=d
this.b=e
this.a=null},
aOW:function aOW(d){this.b=d
this.a=null},
fYy(d,e){return(A.qo[(d^e)&255]^A.o.ar(d,8))>>>0},
f8u(d,e,f,g,h,i){var w=C.hC_(d,A.d5,f,null,A.cN,g,h,i)
return w},
h_p(d){var w=F.h06(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hej(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.of.h(0,w)
if(v!=null)return v
for(u=A.of.gdH(A.of),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
bw1(d,e){return C.hyL(d,e)},
hyL(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bw1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hC([d],"application/pdf")
n=x.z
q=B.aQu(B.a([r],x.e3),e,B.D(["type","application/pdf"],n,n))
p=B.cr(B.D(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.e9(B.jH(o,"share",[p]),x.H),$async$bw1)
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
return B.i($async$bw1,v)},
fFn(){var w=0,v=B.j(x.y),u,t,s
var $async$fFn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f1W
s=$.bvz
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bw1(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFn,v)},
bxk(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bxk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f1W
l=$.bvz
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=W.fVk()?3:4
break
case 3:w=5
return B.b(C.bw1(m,k),$async$bxk)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bvA
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mB(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Jp(q)
w=10
return B.b(B.bK(A.X,null,x.H),$async$bxk)
case 10:J.ly(q)
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
return B.i($async$bxk,v)},
fFe(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fFe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bvA
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.l5.tQ(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fFe,v)},
fFv(d,e){var w=0,v=B.j(x.H),u,t
var $async$fFv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hC([d],"text/html"))
t.toString
u=window
u.toString
A.l5.tQ(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fFv,v)},
aYP(d,e){var w=0,v=B.j(x.y),u
var $async$aYP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aYR(d,e),$async$aYP)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aYQ(d),$async$aYP)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aYP,v)}},D,H,Ag,S,V,A3,G,F,E,Ah,O,W,X,A4,K,Ai,Y,N,T,L,A5,Aj,Z,A6,A7,Ak,A8,A9,Aa,Al,Am,P,An,I,Ab,Q,R,Ao,M,A_,A0,A1,Ap,Aq
J=c[1]
B=c[0]
A=c[2]
U=c[177]
A2=c[130]
Ac=c[55]
Ad=c[50]
Ae=c[101]
Af=c[189]
C=a.updateHolder(c[4],C)
D=c[175]
H=c[88]
Ag=c[34]
S=c[179]
V=c[176]
A3=c[184]
G=c[147]
F=c[29]
E=c[178]
Ah=c[96]
O=c[103]
W=c[27]
X=c[137]
A4=c[109]
K=c[180]
Ai=c[108]
Y=c[58]
N=c[157]
T=c[72]
L=c[116]
A5=c[121]
Aj=c[182]
Z=c[92]
A6=c[51]
A7=c[153]
Ak=c[33]
A8=c[70]
A9=c[102]
Aa=c[188]
Al=c[190]
Am=c[187]
P=c[64]
An=c[183]
I=c[134]
Ab=c[63]
Q=c[45]
R=c[181]
Ao=c[191]
M=c[164]
A_=c[186]
A0=c[185]
A1=c[54]
Ap=c[163]
Aq=c[94]
C.nm.prototype={
u9(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t2(t,v)
return new C.nm(t===0?!1:w,v,t)},
bDM(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BB()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t2(w,u)
return new C.nm(r===0?!1:s,u,r)},
bEb(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BB()
w=o-d
if(w<=0)return p.a?$.fGR():$.BB()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t2(w,u)
q=new C.nm(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a0l())
return q},
dN(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.O(B.dC("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.aj(e,16)
if(A.o.J(e,16)===0)return r.bDM(v)
u=w+v+1
t=new Uint16Array(u)
C.fS2(r.b,w,e,t)
w=r.a
s=C.t2(u,t)
return new C.nm(s===0?!1:w,t,s)},
lS(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.O(B.dC("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.aj(e,16)
u=A.o.J(e,16)
if(u===0)return n.bEb(v)
t=w-v
if(t<=0)return n.a?$.fGR():$.BB()
s=n.b
r=new Uint16Array(t)
C.hoh(s,w,e,r)
w=n.a
q=C.t2(t,r)
p=new C.nm(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dN(1,u)-1)!==0)return p.aD(0,$.a0l())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a0l())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cxy(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5a(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5a(t,e)
if(s===0)return $.BB()
if(r===0)return t.a===e?t:t.u9(0)
w=s+1
v=new Uint16Array(w)
C.hof(t.b,s,d.b,r,v)
u=C.t2(w,v)
return new C.nm(u===0?!1:e,v,u)},
FL(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BB()
w=d.c
if(w===0)return t.a===e?t:t.u9(0)
v=new Uint16Array(s)
C.b5L(t.b,s,d.b,w,v)
u=C.t2(s,v)
return new C.nm(u===0?!1:e,v,u)},
brb(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t2(r,u)
return new C.nm(!1,u,s)},
bra(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t2(u,r)
return new C.nm(!1,r,v)},
brc(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t2(p,m)
return new C.nm(s!==0,m,s)},
Sy(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BB()
w=t.a
if(w===e.a){if(w){w=$.a0l()
return t.FL(w,!0).brc(e.FL(w,!0),!0).a5a(w,!0)}return t.brb(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bra(v.FL($.a0l(),!1),!1)},
ap(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5a(e,v)
if(C.cxy(u.b,t,e.b,w)>=0)return u.FL(e,v)
return e.FL(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.u9(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5a(e,v)
if(C.cxy(u.b,t,e.b,w)>=0)return u.FL(e,v)
return e.FL(u,!v)},
aO(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BB()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fS3(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t2(w,t)
return new C.nm(q===0?!1:r,t,q)},
bDL(d){var w,v,u,t
if(this.c<d.c)return $.BB()
this.aM6(d)
w=$.fAE.c2()-$.aud.c2()
v=C.fAG($.fAD.c2(),$.aud.c2(),$.fAE.c2(),w)
u=C.t2(w,v)
t=new C.nm(!1,v,u)
return this.a!==d.a&&u>0?t.u9(0):t},
cdv(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aM6(d)
w=C.fAG($.fAD.c2(),0,$.aud.c2(),$.aud.c2())
v=C.t2($.aud.c2(),w)
u=new C.nm(!1,w,v)
if($.fAF.c2()>0)u=u.lS(0,$.fAF.c2())
return t.a&&u.c>0?u.u9(0):u},
aM6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fS_&&d.c===$.fS1&&g.b===$.fRZ&&d.b===$.fS0)return
w=d.b
v=d.c
u=16-A.o.gagx(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fRY(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fRY(g.b,f,u,r)}else{r=C.fAG(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fAH(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cxy(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b5L(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b5L(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hog(p,r,i);--o
C.fS3(h,j,0,r,o,s)
if(r[i]<h){m=C.fAH(j,s,o,n)
C.b5L(r,l,n,m,r)
while(--h,r[i]<h)C.b5L(r,l,n,m,r)}--i}$.fRZ=g.b
$.fS_=f
$.fS0=w
$.fS1=v
$.fAD.b=r
$.fAE.b=l
$.aud.b=s
$.fAF.b=u},
gV(d){var w,v,u,t=new C.cxz(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cxA().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nm&&this.aI(0,e)===0},
rl(d,e){return this.aI(0,e)>0},
L(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u3(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gagx(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.ar(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cxB(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cxC(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kO(A.aD.gaL(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.u9(0):r
while(v.c>1){u=$.h3J()
if(u.c===0)B.b7(D.aUy)
t=v.cdv(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bDL(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dt(w,x.bJ).fJ(0)},
$iaOb:1,
$ihu:1}
C.aNC.prototype={
G(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.m(0,u,w.length-1)},
gH(d){return this.a.length},
h(d,e){return this.a[e]},
m(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.m(0,f.a,e)},
cAs(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gai(d){return A.d.gai(this.a)},
gag(d){return this.a.length===0},
gcg(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.jK(w,w.length,B.S(w).k("jK<1>"))}}
C.PL.prototype={
cI9(){var w,v
if(this.as==null)this.b5W()
w=this.as
v=w==null?null:w.al5()
return v==null?null:v.ex()},
b5W(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.al5().ex()
this.as=new C.bIh(v)}},
gX(d){return this.at}}
C.a1w.prototype={
a3(){return"CompressionType."+this.b}}
C.bCo.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.ck()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dN(v,u)+(s.b&A.xq[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.ck()}w=A.o.dN(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fl(u,t)&A.xq[d])
s.c=t}return v}}
C.bB7.prototype={
cyM(d,e){var w,v,u,t,s,r=this,q=new C.bCo(d)
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
t=r.cbQ(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cbT(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cbQ(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.cYk[u])v=!1
if(t!==D.cEb[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cbT(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bTD()
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
u[w]=l}c9.fr=B.bS(6,$.h1Q(),!1,x.G)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h1P()
u=x.an
c9.y=B.bS(6,v,!1,u)
c9.z=B.bS(6,v,!1,u)
c9.Q=B.bS(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bPl(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.apN(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.apN(d3)}while(a3===0||a3===1);++a5
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
b2=A.o.J(a8,16)
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
a3=c9.apN(d3)
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
d4.bA(c3)
c1=(c1<<8^D.F6[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.F8[b9];++b9
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
if(b8===0){b8=D.F8[b9];++b9
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
if(b8===0){b8=D.F8[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.F8[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.F8[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bA(c3)
c1=c1<<8^D.F6[c1>>>24&255^v];--c2}d4.bA(c3)
c1=(c1<<8^D.F6[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bA(c7)
c1=(c1<<8^D.F6[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bA(c7)
c1=(c1<<8^D.F6[c1>>>24&255^c7&255])>>>0
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
apN(d){var w,v,u,t,s=this,r=s.ay
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
bPl(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bTD(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cpH.prototype={
aCR(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bGP(e)
if(q<0)return
e.c=q
if(e.aG()!==101010256)return
e.aP()
e.aP()
e.aP()
e.aP()
r.f=e.aG()
r.r=e.aG()
w=e.aP()
if(w>0)e.aCU(w,!1)
r.ccd(e)
q=r.r
v=r.f
u=e.aFI(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aG()!==33639248)break
s=new C.b4v()
s.cI8(0,u,e,f)
q.push(s)}},
ccd(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a4O(20,r)
if(w.aG()!==117853008){d.c=s
return}w.aG()
v=w.r7()
w.aG()
d.c=v
if(d.aG()!==101075792){d.c=s
return}d.r7()
d.aP()
d.aP()
d.aG()
d.aG()
d.r7()
d.r7()
u=d.r7()
t=d.r7()
this.f=u
this.r=t
d.c=s},
bGP(d){var w,v,u,t,s,r,q,p,o,n
if(d.gH(0)<=4)return-1
w=d.c
v=d.gH(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a4O(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aiV(A.hz)
o.aGZ(r.ex(),A.hz,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aG()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cpF.prototype={}
C.atT.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cpI.prototype={
aCR(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aG()!==67324752)return
e.aP()
o.b=e.aP()
w=D.axH.h(0,e.aP())
o.c=w==null?D.J_:w
o.d=e.aP()
o.e=e.aP()
o.f=e.aG()
o.r=e.aG()
o.w=e.aG()
v=e.aP()
u=e.aP()
o.x=e.ajW(v)
o.y=e.h_(u).ex()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aLy:D.BO
o.ay=f
o.Q=e.h_(t)
if(o.at!==D.BO&&u>2){w=o.y
w.toString
s=B.qy(w,A.hz,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aP()===39169){s.aP()
s.aP()
s.ajW(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aP()
o.at=D.aLz
o.ax=new C.cpF(r,q)
w=D.axH.h(0,q)
o.c=w==null?D.J_:w}}}if((o.b&8)!==0){p=e.aG()
if(p===134695760)o.f=e.aG()
else o.f=p
o.r=e.aG()
o.w=e.aG()}},
gH(d){return this.bf4().length},
al5(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qy(new Uint8Array(0),A.hz,q,q)
w=r.at
if(w!==D.BO)if(p.gH(0)<=0)r.at=D.BO
else{if(w===D.aLy){p=r.bC5(p)
r.Q=p}else if(w===D.aLz){p=r.bBJ(p)
r.Q=p}r.at=D.BO}w=r.c
if(w===D.aba){v=p.c
u=B.da()
p=r.Q
if(p.gH(0)<=524288e3)u.b=A.oC.Ak(p.ex(),!0,!1)
else{t=B.a61(A.hz,r.w)
p=r.Q
p.toString
A.oC.a14(p,t,!0,!1)
u.b=t.Fk()}r.Q.c=v
return B.qy(u.b6(),A.hz,q,q)}else if(w===D.abb){s=B.a61(A.hz,32768)
p=r.Q
v=p.c
C.h6Y().cyM(p,s)
u=s.Fk()
r.Q.c=v
return B.qy(u,A.hz,q,q)}else return B.qy(p.ex(),A.hz,q,q)},
bf4(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ex()},
u(d){return this.x},
b1Z(d){var w=this.ch,v=C.HS(C.fYy(w[0].L(0),d))
w[0]=v
v=w[1].ap(0,v.Sy(0,C.HS(255)))
w[1]=v
w[1]=v.aO(0,C.HS(134775813)).ap(0,C.HS(1)).Sy(0,C.HS(4294967295))
w[2]=C.HS(C.fYy(w[2].L(0),w[1].lS(0,24).L(0)))},
aLy(){var w=(this.ch[2].Sy(0,C.HS(65535)).L(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bC5(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qy(new Uint8Array(0),A.hz,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b1Z(u[v.c++]^r.aLy())}t=r.Q.ex()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aLy()
r.b1Z(s)
u&2&&B.ah(t)
t[w]=s}return B.qy(t,A.hz,q,q)},
bBJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h_(8).ex()
v=16}else if(k===2){w=d.h_(12).ex()
v=24}else{w=d.h_(16).ex()
v=32}u=d.h_(2).ex()
t=d.h_(d.gH(0)-10)
s=d.h_(10)
r=t.ex()
k=this.ay
k.toString
q=C.hnX(k,w,v)
p=new Uint8Array(B.ck(A.aD.dC(q,0,v)))
k=v*2
o=new Uint8Array(B.ck(A.aD.dC(q,v,k)))
if(!C.fRt(A.aD.dC(q,k,k+2),u))throw B.O(B.fb("password error"))
k=new Uint8Array(16)
n=new C.bzI(k,new Uint8Array(16),p)
k=x.r
m=J.a2R(0,k)
m=n.r=new C.caj(m)
m.c=!0
m.b=m.beo(!0,new C.apD(p))
if(m.c)m.d=B.bi(D.nu,!0,k)
else m.d=B.bi(D.xj,!0,k)
l=C.fPI(C.fPK(),64)
l.b8b(new C.apD(o))
n.w=l
n.cHK(r,0,r.length)
k=s.ex()
m=n.x
m===$&&B.c()
if(!C.fRt(k,m))throw B.O(B.fb("macs don't match"))
return B.qy(r,A.hz,null,null)}}
C.b4v.prototype={
cI8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aP()
e.aP()
e.aP()
e.aP()
e.aP()
e.aP()
e.aG()
n.w=e.aG()
n.x=e.aG()
w=e.aP()
v=e.aP()
u=e.aP()
n.y=e.aP()
e.aP()
n.Q=e.aG()
n.as=e.aG()
if(w>0)n.at=e.ajW(w)
if(v>0){t=e.h_(v).ex()
n.ax=t
if(v>=4){s=B.qy(t,A.hz,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aP()
p=s.aP()
o=s.a4O(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.r7()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.r7()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.r7()
p-=8}if(p>=4&&n.y===65535)n.y=o.aG()}}}}if(u>0)e.ajW(u)
f.c=n.as
t=new C.cpI(D.J_,n,D.BO,B.a([C.HS(0),C.HS(0),C.HS(0)],x.f3))
n.ch=t
t.aCR(0,f,g)},
u(d){return this.at}}
C.cpG.prototype={
cyN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cpH(B.a([],x.fT))
this.a=g
g.aCR(0,d,f)
g=B.a([],x.bm)
w=B.Q(x.N,x.r)
v=new C.aNC(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.J)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c5(o,"/")||A.a.c5(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.PL(o,A.o.aj(Date.now(),1000),0):C.fId(o,q.w,q)
v.G(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fId(o,q.w,q)
if(k.as==null)k.b5W()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aiV(A.hz)
j.aGZ(o,A.hz,h,h)}i=j==null?h:j.ex()
if(i!=null)new B.Iw(!1).Gl(i,0,h,!0)}}return v}}
C.bzI.prototype={
cHK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bd(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.h6H(u,m.a)
q=m.r
if(16>u.byteLength)B.b7(B.dC("Input buffer too short",null))
if(16>w.byteLength)B.b7(B.dC("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bFf(u,0,w,0,o)}else{o===$&&B.c()
q.bC9(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Jq(w,0)
m.x=A.aD.dC(m.x,0,10)
w=m.w
l=w.a
l.l1(0)
w=w.d
w===$&&B.c()
l.Bd(0,w,0,w.length)
return f}}
C.cao.prototype={}
C.cas.prototype={}
C.cam.prototype={}
C.apD.prototype={}
C.car.prototype={
cz1(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b8b(new C.apD(A.aD.h1(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bGd(n.a,n.b,t,s,r)
r+=v}A.aD.h9(f,g,g+w,s)
return o.a.c},
bGd(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.O(B.dC("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bd(0,d,0,d.length)
v.Bd(0,f,0,4)
u=m.c
u===$&&B.c()
w.Jq(u,0)
u=m.c
A.aD.h9(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bd(0,s,0,s.length)
w.Jq(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.can.prototype={}
C.cal.prototype={}
C.apE.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.apE){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rl(d,e){var w=this.a
w===$&&B.c()
w=A.o.rl(w,e.gbPA())
if(!w)e.gbPA()
return w},
aFb(d,e){this.a=0
this.b=d},
rn(d){return this.aFb(d,null)},
aFL(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.f3(""),u=w.a
u===$&&B.c()
w.aV7(v,u)
u=w.b
u===$&&B.c()
w.aV7(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aV7(d,e){var w,v=A.o.fC(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bl(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.caq.prototype={
l1(d){var w,v=this
v.a.rn(0)
v.c=0
A.aD.hg(v.b,0,4,0)
v.w=0
w=v.r
A.d.hg(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
akB(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aWy(u,0)
v.c=0}v.a.aFL(1)},
Bd(d,e,f,g){var w=this.caJ(e,f,g)
f+=w
g-=w
w=this.caK(e,f,g)
this.caA(e,f+w,g-w)},
Jq(d,e){var w,v=this,u=C.fPJ(v.a),t=u.a
t===$&&B.c()
t=C.fG_(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fG_(w,3)
v.caE()
v.caB(u)
v.aoE()
v.c4Y(d,e)
v.l1(0)
return 20},
aWy(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nx(A.aD.gaL(d),d.byteOffset,d.length).getUint32(e,A.hO===w.d)
if(w.w===16)w.aoE()},
aoE(){this.cHJ()
this.w=0
A.d.hg(this.r,0,16,0)},
caA(d,e,f){while(f>0){this.akB(d[e]);++e;--f}},
caK(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aWy(d,e)
e+=4
f-=4
w.aFL(4)
v+=4}return v},
caJ(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.akB(d[e]);++e;--f;++v}return v},
caE(){this.akB(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.akB(0)}},
caB(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.aoE()
u=v.d
switch(u){case A.hO:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Cf:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.O(B.ba("Invalid endianness: "+u.u(0)))}},
c4Y(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hO===this.d,s=0;s<w;++s){r=v[s]
q=J.nx(A.aD.gaL(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cat.prototype={
cHJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pA[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pA[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pA[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pA[30]
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
C.cap.prototype={
b8b(d){var w,v,u,t,s=this,r=s.a
r.l1(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bd(0,w,0,v)
w=s.d
w===$&&B.c()
r.Jq(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aD.h9(t,0,v,w)}w=s.d
w===$&&B.c()
A.aD.hg(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aD.h9(w,0,u,s.d)
s.b36(s.d,u,54)
s.b36(s.e,u,92)
u=s.d
r.Bd(0,u,0,u.length)},
Jq(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Jq(s,w)
s=u.e
t.Bd(0,s,0,s.length)
v=t.Jq(d,e)
s=u.e
A.aD.hg(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bd(0,s,0,s.length)
return v},
b36(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cak.prototype={}
C.caj.prototype={
a_u(d){return(D.nu[d&255]&255|(D.nu[d>>>8&255]&255)<<8|(D.nu[d>>>16&255]&255)<<16|D.nu[d>>>24&255]<<24)>>>0},
beo(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.O(B.dC("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.r,r=0;r<t;++r)s[r]=B.bS(4,0,!1,u)
switch(v){case 4:q=J.nx(A.aD.gaL(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_u((m>>>8|(m&$.pA[24])<<24)>>>0)^D.chq[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nx(A.aD.gaL(e),e.byteOffset,w)
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
p=(p^f.a_u((k>>>8|(k&$.pA[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_u((k>>>8|(k&$.pA[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nx(A.aD.gaL(e),e.byteOffset,w)
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
p=(p^f.a_u((g>>>8|(g&$.pA[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_u(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.O(B.ba("Should never get here"))}return s},
bFf(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nx(A.aD.gaL(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.dY[a8&255]
u=D.dY[a9>>>8&255]
t=$.pA[8]
s=D.dY[b0>>>16&255]
r=$.pA[16]
q=D.dY[b1>>>24&255]
p=$.pA[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.dY[a9&255]
s=D.dY[b0>>>8&255]
u=D.dY[b1>>>16&255]
v=D.dY[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.dY[b0&255]
u=D.dY[b1>>>8&255]
s=D.dY[a8>>>16&255]
q=D.dY[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.dY[b1&255]
a8=D.dY[a8>>>8&255]
a9=D.dY[a9>>>16&255]
b0=D.dY[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.dY[n&255]
b0=D.dY[m>>>8&255]
a9=D.dY[l>>>16&255]
a8=D.dY[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.dY[m&255]
b0=D.dY[l>>>8&255]
o=D.dY[b1>>>16&255]
s=D.dY[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.dY[l&255]
o=D.dY[b1>>>8&255]
b0=D.dY[n>>>16&255]
u=D.dY[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.dY[b1&255]
o=D.dY[n>>>8&255]
s=D.dY[m>>>16&255]
v=D.dY[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.dY[a8&255]^C.mW(D.dY[a9>>>8&255],24)^C.mW(D.dY[b0>>>16&255],16)^C.mW(D.dY[b1>>>24&255],8)^b6[w][0]
m=D.dY[a9&255]^C.mW(D.dY[b0>>>8&255],24)^C.mW(D.dY[b1>>>16&255],16)^C.mW(D.dY[a8>>>24&255],8)^b6[w][1]
l=D.dY[b0&255]^C.mW(D.dY[b1>>>8&255],24)^C.mW(D.dY[a8>>>16&255],16)^C.mW(D.dY[a9>>>24&255],8)^b6[w][2]
b1=D.dY[b1&255]^C.mW(D.dY[a8>>>8&255],24)^C.mW(D.dY[a9>>>16&255],16)^C.mW(D.dY[b0>>>24&255],8)^b6[w][3]
a7=D.nu[n&255]
b0=D.nu[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nu[l>>>8&255]
a9=D.nu[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nu[b1>>>8&255]
h=D.nu[n>>>16&255]
g=D.nu[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nu[l>>>24&255]
s=s[3]
a1=J.nx(A.aD.gaL(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nx(A.aD.gaL(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nx(A.aD.gaL(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nx(A.aD.gaL(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bC9(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nx(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nx(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nx(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nx(A.aD.gaL(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.dX[a6&255]
v=D.dX[b0>>>8&255]
u=$.pA[8]
t=D.dX[a5>>>16&255]
s=$.pA[16]
r=D.dX[a4>>>24&255]
q=$.pA[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.dX[a4&255]
t=D.dX[a6>>>8&255]
v=D.dX[b0>>>16&255]
w=D.dX[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.dX[a5&255]
v=D.dX[a4>>>8&255]
t=D.dX[a6>>>16&255]
r=D.dX[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.dX[b0&255]
a5=D.dX[a5>>>8&255]
a4=D.dX[a4>>>16&255]
a6=D.dX[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.dX[p&255]
a6=D.dX[b0>>>8&255]
a4=D.dX[n>>>16&255]
a5=D.dX[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.dX[o&255]
a4=D.dX[p>>>8&255]
a7=D.dX[b0>>>16&255]
t=D.dX[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.dX[n&255]
a7=D.dX[o>>>8&255]
a5=D.dX[p>>>16&255]
v=D.dX[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.dX[b0&255]
a7=D.dX[n>>>8&255]
t=D.dX[o>>>16&255]
w=D.dX[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.dX[a6&255]^C.mW(D.dX[b0>>>8&255],24)^C.mW(D.dX[a5>>>16&255],16)^C.mW(D.dX[a4>>>24&255],8)^b5[a9][0]
o=D.dX[a4&255]^C.mW(D.dX[a6>>>8&255],24)^C.mW(D.dX[b0>>>16&255],16)^C.mW(D.dX[a5>>>24&255],8)^b5[a9][1]
n=D.dX[a5&255]^C.mW(D.dX[a4>>>8&255],24)^C.mW(D.dX[a6>>>16&255],16)^C.mW(D.dX[b0>>>24&255],8)^b5[a9][2]
b0=D.dX[b0&255]^C.mW(D.dX[a5>>>8&255],24)^C.mW(D.dX[a4>>>16&255],16)^C.mW(D.dX[a6>>>24&255],8)^b5[a9][3]
a4=D.xj[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xj[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xj[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xj[o>>>8&255]
i=D.xj[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xj[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nx(A.aD.gaL(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bIg.prototype={}
C.bIh.prototype={
gH(d){var w=this.a.length
return w},
al5(){return B.qy(this.a,A.hz,null,null)}}
C.b60.prototype={
u5(d){return C.hr7(d)}}
C.cjH.prototype={
KY(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7y(v,t+20,u+16,t,u,B.td(d.x))},
mO(d){return!1}}
C.asA.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6_.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aU(this))return!1
return e instanceof C.a6_&&e.a===this.a},
gV(d){return B.bl(B.aU(this),B.vR(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aU(this)===D.eXB)return"["+(w+B.dX(this.a))+"]"
return"[ObjectKey "+(w+B.dX(this.a))+"]"}}
C.aRT.prototype={
bX(d){var w=new C.axk(!0,this.e,null,new B.d5(),B.c8())
w.bW()
w.scv(null)
return w},
c3(d,e){var w
x.cQ.a(e)
e.sxz(0,!0)
w=this.e
if(!w.A(0,e.ae)){e.ae=w
e.aBw()}}}
C.axk.prototype={
sxz(d,e){return},
goH(){var w=this.a7$
return w!=null},
gkw(){var w=this.a7$
return w!=null},
KN(d){var w=d==null?B.fKx(null):d
w.sa1X(this.ae)
return w}}
C.Zx.prototype={
S(){return new C.aFz(B.aY(x.N))},
cG0(d){return this.d.$1(d)},
cDR(){return this.e.$0()}}
C.aFz.prototype={
Z(){this.a0()
this.Nd()},
Nd(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cDR(),$async$Nd)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eP7(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nd,v)},
Wx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Wx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.ePb(t),q),q.k("E.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.ePc(t))
w=3
return B.b(C.akF(p),$async$Wx)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ePd(t,s,p))
w=4
return B.b(t.Nd(),$async$Wx)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Wx,v)},
Zv(d){return this.ceF(d)},
ceF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Zv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eP8(t))
s=J.q(d,"id")
w=3
return B.b(C.bTh(J.k(s==null?"":s)),$async$Zv)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eP9(t))
w=1
break}q=C.fFt(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cG0(B.a([q],x.D)),$async$Zv)
case 4:if(t.c==null){w=1
break}t.n(new C.ePa(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Zv,v)},
Nc(d,e){return this.bCy(0,e)},
bCy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Nc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.eP2(q),r,null,!0,!0,x.y),$async$Nc)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eP3(t))
s=s.h(e,"id")
w=4
return B.b(C.akE(J.k(s==null?"":s)),$async$Nc)
case 4:if(t.c==null){w=1
break}t.n(new C.eP4(t))
w=5
return B.b(t.Nd(),$async$Nc)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Nc,v)},
csq(d){var w=B.bf(d),v=w==null?null:w.bP()
if(v==null)return""
return A.hV[B.bC(v)-1]+" "+B.bN(v)},
aLp(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.U(d,A.c,w,w,w,e*0.5),A.i,w,w,new B.o(w,w,w,v,w,D.Ls,A.n),w,e,w,w,w,w,w,e)},
aLo(d){return this.aLp(d,44)},
b0n(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ls:u,r=B.m(14),q=B.U(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.GG,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.GG,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aP,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.i,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bjt,u,u,u)],p))}return B.C(B.aJ(A.c5,B.de(u,B.A(q,A.m,u,A.b5,A.j,0,u,u),u,u,A.b7,new B.o(u,u,u,r,u,s,A.n),A.hE,u,u,u,A.wb,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ePh(this,d),u,u,u,u,u,u,!1,A.ae),1)},
c8N(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.db.j(0.14):D.TW,n=B.m(18),m=p?A.db:A.du
m=B.H(m,A.r,p?1.8:1)
w=this.aLo(A.p5)
v=B.d(d.b,q,1,A.a0,q,q,q,D.aJQ,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.C(B.u(B.a([v,A.dh,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aJS,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Ls:q
u=p?q:B.H(A.be,A.r,1.6)
r=p?D.bxf:q
return B.aJ(q,B.de(q,B.A(B.a([w,A.bb,t,B.de(q,r,q,q,A.b7,new B.o(q,q,u,q,q,v,A.a6),A.fN,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b7,new B.o(o,q,m,n,q,q,A.n),A.fN,q,q,A.d6,A.bj,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eP6(this,p,d),q,q,q,q,q,q,!1,A.ae)},
cg8(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.csq(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.du,A.r,1)
v=r.aLo(A.KD)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a0,q,q,q,D.aJQ,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.C(B.u(B.a([u,A.dh,B.d(p+" slides"+t,q,q,q,q,q,q,D.aJS,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aYb(A.hd,A.bo,"Bring it back",r.r?q:new C.ePe(r,d))
return B.p(q,B.A(B.a([v,A.bb,t,p,A.bp,r.aYb(A.e4,A.cJ,"Delete",r.r?q:new C.ePf(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.i,q,q,new B.o(D.TW,q,w,o,q,q,A.n),q,q,q,A.d6,D.beg,q,q,q)},
aYb(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hJ(B.aJ(w,B.p(w,B.U(d,v?A.be:e,w,w,w,19),A.i,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
aoU(d,e,f){var w=null
return new B.B(D.bdk,B.u(B.a([B.U(d,A.be,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.ewx,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.epr,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c3
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bM,x.w).w
u=B.p(i,i,A.i,i,i,new B.o(A.be,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aLp(A.x6,46),A.bb,D.bk9],t)
if(j.r)s.push(D.dLp)
s.push(B.aF(i,i,i,i,A.Lc,i,i,i,new C.ePk(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.du,A.r,1)
o=J.a4(h)
q=B.a([A.U,u,new B.B(D.bgL,s,i),B.p(i,B.A(B.a([j.b0n(0,A.wH,"Save",j.a.c.length),j.b0n(1,A.KT,"Saved",o.gH(h))],t),A.m,i,A.e,A.j,0,i,i),A.i,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bfR,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cJ:A.bo).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cJ:A.bo).j(0.4),A.r,1)
p=j.y
n=p?A.KF:A.ei
n=B.U(n,p?A.cJ:A.bo,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.C(B.d(m,i,i,i,i,i,i,A.a3D,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.i,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bfN,A.iU,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.C(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.esN,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.evD,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.ePl(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.U],t)
if(j.a.c.length===0)s.push(j.aoU(A.p5,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.J)(r),++l)s.push(j.c8N(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dL0)
else if(j.e==null)s.push(j.aoU(A.afC,"Could not reach the database","Check the connection, then open this again."))
else if(o.gag(h))s.push(j.aoU(A.o4,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cg8(r.gT(r)))
A.d.v(u,s)}q.push(new B.dp(1,A.cj,B.cX(u,i,V.acS,i,i,A.af,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbW4()
p=s?i:D.Ls
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.a9(0,A.G,A.b0.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.U(A.wH,m?A.j8:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.B(D.bgo,B.aJ(i,B.de(i,B.A(B.a([k,A.a35,new B.dp(1,A.cj,B.f_(A.C,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j8:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.i,A.e8),i)],t),A.m,i,A.b5,A.j,0,i,i),i,i,A.b7,new B.o(s,i,i,o,n,p,A.n),A.hE,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.U)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.i,i,new B.aV(0,1/0,0,w.a.b*0.9),D.aRJ,i,i,i,i,i,i,i,i)}}
C.nO.prototype={
ad(){return B.D(["id",this.a,"doc",this.b.ad(),"updatedAt",this.c.a4().aa()],x.N,x.z)}}
C.Wl.prototype={
S(){return new C.auo(B.a([],x.k),B.f1(null,x.H))},
gdQ(){return this.c}}
C.auo.prototype={
Z(){this.a0()
this.Nk()},
Nk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_w(t.a.c),$async$Nk)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.cyX(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nk,v)},
cm0(d){var w,v,u,t=this
d.c=new B.N(Date.now(),0,!1)
w=J.pH(t.d,new C.cz_(d))
v=w<0
if(v&&C.hoj(d))return t.f
u=t.d
if(v)J.oY(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fwz(new C.cz0(t),v)
return t.f=t.f.bC(new C.cz1(t,d),v).eX(new C.cz2())},
H5(d,e,f){return this.c2E(0,e,f)},
aSF(d,e){return this.H5(0,e,!1)},
c2E(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$H5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cz(B.eN(new C.cyW(t,e),!1,null,x.H)),$async$H5)
case 3:w=4
return B.b(t.f,$async$H5)
case 4:w=5
return B.b(t.Nk(),$async$H5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$H5,v)},
aRY(d){var w=A.o.u(1000*Date.now()),v=d==null?D.d9H:d
this.H5(0,new C.nO(w,v,new B.N(Date.now(),0,!1)),!0)},
bVB(){return this.aRY(null)},
aab(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aab=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,new C.cz3(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aab)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aRY(s)
case 1:return B.h(u,v)}})
return B.i($async$aab,v)},
H4(d,e){return this.bCq(0,e)},
bCq(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$H4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cyR(e),s,null,!0,!0,x.y),$async$H4)
case 3:if(g!==!0){w=1
break}t.n(new C.cyS(t,e))
w=4
return B.b(t.f,$async$H4)
case 4:w=5
return B.b(C.adB(t.a.c,e.a),$async$H4)
case 5:w=6
return B.b(t.Nk(),$async$H4)
case 6:case 1:return B.h(u,v)}})
return B.i($async$H4,v)},
BV(d){return this.buR(d)},
buR(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$BV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,new C.cyN(d),r,!0,!0,!1,null,!1,!1,x.N),$async$BV)
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
return B.b(t.aSF(0,d),$async$BV)
case 9:w=5
break
case 7:w=10
return B.b(F.fG1(r,d.b,null),$async$BV)
case 10:w=5
break
case 8:w=11
return B.b(t.H4(0,d),$async$BV)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$BV,v)},
bPx(){var w,v,u=null,t=[D.d9K,D.d9I,D.d9J],s=new C.cyU(),r=B.m(26),q=x.V,p=B.a([new B.a9(0,A.G,A.dB.j(0.4),A.eO,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b2(999,999)
n.push(B.p(u,new B.w(D.cVA[w],u,A.ot,u,u,u,u,u,u,u,u,u),A.i,u,u,new B.o(A.c.j(0.18),u,u,new B.bx(v,v,v,v),u,u,A.n),u,u,u,u,A.nk,u,u,u))}return B.p(u,B.A(B.a([B.C(B.u(B.a([D.eTl,A.P,B.cf(A.bI,n,A.by,6,6),A.aT,B.aJ(u,B.p(u,D.e9e,A.i,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.cC,10)],q),u,A.n),u,u,u,u,U.ade,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cyT(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a8(130,110,new B.am(A.C,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.i,u,u,new B.o(u,u,u,r,p,D.bEl,A.n),u,u,u,u,D.bgV,u,u,u)},
buP(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.a9(0,A.G,A.x.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.am(A.W,v,A.aX,A.q,B.a([B.f_(A.C,F.alc(d.b),A.i,A.bP),D.dPE,B.an(v,B.aJ(v,B.p(v,D.bxZ,A.i,v,v,D.aSB,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cyI(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.i,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a0,v,v,v,D.emV,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fY(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.esX,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.cyJ(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cyK(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eK(B.a([new B.B(H.abO,B.hJ(B.aJ(s,B.p(s,A.aih,A.i,s,s,new B.o(s,s,s,s,B.a([new B.a9(0,A.G,A.b0.j(0.5),A.J,12)],x.V),E.uD,A.a6),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbWP(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mn,s,s,s,!0,s,s,s,s,s,D.eTp,s,s,s,1,s,!0)
if(t.e)r=D.aVP
else{w=t.bPx()
v=B.a([D.eGi,A.ab],r)
if(J.cs(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.aa(t.d),s,s,s,s,s,s,D.emo,s,s,s),A.i,s,s,new B.o(D.b_3,s,s,u,s,s,A.n),s,s,s,s,A.DE,s,s,s))}r=B.a([new B.nj(Ab.V7,new B.lI(w,s),s),new B.nj(D.bgi,new B.lI(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ch(t.d))r.push(D.eeO)
else r.push(new B.nj(D.bfP,B.MV(new B.nU(new C.cz4(t),J.aa(t.d),!0,!0,!0,0,B.rf(),s),D.aV6),s))
r=B.uC(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.af,!1,r)}return B.cg(q,D.aZ_,r,s,!1,!1,s,s)}}
C.Wj.prototype={
S(){return new C.auk(B.a([],x.bx))},
RQ(d){return this.d.$1(d)}}
C.aBu.prototype={}
C.auk.prototype={
aV9(d,e,f){var w=$.as(),v=new B.ao(new B.b9(d,A.aY,A.aL),w),u=this.gaSE()
v.aJ(0,u)
w=new B.ao(new B.b9(e,A.aY,A.aL),w)
w.aJ(0,u)
return new C.aBu(v,w,f)},
CI(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cV(A.q8,new C.cyb(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.as()
u=new B.ao(new B.b9(w.a,A.aY,A.aL),v)
t=m.gaSE()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ao(new B.b9(w.b,A.aY,A.aL),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ao(new B.b9(w.c,A.aY,A.aL),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.J)(u),++q){p=u[q]
o=new B.ao(new B.b9(p.a,A.aY,A.aL),v)
o.aJ(0,t)
n=new B.ao(new B.b9(p.b,A.aY,A.aL),v)
n.aJ(0,t)
r.push(new C.aBu(o,n,p.c))}if(r.length===0)r.push(m.aV9("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.gon()
q=r.a
q.RQ(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.as()
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
gon(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t=B.a([],x.A)
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.J)(s),++q){p=s[q]
t.push(new F.m_(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qE(n,w,v,t,u)},
zE(){var w=0,v=B.j(x.H),u=this,t
var $async$zE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.gon()
t=u.a
w=2
return B.b(t.RQ(t.c),$async$zE)
case 2:return B.h(null,v)}})
return B.i($async$zE,v)},
bWN(){this.n(new C.cya(this))
this.CI()},
aRG(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.cyd(w,d,v))
w.CI()},
bWO(d,e){var w=A.d.ct(this.w,e)
this.n(new C.cyl())
this.CI()
$.aT.x1$.push(new C.cym(w))},
Os(d){return this.c8D(d)},
c8D(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Os=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l0(80,1400,A.ev),$async$Os)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$Os)
case 8:p=f
o=q.b.toLowerCase()
n=J.af0(o,".png")?"image/png":"image/jpeg"
r.n(new C.cye(d,n,p))
r.CI()
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
return B.i($async$Os,v)},
wF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h19(r,t.gon()),$async$wF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cyc(t,s))
t.CI()
case 1:return B.h(u,v)}})
return B.i($async$wF,v)},
c8V(d){var w,v=this,u=null,t=F.fen(d.c)
if(t==null)return new B.bE(A.a1,u,u,B.hg(D.bru,D.eIx,new C.cyg(v,d),u),u)
w=x.p
return new B.B(A.cR,new B.am(A.W,u,A.a9,A.q,B.a([B.bw(B.m(12),B.fU(t,A.C,u,u,A.cl,A.bP,!0,140,!1,u,1/0),A.ap),B.an(u,B.A(B.a([v.aYc(A.jZ,new C.cyh(v,d)),A.bp,v.aYc(A.cu,new C.cyi(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aYc(d,e){var w=null
return B.aD(!1,A.X,!0,w,B.aH(!1,w,!0,new B.B(A.hb,B.U(d,A.c,w,w,w,18),w),A.cD,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.i,A.aV,0,w,w,A.cD,w,w,A.aa)},
H6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$H6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zE(),$async$H6)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fG1(s,t.gon(),new C.cyk(t)),$async$H6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$H6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eK(B.a([new B.B(A.q9,B.hg(D.bw3,D.eO7,n.gasr(),B.fn(m,m,m,m,m,m,m,m,m,m,m,A.bJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aig,m,m,m,new C.cyn(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Tm,m,1,m,m,m,!1,m,!1,E.mn,m,m,m,!0,m,m,m,m,m,D.eJi,m,m,m,1,m,!0),j=Ak.aQF(N.kM,A.c,A8.St,A.nq,D.eJZ,n.gbWM()),i=B.m(18),h=n.gasq(),g=B.a([new B.a9(0,A.G,A.x.j(0.4),A.jl,12)],x.V)
g=B.aJ(m,B.p(m,new B.a8(92,142.1818181818182,B.f_(A.C,F.alc(n.gon()),A.i,A.dp),m),A.i,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eG,B.C(B.u(B.a([D.eUP,A.aw,B.d(F.fEy(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eyf,m,m,m),A.U,B.dn(E.ahw,E.aKA,h,B.bk(A.dB,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.i,m,m,new B.o(E.Tm,m,m,i,m,m,A.n),m,m,m,m,A.bj,m,m,m)
h=n.d
h===$&&B.c()
h=B.aI(m,A.T,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nD,!0,A.a5,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aI(m,A.T,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aC,h,A.P,w,A.P,B.aI(m,A.T,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bn(m,new B.b0(4,B.m(12),A.d9),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m),A.aT],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b2(16,16)
u=new B.ay(N.kM.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.buP,m,m,m,v===0?m:new C.cyo(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bAR,m,m,m,v===r-1?m:new C.cyp(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.cyq(n,v)
p=new B.b2(12,12)
o=new B.b2(12,12)
g.push(B.p(m,B.u(B.a([new B.cF(A.b_,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eyK,m,m,m,m,m,m,m,m,m),A.bd,s,q,B.aF(m,m,m,m,B.U(A.e4,A.nV,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aI(m,A.T,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.dZ(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b0(4,new B.bx(p,p,p,p),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cb,!0,A.a5,m,A.am,m,m,m,m),A.ar,n.c8V(i[v]),B.aI(m,A.T,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.dZ(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b0(4,new B.bx(o,o,o,o),A.d9),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.ad,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.i,m,m,new B.o(E.mn,m,new B.c2(u,u,u,u),new B.bx(w,w,w,w),m,m,A.n),m,m,new C.a6_(h),A.e3,D.beu,m,m,m))}return B.nR(!0,B.cg(k,E.aaa,B.cX(g,m,D.beV,m,m,A.af,!1),m,!1,!1,j,m),new C.cyr(n),x.C)}}
C.aum.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cJ:E.mn,q=B.m(16),p=B.m(16),o=s?A.aH.j(0.08):A.c.j(0.04)
s=s?A.aH.j(0.16):A.dB.j(0.22)
w=B.m(12)
v=x.p
return new B.B(A.fh,B.aD(!1,A.X,!0,t,B.aH(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.U(u.c,r,t,t,t,20),A.i,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.C(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(u.e,t,t,t,t,t,t,D.aJg,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.U(A.el,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.i,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.i,A.K,0,t,t,t,t,t,A.aa),t)}}
C.ani.prototype={
S(){return new C.aAm()}}
C.aAm.prototype={
Z(){this.a0()
this.X6()},
bo(d){this.bz(d)
if(d.c!=this.a.c)this.Zm()},
Zm(){var w=0,v=B.j(x.H),u=this,t
var $async$Zm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$Zm)
case 2:u.d=null
if(u.c!=null)u.n(new C.dWW(u))
w=3
return B.b(u.X6(),$async$Zm)
case 3:return B.h(null,v)}})
return B.i($async$Zm,v)},
X6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$X6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.aa(n)===0){w=1
break}t=4
if(J.cS(n,"http://")||J.cS(n,"https://")||J.cS(n,"data:")){o=B.VX(B.cp(n,0,null),new B.Ni(!0))
r.d=o}else{o=B.fb("unsupported video ref")
throw B.O(o)}w=7
return B.b(o.ic(0).cI(0,A.oR),$async$X6)
case 7:if(r.c==null){w=1
break}r.d.rp(!1)
r.n(new C.dWU(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a5(m)
$.ak.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dWV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$X6,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
bYG(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fQ(0)
w.n(new C.dWX(w))}else{v.oZ(0)
w.n(new C.dWY(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iP.j(0.92),D.Ij.j(0.95)],x.O)
w=B.H(A.bQ.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.U(A.p8,A.bQ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bQ(B.at(B.u(B.a([t,new B.a8(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a7(A.ax,A.aE,A.w,m,o,o),A.n),A.ba)}if(p.f)return B.at(B.U(A.agP,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aWy
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f_(A.C,new B.a8(r,q,new B.yV(s,o),o),A.q,A.bP)],x.p)
if(!p.r){w=8*p.a.d
v=A.x.j(0.45)
m.push(B.at(B.p(o,B.U(A.iX,A.c,o,o,o,28*p.a.d),A.i,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.L(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bw(n,new B.am(A.W,o,A.aX,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gbYF(),o,o,o,o,o,o,!1,A.ae)}}
C.wx.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.j8.prototype={}
C.aaG.prototype={
B(d){return B.p5(new C.dOk(this,B.K(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aa5.prototype={
B(d){var w,v,u=null,t=B.K(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iP.j(t?0.35:0.4),A.r,1),p=t?D.II:A.c,o=x.V,n=B.a([new B.a9(0,A.G,A.x.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.H(A.bQ.j(0.5),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dF,6)],o)
w=this.c
o=B.C(B.p(u,new B.fY(0.5625,C.hFP(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.adG,u,u,u,u),1)
m=D.iP.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iP,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.X,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.dh,B.d(w.c,u,2,A.a0,u,u,u,B.l(u,u,t?A.aA:D.b4h,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.i,u,u,new B.o(u,u,new B.c2(new B.ay(m,1,A.r,-1),A.V,A.V,A.V),u,u,u,A.n),u,u,u,u,D.ac3,u,u,u)],v),A.al,u,A.e,A.j,0,A.p),A.i,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.i,A.K,0,u,u,u,u,u,A.aa)}}
C.wA.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.na.prototype={}
C.beV.prototype={
TQ(d){var w=null
return new B.bE(A.a1,w,w,B.FW(A.C,B.p(w,w,A.i,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
buy(){return this.TQ(1)},
asV(d){var w=null,v=B.m(8),u=B.H(A.hC,A.r,0.9)
return B.p(A.C,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.i,w,w,new B.o(D.a8s,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.A(B.a([B.p(v,v,A.i,v,v,new B.o(v,v,B.H(A.hC,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dN(B.p(v,v,A.i,v,v,new B.o(v,v,B.H(A.hC,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b5,A.j,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a_,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.asV("TAARIFA ZA WANANDOA"),A.ar,w.buy(),A.dh,w.TQ(0.9),A.dh,w.TQ(0.7),A.P,w.asV("TAMKO LA MAKUBALIANO"),A.hh,w.TQ(1),A.dh,w.TQ(0.95),A.P,w.asV("MASHAHIDI"),A.bd,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.aaJ.prototype={
B(d){return B.p5(new C.e0X(B.K(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acn.prototype={
B(d){var w,v,u,t,s,r=null,q=B.K(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.as.j(q?0.35:0.4),A.r,1),m=q?D.b3W:A.c,l=x.V,k=B.a([new B.a9(0,A.G,A.x.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.H(A.as.j(0.5),A.r,1)
l=B.a([new B.a9(0,A.G,A.x.j(0.14),A.dF,6)],l)
w=this.c
v=C.fF1(w.a)
if(v==null)v=A.d.gI(D.NT)
u=B.bg(v.f)
t=B.bg(v.r)
s=x.p
l=B.C(B.p(r,new B.fY(0.5625,new B.am(A.W,r,A.aX,A.q,B.a([B.c_(0,B.fU(C.fF0(v.d),A.C,r,r,A.cl,A.bP,!0,r,!1,r,r),0,0,0),new B.B(A.acJ,new C.beV(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.adG,r,r,r,r),1)
j=A.as.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:X.IJ,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.dh,B.d(w.c,r,2,A.a0,r,r,r,B.l(r,r,q?A.aA:D.aZr,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.i,r,r,new B.o(r,r,new B.c2(new B.ay(j,1,A.r,-1),A.V,A.V,A.V),r,r,r,A.n),r,r,r,r,D.ac3,r,r,r)],s),A.al,r,A.e,A.j,0,A.p),A.i,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.i,A.K,0,r,r,r,r,r,A.aa)}}
C.kA.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.YC.prototype={
S(){var w=$.as(),v=x.eF
return new C.aBZ(new B.ao(A.aq,w),new B.ao(new B.b9("NGMY",A.aY,A.aL),w),new B.cn(null,v),new B.cn(null,v),A.d.gI(D.a_o),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.r),A.L)}}
C.o1.prototype={}
C.aBZ.prototype={
gaPN(){var w,v,u=this
if(u.p1)w=new B.xQ(1,u.p2,0.9,u.p3).iQ().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aT.x1$.push(new C.eBc(w))},
p(){var w=this.d,v=$.as()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
W5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$W5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.vU().ky(0,"assets/images/ngmy_logo.png"),$async$W5)
case 7:q=e
p=J.fa(J.xA(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.fFT(new B.qB(p,1),o),$async$W5)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eA5(r,p))
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
return B.i($async$W5,v)},
NR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().l0(92,1800,A.ev),$async$NR)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$NR)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.fFT(new B.qB(p,1),n),$async$NR)
case 9:if(r.c==null){w=1
break}r.n(new C.eAs(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a5(l)
n=r.c
if(n!=null)n.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$NR,v)},
aXP(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aA=w.aK=w.av=w.au=w.Y=w.aZ=w.bn=w.y2=0
w.b_=null
w.aS=0.25
w.b7=null
w.bE=0.5
w.aQ=1
w.c9=w.bO=w.bf=0
w.cS=w.dd=!1},
aRj(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvd(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cT3)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvd(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvd(C.fDb(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvd(C.fDb(1-a0*0.5,n,n,n),w)}return a1?C.bvd(C.fDb(-1,255,255,255),w):w},
awr(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).kq(0,this.d.a.a),t=B.z(u,B.a2(u).k("E.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.y9(u,v,w)
this.dx.pr(new C.eAC(t),!0)
return t},
b_h(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.awr()
w=C.hHW(e.d.a.a,e.db)
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
return C.hEw(d,k,v,a0,j,e.gaPN(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cky(){return this.b_h(null)},
BU(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$BU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aT.gmA(),$async$BU)
case 3:w=4
return B.b(B.bK(A.eT,null,x.H),$async$BU)
case 4:w=5
return B.b($.aT.gmA(),$async$BU)
case 5:s=$.aT.ae$.x.h(0,t.r)
r=s==null?null:s.gb3()
if(!(r instanceof B.qR)){u=null
w=1
break}w=7
return B.b(r.mb(1080/r.gX(0).a),$async$BU)
case 7:w=6
return B.b(e.hv(A.fZ),$async$BU)
case 6:q=e
u=q==null?null:J.fa(A.dH.gaL(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$BU,v)},
a76(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a76=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.ezP(q))
t=4
w=7
return B.b(q.BU(),$async$a76)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cM.gcs().aF(p)
n=C.Ah(null,null,null,null,D.nw,6,!1,null,null,null,null,null,C.cx(),null,!1,null,"NGMY Quote",null,null,B.a([q.b_h(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).K(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a5(j)
l=q.c
if(l!=null)l.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.ezQ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a76,v)},
zm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.ezN(q))
t=4
w=7
return B.b($.aT.gmA(),$async$zm)
case 7:w=8
return B.b(B.bK(A.o_,null,x.H),$async$zm)
case 8:w=9
return B.b($.aT.gmA(),$async$zm)
case 9:k=$.aT.ae$.x.h(0,q.f)
p=k==null?null:k.gb3()
if(!(p instanceof B.qR))throw B.O("The picture is not ready yet.")
w=10
return B.b(p.mb(1080/p.gX(0).a),$async$zm)
case 10:o=e
w=11
return B.b(o.hv(A.fZ),$async$zm)
case 11:n=e
if(n==null)throw B.O("Could not make the picture.")
w=12
return B.b(Ad.aL7(J.fa(A.dH.gaL(n)),"ngmy_quote.png","image/png"),$async$zm)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.E(x.q).f
k.P(B.aZ(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a5(i)
k=q.c
if(k!=null)k.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.ezO(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zm,v)},
c84(){var w=this.p4
w.toString
return B.co(new C.eAl(this,w))},
aTA(d,e){var w=null
return B.bn(w,w,w,w,w,D.era,w,w,!0,new B.b0(4,B.m(16),S.HU),w,w,w,w,w,D.Tw,!0,w,w,w,w,new B.b0(4,B.m(16),D.aPt),w,w,w,w,w,w,w,w,Z.BD,e,w,w,w,w,w,w,w,D.ewa,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wL(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.U(e,A.b0,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aJN,w,w,w))
return new B.B(D.bde,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aTz(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.X,!0,w,d,A.i,w,0,w,w,w,w,w,A.jg),A.i,w,w,new B.o(D.Tw,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uH(d){return this.aTz(d,A.bC)},
nv(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.xi:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.U(e,q?A.c:A.j8,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j8,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.de(r,B.A(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b7,new B.o(w,r,u,v,r,p,A.n),A.hE,r,r,r,A.Dn,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
acC(d,e,f){return this.nv(d,null,e,f)},
at1(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b0.j(0.28):A.c.j(0.05),t=g?A.eJ:A.bG,s=x.p
v=B.a([B.de(w,d,w,w,A.b7,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hE,w,e,w,new B.L(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.aw,B.d(f,w,1,A.a0,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a8(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aTD(d,e,f,g,h,i){return this.at1(d,e,f,g,h,5,i)},
jI(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.C(B.d(d,u,u,u,u,u,u,D.eoh,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dL4,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eAy(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aIY,u,u,u),A.i,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Vx,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.as0(w).cxX(A.b0,A.bG,A.b0.j(0.2),A.c,D.e8L,4)
return new B.B(A.w9,B.u(B.a([s,B.a7u(B.mq(u,u,u,g,f,new C.eAz(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aeA(d,e,f,g,h,i){return this.jI(d,e,f,g,h,null,i)},
af_(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.J)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.bg(u)
r=d==u
q=r?A.c:A.be
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.br6:o
n.push(B.aJ(o,B.p(o,t,A.i,o,o,new B.o(s,o,new B.c2(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eAB(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.cf(A.bI,n,A.by,10,10)},
bD5(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_o
else{v=x.a8
w=B.z(new B.a3(D.a_o,new C.ezF(o),v),v.k("E.E"))}v=B.aI(n,A.T,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aTA("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ezG(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a44,!0,A.a5,n,A.am,n,n,n,n)
u=B.aI(n,A.T,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aTA("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.ad,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ezH(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.dj,!0,A.a5,n,A.am,n,n,n,n)
t=o.wL("DESIGNS",A.rL)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cwS[q]
r.push(new B.B(A.lh,o.acC(p,o.x===p,new C.ezI(o,p)),n))}return B.u(B.a([v,A.U,u,t,B.ce(B.A(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.b_),A.ac,new B.a8(n,118,B.hF(n,new C.ezJ(o,w),w.length,n,n,A.b_,new C.ezK(),!1),n),A.P,o.aTz(B.u(B.a([B.iu(A.b0,n,n,A.ag,!0,new C.ezL(o),n,D.eHh,n,D.eE1,o.k3),B.iu(A.b0,n,n,A.ag,!0,new C.ezM(o),n,n,n,D.eBq,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acw)],s),A.F,n,A.e,A.j,0,A.p)},
csF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.awr()
if(a7.length===0)return a5.uH(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.GX,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.J)(a7),++s){r=a7[s]
v.push(t)
q=B.ad('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.al(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gai(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("cj.E"))
A.d.fu(m)
l=m.length!==0&&A.d.e7(m,new C.eB1(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eB8(a5)
j=new C.eBa()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.GX,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b2(11,11)
f=u.q(0,h)?A.b0.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eJ:A.bG
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a_
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.i,a6,a6,new B.o(f,a6,new B.c2(d,d,d,d),new B.bx(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.JT,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eB2(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uH(B.cf(A.bI,o,A.tE,6,6))
i=B.a([a5.nv("All words",K.agx,!1,new C.eB3(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.acC("Sentence "+a3,!1,new C.eB4(a5,a7,v,a2)))
a2=a3}}i.push(a5.acC("Clear picks",!1,new C.eB5(a5)))
i=B.cf(A.bI,i,A.by,8,8)
g=a5.wL("SIZE OF THE PICKED WORDS",D.afZ)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cXW[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eB6(e,k)
f.push(a5.acC(a0.b,l===a4,e))}return B.u(B.a([q,A.U,o,A.U,i,g,B.cf(A.bI,f,A.by,8,8),A.U,a5.nv("Make every word normal",A.mD,!1,new C.eB7(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
co2(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bk6,B.d(A.d.kS(D.ar1,new C.eAL(q)).b,p,p,p,p,p,p,D.epM,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.co(new C.eAM(q)),l=q.wL("HIGHLIGHT BEHIND THE WORDS",A.Xn),k=q.p1?-1:q.k4
k=q.af_(k,new C.eAN(q),D.cGl)
w=q.p1
v=w?A.c:A.be
n=B.a([n,A.U,m,l,B.cf(A.bI,B.a([k,B.aJ(p,B.p(p,D.bu4,A.i,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.ejZ,A.a6),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eAQ(q),p,p,p,p,p,p,!1,A.ae)],o),A.tE,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.GX,p,p,p)],o)
if(q.gaPN()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aeA("Colour",l,0,360,new C.eAR(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aeA("Shade",k,0.15,0.9,new C.eAS(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jI("Strength",l,0.15,1,new C.eAT(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.U,q.uH(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wL("LOOK",A.A8))
m=B.a([q.nv("Bold",I.afW,q.fy,new C.eAU(q)),q.nv("Italic",I.afX,q.go,new C.eAV(q))],o)
for(u=0;u<3;++u){l={}
k=D.cxX[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.xi:p
w=w?p:A.c.j(0.07)
s=new B.b2(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.U(k.b,A.c,p,p,p,20),A.i,p,p,new B.o(w,p,new B.c2(r,r,r,r),new B.bx(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eAW(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.cf(A.bI,m,A.tE,8,8))
n.push(q.wL("COLOUR",A.nn))
n.push(q.af_(q.fx,new C.eAX(q),D.cQl))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.GX,p,p,p))
n.push(q.wL("SIZE AND PLACE",A.Eh))
m=q.fr
m=q.jI("Text size",m,0.5,1.6,new C.eAO(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uH(B.u(B.a([m,q.jI("Up / down",l,0.12,0.5,new C.eAP(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
c85(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b0.j(0.6),A.r,1.6)
u=B.a([A.b0.j(0.18),A.bB.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bza,A.i,p,p,D.aSj,p,62,p,p,p,p,p,62),A.aC,D.eF8,A.ar,D.eJg],x.p),A.m,p,A.e,A.j,0,A.p),A.i,p,p,new B.o(D.Tw,p,v,w,p,new B.a7(A.a1,A.a7,A.w,u,p,p),A.n),p,p,p,p,D.bgn,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaTC(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a8(46,62,B.fU(o,A.C,120,p,A.cl,A.bP,!1,p,!1,p,p),p),A.ap),A.bb,B.C(B.u(B.a([D.eEJ,A.P,B.cf(A.bI,B.a([q.nv("Change",A.jZ,!1,q.gaTC()),q.nv("Remove",A.e4,!1,new C.eAp(q))],w),A.by,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cNb[t]
u.push(q.nv(s.b,s.a,q.at===t,new C.eAq(q,t)))}u=B.cf(A.bI,u,A.by,8,8)
r=q.at
A:{if(0===r){s=q.bT7(o)
break A}if(1===r){s=q.bSd()
break A}if(2===r){s=q.bz1()
break A}if(3===r){s=q.bF6()
break A}s=q.bB4()
break A}return B.u(B.a([v,A.ac,u,A.aC,s,A.U,new B.bE(A.a1,p,p,q.nv("Reset the whole picture",A.mD,!1,new C.eAr(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bT7(d){var w=this,v=x.p
return B.u(B.a([B.cf(A.bI,B.a([w.nv("Auto enhance",E.WZ,!1,new C.eAi(w)),w.nv("Make words easy to read",A.o9,!1,new C.eAj(w))],v),A.by,8,8),A.aC,B.co(new C.eAk(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bSd(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jI("Exposure",n,-1.5,1.5,new C.ezX(o),0,A.k.ab(n,1))
w=o.RG
w=o.jI("Brightness",w,-0.5,0.5,new C.ezY(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jI("Contrast",v,0.4,2,new C.ezZ(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jI("Fade",u,0,1,new C.eA_(o),0,""+A.k.U(u*100))
t=o.av
t=o.jI("Spotlight",t,0,1,new C.eA0(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jI("Darken",s,0,0.85,new C.eA1(o),0,""+A.k.U(s*100))
r=o.aZ
r=o.jI("Vignette",r,0,0.9,new C.eA2(o),0,""+A.k.U(r*100))
q=o.aA
q=o.jI("Shade behind words",q,0,0.85,new C.eA3(o),0,""+A.k.U(q*100))
p=o.aK
return o.uH(B.u(B.a([n,w,v,u,t,s,r,q,o.jI("Shade top & bottom",p,0,0.85,new C.eA4(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bz1(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jI("Colour strength",q,0,2.2,new C.ezi(s),1,""+A.k.U(q*100))
w=s.to
w=s.jI("Warmth",w,-1,1,new C.ezj(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jI("Tint",v,-1,1,new C.ezk(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uH(B.u(B.a([q,w,v,s.jI("Shift colours",u,-180,180,new C.ezl(s),0,""+A.k.U(u)+"\xb0"),new B.bE(A.a1,r,r,s.nv("Negative",D.bp5,s.y1,new C.ezm(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wL("COLOUR WASH",A.KO)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.apO)
t=B.a([u,v,s.af_(w,new C.ezn(s),q),A.P],t)
if(s.b_!=null){q=s.aS
t.push(s.uH(s.aeA("Wash strength",q,0,0.9,new C.ezo(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bF6(){var w,v,u,t,s,r=this,q=r.y2
q=r.jI("Blur",q,0,24,new C.ezR(r),0,A.o.u(A.k.U(q)))
w=r.bn
w=r.jI("Soft focus",w,0,1,new C.ezS(r),0,""+A.k.U(w*100))
v=r.au
u=x.p
v=r.uH(B.u(B.a([q,w,r.jI("Film grain",v,0,1,new C.ezT(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wL("LIGHT LEAK",H.afU)
q=r.b7
t=B.a([null],x.Z)
s=x.r
A.d.v(t,B.dg(D.apO,0,B.dK(8,"count",s),s))
u=B.a([v,w,r.af_(q,new C.ezU(r),t),A.P],u)
if(r.b7!=null){q=r.bE
u.push(r.uH(r.aeA("Leak strength",q,0,1,new C.ezV(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bB4(){var w,v,u,t,s=this,r=s.aQ
r=s.jI("Zoom",r,1,3,new C.ezs(s),1,""+A.k.U(r*100)+"%")
w=s.bf
w=s.jI("Left / right",w,-1,1,new C.ezt(s),0,""+A.k.U(w*100))
v=s.bO
v=s.jI("Up / down",v,-1,1,new C.ezu(s),0,""+A.k.U(v*100))
u=s.c9
t=x.p
return B.u(B.a([s.uH(B.u(B.a([r,w,v,s.jI("Turn",u,-180,180,new C.ezv(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.U,B.cf(A.bI,B.a([s.nv("Turn 90\xb0",D.bqH,!1,new C.ezw(s)),s.nv("Flip sideways",A.E8,s.dd,new C.ezx(s)),s.nv("Flip upside down",A.E8,s.cS,new C.ezy(s))],t),A.by,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bT_(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eAd(p),m=x.p,l=B.A(B.a([D.bkc,p.nv("Reset",A.mD,!1,new C.eA9(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.GX,o,o,o),j=p.wL("SHAPE",A.ah_),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Ao[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aTD(n.$2(t,p.cy),62,u.b,s===t,new C.eAa(v,p),62))}}i=B.cf(A.bI,i,A.by,8,8)
v=p.wL("RING",A.rH)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Aj[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aTD(n.$2(p.cx,t),62,r.b,q===t,new C.eAb(s,p),62))}u=B.cf(A.bI,u,A.by,8,8)
s=p.CW
return B.u(B.a([l,A.aw,k,j,i,v,u,A.ac,p.uH(p.jI("Size",s,0.12,0.4,new C.eAc(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aWr(d){return new B.a8(null,d,new B.fY(0.5625,B.co(new C.eAv(this)),null),null)},
cnm(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<5;++w){v=this.as===w
u=v?G.xi:q
t=new B.b2(14,14)
s=D.cxQ[w]
r=v?A.c:A.aA
r=B.U(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bI(1,A.bt,B.aJ(A.c5,B.de(q,B.u(B.a([r,A.dh,new B.pK(A.e8,A.C,A.i,new B.w(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b7,new B.o(q,q,q,new B.bx(t,t,t,t),q,u,A.n),D.bca,q,q,q,A.hq,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eAE(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.i,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bed,A.ni,q,q,q)},
aKT(){var w,v,u=this,t=null,s=u.cnm(),r=u.as
A:{if(0===r){w=u.bD5()
break A}if(1===r){w=u.csF()
break A}if(2===r){w=u.co2()
break A}if(3===r){w=u.c85()
break A}w=u.bT_()
break A}v=x.p
return B.bw(A.pI,B.eb(B.u(B.a([s,B.C(B.cX(B.a([w],v),t,D.bfd,t,t,A.af,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.a9u,!0),A.ap)},
aHc(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gbZM(),p=B.m(16)
q=B.C(B.aJ(r,B.p(r,D.e9f,A.i,r,r,new B.o(A.c.j(0.08),r,B.H(A.be,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbEI()
w=B.m(16)
v=B.a([new B.a9(0,A.G,A.bB.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.edJ)
else t.push(D.btb)
t.push(A.ab)
t.push(D.blz)
return B.p(r,B.A(B.a([q,A.av,B.C(B.aJ(r,B.p(r,B.A(t,A.m,r,A.b5,A.j,0,r,r),A.i,r,r,new B.o(r,r,r,w,v,G.xi,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.i,r,r,D.aRu,r,r,r,r,G.ack,r,r,r)},
aTB(){var w=null
return new B.B(R.Vt,B.A(B.a([B.aF(w,w,w,w,A.mF,w,w,w,new C.ezW(this),w,w,w,w,w,w),D.eUq,A.bd,D.bBo],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cg(w,A.ab3,B.br(!0,B.co(new C.eBb(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bbc.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f9()
m.e2(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.a1()
t=B.T()
s=this.b
t.r=A.c.j(0.16*s).gt(0)
r=B.T()
r.r=A.x.j(0.2*s).gt(0)
for(s=d.a,q=0;q<u;++q){p=m.ah()*w
o=m.ah()*v
n=((q&1)===0?t:r).M()
s.drawRect(B.cz(new B.af(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.qN.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lG.prototype={}
C.ym.prototype={
ad(){var w=this
return B.D(["at",w.a.a4().aa(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.ne.prototype={}
C.v2.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5B.prototype={}
C.ao3.prototype={}
C.Z5.prototype={
S(){return new C.aDT(new B.ao(A.aq,$.as()),B.k4(!0,null,!0,!0,null,null,!1),D.dcJ,B.a([],x.s),B.eM([D.FW],x.K))}}
C.aDT.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.f.p()
this.a2()},
Yy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$Yy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().AS(90,700,700,A.ev),$async$Yy)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$Yy)
case 8:p=e
if(r.c!=null)r.n(new C.eH6(r,p,q))
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
return B.i($async$Yy,v)},
YB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$YB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aCz(78,n,1100,1100),$async$YB)
case 7:q=e
if(J.ch(q)){w=1
break}p=B.bi(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.aa(p)>=20){w=9
break}w=10
return B.b(o.fd(),$async$YB)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c5(l,".png"))k="image/png"
else k=A.a.c5(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cM.gcs().aF(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eH7(r,p))
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
return B.i($async$YB,v)},
aYp(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fU(A.cw.aF(A.d.gai(d.split(","))),A.C,u,u,A.cl,A.bP,!0,u,!1,u,u)
return w}catch(v){}return D.bbc},
bT5(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cjv(C.ffC(w,this.aYp(d),f),g)},
a9n(d,e,f,g,h){var w=null,v=new C.eH4(f,e),u=new C.eH5(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b0.j(0.6),A.r,1)
if(p)p=new B.a8(34,30,new B.am(A.W,w,A.a9,A.i,B.a([B.at(B.U(f?A.Ek:A.KB,A.c1,w,w,w,26),w,w,w),D.dPs],x.p),w),w)
else p=this.bT5(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.p(w,B.A(B.a([B.C(B.at(p,w,w,w),1),D.bsS],x.p),A.m,w,A.e,A.j,0,w,w),A.i,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mx,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH3(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.i,t,0,w,w,w,w,w,A.aa)},
aRp(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bw(B.m(8),B.fU(A.cw.aF(A.d.gai(h.split(","))),A.C,p,p,A.cl,A.bP,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.br.j(0.6),A.r,1)
q=o
n=q==null?B.U(d,A.eY,p,p,p,20):q
n=B.a([n,A.ab,B.C(B.d(e,p,1,A.a0,p,p,p,A.a49,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yg,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.i,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.mt,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.i,v,0,p,p,p,p,p,A.aa)},
a5F(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a5F=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fiX(),$async$a5F)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eGN(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a5(n)
if(r.c!=null)r.n(new C.eGO(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a5F,v)},
aaY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aaY=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eGQ(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eGR(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eGS(r))
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
return B.b(C.fel(q,r.cx,j,new C.aYd(r.z,r.Q,r.as,r.at),new C.eGT(r),i,m,p,k),$async$aaY)
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
if(p!=null)B.a6(p,!1).K(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a5(e)
if(r.c!=null)r.n(new C.eGU(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.em,g).w
g=B.aG(d,A.bM,g).w
w=B.at(B.p(h,h,A.i,h,h,new B.o(A.be,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aJ(h,B.p(h,D.bvZ,A.i,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.a9(2,A.G,A.br.j(0.5),A.J,24)],v),D.bEu,A.a6),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eHk(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yg,h,h,h,i.ax?h:new C.eHl(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbuf()
v=B.a([new B.a9(0,A.G,A.b0.j(0.45),A.J,10)],v)
s.push(B.hJ(B.aD(!1,A.X,!0,h,B.aH(!1,h,!0,B.p(h,B.U(i.e==null?A.um:A.hr,A.c,h,h,h,20),A.i,h,h,new B.o(h,h,h,h,v,E.uD,A.a6),h,40,h,h,h,h,h,40),A.cD,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.i,A.K,0,h,h,A.cD,h,h,A.aa),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aI(h,A.T,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bn(h,h,h,h,h,h,h,h,!0,new B.b0(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b0(4,B.m(16),D.aP0),h,h,h,h,h,h,h,h,T.Qs,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.B(A.lh,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.ad,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJi,!0,A.a5,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eHm(i)
s=i.aRp(A.kV,q,r,i.gc8w(),s)
r=i.z
r=B.C(i.a9n(new C.eHo(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.C(B.u(B.a([s,A.ar,B.A(B.a([r,A.bp,B.C(i.a9n(new C.eHp(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eHq(i)
s=i.aRp(A.wE,r,p,i.gc8E(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.C(i.a9n(new C.eHr(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aC,D.eKp,A.aw,D.eN6,A.bv,u,A.P,D.eLC,A.aC,v,A.bv,B.A(B.a([q,A.av,B.C(B.u(B.a([s,A.ar,B.A(B.a([p,A.bp,B.C(i.a9n(new C.eHs(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.eOJ],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b4X,A.r,1)
w=C.ae8(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.U,new B.bE(A.a1,h,h,B.p(h,B.A(B.a([D.bx2,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.euX,h,h,h),B.aH(!1,h,!0,D.dLi,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eHt(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.i,h,h,new B.o(D.b_8,h,u,v,h,h,A.n),h,h,h,h,D.bdS,h,h,h),h)],t))}o.push(A.bv)
o.push(D.eC7)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cIh[m]
v=i.ch===l?A.b0:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bI(1,A.bt,new B.B(A.kr,B.aJ(h,B.de(A.C,new B.w(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b7,new B.o(v,h,new B.c2(k,k,k,k),h,h,h,A.a6),A.eC,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eHu(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.eSN)
o.push(A.P)
o.push(B.co(new C.eHv(i)))
o.push(A.bv)
o.push(D.eIH)
o.push(A.P)
w=B.a([i.b04("auto","Let AI choose",A.dP,A.Nm)],t)
for(v=x.O,m=0;m<11;++m){j=D.uI[m]
u=j.d
w.push(i.b04(j.a,j.b,j.c,B.a([B.bg(A.d.gI(u).a),B.bg(A.d.gI(u).b)],v)))}o.push(B.cf(A.bI,w,A.by,8,8))
o.push(A.aT)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.br.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.iu(h,A.br,h,h,h,new C.eHn(i),D.bsj,D.eS4,h,D.eEd,i.r),A.i,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aC,B.d(w,h,h,h,h,h,h,D.aIz,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gbZQ()
v=B.fe(h,h,A.b0,A.b0.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.V),h,h,h,h,h)
u=i.ax
t=u?D.edz:A.Ey
o.push(new B.a8(h,54,B.l9(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oq,h,h,h),w,v),h))
return new B.B(new B.L(0,0,0,f.f.d),B.p(h,B.br(!0,B.ce(B.u(o,A.al,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ub,h,h,A.af),!0,!1,A.ag,!0,!1),A.i,h,new B.aV(0,680,0,g.a.b*0.92),D.a6K,h,h,h,h,h,h,h,h),h)},
bGa(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eGV(this,p,d)
if(d===D.AZ)return new C.aAy(p,o,q)
w=B.m(16)
v=p?E.uD:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.U(p?A.ei:C.his(d),A.c,q,q,q,20)
r=C.hit(d)
return B.aJ(q,B.de(q,B.u(B.a([s,A.aw,B.f_(A.C,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a_,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.i,A.e8)],x.p),A.m,q,A.b5,A.j,0,A.p),q,q,A.b7,new B.o(u,q,t,w,q,v,A.n),A.hE,q,64,q,A.hb,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b04(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ak:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.U(f,A.c,v,v,v,14),A.i,v,v,new B.o(v,v,v,v,v,new B.a7(A.a1,A.a7,A.w,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aJ(v,B.de(v,B.A(B.a([w,L.GG,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a_,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b7,new B.o(s,v,r,t,v,v,A.n),A.eC,v,v,v,L.ady,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eH9(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Z4.prototype={
S(){return new C.aDS(new B.ao(A.aq,$.as()))}}
C.aDS.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
aaZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aaZ=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.aa(a0)<3){r.n(new C.eGG(r))
w=1
break}B.eL()
r.n(new C.eGH(r))
t=4
q=C.hIP(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hIz(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eGI(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).K(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fCS()
f=$.Bf.h(0,k.a)
o=f==null||J.ch(f)?null:J.fl(f)
if(o==null){r.n(new C.eGJ(r))
w=1
break}n=C.hIx(o,r.a.c)
C.hIt(r.a.c.a)
$.fCa=!0
k=r.c
if(k!=null)B.a6(k,!1).K(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fFq(j)
h=C.fFr(r.a.c)
e=C.fFs(r.a.c)
w=7
return B.b(C.bxm(k,r.a.c.a,j,h,new C.eGK(r),i,e,a0),$async$aaZ)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).K(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a5(a1)
if(r.c!=null)r.n(new C.eGL(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.em,i).w
i=B.aG(d,A.bM,i).w
w=B.at(B.p(j,j,A.i,j,j,new B.o(A.be,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.ahi,A.i,j,j,D.aRa,j,34,j,j,j,j,j,34),A.av,D.bkJ],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,T.aJ1,j,j,j)
s=A.c.j(0.05)
s=B.aI(j,A.T,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bn(j,j,j,j,j,j,j,j,!0,new B.b0(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b0(4,B.m(16),Aj.a6d),j,j,j,j,j,j,j,j,T.Qs,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.ad,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJi,!0,A.a5,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cEX[q]
o=A.c.j(0.06)
n=k.e?j:new C.eGM(k,p)
r.push(B.od(j,o,new B.w(p,j,An.Qu,j,j,j,j,j,j,j,j,j),j,n,j,S.HU,j))}w=B.a([w,A.aC,u,A.ar,t,A.aC,s,A.U,B.cf(A.bI,r,A.by,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aIz,j,j,j)],v))
w.push(A.aT)
u=k.e
t=u?j:k.gbZR()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.br.j(0.5),A.fn.j(0.5)],x.O):D.cee
o=B.a([new B.a9(0,A.G,A.br.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dLf:D.bwC
n=B.p(j,l,A.i,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.X,!0,j,B.aH(!1,s,!0,B.eq(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jp,j,j,j)],v),A.m,j,A.b5,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a1,A.a7,A.w,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.i,A.K,0,j,j,j,j,j,A.aa))
return new B.B(new B.L(0,0,0,h.f.d),B.p(j,B.br(!0,B.ce(B.u(w,A.al,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ub,j,j,A.af),!0,!1,A.ag,!0,!1),A.i,j,new B.aV(0,680,0,i.a.b*0.85),D.a6K,j,j,j,j,j,j,j,j),j)}}
C.aYd.prototype={}
C.aAy.prototype={
S(){return new C.bfN(null,null)}}
C.bfN.prototype={
gat2(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.oS,null,1,null,v)
w.cF(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
p(){this.gat2().p()
this.bop()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gat2(),new C.e0m(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.bdp.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cKd[s]
p=q.a*v
q=q.b*u
$.a1()
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.r=D.vZ.j(0.25+r*0.6).gt(0)
n=o.M()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.M()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.M()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
ao(d){return d.b!==this.b}}
C.aoD.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Xv.prototype={
S(){return new C.ay0()}}
C.ay0.prototype={
gaeX(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ael(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gz6(){var w=this.e
return w===$?this.e=C.fFq(this.a.c).q(0,D.AZ):w},
a5s(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5s=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.d9S(s))
u=3
r=A.d.kS(D.uI,new C.d9T(s))
q=B.d7(C.fFq(s.a.c),x.K)
l=q
J.hB(l,D.AZ)
p=l
if(s.gz6())J.ci(p,D.AZ)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gz6()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fFr(i.c)
g=C.fFs(s.a.c)
w=6
return B.b(C.bxm(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5s)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ael(q,s.gaeX())
f=q==null?null:q.b
n=f==null?s.gaeX():f
if(!J.y(n,r.a)&&!s.gz6())throw B.O("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).K(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a5(d)
if(s.c!=null)s.n(new C.d9U(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5s,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aP:A.ai,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.C(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bw,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.d9X(d)
e=B.A(B.a([f,B.aF(n,n,n,n,B.U(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uI[w]
u=o.gaeX()
t=o.f?n:new C.d9Y(o,v)
f.push(new C.bo0(v,u===v.a,t,n))}f=B.lW(1.25,f,3,10,10,n,A.dJ,!0)
u=B.m(18)
t=o.gz6()?D.bGZ:n
if(o.gz6())s=n
else s=m?A.bh:A.bN
r=B.U(A.dP,o.gz6()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gz6()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.C(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gz6()?A.ak:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gz6()
f=B.a([f,A.aC,B.p(n,B.A(B.a([r,A.av,q,B.fA5(n,A.c,n,A.bJ,!1,A.z,n,n,n,n,n,n,o.f?n:new C.d9Z(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acn,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.U,B.d(u,n,n,n,n,n,n,D.eve,n,n,n)],g))
f=B.ce(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.JH,n,n,A.af)
u=o.f?n:o.gbtf()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b5(B.m(16),A.V),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.B(D.bgQ,e,n),new B.dp(1,A.cj,f,n),new B.B(A.Dv,new B.a8(1/0,50,B.bJ(B.eq(B.at(o.f?A.qI:D.eKR,n,n,n),n,new B.o(n,n,n,s,n,D.bFE,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.i,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rv,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bo0.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.bg(s),B.bg(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.a9(0,A.G,B.bg(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bE(A.kH,w,w,B.U(v.c,A.ak,w,w,w,18),w),new B.bE(A.l7,w,w,B.d(v.b,w,w,w,w,w,w,D.evc,w,w,w),w)],x.p)
if(q)v.push(D.aN6)
return B.aJ(w,B.de(w,new B.am(A.W,w,A.a9,A.q,v,w),w,w,A.b7,new B.o(w,w,p,t,s,new B.a7(A.ax,A.aE,A.w,r,w,w),A.n),A.eC,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e0j.prototype={
aAd(d,e,f){return e+"@"+A.a.aU(A.o.fC(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vA(d,e){return this.aAd(0,e,null)}}
C.aIn.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aY9.prototype={
B(d){var w,v,u=null,t=C.fEi(this.c)
if(t==null)w=D.b9Y
else{w=B.aG(d,u,x.w).w.cxp(D.bdr,D.ecO)
v=this.d
w=B.tI(B.ec(B.al5(!1,t,!1,v,!1,390),!v,u),w)}return B.f_(A.C,new B.a8(416,870,new C.bho(w,u),u),A.i,A.dp)}}
C.bho.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cUD[w]
u=new B.b2(3,3)
s.push(new B.cE(v.a,v.b,t,t,t,t,B.p(t,t,A.i,t,t,new B.o(t,t,t,new B.bx(u,u,u,u),t,D.ajb,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cVH[w]
u=new B.b2(3,3)
s.push(new B.cE(t,v.a,-3,t,t,t,B.p(t,t,A.i,t,t,new B.o(t,t,t,new B.bx(u,u,u,u),t,D.ajb,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.c_(0,B.bQ(t,new B.o(t,t,t,B.m(64),D.cvK,D.bEd,A.n),A.ba),0,0,0))
s.push(B.c_(3,B.bQ(t,new B.o(A.x,t,t,B.m(61),t,t,A.n),A.ba),3,3,3))
s.push(B.c_(13,B.bw(B.m(51),B.eb(this.c,A.x,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.at(B.p(D.aNi,B.p(t,t,A.i,t,t,D.aRs,t,11,t,t,t,t,t,11),A.i,t,t,new B.o(A.x,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.c_(13,B.ec(B.bw(B.m(51),D.bbi,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.ec(B.at(B.p(t,t,A.i,t,t,new B.o(A.ak,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.W,t,A.a9,A.i,s,t)}}
C.kU.prototype={
oJ(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cx(),f=C.cx(),e=m.r
f=C.eg(A.L,!1,e.l(),A.ay,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.b6,j,2,"Your Presentation Title",0,0,"",D.m3,D.cG,0.84,0.08,0.26)
w=C.cx()
v=m.w
w=C.eg(A.L,!1,v.l(),A.ay,"",k,20,A.bl,A.a_,"",0.12,w,l,"","",0,!1,"",0,D.b6,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.d7,D.cG,0.76,0.12,0.56)
u=C.cx()
t=m.d
s=x.u
t=C.qO(i,l,0,0,B.a([f,w,C.eg(A.bn,!1,4279310375,A.ay,"",t.j(0.8).l(),24,A.bl,A.a_,"",0.006,u,l,"","",0,!1,"",0,D.fb,t.l(),3,"",0,0,"",D.ca,D.eN,0.3,0.35,0.72)],s),C.cx(),D.m2,"","","Welcome",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b6,j,2,"Agenda",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
w=C.cx()
w=C.qO(i,l,0,0,B.a([u,C.eg(A.bn,!0,v.l(),A.ay,"",k,22,A.bl,A.a_,"",0.6,w,l,"","",0,!1,"",0,D.b6,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.tb,D.cG,0.8,0.1,0.26)],s),C.cx(),D.m2,"","","Agenda",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b6,j,2,"Main Idea",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
f=C.cx()
f=C.qO(i,l,0,0,B.a([u,C.eg(A.bn,!0,v.l(),A.ay,"",k,21,A.bl,A.a_,"",0.62,f,l,"","",0,!1,"",0,D.b6,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.ca,D.cG,0.8,0.1,0.26)],s),C.cx(),D.m2,"","","Key Point 1",D.d7)
u=C.cx()
u=C.eg(A.bn,!1,e.l(),A.ay,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.b6,j,2,"Compare & Contrast",0,0,"",D.ca,D.cG,0.84,0.08,0.08)
r=C.cx()
r=C.eg(A.bn,!0,v.l(),A.ay,"",k,18,A.bl,A.a_,"",0.62,r,l,"","",0,!1,"",0,D.b6,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cG,0.4,0.08,0.24)
q=C.cx()
q=C.qO(i,l,0,0,B.a([u,r,C.eg(A.bn,!0,v.l(),A.ay,"",k,18,A.bl,A.a_,"",0.62,q,l,"","",0,!1,"",0,D.b6,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.ca,D.cG,0.4,0.52,0.24)],s),C.cx(),D.m2,"","","Key Point 2",D.d7)
r=C.cx()
r=C.eg(A.L,!1,e.l(),A.ay,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.b6,j,2,h,0,0,"",D.d7,D.cG,0.8,0.1,0.32)
e=C.cx()
p=C.Ah(l,l,l,l,D.AV,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qO(i,l,0,0,B.a([r,C.eg(A.L,!1,v.l(),A.ay,"",k,22,A.bl,A.a_,"",0.1,e,l,"","",0,!1,"",0,D.b6,j,2,"Questions?",0,0,"",D.ca,D.cG,0.7,0.15,0.58)],s),C.cx(),D.m2,"","",h,D.d7)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.J)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.D9.prototype={
bI(d){return this.e.$1(d)}}
C.em.prototype={}
C.iK.prototype={}
C.D0.prototype={
gaFK(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ae8(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a0M(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.D0(v,u,t,d==null?w.d:d)},
Eb(d){return this.a0M(null,d,null,null)},
az0(d){return this.a0M(null,null,null,d)},
cxn(d,e){return this.a0M(d,e,null,null)},
b52(d){return this.a0M(d,null,null,null)},
b59(d){return this.a0M(null,null,d,null)}}
C.Lt.prototype={
S(){return new C.bf9(new B.eI(0,$.as()),null,null)}}
C.bf9.prototype={
Z(){var w,v=this
v.a0()
w=v.qL(new C.dK4(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.ki(0)
else v.d.st(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.as()
w.O$=0
this.bnS()},
B(d){var w=C.ae8(this.a.c.a)
if(w==null)w=A.d.gI(D.ES)
return B.co(new C.dK3(this,w,C.fTW(this.a.c.d)))}}
C.bmC.prototype={
B(d){return B.ni(A.Sa,this.e,new C.eFU(this,A.k.J(this.d*0.35,1.6)-0.3))}}
C.bai.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aNm(d,e,v)
break
case"confetti":w.bzv(d,e,v)
break
case"crown":w.bB5(d,e,v)
break
case"aurora":w.buj(d,e,v)
break
case"champagne":w.bxq(d,e,v)
break
case"diamonds":w.bDe(d,e,v)
break
case"starburst":w.cld(d,e,v)
break
case"balloons":w.bux(d,e,v)
break
case"galaxy":w.bHR(d,e,v)
break
case"redcarpet":w.ccz(d,e,v)
break
case"coins":w.byU(d,e,v)
break
case"lanterns":w.bRM(d,e,v)
break
case"hearts":w.bPt(d,e,v)
break
case"petals":w.c7Y(d,e,v)
break
case"butterflies":w.bwu(d,e,v)
break
case"neon":w.bVu(d,e,v)
break
case"disco":w.bDp(d,e,v)
break
case"sunrise":w.cmE(d,e,v)
break
case"pearls":w.c71(d,e,v)
break
case"snow":w.ckV(d,e,v)
break
case"laurel":w.bRS(d,e,v)
break
case"ribbons":w.cf0(d,e,v)
break
case"kente":w.bRB(d,e,v)
break
case"trophy":w.cq8(d,e,v)
break
case"shooting":w.ciP(d,e,v)
break
case"bokeh":w.buO(d,e,v)
break
case"orbits":w.c4M(d,e,v)
break
case"flowers":w.bH9(d,e,v)
break
case"music":w.bVf(d,e,v)
break
case"mandala":w.bTH(d,e,v)
break
case"sparklers":w.cl3(d,e,v)
break
case"city":w.byd(d,e,v)
break}},
qD(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a1()
v=B.T()
v.r=g.j(A.k.D(h,0,1)).gt(0)
v.a=A.mW
u=new B.b_(w.r,A.au,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.N(new B.bj(w,s))
u.N(new B.dj(w,t,w+f,t))
u.N(new B.dj(w,t,w,t+f))
u.N(new B.dj(w,t,w-f,t))
u.N(new B.dj(w,t,w,s))
u.N(new B.bX())
d.b4(u,v)
d.aw(e,f*0.18,v)},
lb(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cL(q,v)*2.5)+C.cL(q,u)*6.28)+1)/2
this.qD(d,new B.v(C.cL(q,t)*o,C.cL(q,s)*n),m*(0.006+0.014*C.cL(q,r))*(0.5+p),h,p*p)}},
aNm(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lb(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bJ,A.aZ],w),B.a([A.i3,A.bB],w),B.a([A.eo,A.b3],w),B.a([A.c,A.as],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bK(k/2.8)
i=A.k.J(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cL(h,1))
f=g+c0*(C.cL(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cL(h,3))
d=v[Math.abs(A.o.J(h,4))]
if(i<0.22){a0=B.kZ(new B.v(g,c1),new B.v(f,e),A.cm.aq(0,i/0.22))
a0.toString
$.a1()
a1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a1.saz(new B.a7(A.a1,A.a7,A.w,B.a([d[0].j(0),d[0]],w),null,null).aB(0,B.qQ(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bZ
a2=B.kZ(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.M()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.gt(0)
a3=a2.M()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cm.aq(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cL(h,4)
if(a5<0.15){a4=1-a5/0.15
$.a1()
a8=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a8.r=d[0].j(0.5*a4).gt(0)
a8.z=new B.hG(A.G,o)
a3=a8.M()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cL(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cL(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a1()
b9=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
b9.r=b8.j(a8).gt(0)
b9.c=u
b9.d=A.bZ
b9.a=A.mW
a3=b9.M()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cL(h,b1+120)>0.5)this.qD(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bzv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.J(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a1(),a0=B.T()
a0.saz(new B.a7(A.ax,A.aE,A.w,D.cQ2,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aB(0,new B.af(0,0,f,e)))
a1.bp(new B.af(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.J(a3*(h*(0.08+0.12*C.cL(u,1)))+C.cL(u,2)*w,w)
s=C.cL(u,3)
r=Math.sin(a3*(0.8+C.cL(u,4))+u)
q=h*(0.012+0.012*C.cL(u,5))
p=Math.cos(a3*(2+3*C.cL(u,6))+u)
o=D.MP[A.o.D(A.k.bK(C.cL(u,7)*5),0,4)]
J.bP(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cL(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gt(0)
if(A.o.J(u,5)===0){t=B.a([],v)
m=new B.b_(d.r,A.au,null,null,t)
d=-q*2
t.push(new B.bj(d,0))
for(l=1;l<=8;++l){s=new B.aw(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bI(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a1()
t=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
t.r=B.bg(n.r).gt(0)
t.b=A.aj
t.c=q*0.35
k=t.M()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.dy(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.M()
f.drawRect(B.cz(t),k)
k.delete()}f.restore()}this.lb(a1,a2,a3,25,A.bJ,30)},
bB5(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a1()
n=B.a([],r)
m=new B.b_(o.r,A.au,a4,a4,n)
n.push(new B.bj(a5,a6))
o=p-0.07
n.push(new B.aw(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.aw(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bX())
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.saz(new B.bT(A.C,0.5,A.w,a4,0,B.a([A.bJ.j(0.22),D.b0F],v),a4,a4).aB(0,B.c1(w,u)))
l=o.M()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.b_($.a1().r,A.au,a4,a4,B.a([],r))
v=a6+j
i.N(new B.bj(a5,v))
u=j*0.3
s=a6+u
i.N(new B.aw(a5,s))
o=a6+j*0.6
i.N(new B.aw(a5+k*0.22,o))
i.N(new B.aw(a5+k*0.5,a6))
i.N(new B.aw(a5+k*0.78,o))
o=a5+k
i.N(new B.aw(o,s))
i.N(new B.aw(o,v))
i.N(new B.bX())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.T()
n.saz(new B.a7(A.b4,A.bc,A.w,D.cP0,a4,a4).aB(0,new B.af(a5,a6,o,v)))
a8.b4(i,n)
for(v=[D.dV4,D.dRG,D.dZS],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(a0)
l=a1.M()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a1.r=A.ak.gt(0)
l=a1.M()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.r=A.hB.gt(0)
l=g.M()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.zS(i),u=B.a([],x.X),o=new B.xL(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b7(B.jE(y.k));--f
o.lc()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.b_(n,v.b,a4,new B.d6([new B.FI(o,f),0,d*h,!0]),B.a([],r))
f=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
f.b=A.aj
f.c=g
f.e=A.fj
f.r=A.bJ.gt(0)
l=f.M()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.J(b0*0.5,1)
this.qD(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lb(a8,a9,b0,45,A.bJ,40)},
buj(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lb(a8,a9,b0,60,A.c,50)
w=[D.e5R,D.e5A,D.e5v,D.e6F]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a1()
i=B.a([],p)
h=new B.b_(n.r,A.au,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.bj(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bI(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aw(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bI(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a1()
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=t
n.r=m.j(0.28).gt(0)
n.a=A.mW
n.z=new B.hG(A.G,s)
a2=n.M()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
n.b=A.aj
n.c=v
n.r=m.j(0.55).gt(0)
n.a=A.mW
n.z=new B.hG(A.G,v)
a2=n.M()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.J(t*(0.05+0.06*C.cL(a4,1))+C.cL(a4,2)*a3,a3)
r=C.cL(a4,3)
q=Math.sin(b0+a4)
p=C.cL(a4,4)
$.a1()
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
n.r=A.vY.j(0.4+0.5*C.cL(a4,5)).gt(0)
n.a=A.mW
a2=n.M()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bxq(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a1(),a0=B.T()
a0.saz(new B.bT(A.C,0.5,A.w,l,0,B.a([A.hm.j(0.25+0.1*h),D.TC],x.O),l,l).aB(0,B.c1(new B.v(g,f),e)))
a1.aw(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.b_(d.r,A.au,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.bj(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.aw(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bI(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.b=A.aj
a0.c=h
a0.r=D.MP[A.o.J(w,4)].j(0.7).gt(0)
p=a0.M()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.J(a3*(i*(0.07+0.12*C.cL(w,1)))+C.cL(w,2)*o,o)
r=k*(0.1+0.8*C.cL(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cL(w,4))
if(n<f){this.qD(a1,new B.v(r,n),m*2.4,A.bJ,A.k.D(n/f,0,1))
continue}$.a1()
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.yZ.j(0.75).gt(0)
p=d.M()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
t.r=A.c.j(0.8).gt(0)
p=t.M()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bDe(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lb(a9,b0,b1,30,A.kK,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cL(p,1))
n=a7+o*4
m=A.k.J(t*(0.04+0.06*C.cL(p,2))+C.cL(p,3)*n,n)-o*2
l=C.cL(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bP(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a1()
g=B.a([],q)
f=new B.b_(h.r,A.au,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.bj(e,i))
h*=0.28
j*=0.6
g.push(new B.aw(h,j))
d=o*0.28
g.push(new B.aw(d,j))
a0=o*0.5
g.push(new B.aw(a0,i))
a1=k*0.6
g.push(new B.aw(0,a1))
g.push(new B.bX())
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.saz(new B.a7(A.ax,A.aE,A.w,D.cLd,a5,a5).aB(0,B.dy(A.J,k*1.2,o)))
a2=g.M()
g=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(g)).a,a2)
a2.delete()
a3=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a3.b=A.aj
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gt(0)
a2=a3.M()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.M()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.M()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.qD(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cld(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a1()
o=B.a([],v)
n=new B.b_(p.r,A.au,null,null,o)
o.push(new B.bj(h,g))
p=s-q
o.push(new B.aw(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.aw(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bX())
p=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
p.r=A.bJ.j(r?0.12:0.07).gt(0)
m=p.M()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.J(a0+l*0.6,1.8)/1.8
$.a1()
u=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
u.b=A.aj
r=1-k
u.c=v*r
u.r=A.bJ.j(r*0.6).gt(0)
m=u.M()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bK(a0/2.4)
k=A.k.J(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cL(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.baF.aq(0,k)*(0.5+0.5*C.cL(t,v)))
this.qD(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cL(t,3)),D.MP[A.o.D(A.k.bK(C.cL(t,4)*5),0,4)],u)}},
bux(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cL(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.J(q*(0.05+0.05*C.cL(o,2))+C.cL(o,3)*m,m)
j=C.cL(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aqa[A.o.J(o,6)]
h=$.a1()
g=B.a([],s)
f=new B.b_(h.r,A.au,a3,a3,g)
h=k+n*1.15
g.push(new B.bj(j,h))
for(e=1;e<=6;++e){d=new B.aw(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bI(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a1()
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gt(0)
a1=d.M()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.dy(new B.v(j,k),n*2.3,l)
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d=B.aq(i,A.x,0.35)
d.toString
l.saz(new B.bT(D.aNl,0.9,A.w,a3,0,B.a([A.c,i,d],t),A3.aq1,a3).aB(0,a2))
a1=l.M()
u.drawOval(B.cz(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.b_(g.r,A.au,a3,a3,l)
d=n*0.12
l.push(new B.bj(j-d,h))
l.push(new B.aw(j+d,h))
l.push(new B.aw(j,k+n))
l.push(new B.bX())
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l.r=B.aq(i,A.x,0.3).gt(0)
a1=l.M()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.J(q*(0.1+0.1*C.cL(o,11))+C.cL(o,12)*m,m)
r=C.cL(o,13)
J.bP(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.dy(A.J,t,v)
$.a1()
r=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
r.r=D.aqa[A.o.J(o,6)].j(0.85).gt(0)
a1=r.M()
u.drawRect(B.cz(s),a1)
a1.delete()
u.restore()}},
bHR(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lb(b1,b2,b3,50,A.c,70)
for(w=[D.e5Z,D.e5G,D.e5L],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a1()
k=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
k.saz(new B.bT(A.C,0.5,A.w,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aB(0,B.c1(new B.v(r,m),l)))
j=k.M()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.J(i,3)
g=C.cL(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cL(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bJ,A.eJ,g)
k.toString
d=C.cL(i,3)
$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.r=k.j(0.5+0.5*C.cL(i,4)).gt(0)
a0.a=A.mW
j=a0.M()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a1()
a9=B.T()
a9.saz(new B.bT(A.C,0.5,A.w,a4,0,B.a([A.yZ.j(0.55),D.aac],u),a4,a4).aB(0,B.c1(b0,a8)))
b1.aw(b0,a8,a9)
a1=A.k.J(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bK(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cL(a2,9)),a6*0.1*C.cL(a2,8))
a5=B.kZ(a3,a3.ap(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kZ(a3,a5,0.6)
a6.toString
a8=B.T()
a8.saz(new B.a7(A.a1,A.a7,A.w,B.a([A.c.j(0),A.c],u),a4,a4).aB(0,B.qQ(a3,a5)))
a8.c=a7*0.005
a8.d=A.bZ
b1.bU(a6,a5,a8)}},
ccz(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a1()
n=B.a([],s)
m=new B.b_(o.r,A.au,b5,b5,n)
n.push(new B.bj(q,u))
o=p-0.16
n.push(new B.aw(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.aw(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bX())
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.saz(new B.bT(A.C,0.5,A.w,b5,0,B.a([A.yZ.j(0.28),D.aac],w),b5,b5).aB(0,B.c1(new B.v(q,u),t)))
o.a=A.mW
l=o.M()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.fp:A.f5)
a9=$.a1()
b0=B.a([],s)
m=new B.b_(a9.r,A.au,b5,b5,b0)
b0.push(new B.bj(a5?0:b6,0))
b0.push(new B.aw(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.dj(a9,k,a5?g:a1,b7))
b0.push(new B.aw(a5?0:b6,b7))
b0.push(new B.bX())
a9=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a9.saz(new B.a7(A.a1,A.a7,A.w,a7,b5,b5).aB(0,new B.af(a6,0,a6+i,j)))
l=a9.M()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
b1.r=A.hm.gt(0)
b1.c=o
b1.d=A.bZ
l=b1.M()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.b_($.a1().r,A.au,b5,b5,B.a([],s))
w=b7*0.78
b2.N(new B.bj(b6*0.42,w))
b2.N(new B.aw(b6*0.58,w))
b2.N(new B.aw(b6*0.8,b7))
b2.N(new B.aw(b6*0.2,b7))
b2.N(new B.bX())
v=B.T()
v.saz(D.bFy.aB(0,new B.af(0,w,0+b6,w+b7*0.22)))
b9.b4(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.J(b7*(0.05+0.07*C.cL(r,1))+C.cL(r,2)*b3,b3)
u=C.cL(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qD(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cL(r,4)),A.bJ,0.3+0.7*((q+1)/2))}},
byU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cL(t,1))
r=h+s*4
q=s*2
p=A.k.J(u*(0.12+0.12*C.cL(t,2))+C.cL(t,3)*r,r)-q
o=C.cL(t,4)*i
n=Math.cos(f*(2+3*C.cL(t,5))+t)
m=Math.abs(n)
l=B.dy(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a1()
q=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
q.saz(new B.a7(A.ax,A.aE,A.w,n>0?D.cYr:D.cjN,null,null).aB(0,l))
k=q.M()
v.drawOval(B.cz(l),k)
k.delete()
q=-(s*0.22)
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=Math.max(0.6,s*0.08)
j.r=D.b8c.gt(0)
k=j.M()
v.drawOval(B.cz(new B.af(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qD(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lb(d,e,f,30,A.bJ,110)},
bRM(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lb(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cL(p,1))
n=a1+o*4
m=a1+o*2-A.k.J(t*(0.03+0.04*C.cL(p,2))+C.cL(p,3)*n,n)
l=C.cL(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a1()
h=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
h.saz(new B.bT(A.C,0.5,A.w,d,0,B.a([H.aak.j(0.45*k),D.a9e],u),d,d).aB(0,B.c1(new B.v(l,m),j)))
g=h.M()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.b_(i.r,A.au,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bj(l-i,e))
j.push(new B.aw(l+i,e))
i=o*0.38
h=m+h
j.push(new B.aw(l+i,h))
j.push(new B.aw(l-i,h))
j.push(new B.bX())
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i=B.aq(D.b0O,A.c,0.2*k)
i.toString
j.saz(new B.a7(A.b4,A.bc,A.w,B.a([D.b4E,i],u),d,d).aB(0,B.dy(new B.v(l,m),o*1.4,o)))
g=j.M()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(k).gt(0)
g=j.M()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bPt(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cL(p,1))
n=a1+o*4
m=A.k.J(s*(0.05+0.06*C.cL(p,2))+C.cL(p,3)*n,n)
l=C.cL(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bP(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a1()
l=B.a([],t)
i=new B.b_(m.r,A.au,d,d,l)
m=o*0.9
l.push(new B.bj(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p3(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p3(m,g,o*1.8,h,0,m))
l.push(new B.bX())
f=D.cD3[A.o.J(p,5)]
m=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l=B.aq(f,A.x,0.25)
l.toString
m.saz(new B.bT(A.vr,0.5,A.w,d,0,B.a([A.c,f,l],u),H.Zn,d).aB(0,B.c1(A.J,o*1.4)))
e=m.M()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lb(a3,a4,a5,30,A.i3,130)},
c7Y(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cL(q,1))
o=g+p*4
n=A.k.J(t*(0.05+0.06*C.cL(q,2))+C.cL(q,3)*o,o)
m=C.cL(q,4)
l=Math.sin(s+q*0.7)
J.bP(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cL(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a1()
m=B.a([],u)
k=new B.b_(n.r,A.au,i,i,m)
n=-p
m.push(new B.bj(0,n))
l=n*0.2
m.push(new B.dj(p,l,0,p))
m.push(new B.dj(n,l,0,n))
m.push(new B.bX())
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
m=(q&1)===0?D.ced:D.cMq
n.saz(new B.a7(A.a1,A.a7,A.w,m,i,i).aB(0,B.c1(A.J,p)))
j=n.M()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lb(d,e,a0,25,A.bJ,140)},
bwu(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lb(b0,b1,b2,40,A.bJ,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cL(r,1))
p=Math.sin(b2*(0.15+0.1*C.cL(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cL(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bP(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bP(v.save())
v.scale(a1*n,1)
a2=$.a1()
a3=B.a([],u)
a4=new B.b_(a2.r,A.au,a6,a6,a3)
a3.push(new B.bj(0,0))
a3.push(new B.p3(f,e,l,d,h,0))
a3.push(new B.p3(q,h,g,q,0,h))
a3.push(new B.bX())
a2=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a2.saz(new B.a7(A.a1,A.a7,A.w,i?D.cM8:D.cOz,a6,a6).aB(0,new B.af(0,m,k,j)))
a5=a2.M()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a2.b=A.aj
a2.c=Math.max(0.6,o)
a2.r=D.z5.gt(0)
a5=a2.M()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a1()
p=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
p.r=D.b7D.gt(0)
p.c=q*0.1
p.d=A.bZ
a5=p.M()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bVu(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.J(w+t/4,1)
r=f*(0.2+0.7*s)
$.a1()
q=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
q.b=A.aj
q.c=v
q.r=D.ara[t].j((1-s)*0.9).gt(0)
q.z=new B.hG(A.G,v)
p=r*0.3
p=B.bZ(B.dy(e,r,r*1.6),new B.b2(p,p))
o=q.M()
u.drawRRect(B.fL(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cL(m,1)*4)+m)))
k=D.ara[A.o.J(m,4)]
j=m*n+h
i=g-l
i=B.bZ(new B.af(j,i,j+w,i+l),new B.b2(v,v))
$.a1()
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.r=k.j(0.85).gt(0)
j.z=new B.hG(A.a61,p)
o=j.M()
u.drawRRect(B.fL(i),o)
o.delete()}},
bDp(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cL(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cL(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bJ,A.oE,A.dC][A.o.J(p,4)]
j=C.cL(p,3)
$.a1()
i=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i.r=k.j(0.75).gt(0)
i.a=A.mW
i.z=new B.hG(A.G,r)
h=i.M()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a1()
t=B.T()
t.r=A.aA.gt(0)
t.c=1.2
a3.bU(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.T()
t.r=A.fJ.gt(0)
a3.aw(v,u,t)
J.bP(q.save())
a1=new B.b_(a1.r,A.au,null,null,B.a([],x.v))
a1.N(new B.ks(B.c1(v,u)))
a3.tg(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.J(a1,g)
i=Math.sin(e*1.7+l+s)
$.a1()
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.r=B.aq(A.bu,A.c,0.4+0.6*((i+1)/2)).gt(0)
h=d.M()
q.drawRect(B.cz(new B.af(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qD(a3,v.ap(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cmE(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cm.aq(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a1()
q=B.a([],u)
p=new B.b_(r.r,A.au,h,h,q)
q.push(new B.bj(d,a0))
r=s-0.04
q.push(new B.aw(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aw(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bX())
r=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
r.r=A.bJ.j(0.1).gt(0)
o=r.M()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a1()
a0=B.T()
a0.saz(new B.bT(A.C,0.5,A.w,h,0,B.a([D.aYp.j(0.6),D.a9e],x.O),h,h).aB(0,B.c1(a1,d)))
a2.aw(a1,d,a0)
a0=e*0.2
d=B.T()
d.saz(D.dQh.aB(0,B.c1(a1,a0)))
a2.aw(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.J(d*(1+t*0.3)+C.cL(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(0.18).gt(0)
i=B.dy(new B.v(l,k),r,u)
o=j.M()
w.drawOval(B.cz(i),o)
o.delete()
i=B.dy(new B.v(l+q,k-n),r,m)
o=j.M()
w.drawOval(B.cz(i),o)
o.delete()}this.lb(a2,a3,a4,20,A.hB,180)},
c71(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a1()
q=B.a([],t)
p=new B.b_(r.r,A.au,f,f,q)
q.push(new B.bj(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aw(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bI(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aw(e,d)
q.push(r)
o=p.f
if(o!=null)r.bI(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bX()
q.push(r)
q=p.f
if(q!=null)r.bI(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a1()
r=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
r.r=B.aq(A.cA,A.iM,s/3).j(0.55).gt(0)
k=r.M()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cL(i,1))
g=d-A.k.J(u*(0.04+0.05*C.cL(i,2))+C.cL(i,3)*j,j)
n=C.cL(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a1()
t=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
t.saz(new B.bT(Ah.qS,0.5,A.w,f,0,D.cRu,f,f).aB(0,B.c1(new B.v(n,g),h)))
k=t.M()
w.drawCircle(n,g,h,k)
k.delete()}this.lb(a1,a2,a3,25,A.c,190)},
ckV(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cL(r,1))
p=f+q*4
o=A.k.J(u*(0.03+0.05*C.cL(r,2))+C.cL(r,3)*p,p)
n=C.cL(r,4)
m=Math.sin(t+r)
$.a1()
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l.r=A.c.j(0.6+0.4*C.cL(r,5)).gt(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bZ
J.bP(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.M()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.M()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.M()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lb(d,a0,a1,40,A.eo,200)},
bRS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dF(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bP(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.dy(new B.v(p,0),q,r)
$.a1()
f=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
f.saz(D.bFm.aB(0,new B.af(0,o,n,m)))
e=f.M()
s.drawOval(B.cz(g),e)
e.delete()
s.restore()}}$.a1()
a0=B.T()
a0.b=A.aj
a0.c=a2*0.003
a0.r=D.b0Z.gt(0)
a3.aw(w,v*1.08,a0)
d=a5*0.8
this.qD(a3,w.ap(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lb(a3,a4,a5,40,A.bJ,210)},
cf0(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hm,A.hB],a6),B.a([A.nR,A.i3],a6),B.a([A.az,A.eJ],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.o,m=0;m<3;++m){l=$.a1()
k=B.a([],o)
j=new B.b_(l.r,A.au,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.bj(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bI(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aw(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bI(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dt(i,s),l=new B.bR(l,l.gH(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aw(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bI(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bX()
k.push(l)
k=j.f
if(k!=null)l.bI(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a1()
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
k=a7[m]
h=k[0]
l.saz(new B.a7(A.a1,A.a7,A.w,B.a([h,k[1],h],a6),H.aqS,new B.mh(w)).aB(0,new B.af(0,0,v,u)))
l.r=A.c.j(0.85).gt(0)
a2=l.M()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lb(a8,a9,b0,40,A.c,220)},
bRB(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.J(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.J(A.k.bK(g/t),5)
a1=g+t
$.a1()
a2=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a3=Math.abs(a0)
a2.r=D.Zq[a3].gt(0)
a4=a2.M()
s.drawRect(B.cz(new B.af(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a5.r=D.Zq[A.o.J(a3+2,5)].gt(0)
a4=a5.M()
s.drawRect(B.cz(new B.af(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.J(n*(0.04+0.05*C.cL(a0,1))+C.cL(a0,2)*a6,a6)
v=C.cL(a0,3)
t=C.cL(a0,4)
this.qD(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.Zq[A.o.J(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cq8(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a1()
p=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
p.c=v
p.r=A.bJ.j(0.06).gt(0)
o=p.M()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.b_($.a1().r,A.au,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.N(new B.bj(v,a2))
w=a1+w
l.N(new B.aw(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.N(new B.dj(w,r,p,k))
w=a2+m*0.95
l.N(new B.aw(p,w))
p=n*0.3
j=a2+m
l.N(new B.aw(a1+p,j))
l.N(new B.aw(a1-p,j))
q=a1-q
l.N(new B.aw(q,w))
l.N(new B.aw(q,k))
l.N(new B.dj(v,r,v,a2))
l.N(new B.bX())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.dy(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=q
d.r=A.as.gt(0)
o=d.M()
u.drawArc.apply(u,[B.cz(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.T()
a1.saz(new B.a7(A.a1,A.a7,A.w,D.cTt,A.aqg,null).aB(0,new B.af(v,a2,r,j)))
a4.b4(l,a1)
a0=A.k.J(a6*0.6,1.4)
if(a0<1)this.qD(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bzw(a4,a5,a6,60)},
bzw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.J(k*(0.1+0.1*C.cL(p,31))+C.cL(p,32)*v,v)
n=C.cL(p,33)
J.bP(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dy(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a1()
n=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
n.r=D.MP[A.o.J(p,5)].gt(0)
m=n.M()
u.drawRect(B.cz(o),m)
m.delete()
u.restore()}},
ciP(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lb(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cL(o,1)*1.6
m=A.k.J(a2+C.cL(o,2)*n,n)/n
l=e*(C.cL(o*7+A.k.bK((a2+C.cL(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a1()
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.saz(new B.a7(A.a1,A.a7,A.w,B.a([A.c.j(0),A.bJ],s),null,null).aB(0,B.qQ(new B.v(l,h),i)))
g.c=r
g.d=A.bZ
f=g.M()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qD(a0,i,p,A.c,1-m)}},
buO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cL(r,1))
p=A.k.J(C.cL(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.J(C.cL(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a1()
m=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l=A.o.J(r,5)
m.r=D.asp[l].j(n).gt(0)
m.a=A.mW
m.z=new B.hG(A.G,q*0.12)
k=m.M()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
m.b=A.aj
m.c=Math.max(0.6,q*0.05)
m.r=D.asp[l].j(n*1.4).gt(0)
k=m.M()
s.drawCircle(p,o,q,k)
k.delete()}},
c4M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bP(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.dy(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a1()
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.b=A.aj
o.c=u
o.r=A.bJ.j(0.45).gt(0)
n=o.M()
w.drawOval(B.cz(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
k.r=A.hB.gt(0)
n=k.M()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
k.r=A.hm.j(0.4).gt(0)
k.z=new B.hG(A.G,r)
n=k.M()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lb(d,e,f,45,A.bJ,270)},
bH9(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.J(o,4)
m=C.cL(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.J(a7+C.cL(o,2)*4,4)/4
j=A.et.aq(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cL(o,3))*(j*i)
if(h<=0.5)continue
g=D.cJv[A.o.J(o,5)]
J.bP(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dy(new B.v(0,l),i,j)
$.a1()
a0=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a0.saz(new B.a7(A.b4,A.bc,A.w,B.a([A.c,g],u),null,null).aB(0,B.dy(new B.v(0,l),f,h)))
a1=a0.M()
v.drawOval(B.cz(d),a1)
a1.delete()}$.a1()
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l.r=A.hm.gt(0)
a1=l.M()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lb(a5,a6,a7,30,A.hB,280)},
bVf(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.J(t+n/4,1)
l=B.c1(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a1()
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.c=v
j.r=D.apo[n].j((1-m)*0.8).gt(0)
i=j.M()
u.drawArc.apply(u,[B.cz(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.J(v*(0.06+0.06*C.cL(g,1))+C.cL(g,2)*h,h)
e=C.cL(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cL(g,4))
a0=D.apo[A.o.J(g,4)]
$.a1()
a1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(0)
J.bP(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.dy(A.J,d,d*1.5)
i=a1.M()
u.drawOval(B.cz(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.18)
i=o.M()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.3)
i=o.M()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bTH(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bP(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.a1()
a0=B.a([],s)
a1=new B.b_(d.r,A.au,a3,a3,a0)
a0.push(new B.bj(0,i))
a0.push(new B.dj(h,m,0,g))
a0.push(new B.dj(j,m,0,i))
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.b=A.aj
d.c=t
d.r=B.aq(A.bJ,A.oE,k).j(0.7).gt(0)
a2=d.M()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.r=A.hB.j(0.8).gt(0)
a2=d.M()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a1()
a5=B.T()
a5.saz(new B.bT(A.C,0.5,A.w,a3,0,B.a([A.hm.j(0.25),D.TC],x.O),a3,a3).aB(0,B.c1(w,a4)))
a7.aw(w,a4,a5)
this.lb(a7,a8,a9,30,A.bJ,300)},
cl3(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a1()
h=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
h.r=A.bu.gt(0)
h.c=q
h.d=A.bZ
g=h.M()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
l.saz(new B.bT(A.C,0.5,A.w,null,0,B.a([A.hB,A.hm.j(0.6),D.TC],o),null,null).aB(0,B.c1(new B.v(j,i),p)))
g=l.M()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cL(f,1)
d=A.k.J(b2+C.cL(f,2)*e,e)/e
a0=A.k.bK((b2+C.cL(f,2)*e)/e)
a1=C.cL(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cL(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a6.r=B.aq(A.hB,A.aZ,d).j(1-d).gt(0)
a6.c=Math.max(0.8,u)
a6.d=A.bZ
a6.a=A.mW
g=a6.M()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.M()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.M()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lb(b0,b1,b2,35,A.bJ,310)},
byd(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aNm(a9,new B.ap(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cL(n,1))
l=a8*(0.14+0.24*C.cL(n,2))
k=a8-l
j=new B.af(o,k,o+m,k+l)
$.a1()
i=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i.saz(D.bGf.aB(0,j))
h=i.M()
r.drawRect(B.cz(j),h)
h.delete()
g=A.k.bK(m/q)
f=A.k.bK(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cL(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a1()
a6=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a6.r=A.bJ.j(0.85).gt(0)
h=a6.M()
r.drawRect(B.cz(new B.af(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aW3.prototype={
B(d){var w,v=null,u=new C.c2n(),t=new C.c2p(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ail,A.i,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c2o(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.ES[w]))
return B.cf(A.bI,s,A.by,12,10)}}
C.X3.prototype={
S(){return new C.awr()}}
C.awr.prototype={
guI(){var w=this.d
return w===$?this.d=this.a.c:w},
gaTG(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.b9(w.b,A.aY,A.aL),$.as())}return v},
gat3(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaFK()
v=$.as()
u.f!==$&&B.bG()
t=u.f=new B.ao(new B.b9(w,A.aY,A.aL),v)}return t},
p(){var w=this.gaTG(0),v=$.as()
w.R$=v
w.O$=0
w=this.gat3()
w.R$=v
w.O$=0
this.a2()},
Xs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Xs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().AS(90,700,700,A.ev),$async$Xs)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fd(),$async$Xs)
case 8:p=e
o=q.b.toLowerCase()
n=J.af0(o,".png")?"image/png":"image/jpeg"
r.n(new C.d_o(r,n,p))
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
return B.i($async$Xs,v)},
aTF(d){var w=null,v=A.c.j(0.07)
return B.bn(w,new B.b0(4,B.m(12),A.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aJn,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ae8(p.guI().a)
if(n==null)n=A.d.gI(D.ES)
w=p.guI()
v=p.r
u=x.p
v=B.C(new B.am(A.W,o,A.a9,A.q,B.a([B.c_(0,new C.Lt(p.guI(),!1,!0,new B.cv(w.a+v,x.W)),0,0,0),B.an(o,B.Kn(A.mF,new C.d_t(d),B.p9(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Kn(D.brd,new C.d_u(p),B.p9(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJh,o,o,o)
t=B.C(B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),p.gaTG(0),o,o,o,o,o,2,p.aTF("Big words"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_v(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.hi,!0,A.a5,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hm.j(0.6),A.r,1)
if(p.guI().d.length===0)q=D.buv
else{q=C.fTW(p.guI().d)
if(q==null)q=new Uint8Array(0)
q=B.i1(B.fU(q,A.C,o,o,A.cl,A.bP,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ab,B.aJ(o,B.p(o,q,A.i,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gbZS(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guI().d.length!==0)r.push(B.aF(o,o,o,o,D.Yg,o,o,o,new C.d_w(p),o,o,o,o,"Remove logo",o))
return B.cg(o,A.x,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.U,B.A(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),p.gat3(),o,o,o,o,o,2,p.aTF("Line under it"),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d_x(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a5,o,A.am,o,o,o,o),A.ac,B.dn(D.btt,D.eTE,new C.d_y(p,d),B.bk(A.as,o,o,o,A.x,o,A.c9,o,new B.b5(B.m(14),A.V),o,o,o))],u),A.al,o,A.e,A.R,0,A.p),A.i,o,o,D.aRC,o,o,o,o,A.Dr,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aHR.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.Xo.prototype={
S(){return new C.bbM(new B.ao(A.aq,$.as()))}}
C.bbM.prototype={
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.K(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aP:A.ai,k=B.aG(d,A.bM,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.A(B.a([B.C(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.U(A.cu,l,o,o,o,o),o,o,o,new C.d5S(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cvg[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.b2(12,12)
q=new B.b2(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aH(!1,new B.bx(r,r,r,r),!0,B.p(A.C,new B.w(s,o,A.v4,o,o,o,o,o,o,o,o,o),A.i,o,o,new B.o(p,o,o,new B.bx(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d5T(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.B(A.hq,new B.w(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.DY(A.bI,6,6,A.by,u,o)],g))}e.push(A.aC)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bh:A.aN
e.push(B.A(B.a([B.C(B.aI(o,A.T,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bn(o,new B.b0(4,B.m(14),A.V),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.ad,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.am,o,o,o,o),1),A.ab,B.bJ(A.aKa,new C.d5U(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dp(1,A.cj,B.cX(e,o,o,o,o,A.af,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.i,o,new B.aV(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rv,A.Va,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bb9.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f9()
a2.e2(this.c)
w=this.b
v=w/6.283185307179586
$.a1()
u=B.T()
u.z=A.Ok
t=B.T()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ah()
l=a2.ah()
k=a2.ah()
j=0.8+a2.ah()*2.2
i=Math.sin(w*(3+a2.aE(4))+n)
h=A.k.J(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ah()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gt(0)
d=u.M()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gt(0)
d=t.M()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.a1()
a1=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
a1.r=e.gt(0)
a1.c=1
d=a1.M()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.M()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ao(d){return d.b!==this.b}}
C.baR.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bZ(new B.af(0,0,0+a7.a,0+a7.b),A.k5),a2=this.b,a3=Math.sin(a2*2),a4=$.a1(),a5=B.T()
a5.b=A.aj
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gt(0)
a5.z=A.mK
a6.bi(a1,a5)
a5=x.v
a4=new B.b_(a4.r,A.au,a0,a0,B.a([],a5))
a4.N(new B.j1(a1))
v=new B.aht(new B.xL(B.zS(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.lc()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.J(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.a1()
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.b=A.aj
j.d=A.bZ
j.c=1.5+2*m/10
j.r=w.j(k).gt(0)
i=A.k.J(n-p*(1-m/10),t)
h=A.k.J(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.b_(r,k,a0,new B.d6([v,i,h,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.b_(r,k,a0,new B.d6([v,i,t,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.b_(r,a2.b,a0,new B.d6([v,0,h,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.lc()
e=u[a3].a3Z(n).a
$.a1()
k=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
k.r=w.gt(0)
k.z=Z.pe
g=k.M()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
d.r=A.c.gt(0)
g=d.M()
q.drawCircle(k,f,2,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.bjz.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f9()
e.e2(this.c)
w=a0.a*(0.2+e.ah()*0.6)
v=e.hc()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gaiS()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a1()
i=B.a([],n)
h=new B.b_(j.r,A.au,f,f,i)
i.push(new B.bj(w,v))
j=l-k
i.push(new B.aw(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.aw(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bX())
j=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
j.saz(B.aRc(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.w,f,f,0))
j.z=A.jf
g=j.M()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.b5T.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f9()
a0.e2(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ah()
l=a0.ah()
k=Math.min(t,r)*(0.03+a0.ah()*0.09)
j=a0.ah()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.a1()
e=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
e.r=f.j(g).gt(0)
e.z=new B.hG(A.G,k*0.35)
d=e.M()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
e.b=A.aj
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gt(0)
d=e.M()
w.drawCircle(i,h,k,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.b5v.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f9()
a0.e2(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ah()-0.5)*0.1)
k=v*(0.06+a0.ah()*0.05)
j=a0.ah()*3.141592653589793*2
i=$.a1()
h=B.a([],n)
g=new B.b_(i.r,A.au,null,null,h)
h.push(new B.bj(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aw(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bI(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a1()
i=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i.b=A.aj
i.c=r
i.d=A.bZ
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gt(0)
i.z=new B.hG(A.G,u)
d=i.M()
i=g.e
t.drawPath((i==null?g.e=new B.cG(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.bqj.prototype={
a6(d,e){var w,v,u=new B.af(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a1()
w=B.T()
t=(0.5+0.5*t)*0.12
w.saz(new B.bT(A.C,0.95,A.w,null,0,B.a([A.K,A.x.j(0.28+t)],x.O),D.cBY,null).aB(0,u))
d.bp(u,w)
w=u.cD(-3)
v=B.T()
v.b=A.aj
v.c=2
v.r=this.c.j(0.1+t).gt(0)
v.z=A.jf
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bno.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bK(d)*7,p=0;p<7;++p){o=new B.f9()
o.e2(q+p)
n=o.ah()*w
m=o.ah()*u
l=Math.sin(A.k.J(A.k.J(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ah()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.a1()
i=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i.r=j.gt(0)
i.c=1.4
i.d=A.bZ
h=i.M()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.M()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.M()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.M()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
g.r=A.c.j(l*0.9).gt(0)
g.z=new B.hG(A.G,k*0.3)
h=g.M()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ao(d){return d.b!==this.b}}
C.bmy.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.af(0,0,0+e.a,0+e.b)
$.a1()
v=B.T()
v.a=A.mW
v.saz(new B.a7(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aB(0,w))
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bab.prototype={
a6(d,e){var w,v,u,t,s,r=e.gef(),q=0.55+0.45*Math.sin(this.b)
$.a1()
w=B.T()
w.b=A.aj
w.c=1.4
w.d=A.bZ
v=this.d
w.r=v.j(0.55+q*0.35).gt(0)
u=B.T()
u.b=A.aj
u.c=4
u.r=v.j(0.12*q).gt(0)
u.z=A.qs
r=new C.d_5(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
ao(d){return d.b!==this.b}}
C.wz.prototype={}
C.GW.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.ao2.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.tT.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m3.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hm.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ev.prototype={
hr(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eg(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ad(){var w,v=this,u=B.Q(x.N,x.z)
u.m(0,"id",v.a)
u.m(0,"type",v.b.b)
u.m(0,"x",v.c)
u.m(0,"y",v.d)
u.m(0,"w",v.e)
u.m(0,"h",v.f)
u.m(0,"text",v.r)
u.m(0,"fontSize",v.w)
u.m(0,"fontWeight",v.x.gdB(0))
u.m(0,"fontStyle",v.y.a)
u.m(0,"decoration",C.hw5(v.z))
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
C.lj.prototype={
hr(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("I<1,ev>")
n=B.z(new B.I(n,new C.c7C(),m),m.k("ai.E"))
return C.qO(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ad(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("I<1,a0<n,@>>")
n=B.z(new B.I(n,new C.c7D(),m),m.k("ai.E"))
return B.D(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hP.prototype={
gb3q(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bf(v)},
gQb(){if(!C.kd(this.w))return!1
var w=this.gb3q()
if(w==null)return!1
return new B.N(Date.now(),0,!1).cT(w.bP())},
hr(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.S(r).k("I<1,lj>")
r=B.z(new B.I(r,new C.c7r(),q),q.k("ai.E"))
return C.Ah(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ad(){var w,v,u=this,t=B.Q(x.N,x.z)
t.m(0,"id",u.a)
t.m(0,"name",u.b)
t.m(0,"themeId",u.c)
t.m(0,"aspectRatio",u.d.b)
t.m(0,"autoAdvanceSeconds",u.e)
t.m(0,"updatedAt",u.f.a4().aa())
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
v=B.S(w).k("I<1,a0<n,@>>")
w=B.z(new B.I(w,new C.c7s(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.jr.prototype={}
C.aYc.prototype={
B(d){return B.co(new C.c7x(this))}}
C.all.prototype={
S(){return new C.beX(null,null)}}
C.beX.prototype={
gaTH(){var w,v=this,u=v.d
if(u===$){w=B.bh(null,A.fV,null,1,null,v)
w.cF(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
p(){this.gaTH().p()
this.bnD()},
B(d){return B.c4(this.gaTH(),new C.dxp(),this.a.c)}}
C.aHD.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aaM.prototype={
NU(d,e,f,g){return this.bGR(d,e,f,g)},
bGR(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$NU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$NU)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).K(null)
t=d.E(x.q).f
t.P(B.aZ(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$NU,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dl,24)],x.V),r=B.at(B.p(v,v,A.i,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dQ,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aT,p,A.ar,B.d(o,v,n,A.a0,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a_,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.aw,B.d(w.c,v,2,A.a0,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a_,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d1)
n.push(B.A(B.a([B.C(new C.ab4(A.hd,"Download",A.bQ,new C.e9D(w,d),!0,v),1),A.av,B.C(new C.ab4(A.up,"Share",A.bf,new C.e9E(w,d),!1,v),1),A.av,B.C(new C.ab4(A.fY,"Safari",A.aW,new C.e9F(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aC)
n.push(B.bF(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.e9G(d),v,v))
return B.br(!0,new B.B(A.oW,B.u(B.a([B.p(v,B.u(n,A.al,v,A.e,A.j,0,A.p),A.i,v,v,new B.o(A.iu,v,t,u,s,v,A.n),v,v,v,v,A.Dy,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.ab4.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.U(w.c,p,v,v,v,26)
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.eq(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bj3,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.i,A.K,0,v,v,v,v,v,A.aa)}}
C.aYa.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.ani(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.L(v,w,v,w)}else{v=6*w
u=new B.L(v,10*w,v,12*w)}t=i.bZT().ah3(1.35)
s=B.asq(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bsR(v)
if(i.e&&i.w!=null)q=B.aI(h,A.T,!1,h,!0,A.q,h,B.aL(),i.w,A.bf,h,h,h,h,2,D.bCd,A.z,!0,h,!0,h,!1,i.x,A.ad,h,h,h,new B.cv("slide_tf_"+g.a,x.W),h,A.v1,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.y6,A.am,h,A.Ql,h,h)
else{v=g.r
p=A.a.i(v)
o=p.length===0||p.toLowerCase()==="click to edit text"||p.toLowerCase()==="tap to edit text"
n=o&&i.as
m=f&&A.a.q(g.db,"mahari_")
if(!n)f=g.k1.length===0&&!g.k2
else f=!0
if(f){if(n)f="Tap to select \xb7 Edit to type"
else f=o?"":v
v=A.a.gV(v)
w=n?t.cxa(B.bg(g.Q).j(0.45),A.cS):t
p=g.as
l=m?1:h
k=m?A.eP:A.Bw
p=B.d(f,new B.cv("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qc:s
$.a1()
j=B.T()
j.b=A.aj
j.c=3*w
j.e=A.fj
j.r=A.aG.gt(0)
j=i.cf3(p,t,k,j)
k=g.r
w=new B.am(A.W,h,A.a9,A.q,B.a([j,i.cf1(k,t,l?A.Qc:s)],x.p),h)}else w=i.cf2(p,t,g.k2?A.Qc:s,m)
v=new B.n5(w,new B.cv("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c5,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.B(u,new B.bE(r,h,h,q,h),h)
case 1:case 4:return i.bQ5()
case 3:return i.c70()
case 2:return B.b1(h,h,h,new C.aY7(g,h),A.fx)
case 5:g=g.r
return new C.aY9(g,!i.e&&i.z==null,h)}},
bZT(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.bg(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ks
j=A.cS
break
case"shadow":v=o.d
e=B.a([new B.cI(D.a9b,new B.v(0,4*v),8*v)],x.S)
w=l
break
case"neon":v=o.d
e=B.a([new B.cI(l,A.J,6*v),new B.cI(l,A.J,16*v),new B.cI(l.j(0.8),A.J,30*v)],x.S)
w=l
break
case"marker":k=A.u
g=A.cX
w=A.aG
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.m7
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cI(A.bB,new B.v(v,v),0)],x.S)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.x,0.65)
v.toString
u=B.a([],x.S)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cI(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cI(A.b8,new B.v(-3*v,0),0),new B.cI(A.aH,new B.v(3*v,0),0)],x.S)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cI(A.dg,A.J,8*v),new B.cI(A.aH,new B.v(0,-3*v),18*v)],x.S)
k=A.u
w=H.a87
break
case"ice":v=o.d
e=B.a([new B.cI(A.b3,A.J,10*v),new B.cI(A.cA,A.J,22*v)],x.S)
k=A.O
w=A.eo
break
case"chalk":h=o.d
e=B.a([new B.cI(l.j(0.45),A.J,3*h)],x.S)
w=l
k=A.ks
break
case"comic":v=B.aq(l,A.x,0.85)
v.toString
u=B.a([],x.S)
for(t=o.d,q=0;q<8;++q){p=D.cDL[q]
u.push(new B.cI(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cI(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a1()
f=B.T()
v=o.d
f.saz(D.bDW.aB(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cI(A.Ia,new B.v(0,3*v),5*v)],x.S)
w=l
k=A.u
break
case"sunset":$.a1()
f=B.T()
v=o.d
f.saz(D.bEf.aB(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cI(l,A.J,14*o.d)],x.S)
w=l
k=A.a_
break
case"lowercase":h=2*o.d
w=l
k=A.cn
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cI(l.j(0.45),new B.v(u,u),0),new B.cI(l.j(0.2),new B.v(v,v),0)],x.S)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.ks
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.bg(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
auU(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eal.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c7v(h)
v=r.k2?C.hI8(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eP:A.Bw
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Vz(B.dw(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cf3(d,e,f,g){return this.auU(d,e,f,!1,g)},
cf1(d,e,f){return this.auU(d,e,f,!1,null)},
cf2(d,e,f,g){return this.auU(d,e,f,g,null)},
bsR(d){switch(d.a){case 2:return A.C
case 1:case 5:return A.a7
default:return A.a1}},
bQ5(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.at(B.U(s.b===D.kz?A.Eu:A.zS,A.aA,t,t,t,32),t,t,t)}w=u.bvJ(r)
if(s.b===D.kz){s=B.m(6)
v=2*u.d
return B.p(t,w,A.i,t,t,new B.o(A.c,t,B.H(A.ct,A.r,1),s,B.a([new B.a9(0,A.G,A.x.j(0.08),A.dF,6)],x.V),t,A.n),t,1/0,t,t,new B.L(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aIR(r,!0)
return C.ffC(s.go,v,s.id)}return w},
aIR(d,e){var w,v,u,t
try{w=C.hIr(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c5(u,"_bg")
u=B.co(new C.c7u(this,w,v,e))
return u}catch(t){return D.a7o}},
bvJ(d){return this.aIR(d,!1)},
c70(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aWz
return C.hIJ(v,w.db,w.dx)}}
C.aY7.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a1(),g=B.T(),f=this.b
g.r=B.bg(f.ay).gt(0)
w=B.T()
w.r=B.bg(f.ch).gt(0)
w.b=A.aj
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.af(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.bp(s,g)
d.bp(s,w)
break
case 1:d.lf(s,g)
d.lf(s,w)
break
case 2:r=new B.b_(h.r,A.au,i,i,B.a([],x.v))
r.N(new B.bj(u/2,0))
r.N(new B.aw(u,t))
r.N(new B.aw(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 3:r=new B.b_(h.r,A.au,i,i,B.a([],x.v))
h=t*0.45
r.N(new B.bj(0,h))
f=u*0.65
r.N(new B.aw(f,h))
r.N(new B.aw(f,t*0.2))
r.N(new B.aw(u,t*0.5))
r.N(new B.aw(f,t*0.8))
t*=0.55
r.N(new B.aw(f,t))
r.N(new B.aw(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 4:h=t/2
w.c=v+2
d.bU(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.b_(h.r,A.au,i,i,B.a([],x.v))
r.N(new B.bj(q,0))
r.N(new B.aw(u,0))
r.N(new B.aw(u-q,t))
r.N(new B.aw(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.b_(h.r,A.au,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.bj(k,j)
f.push(h)
v=r.f
if(v!=null)h.bI(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aw(k,j)
f.push(h)
v=r.f
if(v!=null)h.bI(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break}},
ao(d){return d.b!==this.b}}
C.aFg.prototype={
S(){return new C.bpR(null,null)}}
C.bpR.prototype={
Z(){var w,v=this
v.a0()
w=B.bh(null,A.ia,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bpQ()},
aJ1(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bQ(B.at(B.d(d,w,w,w,w,w,w,A.dQ,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a7(A.a1,A.a7,A.w,v,w,w),A.n),A.ba)},
bt4(){var w,v=this,u=null,t=v.aJ1("Slide A",A.bf),s=v.aJ1("Slide B",A.aW)
if(v.a.c===D.ca)return new B.am(A.W,u,A.aX,A.q,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eOd(v,s,t),u)},
B(d){return this.bt4()}}
C.aFT.prototype={
jc(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
k_(d){return d.b!==this.b}}
C.ST.prototype={
S(){return new C.bf6(null,null)}}
C.bf6.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bh(null,A.zj,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.ca){w.st(0,1)
return}B.bK(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dIh(u),x.a)},
bo(d){var w,v,u,t=this
t.bz(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.st(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.ca)w.st(0,1)
else B.bK(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.dIg(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bnR()},
B(d){var w,v=this.a
if(v.c.dy===D.ca||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dIf(this),v.d)}}
C.GV.prototype={
B(d){return B.co(new C.c7n(this))}}
C.awc.prototype={
S(){return new C.b9H()}}
C.b9H.prototype={
Z(){this.a0()
if(this.a.c!==D.ca)B.bK(A.Jf,new C.cXK(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.ca)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.ST(C.eg(A.bn,!1,4279310375,A.ay,"",4294538006,24,A.bl,A.a_,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.b6,o,2,"",0,0,"",u,D.eN,0.84,0.08,0.12),B.p(p,p,A.i,p,p,new B.o(A.ck,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cv("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eg(A.bn,!1,4294967295,A.ay,"",4280640491,22,A.bl,A.a_,"",0.2,"preview_text",p,"","",0,!1,"",0,D.b6,o,2,"Element flies in",0,0,"",q.a.c,D.cG,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.W,p,A.a9,A.q,B.a([w,B.an(32,new C.ST(t,B.p(p,D.eGw,A.i,p,p,new B.o(s,p,B.H(A.be,A.r,1),r,p,p,A.n),p,p,p,p,A.iB,p,p,1/0),!0,1,new B.cv("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bQ(n,D.aS9,A.ba)}}
C.a5k.prototype={
S(){return new C.bfL(null,null)}}
C.bfL.prototype={
gaUd(){var w=this.a
if(w.e)w=D.eas.q(0,w.c)||D.aGz.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaUd()){w=C.hGP(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bh(null,B.dA(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bon()},
B(d){var w,v=this,u=v.d
if(!v.gaUd()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e02(v,u,A.o.J(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aW6.prototype={
B(d){var w=null
return B.at(C.aYb(!0,w,!1,C.eg(A.L,!1,this.e.l(),A.ay,"",4280640491,this.f,A.bl,A.a_,"",0.2,"fx",w,"","",0,!1,"",0,D.b6,4280172719,2,"Aa",0,0,this.c,D.ca,D.cG,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.baP.prototype={
jc(d){return C.a03(this.b,new B.af(0,0,0+d.a,0+d.b).cD(-this.c))},
k_(d){return d.b!==this.b||d.c!==this.c}}
C.bly.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.af(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a03(g,h),e=a1.gef(),d=new C.eDE()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saz(D.aI3.aB(0,h))
a0.b4(f,w)
g=C.a03(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b7Z.gt(0)
a0.b4(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saz(D.ejW.aB(0,h))
a0.b4(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gt(0)
g.z=new B.hG(A.G,e*0.04)
a0.b4(f,g)
g=d.$1(e*0.012)
g.r=A.c.gt(0)
a0.b4(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saz(D.ejU.aB(0,h))
a0.b4(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a03(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gt(0)
a0.b4(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gt(0)
g.z=new B.hG(A.G,e*0.035)
a0.b4(f,g)
g=d.$1(e*0.016)
g.r=A.nS.gt(0)
a0.b4(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saz(D.ejP.aB(0,h))
a0.b4(f,w)
w=C.a03(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.aZH.gt(0)
a0.b4(w,v)
g=C.a03(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b0Q.gt(0)
a0.b4(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saz(D.aI3.aB(0,h))
a0.b4(f,g)
for(g=B.zS(f),w=B.a([],x.X),g=new B.xL(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b7(B.jE(y.k));--q
g.lc()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bK(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.lc()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.lc()
m=w[q].a3Z(p*n/o).a
l=D.cBl[A.o.J(n,4)]
$.a1()
p=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
p.r=l.gt(0)
k=p.M()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ax(A.Z,A.Y,A.a3,A.a4,A.a2)
i.r=A.c.j(0.9).gt(0)
k=i.M()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.saz(D.ejY.aB(0,h))
g.z=new B.hG(A.G,e*0.03)
a0.b4(f,g)
g=d.$1(e*0.018)
g.saz(D.ejV.aB(0,h))
a0.b4(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a03(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n2.gt(0)
a0.b4(g,w)
break}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bmv.prototype={
a6(d,e){d.Eq(C.a03(this.b,new B.af(0,0,0+e.a,0+e.b).cD(-this.c)),A.x,e.gef()*0.05,!1)},
ao(d){return d.b!==this.b||d.c!==this.c}}
C.aHQ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aIl.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aJE.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.a5C.prototype={}
C.LV.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aAU(B.a([],x.D),B.a([],w),B.a([],w),B.Q(v,u),B.Q(v,x.bo),B.Q(v,u),B.aY(v),null,null)},
gdQ(){return this.c},
gRv(){return this.r},
gRw(){return this.w},
gJX(){return this.x}}
C.aAU.prototype={
Z(){var w,v=this
v.a0()
$.aT.c_$.push(v)
C.fks()
$.h0g=new C.efR(v)
w=B.bh(null,A.zh,null,1,null,v)
w.f2(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.GT()},
bo(d){var w,v,u=this
u.bz(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MB(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.GT()}},
iL(d){if(d===A.yt||d===A.qU||d===A.qT||d===A.oz)this.rG()},
p(){var w,v,u,t=this
$.aT.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rG()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.as()
v.O$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bF(0)
v.fR()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.as()
v.O$=0}t.boB()},
ga8q(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gMV(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a8T(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQb())return!1
return!0},
jF(){return this.a8T(null)},
afe(){var w=this.c
if(w==null)return
w.E(x.q).f.P(D.eid)},
pt(){if(!this.jF())return!1
this.afe()
return!0},
an2(d){var w,v,u,t,s,r=this
if(r.a8T(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h_o(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yL(){return this.an2(null)},
GT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$GT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.ao4(k),$async$GT)
case 3:j=e
w=4
return B.b(C.amL(k),$async$GT)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fyP(j,t.bSR())
w=t.ga8q()?5:7
break
case 5:r=t.gMV()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWl(r),$async$GT)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bk(s,new C.ece())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.bk(s,new C.ecf())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.J)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xw(m==null?"":m)!=null)continue
C.fkE(n,s)
p=!0}t.n(new C.ecg(t,s))
if(p||s.length>J.aa(j))t.rG()
case 1:return B.h(u,v)}})
return B.i($async$GT,v)},
bSR(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kd(w)&&w!==q}if(w)p.push(r)
return p},
cdx(d){var w,v=this,u=d.w
if(!C.kd(u)||u==="hati_kiapo_uongozi")return
v.a7g(d)
w=A.d.be(v.d,new C.edP(d))
u=v.d
if(w>=0){u[w]=d.hr()
v.d[w].f=new B.N(Date.now(),0,!1)}else A.d.cj(u,0,d.hr())
v.db=!1},
c7X(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kd(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cdx(t)
s=u.d
w=B.S(s)
v=w.k("cQ<1,hP>")
s=B.z(new B.cQ(new B.a3(s,new C.edD(),w.k("a3<1>")),new C.edE(),v),v.k("E.E"))
return s},
MB(d){return this.bHd(d)},
rG(){return this.MB(null)},
bHd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c7X()
w=3
return B.b(C.TO(d==null?t.a.c:d,s),$async$MB)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.an2(r)?4:5
break
case 4:w=6
return B.b(C.a4S(r),$async$MB)
case 6:q=r.x
p=A.a.i(q==null?t.gMV():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.ebC())
q=t.d
if(o>=0)q[o]=r.hr()
else A.d.cj(q,0,r.hr())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MB,v)},
ow(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kd(u.w))===!0?A.hE:A.lg
v.at=B.cV(w,new C.eeX(v))},
aTI(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acx(u.hr(),v.f,v.r))
if(w.length>40)A.d.ct(w,0)
A.d.a8(v.ay)},
cqk(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acx(w.e.hr(),w.f,w.r))
w.n(new C.efN(w,v.pop()))
w.ow()},
ccE(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acx(w.e.hr(),w.f,w.r))
w.n(new C.edN(w,v.pop()))
w.ow()},
nz(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.efA(u))
if(w>=0){u.d[w]=u.e.hr()
u.d[w].f=new B.N(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.N(Date.now(),0,!1)},
Ve(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wr(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.R$=$.as()
u.O$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bF(0)
u.fR()}w.a8(0)},
Iv(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cQ<1,n>")
t=B.d7(new B.cQ(new B.a3(w,new C.efB(),v.k("a3<1>")),new C.efC(),u),u.k("E.E"))
w=this.ch
v=B.a2(w).k("ct<1>")
v=B.z(new B.ct(w,v),v.k("E.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.J)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.as()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bF(0)
p.fR()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.J)(v),++r){n=v[r]
if(n.b!==D.cG)continue
p=n.a
m=w.ci(0,p,new C.efD(n))
s.ci(0,p,new C.efE())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Gd(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bc(u.d,new C.eb0(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gMV()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hr())}u.nz()
u.ow()},
afy(d,e){var w,v,u,t,s=this
if(s.jF())return
w=s.Ve(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kd(v.w))===!0
if(u){C.hGT(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hGU(t,w.d+w.f*0.5)}}s.Gd()
s.nz()
s.ow()
if(u&&s.c!=null)s.n(new C.efO())},
crn(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gd()
w.nz()
w.ow()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpw(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hF_(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.bg(p==null?v.e:p)
u=q.bQk(v)
t=q.bQj(v)
s=B.bg(v.e)
r=v.f
return new C.jr(o,"Class template",p,u,t,s,r==null?null:B.bg(r))}return C.hiE(o)},
bQk(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
if(t.b===D.cG)s=t.w>=28||A.o.D(A.o.aj(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.bg(t.Q)}return A.M},
bQj(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cG&&t.w<28)return B.bg(t.Q)}return A.aI},
abC(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8q()){w.c.E(x.q).f.P(D.egR)
return}w.a7g(d)
w.aUT(C.bxn(d))
return}if(C.c8g(v)){w.a7g(d)
w.aUT(d)
return}w.n(new C.ecW(w,d))},
anC(){var w,v,u,t,s,r,q=this
q.a_p(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kd(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.eaZ(q))
if(r&&q.c!=null){u.toString
q.I4(u,s)}return}q.rG()
q.n(new C.eb_(q))},
aUS(d){this.a7g(d)
this.Y1(d,!0)},
a7g(d){if(!C.kd(d.w))return
C.fkE(d,this.d)},
Y1(d,e){return this.c40(d,e)},
aUT(d){return this.Y1(d,!1)},
c40(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Y1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bxn(d)
if(e){r=s.x
q=A.a.i(r==null?t.gMV():r)
t.dy.W(0,q.toLowerCase())
C.amM(t.a.c,q)}r=s}else r=d
w=C.c8g(r.w)?3:4
break
case 3:w=5
return B.b(t.a7h(r),$async$Y1)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bc(t.d,new C.edi(l))
o=l.a.hr()
n=C.kd(o.w)&&C.hI3(o)
t.n(new C.edj(t,o,p))
if(n){m=A.d.be(t.d,new C.edk(o))
if(m>=0){t.d[m]=o.hr()
t.rG()}}if(!t.a8T(l.a))t.Wk()
r=!1
if(t.c!=null)if(!t.a8T(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.an2(r)&&C.fgL(l.a)}else l=r
else l=r
if(l)t.c.E(x.q).f.P(D.ehp)
case 1:return B.h(u,v)}})
return B.i($async$Y1,v)},
a7h(d){return this.bFv(d)},
bFv(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.kX(r.c,A.xP),$async$a7h)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kC(!1,r,s.c,s.d,null,A.xP,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7h,v)},
ns(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ns=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c8g(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c7F(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ns,v)},
abk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.ecV(),s,null,!0,!0,x.H),$async$abk)
case 3:if(t.c==null){w=1
break}t.anC()
case 1:return B.h(u,v)}})
return B.i($async$abk,v)},
abj(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.ecS(),s,null,!0,!0,x.H),$async$abj)
case 3:if(t.c==null){w=1
break}t.n(new C.ecT())
t.anC()
case 1:return B.h(u,v)}})
return B.i($async$abj,v)},
Wk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Wk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.au(),$async$Wk)
case 3:r=e
if(B.kn(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.an("Bool","ngmy_marriage_hint_seen",!0),$async$Wk)
case 4:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.eft)
case 1:return B.h(u,v)}})
return B.i($async$Wk,v)},
I4(d,e){return this.cdX(d,e)},
cdX(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$I4=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.adK(s,t.gD2(),t.gD1(),!0,e,t.d),$async$I4)
case 9:w=4
break
case 6:w=10
return B.b(C.adL(s,t.gD2(),t.gD1(),!0,e,t.d),$async$I4)
case 10:w=4
break
case 7:w=11
return B.b(C.adM(s,t.gD2(),t.gD1(),!0,e,t.d),$async$I4)
case 11:w=4
break
case 8:w=12
return B.b(C.adN(s,t.gD2(),t.gD1(),!0,e,t.d),$async$I4)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$I4,v)},
bRQ(){var w,v,u,t,s=this
if(!s.ga8q()){s.c.E(x.q).f.P(D.efG)
return}w=s.gMV()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.adJ(u,t,v,new C.eca(s),new C.ecb(s),w)},
abD(){var w=0,v=B.j(x.H),u=this,t,s
var $async$abD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c0(A.dw,new C.ed1(u),s,!0,!0,!1,A.l0,!1,!1,x.N),$async$abD)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.adN(s,u.gD2(),u.gD1(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.adK(s,u.gD2(),u.gD1(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.adL(s,u.gD2(),u.gD1(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.adM(s,u.gD2(),u.gD1(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bRQ()
return B.h(null,v)}})
return B.i($async$abD,v)},
c38(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aTI()
w=C.cx()
v=C.Ah(t,t,t,t,D.AV,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.ed2(u,v))},
a6I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a6I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pt()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hMh(s),$async$a6I)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e7(q.r,new C.eb2())
t.cX(new C.eb3(t,p,q,r))
s=t.c.E(x.q).f
o=r.r.length
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a6I,v)},
adA(d,e,f,g){var w=null,v=g?A.du:A.bN,u=B.H(g?A.be:A.ct,A.r,1)
return B.hJ(B.aJ(w,B.p(w,B.U(d,g?A.c:A.aI,w,w,w,18),A.i,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Y0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Y0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pt()){w=1
break}s=t.ji()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.edd(),q),q.k("E.E"))}o=s!=null&&s.b===D.l_?B.a([s],x.u):p
if(o.length===0){t.c.E(x.q).f.P(D.ehA)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c0(A.K,new C.ede(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Y0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Y0,v)},
abU(){return this.c4_()},
c4_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$abU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pt()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hM4(s,t.f+1,o),$async$abU)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.ki(s,B.S(s).c)
p.a=A.d.be(o.r,new C.edg(q))
t.cX(new C.edh(p,t,o,q,r))
t.c.E(x.q).f.P(D.ehZ)
case 1:return B.h(u,v)}})
return B.i($async$abU,v)},
ac0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ac0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pt()||!t.yL()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("a3<1>")
p=B.z(new B.a3(r,new C.edy(),q),q.k("E.E"))
if(p.length===0){t.c.E(x.q).f.P(D.efe)
w=1
break}o=new B.I(p,new C.edz(),B.S(p).k("I<1,P>")).fq(0,new C.edA())
r=B.Q(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.J)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.b9(l,A.aY,A.aL),$.as()))}q=t.c
q.toString
w=3
return B.b(B.c0(A.K,new C.edB(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ac0)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.R$=$.as()
q.O$=0}if(t.c!=null)t.n(new C.edC())
case 1:return B.h(u,v)}})
return B.i($async$ac0,v)},
abG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$abG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pt()){w=1
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
return B.b(C.h1l(s,new C.D0(r,q,p,o==null?"":o)),$async$abG)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cX(new C.ed3(m,n))
s=t.c.E(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ae8(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abG,v)},
a7a(){return this.bES()},
bES(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pt()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hMg(s,t.f+1,l),$async$a7a)
case 3:r=e
q=$.fCa
$.fCa=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cX(new C.ebj())
t.c.E(x.q).f.P(D.ef6)
w=1
break}if(!q){s=r.CW
s=C.h0e(l,s==null?"":s,!1)}else s=!1
if(s){t.cX(new C.ebk(t,l,r))
t.c.E(x.q).f.P(D.eis)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.ki(s,B.S(s).c)
s=l.r
m.a=A.d.be(s,new C.ebl(p))
o=s.length
t.cX(new C.ebm(m,t,l,p,r))
n=s.length-o
s=t.c.E(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7a,v)},
aL3(d,e){if(e){this.acs()
return}this.c38(d,!1)},
bAH(){return this.aL3(null,!1)},
acs(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.bV,new C.edI(t),r,!0,!0,!0,A.ok,!1,!1,x.N),$async$acs)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.edJ(t,C.hEZ(s).oJ()))
case 1:return B.h(u,v)}})
return B.i($async$acs,v)},
cX(d){var w=this
if(w.pt())return
w.Gd()
w.aTI()
w.n(d)
w.Iv()
w.nz()
w.ow()},
a5h(){this.cX(new C.e9Y(this,D.m2))},
aMq(){var w=this.gdk()
if(w==null)return
this.cX(new C.ebh(this,w))},
aLE(){var w=this.e
if(w==null||w.r.length<=1)return
this.cX(new C.ebf(this))},
aXJ(d,e){if(this.e==null||d===e)return
this.cX(new C.edR(this,d,e))},
M9(d){return this.bCE(d)},
bCE(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$M9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gMV():s)
w=5
return B.b(C.amK(t.a.c,r),$async$M9)
case 5:t.dy.G(0,r.toLowerCase())
case 4:s=d.a
C.ao6(s)
w=6
return B.b(C.aYf(t.a.c,s),$async$M9)
case 6:if(t.c==null){w=1
break}t.n(new C.ebb(t,d))
w=7
return B.b(t.rG(),$async$M9)
case 7:case 1:return B.h(u,v)}})
return B.i($async$M9,v)},
cdU(d,e){var w=this
if(d.z){w.afe()
return}w.n(new C.edQ(w,d,e))
w.ow()},
ji(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Uj(d){return this.ch.ci(0,d.a,new C.eb1(d))},
app(d){return this.CW.ci(0,d.a,new C.ebD())},
a_p(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Ve(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aT.ae$.d.c
if(u!=null)u.j9()},
b_Z(){return this.a_p(!0)},
a_n(d){var w,v,u=this
if(u.pt())return
if(!u.yL())return
w=u.Ve(d)
if(w==null||w.b!==D.cG)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Uj(w).saR(0,"")}u.n(new C.efy(u,d))
$.aT.x1$.push(new C.efz(u,d,w))},
b0r(d){var w=this
if(d.b===D.cG&&!w.jF()&&w.yL()){w.a_n(d.a)
return}w.avh(d.a)},
avh(d){var w,v,u,t,s,r=this
if(r.jF())return
w=r.r
if(w!=null&&w!==d){v=r.Ve(w)
if(v!=null&&v.b===D.cG){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.eeY(r,s,d))
if(s||d==null){t=$.aT.ae$.d.c
if(t!=null)t.j9()}},
aHr(){this.cX(new C.e9Z(this))},
og(d){return this.bs9(d)},
bs9(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$og=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ns(),$async$og)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cX(new C.e9W(t,d))
case 1:return B.h(u,v)}})
return B.i($async$og,v)},
Tw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Tw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.EY(78,1920),$async$Tw)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.e9M(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Tw,v)},
Tq(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Tq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(Q.Bq(t.a.c),$async$Tq)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gag(s)){t.c.E(x.q).f.P(D.ej1)
w=1
break}w=r.gH(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c0(null,new C.e9J(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Tq)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cX(new C.e9K(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Tq,v)},
aoq(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bc(w.gdk().z,new C.ebd(v))){w.c.E(x.q).f.P(D.ei2)
return}if(w.w===v)w.a_p(!0)
w.cX(new C.ebe(w,v))},
bz_(){var w=this.ji(),v=w==null
if((v?null:w.b)===D.eN)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cG)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aI8(d,e){var w=this,v=w.ji(),u=w.gdk(),t=w.e
if(t==null)return
w.cX(new C.eaq(w,v,d,e,t,u))},
btH(d){return this.aI8(d,null)},
a5z(d){return this.btP(d)},
btP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2G.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ns(),$async$a5z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.ji()
if(s!=null){r=s.b
if(r===D.cG)t.btH(s.w>=28||s.x.gdB(0)>=A.I.gdB(0)?d.d:d.e)
else if(r===D.eN){r=d.c
t.aI8(r.j(0.88),r)}w=1
break}t.cX(new C.eav(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a5z,v)},
a5y(d){return this.btN(d)},
btN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ji()
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
return B.b(t.ns(),$async$a5y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.eat(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5y,v)},
btx(d){var w=this.gdk()
if(w==null)return
this.cX(new C.eap(this,w,d))},
Y5(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Y5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hMc(r),$async$Y5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nz()
t.n(new C.eds(t,s))
w=4
return B.b(t.rG(),$async$Y5)
case 4:if(t.c!=null)t.abC(s)
case 1:return B.h(u,v)}})
return B.i($async$Y5,v)},
a72(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a72=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_p(!0)
t.nz()
s=t.c
s.toString
w=3
return B.b(C.P8(s,q),$async$a72)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a72,v)},
Cf(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nz()
t=4
w=7
return B.b(C.aMi(m),$async$Cf)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aLJ(o,q,m.b),$async$Cf)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a5(l)
o=r.c
if(o==null){w=1
break}o.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Cf,v)},
DQ(d,e){return this.cpQ(d,e)},
cpQ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$DQ=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pt()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_p(!0)
t.nz()
s=h.a=t.e.hr()}else{r=A.d.be(t.d,new C.efH(d))
s=h.a=r>=0?t.d[r].hr():d.hr()}s=s.w
q=s==null
p=C.hFT(q?"":s)
o=C.h_b(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("a3<1>")
n=B.z(new B.a3(s,new C.efI(h,p),q),q.k("E.E"))
s=h.a.b
w=3
return B.b(t.cju(n.length,o,s),$async$DQ)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hFN(h.a)
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
return B.b(t.cjt(n,o),$async$DQ)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kS(t.d,new C.efJ(s))
s=h.a.b
w=11
return B.b(t.cjr(k.b,s),$async$DQ)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hr()
case 5:j=C.hFS(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.E(x.q).f.P(D.ejc)
w=1
break}w=12
return B.b(t.cjs(j.a,s,o,j.c),$async$DQ)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.efK(h,t,i))
t.ow()
case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
cju(d,e,f){var w=this.c
w.toString
return B.c0(A.K,new C.efd(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cjt(d,e){var w=this.c
w.toString
return B.c0(A.K,new C.efc(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cjr(d,e){var w=this.c
w.toString
return B.c0(A.K,new C.ef6(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cjs(d,e,f,g){var w=this.c
w.toString
return B.c0(A.K,new C.ef8(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a8u(){var w=null
return B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a8v(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.a9(0,A.G,d.j(0.28),A.dl,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.U(e,A.c,u,u,u,28),A.i,u,u,new B.o(u,u,u,t,w,new B.a7(A.ax,A.aE,A.w,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eG,B.C(B.u(B.a([B.d(g,u,u,u,u,u,u,D.esY,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a_,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aPz(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a0,w,w,w,A.QQ,A.L,w,w),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aPC(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a7(A.ax,A.aE,A.w,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.U(f,d,w,w,w,22),A.i,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.C(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mQ,w,w,w),A.dh,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a_,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.U(A.zV,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.i,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ec6(e,j),w,w,w,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa)},
bPk(d,e,f,g,h,i){return this.aPC(d,e,f,!1,g,h,i)},
aqI(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dQ,w,w,w),A.bw,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Vw,w,w,w)},
aPB(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.c9,w,new B.b5(B.m(14),A.V),w,w,w)
return B.bJ(B.d(e,w,w,w,w,w,w,A.mP,w,w,w),new C.ec5(d,f),v)},
aPA(d,e){return this.aPB(d,e,null)},
Il(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Il=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oy(l,s.c,s.d),$async$Il)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aO("=",l.length)+"\n\n"
q=new B.f3(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.hX(l,new C.eeZ());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7n(l.charCodeAt(0)==0?l:l,r.b),$async$Il)
case 4:l=t.a
w=5
return B.b(B.ox(l.c,l.d),$async$Il)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Il,v)},
Gz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Gz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oy(q,s.c,s.d),$async$Gz)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7n(A.Q.ak(r.ad(),null),r.b+".json"),$async$Gz)
case 4:q=t.a
w=5
return B.b(B.ox(q.c,q.d),$async$Gz)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Gz,v)},
b_N(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nz()
u.rG()
w=u.c
w.toString
v=B.eN(new C.efx(u,t),!1,null,x.z)
B.a6(w,!1).cz(v)},
FN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ns(),$async$FN)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fkR(),$async$FN)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hID(s.a)
q=t.c
q.toString
w=5
return B.b(B.c0(A.aG,new C.e9R(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FN)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cX(new C.e9S(t,s))
w=1
break}if(p==="split")t.cX(new C.e9T(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FN,v)},
Ly(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ly=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pt()){w=1
break}w=3
return B.b(t.ns(),$async$Ly)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMh(s,null,null),$async$Ly)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.e9X(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Ly,v)},
aXw(d){var w=this.e
if(w==null||!C.kd(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aJn(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMh(s,t==null?null:B.bg(t),u)},
a5f(d){return this.bs0(d)},
bs0(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pt()){w=1
break}if(!t.yL()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.ejr)
w=1
break}w=3
return B.b(t.aJn(),$async$a5f)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.e9O(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5f,v)},
adc(d){return this.ccH(d)},
ccH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pt()){w=1
break}if(!t.yL()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.eiA)
w=1
break}w=3
return B.b(t.aJn(),$async$adc)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cX(new C.edO(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adc,v)},
c_T(){var w,v,u=this
if(u.jF())return
w=new B.N(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.coW()}},
coW(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cX(new C.efF(this,r,(A.o.ar(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bPD(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cX(new C.ec9(this,r,u.d))},
bU2(d){var w
if(this.jF())return!1
w=this.e
if((w==null?null:C.kd(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fht(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kz&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bU3(d){var w
if(this.jF())return!1
w=this.e
if((w==null?null:C.kd(w.w))!==!0)return!0
if(!this.yL())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fht(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kz&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LG(d){return this.bud(d)},
bud(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pt()){w=1
break}if(!t.yL()){s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(D.ehq)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.amO(p),$async$LG)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.E(x.q).f.P(D.ei4)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a4S(r)
w=1
break}t.n(new C.eaz(t,d,o))
t.nz()
$.aT.x1$.push(new C.eaA(t))
case 1:return B.h(u,v)}})
return B.i($async$LG,v)},
Tu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Tu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ns(),$async$Tu)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bxZ(),$async$Tu)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cX(new C.e9L(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Tu,v)},
Mn(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Mn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ns(),$async$Mn)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.ji()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fkI(r),$async$Mn)
case 4:q=e
if(q==null){w=1
break}t.cX(new C.ebB(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Mn,v)},
iz(d){this.cX(new C.e9U(this,d))},
pi(d){return this.btq(d)},
btq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pt()){w=1
break}m=!D.aGB.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ns(),$async$pi)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FN()
w=1
break A
case"sign_paper":t.Ly()
w=1
break A
case"hd_photo":t.Tu()
w=1
break A
case"sharpen":t.Mn()
w=1
break A
case"print":t.Cf()
w=1
break A
case"rotate":s=t.ji()
if(s!=null)t.cX(new C.ea2(s))
w=1
break A
case"text_box":t.aHr()
w=1
break A
case"picture":t.Tw()
w=1
break A
case"present":t.b_N()
w=1
break A
case"new_slide":t.a5h()
w=1
break A
case"export_json":t.Gz()
w=1
break A
case"outline_share":t.Il()
w=1
break A
case"flashcard_tool":t.uj(D.FR)
w=1
break A
case"quiz_tool":t.uj(D.FS)
w=1
break A
case"worksheet_tool":t.uj(D.FT)
w=1
break A
case"duplicate_el":s=t.ji()
if(s==null){w=1
break A}t.cX(new C.ea3(t,s))
w=1
break A
case"delete_el":t.aoq()
w=1
break A
case"bring_fwd":s=t.ji()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.ea4(t,s))
w=1
break A
case"send_back":s=t.ji()
if(s==null||t.gdk()==null){w=1
break A}t.cX(new C.eaf(t,s))
w=1
break A
case"align_left":s=t.ji()
if(s!=null)t.cX(new C.eai(s))
w=1
break A
case"align_center":s=t.ji()
if(s!=null)t.cX(new C.eaj(s))
w=1
break A
case"align_right":s=t.ji()
if(s!=null)t.cX(new C.eak(s))
w=1
break A
case"grayscale":case"brighten":t.Mn()
w=1
break A
case"flip_h":s=t.ji()
if(s!=null)t.cX(new C.eal(s))
w=1
break A
case"flip_v":s=t.ji()
if(s!=null)t.cX(new C.eam(s))
w=1
break A
case"rectangle":t.og(D.b6)
w=1
break A
case"circle":t.og(D.ew)
w=1
break A
case"triangle":t.og(D.jj)
w=1
break A
case"arrow":t.og(D.AX)
w=1
break A
case"line":case"divider":t.og(D.fb)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.hX(q,new C.ean()),o=0;p.C();){n=A.a.fM(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a3(n,new C.eao(),B.S(n).k("a3<1>")).gH(0)}t.c.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cx()
t.iz(C.iH(A.L,!1,t.gpw().d.l(),A.ay,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.m3,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cx()
t.iz(C.iH(A.L,!1,t.gpw().e.l(),A.ay,22,A.bl,A.a_,0.12,q,"Subtitle goes here",0,D.d7,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iz(C.iH(A.bn,!0,4279310375,A.ay,20,A.bl,A.a_,0.5,C.cx(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.tb,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iz(C.iH(A.bn,!1,4279310375,A.ay,20,A.bl,A.a_,0.5,C.cx(),"1. First item\n2. Second item\n3. Third item",0,D.ta,0.8,0.1,0.22))
w=1
break A
case"quote":t.iz(C.iH(A.L,!1,4279310375,A.ay,24,A.cS,A.a_,0.25,C.cx(),'"Insert meaningful quote here."',0,D.d7,0.8,0.1,0.3))
w=1
break A
case"citation":t.iz(C.iH(A.bn,!1,4284773515,A.ay,14,A.bl,A.a_,0.1,C.cx(),"Author, Title (Year). Publisher.",0,D.tb,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iz(C.iH(A.dN,!1,4279310375,A.ay,14,A.bl,A.a_,0.08,C.cx(),C.by0(),0,D.d7,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iz(C.iH(A.dN,!1,4279310375,A.ay,13,A.bl,A.a_,0.06,C.cx(),"Page "+(t.f+1),0,D.d7,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cX(new C.ea5(t))
w=1
break A
case"footer_bar":t.cX(new C.ea6(t))
w=1
break A
case"highlight":t.cX(new C.ea7(t))
w=1
break A
case"redact":t.cX(new C.ea8(t))
w=1
break A
case"callout":t.cX(new C.ea9(t))
w=1
break A
case"checkboxes":t.iz(C.iH(A.bn,!1,4279310375,A.ay,20,A.bl,A.a_,0.45,C.cx(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.d7,0.8,0.1,0.2))
w=1
break A
case"table":t.iz(C.iH(A.bn,!1,4279310375,A.ay,16,A.bl,A.a_,0.55,C.cx(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.d7,0.8,0.1,0.18))
w=1
break A
case"memo":t.cX(new C.eaa(t))
w=1
break A
case"letter":t.iz(C.iH(A.bn,!1,4279179050,A.ay,17,A.bl,A.a_,0.82,C.cx(),C.by0()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iz(C.iH(A.bn,!1,4279310375,A.ay,22,A.bl,A.O,0.76,C.cx(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.tb,0.8,0.1,0.12))
w=1
break A
case"toc":t.iz(C.iH(A.bn,!1,4279310375,A.ay,18,A.bl,A.a_,0.76,C.cx(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.d7,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iz(C.iH(A.bn,!1,4279310375,A.ay,16,A.bl,A.a_,0.08,C.cx(),"Signature: _________________________",0,D.d7,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iz(C.iH(A.bn,!1,4279310375,A.ay,16,A.bl,A.a_,0.08,C.cx(),"Initials: ______",0,D.d7,0.3,0.65,0.78))
w=1
break A
case"approved":t.iz(C.iH(A.L,!1,4278556265,A.ay,28,A.bl,A.u,0.12,C.cx(),"APPROVED",0,D.m3,0.32,0.62,0.08))
w=1
break A
case"draft":t.iz(C.iH(A.L,!1,4292617766,A.ay,28,A.bl,A.u,0.12,C.cx(),"DRAFT",0,D.d7,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iz(C.iH(A.L,!1,871318596,A.ay,36,A.bl,A.u,0.12,C.cx(),"CONFIDENTIAL",0,D.d7,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cX(new C.eab(t))
w=1
break A
case"progress":t.cX(new C.eac(t))
w=1
break A
case"stars":t.iz(C.iH(A.L,!1,4279310375,A.ay,36,A.bl,A.a_,0.12,C.cx(),"\u2605\u2605\u2605\u2605\u2606",0,D.pj,0.8,0.1,0.4))
w=1
break A
case"equation":t.iz(C.iH(A.L,!1,4279310375,A.ay,32,A.bl,A.O,0.14,C.cx(),"y = mx + b",0,D.d7,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iz(C.iH(A.L,!1,4279310375,A.ay,18,A.bl,A.a_,0.2,C.cx(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ta,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cX(new C.ead(t))
w=1
break A
case"compare":t.cX(new C.eae(t))
w=1
break A
case"link_text":t.iz(C.iH(A.bn,!1,4280640491,A.m7,16,A.bl,A.a_,0.1,C.cx(),"https://example.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"phone":t.iz(C.iH(A.bn,!1,4279310375,A.ay,18,A.bl,A.a_,0.1,C.cx(),"(555) 123-4567",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"email":t.iz(C.iH(A.bn,!1,4280640491,A.ay,18,A.bl,A.a_,0.1,C.cx(),"name@email.com",0,D.d7,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cX(new C.eag(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cX(new C.eah(t,r))
w=1
break A
case"invoice":t.iz(C.iH(A.bn,!1,4279179050,A.ay,16,A.bl,A.a_,0.84,C.cx(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"resume":t.iz(C.iH(A.bn,!1,4279179050,A.ay,17,A.bl,A.a_,0.84,C.cx(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.d7,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iz(C.iH(A.bn,!1,4279310375,A.ay,16,A.bl,A.a_,0.88,C.cx(),"MEETING MINUTES\nDate: "+C.by0()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iz(C.iH(A.bn,!1,4279310375,A.ay,17,A.bl,A.a_,0.88,C.cx(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.d7,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iz(C.iH(A.bn,!1,4279310375,A.ay,15,A.bl,A.a_,0.8,C.cx(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.d7,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pi,v)},
ciX(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eap.q(0,this.z)},
ciW(d){if(this.ji()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b1f(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.ca,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.x.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hIs(d)
s=o?12:18
r=o?A.I:A.cY
if(o)if(e)q=f
else q=g?A.ak:A.ai
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.i,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.L(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Ld,A.i,p,p,D.Cc,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.B(A.h9,B.aJ(p,new B.am(A.W,p,A.a9,A.i,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bF7(d){var w,v=null,u=this.ji()
if(u==null)return A.bF
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ai,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.I(D.NF,new C.ebA(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
uj(d){return this.bs8(d)},
bs8(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$uj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aGx.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ns(),$async$uj)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cX(new C.e9V(t,d))
case 1:return B.h(u,v)}})
return B.i($async$uj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.e9x
w=h.e
if(w==null)return h.bvP()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.K(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bM,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.em,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bV:D.b0p
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQb()}else j=!1
if(j)k.push(new C.a5l(h.a.c,!1,h.e.gb3q(),h.gc_Q(),g))
else if(s&&h.e!=null&&!h.jF()&&C.c8g(h.e.w)){j=h.a
k.push(new C.a5l(j.c,j.d,g,h.gc0Z(),g))}if(s)k.push(h.bF3(w,t,r))
if(s&&h.jF()){w=t?A.fm:A.jT
j=B.m(14)
i=B.H(A.bf.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.bwe,A.ab,B.C(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.i,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zo,A.iU,g,g,g))}w=!n
if(w&&!h.jF())k.push(h.bUZ(t,r))
if(w&&h.jF())k.push(h.cpR(t))
if(r&&h.ji()!=null&&w&&!h.jF())k.push(h.bUV(t))
j=B.a([],l)
if(q&&w)j.push(new B.a8(132,g,h.b_j(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a8(g,72,h.b_j(t,!1),g))
i.push(B.C(new B.bE(A.b4,g,g,h.bx4(v,t,!s||p),g),1))
if(h.ciX(r)&&u&&s&&!h.jF())i.push(h.c_E(v,t,r))
j.push(B.C(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jF()&&h.ciW(!1))j.push(new B.a8(240,g,h.bHB(t),g))
k.push(B.C(B.A(j,A.al,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a8(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bUW(t))
return B.cg(g,m,B.br(!1,new B.am(A.W,g,A.a9,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bvP(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.K(p).ax.a===A.H
p=w?A.bV:A.bN
v=r.a.e
u=r.bZU(A.bf,A.oZ,new C.eaD(r),r.gc35(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.C(r.aHa(A.bf,A.hF,"Blank Presentation",new C.eaE(r)),1),A.av,B.C(r.aHa(A.aW,A.wY,"Class Template",new C.eaF(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.m6,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bsU(w))
else{t=new B.hv(t,B.S(t).k("hv<1>"))
A.d.v(u,t.gdH(t).di(0,new C.eaG(r,w),x.l))}return B.cg(q,p,B.br(!1,B.cX(u,q,new B.L(18,12,18,v),q,q,A.af,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bDs(){this.n(new C.ebg(this))
var w=this.c
w.toString
if(B.aG(w,A.bM,x.w).w.a.a<900){w=$.aT.ae$.d.c
if(w!=null)w.j9()}},
abV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ji()==null){w=1
break}s=t.c
s.toString
s=B.K(s)
r=t.c
r.toString
w=3
return B.b(B.c0(A.K,new C.edr(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$abV)
case 3:case 1:return B.h(u,v)}})
return B.i($async$abV,v)},
zI(d,e){return this.cjh(d,e)},
cjh(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zI=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hM(D.Ti,!0,"Dismiss",j,new C.ef_(),new C.ef0(d,e),A.i8,!0,x.N),$async$zI)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afe()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQb()){r.afe()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aMi(d),$async$zI)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aLJ(j,q,d.b),$async$zI)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a5(i)
j=r.c
if(j==null){w=1
break}j.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.DQ(d,!1),$async$zI)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hM(D.Ti,!0,"Dismiss",j,new C.ef1(),new C.ef2(d),A.X,!0,x.y),$async$zI)
case 20:if(g===!0)r.M9(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.acX("Rename presentation",d.b),$async$zI)
case 24:l=g
if(l!=null)r.cdU(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ad()
k.m(0,"id",C.cx())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.ef3(r,k))
r.ow()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zI,v)},
aVw(d,e){var w=null
return B.bF(!1,D.ePM,w,w,!0,w,w,e,w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bf,w,w,w,A.at,w,A.lR,w,w,w,w,w,A.k1,w,w))},
bsU(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ea_(this,d),null)},
bBA(d,e,f){var w=new B.I(B.a(d.split(" \u2022 "),x.s),new C.eb4(),x.dv).bZ(0,new C.eb5()),v=B.z(w,w.$ti.k("E.E"))
return new B.B(G.abY,this.aHJ(v,e,new C.eb6(),f),null)},
aHJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ey)
t=e.j(g?0.14:0.1)
s=new B.b2(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.U(p,g?A.ak:A.bz,n,n,n,10),A.v_],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.F(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cF(A.b_,A.e,A.R,A.m,n,A.p,n,0,q,n),A.i,n,n,new B.o(t,n,new B.c2(r,r,r,r),new B.bx(s,s,s,s),n,n,A.n),n,n,n,n,A.nj,n,n,n))
A.d.v(l,u)}return B.f_(A.a1,B.A(l,A.m,n,A.e,A.R,0,n,n),A.i,A.e8)},
bsS(d,e,f){return this.aHJ(d,e,null,f)},
bBC(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cTI
else if(v==="hati_kuhoweya")w=D.cHa
else{if(v==="hati_kiapo_uongozi")v=D.cvb
else v=C.kd(v)?D.cBF:A.Ni
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.eb9(this,f,d,e,w),null)},
bUW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.ji()
if(i==null||i.b!==D.cG)return A.bF
w=k.Uj(i)
v=k.app(i)
u=A.x.j(0.55)
t=x.p
s=B.br(!1,new B.B(A.zr,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.bd,B.bF(!1,D.eLO,j,j,!0,j,j,new C.ecA(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.H(A.bf.j(0.45),A.r,1)
o=B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.C(new B.B(A.fX,B.bQ(new B.B(A.eM,B.aI(j,A.T,!0,j,!0,A.q,j,B.aL(),w,A.bf,j,j,j,j,2,D.bBV,A.z,!0,j,!0,j,!0,v,A.ad,j,j,j,j,j,A.v1,j,j,j,j,j,j,!1,"\u2022",j,new C.ecB(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.y6,A.am,j,A.Ql,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.ba),j),1)
q=B.m(16)
p=d?A.bh:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.C(B.ce(B.A(B.a([k.t2(G.Ke,j,new C.ecC(k,i),d),k.t2(G.Ww,j,new C.ecD(k,i),d),k.t2(I.ag_,j,new C.ecE(k,i),d),k.t2(I.Xg,j,new C.ecF(k,i),d),k.t2(k.bsQ(i.as),j,new C.ecG(k,i),d),k.t2(D.ah8,j,new C.ecH(k,i),d),k.t2(D.ah7,j,new C.ecI(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.b_),1)
m=A.k.L(i.w)
return B.c_(0,B.aD(!1,A.X,!0,j,B.u(B.a([s,r,new B.B(D.be0,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ai,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d4],t),A.m,j,A.e,A.j,0,j,j),A.i,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ll,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.i,u,0,j,j,j,j,j,A.aa),0,0,0)},
bUV(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.ji()
if(m==null)return A.bF
w=m.b
v=w===D.cG
u=B.m(18)
t=x.O
t=d?B.a([A.bh,A.M],t):B.a([A.c,A.aN],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.a9(0,A.G,A.x.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.aYZ(A.je,"Edit",new C.ecl(o,m),d,!0))
if(w===D.l_)p.push(o.aYZ(A.L1,"Shape & ring",new C.ecm(o),d,!0))
p.push(o.t2(Aq.Es,"Format",new C.ecn(o),d))
if(v)A.d.v(p,B.a([o.t2(G.Ke,n,new C.eco(o,m),d),o.t2(D.ah8,n,new C.ecp(o,m),d),o.t2(D.ah7,n,new C.ecq(o,m),d)],q))
p.push(A.bd)
p.push(o.chc(A.e4,n,o.gaLC(),d,!0))
p.push(o.t2(A.hr,"Done",new C.ecr(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(n,n,s,u,r,new B.a7(A.a1,A.a7,A.w,t,n,n),A.n),n,n,n,A.Dl,A.ll,n,n,n)},
bsQ(d){switch(d.a){case 2:return D.Xd
case 1:case 5:return D.Xf
default:return D.Xe}},
bVK(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dN
default:return A.bn}},
avg(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aH
else if(h)w=A.c
else{v=g?A.ak:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.EH:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.U(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ey,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.B(A.q9,B.aD(!1,A.X,!0,n,B.aH(!1,v,!1,B.eq(new B.B(new B.L(q,8,q,8),B.A(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.i,A.K,0,n,n,n,n,n,A.aa),n)},
t2(d,e,f,g){return this.avg(d,e,f,g,!1,!1)},
aYZ(d,e,f,g,h){return this.avg(d,e,f,g,h,!1)},
chc(d,e,f,g,h){return this.avg(d,e,f,g,!1,h)},
bF3(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bh,A.M],m):B.a([A.c,A.mh],m)
w=B.H(e?A.aI:A.pQ,A.r,1.2)
v=B.a([new B.a9(0,A.G,A.bf.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a_P(A.eq,"Back",p.gbyK(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a0,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=""+d.r.length
r=p.f
q=x.p
s=B.a([u,A.d4,B.C(B.u(B.a([t,B.d(s+" slides \xb7 "+(r+1)+" of "+s,o,o,o,o,o,o,B.l(o,o,e?A.c1:A.ai,o,o,o,o,o,o,o,o,10,o,o,A.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.F,o,A.e,A.R,0,A.p),1)],q)
if(!p.jF()){u=p.a_P(A.x0,"Undo",p.ax.length===0?o:p.gcqj(),e)
A.d.v(s,B.a([u,p.a_P(D.bpQ,"Redo",p.ay.length===0?o:p.gccD(),e)],q))}s.push(p.a_P(A.wD,"PDF",new C.ebt(p),e))
s.push(p.a_P(A.hd,"Download as video",new C.ebu(p),e))
if(!p.jF())s.push(B.Av(o,o,B.U(A.nm,e?A.ak:A.bz,o,o,o,o),new C.ebv(p),A.J,new C.ebw(p),A.ag,"More",x.N))
s.push(A.d4)
s.push(B.aD(!1,A.X,!0,o,B.aH(!1,B.m(14),!0,B.eq(D.dLl,o,new B.o(o,o,o,B.m(14),o,K.EH,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaw2(),o,o,o,o,o,o,o),A.i,A.K,0,o,o,o,o,o,A.aa))
return B.p(o,B.A(s,A.m,o,A.e,A.j,0,o,o),A.i,o,o,new B.o(o,o,w,n,v,new B.a7(A.ax,A.aE,A.w,m,o,o),A.n),o,o,o,D.bdV,D.biT,o,o,o)},
cpR(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.H(d?A.d3:A.aJ,A.r,1)
return B.p(v,B.ce(B.A(B.a([w.ii(A.rR,"Print",new C.efL(w),d),w.ii(A.wD,"Download PDF",new C.efM(w),d),w.ii(A.p5,"Present",w.gaw2(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.b_),A.i,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zo,G.adF,v,v,v)},
a_P(d,e,f,g){var w,v=null
if(f==null)w=g?A.be:A.dt
else w=g?A.ak:A.aI
return B.aF(v,v,v,v,B.U(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bUZ(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.H(d?A.d3:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.I(p,new C.ecL(r,d),t),t.k("ai.E"))
t.push(new B.B(V.adl,new B.fh(new C.ecM(r),q),q))
A.d.v(t,w?B.a([new B.B(P.ud,r.adA(A.kT,"Ending celebration",r.gc3i(),d),q),new B.B(P.ud,r.adA(A.L1,"Logo ring & frame",r.gc3Y(),d),q)],x.p):A.fQ)
A.d.v(t,w?B.a([new B.B(P.ud,r.adA(A.nn,"Look and feel",r.gc3Z(),d),q),new B.B(P.ud,r.adA(A.p9,"Edit this slide's text",r.gc4u(),d),q)],x.p):A.fQ)
t.push(new B.B(P.ud,B.hJ(B.aJ(q,B.p(q,D.e93,A.i,q,q,new B.o(q,q,q,B.m(999),B.a([new B.a9(0,A.G,N.kM.j(0.4),A.J,10)],x.V),D.aj5,A.n),q,34,q,q,A.iA,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ecN(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ce(B.A(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bji,q,q,A.b_)
s=e?8:10
return B.p(q,B.u(B.a([t,B.ce(r.cf_(d),A.q,q,A.z,q,new B.L(8,2,8,s),q,q,A.b_)],x.p),A.al,q,A.e,A.j,0,A.p),A.i,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zo,q,q,q,q)},
cf_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cOn[v]
u.a=null
s=u.a=t.b
w.push(e.l8(e.cgD(s),t.a,new C.ee9(u,e),a3,D.aGx.q(0,s)))}w.push(e.ii(A.ku,"Notes Slide",new C.eea(e),a3))
w.push(e.l8(A.Ej,"Quiz",new C.eeb(e),a3,!0))
w.push(e.l8(L.DZ,"Worksheet",new C.eem(e),a3,!0))
w.push(e.l8(A.A5,"Flashcard",new C.eex(e),a3,!0))
w.push(e.l8(A.L2,"Lab Report",new C.eeI(e),a3,!0))
w.push(e.l8(A.wK,"Rubric",new C.eeP(e),a3,!0))
w.push(e.l8(A.o5,"Minutes",new C.eeQ(e),a3,!0))
w.push(e.l8(A.p3,"Syllabus",new C.eeR(e),a3,!0))
w.push(e.l8(A.Er,"Timeline",new C.eeS(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cPv[v]
w.push(e.l8(r.b,r.c,new C.eeT(e,r),a3,!D.aGB.q(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.ii(A.A8,a0,e.gaHq(),a3),e.ii(A.rO,"Picture",new C.eec(e),a3),e.ii(A.wV,"Bio link",new C.eed(e),a3),e.ii(A.XO,"Table",new C.eee(e),a3),e.ii(A.L7,"Sticky",new C.eef(e),a3),e.ii(A.uo,"Divider",new C.eeg(e),a3),e.ii(A.Et,"Header",new C.eeh(e),a3),e.l8(A0.E6,"Rectangle",new C.eei(e),a3,!0),e.l8(A.rH,"Circle",new C.eej(e),a3,!0),e.l8(A.X4,"Triangle",new C.eek(e),a3,!0),e.l8(A.jD,"Arrow",new C.eel(e),a3,!0),e.l8(D.boi,"Parallelogram",new C.een(e),a3,!0),e.l8(D.bqR,"Hexagon",new C.eeo(e),a3,!0),e.l8(A.uo,"Line",new C.eep(e),a3,!0),e.l8(A.wD,"PDF",new C.eeq(e),a3,!0),e.l8(N.XV,"Signature",new C.eer(e),a3,!0),e.ii(A_.A0,"Quote",new C.ees(e),a3),e.ii(D.WE,a1,new C.eet(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bM,x.w).w
u=x.p
t=B.A(B.a([e.aIe("Wide 16:9",D.AV,a3),e.aIe("Short 9:16",D.nw,a3),new B.B(A.h9,B.od(D.bsX,d,D.eIp,d,new C.eeu(e),d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.byZ("This slide",!e.Q,a3,new C.eev(e)),A.bp,e.aKn("All slides",e.Q,a3,new C.eew(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bz_()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bO,d,d,d,d,d,d,d,d,10,d,d,A.a_,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.I(D.ZG,new C.eey(e),n),n.k("ai.E"))
n=B.ce(B.A(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cQh[v]
j=B.bg(k)
i=new B.ay(k===4294967295?A.dt:A.be,1.5,A.r,-1)
l.push(new B.B(A.h9,B.aJ(d,B.p(d,d,A.i,d,d,new B.o(j,d,new B.c2(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eez(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.ce(B.A(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bzf()
g=B.S(h).k("I<1,B>")
h=B.z(new B.I(h,new C.eeA(e,a3),g),g.k("ai.E"))
return new B.a8(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.aw,n,A.P,m,A.aw,l,A.P,j,A.aw,B.ce(B.A(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.b_),A.ar,e.bRX(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.ji()
w=e.c
w.toString
w=B.aG(w,A.bM,x.w).w
u=new C.ee8(e)
t=new C.eeU(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NF,f.dy,new C.eeB(e,u,f),A.aW)
A.d.v(p,B.a([o,A.aw,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ai,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NF,q,new C.eeC(e,u),A.bf))
return new B.a8(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.ii(A.ku,w,new C.eeD(e),a3),e.ii(A.rR,"Print deck",new C.eeE(e),a3),e.l8(D.af8,"Export JSON",new C.eeF(e),a3,!0),e.ii(A.fv,"Duplicate Slide",e.gaMp(),a3),e.ii(A.e4,a2,e.gaLD(),a3),e.ckz(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.ji()
w=x.p
u=B.a([e.ii(D.WE,a1,new C.eeG(e),a3),e.ii(A.fv,"Duplicate",e.gaMp(),a3),e.ii(A.e4,a2,e.gaLD(),a3),e.ii(A.p5,"Present",e.gaw2(),a3),e.ii(A.A7,a0,e.gaHq(),a3),e.ii(A.Eg,"Fit Text",new C.eeH(e),a3),e.ii(A.wD,"Download PDF",new C.eeJ(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ii(A.jZ,"Transfer",new C.eeK(e),a3))
if(f!=null){w=B.a([A.ab,e.ii(G.Ke,"Bold",new C.eeL(e,f),a3),e.ii(G.Ww,"Italic",new C.eeM(e,f),a3),e.ii(G.aeK,"Underline",new C.eeN(e,f),a3),e.ii(A8.Kf,"Bullets",new C.eeO(e,f),a3),e.bHk(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bF7(a3))
w.push(e.ii(D.bmY,"Delete",e.gaLC(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aIe(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nw
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4d,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d4,D.bs9],v))
return new B.B(A.h9,B.ku(t,t,t,B.A(u,A.m,t,A.e,A.R,0,t,t),t,new C.eay(this,w,e),s===e,A.bf.j(0.25),t,t,t),t)},
ckz(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.be:A.ct,A.r,1)
u=B.m(8)
t=B.U(A.DX,d?A.aA:A.ai,q,q,q,14)
s=B.aF(q,q,q,q,D.ai6,q,q,q,new C.efg(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bg,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.ahW,q,q,q,new C.efh(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.i,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.JR,A.mx,q,q,q)},
cgD(d){switch(d.a){case 6:return A.A5
case 7:return A.Ej
case 8:return L.DZ
case 4:return A.Et
default:return A.ku}},
bHk(d,e){var w=null,v=B.H(e?A.be:A.ct,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.ai6,w,w,w,new C.ebG(this,d),w,w,w,w,w,A.c6),s=A.k.L(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bg,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.ahW,w,w,w,new C.ebH(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.i,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wo,A.mx,w,w,w)},
bRX(d){var w=null
return B.Av(B.BV(B.U(Ab.WH,d?A.ak:A.bz,w,w,w,16),w,w,D.eNx,w,w,w),w,w,new C.ecd(),A.J,this.gbtw(),A.ch,"Slide layout",x.fO)},
l8(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.H(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.U(d,g?A.dC:A.bf,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Ld,A.i,w,w,D.Cc,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.B(A.h9,B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.eq(new B.B(A.fX,B.u(B.a([new B.am(A.W,w,A.a9,A.i,q,w),A.dh,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aP:A.bz,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa),w)},
ii(d,e,f,g){return this.l8(d,e,f,g,!1)},
b_j(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.af:A.b_
v=B.hF(t,new C.efs(u,s,e,d),s.r.length,A.ch,t,w,new C.eft(e),!1)
s=d?A.aG:A.bN
w=B.a([],x.p)
if(e&&!u.jF())w.push(new B.B(A.ch,B.Kn(E.aij,new C.efu(u),B.p9(t,A.bf,t,t,t,t,t,t,t,t,t,t,E.aHd,t,t,t,t),"Add slide"),t))
w.push(B.C(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.i,s,t,t,t,t,t,t,t,t,t,t)},
bx4(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nw?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.B(new B.L(u,u,u,u),new B.bE(A.b4,v,v,new B.fY(w,B.aJ(v,B.co(new C.eaX(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eaY(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
bx6(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kd(a9.w))===!0,b1=b0&&C.fht(b3),b2=b0&&b3.b===D.kz&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jF())v=!b0||a7.bU3(b3)
else v=!1
if(!a7.jF())u=!b0||a7.bU2(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.ck:A.bf
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fER(b3))o=a8
else if(p&&!a7.jF())o=a7.gc_S()
else o=a7.jF()?a8:new C.eaL(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jB
i=w&&C.fER(b3)&&a7.yL()?new C.eaM(a7,b3):a8
h=v&&b3.b===D.cG?new C.eaN(a7,b3):a8
g=u?new C.eaO(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.br
else e=q?A.bQ:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bQ.j(0.08)
else a0=b3.b===D.kz?A.K:a8
if(b1){a1=a7.jF()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bQ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bM,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yL()
a3=b3.b===D.cG
a4=a3?a7.Uj(b3):a8
a5=a3?a7.app(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bM,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eaP(a7,b3):a8
a3=v&&a3?new C.eaQ(a7,b3):a8
a6=C.aYb(q,a4,a1,b3,a5,a2,a3,new C.eaR(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.i,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.buU,A.i,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eaS(a7,b3,b4,b5),a8,a8,new C.eaT(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jF()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bvy,A.i,a8,a8,new B.o(A.fJ,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbPC(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jF()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bx4,A.i,a8,a8,new B.o(A.bQ,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.a9(0,A.G,A.x.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eaU(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cG)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bM,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.at(B.aJ(a8,B.p(a8,D.eVt,A.i,a8,a8,new B.o(A.bf,a8,a8,B.m(999),B.a([new B.a9(0,A.G,A.x.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kq,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eaV(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.eO(A.C,f,new B.am(A.W,a8,A.a9,A.i,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cv("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aKn(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bf.j(0.25)
else w=f?A.c.j(0.06):A.x.j(0.04)
v=B.m(10)
u=B.H(e?A.bf:A.bG,A.r,1)
if(e)t=A.bf
else t=f?A.aA:A.ai
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d4,B.p(r,D.Ld,A.i,r,r,D.Cc,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.A(t,A.m,r,A.e,A.R,0,r,r),A.i,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.fW,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
byZ(d,e,f,g){return this.aKn(d,e,f,g,!1)},
c_E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.as()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.b9(v,A.aY,A.aL),$.as()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aN
t=f?A.vu:l
if(f)s=new B.c2(new B.ay(e?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else s=l
r=f?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tj,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ak:A.bz,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.bd,m.aVw(e,new C.ecP(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bO,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.C(B.aI(l,A.T,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bn(l,new B.b0(4,B.m(10),A.d9),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.ad,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ecQ(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.am,l,l,l,l),1)],q),A.al,l,A.e,A.j,0,A.p),A.i,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.L(12,w,12,v),l,l,l)},
aNE(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.ji()
if(a2==null)return A.bF
w=new C.ebU(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dJ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.bd,a0.aVw(a3,a0.gbDr())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.U)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.eIQ,B.C(B.mq(a1,a1,a1,u,0.05,new C.ebV(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.eU4,B.C(B.mq(a1,a1,a1,t,0.05,new C.ebW(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cG
if(m)o.push(B.A(B.a([D.eDf,B.C(B.mq(a1,a1,a1,96,10,new C.ebX(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l_
if(l||n===D.kz||n===D.OU)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.eOa,B.C(B.mq(a1,a1,a1,s,0,new C.ebY(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.eVe,B.C(B.mq(a1,a1,a1,r,0,new C.ebZ(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Ao[j]
i.a=null
g=h.a
i.a=g
k.push(B.ku(a1,a1,a1,new B.w(h.b,a1,A.pw,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ec_(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.cf(A.bI,k,A.by,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Aj[j]
f.a=null
g=e.a
f.a=g
h.push(B.ku(a1,a1,a1,new B.w(e.b,a1,A.pw,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.ec0(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.cf(A.bI,h,A.by,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.I(v,new C.ec1(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.cf(A.bI,l,A.by,6,6),A.ac,B.fQA(new C.ec2(w,a2),D.c6D,B.eM([a2.as],k),!0,a1,k)],p))}if(n===D.eN){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ai,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.I(v,new C.ec3(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.cf(A.bI,m,A.by,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bwR,D.ePW,new C.ec4(a0,a5),B.bk(A.bR,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cX(o,a1,a1,q,a1,A.af,a5)
if(a5)return d
q=a3?A.d3:A.c
p=a4?A.vu:a1
if(a4)o=new B.c2(new B.ay(a3?A.bG:A.aJ,1,A.r,-1),A.V,A.V,A.V)
else o=a1
return B.p(a1,d,A.i,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.a9(0,A.G,A.x.j(0.12),A.tj,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Dm,a1,a1,a1)},
bHB(d){return this.aNE(d,!1,!1,null)},
bZU(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.ec7(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.etP,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bb,B.C(B.u(B.a([w,A.bw,A.dh,r.bsS(D.czl,d,B.K(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dN(B.hJ(B.aD(!1,A.X,!0,q,B.aH(!1,q,!0,B.eq(D.edU,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.a9(0,A.G,A.bQ.j(0.4),A.e6,8)],p),D.aja,A.a6),q,q,q),A.cD,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.i,A.K,0,q,q,q,q,q,A.aa),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.K(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aYA,D.aYW],v):B.a([A.c,A.jT],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.i,q,q,new B.o(q,q,u,w,B.a([new B.a9(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a7(A.ax,A.aE,A.w,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aHa(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.e9H(this,g,d,e,f),null)},
acX(d,e){return this.cb1(d,e)},
cb1(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$acX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.as()
q=new B.ao(new B.b9(e,A.aY,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.edM(d,q),p,null,!0,!0,x.N),$async$acX)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$acX,v)},
NV(d){var w=d.bP()
return""+B.bC(w)+"/"+B.bN(w)+"/"+B.by(w)}}
C.acx.prototype={}
C.avA.prototype={
S(){return new C.b8u(null,null)}}
C.b8u.prototype={
gcmC(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bC(u)+"/"+B.bN(u)+"/"+B.by(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bh(u,A.oS,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bh(u,D.bcu,u,1,u,v)
w.cn(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bmv()},
Hn(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cm.aq(0,new B.hD(w,v,A.cm).aq(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.B(D.bhN,B.c4(new B.h2(B.a([u,w],x.dS)),new C.cUf(this),v),v),v,v,v)}}
C.b8I.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.at(new B.B(D.bi3,B.aD(!1,A.X,!0,w,B.p(w,B.bw(B.m(22),B.u(B.a([new B.B(D.bhh,B.u(B.a([B.p(w,D.bvE,A.i,w,w,new B.o(A.aH.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aT,D.eRO,A.U,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.euV,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,D.bby,B.A(B.a([B.C(B.bF(!1,D.eHf,w,w,!0,w,w,new C.cUB(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.bO,w,w,w,w,w,A.ms,w,A.nA,w,w,w,w,w,w)),1),B.p(w,w,A.i,A.bh,w,w,w,48,w,w,w,w,w,1),B.C(B.bF(!1,D.eM6,w,w,!0,w,w,new C.cUC(d),w,B.fn(w,w,w,w,w,w,w,w,w,w,w,A.aH,w,w,w,w,w,A.ms,w,A.nA,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.i,w,S.a6D,new B.o(A.aG,w,u,v,D.czE,w,A.n),w,w,w,w,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa),w),w,w,w)}}
C.HW.prototype={
S(){return new C.b8t()}}
C.b8t.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.H(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.a9(0,A.G,m.j(0.08),A.dF,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.U(q.c,m,o,o,o,18),A.i,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dN(B.d8(B.aJ(o,B.vW(B.de(o,B.A(B.a([r,A.av,new B.dp(1,A.cj,B.d(q,o,2,A.a0,o,o,o,B.l(o,o,l?A.fL:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b5,A.R,0,o,o),o,o,A.b7,new B.o(n,o,u,v,t,o,A.n),A.eC,o,o,o,A.rx,o,o,1/0),A.cm,A.ja,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cUa(p,d),new C.cUb(p),new C.cUc(p),new C.cUd(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.Nz.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.B(A.eM,B.A(B.a([B.p(v,B.U(w.c,A.c,v,v,v,22),A.i,v,v,new B.o(v,v,q,r,v,new B.a7(A.ax,A.aE,A.w,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eG,B.C(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mQ,v,v,v),A.bw,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.U(A.el,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.i,u,0,v,v,v,v,v,A.aa)}}
C.Yf.prototype={
S(){return new C.aAX(D.d7,null,null)}}
C.aAX.prototype={
gWq(){var w,v=this,u=v.w
if(u===$){w=B.bh(null,D.bc4,null,1,null,v)
v.w!==$&&B.bG()
v.w=w
u=w}return u},
b_I(d){if(!this.a.c.ay)return
this.x=d
this.gWq().ib(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.asx(D.ekd)
C.hFt()
v.Pj()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWq().p()
v=w.z
if(v!=null)v.a9(0)
C.asx(D.eke)
C.hFw()
w.boC()},
cpi(){B.j5()
this.n(new C.egr())
var w=this.c.E(x.q).f
w.a1R()
if($.bg6)w.P(D.eh6)},
Pj(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cV(B.dA(0,0,0,0,0,A.o.D(C.fOJ(u,w),1,120)),new C.egh(v))},
coY(){var w,v=this
v.n(new C.egq(v))
if(v.r)v.Pj()
else{w=v.f
if(w!=null)w.a9(0)}},
gaPs(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cjn(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.egi(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cV(A.o0,new C.egj(w))},
as9(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.egd(u))
u.Pj()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaPs()){u.cjn()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.ege(u,A.o.J(w+1,s)))
u.b_I(w)
u.Pj()}},
c9I(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.egf(v))
v.Pj()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.egg(v,w,t))
v.b_I(w)
v.Pj()}},
ckL(d){var w,v=this,u=v.e
if(u===D.ca){u=v.d
u===$&&B.c()
return new B.n5(d,new B.cv(u,x.ac))}w=v.ckM(u)
u=v.d
u===$&&B.c()
return B.qh(new B.n5(d,new B.cv(u,x.ac)),w,new C.ego(),A.b7,A.b7,new C.egp(v))},
ckM(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bcq
case 16:return A.kQ
case 18:return A.nZ
default:return A.oU}},
ckK(d,e,f){var w,v,u,t=null,s=B.cD(A.cm,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.L
return B.jb(e,new B.bb(s,new B.bm(A.tk,A.J,w),w.k("bb<bB.T>")),t,!0)
case 3:w=x.L
return B.jb(e,new B.bb(s,new B.bm(A.P8,A.J,w),w.k("bb<bB.T>")),t,!0)
case 4:case 21:w=x.L
return B.jb(e,new B.bb(s,new B.bm(A.ij,A.J,w),w.k("bb<bB.T>")),t,!0)
case 5:w=x.L
return B.jb(e,new B.bb(s,new B.bm(A.ti,A.J,w),w.k("bb<bB.T>")),t,!0)
case 6:case 16:w=x.b
return B.iE(A.C,new B.cZ(s,!1,e,t),t,new B.bb(s,new B.bm(0.82,1,w),w.k("bb<bB.T>")))
case 7:w=x.b
return B.iE(A.C,new B.cZ(s,!1,e,t),t,new B.bb(s,new B.bm(1.18,1,w),w.k("bb<bB.T>")))
case 8:return B.c4(s,new C.egk(s),e)
case 9:return B.c4(s,new C.egl(s),e)
case 10:return B.c4(s,new C.egm(s),e)
case 11:return B.c4(s,new C.egn(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.iE(A.C,e,t,new B.bb(s,new B.bm(1.03,1,w),w.k("bb<bB.T>"))),t)
case 14:w=s.gt(0)
v=x.L
return B.k0(B.jb(e,new B.bb(s,new B.bm(A.tk,A.J,v),v.k("bb<bB.T>")),t,!0),A.q,new C.bmZ(w,t))
case 15:w=x.L
return B.jb(e,new B.bb(s,new B.bm(A.P8,A.J,w),w.k("bb<bB.T>")),t,!0)
case 19:w=B.df()
w.ma((1-s.gt(0))*2)
v=s.gt(0)
u=s.gt(0)
w.jd(v,u,v,1)
return B.fp(A.C,B.d8(e,s.gt(0)),t,w,!0)
case 20:return B.eO(A.C,(1-s.gt(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.k0(new C.all(B.c4(n.gWq(),new C.egs(n,v,w),m),m),A.q,m)}else{t=B.qT(new C.GV(w,!0,!1,m))
l=B.bg(w.e)
u=n.ckL(B.eb(B.k0(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.fOJ(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ot,m,m,m),A.bp,D.bxP],k),A.m,m,A.e,A.R,0,m,m),A.i,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fD,m,m,m)
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
l.push(B.c_(0,new C.Lt(new C.D0(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nw?0.5625:1.7777777777777777
l.push(B.at(new B.fY(r,B.k0(B.tE(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bg6){r=B.Kn(A.lq,new C.egt(d),B.p9(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.A(B.a([r,A.ab,B.Kn(B.U(n.r?Ae.wT:A.iX,m,m,m,m,m),n.gcoX(),B.p9(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hi,m,m,m),A.i,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fD,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c5,B.p(A.kH,$.bg6?A.bF:s,A.i,m,m,m,m,64,m,m,D.bdb,m,m,150),A.z,!1,m,n.gcph(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cg(m,A.x,B.aJ(m,new B.am(A.W,m,A.aX,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.egu(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.I2.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.B(E.ad8,this.c,w),!0,!1,A.ag,!0,!1),A.i,w,w,D.aRT,w,w,w,w,w,w,w,w)}}
C.bmZ.prototype={
jc(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
k_(d){return d.b!==this.b}}
C.bdj.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aON
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.az:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.de(r,B.at(B.p(r,r,A.i,r,r,new B.o(r,r,r,t,r,E.uD,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b7,new B.o(s.f,r,u,w,r,r,A.n),A.hE,r,64,r,r,r,r,64)
return B.aJ(r,new B.a8(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.a0,r,r,r,B.l(r,r,v?A.az:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bdi.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d0r.h(0,p)
if(o==null)o=D.cPB
p=p==="none"
w=p?q:new B.a7(A.a1,A.a7,A.w,o,q,q)
p=p?A.cO.j(0.25):q
v=r.e
u=v?B.H(A.az,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahj:q
w=B.p(q,B.p(q,s,A.i,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.i,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ek,q,q,52)
return B.aJ(q,new B.a8(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.a0,q,q,q,B.l(q,q,v?A.az:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aGy.prototype={
aM(){this.aW()
this.aT()
this.dD()},
p(){var w=this,v=w.aX$
if(v!=null)v.a1(0,w.gdA())
w.aX$=null
w.a2()}}
C.aIz.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.bsA.prototype={}
C.aIA.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aM(){this.aW()
this.aT()
this.bu()}}
C.aYe.prototype={}
C.TP.prototype={
S(){return new C.aAV()},
b9P(d){return this.e.$1(d)}}
C.aAV.prototype={
gaZ4(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7r(){var w,v
if(this.d==="all")return B.bi(this.a.d,!0,x.I)
w=this.gaZ4()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaJ3(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gaZ4()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb_i(){return A.d.cO(this.ga7r(),0,new C.efY())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.OV()},
OV(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aYP(s.c,s.f),$async$OV)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.efU(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$OV,v)},
Hp(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7r()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.J)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fkE(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oy(o,q.c,q.f),$async$Hp)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eN(new C.efX(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cz(q),$async$Hp)
case 4:q=t.a
w=5
return B.b(B.ox(q.c,q.f),$async$Hp)
case 5:w=6
return B.b(t.OV(),$async$Hp)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hp,v)},
Ph(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ph=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hl(o,D.dDi,!0,"NgmySlidesTransferScan",x.N),$async$Ph)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.efV(t))
w=4
return B.b(C.aey(s),$async$Ph)
case 4:r=e
t.n(new C.efW(t))
o=J.a4(r)
if(o.gag(r)){o=t.c
if(o==null){w=1
break}o.E(x.q).f.P(D.eg_)
w=1
break}w=5
return B.b(t.a.b9P(r),$async$Ph)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).K(null)
q=t.c.E(x.q).f
p=o.gH(r)
o=o.gH(r)===1?"":"s"
q.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ph,v)},
Ho(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ho=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7r()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oy(s,r.c,r.f),$async$Ho)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fkT(null,A.d.gI(n),s,t.a.f)}else q=C.fkT(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.EM(q,"ngmy_slides_"+p,!1),$async$Ho)
case 4:o=e
s=t.a
w=5
return B.b(B.ox(s.c,s.f),$async$Ho)
case 5:w=6
return B.b(t.OV(),$async$Ho)
case 6:s=t.c
if(s==null){w=1
break}s.E(x.q).f.P(B.aZ(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ho,v)},
a0_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.efZ(t))
w=3
return B.b(C.bxK(),$async$a0_)
case 3:s=e
t.n(new C.eg_(t))
if(s==null||J.ch(s)){w=1
break}w=4
return B.b(t.a.b9P(s),$async$a0_)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).K(null)
r=t.c.E(x.q).f
q=J.a4(s)
p=q.gH(s)
q=q.gH(s)===1?"":"s"
r.P(B.aZ(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0_,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.K(d).ax.a===A.H,l=m?A.dc:A.bN,k=o.ga7r().length!==0,j=B.an(n,B.p(n,n,A.i,n,n,new B.o(n,n,n,n,n,new B.bT(A.C,0.5,A.w,n,0,B.a([A.bf.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.U(A.cu,m?A.ak:A.ai,n,n,n,n),n,n,n,new C.eg2(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.C(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.y2],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.a9(0,A.G,A.bf.j(0.35),A.eO,24)],x.V)
u=B.an(n,B.U(A.oZ,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.byi,A.i,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eG,B.C(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.blj],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hJ(B.aJ(A.c5,D.edW,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc4F(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.W,n,A.a9,A.i,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.Yo,A.n),n,n,n,n,E.Vj,n,n,1/0),A.dZ,o.at4(m,"What to transfer"),A.ac,B.A(B.a([B.C(o.aRz(A.p5,m,new C.eg3(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.C(o.aRz(D.bob,m,new C.eg4(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d1,o.at4(m,"Choose presentation"),A.U],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ai,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.i,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c2,n,n,n))}else A.d.v(v,new B.I(u,new C.eg5(o,m),B.S(u).k("I<1,r>")))
A.d.v(w,v)}w.push(A.m6)
w.push(o.at4(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.C(o.amf(A.b3,k,!0,A.iY,m,o.r,o.gbZY(),"Scan on another device","Show QR"),1),A.av,B.C(o.aHb(A.j6,!0,A.iC,m,o.gcgd(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.U)
w.push(B.A(B.a([B.C(o.brq(A.aR,k,A.hd,m,o.r,o.gbZV(),"Download .json","Backup file"),1),A.av,B.C(o.aHb(A.aZ,!0,Am.x1,m,o.gcry(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bf.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bf.j(0.28),A.r,1)
s=B.U(A.kU,A.bf.j(0.9),n,n,n,18)
r=o.gaJ3()
q=o.gb_i()
p=o.gb_i()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.A(B.a([s,A.av,B.C(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ak:A.bz,n,n,n,n,n,n,n,n,12,n,n,A.a_,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.i,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.B(Aa.JS,i,n),B.C(B.cX(w,n,D.bgu,n,n,A.af,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,R.SA,A.i,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cg(n,l,new B.am(A.W,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
ac7(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ac7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hLv(s,t.d,t.e),$async$ac7)
case 2:return B.h(null,v)}})
return B.i($async$ac7,v)},
at4(d,e){var w=null,v=B.p(w,w,A.i,w,w,new B.o(A.bf,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ai,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aRz(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bf
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.a9(0,A.G,A.bf.j(0.2),A.cv,14)],x.V):s
u=A.bf.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.U(d,A.bf,s,s,s,22),A.i,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.eq(new B.B(A.bC,B.u(B.a([t,A.U,u,A.bw,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.i,A.K,0,s,s,s,s,s,A.aa)},
bBB(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bf
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.byr,A.i,q,q,new B.o(q,q,q,B.m(12),q,new B.a7(A.a1,A.a7,A.w,B.a([A.bf,A.bf.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a0,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.C(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ei:A.rH
if(p)r=A.bf
else r=e?A.be:A.dt
return new B.B(A.cR,B.aD(!1,A.X,!0,q,B.aH(!1,o,!0,B.p(q,B.A(B.a([v,A.bb,t,B.U(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.i,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.efT(this,d),q,q,q,q,q,q,q),A.i,A.K,0,q,q,q,q,q,A.aa),q)},
amf(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.U(g,d,s,s,s,22),A.i,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rC,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ahQ,A.i,s,s,D.aRG,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d8(B.aD(!1,A.X,!0,s,B.aH(!1,p,!0,B.eq(new B.B(E.UY,B.u(B.a([new B.am(A.W,s,A.a9,A.i,u,s),A.ac,v,A.bw,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ai,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.i,A.K,0,s,s,s,s,s,A.aa),r)},
aHb(d,e,f,g,h,i,j){return this.amf(d,e,!1,f,g,!1,h,i,j)},
brq(d,e,f,g,h,i,j,k){return this.amf(d,e,!1,f,g,h,i,j,k)}}
C.TQ.prototype={
S(){return new C.bg5()}}
C.bg5.prototype={
Z(){this.a0()
this.ab_()},
ab_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ab_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fkT(null,A.d.gI(m),k,r.a.f):C.fkT(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kd(A.d.gI(n).w))C.fkE(A.d.gI(r.a.d),D.cNN)
n=r.a
m=n.c
n=C.hII(n.d)
w=7
return B.b(C.fkS(p,C.hIN(r.a.d),n,m,q),$async$ab_)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.eg6(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.eg7(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.K(d).ax.a===A.H,h=i?A.dc:A.bN,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cO(k.a.d,0,new C.eg8())
v=B.aF(j,j,j,j,B.U(A.eq,i?A.ak:A.ai,j,j,j,18),j,j,j,new C.eg9(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.C(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.y2],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dQ,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.i,j,j,new B.o(j,j,j,t,j,D.Yo,A.n),j,j,j,j,E.Vj,j,j,1/0)
q=B.m(24)
s=B.H(A.b3.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3y,A.L,j,j))
else if(k.d==null)r.push(D.dKX)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.a9(0,A.G,A.az.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eHH,A.ar,B.aJ(j,B.p(j,B.A(B.a([D.bzX,A.av,B.d(m,j,j,j,j,j,j,D.evg,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.i,j,j,new B.o(j,j,j,o,n,D.bDM,A.n),j,j,j,j,Y.acV,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ega(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eLF,A.aC],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.ph(j,j,!1,l,j,!0,!0,j,!1,D.b98),A.i,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.aC)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.im,A.L,j,j))
return B.cg(j,h,B.br(!0,B.u(B.a([new B.B(Aa.JS,v,j),B.C(B.ce(B.u(B.a([t,A.aT,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.i,j,j,new B.o(j,j,s,q,j,D.bFv,A.n),j,j,j,j,A.rB,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.add,j,j,A.af),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aAS.prototype={
S(){return new C.aAT(new B.ao(A.aq,$.as()),B.k4(!0,null,!0,!0,null,null,!1))}}
C.aAT.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.e9B(w))
$.aT.x1$.push(new C.e9C(w))},
p(){var w=this.d
w.R$=$.as()
w.O$=0
this.e.p()
this.a2()},
aTK(){var w,v=this.c
v.toString
w=C.xw(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).K(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.em,x.w).w,i=B.m(28),h=B.H(A.bf.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.a9(0,A.G,A.bf.j(0.28),A.th,36),D.a6T],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bvH,A.i,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.eF9,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a_,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.i,k,k,D.aS4,k,k,k,k,A.wn,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gdY()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b2(14,14)
if(q)n=A.bf
else n=r?A.bf.j(0.55):A.aI
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.a9(0,A.G,A.bf.j(0.28),A.J,12)],g):k
t.push(new B.bI(1,A.bt,B.de(A.C,new B.w(p,k,D.epi,k,k,k,k,k,k,k,k,k),k,k,A.b7,new B.o(s,k,new B.c2(m,m,m,m),new B.bx(o,o,o,o),n,k,A.n),A.hE,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.GG)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.c_(0,B.d8(B.aI(k,A.T,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bCE,A.z,!0,k,!0,k,!1,v,A.ad,k,k,B.a([new B.uG(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Cw(5,k),new C.bqa()],x.aS),k,k,A.aIr,k,5,k,1,k,k,!1,"\u2022",k,new C.e9x(l),k,new C.e9y(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.ly,k,k,k,k),0),0,0,0)],a1)
d=C.xw(w.a.a.toUpperCase())==null?k:l.gbZZ()
return B.at(new B.B(new B.L(24,24,24,24+j.f.d),B.aD(!1,A.X,!0,k,new B.d3(A7.HW,B.p(k,B.bw(e,B.u(B.a([a0,new B.B(D.bgY,B.u(B.a([new B.am(A.W,k,A.a9,A.q,g,k),A.U,D.eDE,A.bv,new B.a8(1/0,50,B.bJ(D.eSD,d,B.bk(A.bf,A.bh,A.ai,k,A.c,k,k,k,new B.b5(B.m(16),A.V),k,k,k)),k),A.ar,B.bF(!1,A.mS,k,k,!0,k,k,new C.e9z(a2),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bO,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.i,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.i,A.K,0,k,k,k,k,k,A.aa),k),k,k,k)}}
C.bqa.prototype={
nT(d,e){var w=e.a.toUpperCase()
return e.cxs(B.h0(A.bm,w.length),w)}}
C.ao7.prototype={
S(){return new C.aAW(B.y4(A.Ja,A.n_,A.rZ))}}
C.aAW.prototype={
p(){this.d.p()
this.a2()},
aTJ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.ir(w,d)},
a7k(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fsV(s),$async$a7k)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aTJ("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7k,v)},
bZX(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=C.hIL(w[u])
if(t!=null){this.aTJ(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uA,s,s,s,t.gbFC(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eK(B.a([r,B.aF(s,s,s,s,B.U(q?A.rM:Af.KK,s,s,s,s,s),s,s,s,new C.egc(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.eTM,s,s,s,1,s,!0)
r=B.y3(t.d,A.bP,t.gbZW())
w=B.m(28)
w=B.at(B.p(s,s,A.i,s,s,new B.o(s,s,B.H(A.bf,A.r,3),w,B.a([new B.a9(2,A.G,A.bf.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.x.j(0.72)
u=B.m(16)
return B.cg(p,A.x,new B.am(A.W,s,A.aX,A.q,B.a([r,w,B.an(32,B.p(s,D.eIE,A.i,s,s,new B.o(v,s,B.H(A.bf.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iB,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bqm.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([B.p(w,D.btW,A.i,w,w,D.aRP,w,56,w,w,w,w,w,56),A.aT,D.eTt,A.ar,new B.jZ(this.c,new C.eQF(),w,w,x.cI),A.aT,new B.jZ(this.d,new C.eQG(),w,w,x.cl),A.ac,D.eTq],x.p),A.m,w,A.e,A.R,0,A.p),A.i,w,A7.HW,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.Vq,D.bhy,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa)}}
C.a5l.prototype={
S(){return new C.bfQ(A.bs)},
gd5(){return this.c}}
C.bfQ.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.Xt()
w.d=B.dD(A.fV,new C.e0U(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
Xt(){return this.ccK()},
ccK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Xt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e0S(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.N(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c8h(p.c),$async$Xt)
case 6:r=e
q.a=r==null?A.bs:r
case 4:if(t.c==null){w=1
break}t.n(new C.e0T(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Xt,v)},
bHs(d){var w,v,u=d.a,t=A.o.aj(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.aj(u,6e7)%60
v=A.o.aj(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aU(A.o.u(w),2,"0")+"m "+A.a.aU(A.o.u(v),2,"0")+"s left"
return A.a.aU(A.o.u(w),2,"0")+":"+A.a.aU(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.aj(w,6e7)<30&&A.o.aj(w,36e8)<999?A.aH:A.bQ
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.U(A.DX,v,r,r,r,20),A.av,B.C(B.d("Marriage document session \xb7 "+s.bHs(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.i,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.bdQ,A.iU,r,r,1/0)}}
C.apH.prototype={
u(d){return B.aU(this).u(0)+" fillOpacity:"+B.t(this.a)+" strokeOpacity:"+B.t(this.b)+" blendMode:null softMask:null transferFunction:null"},
cGQ(){var w=B.Ul(null,x.F),v=w.a
v.m(0,"/CA",new B.fO(this.b))
v.m(0,"/ca",new B.fO(this.a))
return w},
A(d,e){var w
if(e==null)return!1
if(!(e instanceof C.apH))return!1
if(e.a===this.a)w=e.b===this.b
else w=!1
return w},
gV(d){return A.k.gV(this.a)*A.k.gV(this.b)*A.ED.gV(null)*A.ED.gV(null)*A.ED.gV(null)}}
C.a6b.prototype={
mF(){var w,v,u,t=this
t.wc()
w=t.cx
v=t.c
w.bjc(t.cy,t,v)
u=x.F
v.a.m(0,"/A",B.pn(B.D(["/S",D.dNA,"/URI",new B.qP(B.Um(w.as),A.tn,!0)],x.N,u),u))}}
C.a6c.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.aZT.prototype={
bqx(d,e,f,g,h,i,j,k,l,m){var w=B.eM([D.dLT],x.di)
this.w!==$&&B.aO()
this.w=w},
gcAC(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jx(w,new C.cau(),B.a2(w).k("jx<cj.E,G>")).fq(0,new C.cav())},
ay9(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.fZ(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rL(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.iW(d.a,d.b))
s.m(0,"/Border",B.rL(D.bHp))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fO(t.gcAC()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.pn(w,x.F))}}
C.caw.prototype={}
C.a0A.prototype={}
C.afm.prototype={}
C.aNs.prototype={
fY(d){var w,v,u,t,s,r,q=this,p=null
q.l5(d)
q.Kf(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.b9c(w)
u=x.N
t=x.F
s=new C.caw(q.d.a,"/Link",w,p,p,p,p,p,B.Q(u,t))
s.bqx(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pn(B.D(["/Type",D.dNy],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6b(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.G(0,r)
v.dx.push(r)}}
C.atv.prototype={}
C.aZu.prototype={
fY(d){var w,v,u,t,s,r,q=this
q.l5(d)
w=q.b
if(w!=null){v=B.df()
u=q.a
v.e_(u.a,u.b,0,1)
u=d.b
u.i3()
u.pd(0,v)
t=q.d
t=new C.apH(t,t)
s=u.d.x.gaEO().cx
r=A.d.cP(s,t)
if(r<0){r=s.length
s.push(t)}u.e.dE(new B.cW("/a"+r+" gs "))
w.fY(d)
u.nh(0)}}}
C.aOW.prototype={
fY(d){var w,v,u,t,s=this
s.l5(d)
w=s.b
if(w!=null){v=B.df()
u=s.a
v.e_(u.a,u.b,0,1)
u=d.b
u.i3()
t=s.a
t.toString
u.Jr(t)
u.Qr(0)
u.pd(0,v)
w.fY(d)
u.nh(0)}}}
var z=a.updateTypes(["av<~>()","~(lj)","R(hP)","~()","R(ev)","R(nO)","R(lj)","~(hP)","R(ev,ev)","I2(Z)","R(ne)","R(kU)","av<R>()","G(G,hP)","al<ym>()","n(ne)","R(a5B)","n(lj)","n(v2)","R(D9)","G(hP,hP)","a0<n,@>(hP)","n(ev)","r(ev)","cE(ev)","r(hm)","~(hm)","ev(n,P,P,P,P{anim:hm,delay:G,fx:n,key:n})","R(ym)","R(n,al<ym>)","G(nO,nO)","ne()","a0<n,@>(nO)","ev(n,P,P,P,P,P{align:pt,anim:hm,bullets:R,color:G?,delay:G,fx:n,key:n,style:FV,weight:pM})","ev(tT,P,P,P,P,G{fx:n,key:n,rotation:P})","Zx(Z)","Wl(Z)","av<~>(nO)","R(m_)","Z5(Z)","Z4(Z)","Wj(Z)","Xv(Z)","ev(tT,P,P,P,P,G,n,n{anim:hm,delay:G,rotation:P,stroke:G,strokeWidth:P})","ev(n,P,P,P,P,P,n,n,G)","ev(P,P,n,G{size:P})","Np(Z)","kU()","r(qE,P,P)","nO(a0<@,@>)","D9()","f6(ev)","r(iK)","X3(Z)","~(D0)","Xo(Z)","G(ev,ev)","ev(ev)","a0<n,@>(ev)","ev(a0<@,@>)","lj(lj)","a0<n,@>(lj)","lj(a0<@,@>)","R(jr)","jr()","~(tL)","n(hP)","N(al<hP>)","N(hP)","aaG(Z)","aa5(Z,G)","~(R(ev,ev))","aaJ(Z)","acn(Z,G)","x(lj,R)","YC(Z)","aaM(Z)","al<Dv>()","~(m3)","hP(hP)","P(ev)","R(lG)","Yf(Z)","hP()","ev(n,P,P,P,P,P,G{align:pt,style:FV,weight:pM})","av<~>(al<hP>)","r(bq<G,hP>)","B(jr)","B(D9)","av<~>(hm,~())","r(al<hm>,hm?,~(hm),x)","ev(n,P,G)","al<ja<m3>>(Z)","ja<m3>(m3)","hP(a0<@,@>)","TP(Z)","~(al<nO>)","TQ(Z)","r(hP)","~(lB)","GV(Z,lj,r?)","G(a6c)","av<al<a0<n,@>>?>()","n(n)","al<hP>(n?)"])
C.cxz.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:76}
C.cxA.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:87}
C.cxB.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gagx(s):16;--w.c}w.b=A.o.dN(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lS(v,t)
w.b=v-A.o.dN(q,t)
w.a=t
return q},
$S:87}
C.cxC.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.f8t.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.ix(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.ix(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.ix(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.ix(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1654}
C.bTf.prototype={
$1(d){return B.Y(d,x.N,x.z)},
$S:26}
C.bTg.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:41}
C.bTi.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fnf.prototype={
$1(d){return new C.Zx(this.a,this.b,C.hJC(),null)},
$S:z+35}
C.eP7.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.ePb.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.ePc.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.ePd.prototype={
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
C.eP8.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eP9.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.ePa.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eP2.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hN,w,w,w)
return B.ei(B.a([B.bF(!1,D.eHb,w,w,!0,w,w,new C.eP0(d),w,w),B.bF(!1,D.eGm,w,w,!0,w,w,new C.eP1(d),w,w)],x.p),w,w,D.TW,v,w,w,w,w,D.eU3,w)},
$S:19}
C.eP0.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.eP1.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.eP3.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eP4.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ePh.prototype={
$0(){var w=this.a
return w.n(new C.ePg(w,this.b))},
$S:0}
C.ePg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eP6.prototype={
$0(){var w=this.a
return w.n(new C.eP5(w,this.b,this.c))},
$S:0}
C.eP5.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.G(0,v)},
$S:0}
C.ePe.prototype={
$0(){return this.a.Zv(this.b)},
$S:0}
C.ePf.prototype={
$0(){return this.a.Nc(0,this.b)},
$S:0}
C.ePk.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ePl.prototype={
$0(){var w=this.a
return w.n(new C.ePj(w,this.b))},
$S:0}
C.ePj.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.I(w,new C.ePi(),B.S(w).k("I<1,n>")))}},
$S:0}
C.ePi.prototype={
$1(d){return d.a},
$S:z+66}
C.eWi.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Y(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fM6(w.b(t.h(0,"doc"))?B.Y(w.a(t.h(0,"doc")),v,u):A.cq)
t=t.h(0,"updatedAt")
u=B.bf(J.k(t==null?"":t))
return new C.nO(s,v,u==null?new B.N(Date.now(),0,!1):u)},
$S:z+49}
C.eWj.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.faD.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.J)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbm())q=n===o.gbm()&&p.b>o.gcB()}if(q)v.m(0,s,t)}},
$S:z+96}
C.faB.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.faC.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+30}
C.fmO.prototype={
$1(d){return d.ad()},
$S:z+32}
C.f89.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fnB.prototype={
$1(d){return new C.Wl(this.a,null)},
$S:z+36}
C.cyV.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+38}
C.cyX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cz_.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cz0.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cyZ())},
$S:11}
C.cyZ.prototype={
$0(){},
$S:0}
C.cz1.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_w(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.be(s,new C.cyY(r))
if(p<0)q.cj(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.aeH(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:317}
C.cyY.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cz2.prototype={
$1(d){},
$S:32}
C.cyW.prototype={
$1(d){return new C.Wj(this.b,this.a.gcm_(),null)},
$S:z+41}
C.cz3.prototype={
$1(d){return D.eZV},
$S:z+46}
C.cyR.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.TH,A.r,1),t=x.p
return B.at(B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([new B.B(D.bhl,B.u(B.a([B.p(w,D.bsY,A.i,w,w,new B.o(A.aH.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aT,D.eFv,A.U,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eul,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,new B.B(A.oW,B.A(B.a([B.C(B.dU(D.eLH,new C.cyP(d),B.d9(w,w,w,w,w,w,w,w,w,E.mn,w,w,A.c9,w,new B.b5(B.m(14),A.V),D.aPc,w,w,w,w)),1),A.av,B.C(B.bJ(D.eR3,new C.cyQ(d),B.bk(A.bR,w,w,w,w,w,A.c9,w,new B.b5(B.m(14),A.V),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.i,w,A.vx,new B.o(D.a8g,w,u,v,D.cDI,w,A.n),w,w,w,K.Vq,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa),w,w,w)},
$S:1655}
C.cyP.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cyQ.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cyS.prototype={
$0(){return J.mX(this.a.d,new C.cyO(this.b))},
$S:0}
C.cyO.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cyN.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.TH,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bxH,A.i,t,t,new B.o(t,t,t,B.m(14),t,D.aj5,A.n),t,44,t,t,t,t,t,44),A.bb,B.C(B.u(B.a([B.d(this.a.b.a,t,1,A.a0,t,t,t,D.aK_,t,t,t),A.bw,D.eR_],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aC],q)
for(w=0;w<2;++w){v={}
u=D.cWZ[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aum(u[1],u[2],u[3],new C.cyL(v,d),!1,t))}q.push(A.ar)
q.push(D.bbB)
q.push(A.ar)
q.push(new C.aum(A.e4,"Delete book","Remove it from this device",new C.cyM(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.i,t,t,new B.o(D.a8g,t,r,s,t,t,A.n),t,t,t,A.rv,E.V3,t,t,t),!0,!1,A.ag,!0,!0)},
$S:33}
C.cyL.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.cyM.prototype={
$0(){B.a6(this.a,!1).K("delete")
return null},
$S:0}
C.cyU.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.a9(0,A.G,A.x.j(0.45),A.aAu,12)],x.V)
return B.dN(B.eO(A.C,e,B.p(w,B.bw(B.m(4),new B.a8(62,95.81818181818181,B.f_(A.C,F.alc(d),A.i,A.dp),w),A.ap),A.i,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cyT.prototype={
$0(){return this.a.bVB()},
$S:0}
C.cyK.prototype={
$0(){return this.a.aSF(0,this.b)},
$S:0}
C.cyJ.prototype={
$0(){return this.a.BV(this.b)},
$S:0}
C.cyI.prototype={
$0(){return this.a.BV(this.b)},
$S:0}
C.cz4.prototype={
$2(d,e){var w=this.a
return w.buP(J.q(w.d,e))},
$S:39}
C.cyb.prototype={
$0(){var w=this.a
if(w.c!=null)w.zE()},
$S:0}
C.cya.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aV9("Page "+(v.length+1),"",""))},
$S:0}
C.cyd.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cyl.prototype={
$0(){},
$S:0}
C.cym.prototype={
$1(d){var w=this.a,v=w.a,u=$.as()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cye.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cM.gcs().aF(this.c)},
$S:0}
C.cyc.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyg.prototype={
$0(){return this.a.Os(this.b)},
$S:0}
C.cyh.prototype={
$0(){return this.a.Os(this.b)},
$S:0}
C.cyi.prototype={
$0(){var w=this.a
w.n(new C.cyf(this.b))
w.CI()},
$S:0}
C.cyf.prototype={
$0(){return this.a.c=""},
$S:0}
C.cyk.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.cyj(w,d))
w.CI()},
$S:z+65}
C.cyj.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cyr.prototype={
$2(d,e){if(d)this.a.zE()},
$S:121}
C.cyn.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zE(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.E(x.q).f.P(D.eiu)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cyo.prototype={
$0(){return this.a.aRG(this.b,-1)},
$S:0}
C.cyp.prototype={
$0(){return this.a.aRG(this.b,1)},
$S:0}
C.cyq.prototype={
$0(){return this.a.bWO(0,this.b)},
$S:0}
C.feS.prototype={
$1(d){return C.fVM()},
$S:40}
C.feT.prototype={
$1(d){return null},
$S:32}
C.f_p.prototype={
$1(d){return null},
$S:32}
C.ffN.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:282}
C.ffM.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:245}
C.ffT.prototype={
$1(d){var w=this.a
return C.fEJ(d)===w||C.h_7(d)===w},
$S:z+4}
C.eZt.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:86}
C.c2L.prototype={
$1(d){return d.length!==0},
$S:3}
C.feQ.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.feR.prototype={
$1(d){return C.fht(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fa0.prototype={
$1(d){var w=null
return B.br(!0,new B.B(E.wm,B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eMg,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aT,B.dn(D.Ez,D.eGT,new C.f9Z(d),B.bk(A.bQ,w,w,w,A.x,w,A.c9,w,w,w,w,w)),A.U,B.ew(A.uz,D.eNr,new C.fa_(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,O.vv,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.f9Z.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.fa_.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.fa1.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,D.eDw,w,w,!0,w,w,new C.f9X(d),w,w),B.bJ(D.eT6,new C.f9Y(d),w)],x.p),w,w,w,D.eUT,w,w,w,w,D.eDq,w)},
$S:19}
C.f9X.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.f9Y.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.dWW.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dWU.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dWV.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dWX.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dWY.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ffS.prototype={
$1(d){return A.a.aU(A.o.u(d),2,"0")},
$S:86}
C.ffO.prototype={
$2$h$w(d,e){var w=null
return new B.bE(A.a1,w,w,B.FW(A.C,B.p(w,w,A.i,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1656}
C.ffQ.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.C,B.d(d,w,w,w,w,w,w,D.evs,w,w,w),A.i,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:189}
C.ffR.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.i,w,w,new B.o(w,w,B.H(A.hC,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dN(B.p(w,w,A.i,w,w,new B.o(w,w,B.H(A.hC,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b5,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1657}
C.ffP.prototype={
$2$female$size(d,e){var w=null,v=d?D.a9P:this.a,u=B.H(A.hC,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.i,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.C,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.i,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.i,w,w,new B.o(D.a8s,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1658}
C.fr1.prototype={
$1(d){return new C.aaG(this.a,this.b,null)},
$S:z+69}
C.dOk.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.b9r:A.IM,q=B.H(D.iP.j(0.25),A.r,1),p=B.at(B.p(t,t,A.i,t,t,new B.o(A.bQ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ahP,A.i,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.a9(0,A.G,D.iP.j(0.35),A.e6,10)],x.V),D.bG4,A.n),t,t,t,t,A.Jt,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.B(H.Vf,B.u(B.a([p,A.aC,B.A(B.a([o,A.bb,B.C(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iP,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bw,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.euN,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.C(B.ig(!0,t,e,A.z,D.aHu,new C.dOj(w,this.c),v,D.acQ,t,A.af,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.i,t,t,new B.o(r,t,q,A.mX,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dOj.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aa5(w,new C.dOi(this.b,w),null)},
$S:z+70}
C.dOi.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fa4.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fa5.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.wm,B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.ePm,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aT,B.dn(D.Ez,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fa2(d),B.bk(D.iP,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ew(A.nq,D.QZ,new C.fa3(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,O.vv,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fa2.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.fa3.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.fa8.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fa9.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.wm,B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eEq,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aT,B.dn(D.Ez,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fa6(d),B.bk(D.iP,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ew(A.nq,D.QZ,new C.fa7(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,O.vv,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fa6.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.fa7.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.fac.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fad.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.wm,B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eKc,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aT,B.dn(D.Ez,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.faa(d),B.bk(D.iP,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ew(A.nq,D.QZ,new C.fab(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,O.vv,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.faa.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.fab.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.fsg.prototype={
$1(d){return D.f2a},
$S:z+72}
C.e0X.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b2G:A.IM,s=B.H(A.as.j(0.25),A.r,1),r=B.at(B.p(v,v,A.i,v,v,new B.o(A.as.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bzT,A.i,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.a9(0,A.G,A.bQ.j(0.35),A.e6,10)],x.V),D.aja,A.n),v,v,v,v,A.Jt,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.B(H.Vf,B.u(B.a([r,A.aC,B.A(B.a([q,A.bb,B.C(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:X.IJ,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bw,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.ess,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.C(B.ig(!0,v,e,A.z,D.aHu,new C.e0W(this.b),19,D.acQ,v,A.af,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.i,v,v,new B.o(t,v,s,A.mX,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e0W.prototype={
$2(d,e){var w=D.NT[e]
return new C.acn(w,new C.e0V(this.a,w),null)},
$S:z+73}
C.e0V.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fhx.prototype={
$0(){return B.fDQ(C.hxA(this.a))},
$S:327}
C.fhw.prototype={
$0(){var w=C.fF0(this.a)
return"data:image/png;base64,"+A.cM.gcs().aF(w)},
$S:22}
C.eXI.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.iX(d,e),new B.iX(w,e+v),new B.iX(d+f*14,e),new B.iX(w,e-v)],x.J)
B.a_t(this.a,C.fr(4291404327),v)},
$S:697}
C.fsI.prototype={
$1(d){return D.f4Y},
$S:z+75}
C.eBc.prototype={
$1(d){return this.a.W5()},
$S:8}
C.eA5.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cM.gcs().aF(v)},
$S:0}
C.eAs.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eAC.prototype={
$1(d){return d>=this.a.length},
$S:64}
C.ezP.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ezQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ezN.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ezO.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eAl.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eAm(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.k0(B.qT(p>0.2?C.fwJ(q,B.a2K(p,p,A.w)):q),A.q,u)],x.p)
w=s.bn
if(w>0.02){v=B.a2K(12,12,A.w)
p.push(B.k0(B.d8(B.qT(C.fwJ(r.$1(!0),v)),w*0.75),A.q,u))}r=s.b_
if(r!=null&&s.aS>0)p.push(B.eb(u,B.bg(r).j(s.aS),!0))
r=s.b7
if(r!=null&&s.bE>0){r=B.bg(r).j(s.bE)
w=s.b7
w.toString
p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bT(D.aNw,1.15,A.w,u,0,B.a([r,B.bg(w).j(0)],x.O),u,u),A.n),A.ba))}r=s.av
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bT(D.aNg,0.8,A.w,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.ba))
r=s.aK
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.a7(A.b4,A.bc,A.w,B.a([A.x.j(r),A.K,A.K,A.x.j(s.aK)],x.O),D.cCs,u),A.n),A.ba))
if(s.aA>0){r=s.k1
p.push(B.an(u,B.bQ(u,new B.o(u,u,u,u,u,new B.a7(A.b4,A.bc,A.w,B.a([A.x.j(0),A.x.j(s.aA),A.x.j(s.aA),A.x.j(0)],x.O),D.cMo,u),A.n),A.ba),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.eb(u,A.x.j(r),!0))
r=s.aZ
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bT(A.C,0.95,A.w,u,0,B.a([A.K,A.x.j(r)],x.O),D.cJH,u),A.n),A.ba))
s=s.au
if(s>0)p.push(B.b1(u,u,u,new C.bbc(s,u),A.at))
return new B.am(A.W,u,A.aX,A.q,p,u)},
$S:62}
C.eAm.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fU(r.b,A.C,q,q,A.cl,A.bP,!0,q,!1,q,q),o=r.a,n=o.aRj(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bf
v=o.aQ
u=v-1
t=o.bO
s=o.dd?-1:1
return B.dN(B.e4(A.C,B.eO(A.C,l,B.fp(A.C,new B.Q3(new B.FG(q,q,n,A.I9),p,q),q,B.uP(s,o.cS?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:596}
C.eAy.prototype={
$0(){return this.a.n(new C.eAx(this.b,this.c))},
$S:0}
C.eAx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAz.prototype={
$1(d){return this.a.n(new C.eAw(this.b,d))},
$S:6}
C.eAw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAB.prototype={
$0(){return this.a.n(new C.eAA(this.b,this.c))},
$S:0}
C.eAA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ezF.prototype={
$1(d){return d.c===this.a.x},
$S:z+81}
C.ezG.prototype={
$1(d){var w=this.a
return w.n(w.gcnk())},
$S:2}
C.ezH.prototype={
$1(d){return this.a.n(new C.ezE())},
$S:2}
C.ezE.prototype={
$0(){},
$S:0}
C.ezI.prototype={
$0(){var w=this.a
return w.n(new C.ezD(w,this.b))},
$S:0}
C.ezD.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ezK.prototype={
$2(d,e){return A.av},
$S:34}
C.ezJ.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.bg(v.e),B.bg(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.de(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.bg(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b7,new B.o(w,w,q,s,w,new B.a7(A.b4,A.bc,A.w,r,w,w),A.n),A.hE,w,94,w,w,w,w,70)
return B.aJ(w,new B.a8(70,w,B.u(B.a([r,A.hh,B.d(v.b,w,1,A.a0,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ezC(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:73}
C.ezC.prototype={
$0(){var w=this.a
return w.n(new C.ezz(w,this.b))},
$S:0}
C.ezz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ezL.prototype={
$1(d){var w=this.a
return w.n(new C.ezB(w,d))},
$S:9}
C.ezB.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ezM.prototype={
$1(d){var w=this.a
return w.n(new C.ezA(w,d))},
$S:9}
C.ezA.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eB1.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:64}
C.eB8.prototype={
$1(d){var w=this.a
return w.n(new C.eB9(w,d))},
$S:27}
C.eB9.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ee(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eBa.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:254}
C.eB2.prototype={
$0(){var w=this.a
return w.n(new C.eB0(w,this.b))},
$S:0}
C.eB0.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.G(0,v)},
$S:0}
C.eB3.prototype={
$0(){var w=this.a
return w.n(new C.eB_(w,this.b))},
$S:0}
C.eB_.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.r)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eB4.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eAZ(v,w.b,w.c,w.d))},
$S:0}
C.eAZ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eB5.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqH(v))},
$S:0}
C.eB6.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eB7.prototype={
$0(){var w=this.a
return w.n(new C.eAY(w))},
$S:0}
C.eAY.prototype={
$0(){var w=this.a.db
return A.d.hg(w,0,w.length,0)},
$S:0}
C.eAL.prototype={
$1(d){return d.a===this.a.dy},
$S:203}
C.eAM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ar1[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b2(9,9)
m=B.a([B.bg(v.w.e),B.bg(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.at1(new B.nD(new B.bx(n,n,n,n),A.ap,new B.kx(new B.o(j,j,j,j,j,new B.a7(A.a1,A.a7,A.w,m,j,j),A.n),A.ba,new C.aW6(l,B.bg(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eAK(r,v),2,i))}return B.cf(A.bI,h,A.by,7,7)},
$S:172}
C.eAK.prototype={
$0(){var w=this.b
return w.n(new C.eAF(this.a,w))},
$S:0}
C.eAF.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eAN.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:198}
C.eAQ.prototype={
$0(){var w=this.a
return w.n(new C.eAJ(w))},
$S:0}
C.eAJ.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eAR.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eAS.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eAT.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eAU.prototype={
$0(){var w=this.a
return w.n(new C.eAI(w))},
$S:0}
C.eAI.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eAV.prototype={
$0(){var w=this.a
return w.n(new C.eAH(w))},
$S:0}
C.eAH.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eAW.prototype={
$0(){var w=this.b
return w.n(new C.eAG(this.a,w))},
$S:0}
C.eAG.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eAX.prototype={
$1(d){return this.a.fx=d},
$S:198}
C.eAO.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eAP.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eAp.prototype={
$0(){var w=this.a
return w.n(new C.eAo(w))},
$S:0}
C.eAo.prototype={
$0(){var w=this.a
w.p4=null
w.aXP()},
$S:0}
C.eAq.prototype={
$0(){var w=this.a
return w.n(new C.eAn(w,this.b))},
$S:0}
C.eAn.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eAr.prototype={
$0(){var w=this.a
return w.n(w.gcel())},
$S:0}
C.eAi.prototype={
$0(){var w=this.a
return w.n(new C.eAh(w))},
$S:0}
C.eAh.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eAj.prototype={
$0(){var w=this.a
return w.n(new C.eAg(w))},
$S:0}
C.eAg.prototype={
$0(){var w=this.a
w.aA=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eAk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cK1[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b2(9,9)
m.push(v.at1(new B.nD(new B.bx(p,p,p,p),A.ap,new B.a8(1/0,1/0,new B.Q3(new B.FG(o,o,v.aRj(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.I9),B.fU(u,A.C,140,o,A.cl,A.bP,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eAf(v,s),3,n))}return B.cf(A.bI,m,A.by,10,8)},
$S:172}
C.eAf.prototype={
$0(){var w=this.a
return w.n(new C.eAe(w,this.b))},
$S:0}
C.eAe.prototype={
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
C.ezX.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.ezY.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.ezZ.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eA_.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eA0.prototype={
$1(d){return this.a.av=d},
$S:6}
C.eA1.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eA2.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.eA3.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eA4.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.ezi.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ezj.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ezk.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ezl.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ezm.prototype={
$0(){var w=this.a
return w.n(new C.ezh(w))},
$S:0}
C.ezh.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ezn.prototype={
$1(d){return this.a.b_=d},
$S:198}
C.ezo.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.ezR.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ezS.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.ezT.prototype={
$1(d){return this.a.au=d},
$S:6}
C.ezU.prototype={
$1(d){return this.a.b7=d},
$S:198}
C.ezV.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.ezs.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.ezt.prototype={
$1(d){return this.a.bf=d},
$S:6}
C.ezu.prototype={
$1(d){return this.a.bO=d},
$S:6}
C.ezv.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.ezw.prototype={
$0(){var w=this.a
return w.n(new C.ezr(w))},
$S:0}
C.ezr.prototype={
$0(){var w=this.a
return w.c9=A.k.J(w.c9+90+180,360)-180},
$S:0}
C.ezx.prototype={
$0(){var w=this.a
return w.n(new C.ezq(w))},
$S:0}
C.ezq.prototype={
$0(){var w=this.a
return w.dd=!w.dd},
$S:0}
C.ezy.prototype={
$0(){var w=this.a
return w.n(new C.ezp(w))},
$S:0}
C.ezp.prototype={
$0(){var w=this.a
return w.cS=!w.cS},
$S:0}
C.eAd.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.b9I:B.fU(v,A.C,w,w,A.cl,A.bP,!1,w,!1,w,w)
return C.ffC(d.length===0?"rounded":d,u,e)},
$S:127}
C.eA9.prototype={
$0(){var w=this.a
return w.n(new C.eA8(w))},
$S:0}
C.eA8.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eAa.prototype={
$0(){var w=this.b
return w.n(new C.eA7(this.a,w))},
$S:0}
C.eA7.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eAb.prototype={
$0(){var w=this.b
return w.n(new C.eA6(this.a,w))},
$S:0}
C.eA6.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eAc.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eAv.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.a9(-4,A.G,A.b0.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.es(n.c84(),n.r))
l.push(new C.GV(n.cky(),!1,!1,t))
o=B.c_(0,B.bw(o,new B.es(new B.am(A.W,t,A.aX,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.W,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c5,B.bQ(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.ba),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eAu(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.i,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:223}
C.eAu.prototype={
$1(d){var w=this.a
return w.n(new C.eAt(w,d,this.b,this.c))},
$S:18}
C.eAt.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eAE.prototype={
$0(){var w=this.a
return w.n(new C.eAD(w,this.b))},
$S:0}
C.eAD.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ezW.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).pT()},
$S:0}
C.eBb.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a8(Math.min(s*0.4,460),t,B.u(B.a([w.aTB(),B.C(B.at(w.aWr(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.C(B.u(B.a([B.C(w.aKT(),1),w.aHc()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aTB(),new B.B(A.hq,B.at(s.aWr(u),t,t,t),t),B.C(s.aKT(),1),s.aHc()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:568}
C.fcU.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eg(k,!1,j,A.ay,"",4280640491,i,l,m,"",h,C.bvO(),null,"","",0,!1,"",0,D.b6,4280172719,2,d,0,0,"",D.ca,D.cG,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.O)},
$S:z+84}
C.fcT.prototype={
$3(d,e,f){var w=this,v=C.bvO(),u=w.b?A.I:A.cn,t=w.c?A.cS:A.bl
return C.eg(w.d,!1,f,A.ay,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.b6,4280172719,2,d,0,w.f,w.e,D.ca,D.cG,0.82,0.09,w.a)},
$S:z+91}
C.c7E.prototype={
$1(d){return B.t(d)},
$S:17}
C.fkt.prototype={
$0(){return this.a},
$S:z+14}
C.f2S.prototype={
$1(d){return d.a.cT(this.a)},
$S:z+28}
C.f2T.prototype={
$2(d,e){return J.ch(e)},
$S:z+29}
C.fkv.prototype={
$0(){return B.a([],x.m)},
$S:z+14}
C.fky.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fkz.prototype={
$0(){return A.d.gI(D.uI)},
$S:z+31}
C.fkr.prototype={
$1(d){return d.a},
$S:z+15}
C.fku.prototype={
$1(d){return d.a},
$S:z+15}
C.fir.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fis.prototype={
$1(d){return d.length!==0},
$S:3}
C.fit.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fcY.prototype={
$0(){return C.cx()},
$S:22}
C.fd0.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.ca,s=u?n:0
return C.eg(j,l,v,A.ay,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.b6,4280172719,2,d,s,0,"",t,D.cG,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,"","",A.bl,A.a_)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,"",j,A.bl,A.a_)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,null,0,j,k,A.bl,A.a_)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bl,A.a_)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bl,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.d7,!1,k,l,"",m,A.bl,A.a_)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bl,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.d7,!1,j,k,"",l,A.bl,A.a_)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bl,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bl,A.a_)},
$S:z+33}
C.fd_.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bl,A.a_,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.ca,D.eN,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+34}
C.fcZ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.ca,t=v?j:0
return C.eg(A.bn,!1,4279310375,A.ay,"",4280640491,24,A.bl,A.a_,"",h,w,d,v?k:"",l,0,!1,"",0,D.b6,4280172719,2,"",t,0,"",u,D.l_,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pj,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+27}
C.fcX.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.ffq.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.fWN.ci(0,A.a.i(s.w).toLowerCase(),new C.ffo(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ci(0,s.r,new C.ffp(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bk_(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1661}
C.ffo.prototype={
$0(){return F.aK4(this.a.w)},
$S:206}
C.ffp.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.buI("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hq(2,w,A.c_,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:206}
C.eXk.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.eXl.prototype={
$1(d){return d.a},
$S:z+17}
C.eXm.prototype={
$1(d){return d.b},
$S:z+18}
C.fsU.prototype={
$1(d){return D.f5d},
$S:z+39}
C.eH6.prototype={
$0(){return this.a.x=C.hpH(this.b,this.c.b)},
$S:0}
C.eH7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eH4.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:404}
C.eH5.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:404}
C.eH3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c0(A.aG,new C.eGZ(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.Gr,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aV(s,7)
if(r.length===0){n.n(new C.eH_(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h1m(o,m.cxn(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eH0(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGZ.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eH2(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWe,A.i,p,p,D.aRA,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Aj:D.Ao,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a8(64,64,C.ffC(v,i.aYp(h),u),p)))}t=B.lW(1,m,4,10,10,p,A.dJ,!0)
if(!l)return B.br(!0,new B.B(A4.Ds,t,p),!0,!1,A.ag,!0,!0)
s=new C.eH1(i,d)
m=B.aG(d,A.bM,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.ES[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.d3(new B.aV(0,1/0,0,m.a.b*0.85),B.ce(B.u(B.a([D.eIL,A.U,t,A.dZ,D.e99,A.aw,D.eSw,A.U,B.lW(1.15,l,3,10,10,p,A.dJ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A4.Ds,p,p,A.af),p),!0,!1,A.ag,!0,!0)},
$S:33}
C.eH2.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b0.j(0.22):A.c.j(0.04),s=v?A.bD:A.du
return B.aJ(w,B.p(w,e,A.i,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hb,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eGY(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1662}
C.eGY.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.eH1.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bJ:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.C(B.p(v,B.bw(w,d.length===0?B.p(v,D.ail,A.i,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.ec(new C.Lt(u.Eb(d),!0,!1,v),!0,v),A.ap),A.i,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.aw,B.d(e,v,1,A.a0,v,v,v,B.l(v,v,t?A.bJ:A.ak,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eGX(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:127}
C.eGX.prototype={
$0(){B.a6(this.a,!1).K("finale:"+this.b)
return null},
$S:0}
C.eH_.prototype={
$0(){var w=this.a
return w.w=w.w.Eb("")},
$S:0}
C.eH0.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eGN.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eGO.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eGQ.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eGR.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eGS.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eGT.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eGP(w,d))},
$S:2}
C.eGP.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eGU.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eHk.prototype={
$0(){return this.a.f.fs()},
$S:0}
C.eHl.prototype={
$0(){var w=this.a
return w.n(new C.eHj(w))},
$S:0}
C.eHj.prototype={
$0(){return this.a.e=null},
$S:0}
C.eHm.prototype={
$0(){var w=this.a
return w.n(new C.eHi(w))},
$S:0}
C.eHi.prototype={
$0(){return this.a.x=null},
$S:0}
C.eHo.prototype={
$1(d){var w=this.a
return w.n(new C.eHh(w,d))},
$S:29}
C.eHh.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eHp.prototype={
$1(d){var w=this.a
return w.n(new C.eHg(w,d))},
$S:29}
C.eHg.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eHq.prototype={
$0(){var w=this.a
return w.n(new C.eHf(w))},
$S:0}
C.eHf.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eHr.prototype={
$1(d){var w=this.a
return w.n(new C.eHe(w,d))},
$S:29}
C.eHe.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eHs.prototype={
$1(d){var w=this.a
return w.n(new C.eHd(w,d))},
$S:29}
C.eHd.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eHt.prototype={
$0(){var w=this.a
return w.n(new C.eHc(w))},
$S:0}
C.eHc.prototype={
$0(){var w=this.a
return w.w=w.w.Eb("")},
$S:0}
C.eHu.prototype={
$0(){var w=this.a
return w.n(new C.eHb(w,this.b))},
$S:0}
C.eHb.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eHv.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a8(u,null,w.bGa(D.a__[v]),null))
return B.cf(A.bI,t,A.by,8,8)},
$S:172}
C.eHn.prototype={
$1(d){var w=this.a
return w.n(new C.eHa(w,d))},
$S:9}
C.eHa.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eGV.prototype={
$0(){var w=this.a
return w.n(new C.eGW(w,this.b,this.c))},
$S:0}
C.eGW.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.G(0,w)},
$S:0}
C.eH9.prototype={
$0(){var w=this.a
return w.n(new C.eH8(w,this.b))},
$S:0}
C.eH8.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fsT.prototype={
$1(d){return new C.Z4(this.a,this.b,null)},
$S:z+40}
C.eGG.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eGH.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eGI.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aA2?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eGK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eGF(w,d))},
$S:2}
C.eGF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eGL.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eGM.prototype={
$0(){var w=this.b
if(A.a.c5(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bH(0,new B.b9(w,B.h0(A.bm,w.length),A.aL))},
$S:0}
C.f27.prototype={
$1(d){return d.a===this.a},
$S:203}
C.e0m.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gat2(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cx1:D.cM7
t=D.vZ.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.vZ.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.a9(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.c_(0,B.b1(q,q,q,new C.bdp(n*6.283,q),A.at),0,0,0)
o=o.x
o=B.c_(0,B.bJo(B.eO(A.C,0.5,B.p(q,q,A.i,q,q,new B.o(q,q,q,q,q,new B.a7(A.a1,A.a7,A.w,B.a([A.K,D.b1h.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.am(A.W,q,A.a9,A.q,B.a([n,o,B.at(B.u(B.a([B.U(p.a.c?A.ei:A.kW,D.vZ,q,q,q,20),A.aw,B.f_(A.C,B.ni(A.j0,D.eCY,new C.e0l()),A.i,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.ezQ,A.i,q,q,new B.o(D.vZ,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adt,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.i,q,q,new B.o(q,q,t,w,v,new B.a7(A.ax,A.aE,A.w,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e0l.prototype={
$1(d){return D.bEt.aB(0,d)},
$S:66}
C.fkA.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fkB.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:203}
C.fkC.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1663}
C.fkD.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:13}
C.fkw.prototype={
$1(d){return d.a},
$S:z+17}
C.fkx.prototype={
$1(d){return d.b},
$S:z+18}
C.fs8.prototype={
$1(d){return new C.Xv(this.a,this.b,null)},
$S:z+42}
C.d9S.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.d9T.prototype={
$1(d){return d.a===this.a.gaeX()},
$S:z+10}
C.d9U.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.d9X.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.d9Y.prototype={
$0(){var w=this.a
return w.n(new C.d9W(w,this.b))},
$S:0}
C.d9W.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d9Z.prototype={
$1(d){var w=this.a
return w.n(new C.d9V(w,d))},
$S:9}
C.d9V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0k.prototype={
$1$2(d,e,f){var w=B.bi(d,!0,f)
A.d.fL(w,this.a)
return B.dg(w,0,B.dK(e,"count",x.r),B.S(w).c).dz(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1664}
C.eTU.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eg(A.bn,!1,4279310375,A.ay,"",i,24,A.bl,A.a_,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eN,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.ca,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+43}
C.eTW.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eg(A.L,!1,this.b.d,A.ay,"",4280640491,i,A.bl,A.cY,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.b6,4280172719,2,d,l,0,"",D.m3,D.cG,g,e,f)},
$S:z+44}
C.eTV.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vA(0,"twinkle")
w=t===D.b6?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.m3,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+45}
C.eTT.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fe4.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fe5.prototype={
$0(){return A.d.gI(D.F0)},
$S:z+47}
C.fe6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eVS.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fk2.prototype={
$1(d){var w=2450411,v=4281908728
C.dl(d,C.dm(4280171146,1,0,D.b6,w,0,0.52,0,0))
C.dl(d,C.dm(v,1,0,D.b6,w,0,0.04,0.48,0))
C.dl(d,C.dm(4294047225,0.38,0,D.b6,w,0,0.48,0.52,0.62))
C.dl(d,C.dm(v,0.006,0,D.fb,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fk3.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dl(d,C.dm(4280172719,0.8,0,D.b6,w,0,0.36,0.58,0.1))
C.dl(d,C.dm(v,0.64,0,D.b6,w,0,0.28,0.64,0.18))
C.dl(d,C.dm(4282090230,0.44,0,D.b6,w,0,0.2,0.7,0.28))
C.dl(d,C.dm(v,0.006,0,D.fb,v,3,0.22,0.08,0.12))
C.dl(d,C.dm(u,0.004,0,D.fb,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fk4.prototype={
$1(d){var w=2450411,v=4279548070
C.dl(d,C.dm(4279080072,0.11,0,D.b6,w,0,1,0,0))
C.dl(d,C.dm(4279310375,0.11,0,D.b6,w,0,1,0,0.89))
C.dl(d,C.dm(856528008,0.72,0,D.jk,w,0,0.28,0.72,0.14))
C.dl(d,C.dm(1426953352,0.2,0,D.jk,w,0,0.2,0.78,0.22))
C.dl(d,C.dm(v,0.004,0,D.fb,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fkf.prototype={
$1(d){var w=2450411
C.dl(d,C.dm(4279203438,0.55,0,D.jk,w,0,0.5,0.55,-0.05))
C.dl(d,C.dm(4280171146,0.5,0,D.jk,w,0,0.45,0.62,0.35))
C.dl(d,C.dm(4280640491,0.4,0.3,D.jj,w,0,0.35,0.68,0.55))
C.dl(d,C.dm(571438702,0.12,0,D.b6,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fkk.prototype={
$1(d){var w=4280472558
C.dl(d,C.dm(4279310375,0.75,-0.4,D.jj,2450411,0,0.75,-0.15,0.35))
C.dl(d,C.dm(w,0.55,0,D.b6,2450411,0,0.06,0.42,0.38))
C.dl(d,C.dm(w,0.006,0,D.fb,w,3,0.35,0.08,0.08))
C.dl(d,C.dm(2282478,0.12,0,D.b6,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkl.prototype={
$1(d){var w=2450411,v=4280640491
C.dl(d,C.dm(3423541034,0.48,0,D.b6,w,0,1,0,0))
C.dl(d,C.dm(v,0.12,-0.08,D.jk,w,0,1.1,-0.05,0.38))
C.dl(d,C.dm(858088427,0.35,0,D.b6,w,0,0.42,0.55,0.05))
C.dl(d,C.dm(v,0.006,0,D.fb,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fkm.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cw9[w]
u=Date.now()
t=$.iM
$.iM=t+1
v=new C.ev("design_"+(""+1000*u+"_"+t),D.eN,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a_,A.bl,A.ay,4279310375,A.bn,null,D.b6,v,4294967295,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.Iz
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dl(d,C.dm(s,0.006,0,D.fb,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fkn.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lN,A.dC,w/3).l()
u=Date.now()
t=$.iM
$.iM=t+1
v=new C.ev("design_"+(""+1000*u+"_"+t),D.eN,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a_,A.bl,A.ay,4279310375,A.bn,null,D.AX,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.Iz
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dl(d,C.dm(s,0.006,0,D.fb,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fko.prototype={
$1(d){var w=4294967295
C.dl(d,C.dm(4280640491,1,0,D.b6,2450411,0,0.42,0,0))
C.dl(d,C.dm(4280110808,1.1,1.57,D.jj,2450411,0,0.18,0.35,-0.05))
C.dl(d,C.dm(w,0.006,0,D.fb,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkp.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dl(d,C.dm(w,0.1,0,D.b6,v,0,1,0,0))
C.dl(d,C.dm(u,0.012,0,D.b6,v,0,1,0,0.1))
C.dl(d,C.dm(u,0.006,0,D.fb,u,3,0.42,0.06,0.14))
C.dl(d,C.dm(403446057,0.68,0,D.jk,v,0,0.22,0.72,0.18))
C.dl(d,C.dm(w,0.1,0,D.b6,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkq.prototype={
$1(d){var w=4278630100
C.dl(d,C.dm(4279310375,1.2,0.15,D.jk,2450411,0,0.55,-0.2,-0.1))
C.dl(d,C.dm(w,1.1,0.15,D.b6,2450411,0,0.08,0.15,-0.05))
C.dl(d,C.dm(1120295,0.18,0,D.b6,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fk5.prototype={
$1(d){var w=4292617766
C.dl(d,C.dm(4282714634,0.65,-0.2,D.jj,2450411,0,0.65,-0.1,0.45))
C.dl(d,C.dm(w,0.5,-0.15,D.jj,2450411,0,0.5,0.05,0.55))
C.dl(d,C.dm(w,0.006,0,D.fb,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fk6.prototype={
$1(d){var w=2450411
C.dl(d,C.dm(4278413729,0.35,3.14,D.jj,w,0,0.45,-0.05,0.7))
C.dl(d,C.dm(4278355143,0.3,3.14,D.jj,w,0,0.4,0.25,0.75))
C.dl(d,C.dm(4279150057,0.32,3.14,D.jj,w,0,0.5,0.55,0.72))
C.dl(d,C.dm(863884284,0.22,0,D.ew,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fk7.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dl(d,C.dm(w,0.14,0,D.b6,v,0,0.14,0.02,0.02))
C.dl(d,C.dm(2282478,0.14,0,D.b6,u,3,0.14,0.84,0.02))
C.dl(d,C.dm(w,0.28,0,D.jk,v,0,0.35,-0.08,0.78))
C.dl(d,C.dm(u,0.22,0.5,D.jj,v,0,0.3,0.72,0.78))
C.dl(d,C.dm(w,0.006,0,D.fb,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fk8.prototype={
$1(d){var w=4293571336,v=1156231944
C.dl(d,C.dm(1841431,0.92,0,D.b6,w,3,0.92,0.04,0.04))
C.dl(d,C.dm(v,0.15,0,D.jj,2450411,0,0.15,0.02,0.02))
C.dl(d,C.dm(v,0.15,3.14,D.jj,2450411,0,0.15,0.83,0.83))
C.dl(d,C.dm(w,0.004,0,D.fb,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fk9.prototype={
$1(d){var w=4279080072,v=2450411
C.dl(d,C.dm(w,0.14,0,D.kA,v,0,0.14,0.68,0.18))
C.dl(d,C.dm(4279548070,0.14,0,D.kA,v,0,0.14,0.78,0.28))
C.dl(d,C.dm(4281193663,0.14,0,D.kA,v,0,0.14,0.68,0.38))
C.dl(d,C.dm(4284410580,0.14,0,D.kA,v,0,0.14,0.78,0.48))
C.dl(d,C.dm(4279203438,0.14,0,D.kA,v,0,0.14,0.68,0.58))
C.dl(d,C.dm(w,0.006,0,D.fb,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fka.prototype={
$1(d){var w=2450411,v=4280640491
C.dl(d,C.dm(3708753706,0.42,0,D.b6,w,0,1,0,0))
C.dl(d,C.dm(v,0.06,-0.05,D.jk,w,0,1,0,0.38))
C.dl(d,C.dm(859356664,0.25,0,D.ew,w,0,0.25,0.7,0.08))
C.dl(d,C.dm(v,0.006,0,D.fb,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fkb.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lN,A.dC,w/3).l()
u=Date.now()
t=$.iM
$.iM=t+1
v=new C.ev("design_"+(""+1000*u+"_"+t),D.eN,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a_,A.bl,A.ay,4279310375,A.bn,null,D.AX,v,2450411,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.Iz
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dl(d,C.dm(4280172719,0.08,0,D.b6,2450411,0,1,0,0))
C.dl(d,C.dm(s,0.006,0,D.fb,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fkc.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iM
$.iM=u+1
u=new C.ev("design_"+(""+1000*v+"_"+u),D.eN,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a_,A.bl,A.ay,s,A.bn,null,D.fb,t,t,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.Iz
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dl(d,C.dm(s,0.75,0,D.b6,2450411,0,0.22,0.72,0.1))
C.dl(d,C.dm(872415231,0.16,0,D.b6,2450411,0,0.16,0.75,0.15))
C.dl(d,C.dm(s,0.006,0,D.fb,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkd.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dl(d,C.dm(4674921,0.9,0,D.b6,4287931320,2,0.9,0.05,0.05))
C.dl(d,C.dm(w,0.08,0,D.b6,v,0,0.08,0.03,0.03))
C.dl(d,C.dm(u,0.08,0,D.b6,v,0,0.08,0.89,0.03))
C.dl(d,C.dm(u,0.08,0,D.b6,v,0,0.08,0.03,0.89))
C.dl(d,C.dm(w,0.08,0,D.b6,v,0,0.08,0.89,0.89))
C.dl(d,C.dm(w,0.004,0,D.fb,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fke.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iM
$.iM=t+1
t=new C.ev("design_"+(""+1000*u+"_"+t),D.eN,0.55,0.14+v,0.38,0.18,"",24,A.a_,A.bl,A.ay,r,A.bn,null,D.b6,4294967295,4280640491,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
u=$.Iz
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dG,A.cH,w/2).l()
t=Date.now()
s=$.iM
$.iM=s+1
u=new C.ev("design_"+(""+1000*t+"_"+s),D.eN,0.57,0.16+v,0.06,0.14,"",24,A.a_,A.bl,A.ay,r,A.bn,null,D.b6,u,q,0,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.Iz
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dl(d,C.dm(4280171146,1,0,D.b6,q,0,0.48,0,0))
C.dl(d,C.dm(4280172719,1.1,1.57,D.jj,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fkg.prototype={
$1(d){var w=2450411
C.dl(d,C.dm(870995980,0.55,0.45,D.jk,w,0,0.55,-0.12,-0.08))
C.dl(d,C.dm(856996006,0.45,0.45,D.jk,w,0,0.45,0.62,-0.05))
C.dl(d,C.dm(16777215,0.38,0.45,D.jk,4293548044,5,0.38,0.52,0.12))
C.dl(d,C.dm(585783308,0.3,0.45,D.jk,w,0,0.3,0.56,0.16))
C.dl(d,C.dm(4279548070,0.06,0,D.b6,w,0,0.16,0.38,0.04))
C.dl(d,C.dm(1156208652,0.28,0,D.ew,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fkh.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dl(d,C.dm(w,1,0,D.b6,v,0,0.07,0,0))
C.dl(d,C.dm(u,0.1,0,D.b6,t,1,0.46,0.48,0.14))
C.dl(d,C.dm(u,0.1,0,D.b6,t,1,0.46,0.48,0.28))
C.dl(d,C.dm(u,0.1,0,D.b6,t,1,0.46,0.48,0.42))
C.dl(d,C.dm(s,0.08,0,D.ew,v,0,0.08,0.5,0.16))
C.dl(d,C.dm(w,0.08,0,D.ew,v,0,0.08,0.5,0.3))
C.dl(d,C.dm(4279548070,0.08,0,D.ew,v,0,0.08,0.5,0.44))
C.dl(d,C.dm(16777215,0.32,0.45,D.jk,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fki.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dl(d,C.dm(4294047225,0.08,0,D.b6,t,2,0.1,0.02,0.06))
C.dl(d,C.dm(s,0.42,0,D.b6,2450411,0,0.36,0.58,0.18))
C.dl(d,C.dm(872415231,0.12,0,D.b6,2450411,0,0.28,0.62,0.24))
C.dl(d,C.dm(16777215,0.28,0,D.ew,s,4,0.32,0,0.72))
C.dl(d,C.dm(r,0.006,0,D.fb,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iM
$.iM=u+1
u=new C.ev("design_"+(""+1000*v+"_"+u),D.eN,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a_,A.bl,A.ay,4279310375,A.bn,null,D.ew,16777215,t,2,0,!1,"",0,D.ca,0,"","","","","",!1,0)
v=$.Iz
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fkj.prototype={
$1(d){var w=2450411,v=4279548070
C.dl(d,C.dm(3423541034,0.55,0,D.b6,w,0,1,0,0))
C.dl(d,C.dm(4009754623,0.56,0.45,D.jk,w,0,0.56,0.22,0.18))
C.dl(d,C.dm(3439329279,0.44,0.45,D.jk,w,0,0.44,0.28,0.24))
C.dl(d,C.dm(v,0.07,0,D.b6,w,0,0.22,0.34,0.62))
C.dl(d,C.dm(v,1,0,D.b6,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fbX.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fbY.prototype={
$0(){return A.d.gI($.bzf())},
$S:z+50}
C.f1V.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f1U.prototype={
$1(d){return C.hwz(d,this.a,this.b)},
$S:z+51}
C.fkJ.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.uP(1.0375,1.01875,1)
return new B.fF(v,u,new C.aOW(B.hmJ(A.tJ,C.hwC(w.c,w.d,v,u),t)))},
$S:407}
C.dK4.prototype={
$1(d){var w=d.a/1e6
this.a.d.st(0,w)
return w},
$S:8}
C.dK3.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bQ(w,new B.o(w,w,w,w,w,new B.bT(A.HA,1.2,A.w,w,0,u.d,w,w),A.n),A.ba),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.k0(new B.am(A.W,w,A.aX,A.q,B.a([t,new B.es(B.b1(w,w,w,new C.bai(u.a,r,q,r),A.at),w),B.at(new B.jZ(r,new C.dK2(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:440}
C.dK2.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.aq(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.a9(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.i1(B.fU(i,A.C,r,r,A.cl,A.bP,!0,r,!1,r,r),A.ap),A.i,r,r,new B.o(r,r,r,r,u,new B.fP(A.C,0,6.283185307179586,A.w,t,r,new B.mh(e*0.8)),A.a6),r,w,r,r,new B.L(v,v,v,v),r,r,w),new B.a8(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bmC(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cI(i[1].j(0.6),A.J,t)],x.S),r,r),A.L,r,r),r))
j.push(new B.a8(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d8(B.dN(B.u(B.a([B.p(r,r,A.i,r,r,new B.o(r,r,r,r,r,new B.a7(A.a1,A.a7,A.w,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a8(r,m*0.022,r,r),B.d(w.a.c.gaFK(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a_,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d8(B.e4(A.C,new B.B(new B.L(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:106}
C.eFU.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aE,A.w,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aB(0,d)},
$S:66}
C.c2n.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bJ:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.a9(0,A.G,A.hm.j(0.4),A.J,14)],x.V):v
w=B.de(v,B.bw(B.m(12),d,A.ap),v,v,A.b7,new B.o(v,v,t,u,w,v,A.n),A.eC,v,72,v,v,v,v,v)
return B.aJ(v,new B.a8(112,v,B.u(B.a([w,A.hh,B.d(e,v,1,A.a0,v,v,v,B.l(v,v,g?A.bJ:A.ak,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1665}
C.c2o.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Eb(""))},
$S:0}
C.c2p.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.ec(new C.Lt(v.Eb(u),!0,!1,null),!0,null),d.b,new C.c2q(w,this.c,d),v.a===u)},
$S:z+52}
C.c2q.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h1m(u.b,t.c.Eb(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fqM.prototype={
$1(d){return new C.X3(this.a,null)},
$S:z+53}
C.d_o.prototype={
$0(){var w=this.a
w.d=w.guI().b52("data:"+this.b+";base64,"+A.cM.gcs().aF(this.c));++w.r},
$S:0}
C.d_t.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.d_u.prototype={
$0(){var w=this.a
return w.n(new C.d_s(w))},
$S:0}
C.d_s.prototype={
$0(){return this.a.r++},
$S:0}
C.d_v.prototype={
$1(d){var w=this.a
return w.n(new C.d_r(w,d))},
$S:2}
C.d_r.prototype={
$0(){var w=this.a
return w.d=w.guI().az0(this.b)},
$S:0}
C.d_w.prototype={
$0(){var w=this.a
return w.n(new C.d_q(w))},
$S:0}
C.d_q.prototype={
$0(){var w=this.a
return w.d=w.guI().b52("")},
$S:0}
C.d_x.prototype={
$1(d){var w=this.a
return w.n(new C.d_p(w,d))},
$S:2}
C.d_p.prototype={
$0(){var w=this.a
return w.d=w.guI().b59(this.b)},
$S:0}
C.d_y.prototype={
$0(){var w=this.a
w=w.guI().b59(w.gat3().a.a)
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.fqL.prototype={
$1(d){var w={}
w.a=this.a
return new B.eh(new C.fqK(w),null)},
$S:21}
C.fqK.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bM,x.w).w.a.b*0.85),B.ce(B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aC,D.ePV,A.aw,D.eQ9,A.aC,new C.aW3(v.a,new C.fqJ(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.af),w),!0,!1,A.ag,!0,!1),A.i,w,w,D.aS5,w,w,w,w,A.JC,w,w,w)},
$S:158}
C.fqJ.prototype={
$1(d){this.b.$1(new C.fqI(this.a,d))
B.a6(this.c,!1).K(d)},
$S:z+54}
C.fqI.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fsS.prototype={
$1(d){return D.f15},
$S:z+55}
C.d5S.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.d5T.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).K(this.b)
return null},
$S:0}
C.d5U.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).K(v)}},
$S:0}
C.fhq.prototype={
$1(d){var w=this.b
return new B.a7(A.ax,A.aE,A.w,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aB(0,d)},
$S:66}
C.d_5.prototype={
$3(d,e,f){var w,v=this,u=new B.b_($.a1().r,A.au,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.N(new B.bj(t+r*1.2,o))
u.N(new B.dj(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.N(new B.dj(w,q+p,w,q+p*1.2))
u.N(new B.BG(B.c1(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.b4(u,v.d)
s.b4(u,v.e)
p=B.T()
p.r=B.aq(v.a.d,A.c,0.6).gt(0)
s.aw(new B.v(w,o),2.2,p)},
$S:1666}
C.fhu.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+56}
C.fag.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fah.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.B(E.wm,B.u(B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eA4,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aT,B.dn(D.Ez,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fae(d),B.bk(A.bQ,w,w,w,A.c,w,A.c9,w,w,w,w,w)),A.U,B.ew(A.nq,D.QZ,new C.faf(d),B.d9(w,w,w,w,w,w,w,w,w,A.ak,w,w,A.c9,w,w,O.vv,w,w,w,w))],x.p),A.al,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:33}
C.fae.prototype={
$0(){B.a6(this.a,!1).K("continue")
return null},
$S:0}
C.faf.prototype={
$0(){B.a6(this.a,!1).K("new")
return null},
$S:0}
C.c7C.prototype={
$1(d){return d.hr()},
$S:z+57}
C.c7D.prototype={
$1(d){return d.ad()},
$S:z+58}
C.c7B.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.Y(b5,x.N,x.z),b3=B.aQ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.L(b3)
if(b4==null)b4=A.a_.gdB(0)
b3=B.aQ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.L(b3)
if(w==null)w=0
b3=B.aQ(b2.h(0,"align"))
v=b3==null?b1:A.k.L(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hsC(b2.h(0,"type"))
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
n=A.asy[A.o.D(b4,0,8)]
m=D.cyM[A.o.D(w,0,1)]
l=C.hw4(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.L(k)
if(k==null)k=4279310375
j=A.apA[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hyJ(b2.h(0,"shape"))
g=B.aQ(b2.h(0,"fillColor"))
g=g==null?b1:A.k.L(g)
if(g==null)g=4280640491
f=B.aQ(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.L(f)
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
a2=a2==null?b1:A.k.L(a2)
if(a2==null)a2=0
a3=C.fXO(b2.h(0,"textTransition"))
a4=B.aQ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.k.L(a4)
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
b2=b2==null?b1:A.k.L(b2)
return C.eg(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+59}
C.c7r.prototype={
$1(d){return d.hr()},
$S:z+60}
C.c7s.prototype={
$1(d){return d.ad()},
$S:z+61}
C.c7o.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7p.prototype={
$1(d){return B.t(d)},
$S:17}
C.c7q.prototype={
$1(d){return C.fOK(B.Y(d,x.N,x.z))},
$S:z+62}
C.c7T.prototype={
$1(d){return d.a===this.a},
$S:z+63}
C.c7U.prototype={
$0(){return A.d.gI(D.ZG)},
$S:z+64}
C.c7O.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.m(0,u,d.hr())},
$S:z+7}
C.c7N.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+20}
C.c7J.prototype={
$1(d){return new B.I(d,new C.c7K(),B.S(d).k("I<1,N>")).fq(0,new C.c7L())},
$S:z+67}
C.c7K.prototype={
$1(d){return d.f},
$S:z+68}
C.c7L.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:699}
C.c7M.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hiB(d)},
$S:z+104}
C.c7P.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.c7Q.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+20}
C.c7R.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fi2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.J)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.G(0,j)
break}}}},
$S:z+71}
C.fhZ.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fi_.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fi0.prototype={
$2(d,e){var w
if(d.b===D.cG){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fi1.prototype={
$2(d,e){return d.b===D.eN&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c7x.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hH4(b2,b3),b5=B.a2(b4).k("be<2>")
b5=B.cy(new B.be(b4,b5),new C.c7w(),b5.k("E.E"),x.N)
w=B.d7(b5,B.a2(b5).k("E.E"))
b1=b1.e
v=A.oP.aq(0,A.k.D(b1,0,1))
u=new C.c7y()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c7z(a9,b7.d)
r=new C.c7A(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.J)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jV.aq(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kE(A.k.D(1-k,0,1),B.dN(B.e4(A.C,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.J)(b2),++m){i=b2[m]
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
if(a2===D.eN){a4=i.hr()
a4.ay=B.aq(B.bg(l.ay),B.bg(i.ay),v).l()
a4.ch=B.aq(B.bg(l.ch),B.bg(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l_&&l.at==i.at?r.$1(i):new B.am(A.W,a8,A.aX,A.q,B.a([new B.kE(A.k.D(o,0,1),r.$1(l),a8),new B.kE(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iv(B.vl(a3),a8,A.C,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.ca)a7=D.m3
p.push(s.$5(i.c,i.d,i.e,i.f,C.fZX(a7,a6,r.$1(i))))}}return B.bQ(new B.am(A.W,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a7(A.a1,A.a7,A.w,B.a([b5,t],x.O),a8,a8),A.n),A.ba)},
$S:422}
C.c7w.prototype={
$1(d){return d.a},
$S:z+22}
C.c7y.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.bg(w)},
$S:z+74}
C.c7z.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1669}
C.c7A.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5k(v,C.aYb(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dxp.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d4(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:43}
C.c7G.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c7H.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fkQ.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:281}
C.fjX.prototype={
$1(d){return new C.aaM(this.a,this.b,null)},
$S:z+76}
C.e9D.prototype={
$0(){return this.a.NU(this.b,C.hKk(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.e9E.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.NU(this.b,C.hKm(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.e9F.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.NU(this.b,C.hKl(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.e9G.prototype={
$0(){W.fZH()
B.a6(this.a,!1).K(null)},
$S:0}
C.c7v.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1670}
C.c7u.prototype={
$2(d,e){var w,v=this,u=null,t=B.dG(d,A.mU),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.ls(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bP:A.dp
return B.fU(t,A.C,o,new C.c7t(),A.cl,w,!0,u,!1,new B.cv("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1671}
C.c7t.prototype={
$3(d,e,f){return D.a7o},
$S:212}
C.fhY.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.bg(r.e)
v=r.f
v.toString
v=new B.a7(A.ax,A.aE,A.w,B.a([w,B.bg(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.bg(r.e):t
r=r.z
r=B.dg(r,0,B.dK(6,"count",x.r),B.S(r).c)
u=r.$ti.k("I<ai.E,cE>")
r=B.z(new B.I(r,new C.fhX(e.b,e.d),u),u.k("ai.E"))
return B.bw(s,B.bQ(new B.am(A.W,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.ba),A.ap)},
$S:1672}
C.fhX.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYb(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f4d.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cV(r.b,new C.f4b(d))
w=B.aG(d,A.bM,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.a9(0,A.G,A.x.j(0.45),A.fI,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.at(B.aD(!1,A.X,!0,q,B.p(q,B.u(B.a([B.A(B.a([B.C(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l2,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a_,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bF(!1,A.yd,q,q,!0,q,q,new C.f4c(p,d),q,B.fn(q,q,A.bf,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JB,q,new B.b5(B.m(12),A.V),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aC,r.d],s),A.m,q,A.e,A.R,0,A.p),A.i,q,new B.aV(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fE,A.zw,q,q,q),A.i,A.K,0,q,q,q,q,q,A.aa),q,q,q),q)},
$C:"$3",
$R:3,
$S:261}
C.f4b.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).pF())B.a6(w,!0).eC()},
$S:0}
C.f4c.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a6(this.b,!0).eC()},
$S:0}
C.eOd.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d8(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dN(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dN(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dN(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.dN(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.C,B.d8(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.C,B.d8(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fp(A.C,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jv(r*3.14159)
return B.fp(A.C,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jv(r*0.5)
return B.fp(A.C,B.d8(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fp(A.a7,B.d8(u.b,r),t,s,!0)
case 12:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d8(B.e4(A.C,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.k0(u.b,A.q,new C.aFT(r,t))],x.p),t)
case 15:return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.k0(u.b,A.q,new C.aFT(1-r,t))],x.p),t)
case 16:v=D.aVi.aq(0,r)
return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.e4(A.C,B.d8(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d8(B.eb(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.df()
s.ma(r*6.28)
s.jd(r,r,r,1)
return B.fp(A.C,u.b,t,s,!0)
case 20:return B.eO(A.C,(r-0.5)*0.35,new B.am(A.W,t,A.aX,A.q,B.a([u.c,B.d8(u.b,r)],x.p),t),t)}},
$S:58}
C.dIh.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIg.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cn(0)}},
$S:11}
C.dIf.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.fZX(v,w,e)},
$S:58}
C.c7n.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.bg(v.e)
t=v.f
t.toString
t=new B.a7(A.a1,A.a7,A.w,B.a([u,B.bg(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.bg(v.e):r
v=v.z
s=B.S(v).k("I<1,cE>")
q=B.z(new B.I(v,new C.c7m(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bQ(new B.am(A.W,r,A.a9,A.i,q,r),new B.o(t,r,r,r,r,u,A.n),A.ba)},
$S:422}
C.c7m.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.ca?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5k(m,new C.ST(d,C.aYb(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cXK.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cXJ(w))},
$S:11}
C.cXJ.prototype={
$0(){return this.a.d++},
$S:0}
C.e02.prototype={
$2(d,e){var w,v=null,u=A.o.aj(this.b.e.a,1000),t=A.o.J(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aGz.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hGO(w,t,s,e)}switch(s.a.c){case"float3d":s=B.df()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.e_(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jv(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jd(w,w,w,1)
return B.fp(A.C,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dN(B.e4(A.C,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d8(B.e4(A.C,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eDE.prototype={
$1(d){var w
$.a1()
w=B.T()
w.b=A.aj
w.c=d
w.e=A.fj
return w},
$S:1673}
C.ffD.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ap(o,o):new B.ap(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gef()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b1(r,r,r,new C.bmv(u,t,r),A.at))
w.push(B.og(s.d,A.ap,new C.baP(u,t,r)))
if(!p)w.push(B.b1(r,r,r,new C.bly(u,q,t,r),A.at))
return B.at(new B.a8(v.a,v.b,new B.am(A.W,r,A.aX,A.q,w,r),r),r,r,r)},
$S:248}
C.f6Y.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:282}
C.efR.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(Q.Bq(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gag(s)){u=null
w=1
break}u=r.dP(s,new C.efP(),new C.efQ(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1674}
C.efP.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:187}
C.efQ.prototype={
$0(){return J.fl(this.a)},
$S:1676}
C.ece.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ecf.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ecg.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.edP.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.edD.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.edE.prototype={
$1(d){return d.hr()},
$S:z+79}
C.ebC.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eeX.prototype={
$0(){this.a.rG()},
$S:0}
C.efN.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nz()
w.Iv()},
$S:0}
C.edN.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nz()
w.Iv()},
$S:0}
C.efA.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.efB.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.efC.prototype={
$1(d){return d.a},
$S:z+22}
C.efD.prototype={
$0(){var w=this.a.r
return new B.ao(new B.b9(w,A.aY,A.aL),$.as())},
$S:255}
C.efE.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:700}
C.eb0.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.efO.prototype={
$0(){},
$S:0}
C.ecW.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()
w.Iv()},
$S:0}
C.eaZ.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wr()},
$S:0}
C.eb_.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wr()},
$S:0}
C.edi.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.edj.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()
w.Iv()
w.z="Home"},
$S:0}
C.edk.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ecV.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.QY,w,w,!0,w,w,new C.ecU(d),w,w)],x.p),w,w,w,D.eRv,w,w,w,w,D.eAt,w)},
$S:19}
C.ecU.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ecS.prototype={
$1(d){var w=null
return B.ei(B.a([B.bF(!1,A.QY,w,w,!0,w,w,new C.ecR(d),w,w)],x.p),w,w,w,D.eE9,w,w,w,w,D.eC6,w)},
$S:19}
C.ecR.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ecT.prototype={
$0(){},
$S:0}
C.eca.prototype={
$1(d){return this.a.aUS(C.bxn(d))},
$S:z+7}
C.ecb.prototype={
$1(d){return this.a.abC(C.bxn(d))},
$S:z+7}
C.ed1.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.i,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.eRz,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.Nz(A.um,D.aqV,"HATI YA KUHOWA","Hati ya mahari",new C.ecX(d),w),A.U,new C.Nz(A.fP,D.cK2,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ecY(d),w),A.U,new C.Nz(A.hH,D.cx5,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ecZ(d),w),A.U,new C.Nz(A.hI,D.cvA,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ed_(d),w)],v)
if(this.a.ga8q())A.d.v(u,B.a([A.U,new C.Nz(A.iD,D.cgU,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ed0(d),w)],v))
return B.br(!0,B.ce(B.u(u,A.al,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.wm,w,w,A.af),!0,!1,A.ag,!0,!0)},
$S:33}
C.ecX.prototype={
$0(){B.a6(this.a,!1).K("hati_kuhowa")
return null},
$S:0}
C.ecY.prototype={
$0(){B.a6(this.a,!1).K("hati_kuhoweya")
return null},
$S:0}
C.ecZ.prototype={
$0(){B.a6(this.a,!1).K("marriage_agreement")
return null},
$S:0}
C.ed_.prototype={
$0(){B.a6(this.a,!1).K("hati_malipo_awamu")
return null},
$S:0}
C.ed0.prototype={
$0(){B.a6(this.a,!1).K("hati_kiapo_uongozi")
return null},
$S:0}
C.ed2.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()},
$S:0}
C.eb2.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eb3.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mE(r,v.f+1,q);++v.f
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
C.edd.prototype={
$1(d){return d.b===D.l_},
$S:z+4}
C.ede.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.eh(new C.edb(w,this.a,v),null)},
$S:21}
C.edb.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.edc(p,o,a3,n),l=B.K(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aP:A.ai,i=l?A.bh:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.A(B.a([B.C(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bw,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.U(A.cu,j,q,q,q,q),q,q,q,new C.ed7(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Ao[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdj(t,u.b,p.a===t,i,k,new C.ed8(v,m),q))}a1=B.cf(A.bI,a1,A.by,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Aj[w]
s.a=null
t=s.a=r.a
u.push(new C.bdi(t,r.b,p.b===t,k,j,new C.ed9(s,m),q))}return B.br(!0,B.p(q,B.ce(B.u(B.a([d,A.aT,a0,A.U,a1,A.bv,v,A.U,B.cf(A.bI,u,A.by,12,12),A.bv,new B.a8(1/0,48,B.ew(D.bBv,D.eTN,new C.eda(o,n),B.d9(q,q,q,q,q,q,q,q,q,A.az,q,q,q,q,new B.b5(B.m(16),A.V),D.aPJ,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.af),A.i,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rv,D.bg7,q,q,q),!0,!1,A.ag,!0,!0)},
$S:124}
C.edc.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ed5(w.a,d,e))
w.b.cX(new C.ed6(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1679}
C.ed5.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ed6.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ed7.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ed8.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ed9.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eda.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A1.EY(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cX(new C.ed4(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ed4.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.edg.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.edh.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.edf(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mE(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wr()},
$S:0}
C.edf.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.edy.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.edz.prototype={
$1(d){return d.w},
$S:z+80}
C.edA.prototype={
$2(d,e){return d>e?d:e},
$S:94}
C.edB.prototype={
$1(d){var w=this,v=null,u=B.K(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aP:A.ai,r=u?A.bh:A.aN,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bM,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.A(B.a([B.p(v,D.bvu,A.i,v,v,D.aR2,v,38,v,v,v,v,v,38),A.bb,B.C(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.U(A.cu,s,v,v,v,v),v,v,v,new C.edv(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aC,new B.dp(1,A.cj,B.hF(v,new C.edw(m,k,w.c,s,w.d,t,r),k.length,A.h9,v,A.af,new C.edx(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.i,v,new B.aV(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rv,A.Va,v,v,v),!0,!1,A.ag,!0,!0)},
$S:33}
C.edv.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edx.prototype={
$2(d,e){return A.ac},
$S:34}
C.edw.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.az:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cn
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.byq,q,q,q,new C.edt(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.B(D.bif,n,q),B.aI(q,A.T,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bn(q,new B.b0(4,B.m(16),A.V),q,A.eM,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b0(4,B.m(16),D.aPo),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.ad,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.edu(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1680}
C.edt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hMf(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o2(q.a,o,n,s)
r.bH(0,new B.b9(m,B.h0(A.bm,o+s.length),A.aL))
l.afy(k,m)
l.ow()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edu.prototype={
$1(d){var w=this.a
w.afy(this.b.a,d)
w.ow()},
$S:2}
C.edC.prototype={
$0(){},
$S:0}
C.ed3.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ebj.prototype={
$0(){},
$S:0}
C.ebk.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h0e(this.b,w,!0)
w=this.a
w.r=null
w.wr()},
$S:0}
C.ebl.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ebm.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bk(v,new C.ebi(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mE(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wr()},
$S:0}
C.ebi.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.edI.prototype={
$1(d){return B.p5(new C.edH(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:135}
C.edH.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.B(E.adb,B.u(B.a([D.ePo,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.C(B.ig(!0,w,e,A.z,D.eet,new C.edG(this.a,this.b),20,A.rz,w,A.af,!1),1)],v),A.al,w,A.e,A.j,0,A.p)},
$S:425}
C.edG.prototype={
$2(d,e){var w=null,v=D.F0[e],u=C.hiw(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.i,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fu,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.e96,A.i,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nj,w,w,w)],m))
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.bd,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.i,w,w,new B.o(w,w,p,s,w,new B.a7(A.a1,A.a7,A.w,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.edF(this.a,u,this.b,v),w,w,w,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa)},
$S:74}
C.edF.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c7F(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).K(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edJ.prototype={
$0(){var w=this.a
w.e=this.b.hr()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wr()},
$S:0}
C.e9Y.prototype={
$0(){var w,v=this.a,u=v.gpw(),t=C.qO(4294967295,null,0,0,null,C.cx(),D.m2,"","","",D.d7),s=this.b
C.c7S(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.AW){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ebh.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ad()
q.m(0,"id",C.cx())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iM
$.iM=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.fOK(q));++v.f},
$S:0}
C.ebf.prototype={
$0(){var w=this.a
A.d.ct(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.edR.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.ct(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ebb.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.d,new C.eba(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eba.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.edQ.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.N(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eb1.prototype={
$0(){var w=this.a.r
return new B.ao(new B.b9(w,A.aY,A.aL),$.as())},
$S:255}
C.ebD.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:700}
C.efy.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.efz.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.app(w).fs()
v=u.Uj(w)
v.srm(B.h0(A.bm,v.a.a.length))},
$S:8}
C.eeY.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Ve(v)
if(u!=null&&u.b===D.cG)w.Uj(u).saR(0,u.r)}else w.w=null},
$S:0}
C.e9Z.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bn,!1,v.gpw().e.l(),A.ay,"",4280640491,24,A.bl,A.a_,"",0.22,w,null,"","",0,!1,"",0,D.b6,4280172719,2,"Tap to edit text",0,0,"",D.ca,D.cG,0.7,0.15,0.2)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.e9W.prototype={
$0(){var w=C.cx(),v=this.a,u=C.eg(A.bn,!1,4279310375,A.ay,"",v.gpw().c.j(0.25).l(),24,A.bl,A.a_,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpw().c.l(),2,"",0,0,"",D.ca,D.eN,0.25,0.3,0.3)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.e9M.prototype={
$0(){var w=C.eg(A.bn,!1,4279310375,A.ay,"",4280640491,24,A.bl,A.a_,"",0.55,C.cx(),this.b,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.l_,0.6,0.2,0.18),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.e9J.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bH9],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gag8().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dI(!1,r,r,r,!0,r,r,r,!0,r,D.bti,r,r,r,r,new C.e9I(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.a0,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cX(q,r,r,r,r,A.af,!0),!0,!1,A.ag,!0,!0)},
$S:33}
C.e9I.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.e9K.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cx(),u=this.b,t=A.Q.ak(u.ad(),null),s=C.eg(A.bn,!1,4279310375,A.ay,u.b,4280640491,24,A.bl,A.a_,"",0.86,v,null,"","",0,!1,"",0,D.b6,4280172719,2,t,0,0,"",D.ca,D.a12,w,0.5-w/2,0.07)
t=this.a
A.d.G(t.gdk().z,s)
t.r=s.a},
$S:0}
C.ebd.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ebe.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bk(v.gdk().z,new C.ebc(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.as()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ebc.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eaq.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cG)s.Q=t.c.l()
else if(w===D.eN){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ear(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.J)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ear.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eav.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eaw(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.J)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.eaw.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eat.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cG){s.Q=t.c
return}w=new C.eau(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.J)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eau.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.hX(w,new C.eas()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.eas.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.eap.prototype={
$0(){return C.c7S(this.b,this.c,this.a.gpw())},
$S:0}
C.eds.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.efH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efI.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.efJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efK.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.be(s,new C.efG(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQb()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hr()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.wr()
t.Iv()}},
$S:0}
C.efG.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.efd.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8u(),s=w.b,r=u.a8v(A.eS,A.jZ,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bv,B.p(v,B.A(B.a([B.C(u.aPz(w.c,A.ai),1),new B.B(A.fi,B.p(v,D.bto,A.i,v,v,new B.o(A.eS.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.C(u.aPz(s,A.eS),1)],n),A.m,v,A.e,A.j,0,v,v),A.i,v,v,new B.o(v,v,o,q,v,new B.a7(A.ax,A.aE,A.w,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bv,u.aPC(A.eS,d,D.bps,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.U,u.bPk(A.b3,d,A.rN,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aC)
p.push(u.aPA(d,"Not now"))
return new C.I2(B.u(p,A.al,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.efc.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.I2(B.u(B.a([v.a8u(),A.P,v.a8v(A.b3,D.bp8,"Pick which saved document should receive the details.","Choose "+this.b),A.aT,new B.d3(new B.aV(0,1/0,0,B.aG(d,A.bM,x.w).w.a.b*0.42),B.hF(w,new C.efa(v,u,d),u.length,w,w,A.af,new C.efb(),!0),w),A.aC,v.aPA(d,"Cancel")],x.p),A.al,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.efb.prototype={
$2(d,e){return A.U},
$S:34}
C.efa.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.ahP,A.i,w,w,new B.o(w,w,w,B.m(12),w,D.bEo,A.n),w,42,w,w,w,w,w,42),A.bb,B.C(B.u(B.a([B.d(v.b,w,1,A.a0,w,w,w,A.mQ,w,w,w),A.dh,B.d("Updated "+this.a.NV(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a_,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.U(A.el,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.i,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ef9(this.c,v),w,w,w,w,w,w,w),A.i,A.K,0,w,w,w,w,w,A.aa)},
$S:74}
C.ef9.prototype={
$0(){B.a6(this.a,!1).K(this.b.a)
return null},
$S:0}
C.ef6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a8u()
t=t.a8v(A.aZ,A.rV,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.I2(B.u(B.a([s,A.P,t,A.bv,B.A(B.a([B.C(B.dU(A.a4m,new C.ef4(d),B.d9(u,u,u,u,u,u,u,u,u,A.c,u,u,A.c9,u,new B.b5(B.m(14),A.V),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.av,B.C(B.bJ(D.eCE,new C.ef5(d),B.bk(A.eS,u,u,u,A.c,u,A.c9,u,new B.b5(B.m(14),A.V),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.al,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.ef4.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.ef5.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.ef8.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8u(),s=w.b,r=u.a8v(A.aR,A.ei,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.C(u.aqI("Names",""+w.c),1),A.ab,B.C(u.aqI("Fields",""+w.d),1),A.ab,B.C(u.aqI("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bf,v,v,v,A.c,v,A.wc,v,new B.b5(B.m(14),A.V),v,v,v)
return new C.I2(B.u(B.a([t,A.P,r,A.aT,p,A.bv,B.bJ(B.d("Open "+s,v,v,v,v,v,v,A.mP,v,v,v),new C.ef7(d),o),A.U,u.aPB(d,"Stay here",!1)],q),A.al,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.ef7.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.ec6.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.ec5.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.eeZ.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.efx.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yf(A.d.dP(w.d,new C.efv(v),new C.efw(v)).hr(),w.f,null)},
$S:z+82}
C.efv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efw.prototype={
$0(){return this.a},
$S:z+83}
C.e9R.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.B(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hi,w,w,w),w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bv4,w,w,w,w,new C.e9P(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eAM,w,w,w)],x.p)
if(v>1)t.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bwd,w,w,w,w,new C.e9Q(d),!1,w,w,w,w,w,D.eUU,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dj,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.e9P.prototype={
$0(){B.a6(this.a,!1).K("scroll")
return null},
$S:0}
C.e9Q.prototype={
$0(){B.a6(this.a,!1).K("split")
return null},
$S:0}
C.e9S.prototype={
$0(){var w=this.b,v=w.c,u=C.eg(A.bn,!1,4279310375,A.ay,v,4280640491,24,A.bl,A.a_,"",0.84,C.cx(),w.b,"","",0,!1,"",0,D.b6,4280172719,2,v,0,0,"",D.ca,D.OU,0.88,0.06,0.08)
v=this.a
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.e9T.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iM
$.iM=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iM
$.iM=k+1
m.push(new C.ev(""+1000*l+"_"+k,D.OU,0.04,0.06,0.92,0.88,v,24,A.a_,A.bl,A.ay,4279310375,A.bn,u,D.b6,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.ca,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lj(""+1000*p+"_"+o,r+n,"",D.pi,4294967295,null,D.d7,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.e9X.prototype={
$0(){var w,v=C.cx(),u=this.a,t=u.e
t=(t==null?null:C.kd(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eg(A.bn,!1,4279310375,A.ay,t,4280640491,24,A.bl,A.a_,"",0.22,v,this.b.a,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.kz,0.35,0.55,0.62)
A.d.G(u.gdk().z,w)
u.r=w.a},
$S:0}
C.e9O.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aXw(o)
w=C.cx()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eg(A.bn,!1,4279310375,A.ay,"marriage_sign_placed_"+A.a.dZ(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a_,"",r,w,o.a,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.kz,s,u,t)
A.d.G(p.gdk().z,q)
A.d.bk(p.gdk().z,new C.e9N(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.hGy(p)}},
$S:0}
C.e9N.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.edO.prototype={
$0(){var w=this.a,v=this.b
w.aXw(v)
this.c.at=v.a
w.r=null},
$S:0}
C.efF.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ec9.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bk(r.z,new C.ec8())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.ec8.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eaz.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eaA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rG()},
$S:8}
C.e9L.prototype={
$0(){var w=C.eg(A.bn,!1,4279310375,A.ay,"HD Photo",4280640491,24,A.bl,A.a_,"",0.8,C.cx(),this.b,"","",0,!1,"",0,D.b6,4280172719,2,"",0,0,"",D.ca,D.l_,0.8,0.1,0.1),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ebB.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.e9U.prototype={
$0(){var w=this.a,v=this.b
A.d.G(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ea2.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ea3.prototype={
$0(){var w=this.b.hr(),v=C.cx(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eg(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.G(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ea4.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.ea1(v))
if(u>=0&&u<w.length-1){A.d.ct(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.ea1.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eaf.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.be(w,new C.ea0(v))
if(u>0){A.d.ct(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.ea0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eai.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eaj.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eak.prototype={
$0(){return this.a.as=A.dN},
$S:0}
C.eal.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eam.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ean.prototype={
$1(d){return d.b===D.cG},
$S:z+4}
C.eao.prototype={
$1(d){return d.length!==0},
$S:3}
C.ea5.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.Bw(w.gpw().c.j(0.18).l(),0.1,u,D.b6,0,2,1,0,0))
u=w.gdk().z
v=C.cx()
A.d.G(u,C.iH(A.bn,!1,w.gpw().d.l(),A.ay,18,A.bl,A.I,0.07,v,"Document Header",0,D.d7,0.9,0.05,0.02))},
$S:0}
C.ea6.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cx()
A.d.G(u,C.Bw(v.gpw().c.j(0.12).l(),0.1,t,D.b6,0,2,1,0,0.9))
t=v.gdk().z
u=C.cx()
w=C.by0()
A.d.G(t,C.iH(A.L,!1,v.gpw().e.l(),A.ay,12,A.bl,A.a_,0.06,u,"Footer \xb7 "+w,0,D.d7,0.9,0.05,0.92))},
$S:0}
C.ea7.prototype={
$0(){A.d.G(this.a.gdk().z,C.Bw(1727914055,0.12,C.cx(),D.b6,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ea8.prototype={
$0(){var w=4279310375
A.d.G(this.a.gdk().z,C.Bw(w,0.08,C.cx(),D.b6,w,2,0.5,0.2,0.4))},
$S:0}
C.ea9.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.Bw(w.gpw().c.j(0.35).l(),0.12,u,D.AX,4280640491,2,0.2,0.15,0.55))
A.d.G(w.gdk().z,C.iH(A.bn,!1,4279310375,A.ay,18,A.bl,A.a_,0.15,C.cx(),"Important note",0,D.pj,0.5,0.38,0.52))},
$S:0}
C.eaa.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.Bw(4294507260,0.78,C.cx(),D.b6,4291548641,1.5,0.84,0.08,0.1))
A.d.G(w.gdk().z,C.iH(A.bn,!1,4279179050,A.ay,16,A.bl,A.a_,0.7,C.cx(),"MEMO\n\nTo:\nFrom:\nDate: "+C.by0()+"\n\nSubject:\n\nBody text\u2026",0,D.d7,0.76,0.12,0.14))},
$S:0}
C.eab.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.Bw(4294897802,0.28,C.cx(),D.b6,4294626325,2,0.3,0.62,0.12))
A.d.G(w.gdk().z,C.iH(A.bn,!1,4285611794,A.ay,15,A.bl,A.a_,0.24,C.cx(),"Sticky note",0,D.azS,0.26,0.64,0.14))},
$S:0}
C.eac.prototype={
$0(){var w=4280640491,v=this.a
A.d.G(v.gdk().z,C.Bw(4293060848,0.04,C.cx(),D.b6,4291548641,2,0.8,0.1,0.48))
A.d.G(v.gdk().z,C.Bw(w,0.04,C.cx(),D.b6,w,2,0.55,0.1,0.48))},
$S:0}
C.ead.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.iH(A.bn,!1,w,A.ay,18,A.bl,A.a_,0.62,C.cx(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.FU,0.42,0.06,0.18))
A.d.G(v.gdk().z,C.iH(A.bn,!1,w,A.ay,18,A.bl,A.a_,0.62,C.cx(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ta,0.42,0.52,0.18))},
$S:0}
C.eae.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.Bw(858088427,0.62,C.cx(),D.b6,4280640491,2,0.42,0.05,0.18))
A.d.G(v.gdk().z,C.Bw(856004201,0.62,C.cx(),D.b6,4278556265,2,0.42,0.53,0.18))
A.d.G(v.gdk().z,C.iH(A.bn,!1,w,A.ay,20,A.bl,A.I,0.1,C.cx(),"Option A",0,D.d7,0.36,0.08,0.2))
A.d.G(v.gdk().z,C.iH(A.bn,!1,w,A.ay,20,A.bl,A.I,0.1,C.cx(),"Option B",0,D.d7,0.36,0.56,0.2))},
$S:0}
C.eag.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.Bw(4294967295,0.36,C.cx(),D.b6,w,2,0.24,0.38,0.28))
A.d.G(v.gdk().z,C.iH(A.L,!1,w,A.ay,14,A.bl,A.a_,0.12,C.cx(),"[ QR CODE ]",0,D.d7,0.24,0.38,0.4))},
$S:0}
C.eah.prototype={
$0(){return C.c7S(this.b,D.OV,this.a.gpw())},
$S:0}
C.ebA.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2F.q(0,d),t=this.a
return t.b1f(d,v===d,A.aW,this.c,new C.ebz(t,u,d,w),u)},
$S:z+25}
C.ebz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.ns(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.byM(r,new C.eby(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eby.prototype={
$0(){return this.a.cX(new C.ebx(this.b,this.c))},
$S:0}
C.ebx.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.e9V.prototype={
$0(){var w,v=this.a,u=v.gpw(),t=C.qO(4294967295,null,0,0,null,C.cx(),D.m2,"","","",D.d7),s=this.b
C.c7S(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.AW){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eaD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hMi(p,q.d,s,new C.eaC(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rG(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eaC.prototype={
$1(d){return this.bds(d)},
bds(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.eaB(t,d))
w=2
return B.b(t.rG(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+85}
C.eaB.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.eaE.prototype={
$0(){return this.a.bAH()},
$S:0}
C.eaF.prototype={
$0(){return this.a.aL3("Class Presentation",!0)},
$S:0}
C.eaG.prototype={
$1(d){return this.a.bBC(d.b,this.b,d.a)},
$S:z+86}
C.ebg.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bM,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.edr.prototype={
$1(d){return new B.B(new B.L(0,0,0,B.aG(d,A.em,x.w).w.f.d),new B.eh(new C.edq(this.a,this.b),null),null)},
$S:60}
C.edq.prototype={
$2(d,e){return B.p5(new C.edp(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1682}
C.edp.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.i,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.U,r,new B.B(A.acD,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bd,B.bF(!1,A.yd,v,v,!0,v,v,new C.edn(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.C(B.cX(B.a([p.aNE(u,!0,!0,new C.edo(p,w.d))],q),e,D.be1,v,v,A.af,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.i,v,v,new B.o(t,v,s,A.kf,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.edn.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edo.prototype={
$0(){this.b.$1(new C.edl())
var w=this.a
if(w.c!=null)w.n(new C.edm())},
$S:0}
C.edl.prototype={
$0(){},
$S:0}
C.edm.prototype={
$0(){},
$S:0}
C.ef_.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.ef0.prototype={
$4(d,e,f,g){var w=A.cm.aq(0,e.gt(0))
return B.d8(B.e4(A.C,new C.avA(this.a,null),0.94+w*0.06,null,null),w)},
$S:426}
C.ef1.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.ef2.prototype={
$4(d,e,f,g){var w=A.cm.aq(0,e.gt(0))
return B.d8(B.e4(A.C,new C.b8I(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:426}
C.ef3.prototype={
$0(){return A.d.cj(this.a.d,0,C.TN(this.b))},
$S:0}
C.ea_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dE.aq(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.72)],t):B.a([A.c.j(0.88),A.oH.j(0.75)],t)
r=B.H(A.b9.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b9.j(0.35+q),A.cf.j(0.18),A.K],t)
q=B.H(A.b9.j(0.45+q),A.r,1)
t=B.p(p,B.U(Y.WR,u?A.ak:A.M,p,p,p,28),A.i,p,p,new B.o(p,p,q,p,p,new B.bT(A.C,0.5,A.w,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tg(A.fe,B.p(p,B.u(B.a([t,A.aC,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ai,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.i,p,p,new B.o(p,p,r,v,p,new B.a7(A.ax,A.aE,A.w,s,p,p),A.n),p,p,p,p,A.ej,p,p,1/0),14,!1),A.ap)},
$S:649}
C.eb4.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eb5.prototype={
$1(d){return d.length!==0},
$S:3}
C.eb6.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.jY
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Xr:A.zQ}return w},
$S:702}
C.eb9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dE.aq(0,A.k.J(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.mh.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.U(C.kd(v.w)?A.um:A.p5,A.c,l,l,l,22),A.i,l,l,new B.o(l,l,l,q,l,new B.a7(A.a1,A.a7,A.w,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.NV(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.NV(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.NV(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.NV(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.NV(v.f)
r=k.bBA(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a5u(B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,B.p(l,B.dI(!1,A.Jy,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.U(A.nm,t?A.aA:A.bO,l,l,l,l),l,l,l,new C.eb7(k,v,t),l,l,l,l,"Project options",l),l),A.i,l,l,new B.o(l,l,p,u,l,new B.a7(A.ax,A.aE,A.w,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eb8(k,v),l,l,l,l,l,l,l),A.i,A.K,0,l,l,l,l,l,A.aa),l),A.ap),A.i,l,l,l,l,l,l,A.d6,l,l,l,l)},
$S:90}
C.eb8.prototype={
$0(){return this.a.abC(this.b)},
$S:0}
C.eb7.prototype={
$0(){return this.a.zI(this.b,this.c)},
$S:0}
C.ecA.prototype={
$0(){var w=this.a
w.b_Z()
w.n(new C.ecz())},
$S:0}
C.ecz.prototype={
$0(){},
$S:0}
C.ecB.prototype={
$1(d){return this.a.afy(this.b.a,d)},
$S:2}
C.ecC.prototype={
$0(){this.a.cX(new C.ecy(this.b))},
$S:0}
C.ecy.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cn:A.O},
$S:0}
C.ecD.prototype={
$0(){this.a.cX(new C.ecx(this.b))},
$S:0}
C.ecx.prototype={
$0(){var w=this.a
return w.y=w.y===A.cS?A.bl:A.cS},
$S:0}
C.ecE.prototype={
$0(){this.a.cX(new C.ecw(this.b))},
$S:0}
C.ecw.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m7},
$S:0}
C.ecF.prototype={
$0(){this.a.cX(new C.ecv(this.b))},
$S:0}
C.ecv.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ecG.prototype={
$0(){var w=this.a
w.cX(new C.ecu(w,this.b))},
$S:0}
C.ecu.prototype={
$0(){var w=this.b
return w.as=this.a.bVK(w.as)},
$S:0}
C.ecH.prototype={
$0(){return this.a.cX(new C.ect(this.b))},
$S:0}
C.ect.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ecI.prototype={
$0(){return this.a.cX(new C.ecs(this.b))},
$S:0}
C.ecs.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ecl.prototype={
$0(){return this.a.a_n(this.b.a)},
$S:0}
C.ecm.prototype={
$0(){this.a.Y0()
return null},
$S:0}
C.ecn.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bM,x.w).w.a.a<900)w.abV()
else w.n(new C.eck(w))},
$S:0}
C.eck.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eco.prototype={
$0(){this.a.cX(new C.ecj(this.b))},
$S:0}
C.ecj.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cn:A.O},
$S:0}
C.ecp.prototype={
$0(){return this.a.cX(new C.eci(this.b))},
$S:0}
C.eci.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ecq.prototype={
$0(){return this.a.cX(new C.ech(this.b))},
$S:0}
C.ech.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ecr.prototype={
$0(){return this.a.avh(null)},
$S:0}
C.ebt.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.ebu.prototype={
$0(){this.a.a72()
return null},
$S:0}
C.ebw.prototype={
$1(d){return this.bdt(d)},
bdt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Il(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c0(A.aG,new C.ebo(r),q,!0,!0,!1,null,!1,!1,x.r),$async$$1)
case 11:p=f
if(p!=null)s.cX(new C.ebp(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ebq(r))
s=s.c.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cX(new C.ebr(r))
s=s.c.E(x.q).f
s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h1l(q,new C.D0(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cX(new C.ebs(r,p))
s=s.c.E(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ae8(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.aZ(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:89}
C.ebo.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dLw],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bvb:r
q.push(B.dI(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.ebn(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.dj,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.ebn.prototype={
$0(){B.a6(this.a,!1).K(this.b)
return null},
$S:0}
C.ebp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ebq.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ebr.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ebs.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ebv.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yx(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yx(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yx(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ae8(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dPj,q,v,u,B.yx(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:133}
C.efL.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bxY(w,v)}},
$S:0}
C.efM.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.ecL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bEj:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aP:A.bz
return new B.B(A.h9,B.aJ(u,B.de(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b7,new B.o(w,u,u,r,u,q,A.n),A.eC,u,u,u,A.lR,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ecK(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:137}
C.ecK.prototype={
$0(){var w=this.a
return w.n(new C.ecJ(w,this.b))},
$S:0}
C.ecJ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ecM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_b:E.ar_
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbER():t.gbB1()
return B.hJ(B.aJ(u,B.p(u,D.ahi,A.i,u,u,new B.o(u,u,u,u,B.a([new B.a9(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a7(A.a1,A.a7,A.w,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1685}
C.ecN.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hLA(v,w.a.c)},
$S:0}
C.ee9.prototype={
$0(){return this.b.uj(this.a.a)},
$S:0}
C.eea.prototype={
$0(){return this.a.uj(D.m2)},
$S:0}
C.eeb.prototype={
$0(){return this.a.uj(D.FS)},
$S:0}
C.eem.prototype={
$0(){return this.a.uj(D.FT)},
$S:0}
C.eex.prototype={
$0(){return this.a.uj(D.FR)},
$S:0}
C.eeI.prototype={
$0(){return this.a.pi("lab_report")},
$S:0}
C.eeP.prototype={
$0(){return this.a.pi("rubric")},
$S:0}
C.eeQ.prototype={
$0(){return this.a.pi("minutes")},
$S:0}
C.eeR.prototype={
$0(){return this.a.pi("agenda")},
$S:0}
C.eeS.prototype={
$0(){return this.a.pi("timeline")},
$S:0}
C.eeT.prototype={
$0(){return this.a.pi(this.b.a)},
$S:0}
C.eec.prototype={
$0(){this.a.Tw()
return null},
$S:0}
C.eed.prototype={
$0(){this.a.Tq()
return null},
$S:0}
C.eee.prototype={
$0(){return this.a.pi("table")},
$S:0}
C.eef.prototype={
$0(){return this.a.pi("sticky")},
$S:0}
C.eeg.prototype={
$0(){return this.a.pi("divider")},
$S:0}
C.eeh.prototype={
$0(){return this.a.pi("header_bar")},
$S:0}
C.eei.prototype={
$0(){return this.a.og(D.b6)},
$S:0}
C.eej.prototype={
$0(){return this.a.og(D.ew)},
$S:0}
C.eek.prototype={
$0(){return this.a.og(D.jj)},
$S:0}
C.eel.prototype={
$0(){return this.a.og(D.AX)},
$S:0}
C.een.prototype={
$0(){return this.a.og(D.jk)},
$S:0}
C.eeo.prototype={
$0(){return this.a.og(D.kA)},
$S:0}
C.eep.prototype={
$0(){return this.a.og(D.fb)},
$S:0}
C.eeq.prototype={
$0(){this.a.FN()
return null},
$S:0}
C.eer.prototype={
$0(){this.a.Ly()
return null},
$S:0}
C.ees.prototype={
$0(){return this.a.pi("quote")},
$S:0}
C.eet.prototype={
$0(){return this.a.a5h()},
$S:0}
C.eeu.prototype={
$0(){this.a.Y5()
return null},
$S:0}
C.eev.prototype={
$0(){var w=this.a
return w.n(new C.ee_(w))},
$S:0}
C.ee_.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eew.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ns(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.ee7(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ee7.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eey.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.ji()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2G.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.be
u=B.a([B.p(s,s,A.i,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a7(A.a1,A.a7,A.w,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a2G.q(0,q))u.push(B.an(s,B.p(s,D.Ld,A.i,s,s,D.Cc,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.B(A.h9,B.aJ(s,B.hJ(new B.am(A.W,s,A.a9,A.i,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ee6(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+87}
C.ee6.prototype={
$0(){this.a.a5z(this.b)
return null},
$S:0}
C.eez.prototype={
$0(){this.a.a5y(this.b)
return null},
$S:0}
C.eeA.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hix(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bf:A.be
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qO(4294967295,r,0,0,r,"preview_"+w,D.pi,"","","",D.d7)
C.fZj(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.h_D(s),A.ap),A.i,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.ahQ,A.i,r,r,D.Cc,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.B(A.lh,B.aJ(r,B.u(B.a([new B.am(A.W,r,A.a9,A.q,u,r),A.dh,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ai,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ee5(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+88}
C.ee5.prototype={
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
return B.b(s.ns(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cX(new C.edW(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edW.prototype={
$0(){return C.fZj(this.a,this.b.a)},
$S:0}
C.ee8.prototype={
bdu(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2F.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.ns(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bdu(d,e)},
$S:z+89}
C.eeU.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("I<1,r>")
v=B.z(new B.I(d,new C.eeW(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ce(B.A(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.b_)},
$S:z+90}
C.eeW.prototype={
$1(d){var w=this
return w.a.b1f(d,w.b===d,w.c,w.d,new C.eeV(w.e,d),!D.a2F.q(0,d))},
$S:z+25}
C.eeV.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eeB.prototype={
$1(d){this.b.$2(d,new C.ee4(this.a,d,this.c))
return null},
$S:z+26}
C.ee4.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.byM(u,new C.edV(v,this.c,w),w)},
$S:0}
C.edV.prototype={
$0(){return this.a.cX(new C.edT(this.b,this.c))},
$S:0}
C.edT.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eeC.prototype={
$1(d){this.b.$2(d,new C.ee3(this.a,d))
return null},
$S:z+26}
C.ee3.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.ftG(u,new C.edU(v,w),w)},
$S:0}
C.edU.prototype={
$0(){var w=this.a
return w.cX(new C.edS(w,this.b))},
$S:0}
C.edS.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.eeD.prototype={
$0(){var w=this.a
return w.n(new C.ee2(w))},
$S:0}
C.ee2.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eeE.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bxY(w,v)}},
$S:0}
C.eeF.prototype={
$0(){this.a.Gz()
return null},
$S:0}
C.eeG.prototype={
$0(){return this.a.a5h()},
$S:0}
C.eeH.prototype={
$0(){var w=this.a,v=w.ji()
if(v!=null&&v.b===D.cG)w.cX(new C.ee1(v))},
$S:0}
C.ee1.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eeJ.prototype={
$0(){this.a.Cf()
return null},
$S:0}
C.eeK.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.DQ(v,!0)
return null},
$S:0}
C.eeL.prototype={
$0(){this.a.cX(new C.ee0(this.b))},
$S:0}
C.ee0.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cn:A.O},
$S:0}
C.eeM.prototype={
$0(){this.a.cX(new C.edZ(this.b))},
$S:0}
C.edZ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cS?A.bl:A.cS},
$S:0}
C.eeN.prototype={
$0(){this.a.cX(new C.edY(this.b))},
$S:0}
C.edY.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.ay:A.m7},
$S:0}
C.eeO.prototype={
$0(){this.a.cX(new C.edX(this.b))},
$S:0}
C.edX.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eay.prototype={
$1(d){return this.bdr(d)},
bdr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.ns(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cX(new C.eax(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:190}
C.eax.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.efg.prototype={
$0(){var w=this.a
return w.cX(new C.eff(w,this.b))},
$S:0}
C.eff.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.efh.prototype={
$0(){var w=this.a
return w.cX(new C.efe(w,this.b))},
$S:0}
C.efe.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ebG.prototype={
$0(){return this.a.cX(new C.ebF(this.b))},
$S:0}
C.ebF.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ebH.prototype={
$0(){return this.a.cX(new C.ebE(this.b))},
$S:0}
C.ebE.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ecd.prototype={
$1(d){var w=x.gh
w=B.z(new B.I(D.ajv,new C.ecc(),w),w.k("ai.E"))
return w},
$S:z+92}
C.ecc.prototype={
$1(d){var w=null
return B.yx(B.d(d.b,w,w,w,w,w,w,A.lA,w,w,w),48,d,x.fO)},
$S:z+93}
C.eft.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a8(v,w?8:0,null,null)},
$S:34}
C.efs.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jF()?q:new C.efq(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bf
else v=r.d?A.be:A.ct
v=B.H(v,A.r,o?2:1)
u=r.d?A.d3:A.c
t=B.c_(0,C.h_D(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.W,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nB,q,q,q),A.i,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adu,q,q,q),q,q,4,q,q,q)],x.p),q),A.i,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.efr(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:73}
C.efr.prototype={
$0(){var w=this.a
return w.n(new C.efm(w,this.b))},
$S:0}
C.efm.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Iv()},
$S:0}
C.efq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c0(null,new C.efn(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.efo(q,s))
q.aMq()}else if(r==="del"){q=t.a
q.n(new C.efp(q,s))
q.aLE()}else if(r==="up")t.a.aXJ(s,s-1)
else if(r==="down")t.a.aXJ(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efn.prototype={
$1(d){var w=null,v=B.a([B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bwO,w,w,w,w,new C.efi(d),!1,w,w,w,w,w,w,w,D.eBE,w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bwH,w,w,w,w,new C.efj(d),!1,w,w,w,w,w,w,w,A.v8,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bw_,w,w,w,w,new C.efk(d),!1,w,w,w,w,w,w,w,D.eJ_,w,w,w))
if(u<this.b.r.length-1)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,D.bxV,w,w,w,w,new C.efl(d),!1,w,w,w,w,w,w,w,D.eBs,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:33}
C.efi.prototype={
$0(){B.a6(this.a,!1).K("dup")
return null},
$S:0}
C.efj.prototype={
$0(){B.a6(this.a,!1).K("del")
return null},
$S:0}
C.efk.prototype={
$0(){B.a6(this.a,!1).K("up")
return null},
$S:0}
C.efl.prototype={
$0(){B.a6(this.a,!1).K("down")
return null},
$S:0}
C.efo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.efp.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.efu.prototype={
$0(){return this.a.a5h()},
$S:0}
C.eaY.prototype={
$0(){var w=this.a
w.b_Z()
w.avh(null)},
$S:0}
C.eaX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.a9(0,A.G,A.x.j(0.35),A.dl,24)],x.V),m=this.b
if(m.f!=null){w=B.bg(m.e)
v=m.f
v.toString
v=new B.a7(A.ax,A.aE,A.w,B.a([w,B.bg(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.bg(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.bg(m.e)
q=m.f
q.toString
q=new B.a7(A.ax,A.aE,A.w,B.a([r,B.bg(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.bQ(A.k7,new B.o(m.f==null?B.bg(m.e):p,p,p,p,p,r,A.n),A.ba),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.I(r,new C.eaW(this.a,e.b,e.d,q),B.S(r).k("I<1,r>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bO,p,p,p,p,p,p,p,p,p,p,p,A.a_,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bQ(new B.am(A.W,p,A.a9,A.i,s,new B.cv("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.ba)},
$S:422}
C.eaW.prototype={
$1(d){var w=this
return w.a.bx6(d,w.b,w.c,w.d)},
$S:z+23}
C.eaL.prototype={
$0(){var w=this
if(w.b){w.a.LG(w.c)
return}if(w.d){w.a.a5f(w.c)
return}if(w.e){w.a.adc(w.c)
return}if(w.f)w.a.b0r(w.c)},
$S:0}
C.eaM.prototype={
$0(){this.a.LG(this.b)
return null},
$S:0}
C.eaN.prototype={
$0(){return this.a.a_n(this.b.a)},
$S:0}
C.eaO.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.eaK(u,d,w.c,w.d))
v.Gd()
v.nz()
v.ow()},
$S:18}
C.eaK.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eaP.prototype={
$1(d){return this.a.afy(this.b.a,d)},
$S:2}
C.eaR.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fER(w))u.a.LG(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b0r(v)},
$S:0}
C.eaQ.prototype={
$0(){return this.a.a_n(this.b.a)},
$S:0}
C.eaS.prototype={
$1(d){var w=this,v=w.a
v.n(new C.eaJ(w.b,d,w.c,w.d))
v.Gd()
v.nz()
v.ow()},
$S:18}
C.eaJ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cG)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eaT.prototype={
$1(d){var w=this.a
w.n(new C.eaI(this.b,d))
w.Gd()
w.nz()
w.ow()},
$S:309}
C.eaI.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cG)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eaU.prototype={
$0(){var w=this.a
w.n(new C.eaH(this.b))
w.Gd()
w.nz()
w.ow()},
$S:0}
C.eaH.prototype={
$0(){this.a.r=C.h_9()},
$S:0}
C.eaV.prototype={
$0(){return this.a.a_n(this.b.a)},
$S:0}
C.ecP.prototype={
$0(){var w=this.a
return w.n(new C.ecO(w))},
$S:0}
C.ecO.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ecQ.prototype={
$1(d){return this.a.crn(this.b.a,d)},
$S:2}
C.ebU.prototype={
$1(d){var w
this.a.cX(d)
w=this.b
if(w!=null)w.$0()},
$S:167}
C.ebV.prototype={
$1(d){return this.a.$1(new C.ebT(this.b,d))},
$S:6}
C.ebT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ebW.prototype={
$1(d){return this.a.$1(new C.ebS(this.b,d))},
$S:6}
C.ebS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ebX.prototype={
$1(d){return this.a.$1(new C.ebR(this.b,d))},
$S:6}
C.ebR.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ebY.prototype={
$1(d){return this.a.$1(new C.ebQ(this.b,d))},
$S:6}
C.ebQ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.ebZ.prototype={
$1(d){return this.a.$1(new C.ebP(this.b,d))},
$S:6}
C.ebP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ec_.prototype={
$1(d){return this.b.$1(new C.ebO(this.a,this.c))},
$S:9}
C.ebO.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.ec0.prototype={
$1(d){return this.b.$1(new C.ebN(this.a,this.c))},
$S:9}
C.ebN.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.ec1.prototype={
$1(d){var w=null,v=this.b,u=B.bg(d),t=v.Q===d,s=t?A.bf:A.cO
return B.aJ(w,B.p(w,w,A.i,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ebM(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:419}
C.ebM.prototype={
$0(){return this.a.$1(new C.ebJ(this.b,this.c))},
$S:0}
C.ebJ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ec2.prototype={
$1(d){return this.a.$1(new C.ebL(this.b,d))},
$S:1686}
C.ebL.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.ec3.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.i,w,w,new B.o(B.bg(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ebK(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:419}
C.ebK.prototype={
$0(){return this.a.$1(new C.ebI(this.b,this.c))},
$S:0}
C.ebI.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ec4.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).pF()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eC()}v.a.aoq()},
$S:0}
C.ec7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dE.aq(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b9,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.U(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.U(A.rV,u,n,n,n,10),A.i,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mw,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.X,!0,n,B.aH(!1,m,!0,B.eq(new B.a8(48,48,new B.am(A.C,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a7(A.ax,A.aE,A.w,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.i,A.K,0,n,A.K,n,n,n,A.aa)},
$S:131}
C.e9H.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dE.aq(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b9,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.eq(B.u(B.a([B.e4(A.C,B.p(p,B.U(q.d,A.c,p,p,p,26),A.i,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.jM,A.L,p,p)],x.p),A.m,p,A.b5,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ax,A.aE,A.w,u,p,p),A.n),p,A.Dt,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.i,A.K,0,p,A.K,p,p,p,A.aa)},
$S:131}
C.edM.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aI(w,A.T,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aiH,A.z,!0,w,!0,w,!1,w,A.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.am,w,w,w,w)
return B.ei(B.a([B.bF(!1,A.dd,w,w,!0,w,w,new C.edK(d),w,w),B.bJ(A.py,new C.edL(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.edK.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.edL.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).K(w)
return null},
$S:0}
C.cUf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dE.aq(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.aq(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dW.aq(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.a9(w*2,A.G,A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG).j(0.18+w*0.12),A.J,32+w*10),D.a6T],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.i,k,k,new B.o(k,k,k,k,k,new B.bT(A.b4,0.9,A.w,k,0,B.a([A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG).j(0.28+w*0.14)
p=B.p(k,k,A.i,k,k,new B.o(k,k,k,k,k,new B.bT(A.C,0.5,A.w,k,0,B.a([m,A.d.gai(C.kd(j.a.c.w)?D.t1:M.mG).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kd(m)?D.t1:M.mG
s=B.a([new B.a9(0,A.G,A.d.gI(C.kd(m)?D.t1:M.mG).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e4(A.C,B.p(k,B.U(C.kd(j.a.c.w)?A.um:A.p5,A.c,k,k,k,22),A.i,k,k,new B.o(k,k,k,n,s,new B.a7(A.ax,A.aE,A.w,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.C,k,A.a9,A.q,l,k),A.U,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.hh,B.d(j.a.c.b,k,2,A.a0,k,k,k,D.euj,A.L,k,k),A.aw,B.d(j.gcmC(),k,k,k,k,k,k,D.eyH,A.L,k,k),A.aC],m)
p=j.a.c
if(p.z){p=p.gQb()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kd(j.a.c.w)?D.t1:M.mG).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.HW(A.wD,"Download PDF","pdf",A.db,j.Hn(0),!1,k))
p=j.a.c
if(!p.z||p.gQb()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.HW(A.jZ,"Transfer to "+C.h_b(p==null?"":p),"transfer_hati",A.aR,j.Hn(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hn(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.HW(D.bot,"Rename presentation","rename",A.cf,n,!1,k),A.ar,new C.HW(A.af4,"Duplicate","duplicate",A.b0,j.Hn(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.HW(A.e4,"Delete presentation","delete",A.aH,j.Hn(p),!0,k))
s.push(A.aw)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hn(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hn(n)
s.push(B.dN(B.d8(B.bF(!1,E.aK7,k,k,!0,k,k,new C.cUe(d),k,B.fn(k,k,k,k,k,k,k,k,k,k,k,A.bO,k,k,k,A.at,k,D.bh2,k,k,k,k,k,A.k1,k,k)),n),new B.v(0,(1-p)*8)))
return B.e4(A.C,B.d8(B.aD(!1,A.X,!0,k,B.p(k,B.bw(q,new B.am(A.W,k,A.a9,A.q,B.a([o,new B.B(D.bgc,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.i,k,A.Sh,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.i,A.K,0,k,k,k,k,k,A.aa),i),0.88+u*0.12,k,k)},
$S:43}
C.cUe.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.cUB.prototype={
$0(){B.a6(this.a,!1).K(!1)
return null},
$S:0}
C.cUC.prototype={
$0(){B.a6(this.a,!1).K(!0)
return null},
$S:0}
C.cUc.prototype={
$1(d){var w=this.a
return w.n(new C.cU8(w))},
$S:23}
C.cU8.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cUd.prototype={
$1(d){var w=this.a
return w.n(new C.cU7(w))},
$S:51}
C.cU7.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUb.prototype={
$0(){var w=this.a
return w.n(new C.cU9(w))},
$S:0}
C.cU9.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cUa.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).K(w)
return null},
$S:0}
C.egr.prototype={
$0(){return $.bg6=!$.bg6},
$S:0}
C.egh.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaPs())u.as9()},
$S:0}
C.egq.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.egi.prototype={
$0(){return this.a.y=!0},
$S:0}
C.egj.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.as9()},
$S:0}
C.egd.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ege.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.egf.prototype={
$0(){return this.a.y=!1},
$S:0}
C.egg.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.J(w-1+v,v)},
$S:0}
C.ego.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.C,null,A.aX,A.q,w,null)},
$S:1687}
C.egp.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hy)return new B.cZ(e,!1,d,null)
w=this.a
return w.ckK(w.e,d,e)},
$S:427}
C.egk.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gt(0))*1.5708)
return B.fp(A.C,B.d8(e,v.gt(0)),null,w,!0)},
$S:43}
C.egl.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jv((1-v.gt(0))*1.5708)
return B.fp(A.C,B.d8(e,v.gt(0)),null,w,!0)},
$S:43}
C.egm.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gt(0)*0.8)
w.jv(v.gt(0)*0.35)
return B.fp(A.C,B.d8(e,v.gt(0)),null,w,!0)},
$S:43}
C.egn.prototype={
$2(d,e){var w=B.df(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gt(0)*1.2)
return B.fp(A.a7,B.d8(e,v.gt(0)),null,w,!0)},
$S:43}
C.egs.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWq().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWq().x
t===$&&B.c()
return new C.aYc(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.GV(v.c,t,!0,new B.cv("cine"+u,x.W))},
$S:692}
C.egu.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bM,x.w).w.a.a*0.55)w.as9()
else w.c9I()},
$S:51}
C.egt.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.fkG.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:428}
C.fkP.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ei(B.a([B.bF(!1,A.dd,w,w,!0,w,w,new C.fkM(d),w,w),B.bF(!1,D.ePF,w,w,!0,w,w,new C.fkN(d,this.b,v),w,w),B.bJ(A.aKo,new C.fkO(d,v,this.c),w)],x.p),w,w,L.rf,new B.a8(320,w,t,w),w,w,w,w,D.eQZ,w)},
$S:19}
C.fkM.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.fkN.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).K(null)
C.fFv(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fkO.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).K(null)
t=u.b
w=2
return B.b(C.aMi(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aLJ(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fkF.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c7V.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:624}
C.fkL.prototype={
$1(d){return d.ad()},
$S:z+21}
C.eWh.prototype={
$1(d){return C.fFt(C.TN(B.Y(d,x.N,x.z)),this.a)},
$S:z+94}
C.fsW.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:93}
C.fsX.prototype={
$4(d,e,f,g){var w=A.cm.aq(0,e.gt(0))
return B.d8(B.e4(A.C,D.f2c,0.94+w*0.06,null,null),w)},
$S:426}
C.fsY.prototype={
$1(d){var w=this
return new C.TP(w.a,w.b,w.c,w.d,null)},
$S:z+95}
C.efY.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.efU.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.efX.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.TQ(u,this.b,w.gaJ3(),v,null)},
$S:z+97}
C.efV.prototype={
$0(){return this.a.f=!0},
$S:0}
C.efW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.efZ.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eg_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eg2.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.eg3.prototype={
$0(){var w=this.a
return w.n(new C.eg1(w))},
$S:0}
C.eg1.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eg4.prototype={
$0(){var w=this.a
return w.n(new C.eg0(w))},
$S:0}
C.eg0.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eg5.prototype={
$1(d){return this.a.bBB(d,this.b)},
$S:z+98}
C.efT.prototype={
$0(){var w=this.a
return w.n(new C.efS(w,this.b))},
$S:0}
C.efS.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eg6.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eg7.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eg8.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eg9.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.ega.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fB(new B.fu(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.E(x.q).f.P(D.ehr)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e9B.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.e9A())},
$S:0}
C.e9A.prototype={
$0(){},
$S:0}
C.e9C.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fs()},
$S:8}
C.e9x.prototype={
$1(d){return this.a.n(new C.e9w())},
$S:2}
C.e9w.prototype={
$0(){},
$S:0}
C.e9y.prototype={
$1(d){return this.a.aTK()},
$S:2}
C.e9z.prototype={
$0(){B.a6(this.a,!1).K(null)
return null},
$S:0}
C.egc.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.p6(),$async$$0)
case 2:if(t.c!=null)t.n(new C.egb(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.egb.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ff7.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.es(new B.jZ(this.c,new C.ff6(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:231}
C.ff6.prototype={
$3(d,e,f){return new C.GV(e,!1,!1,new B.cv(e.a,x.W))},
$S:z+100}
C.ff8.prototype={
$1(d){var w=null
return B.nR(!1,B.at(new C.bqm(this.a,this.b,w),w,w,w),w,x.z)},
$S:292}
C.ffc.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aT.gmA(),$async$$0)
case 3:w=4
return B.b(B.bK(A.oU,null,x.H),$async$$0)
case 4:w=5
return B.b($.aT.gmA(),$async$$0)
case 5:s=$.aT.ae$.x.h(0,t.a)
r=s==null?null:s.gb3()
if(!(r instanceof B.qR))throw B.O("Could not draw the slide.")
u=r.mb(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.ffd.prototype={
be_(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hv(A.fZ),$async$$1)
case 3:r=f
if(r==null)throw B.O("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hC([J.fa(A.dH.gaL(r))],"image/png"))
t.toString
s=Ag.fwH(t)
w=4
return B.b(new B.pu(s,"load",!1,x.ev).gI(0).cI(0,A.kn),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.be_(d)},
$S:1691}
C.ff9.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.ffa.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fz(0)},
$S:141}
C.ffb.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eQF.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.er1,A.L,w,w)},
$S:1692}
C.eQG.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.mL(A.bh,w,A.dM,8,w,e===0?w:e,w),A.ap)},
$S:638}
C.e0U.prototype={
$1(d){this.a.Xt()
return null},
$S:14}
C.e0S.prototype={
$0(){return this.a.e=D.bck},
$S:0}
C.e0T.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bs
return this.b.e=w},
$S:0}
C.cau.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+101}
C.cav.prototype={
$2(d,e){return(d|e)>>>0},
$S:76};(function aliases(){var w=C.aIn.prototype
w.bop=w.p
w=C.aHR.prototype
w.bnS=w.p
w=C.aHD.prototype
w.bnD=w.p
w=C.aHQ.prototype
w.bnR=w.p
w=C.aIl.prototype
w.bon=w.p
w=C.aJE.prototype
w.bpQ=w.p
w=C.aGy.prototype
w.bmv=w.p
w=C.aIz.prototype
w.boB=w.p
w=C.aIA.prototype
w.boC=w.p
w=C.aZT.prototype
w.bjc=w.ay9})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1
w(C,"hJC","akD",102)
v(C.aFz.prototype,"gbW4","Wx",0)
var s
u(s=C.auo.prototype,"gcm_","cm0",37)
v(s,"gbWP","aab",0)
v(s=C.auk.prototype,"gaSE","CI",3)
v(s,"gbWM","bWN",3)
v(s,"gasq","wF",0)
v(s,"gasr","H6",0)
t(C,"hK0","hgo",103)
v(C.aAm.prototype,"gbYF","bYG",3)
v(s=C.aBZ.prototype,"gaTC","NR",0)
v(s,"gcel","aXP",3)
v(s,"gcnk","awr",77)
v(s,"gbEI","a76",0)
v(s,"gbZM","zm",0)
v(s=C.aDT.prototype,"gc8w","Yy",0)
v(s,"gc8E","YB",0)
v(s,"gbuf","a5F",0)
v(s,"gbZQ","aaY",0)
v(C.aDS.prototype,"gbZR","aaZ",0)
v(C.ay0.prototype,"gbtf","a5s",0)
v(C.awr.prototype,"gbZS","Xs",0)
w(C,"hKm","hIk",12)
w(C,"hKk","hFn",12)
w(C,"hKl","hHl",12)
v(s=C.aAU.prototype,"gcqj","cqk",3)
v(s,"gccD","ccE",3)
u(s,"gD1","abC",7)
v(s,"gbyK","anC",3)
u(s,"gD2","aUS",7)
v(s,"gc0Z","abk",0)
v(s,"gc_Q","abj",0)
v(s,"gc35","abD",0)
v(s,"gbB1","a6I",0)
v(s,"gc3Y","Y0",0)
v(s,"gc3Z","abU",0)
v(s,"gc4u","ac0",0)
v(s,"gc3i","abG",0)
v(s,"gbER","a7a",0)
v(s,"gaMp","aMq",3)
v(s,"gaLD","aLE",3)
v(s,"gaHq","aHr",3)
v(s,"gaLC","aoq",3)
u(s,"gbtw","btx",78)
v(s,"gaw2","b_N",3)
v(s,"gc_S","c_T",3)
v(s,"gbPC","bPD",3)
v(s,"gbDr","bDs",3)
v(s=C.aAX.prototype,"gcph","cpi",3)
v(s,"gcoX","coY",3)
t(C,"hKn","hIB",2)
v(s=C.aAV.prototype,"gbZY","Hp",0)
v(s,"gcgd","Ph",0)
v(s,"gbZV","Ho",0)
v(s,"gcry","a0_",0)
v(s,"gc4F","ac7",0)
v(C.aAT.prototype,"gbZZ","aTK",3)
v(s=C.aAW.prototype,"gbFC","a7k",0)
u(s,"gbZW","bZX",99)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nm,C.PL,C.bCo,C.bB7,C.cpH,C.cpF,C.bIg,C.b4v,C.cpG,C.bzI,C.cao,C.cam,C.can,C.cal,C.apE,C.cak,C.nO,C.aBu,C.j8,C.na,C.o1,C.lG,C.ym,C.ne,C.a5B,C.ao3,C.aYd,C.e0j,C.kU,C.D9,C.em,C.iK,C.D0,C.wz,C.ev,C.lj,C.hP,C.jr,C.a5C,C.acx,C.aYe,C.apH,C.aZT,C.a0A])
u(B.kv,[C.cxz,C.bTg,C.faC,C.cz4,C.cyr,C.ffM,C.dOk,C.dOj,C.e0X,C.e0W,C.eAl,C.ezK,C.ezJ,C.eAM,C.eAk,C.eAd,C.eAv,C.eBb,C.f2T,C.eH2,C.eH1,C.eHv,C.e0m,C.fkC,C.dK3,C.fqK,C.fhu,C.c7N,C.c7L,C.c7Q,C.fhZ,C.fi_,C.fi0,C.fi1,C.c7x,C.c7y,C.dxp,C.c7u,C.fhY,C.eOd,C.dIf,C.c7n,C.e02,C.ffD,C.edb,C.edA,C.edx,C.edw,C.edH,C.edG,C.efb,C.efa,C.edq,C.edp,C.ea_,C.eb9,C.ee8,C.eft,C.efs,C.eaX,C.ec7,C.e9H,C.cUf,C.ego,C.egp,C.egk,C.egl,C.egm,C.egn,C.egs,C.c7V,C.efY,C.eg8,C.cav])
u(B.i2,[C.cxA,C.cxB,C.f8t,C.bTf,C.bTi,C.fnf,C.ePb,C.eP2,C.ePi,C.eWi,C.eWj,C.faD,C.faB,C.fmO,C.f89,C.fnB,C.cyV,C.cz_,C.cz1,C.cyY,C.cz2,C.cyW,C.cz3,C.cyR,C.cyO,C.cyN,C.cyU,C.cym,C.cyk,C.feS,C.feT,C.f_p,C.ffN,C.ffT,C.eZt,C.c2L,C.feQ,C.feR,C.fa0,C.fa1,C.ffS,C.ffO,C.ffQ,C.ffR,C.ffP,C.fr1,C.fa4,C.fa5,C.fa8,C.fa9,C.fac,C.fad,C.fsg,C.eXI,C.fsI,C.eBc,C.eAC,C.eAm,C.eAz,C.ezF,C.ezG,C.ezH,C.ezL,C.ezM,C.eB1,C.eB8,C.eBa,C.eAL,C.eAN,C.eAR,C.eAS,C.eAT,C.eAX,C.eAO,C.eAP,C.ezX,C.ezY,C.ezZ,C.eA_,C.eA0,C.eA1,C.eA2,C.eA3,C.eA4,C.ezi,C.ezj,C.ezk,C.ezl,C.ezn,C.ezo,C.ezR,C.ezS,C.ezT,C.ezU,C.ezV,C.ezs,C.ezt,C.ezu,C.ezv,C.eAc,C.eAu,C.fcU,C.fcT,C.c7E,C.f2S,C.fky,C.fkr,C.fku,C.fir,C.fis,C.fit,C.fd0,C.fd_,C.fcZ,C.fcX,C.eXk,C.eXl,C.eXm,C.fsU,C.eH4,C.eH5,C.eGZ,C.eGT,C.eHo,C.eHp,C.eHr,C.eHs,C.eHn,C.fsT,C.eGK,C.f27,C.e0l,C.fkA,C.fkB,C.fkD,C.fkw,C.fkx,C.fs8,C.d9T,C.d9Z,C.e0k,C.eTU,C.eTW,C.eTV,C.eTT,C.fe4,C.fe6,C.eVS,C.fk2,C.fk3,C.fk4,C.fkf,C.fkk,C.fkl,C.fkm,C.fkn,C.fko,C.fkp,C.fkq,C.fk5,C.fk6,C.fk7,C.fk8,C.fk9,C.fka,C.fkb,C.fkc,C.fkd,C.fke,C.fkg,C.fkh,C.fki,C.fkj,C.fbX,C.f1V,C.f1U,C.fkJ,C.dK4,C.dK2,C.eFU,C.c2n,C.c2p,C.fqM,C.d_v,C.d_x,C.fqL,C.fqJ,C.fsS,C.fhq,C.d_5,C.fag,C.fah,C.c7C,C.c7D,C.c7B,C.c7r,C.c7s,C.c7o,C.c7p,C.c7q,C.c7T,C.c7O,C.c7J,C.c7K,C.c7M,C.c7P,C.c7R,C.fi2,C.c7w,C.c7z,C.c7A,C.c7G,C.c7H,C.fkQ,C.fjX,C.c7v,C.c7t,C.fhX,C.f4d,C.c7m,C.eDE,C.f6Y,C.efP,C.ece,C.ecf,C.edP,C.edD,C.edE,C.ebC,C.efA,C.efB,C.efC,C.eb0,C.edi,C.edk,C.ecV,C.ecS,C.eca,C.ecb,C.ed1,C.eb2,C.edd,C.ede,C.edc,C.edg,C.edf,C.edy,C.edz,C.edB,C.edu,C.ebl,C.ebi,C.edI,C.eba,C.efz,C.e9J,C.ebd,C.ebc,C.ear,C.eaw,C.eau,C.eas,C.efH,C.efI,C.efJ,C.efG,C.efd,C.efc,C.ef6,C.ef8,C.eeZ,C.efx,C.efv,C.e9R,C.e9N,C.ec8,C.eaA,C.ea1,C.ea0,C.ean,C.eao,C.ebA,C.eaC,C.eaG,C.edr,C.ef_,C.ef0,C.ef1,C.ef2,C.eb4,C.eb5,C.eb6,C.ecB,C.ebw,C.ebo,C.ebv,C.ecL,C.ecM,C.eey,C.eeA,C.eeU,C.eeW,C.eeB,C.eeC,C.eay,C.ecd,C.ecc,C.efn,C.eaW,C.eaO,C.eaP,C.eaS,C.eaT,C.ecQ,C.ebU,C.ebV,C.ebW,C.ebX,C.ebY,C.ebZ,C.ec_,C.ec0,C.ec1,C.ec2,C.ec3,C.edM,C.cUc,C.cUd,C.egu,C.fkG,C.fkP,C.fkF,C.fkL,C.eWh,C.fsW,C.fsX,C.fsY,C.efX,C.eg5,C.e9C,C.e9x,C.e9y,C.ff7,C.ff6,C.ff8,C.ffd,C.ff9,C.ffa,C.eQF,C.eQG,C.e0U,C.cau])
u(B.jj,[C.cxC,C.eP7,C.ePc,C.ePd,C.eP8,C.eP9,C.ePa,C.eP0,C.eP1,C.eP3,C.eP4,C.ePh,C.ePg,C.eP6,C.eP5,C.ePe,C.ePf,C.ePk,C.ePl,C.ePj,C.cyX,C.cz0,C.cyZ,C.cyP,C.cyQ,C.cyS,C.cyL,C.cyM,C.cyT,C.cyK,C.cyJ,C.cyI,C.cyb,C.cya,C.cyd,C.cyl,C.cye,C.cyc,C.cyg,C.cyh,C.cyi,C.cyf,C.cyj,C.cyn,C.cyo,C.cyp,C.cyq,C.f9Z,C.fa_,C.f9X,C.f9Y,C.dWW,C.dWU,C.dWV,C.dWX,C.dWY,C.dOi,C.fa2,C.fa3,C.fa6,C.fa7,C.faa,C.fab,C.e0V,C.fhx,C.fhw,C.eA5,C.eAs,C.ezP,C.ezQ,C.ezN,C.ezO,C.eAy,C.eAx,C.eAw,C.eAB,C.eAA,C.ezE,C.ezI,C.ezD,C.ezC,C.ezz,C.ezB,C.ezA,C.eB9,C.eB2,C.eB0,C.eB3,C.eB_,C.eB4,C.eAZ,C.eB5,C.eB6,C.eB7,C.eAY,C.eAK,C.eAF,C.eAQ,C.eAJ,C.eAU,C.eAI,C.eAV,C.eAH,C.eAW,C.eAG,C.eAp,C.eAo,C.eAq,C.eAn,C.eAr,C.eAi,C.eAh,C.eAj,C.eAg,C.eAf,C.eAe,C.ezm,C.ezh,C.ezw,C.ezr,C.ezx,C.ezq,C.ezy,C.ezp,C.eA9,C.eA8,C.eAa,C.eA7,C.eAb,C.eA6,C.eAt,C.eAE,C.eAD,C.ezW,C.fkt,C.fkv,C.fkz,C.fcY,C.ffq,C.ffo,C.ffp,C.eH6,C.eH7,C.eH3,C.eGY,C.eGX,C.eH_,C.eH0,C.eGN,C.eGO,C.eGQ,C.eGR,C.eGS,C.eGP,C.eGU,C.eHk,C.eHl,C.eHj,C.eHm,C.eHi,C.eHh,C.eHg,C.eHq,C.eHf,C.eHe,C.eHd,C.eHt,C.eHc,C.eHu,C.eHb,C.eHa,C.eGV,C.eGW,C.eH9,C.eH8,C.eGG,C.eGH,C.eGI,C.eGJ,C.eGF,C.eGL,C.eGM,C.d9S,C.d9U,C.d9X,C.d9Y,C.d9W,C.d9V,C.fe5,C.fbY,C.c2o,C.c2q,C.d_o,C.d_t,C.d_u,C.d_s,C.d_r,C.d_w,C.d_q,C.d_p,C.d_y,C.fqI,C.d5S,C.d5T,C.d5U,C.fae,C.faf,C.c7U,C.e9D,C.e9E,C.e9F,C.e9G,C.f4b,C.f4c,C.dIh,C.dIg,C.cXK,C.cXJ,C.efR,C.efQ,C.ecg,C.eeX,C.efN,C.edN,C.efD,C.efE,C.efO,C.ecW,C.eaZ,C.eb_,C.edj,C.ecU,C.ecR,C.ecT,C.ecX,C.ecY,C.ecZ,C.ed_,C.ed0,C.ed2,C.eb3,C.ed5,C.ed6,C.ed7,C.ed8,C.ed9,C.eda,C.ed4,C.edh,C.edv,C.edt,C.edC,C.ed3,C.ebj,C.ebk,C.ebm,C.edF,C.edJ,C.e9Y,C.ebh,C.ebf,C.edR,C.ebb,C.edQ,C.eb1,C.ebD,C.efy,C.eeY,C.e9Z,C.e9W,C.e9M,C.e9I,C.e9K,C.ebe,C.eaq,C.eav,C.eat,C.eap,C.eds,C.efK,C.ef9,C.ef4,C.ef5,C.ef7,C.ec6,C.ec5,C.efw,C.e9P,C.e9Q,C.e9S,C.e9T,C.e9X,C.e9O,C.edO,C.efF,C.ec9,C.eaz,C.e9L,C.ebB,C.e9U,C.ea2,C.ea3,C.ea4,C.eaf,C.eai,C.eaj,C.eak,C.eal,C.eam,C.ea5,C.ea6,C.ea7,C.ea8,C.ea9,C.eaa,C.eab,C.eac,C.ead,C.eae,C.eag,C.eah,C.ebz,C.eby,C.ebx,C.e9V,C.eaD,C.eaB,C.eaE,C.eaF,C.ebg,C.edn,C.edo,C.edl,C.edm,C.ef3,C.eb8,C.eb7,C.ecA,C.ecz,C.ecC,C.ecy,C.ecD,C.ecx,C.ecE,C.ecw,C.ecF,C.ecv,C.ecG,C.ecu,C.ecH,C.ect,C.ecI,C.ecs,C.ecl,C.ecm,C.ecn,C.eck,C.eco,C.ecj,C.ecp,C.eci,C.ecq,C.ech,C.ecr,C.ebt,C.ebu,C.ebn,C.ebp,C.ebq,C.ebr,C.ebs,C.efL,C.efM,C.ecK,C.ecJ,C.ecN,C.ee9,C.eea,C.eeb,C.eem,C.eex,C.eeI,C.eeP,C.eeQ,C.eeR,C.eeS,C.eeT,C.eec,C.eed,C.eee,C.eef,C.eeg,C.eeh,C.eei,C.eej,C.eek,C.eel,C.een,C.eeo,C.eep,C.eeq,C.eer,C.ees,C.eet,C.eeu,C.eev,C.ee_,C.eew,C.ee7,C.ee6,C.eez,C.ee5,C.edW,C.eeV,C.ee4,C.edV,C.edT,C.ee3,C.edU,C.edS,C.eeD,C.ee2,C.eeE,C.eeF,C.eeG,C.eeH,C.ee1,C.eeJ,C.eeK,C.eeL,C.ee0,C.eeM,C.edZ,C.eeN,C.edY,C.eeO,C.edX,C.eax,C.efg,C.eff,C.efh,C.efe,C.ebG,C.ebF,C.ebH,C.ebE,C.efr,C.efm,C.efq,C.efi,C.efj,C.efk,C.efl,C.efo,C.efp,C.efu,C.eaY,C.eaL,C.eaM,C.eaN,C.eaK,C.eaR,C.eaQ,C.eaJ,C.eaI,C.eaU,C.eaH,C.eaV,C.ecP,C.ecO,C.ebT,C.ebS,C.ebR,C.ebQ,C.ebP,C.ebO,C.ebN,C.ebM,C.ebJ,C.ebL,C.ebK,C.ebI,C.ec4,C.edK,C.edL,C.cUe,C.cUB,C.cUC,C.cU8,C.cU7,C.cUb,C.cU9,C.cUa,C.egr,C.egh,C.egq,C.egi,C.egj,C.egd,C.ege,C.egf,C.egg,C.egt,C.fkM,C.fkN,C.fkO,C.efU,C.efV,C.efW,C.efZ,C.eg_,C.eg2,C.eg3,C.eg1,C.eg4,C.eg0,C.efT,C.efS,C.eg6,C.eg7,C.eg9,C.ega,C.e9B,C.e9A,C.e9w,C.e9z,C.egc,C.egb,C.ffc,C.ffb,C.e0S,C.e0T])
t(C.aNC,B.E)
u(B.m7,[C.a1w,C.atT,C.asA,C.wx,C.wA,C.kA,C.qN,C.v2,C.aoD,C.GW,C.ao2,C.tT,C.m3,C.hm,C.a6c])
u(C.bIg,[C.cpI,C.bIh])
u(C.cao,[C.cas,C.apD])
t(C.car,C.cam)
t(C.caq,C.cal)
t(C.cat,C.caq)
t(C.cap,C.can)
t(C.caj,C.cak)
t(C.b60,B.oh)
t(C.cjH,B.as2)
t(C.a6_,B.wk)
t(C.aRT,B.dB)
t(C.axk,B.aqY)
u(B.ae,[C.Zx,C.Wl,C.Wj,C.ani,C.YC,C.Z5,C.Z4,C.aAy,C.Xv,C.Lt,C.X3,C.Xo,C.all,C.aFg,C.ST,C.awc,C.a5k,C.LV,C.avA,C.HW,C.Yf,C.TP,C.TQ,C.aAS,C.ao7,C.a5l])
u(B.ag,[C.aFz,C.auo,C.auk,C.aAm,C.aBZ,C.aDT,C.aDS,C.aIn,C.ay0,C.aHR,C.awr,C.bbM,C.aHD,C.aJE,C.aHQ,C.b9H,C.aIl,C.aIz,C.aGy,C.b8t,C.aIA,C.aAV,C.bg5,C.aAT,C.aAW,C.bfQ])
u(B.ar,[C.aum,C.aaG,C.aa5,C.beV,C.aaJ,C.acn,C.bo0,C.aY9,C.bho,C.bmC,C.aW3,C.aYc,C.aaM,C.ab4,C.aYa,C.GV,C.aW6,C.b8I,C.Nz,C.I2,C.bdj,C.bdi,C.bqm])
u(B.n1,[C.bbc,C.bdp,C.bai,C.bb9,C.baR,C.bjz,C.b5T,C.b5v,C.bqj,C.bno,C.bmy,C.bab,C.aY7,C.bly,C.bmv])
t(C.bfN,C.aIn)
t(C.bf9,C.aHR)
t(C.beX,C.aHD)
t(C.bpR,C.aJE)
u(B.Fv,[C.aFT,C.baP,C.bmZ])
t(C.bf6,C.aHQ)
t(C.bfL,C.aIl)
t(C.bsA,C.aIz)
t(C.aAU,C.bsA)
t(C.b8u,C.aGy)
t(C.aAX,C.aIA)
t(C.bqa,B.j_)
t(C.a6b,B.k8)
t(C.caw,C.aZT)
t(C.afm,C.a0A)
u(B.Vm,[C.aNs,C.aZu,C.aOW])
t(C.atv,C.aNs)
w(C.aIn,B.ca)
w(C.aHR,B.ca)
w(C.aHD,B.ca)
w(C.aHQ,B.ca)
w(C.aIl,B.ca)
w(C.aJE,B.ca)
w(C.aGy,B.eH)
w(C.aIz,B.ca)
v(C.bsA,B.eu)
w(C.aIA,B.ca)})()
B.ka(b.typeUniverse,JSON.parse('{"aOb":{"hu":["aOb"]},"nm":{"aOb":[],"hu":["aOb"]},"aNC":{"E":["PL"],"E.E":"PL"},"b60":{"oh":[]},"a6_":{"wk":[],"nI":[]},"aRT":{"dB":[],"cq":[],"r":[]},"axk":{"aP":[],"cY":["aP"],"aN":[],"cm":[]},"Zx":{"ae":[],"r":[]},"aFz":{"ag":["Zx"]},"Wl":{"ae":[],"r":[]},"Wj":{"ae":[],"r":[]},"auo":{"ag":["Wl"]},"auk":{"ag":["Wj"]},"aum":{"ar":[],"r":[]},"ani":{"ae":[],"r":[]},"aAm":{"ag":["ani"]},"aaG":{"ar":[],"r":[]},"aa5":{"ar":[],"r":[]},"aaJ":{"ar":[],"r":[]},"acn":{"ar":[],"r":[]},"beV":{"ar":[],"r":[]},"YC":{"ae":[],"r":[]},"aBZ":{"ag":["YC"]},"bbc":{"aA":[]},"Z5":{"ae":[],"r":[]},"Z4":{"ae":[],"r":[]},"aAy":{"ae":[],"r":[]},"Xv":{"ae":[],"r":[]},"aDT":{"ag":["Z5"]},"aDS":{"ag":["Z4"]},"bfN":{"ag":["aAy"]},"bdp":{"aA":[]},"ay0":{"ag":["Xv"]},"bo0":{"ar":[],"r":[]},"aY9":{"ar":[],"r":[]},"bho":{"ar":[],"r":[]},"Lt":{"ae":[],"r":[]},"X3":{"ae":[],"r":[]},"bf9":{"ag":["Lt"]},"bmC":{"ar":[],"r":[]},"bai":{"aA":[]},"aW3":{"ar":[],"r":[]},"awr":{"ag":["X3"]},"Xo":{"ae":[],"r":[]},"bbM":{"ag":["Xo"]},"bb9":{"aA":[]},"baR":{"aA":[]},"bjz":{"aA":[]},"b5T":{"aA":[]},"b5v":{"aA":[]},"bqj":{"aA":[]},"bno":{"aA":[]},"bmy":{"aA":[]},"bab":{"aA":[]},"all":{"ae":[],"r":[]},"aYc":{"ar":[],"r":[]},"beX":{"ag":["all"]},"aaM":{"ar":[],"r":[]},"ab4":{"ar":[],"r":[]},"aFg":{"ae":[],"r":[]},"ST":{"ae":[],"r":[]},"GV":{"ar":[],"r":[]},"awc":{"ae":[],"r":[]},"a5k":{"ae":[],"r":[]},"aYa":{"ar":[],"r":[]},"aY7":{"aA":[]},"bpR":{"ag":["aFg"]},"aFT":{"aA":[]},"bf6":{"ag":["ST"]},"b9H":{"ag":["awc"]},"bfL":{"ag":["a5k"]},"aW6":{"ar":[],"r":[]},"baP":{"aA":[]},"bly":{"aA":[]},"bmv":{"aA":[]},"avA":{"ae":[],"r":[]},"HW":{"ae":[],"r":[]},"Yf":{"ae":[],"r":[]},"I2":{"ar":[],"r":[]},"LV":{"ae":[],"r":[]},"aAU":{"ag":["LV"],"eu":[]},"b8u":{"ag":["avA"]},"b8I":{"ar":[],"r":[]},"b8t":{"ag":["HW"]},"Nz":{"ar":[],"r":[]},"aAX":{"ag":["Yf"]},"bmZ":{"aA":[]},"bdj":{"ar":[],"r":[]},"bdi":{"ar":[],"r":[]},"TP":{"ae":[],"r":[]},"TQ":{"ae":[],"r":[]},"aAS":{"ae":[],"r":[]},"ao7":{"ae":[],"r":[]},"aAV":{"ag":["TP"]},"bg5":{"ag":["TQ"]},"aAT":{"ag":["aAS"]},"bqa":{"j_":[]},"aAW":{"ag":["ao7"]},"bqm":{"ar":[],"r":[]},"a5l":{"ae":[],"r":[]},"bfQ":{"ag":["a5l"]},"a6b":{"k8":["fm<eC>"],"jW":["fm<eC>"]},"afm":{"a0A":[]},"aNs":{"iZ":[],"f6":[]},"atv":{"iZ":[],"f6":[]},"aZu":{"iZ":[],"f6":[]},"aOW":{"iZ":[],"f6":[]}}'))
var y={f:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",q:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",v:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",t:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",x:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",p:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",D:"Nguo ya kente yenye dirisha la karatasi katikati.",d:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",k:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'}
var x=(function rtii(){var w=B.az
return{bu:w("JM"),U:w("ux<pt>"),bz:w("x"),M:w("fd<n>"),bo:w("jm"),gc:w("av<ik?>"),bq:w("av<~>"),cc:w("a2z"),fS:w("Cq"),an:w("aiX"),bm:w("M<PL>"),X:w("M<afC>"),f3:w("M<aOb>"),aK:w("M<mC>"),V:w("M<a9>"),O:w("M<x>"),fA:w("M<lb>"),d5:w("M<av<bq<G,+icon3d,picture(n?,n?)>>>"),aF:w("M<mJ>"),cd:w("M<al<j8>>"),ez:w("M<a0<n,aC>>"),d:w("M<a0<n,@>>"),A:w("M<m_>"),h:w("M<j8>"),k:w("M<nO>"),g:w("M<lj>"),D:w("M<hP>"),u:w("M<ev>"),B:w("M<tT>"),i:w("M<hm>"),aC:w("M<a5B>"),m:w("M<ym>"),e3:w("M<aC>"),o:w("M<v>"),v:w("M<hw>"),cR:w("M<iC>"),J:w("M<iX>"),gx:w("M<oA<n>>"),f2:w("M<+(a_,n)>"),Q:w("M<+(n,n)>"),aD:w("M<+data,mimeType(n,n)>"),Y:w("M<+(P,P)>"),n:w("M<+(G,G)>"),S:w("M<cI>"),s:w("M<n>"),aS:w("M<j_>"),p:w("M<r>"),eR:w("M<f6>"),fT:w("M<b4v>"),bx:w("M<aBu>"),gz:w("M<acx>"),x:w("M<P>"),t:w("M<G>"),dS:w("M<aA?>"),bA:w("M<v?>"),Z:w("M<G?>"),cA:w("M<cd>"),eF:w("cn<ag<ae>>"),gL:w("al<nO>"),R:w("al<hP>"),j:w("al<@>"),bW:w("al<G>"),e:w("bq<G,+icon3d,picture(n?,n?)>"),P:w("a0<n,@>"),f:w("a0<@,@>"),gI:w("a0<G,+icon3d,picture(n?,n?)>"),bR:w("I<hm,r>"),eC:w("I<ne,n>"),cT:w("I<jr,B>"),dv:w("I<n,n>"),f0:w("I<n,r>"),gN:w("I<G,p7>"),gh:w("I<m3,ja<m3>>"),w:w("iA"),ei:w("ik"),g2:w("qE"),fB:w("D0"),ea:w("nO"),bt:w("lj"),I:w("hP"),E:w("ev"),fO:w("m3"),ff:w("tT"),fP:w("hm"),K:w("v2"),dO:w("ao3"),a:w("cu"),C:w("aC"),dw:w("apE"),di:w("a6c"),F:w("eC"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Dv"),dB:w("dt<v>"),bJ:w("dt<n>"),_:w("dV<n>"),N:w("n"),fw:w("pt"),bO:w("ao"),L:w("bm<v>"),b:w("bm<P>"),G:w("dQ"),W:w("cv<n>"),ac:w("cv<G>"),ex:w("jZ<lj>"),cI:w("jZ<n>"),cl:w("jZ<P>"),b4:w("a3<kU>"),a8:w("a3<lG>"),fR:w("a3<+(n,n)>"),co:w("e2<v>"),l:w("r"),b2:w("bL<~>"),ev:w("pu<dO>"),dT:w("bc<~>"),cQ:w("axk"),q:w("mu"),y:w("R"),gR:w("P"),z:w("@"),r:w("G"),at:w("b6?"),gw:w("al<a0<n,@>>?"),aT:w("al<hP>?"),c:w("al<@>?"),aP:w("ik?"),af:w("hP?"),go:w("aYe?"),a6:w("a5C?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dQ,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dQ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bBu=new B.ac(A.ei,18,A.c,null,null,null)
D.aN6=new B.bE(A.ax,null,null,D.bBu,null)
D.aNf=new B.PG(1,-1)
D.aNg=new B.d4(0,-0.15)
D.aNi=new B.d4(0.62,0)
D.aNl=new B.d4(-0.35,-0.45)
D.aNw=new B.d4(0.9,-0.85)
D.aFt=new B.b2(30,30)
D.aON=new B.bx(D.aFt,D.aFt,A.h_,A.h_)
D.aP0=new B.ay(A.b0,1,A.r,-1)
D.b5E=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPc=new B.ay(D.b5E,1,A.r,-1)
D.aPo=new B.ay(A.az,1.5,A.r,-1)
D.aPt=new B.ay(A.b0,1.6,A.r,-1)
D.aPJ=new B.ay(A.az,1.4,A.r,-1)
D.aR2=new B.o(null,null,null,null,null,K.EH,A.a6)
D.bFl=new B.a7(A.a1,A.a7,A.w,G.a_b,null,null)
D.aRa=new B.o(null,null,null,null,null,D.bFl,A.a6)
D.a6K=new B.o(A.aG,null,null,A.pI,null,null,A.n)
D.b0z=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b5C=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cBg=w([D.b0z,D.b5C],x.O)
D.dQA=new B.bT(A.C,0.5,A.w,null,0,D.cBg,null,null)
D.aRs=new B.o(null,null,null,null,null,D.dQA,A.a6)
D.a9u=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aPW=new B.c2(S.HU,A.V,A.V,A.V)
D.aRu=new B.o(D.a9u,null,D.aPW,null,null,null,A.n)
D.bGY=new B.a7(A.a1,A.a7,A.w,A.Nm,null,null)
D.aRA=new B.o(null,null,null,null,null,D.bGY,A.a6)
D.a82=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aRC=new B.o(D.a82,null,null,A.qV,null,null,A.n)
D.aRG=new B.o(A.km,null,null,null,null,null,A.a6)
D.aQ1=new B.c2(A.yC,A.V,A.V,A.V)
D.aRJ=new B.o(X.a8X,null,D.aQ1,A.mX,null,null,A.n)
D.Cc=new B.o(A.e9,null,null,null,null,null,A.a6)
D.aRP=new B.o(null,null,null,null,null,E.uD,A.a6)
D.cFF=w([E.a9E,A.bV],x.O)
D.bGB=new B.a7(A.b4,A.bc,A.w,D.cFF,null,null)
D.aRT=new B.o(null,null,null,A.mX,null,D.bGB,A.n)
D.cPo=w([A.bf,A.e9,A.j6],x.O)
D.Yo=new B.a7(A.ax,A.aE,A.w,D.cPo,null,null)
D.aS4=new B.o(null,null,null,null,null,D.Yo,A.n)
D.aS5=new B.o(D.a82,null,null,A.kf,null,null,A.n)
D.c6R=w([A.dG,A.bf],x.O)
D.bGu=new B.a7(A.ax,A.aE,A.w,D.c6R,null,null)
D.aS9=new B.o(null,null,null,null,null,D.bGu,A.n)
D.aSj=new B.o(null,null,null,null,null,G.xi,A.a6)
D.aSB=new B.o(A.a9F,null,null,null,null,null,A.a6)
D.b1c=new B.x(0.5647058823529412,0,0,0,A.t)
D.a6T=new B.a9(0,A.G,D.b1c,A.P5,28)
D.aUy=new B.aS5()
D.aV6=new C.cjH()
D.aVi=new C.b60()
D.a7o=new B.cw(A.C,null,null,A.Yd,null)
D.aXF=new B.f7(null,null,null,null,null,E.mn,null,null,null,null)
D.aVP=new B.cw(A.C,null,null,D.aXF,null)
D.brt=new B.ac(A.dP,28,A.c,null,null,null)
D.aWe=new B.cw(A.C,null,null,D.brt,null)
D.aXC=new B.f7(2,null,null,null,null,A.bQ,null,null,null,null)
D.aWy=new B.cw(A.C,null,null,D.aXC,null)
D.brO=new B.ac(K.L0,40,A.bR,null,null,null)
D.aWz=new B.cw(A.C,null,null,D.brO,null)
D.aYp=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aYA=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aYW=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZ_=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.aZr=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.aZH=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.aZI=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Ij=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_3=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_8=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8g=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b0p=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8s=new B.x(1,1,1,0.9725490196078431,A.t)
D.b0F=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b0O=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b0Q=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b0Z=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1h=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.Ti=new B.x(0.8509803921568627,0,0,0,A.t)
D.b2A=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b2G=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9b=new B.x(0.6,0,0,0,A.t)
D.a9e=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b3W=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.Tw=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b4h=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b4E=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b4X=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a9P=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TC=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.z5=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.II=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iP=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aac=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.TH=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b7D=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b7Z=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b8c=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.TW=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.b98=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.vZ=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.b9r=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.b9I=new B.ht(A.be,!0,null,null)
D.ex0=new B.F(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUM=new B.w("Bio link",null,D.ex0,null,null,null,null,null,null,null,null,null)
D.aWt=new B.cw(A.C,null,null,D.eUM,null)
D.b9Y=new B.ht(A.SQ,!0,D.aWt,null)
D.J_=new C.a1w(0,"none")
D.aba=new C.a1w(1,"deflate")
D.abb=new C.a1w(2,"bzip2")
D.baF=new B.k2(0.165,0.84,0.44,1)
D.cFY=w([A.ck,A.dM,A.az],x.O)
D.bFM=new B.a7(A.ax,A.aE,A.w,D.cFY,null,null)
D.aR7=new B.o(null,null,null,null,null,D.bFM,A.n)
D.bAl=new B.ac(A.eD,null,A.ak,null,null,null)
D.aX2=new B.cw(A.C,null,null,D.bAl,null)
D.bbc=new B.kx(D.aR7,A.ba,D.aX2,null)
D.b7P=new B.x(0.058823529411764705,1,1,1,A.t)
D.cIU=w([A.bG,A.pU,A.pU,D.b7P],x.O)
D.cnL=w([0,0.32,0.7,1],x.x)
D.bGj=new B.a7(A.ax,A.aE,A.w,D.cIU,D.cnL,null)
D.aQW=new B.o(null,null,null,null,null,D.bGj,A.n)
D.bbi=new B.kx(D.aQW,A.ba,null,null)
D.bby=new B.lT(1,1,null,null,null,A.bh,null)
D.bbB=new B.lT(1,null,null,null,null,D.TH,null)
D.bc4=new B.b6(125e4)
D.bca=new B.b6(17e4)
D.bck=new B.b6(35964e8)
D.bcq=new B.b6(55e4)
D.bcu=new B.b6(68e4)
D.bcV=new B.ie(0,0,0,5)
D.bdb=new B.L(0,16,16,0)
D.bde=new B.L(0,18,0,8)
D.bdk=new B.L(0,36,0,36)
D.bdr=new B.L(0,54,0,0)
D.bdH=new B.ie(10,16,10,10)
D.bdQ=new B.L(10,6,10,0)
D.bdS=new B.L(10,6,4,6)
D.bdV=new B.L(10,8,10,6)
D.ac3=new B.L(11,8,11,11)
D.be0=new B.L(12,0,12,10)
D.be1=new B.L(12,0,12,24)
D.bed=new B.L(12,12,12,4)
D.beg=new B.L(12,12,8,12)
D.beu=new B.L(12,8,8,12)
D.beV=new B.L(14,14,14,90)
D.bfd=new B.L(16,10,16,20)
D.acQ=new B.L(16,6,16,28)
D.bfN=new B.L(18,0,18,10)
D.bfP=new B.L(18,0,18,30)
D.bfR=new B.L(18,10,18,12)
D.bg7=new B.L(18,16,14,18)
D.bgc=new B.L(18,18,18,12)
D.bgi=new B.L(18,26,18,12)
D.bgn=new B.L(18,34,18,34)
D.bgo=new B.L(18,4,18,14)
D.bgu=new B.L(18,8,18,24)
D.bgL=new B.L(20,16,14,4)
D.bgQ=new B.L(20,18,12,4)
D.bgV=new B.L(20,20,12,20)
D.bgY=new B.L(20,22,20,20)
D.bh2=new B.L(20,6,20,6)
D.bhh=new B.L(22,24,22,0)
D.bhl=new B.L(22,24,22,4)
D.bhy=new B.L(24,24,24,22)
D.bhN=new B.L(28,44,28,44)
D.bi3=new B.L(32,44,32,44)
D.bif=new B.L(4,0,0,6)
D.bir=new B.ie(4,4,4,4)
D.biP=new B.ie(6,5,6,5)
D.biT=new B.L(6,6,8,6)
D.bj3=new B.L(8,14,8,14)
D.bji=new B.L(8,8,8,4)
D.adG=new B.L(9,9,9,6)
D.bjs=new B.ie(2.5,2.5,2.5,2.5)
D.bjt=new B.L(7,1.5,7,1.5)
D.aJN=new B.F(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUa=new B.w("WORD DESIGN",null,D.aJN,null,null,null,null,null,null,null,null,null)
D.bk6=new B.bI(1,A.bt,D.eUa,null)
D.eTQ=new B.w("Slides database",null,A5.GM,null,null,null,null,null,null,null,null,null)
D.eRj=new B.w("Admin only \xb7 keep as many as you like",null,U.aJl,null,null,null,null,null,null,null,null,null)
D.cWm=w([D.eTQ,A.bw,D.eRj],x.p)
D.ban=new B.fs(A.af,A.e,A.j,A.F,null,A.p,null,0,D.cWm,null)
D.bk9=new B.bI(1,A.bt,D.ban,null)
D.eMl=new B.w("NGMY logo",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bkc=new B.bI(1,A.bt,D.eMl,null)
D.eGC=new B.w("Tell the AI what to change",null,A5.GM,null,null,null,null,null,null,null,null,null)
D.bkJ=new B.bI(1,A.bt,D.eGC,null)
D.blf=new B.Ci(!0,"video/mp4")
D.eti=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEZ=new B.w("Move presentations between devices",null,D.eti,null,null,null,!1,null,null,1,null,null)
D.blj=new B.pK(A.e8,A.a1,A.i,D.eEZ,null)
D.eFZ=new B.w("Edit in Slides",null,A.jM,null,null,null,null,null,null,null,null,null)
D.blk=new B.pK(A.e8,A.C,A.i,D.eFZ,null)
D.blz=new B.dp(1,A.cj,D.blk,null)
D.WE=new B.a_(60988,"MaterialIcons",!1)
D.bmY=new B.a_(61352,"MaterialIcons",!1)
D.af8=new B.a_(61531,"MaterialIcons",!1)
D.bob=new B.a_(63062,"MaterialIcons",!1)
D.boi=new B.a_(63109,"MaterialIcons",!1)
D.bot=new B.a_(63206,"MaterialIcons",!1)
D.afP=new B.a_(63238,"MaterialIcons",!1)
D.Xd=new B.a_(63365,"MaterialIcons",!1)
D.Xe=new B.a_(63367,"MaterialIcons",!1)
D.Xf=new B.a_(63368,"MaterialIcons",!1)
D.afZ=new B.a_(63384,"MaterialIcons",!1)
D.bp5=new B.a_(63525,"MaterialIcons",!1)
D.bp8=new B.a_(63568,"MaterialIcons",!1)
D.bps=new B.a_(983072,"MaterialIcons",!1)
D.bpQ=new B.a_(983271,"MaterialIcons",!0)
D.bqH=new B.a_(983924,"MaterialIcons",!1)
D.ah7=new B.a_(983965,"MaterialIcons",!1)
D.ah8=new B.a_(983966,"MaterialIcons",!1)
D.bqR=new B.a_(984592,"MaterialIcons",!1)
D.br6=new B.ac(A.rJ,16,A.aA,null,null,null)
D.brd=new B.ac(A.lV,null,A.c,null,null,null)
D.ahi=new B.ac(A.p4,18,A.c,null,null,null)
D.bru=new B.ac(A.zP,18,N.kM,null,null,null)
D.bs9=new B.ac(A.iV,11,null,null,null,null)
D.bsj=new B.ac(A.WX,null,A.eY,null,null,null)
D.bsS=new B.ac(A.qd,18,A.aA,null,null,null)
D.bsX=new B.ac(A_.A0,14,null,null,null,null)
D.bsY=new B.ac(A.e4,28,A.cJ,null,null,null)
D.btb=new B.ac(A.p5,20,A.c,null,null,null)
D.bti=new B.ac(A.wV,null,null,null,null,null)
D.bto=new B.ac(A.jD,18,A.hS,null,null,null)
D.btt=new B.ac(A.kT,null,null,null,null,null)
D.btW=new B.ac(A.Xw,28,A.c,null,null,null)
D.boe=new B.a_(63065,"MaterialIcons",!1)
D.bu4=new B.ac(D.boe,15,A.c,null,null,null)
D.buv=new B.ac(A.wE,22,A.bJ,null,null,null)
D.buP=new B.ac(A.wF,18,null,null,null,null)
D.buU=new B.ac(A.Eg,12,A.c,null,null,null)
D.bqt=new B.a_(983687,"MaterialIcons",!1)
D.bv4=new B.ac(D.bqt,null,A.bf,null,null,null)
D.bvb=new B.ac(A.hr,null,A.bf,null,null,null)
D.bvu=new B.ac(A.p9,22,A.c,null,null,null)
D.bvy=new B.ac(A.cu,13,A.c,null,null,null)
D.bvE=new B.ac(A.e4,26,A.aH,null,null,null)
D.bvH=new B.ac(A.qg,26,A.c,null,null,null)
D.Ld=new B.ac(A.iV,8,A.c,null,null,null)
D.bvZ=new B.ac(A.p4,40,A.c,null,null,null)
D.bw_=new B.ac(A.blV,null,null,null,null,null)
D.bw3=new B.ac(A.rR,20,null,null,null,null)
D.bqs=new B.a_(983683,"MaterialIcons",!1)
D.bwd=new B.ac(D.bqs,null,A.aW,null,null,null)
D.bwe=new B.ac(A.iV,16,A.bf,null,null,null)
D.ahP=new B.ac(A.um,22,A.c,null,null,null)
D.bwC=new B.ac(A.dP,17,A.c,null,null,null)
D.ahQ=new B.ac(A.iV,9,A.c,null,null,null)
D.bwH=new B.ac(A.uh,null,null,null,null,null)
D.bmb=new B.a_(57744,"MaterialIcons",!1)
D.bwO=new B.ac(D.bmb,null,null,null,null,null)
D.bwR=new B.ac(A.uh,16,null,null,null,null)
D.bqY=new B.a_(985181,"MaterialIcons",!1)
D.Ez=new B.ac(D.bqY,null,null,null,null,null)
D.bx2=new B.ac(A.kT,16,A.bJ,null,null,null)
D.bqj=new B.a_(983615,"MaterialIcons",!1)
D.bx4=new B.ac(D.bqj,12,A.c,null,null,null)
D.ahW=new B.ac(A.wB,16,null,null,null,null)
D.bxf=new B.ac(A.hr,17,A.c,null,null,null)
D.bxH=new B.ac(A.p3,22,E.mn,null,null,null)
D.bxP=new B.ac(A.p2,13,A.ak,null,null,null)
D.blT=new B.a_(57495,"MaterialIcons",!1)
D.bxV=new B.ac(D.blT,null,null,null,null,null)
D.bxZ=new B.ac(A.nm,18,A.c,null,null,null)
D.byi=new B.ac(A.rV,28,A.c,null,null,null)
D.byq=new B.ac(D.afP,null,A.az,null,null,null)
D.byr=new B.ac(A.p5,22,A.c,null,null,null)
D.ai6=new B.ac(A.WA,16,null,null,null,null)
D.bza=new B.ac(A.wE,32,A.c,null,null,null)
D.bzT=new B.ac(A.iD,22,A.c,null,null,null)
D.bzX=new B.ac(A.qg,22,A.ak,null,null,null)
D.ail=new B.ac(A.rJ,null,A.c1,null,null,null)
D.bAR=new B.ac(A.ul,18,null,null,null,null)
D.bBo=new B.ac(A.dP,18,A.cX,null,null,null)
D.Yg=new B.ac(A.cu,18,A.aA,null,null,null)
D.bBv=new B.ac(A.agM,null,null,null,null,null)
D.bBV=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aJD,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.elZ=new B.F(!0,A.bO,null,null,null,null,null,A.cn,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bCd=new B.dZ(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.elZ,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.bCE=new B.dZ(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.er,!0,null,null,null,null)
D.cC7=w([A.e9,A.az],x.O)
D.bDM=new B.a7(A.a1,A.a7,A.w,D.cC7,null,null)
D.bDW=new B.a7(A.b4,A.bc,A.R6,A.apf,null,null)
D.aYM=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b1j=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b3X=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b_E=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cnO=w([D.aYM,D.b1j,D.b3X,D.b_E],x.O)
D.bEd=new B.a7(A.ax,A.aE,A.w,D.cnO,A.F5,null)
D.cWt=w([A.dg,A.bB,A.b0],x.O)
D.bEf=new B.a7(A.b4,A.bc,A.R6,D.cWt,null,null)
D.cXz=w([A.bf,A.cf],x.O)
D.bEj=new B.a7(A.a1,A.a7,A.w,D.cXz,null,null)
D.cTf=w([A.hQ,A.dB,A.aZ],x.O)
D.bEl=new B.a7(A.ax,A.aE,A.w,D.cTf,null,null)
D.cHv=w([A.cU,A.eS],x.O)
D.bEo=new B.a7(A.a1,A.a7,A.w,D.cHv,null,null)
D.cWo=w([N.kM,A.dB],x.O)
D.aj5=new B.a7(A.a1,A.a7,A.w,D.cWo,null,null)
D.b1P=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cWl=w([D.b1P,D.vZ,A.bQ],x.O)
D.bEt=new B.a7(A.a1,A.a7,A.w,D.cWl,null,null)
D.cDD=w([A.bq,A.dn,A.fn],x.O)
D.bEu=new B.a7(A.ax,A.aE,A.w,D.cDD,null,null)
D.Ls=new B.a7(A.a1,A.a7,A.w,A.Fh,null,null)
D.b8v=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cgZ=w([D.b8v,A.bQ,A.iR],x.O)
D.aja=new B.a7(A.ax,A.aE,A.w,D.cgZ,null,null)
D.cMj=w([A.vQ,A.as,D.z5],x.O)
D.bFm=new B.a7(A.a1,A.a7,A.w,D.cMj,null,null)
D.b9s=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b0o=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b4N=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cCQ=w([D.b9s,D.b0o,D.b4N],x.O)
D.ajb=new B.a7(A.a1,A.a7,A.w,D.cCQ,null,null)
D.b1Q=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bHd=w([Al.aaV,D.b1Q],x.O)
D.bFv=new B.a7(A.b4,A.bc,A.w,D.bHd,null,null)
D.cB4=w([A.mm,A.bR],x.O)
D.bFy=new B.a7(A.b4,A.bc,A.w,D.cB4,null,null)
D.cQL=w([A.az,A.dM],x.O)
D.bFE=new B.a7(A.a1,A.a7,A.w,D.cQL,null,null)
D.a9Z=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.aqV=w([D.a9Z,D.iP,D.Ij],x.O)
D.bG4=new B.a7(A.ax,A.aE,A.w,D.aqV,null,null)
D.cgR=w([A.dm,A.dO],x.O)
D.bGf=new B.a7(A.b4,A.bc,A.w,D.cgR,null,null)
D.cOb=w([A.r4,A.z0],x.O)
D.bGZ=new B.a7(A.a1,A.a7,A.w,D.cOb,null,null)
D.eNN=new B.w("Which Bio link?",null,A.cr,null,null,null,null,null,null,null,null,null)
D.bH9=new B.pe(null,D.eNN,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xj=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a0W=new C.kA(2,"elegantNavy")
D.f8H=w([A.TA,D.iP,A.bQ],x.O)
D.ji=new C.wx(0,"classic")
D.a0J=new C.j8("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.x,D.a0W,4294967035,4279378237,4290283019,D.ji)
D.azy=new C.kA(3,"elegantGold")
D.aYo=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZb=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a8N=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.f8b=w([D.aYo,D.aZb,D.a8N],x.O)
D.a0H=new C.j8("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.p,D.azy,4294966515,4281016592,4289102906,D.ji)
D.dha=new C.kA(22,"goldRibbon")
D.f87=w([A.TA,D.iP,A.hC],x.O)
D.a0A=new C.j8("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dha,4294967035,4279378237,4291404327,D.ji)
D.dhb=new C.kA(23,"goldBaroque")
D.a9j=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.f8d=w([D.a9j,A.as,A.iR],x.O)
D.a0B=new C.j8("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dhb,4294964964,4283053072,4292128567,D.ji)
D.dhd=new C.kA(4,"elegantEmerald")
D.b_e=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0_=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.f8j=w([D.b_e,D.b0_,A.hC],x.O)
D.a0C=new C.j8("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dhd,4294376440,4279122734,4291404327,D.ji)
D.dhe=new C.kA(5,"elegantBurgundy")
D.b34=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.f8q=w([D.b34,A.a8a,A.hC],x.O)
D.a0F=new C.j8("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dhe,4294965238,4283043359,4291404327,D.ji)
D.dh7=new C.kA(19,"goldFiligree")
D.IO=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.f8e=w([D.IO,A.as,A.iR],x.O)
D.a0D=new C.j8("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dh7,4294966259,4279378237,4292128567,D.ji)
D.dh8=new C.kA(20,"goldLaurel")
D.b8m=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.f8r=w([A.Id,A.hC,D.b8m],x.O)
D.a0E=new C.j8("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dh8,4294966776,4282000405,4291404327,D.ji)
D.dh9=new C.kA(21,"goldCrest")
D.a84=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b8s=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.f8g=w([D.a84,A.as,D.b8s],x.O)
D.a0I=new C.j8("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dh9,4294965484,4283053072,4292128567,D.ji)
D.dhc=new C.kA(24,"goldStar")
D.b9o=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.f8k=w([D.b9o,A.as,D.iP],x.O)
D.a0G=new C.j8("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dhc,4294966518,4279378237,4292128567,D.ji)
D.EJ=w([D.a0J,D.a0H,D.a0A,D.a0B,D.a0C,D.a0F,D.a0D,D.a0E,D.a0I,D.a0G],x.h)
D.pi=new C.m3(0,"blank")
D.OV=new C.m3(1,"title")
D.m2=new C.m3(2,"titleContent")
D.dBs=new C.m3(3,"twoColumn")
D.AW=new C.m3(4,"section")
D.dBt=new C.m3(5,"comparison")
D.FR=new C.m3(6,"flashcard")
D.FS=new C.m3(7,"quiz")
D.FT=new C.m3(8,"worksheet")
D.ajv=w([D.pi,D.OV,D.m2,D.dBs,D.AW,D.dBt,D.FR,D.FS,D.FT],B.az("M<m3>"))
D.bHp=w([0,0,0],x.cA)
D.arN=w([E.a8z,A.dO],x.O)
D.k0=w([A.bQ,A.bJ,A.hB,A.hm,D.z5],x.O)
D.dd3=new C.iK("fireworks","Royal Fireworks","Thank you for celebrating with us",D.arN,D.k0)
D.b8D=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b32=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cBh=w([D.b8D,D.b32],x.O)
D.dcV=new C.iK("confetti","Golden Confetti","Together we rise",D.cBh,D.k0)
D.cyH=w([A.n0,A.ST],x.O)
D.dcW=new C.iK("crown","Crown of Glory","Built for our community",D.cyH,D.k0)
D.b0e=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b2I=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cEQ=w([D.b0e,D.b2I],x.O)
D.rY=w([A.bO,A.aN,A.c,A.aJ,A.ai],x.O)
D.dcQ=new C.iK("aurora","Aurora Gala","A brighter future, together",D.cEQ,D.rY)
D.aYQ=new B.x(1,0.16470588235294117,0.10196078431372549,0.0196078431372549,A.t)
D.b3Z=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cOh=w([D.aYQ,D.b3Z],x.O)
D.dd6=new C.iK("champagne","Champagne Toast","Cheers to every member",D.cOh,D.k0)
D.dd7=new C.iK("diamonds","Diamond Rain","Every member is a jewel",V.asf,D.rY)
D.aZ3=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b2g=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cSA=w([D.aZ3,D.b2g],x.O)
D.dcL=new C.iK("starburst","Golden Starburst","Thank you!",D.cSA,D.k0)
D.bHi=w([A.fo,A.tW],x.O)
D.a7W=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.N_=w([A.nR,A.i3,A.u_,A.oE,D.a7W],x.O)
D.dde=new C.iK("balloons","Luxury Balloons","Let's celebrate",D.bHi,D.N_)
D.cy2=w([A.T0,A.x],x.O)
D.dd2=new C.iK("galaxy","Galaxy Spiral","The sky is not the limit",D.cy2,D.rY)
D.b76=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cL9=w([A.kN,D.b76],x.O)
D.dcY=new C.iK("redcarpet","Red Carpet","Tonight we shine",D.cL9,D.k0)
D.b5i=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b3O=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cP6=w([D.b5i,D.b3O],x.O)
D.dcN=new C.iK("coins","Gold Coin Rain","Every contribution counts",D.cP6,D.k0)
D.cV0=w([A.dm,A.i2],x.O)
D.dcT=new C.iK("lanterns","Sky Lanterns","Lighting the way together",D.cV0,D.k0)
D.b12=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cwd=w([A.vV,D.b12],x.O)
D.dcP=new C.iK("hearts","Floating Hearts","Made with love",D.cwd,D.N_)
D.aZA=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b_k=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cWj=w([D.aZA,D.b_k],x.O)
D.ddd=new C.iK("petals","Rose Petals","Thank you, from our hearts",D.cWj,D.N_)
D.b7N=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cSU=w([A.kl,D.b7N],x.O)
D.dcK=new C.iK("butterflies","Golden Butterflies","New beginnings",D.cSU,D.k0)
D.b4L=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cx3=w([D.b4L,A.x],x.O)
D.dd5=new C.iK("neon","Neon Night","Let's go!",D.cx3,D.rY)
D.b20=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cQT=w([A.Ix,D.b20],x.O)
D.dd8=new C.iK("disco","Disco Ball","Party time",D.cQT,D.rY)
D.b5a=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cQu=w([A.hQ,D.b5a],x.O)
D.dcO=new C.iK("sunrise","Golden Sunrise","A new day for our community",D.cQu,D.k0)
D.cQ6=w([A.rc,A.dO],x.O)
D.dd9=new C.iK("pearls","Ocean Pearls","Deep roots, bright future",D.cQ6,D.rY)
D.b0k=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cQj=w([D.b0k,A.dO],x.O)
D.ddc=new C.iK("snow","Winter Gala","Warm wishes to all",D.cQj,D.rY)
D.aYx=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.aZm=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cVm=w([D.aYx,D.aZm],x.O)
D.dd1=new C.iK("laurel","Laurel Victory","We did it together",D.cVm,D.k0)
D.aYn=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b2E=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cvp=w([D.aYn,D.b2E],x.O)
D.ddb=new C.iK("ribbons","Silk Ribbons","Elegance in every step",D.cvp,D.k0)
D.b3A=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cgO=w([G.z4,D.b3A],x.O)
D.dcZ=new C.iK("kente","Kente Pride","Proud of our roots",D.cgO,D.k0)
D.b5M=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b83=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cGh=w([D.b5M,D.b83],x.O)
D.dcU=new C.iK("trophy","Trophy Shine","Winners together",D.cGh,D.k0)
D.cQr=w([A.Cy,A.x],x.O)
D.dcM=new C.iK("shooting","Shooting Stars","Make a wish",D.cQr,D.rY)
D.aYD=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aaL=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cVB=w([D.aYD,D.aaL],x.O)
D.dd_=new C.iK("bokeh","Golden Bokeh","Shine bright",D.cVB,D.k0)
D.aYX=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cLW=w([D.aYX,A.x],x.O)
D.dcS=new C.iK("orbits","Golden Orbits","Always moving forward",D.cLW,D.k0)
D.b7O=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cIO=w([A.a8L,D.b7O],x.O)
D.dcX=new C.iK("flowers","Blooming Garden","Growing together",D.cIO,D.N_)
D.aYK=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZg=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cUy=w([D.aYK,D.aZg],x.O)
D.dcR=new C.iK("music","Music Party","Celebrate with us",D.cUy,D.rY)
D.b_4=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b8o=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cwo=w([D.b_4,D.b8o],x.O)
D.dda=new C.iK("mandala","Royal Mandala","Harmony and unity",D.cwo,D.k0)
D.cIS=w([G.z4,D.aaL],x.O)
D.dd4=new C.iK("sparklers","Golden Sparklers","Light up the night",D.cIS,D.k0)
D.dd0=new C.iK("city","City Lights","The whole city celebrates",D.arN,D.k0)
D.ES=w([D.dd3,D.dcV,D.dcW,D.dcQ,D.dd6,D.dd7,D.dcL,D.dde,D.dd2,D.dcY,D.dcN,D.dcT,D.dcP,D.ddd,D.dcK,D.dd5,D.dd8,D.dcO,D.dd9,D.ddc,D.dd1,D.ddb,D.dcZ,D.dcU,D.dcM,D.dd_,D.dcS,D.dcX,D.dcR,D.dda,D.dd4,D.dd0],B.az("M<iK>"))
D.dTO=new B.V("","No ring")
D.e0m=new B.V("platinum","Platinum")
D.dZM=new B.V("glow","Glow")
D.dVq=new B.V("double","Double line")
D.dUQ=new B.V("framed","Gallery frame")
D.dTE=new B.V("rosegold","Rose gold")
D.e_a=new B.V("jewels","Jeweled")
D.dYh=new B.V("aurora","Aurora")
D.Aj=w([D.dTO,A.a2d,D.e0m,D.dZM,H.aFH,D.dVq,A.a2f,D.dUQ,D.dTE,D.e_a,D.dYh],x.Q)
D.c0y=w([D.a0D,D.a0E,D.a0I,D.a0A,D.a0B,D.a0G],x.h)
D.bxm=new B.ac(G.aeJ,16,null,null,null,null)
D.aTU=new B.ux(A.bn,D.bxm,null,x.U)
D.bmk=new B.a_(58027,"MaterialIcons",!1)
D.brc=new B.ac(D.bmk,16,null,null,null,null)
D.aTS=new B.ux(A.L,D.brc,null,x.U)
D.bml=new B.a_(58030,"MaterialIcons",!1)
D.bva=new B.ac(D.bml,16,null,null,null,null)
D.aTV=new B.ux(A.dN,D.bva,null,x.U)
D.c6D=w([D.aTU,D.aTS,D.aTV],B.az("M<ux<pt>>"))
D.ced=w([A.za,A.hk],x.O)
D.cee=w([A.bq,A.br,A.fn],x.O)
D.MP=w([A.bJ,A.hm,A.hB,A.as,A.oE],x.O)
D.cgU=w([A.bQ,D.iP,D.Ij],x.O)
D.chq=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dSe=new B.V(4278913286,4280030216)
D.dSw=new B.V(4279373061,4278518787)
D.dSD=new B.V(4279898630,4278847235)
D.cFJ=w([D.dSe,D.dSw,D.dSD],x.n)
D.cBV=w(["\u265b","\u269c","\u2726"],x.s)
D.dh5=new C.wz("Royal Onyx & Gold",D.cFJ,4292128567,4294370209,4294965479,3874020544,D.cBV)
D.dS1=new B.V(4278326799,4278598442)
D.dS3=new B.V(4278395929,4278258953)
D.dSa=new B.V(4278599728,4278327826)
D.cUS=w([D.dS1,D.dS3,D.dSa],x.n)
D.cwX=w(["\u269c","\u2756","\u2727"],x.s)
D.dh2=new C.wz("Imperial Emerald",D.cUS,4293050997,4294699968,4294180856,3872254170,D.cwX)
D.dS4=new B.V(4278455076,4278918747)
D.dS9=new B.V(4278587439,4278322714)
D.dSn=new B.V(4279051376,4278455076)
D.cTb=w([D.dS4,D.dS9,D.dSn],x.n)
D.cMy=w(["\u2654","\u2726","\u2748"],x.s)
D.dgX=new C.wz("Sapphire Crown",D.cTb,4291417834,4294967295,4294310143,3871986666,D.cMy)
D.dSB=new B.V(4279894534,4283041554)
D.dSN=new B.V(4281008906,4279042307)
D.dSV=new B.V(4284221976,4279894534)
D.cY0=w([D.dSB,D.dSN,D.dSV],x.n)
D.cy9=w(["\u265b","\u2766","\u2726"],x.s)
D.dgZ=new C.wz("Ruby Throne",D.cY0,4293378685,4294963145,4294964466,3874213833,D.cy9)
D.dSv=new B.V(4279371039,4281995100)
D.dSF=new B.V(4280092723,4278714896)
D.dSS=new B.V(4283045242,4279371039)
D.cVd=w([D.dSv,D.dSF,D.dSS],x.n)
D.cTw=w(["\u2655","\u2756","\u2727"],x.s)
D.dh3=new C.wz("Amethyst Palace",D.cVd,4293314984,4294963421,4294702591,3873229802,D.cTw)
D.dS6=new B.V(4278519045,4280032287)
D.dSo=new B.V(4279111184,4278321666)
D.dSK=new B.V(4280492839,4278716426)
D.cSb=w([D.dS6,D.dSo,D.dSK],x.n)
D.cKX=w(["\u2726","\u25c6","\u2742"],x.s)
D.dh0=new C.wz("Obsidian & Platinum",D.cSb,4293256418,4294967295,4294638330,3872378836,D.cKX)
D.dSC=new B.V(4279896588,4282194463)
D.dSL=new B.V(4280553487,4279043334)
D.dST=new B.V(4283048488,4279896588)
D.cKs=w([D.dSC,D.dSL,D.dST],x.n)
D.cWE=w(["\u2766","\u273f","\u2727"],x.s)
D.dgY=new C.wz("Rose Gold Velvet",D.cKs,4293440672,4294960345,4294964979,3874214602,D.cWE)
D.dS7=new B.V(4278520340,4279180595)
D.dSc=new B.V(4278718495,4278322443)
D.dSz=new B.V(4279510591,4278520340)
D.cnw=w([D.dS7,D.dSc,D.dSz],x.n)
D.cLB=w(["\u269c","\u2736","\u2756"],x.s)
D.dh1=new C.wz("Midnight Brass",D.cnw,4291405148,4293975208,4294439914,3872837564,D.cLB)
D.dT7=new B.V(4294703086,4293780428)
D.dT3=new B.V(4294307549,4293187253)
D.dT8=new B.V(4294966517,4293977807)
D.cA8=w([D.dT7,D.dT3,D.dT8],x.n)
D.cLZ=w(["\u269c","\u265b","\u2726"],x.s)
D.dh4=new C.wz("Ivory Marble & Gold",D.cA8,4289760572,4286209048,4280951062,3863625518,D.cLZ)
D.dSi=new B.V(4278978566,4280555024)
D.dSy=new B.V(4279504137,4278518530)
D.dSP=new B.V(4281211923,4278978566)
D.cy1=w([D.dSi,D.dSy,D.dSP],x.n)
D.cUc=w(["\u2742","\u2726","\u265c"],x.s)
D.dh_=new C.wz("Onyx & Copper",D.cy1,4291856987,4294365880,4294964718,3873885630,D.cUc)
D.chx=w([D.dh5,D.dh2,D.dgX,D.dgZ,D.dh3,D.dh0,D.dgY,D.dh1,D.dh4,D.dh_],B.az("M<wz>"))
D.cjN=w([A.as,D.z5,A.hm],x.O)
D.apo=w([A.hm,A.cd,A.b8,A.bD],x.O)
D.dXN=new B.V("","Original")
D.dYG=new B.V("circle","Circle")
D.e0I=new B.V("rounded","Rounded")
D.e1n=new B.V("triangle","Triangle")
D.dZU=new B.V("hexagon","Hexagon")
D.dYV=new B.V("diamond","Diamond")
D.dYg=new B.V("arch","Arch")
D.Ao=w([D.dXN,D.dYG,D.e0I,D.e1n,D.dZU,D.dYV,D.dYg],x.Q)
D.dcb=new C.kU("classic_blue","Classic Blue","Normal",A.bf,A.c,A.jT,A.dG,A.aI)
D.dcr=new C.kU("campus_green","Campus Green","Normal",A.aW,A.lL,A.pX,A.fM,A.fr)
D.dci=new C.kU("warm_sand","Warm Sand","Normal",A.e1,A.hB,A.bJ,A.iw,A.n4)
D.dcp=new C.kU("slate_minimal","Slate Minimal","Normal",A.bz,A.aN,A.aJ,A.M,A.aI)
D.dca=new C.kU("coral_fresh","Coral Fresh","Normal",A.ck,A.i5,A.pR,A.kO,A.r5)
D.dcq=new C.kU("lavender_calm","Lavender Calm","Normal",A.b0,A.oG,A.yW,A.q_,A.jS)
D.dcc=new C.kU("ocean_breeze","Ocean Breeze","Normal",A.eS,A.q3,A.r1,A.r8,A.n5)
D.aa5=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dcn=new C.kU("berry_pop","Berry Pop","Normal",A.f4,D.aa5,A.kJ,G.TV,A.D3)
D.dcd=new C.kU("midnight_pro","Midnight Pro","Professional",A.az,A.M,A.dm,A.kJ,A.ct)
D.dcm=new C.kU("executive_navy","Executive Navy","Professional",A.db,A.a9t,A.dG,A.kK,A.bO)
D.dck=new C.kU("boardroom_charcoal","Boardroom Charcoal","Professional",A.ai,A.bh,A.M,A.aN,A.ct)
D.dce=new C.kU("corporate_steel","Corporate Steel","Professional",A.mj,A.M,A.lN,A.ho,A.bO)
D.dch=new C.kU("gold_luxe","Gold Luxe","Luxury",A.nP,A.dw,A.nQ,A.n7,A.bJ)
D.b5d=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dcl=new C.kU("rose_gold_elite","Rose Gold Elite","Luxury",A.hk,D.b5d,A.TN,A.i3,A.oE)
D.dco=new C.kU("platinum_night","Platinum Night","Luxury",A.ct,A.dO,A.bh,A.aN,A.aJ)
D.dcs=new C.kU("emerald_prestige","Emerald Prestige","Luxury",A.aR,A.oI,A.eK,A.oO,A.j4)
D.dc9=new C.kU("royal_purple","Royal Purple","Luxury",A.lJ,A.Tc,A.jS,A.kJ,A.SP)
D.dcj=new C.kU("neon_pitch","Neon Pitch","Bold",A.b8,A.dO,A.M,A.b9,A.aJ)
D.dcg=new C.kU("crimson_impact","Crimson Impact","Bold",A.bR,A.kN,A.fp,A.rl,A.fL)
D.dcf=new C.kU("sunset_gallery","Sunset Gallery","Bold",A.h8,A.r5,A.kO,A.pR,A.oK)
D.F0=w([D.dcb,D.dcr,D.dci,D.dcp,D.dca,D.dcq,D.dcc,D.dcn,D.dcd,D.dcm,D.dck,D.dce,D.dch,D.dcl,D.dco,D.dcs,D.dc9,D.dcj,D.dcg,D.dcf],B.az("M<kU>"))
D.cvb=w([A.bQ,D.iP],x.O)
D.cKH=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.dYc=new B.V("Faces & people",D.cKH)
D.cjR=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dRA=new B.V("Ideas & work",D.cjR)
D.cCk=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.dZY=new B.V("Nature",D.cCk)
D.cKQ=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.dWt=new B.V("Places & things",D.cKQ)
D.cFm=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.dYi=new B.V("Symbols",D.cFm)
D.cvg=w([D.dYc,D.dRA,D.dZY,D.dWt,D.dYi],B.az("M<+(n,al<n>)>"))
D.aYP=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cvA=w([A.bQ,D.a8N,D.aYP],x.O)
D.aTo=new B.a9(0,A.G,A.Ia,A.aAj,40)
D.aT5=new B.a9(0,A.G,A.n2,A.e6,8)
D.cvK=w([D.aTo,D.aT5],x.V)
D.cw9=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.apO=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.Zq=w([A.hm,A.fn,A.bR,A.aG,A.ck],x.O)
D.cwS=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a90=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cx1=w([A.TG,D.a90,A.TG],x.O)
D.cx5=w([A.hC,D.iP,D.Ij],x.O)
D.dVt=new B.V(A.rL,"Design")
D.e1v=new B.V(D.afZ,"Word sizes")
D.e_m=new B.V(A.A7,"Text")
D.bpH=new B.a_(983182,"MaterialIcons",!1)
D.e_q=new B.V(D.bpH,"Photo")
D.dTf=new B.V(A.kV,"Logo")
D.cxQ=w([D.dVt,D.e1v,D.e_m,D.e_q,D.dTf],x.f2)
D.dWq=new B.V(A.bn,D.Xe)
D.dX0=new B.V(A.L,D.Xd)
D.dU1=new B.V(A.dN,D.Xf)
D.cxX=w([D.dWq,D.dX0,D.dU1],B.az("M<+(pt,a_)>"))
D.cG=new C.GW(0,"text")
D.l_=new C.GW(1,"image")
D.eN=new C.GW(2,"shape")
D.OU=new C.GW(3,"pdf")
D.kz=new C.GW(4,"signature")
D.a12=new C.GW(5,"bio")
D.cyL=w([D.cG,D.l_,D.eN,D.OU,D.kz,D.a12],B.az("M<GW>"))
D.cyM=w([A.bl,A.cS],B.az("M<FV>"))
D.czl=w(["School","Documents","Sign & present"],x.s)
D.aTs=new B.a9(0,A.G,A.aaD,A.th,28)
D.czE=w([D.aTs],x.V)
D.czW=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.N9=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aqa=w([A.hm,A.D2,A.aJ,A.c,A.nR,A.as],x.O)
D.e22=new B.V(0.1,0.08)
D.dZW=new B.V(0.3,0.05)
D.dTS=new B.V(0.55,0.1)
D.dVT=new B.V(0.8,0.06)
D.dXr=new B.V(0.92,0.16)
D.dX8=new B.V(0.2,0.2)
D.dW5=new B.V(0.7,0.22)
D.dZ8=new B.V(0.05,0.4)
D.dXG=new B.V(0.95,0.45)
D.dU7=new B.V(0.12,0.7)
D.dVh=new B.V(0.88,0.75)
D.dVl=new B.V(0.4,0.9)
D.dTe=new B.V(0.65,0.93)
D.dVG=new B.V(0.25,0.97)
D.dWp=new B.V(0.85,0.9)
D.dUz=new B.V(0.5,0.04)
D.cBc=w([D.e22,D.dZW,D.dTS,D.dVT,D.dXr,D.dX8,D.dW5,D.dZ8,D.dXG,D.dU7,D.dVh,D.dVl,D.dTe,D.dVG,D.dWp,D.dUz],x.Y)
D.cBl=w([A.c,A.hk,A.b3,A.aR],x.O)
D.dD4=new C.jr("office_blue","Office Blue",A.bf,A.dG,A.aI,A.c,A.jT)
D.dDf=new C.jr("campus_green","Campus Green",A.aW,A.fM,A.fr,A.lL,A.pX)
D.dD5=new C.jr("sunset","Sunset",A.h8,A.kO,A.n4,A.i5,A.pR)
D.dD6=new C.jr("midnight","Midnight",A.az,A.kJ,A.ct,A.M,A.dm)
D.dDh=new C.jr("classic","Classic",A.dB,A.dw,A.le,A.hB,A.hA)
D.dDe=new C.jr("rose_gold","Rose Gold",A.hk,A.vW,A.vV,A.u_,A.za)
D.dD_=new C.jr("ocean_teal","Ocean Teal",A.eS,A.r8,A.n5,A.q3,A.r1)
D.dCZ=new C.jr("slate_pro","Slate Pro",A.bz,A.M,A.aI,A.aN,A.aJ)
D.dCY=new C.jr("neon_night","Neon Night",A.b8,A.b9,A.aJ,A.dO,A.M)
D.dD9=new C.jr("lavender","Lavender",A.b0,A.q_,A.jS,A.oG,A.yW)
D.dDb=new C.jr("coral","Coral",A.ck,A.kO,A.r5,A.i5,A.oK)
D.dD0=new C.jr("forest","Forest",A.h7,A.eI,A.d3,A.lM,A.eY)
D.dD1=new C.jr("berry","Berry",A.f4,G.TV,A.D3,D.aa5,A.kJ)
D.dD8=new C.jr("sand","Sand",A.e1,A.iw,A.n4,A.hB,A.bJ)
D.dDd=new C.jr("ice","Ice",A.mj,A.Iy,A.aI,A.mh,A.ho)
D.dD3=new C.jr("charcoal","Charcoal",A.ai,A.aN,A.ct,A.bh,A.M)
D.dCX=new C.jr("mint","Mint",A.aR,A.ff,A.fM,A.lM,A.oO)
D.dDc=new C.jr("crimson","Crimson",A.bR,A.mm,A.kN,A.D0,A.rl)
D.b_Z=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dD7=new C.jr("gold","Gold",A.nP,A.r4,A.nQ,D.b_Z,A.n7)
D.dDa=new C.jr("aqua","Aqua",A.bK,A.CO,A.nM,A.oH,A.nS)
D.dD2=new C.jr("plum","Plum",A.lJ,A.tW,A.D3,A.CF,A.rg)
D.dDg=new C.jr("steel","Steel",A.db,A.dG,A.bh,A.jT,A.kK)
D.ZG=w([D.dD4,D.dDf,D.dD5,D.dD6,D.dDh,D.dDe,D.dD_,D.dCZ,D.dCY,D.dD9,D.dDb,D.dD0,D.dD1,D.dD8,D.dDd,D.dD3,D.dCX,D.dDc,D.dD7,D.dDa,D.dD2,D.dDg],B.az("M<jr>"))
D.cBF=w([A.bQ,A.iR],x.O)
D.OW=new C.hm(10,"rotate3d")
D.FV=new C.hm(8,"flip")
D.azR=new C.hm(19,"spiral")
D.pj=new C.hm(16,"bounce")
D.azU=new C.hm(9,"flipVertical")
D.cBG=w([D.OW,D.FV,D.azR,D.pj,D.azU],x.i)
D.dX=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cBY=w([0.62,1],x.x)
D.cCs=w([0,0.32,0.68,1],x.x)
D.m3=new C.hm(6,"zoom")
D.tb=new C.hm(4,"slideUp")
D.ta=new C.hm(2,"slideLeft")
D.cCA=w([D.m3,D.FV,D.tb,D.OW,D.ta],x.i)
D.cD3=w([A.cd,A.hk,A.i3,A.hm,A.c],x.O)
D.aTj=new B.a9(0,A.G,D.a9b,A.th,30)
D.cDI=w([D.aTj],x.V)
D.dK_=new B.v(0,-2.5)
D.dJQ=new B.v(-2.5,0)
D.dJ4=new B.v(2.5,0)
D.cDL=w([A.Pa,A.aAv,A.aAI,A.a1p,D.dK_,H.aAF,D.dJQ,D.dJ4],x.o)
D.F6=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cEb=w([23,114,69,56,80,144],x.t)
D.cEX=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cGl=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cGq=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.b6=new C.tT(0,"rectangle")
D.ew=new C.tT(1,"circle")
D.kA=new C.tT(6,"hexagon")
D.cGC=w([D.b6,D.ew,D.kA],x.B)
D.nu=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aab=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cHa=w([D.aab,A.eI],x.O)
D.dTW=new B.V("","Classic")
D.dTi=new B.V("caps","Bold caps")
D.dZb=new B.V("elegant","Elegant")
D.e0S=new B.V("shadow","Shadow")
D.dW2=new B.V("neon","Neon glow")
D.e0c=new B.V("outline","Outline")
D.e_K=new B.V("marker","Highlighter")
D.e11=new B.V("stamp","Stamp")
D.e0F=new B.V("retro","Retro")
D.dVx=new B.V("threed","3D")
D.dZt=new B.V("fire","Fire")
D.e_1=new B.V("ice","Ice")
D.dYF=new B.V("chalk","Chalk")
D.dYJ=new B.V("comic","Comic")
D.e13=new B.V("sunset","Sunset")
D.e1J=new B.V("softglow","Soft glow")
D.e_x=new B.V("lowercase","Lowercase")
D.dYZ=new B.V("double","Echo")
D.e1O=new B.V("whisper","Whisper")
D.ar1=w([D.dTW,D.dTi,D.dZb,D.e0S,D.dW2,D.e0c,D.e_K,D.e11,D.e0F,D.dVx,H.aFF,D.dZt,D.e_1,D.dYF,D.dYJ,A.a2d,D.e13,D.e1J,D.e_x,D.dYZ,D.e1O],x.Q)
D.cIh=w([3,5,7,10,12,15],x.t)
D.cJv=w([A.cd,A.bJ,A.c,A.eJ,A.dg],x.O)
D.cJH=w([0.45,1],x.x)
D.F8=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cK0=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.f3V=new C.o1("Original",0,1,1,0,0,0)
D.f3Z=new C.o1("Black & white",0,1.1,0,0,0,0)
D.f3M=new C.o1("Noir",-0.05,1.55,0,0,0,0)
D.f3Q=new C.o1("Sepia",0,1,0.25,0.9,0,0)
D.f3P=new C.o1("Vivid",0,1.15,1.6,0,0,0)
D.f3I=new C.o1("Pop",0,1.3,1.9,0,0,0)
D.f3K=new C.o1("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.f3W=new C.o1("Matte",0,0.9,0.85,0,0,0.55)
D.f3R=new C.o1("Cool",0,1.05,1,-0.8,0,0)
D.f3Y=new C.o1("Warm",0.03,1.05,1.1,0.8,0,0)
D.f3J=new C.o1("Golden hour",0.04,1,1.25,1,0,0)
D.f3O=new C.o1("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.f3X=new C.o1("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.f3N=new C.o1("Dramatic",-0.05,1.5,1.2,0,0,0)
D.f3T=new C.o1("Retro",0,0.9,0.7,0.4,0,0.35)
D.f3S=new C.o1("Forest",0,1,1.2,-0.1,-0.45,0)
D.f3U=new C.o1("Rose",0,1,1.1,0.3,0.4,0)
D.f3L=new C.o1("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cK1=w([D.f3V,D.f3Z,D.f3M,D.f3Q,D.f3P,D.f3I,D.f3K,D.f3W,D.f3R,D.f3Y,D.f3J,D.f3O,D.f3X,D.f3N,D.f3T,D.f3S,D.f3U,D.f3L],B.az("M<o1>"))
D.aYk=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cK2=w([D.aab,A.eI,D.aYk],x.O)
D.dRy=new B.V(0.12,0.3)
D.e_7=new B.V(0.26,0.75)
D.dZ7=new B.V(0.8,0.22)
D.e1a=new B.V(0.9,0.7)
D.e_w=new B.V(0.5,0.15)
D.e0d=new B.V(0.65,0.85)
D.dUM=new B.V(0.08,0.85)
D.cKd=w([D.dRy,D.e_7,D.dZ7,D.e1a,D.e_w,D.e0d,D.dUM],x.Y)
D.ara=w([A.b8,A.cd,A.bD,A.bq],x.O)
D.cL0=w([y.q,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cLd=w([A.c,A.ho,A.dC,A.tR],x.O)
D.b09=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cM7=w([D.b09,D.a90],x.O)
D.cM8=w([A.vQ,A.as],x.O)
D.cMo=w([0,0.25,0.75,1],x.x)
D.cMq=w([A.vM,A.nR],x.O)
D.azr=new C.kA(10,"kenteSunset")
D.f89=w([D.a9j,A.jt,A.as],x.O)
D.dfn=new C.j8("kuhowa_kente_sunset","Kente ya Jua",y.D,D.azr,4294964964,4282000405,4279983648,D.ji)
D.azs=new C.kA(11,"indigoMudcloth")
D.aZ7=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.f8n=w([D.aZ7,A.a8Y,A.hC],x.O)
D.dfv=new C.j8("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.d,D.azs,4294439140,4279903102,4279903102,D.ji)
D.azt=new C.kA(12,"adinkraRoyal")
D.b9_=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.f8o=w([D.a84,D.b9_,A.as],x.O)
D.dfx=new C.j8("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.f,D.azt,4294965484,4285218591,4287322667,D.ji)
D.azu=new C.kA(13,"nileLotus")
D.b5Y=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b3i=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.f8t=w([D.b5Y,D.b3i,A.hC],x.O)
D.dfw=new C.j8("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azu,4294244340,4279196764,4279196764,D.ji)
D.azv=new C.kA(14,"shweshweIvory")
D.b1G=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b0J=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.aZz=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.f8a=w([D.b1G,D.b0J,D.aZz],x.O)
D.dfs=new C.j8("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azv,4294505710,4279970378,4291058750,D.ji)
D.qx=new C.kA(15,"certIvoryNavy")
D.f88=w([D.IO,D.iP,A.hC],x.O)
D.ayY=new C.wx(1,"ringsNdoa")
D.dfp=new C.j8("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qx,4294966259,4279378237,4291404327,D.ayY)
D.a0L=new C.wx(2,"coupleCards")
D.dfk=new C.j8("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qx,4294966259,4279378237,4291404327,D.a0L)
D.AR=new C.kA(18,"certIvoryNavyBar")
D.a83=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.f8m=w([D.a83,D.iP,A.hC],x.O)
D.ayZ=new C.wx(3,"kuhoweshaForm")
D.dfi=new C.j8("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.AR,4294966519,4279378237,4291404327,D.ayZ)
D.a99=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.f8E=w([D.IO,D.a99,A.hC],x.O)
D.a0M=new C.wx(4,"mahariPande")
D.dfl=new C.j8("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qx,4294966259,4279904068,4291404327,D.a0M)
D.azw=new C.kA(16,"certIvoryGreen")
D.b1b=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.f8c=w([A.Id,D.b1b,A.hC],x.O)
D.az_=new C.wx(5,"familiaMti")
D.dfr=new C.j8("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.azw,4294966776,4280241466,4291404327,D.az_)
D.a0N=new C.wx(6,"ndoaSafi")
D.dfj=new C.j8("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.AR,4294966519,4279378237,4291404327,D.a0N)
D.b4K=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.f8f=w([D.IO,A.hC,D.b4K],x.O)
D.a0O=new C.wx(7,"peteWide")
D.dfo=new C.j8("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qx,4294966259,4282001936,4291404327,D.a0O)
D.dfy=new C.wx(8,"muhuriCrest")
D.dfh=new C.j8("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qx,4294966259,4279378237,4291404327,D.dfy)
D.f8p=w([D.a83,D.a99,A.hC],x.O)
D.dfz=new C.wx(9,"fomuWazi")
D.dfu=new C.j8("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.AR,4294966519,4279904068,4291404327,D.dfz)
D.azx=new C.kA(17,"certIvoryRose")
D.b1I=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.f8s=w([D.b1I,D.a9P,A.hC],x.O)
D.a0K=new C.wx(10,"upendoOrnate")
D.dfq=new C.j8("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.azx,4294965493,4286200650,4291404327,D.a0K)
D.cMM=w([D.dfn,D.dfv,D.dfx,D.dfw,D.dfs,D.dfp,D.dfk,D.dfi,D.dfl,D.dfr,D.dfj,D.dfo,D.dfh,D.dfu,D.dfq],x.h)
D.dY=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.FW=new C.v2(0,"emojis")
D.AY=new C.v2(1,"pictures")
D.FX=new C.v2(2,"icons3d")
D.a14=new C.v2(3,"animations")
D.OY=new C.v2(4,"videoMotion")
D.AZ=new C.v2(5,"luxe")
D.a__=w([D.FW,D.AY,D.FX,D.a14,D.OY,D.AZ],B.az("M<v2>"))
D.e0t=new B.V(A.dP,"Looks")
D.dVP=new B.V(A.x5,"Light")
D.dVN=new B.V(A.nn,"Colour")
D.dUN=new B.V(A.wG,"Effects")
D.afJ=new B.a_(63112,"MaterialIcons",!1)
D.dTp=new B.V(D.afJ,"Crop")
D.cNb=w([D.e0t,D.dVP,D.dVN,D.dUN,D.dTp],x.f2)
D.cNN=w([],x.D)
D.dUU=new B.V("Flashcard",D.FR)
D.dWN=new B.V("Quiz",D.FS)
D.dXL=new B.V("Worksheet",D.FT)
D.dWm=new B.V("Notes",D.m2)
D.dWZ=new B.V("Section",D.AW)
D.cOn=w([D.dUU,D.dWN,D.dXL,D.dWm,D.dWZ],B.az("M<+(n,m3)>"))
D.dhf=new C.kA(6,"beadedPearl")
D.b7e=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b3Q=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.f8F=w([D.b7e,D.b3Q,A.hC],x.O)
D.ayW=new C.j8("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dhf,4294966774,4286209070,4291404327,D.ji)
D.dhg=new C.kA(7,"artDeco")
D.b71=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.b9e=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.f8D=w([D.b71,D.b9e,A.bQ],x.O)
D.ayX=new C.j8("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dhg,4294440434,4280228630,4290283019,D.ji)
D.dhh=new C.kA(8,"rosetteCorners")
D.b8y=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0b=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b3M=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.f8i=w([D.b8y,D.b0b,D.b3M],x.O)
D.ayV=new C.j8("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dhh,4294702831,4285218602,4291394365,D.ji)
D.dhi=new C.kA(9,"modernLedger")
D.f8h=w([A.c,D.iP,D.iP],x.O)
D.ayU=new C.j8("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dhi,4294967295,4279378237,4279378237,D.ji)
D.cOs=w([D.ayW,D.ayX,D.ayV,D.ayU],x.h)
D.cOz=w([A.i3,A.nR],x.O)
D.ca=new C.hm(0,"none")
D.d7=new C.hm(1,"fade")
D.FU=new C.hm(3,"slideRight")
D.azT=new C.hm(5,"slideDown")
D.dBz=new C.hm(7,"zoomOut")
D.a13=new C.hm(11,"cube")
D.dBu=new C.hm(12,"blur")
D.azQ=new C.hm(13,"dissolve")
D.dBv=new C.hm(14,"wipeLeft")
D.dBw=new C.hm(15,"wipeRight")
D.OX=new C.hm(17,"push")
D.dBx=new C.hm(18,"flash")
D.azS=new C.hm(20,"swing")
D.dBy=new C.hm(21,"curtain")
D.NF=w([D.ca,D.d7,D.ta,D.FU,D.tb,D.azT,D.m3,D.dBz,D.FV,D.azU,D.OW,D.a13,D.dBu,D.azQ,D.dBv,D.dBw,D.pj,D.OX,D.dBx,D.azR,D.azS,D.dBy],x.i)
D.NG=w([D.a0J,D.a0H,D.a0A,D.a0B,D.a0C,D.a0F,D.a0D,D.a0E,D.a0I,D.a0G,D.ayW,D.ayX,D.ayV,D.ayU],x.h)
D.cOX=w([y.q,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cP0=w([A.yZ,A.hm,A.bQ],x.O)
D.cP5=w(["golddust","sparkle","sheen"],x.s)
D.dCW=new C.em("upload_pdf",K.L0,"Upload PDF")
D.dC5=new C.em("sign_paper",A.Eu,"Sign Paper")
D.boZ=new B.a_(63438,"MaterialIcons",!1)
D.dCS=new C.em("hd_photo",D.boZ,"HD Photo")
D.dBY=new C.em("sharpen",E.WZ,"Sharpen")
D.dC7=new C.em("print",K.L0,"Download PDF")
D.dCz=new C.em("rotate",D.afJ,"Rotate")
D.dCg=new C.em("text_box",A.A7,"Text Box")
D.dCi=new C.em("picture",A.rO,"Picture")
D.dCe=new C.em("title",A.A8,"Title")
D.dCa=new C.em("subtitle",R.agz,"Subtitle")
D.dCI=new C.em("bullets",I.Xg,"Bullet List")
D.dCb=new C.em("numbered",A.KP,"Numbered")
D.dCL=new C.em("quote",A_.A0,"Quote")
D.dCn=new C.em("citation",A.p3,"Citation")
D.dCO=new C.em("date_stamp",Ap.X3,"Date Stamp")
D.dCB=new C.em("page_number",A.wZ,"Page #")
D.dCF=new C.em("header_bar",A.Et,"Header")
D.dCh=new C.em("footer_bar",A3.agN,"Footer")
D.dC6=new C.em("divider",A.uo,"Divider")
D.dC2=new C.em("highlight",A.Xn,"Highlight")
D.dCH=new C.em("redact",A.x2,"Redact")
D.dCu=new C.em("callout",A.zY,"Callout")
D.dCQ=new C.em("checkboxes",I.af2,"Checklist")
D.dCr=new C.em("table",A.XO,"Table")
D.dCl=new C.em("memo",I.Xy,"Memo")
D.dCv=new C.em("letter",A.KX,"Letter")
D.boy=new B.a_(63259,"MaterialIcons",!0)
D.dBX=new C.em("agenda",D.boy,"Agenda")
D.dC8=new C.em("toc",Ao.agb,"Contents")
D.boU=new B.a_(63406,"MaterialIcons",!1)
D.dCs=new C.em("sig_line",D.boU,"Sign Line")
D.dBQ=new C.em("initial_line",A.je,"Initials")
D.dBT=new C.em("approved",A.kV,"APPROVED")
D.dCx=new C.em("draft",A.p9,"DRAFT")
D.dCD=new C.em("confidential",A.iV,"Confidential")
D.dCG=new C.em("sticky",A.L7,"Sticky Note")
D.dCP=new C.em("progress",A.aga,"Progress")
D.bqb=new B.a_(983507,"MaterialIcons",!1)
D.dC3=new C.em("stars",D.bqb,"Star Rating")
D.dBO=new C.em("equation",A.ag1,"Equation")
D.dBZ=new C.em("timeline",A.Er,"Timeline")
D.dCm=new C.em("two_col",A.XQ,"Two Columns")
D.dC0=new C.em("compare",Z.X6,"Compare")
D.dBM=new C.em("duplicate_el",A.fv,"Duplicate")
D.dCU=new C.em("delete_el",A.e4,"Delete")
D.boP=new B.a_(63352,"MaterialIcons",!1)
D.dCK=new C.em("bring_fwd",D.boP,"Bring Front")
D.boO=new B.a_(63351,"MaterialIcons",!1)
D.dBR=new C.em("send_back",D.boO,"Send Back")
D.dCw=new C.em("align_left",D.Xe,"Align L")
D.dCC=new C.em("align_center",D.Xd,"Align C")
D.dCT=new C.em("align_right",D.Xf,"Align R")
D.dCf=new C.em("word_count",Y.WF,"Word Count")
D.dCc=new C.em("link_text",A.he,"Link")
D.dCA=new C.em("phone",A.id,"Phone")
D.dC1=new C.em("email",A.zZ,"Email")
D.dCV=new C.em("qr_placeholder",A.iY,"QR Placeholder")
D.dBW=new C.em("rectangle",A0.E6,"Rectangle")
D.dCq=new C.em("circle",A.rH,"Circle")
D.dBS=new C.em("arrow",A.jD,"Arrow")
D.dCJ=new C.em("line",A.uo,"Line")
D.dC4=new C.em("triangle",A.X4,"Triangle")
D.boG=new B.a_(63318,"MaterialIcons",!1)
D.dC9=new C.em("grayscale",D.boG,"Grayscale")
D.dCj=new C.em("brighten",I.afm,"Brighten")
D.dCo=new C.em("flip_h",A.E8,"Flip H")
D.boN=new B.a_(63348,"MaterialIcons",!1)
D.dCR=new C.em("flip_v",D.boN,"Flip V")
D.dCE=new C.em("cover_page",A.oZ,"Cover Page")
D.dBP=new C.em("invoice",A.fP,"Invoice")
D.dC_=new C.em("resume",A.mz,"Resume")
D.dCd=new C.em("minutes",A.o5,"Minutes")
D.dBU=new C.em("lab_report",A.L2,"Lab Report")
D.dBV=new C.em("rubric",A.wK,"Rubric")
D.dCp=new C.em("flashcard_tool",A.A5,"Flashcard")
D.dCM=new C.em("quiz_tool",A.Ej,"Quiz Block")
D.dCt=new C.em("worksheet_tool",L.DZ,"Worksheet")
D.dCy=new C.em("outline_share",A.L4,"Share Outline")
D.dCN=new C.em("export_json",D.af8,"Export JSON")
D.dBN=new C.em("new_slide",D.WE,"New Slide")
D.dCk=new C.em("present",A.p5,"Present")
D.cPv=w([D.dCW,D.dC5,D.dCS,D.dBY,D.dC7,D.dCz,D.dCg,D.dCi,D.dCe,D.dCa,D.dCI,D.dCb,D.dCL,D.dCn,D.dCO,D.dCB,D.dCF,D.dCh,D.dC6,D.dC2,D.dCH,D.dCu,D.dCQ,D.dCr,D.dCl,D.dCv,D.dBX,D.dC8,D.dCs,D.dBQ,D.dBT,D.dCx,D.dCD,D.dCG,D.dCP,D.dC3,D.dBO,D.dBZ,D.dCm,D.dC0,D.dBM,D.dCU,D.dCK,D.dBR,D.dCw,D.dCC,D.dCT,D.dCf,D.dCc,D.dCA,D.dC1,D.dCV,D.dBW,D.dCq,D.dBS,D.dCJ,D.dC4,D.dC9,D.dCj,D.dCo,D.dCR,D.dCE,D.dBP,D.dC_,D.dCd,D.dBU,D.dBV,D.dCp,D.dCM,D.dCt,D.dCy,D.dCN,D.dBN,D.dCk],B.az("M<em>"))
D.cPB=w([A.ct,A.ai],x.O)
D.dSZ=new B.V(4286331629,4292552567)
D.dSM=new B.V(4280640491,4278630100)
D.dT6=new B.V(4294538006,4292943176)
D.dS8=new B.V(4278556265,4280640491)
D.cKn=w([D.dSZ,D.dSM,D.dT6,D.dS8],x.n)
D.cal=w([4294626325,4280472558,4294210230],x.t)
D.dBH=new C.ne("colorful","Colorful",A.nn,D.cKn,4294967295,3875536895,D.cal,D.m3)
D.dSA=new B.V(4279522093,4279657780)
D.dSQ=new B.V(4281750292,4283268111)
D.dSb=new B.V(4278603323,4279203438)
D.dSR=new B.V(4282343954,4279599165)
D.cl2=w([D.dSA,D.dSQ,D.dSb,D.dSR],x.n)
D.ca3=w([4288931381,4294829706,4287033260],x.t)
D.dBD=new C.ne("nature","Nature",A.Ev,D.cl2,4294442727,3874290891,D.ca3,D.d7)
D.dSu=new B.V(4279369771,4283178389)
D.dSr=new B.V(4279179050,4286456526)
D.dSI=new B.V(4280163147,4290648157)
D.dS0=new B.V(4278322711,4285343961)
D.cBQ=w([D.dSu,D.dSr,D.dSI,D.dS0],x.n)
D.cah=w([4294210230,4280472558,4289170426],x.t)
D.dBB=new C.ne("vibe","Vibe",A.Xj,D.cBQ,4294967295,3874869502,D.cah,D.ta)
D.dT2=new B.V(4290007817,4292552567)
D.dSX=new B.V(4286328082,4294286859)
D.dT1=new B.V(4288485197,4294538006)
D.dSW=new B.V(4285343961,4293675161)
D.bHH=w([D.dT2,D.dSX,D.dT1,D.dSW],x.n)
D.cam=w([4294829706,4294967295,4284999929],x.t)
D.dBC=new C.ne("celebration","Celebration",A.kT,D.bHH,4294967295,4009752557,D.cam,D.pj)
D.dSp=new B.V(4279179050,4280171146)
D.dSt=new B.V(4279310375,4280232247)
D.dSh=new B.V(4278916151,4280172719)
D.dSq=new B.V(4279179050,4281549141)
D.cvt=w([D.dSp,D.dSt,D.dSh,D.dSq],x.n)
D.c9Z=w([4281908728,4294626325,4287931320],x.t)
D.dBG=new C.ne("professional","Professional",A.zX,D.cvt,4294967295,3872118241,D.c9Z,D.OX)
D.dSl=new B.V(4278995566,4278413729)
D.dSd=new B.V(4278727492,4279137424)
D.dSJ=new B.V(4280171146,4278751666)
D.dSm=new B.V(4278995566,4279590517)
D.ce6=w([D.dSl,D.dSd,D.dSJ,D.dSm],x.n)
D.ca1=w([4286436348,4284410580,4294829706],x.t)
D.dBI=new C.ne("ocean","Ocean",I.XS,D.ce6,4294967295,3873501950,D.ca1,D.tb)
D.dSY=new B.V(4286328082,4294538006)
D.dT_=new B.V(4286781507,4294677052)
D.dSU=new B.V(4283178389,4294197086)
D.dT0=new B.V(4288295954,4294688548)
D.crK=w([D.dSY,D.dT_,D.dSU,D.dT0],x.n)
D.can=w([4294829706,4294967295,4294747557],x.t)
D.dBJ=new C.ne("sunset","Sunset",A.L9,D.crK,4294967295,4009749973,D.can,D.d7)
D.dTa=new B.V(4294967295,4294047225)
D.dT5=new B.V(4294507260,4294967295)
D.dT9=new B.V(4294967295,4293060848)
D.dT4=new B.V(4294507260,4294047225)
D.cEF=w([D.dTa,D.dT5,D.dT9,D.dT4],x.n)
D.c9X=w([4280640491,4279179050,4287931320],x.t)
D.dBF=new C.ne("minimal","Minimal",A0.E6,D.cEF,4279179050,4282865001,D.c9X,D.d7)
D.dSk=new B.V(4278979081,4280886564)
D.dSE=new B.V(4280031511,4278979081)
D.dSs=new B.V(4279308561,4281148438)
D.dSj=new B.V(4278979081,4280031511)
D.cRi=w([D.dSk,D.dSE,D.dSs,D.dSj],x.n)
D.caa=w([4292128567,4294829706,4289241758],x.t)
D.dBK=new C.ne("elegant","Elegant",A.kW,D.cRi,4294898631,3873957348,D.caa,D.azQ)
D.dSG=new B.V(4280159034,4282058596)
D.dSg=new B.V(4278916151,4280163147)
D.dSO=new B.V(4281208933,4278916151)
D.dSx=new B.V(4279502891,4283178389)
D.cX7=w([D.dSG,D.dSg,D.dSO,D.dSx],x.n)
D.caj=w([4294296657,4292128567,4291081725],x.t)
D.dBE=new C.ne("royal","Royal Gold",A.iD,D.cX7,4294965222,3874084351,D.caj,D.m3)
D.dS5=new B.V(4278464302,4280163147)
D.dSf=new B.V(4278916151,4279455306)
D.dSH=new B.V(4280163147,4283040846)
D.dS2=new B.V(4278332450,4281413249)
D.cK5=w([D.dS5,D.dSf,D.dSH,D.dS2],x.n)
D.c9Y=w([4281193663,4289170426,4294210230],x.t)
D.dBL=new C.ne("aurora","Aurora Glow",A.dP,D.cK5,4293983738,3869766608,D.c9Y,D.d7)
D.uI=w([D.dBH,D.dBD,D.dBB,D.dBC,D.dBG,D.dBI,D.dBJ,D.dBF,D.dBK,D.dBE,D.dBL],B.az("M<ne>"))
D.b4f=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cQ2=w([A.pU,D.b4f,A.pU],x.O)
D.cQh=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cQl=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.aZB=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b7n=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cRu=w([A.c,D.aZB,D.b7n],x.O)
D.cT3=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azp=new C.kA(0,"heritageGold")
D.b36=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b37=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.f8G=w([D.b36,D.b37,A.as],x.O)
D.dft=new C.j8("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azp,4294570461,4284234270,4292128567,D.ji)
D.azq=new C.kA(1,"heritageCrimson")
D.aYg=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b1H=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b7f=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.f8l=w([D.aYg,D.b1H,D.b7f],x.O)
D.dfm=new C.j8("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azq,4294635750,4285213214,4292912216,D.ji)
D.cT7=w([D.a0J,D.a0H,D.dft,D.dfm,D.a0C,D.a0F],x.h)
D.dl1=new C.qN(1,"circuit")
D.dlu=new C.lG("neural","Neural Link","Robotic",D.dl1,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dl0=new C.qN(0,"grid")
D.dlr=new C.lG("signal","Signal Grid","Robotic",D.dl0,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dl6=new C.qN(2,"hexes")
D.dlc=new C.lG("core","Core Protocol","Robotic",D.dl6,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.azN=new C.qN(11,"diagonal")
D.dln=new C.lG("steel","Steel Tech","Robotic",D.azN,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.azO=new C.qN(3,"rings")
D.dlb=new C.lG("vault","Vault Gold","Robotic",D.azO,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dl4=new C.qN(13,"leaves")
D.dle=new C.lG("forest","Forest Morning","Nature",D.dl4,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.azP=new C.qN(5,"waves")
D.dll=new C.lG("ocean","Ocean Calm","Nature",D.azP,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dl7=new C.qN(6,"sunset")
D.dlq=new C.lG("sunset","Sunset Glow","Nature",D.dl7,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dl8=new C.qN(7,"mountains")
D.dld=new C.lG("mountain","Mountain Air","Nature",D.dl8,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dl9=new C.qN(8,"stars")
D.dlk=new C.lG("night","Night Sky","Nature",D.dl9,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a11=new C.qN(4,"orbs")
D.dli=new C.lG("aurora","Aurora","Nature",D.a11,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dls=new C.lG("sand","Sand Dune","Nature",D.azP,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dla=new C.qN(9,"rays")
D.dlh=new C.lG("golden","Golden Hour","Warm",D.dla,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dlf=new C.lG("royal","Royal Purple","Warm",D.azN,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dlg=new C.lG("rose","Rose Petal","Warm",D.a11,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dl3=new C.qN(12,"blocks")
D.dlj=new C.lG("electric","Electric Blue","Bold",D.dl3,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dlt=new C.lG("mint","Fresh Mint","Bold",D.a11,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dl5=new C.qN(14,"minimal")
D.dlp=new C.lG("white","Clean White","Clean",D.dl5,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dl2=new C.qN(10,"frame")
D.dlm=new C.lG("midnight","Midnight Gold","Clean",D.dl2,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dlo=new C.lG("community","Community Green","Clean",D.azO,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_o=w([D.dlu,D.dlr,D.dlc,D.dln,D.dlb,D.dle,D.dll,D.dlq,D.dld,D.dlk,D.dli,D.dls,D.dlh,D.dlf,D.dlg,D.dlj,D.dlt,D.dlp,D.dlm,D.dlo],B.az("M<lG>"))
D.cTt=w([D.z5,A.vQ,A.hm,A.bQ],x.O)
D.cTI=w([D.a9Z,D.iP],x.O)
D.cTR=w(["pdf","docx","txt","md"],x.s)
D.e4L=new B.bA(-3,150,34)
D.e4M=new B.bA(-3,214,62)
D.e4N=new B.bA(-3,288,62)
D.cUD=w([D.e4L,D.e4M,D.e4N],B.az("M<+(P,P,P)>"))
D.cV2=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cVA=w(["Write","Design","Print & fold"],x.s)
D.jj=new C.tT(2,"triangle")
D.AX=new C.tT(3,"arrow")
D.fb=new C.tT(4,"line")
D.jk=new C.tT(5,"parallelogram")
D.cVC=w([D.b6,D.ew,D.jj,D.AX,D.fb,D.jk,D.kA],x.B)
D.dRC=new B.V(240,96)
D.dTl=new B.V(560,46)
D.cVH=w([D.dRC,D.dTl],x.Y)
D.f8R=new C.wA(0,"classic")
D.dhl=new C.na("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azp,4294570461,4282000405,4284234270)
D.dhx=new C.na("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azq,4294635750,4281999378,4285213214)
D.dhm=new C.na("elegant_navy","Umoja Mzuri",y.x,D.a0W,4294967035,4279378237,4290283019)
D.dhz=new C.na("elegant_gold","Umoja wa Dhahabu",y.p,D.azy,4294966515,4281016592,4289102906)
D.dhB=new C.na("kente_sunset","Kente ya Jua",y.D,D.azr,4294964964,4282000405,4279983648)
D.dhj=new C.na("indigo_mudcloth","Nguo ya Indigo",y.d,D.azs,4294439140,4279903102,4279903102)
D.dho=new C.na("adinkra_royal","Muhuri wa Adinkra",y.f,D.azt,4294965484,4285218591,4287322667)
D.dht=new C.na("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azu,4294244340,4279196764,4279196764)
D.dhv=new C.na("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azv,4294505710,4279970378,4291058750)
D.f8S=new C.wA(1,"ringsNdoa")
D.dhn=new C.na("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qx,4294966259,4279378237,4291404327)
D.f8U=new C.wA(2,"coupleCards")
D.dhy=new C.na("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qx,4294966259,4279378237,4291404327)
D.f8V=new C.wA(3,"kuhoweshaForm")
D.dhu=new C.na("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.AR,4294966519,4279378237,4291404327)
D.f8W=new C.wA(4,"mahariPande")
D.dhk=new C.na("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qx,4294966259,4279904068,4291404327)
D.f8X=new C.wA(5,"familiaMti")
D.dhA=new C.na("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.azw,4294966776,4280241466,4291404327)
D.f8Y=new C.wA(6,"ndoaSafi")
D.dhr=new C.na("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.AR,4294966519,4279378237,4291404327)
D.f8Z=new C.wA(7,"peteWide")
D.dhq=new C.na("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qx,4294966259,4282001936,4291404327)
D.f9_=new C.wA(8,"muhuriCrest")
D.dhp=new C.na("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qx,4294966259,4279378237,4291404327)
D.f90=new C.wA(9,"fomuWazi")
D.dhs=new C.na("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.AR,4294966519,4279904068,4291404327)
D.f8T=new C.wA(10,"upendoOrnate")
D.dhw=new C.na("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.azx,4294965493,4286200650,4291404327)
D.NT=w([D.dhl,D.dhx,D.dhm,D.dhz,D.dhB,D.dhj,D.dho,D.dht,D.dhv,D.dhn,D.dhy,D.dhu,D.dhk,D.dhA,D.dhr,D.dhq,D.dhp,D.dhs,D.dhw],B.az("M<na>"))
D.AV=new C.ao2(0,"landscape169")
D.nw=new C.ao2(1,"portrait916")
D.cWn=w([D.AV,D.nw],B.az("M<ao2>"))
D.asp=w([A.hm,A.bJ,A.dg,A.i3,A.c],x.O)
D.t1=w([A.bQ,A.iw],x.O)
D.e5E=new B.d6(["open",A.je,"Open & write","Keep writing this book"])
D.e61=new B.d6(["print",A.rR,"Print as a book","Fold and staple it"])
D.cWZ=w([D.e5E,D.e61],B.az("M<+(n,a_,n,n)>"))
D.cXy=w([D.a13,D.m3,D.FV,D.OX,D.d7,D.OW],x.i)
D.e_C=new B.V(-1,"Small")
D.dR7=new B.V(0,"Normal")
D.dRv=new B.V(1,"Big")
D.dRL=new B.V(2,"Huge")
D.cXW=w([D.e_C,D.dR7,D.dRv,D.dRL],B.az("M<+(G,n)>"))
D.cYk=w([49,65,89,38,83,89],x.t)
D.cYr=w([A.vQ,A.hm,A.bQ],x.O)
D.cYR=w([D.d7,D.m3,D.ta,D.a13,D.FV,D.OX],x.i)
D.axH=new B.dW([0,D.J_,8,D.aba,12,D.abb],B.az("dW<G,a1w>"))
D.dGn={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b78=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cvD=w([A.bJ,D.b78],x.O)
D.bHa=w([A.bN,A.bO],x.O)
D.cO9=w([A.b9,A.bf],x.O)
D.cJi=w([A.cd,A.b3,A.cX],x.O)
D.cX_=w([A.ct,A.bz],x.O)
D.cCD=w([A.b8,A.f4],x.O)
D.cLN=w([A.b0,A.fo],x.O)
D.b1t=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cL7=w([D.b1t,A.nR],x.O)
D.cG8=w([A.ir,A.vS],x.O)
D.cCt=w([A.bo,A.cf],x.O)
D.d0r=new B.bt(D.dGn,[D.cvD,D.bHa,D.cO9,D.cJi,D.cX_,D.cCD,D.cLN,D.cL7,D.cG8,D.cCt],B.az("bt<n,al<x>>"))
D.dFC={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a_W=new B.bt(D.dFC,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bt<n,n>"))
D.a01=new B.bt(A.ii,[],B.az("bt<G,+icon3d,picture(n?,n?)>"))
D.d9D=new F.m_("Chapter 1","","","")
D.cWa=w([D.d9D],x.A)
D.d9H=new F.qE("My Book","","",D.cWa,E.ayL)
D.d9F=new F.tL("starry",null,null,null,null,"","","")
D.d9I=new F.qE("Dream Big","","",E.a_9,D.d9F)
D.d9G=new F.tL("story",null,null,null,null,"","","")
D.d9J=new F.qE("Little Lion","","",E.a_9,D.d9G)
D.d9E=new F.tL("vintage",null,null,null,null,"","","")
D.d9K=new F.qE("Our Story","","",E.a_9,D.d9E)
D.dcJ=new C.D0("","NGMY","","")
D.dBA=new C.aYd(null,null,null,null)
D.dDi=new C.ao7(null)
D.dDv=new C.aoD(0,"smaller")
D.dDw=new C.aoD(1,"bigger")
D.aA2=new C.aoD(2,"fit")
D.dKX=new B.B(E.abX,R.a7E,null)
D.dL0=new B.B(A.UI,A.md,null)
D.brs=new B.ac(A.mD,16,A.c1,null,null,null)
D.dL4=new B.B(A.lh,D.brs,null)
D.aXK=new B.f7(2.2,null,null,null,null,A.c,null,null,null,null)
D.dLf=new B.B(A.DC,D.aXK,null)
D.bBm=new B.ac(A.cu,16,A.aA,null,null,null)
D.dLi=new B.B(A.ek,D.bBm,null)
D.eHT=new B.w("Play",null,A.or,null,null,null,null,null,null,null,null,null)
D.cOo=w([U.ahX,A.tt,D.eHT],x.p)
D.e91=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cOo,null)
D.dLl=new B.B(A.rx,D.e91,null)
D.aXT=new B.f7(2.4,null,null,null,null,null,null,null,null,null)
D.edP=new B.a8(20,20,D.aXT,null)
D.dLp=new B.B(A.lh,D.edP,null)
D.eQb=new B.w("Seconds per slide",null,A.hi,null,null,null,null,null,null,null,null,null)
D.dLw=new B.B(A.bj,D.eQb,null)
D.dLT=new C.a6c(2,"print")
D.dLW=new B.iC(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dNy=new B.fZ("/Annot")
D.dNA=new B.fZ("/URI")
D.eCN=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dPj=new B.ja("share",48,D.eCN,null,B.az("ja<n>"))
D.bBh=new B.ac(A.dP,14,A.eJ,null,null,null)
D.dPs=new B.cE(null,-2,-2,null,null,null,D.bBh,null)
D.b4C=new B.x(0.3333333333333333,0,0,0,A.t)
D.cxn=w([D.b4C,A.K],x.O)
D.bGA=new B.a7(A.a1,A.a7,A.w,D.cxn,null,null)
D.aQZ=new B.o(null,null,null,null,null,D.bGA,A.n)
D.bb9=new B.kx(D.aQZ,A.ba,null,null)
D.dPE=new B.cE(0,0,null,0,8,null,D.bb9,null)
D.cSc=w([A.hB,A.oK,A.ck],x.O)
D.dQh=new B.bT(A.C,0.5,A.w,null,0,D.cSc,null,null)
D.dRG=new B.V(0.22,A.bf)
D.dV4=new B.V(0.5,A.hk)
D.dZS=new B.V(0.78,A.aR)
D.e5v=new B.d6([A.bD,0.22,0.7,2.6])
D.e5A=new B.d6([A.b8,0.36,1.2,1.3])
D.e5G=new B.d6([A.dM,0.28,0.2,0.4])
D.e5L=new B.d6([A.cA,0.05,0.3,0.35])
D.e5R=new B.d6([A.bo,0.28,0.9,0])
D.e5Z=new B.d6([A.az,-0.25,-0.15,0.45])
D.e6F=new B.d6([A.cd,0.42,1,4.1])
D.e8L=new B.a73(9)
D.bsK=new B.ac(A.p3,16,A.c,null,null,null)
D.eS0=new B.w("Book",null,A.qK,null,null,null,null,null,null,null,null,null)
D.cYq=w([D.bsK,A.ey,D.eS0],x.p)
D.e93=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cYq,null)
D.byW=new B.ac(A.iV,10,A.c,null,null,null)
D.eGc=new B.w("Pro",null,A.nB,null,null,null,null,null,null,null,null,null)
D.cOu=w([D.byW,A.v_,D.eGc],x.p)
D.e96=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cOu,null)
D.bxz=new B.ac(A.kT,18,A.bJ,null,null,null)
D.eI5=new B.w("Ending celebration",null,A.jp,null,null,null,null,null,null,null,null,null)
D.cUe=w([D.bxz,A.bp,D.eI5],x.p)
D.e99=new B.cF(A.b_,A.e,A.j,A.m,null,A.p,null,0,D.cUe,null)
D.byI=new B.ac(A.je,18,A.kO,null,null,null)
D.eo1=new B.F(!0,A.kO,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSg=new B.w("Write",null,D.eo1,null,null,null,null,null,null,null,null,null)
D.cEv=w([D.byI,A.ab,D.eSg],x.p)
D.e9e=new B.cF(A.b_,A.e,A.R,A.m,null,A.p,null,0,D.cEv,null)
D.eGb=new B.w("Download picture",null,A.pu,null,null,null,null,null,null,null,null,null)
D.blm=new B.pK(A.e8,A.C,A.i,D.eGb,null)
D.blx=new B.dp(1,A.cj,D.blm,null)
D.cON=w([K.ahN,A.ab,D.blx],x.p)
D.e9f=new B.cF(A.b_,A.b5,A.j,A.m,null,A.p,null,0,D.cON,null)
D.e9x=new B.oB(!1,!1,null,R.SA,null,A.bV,null,null,null)
D.a2F=new B.jy([D.ca,D.d7,D.ta,D.FU,D.tb,D.azT],B.az("jy<hm>"))
D.dHr={title:0,quote:1,closing:2,bio:3}
D.eaj=new B.fd(D.dHr,4,x.M)
D.dFT={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eal=new B.fd(D.dFT,5,x.M)
D.dGZ={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2G=new B.fd(D.dGZ,8,x.M)
D.dGv={Design:0,Transitions:1,Insert:2}
D.eap=new B.fd(D.dGv,3,x.M)
D.f98=new B.jy([D.a14],B.az("jy<v2>"))
D.dGC={float3d:0,drift:1,pulse:2}
D.eas=new B.fd(D.dGC,3,x.M)
D.aGx=new B.jy([D.FR,D.FS,D.FT],B.az("jy<m3>"))
D.dFQ={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aGz=new B.fd(D.dFQ,14,x.M)
D.f99=new B.fd(A.ii,0,B.az("fd<v2>"))
D.dGz={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.PU=new B.fd(D.dGz,4,x.M)
D.dFK={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aGB=new B.fd(D.dFK,30,x.M)
D.dGH={circle:0,triangle:1,hexagon:2,diamond:3}
D.eaH=new B.fd(D.dGH,4,x.M)
D.ecO=new B.ap(390,844)
D.edz=new B.a8(20,20,A2.I7,null)
D.aHl=new B.a8(null,2.5,null,null)
D.edJ=new B.a8(18,18,A2.I7,null)
D.byM=new B.ac(A.iD,19,A.c,null,null,null)
D.edU=new B.a8(38,38,D.byM,null)
D.bxc=new B.ac(A.x6,22,A.c,null,null,null)
D.edW=new B.a8(40,40,D.bxc,null)
D.eet=new B.hI(2,10,10,1.15,null)
D.aHu=new B.hI(2,16,14,0.62,null)
D.bi2=new B.L(32,30,32,40)
D.aZ0=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bsx=new B.ac(A.oZ,56,D.aZ0,null,null,null)
D.aau=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eq_=new B.F(!0,D.aau,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMe=new B.w("Your books will live here.",null,D.eq_,null,A.L,null,null,null,null,null,null,null)
D.cH0=w([D.bsx,A.U,D.eMe],x.p)
D.bam=new B.fs(A.af,A.e,A.j,A.m,null,A.p,null,0,D.cH0,null)
D.dLu=new B.B(D.bi2,D.bam,null)
D.eeO=new B.lI(D.dLu,null)
D.eMb=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ef5=new B.aX(D.eMb,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eKo=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ef6=new B.aX(D.eKo,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eP0=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.efe=new B.aX(D.eP0,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.ePt=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eft=new B.aX(D.ePt,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eJb=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.efG=new B.aX(D.eJb,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVQ=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eg_=new B.aX(D.eVQ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTf=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ega=new B.aX(D.eTf,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.ePA=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.egR=new B.aX(D.ePA,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eEC=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eh6=new B.aX(D.eEC,null,null,null,null,null,null,null,A.il,null,null,null,null,A.oQ,!1,null,null,null,A.q,null)
D.eLT=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ehp=new B.aX(D.eLT,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eLA=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ehq=new B.aX(D.eLA,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRo=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ehr=new B.aX(D.eRo,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eB1=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ehA=new B.aX(D.eB1,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eHi=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.ehX=new B.aX(D.eHi,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUK=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.ehZ=new B.aX(D.eUK,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUm=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.ei2=new B.aX(D.eUm,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eA9=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ei4=new B.aX(D.eA9,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eQC=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eid=new B.aX(D.eQC,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTX=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eis=new B.aX(D.eTX,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTO=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eiu=new B.aX(D.eTO,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eA1=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eiA=new B.aX(D.eA1,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eDH=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.ej1=new B.aX(D.eDH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eT2=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ejc=new B.aX(D.eT2,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eDv=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ejr=new B.aX(D.eDv,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b40=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cvP=w([A.i3,A.nR,D.b40,D.a7W,A.i3],x.O)
D.ejP=new B.fP(A.C,0,6.283185307179586,A.w,D.cvP,null,null)
D.cDM=w([A.bJ,A.bQ,A.hm,D.z5,A.bJ],x.O)
D.aI3=new B.fP(A.C,0,6.283185307179586,A.w,D.cDM,null,null)
D.cQf=w([A.cd,A.bD,A.b8,A.bq,A.cX,A.cd],x.O)
D.ejU=new B.fP(A.C,0,6.283185307179586,A.w,D.cQf,null,null)
D.cxB=w([A.oO,A.nS,A.yW,A.i3,A.oO],x.O)
D.ejV=new B.fP(A.C,0,6.283185307179586,A.w,D.cxB,null,null)
D.cQ9=w([A.aN,A.bO,A.aJ,A.ai,A.aN],x.O)
D.ejW=new B.fP(A.C,0,6.283185307179586,A.w,D.cQ9,null,null)
D.cWK=w([A.bo,A.b8,A.bD,A.cd,A.bo],x.O)
D.ejY=new B.fP(A.C,0,6.283185307179586,A.w,D.cWK,null,null)
D.b4e=new B.x(1,0,1,1,A.t)
D.b_6=new B.x(1,1,0,1,A.t)
D.cTl=w([A.Cx,A.a9p,H.a8x,D.b4e,H.a8T,D.b_6,A.Cx],x.O)
D.ejZ=new B.fP(A.C,0,6.283185307179586,A.w,D.cTl,null,null)
D.ekd=new C.asA(2,"immersiveSticky")
D.eke=new C.asA(3,"edgeToEdge")
D.ekf=new C.asA(4,"manual")
D.emo=new B.F(!0,A.nL,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIz=new B.F(!0,A.fL,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.emV=new B.F(!0,E.mn,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eoh=new B.F(!0,A.ak,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epi=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epr=new B.F(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.epM=new B.F(!0,A.eJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er1=new B.F(!0,A.bO,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.era=new B.F(!0,A.j8,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ero=new B.qX(!0,A.G9,null,null,null,null,A.dq,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.erR=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ess=new B.F(!0,A.iR,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esN=new B.F(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dLZ=new B.iC(1,1,0.7568627450980392,0.027450980392156862)
D.esR=new B.qX(!0,D.dLZ,null,null,null,null,A.dq,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9w=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJg=new B.F(!0,D.a9w,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esX=new B.F(!0,D.aau,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.esY=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJi=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.etw=new B.qX(!0,A.oh,null,null,null,null,A.dq,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.etP=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euj=new B.F(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eul=new B.F(!0,D.a9w,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.GX=new B.F(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euN=new B.F(!0,A.bQ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euV=new B.F(!0,A.bO,null,null,null,null,14,A.a_,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.euX=new B.F(!0,A.bJ,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evc=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqu,null,null,null)
D.eve=new B.F(!0,A.cJ,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evg=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evs=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.evD=new B.F(!0,A.dC,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewa=new B.F(!0,A.aP,null,null,null,null,null,A.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewx=new B.F(!0,A.ak,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJQ=new B.F(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJS=new B.F(!0,A.c1,null,null,null,null,11.5,A.a_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8n=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eyf=new B.F(!0,D.b8n,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aK_=new B.F(!0,E.mn,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyH=new B.F(!0,A.bO,null,null,null,null,11,A.a_,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyK=new B.F(!0,N.kM,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.es3=new B.F(!0,A.x,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezQ=new B.w("NEW",null,D.es3,null,null,null,null,null,null,null,null,null)
D.eA4=new B.w("Hati ya Kuhowesha",null,A.h3,null,null,null,null,null,null,null,null,null)
D.eAt=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eAM=new B.w("Scrollable PDF on this slide",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eBq=new B.w("Big quote mark",null,A.iI,null,null,null,null,null,null,null,null,null)
D.eBs=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eBE=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eC6=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eC7=new B.w("How many slides?",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eCE=new B.w("Transfer",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eo4=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCY=new B.w("Luxury FX",null,D.eo4,null,null,null,null,null,null,null,null,null)
D.eDf=new B.w("Font",null,A.qL,null,null,null,null,null,null,null,null,null)
D.eDq=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eDw=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.exN=new B.F(!0,A.bO,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDE=new B.w("Example  GA847",null,D.exN,null,null,null,null,null,null,null,null,null)
D.eE1=new B.w("Design shapes",null,A.iI,null,null,null,null,null,null,null,null,null)
D.eE9=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eEd=new B.w("Non-stop (loop)",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eEq=new B.w("Hati ya Kuhoweya",null,A.h3,null,null,null,null,null,null,null,null,null)
D.eEJ=new B.w("Photo studio",null,A.fS,null,null,null,null,null,null,null,null,null)
D.eF8=new B.w("Add your picture",null,A.l2,null,null,null,null,null,null,null,null,null)
D.erp=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF9=new B.w("Enter document code",null,D.erp,null,A.L,null,null,null,null,null,null,null)
D.ep6=new B.F(!0,E.mn,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFv=new B.w("Delete this book?",null,D.ep6,null,A.L,null,null,null,null,null,null,null)
D.etn=new B.F(!0,E.mn,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGi=new B.w("Your library",null,D.etn,null,null,null,null,null,null,null,null,null)
D.eGm=new B.w("Delete",null,A.aJa,null,null,null,null,null,null,null,null,null)
D.eGw=new B.w("Element flies in",null,A.aJm,null,null,null,null,null,null,null,null,null)
D.QZ=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eGT=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eHb=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eHf=new B.w("Cancel",null,E.aJx,null,null,null,null,null,null,null,null,null)
D.eHh=new B.w("The lines and circles that come with the design",null,A.im,null,null,null,null,null,null,null,null,null)
D.ewF=new B.F(!0,A.j7,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHH=new B.w("DOCUMENT CODE",null,D.ewF,null,null,null,null,null,null,null,null,null)
D.eIp=new B.w("Quotes",null,G.a4d,null,null,null,null,null,null,null,null,null)
D.eqP=new B.F(!0,N.kM,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIx=new B.w("Add a picture",null,D.eqP,null,null,null,null,null,null,null,null,null)
D.eIE=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,T.aJb,null,A.L,null,null,null,null,null,null,null)
D.eIH=new B.w("Look & feel",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eIL=new B.w("Rings",null,A.jp,null,null,null,null,null,null,null,null,null)
D.eIQ=new B.w("W",null,A.qL,null,null,null,null,null,null,null,null,null)
D.eJ_=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eJg=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a3W,null,A.L,null,null,null,null,null,null,null)
D.eJi=new B.w("Write your book",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eJZ=new B.w("Add page",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eKc=new B.w("Malipo ya Awamu ya Mahari",null,A.h3,null,null,null,null,null,null,null,null,null)
D.erd=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKp=new B.w("Create with AI",null,D.erd,null,A.L,null,null,null,null,null,null,null)
D.eKR=new B.w("Apply look",null,A.jp,null,null,null,null,null,null,null,null,null)
D.erW=new B.F(!0,A.eY,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLC=new B.w("Type your presentation below",null,D.erW,null,A.L,null,null,null,null,null,null,null)
D.eLF=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aK2,null,A.L,null,null,null,null,null,null,null)
D.eLH=new B.w("Keep it",null,A.cb,null,null,null,null,null,null,null,null,null)
D.en7=new B.F(!0,A.cH,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLO=new B.w("Done",null,D.en7,null,null,null,null,null,null,null,null,null)
D.eM6=new B.w("Delete",null,A.mP,null,null,null,null,null,null,null,null,null)
D.eMg=new B.w("Hati ya Kiapo cha Uongozi",null,A.h3,null,null,null,null,null,null,null,null,null)
D.eqe=new B.F(!0,A.aP,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN6=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eqe,null,A.L,null,null,null,null,null,null,null)
D.eNr=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.eNx=new B.w("Layout",null,A.QO,null,null,null,null,null,null,null,null,null)
D.eO7=new B.w("Print",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eOa=new B.w("X",null,A.qL,null,null,null,null,null,null,null,null,null)
D.eOJ=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Ai.a3Q,null,null,null,null,null,null,null,null,null)
D.ePm=new B.w("Hati ya Kuhowa",null,A.h3,null,null,null,null,null,null,null,null,null)
D.ePo=new B.w("Choose a class template",null,A.h3,null,null,null,null,null,null,null,null,null)
D.ePF=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.ePM=new B.w("Done",null,A.aJP,null,null,null,null,null,null,null,null,null)
D.ePV=new B.w("Ending celebration",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.ePW=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,H.aIT,null,null,null,null,null,null,null,null,null)
D.eQZ=new B.w("Export presentation",null,A.dj,null,null,null,null,null,null,null,null,null)
D.eR_=new B.w("What would you like to do?",null,D.aJg,null,null,null,null,null,null,null,null,null)
D.eR3=new B.w("Delete",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eRv=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.eRz=new B.w("Hati (Documents)",null,A.h3,null,null,null,null,null,null,null,null,null)
D.exE=new B.F(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRO=new B.w("Delete presentation?",null,D.exE,null,A.L,null,null,null,null,null,null,null)
D.eS4=new B.w("After the last slide it starts again from the first",null,A.im,null,null,null,null,null,null,null,null,null)
D.eSe=new B.w("\ud83c\udf33",null,A.GT,null,A.L,null,null,null,null,null,null,null)
D.eSw=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.im,null,null,null,null,null,null,null,null,null)
D.eSD=new B.w("Transfer document",null,A.oq,null,null,null,null,null,null,null,null,null)
D.eSN=new B.w("Add to the slides",null,A.hi,null,null,null,null,null,null,null,null,null)
D.eT6=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.eTl=new B.w("Make a book",null,I.aIR,null,null,null,null,null,null,null,null,null)
D.eTp=new B.w("Books",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eqK=new B.F(!0,A.ai,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTq=new B.w("Keep this page open until it finishes.",null,D.eqK,null,null,null,null,null,null,null,null,null)
D.eTt=new B.w("Making your video",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.eTE=new B.w("Use this ending",null,A.cr,null,null,null,null,null,null,null,null,null)
D.eTM=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.eTN=new B.w("Upload a different logo",null,A.cb,null,null,null,null,null,null,null,null,null)
D.eU3=new B.w("Delete from the database?",null,A.l2,null,null,null,null,null,null,null,null,null)
D.eU4=new B.w("H",null,A.qL,null,null,null,null,null,null,null,null,null)
D.eUq=new B.w("NGMY Quotes",null,A.dQ,null,null,null,null,null,null,null,null,null)
D.eUP=new B.w("Cover",null,D.aK_,null,null,null,null,null,null,null,null,null)
D.eUT=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.eUU=new B.w("Each page becomes its own slide you can present",null,A.im,null,null,null,null,null,null,null,null,null)
D.eVe=new B.w("Y",null,A.qL,null,null,null,null,null,null,null,null,null)
D.eVt=new B.w("Edit text",null,A.GU,null,null,null,null,null,null,null,null,null)
D.eXB=B.dL("a6_")
D.BO=new C.atT(0,"none")
D.aLy=new C.atT(1,"zipCrypto")
D.aLz=new C.atT(2,"aes")
D.eZV=new F.Np("","",null)
D.f15=new C.Xo(null)
D.f2a=new C.aaJ(null)
D.f2c=new C.aAS(null)
D.f4Y=new C.YC(null)
D.f5d=new C.Z5(null)})();(function staticFields(){$.fRZ=null
$.fS_=null
$.fS0=null
$.fS1=null
$.fAD=B.ud("_lastQuoRemDigits")
$.fAE=B.ud("_lastQuoRemUsed")
$.aud=B.ud("_lastRemUsed")
$.fAF=B.ud("_lastRem_nsh")
$.pA=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a4R=B.Q(x.N,x.I)
$.fyf=!1
$.fWD=B.Q(B.az("kA"),x.N)
$.fWP=B.Q(B.az("kA"),x.G)
$.buW="q"
$.On=0
$.Bf=B.Q(x.N,B.az("al<ym>"))
$.fVe=!1
$.fCa=!1
$.h0g=null
$.htQ=B.Q(x.N,B.az("av<n?>"))
$.Iz=""
$.iM=0
$.fOM=function(){var w=x.N
return B.Q(w,w)}()
$.fOL=B.Q(x.N,x.R)
$.fCv=!1
$.adk=B.Q(x.N,x.G)
$.fDg=0
$.bg6=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hS6","BB",()=>C.b5K(0))
w($,"hS4","a0l",()=>C.b5K(1))
w($,"hS5","h3L",()=>C.b5K(2))
w($,"hS3","fGR",()=>$.a0l().u9(0))
w($,"hS1","h3J",()=>C.b5K(1e4))
w($,"hS2","h3K",()=>B.CI(8))
w($,"hNU","h1M",()=>B.CI(0))
w($,"hO1","h1Q",()=>B.CI(0))
w($,"hO0","h1P",()=>B.bSb(0))
w($,"hVK","h5K",()=>{var v,u,t=x.N
t=B.Q(t,t)
for(v=D.a_W.gdH(D.a_W),v=v.gaf(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hW9","bzf",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.ml(new C.fk2(),v,"biz_plan_blue","Business Plan",B.a([B.bg(u),B.bg(t)],h)),C.ml(new C.fk3(),v,"exec_summary","Executive",B.a([B.bg(s),B.bg(t)],h)),C.ml(new C.fk4(),v,"teal_corporate","Teal Corp",B.a([B.bg(r),B.bg(4279310375)],h)),C.ml(new C.fkf(),q,"geometric_overlap","Geometric",B.a([B.bg(4279203438),B.bg(u)],h)),C.ml(new C.fkk(),p,"midnight_cyan","Midnight Cyan",B.a([B.bg(o),B.bg(n)],h)),C.ml(new C.fkl(),q,"diagonal_hero","Diagonal Hero",B.a([B.bg(m),B.bg(l)],h)),C.ml(new C.fkm(),v,"swot_grid","SWOT Grid",B.a([B.bg(u),B.bg(4278556265)],h)),C.ml(new C.fkn(),v,"layered_chevrons","Chevrons",B.a([B.bg(4280172719),B.bg(k)],h)),C.ml(new C.fko(),q,"split_triangle","Split Panel",B.a([B.bg(s),B.bg(t)],h)),C.ml(new C.fkp(),v,"corporate_navy","Navy Pro",B.a([B.bg(4278982953),B.bg(4282090230)],h)),C.ml(new C.fkq(),p,"cyan_slash","Cyan Slash",B.a([B.bg(o),B.bg(4278630100)],h)),C.ml(new C.fk5(),p,"crimson_impact","Crimson",B.a([B.bg(4282714634),B.bg(4292617766)],h)),C.ml(new C.fk6(),q,"ocean_waves","Ocean Waves",B.a([B.bg(4278413729),B.bg(4286436348)],h)),C.ml(new C.fk7(),p,"mono_geometric","Mono Geo",B.a([B.bg(o),B.bg(n)],h)),C.ml(new C.fk8(),"Luxury","luxury_gold","Gold Luxe",B.a([B.bg(4280031511),B.bg(4293571336)],h)),C.ml(new C.fk9(),q,"hex_infographic","Hex Stack",B.a([B.bg(r),B.bg(4284410580)],h)),C.ml(new C.fka(),q,"photo_banner","Photo Banner",B.a([B.bg(m),B.bg(4281908728)],h)),C.ml(new C.fkb(),v,"process_steps","Process",B.a([B.bg(s),B.bg(k)],h)),C.ml(new C.fkc(),"Minimal","grid_modern","Grid Modern",B.a([B.bg(l),B.bg(t)],h)),C.ml(new C.fkd(),"Luxury","platinum_frame","Platinum",B.a([B.bg(4282865001),B.bg(4293060848)],h)),C.ml(new C.fke(),v,"agenda_cards","Agenda Cards",B.a([B.bg(u),B.bg(4292602622)],h)),C.ml(new C.fkg(),q,"headline_orange","Headline Orange",B.a([B.bg(j),B.bg(i)],h)),C.ml(new C.fkh(),q,"infographic_teal","Infographic",B.a([B.bg(r),B.bg(j)],h)),C.ml(new C.fki(),q,"content_year","Year Feature",B.a([B.bg(j),B.bg(t)],h)),C.ml(new C.fkj(),q,"photo_cta","Photo CTA",B.a([B.bg(m),B.bg(i)],h))],B.az("M<D9>"))})
w($,"hVN","h5M",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["4WpHLfx0HWDd/lOv7I10gk6yjgI="]=a.current})($__dart_deferred_initializers__);