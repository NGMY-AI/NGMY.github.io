((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,V,A3,Ae,Af,A4,Ag,Ah,C={
t5(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fDb(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
I4(d){var w
if(d===0)return $.BM()
if(d===1)return $.a0x()
if(d===2)return $.h6C()
if(Math.abs(d)<4294967296)return C.b6e(A.o.L(d))
w=C.hr6(d)
return w},
b6e(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.t5(4,w)
return new C.nq(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.t5(1,w)
return new C.nq(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.au(d,16)
v=C.t5(2,w)
return new C.nq(v===0?!1:s,w,v)}v=A.o.ak(A.o.gah8(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ak(d,65536)}v=C.t5(v,w)
return new C.nq(v===0?!1:s,w,v)},
hr6(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.P(B.dF("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.BM()
w=$.h6B()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.ah(w)
w[u]=0}v=J.kQ(A.aE.gaL(w))
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
q=new C.nq(!1,r,4)
if(s<0)p=q.lV(0,-s)
else p=s>0?q.dP(0,s):q
return p},
fDc(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.ah(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.ah(g)
g[w]=0}return e+f},
fUK(d,e,f,g){var w,v,u,t,s,r=A.o.ak(f,16),q=A.o.J(f,16),p=16-q,o=A.o.dP(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fm(t,p)
v&2&&B.ah(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dP(t&o,q)}v&2&&B.ah(g)
g[r]=u},
fUF(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16)
if(A.o.J(f,16)===0)return C.fDc(d,e,s,g)
w=e+s+1
C.fUK(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.ah(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hr9(d,e,f,g){var w,v,u,t,s=A.o.ak(f,16),r=A.o.J(f,16),q=16-r,p=A.o.dP(1,r)-1,o=A.o.fm(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dP(u&p,q)
w&2&&B.ah(g)
g[v]=(t|o)>>>0
o=A.o.fm(u,r)}w&2&&B.ah(g)
g[n]=o},
cyp(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hr7(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=v>>>16}w&2&&B.ah(h)
h[e]=v},
b6f(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.au(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.ah(h)
h[u]=v&65535
v=0-(A.o.au(v,16)&1)}},
fUL(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=t&65535
v=A.o.ak(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.ah(g)
g[h]=r&65535
v=A.o.ak(r,65536)}},
hr8(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ec((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nq:function nq(d,e,f){this.a=d
this.b=e
this.c=f},
cyq:function cyq(){},
cyr:function cyr(){},
cys:function cys(d,e){this.a=d
this.b=e},
cyt:function cyt(d){this.a=d},
aO4:function aO4(d,e){this.a=d
this.b=e},
fKP(d,e,f){var w=new C.PW(d,A.o.ak(Date.now(),1000),e)
w.Q=f
return w},
PW:function PW(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a1J:function a1J(d,e){this.a=d
this.b=e},
bD6:function bD6(d){this.a=d
this.c=this.b=0},
h9P(){return new C.bBR()},
bBR:function bBR(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cqC:function cqC(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hqP(d,e,f){var w,v,u,t,s
if(d.gah(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gcMR(d)))
v=f*2+2
u=C.fSp(C.fSr(),64)
t=new C.cbm(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cbn(e,1000,v)
s=new Uint8Array(v)
return A.aE.dA(s,0,t.cAP(w,0,s,0))},
cqA:function cqA(d,e){this.c=d
this.d=e},
aui:function aui(d,e){this.a=d
this.b=e},
cqD:function cqD(d,e,f,g){var _=this
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
b4Y:function b4Y(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cqB:function cqB(){this.a=$},
fUa(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
h9y(d,e){var w
d.$flags&2&&B.ah(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bAr:function bAr(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fIA(d,e){e&=31
return(d&$.pB[e])<<e>>>0},
mZ(d,e){e&=31
return(d>>>e|C.fIA(d,32-e))>>>0},
fSq(d){var w,v=new C.aq3()
if(B.iv(d))v.aG4(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
fSr(){var w=C.fSq(0),v=new Uint8Array(4),u=x.S
u=new C.cbo(w,v,A.Co,5,B.bV(5,0,!1,u),B.bV(80,0,!1,u))
u.l3(0)
return u},
fSp(d,e){var w=new C.cbk(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cbj:function cbj(){},
cbn:function cbn(d,e,f){this.a=d
this.b=e
this.c=f},
cbh:function cbh(){},
aq2:function aq2(d){this.a=d},
cbm:function cbm(d){this.a=$
this.b=d
this.c=$},
cbi:function cbi(){},
cbg:function cbg(){},
aq3:function aq3(){this.b=this.a=$},
cbl:function cbl(){},
cbo:function cbo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cbk:function cbk(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cbf:function cbf(){},
cbe:function cbe(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bIZ:function bIZ(){},
bJ_:function bJ_(d){this.a=d},
hu_(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b6v:function b6v(){},
ckC:function ckC(){},
bJS:function bJS(d,e){this.a=d
this.b=!1
this.c=e},
bJT:function bJT(){},
hCn(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
asX(d){var w=0,v=B.j(x.H),u
var $async$asX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eue?2:4
break
case 2:w=5
return B.b(A.jJ.fL("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$asX)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.jJ.fL("SystemChrome.setEnabledSystemUIOverlays",C.hCn(null),u),$async$asX)
case 6:case 3:return B.h(null,v)}})
return B.i($async$asX,v)},
at_:function at_(d,e){this.a=d
this.b=e},
a6f:function a6f(d){this.a=d},
fzd(d,e){return new C.aSn(e,d,null)},
aSn:function aSn(d,e,f){this.e=d
this.c=e
this.a=f},
axK:function axK(d,e,f,g,h){var _=this
_.ad=d
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
hET(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.far(15,d,f,e,g,h),o=i*i,n=A.k.U(i/1.4142135623730951)
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
far:function far(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
akZ(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$akZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.aes("ngmy_menu_lib_v1_zzslides_index",A.bD),$async$akZ)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d2(s,x.f)
t=B.cy(t,new C.bTZ(),t.$ti.k("F.E"),x.P)
r=B.z(t,B.a2(t).k("F.E"))}else r=B.a([],x.d)
A.d.aX(r,new C.bU_())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$akZ,v)},
al0(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$al0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akZ(),$async$al0)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.S(t,x.P)
for(r=J.aU(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.m(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.O(Date.now(),0,!1).a4().aa()
p=m.a
k=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.ny("ngmy_menu_lib_v1_zzslide_"+B.aI(p,k,""),B.E(["deck",m.ac(),"savedAt",l],t,q),null),$async$al0)
case 7:if(!f){w=5
break}s.m(0,p,B.E(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bf<2>")
s=B.z(new B.bf(s,r),r.k("F.E"))
w=10
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.E(["items",s,"savedAt",new B.O(Date.now(),0,!1).a4().aa()],t,q),null),$async$al0)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al0,v)},
bU0(d){return C.hfc(d)},
hfc(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bU0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aes("ngmy_menu_lib_v1_zzslide_"+B.aI(d,o,""),A.hs),$async$bU0)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.TY(B.Z(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a4(m)
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
return B.i($async$bU0,v)},
al_(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$al_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.akZ(),$async$al_)
case 3:r=f
if(r==null){u=!1
w=1
break}J.n_(r,new C.bU1(d))
w=4
return B.b(B.ny("ngmy_menu_lib_v1_zzslides_index",B.E(["items",r,"savedAt",new B.O(Date.now(),0,!1).a4().aa()],x.N,x.z),null),$async$al_)
case 4:t=f
w=t?5:6
break
case 5:s=B.ad("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aM7("ngmy_menu_lib_v1_zzslide_"+B.aI(d,s,"")),$async$al_)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$al_,v)},
bTZ:function bTZ(){},
bU_:function bU_(){},
bU1:function bU1(d){this.a=d},
hOy(d,e,f){return B.c0(A.K,null,new C.fpJ(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fpJ:function fpJ(d,e,f){this.a=d
this.b=e
this.c=f},
ZL:function ZL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aG0:function aG0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
eQW:function eQW(d,e){this.a=d
this.b=e},
eR_:function eR_(d){this.a=d},
eR0:function eR0(d){this.a=d},
eR1:function eR1(d,e,f){this.a=d
this.b=e
this.c=f},
eQX:function eQX(d){this.a=d},
eQY:function eQY(d){this.a=d},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eQR:function eQR(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQQ:function eQQ(d){this.a=d},
eQS:function eQS(d){this.a=d},
eQT:function eQT(d){this.a=d},
eR5:function eR5(d,e){this.a=d
this.b=e},
eR4:function eR4(d,e){this.a=d
this.b=e},
eQV:function eQV(d,e,f){this.a=d
this.b=e
this.c=f},
eQU:function eQU(d,e,f){this.a=d
this.b=e
this.c=f},
eR2:function eR2(d,e){this.a=d
this.b=e},
eR3:function eR3(d,e){this.a=d
this.b=e},
eR8:function eR8(d){this.a=d},
eR9:function eR9(d,e){this.a=d
this.b=e},
eR7:function eR7(d,e){this.a=d
this.b=e},
eR6:function eR6(){},
fX6(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d2(w,x.f)
v=B.cy(v,new C.eY6(),v.$ti.k("F.E"),x.ea)
u=B.a2(v).k("a5<F.E>")
v=B.z(new B.a5(v,new C.eY7(),u),u.k("F.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a_J(d){return C.hG4(d)},
hG4(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a_J=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.S(x.N,x.ea)
m=new C.fcE(n)
t=4
j=m
i=C
w=7
return B.b(B.a0i("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a_J)
case 7:j.$1(i.fX6(f))
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
return B.b(B.aw(),$async$a_J)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.fX6(B.aR(J.q(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("bf<2>")
o=p.k("a5<F.E>")
j=B
i=B
h=new B.bf(n,p)
g=C
w=13
return B.b(C.eYf(d),$async$a_J)
case 13:p=j.z(new i.a5(h,new g.fcC(f),o),o.k("F.E"))
A.d.aX(p,new C.fcD())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_J,v)},
af1(d,e){return C.hOd(d,e)},
hOd(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$af1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b4(e,new C.fpg(),x.P)
n=B.z(n,n.$ti.k("ai.E"))
r=A.Q.aj(n,null)
q=!1
t=4
w=7
return B.b(B.aeU("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$af1)
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
return B.b(B.aw(),$async$af1)
case 12:p=g
w=13
return B.b(p.an("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$af1)
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
return B.i($async$af1,v)},
eYf(d){return C.hvi(d)},
hvi(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$eYf=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$eYf)
case 7:r=f
q=r.rm("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.km(q,B.T(q).c)
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
return B.i($async$eYf,v)},
adT(d,e){return C.hEL(d,e)},
hEL(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$adT=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$adT)
case 6:s=g
r=B.aZ(x.N)
q=s.rm("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fS(r,q)
J.cf(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.z(q,B.a2(q).k("ck.E"))
w=7
return B.b(s.an("StringList","ngmy_books_deleted_v1_"+r,q),$async$adT)
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
return B.b(C.a_J(d),$async$adT)
case 8:n=g
J.n_(n,new C.fa7(e))
w=9
return B.b(C.af1(d,n),$async$adT)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adT,v)},
hOD(d,e){return B.a7(d,!1).cs(B.eH(new C.fq4(e),!0,null,x.H))},
hrb(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.e8(w.d,new C.czM())},
nS:function nS(d,e,f){this.a=d
this.b=e
this.c=f},
eY6:function eY6(){},
eY7:function eY7(){},
fcE:function fcE(d){this.a=d},
fcC:function fcC(d){this.a=d},
fcD:function fcD(){},
fpg:function fpg(){},
fa7:function fa7(d){this.a=d},
fq4:function fq4(d){this.a=d},
Ww:function Ww(d,e){this.c=d
this.a=e},
auO:function auO(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
czM:function czM(){},
czO:function czO(d,e){this.a=d
this.b=e},
czR:function czR(d){this.a=d},
czS:function czS(d){this.a=d},
czQ:function czQ(){},
czT:function czT(d,e){this.a=d
this.b=e},
czP:function czP(d){this.a=d},
czU:function czU(){},
czN:function czN(d,e){this.a=d
this.b=e},
czV:function czV(){},
czI:function czI(d){this.a=d},
czG:function czG(d){this.a=d},
czH:function czH(d){this.a=d},
czJ:function czJ(d,e){this.a=d
this.b=e},
czF:function czF(d){this.a=d},
czE:function czE(d){this.a=d},
czC:function czC(d,e){this.a=d
this.b=e},
czD:function czD(d){this.a=d},
czL:function czL(){},
czK:function czK(d){this.a=d},
czB:function czB(d,e){this.a=d
this.b=e},
czA:function czA(d,e){this.a=d
this.b=e},
czz:function czz(d,e){this.a=d
this.b=e},
czW:function czW(d){this.a=d},
Wu:function Wu(d,e,f){this.c=d
this.d=e
this.a=f},
aBW:function aBW(d,e,f){this.a=d
this.b=e
this.c=f},
auK:function auK(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cz2:function cz2(d){this.a=d},
cz1:function cz1(d){this.a=d},
cz4:function cz4(d,e,f){this.a=d
this.b=e
this.c=f},
czc:function czc(){},
czd:function czd(d){this.a=d},
cz5:function cz5(d,e,f){this.a=d
this.b=e
this.c=f},
cz3:function cz3(d,e){this.a=d
this.b=e},
cz7:function cz7(d,e){this.a=d
this.b=e},
cz8:function cz8(d,e){this.a=d
this.b=e},
cz9:function cz9(d,e){this.a=d
this.b=e},
cz6:function cz6(d){this.a=d},
czb:function czb(d){this.a=d},
cza:function cza(d,e){this.a=d
this.b=e},
czi:function czi(d){this.a=d},
cze:function cze(d,e){this.a=d
this.b=e},
czf:function czf(d,e){this.a=d
this.b=e},
czg:function czg(d,e){this.a=d
this.b=e},
czh:function czh(d,e){this.a=d
this.b=e},
auM:function auM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hIp(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ea(v,x.cK).bw(new C.fha(),x.H).eN(new C.fhb())}}else if(s)C.fYw()}catch(t){}},
fYw(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ea(v,x.cK).eN(new C.f1k())}catch(u){}},
hIs(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fha:function fha(){},
fhb:function fhb(){},
f1k:function f1k(){},
h2_(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e1(v,w,"").split(":"))},
h1X(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.kD)return null
return A.a.aV(w,14)},
fHl(d){var w
if(d.b!==D.kD)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.aV(w,21)},
hIS(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
h20(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
hIN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ad("\\s+",!0,!1,!1,!1),f=A.a.i(B.aI(d,g," "))
g=B.ad("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aI(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.S(g,g)}v=B.ad("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.ks(0,f)
t=x.N
u=B.cy(u,new C.fia(),B.a2(u).k("F.E"),t)
s=B.z(u,B.a2(u).k("F.E"))
if(s.length===0)return B.S(t,t)
for(u=v.ks(0,f),u=new B.I3(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.PD(A.a.al(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.PD(A.a.aV(f,q)):p)+"\\.?$"
l=B.ad(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cz(w)
if(l==null)return B.S(t,t)
k=B.S(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.m(0,s[j],h)}return k},
hIL(d,e){var w,v,u,t,s,r=B.a2(e).k("ct<1>"),q=B.z(new B.ct(e,r),r.k("F.E"))
A.d.aX(q,new C.fi9())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aN4(w,u,s,0)}return w},
hIP(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a04:$.h8B(),s=x.N,r=B.S(s,s)
for(s=t.gdH(t),s=s.gag(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.m(0,w.b,u)}return r},
h1Y(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
eZ6(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.h2_(q)===e)return q}return null},
hIQ(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.aV(v,u)
return A.d.gI(D.EU).a},
hIR(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.abQ(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.abQ(0,0,0)
v=C.eZ6(b6,b0)
u=C.eZ6(b5,b0)
t=0
if(v!=null&&u!=null){s=C.hIP(b2,C.hIN(C.h1Y(b2),v.r))
if(s.a!==0){u.r=C.hIL(C.h1Y(b4),s)
t=s.a}}r=B.aZ(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.h2_(o[m])
if(l==null||l==="utangulizi")continue
r.G(0,l)}for(q=B.ef(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.eZ6(b6,n)
i=C.eZ6(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fHl(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.h1X(a8)===a0||C.fHl(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.ah(a1,16)
A.d.Pd(a1,new C.fig(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iO
$.iO=a9+1
A.d.G(a1,new C.ex(""+1000*a6+"_"+a9,D.kD,a2,a3,a4,a5,"",24,A.a0,A.bg,A.az,4279310375,A.bf,d.at,D.b8,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cb,0,"","","","","",!1,0));++e}b5.f=new B.O(Date.now(),0,!1)
return new B.abQ(k,t,e)},
hIM(d){var w=C.hIQ(d)
if(d.w==="hati_kuhowa")return C.h1k("",w)
return C.h1j("",w)},
fia:function fia(){},
fi9:function fi9(){},
fig:function fig(d){this.a=d},
fYf(){var w=new B.O(Date.now(),0,!1),v=new C.f0o()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fHt(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fj8(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kD&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
h2d(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fj8(d)
w=B.bg(u)
if(w==null)return!C.fj8(d)
return new B.O(Date.now(),0,!1).a4().cY(w.a4().bL(18e9))},
hJx(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.O(Date.now(),0,!1).a4().aa()},
hjc(d){return A.a.i(d).toLowerCase()},
an7(d){return C.hje(d)},
hje(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$an7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$an7)
case 7:r=f
p=r.rm("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.J(o,C.hN1(),B.T(o).k("J<1,n>")).bZ(0,new C.c3x())
o=B.d4(o,o.$ti.k("F.E"))
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
return B.i($async$an7,v)},
an6(d,e){return C.hjd(d,e)},
hjd(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$an6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.an7(d),$async$an6)
case 3:r=g
if(!J.cf(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$an6)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pJ(r)),$async$an6)
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
return B.i($async$an6,v)},
an8(d,e){return C.hjf(d,e)},
hjf(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$an8=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.an7(d),$async$an8)
case 3:r=g
if(!J.hA(r,o)){w=1
break}t=5
w=8
return B.b(B.aw(),$async$an8)
case 8:q=g
w=9
return B.b(q.an("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pJ(r)),$async$an8)
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
return B.i($async$an8,v)},
Th(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Th=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fAI&&!a5){w=1
break}t=4
w=7
return B.b(B.aw(),$async$Th)
case 7:r=a7
q=B.aR(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.Q.aD(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.S(e,x.I)
for(d=J.jj(p),d=d.gag(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aE(o,J.k(n.a),C.TY(B.Z(f.a(n.b),e,a0)))}$.a55=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.a4(a2)
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
return B.b(B.bU(),$async$Th)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tl("civic_hati_kiapo_uongozi",null,A.ea),$async$Th)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.S(o,x.I)
for(f=x.f,e=J.jj(f.a(J.q(l,"byState"))),e=e.gag(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aE(k,J.k(j.a),C.TY(B.Z(f.a(j.b),o,d)))}for(o=k,o=new B.cN(o,B.a2(o).k("cN<1,2>")).gag(0);o.C();){f=o.d
f.toString
i=f
h=$.a55.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbn())f=d===e.gbn()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a55.m(0,i.a,i.b)}w=20
return B.b(C.an9(),$async$Th)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.a4(a3)
$.ak.$1("[kiapo] cloud load: "+B.t(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fAI=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Th,v)},
an9(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$an9=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$an9)
case 6:s=e
r=B.S(x.N,x.P)
for(o=$.a55,o=new B.cN(o,B.a2(o).k("cN<1,2>")).gag(0);o.C();){n=o.d
n.toString
q=n
J.aE(r,q.a,q.b.ac())}w=7
return B.b(s.an("String","ngmy_civic_hati_kiapo_uongozi_v1",A.Q.aj(r,null)),$async$an9)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.a4(l)
$.ak.$1("[kiapo] local save: "+B.t(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$an9,v)},
aWP(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aWP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Th(!1),$async$aWP)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a55.h(0,t)
r=s==null?null:s.hs()
if(r==null){u=null
w=1
break}u=C.by2(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aWP,v)},
a56(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a56=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.O(Date.now(),0,!1)
o=a1.hs()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a_(h,"__kiapo_video___"))&&A.a.a_(g,"data:"))i.at=null}$.a55.m(0,d,o)
$.fAI=!0
w=3
return B.b(C.an9(),$async$a56)
case 3:w=4
return B.b(B.bU(),$async$a56)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.S(e,x.P)
for(n=$.a55,n=new B.cN(n,B.a2(n).k("cN<1,2>")).gag(0);n.C();){l=n.d
l.toString
q=l
J.aE(r,q.a,q.b.ac())}w=9
return B.b(B.ny("civic_hati_kiapo_uongozi",B.E(["byState",r,"updatedAt",new B.O(Date.now(),0,!1).a4().aa()],e,x.z),null),$async$a56)
case 9:r=a3
u=r
w=1
break
t=2
w=8
break
case 6:t=5
a0=s.pop()
p=B.a4(a0)
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
return B.i($async$a56,v)},
ana(d){var w=0,v=B.j(x.T),u,t,s
var $async$ana=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hP().a3b(A.eu),$async$ana)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.f7(),$async$ana)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aWO(t,d),$async$ana)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ana,v)},
aWO(d,e){return C.hjg(d,e)},
hjg(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aWO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.bU(),$async$aWO)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ad("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aI(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eM().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.hV("media")
w=8
return B.b(p.w5(q,new Uint8Array(B.cl(d)),D.bma),$async$aWO)
case 8:n=p.Bw(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.a4(k)
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
return B.i($async$aWO,v)},
IV(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,l,m,n)},
f_D(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a0,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
fEF(d,e,f,g,h,i,j,k){var w=C.cx(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ei(h,!1,j,A.az,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,g,e,f)},
f_j(d,e,f,g){return C.f_D(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fEG(d,e,f,g,h,i,j,k){var w=C.cx()
return C.ei(A.pw,!1,j,A.az,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bg,A.a0,"",h,w,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,g,e,f)},
fYe(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gI(A.a.e1(v,w,"").split(":"))},
by2(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.S(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.fYe(m)
if(l!=null&&A.a.i(m.r).length!==0)r.m(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.kD&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hs()}h=C.fH_(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.At(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.fYe(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.kD&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bm(a1.z,new C.fh8(a2))}else A.d.bm(a1.z,new C.fh9())
A.d.G(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fj8(a0))a0.ax=a6.f.a4().aa()
return a0},
fH_(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fjV(D.a15),l=C.cx(),k=x.u,j=B.a([C.ei(A.bf,!1,s,A.az,"marriage_locked_bg",r,24,A.bg,A.a0,"",1,C.cx(),m,"","",0,!1,"",0,D.b8,q,2,"",0,0,"",D.cb,D.l3,1,0,0)],k),i=B.a([],k)
i.push(C.IV("NGMY",A.L,236069181,52,A.bg,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.IV("TAREHE:",A.bf,o,16,A.bg,A.I,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fEF("tarehe",0.8059999999999999,0.026,0.18,A.bf,16,p,C.fYf()))
i.push(C.f_j(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.IV("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bg,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.IV("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cx,A.a0,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.f_D(0,0.002,D.fb,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fEG("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fEG("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fEG("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.f_D(268435456,0.175,D.b8,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.IV("VIDEO YA KIAPO",A.bf,o,10,A.bg,A.I,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ei(A.bf,!1,s,A.az,"__kiapo_video__",r,24,A.bg,A.a0,"",0.131,C.cx(),t,"","",0,!1,"",0,D.b8,q,2,"",0,0,"",D.cb,D.l3,0.77,0.115,0.492))
i.push(C.IV("Rais Anayeapa:",A.bf,p,15,A.bg,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.IV("Jina:",A.bf,p,13,A.bg,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fEF("rais_jina",0.195,0.6930000000000001,0.62,A.bf,13,p,""))
i.push(C.f_j(0.195,0.7130000000000001,0.62,n))
i.push(C.IV("Sahihi:",A.bf,p,13,A.bg,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ei(A.bf,!1,s,A.az,"marriage_sign_rais",0,24,A.bg,A.a0,"",0.07,C.cx(),t,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,0.38,0.21500000000000002,0.73))
i.push(C.f_j(0.21500000000000002,0.795,0.38,n))
i.push(C.IV("Tarehe:",A.bf,p,13,A.bg,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fEF("rais_tarehe",0.745,0.74,0.2,A.bf,12,p,C.fYf()))
i.push(C.f_j(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.f_D(0,0.032,D.b8,o,1,"state_box",0.72,0.14,0.875),C.IV("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bg,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.qR(4294967035,t,0,0,j,l,D.pl,"","",u,D.d8)
return C.At(t,t,t,t,D.nx,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cx(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ae2(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae2=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.F(x.q).f.P(D.ep3)
w=1
break}w=3
return B.b(C.Th(!0),$async$ae2)
case 3:w=4
return B.b(C.aWP(p),$async$ae2)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.h2d(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.c0(D.b2X,null,new C.fc0(p),f,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae2)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ce(null,null,!0,null,new C.fc1(),f,null,!0,!0,x.y),$async$ae2)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fH_(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.F(x.q).f
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fH_(p))
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
f0o:function f0o(){},
c3x:function c3x(){},
fh8:function fh8(d){this.a=d},
fh9:function fh9(){},
fc0:function fc0(d){this.a=d},
fbZ:function fbZ(d){this.a=d},
fc_:function fc_(d){this.a=d},
fc1:function fc1(){},
fbX:function fbX(d){this.a=d},
fbY:function fbY(d){this.a=d},
anF:function anF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAM:function aAM(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
dXZ:function dXZ(d){this.a=d},
dXX:function dXX(d){this.a=d},
dXY:function dXY(d){this.a=d},
dY_:function dY_(d){this.a=d},
dY0:function dY0(d){this.a=d},
vH(d,e,f,g,h,i,j,k,l,m,n){var w=C.cx()
return C.ei(e,!1,f,A.az,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",j,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,l,m,n)},
fXT(d,e,f){var w=4291404327
return B.a([C.pA(0,f,D.ey,w,2,"ring_l",f,d-f*0.42,e),C.pA(0,f,D.ey,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
eZL(d,e,f,g,h){var w,v,u="ps_"+g,t=C.pA(4294967288,f,D.ey,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.pA(h,s,D.ey,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.pA(h,f*0.46,D.ey,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
pA(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a0,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
eZK(d,e,f,g,h,i,j,k,l){var w=C.cx(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ei(h,!1,k,A.az,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cx,A.O,"",v,w,null,"","",0,!1,"",0,D.b8,4280172719,2,l,0,0,"",D.cb,D.cJ,g,e,f)},
bvv(d,e,f,g){return C.pA(0,0.002,D.fb,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fXS(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.pA(0,0.036,D.b8,h,1.4,"banner_box_"+d,w,v,e),C.vH(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
h1Z(){var w=new B.O(Date.now(),0,!1),v=new C.fif()
return B.t(v.$1(B.bN(w)))+"/"+B.t(v.$1(B.bB(w)))+"/"+B.bw(w)},
fXU(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.vH(r+".",A.bf,i,13,A.I,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.eZK("witness_"+d+"_"+r+"_name",q,g,p,A.bf,!0,16,j,"[Jina la Shahidi]"),C.bvv(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.vH("Sahihi:",A.bf,j,15,A.a0,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_"+d+"_witness_"+r,0,24,A.bg,A.a0,"",0.05,C.cx(),null,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,s,t,g-0.004),C.bvv(t,g+0.044,s,w)],x.u)},
aeu(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cTZ,D.c1s,D.cNB,D.cPf],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gag(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fDZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fjV(d.d),v=B.a([C.ei(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a0,"",1,C.cx(),w,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l3,1,0,0)],x.u)
A.d.v(v,C.hxw(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hxw(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.vH("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.fXT(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.fXT(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.eZL(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.eZL(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.vH("\ud83c\udf33",A.L,4279898632,22,A.a0,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.pA(0,0.062,D.ey,b1,1.6,"crest_o",0.11,0.445,0.012),C.pA(0,0.046,D.ey,b1,1,"crest_i",0.084,0.458,0.02),C.vH("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.pA(0,0.002,D.fb,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.pA(b9,0.016,D.kE,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.pA(0,0.002,D.fb,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.vH("TAREHE:",A.bf,c0,20,A.I,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.eZK("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bf,!1,21,b9,C.h1Z()),C.bvv(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.vH(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.pA(c0,0.0026,D.b8,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.pA(c3.e,0.138,D.b8,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cx()
c2.push(C.ei(A.bf,!1,b9,A.az,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bg,A.cp,"",0.128,s,a9,"","",0,!1,"",0,D.b8,b3,2,c5,0,0,"",D.cb,D.cJ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.pA(0,0.036,D.b8,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cx()
A.d.v(c2,B.a([s,C.ei(A.L,!1,c0,A.az,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bg,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.b8,b3,2,c7,0,0,"",D.cb,D.cJ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.fXS(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.vH(c9,A.bf,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.eZK("mahari_"+p,0.132,k,m,A.bf,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iO
$.iO=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iO
$.iO=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.ex(""+1000*i+"_"+h,D.cJ,0.09,t+0.004,0.032,0.022,p+".",13,A.I,A.bg,A.az,c0,A.bf,a9,D.b8,b2,b3,2,0,!1,s,0,D.cb,0,"","","","","",!1,0),j,new C.ex(""+1000*f+"_"+e,D.eQ,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a0,A.bg,A.az,b6,A.bf,a9,D.fb,0,b5,0.8,0,!1,g,0,D.cb,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iO
$.iO=p+1
i=Date.now()
h=$.iO
$.iO=h+1
g=Date.now()
f=$.iO
$.iO=f+1
e=Date.now()
a3=$.iO
$.iO=a3+1
A.d.v(d,B.a([new C.ex(""+1000*s+"_"+p,D.cJ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bg,A.az,b7,A.dK,a9,D.b8,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*i+"_"+h,D.eQ,a1,a2,0.046,0.025875,"",24,A.a0,A.bg,A.az,b6,A.bf,a9,D.b8,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*g+"_"+f,D.cJ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bg,A.az,b7,A.L,a9,D.b8,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cb,0,"","","","","",!1,0),new C.ex(""+1000*e+"_"+a3,D.eQ,a0,k,a1+0.046-a0,l,"",24,A.a0,A.bg,A.az,b6,A.bf,a9,D.b8,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cb,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.fXS("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a0V||w===D.a0X||w===D.a0U||w===D.a0W){w=t-0.008
A.d.v(c2,C.eZL(0.21,w,0.044,!0,b0))
A.d.v(c2,C.eZL(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.pA(0,a4,D.b8,c0,1.3,"wit_table_border",0.82,0.09,t),C.pA(c0,a4,D.b8,c0,0,"wit_table_divider",0.0024,0.4988,t),C.pA(0,0.0022,D.fb,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.vH("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.vH("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.fXU("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.fXU("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.pA(0,0.11,D.b8,c0,1.2,"mw_box",0.82,0.09,t),C.vH("MWANDISHI",A.bf,c0,15,A.I,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.vH("Jina:",A.bf,b9,15,A.a0,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.eZK("mwandishi_jina",0.215,w,0.3116,A.bf,!0,15,b9,""),C.bvv(0.215,p,0.3116,b5),C.vH("Sahihi:",A.bf,b9,15,A.a0,0.028,0,"mw_sl",0.09,0.5,w),C.ei(A.bf,!1,b6,A.az,"marriage_sign_mwandishi",0,24,A.bg,A.a0,"",0.044,C.cx(),a9,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,0.3161999999999999,0.5738,s-0.044),C.bvv(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.pA(0,0.032,D.b8,c0,1,"state_box",0.7,0.15,a8),C.vH("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
hIO(d){var w,v,u,t=null,s=B.aX(d.f),r=B.aX(d.r),q=C.fHD(d.d),p=new C.fib(s),o=new C.fic(s),n=d.z,m=n===D.a0V||n===D.a0X||n===D.a0U||n===D.a0W,l=n===D.azg||n===D.a0Y||n===D.azh,k=B.bW(0,B.fC(q,A.B,t,t,A.ci,A.bN,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a0Y?26:16
i.push(new C.fie().$1$size(w))}if(n===D.azi)i.push(D.f1o)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hv,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.ar)
n=B.H(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.u(B.a([p.$0(),D.aHH,p.$1$w(0.9),D.aHH,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(D.b_2,t,n,w,t,t,A.n),t,t,t,t,A.adK,t,t,t))
i.push(A.ar)
i.push(new C.fid(r).$1("NIMETOWE"))
i.push(A.fW)
v=J.dZ(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.JB,new B.cC(A.aY,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.h,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.d5,new B.bE(1,A.bn,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.am(A.V,t,A.aX,A.q,B.a([k,new B.C(A.acm,B.u(i,A.ad,t,A.e,A.j,0,A.p),t)],j),t)},
h1j(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aeu(e,t)
if(r==null)r=A.d.gI(D.EU)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fDZ(r,0.165,y.O,D.cPK,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.pl,"","",s,D.d8)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.At(t,t,t,t,D.nx,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
h1k(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aeu(e,t)
if(r==null)r=A.d.gI(D.EU)
w=C.cx()
v=C.qR(r.e,t,0,0,C.fDZ(r,0.165,y.f,D.cLV,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.pl,"","",s,D.d8)
w=C.cx()
u=A.a.i(d)
if(u.length===0)u=t
return C.At(t,t,t,t,D.nx,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bzm(d,e,f){var w=0,v=B.j(x.T),u
var $async$bzm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.c0(A.K,null,new C.ftu(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bzm,v)},
ae3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fc4(),q),q.k("F.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IV,null,new C.fc5(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae3)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzm(d,"Hati ya Kuhowa",D.EU),$async$ae3)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jx(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$ae3)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h1j(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae3,v)},
ae4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ae4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a5<1>")
p=B.z(new B.a5(i,new C.fc8(),q),q.k("F.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IV,null,new C.fc9(p),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae4)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzm(d,"Hati ya Kuhoweya",D.EU),$async$ae4)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jx(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$ae4)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.h1k(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ae4,v)},
ae5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ae5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a5<1>")
m=B.z(new B.a5(i,new C.fcc(),n),n.k("F.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(D.IV,null,new C.fcd(m),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bzm(d,"Malipo ya Awamu ya Mahari",D.NN),$async$ae5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Jx(d,"Tafuta jimbo\u2026","",A.jG,"Chagua jimbo"),$async$ae5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aeu(s,D.NN)
if(q==null)q=A.d.gI(D.NN)
n=C.cx()
p=C.qR(q.e,null,0,0,C.fDZ(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cHl,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.pl,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.d8)
n=C.cx()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.At(null,null,null,null,D.nx,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ae5,v)},
wF:function wF(d,e){this.a=d
this.b=e},
j9:function j9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fif:function fif(){},
fib:function fib(d){this.a=d},
fid:function fid(d){this.a=d},
fie:function fie(){},
fic:function fic(d){this.a=d},
ftu:function ftu(d,e){this.a=d
this.b=e},
aaX:function aaX(d,e,f){this.c=d
this.d=e
this.a=f},
dPn:function dPn(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPl:function dPl(d,e){this.a=d
this.b=e},
aam:function aam(d,e,f){this.c=d
this.d=e
this.a=f},
fc4:function fc4(){},
fc5:function fc5(d){this.a=d},
fc2:function fc2(d){this.a=d},
fc3:function fc3(d){this.a=d},
fc8:function fc8(){},
fc9:function fc9(d){this.a=d},
fc6:function fc6(d){this.a=d},
fc7:function fc7(d){this.a=d},
fcc:function fcc(){},
fcd:function fcd(d){this.a=d},
fca:function fca(d){this.a=d},
fcb:function fcb(d){this.a=d},
IY(d,e,f,g,h,i,j,k,l,m){var w=C.cx()
return C.ei(e,!1,f,A.az,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bg,h,"",i,w,null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,k,l,m)},
Bu(d,e,f,g,h,i,j,k,l){var w=C.cx()
return C.ei(A.bf,!1,4279310375,A.az,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bg,A.a0,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cb,D.eQ,j,k,l)},
fYz(d,e,f){return C.Bu(0,0.002,D.fb,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bvF(d,e,f,g,h){return B.a([C.Bu(4294967288,0.032,D.b8,4291404327,1.15,"pill_"+d,g,f,e),C.IY(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fEK(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Bu(0,0.002,D.fb,g,1,"orn_l_"+t,u,d,v),C.Bu(h,0.016,D.kE,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Bu(0,0.002,D.fb,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a_6(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.IY(d,A.bf,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cx()
return B.a([v,C.ei(A.L,!1,j,A.az,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cx,A.O,"",0.02,s,null,"","",0,!1,"",0,D.b8,4280172719,2,k,0,0,"",D.cb,D.cJ,t,u,g-0.002),C.fYz(u,g+0.018,t)],x.u)},
fYA(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Bu(h,0.028,D.b8,h,0,"chv_"+d,g,e,f),C.Bu(w,0.024,D.kE,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Bu(w,0.024,D.kE,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.IY(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bvE(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.IY("Sahihi:",A.bf,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_"+d,0,24,A.bg,A.a0,"",0.032,C.cx(),null,"","",0,!1,"",0,D.b8,0,2,"",0,0,"",D.cb,D.eQ,v,w,f-0.006),C.fYz(w,f+0.016,v)],x.u)},
fHE(d){var w,v
for(w=0;w<19;++w){v=D.NZ[w]
if(v.a===d)return v}return null},
hL3(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aeu(A.a.aV(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aeu(A.a.aV(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.aV(k,18)
w=C.aeu(u,D.NN)
v=w==null?l:w.d
if(v==null){w=C.aeu(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.fHE(A.a.aV(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.fZo.a8(0)
$.fZA.a8(0)
t=C.fjV(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fIH(d){var w=0,v=B.j(x.T),u
var $async$fIH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.c0(A.K,null,new C.fuJ(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIH,v)},
wI:function wI(d,e){this.a=d
this.b=e},
nd:function nd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bft:function bft(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fuJ:function fuJ(){},
ab_:function ab_(d){this.a=d},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d){this.a=d},
e1X:function e1X(d,e){this.a=d
this.b=e},
acD:function acD(d,e,f){this.c=d
this.d=e
this.a=f},
fHD(d){return $.fZA.cf(0,d,new C.fjX(d))},
fjV(d){return $.fZo.cf(0,d,new C.fjW(d))},
fr(d){return B.fyl(d>>>16&255,d>>>8&255,d&255,255)},
hAt(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.h_D(4294570461,4293910718,4284234270,u)
case 1:return C.h_D(4294635750,4293975240,t,4292912216)
case 2:w=C.eYl(s,4294505966,r)
C.bvp(w,14,16,p)
C.ke(w,8,9,464,836,u,1.2)
C.Bq(w,2,2,1,1,u,10)
C.Bq(w,478,2,-1,1,u,10)
C.Bq(w,2,852,1,-1,u,10)
C.Bq(w,478,852,-1,-1,u,10)
return w
case 3:return C.eYl(4294966515,4294373082,4289102906)
case 4:return C.hvt(C.eYl(4294376440,4293653998,4290287194))
case 5:w=C.eYl(4294965238,4294437098,4288444980)
C.bvp(w,14,16,4283043359)
C.ke(w,6,7,468,840,u,1)
C.ke(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,n,4294175448)
C.ra(v,n)
C.ke(v,24,24,432,806,4286209070,1)
C.ZV(v,12,12,468,12,o,3,20)
C.ZV(v,12,842,468,842,o,3,20)
C.ZV(v,12,12,12,842,o,3,20)
C.ZV(v,468,12,468,842,o,3,20)
return v
case 7:return C.htH(4294440434,4293518297,4280228630,r)
case 8:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,m,4293911504)
C.ra(v,m)
C.ke(v,28,28,424,798,l,1)
C.f5B(v,28,28,l,k)
C.f5B(v,452,28,l,k)
C.f5B(v,28,826,l,k)
C.f5B(v,452,826,l,k)
return v
case 9:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,j,4294111986)
C.ra(v,j)
C.ke(v,18,18,444,818,4292401368,0.7)
B.ix(v,!0,C.fr(p),0,13,0,853)
return v
case 10:return C.hxj(i,4294173372)
case 11:return C.hyn(4294439140,4293449662)
case 12:return C.htA(h,4294239432)
case 13:return C.hxP(4294244340,4293193448)
case 14:return C.hBZ(4294505710,4293780694)
case 15:return C.eXn(4294966259,4294439138,o,p,q)
case 16:return C.eXn(4294966776,4294178544,o,g,g)
case 17:return C.eXn(4294965493,4294504170,o,4286200650,q)
case 18:return C.eXn(4294966519,4294373862,o,p,p)
case 19:return C.hwu()
case 20:return C.hwv()
case 21:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,h,4293976768)
C.ra(v,h)
C.bvp(v,14,16,p)
B.ix(v,!0,C.fr(u),4,475,4,9)
B.ix(v,!0,C.fr(u),4,475,844,849)
B.ix(v,!0,C.fr(u),4,9,4,849)
B.ix(v,!0,C.fr(u),470,475,4,849)
C.ZV(v,10,12,470,12,u,2,16)
C.ZV(v,10,842,470,842,u,2,16)
C.ZV(v,10,12,10,842,u,2,18)
C.ZV(v,470,12,470,842,u,2,18)
C.Bq(v,2,2,1,1,t,10)
C.Bq(v,478,2,-1,1,t,10)
C.Bq(v,2,852,1,-1,t,10)
C.Bq(v,478,852,-1,-1,t,10)
C.ke(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,s,4294438872)
C.ra(v,s)
C.ke(v,14,16,452,822,o,2.2)
C.ke(v,22,24,436,806,o,1)
C.fG0(v,!1,!1,o,p,p,36,14,16)
C.kr(v,240,20,7,o,!0)
C.kr(v,240,834,7,o,!0)
C.kr(v,18,427,7,o,!0)
C.kr(v,462,427,7,o,!0)
return v
case 23:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,i,4293910712)
C.ra(v,i)
B.ix(v,!0,C.fr(u),0,479,0,20)
B.ix(v,!0,C.fr(u),0,479,834,853)
B.ix(v,!0,C.fr(u),0,20,0,853)
B.ix(v,!0,C.fr(u),460,479,0,853)
B.ix(v,!0,C.fr(f),5,474,5,9)
B.ix(v,!0,C.fr(f),5,474,844,848)
B.ix(v,!0,C.fr(f),5,9,5,848)
B.ix(v,!0,C.fr(f),470,474,5,848)
C.ke(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hc(q,q,A.c5,0,A.dV,854,q,0,3,q,A.c5,480,!1)
C.xw(v,e,4294174404)
C.ra(v,e)
C.bvp(v,14,16,p)
B.ix(v,!0,C.fr(u),3,476,3,8)
B.ix(v,!0,C.fr(u),3,476,845,850)
B.ix(v,!0,C.fr(u),3,8,3,850)
B.ix(v,!0,C.fr(u),471,476,3,850)
C.ke(v,9,10,462,834,t,1)
C.ke(v,14,16,452,822,u,1.8)
C.kr(v,240,8,4,u,!0)
C.kr(v,240,846,4,u,!0)
C.kr(v,8,427,4,u,!0)
C.kr(v,472,427,4,u,!0)
C.kr(v,8,8,3,t,!0)
C.kr(v,472,8,3,t,!0)
C.kr(v,8,846,3,t,!0)
C.kr(v,472,846,3,t,!0)
return v}},
xw(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kt(d,!1,A.d6,new B.Qe(s),r,A.cR,1,0,w-1,k,k);++k}},
ra(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f5()
n.dZ(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aA(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aA(v==null?0:v)
v=d.a
s=v==null?o:v.dL(u,t,o)
if(s==null)s=new B.is()
v=A.o.D(A.k.L(s.gb2(s))-3,0,255)
r=A.o.D(A.k.L(s.gb9())-3,0,255)
q=A.o.D(A.k.L(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.jg(u,t,v,r,q,255)}},
ke(d,e,f,g,h,i,j){var w,v=null,u=C.fr(i),t=e+g
B.kt(d,!0,A.d6,u,v,A.cR,j,e,t,f,f)
w=f+h
B.kt(d,!0,A.d6,u,v,A.cR,j,e,t,w,w)
B.kt(d,!0,A.d6,u,v,A.cR,j,e,e,f,w)
B.kt(d,!0,A.d6,u,v,A.cR,j,t,t,f,w)},
Bq(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.U(j*0.72),8,j-2)
B.kt(d,!0,A.d6,C.fr(i),u,A.cR,2,e,e+g*j,f,f)
B.kt(d,!0,A.d6,C.fr(i),u,A.cR,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kt(d,!0,A.d6,C.fr(i),u,A.cR,1,w,e+g*t,v,v)
B.kt(d,!0,A.d6,C.fr(i),u,A.cR,1,w,w,v,f+h*t)},
h_D(d,e,f,g){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xw(v,d,e)
C.ra(v,d)
B.ix(v,!0,C.fr(f),0,479,0,28)
B.ix(v,!0,C.fr(f),0,479,826,853)
B.ix(v,!0,C.fr(f),0,28,0,853)
B.ix(v,!0,C.fr(f),452,479,0,853)
C.ke(v,5,5,470,844,g,1.1)
C.ke(v,28,28,424,798,g,1.6)
C.Bq(v,2,2,1,1,g,11)
C.Bq(v,478,2,-1,1,g,11)
C.Bq(v,2,852,1,-1,g,11)
C.Bq(v,478,852,-1,-1,g,11)
return v},
eYl(d,e,f){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xw(v,d,e)
C.ra(v,d)
C.ke(v,14,16,452,822,f,1.6)
C.ke(v,20,22,440,810,f,0.8)
return v},
bvp(d,e,f,g){var w,v=C.fr(g)
B.ix(d,!0,v,0,479,0,f-1)
w=854-f
B.ix(d,!0,v,0,479,w,853);--w
B.ix(d,!0,v,0,e-1,f,w)
B.ix(d,!0,v,480-e,479,f,w)},
hvt(d){var w,v,u=4291404327
C.bvp(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kr(d,w,8,3,u,!0)
C.kr(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kr(d,7,v,3,u,!0)
C.kr(d,473,v,3,u,!0)}return d},
f8y(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.j_(e,f),new B.j_(e+g*n,f),new B.j_(e,f+h*n)],t)
B.a_G(d,C.fr(m),s)
w=A.o.D(A.k.U(n*0.17),5,8)
v=A.k.U(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.j_(s,u),new B.j_(e+g*v,u),new B.j_(s,f+h*v)],t)
B.a_G(d,C.fr(k),t)
t=A.k.U(n*0.39)
C.kr(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kr(d,e+g*t,f+h*3,4,k,!0)
C.kr(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kr(d,e+g*t,f,5,k,!0)
C.kr(d,e,f+h*t,5,k,!0)}},
fG0(d,e,f,g,h,i,j,k,l){var w,v
C.f8y(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.f8y(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.f8y(d,k,v,1,-1,e,f,g,h,i,j)
C.f8y(d,w,v,-1,-1,e,f,g,h,i,j)},
ZV(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.U(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.U(e+o*s)
q=A.k.U(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kM(d,!0,A.d6,new B.qo(p),null,A.cR,j,r,q)}},
f7J(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kt(d,!0,A.d6,new B.qo(o),null,A.cR,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kt(d,!0,A.d6,new B.qo(o),null,A.cR,1.4,q,q,p,p+h*r)}},
htH(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hc(o,o,A.c5,0,A.dV,854,o,0,3,o,A.c5,480,!1)
C.xw(n,d,e)
C.ra(n,d)
C.ke(n,20,20,440,814,f,1.2)
C.f7J(n,0,0,1,1,g)
C.f7J(n,480,0,-1,1,g)
C.f7J(n,0,854,1,-1,g)
C.f7J(n,480,854,-1,-1,g)
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
B.kt(n,!0,A.d6,new B.qo(p),o,A.cR,1.2,240,r,60,q)}return n},
f5B(d,e,f,g,h){var w
C.fas(d,!0,C.fr(g),13,e,f)
C.fas(d,!0,C.fr(g),9,e,f)
w=B.a([new B.j_(e,f-4),new B.j_(e+4,f),new B.j_(e,f+4),new B.j_(e-4,f)],x.J)
B.a_G(d,C.fr(h),w)},
kr(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.j_(e,v),new B.j_(u,f),new B.j_(e,t),new B.j_(s,f)],x.J)
if(i){B.a_G(d,C.fr(h),r)
return}B.kt(d,!0,A.d6,C.fr(h),w,A.cR,1,e,u,v,f)
B.kt(d,!0,A.d6,C.fr(h),w,A.cR,1,u,e,f,t)
B.kt(d,!0,A.d6,C.fr(h),w,A.cR,1,e,s,t,f)
B.kt(d,!0,A.d6,C.fr(h),w,A.cR,1,s,e,f,v)},
eXm(d,e,f,g,h,i,j){var w,v=B.a([new B.j_(e,f),new B.j_(e+g*28,f),new B.j_(e,f+h*28)],x.J)
B.a_G(d,C.fr(i),v)
v=e+g*14
w=f+h*14
C.kr(d,v,w,6,j,!0)
C.kr(d,v,w,3,i,!0)},
eXn(d,e,f,g,h){var w=null,v=B.hc(w,w,A.c5,0,A.dV,854,w,0,3,w,A.c5,480,!1)
C.xw(v,d,e)
C.ra(v,d)
C.ke(v,18,18,444,818,f,2)
C.ke(v,26,26,428,802,f,0.9)
if(h!=null)B.ix(v,!0,C.fr(h),28,451,28,34)
C.eXm(v,18,18,1,1,g,f)
C.eXm(v,462,18,-1,1,g,f)
C.eXm(v,18,836,1,-1,g,f)
C.eXm(v,462,836,-1,-1,g,f)
return v},
hwu(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hc(v,v,A.c5,0,A.dV,854,v,0,3,v,A.c5,480,!1)
C.xw(r,u,4294240980)
C.ra(r,u)
C.ke(r,10,12,460,830,t,3.2)
C.ke(r,18,20,444,814,s,1.2)
C.ke(r,24,26,432,802,t,1.8)
C.fG0(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kr(r,w,16,3,t,!0)
C.kr(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kr(r,16,w,3,t,!0)
C.kr(r,464,w,3,t,!0)}return r},
hwv(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hc(t,t,A.c5,0,A.dV,854,t,0,3,t,A.c5,480,!1)
C.xw(p,s,4294373080)
C.ra(p,s)
C.ke(p,16,18,448,818,r,2.4)
C.ke(p,24,26,432,802,4286209044,1)
w=new C.eZC(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fG0(p,!1,!0,r,q,q,34,16,18)
return p},
bw5(d,e,f,g,h,i){B.ix(d,!0,C.fr(i),e,e+g,f,f+h)},
bwV(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kt(d,!1,A.d6,new B.Qe(i),null,A.cR,1,e,w,l,l)}},
hxi(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.J(A.o.ak(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kt(d,!1,A.d6,new B.qo(r),null,A.cR,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.J(A.o.ak(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kt(d,!1,A.d6,new B.qo(r),null,A.cR,1,t,t,f,s);++q}},
hxj(d,e){var w,v,u=null,t=B.hc(u,u,A.c5,0,A.dV,854,u,0,3,u,A.c5,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hxi(t,v,w,30,D.cAR,(A.o.ak(v,30)+A.o.ak(w,30)&1)===0)
C.bw5(t,44,44,392,766,d)
C.bwV(t,44,44,392,766,d,e)
C.ra(t,d)
C.ke(t,44,44,392,766,4292128567,2.2)
C.ke(t,50,50,380,754,4279898632,0.8)
return t},
hym(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.J(g,4)){case 0:C.kr(d,e,f,7,h,!0)
C.kr(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kt(d,!0,A.d6,C.fr(h),o,A.cR,1.6,w,u,v,t)
B.kt(d,!0,A.d6,C.fr(h),o,A.cR,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kt(d,!0,A.d6,new B.qo(p),o,A.cR,1.2,w,v,q,q)}break
default:B.kt(d,!0,A.d6,C.fr(h),o,A.cR,1.5,e-8,e+8,f,f)
B.kt(d,!0,A.d6,C.fr(h),o,A.cR,1.5,e,e,f-8,f+8)
B.kM(d,!0,A.d6,C.fr(h),o,A.cR,2,e,f)}},
hyn(d,e){var w,v,u,t,s=null,r=B.hc(s,s,A.c5,0,A.dV,854,s,0,3,s,A.c5,480,!1)
B.ix(r,!0,C.fr(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hym(r,u,v,w,4292391514)}C.bw5(r,46,46,388,762,d)
C.bwV(r,46,46,388,762,d,e)
C.ra(r,d)
C.ke(r,46,46,388,762,4291404327,1.8)
return r},
fWb(d,e,f,g){C.fas(d,!0,C.fr(g),16,e,f)
C.fas(d,!0,C.fr(g),11,e,f)
C.kr(d,e,f,6,g,!0)
B.kt(d,!0,A.d6,C.fr(g),null,A.cR,1.3,e-14,e+14,f,f)
B.kt(d,!0,A.d6,C.fr(g),null,A.cR,1.3,e,e,f-14,f+14)},
htA(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hc(v,v,A.c5,0,A.dV,854,v,0,3,v,A.c5,480,!1)
B.ix(s,!0,C.fr(4280948752),0,479,0,853)
B.ix(s,!0,C.fr(u),0,479,0,78)
B.ix(s,!0,C.fr(u),0,479,776,853)
for(w=28;w<460;w+=44){C.fWb(s,w,39,t)
C.fWb(s,w,815,t)}C.bw5(s,38,92,404,670,d)
C.bwV(s,38,92,404,670,d,e)
C.ra(s,d)
C.ke(s,38,92,404,670,t,1.8)
C.ke(s,45,99,390,656,4287322667,0.8)
return s},
hxO(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.j_(e,f),new B.j_(q-5,w),new B.j_(q,f-(18-Math.abs(r)*3)),new B.j_(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a_G(d,new B.qo(o),p)}B.kM(d,!0,A.d6,C.fr(4292128567),null,A.cR,3,e,f)},
hxP(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hc(s,s,A.c5,0,A.dV,854,s,0,3,s,A.c5,480,!1)
C.xw(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kt(q,!0,A.d6,new B.qo(v),s,A.cR,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kt(q,!0,A.d6,new B.qo(u),s,A.cR,1.1,v,v,0,853)}B.ix(q,!0,C.fr(r),0,479,0,70)
B.ix(q,!0,C.fr(r),0,479,798,853)
for(t=0;t<5;++t)C.hxO(q,70+t*85,48,4292128567)
C.bw5(q,48,78,384,712,d)
C.bwV(q,48,78,384,712,d,e)
C.ra(q,d)
C.ke(q,48,78,384,712,4291404327,1.6)
return q},
hBZ(d,e){var w,v,u,t=null,s=4279970378,r=B.hc(t,t,A.c5,0,A.dV,854,t,0,3,t,A.c5,480,!1)
B.ix(r,!0,C.fr(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kr(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kM(r,!0,A.d6,new B.qo(u),t,A.cR,1,v,w)}C.bw5(r,40,40,400,774,d)
C.bwV(r,40,40,400,774,d,e)
C.ra(r,d)
C.ke(r,40,40,400,774,4291058750,2)
C.ke(r,48,48,384,758,s,0.8)
return r},
kC:function kC(d,e){this.a=d
this.b=e},
fjX:function fjX(d){this.a=d},
fjW:function fjW(d){this.a=d},
eZC:function eZC(d){this.a=d},
fkA(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hyg(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fED(d){var w,v,u,t=null,s=A.a.cP(d,"{"),r=A.a.nZ(d,"}")
if(s<0||r<=s)return t
try{w=A.Q.aD(0,Af.aeq(A.a.al(d,s,r+1)),t)
v=x.f.b(w)?B.Z(w,x.N,x.z):t
return v}catch(u){return t}},
acZ(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$acZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uB(null,""),$async$acZ)
case 3:n=g
if(A.a.i(n).length===0)throw B.P("AI is not available right now. Please try again later.")
t=B.mE(n)
if(e==null)s=A.h5
else{r=C.hyg(e)
s=B.a([new B.YV(A.cM.gcr().aF(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qg(t,d,s,E.Dp),$async$acZ)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.P(q!=null&&B.Jn(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$acZ,v)},
byu(d){return C.hKK(d)},
hKK(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$byu=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.Q.aj(d.ac(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.acZ(r,null),$async$byu)
case 7:q=f
p=C.fED(q)
if(p==null){u=d
w=1
break}o=d.ayN(p)
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
return B.i($async$byu,v)},
fZY(d){var w,v=F.fGW(d)
v=B.aI(v,"book","newspaper")
if(F.a_Z(d)!=="sw"){w=B.ad("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fow(d,e,f,g){return C.hMB(d,e,f,g)},
hMB(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fow=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fkA(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.h2m()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.acZ('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.fZY(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fow)
case 3:r=m.fED(i)
if(r==null)throw B.P(y.S)
q=new C.yr(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").ayN(r)
t=q.r
if(t.length===0)throw B.P("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a_Z(s)!=="sw"){p=B.ad("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a_Z(A.d.aG(t," "))==="sw"?C.byu(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fow,v)},
by0(d,e,f,g,h){return C.hIn(d,e,f,g,h)},
hIn(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$by0=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fT(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.h2m()
k=A.Q.aj(d.ac(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.acZ('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.fZY(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$by0)
case 3:p=j.fED(a0)
if(p==null)throw B.P(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cs(o)){n=d.ayN(B.Z(o,x.N,x.z))
m=A.Q.aj(n.ac(),null)!==A.Q.aj(d.ac(),null)}else{n=d
m=!1}w=m&&F.a_Z(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.byu(n),$async$by0)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a5J(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by0,v)},
a5J:function a5J(d,e,f){this.a=d
this.b=e
this.c=f},
hPa(d,e){return B.a7(d,!1).cs(B.eH(new C.fuU(e),!0,null,x.H))},
fuU:function fuU(d){this.a=d},
TN:function TN(d,e){this.c=d
this.a=e},
aB4:function aB4(d,e,f,g,h,i,j,k){var _=this
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
e5g:function e5g(d){this.a=d},
e5f:function e5f(){},
e5h:function e5h(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5i:function e5i(){},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4P:function e4P(d,e){this.a=d
this.b=e},
e5_:function e5_(d){this.a=d},
e50:function e50(d,e){this.a=d
this.b=e},
e51:function e51(d){this.a=d},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4R:function e4R(d){this.a=d},
e4S:function e4S(d){this.a=d},
e57:function e57(d){this.a=d},
e58:function e58(d){this.a=d},
e56:function e56(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
e55:function e55(d,e){this.a=d
this.b=e},
e5a:function e5a(d){this.a=d},
e54:function e54(d){this.a=d},
e5b:function e5b(d){this.a=d},
e53:function e53(d){this.a=d},
e5c:function e5c(d,e){this.a=d
this.b=e},
e52:function e52(d,e){this.a=d
this.b=e},
e5d:function e5d(d){this.a=d},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
fjx(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fjx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fXB){w=1
break}r=new C.fjy()
t=4
q=x.s
w=7
return B.b(B.iz(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fjx)
case 7:$.fXB=!0
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
return B.i($async$fjx,v)},
byl(d){return A.Fe[B.mu(d)-1]+", "+A.pd[B.bB(d)-1]+" "+B.bN(d)+", "+B.bw(d)},
hB5(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.cXJ[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fHk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fl(d[w],B.ad("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a5(v,new C.fhQ(),B.T(v).k("a5<1>")))
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
continue}o=new C.fhS(j,h)
n=new C.fhR(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ak(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iK(o.$1(l)))
j.a+=l}return u},
fEn(d,e){var w=new C.eZd()
return A.d.cI(e,0,new C.eZb(w))>=A.d.cI(d,0,new C.eZc(w))},
fUR(d){var w,v,u=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v))
u.N(new B.bj(46,0))
w=d.a
u.N(new B.av(w,0))
v=d.b
u.N(new B.av(w,v-46))
u.N(new B.av(w-46,v))
u.N(new B.av(0,v))
u.N(new B.av(0,46))
u.N(new B.bX())
return u},
yr:function yr(d,e,f,g,h,i,j,k,l,m){var _=this
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
c7c:function c7c(d){this.a=d},
c7a:function c7a(){},
c7b:function c7b(){},
rC:function rC(d,e){this.a=d
this.b=e},
Ag:function Ag(d,e){this.a=d
this.b=e},
kY:function kY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fjy:function fjy(){},
fhQ:function fhQ(){},
fhS:function fhS(d,e){this.a=d
this.b=e},
fhR:function fhR(d,e,f){this.a=d
this.b=e
this.c=f},
eZd:function eZd(){},
eZe:function eZe(){},
eZb:function eZb(d){this.a=d},
eZc:function eZc(d){this.a=d},
aYj:function aYj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
c7d:function c7d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7e:function c7e(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
c7f:function c7f(d){this.a=d},
b8I:function b8I(d){this.a=d},
b8H:function b8H(d,e){this.b=d
this.a=e},
bq_:function bq_(d){this.a=d},
b5f:function b5f(d,e){this.b=d
this.a=e},
bnw:function bnw(d,e){this.b=d
this.a=e},
h4g(d,e){return B.a7(d,!1).cs(B.eH(new C.fuX(e,null),!0,null,x.E))},
fuX:function fuX(d,e){this.a=d
this.b=e},
TQ:function TQ(d,e,f){this.c=d
this.d=e
this.a=f},
aB8:function aB8(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
e6r:function e6r(){},
e6s:function e6s(d){this.a=d},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6l:function e6l(d){this.a=d},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6j:function e6j(d){this.a=d},
e6k:function e6k(d,e,f){this.a=d
this.b=e
this.c=f},
e6g:function e6g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6o:function e6o(d){this.a=d},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6p:function e6p(d,e){this.a=d
this.b=e},
b8e:function b8e(d,e,f){this.b=d
this.c=e
this.a=f},
hPg(d){return B.a7(d,!1).cs(B.eH(new C.fvc(),!0,null,x.I))},
bvR(d,e){var w,v,u,t,s,r,q=B.bV(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fFK(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fvc:function fvc(){},
YO:function YO(d){this.a=d},
o3:function o3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aCq:function aCq(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aK=_.az=_.aq=_.Y=_.b1=_.bc=_.y2=0
_.aZ=null
_.aW=0.25
_.b6=null
_.bE=0.5
_.aN=1
_.c4=_.bO=_.bd=0
_.cT=_.cQ=!1
_.c=_.a=null},
eD0:function eD0(d){this.a=d},
eBT:function eBT(d,e){this.a=d
this.b=e},
eCg:function eCg(d,e){this.a=d
this.b=e},
eCq:function eCq(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBA:function eBA(d){this.a=d},
eBB:function eBB(d){this.a=d},
eC9:function eC9(d,e){this.a=d
this.b=e},
eCa:function eCa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCm:function eCm(d,e,f){this.a=d
this.b=e
this.c=f},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCk:function eCk(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e,f){this.a=d
this.b=e
this.c=f},
eCo:function eCo(d,e){this.a=d
this.b=e},
eBs:function eBs(d){this.a=d},
eBt:function eBt(d){this.a=d},
eBu:function eBu(d){this.a=d},
eBr:function eBr(){},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBq:function eBq(d,e){this.a=d
this.b=e},
eBx:function eBx(){},
eBw:function eBw(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e){this.a=d
this.b=e},
eBm:function eBm(d,e){this.a=d
this.b=e},
eBy:function eBy(d){this.a=d},
eBo:function eBo(d,e){this.a=d
this.b=e},
eBz:function eBz(d){this.a=d},
eBn:function eBn(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCZ:function eCZ(){},
eCR:function eCR(d,e){this.a=d
this.b=e},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCS:function eCS(d,e){this.a=d
this.b=e},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCT:function eCT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCN:function eCN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCU:function eCU(d){this.a=d},
eCV:function eCV(d,e){this.a=d
this.b=e},
eCW:function eCW(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCz:function eCz(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCx:function eCx(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCw:function eCw(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCL:function eCL(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCc:function eCc(d){this.a=d},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCb:function eCb(d,e){this.a=d
this.b=e},
eCf:function eCf(d){this.a=d},
eC5:function eC5(d){this.a=d},
eC4:function eC4(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eC2:function eC2(d,e){this.a=d
this.b=e},
eC1:function eC1(d,e){this.a=d
this.b=e},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d){this.a=d},
eBP:function eBP(d){this.a=d},
eBQ:function eBQ(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBS:function eBS(d){this.a=d},
eB5:function eB5(d){this.a=d},
eB6:function eB6(d){this.a=d},
eB7:function eB7(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d){this.a=d},
eB4:function eB4(d){this.a=d},
eBa:function eBa(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d){this.a=d},
eBG:function eBG(d){this.a=d},
eBH:function eBH(d){this.a=d},
eBI:function eBI(d){this.a=d},
eBf:function eBf(d){this.a=d},
eBg:function eBg(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBi:function eBi(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBe:function eBe(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBd:function eBd(d){this.a=d},
eBl:function eBl(d){this.a=d},
eBc:function eBc(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC0:function eC0(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBY:function eBY(d,e){this.a=d
this.b=e},
eBV:function eBV(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d,e){this.a=d
this.b=e},
eBU:function eBU(d,e){this.a=d
this.b=e},
eC_:function eC_(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCi:function eCi(d,e,f){this.a=d
this.b=e
this.c=f},
eCh:function eCh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCr:function eCr(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d){this.a=d},
eD_:function eD_(d){this.a=d},
bbL:function bbL(d,e){this.b=d
this.a=e},
hKV(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
hKW(d,e){var w,v,u,t,s,r,q,p,o,n=B.ad("\\S+",!0,!1,!1,!1).ks(0,d),m=B.z(n,B.a2(n).k("F.E"))
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
o=B.aI(p,n,"")
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
bwr(){var w=$.bvz,v=$.Oz
$.Oz=v+1
return w+"_"+v},
i_(d,e,f,g,h,i,j){return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a0,"",h,C.bwr(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cb,D.eQ,g,e,f)},
nu(d,e,f,g){var w=f*9
return C.i_(D.ey,d-f/2,e-w/32,f,w/16,g,0)},
hv7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bvz
p=$.Oz
$.Oz=p+1
w.push(new C.ex(q+"_"+p,D.eQ,0,r,1,0.0016,"",24,A.a0,A.bg,A.az,k,A.bf,null,D.b8,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bvz
p=$.Oz
$.Oz=p+1
w.push(new C.ex(q+"_"+p,D.eQ,o,0,0.004,1,"",24,A.a0,A.bg,A.az,k,A.bf,null,D.b8,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}w.push(C.nu(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nu(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i_(D.b8,0.08,0.08,0.5,0.003,v,0),C.i_(D.b8,0.58,0.08,0.004,0.06,v,0),C.i_(D.b8,0.58,0.14,0.34,0.003,v,0),C.i_(D.b8,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i_(D.b8,0.08,0.8,0.004,0.14,t,0),C.i_(D.b8,0.08,0.94,0.6,0.003,t,0),C.nu(0.58,0.08,0.05,e),C.nu(0.92,0.22,0.05,e),C.nu(0.08,0.8,0.05,f),C.nu(0.68,0.94,0.05,f),C.nu(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i_(D.kE,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i_(D.kE,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i_(D.kE,0.7,0.8,0.22,0.12,w|1140850688,0),C.i_(D.kE,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nu(0.5,0.5,1.5,w|335544320),C.nu(0.5,0.5,1.15,w|402653184),C.nu(0.5,0.5,0.8,v|436207616),C.nu(0.95,0.05,0.4,v|855638016),C.nu(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nu(0.85,0.08,0.7,w|1140850688),C.nu(0.1,0.35,0.5,v|855638016),C.nu(0.9,0.62,0.55,v|771751936),C.nu(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i_(D.b8,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i_(D.b8,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i_(D.b8,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i_(D.b8,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nu(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nu(0.5,0.2,0.65,(w|3422552064)>>>0),C.nu(0.5,0.2,0.95,w|855638016),C.i_(D.b8,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i_(D.b8,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i_(D.jj,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i_(D.jj,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i_(D.jj,0.15,0.86,0.6,0.14,1712265002,0),C.nu(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cC7[n]
u=A.o.J(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bvz
l=$.Oz
$.Oz=l+1
w.push(new C.ex(m+"_"+l,D.eQ,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a0,A.bg,A.az,k,A.bf,null,D.ey,q,q,0,0,!1,"",0,D.cb,0,"","","","","",!1,0))}w.push(C.nu(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i_(D.jj,0.35,-0.1,0.3,0.62,w|855638016,0),C.i_(D.jj,0.05,-0.1,0.3,0.55,v,-0.5),C.i_(D.jj,0.65,-0.1,0.3,0.55,v,0.5),C.nu(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i_(D.b8,0.06,0.04,0.88,0.002,e,0),C.i_(D.b8,0.06,0.96,0.88,0.002,e,0),C.i_(D.b8,0.06,0.04,0.004,0.92,e,0),C.i_(D.b8,0.936,0.04,0.004,0.92,e,0),C.i_(D.b8,0.09,0.07,0.82,0.001,w,0),C.i_(D.b8,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i_(D.jk,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i_(D.jk,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i_(D.jk,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i_(D.b8,0,0,0.3,0.09,w|1140850688,0),C.i_(D.b8,0.7,0.9,0.3,0.1,v|1426063360,0),C.i_(D.b8,0.82,0.04,0.12,0.07,w|771751936,0),C.i_(D.b8,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i_(D.ey,0.62,0.02,0.5,0.16,v,0.6),C.i_(D.ey,0.78,0.12,0.4,0.12,u,0.9),C.i_(D.ey,-0.12,0.8,0.5,0.16,u,-0.6),C.i_(D.ey,-0.05,0.9,0.4,0.12,v,-0.9),C.nu(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i_(D.b8,0.09,0.12,0.16,0.006,e,0),C.i_(D.b8,0.05,0.03,0.9,0.001,w,0),C.i_(D.b8,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hHr(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bvz=j
$.Oz=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.ffd()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ei(A.bf,!1,n,A.az,"ngmy_quote_background",m,24,A.bg,A.a0,"",1,C.bwr(),g,"","",0,!1,"",0,D.b8,l,2,"",0,0,"",D.cb,D.l3,1,0,0))
if(a9)A.d.v(q,C.hv7(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ad("[*~^]",!0,!1,!1,!1)
p=C.hKV(B.aI(w,p,""))
o=A.a.q(w,B.ad("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.ffc(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cx,A.a0))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a0))
if(a0!=null&&a0.length!==0)q.push(C.ei(A.bf,!1,n,A.az,"ngmy_quote_logo",m,24,A.bg,A.a0,a1,a3*9/16,C.bwr(),a0,"","",0,!1,a2,0,D.b8,l,2,"",0,0,"",D.cb,D.l3,a3,a4,a5))
return C.qR(s,r,0,0,q,j+"_slide",D.pl,"","","",D.d8)},
qQ:function qQ(d,e){this.a=d
this.b=e},
lJ:function lJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
ffd:function ffd(){},
ffc:function ffc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hln(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bg(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b4(u.a(w.h(d,"extras")),new C.c8z(),x.N)
s=B.z(u,u.$ti.k("ai.E"))}else s=B.a([],x.s)
u=v.bP()
w=w.h(d,"request")
return new C.yt(u,t,s,B.t(w==null?"":w))},
fmT(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fmT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.fXY){w=1
break}$.fXY=!0
t=4
w=7
return B.b(B.aw(),$async$fmT)
case 7:r=e
q=B.aR(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.Q.aD(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jj(p),k=k.gag(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aU(j.a(o.b));h.C();){m=h.gT(h)
l=C.hln(m)
if(l!=null)J.cf(n,l)}$.Br.cf(0,B.t(o.a),new C.fmU(n))}C.fFq()
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
return B.i($async$fmT,v)},
fFq(){var w,v=new B.O(Date.now(),0,!1).bL(-12e8)
for(w=new B.du($.Br,$.Br.r,$.Br.e);w.C();)J.n_(w.d,new C.f4O(v))
$.Br.bm($.Br,new C.f4P())},
aKT(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aKT=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aKT)
case 6:s=a0
m=x.N
l=x.z
r=B.S(m,l)
for(k=new B.cN($.Br,B.a2($.Br).k("cN<1,2>")).gag(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aU(q.b);h.C();){o=h.gT(h)
g=o
J.cf(p,B.E(["at",g.a.a4().aa(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aE(r,i,p)}n=r
w=7
return B.b(s.an("String","ngmy_slides_ai_history_v1",A.Q.aj(n,null)),$async$aKT)
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
return B.i($async$aKT,v)},
hLw(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fFq()
w=$.Br.cf(0,d,new C.fmW())
v=Date.now()
u=B.z(e,B.a2(e).k("ck.E"))
J.oZ(w,0,new C.yt(new B.O(v,0,!1),f,u,g))
C.aKT()},
hLt(d){var w,v=$.Br.h(0,d)
if(v==null||J.ci(v))return
w=J.cB(v)
w.cu(v,0)
if(w.gah(v))$.Br.W(0,d)
C.aKT()},
yt:function yt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8z:function c8z(){},
fmU:function fmU(d){this.a=d},
f4O:function f4O(d){this.a=d},
f4P:function f4P(){},
fmW:function fmW(){},
hLy(d){return A.d.dI(D.uM,new C.fmZ(d),new C.fn_())},
hll(d){var w
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
hlk(d){var w
switch(d.a){case 0:w=D.ag1
break
case 1:w=A.x1
break
case 2:w=A.ah6
break
case 3:w=I.afI
break
case 4:w=A.agw
break
case 5:w=A.lr
break
default:w=null}return w},
hxU(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Nh[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Nh[w]
if(!B.dj(v.toLowerCase(),t,0))u=B.dj(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hlm(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.Q.aj(B.E(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
hLu(d,e,f,g,h){var w=new B.J(D.uM,new C.fmS(),x.eC).aG(0,", "),v=""+d,u=C.h2e(h),t=F.fgC(h),s=C.fZz(g),r=e.q(0,D.G7)?'- New slides get an "emoji".\n':"",q=e.q(0,D.G8)?'- New slides get an "icon3d" from: '+A.d.aG(D.Nh,", ")+".\n":"",p=e.q(0,D.B6)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
hLv(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.J(D.uM,new C.fmV(),x.eC).aG(0,", "),p=new B.f3("")
if(e.q(0,D.G7)){p.a=s
w=s}else w=""
if(e.q(0,D.G8))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Nh,", ")+".\n")
if(e.q(0,D.B6))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.h2e(d)
v=F.fgC(d)
u=C.fZz(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aeG(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.BP(a3,"{"),a5=J.fxW(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.JH(a3,a4,a5+1)
try{w=A.Q.aD(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.ci(v))return a1
u=B.a([],x.aC)
for(o=J.aU(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b4(p.a(J.q(t,a2)),new C.fkS(),m).bZ(0,new C.fkT())
k=B.z(l,l.$ti.k("F.E"))}else k=B.a([],n)
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
f=C.hxU(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c3(B.t(d==null?0:d),a1)
if(d==null)d=0
J.cf(u,new C.a5R(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.a9(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fg(u).b:q))
p=A.d.bf(D.uM,new C.fkU(r))?r:a7
o=C.f42(J.q(w,"logo_frame"),D.Aw)
n=C.f42(J.q(w,"logo_ring"),D.Ar)
m=C.f42(J.q(w,"photo_frame"),D.Aw)
l=C.f42(J.q(w,"photo_ring"),D.Ar)
return new C.aos(q,p,u,o,n,m,l)}catch(a0){return a1}},
a_v(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
h1m(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.B7),f7=f6?C.hrY():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f5()
v.dZ(f7.w+1)
u=f7.a
t=B.bh(u.b,!0,x.dL)
A.d.fv(t,v)
s=u.c
s=new C.nh("luxe",u.a,A.lr,t,u.e,u.f,B.a([s,u.d,s],x.t),D.d8)
w=s}if(w==null)w=C.hLy(f9.b)
r=g2.q(0,D.a1e)||f6
q=g2.q(0,D.G7)
p=g2.q(0,D.P4)
o=new C.ffh()
n=B.a([],x.g)
m=new C.ffk(o,w,r)
l=new C.ffj(o,r)
k=new C.ffi(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.bf(u,new C.ffg(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.J(b1,a3.length)]
b4=A.o.J(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.J(b1,5)
b9=D.cDv[b8]
c0=D.cCz[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ekj.q(0,b2.a)){c7=b0+1
c5=g8[A.o.J(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.m7,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.pm,500,f2,f0))
c1.push(l.$8$fx$key(D.b8,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.P1
break A}if("section"===d2){c1.push(l.$8$fx$key(D.ey,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kE,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.b8,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.B4
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.ey,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.m7,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cx,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.pm,500,f2,f0))
d3=D.m6
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.ey,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.b8,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.te:D.cb
c1.push(new C.ex(b4,D.a1c,0.64,0.05,0.27,0.9,g1,24,A.a0,A.bg,A.az,4279310375,A.bf,e4,D.b8,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.m6
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.ey,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.ey,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.m7,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.pm,450,f2,f0))
c1.push(l.$8$fx$key(D.b8,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.P1
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.ey,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.ey,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.b8,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.b8,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.G5,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.m6}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.d8,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.htz(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.J(b1,b8.length)]}else b8=r?D.cZI[A.o.J(b1,6)]:s
n.push(new C.ln(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.At(e4,e4,e4,e4,D.B3,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.al(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fhG(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fhG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.B6)
n=e.q(0,D.G8)
if(!o&&!n){u=D.a0a
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fhJ(o,s[r],n,$.hwI,r).$0())
s=B.S(x.S,x.aH)
m=J
w=3
return B.b(B.iz(t,x.e),$async$fhG)
case 3:q=m.aU(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.m(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fhG,v)},
fgF(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fgF=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.hLv(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aKf(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fgF)
case 3:u=s.aKA(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fgF,v)},
by1(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$by1=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aZ(x.N)
for(s=B.ef(f,f.r,B.a2(f).c),r=s.$ti.c;s.C();){q=s.d
t.G(0,(q==null?r.a(q):q).b)}C.hLw(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aeG(i,"colorful")
t=C.hLu(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aKf(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.h5),$async$by1)
case 3:u=o.aKA(m,f,h,g,D.dCq,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$by1,v)},
aKf(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aKf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.uB(null,""),$async$aKf)
case 3:n=i
if(A.a.i(n).length===0)throw B.P("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.mE(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qg(t,d,g,null),$async$aKf)
case 7:q=i
p=q.b
if(p!=null){o=C.aeG(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.P(s!=null&&B.Jn(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aKf,v)},
aKA(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aKA=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.B6)||e.q(0,D.G8)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d4(e,x.Q)
t.W(0,D.B6)}w=6
return B.b(C.fhG(d,t),$async$aKA)
case 6:s=k
w=4
break
case 5:s=D.a0a
case 4:t=d.c
w=A.d.bf(t,new C.eZ8())?7:9
break
case 7:r=$.h36
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aKA)
case 10:q=k
p=q!=null?A.Q.aj(q.ac(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.h1m(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hlm(new C.aos(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("J<1,n>")
t=B.z(new B.J(m,new C.eZ9(),n),n.k("ai.E"))
l.cx=t
t=B.a2(e).k("jA<ck.E,n>")
t=B.z(new B.jA(e,new C.eZa(),t),t.k("F.E"))
l.cy=t
l.ay=e.q(0,D.P4)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aKA,v)},
fI2(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aZ(x.Q)
for(v=0;v<6;++v){u=D.a_6[v]
if(A.d.q(t,u.b))w.G(0,u)}return w},
hPl(d){return B.c0(A.K,null,new C.fvo(),d,!0,!0,!0,null,!1,!1,x.I)},
hsz(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cM.gcr().aF(d)},
hPk(d,e,f){return B.c0(A.K,null,new C.fvn(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fI3(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fI4(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
f42(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.bf(e,new C.f43(w))?w:""},
fZz(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
h34(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aeG(a1==null?"":a1,a0),a3=C.aeG(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a5<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.qC(new B.a5(r,new C.fn0(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("F.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.A(m.b,l.b),new B.A(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.A(j[h],i[h]))
k.push(new B.A(m.e,l.e))
g=B.z(new B.a5(k,new C.fn1(),v),r)
A.d.aX(g,new C.fn2())
if(g.length===0)continue
f=new C.fn3(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
hLP(d){var w=d.toLowerCase(),v=B.ad("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aAl
v=B.ad("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEl
v=B.ad("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dEm
return null},
fZa(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bK(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dF(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
hLz(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.nx
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cJ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.fZa(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.fZa(n,i,v,u))if(n.w>10){f=h+1
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
hLx(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aeG(o,"colorful")
if(n==null)throw B.P("That earlier version could not be read.")
w=B.aZ(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a_6[r]
if(q.b===s)w.G(0,q)}}v=C.fI3(e)
u=C.fI4(e)
p=C.h1m(n,D.a0a,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("J<1,n>")
o=B.z(new B.J(o,new C.fmX(),u),u.k("ai.E"))
p.cx=o
o=w.$ti.k("jA<ck.E,n>")
o=B.z(new B.jA(w,new C.fmY(),o),o.k("F.E"))
p.cy=o
p.ay=w.q(0,D.P4)
return p},
hP7(d,e,f){return B.c0(A.K,null,new C.fuB(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hrY(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f5()
s.dZ(t)
w=D.cir[s.aA(10)]
v=new C.e1m(s)
u=x.N
return new C.e1l(w,s.aA(4),J.fg(v.$1$2(D.cHx,1,x.ff)),w.r[s.aA(3)],v.$1$2(D.cVV,2+s.aA(2),u),v.$1$2(D.cPU,2,u),v.$1$2(D.cYp,4,x.fP),t)},
htz(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f5()
a1.dZ(a5.w+a3*13)
w=new C.eVI(a4)
v=new C.eVK(a4,d)
u=new C.eVJ(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cJ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fF(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.J(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.ey,0.1+a1.af()*0.45,0.05+a1.af()*0.3,0.45,0.75,C.a_v(a0,52),"lux_spot",a5.vG(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.b8,0,0,1,1,0,"lux_back",a5.vG(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.b8,0,0,1,1,0,"lux_back2",a5.aB7(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.022,0.038,0.956,0.924,0,g,a5.vG(0,f),D.d8,150,C.a_v(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.018,0.032,0.964,0.936,0,g,a5.vG(0,f),D.d8,120,C.a_v(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.b8,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.d8,260,C.a_v(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.b8,0,0,1,1,0,"lux_filigree",a5.vG(0,"filigree"),D.d8,200))
break
default:a2.push(w.$10$anim$delay(D.b8,0.08,0.06,0.84,0.004,C.a_v(a0,208),"lux_rule",a5.aB7(0,"shimmer",r),D.td,150))
a2.push(w.$10$anim$delay(D.b8,0.08,0.936,0.84,0.004,C.a_v(a0,144),"lux_rule2","",D.G5,220))}l=!A.d.bf(a2,new C.eVH())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.vG(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.vG(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a_v(r,242)
j=a5.vG(0,"orbit")
i=s===D.b8?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.pm,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.ey,t-0.007,0.9495,0.014,0.025,C.a_v(r,242),"lux_g2",a5.vG(0,"orbit"),D.pm,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.b8,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fF(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.b8,0,0,1,1,0,"lux_velvet",a5.vG(0,"velvet")))},
nh:function nh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmZ:function fmZ(d){this.a=d},
fn_:function fn_(){},
v9:function v9(d,e){this.a=d
this.b=e},
a5R:function a5R(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aos:function aos(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fmS:function fmS(){},
fmV:function fmV(){},
fkS:function fkS(){},
fkT:function fkT(){},
fkU:function fkU(d){this.a=d},
ffh:function ffh(){},
ffk:function ffk(d,e,f){this.a=d
this.b=e
this.c=f},
ffj:function ffj(d,e){this.a=d
this.b=e},
ffi:function ffi(d,e){this.a=d
this.b=e},
ffg:function ffg(d){this.a=d},
fhJ:function fhJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhH:function fhH(d){this.a=d},
fhI:function fhI(d){this.a=d},
eZ8:function eZ8(){},
eZ9:function eZ9(){},
eZa:function eZa(){},
fvo:function fvo(){},
Zj:function Zj(d){this.a=d},
aEk:function aEk(d,e,f,g,h){var _=this
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
eIV:function eIV(d,e,f){this.a=d
this.b=e
this.c=f},
eIW:function eIW(d,e){this.a=d
this.b=e},
eIT:function eIT(d,e){this.a=d
this.b=e},
eIU:function eIU(d,e){this.a=d
this.b=e},
eIS:function eIS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eIN:function eIN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eIR:function eIR(d,e){this.a=d
this.b=e},
eIM:function eIM(d,e){this.a=d
this.b=e},
eIQ:function eIQ(d,e){this.a=d
this.b=e},
eIL:function eIL(d,e){this.a=d
this.b=e},
eIO:function eIO(d){this.a=d},
eIP:function eIP(d,e){this.a=d
this.b=e},
eIB:function eIB(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eID:function eID(d,e){this.a=d
this.b=e},
eII:function eII(d,e){this.a=d
this.b=e},
eJ8:function eJ8(d){this.a=d},
eJ9:function eJ9(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJa:function eJa(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJc:function eJc(d){this.a=d},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eJd:function eJd(d){this.a=d},
eJ4:function eJ4(d,e){this.a=d
this.b=e},
eJe:function eJe(d){this.a=d},
eJ3:function eJ3(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJg:function eJg(d){this.a=d},
eJ1:function eJ1(d,e){this.a=d
this.b=e},
eJh:function eJh(d){this.a=d},
eJ0:function eJ0(d){this.a=d},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJ_:function eJ_(d,e){this.a=d
this.b=e},
eJj:function eJj(d){this.a=d},
eJb:function eJb(d){this.a=d},
eIZ:function eIZ(d,e){this.a=d
this.b=e},
eIJ:function eIJ(d,e,f){this.a=d
this.b=e
this.c=f},
eIK:function eIK(d,e,f){this.a=d
this.b=e
this.c=f},
eIY:function eIY(d,e){this.a=d
this.b=e},
eIX:function eIX(d,e){this.a=d
this.b=e},
fvn:function fvn(d,e){this.a=d
this.b=e},
Zi:function Zi(d,e,f){this.c=d
this.d=e
this.a=f},
aEj:function aEj(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eIu:function eIu(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIx:function eIx(d){this.a=d},
eIy:function eIy(d){this.a=d},
eIt:function eIt(d,e){this.a=d
this.b=e},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIA:function eIA(d,e){this.a=d
this.b=e},
f43:function f43(d){this.a=d},
aYH:function aYH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAY:function aAY(d,e,f){this.c=d
this.d=e
this.a=f},
bgl:function bgl(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
e1o:function e1o(d){this.a=d},
e1n:function e1n(){},
bdY:function bdY(d,e){this.b=d
this.a=e},
fn0:function fn0(d){this.a=d},
fn1:function fn1(){},
fn2:function fn2(){},
fn3:function fn3(d){this.a=d},
ap1:function ap1(d,e){this.a=d
this.b=e},
fmX:function fmX(){},
fmY:function fmY(){},
fuB:function fuB(d,e){this.a=d
this.b=e},
XG:function XG(d,e,f){this.c=d
this.d=e
this.a=f},
ayq:function ayq(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
daR:function daR(d){this.a=d},
daS:function daS(d){this.a=d},
daT:function daT(d,e){this.a=d
this.b=e},
daW:function daW(d){this.a=d},
daX:function daX(d,e){this.a=d
this.b=e},
daV:function daV(d,e){this.a=d
this.b=e},
daY:function daY(d){this.a=d},
daU:function daU(d,e){this.a=d
this.b=e},
boB:function boB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
e1l:function e1l(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
e1m:function e1m(d){this.a=d},
eVI:function eVI(d){this.a=d},
eVK:function eVK(d,e){this.a=d
this.b=e},
eVJ:function eVJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eVH:function eVH(){},
aIQ:function aIQ(){},
fGT(d){var w,v,u
try{w=A.Q.aD(0,d,null)
if(x.f.b(w)){v=B.v1(B.Z(w,x.N,x.z))
return v}}catch(u){}return null},
aYD:function aYD(d,e,f){this.c=d
this.d=e
this.a=f},
bhY:function bhY(d,e){this.c=d
this.a=e},
hHU(d){return A.d.dI(D.Fb,new C.fgo(d),new C.fgp())},
hHV(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.aV(t,6)
if(w.length===0)return null
v=new B.a5(D.Fb,new C.fgq(w),x.b4)
if(!v.gag(0).C())return null
u=v.gI(0)
return new C.js("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
kV:function kV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fgo:function fgo(d){this.a=d},
fgp:function fgp(){},
fgq:function fgq(d){this.a=d},
mr(d,e,f,g,h){return new C.Dk(f,g,d)},
huI(d){var w=d.z,v=B.T(w).k("a5<1>")
w=B.z(new B.a5(w,new C.eXG(),v),v.k("F.E"))
d.z=w
d.x=""},
dp(d,e){var w=$.IN
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dq(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.az,"",d,24,A.bg,A.a0,"",e,"design_"+C.cx(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cb,D.eQ,j,k,l)},
h19(d,e){var w
C.huI(d)
w=A.d.dI($.bzZ(),new C.fee(e),new C.fef())
$.IN=w.a
d.x=w.a;++d.y
try{w.bH(d)}finally{$.IN=""}d.z=B.bh(d.z,!0,x.F)},
Dk:function Dk(d,e,f){this.a=d
this.b=e
this.e=f},
eXG:function eXG(){},
fmt:function fmt(){},
fmu:function fmu(){},
fmv:function fmv(){},
fmG:function fmG(){},
fmL:function fmL(){},
fmM:function fmM(){},
fmN:function fmN(){},
fmO:function fmO(){},
fmP:function fmP(){},
fmQ:function fmQ(){},
fmR:function fmR(){},
fmw:function fmw(){},
fmx:function fmx(){},
fmy:function fmy(){},
fmz:function fmz(){},
fmA:function fmA(){},
fmB:function fmB(){},
fmC:function fmC(){},
fmD:function fmD(){},
fmE:function fmE(){},
fmF:function fmF(){},
fmH:function fmH(){},
fmI:function fmI(){},
fmJ:function fmJ(){},
fmK:function fmK(){},
fee:function fee(d){this.a=d},
fef:function fef(){},
iJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ei(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.b8,4280172719,2,m,n,0,"",o,D.cJ,p,q,r)},
BH(d,e,f,g,h,i,j,k,l){return C.ei(A.bf,!1,4279310375,A.az,"",d,24,A.bg,A.a0,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cb,D.eQ,j,k,l)},
byJ(){var w=new B.O(Date.now(),0,!1)
return A.hV[B.bB(w)-1]+" "+B.bN(w)+", "+B.bw(w)},
ek:function ek(d,e,f){this.a=d
this.b=e
this.c=f},
bwb(d){return new B.iD((A.o.au(d,24)&255)/255,(A.o.au(d,16)&255)/255,(A.o.au(d,8)&255)/255,(d&255)/255)},
hzt(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aki(A.cw.aF(A.d.gai(d.split(","))))
return w}catch(v){return null}},
hzx(d){var w=d.r
if(!d.cy)return w
return new B.J(B.a(w.split("\n"),x.s),new C.f3R(),x.dv).aG(0,"\n")},
hzw(d){switch(d.a){case 2:return A.mR
case 1:case 5:return A.euy
default:return A.Qn}},
hzq(d){switch(d.a){case 2:return A.tK
case 1:case 5:return A.S5
default:return A.a5Q}},
hzu(d,e){var w,v=null,u=d.ay,t=A.o.au(u,24),s=A.o.au(d.ch,24),r=(t&255)===0?v:C.bwb(u),q=(s&255)===0?v:C.bwb(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.n1(q,p,A.ki)
w=new B.p_(t,t,t,t)}switch(d.ax.a){case 1:return B.lc(v,v,v,new B.kj(r,w,v,A.a72,v),v,v,v,v)
case 4:return u?new B.fF(v,v,v):B.w9(B.lc(v,v,q,v,p+0.4,v,v,v))
default:return B.lc(v,v,v,new B.kj(r,w,B.uH(4),A.hk,v),v,v,v,v)}},
hzs(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.eQ?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hzq(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hzx(d)
t=C.bwb(d.Q)
s=d.x.a>=700?A.eb:A.ug
r=d.y===A.cx?A.wE:A.aeB
q=d.z
p=new B.BS(w,l,l,B.f_(u,l,l,l,B.fW(l,t,1===q.a?A.aIF:A.aIE,l,l,l,l,l,l,A.dk,l,l,v,r,s,l,!0,l,l,l,l),C.hzw(d.as)))
break
case 1:case 4:o=C.hzt(d.at)
n=i===D.l3&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.w9(B.f_(w,l,l,l,B.fW(l,A.qF,l,l,l,l,l,l,l,A.dk,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Gh(o,n?A.a6Z:A.Sr,l,l)
break
case 3:w=new B.n1(A.Gn,1,A.ki)
u=B.uH(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lc(A.tK,B.f_(t,l,l,l,B.fW(l,D.dMP,l,l,l,l,l,l,l,A.dk,l,l,11,l,A.eb,l,!0,l,l,l,l),A.mR),l,new B.kj(E.aBk,new B.p_(w,w,w,w),u,A.hk,l),l,l,l,l)
break
case 2:p=C.hzu(d,e)
break
case 5:p=C.hzr(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.fU3(-w,p)
w=i===D.cJ
if(w){m=A.o.au(d.Q,24)&255
if(m<255)p=new B.apL(m/255,p)}if(w)return new F.vg(k,l,j,l,new B.Ql(new B.ki(g,g,f,1/0),p))
if(i===D.kD){i=new B.n1(A.Gn,1,A.ki)
i=B.lc(A.tK,p,l,new B.kj(A.oi,new B.p_(i,i,i,i),B.uH(4),A.hk,l),l,l,D.bj6,l)}else i=p
return new F.vg(k,l,j,l,new B.fF(g,f,i))},
hzv(d,e,f,g){var w,v=null,u=C.bwb(d.e),t=d.f
t=B.a([F.fSI(t!=null?B.lc(v,v,v,new B.kj(v,v,v,A.hk,new B.aTb(E.S6,A.a5L,B.a([u,C.bwb(t)],x.cR),v)),v,v,v,v):B.lc(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.J(w,new C.f3Q(f,g),B.T(w).k("J<1,f4>")))
return F.cl4(t)},
fI6(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fI6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a26(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Uw(A.uW,A.Gk,D.bka,null,null,null,!1,null)
o=new B.Az(o,new C.fn9(607,787,p,d))
o.L2(n,null)
r.push(o)}u=n.jz(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fI6,v)},
hzr(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fGT(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gagK()
if(h==null)h=A.arB
j=B.rO(4279308564)
w=B.uH(18)
v=new B.n1(B.rO(4287531653),3,A.ki)
u=i.length===0?"My links":i
u=B.a([B.w9(B.f_(u,m,m,m,B.fW(m,A.oi,m,m,m,m,m,m,m,A.dk,m,m,12,m,A.eb,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.w9(B.f_(A.a.i(l.c),m,m,m,D.eBk,m)))
u.push(new B.fF(m,8,m))
for(t=B.dc(h,0,B.dJ(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bR(t,t.gH(0),s.k("bR<ai.E>")),s=s.k("ai.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.rO(4280690220)
o=new B.a74(8,8)
n=A.a.i(r.b)
u.push(new B.ni(D.bdq,new C.atV(new C.afH(q),B.lc(m,B.f_(n.length===0?A.a.i(r.c):n,m,m,m,D.eDt,A.mR),m,new B.kj(p,m,new B.ag7(o,o,o,o),A.hk,m),m,m,D.bjv,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.w9(B.f_(k,m,m,m,D.eCN,m))
u.push(new C.atV(C.h9E(k),t))}return B.lc(m,B.xP(u,A.Ji,A.l2),m,new B.kj(j,new B.p_(v,v,v,v),w,A.hk,m),m,m,D.bef,m)},
f3R:function f3R(){},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
fn9:function fn9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aet(d){var w,v
for(w=0;w<32;++w){v=D.F2[w]
if(v.a===d)return v}return null},
fWE(d){var w,v,u=A.a.cP(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cw.aF(A.a.aV(d,u+1))
return w}catch(v){return null}},
cM(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
h4c(d,e){return B.a7(d,!1).cs(B.eH(new C.fte(e),!0,null,x.fB))},
h4b(d,e){return B.c0(A.K,null,new C.ftd(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iM:function iM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Db:function Db(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LI:function LI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfI:function bfI(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a5$=f
_.c=_.a=null},
dL7:function dL7(d){this.a=d},
dL6:function dL6(d,e,f){this.a=d
this.b=e
this.c=f},
dL5:function dL5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bnb:function bnb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHI:function eHI(d,e){this.a=d
this.b=e},
baR:function baR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aWy:function aWy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c38:function c38(){},
c39:function c39(d){this.a=d},
c3a:function c3a(d,e,f){this.a=d
this.b=e
this.c=f},
c3b:function c3b(d,e,f){this.a=d
this.b=e
this.c=f},
fte:function fte(d){this.a=d},
Xe:function Xe(d,e){this.c=d
this.a=e},
awR:function awR(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d0l:function d0l(d,e,f){this.a=d
this.b=e
this.c=f},
d0q:function d0q(d){this.a=d},
d0r:function d0r(d){this.a=d},
d0p:function d0p(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0o:function d0o(d,e){this.a=d
this.b=e},
d0t:function d0t(d){this.a=d},
d0n:function d0n(d){this.a=d},
d0u:function d0u(d){this.a=d},
d0m:function d0m(d,e){this.a=d
this.b=e},
d0v:function d0v(d,e){this.a=d
this.b=e},
ftd:function ftd(d){this.a=d},
ftc:function ftc(d){this.a=d},
ftb:function ftb(d,e,f){this.a=d
this.b=e
this.c=f},
fta:function fta(d,e){this.a=d
this.b=e},
aIj:function aIj(){},
hPj(d){return B.c0(A.K,null,new C.fvm(),d,!0,!0,!0,null,!1,!1,x.N)},
fvm:function fvm(){},
Xz:function Xz(d){this.a=d},
bck:function bck(d){this.d=d
this.c=this.a=null},
d6R:function d6R(d){this.a=d},
d6S:function d6S(d,e){this.a=d
this.b=e},
d6T:function d6T(d){this.a=d},
hw4(d){var w,v=d.split("@")
if(v.length>1){w=B.c3(v[1],16)
if(w!=null)return B.aX(w)}return D.w6},
hJO(d){var w,v=A.d.gI(d.split("@"))
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
hJN(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hw4(d)
switch(q){case"shimmer":return B.nm(A.a6b,g,new C.fjQ(p,A.k.J(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.bbI(e,f,p,r),A.as),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dO(B.e5(A.B,B.d5(C.fzd(g,B.a2Y(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.bbp(e,p,r),A.as),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.d5(B.es(A.B,e*0.5,B.e5(A.B,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.de()
t=u.a
t.$flags&2&&B.ah(t)
t[11]=0.002
u.fk(e)
u.me(Math.sin(e)*0.3)
return B.dO(B.fl(A.B,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.am(A.V,r,A.aX,A.q,B.a([B.e3(B.b2(r,r,r,new C.bk8(e,f,p,r),A.as),!0,r),g],x.p),r)
case"bokeh":return new B.am(A.V,r,A.aX,A.q,B.a([B.e3(B.b2(r,r,r,new C.b6n(e,f,p,r),A.as),!0,r),g],x.p),r)
case"aurora":return new B.am(A.V,r,A.aX,A.q,B.a([B.e3(B.b2(r,r,r,new C.b6_(e,f,p,r),A.as),!0,r),g],x.p),r)
case"velvet":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.bqV(e,p,r),A.as),!0,r)],x.p),r)
case"sparkle":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.bnZ(e,f,p,r),A.as),!0,r)],x.p),r)
case"sheen":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.bn7(e,p,r),A.as),!0,r)],x.p),r)
case"filigree":return new B.am(A.V,r,A.aX,A.q,B.a([g,B.e3(B.b2(r,r,r,new C.baK(e,p,r),A.as),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.am(A.B,r,A.a9,A.h,B.a([B.bW(0,B.e3(B.e5(A.B,B.bQ(r,new B.o(r,r,r,r,r,new B.bS(A.B,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.b7),1.6+s*0.15,r,r),!0,r),0,0,0),B.es(A.B,s*0.06,B.e5(A.B,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fjQ:function fjQ(d,e){this.a=d
this.b=e},
bbI:function bbI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbp:function bbp(d,e,f){this.b=d
this.c=e
this.a=f},
bk8:function bk8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6n:function b6n(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b6_:function b6_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqV:function bqV(d,e,f){this.b=d
this.c=e
this.a=f},
bnZ:function bnZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bn7:function bn7(d,e,f){this.b=d
this.c=e
this.a=f},
baK:function baK(d,e,f){this.b=d
this.d=e
this.a=f},
d02:function d02(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
wH:function wH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fjT(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.kD},
hJT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aX(j,new C.fjU())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gI(B.aN4(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
hJS(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
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
ae6(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ae6=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a5<1>")
e=B.z(new B.a5(a4,new C.fcg(),f),f.k("F.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.c0(A.dw,null,new C.fch(e),d,!0,!0,!1,A.l4,!1,!1,x.N),$async$ae6)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hs())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fIH(d),$async$ae6)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Jx(d,"Search states\u2026","",A.jG,"Choose state"),$async$ae6)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fHE(s)
if(p==null)p=A.d.gI(D.NZ)
f=C.cx()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cx()
m=p.e
l=C.fjV(p.d)
k=x.u
j=B.a([C.ei(A.bf,!1,4279310375,A.az,"marriage_locked_bg",4280640491,24,A.bg,A.a0,"",1,C.cx(),l,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l3,1,0,0)],k)
i=p.f
h=x.F
k=B.z(B.a([C.Bu(i,0.016,D.kE,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Bu(0,0.058,D.ey,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Bu(0,0.058,D.ey,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.IY("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.IY("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a0,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fEK(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bvF("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a_6("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a_6("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a_6("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a_6("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bvF("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Bu(m,0.082,D.b8,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cx()
k.push(C.ei(A.bf,!1,i,A.az,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bg,A.cp,"",0.074,g,null,"","",0,!1,"",0,D.b8,4280172719,2,y.O,0,0,"",D.cb,D.cJ,0.78,0.11,0.388))
A.d.v(k,C.fEK(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bvF("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.fYA("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.fYA("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a_6("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a_6("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bvE("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bvE("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bvF("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.IY("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.IY("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bvE("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bvE("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bvF("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a_6("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bvE("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a_6("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.z(C.fEK(0.22,0.83,0.56,4291404327,i),h)
h.push(C.IY("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.IY("Nakala ya Hati",A.L,4291404327,9,A.a0,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.At(null,null,null,null,D.nx,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.qR(m,null,0,0,j,n,D.pl,"","","Hati ya Ndoa",D.d8)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ae6,v)},
fjU:function fjU(){},
fcg:function fcg(){},
fch:function fch(d){this.a=d},
fce:function fce(d){this.a=d},
fcf:function fcf(d){this.a=d},
hyZ(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hyY(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mb
case"lineThrough":return A.yd
default:return A.az}},
ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.ex(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
h_B(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.NM[w]
if(v.b===u)return v}return D.d8},
hvu(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.czG[w]
if(v.b===u)return v}return D.cJ},
hBD(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.cWu[w]
if(v.b===u)return v}return D.b8},
qR(d,e,f,g,h,i,j,k,l,m,n){return new C.ln(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
fRs(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hxm(d.h(0,"layout"))
t=B.aQ(d.h(0,"background"))
t=t==null?m:A.k.L(t)
if(t==null)t=4294967295
s=B.aQ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.L(s)
r=C.h_B(d.h(0,"transition"))
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
n=B.cy(n,new C.c8w(),n.$ti.k("F.E"),x.F)
n=B.z(n,B.a2(n).k("F.E"))}return C.qR(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hxm(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ajG[w]
if(v.b===u)return v}return D.m6},
At(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.O(Date.now(),0,!1):a4
return new C.hR(p,t,a1,h,i,w,a0==null?B.a([C.qR(4294967295,null,0,0,null,C.cx(),D.pl,"","","",D.d8)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
TY(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.htO(a6.h(0,"aspectRatio"))
t=B.aQ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.k.L(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bg(J.k(s==null?"":s))
if(s==null)s=new B.O(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.y(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kg(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kg(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b4(f,new C.c8j(),x.N)
f=B.z(f,f.$ti.k("ai.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b4(e,new C.c8k(),x.N)
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
g=B.cy(g,new C.c8l(),g.$ti.k("F.E"),x.bt)
g=B.z(g,B.a2(g).k("F.E"))}return C.At(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.qR(4294967295,a3,0,0,a3,C.cx(),D.pl,"","","",D.d8)],x.g):g,v,p,o,s)},
kg(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
htO(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.cXd[w]
if(v.b===u)return v}return D.B3},
cx(){var w=Date.now(),v=$.iO
$.iO=v+1
return""+1000*w+"_"+v},
c8N(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.B4){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cx()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,40,A.bg,A.u,"",0.2,v,p,"","",0,!1,"",0,D.b8,m,2,o,0,0,"",D.cb,D.cJ,0.84,0.08,0.3)
u=C.cx()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.12,u,p,"","",0,!1,"",0,D.b8,m,2,"Click to add subtitle",0,0,"",D.cb,D.cJ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cx()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,32,A.bg,A.u,"",0.14,v,p,"","",0,!1,"",0,D.b8,m,2,o,0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.ei(A.bf,!0,f.e.l(),A.az,"",n,20,A.bg,A.cp,"",0.68,u,p,"","",0,!1,"",0,D.b8,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cb,D.cJ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cx()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b8,m,2,"Two Column Slide",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
t=f.e
u=C.ei(A.bf,!0,t.l(),A.az,"",n,18,A.bg,A.a0,"",0.7,u,p,"","",0,!1,"",0,D.b8,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cb,D.cJ,0.42,0.06,0.22)
s=C.cx()
A.d.v(w,B.a([v,u,C.ei(A.bf,!0,t.l(),A.az,"",n,18,A.bg,A.a0,"",0.7,s,p,"","",0,!1,"",0,D.b8,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cb,D.cJ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.G(d.z,C.ei(A.L,!1,4294967295,A.az,"",n,42,A.bg,A.u,"",0.2,C.cx(),p,"","",0,!1,"",0,D.b8,m,2,"Section Header",0,0,"",D.cb,D.cJ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cx()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,30,A.bg,A.u,"",0.12,v,p,"","",0,!1,"",0,D.b8,m,2,"Compare",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
t=f.c
u=C.ei(A.bf,!1,l,A.az,"",t.j(0.12).l(),24,A.bg,A.a0,"",0.68,u,p,"","",0,!1,"",0,D.b8,t.l(),2,"",0,0,"",D.cb,D.eQ,0.42,0.06,0.22)
s=C.cx()
r=f.e
s=C.ei(A.bf,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,s,p,"","",0,!1,"",0,D.b8,m,2,"Option A",0,0,"",D.cb,D.cJ,0.38,0.08,0.26)
q=C.cx()
t=C.ei(A.bf,!1,l,A.az,"",t.j(0.06).l(),24,A.bg,A.a0,"",0.68,q,p,"","",0,!1,"",0,D.b8,t.j(0.5).l(),2,"",0,0,"",D.cb,D.eQ,0.42,0.52,0.22)
q=C.cx()
A.d.v(w,B.a([v,u,s,t,C.ei(A.bf,!1,r.l(),A.az,"",n,20,A.bg,A.O,"",0.6,q,p,"","",0,!1,"",0,D.b8,m,2,"Option B",0,0,"",D.cb,D.cJ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cx()
v=C.ei(A.L,!1,f.d.l(),A.az,"",n,36,A.bg,A.u,"",0.35,v,p,"","",0,!1,"",0,D.b8,m,2,"TERM / QUESTION",0,0,"",D.cb,D.cJ,0.8,0.1,0.12)
u=C.cx()
A.d.v(w,B.a([v,C.ei(A.L,!1,f.e.l(),A.az,"",n,22,A.bg,A.cp,"",0.35,u,p,"","",0,!1,"",0,D.b8,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cb,D.cJ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cx()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,28,A.bg,A.u,"",0.18,v,p,"","",0,!1,"",0,D.b8,m,2,"Quiz Question",0,0,"",D.cb,D.cJ,0.88,0.06,0.06)
u=C.cx()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.az,"",n,20,A.bg,A.a0,"",0.62,u,p,"","",0,!1,"",0,D.b8,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cb,D.cJ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cx()
v=C.ei(A.bf,!1,f.d.l(),A.az,"",n,26,A.bg,A.u,"",0.1,v,p,"","",0,!1,"",0,D.b8,m,2,"Worksheet / Assignment",0,0,"",D.cb,D.cJ,0.88,0.06,0.04)
u=C.cx()
A.d.v(w,B.a([v,C.ei(A.bf,!1,f.e.l(),A.az,"",n,18,A.bg,A.a0,"",0.78,u,p,"","",0,!1,"",0,D.b8,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cb,D.cJ,0.88,0.06,0.16)],x.u))
break}},
hlw(d){return A.d.dI(D.ZN,new C.c8O(d),new C.c8P())},
hlt(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.Q.aD(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aU(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cf(v,C.TY(B.Z(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fBi(d,e){var w,v,u,t=B.S(x.N,x.I),s=new C.c8J(t)
for(w=J.aU(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bf<2>")
u=B.z(new B.bf(t,w),w.k("F.E"))
A.d.aX(u,new C.c8I())
return u},
fRv(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.c8E()
if(u!==w)return u>=w?d:e
return v.$1(d).c8(v.$1(e))?d:e},
aot(d){return C.hlr(d)},
hlr(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aot=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.c8H()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a0i(m),$async$aot)
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
return B.b(B.aw(),$async$aot)
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
case 11:o=l.$1($.fRu.h(0,m))
n=C.fBi(C.fBi(j,r),o)
if(n.length===0){u=C.fRv(C.fRv(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aot,v)},
c8D(d){return C.hlq(d)},
hlq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$c8D=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aw(),$async$c8D)
case 7:r=f
q=r.rm("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.km(q,B.T(q).c)
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
return B.i($async$c8D,v)},
aYJ(d,e){return C.hls(d,e)},
hls(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$aYJ=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aw(),$async$aYJ)
case 6:s=g
q=s.rm("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.G(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.a9(r)>500?J.JG(r,J.a9(r)-500):r
w=7
return B.b(s.an("StringList","ngmy_slides_deleted_"+p,o),$async$aYJ)
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
return B.i($async$aYJ,v)},
TZ(d,e){return C.hlu(d,e)},
hlu(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$TZ=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.a9(a0)===0){w=1
break}p=$.fRt.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aot(a3),$async$TZ)
case 5:p=a6
case 4:w=6
return B.b(C.c8D(a3),$async$TZ)
case 6:o=a6
n=B.S(x.N,x.I)
for(m=J.aU(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.m(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbn())k=f===g.gbn()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.m(0,l,i)}m=n.$ti.k("bf<2>")
l=m.k("a5<F.E>")
e=B.z(new B.a5(new B.bf(n,m),new C.c8K(o),l),l.k("F.E"))
A.d.aX(e,new C.c8L())
$.fRt.m(0,a0,e)
n=B.T(e).k("J<1,a0<n,@>>")
n=B.z(new B.J(e,new C.c8M(),n),n.k("ai.E"))
r=A.Q.aj(n,null)
$.fRu.m(0,a0,r)
t=8
w=11
return B.b(B.aeU(a0,r),$async$TZ)
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
return B.b(B.aw(),$async$TZ)
case 16:q=a6
w=17
return B.b(q.an("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$TZ)
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
return B.i($async$TZ,v)},
H8:function H8(d,e){this.a=d
this.b=e},
aor:function aor(d,e){this.a=d
this.b=e},
u2:function u2(d,e){this.a=d
this.b=e},
m4:function m4(d,e){this.a=d
this.b=e},
hl:function hl(d,e){this.a=d
this.b=e},
ex:function ex(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
ln:function ln(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c8x:function c8x(){},
c8y:function c8y(){},
c8w:function c8w(){},
hR:function hR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
c8m:function c8m(){},
c8n:function c8n(){},
c8j:function c8j(){},
c8k:function c8k(){},
c8l:function c8l(){},
js:function js(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
c8O:function c8O(d){this.a=d},
c8P:function c8P(){},
c8J:function c8J(d){this.a=d},
c8I:function c8I(){},
c8E:function c8E(){},
c8F:function c8F(){},
c8G:function c8G(){},
c8H:function c8H(){},
c8K:function c8K(d){this.a=d},
c8L:function c8L(){},
c8M:function c8M(){},
hK3(d,e){var w=x.N,v=B.S(w,x.F)
w=new C.fks(e,v,d,B.aZ(w))
w.$1(new C.fko())
w.$1(new C.fkp())
w.$1(new C.fkq())
w.$1(new C.fkr())
return v},
fks:function fks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fko:function fko(){},
fkp:function fkp(){},
fkq:function fkq(){},
fkr:function fkr(){},
aYG:function aYG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8s:function c8s(d){this.a=d},
c8r:function c8r(){},
c8t:function c8t(){},
c8u:function c8u(d,e){this.a=d
this.b=e},
c8v:function c8v(d){this.a=d},
alH:function alH(d,e){this.c=d
this.a=e},
bfv:function bfv(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dys:function dys(){},
aI5:function aI5(){},
c8A(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$c8A=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.erW)
u=!1
w=1
break}u=B.kE(!1,d,t,!1,null,A.a1g,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c8A,v)},
hlo(d){var w=A.d.bg(D.Fb,new C.c8B(d))
if(w<0)return!0
return w>=4},
hlp(d){var w=A.d.bg($.bzZ(),new C.c8C(d))
if(w<0)return!0
return w>=5},
c8B:function c8B(d){this.a=d},
c8C:function c8C(d){this.a=d},
hLJ(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gV(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xG()
$.pH().p6(t,new C.fng(s),!0)
u=B.a([B.Cy(v,A.pp,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.an(v,B.p(v,B.d(e,v,v,v,v,v,v,D.eBN,v,v,v),A.h,v,v,new B.o(A.aV,v,v,w,v,v,A.n),v,v,v,v,A.nm,v,v,v),v,v,4,v,4,v))}return new B.am(A.V,v,A.aX,A.q,u,v)},
fng:function fng(d){this.a=d},
hLk(){return C.fI_()},
hIi(){return C.bxZ()},
hKk(){return C.fHR()},
aMa(d,e,f){var w=0,v=B.j(x.H),u
var $async$aMa=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fmm(d,f),$async$aMa)
case 5:w=1
break
case 4:if(d.e!=null)d.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aMa,v)},
fmm(d,e){var w=0,v=B.j(x.H),u
var $async$fmm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bwc
if(u==null)u=e+".pdf"
w=2
return B.b(B.c0(A.K,null,new C.fmn(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fmm)
case 2:return B.h(null,v)}})
return B.i($async$fmm,v)},
fmn:function fmn(d,e){this.a=d
this.b=e},
ab2:function ab2(d,e,f){this.c=d
this.d=e
this.a=f},
ebq:function ebq(d,e){this.a=d
this.b=e},
ebr:function ebr(d,e){this.a=d
this.b=e},
ebs:function ebs(d,e){this.a=d
this.b=e},
ebt:function ebt(d){this.a=d},
abk:function abk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYF(d,e,f,g,h,i,j,k,l,m,n,o){return new C.aYE(g,m,f,d,e,h,l,k,j,o,i,null)},
h2t(d){return B.cj(new C.fkn(d))},
fI1(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
hLs(d){if(d===D.cb)return"None"
return C.fI1(d)},
bwI(d,e,f,g){return C.hBK(d,e,f,g)},
hBK(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bwI=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a7(d,!0)
if($.fF2&&t.pI())t.eD()
$.fF2=!0
s.a=null
w=3
return B.b(B.hL(A.bi,!0,"Animation preview",d,new C.f69(s,e,g,f),null,A.eE,!0,x.H),$async$bwI)
case 3:s=s.a
if(s!=null)s.a9(0)
$.fF2=!1
case 1:return B.h(u,v)}})
return B.i($async$bwI,v)},
fwa(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fwa=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bO,x.w).w.a.a*0.88,280,440)
s=f===D.cb
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fI1(f)+" Slide transition preview"
s=s?Ab.Dt:A.u3
w=3
return B.b(C.bwI(d,s,new B.a3(t,t*0.56,B.bv(B.m(14),new C.aFI(f,null),A.ap),null),r),$async$fwa)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fwa,v)},
h1M(d,e,f){var w,v,u=null,t=A.co.ar(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d5(f,t)
case 2:case 17:return B.dO(B.d5(f,t),new B.v((1-t)*48,0))
case 3:return B.dO(B.d5(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dO(B.d5(f,t),new B.v(0,(1-t)*36))
case 5:return B.dO(B.d5(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.e5(A.B,B.d5(f,t),0.5+t*0.5,u,u)
case 7:return B.e5(A.B,B.d5(f,t),1.4-t*0.4,u,u)
case 8:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.fk((1-t)*1.2)
return B.fl(A.B,B.d5(f,t),u,w,!0)
case 9:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
w.jw((1-t)*1.2)
return B.fl(A.B,B.d5(f,t),u,w,!0)
case 10:case 19:w=B.de()
v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
w.me((1-t)*0.8)
v=0.6+t*0.4
w.jf(v,v,v,1)
return B.fl(A.B,B.d5(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dO(B.d5(f,t),new B.v((1-t)*24,0))}},
bzv(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bzv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aG(d,A.bO,x.w).w.a.a*0.88,300,440)
s=f===D.cb
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fI1(f)+" Element animation preview"
s=s?Ab.Dt:A.u3
w=3
return B.b(C.bwI(d,s,new B.a3(t,t*0.62,B.bv(B.m(14),new C.awC(f,null),A.ap),null),r),$async$bzv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bzv,v)},
hLr(d){var w,v,u,t,s=$.adC.W(0,d)
if(s!=null){$.adC.m(0,d,s)
return s}w=A.cw.aF(A.a.aV(d,A.a.cP(d,",")+1))
$.adC.m(0,d,w)
v=$.fFP=$.fFP+w.length
u=B.a2($.adC).k("ct<1>")
for(;;){if(!(v>41943040&&$.adC.a>1))break
t=new B.ct($.adC,u).gag(0)
if(!t.C())B.b8(B.fw())
v-=$.adC.W(0,t.gT(0)).length
$.fFP=v}return w},
hL8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ad("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).ks(0,d),j=B.z(k,B.a2(k).k("F.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.al(d,r,o)
m=f.$1(e)
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.QT(s,A.u))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.QT(t,A.u))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.QT(u,A.cp))
v.push(new B.ez(n,l,l,A.cT,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.aV(d,r)
v.push(B.dr(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a0h(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.kw(e))
return m
case"rounded":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
w=e.gef()*0.18
m.N(new B.j3(B.c_(e,new B.b3(w,w))))
return m
case"triangle":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
w=e.d
m.N(new B.av(e.c,w))
m.N(new B.av(e.a,w))
m.N(new B.bX())
return m
case"hexagon":w=$.a1()
m=B.a([],m)
v=new B.b0(w.r,A.aw,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.bj(p,o)
m.push(p)
o=v.f
if(o!=null)p.bH(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.av(p,o)
m.push(p)
o=v.f
if(o!=null)p.bH(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.N(new B.bX())
return v
case"diamond":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.bj(e.gbN().a,e.b))
m.N(new B.av(e.c,e.gbN().b))
m.N(new B.av(e.gbN().a,e.d))
m.N(new B.av(e.a,e.gbN().b))
m.N(new B.bX())
return m
case"arch":m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
w=e.a
u=e.d
m.N(new B.bj(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.N(new B.av(w,p))
m.b4S(new B.v(t,p),new B.b3(s,s))
m.N(new B.av(t,u))
m.N(new B.bX())
return m
default:m=new B.b0($.a1().r,A.aw,n,n,B.a([],m))
m.N(new B.nD(e))
return m}},
fhY(d,e,f){return B.cj(new C.fhZ(D.ekH.q(0,d),d,f,e))},
aYE:function aYE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
c8q:function c8q(d){this.a=d},
c8p:function c8p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8o:function c8o(){},
aYB:function aYB(d,e){this.b=d
this.a=e},
fkn:function fkn(d){this.a=d},
fkm:function fkm(d,e){this.a=d
this.b=e},
f69:function f69(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f67:function f67(d){this.a=d},
f68:function f68(d,e){this.a=d
this.b=e},
aFI:function aFI(d,e){this.c=d
this.a=e},
bqs:function bqs(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eQ1:function eQ1(d,e,f){this.a=d
this.b=e
this.c=f},
aGk:function aGk(d,e){this.b=d
this.a=e},
T1:function T1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfF:function bfF(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
dJk:function dJk(d){this.a=d},
dJj:function dJj(d){this.a=d},
dJi:function dJi(d){this.a=d},
H7:function H7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8i:function c8i(d){this.a=d},
c8h:function c8h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awC:function awC(d,e){this.c=d
this.a=e},
bae:function bae(){this.d=0
this.c=this.a=null},
cYB:function cYB(d){this.a=d},
cYA:function cYA(d){this.a=d},
a5z:function a5z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgj:function bgj(d,e){var _=this
_.d=null
_.bq$=d
_.a5$=e
_.c=_.a=null},
e14:function e14(d,e,f){this.a=d
this.b=e
this.c=f},
aWB:function aWB(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bbn:function bbn(d,e,f){this.b=d
this.c=e
this.a=f},
bm7:function bm7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eFs:function eFs(){},
fhZ:function fhZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bn4:function bn4(d,e,f){this.b=d
this.c=e
this.a=f},
aIi:function aIi(){},
aIO:function aIO(){},
aK6:function aK6(){},
fln(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fln=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wh.c2().Ks(D.cUI,A.rI,!0),$async$fln)
case 3:r=e
if(r==null||J.ci(r.a)){u=null
w=1
break}t=J.fg(r.a)
s=t.c
if(s==null)throw B.P("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.P("That file is too big. Use a file under 8 MB.")
u=C.hL2(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fln,v)},
hL2(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a5S(d,new B.YV(A.cM.gcr().aF(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.hDc(e)
if(A.a.i(w).length===0)throw B.P("No readable words were found in that Word file.")
return new C.a5S(d,null,w.length>6e4?A.a.al(w,0,6e4):w)}w=A.c0.Jh(0,e,!0)
if(A.a.i(w).length===0)throw B.P("That file is empty.")
return new C.a5S(d,null,w.length>6e4?A.a.al(w,0,6e4):w)},
hDc(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cqB().cAA(B.qB(d,A.hC,o,o),o,o,!1).cCf(0,"word/document.xml")
if(n==null)return""
w=n.cJX()
v=A.c0.Jh(0,w==null?$.h4D():w,!0).split("</w:p>")
u=new B.f3("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ad("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).ks(0,r)
p=A.a.i(B.cy(q,new C.f8W(),B.a2(q).k("F.E"),t).fM(0))
if(p.length!==0){q=B.aI(p,"&lt;","<")
q=B.aI(q,"&gt;",">")
q=B.aI(q,"&quot;",'"')
q=B.aI(q,"&apos;","'")
q=B.aI(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a5S:function a5S(d,e,f){this.a=d
this.b=e
this.c=f},
f8W:function f8W(){},
hlv(d,e,f,g,h,i,j,k,l){return new C.M8(l,e,d,g,f,i,h,j,k,null)},
M8:function M8(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBl:function aBl(d,e,f,g,h,i,j,k,l){var _=this
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
ehE:function ehE(d){this.a=d},
ehC:function ehC(){},
ehD:function ehD(d){this.a=d},
ee1:function ee1(){},
ee2:function ee2(){},
ee3:function ee3(d,e){this.a=d
this.b=e},
efC:function efC(d){this.a=d},
efq:function efq(){},
efr:function efr(){},
edp:function edp(){},
egK:function egK(d){this.a=d},
ehA:function ehA(d,e){this.a=d
this.b=e},
efA:function efA(d,e){this.a=d
this.b=e},
ehn:function ehn(d){this.a=d},
eho:function eho(){},
ehp:function ehp(){},
ehq:function ehq(d){this.a=d},
ehr:function ehr(){},
ecO:function ecO(d){this.a=d},
ehB:function ehB(){},
eeJ:function eeJ(d,e){this.a=d
this.b=e},
ecM:function ecM(d){this.a=d},
ecN:function ecN(d){this.a=d},
ef5:function ef5(d){this.a=d},
ef6:function ef6(d,e,f){this.a=d
this.b=e
this.c=f},
ef7:function ef7(d){this.a=d},
eeI:function eeI(){},
eeH:function eeH(d){this.a=d},
eeF:function eeF(){},
eeE:function eeE(d){this.a=d},
eeG:function eeG(){},
edY:function edY(d){this.a=d},
edZ:function edZ(d){this.a=d},
eeP:function eeP(d){this.a=d},
eeK:function eeK(d){this.a=d},
eeL:function eeL(d){this.a=d},
eeM:function eeM(d){this.a=d},
eeN:function eeN(d){this.a=d},
eeO:function eeO(d){this.a=d},
eeQ:function eeQ(d,e){this.a=d
this.b=e},
ecQ:function ecQ(){},
ecR:function ecR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ef0:function ef0(){},
ef1:function ef1(d,e){this.a=d
this.b=e},
eeZ:function eeZ(d,e,f){this.a=d
this.b=e
this.c=f},
ef_:function ef_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eeT:function eeT(d,e,f){this.a=d
this.b=e
this.c=f},
eeU:function eeU(d,e,f){this.a=d
this.b=e
this.c=f},
eeV:function eeV(d){this.a=d},
eeW:function eeW(d,e){this.a=d
this.b=e},
eeX:function eeX(d,e){this.a=d
this.b=e},
eeY:function eeY(d,e){this.a=d
this.b=e},
eeS:function eeS(d,e){this.a=d
this.b=e},
ef3:function ef3(d){this.a=d},
ef4:function ef4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ef2:function ef2(d){this.a=d},
efl:function efl(){},
efm:function efm(){},
efn:function efn(){},
efo:function efo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efi:function efi(d){this.a=d},
efk:function efk(){},
efj:function efj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
efg:function efg(d,e,f){this.a=d
this.b=e
this.c=f},
efh:function efh(d,e){this.a=d
this.b=e},
efp:function efp(){},
eeR:function eeR(d,e){this.a=d
this.b=e},
ed6:function ed6(){},
ed7:function ed7(d,e,f){this.a=d
this.b=e
this.c=f},
ed8:function ed8(d){this.a=d},
ed9:function ed9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ed5:function ed5(d){this.a=d},
efv:function efv(d){this.a=d},
efu:function efu(d,e){this.a=d
this.b=e},
eft:function eft(d,e){this.a=d
this.b=e},
efs:function efs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efw:function efw(d,e){this.a=d
this.b=e},
ebL:function ebL(d,e){this.a=d
this.b=e},
ed4:function ed4(d,e){this.a=d
this.b=e},
ed2:function ed2(d){this.a=d},
efE:function efE(d,e,f){this.a=d
this.b=e
this.c=f},
ecZ:function ecZ(d,e){this.a=d
this.b=e},
ecY:function ecY(d){this.a=d},
efD:function efD(d,e,f){this.a=d
this.b=e
this.c=f},
ecP:function ecP(d){this.a=d},
edq:function edq(){},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehm:function ehm(d,e,f){this.a=d
this.b=e
this.c=f},
egL:function egL(d,e,f){this.a=d
this.b=e
this.c=f},
ebM:function ebM(d){this.a=d},
ebJ:function ebJ(d,e){this.a=d
this.b=e},
ebz:function ebz(d,e){this.a=d
this.b=e},
ebw:function ebw(d){this.a=d},
ebv:function ebv(d,e){this.a=d
this.b=e},
ebx:function ebx(d,e){this.a=d
this.b=e},
ed0:function ed0(d){this.a=d},
ed1:function ed1(d,e){this.a=d
this.b=e},
ed_:function ed_(d){this.a=d},
ecd:function ecd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ece:function ece(d,e){this.a=d
this.b=e},
eci:function eci(d,e){this.a=d
this.b=e},
ecj:function ecj(d){this.a=d},
ecg:function ecg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ech:function ech(d){this.a=d},
ecf:function ecf(){},
ecc:function ecc(d,e,f){this.a=d
this.b=e
this.c=f},
eff:function eff(d,e){this.a=d
this.b=e},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ehx:function ehx(d,e,f){this.a=d
this.b=e
this.c=f},
eht:function eht(d){this.a=d},
eh0:function eh0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh_:function eh_(d,e,f){this.a=d
this.b=e
this.c=f},
egZ:function egZ(){},
egY:function egY(d,e,f){this.a=d
this.b=e
this.c=f},
egX:function egX(d,e){this.a=d
this.b=e},
egU:function egU(d,e,f){this.a=d
this.b=e
this.c=f},
egS:function egS(d){this.a=d},
egT:function egT(d){this.a=d},
egW:function egW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egV:function egV(d){this.a=d},
edU:function edU(d,e){this.a=d
this.b=e},
edT:function edT(d,e){this.a=d
this.b=e},
egM:function egM(){},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehi:function ehi(d){this.a=d},
ehj:function ehj(d){this.a=d},
ebE:function ebE(d,e){this.a=d
this.b=e},
ebC:function ebC(d){this.a=d},
ebD:function ebD(d){this.a=d},
ebF:function ebF(d,e){this.a=d
this.b=e},
ebG:function ebG(d,e,f){this.a=d
this.b=e
this.c=f},
ebK:function ebK(d,e){this.a=d
this.b=e},
ebB:function ebB(d,e,f){this.a=d
this.b=e
this.c=f},
ebA:function ebA(d){this.a=d},
efB:function efB(d,e,f){this.a=d
this.b=e
this.c=f},
ehs:function ehs(d,e,f){this.a=d
this.b=e
this.c=f},
edX:function edX(d,e,f){this.a=d
this.b=e
this.c=f},
edW:function edW(){},
ecm:function ecm(d,e,f){this.a=d
this.b=e
this.c=f},
ecn:function ecn(d){this.a=d},
eby:function eby(d,e){this.a=d
this.b=e},
edo:function edo(d,e){this.a=d
this.b=e},
ebH:function ebH(d,e){this.a=d
this.b=e},
ebQ:function ebQ(d){this.a=d},
ebR:function ebR(d,e){this.a=d
this.b=e},
ebS:function ebS(d,e){this.a=d
this.b=e},
ebP:function ebP(d){this.a=d},
ec2:function ec2(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ec5:function ec5(d){this.a=d},
ec6:function ec6(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec8:function ec8(d){this.a=d},
ec9:function ec9(d){this.a=d},
eca:function eca(){},
ecb:function ecb(){},
ebT:function ebT(d){this.a=d},
ebU:function ebU(d){this.a=d},
ebV:function ebV(d){this.a=d},
ebW:function ebW(d){this.a=d},
ebX:function ebX(d){this.a=d},
ebY:function ebY(d){this.a=d},
ebZ:function ebZ(d){this.a=d},
ec_:function ec_(d){this.a=d},
ec0:function ec0(d){this.a=d},
ec1:function ec1(d){this.a=d},
ec3:function ec3(d){this.a=d},
ec4:function ec4(d,e){this.a=d
this.b=e},
edn:function edn(d,e,f){this.a=d
this.b=e
this.c=f},
edm:function edm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
edl:function edl(d,e,f){this.a=d
this.b=e
this.c=f},
edk:function edk(d,e){this.a=d
this.b=e},
ebI:function ebI(d,e){this.a=d
this.b=e},
ecq:function ecq(d){this.a=d},
ecp:function ecp(d){this.a=d},
eco:function eco(d,e){this.a=d
this.b=e},
ecr:function ecr(d){this.a=d},
ecs:function ecs(d){this.a=d},
ect:function ect(d,e){this.a=d
this.b=e},
ed3:function ed3(d){this.a=d},
efe:function efe(d,e){this.a=d
this.b=e},
efd:function efd(d,e){this.a=d
this.b=e},
efc:function efc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
efa:function efa(d){this.a=d},
efb:function efb(d,e){this.a=d
this.b=e},
ef8:function ef8(){},
ef9:function ef9(){},
egN:function egN(){},
egO:function egO(d,e){this.a=d
this.b=e},
egP:function egP(){},
egQ:function egQ(d){this.a=d},
egR:function egR(d,e){this.a=d
this.b=e},
ebN:function ebN(d,e){this.a=d
this.b=e},
ecS:function ecS(){},
ecT:function ecT(){},
ecU:function ecU(){},
ecX:function ecX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ecW:function ecW(d,e){this.a=d
this.b=e},
ecV:function ecV(d,e,f){this.a=d
this.b=e
this.c=f},
een:function een(d){this.a=d},
eem:function eem(){},
eeo:function eeo(d,e){this.a=d
this.b=e},
eep:function eep(d,e){this.a=d
this.b=e},
eel:function eel(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
eek:function eek(d){this.a=d},
eer:function eer(d,e){this.a=d
this.b=e},
eej:function eej(d){this.a=d},
ees:function ees(d,e){this.a=d
this.b=e},
eei:function eei(d){this.a=d},
eet:function eet(d,e){this.a=d
this.b=e},
eeh:function eeh(d,e){this.a=d
this.b=e},
eeu:function eeu(d,e){this.a=d
this.b=e},
eeg:function eeg(d){this.a=d},
eev:function eev(d,e){this.a=d
this.b=e},
eef:function eef(d){this.a=d},
ee8:function ee8(d,e){this.a=d
this.b=e},
ee9:function ee9(d){this.a=d},
eea:function eea(d){this.a=d},
ee7:function ee7(d){this.a=d},
eeb:function eeb(d,e){this.a=d
this.b=e},
ee6:function ee6(d){this.a=d},
eec:function eec(d,e){this.a=d
this.b=e},
ee5:function ee5(d){this.a=d},
eed:function eed(d,e){this.a=d
this.b=e},
ee4:function ee4(d){this.a=d},
eee:function eee(d){this.a=d},
edg:function edg(d){this.a=d},
edh:function edh(d){this.a=d},
edj:function edj(d){this.a=d},
edb:function edb(d){this.a=d},
eda:function eda(d,e){this.a=d
this.b=e},
edc:function edc(d,e){this.a=d
this.b=e},
edd:function edd(d){this.a=d},
ede:function ede(d){this.a=d},
edf:function edf(d,e){this.a=d
this.b=e},
edi:function edi(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehz:function ehz(d){this.a=d},
eey:function eey(d,e){this.a=d
this.b=e},
eex:function eex(d,e){this.a=d
this.b=e},
eew:function eew(d,e){this.a=d
this.b=e},
eez:function eez(d){this.a=d},
eeA:function eeA(d){this.a=d},
efX:function efX(d,e){this.a=d
this.b=e},
efY:function efY(d){this.a=d},
efZ:function efZ(d){this.a=d},
eg9:function eg9(d){this.a=d},
egk:function egk(d){this.a=d},
egv:function egv(d){this.a=d},
egC:function egC(d){this.a=d},
egD:function egD(d){this.a=d},
egE:function egE(d){this.a=d},
egF:function egF(d){this.a=d},
egG:function egG(d,e){this.a=d
this.b=e},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d){this.a=d},
eg1:function eg1(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg3:function eg3(d){this.a=d},
eg4:function eg4(d){this.a=d},
eg5:function eg5(d){this.a=d},
eg6:function eg6(d){this.a=d},
eg7:function eg7(d){this.a=d},
eg8:function eg8(d){this.a=d},
ega:function ega(d){this.a=d},
egb:function egb(d){this.a=d},
egc:function egc(d){this.a=d},
egd:function egd(d){this.a=d},
ege:function ege(d){this.a=d},
egf:function egf(d){this.a=d},
egg:function egg(d){this.a=d},
egh:function egh(d){this.a=d},
egi:function egi(d){this.a=d},
efN:function efN(d){this.a=d},
egj:function egj(d){this.a=d},
efV:function efV(d){this.a=d},
egl:function egl(d){this.a=d},
efU:function efU(d,e){this.a=d
this.b=e},
egm:function egm(d,e){this.a=d
this.b=e},
egn:function egn(d,e){this.a=d
this.b=e},
efT:function efT(d,e,f){this.a=d
this.b=e
this.c=f},
efJ:function efJ(d,e){this.a=d
this.b=e},
efW:function efW(d){this.a=d},
egH:function egH(d,e){this.a=d
this.b=e},
egJ:function egJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
egI:function egI(d,e){this.a=d
this.b=e},
ego:function ego(d,e,f){this.a=d
this.b=e
this.c=f},
efS:function efS(d,e,f){this.a=d
this.b=e
this.c=f},
efI:function efI(d,e,f){this.a=d
this.b=e
this.c=f},
efG:function efG(d,e){this.a=d
this.b=e},
egp:function egp(d,e){this.a=d
this.b=e},
efR:function efR(d,e){this.a=d
this.b=e},
efH:function efH(d,e){this.a=d
this.b=e},
efF:function efF(d,e){this.a=d
this.b=e},
egq:function egq(d){this.a=d},
efQ:function efQ(d){this.a=d},
egr:function egr(d){this.a=d},
egs:function egs(d){this.a=d},
egt:function egt(d){this.a=d},
egu:function egu(d){this.a=d},
efP:function efP(d){this.a=d},
egw:function egw(d){this.a=d},
egx:function egx(d){this.a=d},
egy:function egy(d,e){this.a=d
this.b=e},
efO:function efO(d){this.a=d},
egz:function egz(d,e){this.a=d
this.b=e},
efM:function efM(d){this.a=d},
egA:function egA(d,e){this.a=d
this.b=e},
efL:function efL(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
efK:function efK(d){this.a=d},
ecl:function ecl(d,e,f){this.a=d
this.b=e
this.c=f},
eck:function eck(d,e){this.a=d
this.b=e},
eh3:function eh3(d,e){this.a=d
this.b=e},
eh2:function eh2(d,e){this.a=d
this.b=e},
eh4:function eh4(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e){this.a=d
this.b=e},
edt:function edt(d,e){this.a=d
this.b=e},
eds:function eds(d){this.a=d},
edu:function edu(d,e){this.a=d
this.b=e},
edr:function edr(d){this.a=d},
ee0:function ee0(){},
ee_:function ee_(){},
ehg:function ehg(d){this.a=d},
ehf:function ehf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehe:function ehe(d,e){this.a=d
this.b=e},
eh9:function eh9(d,e){this.a=d
this.b=e},
ehd:function ehd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eha:function eha(d,e){this.a=d
this.b=e},
eh5:function eh5(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh7:function eh7(d){this.a=d},
eh8:function eh8(d){this.a=d},
ehb:function ehb(d,e){this.a=d
this.b=e},
ehc:function ehc(d,e){this.a=d
this.b=e},
ehh:function ehh(d){this.a=d},
ecL:function ecL(d){this.a=d},
ecK:function ecK(d,e,f){this.a=d
this.b=e
this.c=f},
ecJ:function ecJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecy:function ecy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecz:function ecz(d,e){this.a=d
this.b=e},
ecA:function ecA(d,e){this.a=d
this.b=e},
ecB:function ecB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecx:function ecx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecC:function ecC(d,e){this.a=d
this.b=e},
ecE:function ecE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecD:function ecD(d,e){this.a=d
this.b=e},
ecF:function ecF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecw:function ecw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ecG:function ecG(d,e){this.a=d
this.b=e},
ecv:function ecv(d,e){this.a=d
this.b=e},
ecH:function ecH(d,e){this.a=d
this.b=e},
ecu:function ecu(d){this.a=d},
ecI:function ecI(d,e){this.a=d
this.b=e},
eeC:function eeC(d){this.a=d},
eeB:function eeB(d){this.a=d},
eeD:function eeD(d,e){this.a=d
this.b=e},
edH:function edH(d,e){this.a=d
this.b=e},
edI:function edI(d,e){this.a=d
this.b=e},
edG:function edG(d,e){this.a=d
this.b=e},
edJ:function edJ(d,e){this.a=d
this.b=e},
edF:function edF(d,e){this.a=d
this.b=e},
edK:function edK(d,e){this.a=d
this.b=e},
edE:function edE(d,e){this.a=d
this.b=e},
edL:function edL(d,e){this.a=d
this.b=e},
edD:function edD(d,e){this.a=d
this.b=e},
edM:function edM(d,e){this.a=d
this.b=e},
edC:function edC(d,e){this.a=d
this.b=e},
edN:function edN(d,e,f){this.a=d
this.b=e
this.c=f},
edB:function edB(d,e){this.a=d
this.b=e},
edO:function edO(d,e,f){this.a=d
this.b=e
this.c=f},
edA:function edA(d,e){this.a=d
this.b=e},
edP:function edP(d,e){this.a=d
this.b=e},
edz:function edz(d,e,f){this.a=d
this.b=e
this.c=f},
edw:function edw(d,e){this.a=d
this.b=e},
edQ:function edQ(d,e){this.a=d
this.b=e},
edy:function edy(d,e){this.a=d
this.b=e},
edR:function edR(d,e){this.a=d
this.b=e},
edx:function edx(d,e,f){this.a=d
this.b=e
this.c=f},
edv:function edv(d,e){this.a=d
this.b=e},
edS:function edS(d,e){this.a=d
this.b=e},
edV:function edV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ebu:function ebu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
efz:function efz(d,e){this.a=d
this.b=e},
efx:function efx(d){this.a=d},
efy:function efy(d,e){this.a=d
this.b=e},
acN:function acN(d,e,f){this.a=d
this.b=e
this.c=f},
aw_:function aw_(d,e){this.c=d
this.a=e},
b91:function b91(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aY$=e
_.c=_.a=null},
cV6:function cV6(d){this.a=d},
cV5:function cV5(d){this.a=d},
b9f:function b9f(d,e){this.c=d
this.a=e},
cVs:function cVs(d){this.a=d},
cVt:function cVt(d){this.a=d},
I8:function I8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b90:function b90(){this.d=!1
this.c=this.a=null},
cV3:function cV3(d){this.a=d},
cV_:function cV_(d){this.a=d},
cV4:function cV4(d){this.a=d},
cUZ:function cUZ(d){this.a=d},
cV2:function cV2(d){this.a=d},
cV0:function cV0(d){this.a=d},
cV1:function cV1(d,e){this.a=d
this.b=e},
NM:function NM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Yq:function Yq(d,e,f){this.c=d
this.d=e
this.a=f},
aBo:function aBo(d,e,f){var _=this
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
eie:function eie(){},
ei4:function ei4(d){this.a=d},
eid:function eid(d){this.a=d},
ei5:function ei5(d){this.a=d},
ei6:function ei6(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei1:function ei1(d,e){this.a=d
this.b=e},
ei2:function ei2(d){this.a=d},
ei3:function ei3(d,e,f){this.a=d
this.b=e
this.c=f},
eib:function eib(){},
eic:function eic(d){this.a=d},
ei7:function ei7(d){this.a=d},
ei8:function ei8(d){this.a=d},
ei9:function ei9(d){this.a=d},
eia:function eia(d){this.a=d},
eif:function eif(d,e,f){this.a=d
this.b=e
this.c=f},
eih:function eih(d,e){this.a=d
this.b=e},
eig:function eig(d){this.a=d},
If:function If(d,e){this.c=d
this.a=e},
bnz:function bnz(d,e){this.b=d
this.a=e},
bdS:function bdS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bdR:function bdR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aH0:function aH0(){},
aJ1:function aJ1(){},
btd:function btd(){},
aJ2:function aJ2(){},
fnh(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fnh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wh.c2().Ks(B.a(["pdf"],x.s),A.rI,!0),$async$fnh)
case 3:q=e
if(q==null||J.ci(q.a)){u=null
w=1
break}t=J.fg(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bkU(s,"data:application/pdf;base64,"+A.cM.gcr().aF(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fnh,v)},
hLD(d){var w,v,u,t,s,r
try{w=B.jd(d,0,null)
v=B.ad("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cz(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c3(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ad("/Type\\s*/Page\\b",!0,!1,!1,!1).ks(0,w).gH(0)
if(t>0){s=J.aNw(t,1,200)
return s}}catch(r){}return 1},
fn8(d){return C.hLC(d)},
hLC(d){var w=0,v=B.j(x.T),u
var $async$fn8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fn8,v)},
byI(d,e,f,g){return C.hLM(d,e,f,g)},
hLM(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$byI=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e2(b6,x.co).gag(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.h33(b9,new B.ap(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lx(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lx(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lx(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lx(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.U(800*(i/j)),180,420)
$.a1()
g=new B.rs()
f=B.FB(g,null)
a7=B.U()
a7.r=A.pX.gt(0)
f.bp(new B.af(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.U()
b1.r=b8.gt(b8)
b1.c=p*e
b1.d=A.bZ
b1.e=A.fl
b1.b=A.ak
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.M()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pM()
w=7
return B.b(a3.ym(800,h),$async$byI)
case 7:a4=c1
a3.p()
w=8
return B.b(a4.hf(A.fI),$async$byI)
case 8:a5=c1
a4.p()
if(a5==null){u=null
w=1
break}a7=J.f1(A.dz.gaL(a5))
a7=A.cM.gcr().aF(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.a4(b5)
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
return B.i($async$byI,v)},
aMK(d,e,f){return C.hLA(d,e,f)},
hLA(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aMK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aG:e
r.c=f==null?5.2:f
w=3
return B.b(B.af7(d,e,f,new C.fn6(r,q),q,"Sign document"),$async$aMK)
case 3:if(!new B.e2(q,x.co).gag(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.byI(q,t,r.b,r.c),$async$aMK)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.aYI(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aMK,v)},
hLK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.fXo(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.fXo(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.aV(A.a.aT(A.o.fF(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.aV(A.a.aT(A.o.fF(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aI(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.l3&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aI(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.fX2(q.ay)+";border:2px solid "+C.fX2(q.ch)+'"></div>'
break
case 5:l=C.fGT(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aI(n,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aI(n,'"',e)+"</div>")
p=p?null:l.gagK()
if(p==null)p=A.arB
n=B.T(p)
k=n.k("ps<1>")
j=new B.ps(p,0,8,k)
j.FT(p,0,8,n.c)
j=new B.bR(j,j.gH(0),k.k("bR<ai.E>"))
k=k.k("ai.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aI(p,"&",h)
p=B.aI(p,"<",g)
p=B.aI(p,">",f)
p=B.aI(p,'"',e)
n=B.aI(i,"&",h)
n=B.aI(n,"<",g)
n=B.aI(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aI(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
fX2(d){var w=A.o.au(d,24)
return"rgba("+(A.o.au(d,16)&255)+","+(A.o.au(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
fXo(d){var w=B.aI(d,"&","&amp;")
w=B.aI(w,"<","&lt;")
w=B.aI(w,">","&gt;")
return B.aI(w,'"',"&quot;")},
byG(d,e){var w=0,v=B.j(x.H)
var $async$byG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ce(null,null,!0,null,new C.fnf(e,C.hLK(e),d),d,null,!0,!0,x.H),$async$byG)
case 2:return B.h(null,v)}})
return B.i($async$byG,v)},
byH(){var w=0,v=B.j(x.T),u,t,s
var $async$byH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.F9(92,2400),$async$byH)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fn8(s),$async$byH)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byH,v)},
aML(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aML=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fI6(d),$async$aML)
case 3:t=f
s=A.a.i(d.b)
r=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aI(s,r,"_"))
u=X.fpo(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aML,v)},
fRr(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
aYI:function aYI(d,e,f){this.a=d
this.b=e
this.c=f},
fn6:function fn6(d,e){this.a=d
this.b=e},
fnf:function fnf(d,e,f){this.a=d
this.b=e
this.c=f},
fnc:function fnc(d){this.a=d},
fnd:function fnd(d,e,f){this.a=d
this.b=e
this.c=f},
fne:function fne(d,e,f){this.a=d
this.b=e
this.c=f},
hLB(d){return C.kg(d.w)},
hLI(d){var w,v,u,t
if(d.length===0||!A.d.e8(d,C.hNq()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
xE(d){var w=A.a.i(d),v=B.ad("[^A-Z0-9]",!0,!1,!1,!1),u=B.aI(w.toUpperCase(),v,"")
w=$.h8D()
if(w.b.test(u))return u
return null},
h35(d,e,f){var w,v,u=C.hhb(d),t=$.oW()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aA(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
hLO(d){var w,v,u,t,s=B.aZ(x.N)
for(w=J.aU(d.a),v=new B.hX(w,d.b);v.C();){u=w.gT(w).y
t=C.xE(u==null?"":u)
if(t!=null)s.G(0,t)}return s},
fn4(d,e){var w,v=d.y,u=C.xE(v==null?"":v)
if(u!=null)return d.y=u
w=C.hLO(new B.a5(e,new C.fn5(d),B.T(e).k("a5<1>")))
v=d.x
return d.y=C.h35(v==null?"":v,null,w)},
hLN(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kg(w.w))return null
v=w.y
return C.xE(v==null?"":v)},
hlx(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"SL"+A.d.fM(u)},
U1(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$U1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bU(),$async$U1)
case 3:if(!e){u=B.S(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.eT("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bD),$async$U1)
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
p=B.a4(m)
$.ak.$1("[slides qr stash] load: "+B.t(p))
w=7
break
case 4:w=2
break
case 7:u=B.S(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$U1,v)},
U2(d){return C.hly(d)},
hly(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$U2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.bU(),$async$U2)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hr("ngmy_slides_transfer_qr_stashes_v1",B.E(["stashes",d,"savedAt",new B.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,A.cz,null),$async$U2)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.a4(p)
$.ak.$1("[slides qr stash] save: "+B.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$U2,v)},
a5U(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5U=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.bU(),$async$a5U)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.U1(),$async$a5U)
case 4:s=a6
r=C.xE(a2==null?"":a2)
if(r==null)r=a3!=null?C.h35(a3,null,A.a2R):null
q=x.N
p=B.aZ(q)
for(o=J.df(s),n=J.aU(o.ghQ(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.xE(J.k(k==null?"":k))
if(j!=null)p.G(0,j)}n=o.gdH(s),n=n.gag(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.Z(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dB.aF(t)
g.m(0,"payload",A.cM.gcr().aF(q))
g.m(0,"ownerEmail",A.a.i(a4))
g.m(0,"updatedAt",new B.O(Date.now(),0,!1).a4().aa())
if(D.Q_.q(0,A.a.i(a4.toLowerCase())))g.m(0,"sharedByAdmin",!0)
if(r!=null){g.m(0,"kind","marriage")
g.m(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.xE(J.k(q==null?"":q))
if(f==null)f=C.fRw(p)
g.m(0,"usesRemaining",25)}g.m(0,"claimCode",f)
q=i.a
o.m(s,q,g)
w=7
return B.b(C.U2(s),$async$a5U)
case 7:u=new B.aCM(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hlx()
n=r==null
d=n?C.fRw(p):r
q=B.S(q,x.C)
q.m(0,"ownerEmail",A.a.i(a4))
q.m(0,"bundleId",a1)
m=A.dB.aF(t)
q.m(0,"payload",A.cM.gcr().aF(m))
n=!n
q.m(0,"usesRemaining",n?2:25)
q.m(0,"createdAt",new B.O(Date.now(),0,!1).a4().aa())
if(D.Q_.q(0,A.a.i(a4.toLowerCase())))q.m(0,"sharedByAdmin",!0)
q.m(0,"claimCode",d)
if(n)q.m(0,"kind","marriage")
o.m(s,e,q)
w=8
return B.b(C.U2(s),$async$a5U)
case 8:u=new B.aCM(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5U,v)},
fRw(d){var w,v,u=$.oW()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aA(1000)),3,"0")
if(d.G(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aov(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aov=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bU(),$async$aov)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.U1(),$async$aov)
case 6:t=f
s=J.a6(t)
r=s.gH(t)
s.bm(t,new C.c8Q(q))
w=s.gH(t)!==r?7:8
break
case 7:w=9
return B.b(C.U2(t),$async$aov)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aov,v)},
aou(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aou=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.xE(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bU(),$async$aou)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.U1(),$async$aou)
case 6:t=o.jj(f),t=t.gag(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.xE(J.k(q==null?"":q))===p){u=C.a5T(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aou,v)},
a5T(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a5T=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.bU(),$async$a5T)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.U1(),$async$a5T)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
k=B.aQ(l.h(n,"usesRemaining"))
j=k==null?null:A.k.L(k)
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
if(D.Q_.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.y(l.h(n,"sharedByAdmin"),!0))try{r=A.Q.aD(0,s,null)
if(m.b(r)){q=B.Z(r,x.N,x.z)
J.aE(q,"sharedByAdmin",!0)
s=A.Q.aj(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dR(B.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new B.O(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=7
return B.b(C.U2(p),$async$a5T)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a5T,v)},
hLH(d,e,f){var w,v=B.S(x.N,x.z)
v.m(0,"type","ngmy_slides_library_v1")
v.m(0,"ownerEmail",A.a.i(e))
v.m(0,"exportedAt",new B.O(Date.now(),0,!1).a4().aa())
if(f)v.m(0,"sharedByAdmin",!0)
w=B.T(d).k("J<1,a0<n,@>>")
w=B.z(new B.J(d,new C.fnb(),w),w.k("ai.E"))
v.m(0,"decks",w)
return v},
fnj(d,e,f,g){var w
if(e!=null){w=B.S(x.N,x.z)
w.m(0,"type","ngmy_slides_deck_v1")
w.m(0,"ownerEmail",A.a.i(f))
w.m(0,"exportedAt",new B.O(Date.now(),0,!1).a4().aa())
if(g)w.m(0,"sharedByAdmin",!0)
w.m(0,"deck",e.ac())
return A.Q.aj(w,null)}return A.Q.aj(C.hLH(d==null?B.a([],x.D):d,f,g),null)},
fni(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fni=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a5U(h,d,e,f,g),$async$fni)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.xE(e==null?"":e)
u=new B.aCz(s,t)
w=1
break}t=A.dB.aF(h)
t=A.jR.gcr().aF(t)
u=new B.aCz(C.xE(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fni,v)},
fI8(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.a9(q)===0)return!1
if(J.cS(q,"NGMYSLIDESYNC2|"))return!0
if(J.cS(q,"NGMYSLIDECODE|"))return!0
if(J.cS(q,"NGMY_SL:"))return!0
if(J.eQ(q,s)||J.eQ(q,r))return!0
if(J.cS(q,"{"))try{w=A.Q.aD(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.y(v,s)||J.y(v,r)
return u}}catch(t){}return!1},
hLL(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fI8(v))return v
u=A.a.cP(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.aV(v,u))
if(C.fI8(t))return t}s=A.a.cP(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.aV(v,s))
if(C.fI8(t))return t}}return null},
fn7(d){var w,v,u,t=A.a.i(d)
if(J.a9(t)===0||J.cS(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.cS(t,"NGMY_SL:"))w=v.a(A.Q.aD(0,A.c0.c6(0,A.cw.aF(J.mf(t,8))),null))
else w=v.a(A.Q.aD(0,t,null))
v=C.hv4(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aeT(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aeT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aou(t[1]),$async$aeT)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fn7(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.xE(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.aou(r),$async$aeT)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fn7(s)
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
return B.b(C.a5T(t[1]),$async$aeT)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fn7(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fn7(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aeT,v)},
hv4(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.y(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Q_.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fI5(C.TY(B.Z(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d2(u,x.f)
t=B.cy(t,new C.eY5(w),t.$ti.k("F.E"),x.I)
t=B.z(t,B.a2(t).k("F.E"))
return t}return B.a([],x.D)},
fI5(d,e){var w,v,u,t,s,r,q,p,o=d.ac()
o.m(0,"id",C.cx())
w=A.a.i(d.b)
o.m(0,"name",w.length===0?"Shared presentation":w)
o.m(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aU(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iO
$.iO=q+1
J.aE(s,"id",""+1000*r+"_"+q)}}p=C.TY(B.Z(o,x.N,x.z))
if(e&&C.kg(p.w))p.Q=new B.O(Date.now(),0,!1).a4().bL(144e8).aa()
return p},
byr(){var w=0,v=B.j(x.aT),u,t,s
var $async$byr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.F8(),$async$byr)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aeT(s),$async$byr)
case 4:t=e
u=J.ci(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$byr,v)},
fvp(d){var w=0,v=B.j(x.T),u,t
var $async$fvp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hL(D.Tr,!0,"Dismiss",d,new C.fvq(),new C.fvr(),A.Dr,!0,x.N),$async$fvp)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.F(x.q).f.P(D.eq8)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fvp,v)},
hPm(d,e,f,g,h){return B.a7(d,!1).cs(B.eH(new C.fvs(h,e,g,f),!0,null,x.H))},
fn5:function fn5(d){this.a=d},
c8Q:function c8Q(d){this.a=d},
fnb:function fnb(){},
eY5:function eY5(d){this.a=d},
fvq:function fvq(){},
fvr:function fvr(){},
fvs:function fvs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
U_:function U_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBm:function aBm(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ehL:function ehL(){},
ehH:function ehH(d,e){this.a=d
this.b=e},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehI:function ehI(d){this.a=d},
ehJ:function ehJ(d){this.a=d},
ehM:function ehM(d){this.a=d},
ehN:function ehN(d){this.a=d},
ehQ:function ehQ(d){this.a=d},
ehR:function ehR(d){this.a=d},
ehP:function ehP(d){this.a=d},
ehS:function ehS(d){this.a=d},
ehO:function ehO(d){this.a=d},
ehT:function ehT(d,e){this.a=d
this.b=e},
ehG:function ehG(d,e){this.a=d
this.b=e},
ehF:function ehF(d,e){this.a=d
this.b=e},
U0:function U0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgF:function bgF(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehV:function ehV(d){this.a=d},
ehW:function ehW(){},
ehX:function ehX(d){this.a=d},
ehY:function ehY(d,e){this.a=d
this.b=e},
aBj:function aBj(d){this.a=d},
aBk:function aBk(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ebo:function ebo(d){this.a=d},
ebn:function ebn(){},
ebp:function ebp(d){this.a=d},
ebk:function ebk(d){this.a=d},
ebj:function ebj(){},
ebl:function ebl(d){this.a=d},
ebm:function ebm(d){this.a=d},
bqM:function bqM(){},
aow:function aow(d){this.a=d},
aBn:function aBn(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ei_:function ei_(d){this.a=d},
ehZ:function ehZ(d){this.a=d},
hzZ(){var w,v,u,t
for(v=0;v<4;++v){w=D.cKW[v]
try{if(A8.bRC(w)){u=w
return u}}catch(t){}}return null},
Pj(d,e){return C.hIt(d,e)},
hIt(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Pj=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hzZ()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.nx?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.U(b3?1280:1280*b2)
b5=c2.b=A.k.U(b3?1280/b2:1280)
c2.a=b4-A.o.J(b4,2)
c2.b=b5-A.o.J(b5,2)
b6=B.pX(c6,!0)
b6.toString
p=B.a7(c6,!0)
b7=new B.cn(null,x.A)
b8=A.d.gI(c3)
b9=$.at()
o=new B.eL(b8,b9)
n=new B.eL("Getting ready\u2026",b9)
m=new B.eL(0,b9)
l=B.nT(new C.fhq(c2,b7,o),!1,!1)
b6.lk(0,l)
b9=x.H
B.ce(null,A.dc,!1,null,new C.fhr(n,m),c6,null,!0,!0,b9)
k=new C.fhv(b7)
j=new C.fhw()
i=null
t=4
b3=c2.a
h=Ae.aP0(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fxM(h,30)
e=B.a([],x.aK)
b3=x.z
i=A8.aTL(f,B.E(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.FM.xp(i,"dataavailable",new C.fhs(e))
d=new B.bL(new B.bd($.bs,x.dT),x.b2)
A.FM.xp(i,"stop",new C.fht(d))
J.afp(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Pj)
case 8:w=7
return B.b(c5.$1(d0),$async$Pj)
case 7:a0=d0
J.fxP(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.afp(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.afp(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Pj)
case 15:w=14
return B.b(c5.$1(d0),$async$Pj)
case 14:a0=d0
case 13:J.fxP(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.afp(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.O(Date.now(),0,!1).bL(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbn())b3=b3===b8.gbn()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fxP(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bK(A.fh,null,b9),$async$Pj)
case 18:w=16
break
case 17:J.afp(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.afp(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cJ(0,A.ng),$async$Pj)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hB(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.y(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ad("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aI(c3,b3,"_"))
c0=B.mH(a7)
c0.download=B.t(J.a9(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.JD(b0)
J.lC(b0)
B.bK(A.nf,new C.fhu(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.a4(c4)
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
J.lC(l)
if(p.pI())p.eD()
c3=o
b3=$.at()
c3.shI(b3)
J.aNB(c3,0)
c3=n
c3.shI(b3)
J.aNB(c3,0)
c3=m
c3.shI(b3)
J.aNB(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pj,v)},
fhq:function fhq(d,e,f){this.a=d
this.b=e
this.c=f},
fhp:function fhp(){},
fhr:function fhr(d,e){this.a=d
this.b=e},
fhv:function fhv(d){this.a=d},
fhw:function fhw(){},
fhs:function fhs(d){this.a=d},
fht:function fht(d){this.a=d},
fhu:function fhu(d){this.a=d},
bqY:function bqY(d,e,f){this.c=d
this.d=e
this.a=f},
eSt:function eSt(){},
eSu:function eSu(){},
c9c(d){var w=0,v=B.j(x.at),u,t,s
var $async$c9c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aoG(d,A.xW),$async$c9c)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bv(new B.O(Date.now(),0,!1))
if(t.a<0){u=A.bu
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$c9c,v)},
c9b(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a5A:function a5A(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgo:function bgo(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
e1W:function e1W(d){this.a=d},
e1U:function e1U(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
a6r:function a6r(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.nP$=k
_.nQ$=l
_.nR$=m
_.ne$=n},
a6s:function a6s(d,e){this.a=d
this.b=e},
b_l:function b_l(){},
cbp:function cbp(){},
cbq:function cbq(){},
cbr:function cbr(d,e,f,g,h,i,j,k,l){var _=this
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
h9E(d){return new C.afH(d)},
a0N:function a0N(){},
afH:function afH(d){this.a=d},
aNV:function aNV(){},
atV:function atV(d,e){this.d=d
this.b=e
this.a=null},
aPp:function aPp(d){this.b=d
this.a=null},
fcA(d,e){var w=0,v=B.j(x.H)
var $async$fcA=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.a1().gwD().Kb(d,e),$async$fcA)
case 2:B.fpu()
return B.h(null,v)}})
return B.i($async$fcA,v)},
h0n(d,e){return(A.qr[(d^e)&255]^A.o.au(d,8))>>>0},
fas(d,e,f,g,h,i){var w=C.hET(d,A.d6,f,null,A.cR,g,h,i)
return w},
h2e(d){var w=F.h2X(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hhb(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.og.h(0,w)
if(v!=null)return v
for(u=A.og.gdH(A.og),u=u.gag(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.ad("[^A-Z]",!0,!1,!1,!1)
s=B.aI(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.al(s,0,2)
return A.a.al(s+"XX",0,2)},
h2m(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<31;++w)v+="- "+D.ckG[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bwF(d,e){return C.hBF(d,e)},
hBF(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bwF=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hB([d],"application/pdf")
n=x.z
q=B.aQZ(B.a([r],x.e3),e,B.E(["type","application/pdf"],n,n))
p=B.cu(B.E(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ea(B.jJ(o,"share",[p]),x.H),$async$bwF)
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
return B.i($async$bwF,v)},
fI_(){var w=0,v=B.j(x.y),u,t,s
var $async$fI_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.f3S
s=$.bwc
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bwF(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fI_,v)},
bxZ(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bxZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.f3S
l=$.bwc
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=X.fY3()?3:4
break
case 3:w=5
return B.b(C.bwF(m,k),$async$bxZ)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bwd
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mH(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.JD(q)
w=10
return B.b(B.bK(A.X,null,x.H),$async$bxZ)
case 10:J.lC(q)
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
return B.i($async$bxZ,v)},
fHR(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fHR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bwd
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
return B.i($async$fHR,v)},
fI7(d,e){var w=0,v=B.j(x.H),u,t
var $async$fI7=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hB([d],"text/html"))
t.toString
u=window
u.toString
A.l9.tT(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fI7,v)},
aZi(d,e){var w=0,v=B.j(x.y),u
var $async$aZi=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aZk(d,e),$async$aZi)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.aZj(d),$async$aZi)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZi,v)}},D,H,Ai,N,W,P,Aj,G,F,E,Q,X,Y,Ak,A5,K,A6,Z,O,R,L,A7,Al,A_,Am,An,A8,A9,Ao,Aa,Ab,Ac,Ap,Aq,S,Ar,I,Ad,As,At,T,U,M,A0,A1,A2,Au,Av
J=c[1]
B=c[0]
A=c[2]
V=c[180]
A3=c[130]
Ae=c[55]
Af=c[47]
A4=c[50]
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
Ak=c[145]
A5=c[109]
K=c[183]
A6=c[108]
Z=c[58]
O=c[159]
R=c[72]
L=c[117]
A7=c[122]
Al=c[185]
A_=c[92]
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
A0=c[188]
A1=c[187]
A2=c[54]
Au=c[165]
Av=c[94]
C.nq.prototype={
ud(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.t5(t,v)
return new C.nq(t===0?!1:w,v,t)},
bF8(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.BM()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.t5(w,u)
return new C.nq(r===0?!1:s,u,r)},
bFy(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.BM()
w=o-d
if(w<=0)return p.a?$.fJr():$.BM()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.t5(w,u)
q=new C.nq(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a0x())
return q},
dP(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.P(B.dF("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ak(e,16)
if(A.o.J(e,16)===0)return r.bF8(v)
u=w+v+1
t=new Uint16Array(u)
C.fUK(r.b,w,e,t)
w=r.a
s=C.t5(u,t)
return new C.nq(s===0?!1:w,t,s)},
lV(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.P(B.dF("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ak(e,16)
u=A.o.J(e,16)
if(u===0)return n.bFy(v)
t=w-v
if(t<=0)return n.a?$.fJr():$.BM()
s=n.b
r=new Uint16Array(t)
C.hr9(s,w,e,r)
w=n.a
q=C.t5(t,r)
p=new C.nq(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dP(1,u)-1)!==0)return p.aE(0,$.a0x())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a0x())}return p},
aI(d,e){var w,v=this.a
if(v===e.a){w=C.cyp(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a5A(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a5A(t,e)
if(s===0)return $.BM()
if(r===0)return t.a===e?t:t.ud(0)
w=s+1
v=new Uint16Array(w)
C.hr7(t.b,s,d.b,r,v)
u=C.t5(w,v)
return new C.nq(u===0?!1:e,v,u)},
FU(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.BM()
w=d.c
if(w===0)return t.a===e?t:t.ud(0)
v=new Uint16Array(s)
C.b6f(t.b,s,d.b,w,v)
u=C.t5(s,v)
return new C.nq(u===0?!1:e,v,u)},
bst(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.t5(r,u)
return new C.nq(!1,u,s)},
bss(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.t5(u,r)
return new C.nq(!1,r,v)},
bsu(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.t5(p,m)
return new C.nq(s!==0,m,s)},
SO(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.BM()
w=t.a
if(w===e.a){if(w){w=$.a0x()
return t.FU(w,!0).bsu(e.FU(w,!0),!0).a5A(w,!0)}return t.bst(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bss(v.FU($.a0x(),!1),!1)},
ap(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a5A(e,v)
if(C.cyp(u.b,t,e.b,w)>=0)return u.FU(e,v)
return e.FU(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.ud(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a5A(e,v)
if(C.cyp(u.b,t,e.b,w)>=0)return u.FU(e,v)
return e.FU(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.BM()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.fUL(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.t5(w,t)
return new C.nq(q===0?!1:r,t,q)},
bF7(d){var w,v,u,t
if(this.c<d.c)return $.BM()
this.aN4(d)
w=$.fD9.c2()-$.auD.c2()
v=C.fDb($.fD8.c2(),$.auD.c2(),$.fD9.c2(),w)
u=C.t5(w,v)
t=new C.nq(!1,v,u)
return this.a!==d.a&&u>0?t.ud(0):t},
cf5(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aN4(d)
w=C.fDb($.fD8.c2(),0,$.auD.c2(),$.auD.c2())
v=C.t5($.auD.c2(),w)
u=new C.nq(!1,w,v)
if($.fDa.c2()>0)u=u.lV(0,$.fDa.c2())
return t.a&&u.c>0?u.ud(0):u},
aN4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.fUH&&d.c===$.fUJ&&g.b===$.fUG&&d.b===$.fUI)return
w=d.b
v=d.c
u=16-A.o.gah8(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.fUF(w,v,u,t)
r=new Uint16Array(f+5)
q=C.fUF(g.b,f,u,r)}else{r=C.fDb(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fDc(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cyp(r,q,n,m)>=0){k&2&&B.ah(r)
r[q]=1
C.b6f(r,l,n,m,r)}else{k&2&&B.ah(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b6f(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hr8(p,r,i);--o
C.fUL(h,j,0,r,o,s)
if(r[i]<h){m=C.fDc(j,s,o,n)
C.b6f(r,l,n,m,r)
while(--h,r[i]<h)C.b6f(r,l,n,m,r)}--i}$.fUG=g.b
$.fUH=f
$.fUI=w
$.fUJ=v
$.fD8.b=r
$.fD9.b=l
$.auD.b=s
$.fDa.b=u},
gV(d){var w,v,u,t=new C.cyq(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cyr().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nq&&this.aI(0,e)===0},
rn(d,e){return this.aI(0,e)>0},
L(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
u6(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gah8(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.au(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cys(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cyt(w)
if(J.y(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.kQ(A.aE.gaL(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.ud(0):r
while(v.c>1){u=$.h6A()
if(u.c===0)B.b8(D.aUT)
t=v.cf5(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bF7(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).fM(0)},
$iaOE:1,
$ihu:1}
C.aO4.prototype={
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
cCf(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gai(d){return A.d.gai(this.a)},
gah(d){return this.a.length===0},
gci(d){return this.a.length!==0},
gag(d){var w=this.a
return new J.jM(w,w.length,B.T(w).k("jM<1>"))}}
C.PW.prototype={
cJX(){var w,v
if(this.as==null)this.b7a()
w=this.as
v=w==null?null:w.alK()
return v==null?null:v.ey()},
b7a(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.alK().ey()
this.as=new C.bJ_(v)}},
gX(d){return this.at}}
C.a1J.prototype={
a3(){return"CompressionType."+this.b}}
C.bD6.prototype={
em(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cl()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dP(v,u)+(s.b&A.xx[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cl()}w=A.o.dP(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fm(u,t)&A.xx[d])
s.c=t}return v}}
C.bBR.prototype={
cAz(d,e){var w,v,u,t,s,r=this,q=new C.bD6(d)
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
t=r.cdq(q)
if(t<0)return!1
if(t===0){q.em(8)
q.em(8)
q.em(8)
q.em(8)
s=r.cdt(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.em(8)
q.em(8)
q.em(8)
q.em(8)
return!0}}return!0},
cdq(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.em(8)
if(t!==D.cZc[u])v=!1
if(t!==D.cF6[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cdt(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.em(1),d2=((d3.em(8)<<8|d3.em(8))<<8|d3.em(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.em(1)
v.$flags&2&&B.ah(v)
v[t+s]=u}c9.bV3()
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
u[w]=l}c9.fr=B.bV(6,$.h4H(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.em(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.em(1)===0)break
i=d3.em(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.ah(v)
v[w]=i}}v=$.h4G()
u=x.an
c9.y=B.bV(6,v,!1,u)
c9.z=B.bV(6,v,!1,u)
c9.Q=B.bV(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bQJ(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aqr(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aqr(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.ak(a8,16)
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
a3=c9.aqr(d3)
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
c1=(c1<<8^D.Fi[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Fk[b9];++b9
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
if(b8===0){b8=D.Fk[b9];++b9
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
if(b8===0){b8=D.Fk[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Fk[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Fk[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bB(c3)
c1=c1<<8^D.Fi[c1>>>24&255^v];--c2}d4.bB(c3)
c1=(c1<<8^D.Fi[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bB(c7)
c1=(c1<<8^D.Fi[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bB(c7)
c1=(c1<<8^D.Fi[c1>>>24&255^c7&255])>>>0
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
aqr(d){var w,v,u,t,s=this,r=s.ay
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
bQJ(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
bV3(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.ah(v)
v[u]=w}}}}
C.cqC.prototype={
aDL(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bIb(e)
if(q<0)return
e.c=q
if(e.aH()!==101010256)return
e.aQ()
e.aQ()
e.aQ()
e.aQ()
r.f=e.aH()
r.r=e.aH()
w=e.aQ()
if(w>0)e.aDO(w,!1)
r.cdO(e)
q=r.r
v=r.f
u=e.aGB(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aH()!==33639248)break
s=new C.b4Y()
s.cJW(0,u,e,f)
q.push(s)}},
cdO(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a5d(20,r)
if(w.aH()!==117853008){d.c=s
return}w.aH()
v=w.ra()
w.aH()
d.c=v
if(d.aH()!==101075792){d.c=s
return}d.ra()
d.aQ()
d.aQ()
d.aH()
d.aH()
d.ra()
d.ra()
u=d.ra()
t=d.ra()
this.f=u
this.r=t
d.c=s},
bIb(d){var w,v,u,t,s,r,q,p,o,n
if(d.gH(0)<=4)return-1
w=d.c
v=d.gH(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a5d(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ajg(A.hC)
o.aHS(r.ey(),A.hC,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aH()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cqA.prototype={}
C.aui.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cqD.prototype={
aDL(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aH()!==67324752)return
e.aQ()
o.b=e.aQ()
w=D.axQ.h(0,e.aQ())
o.c=w==null?D.Jc:w
o.d=e.aQ()
o.e=e.aQ()
o.f=e.aH()
o.r=e.aH()
o.w=e.aH()
v=e.aQ()
u=e.aQ()
o.x=e.akx(v)
o.y=e.h1(u).ey()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aLT:D.BX
o.ay=f
o.Q=e.h1(t)
if(o.at!==D.BX&&u>2){w=o.y
w.toString
s=B.qB(w,A.hC,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aQ()===39169){s.aQ()
s.aQ()
s.akx(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aQ()
o.at=D.aLU
o.ax=new C.cqA(r,q)
w=D.axQ.h(0,q)
o.c=w==null?D.Jc:w}}}if((o.b&8)!==0){p=e.aH()
if(p===134695760)o.f=e.aH()
else o.f=p
o.r=e.aH()
o.w=e.aH()}},
gH(d){return this.bgl().length},
alK(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.qB(new Uint8Array(0),A.hC,q,q)
w=r.at
if(w!==D.BX)if(p.gH(0)<=0)r.at=D.BX
else{if(w===D.aLT){p=r.bDs(p)
r.Q=p}else if(w===D.aLU){p=r.bD5(p)
r.Q=p}r.at=D.BX}w=r.c
if(w===D.abj){v=p.c
u=B.da()
p=r.Q
if(p.gH(0)<=524288e3)u.b=A.oC.Ar(p.ey(),!0,!1)
else{t=B.a6h(A.hC,r.w)
p=r.Q
p.toString
A.oC.a1v(p,t,!0,!1)
u.b=t.Ft()}r.Q.c=v
return B.qB(u.b7(),A.hC,q,q)}else if(w===D.abk){s=B.a6h(A.hC,32768)
p=r.Q
v=p.c
C.h9P().cAz(p,s)
u=s.Ft()
r.Q.c=v
return B.qB(u,A.hC,q,q)}else return B.qB(p.ey(),A.hC,q,q)},
bgl(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.ey()},
u(d){return this.x},
b3b(d){var w=this.ch,v=C.I4(C.h0n(w[0].L(0),d))
w[0]=v
v=w[1].ap(0,v.SO(0,C.I4(255)))
w[1]=v
w[1]=v.aM(0,C.I4(134775813)).ap(0,C.I4(1)).SO(0,C.I4(4294967295))
w[2]=C.I4(C.h0n(w[2].L(0),w[1].lV(0,24).L(0)))},
aMv(){var w=(this.ch[2].SO(0,C.I4(65535)).L(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bDs(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.qB(new Uint8Array(0),A.hC,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b3b(u[v.c++]^r.aMv())}t=r.Q.ey()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aMv()
r.b3b(s)
u&2&&B.ah(t)
t[w]=s}return B.qB(t,A.hC,q,q)},
bD5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.h1(8).ey()
v=16}else if(k===2){w=d.h1(12).ey()
v=24}else{w=d.h1(16).ey()
v=32}u=d.h1(2).ey()
t=d.h1(d.gH(0)-10)
s=d.h1(10)
r=t.ey()
k=this.ay
k.toString
q=C.hqP(k,w,v)
p=new Uint8Array(B.cl(A.aE.dA(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aE.dA(q,v,k)))
if(!C.fUa(A.aE.dA(q,k,k+2),u))throw B.P(B.fb("password error"))
k=new Uint8Array(16)
n=new C.bAr(k,new Uint8Array(16),p)
k=x.S
m=J.a34(0,k)
m=n.r=new C.cbe(m)
m.c=!0
m.b=m.bfF(!0,new C.aq2(p))
if(m.c)m.d=B.bh(D.nw,!0,k)
else m.d=B.bh(D.xq,!0,k)
l=C.fSp(C.fSr(),64)
l.b9p(new C.aq2(o))
n.w=l
n.cJx(r,0,r.length)
k=s.ey()
m=n.x
m===$&&B.c()
if(!C.fUa(k,m))throw B.P(B.fb("macs don't match"))
return B.qB(r,A.hC,null,null)}}
C.b4Y.prototype={
cJW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aQ()
e.aH()
n.w=e.aH()
n.x=e.aH()
w=e.aQ()
v=e.aQ()
u=e.aQ()
n.y=e.aQ()
e.aQ()
n.Q=e.aH()
n.as=e.aH()
if(w>0)n.at=e.akx(w)
if(v>0){t=e.h1(v).ey()
n.ax=t
if(v>=4){s=B.qB(t,A.hC,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aQ()
p=s.aQ()
o=s.a5d(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.ra()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.ra()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.ra()
p-=8}if(p>=4&&n.y===65535)n.y=o.aH()}}}}if(u>0)e.akx(u)
f.c=n.as
t=new C.cqD(D.Jc,n,D.BX,B.a([C.I4(0),C.I4(0),C.I4(0)],x.f3))
n.ch=t
t.aDL(0,f,g)},
u(d){return this.at}}
C.cqB.prototype={
cAA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cqC(B.a([],x.fT))
this.a=g
g.aDL(0,d,f)
g=B.a([],x.bm)
w=B.S(x.N,x.S)
v=new C.aO4(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.PW(o,A.o.ak(Date.now(),1000),0):C.fKP(o,q.w,q)
v.G(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.fKP(o,q.w,q)
if(k.as==null)k.b7a()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ajg(A.hC)
j.aHS(o,A.hC,h,h)}i=j==null?h:j.ey()
if(i!=null)new B.IK(!1).Gu(i,0,h,!0)}}return v}}
C.bAr.prototype={
cJx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Bk(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.h9y(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dF("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dF("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bGC(u,0,w,0,o)}else{o===$&&B.c()
q.bDw(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.ah(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Jy(w,0)
m.x=A.aE.dA(m.x,0,10)
w=m.w
l=w.a
l.l3(0)
w=w.d
w===$&&B.c()
l.Bk(0,w,0,w.length)
return f}}
C.cbj.prototype={}
C.cbn.prototype={}
C.cbh.prototype={}
C.aq2.prototype={}
C.cbm.prototype={
cAP(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ec(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.b9p(new C.aq2(A.aE.fT(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bHA(n.a,n.b,t,s,r)
r+=v}A.aE.ha(f,g,g+w,s)
return o.a.c},
bHA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.P(B.dF("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Bk(0,d,0,d.length)
v.Bk(0,f,0,4)
u=m.c
u===$&&B.c()
w.Jy(u,0)
u=m.c
A.aE.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Bk(0,s,0,s.length)
w.Jy(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.ah(g)
g[p]=o^n}}}}
C.cbi.prototype={}
C.cbg.prototype={}
C.aq3.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.aq3){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
rn(d,e){var w=this.a
w===$&&B.c()
w=A.o.rn(w,e.gbR_())
if(!w)e.gbR_()
return w},
aG4(d,e){this.a=0
this.b=d},
rp(d){return this.aG4(d,null)},
aGE(d){var w,v=this,u=v.b
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
w.aWe(v,u)
u=w.b
u===$&&B.c()
w.aWe(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
aWe(d,e){var w,v=A.o.fF(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gV(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bn(v,w,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)}}
C.cbl.prototype={
l3(d){var w,v=this
v.a.rp(0)
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
ald(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.ah(u)
u[t]=d&255
if(w===4){v.aXF(u,0)
v.c=0}v.a.aGE(1)},
Bk(d,e,f,g){var w=this.cci(e,f,g)
f+=w
g-=w
w=this.ccj(e,f,g)
this.cc9(e,f+w,g-w)},
Jy(d,e){var w,v=this,u=C.fSq(v.a),t=u.a
t===$&&B.c()
t=C.fIA(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fIA(w,3)
v.ccd()
v.cca(u)
v.api()
v.c6v(d,e)
v.l3(0)
return 20},
aXF(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nB(A.aE.gaL(d),d.byteOffset,d.length).getUint32(e,A.hP===w.d)
if(w.w===16)w.api()},
api(){this.cJw()
this.w=0
A.d.hi(this.r,0,16,0)},
cc9(d,e,f){while(f>0){this.ald(d[e]);++e;--f}},
ccj(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.aXF(d,e)
e+=4
f-=4
w.aGE(4)
v+=4}return v},
cci(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ald(d[e]);++e;--f;++v}return v},
ccd(){this.ald(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ald(0)}},
cca(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.api()
u=v.d
switch(u){case A.hP:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Co:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.P(B.b9("Invalid endianness: "+u.u(0)))}},
c6v(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.hP===this.d,s=0;s<w;++s){r=v[s]
q=J.nB(A.aE.gaL(d),d.byteOffset,u)
q.$flags&2&&B.ah(q,11)
q.setUint32(e+s*4,r,t)}},
gdh(d){return this.f}}
C.cbo.prototype={
cJw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.pB[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.pB[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.pB[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.pB[30]
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
C.cbk.prototype={
b9p(d){var w,v,u,t,s=this,r=s.a
r.l3(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Bk(0,w,0,v)
w=s.d
w===$&&B.c()
r.Jy(w,0)
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
s.b4k(s.d,u,54)
s.b4k(s.e,u,92)
u=s.d
r.Bk(0,u,0,u.length)},
Jy(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Jy(s,w)
s=u.e
t.Bk(0,s,0,s.length)
v=t.Jy(d,e)
s=u.e
A.aE.hi(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Bk(0,s,0,s.length)
return v},
b4k(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.ah(d)
d[v]=u^f}}}
C.cbf.prototype={}
C.cbe.prototype={
a_U(d){return(D.nw[d&255]&255|(D.nw[d>>>8&255]&255)<<8|(D.nw[d>>>16&255]&255)<<16|D.nw[d>>>24&255]<<24)>>>0},
bfF(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.P(B.dF("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.dZ(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bV(4,0,!1,u)
switch(v){case 4:q=J.nB(A.aE.gaL(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a_U((m>>>8|(m&$.pB[24])<<24)>>>0)^D.cik[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nB(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_U((k>>>8|(k&$.pB[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a_U((k>>>8|(k&$.pB[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nB(A.aE.gaL(e),e.byteOffset,w)
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
p=(p^f.a_U((g>>>8|(g&$.pB[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a_U(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.P(B.b9("Should never get here"))}return s},
bGC(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nB(A.aE.gaL(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e0[a8&255]
u=D.e0[a9>>>8&255]
t=$.pB[8]
s=D.e0[b0>>>16&255]
r=$.pB[16]
q=D.e0[b1>>>24&255]
p=$.pB[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e0[a9&255]
s=D.e0[b0>>>8&255]
u=D.e0[b1>>>16&255]
v=D.e0[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e0[b0&255]
u=D.e0[b1>>>8&255]
s=D.e0[a8>>>16&255]
q=D.e0[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e0[b1&255]
a8=D.e0[a8>>>8&255]
a9=D.e0[a9>>>16&255]
b0=D.e0[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e0[n&255]
b0=D.e0[m>>>8&255]
a9=D.e0[l>>>16&255]
a8=D.e0[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e0[m&255]
b0=D.e0[l>>>8&255]
o=D.e0[b1>>>16&255]
s=D.e0[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e0[l&255]
o=D.e0[b1>>>8&255]
b0=D.e0[n>>>16&255]
u=D.e0[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e0[b1&255]
o=D.e0[n>>>8&255]
s=D.e0[m>>>16&255]
v=D.e0[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e0[a8&255]^C.mZ(D.e0[a9>>>8&255],24)^C.mZ(D.e0[b0>>>16&255],16)^C.mZ(D.e0[b1>>>24&255],8)^b6[w][0]
m=D.e0[a9&255]^C.mZ(D.e0[b0>>>8&255],24)^C.mZ(D.e0[b1>>>16&255],16)^C.mZ(D.e0[a8>>>24&255],8)^b6[w][1]
l=D.e0[b0&255]^C.mZ(D.e0[b1>>>8&255],24)^C.mZ(D.e0[a8>>>16&255],16)^C.mZ(D.e0[a9>>>24&255],8)^b6[w][2]
b1=D.e0[b1&255]^C.mZ(D.e0[a8>>>8&255],24)^C.mZ(D.e0[a9>>>16&255],16)^C.mZ(D.e0[b0>>>24&255],8)^b6[w][3]
a7=D.nw[n&255]
b0=D.nw[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.nw[l>>>8&255]
a9=D.nw[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.nw[b1>>>8&255]
h=D.nw[n>>>16&255]
g=D.nw[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.nw[l>>>24&255]
s=s[3]
a1=J.nB(A.aE.gaL(b4),b4.byteOffset,16)
a1.$flags&2&&B.ah(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nB(A.aE.gaL(b4),b4.byteOffset,16)
r.$flags&2&&B.ah(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nB(A.aE.gaL(b4),b4.byteOffset,16)
k.$flags&2&&B.ah(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nB(A.aE.gaL(b4),b4.byteOffset,16)
f.$flags&2&&B.ah(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bDw(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nB(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nB(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nB(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nB(A.aE.gaL(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e_[a6&255]
v=D.e_[b0>>>8&255]
u=$.pB[8]
t=D.e_[a5>>>16&255]
s=$.pB[16]
r=D.e_[a4>>>24&255]
q=$.pB[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e_[a4&255]
t=D.e_[a6>>>8&255]
v=D.e_[b0>>>16&255]
w=D.e_[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e_[a5&255]
v=D.e_[a4>>>8&255]
t=D.e_[a6>>>16&255]
r=D.e_[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e_[b0&255]
a5=D.e_[a5>>>8&255]
a4=D.e_[a4>>>16&255]
a6=D.e_[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e_[p&255]
a6=D.e_[b0>>>8&255]
a4=D.e_[n>>>16&255]
a5=D.e_[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e_[o&255]
a4=D.e_[p>>>8&255]
a7=D.e_[b0>>>16&255]
t=D.e_[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e_[n&255]
a7=D.e_[o>>>8&255]
a5=D.e_[p>>>16&255]
v=D.e_[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e_[b0&255]
a7=D.e_[n>>>8&255]
t=D.e_[o>>>16&255]
w=D.e_[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e_[a6&255]^C.mZ(D.e_[b0>>>8&255],24)^C.mZ(D.e_[a5>>>16&255],16)^C.mZ(D.e_[a4>>>24&255],8)^b5[a9][0]
o=D.e_[a4&255]^C.mZ(D.e_[a6>>>8&255],24)^C.mZ(D.e_[b0>>>16&255],16)^C.mZ(D.e_[a5>>>24&255],8)^b5[a9][1]
n=D.e_[a5&255]^C.mZ(D.e_[a4>>>8&255],24)^C.mZ(D.e_[a6>>>16&255],16)^C.mZ(D.e_[b0>>>24&255],8)^b5[a9][2]
b0=D.e_[b0&255]^C.mZ(D.e_[a5>>>8&255],24)^C.mZ(D.e_[a4>>>16&255],16)^C.mZ(D.e_[a6>>>24&255],8)^b5[a9][3]
a4=D.xq[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.xq[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.xq[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.xq[o>>>8&255]
i=D.xq[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.xq[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nB(A.aE.gaL(b3),b3.byteOffset,16)
d.$flags&2&&B.ah(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bIZ.prototype={}
C.bJ_.prototype={
gH(d){var w=this.a.length
return w},
alK(){return B.qB(this.a,A.hC,null,null)}}
C.b6v.prototype={
u8(d){return C.hu_(d)}}
C.ckC.prototype={
L6(d){var w=d.w,v=Math.max(1,A.k.dF(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a7P(v,t+20,u+16,t,u,B.th(d.x))},
mQ(d){return!1}}
C.bJS.prototype={
cv6(d){if(this.b)throw B.P(B.b9("FontLoader is already loaded"))
this.c.push(d.bw(new C.bJT(),x.E))},
ma(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$ma=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.P(B.b9("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$ma)
case 6:w=5
return B.b(p.fcA(f,r),$async$ma)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$ma,v)}}
C.at_.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a6f.prototype={
A(d,e){if(e==null)return!1
if(J.bD(e)!==B.aV(this))return!1
return e instanceof C.a6f&&e.a===this.a},
gV(d){return B.bn(B.aV(this),B.vW(this.a),A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f,A.f)},
u(d){var w="<optimized out>#"
if(B.aV(this)===D.f6P)return"["+(w+B.dX(this.a))+"]"
return"[ObjectKey "+(w+B.dX(this.a))+"]"}}
C.aSn.prototype={
bX(d){var w=new C.axK(!0,this.e,null,new B.d7(),B.c9())
w.bW()
w.scw(null)
return w},
c5(d,e){var w
x.cQ.a(e)
e.sxG(0,!0)
w=this.e
if(!w.A(0,e.ae)){e.ae=w
e.aCq()}}}
C.axK.prototype={
sxG(d,e){return},
goK(){var w=this.a7$
return w!=null},
gky(){var w=this.a7$
return w!=null},
KW(d){var w=d==null?B.fN8(null):d
w.sa2n(this.ae)
return w}}
C.ZL.prototype={
S(){return new C.aG0(B.aZ(x.N))},
cHP(d){return this.d.$1(d)},
cFD(){return this.e.$0()}}
C.aG0.prototype={
Z(){this.a0()
this.Nq()},
Nq(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cFD(),$async$Nq)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eQW(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nq,v)},
WU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$WU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.eR_(t),q),q.k("F.E"))
if(p.length===0||t.r){w=1
break}t.n(new C.eR0(t))
w=3
return B.b(C.al0(p),$async$WU)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.eR1(t,s,p))
w=4
return B.b(t.Nq(),$async$WU)
case 4:case 1:return B.h(u,v)}})
return B.i($async$WU,v)},
ZV(d){return this.cgg(d)},
cgg(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ZV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.n(new C.eQX(t))
s=J.q(d,"id")
w=3
return B.b(C.bU0(J.k(s==null?"":s)),$async$ZV)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.n(new C.eQY(t))
w=1
break}q=C.fI5(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cHP(B.a([q],x.D)),$async$ZV)
case 4:if(t.c==null){w=1
break}t.n(new C.eQZ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$ZV,v)},
Np(d,e){return this.bDV(0,e)},
bDV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Np=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.eQR(q),r,null,!0,!0,x.y),$async$Np)
case 3:if(g!==!0||t.c==null){w=1
break}t.n(new C.eQS(t))
s=s.h(e,"id")
w=4
return B.b(C.al_(J.k(s==null?"":s)),$async$Np)
case 4:if(t.c==null){w=1
break}t.n(new C.eQT(t))
w=5
return B.b(t.Nq(),$async$Np)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Np,v)},
cua(d){var w=B.bg(d),v=w==null?null:w.bP()
if(v==null)return""
return A.hV[B.bB(v)-1]+" "+B.bN(v)},
aMm(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.V(d,A.c,w,w,w,e*0.5),A.h,w,w,new B.o(w,w,w,v,w,D.LB,A.n),w,e,w,w,w,w,w,e)},
aMl(d){return this.aMm(d,44)},
b1A(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.LB:u,r=B.m(14),q=B.V(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.GW,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.GW,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bkc,u,u,u)],p))}return B.D(B.aJ(A.c4,B.dg(u,B.B(q,A.m,u,A.b5,A.j,0,u,u),u,u,A.b9,new B.o(u,u,u,r,u,s,A.n),A.hG,u,u,u,A.wi,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eR5(this,d),u,u,u,u,u,u,!1,A.ae),1)},
cam(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.dg.j(0.14):D.U5,n=B.m(18),m=p?A.dg:A.du
m=B.H(m,A.r,p?1.8:1)
w=this.aMl(A.p7)
v=B.d(d.b,q,1,A.Z,q,q,q,D.aKc,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.D(B.u(B.a([v,A.d4,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aKe,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.LB:q
u=p?q:B.H(A.be,A.r,1.6)
r=p?D.by9:q
return B.aJ(q,B.dg(q,B.B(B.a([w,A.ba,t,B.dg(q,r,q,q,A.b9,new B.o(q,q,u,q,q,v,A.a5),A.fR,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b9,new B.o(o,q,m,n,q,q,A.n),A.fR,q,q,A.d7,A.bk,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQV(this,p,d),q,q,q,q,q,q,!1,A.ae)},
chL(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cua(J.k(o==null?"":o))
o=B.m(18)
w=B.H(A.du,A.r,1)
v=r.aMl(A.KS)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.Z,q,q,q,D.aKc,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.D(B.u(B.a([u,A.d4,B.d(p+" slides"+t,q,q,q,q,q,q,D.aKe,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.aZh(A.hh,A.bq,"Bring it back",r.r?q:new C.eR2(r,d))
return B.p(q,B.B(B.a([v,A.ba,t,p,A.bo,r.aZh(A.e4,A.cN,"Delete",r.r?q:new C.eR3(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(D.U5,q,w,o,q,q,A.n),q,q,q,A.d7,D.beO,q,q,q)},
aZh(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hI(B.aJ(w,B.p(w,B.V(d,v?A.be:e,w,w,w,19),A.h,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.ae),w,f,w,w)},
apy(d,e,f){var w=null
return new B.C(D.bdS,B.u(B.a([B.V(d,A.be,w,w,w,46),A.ab,B.d(e,w,w,w,w,w,w,D.eGw,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.ezn,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c3
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bO,x.w).w
u=B.p(i,i,A.h,i,i,new B.o(A.be,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aMm(A.xd,46),A.ba,D.bkW],t)
if(j.r)s.push(D.dMi)
s.push(B.aF(i,i,i,i,A.Ll,i,i,i,new C.eR8(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.H(A.du,A.r,1)
o=J.a6(h)
q=B.a([A.T,u,new B.C(D.bhm,s,i),B.p(i,B.B(B.a([j.b1A(0,A.wP,"Save",j.a.c.length),j.b1A(1,A.L6,"Saved",o.gH(h))],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bgq,A.ef,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cN:A.bq).j(0.12)
s=B.m(14)
r=B.H((j.y?A.cN:A.bq).j(0.4),A.r,1)
p=j.y
n=p?A.KT:A.ej
n=B.V(n,p?A.cN:A.bq,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.aa,B.D(B.d(m,i,i,i,i,i,i,A.a3P,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.h,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bgm,A.iE,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.D(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.eCJ,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aJ(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.eFB,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.eR9(j,v),i,i,i,i,i,i,!1,A.ae))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.apy(A.p7,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cam(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.dLT)
else if(j.e==null)s.push(j.apy(A.afQ,"Could not reach the database","Check the connection, then open this again."))
else if(o.gah(h))s.push(j.apy(A.o4,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gag(h);r.C();)s.push(j.chL(r.gT(r)))
A.d.v(u,s)}q.push(new B.dl(1,A.cj,B.cK(u,i,W.ad3,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gbXw()
p=s?i:D.LB
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.aa(0,A.G,A.b0.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.V(A.wP,m?A.j9:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bgZ,B.aJ(i,B.dg(i,B.B(B.a([k,A.a3f,new B.dl(1,A.cj,B.eX(A.B,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.j9:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.h,A.e8),i)],t),A.m,i,A.b5,A.j,0,i,i),i,i,A.b9,new B.o(s,i,i,o,n,p,A.n),A.hG,i,54,i,i,i,i,i),A.z,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.ae),i))}else q.push(A.T)
return B.p(i,B.br(!0,B.u(q,A.m,i,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,i,new B.aW(0,1/0,0,w.a.b*0.9),D.aS3,i,i,i,i,i,i,i,i)}}
C.nS.prototype={
ac(){return B.E(["id",this.a,"doc",this.b.ac(),"updatedAt",this.c.a4().aa()],x.N,x.z)}}
C.Ww.prototype={
S(){return new C.auO(B.a([],x.k),B.f6(null,x.H))},
gdS(){return this.c}}
C.auO.prototype={
Z(){this.a0()
this.Nx()},
Nx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Nx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a_J(t.a.c),$async$Nx)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.czO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Nx,v)},
cnE(d){var w,v,u,t=this
d.c=new B.O(Date.now(),0,!1)
w=J.pI(t.d,new C.czR(d))
v=w<0
if(v&&C.hrb(d))return t.f
u=t.d
if(v)J.oZ(u,0,d)
else J.aE(u,w,d)
v=x.a
B.fz3(new C.czS(t),v)
return t.f=t.f.bw(new C.czT(t,d),v).eN(new C.czU())},
He(d,e,f){return this.c4b(0,e,f)},
aTK(d,e){return this.He(0,e,!1)},
c4b(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$He=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a7(s,!1).cs(B.eH(new C.czN(t,e),!1,null,x.H)),$async$He)
case 3:w=4
return B.b(t.f,$async$He)
case 4:w=5
return B.b(t.Nx(),$async$He)
case 5:case 1:return B.h(u,v)}})
return B.i($async$He,v)},
aT1(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dab:d
this.He(0,new C.nS(w,v,new B.O(Date.now(),0,!1)),!0)},
bX1(){return this.aT1(null)},
aaE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aaE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.czV(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aaE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aT1(s)
case 1:return B.h(u,v)}})
return B.i($async$aaE,v)},
Hd(d,e){return this.bDN(0,e)},
bDN(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.czI(e),s,null,!0,!0,x.y),$async$Hd)
case 3:if(g!==!0){w=1
break}t.n(new C.czJ(t,e))
w=4
return B.b(t.f,$async$Hd)
case 4:w=5
return B.b(C.adT(t.a.c,e.a),$async$Hd)
case 5:w=6
return B.b(t.Nx(),$async$Hd)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hd,v)},
C1(d){return this.bw9(d)},
bw9(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$C1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.czE(d),r,!0,!0,!1,null,!1,!1,x.N),$async$C1)
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
return B.b(t.aTK(0,d),$async$C1)
case 9:w=5
break
case 7:w=10
return B.b(F.fIC(r,d.b,null),$async$C1)
case 10:w=5
break
case 8:w=11
return B.b(t.Hd(0,d),$async$C1)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$C1,v)},
bQX(){var w,v,u=null,t=[D.dae,D.dac,D.dad],s=new C.czL(),r=B.m(26),q=x.V,p=B.a([new B.aa(0,A.G,A.dD.j(0.4),A.eI,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.b3(999,999)
n.push(B.p(u,new B.w(D.cWs[w],u,A.ot,u,u,u,u,u,u,u,u,u),A.h,u,u,new B.o(A.c.j(0.18),u,u,new B.bu(v,v,v,v),u,u,A.n),u,u,u,u,A.nn,u,u,u))}return B.p(u,B.B(B.a([B.D(B.u(B.a([D.f2w,A.P,B.cb(A.bH,n,A.bw,6,6),A.aN,B.aJ(u,B.p(u,D.ejd,A.h,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.aa(0,A.G,A.w.j(0.2),A.cG,10)],q),u,A.n),u,u,u,u,V.adq,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.czK(this),u,u,u,u,u,u,!1,A.ae)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a3(130,110,new B.am(A.B,u,A.a9,A.q,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.h,u,u,new B.o(u,u,u,r,p,D.bFe,A.n),u,u,u,u,D.bhw,u,u,u)},
bw7(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.aa(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bv(B.m(6),new B.am(A.V,v,A.aX,A.q,B.a([B.eX(A.B,F.aly(d.b),A.h,A.bN),D.dQw,B.an(v,B.aJ(v,B.p(v,D.byW,A.h,v,v,D.aSW,v,26,v,v,v,v,v,26),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czz(this,d),v,v,v,v,v,v,!1,A.ae),v,v,v,4,4,v)],r),v),A.ap),A.h,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.Z,v,v,v,D.ewU,v,v,v)
w=u===1?"":"s"
return B.aJ(v,B.u(B.a([new B.fM(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.eCT,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,new C.czA(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.czB(this,d),v,v,v,v,v,v,!1,A.ae)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eA(B.a([new B.C(H.abY,B.hI(B.aJ(s,B.p(s,A.ait,A.h,s,s,new B.o(s,s,s,s,B.a([new B.aa(0,A.G,A.b0.j(0.5),A.J,12)],x.V),E.uH,A.a5),s,36,s,s,s,s,s,36),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gbYg(),s,s,s,s,s,s,!1,A.ae),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mq,s,s,s,!0,s,s,s,s,s,D.f2A,s,s,s,1,s,!0)
if(t.e)r=D.aW9
else{w=t.bQX()
v=B.a([D.eQn,A.aa],r)
if(J.cs(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.a9(t.d),s,s,s,s,s,s,D.ewn,s,s,s),A.h,s,s,new B.o(D.b_o,s,s,u,s,s,A.n),s,s,s,s,A.DN,s,s,s))}r=B.a([new B.nn(Ad.Vd,new B.lL(w,s),s),new B.nn(D.bgT,new B.lL(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.ci(t.d))r.push(D.eoM)
else r.push(new B.nn(D.bgo,B.N7(new B.nX(new C.czW(t),J.a9(t.d),!0,!0,!0,0,B.rg(),s),D.aVr),s))
r=B.uM(0,s,A.q,s,A.z,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.cg(q,D.aZk,r,s,!1,!1,s,s)}}
C.Wu.prototype={
S(){return new C.auK(B.a([],x.bx))},
S5(d){return this.d.$1(d)}}
C.aBW.prototype={}
C.auK.prototype={
aWg(d,e,f){var w=$.at(),v=new B.ao(new B.bb(d,A.b_,A.aL),w),u=this.gaTJ()
v.aJ(0,u)
w=new B.ao(new B.bb(e,A.b_,A.aL),w)
w.aJ(0,u)
return new C.aBW(v,w,f)},
CP(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a9(0)
v.x=B.cV(A.oX,new C.cz2(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a0()
w=m.a.c.b
v=$.at()
u=new B.ao(new B.bb(w.a,A.b_,A.aL),v)
t=m.gaTJ()
u.aJ(0,t)
m.d!==$&&B.aO()
m.d=u
u=new B.ao(new B.bb(w.b,A.b_,A.aL),v)
u.aJ(0,t)
m.e!==$&&B.aO()
m.e=u
u=new B.ao(new B.bb(w.c,A.b_,A.aL),v)
u.aJ(0,t)
m.f!==$&&B.aO()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.ao(new B.bb(p.a,A.b_,A.aL),v)
o.aJ(0,t)
n=new B.ao(new B.bb(p.b,A.b_,A.aL),v)
n.aJ(0,t)
r.push(new C.aBW(o,n,p.c))}if(r.length===0)r.push(m.aWg("Page 1","",""))},
p(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a9(0)
if(r.y){r.a.c.b=r.goq()
q=r.a
q.S5(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.at()
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
goq(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.m0(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.qG(n,w,v,t,u)},
zK(){var w=0,v=B.j(x.H),u=this,t
var $async$zK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a9(0)
u.y=!1
u.a.c.b=u.goq()
t=u.a
w=2
return B.b(t.S5(t.c),$async$zK)
case 2:return B.h(null,v)}})
return B.i($async$zK,v)},
bYe(){this.n(new C.cz1(this))
this.CP()},
aSK(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.n(new C.cz4(w,d,v))
w.CP()},
bYf(d,e){var w=A.d.cu(this.w,e)
this.n(new C.czc())
this.CP()
$.aS.x1$.push(new C.czd(w))},
OF(d){return this.cac(d)},
cac(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kB(80,1400,A.eu),$async$OF)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$OF)
case 8:p=f
o=q.b.toLowerCase()
n=J.afl(o,".png")?"image/png":"image/jpeg"
r.n(new C.cz5(d,n,p))
r.CP()
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
return B.i($async$OF,v)},
wL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$wL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.h4_(r,t.goq()),$async$wL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cz3(t,s))
t.CP()
case 1:return B.h(u,v)}})
return B.i($async$wL,v)},
cau(d){var w,v=this,u=null,t=F.fgH(d.c)
if(t==null)return new B.bF(A.a1,u,u,B.hf(D.bsk,D.eSF,new C.cz7(v,d),u),u)
w=x.p
return new B.C(A.cH,new B.am(A.V,u,A.a9,A.q,B.a([B.bv(B.m(12),B.fC(t,A.B,u,u,A.ci,A.bN,!0,140,!1,u,1/0),A.ap),B.an(u,B.B(B.a([v.aZi(A.ky,new C.cz8(v,d)),A.bo,v.aZi(A.cu,new C.cz9(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
aZi(d,e){var w=null
return B.aD(!1,A.X,!0,w,B.aH(!1,w,!0,new B.C(A.he,B.V(d,A.c,w,w,w,18),w),A.cC,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.h,A.aV,0,w,w,A.cC,w,w,A.ac)},
Hf(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Hf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.zK(),$async$Hf)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fIC(s,t.goq(),new C.czb(t)),$async$Hf)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Hf,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eA(B.a([new B.C(A.qb,B.hf(D.bwW,D.eYc,n.gat8(),B.fo(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.ais,m,m,m,new C.cze(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Tw,m,1,m,m,m,!1,m,!1,E.mq,m,m,m,!0,m,m,m,m,m,D.eTp,m,m,m,1,m,!0),j=Ao.aR9(O.kR,A.c,Aa.Sz,A.ns,D.eU5,n.gbYd()),i=B.m(18),h=n.gat7(),g=B.a([new B.aa(0,A.G,A.w.j(0.4),A.j1,12)],x.V)
g=B.aJ(m,B.p(m,new B.a3(92,142.1818181818182,B.eX(A.B,F.aly(n.goq()),A.h,A.dn),m),A.h,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.ae)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.en,B.D(B.u(B.a([D.f4_,A.au,B.d(F.fH9(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.eIe,m,m,m),A.T,B.dk(E.ahJ,E.aKV,h,B.bk(A.dD,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.h,m,m,new B.o(E.Tw,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),h,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.nG,!0,A.a6,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),w,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.ay,h,A.P,w,A.P,B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),g,m,m,m,m,m,2,B.bl(m,new B.b1(4,B.m(12),A.da),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.b3(16,16)
u=new B.ax(O.kR.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bvH,m,m,m,v===0?m:new C.czf(n,v),m,m,m,m,"Move up",A.c6)
r=i.length
q=B.aF(m,m,m,m,D.bBO,m,m,m,v===r-1?m:new C.czg(n,v),m,m,m,m,"Move down",A.c6)
r=r===1?m:new C.czh(n,v)
p=new B.b3(12,12)
o=new B.b3(12,12)
g.push(B.p(m,B.u(B.a([new B.cC(A.aY,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.w("Page "+t,m,D.eIJ,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aF(m,m,m,m,B.V(A.e4,A.nW,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.c6)],l),m),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].a,m,m,m,m,m,2,new B.e0(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b1(4,new B.bu(p,p,p,p),A.da),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,A.cc,!0,A.a6,m,A.am,m,m,m,m),A.ar,n.cau(i[v]),B.aK(m,A.U,!1,m,!0,A.q,m,B.aL(),i[v].b,m,m,m,m,m,2,new B.e0(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b1(4,new B.bu(o,o,o,o),A.da),!0,m,m,m,m),A.z,!0,m,!0,m,!1,m,A.af,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a8,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a6,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.h,m,m,new B.o(E.mq,m,new B.c1(u,u,u,u),new B.bu(w,w,w,w),m,m,A.n),m,m,new C.a6f(h),A.dZ,D.bf1,m,m,m))}return B.nU(!0,B.cg(k,E.aak,B.cK(g,m,D.bft,m,m,A.ah,!1),m,!1,!1,j,m),new C.czi(n),x.C)}}
C.auM.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cN:E.mq,q=B.m(16),p=B.m(16),o=s?A.aH.j(0.08):A.c.j(0.04)
s=s?A.aH.j(0.16):A.dD.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.fi,B.aD(!1,A.X,!0,t,B.aH(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.V(u.c,r,t,t,t,20),A.h,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.ba,B.D(B.u(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.by,B.d(u.e,t,t,t,t,t,t,D.aJB,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.V(A.ek,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.h,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.h,A.K,0,t,t,t,t,t,A.ac),t)}}
C.anF.prototype={
S(){return new C.aAM()}}
C.aAM.prototype={
Z(){this.a0()
this.Xt()},
bo(d){this.bA(d)
if(d.c!=this.a.c)this.ZL()},
ZL(){var w=0,v=B.j(x.H),u=this,t
var $async$ZL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.p()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$ZL)
case 2:u.d=null
if(u.c!=null)u.n(new C.dXZ(u))
w=3
return B.b(u.Xt(),$async$ZL)
case 3:return B.h(null,v)}})
return B.i($async$ZL,v)},
Xt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Xt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.a9(n)===0){w=1
break}t=4
if(J.cS(n,"http://")||J.cS(n,"https://")||J.cS(n,"data:")){o=B.W7(B.cq(n,0,null),new B.Nv(!0))
r.d=o}else{o=B.fb("unsupported video ref")
throw B.P(o)}w=7
return B.b(o.hW(0).cJ(0,A.oT),$async$Xt)
case 7:if(r.c==null){w=1
break}r.d.rr(!1)
r.n(new C.dXX(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.a4(m)
$.ak.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.n(new C.dXY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xt,v)},
p(){var w=this.d
if(w!=null)w.p()
this.a2()},
c_7(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.fS(0)
w.n(new C.dY_(w))}else{v.p5(0)
w.n(new C.dY0(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bF
n=B.m(8*n.d)
m=B.a([D.iS.j(0.92),D.Iy.j(0.95)],x.O)
w=B.H(A.bQ.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.V(A.pa,A.bQ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.bQ(B.as(B.u(B.a([t,new B.a3(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.R,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.b7)}if(p.f)return B.as(B.V(A.ah4,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.aWT
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eX(A.B,new B.a3(r,q,new B.z1(s,o),o),A.q,A.bN)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.V(A.iG,A.c,o,o,o,28*p.a.d),A.h,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.M(w,w,w,w),o,o,o),o,o,o))}return B.aJ(o,B.bv(n,new B.am(A.V,o,A.aX,A.q,m,o),A.ap),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc_6(),o,o,o,o,o,o,!1,A.ae)}}
C.wF.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.j9.prototype={}
C.aaX.prototype={
B(d){return B.p6(new C.dPn(this,B.L(d).ax.a===A.H,d),!0,0.72,0.9,0.5,!1,null)}}
C.aam.prototype={
B(d){var w,v,u=null,t=B.L(d).ax.a===A.H,s=B.m(18),r=B.m(18),q=B.H(D.iS.j(t?0.35:0.4),A.r,1),p=t?D.IV:A.c,o=x.V,n=B.a([new B.aa(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.H(A.bQ.j(0.5),A.r,1)
o=B.a([new B.aa(0,A.G,A.w.j(0.14),A.dH,6)],o)
w=this.c
o=B.D(B.p(u,new B.fM(0.5625,C.hIO(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.adT,u,u,u,u),1)
m=D.iS.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.iS,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aD(!1,A.X,!0,u,B.aH(!1,s,!0,B.p(u,B.u(B.a([o,B.p(u,B.u(B.a([l,A.d4,B.d(w.c,u,2,A.Z,u,u,u,B.l(u,u,t?A.aA:D.b4H,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(u,u,new B.c1(new B.ax(m,1,A.r,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.ace,u,u,u)],v),A.ad,u,A.e,A.j,0,A.p),A.h,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.h,A.K,0,u,u,u,u,u,A.ac)}}
C.wI.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nd.prototype={}
C.bft.prototype={
U5(d){var w=null
return new B.bF(A.a1,w,w,B.G7(A.B,B.p(w,w,A.h,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
bvR(){return this.U5(1)},
atC(d){var w=null,v=B.m(8),u=B.H(A.hE,A.r,0.9)
return B.p(A.B,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(D.a8E,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.u(B.a([B.B(B.a([B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dO(B.p(v,v,A.h,v,v,new B.o(v,v,B.H(A.hE,A.r,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b5,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a0,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.ar,w.atC("TAARIFA ZA WANANDOA"),A.ar,w.bvR(),A.d4,w.U5(0.9),A.d4,w.U5(0.7),A.P,w.atC("TAMKO LA MAKUBALIANO"),A.fW,w.U5(1),A.d4,w.U5(0.95),A.P,w.atC("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ab_.prototype={
B(d){return B.p6(new C.e1Z(B.L(d).ax.a===A.H,d),!0,0.92,0.96,0.5,!1,null)}}
C.acD.prototype={
B(d){var w,v,u,t,s,r=null,q=B.L(d).ax.a===A.H,p=B.m(18),o=B.m(18),n=B.H(A.at.j(q?0.35:0.4),A.r,1),m=q?D.b4k:A.c,l=x.V,k=B.a([new B.aa(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.H(A.at.j(0.5),A.r,1)
l=B.a([new B.aa(0,A.G,A.w.j(0.14),A.dH,6)],l)
w=this.c
v=C.fHE(w.a)
if(v==null)v=A.d.gI(D.NZ)
u=B.aX(v.f)
t=B.aX(v.r)
s=x.p
l=B.D(B.p(r,new B.fM(0.5625,new B.am(A.V,r,A.aX,A.q,B.a([B.bW(0,B.fC(C.fHD(v.d),A.B,r,r,A.ci,A.bN,!0,r,!1,r,r),0,0,0),new B.C(A.acV,new C.bft(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.adT,r,r,r,r),1)
j=A.at.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Y.IW,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aD(!1,A.X,!0,r,B.aH(!1,p,!0,B.p(r,B.u(B.a([l,B.p(r,B.u(B.a([i,A.d4,B.d(w.c,r,2,A.Z,r,r,r,B.l(r,r,q?A.aA:D.aZM,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(r,r,new B.c1(new B.ax(j,1,A.r,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.ace,r,r,r)],s),A.ad,r,A.e,A.j,0,A.p),A.h,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.h,A.K,0,r,r,r,r,r,A.ac)}}
C.kC.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a5J.prototype={}
C.TN.prototype={
S(){var w=$.at()
return new C.aB4(new B.cn(null,x.A),new B.ao(A.aq,w),new B.ao(A.aq,w),B.m6(0,null,null),A.d.gI(D.a_0),D.dkv,B.a([],x.L),B.a([],x.gE))}}
C.aB4.prototype={
Z(){var w,v=this
v.a0()
v.w=v.a.c
v.z=new C.yr(C.fkA(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fjx().bw(new C.e5g(v),w)
$.ts().jR(0,"assets/images/ngmy_logo.png").bw(new C.e5h(v),w).eN(new C.e5i())},
p(){var w=this,v=w.e,u=$.at()
v.R$=u
v.O$=0
v=w.f
v.R$=u
v.O$=0
w.r.p()
w.a2()},
aem(d){var w=null,v=this.c
if(v!=null)v.F(x.q).f.P(B.b_(w,w,w,w,w,A.q,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.S,w,w,w,w,w,w,w,w,w,w))},
Hu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Hu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kB(88,1600,A.eu),$async$Hu)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$Hu)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.h4g(m,p),$async$Hu)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bz5(new B.pg(o,1),m),$async$Hu)
case 10:if(r.c!=null)r.n(new C.e4T(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.a4(k)
r.aem("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Hu,v)},
UN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$UN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h4g(s,q),$async$UN)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bz5(new B.pg(r,1),s),$async$UN)
case 4:if(t.c!=null)t.n(new C.e4P(t,r))
case 1:return B.h(u,v)}})
return B.i($async$UN,v)},
abk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$abk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.n(new C.e5_(q))
t=4
q.a.toString
p=C.hNc()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$abk)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e50(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.a4(i)
q.aem(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e51(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abk,v)},
XF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$XF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.a9(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.n(new C.e4V(q,i))
t=4
q.a.toString
p=C.hNb()
h=q.z
m=q.y
l=q.w
k=B.z(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$XF)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.e4W(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.a4(g)
if(q.c!=null)q.n(new C.e4X(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4Y(q))
$.aS.x1$.push(new C.e4Z(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XF,v)},
c_P(d){this.n(new C.e4U(this,d))},
D3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$D3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.n(new C.e4R(q))
t=4
w=7
return B.b($.aS.gm4(),$async$D3)
case 7:w=8
return B.b(B.bK(A.ni,null,x.H),$async$D3)
case 8:k=$.aS.ae$.x.h(0,q.d)
p=k==null?null:k.gb3()
if(!(p instanceof B.q0))throw B.P("The page is not ready yet.")
w=9
return B.b(p.lP(1800/p.gX(0).a),$async$D3)
case 9:o=e
w=10
return B.b(o.hf(A.fI),$async$D3)
case 10:n=e
if(n==null)throw B.P("Could not make the picture.")
w=11
return B.b(A4.adW(J.f1(A.dz.gaL(n)),"ngmy_news.png","image/png"),$async$D3)
case 11:m=e
q.aem(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
q.aem(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.e4S(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$D3,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kA,a2,a2,a2,new C.e57(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bxr,a2,a2,a2,new C.e58(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.ob,a2,a2,a2,a4?a1.gaUz():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eA(v,a2,a2,!0,!0,A.zj,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.ejm,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.aa(0,A.G,A.w.j(0.6),A.eI,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fM(0.7142857142857143,B.eX(A.B,new B.en(new C.aYj(t,s,r,a1.x,a2),a1.d),A.h,A.dn),a2),A.h,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.QL,a2,a2,a2)
t=a1.as?a2:a1.gc_O()
t=B.a([B.D(B.dk(D.bya,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cc,a2,a2,a2),t,B.bk(D.rg,a2,a2,a2,A.c,A.fL,a2,a2,new B.b5(B.m(14),N.vC),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bv(B.m(10),B.fC(r,A.B,a2,a2,A.ci,A.bN,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.av,r,B.aF(a2,a2,a2,a2,D.bv0,a2,a2,a2,a1.as?a2:a1.gbCq(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.QL,a2,a2,a2)
q=B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.e,a2,a2,a2,a2,a2,2,a1.aO6("Leave it empty and the AI picks a story about NGMY"),A.z,!0,a2,!0,a2,!1,a2,A.af,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.cRD[o]
p.push(B.mG(a2,D.rg,new B.w(n.a,a2,A.oq,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hj,new C.e59(a1,n),a2,a2,N.vC,a2))}p=B.cb(A.bH,p,A.bw,6,8)
m=a1.Q
m=B.cb(A.bH,B.a([D.f2J,A.ba,B.jO(a2,a2,a2,D.ePg,a2,new C.e5a(a1),m==="en",a2,a2,a2,a2),A.aa,B.jO(a2,a2,a2,D.ePb,a2,new C.e5b(a1),m==="sw",a2,a2,a2,a2)],w),A.qV,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.QL,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a_0,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gH(0),h.k("bR<ai.E>")),h=h.k("ai.E");i.C();){g=i.d
k.push(a1.aMF(g==null?h.a(g):g))}k=B.cK(k,a2,a2,a2,a2,A.aY,!1)
i=B.a([],w)
for(j=B.dc(D.a_0,10,a2,j),h=j.$ti,j=new B.bR(j,j.gH(0),h.k("bR<ai.E>")),h=h.k("ai.E");j.C();){g=j.d
i.push(a1.aMF(g==null?h.a(g):g))}j=B.cK(i,a2,a2,a2,a2,A.aY,!1)
i=a1.as?a2:a1.gc_R()
h=B.m(18)
v=B.a([new B.aa(0,A.G,A.bz.j(0.4),A.J,18)],v)
v=B.a([u,A.ay,new B.C(A.cH,s,a2),t,A.ay,new B.C(A.cH,r,a2),q,A.P,p,A.T,m,A.ay,new B.C(A.cH,l,a2),new B.a3(a2,78,k,a2),A.P,new B.a3(a2,78,j,a2),A.aN,B.aJ(a2,B.p(A.B,B.B(B.a([D.by4,A.aa,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fM,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(a2,a2,a2,h,v,G.t0,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.z,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.ae)],w)
if(a4){u=B.a([A.dW,B.B(B.a([D.d5b,A.av,D.ble],w),A.m,a2,A.e,A.j,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a1
q=e?A.b0.j(0.35):D.rg
p=new B.b3(16,16)
d=new B.ax(A.bG,1,A.r,-1)
u.push(new B.bF(r,a2,a2,B.p(a2,new B.w(f.b,a2,D.eGh,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.h,a2,N.Sn,new B.o(q,a2,new B.c1(d,d,d,d),new B.bu(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cH,A.iE,a2,a2,a2),a2))}u.push(A.ar)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cFu[o]
t.push(B.mG(a2,D.rg,new B.w(a0,a2,A.H6,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hj,new C.e5c(a1,a0),a2,a2,N.vC,a2))}u.push(B.cb(A.bH,t,A.bw,6,8))
u.push(A.T)
t=B.D(B.aK(a2,A.U,!1,a2,!0,A.q,a2,B.aL(),a1.f,a2,a2,a2,a2,a2,2,a1.aO6("Ask for a change, or ask a question\u2026"),A.z,!0,a2,!0,a2,!1,a2,A.af,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.e5d(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a8,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.di,!0,A.a6,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc_Q()
u.push(B.B(B.a([t,A.aa,B.Gb(A.xi,s,B.ok(a2,A.b0,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.ay)
t=a1.as?a2:a1.gaUz()
u.push(B.dk(A.ob,D.eZD,t,B.bk(A.dp,a2,a2,a2,a2,A.GU,a2,a2,new B.b5(B.m(16),A.W),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cK(v,a1.r,A.acI,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.H(E.jt.j(0.5),A.r,1)
v.push(B.bW(0,B.ec(B.as(B.p(a2,B.B(B.a([E.a3g,A.en,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.it,a2,a2,a2)],w),A.m,a2,A.e,A.R,0,a2,a2),A.h,a2,a2,new B.o(E.z9,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bhO,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.cg(a3,A.zj,new B.am(A.V,a2,A.a9,A.q,v,a2),a2,!1,!1,a2,a2)},
aO6(d){var w=null
return B.bl(w,new B.b1(4,B.m(14),A.W),w,A.eF,w,w,w,w,!0,w,w,w,w,w,w,D.rg,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,R.H1,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aMF(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.aX(d.f),p=s?A.bz:A.bG
p=B.H(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.h,B.aX(d.x),t,t,t,5,t,A.lS,t,t,t,t),A.fW],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.h,B.aX(v).j(0.5),t,t,t,2,t,D.be5,t,t,t,t))
w.push(A.d4)
w.push(new B.C(A.jZ,B.d(d.b,t,1,A.Z,t,t,t,B.l(t,t,B.aX(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aJ(t,B.p(t,B.u(w,A.m,t,A.b5,A.j,0,A.p),A.h,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jY,t,t,t,72),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.e4Q(this,d),t,t,t,t,t,t,!1,A.ae)}}
C.yr.prototype={
b6p(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.yr(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cyn(d){var w=null
return this.b6p(w,w,w,w,w,d,w,w,w,w)},
ac(){var w=this
return B.E(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
ayN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.c7c(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aU(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fl(g,B.ad("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.J(w,new C.c7a(),B.T(w).k("J<1,n>")).bZ(0,new C.c7b())
t=B.z(w,w.$ti.k("F.E"))}else t=k
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
return this.b6p(p,r,q,J.a9(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gEc(d){return this.f}}
C.rC.prototype={
a3(){return"NewsLayout."+this.b}}
C.Ag.prototype={
a3(){return"NewsFrame."+this.b}}
C.kY.prototype={}
C.aYj.prototype={
qJ(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.aX(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1v(d,e,f,g){return this.qJ(d,e,null,1.25,f,A.bg,g)},
PZ(d,e,f,g,h){return this.qJ(d,e,f,1.25,g,A.bg,h)},
axk(d,e,f,g,h){return this.qJ(d,e,null,f,g,A.bg,h)},
axj(d,e,f,g,h){return this.qJ(d,e,f,g,0,A.bg,h)},
b1x(d,e,f,g,h){return this.qJ(d,e,null,f,0,g,h)},
cp4(d,e,f,g,h,i){return this.qJ(d,e,f,g,0,h,i)},
axi(d,e,f,g){return this.qJ(d,e,null,f,0,A.bg,g)},
afD(d,e,f){return this.qJ(d,e,null,f,0,A.bg,A.cF)},
b1w(d,e,f,g,h){return this.qJ(d,e,f,g,0,h,A.cF)},
cp3(d,e,f,g){return this.qJ(d,e,null,f,0,g,A.cF)},
cp2(d,e,f,g){return this.qJ(d,e,f,g,0,A.bg,A.cF)},
afE(d,e,f,g,h,i){return this.qJ(d,e,f,g,h,A.bg,i)},
aUA(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.ma(new B.ez(d,u,u,A.cT,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.cn,new B.kc(1),u,u,h,u,A.cm,u)
v.EM(g)
if(!v.b.a.c.gaAo())return w
w-=2}return j},
abl(d,e,f,g,h,i,j,k){return this.aUA(d,e,f,g,h,i,j,k,A.bg)},
avI(d,e,f){var w=null,v=d==null?B.aX(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.h,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a3(w,3,w,w),B.p(w,w,A.h,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.u(t,A.m,w,A.e,A.j,0,A.p)},
avH(d){return this.avI(null,!1,d)},
aea(d,e){return this.avI(null,d,e)},
cgV(d,e){return this.avI(d,!1,e)},
gaWD(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaQD(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
MX(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.abl(w.gaQD(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaQD(),v,g,A.Z,v,v,v,w.axj(u,t,f,1.02,A.O),e,v,v)},
aQI(d){return this.MX(d,A.L,null,2,78,30)},
a8X(d,e,f,g,h){return this.MX(d,e,null,f,g,h)},
bQP(d,e,f,g,h){return this.MX(d,A.L,e,f,g,h)},
bQO(d,e,f){return this.MX(d,A.L,null,e,f,30)},
PV(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bF
w=v.d.as
return new B.C(A.ks,B.d(s,u,g,A.Z,u,u,u,v.b1w(w,v.aUA(t,w,A.cF,d,g,h,15,1.2,A.cx),f,1.2,A.cx),e,u,u),u)},
b1d(d){return this.PV(d,A.L,null,3,24)},
ax9(d,e,f,g){return this.PV(d,e,null,f,g)},
co7(d,e,f){return this.PV(d,A.L,e,3,f)},
b1e(d,e){return this.PV(d,e,null,3,24)},
co5(d,e){return this.PV(d,A.L,null,3,e)},
co6(d,e,f){return this.PV(d,e,null,3,f)},
anB(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.ii,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PZ("Roboto",12,d==null?B.aX(w.d.x):d,1.4,A.I),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.D(B.p(v,v,A.h,B.aX(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.D(B.p(v,v,A.h,B.aX(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
LU(){return this.anB(null,!0)},
anA(d){return this.anB(null,d)},
byq(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bF
return new B.C(A.iX,new B.a3(d,w,B.d(v,w,2,A.Z,w,w,w,this.cp3(this.d.as,13.5,1.2,A.cx),e,w,w),w),w)},
uH(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.O(Date.now(),0,!1),i=m.gaWD(),h=A.o.ak(j.bv(B.bT(B.bw(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hB5(Math.max(1,B.bw(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1v(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.abl(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.abl(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.aX(h.x)
h=h.ch?B.aX(h.f):A.c
s=x.p
return B.u(B.a([B.p(l,B.B(B.a([B.D(B.d(i.toUpperCase(),l,1,A.eB,l,l,l,m.afE(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.h,t,l,l,l,l,l,l,new B.M(18,w,18,w),l,l,l),A.P,B.B(B.a([B.d(C.byl(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hv,A.j,0,l,l),A.ar,m.aea(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.u(B.a([B.B(B.a([B.p(l,l,A.h,B.aX(h),l,l,l,u*0.8,l,l,l,l,l,14),A.en,B.D(B.d(i,l,1,A.eB,l,l,l,m.axi(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.T,B.B(B.a([B.d(C.byl(j),l,l,l,l,l,l,m.PZ(k,13,B.aX(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hv,A.j,0,l,l),A.P,m.cgV(B.aX(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gaWD()
v=B.d("NGMY",l,l,l,l,l,l,m.axk(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.aX(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.u(B.a([B.B(B.a([v,A.aa,B.es(A.B,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.qJ(k,r*0.72,o,1.05,-0.5,A.cx,A.u),l,l,l),A.h,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.M(t,s,t,s),l,l,l),l),A.b6,new B.dl(1,A.cj,B.d(w.toUpperCase(),l,2,A.Z,l,l,l,m.afE(k,12.5,B.aX(h).j(0.85),1.3,1.2,A.O),A.dK,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.P,B.p(l,l,A.h,B.aX(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hv,A.j,0,l,l)
t=m.aea(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axi(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.u(B.a([w,A.au,t,new B.a3(l,s,l,l),v,new B.a3(l,q,l,l),m.aea(!0,1.4),A.au,B.d(C.byl(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.avH(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.u(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axk(v,u,1,3,A.O),A.L,l,l),A.P,m.aea(!0,1.2),A.au,B.B(B.a([B.d(C.byl(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hv,A.j,0,l,l),A.au,m.avH(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aa2(d){return this.uH(d,!1)},
abm(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.aX(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afE("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.h,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.M(v,u,v,u),w,w,w)},
c_S(d,e){return this.abm(d,null,e,null)},
aSC(d){var w=null,v=new B.O(Date.now(),0,!1),u=A.o.J(B.dm(v),12)===0?12:A.o.J(B.dm(v),12),t=B.aX(this.d.w).j(0.75),s=this.axj("Roboto",15,t,1,A.cp),r=B.V(E.afe,t,w,w,w,18),q=A.a.al(A.pd[B.bB(v)-1],0,3),p=A.a.aT(A.o.u(B.hm(v)),2,"0"),o=B.dm(v)>=12?"PM":"AM"
return B.B(B.a([r,A.aa,B.d(q+" "+B.bN(v)+", "+B.bw(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.h,t.j(0.4),w,w,w,20,w,A.fu,w,w,w,1),B.V(d,t,w,w,w,19),A.aa,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
asD(){return this.aSC(A.lZ)},
aZw(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.Z,w,w,w,this.afE("Roboto",this.abl(v,"Roboto",A.I,d,e,f,g,1.08),w,1.08,-0.8,A.I),w,w,w)},
avL(d,e,f){return this.aZw(d,e,f,30)},
axc(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bF
return new B.C(A.u6,B.d(v,w,e,A.Z,w,w,w,this.cp2("Roboto",f,B.aX(this.d.w).j(0.88),1.35),w,w,w),w)},
b1i(d){return this.axc(d,3,22)},
coi(d,e){return this.axc(d,e,22)},
rL(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fC(r,A.B,s,s,A.ci,A.bN,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.FE(D.bks,w,s)
if(v==="sepia")w=new B.FE(D.bkr,w,s)}else{r=this.d
v=r.w
u=B.aX(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.V(A.wJ,B.aX(v).j(0.35),s,s,s,t*0.25),s,s,s),A.h,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.bQ(s,new B.o(s,s,s,s,s,new B.bS(A.B,0.95,A.x,s,0,B.a([A.K,A.Ts.j(0.38)],x.O),s,s),A.n),A.b7))
return new B.a3(d,e,new B.am(A.V,s,A.aX,A.q,v,s),s)},
pB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.H(B.aX(j),A.r,3)
j=B.H(B.aX(j),A.r,1)
return B.p(k,B.p(k,l.rL(d-24,e-24),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ef,k,k,k),A.h,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lT,k,k,d)
case 2:w=B.a([new B.aa(0,A.G,A.w.j(0.35),D.dJc,14)],x.V)
v=l.rL(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.es(A.B,-0.035,B.p(k,B.u(B.a([v,B.D(B.as(B.d(u,k,2,A.Z,k,k,k,l.b1w(j.as,13.5,D.b06,1.1,A.cx),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.h,k,k,new B.o(D.b2P,k,k,k,w,k,A.n),k,e,k,k,D.bfo,k,k,d),k)
case 3:w=B.m(30)
j=B.H(B.aX(j.x),A.r,5)
return B.p(k,B.bv(B.m(25),l.rL(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.H(B.aX(j.x),A.r,6)
j=B.aX(j.f)
v=t-10
return new B.a3(d,e,B.as(B.p(k,B.hM(l.rL(v,v),A.ap),A.h,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lT,k,k,t),k,k,k),k)
case 5:j=B.a([new B.aa(0,A.G,A.w.j(0.3),D.dJ3,10)],x.V)
return B.es(A.B,0.025,new B.a3(d,e,new B.am(A.V,k,A.a9,A.h,B.a([B.bW(0,B.p(k,l.rL(d-18,e-18),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qd,k,k,k),0,0,0),B.an(k,B.es(A.B,-0.6,B.p(k,k,A.h,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.an(-10,B.es(A.B,-0.6,B.p(k,k,A.h,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.aX(j.x)
return new B.a3(d,e,B.b2(B.n2(l.rL(d,e),A.ap,D.fae),new C.b8H(j,k),k,k,A.as),k)
case 7:j=x.p
w=B.a([l.rL(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bK(u));++n){m=new B.b3(2,2)
o.push(B.p(k,k,A.h,k,k,new B.o(A.cg,k,k,new B.bu(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cE(0,q,0,p,k,k,new B.cC(A.aY,A.qv,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.am(A.V,k,A.aX,A.q,w,k),A.h,A.el,k,k,k,e,k,k,D.bjL,k,k,d)
case 8:w=d/2
v=B.w5(A.fV,new B.b3(w,w))
j=B.H(B.aX(j.x),A.r,5)
w-=5
return B.p(k,B.bv(B.w5(A.k8,new B.b3(w,w)),l.rL(d-10,e-10),A.ap),A.h,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.aa(0,A.G,A.w.j(0.35),A.fz,22)],x.V)
return B.p(k,l.rL(d-20,e-20),A.h,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a3(d,e,B.n2(l.rL(d,e),A.ap,D.ffI),k)
case 0:j=B.H(B.aX(j.w),A.r,2.4)
return B.p(k,l.rL(d-14,e-14),A.h,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ef,k,k,d)}},
aKi(d,e){return this.d.e===D.Oz?A.bF:this.byq(d,e)},
Ul(d){return this.aKi(d,A.L)},
gaww(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
awv(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.H(B.aX(v.w),A.r,1.6)
t=v.x
s=B.aX(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.D(B.as(B.d("\u201c"+m+"\u201d",n,7,A.Z,n,n,n,o.b1x(v.Q,19,1.15,A.cx,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.Z,n,n,n,o.PZ("Roboto",12.5,B.aX(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.D(B.d(m,n,9,A.Z,n,n,n,o.afD(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jy(B.u(q,A.F,n,A.e,A.j,0,A.p),A.q,n),A.h,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gc7K(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a6J(d,e,f,g){return B.cj(new C.c7d(this,e,d,f,g))},
a6I(d){return this.a6J(d,22,!0,18)},
Uw(d,e){return this.a6J(d,22,!0,e)},
aLk(d,e,f){return this.a6J(d,22,e,f)},
bAn(d,e,f){return this.a6J(d,e,!0,f)},
b4a(d,e,f,g){return B.cj(new C.c7e(this,e,d,g,!0,f))},
c6z(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.u(B.a([k.aa2(824),A.ay,k.aQI(824),k.b1d(824),A.P,k.LU(),A.ab,B.as(k.pB(824,360),j,j,j),k.Ul(824),A.ab,B.D(k.a6I(3),1)],x.p),A.ad,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.u(B.a([k.aa2(824),A.aN,new B.a3(j,350,B.B(B.a([new B.a3(440,j,B.u(B.a([k.a8X(440,A.bf,3,62,26),k.ax9(440,A.bf,2,20),A.b6,k.anB(B.aX(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.GV,B.u(B.a([k.pB(362,310),k.Ul(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.T,k.avH(2),A.ab,B.D(k.a6I(3),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 2:w=k.uH(824,!0)
v=B.aX(h.x)
u=h.ch
t=x.p
s=B.a([k.bQP(788,u?B.aX(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.co7(788,u?B.aX(h.f):A.c,22))
v=B.p(j,B.u(s,A.m,j,A.e,A.j,0,A.p),A.h,v,j,j,j,j,j,j,A.zF,j,j,j)
u=B.a([B.as(k.pB(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Oz){h=A.w.j(0.65)
u.push(B.an(0,B.p(j,B.d(s,j,2,A.Z,j,j,j,k.axj(i,14,A.c,1.15,A.O),j,j,j),A.h,h,j,j,j,j,j,j,A.lm,j,j,j),j,j,0,0,j,j))}return B.u(B.a([w,A.ab,v,A.ab,new B.am(A.V,j,A.a9,A.q,u,j),A.P,k.LU(),A.T,B.D(k.Uw(2,21),1)],t),A.ad,j,A.e,A.j,0,A.p)
case 3:h=k.uH(824,!0)
w=k.pB(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.u(B.a([h,A.ab,new B.am(A.bb,j,A.a9,A.q,B.a([w,B.an(0,B.p(j,k.MX(780,A.bf,A.c,3,74,30),A.h,j,j,new B.o(j,j,j,j,j,new B.a8(A.b3,A.bb,A.x,v,j,j),A.n),j,j,j,j,D.bi5,j,j,j),j,j,0,0,j,j)],u),j),k.b1e(824,A.bf),A.P,k.LU(),A.T,B.D(k.a6I(3),1)],u),A.ad,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.u(B.a([k.aa2(824),A.ay,k.aQI(824),k.b1d(824),A.P,k.LU(),A.ab,B.D(k.b4a(3,300,B.u(B.a([k.pB(300,300),k.Ul(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ad,j,A.e,A.j,0,A.p)
case 5:w=k.uH(824,!0)
v=x.p
u=B.u(B.a([k.a8X(440,A.bf,3,62,26),k.ax9(440,A.bf,2,20),A.b6,k.anA(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.u(B.a([w,A.bs,new B.a3(j,400,B.B(B.a([new B.a3(440,j,u,j),A.aHF,new B.C(A.iX,k.pB(364,h.e===D.Oz?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.ay,B.D(k.Uw(2,21),1)],v),A.ad,j,A.e,A.j,0,A.p)
case 6:return B.u(B.a([k.aa2(824),A.ab,k.bQO(824,2,70),k.co5(824,21),A.P,k.LU(),A.ab,B.D(k.b4a(3,340,B.as(k.pB(340,340),j,j,j),350),1)],x.p),A.ad,j,A.e,A.j,0,A.p)
case 7:w=k.uH(824,!0)
v=B.aX(h.x)
u=Date.now()
u=C.byl(new B.O(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PZ(i,13,h.ch?B.aX(h.f):A.c,1.2,A.u),A.L,j,j),A.h,v,j,j,j,j,j,j,A.bk,j,j,j),A.ay],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1x(h.Q,24,1.15,A.cx,A.O),j,j,j))
v.push(A.b6)
if(k.gaww())v.push(k.awv(230,250))
return B.u(B.a([w,A.ay,B.D(B.B(B.a([new B.a3(230,j,B.u(v,A.ad,j,A.e,A.j,0,A.p),j),B.p(j,j,A.h,B.aX(h.w),j,j,j,j,j,A.acd,j,j,j,1.2),new B.a3(570,j,B.u(B.a([k.a8X(570,A.bf,3,62,28),k.co6(570,A.bf,20),A.P,k.anA(!1),A.P,B.as(k.pB(570,330),j,j,j),k.Ul(570),A.T,B.D(k.aLk(2,!1,17),1)],t),A.ad,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ad,j,A.e,A.j,0,A.p)
case 8:w=k.uH(824,!0)
v=h.ch
u=v?B.aX(h.x):B.aX(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PZ(i,13,v?A.w:B.aX(h.x),3,A.u),j,j,j)
s=x.p
return B.u(B.a([w,A.ab,B.p(j,B.u(B.a([t,A.ar,k.MX(788,A.bf,v?A.w:B.aX(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.h,u,j,j,j,j,j,j,D.bgr,j,j,j),k.b1e(824,A.bf),A.T,B.as(k.pB(824,310),j,j,j),k.Ul(824),A.P,k.LU(),A.T,B.D(k.a6I(3),1)],s),A.ad,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.u(B.a([k.uH(824,!0),A.aN,new B.am(A.V,j,A.a9,A.q,B.a([k.pB(824,430),B.an(18,k.c_S(k.c.b,17),j,j,18,j,j,j)],w),j),A.bs,k.avL(824,3,66),k.b1i(824),A.ab,B.p(j,j,A.h,B.aX(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.asD(),A.ay,B.D(k.Uw(2,18),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.u(B.a([k.uH(824,!0),A.bs,new B.a3(j,500,B.B(B.a([new B.a3(410,j,B.u(B.a([k.abm(k.c.b,B.aX(h).j(0.14),15,B.aX(h)),A.aN,k.aZw(410,4,58,28),k.axc(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),V.aHG,k.pB(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.ay,k.asD(),A.aN,B.D(k.Uw(2,18),1)],w),A.ad,j,A.e,A.j,0,A.p)
case 12:w=k.uH(824,!0)
v=k.pB(824,420)
u=B.hem(-0.25)
t=B.aX(h.x)
s=B.a([new B.aa(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.u(B.a([w,A.aN,new B.am(A.V,j,A.a9,A.q,B.a([v,B.an(22,B.fl(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cp4(i,30,A.c,1,A.cx,A.u),j,j,j),A.h,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bil,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bs,k.avL(824,3,62),k.b1i(824),A.ab,B.p(j,j,A.h,B.aX(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ab,k.aSC(A.kZ),A.ay,B.D(k.Uw(2,18),1)],r),A.ad,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.uH(824,!0)
u=h.w
t=x.p
w=B.a([k.pB(824,380),B.an(j,k.abm(w.b,B.aX(u).j(0.85),15,B.aX(h.f)),j,j,16,j,16,j)],t)
s=k.avL(824,2,60)
r=k.coi(824,2)
p=k.asD()
o=B.D(k.aLk(2,!1,18),1)
n=B.H(B.aX(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.aX(h).j(0.05)
return B.u(B.a([v,A.aN,new B.am(A.V,j,A.a9,A.q,w,j),A.aN,s,r,A.T,p,A.ay,o,A.ab,B.p(j,B.B(B.a([B.bv(B.m(14),k.rL(150,104),A.ap),A.nD,B.D(B.u(B.a([k.abm("RELATED",B.aX(h).j(0.14),12,B.aX(h)),A.P,B.d(q,j,2,A.Z,j,j,j,k.axi(i,19,1.15,A.I),j,j,j)],t),A.F,j,A.e,A.R,0,A.p),1),B.V(A.ek,B.aX(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.ad,j,A.e,A.j,0,A.p)
case 9:return B.u(B.a([k.uH(824,!0),A.bs,k.a8X(824,A.bf,3,62,30),k.ax9(824,A.bf,2,22),A.T,k.anA(!1),A.T,B.as(k.pB(824,330),j,j,j),k.aKi(824,A.bf),A.aN,B.D(k.bAn(2,40,21),1)],x.p),A.ad,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bW(0,B.bQ(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.aX(p),B.aX(q.r)],x.O),s,s),A.n),A.b7),0,0,0)],o)
if(q.ax)n.push(B.bW(0,B.b2(s,s,s,new C.b5f(B.aX(q.w),s),A.as),0,0,0))
w=q.w
n.push(new B.C(D.biQ,B.u(B.a([B.D(t.c6z(),1),A.P,B.p(s,s,A.h,B.aX(w),s,s,s,1.4,s,s,s,s,s,s),A.fW,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1v(r,11,1.4,A.I),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PZ(r,11,B.aX(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hv,A.j,0,s,s)],o),A.ad,s,A.e,A.j,0,A.p),s))
v=B.aX(w)
n.push(B.bW(0,B.e3(B.b2(s,s,s,new C.bnw(v.j(q.ch?0.07:0.06),s),A.as),!0,s),0,0,0))
p=B.aX(p).j(0.75)
v=B.H(B.aX(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hM(B.fC(q,A.B,s,s,A.ci,A.bN,!1,30,!1,s,30),A.ap))
else o.push(B.V(A.lZ,B.aX(w),s,s,s,28))
o.push(A.aa)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axk(r,15,1,1.6,A.u),s,s,s))
n.push(B.an(52,B.e3(B.d5(B.p(s,B.B(o,A.m,s,A.e,A.R,0,s,s),A.h,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bjT,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a3(900,1260,B.jy(new B.am(A.V,s,A.a9,A.q,n,s),A.q,s),s)}}
C.b8I.prototype={
iH(d){return C.fUR(d)},
ji(d){return!1}}
C.b8H.prototype={
a6(d,e){var w,v=C.fUR(e)
$.a1()
w=B.U()
w.r=this.b.gt(0)
w.b=A.ak
w.c=6
return d.b4(v,w)},
ao(d){return!d.b.A(0,this.b)}}
C.bq_.prototype={
iH(d){var w,v,u,t,s,r,q,p,o=new B.f5()
o.dZ(3)
w=$.a1()
v=B.a([],x.v)
u=new B.b0(w.r,A.aw,null,null,v)
u.N(new B.bj(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.av(s,o.af()*14)
v.push(w)
r=u.f
if(r!=null)w.bH(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.N(new B.av(t,8))
w=d.b
r=w-8
u.N(new B.av(t,r))
for(;t>0;t-=14){q=new B.av(t,w-o.af()*14)
v.push(q)
p=u.f
if(p!=null)q.bH(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.N(new B.av(0,r))
u.N(new B.bX())
return u},
ji(d){return!1}}
C.b5f.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f5()
k.dZ(7)
$.a1()
w=B.U()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.af()*0.07).gt(0)
q=k.af()
p=k.af()
o=k.af()
n=w.M()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.af()*u
p=k.af()*t
m=50+k.af()*90
w.sav(new B.bS(A.B,0.5,A.x,l,0,B.a([A.Iz.j(0.13),A.K],v),l,l).aC(0,B.c2(new B.v(q,p),m)))
n=w.M()
s.drawCircle(q,p,m,n)
n.delete()}w.sav(l)},
ao(d){return!1}}
C.bnw.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.j1(u,u,u,u,B.dr(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.cn,u,A.eM,A.cm)
s.fE()
w=d.a
J.bP(w.save())
w.translate(t/2,e.b*0.52)
d.q1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.v(-v/2,-t.gbe(t)/2))
w.restore()},
ao(d){return!d.b.A(0,this.b)}}
C.TQ.prototype={
S(){return new C.aB8()}}
C.aB8.prototype={
Z(){var w=this
w.a0()
B.h0x(w.a.c,null).bw(new C.e6r(),x.g7).bw(new C.e6s(w),x.a)
w.a.toString},
gaJ7(){var w=D.apz[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gatG(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaJ7()
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
return new B.af(q,w,q+s,w+t)},
XH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$XH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.n(new C.e6e(r))
t=4
q=r.gatG()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.a1()
n=new B.rs()
m=B.FB(n,null)
i=B.U()
i.Q=A.fG
m.Ax(g,q,new B.af(0,0,0+p,0+o),i)
w=7
return B.b(n.pM().ym(J.fKz(p),J.fKz(o)),$async$XH)
case 7:l=e
w=8
return B.b(l.hf(A.fI),$async$XH)
case 8:k=e
j=r.c
if(j!=null){j=B.a7(j,!1)
i=k
i.toString
j.K(J.f1(J.w_(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.n(new C.e6f(r))
r.c.F(x.q).f.P(D.erm)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$XH,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kA,s,s,s,new C.e6l(d),s,s,s,s,s,s),p=x.p
q=B.eA(B.a([B.bG(!1,D.f0U,s,s,!0,s,s,t.y||r==null?s:t.gc_T(),s,s)],p),s,s,!0,!0,A.zj,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.f4A,s,s,s,1,s,!0)
if(r==null)p=A.lH
else{w=B.D(new B.C(A.c1,B.as(new B.fM(t.gaJ7(),B.cj(new C.e6m(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jY,B.jO(s,s,s,new B.w(D.apz[u].a,s,E.aJp,s,s,s,s,s,s,s,s,s),s,new C.e6n(t,u),t.e===u,s,s,s,s),s))
p=B.u(B.a([w,B.p(s,B.br(!0,B.u(B.a([new B.a3(s,40,B.cK(v,s,s,s,s,A.aY,!1),s),B.B(B.a([D.byN,B.D(B.m8(s,s,s,6,1,new C.e6o(t),t.f),1),D.byo],p),A.m,s,A.e,A.j,0,s,s),D.eZx,A.ar,B.bG(!1,D.eZi,s,s,!0,s,s,new C.e6p(t,d),s,s)],p),A.m,s,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!1),A.h,D.TG,s,s,s,s,s,s,D.bfM,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.cg(q,A.zj,p,s,!1,!1,s,s)}}
C.b8e.prototype={
a6(d,e){var w
$.a1()
w=B.U()
w.Q=A.ci
return d.Ax(this.b,this.c,new B.af(0,0,0+e.a,0+e.b),w)},
ao(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.YO.prototype={
S(){var w=$.at(),v=x.A
return new C.aCq(new B.ao(A.aq,w),new B.ao(new B.bb("NGMY",A.b_,A.aL),w),new B.cn(null,v),new B.cn(null,v),A.d.gI(D.a_w),"quote"+1000*Date.now(),B.a([],x.t),B.aZ(x.S),A.L)}}
C.o3.prototype={}
C.aCq.prototype={
gaQP(){var w,v,u=this
if(u.p1)w=new B.wk(1,u.p2,0.9,u.p3).iF().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.U(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a0()
w.a.toString
w.p4=null
$.aS.x1$.push(new C.eD0(w))},
p(){var w=this.d,v=$.at()
w.R$=v
w.O$=0
w=this.e
w.R$=v
w.O$=0
this.a2()},
Wr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Wr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.ts().jR(0,"assets/images/ngmy_logo.png"),$async$Wr)
case 7:q=e
p=J.f1(J.w_(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bz5(new B.pg(p,1),o),$async$Wr)
case 10:case 9:if(r.c==null){w=1
break}r.n(new C.eBT(r,p))
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
return B.i($async$Wr,v)},
O3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$O3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().kB(92,1800,A.eu),$async$O3)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$O3)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bz5(new B.pg(p,1),n),$async$O3)
case 9:if(r.c==null){w=1
break}r.n(new C.eCg(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.a4(l)
n=r.c
if(n!=null)n.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$O3,v)},
aYV(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aK=w.az=w.aq=w.Y=w.b1=w.bc=w.y2=0
w.aZ=null
w.aW=0.25
w.b6=null
w.bE=0.5
w.aN=1
w.c4=w.bO=w.bd=0
w.cT=w.cQ=!1},
aSm(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bvR(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.cTV)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bvR(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bvR(C.fFK(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bvR(C.fFK(1-a0*0.5,n,n,n),w)}return a1?C.bvR(C.fFK(-1,255,255,255),w):w},
axh(){var w,v,u=B.ad("\\S+",!0,!1,!1,!1).ks(0,this.d.a.a),t=B.z(u,B.a2(u).k("F.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.yg(u,v,w)
this.dx.pt(new C.eCq(t),!0)
return t},
b0o(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.axh()
w=C.hKW(e.d.a.a,e.db)
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
return C.hHr(d,k,v,a0,j,e.gaQP(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cma(){return this.b0o(null)},
C0(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$C0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aS.gm4(),$async$C0)
case 3:w=4
return B.b(B.bK(A.eT,null,x.H),$async$C0)
case 4:w=5
return B.b($.aS.gm4(),$async$C0)
case 5:s=$.aS.ae$.x.h(0,t.r)
r=s==null?null:s.gb3()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.lP(1080/r.gX(0).a),$async$C0)
case 7:w=6
return B.b(e.hf(A.fI),$async$C0)
case 6:q=e
u=q==null?null:J.f1(A.dz.gaL(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$C0,v)},
a7y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a7y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eBC(q))
t=4
w=7
return B.b(q.C0(),$async$a7y)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cM.gcr().aF(p)
n=C.At(null,null,null,null,D.nx,6,!1,null,null,null,null,null,C.cx(),null,!1,null,"NGMY Quote",null,null,B.a([q.b0o(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a7(l,!1).K(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.a4(j)
l=q.c
if(l!=null)l.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eBD(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7y,v)},
zs(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$zs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.n(new C.eBA(q))
t=4
w=7
return B.b($.aS.gm4(),$async$zs)
case 7:w=8
return B.b(B.bK(A.nZ,null,x.H),$async$zs)
case 8:w=9
return B.b($.aS.gm4(),$async$zs)
case 9:k=$.aS.ae$.x.h(0,q.f)
p=k==null?null:k.gb3()
if(!(p instanceof B.q0))throw B.P("The picture is not ready yet.")
w=10
return B.b(p.lP(1080/p.gX(0).a),$async$zs)
case 10:o=e
w=11
return B.b(o.hf(A.fI),$async$zs)
case 11:n=e
if(n==null)throw B.P("Could not make the picture.")
w=12
return B.b(A4.adW(J.f1(A.dz.gaL(n)),"ngmy_quote.png","image/png"),$async$zs)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.F(x.q).f
k.P(B.b_(null,null,null,null,null,A.q,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.a4(i)
k=q.c
if(k!=null)k.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.eBB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zs,v)},
c9E(){var w=this.p4
w.toString
return B.cj(new C.eC9(this,w))},
aUH(d,e){var w=null
return B.bl(w,w,w,w,w,D.eB7,w,w,!0,new B.b1(4,B.m(16),N.vC),w,w,w,w,w,D.rg,!0,w,w,w,w,new B.b1(4,B.m(16),D.aPN),w,w,w,w,w,w,w,w,A_.BM,e,w,w,w,w,w,w,w,D.eG8,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
wS(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.V(e,A.b0,w,w,w,15),A.bo],v))
u.push(B.d(d,w,w,w,w,w,w,D.aK9,w,w,w))
return new B.C(D.bdL,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aUG(d,e){var w=null,v=B.m(18),u=B.H(A.bG,A.r,1)
return B.p(w,B.aD(!1,A.X,!0,w,d,A.h,w,0,w,w,w,w,w,A.jg),A.h,w,w,new B.o(D.rg,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
uM(d){return this.aUG(d,A.bA)},
nx(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.t0:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.H(f?A.K:A.bG,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.V(e,q?A.c:A.j9,r,r,r,16),A.bo],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.j9,r,r,r,r,r,r,r,r,12.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aJ(r,B.dg(r,B.B(s,A.m,r,A.e,A.R,0,r,r),r,r,A.b9,new B.o(w,r,u,v,r,p,A.n),A.hG,r,r,r,A.Dx,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
ad9(d,e,f){return this.nx(d,null,e,f)},
atK(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b0.j(0.28):A.c.j(0.05),t=g?A.ev:A.bG,s=x.p
v=B.a([B.dg(w,d,w,w,A.b9,new B.o(u,w,B.H(t,A.r,g?2:1),v,w,w,A.n),A.hG,w,e,w,new B.M(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.Z,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aJ(w,new B.a3(j,w,B.u(v,A.m,w,A.e,A.R,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.ae)},
aUK(d,e,f,g,h,i){return this.atK(d,e,f,g,h,5,i)},
jJ(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.D(B.d(d,u,u,u,u,u,u,D.eyf,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aJ(u,D.dLX,A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eCm(this,h,i),u,u,u,u,u,u,!1,A.ae))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aJh,u,u,u),A.h,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.VD,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.asq(w).czK(A.b0,A.bG,A.b0.j(0.2),A.c,D.eiJ,4)
return new B.C(A.wh,B.u(B.a([s,B.a7L(B.m8(u,u,u,g,f,new C.eCn(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
af9(d,e,f,g,h,i){return this.jJ(d,e,f,g,h,null,i)},
afz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.du:B.aX(u)
r=d==u
q=r?A.c:A.be
p=new B.ax(q,r?3:1,A.r,-1)
t=t?D.brX:o
n.push(B.aJ(o,B.p(o,t,A.h,o,o,new B.o(s,o,new B.c1(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eCp(this,e,u),o,o,o,o,o,o,!1,A.ae))}return B.cb(A.bH,n,A.bw,10,10)},
bEs(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a_w
else{v=x.a8
w=B.z(new B.a5(D.a_w,new C.eBs(o),v),v.k("F.E"))}v=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.d,n,n,n,n,n,2,o.aUH("Your quote",o.w.y),A.z,!0,n,!0,n,!1,n,A.af,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eBt(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.a4f,!0,A.a6,n,A.am,n,n,n,n)
u=B.aK(n,A.U,!1,n,!0,A.q,n,B.aL(),o.e,n,n,n,n,n,2,o.aUH("Who said it","NGMY"),A.z,!0,n,!0,n,!1,n,A.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eBu(o),n,n,n,!1,n,n,!1,n,!0,n,A.a8,n,n,n,n,n,n,n,n,n,n,n,A.di,!0,A.a6,n,A.am,n,n,n,n)
t=o.wS("DESIGNS",A.rQ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cxN[q]
r.push(new B.C(A.jY,o.ad9(p,o.x===p,new C.eBv(o,p)),n))}return B.u(B.a([v,A.T,u,t,B.ch(B.B(r,A.m,n,A.e,A.j,0,n,n),A.q,n,A.z,n,n,n,n,A.aY),A.ab,new B.a3(n,118,B.hE(n,new C.eBw(o,w),w.length,n,n,A.aY,new C.eBx(),!1),n),A.P,o.aUG(B.u(B.a([B.it(A.b0,n,n,A.ag,!0,new C.eBy(o),n,D.eRo,n,D.eO2,o.k3),B.it(A.b0,n,n,A.ag,!0,new C.eBz(o),n,n,n,D.eLs,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.acH)],s),A.F,n,A.e,A.j,0,A.p)},
cup(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.axh()
if(a7.length===0)return a5.uM(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Hd,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ad('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.al(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gai(v)+1
u=a5.dx
m=B.z(u,B.a2(u).k("ck.E"))
A.d.fw(m)
l=m.length!==0&&A.d.e8(m,new C.eCQ(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eCX(a5)
j=new C.eCZ()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Hd,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.b3(11,11)
f=u.q(0,h)?A.b0.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.ev:A.bG
d=new B.ax(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.al(w,a0,a0+e[0].length)
a0=B.ad("[*~^]",!0,!1,!1,!1)
e=B.aI(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a0
o.push(B.aJ(a6,B.p(a6,new B.w(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.h,a6,a6,new B.o(f,a6,new B.c1(d,d,d,d),new B.bu(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.K5,a6,a6,a6),A.z,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eCR(a5,h),a6,a6,a6,a6,a6,a6,!1,A.ae))}o=a5.uM(B.cb(A.bH,o,A.qV,6,6))
i=B.a([a5.nx("All words",K.agK,!1,new C.eCS(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ad9("Sentence "+a3,!1,new C.eCT(a5,a7,v,a2)))
a2=a3}}i.push(a5.ad9("Clear picks",!1,new C.eCU(a5)))
i=B.cb(A.bH,i,A.bw,8,8)
g=a5.wS("SIZE OF THE PICKED WORDS",D.agb)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.cYO[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eCV(e,k)
f.push(a5.ad9(a0.b,l===a4,e))}return B.u(B.a([q,A.T,o,A.T,i,g,B.cb(A.bH,f,A.bw,8,8),A.T,a5.nx("Make every word normal",A.mE,!1,new C.eCW(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cpM(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bkT,B.d(A.d.kV(D.ar9,new C.eCz(q)).b,p,p,p,p,p,p,D.ezI,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cj(new C.eCA(q)),l=q.wS("HIGHLIGHT BEHIND THE WORDS",A.Xr),k=q.p1?-1:q.k4
k=q.afz(k,new C.eCB(q),D.cHh)
w=q.p1
v=w?A.c:A.be
n=B.a([n,A.T,m,l,B.cb(A.bH,B.a([k,B.aJ(p,B.p(p,D.buV,A.h,p,p,new B.o(p,p,B.H(v,A.r,w?3:1),p,p,D.etY,A.a5),p,34,p,p,p,p,p,34),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCE(q),p,p,p,p,p,p,!1,A.ae)],o),A.qV,10,10),A.ar,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Hd,p,p,p)],o)
if(q.gaQP()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.af9("Colour",l,0,360,new C.eCF(q),""+A.k.U(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.af9("Shade",k,0.15,0.9,new C.eCG(q),""+A.k.U(k*100))],o))}l=q.ok
m.push(q.jJ("Strength",l,0.15,1,new C.eCH(q),1,""+A.k.U(l*100)+"%"))
A.d.v(n,B.a([A.T,q.uM(B.u(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.wS("LOOK",A.x6))
m=B.a([q.nx("Bold",I.ag8,q.fy,new C.eCI(q)),q.nx("Italic",I.ag9,q.go,new C.eCJ(q))],o)
for(u=0;u<3;++u){l={}
k=D.cyS[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.t0:p
w=w?p:A.c.j(0.07)
s=new B.b3(14,14)
r=new B.ax(q.id===l.a?A.K:A.bG,1,A.r,-1)
m.push(B.aJ(p,B.p(p,B.V(k.b,A.c,p,p,p,20),A.h,p,p,new B.o(w,p,new B.c1(r,r,r,r),new B.bu(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCK(l,q),p,p,p,p,p,p,!1,A.ae))}n.push(B.cb(A.bH,m,A.qV,8,8))
n.push(q.wS("COLOUR",A.nq))
n.push(q.afz(q.fx,new C.eCL(q),D.cR8))
n.push(A.ar)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Hd,p,p,p))
n.push(q.wS("SIZE AND PLACE",A.Er))
m=q.fr
m=q.jJ("Text size",m,0.5,1.6,new C.eCC(q),1,""+A.k.U(m*100)+"%")
l=q.k1
n.push(q.uM(B.u(B.a([m,q.jJ("Up / down",l,0.12,0.5,new C.eCD(q),0.3,""+A.k.U(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.u(n,A.F,p,A.e,A.j,0,A.p)},
c9F(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.H(A.b0.j(0.6),A.r,1.6)
u=B.a([A.b0.j(0.18),A.bz.j(0.12)],x.O)
return B.aJ(p,B.p(p,B.u(B.a([B.p(p,D.bA8,A.h,p,p,D.aSE,p,62,p,p,p,p,p,62),A.ay,D.eP9,A.ar,D.eTn],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(D.rg,p,v,w,p,new B.a8(A.a1,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bgY,p,p,1/0),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaUJ(),p,p,p,p,p,p,!1,A.ae)}w=x.p
v=B.B(B.a([B.bv(B.m(12),new B.a3(46,62,B.fC(o,A.B,120,p,A.ci,A.bN,!1,p,!1,p,p),p),A.ap),A.ba,B.D(B.u(B.a([D.eOK,A.P,B.cb(A.bH,B.a([q.nx("Change",A.ky,!1,q.gaUJ()),q.nx("Remove",A.e4,!1,new C.eCd(q))],w),A.bw,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.cO0[t]
u.push(q.nx(s.b,s.a,q.at===t,new C.eCe(q,t)))}u=B.cb(A.bH,u,A.bw,8,8)
r=q.at
A:{if(0===r){s=q.bUy(o)
break A}if(1===r){s=q.bTD()
break A}if(2===r){s=q.bAm()
break A}if(3===r){s=q.bGt()
break A}s=q.bCr()
break A}return B.u(B.a([v,A.ab,u,A.ay,s,A.T,new B.bF(A.a1,p,p,q.nx("Reset the whole picture",A.mE,!1,new C.eCf(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
bUy(d){var w=this,v=x.p
return B.u(B.a([B.cb(A.bH,B.a([w.nx("Auto enhance",E.X3,!1,new C.eC5(w)),w.nx("Make words easy to read",A.o9,!1,new C.eC6(w))],v),A.bw,8,8),A.ay,B.cj(new C.eC7(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bTD(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.jJ("Exposure",n,-1.5,1.5,new C.eBK(o),0,A.k.ab(n,1))
w=o.RG
w=o.jJ("Brightness",w,-0.5,0.5,new C.eBL(o),0,""+A.k.U(w*100))
v=o.rx
v=o.jJ("Contrast",v,0.4,2,new C.eBM(o),1,""+A.k.U(v*100))
u=o.xr
u=o.jJ("Fade",u,0,1,new C.eBN(o),0,""+A.k.U(u*100))
t=o.az
t=o.jJ("Spotlight",t,0,1,new C.eBO(o),0,""+A.k.U(t*100))
s=o.Y
s=o.jJ("Darken",s,0,0.85,new C.eBP(o),0,""+A.k.U(s*100))
r=o.b1
r=o.jJ("Vignette",r,0,0.9,new C.eBQ(o),0,""+A.k.U(r*100))
q=o.aB
q=o.jJ("Shade behind words",q,0,0.85,new C.eBR(o),0,""+A.k.U(q*100))
p=o.aK
return o.uM(B.u(B.a([n,w,v,u,t,s,r,q,o.jJ("Shade top & bottom",p,0,0.85,new C.eBS(o),0,""+A.k.U(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bAm(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.jJ("Colour strength",q,0,2.2,new C.eB5(s),1,""+A.k.U(q*100))
w=s.to
w=s.jJ("Warmth",w,-1,1,new C.eB6(s),0,""+A.k.U(w*100))
v=s.x1
v=s.jJ("Tint",v,-1,1,new C.eB7(s),0,""+A.k.U(v*100))
u=s.x2
t=x.p
u=s.uM(B.u(B.a([q,w,v,s.jJ("Shift colours",u,-180,180,new C.eB8(s),0,""+A.k.U(u)+"\xb0"),new B.bF(A.a1,r,r,s.nx("Negative",D.bpY,s.y1,new C.eB9(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.wS("COLOUR WASH",A.L1)
w=s.aZ
q=B.a([null],x.Z)
A.d.v(q,D.apZ)
t=B.a([u,v,s.afz(w,new C.eBa(s),q),A.P],t)
if(s.aZ!=null){q=s.aW
t.push(s.uM(s.af9("Wash strength",q,0,0.9,new C.eBb(s),""+A.k.U(q*100))))}return B.u(t,A.F,r,A.e,A.j,0,A.p)},
bGt(){var w,v,u,t,s,r=this,q=r.y2
q=r.jJ("Blur",q,0,24,new C.eBE(r),0,A.o.u(A.k.U(q)))
w=r.bc
w=r.jJ("Soft focus",w,0,1,new C.eBF(r),0,""+A.k.U(w*100))
v=r.aq
u=x.p
v=r.uM(B.u(B.a([q,w,r.jJ("Film grain",v,0,1,new C.eBG(r),0,""+A.k.U(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.wS("LIGHT LEAK",H.ag6)
q=r.b6
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.apZ,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.afz(q,new C.eBH(r),t),A.P],u)
if(r.b6!=null){q=r.bE
u.push(r.uM(r.af9("Leak strength",q,0,1,new C.eBI(r),""+A.k.U(q*100))))}return B.u(u,A.F,null,A.e,A.j,0,A.p)},
bCr(){var w,v,u,t,s=this,r=s.aN
r=s.jJ("Zoom",r,1,3,new C.eBf(s),1,""+A.k.U(r*100)+"%")
w=s.bd
w=s.jJ("Left / right",w,-1,1,new C.eBg(s),0,""+A.k.U(w*100))
v=s.bO
v=s.jJ("Up / down",v,-1,1,new C.eBh(s),0,""+A.k.U(v*100))
u=s.c4
t=x.p
return B.u(B.a([s.uM(B.u(B.a([r,w,v,s.jJ("Turn",u,-180,180,new C.eBi(s),0,""+A.k.U(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.T,B.cb(A.bH,B.a([s.nx("Turn 90\xb0",D.brx,!1,new C.eBj(s)),s.nx("Flip sideways",A.Eh,s.cQ,new C.eBk(s)),s.nx("Flip upside down",A.Eh,s.cT,new C.eBl(s))],t),A.bw,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
bXa(){var w=null,v=B.m(22),u=B.H(A.bG,A.r,1)
return B.p(w,B.u(B.a([D.eiV,A.T,D.eQt,A.ay,B.aJ(w,B.p(A.B,D.ej5,A.h,w,w,new B.o(w,w,w,B.m(16),w,G.t0,A.n),w,52,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eC8(this),w,w,w,w,w,w,!1,A.ae)],x.p),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(D.rg,w,u,v,w,w,A.n),w,w,w,w,A.c1,w,w,w)},
bUq(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eC0(p),m=x.p,l=B.B(B.a([D.bkZ,p.nx("Reset",A.mE,!1,new C.eBX(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Hd,o,o,o),j=p.wS("SHAPE",A.ahd),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Aw[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aUK(n.$2(t,p.cy),62,u.b,s===t,new C.eBY(v,p),62))}}i=B.cb(A.bH,i,A.bw,8,8)
v=p.wS("RING",A.rL)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ar[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aUK(n.$2(p.cx,t),62,r.b,q===t,new C.eBZ(s,p),62))}u=B.cb(A.bH,u,A.bw,8,8)
s=p.CW
return B.u(B.a([l,A.au,k,j,i,v,u,A.ab,p.uM(p.jJ("Size",s,0.12,0.4,new C.eC_(p),0.22,""+A.k.U(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
aXy(d){return new B.a3(null,d,new B.fM(0.5625,B.cj(new C.eCj(this)),null),null)},
cp5(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.H(A.bG,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.t0:q
t=new B.b3(14,14)
s=D.cPT[w]
r=v?A.c:A.aA
r=B.V(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bE(1,A.bn,B.aJ(A.c4,B.dg(q,B.u(B.a([r,A.d4,new B.pL(A.e8,A.B,A.h,new B.w(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.I,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.R,0,A.p),q,q,A.b9,new B.o(q,q,q,new B.bu(t,t,t,t),q,u,A.n),D.bcG,q,q,q,A.ht,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eCs(this,w),q,q,q,q,q,q,!1,A.ae),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.beL,A.lT,q,q,q)},
aLQ(){var w,v,u=this,t=null,s=u.cp5(),r=u.as
A:{if(0===r){w=u.bEs()
break A}if(1===r){w=u.cup()
break A}if(2===r){w=u.cpM()
break A}if(3===r){w=u.c9F()
break A}if(4===r){w=u.bUq()
break A}w=u.bXa()
break A}v=x.p
return B.bv(A.pL,B.ec(B.u(B.a([s,B.D(B.cK(B.a([w],v),t,D.bfN,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.TG,!0),A.ap)},
aI5(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc0j(),p=B.m(16)
q=B.D(B.aJ(r,B.p(r,D.eje,A.h,r,r,new B.o(A.c.j(0.08),r,B.H(A.be,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.ae),1)
p=s.Q?r:s.gbG4()
w=B.m(16)
v=B.a([new B.aa(0,A.G,A.bz.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.enH)
else t.push(D.bu1)
t.push(A.aa)
t.push(D.bmu)
return B.p(r,B.B(B.a([q,A.av,B.D(B.aJ(r,B.p(r,B.B(t,A.m,r,A.b5,A.j,0,r,r),A.h,r,r,new B.o(r,r,r,w,v,G.t0,A.n),r,50,r,r,r,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.ae),1)],u),A.m,r,A.e,A.j,0,r,r),A.h,r,r,D.aRP,r,r,r,r,G.acv,r,r,r)},
aUI(){var w=null
return new B.C(U.Vz,B.B(B.a([B.aF(w,w,w,w,A.mH,w,w,w,new C.eBJ(this),w,w,w,w,w,w),D.f3B,A.b6,D.bCl],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.cg(w,A.zj,B.br(!0,B.cj(new C.eD_(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bbL.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f5()
m.dZ(7)
w=e.a
v=e.b
u=A.k.U(w*v/55)
$.a1()
t=B.U()
s=this.b
t.r=A.c.j(0.16*s).gt(0)
r=B.U()
r.r=A.w.j(0.2*s).gt(0)
for(s=d.a,q=0;q<u;++q){p=m.af()*w
o=m.af()*v
n=((q&1)===0?t:r).M()
s.drawRect(B.cz(new B.af(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ao(d){return d.b!==this.b}}
C.qQ.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.lJ.prototype={}
C.yt.prototype={
ac(){var w=this
return B.E(["at",w.a.a4().aa(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nh.prototype={}
C.v9.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a5R.prototype={}
C.aos.prototype={}
C.Zj.prototype={
S(){return new C.aEk(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1),D.dde,B.a([],x.s),B.eN([D.G7],x.Q))}}
C.aEk.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.f.p()
this.a2()},
YY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$YY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().B_(90,700,700,A.eu),$async$YY)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$YY)
case 8:p=e
if(r.c!=null)r.n(new C.eIV(r,p,q))
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
return B.i($async$YY,v)},
Z0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$Z0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hP().aDt(78,n,1100,1100),$async$Z0)
case 7:q=e
if(J.ci(q)){w=1
break}p=B.bh(r.y,!0,x.N)
n=J.aU(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.a9(p)>=20){w=9
break}w=10
return B.b(o.f7(),$async$Z0)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.cf(p,"data:"+k+";base64,"+A.cM.gcr().aF(m))
w=8
break
case 9:if(r.c!=null)r.n(new C.eIW(r,p))
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
return B.i($async$Z0,v)},
aZv(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fC(A.cw.aF(A.d.gai(d.split(","))),A.B,u,u,A.ci,A.bN,!0,u,!1,u,u)
return w}catch(v){}return D.bbI},
bUw(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.ckq(C.fhY(w,this.aZv(d),f),g)},
a9O(d,e,f,g,h){var w=null,v=new C.eIT(f,e),u=new C.eIU(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.H(p?A.bG:A.b0.j(0.6),A.r,1)
if(p)p=new B.a3(34,30,new B.am(A.V,w,A.a9,A.h,B.a([B.as(B.V(f?A.Ae:A.KQ,A.c2,w,w,w,26),w,w,w),D.dQk],x.p),w),w)
else p=this.bUw(g,v.$1(h),u.$1(h),34)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.p(w,B.B(B.a([B.D(B.as(p,w,w,w),1),D.btI],x.p),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.lU,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIS(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.h,t,0,w,w,w,w,w,A.ac)},
aSs(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bv(B.m(8),B.fC(A.cw.aF(A.d.gai(h.split(","))),A.B,p,p,A.ci,A.bN,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.H(n?A.bG:A.br.j(0.6),A.r,1)
q=o
n=q==null?B.V(d,A.eX,p,p,p,20):q
n=B.a([n,A.aa,B.D(B.d(e,p,1,A.Z,p,p,p,A.a4k,p,p,p),1)],x.p)
if(f!=null)n.push(B.aJ(p,D.Yn,A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.ae))
return B.aD(!1,A.X,!0,u,B.aH(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.h,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.lS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.h,v,0,p,p,p,p,p,A.ac)},
a64(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a64=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fln(),$async$a64)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.n(new C.eIB(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.a4(n)
if(r.c!=null)r.n(new C.eIC(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a64,v)},
abu(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$abu=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.n(new C.eIE(r))
w=1
break}if(r.x==null){m=B.ad("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.n(new C.eIF(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.n(new C.eIG(r))
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
return B.b(C.fgF(q,r.cx,j,new C.aYH(r.z,r.Q,r.as,r.at),new C.eIH(r),i,m,p,k),$async$abu)
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
if(p!=null)B.a7(p,!1).K(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.a4(e)
if(r.c!=null)r.n(new C.eII(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abu,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eo,g).w
g=B.aG(d,A.bO,g).w
w=B.as(B.p(h,h,A.h,h,h,new B.o(A.be,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.aJ(h,B.p(h,D.bwR,A.h,h,h,new B.o(h,h,B.H(A.c.j(0.35),A.r,2),h,B.a([new B.aa(2,A.G,A.br.j(0.5),A.J,24)],v),D.bFo,A.a5),h,84,h,h,h,h,h,84),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJ8(i),h,h,h,h,h,h,!1,A.ae),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.Yn,h,h,h,i.ax?h:new C.eJ9(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbvy()
v=B.a([new B.aa(0,A.G,A.b0.j(0.45),A.J,10)],v)
s.push(B.hI(B.aD(!1,A.X,!0,h,B.aH(!1,h,!0,B.p(h,B.V(i.e==null?A.uo:A.hg,A.c,h,h,h,20),A.h,h,h,new B.o(h,h,h,h,v,E.uH,A.a5),h,40,h,h,h,h,h,40),A.cC,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.h,A.K,0,h,h,A.cC,h,h,A.ac),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.R,0,h,h)
s=A.c.j(0.05)
v=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.d,h,h,h,h,h,2,B.bl(h,h,h,h,h,h,h,h,!0,new B.b1(4,B.m(16),new B.ax(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b1(4,B.m(16),D.aPk),h,h,h,h,h,h,h,h,R.H1,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jY,v,h),h,h,h,h,h),A.z,!0,h,!0,h,!1,i.f,A.af,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,h,D.aJD,!0,A.a6,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eJa(i)
s=i.aSs(A.l_,q,r,i.gca5(),s)
r=i.z
r=B.D(i.a9O(new C.eJc(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.D(B.u(B.a([s,A.ar,B.B(B.a([r,A.bo,B.D(i.a9O(new C.eJd(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eJe(i)
s=i.aSs(A.um,r,p,i.gcad(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.D(i.a9O(new C.eJf(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.ay,D.eUv,A.au,D.eXb,A.bs,u,A.P,D.eVI,A.ay,v,A.bs,B.B(B.a([q,A.av,B.D(B.u(B.a([s,A.ar,B.B(B.a([p,A.bo,B.D(i.a9O(new C.eJg(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.ar,D.eYO],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.H(D.b5m,A.r,1)
w=C.aet(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.T,new B.bF(A.a1,h,h,B.p(h,B.B(B.a([D.bxW,A.bo,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.eEV,h,h,h),B.aH(!1,h,!0,D.dMa,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eJh(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.R,0,h,h),A.h,h,h,new B.o(D.b_t,h,u,v,h,h,A.n),h,h,h,h,D.beq,h,h,h),h)],t))}o.push(A.bs)
o.push(D.eM7)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cJc[m]
v=i.ch===l?A.b0:A.c.j(0.06)
u=i.ch===l
k=new B.ax(u?A.aA:A.bG,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bE(1,A.bn,new B.C(A.jZ,B.aJ(h,B.dg(A.B,new B.w(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b9,new B.o(v,h,new B.c1(k,k,k,k),h,h,h,A.a5),A.eE,h,42,h,h,h,h,h),A.z,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eJi(i,l),h,h,h,h,h,h,!1,A.ae),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bs)
o.push(D.f1X)
o.push(A.P)
o.push(B.cj(new C.eJj(i)))
o.push(A.bs)
o.push(D.eSP)
o.push(A.P)
w=B.a([i.b1b("auto","Let AI choose",A.dO,A.Nt)],t)
for(v=x.O,m=0;m<11;++m){j=D.uM[m]
u=j.d
w.push(i.b1b(j.a,j.b,j.c,B.a([B.aX(A.d.gI(u).a),B.aX(A.d.gI(u).b)],v)))}o.push(B.cb(A.bH,w,A.bw,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.H(i.r?A.br.j(0.5):A.bG,A.r,1)
o.push(B.p(h,B.it(h,A.br,h,h,h,new C.eJb(i),D.bt9,D.f1e,h,D.eOe,i.r),A.h,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.ay,B.d(w,h,h,h,h,h,h,D.aIU,h,h,h)],t))
o.push(A.bs)
w=i.ax?h:i.gc0n()
v=B.fd(h,h,A.b0,A.b0.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b5(B.m(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.enx:A.EJ
o.push(new B.a3(h,54,B.ld(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.op,h,h,h),w,v),h))
return new B.C(new B.M(0,0,0,f.f.d),B.p(h,B.br(!0,B.ch(B.u(o,A.ad,h,A.e,A.j,0,A.p),A.q,h,A.z,h,A.ud,h,h,A.ah),!0,!1,A.ag,!0,!1),A.h,h,new B.aW(0,680,0,g.a.b*0.92),D.a6T,h,h,h,h,h,h,h,h),h)},
bHx(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eIJ(this,p,d)
if(d===D.B7)return new C.aAY(p,o,q)
w=B.m(16)
v=p?E.uH:q
u=p?q:A.c.j(0.05)
t=B.H(p?A.aA:A.bG,A.r,1)
s=B.V(p?A.ej:C.hlk(d),A.c,q,q,q,20)
r=C.hll(d)
return B.aJ(q,B.dg(q,B.u(B.a([s,A.au,B.eX(A.B,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.h,A.e8)],x.p),A.m,q,A.b5,A.j,0,A.p),q,q,A.b9,new B.o(u,q,t,w,q,v,A.n),A.hG,q,64,q,A.he,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.ae)},
b1b(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.aj:A.bG
r=B.H(r,A.r,u?1.6:1)
w=B.p(v,B.V(f,A.c,v,v,v,14),A.h,v,v,new B.o(v,v,v,v,v,new B.a8(A.a1,A.a7,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aJ(v,B.dg(v,B.B(B.a([w,L.GW,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a0,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,v,v),v,v,A.b9,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.adL,v,v,v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eIY(this,d),v,v,v,v,v,v,!1,A.ae)}}
C.Zi.prototype={
S(){return new C.aEj(new B.ao(A.aq,$.at()))}}
C.aEj.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
abv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$abv=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.a9(a0)<3){r.n(new C.eIu(r))
w=1
break}B.eG()
r.n(new C.eIv(r))
t=4
q=C.hLP(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ad("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.hLz(j,k-1,q,i.b.test(h))
if(!p){r.n(new C.eIw(r,q))
w=1
break}k=r.c
if(k!=null)B.a7(k,!1).K(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ad("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fFq()
f=$.Br.h(0,k.a)
o=f==null||J.ci(f)?null:J.fg(f)
if(o==null){r.n(new C.eIx(r))
w=1
break}n=C.hLx(o,r.a.c)
C.hLt(r.a.c.a)
$.fEI=!0
k=r.c
if(k!=null)B.a7(k,!1).K(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fI2(j)
h=C.fI3(r.a.c)
e=C.fI4(r.a.c)
w=7
return B.b(C.by1(k,r.a.c.a,j,h,new C.eIy(r),i,e,a0),$async$abv)
case 7:m=a3
k=r.c
if(k!=null)B.a7(k,!1).K(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.a4(a1)
if(r.c!=null)r.n(new C.eIz(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eo,i).w
i=B.aG(d,A.bO,i).w
w=B.as(B.p(j,j,A.h,j,j,new B.o(A.be,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ahu,A.h,j,j,D.aRv,j,34,j,j,j,j,j,34),A.av,D.blw],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,R.aJl,j,j,j)
s=A.c.j(0.05)
s=B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),k.d,j,j,j,j,j,2,B.bl(j,j,j,j,j,j,j,j,!0,new B.b1(4,B.m(16),new B.ax(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b1(4,B.m(16),Al.a6o),j,j,j,j,j,j,j,j,R.H1,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.z,!0,j,!0,j,!1,j,A.af,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,D.aJD,!0,A.a6,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cFT[q]
o=A.c.j(0.06)
n=k.e?j:new C.eIA(k,p)
r.push(B.mG(j,o,new B.w(p,j,Ar.Qy,j,j,j,j,j,j,j,j,j),j,n,j,j,N.vC,j))}w=B.a([w,A.ay,u,A.ar,t,A.ay,s,A.T,B.cb(A.bH,r,A.bw,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ab,B.d(u,j,j,j,j,j,j,D.aIU,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gc0o()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.br.j(0.5),A.fq.j(0.5)],x.O):D.cf9
o=B.a([new B.aa(0,A.G,A.br.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.dM6:D.bxv
n=B.p(j,l,A.h,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aD(!1,A.X,!0,j,B.aH(!1,s,!0,B.eq(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.jo,j,j,j)],v),A.m,j,A.b5,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a1,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.h,A.K,0,j,j,j,j,j,A.ac))
return new B.C(new B.M(0,0,0,h.f.d),B.p(j,B.br(!0,B.ch(B.u(w,A.ad,j,A.e,A.j,0,A.p),A.q,j,A.z,j,A.ud,j,j,A.ah),!0,!1,A.ag,!0,!1),A.h,j,new B.aW(0,680,0,i.a.b*0.85),D.a6T,j,j,j,j,j,j,j,j),j)}}
C.aYH.prototype={}
C.aAY.prototype={
S(){return new C.bgl(null,null)}}
C.bgl.prototype={
gatL(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.oU,null,1,null,v)
w.cF(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
p(){this.gatL().p()
this.bpH()},
B(d){var w=null,v=this.a.d
return B.aJ(w,B.c4(this.gatL(),new C.e1o(this),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.ae)}}
C.bdY.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.cL8[s]
p=q.a*v
q=q.b*u
$.a1()
o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.r=D.w6.j(0.25+r*0.6).gt(0)
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
C.ap1.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.XG.prototype={
S(){return new C.ayq()}}
C.ayq.prototype={
gafw(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aeG(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzd(){var w=this.e
return w===$?this.e=C.fI2(this.a.c).q(0,D.B7):w},
a5S(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a5S=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.n(new C.daR(s))
u=3
r=A.d.kV(D.uM,new C.daS(s))
q=B.d4(C.fI2(s.a.c),x.Q)
l=q
J.hA(l,D.B7)
p=l
if(s.gzd())J.cf(p,D.B7)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzd()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fI3(i.c)
g=C.fI4(s.a.c)
w=6
return B.b(C.by1(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a5S)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aeG(q,s.gafw())
f=q==null?null:q.b
n=f==null?s.gafw():f
if(!J.y(n,r.a)&&!s.gzd())throw B.P("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a7(q,!1).K(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.a4(d)
if(s.c!=null)s.n(new C.daT(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a5S,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.c:A.M,k=m?A.aQ:A.al,j=m?A.M:A.c,i=B.m(28),h=B.H(m?A.bG:A.aJ,A.r,1),g=x.p,f=B.D(B.u(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.by,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.daW(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.V(A.cu,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.uM[w]
u=o.gafw()
t=o.f?n:new C.daX(o,v)
f.push(new C.boB(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dJ,!0)
u=B.m(18)
t=o.gzd()?D.bHT:n
if(o.gzd())s=n
else s=m?A.bj:A.bL
r=B.V(A.dO,o.gzd()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.D(B.u(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzd()?A.aj:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzd()
f=B.a([f,A.ay,B.p(n,B.B(B.a([r,A.av,q,B.fCB(n,A.c,n,A.bK,!1,A.z,n,n,n,n,n,n,o.f?n:new C.daY(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.acy,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.eFc,n,n,n)],g))
f=B.ch(B.u(f,A.F,n,A.e,A.j,0,A.p),A.q,n,A.z,n,A.JV,n,n,A.ah)
u=o.f?n:o.gbuy()
t=B.bk(A.K,n,n,n,n,n,A.ag,n,new B.b5(B.m(16),A.W),n,n,n)
s=B.m(16)
return B.br(!0,B.p(n,B.u(B.a([new B.C(D.bhr,e,n),new B.dl(1,A.cj,f,n),new B.C(A.DE,new B.a3(1/0,50,B.bH(B.eq(B.as(o.f?A.qN:D.eUX,n,n,n),n,new B.o(n,n,n,s,n,D.bGy,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.R,0,A.p),A.h,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.rA,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.boB.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.aX(s),B.aX(u.b)],x.O),q=this.d,p=B.H(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.aa(0,A.G,B.aX(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bF(A.kL,w,w,B.V(v.c,A.aj,w,w,w,18),w),new B.bF(A.lb,w,w,B.d(v.b,w,w,w,w,w,w,D.eFa,w,w,w),w)],x.p)
if(q)v.push(D.aNr)
return B.aJ(w,B.dg(w,new B.am(A.V,w,A.a9,A.q,v,w),w,w,A.b9,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.ch,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.ae)}}
C.e1l.prototype={
aB7(d,e,f){return e+"@"+A.a.aT(A.o.fF(f==null?this.a.c:f,16),8,"0").toUpperCase()},
vG(d,e){return this.aB7(0,e,null)}}
C.aIQ.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aYD.prototype={
B(d){var w,v,u=null,t=C.fGT(this.c)
if(t==null)w=D.bau
else{w=B.aG(d,u,x.w).w.czc(D.bdZ,D.emO)
v=this.d
w=B.tQ(B.e3(B.alr(!1,t,!1,v,!1,390),!v,u),w)}return B.eX(A.B,new B.a3(416,870,new C.bhY(w,u),u),A.h,A.dn)}}
C.bhY.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.cVu[w]
u=new B.b3(3,3)
s.push(new B.cE(v.a,v.b,t,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bu(u,u,u,u),t,D.ajm,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.cWz[w]
u=new B.b3(3,3)
s.push(new B.cE(t,v.a,-3,t,t,t,B.p(t,t,A.h,t,t,new B.o(t,t,t,new B.bu(u,u,u,u),t,D.ajm,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bW(0,B.bQ(t,new B.o(t,t,t,B.m(64),D.cwF,D.bF6,A.n),A.b7),0,0,0))
s.push(B.bW(3,B.bQ(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.b7),3,3,3))
s.push(B.bW(13,B.bv(B.m(51),B.ec(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.an(t,B.as(B.p(D.aNC,B.p(t,t,A.h,t,t,D.aRN,t,11,t,t,t,t,t,11),A.h,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bW(13,B.e3(B.bv(B.m(51),D.bbO,A.ap),!0,t),13,13,13))
s.push(B.an(22,B.e3(B.as(B.p(t,t,A.h,t,t,new B.o(A.aj,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.am(A.V,t,A.a9,A.h,s,t)}}
C.kV.prototype={
oM(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cx(),f=C.cx(),e=m.r
f=C.ei(A.L,!1,e.l(),A.az,"",k,42,A.bg,A.u,"",0.22,f,l,"","",0,!1,"",0,D.b8,j,2,"Your Presentation Title",0,0,"",D.m7,D.cJ,0.84,0.08,0.26)
w=C.cx()
v=m.w
w=C.ei(A.L,!1,v.l(),A.az,"",k,20,A.bg,A.a0,"",0.12,w,l,"","",0,!1,"",0,D.b8,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.d8,D.cJ,0.76,0.12,0.56)
u=C.cx()
t=m.d
s=x.u
t=C.qR(i,l,0,0,B.a([f,w,C.ei(A.bf,!1,4279310375,A.az,"",t.j(0.8).l(),24,A.bg,A.a0,"",0.006,u,l,"","",0,!1,"",0,D.fb,t.l(),3,"",0,0,"",D.cb,D.eQ,0.3,0.35,0.72)],s),C.cx(),D.m6,"","","Welcome",D.d8)
u=C.cx()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,34,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b8,j,2,"Agenda",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
w=C.cx()
w=C.qR(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.az,"",k,22,A.bg,A.a0,"",0.6,w,l,"","",0,!1,"",0,D.b8,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.te,D.cJ,0.8,0.1,0.26)],s),C.cx(),D.m6,"","","Agenda",D.d8)
u=C.cx()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,32,A.bg,A.u,"",0.14,u,l,"","",0,!1,"",0,D.b8,j,2,"Main Idea",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
f=C.cx()
f=C.qR(i,l,0,0,B.a([u,C.ei(A.bf,!0,v.l(),A.az,"",k,21,A.bg,A.a0,"",0.62,f,l,"","",0,!1,"",0,D.b8,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cb,D.cJ,0.8,0.1,0.26)],s),C.cx(),D.m6,"","","Key Point 1",D.d8)
u=C.cx()
u=C.ei(A.bf,!1,e.l(),A.az,"",k,30,A.bg,A.u,"",0.12,u,l,"","",0,!1,"",0,D.b8,j,2,"Compare & Contrast",0,0,"",D.cb,D.cJ,0.84,0.08,0.08)
r=C.cx()
r=C.ei(A.bf,!0,v.l(),A.az,"",k,18,A.bg,A.a0,"",0.62,r,l,"","",0,!1,"",0,D.b8,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cb,D.cJ,0.4,0.08,0.24)
q=C.cx()
q=C.qR(i,l,0,0,B.a([u,r,C.ei(A.bf,!0,v.l(),A.az,"",k,18,A.bg,A.a0,"",0.62,q,l,"","",0,!1,"",0,D.b8,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cb,D.cJ,0.4,0.52,0.24)],s),C.cx(),D.m6,"","","Key Point 2",D.d8)
r=C.cx()
r=C.ei(A.L,!1,e.l(),A.az,"",k,48,A.bg,A.u,"",0.2,r,l,"","",0,!1,"",0,D.b8,j,2,h,0,0,"",D.d8,D.cJ,0.8,0.1,0.32)
e=C.cx()
p=C.At(l,l,l,l,D.B3,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.qR(i,l,0,0,B.a([r,C.ei(A.L,!1,v.l(),A.az,"",k,22,A.bg,A.a0,"",0.1,e,l,"","",0,!1,"",0,D.b8,j,2,"Questions?",0,0,"",D.cb,D.cJ,0.7,0.15,0.58)],s),C.cx(),D.m6,"","",h,D.d8)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Dk.prototype={
bH(d){return this.e.$1(d)}}
C.ek.prototype={}
C.iM.prototype={}
C.Db.prototype={
gaGD(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aet(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a1c(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Db(v,u,t,d==null?w.d:d)},
Ej(d){return this.a1c(null,d,null,null)},
azU(d){return this.a1c(null,null,null,d)},
cza(d,e){return this.a1c(d,e,null,null)},
b6g(d){return this.a1c(d,null,null,null)},
b6n(d){return this.a1c(null,null,d,null)}}
C.LI.prototype={
S(){return new C.bfI(new B.eL(0,$.at()),null,null)}}
C.bfI.prototype={
Z(){var w,v=this
v.a0()
w=v.qQ(new C.dL7(v))
v.e!==$&&B.aO()
v.e=w
if(v.a.e)w.kk(0)
else v.d.st(0,3.2)},
p(){var w=this.e
w===$&&B.c()
w.p()
w=this.d
w.R$=$.at()
w.O$=0
this.bp9()},
B(d){var w=C.aet(this.a.c.a)
if(w==null)w=A.d.gI(D.F2)
return B.cj(new C.dL6(this,w,C.fWE(this.a.c.d)))}}
C.bnb.prototype={
B(d){return B.nm(A.Se,this.e,new C.eHI(this,A.k.J(this.d*0.35,1.6)-0.3))}}
C.baR.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aOl(d,e,v)
break
case"confetti":w.bAR(d,e,v)
break
case"crown":w.bCs(d,e,v)
break
case"aurora":w.bvC(d,e,v)
break
case"champagne":w.byK(d,e,v)
break
case"diamonds":w.bEB(d,e,v)
break
case"starburst":w.cmR(d,e,v)
break
case"balloons":w.bvQ(d,e,v)
break
case"galaxy":w.bJd(d,e,v)
break
case"redcarpet":w.ce9(d,e,v)
break
case"coins":w.bAe(d,e,v)
break
case"lanterns":w.bTb(d,e,v)
break
case"hearts":w.bQT(d,e,v)
break
case"petals":w.c9x(d,e,v)
break
case"butterflies":w.bxN(d,e,v)
break
case"neon":w.bWV(d,e,v)
break
case"disco":w.bEM(d,e,v)
break
case"sunrise":w.cok(d,e,v)
break
case"pearls":w.c8B(d,e,v)
break
case"snow":w.cmy(d,e,v)
break
case"laurel":w.bTh(d,e,v)
break
case"ribbons":w.cgC(d,e,v)
break
case"kente":w.bT0(d,e,v)
break
case"trophy":w.crS(d,e,v)
break
case"shooting":w.ckr(d,e,v)
break
case"bokeh":w.bw6(d,e,v)
break
case"orbits":w.c6j(d,e,v)
break
case"flowers":w.bIw(d,e,v)
break
case"music":w.bWG(d,e,v)
break
case"mandala":w.bV7(d,e,v)
break
case"sparklers":w.cmH(d,e,v)
break
case"city":w.bzy(d,e,v)
break}},
qH(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.a1()
v=B.U()
v.r=g.j(A.k.D(h,0,1)).gt(0)
v.a=A.n_
u=new B.b0(w.r,A.aw,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.N(new B.bj(w,s))
u.N(new B.dn(w,t,w+f,t))
u.N(new B.dn(w,t,w,t+f))
u.N(new B.dn(w,t,w-f,t))
u.N(new B.dn(w,t,w,s))
u.N(new B.bX())
d.b4(u,v)
d.aw(e,f*0.18,v)},
lc(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.U(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cM(q,v)*2.5)+C.cM(q,u)*6.28)+1)/2
this.qH(d,new B.v(C.cM(q,t)*o,C.cM(q,s)*n),m*(0.006+0.014*C.cM(q,r))*(0.5+p),h,p*p)}},
aOl(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lc(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aZ],w),B.a([A.i6,A.bz],w),B.a([A.eq,A.b4],w),B.a([A.c,A.at],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bK(k/2.8)
i=A.k.J(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cM(h,1))
f=g+c0*(C.cM(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cM(h,3))
d=v[Math.abs(A.o.J(h,4))]
if(i<0.22){a0=B.l0(new B.v(g,c1),new B.v(f,e),A.co.ar(0,i/0.22))
a0.toString
$.a1()
a1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a1.sav(new B.a8(A.a1,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).aC(0,B.qT(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bZ
a2=B.l0(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.M()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a2.r=A.c.gt(0)
a3=a2.M()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.co.ar(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.U(q))
a2=C.cM(h,4)
if(a5<0.15){a4=1-a5/0.15
$.a1()
a8=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a8.r=d[0].j(0.5*a4).gt(0)
a8.z=new B.hF(A.G,o)
a3=a8.M()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cM(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cM(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.a1()
b9=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
b9.r=b8.j(a8).gt(0)
b9.c=u
b9.d=A.bZ
b9.a=A.n_
a3=b9.M()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cM(h,b1+120)>0.5)this.qH(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bAR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.J(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.a1(),a0=B.U()
a0.sav(new B.a8(A.ax,A.aC,A.x,D.cQQ,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aC(0,new B.af(0,0,f,e)))
a1.bp(new B.af(0,0,f,e),a0)
a0=Math.max(4,A.k.U(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.J(a3*(h*(0.08+0.12*C.cM(u,1)))+C.cM(u,2)*w,w)
s=C.cM(u,3)
r=Math.sin(a3*(0.8+C.cM(u,4))+u)
q=h*(0.012+0.012*C.cM(u,5))
p=Math.cos(a3*(2+3*C.cM(u,6))+u)
o=D.MY[A.o.D(A.k.bK(C.cM(u,7)*5),0,4)]
J.bP(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cM(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gt(0)
if(A.o.J(u,5)===0){t=B.a([],v)
m=new B.b0(d.r,A.aw,null,null,t)
d=-q*2
t.push(new B.bj(d,0))
for(l=1;l<=8;++l){s=new B.av(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bH(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.a1()
t=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
t.r=B.aX(n.r).gt(0)
t.b=A.ak
t.c=q*0.35
k=t.M()
t=m.e
f.drawPath((t==null?m.e=new B.cG(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.dy(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.M()
f.drawRect(B.cz(t),k)
k.delete()}f.restore()}this.lc(a1,a2,a3,25,A.bK,30)},
bCs(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.a1()
n=B.a([],r)
m=new B.b0(o.r,A.aw,a4,a4,n)
n.push(new B.bj(a5,a6))
o=p-0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.av(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bX())
o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.sav(new B.bS(A.B,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b10],v),a4,a4).aC(0,B.c2(w,u)))
l=o.M()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cG(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.b0($.a1().r,A.aw,a4,a4,B.a([],r))
v=a6+j
i.N(new B.bj(a5,v))
u=j*0.3
s=a6+u
i.N(new B.av(a5,s))
o=a6+j*0.6
i.N(new B.av(a5+k*0.22,o))
i.N(new B.av(a5+k*0.5,a6))
i.N(new B.av(a5+k*0.78,o))
o=a5+k
i.N(new B.av(o,s))
i.N(new B.av(o,v))
i.N(new B.bX())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.U()
n.sav(new B.a8(A.b3,A.bb,A.x,D.cPO,a4,a4).aC(0,new B.af(a5,a6,o,v)))
a8.b4(i,n)
for(v=[D.dYE,D.dT3,D.e6k],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a1.r=a0.gt(a0)
l=a1.M()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a1.r=A.aj.gt(0)
l=a1.M()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
g.r=A.hD.gt(0)
l=g.M()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.A_(i),u=B.a([],x.X),o=new B.xS(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jH(y.M));--f
o.ld()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.b0(n,v.b,a4,new B.d8([new B.FU(o,f),0,d*h,!0]),B.a([],r))
f=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
f.b=A.ak
f.c=g
f.e=A.fl
f.r=A.bK.gt(0)
l=f.M()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cG(f)).a,l)
l.delete()}if(s){a3=A.k.J(b0*0.5,1)
this.qH(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lc(a8,a9,b0,45,A.bK,40)},
bvC(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lc(a8,a9,b0,60,A.c,50)
w=[D.efQ,D.efy,D.eft,D.egD]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.a1()
i=B.a([],p)
h=new B.b0(n.r,A.aw,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.bj(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bH(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.av(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bH(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.a1()
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
n.b=A.ak
n.c=t
n.r=m.j(0.28).gt(0)
n.a=A.n_
n.z=new B.hF(A.G,s)
a2=n.M()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
n.b=A.ak
n.c=v
n.r=m.j(0.55).gt(0)
n.a=A.n_
n.z=new B.hF(A.G,v)
a2=n.M()
n=h.e
u.drawPath((n==null?h.e=new B.cG(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.U(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.J(t*(0.05+0.06*C.cM(a4,1))+C.cM(a4,2)*a3,a3)
r=C.cM(a4,3)
q=Math.sin(b0+a4)
p=C.cM(a4,4)
$.a1()
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
n.r=A.w5.j(0.4+0.5*C.cM(a4,5)).gt(0)
n.a=A.n_
a2=n.M()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
byK(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.a1(),a0=B.U()
a0.sav(new B.bS(A.B,0.5,A.x,l,0,B.a([A.hn.j(0.25+0.1*h),D.TM],x.O),l,l).aC(0,B.c2(new B.v(g,f),e)))
a1.aw(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.b0(d.r,A.aw,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.bj(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.av(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bH(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.a1()
a0=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a0.b=A.ak
a0.c=h
a0.r=D.MY[A.o.J(w,4)].j(0.7).gt(0)
p=a0.M()
a0=u.e
g.drawPath((a0==null?u.e=new B.cG(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.U(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.J(a3*(i*(0.07+0.12*C.cM(w,1)))+C.cM(w,2)*o,o)
r=k*(0.1+0.8*C.cM(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cM(w,4))
if(n<f){this.qH(a1,new B.v(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.a1()
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.z5.j(0.75).gt(0)
p=d.M()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
t.r=A.c.j(0.8).gt(0)
p=t.M()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bEB(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lc(a9,b0,b1,30,A.kO,60)
for(w=Math.max(4,A.k.U(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cM(p,1))
n=a7+o*4
m=A.k.J(t*(0.04+0.06*C.cM(p,2))+C.cM(p,3)*n,n)-o*2
l=C.cM(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bP(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.a1()
g=B.a([],q)
f=new B.b0(h.r,A.aw,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.bj(e,i))
h*=0.28
j*=0.6
g.push(new B.av(h,j))
d=o*0.28
g.push(new B.av(d,j))
a0=o*0.5
g.push(new B.av(a0,i))
a1=k*0.6
g.push(new B.av(0,a1))
g.push(new B.bX())
g=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
g.sav(new B.a8(A.ax,A.aC,A.x,D.cM6,a5,a5).aC(0,B.dy(A.J,k*1.2,o)))
a2=g.M()
g=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(g)).a,a2)
a2.delete()
a3=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a3.b=A.ak
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
if(a4>0.85)this.qH(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cmR(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.a1()
o=B.a([],v)
n=new B.b0(p.r,A.aw,null,null,o)
o.push(new B.bj(h,g))
p=s-q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.av(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bX())
p=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
p.r=A.bK.j(r?0.12:0.07).gt(0)
m=p.M()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cG(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.J(a0+l*0.6,1.8)/1.8
$.a1()
u=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
u.b=A.ak
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gt(0)
m=u.M()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bK(a0/2.4)
k=A.k.J(a0,2.4)/2.4
for(w=Math.max(4,A.k.U(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cM(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bba.ar(0,k)*(0.5+0.5*C.cM(t,v)))
this.qH(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cM(t,3)),D.MY[A.o.D(A.k.bK(C.cM(t,4)*5),0,4)],u)}},
bvQ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.U(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cM(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.J(q*(0.05+0.05*C.cM(o,2))+C.cM(o,3)*m,m)
j=C.cM(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aql[A.o.J(o,6)]
h=$.a1()
g=B.a([],s)
f=new B.b0(h.r,A.aw,a3,a3,g)
h=k+n*1.15
g.push(new B.bj(j,h))
for(e=1;e<=6;++e){d=new B.av(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bH(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.a1()
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gt(0)
a1=d.M()
d=f.e
u.drawPath((d==null?f.e=new B.cG(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.dy(new B.v(j,k),n*2.3,l)
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d=B.aq(i,A.w,0.35)
d.toString
l.sav(new B.bS(D.aNF,0.9,A.x,a3,0,B.a([A.c,i,d],t),P.aqc,a3).aC(0,a2))
a1=l.M()
u.drawOval(B.cz(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.b0(g.r,A.aw,a3,a3,l)
d=n*0.12
l.push(new B.bj(j-d,h))
l.push(new B.av(j+d,h))
l.push(new B.av(j,k+n))
l.push(new B.bX())
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l.r=B.aq(i,A.w,0.3).gt(0)
a1=l.M()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cG(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.U(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.J(q*(0.1+0.1*C.cM(o,11))+C.cM(o,12)*m,m)
r=C.cM(o,13)
J.bP(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.dy(A.J,t,v)
$.a1()
r=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
r.r=D.aql[A.o.J(o,6)].j(0.85).gt(0)
a1=r.M()
u.drawRect(B.cz(s),a1)
a1.delete()
u.restore()}},
bJd(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lc(b1,b2,b3,50,A.c,70)
for(w=[D.efY,D.efE,D.efK],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.a1()
k=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
k.sav(new B.bS(A.B,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aC(0,B.c2(new B.v(r,m),l)))
j=k.M()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.U(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.J(i,3)
g=C.cM(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cM(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.ev,g)
k.toString
d=C.cM(i,3)
$.a1()
a0=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a0.r=k.j(0.5+0.5*C.cM(i,4)).gt(0)
a0.a=A.n_
j=a0.M()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.a1()
a9=B.U()
a9.sav(new B.bS(A.B,0.5,A.x,a4,0,B.a([A.z5.j(0.55),D.aam],u),a4,a4).aC(0,B.c2(b0,a8)))
b1.aw(b0,a8,a9)
a1=A.k.J(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bK(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cM(a2,9)),a6*0.1*C.cM(a2,8))
a5=B.l0(a3,a3.ap(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.l0(a3,a5,0.6)
a6.toString
a8=B.U()
a8.sav(new B.a8(A.a1,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aC(0,B.qT(a3,a5)))
a8.c=a7*0.005
a8.d=A.bZ
b1.bU(a6,a5,a8)}},
ce9(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.a1()
n=B.a([],s)
m=new B.b0(o.r,A.aw,b5,b5,n)
n.push(new B.bj(q,u))
o=p-0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.av(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bX())
o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.sav(new B.bS(A.B,0.5,A.x,b5,0,B.a([A.z5.j(0.28),D.aam],w),b5,b5).aC(0,B.c2(new B.v(q,u),t)))
o.a=A.n_
l=o.M()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.fg:A.f5)
a9=$.a1()
b0=B.a([],s)
m=new B.b0(a9.r,A.aw,b5,b5,b0)
b0.push(new B.bj(a5?0:b6,0))
b0.push(new B.av(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.dn(a9,k,a5?g:a1,b7))
b0.push(new B.av(a5?0:b6,b7))
b0.push(new B.bX())
a9=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a9.sav(new B.a8(A.a1,A.a7,A.x,a7,b5,b5).aC(0,new B.af(a6,0,a6+i,j)))
l=a9.M()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cG(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
b1.r=A.hn.gt(0)
b1.c=o
b1.d=A.bZ
l=b1.M()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.b0($.a1().r,A.aw,b5,b5,B.a([],s))
w=b7*0.78
b2.N(new B.bj(b6*0.42,w))
b2.N(new B.av(b6*0.58,w))
b2.N(new B.av(b6*0.8,b7))
b2.N(new B.av(b6*0.2,b7))
b2.N(new B.bX())
v=B.U()
v.sav(D.bGs.aC(0,new B.af(0,w,0+b6,w+b7*0.22)))
b9.b4(b2,v)
for(w=Math.max(4,A.k.U(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.J(b7*(0.05+0.07*C.cM(r,1))+C.cM(r,2)*b3,b3)
u=C.cM(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.qH(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cM(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bAe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.U(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cM(t,1))
r=h+s*4
q=s*2
p=A.k.J(u*(0.12+0.12*C.cM(t,2))+C.cM(t,3)*r,r)-q
o=C.cM(t,4)*i
n=Math.cos(f*(2+3*C.cM(t,5))+t)
m=Math.abs(n)
l=B.dy(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.a1()
q=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
q.sav(new B.a8(A.ax,A.aC,A.x,n>0?D.cZj:D.ckI,null,null).aC(0,l))
k=q.M()
v.drawOval(B.cz(l),k)
k.delete()
q=-(s*0.22)
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.c=Math.max(0.6,s*0.08)
j.r=D.b8I.gt(0)
k=j.M()
v.drawOval(B.cz(new B.af(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.qH(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lc(d,e,f,30,A.bK,110)},
bTb(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lc(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.U(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cM(p,1))
n=a1+o*4
m=a1+o*2-A.k.J(t*(0.03+0.04*C.cM(p,2))+C.cM(p,3)*n,n)
l=C.cM(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.a1()
h=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
h.sav(new B.bS(A.B,0.5,A.x,d,0,B.a([H.aau.j(0.45*k),D.a9o],u),d,d).aC(0,B.c2(new B.v(l,m),j)))
g=h.M()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.b0(i.r,A.aw,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.bj(l-i,e))
j.push(new B.av(l+i,e))
i=o*0.38
h=m+h
j.push(new B.av(l+i,h))
j.push(new B.av(l-i,h))
j.push(new B.bX())
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
i=B.aq(D.b19,A.c,0.2*k)
i.toString
j.sav(new B.a8(A.b3,A.bb,A.x,B.a([D.b53,i],u),d,d).aC(0,B.dy(new B.v(l,m),o*1.4,o)))
g=j.M()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cG(j)).a,g)
g.delete()
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(k).gt(0)
g=j.M()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bQT(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.U(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cM(p,1))
n=a1+o*4
m=A.k.J(s*(0.05+0.06*C.cM(p,2))+C.cM(p,3)*n,n)
l=C.cM(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bP(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.a1()
l=B.a([],t)
i=new B.b0(m.r,A.aw,d,d,l)
m=o*0.9
l.push(new B.bj(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.p4(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.p4(m,g,o*1.8,h,0,m))
l.push(new B.bX())
f=D.cDZ[A.o.J(p,5)]
m=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l=B.aq(f,A.w,0.25)
l.toString
m.sav(new B.bS(A.vw,0.5,A.x,d,0,B.a([A.c,f,l],u),H.Zv,d).aC(0,B.c2(A.J,o*1.4)))
e=m.M()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cG(m)).a,e)
e.delete()
v.restore()}this.lc(a3,a4,a5,30,A.i6,130)},
c9x(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cM(q,1))
o=g+p*4
n=A.k.J(t*(0.05+0.06*C.cM(q,2))+C.cM(q,3)*o,o)
m=C.cM(q,4)
l=Math.sin(s+q*0.7)
J.bP(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cM(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.a1()
m=B.a([],u)
k=new B.b0(n.r,A.aw,i,i,m)
n=-p
m.push(new B.bj(0,n))
l=n*0.2
m.push(new B.dn(p,l,0,p))
m.push(new B.dn(n,l,0,n))
m.push(new B.bX())
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
m=(q&1)===0?D.cf8:D.cNf
n.sav(new B.a8(A.a1,A.a7,A.x,m,i,i).aC(0,B.c2(A.J,p)))
j=n.M()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cG(n)).a,j)
j.delete()
v.restore()}this.lc(d,e,a0,25,A.bK,140)},
bxN(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lc(b0,b1,b2,40,A.bK,150)
for(w=Math.max(4,A.k.U(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cM(r,1))
p=Math.sin(b2*(0.15+0.1*C.cM(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cM(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bP(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bP(v.save())
v.scale(a1*n,1)
a2=$.a1()
a3=B.a([],u)
a4=new B.b0(a2.r,A.aw,a6,a6,a3)
a3.push(new B.bj(0,0))
a3.push(new B.p4(f,e,l,d,h,0))
a3.push(new B.p4(q,h,g,q,0,h))
a3.push(new B.bX())
a2=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a2.sav(new B.a8(A.a1,A.a7,A.x,i?D.cN_:D.cPm,a6,a6).aC(0,new B.af(0,m,k,j)))
a5=a2.M()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cG(a2)).a,a5)
a5.delete()
a2=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a2.b=A.ak
a2.c=Math.max(0.6,o)
a2.r=D.zb.gt(0)
a5=a2.M()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cG(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.a1()
p=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
p.r=D.b87.gt(0)
p.c=q*0.1
p.d=A.bZ
a5=p.M()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
bWV(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.J(w+t/4,1)
r=f*(0.2+0.7*s)
$.a1()
q=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
q.b=A.ak
q.c=v
q.r=D.ari[t].j((1-s)*0.9).gt(0)
q.z=new B.hF(A.G,v)
p=r*0.3
p=B.c_(B.dy(e,r,r*1.6),new B.b3(p,p))
o=q.M()
u.drawRRect(B.fL(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cM(m,1)*4)+m)))
k=D.ari[A.o.J(m,4)]
j=m*n+h
i=g-l
i=B.c_(new B.af(j,i,j+w,i+l),new B.b3(v,v))
$.a1()
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.r=k.j(0.85).gt(0)
j.z=new B.hF(A.a6c,p)
o=j.M()
u.drawRRect(B.fL(i),o)
o.delete()}},
bEM(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.U(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cM(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cM(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.oE,A.dE][A.o.J(p,4)]
j=C.cM(p,3)
$.a1()
i=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
i.r=k.j(0.75).gt(0)
i.a=A.n_
i.z=new B.hF(A.G,r)
h=i.M()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.a1()
t=B.U()
t.r=A.aA.gt(0)
t.c=1.2
a3.bU(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.U()
t.r=A.fN.gt(0)
a3.aw(v,u,t)
J.bP(q.save())
a1=new B.b0(a1.r,A.aw,null,null,B.a([],x.v))
a1.N(new B.kw(B.c2(v,u)))
a3.tj(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.J(a1,g)
i=Math.sin(e*1.7+l+s)
$.a1()
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.r=B.aq(A.bv,A.c,0.4+0.6*((i+1)/2)).gt(0)
h=d.M()
q.drawRect(B.cz(new B.af(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.qH(a3,v.ap(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cok(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.co.ar(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.a1()
q=B.a([],u)
p=new B.b0(r.r,A.aw,h,h,q)
q.push(new B.bj(d,a0))
r=s-0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.av(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bX())
r=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
r.r=A.bK.j(0.1).gt(0)
o=r.M()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cG(r)).a,o)
o.delete()}d=e*0.5
$.a1()
a0=B.U()
a0.sav(new B.bS(A.B,0.5,A.x,h,0,B.a([D.aYK.j(0.6),D.a9o],x.O),h,h).aC(0,B.c2(a1,d)))
a2.aw(a1,d,a0)
a0=e*0.2
d=B.U()
d.sav(D.dR9.aC(0,B.c2(a1,a0)))
a2.aw(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.J(d*(1+t*0.3)+C.cM(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.r=A.c.j(0.18).gt(0)
i=B.dy(new B.v(l,k),r,u)
o=j.M()
w.drawOval(B.cz(i),o)
o.delete()
i=B.dy(new B.v(l+q,k-n),r,m)
o=j.M()
w.drawOval(B.cz(i),o)
o.delete()}this.lc(a2,a3,a4,20,A.hD,180)},
c8B(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.a1()
q=B.a([],t)
p=new B.b0(r.r,A.aw,f,f,q)
q.push(new B.bj(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.av(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bH(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.av(e,d)
q.push(r)
o=p.f
if(o!=null)r.bH(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bX()
q.push(r)
q=p.f
if(q!=null)r.bH(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.a1()
r=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
r.r=B.aq(A.cE,A.iQ,s/3).j(0.55).gt(0)
k=r.M()
r=p.e
w.drawPath((r==null?p.e=new B.cG(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.U(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cM(i,1))
g=d-A.k.J(u*(0.04+0.05*C.cM(i,2))+C.cM(i,3)*j,j)
n=C.cM(i,4)*e+Math.sin(a3+i)*a0*0.02
$.a1()
t=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
t.sav(new B.bS(Aj.qY,0.5,A.x,f,0,D.cSi,f,f).aC(0,B.c2(new B.v(n,g),h)))
k=t.M()
w.drawCircle(n,g,h,k)
k.delete()}this.lc(a1,a2,a3,25,A.c,190)},
cmy(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.U(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cM(r,1))
p=f+q*4
o=A.k.J(u*(0.03+0.05*C.cM(r,2))+C.cM(r,3)*p,p)
n=C.cM(r,4)
m=Math.sin(t+r)
$.a1()
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l.r=A.c.j(0.6+0.4*C.cM(r,5)).gt(0)
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
h.delete()}v.restore()}this.lc(d,a0,a1,40,A.eq,200)},
bTh(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
f.sav(D.bGg.aC(0,new B.af(0,o,n,m)))
e=f.M()
s.drawOval(B.cz(g),e)
e.delete()
s.restore()}}$.a1()
a0=B.U()
a0.b=A.ak
a0.c=a2*0.003
a0.r=D.b1k.gt(0)
a3.aw(w,v*1.08,a0)
d=a5*0.8
this.qH(a3,w.ap(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lc(a3,a4,a5,40,A.bK,210)},
cgC(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hn,A.hD],a6),B.a([A.nS,A.i6],a6),B.a([A.aB,A.ev],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ai.E>"),q=s.k("ai.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.a1()
k=B.a([],o)
j=new B.b0(l.r,A.aw,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.bj(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bH(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.av(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bH(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dw(i,s),l=new B.bR(l,l.gH(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.av(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bH(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bX()
k.push(l)
k=j.f
if(k!=null)l.bH(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.a1()
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
k=a7[m]
h=k[0]
l.sav(new B.a8(A.a1,A.a7,A.x,B.a([h,k[1],h],a6),H.ar_,new B.mn(w)).aC(0,new B.af(0,0,v,u)))
l.r=A.c.j(0.85).gt(0)
a2=l.M()
l=j.e
t.drawPath((l==null?j.e=new B.cG(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lc(a8,a9,b0,40,A.c,220)},
bT0(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a3=Math.abs(a0)
a2.r=D.Zy[a3].gt(0)
a4=a2.M()
s.drawRect(B.cz(new B.af(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a5.r=D.Zy[A.o.J(a3+2,5)].gt(0)
a4=a5.M()
s.drawRect(B.cz(new B.af(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.U(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.J(n*(0.04+0.05*C.cM(a0,1))+C.cM(a0,2)*a6,a6)
v=C.cM(a0,3)
t=C.cM(a0,4)
this.qH(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.Zy[A.o.J(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
crS(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.a1()
p=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
p.c=v
p.r=A.bK.j(0.06).gt(0)
o=p.M()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.N(new B.bj(v,a2))
w=a1+w
l.N(new B.av(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.N(new B.dn(w,r,p,k))
w=a2+m*0.95
l.N(new B.av(p,w))
p=n*0.3
j=a2+m
l.N(new B.av(a1+p,j))
l.N(new B.av(a1-p,j))
q=a1-q
l.N(new B.av(q,w))
l.N(new B.av(q,k))
l.N(new B.dn(v,r,v,a2))
l.N(new B.bX())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.dy(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=q
d.r=A.at.gt(0)
o=d.M()
u.drawArc.apply(u,[B.cz(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.U()
a1.sav(new B.a8(A.a1,A.a7,A.x,D.cUk,A.aqr,null).aC(0,new B.af(v,a2,r,j)))
a4.b4(l,a1)
a0=A.k.J(a6*0.6,1.4)
if(a0<1)this.qH(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bAS(a4,a5,a6,60)},
bAS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.U(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.J(k*(0.1+0.1*C.cM(p,31))+C.cM(p,32)*v,v)
n=C.cM(p,33)
J.bP(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.dy(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.a1()
n=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
n.r=D.MY[A.o.J(p,5)].gt(0)
m=n.M()
u.drawRect(B.cz(o),m)
m.delete()
u.restore()}},
ckr(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lc(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.U(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cM(o,1)*1.6
m=A.k.J(a2+C.cM(o,2)*n,n)/n
l=e*(C.cM(o*7+A.k.bK((a2+C.cM(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.a1()
g=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
g.sav(new B.a8(A.a1,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).aC(0,B.qT(new B.v(l,h),i)))
g.c=r
g.d=A.bZ
f=g.M()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.qH(a0,i,p,A.c,1-m)}},
bw6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.U(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cM(r,1))
p=A.k.J(C.cM(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.J(C.cM(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.a1()
m=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l=A.o.J(r,5)
m.r=D.asz[l].j(n).gt(0)
m.a=A.n_
m.z=new B.hF(A.G,q*0.12)
k=m.M()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
m.b=A.ak
m.c=Math.max(0.6,q*0.05)
m.r=D.asz[l].j(n*1.4).gt(0)
k=m.M()
s.drawCircle(p,o,q,k)
k.delete()}},
c6j(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bP(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.dy(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.a1()
o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.b=A.ak
o.c=u
o.r=A.bK.j(0.45).gt(0)
n=o.M()
w.drawOval(B.cz(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
k.r=A.hD.gt(0)
n=k.M()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
k.r=A.hn.j(0.4).gt(0)
k.z=new B.hF(A.G,r)
n=k.M()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lc(d,e,f,45,A.bK,270)},
bIw(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.U(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.J(o,4)
m=C.cM(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.J(a7+C.cM(o,2)*4,4)/4
j=A.ex.ar(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cM(o,3))*(j*i)
if(h<=0.5)continue
g=D.cKp[A.o.J(o,5)]
J.bP(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.dy(new B.v(0,l),i,j)
$.a1()
a0=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a0.sav(new B.a8(A.b3,A.bb,A.x,B.a([A.c,g],u),null,null).aC(0,B.dy(new B.v(0,l),f,h)))
a1=a0.M()
v.drawOval(B.cz(d),a1)
a1.delete()}$.a1()
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l.r=A.hn.gt(0)
a1=l.M()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lc(a5,a6,a7,30,A.hD,280)},
bWG(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.J(t+n/4,1)
l=B.c2(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.a1()
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.c=v
j.r=D.apA[n].j((1-m)*0.8).gt(0)
i=j.M()
u.drawArc.apply(u,[B.cz(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.U(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.J(v*(0.06+0.06*C.cM(g,1))+C.cM(g,2)*h,h)
e=C.cM(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cM(g,4))
a0=D.apA[A.o.J(g,4)]
$.a1()
a1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
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
o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.18)
i=o.M()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
o.r=a0.gt(0)
o.c=Math.max(1,d*0.3)
i=o.M()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
bV7(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.b0(d.r,A.aw,a3,a3,a0)
a0.push(new B.bj(0,i))
a0.push(new B.dn(h,m,0,g))
a0.push(new B.dn(j,m,0,i))
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.b=A.ak
d.c=t
d.r=B.aq(A.bK,A.oE,k).j(0.7).gt(0)
a2=d.M()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cG(d)).a,a2)
a2.delete()
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.r=A.hD.j(0.8).gt(0)
a2=d.M()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.a1()
a5=B.U()
a5.sav(new B.bS(A.B,0.5,A.x,a3,0,B.a([A.hn.j(0.25),D.TM],x.O),a3,a3).aC(0,B.c2(w,a4)))
a7.aw(w,a4,a5)
this.lc(a7,a8,a9,30,A.bK,300)},
cmH(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.a1()
h=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
h.r=A.bv.gt(0)
h.c=q
h.d=A.bZ
g=h.M()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
l.sav(new B.bS(A.B,0.5,A.x,null,0,B.a([A.hD,A.hn.j(0.6),D.TM],o),null,null).aC(0,B.c2(new B.v(j,i),p)))
g=l.M()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.U(v)),f=0;f<l;++f){e=0.5+0.4*C.cM(f,1)
d=A.k.J(b2+C.cM(f,2)*e,e)/e
a0=A.k.bK((b2+C.cM(f,2)*e)/e)
a1=C.cM(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cM(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a6.r=B.aq(A.hD,A.aZ,d).j(1-d).gt(0)
a6.c=Math.max(0.8,u)
a6.d=A.bZ
a6.a=A.n_
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
g.delete()}}}this.lc(b0,b1,b2,35,A.bK,310)},
bzy(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aOl(a9,new B.ap(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cM(n,1))
l=a8*(0.14+0.24*C.cM(n,2))
k=a8-l
j=new B.af(o,k,o+m,k+l)
$.a1()
i=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
i.sav(D.bH9.aC(0,j))
h=i.M()
r.drawRect(B.cz(j),h)
h.delete()
g=A.k.bK(m/q)
f=A.k.bK(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cM(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.a1()
a6=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a6.r=A.bK.j(0.85).gt(0)
h=a6.M()
r.drawRect(B.cz(new B.af(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aWy.prototype={
B(d){var w,v=null,u=new C.c38(),t=new C.c3a(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aix,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c39(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.F2[w]))
return B.cb(A.bH,s,A.bw,12,10)}}
C.Xe.prototype={
S(){return new C.awR()}}
C.awR.prototype={
guN(){var w=this.d
return w===$?this.d=this.a.c:w},
gaUN(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ao(new B.bb(w.b,A.b_,A.aL),$.at())}return v},
gatM(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaGD()
v=$.at()
u.f!==$&&B.bI()
t=u.f=new B.ao(new B.bb(w,A.b_,A.aL),v)}return t},
p(){var w=this.gaUN(0),v=$.at()
w.R$=v
w.O$=0
w=this.gatM()
w.R$=v
w.O$=0
this.a2()},
XS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$XS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hP().B_(90,700,700,A.eu),$async$XS)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.f7(),$async$XS)
case 8:p=e
o=q.b.toLowerCase()
n=J.afl(o,".png")?"image/png":"image/jpeg"
r.n(new C.d0l(r,n,p))
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
return B.i($async$XS,v)},
aUM(d){var w=null,v=A.c.j(0.07)
return B.bl(w,new B.b1(4,B.m(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aJI,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aet(p.guN().a)
if(n==null)n=A.d.gI(D.F2)
w=p.guN()
v=p.r
u=x.p
v=B.D(new B.am(A.V,o,A.a9,A.q,B.a([B.bW(0,new C.LI(p.guN(),!1,!0,new B.cv(w.a+v,x.W)),0,0,0),B.an(o,B.Gb(A.mH,new C.d0q(d),B.ok(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.an(o,B.Gb(D.bs3,new C.d0r(p),B.ok(o,A.aV,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aJC,o,o,o)
t=B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gaUN(0),o,o,o,o,o,2,p.aUM("Big words"),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0s(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.h8,!0,A.a6,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.H(A.hn.j(0.6),A.r,1)
if(p.guN().d.length===0)q=D.bvn
else{q=C.fWE(p.guN().d)
if(q==null)q=new Uint8Array(0)
q=B.hM(B.fC(q,A.B,o,o,A.ci,A.bN,!1,o,!1,o,o),A.ap)}r=B.a([t,A.aa,B.aJ(o,B.p(o,q,A.h,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc0p(),o,o,o,o,o,o,!1,A.ae)],u)
if(p.guN().d.length!==0)r.push(B.aF(o,o,o,o,D.Yn,o,o,o,new C.d0t(p),o,o,o,o,"Remove logo",o))
return B.cg(o,A.w,B.br(!0,B.u(B.a([v,B.p(o,B.u(B.a([w,A.T,B.B(r,A.m,o,A.e,A.j,0,o,o),A.P,B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),p.gatM(),o,o,o,o,o,2,p.aUM("Line under it"),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d0u(p),o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,A.di,!0,A.a6,o,A.am,o,o,o,o),A.ab,B.dk(D.buj,D.f2Q,new C.d0v(p,d),B.bk(A.at,o,o,o,A.w,o,A.ca,o,new B.b5(B.m(14),A.W),o,o,o))],u),A.ad,o,A.e,A.R,0,A.p),A.h,o,o,D.aRX,o,o,o,o,A.DA,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aIj.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.Xz.prototype={
S(){return new C.bck(new B.ao(A.aq,$.at()))}}
C.bck.prototype={
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.L(d).ax.a===A.H,m=n?A.c:A.M,l=n?A.aQ:A.al,k=B.aG(d,A.bO,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.H(n?A.bG:A.aJ,A.r,1),g=x.p,f=B.B(B.a([B.D(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.V(A.cu,l,o,o,o,o),o,o,o,new C.d6R(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cwb[w]
u=B.a([],g)
for(t=J.aU(v.b);t.C();){s=t.gT(t)
r=new B.b3(12,12)
q=new B.b3(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aH(!1,new B.bu(r,r,r,r),!0,B.p(A.B,new B.w(s,o,A.v9,o,o,o,o,o,o,o,o,o),A.h,o,o,new B.o(p,o,o,new B.bu(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.d6S(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.ht,new B.w(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.E8(A.bH,6,6,A.bw,u,o)],g))}e.push(A.ay)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bj:A.aO
e.push(B.B(B.a([B.D(B.aK(o,A.U,!1,o,!0,A.q,o,B.aL(),this.d,o,o,o,o,o,2,B.bl(o,new B.b1(4,B.m(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.z,!0,o,!0,o,!1,o,A.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.am,o,o,o,o),1),A.aa,B.bH(A.aKw,new C.d6T(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.P)
return B.br(!0,B.p(o,B.u(B.a([f,new B.dl(1,A.cj,B.cK(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.R,0,A.p),A.h,o,new B.aW(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.rA,A.Vg,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bbI.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f5()
a2.dZ(this.c)
w=this.b
v=w/6.283185307179586
$.a1()
u=B.U()
u.z=A.Oq
t=B.U()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.af()
l=a2.af()
k=a2.af()
j=0.8+a2.af()*2.2
i=Math.sin(w*(3+a2.aA(4))+n)
h=A.k.J(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.af()<0.25){f=B.aq(r,A.c,0.85)
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
a1=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
a1.r=e.gt(0)
a1.c=1
d=a1.M()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.M()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ao(d){return d.b!==this.b}}
C.bbp.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.c_(new B.af(0,0,0+a7.a,0+a7.b),A.k7),a2=this.b,a3=Math.sin(a2*2),a4=$.a1(),a5=B.U()
a5.b=A.ak
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gt(0)
a5.z=A.mN
a6.bj(a1,a5)
a5=x.v
a4=new B.b0(a4.r,A.aw,a0,a0,B.a([],a5))
a4.N(new B.j3(a1))
v=new B.ahO(new B.xS(B.A_(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ld()
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
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.b=A.ak
j.d=A.bZ
j.c=1.5+2*m/10
j.r=w.j(k).gt(0)
i=A.k.J(n-p*(1-m/10),t)
h=A.k.J(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.b0(r,k,a0,new B.d8([v,i,h,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}else{k=new B.b0(r,k,a0,new B.d8([v,i,t,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()
k=new B.b0(r,a2.b,a0,new B.d8([v,0,h,!0]),B.a([],a5))
g=j.M()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cG(f)).a,g)
g.delete()}}a4.ld()
e=u[a3].a4n(n).a
$.a1()
k=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
k.r=w.gt(0)
k.z=A_.ph
g=k.M()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
d.r=A.c.gt(0)
g=d.M()
q.drawCircle(k,f,2,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.bk8.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f5()
e.dZ(this.c)
w=a0.a*(0.2+e.af()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gajt()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.a1()
i=B.a([],n)
h=new B.b0(j.r,A.aw,f,f,i)
i.push(new B.bj(w,v))
j=l-k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.av(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bX())
j=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
j.sav(B.aRH(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jf
g=j.M()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cG(j)).a,g)
g.delete()}},
ao(d){return d.b!==this.b}}
C.b6n.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dZ(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.af()
l=a0.af()
k=Math.min(t,r)*(0.03+a0.af()*0.09)
j=a0.af()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.a1()
e=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
e.r=f.j(g).gt(0)
e.z=new B.hF(A.G,k*0.35)
d=e.M()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
e.b=A.ak
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gt(0)
d=e.M()
w.drawCircle(i,h,k,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.b6_.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dZ(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.af()-0.5)*0.1)
k=v*(0.06+a0.af()*0.05)
j=a0.af()*3.141592653589793*2
i=$.a1()
h=B.a([],n)
g=new B.b0(i.r,A.aw,null,null,h)
h.push(new B.bj(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.av(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bH(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.a1()
i=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
i.b=A.ak
i.c=r
i.d=A.bZ
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gt(0)
i.z=new B.hF(A.G,u)
d=i.M()
i=g.e
t.drawPath((i==null?g.e=new B.cG(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
ao(d){return d.b!==this.b}}
C.bqV.prototype={
a6(d,e){var w,v,u=new B.af(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.a1()
w=B.U()
t=(0.5+0.5*t)*0.12
w.sav(new B.bS(A.B,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cCR,null).aC(0,u))
d.bp(u,w)
w=u.cD(-3)
v=B.U()
v.b=A.ak
v.c=2
v.r=this.c.j(0.1+t).gt(0)
v.z=A.jf
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.bnZ.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bK(d)*7,p=0;p<7;++p){o=new B.f5()
o.dZ(q+p)
n=o.af()*w
m=o.af()*u
l=Math.sin(A.k.J(A.k.J(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.af()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.a1()
i=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
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
g=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
g.r=A.c.j(l*0.9).gt(0)
g.z=new B.hF(A.G,k*0.3)
h=g.M()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ao(d){return d.b!==this.b}}
C.bn7.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.af(0,0,0+e.a,0+e.b)
$.a1()
v=B.U()
v.a=A.n_
v.sav(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aC(0,w))
d.bp(w,v)},
ao(d){return d.b!==this.b}}
C.baK.prototype={
a6(d,e){var w,v,u,t,s,r=e.gef(),q=0.55+0.45*Math.sin(this.b)
$.a1()
w=B.U()
w.b=A.ak
w.c=1.4
w.d=A.bZ
v=this.d
w.r=v.j(0.55+q*0.35).gt(0)
u=B.U()
u.b=A.ak
u.c=4
u.r=v.j(0.12*q).gt(0)
u.z=A.qw
r=new C.d02(this,r*0.16,d,u,w)
t=e.gef()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
ao(d){return d.b!==this.b}}
C.wH.prototype={}
C.H8.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aor.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.u2.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.m4.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hl.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.ex.prototype={
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
u.m(0,"decoration",C.hyZ(v.z))
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
C.ln.prototype={
hs(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,ex>")
n=B.z(new B.J(n,new C.c8x(),m),m.k("ai.E"))
return C.qR(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ac(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("J<1,a0<n,@>>")
n=B.z(new B.J(n,new C.c8y(),m),m.k("ai.E"))
return B.E(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hR.prototype={
gb4E(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bg(v)},
gQr(){if(!C.kg(this.w))return!1
var w=this.gb4E()
if(w==null)return!1
return new B.O(Date.now(),0,!1).cY(w.bP())},
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
q=B.T(r).k("J<1,ln>")
r=B.z(new B.J(r,new C.c8m(),q),q.k("ai.E"))
return C.At(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ac(){var w,v,u=this,t=B.S(x.N,x.z)
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
v=B.T(w).k("J<1,a0<n,@>>")
w=B.z(new B.J(w,new C.c8n(),v),v.k("ai.E"))
t.m(0,"slides",w)
return t}}
C.js.prototype={}
C.aYG.prototype={
B(d){return B.cj(new C.c8s(this))}}
C.alH.prototype={
S(){return new C.bfv(null,null)}}
C.bfv.prototype={
gaUO(){var w,v=this,u=v.d
if(u===$){w=B.bi(null,A.h_,null,1,null,v)
w.cF(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
p(){this.gaUO().p()
this.boV()},
B(d){return B.c4(this.gaUO(),new C.dys(),this.a.c)}}
C.aI5.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.ab2.prototype={
O6(d,e,f,g){return this.bId(d,e,f,g)},
bId(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$O6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$O6)
case 3:s=i
if(d.e==null){w=1
break}B.a7(d,!1).K(null)
t=d.F(x.q).f
t.P(B.b_(null,null,null,null,null,A.q,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.H(A.c.j(0.08),A.r,1),s=B.a([new B.aa(0,A.G,A.w.j(0.35),A.dl,24)],x.V),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dP,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.ar,B.d(o,v,n,A.Z,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a0,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.Z,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a0,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d1)
n.push(B.B(B.a([B.D(new C.abk(A.hh,"Download",A.bQ,new C.ebq(w,d),!0,v),1),A.av,B.D(new C.abk(A.ur,"Share",A.bh,new C.ebr(w,d),!1,v),1),A.av,B.D(new C.abk(A.h3,"Safari",A.aW,new C.ebs(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.ay)
n.push(B.bG(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ebt(d),v,v))
return B.br(!0,new B.C(A.oZ,B.u(B.a([B.p(v,B.u(n,A.ad,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(A.iz,v,t,u,s,v,A.n),v,v,v,v,A.DG,v,v,1/0)],m),A.m,v,A.e,A.R,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.abk.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.H(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.V(w.c,p,v,v,v,26)
return B.aD(!1,A.X,!0,v,B.aH(!1,u,!0,B.eq(B.u(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.R,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bjK,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.h,A.K,0,v,v,v,v,v,A.ac)}}
C.aYE.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.anF(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.M(v,w,v,w)}else{v=6*w
u=new B.M(v,10*w,v,12*w)}t=i.c0q().ahF(1.35)
s=B.asQ(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bu9(v)
if(i.e&&i.w!=null)q=B.aK(h,A.U,!1,h,!0,A.q,h,B.aL(),i.w,A.bh,h,h,h,h,2,D.bD9,A.z,!0,h,!0,h,!1,i.x,A.af,h,h,h,new B.cv("slide_tf_"+g.a,x.W),h,A.v6,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a8,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.yc,A.am,h,A.Qq,h,h)
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
w=n?t.cyY(B.aX(g.Q).j(0.45),A.cx):t
p=g.as
l=m?1:h
k=m?A.eB:A.BD
p=B.d(f,new B.cv("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gV(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Qh:s
$.a1()
j=B.U()
j.b=A.ak
j.c=3*w
j.e=A.fl
j.r=A.aG.gt(0)
j=i.cgF(p,t,k,j)
k=g.r
w=new B.am(A.V,h,A.a9,A.q,B.a([j,i.cgD(k,t,l?A.Qh:s)],x.p),h)}else w=i.cgE(p,t,g.k2?A.Qh:s,m)
v=new B.n8(w,new B.cv("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aJ(A.c4,g,A.z,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.ae)}return new B.C(u,new B.bF(r,h,h,q,h),h)
case 1:case 4:return i.bRv()
case 3:return i.c8A()
case 2:return B.b2(h,h,h,new C.aYB(g,h),A.fk)
case 5:g=g.r
return new C.aYD(g,!i.e&&i.z==null,h)}},
c0q(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.aX(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ku
j=A.cx
break
case"shadow":v=o.d
e=B.a([new B.cJ(D.a9m,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cJ(l,A.J,6*v),new B.cJ(l,A.J,16*v),new B.cJ(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cV
w=A.aG
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mb
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cJ(A.bz,new B.v(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cJ(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cJ(A.bd,new B.v(-3*v,0),0),new B.cJ(A.aH,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cJ(A.dh,A.J,8*v),new B.cJ(A.aH,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=H.a8i
break
case"ice":v=o.d
e=B.a([new B.cJ(A.b4,A.J,10*v),new B.cJ(A.cE,A.J,22*v)],x.r)
k=A.O
w=A.eq
break
case"chalk":h=o.d
e=B.a([new B.cJ(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.ku
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cEG[q]
u.push(new B.cJ(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cJ(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.a1()
f=B.U()
v=o.d
f.sav(D.bEP.aC(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cJ(A.Ip,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.a1()
f=B.U()
v=o.d
f.sav(D.bF8.aC(0,new B.af(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cJ(l,A.J,14*o.d)],x.r)
w=l
k=A.a0
break
case"lowercase":h=2*o.d
w=l
k=A.cp
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cJ(l.j(0.45),new B.v(u,u),0),new B.cJ(l.j(0.2),new B.v(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.ku
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.aX(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
avE(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ekl.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.c8q(h)
v=r.k2?C.hL8(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eB:A.BD
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.VK(B.dr(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cgF(d,e,f,g){return this.avE(d,e,f,!1,g)},
cgD(d,e,f){return this.avE(d,e,f,!1,null)},
cgE(d,e,f,g){return this.avE(d,e,f,g,null)},
bu9(d){switch(d.a){case 2:return A.B
case 1:case 5:return A.a7
default:return A.a1}},
bRv(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bF
return B.as(B.V(s.b===D.kD?A.EE:A.A1,A.aA,t,t,t,32),t,t,t)}w=u.bx1(r)
if(s.b===D.kD){s=B.m(6)
v=2*u.d
return B.p(t,w,A.h,t,t,new B.o(A.c,t,B.H(A.cr,A.r,1),s,B.a([new B.aa(0,A.G,A.w.j(0.08),A.dH,6)],x.V),t,A.n),t,1/0,t,t,new B.M(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aJM(r,!0)
return C.fhY(s.go,v,s.id)}return w},
aJM(d,e){var w,v,u,t
try{w=C.hLr(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cj(new C.c8p(this,w,v,e))
return u}catch(t){return D.a7x}},
bx1(d){return this.aJM(d,!1)},
c8A(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.aWU
return C.hLJ(v,w.db,w.dx)}}
C.aYB.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.a1(),g=B.U(),f=this.b
g.r=B.aX(f.ay).gt(0)
w=B.U()
w.r=B.aX(f.ch).gt(0)
w.b=A.ak
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.af(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.bp(s,g)
d.bp(s,w)
break
case 1:d.lg(s,g)
d.lg(s,w)
break
case 2:r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(u/2,0))
r.N(new B.av(u,t))
r.N(new B.av(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 3:r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
h=t*0.45
r.N(new B.bj(0,h))
f=u*0.65
r.N(new B.av(f,h))
r.N(new B.av(f,t*0.2))
r.N(new B.av(u,t*0.5))
r.N(new B.av(f,t*0.8))
t*=0.55
r.N(new B.av(f,t))
r.N(new B.av(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 4:h=t/2
w.c=v+2
d.bU(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.b0(h.r,A.aw,i,i,B.a([],x.v))
r.N(new B.bj(q,0))
r.N(new B.av(u,0))
r.N(new B.av(u-q,t))
r.N(new B.av(0,t))
r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.b0(h.r,A.aw,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.bj(k,j)
f.push(h)
v=r.f
if(v!=null)h.bH(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.av(k,j)
f.push(h)
v=r.f
if(v!=null)h.bH(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.N(new B.bX())
d.b4(r,g)
d.b4(r,w)
break}},
ao(d){return d.b!==this.b}}
C.aFI.prototype={
S(){return new C.bqs(null,null)}}
C.bqs.prototype={
Z(){var w,v=this
v.a0()
w=B.bi(null,A.ih,null,1,null,v)
w.cF(0)
v.d!==$&&B.aO()
v.d=w},
p(){var w=this.d
w===$&&B.c()
w.p()
this.br7()},
aJX(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.bQ(B.as(B.d(d,w,w,w,w,w,w,A.dP,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a1,A.a7,A.x,v,w,w),A.n),A.b7)},
bun(){var w,v=this,u=null,t=v.aJX("Slide A",A.bh),s=v.aJX("Slide B",A.aW)
if(v.a.c===D.cb)return new B.am(A.V,u,A.aX,A.q,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.eQ1(v,s,t),u)},
B(d){return this.bun()}}
C.aGk.prototype={
iH(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
ji(d){return d.b!==this.b}}
C.T1.prototype={
S(){return new C.bfF(null,null)}}
C.bfF.prototype={
Z(){var w,v,u=this
u.a0()
w=B.bi(null,A.zr,null,1,null,u)
u.d!==$&&B.aO()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cb){w.st(0,1)
return}B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJk(u),x.a)},
bo(d){var w,v,u,t=this
t.bA(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.st(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cb)w.st(0,1)
else B.bK(B.dB(0,0,0,v.c.fr+v.f*120,0,0),new C.dJj(t),x.a)}},
p(){var w=this.d
w===$&&B.c()
w.p()
this.bp8()},
B(d){var w,v=this.a
if(v.c.dy===D.cb||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.dJi(this),v.d)}}
C.H7.prototype={
B(d){return B.cj(new C.c8i(this))}}
C.awC.prototype={
S(){return new C.bae()}}
C.bae.prototype={
Z(){this.a0()
if(this.a.c!==D.cb)B.bK(A.Js,new C.cYB(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cb)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.an(p,new C.T1(C.ei(A.bf,!1,4279310375,A.az,"",4294538006,24,A.bg,A.a0,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.b8,o,2,"",0,0,"",u,D.eQ,0.84,0.08,0.12),B.p(p,p,A.h,p,p,new B.o(A.cl,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cv("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ei(A.bf,!1,4294967295,A.az,"",4280640491,22,A.bg,A.a0,"",0.2,"preview_text",p,"","",0,!1,"",0,D.b8,o,2,"Element flies in",0,0,"",q.a.c,D.cJ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.am(A.V,p,A.a9,A.q,B.a([w,B.an(32,new C.T1(t,B.p(p,D.eQD,A.h,p,p,new B.o(s,p,B.H(A.be,A.r,1),r,p,p,A.n),p,p,p,p,A.iF,p,p,1/0),!0,1,new B.cv("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.bQ(n,D.aSu,A.b7)}}
C.a5z.prototype={
S(){return new C.bgj(null,null)}}
C.bgj.prototype={
gaVk(){var w=this.a
if(w.e)w=D.eks.q(0,w.c)||D.aGU.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a0()
if(v.gaVk()){w=C.hJO(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bi(null,B.dB(0,0,0,w,0,0),null,1,null,v)
w.cF(0)
v.d=w}},
p(){var w=this.d
if(w!=null)w.p()
this.bpF()},
B(d){var w,v=this,u=v.d
if(!v.gaVk()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.e14(v,u,A.o.J(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aWB.prototype={
B(d){var w=null
return B.as(C.aYF(!0,w,!1,C.ei(A.L,!1,this.e.l(),A.az,"",4280640491,this.f,A.bg,A.a0,"",0.2,"fx",w,"","",0,!1,"",0,D.b8,4280172719,2,"Aa",0,0,this.c,D.cb,D.cJ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gX(d){return this.f}}
C.bbn.prototype={
iH(d){return C.a0h(this.b,new B.af(0,0,0+d.a,0+d.b).cD(-this.c))},
ji(d){return d.b!==this.b||d.c!==this.c}}
C.bm7.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.af(0,0,0+a1.a,0+a1.b).cD(-this.d),g=this.b,f=C.a0h(g,h),e=a1.gef(),d=new C.eFs()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sav(D.aIo.aC(0,h))
a0.b4(f,w)
g=C.a0h(g,h.cD(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.b8u.gt(0)
a0.b4(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sav(D.etV.aC(0,h))
a0.b4(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gt(0)
g.z=new B.hF(A.G,e*0.04)
a0.b4(f,g)
g=d.$1(e*0.012)
g.r=A.c.gt(0)
a0.b4(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sav(D.etT.aC(0,h))
a0.b4(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a0h(g,h.cD(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gt(0)
a0.b4(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bd.j(0.7).gt(0)
g.z=new B.hF(A.G,e*0.035)
a0.b4(f,g)
g=d.$1(e*0.016)
g.r=A.nT.gt(0)
a0.b4(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sav(D.etO.aC(0,h))
a0.b4(f,w)
w=C.a0h(g,h.cD(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b_1.gt(0)
a0.b4(w,v)
g=C.a0h(g,h.cD(e*0.03))
v=d.$1(e*0.004)
v.r=D.b1b.gt(0)
a0.b4(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sav(D.aIo.aC(0,h))
a0.b4(f,g)
for(g=B.A_(f),w=B.a([],x.X),g=new B.xS(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jH(y.M));--q
g.ld()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bK(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ld()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ld()
m=w[q].a4n(p*n/o).a
l=D.cCf[A.o.J(n,4)]
$.a1()
p=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
p.r=l.gt(0)
k=p.M()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ay(A.a_,A.Y,A.a3,A.a4,A.a2)
i.r=A.c.j(0.9).gt(0)
k=i.M()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sav(D.etX.aC(0,h))
g.z=new B.hF(A.G,e*0.03)
a0.b4(f,g)
g=d.$1(e*0.018)
g.sav(D.etU.aC(0,h))
a0.b4(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gt(0)
a0.b4(f,w)
g=C.a0h(g,h.cD(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.n5.gt(0)
a0.b4(g,w)
break}},
ao(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bn4.prototype={
a6(d,e){d.Ey(C.a0h(this.b,new B.af(0,0,0+e.a,0+e.b).cD(-this.c)),A.w,e.gef()*0.05,!1)},
ao(d){return d.b!==this.b||d.c!==this.c}}
C.aIi.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aIO.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aK6.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.a5S.prototype={}
C.M8.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aBl(B.a([],x.D),B.a([],w),B.a([],w),B.S(v,u),B.S(v,x.bo),B.S(v,u),B.aZ(v),null,null)},
gdS(){return this.c},
gRM(){return this.r},
gRN(){return this.w},
gK3(){return this.x}}
C.aBl.prototype={
Z(){var w,v=this
v.a0()
$.aS.c_$.push(v)
C.fmT()
$.h36=new C.ehE(v)
w=B.bi(null,A.zp,null,1,null,v)
w.f1(0,!0)
v.fy!==$&&B.aO()
v.fy=w
v.H1()},
bo(d){var w,v,u=this
u.bA(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.MO(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.H1()}},
iP(d){if(d===A.yz||d===A.r_||d===A.qZ||d===A.oz)this.rI()},
p(){var w,v,u,t=this
$.aS.hE(t)
w=t.at
if(w!=null)w.a9(0)
t.rI()
w=t.fy
w===$&&B.c()
w.p()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bF(0)
v.fU()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.at()
v.O$=0}t.bpT()},
ga8R(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gN7(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
a9k(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gQr())return!1
return!0},
jG(){return this.a9k(null)},
afQ(){var w=this.c
if(w==null)return
w.F(x.q).f.P(D.esc)},
pv(){if(!this.jG())return!1
this.afQ()
return!0},
anG(d){var w,v,u,t,s,r=this
if(r.a9k(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.h2d(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
yT(){return this.anG(null)},
H1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$H1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aot(k),$async$H1)
case 3:j=e
w=4
return B.b(C.an7(k),$async$H1)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fBi(j,t.bUh())
w=t.ga8R()?5:7
break
case 5:r=t.gN7()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aWP(r),$async$H1)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bm(s,new C.ee1())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bm(s,new C.ee2())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.xE(m==null?"":m)!=null)continue
C.fn4(n,s)
p=!0}t.n(new C.ee3(t,s))
if(p||s.length>J.a9(j))t.rI()
case 1:return B.h(u,v)}})
return B.i($async$H1,v)},
bUh(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kg(w)&&w!==q}if(w)p.push(r)
return p},
cf7(d){var w,v=this,u=d.w
if(!C.kg(u)||u==="hati_kiapo_uongozi")return
v.a7I(d)
w=A.d.bg(v.d,new C.efC(d))
u=v.d
if(w>=0){u[w]=d.hs()
v.d[w].f=new B.O(Date.now(),0,!1)}else A.d.ck(u,0,d.hs())
v.db=!1},
c9w(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kg(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cf7(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,hR>")
s=B.z(new B.cQ(new B.a5(s,new C.efq(),w.k("a5<1>")),new C.efr(),v),v.k("F.E"))
return s},
MO(d){return this.bIA(d)},
rI(){return this.MO(null)},
bIA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$MO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.c9w()
w=3
return B.b(C.TZ(d==null?t.a.c:d,s),$async$MO)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.anG(r)?4:5
break
case 4:w=6
return B.b(C.a56(r),$async$MO)
case 6:q=r.x
p=A.a.i(q==null?t.gN7():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.edp())
q=t.d
if(o>=0)q[o]=r.hs()
else A.d.ck(q,0,r.hs())
case 5:case 1:return B.h(u,v)}})
return B.i($async$MO,v)},
oz(){var w,v=this,u=v.at
if(u!=null)u.a9(0)
u=v.e
w=(u==null?null:C.kg(u.w))===!0?A.hG:A.lk
v.at=B.cV(w,new C.egK(v))},
aUP(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.acN(u.hs(),v.f,v.r))
if(w.length>40)A.d.cu(w,0)
A.d.a8(v.ay)},
cs3(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.acN(w.e.hs(),w.f,w.r))
w.n(new C.ehA(w,v.pop()))
w.oz()},
cee(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.acN(w.e.hs(),w.f,w.r))
w.n(new C.efA(w,v.pop()))
w.oz()},
nB(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.ehn(u))
if(w>=0){u.d[w]=u.e.hs()
u.d[w].f=new B.O(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.O(Date.now(),0,!1)},
Vz(d){var w,v,u,t,s=this.gdk()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
wx(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.R$=$.at()
u.O$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bF(0)
u.fU()}w.a8(0)},
IE(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdk()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.d4(new B.cQ(new B.a5(w,new C.eho(),v.k("a5<1>")),new C.ehp(),u),u.k("F.E"))
w=this.ch
v=B.a2(w).k("ct<1>")
v=B.z(new B.ct(w,v),v.k("F.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.at()
p.O$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bF(0)
p.fU()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cJ)continue
p=n.a
m=w.cf(0,p,new C.ehq(n))
s.cf(0,p,new C.ehr())
p=m.a.a
o=n.r
if(p!==o)m.saR(0,o)}},
Gm(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.bf(u.d,new C.ecO(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gN7()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hs())}u.nB()
u.oz()},
ag9(d,e){var w,v,u,t,s=this
if(s.jG())return
w=s.Vz(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kg(v.w))===!0
if(u){C.hJS(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdk()
if(t!=null)C.hJT(t,w.d+w.f*0.5)}}s.Gm()
s.nB()
s.oz()
if(u&&s.c!=null)s.n(new C.ehB())},
ct7(d,e){var w=this,v=w.gdk()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Gm()
w.nB()
w.oz()},
gdk(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gpy(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.hHV(o)
if(w!=null)return w
v=q.gdk()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.aX(p==null?v.e:p)
u=q.bRK(v)
t=q.bRJ(v)
s=B.aX(v.e)
r=v.f
return new C.js(o,"Class template",p,u,t,s,r==null?null:B.aX(r))}return C.hlw(o)},
bRK(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cJ)s=t.w>=28||A.o.D(A.o.ak(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.aX(t.Q)}return A.M},
bRJ(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cJ&&t.w<28)return B.aX(t.Q)}return A.aI},
ac8(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.ga8R()){w.c.F(x.q).f.P(D.eqP)
return}w.a7I(d)
w.aW_(C.by2(d))
return}if(C.c9b(v)){w.a7I(d)
w.aW_(d)
return}w.n(new C.eeJ(w,d))},
aof(){var w,v,u,t,s,r,q=this
q.a_P(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kg(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.n(new C.ecM(q))
if(r&&q.c!=null){u.toString
q.Ie(u,s)}return}q.rI()
q.n(new C.ecN(q))},
aVZ(d){this.a7I(d)
this.Yr(d,!0)},
a7I(d){if(!C.kg(d.w))return
C.fn4(d,this.d)},
Yr(d,e){return this.c5y(d,e)},
aW_(d){return this.Yr(d,!1)},
c5y(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Yr=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.by2(d)
if(e){r=s.x
q=A.a.i(r==null?t.gN7():r)
t.dy.W(0,q.toLowerCase())
C.an8(t.a.c,q)}r=s}else r=d
w=C.c9b(r.w)?3:4
break
case 3:w=5
return B.b(t.a7J(r),$async$Yr)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.bf(t.d,new C.ef5(l))
o=l.a.hs()
n=C.kg(o.w)&&C.hL3(o)
t.n(new C.ef6(t,o,p))
if(n){m=A.d.bg(t.d,new C.ef7(o))
if(m>=0){t.d[m]=o.hs()
t.rI()}}if(!t.a9k(l.a))t.WH()
r=!1
if(t.c!=null)if(!t.a9k(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.anG(r)&&C.fj8(l.a)}else l=r
else l=r
if(l)t.c.F(x.q).f.P(D.ero)
case 1:return B.h(u,v)}})
return B.i($async$Yr,v)},
a7J(d){return this.bGS(d)},
bGS(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a7J=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.kZ(r.c,A.xW),$async$a7J)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kE(!1,r,s.c,s.d,null,A.xW,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7J,v)},
nu(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$nu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.c9b(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.c8A(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$nu,v)},
abR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eeI(),s,null,!0,!0,x.H),$async$abR)
case 3:if(t.c==null){w=1
break}t.aof()
case 1:return B.h(u,v)}})
return B.i($async$abR,v)},
abQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$abQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ce(null,null,!1,null,new C.eeF(),s,null,!0,!0,x.H),$async$abQ)
case 3:if(t.c==null){w=1
break}t.n(new C.eeG())
t.aof()
case 1:return B.h(u,v)}})
return B.i($async$abQ,v)},
WH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$WH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aw(),$async$WH)
case 3:r=e
if(B.kq(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.an("Bool","ngmy_marriage_hint_seen",!0),$async$WH)
case 4:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.eps)
case 1:return B.h(u,v)}})
return B.i($async$WH,v)},
Ie(d,e){return this.cfx(d,e)},
cfx(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ie=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ae3(s,t.gDa(),t.gD9(),!0,e,t.d),$async$Ie)
case 9:w=4
break
case 6:w=10
return B.b(C.ae4(s,t.gDa(),t.gD9(),!0,e,t.d),$async$Ie)
case 10:w=4
break
case 7:w=11
return B.b(C.ae5(s,t.gDa(),t.gD9(),!0,e,t.d),$async$Ie)
case 11:w=4
break
case 8:w=12
return B.b(C.ae6(s,t.gDa(),t.gD9(),!0,e,t.d),$async$Ie)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ie,v)},
bTf(){var w,v,u,t,s=this
if(!s.ga8R()){s.c.F(x.q).f.P(D.epF)
return}w=s.gN7()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ae2(u,t,v,new C.edY(s),new C.edZ(s),w)},
ac9(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ac9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.c0(A.dw,null,new C.eeP(u),s,!0,!0,!1,A.l4,!1,!1,x.N),$async$ac9)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ae6(s,u.gDa(),u.gD9(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ae3(s,u.gDa(),u.gD9(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ae4(s,u.gDa(),u.gD9(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ae5(s,u.gDa(),u.gD9(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bTf()
return B.h(null,v)}})
return B.i($async$ac9,v)},
c4G(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aUP()
w=C.cx()
v=C.At(t,t,t,t,D.B3,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.n(new C.eeQ(u,v))},
a79(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a79=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hPl(s),$async$a79)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.e8(q.r,new C.ecQ())
t.cZ(new C.ecR(t,p,q,r))
s=t.c.F(x.q).f
o=r.r.length
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a79,v)},
ae7(d,e,f,g){var w=null,v=g?A.du:A.bL,u=B.H(g?A.be:A.cr,A.r,1)
return B.hI(B.aJ(w,B.p(w,B.V(d,g?A.c:A.aI,w,w,w,18),A.h,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.ae),w,e,w,w)},
Yq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.pv()){w=1
break}s=t.jl()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.ef0(),q),q.k("F.E"))}o=s!=null&&s.b===D.l3?B.a([s],x.u):p
if(o.length===0){t.c.F(x.q).f.P(D.erz)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.ef1(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$Yq)
case 3:case 1:return B.h(u,v)}})
return B.i($async$Yq,v)},
acq(){return this.c5x()},
c5x(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$acq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hP7(s,t.f+1,o),$async$acq)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.km(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.ef3(q))
t.cZ(new C.ef4(p,t,o,q,r))
t.c.F(x.q).f.P(D.erY)
case 1:return B.h(u,v)}})
return B.i($async$acq,v)},
acx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$acx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.pv()||!t.yT()){w=1
break}s=t.gdk()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a5<1>")
p=B.z(new B.a5(r,new C.efl(),q),q.k("F.E"))
if(p.length===0){t.c.F(x.q).f.P(D.epd)
w=1
break}o=new B.J(p,new C.efm(),B.T(p).k("J<1,Q>")).fs(0,new C.efn())
r=B.S(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.m(0,m.a,new B.ao(new B.bb(l,A.b_,A.aL),$.at()))}q=t.c
q.toString
w=3
return B.b(B.c0(A.K,null,new C.efo(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$acx)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.R$=$.at()
q.O$=0}if(t.c!=null)t.n(new C.efp())
case 1:return B.h(u,v)}})
return B.i($async$acx,v)},
acc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$acc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.pv()){w=1
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
return B.b(C.h4b(s,new C.Db(r,q,p,o==null?"":o)),$async$acc)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.cZ(new C.eeR(m,n))
s=t.c.F(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aet(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$acc,v)},
a7C(){return this.bGe()},
bGe(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a7C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.pv()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hPk(s,t.f+1,l),$async$a7C)
case 3:r=e
q=$.fEI
$.fEI=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.cZ(new C.ed6())
t.c.F(x.q).f.P(D.ep4)
w=1
break}if(!q){s=r.CW
s=C.h34(l,s==null?"":s,!1)}else s=!1
if(s){t.cZ(new C.ed7(t,l,r))
t.c.F(x.q).f.P(D.esr)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.km(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.ed8(p))
o=s.length
t.cZ(new C.ed9(m,t,l,p,r))
n=s.length-o
s=t.c.F(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7C,v)},
aM0(d,e){if(e){this.ad_()
return}this.c4G(d,!1)},
bC2(){return this.aM0(null,!1)},
ad_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ad_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.c0(A.bV,null,new C.efv(t),r,!0,!0,!0,A.ol,!1,!1,x.N),$async$ad_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.efw(t,C.hHU(s).oM()))
case 1:return B.h(u,v)}})
return B.i($async$ad_,v)},
cZ(d){var w=this
if(w.pv())return
w.Gm()
w.aUP()
w.n(d)
w.IE()
w.nB()
w.oz()},
a5H(){this.cZ(new C.ebL(this,D.m6))},
aNo(){var w=this.gdk()
if(w==null)return
this.cZ(new C.ed4(this,w))},
aMB(){var w=this.e
if(w==null||w.r.length<=1)return
this.cZ(new C.ed2(this))},
aYP(d,e){if(this.e==null||d===e)return
this.cZ(new C.efE(this,d,e))},
Ml(d){return this.bE0(d)},
bE0(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ml=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gN7():s)
w=5
return B.b(C.an6(t.a.c,r),$async$Ml)
case 5:t.dy.G(0,r.toLowerCase())
case 4:s=d.a
C.aov(s)
w=6
return B.b(C.aYJ(t.a.c,s),$async$Ml)
case 6:if(t.c==null){w=1
break}t.n(new C.ecZ(t,d))
w=7
return B.b(t.rI(),$async$Ml)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ml,v)},
cfu(d,e){var w=this
if(d.z){w.afQ()
return}w.n(new C.efD(w,d,e))
w.oz()},
jl(){var w,v,u,t,s,r=this.gdk()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
UB(d){return this.ch.cf(0,d.a,new C.ecP(d))},
aq3(d){return this.CW.cf(0,d.a,new C.edq())},
a_P(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Vz(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aS.ae$.d.c
if(u!=null)u.jc()},
b15(){return this.a_P(!0)},
a_N(d){var w,v,u=this
if(u.pv())return
if(!u.yT())return
w=u.Vz(d)
if(w==null||w.b!==D.cJ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.UB(w).saR(0,"")}u.n(new C.ehl(u,d))
$.aS.x1$.push(new C.ehm(u,d,w))},
b1E(d){var w=this
if(d.b===D.cJ&&!w.jG()&&w.yT()){w.a_N(d.a)
return}w.aw3(d.a)},
aw3(d){var w,v,u,t,s,r=this
if(r.jG())return
w=r.r
if(w!=null&&w!==d){v=r.Vz(w)
if(v!=null&&v.b===D.cJ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.n(new C.egL(r,s,d))
if(s||d==null){t=$.aS.ae$.d.c
if(t!=null)t.jc()}},
aIk(){this.cZ(new C.ebM(this))},
ol(d){return this.btr(d)},
btr(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ol=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$ol)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ebJ(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ol,v)},
TM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.F9(78,1920),$async$TM)
case 3:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.ebz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TM,v)},
TG(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$TG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdk()==null){w=1
break}w=3
return B.b(T.BC(t.a.c),$async$TG)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gah(s)){t.c.F(x.q).f.P(D.et0)
w=1
break}w=r.gH(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.c0(null,null,new C.ebw(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$TG)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdk()==null){w=1
break}t.cZ(new C.ebx(t,q))
case 1:return B.h(u,v)}})
return B.i($async$TG,v)},
ap3(){var w=this,v=w.r
if(v==null||w.gdk()==null)return
if(A.d.bf(w.gdk().z,new C.ed0(v))){w.c.F(x.q).f.P(D.es1)
return}if(w.w===v)w.a_P(!0)
w.cZ(new C.ed1(w,v))},
bAk(){var w=this.jl(),v=w==null
if((v?null:w.b)===D.eQ)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cJ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aJ1(d,e){var w=this,v=w.jl(),u=w.gdk(),t=w.e
if(t==null)return
w.cZ(new C.ecd(w,v,d,e,t,u))},
bv_(d){return this.aJ1(d,null)},
a5Z(d){return this.bv7(d)},
bv7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a5Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a2Q.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.nu(),$async$a5Z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jl()
if(s!=null){r=s.b
if(r===D.cJ)t.bv_(s.w>=28||s.x.gdC(0)>=A.I.gdC(0)?d.d:d.e)
else if(r===D.eQ){r=d.c
t.aJ1(r.j(0.88),r)}w=1
break}t.cZ(new C.eci(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a5Z,v)},
a5Y(d){return this.bv5(d)},
bv5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a5Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jl()
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
return B.b(t.nu(),$async$a5Y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ecg(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a5Y,v)},
buQ(d){var w=this.gdk()
if(w==null)return
this.cZ(new C.ecc(this,w,d))},
Yv(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.hPg(r),$async$Yv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.nB()
t.n(new C.eff(t,s))
w=4
return B.b(t.rI(),$async$Yv)
case 4:if(t.c!=null)t.ac8(s)
case 1:return B.h(u,v)}})
return B.i($async$Yv,v)},
a7u(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a_P(!0)
t.nB()
s=t.c
s.toString
w=3
return B.b(C.Pj(s,q),$async$a7u)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a7u,v)},
Cm(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Cm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.nB()
t=4
w=7
return B.b(C.aML(m),$async$Cm)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aMa(o,q,m.b),$async$Cm)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.a4(l)
o=r.c
if(o==null){w=1
break}o.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Cm,v)},
DX(d,e){return this.crz(d,e)},
crz(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$DX=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.pv()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a_P(!0)
t.nB()
s=h.a=t.e.hs()}else{r=A.d.bg(t.d,new C.ehu(d))
s=h.a=r>=0?t.d[r].hs():d.hs()}s=s.w
q=s==null
p=C.hIS(q?"":s)
o=C.h20(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a5<1>")
n=B.z(new B.a5(s,new C.ehv(h,p),q),q.k("F.E"))
s=h.a.b
w=3
return B.b(t.cl6(n.length,o,s),$async$DX)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.hIM(h.a)
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
return B.b(t.cl5(n,o),$async$DX)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.kV(t.d,new C.ehw(s))
s=h.a.b
w=11
return B.b(t.cl3(k.b,s),$async$DX)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hs()
case 5:j=C.hIR(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.F(x.q).f.P(D.etb)
w=1
break}w=12
return B.b(t.cl4(j.a,s,o,j.c),$async$DX)
case 12:i=a0
if(t.c==null){w=1
break}t.n(new C.ehx(h,t,i))
t.oz()
case 1:return B.h(u,v)}})
return B.i($async$DX,v)},
cl6(d,e,f){var w=this.c
w.toString
return B.c0(A.K,null,new C.eh0(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cl5(d,e){var w=this.c
w.toString
return B.c0(A.K,null,new C.eh_(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cl3(d,e){var w=this.c
w.toString
return B.c0(A.K,null,new C.egU(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cl4(d,e,f,g){var w=this.c
w.toString
return B.c0(A.K,null,new C.egW(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
a8V(){var w=null
return B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
a8W(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bV,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.aa(0,A.G,d.j(0.28),A.dl,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.V(e,A.c,u,u,u,28),A.h,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.en,B.D(B.u(B.a([B.d(g,u,u,u,u,u,u,D.eCU,u,u,u),A.ar,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a0,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aQz(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.H(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.Z,w,w,w,A.QU,A.L,w,w),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aQC(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.H(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.V(f,d,w,w,w,22),A.h,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.ba,B.D(B.u(B.a([B.d(i,w,w,w,w,w,w,A.mT,w,w,w),A.d4,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a0,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.V(A.A4,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.edU(e,j),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
bQI(d,e,f,g,h,i){return this.aQC(d,e,f,!1,g,h,i)},
arn(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.H(A.c.j(0.08),A.r,1)
return B.p(w,B.u(B.a([B.d(e,w,w,w,w,w,w,A.dP,w,w,w),A.by,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.VC,w,w,w)},
aQB(d,e,f){var w=null,v=B.bk(A.c.j(0.08),w,w,w,A.c,w,A.ca,w,new B.b5(B.m(14),A.W),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.mS,w,w,w),new C.edT(d,f),v)},
aQA(d,e){return this.aQB(d,e,null)},
Iv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.oA(l,s.c,s.d),$async$Iv)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.f3(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gag(o.z),n=new B.hX(l,new C.egM());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aI(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a7E(l.charCodeAt(0)==0?l:l,r.b),$async$Iv)
case 4:l=t.a
w=5
return B.b(B.oz(l.c,l.d),$async$Iv)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iv,v)},
GI(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$GI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.oA(q,s.c,s.d),$async$GI)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a7E(A.Q.aj(r.ac(),null),r.b+".json"),$async$GI)
case 4:q=t.a
w=5
return B.b(B.oz(q.c,q.d),$async$GI)
case 5:case 1:return B.h(u,v)}})
return B.i($async$GI,v)},
b0U(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.nB()
u.rI()
w=u.c
w.toString
v=B.eH(new C.ehk(u,t),!1,null,x.z)
B.a7(w,!1).cs(v)},
FW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$FW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$FW)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fnh(),$async$FW)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.hLD(s.a)
q=t.c
q.toString
w=5
return B.b(B.c0(A.aG,null,new C.ebE(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$FW)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.cZ(new C.ebF(t,s))
w=1
break}if(p==="split")t.cZ(new C.ebG(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$FW,v)},
LH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$LH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}w=3
return B.b(t.nu(),$async$LH)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aMK(s,null,null),$async$LH)
case 4:r=e
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ebK(t,r))
case 1:return B.h(u,v)}})
return B.i($async$LH,v)},
aYC(d){var w=this.e
if(w==null||!C.kg(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aKj(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aMK(s,t==null?null:B.aX(t),u)},
a5F(d){return this.bti(d)},
bti(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a5F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.etq)
w=1
break}w=3
return B.b(t.aKj(),$async$a5F)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.ebB(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a5F,v)},
adL(d){return this.ceh(d)},
ceh(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.esz)
w=1
break}w=3
return B.b(t.aKj(),$async$adL)
case 3:r=f
if(r==null||t.gdk()==null){w=1
break}t.cZ(new C.efB(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$adL,v)},
c1q(){var w,v,u=this
if(u.jG())return
w=new B.O(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bv(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cqF()}},
cqF(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.cZ(new C.ehs(this,r,(A.o.au(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bR2(){var w,v,u,t,s,r=this.gdk()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.cZ(new C.edX(this,r,u.d))},
bVt(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kg(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fjT(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kD&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
bVu(d){var w
if(this.jG())return!1
w=this.e
if((w==null?null:C.kg(w.w))!==!0)return!0
if(!this.yT())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fjT(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.kD&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
LQ(d){return this.bvw(d)},
bvw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$LQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.pv()){w=1
break}if(!t.yT()){s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.erp)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.ana(p),$async$LQ)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.F(x.q).f.P(D.es3)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a56(r)
w=1
break}t.n(new C.ecm(t,d,o))
t.nB()
$.aS.x1$.push(new C.ecn(t))
case 1:return B.h(u,v)}})
return B.i($async$LQ,v)},
TK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$TK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$TK)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.byH(),$async$TK)
case 4:s=e
if(s==null||t.gdk()==null){w=1
break}t.cZ(new C.eby(t,s))
case 1:return B.h(u,v)}})
return B.i($async$TK,v)},
Mz(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Mz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.nu(),$async$Mz)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jl()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fn8(r),$async$Mz)
case 4:q=e
if(q==null){w=1
break}t.cZ(new C.edo(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Mz,v)},
iA(d){this.cZ(new C.ebH(this,d))},
pk(d){return this.buJ(d)},
buJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$pk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.pv()){w=1
break}m=!D.aGW.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.nu(),$async$pk)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.FW()
w=1
break A
case"sign_paper":t.LH()
w=1
break A
case"hd_photo":t.TK()
w=1
break A
case"sharpen":t.Mz()
w=1
break A
case"print":t.Cm()
w=1
break A
case"rotate":s=t.jl()
if(s!=null)t.cZ(new C.ebQ(s))
w=1
break A
case"text_box":t.aIk()
w=1
break A
case"picture":t.TM()
w=1
break A
case"present":t.b0U()
w=1
break A
case"new_slide":t.a5H()
w=1
break A
case"export_json":t.GI()
w=1
break A
case"outline_share":t.Iv()
w=1
break A
case"flashcard_tool":t.um(D.G2)
w=1
break A
case"quiz_tool":t.um(D.G3)
w=1
break A
case"worksheet_tool":t.um(D.G4)
w=1
break A
case"duplicate_el":s=t.jl()
if(s==null){w=1
break A}t.cZ(new C.ebR(t,s))
w=1
break A
case"delete_el":t.ap3()
w=1
break A
case"bring_fwd":s=t.jl()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ebS(t,s))
w=1
break A
case"send_back":s=t.jl()
if(s==null||t.gdk()==null){w=1
break A}t.cZ(new C.ec2(t,s))
w=1
break A
case"align_left":s=t.jl()
if(s!=null)t.cZ(new C.ec5(s))
w=1
break A
case"align_center":s=t.jl()
if(s!=null)t.cZ(new C.ec6(s))
w=1
break A
case"align_right":s=t.jl()
if(s!=null)t.cZ(new C.ec7(s))
w=1
break A
case"grayscale":case"brighten":t.Mz()
w=1
break A
case"flip_h":s=t.jl()
if(s!=null)t.cZ(new C.ec8(s))
w=1
break A
case"flip_v":s=t.jl()
if(s!=null)t.cZ(new C.ec9(s))
w=1
break A
case"rectangle":t.ol(D.b8)
w=1
break A
case"circle":t.ol(D.ey)
w=1
break A
case"triangle":t.ol(D.jj)
w=1
break A
case"arrow":t.ol(D.B5)
w=1
break A
case"line":case"divider":t.ol(D.fb)
w=1
break A
case"word_count":r=t.gdk()
if(r==null){w=1
break A}for(q=A.d.gag(r.z),p=new B.hX(q,new C.eca()),o=0;p.C();){n=A.a.fl(A.a.i(q.gT(0).r),B.ad("\\s+",!0,!1,!1,!1))
o+=new B.a5(n,new C.ecb(),B.T(n).k("a5<1>")).gH(0)}t.c.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cx()
t.iA(C.iJ(A.L,!1,t.gpy().d.l(),A.az,40,A.bg,A.u,0.18,q,"Presentation Title",0,D.m7,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cx()
t.iA(C.iJ(A.L,!1,t.gpy().e.l(),A.az,22,A.bg,A.a0,0.12,q,"Subtitle goes here",0,D.d8,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iA(C.iJ(A.bf,!0,4279310375,A.az,20,A.bg,A.a0,0.5,C.cx(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.te,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iA(C.iJ(A.bf,!1,4279310375,A.az,20,A.bg,A.a0,0.5,C.cx(),"1. First item\n2. Second item\n3. Third item",0,D.td,0.8,0.1,0.22))
w=1
break A
case"quote":t.iA(C.iJ(A.L,!1,4279310375,A.az,24,A.cx,A.a0,0.25,C.cx(),'"Insert meaningful quote here."',0,D.d8,0.8,0.1,0.3))
w=1
break A
case"citation":t.iA(C.iJ(A.bf,!1,4284773515,A.az,14,A.bg,A.a0,0.1,C.cx(),"Author, Title (Year). Publisher.",0,D.te,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iA(C.iJ(A.dK,!1,4279310375,A.az,14,A.bg,A.a0,0.08,C.cx(),C.byJ(),0,D.d8,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iA(C.iJ(A.dK,!1,4279310375,A.az,13,A.bg,A.a0,0.06,C.cx(),"Page "+(t.f+1),0,D.d8,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.cZ(new C.ebT(t))
w=1
break A
case"footer_bar":t.cZ(new C.ebU(t))
w=1
break A
case"highlight":t.cZ(new C.ebV(t))
w=1
break A
case"redact":t.cZ(new C.ebW(t))
w=1
break A
case"callout":t.cZ(new C.ebX(t))
w=1
break A
case"checkboxes":t.iA(C.iJ(A.bf,!1,4279310375,A.az,20,A.bg,A.a0,0.45,C.cx(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.d8,0.8,0.1,0.2))
w=1
break A
case"table":t.iA(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a0,0.55,C.cx(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.d8,0.8,0.1,0.18))
w=1
break A
case"memo":t.cZ(new C.ebY(t))
w=1
break A
case"letter":t.iA(C.iJ(A.bf,!1,4279179050,A.az,17,A.bg,A.a0,0.82,C.cx(),C.byJ()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iA(C.iJ(A.bf,!1,4279310375,A.az,22,A.bg,A.O,0.76,C.cx(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.te,0.8,0.1,0.12))
w=1
break A
case"toc":t.iA(C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a0,0.76,C.cx(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.d8,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iA(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a0,0.08,C.cx(),"Signature: _________________________",0,D.d8,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iA(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a0,0.08,C.cx(),"Initials: ______",0,D.d8,0.3,0.65,0.78))
w=1
break A
case"approved":t.iA(C.iJ(A.L,!1,4278556265,A.az,28,A.bg,A.u,0.12,C.cx(),"APPROVED",0,D.m7,0.32,0.62,0.08))
w=1
break A
case"draft":t.iA(C.iJ(A.L,!1,4292617766,A.az,28,A.bg,A.u,0.12,C.cx(),"DRAFT",0,D.d8,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iA(C.iJ(A.L,!1,871318596,A.az,36,A.bg,A.u,0.12,C.cx(),"CONFIDENTIAL",0,D.d8,0.8,0.1,0.42))
w=1
break A
case"sticky":t.cZ(new C.ebZ(t))
w=1
break A
case"progress":t.cZ(new C.ec_(t))
w=1
break A
case"stars":t.iA(C.iJ(A.L,!1,4279310375,A.az,36,A.bg,A.a0,0.12,C.cx(),"\u2605\u2605\u2605\u2605\u2606",0,D.pm,0.8,0.1,0.4))
w=1
break A
case"equation":t.iA(C.iJ(A.L,!1,4279310375,A.az,32,A.bg,A.O,0.14,C.cx(),"y = mx + b",0,D.d8,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iA(C.iJ(A.L,!1,4279310375,A.az,18,A.bg,A.a0,0.2,C.cx(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.td,0.8,0.1,0.35))
w=1
break A
case"two_col":t.cZ(new C.ec0(t))
w=1
break A
case"compare":t.cZ(new C.ec1(t))
w=1
break A
case"link_text":t.iA(C.iJ(A.bf,!1,4280640491,A.mb,16,A.bg,A.a0,0.1,C.cx(),"https://example.com",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"phone":t.iA(C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a0,0.1,C.cx(),"(555) 123-4567",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"email":t.iA(C.iJ(A.bf,!1,4280640491,A.az,18,A.bg,A.a0,0.1,C.cx(),"name@email.com",0,D.d8,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.cZ(new C.ec3(t))
w=1
break A
case"cover_page":r=t.gdk()
if(r==null){w=1
break A}t.cZ(new C.ec4(t,r))
w=1
break A
case"invoice":t.iA(C.iJ(A.bf,!1,4279179050,A.az,16,A.bg,A.a0,0.84,C.cx(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"resume":t.iA(C.iJ(A.bf,!1,4279179050,A.az,17,A.bg,A.a0,0.84,C.cx(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.d8,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iA(C.iJ(A.bf,!1,4279310375,A.az,16,A.bg,A.a0,0.88,C.cx(),"MEETING MINUTES\nDate: "+C.byJ()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.d8,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iA(C.iJ(A.bf,!1,4279310375,A.az,17,A.bg,A.a0,0.88,C.cx(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.d8,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iA(C.iJ(A.bf,!1,4279310375,A.az,15,A.bg,A.a0,0.8,C.cx(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.d8,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$pk,v)},
ckz(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ekp.q(0,this.z)},
cky(d){if(this.jl()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b2s(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cb,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.H(u,A.r,o&&e?2:1)
t=C.hLs(d)
s=o?12:18
r=o?A.I:A.cF
if(o)if(e)q=f
else q=g?A.aj:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.h,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.M(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.an(p,B.p(p,D.Lm,A.h,p,p,D.Cl,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.hd,B.aJ(p,new B.am(A.V,p,A.a9,A.h,n,p),A.z,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.ae),p)},
bGu(d){var w,v=null,u=this.jl()
if(u==null)return A.bF
w=B.a([A.aa,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.al,v,v,v,v,v,v,v,v,10,v,v,A.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bo],x.p)
A.d.v(w,new B.J(D.NM,new C.edn(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
um(d){return this.btq(d)},
btq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$um=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aGS.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.nu(),$async$um)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.cZ(new C.ebI(t,d))
case 1:return B.h(u,v)}})
return B.i($async$um,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ejx
w=h.e
if(w==null)return h.bx7()
v=h.gdk()
v.toString
u=h.c
u.toString
t=B.L(u).ax.a===A.H
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bO,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.eo,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bV:D.b0K
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gQr()}else j=!1
if(j)k.push(new C.a5A(h.a.c,!1,h.e.gb4E(),h.gc1n(),g))
else if(s&&h.e!=null&&!h.jG()&&C.c9b(h.e.w)){j=h.a
k.push(new C.a5A(j.c,j.d,g,h.gc2w(),g))}if(s)k.push(h.bGq(w,t,r))
if(s&&h.jG()){w=t?A.fp:A.jW
j=B.m(14)
i=B.H(A.bh.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bx6,A.aa,B.D(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fp,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.h,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.zx,A.iE,g,g,g))}w=!n
if(w&&!h.jG())k.push(h.bWp(t,r))
if(w&&h.jG())k.push(h.crA(t))
if(r&&h.jl()!=null&&w&&!h.jG())k.push(h.bWl(t))
j=B.a([],l)
if(q&&w)j.push(new B.a3(132,g,h.b0q(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a3(g,72,h.b0q(t,!1),g))
i.push(B.D(new B.bF(A.b3,g,g,h.byn(v,t,!s||p),g),1))
if(h.ckz(r)&&u&&s&&!h.jG())i.push(h.c1b(v,t,r))
j.push(B.D(B.u(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.jG()&&h.cky(!1))j.push(new B.a3(240,g,h.bIY(t),g))
k.push(B.D(B.B(j,A.ad,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a3(g,r?72:h.a.e,g,g))
w=B.a([B.u(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.bWm(t))
return B.cg(g,m,B.br(!1,new B.am(A.V,g,A.a9,A.q,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bx7(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.L(p).ax.a===A.H
p=w?A.bV:A.bL
v=r.a.e
u=r.c0r(A.bh,A.p1,new C.ecq(r),r.gc4D(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.D(r.aI3(A.bh,A.hH,"Blank Presentation",new C.ecr(r)),1),A.av,B.D(r.aI3(A.aW,A.x3,"Class Template",new C.ecs(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bs,s,A.ma,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ab],t)
t=r.d
if(t.length===0)u.push(r.buc(w))
else{t=new B.hv(t,B.T(t).k("hv<1>"))
A.d.v(u,t.gdH(t).di(0,new C.ect(r,w),x.l))}return B.cg(q,p,B.br(!1,B.cK(u,q,new B.M(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ag,!0,!0),q,!1,!1,q,q)},
bEP(){this.n(new C.ed3(this))
var w=this.c
w.toString
if(B.aG(w,A.bO,x.w).w.a.a<900){w=$.aS.ae$.d.c
if(w!=null)w.jc()}},
acr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jl()==null){w=1
break}s=t.c
s.toString
s=B.L(s)
r=t.c
r.toString
w=3
return B.b(B.c0(A.K,null,new C.efe(t,s.ax.a===A.H),r,!0,!0,!0,null,!1,!1,x.H),$async$acr)
case 3:case 1:return B.h(u,v)}})
return B.i($async$acr,v)},
zP(d,e){return this.ckU(d,e)},
ckU(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$zP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hL(D.Tr,!0,"Dismiss",j,new C.egN(),new C.egO(d,e),A.id,!0,x.N),$async$zP)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.afQ()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gQr()){r.afQ()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aML(d),$async$zP)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aMa(j,q,d.b),$async$zP)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.a4(i)
j=r.c
if(j==null){w=1
break}j.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.DX(d,!1),$async$zP)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hL(D.Tr,!0,"Dismiss",j,new C.egP(),new C.egQ(d),A.X,!0,x.y),$async$zP)
case 20:if(g===!0)r.Ml(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.adv("Rename presentation",d.b),$async$zP)
case 24:l=g
if(l!=null)r.cfu(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ac()
k.m(0,"id",C.cx())
k.m(0,"name",d.b+" (Copy)")
r.n(new C.egR(r,k))
r.oz()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$zP,v)},
aWC(d,e){var w=null
return B.bG(!1,D.eZV,w,w,!0,w,w,e,w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.bh,w,w,w,A.as,w,A.lm,w,w,w,w,w,A.k3,w,w))},
buc(d){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ebN(this,d),null)},
bCX(d,e,f){var w=new B.J(B.a(d.split(" \u2022 "),x.s),new C.ecS(),x.dv).bZ(0,new C.ecT()),v=B.z(w,w.$ti.k("F.E"))
return new B.C(G.ac7,this.aIC(v,e,new C.ecU(),f),null)},
aIC(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eA)
t=e.j(g?0.14:0.1)
s=new B.b3(6,6)
r=new B.ax(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.V(p,g?A.aj:A.bB,n,n,n,10),A.v3],m))}p=d[v]
o=g?A.c.j(0.85):A.aI
q.push(new B.w(p,n,new B.G(!0,o,n,n,n,n,9.5,A.I,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cC(A.aY,A.e,A.R,A.m,n,A.p,n,0,q,n),A.h,n,n,new B.o(t,n,new B.c1(r,r,r,r),new B.bu(s,s,s,s),n,n,A.n),n,n,n,n,A.nm,n,n,n))
A.d.v(l,u)}return B.eX(A.a1,B.B(l,A.m,n,A.e,A.R,0,n,n),A.h,A.e8)},
bua(d,e,f){return this.aIC(d,e,null,f)},
bCZ(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.cUz
else if(v==="hati_kuhoweya")w=D.cI4
else{if(v==="hati_kiapo_uongozi")v=D.cw5
else v=C.kg(v)?D.cCy:A.Np
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.ecX(this,f,d,e,w),null)},
bWm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jl()
if(i==null||i.b!==D.cJ)return A.bF
w=k.UB(i)
v=k.aq3(i)
u=A.w.j(0.55)
t=x.p
s=B.br(!1,new B.C(A.zA,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bG(!1,D.eVV,j,j,!0,j,j,new C.een(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.aG:A.c
q=B.m(18)
p=B.H(A.bh.j(0.45),A.r,1)
o=B.a([new B.aa(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.D(new B.C(A.h1,B.bQ(new B.C(A.eF,B.aK(j,A.U,!0,j,!0,A.q,j,B.aL(),w,A.bh,j,j,j,j,2,D.bCS,A.z,!0,j,!0,j,!0,v,A.af,j,j,j,j,j,A.v6,j,j,j,j,j,j,!1,"\u2022",j,new C.eeo(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a8,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.yc,A.am,j,A.Qq,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.b7),j),1)
q=B.m(16)
p=d?A.bj:A.c
o=B.H(d?A.aI:A.aJ,A.r,1)
n=B.D(B.ch(B.B(B.a([k.t5(G.Kr,j,new C.eep(k,i),d),k.t5(G.WC,j,new C.eeq(k,i),d),k.t5(I.agc,j,new C.eer(k,i),d),k.t5(I.Xl,j,new C.ees(k,i),d),k.t5(k.bu8(i.as),j,new C.eet(k,i),d),k.t5(D.ahk,j,new C.eeu(k,i),d),k.t5(D.ahj,j,new C.eev(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.q,j,A.z,j,j,j,j,A.aY),1)
m=A.k.L(i.w)
return B.bW(0,B.aD(!1,A.X,!0,j,B.u(B.a([s,r,new B.C(D.bey,B.p(j,B.B(B.a([n,A.aa,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.al,j,j,j,j,j,j,j,j,11,j,j,A.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d5],t),A.m,j,A.e,A.j,0,j,j),A.h,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lo,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.h,u,0,j,j,j,j,j,A.ac),0,0,0)},
bWl(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jl()
if(m==null)return A.bF
w=m.b
v=w===D.cJ
u=B.m(18)
t=x.O
t=d?B.a([A.bj,A.M],t):B.a([A.c,A.aO],t)
s=B.H(d?A.aI:A.aJ,A.r,1)
r=B.a([new B.aa(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b_5(A.iY,"Edit",new C.ee8(o,m),d,!0))
if(w===D.l3)p.push(o.b_5(A.Eu,"Shape & ring",new C.ee9(o),d,!0))
p.push(o.t5(Av.EC,"Format",new C.eea(o),d))
if(v)A.d.v(p,B.a([o.t5(G.Kr,n,new C.eeb(o,m),d),o.t5(D.ahk,n,new C.eec(o,m),d),o.t5(D.ahj,n,new C.eed(o,m),d)],q))
p.push(A.b6)
p.push(o.ciP(A.e4,n,o.gaMz(),d,!0))
p.push(o.t5(A.hg,"Done",new C.eee(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(n,n,s,u,r,new B.a8(A.a1,A.a7,A.x,t,n,n),A.n),n,n,n,A.Dv,A.lo,n,n,n)},
bu8(d){switch(d.a){case 2:return D.Xi
case 1:case 5:return D.Xk
default:return D.Xj}},
bXb(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dK
default:return A.bf}},
aw2(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aH
else if(h)w=A.c
else{v=g?A.aj:A.aI
w=v}v=B.m(12)
u=B.m(12)
t=h?K.ES:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.V(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eA,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.I,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qb,B.aD(!1,A.X,!0,n,B.aH(!1,v,!1,B.eq(new B.C(new B.M(q,8,q,8),B.B(o,A.m,n,A.e,A.R,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.h,A.K,0,n,n,n,n,n,A.ac),n)},
t5(d,e,f,g){return this.aw2(d,e,f,g,!1,!1)},
b_5(d,e,f,g,h){return this.aw2(d,e,f,g,h,!1)},
ciP(d,e,f,g,h){return this.aw2(d,e,f,g,!1,h)},
bGq(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bj,A.M],m):B.a([A.c,A.mk],m)
w=B.H(e?A.aI:A.pT,A.r,1.2)
v=B.a([new B.aa(0,A.G,A.bh.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a0e(A.et,"Back",p.gbA4(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.Z,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d5,B.D(B.B(B.a([new B.dl(1,A.cj,t,o),A.aa,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c2:A.al,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.rq,o,A.e,A.j,0,A.cQ,o),1)],q)
if(!p.jG()){u=p.a0e(A.uA,"Undo",p.ax.length===0?o:p.gcs2(),e)
A.d.v(r,B.a([u,p.a0e(D.bqI,"Redo",p.ay.length===0?o:p.gced(),e)],q))}r.push(p.a0e(A.wL,"PDF",new C.edg(p),e))
r.push(p.a0e(A.hh,"Download as video",new C.edh(p),e))
if(!p.jG())r.push(B.AH(o,o,B.V(A.np,e?A.aj:A.bB,o,o,o,o),new C.edi(p),A.J,new C.edj(p),A.ag,"More",x.N))
r.push(A.d5)
r.push(B.aD(!1,A.X,!0,o,B.aH(!1,B.m(14),!0,B.eq(D.dMd,o,new B.o(o,o,o,B.m(14),o,K.ES,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gawR(),o,o,o,o,o,o,o),A.h,A.K,0,o,o,o,o,o,A.ac))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.h,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bet,D.bjz,o,o,o)},
crA(d){var w=this,v=null,u=B.m(18),t=d?A.aG.j(0.92):A.c.j(0.96),s=B.H(d?A.d3:A.aJ,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.ij(A.rW,"Print",new C.ehy(w),d),w.ij(A.wL,"Download PDF",new C.ehz(w),d),w.ij(A.p7,"Present",w.gawR(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.q,v,A.z,v,v,v,v,A.aY),A.h,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.zx,G.adS,v,v,v)},
a0e(d,e,f,g){var w,v=null
if(f==null)w=g?A.be:A.dt
else w=g?A.aj:A.aI
return B.aF(v,v,v,v,B.V(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.c6)},
bWp(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aG.j(0.92):A.c.j(0.96)
u=B.H(d?A.d3:A.aJ,A.r,1)
t=x.f0
t=B.z(new B.J(p,new C.eey(r,d),t),t.k("ai.E"))
t.push(new B.C(W.ady,new B.fh(new C.eez(r),q),q))
A.d.v(t,w?B.a([new B.C(S.uf,r.ae7(A.kX,"Ending celebration",r.gc4Q(),d),q),new B.C(S.uf,r.ae7(A.Eu,"Logo ring & frame",r.gc5v(),d),q)],x.p):A.fT)
A.d.v(t,w?B.a([new B.C(S.uf,r.ae7(A.nq,"Look and feel",r.gc5w(),d),q),new B.C(S.uf,r.ae7(A.pb,"Edit this slide's text",r.gc61(),d),q)],x.p):A.fT)
t.push(new B.C(S.uf,B.hI(B.aJ(q,B.p(q,D.ej1,A.h,q,q,new B.o(q,q,q,B.m(999),B.a([new B.aa(0,A.G,O.kR.j(0.4),A.J,10)],x.V),D.ajh,A.n),q,34,q,q,A.ii,q,q,q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eeA(r),q,q,q,q,q,q,!1,A.ae),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.j,0,q,q),A.q,q,A.z,q,D.bk0,q,q,A.aY)
s=e?8:10
return B.p(q,B.u(B.a([t,B.ch(r.cgB(d),A.q,q,A.z,q,new B.M(8,2,8,s),q,q,A.aY)],x.p),A.ad,q,A.e,A.j,0,A.p),A.h,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.zx,q,q,q,q)},
cgB(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.cPb[v]
u.a=null
s=u.a=t.b
w.push(e.l9(e.cif(s),t.a,new C.efX(u,e),a3,D.aGS.q(0,s)))}w.push(e.ij(A.kw,"Notes Slide",new C.efY(e),a3))
w.push(e.l9(A.Et,"Quiz",new C.efZ(e),a3,!0))
w.push(e.l9(L.E7,"Worksheet",new C.eg9(e),a3,!0))
w.push(e.l9(P.Ey,"Flashcard",new C.egk(e),a3,!0))
w.push(e.l9(A.Ld,"Lab Report",new C.egv(e),a3,!0))
w.push(e.l9(A.wR,"Rubric",new C.egC(e),a3,!0))
w.push(e.l9(A.o5,"Minutes",new C.egD(e),a3,!0))
w.push(e.l9(A.p5,"Syllabus",new C.egE(e),a3,!0))
w.push(e.l9(A.Lh,"Timeline",new C.egF(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.cQi[v]
w.push(e.l9(r.b,r.c,new C.egG(e,r),a3,!D.aGW.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.ij(A.x6,a0,e.gaIj(),a3),e.ij(A.rT,"Picture",new C.eg_(e),a3),e.ij(A.x0,"Bio link",new C.eg0(e),a3),e.ij(A.XT,"Table",new C.eg1(e),a3),e.ij(A.Lg,"Sticky",new C.eg2(e),a3),e.ij(A.uq,"Divider",new C.eg3(e),a3),e.ij(A.ED,"Header",new C.eg4(e),a3),e.l9(A1.Ee,"Rectangle",new C.eg5(e),a3,!0),e.l9(A.rL,"Circle",new C.eg6(e),a3,!0),e.l9(A.X9,"Triangle",new C.eg7(e),a3,!0),e.l9(A.je,"Arrow",new C.eg8(e),a3,!0),e.l9(D.bpb,"Parallelogram",new C.ega(e),a3,!0),e.l9(D.brH,"Hexagon",new C.egb(e),a3,!0),e.l9(A.uq,"Line",new C.egc(e),a3,!0),e.l9(A.wL,"PDF",new C.egd(e),a3,!0),e.l9(O.Y0,"Signature",new C.ege(e),a3,!0),e.ij(A0.Aa,"Quote",new C.egf(e),a3),e.ij(D.WK,a1,new C.egg(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bO,x.w).w
u=x.p
t=B.B(B.a([e.aJ8("Wide 16:9",D.B3,a3),e.aJ8("Short 9:16",D.nx,a3),new B.C(A.hd,B.mG(D.btO,d,D.eSx,d,new C.egh(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bAj("This slide",!e.Q,a3,new C.egi(e)),A.bo,e.aLj("All slides",e.Q,a3,new C.egj(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bAk()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a0,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.al,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.z(new B.J(D.ZN,new C.egl(e),n),n.k("ai.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.al,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.cR4[v]
j=B.aX(k)
i=new B.ax(k===4294967295?A.dt:A.be,1.5,A.r,-1)
l.push(new B.C(A.hd,B.aJ(d,B.p(d,d,A.h,d,d,new B.o(j,d,new B.c1(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.z,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.egm(e,k),d,d,d,d,d,d,!1,A.ae),d))}l=B.ch(B.B(l,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.al,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bzZ()
g=B.T(h).k("J<1,C>")
h=B.z(new B.J(h,new C.egn(e,a3),g),g.k("ai.E"))
return new B.a3(w.a.a-20,d,B.u(B.a([t,A.P,q,A.ar,p,A.P,o,A.au,n,A.P,m,A.au,l,A.P,j,A.au,B.ch(B.B(h,A.m,d,A.e,A.j,0,d,d),A.q,d,A.z,d,d,d,d,A.aY),A.ar,e.bTm(a3)],u),A.F,d,A.e,A.R,0,A.p),d)
case"Transitions":f=e.jl()
w=e.c
w.toString
w=B.aG(w,A.bO,x.w).w
u=new C.efW(e)
t=new C.egH(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.al,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.NM,f.dy,new C.ego(e,u,f),A.aW)
A.d.v(p,B.a([o,A.au,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.al,d,d,d,d,d,d,d,d,10,d,d,A.I,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdk()
q=q==null?d:q.r
p.push(t.$4(D.NM,q,new C.egp(e,u),A.bh))
return new B.a3(w.a.a-20,d,B.u(p,A.F,d,A.e,A.R,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.ij(A.kw,w,new C.egq(e),a3),e.ij(A.rW,"Print deck",new C.egr(e),a3),e.l9(D.afl,"Export JSON",new C.egs(e),a3,!0),e.ij(A.fx,"Duplicate Slide",e.gaNn(),a3),e.ij(A.e4,a2,e.gaMA(),a3),e.cmb(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jl()
w=x.p
u=B.a([e.ij(D.WK,a1,new C.egt(e),a3),e.ij(A.fx,"Duplicate",e.gaNn(),a3),e.ij(A.e4,a2,e.gaMA(),a3),e.ij(A.p7,"Present",e.gawR(),a3),e.ij(A.Ah,a0,e.gaIj(),a3),e.ij(A.Eq,"Fit Text",new C.egu(e),a3),e.ij(A.wL,"Download PDF",new C.egw(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.ij(A.ky,"Transfer",new C.egx(e),a3))
if(f!=null){w=B.a([A.aa,e.ij(G.Kr,"Bold",new C.egy(e,f),a3),e.ij(G.WC,"Italic",new C.egz(e,f),a3),e.ij(G.aeX,"Underline",new C.egA(e,f),a3),e.ij(Aa.Ks,"Bullets",new C.egB(e,f),a3),e.bIH(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bGu(a3))
w.push(e.ij(D.bnT,"Delete",e.gaMz(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aJ8(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.nx
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a4o,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d5,D.bt_],v))
return new B.C(A.hd,B.jO(t,t,t,B.B(u,A.m,t,A.e,A.R,0,t,t),t,new C.ecl(this,w,e),s===e,A.bh.j(0.25),t,t,t),t)},
cmb(d){var w,v,u,t,s,r=this,q=null,p=r.gdk()
if(p==null)return A.bF
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.H(d?A.be:A.cr,A.r,1)
u=B.m(8)
t=B.V(A.E4,d?A.aA:A.al,q,q,q,14)
s=B.aF(q,q,q,q,D.aii,q,q,q,new C.eh3(r,p),q,q,q,q,q,A.c6)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.ai8,q,q,q,new C.eh4(r,p),q,q,q,q,q,A.c6)],x.p),A.m,q,A.e,A.R,0,q,q),A.h,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.DL,A.lU,q,q,q)},
cif(d){switch(d.a){case 6:return P.Ey
case 7:return A.Et
case 8:return L.E7
case 4:return A.ED
default:return A.kw}},
bIH(d,e){var w=null,v=B.H(e?A.be:A.cr,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aii,w,w,w,new C.edt(this,d),w,w,w,w,w,A.c6),s=A.k.L(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.ai8,w,w,w,new C.edu(this,d),w,w,w,w,w,A.c6)],x.p),A.m,w,A.e,A.R,0,w,w),A.h,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.wv,A.lU,w,w,w)},
bTm(d){var w=null
return B.AH(B.C6(B.V(Ad.WN,d?A.aj:A.bB,w,w,w,16),w,w,D.eXC,w,w,w),w,w,new C.ee0(),A.J,this.gbuP(),A.ch,"Slide layout",x.fO)},
l9(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bL,s=B.H(g?A.du:A.aJ,A.r,1),r=x.p,q=B.a([B.V(d,g?A.dE:A.bh,w,w,w,18)],r)
if(h)q.push(B.an(w,B.p(w,D.Lm,A.h,w,w,D.Cl,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.hd,B.aD(!1,A.X,!0,w,B.aH(!1,v,!0,B.eq(new B.C(A.h1,B.u(B.a([new B.am(A.V,w,A.a9,A.h,q,w),A.d4,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bB,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.R,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w)},
ij(d,e,f,g){return this.l9(d,e,f,g,!1)},
b0q(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aY
v=B.hE(t,new C.ehf(u,s,e,d),s.r.length,A.ch,t,w,new C.ehg(e),!1)
s=d?A.aG:A.bL
w=B.a([],x.p)
if(e&&!u.jG())w.push(new B.C(A.ch,B.Gb(E.aiv,new C.ehh(u),B.ok(t,A.bh,t,t,t,t,t,t,t,t,t,t,E.aHy,t,t,t,t),"Add slide"),t))
w.push(B.D(v,1))
return B.p(t,B.u(w,A.m,t,A.e,A.j,0,A.p),A.h,s,t,t,t,t,t,t,t,t,t,t)},
byn(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.nx?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.M(u,u,u,u),new B.bF(A.b3,v,v,new B.fM(w,B.aJ(v,B.cj(new C.ecK(this,d,e)),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ecL(this),v,v,v,v,v,v,!1,A.ae),v),v),v)},
byp(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kg(a9.w))===!0,b1=b0&&C.fjT(b3),b2=b0&&b3.b===D.kD&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.jG())v=!b0||a7.bVu(b3)
else v=!1
if(!a7.jG())u=!b0||a7.bVt(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.cl:A.bh
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fHt(b3))o=a8
else if(p&&!a7.jG())o=a7.gc1p()
else o=a7.jG()?a8:new C.ecy(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jC
i=w&&C.fHt(b3)&&a7.yT()?new C.ecz(a7,b3):a8
h=v&&b3.b===D.cJ?new C.ecA(a7,b3):a8
g=u?new C.ecB(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.br
else e=q?A.bQ:r
else e=A.K
e=B.H(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bQ.j(0.08)
else a0=b3.b===D.kD?A.K:a8
if(b1){a1=a7.jG()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bQ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bO,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.yT()
a3=b3.b===D.cJ
a4=a3?a7.UB(b3):a8
a5=a3?a7.aq3(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bO,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ecC(a7,b3):a8
a3=v&&a3?new C.ecD(a7,b3):a8
a6=C.aYF(q,a4,a1,b3,a5,a2,a3,new C.ecE(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.h,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.an(-4,B.aJ(a8,B.p(a8,D.bvM,A.h,a8,a8,new B.o(r,a8,B.H(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ecF(a7,b3,b4,b5),a8,a8,new C.ecG(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.jG()&&b3.db==="marriage_locked_nim_n_4")d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bwq,A.h,a8,a8,new B.o(A.fN,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbR1(),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.jG()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.an(a8,B.aJ(a8,B.p(a8,D.bxY,A.h,a8,a8,new B.o(A.bQ,a8,B.H(A.c,A.r,1.2),a8,B.a([new B.aa(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ecH(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cJ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bO,x.w).w.a.a<900}if(e)d.push(B.an(-28,B.as(B.aJ(a8,B.p(a8,D.f4F,A.h,a8,a8,new B.o(A.bh,a8,a8,B.m(999),B.a([new B.aa(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kt,a8,a8,a8),A.z,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ecI(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.ae),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.an(a8,B.aJ(j,B.es(A.B,f,new B.am(A.V,a8,A.a9,A.h,d,a8),a8),A.z,!1,a8,h,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.ae),k*b5,new B.cv("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aLj(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bh.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.H(e?A.bh:A.bG,A.r,1)
if(e)t=A.bh
else t=f?A.aA:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d5,B.p(r,D.Lm,A.h,r,r,D.Cl,r,12,r,r,r,r,r,12)],s))
return B.aJ(r,B.p(r,B.B(t,A.m,r,A.e,A.R,0,r,r),A.h,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h0,r,r,r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.ae)},
bAj(d,e,f,g){return this.aLj(d,e,f,g,!1)},
c1b(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.at()
v.O$=0}v=d.c
w.m(0,k,new B.ao(new B.bb(v,A.b_,A.aL),$.at()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aG:A.aO
t=f?A.vz:l
if(f)s=new B.c1(new B.ax(e?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.aa(0,A.G,A.w.j(0.12),A.tm,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.aj:A.bB,l,l,l,l,l,l,l,l,12,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.aWC(e,new C.eeC(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aI,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.u(B.a([p,A.ar,B.D(B.aK(l,A.U,!1,l,!0,A.q,l,B.aL(),k,l,l,l,l,l,2,B.bl(l,new B.b1(4,B.m(10),A.da),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.z,!0,l,!0,l,!1,l,A.af,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eeD(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a8,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.am,l,l,l,l),1)],q),A.ad,l,A.e,A.j,0,A.p),A.h,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.M(12,w,12,v),l,l,l)},
aOD(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jl()
if(a2==null)return A.bF
w=new C.edH(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dJ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.aWC(a3,a0.gbEO())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.eSY,B.D(B.m8(a1,a1,a1,u,0.05,new C.edI(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.f3f,B.D(B.m8(a1,a1,a1,t,0.05,new C.edJ(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cJ
if(m)o.push(B.B(B.a([D.eNf,B.D(B.m8(a1,a1,a1,96,10,new C.edK(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.l3
if(l||n===D.kD||n===D.P0)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.eYf,B.D(B.m8(a1,a1,a1,s,0,new C.edL(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.f4p,B.D(B.m8(a1,a1,a1,r,0,new C.edM(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Aw[j]
i.a=null
g=h.a
i.a=g
k.push(B.jO(a1,a1,a1,new B.w(h.b,a1,A.pz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.edN(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.cb(A.bH,k,A.bw,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ar[j]
f.a=null
g=e.a
f.a=g
h.push(B.jO(a1,a1,a1,new B.w(e.b,a1,A.pz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.edO(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.P,l,A.ar,k,A.P,i,A.ar,B.cb(A.bH,h,A.bw,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.z(new B.J(v,new C.edP(w,a2),l),l.k("ai.E"))
k=x.fw
A.d.v(o,B.a([m,A.ar,B.cb(A.bH,l,A.bw,6,6),A.ab,B.fTg(new C.edQ(w,a2),D.c7y,B.eN([a2.as],k),!0,a1,k)],p))}if(n===D.eQ){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.z(new B.J(v,new C.edR(w,a2),m),m.k("ai.E"))
A.d.v(o,B.a([n,B.cb(A.bH,m,A.bw,0,6)],p))}o.push(A.ab)
o.push(B.dk(D.bxK,D.f_4,new C.edS(a0,a5),B.bk(A.bS,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cK(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.d3:A.c
p=a4?A.vz:a1
if(a4)o=new B.c1(new B.ax(a3?A.bG:A.aJ,1,A.r,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.h,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.aa(0,A.G,A.w.j(0.12),A.tm,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Dw,a1,a1,a1)},
bIY(d){return this.aOD(d,!1,!1,null)},
c0r(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c4(p,new C.edV(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.eDM,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.ba,B.D(B.u(B.a([w,A.by,A.d4,r.bua(D.cAg,d,B.L(v).ax.a===A.H)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.aa,B.dO(B.hI(B.aD(!1,A.X,!0,q,B.aH(!1,q,!0,B.eq(D.enS,q,new B.o(q,q,B.H(A.c.j(0.55),A.r,1.3),q,B.a([new B.aa(0,A.G,A.bQ.j(0.4),A.e6,8)],p),D.ajl,A.a5),q,q,q),A.cC,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.L(w).ax.a===A.H
w=B.m(20)
v=x.O
v=s?B.a([D.aYW,D.aZg],v):B.a([A.c,A.jW],v)
u=B.H(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.h,q,q,new B.o(q,q,u,w,B.a([new B.aa(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aI3(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c4(w,new C.ebu(this,g,d,e,f),null)},
adv(d,e){return this.ccC(d,e)},
ccC(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$adv=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.at()
q=new B.ao(new B.bb(e,A.b_,A.aL),r)
p=t.c
p.toString
w=3
return B.b(B.ce(null,null,!0,null,new C.efz(d,q),p,null,!0,!0,x.N),$async$adv)
case 3:s=g
q.R$=r
q.O$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$adv,v)},
O7(d){var w=d.bP()
return""+B.bB(w)+"/"+B.bN(w)+"/"+B.bw(w)}}
C.acN.prototype={}
C.aw_.prototype={
S(){return new C.b91(null,null)}}
C.b91.prototype={
gcoh(){var w,v=this.a.c,u=v.f.bP(),t=""+B.bB(u)+"/"+B.bN(u)+"/"+B.bw(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a0()
w=B.bi(u,A.oU,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aO()
v.d=w
w=B.bi(u,D.bd_,u,1,u,v)
w.co(0)
v.e!==$&&B.aO()
v.e=w},
p(){var w=this.d
w===$&&B.c()
w.p()
w=this.e
w===$&&B.c()
w.p()
this.bnN()},
Hx(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.co.ar(0,new B.hC(w,v,A.co).ar(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.C(D.bir,B.c4(new B.h2(B.a([u,w],x.dS)),new C.cV6(this),v),v),v,v,v)}}
C.b9f.prototype={
B(d){var w=null,v=B.m(22),u=B.H(A.aI,A.r,1),t=x.p
return B.as(new B.C(D.biI,B.aD(!1,A.X,!0,w,B.p(w,B.bv(B.m(22),B.u(B.a([new B.C(D.bhV,B.u(B.a([B.p(w,D.bww,A.h,w,w,new B.o(A.aH.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.f0Y,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.eES,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,D.bc3,B.B(B.a([B.D(B.bG(!1,D.eRm,w,w,!0,w,w,new C.cVs(d),w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.mw,w,A.nB,w,w,w,w,w,w)),1),B.p(w,w,A.h,A.bj,w,w,w,48,w,w,w,w,w,1),B.D(B.bG(!1,D.eWd,w,w,!0,w,w,new C.cVt(d),w,B.fo(w,w,w,w,w,w,w,w,w,w,w,A.aH,w,w,w,w,w,A.mw,w,A.nB,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.R,0,A.p),A.ap),A.h,w,N.Sn,new B.o(A.aG,w,u,v,D.cAz,w,A.n),w,w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w),w,w,w)}}
C.I8.prototype={
S(){return new C.b90()}}
C.b90.prototype={
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
return B.dO(B.d5(B.aJ(o,B.w0(B.dg(o,B.B(B.a([r,A.av,new B.dl(1,A.cj,B.d(q,o,2,A.Z,o,o,o,B.l(o,o,l?A.fP:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b5,A.R,0,o,o),o,o,A.b9,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.rC,o,o,1/0),A.co,A.jb,w),A.z,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.cV1(p,d),new C.cV2(p),new C.cV3(p),new C.cV4(p),o,o,o,!1,A.ae),k),new B.v(0,(1-k)*16))}}
C.NM.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.H(A.c.j(0.5),A.r,1.2),p=x.p
return B.aD(!1,A.X,!0,t,B.aH(!1,s,!0,new B.C(A.eF,B.B(B.a([B.p(v,B.V(w.c,A.c,v,v,v,22),A.h,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.en,B.D(B.u(B.a([B.d(w.e,v,v,v,v,v,v,A.mT,v,v,v),A.by,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.h,u,0,v,v,v,v,v,A.ac)}}
C.Yq.prototype={
S(){return new C.aBo(D.d8,null,null)}}
C.aBo.prototype={
gWN(){var w,v=this,u=v.w
if(u===$){w=B.bi(null,D.bcA,null,1,null,v)
v.w!==$&&B.bI()
v.w=w
u=w}return u},
b0P(d){if(!this.a.c.ay)return
this.x=d
this.gWN().ie(0,0)},
Z(){var w,v=this
v.a0()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.asX(D.euc)
C.hIp()
v.Pw()},
p(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.gWN().p()
v=w.z
if(v!=null)v.a9(0)
C.asX(D.eud)
C.hIs()
w.bpU()},
cr1(){B.j6()
this.n(new C.eie())
var w=this.c.F(x.q).f
w.a2h()
if($.bgG)w.P(D.er4)},
Pw(){var w,v=this,u=v.f
if(u!=null)u.a9(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cV(B.dB(0,0,0,0,0,A.o.D(C.fRr(u,w),1,120)),new C.ei4(v))},
cqH(){var w,v=this
v.n(new C.eid(v))
if(v.r)v.Pw()
else{w=v.f
if(w!=null)w.a9(0)}},
gaQs(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cl_(){var w=this,v=w.f
if(v!=null)v.a9(0)
w.n(new C.ei5(w))
v=w.z
if(v!=null)v.a9(0)
if(w.a.c.ch&&w.r)w.z=B.cV(A.o_,new C.ei6(w))},
asQ(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a9(0)
if(u.a.c.ch){u.n(new C.ei0(u))
u.Pw()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaQs()){u.cl_()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.n(new C.ei1(u,A.o.J(w+1,s)))
u.b0P(w)
u.Pw()}},
cbh(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a9(0)
v.n(new C.ei2(v))
v.Pw()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.n(new C.ei3(v,w,t))
v.b0P(w)
v.Pw()}},
cmn(d){var w,v=this,u=v.e
if(u===D.cb){u=v.d
u===$&&B.c()
return new B.n8(d,new B.cv(u,x.ac))}w=v.cmo(u)
u=v.d
u===$&&B.c()
return B.qk(new B.n8(d,new B.cv(u,x.ac)),w,new C.eib(),A.b9,A.b9,new C.eic(v))},
cmo(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bcW
case 16:return A.kV
case 18:return A.ni
default:return A.oW}},
cmm(d,e,f){var w,v,u,t=null,s=B.cF(A.co,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.tn,A.J,w),w.k("bc<bC.T>")),t,!0)
case 3:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pf,A.J,w),w.k("bc<bC.T>")),t,!0)
case 4:case 21:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.ir,A.J,w),w.k("bc<bC.T>")),t,!0)
case 5:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.tl,A.J,w),w.k("bc<bC.T>")),t,!0)
case 6:case 16:w=x.b
return B.iF(A.B,new B.d_(s,!1,e,t),t,new B.bc(s,new B.bm(0.82,1,w),w.k("bc<bC.T>")))
case 7:w=x.b
return B.iF(A.B,new B.d_(s,!1,e,t),t,new B.bc(s,new B.bm(1.18,1,w),w.k("bc<bC.T>")))
case 8:return B.c4(s,new C.ei7(s),e)
case 9:return B.c4(s,new C.ei8(s),e)
case 10:return B.c4(s,new C.ei9(s),e)
case 11:return B.c4(s,new C.eia(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.iF(A.B,e,t,new B.bc(s,new B.bm(1.03,1,w),w.k("bc<bC.T>"))),t)
case 14:w=s.gt(0)
v=x.K
return B.jy(B.jc(e,new B.bc(s,new B.bm(A.tn,A.J,v),v.k("bc<bC.T>")),t,!0),A.q,new C.bnz(w,t))
case 15:w=x.K
return B.jc(e,new B.bc(s,new B.bm(A.Pf,A.J,w),w.k("bc<bC.T>")),t,!0)
case 19:w=B.de()
w.me((1-s.gt(0))*2)
v=s.gt(0)
u=s.gt(0)
w.jf(v,u,v,1)
return B.fl(A.B,B.d5(e,s.gt(0)),t,w,!0)
case 20:return B.es(A.B,(1-s.gt(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jy(new C.alH(B.c4(n.gWN(),new C.eif(n,v,w),m),m),A.q,m)}else{t=B.qV(new C.H7(w,!0,!1,m))
l=B.aX(w.e)
u=n.cmn(B.ec(B.jy(t,A.q,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.fRr(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ot,m,m,m),A.bo,D.byL],k),A.m,m,A.e,A.R,0,m,m),A.h,m,m,new B.o(A.aV,m,m,l,m,m,A.n),m,m,m,m,A.fF,m,m,m)
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
l.push(B.bW(0,new C.LI(new C.Db(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.nx?0.5625:1.7777777777777777
l.push(B.as(new B.fM(r,B.jy(B.tM(A.ag,u,!0,4,1,!0,!0,m),A.q,m),m),m,m,m))}if(!$.bgG){r=B.Gb(A.kA,new C.eig(d),B.ok(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.an(m,B.br(!0,B.B(B.a([r,A.aa,B.Gb(B.V(n.r?Ag.wZ:A.iG,m,m,m,m,m),n.gcqG(),B.ok(m,A.aV,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.an(16,B.br(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h8,m,m,m),A.h,m,m,new B.o(A.aV,m,m,r,m,m,A.n),m,m,m,m,A.fF,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.an(m,B.br(!0,B.aJ(A.c4,B.p(A.kL,$.bgG?A.bF:s,A.h,m,m,m,m,64,m,m,D.bdI,m,m,150),A.z,!1,m,n.gcr0(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.ae),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.cg(m,A.w,B.aJ(m,new B.am(A.V,m,A.aX,A.q,l,m),A.z,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eih(n,d),m,m,m,!1,A.ae),m,!1,!1,m,m)}}
C.If.prototype={
B(d){var w=null
return B.p(w,B.br(!0,new B.C(E.adk,this.c,w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSd,w,w,w,w,w,w,w,w)}}
C.bnz.prototype={
iH(d){return new B.af(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
ji(d){return d.b!==this.b}}
C.bdS.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aP6
break A}w=B.m(6)
break A}v=s.e
u=B.H(v?A.aB:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dg(r,B.as(B.p(r,r,A.h,r,r,new B.o(r,r,r,t,r,E.uH,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b9,new B.o(s.f,r,u,w,r,r,A.n),A.hG,r,64,r,r,r,r,64)
return B.aJ(r,new B.a3(78,r,B.u(B.a([w,A.ar,B.d(s.d,r,1,A.Z,r,r,r,B.l(r,r,v?A.aB:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.ae)}}
C.bdR.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.d1i.h(0,p)
if(o==null)o=D.cQo
p=p==="none"
w=p?q:new B.a8(A.a1,A.a7,A.x,o,q,q)
p=p?A.cS.j(0.25):q
v=r.e
u=v?B.H(A.aB,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ahv:q
w=B.p(q,B.p(q,s,A.h,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.h,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ef,q,q,52)
return B.aJ(q,new B.a3(66,q,B.u(B.a([w,A.ar,B.d(r.d,q,1,A.Z,q,q,q,B.l(q,q,v?A.aB:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.ae)}}
C.aH0.prototype={
aO(){this.aU()
this.aS()
this.dD()},
p(){var w=this,v=w.aY$
if(v!=null)v.a1(0,w.gdB())
w.aY$=null
w.a2()}}
C.aJ1.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.btd.prototype={}
C.aJ2.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aYI.prototype={}
C.U_.prototype={
S(){return new C.aBm()},
bb3(d){return this.e.$1(d)}}
C.aBm.prototype={
gb_b(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga7S(){var w,v
if(this.d==="all")return B.bh(this.a.d,!0,x.I)
w=this.gb_b()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaJZ(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb_b()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb0p(){return A.d.cI(this.ga7S(),0,new C.ehL())},
Z(){var w,v=this
v.a0()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.P7()},
P7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.aZi(s.c,s.f),$async$P7)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.ehH(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$P7,v)},
Hz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Hz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga7S()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fn4(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.oA(o,q.c,q.f),$async$Hz)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eH(new C.ehK(t,p),!1,null,x.H)
w=4
return B.b(B.a7(o,!1).cs(q),$async$Hz)
case 4:q=t.a
w=5
return B.b(B.oz(q.c,q.f),$async$Hz)
case 5:w=6
return B.b(t.P7(),$async$Hz)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Hz,v)},
Pu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hk(o,D.dE8,!0,"NgmySlidesTransferScan",x.N),$async$Pu)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.n(new C.ehI(t))
w=4
return B.b(C.aeT(s),$async$Pu)
case 4:r=e
t.n(new C.ehJ(t))
o=J.a6(r)
if(o.gah(r)){o=t.c
if(o==null){w=1
break}o.F(x.q).f.P(D.epY)
w=1
break}w=5
return B.b(t.a.bb3(r),$async$Pu)
case 5:q=t.c
if(q==null){w=1
break}B.a7(q,!1).K(null)
q=t.c.F(x.q).f
p=o.gH(r)
o=o.gH(r)===1?"":"s"
q.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pu,v)},
Hy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Hy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga7S()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.oA(s,r.c,r.f),$async$Hy)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fnj(null,A.d.gI(n),s,t.a.f)}else q=C.fnj(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ad("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aI(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.EY(q,"ngmy_slides_"+p,!1),$async$Hy)
case 4:o=e
s=t.a
w=5
return B.b(B.oz(s.c,s.f),$async$Hy)
case 5:w=6
return B.b(t.P7(),$async$Hy)
case 6:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(B.b_(null,null,null,null,null,A.q,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Hy,v)},
a0p(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.n(new C.ehM(t))
w=3
return B.b(C.byr(),$async$a0p)
case 3:s=e
t.n(new C.ehN(t))
if(s==null||J.ci(s)){w=1
break}w=4
return B.b(t.a.bb3(s),$async$a0p)
case 4:r=t.c
if(r==null){w=1
break}B.a7(r,!1).K(null)
r=t.c.F(x.q).f
q=J.a6(s)
p=q.gH(s)
q=q.gH(s)===1?"":"s"
r.P(B.b_(null,null,null,null,null,A.q,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a0p,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.L(d).ax.a===A.H,l=m?A.dc:A.bL,k=o.ga7S().length!==0,j=B.an(n,B.p(n,n,A.h,n,n,new B.o(n,n,n,n,n,new B.bS(A.B,0.5,A.x,n,0,B.a([A.bh.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.V(A.cu,m?A.aj:A.al,n,n,n,n),n,n,n,new C.ehQ(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.D(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.y9],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.aa(0,A.G,A.bh.j(0.35),A.eI,24)],x.V)
u=B.an(n,B.V(A.p1,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bzg,A.h,n,n,new B.o(t,n,B.H(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.en,B.D(B.u(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.I,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bme],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.an(n,B.hI(B.aJ(A.c4,D.enU,A.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gc6c(),n,n,n,n,n,n,!1,A.ae),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.am(A.V,n,A.a9,A.h,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.Yv,A.n),n,n,n,n,E.Vp,n,n,1/0),A.dW,o.atN(m,"What to transfer"),A.ab,B.B(B.a([B.D(o.aSD(A.p7,m,new C.ehR(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.D(o.aSD(D.bp4,m,new C.ehS(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d1,o.atN(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.aG:A.c
t=B.m(16)
s=B.H(m?A.bG:A.aJ,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.h,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.c1,n,n,n))}else A.d.v(v,new B.J(u,new C.ehT(o,m),B.T(u).k("J<1,r>")))
A.d.v(w,v)}w.push(A.ma)
w.push(o.atN(m,"Transfer options"))
w.push(A.ab)
w.push(B.B(B.a([B.D(o.amR(A.b4,k,!0,A.j0,m,o.r,o.gc0v(),"Scan on another device","Show QR"),1),A.av,B.D(o.aI4(A.ju,!0,A.iH,m,o.gchQ(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.T)
w.push(B.B(B.a([B.D(o.bsI(A.aS,k,A.hh,m,o.r,o.gc0s(),"Download .json","Backup file"),1),A.av,B.D(o.aI4(A.aZ,!0,Aq.x8,m,o.gcti(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bh.j(m?0.12:0.08)
u=B.m(16)
t=B.H(A.bh.j(0.28),A.r,1)
s=B.V(A.kY,A.bh.j(0.9),n,n,n,18)
r=o.gaJZ()
q=o.gb0p()
p=o.gb0p()===1?"":"s"
A.d.v(w,B.a([A.bs,B.p(n,B.B(B.a([s,A.av,B.D(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.aj:A.bB,n,n,n,n,n,n,n,n,12,n,n,A.a0,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.h,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.br(!0,B.u(B.a([new B.C(Ac.K4,i,n),B.D(B.cK(w,n,D.bh4,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,U.SG,A.h,A.dx,n,n,n,n,n,n,n,n,n,n))
return B.cg(n,l,new B.am(A.V,n,A.a9,A.q,j,n),n,!1,!1,n,n)},
acE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$acE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.hOy(s,t.d,t.e),$async$acE)
case 2:return B.h(null,v)}})
return B.i($async$acE,v)},
atN(d,e){var w=null,v=B.p(w,w,A.h,w,w,new B.o(A.bh,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.aa,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aSD(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aG:A.c
if(g)w=A.bh
else w=e?A.bG:A.aJ
w=B.H(w,A.r,g?2:1)
v=g?B.a([new B.aa(0,A.G,A.bh.j(0.2),A.cv,14)],x.V):s
u=A.bh.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.V(d,A.bh,s,s,s,22),A.h,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ch,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aD(!1,A.X,!0,s,B.aH(!1,r,!0,B.eq(new B.C(A.bA,B.u(B.a([t,A.T,u,A.by,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac)},
bCY(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aG:A.c,m=B.m(16)
if(p)w=A.bh
else w=e?A.bG:A.aJ
w=B.H(w,A.r,p?2:1)
v=B.p(q,D.bzp,A.h,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a1,A.a7,A.x,B.a([A.bh,A.bh.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.Z,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.D(B.u(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ej:A.rL
if(p)r=A.bh
else r=e?A.be:A.dt
return new B.C(A.cH,B.aD(!1,A.X,!0,q,B.aH(!1,o,!0,B.p(q,B.B(B.a([v,A.ba,t,B.V(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.h,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ehG(this,d),q,q,q,q,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q)},
amR(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aG:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aJ
w=B.H(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.V(g,d,s,s,s,22),A.h,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qd,s,s,s)],t)
if(i)u.push(B.an(s,B.p(s,D.ai2,A.h,s,s,D.aS0,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d5(B.aD(!1,A.X,!0,s,B.aH(!1,p,!0,B.eq(new B.C(E.V3,B.u(B.a([new B.am(A.V,s,A.a9,A.h,u,s),A.ab,v,A.by,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.h,A.K,0,s,s,s,s,s,A.ac),r)},
aI4(d,e,f,g,h,i,j){return this.amR(d,e,!1,f,g,!1,h,i,j)},
bsI(d,e,f,g,h,i,j,k){return this.amR(d,e,!1,f,g,h,i,j,k)}}
C.U0.prototype={
S(){return new C.bgF()}}
C.bgF.prototype={
Z(){this.a0()
this.abw()},
abw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$abw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fnj(null,A.d.gI(m),k,r.a.f):C.fnj(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kg(A.d.gI(n).w))C.fn4(A.d.gI(r.a.d),D.cOB)
n=r.a
m=n.c
n=C.hLI(n.d)
w=7
return B.b(C.fni(p,C.hLN(r.a.d),n,m,q),$async$abw)
case 7:o=e
if(r.c==null){w=1
break}r.n(new C.ehU(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.n(new C.ehV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abw,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.L(d).ax.a===A.H,h=i?A.dc:A.bL,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ehW())
v=B.aF(j,j,j,j,B.V(A.et,i?A.aj:A.al,j,j,j,18),j,j,j,new C.ehX(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.D(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.y9],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dP,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.u(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,j,t,j,D.Yv,A.n),j,j,j,j,E.Vp,j,j,1/0)
q=B.m(24)
s=B.H(A.b4.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a3J,A.L,j,j))
else if(k.d==null)r.push(D.dLP)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.aa(0,A.G,A.aB.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.eRO,A.ar,B.aJ(j,B.p(j,B.B(B.a([D.bAV,A.av,B.d(m,j,j,j,j,j,j,D.eFe,j,j,j)],u),A.m,j,A.e,A.R,0,j,j),A.h,j,j,new B.o(j,j,j,o,n,D.bEF,A.n),j,j,j,j,Z.ad6,j,j,j),A.z,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ehY(k,d),j,j,j,j,j,j,!1,A.ae),A.P,D.eVL,A.ay],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.H(A.bG,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pi(j,j,!1,l,j,!0,!0,j,!1,D.b9F),A.h,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ch,j,j,j))
A.d.v(r,p)}r.push(A.ay)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.i0,A.L,j,j))
return B.cg(j,h,B.br(!0,B.u(B.a([new B.C(Ac.K4,v,j),B.D(B.ch(B.u(B.a([t,A.aN,B.p(j,B.u(r,A.m,j,A.e,A.j,0,A.p),A.h,j,j,new B.o(j,j,s,q,j,D.bGp,A.n),j,j,j,j,A.rG,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.q,j,A.z,j,E.adp,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aBj.prototype={
S(){return new C.aBk(new B.ao(A.aq,$.at()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aBk.prototype={
Z(){var w=this
w.a0()
w.e.aJ(0,new C.ebo(w))
$.aS.x1$.push(new C.ebp(w))},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.e.p()
this.a2()},
aUR(){var w,v=this.c
v.toString
w=C.xE(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a7(v,!1).K(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eo,x.w).w,i=B.m(28),h=B.H(A.bh.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.aa(0,A.G,A.bh.j(0.28),A.tk,36),D.a71],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.u(B.a([B.p(k,D.bwz,A.h,k,k,new B.o(d,k,B.H(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ab,D.ePa,A.ar,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a0,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.h,k,k,D.aSp,k,k,k,k,A.wu,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge0()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aG:A.M
o=new B.b3(14,14)
if(q)n=A.bh
else n=r?A.bh.j(0.55):A.aI
m=new B.ax(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.aa(0,A.G,A.bh.j(0.28),A.J,12)],g):k
t.push(new B.bE(1,A.bn,B.dg(A.B,new B.w(p,k,D.eze,k,k,k,k,k,k,k,k,k),k,k,A.b9,new B.o(s,k,new B.c1(m,m,m,m),new B.bu(o,o,o,o),n,k,A.n),A.hG,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.GW)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bW(0,B.d5(B.aK(k,A.U,!0,k,!0,A.q,k,B.aL(),w,k,k,k,k,k,2,D.bDy,A.z,!0,k,!0,k,!1,v,A.af,k,k,B.a([new B.tD(B.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Ac(5,k),new C.bqM()],x.aS),k,k,A.aIM,k,5,k,1,k,k,!1,"\u2022",k,new C.ebk(l),k,new C.ebl(l),k,!1,k,k,!1,k,!0,k,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.lA,k,k,k,k),0),0,0,0)],a1)
d=C.xE(w.a.a.toUpperCase())==null?k:l.gc0w()
return B.as(new B.C(new B.M(24,24,24,24+j.f.d),B.aD(!1,A.X,!0,k,new B.cZ(A9.Ib,B.p(k,B.bv(e,B.u(B.a([a0,new B.C(D.bhz,B.u(B.a([new B.am(A.V,k,A.a9,A.q,g,k),A.T,D.eNE,A.bs,new B.a3(1/0,50,B.bH(D.f1N,d,B.bk(A.bh,A.bj,A.al,k,A.c,k,k,k,new B.b5(B.m(16),A.W),k,k,k)),k),A.ar,B.bG(!1,A.mW,k,k,!0,k,k,new C.ebm(a2),k,B.fo(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.R,0,A.p),A.ap),A.h,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.h,A.K,0,k,k,k,k,k,A.ac),k),k,k,k)}}
C.bqM.prototype={
nV(d,e){var w=e.a.toUpperCase()
return e.czf(B.h0(A.bp,w.length),w)}}
C.aow.prototype={
S(){return new C.aBn(B.ya(A.Jn,A.n2,A.t2))}}
C.aBn.prototype={
p(){this.d.p()
this.a2()},
aUQ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iC(w,d)},
a7M(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fvp(s),$async$a7M)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aUQ("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a7M,v)},
c0u(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.hLL(w[u])
if(t!=null){this.aUQ(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.uE,s,s,s,t.gbGZ(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eA(B.a([r,B.aF(s,s,s,s,B.V(q?A.rR:Ah.KY,s,s,s,s,s),s,s,s,new C.ei_(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.f2Y,s,s,s,1,s,!0)
r=B.y9(t.d,A.bN,t.gc0t())
w=B.m(28)
w=B.as(B.p(s,s,A.h,s,s,new B.o(s,s,B.H(A.bh,A.r,3),w,B.a([new B.aa(2,A.G,A.bh.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.cg(p,A.w,new B.am(A.V,s,A.aX,A.q,B.a([r,w,B.an(32,B.p(s,D.eSM,A.h,s,s,new B.o(v,s,B.H(A.bh.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.iF,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bqY.prototype={
B(d){var w=null,v=B.m(24),u=B.H(A.aI,A.r,1)
return B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([B.p(w,D.buM,A.h,w,w,D.aS9,w,56,w,w,w,w,w,56),A.aN,D.f2E,A.ar,new B.k1(this.c,new C.eSt(),w,w,x.cI),A.aN,new B.k1(this.d,new C.eSu(),w,w,x.cl),A.ab,D.f2B],x.p),A.m,w,A.e,A.R,0,A.p),A.h,w,A9.Ib,new B.o(A.aG,w,u,v,w,w,A.n),w,w,w,K.Vw,D.bib,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)}}
C.a5A.prototype={
S(){return new C.bgo(A.bu)},
gd6(){return this.c}}
C.bgo.prototype={
Z(){var w=this
w.a0()
if(w.a.d)return
w.XT()
w.d=B.dD(A.h_,new C.e1W(w))},
p(){var w=this.d
if(w!=null)w.a9(0)
this.a2()},
XT(){return this.cek()},
cek(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$XT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.n(new C.e1U(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bv(new B.O(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.c9c(p.c),$async$XT)
case 6:r=e
q.a=r==null?A.bu:r
case 4:if(t.c==null){w=1
break}t.n(new C.e1V(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$XT,v)},
bIP(d){var w,v,u=d.a,t=A.o.ak(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ak(u,6e7)%60
v=A.o.ak(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bF
w=s.e.a
v=A.o.ak(w,6e7)<30&&A.o.ak(w,36e8)<999?A.aH:A.bQ
w=v.j(0.14)
u=B.m(14)
t=B.H(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.V(A.E4,v,r,r,r,20),A.av,B.D(B.d("Marriage document session \xb7 "+s.bIP(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.h,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,D.beo,A.iE,r,r,1/0)}}
C.a6r.prototype={
mG(){var w,v,u,t=this
t.wi()
w=t.cx
v=t.c
w.bkt(t.cy,t,v)
u=x.Y
v.a.m(0,"/A",B.po(B.E(["/S",D.dOt,"/URI",new B.qS(B.Ux(w.as),A.tp,!0)],x.N,u),u))}}
C.a6s.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b_l.prototype={
brP(d,e,f,g,h,i,j,k,l,m){var w=B.eN([D.dMM],x.di)
this.w!==$&&B.aO()
this.w=w},
gcCp(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jA(w,new C.cbp(),B.a2(w).k("jA<ck.E,I>")).fs(0,new C.cbq())},
az2(d,e,f){var w,v,u,t=this,s=f.a
s.m(0,"/Subtype",new B.fZ(t.a))
w=t.b
v=w.a
u=w.b
s.m(0,"/Rect",B.rN(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.m(0,"/P",new B.iZ(d.a,d.b))
s.m(0,"/Border",B.rN(D.bIj))
w=t.w
w===$&&B.c()
if(w.a!==0)s.m(0,"/F",new B.fP(t.gcCp()))
w=t.z
if(w.a!==0)s.m(0,"/AP",B.po(w,x.Y))}}
C.cbr.prototype={}
C.a0N.prototype={}
C.afH.prototype={}
C.aNV.prototype={
fN(d){var w,v,u,t,s,r,q=this,p=null
q.kK(d)
q.Ko(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bar(w)
u=x.N
t=x.Y
s=new C.cbr(q.d.a,"/Link",w,p,p,p,p,p,B.S(u,t))
s.brP(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.po(B.E(["/Type",D.dOr],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a6r(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.G(0,r)
v.dx.push(r)}}
C.atV.prototype={}
C.aPp.prototype={
fN(d){var w,v,u,t,s=this
s.kK(d)
w=s.b
if(w!=null){v=B.de()
u=s.a
v.dY(u.a,u.b,0,1)
u=d.b
u.hR()
t=s.a
t.toString
u.Jz(t)
u.QH(0)
u.od(0,v)
w.fN(d)
u.mJ(0)}}}
var z=a.updateTypes(["au<~>()","~(ln)","R(hR)","~()","R(ex)","R(nS)","R(ln)","~(hR)","R(ex,ex)","If(X)","R(nh)","R(kV)","au<R>()","I(I,hR)","a0<n,@>(hR)","al<yt>()","n(nh)","R(a5R)","n(ln)","n(v9)","R(Dk)","I(hR,hR)","n(ex)","r(ex)","cE(ex)","r(hl)","~(hl)","ex(u2,Q,Q,Q,Q,I{fx:n,key:n,rotation:Q})","ex(n,Q,I)","I(nS,nS)","R(yt)","R(n,al<yt>)","a0<n,@>(nS)","nh()","Ww(X)","ex(n,Q,Q,Q,Q,Q{align:pu,anim:hl,bullets:R,color:I?,delay:I,fx:n,key:n,style:G6,weight:pN})","ZL(X)","ex(n,Q,Q,Q,Q{anim:hl,delay:I,fx:n,key:n})","au<~>(nS)","R(m0)","Wu(X)","Zj(X)","Zi(X)","NC(X)","XG(X)","ex(u2,Q,Q,Q,Q,I,n,n{anim:hl,delay:I,rotation:Q,stroke:I,strokeWidth:Q})","ex(n,Q,Q,Q,Q,Q,n,n,I)","ex(Q,Q,n,I{size:Q})","r(qG,Q,Q)","kV()","nS(a0<@,@>)","~(tT)","Dk()","f4(ex)","r(iM)","Xe(X)","~(Db)","Xz(X)","I(ex,ex)","ex(ex)","a0<n,@>(ex)","ex(a0<@,@>)","ln(ln)","a0<n,@>(ln)","ln(a0<@,@>)","R(js)","js()","n(hR)","~(al<nS>)","O(al<hR>)","O(hR)","al<hR>(n?)","aam(X,I)","~(R(ex,ex))","ab_(X)","acD(X,I)","x(ln,R)","TN(X)","ab2(X)","TQ(X)","~(m4)","hR(hR)","Q(ex)","YO(X)","Yq(X)","hR()","al<DG>()","au<~>(al<hR>)","r(bq<I,hR>)","C(js)","C(Dk)","au<~>(hl,~())","r(al<hl>,hl?,~(hl),x)","R(lJ)","al<jb<m4>>(X)","jb<m4>(m4)","hR(a0<@,@>)","U_(X)","ex(n,Q,Q,Q,Q,Q,I{align:pu,style:G6,weight:pN})","U0(X)","r(hR)","~(lE)","H7(X,ln,r?)","I(a6s)","au<al<a0<n,@>>?>()","n(n)","au<yr>({paper:n?,photo:dz?,request:n,template!kY})","au<a5J>({doc!yr,history:al<+(n,n)>,instruction!n,photo:dz?,template!kY})","aaX(X)"])
C.cyq.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cyr.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:86}
C.cys.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gah8(s):16;--w.c}w.b=A.o.dP(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.lV(v,t)
w.b=v-A.o.dP(q,t)
w.a=t
return q},
$S:86}
C.cyt.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.ah(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bJT.prototype={
$1(d){return J.eO(A.dz.gaL(d),d.byteOffset,d.byteLength)},
$S:1663}
C.far.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iw(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iw(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iw(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iw(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1664}
C.bTZ.prototype={
$1(d){return B.Z(d,x.N,x.z)},
$S:26}
C.bU_.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aI(v,J.k(w==null?"":w))},
$S:39}
C.bU1.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fpJ.prototype={
$1(d){return new C.ZL(this.a,this.b,C.hMD(),null)},
$S:z+36}
C.eQW.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.eR_.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.eR0.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eR1.prototype={
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
C.eQX.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.eQR.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hj,w,w,w)
return B.eo(B.a([B.bG(!1,D.eRi,w,w,!0,w,w,new C.eQP(d),w,w),B.bG(!1,D.eQr,w,w,!0,w,w,new C.eQQ(d),w,w)],x.p),w,w,D.U5,v,w,w,w,w,D.f3e,w)},
$S:20}
C.eQP.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eQQ.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.eQS.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eQT.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eR5.prototype={
$0(){var w=this.a
return w.n(new C.eR4(w,this.b))},
$S:0}
C.eR4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eQV.prototype={
$0(){var w=this.a
return w.n(new C.eQU(w,this.b,this.c))},
$S:0}
C.eQU.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.G(0,v)},
$S:0}
C.eR2.prototype={
$0(){return this.a.ZV(this.b)},
$S:0}
C.eR3.prototype={
$0(){return this.a.Np(0,this.b)},
$S:0}
C.eR8.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eR9.prototype={
$0(){var w=this.a
return w.n(new C.eR7(w,this.b))},
$S:0}
C.eR7.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.J(w,new C.eR6(),B.T(w).k("J<1,n>")))}},
$S:0}
C.eR6.prototype={
$1(d){return d.a},
$S:z+67}
C.eY6.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.Z(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.fOI(w.b(t.h(0,"doc"))?B.Z(w.a(t.h(0,"doc")),v,u):A.cs)
t=t.h(0,"updatedAt")
u=B.bg(J.k(t==null?"":t))
return new C.nS(s,v,u==null?new B.O(Date.now(),0,!1):u)},
$S:z+50}
C.eY7.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fcE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbn())q=n===o.gbn()&&p.b>o.gcA()}if(q)v.m(0,s,t)}},
$S:z+68}
C.fcC.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fcD.prototype={
$2(d,e){return e.c.aI(0,d.c)},
$S:z+29}
C.fpg.prototype={
$1(d){return d.ac()},
$S:z+32}
C.fa7.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fq4.prototype={
$1(d){return new C.Ww(this.a,null)},
$S:z+34}
C.czM.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.czO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.czR.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czS.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.czQ())},
$S:11}
C.czQ.prototype={
$0(){},
$S:0}
C.czT.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a_J(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cB(s)
p=q.bg(s,new C.czP(r))
if(p<0)q.ck(s,0,r)
else q.m(s,p,r)
w=3
return B.b(C.af1(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.czP.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czU.prototype={
$1(d){},
$S:29}
C.czN.prototype={
$1(d){return new C.Wu(this.b,this.a.gcnD(),null)},
$S:z+40}
C.czV.prototype={
$1(d){return D.f98},
$S:z+43}
C.czI.prototype={
$1(d){var w=null,v=B.m(24),u=B.H(D.TR,A.r,1),t=x.p
return B.as(B.aD(!1,A.X,!0,w,B.p(w,B.u(B.a([new B.C(D.bhY,B.u(B.a([B.p(w,D.btP,A.h,w,w,new B.o(A.aH.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aN,D.ePy,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.eEi,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dW,new B.C(A.oZ,B.B(B.a([B.D(B.dU(D.eVN,new C.czG(d),B.d9(w,w,w,w,w,w,w,w,w,E.mq,w,w,A.ca,w,new B.b5(B.m(14),A.W),D.aPw,w,w,w,w)),1),A.av,B.D(B.bH(D.f0c,new C.czH(d),B.bk(A.bS,w,w,w,w,w,A.ca,w,new B.b5(B.m(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.R,0,A.p),A.h,w,A.vD,new B.o(D.a8r,w,u,v,D.cED,w,A.n),w,w,w,K.Vw,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac),w,w,w)},
$S:1665}
C.czG.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.czH.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.czJ.prototype={
$0(){return J.n_(this.a.d,new C.czF(this.b))},
$S:0}
C.czF.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.czE.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.H(D.TR,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.byD,A.h,t,t,new B.o(t,t,t,B.m(14),t,D.ajh,A.n),t,44,t,t,t,t,t,44),A.ba,B.D(B.u(B.a([B.d(this.a.b.a,t,1,A.Z,t,t,t,D.aKm,t,t,t),A.by,D.f08],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.ay],q)
for(w=0;w<2;++w){v={}
u=D.cXQ[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.auM(u[1],u[2],u[3],new C.czC(v,d),!1,t))}q.push(A.ar)
q.push(D.bc6)
q.push(A.ar)
q.push(new C.auM(A.e4,"Delete book","Remove it from this device",new C.czD(d),!0,t))
return B.br(!0,B.p(t,B.u(q,A.F,t,A.e,A.R,0,A.p),A.h,t,t,new B.o(D.a8r,t,r,s,t,t,A.n),t,t,t,A.rA,E.V9,t,t,t),!0,!1,A.ag,!0,!0)},
$S:34}
C.czC.prototype={
$0(){var w=this.a.a
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.czD.prototype={
$0(){B.a7(this.a,!1).K("delete")
return null},
$S:0}
C.czL.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.aa(0,A.G,A.w.j(0.45),A.aAN,12)],x.V)
return B.dO(B.es(A.B,e,B.p(w,B.bv(B.m(4),new B.a3(62,95.81818181818181,B.eX(A.B,F.aly(d),A.h,A.dn),w),A.ap),A.h,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.czK.prototype={
$0(){return this.a.bX1()},
$S:0}
C.czB.prototype={
$0(){return this.a.aTK(0,this.b)},
$S:0}
C.czA.prototype={
$0(){return this.a.C1(this.b)},
$S:0}
C.czz.prototype={
$0(){return this.a.C1(this.b)},
$S:0}
C.czW.prototype={
$2(d,e){var w=this.a
return w.bw7(J.q(w.d,e))},
$S:42}
C.cz2.prototype={
$0(){var w=this.a
if(w.c!=null)w.zK()},
$S:0}
C.cz1.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.aWg("Page "+(v.length+1),"",""))},
$S:0}
C.cz4.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.czc.prototype={
$0(){},
$S:0}
C.czd.prototype={
$1(d){var w=this.a,v=w.a,u=$.at()
v.R$=u
v.O$=0
w=w.b
w.R$=u
w.O$=0
return null},
$S:8}
C.cz5.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cM.gcr().aF(this.c)},
$S:0}
C.cz3.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cz7.prototype={
$0(){return this.a.OF(this.b)},
$S:0}
C.cz8.prototype={
$0(){return this.a.OF(this.b)},
$S:0}
C.cz9.prototype={
$0(){var w=this.a
w.n(new C.cz6(this.b))
w.CP()},
$S:0}
C.cz6.prototype={
$0(){return this.a.c=""},
$S:0}
C.czb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.n(new C.cza(w,d))
w.CP()},
$S:z+51}
C.cza.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.czi.prototype={
$2(d,e){if(d)this.a.zK()},
$S:118}
C.cze.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.zK(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.F(x.q).f.P(D.est)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.czf.prototype={
$0(){return this.a.aSK(this.b,-1)},
$S:0}
C.czg.prototype={
$0(){return this.a.aSK(this.b,1)},
$S:0}
C.czh.prototype={
$0(){return this.a.bYf(0,this.b)},
$S:0}
C.fha.prototype={
$1(d){return C.fYw()},
$S:41}
C.fhb.prototype={
$1(d){return null},
$S:29}
C.f1k.prototype={
$1(d){return null},
$S:29}
C.fia.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:285}
C.fi9.prototype={
$2(d,e){return A.o.aI(e.length,d.length)},
$S:236}
C.fig.prototype={
$1(d){var w=this.a
return C.fHl(d)===w||C.h1X(d)===w},
$S:z+4}
C.f0o.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.c3x.prototype={
$1(d){return d.length!==0},
$S:3}
C.fh8.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fh9.prototype={
$1(d){return C.fjT(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fc0.prototype={
$1(d){var w=null
return B.br(!0,new B.C(E.wt,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eWm,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dk(D.EK,D.eR_,new C.fbZ(d),B.bk(A.bQ,w,w,w,A.w,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.uD,D.eXw,new C.fc_(d),B.d9(w,w,w,w,w,w,w,w,w,A.aj,w,w,A.ca,w,w,Q.vA,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:34}
C.fbZ.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fc_.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fc1.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,D.eNw,w,w,!0,w,w,new C.fbX(d),w,w),B.bH(D.f2h,new C.fbY(d),w)],x.p),w,w,w,D.f43,w,w,w,w,D.eNq,w)},
$S:20}
C.fbX.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.fbY.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dXZ.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.dXX.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dXY.prototype={
$0(){return this.a.f=!0},
$S:0}
C.dY_.prototype={
$0(){return this.a.r=!1},
$S:0}
C.dY0.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fif.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:83}
C.fib.prototype={
$2$h$w(d,e){var w=null
return new B.bF(A.a1,w,w,B.G7(A.B,B.p(w,w,A.h,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1666}
C.fid.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.B,B.d(d,w,w,w,w,w,w,D.eFq,w,w,w),A.h,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:181}
C.fie.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dO(B.p(w,w,A.h,w,w,new B.o(w,w,B.H(A.hE,A.r,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b5,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1667}
C.fic.prototype={
$2$female$size(d,e){var w=null,v=d?D.a9Z:this.a,u=B.H(A.hE,A.r,1),t=e*0.32,s=B.an(w,B.p(w,w,A.h,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.am(A.B,w,A.a9,A.q,B.a([s,B.an(e*0.06,B.p(w,w,A.h,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.h,w,w,new B.o(D.a8E,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1668}
C.ftu.prototype={
$1(d){return new C.aaX(this.a,this.b,null)},
$S:z+108}
C.dPn.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.b9Y:A.IZ,q=B.H(D.iS.j(0.25),A.r,1),p=B.as(B.p(t,t,A.h,t,t,new B.o(A.bQ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.ai1,A.h,t,t,new B.o(t,t,B.H(A.c.j(0.5),A.r,1.2),o,B.a([new B.aa(0,A.G,D.iS.j(0.35),A.e6,10)],x.V),D.bGZ,A.n),t,t,t,t,A.JG,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.u(B.a([new B.C(H.Vl,B.u(B.a([p,A.ay,B.B(B.a([o,A.ba,B.D(B.u(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.iS,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.by,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.eEK,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.D(B.ig(!0,t,e,A.z,D.aHP,new C.dPm(w,this.c),v,D.ad1,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.h,t,t,new B.o(r,t,q,A.mg,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dPm.prototype={
$2(d,e){var w=this.a.d[e]
return new C.aam(w,new C.dPl(this.b,w),null)},
$S:z+72}
C.dPl.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fc4.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fc5.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wt,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eZt,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dk(D.EK,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fc2(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.R2,new C.fc3(d),B.d9(w,w,w,w,w,w,w,w,w,A.aj,w,w,A.ca,w,w,Q.vA,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:34}
C.fc2.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fc3.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fc8.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fc9.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wt,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eOr,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dk(D.EK,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fc6(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.R2,new C.fc7(d),B.d9(w,w,w,w,w,w,w,w,w,A.aj,w,w,A.ca,w,w,Q.vA,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:34}
C.fc6.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fc7.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fcc.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fcd.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wt,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eUi,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dk(D.EK,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fca(d),B.bk(D.iS,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.R2,new C.fcb(d),B.d9(w,w,w,w,w,w,w,w,w,A.aj,w,w,A.ca,w,w,Q.vA,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:34}
C.fca.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fcb.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.fuJ.prototype={
$1(d){return D.fcm},
$S:z+74}
C.e1Z.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.b32:A.IZ,s=B.H(A.at.j(0.25),A.r,1),r=B.as(B.p(v,v,A.h,v,v,new B.o(A.at.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bAR,A.h,v,v,new B.o(v,v,B.H(A.c.j(0.5),A.r,1.2),q,B.a([new B.aa(0,A.G,A.bQ.j(0.35),A.e6,10)],x.V),D.ajl,A.n),v,v,v,v,A.JG,v,v,v)
w=x.p
return B.p(v,B.u(B.a([new B.C(H.Vl,B.u(B.a([r,A.ay,B.B(B.a([q,A.ba,B.D(B.u(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Y.IW,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.by,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.eCo,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.D(B.ig(!0,v,e,A.z,D.aHP,new C.e1Y(this.b),19,D.ad1,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.mg,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.e1Y.prototype={
$2(d,e){var w=D.NZ[e]
return new C.acD(w,new C.e1X(this.a,w),null)},
$S:z+75}
C.e1X.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.fjX.prototype={
$0(){return B.fGo(C.hAt(this.a))},
$S:323}
C.fjW.prototype={
$0(){var w=C.fHD(this.a)
return"data:image/png;base64,"+A.cM.gcr().aF(w)},
$S:22}
C.eZC.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.j_(d,e),new B.j_(w,e+v),new B.j_(d+f*14,e),new B.j_(w,e-v)],x.J)
B.a_G(this.a,C.fr(4291404327),v)},
$S:663}
C.fuU.prototype={
$1(d){return new C.TN(this.a,null)},
$S:z+77}
C.e5g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5f())},
$S:28}
C.e5f.prototype={
$0(){},
$S:0}
C.e5h.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e5e(w,d))},
$S:1670}
C.e5e.prototype={
$0(){return this.a.x=J.f1(A.dz.gaL(this.b))},
$S:0}
C.e5i.prototype={
$1(d){},
$S:29}
C.e4T.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e4P.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e5_.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.e50.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.dWL)},
$S:0}
C.e51.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e4V.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.A("you",this.b))
w.f.bG(0,A.c_)},
$S:0}
C.e4W.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.A("ai",v.a))},
$S:0}
C.e4X.prototype={
$0(){return this.a.ax.push(new B.A("ai",B.t(this.b)))},
$S:0}
C.e4Y.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e4Z.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gcV(v).Q
v.toString
w.lD(v,A.dU,A.ie)}},
$S:8}
C.e4U.prototype={
$0(){var w=this.a,v=w.z,u=C.fkA(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cyn(C.fkA(t))},
$S:0}
C.e4R.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.e4S.prototype={
$0(){return this.a.as=!1},
$S:0}
C.e57.prototype={
$0(){return B.a7(this.a,!1).oZ()},
$S:0}
C.e58.prototype={
$0(){var w=this.a
return w.n(new C.e56(w))},
$S:0}
C.e56.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.e59.prototype={
$0(){var w=this.a
return w.n(new C.e55(w,this.b))},
$S:0}
C.e55.prototype={
$0(){var w=this.b.b
this.a.e.saR(0,w)
return w},
$S:0}
C.e5a.prototype={
$1(d){var w=this.a
return w.n(new C.e54(w))},
$S:9}
C.e54.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.e5b.prototype={
$1(d){var w=this.a
return w.n(new C.e53(w))},
$S:9}
C.e53.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.e5c.prototype={
$0(){var w=this.a
return w.n(new C.e52(w,this.b))},
$S:0}
C.e52.prototype={
$0(){var w=this.b
this.a.f.saR(0,w)
return w},
$S:0}
C.e5d.prototype={
$1(d){return this.a.XF()},
$S:2}
C.e4Q.prototype={
$0(){return this.a.c_P(this.b)},
$S:0}
C.c7c.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cI(w.h(0,d))):null},
$S:379}
C.c7a.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.c7b.prototype={
$1(d){return d.length!==0},
$S:3}
C.fjy.prototype={
bfi(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bJS(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cv6($.ts().jR(0,"assets/news_fonts/"+s))}w=2
return B.b(r.ma(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bfi(d,e)},
$S:1671}
C.fhQ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fhS.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dA(this.b,w,w+d)," ")
w=B.aI(w," \n\n ","\n\n")
w=B.aI(w," \n\n","\n\n")
return B.aI(w,"\n\n ","\n\n")},
$S:83}
C.fhR.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.j1(t,t,t,t,B.dr(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.pw,A.cn,t,A.eM,A.cm)
v=this.a
w.EM(v.b)
u=w.b.a.c
return u.gbe(u)<=v.a},
$S:60}
C.eZd.prototype={
$1(d){var w=A.a.fl(d,B.ad("\\s+",!0,!1,!1,!1))
return new B.a5(w,new C.eZe(),B.T(w).k("a5<1>")).gH(0)},
$S:245}
C.eZe.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZb.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.eZc.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:219}
C.c7d.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaww()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aX(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,w-(f===t?r:0)))
o=C.fHk(i,new B.G(!0,h,a6,k,a6,a6,q,A.cF,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fEn(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gc7K(),"\n\n")
d=B.j1(a6,a6,a6,a6,B.dr(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afD(k,q,1.28),j),A.pw,A.cn,a6,A.eM,A.cm)
d.EM(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbe(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.aX(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.A(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fHk(i,new B.G(!0,h,a6,k,a6,a6,q,A.cF,A.bg,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fEn(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afD(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.M(v,0,v,0),B.p(a6,a6,A.h,B.aX(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bE(1,A.bn,new B.w(o.length>a4?o[a4]:"",a6,a3,a6,A.pw,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.awv(s,j))
i.push(new B.a3(s,a6,B.u(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:392}
C.c7e.prototype={
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
n=o.gaww()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.aX(j.w)
d=B.a([new B.A(u,q),new B.A(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.A(r,p-(a0===s?m:0)))
l=C.fHk(f,new B.G(!0,e,a5,i,a5,a5,h,A.cF,A.bg,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fEn(g.length===0?B.a([a6],n):g,l))break}a1=o.afD(i,h,1.28)
a2=new C.c7f(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.GV,new B.a3(v,a5,a4.f,a5),A.GV,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bkb,B.p(a5,a5,A.h,B.aX(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bE(1,A.bn,new B.w(l[2+a3],a5,a1,a5,A.pw,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.awv(r,g))
f.push(new B.a3(r,a5,B.u(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.u(B.a([new B.a3(a5,q,v,a5),A.ab,B.D(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:149}
C.c7f.prototype={
$2(d,e){var w=null
return new B.a3(e,w,B.d(d,w,w,w,w,w,w,this.a,A.pw,w,w),w)},
$S:1672}
C.fuX.prototype={
$1(d){return new C.TQ(this.a,this.b,null)},
$S:z+79}
C.e6r.prototype={
$1(d){return d.lS()},
$S:1673}
C.e6s.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.e6q(w,d))},
$S:1674}
C.e6q.prototype={
$0(){var w=this.b
return this.a.d=w.gfd(w)},
$S:0}
C.e6e.prototype={
$0(){return this.a.y=!0},
$S:0}
C.e6f.prototype={
$0(){return this.a.y=!1},
$S:0}
C.e6l.prototype={
$0(){return B.a7(this.a,!1).eD()},
$S:0}
C.e6m.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.H(A.bz,A.r,2.5)
return B.aJ(w,B.p(w,B.b2(w,w,w,new C.b8e(u,v.gatG(),w),A.fk),A.h,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e6j(v),new C.e6k(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.ae)},
$S:33}
C.e6j.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:334}
C.e6k.prototype={
$1(d){var w=this.a
w.n(new C.e6g(w,d,this.b,this.c))},
$S:242}
C.e6g.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gatG()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.e6n.prototype={
$1(d){var w=this.a
return w.n(new C.e6i(w,this.b))},
$S:9}
C.e6i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6o.prototype={
$1(d){var w=this.a
return w.n(new C.e6h(w,d))},
$S:6}
C.e6h.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6p.prototype={
$0(){return B.a7(this.b,!1).K(this.a.a.c)},
$S:0}
C.fvc.prototype={
$1(d){return D.ff9},
$S:z+83}
C.eD0.prototype={
$1(d){return this.a.Wr()},
$S:8}
C.eBT.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cM.gcr().aF(v)},
$S:0}
C.eCg.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eCq.prototype={
$1(d){return d>=this.a.length},
$S:60}
C.eBC.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eBD.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eBA.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eBB.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eC9.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eCa(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jy(B.qV(p>0.2?C.fzd(q,B.a2Y(p,p,A.x)):q),A.q,u)],x.p)
w=s.bc
if(w>0.02){v=B.a2Y(12,12,A.x)
p.push(B.jy(B.d5(B.qV(C.fzd(r.$1(!0),v)),w*0.75),A.q,u))}r=s.aZ
if(r!=null&&s.aW>0)p.push(B.ec(u,B.aX(r).j(s.aW),!0))
r=s.b6
if(r!=null&&s.bE>0){r=B.aX(r).j(s.bE)
w=s.b6
w.toString
p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(D.aNQ,1.15,A.x,u,0,B.a([r,B.aX(w).j(0)],x.O),u,u),A.n),A.b7))}r=s.az
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(D.aNA,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.b7))
r=s.aK
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b3,A.bb,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aK)],x.O),D.cDn,u),A.n),A.b7))
if(s.aB>0){r=s.k1
p.push(B.an(u,B.bQ(u,new B.o(u,u,u,u,u,new B.a8(A.b3,A.bb,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.cNd,u),A.n),A.b7),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.ec(u,A.w.j(r),!0))
r=s.b1
if(r>0)p.push(B.bQ(u,new B.o(u,u,u,u,u,new B.bS(A.B,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.cKB,u),A.n),A.b7))
s=s.aq
if(s>0)p.push(B.b2(u,u,u,new C.bbL(s,u),A.as))
return new B.am(A.V,u,A.aX,A.q,p,u)},
$S:61}
C.eCa.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fC(r.b,A.B,q,q,A.ci,A.bN,!0,q,!1,q,q),o=r.a,n=o.aSm(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bd
v=o.aN
u=v-1
t=o.bO
s=o.cQ?-1:1
return B.dO(B.e5(A.B,B.es(A.B,l,B.fl(A.B,new B.FE(new B.zZ(q,q,n,A.yV),p,q),q,B.uY(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:482}
C.eCm.prototype={
$0(){return this.a.n(new C.eCl(this.b,this.c))},
$S:0}
C.eCl.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCn.prototype={
$1(d){return this.a.n(new C.eCk(this.b,d))},
$S:6}
C.eCk.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eCp.prototype={
$0(){return this.a.n(new C.eCo(this.b,this.c))},
$S:0}
C.eCo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eBs.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eBt.prototype={
$1(d){var w=this.a
return w.n(w.gcp0())},
$S:2}
C.eBu.prototype={
$1(d){return this.a.n(new C.eBr())},
$S:2}
C.eBr.prototype={
$0(){},
$S:0}
C.eBv.prototype={
$0(){var w=this.a
return w.n(new C.eBq(w,this.b))},
$S:0}
C.eBq.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eBx.prototype={
$2(d,e){return A.av},
$S:35}
C.eBw.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.aX(v.e),B.aX(v.f)],x.O),q=t?A.c:A.bG
q=B.H(q,A.r,t?2.5:1)
r=B.dg(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.aX(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b9,new B.o(w,w,q,s,w,new B.a8(A.b3,A.bb,A.x,r,w,w),A.n),A.hG,w,94,w,w,w,w,70)
return B.aJ(w,new B.a3(70,w,B.u(B.a([r,A.fW,B.d(v.b,w,1,A.Z,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eBp(u,v),w,w,w,w,w,w,!1,A.ae)},
$S:76}
C.eBp.prototype={
$0(){var w=this.a
return w.n(new C.eBm(w,this.b))},
$S:0}
C.eBm.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eBy.prototype={
$1(d){var w=this.a
return w.n(new C.eBo(w,d))},
$S:9}
C.eBo.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eBz.prototype={
$1(d){var w=this.a
return w.n(new C.eBn(w,d))},
$S:9}
C.eBn.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eCQ.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:60}
C.eCX.prototype={
$1(d){var w=this.a
return w.n(new C.eCY(w,d))},
$S:27}
C.eCY.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ef(v,v.r,B.a2(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eCZ.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eCR.prototype={
$0(){var w=this.a
return w.n(new C.eCP(w,this.b))},
$S:0}
C.eCP.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.G(0,v)},
$S:0}
C.eCS.prototype={
$0(){var w=this.a
return w.n(new C.eCO(w,this.b))},
$S:0}
C.eCO.prototype={
$0(){var w,v=this.b.length,u=J.dZ(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eCT.prototype={
$0(){var w=this,v=w.a
return v.n(new C.eCN(v,w.b,w.c,w.d))},
$S:0}
C.eCN.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eCU.prototype={
$0(){var w=this.a,v=w.dx
return w.n(v.gqM(v))},
$S:0}
C.eCV.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
return w.n(new C.eCM(w))},
$S:0}
C.eCM.prototype={
$0(){var w=this.a.db
return A.d.hi(w,0,w.length,0)},
$S:0}
C.eCz.prototype={
$1(d){return d.a===this.a.dy},
$S:224}
C.eCA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ar9[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.b3(9,9)
m=B.a([B.aX(v.w.e),B.aX(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.atK(new B.nH(new B.bu(n,n,n,n),A.ap,new B.kz(new B.o(j,j,j,j,j,new B.a8(A.a1,A.a7,A.x,m,j,j),A.n),A.b7,new C.aWB(l,B.aX(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eCy(r,v),2,i))}return B.cb(A.bH,h,A.bw,7,7)},
$S:168}
C.eCy.prototype={
$0(){var w=this.b
return w.n(new C.eCt(this.a,w))},
$S:0}
C.eCt.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eCB.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:214}
C.eCE.prototype={
$0(){var w=this.a
return w.n(new C.eCx(w))},
$S:0}
C.eCx.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eCF.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eCG.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eCH.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eCI.prototype={
$0(){var w=this.a
return w.n(new C.eCw(w))},
$S:0}
C.eCw.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a
return w.n(new C.eCv(w))},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eCK.prototype={
$0(){var w=this.b
return w.n(new C.eCu(this.a,w))},
$S:0}
C.eCu.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eCL.prototype={
$1(d){return this.a.fx=d},
$S:214}
C.eCC.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eCD.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eCd.prototype={
$0(){var w=this.a
return w.n(new C.eCc(w))},
$S:0}
C.eCc.prototype={
$0(){var w=this.a
w.p4=null
w.aYV()},
$S:0}
C.eCe.prototype={
$0(){var w=this.a
return w.n(new C.eCb(w,this.b))},
$S:0}
C.eCb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eCf.prototype={
$0(){var w=this.a
return w.n(w.gcfW())},
$S:0}
C.eC5.prototype={
$0(){var w=this.a
return w.n(new C.eC4(w))},
$S:0}
C.eC4.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eC6.prototype={
$0(){var w=this.a
return w.n(new C.eC3(w))},
$S:0}
C.eC3.prototype={
$0(){var w=this.a
w.aB=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eC7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.cKX[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.b3(9,9)
m.push(v.atK(new B.nH(new B.bu(p,p,p,p),A.ap,new B.a3(1/0,1/0,new B.FE(new B.zZ(o,o,v.aSm(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.yV),B.fC(u,A.B,140,o,A.ci,A.bN,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eC2(v,s),3,n))}return B.cb(A.bH,m,A.bw,10,8)},
$S:168}
C.eC2.prototype={
$0(){var w=this.a
return w.n(new C.eC1(w,this.b))},
$S:0}
C.eC1.prototype={
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
C.eBK.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eBL.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eBM.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eBN.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eBO.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eBP.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eBQ.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eBR.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eBS.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eB5.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eB6.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eB7.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eB8.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eB9.prototype={
$0(){var w=this.a
return w.n(new C.eB4(w))},
$S:0}
C.eB4.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eBa.prototype={
$1(d){return this.a.aZ=d},
$S:214}
C.eBb.prototype={
$1(d){return this.a.aW=d},
$S:6}
C.eBE.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eBF.prototype={
$1(d){return this.a.bc=d},
$S:6}
C.eBG.prototype={
$1(d){return this.a.aq=d},
$S:6}
C.eBH.prototype={
$1(d){return this.a.b6=d},
$S:214}
C.eBI.prototype={
$1(d){return this.a.bE=d},
$S:6}
C.eBf.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eBg.prototype={
$1(d){return this.a.bd=d},
$S:6}
C.eBh.prototype={
$1(d){return this.a.bO=d},
$S:6}
C.eBi.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eBj.prototype={
$0(){var w=this.a
return w.n(new C.eBe(w))},
$S:0}
C.eBe.prototype={
$0(){var w=this.a
return w.c4=A.k.J(w.c4+90+180,360)-180},
$S:0}
C.eBk.prototype={
$0(){var w=this.a
return w.n(new C.eBd(w))},
$S:0}
C.eBd.prototype={
$0(){var w=this.a
return w.cQ=!w.cQ},
$S:0}
C.eBl.prototype={
$0(){var w=this.a
return w.n(new C.eBc(w))},
$S:0}
C.eBc.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.eC8.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hPa(v,w.p4)},
$S:0}
C.eC0.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bae:B.fC(v,A.B,w,w,A.ci,A.bN,!1,w,!1,w,w)
return C.fhY(d.length===0?"rounded":d,u,e)},
$S:129}
C.eBX.prototype={
$0(){var w=this.a
return w.n(new C.eBW(w))},
$S:0}
C.eBW.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eBY.prototype={
$0(){var w=this.b
return w.n(new C.eBV(this.a,w))},
$S:0}
C.eBV.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eBZ.prototype={
$0(){var w=this.b
return w.n(new C.eBU(this.a,w))},
$S:0}
C.eBU.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eC_.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eCj.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.aa(-4,A.G,A.b0.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.c9E(),n.r))
l.push(new C.H7(n.cma(),!1,!1,t))
o=B.bW(0,B.bv(o,new B.en(new B.am(A.V,t,A.aX,A.q,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.am(A.V,t,A.a9,A.q,B.a([o,B.an(t,B.aJ(A.c4,B.bQ(t,new B.o(t,t,B.H(A.c.j(0.3),A.r,1),u,t,t,A.n),A.b7),A.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eCi(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.ae),v,t,l*s,t,w*r,v)],m),t),A.h,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eCi.prototype={
$1(d){var w=this.a
return w.n(new C.eCh(w,d,this.b,this.c))},
$S:18}
C.eCh.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eCs.prototype={
$0(){var w=this.a
return w.n(new C.eCr(w,this.b))},
$S:0}
C.eCr.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eBJ.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).oZ()},
$S:0}
C.eD_.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a3(Math.min(s*0.4,460),t,B.u(B.a([w.aUI(),B.D(B.as(w.aXy(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.D(B.u(B.a([B.D(w.aLQ(),1),w.aI5()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.u(B.a([s.aUI(),new B.C(A.ht,B.as(s.aXy(u),t,t,t),t),B.D(s.aLQ(),1),s.aI5()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:640}
C.ffd.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ei(k,!1,j,A.az,"",4280640491,i,l,m,"",h,C.bwr(),null,"","",0,!1,"",0,D.b8,4280172719,2,d,0,0,"",D.cb,D.cJ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bg,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bg,A.O)},
$S:z+98}
C.ffc.prototype={
$3(d,e,f){var w=this,v=C.bwr(),u=w.b?A.I:A.cp,t=w.c?A.cx:A.bg
return C.ei(w.d,!1,f,A.az,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.b8,4280172719,2,d,0,w.f,w.e,D.cb,D.cJ,0.82,0.09,w.a)},
$S:z+28}
C.c8z.prototype={
$1(d){return B.t(d)},
$S:17}
C.fmU.prototype={
$0(){return this.a},
$S:z+15}
C.f4O.prototype={
$1(d){return d.a.cY(this.a)},
$S:z+30}
C.f4P.prototype={
$2(d,e){return J.ci(e)},
$S:z+31}
C.fmW.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fmZ.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fn_.prototype={
$0(){return A.d.gI(D.uM)},
$S:z+33}
C.fmS.prototype={
$1(d){return d.a},
$S:z+16}
C.fmV.prototype={
$1(d){return d.a},
$S:z+16}
C.fkS.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fkT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fkU.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.ffh.prototype={
$0(){return C.cx()},
$S:22}
C.ffk.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cb,s=u?n:0
return C.ei(j,l,v,A.az,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.b8,4280172719,2,d,s,0,"",t,D.cJ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,"","",A.bg,A.a0)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,"",j,A.bg,A.a0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,null,0,j,k,A.bg,A.a0)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bg,A.a0)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bg,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.d8,!1,k,l,"",m,A.bg,A.a0)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,null,0,"",k,A.bg,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,D.d8,!1,j,k,"",l,A.bg,A.a0)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,!1,k,0,l,m,A.bg,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bf,j,k,l,m,"",n,A.bg,A.a0)},
$S:z+35}
C.ffj.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a0,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cb,D.eQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.ffi.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cb,t=v?j:0
return C.ei(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a0,"",h,w,d,v?k:"",l,0,!1,"",0,D.b8,4280172719,2,"",t,0,"",u,D.l3,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.pm,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.ffg.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fhJ.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.fZy.cf(0,A.a.i(s.w).toLowerCase(),new C.fhH(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cf(0,s.r,new C.fhI(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bq(t.e,new B.bkz(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1677}
C.fhH.prototype={
$0(){return F.aKx(this.a.w)},
$S:180}
C.fhI.prototype={
$0(){var w=this.a.r,v=B.aI(w.toLowerCase()," ","_")
return F.bvl("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hq(2,w,A.c0,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:180}
C.eZ8.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.eZ9.prototype={
$1(d){return d.a},
$S:z+18}
C.eZa.prototype={
$1(d){return d.b},
$S:z+19}
C.fvo.prototype={
$1(d){return D.ffp},
$S:z+41}
C.eIV.prototype={
$0(){return this.a.x=C.hsz(this.b,this.c.b)},
$S:0}
C.eIW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eIT.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:432}
C.eIU.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:432}
C.eIS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.c0(A.aG,null,new C.eIN(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.GF,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.aV(s,7)
if(r.length===0){n.n(new C.eIO(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.h4c(o,m.cza(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.n(new C.eIP(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eIN.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eIR(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.aWz,A.h,p,p,D.aRV,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ar:D.Aw,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a3(64,64,C.fhY(v,i.aZv(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dJ,!0)
if(!l)return B.br(!0,new B.C(A5.DB,t,p),!0,!1,A.ag,!0,!0)
s=new C.eIQ(i,d)
m=B.aG(d,A.bO,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.F2[e]
l.push(s.$2(r.a,r.b))}return B.br(!0,new B.cZ(new B.aW(0,1/0,0,m.a.b*0.85),B.ch(B.u(B.a([D.eST,A.T,t,A.dW,D.ej8,A.au,D.f1G,A.T,B.lX(1.15,l,3,10,10,p,A.dJ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.q,p,A.z,p,A5.DB,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:34}
C.eIR.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b0.j(0.22):A.c.j(0.04),s=v?A.bE:A.du
return B.aJ(w,B.p(w,e,A.h,w,w,new B.o(t,w,B.H(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.he,w,w,w),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eIM(this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:1678}
C.eIM.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.eIQ.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bG
r=B.H(r,A.r,t?2.5:1)
w=B.m(10)
u=B.D(B.p(v,B.bv(w,d.length===0?B.p(v,D.aix,A.h,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e3(new C.LI(u.Ej(d),!0,!1,v),!0,v),A.ap),A.h,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aJ(v,B.u(B.a([u,A.au,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,t?A.bK:A.aj,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eIL(this.b,d),v,v,v,v,v,v,!1,A.ae)},
$S:129}
C.eIL.prototype={
$0(){B.a7(this.a,!1).K("finale:"+this.b)
return null},
$S:0}
C.eIO.prototype={
$0(){var w=this.a
return w.w=w.w.Ej("")},
$S:0}
C.eIP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eIB.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eIC.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eIE.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eIF.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eIG.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eIH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eID(w,d))},
$S:2}
C.eID.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eII.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eJ8.prototype={
$0(){return this.a.f.ft()},
$S:0}
C.eJ9.prototype={
$0(){var w=this.a
return w.n(new C.eJ7(w))},
$S:0}
C.eJ7.prototype={
$0(){return this.a.e=null},
$S:0}
C.eJa.prototype={
$0(){var w=this.a
return w.n(new C.eJ6(w))},
$S:0}
C.eJ6.prototype={
$0(){return this.a.x=null},
$S:0}
C.eJc.prototype={
$1(d){var w=this.a
return w.n(new C.eJ5(w,d))},
$S:30}
C.eJ5.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eJd.prototype={
$1(d){var w=this.a
return w.n(new C.eJ4(w,d))},
$S:30}
C.eJ4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eJe.prototype={
$0(){var w=this.a
return w.n(new C.eJ3(w))},
$S:0}
C.eJ3.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eJf.prototype={
$1(d){var w=this.a
return w.n(new C.eJ2(w,d))},
$S:30}
C.eJ2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eJg.prototype={
$1(d){var w=this.a
return w.n(new C.eJ1(w,d))},
$S:30}
C.eJ1.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eJh.prototype={
$0(){var w=this.a
return w.n(new C.eJ0(w))},
$S:0}
C.eJ0.prototype={
$0(){var w=this.a
return w.w=w.w.Ej("")},
$S:0}
C.eJi.prototype={
$0(){var w=this.a
return w.n(new C.eJ_(w,this.b))},
$S:0}
C.eJ_.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eJj.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a3(u,null,w.bHx(D.a_6[v]),null))
return B.cb(A.bH,t,A.bw,8,8)},
$S:168}
C.eJb.prototype={
$1(d){var w=this.a
return w.n(new C.eIZ(w,d))},
$S:9}
C.eIZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eIJ.prototype={
$0(){var w=this.a
return w.n(new C.eIK(w,this.b,this.c))},
$S:0}
C.eIK.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.G(0,w)},
$S:0}
C.eIY.prototype={
$0(){var w=this.a
return w.n(new C.eIX(w,this.b))},
$S:0}
C.eIX.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fvn.prototype={
$1(d){return new C.Zi(this.a,this.b,null)},
$S:z+42}
C.eIu.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eIv.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eIw.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aAl?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eIx.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eIy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.eIt(w,d))},
$S:2}
C.eIt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIz.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eIA.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.al(w,0,w.length-1)
this.a.d.bG(0,new B.bb(w,B.h0(A.bp,w.length),A.aL))},
$S:0}
C.f43.prototype={
$1(d){return d.a===this.a},
$S:224}
C.e1o.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gatL(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cxY:D.cMZ
t=D.w6.j(v?1:0.55)
v=p.a.c
t=B.H(t,A.r,v?1.8:1.2)
s=D.w6.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.aa(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bW(0,B.b2(q,q,q,new C.bdY(n*6.283,q),A.as),0,0,0)
o=o.x
o=B.bW(0,B.bK8(B.es(A.B,0.5,B.p(q,q,A.h,q,q,new B.o(q,q,q,q,q,new B.a8(A.a1,A.a7,A.x,B.a([A.K,D.b1D.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bv(s,new B.am(A.V,q,A.a9,A.q,B.a([n,o,B.as(B.u(B.a([B.V(p.a.c?A.ej:A.lr,D.w6,q,q,q,20),A.au,B.eX(A.B,B.nm(A.j3,D.eMY,new C.e1n()),A.h,A.e8)],r),A.m,q,A.e,A.R,0,A.p),q,q,q),B.an(q,B.p(q,D.eJQ,A.h,q,q,new B.o(D.w6,q,q,B.m(6),q,q,A.n),q,q,q,q,L.adG,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.h,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.e1n.prototype={
$1(d){return D.bFn.aC(0,d)},
$S:65}
C.fn0.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fn1.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:224}
C.fn2.prototype={
$2(d,e){return A.o.aI(e.a.length,d.a.length)},
$S:1679}
C.fn3.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aI(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aI(u,p,q.toUpperCase())}return u},
$S:13}
C.fmX.prototype={
$1(d){return d.a},
$S:z+18}
C.fmY.prototype={
$1(d){return d.b},
$S:z+19}
C.fuB.prototype={
$1(d){return new C.XG(this.a,this.b,null)},
$S:z+44}
C.daR.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.daS.prototype={
$1(d){return d.a===this.a.gafw()},
$S:z+10}
C.daT.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.daW.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.daX.prototype={
$0(){var w=this.a
return w.n(new C.daV(w,this.b))},
$S:0}
C.daV.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.daY.prototype={
$1(d){var w=this.a
return w.n(new C.daU(w,d))},
$S:9}
C.daU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1m.prototype={
$1$2(d,e,f){var w=B.bh(d,!0,f)
A.d.fv(w,this.a)
return B.dc(w,0,B.dJ(e,"count",x.S),B.T(w).c).dz(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1680}
C.eVI.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ei(A.bf,!1,4279310375,A.az,"",i,24,A.bg,A.a0,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.eQ,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cb,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.eVK.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ei(A.L,!1,this.b.d,A.az,"",4280640491,i,A.bg,A.cF,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.b8,4280172719,2,d,l,0,"",D.m7,D.cJ,g,e,f)},
$S:z+46}
C.eVJ.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.vG(0,"twinkle")
w=t===D.b8?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.m7,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.eVH.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fgo.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fgp.prototype={
$0(){return A.d.gI(D.Fb)},
$S:z+49}
C.fgq.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.eXG.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fmt.prototype={
$1(d){var w=2450411,v=4281908728
C.dp(d,C.dq(4280171146,1,0,D.b8,w,0,0.52,0,0))
C.dp(d,C.dq(v,1,0,D.b8,w,0,0.04,0.48,0))
C.dp(d,C.dq(4294047225,0.38,0,D.b8,w,0,0.48,0.52,0.62))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmu.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dp(d,C.dq(4280172719,0.8,0,D.b8,w,0,0.36,0.58,0.1))
C.dp(d,C.dq(v,0.64,0,D.b8,w,0,0.28,0.64,0.18))
C.dp(d,C.dq(4282090230,0.44,0,D.b8,w,0,0.2,0.7,0.28))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.22,0.08,0.12))
C.dp(d,C.dq(u,0.004,0,D.fb,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fmv.prototype={
$1(d){var w=2450411,v=4279548070
C.dp(d,C.dq(4279080072,0.11,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(4279310375,0.11,0,D.b8,w,0,1,0,0.89))
C.dp(d,C.dq(856528008,0.72,0,D.jk,w,0,0.28,0.72,0.14))
C.dp(d,C.dq(1426953352,0.2,0,D.jk,w,0,0.2,0.78,0.22))
C.dp(d,C.dq(v,0.004,0,D.fb,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fmG.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(4279203438,0.55,0,D.jk,w,0,0.5,0.55,-0.05))
C.dp(d,C.dq(4280171146,0.5,0,D.jk,w,0,0.45,0.62,0.35))
C.dp(d,C.dq(4280640491,0.4,0.3,D.jj,w,0,0.35,0.68,0.55))
C.dp(d,C.dq(571438702,0.12,0,D.b8,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fmL.prototype={
$1(d){var w=4280472558
C.dp(d,C.dq(4279310375,0.75,-0.4,D.jj,2450411,0,0.75,-0.15,0.35))
C.dp(d,C.dq(w,0.55,0,D.b8,2450411,0,0.06,0.42,0.38))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.35,0.08,0.08))
C.dp(d,C.dq(2282478,0.12,0,D.b8,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmM.prototype={
$1(d){var w=2450411,v=4280640491
C.dp(d,C.dq(3423541034,0.48,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(v,0.12,-0.08,D.jk,w,0,1.1,-0.05,0.38))
C.dp(d,C.dq(858088427,0.35,0,D.b8,w,0,0.42,0.55,0.05))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fmN.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cx4[w]
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a0,A.bg,A.az,4279310375,A.bf,null,D.b8,v,4294967295,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fmO.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.lO,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a0,A.bg,A.az,4279310375,A.bf,null,D.B5,v,2450411,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fmP.prototype={
$1(d){var w=4294967295
C.dp(d,C.dq(4280640491,1,0,D.b8,2450411,0,0.42,0,0))
C.dp(d,C.dq(4280110808,1.1,1.57,D.jj,2450411,0,0.18,0.35,-0.05))
C.dp(d,C.dq(w,0.006,0,D.fb,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmQ.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dp(d,C.dq(w,0.1,0,D.b8,v,0,1,0,0))
C.dp(d,C.dq(u,0.012,0,D.b8,v,0,1,0,0.1))
C.dp(d,C.dq(u,0.006,0,D.fb,u,3,0.42,0.06,0.14))
C.dp(d,C.dq(403446057,0.68,0,D.jk,v,0,0.22,0.72,0.18))
C.dp(d,C.dq(w,0.1,0,D.b8,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmR.prototype={
$1(d){var w=4278630100
C.dp(d,C.dq(4279310375,1.2,0.15,D.jk,2450411,0,0.55,-0.2,-0.1))
C.dp(d,C.dq(w,1.1,0.15,D.b8,2450411,0,0.08,0.15,-0.05))
C.dp(d,C.dq(1120295,0.18,0,D.b8,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmw.prototype={
$1(d){var w=4292617766
C.dp(d,C.dq(4282714634,0.65,-0.2,D.jj,2450411,0,0.65,-0.1,0.45))
C.dp(d,C.dq(w,0.5,-0.15,D.jj,2450411,0,0.5,0.05,0.55))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fmx.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(4278413729,0.35,3.14,D.jj,w,0,0.45,-0.05,0.7))
C.dp(d,C.dq(4278355143,0.3,3.14,D.jj,w,0,0.4,0.25,0.75))
C.dp(d,C.dq(4279150057,0.32,3.14,D.jj,w,0,0.5,0.55,0.72))
C.dp(d,C.dq(863884284,0.22,0,D.ey,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fmy.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dp(d,C.dq(w,0.14,0,D.b8,v,0,0.14,0.02,0.02))
C.dp(d,C.dq(2282478,0.14,0,D.b8,u,3,0.14,0.84,0.02))
C.dp(d,C.dq(w,0.28,0,D.jk,v,0,0.35,-0.08,0.78))
C.dp(d,C.dq(u,0.22,0.5,D.jj,v,0,0.3,0.72,0.78))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fmz.prototype={
$1(d){var w=4293571336,v=1156231944
C.dp(d,C.dq(1841431,0.92,0,D.b8,w,3,0.92,0.04,0.04))
C.dp(d,C.dq(v,0.15,0,D.jj,2450411,0,0.15,0.02,0.02))
C.dp(d,C.dq(v,0.15,3.14,D.jj,2450411,0,0.15,0.83,0.83))
C.dp(d,C.dq(w,0.004,0,D.fb,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fmA.prototype={
$1(d){var w=4279080072,v=2450411
C.dp(d,C.dq(w,0.14,0,D.kE,v,0,0.14,0.68,0.18))
C.dp(d,C.dq(4279548070,0.14,0,D.kE,v,0,0.14,0.78,0.28))
C.dp(d,C.dq(4281193663,0.14,0,D.kE,v,0,0.14,0.68,0.38))
C.dp(d,C.dq(4284410580,0.14,0,D.kE,v,0,0.14,0.78,0.48))
C.dp(d,C.dq(4279203438,0.14,0,D.kE,v,0,0.14,0.68,0.58))
C.dp(d,C.dq(w,0.006,0,D.fb,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fmB.prototype={
$1(d){var w=2450411,v=4280640491
C.dp(d,C.dq(3708753706,0.42,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(v,0.06,-0.05,D.jk,w,0,1,0,0.38))
C.dp(d,C.dq(859356664,0.25,0,D.ey,w,0,0.25,0.7,0.08))
C.dp(d,C.dq(v,0.006,0,D.fb,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fmC.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.lO,A.dE,w/3).l()
u=Date.now()
t=$.iO
$.iO=t+1
v=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a0,A.bg,A.az,4279310375,A.bf,null,D.B5,v,2450411,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dp(d,C.dq(4280172719,0.08,0,D.b8,2450411,0,1,0,0))
C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fmD.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ex("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a0,A.bg,A.az,s,A.bf,null,D.fb,t,t,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dp(d,C.dq(s,0.75,0,D.b8,2450411,0,0.22,0.72,0.1))
C.dp(d,C.dq(872415231,0.16,0,D.b8,2450411,0,0.16,0.75,0.15))
C.dp(d,C.dq(s,0.006,0,D.fb,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmE.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dp(d,C.dq(4674921,0.9,0,D.b8,4287931320,2,0.9,0.05,0.05))
C.dp(d,C.dq(w,0.08,0,D.b8,v,0,0.08,0.03,0.03))
C.dp(d,C.dq(u,0.08,0,D.b8,v,0,0.08,0.89,0.03))
C.dp(d,C.dq(u,0.08,0,D.b8,v,0,0.08,0.03,0.89))
C.dp(d,C.dq(w,0.08,0,D.b8,v,0,0.08,0.89,0.89))
C.dp(d,C.dq(w,0.004,0,D.fb,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fmF.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iO
$.iO=t+1
t=new C.ex("design_"+(""+1000*u+"_"+t),D.eQ,0.55,0.14+v,0.38,0.18,"",24,A.a0,A.bg,A.az,r,A.bf,null,D.b8,4294967295,4280640491,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
u=$.IN
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dC,A.cK,w/2).l()
t=Date.now()
s=$.iO
$.iO=s+1
u=new C.ex("design_"+(""+1000*t+"_"+s),D.eQ,0.57,0.16+v,0.06,0.14,"",24,A.a0,A.bg,A.az,r,A.bf,null,D.b8,u,q,0,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dp(d,C.dq(4280171146,1,0,D.b8,q,0,0.48,0,0))
C.dp(d,C.dq(4280172719,1.1,1.57,D.jj,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fmH.prototype={
$1(d){var w=2450411
C.dp(d,C.dq(870995980,0.55,0.45,D.jk,w,0,0.55,-0.12,-0.08))
C.dp(d,C.dq(856996006,0.45,0.45,D.jk,w,0,0.45,0.62,-0.05))
C.dp(d,C.dq(16777215,0.38,0.45,D.jk,4293548044,5,0.38,0.52,0.12))
C.dp(d,C.dq(585783308,0.3,0.45,D.jk,w,0,0.3,0.56,0.16))
C.dp(d,C.dq(4279548070,0.06,0,D.b8,w,0,0.16,0.38,0.04))
C.dp(d,C.dq(1156208652,0.28,0,D.ey,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fmI.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dp(d,C.dq(w,1,0,D.b8,v,0,0.07,0,0))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.14))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.28))
C.dp(d,C.dq(u,0.1,0,D.b8,t,1,0.46,0.48,0.42))
C.dp(d,C.dq(s,0.08,0,D.ey,v,0,0.08,0.5,0.16))
C.dp(d,C.dq(w,0.08,0,D.ey,v,0,0.08,0.5,0.3))
C.dp(d,C.dq(4279548070,0.08,0,D.ey,v,0,0.08,0.5,0.44))
C.dp(d,C.dq(16777215,0.32,0.45,D.jk,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fmJ.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dp(d,C.dq(4294047225,0.08,0,D.b8,t,2,0.1,0.02,0.06))
C.dp(d,C.dq(s,0.42,0,D.b8,2450411,0,0.36,0.58,0.18))
C.dp(d,C.dq(872415231,0.12,0,D.b8,2450411,0,0.28,0.62,0.24))
C.dp(d,C.dq(16777215,0.28,0,D.ey,s,4,0.32,0,0.72))
C.dp(d,C.dq(r,0.006,0,D.fb,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iO
$.iO=u+1
u=new C.ex("design_"+(""+1000*v+"_"+u),D.eQ,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a0,A.bg,A.az,4279310375,A.bf,null,D.ey,16777215,t,2,0,!1,"",0,D.cb,0,"","","","","",!1,0)
v=$.IN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fmK.prototype={
$1(d){var w=2450411,v=4279548070
C.dp(d,C.dq(3423541034,0.55,0,D.b8,w,0,1,0,0))
C.dp(d,C.dq(4009754623,0.56,0.45,D.jk,w,0,0.56,0.22,0.18))
C.dp(d,C.dq(3439329279,0.44,0.45,D.jk,w,0,0.44,0.28,0.24))
C.dp(d,C.dq(v,0.07,0,D.b8,w,0,0.22,0.34,0.62))
C.dp(d,C.dq(v,1,0,D.b8,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fee.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fef.prototype={
$0(){return A.d.gI($.bzZ())},
$S:z+52}
C.f3R.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.f3Q.prototype={
$1(d){return C.hzs(d,this.a,this.b)},
$S:z+53}
C.fn9.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.uY(1.0375,1.01875,1)
return new B.fF(v,u,new C.aPp(B.hpB(A.tK,C.hzv(w.c,w.d,v,u),t)))},
$S:434}
C.dL7.prototype={
$1(d){var w=d.a/1e6
this.a.d.st(0,w)
return w},
$S:8}
C.dL6.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.bQ(w,new B.o(w,w,w,w,w,new B.bS(A.HR,1.2,A.x,w,0,u.d,w,w),A.n),A.b7),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jy(new B.am(A.V,w,A.aX,A.q,B.a([t,new B.en(B.b2(w,w,w,new C.baR(u.a,r,q,r),A.as),w),B.as(new B.k1(r,new C.dL5(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.q,w)},
$S:443}
C.dL5.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ex.ar(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.z(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.aa(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hM(B.fC(i,A.B,r,r,A.ci,A.bN,!0,r,!1,r,r),A.ap),A.h,r,r,new B.o(r,r,r,r,u,new B.fQ(A.B,0,6.283185307179586,A.x,t,r,new B.mn(e*0.8)),A.a5),r,w,r,r,new B.M(v,v,v,v),r,r,w),new B.a3(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bnb(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cJ(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a3(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d5(B.dO(B.u(B.a([B.p(r,r,A.h,r,r,new B.o(r,r,r,r,r,new B.a8(A.a1,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a3(r,m*0.022,r,r),B.d(w.a.c.gaGD(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a0,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.R,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.d5(B.e5(A.B,new B.C(new B.M(l,0,l,0),B.u(j,A.m,r,A.e,A.R,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:107}
C.eHI.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aC(0,d)},
$S:65}
C.c38.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bG
t=B.H(t,A.r,g?2.5:1)
w=g?B.a([new B.aa(0,A.G,A.hn.j(0.4),A.J,14)],x.V):v
w=B.dg(v,B.bv(B.m(12),d,A.ap),v,v,A.b9,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aJ(v,new B.a3(112,v,B.u(B.a([w,A.fW,B.d(e,v,1,A.Z,v,v,v,B.l(v,v,g?A.bK:A.aj,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.ae)},
$S:1681}
C.c39.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Ej(""))},
$S:0}
C.c3a.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e3(new C.LI(v.Ej(u),!0,!1,null),!0,null),d.b,new C.c3b(w,this.c,d),v.a===u)},
$S:z+54}
C.c3b.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.h4c(u.b,t.c.Ej(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fte.prototype={
$1(d){return new C.Xe(this.a,null)},
$S:z+55}
C.d0l.prototype={
$0(){var w=this.a
w.d=w.guN().b6g("data:"+this.b+";base64,"+A.cM.gcr().aF(this.c));++w.r},
$S:0}
C.d0q.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d0r.prototype={
$0(){var w=this.a
return w.n(new C.d0p(w))},
$S:0}
C.d0p.prototype={
$0(){return this.a.r++},
$S:0}
C.d0s.prototype={
$1(d){var w=this.a
return w.n(new C.d0o(w,d))},
$S:2}
C.d0o.prototype={
$0(){var w=this.a
return w.d=w.guN().azU(this.b)},
$S:0}
C.d0t.prototype={
$0(){var w=this.a
return w.n(new C.d0n(w))},
$S:0}
C.d0n.prototype={
$0(){var w=this.a
return w.d=w.guN().b6g("")},
$S:0}
C.d0u.prototype={
$1(d){var w=this.a
return w.n(new C.d0m(w,d))},
$S:2}
C.d0m.prototype={
$0(){var w=this.a
return w.d=w.guN().b6n(this.b)},
$S:0}
C.d0v.prototype={
$0(){var w=this.a
w=w.guN().b6n(w.gatM().a.a)
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.ftd.prototype={
$1(d){var w={}
w.a=this.a
return new B.ed(new C.ftc(w),null)},
$S:21}
C.ftc.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.br(!0,new B.cZ(new B.aW(0,1/0,0,B.aG(d,A.bO,x.w).w.a.b*0.85),B.ch(B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.ay,D.f_3,A.au,D.f_h,A.ay,new C.aWy(v.a,new C.ftb(v,e,d),!0,w)],x.p),A.F,w,A.e,A.R,0,A.p),A.q,w,A.z,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.h,w,w,D.aSq,w,w,w,w,A.JQ,w,w,w)},
$S:158}
C.ftb.prototype={
$1(d){this.b.$1(new C.fta(this.a,d))
B.a7(this.c,!1).K(d)},
$S:z+56}
C.fta.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fvm.prototype={
$1(d){return D.fbh},
$S:z+57}
C.d6R.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.d6S.prototype={
$0(){var w=this.a.c
w.toString
B.a7(w,!1).K(this.b)
return null},
$S:0}
C.d6T.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a7(w,!1).K(v)}},
$S:0}
C.fjQ.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aC(0,d)},
$S:65}
C.d02.prototype={
$3(d,e,f){var w,v=this,u=new B.b0($.a1().r,A.aw,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.N(new B.bj(t+r*1.2,o))
u.N(new B.dn(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.N(new B.dn(w,q+p,w,q+p*1.2))
u.N(new B.BR(B.c2(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.b4(u,v.d)
s.b4(u,v.e)
p=B.U()
p.r=B.aq(v.a.d,A.c,0.6).gt(0)
s.aw(new B.v(w,o),2.2,p)},
$S:1682}
C.fjU.prototype={
$2(d,e){return A.k.aI(d.c,e.c)},
$S:z+58}
C.fcg.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fch.prototype={
$1(d){var w=null,v=this.a
return B.br(!0,new B.C(E.wt,B.u(B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.eK4,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dk(D.EK,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fce(d),B.bk(A.bQ,w,w,w,A.c,w,A.ca,w,w,w,w,w)),A.T,B.ey(A.ns,D.R2,new C.fcf(d),B.d9(w,w,w,w,w,w,w,w,w,A.aj,w,w,A.ca,w,w,Q.vA,w,w,w,w))],x.p),A.ad,w,A.e,A.R,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:34}
C.fce.prototype={
$0(){B.a7(this.a,!1).K("continue")
return null},
$S:0}
C.fcf.prototype={
$0(){B.a7(this.a,!1).K("new")
return null},
$S:0}
C.c8x.prototype={
$1(d){return d.hs()},
$S:z+59}
C.c8y.prototype={
$1(d){return d.ac()},
$S:z+60}
C.c8w.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.Z(b5,x.N,x.z),b3=B.aQ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.L(b3)
if(b4==null)b4=A.a0.gdC(0)
b3=B.aQ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.L(b3)
if(w==null)w=0
b3=B.aQ(b2.h(0,"align"))
v=b3==null?b1:A.k.L(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hvu(b2.h(0,"type"))
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
n=A.asH[A.o.D(b4,0,8)]
m=D.czH[A.o.D(w,0,1)]
l=C.hyY(b2.h(0,"decoration"))
k=B.aQ(b2.h(0,"color"))
k=k==null?b1:A.k.L(k)
if(k==null)k=4279310375
j=A.apM[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hBD(b2.h(0,"shape"))
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
a3=C.h_B(b2.h(0,"textTransition"))
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
return C.ei(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.c8m.prototype={
$1(d){return d.hs()},
$S:z+62}
C.c8n.prototype={
$1(d){return d.ac()},
$S:z+63}
C.c8j.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8k.prototype={
$1(d){return B.t(d)},
$S:17}
C.c8l.prototype={
$1(d){return C.fRs(B.Z(d,x.N,x.z))},
$S:z+64}
C.c8O.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.c8P.prototype={
$0(){return A.d.gI(D.ZN)},
$S:z+66}
C.c8J.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.c8(d.f))w.m(0,u,d.hs())},
$S:z+7}
C.c8I.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8E.prototype={
$1(d){return new B.J(d,new C.c8F(),B.T(d).k("J<1,O>")).fs(0,new C.c8G())},
$S:z+69}
C.c8F.prototype={
$1(d){return d.f},
$S:z+70}
C.c8G.prototype={
$2(d,e){return d.c8(e)?d:e},
$S:666}
C.c8H.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hlt(d)},
$S:z+71}
C.c8K.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.c8L.prototype={
$2(d,e){return e.f.aI(0,d.f)},
$S:z+21}
C.c8M.prototype={
$1(d){return d.ac()},
$S:z+14}
C.fks.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.m(0,p,k)
t.G(0,j)
break}}}},
$S:z+73}
C.fko.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fkp.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fkq.prototype={
$2(d,e){var w
if(d.b===D.cJ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fkr.prototype={
$2(d,e){return d.b===D.eQ&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.c8s.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.hK3(b2,b3),b5=B.a2(b4).k("bf<2>")
b5=B.cy(new B.bf(b4,b5),new C.c8r(),b5.k("F.E"),x.N)
w=B.d4(b5,B.a2(b5).k("F.E"))
b1=b1.e
v=A.oR.ar(0,A.k.D(b1,0,1))
u=new C.c8t()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.c8u(a9,b7.d)
r=new C.c8v(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jx.ar(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kG(A.k.D(1-k,0,1),B.dO(B.e5(A.B,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.eQ){a4=i.hs()
a4.ay=B.aq(B.aX(l.ay),B.aX(i.ay),v).l()
a4.ch=B.aq(B.aX(l.ch),B.aX(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.l3&&l.at==i.at?r.$1(i):new B.am(A.V,a8,A.aX,A.q,B.a([new B.kG(A.k.D(o,0,1),r.$1(l),a8),new B.kG(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iu(B.vr(a3),a8,A.B,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cb)a7=D.m7
p.push(s.$5(i.c,i.d,i.e,i.f,C.h1M(a7,a6,r.$1(i))))}}return B.bQ(new B.am(A.V,a8,A.a9,A.q,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a1,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.b7)},
$S:442}
C.c8r.prototype={
$1(d){return d.a},
$S:z+22}
C.c8t.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.aX(w)},
$S:z+76}
C.c8u.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.an(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1685}
C.c8v.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gV(d.a)
return new C.a5z(v,C.aYF(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dys.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e5(new B.d3(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:44}
C.c8B.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.c8C.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fng.prototype={
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
C.fmn.prototype={
$1(d){return new C.ab2(this.a,this.b,null)},
$S:z+78}
C.ebq.prototype={
$0(){return this.a.O6(this.b,C.hNn(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.ebr.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.O6(this.b,C.hNp(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ebs.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.O6(this.b,C.hNo(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ebt.prototype={
$0(){X.h1w()
B.a7(this.a,!1).K(null)},
$S:0}
C.c8q.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1686}
C.c8p.prototype={
$2(d,e){var w,v=this,u=null,t=B.dH(d,A.mY),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.U(A.k.D(p*Math.max(B.lx(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bN:A.dn
return B.fC(t,A.B,o,new C.c8o(),A.ci,w,!0,u,!1,new B.cv("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1687}
C.c8o.prototype={
$3(d,e,f){return D.a7x},
$S:223}
C.fkn.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.aX(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.aX(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.aX(r.e):t
r=r.z
r=B.dc(r,0,B.dJ(6,"count",x.S),B.T(r).c)
u=r.$ti.k("J<ai.E,cE>")
r=B.z(new B.J(r,new C.fkm(e.b,e.d),u),u.k("ai.E"))
return B.bv(s,B.bQ(new B.am(A.V,t,A.a9,A.q,r,t),new B.o(v,t,t,t,t,w,A.n),A.b7),A.ap)},
$S:1688}
C.fkm.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.an(w,C.aYF(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.f69.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cV(r.b,new C.f67(d))
w=B.aG(d,A.bO,x.w).w
v=B.m(22)
u=B.H(A.bG,A.r,1)
t=B.a([new B.aa(0,A.G,A.w.j(0.45),A.fz,28)],x.V)
s=x.p
return new B.d_(e,!1,B.as(B.aD(!1,A.X,!0,q,B.p(q,B.u(B.a([B.B(B.a([B.D(B.u(B.a([B.d(r.c,q,q,q,q,q,q,A.l6,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bG(!1,A.yj,q,q,!0,q,q,new C.f68(p,d),q,B.fo(q,q,A.bh,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.JP,q,new B.b5(B.m(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.ay,r.d],s),A.m,q,A.e,A.R,0,A.p),A.h,q,new B.aW(0,w.a.a*0.94,0,1/0),new B.o(A.aG,q,u,v,t,q,A.n),q,q,q,A.fu,A.zH,q,q,q),A.h,A.K,0,q,q,q,q,q,A.ac),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.f67.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a7(w,!0).pI())B.a7(w,!0).eD()},
$S:0}
C.f68.prototype={
$0(){var w=this.a.a
if(w!=null)w.a9(0)
B.a7(this.b,!0).eD()},
$S:0}
C.eQ1.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t)
case 2:case 17:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.dO(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e5(A.B,B.d5(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e5(A.B,B.d5(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.fk(r*3.14159)
return B.fl(A.B,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.001
s.jw(r*3.14159)
return B.fl(A.B,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(r*1.2)
s.jw(r*0.5)
return B.fl(A.B,B.d5(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.002
s.fk(-r*1.4)
return B.fl(A.a7,B.d5(u.b,r),t,s,!0)
case 12:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(B.e5(A.B,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aGk(r,t))],x.p),t)
case 15:return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.jy(u.b,A.q,new C.aGk(1-r,t))],x.p),t)
case 16:v=D.aVD.ar(0,r)
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.e5(A.B,B.d5(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.de()
s.me(r*6.28)
s.jf(r,r,r,1)
return B.fl(A.B,u.b,t,s,!0)
case 20:return B.es(A.B,(r-0.5)*0.35,new B.am(A.V,t,A.aX,A.q,B.a([u.c,B.d5(u.b,r)],x.p),t),t)}},
$S:59}
C.dJk.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.co(0)}},
$S:11}
C.dJj.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.co(0)}},
$S:11}
C.dJi.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.h1M(v,w,e)},
$S:59}
C.c8i.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.aX(v.e)
t=v.f
t.toString
t=new B.a8(A.a1,A.a7,A.x,B.a([u,B.aX(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.aX(v.e):r
v=v.z
s=B.T(v).k("J<1,cE>")
q=B.z(new B.J(v,new C.c8h(q,w,e.b,e.d),s),s.k("ai.E"))
return B.bQ(new B.am(A.V,r,A.a9,A.h,q,r),new B.o(t,r,r,r,r,u,A.n),A.b7)},
$S:442}
C.c8h.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cb?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gV(d.a)
return B.an(u,new C.a5z(m,new C.T1(d,C.aYF(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.cYB.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.cYA(w))},
$S:11}
C.cYA.prototype={
$0(){return this.a.d++},
$S:0}
C.e14.prototype={
$2(d,e){var w,v=null,u=A.o.ak(this.b.e.a,1000),t=A.o.J(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aGU.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.hJN(w,t,s,e)}switch(s.a.c){case"float3d":s=B.de()
w=s.a
w.$flags&2&&B.ah(w)
w[11]=0.0016
w=Math.sin(t)
s.dY(0,w*7,0,1)
s.fk(Math.sin(t)*0.32)
s.jw(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jf(w,w,w,1)
return B.fl(A.B,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dO(B.e5(A.B,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.d5(B.e5(A.B,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eFs.prototype={
$1(d){var w
$.a1()
w=B.U()
w.b=A.ak
w.c=d
w.e=A.fl
return w},
$S:1689}
C.fhZ.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b2(r,r,r,new C.bn4(u,t,r),A.as))
w.push(B.n2(s.d,A.ap,new C.bbn(u,t,r)))
if(!p)w.push(B.b2(r,r,r,new C.bm7(u,q,t,r),A.as))
return B.as(new B.a3(v.a,v.b,new B.am(A.V,r,A.aX,A.q,w,r),r),r,r,r)},
$S:246}
C.f8W.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:285}
C.ehE.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.BC(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gah(s)){u=null
w=1
break}u=r.dI(s,new C.ehC(),new C.ehD(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1690}
C.ehC.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.ehD.prototype={
$0(){return J.fg(this.a)},
$S:1692}
C.ee1.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ee2.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ee3.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.efC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efq.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.efr.prototype={
$1(d){return d.hs()},
$S:z+81}
C.edp.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.egK.prototype={
$0(){this.a.rI()},
$S:0}
C.ehA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IE()},
$S:0}
C.efA.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.nB()
w.IE()},
$S:0}
C.ehn.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eho.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ehp.prototype={
$1(d){return d.a},
$S:z+22}
C.ehq.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.b_,A.aL),$.at())},
$S:260}
C.ehr.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ecO.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ehB.prototype={
$0(){},
$S:0}
C.eeJ.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wx()
w.IE()},
$S:0}
C.ecM.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.wx()},
$S:0}
C.ecN.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.wx()},
$S:0}
C.ef5.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ef6.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wx()
w.IE()
w.z="Home"},
$S:0}
C.ef7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eeI.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,A.R1,w,w,!0,w,w,new C.eeH(d),w,w)],x.p),w,w,w,D.f0E,w,w,w,w,D.eKu,w)},
$S:20}
C.eeH.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeF.prototype={
$1(d){var w=null
return B.eo(B.a([B.bG(!1,A.R1,w,w,!0,w,w,new C.eeE(d),w,w)],x.p),w,w,w,D.eOa,w,w,w,w,D.eM6,w)},
$S:20}
C.eeE.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeG.prototype={
$0(){},
$S:0}
C.edY.prototype={
$1(d){return this.a.aVZ(C.by2(d))},
$S:z+7}
C.edZ.prototype={
$1(d){return this.a.ac8(C.by2(d))},
$S:z+7}
C.eeP.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.h,w,w,new B.o(A.be,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bs,D.f0I,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bs,new C.NM(A.uo,D.ar2,"HATI YA KUHOWA","Hati ya mahari",new C.eeK(d),w),A.T,new C.NM(A.fS,D.cKY,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eeL(d),w),A.T,new C.NM(A.hJ,D.cy1,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eeM(d),w),A.T,new C.NM(A.hK,D.cwv,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eeN(d),w)],v)
if(this.a.ga8R())A.d.v(u,B.a([A.T,new C.NM(A.iI,D.chO,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eeO(d),w)],v))
return B.br(!0,B.ch(B.u(u,A.ad,w,A.e,A.R,0,A.p),A.q,w,A.z,w,E.wt,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:34}
C.eeK.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhowa")
return null},
$S:0}
C.eeL.prototype={
$0(){B.a7(this.a,!1).K("hati_kuhoweya")
return null},
$S:0}
C.eeM.prototype={
$0(){B.a7(this.a,!1).K("marriage_agreement")
return null},
$S:0}
C.eeN.prototype={
$0(){B.a7(this.a,!1).K("hati_malipo_awamu")
return null},
$S:0}
C.eeO.prototype={
$0(){B.a7(this.a,!1).K("hati_kiapo_uongozi")
return null},
$S:0}
C.eeQ.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wx()},
$S:0}
C.ecQ.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.ecR.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mF(r,v.f+1,q);++v.f
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
C.ef0.prototype={
$1(d){return d.b===D.l3},
$S:z+4}
C.ef1.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.ed(new C.eeZ(w,this.a,v),null)},
$S:21}
C.eeZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ef_(p,o,a3,n),l=B.L(a2).ax.a===A.H,k=l?A.c:A.M,j=l?A.aQ:A.al,i=l?A.bj:A.bL,h=l?A.M:A.c,g=B.m(28),f=B.H(l?A.bG:A.aJ,A.r,1),e=x.p,d=B.B(B.a([B.D(B.u(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.by,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aF(q,q,q,q,B.V(A.cu,j,q,q,q,q),q,q,q,new C.eeV(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Aw[w]
v.a=null
t=v.a=u.a
a1.push(new C.bdS(t,u.b,p.a===t,i,k,new C.eeW(v,m),q))}a1=B.cb(A.bH,a1,A.bw,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ar[w]
s.a=null
t=s.a=r.a
u.push(new C.bdR(t,r.b,p.b===t,k,j,new C.eeX(s,m),q))}return B.br(!0,B.p(q,B.ch(B.u(B.a([d,A.aN,a0,A.T,a1,A.bs,v,A.T,B.cb(A.bH,u,A.bw,12,12),A.bs,new B.a3(1/0,48,B.ey(D.bCs,D.f2Z,new C.eeY(o,n),B.d9(q,q,q,q,q,q,q,q,q,A.aB,q,q,q,q,new B.b5(B.m(16),A.W),D.aQ2,q,q,q,q)),q)],e),A.F,q,A.e,A.R,0,A.p),A.q,q,A.z,q,q,q,q,A.ah),A.h,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.rA,D.bgI,q,q,q),!0,!1,A.ag,!0,!0)},
$S:117}
C.ef_.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eeT(w.a,d,e))
w.b.cZ(new C.eeU(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1695}
C.eeT.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eeU.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eeV.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.eeW.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eeX.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eeY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.F9(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.cZ(new C.eeS(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eeS.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ef3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ef4.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.ef2(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wx()},
$S:0}
C.ef2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.efl.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.efm.prototype={
$1(d){return d.w},
$S:z+82}
C.efn.prototype={
$2(d,e){return d>e?d:e},
$S:93}
C.efo.prototype={
$1(d){var w=this,v=null,u=B.L(d).ax.a===A.H,t=u?A.c:A.M,s=u?A.aQ:A.al,r=u?A.bj:A.aO,q=u?A.M:A.c,p=B.m(28),o=B.H(u?A.bG:A.aJ,A.r,1),n=B.aG(d,A.bO,x.w).w,m=w.a,l=x.p,k=w.b
return B.br(!0,B.p(v,B.u(B.a([B.B(B.a([B.p(v,D.bwm,A.h,v,v,D.aRn,v,38,v,v,v,v,v,38),A.ba,B.D(B.u(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aF(v,v,v,v,B.V(A.cu,s,v,v,v,v),v,v,v,new C.efi(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.ay,new B.dl(1,A.cj,B.hE(v,new C.efj(m,k,w.c,s,w.d,t,r),k.length,A.hd,v,A.ah,new C.efk(),!0),v)],l),A.F,v,A.e,A.R,0,A.p),A.h,v,new B.aW(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.rA,A.Vg,v,v,v),!0,!1,A.ag,!0,!0)},
$S:34}
C.efi.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.efk.prototype={
$2(d,e){return A.ab},
$S:35}
C.efj.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aB:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.I:A.cp
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bzo,q,q,q,new C.efg(s,w,p),q,q,q,q,"Add an icon",q)
return B.u(B.a([new B.C(D.biV,n,q),B.aK(q,A.U,!1,q,!0,A.q,q,B.aL(),v,q,q,q,q,q,2,B.bl(q,new B.b1(4,B.m(16),A.W),q,A.eF,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b1(4,B.m(16),D.aPI),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.z,!0,q,!0,q,!1,q,A.af,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.efh(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a8,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:1696}
C.efg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.hPj(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gep()?p.a:q.a.length
n=p.gep()?p.b:q.a.length
m=A.a.o5(q.a,o,n,s)
r.bG(0,new B.bb(m,B.h0(A.bp,o+s.length),A.aL))
l.ag9(k,m)
l.oz()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efh.prototype={
$1(d){var w=this.a
w.ag9(this.b.a,d)
w.oz()},
$S:2}
C.efp.prototype={
$0(){},
$S:0}
C.eeR.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ed6.prototype={
$0(){},
$S:0}
C.ed7.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.h34(this.b,w,!0)
w=this.a
w.r=null
w.wx()},
$S:0}
C.ed8.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ed9.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bm(v,new C.ed5(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mF(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.wx()},
$S:0}
C.ed5.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.efv.prototype={
$1(d){return B.p6(new C.efu(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.efu.prototype={
$2(d,e){var w=null,v=x.p
return B.u(B.a([new B.C(E.adn,B.u(B.a([D.eZv,A.ar,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.D(B.ig(!0,w,e,A.z,D.eor,new C.eft(this.a,this.b),20,A.rE,w,A.ah,!1),1)],v),A.ad,w,A.e,A.j,0,A.p)},
$S:444}
C.eft.prototype={
$2(d,e){var w=null,v=D.Fb[e],u=C.hlo(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.H(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.h,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fw,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bo,B.p(w,D.ej4,A.h,w,w,new B.o(A.e9.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nm,w,w,w)],m))
return B.aD(!1,A.X,!0,w,B.aH(!1,t,!0,B.p(w,B.u(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.h,w,w,new B.o(w,w,p,s,w,new B.a8(A.a1,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.efs(this.a,u,this.b,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.efs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.c8A(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a7(s,!1).K(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efw.prototype={
$0(){var w=this.a
w.e=this.b.hs()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.wx()},
$S:0}
C.ebL.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m6,"","","",D.d8),s=this.b
C.c8N(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B4){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ed4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ac()
q.m(0,"id",C.cx())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aU(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iO
$.iO=r+1
J.aE(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.fRs(q));++v.f},
$S:0}
C.ed2.prototype={
$0(){var w=this.a
A.d.cu(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.efE.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cu(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ecZ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.d,new C.ecY(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ecY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.efD.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.O(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.ecP.prototype={
$0(){var w=this.a.r
return new B.ao(new B.bb(w,A.b_,A.aL),$.at())},
$S:260}
C.edq.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:670}
C.ehl.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ehm.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aq3(w).ft()
v=u.UB(w)
v.sro(B.h0(A.bp,v.a.a.length))},
$S:8}
C.egL.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Vz(v)
if(u!=null&&u.b===D.cJ)w.UB(u).saR(0,u.r)}else w.w=null},
$S:0}
C.ebM.prototype={
$0(){var w=C.cx(),v=this.a,u=C.ei(A.bf,!1,v.gpy().e.l(),A.az,"",4280640491,24,A.bg,A.a0,"",0.22,w,null,"","",0,!1,"",0,D.b8,4280172719,2,"Tap to edit text",0,0,"",D.cb,D.cJ,0.7,0.15,0.2)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ebJ.prototype={
$0(){var w=C.cx(),v=this.a,u=C.ei(A.bf,!1,4279310375,A.az,"",v.gpy().c.j(0.25).l(),24,A.bg,A.a0,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gpy().c.l(),2,"",0,0,"",D.cb,D.eQ,0.25,0.3,0.3)
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ebz.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.az,"",4280640491,24,A.bg,A.a0,"",0.55,C.cx(),this.b,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l3,0.6,0.2,0.18),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.ebw.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bI3],x.p)
for(w=J.aU(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gagK().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,D.bu8,r,r,r,r,new C.ebv(d,v),!1,r,r,r,r,r,new B.w(""+t+" links"+s,r,r,r,r,r,r,A.Z,r,1,r,r),r,new B.w(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.br(!0,B.cK(q,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:34}
C.ebv.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.ebx.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cx(),u=this.b,t=A.Q.aj(u.ac(),null),s=C.ei(A.bf,!1,4279310375,A.az,u.b,4280640491,24,A.bg,A.a0,"",0.86,v,null,"","",0,!1,"",0,D.b8,4280172719,2,t,0,0,"",D.cb,D.a1c,w,0.5-w/2,0.07)
t=this.a
A.d.G(t.gdk().z,s)
t.r=s.a},
$S:0}
C.ed0.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.ed1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bm(v.gdk().z,new C.ed_(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.at()
w.O$=0}v=v.CW.W(0,u)
if(v!=null)v.p()},
$S:0}
C.ed_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ecd.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cJ)s.Q=t.c.l()
else if(w===D.eQ){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ece(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ece.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eci.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ecj(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdk()
if(t!=null)v.$1(t)}},
$S:0}
C.ecj.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ecg.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cJ){s.Q=t.c
return}w=new C.ech(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ech.prototype={
$1(d){var w,v,u
for(w=A.d.gag(d.z),v=new B.hX(w,new C.ecf()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ecf.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ecc.prototype={
$0(){return C.c8N(this.b,this.c,this.a.gpy())},
$S:0}
C.eff.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ehu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehv.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ehw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehx.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bg(s,new C.eht(v))
if(w>=0)t.d[w]=v.b}if(v.a.gQr()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hs()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.wx()
t.IE()}},
$S:0}
C.eht.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eh0.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8V(),s=w.b,r=u.a8W(A.eY,A.ky,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.H(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bs,B.p(v,B.B(B.a([B.D(u.aQz(w.c,A.al),1),new B.C(A.fj,B.p(v,D.bue,A.h,v,v,new B.o(A.eY.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.D(u.aQz(s,A.eY),1)],n),A.m,v,A.e,A.j,0,v,v),A.h,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.bs,u.aQC(A.eY,d,D.bqj,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.T,u.bQI(A.b4,d,A.rS,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.ay)
p.push(u.aQA(d,"Not now"))
return new C.If(B.u(p,A.ad,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.eh_.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.If(B.u(B.a([v.a8V(),A.P,v.a8W(A.b4,D.bq0,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.cZ(new B.aW(0,1/0,0,B.aG(d,A.bO,x.w).w.a.b*0.42),B.hE(w,new C.egY(v,u,d),u.length,w,w,A.ah,new C.egZ(),!0),w),A.ay,v.aQA(d,"Cancel")],x.p),A.ad,w,A.e,A.R,0,A.p),w)},
$S:z+9}
C.egZ.prototype={
$2(d,e){return A.T},
$S:35}
C.egY.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.H(A.c.j(0.08),A.r,1),q=x.p
return B.aD(!1,A.X,!0,w,B.aH(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.ai1,A.h,w,w,new B.o(w,w,w,B.m(12),w,D.bFi,A.n),w,42,w,w,w,w,w,42),A.ba,B.D(B.u(B.a([B.d(v.b,w,1,A.Z,w,w,w,A.mT,w,w,w),A.d4,B.d("Updated "+this.a.O7(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.V(A.ek,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.h,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.egX(this.c,v),w,w,w,w,w,w,w),A.h,A.K,0,w,w,w,w,w,A.ac)},
$S:73}
C.egX.prototype={
$0(){B.a7(this.a,!1).K(this.b.a)
return null},
$S:0}
C.egU.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.a8V()
t=t.a8W(A.aZ,A.rZ,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.If(B.u(B.a([s,A.P,t,A.bs,B.B(B.a([B.D(B.dU(A.a4w,new C.egS(d),B.d9(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ca,u,new B.b5(B.m(14),A.W),new B.ax(w,1,A.r,-1),u,u,u,u)),1),A.av,B.D(B.bH(D.eME,new C.egT(d),B.bk(A.eY,u,u,u,A.c,u,A.ca,u,new B.b5(B.m(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ad,u,A.e,A.R,0,A.p),u)},
$S:z+9}
C.egS.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.egT.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.egW.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.a8V(),s=w.b,r=u.a8W(A.aS,A.ej,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.D(u.arn("Names",""+w.c),1),A.aa,B.D(u.arn("Fields",""+w.d),1),A.aa,B.D(u.arn("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bk(A.bh,v,v,v,A.c,v,A.wj,v,new B.b5(B.m(14),A.W),v,v,v)
return new C.If(B.u(B.a([t,A.P,r,A.aN,p,A.bs,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.mS,v,v,v),new C.egV(d),o),A.T,u.aQB(d,"Stay here",!1)],q),A.ad,v,A.e,A.R,0,A.p),v)},
$S:z+9}
C.egV.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.edU.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.edT.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.egM.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ehk.prototype={
$1(d){var w=this.a,v=this.b
return new C.Yq(A.d.dI(w.d,new C.ehi(v),new C.ehj(v)).hs(),w.f,null)},
$S:z+84}
C.ehi.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ehj.prototype={
$0(){return this.a},
$S:z+85}
C.ebE.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h8,w,w,w),w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bvX,w,w,w,w,new C.ebC(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.eKO,w,w,w)],x.p)
if(v>1)t.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bx5,w,w,w,w,new C.ebD(d),!1,w,w,w,w,w,D.f44,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.di,w,w,w),w,w,w))
return B.br(!0,B.u(t,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:34}
C.ebC.prototype={
$0(){B.a7(this.a,!1).K("scroll")
return null},
$S:0}
C.ebD.prototype={
$0(){B.a7(this.a,!1).K("split")
return null},
$S:0}
C.ebF.prototype={
$0(){var w=this.b,v=w.c,u=C.ei(A.bf,!1,4279310375,A.az,v,4280640491,24,A.bg,A.a0,"",0.84,C.cx(),w.b,"","",0,!1,"",0,D.b8,4280172719,2,v,0,0,"",D.cb,D.P0,0.88,0.06,0.08)
v=this.a
A.d.G(v.gdk().z,u)
v.r=u.a},
$S:0}
C.ebG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iO
$.iO=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iO
$.iO=k+1
m.push(new C.ex(""+1000*l+"_"+k,D.P0,0.04,0.06,0.92,0.88,v,24,A.a0,A.bg,A.az,4279310375,A.bf,u,D.b8,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cb,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.ln(""+1000*p+"_"+o,r+n,"",D.pl,4294967295,null,D.d8,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ebK.prototype={
$0(){var w,v=C.cx(),u=this.a,t=u.e
t=(t==null?null:C.kg(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ei(A.bf,!1,4279310375,A.az,t,4280640491,24,A.bg,A.a0,"",0.22,v,this.b.a,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.kD,0.35,0.55,0.62)
A.d.G(u.gdk().z,w)
u.r=w.a},
$S:0}
C.ebB.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.aYC(o)
w=C.cx()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ei(A.bf,!1,4279310375,A.az,"marriage_sign_placed_"+A.a.e1(v.db,"marriage_sign_",""),4280640491,24,A.bg,A.a0,"",r,w,o.a,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.kD,s,u,t)
A.d.G(p.gdk().z,q)
A.d.bm(p.gdk().z,new C.ebA(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.hJx(p)}},
$S:0}
C.ebA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.efB.prototype={
$0(){var w=this.a,v=this.b
w.aYC(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ehs.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.edX.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bm(r.z,new C.edW())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.edW.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ecm.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ecn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rI()},
$S:8}
C.eby.prototype={
$0(){var w=C.ei(A.bf,!1,4279310375,A.az,"HD Photo",4280640491,24,A.bg,A.a0,"",0.8,C.cx(),this.b,"","",0,!1,"",0,D.b8,4280172719,2,"",0,0,"",D.cb,D.l3,0.8,0.1,0.1),v=this.a
A.d.G(v.gdk().z,w)
v.r=w.a},
$S:0}
C.edo.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ebH.prototype={
$0(){var w=this.a,v=this.b
A.d.G(w.gdk().z,v)
w.r=v.a},
$S:0}
C.ebQ.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ebR.prototype={
$0(){var w=this.b.hs(),v=C.cx(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ei(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.G(t.gdk().z,f)
t.r=f.a},
$S:0}
C.ebS.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bg(w,new C.ebP(v))
if(u>=0&&u<w.length-1){A.d.cu(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.ebP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ec2.prototype={
$0(){var w=this.a.gdk().z,v=this.b,u=A.d.bg(w,new C.ebO(v))
if(u>0){A.d.cu(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.ebO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ec5.prototype={
$0(){return this.a.as=A.bf},
$S:0}
C.ec6.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.ec7.prototype={
$0(){return this.a.as=A.dK},
$S:0}
C.ec8.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ec9.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eca.prototype={
$1(d){return d.b===D.cJ},
$S:z+4}
C.ecb.prototype={
$1(d){return d.length!==0},
$S:3}
C.ebT.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.BH(w.gpy().c.j(0.18).l(),0.1,u,D.b8,0,2,1,0,0))
u=w.gdk().z
v=C.cx()
A.d.G(u,C.iJ(A.bf,!1,w.gpy().d.l(),A.az,18,A.bg,A.I,0.07,v,"Document Header",0,D.d8,0.9,0.05,0.02))},
$S:0}
C.ebU.prototype={
$0(){var w,v=this.a,u=v.gdk().z,t=C.cx()
A.d.G(u,C.BH(v.gpy().c.j(0.12).l(),0.1,t,D.b8,0,2,1,0,0.9))
t=v.gdk().z
u=C.cx()
w=C.byJ()
A.d.G(t,C.iJ(A.L,!1,v.gpy().e.l(),A.az,12,A.bg,A.a0,0.06,u,"Footer \xb7 "+w,0,D.d8,0.9,0.05,0.92))},
$S:0}
C.ebV.prototype={
$0(){A.d.G(this.a.gdk().z,C.BH(1727914055,0.12,C.cx(),D.b8,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ebW.prototype={
$0(){var w=4279310375
A.d.G(this.a.gdk().z,C.BH(w,0.08,C.cx(),D.b8,w,2,0.5,0.2,0.4))},
$S:0}
C.ebX.prototype={
$0(){var w=this.a,v=w.gdk().z,u=C.cx()
A.d.G(v,C.BH(w.gpy().c.j(0.35).l(),0.12,u,D.B5,4280640491,2,0.2,0.15,0.55))
A.d.G(w.gdk().z,C.iJ(A.bf,!1,4279310375,A.az,18,A.bg,A.a0,0.15,C.cx(),"Important note",0,D.pm,0.5,0.38,0.52))},
$S:0}
C.ebY.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.BH(4294507260,0.78,C.cx(),D.b8,4291548641,1.5,0.84,0.08,0.1))
A.d.G(w.gdk().z,C.iJ(A.bf,!1,4279179050,A.az,16,A.bg,A.a0,0.7,C.cx(),"MEMO\n\nTo:\nFrom:\nDate: "+C.byJ()+"\n\nSubject:\n\nBody text\u2026",0,D.d8,0.76,0.12,0.14))},
$S:0}
C.ebZ.prototype={
$0(){var w=this.a
A.d.G(w.gdk().z,C.BH(4294897802,0.28,C.cx(),D.b8,4294626325,2,0.3,0.62,0.12))
A.d.G(w.gdk().z,C.iJ(A.bf,!1,4285611794,A.az,15,A.bg,A.a0,0.24,C.cx(),"Sticky note",0,D.aAa,0.26,0.64,0.14))},
$S:0}
C.ec_.prototype={
$0(){var w=4280640491,v=this.a
A.d.G(v.gdk().z,C.BH(4293060848,0.04,C.cx(),D.b8,4291548641,2,0.8,0.1,0.48))
A.d.G(v.gdk().z,C.BH(w,0.04,C.cx(),D.b8,w,2,0.55,0.1,0.48))},
$S:0}
C.ec0.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.iJ(A.bf,!1,w,A.az,18,A.bg,A.a0,0.62,C.cx(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.G5,0.42,0.06,0.18))
A.d.G(v.gdk().z,C.iJ(A.bf,!1,w,A.az,18,A.bg,A.a0,0.62,C.cx(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.td,0.42,0.52,0.18))},
$S:0}
C.ec1.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.BH(858088427,0.62,C.cx(),D.b8,4280640491,2,0.42,0.05,0.18))
A.d.G(v.gdk().z,C.BH(856004201,0.62,C.cx(),D.b8,4278556265,2,0.42,0.53,0.18))
A.d.G(v.gdk().z,C.iJ(A.bf,!1,w,A.az,20,A.bg,A.I,0.1,C.cx(),"Option A",0,D.d8,0.36,0.08,0.2))
A.d.G(v.gdk().z,C.iJ(A.bf,!1,w,A.az,20,A.bg,A.I,0.1,C.cx(),"Option B",0,D.d8,0.36,0.56,0.2))},
$S:0}
C.ec3.prototype={
$0(){var w=4279310375,v=this.a
A.d.G(v.gdk().z,C.BH(4294967295,0.36,C.cx(),D.b8,w,2,0.24,0.38,0.28))
A.d.G(v.gdk().z,C.iJ(A.L,!1,w,A.az,14,A.bg,A.a0,0.12,C.cx(),"[ QR CODE ]",0,D.d8,0.24,0.38,0.4))},
$S:0}
C.ec4.prototype={
$0(){return C.c8N(this.b,D.P1,this.a.gpy())},
$S:0}
C.edn.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a2P.q(0,d),t=this.a
return t.b2s(d,v===d,A.aW,this.c,new C.edm(t,u,d,w),u)},
$S:z+25}
C.edm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bzv(r,new C.edl(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.edl.prototype={
$0(){return this.a.cZ(new C.edk(this.b,this.c))},
$S:0}
C.edk.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ebI.prototype={
$0(){var w,v=this.a,u=v.gpy(),t=C.qR(4294967295,null,0,0,null,C.cx(),D.m6,"","","",D.d8),s=this.b
C.c8N(t,s,u)
w=v.gdk()
if(w!=null&&s!==D.B4){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ecq.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.hPm(p,q.d,s,new C.ecp(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.rI(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ecp.prototype={
$1(d){return this.beI(d)},
beI(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.n(new C.eco(t,d))
w=2
return B.b(t.rI(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eco.prototype={
$0(){var w,v,u
for(w=J.aU(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.ecr.prototype={
$0(){return this.a.bC2()},
$S:0}
C.ecs.prototype={
$0(){return this.a.aM0("Class Presentation",!0)},
$S:0}
C.ect.prototype={
$1(d){return this.a.bCZ(d.b,this.b,d.a)},
$S:z+88}
C.ed3.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bO,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.efe.prototype={
$1(d){return new B.C(new B.M(0,0,0,B.aG(d,A.eo,x.w).w.f.d),new B.ed(new C.efd(this.a,this.b),null),null)},
$S:57}
C.efd.prototype={
$2(d,e){return B.p6(new C.efc(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:1698}
C.efc.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aG:A.c,s=B.H(u?A.bG:A.aJ,A.r,1),r=B.p(v,v,A.h,v,v,new B.o(A.be,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.u(B.a([A.T,r,new B.C(A.acP,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bG(!1,A.yj,v,v,!0,v,v,new C.efa(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.D(B.cK(B.a([p.aOD(u,!0,!0,new C.efb(p,w.d))],q),e,D.bez,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.h,v,v,new B.o(t,v,s,A.kh,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.efa.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.efb.prototype={
$0(){this.b.$1(new C.ef8())
var w=this.a
if(w.c!=null)w.n(new C.ef9())},
$S:0}
C.ef8.prototype={
$0(){},
$S:0}
C.ef9.prototype={
$0(){},
$S:0}
C.egN.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.egO.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d5(B.e5(A.B,new C.aw_(this.a,null),0.94+w*0.06,null,null),w)},
$S:445}
C.egP.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.egQ.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d5(B.e5(A.B,new C.b9f(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:445}
C.egR.prototype={
$0(){return A.d.ck(this.a.d,0,C.TY(this.b))},
$S:0}
C.ebN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.ar(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.72)],t):B.a([A.c.j(0.88),A.oI.j(0.75)],t)
r=B.H(A.bc.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.bc.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.H(A.bc.j(0.45+q),A.r,1)
t=B.p(p,B.V(Z.WW,u?A.aj:A.M,p,p,p,28),A.h,p,p,new B.o(p,p,q,p,p,new B.bS(A.B,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bv(o,B.tk(A.fe,B.p(p,B.u(B.a([t,A.ay,q,A.ar,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.h,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.em,p,p,1/0),14,!1),A.ap)},
$S:584}
C.ecS.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ecT.prototype={
$1(d){return d.length!==0},
$S:3}
C.ecU.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.k0
else{w=B.ad("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.Xv:A.A_}return w},
$S:673}
C.ecX.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dG.ar(0,A.k.J(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aG.j(0.78)],s):B.a([A.c.j(0.92),A.mk.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.H(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.V(C.kg(v.w)?A.uo:A.p7,A.c,l,l,l,22),A.h,l,l,new B.o(l,l,l,q,l,new B.a8(A.a1,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.O7(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.O7(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.O7(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.O7(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.O7(v.f)
r=k.bCX(n,A.d.gI(r),t)
return B.p(l,B.bv(j,new B.a5K(B.aD(!1,A.X,!0,l,B.aH(!1,l,!0,B.p(l,B.dK(!1,A.JM,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.V(A.np,t?A.aA:A.bP,l,l,l,l),l,l,l,new C.ecV(k,v,t),l,l,l,l,"Project options",l),l),A.h,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.ecW(k,v),l,l,l,l,l,l,l),A.h,A.K,0,l,l,l,l,l,A.ac),l),A.ap),A.h,l,l,l,l,l,l,A.d7,l,l,l,l)},
$S:90}
C.ecW.prototype={
$0(){return this.a.ac8(this.b)},
$S:0}
C.ecV.prototype={
$0(){return this.a.zP(this.b,this.c)},
$S:0}
C.een.prototype={
$0(){var w=this.a
w.b15()
w.n(new C.eem())},
$S:0}
C.eem.prototype={
$0(){},
$S:0}
C.eeo.prototype={
$1(d){return this.a.ag9(this.b.a,d)},
$S:2}
C.eep.prototype={
$0(){this.a.cZ(new C.eel(this.b))},
$S:0}
C.eel.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.eeq.prototype={
$0(){this.a.cZ(new C.eek(this.b))},
$S:0}
C.eek.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.eer.prototype={
$0(){this.a.cZ(new C.eej(this.b))},
$S:0}
C.eej.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mb},
$S:0}
C.ees.prototype={
$0(){this.a.cZ(new C.eei(this.b))},
$S:0}
C.eei.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eet.prototype={
$0(){var w=this.a
w.cZ(new C.eeh(w,this.b))},
$S:0}
C.eeh.prototype={
$0(){var w=this.b
return w.as=this.a.bXb(w.as)},
$S:0}
C.eeu.prototype={
$0(){return this.a.cZ(new C.eeg(this.b))},
$S:0}
C.eeg.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eev.prototype={
$0(){return this.a.cZ(new C.eef(this.b))},
$S:0}
C.eef.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.ee8.prototype={
$0(){return this.a.a_N(this.b.a)},
$S:0}
C.ee9.prototype={
$0(){this.a.Yq()
return null},
$S:0}
C.eea.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bO,x.w).w.a.a<900)w.acr()
else w.n(new C.ee7(w))},
$S:0}
C.ee7.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eeb.prototype={
$0(){this.a.cZ(new C.ee6(this.b))},
$S:0}
C.ee6.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.eec.prototype={
$0(){return this.a.cZ(new C.ee5(this.b))},
$S:0}
C.ee5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.eed.prototype={
$0(){return this.a.cZ(new C.ee4(this.b))},
$S:0}
C.ee4.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eee.prototype={
$0(){return this.a.aw3(null)},
$S:0}
C.edg.prototype={
$0(){this.a.Cm()
return null},
$S:0}
C.edh.prototype={
$0(){this.a.a7u()
return null},
$S:0}
C.edj.prototype={
$1(d){return this.beJ(d)},
beJ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Iv(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.c0(A.aG,null,new C.edb(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.cZ(new C.edc(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.edd(r))
s=s.c.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.cZ(new C.ede(r))
s=s.c.F(x.q).f
s.P(B.b_(null,null,null,null,null,A.q,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.h4b(q,new C.Db(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.cZ(new C.edf(r,p))
s=s.c.F(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aet(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.P(B.b_(null,null,null,null,null,A.q,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.S,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.edb.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.dMp],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bw3:r
q.push(B.dK(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eda(d,t),!1,r,r,r,r,r,r,r,new B.w(""+t+" seconds",r,A.di,r,r,r,r,r,r,r,r,r),r,s,r))}return B.br(!0,B.u(q,A.m,r,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:34}
C.eda.prototype={
$0(){B.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.edc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edd.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ede.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.edf.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.edi.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.yE(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.yE(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.yE(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aet(r?t:s.db)
s=s==null?t:s.b
return B.a([D.dQb,q,v,u,B.yE(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:127}
C.ehy.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byG(w,v)}},
$S:0}
C.ehz.prototype={
$0(){this.a.Cm()
return null},
$S:0}
C.eey.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bFc:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aQ:A.bB
return new B.C(A.hd,B.aJ(u,B.dg(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b9,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lm,u,u,u),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eex(t,d),u,u,u,u,u,u,!1,A.ae),u)},
$S:128}
C.eex.prototype={
$0(){var w=this.a
return w.n(new C.eew(w,this.b))},
$S:0}
C.eew.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eez.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a_i:E.ar7
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbGd():t.gbCn()
return B.hI(B.aJ(u,B.p(u,D.ahu,A.h,u,u,new B.o(u,u,u,u,B.a([new B.aa(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a1,A.a7,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.z,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.ae),u,s,u,u)},
$S:1701}
C.eeA.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.hOD(v,w.a.c)},
$S:0}
C.efX.prototype={
$0(){return this.b.um(this.a.a)},
$S:0}
C.efY.prototype={
$0(){return this.a.um(D.m6)},
$S:0}
C.efZ.prototype={
$0(){return this.a.um(D.G3)},
$S:0}
C.eg9.prototype={
$0(){return this.a.um(D.G4)},
$S:0}
C.egk.prototype={
$0(){return this.a.um(D.G2)},
$S:0}
C.egv.prototype={
$0(){return this.a.pk("lab_report")},
$S:0}
C.egC.prototype={
$0(){return this.a.pk("rubric")},
$S:0}
C.egD.prototype={
$0(){return this.a.pk("minutes")},
$S:0}
C.egE.prototype={
$0(){return this.a.pk("agenda")},
$S:0}
C.egF.prototype={
$0(){return this.a.pk("timeline")},
$S:0}
C.egG.prototype={
$0(){return this.a.pk(this.b.a)},
$S:0}
C.eg_.prototype={
$0(){this.a.TM()
return null},
$S:0}
C.eg0.prototype={
$0(){this.a.TG()
return null},
$S:0}
C.eg1.prototype={
$0(){return this.a.pk("table")},
$S:0}
C.eg2.prototype={
$0(){return this.a.pk("sticky")},
$S:0}
C.eg3.prototype={
$0(){return this.a.pk("divider")},
$S:0}
C.eg4.prototype={
$0(){return this.a.pk("header_bar")},
$S:0}
C.eg5.prototype={
$0(){return this.a.ol(D.b8)},
$S:0}
C.eg6.prototype={
$0(){return this.a.ol(D.ey)},
$S:0}
C.eg7.prototype={
$0(){return this.a.ol(D.jj)},
$S:0}
C.eg8.prototype={
$0(){return this.a.ol(D.B5)},
$S:0}
C.ega.prototype={
$0(){return this.a.ol(D.jk)},
$S:0}
C.egb.prototype={
$0(){return this.a.ol(D.kE)},
$S:0}
C.egc.prototype={
$0(){return this.a.ol(D.fb)},
$S:0}
C.egd.prototype={
$0(){this.a.FW()
return null},
$S:0}
C.ege.prototype={
$0(){this.a.LH()
return null},
$S:0}
C.egf.prototype={
$0(){return this.a.pk("quote")},
$S:0}
C.egg.prototype={
$0(){return this.a.a5H()},
$S:0}
C.egh.prototype={
$0(){this.a.Yv()
return null},
$S:0}
C.egi.prototype={
$0(){var w=this.a
return w.n(new C.efN(w))},
$S:0}
C.efN.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.egj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.nu(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.n(new C.efV(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efV.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.egl.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jl()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a2Q.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.be
u=B.a([B.p(s,s,A.h,s,s,new B.o(s,s,B.H(t,A.r,v?2.5:1),s,s,new B.a8(A.a1,A.a7,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a2Q.q(0,q))u.push(B.an(s,B.p(s,D.Lm,A.h,s,s,D.Cl,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.hd,B.aJ(s,B.hI(new B.am(A.V,s,A.a9,A.h,u,s),s,w,s,s),A.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.efU(r,d),s,s,s,s,s,s,!1,A.ae),s)},
$S:z+89}
C.efU.prototype={
$0(){this.a.a5Z(this.b)
return null},
$S:0}
C.egm.prototype={
$0(){this.a.a5Y(this.b)
return null},
$S:0}
C.egn.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hlp(d),p=this.a,o=B.m(8),n=p.gdk()
n=n==null?r:n.x
w=d.a
n=n===w?A.bh:A.be
v=p.gdk()
n=B.H(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.qR(4294967295,r,0,0,r,"preview_"+w,D.pl,"","","",D.d8)
C.h19(s,w)
w=x.p
u=B.a([B.bv(o,B.p(r,B.bv(t,C.h2t(s),A.ap),A.h,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.an(r,B.p(r,D.ai2,A.h,r,r,D.Cl,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jY,B.aJ(r,B.u(B.a([new B.am(A.V,r,A.a9,A.q,u,r),A.d4,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.al,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.efT(p,q,d),r,r,r,r,r,r,!1,A.ae),r)},
$S:z+90}
C.efT.prototype={
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
return B.b(s.nu(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.cZ(new C.efJ(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.efJ.prototype={
$0(){return C.h19(this.a,this.b.a)},
$S:0}
C.efW.prototype={
beK(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a2P.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.beK(d,e)},
$S:z+91}
C.egH.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("J<1,r>")
v=B.z(new B.J(d,new C.egJ(this.a,e,g,this.b,f),v),v.k("ai.E"))
return B.ch(B.B(v,A.m,w,A.e,A.j,0,w,w),A.q,w,A.z,w,w,w,w,A.aY)},
$S:z+92}
C.egJ.prototype={
$1(d){var w=this
return w.a.b2s(d,w.b===d,w.c,w.d,new C.egI(w.e,d),!D.a2P.q(0,d))},
$S:z+25}
C.egI.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ego.prototype={
$1(d){this.b.$2(d,new C.efS(this.a,d,this.c))
return null},
$S:z+26}
C.efS.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bzv(u,new C.efI(v,this.c,w),w)},
$S:0}
C.efI.prototype={
$0(){return this.a.cZ(new C.efG(this.b,this.c))},
$S:0}
C.efG.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.egp.prototype={
$1(d){this.b.$2(d,new C.efR(this.a,d))
return null},
$S:z+26}
C.efR.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fwa(u,new C.efH(v,w),w)},
$S:0}
C.efH.prototype={
$0(){var w=this.a
return w.cZ(new C.efF(w,this.b))},
$S:0}
C.efF.prototype={
$0(){return this.a.gdk().r=this.b},
$S:0}
C.egq.prototype={
$0(){var w=this.a
return w.n(new C.efQ(w))},
$S:0}
C.efQ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.egr.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.byG(w,v)}},
$S:0}
C.egs.prototype={
$0(){this.a.GI()
return null},
$S:0}
C.egt.prototype={
$0(){return this.a.a5H()},
$S:0}
C.egu.prototype={
$0(){var w=this.a,v=w.jl()
if(v!=null&&v.b===D.cJ)w.cZ(new C.efP(v))},
$S:0}
C.efP.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.egw.prototype={
$0(){this.a.Cm()
return null},
$S:0}
C.egx.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.DX(v,!0)
return null},
$S:0}
C.egy.prototype={
$0(){this.a.cZ(new C.efO(this.b))},
$S:0}
C.efO.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cp:A.O},
$S:0}
C.egz.prototype={
$0(){this.a.cZ(new C.efM(this.b))},
$S:0}
C.efM.prototype={
$0(){var w=this.a
return w.y=w.y===A.cx?A.bg:A.cx},
$S:0}
C.egA.prototype={
$0(){this.a.cZ(new C.efL(this.b))},
$S:0}
C.efL.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.az:A.mb},
$S:0}
C.egB.prototype={
$0(){this.a.cZ(new C.efK(this.b))},
$S:0}
C.efK.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ecl.prototype={
$1(d){return this.beH(d)},
beH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.nu(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.cZ(new C.eck(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:179}
C.eck.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eh3.prototype={
$0(){var w=this.a
return w.cZ(new C.eh2(w,this.b))},
$S:0}
C.eh2.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eh4.prototype={
$0(){var w=this.a
return w.cZ(new C.eh1(w,this.b))},
$S:0}
C.eh1.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.edt.prototype={
$0(){return this.a.cZ(new C.eds(this.b))},
$S:0}
C.eds.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.edu.prototype={
$0(){return this.a.cZ(new C.edr(this.b))},
$S:0}
C.edr.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ee0.prototype={
$1(d){var w=x.gh
w=B.z(new B.J(D.ajG,new C.ee_(),w),w.k("ai.E"))
return w},
$S:z+94}
C.ee_.prototype={
$1(d){var w=null
return B.yE(B.d(d.b,w,w,w,w,w,w,A.mV,w,w,w),48,d,x.fO)},
$S:z+95}
C.ehg.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a3(v,w?8:0,null,null)},
$S:35}
C.ehf.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.jG()?q:new C.ehd(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bh
else v=r.d?A.be:A.cr
v=B.H(v,A.r,o?2:1)
u=r.d?A.d3:A.c
t=B.bW(0,C.h2t(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aJ(q,B.p(q,new B.am(A.V,q,A.a9,A.q,B.a([t,B.an(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nE,q,q,q),A.h,q,q,new B.o(A.aV,q,q,s,q,q,A.n),q,q,q,q,A.adH,q,q,q),q,q,4,q,q,q)],x.p),q),A.h,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.z,!1,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ehe(p,e),q,q,q,q,q,q,!1,A.ae)},
$S:76}
C.ehe.prototype={
$0(){var w=this.a
return w.n(new C.eh9(w,this.b))},
$S:0}
C.eh9.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.IE()},
$S:0}
C.ehd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.c0(null,null,new C.eha(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.n(new C.ehb(q,s))
q.aNo()}else if(r==="del"){q=t.a
q.n(new C.ehc(q,s))
q.aMB()}else if(r==="up")t.a.aYP(s,s-1)
else if(r==="down")t.a.aYP(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eha.prototype={
$1(d){var w=null,v=B.a([B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxH,w,w,w,w,new C.eh5(d),!1,w,w,w,w,w,w,w,D.eLF,w,w,w),B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bxA,w,w,w,w,new C.eh6(d),!1,w,w,w,w,w,w,w,A.vd,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.bwS,w,w,w,w,new C.eh7(d),!1,w,w,w,w,w,w,w,D.eT6,w,w,w))
if(u<this.b.r.length-1)v.push(B.dK(!1,w,w,w,!0,w,w,w,!0,w,D.byS,w,w,w,w,new C.eh8(d),!1,w,w,w,w,w,w,w,D.eLu,w,w,w))
return B.br(!0,B.u(v,A.m,w,A.e,A.R,0,A.p),!0,!1,A.ag,!0,!0)},
$S:34}
C.eh5.prototype={
$0(){B.a7(this.a,!1).K("dup")
return null},
$S:0}
C.eh6.prototype={
$0(){B.a7(this.a,!1).K("del")
return null},
$S:0}
C.eh7.prototype={
$0(){B.a7(this.a,!1).K("up")
return null},
$S:0}
C.eh8.prototype={
$0(){B.a7(this.a,!1).K("down")
return null},
$S:0}
C.ehb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehh.prototype={
$0(){return this.a.a5H()},
$S:0}
C.ecL.prototype={
$0(){var w=this.a
w.b15()
w.aw3(null)},
$S:0}
C.ecK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.aa(0,A.G,A.w.j(0.35),A.dl,24)],x.V),m=this.b
if(m.f!=null){w=B.aX(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.aX(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.aX(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.aX(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aC,A.x,B.a([r,B.aX(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bv(s,B.bQ(A.ka,new B.o(m.f==null?B.aX(m.e):p,p,p,p,p,r,A.n),A.b7),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.J(r,new C.ecJ(this.a,e.b,e.d,q),B.T(r).k("J<1,r>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a0,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.bQ(new B.am(A.V,p,A.a9,A.h,s,new B.cv("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.b7)},
$S:442}
C.ecJ.prototype={
$1(d){var w=this
return w.a.byp(d,w.b,w.c,w.d)},
$S:z+23}
C.ecy.prototype={
$0(){var w=this
if(w.b){w.a.LQ(w.c)
return}if(w.d){w.a.a5F(w.c)
return}if(w.e){w.a.adL(w.c)
return}if(w.f)w.a.b1E(w.c)},
$S:0}
C.ecz.prototype={
$0(){this.a.LQ(this.b)
return null},
$S:0}
C.ecA.prototype={
$0(){return this.a.a_N(this.b.a)},
$S:0}
C.ecB.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.n(new C.ecx(u,d,w.c,w.d))
v.Gm()
v.nB()
v.oz()},
$S:18}
C.ecx.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ecC.prototype={
$1(d){return this.a.ag9(this.b.a,d)},
$S:2}
C.ecE.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fHt(w))u.a.LQ(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b1E(v)},
$S:0}
C.ecD.prototype={
$0(){return this.a.a_N(this.b.a)},
$S:0}
C.ecF.prototype={
$1(d){var w=this,v=w.a
v.n(new C.ecw(w.b,d,w.c,w.d))
v.Gm()
v.nB()
v.oz()},
$S:18}
C.ecw.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cJ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ecG.prototype={
$1(d){var w=this.a
w.n(new C.ecv(this.b,d))
w.Gm()
w.nB()
w.oz()},
$S:242}
C.ecv.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cJ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.ecH.prototype={
$0(){var w=this.a
w.n(new C.ecu(this.b))
w.Gm()
w.nB()
w.oz()},
$S:0}
C.ecu.prototype={
$0(){this.a.r=C.h1Z()},
$S:0}
C.ecI.prototype={
$0(){return this.a.a_N(this.b.a)},
$S:0}
C.eeC.prototype={
$0(){var w=this.a
return w.n(new C.eeB(w))},
$S:0}
C.eeB.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eeD.prototype={
$1(d){return this.a.ct7(this.b.a,d)},
$S:2}
C.edH.prototype={
$1(d){var w
this.a.cZ(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.edI.prototype={
$1(d){return this.a.$1(new C.edG(this.b,d))},
$S:6}
C.edG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edJ.prototype={
$1(d){return this.a.$1(new C.edF(this.b,d))},
$S:6}
C.edF.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.edK.prototype={
$1(d){return this.a.$1(new C.edE(this.b,d))},
$S:6}
C.edE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.edL.prototype={
$1(d){return this.a.$1(new C.edD(this.b,d))},
$S:6}
C.edD.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.edM.prototype={
$1(d){return this.a.$1(new C.edC(this.b,d))},
$S:6}
C.edC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.edN.prototype={
$1(d){return this.b.$1(new C.edB(this.a,this.c))},
$S:9}
C.edB.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.edO.prototype={
$1(d){return this.b.$1(new C.edA(this.a,this.c))},
$S:9}
C.edA.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.edP.prototype={
$1(d){var w=null,v=this.b,u=B.aX(d),t=v.Q===d,s=t?A.bh:A.cS
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(u,w,B.H(s,A.r,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edz(this.a,v,d),w,w,w,w,w,w,!1,A.ae)},
$S:440}
C.edz.prototype={
$0(){return this.a.$1(new C.edw(this.b,this.c))},
$S:0}
C.edw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.edQ.prototype={
$1(d){return this.a.$1(new C.edy(this.b,d))},
$S:1702}
C.edy.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.edR.prototype={
$1(d){var w=null
return B.aJ(w,B.p(w,w,A.h,w,w,new B.o(B.aX(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.z,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.edx(this.a,this.b,d),w,w,w,w,w,w,!1,A.ae)},
$S:440}
C.edx.prototype={
$0(){return this.a.$1(new C.edv(this.b,this.c))},
$S:0}
C.edv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.edS.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a7(w,!1).pI()}else w=!1
if(w){w=v.a.c
w.toString
B.a7(w,!1).eD()}v.a.ap3()},
$S:0}
C.edV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dG.ar(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.bc,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.H(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.V(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.H(u,A.r,1.2)
r.push(B.an(2,B.p(n,B.V(A.rZ,u,n,n,n,10),A.h,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mz,n,n,n),n,n,n,2,n,n))
return B.aD(!1,A.X,!0,n,B.aH(!1,m,!0,B.eq(new B.a3(48,48,new B.am(A.B,n,A.a9,A.q,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.h,A.K,0,n,A.K,n,n,n,A.ac)},
$S:125}
C.ebu.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dG.ar(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.bc,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.H(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.H(A.c.j(0.4+w*0.15),A.r,1)
return B.aD(!1,A.X,!0,p,B.aH(!1,o,!0,B.eq(B.u(B.a([B.e5(A.B,B.p(p,B.V(q.d,A.c,p,p,p,26),A.h,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ab,B.d(q.e,p,p,p,p,p,p,A.jN,A.L,p,p)],x.p),A.m,p,A.b5,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.DC,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.h,A.K,0,p,A.K,p,p,p,A.ac)},
$S:125}
C.efz.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aK(w,A.U,!0,w,!0,A.q,w,B.aL(),u,w,w,w,w,w,2,A.aiT,A.z,!0,w,!0,w,!1,w,A.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.am,w,w,w,w)
return B.eo(B.a([B.bG(!1,A.dd,w,w,!0,w,w,new C.efx(d),w,w),B.bH(A.pB,new C.efy(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.efx.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.efy.prototype={
$0(){var w=this.b.a.a
B.a7(this.a,!1).K(w)
return null},
$S:0}
C.cV6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dG.ar(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ex.ar(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.ar(0,i)
v=B.m(22)
t=B.aq(A.aI,A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI),w*0.35)
t.toString
t=B.H(t,A.r,1.2)
s=x.V
r=B.a([new B.aa(w*2,A.G,A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI).j(0.18+w*0.12),A.J,32+w*10),D.a71],s)
q=B.m(22)
p=x.O
o=B.an(k,B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bS(A.b3,0.9,A.x,k,0,B.a([A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI).j(0.28+w*0.14)
p=B.p(k,k,A.h,k,k,new B.o(k,k,k,k,k,new B.bS(A.B,0.5,A.x,k,0,B.a([m,A.d.gai(C.kg(j.a.c.w)?D.t5:M.mI).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kg(m)?D.t5:M.mI
s=B.a([new B.aa(0,A.G,A.d.gI(C.kg(m)?D.t5:M.mI).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.e5(A.B,B.p(k,B.V(C.kg(j.a.c.w)?A.uo:A.p7,A.c,k,k,k,22),A.h,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.am(A.B,k,A.a9,A.q,l,k),A.T,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.I,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fW,B.d(j.a.c.b,k,2,A.Z,k,k,k,D.eEg,A.L,k,k),A.au,B.d(j.gcoh(),k,k,k,k,k,k,D.eIG,A.L,k,k),A.ay],m)
p=j.a.c
if(p.z){p=p.gQr()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kg(j.a.c.w)?D.t5:M.mI).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ab],m))}s.push(new C.I8(A.wL,"Download PDF","pdf",A.dg,j.Hx(0),!1,k))
p=j.a.c
if(!p.z||p.gQr()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I8(A.ky,"Transfer to "+C.h20(p==null?"":p),"transfer_hati",A.aS,j.Hx(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Hx(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.ar,new C.I8(D.bpn,"Rename presentation","rename",A.c9,n,!1,k),A.ar,new C.I8(A.afh,"Duplicate","duplicate",A.b0,j.Hx(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.P)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.I8(A.e4,"Delete presentation","delete",A.aH,j.Hx(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Hx(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Hx(n)
s.push(B.dO(B.d5(B.bG(!1,E.aKt,k,k,!0,k,k,new C.cV5(d),k,B.fo(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,A.as,k,D.bhE,k,k,k,k,k,A.k3,k,k)),n),new B.v(0,(1-p)*8)))
return B.e5(A.B,B.d5(B.aD(!1,A.X,!0,k,B.p(k,B.bv(q,new B.am(A.V,k,A.a9,A.q,B.a([o,new B.C(D.bgN,B.u(s,A.m,k,A.e,A.R,0,A.p),k)],m),k),A.ap),A.h,k,A.Sm,new B.o(A.aG,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.h,A.K,0,k,k,k,k,k,A.ac),i),0.88+u*0.12,k,k)},
$S:44}
C.cV5.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.cVs.prototype={
$0(){B.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cVt.prototype={
$0(){B.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cV3.prototype={
$1(d){var w=this.a
return w.n(new C.cV_(w))},
$S:23}
C.cV_.prototype={
$0(){return this.a.d=!0},
$S:0}
C.cV4.prototype={
$1(d){var w=this.a
return w.n(new C.cUZ(w))},
$S:53}
C.cUZ.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cV2.prototype={
$0(){var w=this.a
return w.n(new C.cV0(w))},
$S:0}
C.cV0.prototype={
$0(){return this.a.d=!1},
$S:0}
C.cV1.prototype={
$0(){var w=this.a.a.e
B.a7(this.b,!1).K(w)
return null},
$S:0}
C.eie.prototype={
$0(){return $.bgG=!$.bgG},
$S:0}
C.ei4.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaQs())u.asQ()},
$S:0}
C.eid.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ei5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ei6.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.asQ()},
$S:0}
C.ei0.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ei1.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ei2.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ei3.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.J(w-1+v,v)},
$S:0}
C.eib.prototype={
$2(d,e){var w=B.z(e,x.l)
if(d!=null)w.push(d)
return new B.am(A.B,null,A.aX,A.q,w,null)},
$S:1703}
C.eic.prototype={
$2(d,e){var w
if(e.gc0(e)===A.hB)return new B.d_(e,!1,d,null)
w=this.a
return w.cmm(w.e,d,e)},
$S:446}
C.ei7.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.fk((1-v.gt(0))*1.5708)
return B.fl(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.ei8.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.001
v=this.a
w.jw((1-v.gt(0))*1.5708)
return B.fl(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.ei9.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.002
v=this.a
w.fk(v.gt(0)*0.8)
w.jw(v.gt(0)*0.35)
return B.fl(A.B,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.eia.prototype={
$2(d,e){var w=B.de(),v=w.a
v.$flags&2&&B.ah(v)
v[11]=0.0025
v=this.a
w.fk(-v.gt(0)*1.2)
return B.fl(A.a7,B.d5(e,v.gt(0)),null,w,!0)},
$S:44}
C.eif.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gWN().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gWN().x
t===$&&B.c()
return new C.aYG(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.H7(v.c,t,!0,new B.cv("cine"+u,x.W))},
$S:656}
C.eih.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bO,x.w).w.a.a*0.55)w.asQ()
else w.cbh()},
$S:53}
C.eig.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.fn6.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:447}
C.fnf.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.eo(B.a([B.bG(!1,A.dd,w,w,!0,w,w,new C.fnc(d),w,w),B.bG(!1,D.eZO,w,w,!0,w,w,new C.fnd(d,this.b,v),w,w),B.bH(A.aKJ,new C.fne(d,v,this.c),w)],x.p),w,w,L.rj,new B.a3(320,w,t,w),w,w,w,w,D.f07,w)},
$S:20}
C.fnc.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.fnd.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
C.fI7(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fne.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a7(u.a,!1).K(null)
t=u.b
w=2
return B.b(C.aML(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aMa(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fn5.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.c8Q.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fnb.prototype={
$1(d){return d.ac()},
$S:z+14}
C.eY5.prototype={
$1(d){return C.fI5(C.TY(B.Z(d,x.N,x.z)),this.a)},
$S:z+96}
C.fvq.prototype={
$3(d,e,f){return A.bF},
$C:"$3",
$R:3,
$S:92}
C.fvr.prototype={
$4(d,e,f,g){var w=A.co.ar(0,e.gt(0))
return B.d5(B.e5(A.B,D.fco,0.94+w*0.06,null,null),w)},
$S:445}
C.fvs.prototype={
$1(d){var w=this
return new C.U_(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ehL.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ehH.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ehK.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.U0(u,this.b,w.gaJZ(),v,null)},
$S:z+99}
C.ehI.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ehJ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ehM.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ehN.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ehQ.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ehR.prototype={
$0(){var w=this.a
return w.n(new C.ehP(w))},
$S:0}
C.ehP.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ehS.prototype={
$0(){var w=this.a
return w.n(new C.ehO(w))},
$S:0}
C.ehO.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ehT.prototype={
$1(d){return this.a.bCY(d,this.b)},
$S:z+100}
C.ehG.prototype={
$0(){var w=this.a
return w.n(new C.ehF(w,this.b))},
$S:0}
C.ehF.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ehU.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ehV.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ehW.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ehX.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ehY.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fB(new B.fu(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.F(x.q).f.P(D.erq)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ebo.prototype={
$0(){var w=this.a
if(w.c!=null)w.n(new C.ebn())},
$S:0}
C.ebn.prototype={
$0(){},
$S:0}
C.ebp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.ft()},
$S:8}
C.ebk.prototype={
$1(d){return this.a.n(new C.ebj())},
$S:2}
C.ebj.prototype={
$0(){},
$S:0}
C.ebl.prototype={
$1(d){return this.a.aUR()},
$S:2}
C.ebm.prototype={
$0(){B.a7(this.a,!1).K(null)
return null},
$S:0}
C.ei_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.ehZ(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ehZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fhq.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.an(w,new B.en(new B.k1(this.c,new C.fhp(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:206}
C.fhp.prototype={
$3(d,e,f){return new C.H7(e,!1,!1,new B.cv(e.a,x.W))},
$S:z+102}
C.fhr.prototype={
$1(d){var w=null
return B.nU(!1,B.as(new C.bqY(this.a,this.b,w),w,w,w),w,x.z)},
$S:266}
C.fhv.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aS.gm4(),$async$$0)
case 3:w=4
return B.b(B.bK(A.oW,null,x.H),$async$$0)
case 4:w=5
return B.b($.aS.gm4(),$async$$0)
case 5:s=$.aS.ae$.x.h(0,t.a)
r=s==null?null:s.gb3()
if(!(r instanceof B.q0))throw B.P("Could not draw the slide.")
u=r.lP(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1706}
C.fhw.prototype={
bff(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hf(A.fI),$async$$1)
case 3:r=f
if(r==null)throw B.P("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hB([J.f1(A.dz.gaL(r))],"image/png"))
t.toString
s=Ai.fzb(t)
w=4
return B.b(new B.pv(s,"load",!1,x.ev).gI(0).cJ(0,A.ko),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bff(d)},
$S:1707}
C.fhs.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:141}
C.fht.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fB(0)},
$S:141}
C.fhu.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.eSt.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.eAZ,A.L,w,w)},
$S:1708}
C.eSu.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bv(v,B.mR(A.bj,w,A.dN,8,w,e===0?w:e,w),A.ap)},
$S:565}
C.e1W.prototype={
$1(d){this.a.XT()
return null},
$S:14}
C.e1U.prototype={
$0(){return this.a.e=D.bcQ},
$S:0}
C.e1V.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bu
return this.b.e=w},
$S:0}
C.cbp.prototype={
$1(d){return A.o.dq(1,d.a)},
$S:z+103}
C.cbq.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aIQ.prototype
w.bpH=w.p
w=C.aIj.prototype
w.bp9=w.p
w=C.aI5.prototype
w.boV=w.p
w=C.aIi.prototype
w.bp8=w.p
w=C.aIO.prototype
w.bpF=w.p
w=C.aK6.prototype
w.br7=w.p
w=C.aH0.prototype
w.bnN=w.p
w=C.aJ1.prototype
w.bpT=w.p
w=C.aJ2.prototype
w.bpU=w.p
w=C.b_l.prototype
w.bkt=w.az2})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"hMD","akZ",104)
v(C.aG0.prototype,"gbXw","WU",0)
var r
u(r=C.auO.prototype,"gcnD","cnE",38)
v(r,"gbYg","aaE",0)
v(r=C.auK.prototype,"gaTJ","CP",3)
v(r,"gbYd","bYe",3)
v(r,"gat7","wL",0)
v(r,"gat8","Hf",0)
t(C,"hN1","hjc",105)
v(C.aAM.prototype,"gc_6","c_7",3)
s(C,"hNc",0,null,["$4$paper$photo$request$template"],["fow"],106,0)
s(C,"hNb",0,null,["$5$doc$history$instruction$photo$template"],["by0"],107,0)
v(r=C.aB4.prototype,"gc_O","Hu",0)
v(r,"gbCq","UN",0)
v(r,"gc_R","abk",0)
v(r,"gc_Q","XF",0)
v(r,"gaUz","D3",0)
v(C.aB8.prototype,"gc_T","XH",0)
v(r=C.aCq.prototype,"gaUJ","O3",0)
v(r,"gcfW","aYV",3)
v(r,"gcp0","axh",86)
v(r,"gbG4","a7y",0)
v(r,"gc0j","zs",0)
v(r=C.aEk.prototype,"gca5","YY",0)
v(r,"gcad","Z0",0)
v(r,"gbvy","a64",0)
v(r,"gc0n","abu",0)
v(C.aEj.prototype,"gc0o","abv",0)
v(C.ayq.prototype,"gbuy","a5S",0)
v(C.awR.prototype,"gc0p","XS",0)
w(C,"hNp","hLk",12)
w(C,"hNn","hIi",12)
w(C,"hNo","hKk",12)
v(r=C.aBl.prototype,"gcs2","cs3",3)
v(r,"gced","cee",3)
u(r,"gD9","ac8",7)
v(r,"gbA4","aof",3)
u(r,"gDa","aVZ",7)
v(r,"gc2w","abR",0)
v(r,"gc1n","abQ",0)
v(r,"gc4D","ac9",0)
v(r,"gbCn","a79",0)
v(r,"gc5v","Yq",0)
v(r,"gc5w","acq",0)
v(r,"gc61","acx",0)
v(r,"gc4Q","acc",0)
v(r,"gbGd","a7C",0)
v(r,"gaNn","aNo",3)
v(r,"gaMA","aMB",3)
v(r,"gaIj","aIk",3)
v(r,"gaMz","ap3",3)
u(r,"gbuP","buQ",80)
v(r,"gawR","b0U",3)
v(r,"gc1p","c1q",3)
v(r,"gbR1","bR2",3)
v(r,"gbEO","bEP",3)
v(r=C.aBo.prototype,"gcr0","cr1",3)
v(r,"gcqG","cqH",3)
t(C,"hNq","hLB",2)
v(r=C.aBm.prototype,"gc0v","Hz",0)
v(r,"gchQ","Pu",0)
v(r,"gc0s","Hy",0)
v(r,"gcti","a0p",0)
v(r,"gc6c","acE",0)
v(C.aBk.prototype,"gc0w","aUR",3)
v(r=C.aBn.prototype,"gbGZ","a7M",0)
u(r,"gc0t","c0u",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aB,[C.nq,C.PW,C.bD6,C.bBR,C.cqC,C.cqA,C.bIZ,C.b4Y,C.cqB,C.bAr,C.cbj,C.cbh,C.cbi,C.cbg,C.aq3,C.cbf,C.bJS,C.nS,C.aBW,C.j9,C.nd,C.a5J,C.yr,C.kY,C.o3,C.lJ,C.yt,C.nh,C.a5R,C.aos,C.aYH,C.e1l,C.kV,C.Dk,C.ek,C.iM,C.Db,C.wH,C.ex,C.ln,C.hR,C.js,C.a5S,C.acN,C.aYI,C.b_l,C.a0N])
u(B.kx,[C.cyq,C.bU_,C.fcD,C.czW,C.czi,C.fi9,C.dPn,C.dPm,C.e1Z,C.e1Y,C.fjy,C.eZb,C.eZc,C.c7d,C.c7e,C.c7f,C.e6m,C.eC9,C.eBx,C.eBw,C.eCA,C.eC7,C.eC0,C.eCj,C.eD_,C.f4P,C.eIR,C.eIQ,C.eJj,C.e1o,C.fn2,C.dL6,C.ftc,C.fjU,C.c8I,C.c8G,C.c8L,C.fko,C.fkp,C.fkq,C.fkr,C.c8s,C.c8t,C.dys,C.c8p,C.fkn,C.eQ1,C.dJi,C.c8i,C.e14,C.fhZ,C.eeZ,C.efn,C.efk,C.efj,C.efu,C.eft,C.egZ,C.egY,C.efd,C.efc,C.ebN,C.ecX,C.efW,C.ehg,C.ehf,C.ecK,C.edV,C.ebu,C.cV6,C.eib,C.eic,C.ei7,C.ei8,C.ei9,C.eia,C.eif,C.c8Q,C.ehL,C.ehW,C.cbq])
u(B.i2,[C.cyr,C.cys,C.bJT,C.far,C.bTZ,C.bU1,C.fpJ,C.eR_,C.eQR,C.eR6,C.eY6,C.eY7,C.fcE,C.fcC,C.fpg,C.fa7,C.fq4,C.czM,C.czR,C.czT,C.czP,C.czU,C.czN,C.czV,C.czI,C.czF,C.czE,C.czL,C.czd,C.czb,C.fha,C.fhb,C.f1k,C.fia,C.fig,C.f0o,C.c3x,C.fh8,C.fh9,C.fc0,C.fc1,C.fif,C.fib,C.fid,C.fie,C.fic,C.ftu,C.fc4,C.fc5,C.fc8,C.fc9,C.fcc,C.fcd,C.fuJ,C.eZC,C.fuU,C.e5g,C.e5h,C.e5i,C.e4Z,C.e5a,C.e5b,C.e5d,C.c7c,C.c7a,C.c7b,C.fhQ,C.fhS,C.fhR,C.eZd,C.eZe,C.fuX,C.e6r,C.e6s,C.e6j,C.e6k,C.e6n,C.e6o,C.fvc,C.eD0,C.eCq,C.eCa,C.eCn,C.eBs,C.eBt,C.eBu,C.eBy,C.eBz,C.eCQ,C.eCX,C.eCZ,C.eCz,C.eCB,C.eCF,C.eCG,C.eCH,C.eCL,C.eCC,C.eCD,C.eBK,C.eBL,C.eBM,C.eBN,C.eBO,C.eBP,C.eBQ,C.eBR,C.eBS,C.eB5,C.eB6,C.eB7,C.eB8,C.eBa,C.eBb,C.eBE,C.eBF,C.eBG,C.eBH,C.eBI,C.eBf,C.eBg,C.eBh,C.eBi,C.eC_,C.eCi,C.ffd,C.ffc,C.c8z,C.f4O,C.fmZ,C.fmS,C.fmV,C.fkS,C.fkT,C.fkU,C.ffk,C.ffj,C.ffi,C.ffg,C.eZ8,C.eZ9,C.eZa,C.fvo,C.eIT,C.eIU,C.eIN,C.eIH,C.eJc,C.eJd,C.eJf,C.eJg,C.eJb,C.fvn,C.eIy,C.f43,C.e1n,C.fn0,C.fn1,C.fn3,C.fmX,C.fmY,C.fuB,C.daS,C.daY,C.e1m,C.eVI,C.eVK,C.eVJ,C.eVH,C.fgo,C.fgq,C.eXG,C.fmt,C.fmu,C.fmv,C.fmG,C.fmL,C.fmM,C.fmN,C.fmO,C.fmP,C.fmQ,C.fmR,C.fmw,C.fmx,C.fmy,C.fmz,C.fmA,C.fmB,C.fmC,C.fmD,C.fmE,C.fmF,C.fmH,C.fmI,C.fmJ,C.fmK,C.fee,C.f3R,C.f3Q,C.fn9,C.dL7,C.dL5,C.eHI,C.c38,C.c3a,C.fte,C.d0s,C.d0u,C.ftd,C.ftb,C.fvm,C.fjQ,C.d02,C.fcg,C.fch,C.c8x,C.c8y,C.c8w,C.c8m,C.c8n,C.c8j,C.c8k,C.c8l,C.c8O,C.c8J,C.c8E,C.c8F,C.c8H,C.c8K,C.c8M,C.fks,C.c8r,C.c8u,C.c8v,C.c8B,C.c8C,C.fng,C.fmn,C.c8q,C.c8o,C.fkm,C.f69,C.c8h,C.eFs,C.f8W,C.ehC,C.ee1,C.ee2,C.efC,C.efq,C.efr,C.edp,C.ehn,C.eho,C.ehp,C.ecO,C.ef5,C.ef7,C.eeI,C.eeF,C.edY,C.edZ,C.eeP,C.ecQ,C.ef0,C.ef1,C.ef_,C.ef3,C.ef2,C.efl,C.efm,C.efo,C.efh,C.ed8,C.ed5,C.efv,C.ecY,C.ehm,C.ebw,C.ed0,C.ed_,C.ece,C.ecj,C.ech,C.ecf,C.ehu,C.ehv,C.ehw,C.eht,C.eh0,C.eh_,C.egU,C.egW,C.egM,C.ehk,C.ehi,C.ebE,C.ebA,C.edW,C.ecn,C.ebP,C.ebO,C.eca,C.ecb,C.edn,C.ecp,C.ect,C.efe,C.egN,C.egO,C.egP,C.egQ,C.ecS,C.ecT,C.ecU,C.eeo,C.edj,C.edb,C.edi,C.eey,C.eez,C.egl,C.egn,C.egH,C.egJ,C.ego,C.egp,C.ecl,C.ee0,C.ee_,C.eha,C.ecJ,C.ecB,C.ecC,C.ecF,C.ecG,C.eeD,C.edH,C.edI,C.edJ,C.edK,C.edL,C.edM,C.edN,C.edO,C.edP,C.edQ,C.edR,C.efz,C.cV3,C.cV4,C.eih,C.fn6,C.fnf,C.fn5,C.fnb,C.eY5,C.fvq,C.fvr,C.fvs,C.ehK,C.ehT,C.ebp,C.ebk,C.ebl,C.fhq,C.fhp,C.fhr,C.fhw,C.fhs,C.fht,C.eSt,C.eSu,C.e1W,C.cbp])
u(B.jk,[C.cyt,C.eQW,C.eR0,C.eR1,C.eQX,C.eQY,C.eQZ,C.eQP,C.eQQ,C.eQS,C.eQT,C.eR5,C.eR4,C.eQV,C.eQU,C.eR2,C.eR3,C.eR8,C.eR9,C.eR7,C.czO,C.czS,C.czQ,C.czG,C.czH,C.czJ,C.czC,C.czD,C.czK,C.czB,C.czA,C.czz,C.cz2,C.cz1,C.cz4,C.czc,C.cz5,C.cz3,C.cz7,C.cz8,C.cz9,C.cz6,C.cza,C.cze,C.czf,C.czg,C.czh,C.fbZ,C.fc_,C.fbX,C.fbY,C.dXZ,C.dXX,C.dXY,C.dY_,C.dY0,C.dPl,C.fc2,C.fc3,C.fc6,C.fc7,C.fca,C.fcb,C.e1X,C.fjX,C.fjW,C.e5f,C.e5e,C.e4T,C.e4P,C.e5_,C.e50,C.e51,C.e4V,C.e4W,C.e4X,C.e4Y,C.e4U,C.e4R,C.e4S,C.e57,C.e58,C.e56,C.e59,C.e55,C.e54,C.e53,C.e5c,C.e52,C.e4Q,C.e6q,C.e6e,C.e6f,C.e6l,C.e6g,C.e6i,C.e6h,C.e6p,C.eBT,C.eCg,C.eBC,C.eBD,C.eBA,C.eBB,C.eCm,C.eCl,C.eCk,C.eCp,C.eCo,C.eBr,C.eBv,C.eBq,C.eBp,C.eBm,C.eBo,C.eBn,C.eCY,C.eCR,C.eCP,C.eCS,C.eCO,C.eCT,C.eCN,C.eCU,C.eCV,C.eCW,C.eCM,C.eCy,C.eCt,C.eCE,C.eCx,C.eCI,C.eCw,C.eCJ,C.eCv,C.eCK,C.eCu,C.eCd,C.eCc,C.eCe,C.eCb,C.eCf,C.eC5,C.eC4,C.eC6,C.eC3,C.eC2,C.eC1,C.eB9,C.eB4,C.eBj,C.eBe,C.eBk,C.eBd,C.eBl,C.eBc,C.eC8,C.eBX,C.eBW,C.eBY,C.eBV,C.eBZ,C.eBU,C.eCh,C.eCs,C.eCr,C.eBJ,C.fmU,C.fmW,C.fn_,C.ffh,C.fhJ,C.fhH,C.fhI,C.eIV,C.eIW,C.eIS,C.eIM,C.eIL,C.eIO,C.eIP,C.eIB,C.eIC,C.eIE,C.eIF,C.eIG,C.eID,C.eII,C.eJ8,C.eJ9,C.eJ7,C.eJa,C.eJ6,C.eJ5,C.eJ4,C.eJe,C.eJ3,C.eJ2,C.eJ1,C.eJh,C.eJ0,C.eJi,C.eJ_,C.eIZ,C.eIJ,C.eIK,C.eIY,C.eIX,C.eIu,C.eIv,C.eIw,C.eIx,C.eIt,C.eIz,C.eIA,C.daR,C.daT,C.daW,C.daX,C.daV,C.daU,C.fgp,C.fef,C.c39,C.c3b,C.d0l,C.d0q,C.d0r,C.d0p,C.d0o,C.d0t,C.d0n,C.d0m,C.d0v,C.fta,C.d6R,C.d6S,C.d6T,C.fce,C.fcf,C.c8P,C.ebq,C.ebr,C.ebs,C.ebt,C.f67,C.f68,C.dJk,C.dJj,C.cYB,C.cYA,C.ehE,C.ehD,C.ee3,C.egK,C.ehA,C.efA,C.ehq,C.ehr,C.ehB,C.eeJ,C.ecM,C.ecN,C.ef6,C.eeH,C.eeE,C.eeG,C.eeK,C.eeL,C.eeM,C.eeN,C.eeO,C.eeQ,C.ecR,C.eeT,C.eeU,C.eeV,C.eeW,C.eeX,C.eeY,C.eeS,C.ef4,C.efi,C.efg,C.efp,C.eeR,C.ed6,C.ed7,C.ed9,C.efs,C.efw,C.ebL,C.ed4,C.ed2,C.efE,C.ecZ,C.efD,C.ecP,C.edq,C.ehl,C.egL,C.ebM,C.ebJ,C.ebz,C.ebv,C.ebx,C.ed1,C.ecd,C.eci,C.ecg,C.ecc,C.eff,C.ehx,C.egX,C.egS,C.egT,C.egV,C.edU,C.edT,C.ehj,C.ebC,C.ebD,C.ebF,C.ebG,C.ebK,C.ebB,C.efB,C.ehs,C.edX,C.ecm,C.eby,C.edo,C.ebH,C.ebQ,C.ebR,C.ebS,C.ec2,C.ec5,C.ec6,C.ec7,C.ec8,C.ec9,C.ebT,C.ebU,C.ebV,C.ebW,C.ebX,C.ebY,C.ebZ,C.ec_,C.ec0,C.ec1,C.ec3,C.ec4,C.edm,C.edl,C.edk,C.ebI,C.ecq,C.eco,C.ecr,C.ecs,C.ed3,C.efa,C.efb,C.ef8,C.ef9,C.egR,C.ecW,C.ecV,C.een,C.eem,C.eep,C.eel,C.eeq,C.eek,C.eer,C.eej,C.ees,C.eei,C.eet,C.eeh,C.eeu,C.eeg,C.eev,C.eef,C.ee8,C.ee9,C.eea,C.ee7,C.eeb,C.ee6,C.eec,C.ee5,C.eed,C.ee4,C.eee,C.edg,C.edh,C.eda,C.edc,C.edd,C.ede,C.edf,C.ehy,C.ehz,C.eex,C.eew,C.eeA,C.efX,C.efY,C.efZ,C.eg9,C.egk,C.egv,C.egC,C.egD,C.egE,C.egF,C.egG,C.eg_,C.eg0,C.eg1,C.eg2,C.eg3,C.eg4,C.eg5,C.eg6,C.eg7,C.eg8,C.ega,C.egb,C.egc,C.egd,C.ege,C.egf,C.egg,C.egh,C.egi,C.efN,C.egj,C.efV,C.efU,C.egm,C.efT,C.efJ,C.egI,C.efS,C.efI,C.efG,C.efR,C.efH,C.efF,C.egq,C.efQ,C.egr,C.egs,C.egt,C.egu,C.efP,C.egw,C.egx,C.egy,C.efO,C.egz,C.efM,C.egA,C.efL,C.egB,C.efK,C.eck,C.eh3,C.eh2,C.eh4,C.eh1,C.edt,C.eds,C.edu,C.edr,C.ehe,C.eh9,C.ehd,C.eh5,C.eh6,C.eh7,C.eh8,C.ehb,C.ehc,C.ehh,C.ecL,C.ecy,C.ecz,C.ecA,C.ecx,C.ecE,C.ecD,C.ecw,C.ecv,C.ecH,C.ecu,C.ecI,C.eeC,C.eeB,C.edG,C.edF,C.edE,C.edD,C.edC,C.edB,C.edA,C.edz,C.edw,C.edy,C.edx,C.edv,C.edS,C.efx,C.efy,C.cV5,C.cVs,C.cVt,C.cV_,C.cUZ,C.cV2,C.cV0,C.cV1,C.eie,C.ei4,C.eid,C.ei5,C.ei6,C.ei0,C.ei1,C.ei2,C.ei3,C.eig,C.fnc,C.fnd,C.fne,C.ehH,C.ehI,C.ehJ,C.ehM,C.ehN,C.ehQ,C.ehR,C.ehP,C.ehS,C.ehO,C.ehG,C.ehF,C.ehU,C.ehV,C.ehX,C.ehY,C.ebo,C.ebn,C.ebj,C.ebm,C.ei_,C.ehZ,C.fhv,C.fhu,C.e1U,C.e1V])
t(C.aO4,B.F)
u(B.mb,[C.a1J,C.aui,C.at_,C.wF,C.wI,C.kC,C.rC,C.Ag,C.qQ,C.v9,C.ap1,C.H8,C.aor,C.u2,C.m4,C.hl,C.a6s])
u(C.bIZ,[C.cqD,C.bJ_])
u(C.cbj,[C.cbn,C.aq2])
t(C.cbm,C.cbh)
t(C.cbl,C.cbg)
t(C.cbo,C.cbl)
t(C.cbk,C.cbi)
t(C.cbe,C.cbf)
t(C.b6v,B.oi)
t(C.ckC,B.ass)
t(C.a6f,B.ws)
t(C.aSn,B.dC)
t(C.axK,B.arn)
u(B.ae,[C.ZL,C.Ww,C.Wu,C.anF,C.TN,C.TQ,C.YO,C.Zj,C.Zi,C.aAY,C.XG,C.LI,C.Xe,C.Xz,C.alH,C.aFI,C.T1,C.awC,C.a5z,C.M8,C.aw_,C.I8,C.Yq,C.U_,C.U0,C.aBj,C.aow,C.a5A])
u(B.ag,[C.aG0,C.auO,C.auK,C.aAM,C.aB4,C.aB8,C.aCq,C.aEk,C.aEj,C.aIQ,C.ayq,C.aIj,C.awR,C.bck,C.aI5,C.aK6,C.aIi,C.bae,C.aIO,C.aJ1,C.aH0,C.b90,C.aJ2,C.aBm,C.bgF,C.aBk,C.aBn,C.bgo])
u(B.ar,[C.auM,C.aaX,C.aam,C.bft,C.ab_,C.acD,C.aYj,C.boB,C.aYD,C.bhY,C.bnb,C.aWy,C.aYG,C.ab2,C.abk,C.aYE,C.H7,C.aWB,C.b9f,C.NM,C.If,C.bdS,C.bdR,C.bqY])
u(B.FI,[C.b8I,C.bq_,C.aGk,C.bbn,C.bnz])
u(B.n4,[C.b8H,C.b5f,C.bnw,C.b8e,C.bbL,C.bdY,C.baR,C.bbI,C.bbp,C.bk8,C.b6n,C.b6_,C.bqV,C.bnZ,C.bn7,C.baK,C.aYB,C.bm7,C.bn4])
t(C.bgl,C.aIQ)
t(C.bfI,C.aIj)
t(C.bfv,C.aI5)
t(C.bqs,C.aK6)
t(C.bfF,C.aIi)
t(C.bgj,C.aIO)
t(C.btd,C.aJ1)
t(C.aBl,C.btd)
t(C.b91,C.aH0)
t(C.aBo,C.aJ2)
t(C.bqM,B.iG)
t(C.a6r,B.ka)
t(C.cbr,C.b_l)
t(C.afH,C.a0N)
u(B.Vx,[C.aNV,C.aPp])
t(C.atV,C.aNV)
w(C.aIQ,B.c7)
w(C.aIj,B.c7)
w(C.aI5,B.c7)
w(C.aIi,B.c7)
w(C.aIO,B.c7)
w(C.aK6,B.c7)
w(C.aH0,B.eJ)
w(C.aJ1,B.c7)
v(C.btd,B.eu)
w(C.aJ2,B.c7)})()
B.kd(b.typeUniverse,JSON.parse('{"aOE":{"hu":["aOE"]},"nq":{"aOE":[],"hu":["aOE"]},"aO4":{"F":["PW"],"F.E":"PW"},"b6v":{"oi":[]},"a6f":{"ws":[],"nM":[]},"aSn":{"dC":[],"cr":[],"r":[]},"axK":{"aP":[],"cY":["aP"],"aN":[],"cp":[]},"ZL":{"ae":[],"r":[]},"aG0":{"ag":["ZL"]},"Ww":{"ae":[],"r":[]},"Wu":{"ae":[],"r":[]},"auO":{"ag":["Ww"]},"auK":{"ag":["Wu"]},"auM":{"ar":[],"r":[]},"anF":{"ae":[],"r":[]},"aAM":{"ag":["anF"]},"aaX":{"ar":[],"r":[]},"aam":{"ar":[],"r":[]},"ab_":{"ar":[],"r":[]},"acD":{"ar":[],"r":[]},"bft":{"ar":[],"r":[]},"TN":{"ae":[],"r":[]},"aB4":{"ag":["TN"]},"aYj":{"ar":[],"r":[]},"b8I":{"aA":[]},"b8H":{"aA":[]},"bq_":{"aA":[]},"b5f":{"aA":[]},"bnw":{"aA":[]},"TQ":{"ae":[],"r":[]},"aB8":{"ag":["TQ"]},"b8e":{"aA":[]},"YO":{"ae":[],"r":[]},"aCq":{"ag":["YO"]},"bbL":{"aA":[]},"Zj":{"ae":[],"r":[]},"Zi":{"ae":[],"r":[]},"aAY":{"ae":[],"r":[]},"XG":{"ae":[],"r":[]},"aEk":{"ag":["Zj"]},"aEj":{"ag":["Zi"]},"bgl":{"ag":["aAY"]},"bdY":{"aA":[]},"ayq":{"ag":["XG"]},"boB":{"ar":[],"r":[]},"aYD":{"ar":[],"r":[]},"bhY":{"ar":[],"r":[]},"LI":{"ae":[],"r":[]},"Xe":{"ae":[],"r":[]},"bfI":{"ag":["LI"]},"bnb":{"ar":[],"r":[]},"baR":{"aA":[]},"aWy":{"ar":[],"r":[]},"awR":{"ag":["Xe"]},"Xz":{"ae":[],"r":[]},"bck":{"ag":["Xz"]},"bbI":{"aA":[]},"bbp":{"aA":[]},"bk8":{"aA":[]},"b6n":{"aA":[]},"b6_":{"aA":[]},"bqV":{"aA":[]},"bnZ":{"aA":[]},"bn7":{"aA":[]},"baK":{"aA":[]},"alH":{"ae":[],"r":[]},"aYG":{"ar":[],"r":[]},"bfv":{"ag":["alH"]},"ab2":{"ar":[],"r":[]},"abk":{"ar":[],"r":[]},"aFI":{"ae":[],"r":[]},"T1":{"ae":[],"r":[]},"H7":{"ar":[],"r":[]},"awC":{"ae":[],"r":[]},"a5z":{"ae":[],"r":[]},"aYE":{"ar":[],"r":[]},"aYB":{"aA":[]},"bqs":{"ag":["aFI"]},"aGk":{"aA":[]},"bfF":{"ag":["T1"]},"bae":{"ag":["awC"]},"bgj":{"ag":["a5z"]},"aWB":{"ar":[],"r":[]},"bbn":{"aA":[]},"bm7":{"aA":[]},"bn4":{"aA":[]},"aw_":{"ae":[],"r":[]},"I8":{"ae":[],"r":[]},"Yq":{"ae":[],"r":[]},"If":{"ar":[],"r":[]},"M8":{"ae":[],"r":[]},"aBl":{"ag":["M8"],"eu":[]},"b91":{"ag":["aw_"]},"b9f":{"ar":[],"r":[]},"b90":{"ag":["I8"]},"NM":{"ar":[],"r":[]},"aBo":{"ag":["Yq"]},"bnz":{"aA":[]},"bdS":{"ar":[],"r":[]},"bdR":{"ar":[],"r":[]},"U_":{"ae":[],"r":[]},"U0":{"ae":[],"r":[]},"aBj":{"ae":[],"r":[]},"aow":{"ae":[],"r":[]},"aBm":{"ag":["U_"]},"bgF":{"ag":["U0"]},"aBk":{"ag":["aBj"]},"bqM":{"iG":[]},"aBn":{"ag":["aow"]},"bqY":{"ar":[],"r":[]},"a5A":{"ae":[],"r":[]},"bgo":{"ag":["a5A"]},"a6r":{"ka":["fk<eD>"],"jZ":["fk<eD>"]},"afH":{"a0N":[]},"aNV":{"iQ":[],"f4":[]},"atV":{"iQ":[],"f4":[]},"aPp":{"iQ":[],"f4":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.az
return{bu:w("K_"),U:w("uI<pu>"),bz:w("x"),M:w("fc<n>"),bo:w("jn"),g7:w("Ku"),gc:w("au<ik?>"),bq:w("au<~>"),cc:w("a2N"),fS:w("CD"),an:w("aji"),bm:w("N<PW>"),X:w("N<afX>"),f3:w("N<aOE>"),aK:w("N<mI>"),V:w("N<aa>"),O:w("N<x>"),fA:w("N<lf>"),d5:w("N<au<bq<I,+icon3d,picture(n?,n?)>>>"),bH:w("N<au<dz>>"),fG:w("N<au<~>>"),aF:w("N<mP>"),cd:w("N<al<j9>>"),ez:w("N<a0<n,aB>>"),d:w("N<a0<n,@>>"),B:w("N<m0>"),h:w("N<j9>"),gE:w("N<yr>"),k:w("N<nS>"),g:w("N<ln>"),D:w("N<hR>"),u:w("N<ex>"),m:w("N<u2>"),i:w("N<hl>"),aC:w("N<a5R>"),o:w("N<yt>"),e3:w("N<aB>"),dN:w("N<v>"),v:w("N<hw>"),cR:w("N<iD>"),J:w("N<j_>"),gx:w("N<oC<n>>"),f2:w("N<+(a_,n)>"),L:w("N<+(n,n)>"),aD:w("N<+data,mimeType(n,n)>"),G:w("N<+(Q,Q)>"),ek:w("N<+(I,n)>"),n:w("N<+(I,I)>"),r:w("N<cJ>"),s:w("N<n>"),aS:w("N<iG>"),p:w("N<r>"),eR:w("N<f4>"),fT:w("N<b4Y>"),bx:w("N<aBW>"),gz:w("N<acN>"),x:w("N<Q>"),t:w("N<I>"),dS:w("N<aA?>"),bA:w("N<v?>"),Z:w("N<I?>"),cA:w("N<cd>"),A:w("cn<ag<ae>>"),gL:w("al<nS>"),R:w("al<hR>"),j:w("al<@>"),bW:w("al<I>"),e:w("bq<I,+icon3d,picture(n?,n?)>"),P:w("a0<n,@>"),f:w("a0<@,@>"),gI:w("a0<I,+icon3d,picture(n?,n?)>"),bR:w("J<hl,r>"),eC:w("J<nh,n>"),cT:w("J<js,C>"),dv:w("J<n,n>"),f0:w("J<n,r>"),gN:w("J<I,p8>"),gh:w("J<m4,jb<m4>>"),w:w("iA"),ei:w("ik"),g2:w("qG"),fB:w("Db"),b6:w("yr"),gX:w("a5J"),dt:w("kY"),ea:w("nS"),bt:w("ln"),I:w("hR"),F:w("ex"),fO:w("m4"),ff:w("u2"),fP:w("hl"),Q:w("v9"),dO:w("aos"),a:w("co"),C:w("aB"),dw:w("aq3"),di:w("a6s"),Y:w("eD"),fz:w("+(n,n)"),dL:w("+(I,I)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("DG"),dB:w("dw<v>"),bJ:w("dw<n>"),_:w("dV<n>"),N:w("n"),fw:w("pu"),bO:w("ao"),K:w("bm<v>"),b:w("bm<Q>"),E:w("dz"),W:w("cv<n>"),ac:w("cv<I>"),ex:w("k1<ln>"),cI:w("k1<n>"),cl:w("k1<Q>"),b4:w("a5<kV>"),a8:w("a5<lJ>"),fR:w("a5<+(n,n)>"),co:w("e2<v>"),l:w("r"),b2:w("bL<~>"),ev:w("pv<dQ>"),dT:w("bd<~>"),cQ:w("axK"),q:w("mz"),y:w("R"),gR:w("Q"),z:w("@"),S:w("I"),at:w("b7?"),gw:w("al<a0<n,@>>?"),aT:w("al<hR>?"),c:w("al<@>?"),aP:w("ik?"),af:w("hR?"),go:w("aYI?"),a6:w("a5S?"),cK:w("aB?"),bZ:w("+bytes,dataUrl,fileName(dz,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dz?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.bCr=new B.ac(A.ej,18,A.c,null,null,null)
D.aNr=new B.bF(A.ax,null,null,D.bCr,null)
D.aNA=new B.d3(0,-0.15)
D.aNC=new B.d3(0.62,0)
D.aNF=new B.d3(-0.35,-0.45)
D.aNQ=new B.d3(0.9,-0.85)
D.aFN=new B.b3(30,30)
D.aP6=new B.bu(D.aFN,D.aFN,A.fV,A.fV)
D.aPk=new B.ax(A.b0,1,A.r,-1)
D.b65=new B.x(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aPw=new B.ax(D.b65,1,A.r,-1)
D.aPI=new B.ax(A.aB,1.5,A.r,-1)
D.aPN=new B.ax(A.b0,1.6,A.r,-1)
D.aQ2=new B.ax(A.aB,1.4,A.r,-1)
D.aRn=new B.o(null,null,null,null,null,K.ES,A.a5)
D.bGf=new B.a8(A.a1,A.a7,A.x,G.a_i,null,null)
D.aRv=new B.o(null,null,null,null,null,D.bGf,A.a5)
D.a6T=new B.o(A.aG,null,null,A.pL,null,null,A.n)
D.b0U=new B.x(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.b63=new B.x(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cCb=w([D.b0U,D.b63],x.O)
D.dRs=new B.bS(A.B,0.5,A.x,null,0,D.cCb,null,null)
D.aRN=new B.o(null,null,null,null,null,D.dRs,A.a5)
D.TG=new B.x(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aQg=new B.c1(N.vC,A.W,A.W,A.W)
D.aRP=new B.o(D.TG,null,D.aQg,null,null,null,A.n)
D.bHS=new B.a8(A.a1,A.a7,A.x,A.Nt,null,null)
D.aRV=new B.o(null,null,null,null,null,D.bHS,A.a5)
D.a8d=new B.x(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aRX=new B.o(D.a8d,null,null,A.r0,null,null,A.n)
D.aS0=new B.o(A.kn,null,null,null,null,null,A.a5)
D.aQm=new B.c1(A.yI,A.W,A.W,A.W)
D.aS3=new B.o(Y.a97,null,D.aQm,A.mg,null,null,A.n)
D.Cl=new B.o(A.e9,null,null,null,null,null,A.a5)
D.aS9=new B.o(null,null,null,null,null,E.uH,A.a5)
D.cGB=w([E.a9N,A.bV],x.O)
D.bHv=new B.a8(A.b3,A.bb,A.x,D.cGB,null,null)
D.aSd=new B.o(null,null,null,A.mg,null,D.bHv,A.n)
D.cQc=w([A.bh,A.e9,A.ju],x.O)
D.Yv=new B.a8(A.ax,A.aC,A.x,D.cQc,null,null)
D.aSp=new B.o(null,null,null,null,null,D.Yv,A.n)
D.aSq=new B.o(D.a8d,null,null,A.kh,null,null,A.n)
D.c7L=w([A.dC,A.bh],x.O)
D.bHo=new B.a8(A.ax,A.aC,A.x,D.c7L,null,null)
D.aSu=new B.o(null,null,null,null,null,D.bHo,A.n)
D.aSE=new B.o(null,null,null,null,null,G.t0,A.a5)
D.aSW=new B.o(A.a9O,null,null,null,null,null,A.a5)
D.b1y=new B.x(0.5647058823529412,0,0,0,A.t)
D.a71=new B.aa(0,A.G,D.b1y,A.Pc,28)
D.aUT=new B.aSA()
D.aVr=new C.ckC()
D.aVD=new C.b6v()
D.a7x=new B.cw(A.B,null,null,A.Yk,null)
D.aY_=new B.f9(null,null,null,null,null,E.mq,null,null,null,null)
D.aW9=new B.cw(A.B,null,null,D.aY_,null)
D.bsj=new B.ac(A.dO,28,A.c,null,null,null)
D.aWz=new B.cw(A.B,null,null,D.bsj,null)
D.aXX=new B.f9(2,null,null,null,null,A.bQ,null,null,null,null)
D.aWT=new B.cw(A.B,null,null,D.aXX,null)
D.bsE=new B.ac(K.Lc,40,A.bS,null,null,null)
D.aWU=new B.cw(A.B,null,null,D.bsE,null)
D.aYK=new B.x(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.aYW=new B.x(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.aZg=new B.x(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.aZk=new B.x(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.aZM=new B.x(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b_1=new B.x(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b_2=new B.x(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Iy=new B.x(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b_o=new B.x(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b_t=new B.x(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a8r=new B.x(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b06=new B.x(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b0K=new B.x(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.a8E=new B.x(1,1,1,0.9725490196078431,A.t)
D.b10=new B.x(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b19=new B.x(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b1b=new B.x(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.b1k=new B.x(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b1D=new B.x(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.b2P=new B.x(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Tr=new B.x(0.8509803921568627,0,0,0,A.t)
D.b2X=new B.x(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.b32=new B.x(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.a9m=new B.x(0.6,0,0,0,A.t)
D.a9o=new B.x(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.b4k=new B.x(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.rg=new B.x(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.b4H=new B.x(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.b53=new B.x(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.b5m=new B.x(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.a9Z=new B.x(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.TM=new B.x(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.zb=new B.x(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.IV=new B.x(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.iS=new B.x(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aam=new B.x(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.TR=new B.x(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.b87=new B.x(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.b8u=new B.x(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.b8I=new B.x(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.U5=new B.x(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.b9F=new B.x(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.w6=new B.x(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.b9Y=new B.x(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bae=new B.ht(A.be,!0,null,null)
D.eH_=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3X=new B.w("Bio link",null,D.eH_,null,null,null,null,null,null,null,null,null)
D.aWO=new B.cw(A.B,null,null,D.f3X,null)
D.bau=new B.ht(A.SW,!0,D.aWO,null)
D.Jc=new C.a1J(0,"none")
D.abj=new C.a1J(1,"deflate")
D.abk=new C.a1J(2,"bzip2")
D.bba=new B.k4(0.165,0.84,0.44,1)
D.cGU=w([A.cl,A.dN,A.aB],x.O)
D.bGG=new B.a8(A.ax,A.aC,A.x,D.cGU,null,null)
D.aRs=new B.o(null,null,null,null,null,D.bGG,A.n)
D.bBj=new B.ac(A.eG,null,A.aj,null,null,null)
D.aXn=new B.cw(A.B,null,null,D.bBj,null)
D.bbI=new B.kz(D.aRs,A.b7,D.aXn,null)
D.b8k=new B.x(0.058823529411764705,1,1,1,A.t)
D.cJP=w([A.bG,A.pX,A.pX,D.b8k],x.O)
D.coF=w([0,0.32,0.7,1],x.x)
D.bHd=new B.a8(A.ax,A.aC,A.x,D.cJP,D.coF,null)
D.aRg=new B.o(null,null,null,null,null,D.bHd,A.n)
D.bbO=new B.kz(D.aRg,A.b7,null,null)
D.bc3=new B.lU(1,1,null,null,null,A.bj,null)
D.bc6=new B.lU(1,null,null,null,null,D.TR,null)
D.bcA=new B.b7(125e4)
D.bcG=new B.b7(17e4)
D.bcQ=new B.b7(35964e8)
D.bcW=new B.b7(55e4)
D.bd_=new B.b7(68e4)
D.bdq=new B.i3(0,0,0,5)
D.bdI=new B.M(0,16,16,0)
D.bdL=new B.M(0,18,0,8)
D.bdS=new B.M(0,36,0,36)
D.bdZ=new B.M(0,54,0,0)
D.be5=new B.M(10,0,10,3)
D.bef=new B.i3(10,16,10,10)
D.beo=new B.M(10,6,10,0)
D.beq=new B.M(10,6,4,6)
D.bet=new B.M(10,8,10,6)
D.ace=new B.M(11,8,11,11)
D.bey=new B.M(12,0,12,10)
D.bez=new B.M(12,0,12,24)
D.beL=new B.M(12,12,12,4)
D.beO=new B.M(12,12,8,12)
D.bf1=new B.M(12,8,8,12)
D.bfo=new B.M(14,14,14,0)
D.bft=new B.M(14,14,14,90)
D.bfM=new B.M(16,10,16,16)
D.bfN=new B.M(16,10,16,20)
D.ad1=new B.M(16,6,16,28)
D.bgm=new B.M(18,0,18,10)
D.bgo=new B.M(18,0,18,30)
D.bgq=new B.M(18,10,18,12)
D.bgr=new B.M(18,10,18,14)
D.bgI=new B.M(18,16,14,18)
D.bgN=new B.M(18,18,18,12)
D.bgT=new B.M(18,26,18,12)
D.bgY=new B.M(18,34,18,34)
D.bgZ=new B.M(18,4,18,14)
D.bh4=new B.M(18,8,18,24)
D.bhm=new B.M(20,16,14,4)
D.bhr=new B.M(20,18,12,4)
D.bhw=new B.M(20,20,12,20)
D.bhz=new B.M(20,22,20,20)
D.bhE=new B.M(20,6,20,6)
D.bhO=new B.M(22,18,22,18)
D.bhV=new B.M(22,24,22,0)
D.bhY=new B.M(22,24,22,4)
D.bi5=new B.M(22,60,22,22)
D.bib=new B.M(24,24,24,22)
D.bil=new B.M(26,10,60,10)
D.bir=new B.M(28,44,28,44)
D.biI=new B.M(32,44,32,44)
D.biQ=new B.M(38,30,38,20)
D.biV=new B.M(4,0,0,6)
D.bj6=new B.i3(4,4,4,4)
D.bjv=new B.i3(6,5,6,5)
D.bjz=new B.M(6,6,8,6)
D.bjK=new B.M(8,14,8,14)
D.bjL=new B.M(8,22,8,22)
D.bjT=new B.M(8,6,12,6)
D.bk0=new B.M(8,8,8,4)
D.adT=new B.M(9,9,9,6)
D.bka=new B.i3(2.5,2.5,2.5,2.5)
D.bkb=new B.M(10.5,0,10.5,0)
D.bkc=new B.M(7,1.5,7,1.5)
D.czx=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bkr=new B.zZ(null,null,D.czx,A.yV)
D.cwS=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bks=new B.zZ(null,null,D.cwS,A.yV)
D.aK9=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3l=new B.w("WORD DESIGN",null,D.aK9,null,null,null,null,null,null,null,null,null)
D.bkT=new B.bE(1,A.bn,D.f3l,null)
D.f31=new B.w("Slides database",null,A7.BE,null,null,null,null,null,null,null,null,null)
D.f0s=new B.w("Admin only \xb7 keep as many as you like",null,V.aJG,null,null,null,null,null,null,null,null,null)
D.cXc=w([D.f31,A.by,D.f0s],x.p)
D.baT=new B.fj(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.cXc,null)
D.bkW=new B.bE(1,A.bn,D.baT,null)
D.eWr=new B.w("NGMY logo",null,A.fM,null,null,null,null,null,null,null,null,null)
D.bkZ=new B.bE(1,A.bn,D.eWr,null)
D.eEU=new B.G(!0,A.aj,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new B.w("TALK TO THE EDITOR",null,D.eEU,null,null,null,null,null,null,null,null,null)
D.ble=new B.bE(1,A.bn,D.f55,null)
D.eQJ=new B.w("Tell the AI what to change",null,A7.BE,null,null,null,null,null,null,null,null,null)
D.blw=new B.bE(1,A.bn,D.eQJ,null)
D.bma=new B.Cu(!0,"video/mp4")
D.eDe=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP_=new B.w("Move presentations between devices",null,D.eDe,null,null,null,!1,null,null,1,null,null)
D.bme=new B.pL(A.e8,A.a1,A.h,D.eP_,null)
D.eQ1=new B.w("Edit in Slides",null,A.jN,null,null,null,null,null,null,null,null,null)
D.bmf=new B.pL(A.e8,A.B,A.h,D.eQ1,null)
D.bmu=new B.dl(1,A.cj,D.bmf,null)
D.WK=new B.a_(60988,"MaterialIcons",!1)
D.bnT=new B.a_(61352,"MaterialIcons",!1)
D.afl=new B.a_(61531,"MaterialIcons",!1)
D.bp4=new B.a_(63062,"MaterialIcons",!1)
D.bpb=new B.a_(63109,"MaterialIcons",!1)
D.bpn=new B.a_(63206,"MaterialIcons",!1)
D.ag1=new B.a_(63238,"MaterialIcons",!1)
D.Xi=new B.a_(63365,"MaterialIcons",!1)
D.Xj=new B.a_(63367,"MaterialIcons",!1)
D.Xk=new B.a_(63368,"MaterialIcons",!1)
D.agb=new B.a_(63384,"MaterialIcons",!1)
D.bpY=new B.a_(63525,"MaterialIcons",!1)
D.bq0=new B.a_(63568,"MaterialIcons",!1)
D.bqj=new B.a_(983072,"MaterialIcons",!1)
D.bqI=new B.a_(983271,"MaterialIcons",!0)
D.brx=new B.a_(983924,"MaterialIcons",!1)
D.ahj=new B.a_(983965,"MaterialIcons",!1)
D.ahk=new B.a_(983966,"MaterialIcons",!1)
D.brH=new B.a_(984592,"MaterialIcons",!1)
D.brX=new B.ac(A.rO,16,A.aA,null,null,null)
D.bs3=new B.ac(A.m_,null,A.c,null,null,null)
D.ahu=new B.ac(A.p6,18,A.c,null,null,null)
D.bsk=new B.ac(A.zZ,18,O.kR,null,null,null)
D.bt_=new B.ac(A.iZ,11,null,null,null,null)
D.bt9=new B.ac(A.X1,null,A.eX,null,null,null)
D.btI=new B.ac(A.qg,18,A.aA,null,null,null)
D.btO=new B.ac(A0.Aa,14,null,null,null,null)
D.btP=new B.ac(A.e4,28,A.cN,null,null,null)
D.bu1=new B.ac(A.p7,20,A.c,null,null,null)
D.bu8=new B.ac(A.x0,null,null,null,null,null)
D.bue=new B.ac(A.je,18,A.hS,null,null,null)
D.buj=new B.ac(A.kX,null,null,null,null,null)
D.buM=new B.ac(A.XA,28,A.c,null,null,null)
D.bp7=new B.a_(63065,"MaterialIcons",!1)
D.buV=new B.ac(D.bp7,15,A.c,null,null,null)
D.bpd=new B.a_(63113,"MaterialIcons",!1)
D.bv0=new B.ac(D.bpd,null,A.aj,null,null,null)
D.bvn=new B.ac(A.um,22,A.bK,null,null,null)
D.bvH=new B.ac(A.wM,18,null,null,null,null)
D.bvM=new B.ac(A.Eq,12,A.c,null,null,null)
D.brj=new B.a_(983687,"MaterialIcons",!1)
D.bvX=new B.ac(D.brj,null,A.bh,null,null,null)
D.bw3=new B.ac(A.hg,null,A.bh,null,null,null)
D.bwm=new B.ac(A.pb,22,A.c,null,null,null)
D.bwq=new B.ac(A.cu,13,A.c,null,null,null)
D.bww=new B.ac(A.e4,26,A.aH,null,null,null)
D.bwz=new B.ac(A.qk,26,A.c,null,null,null)
D.Lm=new B.ac(A.iZ,8,A.c,null,null,null)
D.bwR=new B.ac(A.p6,40,A.c,null,null,null)
D.bwS=new B.ac(A.bmQ,null,null,null,null,null)
D.bwW=new B.ac(A.rW,20,null,null,null,null)
D.bri=new B.a_(983683,"MaterialIcons",!1)
D.bx5=new B.ac(D.bri,null,A.aW,null,null,null)
D.bx6=new B.ac(A.iZ,16,A.bh,null,null,null)
D.bxr=new B.ac(A.uA,null,null,null,null,null)
D.ai1=new B.ac(A.uo,22,A.c,null,null,null)
D.bxv=new B.ac(A.dO,17,A.c,null,null,null)
D.ai2=new B.ac(A.iZ,9,A.c,null,null,null)
D.bxA=new B.ac(A.uj,null,null,null,null,null)
D.bn6=new B.a_(57744,"MaterialIcons",!1)
D.bxH=new B.ac(D.bn6,null,null,null,null,null)
D.bxK=new B.ac(A.uj,16,null,null,null,null)
D.brO=new B.a_(985181,"MaterialIcons",!1)
D.EK=new B.ac(D.brO,null,null,null,null,null)
D.bxW=new B.ac(A.kX,16,A.bK,null,null,null)
D.bra=new B.a_(983615,"MaterialIcons",!1)
D.bxY=new B.ac(D.bra,12,A.c,null,null,null)
D.ai8=new B.ac(A.wI,16,null,null,null,null)
D.by4=new B.ac(A.dO,21,A.c,null,null,null)
D.by9=new B.ac(A.hg,17,A.c,null,null,null)
D.bya=new B.ac(A.um,null,null,null,null,null)
D.byo=new B.ac(A.XZ,20,A.aA,null,null,null)
D.byD=new B.ac(A.p5,22,E.mq,null,null,null)
D.byL=new B.ac(A.qi,13,A.aj,null,null,null)
D.byN=new B.ac(A.ah8,20,A.aA,null,null,null)
D.bmO=new B.a_(57495,"MaterialIcons",!1)
D.byS=new B.ac(D.bmO,null,null,null,null,null)
D.byW=new B.ac(A.np,18,A.c,null,null,null)
D.bzg=new B.ac(A.rZ,28,A.c,null,null,null)
D.bzo=new B.ac(D.ag1,null,A.aB,null,null,null)
D.bzp=new B.ac(A.p7,22,A.c,null,null,null)
D.aii=new B.ac(A.WG,16,null,null,null,null)
D.bA8=new B.ac(A.um,32,A.c,null,null,null)
D.bAR=new B.ac(A.iI,22,A.c,null,null,null)
D.bAV=new B.ac(A.qk,22,A.aj,null,null,null)
D.aix=new B.ac(A.rO,null,A.c2,null,null,null)
D.bBO=new B.ac(A.un,18,null,null,null,null)
D.bCl=new B.ac(A.dO,18,A.cV,null,null,null)
D.Yn=new B.ac(A.cu,18,A.aA,null,null,null)
D.bCs=new B.ac(A.ah1,null,null,null,null,null)
D.bCS=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aJZ,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.evY=new B.G(!0,A.bP,null,null,null,null,null,A.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bD9=new B.e0(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.evY,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.bDy=new B.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ep,!0,null,null,null,null)
D.cD1=w([A.e9,A.aB],x.O)
D.bEF=new B.a8(A.a1,A.a7,A.x,D.cD1,null,null)
D.bEP=new B.a8(A.b3,A.bb,A.Ra,A.apr,null,null)
D.aZ7=new B.x(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.b1F=new B.x(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.b4l=new B.x(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b_Z=new B.x(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.coH=w([D.aZ7,D.b1F,D.b4l,D.b_Z],x.O)
D.bF6=new B.a8(A.ax,A.aC,A.x,D.coH,A.Fh,null)
D.cXj=w([A.dh,A.bz,A.b0],x.O)
D.bF8=new B.a8(A.b3,A.bb,A.Ra,D.cXj,null,null)
D.cYq=w([A.bh,A.c9],x.O)
D.bFc=new B.a8(A.a1,A.a7,A.x,D.cYq,null,null)
D.cU6=w([A.hR,A.dD,A.aZ],x.O)
D.bFe=new B.a8(A.ax,A.aC,A.x,D.cU6,null,null)
D.cIp=w([A.cW,A.eY],x.O)
D.bFi=new B.a8(A.a1,A.a7,A.x,D.cIp,null,null)
D.cXe=w([O.kR,A.dD],x.O)
D.ajh=new B.a8(A.a1,A.a7,A.x,D.cXe,null,null)
D.b2a=new B.x(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.cXb=w([D.b2a,D.w6,A.bQ],x.O)
D.bFn=new B.a8(A.a1,A.a7,A.x,D.cXb,null,null)
D.cEy=w([A.bt,A.dp,A.fq],x.O)
D.bFo=new B.a8(A.ax,A.aC,A.x,D.cEy,null,null)
D.LB=new B.a8(A.a1,A.a7,A.x,A.Ft,null,null)
D.b91=new B.x(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.chT=w([D.b91,A.bQ,A.iV],x.O)
D.ajl=new B.a8(A.ax,A.aC,A.x,D.chT,null,null)
D.cN8=w([A.vX,A.at,D.zb],x.O)
D.bGg=new B.a8(A.a1,A.a7,A.x,D.cN8,null,null)
D.b9Z=new B.x(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b0J=new B.x(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.b5c=new B.x(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cDL=w([D.b9Z,D.b0J,D.b5c],x.O)
D.ajm=new B.a8(A.a1,A.a7,A.x,D.cDL,null,null)
D.b2b=new B.x(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bI7=w([Ap.ab4,D.b2b],x.O)
D.bGp=new B.a8(A.b3,A.bb,A.x,D.bI7,null,null)
D.cC_=w([A.mp,A.bS],x.O)
D.bGs=new B.a8(A.b3,A.bb,A.x,D.cC_,null,null)
D.cRx=w([A.aB,A.dN],x.O)
D.bGy=new B.a8(A.a1,A.a7,A.x,D.cRx,null,null)
D.aa8=new B.x(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.ar2=w([D.aa8,D.iS,D.Iy],x.O)
D.bGZ=new B.a8(A.ax,A.aC,A.x,D.ar2,null,null)
D.chL=w([A.ds,A.dQ],x.O)
D.bH9=new B.a8(A.b3,A.bb,A.x,D.chL,null,null)
D.cP_=w([A.tQ,As.CQ],x.O)
D.bHT=new B.a8(A.a1,A.a7,A.x,D.cP_,null,null)
D.eXS=new B.w("Which Bio link?",null,A.cq,null,null,null,null,null,null,null,null,null)
D.bI3=new B.pe(null,D.eXS,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.xq=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a15=new C.kC(2,"elegantNavy")
D.fiW=w([A.TK,D.iS,A.bQ],x.O)
D.ji=new C.wF(0,"classic")
D.a0T=new C.j9("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a15,4294967035,4279378237,4290283019,D.ji)
D.azR=new C.kC(3,"elegantGold")
D.aYJ=new B.x(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.aZw=new B.x(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.a8Y=new B.x(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fio=w([D.aYJ,D.aZw,D.a8Y],x.O)
D.a0R=new C.j9("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.azR,4294966515,4281016592,4289102906,D.ji)
D.dhG=new C.kC(22,"goldRibbon")
D.fik=w([A.TK,D.iS,A.hE],x.O)
D.a0K=new C.j9("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dhG,4294967035,4279378237,4291404327,D.ji)
D.dhH=new C.kC(23,"goldBaroque")
D.a9t=new B.x(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fiq=w([D.a9t,A.at,A.iV],x.O)
D.a0L=new C.j9("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dhH,4294964964,4283053072,4292128567,D.ji)
D.dhJ=new C.kC(4,"elegantEmerald")
D.b_z=new B.x(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b0k=new B.x(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fiw=w([D.b_z,D.b0k,A.hE],x.O)
D.a0M=new C.j9("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dhJ,4294376440,4279122734,4291404327,D.ji)
D.dhK=new C.kC(5,"elegantBurgundy")
D.b3r=new B.x(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fiD=w([D.b3r,A.a8l,A.hE],x.O)
D.a0P=new C.j9("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dhK,4294965238,4283043359,4291404327,D.ji)
D.dhD=new C.kC(19,"goldFiligree")
D.J0=new B.x(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fir=w([D.J0,A.at,A.iV],x.O)
D.a0N=new C.j9("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dhD,4294966259,4279378237,4292128567,D.ji)
D.dhE=new C.kC(20,"goldLaurel")
D.b8S=new B.x(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fiE=w([A.Is,A.hE,D.b8S],x.O)
D.a0O=new C.j9("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dhE,4294966776,4282000405,4291404327,D.ji)
D.dhF=new C.kC(21,"goldCrest")
D.a8f=new B.x(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.b8Z=new B.x(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fit=w([D.a8f,A.at,D.b8Z],x.O)
D.a0S=new C.j9("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dhF,4294965484,4283053072,4292128567,D.ji)
D.dhI=new C.kC(24,"goldStar")
D.b9V=new B.x(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fix=w([D.b9V,A.at,D.iS],x.O)
D.a0Q=new C.j9("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dhI,4294966518,4279378237,4292128567,D.ji)
D.EU=w([D.a0T,D.a0R,D.a0K,D.a0L,D.a0M,D.a0P,D.a0N,D.a0O,D.a0S,D.a0Q],x.h)
D.pl=new C.m4(0,"blank")
D.P1=new C.m4(1,"title")
D.m6=new C.m4(2,"titleContent")
D.dCi=new C.m4(3,"twoColumn")
D.B4=new C.m4(4,"section")
D.dCj=new C.m4(5,"comparison")
D.G2=new C.m4(6,"flashcard")
D.G3=new C.m4(7,"quiz")
D.G4=new C.m4(8,"worksheet")
D.ajG=w([D.pl,D.P1,D.m6,D.dCi,D.B4,D.dCj,D.G2,D.G3,D.G4],B.az("N<m4>"))
D.bIj=w([0,0,0],x.cA)
D.arX=w([E.Tg,A.dQ],x.O)
D.k2=w([A.bQ,A.bK,A.hD,A.hn,D.zb],x.O)
D.ddz=new C.iM("fireworks","Royal Fireworks","Thank you for celebrating with us",D.arX,D.k2)
D.b99=new B.x(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.b3p=new B.x(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cCc=w([D.b99,D.b3p],x.O)
D.ddq=new C.iM("confetti","Golden Confetti","Together we rise",D.cCc,D.k2)
D.czC=w([A.n3,A.SZ],x.O)
D.ddr=new C.iM("crown","Crown of Glory","Built for our community",D.czC,D.k2)
D.b0z=new B.x(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.b34=new B.x(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cFM=w([D.b0z,D.b34],x.O)
D.t1=w([A.bP,A.aO,A.c,A.aJ,A.al],x.O)
D.ddl=new C.iM("aurora","Aurora Gala","A brighter future, together",D.cFM,D.t1)
D.b4n=new B.x(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.cP5=w([G.a8_,D.b4n],x.O)
D.ddC=new C.iM("champagne","Champagne Toast","Cheers to every member",D.cP5,D.k2)
D.ddD=new C.iM("diamonds","Diamond Rain","Every member is a jewel",W.asp,D.t1)
D.aZo=new B.x(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.b2C=new B.x(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.cTr=w([D.aZo,D.b2C],x.O)
D.ddg=new C.iM("starburst","Golden Starburst","Thank you!",D.cTr,D.k2)
D.bIc=w([A.fr,A.w0],x.O)
D.a86=new B.x(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.N8=w([A.nS,A.i6,A.u1,A.oE,D.a86],x.O)
D.ddK=new C.iM("balloons","Luxury Balloons","Let's celebrate",D.bIc,D.N8)
D.cyY=w([A.T5,A.w],x.O)
D.ddy=new C.iM("galaxy","Galaxy Spiral","The sky is not the limit",D.cyY,D.t1)
D.b7z=new B.x(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.cM3=w([A.kS,D.b7z],x.O)
D.ddt=new C.iM("redcarpet","Red Carpet","Tonight we shine",D.cM3,D.k2)
D.b5J=new B.x(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.b4b=new B.x(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.cPV=w([D.b5J,D.b4b],x.O)
D.ddi=new C.iM("coins","Gold Coin Rain","Every contribution counts",D.cPV,D.k2)
D.cVT=w([A.ds,A.i5],x.O)
D.ddo=new C.iM("lanterns","Sky Lanterns","Lighting the way together",D.cVT,D.k2)
D.b1o=new B.x(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cx8=w([A.w2,D.b1o],x.O)
D.ddk=new C.iM("hearts","Floating Hearts","Made with love",D.cx8,D.N8)
D.aZV=new B.x(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b_F=new B.x(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.cX9=w([D.aZV,D.b_F],x.O)
D.ddJ=new C.iM("petals","Rose Petals","Thank you, from our hearts",D.cX9,D.N8)
D.b8i=new B.x(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.cTL=w([A.kQ,D.b8i],x.O)
D.ddf=new C.iM("butterflies","Golden Butterflies","New beginnings",D.cTL,D.k2)
D.b5a=new B.x(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cy_=w([D.b5a,A.w],x.O)
D.ddB=new C.iM("neon","Neon Night","Let's go!",D.cy_,D.t1)
D.b2m=new B.x(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.cRH=w([A.IM,D.b2m],x.O)
D.ddE=new C.iM("disco","Disco Ball","Party time",D.cRH,D.t1)
D.b5B=new B.x(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.cRg=w([A.hR,D.b5B],x.O)
D.ddj=new C.iM("sunrise","Golden Sunrise","A new day for our community",D.cRg,D.k2)
D.cQU=w([A.tX,A.dQ],x.O)
D.ddF=new C.iM("pearls","Ocean Pearls","Deep roots, bright future",D.cQU,D.t1)
D.b0F=new B.x(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.cR6=w([D.b0F,A.dQ],x.O)
D.ddI=new C.iM("snow","Winter Gala","Warm wishes to all",D.cR6,D.t1)
D.aYS=new B.x(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.aZH=new B.x(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.cWe=w([D.aYS,D.aZH],x.O)
D.ddx=new C.iM("laurel","Laurel Victory","We did it together",D.cWe,D.k2)
D.aYI=new B.x(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.b30=new B.x(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cwk=w([D.aYI,D.b30],x.O)
D.ddH=new C.iM("ribbons","Silk Ribbons","Elegance in every step",D.cwk,D.k2)
D.b3Y=new B.x(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.chI=w([G.za,D.b3Y],x.O)
D.ddu=new C.iM("kente","Kente Pride","Proud of our roots",D.chI,D.k2)
D.b6d=new B.x(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.b8z=new B.x(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cHd=w([D.b6d,D.b8z],x.O)
D.ddp=new C.iM("trophy","Trophy Shine","Winners together",D.cHd,D.k2)
D.cRd=w([Ak.IE,A.w],x.O)
D.ddh=new C.iM("shooting","Shooting Stars","Make a wish",D.cRd,D.t1)
D.aYZ=new B.x(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aaV=new B.x(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.cWt=w([D.aYZ,D.aaV],x.O)
D.ddv=new C.iM("bokeh","Golden Bokeh","Shine bright",D.cWt,D.k2)
D.aZh=new B.x(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.cMO=w([D.aZh,A.w],x.O)
D.ddn=new C.iM("orbits","Golden Orbits","Always moving forward",D.cMO,D.k2)
D.b8j=new B.x(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cJJ=w([A.a8W,D.b8j],x.O)
D.dds=new C.iM("flowers","Blooming Garden","Growing together",D.cJJ,D.N8)
D.aZ5=new B.x(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.aZB=new B.x(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.cVp=w([D.aZ5,D.aZB],x.O)
D.ddm=new C.iM("music","Music Party","Celebrate with us",D.cVp,D.t1)
D.b_p=new B.x(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.b8V=new B.x(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cxj=w([D.b_p,D.b8V],x.O)
D.ddG=new C.iM("mandala","Royal Mandala","Harmony and unity",D.cxj,D.k2)
D.cJN=w([G.za,D.aaV],x.O)
D.ddA=new C.iM("sparklers","Golden Sparklers","Light up the night",D.cJN,D.k2)
D.ddw=new C.iM("city","City Lights","The whole city celebrates",D.arX,D.k2)
D.F2=w([D.ddz,D.ddq,D.ddr,D.ddl,D.ddC,D.ddD,D.ddg,D.ddK,D.ddy,D.ddt,D.ddi,D.ddo,D.ddk,D.ddJ,D.ddf,D.ddB,D.ddE,D.ddj,D.ddF,D.ddI,D.ddx,D.ddH,D.ddu,D.ddp,D.ddh,D.ddv,D.ddn,D.dds,D.ddm,D.ddG,D.ddA,D.ddw],B.az("N<iM>"))
D.dW5=new B.A("","No ring")
D.e8R=new B.A("platinum","Platinum")
D.e68=new B.A("glow","Glow")
D.dZi=new B.A("double","Double line")
D.dYe=new B.A("framed","Gallery frame")
D.dVL=new B.A("rosegold","Rose gold")
D.e6O=new B.A("jewels","Jeweled")
D.e3H=new B.A("aurora","Aurora")
D.Ar=w([D.dW5,A.a2n,D.e8R,D.e68,H.aG0,D.dZi,A.a2p,D.dYe,D.dVL,D.e6O,D.e3H],x.L)
D.c1s=w([D.a0N,D.a0O,D.a0S,D.a0K,D.a0L,D.a0Q],x.h)
D.byh=new B.ac(G.aeW,16,null,null,null,null)
D.aUe=new B.uI(A.bf,D.byh,null,x.U)
D.bnf=new B.a_(58027,"MaterialIcons",!1)
D.bs2=new B.ac(D.bnf,16,null,null,null,null)
D.aUc=new B.uI(A.L,D.bs2,null,x.U)
D.bng=new B.a_(58030,"MaterialIcons",!1)
D.bw2=new B.ac(D.bng,16,null,null,null,null)
D.aUf=new B.uI(A.dK,D.bw2,null,x.U)
D.c7y=w([D.aUe,D.aUc,D.aUf],B.az("N<uI<pu>>"))
D.cf8=w([A.zh,A.hl],x.O)
D.cf9=w([A.bt,A.br,A.fq],x.O)
D.MY=w([A.bK,A.hn,A.hD,A.at,A.oE],x.O)
D.chO=w([A.bQ,D.iS,D.Iy],x.O)
D.cik=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.dTR=new B.A(4278913286,4280030216)
D.dU8=new B.A(4279373061,4278518787)
D.dUf=new B.A(4279898630,4278847235)
D.cGF=w([D.dTR,D.dU8,D.dUf],x.n)
D.cCO=w(["\u265b","\u269c","\u2726"],x.s)
D.dhB=new C.wH("Royal Onyx & Gold",D.cGF,4292128567,4294370209,4294965479,3874020544,D.cCO)
D.dTE=new B.A(4278326799,4278598442)
D.dTG=new B.A(4278395929,4278258953)
D.dTN=new B.A(4278599728,4278327826)
D.cVK=w([D.dTE,D.dTG,D.dTN],x.n)
D.cxT=w(["\u269c","\u2756","\u2727"],x.s)
D.dhy=new C.wH("Imperial Emerald",D.cVK,4293050997,4294699968,4294180856,3872254170,D.cxT)
D.dTH=new B.A(4278455076,4278918747)
D.dTM=new B.A(4278587439,4278322714)
D.dU_=new B.A(4279051376,4278455076)
D.cU2=w([D.dTH,D.dTM,D.dU_],x.n)
D.cNn=w(["\u2654","\u2726","\u2748"],x.s)
D.dhs=new C.wH("Sapphire Crown",D.cU2,4291417834,4294967295,4294310143,3871986666,D.cNn)
D.dUd=new B.A(4279894534,4283041554)
D.dUp=new B.A(4281008906,4279042307)
D.dUx=new B.A(4284221976,4279894534)
D.cYT=w([D.dUd,D.dUp,D.dUx],x.n)
D.cz4=w(["\u265b","\u2766","\u2726"],x.s)
D.dhu=new C.wH("Ruby Throne",D.cYT,4293378685,4294963145,4294964466,3874213833,D.cz4)
D.dU7=new B.A(4279371039,4281995100)
D.dUh=new B.A(4280092723,4278714896)
D.dUu=new B.A(4283045242,4279371039)
D.cW5=w([D.dU7,D.dUh,D.dUu],x.n)
D.cUn=w(["\u2655","\u2756","\u2727"],x.s)
D.dhz=new C.wH("Amethyst Palace",D.cW5,4293314984,4294963421,4294702591,3873229802,D.cUn)
D.dTJ=new B.A(4278519045,4280032287)
D.dU0=new B.A(4279111184,4278321666)
D.dUm=new B.A(4280492839,4278716426)
D.cT0=w([D.dTJ,D.dU0,D.dUm],x.n)
D.cLR=w(["\u2726","\u25c6","\u2742"],x.s)
D.dhw=new C.wH("Obsidian & Platinum",D.cT0,4293256418,4294967295,4294638330,3872378836,D.cLR)
D.dUe=new B.A(4279896588,4282194463)
D.dUn=new B.A(4280553487,4279043334)
D.dUv=new B.A(4283048488,4279896588)
D.cLn=w([D.dUe,D.dUn,D.dUv],x.n)
D.cXu=w(["\u2766","\u273f","\u2727"],x.s)
D.dht=new C.wH("Rose Gold Velvet",D.cLn,4293440672,4294960345,4294964979,3874214602,D.cXu)
D.dTK=new B.A(4278520340,4279180595)
D.dTP=new B.A(4278718495,4278322443)
D.dUb=new B.A(4279510591,4278520340)
D.coq=w([D.dTK,D.dTP,D.dUb],x.n)
D.cMu=w(["\u269c","\u2736","\u2756"],x.s)
D.dhx=new C.wH("Midnight Brass",D.coq,4291405148,4293975208,4294439914,3872837564,D.cMu)
D.dUK=new B.A(4294703086,4293780428)
D.dUG=new B.A(4294307549,4293187253)
D.dUL=new B.A(4294966517,4293977807)
D.cB2=w([D.dUK,D.dUG,D.dUL],x.n)
D.cMR=w(["\u269c","\u265b","\u2726"],x.s)
D.dhA=new C.wH("Ivory Marble & Gold",D.cB2,4289760572,4286209048,4280951062,3863625518,D.cMR)
D.dTV=new B.A(4278978566,4280555024)
D.dUa=new B.A(4279504137,4278518530)
D.dUr=new B.A(4281211923,4278978566)
D.cyX=w([D.dTV,D.dUa,D.dUr],x.n)
D.cV3=w(["\u2742","\u2726","\u265c"],x.s)
D.dhv=new C.wH("Onyx & Copper",D.cyX,4291856987,4294365880,4294964718,3873885630,D.cV3)
D.cir=w([D.dhB,D.dhy,D.dhs,D.dhu,D.dhz,D.dhw,D.dht,D.dhx,D.dhA,D.dhv],B.az("N<wH>"))
D.ckG=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: loan applications and loan services from the Home tab.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab, AI Inventor, Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.ckI=w([A.at,D.zb,A.hn],x.O)
D.e0f=new B.A("Original",null)
D.e0n=new B.A("Wide 16:9",1.7777777777777777)
D.e2v=new B.A("Landscape 3:2",1.5)
D.e_K=new B.A("Photo 4:3",1.3333333333333333)
D.e1m=new B.A("Square",1)
D.ecg=new B.A("Portrait 3:4",0.75)
D.apz=w([D.e0f,D.e0n,D.e2v,D.e_K,D.e1m,D.ecg],B.az("N<+(n,Q?)>"))
D.apA=w([A.hn,A.cd,A.bd,A.bE],x.O)
D.e2F=new B.A("","Original")
D.e4p=new B.A("circle","Circle")
D.e9A=new B.A("rounded","Rounded")
D.eas=new B.A("triangle","Triangle")
D.e6m=new B.A("hexagon","Hexagon")
D.e4O=new B.A("diamond","Diamond")
D.e3G=new B.A("arch","Arch")
D.Aw=w([D.e2F,D.e4p,D.e9A,D.eas,D.e6m,D.e4O,D.e3G],x.L)
D.dcG=new C.kV("classic_blue","Classic Blue","Normal",A.bh,A.c,A.jW,A.dC,A.aI)
D.dcW=new C.kV("campus_green","Campus Green","Normal",A.aW,A.lM,A.q_,A.fQ,A.fD)
D.dcN=new C.kV("warm_sand","Warm Sand","Normal",A.e2,A.hD,A.bK,A.iU,A.n7)
D.dcU=new C.kV("slate_minimal","Slate Minimal","Normal",A.bB,A.aO,A.aJ,A.M,A.aI)
D.dcF=new C.kV("coral_fresh","Coral Fresh","Normal",A.cl,A.i8,A.pU,A.kT,A.ra)
D.dcV=new C.kV("lavender_calm","Lavender Calm","Normal",A.b0,A.oG,A.z2,A.q2,A.jV)
D.dcH=new C.kV("ocean_breeze","Ocean Breeze","Normal",A.eY,A.q6,A.r7,A.tS,A.n8)
D.aaf=new B.x(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dcS=new C.kV("berry_pop","Berry Pop","Normal",A.f4,D.aaf,A.kN,G.U4,A.Dc)
D.dcI=new C.kV("midnight_pro","Midnight Pro","Professional",A.aB,A.M,A.ds,A.kN,A.cr)
D.dcR=new C.kV("executive_navy","Executive Navy","Professional",A.dg,A.a9D,A.dC,A.kO,A.bP)
D.dcP=new C.kV("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bj,A.M,A.aO,A.cr)
D.dcJ=new C.kV("corporate_steel","Corporate Steel","Professional",A.mm,A.M,A.lO,A.hr,A.bP)
D.dcM=new C.kV("gold_luxe","Gold Luxe","Luxury",A.oJ,A.dw,A.nR,A.nb,A.bK)
D.b5E=new B.x(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dcQ=new C.kV("rose_gold_elite","Rose Gold Elite","Luxury",A.hl,D.b5E,A.TX,A.i6,A.oE)
D.dcT=new C.kV("platinum_night","Platinum Night","Luxury",A.cr,A.dQ,A.bj,A.aO,A.aJ)
D.dcX=new C.kV("emerald_prestige","Emerald Prestige","Luxury",A.aS,A.oK,A.eO,A.oQ,A.j6)
D.dcE=new C.kV("royal_purple","Royal Purple","Luxury",A.mn,A.Tk,A.jV,A.kN,A.SV)
D.dcO=new C.kV("neon_pitch","Neon Pitch","Bold",A.bd,A.dQ,A.M,A.bc,A.aJ)
D.dcL=new C.kV("crimson_impact","Crimson Impact","Bold",A.bS,A.kS,A.fg,A.rp,A.fP)
D.dcK=new C.kV("sunset_gallery","Sunset Gallery","Bold",A.fZ,A.ra,A.kT,A.pU,A.oM)
D.Fb=w([D.dcG,D.dcW,D.dcN,D.dcU,D.dcF,D.dcV,D.dcH,D.dcS,D.dcI,D.dcR,D.dcP,D.dcJ,D.dcM,D.dcQ,D.dcT,D.dcX,D.dcE,D.dcO,D.dcL,D.dcK],B.az("N<kV>"))
D.cw5=w([A.bQ,D.iS],x.O)
D.cLC=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.e3t=new B.A("Faces & people",D.cLC)
D.ckM=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.dSQ=new B.A("Ideas & work",D.ckM)
D.cDf=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.e6r=new B.A("Nature",D.cDf)
D.cLK=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.e0d=new B.A("Places & things",D.cLK)
D.cGi=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.e3L=new B.A("Symbols",D.cGi)
D.cwb=w([D.e3t,D.dSQ,D.e6r,D.e0d,D.e3L],B.az("N<+(n,al<n>)>"))
D.aZa=new B.x(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cwv=w([A.bQ,D.a8Y,D.aZa],x.O)
D.aTJ=new B.aa(0,A.G,A.Ip,A.aAC,40)
D.aTq=new B.aa(0,A.G,A.n5,A.e6,8)
D.cwF=w([D.aTJ,D.aTq],x.V)
D.cx4=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.apZ=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.Zy=w([A.hn,A.fq,A.bS,A.aG,A.cl],x.O)
D.cxN=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.a9b=new B.x(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cxY=w([A.TQ,D.a9b,A.TQ],x.O)
D.cy1=w([A.hE,D.iS,D.Iy],x.O)
D.e02=new B.A(A.bf,D.Xj)
D.e1h=new B.A(A.L,D.Xi)
D.dWI=new B.A(A.dK,D.Xk)
D.cyS=w([D.e02,D.e1h,D.dWI],B.az("N<+(pu,a_)>"))
D.cJ=new C.H8(0,"text")
D.l3=new C.H8(1,"image")
D.eQ=new C.H8(2,"shape")
D.P0=new C.H8(3,"pdf")
D.kD=new C.H8(4,"signature")
D.a1c=new C.H8(5,"bio")
D.czG=w([D.cJ,D.l3,D.eQ,D.P0,D.kD,D.a1c],B.az("N<H8>"))
D.czH=w([A.bg,A.cx],B.az("N<G6>"))
D.cAg=w(["School","Documents","Sign & present"],x.s)
D.aTN=new B.aa(0,A.G,A.aaN,A.tk,28)
D.cAz=w([D.aTN],x.V)
D.cAR=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Nh=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aql=w([A.hn,A.Db,A.aJ,A.c,A.nS,A.at],x.O)
D.ebH=new B.A(0.1,0.08)
D.e6p=new B.A(0.3,0.05)
D.dWf=new B.A(0.55,0.1)
D.e_6=new B.A(0.8,0.06)
D.e1Z=new B.A(0.92,0.16)
D.e1w=new B.A(0.2,0.2)
D.e_x=new B.A(0.7,0.22)
D.e58=new B.A(0.05,0.4)
D.e2n=new B.A(0.95,0.45)
D.dWV=new B.A(0.12,0.7)
D.dYX=new B.A(0.88,0.75)
D.dZ4=new B.A(0.4,0.9)
D.dUY=new B.A(0.65,0.93)
D.dZL=new B.A(0.25,0.97)
D.e0_=new B.A(0.85,0.9)
D.dXG=new B.A(0.5,0.04)
D.cC7=w([D.ebH,D.e6p,D.dWf,D.e_6,D.e1Z,D.e1w,D.e_x,D.e58,D.e2n,D.dWV,D.dYX,D.dZ4,D.dUY,D.dZL,D.e0_,D.dXG],x.G)
D.cCf=w([A.c,A.hl,A.b4,A.aS],x.O)
D.dDV=new C.js("office_blue","Office Blue",A.bh,A.dC,A.aI,A.c,A.jW)
D.dE5=new C.js("campus_green","Campus Green",A.aW,A.fQ,A.fD,A.lM,A.q_)
D.dDW=new C.js("sunset","Sunset",A.fZ,A.kT,A.n7,A.i8,A.pU)
D.dDX=new C.js("midnight","Midnight",A.aB,A.kN,A.cr,A.M,A.ds)
D.dE7=new C.js("classic","Classic",A.dD,A.dw,A.li,A.hD,A.ho)
D.dE4=new C.js("rose_gold","Rose Gold",A.hl,A.w3,A.w2,A.u1,A.zh)
D.dDQ=new C.js("ocean_teal","Ocean Teal",A.eY,A.tS,A.n8,A.q6,A.r7)
D.dDP=new C.js("slate_pro","Slate Pro",A.bB,A.M,A.aI,A.aO,A.aJ)
D.dDO=new C.js("neon_night","Neon Night",A.bd,A.bc,A.aJ,A.dQ,A.M)
D.dE_=new C.js("lavender","Lavender",A.b0,A.q2,A.jV,A.oG,A.z2)
D.dE1=new C.js("coral","Coral",A.cl,A.kT,A.ra,A.i8,A.oM)
D.dDR=new C.js("forest","Forest",A.hp,A.eN,A.d3,A.lN,A.eX)
D.dDS=new C.js("berry","Berry",A.f4,G.U4,A.Dc,D.aaf,A.kN)
D.dDZ=new C.js("sand","Sand",A.e2,A.iU,A.n7,A.hD,A.bK)
D.dE3=new C.js("ice","Ice",A.mm,A.Tp,A.aI,A.mk,A.hr)
D.dDU=new C.js("charcoal","Charcoal",A.al,A.aO,A.cr,A.bj,A.M)
D.dDN=new C.js("mint","Mint",A.aS,A.ff,A.fQ,A.lN,A.oQ)
D.dE2=new C.js("crimson","Crimson",A.bS,A.mp,A.kS,A.D9,A.rp)
D.b0j=new B.x(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dDY=new C.js("gold","Gold",A.oJ,A.tQ,A.nR,D.b0j,A.nb)
D.dE0=new C.js("aqua","Aqua",A.bJ,A.CY,A.nP,A.oI,A.nT)
D.dDT=new C.js("plum","Plum",A.mn,A.w0,A.Dc,A.CN,A.rk)
D.dE6=new C.js("steel","Steel",A.dg,A.dC,A.bj,A.jW,A.kO)
D.ZN=w([D.dDV,D.dE5,D.dDW,D.dDX,D.dE7,D.dE4,D.dDQ,D.dDP,D.dDO,D.dE_,D.dE1,D.dDR,D.dDS,D.dDZ,D.dE3,D.dDU,D.dDN,D.dE2,D.dDY,D.dE0,D.dDT,D.dE6],B.az("N<js>"))
D.cCy=w([A.bQ,A.iV],x.O)
D.P2=new C.hl(10,"rotate3d")
D.G6=new C.hl(8,"flip")
D.aA9=new C.hl(19,"spiral")
D.pm=new C.hl(16,"bounce")
D.aAc=new C.hl(9,"flipVertical")
D.cCz=w([D.P2,D.G6,D.aA9,D.pm,D.aAc],x.i)
D.e_=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cCR=w([0.62,1],x.x)
D.cDn=w([0,0.32,0.68,1],x.x)
D.m7=new C.hl(6,"zoom")
D.te=new C.hl(4,"slideUp")
D.td=new C.hl(2,"slideLeft")
D.cDv=w([D.m7,D.G6,D.te,D.P2,D.td],x.i)
D.cDZ=w([A.cd,A.hl,A.i6,A.hn,A.c],x.O)
D.aTE=new B.aa(0,A.G,D.a9m,A.tk,30)
D.cED=w([D.aTE],x.V)
D.dKS=new B.v(0,-2.5)
D.dKI=new B.v(-2.5,0)
D.dJX=new B.v(2.5,0)
D.cEG=w([A.Ph,A.aAO,A.aB0,A.a1z,D.dKS,H.aAY,D.dKI,D.dJX],x.dN)
D.Fi=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cF6=w([23,114,69,56,80,144],x.t)
D.cFu=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cFT=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cHh=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cHl=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.b8=new C.u2(0,"rectangle")
D.ey=new C.u2(1,"circle")
D.kE=new C.u2(6,"hexagon")
D.cHx=w([D.b8,D.ey,D.kE],x.m)
D.nw=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aal=new B.x(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cI4=w([D.aal,A.eN],x.O)
D.dWq=new B.A("","Classic")
D.dVa=new B.A("caps","Bold caps")
D.e5b=new B.A("elegant","Elegant")
D.e9S=new B.A("shadow","Shadow")
D.e_r=new B.A("neon","Neon glow")
D.e8x=new B.A("outline","Outline")
D.e7M=new B.A("marker","Highlighter")
D.ea2=new B.A("stamp","Stamp")
D.e9v=new B.A("retro","Retro")
D.dZt=new B.A("threed","3D")
D.e5G=new B.A("fire","Fire")
D.e6y=new B.A("ice","Ice")
D.e4o=new B.A("chalk","Chalk")
D.e4t=new B.A("comic","Comic")
D.ea4=new B.A("sunset","Sunset")
D.eb8=new B.A("softglow","Soft glow")
D.e7t=new B.A("lowercase","Lowercase")
D.e4V=new B.A("double","Echo")
D.ebf=new B.A("whisper","Whisper")
D.ar9=w([D.dWq,D.dVa,D.e5b,D.e9S,D.e_r,D.e8x,D.e7M,D.ea2,D.e9v,D.dZt,H.aFZ,D.e5G,D.e6y,D.e4o,D.e4t,A.a2n,D.ea4,D.eb8,D.e7t,D.e4V,D.ebf],x.L)
D.cJc=w([3,5,7,10,12,15],x.t)
D.cKp=w([A.cd,A.bK,A.c,A.ev,A.dh],x.O)
D.d4s=new C.rC(10,"cardWorld")
D.AX=new C.Ag(3,"rounded")
D.dkC=new C.kY("world","NGMY World",D.d4s,D.AX,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.d4t=new C.rC(11,"cardSplit")
D.dky=new C.kY("business","Business Wire",D.d4t,D.AX,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.d4u=new C.rC(12,"cardBreaking")
D.dkL=new C.kY("breaking","Breaking Red",D.d4u,D.AX,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.d4v=new C.rC(13,"cardFeature")
D.dkE=new C.kY("feature","Tech Feature",D.d4v,D.AX,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.ayI=new C.rC(6,"circle")
D.ayC=new C.Ag(4,"circle")
D.dkI=new C.kY("parchment","Royal Circle",D.ayI,D.ayC,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dkx=new C.kY("ocean","Blue Ocean",D.ayI,D.ayC,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.d4y=new C.rC(7,"rail")
D.ayB=new C.Ag(1,"double")
D.dkz=new C.kY("forest","Green Leaf",D.d4y,D.ayB,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.ayF=new C.rC(1,"sideBySide")
D.dkN=new C.kY("herald","NGMY Herald",D.ayF,D.AX,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.ayE=new C.rC(0,"classic")
D.a0p=new C.Ag(9,"shadow")
D.dkM=new C.kY("daily","The Daily",D.ayE,D.a0p,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.d4w=new C.rC(2,"splash")
D.ayD=new C.Ag(6,"cutCorner")
D.dkw=new C.kY("tabloid","Big Tabloid",D.d4w,D.ayD,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.ayJ=new C.rC(9,"minimal")
D.dkH=new C.kY("modern","Modern Digest",D.ayJ,D.AX,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.ayG=new C.rC(3,"magazine")
D.ayA=new C.Ag(0,"plain")
D.dkD=new C.kY("midnight","Midnight Edition",D.ayG,D.ayA,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.d4z=new C.rC(8,"banner")
D.dkF=new C.kY("metro","Metro Wire",D.d4z,D.ayD,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.d4r=new C.Ag(8,"arch")
D.dkG=new C.kY("sunrise","Sunrise Post",D.ayG,D.d4r,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.ayH=new C.rC(5,"scrapbook")
D.d4q=new C.Ag(5,"tape")
D.dkB=new C.kY("neon","Neon Beat",D.ayH,D.d4q,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.d4x=new C.rC(4,"wrap")
D.dkO=new C.kY("gold","Golden Press",D.d4x,D.a0p,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dkP=new C.kY("minimal","Paper White",D.ayJ,D.a0p,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dkA=new C.kY("gazette","Fresh Gazette",D.ayE,D.ayB,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dkK=new C.kY("times","Classic Times",D.ayF,D.ayA,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Oz=new C.Ag(2,"polaroid")
D.dkJ=new C.kY("scrapbook","Memory Scrapbook",D.ayH,D.Oz,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a_0=w([D.dkC,D.dky,D.dkL,D.dkE,D.dkI,D.dkx,D.dkz,D.dkN,D.dkM,D.dkw,D.dkH,D.dkD,D.dkF,D.dkG,D.dkB,D.dkO,D.dkP,D.dkA,D.dkK,D.dkJ],B.az("N<kY>"))
D.cKB=w([0.45,1],x.x)
D.Fk=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.cKW=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fe6=new C.o3("Original",0,1,1,0,0,0)
D.fea=new C.o3("Black & white",0,1.1,0,0,0,0)
D.fdY=new C.o3("Noir",-0.05,1.55,0,0,0,0)
D.fe1=new C.o3("Sepia",0,1,0.25,0.9,0,0)
D.fe0=new C.o3("Vivid",0,1.15,1.6,0,0,0)
D.fdU=new C.o3("Pop",0,1.3,1.9,0,0,0)
D.fdW=new C.o3("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fe7=new C.o3("Matte",0,0.9,0.85,0,0,0.55)
D.fe2=new C.o3("Cool",0,1.05,1,-0.8,0,0)
D.fe9=new C.o3("Warm",0.03,1.05,1.1,0.8,0,0)
D.fdV=new C.o3("Golden hour",0.04,1,1.25,1,0,0)
D.fe_=new C.o3("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fe8=new C.o3("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fdZ=new C.o3("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fe4=new C.o3("Retro",0,0.9,0.7,0.4,0,0.35)
D.fe3=new C.o3("Forest",0,1,1.2,-0.1,-0.45,0)
D.fe5=new C.o3("Rose",0,1,1.1,0.3,0.4,0)
D.fdX=new C.o3("Ocean",0,1,1.2,-0.5,-0.2,0)
D.cKX=w([D.fe6,D.fea,D.fdY,D.fe1,D.fe0,D.fdU,D.fdW,D.fe7,D.fe2,D.fe9,D.fdV,D.fe_,D.fe8,D.fdZ,D.fe4,D.fe3,D.fe5,D.fdX],B.az("N<o3>"))
D.aYF=new B.x(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.cKY=w([D.aal,A.eN,D.aYF],x.O)
D.dSJ=new B.A(0.12,0.3)
D.e6I=new B.A(0.26,0.75)
D.e57=new B.A(0.8,0.22)
D.eac=new B.A(0.9,0.7)
D.e7s=new B.A(0.5,0.15)
D.e8z=new B.A(0.65,0.85)
D.dY7=new B.A(0.08,0.85)
D.cL8=w([D.dSJ,D.e6I,D.e57,D.eac,D.e7s,D.e8z,D.dY7],x.G)
D.ari=w([A.bd,A.cd,A.bE,A.bt],x.O)
D.cLV=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.cM6=w([A.c,A.hr,A.dE,A.tT],x.O)
D.b0u=new B.x(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.cMZ=w([D.b0u,D.a9b],x.O)
D.cN_=w([A.vX,A.at],x.O)
D.cNd=w([0,0.25,0.75,1],x.x)
D.cNf=w([A.vT,A.nS],x.O)
D.azK=new C.kC(10,"kenteSunset")
D.fim=w([D.a9t,A.js,A.at],x.O)
D.dfT=new C.j9("kuhowa_kente_sunset","Kente ya Jua",y.H,D.azK,4294964964,4282000405,4279983648,D.ji)
D.azL=new C.kC(11,"indigoMudcloth")
D.aZs=new B.x(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fiA=w([D.aZs,A.a98,A.hE],x.O)
D.dg0=new C.j9("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.azL,4294439140,4279903102,4279903102,D.ji)
D.azM=new C.kC(12,"adinkraRoyal")
D.b9w=new B.x(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fiB=w([D.a8f,D.b9w,A.at],x.O)
D.dg2=new C.j9("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.azM,4294965484,4285218591,4287322667,D.ji)
D.azN=new C.kC(13,"nileLotus")
D.b6p=new B.x(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.b3F=new B.x(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fiG=w([D.b6p,D.b3F,A.hE],x.O)
D.dg1=new C.j9("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azN,4294244340,4279196764,4279196764,D.ji)
D.azO=new C.kC(14,"shweshweIvory")
D.b21=new B.x(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b14=new B.x(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.aZU=new B.x(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fin=w([D.b21,D.b14,D.aZU],x.O)
D.dfY=new C.j9("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azO,4294505710,4279970378,4291058750,D.ji)
D.qB=new C.kC(15,"certIvoryNavy")
D.fil=w([D.J0,D.iS,A.hE],x.O)
D.azg=new C.wF(1,"ringsNdoa")
D.dfV=new C.j9("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.qB,4294966259,4279378237,4291404327,D.azg)
D.a0V=new C.wF(2,"coupleCards")
D.dfQ=new C.j9("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.qB,4294966259,4279378237,4291404327,D.a0V)
D.B_=new C.kC(18,"certIvoryNavyBar")
D.a8e=new B.x(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fiz=w([D.a8e,D.iS,A.hE],x.O)
D.azh=new C.wF(3,"kuhoweshaForm")
D.dfO=new C.j9("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.B_,4294966519,4279378237,4291404327,D.azh)
D.a9k=new B.x(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fiT=w([D.J0,D.a9k,A.hE],x.O)
D.a0W=new C.wF(4,"mahariPande")
D.dfR=new C.j9("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.qB,4294966259,4279904068,4291404327,D.a0W)
D.azP=new C.kC(16,"certIvoryGreen")
D.b1x=new B.x(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fip=w([A.Is,D.b1x,A.hE],x.O)
D.azi=new C.wF(5,"familiaMti")
D.dfX=new C.j9("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.azP,4294966776,4280241466,4291404327,D.azi)
D.a0X=new C.wF(6,"ndoaSafi")
D.dfP=new C.j9("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.B_,4294966519,4279378237,4291404327,D.a0X)
D.b59=new B.x(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fis=w([D.J0,A.hE,D.b59],x.O)
D.a0Y=new C.wF(7,"peteWide")
D.dfU=new C.j9("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.qB,4294966259,4282001936,4291404327,D.a0Y)
D.dg3=new C.wF(8,"muhuriCrest")
D.dfN=new C.j9("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.qB,4294966259,4279378237,4291404327,D.dg3)
D.fiC=w([D.a8e,D.a9k,A.hE],x.O)
D.dg4=new C.wF(9,"fomuWazi")
D.dg_=new C.j9("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.B_,4294966519,4279904068,4291404327,D.dg4)
D.azQ=new C.kC(17,"certIvoryRose")
D.b23=new B.x(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fiF=w([D.b23,D.a9Z,A.hE],x.O)
D.a0U=new C.wF(10,"upendoOrnate")
D.dfW=new C.j9("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.azQ,4294965493,4286200650,4291404327,D.a0U)
D.cNB=w([D.dfT,D.dg0,D.dg2,D.dg1,D.dfY,D.dfV,D.dfQ,D.dfO,D.dfR,D.dfX,D.dfP,D.dfU,D.dfN,D.dg_,D.dfW],x.h)
D.e0=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.G7=new C.v9(0,"emojis")
D.B6=new C.v9(1,"pictures")
D.G8=new C.v9(2,"icons3d")
D.a1e=new C.v9(3,"animations")
D.P4=new C.v9(4,"videoMotion")
D.B7=new C.v9(5,"luxe")
D.a_6=w([D.G7,D.B6,D.G8,D.a1e,D.P4,D.B7],B.az("N<v9>"))
D.e98=new B.A(A.dO,"Looks")
D.e__=new B.A(A.xc,"Light")
D.dZX=new B.A(A.nq,"Colour")
D.dY8=new B.A(A.wN,"Effects")
D.afX=new B.a_(63112,"MaterialIcons",!1)
D.dVn=new B.A(D.afX,"Crop")
D.cO0=w([D.e98,D.e__,D.dZX,D.dY8,D.dVn],x.f2)
D.cOB=w([],x.D)
D.fiQ=w([],x.L)
D.dYj=new B.A("Flashcard",D.G2)
D.e0O=new B.A("Quiz",D.G3)
D.e2A=new B.A("Worksheet",D.G4)
D.e_V=new B.A("Notes",D.m6)
D.e1f=new B.A("Section",D.B4)
D.cPb=w([D.dYj,D.e0O,D.e2A,D.e_V,D.e1f],B.az("N<+(n,m4)>"))
D.dhL=new C.kC(6,"beadedPearl")
D.b7I=new B.x(1,1,0.9921568627450981,0.9647058823529412,A.t)
D.b4d=new B.x(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fiU=w([D.b7I,D.b4d,A.hE],x.O)
D.aze=new C.j9("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dhL,4294966774,4286209070,4291404327,D.ji)
D.dhM=new C.kC(7,"artDeco")
D.b7u=new B.x(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.b9L=new B.x(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fiS=w([D.b7u,D.b9L,A.bQ],x.O)
D.azf=new C.j9("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dhM,4294440434,4280228630,4290283019,D.ji)
D.dhN=new C.kC(8,"rosetteCorners")
D.b94=new B.x(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b0w=new B.x(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.b49=new B.x(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fiv=w([D.b94,D.b0w,D.b49],x.O)
D.azd=new C.j9("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dhN,4294702831,4285218602,4291394365,D.ji)
D.dhO=new C.kC(9,"modernLedger")
D.fiu=w([A.c,D.iS,D.iS],x.O)
D.azc=new C.j9("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dhO,4294967295,4279378237,4279378237,D.ji)
D.cPf=w([D.aze,D.azf,D.azd,D.azc],x.h)
D.cPm=w([A.i6,A.nS],x.O)
D.cb=new C.hl(0,"none")
D.d8=new C.hl(1,"fade")
D.G5=new C.hl(3,"slideRight")
D.aAb=new C.hl(5,"slideDown")
D.dCp=new C.hl(7,"zoomOut")
D.a1d=new C.hl(11,"cube")
D.dCk=new C.hl(12,"blur")
D.aA8=new C.hl(13,"dissolve")
D.dCl=new C.hl(14,"wipeLeft")
D.dCm=new C.hl(15,"wipeRight")
D.P3=new C.hl(17,"push")
D.dCn=new C.hl(18,"flash")
D.aAa=new C.hl(20,"swing")
D.dCo=new C.hl(21,"curtain")
D.NM=w([D.cb,D.d8,D.td,D.G5,D.te,D.aAb,D.m7,D.dCp,D.G6,D.aAc,D.P2,D.a1d,D.dCk,D.aA8,D.dCl,D.dCm,D.pm,D.P3,D.dCn,D.aA9,D.aAa,D.dCo],x.i)
D.NN=w([D.a0T,D.a0R,D.a0K,D.a0L,D.a0M,D.a0P,D.a0N,D.a0O,D.a0S,D.a0Q,D.aze,D.azf,D.azd,D.azc],x.h)
D.cPK=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.cPO=w([A.z5,A.hn,A.bQ],x.O)
D.dZo=new B.A(A.rQ,"Design")
D.eaB=new B.A(D.agb,"Word sizes")
D.e7c=new B.A(A.Ah,"Text")
D.bqy=new B.a_(983182,"MaterialIcons",!1)
D.e7g=new B.A(D.bqy,"Photo")
D.dV_=new B.A(A.l_,"Logo")
D.ebF=new B.A(A.EH,"News")
D.cPT=w([D.dZo,D.eaB,D.e7c,D.e7g,D.dV_,D.ebF],x.f2)
D.cPU=w(["golddust","sparkle","sheen"],x.s)
D.dDM=new C.ek("upload_pdf",K.Lc,"Upload PDF")
D.dCW=new C.ek("sign_paper",A.EE,"Sign Paper")
D.bpR=new B.a_(63438,"MaterialIcons",!1)
D.dDI=new C.ek("hd_photo",D.bpR,"HD Photo")
D.dCO=new C.ek("sharpen",E.X3,"Sharpen")
D.dCY=new C.ek("print",K.Lc,"Download PDF")
D.dDp=new C.ek("rotate",D.afX,"Rotate")
D.dD6=new C.ek("text_box",A.Ah,"Text Box")
D.dD8=new C.ek("picture",A.rT,"Picture")
D.dD4=new C.ek("title",A.x6,"Title")
D.dD0=new C.ek("subtitle",U.agM,"Subtitle")
D.dDy=new C.ek("bullets",I.Xl,"Bullet List")
D.dD1=new C.ek("numbered",A.L2,"Numbered")
D.dDB=new C.ek("quote",A0.Aa,"Quote")
D.dDd=new C.ek("citation",A.p5,"Citation")
D.dDE=new C.ek("date_stamp",Au.X8,"Date Stamp")
D.dDr=new C.ek("page_number",A.x5,"Page #")
D.dDv=new C.ek("header_bar",A.ED,"Header")
D.dD7=new C.ek("footer_bar",P.ah2,"Footer")
D.dCX=new C.ek("divider",A.uq,"Divider")
D.dCT=new C.ek("highlight",A.Xr,"Highlight")
D.dDx=new C.ek("redact",A.x9,"Redact")
D.dDk=new C.ek("callout",A.A6,"Callout")
D.dDG=new C.ek("checkboxes",I.aff,"Checklist")
D.dDh=new C.ek("table",A.XT,"Table")
D.dDb=new C.ek("memo",I.XD,"Memo")
D.dDl=new C.ek("letter",A.Eo,"Letter")
D.bpr=new B.a_(63259,"MaterialIcons",!0)
D.dCN=new C.ek("agenda",D.bpr,"Agenda")
D.dCZ=new C.ek("toc",At.agp,"Contents")
D.bpN=new B.a_(63406,"MaterialIcons",!1)
D.dDi=new C.ek("sig_line",D.bpN,"Sign Line")
D.dCG=new C.ek("initial_line",A.iY,"Initials")
D.dCJ=new C.ek("approved",A.l_,"APPROVED")
D.dDn=new C.ek("draft",A.pb,"DRAFT")
D.dDt=new C.ek("confidential",A.iZ,"Confidential")
D.dDw=new C.ek("sticky",A.Lg,"Sticky Note")
D.dDF=new C.ek("progress",A.ago,"Progress")
D.br2=new B.a_(983507,"MaterialIcons",!1)
D.dCU=new C.ek("stars",D.br2,"Star Rating")
D.dCE=new C.ek("equation",A.age,"Equation")
D.dCP=new C.ek("timeline",A.Lh,"Timeline")
D.dDc=new C.ek("two_col",A.XV,"Two Columns")
D.dCR=new C.ek("compare",A_.Xb,"Compare")
D.dCC=new C.ek("duplicate_el",A.fx,"Duplicate")
D.dDK=new C.ek("delete_el",A.e4,"Delete")
D.bpI=new B.a_(63352,"MaterialIcons",!1)
D.dDA=new C.ek("bring_fwd",D.bpI,"Bring Front")
D.bpH=new B.a_(63351,"MaterialIcons",!1)
D.dCH=new C.ek("send_back",D.bpH,"Send Back")
D.dDm=new C.ek("align_left",D.Xj,"Align L")
D.dDs=new C.ek("align_center",D.Xi,"Align C")
D.dDJ=new C.ek("align_right",D.Xk,"Align R")
D.dD5=new C.ek("word_count",Z.WL,"Word Count")
D.dD2=new C.ek("link_text",A.h4,"Link")
D.dDq=new C.ek("phone",A.il,"Phone")
D.dCS=new C.ek("email",A.A8,"Email")
D.dDL=new C.ek("qr_placeholder",A.j0,"QR Placeholder")
D.dCM=new C.ek("rectangle",A1.Ee,"Rectangle")
D.dDg=new C.ek("circle",A.rL,"Circle")
D.dCI=new C.ek("arrow",A.je,"Arrow")
D.dDz=new C.ek("line",A.uq,"Line")
D.dCV=new C.ek("triangle",A.X9,"Triangle")
D.bpz=new B.a_(63318,"MaterialIcons",!1)
D.dD_=new C.ek("grayscale",D.bpz,"Grayscale")
D.dD9=new C.ek("brighten",I.afz,"Brighten")
D.dDe=new C.ek("flip_h",A.Eh,"Flip H")
D.bpG=new B.a_(63348,"MaterialIcons",!1)
D.dDH=new C.ek("flip_v",D.bpG,"Flip V")
D.dDu=new C.ek("cover_page",A.p1,"Cover Page")
D.dCF=new C.ek("invoice",A.fS,"Invoice")
D.dCQ=new C.ek("resume",A.lV,"Resume")
D.dD3=new C.ek("minutes",A.o5,"Minutes")
D.dCK=new C.ek("lab_report",A.Ld,"Lab Report")
D.dCL=new C.ek("rubric",A.wR,"Rubric")
D.dDf=new C.ek("flashcard_tool",P.Ey,"Flashcard")
D.dDC=new C.ek("quiz_tool",A.Et,"Quiz Block")
D.dDj=new C.ek("worksheet_tool",L.E7,"Worksheet")
D.dDo=new C.ek("outline_share",A.Le,"Share Outline")
D.dDD=new C.ek("export_json",D.afl,"Export JSON")
D.dCD=new C.ek("new_slide",D.WK,"New Slide")
D.dDa=new C.ek("present",A.p7,"Present")
D.cQi=w([D.dDM,D.dCW,D.dDI,D.dCO,D.dCY,D.dDp,D.dD6,D.dD8,D.dD4,D.dD0,D.dDy,D.dD1,D.dDB,D.dDd,D.dDE,D.dDr,D.dDv,D.dD7,D.dCX,D.dCT,D.dDx,D.dDk,D.dDG,D.dDh,D.dDb,D.dDl,D.dCN,D.dCZ,D.dDi,D.dCG,D.dCJ,D.dDn,D.dDt,D.dDw,D.dDF,D.dCU,D.dCE,D.dCP,D.dDc,D.dCR,D.dCC,D.dDK,D.dDA,D.dCH,D.dDm,D.dDs,D.dDJ,D.dD5,D.dD2,D.dDq,D.dCS,D.dDL,D.dCM,D.dDg,D.dCI,D.dDz,D.dCV,D.dD_,D.dD9,D.dDe,D.dDH,D.dDu,D.dCF,D.dCQ,D.dD3,D.dCK,D.dCL,D.dDf,D.dDC,D.dDj,D.dDo,D.dDD,D.dCD,D.dDa],B.az("N<ek>"))
D.cQo=w([A.cr,A.al],x.O)
D.dUB=new B.A(4286331629,4292552567)
D.dUo=new B.A(4280640491,4278630100)
D.dUJ=new B.A(4294538006,4292943176)
D.dTL=new B.A(4278556265,4280640491)
D.cLi=w([D.dUB,D.dUo,D.dUJ,D.dTL],x.n)
D.cbg=w([4294626325,4280472558,4294210230],x.t)
D.dCx=new C.nh("colorful","Colorful",A.nq,D.cLi,4294967295,3875536895,D.cbg,D.m7)
D.dUc=new B.A(4279522093,4279657780)
D.dUs=new B.A(4281750292,4283268111)
D.dTO=new B.A(4278603323,4279203438)
D.dUt=new B.A(4282343954,4279599165)
D.clY=w([D.dUc,D.dUs,D.dTO,D.dUt],x.n)
D.caZ=w([4288931381,4294829706,4287033260],x.t)
D.dCt=new C.nh("nature","Nature",A.EF,D.clY,4294442727,3874290891,D.caZ,D.d8)
D.dU6=new B.A(4279369771,4283178389)
D.dU3=new B.A(4279179050,4286456526)
D.dUk=new B.A(4280163147,4290648157)
D.dTD=new B.A(4278322711,4285343961)
D.cCJ=w([D.dU6,D.dU3,D.dUk,D.dTD],x.n)
D.cbc=w([4294210230,4280472558,4289170426],x.t)
D.dCr=new C.nh("vibe","Vibe",A.Xn,D.cCJ,4294967295,3874869502,D.cbc,D.td)
D.dUF=new B.A(4290007817,4292552567)
D.dUz=new B.A(4286328082,4294286859)
D.dUE=new B.A(4288485197,4294538006)
D.dUy=new B.A(4285343961,4293675161)
D.bIC=w([D.dUF,D.dUz,D.dUE,D.dUy],x.n)
D.cbh=w([4294829706,4294967295,4284999929],x.t)
D.dCs=new C.nh("celebration","Celebration",A.kX,D.bIC,4294967295,4009752557,D.cbh,D.pm)
D.dU1=new B.A(4279179050,4280171146)
D.dU5=new B.A(4279310375,4280232247)
D.dTU=new B.A(4278916151,4280172719)
D.dU2=new B.A(4279179050,4281549141)
D.cwo=w([D.dU1,D.dU5,D.dTU,D.dU2],x.n)
D.caU=w([4281908728,4294626325,4287931320],x.t)
D.dCw=new C.nh("professional","Professional",A.A5,D.cwo,4294967295,3872118241,D.caU,D.P3)
D.dTY=new B.A(4278995566,4278413729)
D.dTQ=new B.A(4278727492,4279137424)
D.dUl=new B.A(4280171146,4278751666)
D.dTZ=new B.A(4278995566,4279590517)
D.cf1=w([D.dTY,D.dTQ,D.dUl,D.dTZ],x.n)
D.caX=w([4286436348,4284410580,4294829706],x.t)
D.dCy=new C.nh("ocean","Ocean",I.XX,D.cf1,4294967295,3873501950,D.caX,D.te)
D.dUA=new B.A(4286328082,4294538006)
D.dUC=new B.A(4286781507,4294677052)
D.dUw=new B.A(4283178389,4294197086)
D.dUD=new B.A(4288295954,4294688548)
D.csF=w([D.dUA,D.dUC,D.dUw,D.dUD],x.n)
D.cbi=w([4294829706,4294967295,4294747557],x.t)
D.dCz=new C.nh("sunset","Sunset",A.Li,D.csF,4294967295,4009749973,D.cbi,D.d8)
D.dUN=new B.A(4294967295,4294047225)
D.dUI=new B.A(4294507260,4294967295)
D.dUM=new B.A(4294967295,4293060848)
D.dUH=new B.A(4294507260,4294047225)
D.cFA=w([D.dUN,D.dUI,D.dUM,D.dUH],x.n)
D.caS=w([4280640491,4279179050,4287931320],x.t)
D.dCv=new C.nh("minimal","Minimal",A1.Ee,D.cFA,4279179050,4282865001,D.caS,D.d8)
D.dTX=new B.A(4278979081,4280886564)
D.dUg=new B.A(4280031511,4278979081)
D.dU4=new B.A(4279308561,4281148438)
D.dTW=new B.A(4278979081,4280031511)
D.cS7=w([D.dTX,D.dUg,D.dU4,D.dTW],x.n)
D.cb5=w([4292128567,4294829706,4289241758],x.t)
D.dCA=new C.nh("elegant","Elegant",A.lr,D.cS7,4294898631,3873957348,D.cb5,D.aA8)
D.dUi=new B.A(4280159034,4282058596)
D.dTT=new B.A(4278916151,4280163147)
D.dUq=new B.A(4281208933,4278916151)
D.dU9=new B.A(4279502891,4283178389)
D.cXZ=w([D.dUi,D.dTT,D.dUq,D.dU9],x.n)
D.cbe=w([4294296657,4292128567,4291081725],x.t)
D.dCu=new C.nh("royal","Royal Gold",A.iI,D.cXZ,4294965222,3874084351,D.cbe,D.m7)
D.dTI=new B.A(4278464302,4280163147)
D.dTS=new B.A(4278916151,4279455306)
D.dUj=new B.A(4280163147,4283040846)
D.dTF=new B.A(4278332450,4281413249)
D.cL0=w([D.dTI,D.dTS,D.dUj,D.dTF],x.n)
D.caT=w([4281193663,4289170426,4294210230],x.t)
D.dCB=new C.nh("aurora","Aurora Glow",A.dO,D.cL0,4293983738,3869766608,D.caT,D.d8)
D.uM=w([D.dCx,D.dCt,D.dCr,D.dCs,D.dCw,D.dCy,D.dCz,D.dCv,D.dCA,D.dCu,D.dCB],B.az("N<nh>"))
D.b4F=new B.x(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.cQQ=w([A.pX,D.b4F,A.pX],x.O)
D.cR4=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.cR8=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.e76=new B.A("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.dYZ=new B.A("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.e2b=new B.A("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.dRU=new B.A("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.e0V=new B.A("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.e_j=new B.A("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.e3j=new B.A("Surprise me","")
D.cRD=w([D.e76,D.dYZ,D.e2b,D.dRU,D.e0V,D.e_j,D.e3j],x.L)
D.aZW=new B.x(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.b7R=new B.x(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.cSi=w([A.c,D.aZW,D.b7R],x.O)
D.cTV=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.azI=new C.kC(0,"heritageGold")
D.b3t=new B.x(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.b3u=new B.x(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.t)
D.fiV=w([D.b3t,D.b3u,A.at],x.O)
D.dfZ=new C.j9("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.azI,4294570461,4284234270,4292128567,D.ji)
D.azJ=new C.kC(1,"heritageCrimson")
D.aYB=new B.x(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.b22=new B.x(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.b7J=new B.x(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fiy=w([D.aYB,D.b22,D.b7J],x.O)
D.dfS=new C.j9("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.azJ,4294635750,4285213214,4292912216,D.ji)
D.cTZ=w([D.a0T,D.a0R,D.dfZ,D.dfS,D.a0M,D.a0P],x.h)
D.dlS=new C.qQ(1,"circuit")
D.dmk=new C.lJ("neural","Neural Link","Robotic",D.dlS,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dlR=new C.qQ(0,"grid")
D.dmh=new C.lJ("signal","Signal Grid","Robotic",D.dlR,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dlX=new C.qQ(2,"hexes")
D.dm2=new C.lJ("core","Core Protocol","Robotic",D.dlX,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aA5=new C.qQ(11,"diagonal")
D.dmd=new C.lJ("steel","Steel Tech","Robotic",D.aA5,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aA6=new C.qQ(3,"rings")
D.dm1=new C.lJ("vault","Vault Gold","Robotic",D.aA6,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dlV=new C.qQ(13,"leaves")
D.dm4=new C.lJ("forest","Forest Morning","Nature",D.dlV,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aA7=new C.qQ(5,"waves")
D.dmb=new C.lJ("ocean","Ocean Calm","Nature",D.aA7,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dlY=new C.qQ(6,"sunset")
D.dmg=new C.lJ("sunset","Sunset Glow","Nature",D.dlY,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dlZ=new C.qQ(7,"mountains")
D.dm3=new C.lJ("mountain","Mountain Air","Nature",D.dlZ,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dm_=new C.qQ(8,"stars")
D.dma=new C.lJ("night","Night Sky","Nature",D.dm_,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a1b=new C.qQ(4,"orbs")
D.dm8=new C.lJ("aurora","Aurora","Nature",D.a1b,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dmi=new C.lJ("sand","Sand Dune","Nature",D.aA7,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dm0=new C.qQ(9,"rays")
D.dm7=new C.lJ("golden","Golden Hour","Warm",D.dm0,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dm5=new C.lJ("royal","Royal Purple","Warm",D.aA5,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dm6=new C.lJ("rose","Rose Petal","Warm",D.a1b,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dlU=new C.qQ(12,"blocks")
D.dm9=new C.lJ("electric","Electric Blue","Bold",D.dlU,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dmj=new C.lJ("mint","Fresh Mint","Bold",D.a1b,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dlW=new C.qQ(14,"minimal")
D.dmf=new C.lJ("white","Clean White","Clean",D.dlW,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dlT=new C.qQ(10,"frame")
D.dmc=new C.lJ("midnight","Midnight Gold","Clean",D.dlT,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dme=new C.lJ("community","Community Green","Clean",D.aA6,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a_w=w([D.dmk,D.dmh,D.dm2,D.dmd,D.dm1,D.dm4,D.dmb,D.dmg,D.dm3,D.dma,D.dm8,D.dmi,D.dm7,D.dm5,D.dm6,D.dm9,D.dmj,D.dmf,D.dmc,D.dme],B.az("N<lJ>"))
D.cUk=w([D.zb,A.vX,A.hn,A.bQ],x.O)
D.cUz=w([D.aa8,D.iS],x.O)
D.cUI=w(["pdf","docx","txt","md"],x.s)
D.eeJ=new B.bz(-3,150,34)
D.eeK=new B.bz(-3,214,62)
D.eeL=new B.bz(-3,288,62)
D.cVu=w([D.eeJ,D.eeK,D.eeL],B.az("N<+(Q,Q,Q)>"))
D.cVV=w(["rays","bokeh","aurora","spotlight"],x.s)
D.cWs=w(["Write","Design","Print & fold"],x.s)
D.jj=new C.u2(2,"triangle")
D.B5=new C.u2(3,"arrow")
D.fb=new C.u2(4,"line")
D.jk=new C.u2(5,"parallelogram")
D.cWu=w([D.b8,D.ey,D.jj,D.B5,D.fb,D.jk,D.kE],x.m)
D.dSX=new B.A(240,96)
D.dVg=new B.A(560,46)
D.cWz=w([D.dSX,D.dVg],x.G)
D.fj5=new C.wI(0,"classic")
D.dhR=new C.nd("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.azI,4294570461,4282000405,4284234270)
D.di2=new C.nd("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.azJ,4294635750,4281999378,4285213214)
D.dhS=new C.nd("elegant_navy","Umoja Mzuri",y.s,D.a15,4294967035,4279378237,4290283019)
D.di4=new C.nd("elegant_gold","Umoja wa Dhahabu",y.Q,D.azR,4294966515,4281016592,4289102906)
D.di6=new C.nd("kente_sunset","Kente ya Jua",y.H,D.azK,4294964964,4282000405,4279983648)
D.dhP=new C.nd("indigo_mudcloth","Nguo ya Indigo",y.n,D.azL,4294439140,4279903102,4279903102)
D.dhU=new C.nd("adinkra_royal","Muhuri wa Adinkra",y.z,D.azM,4294965484,4285218591,4287322667)
D.dhZ=new C.nd("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.azN,4294244340,4279196764,4279196764)
D.di0=new C.nd("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.azO,4294505710,4279970378,4291058750)
D.fj6=new C.wI(1,"ringsNdoa")
D.dhT=new C.nd("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.qB,4294966259,4279378237,4291404327)
D.fj8=new C.wI(2,"coupleCards")
D.di3=new C.nd("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.qB,4294966259,4279378237,4291404327)
D.fj9=new C.wI(3,"kuhoweshaForm")
D.di_=new C.nd("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.B_,4294966519,4279378237,4291404327)
D.fja=new C.wI(4,"mahariPande")
D.dhQ=new C.nd("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.qB,4294966259,4279904068,4291404327)
D.fjb=new C.wI(5,"familiaMti")
D.di5=new C.nd("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.azP,4294966776,4280241466,4291404327)
D.fjc=new C.wI(6,"ndoaSafi")
D.dhX=new C.nd("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.B_,4294966519,4279378237,4291404327)
D.fjd=new C.wI(7,"peteWide")
D.dhW=new C.nd("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.qB,4294966259,4282001936,4291404327)
D.fje=new C.wI(8,"muhuriCrest")
D.dhV=new C.nd("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.qB,4294966259,4279378237,4291404327)
D.fjf=new C.wI(9,"fomuWazi")
D.dhY=new C.nd("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.B_,4294966519,4279904068,4291404327)
D.fj7=new C.wI(10,"upendoOrnate")
D.di1=new C.nd("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.azQ,4294965493,4286200650,4291404327)
D.NZ=w([D.dhR,D.di2,D.dhS,D.di4,D.di6,D.dhP,D.dhU,D.dhZ,D.di0,D.dhT,D.di3,D.di_,D.dhQ,D.di5,D.dhX,D.dhW,D.dhV,D.dhY,D.di1],B.az("N<nd>"))
D.B3=new C.aor(0,"landscape169")
D.nx=new C.aor(1,"portrait916")
D.cXd=w([D.B3,D.nx],B.az("N<aor>"))
D.asz=w([A.hn,A.bK,A.dh,A.i6,A.c],x.O)
D.t5=w([A.bQ,A.iU],x.O)
D.dSe=new B.A(1000,"M")
D.dWh=new B.A(900,"CM")
D.dVb=new B.A(500,"D")
D.dTB=new B.A(400,"CD")
D.dSf=new B.A(100,"C")
D.dWi=new B.A(90,"XC")
D.dVc=new B.A(50,"L")
D.dTC=new B.A(40,"XL")
D.dSj=new B.A(10,"X")
D.dWs=new B.A(9,"IX")
D.dVq=new B.A(5,"V")
D.dUZ=new B.A(4,"IV")
D.dSE=new B.A(1,"I")
D.cXJ=w([D.dSe,D.dWh,D.dVb,D.dTB,D.dSf,D.dWi,D.dVc,D.dTC,D.dSj,D.dWs,D.dVq,D.dUZ,D.dSE],x.ek)
D.efC=new B.d8(["open",A.iY,"Open & write","Keep writing this book"])
D.eg0=new B.d8(["print",A.rW,"Print as a book","Fold and staple it"])
D.cXQ=w([D.efC,D.eg0],B.az("N<+(n,a_,n,n)>"))
D.cYp=w([D.a1d,D.m7,D.G6,D.P3,D.d8,D.P2],x.i)
D.e7A=new B.A(-1,"Small")
D.dS2=new B.A(0,"Normal")
D.dSD=new B.A(1,"Big")
D.dTa=new B.A(2,"Huge")
D.cYO=w([D.e7A,D.dS2,D.dSD,D.dTa],x.ek)
D.cZc=w([49,65,89,38,83,89],x.t)
D.cZj=w([A.vX,A.hn,A.bQ],x.O)
D.cZI=w([D.d8,D.m7,D.td,D.a1d,D.G6,D.P3],x.i)
D.axQ=new B.dW([0,D.Jc,8,D.abj,12,D.abk],B.az("dW<I,a1J>"))
D.dHe={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.b7C=new B.x(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cwy=w([A.bK,D.b7C],x.O)
D.bI4=w([A.bL,A.bP],x.O)
D.cOY=w([A.bc,A.bh],x.O)
D.cKd=w([A.cd,A.b4,A.cV],x.O)
D.cXR=w([A.cr,A.bB],x.O)
D.cDy=w([A.bd,A.f4],x.O)
D.cMF=w([A.b0,A.fr],x.O)
D.b1P=new B.x(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.cM1=w([D.b1P,A.nS],x.O)
D.cH4=w([A.i4,A.vZ],x.O)
D.cDo=w([A.bq,A.c9],x.O)
D.d1i=new B.bt(D.dHe,[D.cwy,D.bI4,D.cOY,D.cKd,D.cXR,D.cDy,D.cMF,D.cM1,D.cH4,D.cDo],B.az("bt<n,al<x>>"))
D.dGs={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a04=new B.bt(D.dGs,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.az("bt<n,n>"))
D.a0a=new B.bt(A.iq,[],B.az("bt<I,+icon3d,picture(n?,n?)>"))
D.d5b=new F.Lc(30,null)
D.da7=new F.m0("Chapter 1","","","")
D.cX1=w([D.da7],x.B)
D.dab=new F.qG("My Book","","",D.cX1,E.az3)
D.da9=new F.tT("starry",null,null,null,null,"","","")
D.dac=new F.qG("Dream Big","","",E.a_g,D.da9)
D.daa=new F.tT("story",null,null,null,null,"","","")
D.dad=new F.qG("Little Lion","","",E.a_g,D.daa)
D.da8=new F.tT("vintage",null,null,null,null,"","","")
D.dae=new F.qG("Our Story","","",E.a_g,D.da8)
D.dde=new C.Db("","NGMY","","")
D.dkv=new C.yr("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.dCq=new C.aYH(null,null,null,null)
D.dE8=new C.aow(null)
D.dEl=new C.ap1(0,"smaller")
D.dEm=new C.ap1(1,"bigger")
D.aAl=new C.ap1(2,"fit")
D.dJ3=new B.v(3,6)
D.dJc=new B.v(4,8)
D.dLP=new B.C(E.ac6,U.a7N,null)
D.dLT=new B.C(A.UP,A.lH,null)
D.bsi=new B.ac(A.mE,16,A.c2,null,null,null)
D.dLX=new B.C(A.jY,D.bsi,null)
D.aY4=new B.f9(2.2,null,null,null,null,A.c,null,null,null,null)
D.dM6=new B.C(A.DK,D.aY4,null)
D.bCj=new B.ac(A.cu,16,A.aA,null,null,null)
D.dMa=new B.C(A.ef,D.bCj,null)
D.eS_=new B.w("Play",null,A.or,null,null,null,null,null,null,null,null,null)
D.cPc=w([V.ai9,A.tv,D.eS_],x.p)
D.ej_=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cPc,null)
D.dMd=new B.C(A.rC,D.ej_,null)
D.aYd=new B.f9(2.4,null,null,null,null,null,null,null,null,null)
D.enN=new B.a3(20,20,D.aYd,null)
D.dMi=new B.C(A.jY,D.enN,null)
D.f_k=new B.w("Seconds per slide",null,A.h8,null,null,null,null,null,null,null,null,null)
D.dMp=new B.C(A.bk,D.f_k,null)
D.dMM=new C.a6s(2,"print")
D.dMP=new B.iD(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.dOr=new B.fZ("/Annot")
D.dOt=new B.fZ("/URI")
D.eMN=new B.w("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.dQb=new B.jb("share",48,D.eMN,null,B.az("jb<n>"))
D.bCe=new B.ac(A.dO,14,A.ev,null,null,null)
D.dQk=new B.cE(null,-2,-2,null,null,null,D.bCe,null)
D.b51=new B.x(0.3333333333333333,0,0,0,A.t)
D.cyj=w([D.b51,A.K],x.O)
D.bHu=new B.a8(A.a1,A.a7,A.x,D.cyj,null,null)
D.aRj=new B.o(null,null,null,null,null,D.bHu,A.n)
D.bbF=new B.kz(D.aRj,A.b7,null,null)
D.dQw=new B.cE(0,0,null,0,8,null,D.bbF,null)
D.cT1=w([A.hD,A.oM,A.cl],x.O)
D.dR9=new B.bS(A.B,0.5,A.x,null,0,D.cT1,null,null)
D.dT3=new B.A(0.22,A.bh)
D.dWL=new B.A("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.dYE=new B.A(0.5,A.hl)
D.e6k=new B.A(0.78,A.aS)
D.eft=new B.d8([A.bE,0.22,0.7,2.6])
D.efy=new B.d8([A.bd,0.36,1.2,1.3])
D.efE=new B.d8([A.dN,0.28,0.2,0.4])
D.efK=new B.d8([A.cE,0.05,0.3,0.35])
D.efQ=new B.d8([A.bq,0.28,0.9,0])
D.efY=new B.d8([A.aB,-0.25,-0.15,0.45])
D.egD=new B.d8([A.cd,0.42,1,4.1])
D.eiJ=new B.a7k(9)
D.btp=new B.ac(A.EH,28,A.cV,null,null,null)
D.f_Q=new B.w("NGMY News",null,A.dP,null,null,null,null,null,null,null,null,null)
D.bkw=new B.bE(1,A.bn,D.f_Q,null)
D.cVY=w([D.btp,A.av,D.bkw],x.p)
D.eiV=new B.cC(A.aY,A.e,A.j,A.m,null,A.p,null,0,D.cVY,null)
D.btA=new B.ac(A.p5,16,A.c,null,null,null)
D.f1a=new B.w("Book",null,A.qP,null,null,null,null,null,null,null,null,null)
D.cZi=w([D.btA,A.eA,D.f1a],x.p)
D.ej1=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cZi,null)
D.bzU=new B.ac(A.iZ,10,A.c,null,null,null)
D.eQf=new B.w("Pro",null,A.nE,null,null,null,null,null,null,null,null,null)
D.cPh=w([D.bzU,A.v3,D.eQf],x.p)
D.ej4=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cPh,null)
D.f_j=new B.w("Make a newspaper",null,An.QQ,null,null,null,null,null,null,null,null,null)
D.bIA=w([E.Yh,A.aa,D.f_j],x.p)
D.ej5=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.bIA,null)
D.byv=new B.ac(A.kX,18,A.bK,null,null,null)
D.eSd=new B.w("Ending celebration",null,A.jo,null,null,null,null,null,null,null,null,null)
D.cV5=w([D.byv,A.bo,D.eSd],x.p)
D.ej8=new B.cC(A.aY,A.e,A.j,A.m,null,A.p,null,0,D.cV5,null)
D.bzG=new B.ac(A.iY,18,A.kT,null,null,null)
D.ey_=new B.G(!0,A.kT,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1q=new B.w("Write",null,D.ey_,null,null,null,null,null,null,null,null,null)
D.cFp=w([D.bzG,A.aa,D.f1q],x.p)
D.ejd=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cFp,null)
D.eQe=new B.w("Download picture",null,A.py,null,null,null,null,null,null,null,null,null)
D.bmh=new B.pL(A.e8,A.B,A.h,D.eQe,null)
D.bms=new B.dl(1,A.cj,D.bmh,null)
D.cPA=w([K.ai_,A.aa,D.bms],x.p)
D.eje=new B.cC(A.aY,A.b5,A.j,A.m,null,A.p,null,0,D.cPA,null)
D.bvl=new B.ac(A.EH,22,A.cV,null,null,null)
D.eZ4=new B.w("NGMY NEWS",null,H.a3N,null,null,null,null,null,null,null,null,null)
D.cxQ=w([D.bvl,A.aa,D.eZ4],x.p)
D.ejm=new B.cC(A.aY,A.e,A.R,A.m,null,A.p,null,0,D.cxQ,null)
D.ejx=new B.oD(!1,!1,null,U.SG,null,A.bV,null,null,null)
D.a2P=new B.jB([D.cb,D.d8,D.td,D.G5,D.te,D.aAb],B.az("jB<hl>"))
D.dIh={title:0,quote:1,closing:2,bio:3}
D.ekj=new B.fc(D.dIh,4,x.M)
D.dGJ={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ekl=new B.fc(D.dGJ,5,x.M)
D.dHQ={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a2Q=new B.fc(D.dHQ,8,x.M)
D.dHm={Design:0,Transitions:1,Insert:2}
D.ekp=new B.fc(D.dHm,3,x.M)
D.fjn=new B.jB([D.a1e],B.az("jB<v9>"))
D.dHt={float3d:0,drift:1,pulse:2}
D.eks=new B.fc(D.dHt,3,x.M)
D.aGS=new B.jB([D.G2,D.G3,D.G4],B.az("jB<m4>"))
D.dGG={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aGU=new B.fc(D.dGG,14,x.M)
D.fjo=new B.fc(A.iq,0,B.az("fc<v9>"))
D.dHq={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Q_=new B.fc(D.dHq,4,x.M)
D.dGA={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aGW=new B.fc(D.dGA,30,x.M)
D.dHy={circle:0,triangle:1,hexagon:2,diamond:3}
D.ekH=new B.fc(D.dHy,4,x.M)
D.emO=new B.ap(390,844)
D.enx=new B.a3(20,20,A3.In,null)
D.aHH=new B.a3(null,2.5,null,null)
D.enH=new B.a3(18,18,A3.In,null)
D.bzK=new B.ac(A.iI,19,A.c,null,null,null)
D.enS=new B.a3(38,38,D.bzK,null)
D.by6=new B.ac(A.xd,22,A.c,null,null,null)
D.enU=new B.a3(40,40,D.by6,null)
D.eor=new B.hH(2,10,10,1.15,null)
D.aHP=new B.hH(2,16,14,0.62,null)
D.biH=new B.M(32,30,32,40)
D.aZl=new B.x(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.btm=new B.ac(A.p1,56,D.aZl,null,null,null)
D.aaE=new B.x(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.ezW=new B.G(!0,D.aaE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new B.w("Your books will live here.",null,D.ezW,null,A.L,null,null,null,null,null,null,null)
D.cHW=w([D.btm,A.T,D.eWk],x.p)
D.baS=new B.fj(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cHW,null)
D.dMn=new B.C(D.biH,D.baS,null)
D.eoM=new B.lL(D.dMn,null)
D.eWh=new B.w("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.ep3=new B.aY(D.eWh,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eUu=new B.w("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.ep4=new B.aY(D.eUu,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZ6=new B.w("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.epd=new B.aY(D.eZ6,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZB=new B.w("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eps=new B.aY(D.eZB,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eTi=new B.w("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.epF=new B.aY(D.eTi,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f52=new B.w("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.epY=new B.aY(D.f52,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2q=new B.w("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eq8=new B.aY(D.f2q,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eZJ=new B.w("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eqP=new B.aY(D.eZJ,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eOD=new B.w("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.er4=new B.aY(D.eOD,null,null,null,null,null,null,null,A.i_,null,null,null,null,A.oS,!1,null,null,null,A.q,null)
D.eQl=new B.w("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.erm=new B.aY(D.eQl,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eW_=new B.w("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ero=new B.aY(D.eW_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eVG=new B.w("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.erp=new B.aY(D.eVG,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f0x=new B.w("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.erq=new B.aY(D.f0x,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eL3=new B.w("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.erz=new B.aY(D.eL3,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eRp=new B.w("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.erW=new B.aY(D.eRp,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f3V=new B.w("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.erY=new B.aY(D.f3V,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f3x=new B.w("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.es1=new B.aY(D.f3x,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eK9=new B.w("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.es3=new B.aY(D.eK9,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f_L=new B.w("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.esc=new B.aY(D.f_L,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f38=new B.w("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.esr=new B.aY(D.f38,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f3_=new B.w("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.est=new B.aY(D.f3_,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eK1=new B.w("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.esz=new B.aY(D.eK1,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNH=new B.w("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.et0=new B.aY(D.eNH,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.f2d=new B.w("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.etb=new B.aY(D.f2d,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.eNv=new B.w("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.etq=new B.aY(D.eNv,null,null,null,null,null,null,null,null,null,null,null,null,A.S,!1,null,null,null,A.q,null)
D.b4p=new B.x(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cwK=w([A.i6,A.nS,D.b4p,D.a86,A.i6],x.O)
D.etO=new B.fQ(A.B,0,6.283185307179586,A.x,D.cwK,null,null)
D.cEH=w([A.bK,A.bQ,A.hn,D.zb,A.bK],x.O)
D.aIo=new B.fQ(A.B,0,6.283185307179586,A.x,D.cEH,null,null)
D.cR2=w([A.cd,A.bE,A.bd,A.bt,A.cV,A.cd],x.O)
D.etT=new B.fQ(A.B,0,6.283185307179586,A.x,D.cR2,null,null)
D.cyx=w([A.oQ,A.nT,A.z2,A.i6,A.oQ],x.O)
D.etU=new B.fQ(A.B,0,6.283185307179586,A.x,D.cyx,null,null)
D.cQX=w([A.aO,A.bP,A.aJ,A.al,A.aO],x.O)
D.etV=new B.fQ(A.B,0,6.283185307179586,A.x,D.cQX,null,null)
D.cXA=w([A.bq,A.bd,A.bE,A.cd,A.bq],x.O)
D.etX=new B.fQ(A.B,0,6.283185307179586,A.x,D.cXA,null,null)
D.b4E=new B.x(1,0,1,1,A.t)
D.b_r=new B.x(1,1,0,1,A.t)
D.cUc=w([A.CG,A.a9z,H.a8J,D.b4E,H.a93,D.b_r,A.CG],x.O)
D.etY=new B.fQ(A.B,0,6.283185307179586,A.x,D.cUc,null,null)
D.euc=new C.at_(2,"immersiveSticky")
D.eud=new C.at_(3,"edgeToEdge")
D.eue=new C.at_(4,"manual")
D.ewn=new B.G(!0,A.nO,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIU=new B.G(!0,A.fP,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewU=new B.G(!0,E.mq,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eyf=new B.G(!0,A.aj,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eze=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezn=new B.G(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezI=new B.G(!0,A.ev,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAZ=new B.G(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB7=new B.G(!0,A.j9,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBk=new B.qZ(!0,A.Gn,null,null,null,null,A.dk,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBN=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCo=new B.G(!0,A.iV,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCJ=new B.G(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dMS=new B.iD(1,1,0.7568627450980392,0.027450980392156862)
D.eCN=new B.qZ(!0,D.dMS,null,null,null,null,A.dk,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9F=new B.x(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aJB=new B.G(!0,D.a9F,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCT=new B.G(!0,D.aaE,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCU=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJD=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDt=new B.qZ(!0,A.oi,null,null,null,null,A.dk,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDM=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.QL=new B.G(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEg=new B.G(!0,A.c,null,null,null,null,16,A.I,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEi=new B.G(!0,D.a9F,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Hd=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEK=new B.G(!0,A.bQ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eES=new B.G(!0,A.bP,null,null,null,null,14,A.a0,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEV=new B.G(!0,A.bK,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFa=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.aqE,null,null,null)
D.eFc=new B.G(!0,A.cN,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFe=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFq=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFB=new B.G(!0,A.dE,null,null,null,null,13,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eG8=new B.G(!0,A.aQ,null,null,null,null,null,A.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGh=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGw=new B.G(!0,A.aj,null,null,null,null,15,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKc=new B.G(!0,A.c,null,null,null,null,14.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKe=new B.G(!0,A.c2,null,null,null,null,11.5,A.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b8U=new B.x(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eIe=new B.G(!0,D.b8U,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKm=new B.G(!0,E.mq,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIG=new B.G(!0,A.bP,null,null,null,null,11,A.a0,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIJ=new B.G(!0,O.kR,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC_=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJQ=new B.w("NEW",null,D.eC_,null,null,null,null,null,null,null,null,null)
D.eK4=new B.w("Hati ya Kuhowesha",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eKu=new B.w("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.eKO=new B.w("Scrollable PDF on this slide",null,A.di,null,null,null,null,null,null,null,null,null)
D.eLs=new B.w("Big quote mark",null,A.it,null,null,null,null,null,null,null,null,null)
D.eLu=new B.w("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.eLF=new B.w("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.eM6=new B.w("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.eM7=new B.w("How many slides?",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eME=new B.w("Transfer",null,A.cc,null,null,null,null,null,null,null,null,null)
D.ey2=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMY=new B.w("Luxury FX",null,D.ey2,null,null,null,null,null,null,null,null,null)
D.eNf=new B.w("Font",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eNq=new B.w("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.eNw=new B.w("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.eHM=new B.G(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNE=new B.w("Example  GA847",null,D.eHM,null,null,null,null,null,null,null,null,null)
D.eO2=new B.w("Design shapes",null,A.it,null,null,null,null,null,null,null,null,null)
D.eOa=new B.w("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eOe=new B.w("Non-stop (loop)",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eOr=new B.w("Hati ya Kuhoweya",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eOK=new B.w("Photo studio",null,A.fM,null,null,null,null,null,null,null,null,null)
D.eP9=new B.w("Add your picture",null,A.l6,null,null,null,null,null,null,null,null,null)
D.eBl=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePa=new B.w("Enter document code",null,D.eBl,null,A.L,null,null,null,null,null,null,null)
D.ePb=new B.w("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.ePg=new B.w("English",null,null,null,null,null,null,null,null,null,null,null)
D.ez3=new B.G(!0,E.mq,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePy=new B.w("Delete this book?",null,D.ez3,null,A.L,null,null,null,null,null,null,null)
D.eDj=new B.G(!0,E.mq,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQn=new B.w("Your library",null,D.eDj,null,null,null,null,null,null,null,null,null)
D.eQr=new B.w("Delete",null,A.aJv,null,null,null,null,null,null,null,null,null)
D.eQt=new B.w("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Am.Hb,null,null,null,null,null,null,null,null,null)
D.eQD=new B.w("Element flies in",null,A.aJH,null,null,null,null,null,null,null,null,null)
D.R2=new B.w("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new B.w("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.eRi=new B.w("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.eRm=new B.w("Cancel",null,E.aJS,null,null,null,null,null,null,null,null,null)
D.eRo=new B.w("The lines and circles that come with the design",null,A.i0,null,null,null,null,null,null,null,null,null)
D.eGE=new B.G(!0,A.j8,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRO=new B.w("DOCUMENT CODE",null,D.eGE,null,null,null,null,null,null,null,null,null)
D.eSx=new B.w("Quotes",null,G.a4o,null,null,null,null,null,null,null,null,null)
D.eAM=new B.G(!0,O.kR,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSF=new B.w("Add a picture",null,D.eAM,null,null,null,null,null,null,null,null,null)
D.eSM=new B.w("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,R.aJw,null,A.L,null,null,null,null,null,null,null)
D.eSP=new B.w("Look & feel",null,A.h8,null,null,null,null,null,null,null,null,null)
D.eST=new B.w("Rings",null,A.jo,null,null,null,null,null,null,null,null,null)
D.eSY=new B.w("W",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eT6=new B.w("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.eTn=new B.w("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.a49,null,A.L,null,null,null,null,null,null,null)
D.eTp=new B.w("Write your book",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eU5=new B.w("Add page",null,A.cc,null,null,null,null,null,null,null,null,null)
D.eUi=new B.w("Malipo ya Awamu ya Mahari",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eBa=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUv=new B.w("Create with AI",null,D.eBa,null,A.L,null,null,null,null,null,null,null)
D.eUX=new B.w("Apply look",null,A.jo,null,null,null,null,null,null,null,null,null)
D.eBS=new B.G(!0,A.eX,null,null,null,null,12,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVI=new B.w("Type your presentation below",null,D.eBS,null,A.L,null,null,null,null,null,null,null)
D.eVL=new B.w("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aKo,null,A.L,null,null,null,null,null,null,null)
D.eVN=new B.w("Keep it",null,A.cc,null,null,null,null,null,null,null,null,null)
D.ex6=new B.G(!0,A.cK,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVV=new B.w("Done",null,D.ex6,null,null,null,null,null,null,null,null,null)
D.eWd=new B.w("Delete",null,A.mS,null,null,null,null,null,null,null,null,null)
D.eWm=new B.w("Hati ya Kiapo cha Uongozi",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eAb=new B.G(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXb=new B.w("Write your idea in any language \u2014 the AI makes the slides.",null,D.eAb,null,A.L,null,null,null,null,null,null,null)
D.eXw=new B.w("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.eXC=new B.w("Layout",null,A.QS,null,null,null,null,null,null,null,null,null)
D.eYc=new B.w("Print",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eYf=new B.w("X",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.eYO=new B.w("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A6.a43,null,null,null,null,null,null,null,null,null)
D.eZi=new B.w("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new B.w("Hati ya Kuhowa",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eZv=new B.w("Choose a class template",null,A.h9,null,null,null,null,null,null,null,null,null)
D.eZx=new B.w("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.i0,null,null,null,null,null,null,null,null,null)
D.eZD=new B.w("Download the newspaper picture",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eZO=new B.w("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new B.w("Done",null,A.aKb,null,null,null,null,null,null,null,null,null)
D.f_3=new B.w("Ending celebration",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f_4=new B.w("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new B.w("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A6.a3R,null,null,null,null,null,null,null,null,null)
D.f07=new B.w("Export presentation",null,A.di,null,null,null,null,null,null,null,null,null)
D.f08=new B.w("What would you like to do?",null,D.aJB,null,null,null,null,null,null,null,null,null)
D.f0c=new B.w("Delete",null,A.cq,null,null,null,null,null,null,null,null,null)
D.f0E=new B.w("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.f0I=new B.w("Hati (Documents)",null,A.h9,null,null,null,null,null,null,null,null,null)
D.f0U=new B.w("Done",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.eHD=new B.G(!0,A.c,null,null,null,null,18,A.I,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new B.w("Delete presentation?",null,D.eHD,null,A.L,null,null,null,null,null,null,null)
D.f1e=new B.w("After the last slide it starts again from the first",null,A.i0,null,null,null,null,null,null,null,null,null)
D.f1o=new B.w("\ud83c\udf33",null,A.H8,null,A.L,null,null,null,null,null,null,null)
D.f1G=new B.w("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.i0,null,null,null,null,null,null,null,null,null)
D.f1N=new B.w("Transfer document",null,A.op,null,null,null,null,null,null,null,null,null)
D.f1X=new B.w("Add to the slides",null,A.h8,null,null,null,null,null,null,null,null,null)
D.f2h=new B.w("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.f2w=new B.w("Make a book",null,I.aJb,null,null,null,null,null,null,null,null,null)
D.f2A=new B.w("Books",null,A.cq,null,null,null,null,null,null,null,null,null)
D.eAH=new B.G(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2B=new B.w("Keep this page open until it finishes.",null,D.eAH,null,null,null,null,null,null,null,null,null)
D.f2E=new B.w("Making your video",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f2J=new B.w("LANGUAGE",null,D.QL,null,null,null,null,null,null,null,null,null)
D.f2Q=new B.w("Use this ending",null,A.cq,null,null,null,null,null,null,null,null,null)
D.f2Y=new B.w("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.f2Z=new B.w("Upload a different logo",null,A.cc,null,null,null,null,null,null,null,null,null)
D.f3e=new B.w("Delete from the database?",null,A.l6,null,null,null,null,null,null,null,null,null)
D.f3f=new B.w("H",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.f3B=new B.w("NGMY Quotes",null,A.dP,null,null,null,null,null,null,null,null,null)
D.f4_=new B.w("Cover",null,D.aKm,null,null,null,null,null,null,null,null,null)
D.f43=new B.w("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.f44=new B.w("Each page becomes its own slide you can present",null,A.i0,null,null,null,null,null,null,null,null,null)
D.f4p=new B.w("Y",null,A.qQ,null,null,null,null,null,null,null,null,null)
D.f4A=new B.w("Crop the picture",null,A.kJ,null,null,null,null,null,null,null,null,null)
D.f4F=new B.w("Edit text",null,A.H9,null,null,null,null,null,null,null,null,null)
D.f6P=B.dM("a6f")
D.BX=new C.aui(0,"none")
D.aLT=new C.aui(1,"zipCrypto")
D.aLU=new C.aui(2,"aes")
D.f98=new F.NC("","",null)
D.fae=new C.b8I(null)
D.fbh=new C.Xz(null)
D.fcm=new C.ab_(null)
D.fco=new C.aBj(null)
D.ff9=new C.YO(null)
D.ffp=new C.Zj(null)
D.ffI=new C.bq_(null)})();(function staticFields(){$.fUG=null
$.fUH=null
$.fUI=null
$.fUJ=null
$.fD8=B.un("_lastQuoRemDigits")
$.fD9=B.un("_lastQuoRemUsed")
$.auD=B.un("_lastRemUsed")
$.fDa=B.un("_lastRem_nsh")
$.pB=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a55=B.S(x.N,x.I)
$.fAI=!1
$.fZo=B.S(B.az("kC"),x.N)
$.fZA=B.S(B.az("kC"),x.E)
$.fXB=!1
$.bvz="q"
$.Oz=0
$.Br=B.S(x.N,B.az("al<yt>"))
$.fXY=!1
$.fEI=!1
$.h36=null
$.hwI=B.S(x.N,B.az("au<n?>"))
$.IN=""
$.iO=0
$.fRu=function(){var w=x.N
return B.S(w,w)}()
$.fRt=B.S(x.N,x.R)
$.fF2=!1
$.adC=B.S(x.N,x.E)
$.fFP=0
$.bgG=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"hVa","BM",()=>C.b6e(0))
w($,"hV8","a0x",()=>C.b6e(1))
w($,"hV9","h6C",()=>C.b6e(2))
w($,"hV7","fJr",()=>$.a0x().ud(0))
w($,"hV5","h6A",()=>C.b6e(1e4))
w($,"hV6","h6B",()=>B.CU(8))
w($,"hQY","h4D",()=>B.CU(0))
w($,"hR5","h4H",()=>B.CU(0))
w($,"hR4","h4G",()=>B.bSV(0))
w($,"hYO","h8B",()=>{var v,u,t=x.N
t=B.S(t,t)
for(v=D.a04.gdH(D.a04),v=v.gag(v);v.C();){u=v.gT(v)
t.m(0,u.b,u.a)}return t})
w($,"hZd","bzZ",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mr(new C.fmt(),v,"biz_plan_blue","Business Plan",B.a([B.aX(u),B.aX(t)],h)),C.mr(new C.fmu(),v,"exec_summary","Executive",B.a([B.aX(s),B.aX(t)],h)),C.mr(new C.fmv(),v,"teal_corporate","Teal Corp",B.a([B.aX(r),B.aX(4279310375)],h)),C.mr(new C.fmG(),q,"geometric_overlap","Geometric",B.a([B.aX(4279203438),B.aX(u)],h)),C.mr(new C.fmL(),p,"midnight_cyan","Midnight Cyan",B.a([B.aX(o),B.aX(n)],h)),C.mr(new C.fmM(),q,"diagonal_hero","Diagonal Hero",B.a([B.aX(m),B.aX(l)],h)),C.mr(new C.fmN(),v,"swot_grid","SWOT Grid",B.a([B.aX(u),B.aX(4278556265)],h)),C.mr(new C.fmO(),v,"layered_chevrons","Chevrons",B.a([B.aX(4280172719),B.aX(k)],h)),C.mr(new C.fmP(),q,"split_triangle","Split Panel",B.a([B.aX(s),B.aX(t)],h)),C.mr(new C.fmQ(),v,"corporate_navy","Navy Pro",B.a([B.aX(4278982953),B.aX(4282090230)],h)),C.mr(new C.fmR(),p,"cyan_slash","Cyan Slash",B.a([B.aX(o),B.aX(4278630100)],h)),C.mr(new C.fmw(),p,"crimson_impact","Crimson",B.a([B.aX(4282714634),B.aX(4292617766)],h)),C.mr(new C.fmx(),q,"ocean_waves","Ocean Waves",B.a([B.aX(4278413729),B.aX(4286436348)],h)),C.mr(new C.fmy(),p,"mono_geometric","Mono Geo",B.a([B.aX(o),B.aX(n)],h)),C.mr(new C.fmz(),"Luxury","luxury_gold","Gold Luxe",B.a([B.aX(4280031511),B.aX(4293571336)],h)),C.mr(new C.fmA(),q,"hex_infographic","Hex Stack",B.a([B.aX(r),B.aX(4284410580)],h)),C.mr(new C.fmB(),q,"photo_banner","Photo Banner",B.a([B.aX(m),B.aX(4281908728)],h)),C.mr(new C.fmC(),v,"process_steps","Process",B.a([B.aX(s),B.aX(k)],h)),C.mr(new C.fmD(),"Minimal","grid_modern","Grid Modern",B.a([B.aX(l),B.aX(t)],h)),C.mr(new C.fmE(),"Luxury","platinum_frame","Platinum",B.a([B.aX(4282865001),B.aX(4293060848)],h)),C.mr(new C.fmF(),v,"agenda_cards","Agenda Cards",B.a([B.aX(u),B.aX(4292602622)],h)),C.mr(new C.fmH(),q,"headline_orange","Headline Orange",B.a([B.aX(j),B.aX(i)],h)),C.mr(new C.fmI(),q,"infographic_teal","Infographic",B.a([B.aX(r),B.aX(j)],h)),C.mr(new C.fmJ(),q,"content_year","Year Feature",B.a([B.aX(j),B.aX(t)],h)),C.mr(new C.fmK(),q,"photo_cta","Photo CTA",B.a([B.aX(m),B.aX(i)],h))],B.az("N<Dk>"))})
w($,"hYR","h8D",()=>B.ad("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["6mtj0Xc4pcfIsgMrtv+lv0rnu54="]=a.current})($__dart_deferred_initializers__);