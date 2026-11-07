((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A6,Ai,Aj,U,A7,Ak,Al,C={
tU(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fYG(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JP(d){var w
if(d===0)return $.D3()
if(d===1)return $.a2E()
if(d===2)return $.htk()
if(Math.abs(d)<4294967296)return C.b9V(A.o.O(d))
w=C.hO9(d)
return w},
b9V(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tU(4,w)
return new C.o0(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tU(1,w)
return new C.o0(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tU(2,w)
return new C.o0(v===0?!1:s,w,v)}v=A.o.an(A.o.gake(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tU(v,w)
return new C.o0(v===0?!1:s,w,v)},
hO9(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D3()
w=$.htj()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lc(A.aH.gaQ(w))
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
q=new C.o0(!1,r,4)
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dZ(0,s):q
return p},
fYH(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hfY(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dZ(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fJ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dZ(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hfT(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fYH(d,e,s,g)
w=e+s+1
C.hfY(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hOc(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dZ(1,r)-1,o=A.o.fJ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dZ(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fJ(u,r)}w&2&&B.aj(g)
g[n]=o},
cHa(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hOa(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9W(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hfZ(d,e,f,g,h,i){var w,v,u,t,s,r
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
hOb(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e8((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o0:function o0(d,e,f){this.a=d
this.b=e
this.c=f},
cHb:function cHb(){},
cHc:function cHc(){},
cHd:function cHd(d,e){this.a=d
this.b=e},
cHe:function cHe(d){this.a=d},
aRl:function aRl(d,e){this.a=d
this.b=e},
h5L(d,e,f){var w=new C.RU(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
RU:function RU(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3P:function a3P(d,e){this.a=d
this.b=e},
bHq:function bHq(d){this.a=d
this.c=this.b=0},
hwy(){return new C.bFL()},
bFL:function bFL(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
czk:function czk(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hNS(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ch(d.gcXQ(d)))
v=f*2+2
u=C.hdA(C.hdC(),64)
t=new C.cj7(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cj8(e,1000,v)
s=new Uint8Array(v)
return A.aH.dt(s,0,t.cLd(w,0,s,0))},
czi:function czi(d,e){this.c=d
this.d=e},
axj:function axj(d,e){this.a=d
this.b=e},
czl:function czl(d,e,f,g){var _=this
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
b8E:function b8E(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
czj:function czj(){this.a=$},
hfn(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hwh(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEl:function bEl(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h3p(d,e){e&=31
return(d&$.qg[e])<<e>>>0},
nw(d,e){e&=31
return(d>>>e|C.h3p(d,32-e))>>>0},
hdB(d){var w,v=new C.at_()
if(B.iK(d))v.aKq(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hdC(){var w=C.hdB(0),v=new Uint8Array(4),u=x.S
u=new C.cj9(w,v,A.Eo,5,B.c4(5,0,!1,u),B.c4(80,0,!1,u))
u.jO(0)
return u},
hdA(d,e){var w=new C.cj5(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cj4:function cj4(){},
cj8:function cj8(d,e,f){this.a=d
this.b=e
this.c=f},
cj2:function cj2(){},
asZ:function asZ(d){this.a=d},
cj7:function cj7(d){this.a=$
this.b=d
this.c=$},
cj3:function cj3(){},
cj1:function cj1(){},
at_:function at_(){this.b=this.a=$},
cj6:function cj6(){},
cj9:function cj9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cj5:function cj5(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cj0:function cj0(){},
cj_:function cj_(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bP_:function bP_(){},
bP0:function bP0(d){this.a=d},
hR7(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
baa:function baa(){},
ct8:function ct8(){},
bQ3:function bQ3(d,e){this.a=d
this.b=!1
this.c=e},
bQ4:function bQ4(){},
i_6(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avY(d){var w=0,v=B.j(x.H),u
var $async$avY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f79?2:4
break
case 2:w=5
return B.b(A.kl.h0("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$avY)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kl.h0("SystemChrome.setEnabledSystemUIOverlays",C.i_6(null),u),$async$avY)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avY,v)},
aw0:function aw0(d,e){this.a=d
this.b=e},
a8t:function a8t(d){this.a=d},
fUz(d,e){return new C.aVQ(e,d,null)},
aVQ:function aVQ(d,e,f){this.e=d
this.c=e
this.a=f},
aAU:function aAU(d,e,f,g,h){var _=this
_.ah=d
_.ak=e
_.a9$=f
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
i1P(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.ftV(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bm(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
ftV:function ftV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anJ(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$anJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agX("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$anJ)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cF(t,new C.c0_(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a6(t).k("J.E"))}else r=B.a([],x.d)
A.d.aV(r,new C.c00())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anJ,v)},
anL(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anJ(),$async$anL)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.T(Date.now(),0,!1).a7().ad()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nv("ngmy_menu_lib_v1_zzslide_"+B.aN(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$anL)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.M)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.T(Date.now(),0,!1).a7().ad()],t,q),null),$async$anL)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anL,v)},
c01(d){return C.hC8(d)},
hC8(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c01=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agX("ngmy_menu_lib_v1_zzslide_"+B.aN(d,o,""),A.hP),$async$c01)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VZ(B.a2(q,x.N,x.z))
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
return B.i($async$c01,v)},
anK(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.anJ(),$async$anK)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nx(r,new C.c02(d))
w=4
return B.b(B.nv("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.T(Date.now(),0,!1).a7().ad()],x.N,x.z),null),$async$anK)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPo("ngmy_menu_lib_v1_zzslide_"+B.aN(d,s,"")),$async$anK)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anK,v)},
c0_:function c0_(){},
c00:function c00(){},
c02:function c02(d){this.a=d},
ibM(d,e,f){return B.bT(A.K,null,new C.fKb(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fKb:function fKb(d,e,f){this.a=d
this.b=e
this.c=f},
a0T:function a0T(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJd:function aJd(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f6B:function f6B(d,e){this.a=d
this.b=e},
f6F:function f6F(d){this.a=d},
f6G:function f6G(d){this.a=d},
f6H:function f6H(d,e,f){this.a=d
this.b=e
this.c=f},
f6C:function f6C(d){this.a=d},
f6D:function f6D(d){this.a=d},
f6E:function f6E(d,e){this.a=d
this.b=e},
f6w:function f6w(d){this.a=d},
f6u:function f6u(d){this.a=d},
f6v:function f6v(d){this.a=d},
f6x:function f6x(d){this.a=d},
f6y:function f6y(d){this.a=d},
f6L:function f6L(d,e){this.a=d
this.b=e},
f6K:function f6K(d,e){this.a=d
this.b=e},
f6A:function f6A(d,e,f){this.a=d
this.b=e
this.c=f},
f6z:function f6z(d,e,f){this.a=d
this.b=e
this.c=f},
f6I:function f6I(d,e){this.a=d
this.b=e},
f6J:function f6J(d,e){this.a=d
this.b=e},
f6O:function f6O(d){this.a=d},
f6P:function f6P(d,e){this.a=d
this.b=e},
f6N:function f6N(d,e){this.a=d
this.b=e},
f6M:function f6M(){},
hip(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aN(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cF(v,new C.fe_(),v.$ti.k("J.E"),x.ea)
u=B.a6(v).k("Z<J.E>")
v=B.C(new B.Z(v,new C.fe0(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1S(d){return C.i34(d)},
i34(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1S=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fwL(n)
t=4
j=m
i=C
w=7
return B.b(B.a2r("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1S)
case 7:j.$1(i.hip(f))
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
return B.b(B.az(),$async$a1S)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hip(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("Z<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fe8(d),$async$a1S)
case 13:p=j.C(new i.Z(h,new g.fwJ(f),o),o.k("J.E"))
A.d.aV(p,new C.fwK())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1S,v)},
ahx(d,e){return C.ibr(d,e)},
ibr(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahx=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fJG(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahp("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahx)
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
return B.b(B.az(),$async$ahx)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahx)
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
return B.i($async$ahx,v)},
fe8(d){return C.hSt(d)},
hSt(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fe8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fe8)
case 7:r=f
q=r.tj("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.V
q=B.jW(q,B.S(q).c)
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
return B.i($async$fe8,v)},
agm(d,e){return C.i1H(d,e)},
i1H(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agm=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agm)
case 6:s=g
r=B.aY(x.N)
q=s.tj("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h4(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("cp.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$agm)
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
return B.b(C.a1S(d),$async$agm)
case 8:n=g
J.nx(n,new C.ftz(e))
w=9
return B.b(C.ahx(d,n),$async$agm)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agm,v)},
ibR(d,e){return B.a3(d,!1).cg(B.e_(new C.fKx(e),!0,null,x.H))},
hOe(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d8(w.d,new C.cIx())},
or:function or(d,e,f){this.a=d
this.b=e
this.c=f},
fe_:function fe_(){},
fe0:function fe0(){},
fwL:function fwL(d){this.a=d},
fwJ:function fwJ(d){this.a=d},
fwK:function fwK(){},
fJG:function fJG(){},
ftz:function ftz(d){this.a=d},
fKx:function fKx(d){this.a=d},
YC:function YC(d,e){this.c=d
this.a=e},
axR:function axR(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cIx:function cIx(){},
cIz:function cIz(d,e){this.a=d
this.b=e},
cIC:function cIC(d){this.a=d},
cID:function cID(d){this.a=d},
cIB:function cIB(){},
cIE:function cIE(d,e){this.a=d
this.b=e},
cIA:function cIA(d){this.a=d},
cIF:function cIF(){},
cIy:function cIy(d,e){this.a=d
this.b=e},
cIG:function cIG(){},
cIt:function cIt(d){this.a=d},
cIr:function cIr(d){this.a=d},
cIs:function cIs(d){this.a=d},
cIu:function cIu(d,e){this.a=d
this.b=e},
cIq:function cIq(d){this.a=d},
cIp:function cIp(d){this.a=d},
cIn:function cIn(d,e){this.a=d
this.b=e},
cIo:function cIo(d){this.a=d},
cIw:function cIw(){},
cIv:function cIv(d){this.a=d},
cIm:function cIm(d,e){this.a=d
this.b=e},
cIl:function cIl(d,e){this.a=d
this.b=e},
cIk:function cIk(d,e){this.a=d
this.b=e},
cIH:function cIH(d){this.a=d},
YA:function YA(d,e,f){this.c=d
this.d=e
this.a=f},
aF4:function aF4(d,e,f){this.a=d
this.b=e
this.c=f},
axN:function axN(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cHO:function cHO(d){this.a=d},
cHN:function cHN(d){this.a=d},
cHQ:function cHQ(d,e,f){this.a=d
this.b=e
this.c=f},
cHY:function cHY(){},
cHZ:function cHZ(d){this.a=d},
cHR:function cHR(d,e,f){this.a=d
this.b=e
this.c=f},
cHP:function cHP(d,e){this.a=d
this.b=e},
cHT:function cHT(d,e){this.a=d
this.b=e},
cHU:function cHU(d,e){this.a=d
this.b=e},
cHV:function cHV(d,e){this.a=d
this.b=e},
cHS:function cHS(d){this.a=d},
cHX:function cHX(d){this.a=d},
cHW:function cHW(d,e){this.a=d
this.b=e},
cI3:function cI3(d){this.a=d},
cI_:function cI_(d,e){this.a=d
this.b=e},
cI0:function cI0(d,e){this.a=d
this.b=e},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI2:function cI2(d,e){this.a=d
this.b=e},
axP:function axP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i5p(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bL(new C.fBg(),x.H).eV(new C.fBh())}}else if(s)C.hjT()}catch(t){}},
hjT(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eV(new C.fie())}catch(u){}},
i5s(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fBg:function fBg(){},
fBh:function fBh(){},
fie:function fie(){},
how(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
hot(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lc)return null
return A.a.b2(w,14)},
h26(d){var w
if(d.b!==D.lc)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
i5S(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hox(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i5N(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aN(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aN(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l4(0,f)
t=x.N
u=B.cF(u,new C.fCf(),B.a6(u).k("J.E"),t)
s=B.C(u,B.a6(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l4(0,f),u=new B.JO(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.RA(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.RA(A.a.b2(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i5L(d,e){var w,v,u,t,s,r=B.a6(e).k("cs<1>"),q=B.C(new B.cs(e,r),r.k("J.E"))
A.d.aV(q,new C.fCe())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.M)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aQk(w,u,s,0)}return w},
i5P(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4J:$.hvl(),s=x.N,r=B.U(s,s)
for(s=t.gdR(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hou(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
ff1(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
if(C.how(q)===e)return q}return null},
i5Q(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gI(D.H3).a},
i5R(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeb(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeb(0,0,0)
v=C.ff1(b6,b0)
u=C.ff1(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i5P(b2,C.i5N(C.hou(b2),v.r))
if(s.a!==0){u.r=C.i5L(C.hou(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){l=C.how(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.em(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.ff1(b6,n)
i=C.ff1(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){d=o[m]
a0=C.h26(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.M)(a1),++a7){a8=a1[a7]
if(C.hot(a8)===a0||C.h26(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.R6(a1,new C.fCl(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eK(""+1000*a6+"_"+a9,D.lc,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bh,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.T(Date.now(),0,!1)
return new B.aeb(k,t,e)},
i5M(d){var w=C.i5Q(d)
if(d.w==="hati_kuhowa")return C.hnR("",w)
return C.hnQ("",w)},
fCf:function fCf(){},
fCe:function fCe(){},
fCl:function fCl(d){this.a=d},
hjC(){var w=new B.T(Date.now(),0,!1),v=new C.fhh()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bI(w)))+"/"+B.bC(w)},
h2f(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fDd(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lc&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hoL(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fDd(d)
w=B.bi(u)
if(w==null)return!C.fDd(d)
return new B.T(Date.now(),0,!1).a7().d_(w.a7().bS(18e9))},
i6x(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.T(Date.now(),0,!1).a7().ad()},
hGb(d){return A.a.i(d).toLowerCase()},
aq0(d){return C.hGd(d)},
hGd(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aq0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aq0)
case 7:r=f
p=r.tj("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.V:p
o=q
o=new B.N(o,C.ia3(),B.S(o).k("N<1,n>")).c0(0,new C.cbh())
o=B.de(o,o.$ti.k("J.E"))
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
return B.i($async$aq0,v)},
aq_(d,e){return C.hGc(d,e)},
hGc(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aq_=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aq0(d),$async$aq_)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aq_)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qp(r)),$async$aq_)
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
return B.i($async$aq_,v)},
aq1(d,e){return C.hGe(d,e)},
hGe(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aq1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aq0(d),$async$aq1)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aq1)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qp(r)),$async$aq1)
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
return B.i($async$aq1,v)},
Vm(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vm=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fW4&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$Vm)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aN(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jR(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VZ(B.a2(f.a(n.b),e,a0)))}$.a7g=o}}t=2
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
return B.b(B.c6(),$async$Vm)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u7("civic_hati_kiapo_uongozi",null,A.em),$async$Vm)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jR(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VZ(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cJ(o,B.a6(o).k("cJ<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7g.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a7g.n(0,i.a,i.b)}w=20
return B.b(C.aq2(),$async$Vm)
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
case 16:case 9:$.fW4=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vm,v)},
aq2(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aq2=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aq2)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7g,o=new B.cJ(o,B.a6(o).k("cJ<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$aq2)
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
return B.i($async$aq2,v)},
b_l(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vm(!1),$async$b_l)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7g.h(0,t)
r=s==null?null:s.hI()
if(r==null){u=null
w=1
break}u=C.bBS(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_l,v)},
a7h(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7h=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.T(Date.now(),0,!1)
o=a1.hI()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.M)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7g.n(0,d,o)
$.fW4=!0
w=3
return B.b(C.aq2(),$async$a7h)
case 3:w=4
return B.b(B.c6(),$async$a7h)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7g,n=new B.cJ(n,B.a6(n).k("cJ<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.nv("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.T(Date.now(),0,!1).a7().ad()],e,x.z),null),$async$a7h)
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
return B.i($async$a7h,v)},
aq3(d){var w=0,v=B.j(x.T),u,t,s
var $async$aq3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hT().a5P(A.eJ),$async$aq3)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$aq3)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_k(t,d),$async$aq3)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aq3,v)},
b_k(d,e){return C.hGf(d,e)},
hGf(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_k=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c6(),$async$b_k)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aN(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ik("media")
w=8
return B.b(p.x4(q,new Uint8Array(B.ch(d)),D.bE0),$async$b_k)
case 8:n=p.CG(q)
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
return B.i($async$b_k,v)},
KD(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
fgJ(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bh,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f7,j,k,l)},
h_b(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.k.E(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
fgh(d,e,f,g){return C.fgJ(0,0.002,D.fx,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h_c(d,e,f,g,h,i,j,k){var w=C.cE()
return C.er(A.qz,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
hjB(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ej(v,w,"").split(":"))},
bBS(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.M)(t),++n){m=t[n]
l=C.hjB(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lc&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hI()}h=C.h1L(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BM(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.M)(w),++n){m=w[n]
l=C.hjB(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lc&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bt(a1.z,new C.fBe(a2))}else A.d.bt(a1.z,new C.fBf())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fDd(a0))a0.ax=a6.f.a7().ad()
return a0},
h1L(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fE0(D.a5K),l=C.cE(),k=x.u,j=B.a([C.er(A.bh,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cE(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lD,1,0,0)],k),i=B.a([],k)
i.push(C.KD("NGMY",A.L,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KD("TAREHE:",A.bh,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h_b("tarehe",0.8059999999999999,0.026,0.18,A.bh,16,p,C.hjC()))
i.push(C.fgh(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KD("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KD("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cE,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fgJ(0,0.002,D.fx,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h_c("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h_c("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h_c("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fgJ(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KD("VIDEO YA KIAPO",A.bh,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bh,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.lD,0.77,0.115,0.492))
i.push(C.KD("Rais Anayeapa:",A.bh,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KD("Jina:",A.bh,p,13,A.bp,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h_b("rais_jina",0.195,0.6930000000000001,0.62,A.bh,13,p,""))
i.push(C.fgh(0.195,0.7130000000000001,0.62,n))
i.push(C.KD("Sahihi:",A.bh,p,13,A.bp,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bh,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f7,0.38,0.21500000000000002,0.73))
i.push(C.fgh(0.21500000000000002,0.795,0.38,n))
i.push(C.KD("Tarehe:",A.bh,p,13,A.bp,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h_b("rais_tarehe",0.745,0.74,0.2,A.bh,12,p,C.hjC()))
i.push(C.fgh(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fgJ(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.KD("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bp,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rA(4294967035,t,0,0,j,l,D.qo,"","",u,D.dg)
return C.BM(t,t,t,t,D.ol,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agy(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agy=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.J(x.q).f.R(D.f1U)
w=1
break}w=3
return B.b(C.Vm(!0),$async$agy)
case 3:w=4
return B.b(C.b_l(p),$async$agy)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hoL(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.bgx,null,new C.fw6(p),f,!0,!0,!1,A.lE,!1,!1,x.N),$async$agy)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cf(null,null,!0,null,new C.fw7(),f,null,!0,!0,x.y),$async$agy)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h1L(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.J(x.q).f
q.R(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h1L(p))
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
fhh:function fhh(){},
cbh:function cbh(){},
fBe:function fBe(d){this.a=d},
fBf:function fBf(){},
fw6:function fw6(d){this.a=d},
fw4:function fw4(d){this.a=d},
fw5:function fw5(d){this.a=d},
fw7:function fw7(){},
fw2:function fw2(d){this.a=d},
fw3:function fw3(d){this.a=d},
aqz:function aqz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDV:function aDV(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ec6:function ec6(d){this.a=d},
ec4:function ec4(d){this.a=d},
ec5:function ec5(d){this.a=d},
ec7:function ec7(d){this.a=d},
ec8:function ec8(d){this.a=d},
wD(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.er(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
hje(d,e,f){var w=4291404327
return B.a([C.qf(0,f,D.eQ,w,2,"ring_l",f,d-f*0.42,e),C.qf(0,f,D.eQ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
ffI(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qf(4294967288,f,D.eQ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qf(h,s,D.eQ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qf(h,f*0.46,D.eQ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qf(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bh,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f7,j,k,l)},
ffH(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cl,D.cQ,g,e,f)},
bzj(d,e,f,g){return C.qf(0,0.002,D.fx,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hjd(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qf(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wD(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hov(){var w=new B.T(Date.now(),0,!1),v=new C.fCk()
return B.w(v.$1(B.bV(w)))+"/"+B.w(v.$1(B.bI(w)))+"/"+B.bC(w)},
hjf(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wD(r+".",A.bh,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.ffH("witness_"+d+"_"+r+"_name",q,g,p,A.bh,!0,16,j,"[Jina la Shahidi]"),C.bzj(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wD("Sahihi:",A.bh,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bh,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f7,s,t,g-0.004),C.bzj(t,g+0.044,s,w)],x.u)},
agZ(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dj7,D.cnf,D.dbp,D.ddg],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.M)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fZt(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fE0(d.d),v=B.a([C.er(A.bh,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,1,0,0)],x.u)
A.d.v(v,C.hUX(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hUX(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wD("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hje(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hje(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.ffI(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.ffI(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wD("\ud83c\udf33",A.L,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qf(0,0.062,D.eQ,b1,1.6,"crest_o",0.11,0.445,0.012),C.qf(0,0.046,D.eQ,b1,1,"crest_i",0.084,0.458,0.02),C.wD("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qf(0,0.002,D.fx,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qf(b9,0.016,D.ld,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qf(0,0.002,D.fx,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wD("TAREHE:",A.bh,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.ffH("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bh,!1,21,b9,C.hov()),C.bzj(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wD(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qf(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qf(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.er(A.bh,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cw,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cl,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qf(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.v(c2,B.a([s,C.er(A.L,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cl,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hjd(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wD(c9,A.bh,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.ffH("mahari_"+p,0.132,k,m,A.bh,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j3
$.j3=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j3
$.j3=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eK(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bh,a9,D.bg,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eK(""+1000*f+"_"+e,D.f7,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bh,a9,D.fx,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j3
$.j3=p+1
i=Date.now()
h=$.j3
$.j3=h+1
g=Date.now()
f=$.j3
$.j3=f+1
e=Date.now()
a3=$.j3
$.j3=a3+1
A.d.v(d,B.a([new C.eK(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dT,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eK(""+1000*i+"_"+h,D.f7,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bh,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eK(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eK(""+1000*e+"_"+a3,D.f7,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bh,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hjd("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a5z||w===D.a5B||w===D.a5y||w===D.a5A){w=t-0.008
A.d.v(c2,C.ffI(0.21,w,0.044,!0,b0))
A.d.v(c2,C.ffI(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qf(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.qf(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qf(0,0.0022,D.fx,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wD("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wD("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hjf("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hjf("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qf(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wD("MWANDISHI",A.bh,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wD("Jina:",A.bh,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.ffH("mwandishi_jina",0.215,w,0.3116,A.bh,!0,15,b9,""),C.bzj(0.215,p,0.3116,b5),C.wD("Sahihi:",A.bh,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bh,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f7,0.3161999999999999,0.5738,s-0.044),C.bzj(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qf(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wD("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i5O(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h2p(d.d),p=new C.fCg(s),o=new C.fCh(s),n=d.z,m=n===D.a5z||n===D.a5B||n===D.a5y||n===D.a5A,l=n===D.aGk||n===D.a5C||n===D.aGl,k=B.bU(0,B.fO(q,A.A,t,t,A.ce,A.bV,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5C?26:16
i.push(new C.fCj().$1$size(w))}if(n===D.aGm)i.push(D.fIP)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.ix,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aPD,p.$1$w(0.9),D.aPD,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.bbp,t,n,w,t,t,A.n),t,t,t,t,A.ajS,t,t,t))
i.push(A.am)
i.push(new C.fCi(r).$1("NIMETOWE"))
i.push(A.fI)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.MA,new B.cb(A.aM,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bA(1,A.bd,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b0)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.a_,t,A.b2,A.t,B.a([k,new B.D(A.aiu,B.x(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hnQ(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agZ(e,t)
if(r==null)r=A.d.gI(D.H3)
w=C.cE()
v=C.rA(r.e,t,0,0,C.fZt(r,0.165,y.O,D.ddS,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qo,"","",s,D.dg)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BM(t,t,t,t,D.ol,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hnR(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agZ(e,t)
if(r==null)r=A.d.gI(D.H3)
w=C.cE()
v=C.rA(r.e,t,0,0,C.fZt(r,0.165,y.f,D.d9t,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qo,"","",s,D.dg)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.BM(t,t,t,t,D.ol,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bDd(d,e,f){var w=0,v=B.j(x.T),u
var $async$bDd=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fNZ(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDd,v)},
agz(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agz=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fwa(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LL,null,new C.fwb(p),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agz)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDd(d,"Hati ya Kuhowa",D.H3),$async$agz)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Li(d,"Tafuta jimbo\u2026","",A.kf,"Chagua jimbo"),$async$agz)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnQ(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agz,v)},
agA(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agA=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.S(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fwe(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LL,null,new C.fwf(p),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agA)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDd(d,"Hati ya Kuhoweya",D.H3),$async$agA)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Li(d,"Tafuta jimbo\u2026","",A.kf,"Chagua jimbo"),$async$agA)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnR(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agA,v)},
agB(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agB=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.S(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fwi(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.LL,null,new C.fwj(m),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agB)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDd(d,"Malipo ya Awamu ya Mahari",D.QZ),$async$agB)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Li(d,"Tafuta jimbo\u2026","",A.kf,"Chagua jimbo"),$async$agB)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agZ(s,D.QZ)
if(q==null)q=A.d.gI(D.QZ)
n=C.cE()
p=C.rA(q.e,null,0,0,C.fZt(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d4k,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qo,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dg)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BM(null,null,null,null,D.ol,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agB,v)},
xD:function xD(d,e){this.a=d
this.b=e},
jo:function jo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fCk:function fCk(){},
fCg:function fCg(d){this.a=d},
fCi:function fCi(d){this.a=d},
fCj:function fCj(){},
fCh:function fCh(d){this.a=d},
fNZ:function fNZ(d,e){this.a=d
this.b=e},
adh:function adh(d,e,f){this.c=d
this.d=e
this.a=f},
dZI:function dZI(d,e,f){this.a=d
this.b=e
this.c=f},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e){this.a=d
this.b=e},
acG:function acG(d,e,f){this.c=d
this.d=e
this.a=f},
fwa:function fwa(){},
fwb:function fwb(d){this.a=d},
fw8:function fw8(d){this.a=d},
fw9:function fw9(d){this.a=d},
fwe:function fwe(){},
fwf:function fwf(d){this.a=d},
fwc:function fwc(d){this.a=d},
fwd:function fwd(d){this.a=d},
fwi:function fwi(){},
fwj:function fwj(d){this.a=d},
fwg:function fwg(d){this.a=d},
fwh:function fwh(d){this.a=d},
KG(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.er(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,k,l,m)},
CM(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.er(A.bh,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f7,j,k,l)},
hjW(d,e,f){return C.CM(0,0.002,D.fx,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bzt(d,e,f,g,h){return B.a([C.CM(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.KG(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h_g(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.CM(0,0.002,D.fx,g,1,"orn_l_"+t,u,d,v),C.CM(h,0.016,D.ld,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CM(0,0.002,D.fx,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1g(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KG(d,A.bh,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.er(A.L,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cE,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cQ,t,u,g-0.002),C.hjW(u,g+0.018,t)],x.u)},
hjX(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CM(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CM(w,0.024,D.ld,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CM(w,0.024,D.ld,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KG(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzs(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KG("Sahihi:",A.bh,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.er(A.bh,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f7,v,w,f-0.006),C.hjW(w,f+0.016,v)],x.u)},
h2q(d){var w,v
for(w=0;w<19;++w){v=D.Rd[w]
if(v.a===d)return v}return null},
i84(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agZ(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agZ(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.agZ(u,D.QZ)
v=w==null?l:w.d
if(v==null){w=C.agZ(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h2q(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hkL.a8(0)
$.hkY.a8(0)
t=C.fE0(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.M)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h3x(d){var w=0,v=B.j(x.T),u
var $async$h3x=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.K,null,new C.fPr(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3x,v)},
xG:function xG(d,e){this.a=d
this.b=e},
nN:function nN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bj8:function bj8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fPr:function fPr(){},
adk:function adk(d){this.a=d},
egt:function egt(d,e){this.a=d
this.b=e},
egs:function egs(d){this.a=d},
egr:function egr(d,e){this.a=d
this.b=e},
af0:function af0(d,e,f){this.c=d
this.d=e
this.a=f},
h2p(d){return $.hkY.c4(0,d,new C.fE2(d))},
fE0(d){return $.hkL.c4(0,d,new C.fE1(d))},
fA(d){return B.fTB(d>>>16&255,d>>>8&255,d&255,255)},
hY3(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hm4(4294570461,4293910718,4284234270,u)
case 1:return C.hm4(4294635750,4293975240,t,4292912216)
case 2:w=C.feg(s,4294505966,r)
C.bzd(w,14,16,p)
C.kw(w,8,9,464,836,u,1.2)
C.CI(w,2,2,1,1,u,10)
C.CI(w,478,2,-1,1,u,10)
C.CI(w,2,852,1,-1,u,10)
C.CI(w,478,852,-1,-1,u,10)
return w
case 3:return C.feg(4294966515,4294373082,4289102906)
case 4:return C.hSK(C.feg(4294376440,4293653998,4290287194))
case 5:w=C.feg(4294965238,4294437098,4288444980)
C.bzd(w,14,16,4283043359)
C.kw(w,6,7,468,840,u,1)
C.kw(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,n,4294175448)
C.rX(v,n)
C.kw(v,24,24,432,806,4286209070,1)
C.a13(v,12,12,468,12,o,3,20)
C.a13(v,12,842,468,842,o,3,20)
C.a13(v,12,12,12,842,o,3,20)
C.a13(v,468,12,468,842,o,3,20)
return v
case 7:return C.hQN(4294440434,4293518297,4280228630,r)
case 8:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,m,4293911504)
C.rX(v,m)
C.kw(v,28,28,424,798,l,1)
C.fnr(v,28,28,l,k)
C.fnr(v,452,28,l,k)
C.fnr(v,28,826,l,k)
C.fnr(v,452,826,l,k)
return v
case 9:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,j,4294111986)
C.rX(v,j)
C.kw(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fA(p),0,13,0,853)
return v
case 10:return C.hUJ(i,4294173372)
case 11:return C.hVQ(4294439140,4293449662)
case 12:return C.hQF(h,4294239432)
case 13:return C.hVh(4294244340,4293193448)
case 14:return C.hZE(4294505710,4293780694)
case 15:return C.fdc(4294966259,4294439138,o,p,q)
case 16:return C.fdc(4294966776,4294178544,o,g,g)
case 17:return C.fdc(4294965493,4294504170,o,4286200650,q)
case 18:return C.fdc(4294966519,4294373862,o,p,p)
case 19:return C.hTP()
case 20:return C.hTQ()
case 21:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,h,4293976768)
C.rX(v,h)
C.bzd(v,14,16,p)
B.iM(v,!0,C.fA(u),4,475,4,9)
B.iM(v,!0,C.fA(u),4,475,844,849)
B.iM(v,!0,C.fA(u),4,9,4,849)
B.iM(v,!0,C.fA(u),470,475,4,849)
C.a13(v,10,12,470,12,u,2,16)
C.a13(v,10,842,470,842,u,2,16)
C.a13(v,10,12,10,842,u,2,18)
C.a13(v,470,12,470,842,u,2,18)
C.CI(v,2,2,1,1,t,10)
C.CI(v,478,2,-1,1,t,10)
C.CI(v,2,852,1,-1,t,10)
C.CI(v,478,852,-1,-1,t,10)
C.kw(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,s,4294438872)
C.rX(v,s)
C.kw(v,14,16,452,822,o,2.2)
C.kw(v,22,24,436,806,o,1)
C.h0B(v,!1,!1,o,p,p,36,14,16)
C.kM(v,240,20,7,o,!0)
C.kM(v,240,834,7,o,!0)
C.kM(v,18,427,7,o,!0)
C.kM(v,462,427,7,o,!0)
return v
case 23:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,i,4293910712)
C.rX(v,i)
B.iM(v,!0,C.fA(u),0,479,0,20)
B.iM(v,!0,C.fA(u),0,479,834,853)
B.iM(v,!0,C.fA(u),0,20,0,853)
B.iM(v,!0,C.fA(u),460,479,0,853)
B.iM(v,!0,C.fA(f),5,474,5,9)
B.iM(v,!0,C.fA(f),5,474,844,848)
B.iM(v,!0,C.fA(f),5,9,5,848)
B.iM(v,!0,C.fA(f),470,474,5,848)
C.kw(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hv(q,q,A.cb,0,A.e7,854,q,0,3,q,A.cb,480,!1)
C.yz(v,e,4294174404)
C.rX(v,e)
C.bzd(v,14,16,p)
B.iM(v,!0,C.fA(u),3,476,3,8)
B.iM(v,!0,C.fA(u),3,476,845,850)
B.iM(v,!0,C.fA(u),3,8,3,850)
B.iM(v,!0,C.fA(u),471,476,3,850)
C.kw(v,9,10,462,834,t,1)
C.kw(v,14,16,452,822,u,1.8)
C.kM(v,240,8,4,u,!0)
C.kM(v,240,846,4,u,!0)
C.kM(v,8,427,4,u,!0)
C.kM(v,472,427,4,u,!0)
C.kM(v,8,8,3,t,!0)
C.kM(v,472,8,3,t,!0)
C.kM(v,8,846,3,t,!0)
C.kM(v,472,846,3,t,!0)
return v}},
yz(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.E(A.k.V(q*w+p*t),0,255)
u=A.o.E(A.k.V(o*w+n*t),0,255)
w=A.o.E(A.k.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.kO(d,!1,A.de,new B.Se(s),r,A.cX,1,0,w-1,k,k);++k}},
rX(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.en()
n.df(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.au(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.au(v==null?0:v)
v=d.a
s=v==null?o:v.dU(u,t,o)
if(s==null)s=new B.iH()
v=A.o.E(A.k.O(s.gb7(s))-3,0,255)
r=A.o.E(A.k.O(s.gbf())-3,0,255)
q=A.o.E(A.k.O(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jU(u,t,v,r,q,255)}},
kw(d,e,f,g,h,i,j){var w,v=null,u=C.fA(i),t=e+g
B.kO(d,!0,A.de,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kO(d,!0,A.de,u,v,A.cX,j,e,t,w,w)
B.kO(d,!0,A.de,u,v,A.cX,j,e,e,f,w)
B.kO(d,!0,A.de,u,v,A.cX,j,t,t,f,w)},
CI(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kO(d,!0,A.de,C.fA(i),u,A.cX,2,e,e+g*j,f,f)
B.kO(d,!0,A.de,C.fA(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kO(d,!0,A.de,C.fA(i),u,A.cX,1,w,e+g*t,v,v)
B.kO(d,!0,A.de,C.fA(i),u,A.cX,1,w,w,v,f+h*t)},
hm4(d,e,f,g){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yz(v,d,e)
C.rX(v,d)
B.iM(v,!0,C.fA(f),0,479,0,28)
B.iM(v,!0,C.fA(f),0,479,826,853)
B.iM(v,!0,C.fA(f),0,28,0,853)
B.iM(v,!0,C.fA(f),452,479,0,853)
C.kw(v,5,5,470,844,g,1.1)
C.kw(v,28,28,424,798,g,1.6)
C.CI(v,2,2,1,1,g,11)
C.CI(v,478,2,-1,1,g,11)
C.CI(v,2,852,1,-1,g,11)
C.CI(v,478,852,-1,-1,g,11)
return v},
feg(d,e,f){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yz(v,d,e)
C.rX(v,d)
C.kw(v,14,16,452,822,f,1.6)
C.kw(v,20,22,440,810,f,0.8)
return v},
bzd(d,e,f,g){var w,v=C.fA(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hSK(d){var w,v,u=4291404327
C.bzd(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kM(d,w,8,3,u,!0)
C.kM(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kM(d,7,v,3,u,!0)
C.kM(d,473,v,3,u,!0)}return d},
fqC(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jh(e,f),new B.jh(e+g*n,f),new B.jh(e,f+h*n)],t)
B.a1P(d,C.fA(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jh(s,u),new B.jh(e+g*v,u),new B.jh(s,f+h*v)],t)
B.a1P(d,C.fA(k),t)
t=A.k.V(n*0.39)
C.kM(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kM(d,e+g*t,f+h*3,4,k,!0)
C.kM(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kM(d,e+g*t,f,5,k,!0)
C.kM(d,e,f+h*t,5,k,!0)}},
h0B(d,e,f,g,h,i,j,k,l){var w,v
C.fqC(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fqC(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fqC(d,k,v,1,-1,e,f,g,h,i,j)
C.fqC(d,w,v,-1,-1,e,f,g,h,i,j)},
a13(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l6(d,!0,A.de,new B.r6(p),null,A.cX,j,r,q)}},
fpA(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.de,new B.r6(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kO(d,!0,A.de,new B.r6(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hQN(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hv(o,o,A.cb,0,A.e7,854,o,0,3,o,A.cb,480,!1)
C.yz(n,d,e)
C.rX(n,d)
C.kw(n,20,20,440,814,f,1.2)
C.fpA(n,0,0,1,1,g)
C.fpA(n,480,0,-1,1,g)
C.fpA(n,0,854,1,-1,g)
C.fpA(n,480,854,-1,-1,g)
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
B.kO(n,!0,A.de,new B.r6(p),o,A.cX,1.2,240,r,60,q)}return n},
fnr(d,e,f,g,h){var w
C.ftW(d,!0,C.fA(g),13,e,f)
C.ftW(d,!0,C.fA(g),9,e,f)
w=B.a([new B.jh(e,f-4),new B.jh(e+4,f),new B.jh(e,f+4),new B.jh(e-4,f)],x.J)
B.a1P(d,C.fA(h),w)},
kM(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jh(e,v),new B.jh(u,f),new B.jh(e,t),new B.jh(s,f)],x.J)
if(i){B.a1P(d,C.fA(h),r)
return}B.kO(d,!0,A.de,C.fA(h),w,A.cX,1,e,u,v,f)
B.kO(d,!0,A.de,C.fA(h),w,A.cX,1,u,e,f,t)
B.kO(d,!0,A.de,C.fA(h),w,A.cX,1,e,s,t,f)
B.kO(d,!0,A.de,C.fA(h),w,A.cX,1,s,e,f,v)},
fdb(d,e,f,g,h,i,j){var w,v=B.a([new B.jh(e,f),new B.jh(e+g*28,f),new B.jh(e,f+h*28)],x.J)
B.a1P(d,C.fA(i),v)
v=e+g*14
w=f+h*14
C.kM(d,v,w,6,j,!0)
C.kM(d,v,w,3,i,!0)},
fdc(d,e,f,g,h){var w=null,v=B.hv(w,w,A.cb,0,A.e7,854,w,0,3,w,A.cb,480,!1)
C.yz(v,d,e)
C.rX(v,d)
C.kw(v,18,18,444,818,f,2)
C.kw(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fA(h),28,451,28,34)
C.fdb(v,18,18,1,1,g,f)
C.fdb(v,462,18,-1,1,g,f)
C.fdb(v,18,836,1,-1,g,f)
C.fdb(v,462,836,-1,-1,g,f)
return v},
hTP(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hv(v,v,A.cb,0,A.e7,854,v,0,3,v,A.cb,480,!1)
C.yz(r,u,4294240980)
C.rX(r,u)
C.kw(r,10,12,460,830,t,3.2)
C.kw(r,18,20,444,814,s,1.2)
C.kw(r,24,26,432,802,t,1.8)
C.h0B(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kM(r,w,16,3,t,!0)
C.kM(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kM(r,16,w,3,t,!0)
C.kM(r,464,w,3,t,!0)}return r},
hTQ(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hv(t,t,A.cb,0,A.e7,854,t,0,3,t,A.cb,480,!1)
C.yz(p,s,4294373080)
C.rX(p,s)
C.kw(p,16,18,448,818,r,2.4)
C.kw(p,24,26,432,802,4286209044,1)
w=new C.ffz(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h0B(p,!1,!0,r,q,q,34,16,18)
return p},
bzU(d,e,f,g,h,i){B.iM(d,!0,C.fA(i),e,e+g,f,f+h)},
bAK(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.E(A.k.V(v*l+u*m),0,255)
j=A.o.E(A.k.V(t*l+s*m),0,255)
l=A.o.E(A.k.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.kO(d,!1,A.de,new B.Se(i),null,A.cX,1,e,w,l,l)}},
hUI(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kO(d,!1,A.de,new B.r6(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kO(d,!1,A.de,new B.r6(r),null,A.cX,1,t,t,f,s);++q}},
hUJ(d,e){var w,v,u=null,t=B.hv(u,u,A.cb,0,A.e7,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hUI(t,v,w,30,D.cXV,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzU(t,44,44,392,766,d)
C.bAK(t,44,44,392,766,d,e)
C.rX(t,d)
C.kw(t,44,44,392,766,4292128567,2.2)
C.kw(t,50,50,380,754,4279898632,0.8)
return t},
hVP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kM(d,e,f,7,h,!0)
C.kM(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kO(d,!0,A.de,C.fA(h),o,A.cX,1.6,w,u,v,t)
B.kO(d,!0,A.de,C.fA(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kO(d,!0,A.de,new B.r6(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kO(d,!0,A.de,C.fA(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kO(d,!0,A.de,C.fA(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l6(d,!0,A.de,C.fA(h),o,A.cX,2,e,f)}},
hVQ(d,e){var w,v,u,t,s=null,r=B.hv(s,s,A.cb,0,A.e7,854,s,0,3,s,A.cb,480,!1)
B.iM(r,!0,C.fA(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hVP(r,u,v,w,4292391514)}C.bzU(r,46,46,388,762,d)
C.bAK(r,46,46,388,762,d,e)
C.rX(r,d)
C.kw(r,46,46,388,762,4291404327,1.8)
return r},
hhq(d,e,f,g){C.ftW(d,!0,C.fA(g),16,e,f)
C.ftW(d,!0,C.fA(g),11,e,f)
C.kM(d,e,f,6,g,!0)
B.kO(d,!0,A.de,C.fA(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kO(d,!0,A.de,C.fA(g),null,A.cX,1.3,e,e,f-14,f+14)},
hQF(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hv(v,v,A.cb,0,A.e7,854,v,0,3,v,A.cb,480,!1)
B.iM(s,!0,C.fA(4280948752),0,479,0,853)
B.iM(s,!0,C.fA(u),0,479,0,78)
B.iM(s,!0,C.fA(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hhq(s,w,39,t)
C.hhq(s,w,815,t)}C.bzU(s,38,92,404,670,d)
C.bAK(s,38,92,404,670,d,e)
C.rX(s,d)
C.kw(s,38,92,404,670,t,1.8)
C.kw(s,45,99,390,656,4287322667,0.8)
return s},
hVg(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jh(e,f),new B.jh(q-5,w),new B.jh(q,f-(18-Math.abs(r)*3)),new B.jh(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1P(d,new B.r6(o),p)}B.l6(d,!0,A.de,C.fA(4292128567),null,A.cX,3,e,f)},
hVh(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hv(s,s,A.cb,0,A.e7,854,s,0,3,s,A.cb,480,!1)
C.yz(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kO(q,!0,A.de,new B.r6(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kO(q,!0,A.de,new B.r6(u),s,A.cX,1.1,v,v,0,853)}B.iM(q,!0,C.fA(r),0,479,0,70)
B.iM(q,!0,C.fA(r),0,479,798,853)
for(t=0;t<5;++t)C.hVg(q,70+t*85,48,4292128567)
C.bzU(q,48,78,384,712,d)
C.bAK(q,48,78,384,712,d,e)
C.rX(q,d)
C.kw(q,48,78,384,712,4291404327,1.6)
return q},
hZE(d,e){var w,v,u,t=null,s=4279970378,r=B.hv(t,t,A.cb,0,A.e7,854,t,0,3,t,A.cb,480,!1)
B.iM(r,!0,C.fA(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kM(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l6(r,!0,A.de,new B.r6(u),t,A.cX,1,v,w)}C.bzU(r,40,40,400,774,d)
C.bAK(r,40,40,400,774,d,e)
C.rX(r,d)
C.kw(r,40,40,400,774,4291058750,2)
C.kw(r,48,48,384,758,s,0.8)
return r},
kV:function kV(d,e){this.a=d
this.b=e},
fE2:function fE2(d){this.a=d},
fE1:function fE1(d){this.a=d},
ffz:function ffz(d){this.a=d},
fEG(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hVJ(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h_9(d){var w,v,u,t=null,s=A.a.cD(d,"{"),r=A.a.oH(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aN(0,Ai.agV(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afp(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vo(null,""),$async$afp)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n9(n)
if(e==null)s=A.hF
else{r=C.hVJ(e)
s=B.a([new B.a01(A.cJ.gct().aM(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qY(t,d,s,"news",E.Fz),$async$afp)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.L7(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
bCl(d){return C.i7L(d)},
i7L(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afp(r,null),$async$bCl)
case 7:q=f
p=C.h_9(q)
if(p==null){u=d
w=1
break}o=d.aCM(p)
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
return B.i($async$bCl,v)},
hll(d){var w,v=F.h1H(d)
v=B.aN(v,"book","newspaper")
if(F.a27(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fIB(d,e,f,g){return C.i9C(d,e,f,g)},
i9C(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fIB=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fEG(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hoU()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afp('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hll(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fIB)
case 3:r=m.h_9(i)
if(r==null)throw B.V(y.S)
q=new C.zG(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.V,"","","").aCM(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a27(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a27(A.d.aG(t," "))==="sw"?C.bCl(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIB,v)},
bBQ(d,e,f,g,h){return C.i5n(d,e,f,g,h)},
i5n(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBQ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fP(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.M)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hoU()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afp('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hll(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBQ)
case 3:p=j.h_9(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cK(o)){n=d.aCM(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a27(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCl(n),$async$bBQ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7V(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBQ,v)},
a7V:function a7V(d,e,f){this.a=d
this.b=e
this.c=f},
icp(d,e){return B.a3(d,!1).cg(B.e_(new C.fPC(e),!0,null,x.H))},
fPC:function fPC(d){this.a=d},
VP:function VP(d,e){this.c=d
this.a=e},
aEb:function aEb(d,e,f,g,h,i,j,k){var _=this
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
ejq:function ejq(d){this.a=d},
ejp:function ejp(){},
ejr:function ejr(d){this.a=d},
ejo:function ejo(d,e){this.a=d
this.b=e},
ejs:function ejs(){},
ej2:function ej2(d,e){this.a=d
this.b=e},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
ej9:function ej9(d){this.a=d},
eja:function eja(d,e){this.a=d
this.b=e},
ejb:function ejb(d){this.a=d},
ej4:function ej4(d,e){this.a=d
this.b=e},
ej5:function ej5(d,e){this.a=d
this.b=e},
ej6:function ej6(d,e){this.a=d
this.b=e},
ej7:function ej7(d){this.a=d},
ej8:function ej8(d){this.a=d},
ej3:function ej3(d,e){this.a=d
this.b=e},
ej0:function ej0(d){this.a=d},
ej1:function ej1(d){this.a=d},
ejh:function ejh(d){this.a=d},
eji:function eji(d){this.a=d},
ejg:function ejg(d){this.a=d},
ejj:function ejj(d,e){this.a=d
this.b=e},
ejf:function ejf(d,e){this.a=d
this.b=e},
ejk:function ejk(d){this.a=d},
eje:function eje(d){this.a=d},
ejl:function ejl(d){this.a=d},
ejd:function ejd(d){this.a=d},
ejm:function ejm(d,e){this.a=d
this.b=e},
ejc:function ejc(d,e){this.a=d
this.b=e},
ejn:function ejn(d){this.a=d},
ej_:function ej_(d,e){this.a=d
this.b=e},
fDC(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fDC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiY){w=1
break}r=new C.fDD()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fDC)
case 7:$.hiY=!0
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
return B.i($async$fDC,v)},
bCc(d){return A.Ho[B.mH(d)-1]+", "+A.pb[B.bI(d)-1]+" "+B.bV(d)+", "+B.bC(d)},
hYI(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dny[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h25(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fI(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fBV(),B.S(v).k("Z<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.M)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fBX(j,h)
n=new C.fBW(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
fZT(d,e){var w=new C.ff9()
return A.d.cM(e,0,new C.ff7(w))>=A.d.cM(d,0,new C.ff8(w))},
hg4(d){var w,v,u=new B.aJ($.W().r,A.ak,null,null,B.a([],x.v))
u.D(new B.b1(46,0))
w=d.a
u.D(new B.ap(w,0))
v=d.b
u.D(new B.ap(w,v-46))
u.D(new B.ap(w-46,v))
u.D(new B.ap(0,v))
u.D(new B.ap(0,46))
u.D(new B.bv())
return u},
zG:function zG(d,e,f,g,h,i,j,k,l,m){var _=this
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
ceY:function ceY(d){this.a=d},
ceW:function ceW(){},
ceX:function ceX(){},
to:function to(d,e){this.a=d
this.b=e},
By:function By(d,e){this.a=d
this.b=e},
lm:function lm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fDD:function fDD(){},
fBV:function fBV(){},
fBX:function fBX(d,e){this.a=d
this.b=e},
fBW:function fBW(d,e,f){this.a=d
this.b=e
this.c=f},
ff9:function ff9(){},
ffa:function ffa(){},
ff7:function ff7(d){this.a=d},
ff8:function ff8(d){this.a=d},
b0Q:function b0Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ceZ:function ceZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cf_:function cf_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cf0:function cf0(d){this.a=d},
bco:function bco(d){this.a=d},
bcn:function bcn(d,e){this.b=d
this.a=e},
btR:function btR(d){this.a=d},
b8W:function b8W(d,e){this.b=d
this.a=e},
brl:function brl(d,e){this.b=d
this.a=e},
hqU(d,e){return B.a3(d,!1).cg(B.e_(new C.fPF(e,null),!0,null,x.E))},
fPF:function fPF(d,e){this.a=d
this.b=e},
VQ:function VQ(d,e,f){this.c=d
this.d=e
this.a=f},
aEd:function aEd(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ejY:function ejY(){},
ejZ:function ejZ(d){this.a=d},
ejX:function ejX(d,e){this.a=d
this.b=e},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejS:function ejS(d){this.a=d},
ejT:function ejT(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d){this.a=d},
ejR:function ejR(d,e,f){this.a=d
this.b=e
this.c=f},
ejN:function ejN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejU:function ejU(d,e){this.a=d
this.b=e},
ejP:function ejP(d,e){this.a=d
this.b=e},
ejV:function ejV(d){this.a=d},
ejO:function ejO(d,e){this.a=d
this.b=e},
ejW:function ejW(d,e){this.a=d
this.b=e},
bbV:function bbV(d,e,f){this.b=d
this.c=e
this.a=f},
icv(d){return B.a3(d,!1).cg(B.e_(new C.fPV(),!0,null,x.I))},
bzF(d,e){var w,v,u,t,s,r,q=B.c4(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h0i(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fPV:function fPV(){},
a_T:function a_T(d){this.a=d},
oF:function oF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFA:function aFA(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aK=_.aE=_.az=_.Z=_.b8=_.bi=_.y2=0
_.b1=null
_.b0=0.25
_.bb=null
_.bK=0.5
_.aH=1
_.c7=_.bD=_.bh=0
_.cK=_.c5=!1
_.c=_.a=null},
eT9:function eT9(d){this.a=d},
eS1:function eS1(d,e){this.a=d
this.b=e},
eSp:function eSp(d,e){this.a=d
this.b=e},
eSz:function eSz(d){this.a=d},
eRL:function eRL(d){this.a=d},
eRM:function eRM(d){this.a=d},
eRJ:function eRJ(d){this.a=d},
eRK:function eRK(d){this.a=d},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSj:function eSj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSv:function eSv(d,e,f){this.a=d
this.b=e
this.c=f},
eSu:function eSu(d,e){this.a=d
this.b=e},
eSw:function eSw(d,e){this.a=d
this.b=e},
eSt:function eSt(d,e){this.a=d
this.b=e},
eSy:function eSy(d,e,f){this.a=d
this.b=e
this.c=f},
eSx:function eSx(d,e){this.a=d
this.b=e},
eRB:function eRB(d){this.a=d},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d){this.a=d},
eRA:function eRA(){},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRG:function eRG(){},
eRF:function eRF(d,e){this.a=d
this.b=e},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRv:function eRv(d,e){this.a=d
this.b=e},
eRH:function eRH(d){this.a=d},
eRx:function eRx(d,e){this.a=d
this.b=e},
eRI:function eRI(d){this.a=d},
eRw:function eRw(d,e){this.a=d
this.b=e},
eSZ:function eSZ(d,e){this.a=d
this.b=e},
eT5:function eT5(d){this.a=d},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT7:function eT7(){},
eT_:function eT_(d,e){this.a=d
this.b=e},
eSY:function eSY(d,e){this.a=d
this.b=e},
eT0:function eT0(d,e){this.a=d
this.b=e},
eSX:function eSX(d,e){this.a=d
this.b=e},
eT1:function eT1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSW:function eSW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eT2:function eT2(d){this.a=d},
eT3:function eT3(d,e){this.a=d
this.b=e},
eT4:function eT4(d){this.a=d},
eSV:function eSV(d){this.a=d},
eSI:function eSI(d){this.a=d},
eSJ:function eSJ(d){this.a=d},
eSH:function eSH(d,e){this.a=d
this.b=e},
eSC:function eSC(d,e){this.a=d
this.b=e},
eSK:function eSK(d){this.a=d},
eSN:function eSN(d){this.a=d},
eSG:function eSG(d){this.a=d},
eSO:function eSO(d){this.a=d},
eSP:function eSP(d){this.a=d},
eSQ:function eSQ(d){this.a=d},
eSR:function eSR(d){this.a=d},
eSF:function eSF(d){this.a=d},
eSS:function eSS(d){this.a=d},
eSE:function eSE(d){this.a=d},
eST:function eST(d,e){this.a=d
this.b=e},
eSD:function eSD(d,e){this.a=d
this.b=e},
eSU:function eSU(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSM:function eSM(d){this.a=d},
eSm:function eSm(d){this.a=d},
eSl:function eSl(d){this.a=d},
eSn:function eSn(d,e){this.a=d
this.b=e},
eSk:function eSk(d,e){this.a=d
this.b=e},
eSo:function eSo(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSd:function eSd(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSc:function eSc(d){this.a=d},
eSg:function eSg(d,e){this.a=d
this.b=e},
eSb:function eSb(d,e){this.a=d
this.b=e},
eSa:function eSa(d,e){this.a=d
this.b=e},
eRT:function eRT(d){this.a=d},
eRU:function eRU(d){this.a=d},
eRV:function eRV(d){this.a=d},
eRW:function eRW(d){this.a=d},
eRX:function eRX(d){this.a=d},
eRY:function eRY(d){this.a=d},
eRZ:function eRZ(d){this.a=d},
eS_:function eS_(d){this.a=d},
eS0:function eS0(d){this.a=d},
eRe:function eRe(d){this.a=d},
eRf:function eRf(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRd:function eRd(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRN:function eRN(d){this.a=d},
eRO:function eRO(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRQ:function eRQ(d){this.a=d},
eRR:function eRR(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRn:function eRn(d){this.a=d},
eRt:function eRt(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRu:function eRu(d){this.a=d},
eRl:function eRl(d){this.a=d},
eSh:function eSh(d){this.a=d},
eS9:function eS9(d){this.a=d},
eS5:function eS5(d){this.a=d},
eS4:function eS4(d){this.a=d},
eS6:function eS6(d,e){this.a=d
this.b=e},
eS3:function eS3(d,e){this.a=d
this.b=e},
eS7:function eS7(d,e){this.a=d
this.b=e},
eS2:function eS2(d,e){this.a=d
this.b=e},
eS8:function eS8(d){this.a=d},
eSs:function eSs(d){this.a=d},
eSr:function eSr(d,e,f){this.a=d
this.b=e
this.c=f},
eSq:function eSq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSB:function eSB(d,e){this.a=d
this.b=e},
eSA:function eSA(d,e){this.a=d
this.b=e},
eRS:function eRS(d){this.a=d},
eT8:function eT8(d){this.a=d},
bfs:function bfs(d,e){this.b=d
this.a=e},
i7W(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i7X(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l4(0,d),m=B.C(n,B.a6(n).k("J.E"))
if(m.length===0)return d
w=new B.ff("")
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
o=B.aN(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bAf(){var w=$.bzn,v=$.Qw
$.Qw=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.er(A.bh,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bAf(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f7,g,e,f)},
o3(d,e,f,g){var w=f*9
return C.ig(D.eQ,d-f/2,e-w/32,f,w/16,g,0)},
hSi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzn
p=$.Qw
$.Qw=p+1
w.push(new C.eK(q+"_"+p,D.f7,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzn
p=$.Qw
$.Qw=p+1
w.push(new C.eK(q+"_"+p,D.f7,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o3(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o3(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bg,0.08,0.08,0.5,0.003,v,0),C.ig(D.bg,0.58,0.08,0.004,0.06,v,0),C.ig(D.bg,0.58,0.14,0.34,0.003,v,0),C.ig(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bg,0.08,0.8,0.004,0.14,t,0),C.ig(D.bg,0.08,0.94,0.6,0.003,t,0),C.o3(0.58,0.08,0.05,e),C.o3(0.92,0.22,0.05,e),C.o3(0.08,0.8,0.05,f),C.o3(0.68,0.94,0.05,f),C.o3(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.ld,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.ld,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.ld,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.ld,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o3(0.5,0.5,1.5,w|335544320),C.o3(0.5,0.5,1.15,w|402653184),C.o3(0.5,0.5,0.8,v|436207616),C.o3(0.95,0.05,0.4,v|855638016),C.o3(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o3(0.85,0.08,0.7,w|1140850688),C.o3(0.1,0.35,0.5,v|855638016),C.o3(0.9,0.62,0.55,v|771751936),C.o3(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o3(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o3(0.5,0.2,0.65,(w|3422552064)>>>0),C.o3(0.5,0.2,0.95,w|855638016),C.ig(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jU,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jU,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jU,0.15,0.86,0.6,0.14,1712265002,0),C.o3(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cZo[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzn
l=$.Qw
$.Qw=l+1
w.push(new C.eK(m+"_"+l,D.f7,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bh,null,D.eQ,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o3(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jU,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jU,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jU,0.65,-0.1,0.3,0.55,v,0.5),C.o3(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bg,0.06,0.04,0.88,0.002,e,0),C.ig(D.bg,0.06,0.96,0.88,0.002,e,0),C.ig(D.bg,0.06,0.04,0.004,0.92,e,0),C.ig(D.bg,0.936,0.04,0.004,0.92,e,0),C.ig(D.bg,0.09,0.07,0.82,0.001,w,0),C.ig(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jV,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jV,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jV,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eQ,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eQ,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eQ,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eQ,-0.05,0.9,0.4,0.12,v,-0.9),C.o3(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bg,0.09,0.12,0.16,0.006,e,0),C.ig(D.bg,0.05,0.03,0.9,0.001,w,0),C.ig(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i4r(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzn=j
$.Qw=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fzj()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bh,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bAf(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cl,D.lD,1,0,0))
if(a9)A.d.v(q,C.hSi(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i7W(B.aN(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fzi(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bh,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bAf(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cl,D.lD,a3,a4,a5))
return C.rA(s,r,0,0,q,j+"_slide",D.qo,"","","",D.dg)},
rz:function rz(d,e){this.a=d
this.b=e},
mc:function mc(d,e,f,g,h,i,j,k,l,m){var _=this
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
fzj:function fzj(){},
fzi:function fzi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hIn(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cgm(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zH(u,t,s,B.w(w==null?"":w))},
fGZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fGZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hjj){w=1
break}$.hjj=!0
t=4
w=7
return B.b(B.az(),$async$fGZ)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aN(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jR(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hIn(m)
if(l!=null)J.cc(n,l)}$.CJ.c4(0,B.w(o.a),new C.fH_(n))}C.h_Y()
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
return B.i($async$fGZ,v)},
h_Y(){var w,v=new B.T(Date.now(),0,!1).bS(-12e8)
for(w=new B.dt($.CJ,$.CJ.r,$.CJ.e);w.C();)J.nx(w.d,new C.fmE(v))
$.CJ.bt($.CJ,new C.fmF())},
aO4(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aO4=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aO4)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cJ($.CJ,B.a6($.CJ).k("cJ<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.cc(p,B.G(["at",g.a.a7().ad(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aO4)
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
return B.i($async$aO4,v)},
i8x(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h_Y()
w=$.CJ.c4(0,d,new C.fH1())
v=Date.now()
u=B.C(e,B.a6(e).k("cp.E"))
J.pE(w,0,new C.zH(new B.T(v,0,!1),f,u,g))
C.aO4()},
i8u(d){var w,v=$.CJ.h(0,d)
if(v==null||J.co(v))return
w=J.cD(v)
w.cG(v,0)
if(w.gam(v))$.CJ.W(0,d)
C.aO4()},
zH:function zH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgm:function cgm(){},
fH_:function fH_(d){this.a=d},
fmE:function fmE(d){this.a=d},
fmF:function fmF(){},
fH1:function fH1(){},
i8z(d){return A.d.dM(D.wr,new C.fH4(d),new C.fH5())},
hIl(d){var w
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
hIk(d){var w
switch(d.a){case 0:w=D.amj
break
case 1:w=A.yI
break
case 2:w=A.ann
break
case 3:w=I.alW
break
case 4:w=A.amP
break
case 5:w=A.m1
break
default:w=null}return w},
hVm(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Qn[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Qn[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hIm(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=B.U(u,t)
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
o.push(q)}return A.S.ao(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i8v(d,e,f,g,h){var w=new B.N(D.wr,new C.fGY(),x.eC).aG(0,", "),v=""+d,u=C.hoM(h),t=F.fAI(h),s=C.hkW(g),r=e.q(0,D.Ik)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Il)?'- New slides get an "icon3d" from: '+A.d.aG(D.Qn,", ")+".\n":"",p=e.q(0,D.D6)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i8w(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wr,new C.fH0(),x.eC).aG(0,", "),p=new B.ff("")
if(e.q(0,D.Ik)){p.a=s
w=s}else w=""
if(e.q(0,D.Il))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.Qn,", ")+".\n")
if(e.q(0,D.D6))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hoM(d)
v=F.fAI(d)
u=C.hkW(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aha(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D5(a3,"{"),a5=J.fT9(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lr(a3,a4,a5+1)
try{w=A.S.aN(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.co(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fEY(),m).c0(0,new C.fEZ())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.w(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.w(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.w(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.w(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.w(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hVm(B.w(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.q(t,"picture")
d=B.c9(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a82(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.w(q==null?J.fr(u).b:q))
p=A.d.b3(D.wr,new C.fF_(r))?r:a7
o=C.flT(J.q(w,"logo_frame"),D.Cw)
n=C.flT(J.q(w,"logo_ring"),D.Cr)
m=C.flT(J.q(w,"photo_frame"),D.Cw)
l=C.flT(J.q(w,"photo_ring"),D.Cr)
return new C.aro(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1F(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hnT(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.D7),f7=f6?C.hP0():e4,f8=f7==null
if(f8)w=e4
else{v=new B.en()
v.df(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.ec(t,v)
s=u.c
s=new C.nR("luxe",u.a,A.m1,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dg)
w=s}if(w==null)w=C.i8z(f9.b)
r=g2.q(0,D.a5T)||f6
q=g2.q(0,D.Ik)
p=g2.q(0,D.So)
o=new C.fzn()
n=B.a([],x.g)
m=new C.fzq(o,w,r)
l=new C.fzp(o,r)
k=new C.fzo(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b3(u,new C.fzm(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d_X[b8]
c0=D.cZR[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eXz.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eQ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eQ,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mM,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qp,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Sl
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eQ,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.ld,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.D4
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eQ,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mM,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cE,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qp,500,f2,f0))
d3=D.mL
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eQ,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uG:D.cl
c1.push(new C.eK(b4,D.a5R,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bh,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mL
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eQ,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eQ,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mM,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qp,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Sl
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eQ,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eQ,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bg,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bg,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aG(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Ii,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mL}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dg,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hQE(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dpW[A.o.F(b1,6)]:s
n.push(new C.lM(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BM(e4,e4,e4,e4,D.D3,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fBL(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fBL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.D6)
n=e.q(0,D.Il)
if(!o&&!n){u=D.a4Q
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fBO(o,s[r],n,$.hU5,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fBL)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBL,v)},
fAL(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fAL=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i8w(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNo(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fAL)
case 3:u=s.aNK(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fAL,v)},
bBR(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBR=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.em(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.i8x(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aha(i,"colorful")
t=C.i8v(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNo(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hF),$async$bBR)
case 3:u=o.aNK(m,f,h,g,D.e36,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBR,v)},
aNo(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNo=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vo(null,""),$async$aNo)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n9(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qY(t,d,g,"slides",null),$async$aNo)
case 7:q=i
p=q.b
if(p!=null){o=C.aha(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L7(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNo,v)},
aNK(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNK=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.D6)||e.q(0,D.Il)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.de(e,x.Q)
t.W(0,D.D6)}w=6
return B.b(C.fBL(d,t),$async$aNK)
case 6:s=k
w=4
break
case 5:s=D.a4Q
case 4:t=d.c
w=A.d.b3(t,new C.ff3())?7:9
break
case 7:r=$.hpE
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dS(r,x.aP),$async$aNK)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hnT(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hIm(new C.aro(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.S(m).k("N<1,n>")
t=B.C(new B.N(m,new C.ff4(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("jU<cp.E,n>")
t=B.C(new B.jU(e,new C.ff5(),t),t.k("J.E"))
l.cy=t
l.ay=e.q(0,D.So)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNK,v)},
h2P(d){var w,v,u,t=d.cy
if(t==null)t=A.V
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a3F[v]
if(A.d.q(t,u.b))w.M(0,u)}return w},
icA(d){return B.bT(A.K,null,new C.fQ6(),d,!0,!0,!0,null,!1,!1,x.I)},
hPD(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aM(d)},
icz(d,e,f){return B.bT(A.K,null,new C.fQ5(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h2Q(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h2R(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
flT(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.flU(w))?w:""},
hkW(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hpC(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aha(a1==null?"":a1,a0),a3=C.aha(a5,a0)
if(a2==null||a3==null)return!1
w=a2.c
v=w.length
u=a3.c
if(v!==u.length||a2.b!==a3.b)return!1
if(a2.d!==a3.d||a2.e!==a3.e||a2.f!==a3.f||a2.r!==a3.r)return!1
t=a4.cx
if(t==null)t=A.V
if(t.length!==v)return!1
s=B.a([],x.g)
for(v=t.length,r=a4.r,q=B.S(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.M)(t),++p){o=B.pP(new B.Z(r,new C.fH6(t[p]),q))
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
g=B.C(new B.Z(k,new C.fH7(),v),r)
A.d.aV(g,new C.fH8())
if(g.length===0)continue
f=new C.fH9(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.M)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i8Q(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aHq
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e50
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e51
return null},
hkx(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dk(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i8A(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.ol
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.M)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.M)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hkx(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hkx(n,i,v,u))if(n.w>10){f=h+1
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
i8y(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aha(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3F[r]
if(q.b===s)w.M(0,q)}}v=C.h2Q(e)
u=C.h2R(e)
p=C.hnT(n,D.a4Q,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.S(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fH2(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jU<cp.E,n>")
o=B.C(new B.jU(w,new C.fH3(),o),o.k("J.E"))
p.cy=o
p.ay=w.q(0,D.So)
return p},
icm(d,e,f){return B.bT(A.K,null,new C.fPj(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hP0(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.en()
s.df(t)
w=D.cEE[s.au(10)]
v=new C.egg(s)
u=x.N
return new C.egf(w,s.au(4),J.fr(v.$1$2(D.d4y,1,x.ff)),w.r[s.au(3)],v.$1$2(D.dlg,2+s.au(2),u),v.$1$2(D.de1,2,u),v.$1$2(D.dop,4,x.fP),t)},
hQE(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.en()
a1.df(a5.w+a3*13)
w=new C.fbw(a4)
v=new C.fby(a4,d)
u=new C.fbx(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.M)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aZ(A.o.fW(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eQ,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1F(a0,52),"lux_spot",a5.wC(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wC(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aFe(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wC(0,f),D.dg,150,C.a1F(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wC(0,f),D.dg,120,C.a1F(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dg,260,C.a1F(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wC(0,"filigree"),D.dg,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1F(a0,208),"lux_rule",a5.aFe(0,"shimmer",r),D.uF,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1F(a0,144),"lux_rule2","",D.Ii,220))}l=!A.d.b3(a2,new C.fbv())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wC(0,"crest"),350))
else{o=a1.he()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wC(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1F(r,242)
j=a5.wC(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qp,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eQ,t-0.007,0.9495,0.014,0.025,C.a1F(r,242),"lux_g2",a5.wC(0,"orbit"),D.qp,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aZ(A.o.fW(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wC(0,"velvet")))},
nR:function nR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fH4:function fH4(d){this.a=d},
fH5:function fH5(){},
w4:function w4(d,e){this.a=d
this.b=e},
a82:function a82(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aro:function aro(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fGY:function fGY(){},
fH0:function fH0(){},
fEY:function fEY(){},
fEZ:function fEZ(){},
fF_:function fF_(d){this.a=d},
fzn:function fzn(){},
fzq:function fzq(d,e,f){this.a=d
this.b=e
this.c=f},
fzp:function fzp(d,e){this.a=d
this.b=e},
fzo:function fzo(d,e){this.a=d
this.b=e},
fzm:function fzm(d){this.a=d},
fBO:function fBO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBM:function fBM(d){this.a=d},
fBN:function fBN(d){this.a=d},
ff3:function ff3(){},
ff4:function ff4(){},
ff5:function ff5(){},
fQ6:function fQ6(){},
a0p:function a0p(d){this.a=d},
aHw:function aHw(d,e,f,g,h){var _=this
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
eZm:function eZm(d,e,f){this.a=d
this.b=e
this.c=f},
eZn:function eZn(d,e){this.a=d
this.b=e},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZl:function eZl(d,e){this.a=d
this.b=e},
eZj:function eZj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eZe:function eZe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eZi:function eZi(d,e){this.a=d
this.b=e},
eZd:function eZd(d,e){this.a=d
this.b=e},
eZh:function eZh(d,e){this.a=d
this.b=e},
eZc:function eZc(d,e){this.a=d
this.b=e},
eZf:function eZf(d){this.a=d},
eZg:function eZg(d,e){this.a=d
this.b=e},
eZ2:function eZ2(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d,e){this.a=d
this.b=e},
eZ5:function eZ5(d){this.a=d},
eZ6:function eZ6(d){this.a=d},
eZ7:function eZ7(d){this.a=d},
eZ8:function eZ8(d){this.a=d},
eZ4:function eZ4(d,e){this.a=d
this.b=e},
eZ9:function eZ9(d,e){this.a=d
this.b=e},
eZA:function eZA(d){this.a=d},
eZB:function eZB(d){this.a=d},
eZz:function eZz(d){this.a=d},
eZC:function eZC(d){this.a=d},
eZy:function eZy(d){this.a=d},
eZE:function eZE(d){this.a=d},
eZx:function eZx(d,e){this.a=d
this.b=e},
eZF:function eZF(d){this.a=d},
eZw:function eZw(d,e){this.a=d
this.b=e},
eZG:function eZG(d){this.a=d},
eZv:function eZv(d){this.a=d},
eZH:function eZH(d){this.a=d},
eZu:function eZu(d,e){this.a=d
this.b=e},
eZI:function eZI(d){this.a=d},
eZt:function eZt(d,e){this.a=d
this.b=e},
eZJ:function eZJ(d){this.a=d},
eZs:function eZs(d){this.a=d},
eZK:function eZK(d,e){this.a=d
this.b=e},
eZr:function eZr(d,e){this.a=d
this.b=e},
eZL:function eZL(d){this.a=d},
eZD:function eZD(d){this.a=d},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZa:function eZa(d,e,f){this.a=d
this.b=e
this.c=f},
eZb:function eZb(d,e,f){this.a=d
this.b=e
this.c=f},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZo:function eZo(d,e){this.a=d
this.b=e},
fQ5:function fQ5(d,e){this.a=d
this.b=e},
a0o:function a0o(d,e,f){this.c=d
this.d=e
this.a=f},
aHv:function aHv(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eYW:function eYW(d){this.a=d},
eYX:function eYX(d){this.a=d},
eYY:function eYY(d,e){this.a=d
this.b=e},
eYZ:function eYZ(d){this.a=d},
eZ_:function eZ_(d){this.a=d},
eYV:function eYV(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d,e){this.a=d
this.b=e},
eZ1:function eZ1(d,e){this.a=d
this.b=e},
flU:function flU(d){this.a=d},
b1e:function b1e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aE5:function aE5(d,e,f){this.c=d
this.d=e
this.a=f},
bk0:function bk0(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
egi:function egi(d){this.a=d},
egh:function egh(){},
bhE:function bhE(d,e){this.b=d
this.a=e},
fH6:function fH6(d){this.a=d},
fH7:function fH7(){},
fH8:function fH8(){},
fH9:function fH9(d){this.a=d},
arW:function arW(d,e){this.a=d
this.b=e},
fH2:function fH2(){},
fH3:function fH3(){},
fPj:function fPj(d,e){this.a=d
this.b=e},
ZM:function ZM(d,e,f){this.c=d
this.d=e
this.a=f},
aBB:function aBB(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dl1:function dl1(d){this.a=d},
dl2:function dl2(d){this.a=d},
dl3:function dl3(d,e){this.a=d
this.b=e},
dl6:function dl6(d){this.a=d},
dl7:function dl7(d,e){this.a=d
this.b=e},
dl5:function dl5(d,e){this.a=d
this.b=e},
dl8:function dl8(d){this.a=d},
dl4:function dl4(d,e){this.a=d
this.b=e},
bss:function bss(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
egf:function egf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
egg:function egg(d){this.a=d},
fbw:function fbw(d){this.a=d},
fby:function fby(d,e){this.a=d
this.b=e},
fbx:function fbx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbv:function fbv(){},
aLZ:function aLZ(){},
h1E(d){var w,v,u
try{w=A.S.aN(0,d,null)
if(x.f.b(w)){v=B.vY(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b1a:function b1a(d,e,f){this.c=d
this.d=e
this.a=f},
blA:function blA(d,e){this.c=d
this.a=e},
i4U(d){return A.d.dM(D.Hl,new C.fAu(d),new C.fAv())},
i4V(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Z(D.Hl,new C.fAw(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jH("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lj:function lj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAu:function fAu(d){this.a=d},
fAv:function fAv(){},
fAw:function fAw(d){this.a=d},
mZ(d,e,f,g,h){return new C.EI(f,g,d)},
hRO(d){var w=d.z,v=B.S(w).k("Z<1>")
w=B.C(new B.Z(w,new C.fdv(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Kv
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bh,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f7,j,k,l)},
hnG(d,e){var w
C.hRO(d)
w=A.d.dM($.bDS(),new C.fyk(e),new C.fyl())
$.Kv=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Kv=""}d.z=B.bo(d.z,!0,x.F)},
EI:function EI(d,e,f){this.a=d
this.b=e
this.e=f},
fdv:function fdv(){},
fGz:function fGz(){},
fGA:function fGA(){},
fGB:function fGB(){},
fGM:function fGM(){},
fGR:function fGR(){},
fGS:function fGS(){},
fGT:function fGT(){},
fGU:function fGU(){},
fGV:function fGV(){},
fGW:function fGW(){},
fGX:function fGX(){},
fGC:function fGC(){},
fGD:function fGD(){},
fGE:function fGE(){},
fGF:function fGF(){},
fGG:function fGG(){},
fGH:function fGH(){},
fGI:function fGI(){},
fGJ:function fGJ(){},
fGK:function fGK(){},
fGL:function fGL(){},
fGN:function fGN(){},
fGO:function fGO(){},
fGP:function fGP(){},
fGQ:function fGQ(){},
fyk:function fyk(d){this.a=d},
fyl:function fyl(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CZ(d,e,f,g,h,i,j,k,l){return C.er(A.bh,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f7,j,k,l)},
bCA(){var w=new B.T(Date.now(),0,!1)
return A.iv[B.bI(w)-1]+" "+B.bV(w)+", "+B.bC(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bA_(d){return new B.iS((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hX_(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.an2(A.cF.aM(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hX3(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fls(),x.dv).aG(0,"\n")},
hX2(d){switch(d.a){case 2:return A.ny
case 1:case 5:return A.f7E
default:return A.TQ}},
hWX(d){switch(d.a){case 2:return A.vi
case 1:case 5:return A.VH
default:return A.aaX}},
hX0(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bA_(u),q=(s&255)===0?v:C.bA_(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nz(q,p,A.kT)
w=new B.pF(t,t,t,t)}switch(d.ax.a){case 1:return B.lA(v,v,v,new B.kD(r,w,v,A.acc,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.x7(B.lA(v,v,q,v,p+0.4,v,v,v))
default:return B.lA(v,v,v,new B.kD(r,w,B.vx(4),A.hJ,v),v,v,v,v)}},
hWZ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f7?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hWX(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.hX3(d)
t=C.bA_(d.Q)
s=d.x.a>=700?A.ep:A.vW
r=d.y===A.cE?A.ym:A.akK
q=d.z
p=new B.D8(w,l,l,B.fb(u,l,l,l,B.h8(l,t,1===q.a?A.aQB:A.aQA,l,l,l,l,l,l,A.du,l,l,v,r,s,l,!0,l,l,l,l),C.hX2(d.as)))
break
case 1:case 4:o=C.hX_(d.at)
n=i===D.lD&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x7(B.fb(w,l,l,l,B.h8(l,A.rJ,l,l,l,l,l,l,l,A.du,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HY(o,n?A.ac8:A.W5,l,l)
break
case 3:w=new B.nz(A.ID,1,A.kT)
u=B.vx(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lA(A.vi,B.fb(t,l,l,l,B.h8(l,D.eiB,l,l,l,l,l,l,l,A.du,l,l,11,l,A.ep,l,!0,l,l,l,l),A.ny),l,new B.kD(E.aIP,new B.pF(w,w,w,w),u,A.hJ,l),l,l,l,l)
break
case 2:p=C.hX0(d,e)
break
case 5:p=C.hWY(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hfg(-w,p)
w=i===D.cQ
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.asH(m/255,p)}if(w)return new F.w9(k,l,j,l,new B.Sl(new B.kC(g,g,f,1/0),p))
if(i===D.lc){i=new B.nz(A.ID,1,A.kT)
i=B.lA(A.vi,p,l,new B.kD(A.pi,new B.pF(i,i,i,i),B.vx(4),A.hJ,l),l,l,D.bA5,l)}else i=p
return new F.w9(k,l,j,l,new B.fR(g,f,i))},
hX1(d,e,f,g){var w,v=null,u=C.bA_(d.e),t=d.f
t=B.a([F.hdT(t!=null?B.lA(v,v,v,new B.kD(v,v,v,A.hJ,new B.aWE(E.VJ,A.aaR,B.a([u,C.bA_(t)],x.cR),v)),v,v,v,v):B.lA(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.flr(f,g),B.S(w).k("N<1,fg>")))
return F.ctB(t)},
h2T(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h2T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4h(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){p=t[q]
o=new B.Wx(A.wA,A.IA,D.bBe,null,null,null,!1,null)
o=new B.BR(o,new C.fHf(607,787,p,d))
o.MK(n,null)
r.push(o)}u=n.js(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2T,v)},
hWY(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h1E(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajQ()
if(h==null)h=A.ayg
j=B.tB(4279308564)
w=B.vx(18)
v=new B.nz(B.tB(4287531653),3,A.kT)
u=i.length===0?"My links":i
u=B.a([B.x7(B.fb(u,m,m,m,B.h8(m,A.pi,m,m,m,m,m,m,m,A.du,m,m,12,m,A.ep,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x7(B.fb(A.a.i(l.c),m,m,m,D.ff8,m)))
u.push(new B.fR(m,8,m))
for(t=B.d1(h,0,B.dB(8,"count",x.S),B.S(h).c),s=t.$ti,t=new B.bS(t,t.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tB(4280690220)
o=new B.a9n(8,8)
n=A.a.i(r.b)
u.push(new B.nS(D.buf,new C.awW(new C.aif(q),B.lA(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.fhs,A.ny),m,new B.kD(p,m,new B.aiG(o,o,o,o),A.hJ,m),m,m,D.bAw,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x7(B.fb(k,m,m,m,D.fgH,m))
u.push(new C.awW(C.hwn(k),t))}return B.lA(m,B.yZ(u,A.Mh,A.lB),m,new B.kD(j,new B.pF(v,v,v,v),w,A.hJ,m),m,m,D.bv5,m)},
fls:function fls(){},
flr:function flr(d,e){this.a=d
this.b=e},
fHf:function fHf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agY(d){var w,v
for(w=0;w<32;++w){v=D.Hc[w]
if(v.a===d)return v}return null},
hhX(d){var w,v,u=A.a.cD(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aM(A.a.b2(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hqQ(d,e){return B.a3(d,!1).cg(B.e_(new C.fNJ(e),!0,null,x.fB))},
hqP(d,e){return B.bT(A.K,null,new C.fNI(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ez:function Ez(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NA:function NA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjp:function bjp(d,e,f){var _=this
_.d=d
_.e=$
_.bx$=e
_.ab$=f
_.c=_.a=null},
dVE:function dVE(d){this.a=d},
dVD:function dVD(d,e,f){this.a=d
this.b=e
this.c=f},
dVC:function dVC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
br0:function br0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eY9:function eY9(d,e){this.a=d
this.b=e},
bez:function bez(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b_4:function b_4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
caT:function caT(){},
caU:function caU(d){this.a=d},
caV:function caV(d,e,f){this.a=d
this.b=e
this.c=f},
caW:function caW(d,e,f){this.a=d
this.b=e
this.c=f},
fNJ:function fNJ(d){this.a=d},
Zj:function Zj(d,e){this.c=d
this.a=e},
azZ:function azZ(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dai:function dai(d,e,f){this.a=d
this.b=e
this.c=f},
dan:function dan(d){this.a=d},
dao:function dao(d){this.a=d},
dam:function dam(d){this.a=d},
dap:function dap(d){this.a=d},
dal:function dal(d,e){this.a=d
this.b=e},
daq:function daq(d){this.a=d},
dak:function dak(d){this.a=d},
dar:function dar(d){this.a=d},
daj:function daj(d,e){this.a=d
this.b=e},
das:function das(d,e){this.a=d
this.b=e},
fNI:function fNI(d){this.a=d},
fNH:function fNH(d){this.a=d},
fNG:function fNG(d,e,f){this.a=d
this.b=e
this.c=f},
fNF:function fNF(d,e){this.a=d
this.b=e},
aLv:function aLv(){},
icy(d){return B.bT(A.K,null,new C.fQ4(),d,!0,!0,!0,null,!1,!1,x.N)},
fQ4:function fQ4(){},
ZE:function ZE(d){this.a=d},
bg1:function bg1(d){this.d=d
this.c=this.a=null},
dh4:function dh4(d){this.a=d},
dh5:function dh5(d,e){this.a=d
this.b=e},
dh6:function dh6(d){this.a=d},
hTm(d){var w,v=d.split("@")
if(v.length>1){w=B.c9(v[1],16)
if(w!=null)return B.b0(w)}return D.xM},
i6P(d){var w,v=A.d.gI(d.split("@"))
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
i6O(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hTm(d)
switch(q){case"shimmer":return B.nW(A.VS,g,new C.fDW(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bfp(e,f,p,r),A.az),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dd(C.fUz(g,B.a57(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bf7(e,p,r),A.az),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.dd(B.eH(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dk()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fA(e)
u.mL(Math.sin(e)*0.3)
return B.dU(B.fo(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b2,A.t,B.a([B.e2(B.b4(r,r,r,new C.bnS(e,f,p,r),A.az),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b2,A.t,B.a([B.e2(B.b4(r,r,r,new C.ba2(e,f,p,r),A.az),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b2,A.t,B.a([B.e2(B.b4(r,r,r,new C.b9H(e,f,p,r),A.az),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.buN(e,p,r),A.az),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.brO(e,f,p,r),A.az),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bqX(e,p,r),A.az),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b2,A.t,B.a([g,B.e2(B.b4(r,r,r,new C.bes(e,p,r),A.az),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bU(0,B.e2(B.ed(A.A,B.c1(r,new B.o(r,r,r,r,r,new B.c0(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eH(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fDW:function fDW(d,e){this.a=d
this.b=e},
bfp:function bfp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bf7:function bf7(d,e,f){this.b=d
this.c=e
this.a=f},
bnS:function bnS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
ba2:function ba2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9H:function b9H(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buN:function buN(d,e,f){this.b=d
this.c=e
this.a=f},
brO:function brO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqX:function bqX(d,e,f){this.b=d
this.c=e
this.a=f},
bes:function bes(d,e,f){this.b=d
this.d=e
this.a=f},
da_:function da_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xF:function xF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fDZ(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lc},
i6U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aV(j,new C.fE_())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.M)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQk(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i6T(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
agC(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agC=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.S(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fwm(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dH,null,new C.fwn(e),d,!0,!0,!1,A.lE,!1,!1,x.N),$async$agC)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hI())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h3x(d),$async$agC)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Li(d,"Search states\u2026","",A.kf,"Choose state"),$async$agC)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h2q(s)
if(p==null)p=A.d.gI(D.Rd)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fE0(p.d)
k=x.u
j=B.a([C.er(A.bh,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cE(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CM(i,0.016,D.ld,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CM(0,0.058,D.eQ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CM(0,0.058,D.eQ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KG("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KG("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h_g(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzt("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1g("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1g("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1g("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1g("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzt("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CM(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.er(A.bh,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cw,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cl,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.h_g(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzt("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hjX("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hjX("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1g("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1g("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzs("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzs("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzt("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KG("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KG("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzs("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzs("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzt("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1g("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzs("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1g("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h_g(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KG("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KG("Nakala ya Hati",A.L,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BM(null,null,null,null,D.ol,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rA(m,null,0,0,j,n,D.qo,"","","Hati ya Ndoa",D.dg)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agC,v)},
fE_:function fE_(){},
fwm:function fwm(){},
fwn:function fwn(d){this.a=d},
fwk:function fwk(d){this.a=d},
fwl:function fwl(d){this.a=d},
hWr(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hWq(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mQ
case"lineThrough":return A.zX
default:return A.aF}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eK(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hm2(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QY[w]
if(v.b===u)return v}return D.dg},
hSL(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cWF[w]
if(v.b===u)return v}return D.cQ},
hZh(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dlX[w]
if(v.b===u)return v}return D.bg},
rA(d,e,f,g,h,i,j,k,l,m,n){return new C.lM(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hcE(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hUN(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.O(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.O(s)
r=C.hm2(d.h(0,"transition"))
q=B.aK(d.h(0,"durationSeconds"))
q=q==null?m:A.k.O(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aK(d.h(0,"designRevision"))
o=o==null?m:A.k.O(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.da(n,x.f)
n=B.cF(n,new C.cgj(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a6(n).k("J.E"))}return C.rA(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hUN(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aq0[w]
if(v.b===u)return v}return D.mL},
BM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.T(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rA(4294967295,null,0,0,null,C.cE(),D.qo,"","","",D.dg)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hQU(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.O(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bi(J.k(s==null?"":s))
if(s==null)s=new B.T(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.ky(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.ky(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aK(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aK(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.k.O(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.A(a6.h(0,"cinematic"),!0)
i=J.A(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.cg6(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cg7(),x.N)
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
g=B.cF(g,new C.cg8(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a6(g).k("J.E"))}return C.BM(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rA(4294967295,a3,0,0,a3,C.cE(),D.qo,"","","",D.dg)],x.g):g,v,p,o,s)},
ky(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hQU(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dmQ[w]
if(v.b===u)return v}return D.D3},
cE(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
cgA(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.D4){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.er(A.L,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.84,0.08,0.3)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cl,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.er(A.bh,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bh,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cw,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.er(A.bh,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.er(A.bh,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cQ,0.42,0.06,0.22)
s=C.cE()
A.d.v(w,B.a([v,u,C.er(A.bh,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.er(A.L,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cl,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.er(A.bh,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.er(A.bh,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cl,D.f7,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.er(A.bh,!1,r.l(),A.aF,"",n,20,A.bp,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cl,D.cQ,0.38,0.08,0.26)
q=C.cE()
t=C.er(A.bh,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f7,0.42,0.52,0.22)
q=C.cE()
A.d.v(w,B.a([v,u,s,t,C.er(A.bh,!1,r.l(),A.aF,"",n,20,A.bp,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cl,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.er(A.L,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cQ,0.8,0.1,0.12)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cw,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.er(A.bh,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bh,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.er(A.bh,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cQ,0.88,0.06,0.04)
u=C.cE()
A.d.v(w,B.a([v,C.er(A.bh,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hIw(d){return A.d.dM(D.a3j,new C.cgB(d),new C.cgC())},
hIt(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aN(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cc(v,C.VZ(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fWG(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cgw(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.M)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aV(u,new C.cgv())
return u},
hcH(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cgr()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
arp(d){return C.hIr(d)},
hIr(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cgu()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2r(m),$async$arp)
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
return B.b(B.az(),$async$arp)
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
case 11:o=l.$1($.hcG.h(0,m))
n=C.fWG(C.fWG(j,r),o)
if(n.length===0){u=C.hcH(C.hcH(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arp,v)},
cgq(d){return C.hIq(d)},
hIq(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cgq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cgq)
case 7:r=f
q=r.tj("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.V
q=B.jW(q,B.S(q).c)
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
return B.i($async$cgq,v)},
b1g(d,e){return C.hIs(d,e)},
hIs(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b1g=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1g)
case 6:s=g
q=s.tj("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lq(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b1g)
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
return B.i($async$b1g,v)},
W_(d,e){return C.hIu(d,e)},
hIu(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$W_=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hcF.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arp(a3),$async$W_)
case 5:p=a6
case 4:w=6
return B.b(C.cgq(a3),$async$W_)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.M)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("Z<J.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.cgx(o),l),l.k("J.E"))
A.d.aV(e,new C.cgy())
$.hcF.n(0,a0,e)
n=B.S(e).k("N<1,a7<n,@>>")
n=B.C(new B.N(e,new C.cgz(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.hcG.n(0,a0,r)
t=8
w=11
return B.b(B.ahp(a0,r),$async$W_)
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
return B.b(B.az(),$async$W_)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$W_)
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
return B.i($async$W_,v)},
IS:function IS(d,e){this.a=d
this.b=e},
arn:function arn(d,e){this.a=d
this.b=e},
uM:function uM(d,e){this.a=d
this.b=e},
mE:function mE(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eK:function eK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lM:function lM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cgk:function cgk(){},
cgl:function cgl(){},
cgj:function cgj(){},
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
cg9:function cg9(){},
cga:function cga(){},
cg6:function cg6(){},
cg7:function cg7(){},
cg8:function cg8(){},
jH:function jH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cgB:function cgB(d){this.a=d},
cgC:function cgC(){},
cgw:function cgw(d){this.a=d},
cgv:function cgv(){},
cgr:function cgr(){},
cgs:function cgs(){},
cgt:function cgt(){},
cgu:function cgu(){},
cgx:function cgx(d){this.a=d},
cgy:function cgy(){},
cgz:function cgz(){},
i74(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fEy(e,v,d,B.aY(w))
w.$1(new C.fEu())
w.$1(new C.fEv())
w.$1(new C.fEw())
w.$1(new C.fEx())
return v},
fEy:function fEy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEu:function fEu(){},
fEv:function fEv(){},
fEw:function fEw(){},
fEx:function fEx(){},
b1d:function b1d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cgf:function cgf(d){this.a=d},
cge:function cge(){},
cgg:function cgg(){},
cgh:function cgh(d,e){this.a=d
this.b=e},
cgi:function cgi(d){this.a=d},
aoy:function aoy(d,e){this.c=d
this.a=e},
bja:function bja(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
dIc:function dIc(){},
aLh:function aLh(){},
cgn(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cgn=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.J(x.q).f.R(D.f4Q)
u=!1
w=1
break}u=B.kX(!1,d,t,!1,null,A.a5V,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgn,v)},
hIo(d){var w=A.d.bg(D.Hl,new C.cgo(d))
if(w<0)return!0
return w>=4},
hIp(d){var w=A.d.bg($.bDS(),new C.cgp(d))
if(w<0)return!0
return w>=5},
cgo:function cgo(d){this.a=d},
cgp:function cgp(d){this.a=d},
i8K(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yN()
$.qm().q0(t,new C.fHm(s),!0)
u=B.a([B.DT(v,A.qs,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.ffB,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nl,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b2,A.t,u,v)},
fHm:function fHm(d){this.a=d},
i8l(){return C.h2M()},
i5i(){return C.bBO()},
i7l(){return C.h2D()},
aPr(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPr=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fGs(d,f),$async$aPr)
case 5:w=1
break
case 4:if(d.e!=null)d.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPr,v)},
fGs(d,e){var w=0,v=B.j(x.H),u
var $async$fGs=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bA0
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.K,null,new C.fGt(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fGs)
case 2:return B.h(null,v)}})
return B.i($async$fGs,v)},
fGt:function fGt(d,e){this.a=d
this.b=e},
adn:function adn(d,e,f){this.c=d
this.d=e
this.a=f},
erl:function erl(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
adE:function adE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b1c(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b1b(g,m,f,d,e,h,l,k,j,o,i,null)},
hp0(d){return B.cC(new C.fEt(d))},
h2O(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i8t(d){if(d===D.cl)return"None"
return C.h2O(d)},
bAw(d,e,f,g){return C.hZo(d,e,f,g)},
hZo(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAw=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a3(d,!0)
if($.h_z&&t.pE())t.eH()
$.h_z=!0
s.a=null
w=3
return B.b(B.hZ(A.bk,!0,"Animation preview",d,new C.fo_(s,e,g,f),null,A.eM,!0,x.H),$async$bAw)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h_z=!1
case 1:return B.h(u,v)}})
return B.i($async$bAw,v)},
fQT(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fQT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aH(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h2O(f)+" Slide transition preview"
s=s?Af.FD:A.vH
w=3
return B.b(C.bAw(d,s,new B.a8(t,t*0.56,B.bx(B.m(14),new C.aIV(f,null),A.aq),null),r),$async$fQT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fQT,v)},
hoi(d,e,f){var w,v,u=null,t=A.ct.av(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dd(f,t)
case 2:case 17:return B.dU(B.dd(f,t),new B.t((1-t)*48,0))
case 3:return B.dU(B.dd(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dd(f,t),new B.t(0,(1-t)*36))
case 5:return B.dU(B.dd(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.dd(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.dd(f,t),1.4-t*0.4,u,u)
case 8:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fA((1-t)*1.2)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 9:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kc((1-t)*1.2)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 10:case 19:w=B.dk()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mL((1-t)*0.8)
v=0.6+t*0.4
w.jT(v,v,v,1)
return B.fo(A.A,B.dd(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dd(f,t),new B.t((1-t)*24,0))}},
bDm(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aH(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h2O(f)+" Element animation preview"
s=s?Af.FD:A.vH
w=3
return B.b(C.bAw(d,s,new B.a8(t,t*0.62,B.bx(B.m(14),new C.azI(f,null),A.aq),null),r),$async$bDm)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDm,v)},
i8s(d){var w,v,u,t,s=$.ag3.W(0,d)
if(s!=null){$.ag3.n(0,d,s)
return s}w=A.cF.aM(A.a.b2(d,A.a.cD(d,",")+1))
$.ag3.n(0,d,w)
v=$.h0n=$.h0n+w.length
u=B.a6($.ag3).k("cs<1>")
for(;;){if(!(v>41943040&&$.ag3.a>1))break
t=new B.cs($.ag3,u).gaf(0)
if(!t.C())B.b8(B.ft())
v-=$.ag3.W(0,t.gT(0)).length
$.h0n=v}return w},
i89(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l4(0,d),j=B.C(k,B.a6(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.M)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SQ(s,A.u))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SQ(t,A.u))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SQ(u,A.cw))
v.push(new B.eS(n,l,l,A.d_,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cZ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2q(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
m.D(new B.jy(e))
return m
case"rounded":m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
w=e.gdF()*0.18
m.D(new B.iN(B.bz(e,new B.aQ(w,w))))
return m
case"triangle":m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
m.D(new B.b1(e.gbN().a,e.b))
w=e.d
m.D(new B.ap(e.c,w))
m.D(new B.ap(e.a,w))
m.D(new B.bv())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aJ(w.r,A.ak,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b1(p,o)
m.push(p)
o=v.f
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bv())
return v
case"diamond":m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
m.D(new B.b1(e.gbN().a,e.b))
m.D(new B.ap(e.c,e.gbN().b))
m.D(new B.ap(e.gbN().a,e.d))
m.D(new B.ap(e.a,e.gbN().b))
m.D(new B.bv())
return m
case"arch":m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.b1(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.ap(w,p))
m.bao(new B.t(t,p),new B.aQ(s,s))
m.D(new B.ap(t,u))
m.D(new B.bv())
return m
default:m=new B.aJ($.W().r,A.ak,n,n,B.a([],m))
m.D(new B.oc(e))
return m}},
fC2(d,e,f){return B.cC(new C.fC3(D.eY7.q(0,d),d,f,e))},
b1b:function b1b(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cgd:function cgd(d){this.a=d},
cgc:function cgc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgb:function cgb(){},
b18:function b18(d,e){this.b=d
this.a=e},
fEt:function fEt(d){this.a=d},
fEs:function fEs(d,e){this.a=d
this.b=e},
fo_:function fo_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnY:function fnY(d){this.a=d},
fnZ:function fnZ(d,e){this.a=d
this.b=e},
aIV:function aIV(d,e){this.c=d
this.a=e},
buj:function buj(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
f5H:function f5H(d,e,f){this.a=d
this.b=e
this.c=f},
aJx:function aJx(d,e){this.b=d
this.a=e},
V6:function V6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjl:function bjl(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
dTq:function dTq(d){this.a=d},
dTp:function dTp(d){this.a=d},
dTo:function dTo(d){this.a=d},
IR:function IR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cg5:function cg5(d){this.a=d},
cg4:function cg4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azI:function azI(d,e){this.c=d
this.a=e},
bdW:function bdW(){this.d=0
this.c=this.a=null},
d7e:function d7e(d){this.a=d},
d7d:function d7d(d){this.a=d},
a7L:function a7L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjZ:function bjZ(d,e){var _=this
_.d=null
_.bx$=d
_.ab$=e
_.c=_.a=null},
efZ:function efZ(d,e,f){this.a=d
this.b=e
this.c=f},
b_7:function b_7(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bf5:function bf5(d,e,f){this.b=d
this.c=e
this.a=f},
bpU:function bpU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eVN:function eVN(){},
fC3:function fC3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqU:function bqU(d,e,f){this.b=d
this.c=e
this.a=f},
aLu:function aLu(){},
aLX:function aLX(){},
aNf:function aNf(){},
fFt(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fFt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xh.c8().M7(D.djW,A.u1,!0),$async$fFt)
case 3:r=e
if(r==null||J.co(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i83(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFt,v)},
i83(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a83(d,new B.a01(A.cJ.gct().aM(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.i04(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a83(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cf.KV(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a83(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i04(d){var w,v,u,t,s,r,q,p,o=null,n=new C.czj().cKZ(B.rk(d,A.i3,o,o),o,o,!1).cMI(0,"word/document.xml")
if(n==null)return""
w=n.cUL()
v=A.cf.KV(0,w==null?$.hrk():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l4(0,r)
p=A.a.i(B.cF(q,new C.fr0(),B.a6(q).k("J.E"),t).hu(0))
if(p.length!==0){q=B.aN(p,"&lt;","<")
q=B.aN(q,"&gt;",">")
q=B.aN(q,"&quot;",'"')
q=B.aN(q,"&apos;","'")
q=B.aN(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a83:function a83(d,e,f){this.a=d
this.b=e
this.c=f},
fr0:function fr0(){},
hIv(d,e,f,g,h,i,j,k,l){return new C.O1(l,e,d,g,f,i,h,j,k,null)},
O1:function O1(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEt:function aEt(d,e,f,g,h,i,j,k,l){var _=this
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
_.ab$=l
_.c=_.a=null},
exz:function exz(d){this.a=d},
exx:function exx(){},
exy:function exy(d){this.a=d},
etX:function etX(){},
etY:function etY(){},
etZ:function etZ(d,e){this.a=d
this.b=e},
evx:function evx(d){this.a=d},
evl:function evl(){},
evm:function evm(){},
etk:function etk(){},
ewF:function ewF(d){this.a=d},
exv:function exv(d,e){this.a=d
this.b=e},
evv:function evv(d,e){this.a=d
this.b=e},
exi:function exi(d){this.a=d},
exj:function exj(){},
exk:function exk(){},
exl:function exl(d){this.a=d},
exm:function exm(){},
esJ:function esJ(d){this.a=d},
exw:function exw(){},
euE:function euE(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
esI:function esI(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev1:function ev1(d,e,f){this.a=d
this.b=e
this.c=f},
ev2:function ev2(d){this.a=d},
euD:function euD(){},
euC:function euC(d){this.a=d},
euA:function euA(){},
euz:function euz(d){this.a=d},
euB:function euB(){},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
euK:function euK(d){this.a=d},
euF:function euF(d){this.a=d},
euG:function euG(d){this.a=d},
euH:function euH(d){this.a=d},
euI:function euI(d){this.a=d},
euJ:function euJ(d){this.a=d},
euL:function euL(d,e){this.a=d
this.b=e},
esL:function esL(){},
esM:function esM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euW:function euW(){},
euX:function euX(d,e){this.a=d
this.b=e},
euU:function euU(d,e,f){this.a=d
this.b=e
this.c=f},
euV:function euV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euO:function euO(d,e,f){this.a=d
this.b=e
this.c=f},
euP:function euP(d,e,f){this.a=d
this.b=e
this.c=f},
euQ:function euQ(d){this.a=d},
euR:function euR(d,e){this.a=d
this.b=e},
euS:function euS(d,e){this.a=d
this.b=e},
euT:function euT(d,e){this.a=d
this.b=e},
euN:function euN(d,e){this.a=d
this.b=e},
euZ:function euZ(d){this.a=d},
ev_:function ev_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euY:function euY(d){this.a=d},
evg:function evg(){},
evh:function evh(){},
evi:function evi(){},
evj:function evj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evd:function evd(d){this.a=d},
evf:function evf(){},
eve:function eve(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
evb:function evb(d,e,f){this.a=d
this.b=e
this.c=f},
evc:function evc(d,e){this.a=d
this.b=e},
evk:function evk(){},
euM:function euM(d,e){this.a=d
this.b=e},
et1:function et1(){},
et2:function et2(d,e,f){this.a=d
this.b=e
this.c=f},
et3:function et3(d){this.a=d},
et4:function et4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et0:function et0(d){this.a=d},
evq:function evq(d){this.a=d},
evp:function evp(d,e){this.a=d
this.b=e},
evo:function evo(d,e){this.a=d
this.b=e},
evn:function evn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evr:function evr(d,e){this.a=d
this.b=e},
erG:function erG(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
esY:function esY(d){this.a=d},
evz:function evz(d,e,f){this.a=d
this.b=e
this.c=f},
esU:function esU(d,e){this.a=d
this.b=e},
esT:function esT(d){this.a=d},
evy:function evy(d,e,f){this.a=d
this.b=e
this.c=f},
esK:function esK(d){this.a=d},
etl:function etl(){},
exg:function exg(d,e){this.a=d
this.b=e},
exh:function exh(d,e,f){this.a=d
this.b=e
this.c=f},
ewG:function ewG(d,e,f){this.a=d
this.b=e
this.c=f},
erH:function erH(d){this.a=d},
erE:function erE(d,e){this.a=d
this.b=e},
eru:function eru(d,e){this.a=d
this.b=e},
err:function err(d){this.a=d},
erq:function erq(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
esW:function esW(d){this.a=d},
esX:function esX(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
es8:function es8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
es9:function es9(d,e){this.a=d
this.b=e},
esd:function esd(d,e){this.a=d
this.b=e},
ese:function ese(d){this.a=d},
esb:function esb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esc:function esc(d){this.a=d},
esa:function esa(){},
es7:function es7(d,e,f){this.a=d
this.b=e
this.c=f},
eva:function eva(d,e){this.a=d
this.b=e},
exp:function exp(d){this.a=d},
exq:function exq(d,e){this.a=d
this.b=e},
exr:function exr(d){this.a=d},
exs:function exs(d,e,f){this.a=d
this.b=e
this.c=f},
exo:function exo(d){this.a=d},
ewW:function ewW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ewV:function ewV(d,e,f){this.a=d
this.b=e
this.c=f},
ewU:function ewU(){},
ewT:function ewT(d,e,f){this.a=d
this.b=e
this.c=f},
ewS:function ewS(d,e){this.a=d
this.b=e},
ewP:function ewP(d,e,f){this.a=d
this.b=e
this.c=f},
ewN:function ewN(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewR:function ewR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewQ:function ewQ(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
ewH:function ewH(){},
exf:function exf(d,e){this.a=d
this.b=e},
exd:function exd(d){this.a=d},
exe:function exe(d){this.a=d},
erz:function erz(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
ery:function ery(d){this.a=d},
erA:function erA(d,e){this.a=d
this.b=e},
erB:function erB(d,e,f){this.a=d
this.b=e
this.c=f},
erF:function erF(d,e){this.a=d
this.b=e},
erw:function erw(d,e,f){this.a=d
this.b=e
this.c=f},
erv:function erv(d){this.a=d},
evw:function evw(d,e,f){this.a=d
this.b=e
this.c=f},
exn:function exn(d,e,f){this.a=d
this.b=e
this.c=f},
etS:function etS(d,e,f){this.a=d
this.b=e
this.c=f},
etR:function etR(){},
esh:function esh(d,e,f){this.a=d
this.b=e
this.c=f},
esi:function esi(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
erC:function erC(d,e){this.a=d
this.b=e},
erL:function erL(d){this.a=d},
erM:function erM(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
erK:function erK(d){this.a=d},
erY:function erY(d,e){this.a=d
this.b=e},
erJ:function erJ(d){this.a=d},
es0:function es0(d){this.a=d},
es1:function es1(d){this.a=d},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d){this.a=d},
es5:function es5(){},
es6:function es6(){},
erO:function erO(d){this.a=d},
erP:function erP(d){this.a=d},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erS:function erS(d){this.a=d},
erT:function erT(d){this.a=d},
erU:function erU(d){this.a=d},
erV:function erV(d){this.a=d},
erW:function erW(d){this.a=d},
erX:function erX(d){this.a=d},
erZ:function erZ(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
eti:function eti(d,e,f){this.a=d
this.b=e
this.c=f},
eth:function eth(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etg:function etg(d,e,f){this.a=d
this.b=e
this.c=f},
etf:function etf(d,e){this.a=d
this.b=e},
erD:function erD(d,e){this.a=d
this.b=e},
esl:function esl(d){this.a=d},
esk:function esk(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
esm:function esm(d){this.a=d},
esn:function esn(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
esZ:function esZ(d){this.a=d},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev8:function ev8(d,e){this.a=d
this.b=e},
ev7:function ev7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d,e){this.a=d
this.b=e},
ev3:function ev3(){},
ev4:function ev4(){},
ewI:function ewI(){},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewK:function ewK(){},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d,e){this.a=d
this.b=e},
erI:function erI(d,e){this.a=d
this.b=e},
esN:function esN(){},
esO:function esO(){},
esP:function esP(){},
esS:function esS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esR:function esR(d,e){this.a=d
this.b=e},
esQ:function esQ(d,e,f){this.a=d
this.b=e
this.c=f},
eui:function eui(d){this.a=d},
euh:function euh(){},
euj:function euj(d,e){this.a=d
this.b=e},
euk:function euk(d,e){this.a=d
this.b=e},
eug:function eug(d){this.a=d},
eul:function eul(d,e){this.a=d
this.b=e},
euf:function euf(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
eue:function eue(d){this.a=d},
eun:function eun(d,e){this.a=d
this.b=e},
eud:function eud(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
euc:function euc(d,e){this.a=d
this.b=e},
eup:function eup(d,e){this.a=d
this.b=e},
eub:function eub(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
eua:function eua(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu1:function eu1(d){this.a=d},
eu7:function eu7(d,e){this.a=d
this.b=e},
eu0:function eu0(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
eu_:function eu_(d){this.a=d},
eu9:function eu9(d){this.a=d},
etb:function etb(d){this.a=d},
etc:function etc(d){this.a=d},
ete:function ete(d){this.a=d},
et6:function et6(d){this.a=d},
et5:function et5(d,e){this.a=d
this.b=e},
et7:function et7(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
eta:function eta(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
ext:function ext(d){this.a=d},
exu:function exu(d){this.a=d},
eut:function eut(d,e){this.a=d
this.b=e},
eus:function eus(d,e){this.a=d
this.b=e},
eur:function eur(d,e){this.a=d
this.b=e},
euu:function euu(d){this.a=d},
euv:function euv(d){this.a=d},
evS:function evS(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
evU:function evU(d){this.a=d},
ew4:function ew4(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewq:function ewq(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d,e){this.a=d
this.b=e},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evX:function evX(d){this.a=d},
evY:function evY(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew3:function ew3(d){this.a=d},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d){this.a=d},
evI:function evI(d){this.a=d},
ewe:function ewe(d){this.a=d},
evQ:function evQ(d){this.a=d},
ewg:function ewg(d){this.a=d},
evP:function evP(d,e){this.a=d
this.b=e},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewi:function ewi(d,e){this.a=d
this.b=e},
evO:function evO(d,e,f){this.a=d
this.b=e
this.c=f},
evE:function evE(d,e){this.a=d
this.b=e},
evR:function evR(d){this.a=d},
ewC:function ewC(d,e){this.a=d
this.b=e},
ewE:function ewE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewj:function ewj(d,e,f){this.a=d
this.b=e
this.c=f},
evN:function evN(d,e,f){this.a=d
this.b=e
this.c=f},
evD:function evD(d,e,f){this.a=d
this.b=e
this.c=f},
evB:function evB(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
evC:function evC(d,e){this.a=d
this.b=e},
evA:function evA(d,e){this.a=d
this.b=e},
ewl:function ewl(d){this.a=d},
evL:function evL(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewp:function ewp(d){this.a=d},
evK:function evK(d){this.a=d},
ewr:function ewr(d){this.a=d},
ews:function ews(d){this.a=d},
ewt:function ewt(d,e){this.a=d
this.b=e},
evJ:function evJ(d){this.a=d},
ewu:function ewu(d,e){this.a=d
this.b=e},
evH:function evH(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
evG:function evG(d){this.a=d},
eww:function eww(d,e){this.a=d
this.b=e},
evF:function evF(d){this.a=d},
esg:function esg(d,e,f){this.a=d
this.b=e
this.c=f},
esf:function esf(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d,e){this.a=d
this.b=e},
ewY:function ewY(d,e){this.a=d
this.b=e},
ex_:function ex_(d,e){this.a=d
this.b=e},
ewX:function ewX(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
etp:function etp(d,e){this.a=d
this.b=e},
etm:function etm(d){this.a=d},
etW:function etW(){},
etV:function etV(){},
exb:function exb(d){this.a=d},
exa:function exa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex9:function ex9(d,e){this.a=d
this.b=e},
ex4:function ex4(d,e){this.a=d
this.b=e},
ex8:function ex8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex5:function ex5(d,e){this.a=d
this.b=e},
ex0:function ex0(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex6:function ex6(d,e){this.a=d
this.b=e},
ex7:function ex7(d,e){this.a=d
this.b=e},
exc:function exc(d){this.a=d},
esG:function esG(d){this.a=d},
esF:function esF(d,e,f){this.a=d
this.b=e
this.c=f},
esE:function esE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
est:function est(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
esu:function esu(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esw:function esw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ess:function ess(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esx:function esx(d,e){this.a=d
this.b=e},
esz:function esz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esy:function esy(d,e){this.a=d
this.b=e},
esA:function esA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esr:function esr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esB:function esB(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
eux:function eux(d){this.a=d},
euw:function euw(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etD:function etD(d,e){this.a=d
this.b=e},
etB:function etB(d,e){this.a=d
this.b=e},
etE:function etE(d,e){this.a=d
this.b=e},
etA:function etA(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
etz:function etz(d,e){this.a=d
this.b=e},
etG:function etG(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
etx:function etx(d,e){this.a=d
this.b=e},
etI:function etI(d,e,f){this.a=d
this.b=e
this.c=f},
etw:function etw(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e,f){this.a=d
this.b=e
this.c=f},
etv:function etv(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etu:function etu(d,e,f){this.a=d
this.b=e
this.c=f},
etr:function etr(d,e){this.a=d
this.b=e},
etL:function etL(d,e){this.a=d
this.b=e},
ett:function ett(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
ets:function ets(d,e,f){this.a=d
this.b=e
this.c=f},
etq:function etq(d,e){this.a=d
this.b=e},
etN:function etN(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erp:function erp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evu:function evu(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
evt:function evt(d,e){this.a=d
this.b=e},
afa:function afa(d,e,f){this.a=d
this.b=e
this.c=f},
az3:function az3(d,e){this.c=d
this.a=e},
bcI:function bcI(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b4$=e
_.c=_.a=null},
d2T:function d2T(d){this.a=d},
d2S:function d2S(d){this.a=d},
bcW:function bcW(d,e){this.c=d
this.a=e},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
JT:function JT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcH:function bcH(){this.d=!1
this.c=this.a=null},
d2Q:function d2Q(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2O:function d2O(d,e){this.a=d
this.b=e},
PH:function PH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_w:function a_w(d,e,f){this.c=d
this.d=e
this.a=f},
aEw:function aEw(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bx$=e
_.ab$=f
_.c=_.a=null},
ey9:function ey9(){},
ey_:function ey_(d){this.a=d},
ey8:function ey8(d){this.a=d},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d){this.a=d},
exW:function exW(d){this.a=d},
exX:function exX(d,e){this.a=d
this.b=e},
exY:function exY(d){this.a=d},
exZ:function exZ(d,e,f){this.a=d
this.b=e
this.c=f},
ey6:function ey6(){},
ey7:function ey7(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ey4:function ey4(d){this.a=d},
ey5:function ey5(d){this.a=d},
eya:function eya(d,e,f){this.a=d
this.b=e
this.c=f},
eyc:function eyc(d,e){this.a=d
this.b=e},
eyb:function eyb(d){this.a=d},
JZ:function JZ(d,e){this.c=d
this.a=e},
bro:function bro(d,e){this.b=d
this.a=e},
bhy:function bhy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhx:function bhx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aKe:function aKe(){},
aM7:function aM7(){},
bx3:function bx3(){},
aM8:function aM8(){},
fHn(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fHn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xh.c8().M7(B.a(["pdf"],x.s),A.u1,!0),$async$fHn)
case 3:q=e
if(q==null||J.co(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boD(s,"data:application/pdf;base64,"+A.cJ.gct().aM(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHn,v)},
i8E(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c9(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l4(0,w).gL(0)
if(t>0){s=J.aQN(t,1,200)
return s}}catch(r){}return 1},
fHe(d){return C.i8D(d)},
i8D(d){var w=0,v=B.j(x.T),u
var $async$fHe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHe,v)},
bCz(d,e,f,g){return C.i8N(d,e,f,g)},
i8N(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCz=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hpB(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jN(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jN(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jN(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jN(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.pH()
f=B.yY(g,null)
a7=B.K()
a7.r=A.qV.gp(0)
f.aX(new B.a5(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.K()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bH
b1.e=A.dS
b1.b=A.ac
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.M)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.t((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.nP()
w=7
return B.b(a3.zm(800,h),$async$bCz)
case 7:a4=c1
a3.t()
w=8
return B.b(a4.hv(A.h5),$async$bCz)
case 8:a5=c1
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eV(A.dE.gaQ(a5))
a7=A.cJ.gct().aM(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
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
return B.i($async$bCz,v)},
aQ_(d,e,f){return C.i8B(d,e,f)},
i8B(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aQ_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahD(d,e,f,new C.fHc(r,q),q,"Sign document"),$async$aQ_)
case 3:if(!new B.ea(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCz(q,t,r.b,r.c),$async$aQ_)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b1f(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ_,v)},
i8L(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hiK(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hiK(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.aZ(A.o.fW(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.aZ(A.o.fW(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aN(n,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aN(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lD&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aN(p,"&",h)
p=B.aN(p,"<",g)
p=B.aN(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aN(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hil(q.ay)+";border:2px solid "+C.hil(q.ch)+'"></div>'
break
case 5:l=C.h1E(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aN(n,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aN(n,'"',e)+"</div>")
p=p?null:l.gajQ()
if(p==null)p=A.ayg
n=B.S(p)
k=n.k("lR<1>")
j=new B.lR(p,0,8,k)
j.vf(p,0,8,n.c)
j=new B.bS(j,j.gL(0),k.k("bS<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aN(p,"&",h)
p=B.aN(p,"<",g)
p=B.aN(p,">",f)
p=B.aN(p,'"',e)
n=B.aN(i,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aN(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hil(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hiK(d){var w=B.aN(d,"&","&amp;")
w=B.aN(w,"<","&lt;")
w=B.aN(w,">","&gt;")
return B.aN(w,'"',"&quot;")},
bCx(d,e){var w=0,v=B.j(x.H)
var $async$bCx=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cf(null,null,!0,null,new C.fHl(e,C.i8L(e),d),d,null,!0,!0,x.H),$async$bCx)
case 2:return B.h(null,v)}})
return B.i($async$bCx,v)},
bCy(){var w=0,v=B.j(x.T),u,t,s
var $async$bCy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GK(92,2400),$async$bCy)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fHe(s),$async$bCy)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCy,v)},
aQ0(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aQ0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h2T(d),$async$aQ0)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aN(s,r,"_"))
u=Z.fJO(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQ0,v)},
hcD(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b1f:function b1f(d,e,f){this.a=d
this.b=e
this.c=f},
fHc:function fHc(d,e){this.a=d
this.b=e},
fHl:function fHl(d,e,f){this.a=d
this.b=e
this.c=f},
fHi:function fHi(d){this.a=d},
fHj:function fHj(d,e,f){this.a=d
this.b=e
this.c=f},
fHk:function fHk(d,e,f){this.a=d
this.b=e
this.c=f},
i8C(d){return C.ky(d.w)},
i8J(d){var w,v,u,t
if(d.length===0||!A.d.d8(d,C.ias()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yJ(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aN(w.toUpperCase(),v,"")
w=$.hvn()
if(w.b.test(u))return u
return null},
hpD(d,e,f){var w,v,u=C.hE9(d),t=$.pB()
for(w=0;w<80;++w){v=u+A.a.aZ(A.o.u(t.au(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
i8P(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.f5(w,d.b);v.C();){u=w.gT(w).y
t=C.yJ(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fHa(d,e){var w,v=d.y,u=C.yJ(v==null?"":v)
if(u!=null)return d.y=u
w=C.i8P(new B.Z(e,new C.fHb(d),B.S(e).k("Z<1>")))
v=d.x
return d.y=C.hpD(v==null?"":v,null,w)},
i8O(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.ky(w.w))return null
v=w.y
return C.yJ(v==null?"":v)},
hIx(){var w,v=$.pB(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"SL"+A.d.hu(u)},
W2(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$W2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$W2)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$W2)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
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
p=B.ab(m)
$.am.$1("[slides qr stash] load: "+B.w(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W2,v)},
W3(d){return C.hIy(d)},
hIy(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$W3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$W3)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.T(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,A.cG,null),$async$W3)
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
return B.i($async$W3,v)},
a85(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a85=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c6(),$async$a85)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.W2(),$async$a85)
case 4:s=a6
r=C.yJ(a2==null?"":a2)
if(r==null)r=a3!=null?C.hpD(a3,null,A.J2):null
q=x.N
p=B.aY(q)
for(o=J.dm(s),n=J.aW(o.gia(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yJ(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdR(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dN.aM(t)
g.n(0,"payload",A.cJ.gct().aM(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.T(Date.now(),0,!1).a7().ad())
if(D.Ts.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yJ(J.k(q==null?"":q))
if(f==null)f=C.hcI(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.W3(s),$async$a85)
case 7:u=new B.aFY(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hIx()
n=r==null
d=n?C.hcI(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dN.aM(t)
q.n(0,"payload",A.cJ.gct().aM(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.T(Date.now(),0,!1).a7().ad())
if(D.Ts.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.W3(s),$async$a85)
case 8:u=new B.aFY(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a85,v)},
hcI(d){var w,v,u=$.pB()
for(w=0;w<200;++w){v="SL"+A.a.aZ(A.o.u(u.au(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aZ(A.o.u(Date.now()%1000),3,"0")},
arr(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$arr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$arr)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.W2(),$async$arr)
case 6:t=f
s=J.a4(t)
r=s.gL(t)
s.bt(t,new C.cgD(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.W3(t),$async$arr)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$arr,v)},
arq(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$arq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yJ(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$arq)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.W2(),$async$arq)
case 6:t=o.jR(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yJ(J.k(q==null?"":q))===p){u=C.a84(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arq,v)},
a84(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a84=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c6(),$async$a84)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.W2(),$async$a84)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
k=B.aK(l.h(n,"usesRemaining"))
j=k==null?null:A.k.O(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cf.cz(0,A.cF.aM(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Ts.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aN(0,s,null)
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
l.n(0,"lastUsedAt",new B.T(Date.now(),0,!1).a7().ad())
o.n(p,g,l)}w=7
return B.b(C.W3(p),$async$a84)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a84,v)},
i8I(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.T(Date.now(),0,!1).a7().ad())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.S(d).k("N<1,a7<n,@>>")
w=B.C(new B.N(d,new C.fHh(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fHp(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.T(Date.now(),0,!1).a7().ad())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.i8I(d==null?B.a([],x.D):d,f,g),null)},
fHo(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fHo=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a85(h,d,e,f,g),$async$fHo)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yJ(e==null?"":e)
u=new B.aFK(s,t)
w=1
break}t=A.dN.aM(h)
t=A.kq.gct().aM(t)
u=new B.aFK(C.yJ(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHo,v)},
h2V(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d2(q,"{"))try{w=A.S.aN(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i8M(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h2V(v))return v
u=A.a.cD(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b2(v,u))
if(C.h2V(t))return t}s=A.a.cD(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b2(v,s))
if(C.h2V(t))return t}}return null},
fHd(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.S.aN(0,A.cf.cz(0,A.cF.aM(J.nd(t,8))),null))
else w=v.a(A.S.aN(0,t,null))
v=C.hSe(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aho(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aho=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.arq(t[1]),$async$aho)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHd(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yJ(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.arq(r),$async$aho)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHd(s)
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
return B.b(C.a84(t[1]),$async$aho)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHd(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fHd(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aho,v)},
hSe(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Ts.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h2S(C.VZ(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cF(t,new C.fdZ(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a6(t).k("J.E"))
return t}return B.a([],x.D)},
h2S(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.j3
$.j3=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VZ(B.a2(o,x.N,x.z))
if(e&&C.ky(p.w))p.Q=new B.T(Date.now(),0,!1).a7().bS(144e8).ad()
return p},
bCi(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GJ(),$async$bCi)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aho(s),$async$bCi)
case 4:t=e
u=J.co(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCi,v)},
fQ7(d){var w=0,v=B.j(x.T),u,t
var $async$fQ7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hZ(D.Xh,!0,"Dismiss",d,new C.fQ8(),new C.fQ9(),A.FB,!0,x.N),$async$fQ7)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.J(x.q).f.R(D.f2Z)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQ7,v)},
icB(d,e,f,g,h){return B.a3(d,!1).cg(B.e_(new C.fQa(h,e,g,f),!0,null,x.H))},
fHb:function fHb(d){this.a=d},
cgD:function cgD(d){this.a=d},
fHh:function fHh(){},
fdZ:function fdZ(d){this.a=d},
fQ8:function fQ8(){},
fQ9:function fQ9(){},
fQa:function fQa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
W0:function W0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEu:function aEu(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
exG:function exG(){},
exC:function exC(d,e){this.a=d
this.b=e},
exF:function exF(d,e){this.a=d
this.b=e},
exD:function exD(d){this.a=d},
exE:function exE(d){this.a=d},
exH:function exH(d){this.a=d},
exI:function exI(d){this.a=d},
exL:function exL(d){this.a=d},
exM:function exM(d){this.a=d},
exK:function exK(d){this.a=d},
exN:function exN(d){this.a=d},
exJ:function exJ(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exB:function exB(d,e){this.a=d
this.b=e},
exA:function exA(d,e){this.a=d
this.b=e},
W1:function W1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkj:function bkj(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
exP:function exP(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exR:function exR(){},
exS:function exS(d){this.a=d},
exT:function exT(d,e){this.a=d
this.b=e},
aEr:function aEr(d){this.a=d},
aEs:function aEs(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
erj:function erj(d){this.a=d},
eri:function eri(){},
erk:function erk(d){this.a=d},
erf:function erf(d){this.a=d},
ere:function ere(){},
erg:function erg(d){this.a=d},
erh:function erh(d){this.a=d},
buE:function buE(){},
ars:function ars(d){this.a=d},
aEv:function aEv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
exV:function exV(d){this.a=d},
exU:function exU(d){this.a=d},
hXw(){var w,v,u,t
for(v=0;v<4;++v){w=D.d8m[v]
try{if(Ac.bYn(w)){u=w
return u}}catch(t){}}return null},
Rf(d,e){return C.i5t(d,e)},
i5t(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Rf=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hXw()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.ol?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qD(c6,!0)
b6.toString
p=B.a3(c6,!0)
b7=new B.cy(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eI(b8,b9)
n=new B.eI("Getting ready\u2026",b9)
m=new B.eI(0,b9)
l=B.ot(new C.fBw(c2,b7,o),!1,!1)
b6.lS(0,l)
b9=x.H
B.cf(null,A.dc,!1,null,new C.fBx(n,m),c6,null,!0,!0,b9)
k=new C.fBB(b7)
j=new C.fBC()
i=null
t=4
b3=c2.a
h=Aj.aSh(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fT0(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aXc(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HZ.yt(i,"dataavailable",new C.fBy(e))
d=new B.bY(new B.bg($.bB,x.dT),x.b2)
A.HZ.yt(i,"stop",new C.fBz(d))
J.ahY(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Rf)
case 8:w=7
return B.b(c5.$1(d0),$async$Rf)
case 7:a0=d0
J.fT2(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahY(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ahY(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Rf)
case 15:w=14
return B.b(c5.$1(d0),$async$Rf)
case 14:a0=d0
case 13:J.fT2(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.ahY(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.T(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fT2(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$Rf)
case 18:w=16
break
case 17:J.ahY(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahY(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d9(0,A.o2),$async$Rf)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hR(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aN(c3,b3,"_"))
c0=B.ne(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Ln(b0)
J.m3(b0)
B.bN(A.pX,new C.fBA(a7),b9)
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
J.m3(l)
if(p.pE())p.eH()
c3=o
b3=$.aw()
c3.si2(b3)
J.aQR(c3,0)
c3=n
c3.si2(b3)
J.aQR(c3,0)
c3=m
c3.si2(b3)
J.aQR(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Rf,v)},
fBw:function fBw(d,e,f){this.a=d
this.b=e
this.c=f},
fBv:function fBv(){},
fBx:function fBx(d,e){this.a=d
this.b=e},
fBB:function fBB(d){this.a=d},
fBC:function fBC(){},
fBy:function fBy(d){this.a=d},
fBz:function fBz(d){this.a=d},
fBA:function fBA(d){this.a=d},
buQ:function buQ(d,e,f){this.c=d
this.d=e
this.a=f},
f88:function f88(){},
f89:function f89(){},
cgZ(d){var w=0,v=B.j(x.at),u,t,s
var $async$cgZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arA(d,A.zE),$async$cgZ)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bC(new B.T(Date.now(),0,!1))
if(t.a<0){u=A.bE
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgZ,v)},
cgY(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7M:function a7M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk2:function bk2(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
egq:function egq(d){this.a=d},
ego:function ego(d){this.a=d},
egp:function egp(d,e){this.a=d
this.b=e},
a8G:function a8G(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ox$=k
_.oy$=l
_.oz$=m
_.nS$=n},
a8H:function a8H(d,e){this.a=d
this.b=e},
b2U:function b2U(){},
cja:function cja(){},
cjb:function cjb(){},
cjc:function cjc(d,e,f,g,h,i,j,k,l){var _=this
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
hwn(d){return new C.aif(d)},
a2R:function a2R(){},
aif:function aif(d){this.a=d},
aRb:function aRb(){},
awW:function awW(d,e){this.d=d
this.b=e
this.a=null},
aSI:function aSI(d){this.b=d
this.a=null},
fwG(d,e){var w=0,v=B.j(x.H)
var $async$fwG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxE().LR(d,e),$async$fwG)
case 2:B.fJU()
return B.h(null,v)}})
return B.i($async$fwG,v)},
hmT(d,e){return(A.ru[(d^e)&255]^A.o.aC(d,8))>>>0},
ftW(d,e,f,g,h,i){var w=C.i1P(d,A.de,f,null,A.cX,g,h,i)
return w},
hoM(d){var w=F.hpu(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hE9(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pe.h(0,w)
if(v!=null)return v
for(u=A.pe.gdR(A.pe),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aN(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hoU(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.cTP[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAt(d,e){return C.hZj(d,e)},
hZj(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAt=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hR([d],"application/pdf")
n=x.z
q=B.aUm(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cB(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.k3(o,"share",[p]),x.H),$async$bAt)
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
return B.i($async$bAt,v)},
h2M(){var w=0,v=B.j(x.y),u,t,s
var $async$h2M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.flt
s=$.bA0
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAt(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2M,v)},
bBO(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.flt
l=$.bA0
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hjp()?3:4
break
case 3:w=5
return B.b(C.bAt(m,k),$async$bBO)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bA1
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.ne(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Ln(q)
w=10
return B.b(B.bN(A.a2,null,x.H),$async$bBO)
case 10:J.m3(q)
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
return B.i($async$bBO,v)},
h2D(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h2D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bA1
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lJ.qP(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h2D,v)},
h2U(d,e){var w=0,v=B.j(x.H),u,t
var $async$h2U=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hR([d],"text/html"))
t.toString
u=window
u.toString
A.lJ.qP(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h2U,v)},
b1R(d,e){var w=0,v=B.j(x.y),u
var $async$b1R=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1T(d,e),$async$b1R)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1S(d),$async$b1R)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1R,v)}},D,H,K,Am,A8,Y,A9,V,An,G,F,E,W,Q,Z,A_,Ao,Ap,X,Aa,L,Aq,A0,O,A1,M,Ab,Ar,As,P,A2,At,Ac,Ad,Au,Ae,Af,Ag,Av,Aw,R,Ax,I,Ay,S,T,Az,N,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ah=c[196]
A6=c[68]
Ai=c[51]
Aj=c[59]
U=c[212]
A7=c[54]
Ak=c[138]
Al=c[222]
C=a.updateHolder(c[4],C)
D=c[210]
H=c[93]
K=c[130]
Am=c[37]
A8=c[214]
Y=c[211]
A9=c[223]
V=c[200]
An=c[126]
G=c[180]
F=c[32]
E=c[213]
W=c[115]
Q=c[140]
Z=c[29]
A_=c[168]
Ao=c[225]
Ap=c[176]
X=c[103]
Aa=c[112]
L=c[215]
Aq=c[125]
A0=c[62]
O=c[190]
A1=c[77]
M=c[150]
Ab=c[113]
Ar=c[91]
As=c[217]
P=c[117]
A2=c[133]
At=c[90]
Ac=c[55]
Ad=c[186]
Au=c[36]
Ae=c[75]
Af=c[139]
Ag=c[221]
Av=c[224]
Aw=c[220]
R=c[69]
Ax=c[218]
I=c[165]
Ay=c[177]
S=c[49]
T=c[216]
Az=c[226]
N=c[197]
A3=c[219]
A4=c[108]
A5=c[58]
C.o0.prototype={
v7(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tU(t,v)
return new C.o0(t===0?!1:w,v,t)},
bM_(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D3()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tU(w,u)
return new C.o0(r===0?!1:s,u,r)},
bMw(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D3()
w=o-d
if(w<=0)return p.a?$.h4l():$.D3()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tU(w,u)
q=new C.o0(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2E())
return q},
dZ(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bM_(v)
u=w+v+1
t=new Uint16Array(u)
C.hfY(r.b,w,e,t)
w=r.a
s=C.tU(u,t)
return new C.o0(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bMw(v)
t=w-v
if(t<=0)return n.a?$.h4l():$.D3()
s=n.b
r=new Uint16Array(t)
C.hOc(s,w,e,r)
w=n.a
q=C.tU(t,r)
p=new C.o0(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dZ(1,u)-1)!==0)return p.aF(0,$.a2E())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2E())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cHa(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8i(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8i(t,e)
if(s===0)return $.D3()
if(r===0)return t.a===e?t:t.v7(0)
w=s+1
v=new Uint16Array(w)
C.hOa(t.b,s,d.b,r,v)
u=C.tU(w,v)
return new C.o0(u===0?!1:e,v,u)},
Hl(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D3()
w=d.c
if(w===0)return t.a===e?t:t.v7(0)
v=new Uint16Array(s)
C.b9W(t.b,s,d.b,w,v)
u=C.tU(s,v)
return new C.o0(u===0?!1:e,v,u)},
byY(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tU(r,u)
return new C.o0(!1,u,s)},
byX(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tU(u,r)
return new C.o0(!1,r,v)},
byZ(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tU(p,m)
return new C.o0(s!==0,m,s)},
US(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D3()
w=t.a
if(w===e.a){if(w){w=$.a2E()
return t.Hl(w,!0).byZ(e.Hl(w,!0),!0).a8i(w,!0)}return t.byY(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byX(v.Hl($.a2E(),!1),!1)},
aa(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8i(e,v)
if(C.cHa(u.b,t,e.b,w)>=0)return u.Hl(e,v)
return e.Hl(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v7(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8i(e,v)
if(C.cHa(u.b,t,e.b,w)>=0)return u.Hl(e,v)
return e.Hl(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D3()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hfZ(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tU(w,t)
return new C.o0(q===0?!1:r,t,q)},
bLZ(d){var w,v,u,t
if(this.c<d.c)return $.D3()
this.aRz(d)
w=$.fYE.c8()-$.axF.c8()
v=C.fYG($.fYD.c8(),$.axF.c8(),$.fYE.c8(),w)
u=C.tU(w,v)
t=new C.o0(!1,v,u)
return this.a!==d.a&&u>0?t.v7(0):t},
cok(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRz(d)
w=C.fYG($.fYD.c8(),0,$.axF.c8(),$.axF.c8())
v=C.tU($.axF.c8(),w)
u=new C.o0(!1,w,v)
if($.fYF.c8()>0)u=u.mq(0,$.fYF.c8())
return t.a&&u.c>0?u.v7(0):u},
aRz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hfV&&d.c===$.hfX&&g.b===$.hfU&&d.b===$.hfW)return
w=d.b
v=d.c
u=16-A.o.gake(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hfT(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hfT(g.b,f,u,r)}else{r=C.fYG(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fYH(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cHa(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9W(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9W(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hOb(p,r,i);--o
C.hfZ(h,j,0,r,o,s)
if(r[i]<h){m=C.fYH(j,s,o,n)
C.b9W(r,l,n,m,r)
while(--h,r[i]<h)C.b9W(r,l,n,m,r)}--i}$.hfU=g.b
$.hfV=f
$.hfW=w
$.hfX=v
$.fYD.b=r
$.fYE.b=l
$.axF.b=s
$.fYF.b=u},
gX(d){var w,v,u,t=new C.cHb(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cHc().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o0&&this.aL(0,e)===0},
tk(d,e){return this.aL(0,e)>0},
O(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
v2(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gake(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aC(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cHd(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cHe(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lc(A.aH.gaQ(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v7(0):r
while(v.c>1){u=$.hti()
if(u.c===0)B.b8(D.b5C)
t=v.cok(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLZ(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hu(0)},
$iaRV:1,
$ihL:1}
C.aRl.prototype={
M(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gL(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cMI(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k5(w,w.length,B.S(w).k("k5<1>"))}}
C.RU.prototype={
cUL(){var w,v
if(this.as==null)this.bcP()
w=this.as
v=w==null?null:w.ap2()
return v==null?null:v.eN()},
bcP(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ap2().eN()
this.as=new C.bP0(v)}},
gY(d){return this.at}}
C.a3P.prototype={
a3(){return"CompressionType."+this.b}}
C.bHq.prototype={
eB(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dZ(v,u)+(s.b&A.zd[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dZ(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fJ(u,t)&A.zd[d])
s.c=t}return v}}
C.bFL.prototype={
cKY(d,e){var w,v,u,t,s,r=this,q=new C.bHq(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eB(8)!==66||q.eB(8)!==90||q.eB(8)!==104)return!1
w=r.a=q.eB(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cmC(q)
if(t<0)return!1
if(t===0){q.eB(8)
q.eB(8)
q.eB(8)
q.eB(8)
s=r.cmF(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eB(8)
q.eB(8)
q.eB(8)
q.eB(8)
return!0}}return!0},
cmC(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eB(8)
if(t!==D.dpn[u])v=!1
if(t!==D.d1I[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cmF(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eB(1),d2=((d3.eB(8)<<8|d3.eB(8))<<8|d3.eB(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eB(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eB(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1Q()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eB(3)
if(q<2||q>6)return-1
v=d3.eB(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eB(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c4(6,$.hro(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eB(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eB(1)===0)break
i=d3.eB(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hrn()
u=x.an
c9.y=B.c4(6,v,!1,u)
c9.z=B.c4(6,v,!1,u)
c9.Q=B.c4(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bYg(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atY(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atY(d3)}while(a3===0||a3===1);++a5
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
a3=c9.atY(d3)
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
c1=(c1<<8^D.Hs[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hu[b9];++b9
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
if(b8===0){b8=D.Hu[b9];++b9
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
if(b8===0){b8=D.Hu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hu[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hu[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.Hs[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.Hs[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.Hs[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.Hs[c1>>>24&255^c7&255])>>>0
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
atY(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eB(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eB(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bYg(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1Q(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.czk.prototype={
aHY(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bPt(e)
if(q<0)return
e.c=q
if(e.aP()!==101010256)return
e.b_()
e.b_()
e.b_()
e.b_()
r.f=e.aP()
r.r=e.aP()
w=e.b_()
if(w>0)e.aI0(w,!1)
r.cn_(e)
q=r.r
v=r.f
u=e.aL_(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aP()!==33639248)break
s=new C.b8E()
s.cUK(0,u,e,f)
q.push(s)}},
cn_(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7W(20,r)
if(w.aP()!==117853008){d.c=s
return}w.aP()
v=w.t8()
w.aP()
d.c=v
if(d.aP()!==101075792){d.c=s
return}d.t8()
d.b_()
d.b_()
d.aP()
d.aP()
d.t8()
d.t8()
u=d.t8()
t=d.t8()
this.f=u
this.r=t
d.c=s},
bPt(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7W(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.am_(A.i3)
o.aMg(r.eN(),A.i3,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aP()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.czi.prototype={}
C.axj.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.czl.prototype={
aHY(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aP()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aEP.h(0,e.b_())
o.c=w==null?D.Mb:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aP()
o.r=e.aP()
o.w=e.aP()
v=e.b_()
u=e.b_()
o.x=e.anN(v)
o.y=e.hg(u).eN()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aVU:D.DY
o.ay=f
o.Q=e.hg(t)
if(o.at!==D.DY&&u>2){w=o.y
w.toString
s=B.rk(w,A.i3,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.anN(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aVV
o.ax=new C.czi(r,q)
w=D.aEP.h(0,q)
o.c=w==null?D.Mb:w}}}if((o.b&8)!==0){p=e.aP()
if(p===134695760)o.f=e.aP()
else o.f=p
o.r=e.aP()
o.w=e.aP()}},
gL(d){return this.bms().length},
ap2(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rk(new Uint8Array(0),A.i3,q,q)
w=r.at
if(w!==D.DY)if(p.gL(0)<=0)r.at=D.DY
else{if(w===D.aVU){p=r.bKh(p)
r.Q=p}else if(w===D.aVV){p=r.bJV(p)
r.Q=p}r.at=D.DY}w=r.c
if(w===D.ahn){v=p.c
u=B.dj()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pB.Bw(p.eN(),!0,!1)
else{t=B.a8v(A.i3,r.w)
p=r.Q
p.toString
A.pB.a43(p,t,!0,!1)
u.b=t.GU()}r.Q.c=v
return B.rk(u.bj(),A.i3,q,q)}else if(w===D.aho){s=B.a8v(A.i3,32768)
p=r.Q
v=p.c
C.hwy().cKY(p,s)
u=s.GU()
r.Q.c=v
return B.rk(u,A.i3,q,q)}else return B.rk(p.eN(),A.i3,q,q)},
bms(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eN()},
u(d){return this.x},
b8H(d){var w=this.ch,v=C.JP(C.hmT(w[0].O(0),d))
w[0]=v
v=w[1].aa(0,v.US(0,C.JP(255)))
w[1]=v
w[1]=v.aI(0,C.JP(134775813)).aa(0,C.JP(1)).US(0,C.JP(4294967295))
w[2]=C.JP(C.hmT(w[2].O(0),w[1].mq(0,24).O(0)))},
aQY(){var w=(this.ch[2].US(0,C.JP(65535)).O(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bKh(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rk(new Uint8Array(0),A.i3,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8H(u[v.c++]^r.aQY())}t=r.Q.eN()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQY()
r.b8H(s)
u&2&&B.aj(t)
t[w]=s}return B.rk(t,A.i3,q,q)},
bJV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hg(8).eN()
v=16}else if(k===2){w=d.hg(12).eN()
v=24}else{w=d.hg(16).eN()
v=32}u=d.hg(2).eN()
t=d.hg(d.gL(0)-10)
s=d.hg(10)
r=t.eN()
k=this.ay
k.toString
q=C.hNS(k,w,v)
p=new Uint8Array(B.ch(A.aH.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.ch(A.aH.dt(q,v,k)))
if(!C.hfn(A.aH.dt(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bEl(k,new Uint8Array(16),p)
k=x.S
m=J.a5f(0,k)
m=n.r=new C.cj_(m)
m.c=!0
m.b=m.blL(!0,new C.asZ(p))
if(m.c)m.d=B.bo(D.oi,!0,k)
else m.d=B.bo(D.z2,!0,k)
l=C.hdA(C.hdC(),64)
l.bfb(new C.asZ(o))
n.w=l
n.cUk(r,0,r.length)
k=s.eN()
m=n.x
m===$&&B.c()
if(!C.hfn(k,m))throw B.V(B.fm("macs don't match"))
return B.rk(r,A.i3,null,null)}}
C.b8E.prototype={
cUK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.b_()
e.aP()
n.w=e.aP()
n.x=e.aP()
w=e.b_()
v=e.b_()
u=e.b_()
n.y=e.b_()
e.b_()
n.Q=e.aP()
n.as=e.aP()
if(w>0)n.at=e.anN(w)
if(v>0){t=e.hg(v).eN()
n.ax=t
if(v>=4){s=B.rk(t,A.i3,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a7W(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t8()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t8()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t8()
p-=8}if(p>=4&&n.y===65535)n.y=o.aP()}}}}if(u>0)e.anN(u)
f.c=n.as
t=new C.czl(D.Mb,n,D.DY,B.a([C.JP(0),C.JP(0),C.JP(0)],x.f3))
n.ch=t
t.aHY(0,f,g)},
u(d){return this.at}}
C.czj.prototype={
cKZ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.czk(B.a([],x.fT))
this.a=g
g.aHY(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aRl(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.M)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RU(o,A.o.an(Date.now(),1000),0):C.h5L(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h5L(o,q.w,q)
if(k.as==null)k.bcP()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.am_(A.i3)
j.aMg(o,A.i3,h,h)}i=j==null?h:j.eN()
if(i!=null)new B.G7(!1).Dx(i,0,h,!0)}}return v}}
C.bEl.prototype={
cUk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cs(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hwh(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bNL(u,0,w,0,o)}else{o===$&&B.c()
q.bKl(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lb(w,0)
m.x=A.aH.dt(m.x,0,10)
w=m.w
l=w.a
l.jO(0)
w=w.d
w===$&&B.c()
l.Cs(0,w,0,w.length)
return f}}
C.cj4.prototype={}
C.cj8.prototype={}
C.cj2.prototype={}
C.asZ.prototype={}
C.cj7.prototype={
cLd(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e8(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bfb(new C.asZ(A.aH.fP(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOP(n.a,n.b,t,s,r)
r+=v}A.aH.hi(f,g,g+w,s)
return o.a.c},
bOP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cs(0,d,0,d.length)
v.Cs(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lb(u,0)
u=m.c
A.aH.hi(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cs(0,s,0,s.length)
w.Lb(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cj3.prototype={}
C.cj1.prototype={}
C.at_.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.at_){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tk(d,e){var w=this.a
w===$&&B.c()
w=A.o.tk(w,e.gbYx())
if(!w)e.gbYx()
return w},
aKq(d,e){this.a=0
this.b=d},
tn(d){return this.aKq(d,null)},
aL2(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.ff(""),u=w.a
u===$&&B.c()
w.b0p(v,u)
u=w.b
u===$&&B.c()
w.b0p(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0p(d,e){var w,v=A.o.fW(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cj6.prototype={
jO(d){var w,v=this
v.a.tn(0)
v.c=0
A.aH.hs(v.b,0,4,0)
v.w=0
w=v.r
A.d.hs(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aow(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1T(u,0)
v.c=0}v.a.aL2(1)},
Cs(d,e,f,g){var w=this.cll(e,f,g)
f+=w
g-=w
w=this.clm(e,f,g)
this.clc(e,f+w,g-w)},
Lb(d,e){var w,v=this,u=C.hdB(v.a),t=u.a
t===$&&B.c()
t=C.h3p(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h3p(w,3)
v.clg()
v.cld(u)
v.asN()
v.cfo(d,e)
v.jO(0)
return 20},
b1T(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ob(A.aH.gaQ(d),d.byteOffset,d.length).getUint32(e,A.ih===w.d)
if(w.w===16)w.asN()},
asN(){this.cUj()
this.w=0
A.d.hs(this.r,0,16,0)},
clc(d,e,f){while(f>0){this.aow(d[e]);++e;--f}},
clm(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1T(d,e)
e+=4
f-=4
w.aL2(4)
v+=4}return v},
cll(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aow(d[e]);++e;--f;++v}return v},
clg(){this.aow(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aow(0)}},
cld(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asN()
u=v.d
switch(u){case A.ih:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Eo:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cfo(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ih===this.d,s=0;s<w;++s){r=v[s]
q=J.ob(A.aH.gaQ(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gda(d){return this.f}}
C.cj9.prototype={
cUj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qg[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qg[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qg[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qg[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qg[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qg[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qg[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qg[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qg[30]
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
C.cj5.prototype={
bfb(d){var w,v,u,t,s=this,r=s.a
r.jO(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cs(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lb(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hi(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hs(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hi(w,0,u,s.d)
s.b9R(s.d,u,54)
s.b9R(s.e,u,92)
u=s.d
r.Cs(0,u,0,u.length)},
Lb(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lb(s,w)
s=u.e
t.Cs(0,s,0,s.length)
v=t.Lb(d,e)
s=u.e
A.aH.hs(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cs(0,s,0,s.length)
return v},
b9R(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cj0.prototype={}
C.cj_.prototype={
a2l(d){return(D.oi[d&255]&255|(D.oi[d>>>8&255]&255)<<8|(D.oi[d>>>16&255]&255)<<16|D.oi[d>>>24&255]<<24)>>>0},
blL(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c4(4,0,!1,u)
switch(v){case 4:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2l((m>>>8|(m&$.qg[24])<<24)>>>0)^D.cEw[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
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
p=(p^f.a2l((k>>>8|(k&$.qg[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2l((k>>>8|(k&$.qg[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ob(A.aH.gaQ(e),e.byteOffset,w)
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
p=(p^f.a2l((g>>>8|(g&$.qg[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2l(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bNL(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ob(A.aH.gaQ(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ee[a8&255]
u=D.ee[a9>>>8&255]
t=$.qg[8]
s=D.ee[b0>>>16&255]
r=$.qg[16]
q=D.ee[b1>>>24&255]
p=$.qg[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.ee[a9&255]
s=D.ee[b0>>>8&255]
u=D.ee[b1>>>16&255]
v=D.ee[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.ee[b0&255]
u=D.ee[b1>>>8&255]
s=D.ee[a8>>>16&255]
q=D.ee[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.ee[b1&255]
a8=D.ee[a8>>>8&255]
a9=D.ee[a9>>>16&255]
b0=D.ee[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.ee[n&255]
b0=D.ee[m>>>8&255]
a9=D.ee[l>>>16&255]
a8=D.ee[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.ee[m&255]
b0=D.ee[l>>>8&255]
o=D.ee[b1>>>16&255]
s=D.ee[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.ee[l&255]
o=D.ee[b1>>>8&255]
b0=D.ee[n>>>16&255]
u=D.ee[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.ee[b1&255]
o=D.ee[n>>>8&255]
s=D.ee[m>>>16&255]
v=D.ee[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.ee[a8&255]^C.nw(D.ee[a9>>>8&255],24)^C.nw(D.ee[b0>>>16&255],16)^C.nw(D.ee[b1>>>24&255],8)^b6[w][0]
m=D.ee[a9&255]^C.nw(D.ee[b0>>>8&255],24)^C.nw(D.ee[b1>>>16&255],16)^C.nw(D.ee[a8>>>24&255],8)^b6[w][1]
l=D.ee[b0&255]^C.nw(D.ee[b1>>>8&255],24)^C.nw(D.ee[a8>>>16&255],16)^C.nw(D.ee[a9>>>24&255],8)^b6[w][2]
b1=D.ee[b1&255]^C.nw(D.ee[a8>>>8&255],24)^C.nw(D.ee[a9>>>16&255],16)^C.nw(D.ee[b0>>>24&255],8)^b6[w][3]
a7=D.oi[n&255]
b0=D.oi[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oi[l>>>8&255]
a9=D.oi[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oi[b1>>>8&255]
h=D.oi[n>>>16&255]
g=D.oi[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oi[l>>>24&255]
s=s[3]
a1=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ob(A.aH.gaQ(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bKl(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ob(A.aH.gaQ(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ed[a6&255]
v=D.ed[b0>>>8&255]
u=$.qg[8]
t=D.ed[a5>>>16&255]
s=$.qg[16]
r=D.ed[a4>>>24&255]
q=$.qg[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ed[a4&255]
t=D.ed[a6>>>8&255]
v=D.ed[b0>>>16&255]
w=D.ed[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ed[a5&255]
v=D.ed[a4>>>8&255]
t=D.ed[a6>>>16&255]
r=D.ed[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ed[b0&255]
a5=D.ed[a5>>>8&255]
a4=D.ed[a4>>>16&255]
a6=D.ed[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ed[p&255]
a6=D.ed[b0>>>8&255]
a4=D.ed[n>>>16&255]
a5=D.ed[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ed[o&255]
a4=D.ed[p>>>8&255]
a7=D.ed[b0>>>16&255]
t=D.ed[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ed[n&255]
a7=D.ed[o>>>8&255]
a5=D.ed[p>>>16&255]
v=D.ed[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ed[b0&255]
a7=D.ed[n>>>8&255]
t=D.ed[o>>>16&255]
w=D.ed[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ed[a6&255]^C.nw(D.ed[b0>>>8&255],24)^C.nw(D.ed[a5>>>16&255],16)^C.nw(D.ed[a4>>>24&255],8)^b5[a9][0]
o=D.ed[a4&255]^C.nw(D.ed[a6>>>8&255],24)^C.nw(D.ed[b0>>>16&255],16)^C.nw(D.ed[a5>>>24&255],8)^b5[a9][1]
n=D.ed[a5&255]^C.nw(D.ed[a4>>>8&255],24)^C.nw(D.ed[a6>>>16&255],16)^C.nw(D.ed[b0>>>24&255],8)^b5[a9][2]
b0=D.ed[b0&255]^C.nw(D.ed[a5>>>8&255],24)^C.nw(D.ed[a4>>>16&255],16)^C.nw(D.ed[a6>>>24&255],8)^b5[a9][3]
a4=D.z2[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.z2[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.z2[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.z2[o>>>8&255]
i=D.z2[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.z2[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ob(A.aH.gaQ(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bP_.prototype={}
C.bP0.prototype={
gL(d){var w=this.a.length
return w},
ap2(){return B.rk(this.a,A.i3,null,null)}}
C.baa.prototype={
v3(d){return C.hR7(d)}}
C.ct8.prototype={
MO(d){var w=d.w,v=Math.max(1,A.k.dk(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aa7(v,t+20,u+16,t,u,B.u2(d.x))},
np(d){return!1}}
C.bQ3.prototype={
cF8(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bL(new C.bQ4(),x.E))},
mH(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mH)
case 6:w=5
return B.b(p.fwG(f,r),$async$mH)
case 5:case 3:t.length===s||(0,B.M)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mH,v)}}
C.aw0.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a8t.prototype={
A(d,e){if(e==null)return!1
if(J.bO(e)!==B.b_(this))return!1
return e instanceof C.a8t&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wT(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fOA)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.aVQ.prototype={
c1(d){var w=new C.aAU(!0,this.e,null,new B.di(),B.ck())
w.c_()
w.scF(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syI(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aGz()}}}
C.aAU.prototype={
syI(d,e){return},
gpB(){var w=this.a9$
return w!=null},
glb(){var w=this.a9$
return w!=null},
MD(d){var w=d==null?B.h8f(null):d
w.sa4Y(this.ak)
return w}}
C.a0T.prototype={
U(){return new C.aJd(B.aY(x.N))},
cSr(d){return this.d.$1(d)},
cQe(){return this.e.$0()}}
C.aJd.prototype={
a_(){this.a1()
this.Pb()},
Pb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cQe(),$async$Pb)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6B(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pb,v)},
Z3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Z3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.f6F(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f6G(t))
w=3
return B.b(C.anL(p),$async$Z3)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f6H(t,s,p))
w=4
return B.b(t.Pb(),$async$Z3)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Z3,v)},
a1f(d){return this.cpw(d)},
cpw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1f=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f6C(t))
s=J.q(d,"id")
w=3
return B.b(C.c01(J.k(s==null?"":s)),$async$a1f)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f6D(t))
w=1
break}q=C.h2S(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cSr(B.a([q],x.D)),$async$a1f)
case 4:if(t.c==null){w=1
break}t.m(new C.f6E(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1f,v)},
Pa(d,e){return this.bKN(0,e)},
bKN(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pa=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.f6w(q),r,null,!0,!0,x.y),$async$Pa)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f6x(t))
s=s.h(e,"id")
w=4
return B.b(C.anK(J.k(s==null?"":s)),$async$Pa)
case 4:if(t.c==null){w=1
break}t.m(new C.f6y(t))
w=5
return B.b(t.Pb(),$async$Pa)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pa,v)},
cE8(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iv[B.bI(v)-1]+" "+B.bV(v)},
aQP(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.OI,A.n),w,e,w,w,w,w,w,e)},
aQO(d){return this.aQP(d,44)},
b71(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.OI:u,r=B.m(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.Jh,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.Jh,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bBg,u,u,u)],p))}return B.E(B.aB(A.cg,B.db(u,B.B(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.b8,new B.o(u,u,u,r,u,s,A.n),A.hm,u,u,u,A.tT,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f6L(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cjk(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d0.j(0.14):D.Yf,n=B.m(18),m=p?A.d0:A.dr
m=B.I(m,A.r,p?1.8:1)
w=this.aQO(A.qc)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aSf,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cO,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aSh,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
v=p?D.OI:q
u=p?q:B.I(A.aZ,A.r,1.6)
r=p?D.bS4:q
return B.aB(q,B.db(q,B.B(B.a([w,A.bc,t,B.db(q,r,q,q,A.b8,new B.o(q,q,u,q,q,v,A.a6),A.fF,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.b8,new B.o(o,q,m,n,q,q,A.n),A.fF,q,q,A.d3,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f6A(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cr8(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cE8(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dr,A.r,1)
v=r.aQO(A.NW)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aSf,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cO,B.d(p+" slides"+t,q,q,q,q,q,q,D.aSh,q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
p=r.b3A(A.hE,A.bu,"Bring it back",r.r?q:new C.f6I(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bn,r.b3A(A.ec,A.cs,"Delete",r.r?q:new C.f6J(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Yf,q,w,o,q,q,A.n),q,q,q,A.d3,D.bvE,q,q,q)},
b3A(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
at2(d,e,f){var w=null
return new B.D(D.buG,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ad,B.d(e,w,w,w,w,w,w,D.fkD,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fcY,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c4
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQP(A.yQ,46),A.bc,D.bC9],t)
if(j.r)s.push(D.eh5)
s.push(B.aI(i,i,i,i,A.rp,i,i,i,new C.f6O(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dr,A.r,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.byi,s,i),B.p(i,B.B(B.a([j.b71(0,A.yx,"Save",j.a.c.length),j.b71(1,A.O9,"Saved",o.gL(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bxj,A.ey,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cs:A.bu).j(0.4),A.r,1)
p=j.y
n=p?A.NY:A.eb
n=B.X(n,p?A.cs:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.U4,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bxf,A.iP,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fgD,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fjH,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f6P(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.at2(A.qc,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.M)(r),++l)s.push(j.cjk(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.egD)
else if(j.e==null)s.push(j.at2(A.am5,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.at2(A.oZ,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cr8(r.gT(r)))
A.d.v(u,s)}q.push(new B.dr(1,A.cn,B.ct(u,i,Y.aj9,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc4n()
p=s?i:D.OI
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cv,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yx,m?A.k6:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bxV,B.aB(i,B.db(i,B.B(B.a([k,A.a83,new B.dr(1,A.cn,B.eN(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.k6:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e0),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.b8,new B.o(s,i,i,o,n,p,A.n),A.hm,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aX(0,1/0,0,w.a.b*0.9),D.b2w,i,i,i,i,i,i,i,i)}}
C.or.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ad()],x.N,x.z)}}
C.YC.prototype={
U(){return new C.axR(B.a([],x.k),B.f8(null,x.H))},
gdY(){return this.c}}
C.axR.prototype={
a_(){this.a1()
this.Pl()},
Pl(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1S(t.a.c),$async$Pl)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cIz(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pl,v)},
cxr(d){var w,v,u,t=this
d.c=new B.T(Date.now(),0,!1)
w=J.qo(t.d,new C.cIC(d))
v=w<0
if(v&&C.hOe(d))return t.f
u=t.d
if(v)J.pE(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fUm(new C.cID(t),v)
return t.f=t.f.bL(new C.cIE(t,d),v).eV(new C.cIF())},
IJ(d,e,f){return this.ccU(0,e,f)},
aYx(d,e){return this.IJ(0,e,!1)},
ccU(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a3(s,!1).cg(B.e_(new C.cIy(t,e),!1,null,x.H)),$async$IJ)
case 3:w=4
return B.b(t.f,$async$IJ)
case 4:w=5
return B.b(t.Pl(),$async$IJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IJ,v)},
aXO(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dC0:d
this.IJ(0,new C.or(w,v,new B.T(Date.now(),0,!1)),!0)},
c3S(){return this.aXO(null)},
adx(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cIG(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adx)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXO(s)
case 1:return B.h(u,v)}})
return B.i($async$adx,v)},
II(d,e){return this.bKE(0,e)},
bKE(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$II=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.cIt(e),s,null,!0,!0,x.y),$async$II)
case 3:if(g!==!0){w=1
break}t.m(new C.cIu(t,e))
w=4
return B.b(t.f,$async$II)
case 4:w=5
return B.b(C.agm(t.a.c,e.a),$async$II)
case 5:w=6
return B.b(t.Pl(),$async$II)
case 6:case 1:return B.h(u,v)}})
return B.i($async$II,v)},
Df(d){return this.bCN(d)},
bCN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Df=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.cIp(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Df)
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
return B.b(t.aYx(0,d),$async$Df)
case 9:w=5
break
case 7:w=10
return B.b(F.h3r(r,d.b,null),$async$Df)
case 10:w=5
break
case 8:w=11
return B.b(t.II(0,d),$async$Df)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Df,v)},
bYu(){var w,v,u=null,t=[D.dC3,D.dC1,D.dC2],s=new C.cIw(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eX,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aQ(999,999)
n.push(B.p(u,new B.y(D.dlU[w],u,A.oz,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bk(v,v,v,v),u,u,A.n),u,u,u,u,A.o5,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fK_,A.N,B.bX(A.bB,n,A.bs,6,6),A.aO,B.aB(u,B.p(u,D.eW2,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.ajy,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cIv(this),u,u,u,u,u,u,!1,A.a4)],o),A.E,u,A.e,A.j,0,A.p),1),new B.a8(130,110,new B.an(A.A,u,A.aa,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c_r,A.n),u,u,u,u,D.bys,u,u,u)},
bCL(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cv,14)],x.V),r=x.p
s=B.p(v,B.bx(B.m(6),new B.an(A.a_,v,A.b2,A.t,B.a([B.eN(A.A,F.aok(d.b),A.f,A.bV),D.emC,B.ao(v,B.aB(v,B.p(v,D.bST,A.f,v,v,D.b3t,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cIk(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.fa8,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fK(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fgP,v,v,v)],r),A.E,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cIl(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cIm(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.D(K.ai5,B.hp(B.aB(s,B.p(s,A.aoL,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.wl,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc5c(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n4,s,s,s,!0,s,s,s,s,s,D.fK3,s,s,s,1,s,!0)
if(t.e)r=D.b6U
else{w=t.bYu()
v=B.a([D.fvr,A.ab],r)
if(J.cK(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f9y,s,s,s),A.f,s,s,new B.o(D.bbR,s,s,u,s,s,A.n),s,s,s,s,A.ye,s,s,s))}r=B.a([new B.nX(A6.Zx,new B.mf(w,s),s),new B.nX(D.bxP,new B.mf(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.co(t.d))r.push(D.f1C)
else r.push(new B.nX(D.bxh,B.P1(new B.ox(new C.cIH(t),J.ad(t.d),!0,!0,!0,0,B.t3(),s),D.b6a),s))
r=B.vC(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c5(q,D.baz,r,s,!1,!1,s,s)}}
C.YA.prototype={
U(){return new C.axN(B.a([],x.bx))},
U4(d){return this.d.$1(d)}}
C.aF4.prototype={}
C.axN.prototype={
b0r(d,e,f){var w=$.aw(),v=new B.as(new B.ba(d,A.b4,A.aN),w),u=this.gaYw()
v.aR(0,u)
w=new B.as(new B.ba(e,A.b4,A.aN),w)
w.aR(0,u)
return new C.aF4(v,w,f)},
E6(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cM(A.q2,new C.cHO(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.ba(w.a,A.b4,A.aN),v)
t=m.gaYw()
u.aR(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.ba(w.b,A.b4,A.aN),v)
u.aR(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.ba(w.c,A.b4,A.aN),v)
u.aR(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.M)(u),++q){p=u[q]
o=new B.as(new B.ba(p.a,A.b4,A.aN),v)
o.aR(0,t)
n=new B.as(new B.ba(p.b,A.b4,A.aN),v)
n.aR(0,t)
r.push(new C.aF4(o,n,p.c))}if(r.length===0)r.push(m.b0r("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpg()
q=r.a
q.U4(q.c)}q=r.d
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
gpg(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
t.push(new F.mA(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rp(n,w,v,t,u)},
AM(){var w=0,v=B.j(x.H),u=this,t
var $async$AM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpg()
t=u.a
w=2
return B.b(t.U4(t.c),$async$AM)
case 2:return B.h(null,v)}})
return B.i($async$AM,v)},
c5a(){this.m(new C.cHN(this))
this.E6()},
aXv(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cHQ(w,d,v))
w.E6()},
c5b(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cHY())
this.E6()
$.aV.x1$.push(new C.cHZ(w))},
Qy(d){return this.cja(d)},
cja(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(80,1400,A.eJ),$async$Qy)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Qy)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahU(o,".png")?"image/png":"image/jpeg"
r.m(new C.cHR(d,n,p))
r.E6()
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
return B.i($async$Qy,v)},
xM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hqE(r,t.gpg()),$async$xM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cHP(t,s))
t.E6()
case 1:return B.h(u,v)}})
return B.i($async$xM,v)},
cjs(d){var w,v=this,u=null,t=F.fAN(d.c)
if(t==null)return new B.bK(A.a3,u,u,B.ho(D.bM6,D.fxV,new C.cHT(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.a_,u,A.aa,A.t,B.a([B.bx(B.m(12),B.fO(t,A.A,u,u,A.ce,A.bV,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3B(A.ke,new C.cHU(v,d)),A.bn,v.b3B(A.cx,new C.cHV(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3B(d,e){var w=null
return B.aF(!1,A.a2,!0,w,B.aL(!1,w,!0,new B.D(A.hB,B.X(d,A.c,w,w,w,18),w),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cK,w,w,A.ah)},
IK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AM(),$async$IK)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h3r(s,t.gpg(),new C.cHX(t)),$async$IK)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.D(A.q3,B.ho(D.bQP,D.fDZ,n.gawM(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aI(m,m,m,m,A.aoK,m,m,m,new C.cI_(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Xn,m,1,m,m,m,!1,m,!1,E.n4,m,m,m,!0,m,m,m,m,m,D.fyO,m,m,m,1,m,!0),j=Au.aUy(O.lo,A.c,Ae.Wd,A.oe,D.fzy,n.gc59()),i=B.m(18),h=n.gawL(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.iV,12)],x.V)
g=B.aB(m,B.p(m,new B.a8(92,142.1818181818182,B.eN(A.A,F.aok(n.gpg()),A.f,A.dw),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a4)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fLB,A.au,B.d(F.h1V(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fmo,m,m,m),A.R,B.dp(E.ao3,E.aT3,h,B.bn(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Xn,m,m,i,m,m,A.n),m,m,m,m,A.bj,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),h,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ov,!0,A.a5,m,A.ao,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),w,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.ao,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),g,m,m,m,m,m,2,B.bs(m,new B.b5(4,B.m(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.ao,m,m,m,m),A.aO],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aQ(16,16)
u=new B.ay(O.lo.j(0.18),1,A.r,-1)
t=v+1
s=B.aI(m,m,m,m,D.bPv,m,m,m,v===0?m:new C.cI0(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aI(m,m,m,m,D.bVS,m,m,m,v===r-1?m:new C.cI1(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cI2(n,v)
p=new B.aQ(12,12)
o=new B.aQ(12,12)
g.push(B.p(m,B.x(B.a([new B.cb(A.aM,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fmW,m,m,m,m,m,m,m,m,m),A.b0,s,q,B.aI(m,m,m,m,B.X(A.ec,A.oS,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a5,m,A.ao,m,m,m,m),A.am,n.cjs(i[v]),B.aM(m,A.V,!1,m,!0,A.t,m,B.aO(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bk(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a5,m,A.ao,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n4,m,new B.bJ(u,u,u,u),new B.bk(w,w,w,w),m,m,A.n),m,m,new C.a8t(h),A.ea,D.bvT,m,m,m))}return B.ou(!0,B.c5(k,E.agf,B.ct(g,m,D.bwk,m,m,A.ag,!1),m,!1,!1,j,m),new C.cI3(n),x.C)}}
C.axP.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.n4,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eG,B.aF(!1,A.a2,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(u.e,t,t,t,t,t,t,D.aRD,t,t,t)],v),A.E,t,A.e,A.j,0,A.p),1),B.X(A.eD,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.aqz.prototype={
U(){return new C.aDV()}}
C.aDV.prototype={
a_(){this.a1()
this.ZI()},
bv(d){this.bE(d)
if(d.c!=this.a.c)this.a14()},
a14(){var w=0,v=B.j(x.H),u=this,t
var $async$a14=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dS(t,x.H),$async$a14)
case 2:u.d=null
if(u.c!=null)u.m(new C.ec6(u))
w=3
return B.b(u.ZI(),$async$a14)
case 3:return B.h(null,v)}})
return B.i($async$a14,v)},
ZI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.Ye(B.cG(n,0,null),new B.Po(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.il(0).d9(0,A.pZ),$async$ZI)
case 7:if(r.c==null){w=1
break}r.d.tq(!1)
r.m(new C.ec4(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ec5(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZI,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
c7J(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h6(0)
w.m(new C.ec7(w))}else{v.q_(0)
w.m(new C.ec8(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jo.j(0.92),D.Lb.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qf,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c1(B.au(B.x(B.a([t,new B.a8(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ax,A.aD,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.au(B.X(A.anl,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b7M
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eN(A.A,new B.a8(r,q,new B.Ag(s,o),o),A.t,A.bV)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.au(B.p(o,B.X(A.iu,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bx(n,new B.an(A.a_,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7I(),o,o,o,o,o,o,!1,A.a4)}}
C.xD.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.adh.prototype={
B(d){return B.oY(new C.dZI(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acG.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.jo.j(t?0.35:0.4),A.r,1),p=t?D.LL:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cv,14)],o),m=B.m(10),l=B.I(A.c_.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dy,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i5O(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ak1,u,u,u,u),1)
m=D.jo.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jo,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a2,!0,u,B.aL(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cO,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aB:D.biG,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bJ(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ail,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xG.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nN.prototype={}
C.bj8.prototype={
ZR(d){var w=null
return new B.bK(A.a3,w,w,B.Bk(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c8b(){return this.ZR(1)},
axn(d){var w=null,v=B.m(8),u=B.I(A.i6,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ae8,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i6,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i6,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.axn("TAARIFA ZA WANANDOA"),A.am,w.c8b(),A.cO,w.ZR(0.9),A.cO,w.ZR(0.7),A.N,w.axn("TAMKO LA MAKUBALIANO"),A.fI,w.ZR(1),A.cO,w.ZR(0.95),A.N,w.axn("MASHAHIDI"),A.b0,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.adk.prototype={
B(d){return B.oY(new C.egt(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.af0.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.ay.j(q?0.35:0.4),A.r,1),m=q?D.bif:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cv,14)],l),j=B.m(10),i=B.I(A.ay.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dy,6)],l)
w=this.c
v=C.h2q(w.a)
if(v==null)v=A.d.gI(D.Rd)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.a_,r,A.b2,A.t,B.a([B.bU(0,B.fO(C.h2p(v.d),A.A,r,r,A.ce,A.bV,!0,r,!1,r,r),0,0,0),new B.D(A.aj0,new C.bj8(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ak1,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.LM,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a2,!0,r,B.aL(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cO,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aB:D.bb5,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bJ(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ail,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kV.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7V.prototype={}
C.VP.prototype={
U(){var w=$.aw()
return new C.aEb(new B.cy(null,x.A),new B.as(A.at,w),new B.as(A.at,w),B.mJ(0,null,null),A.d.gI(D.a3y),D.dMc,B.a([],x.L),B.a([],x.gE))}}
C.aEb.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zG(C.fEG(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.V,"","","")
w=x.a
C.fDC().bL(new C.ejq(v),w)
$.r_().jI(0,"assets/images/ngmy_logo.png").bL(new C.ejr(v),w).eV(new C.ejs())},
t(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.t()
w.a2()},
aej(d){var w=null,v=this.c
if(v!=null)v.J(x.q).f.R(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
J2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$J2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(88,1600,A.eJ),$async$J2)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$J2)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hqU(m,p),$async$J2)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCX(new B.pU(o,1),m),$async$J2)
case 10:if(r.c!=null)r.m(new C.ej2(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aej("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$J2,v)},
WU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hqU(s,q),$async$WU)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCX(new B.pU(r,1),s),$async$WU)
case 4:if(t.c!=null)t.m(new C.eiZ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WU,v)},
aek(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aek=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ej9(q))
t=4
q.a.toString
p=C.iae()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aek)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eja(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aej(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ejb(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aek,v)},
ZW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ej4(q,i))
t=4
q.a.toString
p=C.iad()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZW)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ej5(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.ej6(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ej7(q))
$.aV.x1$.push(new C.ej8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZW,v)},
c8r(d){this.m(new C.ej3(this,d))},
En(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$En=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ej0(q))
t=4
w=7
return B.b($.aV.gmC(),$async$En)
case 7:w=8
return B.b(B.bN(A.nd,null,x.H),$async$En)
case 8:k=$.aV.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q4))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m0(1800/p.gY(0).a),$async$En)
case 9:o=e
w=10
return B.b(o.hv(A.h5),$async$En)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.agq(J.eV(A.dE.gaQ(n)),"ngmy_news.png","image/png"),$async$En)
case 11:m=e
q.aej(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aej(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ej1(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$En,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.l9,a2,a2,a2,new C.ejh(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bRk,a2,a2,a2,new C.eji(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.p7,a2,a2,a2,a4?a1.gaZD():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.Ba,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eWc,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eX,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eN(A.A,new B.eG(new C.b0Q(t,s,r,a1.x,a2),a1.d),A.f,A.dw),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.rZ,a2,a2,a2)
t=a1.as?a2:a1.gc8q()
t=B.a([B.E(B.dp(D.bS5,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.tA,a2,a2,a2,A.c,A.fU,a2,a2,new B.b7(B.m(14),P.vk),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.m(10),B.fO(r,A.A,a2,a2,A.ce,A.bV,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.as,r,B.aI(a2,a2,a2,a2,D.bOO,a2,a2,a2,a1.as?a2:a1.gbJf(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.rZ,a2,a2,a2)
q=B.aM(a2,A.V,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aSE("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dd,!0,A.a5,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dg8[o]
p.push(B.mP(a2,D.tA,new B.y(n.a,a2,A.pp,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hf,new C.ejj(a1,n),a2,a2,P.vk,a2))}p=B.bX(A.bB,p,A.bs,6,8)
m=a1.Q
m=B.bX(A.bB,B.a([D.fKb,A.bc,B.j0(a2,a2,a2,D.fu9,a2,new C.ejk(a1),m==="en",a2,a2,a2,a2),A.ab,B.j0(a2,a2,a2,D.fu4,a2,new C.ejl(a1),m==="sw",a2,a2,a2,a2)],w),A.t8,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.rZ,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d1(D.a3y,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aR8(g==null?h.a(g):g))}k=B.ct(k,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d1(D.a3y,10,a2,j),h=j.$ti,j=new B.bS(j,j.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aR8(g==null?h.a(g):g))}j=B.ct(i,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gc8t()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.D(A.cu,s,a2),t,A.aA,new B.D(A.cu,r,a2),q,A.N,p,A.R,m,A.aA,new B.D(A.cu,l,a2),new B.a8(a2,78,k,a2),A.N,new B.a8(a2,78,j,a2),A.aO,B.aB(a2,B.p(A.A,B.B(B.a([D.bS_,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fV,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uq,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dwT,A.as,D.bCu],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b5.j(0.35):D.tA
p=new B.aQ(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bK(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fko,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.W1,new B.o(q,a2,new B.bJ(d,d,d,d),new B.bk(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.iP,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d29[o]
t.push(B.mP(a2,D.tA,new B.y(a0,a2,A.Jv,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hf,new C.ejm(a1,a0),a2,a2,P.vk,a2))}u.push(B.bX(A.bB,t,A.bs,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.V,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aSE("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ejn(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dd,!0,A.a5,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc8s()
u.push(B.B(B.a([t,A.ab,B.HS(A.yU,s,B.nG(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaZD()
u.push(B.dp(A.p7,D.fFF,t,B.bn(A.cS,a2,a2,a2,a2,A.Jf,a2,a2,new B.b7(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.ct(v,a1.r,A.aiN,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.k3.j(0.5),A.r,1)
v.push(B.bU(0,B.el(B.au(B.p(a2,B.B(B.a([E.a84,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jh,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.B2,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.byK,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.Ba,new B.an(A.a_,a2,A.aa,A.t,v,a2),a2,!1,!1,a2,a2)},
aSE(d){var w=null
return B.bs(w,new B.b5(4,B.m(14),A.a0),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.tA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.Jq,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aR8(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bD:A.bz
p=B.I(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.l0,t,t,t,t),A.fI],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.buV,t,t,t,t))
w.push(A.cO)
w.push(new B.D(A.jx,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b7,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.ir,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ej_(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.zG.prototype={
bc_(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zG(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cIJ(d){var w=null
return this.bc_(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ceY(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fI(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ceW(),B.S(w).k("N<1,n>")).c0(0,new C.ceX())
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
return this.bc_(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFA(d){return this.f}}
C.to.prototype={
a3(){return"NewsLayout."+this.b}}
C.By.prototype={
a3(){return"NewsFrame."+this.b}}
C.lm.prototype={}
C.b0Q.prototype={
rq(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZF(d,e,f,g){return this.rq(d,e,null,1.25,f,A.bp,g)},
PT(d,e,f,g,h){return this.rq(d,e,f,1.25,g,A.bp,h)},
axt(d,e,f,g,h){return this.rq(d,e,null,f,g,A.bp,h)},
axs(d,e,f,g,h){return this.rq(d,e,f,g,0,A.bp,h)},
aZH(d,e,f,g,h){return this.rq(d,e,null,f,0,g,h)},
c8x(d,e,f,g,h,i){return this.rq(d,e,f,g,0,h,i)},
axr(d,e,f,g){return this.rq(d,e,null,f,0,A.bp,g)},
aen(d,e,f){return this.rq(d,e,null,f,0,A.bp,A.cN)},
aZG(d,e,f,g,h){return this.rq(d,e,f,g,0,h,A.cN)},
c8w(d,e,f,g){return this.rq(d,e,null,f,0,g,A.cN)},
c8v(d,e,f,g){return this.rq(d,e,f,g,0,A.bp,A.cN)},
aeo(d,e,f,g,h,i){return this.rq(d,e,f,g,h,A.bp,i)},
aZE(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.l3(new B.eS(d,u,u,A.d_,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a5,A.c8,new B.kK(1),u,u,h,u,A.c6,u)
v.t0(g)
if(!v.b.a.c.gaEt())return w
w-=2}return j},
ael(d,e,f,g,h,i,j,k){return this.aZE(d,e,f,g,h,i,j,k,A.bp)},
azz(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a8(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
azy(d){return this.azz(null,!1,d)},
ahc(d,e){return this.azz(null,d,e)},
cqg(d,e){return this.azz(d,!1,e)},
gb0P(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaVh(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OG(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ael(w.gaVh(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaVh(),v,g,A.a1,v,v,v,w.axs(u,t,f,1.02,A.O),e,v,v)},
aVm(d){return this.OG(d,A.L,null,2,78,30)},
abL(d,e,f,g,h){return this.OG(d,e,null,f,g,h)},
bYm(d,e,f,g,h){return this.OG(d,A.L,e,f,g,h)},
bYl(d,e,f){return this.OG(d,A.L,null,e,f,30)},
RP(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jK,B.d(s,u,g,A.a1,u,u,u,v.aZG(w,v.aZE(t,w,A.cN,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b6G(d){return this.RP(d,A.L,null,3,24)},
aB2(d,e,f,g){return this.RP(d,e,null,f,g)},
cxV(d,e,f){return this.RP(d,A.L,e,3,f)},
b6H(d,e){return this.RP(d,e,null,3,24)},
cxT(d,e){return this.RP(d,A.L,null,3,e)},
cxU(d,e,f){return this.RP(d,e,null,3,f)},
ar2(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fQ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PT("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
NC(){return this.ar2(null,!0)},
ar1(d){return this.ar2(null,d)},
bFc(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.i9,new B.a8(d,w,B.d(v,w,2,A.a1,w,w,w,this.c8w(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vz(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.T(Date.now(),0,!1),i=m.gb0P(),h=A.o.an(j.bC(B.c2(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hYI(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZF(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ael(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ael(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eK,l,l,l,m.aeo(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bCc(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.ix,A.j,0,l,l),A.am,m.ahc(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eK,l,l,l,m.axr(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bCc(j),l,l,l,l,l,l,m.PT(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.ix,A.j,0,l,l),A.N,m.cqg(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0P()
v=B.d("NGMY",l,l,l,l,l,l,m.axt(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eH(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rq(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b0,new B.dr(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.aeo(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dT,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.ix,A.j,0,l,l)
t=m.ahc(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.axr(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a8(l,s,l,l),v,new B.a8(l,q,l,l),m.ahc(!0,1.4),A.au,B.d(C.bCc(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.azy(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.axt(v,u,1,3,A.O),A.L,l,l),A.N,m.ahc(!0,1.2),A.au,B.B(B.a([B.d(C.bCc(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.ix,A.j,0,l,l),A.au,m.azy(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acU(d){return this.vz(d,!1)},
aem(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aeo("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c8u(d,e){return this.aem(d,null,e,null)},
aXn(d){var w=null,v=new B.T(Date.now(),0,!1),u=A.o.F(B.dl(v),12)===0?12:A.o.F(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.axs("Roboto",15,t,1,A.cw),r=B.X(E.als,t,w,w,w,18),q=A.a.ap(A.pb[B.bI(v)-1],0,3),p=A.a.aZ(A.o.u(B.h2(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bV(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fR,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
awc(){return this.aXn(A.o9)},
b3P(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.aeo("Roboto",this.ael(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azC(d,e,f){return this.b3P(d,e,f,30)},
aB5(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vI,B.d(v,w,e,A.a1,w,w,w,this.c8v("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6L(d){return this.aB5(d,3,22)},
cy5(d,e){return this.aB5(d,e,22)},
tH(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.ce,A.bV,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dp(D.bBx,w,s)
if(v==="sepia")w=new B.Dp(D.bBw,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.X(A.yr,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c1(s,new B.o(s,s,s,s,s,new B.c0(A.A,0.95,A.x,s,0,B.a([A.K,A.Xj.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a8(d,e,new B.an(A.a_,s,A.b2,A.t,v,s),s)},
qw(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.r,3)
j=B.I(B.b0(j),A.r,1)
return B.p(k,B.p(k,l.tH(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ey,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lZ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ecA,14)],x.V)
v=l.tH(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eH(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.au(B.d(u,k,2,A.a1,k,k,k,l.aZG(j.as,13.5,D.bcN,1.1,A.cE),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bgn,k,k,k,w,k,A.n),k,e,k,k,D.bwf,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.r,5)
return B.p(k,B.bx(B.m(25),l.tH(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.r,6)
j=B.b0(j.f)
v=t-10
return new B.a8(d,e,B.au(B.p(k,B.i_(l.tH(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lZ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.ech,10)],x.V)
return B.eH(A.A,0.025,new B.a8(d,e,new B.an(A.a_,k,A.aa,A.f,B.a([B.bU(0,B.p(k,l.tH(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.re,k,k,k),0,0,0),B.ao(k,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a8(d,e,B.b4(B.nA(l.tH(d,e),A.aq,D.h9S),new C.bcn(j,k),k,k,A.az),k)
case 7:j=x.p
w=B.a([l.tH(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aQ(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bk(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.cb(A.aM,A.ry,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b2,A.t,w,k),A.f,A.eg,k,k,k,e,k,k,D.bAN,k,k,d)
case 8:w=d/2
v=B.x1(A.hH,new B.aQ(w,w))
j=B.I(B.b0(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.x1(A.hG,new B.aQ(w,w)),l.tH(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fT,22)],x.V)
return B.p(k,l.tH(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bU,k,k,d)
case 10:return new B.a8(d,e,B.nA(l.tH(d,e),A.aq,D.hh8),k)
case 0:j=B.I(B.b0(j.w),A.r,2.4)
return B.p(k,l.tH(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ey,k,k,d)}},
aOI(d,e){return this.d.e===D.RS?A.bJ:this.bFc(d,e)},
Ws(d){return this.aOI(d,A.L)},
gaAm(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aAl(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.aZH(v.Q,19,1.15,A.cE,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.PT("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.aen(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.x(q,A.E,n,A.e,A.j,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bj,n,n,d)},
gcgG(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9s(d,e,f,g){return B.cC(new C.ceZ(this,e,d,f,g))},
a9r(d){return this.a9s(d,22,!0,18)},
WD(d,e){return this.a9s(d,22,!0,e)},
aPK(d,e,f){return this.a9s(d,22,e,f)},
bHc(d,e,f){return this.a9s(d,e,!0,f)},
b9H(d,e,f,g){return B.cC(new C.cf_(this,e,d,g,!0,f))},
cft(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.acU(824),A.aA,k.aVm(824),k.b6G(824),A.N,k.NC(),A.ad,B.au(k.qw(824,360),j,j,j),k.Ws(824),A.ad,B.E(k.a9r(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.acU(824),A.aO,new B.a8(j,350,B.B(B.a([new B.a8(440,j,B.x(B.a([k.abL(440,A.bh,3,62,26),k.aB2(440,A.bh,2,20),A.b0,k.ar2(B.b0(h.x),!1)],w),A.E,j,A.e,A.j,0,A.p),j),A.Jg,B.x(B.a([k.qw(362,310),k.Ws(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.E,j,A.e,A.j,0,j,j),j),A.R,k.azy(2),A.ad,B.E(k.a9r(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vz(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bYm(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cxV(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.y8,j,j,j)
u=B.a([B.au(k.qw(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RS){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.axs(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.ls,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ad,v,A.ad,new B.an(A.a_,j,A.aa,A.t,u,j),A.N,k.NC(),A.R,B.E(k.WD(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vz(824,!0)
w=k.qw(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ad,new B.an(A.b6,j,A.aa,A.t,B.a([w,B.ao(0,B.p(j,k.OG(780,A.bh,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b3,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bz2,j,j,j),j,j,0,0,j,j)],u),j),k.b6H(824,A.bh),A.N,k.NC(),A.R,B.E(k.a9r(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.acU(824),A.aA,k.aVm(824),k.b6G(824),A.N,k.NC(),A.ad,B.E(k.b9H(3,300,B.x(B.a([k.qw(300,300),k.Ws(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vz(824,!0)
v=x.p
u=B.x(B.a([k.abL(440,A.bh,3,62,26),k.aB2(440,A.bh,2,20),A.b0,k.ar1(!1)],v),A.E,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.bv,new B.a8(j,400,B.B(B.a([new B.a8(440,j,u,j),A.aPB,new B.D(A.i9,k.qw(364,h.e===D.RS?400:330),j)],v),A.E,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.WD(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.acU(824),A.ad,k.bYl(824,2,70),k.cxT(824,21),A.N,k.NC(),A.ad,B.E(k.b9H(3,340,B.au(k.qw(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vz(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bCc(new B.T(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PT(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bj,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZH(h.Q,24,1.15,A.cE,A.O),j,j,j))
v.push(A.b0)
if(k.gaAm())v.push(k.aAl(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a8(230,j,B.x(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.aij,j,j,j,1.2),new B.a8(570,j,B.x(B.a([k.abL(570,A.bh,3,62,28),k.cxU(570,A.bh,20),A.N,k.ar1(!1),A.N,B.au(k.qw(570,330),j,j,j),k.Ws(570),A.R,B.E(k.aPK(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.E,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vz(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PT(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ad,B.p(j,B.x(B.a([t,A.am,k.OG(788,A.bh,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bxk,j,j,j),k.b6H(824,A.bh),A.R,B.au(k.qw(824,310),j,j,j),k.Ws(824),A.N,k.NC(),A.R,B.E(k.a9r(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vz(824,!0),A.aO,new B.an(A.a_,j,A.aa,A.t,B.a([k.qw(824,430),B.ao(18,k.c8u(k.c.b,17),j,j,18,j,j,j)],w),j),A.bv,k.azC(824,3,66),k.b6L(824),A.ad,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.awc(),A.aA,B.E(k.WD(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vz(824,!0),A.bv,new B.a8(j,500,B.B(B.a([new B.a8(410,j,B.x(B.a([k.aem(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b3P(410,4,58,28),k.aB5(410,6,20),A.b0],w),A.E,j,A.e,A.j,0,A.p),j),U.aPC,k.qw(390,500)],w),A.E,j,A.e,A.j,0,j,j),j),A.aA,k.awc(),A.aO,B.E(k.WD(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vz(824,!0)
v=k.qw(824,420)
u=B.hBi(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a_,j,A.aa,A.t,B.a([v,B.ao(22,B.fo(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c8x(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bzi,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bv,k.azC(824,3,62),k.b6L(824),A.ad,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.aXn(A.lw),A.aA,B.E(k.WD(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vz(824,!0)
u=h.w
t=x.p
w=B.a([k.qw(824,380),B.ao(j,k.aem(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.azC(824,2,60)
r=k.cy5(824,2)
p=k.awc()
o=B.E(k.aPK(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a_,j,A.aa,A.t,w,j),A.aO,s,r,A.R,p,A.aA,o,A.ad,B.p(j,B.B(B.a([B.bx(B.m(14),k.tH(150,104),A.aq),A.or,B.E(B.x(B.a([k.aem("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a1,j,j,j,k.axr(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eD,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bj,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vz(824,!0),A.bv,k.abL(824,A.bh,3,62,30),k.aB2(824,A.bh,2,22),A.R,k.ar1(!1),A.R,B.au(k.qw(824,330),j,j,j),k.aOI(824,A.bh),A.aO,B.E(k.bHc(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bU(0,B.c1(s,new B.o(s,s,s,s,s,new B.a9(A.ax,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bU(0,B.b4(s,s,s,new C.b8W(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bzP,B.x(B.a([B.E(t.cft(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fI,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZF(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PT(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.ix,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bU(0,B.e2(B.b4(s,s,s,new C.brl(v.j(q.ch?0.07:0.06),s),A.az),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i_(B.fO(q,A.A,s,s,A.ce,A.bV,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.o9,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.axt(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.dd(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bAV,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a8(900,1260,B.jz(new B.an(A.a_,s,A.aa,A.t,n,s),A.t,s),s)}}
C.bco.prototype={
jf(d){return C.hg4(d)},
jW(d){return!1}}
C.bcn.prototype={
a6(d,e){var w,v=C.hg4(e)
$.W()
w=B.K()
w.r=this.b.gp(0)
w.b=A.ac
w.c=6
return d.aJ(v,w)},
aw(d){return!d.b.A(0,this.b)}}
C.btR.prototype={
jf(d){var w,v,u,t,s,r,q,p,o=new B.en()
o.df(3)
w=$.W()
v=B.a([],x.v)
u=new B.aJ(w.r,A.ak,null,null,v)
u.D(new B.b1(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bA(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.ap(t,8))
w=d.b
r=w-8
u.D(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bA(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.ap(0,r))
u.D(new B.bv())
return u},
jW(d){return!1}}
C.b8W.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.en()
k.df(7)
$.W()
w=B.K()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sar(new B.c0(A.A,0.5,A.x,l,0,B.a([A.WM.j(0.13),A.K],v),l,l).aA(0,B.bW(new B.t(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
aw(d){return!1}}
C.brl.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.fX(u,u,u,u,B.cZ(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a5,A.c8,u,A.dQ,A.c6)
s.eT()
w=d.a
J.bq(w.save())
w.translate(t/2,e.b*0.52)
d.iZ(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.t(-v/2,-t.gbd(t)/2))
w.restore()},
aw(d){return!d.b.A(0,this.b)}}
C.VQ.prototype={
U(){return new C.aEd()}}
C.aEd.prototype={
a_(){var w=this
w.a1()
B.fvc(w.a.c,null).bL(new C.ejY(),x.g7).bL(new C.ejZ(w),x.a)
w.a.toString},
gaNw(){var w=D.aw1[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gaxu(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaNw()
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
q=A.k.E(v*p,q,p-q)-q
w=A.k.E(u*o,w,o-w)-w
return new B.a5(q,w,q+s,w+t)},
ZY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ejL(r))
t=4
q=r.gaxu()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.pH()
m=B.yY(n,null)
i=B.K()
i.Q=A.h3
m.os(g,q,new B.a5(0,0,0+p,0+o),i)
w=7
return B.b(n.nP().zm(J.h5u(p),J.h5u(o)),$async$ZY)
case 7:l=e
w=8
return B.b(l.hv(A.h5),$async$ZY)
case 8:k=e
j=r.c
if(j!=null){j=B.a3(j,!1)
i=k
i.toString
j.N(J.eV(J.vt(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ejM(r))
r.c.J(x.q).f.R(D.f4g)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZY,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.l9,s,s,s,new C.ejS(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bM(!1,D.fIe,s,s,!0,s,s,t.y||r==null?s:t.gc8y(),s,s)],p),s,s,!0,!0,A.Ba,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fMc,s,s,s,1,s,!0)
if(r==null)p=A.ml
else{w=B.E(new B.D(A.bR,B.au(new B.fK(t.gaNw(),B.cC(new C.ejT(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.ir,B.j0(s,s,s,new B.y(D.aw1[u].a,s,E.aRq,s,s,s,s,s,s,s,s,s),s,new C.ejU(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a8(s,40,B.ct(v,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bSK,B.E(B.l2(s,s,s,6,1,new C.ejV(t),t.f),1),D.bSm],p),A.m,s,A.e,A.j,0,s,s),D.fFy,A.am,B.bM(!1,D.fFg,s,s,!0,s,s,new C.ejW(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Xx,s,s,s,s,s,s,D.bwF,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c5(q,A.Ba,p,s,!1,!1,s,s)}}
C.bbV.prototype={
a6(d,e){var w
$.W()
w=B.K()
w.Q=A.ce
return d.os(this.b,this.c,new B.a5(0,0,0+e.a,0+e.b),w)},
aw(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_T.prototype={
U(){var w=$.aw(),v=x.A
return new C.aFA(new B.as(A.at,w),new B.as(new B.ba("NGMY",A.b4,A.aN),w),new B.cy(null,v),new B.cy(null,v),A.d.gI(D.a46),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oF.prototype={}
C.aFA.prototype={
gaVu(){var w,v,u=this
if(u.p1)w=new B.vL(1,u.p2,0.9,u.p3).m_().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eT9(w))},
t(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
YA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$YA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.r_().jI(0,"assets/images/ngmy_logo.png"),$async$YA)
case 7:q=e
p=J.eV(J.vt(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCX(new B.pU(p,1),o),$async$YA)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eS1(r,p))
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
return B.i($async$YA,v)},
PW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().kV(92,1800,A.eJ),$async$PW)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$PW)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCX(new B.pU(p,1),n),$async$PW)
case 9:if(r.c==null){w=1
break}r.m(new C.eSp(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PW,v)},
b3a(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aK=w.aE=w.az=w.Z=w.b8=w.bi=w.y2=0
w.b1=null
w.b0=0.25
w.bb=null
w.bK=0.5
w.aH=1
w.c7=w.bD=w.bh=0
w.cK=w.c5=!1},
aX7(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzF(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dj3)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzF(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzF(C.h0i(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzF(C.h0i(1-a0*0.5,n,n,n),w)}return a1?C.bzF(C.h0i(-1,255,255,255),w):w},
aBb(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l4(0,this.d.a.a),t=B.C(u,B.a6(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zf(u,v,w)
this.dx.ph(new C.eSz(t),!0)
return t},
b5J(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aBb()
w=C.i7X(e.d.a.a,e.db)
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
return C.i4r(d,k,v,a0,j,e.gaVu(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cvL(){return this.b5J(null)},
De(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$De=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmC(),$async$De)
case 3:w=4
return B.b(B.bN(A.eO,null,x.H),$async$De)
case 4:w=5
return B.b($.aV.gmC(),$async$De)
case 5:s=$.aV.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q4)){u=null
w=1
break}w=7
return B.b(r.m0(1080/r.gY(0).a),$async$De)
case 7:w=6
return B.b(e.hv(A.h5),$async$De)
case 6:q=e
u=q==null?null:J.eV(A.dE.gaQ(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$De,v)},
aaj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRL(q))
t=4
w=7
return B.b(q.De(),$async$aaj)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aM(p)
n=C.BM(null,null,null,null,D.ol,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5J(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a3(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaj,v)},
At(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$At=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eRJ(q))
t=4
w=7
return B.b($.aV.gmC(),$async$At)
case 7:w=8
return B.b(B.bN(A.ne,null,x.H),$async$At)
case 8:w=9
return B.b($.aV.gmC(),$async$At)
case 9:k=$.aV.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q4))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m0(1080/p.gY(0).a),$async$At)
case 10:o=e
w=11
return B.b(o.hv(A.h5),$async$At)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.agq(J.eV(A.dE.gaQ(n)),"ngmy_quote.png","image/png"),$async$At)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.J(x.q).f
k.R(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eRK(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$At,v)},
ciB(){var w=this.p4
w.toString
return B.cC(new C.eSi(this,w))},
aZO(d,e){var w=null
return B.bs(w,w,w,w,w,D.feU,w,w,!0,new B.b5(4,B.m(16),P.vk),w,w,w,w,w,D.tA,!0,w,w,w,w,new B.b5(4,B.m(16),D.b09),w,w,w,w,w,w,w,w,A2.DQ,e,w,w,w,w,w,w,w,D.fkf,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xV(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b5,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aSc,w,w,w))
return new B.D(H.aia,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZN(d,e){var w=null,v=B.m(18),u=B.I(A.bz,A.r,1)
return B.p(w,B.aF(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jQ),A.f,w,w,new B.o(D.tA,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vG(d){return this.aZN(d,A.bC)},
od(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uq:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.k6,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.k6,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.db(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b8,new B.o(w,r,u,v,r,p,A.n),A.hm,r,r,r,A.FH,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
agc(d,e,f){return this.od(d,null,e,f)},
axz(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eF:A.bz,s=x.p
v=B.a([B.db(w,d,w,w,A.b8,new B.o(u,w,B.I(t,A.r,g?2:1),v,w,w,A.n),A.hm,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a8(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
aZR(d,e,f,g,h,i){return this.axz(d,e,f,g,h,5,i)},
ko(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.fbL,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.egH,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eSv(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aRj,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.ZZ,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.avr(w).cK5(A.b5,A.bz,A.b5.j(0.2),A.c,D.eVu,4)
return new B.D(A.xX,B.x(B.a([s,B.aa3(B.l2(u,u,u,g,f,new C.eSw(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
aib(d,e,f,g,h,i){return this.ko(d,e,f,g,h,null,i)},
aiD(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.M)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bLI:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bJ(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eSy(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bX(A.bB,n,A.bs,10,10)},
bLj(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a46
else{v=x.a8
w=B.C(new B.Z(D.a46,new C.eRB(o),v),v.k("J.E"))}v=B.aM(n,A.V,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.aZO("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eRC(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8Z,!0,A.a5,n,A.ao,n,n,n,n)
u=B.aM(n,A.V,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.aZO("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eRD(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dd,!0,A.a5,n,A.ao,n,n,n,n)
t=o.xV("DESIGNS",A.u9)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cUz[q]
r.push(new B.D(A.ir,o.agc(p,o.x===p,new C.eRE(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.ce(B.B(r,A.m,n,A.e,A.j,0,n,n),A.t,n,A.y,n,n,n,n,A.aM),A.ad,new B.a8(n,118,B.hM(n,new C.eRF(o,w),w.length,n,n,A.aM,new C.eRG(),!1),n),A.N,o.aZN(B.x(B.a([B.iI(A.b5,n,n,A.af,!0,new C.eRH(o),n,D.fwy,n,D.fsO,o.k3),B.iI(A.b5,n,n,A.af,!0,new C.eRI(o),n,n,n,D.fq3,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aiM)],s),A.E,n,A.e,A.j,0,A.p)},
cEq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aBb()
if(a7.length===0)return a5.vG(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.JF,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.M)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a6(u).k("cp.E"))
A.d.fc(m)
l=m.length!==0&&A.d.d8(m,new C.eSZ(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eT5(a5)
j=new C.eT7()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.JF,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aQ(11,11)
f=u.q(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eF:A.bz
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aN(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bJ(d,d,d,d),new B.bk(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.N8,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eT_(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.vG(B.bX(A.bB,o,A.t8,6,6))
i=B.a([a5.od("All words",L.an2,!1,new C.eT0(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agc("Sentence "+a3,!1,new C.eT1(a5,a7,v,a2)))
a2=a3}}i.push(a5.agc("Clear picks",!1,new C.eT2(a5)))
i=B.bX(A.bB,i,A.bs,8,8)
g=a5.xV("SIZE OF THE PICKED WORDS",D.amu)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.doY[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eT3(e,k)
f.push(a5.agc(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bX(A.bB,f,A.bs,8,8),A.R,a5.od("Make every word normal",A.l6,!1,new C.eT4(a5))],p),A.E,a6,A.e,A.j,0,A.p)},
czz(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bC6,B.d(A.d.h_(D.axK,new C.eSI(q)).b,p,p,p,p,p,p,D.fdi,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cC(new C.eSJ(q)),l=q.xV("HIGHLIGHT BEHIND THE WORDS",A.a0U),k=q.p1?-1:q.k4
k=q.aiD(k,new C.eSK(q),D.d4g)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.R,m,l,B.bX(A.bB,B.a([k,B.aB(p,B.p(p,D.bOI,A.f,p,p,new B.o(p,p,B.I(v,A.r,w?3:1),p,p,D.f6T,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSN(q),p,p,p,p,p,p,!1,A.a4)],o),A.t8,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.JF,p,p,p)],o)
if(q.gaVu()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aib("Colour",l,0,360,new C.eSO(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aib("Shade",k,0.15,0.9,new C.eSP(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ko("Strength",l,0.15,1,new C.eSQ(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vG(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xV("LOOK",A.yN))
m=B.a([q.od("Bold",I.ams,q.fy,new C.eSR(q)),q.od("Italic",I.amt,q.go,new C.eSS(q))],o)
for(u=0;u<3;++u){l={}
k=D.cVL[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uq:p
w=w?p:A.c.j(0.07)
s=new B.aQ(14,14)
r=new B.ay(q.id===l.a?A.K:A.bz,1,A.r,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eST(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bX(A.bB,m,A.t8,8,8))
n.push(q.xV("COLOUR",A.no))
n.push(q.aiD(q.fx,new C.eSU(q),D.dfA))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.JF,p,p,p))
n.push(q.xV("SIZE AND PLACE",A.GD))
m=q.fr
m=q.ko("Text size",m,0.5,1.6,new C.eSL(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vG(B.x(B.a([m,q.ko("Up / down",l,0.12,0.5,new C.eSM(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.E,p,A.e,A.j,0,A.p)},
ciC(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b5.j(0.6),A.r,1.6)
u=B.a([A.b5.j(0.18),A.bD.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bUb,A.f,p,p,D.b38,p,62,p,p,p,p,p,62),A.aA,D.fu2,A.am,D.fyM],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tA,p,v,w,p,new B.a9(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bxU,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZQ(),p,p,p,p,p,p,!1,A.a4)}w=x.p
v=B.B(B.a([B.bx(B.m(12),new B.a8(46,62,B.fO(o,A.A,120,p,A.ce,A.bV,!1,p,!1,p,p),p),A.aq),A.bc,B.E(B.x(B.a([D.ftz,A.N,B.bX(A.bB,B.a([q.od("Change",A.ke,!1,q.gaZQ()),q.od("Remove",A.ec,!1,new C.eSm(q))],w),A.bs,6,6)],w),A.E,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dbT[t]
u.push(q.od(s.b,s.a,q.at===t,new C.eSn(q,t)))}u=B.bX(A.bB,u,A.bs,8,8)
r=q.at
A:{if(0===r){s=q.c1j(o)
break A}if(1===r){s=q.c0h()
break A}if(2===r){s=q.bHb()
break A}if(3===r){s=q.bNA()
break A}s=q.bJg()
break A}return B.x(B.a([v,A.ad,u,A.aA,s,A.R,new B.bK(A.a3,p,p,q.od("Reset the whole picture",A.l6,!1,new C.eSo(q)),p)],w),A.E,p,A.e,A.j,0,A.p)},
c1j(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bB,B.a([w.od("Auto enhance",E.a0w,!1,new C.eSe(w)),w.od("Make words easy to read",A.p4,!1,new C.eSf(w))],v),A.bs,8,8),A.aA,B.cC(new C.eSg(w,d))],v),A.E,null,A.e,A.j,0,A.p)},
c0h(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ko("Exposure",n,-1.5,1.5,new C.eRT(o),0,A.k.ac(n,1))
w=o.RG
w=o.ko("Brightness",w,-0.5,0.5,new C.eRU(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ko("Contrast",v,0.4,2,new C.eRV(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ko("Fade",u,0,1,new C.eRW(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ko("Spotlight",t,0,1,new C.eRX(o),0,""+A.k.V(t*100))
s=o.Z
s=o.ko("Darken",s,0,0.85,new C.eRY(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ko("Vignette",r,0,0.9,new C.eRZ(o),0,""+A.k.V(r*100))
q=o.aB
q=o.ko("Shade behind words",q,0,0.85,new C.eS_(o),0,""+A.k.V(q*100))
p=o.aK
return o.vG(B.x(B.a([n,w,v,u,t,s,r,q,o.ko("Shade top & bottom",p,0,0.85,new C.eS0(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bHb(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ko("Colour strength",q,0,2.2,new C.eRe(s),1,""+A.k.V(q*100))
w=s.to
w=s.ko("Warmth",w,-1,1,new C.eRf(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ko("Tint",v,-1,1,new C.eRg(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vG(B.x(B.a([q,w,v,s.ko("Shift colours",u,-180,180,new C.eRh(s),0,""+A.k.V(u)+"\xb0"),new B.bK(A.a3,r,r,s.od("Negative",D.bJN,s.y1,new C.eRi(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xV("COLOUR WASH",A.O5)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.awr)
t=B.a([u,v,s.aiD(w,new C.eRj(s),q),A.N],t)
if(s.b1!=null){q=s.b0
t.push(s.vG(s.aib("Wash strength",q,0,0.9,new C.eRk(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.j,0,A.p)},
bNA(){var w,v,u,t,s,r=this,q=r.y2
q=r.ko("Blur",q,0,24,new C.eRN(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.ko("Soft focus",w,0,1,new C.eRO(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vG(B.x(B.a([q,w,r.ko("Film grain",v,0,1,new C.eRP(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xV("LIGHT LEAK",D.bJw)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d1(D.awr,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.aiD(q,new C.eRQ(r),t),A.N],u)
if(r.bb!=null){q=r.bK
u.push(r.vG(r.aib("Leak strength",q,0,1,new C.eRR(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.j,0,A.p)},
bJg(){var w,v,u,t,s=this,r=s.aH
r=s.ko("Zoom",r,1,3,new C.eRo(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.ko("Left / right",w,-1,1,new C.eRp(s),0,""+A.k.V(w*100))
v=s.bD
v=s.ko("Up / down",v,-1,1,new C.eRq(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.x(B.a([s.vG(B.x(B.a([r,w,v,s.ko("Turn",u,-180,180,new C.eRr(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bX(A.bB,B.a([s.od("Turn 90\xb0",H.anz,!1,new C.eRs(s)),s.od("Flip sideways",A.Gq,s.c5,new C.eRt(s)),s.od("Flip upside down",A.Gq,s.cK,new C.eRu(s))],t),A.bs,8,8)],t),A.E,null,A.e,A.j,0,A.p)},
c40(){var w=null,v=B.m(22),u=B.I(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.eVG,A.R,D.fvA,A.aA,B.aB(w,B.p(A.A,D.eVT,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.uq,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSh(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tA,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c16(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eS9(p),m=x.p,l=B.B(B.a([D.bCc,p.od("Reset",A.l6,!1,new C.eS5(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.JF,o,o,o),j=p.xV("SHAPE",A.anv),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cw[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZR(n.$2(t,p.cy),62,u.b,s===t,new C.eS6(v,p),62))}}i=B.bX(A.bB,i,A.bs,8,8)
v=p.xV("RING",A.rg)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cr[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZR(n.$2(p.cx,t),62,r.b,q===t,new C.eS7(s,p),62))}u=B.bX(A.bB,u,A.bs,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ad,p.vG(p.ko("Size",s,0.12,0.4,new C.eS8(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.j,0,A.p)},
b1M(d){return new B.a8(null,d,new B.fK(0.5625,B.cC(new C.eSs(this)),null),null)},
cyQ(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uq:q
t=new B.aQ(14,14)
s=D.de0[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bA(1,A.bd,B.aB(A.cg,B.db(q,B.x(B.a([r,A.cO,new B.qt(A.e0,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b8,new B.o(q,q,q,new B.bk(t,t,t,t),q,u,A.n),D.btu,q,q,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eSB(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bvB,A.lZ,q,q,q)},
aQg(){var w,v,u=this,t=null,s=u.cyQ(),r=u.as
A:{if(0===r){w=u.bLj()
break A}if(1===r){w=u.cEq()
break A}if(2===r){w=u.czz()
break A}if(3===r){w=u.ciC()
break A}if(4===r){w=u.c16()
break A}w=u.c40()
break A}v=x.p
return B.bx(A.te,B.el(B.x(B.a([s,B.E(B.ct(B.a([w],v),t,D.bwG,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Xx,!0),A.aq)},
aMt(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc9_(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.eW3,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.aZ,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbN8()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cv,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f0v)
else t.push(D.bNN)
t.push(A.ab)
t.push(D.bEk)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b7,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uq,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b2f,r,r,r,r,G.aiB,r,r,r)},
aZP(){var w=null
return new B.D(T.ZU,B.B(B.a([B.aI(w,w,w,w,A.mG,w,w,w,new C.eRS(this),w,w,w,w,w,w),D.fL8,A.b0,D.bWt],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.Ba,B.bm(!0,B.cC(new C.eT8(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bfs.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.en()
m.df(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.K()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.K()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.bQ(new B.a5(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aw(d){return d.b!==this.b}}
C.rz.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.mc.prototype={}
C.zH.prototype={
ag(){var w=this
return B.G(["at",w.a.a7().ad(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nR.prototype={}
C.w4.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a82.prototype={}
C.aro.prototype={}
C.a0p.prototype={
U(){return new C.aHw(new B.as(A.at,$.aw()),B.jV(!0,null,!0,!0,null,null,!1),D.dF0,B.a([],x.s),B.ey([D.Ik],x.Q))}}
C.aHw.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.t()
this.a2()},
a0i(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0i=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C7(90,700,700,A.eJ),$async$a0i)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a0i)
case 8:p=e
if(r.c!=null)r.m(new C.eZm(r,p,q))
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
return B.i($async$a0i,v)},
a0l(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0l=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hT().aHG(78,n,1100,1100),$async$a0l)
case 7:q=e
if(J.co(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fi(),$async$a0l)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cJ.gct().aM(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eZn(r,p))
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
return B.i($async$a0l,v)},
b3O(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fO(A.cF.aM(A.d.gal(d.split(","))),A.A,u,u,A.ce,A.bV,!0,u,!1,u,u)
return w}catch(v){}return D.brE},
c1d(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.csX(C.fC2(w,this.b3O(d),f),g)},
acE(d,e,f,g,h){var w=null,v=new C.eZk(f,e),u=new C.eZl(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bz:A.b5.j(0.6),A.r,1)
if(p)p=new B.a8(34,30,new B.an(A.a_,w,A.aa,A.f,B.a([B.au(B.X(f?A.C6:A.NV,A.bX,w,w,w,26),w,w,w),D.emq],x.p),w),w)
else p=this.c1d(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a2,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.au(p,w,w,w),1),D.bNu],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mz,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZj(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aXd(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.m(8),B.fO(A.cF.aM(A.d.gal(h.split(","))),A.A,p,p,A.ce,A.bV,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bz:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.eo,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a1,p,p,p,A.JL,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1P,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aF(!1,A.a2,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.l0,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8N=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fFt(),$async$a8N)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eZ2(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.eZ3(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8N,v)},
aew(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aew=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eZ5(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eZ6(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eZ7(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cc(p,h)}w=7
return B.b(C.fAL(q,r.cx,j,new C.b1e(r.z,r.Q,r.as,r.at),new C.eZ8(r),i,m,p,k),$async$aew)
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
if(p!=null)B.a3(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.eZ9(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aew,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eL,g).w
g=B.aH(d,A.bW,g).w
w=B.au(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aB(h,B.p(h,D.bQK,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.J,24)],v),D.c_B,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZA(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,D.a1P,h,h,h,i.ax?h:new C.eZB(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbC7()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.hp(B.aF(!1,A.a2,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.w4:A.hD,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wl,A.a6),h,40,h,h,h,h,h,40),A.cK,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cK,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.V,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b_H),h,h,h,h,h,h,h,h,A1.Jq,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.ir,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aRF,!0,A.a5,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eZC(i)
s=i.aXd(A.lx,q,r,i.gcj3(),s)
r=i.z
r=B.E(i.acE(new C.eZE(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bn,B.E(i.acE(new C.eZF(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eZG(i)
s=i.aXd(A.u4,r,p,i.gcjb(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.acE(new C.eZH(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fA1,A.au,D.fCT,A.bv,u,A.N,D.fBi,A.aA,v,A.bv,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bn,B.E(i.acE(new C.eZI(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.E,h,A.e,A.j,0,h,h),A.am,D.fEH],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bjv,A.r,1)
w=C.agY(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bK(A.a3,h,h,B.p(h,B.B(B.a([D.bRQ,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fiX,h,h,h),B.aL(!1,h,!0,D.egX,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eZJ(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bbY,h,u,v,h,h,A.n),h,h,h,h,D.bvh,h,h,h),h)],t))}o.push(A.bv)
o.push(D.fqL)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d6o[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.bA(1,A.bd,new B.D(A.jx,B.aB(h,B.db(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b8,new B.o(v,h,new B.bJ(k,k,k,k),h,h,h,A.a6),A.eM,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZK(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bv)
o.push(D.fJo)
o.push(A.N)
o.push(B.cC(new C.eZL(i)))
o.push(A.bv)
o.push(D.fy6)
o.push(A.N)
w=B.a([i.b6E("auto","Let AI choose",A.e3,A.QD)],t)
for(v=x.O,m=0;m<11;++m){j=D.wr[m]
u=j.d
w.push(i.b6E(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bX(A.bB,w,A.bs,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.be.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iI(h,A.be,h,h,h,new C.eZD(i),D.bMX,D.fID,h,D.ft2,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aQS,h,h,h)],t))
o.push(A.bv)
w=i.ax?h:i.gc93()
v=B.fp(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f0l:A.GS
o.push(new B.a8(h,54,B.lC(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.ow,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.ce(B.x(o,A.ai,h,A.e,A.j,0,A.p),A.t,h,A.y,h,A.vS,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aX(0,680,0,g.a.b*0.92),D.ac1,h,h,h,h,h,h,h,h),h)},
bOM(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eZa(this,p,d)
if(d===D.D7)return new C.aE5(p,o,q)
w=B.m(16)
v=p?E.wl:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aB:A.bz,A.r,1)
s=B.X(p?A.eb:C.hIk(d),A.c,q,q,q,20)
r=C.hIl(d)
return B.aB(q,B.db(q,B.x(B.a([s,A.au,B.eN(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e0)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.b8,new B.o(u,q,t,w,q,v,A.n),A.hm,q,64,q,A.hB,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b6E(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ae:A.bz
r=B.I(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a3,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aB(v,B.db(v,B.B(B.a([w,M.Jh,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b8,new B.o(s,v,r,t,v,v,A.n),A.eM,v,v,v,M.ajT,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZp(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a0o.prototype={
U(){return new C.aHv(new B.as(A.at,$.aw()))}}
C.aHv.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aex(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aex=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eYW(r))
w=1
break}B.f_()
r.m(new C.eYX(r))
t=4
q=C.i8Q(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i8A(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eYY(r,q))
w=1
break}k=r.c
if(k!=null)B.a3(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h_Y()
f=$.CJ.h(0,k.a)
o=f==null||J.co(f)?null:J.fr(f)
if(o==null){r.m(new C.eYZ(r))
w=1
break}n=C.i8y(o,r.a.c)
C.i8u(r.a.c.a)
$.h_e=!0
k=r.c
if(k!=null)B.a3(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h2P(j)
h=C.h2Q(r.a.c)
e=C.h2R(r.a.c)
w=7
return B.b(C.bBR(k,r.a.c.a,j,h,new C.eZ_(r),i,e,a0),$async$aex)
case 7:m=a3
k=r.c
if(k!=null)B.a3(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.eZ0(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aex,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eL,i).w
i=B.aH(d,A.bW,i).w
w=B.au(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.anN,A.f,j,j,D.b1V,j,34,j,j,j,j,j,34),A.as,D.bCP],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a8D,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.V,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),As.abv),j,j,j,j,j,j,j,j,A1.Jq,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aRF,!0,A.a5,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d2B[q]
o=A.c.j(0.06)
n=k.e?j:new C.eZ1(k,p)
r.push(B.mP(j,o,new B.y(p,j,Ax.U3,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vk,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.R,B.bX(A.bB,r,A.bs,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ad,B.d(u,j,j,j,j,j,j,D.aQS,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gc94()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.eh.j(0.5)],x.O):D.cBd
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cv,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.egT:D.bRp
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a2,!0,j,B.aL(!1,s,!0,B.eF(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hI,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.ce(B.x(w,A.ai,j,A.e,A.j,0,A.p),A.t,j,A.y,j,A.vS,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aX(0,680,0,i.a.b*0.85),D.ac1,j,j,j,j,j,j,j,j),j)}}
C.b1e.prototype={}
C.aE5.prototype={
U(){return new C.bk0(null,null)}}
C.bk0.prototype={
gaxA(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.q0,null,1,null,v)
w.cL(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
t(){this.gaxA().t()
this.bw1()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c8(this.gaxA(),new C.egi(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bhE.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d8D[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=D.xM.j(0.25+r*0.6).gp(0)
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
aw(d){return d.b!==this.b}}
C.arW.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.ZM.prototype={
U(){return new C.aBB()}}
C.aBB.prototype={
gaiA(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aha(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAe(){var w=this.e
return w===$?this.e=C.h2P(this.a.c).q(0,D.D7):w},
a8A(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8A=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dl1(s))
u=3
r=A.d.h_(D.wr,new C.dl2(s))
q=B.de(C.h2P(s.a.c),x.Q)
l=q
J.hy(l,D.D7)
p=l
if(s.gAe())J.cc(p,D.D7)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAe()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h2Q(i.c)
g=C.h2R(s.a.c)
w=6
return B.b(C.bBR(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8A)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aha(q,s.gaiA())
f=q==null?null:q.b
n=f==null?s.gaiA():f
if(!J.A(n,r.a)&&!s.gAe())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a3(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dl3(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8A,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aQ:A.al,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bz:A.aL,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bA,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dl6(d)
e=B.B(B.a([f,B.aI(n,n,n,n,B.X(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wr[w]
u=o.gaiA()
t=o.f?n:new C.dl7(o,v)
f.push(new C.bss(v,u===v.a,t,n))}f=B.kG(1.25,f,3,10,10,n,A.dP,!0)
u=B.m(18)
t=o.gAe()?D.c2n:n
if(o.gAe())s=n
else s=m?A.bm:A.bN
r=B.X(A.e3,o.gAe()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAe()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAe()?A.ae:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.j,0,A.p),1)
p=o.gAe()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.as,q,B.XM(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dl8(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,K.aiE,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fjg,n,n,n)],g))
f=B.ce(B.x(f,A.E,n,A.e,A.j,0,A.p),A.t,n,A.y,n,A.FO,n,n,A.ag)
u=o.f?n:o.gbB6()
t=B.bn(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.byn,e,n),new B.dr(1,A.cn,f,n),new B.D(A.FN,new B.a8(1/0,50,B.bG(B.eF(B.au(o.f?A.rV:D.fAv,n,n,n),n,new B.o(n,n,n,s,n,D.c0X,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tV,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bss.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bK(A.lk,w,w,B.X(v.c,A.ae,w,w,w,18),w),new B.bK(A.lL,w,w,B.d(v.b,w,w,w,w,w,w,D.fjd,w,w,w),w)],x.p)
if(q)v.push(D.aYa)
return B.aB(w,B.db(w,new B.an(A.a_,w,A.aa,A.t,v,w),w,w,A.b8,new B.o(w,w,p,t,s,new B.a9(A.ax,A.aD,A.x,r,w,w),A.n),A.eM,w,w,w,A.cm,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.egf.prototype={
aFe(d,e,f){return e+"@"+A.a.aZ(A.o.fW(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wC(d,e){return this.aFe(0,e,null)}}
C.aLZ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.b1a.prototype={
B(d){var w,v,u=null,t=C.h1E(this.c)
if(t==null)w=D.bq9
else{w=B.aH(d,u,x.w).w.cJy(D.buO,D.f_w)
v=this.d
w=B.rm(B.e2(B.aod(!1,t,!1,v,!1,390),!v,u),w)}return B.eN(A.A,new B.a8(416,870,new C.blA(w,u),u),A.f,A.dw)}}
C.blA.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dkM[w]
u=new B.aQ(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.apG,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dm2[w]
u=new B.aQ(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bk(u,u,u,u),t,D.apG,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bU(0,B.c1(t,new B.o(t,t,t,B.m(64),D.cTb,D.c_i,A.n),A.bf),0,0,0))
s.push(B.bU(3,B.c1(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bU(13,B.bx(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.au(B.p(D.aYl,B.p(t,t,A.f,t,t,D.b2d,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bU(13,B.e2(B.bx(B.m(51),D.brK,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.au(B.p(t,t,A.f,t,t,new B.o(A.ae,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.aa,A.f,s,t)}}
C.lj.prototype={
pD(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.er(A.L,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mM,D.cQ,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.er(A.L,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dg,D.cQ,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.rA(i,l,0,0,B.a([f,w,C.er(A.bh,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fx,t.l(),3,"",0,0,"",D.cl,D.f7,0.3,0.35,0.72)],s),C.cE(),D.mL,"","","Welcome",D.dg)
u=C.cE()
u=C.er(A.bh,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
w=C.cE()
w=C.rA(i,l,0,0,B.a([u,C.er(A.bh,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uG,D.cQ,0.8,0.1,0.26)],s),C.cE(),D.mL,"","","Agenda",D.dg)
u=C.cE()
u=C.er(A.bh,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
f=C.cE()
f=C.rA(i,l,0,0,B.a([u,C.er(A.bh,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cQ,0.8,0.1,0.26)],s),C.cE(),D.mL,"","","Key Point 1",D.dg)
u=C.cE()
u=C.er(A.bh,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
r=C.cE()
r=C.er(A.bh,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.08,0.24)
q=C.cE()
q=C.rA(i,l,0,0,B.a([u,r,C.er(A.bh,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.52,0.24)],s),C.cE(),D.mL,"","","Key Point 2",D.dg)
r=C.cE()
r=C.er(A.L,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.dg,D.cQ,0.8,0.1,0.32)
e=C.cE()
p=C.BM(l,l,l,l,D.D3,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rA(i,l,0,0,B.a([r,C.er(A.L,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cl,D.cQ,0.7,0.15,0.58)],s),C.cE(),D.mL,"","",h,D.dg)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.M)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EI.prototype={
bA(d){return this.e.$1(d)}}
C.eu.prototype={}
C.j2.prototype={}
C.Ez.prototype={
gaL1(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agY(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3J(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ez(v,u,t,d==null?w.d:d)},
FH(d){return this.a3J(null,d,null,null)},
aDX(d){return this.a3J(null,null,null,d)},
cJw(d,e){return this.a3J(d,e,null,null)},
bbR(d){return this.a3J(d,null,null,null)},
bbY(d){return this.a3J(null,null,d,null)}}
C.NA.prototype={
U(){return new C.bjp(new B.eI(0,$.aw()),null,null)}}
C.bjp.prototype={
a_(){var w,v=this
v.a1()
w=v.un(new C.dVE(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.hE(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.S$=$.aw()
w.P$=0
this.bvx()},
B(d){var w=C.agY(this.a.c.a)
if(w==null)w=A.d.gI(D.Hc)
return B.cC(new C.dVD(this,w,C.hhX(this.a.c.d)))}}
C.br0.prototype={
B(d){return B.nW(A.VR,this.e,new C.eY9(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bez.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aST(d,e,v)
break
case"confetti":w.bHF(d,e,v)
break
case"crown":w.bJh(d,e,v)
break
case"aurora":w.bCb(d,e,v)
break
case"champagne":w.bFx(d,e,v)
break
case"diamonds":w.bLs(d,e,v)
break
case"starburst":w.cwu(d,e,v)
break
case"balloons":w.bCp(d,e,v)
break
case"galaxy":w.bQB(d,e,v)
break
case"redcarpet":w.cnn(d,e,v)
break
case"coins":w.bH3(d,e,v)
break
case"lanterns":w.c_N(d,e,v)
break
case"hearts":w.bYq(d,e,v)
break
case"petals":w.cit(d,e,v)
break
case"butterflies":w.bEw(d,e,v)
break
case"neon":w.c3L(d,e,v)
break
case"disco":w.bLD(d,e,v)
break
case"sunrise":w.cy7(d,e,v)
break
case"pearls":w.chx(d,e,v)
break
case"snow":w.cwb(d,e,v)
break
case"laurel":w.c_T(d,e,v)
break
case"ribbons":w.cpT(d,e,v)
break
case"kente":w.c_B(d,e,v)
break
case"trophy":w.cBJ(d,e,v)
break
case"shooting":w.ctW(d,e,v)
break
case"bokeh":w.bCK(d,e,v)
break
case"orbits":w.cf9(d,e,v)
break
case"flowers":w.bPR(d,e,v)
break
case"music":w.c3t(d,e,v)
break
case"mandala":w.c1U(d,e,v)
break
case"sparklers":w.cwi(d,e,v)
break
case"city":w.bGk(d,e,v)
break}},
rG(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.K()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oF
u=new B.aJ(w.r,A.ak,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.b1(w,s))
u.D(new B.ca(w,t,w+f,t))
u.D(new B.ca(w,t,w,t+f))
u.D(new B.ca(w,t,w-f,t))
u.D(new B.ca(w,t,w,s))
u.D(new B.bv())
d.aJ(u,v)
d.ae(e,f*0.18,v)},
lM(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rG(d,new B.t(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aST(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lM(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aE],w),B.a([A.i4,A.bD],w),B.a([A.eB,A.aR],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kt(new B.t(g,c1),new B.t(f,e),A.ct.av(0,i/0.22))
a0.toString
$.W()
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.sar(new B.a9(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rD(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bH
a2=B.kt(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cY(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hC(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cY(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cY(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bH
b9.a=A.oF
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rG(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHF(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.K()
a0.sar(new B.a9(A.ax,A.aD,A.x,D.dff,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aA(0,new B.a5(0,0,f,e)))
a1.aX(new B.a5(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.Q4[A.o.E(A.k.bm(C.cY(u,7)*5),0,4)]
J.bq(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aJ(d.r,A.ak,null,null,t)
d=-q*2
t.push(new B.b1(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bA(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
t.r=B.b0(n.r).gp(0)
t.b=A.ac
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cv(m.gbB().a.snapshot()):t).a,k)
k.delete()}else{t=B.bP(A.J,q*1.8*A.k.E(t,0.15,1),q)
k=n.H()
f.drawRect(B.bQ(t),k)
k.delete()}f.restore()}this.lM(a1,a2,a3,25,A.bM,30)},
bJh(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.t(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aJ(o.r,A.ak,a4,a4,n)
n.push(new B.b1(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bv())
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bdY],v),a4,a4).aA(0,B.bW(w,u)))
l=o.H()
o=m.gbB().a.snapshot()
t.drawPath((m.e=new B.cv(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aJ($.W().r,A.ak,a4,a4,B.a([],r))
v=a6+j
i.D(new B.b1(a5,v))
u=j*0.3
s=a6+u
i.D(new B.ap(a5,s))
o=a6+j*0.6
i.D(new B.ap(a5+k*0.22,o))
i.D(new B.ap(a5+k*0.5,a6))
i.D(new B.ap(a5+k*0.78,o))
o=a5+k
i.D(new B.ap(o,s))
i.D(new B.ap(o,v))
i.D(new B.bv())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.K()
n.sar(new B.a9(A.b3,A.b6,A.x,D.ddW,a4,a4).aA(0,new B.a5(a5,a6,o,v)))
a8.aJ(i,n)
for(v=[D.ewq,D.epM,D.eFI],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.r=A.ae.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.r=A.hM.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xf(i),u=B.a([],x.X),o=new B.vG(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.k0(y.M));--f
o.jB()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aJ(n,v.b,a4,new B.cx([new B.Hx(o,f),0,d*h,!0]),B.a([],r))
f=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
f.b=A.ac
f.c=g
f.e=A.dS
f.r=A.bM.gp(0)
l=f.H()
f=d.gbB().a.snapshot()
t.drawPath((d.e=new B.cv(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rG(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lM(a8,a9,b0,45,A.bM,40)},
bCb(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lM(a8,a9,b0,60,A.c,50)
w=[D.eR3,D.eQM,D.eQG,D.eS1]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aJ(n.r,A.ak,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b1(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.b=A.ac
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oF
n.z=new B.hC(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cv(h.gbB().a.snapshot()):n).a,a2)
a2.delete()
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.b=A.ac
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oF
n.z=new B.hC(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cv(h.gbB().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.r=A.vE.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.oF
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFx(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.K()
a0.sar(new B.c0(A.A,0.5,A.x,l,0,B.a([A.hL.j(0.25+0.1*h),D.XH],x.O),l,l).aA(0,B.bW(new B.t(g,f),e)))
a1.ae(new B.t(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aJ(d.r,A.ak,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b1(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bA(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a0.b=A.ac
a0.c=h
a0.r=D.Q4[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cv(u.gbB().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rG(a1,new B.t(r,n),m*2.4,A.bM,A.k.E(n/f,0,1))
continue}$.W()
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.b=A.ac
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xB.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLs(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lM(a9,b0,b1,30,A.kX,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bq(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aJ(h.r,A.ak,a5,a5,g)
h=-o
e=h*0.5
g.push(new B.b1(e,i))
h*=0.28
j*=0.6
g.push(new B.ap(h,j))
d=o*0.28
g.push(new B.ap(d,j))
a0=o*0.5
g.push(new B.ap(a0,i))
a1=k*0.6
g.push(new B.ap(0,a1))
g.push(new B.bv())
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.sar(new B.a9(A.ax,A.aD,A.x,D.d9F,a5,a5).aA(0,B.bP(A.J,k*1.2,o)))
a2=g.H()
g=f.gbB().a.snapshot()
v.drawPath((f.e=new B.cv(g)).a,a2)
a2.delete()
a3=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3.b=A.ac
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
if(a4>0.85)this.rG(a9,new B.t(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cwu(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aJ(p.r,A.ak,null,null,o)
o.push(new B.b1(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bv())
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbB().a.snapshot()
w.drawPath((n.e=new B.cv(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
u.b=A.ac
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.br7.av(0,k)*(0.5+0.5*C.cY(t,v)))
this.rG(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.Q4[A.o.E(A.k.bm(C.cY(t,4)*5),0,4)],u)}},
bCp(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.awR[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aJ(h.r,A.ak,a3,a3,g)
h=k+n*1.15
g.push(new B.b1(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bA(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.b=A.ac
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cv(f.gbB().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bP(new B.t(j,k),n*2.3,l)
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d=B.ar(i,A.w,0.35)
d.toString
l.sar(new B.c0(D.aYo,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.awH,a3).aA(0,a2))
a1=l.H()
u.drawOval(B.bQ(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aJ(g.r,A.ak,a3,a3,l)
d=n*0.12
l.push(new B.b1(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bv())
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbB().a.snapshot()
u.drawPath((g.e=new B.cv(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.bq(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bP(A.J,t,v)
$.W()
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=D.awR[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.bQ(s),a1)
a1.delete()
u.restore()}},
bQB(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lM(b1,b2,b3,50,A.c,70)
for(w=[D.eRb,D.eQS,D.eQY],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bW(new B.t(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cY(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cY(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bM,A.eF,g)
k.toString
d=C.cY(i,3)
$.W()
a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a0.r=k.j(0.5+0.5*C.cY(i,4)).gp(0)
a0.a=A.oF
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.K()
a9.sar(new B.c0(A.A,0.5,A.x,a4,0,B.a([A.xB.j(0.55),D.agh],u),a4,a4).aA(0,B.bW(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.kt(a3,a3.aa(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kt(a3,a5,0.6)
a6.toString
a8=B.K()
a8.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rD(a3,a5)))
a8.c=a7*0.005
a8.d=A.bH
b1.br(a6,a5,a8)}},
cnn(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aJ(o.r,A.ak,b5,b5,n)
n.push(new B.b1(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bv())
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.sar(new B.c0(A.A,0.5,A.x,b5,0,B.a([A.xB.j(0.28),D.agh],w),b5,b5).aA(0,B.bW(new B.t(q,u),t)))
o.a=A.oF
l=o.H()
q=m.gbB().a.snapshot()
v.drawPath((m.e=new B.cv(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ev:A.el)
a9=$.W()
b0=B.a([],s)
m=new B.aJ(a9.r,A.ak,b5,b5,b0)
b0.push(new B.b1(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.ca(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bv())
a9=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a9.sar(new B.a9(A.a3,A.a8,A.x,a7,b5,b5).aA(0,new B.a5(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbB().a.snapshot()
v.drawPath((m.e=new B.cv(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
b1.r=A.hL.gp(0)
b1.c=o
b1.d=A.bH
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aJ($.W().r,A.ak,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.b1(b6*0.42,w))
b2.D(new B.ap(b6*0.58,w))
b2.D(new B.ap(b6*0.8,b7))
b2.D(new B.ap(b6*0.2,b7))
b2.D(new B.bv())
v=B.K()
v.sar(D.c0Q.aA(0,new B.a5(0,w,0+b6,w+b7*0.22)))
b9.aJ(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rG(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bH3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.bP(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.W()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.sar(new B.a9(A.ax,A.aD,A.x,n>0?D.dpu:D.cH0,null,null).aA(0,l))
k=q.H()
v.drawOval(B.bQ(l),k)
k.delete()
q=-(s*0.22)
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.b=A.ac
j.c=Math.max(0.6,s*0.08)
j.r=D.bnS.gp(0)
k=j.H()
v.drawOval(B.bQ(new B.a5(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rG(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lM(d,e,f,30,A.bM,110)},
c_N(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lM(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.sar(new B.c0(A.A,0.5,A.x,d,0,B.a([X.LW.j(0.45*k),D.af3],u),d,d).aA(0,B.bW(new B.t(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aJ(i.r,A.ak,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b1(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bv())
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i=B.ar(D.bea,A.c,0.2*k)
i.toString
j.sar(new B.a9(A.b3,A.b6,A.x,B.a([D.bj7,i],u),d,d).aA(0,B.bP(new B.t(l,m),o*1.4,o)))
g=j.H()
j=f.gbB().a.snapshot()
v.drawPath((f.e=new B.cv(j)).a,g)
g.delete()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bYq(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bq(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aJ(m.r,A.ak,d,d,l)
m=o*0.9
l.push(new B.b1(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.lB(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.lB(m,g,o*1.8,h,0,m))
l.push(new B.bv())
f=D.d0r[A.o.F(p,5)]
m=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l=B.ar(f,A.w,0.25)
l.toString
m.sar(new B.c0(A.tb,0.5,A.x,d,0,B.a([A.c,f,l],u),K.a30,d).aA(0,B.bW(A.J,o*1.4)))
e=m.H()
m=i.gbB().a.snapshot()
v.drawPath((i.e=new B.cv(m)).a,e)
e.delete()
v.restore()}this.lM(a3,a4,a5,30,A.i4,130)},
cit(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bq(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aJ(n.r,A.ak,i,i,m)
n=-p
m.push(new B.b1(0,n))
l=n*0.2
m.push(new B.ca(p,l,0,p))
m.push(new B.ca(n,l,0,n))
m.push(new B.bv())
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
m=(q&1)===0?D.cBc:D.daZ
n.sar(new B.a9(A.a3,A.a8,A.x,m,i,i).aA(0,B.bW(A.J,p)))
j=n.H()
n=k.gbB().a.snapshot()
v.drawPath((k.e=new B.cv(n)).a,j)
j.delete()
v.restore()}this.lM(d,e,a0,25,A.bM,140)},
bEw(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lM(b0,b1,b2,40,A.bM,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cY(r,1))
p=Math.sin(b2*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bq(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bq(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aJ(a2.r,A.ak,a6,a6,a3)
a3.push(new B.b1(0,0))
a3.push(new B.lB(f,e,l,d,h,0))
a3.push(new B.lB(q,h,g,q,0,h))
a3.push(new B.bv())
a2=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a2.sar(new B.a9(A.a3,A.a8,A.x,i?D.daI:D.ddp,a6,a6).aA(0,new B.a5(0,m,k,j)))
a5=a2.H()
a2=a4.gbB().a.snapshot()
v.drawPath((a4.e=new B.cv(a2)).a,a5)
a5.delete()
a2=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a2.b=A.ac
a2.c=Math.max(0.6,o)
a2.r=D.B4.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cv(a4.gbB().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=D.bn7.gp(0)
p.c=q*0.1
p.d=A.bH
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c3L(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
q.b=A.ac
q.c=v
q.r=D.axW[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bz(B.bP(e,r,r*1.6),new B.aQ(p,p))
o=q.H()
u.drawRRect(B.eU(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.axW[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bz(new B.a5(j,i,j+w,i+l),new B.aQ(v,v))
$.W()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.abj,p)
o=j.H()
u.drawRRect(B.eU(i),o)
o.delete()}},
bLD(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nM,A.ds][A.o.F(p,4)]
j=C.cY(p,3)
$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=k.j(0.75).gp(0)
i.a=A.oF
i.z=new B.hC(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.K()
t.r=A.aB.gp(0)
t.c=1.2
a3.br(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.K()
t.r=A.dt.gp(0)
a3.ae(v,u,t)
J.bq(q.save())
a1=new B.aJ(a1.r,A.ak,null,null,B.a([],x.v))
a1.D(new B.jy(B.bW(v,u)))
a3.mB(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.r=B.ar(A.bl,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.bQ(new B.a5(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rG(a3,v.aa(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cy7(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.av(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aJ(r.r,A.ak,h,h,q)
q.push(new B.b1(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bv())
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=A.bM.j(0.1).gp(0)
o=r.H()
r=p.gbB().a.snapshot()
w.drawPath((p.e=new B.cv(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.K()
a0.sar(new B.c0(A.A,0.5,A.x,h,0,B.a([D.b9Q.j(0.6),D.af3],x.O),h,h).aA(0,B.bW(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.K()
d.sar(D.enf.aA(0,B.bW(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.r=A.c.j(0.18).gp(0)
i=B.bP(new B.t(l,k),r,u)
o=j.H()
w.drawOval(B.bQ(i),o)
o.delete()
i=B.bP(new B.t(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.bQ(i),o)
o.delete()}this.lM(a2,a3,a4,20,A.hM,180)},
chx(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aJ(r.r,A.ak,f,f,q)
q.push(new B.b1(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bA(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bA(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bv()
q.push(r)
q=p.f
if(q!=null)r.bA(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
r.r=B.ar(A.cC,A.jl,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cv(p.gbB().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
t.sar(new B.c0(An.x9,0.5,A.x,f,0,D.dgW,f,f).aA(0,B.bW(new B.t(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lM(a1,a2,a3,25,A.c,190)},
cwb(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.W()
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bH
J.bq(v.save())
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
h.delete()}v.restore()}this.lM(d,a0,a1,40,A.eB,200)},
c_T(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dk(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bq(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bP(new B.t(p,0),q,r)
$.W()
f=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
f.sar(D.c0D.aA(0,new B.a5(0,o,n,m)))
e=f.H()
s.drawOval(B.bQ(g),e)
e.delete()
s.restore()}}$.W()
a0=B.K()
a0.b=A.ac
a0.c=a2*0.003
a0.r=D.bes.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rG(a3,w.aa(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lM(a3,a4,a5,40,A.bM,210)},
cpT(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hL,A.hM],a6),B.a([A.oP,A.i4],a6),B.a([A.aC,A.eF],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aJ(l.r,A.ak,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b1(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dx(i,s),l=new B.bS(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bA(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bv()
k.push(l)
k=j.f
if(k!=null)l.bA(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k=a7[m]
h=k[0]
l.sar(new B.a9(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),E.Qv,new B.mv(w)).aA(0,new B.a5(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cv(j.gbB().a.snapshot()):l).a,a2)
a2.delete()}this.lM(a8,a9,b0,40,A.c,220)},
c_B(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bm(g/t),5)
a1=g+t
$.W()
a2=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a3=Math.abs(a0)
a2.r=D.a33[a3].gp(0)
a4=a2.H()
s.drawRect(B.bQ(new B.a5(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a5.r=D.a33[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.bQ(new B.a5(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rG(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a33[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cBJ(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.c=v
p.r=A.bM.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aJ($.W().r,A.ak,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.D(new B.b1(v,a2))
w=a1+w
l.D(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.D(new B.ca(w,r,p,k))
w=a2+m*0.95
l.D(new B.ap(p,w))
p=n*0.3
j=a2+m
l.D(new B.ap(a1+p,j))
l.D(new B.ap(a1-p,j))
q=a1-q
l.D(new B.ap(q,w))
l.D(new B.ap(q,k))
l.D(new B.ca(v,r,v,a2))
l.D(new B.bv())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bP(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.b=A.ac
d.c=q
d.r=A.ay.gp(0)
o=d.H()
u.drawArc.apply(u,[B.bQ(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.K()
a1.sar(new B.a9(A.a3,A.a8,A.x,D.dju,A.awY,null).aA(0,new B.a5(v,a2,r,j)))
a4.aJ(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rG(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHG(a4,a5,a6,60)},
bHG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bq(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bP(A.J,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
n.r=D.Q4[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.bQ(o),m)
m.delete()
u.restore()}},
ctW(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lM(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.F(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bm((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.sar(new B.a9(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).aA(0,B.rD(new B.t(l,h),i)))
g.c=r
g.d=A.bH
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rG(a0,i,p,A.c,1-m)}},
bCK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.F(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l=A.o.F(r,5)
m.r=D.azy[l].j(n).gp(0)
m.a=A.oF
m.z=new B.hC(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
m.b=A.ac
m.c=Math.max(0.6,q*0.05)
m.r=D.azy[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cf9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bq(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bP(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.b=A.ac
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.H()
w.drawOval(B.bQ(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.r=A.hM.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.r=A.hL.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lM(d,e,f,45,A.bM,270)},
bPR(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.cY(o,2)*4,4)/4
j=A.ew.av(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d7N[A.o.F(o,5)]
J.bq(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bP(new B.t(0,l),i,j)
$.W()
a0=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a0.sar(new B.a9(A.b3,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.bP(new B.t(0,l),f,h)))
a1=a0.H()
v.drawOval(B.bQ(d),a1)
a1.delete()}$.W()
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.r=A.hL.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lM(a5,a6,a7,30,A.hM,280)},
c3t(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bW(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.b=A.ac
j.c=v
j.r=D.aw2[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.bQ(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.aw2[A.o.F(g,4)]
$.W()
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.r=a0.gp(0)
J.bq(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bP(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.bQ(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c1U(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bq(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aJ(d.r,A.ak,a3,a3,a0)
a0.push(new B.b1(0,i))
a0.push(new B.ca(h,m,0,g))
a0.push(new B.ca(j,m,0,i))
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.b=A.ac
d.c=t
d.r=B.ar(A.bM,A.nM,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbB().a.snapshot()
v.drawPath((a1.e=new B.cv(d)).a,a2)
a2.delete()
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.r=A.hM.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.K()
a5.sar(new B.c0(A.A,0.5,A.x,a3,0,B.a([A.hL.j(0.25),D.XH],x.O),a3,a3).aA(0,B.bW(w,a4)))
a7.ae(w,a4,a5)
this.lM(a7,a8,a9,30,A.bM,300)},
cwi(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bH
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
l.sar(new B.c0(A.A,0.5,A.x,null,0,B.a([A.hM,A.hL.j(0.6),D.XH],o),null,null).aA(0,B.bW(new B.t(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.F(b2+C.cY(f,2)*e,e)/e
a0=A.k.bm((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a6.r=B.ar(A.hM,A.aE,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bH
a6.a=A.oF
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
g.delete()}}}this.lM(b0,b1,b2,35,A.bM,310)},
bGk(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aST(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a5(o,k,o+m,k+l)
$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.sar(D.c1z.aA(0,j))
h=i.H()
r.drawRect(B.bQ(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a6.r=A.bM.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.bQ(new B.a5(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.b_4.prototype={
B(d){var w,v=null,u=new C.caT(),t=new C.caV(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aoP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.caU(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Hc[w]))
return B.bX(A.bB,s,A.bs,12,10)}}
C.Zj.prototype={
U(){return new C.azZ()}}
C.azZ.prototype={
gvH(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZU(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.ba(w.b,A.b4,A.aN),$.aw())}return v},
gaxB(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaL1()
v=$.aw()
u.f!==$&&B.bH()
t=u.f=new B.as(new B.ba(w,A.b4,A.aN),v)}return t},
t(){var w=this.gaZU(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gaxB()
w.S$=v
w.P$=0
this.a2()},
a_8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hT().C7(90,700,700,A.eJ),$async$a_8)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_8)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahU(o,".png")?"image/png":"image/jpeg"
r.m(new C.dai(r,n,p))
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
return B.i($async$a_8,v)},
aZT(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Uc,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agY(p.gvH().a)
if(n==null)n=A.d.gI(D.Hc)
w=p.gvH()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.aa,A.t,B.a([B.bU(0,new C.NA(p.gvH(),!1,!0,new B.cz(w.a+v,x.W)),0,0,0),B.ao(o,B.HS(A.mG,new C.dan(d),B.nG(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HS(D.bLP,new C.dao(p),B.nG(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aRE,o,o,o)
t=B.E(B.aM(o,A.V,!1,o,!0,A.t,o,B.aO(),p.gaZU(0),o,o,o,o,o,2,p.aZT("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dap(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.fK,!0,A.a5,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hL.j(0.6),A.r,1)
if(p.gvH().d.length===0)q=D.bPb
else{q=C.hhX(p.gvH().d)
if(q==null)q=new Uint8Array(0)
q=B.i_(B.fO(q,A.A,o,o,A.ce,A.bV,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc95(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gvH().d.length!==0)r.push(B.aI(o,o,o,o,D.a1P,o,o,o,new C.daq(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.V,!1,o,!0,A.t,o,B.aO(),p.gaxB(),o,o,o,o,o,2,p.aZT("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dar(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dd,!0,A.a5,o,A.ao,o,o,o,o),A.ad,B.dp(D.bO4,D.fKi,new C.das(p,d),B.bn(A.ay,o,o,o,A.w,o,A.cj,o,new B.b7(B.m(14),A.a0),o,o,o))],u),A.ai,o,A.e,A.P,0,A.p),A.f,o,o,D.b2p,o,o,o,o,A.FK,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLv.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.ZE.prototype={
U(){return new C.bg1(new B.as(A.at,$.aw()))}}
C.bg1.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aQ:A.al,k=B.aH(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bz:A.aL,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cx,l,o,o,o,o),o,o,o,new C.dh4(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cSC[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.aQ(12,12)
q=new B.aQ(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aL(!1,new B.bk(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pr,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bk(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dh5(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hz,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Cl(A.bB,6,6,A.bs,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.V,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bs(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a5,o,A.ao,o,o,o,o),1),A.ab,B.bG(A.aSB,new C.dh6(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dr(1,A.cn,B.ct(e,o,o,o,o,A.ag,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tV,A.ZA,o,o,o),!0,!1,A.af,!0,!0)}}
C.bfp.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.en()
a2.df(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.K()
u.z=A.RI
t=B.K()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.au(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.aj()<0.25){f=B.ar(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.E(0.35+i*0.35,0.05,0.85))
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
a1=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aw(d){return d.b!==this.b}}
C.bf7.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bz(new B.a5(0,0,0+a7.a,0+a7.b),A.kK),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.K()
a5.b=A.ac
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mK
a6.aD(a1,a5)
a5=x.v
a4=new B.aJ(a4.r,A.ak,a0,a0,B.a([],a5))
a4.D(new B.iN(a1))
v=new B.SI(new B.vG(B.xf(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jB()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.ar(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.b=A.ac
j.d=A.bH
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aJ(r,k,a0,new B.cx([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()}else{k=new B.aJ(r,k,a0,new B.cx([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()
k=new B.aJ(r,a2.b,a0,new B.cx([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbB().a.snapshot()
q.drawPath((k.e=new B.cv(f)).a,g)
g.delete()}}a4.jB()
e=u[a3].MT(n).a
$.W()
k=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
k.r=w.gp(0)
k.z=A2.pf
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.bnS.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.en()
e.df(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.he()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.gamE()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aJ(j.r,A.ak,f,f,i)
i.push(new B.b1(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bv())
j=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
j.sar(B.DR(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lC
g=j.H()
j=h.gbB().a.snapshot()
q.drawPath((h.e=new B.cv(j)).a,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.ba2.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.en()
a0.df(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.aj()
l=a0.aj()
k=Math.min(t,r)*(0.03+a0.aj()*0.09)
j=a0.aj()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.W()
e=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
e.r=f.j(g).gp(0)
e.z=new B.hC(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
e.b=A.ac
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.b9H.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.en()
a0.df(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aJ(i.r,A.ak,null,null,h)
h.push(new B.b1(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bA(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.b=A.ac
i.c=r
i.d=A.bH
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cv(g.gbB().a.snapshot()):i).a,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.buN.prototype={
a6(d,e){var w,v,u=new B.a5(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.K()
t=(0.5+0.5*t)*0.12
w.sar(new B.c0(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.d_c,null).aA(0,u))
d.aX(u,w)
w=u.cs(-3)
v=B.K()
v.b=A.ac
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lC
d.aX(w,v)},
aw(d){return d.b!==this.b}}
C.brO.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.en()
o.df(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.W()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=j.gp(0)
i.c=1.4
i.d=A.bH
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
g=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hC(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aw(d){return d.b!==this.b}}
C.bqX.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a5(0,0,0+e.a,0+e.b)
$.W()
v=B.K()
v.a=A.oF
v.sar(new B.a9(A.ax,A.aD,A.x,B.a([A.K,B.ar(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aA(0,w))
d.aX(w,v)},
aw(d){return d.b!==this.b}}
C.bes.prototype={
a6(d,e){var w,v,u,t,s,r=e.gdF(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.K()
w.b=A.ac
w.c=1.4
w.d=A.bH
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.K()
u.b=A.ac
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uz
r=new C.da_(this,r*0.16,d,u,w)
t=e.gdF()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
aw(d){return d.b!==this.b}}
C.xF.prototype={}
C.IS.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.arn.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.uM.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mE.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.eK.prototype={
hI(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
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
u.n(0,"decoration",C.hWr(v.z))
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
C.lM.prototype={
hI(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("N<1,eK>")
n=B.C(new B.N(n,new C.cgk(),m),m.k("ak.E"))
return C.rA(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.S(n).k("N<1,a7<n,@>>")
n=B.C(new B.N(n,new C.cgl(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbaa(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSo(){if(!C.ky(this.w))return!1
var w=this.gbaa()
if(w==null)return!1
return new B.T(Date.now(),0,!1).d_(w.bU())},
hI(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.S(r).k("N<1,lM>")
r=B.C(new B.N(r,new C.cg9(),q),q.k("ak.E"))
return C.BM(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ad())
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
v=B.S(w).k("N<1,a7<n,@>>")
w=B.C(new B.N(w,new C.cga(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jH.prototype={}
C.b1d.prototype={
B(d){return B.cC(new C.cgf(this))}}
C.aoy.prototype={
U(){return new C.bja(null,null)}}
C.bja.prototype={
gaZV(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.fO,null,1,null,v)
w.cL(0)
v.d!==$&&B.bH()
v.d=w
u=w}return u},
t(){this.gaZV().t()
this.bvi()},
B(d){return B.c8(this.gaZV(),new C.dIc(),this.a.c)}}
C.aLh.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.adn.prototype={
PZ(d,e,f,g){return this.bPv(d,e,f,g)},
bPv(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PZ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PZ)
case 3:s=i
if(d.e==null){w=1
break}B.a3(d,!1).N(null)
t=d.J(x.q).f
t.R(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.em,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PZ,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.df,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.B(B.a([B.E(new C.adE(A.hE,"Download",A.c_,new C.erl(w,d),!0,v),1),A.as,B.E(new C.adE(A.w6,"Share",A.bi,new C.erm(w,d),!1,v),1),A.as,B.E(new C.adE(A.hp,"Safari",A.b_,new C.ern(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.ero(d),v,v))
return B.bm(!0,new B.D(A.q4,B.x(B.a([B.p(v,B.x(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.j3,v,t,u,s,v,A.n),v,v,v,v,A.FR,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adE.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a2,!0,v,B.aL(!1,u,!0,B.eF(B.x(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bAM,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b1b.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqz(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c96().akM(1.35)
s=B.avS(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAH(v)
if(i.e&&i.w!=null)q=B.aM(h,A.V,!1,h,!0,A.t,h,B.aO(),i.w,A.bi,h,h,h,h,2,D.bXh,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cz("slide_tf_"+g.a,x.W),h,A.wK,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zW,A.ao,h,A.TT,h,h)
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
w=n?t.cJj(B.b0(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eK:A.DE
p=B.d(f,new B.cz("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.TK:s
$.W()
j=B.K()
j.b=A.ac
j.c=3*w
j.e=A.dS
j.r=A.av.gp(0)
j=i.cpW(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.aa,A.t,B.a([j,i.cpU(k,t,l?A.TK:s)],x.p),h)}else w=i.cpV(p,t,g.k2?A.TK:s,m)
v=new B.nm(w,new B.cz("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.cg,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bK(r,h,h,q,h),h)
case 1:case 4:return i.bZ4()
case 3:return i.chw()
case 2:return B.b4(h,h,h,new C.b18(g,h),A.fH)
case 5:g=g.r
return new C.b1a(g,!i.e&&i.z==null,h)}},
c96(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.kb
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cS(D.af1,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bI
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mQ
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cS(A.bD,new B.t(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cS(v,new B.t(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cS(A.bb,new B.t(-3*v,0),0),new B.cS(A.aw,new B.t(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cS(A.cY,A.J,8*v),new B.cS(A.aw,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=X.AO
break
case"ice":v=o.d
e=B.a([new B.cS(A.aR,A.J,10*v),new B.cS(A.cC,A.J,22*v)],x.r)
k=A.O
w=A.eB
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.kb
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d1e[q]
u.push(new B.cS(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.K()
v=o.d
f.sar(D.c__.aA(0,new B.a5(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.L0,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.K()
v=o.d
f.sar(D.c_k.aA(0,new B.a5(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cS(l,A.J,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cw
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cS(l.j(0.45),new B.t(u,u),0),new B.cS(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.kb
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
azv(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eXC.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cgd(h)
v=r.k2?C.i89(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eK:A.DE
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XQ(B.cZ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cpW(d,e,f,g){return this.azv(d,e,f,!1,g)},
cpU(d,e,f){return this.azv(d,e,f,!1,null)},
cpV(d,e,f,g){return this.azv(d,e,f,g,null)},
bAH(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bZ4(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.au(B.X(s.b===D.lc?A.GN:A.BQ,A.aB,t,t,t,32),t,t,t)}w=u.bDK(r)
if(s.b===D.lc){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dy,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aOa(r,!0)
return C.fC2(s.go,v,s.id)}return w},
aOa(d,e){var w,v,u,t
try{w=C.i8s(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cC(new C.cgc(this,w,v,e))
return u}catch(t){return D.acH}},
bDK(d){return this.aOa(d,!1)},
chw(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b7N
return C.i8K(v,w.db,w.dx)}}
C.b18.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.K(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.K()
w.r=B.b0(f.ch).gp(0)
w.b=A.ac
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a5(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aX(s,g)
d.aX(s,w)
break
case 1:d.e1(s,g)
d.e1(s,w)
break
case 2:r=new B.aJ(h.r,A.ak,i,i,B.a([],x.v))
r.D(new B.b1(u/2,0))
r.D(new B.ap(u,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 3:r=new B.aJ(h.r,A.ak,i,i,B.a([],x.v))
h=t*0.45
r.D(new B.b1(0,h))
f=u*0.65
r.D(new B.ap(f,h))
r.D(new B.ap(f,t*0.2))
r.D(new B.ap(u,t*0.5))
r.D(new B.ap(f,t*0.8))
t*=0.55
r.D(new B.ap(f,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 4:h=t/2
w.c=v+2
d.br(new B.t(0,h),new B.t(u,h),w)
break
case 5:q=u*0.22
r=new B.aJ(h.r,A.ak,i,i,B.a([],x.v))
r.D(new B.b1(q,0))
r.D(new B.ap(u,0))
r.D(new B.ap(u-q,t))
r.D(new B.ap(0,t))
r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aJ(h.r,A.ak,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b1(k,j)
f.push(h)
v=r.f
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bv())
d.aJ(r,g)
d.aJ(r,w)
break}},
aw(d){return d.b!==this.b}}
C.aIV.prototype={
U(){return new C.buj(null,null)}}
C.buj.prototype={
a_(){var w,v=this
v.a1()
w=B.bl(null,A.iq,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bxt()},
aOl(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c1(B.au(B.d(d,w,w,w,w,w,w,A.df,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAV(){var w,v=this,u=null,t=v.aOl("Slide A",A.bi),s=v.aOl("Slide B",A.b_)
if(v.a.c===D.cl)return new B.an(A.a_,u,A.b2,A.t,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c8(w,new C.f5H(v,s,t),u)},
B(d){return this.bAV()}}
C.aJx.prototype={
jf(d){return new B.a5(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jW(d){return d.b!==this.b}}
C.V6.prototype={
U(){return new C.bjl(null,null)}}
C.bjl.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bl(null,A.Bj,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTq(u),x.a)},
bv(d){var w,v,u,t=this
t.bE(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dTp(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bvw()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c8(w,new C.dTo(this),v.d)}}
C.IR.prototype={
B(d){return B.cC(new C.cg5(this))}}
C.azI.prototype={
U(){return new C.bdW()}}
C.bdW.prototype={
a_(){this.a1()
if(this.a.c!==D.cl)B.bN(A.Ms,new C.d7e(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.V6(C.er(A.bh,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f7,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ca,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cz("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bh,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.aa,A.t,B.a([w,B.ao(32,new C.V6(t,B.p(p,D.fvM,A.f,p,p,new B.o(s,p,B.I(A.aZ,A.r,1),r,p,p,A.n),p,p,p,p,A.jw,p,p,1/0),!0,1,new B.cz("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c1(n,D.b2Z,A.bf)}}
C.a7L.prototype={
U(){return new C.bjZ(null,null)}}
C.bjZ.prototype={
gb_s(){var w=this.a
if(w.e)w=D.eXL.q(0,w.c)||D.aON.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gb_s()){w=C.i6P(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bl(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bw_()},
B(d){var w,v=this,u=v.d
if(!v.gb_s()||u==null)return v.a.d
w=v.a
return B.c8(u,new C.efZ(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b_7.prototype={
B(d){var w=null
return B.au(C.b1c(!0,w,!1,C.er(A.L,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cl,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bf5.prototype={
jf(d){return C.a2q(this.b,new B.a5(0,0,0+d.a,0+d.b).cs(-this.c))},
jW(d){return d.b!==this.b||d.c!==this.c}}
C.bpU.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a5(0,0,0+a1.a,0+a1.b).cs(-this.d),g=this.b,f=C.a2q(g,h),e=a1.gdF(),d=new C.eVN()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aQj.aA(0,h))
a0.aJ(f,w)
g=C.a2q(g,h.cs(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bnE.gp(0)
a0.aJ(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f6Q.aA(0,h))
a0.aJ(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aJ(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aJ(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f6O.aA(0,h))
a0.aJ(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aJ(f,w)
g=C.a2q(g,h.cs(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aJ(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.bb.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aJ(f,g)
g=d.$1(e*0.016)
g.r=A.oQ.gp(0)
a0.aJ(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f6J.aA(0,h))
a0.aJ(f,w)
w=C.a2q(g,h.cs(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bbn.gp(0)
a0.aJ(w,v)
g=C.a2q(g,h.cs(e*0.03))
v=d.$1(e*0.004)
v.r=D.bee.gp(0)
a0.aJ(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aQj.aA(0,h))
a0.aJ(f,g)
for(g=B.xf(f),w=B.a([],x.X),g=new B.vG(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.k0(y.M));--q
g.jB()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bm(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jB()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jB()
m=w[q].MT(p*n/o).a
l=D.cZv[A.o.F(n,4)]
$.W()
p=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.aq(A.W,A.T,A.Y,A.Z,A.X)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.f6S.aA(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aJ(f,g)
g=d.$1(e*0.018)
g.sar(D.f6P.aA(0,h))
a0.aJ(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aJ(f,w)
g=C.a2q(g,h.cs(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nQ.gp(0)
a0.aJ(g,w)
break}},
aw(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqU.prototype={
a6(d,e){d.FX(C.a2q(this.b,new B.a5(0,0,0+e.a,0+e.b).cs(-this.c)),A.w,e.gdF()*0.05,!1)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.aLu.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aLX.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aNf.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.a83.prototype={}
C.O1.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aEt(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
gdY(){return this.c},
gTK(){return this.r},
gTL(){return this.w},
gLH(){return this.x}}
C.aEt.prototype={
a_(){var w,v=this
v.a1()
$.aV.bZ$.push(v)
C.fGZ()
$.hpE=new C.exz(v)
w=B.bl(null,A.Bg,null,1,null,v)
w.fk(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Iu()},
bv(d){var w,v,u=this
u.bE(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ox(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Iu()}},
j8(d){if(d===A.An||d===A.td||d===A.tc||d===A.py)this.tE()},
t(){var w,v,u,t=this
$.aV.hN(t)
w=t.at
if(w!=null)w.a4(0)
t.tE()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.h7()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bwa()},
gabF(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOR(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
ac9(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSo())return!1
return!0},
kl(){return this.ac9(null)},
aiS(){var w=this.c
if(w==null)return
w.J(x.q).f.R(D.f56)},
qn(){if(!this.kl())return!1
this.aiS()
return!0},
ar7(d){var w,v,u,t,s,r=this
if(r.ac9(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hoL(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zT(){return this.ar7(null)},
Iu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Iu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arp(k),$async$Iu)
case 3:j=e
w=4
return B.b(C.aq0(k),$async$Iu)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fWG(j,t.c0Y())
w=t.gabF()?5:7
break
case 5:r=t.gOR()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_l(r),$async$Iu)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bt(s,new C.etX())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bt(s,new C.etY())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.M)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yJ(m==null?"":m)!=null)continue
C.fHa(n,s)
p=!0}t.m(new C.etZ(t,s))
if(p||s.length>J.ad(j))t.tE()
case 1:return B.h(u,v)}})
return B.i($async$Iu,v)},
c0Y(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ky(w)&&w!==q}if(w)p.push(r)
return p},
com(d){var w,v=this,u=d.w
if(!C.ky(u)||u==="hati_kiapo_uongozi")return
v.aat(d)
w=A.d.bg(v.d,new C.evx(d))
u=v.d
if(w>=0){u[w]=d.hI()
v.d[w].f=new B.T(Date.now(),0,!1)}else A.d.c9(u,0,d.hI())
v.db=!1},
cis(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ky(s)&&s!=="hati_kiapo_uongozi"}if(s)u.com(t)
s=u.d
w=B.S(s)
v=w.k("cQ<1,i4>")
s=B.C(new B.cQ(new B.Z(s,new C.evl(),w.k("Z<1>")),new C.evm(),v),v.k("J.E"))
return s},
Ox(d){return this.bPV(d)},
tE(){return this.Ox(null)},
bPV(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ox=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cis()
w=3
return B.b(C.W_(d==null?t.a.c:d,s),$async$Ox)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.ar7(r)?4:5
break
case 4:w=6
return B.b(C.a7h(r),$async$Ox)
case 6:q=r.x
p=A.a.i(q==null?t.gOR():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.etk())
q=t.d
if(o>=0)q[o]=r.hI()
else A.d.c9(q,0,r.hI())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ox,v)},
pq(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.ky(u.w))===!0?A.hm:A.lX
v.at=B.cM(w,new C.ewF(v))},
aZW(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afa(u.hI(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a8(v.ay)},
cC_(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afa(w.e.hI(),w.f,w.r))
w.m(new C.exv(w,v.pop()))
w.pq()},
cns(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afa(w.e.hI(),w.f,w.r))
w.m(new C.evv(w,v.pop()))
w.pq()},
oi(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.exi(u))
if(w>=0){u.d[w]=u.e.hI()
u.d[w].f=new B.T(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.T(Date.now(),0,!1)},
XH(d){var w,v,u,t,s=this.gdu()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xy(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.h7()}w.a8(0)},
Kd(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdu()
if(l==null)return
w=l.z
v=B.S(w)
u=v.k("cQ<1,n>")
t=B.de(new B.cQ(new B.Z(w,new C.exj(),v.k("Z<1>")),new C.exk(),u),u.k("J.E"))
w=this.ch
v=B.a6(w).k("cs<1>")
v=B.C(new B.cs(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.M)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.h7()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.M)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c4(0,p,new C.exl(n))
s.c4(0,p,new C.exm())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
HO(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.esJ(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOR()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hI())}u.oi()
u.pq()},
ajd(d,e){var w,v,u,t,s=this
if(s.kl())return
w=s.XH(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ky(v.w))===!0
if(u){C.i6T(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdu()
if(t!=null)C.i6U(t,w.d+w.f*0.5)}}s.HO()
s.oi()
s.pq()
if(u&&s.c!=null)s.m(new C.exw())},
cD3(d,e){var w=this,v=w.gdu()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HO()
w.oi()
w.pq()},
gdu(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqt(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i4V(o)
if(w!=null)return w
v=q.gdu()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bZj(v)
t=q.bZi(v)
s=B.b0(v.e)
r=v.f
return new C.jH(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hIw(o)},
bZj(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.E(A.o.an(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bZi(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aJ},
afb(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabF()){w.c.J(x.q).f.R(D.f3I)
return}w.aat(d)
w.b09(C.bBS(d))
return}if(C.cgY(v)){w.aat(d)
w.b09(d)
return}w.m(new C.euE(w,d))},
arJ(){var w,v,u,t,s,r,q=this
q.a2g(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ky(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.esH(q))
if(r&&q.c!=null){u.toString
q.JN(u,s)}return}q.tE()
q.m(new C.esI(q))},
b08(d){this.aat(d)
this.a_J(d,!0)},
aat(d){if(!C.ky(d.w))return
C.fHa(d,this.d)},
a_J(d,e){return this.cel(d,e)},
b09(d){return this.a_J(d,!1)},
cel(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBS(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOR():r)
t.dy.W(0,q.toLowerCase())
C.aq1(t.a.c,q)}r=s}else r=d
w=C.cgY(r.w)?3:4
break
case 3:w=5
return B.b(t.aau(r),$async$a_J)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.ev0(l))
o=l.a.hI()
n=C.ky(o.w)&&C.i84(o)
t.m(new C.ev1(t,o,p))
if(n){m=A.d.bg(t.d,new C.ev2(o))
if(m>=0){t.d[m]=o.hI()
t.tE()}}if(!t.ac9(l.a))t.YQ()
r=!1
if(t.c!=null)if(!t.ac9(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.ar7(r)&&C.fDd(l.a)}else l=r
else l=r
if(l)t.c.J(x.q).f.R(D.f4i)
case 1:return B.h(u,v)}})
return B.i($async$a_J,v)},
aau(d){return this.bO0(d)},
bO0(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aau=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.ln(r.c,A.zE),$async$aau)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kX(!1,r,s.c,s.d,null,A.zE,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aau,v)},
o9(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cgY(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cgn(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o9,v)},
aeT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.euD(),s,null,!0,!0,x.H),$async$aeT)
case 3:if(t.c==null){w=1
break}t.arJ()
case 1:return B.h(u,v)}})
return B.i($async$aeT,v)},
aeS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cf(null,null,!1,null,new C.euA(),s,null,!0,!0,x.H),$async$aeS)
case 3:if(t.c==null){w=1
break}t.m(new C.euB())
t.arJ()
case 1:return B.h(u,v)}})
return B.i($async$aeS,v)},
YQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$YQ)
case 3:r=e
if(B.jM(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YQ)
case 4:s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(D.f2i)
case 1:return B.h(u,v)}})
return B.i($async$YQ,v)},
JN(d,e){return this.coL(d,e)},
coL(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JN=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agz(s,t.gEu(),t.gEt(),!0,e,t.d),$async$JN)
case 9:w=4
break
case 6:w=10
return B.b(C.agA(s,t.gEu(),t.gEt(),!0,e,t.d),$async$JN)
case 10:w=4
break
case 7:w=11
return B.b(C.agB(s,t.gEu(),t.gEt(),!0,e,t.d),$async$JN)
case 11:w=4
break
case 8:w=12
return B.b(C.agC(s,t.gEu(),t.gEt(),!0,e,t.d),$async$JN)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JN,v)},
c_R(){var w,v,u,t,s=this
if(!s.gabF()){s.c.J(x.q).f.R(D.f2v)
return}w=s.gOR()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agy(u,t,v,new C.etT(s),new C.etU(s),w)},
afc(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dH,null,new C.euK(u),s,!0,!0,!1,A.lE,!1,!1,x.N),$async$afc)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agC(s,u.gEu(),u.gEt(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agz(s,u.gEu(),u.gEt(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agA(s,u.gEu(),u.gEt(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agB(s,u.gEu(),u.gEt(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_R()
return B.h(null,v)}})
return B.i($async$afc,v)},
cdr(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZW()
w=C.cE()
v=C.BM(t,t,t,t,D.D3,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.euL(u,v))},
a9U(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qn()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.icA(s),$async$a9U)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d8(q.r,new C.esL())
t.d4(new C.esM(t,p,q,r))
s=t.c.J(x.q).f
o=r.r.length
s.R(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9U,v)},
ah9(d,e,f,g){var w=null,v=g?A.dr:A.bN,u=B.I(g?A.aZ:A.cr,A.r,1)
return B.hp(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a_I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qn()){w=1
break}s=t.jZ()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.euW(),q),q.k("J.E"))}o=s!=null&&s.b===D.lD?B.a([s],x.u):p
if(o.length===0){t.c.J(x.q).f.R(D.f4t)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.euX(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_I)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
aft(){return this.cek()},
cek(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aft=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qn()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.icm(s,t.f+1,o),$async$aft)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.V
q=B.jW(s,B.S(s).c)
p.a=A.d.bg(o.r,new C.euZ(q))
t.d4(new C.ev_(p,t,o,q,r))
t.c.J(x.q).f.R(D.f4S)
case 1:return B.h(u,v)}})
return B.i($async$aft,v)},
afA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qn()||!t.zT()){w=1
break}s=t.gdu()
if(s==null){w=1
break}r=s.z
q=B.S(r).k("Z<1>")
p=B.C(new B.Z(r,new C.evg(),q),q.k("J.E"))
if(p.length===0){t.c.J(x.q).f.R(D.f23)
w=1
break}o=new B.N(p,new C.evh(),B.S(p).k("N<1,L>")).f9(0,new C.evi())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.M)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.ba(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.K,null,new C.evj(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afA)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.evk())
case 1:return B.h(u,v)}})
return B.i($async$afA,v)},
aff(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aff=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qn()){w=1
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
return B.b(C.hqP(s,new C.Ez(r,q,p,o==null?"":o)),$async$aff)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.euM(m,n))
s=t.c.J(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agY(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.R(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aff,v)},
aan(){return this.bNl()},
bNl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aan=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qn()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.icz(s,t.f+1,l),$async$aan)
case 3:r=e
q=$.h_e
$.h_e=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.et1())
t.c.J(x.q).f.R(D.f1V)
w=1
break}if(!q){s=r.CW
s=C.hpC(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.et2(t,l,r))
t.c.J(x.q).f.R(D.f5l)
w=1
break}s=l.cx
if(s==null)s=A.V
p=B.jW(s,B.S(s).c)
s=l.r
m.a=A.d.bg(s,new C.et3(p))
o=s.length
t.d4(new C.et4(m,t,l,p,r))
n=s.length-o
s=t.c.J(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aan,v)},
aQt(d,e){if(e){this.ag2()
return}this.cdr(d,!1)},
bIS(){return this.aQt(null,!1)},
ag2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.bZ,null,new C.evq(t),r,!0,!0,!0,A.pl,!1,!1,x.N),$async$ag2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.evr(t,C.i4U(s).pD()))
case 1:return B.h(u,v)}})
return B.i($async$ag2,v)},
d4(d){var w=this
if(w.qn())return
w.HO()
w.aZW()
w.m(d)
w.Kd()
w.oi()
w.pq()},
a8p(){this.d4(new C.erG(this,D.mL))},
aRW(){var w=this.gdu()
if(w==null)return
this.d4(new C.et_(this,w))},
aR4(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.esY(this))},
b34(d,e){if(this.e==null||d===e)return
this.d4(new C.evz(this,d,e))},
O3(d){return this.bKT(d)},
bKT(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOR():s)
w=5
return B.b(C.aq_(t.a.c,r),$async$O3)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.arr(s)
w=6
return B.b(C.b1g(t.a.c,s),$async$O3)
case 6:if(t.c==null){w=1
break}t.m(new C.esU(t,d))
w=7
return B.b(t.tE(),$async$O3)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O3,v)},
coI(d,e){var w=this
if(d.z){w.aiS()
return}w.m(new C.evy(w,d,e))
w.pq()},
jZ(){var w,v,u,t,s,r=this.gdu()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
WI(d){return this.ch.c4(0,d.a,new C.esK(d))},
atA(d){return this.CW.c4(0,d.a,new C.etl())},
a2g(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.XH(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.ak$.d.c
if(u!=null)u.jQ()},
b6y(){return this.a2g(!0)},
a2c(d){var w,v,u=this
if(u.qn())return
if(!u.zT())return
w=u.XH(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.WI(w).saU(0,"")}u.m(new C.exg(u,d))
$.aV.x1$.push(new C.exh(u,d,w))},
b76(d){var w=this
if(d.b===D.cQ&&!w.kl()&&w.zT()){w.a2c(d.a)
return}w.azV(d.a)},
azV(d){var w,v,u,t,s,r=this
if(r.kl())return
w=r.r
if(w!=null&&w!==d){v=r.XH(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.ewG(r,s,d))
if(s||d==null){t=$.aV.ak$.d.c
if(t!=null)t.jQ()}},
aMJ(){this.d4(new C.erH(this))},
p9(d){return this.bzY(d)},
bzY(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$p9)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.erE(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p9,v)},
VR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GK(78,1920),$async$VR)
case 3:s=e
if(s==null||t.gdu()==null){w=1
break}t.d4(new C.eru(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VR,v)},
VL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdu()==null){w=1
break}w=3
return B.b(S.CU(t.a.c),$async$VL)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gam(s)){t.c.J(x.q).f.R(D.f5V)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.err(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VL)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdu()==null){w=1
break}t.d4(new C.ers(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VL,v)},
asy(){var w=this,v=w.r
if(v==null||w.gdu()==null)return
if(A.d.b3(w.gdu().z,new C.esW(v))){w.c.J(x.q).f.R(D.f4W)
return}if(w.w===v)w.a2g(!0)
w.d4(new C.esX(w,v))},
bH9(){var w=this.jZ(),v=w==null
if((v?null:w.b)===D.f7)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aNp(d,e){var w=this,v=w.jZ(),u=w.gdu(),t=w.e
if(t==null)return
w.d4(new C.es8(w,v,d,e,t,u))},
bBy(d){return this.aNp(d,null)},
a8H(d){return this.bBG(d)},
bBG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a7E.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o9(),$async$a8H)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jZ()
if(s!=null){r=s.b
if(r===D.cQ)t.bBy(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f7){r=d.c
t.aNp(r.j(0.88),r)}w=1
break}t.d4(new C.esd(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8H,v)},
a8G(d){return this.bBE(d)},
bBE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jZ()
r=t.gdu()
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
return B.b(t.o9(),$async$a8G)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.esb(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8G,v)},
bBo(d){var w=this.gdu()
if(w==null)return
this.d4(new C.es7(this,w,d))},
a_O(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.icv(r),$async$a_O)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oi()
t.m(new C.eva(t,s))
w=4
return B.b(t.tE(),$async$a_O)
case 4:if(t.c!=null)t.afb(s)
case 1:return B.h(u,v)}})
return B.i($async$a_O,v)},
aaf(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2g(!0)
t.oi()
s=t.c
s.toString
w=3
return B.b(C.Rf(s,q),$async$aaf)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.J(x.q).f
s.R(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaf,v)},
DD(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DD=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oi()
t=4
w=7
return B.b(C.aQ0(m),$async$DD)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPr(o,q,m.b),$async$DD)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DD,v)},
Fh(d,e){return this.cBp(d,e)},
cBp(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fh=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qn()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2g(!0)
t.oi()
s=h.a=t.e.hI()}else{r=A.d.bg(t.d,new C.exp(d))
s=h.a=r>=0?t.d[r].hI():d.hI()}s=s.w
q=s==null
p=C.i5S(q?"":s)
o=C.hox(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.S(s).k("Z<1>")
n=B.C(new B.Z(s,new C.exq(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cuD(n.length,o,s),$async$Fh)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i5M(h.a)
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
return B.b(t.cuC(n,o),$async$Fh)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h_(t.d,new C.exr(s))
s=h.a.b
w=11
return B.b(t.cuA(k.b,s),$async$Fh)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hI()
case 5:j=C.i5R(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.J(x.q).f.R(D.f66)
w=1
break}w=12
return B.b(t.cuB(j.a,s,o,j.c),$async$Fh)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.exs(h,t,i))
t.pq()
case 1:return B.h(u,v)}})
return B.i($async$Fh,v)},
cuD(d,e,f){var w=this.c
w.toString
return B.bT(A.K,null,new C.ewW(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuC(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.ewV(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cuA(d,e){var w=this.c
w.toString
return B.bT(A.K,null,new C.ewP(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cuB(d,e,f,g){var w=this.c
w.toString
return B.bT(A.K,null,new C.ewR(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abJ(){var w=null
return B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abK(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.bZ,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ax,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fgQ,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.j,0,A.p),1)],v),A.E,u,A.e,A.j,0,u,u)},
aVd(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.Uq,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aVg(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.ax,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aF(!1,A.a2,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nC,w,w,w),A.cO,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.j,0,A.p),1),B.X(A.yv,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etP(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bYf(d,e,f,g,h,i){return this.aVg(d,e,f,!1,g,h,i)},
auU(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.df,w,w,w),A.bA,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.ZX,w,w,w)},
aVf(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nA,w,w,w),new C.etO(d,f),v)},
aVe(d,e){return this.aVf(d,e,null)},
K4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pd(l,s.c,s.d),$async$K4)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.f5(l,new C.ewH());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aN(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9X(l.charCodeAt(0)==0?l:l,r.b),$async$K4)
case 4:l=t.a
w=5
return B.b(B.pc(l.c,l.d),$async$K4)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K4,v)},
I9(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pd(q,s.c,s.d),$async$I9)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9X(A.S.ao(r.ag(),null),r.b+".json"),$async$I9)
case 4:q=t.a
w=5
return B.b(B.pc(q.c,q.d),$async$I9)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I9,v)},
b6h(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oi()
u.tE()
w=u.c
w.toString
v=B.e_(new C.exf(u,t),!1,null,x.z)
B.a3(w,!1).cg(v)},
Hn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$Hn)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fHn(),$async$Hn)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i8E(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.av,null,new C.erz(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hn)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.erA(t,s))
w=1
break}if(p==="split")t.d4(new C.erB(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hn,v)},
Nq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}w=3
return B.b(t.o9(),$async$Nq)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aQ_(s,null,null),$async$Nq)
case 4:r=e
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.erF(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nq,v)},
b2S(d){var w=this.e
if(w==null||!C.ky(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOJ(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aQ_(s,t==null?null:B.b0(t),u)},
a8n(d){return this.bzP(d)},
bzP(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(D.f6l)
w=1
break}w=3
return B.b(t.aOJ(),$async$a8n)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.erw(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8n,v)},
agM(d){return this.cnv(d)},
cnv(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(D.f5t)
w=1
break}w=3
return B.b(t.aOJ(),$async$agM)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d4(new C.evw(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
ca8(){var w,v,u=this
if(u.kl())return
w=new B.T(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bC(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cAt()}},
cAt(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.exn(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bYA(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.etS(this,r,u.d))},
c2f(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fDZ(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lc&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c2g(d){var w
if(this.kl())return!1
w=this.e
if((w==null?null:C.ky(w.w))!==!0)return!0
if(!this.zT())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fDZ(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lc&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Ny(d){return this.bC5(d)},
bC5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ny=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qn()){w=1
break}if(!t.zT()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(D.f4j)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aq3(p),$async$Ny)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.J(x.q).f.R(D.f4Y)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7h(r)
w=1
break}t.m(new C.esh(t,d,o))
t.oi()
$.aV.x1$.push(new C.esi(t))
case 1:return B.h(u,v)}})
return B.i($async$Ny,v)},
VP(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$VP)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCy(),$async$VP)
case 4:s=e
if(s==null||t.gdu()==null){w=1
break}t.d4(new C.ert(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VP,v)},
Oi(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o9(),$async$Oi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jZ()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fHe(r),$async$Oi)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.etj(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oi,v)},
j5(d){this.d4(new C.erC(this,d))},
qd(d){return this.bBh(d)},
bBh(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qn()){w=1
break}m=!D.aOQ.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o9(),$async$qd)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hn()
w=1
break A
case"sign_paper":t.Nq()
w=1
break A
case"hd_photo":t.VP()
w=1
break A
case"sharpen":t.Oi()
w=1
break A
case"print":t.DD()
w=1
break A
case"rotate":s=t.jZ()
if(s!=null)t.d4(new C.erL(s))
w=1
break A
case"text_box":t.aMJ()
w=1
break A
case"picture":t.VR()
w=1
break A
case"present":t.b6h()
w=1
break A
case"new_slide":t.a8p()
w=1
break A
case"export_json":t.I9()
w=1
break A
case"outline_share":t.K4()
w=1
break A
case"flashcard_tool":t.vh(D.If)
w=1
break A
case"quiz_tool":t.vh(D.Ig)
w=1
break A
case"worksheet_tool":t.vh(D.Ih)
w=1
break A
case"duplicate_el":s=t.jZ()
if(s==null){w=1
break A}t.d4(new C.erM(t,s))
w=1
break A
case"delete_el":t.asy()
w=1
break A
case"bring_fwd":s=t.jZ()
if(s==null||t.gdu()==null){w=1
break A}t.d4(new C.erN(t,s))
w=1
break A
case"send_back":s=t.jZ()
if(s==null||t.gdu()==null){w=1
break A}t.d4(new C.erY(t,s))
w=1
break A
case"align_left":s=t.jZ()
if(s!=null)t.d4(new C.es0(s))
w=1
break A
case"align_center":s=t.jZ()
if(s!=null)t.d4(new C.es1(s))
w=1
break A
case"align_right":s=t.jZ()
if(s!=null)t.d4(new C.es2(s))
w=1
break A
case"grayscale":case"brighten":t.Oi()
w=1
break A
case"flip_h":s=t.jZ()
if(s!=null)t.d4(new C.es3(s))
w=1
break A
case"flip_v":s=t.jZ()
if(s!=null)t.d4(new C.es4(s))
w=1
break A
case"rectangle":t.p9(D.bg)
w=1
break A
case"circle":t.p9(D.eQ)
w=1
break A
case"triangle":t.p9(D.jU)
w=1
break A
case"arrow":t.p9(D.D5)
w=1
break A
case"line":case"divider":t.p9(D.fx)
w=1
break A
case"word_count":r=t.gdu()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f5(q,new C.es5()),o=0;p.C();){n=A.a.fI(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.es6(),B.S(n).k("Z<1>")).gL(0)}t.c.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.j5(C.iY(A.L,!1,t.gqt().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mM,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.j5(C.iY(A.L,!1,t.gqt().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dg,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j5(C.iY(A.bh,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uG,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j5(C.iY(A.bh,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.uF,0.8,0.1,0.22))
w=1
break A
case"quote":t.j5(C.iY(A.L,!1,4279310375,A.aF,24,A.cE,A.a7,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dg,0.8,0.1,0.3))
w=1
break A
case"citation":t.j5(C.iY(A.bh,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.uG,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j5(C.iY(A.dT,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cE(),C.bCA(),0,D.dg,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j5(C.iY(A.dT,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cE(),"Page "+(t.f+1),0,D.dg,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.erO(t))
w=1
break A
case"footer_bar":t.d4(new C.erP(t))
w=1
break A
case"highlight":t.d4(new C.erQ(t))
w=1
break A
case"redact":t.d4(new C.erR(t))
w=1
break A
case"callout":t.d4(new C.erS(t))
w=1
break A
case"checkboxes":t.j5(C.iY(A.bh,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dg,0.8,0.1,0.2))
w=1
break A
case"table":t.j5(C.iY(A.bh,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dg,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.erT(t))
w=1
break A
case"letter":t.j5(C.iY(A.bh,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cE(),C.bCA()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j5(C.iY(A.bh,!1,4279310375,A.aF,22,A.bp,A.O,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uG,0.8,0.1,0.12))
w=1
break A
case"toc":t.j5(C.iY(A.bh,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dg,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j5(C.iY(A.bh,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Signature: _________________________",0,D.dg,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j5(C.iY(A.bh,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cE(),"Initials: ______",0,D.dg,0.3,0.65,0.78))
w=1
break A
case"approved":t.j5(C.iY(A.L,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cE(),"APPROVED",0,D.mM,0.32,0.62,0.08))
w=1
break A
case"draft":t.j5(C.iY(A.L,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cE(),"DRAFT",0,D.dg,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j5(C.iY(A.L,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dg,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.erU(t))
w=1
break A
case"progress":t.d4(new C.erV(t))
w=1
break A
case"stars":t.j5(C.iY(A.L,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.qp,0.8,0.1,0.4))
w=1
break A
case"equation":t.j5(C.iY(A.L,!1,4279310375,A.aF,32,A.bp,A.O,0.14,C.cE(),"y = mx + b",0,D.dg,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j5(C.iY(A.L,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uF,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.erW(t))
w=1
break A
case"compare":t.d4(new C.erX(t))
w=1
break A
case"link_text":t.j5(C.iY(A.bh,!1,4280640491,A.mQ,16,A.bp,A.a7,0.1,C.cE(),"https://example.com",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"phone":t.j5(C.iY(A.bh,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cE(),"(555) 123-4567",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"email":t.j5(C.iY(A.bh,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cE(),"name@email.com",0,D.dg,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.erZ(t))
w=1
break A
case"cover_page":r=t.gdu()
if(r==null){w=1
break A}t.d4(new C.es_(t,r))
w=1
break A
case"invoice":t.j5(C.iY(A.bh,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"resume":t.j5(C.iY(A.bh,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dg,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j5(C.iY(A.bh,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bCA()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dg,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j5(C.iY(A.bh,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dg,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j5(C.iY(A.bh,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dg,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qd,v)},
cu4(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eXH.q(0,this.z)},
cu3(d){if(this.jZ()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7Y(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.I(u,A.r,o&&e?2:1)
t=C.i8t(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ae:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Os,A.f,p,p,D.Em,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fv,B.aB(p,new B.an(A.a_,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bNC(d){var w,v=null,u=this.jZ()
if(u==null)return A.bJ
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.v(w,new B.N(D.QY,new C.eti(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vh(d){return this.bzX(d)},
bzX(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aOK.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o9(),$async$vh)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.erD(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vh,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eWo
w=h.e
if(w==null)return h.bDQ()
v=h.gdu()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aH(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eL,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bZ:D.bdE
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSo()}else j=!1
if(j)k.push(new C.a7M(h.a.c,!1,h.e.gbaa(),h.gca5(),g))
else if(s&&h.e!=null&&!h.kl()&&C.cgY(h.e.w)){j=h.a
k.push(new C.a7M(j.c,j.d,g,h.gcbe(),g))}if(s)k.push(h.bNx(w,t,r))
if(s&&h.kl()){w=t?A.fE:A.ky
j=B.m(14)
i=B.I(A.bi.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bR_,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fE,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bo,A.iP,g,g,g))}w=!n
if(w&&!h.kl())k.push(h.c3c(t,r))
if(w&&h.kl())k.push(h.cBq(t))
if(r&&h.jZ()!=null&&w&&!h.kl())k.push(h.c37(t))
j=B.a([],l)
if(q&&w)j.push(new B.a8(132,g,h.b5L(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a8(g,72,h.b5L(t,!1),g))
i.push(B.E(new B.bK(A.b3,g,g,h.bF9(v,t,!s||p),g),1))
if(h.cu4(r)&&u&&s&&!h.kl())i.push(h.c9S(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kl()&&h.cu3(!1))j.push(new B.a8(240,g,h.bQi(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a8(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c38(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a_,g,A.aa,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bDQ(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bZ:A.bN
v=r.a.e
u=r.c97(A.bi,A.q7,new C.esl(r),r.gcdo(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aMr(A.bi,A.hC,"Blank Presentation",new C.esm(r)),1),A.as,B.E(r.aMr(A.b_,A.we,"Class Template",new C.esn(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bv,s,A.mP,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ad],t)
t=r.d
if(t.length===0)u.push(r.bAK(w))
else{t=new B.i2(t,B.S(t).k("i2<1>"))
A.d.v(u,t.gdR(t).dD(0,new C.eso(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.ct(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLG(){this.m(new C.esZ(this))
var w=this.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900){w=$.aV.ak$.d.c
if(w!=null)w.jQ()}},
afu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jZ()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.K,null,new C.ev9(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afu,v)},
AR(d,e){return this.cuq(d,e)},
cuq(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AR=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hZ(D.Xh,!0,"Dismiss",j,new C.ewI(),new C.ewJ(d,e),A.iN,!0,x.N),$async$AR)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiS()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSo()){r.aiS()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aQ0(d),$async$AR)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPr(j,q,d.b),$async$AR)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fh(d,!1),$async$AR)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hZ(D.Xh,!0,"Dismiss",j,new C.ewK(),new C.ewL(d),A.a2,!0,x.y),$async$AR)
case 20:if(g===!0)r.O3(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agw("Rename presentation",d.b),$async$AR)
case 24:l=g
if(l!=null)r.coI(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ewM(r,k))
r.pq()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AR,v)},
b0O(d,e){var w=null
return B.bM(!1,D.fFZ,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bi,w,w,w,A.az,w,A.ls,w,w,w,w,w,A.ki,w,w))},
bAK(d){var w=this.fy
w===$&&B.c()
return B.c8(w,new C.erI(this,d),null)},
bJM(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.esN(),x.dv).c0(0,new C.esO()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.aie,this.aN0(v,e,new C.esP(),f),null)},
aN0(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ej)
t=e.j(g?0.14:0.1)
s=new B.aQ(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ae:A.br,n,n,n,10),A.qw],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cb(A.aM,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bJ(r,r,r,r),new B.bk(s,s,s,s),n,n,A.n),n,n,n,n,A.nl,n,n,n))
A.d.v(l,u)}return B.eN(A.a3,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e0)},
bAI(d,e,f){return this.aN0(d,e,null,f)},
bJO(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.djM
else if(v==="hati_kuhoweya")w=D.d55
else{if(v==="hati_kiapo_uongozi")v=D.cSw
else v=C.ky(v)?D.cZQ:A.Qz
w=v}v=this.fy
v===$&&B.c()
return B.c8(v,new C.esS(this,f,d,e,w),null)},
c38(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jZ()
if(i==null||i.b!==D.cQ)return A.bJ
w=k.WI(i)
v=k.atA(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Bq,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b0,B.bM(!1,D.fBu,j,j,!0,j,j,new C.eui(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.I(A.bi.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hb,B.c1(new B.D(A.eP,B.aM(j,A.V,!0,j,!0,A.t,j,B.aO(),w,A.bi,j,j,j,j,2,D.bX_,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wK,j,j,j,j,j,j,!1,"\u2022",j,new C.euj(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a5,A.zW,A.ao,j,A.TT,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aJ:A.aL,A.r,1)
n=B.E(B.ce(B.B(B.a([k.u2(G.Nw,j,new C.euk(k,i),d),k.u2(G.a05,j,new C.eul(k,i),d),k.u2(I.amv,j,new C.eum(k,i),d),k.u2(I.a0N,j,new C.eun(k,i),d),k.u2(k.bAG(i.as),j,new C.euo(k,i),d),k.u2(D.anE,j,new C.eup(k,i),d),k.u2(D.anD,j,new C.euq(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.t,j,A.y,j,j,j,j,A.aM),1)
m=A.k.O(i.w)
return B.bU(0,B.aF(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(H.ain,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lt,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c37(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jZ()
if(m==null)return A.bJ
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aJ:A.aL,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cv,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4o(A.j9,"Edit",new C.eu3(o,m),d,!0))
if(w===D.lD)p.push(o.b4o(A.GG,"Shape & ring",new C.eu4(o),d,!0))
p.push(o.u2(A.Cc,"Format",new C.eu5(o),d))
if(v)A.d.v(p,B.a([o.u2(G.Nw,n,new C.eu6(o,m),d),o.u2(D.anE,n,new C.eu7(o,m),d),o.u2(D.anD,n,new C.eu8(o,m),d)],q))
p.push(A.b0)
p.push(o.cse(A.ec,n,o.gaR2(),d,!0))
p.push(o.u2(A.hD,"Done",new C.eu9(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bp,A.lt,n,n,n)},
bAG(d){switch(d.a){case 2:return D.a0K
case 1:case 5:return D.a0M
default:return D.a0L}},
c41(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dT
default:return A.bh}},
azU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ae:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.H1:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ej,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.q3,B.aF(!1,A.a2,!0,n,B.aL(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
u2(d,e,f,g){return this.azU(d,e,f,g,!1,!1)},
b4o(d,e,f,g,h){return this.azU(d,e,f,g,h,!1)},
cse(d,e,f,g,h){return this.azU(d,e,f,g,!1,h)},
bNx(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mX],m)
w=B.I(e?A.aJ:A.nP,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bi.j(e?0.18:0.1),A.cv,18)],x.V)
u=p.a2H(A.eI,"Back",p.gbGU(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dr(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bX:A.al,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tK,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.kl()){u=p.a2H(A.rn,"Undo",p.ax.length===0?o:p.gcBZ(),e)
A.d.v(r,B.a([u,p.a2H(D.bKy,"Redo",p.ay.length===0?o:p.gcnr(),e)],q))}r.push(p.a2H(A.yt,"PDF",new C.etb(p),e))
r.push(p.a2H(A.hE,"Download as video",new C.etc(p),e))
if(!p.kl())r.push(B.BZ(o,o,B.X(A.o8,e?A.ae:A.br,o,o,o,o),new C.etd(p),A.J,new C.ete(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a2,!0,o,B.aL(!1,B.m(14),!0,B.eF(D.eh_,o,new B.o(o,o,o,B.m(14),o,L.H1,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAI(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ax,A.aD,A.x,m,o,o),A.n),o,o,o,D.bvk,D.bAB,o,o,o)},
cBq(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.I(d?A.cp:A.aL,A.r,1)
return B.p(v,B.ce(B.B(B.a([w.iQ(A.ui,"Print",new C.ext(w),d),w.iQ(A.yt,"Download PDF",new C.exu(w),d),w.iQ(A.qc,"Present",w.gaAI(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.t,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bo,G.ak_,v,v,v)},
a2H(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dn
else w=g?A.ae:A.aJ
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c3c(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.I(d?A.cp:A.aL,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eut(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.ajF,new B.fd(new C.euu(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vU,r.ah9(A.l3,"Ending celebration",r.gcdB(),d),q),new B.D(R.vU,r.ah9(A.GG,"Logo ring & frame",r.gcei(),d),q)],x.p):A.hT)
A.d.v(t,w?B.a([new B.D(R.vU,r.ah9(A.no,"Look and feel",r.gcej(),d),q),new B.D(R.vU,r.ah9(A.p6,"Edit this slide's text",r.gceQ(),d),q)],x.p):A.hT)
t.push(new B.D(R.vU,B.hp(B.aB(q,B.p(q,D.eVO,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lo.j(0.4),A.J,10)],x.V),D.apA,A.n),q,34,q,q,A.fQ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euv(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ce(B.B(t,A.m,q,A.e,A.j,0,q,q),A.t,q,A.y,q,D.bB3,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ce(r.cpS(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bo,q,q,q,q)},
cpS(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.ddc[v]
u.a=null
s=u.a=t.b
w.push(e.lJ(e.crE(s),t.a,new C.evS(u,e),a3,D.aOK.q(0,s)))}w.push(e.iQ(A.l5,"Notes Slide",new C.evT(e),a3))
w.push(e.lJ(A.GF,"Quiz",new C.evU(e),a3,!0))
w.push(e.lJ(M.Gh,"Worksheet",new C.ew4(e),a3,!0))
w.push(e.lJ(V.GL,"Flashcard",new C.ewf(e),a3,!0))
w.push(e.lJ(A.Oj,"Lab Report",new C.ewq(e),a3,!0))
w.push(e.lJ(A.ua,"Rubric",new C.ewx(e),a3,!0))
w.push(e.lJ(A.p1,"Minutes",new C.ewy(e),a3,!0))
w.push(e.lJ(A.o7,"Syllabus",new C.ewz(e),a3,!0))
w.push(e.lJ(A.a1i,"Timeline",new C.ewA(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dew[v]
w.push(e.lJ(r.b,r.c,new C.ewB(e,r),a3,!D.aOQ.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iQ(A.yN,a0,e.gaMI(),a3),e.iQ(A.uf,"Picture",new C.evV(e),a3),e.iQ(A.yH,"Bio link",new C.evW(e),a3),e.iQ(A.a1h,"Table",new C.evX(e),a3),e.iQ(A.On,"Sticky",new C.evY(e),a3),e.iQ(A.ue,"Divider",new C.evZ(e),a3),e.iQ(A.Cd,"Header",new C.ew_(e),a3),e.lJ(A4.w3,"Rectangle",new C.ew0(e),a3,!0),e.lJ(A.rg,"Circle",new C.ew1(e),a3,!0),e.lJ(A.a0D,"Triangle",new C.ew2(e),a3,!0),e.lJ(A.kE,"Arrow",new C.ew3(e),a3,!0),e.lJ(D.bJ2,"Parallelogram",new C.ew5(e),a3,!0),e.lJ(D.bLq,"Hexagon",new C.ew6(e),a3,!0),e.lJ(A.ue,"Line",new C.ew7(e),a3,!0),e.lJ(A.yt,"PDF",new C.ew8(e),a3,!0),e.lJ(O.a1r,"Signature",new C.ew9(e),a3,!0),e.iQ(A3.C0,"Quote",new C.ewa(e),a3),e.iQ(D.a0d,a1,new C.ewb(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aNx("Wide 16:9",D.D3,a3),e.aNx("Short 9:16",D.ol,a3),new B.D(A.fv,B.mP(D.bNA,d,D.fxN,d,new C.ewc(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bH8("This slide",!e.Q,a3,new C.ewd(e)),A.bn,e.aPJ("All slides",e.Q,a3,new C.ewe(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bH9()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bX:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a3j,new C.ewg(e),n),n.k("ak.E"))
n=B.ce(B.B(n,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dfw[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dn:A.aZ,1.5,A.r,-1)
l.push(new B.D(A.fv,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bJ(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ewh(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.ce(B.B(l,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDS()
g=B.S(h).k("N<1,D>")
h=B.C(new B.N(h,new C.ewi(e,a3),g),g.k("ak.E"))
return new B.a8(w.a.a-20,d,B.x(B.a([t,A.N,q,A.am,p,A.N,o,A.au,n,A.N,m,A.au,l,A.N,j,A.au,B.ce(B.B(h,A.m,d,A.e,A.j,0,d,d),A.t,d,A.y,d,d,d,d,A.aM),A.am,e.c_Y(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.jZ()
w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=new C.evR(e)
t=new C.ewC(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QY,f.dy,new C.ewj(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdu()
q=q==null?d:q.r
p.push(t.$4(D.QY,q,new C.ewk(e,u),A.bi))
return new B.a8(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iQ(A.l5,w,new C.ewl(e),a3),e.iQ(A.ui,"Print deck",new C.ewm(e),a3),e.lJ(D.alz,"Export JSON",new C.ewn(e),a3,!0),e.iQ(A.fS,"Duplicate Slide",e.gaRV(),a3),e.iQ(A.ec,a2,e.gaR3(),a3),e.cvM(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jZ()
w=x.p
u=B.a([e.iQ(D.a0d,a1,new C.ewo(e),a3),e.iQ(A.fS,"Duplicate",e.gaRV(),a3),e.iQ(A.ec,a2,e.gaR3(),a3),e.iQ(A.qc,"Present",e.gaAI(),a3),e.iQ(A.Ca,a0,e.gaMI(),a3),e.iQ(A.C4,"Fit Text",new C.ewp(e),a3),e.iQ(A.yt,"Download PDF",new C.ewr(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iQ(A.ke,"Transfer",new C.ews(e),a3))
if(f!=null){w=B.a([A.ab,e.iQ(G.Nw,"Bold",new C.ewt(e,f),a3),e.iQ(G.a05,"Italic",new C.ewu(e,f),a3),e.iQ(G.ala,"Underline",new C.ewv(e,f),a3),e.iQ(Ae.Nx,"Bullets",new C.eww(e,f),a3),e.bQ1(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNC(a3))
w.push(e.iQ(D.bHJ,"Delete",e.gaR2(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aNx(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.ol
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a96,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bMN],v))
return new B.D(A.fv,B.j0(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.esg(this,w,e),s===e,A.bi.j(0.25),t,t,t),t)},
cvM(d){var w,v,u,t,s,r=this,q=null,p=r.gdu()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.aZ:A.cr,A.r,1)
u=B.m(8)
t=B.X(A.Gf,d?A.aB:A.al,q,q,q,14)
s=B.aI(q,q,q,q,D.aoA,q,q,q,new C.ewZ(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.aor,q,q,q,new C.ex_(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FW,A.mz,q,q,q)},
crE(d){switch(d.a){case 6:return V.GL
case 7:return A.GF
case 8:return M.Gh
case 4:return A.Cd
default:return A.l5}},
bQ1(d,e){var w=null,v=B.I(e?A.aZ:A.cr,A.r,1),u=B.m(8),t=B.aI(w,w,w,w,D.aoA,w,w,w,new C.eto(this,d),w,w,w,w,w,A.cc),s=A.k.O(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.aor,w,w,w,new C.etp(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vT,A.mz,w,w,w)},
c_Y(d){var w=null
return B.BZ(B.Dn(B.X(A6.a0g,d?A.ae:A.br,w,w,w,16),w,w,D.fDl,w,w,w),w,w,new C.etW(),A.J,this.gbBn(),A.cm,"Slide layout",x.fO)},
lJ(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.I(g?A.dr:A.aL,A.r,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bi,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Os,A.f,w,w,D.Em,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fv,B.aF(!1,A.a2,!0,w,B.aL(!1,v,!0,B.eF(new B.D(A.hb,B.x(B.a([new B.an(A.a_,w,A.aa,A.f,q,w),A.cO,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iQ(d,e,f,g){return this.lJ(d,e,f,g,!1)},
b5L(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aM
v=B.hM(t,new C.exa(u,s,e,d),s.r.length,A.cm,t,w,new C.exb(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.kl())w.push(new B.D(A.cm,B.HS(E.aoN,new C.exc(u),B.nG(t,A.bi,t,t,t,t,t,t,t,t,t,t,E.aPu,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bF9(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.ol?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bK(A.b3,v,v,new B.fK(w,B.aB(v,B.cC(new C.esF(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.esG(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bFb(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ky(a9.w))===!0,b1=b0&&C.fDZ(b3),b2=b0&&b3.b===D.lc&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kl())v=!b0||a7.c2g(b3)
else v=!1
if(!a7.kl())u=!b0||a7.c2f(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ca:A.bi
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h2f(b3))o=a8
else if(p&&!a7.kl())o=a7.gca7()
else o=a7.kl()?a8:new C.est(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.cg:A.jL
i=w&&C.h2f(b3)&&a7.zT()?new C.esu(a7,b3):a8
h=v&&b3.b===D.cQ?new C.esv(a7,b3):a8
g=u?new C.esw(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.lc?A.K:a8
if(b1){a1=a7.kl()?"":"Tap to sign"
a1=B.au(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zT()
a3=b3.b===D.cQ
a4=a3?a7.WI(b3):a8
a5=a3?a7.atA(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.esx(a7,b3):a8
a3=v&&a3?new C.esy(a7,b3):a8
a6=C.b1c(q,a4,a1,b3,a5,a2,a3,new C.esz(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bPB,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esA(a7,b3,b4,b5),a8,a8,new C.esB(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kl()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bQh,A.f,a8,a8,new B.o(A.dt,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbYz(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kl()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bRS,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esC(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.au(B.aB(a8,B.p(a8,D.fMj,A.f,a8,a8,new B.o(A.bi,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l1,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.esD(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eH(A.A,f,new B.an(A.a_,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.cz("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPJ(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bi.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bi:A.bz,A.r,1)
if(e)t=A.bi
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.Os,A.f,r,r,D.Em,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bH8(d,e,f,g){return this.aPJ(d,e,f,g,!1)},
c9S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.ba(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xc:l
if(f)s=new B.bJ(new B.ay(e?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rI,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ae:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b0,m.b0O(e,new C.eux(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bX:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.V,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.m(10),A.dj),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.euy(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a5,l,A.ao,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aTc(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jZ()
if(a2==null)return A.bJ
w=new C.etC(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dP:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b0,a0.b0O(a3,a0.gbLF())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fyi,B.E(B.l2(a1,a1,a1,u,0.05,new C.etD(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fKK,B.E(B.l2(a1,a1,a1,t,0.05,new C.etE(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.frY,B.E(B.l2(a1,a1,a1,96,10,new C.etF(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lD
if(l||n===D.lc||n===D.Sk)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fE6,B.E(B.l2(a1,a1,a1,s,0,new C.etG(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fM1,B.E(B.l2(a1,a1,a1,r,0,new C.etH(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cw[j]
i.a=null
g=h.a
i.a=g
k.push(B.j0(a1,a1,a1,new B.y(h.b,a1,A.pq,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etI(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bB,k,A.bs,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cr[j]
f.a=null
g=e.a
f.a=g
h.push(B.j0(a1,a1,a1,new B.y(e.b,a1,A.pq,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.etJ(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bX(A.bB,h,A.bs,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.etK(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bX(A.bB,l,A.bs,6,6),A.ad,B.hes(new C.etL(w,a2),D.ctw,B.ey([a2.as],k),!0,a1,k)],p))}if(n===D.f7){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.etM(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bX(A.bB,m,A.bs,0,6)],p))}o.push(A.ad)
o.push(B.dp(D.bRE,D.fG9,new C.etN(a0,a5),B.bn(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.ct(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cp:A.c
p=a4?A.xc:a1
if(a4)o=new B.bJ(new B.ay(a3?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rI,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.FG,a1,a1,a1)},
bQi(d){return this.aTc(d,!1,!1,null)},
c97(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c8(p,new C.etQ(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fhK,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.E(B.x(B.a([w,A.bA,A.cO,r.bAI(D.cXh,d,B.P(v).ax.a===A.I)],u),A.E,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hp(B.aF(!1,A.a2,!0,q,B.aL(!1,q,!0,B.eF(D.f0G,q,new B.o(q,q,B.I(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.eq,8)],p),D.apF,A.a6),q,q,q),A.cK,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.ba1,D.bar],v):B.a([A.c,A.ky],v)
u=B.I(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cv,14)],p),new B.a9(A.ax,A.aD,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aMr(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c8(w,new C.erp(this,g,d,e,f),null)},
agw(d,e){return this.clF(d,e)},
clF(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.ba(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.cf(null,null,!0,null,new C.evu(d,q),p,null,!0,!0,x.N),$async$agw)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
Q_(d){var w=d.bU()
return""+B.bI(w)+"/"+B.bV(w)+"/"+B.bC(w)}}
C.afa.prototype={}
C.az3.prototype={
U(){return new C.bcI(null,null)}}
C.bcI.prototype={
gcy4(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bI(u)+"/"+B.bV(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bl(u,A.q0,u,1,u,v)
w.fk(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bl(u,D.btQ,u,1,u,v)
w.cr(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.buc()},
J5(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.av(0,new B.hU(w,v,A.ct).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.D(D.bzq,B.c8(new B.h9(B.a([u,w],x.dS)),new C.d2T(this),v),v),v,v,v)}}
C.bcW.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aJ,A.r,1),t=x.p
return B.au(new B.D(D.bzH,B.aF(!1,A.a2,!0,w,B.p(w,B.bx(B.m(22),B.x(B.a([new B.D(D.byS,B.x(B.a([B.p(w,D.bQn,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.fIj,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fiT,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bsS,B.B(B.a([B.E(B.bM(!1,D.fww,w,w,!0,w,w,new C.d3e(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.nh,w,A.op,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fBP,w,w,!0,w,w,new C.d3f(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.nh,w,A.op,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.aq),A.f,w,A8.W1,new B.o(A.av,w,u,v,D.cXC,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.JT.prototype={
U(){return new C.bcH()}}
C.bcH.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dy,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.dd(B.aB(o,B.vv(B.db(o,B.B(B.a([r,A.as,new B.dr(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.P,0,o,o),o,o,A.b8,new B.o(n,o,u,v,t,o,A.n),A.eM,o,o,o,A.ni,o,o,1/0),A.ct,A.jt,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d2O(p,d),new C.d2P(p),new C.d2Q(p),new C.d2R(p),o,o,o,!1,A.a4),k),new B.t(0,(1-k)*16))}}
C.PH.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.r,1.2),p=x.p
return B.aF(!1,A.a2,!0,t,B.aL(!1,s,!0,new B.D(A.eP,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ax,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nC,v,v,v),A.bA,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.j,0,A.p),1),B.X(A.eD,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_w.prototype={
U(){return new C.aEw(D.dg,null,null)}}
C.aEw.prototype={
gYX(){var w,v=this,u=v.w
if(u===$){w=B.bl(null,D.bto,null,1,null,v)
v.w!==$&&B.bH()
v.w=w
u=w}return u},
b6b(d){if(!this.a.c.ay)return
this.x=d
this.gYX().iK(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.avY(D.f77)
C.i5p()
v.Ro()},
t(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gYX().t()
v=w.z
if(v!=null)v.a4(0)
C.avY(D.f78)
C.i5s()
w.bwb()},
cAQ(){B.jD()
this.m(new C.ey9())
var w=this.c.J(x.q).f
w.a4S()
if($.bkk)w.R(D.f3Z)},
Ro(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dE(0,0,0,0,0,A.o.E(C.hcD(u,w),1,120)),new C.ey_(v))},
cAv(){var w,v=this
v.m(new C.ey8(v))
if(v.r)v.Ro()
else{w=v.f
if(w!=null)w.a4(0)}},
gaV6(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cuw(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.ey0(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lr,new C.ey1(w))},
awq(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.exW(u))
u.Ro()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaV6()){u.cuw()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.exX(u,A.o.F(w+1,s)))
u.b6b(w)
u.Ro()}},
ckj(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.exY(v))
v.Ro()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.exZ(v,w,t))
v.b6b(w)
v.Ro()}},
cw1(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nm(d,new B.cz(u,x.ac))}w=v.cw2(u)
u=v.d
u===$&&B.c()
return B.qq(new B.nm(d,new B.cz(u,x.ac)),w,new C.ey6(),A.b8,A.b8,new C.ey7(v))},
cw2(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.btM
case 16:return A.kB
case 18:return A.nd
default:return A.nf}},
cw0(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.uP,A.J,w),w.k("bf<bL.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.Sz,A.J,w),w.k("bf<bL.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.hY,A.J,w),w.k("bf<bL.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.rH,A.J,w),w.k("bf<bL.T>")),t,!0)
case 6:case 16:w=x.b
return B.iq(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bL.T>")))
case 7:w=x.b
return B.iq(A.A,new B.d0(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bL.T>")))
case 8:return B.c8(s,new C.ey2(s),e)
case 9:return B.c8(s,new C.ey3(s),e)
case 10:return B.c8(s,new C.ey4(s),e)
case 11:return B.c8(s,new C.ey5(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.iq(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bL.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jz(B.jr(e,new B.bf(s,new B.bp(A.uP,A.J,v),v.k("bf<bL.T>")),t,!0),A.t,new C.bro(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.Sz,A.J,w),w.k("bf<bL.T>")),t,!0)
case 19:w=B.dk()
w.mL((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jT(v,u,v,1)
return B.fo(A.A,B.dd(e,s.gp(0)),t,w,!0)
case 20:return B.eH(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.aoy(B.c8(n.gYX(),new C.eya(n,v,w),m),m),A.t,m)}else{t=B.rH(new C.IR(w,!0,!1,m))
l=B.b0(w.e)
u=n.cw1(B.el(B.jz(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hcD(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oz,m,m,m),A.bn,D.bSI],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.h2,m,m,m)
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
l.push(B.bU(0,new C.NA(new C.Ez(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.ol?0.5625:1.7777777777777777
l.push(B.au(new B.fK(r,B.jz(B.ux(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bkk){r=B.HS(A.l9,new C.eyb(d),B.nG(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HS(B.X(n.r?Ak.yG:A.iu,m,m,m,m,m),n.gcAu(),B.nG(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fK,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.h2,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aB(A.cg,B.p(A.lk,$.bkk?A.bJ:s,A.f,m,m,m,m,64,m,m,D.buv,m,m,150),A.y,!1,m,n.gcAP(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.aB(m,new B.an(A.a_,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eyc(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.JZ.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.ajr,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b2H,w,w,w,w,w,w,w,w)}}
C.bro.prototype={
jf(d){return new B.a5(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jW(d){return d.b!==this.b}}
C.bhy.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b_s
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aC:A.K,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.db(r,B.au(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wl,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b8,new B.o(s.f,r,u,w,r,r,A.n),A.hm,r,64,r,r,r,r,64)
return B.aB(r,new B.a8(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aC:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bhx.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dsB.h(0,p)
if(o==null)o=D.deG
p=p==="none"
w=p?q:new B.a9(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aC,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.anO:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ey,q,q,52)
return B.aB(q,new B.a8(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aC:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aKe.prototype={
aY(){this.b6()
this.b5()
this.dK()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdG())
w.b4$=null
w.a2()}}
C.aM7.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bx3.prototype={}
C.aM8.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.b1f.prototype={}
C.W0.prototype={
U(){return new C.aEu()},
bgP(d){return this.e.$1(d)}}
C.aEu.prototype={
gb4u(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaaD(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb4u()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaOn(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4u()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5K(){return A.d.cM(this.gaaD(),0,new C.exG())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.R0()},
R0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$R0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1R(s.c,s.f),$async$R0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.exC(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$R0,v)},
J7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaaD()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.M)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fHa(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pd(o,q.c,q.f),$async$J7)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e_(new C.exF(t,p),!1,null,x.H)
w=4
return B.b(B.a3(o,!1).cg(q),$async$J7)
case 4:q=t.a
w=5
return B.b(B.pc(q.c,q.f),$async$J7)
case 5:w=6
return B.b(t.R0(),$async$J7)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J7,v)},
Rm(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e4P,!0,"NgmySlidesTransferScan",x.N),$async$Rm)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.exD(t))
w=4
return B.b(C.aho(s),$async$Rm)
case 4:r=e
t.m(new C.exE(t))
o=J.a4(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.J(x.q).f.R(D.f2O)
w=1
break}w=5
return B.b(t.a.bgP(r),$async$Rm)
case 5:q=t.c
if(q==null){w=1
break}B.a3(q,!1).N(null)
q=t.c.J(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.R(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rm,v)},
J6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaaD()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pd(s,r.c,r.f),$async$J6)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fHp(null,A.d.gI(n),s,t.a.f)}else q=C.fHp(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aN(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gy(q,"ngmy_slides_"+p,!1),$async$J6)
case 4:o=e
s=t.a
w=5
return B.b(B.pc(s.c,s.f),$async$J6)
case 5:w=6
return B.b(t.R0(),$async$J6)
case 6:s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J6,v)},
a2S(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.exH(t))
w=3
return B.b(C.bCi(),$async$a2S)
case 3:s=e
t.m(new C.exI(t))
if(s==null||J.co(s)){w=1
break}w=4
return B.b(t.a.bgP(s),$async$a2S)
case 4:r=t.c
if(r==null){w=1
break}B.a3(r,!1).N(null)
r=t.c.J(x.q).f
q=J.a4(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.R(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2S,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dc:A.bN,k=o.gaaD().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c0(A.A,0.5,A.x,n,0,B.a([A.bi.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cx,m?A.ae:A.al,n,n,n,n),n,n,n,new C.exL(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zU],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.eX,24)],x.V)
u=B.ao(n,B.X(A.q7,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bTe,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bE4],h),A.E,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aB(A.cg,D.f0I,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcf1(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1X,A.n),n,n,n,n,E.ZL,n,n,1/0),A.dY,o.axC(m,"What to transfer"),A.ad,B.B(B.a([B.E(o.aXo(A.qc,m,new C.exM(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aXo(D.bIW,m,new C.exN(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.axC(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.I(m?A.bz:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.N(u,new C.exO(o,m),B.S(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mP)
w.push(o.axC(m,"Transfer options"))
w.push(A.ad)
w.push(B.B(B.a([B.E(o.aqg(A.aR,k,!0,A.jz,m,o.r,o.gc9b(),"Scan on another device","Show QR"),1),A.as,B.E(o.aMs(A.k4,!0,A.ja,m,o.gcrd(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bzc(A.aV,k,A.hE,m,o.r,o.gc98(),"Download .json","Backup file"),1),A.as,B.E(o.aMs(A.aE,!0,Aw.yO,m,o.gcDe(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bi.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bi.j(0.28),A.r,1)
s=B.X(A.lv,A.bi.j(0.9),n,n,n,18)
r=o.gaOn()
q=o.gb5K()
p=o.gb5K()===1?"":"s"
A.d.v(w,B.a([A.bv,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ae:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ag.N7,i,n),B.E(B.ct(w,n,D.by_,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Wk,A.f,A.dL,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a_,n,A.aa,A.t,j,n),n,!1,!1,n,n)},
afH(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ibM(s,t.d,t.e),$async$afH)
case 2:return B.h(null,v)}})
return B.i($async$afH,v)},
axC(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bi,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aXo(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bi
else w=e?A.bz:A.aL
w=B.I(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bi.j(0.2),A.cv,14)],x.V):s
u=A.bi.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bi,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cm,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a2,!0,s,B.aL(!1,r,!0,B.eF(new B.D(A.bC,B.x(B.a([t,A.R,u,A.bA,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bJN(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bi
else w=e?A.bz:A.aL
w=B.I(w,A.r,p?2:1)
v=B.p(q,D.bTq,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a3,A.a8,A.x,B.a([A.bi,A.bi.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1)
u=p?A.eb:A.rg
if(p)r=A.bi
else r=e?A.aZ:A.dn
return new B.D(A.cu,B.aF(!1,A.a2,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.exB(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
aqg(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aL
w=B.I(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.re,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.aol,A.f,s,s,D.b2t,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dd(B.aF(!1,A.a2,!0,s,B.aL(!1,p,!0,B.eF(new B.D(E.Zo,B.x(B.a([new B.an(A.a_,s,A.aa,A.f,u,s),A.ad,v,A.bA,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aMs(d,e,f,g,h,i,j){return this.aqg(d,e,!1,f,g,!1,h,i,j)},
bzc(d,e,f,g,h,i,j,k){return this.aqg(d,e,!1,f,g,h,i,j,k)}}
C.W1.prototype={
U(){return new C.bkj()}}
C.bkj.prototype={
a_(){this.a1()
this.aey()},
aey(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aey=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fHp(null,A.d.gI(m),k,r.a.f):C.fHp(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ky(A.d.gI(n).w))C.fHa(A.d.gI(r.a.d),D.dcw)
n=r.a
m=n.c
n=C.i8J(n.d)
w=7
return B.b(C.fHo(p,C.i8O(r.a.d),n,m,q),$async$aey)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.exP(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.exQ(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aey,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dc:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cM(k.a.d,0,new C.exR())
v=B.aI(j,j,j,j,B.X(A.eI,i?A.ae:A.al,j,j,j,18),j,j,j,new C.exS(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zU],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.df,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1X,A.n),j,j,j,j,E.ZL,j,j,1/0)
q=B.m(24)
s=B.I(A.aR.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.TZ,A.L,j,j))
else if(k.d==null)r.push(D.egz)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aC.j(0.35),A.cv,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fwY,A.am,B.aB(j,B.p(j,B.B(B.a([D.bUY,A.as,B.d(m,j,j,j,j,j,j,D.fji,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bZP,A.n),j,j,j,j,A0.ajc,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.exT(k,d),j,j,j,j,j,j,!1,A.a4),A.N,D.fBl,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.pW(j,j,!1,l,j,!0,!0,j,!1,D.bp4),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cm,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hg,A.L,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Ag.N7,v,j),B.E(B.ce(B.x(B.a([t,A.aO,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c0M,A.n),j,j,j,j,A.u_,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.t,j,A.y,j,E.ajw,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aEr.prototype={
U(){return new C.aEs(new B.as(A.at,$.aw()),B.jV(!0,null,!0,!0,null,null,!1))}}
C.aEs.prototype={
a_(){var w=this
w.a1()
w.e.aR(0,new C.erj(w))
$.aV.x1$.push(new C.erk(w))},
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.t()
this.a2()},
aZY(){var w,v=this.c
v.toString
w=C.yJ(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a3(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eL,x.w).w,i=B.m(28),h=B.I(A.bi.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bi.j(0.28),A.uM,36),D.acb],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bQr,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ad,D.fu3,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b2U,k,k,k,k,A.yb,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge9()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aQ(14,14)
if(q)n=A.bi
else n=r?A.bi.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bi.j(0.28),A.J,12)],g):k
t.push(new B.bA(1,A.bd,B.db(A.A,new B.y(p,k,D.fcO,k,k,k,k,k,k,k,k,k),k,k,A.b8,new B.o(s,k,new B.bJ(m,m,m,m),new B.bk(o,o,o,o),n,k,A.n),A.hm,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.Jh)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bU(0,B.dd(B.aM(k,A.V,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.bXI,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uo(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bv(5,k),new C.buE()],x.aS),k,k,A.aQI,k,5,k,1,k,k,!1,"\u2022",k,new C.erf(l),k,new C.erg(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a5,k,A.mb,k,k,k,k),0),0,0,0)],a1)
d=C.yJ(w.a.a.toUpperCase())==null?k:l.gc9c()
return B.au(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a2,!0,k,new B.cT(Ad.KL,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.byv,B.x(B.a([new B.an(A.a_,k,A.aa,A.t,g,k),A.R,D.fso,A.bv,new B.a8(1/0,50,B.bG(D.fJd,d,B.bn(A.bi,A.bm,A.al,k,A.c,k,k,k,new B.b7(B.m(16),A.a0),k,k,k)),k),A.am,B.bM(!1,A.nD,k,k,!0,k,k,new C.erh(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.aq),A.f,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.buE.prototype={
oD(d,e){var w=e.a.toUpperCase()
return e.cJB(B.hh(A.bw,w.length),w)}}
C.ars.prototype={
U(){return new C.aEv(B.zp(A.Mm,A.nJ,A.ut))}}
C.aEv.prototype={
t(){this.d.t()
this.a2()},
aZX(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aay(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aay=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fQ7(s),$async$aay)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZX("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aay,v)},
c9a(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=C.i8M(w[u])
if(t!=null){this.aZX(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.wi,s,s,s,t.gbO7(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aI(s,s,s,s,B.X(q?A.ub:Al.O2,s,s,s,s,s),s,s,s,new C.exV(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fKq,s,s,s,1,s,!0)
r=B.zo(t.d,A.bV,t.gc99())
w=B.m(28)
w=B.au(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bi,A.r,3),w,B.a([new B.ac(2,A.G,A.bi.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c5(p,A.w,new B.an(A.a_,s,A.b2,A.t,B.a([r,w,B.ao(32,B.p(s,D.fy2,A.f,s,s,new B.o(v,s,B.I(A.bi.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jw,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buQ.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aJ,A.r,1)
return B.aF(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,H.ao1,A.f,w,w,D.b2D,w,56,w,w,w,w,w,56),A.aO,D.fK6,A.am,new B.jK(this.c,new C.f88(),w,w,x.cI),A.aO,new B.jK(this.d,new C.f89(),w,w,x.cl),A.ad,D.fK4],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Ad.KL,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.ZR,D.bz8,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7M.prototype={
U(){return new C.bk2(A.bE)},
gd7(){return this.c}}
C.bk2.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.a_9()
w.d=B.dq(A.fO,new C.egq(w))},
t(){var w=this.d
if(w!=null)w.a4(0)
this.a2()},
a_9(){return this.cny()},
cny(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ego(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bC(new B.T(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cgZ(p.c),$async$a_9)
case 6:r=e
q.a=r==null?A.bE:r
case 4:if(t.c==null){w=1
break}t.m(new C.egp(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_9,v)},
bQ9(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aZ(A.o.u(w),2,"0")+"m "+A.a.aZ(A.o.u(v),2,"0")+"s left"
return A.a.aZ(A.o.u(w),2,"0")+":"+A.a.aZ(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.aw:A.c_
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.Gf,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bQ9(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A9.aii,A.iP,r,r,1/0)}}
C.a8G.prototype={
ng(){var w,v,u,t=this
t.xi()
w=t.cx
v=t.c
w.bqQ(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q2(B.G(["/S",D.ekf,"/URI",new B.rB(B.Wy(w.as),A.uQ,!0)],x.N,u),u))}}
C.a8H.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b2U.prototype={
bye(d,e,f,g,h,i,j,k,l,m){var w=B.ey([D.eiy],x.di)
this.w!==$&&B.aP()
this.w=w},
gcMU(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jU(w,new C.cja(),B.a6(w).k("jU<cp.E,H>")).f9(0,new C.cjb())},
aD4(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tA(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jg(d.a,d.b))
s.n(0,"/Border",B.tA(H.aq2))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h1(t.gcMU()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q2(w,x.Y))}}
C.cjc.prototype={}
C.a2R.prototype={}
C.aif.prototype={}
C.aRb.prototype={
h1(d){var w,v,u,t,s,r,q=this,p=null
q.ll(d)
q.M3(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bgc(w)
u=x.N
t=x.Y
s=new C.cjc(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bye(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q2(B.G(["/Type",D.ekd],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8G(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.awW.prototype={}
C.aSI.prototype={
h1(d){var w,v,u,t,s=this
s.ll(d)
w=s.b
if(w!=null){v=B.dk()
u=s.a
v.eb(u.a,u.b,0,1)
u=d.b
u.ib()
t=s.a
t.toString
u.Lc(t)
u.SE(0)
u.oZ(0,v)
w.h1(d)
u.nj(0)}}}
var z=a.updateTypes(["aA<~>()","~(lM)","R(i4)","~()","R(eK)","R(or)","R(lM)","~(i4)","R(eK,eK)","JZ(Y)","R(nR)","R(lj)","aA<R>()","H(H,i4)","a7<n,@>(i4)","ai<zH>()","n(nR)","R(a82)","n(lM)","n(w4)","R(EI)","H(i4,i4)","n(eK)","v(eK)","cN(eK)","v(hF)","~(hF)","eK(uM,L,L,L,L,H{fx:n,key:n,rotation:L})","eK(n,L,H)","H(or,or)","R(zH)","R(n,ai<zH>)","a7<n,@>(or)","nR()","YC(Y)","eK(n,L,L,L,L,L{align:q8,anim:hF,bullets:R,color:H?,delay:H,fx:n,key:n,style:HN,weight:nE})","a0T(Y)","eK(n,L,L,L,L{anim:hF,delay:H,fx:n,key:n})","aA<~>(or)","R(mA)","YA(Y)","a0p(Y)","a0o(Y)","Px(Y)","ZM(Y)","eK(uM,L,L,L,L,H,n,n{anim:hF,delay:H,rotation:L,stroke:H,strokeWidth:L})","eK(n,L,L,L,L,L,n,n,H)","eK(L,L,n,H{size:L})","v(rp,L,L)","lj()","or(a7<@,@>)","~(uC)","EI()","fg(eK)","v(j2)","Zj(Y)","~(Ez)","ZE(Y)","H(eK,eK)","eK(eK)","a7<n,@>(eK)","eK(a7<@,@>)","lM(lM)","a7<n,@>(lM)","lM(a7<@,@>)","R(jH)","jH()","n(i4)","~(ai<or>)","T(ai<i4>)","T(i4)","ai<i4>(n?)","acG(Y,H)","~(R(eK,eK))","adk(Y)","af0(Y,H)","u(lM,R)","VP(Y)","adn(Y)","VQ(Y)","~(mE)","i4(i4)","L(eK)","a_T(Y)","a_w(Y)","i4()","ai<F5>()","aA<~>(ai<i4>)","v(by<H,i4>)","D(jH)","D(EI)","aA<~>(hF,~())","v(ai<hF>,hF?,~(hF),u)","R(mc)","ai<jq<mE>>(Y)","jq<mE>(mE)","i4(a7<@,@>)","W0(Y)","eK(n,L,L,L,L,L,H{align:q8,style:HN,weight:nE})","W1(Y)","v(i4)","~(m6)","IR(Y,lM,v?)","H(a8H)","aA<ai<a7<n,@>>?>()","n(n)","aA<zG>({paper:n?,photo:dI?,request:n,template!lm})","aA<a7V>({doc!zG,history:ai<+(n,n)>,instruction!n,photo:dI?,template!lm})","adh(Y)"])
C.cHb.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:69}
C.cHc.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cHd.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gake(s):16;--w.c}w.b=A.o.dZ(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mq(v,t)
w.b=v-A.o.dZ(q,t)
w.a=t
return q},
$S:75}
C.cHe.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bQ4.prototype={
$1(d){return J.eZ(A.dE.gaQ(d),d.byteOffset,d.byteLength)},
$S:1669}
C.ftV.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.c0_.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c00.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:41}
C.c02.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fKb.prototype={
$1(d){return new C.a0T(this.a,this.b,C.i9E(),null)},
$S:z+36}
C.f6B.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f6F.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.f6G.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6H.prototype={
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
C.f6C.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f6D.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f6E.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f6w.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hf,w,w,w)
return B.ek(B.a([B.bM(!1,E.aSI,w,w,!0,w,w,new C.f6u(d),w,w),B.bM(!1,D.fvx,w,w,!0,w,w,new C.f6v(d),w,w)],x.p),w,w,D.Yf,v,w,w,w,w,D.fKJ,w)},
$S:18}
C.f6u.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.f6v.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.f6x.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f6y.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f6L.prototype={
$0(){var w=this.a
return w.m(new C.f6K(w,this.b))},
$S:0}
C.f6K.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f6A.prototype={
$0(){var w=this.a
return w.m(new C.f6z(w,this.b,this.c))},
$S:0}
C.f6z.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.f6I.prototype={
$0(){return this.a.a1f(this.b)},
$S:0}
C.f6J.prototype={
$0(){return this.a.Pa(0,this.b)},
$S:0}
C.f6O.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.f6P.prototype={
$0(){var w=this.a
return w.m(new C.f6N(w,this.b))},
$S:0}
C.f6N.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.f6M(),B.S(w).k("N<1,n>")))}},
$S:0}
C.f6M.prototype={
$1(d){return d.a},
$S:z+67}
C.fe_.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h9Q(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cz)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.or(s,v,u==null?new B.T(Date.now(),0,!1):u)},
$S:z+50}
C.fe0.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fwL.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.M)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcA()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fwJ.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fwK.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fJG.prototype={
$1(d){return d.ag()},
$S:z+32}
C.ftz.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fKx.prototype={
$1(d){return new C.YC(this.a,null)},
$S:z+34}
C.cIx.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cIz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cIC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cID.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cIB())},
$S:12}
C.cIB.prototype={
$0(){},
$S:0}
C.cIE.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1S(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bg(s,new C.cIA(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahx(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:299}
C.cIA.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cIF.prototype={
$1(d){},
$S:28}
C.cIy.prototype={
$1(d){return new C.YA(this.b,this.a.gcxq(),null)},
$S:z+40}
C.cIG.prototype={
$1(d){return D.h8M},
$S:z+43}
C.cIt.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.XT,A.r,1),t=x.p
return B.au(B.aF(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.byV,B.x(B.a([B.p(w,D.bNB,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fuu,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fih,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.q4,B.B(B.a([B.E(B.dQ(D.fBn,new C.cIr(d),B.dg(w,w,w,w,w,w,w,w,w,E.n4,w,w,A.cj,w,new B.b7(B.m(14),A.a0),D.b_T,w,w,w,w)),1),A.as,B.E(B.bG(D.fHr,new C.cIs(d),B.bn(A.bx,w,w,w,w,w,A.cj,w,new B.b7(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xf,new B.o(D.adU,w,u,v,D.d1b,w,A.n),w,w,w,L.ZR,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1671}
C.cIr.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.cIs.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.cIu.prototype={
$0(){return J.nx(this.a.d,new C.cIq(this.b))},
$S:0}
C.cIq.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cIp.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.XT,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bSB,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.apA,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aSn,t,t,t),A.bA,D.fHm],q),A.E,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.dnI[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axP(u[1],u[2],u[3],new C.cIn(v,d),!1,t))}q.push(A.am)
q.push(D.bsV)
q.push(A.am)
q.push(new C.axP(A.ec,"Delete book","Remove it from this device",new C.cIo(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.adU,t,r,s,t,t,A.n),t,t,t,A.tV,E.Zu,t,t,t),!0,!1,A.af,!0,!0)},
$S:25}
C.cIn.prototype={
$0(){var w=this.a.a
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.cIo.prototype={
$0(){B.a3(this.a,!1).N("delete")
return null},
$S:0}
C.cIw.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aI4,12)],x.V)
return B.dU(B.eH(A.A,e,B.p(w,B.bx(B.m(4),new B.a8(62,95.81818181818181,B.eN(A.A,F.aok(d),A.f,A.dw),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cIv.prototype={
$0(){return this.a.c3S()},
$S:0}
C.cIm.prototype={
$0(){return this.a.aYx(0,this.b)},
$S:0}
C.cIl.prototype={
$0(){return this.a.Df(this.b)},
$S:0}
C.cIk.prototype={
$0(){return this.a.Df(this.b)},
$S:0}
C.cIH.prototype={
$2(d,e){var w=this.a
return w.bCL(J.q(w.d,e))},
$S:42}
C.cHO.prototype={
$0(){var w=this.a
if(w.c!=null)w.AM()},
$S:0}
C.cHN.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0r("Page "+(v.length+1),"",""))},
$S:0}
C.cHQ.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cHY.prototype={
$0(){},
$S:0}
C.cHZ.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cHR.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aM(this.c)},
$S:0}
C.cHP.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cHT.prototype={
$0(){return this.a.Qy(this.b)},
$S:0}
C.cHU.prototype={
$0(){return this.a.Qy(this.b)},
$S:0}
C.cHV.prototype={
$0(){var w=this.a
w.m(new C.cHS(this.b))
w.E6()},
$S:0}
C.cHS.prototype={
$0(){return this.a.c=""},
$S:0}
C.cHX.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cHW(w,d))
w.E6()},
$S:z+51}
C.cHW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cI3.prototype={
$2(d,e){if(d)this.a.AM()},
$S:119}
C.cI_.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AM(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.J(x.q).f.R(D.f5n)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cI0.prototype={
$0(){return this.a.aXv(this.b,-1)},
$S:0}
C.cI1.prototype={
$0(){return this.a.aXv(this.b,1)},
$S:0}
C.cI2.prototype={
$0(){return this.a.c5b(0,this.b)},
$S:0}
C.fBg.prototype={
$1(d){return C.hjT()},
$S:44}
C.fBh.prototype={
$1(d){return null},
$S:28}
C.fie.prototype={
$1(d){return null},
$S:28}
C.fCf.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:273}
C.fCe.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:238}
C.fCl.prototype={
$1(d){var w=this.a
return C.h26(d)===w||C.hot(d)===w},
$S:z+4}
C.fhh.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.cbh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBe.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fBf.prototype={
$1(d){return C.fDZ(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fw6.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.ya,B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fBZ,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GT,D.fw9,new C.fw4(d),B.bn(A.c_,w,w,w,A.w,w,A.cj,w,w,w,w,w)),A.R,B.es(A.wh,D.fDf,new C.fw5(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xd,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fw4.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fw5.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fw7.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,D.fsg,w,w,!0,w,w,new C.fw2(d),w,w),B.bG(D.fJL,new C.fw3(d),w)],x.p),w,w,w,D.fLF,w,w,w,w,D.fs9,w)},
$S:18}
C.fw2.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.fw3.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.ec6.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ec4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ec5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ec7.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ec8.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fCk.prototype={
$1(d){return A.a.aZ(A.o.u(d),2,"0")},
$S:80}
C.fCg.prototype={
$2$h$w(d,e){var w=null
return new B.bK(A.a3,w,w,B.Bk(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fCi.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fjv,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:146}
C.fCj.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i6,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i6,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fCh.prototype={
$2$female$size(d,e){var w=null,v=d?D.afS:this.a,u=B.I(A.i6,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ae8,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fNZ.prototype={
$1(d){return new C.adh(this.a,this.b,null)},
$S:z+108}
C.dZI.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bpA:A.LQ,q=B.I(D.jo.j(0.25),A.r,1),p=B.au(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aok,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jo.j(0.35),A.eq,10)],x.V),D.c1o,A.n),t,t,t,t,A.y_,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(K.ZH,B.x(B.a([p,A.aA,B.B(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jo,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bA,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fiK,t,t,t)],u),A.E,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ix(!0,t,e,A.y,D.aPL,new C.dZH(w,this.c),v,D.aj7,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mi,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.dZH.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acG(w,new C.dZG(this.b,w),null)},
$S:z+72}
C.dZG.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fwa.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fwb.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fFu,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GT,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fw8(d),B.bn(D.jo,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.oe,D.Uw,new C.fw9(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xd,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fw8.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fw9.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fwe.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fwf.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.ftg,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GT,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwc(d),B.bn(D.jo,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.oe,D.Uw,new C.fwd(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xd,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fwc.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fwd.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fwi.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fwj.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fzN,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GT,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwg(d),B.bn(D.jo,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.oe,D.Uw,new C.fwh(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xd,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fwg.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fwh.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.fPr.prototype={
$1(d){return D.hdL},
$S:z+74}
C.egt.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bgE:A.LQ,s=B.I(A.ay.j(0.25),A.r,1),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bUU,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.eq,10)],x.V),D.apF,A.n),v,v,v,v,A.y_,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(K.ZH,B.x(B.a([r,A.aA,B.B(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.LM,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bA,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fgf,v,v,v)],w),A.E,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ix(!0,v,e,A.y,D.aPL,new C.egs(this.b),19,D.aj7,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mi,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.egs.prototype={
$2(d,e){var w=D.Rd[e]
return new C.af0(w,new C.egr(this.a,w),null)},
$S:z+75}
C.egr.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fE2.prototype={
$0(){return B.h12(C.hY3(this.a))},
$S:272}
C.fE1.prototype={
$0(){var w=C.h2p(this.a)
return"data:image/png;base64,"+A.cJ.gct().aM(w)},
$S:22}
C.ffz.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jh(d,e),new B.jh(w,e+v),new B.jh(d+f*14,e),new B.jh(w,e-v)],x.J)
B.a1P(this.a,C.fA(4291404327),v)},
$S:666}
C.fPC.prototype={
$1(d){return new C.VP(this.a,null)},
$S:z+77}
C.ejq.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejp())},
$S:30}
C.ejp.prototype={
$0(){},
$S:0}
C.ejr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejo(w,d))},
$S:1676}
C.ejo.prototype={
$0(){return this.a.x=J.eV(A.dE.gaQ(this.b))},
$S:0}
C.ejs.prototype={
$1(d){},
$S:28}
C.ej2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ej9.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eja.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.euj)},
$S:0}
C.ejb.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ej4.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c5)},
$S:0}
C.ej5.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ej6.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.ej7.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ej8.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.mb(v,A.e_,A.ip)}},
$S:9}
C.ej3.prototype={
$0(){var w=this.a,v=w.z,u=C.fEG(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cIJ(C.fEG(t))},
$S:0}
C.ej0.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ej1.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ejh.prototype={
$0(){return B.a3(this.a,!1).iW()},
$S:0}
C.eji.prototype={
$0(){var w=this.a
return w.m(new C.ejg(w))},
$S:0}
C.ejg.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ejj.prototype={
$0(){var w=this.a
return w.m(new C.ejf(w,this.b))},
$S:0}
C.ejf.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.ejk.prototype={
$1(d){var w=this.a
return w.m(new C.eje(w))},
$S:8}
C.eje.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ejl.prototype={
$1(d){var w=this.a
return w.m(new C.ejd(w))},
$S:8}
C.ejd.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ejm.prototype={
$0(){var w=this.a
return w.m(new C.ejc(w,this.b))},
$S:0}
C.ejc.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.ejn.prototype={
$1(d){return this.a.ZW()},
$S:2}
C.ej_.prototype={
$0(){return this.a.c8r(this.b)},
$S:0}
C.ceY.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:314}
C.ceW.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ceX.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDD.prototype={
blo(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bQ3(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.M)(e),++t){s=e[t]
r.cF8($.r_().jI(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mH(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.blo(d,e)},
$S:1677}
C.fBV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBX.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dt(this.b,w,w+d)," ")
w=B.aN(w," \n\n ","\n\n")
w=B.aN(w," \n\n","\n\n")
return B.aN(w,"\n\n ","\n\n")},
$S:80}
C.fBW.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fX(t,t,t,t,B.cZ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qz,A.c8,t,A.dQ,A.c6)
v=this.a
w.t0(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:34}
C.ff9.prototype={
$1(d){var w=A.a.fI(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.ffa(),B.S(w).k("Z<1>")).gL(0)},
$S:262}
C.ffa.prototype={
$1(d){return d.length!==0},
$S:3}
C.ff7.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.ff8.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:223}
C.ceZ.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaAm()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h25(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZT(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gcgG(),"\n\n")
d=B.fX(a6,a6,a6,a6,B.cZ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aen(k,q,1.28),j),A.qz,A.c8,a6,A.dQ,A.c6)
d.t0(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h25(i,new B.F(!0,h,a6,k,a6,a6,q,A.cN,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZT(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aen(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bA(1,A.bd,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qz,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aAl(s,j))
i.push(new B.a8(s,a6,B.x(h,A.E,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.j,0,a6,a6)},
$S:461}
C.cf_.prototype={
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
n=o.gaAm()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h25(f,new B.F(!0,e,a5,i,a5,a5,h,A.cN,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fZT(g.length===0?B.a([a6],n):g,l))break}a1=o.aen(i,h,1.28)
a2=new C.cf0(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Jg,new B.a8(v,a5,a4.f,a5),A.Jg,a2.$2(l[1],u)],n),A.E,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bBf,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bA(1,A.bd,new B.y(l[2+a3],a5,a1,a5,A.qz,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aAl(r,g))
f.push(new B.a8(r,a5,B.x(e,A.E,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a8(a5,q,v,a5),A.ad,B.E(B.B(k,A.E,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:153}
C.cf0.prototype={
$2(d,e){var w=null
return new B.a8(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qz,w,w),w)},
$S:1678}
C.fPF.prototype={
$1(d){return new C.VQ(this.a,this.b,null)},
$S:z+79}
C.ejY.prototype={
$1(d){return d.lF()},
$S:1679}
C.ejZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejX(w,d))},
$S:1680}
C.ejX.prototype={
$0(){var w=this.b
return this.a.d=w.gfw(w)},
$S:0}
C.ejL.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ejM.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ejS.prototype={
$0(){return B.a3(this.a,!1).eH()},
$S:0}
C.ejT.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bD,A.r,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bbV(u,v.gaxu(),w),A.fH),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ejQ(v),new C.ejR(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.ejQ.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:235}
C.ejR.prototype={
$1(d){var w=this.a
w.m(new C.ejN(w,d,this.b,this.c))},
$S:211}
C.ejN.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gaxu()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ejU.prototype={
$1(d){var w=this.a
return w.m(new C.ejP(w,this.b))},
$S:8}
C.ejP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ejV.prototype={
$1(d){var w=this.a
return w.m(new C.ejO(w,d))},
$S:7}
C.ejO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ejW.prototype={
$0(){return B.a3(this.b,!1).N(this.a.a.c)},
$S:0}
C.fPV.prototype={
$1(d){return D.hgy},
$S:z+83}
C.eT9.prototype={
$1(d){return this.a.YA()},
$S:9}
C.eS1.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aM(v)},
$S:0}
C.eSp.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eSz.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eRL.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRM.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRJ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eRK.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eSi.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eSj(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.rH(p>0.2?C.fUz(q,B.a57(p,p,A.x)):q),A.t,u)],x.p)
w=s.bi
if(w>0.02){v=B.a57(12,12,A.x)
p.push(B.jz(B.dd(B.rH(C.fUz(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b1
if(r!=null&&s.b0>0)p.push(B.el(u,B.b0(r).j(s.b0),!0))
r=s.bb
if(r!=null&&s.bK>0){r=B.b0(r).j(s.bK)
w=s.bb
w.toString
p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aYy,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aE
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(D.aYj,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aK
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aK)],x.O),D.d_O,u),A.n),A.bf))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c1(u,new B.o(u,u,u,u,u,new B.a9(A.b3,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.daX,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c1(u,new B.o(u,u,u,u,u,new B.c0(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d7Z,u),A.n),A.bf))
s=s.az
if(s>0)p.push(B.b4(u,u,u,new C.bfs(s,u),A.az))
return new B.an(A.a_,u,A.b2,A.t,p,u)},
$S:71}
C.eSj.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.ce,A.bV,!0,q,!1,q,q),o=r.a,n=o.aX7(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aH
u=v-1
t=o.bD
s=o.c5?-1:1
return B.dU(B.ed(A.A,B.eH(A.A,l,B.fo(A.A,new B.Dp(new B.z3(q,q,n,A.AJ),p,q),q,B.vS(s,o.cK?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:485}
C.eSv.prototype={
$0(){return this.a.m(new C.eSu(this.b,this.c))},
$S:0}
C.eSu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSw.prototype={
$1(d){return this.a.m(new C.eSt(this.b,d))},
$S:7}
C.eSt.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSy.prototype={
$0(){return this.a.m(new C.eSx(this.b,this.c))},
$S:0}
C.eSx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRB.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eRC.prototype={
$1(d){var w=this.a
return w.m(w.gcyO())},
$S:2}
C.eRD.prototype={
$1(d){return this.a.m(new C.eRA())},
$S:2}
C.eRA.prototype={
$0(){},
$S:0}
C.eRE.prototype={
$0(){var w=this.a
return w.m(new C.eRz(w,this.b))},
$S:0}
C.eRz.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eRG.prototype={
$2(d,e){return A.as},
$S:36}
C.eRF.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bz
q=B.I(q,A.r,t?2.5:1)
r=B.db(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b8,new B.o(w,w,q,s,w,new B.a9(A.b3,A.b6,A.x,r,w,w),A.n),A.hm,w,94,w,w,w,w,70)
return B.aB(w,new B.a8(70,w,B.x(B.a([r,A.fI,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRy(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eRy.prototype={
$0(){var w=this.a
return w.m(new C.eRv(w,this.b))},
$S:0}
C.eRv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eRH.prototype={
$1(d){var w=this.a
return w.m(new C.eRx(w,d))},
$S:8}
C.eRx.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eRI.prototype={
$1(d){var w=this.a
return w.m(new C.eRw(w,d))},
$S:8}
C.eRw.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eSZ.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.eT5.prototype={
$1(d){var w=this.a
return w.m(new C.eT6(w,d))},
$S:29}
C.eT6.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.em(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eT7.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:255}
C.eT_.prototype={
$0(){var w=this.a
return w.m(new C.eSY(w,this.b))},
$S:0}
C.eSY.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eT0.prototype={
$0(){var w=this.a
return w.m(new C.eSX(w,this.b))},
$S:0}
C.eSX.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eT1.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eSW(v,w.b,w.c,w.d))},
$S:0}
C.eSW.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eT2.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBp(v))},
$S:0}
C.eT3.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eT4.prototype={
$0(){var w=this.a
return w.m(new C.eSV(w))},
$S:0}
C.eSV.prototype={
$0(){var w=this.a.db
return A.d.hs(w,0,w.length,0)},
$S:0}
C.eSI.prototype={
$1(d){return d.a===this.a.dy},
$S:204}
C.eSJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.axK[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aQ(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.axz(new B.ng(new B.bk(n,n,n,n),A.aq,new B.kS(new B.o(j,j,j,j,j,new B.a9(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.b_7(l,B.b0(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eSH(r,v),2,i))}return B.bX(A.bB,h,A.bs,7,7)},
$S:170}
C.eSH.prototype={
$0(){var w=this.b
return w.m(new C.eSC(this.a,w))},
$S:0}
C.eSC.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eSK.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:180}
C.eSN.prototype={
$0(){var w=this.a
return w.m(new C.eSG(w))},
$S:0}
C.eSG.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eSO.prototype={
$1(d){return this.a.p2=d},
$S:7}
C.eSP.prototype={
$1(d){return this.a.p3=d},
$S:7}
C.eSQ.prototype={
$1(d){return this.a.ok=d},
$S:7}
C.eSR.prototype={
$0(){var w=this.a
return w.m(new C.eSF(w))},
$S:0}
C.eSF.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eSS.prototype={
$0(){var w=this.a
return w.m(new C.eSE(w))},
$S:0}
C.eSE.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eST.prototype={
$0(){var w=this.b
return w.m(new C.eSD(this.a,w))},
$S:0}
C.eSD.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eSU.prototype={
$1(d){return this.a.fx=d},
$S:180}
C.eSL.prototype={
$1(d){return this.a.fr=d},
$S:7}
C.eSM.prototype={
$1(d){return this.a.k1=d},
$S:7}
C.eSm.prototype={
$0(){var w=this.a
return w.m(new C.eSl(w))},
$S:0}
C.eSl.prototype={
$0(){var w=this.a
w.p4=null
w.b3a()},
$S:0}
C.eSn.prototype={
$0(){var w=this.a
return w.m(new C.eSk(w,this.b))},
$S:0}
C.eSk.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eSo.prototype={
$0(){var w=this.a
return w.m(w.gcp9())},
$S:0}
C.eSe.prototype={
$0(){var w=this.a
return w.m(new C.eSd(w))},
$S:0}
C.eSd.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eSf.prototype={
$0(){var w=this.a
return w.m(new C.eSc(w))},
$S:0}
C.eSc.prototype={
$0(){var w=this.a
w.aB=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eSg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d8n[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aQ(9,9)
m.push(v.axz(new B.ng(new B.bk(p,p,p,p),A.aq,new B.a8(1/0,1/0,new B.Dp(new B.z3(o,o,v.aX7(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.AJ),B.fO(u,A.A,140,o,A.ce,A.bV,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eSb(v,s),3,n))}return B.bX(A.bB,m,A.bs,10,8)},
$S:170}
C.eSb.prototype={
$0(){var w=this.a
return w.m(new C.eSa(w,this.b))},
$S:0}
C.eSa.prototype={
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
C.eRT.prototype={
$1(d){return this.a.R8=d},
$S:7}
C.eRU.prototype={
$1(d){return this.a.RG=d},
$S:7}
C.eRV.prototype={
$1(d){return this.a.rx=d},
$S:7}
C.eRW.prototype={
$1(d){return this.a.xr=d},
$S:7}
C.eRX.prototype={
$1(d){return this.a.aE=d},
$S:7}
C.eRY.prototype={
$1(d){return this.a.Z=d},
$S:7}
C.eRZ.prototype={
$1(d){return this.a.b8=d},
$S:7}
C.eS_.prototype={
$1(d){return this.a.aB=d},
$S:7}
C.eS0.prototype={
$1(d){return this.a.aK=d},
$S:7}
C.eRe.prototype={
$1(d){return this.a.ry=d},
$S:7}
C.eRf.prototype={
$1(d){return this.a.to=d},
$S:7}
C.eRg.prototype={
$1(d){return this.a.x1=d},
$S:7}
C.eRh.prototype={
$1(d){return this.a.x2=d},
$S:7}
C.eRi.prototype={
$0(){var w=this.a
return w.m(new C.eRd(w))},
$S:0}
C.eRd.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eRj.prototype={
$1(d){return this.a.b1=d},
$S:180}
C.eRk.prototype={
$1(d){return this.a.b0=d},
$S:7}
C.eRN.prototype={
$1(d){return this.a.y2=d},
$S:7}
C.eRO.prototype={
$1(d){return this.a.bi=d},
$S:7}
C.eRP.prototype={
$1(d){return this.a.az=d},
$S:7}
C.eRQ.prototype={
$1(d){return this.a.bb=d},
$S:180}
C.eRR.prototype={
$1(d){return this.a.bK=d},
$S:7}
C.eRo.prototype={
$1(d){return this.a.aH=d},
$S:7}
C.eRp.prototype={
$1(d){return this.a.bh=d},
$S:7}
C.eRq.prototype={
$1(d){return this.a.bD=d},
$S:7}
C.eRr.prototype={
$1(d){return this.a.c7=d},
$S:7}
C.eRs.prototype={
$0(){var w=this.a
return w.m(new C.eRn(w))},
$S:0}
C.eRn.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.eRt.prototype={
$0(){var w=this.a
return w.m(new C.eRm(w))},
$S:0}
C.eRm.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eRu.prototype={
$0(){var w=this.a
return w.m(new C.eRl(w))},
$S:0}
C.eRl.prototype={
$0(){var w=this.a
return w.cK=!w.cK},
$S:0}
C.eSh.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.icp(v,w.p4)},
$S:0}
C.eS9.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bpU:B.fO(v,A.A,w,w,A.ce,A.bV,!1,w,!1,w,w)
return C.fC2(d.length===0?"rounded":d,u,e)},
$S:138}
C.eS5.prototype={
$0(){var w=this.a
return w.m(new C.eS4(w))},
$S:0}
C.eS4.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eS6.prototype={
$0(){var w=this.b
return w.m(new C.eS3(this.a,w))},
$S:0}
C.eS3.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eS7.prototype={
$0(){var w=this.b
return w.m(new C.eS2(this.a,w))},
$S:0}
C.eS2.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eS8.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:7}
C.eSs.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eG(n.ciB(),n.r))
l.push(new C.IR(n.cvL(),!1,!1,t))
o=B.bU(0,B.bx(o,new B.eG(new B.an(A.a_,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.aa,A.t,B.a([o,B.ao(t,B.aB(A.cg,B.c1(t,new B.o(t,t,B.I(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eSr(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:209}
C.eSr.prototype={
$1(d){var w=this.a
return w.m(new C.eSq(w,d,this.b,this.c))},
$S:21}
C.eSq.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eSB.prototype={
$0(){var w=this.a
return w.m(new C.eSA(w,this.b))},
$S:0}
C.eSA.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eRS.prototype={
$0(){var w=this.a.c
w.toString
return B.a3(w,!1).iW()},
$S:0}
C.eT8.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a8(Math.min(s*0.4,460),t,B.x(B.a([w.aZP(),B.E(B.au(w.b1M(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aQg(),1),w.aMt()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.aZP(),new B.D(A.hz,B.au(s.b1M(u),t,t,t),t),B.E(s.aQg(),1),s.aMt()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:575}
C.fzj.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bAf(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bp,A.O)},
$S:z+98}
C.fzi.prototype={
$3(d,e,f){var w=this,v=C.bAf(),u=w.b?A.H:A.cw,t=w.c?A.cE:A.bp
return C.er(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cl,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cgm.prototype={
$1(d){return B.w(d)},
$S:17}
C.fH_.prototype={
$0(){return this.a},
$S:z+15}
C.fmE.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.fmF.prototype={
$2(d,e){return J.co(e)},
$S:z+31}
C.fH1.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fH4.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fH5.prototype={
$0(){return A.d.gI(D.wr)},
$S:z+33}
C.fGY.prototype={
$1(d){return d.a},
$S:z+16}
C.fH0.prototype={
$1(d){return d.a},
$S:z+16}
C.fEY.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fEZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fF_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fzn.prototype={
$0(){return C.cE()},
$S:22}
C.fzq.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.er(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,"","",A.bp,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,"",j,A.bp,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,null,0,j,k,A.bp,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bp,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bp,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dg,!1,k,l,"",m,A.bp,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,null,0,"",k,A.bp,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.dg,!1,j,k,"",l,A.bp,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,k,0,l,m,A.bp,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,k,l,m,"",n,A.bp,A.a7)},
$S:z+35}
C.fzp.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bh,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f7,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fzo.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.er(A.bh,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.lD,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qp,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fzm.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fBO.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hkV.c4(0,A.a.i(s.w).toLowerCase(),new C.fBM(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fBN(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.by(t.e,new B.boi(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fBM.prototype={
$0(){return F.aNH(this.a.w)},
$S:176}
C.fBN.prototype={
$0(){var w=this.a.r,v=B.aN(w.toLowerCase()," ","_")
return F.bz9("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:176}
C.ff3.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.ff4.prototype={
$1(d){return d.a},
$S:z+18}
C.ff5.prototype={
$1(d){return d.b},
$S:z+19}
C.fQ6.prototype={
$1(d){return D.hgO},
$S:z+41}
C.eZm.prototype={
$0(){return this.a.x=C.hPD(this.b,this.c.b)},
$S:0}
C.eZn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eZk.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:403}
C.eZl.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:403}
C.eZj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.av,null,new C.eZe(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jW,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.eZf(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hqQ(o,m.cJw(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eZg(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eZe.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eZi(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b7p,A.f,p,p,D.b2m,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cr:D.Cw,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a8(64,64,C.fC2(v,i.b3O(h),u),p)))}t=B.kG(1,m,4,10,10,p,A.dP,!0)
if(!l)return B.bm(!0,new B.D(Aa.y7,t,p),!0,!1,A.af,!0,!0)
s=new C.eZh(i,d)
m=B.aH(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Hc[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aX(0,1/0,0,m.a.b*0.85),B.ce(B.x(B.a([D.fyc,A.R,t,A.dY,D.eVW,A.au,D.fJ6,A.R,B.kG(1.15,l,3,10,10,p,A.dP,!0)],n),A.E,p,A.e,A.j,0,A.p),A.t,p,A.y,p,Aa.y7,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:25}
C.eZi.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.dr
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hB,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eZd(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1685}
C.eZd.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.eZh.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bM:A.bz
r=B.I(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.aoP,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.NA(u.FH(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bM:A.ae,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eZc(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:138}
C.eZc.prototype={
$0(){B.a3(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.eZf.prototype={
$0(){var w=this.a
return w.w=w.w.FH("")},
$S:0}
C.eZg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eZ2.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eZ3.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eZ5.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eZ6.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eZ7.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eZ8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eZ4(w,d))},
$S:2}
C.eZ4.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eZ9.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.eZA.prototype={
$0(){return this.a.f.fO()},
$S:0}
C.eZB.prototype={
$0(){var w=this.a
return w.m(new C.eZz(w))},
$S:0}
C.eZz.prototype={
$0(){return this.a.e=null},
$S:0}
C.eZC.prototype={
$0(){var w=this.a
return w.m(new C.eZy(w))},
$S:0}
C.eZy.prototype={
$0(){return this.a.x=null},
$S:0}
C.eZE.prototype={
$1(d){var w=this.a
return w.m(new C.eZx(w,d))},
$S:33}
C.eZx.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eZF.prototype={
$1(d){var w=this.a
return w.m(new C.eZw(w,d))},
$S:33}
C.eZw.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eZG.prototype={
$0(){var w=this.a
return w.m(new C.eZv(w))},
$S:0}
C.eZv.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eZH.prototype={
$1(d){var w=this.a
return w.m(new C.eZu(w,d))},
$S:33}
C.eZu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZI.prototype={
$1(d){var w=this.a
return w.m(new C.eZt(w,d))},
$S:33}
C.eZt.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZJ.prototype={
$0(){var w=this.a
return w.m(new C.eZs(w))},
$S:0}
C.eZs.prototype={
$0(){var w=this.a
return w.w=w.w.FH("")},
$S:0}
C.eZK.prototype={
$0(){var w=this.a
return w.m(new C.eZr(w,this.b))},
$S:0}
C.eZr.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eZL.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a8(u,null,w.bOM(D.a3F[v]),null))
return B.bX(A.bB,t,A.bs,8,8)},
$S:170}
C.eZD.prototype={
$1(d){var w=this.a
return w.m(new C.eZq(w,d))},
$S:8}
C.eZq.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eZa.prototype={
$0(){var w=this.a
return w.m(new C.eZb(w,this.b,this.c))},
$S:0}
C.eZb.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.eZp.prototype={
$0(){var w=this.a
return w.m(new C.eZo(w,this.b))},
$S:0}
C.eZo.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fQ5.prototype={
$1(d){return new C.a0o(this.a,this.b,null)},
$S:z+42}
C.eYW.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eYX.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eYY.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aHq?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eYZ.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eZ_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYV(w,d))},
$S:2}
C.eYV.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eZ0.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.eZ1.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bw,w.length),A.aN))},
$S:0}
C.flU.prototype={
$1(d){return d.a===this.a},
$S:204}
C.egi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaxA(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cUK:D.daG
t=D.xM.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.r,v?1.8:1.2)
s=D.xM.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bU(0,B.b4(q,q,q,new C.bhE(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bU(0,B.bQk(B.eH(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a3,A.a8,A.x,B.a([A.K,D.beO.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.aa,A.t,B.a([n,o,B.au(B.x(B.a([B.X(p.a.c?A.eb:A.m1,D.xM,q,q,q,20),A.au,B.eN(A.A,B.nW(A.jC,D.frD,new C.egh()),A.f,A.e0)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.p(q,D.fob,A.f,q,q,new B.o(D.xM,q,q,B.m(6),q,q,A.n),q,q,q,q,M.ajO,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ax,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.egh.prototype={
$1(d){return D.c_A.aA(0,d)},
$S:67}
C.fH6.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fH7.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:204}
C.fH8.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1686}
C.fH9.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aN(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aN(u,p,q.toUpperCase())}return u},
$S:14}
C.fH2.prototype={
$1(d){return d.a},
$S:z+18}
C.fH3.prototype={
$1(d){return d.b},
$S:z+19}
C.fPj.prototype={
$1(d){return new C.ZM(this.a,this.b,null)},
$S:z+44}
C.dl1.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dl2.prototype={
$1(d){return d.a===this.a.gaiA()},
$S:z+10}
C.dl3.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dl6.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dl7.prototype={
$0(){var w=this.a
return w.m(new C.dl5(w,this.b))},
$S:0}
C.dl5.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dl8.prototype={
$1(d){var w=this.a
return w.m(new C.dl4(w,d))},
$S:8}
C.dl4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.egg.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.ec(w,this.a)
return B.d1(w,0,B.dB(e,"count",x.S),B.S(w).c).dA(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.fbw.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bh,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f7,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fby.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.L,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mM,D.cQ,g,e,f)},
$S:z+46}
C.fbx.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wC(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mM,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fbv.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fAu.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fAv.prototype={
$0(){return A.d.gI(D.Hl)},
$S:z+49}
C.fAw.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fdv.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fGz.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fx,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGA.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fx,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fx,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGB.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jV,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jV,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fx,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGM.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jV,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jV,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jU,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGR.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jU,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fx,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGS.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jV,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fx,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGT.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cTF[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f7,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bh,null,D.bg,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kv
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fx,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGU.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mt,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f7,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bh,null,D.D5,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kv
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fx,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGV.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jU,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fx,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGW.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fx,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jV,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGX.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jV,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGC.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jU,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jU,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fx,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fGD.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jU,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jU,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jU,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eQ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fGE.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jV,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jU,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fx,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fGF.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jU,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jU,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fx,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fGG.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.ld,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.ld,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.ld,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.ld,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.ld,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fx,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGH.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jV,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eQ,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fx,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fGI.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mt,A.ds,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f7,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bh,null,D.D5,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kv
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fx,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGJ.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f7,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bh,null,D.fx,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kv
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fx,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGK.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fx,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fGL.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eK("design_"+(""+1000*u+"_"+t),D.f7,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bh,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kv
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ar(A.d7,A.co,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eK("design_"+(""+1000*t+"_"+s),D.f7,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bh,null,D.bg,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kv
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jU,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fGN.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jV,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jV,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jV,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jV,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bg,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eQ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGO.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bg,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eQ,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eQ,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eQ,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jV,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fGP.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eQ,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fx,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f7,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bh,null,D.eQ,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kv
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fGQ.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jV,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jV,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fyk.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fyl.prototype={
$0(){return A.d.gI($.bDS())},
$S:z+52}
C.fls.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.flr.prototype={
$1(d){return C.hWZ(d,this.a,this.b)},
$S:z+53}
C.fHf.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vS(1.0375,1.01875,1)
return new B.fR(v,u,new C.aSI(B.hME(A.vi,C.hX1(w.c,w.d,v,u),t)))},
$S:402}
C.dVE.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dVD.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c1(w,new B.o(w,w,w,w,w,new B.c0(A.Kq,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.an(A.a_,w,A.b2,A.t,B.a([t,new B.eG(B.b4(w,w,w,new C.bez(u.a,r,q,r),A.az),w),B.au(new B.jK(r,new C.dVC(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:436}
C.dVC.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.av(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.i_(B.fO(i,A.A,r,r,A.ce,A.bV,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mv(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a8(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.br0(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a8(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dd(B.dU(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a8(r,m*0.022,r,r),B.d(w.a.c.gaL1(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.dd(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:106}
C.eY9.prototype={
$1(d){var w=this.b
return new B.a9(A.ax,A.aD,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:67}
C.caT.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bM:A.bz
t=B.I(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hL.j(0.4),A.J,14)],x.V):v
w=B.db(v,B.bx(B.m(12),d,A.aq),v,v,A.b8,new B.o(v,v,t,u,w,v,A.n),A.eM,v,72,v,v,v,v,v)
return B.aB(v,new B.a8(112,v,B.x(B.a([w,A.fI,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bM:A.ae,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1688}
C.caU.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FH(""))},
$S:0}
C.caV.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.NA(v.FH(u),!0,!1,null),!0,null),d.b,new C.caW(w,this.c,d),v.a===u)},
$S:z+54}
C.caW.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hqQ(u.b,t.c.FH(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fNJ.prototype={
$1(d){return new C.Zj(this.a,null)},
$S:z+55}
C.dai.prototype={
$0(){var w=this.a
w.d=w.gvH().bbR("data:"+this.b+";base64,"+A.cJ.gct().aM(this.c));++w.r},
$S:0}
C.dan.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dao.prototype={
$0(){var w=this.a
return w.m(new C.dam(w))},
$S:0}
C.dam.prototype={
$0(){return this.a.r++},
$S:0}
C.dap.prototype={
$1(d){var w=this.a
return w.m(new C.dal(w,d))},
$S:2}
C.dal.prototype={
$0(){var w=this.a
return w.d=w.gvH().aDX(this.b)},
$S:0}
C.daq.prototype={
$0(){var w=this.a
return w.m(new C.dak(w))},
$S:0}
C.dak.prototype={
$0(){var w=this.a
return w.d=w.gvH().bbR("")},
$S:0}
C.dar.prototype={
$1(d){var w=this.a
return w.m(new C.daj(w,d))},
$S:2}
C.daj.prototype={
$0(){var w=this.a
return w.d=w.gvH().bbY(this.b)},
$S:0}
C.das.prototype={
$0(){var w=this.a
w=w.gvH().bbY(w.gaxB().a.a)
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.fNI.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fNH(w),null)},
$S:19}
C.fNH.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.85),B.ce(B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fG8,A.au,D.fGo,A.aA,new C.b_4(v.a,new C.fNG(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b2V,w,w,w,w,A.MT,w,w,w)},
$S:158}
C.fNG.prototype={
$1(d){this.b.$1(new C.fNF(this.a,d))
B.a3(this.c,!1).N(d)},
$S:z+56}
C.fNF.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fQ4.prototype={
$1(d){return D.hb1},
$S:z+57}
C.dh4.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.dh5.prototype={
$0(){var w=this.a.c
w.toString
B.a3(w,!1).N(this.b)
return null},
$S:0}
C.dh6.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a3(w,!1).N(v)}},
$S:0}
C.fDW.prototype={
$1(d){var w=this.b
return new B.a9(A.ax,A.aD,A.x,B.a([A.K,B.ar(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:67}
C.da_.prototype={
$3(d,e,f){var w,v=this,u=new B.aJ($.W().r,A.ak,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.b1(t+r*1.2,o))
u.D(new B.ca(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.ca(w,q+p,w,q+p*1.2))
u.D(new B.D7(B.bW(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aJ(u,v.d)
s.aJ(u,v.e)
p=B.K()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ae(new B.t(w,o),2.2,p)},
$S:387}
C.fE_.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fwm.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fwn.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.ya,B.x(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fou,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dp(D.GT,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwk(d),B.bn(A.c_,w,w,w,A.c,w,A.cj,w,w,w,w,w)),A.R,B.es(A.oe,D.Uw,new C.fwl(d),B.dg(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cj,w,w,Q.xd,w,w,w,w))],x.p),A.ai,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:25}
C.fwk.prototype={
$0(){B.a3(this.a,!1).N("continue")
return null},
$S:0}
C.fwl.prototype={
$0(){B.a3(this.a,!1).N("new")
return null},
$S:0}
C.cgk.prototype={
$1(d){return d.hI()},
$S:z+59}
C.cgl.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cgj.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.O(b3)
if(b4==null)b4=A.a7.gdN(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.O(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.O(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hSL(b2.h(0,"type"))
t=B.aK(b2.h(0,"x"))
if(t==null)t=b1
if(t==null)t=0.08
s=B.aK(b2.h(0,"y"))
if(s==null)s=b1
if(s==null)s=0.12
r=B.aK(b2.h(0,"w"))
if(r==null)r=b1
if(r==null)r=0.84
q=B.aK(b2.h(0,"h"))
if(q==null)q=b1
if(q==null)q=0.2
p=b2.h(0,"text")
p=J.k(p==null?"":p)
o=B.aK(b2.h(0,"fontSize"))
if(o==null)o=b1
if(o==null)o=24
n=A.azE[A.o.E(b4,0,8)]
m=D.cWG[A.o.E(w,0,1)]
l=C.hWq(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.O(k)
if(k==null)k=4279310375
j=A.awf[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hZh(b2.h(0,"shape"))
g=B.aK(b2.h(0,"fillColor"))
g=g==null?b1:A.k.O(g)
if(g==null)g=4280640491
f=B.aK(b2.h(0,"strokeColor"))
f=f==null?b1:A.k.O(f)
if(f==null)f=4280172719
e=B.aK(b2.h(0,"strokeWidth"))
if(e==null)e=b1
if(e==null)e=2
d=B.aK(b2.h(0,"rotation"))
if(d==null)d=b1
if(d==null)d=0
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aK(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.O(a2)
if(a2==null)a2=0
a3=C.hm2(b2.h(0,"textTransition"))
a4=B.aK(b2.h(0,"textAnimDelayMs"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aK(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.O(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cg9.prototype={
$1(d){return d.hI()},
$S:z+62}
C.cga.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cg6.prototype={
$1(d){return B.w(d)},
$S:17}
C.cg7.prototype={
$1(d){return B.w(d)},
$S:17}
C.cg8.prototype={
$1(d){return C.hcE(B.a2(d,x.N,x.z))},
$S:z+64}
C.cgB.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cgC.prototype={
$0(){return A.d.gI(D.a3j)},
$S:z+66}
C.cgw.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hI())},
$S:z+7}
C.cgv.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cgr.prototype={
$1(d){return new B.N(d,new C.cgs(),B.S(d).k("N<1,T>")).f9(0,new C.cgt())},
$S:z+69}
C.cgs.prototype={
$1(d){return d.f},
$S:z+70}
C.cgt.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:671}
C.cgu.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hIt(d)},
$S:z+71}
C.cgx.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cgy.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cgz.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fEy.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.M)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fEu.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fEv.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fEw.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fEx.prototype={
$2(d,e){return d.b===D.f7&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cgf.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i74(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cge(),b5.k("J.E"),x.N)
w=B.de(b5,B.a6(b5).k("J.E"))
b1=b1.e
v=A.pW.av(0,A.k.E(b1,0,1))
u=new C.cgg()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cgh(a9,b7.d)
r=new C.cgi(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.M)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jI.av(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.k.E(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.M)(b2),++m){i=b2[m]
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
if(a2===D.f7){a4=i.hI()
a4.ay=B.ar(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ar(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lD&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b2,A.t,B.a([new B.kH(A.k.E(o,0,1),r.$1(l),a8),new B.kH(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wl(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mM
p.push(s.$5(i.c,i.d,i.e,i.f,C.hoi(a7,a6,r.$1(i))))}}return B.c1(new B.an(A.a_,a8,A.aa,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:386}
C.cge.prototype={
$1(d){return d.a},
$S:z+22}
C.cgg.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cgh.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cgi.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7L(v,C.b1c(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dIc.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.df(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cgo.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cgp.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fHm.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:280}
C.fGt.prototype={
$1(d){return new C.adn(this.a,this.b,null)},
$S:z+78}
C.erl.prototype={
$0(){return this.a.PZ(this.b,C.iap(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.erm.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PZ(this.b,C.iar(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.ern.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PZ(this.b,C.iaq(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.ero.prototype={
$0(){Z.ho2()
B.a3(this.a,!1).N(null)},
$S:0}
C.cgd.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cgc.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nF),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jN(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bV:A.dw
return B.fO(t,A.A,o,new C.cgb(),A.ce,w,!0,u,!1,new B.cz("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.cgb.prototype={
$3(d,e,f){return D.acH},
$S:214}
C.fEt.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a9(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.d1(r,0,B.dB(6,"count",x.S),B.S(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fEs(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c1(new B.an(A.a_,t,A.aa,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1695}
C.fEs.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b1c(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fo_.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fnY(d))
w=B.aH(d,A.bW,x.w).w
v=B.m(22)
u=B.I(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fT,28)],x.V)
s=x.p
return new B.d0(e,!1,B.au(B.aF(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jZ,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.j,0,A.p),1),B.bM(!1,A.A5,q,q,!0,q,q,new C.fnZ(p,d),q,B.fx(q,q,A.bi,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Bs,q,new B.b7(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fR,A.FQ,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:251}
C.fnY.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a3(w,!0).pE())B.a3(w,!0).eH()},
$S:0}
C.fnZ.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a3(this.b,!0).eH()},
$S:0}
C.f5H.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dd(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dU(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dU(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dU(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dU(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.dd(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fA(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kc(r*3.14159)
return B.fo(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(r*1.2)
s.kc(r*0.5)
return B.fo(A.A,B.dd(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(-r*1.4)
return B.fo(A.a8,B.dd(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dd(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.jz(u.b,A.t,new C.aJx(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.jz(u.b,A.t,new C.aJx(1-r,t))],x.p),t)
case 16:v=D.b6m.av(0,r)
return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dd(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dk()
s.mL(r*6.28)
s.jT(r,r,r,1)
return B.fo(A.A,u.b,t,s,!0)
case 20:return B.eH(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b2,A.t,B.a([u.c,B.dd(u.b,r)],x.p),t),t)}},
$S:61}
C.dTq.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.dTp.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.dTo.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hoi(v,w,e)},
$S:61}
C.cg5.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a9(A.a3,A.a8,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.S(v).k("N<1,cN>")
q=B.C(new B.N(v,new C.cg4(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c1(new B.an(A.a_,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:386}
C.cg4.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7L(m,new C.V6(d,C.b1c(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d7e.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d7d(w))},
$S:12}
C.d7d.prototype={
$0(){return this.a.d++},
$S:0}
C.efZ.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aON.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i6O(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dk()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eb(0,w*7,0,1)
s.fA(Math.sin(t)*0.32)
s.kc(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jT(w,w,w,1)
return B.fo(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.dd(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:61}
C.eVN.prototype={
$1(d){var w
$.W()
w=B.K()
w.b=A.ac
w.c=d
w.e=A.dS
return w},
$S:1696}
C.fC3.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.at(o,o):new B.at(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdF()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bqU(u,t,r),A.az))
w.push(B.nA(s.d,A.aq,new C.bf5(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bpU(u,q,t,r),A.az))
return B.au(new B.a8(v.a,v.b,new B.an(A.a_,r,A.b2,A.t,w,r),r),r,r,r)},
$S:241}
C.fr0.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:273}
C.exz.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CU(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.exx(),new C.exy(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.exx.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:179}
C.exy.prototype={
$0(){return J.fr(this.a)},
$S:1699}
C.etX.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etY.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etZ.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.evx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evl.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.evm.prototype={
$1(d){return d.hI()},
$S:z+81}
C.etk.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ewF.prototype={
$0(){this.a.tE()},
$S:0}
C.exv.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oi()
w.Kd()},
$S:0}
C.evv.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.oi()
w.Kd()},
$S:0}
C.exi.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exj.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exk.prototype={
$1(d){return d.a},
$S:z+22}
C.exl.prototype={
$0(){var w=this.a.r
return new B.as(new B.ba(w,A.b4,A.aN),$.aw())},
$S:252}
C.exm.prototype={
$0(){return B.jV(!0,null,!0,!0,null,null,!1)},
$S:675}
C.esJ.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exw.prototype={
$0(){},
$S:0}
C.euE.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()
w.Kd()},
$S:0}
C.esH.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xy()},
$S:0}
C.esI.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xy()},
$S:0}
C.ev0.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ev1.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()
w.Kd()
w.z="Home"},
$S:0}
C.ev2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euD.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.Uv,w,w,!0,w,w,new C.euC(d),w,w)],x.p),w,w,w,D.fHY,w,w,w,w,D.foW,w)},
$S:18}
C.euC.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euA.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.Uv,w,w,!0,w,w,new C.euz(d),w,w)],x.p),w,w,w,D.fsZ,w,w,w,w,D.fqJ,w)},
$S:18}
C.euz.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euB.prototype={
$0(){},
$S:0}
C.etT.prototype={
$1(d){return this.a.b08(C.bBS(d))},
$S:z+7}
C.etU.prototype={
$1(d){return this.a.afb(C.bBS(d))},
$S:z+7}
C.euK.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bv,D.fI1,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bv,new C.PH(A.w4,D.axA,"HATI YA KUHOWA","Hati ya mahari",new C.euF(d),w),A.R,new C.PH(A.hc,D.d8p,"HATI YA KUHOWESHA","Hati ya kupokea",new C.euG(d),w),A.R,new C.PH(A.ia,D.cUQ,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.euH(d),w),A.R,new C.PH(A.hR,D.cSZ,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.euI(d),w)],v)
if(this.a.gabF())A.d.v(u,B.a([A.R,new C.PH(A.jb,D.cDZ,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.euJ(d),w)],v))
return B.bm(!0,B.ce(B.x(u,A.ai,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.ya,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:25}
C.euF.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.euG.prototype={
$0(){B.a3(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.euH.prototype={
$0(){B.a3(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.euI.prototype={
$0(){B.a3(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.euJ.prototype={
$0(){B.a3(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.euL.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()},
$S:0}
C.esL.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.esM.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nf(r,v.f+1,q);++v.f
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
C.euW.prototype={
$1(d){return d.b===D.lD},
$S:z+4}
C.euX.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.dY(new C.euU(w,this.a,v),null)},
$S:19}
C.euU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.euV(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aQ:A.al,i=l?A.bm:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bz:A.aL,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bA,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.X(A.cx,j,q,q,q,q),q,q,q,new C.euQ(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cw[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhy(t,u.b,p.a===t,i,k,new C.euR(v,m),q))}a1=B.bX(A.bB,a1,A.bs,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cr[w]
s.a=null
t=s.a=r.a
u.push(new C.bhx(t,r.b,p.b===t,k,j,new C.euS(s,m),q))}return B.bm(!0,B.p(q,B.ce(B.x(B.a([d,A.aO,a0,A.R,a1,A.bv,v,A.R,B.bX(A.bB,u,A.bs,12,12),A.bv,new B.a8(1/0,48,B.es(D.bWz,D.fKs,new C.euT(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aC,q,q,q,q,new B.b7(B.m(16),A.a0),D.b0p,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tV,D.bxE,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.euV.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.euO(w.a,d,e))
w.b.d4(new C.euP(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.euO.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.euP.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.euQ.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.euR.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.euS.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.euT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.GK(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.euN(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euN.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.euZ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.ev_.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.euY(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nf(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xy()},
$S:0}
C.euY.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.evg.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evh.prototype={
$1(d){return d.w},
$S:z+82}
C.evi.prototype={
$2(d,e){return d>e?d:e},
$S:78}
C.evj.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aQ:A.al,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bz:A.aL,A.r,1),n=B.aH(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bQd,A.f,v,v,D.b1N,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.X(A.cx,s,v,v,v,v),v,v,v,new C.evd(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dr(1,A.cn,B.hM(v,new C.eve(m,k,w.c,s,w.d,t,r),k.length,A.fv,v,A.ag,new C.evf(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tV,A.ZA,v,v,v),!0,!1,A.af,!0,!0)},
$S:25}
C.evd.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.evf.prototype={
$2(d,e){return A.ad},
$S:36}
C.eve.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aC:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cw
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.bTp,q,q,q,new C.evb(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bzU,n,q),B.aM(q,A.V,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bs(q,new B.b5(4,B.m(16),A.a0),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b04),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.evc(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a5,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.j,0,A.p)},
$S:676}
C.evb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.icy(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geG()?p.a:q.a.length
n=p.geG()?p.b:q.a.length
m=A.a.oO(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bw,o+s.length),A.aN))
l.ajd(k,m)
l.pq()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evc.prototype={
$1(d){var w=this.a
w.ajd(this.b.a,d)
w.pq()},
$S:2}
C.evk.prototype={
$0(){},
$S:0}
C.euM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.et1.prototype={
$0(){},
$S:0}
C.et2.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hpC(this.b,w,!0)
w=this.a
w.r=null
w.xy()},
$S:0}
C.et3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.et4.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bt(v,new C.et0(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nf(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xy()},
$S:0}
C.et0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.evq.prototype={
$1(d){return B.oY(new C.evp(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:139}
C.evp.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aju,B.x(B.a([D.fFw,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.j,0,A.p),w),B.E(B.ix(!0,w,e,A.y,D.f1g,new C.evo(this.a,this.b),20,A.tX,w,A.ag,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:385}
C.evo.prototype={
$2(d,e){var w=null,v=D.Hl[e],u=C.hIo(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fG,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bn,B.p(w,D.eVS,A.f,w,w,new B.o(A.dI.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.nl,w,w,w)],m))
return B.aF(!1,A.a2,!0,w,B.aL(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b0,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evn(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.evn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cgn(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a3(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evr.prototype={
$0(){var w=this.a
w.e=this.b.hI()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xy()},
$S:0}
C.erG.prototype={
$0(){var w,v=this.a,u=v.gqt(),t=C.rA(4294967295,null,0,0,null,C.cE(),D.mL,"","","",D.dg),s=this.b
C.cgA(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.D4){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.et_.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hcE(q));++v.f},
$S:0}
C.esY.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.evz.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.esU.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.d,new C.esT(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.esT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evy.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.T(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.esK.prototype={
$0(){var w=this.a.r
return new B.as(new B.ba(w,A.b4,A.aN),$.aw())},
$S:252}
C.etl.prototype={
$0(){return B.jV(!0,null,!0,!0,null,null,!1)},
$S:675}
C.exg.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.exh.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.atA(w).fO()
v=u.WI(w)
v.stm(B.hh(A.bw,v.a.a.length))},
$S:9}
C.ewG.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.XH(v)
if(u!=null&&u.b===D.cQ)w.WI(u).saU(0,u.r)}else w.w=null},
$S:0}
C.erH.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bh,!1,v.gqt().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cQ,0.7,0.15,0.2)
A.d.M(v.gdu().z,u)
v.r=u.a},
$S:0}
C.erE.prototype={
$0(){var w=C.cE(),v=this.a,u=C.er(A.bh,!1,4279310375,A.aF,"",v.gqt().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqt().c.l(),2,"",0,0,"",D.cl,D.f7,0.25,0.3,0.3)
A.d.M(v.gdu().z,u)
v.r=u.a},
$S:0}
C.eru.prototype={
$0(){var w=C.er(A.bh,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,0.6,0.2,0.18),v=this.a
A.d.M(v.gdu().z,w)
v.r=w.a},
$S:0}
C.err.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c2y],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajQ().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bNU,r,r,r,r,new C.erq(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.ct(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:25}
C.erq.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.ers.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.S.ao(u.ag(),null),s=C.er(A.bh,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cl,D.a5R,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdu().z,s)
t.r=s.a},
$S:0}
C.esW.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.esX.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bt(v.gdu().z,new C.esV(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.esV.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.es8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f7){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.es9(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.M)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.es9.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.esd.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ese(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.M)(s),++u)v.$1(s[u])}else{t=s.gdu()
if(t!=null)v.$1(t)}},
$S:0}
C.ese.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.esb.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.esc(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.M)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.esc.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f5(w,new C.esa()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.esa.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.es7.prototype={
$0(){return C.cgA(this.b,this.c,this.a.gqt())},
$S:0}
C.eva.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.exp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exq.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.exr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exs.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bg(s,new C.exo(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSo()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hI()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xy()
t.Kd()}},
$S:0}
C.exo.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ewW.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abJ(),s=w.b,r=u.abK(A.fe,A.ke,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.N,r,A.bv,B.p(v,B.B(B.a([B.E(u.aVd(w.c,A.al),1),new B.D(A.fw,B.p(v,D.bO_,A.f,v,v,new B.o(A.fe.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aVd(s,A.fe),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ax,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bv,u.aVg(A.fe,d,D.bKa,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bYf(A.aR,d,A.uc,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aVe(d,"Not now"))
return new C.JZ(B.x(p,A.ai,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.ewV.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JZ(B.x(B.a([v.abJ(),A.N,v.abK(A.aR,D.bJQ,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.42),B.hM(w,new C.ewT(v,u,d),u.length,w,w,A.ag,new C.ewU(),!0),w),A.aA,v.aVe(d,"Cancel")],x.p),A.ai,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.ewU.prototype={
$2(d,e){return A.R},
$S:36}
C.ewT.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.r,1),q=x.p
return B.aF(!1,A.a2,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aok,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c_v,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.nC,w,w,w),A.cO,B.d("Updated "+this.a.Q_(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.j,0,A.p),1),B.X(A.eD,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewS(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:76}
C.ewS.prototype={
$0(){B.a3(this.a,!1).N(this.b.a)
return null},
$S:0}
C.ewP.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abJ()
t=t.abK(A.aE,A.ul,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JZ(B.x(B.a([s,A.N,t,A.bv,B.B(B.a([B.E(B.dQ(A.a9d,new C.ewN(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cj,u,new B.b7(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bG(D.fri,new C.ewO(d),B.bn(A.fe,u,u,u,A.c,u,A.cj,u,new B.b7(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.ewN.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.ewO.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.ewR.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abJ(),s=w.b,r=u.abK(A.aV,A.eb,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.auU("Names",""+w.c),1),A.ab,B.E(u.auU("Fields",""+w.d),1),A.ab,B.E(u.auU("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bi,v,v,v,A.c,v,A.xY,v,new B.b7(B.m(14),A.a0),v,v,v)
return new C.JZ(B.x(B.a([t,A.N,r,A.aO,p,A.bv,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nA,v,v,v),new C.ewQ(d),o),A.R,u.aVf(d,"Stay here",!1)],q),A.ai,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.ewQ.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.etP.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.etO.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.ewH.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exf.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_w(A.d.dM(w.d,new C.exd(v),new C.exe(v)).hI(),w.f,null)},
$S:z+84}
C.exd.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exe.prototype={
$0(){return this.a},
$S:z+85}
C.erz.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fK,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bPM,w,w,w,w,new C.erx(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fpj,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bQZ,w,w,w,w,new C.ery(d),!1,w,w,w,w,w,D.fLG,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dd,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.erx.prototype={
$0(){B.a3(this.a,!1).N("scroll")
return null},
$S:0}
C.ery.prototype={
$0(){B.a3(this.a,!1).N("split")
return null},
$S:0}
C.erA.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bh,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cl,D.Sk,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdu().z,u)
v.r=u.a},
$S:0}
C.erB.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eK(""+1000*l+"_"+k,D.Sk,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bh,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lM(""+1000*p+"_"+o,r+n,"",D.qo,4294967295,null,D.dg,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.erF.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.ky(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bh,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lc,0.35,0.55,0.62)
A.d.M(u.gdu().z,w)
u.r=w.a},
$S:0}
C.erw.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2S(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bh,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.ej(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lc,s,u,t)
A.d.M(p.gdu().z,q)
A.d.bt(p.gdu().z,new C.erv(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.i6x(p)}},
$S:0}
C.erv.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evw.prototype={
$0(){var w=this.a,v=this.b
w.b2S(v)
this.c.at=v.a
w.r=null},
$S:0}
C.exn.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.etS.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bt(r.z,new C.etR())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.etR.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.esh.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.esi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tE()},
$S:9}
C.ert.prototype={
$0(){var w=C.er(A.bh,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.lD,0.8,0.1,0.1),v=this.a
A.d.M(v.gdu().z,w)
v.r=w.a},
$S:0}
C.etj.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.erC.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdu().z,v)
w.r=v.a},
$S:0}
C.erL.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.erM.prototype={
$0(){var w=this.b.hI(),v=C.cE(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdu().z,f)
t.r=f.a},
$S:0}
C.erN.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.erK(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.erK.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.erY.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.erJ(v))
if(u>0){A.d.cG(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.erJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.es0.prototype={
$0(){return this.a.as=A.bh},
$S:0}
C.es1.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.es2.prototype={
$0(){return this.a.as=A.dT},
$S:0}
C.es3.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.es4.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.es5.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.es6.prototype={
$1(d){return d.length!==0},
$S:3}
C.erO.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cE()
A.d.M(v,C.CZ(w.gqt().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdu().z
v=C.cE()
A.d.M(u,C.iY(A.bh,!1,w.gqt().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dg,0.9,0.05,0.02))},
$S:0}
C.erP.prototype={
$0(){var w,v=this.a,u=v.gdu().z,t=C.cE()
A.d.M(u,C.CZ(v.gqt().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdu().z
u=C.cE()
w=C.bCA()
A.d.M(t,C.iY(A.L,!1,v.gqt().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dg,0.9,0.05,0.92))},
$S:0}
C.erQ.prototype={
$0(){A.d.M(this.a.gdu().z,C.CZ(1727914055,0.12,C.cE(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.erR.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdu().z,C.CZ(w,0.08,C.cE(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.erS.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cE()
A.d.M(v,C.CZ(w.gqt().c.j(0.35).l(),0.12,u,D.D5,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdu().z,C.iY(A.bh,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cE(),"Important note",0,D.qp,0.5,0.38,0.52))},
$S:0}
C.erT.prototype={
$0(){var w=this.a
A.d.M(w.gdu().z,C.CZ(4294507260,0.78,C.cE(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdu().z,C.iY(A.bh,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCA()+"\n\nSubject:\n\nBody text\u2026",0,D.dg,0.76,0.12,0.14))},
$S:0}
C.erU.prototype={
$0(){var w=this.a
A.d.M(w.gdu().z,C.CZ(4294897802,0.28,C.cE(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdu().z,C.iY(A.bh,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cE(),"Sticky note",0,D.aHf,0.26,0.64,0.14))},
$S:0}
C.erV.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdu().z,C.CZ(4293060848,0.04,C.cE(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdu().z,C.CZ(w,0.04,C.cE(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.erW.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdu().z,C.iY(A.bh,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Ii,0.42,0.06,0.18))
A.d.M(v.gdu().z,C.iY(A.bh,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uF,0.42,0.52,0.18))},
$S:0}
C.erX.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdu().z,C.CZ(858088427,0.62,C.cE(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdu().z,C.CZ(856004201,0.62,C.cE(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdu().z,C.iY(A.bh,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option A",0,D.dg,0.36,0.08,0.2))
A.d.M(v.gdu().z,C.iY(A.bh,!1,w,A.aF,20,A.bp,A.H,0.1,C.cE(),"Option B",0,D.dg,0.36,0.56,0.2))},
$S:0}
C.erZ.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdu().z,C.CZ(4294967295,0.36,C.cE(),D.bg,w,2,0.24,0.38,0.28))
A.d.M(v.gdu().z,C.iY(A.L,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cE(),"[ QR CODE ]",0,D.dg,0.24,0.38,0.4))},
$S:0}
C.es_.prototype={
$0(){return C.cgA(this.b,D.Sl,this.a.gqt())},
$S:0}
C.eti.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a7D.q(0,d),t=this.a
return t.b7Y(d,v===d,A.b_,this.c,new C.eth(t,u,d,w),u)},
$S:z+25}
C.eth.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDm(r,new C.etg(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etg.prototype={
$0(){return this.a.d4(new C.etf(this.b,this.c))},
$S:0}
C.etf.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.erD.prototype={
$0(){var w,v=this.a,u=v.gqt(),t=C.rA(4294967295,null,0,0,null,C.cE(),D.mL,"","","",D.dg),s=this.b
C.cgA(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.D4){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.esl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.icB(p,q.d,s,new C.esk(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tE(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esk.prototype={
$1(d){return this.bkP(d)},
bkP(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.esj(t,d))
w=2
return B.b(t.tE(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.esj.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.esm.prototype={
$0(){return this.a.bIS()},
$S:0}
C.esn.prototype={
$0(){return this.a.aQt("Class Presentation",!0)},
$S:0}
C.eso.prototype={
$1(d){return this.a.bJO(d.b,this.b,d.a)},
$S:z+88}
C.esZ.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ev9.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eL,x.w).w.f.d),new B.dY(new C.ev8(this.a,this.b),null),null)},
$S:58}
C.ev8.prototype={
$2(d,e){return B.oY(new C.ev7(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:593}
C.ev7.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.I(u?A.bz:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.aiV,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b0,B.bM(!1,A.A5,v,v,!0,v,v,new C.ev5(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.ct(B.a([p.aTc(u,!0,!0,new C.ev6(p,w.d))],q),e,D.bvp,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kS,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.ev5.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.ev6.prototype={
$0(){this.b.$1(new C.ev3())
var w=this.a
if(w.c!=null)w.m(new C.ev4())},
$S:0}
C.ev3.prototype={
$0(){},
$S:0}
C.ev4.prototype={
$0(){},
$S:0}
C.ewI.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:96}
C.ewJ.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,new C.az3(this.a,null),0.94+w*0.06,null,null),w)},
$S:384}
C.ewK.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:96}
C.ewL.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,new C.bcW(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:384}
C.ewM.prototype={
$0(){return A.d.c9(this.a.d,0,C.VZ(this.b))},
$S:0}
C.erI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pI.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.c9.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.a0p,u?A.ae:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c0(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.u6(A.fC,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ax,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.eC,p,p,1/0),14,!1),A.aq)},
$S:275}
C.esN.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.esO.prototype={
$1(d){return d.length!==0},
$S:3}
C.esP.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jO
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0Y:A.BO}return w},
$S:679}
C.esS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dA.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.mX.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ky(v.w)?A.w4:A.qc,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Q_(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Q_(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Q_(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Q_(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Q_(v.f)
r=k.bJM(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a7W(B.aF(!1,A.a2,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.MQ,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aI(l,l,l,l,B.X(A.o8,t?A.aB:A.bL,l,l,l,l),l,l,l,new C.esQ(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ax,A.aD,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.esR(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.d3,l,l,l,l)},
$S:94}
C.esR.prototype={
$0(){return this.a.afb(this.b)},
$S:0}
C.esQ.prototype={
$0(){return this.a.AR(this.b,this.c)},
$S:0}
C.eui.prototype={
$0(){var w=this.a
w.b6y()
w.m(new C.euh())},
$S:0}
C.euh.prototype={
$0(){},
$S:0}
C.euj.prototype={
$1(d){return this.a.ajd(this.b.a,d)},
$S:2}
C.euk.prototype={
$0(){this.a.d4(new C.eug(this.b))},
$S:0}
C.eug.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.eul.prototype={
$0(){this.a.d4(new C.euf(this.b))},
$S:0}
C.euf.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.eum.prototype={
$0(){this.a.d4(new C.eue(this.b))},
$S:0}
C.eue.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mQ},
$S:0}
C.eun.prototype={
$0(){this.a.d4(new C.eud(this.b))},
$S:0}
C.eud.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.euo.prototype={
$0(){var w=this.a
w.d4(new C.euc(w,this.b))},
$S:0}
C.euc.prototype={
$0(){var w=this.b
return w.as=this.a.c41(w.as)},
$S:0}
C.eup.prototype={
$0(){return this.a.d4(new C.eub(this.b))},
$S:0}
C.eub.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.euq.prototype={
$0(){return this.a.d4(new C.eua(this.b))},
$S:0}
C.eua.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eu3.prototype={
$0(){return this.a.a2c(this.b.a)},
$S:0}
C.eu4.prototype={
$0(){this.a.a_I()
return null},
$S:0}
C.eu5.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bW,x.w).w.a.a<900)w.afu()
else w.m(new C.eu2(w))},
$S:0}
C.eu2.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eu6.prototype={
$0(){this.a.d4(new C.eu1(this.b))},
$S:0}
C.eu1.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.eu7.prototype={
$0(){return this.a.d4(new C.eu0(this.b))},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eu8.prototype={
$0(){return this.a.d4(new C.eu_(this.b))},
$S:0}
C.eu_.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eu9.prototype={
$0(){return this.a.azV(null)},
$S:0}
C.etb.prototype={
$0(){this.a.DD()
return null},
$S:0}
C.etc.prototype={
$0(){this.a.aaf()
return null},
$S:0}
C.ete.prototype={
$1(d){return this.bkQ(d)},
bkQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K4(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.av,null,new C.et6(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.et7(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.et8(r))
s=s.c.J(x.q).f
s.R(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.et9(r))
s=s.c.J(x.q).f
s.R(B.b3(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hqP(q,new C.Ez(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.eta(r,p))
s=s.c.J(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agY(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.R(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.et6.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ehd],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bPV:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.et5(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dd,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.et5.prototype={
$0(){B.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.et7.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.et8.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.et9.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eta.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.etd.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zS(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zS(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zS(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agY(r?t:s.db)
s=s==null?t:s.b
return B.a([D.emh,q,v,u,B.zS(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:141}
C.ext.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCx(w,v)}},
$S:0}
C.exu.prototype={
$0(){this.a.DD()
return null},
$S:0}
C.eut.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c_p:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aQ:A.br
return new B.D(A.fv,B.aB(u,B.db(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b8,new B.o(w,u,u,r,u,q,A.n),A.eM,u,u,u,A.ls,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eus(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:132}
C.eus.prototype={
$0(){var w=this.a
return w.m(new C.eur(w,this.b))},
$S:0}
C.eur.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.euu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3Q:E.axG
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbNk():t.gbJc()
return B.hp(B.aB(u,B.p(u,D.anN,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a9(A.a3,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1707}
C.euv.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ibR(v,w.a.c)},
$S:0}
C.evS.prototype={
$0(){return this.b.vh(this.a.a)},
$S:0}
C.evT.prototype={
$0(){return this.a.vh(D.mL)},
$S:0}
C.evU.prototype={
$0(){return this.a.vh(D.Ig)},
$S:0}
C.ew4.prototype={
$0(){return this.a.vh(D.Ih)},
$S:0}
C.ewf.prototype={
$0(){return this.a.vh(D.If)},
$S:0}
C.ewq.prototype={
$0(){return this.a.qd("lab_report")},
$S:0}
C.ewx.prototype={
$0(){return this.a.qd("rubric")},
$S:0}
C.ewy.prototype={
$0(){return this.a.qd("minutes")},
$S:0}
C.ewz.prototype={
$0(){return this.a.qd("agenda")},
$S:0}
C.ewA.prototype={
$0(){return this.a.qd("timeline")},
$S:0}
C.ewB.prototype={
$0(){return this.a.qd(this.b.a)},
$S:0}
C.evV.prototype={
$0(){this.a.VR()
return null},
$S:0}
C.evW.prototype={
$0(){this.a.VL()
return null},
$S:0}
C.evX.prototype={
$0(){return this.a.qd("table")},
$S:0}
C.evY.prototype={
$0(){return this.a.qd("sticky")},
$S:0}
C.evZ.prototype={
$0(){return this.a.qd("divider")},
$S:0}
C.ew_.prototype={
$0(){return this.a.qd("header_bar")},
$S:0}
C.ew0.prototype={
$0(){return this.a.p9(D.bg)},
$S:0}
C.ew1.prototype={
$0(){return this.a.p9(D.eQ)},
$S:0}
C.ew2.prototype={
$0(){return this.a.p9(D.jU)},
$S:0}
C.ew3.prototype={
$0(){return this.a.p9(D.D5)},
$S:0}
C.ew5.prototype={
$0(){return this.a.p9(D.jV)},
$S:0}
C.ew6.prototype={
$0(){return this.a.p9(D.ld)},
$S:0}
C.ew7.prototype={
$0(){return this.a.p9(D.fx)},
$S:0}
C.ew8.prototype={
$0(){this.a.Hn()
return null},
$S:0}
C.ew9.prototype={
$0(){this.a.Nq()
return null},
$S:0}
C.ewa.prototype={
$0(){return this.a.qd("quote")},
$S:0}
C.ewb.prototype={
$0(){return this.a.a8p()},
$S:0}
C.ewc.prototype={
$0(){this.a.a_O()
return null},
$S:0}
C.ewd.prototype={
$0(){var w=this.a
return w.m(new C.evI(w))},
$S:0}
C.evI.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ewe.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o9(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.evQ(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evQ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ewg.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jZ()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a7E.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.r,v?2.5:1),s,s,new B.a9(A.a3,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a7E.q(0,q))u.push(B.ao(s,B.p(s,D.Os,A.f,s,s,D.Em,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fv,B.aB(s,B.hp(new B.an(A.a_,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.evP(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.evP.prototype={
$0(){this.a.a8H(this.b)
return null},
$S:0}
C.ewh.prototype={
$0(){this.a.a8G(this.b)
return null},
$S:0}
C.ewi.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hIp(d),p=this.a,o=B.m(8),n=p.gdu()
n=n==null?r:n.x
w=d.a
n=n===w?A.bi:A.aZ
v=p.gdu()
n=B.I(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rA(4294967295,r,0,0,r,"preview_"+w,D.qo,"","","",D.dg)
C.hnG(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hp0(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.aol,A.f,r,r,D.Em,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.ir,B.aB(r,B.x(B.a([new B.an(A.a_,r,A.aa,A.t,u,r),A.cO,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.evO(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.evO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdu()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o9(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d4(new C.evE(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evE.prototype={
$0(){return C.hnG(this.a,this.b.a)},
$S:0}
C.evR.prototype={
bkR(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a7D.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkR(d,e)},
$S:z+91}
C.ewC.prototype={
$4(d,e,f,g){var w=null,v=B.S(d).k("N<1,v>")
v=B.C(new B.N(d,new C.ewE(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ce(B.B(v,A.m,w,A.e,A.j,0,w,w),A.t,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.ewE.prototype={
$1(d){var w=this
return w.a.b7Y(d,w.b===d,w.c,w.d,new C.ewD(w.e,d),!D.a7D.q(0,d))},
$S:z+25}
C.ewD.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ewj.prototype={
$1(d){this.b.$2(d,new C.evN(this.a,d,this.c))
return null},
$S:z+26}
C.evN.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDm(u,new C.evD(v,this.c,w),w)},
$S:0}
C.evD.prototype={
$0(){return this.a.d4(new C.evB(this.b,this.c))},
$S:0}
C.evB.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ewk.prototype={
$1(d){this.b.$2(d,new C.evM(this.a,d))
return null},
$S:z+26}
C.evM.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fQT(u,new C.evC(v,w),w)},
$S:0}
C.evC.prototype={
$0(){var w=this.a
return w.d4(new C.evA(w,this.b))},
$S:0}
C.evA.prototype={
$0(){return this.a.gdu().r=this.b},
$S:0}
C.ewl.prototype={
$0(){var w=this.a
return w.m(new C.evL(w))},
$S:0}
C.evL.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ewm.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCx(w,v)}},
$S:0}
C.ewn.prototype={
$0(){this.a.I9()
return null},
$S:0}
C.ewo.prototype={
$0(){return this.a.a8p()},
$S:0}
C.ewp.prototype={
$0(){var w=this.a,v=w.jZ()
if(v!=null&&v.b===D.cQ)w.d4(new C.evK(v))},
$S:0}
C.evK.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.ewr.prototype={
$0(){this.a.DD()
return null},
$S:0}
C.ews.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fh(v,!0)
return null},
$S:0}
C.ewt.prototype={
$0(){this.a.d4(new C.evJ(this.b))},
$S:0}
C.evJ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cw:A.O},
$S:0}
C.ewu.prototype={
$0(){this.a.d4(new C.evH(this.b))},
$S:0}
C.evH.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.ewv.prototype={
$0(){this.a.d4(new C.evG(this.b))},
$S:0}
C.evG.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mQ},
$S:0}
C.eww.prototype={
$0(){this.a.d4(new C.evF(this.b))},
$S:0}
C.evF.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.esg.prototype={
$1(d){return this.bkO(d)},
bkO(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o9(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d4(new C.esf(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:193}
C.esf.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ewZ.prototype={
$0(){var w=this.a
return w.d4(new C.ewY(w,this.b))},
$S:0}
C.ewY.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.ex_.prototype={
$0(){var w=this.a
return w.d4(new C.ewX(w,this.b))},
$S:0}
C.ewX.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eto.prototype={
$0(){return this.a.d4(new C.etn(this.b))},
$S:0}
C.etn.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.etp.prototype={
$0(){return this.a.d4(new C.etm(this.b))},
$S:0}
C.etm.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.etW.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.aq0,new C.etV(),w),w.k("ak.E"))
return w},
$S:z+94}
C.etV.prototype={
$1(d){var w=null
return B.zS(B.d(d.b,w,w,w,w,w,w,A.me,w,w,w),48,d,x.fO)},
$S:z+95}
C.exb.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a8(v,w?8:0,null,null)},
$S:36}
C.exa.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kl()?q:new C.ex8(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bi
else v=r.d?A.aZ:A.cr
v=B.I(v,A.r,o?2:1)
u=r.d?A.cp:A.c
t=B.bU(0,C.hp0(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.a_,q,A.aa,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nz,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.ajP,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ex9(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:84}
C.ex9.prototype={
$0(){var w=this.a
return w.m(new C.ex4(w,this.b))},
$S:0}
C.ex4.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kd()},
$S:0}
C.ex8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.ex5(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ex6(q,s))
q.aRW()}else if(r==="del"){q=t.a
q.m(new C.ex7(q,s))
q.aR4()}else if(r==="up")t.a.b34(s,s-1)
else if(r==="down")t.a.b34(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ex5.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bRB,w,w,w,w,new C.ex0(d),!1,w,w,w,w,w,w,w,D.fqh,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bRu,w,w,w,w,new C.ex1(d),!1,w,w,w,w,w,w,w,A.wQ,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bQL,w,w,w,w,new C.ex2(d),!1,w,w,w,w,w,w,w,D.fys,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bSP,w,w,w,w,new C.ex3(d),!1,w,w,w,w,w,w,w,D.fq6,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.ex0.prototype={
$0(){B.a3(this.a,!1).N("dup")
return null},
$S:0}
C.ex1.prototype={
$0(){B.a3(this.a,!1).N("del")
return null},
$S:0}
C.ex2.prototype={
$0(){B.a3(this.a,!1).N("up")
return null},
$S:0}
C.ex3.prototype={
$0(){B.a3(this.a,!1).N("down")
return null},
$S:0}
C.ex6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ex7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exc.prototype={
$0(){return this.a.a8p()},
$S:0}
C.esG.prototype={
$0(){var w=this.a
w.b6y()
w.azV(null)},
$S:0}
C.esF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a9(A.ax,A.aD,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a9(A.ax,A.aD,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c1(A.kM,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.esE(this.a,e.b,e.d,q),B.S(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c1(new B.an(A.a_,p,A.aa,A.f,s,new B.cz("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:386}
C.esE.prototype={
$1(d){var w=this
return w.a.bFb(d,w.b,w.c,w.d)},
$S:z+23}
C.est.prototype={
$0(){var w=this
if(w.b){w.a.Ny(w.c)
return}if(w.d){w.a.a8n(w.c)
return}if(w.e){w.a.agM(w.c)
return}if(w.f)w.a.b76(w.c)},
$S:0}
C.esu.prototype={
$0(){this.a.Ny(this.b)
return null},
$S:0}
C.esv.prototype={
$0(){return this.a.a2c(this.b.a)},
$S:0}
C.esw.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ess(u,d,w.c,w.d))
v.HO()
v.oi()
v.pq()},
$S:21}
C.ess.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.esx.prototype={
$1(d){return this.a.ajd(this.b.a,d)},
$S:2}
C.esz.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h2f(w))u.a.Ny(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b76(v)},
$S:0}
C.esy.prototype={
$0(){return this.a.a2c(this.b.a)},
$S:0}
C.esA.prototype={
$1(d){var w=this,v=w.a
v.m(new C.esr(w.b,d,w.c,w.d))
v.HO()
v.oi()
v.pq()},
$S:21}
C.esr.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.esB.prototype={
$1(d){var w=this.a
w.m(new C.esq(this.b,d))
w.HO()
w.oi()
w.pq()},
$S:211}
C.esq.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.esC.prototype={
$0(){var w=this.a
w.m(new C.esp(this.b))
w.HO()
w.oi()
w.pq()},
$S:0}
C.esp.prototype={
$0(){this.a.r=C.hov()},
$S:0}
C.esD.prototype={
$0(){return this.a.a2c(this.b.a)},
$S:0}
C.eux.prototype={
$0(){var w=this.a
return w.m(new C.euw(w))},
$S:0}
C.euw.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euy.prototype={
$1(d){return this.a.cD3(this.b.a,d)},
$S:2}
C.etC.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:166}
C.etD.prototype={
$1(d){return this.a.$1(new C.etB(this.b,d))},
$S:7}
C.etB.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etE.prototype={
$1(d){return this.a.$1(new C.etA(this.b,d))},
$S:7}
C.etA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.etF.prototype={
$1(d){return this.a.$1(new C.etz(this.b,d))},
$S:7}
C.etz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etG.prototype={
$1(d){return this.a.$1(new C.ety(this.b,d))},
$S:7}
C.ety.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.etH.prototype={
$1(d){return this.a.$1(new C.etx(this.b,d))},
$S:7}
C.etx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.etI.prototype={
$1(d){return this.b.$1(new C.etw(this.a,this.c))},
$S:8}
C.etw.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.etJ.prototype={
$1(d){return this.b.$1(new C.etv(this.a,this.c))},
$S:8}
C.etv.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.etK.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bi:A.cU
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.etu(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:389}
C.etu.prototype={
$0(){return this.a.$1(new C.etr(this.b,this.c))},
$S:0}
C.etr.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.etL.prototype={
$1(d){return this.a.$1(new C.ett(this.b,d))},
$S:1708}
C.ett.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.etM.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ets(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:389}
C.ets.prototype={
$0(){return this.a.$1(new C.etq(this.b,this.c))},
$S:0}
C.etq.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.etN.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a3(w,!1).pE()}else w=!1
if(w){w=v.a.c
w.toString
B.a3(w,!1).eH()}v.a.asy()},
$S:0}
C.etQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dA.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.X(A.ul,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nk,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a2,!0,n,B.aL(!1,m,!0,B.eF(new B.a8(48,48,new B.an(A.A,n,A.aa,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ax,A.aD,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:136}
C.erp.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dA.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.r,1)
return B.aF(!1,A.a2,!0,p,B.aL(!1,o,!0,B.eF(B.x(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ad,B.d(q.e,p,p,p,p,p,p,A.iY,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ax,A.aD,A.x,u,p,p),A.n),p,A.FL,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:136}
C.evu.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.V,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.apa,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a5,w,A.ao,w,w,w,w)
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.evs(d),w,w),B.bG(A.qB,new C.evt(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.evs.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.evt.prototype={
$0(){var w=this.b.a.a
B.a3(this.a,!1).N(w)
return null},
$S:0}
C.d2T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dA.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.av(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.e_.av(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr),w*0.35)
t.toString
t=B.I(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr).j(0.18+w*0.12),A.J,32+w*10),D.acb],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.b3,0.9,A.x,k,0,B.a([A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c0(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ky(j.a.c.w)?D.uw:N.nr).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ky(m)?D.uw:N.nr
s=B.a([new B.ac(0,A.G,A.d.gI(C.ky(m)?D.uw:N.nr).j(0.45+w*0.2),A.cv,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.ky(j.a.c.w)?A.w4:A.qc,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ax,A.aD,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.t,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fI,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.fif,A.L,k,k),A.au,B.d(j.gcy4(),k,k,k,k,k,k,D.fmT,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSo()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.ky(j.a.c.w)?D.uw:N.nr).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ad],m))}s.push(new C.JT(A.yt,"Download PDF","pdf",A.d0,j.J5(0),!1,k))
p=j.a.c
if(!p.z||p.gSo()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JT(A.ke,"Transfer to "+C.hox(p==null?"":p),"transfer_hati",A.aV,j.J5(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J5(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JT(D.bJe,"Rename presentation","rename",A.c9,n,!1,k),A.am,new C.JT(A.alv,"Duplicate","duplicate",A.b5,j.J5(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JT(A.ec,"Delete presentation","delete",A.aw,j.J5(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J5(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J5(n)
s.push(B.dU(B.dd(B.bM(!1,E.aSy,k,k,!0,k,k,new C.d2S(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,A.az,k,D.byA,k,k,k,k,k,A.ki,k,k)),n),new B.t(0,(1-p)*8)))
return B.ed(A.A,B.dd(B.aF(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.aa,A.t,B.a([o,new B.D(D.bxJ,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.aq),A.f,k,A.W0,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d2S.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.d3e.prototype={
$0(){B.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d3f.prototype={
$0(){B.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d2Q.prototype={
$1(d){var w=this.a
return w.m(new C.d2M(w))},
$S:23}
C.d2M.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d2R.prototype={
$1(d){var w=this.a
return w.m(new C.d2L(w))},
$S:64}
C.d2L.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d2P.prototype={
$0(){var w=this.a
return w.m(new C.d2N(w))},
$S:0}
C.d2N.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d2O.prototype={
$0(){var w=this.a.a.e
B.a3(this.b,!1).N(w)
return null},
$S:0}
C.ey9.prototype={
$0(){return $.bkk=!$.bkk},
$S:0}
C.ey_.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaV6())u.awq()},
$S:0}
C.ey8.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ey0.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ey1.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.awq()},
$S:0}
C.exW.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.exX.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.exY.prototype={
$0(){return this.a.y=!1},
$S:0}
C.exZ.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.ey6.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1709}
C.ey7.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i2)return new B.d0(e,!1,d,null)
w=this.a
return w.cw0(w.e,d,e)},
$S:383}
C.ey2.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fA((1-v.gp(0))*1.5708)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ey3.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kc((1-v.gp(0))*1.5708)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ey4.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fA(v.gp(0)*0.8)
w.kc(v.gp(0)*0.35)
return B.fo(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ey5.prototype={
$2(d,e){var w=B.dk(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fA(-v.gp(0)*1.2)
return B.fo(A.a8,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.eya.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYX().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYX().x
t===$&&B.c()
return new C.b1d(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.IR(v.c,t,!0,new B.cz("cine"+u,x.W))},
$S:659}
C.eyc.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bW,x.w).w.a.a*0.55)w.awq()
else w.ckj()},
$S:64}
C.eyb.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fHc.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:477}
C.fHl.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bM(!1,A.dh,w,w,!0,w,w,new C.fHi(d),w,w),B.bM(!1,D.fFS,w,w,!0,w,w,new C.fHj(d,this.b,v),w,w),B.bG(A.aSQ,new C.fHk(d,v,this.c),w)],x.p),w,w,M.tC,new B.a8(320,w,t,w),w,w,w,w,D.fHl,w)},
$S:18}
C.fHi.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.fHj.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
C.h2U(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHk.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a3(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aQ0(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPr(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHb.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cgD.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:537}
C.fHh.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fdZ.prototype={
$1(d){return C.h2S(C.VZ(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fQ8.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:96}
C.fQ9.prototype={
$4(d,e,f,g){var w=A.ct.av(0,e.gp(0))
return B.dd(B.ed(A.A,D.hdN,0.94+w*0.06,null,null),w)},
$S:384}
C.fQa.prototype={
$1(d){var w=this
return new C.W0(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.exG.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.exF.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.W1(u,this.b,w.gaOn(),v,null)},
$S:z+99}
C.exD.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exE.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exH.prototype={
$0(){return this.a.f=!0},
$S:0}
C.exI.prototype={
$0(){return this.a.f=!1},
$S:0}
C.exL.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exM.prototype={
$0(){var w=this.a
return w.m(new C.exK(w))},
$S:0}
C.exK.prototype={
$0(){return this.a.d="one"},
$S:0}
C.exN.prototype={
$0(){var w=this.a
return w.m(new C.exJ(w))},
$S:0}
C.exJ.prototype={
$0(){return this.a.d="all"},
$S:0}
C.exO.prototype={
$1(d){return this.a.bJN(d,this.b)},
$S:z+100}
C.exB.prototype={
$0(){var w=this.a
return w.m(new C.exA(w,this.b))},
$S:0}
C.exA.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.exP.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.exQ.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.exR.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.exS.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fM(new B.fD(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.J(x.q).f.R(D.f4k)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eri())},
$S:0}
C.eri.prototype={
$0(){},
$S:0}
C.erk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:9}
C.erf.prototype={
$1(d){return this.a.m(new C.ere())},
$S:2}
C.ere.prototype={
$0(){},
$S:0}
C.erg.prototype={
$1(d){return this.a.aZY()},
$S:2}
C.erh.prototype={
$0(){B.a3(this.a,!1).N(null)
return null},
$S:0}
C.exV.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q3(),$async$$0)
case 2:if(t.c!=null)t.m(new C.exU(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.exU.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fBw.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eG(new B.jK(this.c,new C.fBv(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:202}
C.fBv.prototype={
$3(d,e,f){return new C.IR(e,!1,!1,new B.cz(e.a,x.W))},
$S:z+102}
C.fBx.prototype={
$1(d){var w=null
return B.ou(!1,B.au(new C.buQ(this.a,this.b,w),w,w,w),w,x.z)},
$S:287}
C.fBB.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmC(),$async$$0)
case 3:w=4
return B.b(B.bN(A.nf,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmC(),$async$$0)
case 5:s=$.aV.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q4))throw B.V("Could not draw the slide.")
u=r.m0(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fBC.prototype={
bll(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hv(A.h5),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hR([J.eV(A.dE.gaQ(r))],"image/png"))
t.toString
s=Am.fUx(t)
w=4
return B.b(new B.qa(s,"load",!1,x.ev).gI(0).d9(0,A.js),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bll(d)},
$S:1713}
C.fBy.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:154}
C.fBz.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:154}
C.fBA.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f88.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.feK,A.L,w,w)},
$S:1714}
C.f89.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bx(v,B.li(A.bm,w,A.dD,8,w,e===0?w:e,w),A.aq)},
$S:566}
C.egq.prototype={
$1(d){this.a.a_9()
return null},
$S:11}
C.ego.prototype={
$0(){return this.a.e=D.btF},
$S:0}
C.egp.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bE
return this.b.e=w},
$S:0}
C.cja.prototype={
$1(d){return A.o.dB(1,d.a)},
$S:z+103}
C.cjb.prototype={
$2(d,e){return(d|e)>>>0},
$S:69};(function aliases(){var w=C.aLZ.prototype
w.bw1=w.t
w=C.aLv.prototype
w.bvx=w.t
w=C.aLh.prototype
w.bvi=w.t
w=C.aLu.prototype
w.bvw=w.t
w=C.aLX.prototype
w.bw_=w.t
w=C.aNf.prototype
w.bxt=w.t
w=C.aKe.prototype
w.buc=w.t
w=C.aM7.prototype
w.bwa=w.t
w=C.aM8.prototype
w.bwb=w.t
w=C.b2U.prototype
w.bqQ=w.aD4})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i9E","anJ",104)
v(C.aJd.prototype,"gc4n","Z3",0)
var r
u(r=C.axR.prototype,"gcxq","cxr",38)
v(r,"gc5c","adx",0)
v(r=C.axN.prototype,"gaYw","E6",3)
v(r,"gc59","c5a",3)
v(r,"gawL","xM",0)
v(r,"gawM","IK",0)
t(C,"ia3","hGb",105)
v(C.aDV.prototype,"gc7I","c7J",3)
s(C,"iae",0,null,["$4$paper$photo$request$template"],["fIB"],106,0)
s(C,"iad",0,null,["$5$doc$history$instruction$photo$template"],["bBQ"],107,0)
v(r=C.aEb.prototype,"gc8q","J2",0)
v(r,"gbJf","WU",0)
v(r,"gc8t","aek",0)
v(r,"gc8s","ZW",0)
v(r,"gaZD","En",0)
v(C.aEd.prototype,"gc8y","ZY",0)
v(r=C.aFA.prototype,"gaZQ","PW",0)
v(r,"gcp9","b3a",3)
v(r,"gcyO","aBb",86)
v(r,"gbN8","aaj",0)
v(r,"gc9_","At",0)
v(r=C.aHw.prototype,"gcj3","a0i",0)
v(r,"gcjb","a0l",0)
v(r,"gbC7","a8N",0)
v(r,"gc93","aew",0)
v(C.aHv.prototype,"gc94","aex",0)
v(C.aBB.prototype,"gbB6","a8A",0)
v(C.azZ.prototype,"gc95","a_8",0)
w(C,"iar","i8l",12)
w(C,"iap","i5i",12)
w(C,"iaq","i7l",12)
v(r=C.aEt.prototype,"gcBZ","cC_",3)
v(r,"gcnr","cns",3)
u(r,"gEt","afb",7)
v(r,"gbGU","arJ",3)
u(r,"gEu","b08",7)
v(r,"gcbe","aeT",0)
v(r,"gca5","aeS",0)
v(r,"gcdo","afc",0)
v(r,"gbJc","a9U",0)
v(r,"gcei","a_I",0)
v(r,"gcej","aft",0)
v(r,"gceQ","afA",0)
v(r,"gcdB","aff",0)
v(r,"gbNk","aan",0)
v(r,"gaRV","aRW",3)
v(r,"gaR3","aR4",3)
v(r,"gaMI","aMJ",3)
v(r,"gaR2","asy",3)
u(r,"gbBn","bBo",80)
v(r,"gaAI","b6h",3)
v(r,"gca7","ca8",3)
v(r,"gbYz","bYA",3)
v(r,"gbLF","bLG",3)
v(r=C.aEw.prototype,"gcAP","cAQ",3)
v(r,"gcAu","cAv",3)
t(C,"ias","i8C",2)
v(r=C.aEu.prototype,"gc9b","J7",0)
v(r,"gcrd","Rm",0)
v(r,"gc98","J6",0)
v(r,"gcDe","a2S",0)
v(r,"gcf1","afH",0)
v(C.aEs.prototype,"gc9c","aZY",3)
v(r=C.aEv.prototype,"gbO7","aay",0)
u(r,"gc99","c9a",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o0,C.RU,C.bHq,C.bFL,C.czk,C.czi,C.bP_,C.b8E,C.czj,C.bEl,C.cj4,C.cj2,C.cj3,C.cj1,C.at_,C.cj0,C.bQ3,C.or,C.aF4,C.jo,C.nN,C.a7V,C.zG,C.lm,C.oF,C.mc,C.zH,C.nR,C.a82,C.aro,C.b1e,C.egf,C.lj,C.EI,C.eu,C.j2,C.Ez,C.xF,C.eK,C.lM,C.i4,C.jH,C.a83,C.afa,C.b1f,C.b2U,C.a2R])
u(B.k7,[C.cHb,C.c00,C.fwK,C.cIH,C.cI3,C.fCe,C.dZI,C.dZH,C.egt,C.egs,C.fDD,C.ff7,C.ff8,C.ceZ,C.cf_,C.cf0,C.ejT,C.eSi,C.eRG,C.eRF,C.eSJ,C.eSg,C.eS9,C.eSs,C.eT8,C.fmF,C.eZi,C.eZh,C.eZL,C.egi,C.fH8,C.dVD,C.fNH,C.fE_,C.cgv,C.cgt,C.cgy,C.fEu,C.fEv,C.fEw,C.fEx,C.cgf,C.cgg,C.dIc,C.cgc,C.fEt,C.f5H,C.dTo,C.cg5,C.efZ,C.fC3,C.euU,C.evi,C.evf,C.eve,C.evp,C.evo,C.ewU,C.ewT,C.ev8,C.ev7,C.erI,C.esS,C.evR,C.exb,C.exa,C.esF,C.etQ,C.erp,C.d2T,C.ey6,C.ey7,C.ey2,C.ey3,C.ey4,C.ey5,C.eya,C.cgD,C.exG,C.exR,C.cjb])
u(B.hS,[C.cHc,C.cHd,C.bQ4,C.ftV,C.c0_,C.c02,C.fKb,C.f6F,C.f6w,C.f6M,C.fe_,C.fe0,C.fwL,C.fwJ,C.fJG,C.ftz,C.fKx,C.cIx,C.cIC,C.cIE,C.cIA,C.cIF,C.cIy,C.cIG,C.cIt,C.cIq,C.cIp,C.cIw,C.cHZ,C.cHX,C.fBg,C.fBh,C.fie,C.fCf,C.fCl,C.fhh,C.cbh,C.fBe,C.fBf,C.fw6,C.fw7,C.fCk,C.fCg,C.fCi,C.fCj,C.fCh,C.fNZ,C.fwa,C.fwb,C.fwe,C.fwf,C.fwi,C.fwj,C.fPr,C.ffz,C.fPC,C.ejq,C.ejr,C.ejs,C.ej8,C.ejk,C.ejl,C.ejn,C.ceY,C.ceW,C.ceX,C.fBV,C.fBX,C.fBW,C.ff9,C.ffa,C.fPF,C.ejY,C.ejZ,C.ejQ,C.ejR,C.ejU,C.ejV,C.fPV,C.eT9,C.eSz,C.eSj,C.eSw,C.eRB,C.eRC,C.eRD,C.eRH,C.eRI,C.eSZ,C.eT5,C.eT7,C.eSI,C.eSK,C.eSO,C.eSP,C.eSQ,C.eSU,C.eSL,C.eSM,C.eRT,C.eRU,C.eRV,C.eRW,C.eRX,C.eRY,C.eRZ,C.eS_,C.eS0,C.eRe,C.eRf,C.eRg,C.eRh,C.eRj,C.eRk,C.eRN,C.eRO,C.eRP,C.eRQ,C.eRR,C.eRo,C.eRp,C.eRq,C.eRr,C.eS8,C.eSr,C.fzj,C.fzi,C.cgm,C.fmE,C.fH4,C.fGY,C.fH0,C.fEY,C.fEZ,C.fF_,C.fzq,C.fzp,C.fzo,C.fzm,C.ff3,C.ff4,C.ff5,C.fQ6,C.eZk,C.eZl,C.eZe,C.eZ8,C.eZE,C.eZF,C.eZH,C.eZI,C.eZD,C.fQ5,C.eZ_,C.flU,C.egh,C.fH6,C.fH7,C.fH9,C.fH2,C.fH3,C.fPj,C.dl2,C.dl8,C.egg,C.fbw,C.fby,C.fbx,C.fbv,C.fAu,C.fAw,C.fdv,C.fGz,C.fGA,C.fGB,C.fGM,C.fGR,C.fGS,C.fGT,C.fGU,C.fGV,C.fGW,C.fGX,C.fGC,C.fGD,C.fGE,C.fGF,C.fGG,C.fGH,C.fGI,C.fGJ,C.fGK,C.fGL,C.fGN,C.fGO,C.fGP,C.fGQ,C.fyk,C.fls,C.flr,C.fHf,C.dVE,C.dVC,C.eY9,C.caT,C.caV,C.fNJ,C.dap,C.dar,C.fNI,C.fNG,C.fQ4,C.fDW,C.da_,C.fwm,C.fwn,C.cgk,C.cgl,C.cgj,C.cg9,C.cga,C.cg6,C.cg7,C.cg8,C.cgB,C.cgw,C.cgr,C.cgs,C.cgu,C.cgx,C.cgz,C.fEy,C.cge,C.cgh,C.cgi,C.cgo,C.cgp,C.fHm,C.fGt,C.cgd,C.cgb,C.fEs,C.fo_,C.cg4,C.eVN,C.fr0,C.exx,C.etX,C.etY,C.evx,C.evl,C.evm,C.etk,C.exi,C.exj,C.exk,C.esJ,C.ev0,C.ev2,C.euD,C.euA,C.etT,C.etU,C.euK,C.esL,C.euW,C.euX,C.euV,C.euZ,C.euY,C.evg,C.evh,C.evj,C.evc,C.et3,C.et0,C.evq,C.esT,C.exh,C.err,C.esW,C.esV,C.es9,C.ese,C.esc,C.esa,C.exp,C.exq,C.exr,C.exo,C.ewW,C.ewV,C.ewP,C.ewR,C.ewH,C.exf,C.exd,C.erz,C.erv,C.etR,C.esi,C.erK,C.erJ,C.es5,C.es6,C.eti,C.esk,C.eso,C.ev9,C.ewI,C.ewJ,C.ewK,C.ewL,C.esN,C.esO,C.esP,C.euj,C.ete,C.et6,C.etd,C.eut,C.euu,C.ewg,C.ewi,C.ewC,C.ewE,C.ewj,C.ewk,C.esg,C.etW,C.etV,C.ex5,C.esE,C.esw,C.esx,C.esA,C.esB,C.euy,C.etC,C.etD,C.etE,C.etF,C.etG,C.etH,C.etI,C.etJ,C.etK,C.etL,C.etM,C.evu,C.d2Q,C.d2R,C.eyc,C.fHc,C.fHl,C.fHb,C.fHh,C.fdZ,C.fQ8,C.fQ9,C.fQa,C.exF,C.exO,C.erk,C.erf,C.erg,C.fBw,C.fBv,C.fBx,C.fBC,C.fBy,C.fBz,C.f88,C.f89,C.egq,C.cja])
u(B.jb,[C.cHe,C.f6B,C.f6G,C.f6H,C.f6C,C.f6D,C.f6E,C.f6u,C.f6v,C.f6x,C.f6y,C.f6L,C.f6K,C.f6A,C.f6z,C.f6I,C.f6J,C.f6O,C.f6P,C.f6N,C.cIz,C.cID,C.cIB,C.cIr,C.cIs,C.cIu,C.cIn,C.cIo,C.cIv,C.cIm,C.cIl,C.cIk,C.cHO,C.cHN,C.cHQ,C.cHY,C.cHR,C.cHP,C.cHT,C.cHU,C.cHV,C.cHS,C.cHW,C.cI_,C.cI0,C.cI1,C.cI2,C.fw4,C.fw5,C.fw2,C.fw3,C.ec6,C.ec4,C.ec5,C.ec7,C.ec8,C.dZG,C.fw8,C.fw9,C.fwc,C.fwd,C.fwg,C.fwh,C.egr,C.fE2,C.fE1,C.ejp,C.ejo,C.ej2,C.eiZ,C.ej9,C.eja,C.ejb,C.ej4,C.ej5,C.ej6,C.ej7,C.ej3,C.ej0,C.ej1,C.ejh,C.eji,C.ejg,C.ejj,C.ejf,C.eje,C.ejd,C.ejm,C.ejc,C.ej_,C.ejX,C.ejL,C.ejM,C.ejS,C.ejN,C.ejP,C.ejO,C.ejW,C.eS1,C.eSp,C.eRL,C.eRM,C.eRJ,C.eRK,C.eSv,C.eSu,C.eSt,C.eSy,C.eSx,C.eRA,C.eRE,C.eRz,C.eRy,C.eRv,C.eRx,C.eRw,C.eT6,C.eT_,C.eSY,C.eT0,C.eSX,C.eT1,C.eSW,C.eT2,C.eT3,C.eT4,C.eSV,C.eSH,C.eSC,C.eSN,C.eSG,C.eSR,C.eSF,C.eSS,C.eSE,C.eST,C.eSD,C.eSm,C.eSl,C.eSn,C.eSk,C.eSo,C.eSe,C.eSd,C.eSf,C.eSc,C.eSb,C.eSa,C.eRi,C.eRd,C.eRs,C.eRn,C.eRt,C.eRm,C.eRu,C.eRl,C.eSh,C.eS5,C.eS4,C.eS6,C.eS3,C.eS7,C.eS2,C.eSq,C.eSB,C.eSA,C.eRS,C.fH_,C.fH1,C.fH5,C.fzn,C.fBO,C.fBM,C.fBN,C.eZm,C.eZn,C.eZj,C.eZd,C.eZc,C.eZf,C.eZg,C.eZ2,C.eZ3,C.eZ5,C.eZ6,C.eZ7,C.eZ4,C.eZ9,C.eZA,C.eZB,C.eZz,C.eZC,C.eZy,C.eZx,C.eZw,C.eZG,C.eZv,C.eZu,C.eZt,C.eZJ,C.eZs,C.eZK,C.eZr,C.eZq,C.eZa,C.eZb,C.eZp,C.eZo,C.eYW,C.eYX,C.eYY,C.eYZ,C.eYV,C.eZ0,C.eZ1,C.dl1,C.dl3,C.dl6,C.dl7,C.dl5,C.dl4,C.fAv,C.fyl,C.caU,C.caW,C.dai,C.dan,C.dao,C.dam,C.dal,C.daq,C.dak,C.daj,C.das,C.fNF,C.dh4,C.dh5,C.dh6,C.fwk,C.fwl,C.cgC,C.erl,C.erm,C.ern,C.ero,C.fnY,C.fnZ,C.dTq,C.dTp,C.d7e,C.d7d,C.exz,C.exy,C.etZ,C.ewF,C.exv,C.evv,C.exl,C.exm,C.exw,C.euE,C.esH,C.esI,C.ev1,C.euC,C.euz,C.euB,C.euF,C.euG,C.euH,C.euI,C.euJ,C.euL,C.esM,C.euO,C.euP,C.euQ,C.euR,C.euS,C.euT,C.euN,C.ev_,C.evd,C.evb,C.evk,C.euM,C.et1,C.et2,C.et4,C.evn,C.evr,C.erG,C.et_,C.esY,C.evz,C.esU,C.evy,C.esK,C.etl,C.exg,C.ewG,C.erH,C.erE,C.eru,C.erq,C.ers,C.esX,C.es8,C.esd,C.esb,C.es7,C.eva,C.exs,C.ewS,C.ewN,C.ewO,C.ewQ,C.etP,C.etO,C.exe,C.erx,C.ery,C.erA,C.erB,C.erF,C.erw,C.evw,C.exn,C.etS,C.esh,C.ert,C.etj,C.erC,C.erL,C.erM,C.erN,C.erY,C.es0,C.es1,C.es2,C.es3,C.es4,C.erO,C.erP,C.erQ,C.erR,C.erS,C.erT,C.erU,C.erV,C.erW,C.erX,C.erZ,C.es_,C.eth,C.etg,C.etf,C.erD,C.esl,C.esj,C.esm,C.esn,C.esZ,C.ev5,C.ev6,C.ev3,C.ev4,C.ewM,C.esR,C.esQ,C.eui,C.euh,C.euk,C.eug,C.eul,C.euf,C.eum,C.eue,C.eun,C.eud,C.euo,C.euc,C.eup,C.eub,C.euq,C.eua,C.eu3,C.eu4,C.eu5,C.eu2,C.eu6,C.eu1,C.eu7,C.eu0,C.eu8,C.eu_,C.eu9,C.etb,C.etc,C.et5,C.et7,C.et8,C.et9,C.eta,C.ext,C.exu,C.eus,C.eur,C.euv,C.evS,C.evT,C.evU,C.ew4,C.ewf,C.ewq,C.ewx,C.ewy,C.ewz,C.ewA,C.ewB,C.evV,C.evW,C.evX,C.evY,C.evZ,C.ew_,C.ew0,C.ew1,C.ew2,C.ew3,C.ew5,C.ew6,C.ew7,C.ew8,C.ew9,C.ewa,C.ewb,C.ewc,C.ewd,C.evI,C.ewe,C.evQ,C.evP,C.ewh,C.evO,C.evE,C.ewD,C.evN,C.evD,C.evB,C.evM,C.evC,C.evA,C.ewl,C.evL,C.ewm,C.ewn,C.ewo,C.ewp,C.evK,C.ewr,C.ews,C.ewt,C.evJ,C.ewu,C.evH,C.ewv,C.evG,C.eww,C.evF,C.esf,C.ewZ,C.ewY,C.ex_,C.ewX,C.eto,C.etn,C.etp,C.etm,C.ex9,C.ex4,C.ex8,C.ex0,C.ex1,C.ex2,C.ex3,C.ex6,C.ex7,C.exc,C.esG,C.est,C.esu,C.esv,C.ess,C.esz,C.esy,C.esr,C.esq,C.esC,C.esp,C.esD,C.eux,C.euw,C.etB,C.etA,C.etz,C.ety,C.etx,C.etw,C.etv,C.etu,C.etr,C.ett,C.ets,C.etq,C.etN,C.evs,C.evt,C.d2S,C.d3e,C.d3f,C.d2M,C.d2L,C.d2P,C.d2N,C.d2O,C.ey9,C.ey_,C.ey8,C.ey0,C.ey1,C.exW,C.exX,C.exY,C.exZ,C.eyb,C.fHi,C.fHj,C.fHk,C.exC,C.exD,C.exE,C.exH,C.exI,C.exL,C.exM,C.exK,C.exN,C.exJ,C.exB,C.exA,C.exP,C.exQ,C.exS,C.exT,C.erj,C.eri,C.ere,C.erh,C.exV,C.exU,C.fBB,C.fBA,C.ego,C.egp])
t(C.aRl,B.J)
u(B.lW,[C.a3P,C.axj,C.aw0,C.xD,C.xG,C.kV,C.to,C.By,C.rz,C.w4,C.arW,C.IS,C.arn,C.uM,C.mE,C.hF,C.a8H])
u(C.bP_,[C.czl,C.bP0])
u(C.cj4,[C.cj8,C.asZ])
t(C.cj7,C.cj2)
t(C.cj6,C.cj1)
t(C.cj9,C.cj6)
t(C.cj5,C.cj3)
t(C.cj_,C.cj0)
t(C.baa,B.oW)
t(C.ct8,B.avt)
t(C.a8t,B.xr)
t(C.aVQ,B.dG)
t(C.aAU,B.auk)
u(B.ag,[C.a0T,C.YC,C.YA,C.aqz,C.VP,C.VQ,C.a_T,C.a0p,C.a0o,C.aE5,C.ZM,C.NA,C.Zj,C.ZE,C.aoy,C.aIV,C.V6,C.azI,C.a7L,C.O1,C.az3,C.JT,C.a_w,C.W0,C.W1,C.aEr,C.ars,C.a7M])
u(B.ah,[C.aJd,C.axR,C.axN,C.aDV,C.aEb,C.aEd,C.aFA,C.aHw,C.aHv,C.aLZ,C.aBB,C.aLv,C.azZ,C.bg1,C.aLh,C.aNf,C.aLu,C.bdW,C.aLX,C.aM7,C.aKe,C.bcH,C.aM8,C.aEu,C.bkj,C.aEs,C.aEv,C.bk2])
u(B.av,[C.axP,C.adh,C.acG,C.bj8,C.adk,C.af0,C.b0Q,C.bss,C.b1a,C.blA,C.br0,C.b_4,C.b1d,C.adn,C.adE,C.b1b,C.IR,C.b_7,C.bcW,C.PH,C.JZ,C.bhy,C.bhx,C.buQ])
u(B.Hl,[C.bco,C.btR,C.aJx,C.bf5,C.bro])
u(B.mT,[C.bcn,C.b8W,C.brl,C.bbV,C.bfs,C.bhE,C.bez,C.bfp,C.bf7,C.bnS,C.ba2,C.b9H,C.buN,C.brO,C.bqX,C.bes,C.b18,C.bpU,C.bqU])
t(C.bk0,C.aLZ)
t(C.bjp,C.aLv)
t(C.bja,C.aLh)
t(C.buj,C.aNf)
t(C.bjl,C.aLu)
t(C.bjZ,C.aLX)
t(C.bx3,C.aM7)
t(C.aEt,C.bx3)
t(C.bcI,C.aKe)
t(C.aEw,C.aM8)
t(C.buE,B.iU)
t(C.a8G,B.ku)
t(C.cjc,C.b2U)
t(C.aif,C.a2R)
u(B.XC,[C.aRb,C.aSI])
t(C.awW,C.aRb)
w(C.aLZ,B.cq)
w(C.aLv,B.cq)
w(C.aLh,B.cq)
w(C.aLu,B.cq)
w(C.aLX,B.cq)
w(C.aNf,B.cq)
w(C.aKe,B.eT)
w(C.aM7,B.cq)
v(C.bx3,B.ez)
w(C.aM8,B.cq)})()
B.jL(b.typeUniverse,JSON.parse('{"aRV":{"hL":["aRV"]},"o0":{"aRV":[],"hL":["aRV"]},"aRl":{"J":["RU"],"J.E":"RU"},"baa":{"oW":[]},"a8t":{"xr":[],"ol":[]},"aVQ":{"dG":[],"cA":[],"v":[]},"aAU":{"aT":[],"d7":["aT"],"aS":[],"cw":[]},"a0T":{"ag":[],"v":[]},"aJd":{"ah":["a0T"]},"YC":{"ag":[],"v":[]},"YA":{"ag":[],"v":[]},"axR":{"ah":["YC"]},"axN":{"ah":["YA"]},"axP":{"av":[],"v":[]},"aqz":{"ag":[],"v":[]},"aDV":{"ah":["aqz"]},"adh":{"av":[],"v":[]},"acG":{"av":[],"v":[]},"adk":{"av":[],"v":[]},"af0":{"av":[],"v":[]},"bj8":{"av":[],"v":[]},"VP":{"ag":[],"v":[]},"aEb":{"ah":["VP"]},"b0Q":{"av":[],"v":[]},"bco":{"aC":[]},"bcn":{"aC":[]},"btR":{"aC":[]},"b8W":{"aC":[]},"brl":{"aC":[]},"VQ":{"ag":[],"v":[]},"aEd":{"ah":["VQ"]},"bbV":{"aC":[]},"a_T":{"ag":[],"v":[]},"aFA":{"ah":["a_T"]},"bfs":{"aC":[]},"a0p":{"ag":[],"v":[]},"a0o":{"ag":[],"v":[]},"aE5":{"ag":[],"v":[]},"ZM":{"ag":[],"v":[]},"aHw":{"ah":["a0p"]},"aHv":{"ah":["a0o"]},"bk0":{"ah":["aE5"]},"bhE":{"aC":[]},"aBB":{"ah":["ZM"]},"bss":{"av":[],"v":[]},"b1a":{"av":[],"v":[]},"blA":{"av":[],"v":[]},"NA":{"ag":[],"v":[]},"Zj":{"ag":[],"v":[]},"bjp":{"ah":["NA"]},"br0":{"av":[],"v":[]},"bez":{"aC":[]},"b_4":{"av":[],"v":[]},"azZ":{"ah":["Zj"]},"ZE":{"ag":[],"v":[]},"bg1":{"ah":["ZE"]},"bfp":{"aC":[]},"bf7":{"aC":[]},"bnS":{"aC":[]},"ba2":{"aC":[]},"b9H":{"aC":[]},"buN":{"aC":[]},"brO":{"aC":[]},"bqX":{"aC":[]},"bes":{"aC":[]},"aoy":{"ag":[],"v":[]},"b1d":{"av":[],"v":[]},"bja":{"ah":["aoy"]},"adn":{"av":[],"v":[]},"adE":{"av":[],"v":[]},"aIV":{"ag":[],"v":[]},"V6":{"ag":[],"v":[]},"IR":{"av":[],"v":[]},"azI":{"ag":[],"v":[]},"a7L":{"ag":[],"v":[]},"b1b":{"av":[],"v":[]},"b18":{"aC":[]},"buj":{"ah":["aIV"]},"aJx":{"aC":[]},"bjl":{"ah":["V6"]},"bdW":{"ah":["azI"]},"bjZ":{"ah":["a7L"]},"b_7":{"av":[],"v":[]},"bf5":{"aC":[]},"bpU":{"aC":[]},"bqU":{"aC":[]},"az3":{"ag":[],"v":[]},"JT":{"ag":[],"v":[]},"a_w":{"ag":[],"v":[]},"JZ":{"av":[],"v":[]},"O1":{"ag":[],"v":[]},"aEt":{"ah":["O1"],"ez":[]},"bcI":{"ah":["az3"]},"bcW":{"av":[],"v":[]},"bcH":{"ah":["JT"]},"PH":{"av":[],"v":[]},"aEw":{"ah":["a_w"]},"bro":{"aC":[]},"bhy":{"av":[],"v":[]},"bhx":{"av":[],"v":[]},"W0":{"ag":[],"v":[]},"W1":{"ag":[],"v":[]},"aEr":{"ag":[],"v":[]},"ars":{"ag":[],"v":[]},"aEu":{"ah":["W0"]},"bkj":{"ah":["W1"]},"aEs":{"ah":["aEr"]},"buE":{"iU":[]},"aEv":{"ah":["ars"]},"buQ":{"av":[],"v":[]},"a7M":{"ag":[],"v":[]},"bk2":{"ah":["a7M"]},"a8G":{"ku":["fu<eQ>"],"ki":["fu<eQ>"]},"aif":{"a2R":[]},"aRb":{"j5":[],"fg":[]},"awW":{"j5":[],"fg":[]},"aSI":{"j5":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LL"),U:w("vy<q8>"),bz:w("u"),M:w("dD<n>"),bo:w("jB"),g7:w("Mj"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("Mw"),fS:w("DY"),an:w("I2"),bm:w("O<RU>"),X:w("O<a2Z>"),f3:w("O<aRV>"),aK:w("O<nf>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lE>"),d5:w("O<aA<by<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dI>>"),fG:w("O<aA<~>>"),aF:w("O<nl>"),cd:w("O<ai<jo>>"),ez:w("O<a7<n,aD>>"),d:w("O<a7<n,@>>"),B:w("O<mA>"),h:w("O<jo>"),gE:w("O<zG>"),k:w("O<or>"),g:w("O<lM>"),D:w("O<i4>"),u:w("O<eK>"),m:w("O<uM>"),i:w("O<hF>"),aC:w("O<a82>"),o:w("O<zH>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<he>"),cR:w("O<iS>"),J:w("O<jh>"),gx:w("O<pf<n>>"),f2:w("O<+(a1,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(L,L)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cS>"),s:w("O<n>"),aS:w("O<iU>"),p:w("O<v>"),eR:w("O<fg>"),fT:w("O<b8E>"),bx:w("O<aF4>"),gz:w("O<afa>"),x:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<H?>"),cA:w("O<ci>"),A:w("cy<ah<ag>>"),gL:w("ai<or>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("by<H,+icon3d,picture(n?,n?)>"),P:w("a7<n,@>"),f:w("a7<@,@>"),gI:w("a7<H,+icon3d,picture(n?,n?)>"),bR:w("N<hF,v>"),eC:w("N<nR,n>"),cT:w("N<jH,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,pM>"),gh:w("N<mE,jq<mE>>"),w:w("iE"),ei:w("iA"),g2:w("rp"),fB:w("Ez"),b6:w("zG"),gX:w("a7V"),dt:w("lm"),ea:w("or"),bt:w("lM"),I:w("i4"),F:w("eK"),fO:w("mE"),ff:w("uM"),fP:w("hF"),Q:w("w4"),dO:w("aro"),a:w("cr"),C:w("aD"),dw:w("at_"),di:w("a8H"),Y:w("eQ"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("F5"),dB:w("dx<t>"),bJ:w("dx<n>"),_:w("e1<n>"),N:w("n"),fw:w("q8"),bO:w("as"),K:w("bp<t>"),b:w("bp<L>"),E:w("dI"),W:w("cz<n>"),ac:w("cz<H>"),ex:w("jK<lM>"),cI:w("jK<n>"),cl:w("jK<L>"),b4:w("Z<lj>"),a8:w("Z<mc>"),fR:w("Z<+(n,n)>"),co:w("ea<t>"),l:w("v"),b2:w("bY<~>"),ev:w("qa<dW>"),dT:w("bg<~>"),cQ:w("aAU"),q:w("n4"),y:w("R"),gR:w("L"),z:w("@"),S:w("H"),at:w("bb?"),gw:w("ai<a7<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i4?"),go:w("b1f?"),a6:w("a83?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dI,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aYa=new B.bK(A.ax,null,null,H.aoV,null)
D.aYj=new B.df(0,-0.15)
D.aYl=new B.df(0.62,0)
D.aYo=new B.df(-0.35,-0.45)
D.aYy=new B.df(0.9,-0.85)
D.b_s=new B.bk(H.T_,H.T_,A.hH,A.hH)
D.b_H=new B.ay(A.b5,1,A.r,-1)
D.bkr=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b_T=new B.ay(D.bkr,1,A.r,-1)
D.b04=new B.ay(A.aC,1.5,A.r,-1)
D.b09=new B.ay(A.b5,1.6,A.r,-1)
D.b0p=new B.ay(A.aC,1.4,A.r,-1)
D.b1N=new B.o(null,null,null,null,null,L.H1,A.a6)
D.c0B=new B.a9(A.a3,A.a8,A.x,G.a3Q,null,null)
D.b1V=new B.o(null,null,null,null,null,D.c0B,A.a6)
D.ac1=new B.o(A.av,null,null,A.te,null,null,A.n)
D.bdP=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bko=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.cZs=w([D.bdP,D.bko],x.O)
D.enE=new B.c0(A.A,0.5,A.x,null,0,D.cZs,null,null)
D.b2d=new B.o(null,null,null,null,null,D.enE,A.a6)
D.Xx=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b0F=new B.bJ(P.vk,A.a0,A.a0,A.a0)
D.b2f=new B.o(D.Xx,null,D.b0F,null,null,null,A.n)
D.c2l=new B.a9(A.a3,A.a8,A.x,A.QD,null,null)
D.b2m=new B.o(null,null,null,null,null,D.c2l,A.a6)
D.adB=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b2p=new B.o(D.adB,null,null,A.qM,null,null,A.n)
D.b2t=new B.o(A.jr,null,null,null,null,null,A.a6)
D.b2w=new B.o(A_.aeJ,null,H.abG,A.mi,null,null,A.n)
D.Em=new B.o(A.dI,null,null,null,null,null,A.a6)
D.b2D=new B.o(null,null,null,null,null,E.wl,A.a6)
D.d3u=w([E.afF,A.bZ],x.O)
D.c1X=new B.a9(A.b3,A.b6,A.x,D.d3u,null,null)
D.b2H=new B.o(null,null,null,A.mi,null,D.c1X,A.n)
D.dem=w([A.bi,A.dI,A.k4],x.O)
D.a1X=new B.a9(A.ax,A.aD,A.x,D.dem,null,null)
D.b2U=new B.o(null,null,null,null,null,D.a1X,A.n)
D.b2V=new B.o(D.adB,null,null,A.kS,null,null,A.n)
D.ctK=w([A.d7,A.bi],x.O)
D.c1O=new B.a9(A.ax,A.aD,A.x,D.ctK,null,null)
D.b2Z=new B.o(null,null,null,null,null,D.c1O,A.n)
D.b38=new B.o(null,null,null,null,null,G.uq,A.a6)
D.b3t=new B.o(A.afH,null,null,null,null,null,A.a6)
D.beJ=new B.u(0.5647058823529412,0,0,0,A.q)
D.acb=new B.ac(0,A.G,D.beJ,A.Sw,28)
D.b5C=new B.aW2()
D.b6a=new C.ct8()
D.b6m=new C.baa()
D.acH=new B.cn(A.A,null,null,A.a1M,null)
D.b8Z=new B.fi(null,null,null,null,null,E.n4,null,null,null,null)
D.b6U=new B.cn(A.A,null,null,D.b8Z,null)
D.bM5=new B.ae(A.e3,28,A.c,null,null,null)
D.b7p=new B.cn(A.A,null,null,D.bM5,null)
D.b8W=new B.fi(2,null,null,null,null,A.c_,null,null,null,null)
D.b7M=new B.cn(A.A,null,null,D.b8W,null)
D.bMq=new B.ae(L.Of,40,A.bx,null,null,null)
D.b7N=new B.cn(A.A,null,null,D.bMq,null)
D.b9Q=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.ba1=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bar=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.baz=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bb5=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bbn=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bbp=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.Lb=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bbR=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bbY=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.adU=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bcN=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bdE=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ae8=new B.u(1,1,1,0.9725490196078431,A.q)
D.bdY=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bea=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bee=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bes=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.beO=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bgn=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Xh=new B.u(0.8509803921568627,0,0,0,A.q)
D.bgx=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bgE=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.af1=new B.u(0.6,0,0,0,A.q)
D.af3=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bif=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tA=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.biG=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bj7=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bjv=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.afS=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.XH=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.B4=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.LL=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jo=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.agh=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.XT=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bn7=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bnE=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bnS=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.Yf=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bp4=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.xM=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bpA=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bpU=new B.hK(A.aZ,!0,null,null)
D.fl7=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLy=new B.y("Bio link",null,D.fl7,null,null,null,null,null,null,null,null,null)
D.b7G=new B.cn(A.A,null,null,D.fLy,null)
D.bq9=new B.hK(A.WA,!0,D.b7G,null)
D.Mb=new C.a3P(0,"none")
D.ahn=new C.a3P(1,"deflate")
D.aho=new C.a3P(2,"bzip2")
D.br7=new B.kn(0.165,0.84,0.44,1)
D.d3O=w([A.ca,A.dD,A.aC],x.O)
D.c15=new B.a9(A.ax,A.aD,A.x,D.d3O,null,null)
D.b1S=new B.o(null,null,null,null,null,D.c15,A.n)
D.bVn=new B.ae(A.eV,null,A.ae,null,null,null)
D.b8i=new B.cn(A.A,null,null,D.bVn,null)
D.brE=new B.kS(D.b1S,A.bf,D.b8i,null)
D.bnn=new B.u(0.058823529411764705,1,1,1,A.q)
D.d74=w([A.bz,A.qV,A.qV,D.bnn],x.O)
D.cL4=w([0,0.32,0.7,1],x.x)
D.c1E=new B.a9(A.ax,A.aD,A.x,D.d74,D.cL4,null)
D.b1H=new B.o(null,null,null,null,null,D.c1E,A.n)
D.brK=new B.kS(D.b1H,A.bf,null,null)
D.bsS=new B.ms(1,1,null,null,null,A.bm,null)
D.bsV=new B.ms(1,null,null,null,null,D.XT,null)
D.bto=new B.bb(125e4)
D.btu=new B.bb(17e4)
D.btF=new B.bb(35964e8)
D.btM=new B.bb(55e4)
D.btQ=new B.bb(68e4)
D.buf=new B.ii(0,0,0,5)
D.buv=new B.Q(0,16,16,0)
D.buG=new B.Q(0,36,0,36)
D.buO=new B.Q(0,54,0,0)
D.buV=new B.Q(10,0,10,3)
D.bv5=new B.ii(10,16,10,10)
D.bvh=new B.Q(10,6,4,6)
D.bvk=new B.Q(10,8,10,6)
D.ail=new B.Q(11,8,11,11)
D.bvp=new B.Q(12,0,12,24)
D.bvB=new B.Q(12,12,12,4)
D.bvE=new B.Q(12,12,8,12)
D.bvT=new B.Q(12,8,8,12)
D.bwf=new B.Q(14,14,14,0)
D.bwk=new B.Q(14,14,14,90)
D.bwF=new B.Q(16,10,16,16)
D.bwG=new B.Q(16,10,16,20)
D.aj7=new B.Q(16,6,16,28)
D.bxf=new B.Q(18,0,18,10)
D.bxh=new B.Q(18,0,18,30)
D.bxj=new B.Q(18,10,18,12)
D.bxk=new B.Q(18,10,18,14)
D.bxE=new B.Q(18,16,14,18)
D.bxJ=new B.Q(18,18,18,12)
D.bxP=new B.Q(18,26,18,12)
D.bxU=new B.Q(18,34,18,34)
D.bxV=new B.Q(18,4,18,14)
D.by_=new B.Q(18,8,18,24)
D.byi=new B.Q(20,16,14,4)
D.byn=new B.Q(20,18,12,4)
D.bys=new B.Q(20,20,12,20)
D.byv=new B.Q(20,22,20,20)
D.byA=new B.Q(20,6,20,6)
D.byK=new B.Q(22,18,22,18)
D.byS=new B.Q(22,24,22,0)
D.byV=new B.Q(22,24,22,4)
D.bz2=new B.Q(22,60,22,22)
D.bz8=new B.Q(24,24,24,22)
D.bzi=new B.Q(26,10,60,10)
D.bzq=new B.Q(28,44,28,44)
D.bzH=new B.Q(32,44,32,44)
D.bzP=new B.Q(38,30,38,20)
D.bzU=new B.Q(4,0,0,6)
D.bA5=new B.ii(4,4,4,4)
D.bAw=new B.ii(6,5,6,5)
D.bAB=new B.Q(6,6,8,6)
D.bAM=new B.Q(8,14,8,14)
D.bAN=new B.Q(8,22,8,22)
D.bAV=new B.Q(8,6,12,6)
D.bB3=new B.Q(8,8,8,4)
D.ak1=new B.Q(9,9,9,6)
D.bBe=new B.ii(2.5,2.5,2.5,2.5)
D.bBf=new B.Q(10.5,0,10.5,0)
D.bBg=new B.Q(7,1.5,7,1.5)
D.cWv=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bBw=new B.z3(null,null,D.cWv,A.AJ)
D.cTp=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bBx=new B.z3(null,null,D.cTp,A.AJ)
D.aSc=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKR=new B.y("WORD DESIGN",null,D.aSc,null,null,null,null,null,null,null,null,null)
D.bC6=new B.bA(1,A.bd,D.fKR,null)
D.fKw=new B.y("Slides database",null,Ab.rX,null,null,null,null,null,null,null,null,null)
D.fHJ=new B.y("Admin only \xb7 keep as many as you like",null,U.aRI,null,null,null,null,null,null,null,null,null)
D.dmP=w([D.fKw,A.bA,D.fHJ],x.p)
D.bqz=new B.fj(A.ag,A.e,A.j,A.E,null,A.p,null,0,D.dmP,null)
D.bC9=new B.bA(1,A.bd,D.bqz,null)
D.fC3=new B.y("NGMY logo",null,A.fV,null,null,null,null,null,null,null,null,null)
D.bCc=new B.bA(1,A.bd,D.fC3,null)
D.fiW=new B.F(!0,A.ae,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMR=new B.y("TALK TO THE EDITOR",null,D.fiW,null,null,null,null,null,null,null,null,null)
D.bCu=new B.bA(1,A.bd,D.fMR,null)
D.fvS=new B.y("Tell the AI what to change",null,Ab.rX,null,null,null,null,null,null,null,null,null)
D.bCP=new B.bA(1,A.bd,D.fvS,null)
D.bE0=new B.DM(!0,"video/mp4")
D.fhd=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftP=new B.y("Move presentations between devices",null,D.fhd,null,null,null,!1,null,null,1,null,null)
D.bE4=new B.qt(A.e0,A.a3,A.f,D.ftP,null)
D.fv2=new B.y("Edit in Slides",null,A.iY,null,null,null,null,null,null,null,null,null)
D.bE5=new B.qt(A.e0,A.A,A.f,D.fv2,null)
D.bEk=new B.dr(1,A.cn,D.bE5,null)
D.a0d=new B.a1(60988,"MaterialIcons",!1)
D.bHJ=new B.a1(61352,"MaterialIcons",!1)
D.alz=new B.a1(61531,"MaterialIcons",!1)
D.bIW=new B.a1(63062,"MaterialIcons",!1)
D.bJ2=new B.a1(63109,"MaterialIcons",!1)
D.bJe=new B.a1(63206,"MaterialIcons",!1)
D.amj=new B.a1(63238,"MaterialIcons",!1)
D.bJw=new B.a1(63338,"MaterialIcons",!1)
D.a0K=new B.a1(63365,"MaterialIcons",!1)
D.a0L=new B.a1(63367,"MaterialIcons",!1)
D.a0M=new B.a1(63368,"MaterialIcons",!1)
D.amu=new B.a1(63384,"MaterialIcons",!1)
D.bJN=new B.a1(63525,"MaterialIcons",!1)
D.bJQ=new B.a1(63568,"MaterialIcons",!1)
D.bKa=new B.a1(983072,"MaterialIcons",!1)
D.bKy=new B.a1(983271,"MaterialIcons",!0)
D.anD=new B.a1(983965,"MaterialIcons",!1)
D.anE=new B.a1(983966,"MaterialIcons",!1)
D.bLq=new B.a1(984592,"MaterialIcons",!1)
D.bLI=new B.ae(A.u7,16,A.aB,null,null,null)
D.bLP=new B.ae(A.ob,null,A.c,null,null,null)
D.anN=new B.ae(A.qb,18,A.c,null,null,null)
D.bM6=new B.ae(A.BN,18,O.lo,null,null,null)
D.bMN=new B.ae(A.jN,11,null,null,null,null)
D.bMX=new B.ae(A.a0u,null,A.eo,null,null,null)
D.bNu=new B.ae(A.ri,18,A.aB,null,null,null)
D.bNA=new B.ae(A3.C0,14,null,null,null,null)
D.bNB=new B.ae(A.ec,28,A.cs,null,null,null)
D.bNN=new B.ae(A.qc,20,A.c,null,null,null)
D.bNU=new B.ae(A.yH,null,null,null,null,null)
D.bO_=new B.ae(A.kE,18,A.iI,null,null,null)
D.bO4=new B.ae(A.l3,null,null,null,null,null)
D.bIY=new B.a1(63065,"MaterialIcons",!1)
D.bOI=new B.ae(D.bIY,15,A.c,null,null,null)
D.bJ3=new B.a1(63113,"MaterialIcons",!1)
D.bOO=new B.ae(D.bJ3,null,A.ae,null,null,null)
D.bPb=new B.ae(A.u4,22,A.bM,null,null,null)
D.bPv=new B.ae(A.w2,18,null,null,null,null)
D.bPB=new B.ae(A.C4,12,A.c,null,null,null)
D.bL3=new B.a1(983687,"MaterialIcons",!1)
D.bPM=new B.ae(D.bL3,null,A.bi,null,null,null)
D.bPV=new B.ae(A.hD,null,A.bi,null,null,null)
D.bQd=new B.ae(A.p6,22,A.c,null,null,null)
D.bQh=new B.ae(A.cx,13,A.c,null,null,null)
D.bQn=new B.ae(A.ec,26,A.aw,null,null,null)
D.bQr=new B.ae(A.rm,26,A.c,null,null,null)
D.Os=new B.ae(A.jN,8,A.c,null,null,null)
D.bQK=new B.ae(A.qb,40,A.c,null,null,null)
D.bQL=new B.ae(A.bGG,null,null,null,null,null)
D.bQP=new B.ae(A.ui,20,null,null,null,null)
D.bL2=new B.a1(983683,"MaterialIcons",!1)
D.bQZ=new B.ae(D.bL2,null,A.b_,null,null,null)
D.bR_=new B.ae(A.jN,16,A.bi,null,null,null)
D.bRk=new B.ae(A.rn,null,null,null,null,null)
D.aok=new B.ae(A.w4,22,A.c,null,null,null)
D.bRp=new B.ae(A.e3,17,A.c,null,null,null)
D.aol=new B.ae(A.jN,9,A.c,null,null,null)
D.bRu=new B.ae(A.w_,null,null,null,null,null)
D.bGX=new B.a1(57744,"MaterialIcons",!1)
D.bRB=new B.ae(D.bGX,null,null,null,null,null)
D.bRE=new B.ae(A.w_,16,null,null,null,null)
D.bLz=new B.a1(985181,"MaterialIcons",!1)
D.GT=new B.ae(D.bLz,null,null,null,null,null)
D.bRQ=new B.ae(A.l3,16,A.bM,null,null,null)
D.bKW=new B.a1(983615,"MaterialIcons",!1)
D.bRS=new B.ae(D.bKW,12,A.c,null,null,null)
D.aor=new B.ae(A.yq,16,null,null,null,null)
D.bS_=new B.ae(A.e3,21,A.c,null,null,null)
D.bS4=new B.ae(A.hD,17,A.c,null,null,null)
D.bS5=new B.ae(A.u4,null,null,null,null,null)
D.bSm=new B.ae(A.a1p,20,A.aB,null,null,null)
D.bSB=new B.ae(A.o7,22,E.n4,null,null,null)
D.bSI=new B.ae(A.rk,13,A.ae,null,null,null)
D.bSK=new B.ae(A.anp,20,A.aB,null,null,null)
D.bGE=new B.a1(57495,"MaterialIcons",!1)
D.bSP=new B.ae(D.bGE,null,null,null,null,null)
D.bST=new B.ae(A.o8,18,A.c,null,null,null)
D.bTe=new B.ae(A.ul,28,A.c,null,null,null)
D.bTp=new B.ae(D.amj,null,A.aC,null,null,null)
D.bTq=new B.ae(A.qc,22,A.c,null,null,null)
D.aoA=new B.ae(A.a09,16,null,null,null,null)
D.bUb=new B.ae(A.u4,32,A.c,null,null,null)
D.bUU=new B.ae(A.jb,22,A.c,null,null,null)
D.bUY=new B.ae(A.rm,22,A.ae,null,null,null)
D.aoP=new B.ae(A.u7,null,A.bX,null,null,null)
D.bVS=new B.ae(A.u6,18,null,null,null,null)
D.bWt=new B.ae(A.e3,18,A.bI,null,null,null)
D.a1P=new B.ae(A.cx,18,A.aB,null,null,null)
D.bWz=new B.ae(A.anj,null,null,null,null,null)
D.bX_=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aS0,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.f94=new B.F(!0,A.bL,null,null,null,null,null,A.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXh=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f94,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.bXI=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eE,!0,null,null,null,null)
D.d_q=w([A.dI,A.aC],x.O)
D.bZP=new B.a9(A.a3,A.a8,A.x,D.d_q,null,null)
D.c__=new B.a9(A.b3,A.b6,A.UD,A.avT,null,null)
D.bag=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.beR=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.big=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bcF=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cL6=w([D.bag,D.beR,D.big,D.bcF],x.O)
D.c_i=new B.a9(A.ax,A.aD,A.x,D.cL6,A.Hq,null)
D.dmY=w([A.cY,A.bD,A.b5],x.O)
D.c_k=new B.a9(A.b3,A.b6,A.UD,D.dmY,null,null)
D.doq=w([A.bi,A.c9],x.O)
D.c_p=new B.a9(A.a3,A.a8,A.x,D.doq,null,null)
D.djg=w([A.hy,A.d8,A.aE],x.O)
D.c_r=new B.a9(A.ax,A.aD,A.x,D.djg,null,null)
D.d5v=w([A.cM,A.fe],x.O)
D.c_v=new B.a9(A.a3,A.a8,A.x,D.d5v,null,null)
D.dmR=w([O.lo,A.d8],x.O)
D.apA=new B.a9(A.a3,A.a8,A.x,D.dmR,null,null)
D.bfw=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dmO=w([D.bfw,D.xM,A.c_],x.O)
D.c_A=new B.a9(A.a3,A.a8,A.x,D.dmO,null,null)
D.d16=w([A.bo,A.cS,A.eh],x.O)
D.c_B=new B.a9(A.ax,A.aD,A.x,D.d16,null,null)
D.OI=new B.a9(A.a3,A.a8,A.x,A.HE,null,null)
D.bog=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cE3=w([D.bog,A.c_,A.jq],x.O)
D.apF=new B.a9(A.ax,A.aD,A.x,D.cE3,null,null)
D.daR=w([A.vu,A.ay,D.B4],x.O)
D.c0D=new B.a9(A.a3,A.a8,A.x,D.daR,null,null)
D.bpB=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bdD=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bjk=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d0d=w([D.bpB,D.bdD,D.bjk],x.O)
D.apG=new B.a9(A.a3,A.a8,A.x,D.d0d,null,null)
D.bfy=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c2B=w([Av.ah3,D.bfy],x.O)
D.c0M=new B.a9(A.b3,A.b6,A.x,D.c2B,null,null)
D.cZg=w([A.n2,A.bx],x.O)
D.c0Q=new B.a9(A.b3,A.b6,A.x,D.cZg,null,null)
D.dg1=w([A.aC,A.dD],x.O)
D.c0X=new B.a9(A.a3,A.a8,A.x,D.dg1,null,null)
D.ag2=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.axA=w([D.ag2,D.jo,D.Lb],x.O)
D.c1o=new B.a9(A.ax,A.aD,A.x,D.axA,null,null)
D.cDW=w([A.dx,A.dJ],x.O)
D.c1z=new B.a9(A.b3,A.b6,A.x,D.cDW,null,null)
D.dd0=w([A.xt,Ay.F1],x.O)
D.c2n=new B.a9(A.a3,A.a8,A.x,D.dd0,null,null)
D.fDB=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c2y=new B.pT(null,D.fDB,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.z2=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5K=new C.kV(2,"elegantNavy")
D.hkD=w([A.XF,D.jo,A.c_],x.O)
D.jT=new C.xD(0,"classic")
D.a5x=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5K,4294967035,4279378237,4290283019,D.jT)
D.aGW=new C.kV(3,"elegantGold")
D.b9P=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.baP=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.aey=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hk5=w([D.b9P,D.baP,D.aey],x.O)
D.a5v=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGW,4294966515,4281016592,4289102906,D.jT)
D.dJo=new C.kV(22,"goldRibbon")
D.hk1=w([A.XF,D.jo,A.i6],x.O)
D.a5o=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dJo,4294967035,4279378237,4291404327,D.jT)
D.dJp=new C.kV(23,"goldBaroque")
D.afe=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hk7=w([D.afe,A.ay,A.jq],x.O)
D.a5p=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dJp,4294964964,4283053072,4292128567,D.jT)
D.dJr=new C.kV(4,"elegantEmerald")
D.bc4=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bd2=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hkd=w([D.bc4,D.bd2,A.i6],x.O)
D.a5q=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dJr,4294376440,4279122734,4291404327,D.jT)
D.dJs=new C.kV(5,"elegantBurgundy")
D.bh2=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hkk=w([D.bh2,A.adM,A.i6],x.O)
D.a5t=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dJs,4294965238,4283043359,4291404327,D.jT)
D.dJl=new C.kV(19,"goldFiligree")
D.LT=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hk8=w([D.LT,A.ay,A.jq],x.O)
D.a5r=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dJl,4294966259,4279378237,4292128567,D.jT)
D.dJm=new C.kV(20,"goldLaurel")
D.bo6=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hkl=w([A.L4,A.i6,D.bo6],x.O)
D.a5s=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dJm,4294966776,4282000405,4291404327,D.jT)
D.dJn=new C.kV(21,"goldCrest")
D.adE=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bod=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hka=w([D.adE,A.ay,D.bod],x.O)
D.a5w=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dJn,4294965484,4283053072,4292128567,D.jT)
D.dJq=new C.kV(24,"goldStar")
D.bpt=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hke=w([D.bpt,A.ay,D.jo],x.O)
D.a5u=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dJq,4294966518,4279378237,4292128567,D.jT)
D.H3=w([D.a5x,D.a5v,D.a5o,D.a5p,D.a5q,D.a5t,D.a5r,D.a5s,D.a5w,D.a5u],x.h)
D.qo=new C.mE(0,"blank")
D.Sl=new C.mE(1,"title")
D.mL=new C.mE(2,"titleContent")
D.e2Z=new C.mE(3,"twoColumn")
D.D4=new C.mE(4,"section")
D.e3_=new C.mE(5,"comparison")
D.If=new C.mE(6,"flashcard")
D.Ig=new C.mE(7,"quiz")
D.Ih=new C.mE(8,"worksheet")
D.aq0=w([D.qo,D.Sl,D.mL,D.e2Z,D.D4,D.e3_,D.If,D.Ig,D.Ih],B.ax("O<mE>"))
D.ayH=w([Ao.X1,A.dJ],x.O)
D.kG=w([A.c_,A.bM,A.hM,A.hL,D.B4],x.O)
D.dFl=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.ayH,D.kG)
D.boq=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bh0=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.cZt=w([D.boq,D.bh0],x.O)
D.dFc=new C.j2("confetti","Golden Confetti","Together we rise",D.cZt,D.kG)
D.cWA=w([A.nK,A.WE],x.O)
D.dFd=new C.j2("crown","Crown of Glory","Built for our community",D.cWA,D.kG)
D.bdr=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bgG=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d2s=w([D.bdr,D.bgG],x.O)
D.us=w([A.bL,A.aP,A.c,A.aL,A.al],x.O)
D.dF7=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d2s,D.us)
D.bii=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dd6=w([G.adh,D.bii],x.O)
D.dFo=new C.j2("champagne","Champagne Toast","Cheers to every member",D.dd6,D.kG)
D.dFp=new C.j2("diamonds","Diamond Rain","Every member is a jewel",Y.azm,D.us)
D.baG=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bg8=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dix=w([D.baG,D.bg8],x.O)
D.dF2=new C.j2("starburst","Golden Starburst","Thank you!",D.dix,D.kG)
D.c2I=w([A.fd,A.xF],x.O)
D.adq=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Qf=w([A.oP,A.i4,A.vF,A.nM,D.adq],x.O)
D.dFw=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c2I,D.Qf)
D.cVR=w([A.WQ,A.w],x.O)
D.dFk=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cVR,D.us)
D.bmj=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.d9C=w([A.kx,D.bmj],x.O)
D.dFf=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.d9C,D.kG)
D.bk_=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bi3=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.de2=w([D.bk_,D.bi3],x.O)
D.dF4=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.de2,D.kG)
D.dle=w([A.dx,A.hK],x.O)
D.dFa=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.dle,D.kG)
D.bew=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cTK=w([A.xH,D.bew],x.O)
D.dF6=new C.j2("hearts","Floating Hearts","Made with love",D.cTK,D.Qf)
D.bbe=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bca=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dmM=w([D.bbe,D.bca],x.O)
D.dFv=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dmM,D.Qf)
D.bnl=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.diS=w([A.ln,D.bnl],x.O)
D.dF1=new C.j2("butterflies","Golden Butterflies","New beginnings",D.diS,D.kG)
D.bjh=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cUN=w([D.bjh,A.w],x.O)
D.dFn=new C.j2("neon","Neon Night","Let's go!",D.cUN,D.us)
D.bfN=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dgd=w([A.Lt,D.bfN],x.O)
D.dFq=new C.j2("disco","Disco Ball","Party time",D.dgd,D.us)
D.bjP=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dfJ=w([A.hy,D.bjP],x.O)
D.dF5=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.dfJ,D.kG)
D.dfk=w([A.qY,A.dJ],x.O)
D.dFr=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.dfk,D.us)
D.bdx=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dfy=w([D.bdx,A.dJ],x.O)
D.dFu=new C.j2("snow","Winter Gala","Warm wishes to all",D.dfy,D.us)
D.b9Y=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bb_=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dlE=w([D.b9Y,D.bb_],x.O)
D.dFj=new C.j2("laurel","Laurel Victory","We did it together",D.dlE,D.kG)
D.b9O=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bgC=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cSN=w([D.b9O,D.bgC],x.O)
D.dFt=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cSN,D.kG)
D.bhK=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cDT=w([G.B3,D.bhK],x.O)
D.dFg=new C.j2("kente","Kente Pride","Proud of our roots",D.cDT,D.kG)
D.bkB=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bnI=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d4b=w([D.bkB,D.bnI],x.O)
D.dFb=new C.j2("trophy","Trophy Shine","Winners together",D.d4b,D.kG)
D.dfF=w([Ap.Lh,A.w],x.O)
D.dF3=new C.j2("shooting","Shooting Stars","Make a wish",D.dfF,D.us)
D.ba4=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.agS=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dlW=w([D.ba4,D.agS],x.O)
D.dFh=new C.j2("bokeh","Golden Bokeh","Shine bright",D.dlW,D.kG)
D.bat=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.das=w([D.bat,A.w],x.O)
D.dF9=new C.j2("orbits","Golden Orbits","Always moving forward",D.das,D.kG)
D.bnm=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.d6Y=w([A.aeu,D.bnm],x.O)
D.dFe=new C.j2("flowers","Blooming Garden","Growing together",D.d6Y,D.Qf)
D.bae=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.baU=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dkH=w([D.bae,D.baU],x.O)
D.dF8=new C.j2("music","Music Party","Celebrate with us",D.dkH,D.us)
D.bbS=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bo9=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cTY=w([D.bbS,D.bo9],x.O)
D.dFs=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cTY,D.kG)
D.d72=w([G.B3,D.agS],x.O)
D.dFm=new C.j2("sparklers","Golden Sparklers","Light up the night",D.d72,D.kG)
D.dFi=new C.j2("city","City Lights","The whole city celebrates",D.ayH,D.kG)
D.Hc=w([D.dFl,D.dFc,D.dFd,D.dF7,D.dFo,D.dFp,D.dF2,D.dFw,D.dFk,D.dFf,D.dF4,D.dFa,D.dF6,D.dFv,D.dF1,D.dFn,D.dFq,D.dF5,D.dFr,D.dFu,D.dFj,D.dFt,D.dFg,D.dFb,D.dF3,D.dFh,D.dF9,D.dFe,D.dF8,D.dFs,D.dFm,D.dFi],B.ax("O<j2>"))
D.etu=new B.z("","No ring")
D.eJg=new B.z("platinum","Platinum")
D.eFu=new B.z("glow","Glow")
D.ex4=new B.z("double","Double line")
D.ew_=new B.z("framed","Gallery frame")
D.et1=new B.z("rosegold","Rose gold")
D.eGg=new B.z("jewels","Jeweled")
D.eD0=new B.z("aurora","Aurora")
D.Cr=w([D.etu,A.a73,D.eJg,D.eFu,K.aNB,D.ex4,A.a75,D.ew_,D.et1,D.eGg,D.eD0],x.L)
D.cnf=w([D.a5r,D.a5s,D.a5w,D.a5o,D.a5p,D.a5u],x.h)
D.bSd=new B.ae(G.al9,16,null,null,null,null)
D.b4Y=new B.vy(A.bh,D.bSd,null,x.U)
D.bH5=new B.a1(58027,"MaterialIcons",!1)
D.bLO=new B.ae(D.bH5,16,null,null,null,null)
D.b4W=new B.vy(A.L,D.bLO,null,x.U)
D.bH6=new B.a1(58030,"MaterialIcons",!1)
D.bPT=new B.ae(D.bH6,16,null,null,null,null)
D.b4Z=new B.vy(A.dT,D.bPT,null,x.U)
D.ctw=w([D.b4Y,D.b4W,D.b4Z],B.ax("O<vy<q8>>"))
D.cBc=w([A.B7,A.hi],x.O)
D.cBd=w([A.bo,A.be,A.eh],x.O)
D.Q4=w([A.bM,A.hL,A.hM,A.ay,A.nM],x.O)
D.cDZ=w([A.c_,D.jo,D.Lb],x.O)
D.cEw=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eqQ=new B.z(4278913286,4280030216)
D.er7=new B.z(4279373061,4278518787)
D.ere=new B.z(4279898630,4278847235)
D.d3y=w([D.eqQ,D.er7,D.ere],x.n)
D.d_9=w(["\u265b","\u269c","\u2726"],x.s)
D.dJk=new C.xF("Royal Onyx & Gold",D.d3y,4292128567,4294370209,4294965479,3874020544,D.d_9)
D.eqD=new B.z(4278326799,4278598442)
D.eqF=new B.z(4278395929,4278258953)
D.eqM=new B.z(4278599728,4278327826)
D.dl5=w([D.eqD,D.eqF,D.eqM],x.n)
D.cUF=w(["\u269c","\u2756","\u2727"],x.s)
D.dJh=new C.xF("Imperial Emerald",D.dl5,4293050997,4294699968,4294180856,3872254170,D.cUF)
D.eqG=new B.z(4278455076,4278918747)
D.eqL=new B.z(4278587439,4278322714)
D.eqZ=new B.z(4279051376,4278455076)
D.djc=w([D.eqG,D.eqL,D.eqZ],x.n)
D.db8=w(["\u2654","\u2726","\u2748"],x.s)
D.dJb=new C.xF("Sapphire Crown",D.djc,4291417834,4294967295,4294310143,3871986666,D.db8)
D.erc=new B.z(4279894534,4283041554)
D.ero=new B.z(4281008906,4279042307)
D.erw=new B.z(4284221976,4279894534)
D.dp4=w([D.erc,D.ero,D.erw],x.n)
D.cW_=w(["\u265b","\u2766","\u2726"],x.s)
D.dJd=new C.xF("Ruby Throne",D.dp4,4293378685,4294963145,4294964466,3874213833,D.cW_)
D.er6=new B.z(4279371039,4281995100)
D.erg=new B.z(4280092723,4278714896)
D.ert=new B.z(4283045242,4279371039)
D.dls=w([D.er6,D.erg,D.ert],x.n)
D.djz=w(["\u2655","\u2756","\u2727"],x.s)
D.dJi=new C.xF("Amethyst Palace",D.dls,4293314984,4294963421,4294702591,3873229802,D.djz)
D.eqI=new B.z(4278519045,4280032287)
D.er_=new B.z(4279111184,4278321666)
D.erl=new B.z(4280492839,4278716426)
D.di0=w([D.eqI,D.er_,D.erl],x.n)
D.d9p=w(["\u2726","\u25c6","\u2742"],x.s)
D.dJf=new C.xF("Obsidian & Platinum",D.di0,4293256418,4294967295,4294638330,3872378836,D.d9p)
D.erd=new B.z(4279896588,4282194463)
D.erm=new B.z(4280553487,4279043334)
D.eru=new B.z(4283048488,4279896588)
D.d8T=w([D.erd,D.erm,D.eru],x.n)
D.dnf=w(["\u2766","\u273f","\u2727"],x.s)
D.dJc=new C.xF("Rose Gold Velvet",D.d8T,4293440672,4294960345,4294964979,3874214602,D.dnf)
D.eqJ=new B.z(4278520340,4279180595)
D.eqO=new B.z(4278718495,4278322443)
D.era=new B.z(4279510591,4278520340)
D.cKO=w([D.eqJ,D.eqO,D.era],x.n)
D.da6=w(["\u269c","\u2736","\u2756"],x.s)
D.dJg=new C.xF("Midnight Brass",D.cKO,4291405148,4293975208,4294439914,3872837564,D.da6)
D.erJ=new B.z(4294703086,4293780428)
D.erF=new B.z(4294307549,4293187253)
D.erK=new B.z(4294966517,4293977807)
D.cY9=w([D.erJ,D.erF,D.erK],x.n)
D.daw=w(["\u269c","\u265b","\u2726"],x.s)
D.dJj=new C.xF("Ivory Marble & Gold",D.cY9,4289760572,4286209048,4280951062,3863625518,D.daw)
D.eqU=new B.z(4278978566,4280555024)
D.er9=new B.z(4279504137,4278518530)
D.erq=new B.z(4281211923,4278978566)
D.cVQ=w([D.eqU,D.er9,D.erq],x.n)
D.dkj=w(["\u2742","\u2726","\u265c"],x.s)
D.dJe=new C.xF("Onyx & Copper",D.cVQ,4291856987,4294365880,4294964718,3873885630,D.dkj)
D.cEE=w([D.dJk,D.dJh,D.dJb,D.dJd,D.dJi,D.dJf,D.dJc,D.dJg,D.dJj,D.dJe],B.ax("O<xF>"))
D.cH0=w([A.ay,D.B4,A.hL],x.O)
D.ezh=new B.z("Original",null)
D.ezp=new B.z("Wide 16:9",1.7777777777777777)
D.eBI=new B.z("Landscape 3:2",1.5)
D.eyI=new B.z("Photo 4:3",1.3333333333333333)
D.eAu=new B.z("Square",1)
D.eMX=new B.z("Portrait 3:4",0.75)
D.aw1=w([D.ezh,D.ezp,D.eBI,D.eyI,D.eAu,D.eMX],B.ax("O<+(n,L?)>"))
D.aw2=w([A.hL,A.c7,A.bb,A.by],x.O)
D.eBT=new B.z("","Original")
D.eDJ=new B.z("circle","Circle")
D.eK1=new B.z("rounded","Rounded")
D.eKW=new B.z("triangle","Triangle")
D.eFK=new B.z("hexagon","Hexagon")
D.eE8=new B.z("diamond","Diamond")
D.eD_=new B.z("arch","Arch")
D.Cw=w([D.eBT,D.eDJ,D.eK1,D.eKW,D.eFK,D.eE8,D.eD_],x.L)
D.dEt=new C.lj("classic_blue","Classic Blue","Normal",A.bi,A.c,A.ky,A.d7,A.aJ)
D.dEJ=new C.lj("campus_green","Campus Green","Normal",A.b_,A.n0,A.tx,A.h0,A.e5)
D.dEA=new C.lj("warm_sand","Warm Sand","Normal",A.dV,A.hM,A.bM,A.im,A.nS)
D.dEH=new C.lj("slate_minimal","Slate Minimal","Normal",A.br,A.aP,A.aL,A.M,A.aJ)
D.dEs=new C.lj("coral_fresh","Coral Fresh","Normal",A.ca,A.ik,A.pD,A.k7,A.tp)
D.dEI=new C.lj("lavender_calm","Lavender Calm","Normal",A.b5,A.pG,A.xA,A.oN,A.jm)
D.dEu=new C.lj("ocean_breeze","Ocean Breeze","Normal",A.fe,A.r2,A.tl,A.ts,A.nT)
D.ag9=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dEF=new C.lj("berry_pop","Berry Pop","Normal",A.f2,D.ag9,A.ks,G.Yd,A.Fl)
D.dEv=new C.lj("midnight_pro","Midnight Pro","Professional",A.aC,A.M,A.dx,A.ks,A.cr)
D.dEE=new C.lj("executive_navy","Executive Navy","Professional",A.d0,A.afs,A.d7,A.kX,A.bL)
D.dEC=new C.lj("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bm,A.M,A.aP,A.cr)
D.dEw=new C.lj("corporate_steel","Corporate Steel","Professional",A.nW,A.M,A.mt,A.fh,A.bL)
D.dEz=new C.lj("gold_luxe","Gold Luxe","Luxury",A.mZ,A.dH,A.oO,A.lS,A.bM)
D.bjV=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dED=new C.lj("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bjV,A.Y_,A.i4,A.nM)
D.dEG=new C.lj("platinum_night","Platinum Night","Luxury",A.cr,A.dJ,A.bm,A.aP,A.aL)
D.dEK=new C.lj("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pM,A.f4,A.pU,A.jF)
D.dEr=new C.lj("royal_purple","Royal Purple","Luxury",A.n_,A.X7,A.jm,A.ks,A.L3)
D.dEB=new C.lj("neon_pitch","Neon Pitch","Bold",A.bb,A.dJ,A.M,A.b1,A.aL)
D.dEy=new C.lj("crimson_impact","Crimson Impact","Bold",A.bx,A.kx,A.ev,A.tJ,A.f3)
D.dEx=new C.lj("sunset_gallery","Sunset Gallery","Bold",A.ft,A.tp,A.k7,A.pD,A.ms)
D.Hl=w([D.dEt,D.dEJ,D.dEA,D.dEH,D.dEs,D.dEI,D.dEu,D.dEF,D.dEv,D.dEE,D.dEC,D.dEw,D.dEz,D.dED,D.dEG,D.dEK,D.dEr,D.dEB,D.dEy,D.dEx],B.ax("O<lj>"))
D.cSw=w([A.c_,D.jo],x.O)
D.d99=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eCM=new B.z("Faces & people",D.d99)
D.cH4=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.epv=new B.z("Ideas & work",D.cH4)
D.d_F=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eFP=new B.z("Nature",D.d_F)
D.d9i=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ezf=new B.z("Places & things",D.d9i)
D.d35=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eD4=new B.z("Symbols",D.d35)
D.cSC=w([D.eCM,D.epv,D.eFP,D.ezf,D.eD4],B.ax("O<+(n,ai<n>)>"))
D.baj=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cSZ=w([A.c_,D.aey,D.baj],x.O)
D.b4j=new B.ac(0,A.G,A.L0,A.aHJ,40)
D.b4_=new B.ac(0,A.G,A.nQ,A.eq,8)
D.cTb=w([D.b4j,D.b4_],x.V)
D.cTF=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.awr=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a33=w([A.hL,A.eh,A.bx,A.av,A.ca],x.O)
D.cTP=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Memory Drums (match each person with a clue about them), Elder Order (put children from oldest to youngest, or the generations in order) and a Family Test (10 questions, a grade, a certificate and the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cUz=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aeO=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cUK=w([A.XO,D.aeO,A.XO],x.O)
D.cUQ=w([A.i6,D.jo,D.Lb],x.O)
D.ez1=new B.z(A.bh,D.a0L)
D.eAp=new B.z(A.L,D.a0K)
D.eue=new B.z(A.dT,D.a0M)
D.cVL=w([D.ez1,D.eAp,D.eue],B.ax("O<+(q8,a1)>"))
D.cQ=new C.IS(0,"text")
D.lD=new C.IS(1,"image")
D.f7=new C.IS(2,"shape")
D.Sk=new C.IS(3,"pdf")
D.lc=new C.IS(4,"signature")
D.a5R=new C.IS(5,"bio")
D.cWF=w([D.cQ,D.lD,D.f7,D.Sk,D.lc,D.a5R],B.ax("O<IS>"))
D.cWG=w([A.bp,A.cE],B.ax("O<HN>"))
D.cXh=w(["School","Documents","Sign & present"],x.s)
D.b4o=new B.ac(0,A.G,A.agI,A.uM,28)
D.cXC=w([D.b4o],x.V)
D.cXV=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Qn=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.awR=w([A.hL,A.Fk,A.aL,A.c,A.oP,A.ay],x.O)
D.eMl=new B.z(0.1,0.08)
D.eFN=new B.z(0.3,0.05)
D.etI=new B.z(0.55,0.1)
D.exZ=new B.z(0.8,0.06)
D.eB9=new B.z(0.92,0.16)
D.eAE=new B.z(0.2,0.2)
D.eyt=new B.z(0.7,0.22)
D.eEu=new B.z(0.05,0.4)
D.eBA=new B.z(0.95,0.45)
D.eut=new B.z(0.12,0.7)
D.ewJ=new B.z(0.88,0.75)
D.ewR=new B.z(0.4,0.9)
D.es_=new B.z(0.65,0.93)
D.exC=new B.z(0.25,0.97)
D.eyZ=new B.z(0.85,0.9)
D.evk=new B.z(0.5,0.04)
D.cZo=w([D.eMl,D.eFN,D.etI,D.exZ,D.eB9,D.eAE,D.eyt,D.eEu,D.eBA,D.eut,D.ewJ,D.ewR,D.es_,D.exC,D.eyZ,D.evk],x.G)
D.cZv=w([A.c,A.hi,A.aR,A.aV],x.O)
D.e4B=new C.jH("office_blue","Office Blue",A.bi,A.d7,A.aJ,A.c,A.ky)
D.e4M=new C.jH("campus_green","Campus Green",A.b_,A.h0,A.e5,A.n0,A.tx)
D.e4C=new C.jH("sunset","Sunset",A.ft,A.k7,A.nS,A.ik,A.pD)
D.e4D=new C.jH("midnight","Midnight",A.aC,A.ks,A.cr,A.M,A.dx)
D.e4O=new C.jH("classic","Classic",A.d8,A.dH,A.lT,A.hM,A.fZ)
D.e4L=new C.jH("rose_gold","Rose Gold",A.hi,A.xJ,A.xH,A.vF,A.B7)
D.e4w=new C.jH("ocean_teal","Ocean Teal",A.fe,A.ts,A.nT,A.r2,A.tl)
D.e4v=new C.jH("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aP,A.aL)
D.e4u=new C.jH("neon_night","Neon Night",A.bb,A.b1,A.aL,A.dJ,A.M)
D.e4G=new C.jH("lavender","Lavender",A.b5,A.oN,A.jm,A.pG,A.xA)
D.e4I=new C.jH("coral","Coral",A.ca,A.k7,A.tp,A.ik,A.ms)
D.e4x=new C.jH("forest","Forest",A.hk,A.dX,A.cp,A.lU,A.eo)
D.e4y=new C.jH("berry","Berry",A.f2,G.Yd,A.Fl,D.ag9,A.ks)
D.e4F=new C.jH("sand","Sand",A.dV,A.im,A.nS,A.hM,A.bM)
D.e4K=new C.jH("ice","Ice",A.nW,A.Lu,A.aJ,A.mX,A.fh)
D.e4A=new C.jH("charcoal","Charcoal",A.al,A.aP,A.cr,A.bm,A.M)
D.e4t=new C.jH("mint","Mint",A.aV,A.fD,A.h0,A.lU,A.pU)
D.e4J=new C.jH("crimson","Crimson",A.bx,A.n2,A.kx,A.Fi,A.tJ)
D.bd1=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.e4E=new C.jH("gold","Gold",A.mZ,A.xt,A.oO,D.bd1,A.lS)
D.e4H=new C.jH("aqua","Aqua",A.bS,A.F9,A.oL,A.pI,A.oQ)
D.e4z=new C.jH("plum","Plum",A.n_,A.xF,A.Fl,A.EY,A.r0)
D.e4N=new C.jH("steel","Steel",A.d0,A.d7,A.bm,A.ky,A.kX)
D.a3j=w([D.e4B,D.e4M,D.e4C,D.e4D,D.e4O,D.e4L,D.e4w,D.e4v,D.e4u,D.e4G,D.e4I,D.e4x,D.e4y,D.e4F,D.e4K,D.e4A,D.e4t,D.e4J,D.e4E,D.e4H,D.e4z,D.e4N],B.ax("O<jH>"))
D.cZQ=w([A.c_,A.jq],x.O)
D.Sm=new C.hF(10,"rotate3d")
D.Ij=new C.hF(8,"flip")
D.aHe=new C.hF(19,"spiral")
D.qp=new C.hF(16,"bounce")
D.aHh=new C.hF(9,"flipVertical")
D.cZR=w([D.Sm,D.Ij,D.aHe,D.qp,D.aHh],x.i)
D.ed=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d_c=w([0.62,1],x.x)
D.d_O=w([0,0.32,0.68,1],x.x)
D.mM=new C.hF(6,"zoom")
D.uG=new C.hF(4,"slideUp")
D.uF=new C.hF(2,"slideLeft")
D.d_X=w([D.mM,D.Ij,D.uG,D.Sm,D.uF],x.i)
D.d0r=w([A.c7,A.hi,A.i4,A.hL,A.c],x.O)
D.b4e=new B.ac(0,A.G,D.af1,A.uM,30)
D.d1b=w([D.b4e],x.V)
D.efr=new B.t(0,-2.5)
D.efh=new B.t(-2.5,0)
D.edA=new B.t(2.5,0)
D.d1e=w([A.SB,A.a6f,A.aIl,A.a6e,D.efr,K.aIh,D.efh,D.edA],x.dN)
D.Hs=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d1I=w([23,114,69,56,80,144],x.t)
D.d29=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d2B=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d4g=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d4k=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uM(0,"rectangle")
D.eQ=new C.uM(1,"circle")
D.ld=new C.uM(6,"hexagon")
D.d4y=w([D.bg,D.eQ,D.ld],x.m)
D.oi=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.agg=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d55=w([D.agg,A.dX],x.O)
D.etY=new B.z("","Classic")
D.ese=new B.z("caps","Bold caps")
D.eEx=new B.z("elegant","Elegant")
D.eKl=new B.z("shadow","Shadow")
D.eym=new B.z("neon","Neon glow")
D.eIY=new B.z("outline","Outline")
D.eI8=new B.z("marker","Highlighter")
D.eKw=new B.z("stamp","Stamp")
D.eJX=new B.z("retro","Retro")
D.exg=new B.z("threed","3D")
D.eF3=new B.z("fire","Fire")
D.eFZ=new B.z("ice","Ice")
D.eDI=new B.z("chalk","Chalk")
D.eDN=new B.z("comic","Comic")
D.eKy=new B.z("sunset","Sunset")
D.eLJ=new B.z("softglow","Soft glow")
D.eGY=new B.z("lowercase","Lowercase")
D.eEf=new B.z("double","Echo")
D.eLS=new B.z("whisper","Whisper")
D.axK=w([D.etY,D.ese,D.eEx,D.eKl,D.eym,D.eIY,D.eI8,D.eKw,D.eJX,D.exg,K.aNw,D.eF3,D.eFZ,D.eDI,D.eDN,A.a73,D.eKy,D.eLJ,D.eGY,D.eEf,D.eLS],x.L)
D.d6o=w([3,5,7,10,12,15],x.t)
D.d7N=w([A.c7,A.bM,A.c,A.eF,A.cY],x.O)
D.dw9=new C.to(10,"cardWorld")
D.CX=new C.By(3,"rounded")
D.dMj=new C.lm("world","NGMY World",D.dw9,D.CX,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dwa=new C.to(11,"cardSplit")
D.dMf=new C.lm("business","Business Wire",D.dwa,D.CX,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dwb=new C.to(12,"cardBreaking")
D.dMs=new C.lm("breaking","Breaking Red",D.dwb,D.CX,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dwc=new C.to(13,"cardFeature")
D.dMl=new C.lm("feature","Tech Feature",D.dwc,D.CX,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aFL=new C.to(6,"circle")
D.aFF=new C.By(4,"circle")
D.dMp=new C.lm("parchment","Royal Circle",D.aFL,D.aFF,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dMe=new C.lm("ocean","Blue Ocean",D.aFL,D.aFF,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dwf=new C.to(7,"rail")
D.aFE=new C.By(1,"double")
D.dMg=new C.lm("forest","Green Leaf",D.dwf,D.aFE,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aFI=new C.to(1,"sideBySide")
D.dMu=new C.lm("herald","NGMY Herald",D.aFI,D.CX,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aFH=new C.to(0,"classic")
D.a53=new C.By(9,"shadow")
D.dMt=new C.lm("daily","The Daily",D.aFH,D.a53,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dwd=new C.to(2,"splash")
D.aFG=new C.By(6,"cutCorner")
D.dMd=new C.lm("tabloid","Big Tabloid",D.dwd,D.aFG,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aFM=new C.to(9,"minimal")
D.dMo=new C.lm("modern","Modern Digest",D.aFM,D.CX,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aFJ=new C.to(3,"magazine")
D.aFD=new C.By(0,"plain")
D.dMk=new C.lm("midnight","Midnight Edition",D.aFJ,D.aFD,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dwg=new C.to(8,"banner")
D.dMm=new C.lm("metro","Metro Wire",D.dwg,D.aFG,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dw8=new C.By(8,"arch")
D.dMn=new C.lm("sunrise","Sunrise Post",D.aFJ,D.dw8,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aFK=new C.to(5,"scrapbook")
D.dw7=new C.By(5,"tape")
D.dMi=new C.lm("neon","Neon Beat",D.aFK,D.dw7,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dwe=new C.to(4,"wrap")
D.dMv=new C.lm("gold","Golden Press",D.dwe,D.a53,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dMw=new C.lm("minimal","Paper White",D.aFM,D.a53,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dMh=new C.lm("gazette","Fresh Gazette",D.aFH,D.aFE,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dMr=new C.lm("times","Classic Times",D.aFI,D.aFD,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RS=new C.By(2,"polaroid")
D.dMq=new C.lm("scrapbook","Memory Scrapbook",D.aFK,D.RS,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a3y=w([D.dMj,D.dMf,D.dMs,D.dMl,D.dMp,D.dMe,D.dMg,D.dMu,D.dMt,D.dMd,D.dMo,D.dMk,D.dMm,D.dMn,D.dMi,D.dMv,D.dMw,D.dMh,D.dMr,D.dMq],B.ax("O<lm>"))
D.d7Z=w([0.45,1],x.x)
D.Hu=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d8m=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hfv=new C.oF("Original",0,1,1,0,0,0)
D.hfz=new C.oF("Black & white",0,1.1,0,0,0,0)
D.hfm=new C.oF("Noir",-0.05,1.55,0,0,0,0)
D.hfq=new C.oF("Sepia",0,1,0.25,0.9,0,0)
D.hfp=new C.oF("Vivid",0,1.15,1.6,0,0,0)
D.hfi=new C.oF("Pop",0,1.3,1.9,0,0,0)
D.hfk=new C.oF("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hfw=new C.oF("Matte",0,0.9,0.85,0,0,0.55)
D.hfr=new C.oF("Cool",0,1.05,1,-0.8,0,0)
D.hfy=new C.oF("Warm",0.03,1.05,1.1,0.8,0,0)
D.hfj=new C.oF("Golden hour",0.04,1,1.25,1,0,0)
D.hfo=new C.oF("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hfx=new C.oF("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hfn=new C.oF("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hft=new C.oF("Retro",0,0.9,0.7,0.4,0,0.35)
D.hfs=new C.oF("Forest",0,1,1.2,-0.1,-0.45,0)
D.hfu=new C.oF("Rose",0,1,1.1,0.3,0.4,0)
D.hfl=new C.oF("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d8n=w([D.hfv,D.hfz,D.hfm,D.hfq,D.hfp,D.hfi,D.hfk,D.hfw,D.hfr,D.hfy,D.hfj,D.hfo,D.hfx,D.hfn,D.hft,D.hfs,D.hfu,D.hfl],B.ax("O<oF>"))
D.b9J=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.d8p=w([D.agg,A.dX,D.b9J],x.O)
D.epp=new B.z(0.12,0.3)
D.eG9=new B.z(0.26,0.75)
D.eEt=new B.z(0.8,0.22)
D.eKG=new B.z(0.9,0.7)
D.eGX=new B.z(0.5,0.15)
D.eJ_=new B.z(0.65,0.85)
D.evR=new B.z(0.08,0.85)
D.d8D=w([D.epp,D.eG9,D.eEt,D.eKG,D.eGX,D.eJ_,D.evR],x.G)
D.axW=w([A.bb,A.c7,A.by,A.bo],x.O)
D.d9t=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d9F=w([A.c,A.fh,A.ds,A.vs],x.O)
D.bdh=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.daG=w([D.bdh,D.aeO],x.O)
D.daI=w([A.vu,A.ay],x.O)
D.daX=w([0,0.25,0.75,1],x.x)
D.daZ=w([A.xw,A.oP],x.O)
D.aGP=new C.kV(10,"kenteSunset")
D.hk3=w([D.afe,A.k2,A.ay],x.O)
D.dHE=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aGP,4294964964,4282000405,4279983648,D.jT)
D.aGQ=new C.kV(11,"indigoMudcloth")
D.baL=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hkh=w([D.baL,A.aeK,A.i6],x.O)
D.dHM=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aGQ,4294439140,4279903102,4279903102,D.jT)
D.aGR=new C.kV(12,"adinkraRoyal")
D.boT=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hki=w([D.adE,D.boT,A.ay],x.O)
D.dHO=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aGR,4294965484,4285218591,4287322667,D.jT)
D.aGS=new C.kV(13,"nileLotus")
D.bkV=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bhk=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hkn=w([D.bkV,D.bhk,A.i6],x.O)
D.dHN=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGS,4294244340,4279196764,4279196764,D.jT)
D.aGT=new C.kV(14,"shweshweIvory")
D.bfl=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.be3=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bbd=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hk4=w([D.bfl,D.be3,D.bbd],x.O)
D.dHJ=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGT,4294505710,4279970378,4291058750,D.jT)
D.rD=new C.kV(15,"certIvoryNavy")
D.hk2=w([D.LT,D.jo,A.i6],x.O)
D.aGk=new C.xD(1,"ringsNdoa")
D.dHG=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rD,4294966259,4279378237,4291404327,D.aGk)
D.a5z=new C.xD(2,"coupleCards")
D.dHB=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rD,4294966259,4279378237,4291404327,D.a5z)
D.D_=new C.kV(18,"certIvoryNavyBar")
D.adD=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hkg=w([D.adD,D.jo,A.i6],x.O)
D.aGl=new C.xD(3,"kuhoweshaForm")
D.dHz=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.D_,4294966519,4279378237,4291404327,D.aGl)
D.af_=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hkA=w([D.LT,D.af_,A.i6],x.O)
D.a5A=new C.xD(4,"mahariPande")
D.dHC=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rD,4294966259,4279904068,4291404327,D.a5A)
D.aGU=new C.kV(16,"certIvoryGreen")
D.beH=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hk6=w([A.L4,D.beH,A.i6],x.O)
D.aGm=new C.xD(5,"familiaMti")
D.dHI=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aGU,4294966776,4280241466,4291404327,D.aGm)
D.a5B=new C.xD(6,"ndoaSafi")
D.dHA=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.D_,4294966519,4279378237,4291404327,D.a5B)
D.bjg=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hk9=w([D.LT,A.i6,D.bjg],x.O)
D.a5C=new C.xD(7,"peteWide")
D.dHF=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rD,4294966259,4282001936,4291404327,D.a5C)
D.dHP=new C.xD(8,"muhuriCrest")
D.dHy=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rD,4294966259,4279378237,4291404327,D.dHP)
D.hkj=w([D.adD,D.af_,A.i6],x.O)
D.dHQ=new C.xD(9,"fomuWazi")
D.dHL=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.D_,4294966519,4279904068,4291404327,D.dHQ)
D.aGV=new C.kV(17,"certIvoryRose")
D.bfp=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hkm=w([D.bfp,D.afS,A.i6],x.O)
D.a5y=new C.xD(10,"upendoOrnate")
D.dHH=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aGV,4294965493,4286200650,4291404327,D.a5y)
D.dbp=w([D.dHE,D.dHM,D.dHO,D.dHN,D.dHJ,D.dHG,D.dHB,D.dHz,D.dHC,D.dHI,D.dHA,D.dHF,D.dHy,D.dHL,D.dHH],x.h)
D.ee=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Ik=new C.w4(0,"emojis")
D.D6=new C.w4(1,"pictures")
D.Il=new C.w4(2,"icons3d")
D.a5T=new C.w4(3,"animations")
D.So=new C.w4(4,"videoMotion")
D.D7=new C.w4(5,"luxe")
D.a3F=w([D.Ik,D.D6,D.Il,D.a5T,D.So,D.D7],B.ax("O<w4>"))
D.eJz=new B.z(A.e3,"Looks")
D.exS=new B.z(A.Cg,"Light")
D.exP=new B.z(A.no,"Colour")
D.evS=new B.z(A.yw,"Effects")
D.amd=new B.a1(63112,"MaterialIcons",!1)
D.esu=new B.z(D.amd,"Crop")
D.dbT=w([D.eJz,D.exS,D.exP,D.evS,D.esu],x.f2)
D.dcw=w([],x.D)
D.hkx=w([],x.L)
D.ew4=new B.z("Flashcard",D.If)
D.ezR=new B.z("Quiz",D.Ig)
D.eBO=new B.z("Worksheet",D.Ih)
D.eyU=new B.z("Notes",D.mL)
D.eAn=new B.z("Section",D.D4)
D.ddc=w([D.ew4,D.ezR,D.eBO,D.eyU,D.eAn],B.ax("O<+(n,mE)>"))
D.dJt=new C.kV(6,"beadedPearl")
D.bi6=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hkB=w([H.XZ,D.bi6,A.i6],x.O)
D.aGi=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dJt,4294966774,4286209070,4291404327,D.jT)
D.dJu=new C.kV(7,"artDeco")
D.bmd=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bpb=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hkz=w([D.bmd,D.bpb,A.c_],x.O)
D.aGj=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dJu,4294440434,4280228630,4290283019,D.jT)
D.dJv=new C.kV(8,"rosetteCorners")
D.bok=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bdm=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bi1=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hkc=w([D.bok,D.bdm,D.bi1],x.O)
D.aGh=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dJv,4294702831,4285218602,4291394365,D.jT)
D.dJw=new C.kV(9,"modernLedger")
D.hkb=w([A.c,D.jo,D.jo],x.O)
D.aGg=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dJw,4294967295,4279378237,4279378237,D.jT)
D.ddg=w([D.aGi,D.aGj,D.aGh,D.aGg],x.h)
D.ddp=w([A.i4,A.oP],x.O)
D.cl=new C.hF(0,"none")
D.dg=new C.hF(1,"fade")
D.Ii=new C.hF(3,"slideRight")
D.aHg=new C.hF(5,"slideDown")
D.e35=new C.hF(7,"zoomOut")
D.a5S=new C.hF(11,"cube")
D.e30=new C.hF(12,"blur")
D.aHd=new C.hF(13,"dissolve")
D.e31=new C.hF(14,"wipeLeft")
D.e32=new C.hF(15,"wipeRight")
D.Sn=new C.hF(17,"push")
D.e33=new C.hF(18,"flash")
D.aHf=new C.hF(20,"swing")
D.e34=new C.hF(21,"curtain")
D.QY=w([D.cl,D.dg,D.uF,D.Ii,D.uG,D.aHg,D.mM,D.e35,D.Ij,D.aHh,D.Sm,D.a5S,D.e30,D.aHd,D.e31,D.e32,D.qp,D.Sn,D.e33,D.aHe,D.aHf,D.e34],x.i)
D.QZ=w([D.a5x,D.a5v,D.a5o,D.a5p,D.a5q,D.a5t,D.a5r,D.a5s,D.a5w,D.a5u,D.aGi,D.aGj,D.aGh,D.aGg],x.h)
D.ddS=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.ddW=w([A.xB,A.hL,A.c_],x.O)
D.exa=new B.z(A.u9,"Design")
D.eL4=new B.z(D.amu,"Word sizes")
D.eGH=new B.z(A.Ca,"Text")
D.bKo=new B.a1(983182,"MaterialIcons",!1)
D.eGL=new B.z(D.bKo,"Photo")
D.es2=new B.z(A.lx,"Logo")
D.eMj=new B.z(A.GQ,"News")
D.de0=w([D.exa,D.eL4,D.eGH,D.eGL,D.es2,D.eMj],x.f2)
D.de1=w(["golddust","sparkle","sheen"],x.s)
D.e4s=new C.eu("upload_pdf",L.Of,"Upload PDF")
D.e3C=new C.eu("sign_paper",A.GN,"Sign Paper")
D.bJH=new B.a1(63438,"MaterialIcons",!1)
D.e4o=new C.eu("hd_photo",D.bJH,"HD Photo")
D.e3u=new C.eu("sharpen",E.a0w,"Sharpen")
D.e3E=new C.eu("print",L.Of,"Download PDF")
D.e45=new C.eu("rotate",D.amd,"Rotate")
D.e3N=new C.eu("text_box",A.Ca,"Text Box")
D.e3P=new C.eu("picture",A.uf,"Picture")
D.e3L=new C.eu("title",A.yN,"Title")
D.e3H=new C.eu("subtitle",T.an4,"Subtitle")
D.e4e=new C.eu("bullets",I.a0N,"Bullet List")
D.e3I=new C.eu("numbered",A.O6,"Numbered")
D.e4h=new C.eu("quote",A3.C0,"Quote")
D.e3U=new C.eu("citation",A.o7,"Citation")
D.e4k=new C.eu("date_stamp",Ah.a0B,"Date Stamp")
D.e47=new C.eu("page_number",A.yM,"Page #")
D.e4b=new C.eu("header_bar",A.Cd,"Header")
D.e3O=new C.eu("footer_bar",Aq.a1k,"Footer")
D.e3D=new C.eu("divider",A.ue,"Divider")
D.e3z=new C.eu("highlight",A.a0U,"Highlight")
D.e4d=new C.eu("redact",A.un,"Redact")
D.e40=new C.eu("callout",A.BV,"Callout")
D.e4m=new C.eu("checkboxes",I.alt,"Checklist")
D.e3Y=new C.eu("table",A.a1h,"Table")
D.e3S=new C.eu("memo",I.a14,"Memo")
D.e41=new C.eu("letter",A.GA,"Letter")
D.bJi=new B.a1(63259,"MaterialIcons",!0)
D.e3t=new C.eu("agenda",D.bJi,"Agenda")
D.e3F=new C.eu("toc",Az.amI,"Contents")
D.bJD=new B.a1(63406,"MaterialIcons",!1)
D.e3Z=new C.eu("sig_line",D.bJD,"Sign Line")
D.e3m=new C.eu("initial_line",A.j9,"Initials")
D.e3p=new C.eu("approved",A.lx,"APPROVED")
D.e43=new C.eu("draft",A.p6,"DRAFT")
D.e49=new C.eu("confidential",A.jN,"Confidential")
D.e4c=new C.eu("sticky",A.On,"Sticky Note")
D.e4l=new C.eu("progress",A.amH,"Progress")
D.bKO=new B.a1(983507,"MaterialIcons",!1)
D.e3A=new C.eu("stars",D.bKO,"Star Rating")
D.e3k=new C.eu("equation",A.amw,"Equation")
D.e3v=new C.eu("timeline",A.a1i,"Timeline")
D.e3T=new C.eu("two_col",A.a1l,"Two Columns")
D.e3x=new C.eu("compare",A2.a0F,"Compare")
D.e3i=new C.eu("duplicate_el",A.fS,"Duplicate")
D.e4q=new C.eu("delete_el",A.ec,"Delete")
D.e4g=new C.eu("bring_fwd",H.amq,"Bring Front")
D.e3n=new C.eu("send_back",H.amp,"Send Back")
D.e42=new C.eu("align_left",D.a0L,"Align L")
D.e48=new C.eu("align_center",D.a0K,"Align C")
D.e4p=new C.eu("align_right",D.a0M,"Align R")
D.e3M=new C.eu("word_count",A0.a0e,"Word Count")
D.e3J=new C.eu("link_text",A.hq,"Link")
D.e46=new C.eu("phone",A.iR,"Phone")
D.e3y=new C.eu("email",A.BY,"Email")
D.e4r=new C.eu("qr_placeholder",A.jz,"QR Placeholder")
D.e3s=new C.eu("rectangle",A4.w3,"Rectangle")
D.e3X=new C.eu("circle",A.rg,"Circle")
D.e3o=new C.eu("arrow",A.kE,"Arrow")
D.e4f=new C.eu("line",A.ue,"Line")
D.e3B=new C.eu("triangle",A.a0D,"Triangle")
D.bJq=new B.a1(63318,"MaterialIcons",!1)
D.e3G=new C.eu("grayscale",D.bJq,"Grayscale")
D.e3Q=new C.eu("brighten",I.alO,"Brighten")
D.e3V=new C.eu("flip_h",A.Gq,"Flip H")
D.bJy=new B.a1(63348,"MaterialIcons",!1)
D.e4n=new C.eu("flip_v",D.bJy,"Flip V")
D.e4a=new C.eu("cover_page",A.q7,"Cover Page")
D.e3l=new C.eu("invoice",A.hc,"Invoice")
D.e3w=new C.eu("resume",A.mA,"Resume")
D.e3K=new C.eu("minutes",A.p1,"Minutes")
D.e3q=new C.eu("lab_report",A.Oj,"Lab Report")
D.e3r=new C.eu("rubric",A.ua,"Rubric")
D.e3W=new C.eu("flashcard_tool",V.GL,"Flashcard")
D.e4i=new C.eu("quiz_tool",A.GF,"Quiz Block")
D.e4_=new C.eu("worksheet_tool",M.Gh,"Worksheet")
D.e44=new C.eu("outline_share",A.Ol,"Share Outline")
D.e4j=new C.eu("export_json",D.alz,"Export JSON")
D.e3j=new C.eu("new_slide",D.a0d,"New Slide")
D.e3R=new C.eu("present",A.qc,"Present")
D.dew=w([D.e4s,D.e3C,D.e4o,D.e3u,D.e3E,D.e45,D.e3N,D.e3P,D.e3L,D.e3H,D.e4e,D.e3I,D.e4h,D.e3U,D.e4k,D.e47,D.e4b,D.e3O,D.e3D,D.e3z,D.e4d,D.e40,D.e4m,D.e3Y,D.e3S,D.e41,D.e3t,D.e3F,D.e3Z,D.e3m,D.e3p,D.e43,D.e49,D.e4c,D.e4l,D.e3A,D.e3k,D.e3v,D.e3T,D.e3x,D.e3i,D.e4q,D.e4g,D.e3n,D.e42,D.e48,D.e4p,D.e3M,D.e3J,D.e46,D.e3y,D.e4r,D.e3s,D.e3X,D.e3o,D.e4f,D.e3B,D.e3G,D.e3Q,D.e3V,D.e4n,D.e4a,D.e3l,D.e3w,D.e3K,D.e3q,D.e3r,D.e3W,D.e4i,D.e4_,D.e44,D.e4j,D.e3j,D.e3R],B.ax("O<eu>"))
D.deG=w([A.cr,A.al],x.O)
D.erA=new B.z(4286331629,4292552567)
D.ern=new B.z(4280640491,4278630100)
D.erI=new B.z(4294538006,4292943176)
D.eqK=new B.z(4278556265,4280640491)
D.d8O=w([D.erA,D.ern,D.erI,D.eqK],x.n)
D.cxh=w([4294626325,4280472558,4294210230],x.t)
D.e3d=new C.nR("colorful","Colorful",A.no,D.d8O,4294967295,3875536895,D.cxh,D.mM)
D.erb=new B.z(4279522093,4279657780)
D.err=new B.z(4281750292,4283268111)
D.eqN=new B.z(4278603323,4279203438)
D.ers=new B.z(4282343954,4279599165)
D.cIi=w([D.erb,D.err,D.eqN,D.ers],x.n)
D.cx_=w([4288931381,4294829706,4287033260],x.t)
D.e39=new C.nR("nature","Nature",A.GO,D.cIi,4294442727,3874290891,D.cx_,D.dg)
D.er5=new B.z(4279369771,4283178389)
D.er2=new B.z(4279179050,4286456526)
D.erj=new B.z(4280163147,4290648157)
D.eqC=new B.z(4278322711,4285343961)
D.d_4=w([D.er5,D.er2,D.erj,D.eqC],x.n)
D.cxd=w([4294210230,4280472558,4289170426],x.t)
D.e37=new C.nR("vibe","Vibe",A.a0S,D.d_4,4294967295,3874869502,D.cxd,D.uF)
D.erE=new B.z(4290007817,4292552567)
D.ery=new B.z(4286328082,4294286859)
D.erD=new B.z(4288485197,4294538006)
D.erx=new B.z(4285343961,4293675161)
D.c39=w([D.erE,D.ery,D.erD,D.erx],x.n)
D.cxi=w([4294829706,4294967295,4284999929],x.t)
D.e38=new C.nR("celebration","Celebration",A.l3,D.c39,4294967295,4009752557,D.cxi,D.qp)
D.er0=new B.z(4279179050,4280171146)
D.er4=new B.z(4279310375,4280232247)
D.eqT=new B.z(4278916151,4280172719)
D.er1=new B.z(4279179050,4281549141)
D.cSS=w([D.er0,D.er4,D.eqT,D.er1],x.n)
D.cwV=w([4281908728,4294626325,4287931320],x.t)
D.e3c=new C.nR("professional","Professional",A.BT,D.cSS,4294967295,3872118241,D.cwV,D.Sn)
D.eqX=new B.z(4278995566,4278413729)
D.eqP=new B.z(4278727492,4279137424)
D.erk=new B.z(4280171146,4278751666)
D.eqY=new B.z(4278995566,4279590517)
D.cB5=w([D.eqX,D.eqP,D.erk,D.eqY],x.n)
D.cwY=w([4286436348,4284410580,4294829706],x.t)
D.e3e=new C.nR("ocean","Ocean",I.a1n,D.cB5,4294967295,3873501950,D.cwY,D.uG)
D.erz=new B.z(4286328082,4294538006)
D.erB=new B.z(4286781507,4294677052)
D.erv=new B.z(4283178389,4294197086)
D.erC=new B.z(4288295954,4294688548)
D.cP6=w([D.erz,D.erB,D.erv,D.erC],x.n)
D.cxj=w([4294829706,4294967295,4294747557],x.t)
D.e3f=new C.nR("sunset","Sunset",A.Op,D.cP6,4294967295,4009749973,D.cxj,D.dg)
D.erM=new B.z(4294967295,4294047225)
D.erH=new B.z(4294507260,4294967295)
D.erL=new B.z(4294967295,4293060848)
D.erG=new B.z(4294507260,4294047225)
D.d2f=w([D.erM,D.erH,D.erL,D.erG],x.n)
D.cwT=w([4280640491,4279179050,4287931320],x.t)
D.e3b=new C.nR("minimal","Minimal",A4.w3,D.d2f,4279179050,4282865001,D.cwT,D.dg)
D.eqW=new B.z(4278979081,4280886564)
D.erf=new B.z(4280031511,4278979081)
D.er3=new B.z(4279308561,4281148438)
D.eqV=new B.z(4278979081,4280031511)
D.dgI=w([D.eqW,D.erf,D.er3,D.eqV],x.n)
D.cx6=w([4292128567,4294829706,4289241758],x.t)
D.e3g=new C.nR("elegant","Elegant",A.m1,D.dgI,4294898631,3873957348,D.cx6,D.aHd)
D.erh=new B.z(4280159034,4282058596)
D.eqS=new B.z(4278916151,4280163147)
D.erp=new B.z(4281208933,4278916151)
D.er8=new B.z(4279502891,4283178389)
D.dnS=w([D.erh,D.eqS,D.erp,D.er8],x.n)
D.cxf=w([4294296657,4292128567,4291081725],x.t)
D.e3a=new C.nR("royal","Royal Gold",A.jb,D.dnS,4294965222,3874084351,D.cxf,D.mM)
D.eqH=new B.z(4278464302,4280163147)
D.eqR=new B.z(4278916151,4279455306)
D.eri=new B.z(4280163147,4283040846)
D.eqE=new B.z(4278332450,4281413249)
D.d8s=w([D.eqH,D.eqR,D.eri,D.eqE],x.n)
D.cwU=w([4281193663,4289170426,4294210230],x.t)
D.e3h=new C.nR("aurora","Aurora Glow",A.e3,D.d8s,4293983738,3869766608,D.cwU,D.dg)
D.wr=w([D.e3d,D.e39,D.e37,D.e38,D.e3c,D.e3e,D.e3f,D.e3b,D.e3g,D.e3a,D.e3h],B.ax("O<nR>"))
D.biE=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dff=w([A.qV,D.biE,A.qV],x.O)
D.dfw=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dfA=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eGz=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.ewL=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eBo=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eod=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eA0=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eye=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eCB=new B.z("Surprise me","")
D.dg8=w([D.eGz,D.ewL,D.eBo,D.eod,D.eA0,D.eye,D.eCB],x.L)
D.bbf=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bmL=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dgW=w([A.c,D.bbf,D.bmL],x.O)
D.dj3=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aGN=new C.kV(0,"heritageGold")
D.bh5=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hkC=w([D.bh5,A9.afb,A.ay],x.O)
D.dHK=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aGN,4294570461,4284234270,4292128567,D.jT)
D.aGO=new C.kV(1,"heritageCrimson")
D.b9F=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bfm=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bmy=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hkf=w([D.b9F,D.bfm,D.bmy],x.O)
D.dHD=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aGO,4294635750,4285213214,4292912216,D.jT)
D.dj7=w([D.a5x,D.a5v,D.dHK,D.dHD,D.a5q,D.a5t],x.h)
D.dNx=new C.rz(1,"circuit")
D.dO_=new C.mc("neural","Neural Link","Robotic",D.dNx,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dNw=new C.rz(0,"grid")
D.dNX=new C.mc("signal","Signal Grid","Robotic",D.dNw,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dNC=new C.rz(2,"hexes")
D.dNI=new C.mc("core","Core Protocol","Robotic",D.dNC,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aHa=new C.rz(11,"diagonal")
D.dNT=new C.mc("steel","Steel Tech","Robotic",D.aHa,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aHb=new C.rz(3,"rings")
D.dNH=new C.mc("vault","Vault Gold","Robotic",D.aHb,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dNA=new C.rz(13,"leaves")
D.dNK=new C.mc("forest","Forest Morning","Nature",D.dNA,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aHc=new C.rz(5,"waves")
D.dNR=new C.mc("ocean","Ocean Calm","Nature",D.aHc,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dND=new C.rz(6,"sunset")
D.dNW=new C.mc("sunset","Sunset Glow","Nature",D.dND,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dNE=new C.rz(7,"mountains")
D.dNJ=new C.mc("mountain","Mountain Air","Nature",D.dNE,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dNF=new C.rz(8,"stars")
D.dNQ=new C.mc("night","Night Sky","Nature",D.dNF,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5Q=new C.rz(4,"orbs")
D.dNO=new C.mc("aurora","Aurora","Nature",D.a5Q,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dNY=new C.mc("sand","Sand Dune","Nature",D.aHc,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dNG=new C.rz(9,"rays")
D.dNN=new C.mc("golden","Golden Hour","Warm",D.dNG,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dNL=new C.mc("royal","Royal Purple","Warm",D.aHa,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dNM=new C.mc("rose","Rose Petal","Warm",D.a5Q,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dNz=new C.rz(12,"blocks")
D.dNP=new C.mc("electric","Electric Blue","Bold",D.dNz,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dNZ=new C.mc("mint","Fresh Mint","Bold",D.a5Q,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dNB=new C.rz(14,"minimal")
D.dNV=new C.mc("white","Clean White","Clean",D.dNB,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dNy=new C.rz(10,"frame")
D.dNS=new C.mc("midnight","Midnight Gold","Clean",D.dNy,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dNU=new C.mc("community","Community Green","Clean",D.aHb,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a46=w([D.dO_,D.dNX,D.dNI,D.dNT,D.dNH,D.dNK,D.dNR,D.dNW,D.dNJ,D.dNQ,D.dNO,D.dNY,D.dNN,D.dNL,D.dNM,D.dNP,D.dNZ,D.dNV,D.dNS,D.dNU],B.ax("O<mc>"))
D.dju=w([D.B4,A.vu,A.hL,A.c_],x.O)
D.djM=w([D.ag2,D.jo],x.O)
D.djW=w(["pdf","docx","txt","md"],x.s)
D.ePN=new B.bj(-3,150,34)
D.ePO=new B.bj(-3,214,62)
D.ePP=new B.bj(-3,288,62)
D.dkM=w([D.ePN,D.ePO,D.ePP],B.ax("O<+(L,L,L)>"))
D.dlg=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dlU=w(["Write","Design","Print & fold"],x.s)
D.jU=new C.uM(2,"triangle")
D.D5=new C.uM(3,"arrow")
D.fx=new C.uM(4,"line")
D.jV=new C.uM(5,"parallelogram")
D.dlX=w([D.bg,D.eQ,D.jU,D.D5,D.fx,D.jV,D.ld],x.m)
D.epD=new B.z(240,96)
D.esm=new B.z(560,46)
D.dm2=w([D.epD,D.esm],x.G)
D.hkN=new C.xG(0,"classic")
D.dJz=new C.nN("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aGN,4294570461,4282000405,4284234270)
D.dJL=new C.nN("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aGO,4294635750,4281999378,4285213214)
D.dJA=new C.nN("elegant_navy","Umoja Mzuri",y.s,D.a5K,4294967035,4279378237,4290283019)
D.dJN=new C.nN("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGW,4294966515,4281016592,4289102906)
D.dJP=new C.nN("kente_sunset","Kente ya Jua",y.H,D.aGP,4294964964,4282000405,4279983648)
D.dJx=new C.nN("indigo_mudcloth","Nguo ya Indigo",y.n,D.aGQ,4294439140,4279903102,4279903102)
D.dJC=new C.nN("adinkra_royal","Muhuri wa Adinkra",y.z,D.aGR,4294965484,4285218591,4287322667)
D.dJH=new C.nN("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aGS,4294244340,4279196764,4279196764)
D.dJJ=new C.nN("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aGT,4294505710,4279970378,4291058750)
D.hkO=new C.xG(1,"ringsNdoa")
D.dJB=new C.nN("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rD,4294966259,4279378237,4291404327)
D.hkQ=new C.xG(2,"coupleCards")
D.dJM=new C.nN("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rD,4294966259,4279378237,4291404327)
D.hkR=new C.xG(3,"kuhoweshaForm")
D.dJI=new C.nN("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.D_,4294966519,4279378237,4291404327)
D.hkS=new C.xG(4,"mahariPande")
D.dJy=new C.nN("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rD,4294966259,4279904068,4291404327)
D.hkT=new C.xG(5,"familiaMti")
D.dJO=new C.nN("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aGU,4294966776,4280241466,4291404327)
D.hkU=new C.xG(6,"ndoaSafi")
D.dJF=new C.nN("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.D_,4294966519,4279378237,4291404327)
D.hkV=new C.xG(7,"peteWide")
D.dJE=new C.nN("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rD,4294966259,4282001936,4291404327)
D.hkW=new C.xG(8,"muhuriCrest")
D.dJD=new C.nN("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rD,4294966259,4279378237,4291404327)
D.hkX=new C.xG(9,"fomuWazi")
D.dJG=new C.nN("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.D_,4294966519,4279904068,4291404327)
D.hkP=new C.xG(10,"upendoOrnate")
D.dJK=new C.nN("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aGV,4294965493,4286200650,4291404327)
D.Rd=w([D.dJz,D.dJL,D.dJA,D.dJN,D.dJP,D.dJx,D.dJC,D.dJH,D.dJJ,D.dJB,D.dJM,D.dJI,D.dJy,D.dJO,D.dJF,D.dJE,D.dJD,D.dJG,D.dJK],B.ax("O<nN>"))
D.D3=new C.arn(0,"landscape169")
D.ol=new C.arn(1,"portrait916")
D.dmQ=w([D.D3,D.ol],B.ax("O<arn>"))
D.azy=w([A.hL,A.bM,A.cY,A.i4,A.c],x.O)
D.uw=w([A.c_,A.im],x.O)
D.eoH=new B.z(1000,"M")
D.etN=new B.z(900,"CM")
D.esg=new B.z(500,"D")
D.eqx=new B.z(400,"CD")
D.eoI=new B.z(100,"C")
D.etO=new B.z(90,"XC")
D.esh=new B.z(50,"L")
D.eqy=new B.z(40,"XL")
D.eoO=new B.z(10,"X")
D.eu_=new B.z(9,"IX")
D.esy=new B.z(5,"V")
D.es1=new B.z(4,"IV")
D.epi=new B.z(1,"I")
D.dny=w([D.eoH,D.etN,D.esg,D.eqx,D.eoI,D.etO,D.esh,D.eqy,D.eoO,D.eu_,D.esy,D.es1,D.epi],x.ek)
D.eQQ=new B.cx(["open",A.j9,"Open & write","Keep writing this book"])
D.eRg=new B.cx(["print",A.ui,"Print as a book","Fold and staple it"])
D.dnI=w([D.eQQ,D.eRg],B.ax("O<+(n,a1,n,n)>"))
D.dop=w([D.a5S,D.mM,D.Ij,D.Sn,D.dg,D.Sm],x.i)
D.eHh=new B.z(-1,"Small")
D.eos=new B.z(0,"Normal")
D.eph=new B.z(1,"Big")
D.epT=new B.z(2,"Huge")
D.doY=w([D.eHh,D.eos,D.eph,D.epT],x.ek)
D.dpn=w([49,65,89,38,83,89],x.t)
D.dpu=w([A.vu,A.hL,A.c_],x.O)
D.dpW=w([D.dg,D.mM,D.uF,D.a5S,D.Ij,D.Sn],x.i)
D.aEP=new B.dv([0,D.Mb,8,D.ahn,12,D.aho],B.ax("dv<H,a3P>"))
D.e95={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bmo=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cT2=w([A.bM,D.bmo],x.O)
D.dcZ=w([A.b1,A.bi],x.O)
D.d7z=w([A.c7,A.aR,A.bI],x.O)
D.dnJ=w([A.cr,A.br],x.O)
D.d00=w([A.bb,A.f2],x.O)
D.daj=w([A.b5,A.fd],x.O)
D.bf2=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.d9A=w([D.bf2,A.oP],x.O)
D.d4_=w([A.h7,A.xC],x.O)
D.d_P=w([A.bu,A.c9],x.O)
D.dsB=new B.bu(D.e95,[D.cT2,K.apY,D.dcZ,D.d7z,D.dnJ,D.d00,D.daj,D.d9A,D.d4_,D.d_P],B.ax("bu<n,ai<u>>"))
D.e8m={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4J=new B.bu(D.e8m,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bu<n,n>"))
D.a4Q=new B.bu(A.hX,[],B.ax("bu<H,+icon3d,picture(n?,n?)>"))
D.dwT=new F.N3(30,null)
D.dBX=new F.mA("Chapter 1","","","")
D.dmB=w([D.dBX],x.B)
D.dC0=new F.rp("My Book","","",D.dmB,E.aG6)
D.dBZ=new F.uC("starry",null,null,null,null,"","","")
D.dC1=new F.rp("Dream Big","","",E.a3N,D.dBZ)
D.dC_=new F.uC("story",null,null,null,null,"","","")
D.dC2=new F.rp("Little Lion","","",E.a3N,D.dC_)
D.dBY=new F.uC("vintage",null,null,null,null,"","","")
D.dC3=new F.rp("Our Story","","",E.a3N,D.dBY)
D.dF0=new C.Ez("","NGMY","","")
D.dMc=new C.zG("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.V,"","","")
D.e36=new C.b1e(null,null,null,null)
D.e4P=new C.ars(null)
D.e50=new C.arW(0,"smaller")
D.e51=new C.arW(1,"bigger")
D.aHq=new C.arW(2,"fit")
D.ech=new B.t(3,6)
D.ecA=new B.t(4,8)
D.egz=new B.D(E.aid,T.acZ,null)
D.egD=new B.D(A.Zb,A.ml,null)
D.bM4=new B.ae(A.l6,16,A.bX,null,null,null)
D.egH=new B.D(A.ir,D.bM4,null)
D.b93=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.egT=new B.D(A.FV,D.b93,null)
D.bWr=new B.ae(A.cx,16,A.aB,null,null,null)
D.egX=new B.D(A.ey,D.bWr,null)
D.fxd=new B.y("Play",null,A.ox,null,null,null,null,null,null,null,null,null)
D.ddd=w([U.aos,A.rT,D.fxd],x.p)
D.eVM=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.ddd,null)
D.eh_=new B.D(A.ni,D.eVM,null)
D.b9c=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.f0B=new B.a8(20,20,D.b9c,null)
D.eh5=new B.D(A.ir,D.f0B,null)
D.fGs=new B.y("Seconds per slide",null,A.fK,null,null,null,null,null,null,null,null,null)
D.ehd=new B.D(A.bj,D.fGs,null)
D.eiy=new C.a8H(2,"print")
D.eiB=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ekd=new B.hf("/Annot")
D.ekf=new B.hf("/URI")
D.frq=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.emh=new B.jq("share",48,D.frq,null,B.ax("jq<n>"))
D.bWl=new B.ae(A.e3,14,A.eF,null,null,null)
D.emq=new B.cN(null,-2,-2,null,null,null,D.bWl,null)
D.cVb=w([H.afG,A.K],x.O)
D.c1W=new B.a9(A.a3,A.a8,A.x,D.cVb,null,null)
D.b1K=new B.o(null,null,null,null,null,D.c1W,A.n)
D.brB=new B.kS(D.b1K,A.bf,null,null)
D.emC=new B.cN(0,0,null,0,8,null,D.brB,null)
D.di1=w([A.hM,A.ms,A.ca],x.O)
D.enf=new B.c0(A.A,0.5,A.x,null,0,D.di1,null,null)
D.epM=new B.z(0.22,A.bi)
D.euj=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ewq=new B.z(0.5,A.hi)
D.eFI=new B.z(0.78,A.aV)
D.eQG=new B.cx([A.by,0.22,0.7,2.6])
D.eQM=new B.cx([A.bb,0.36,1.2,1.3])
D.eQS=new B.cx([A.dD,0.28,0.2,0.4])
D.eQY=new B.cx([A.cC,0.05,0.3,0.35])
D.eR3=new B.cx([A.bu,0.28,0.9,0])
D.eRb=new B.cx([A.aC,-0.25,-0.15,0.45])
D.eS1=new B.cx([A.c7,0.42,1,4.1])
D.eVu=new B.a9E(9)
D.bNb=new B.ae(A.GQ,28,A.bI,null,null,null)
D.fH0=new B.y("NGMY News",null,A.df,null,null,null,null,null,null,null,null,null)
D.bBF=new B.bA(1,A.bd,D.fH0,null)
D.dlj=w([D.bNb,A.as,D.bBF],x.p)
D.eVG=new B.cb(A.aM,A.e,A.j,A.m,null,A.p,null,0,D.dlj,null)
D.bNm=new B.ae(A.o7,16,A.c,null,null,null)
D.fIz=new B.y("Book",null,A.ou,null,null,null,null,null,null,null,null,null)
D.dpt=w([D.bNm,A.ej,D.fIz],x.p)
D.eVO=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dpt,null)
D.bTX=new B.ae(A.jN,10,A.c,null,null,null)
D.fvh=new B.y("Pro",null,A.nz,null,null,null,null,null,null,null,null,null)
D.ddi=w([D.bTX,A.qw,D.fvh],x.p)
D.eVS=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.ddi,null)
D.fGq=new B.y("Make a newspaper",null,A.Um,null,null,null,null,null,null,null,null,null)
D.c37=w([E.a1J,A.ab,D.fGq],x.p)
D.eVT=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.c37,null)
D.bSt=new B.ae(A.l3,18,A.bM,null,null,null)
D.fxr=new B.y("Ending celebration",null,A.hI,null,null,null,null,null,null,null,null,null)
D.dkm=w([D.bSt,A.bn,D.fxr],x.p)
D.eVW=new B.cb(A.aM,A.e,A.j,A.m,null,A.p,null,0,D.dkm,null)
D.bTJ=new B.ae(A.j9,18,A.k7,null,null,null)
D.fbt=new B.F(!0,A.k7,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIS=new B.y("Write",null,D.fbt,null,null,null,null,null,null,null,null,null)
D.d23=w([D.bTJ,A.ab,D.fIS],x.p)
D.eW2=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.d23,null)
D.fvf=new B.y("Download picture",null,A.ot,null,null,null,null,null,null,null,null,null)
D.bE7=new B.qt(A.e0,A.A,A.f,D.fvf,null)
D.bEi=new B.dr(1,A.cn,D.bE7,null)
D.ddH=w([L.aoj,A.ab,D.bEi],x.p)
D.eW3=new B.cb(A.aM,A.b7,A.j,A.m,null,A.p,null,0,D.ddH,null)
D.bP9=new B.ae(A.GQ,22,A.bI,null,null,null)
D.fF_=new B.y("NGMY NEWS",null,K.a8u,null,null,null,null,null,null,null,null,null)
D.cUC=w([D.bP9,A.ab,D.fF_],x.p)
D.eWc=new B.cb(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.cUC,null)
D.eWo=new B.pg(!1,!1,null,T.Wk,null,A.bZ,null,null,null)
D.a7D=new B.jl([D.cl,D.dg,D.uF,D.Ii,D.uG,D.aHg],B.ax("jl<hF>"))
D.eaL={title:0,quote:1,closing:2,bio:3}
D.eXz=new B.dD(D.eaL,4,x.M)
D.e8F={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eXC=new B.dD(D.e8F,5,x.M)
D.ea3={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a7E=new B.dD(D.ea3,8,x.M)
D.e9g={Design:0,Transitions:1,Insert:2}
D.eXH=new B.dD(D.e9g,3,x.M)
D.hl4=new B.jl([D.a5T],B.ax("jl<w4>"))
D.e9p={float3d:0,drift:1,pulse:2}
D.eXL=new B.dD(D.e9p,3,x.M)
D.aOK=new B.jl([D.If,D.Ig,D.Ih],B.ax("jl<mE>"))
D.e8D={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aON=new B.dD(D.e8D,14,x.M)
D.hl5=new B.dD(A.hX,0,B.ax("dD<w4>"))
D.e9m={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Ts=new B.dD(D.e9m,4,x.M)
D.e8w={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aOQ=new B.dD(D.e8w,30,x.M)
D.e9v={circle:0,triangle:1,hexagon:2,diamond:3}
D.eY7=new B.dD(D.e9v,4,x.M)
D.f_w=new B.at(390,844)
D.f0l=new B.a8(20,20,A.KY,null)
D.aPD=new B.a8(null,2.5,null,null)
D.f0v=new B.a8(18,18,A.KY,null)
D.bTN=new B.ae(A.jb,19,A.c,null,null,null)
D.f0G=new B.a8(38,38,D.bTN,null)
D.bS1=new B.ae(A.yQ,22,A.c,null,null,null)
D.f0I=new B.a8(40,40,D.bS1,null)
D.f1g=new B.hP(2,10,10,1.15,null)
D.aPL=new B.hP(2,16,14,0.62,null)
D.bzG=new B.Q(32,30,32,40)
D.baB=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bN8=new B.ae(A.q7,56,D.baB,null,null,null)
D.agy=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fdy=new B.F(!0,D.agy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBX=new B.y("Your books will live here.",null,D.fdy,null,A.L,null,null,null,null,null,null,null)
D.d4X=w([D.bN8,A.R,D.fBX],x.p)
D.bqy=new B.fj(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.d4X,null)
D.ehb=new B.D(D.bzG,D.bqy,null)
D.f1C=new B.mf(D.ehb,null)
D.fBU=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f1U=new B.b2(D.fBU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fA0=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f1V=new B.b2(D.fA0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fF3=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f23=new B.b2(D.fF3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fFC=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f2i=new B.b2(D.fFC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fyG=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f2v=new B.b2(D.fyG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fMO=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f2O=new B.b2(D.fMO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fJU=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f2Z=new B.b2(D.fJU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fFL=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f3I=new B.b2(D.fFL,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fts=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.f3Z=new B.b2(D.fts,null,null,null,null,null,null,null,A.iC,null,null,null,null,A.pY,!1,null,null,null,A.t,null)
D.fvp=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.f4g=new B.b2(D.fvp,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fBA=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f4i=new B.b2(D.fBA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fBg=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new B.b2(D.fBg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fHP=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f4k=new B.b2(D.fHP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fpD=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f4t=new B.b2(D.fpD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fwz=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f4Q=new B.b2(D.fwz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fLw=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f4S=new B.b2(D.fLw,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fL2=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f4W=new B.b2(D.fL2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.foz=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f4Y=new B.b2(D.foz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fGW=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f56=new B.b2(D.fGW,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fKD=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f5l=new B.b2(D.fKD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fKu=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f5n=new B.b2(D.fKu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.foq=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f5t=new B.b2(D.foq,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fsr=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f5V=new B.b2(D.fsr,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fJH=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f66=new B.b2(D.fJH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.fsf=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f6l=new B.b2(D.fsf,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.t,null)
D.bik=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cTg=w([A.i4,A.oP,D.bik,D.adq,A.i4],x.O)
D.f6J=new B.fW(A.A,0,6.283185307179586,A.x,D.cTg,null,null)
D.d1f=w([A.bM,A.c_,A.hL,D.B4,A.bM],x.O)
D.aQj=new B.fW(A.A,0,6.283185307179586,A.x,D.d1f,null,null)
D.dfu=w([A.c7,A.by,A.bb,A.bo,A.bI,A.c7],x.O)
D.f6O=new B.fW(A.A,0,6.283185307179586,A.x,D.dfu,null,null)
D.cVq=w([A.pU,A.oQ,A.xA,A.i4,A.pU],x.O)
D.f6P=new B.fW(A.A,0,6.283185307179586,A.x,D.cVq,null,null)
D.dfo=w([A.aP,A.bL,A.aL,A.al,A.aP],x.O)
D.f6Q=new B.fW(A.A,0,6.283185307179586,A.x,D.dfo,null,null)
D.dnn=w([A.bu,A.bb,A.by,A.c7,A.bu],x.O)
D.f6S=new B.fW(A.A,0,6.283185307179586,A.x,D.dnn,null,null)
D.be2=new B.u(1,0,1,0,A.q)
D.biD=new B.u(1,0,1,1,A.q)
D.bfI=new B.u(1,0,0,1,A.q)
D.bbU=new B.u(1,1,0,1,A.q)
D.djm=w([A.Le,A.afn,D.be2,D.biD,D.bfI,D.bbU,A.Le],x.O)
D.f6T=new B.fW(A.A,0,6.283185307179586,A.x,D.djm,null,null)
D.f77=new C.aw0(2,"immersiveSticky")
D.f78=new C.aw0(3,"edgeToEdge")
D.f79=new C.aw0(4,"manual")
D.f9y=new B.F(!0,A.oK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQS=new B.F(!0,A.f3,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa8=new B.F(!0,E.n4,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbL=new B.F(!0,A.ae,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcO=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new B.F(!0,A.bX,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdi=new B.F(!0,A.eF,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feK=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feU=new B.F(!0,A.k6,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new B.rL(!0,A.ID,null,null,null,null,A.du,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffB=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgf=new B.F(!0,A.jq,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgD=new B.F(!0,A.aB,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eiE=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.fgH=new B.rL(!0,D.eiE,null,null,null,null,A.du,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.afu=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aRD=new B.F(!0,D.afu,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgP=new B.F(!0,D.agy,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgQ=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRF=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new B.rL(!0,A.pi,null,null,null,null,A.du,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhK=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fif=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fih=new B.F(!0,D.afu,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JF=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new B.F(!0,A.c_,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiT=new B.F(!0,A.bL,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new B.F(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjd=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.axa,null,null,null)
D.fjg=new B.F(!0,A.cs,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fji=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjv=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjH=new B.F(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new B.F(!0,A.aQ,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.F(!0,A.ae,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSf=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSh=new B.F(!0,A.bX,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bo8=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fmo=new B.F(!0,D.bo8,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSn=new B.F(!0,E.n4,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmT=new B.F(!0,A.bL,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmW=new B.F(!0,O.lo,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffP=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fob=new B.y("NEW",null,D.ffP,null,null,null,null,null,null,null,null,null)
D.fou=new B.y("Hati ya Kuhowesha",null,A.fy,null,null,null,null,null,null,null,null,null)
D.foW=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fpj=new B.y("Scrollable PDF on this slide",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fq3=new B.y("Big quote mark",null,A.jh,null,null,null,null,null,null,null,null,null)
D.fq6=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fqJ=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fqL=new B.y("How many slides?",null,A.fK,null,null,null,null,null,null,null,null,null)
D.fri=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fbw=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new B.y("Luxury FX",null,D.fbw,null,null,null,null,null,null,null,null,null)
D.frY=new B.y("Font",null,A.rY,null,null,null,null,null,null,null,null,null)
D.fs9=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.flX=new B.F(!0,A.bL,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fso=new B.y("Example  GA847",null,D.flX,null,null,null,null,null,null,null,null,null)
D.fsO=new B.y("Design shapes",null,A.jh,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new B.y("Non-stop (loop)",null,A.fK,null,null,null,null,null,null,null,null,null)
D.ftg=new B.y("Hati ya Kuhoweya",null,A.fy,null,null,null,null,null,null,null,null,null)
D.ftz=new B.y("Photo studio",null,A.fV,null,null,null,null,null,null,null,null,null)
D.fu2=new B.y("Add your picture",null,A.jZ,null,null,null,null,null,null,null,null,null)
D.ff9=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.y("Enter document code",null,D.ff9,null,A.L,null,null,null,null,null,null,null)
D.fu4=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fu9=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fcE=new B.F(!0,E.n4,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuu=new B.y("Delete this book?",null,D.fcE,null,A.L,null,null,null,null,null,null,null)
D.fhi=new B.F(!0,E.n4,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvr=new B.y("Your library",null,D.fhi,null,null,null,null,null,null,null,null,null)
D.fvx=new B.y("Delete",null,A.aRx,null,null,null,null,null,null,null,null,null)
D.fvA=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.DN,null,null,null,null,null,null,null,null,null)
D.fvM=new B.y("Element flies in",null,A.aRJ,null,null,null,null,null,null,null,null,null)
D.Uw=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fww=new B.y("Cancel",null,E.aRT,null,null,null,null,null,null,null,null,null)
D.fwy=new B.y("The lines and circles that come with the design",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fkL=new B.F(!0,A.hl,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwY=new B.y("DOCUMENT CODE",null,D.fkL,null,null,null,null,null,null,null,null,null)
D.fxN=new B.y("Quotes",null,G.a96,null,null,null,null,null,null,null,null,null)
D.few=new B.F(!0,O.lo,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Add a picture",null,D.few,null,null,null,null,null,null,null,null,null)
D.fy2=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8M,null,A.L,null,null,null,null,null,null,null)
D.fy6=new B.y("Look & feel",null,A.fK,null,null,null,null,null,null,null,null,null)
D.fyc=new B.y("Rings",null,A.hI,null,null,null,null,null,null,null,null,null)
D.fyi=new B.y("W",null,A.rY,null,null,null,null,null,null,null,null,null)
D.fys=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Uj,null,A.L,null,null,null,null,null,null,null)
D.fyO=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fzy=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fzN=new B.y("Malipo ya Awamu ya Mahari",null,A.fy,null,null,null,null,null,null,null,null,null)
D.feZ=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new B.y("Create with AI",null,D.feZ,null,A.L,null,null,null,null,null,null,null)
D.fAv=new B.y("Apply look",null,A.hI,null,null,null,null,null,null,null,null,null)
D.ffG=new B.F(!0,A.eo,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new B.y("Type your presentation below",null,D.ffG,null,A.L,null,null,null,null,null,null,null)
D.fBl=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,K.aSs,null,A.L,null,null,null,null,null,null,null)
D.fBn=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.far=new B.F(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBu=new B.y("Done",null,D.far,null,null,null,null,null,null,null,null,null)
D.fBP=new B.y("Delete",null,A.nA,null,null,null,null,null,null,null,null,null)
D.fBZ=new B.y("Hati ya Kiapo cha Uongozi",null,A.fy,null,null,null,null,null,null,null,null,null)
D.fdQ=new B.F(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCT=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fdQ,null,A.L,null,null,null,null,null,null,null)
D.fDf=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fDl=new B.y("Layout",null,A.Uo,null,null,null,null,null,null,null,null,null)
D.fDZ=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fE6=new B.y("X",null,A.rY,null,null,null,null,null,null,null,null,null)
D.fEH=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,X.DM,null,null,null,null,null,null,null,null,null)
D.fFg=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fFu=new B.y("Hati ya Kuhowa",null,A.fy,null,null,null,null,null,null,null,null,null)
D.fFw=new B.y("Choose a class template",null,A.fy,null,null,null,null,null,null,null,null,null)
D.fFy=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fFF=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fFS=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.y("Done",null,A.aSe,null,null,null,null,null,null,null,null,null)
D.fG8=new B.y("Ending celebration",null,A.df,null,null,null,null,null,null,null,null,null)
D.fG9=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fGo=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,X.v2,null,null,null,null,null,null,null,null,null)
D.fHl=new B.y("Export presentation",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fHm=new B.y("What would you like to do?",null,D.aRD,null,null,null,null,null,null,null,null,null)
D.fHr=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fHY=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fI1=new B.y("Hati (Documents)",null,A.fy,null,null,null,null,null,null,null,null,null)
D.fIe=new B.y("Done",null,A.li,null,null,null,null,null,null,null,null,null)
D.flN=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIj=new B.y("Delete presentation?",null,D.flN,null,A.L,null,null,null,null,null,null,null)
D.fID=new B.y("After the last slide it starts again from the first",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fIP=new B.y("\ud83c\udf33",null,A.Jz,null,A.L,null,null,null,null,null,null,null)
D.fJ6=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fJd=new B.y("Transfer document",null,A.ow,null,null,null,null,null,null,null,null,null)
D.fJo=new B.y("Add to the slides",null,A.fK,null,null,null,null,null,null,null,null,null)
D.fJL=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fK_=new B.y("Make a book",null,I.aRa,null,null,null,null,null,null,null,null,null)
D.fK3=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fep=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK4=new B.y("Keep this page open until it finishes.",null,D.fep,null,null,null,null,null,null,null,null,null)
D.fK6=new B.y("Making your video",null,A.df,null,null,null,null,null,null,null,null,null)
D.fKb=new B.y("LANGUAGE",null,W.rZ,null,null,null,null,null,null,null,null,null)
D.fKi=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fKq=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fKs=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fKJ=new B.y("Delete from the database?",null,A.jZ,null,null,null,null,null,null,null,null,null)
D.fKK=new B.y("H",null,A.rY,null,null,null,null,null,null,null,null,null)
D.fL8=new B.y("NGMY Quotes",null,A.df,null,null,null,null,null,null,null,null,null)
D.fLB=new B.y("Cover",null,D.aSn,null,null,null,null,null,null,null,null,null)
D.fLF=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new B.y("Each page becomes its own slide you can present",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fM1=new B.y("Y",null,A.rY,null,null,null,null,null,null,null,null,null)
D.fMc=new B.y("Crop the picture",null,A.li,null,null,null,null,null,null,null,null,null)
D.fMj=new B.y("Edit text",null,A.JA,null,null,null,null,null,null,null,null,null)
D.fOA=B.dT("a8t")
D.DY=new C.axj(0,"none")
D.aVU=new C.axj(1,"zipCrypto")
D.aVV=new C.axj(2,"aes")
D.h8M=new F.Px("","",null)
D.h9S=new C.bco(null)
D.hb1=new C.ZE(null)
D.hdL=new C.adk(null)
D.hdN=new C.aEr(null)
D.hgy=new C.a_T(null)
D.hgO=new C.a0p(null)
D.hh8=new C.btR(null)})();(function staticFields(){$.hfU=null
$.hfV=null
$.hfW=null
$.hfX=null
$.fYD=B.v9("_lastQuoRemDigits")
$.fYE=B.v9("_lastQuoRemUsed")
$.axF=B.v9("_lastRemUsed")
$.fYF=B.v9("_lastRem_nsh")
$.qg=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7g=B.U(x.N,x.I)
$.fW4=!1
$.hkL=B.U(B.ax("kV"),x.N)
$.hkY=B.U(B.ax("kV"),x.E)
$.hiY=!1
$.bzn="q"
$.Qw=0
$.CJ=B.U(x.N,B.ax("ai<zH>"))
$.hjj=!1
$.h_e=!1
$.hpE=null
$.hU5=B.U(x.N,B.ax("aA<n?>"))
$.Kv=""
$.j3=0
$.hcG=function(){var w=x.N
return B.U(w,w)}()
$.hcF=B.U(x.N,x.R)
$.h_z=!1
$.ag3=B.U(x.N,x.E)
$.h0n=0
$.bkk=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iix","D3",()=>C.b9V(0))
w($,"iiv","a2E",()=>C.b9V(1))
w($,"iiw","htk",()=>C.b9V(2))
w($,"iiu","h4l",()=>$.a2E().v7(0))
w($,"iis","hti",()=>C.b9V(1e4))
w($,"iit","htj",()=>B.Ef(8))
w($,"iei","hrk",()=>B.Ef(0))
w($,"ieq","hro",()=>B.Ef(0))
w($,"iep","hrn",()=>B.bZV(0))
w($,"img","hvl",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4J.gdR(D.a4J),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"imH","bDS",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mZ(new C.fGz(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mZ(new C.fGA(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mZ(new C.fGB(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mZ(new C.fGM(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mZ(new C.fGR(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mZ(new C.fGS(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mZ(new C.fGT(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mZ(new C.fGU(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mZ(new C.fGV(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mZ(new C.fGW(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mZ(new C.fGX(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mZ(new C.fGC(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mZ(new C.fGD(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mZ(new C.fGE(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mZ(new C.fGF(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mZ(new C.fGG(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mZ(new C.fGH(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mZ(new C.fGI(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mZ(new C.fGJ(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mZ(new C.fGK(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mZ(new C.fGL(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mZ(new C.fGN(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mZ(new C.fGO(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mZ(new C.fGP(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mZ(new C.fGQ(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<EI>"))})
w($,"imj","hvn",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["mT6sSRfv9yIqK+DQ5H0kOk+S6Fo="]=a.current})($__dart_deferred_initializers__);